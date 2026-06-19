import re

with open('client/src/lib/courses.ts', 'r') as f:
    content = f.read()

# Shared standard data for what's included and target audience
standard_fields = """
    projects: [
      { title: "Real-World Case Study 1", description: "Apply your skills to solve an industry-standard problem using modern frameworks." },
      { title: "Portfolio Capstone Project", description: "Build a complete, end-to-end project to showcase your expertise to potential employers." },
      { title: "Live API Integration", description: "Connect with external data sources and APIs to build dynamic, real-time applications." },
      { title: "Performance Optimization", description: "Audit and optimize your application for speed, security, and scalability." }
    ],
    whatsIncluded: [
      {
        feature: "Free Aptitude and Technical Skills Training",
        details: [
          "Learn basic maths and logical thinking to solve problems easily",
          "Understand simple coding and technical concepts step by step",
          "Get ready for exams and interviews with regular practice"
        ]
      },
      {
        feature: "Hands-On Projects",
        details: [
          "Work on real-time projects to apply what you learn",
          "Build mini apps and tools daily to enhance your coding skills"
        ]
      },
      {
        feature: "AI Powered Self Interview Practice Portal",
        details: [
          "Practice interview questions with instant AI feedback",
          "Improve your answers by speaking and reviewing them"
        ]
      }
    ],
    targetAudience: [
      "IT Professionals",
      "Non-IT Career Switchers",
      "Fresh Graduates",
      "Diploma Holders",
      "Graduates with Less Than 60%"
    ],
    keySkills: [
      {
        skill: "Core Technical Mastery",
        description: "Develop a strong foundation in the primary tools and languages of this domain."
      },
      {
        skill: "Problem Solving",
        description: "Learn to approach complex business problems with logical, structured solutions."
      },
      {
        skill: "Project Architecture",
        description: "Understand how to design and structure large-scale applications from scratch."
      },
      {
        skill: "Industry Best Practices",
        description: "Adopt coding standards, version control, and methodologies used by top tech companies."
      }
    ]
"""

# We need to find the end of each course object.
# The courses are defined as `{ id: "1", ... },`
# We can find `    ]\n  },` or `    ]\n  }` and replace it with `    ],` + standard_fields + `  },`
# However, we only want to do this for courses that DON'T already have it.
# Data Science (id: "2") already has it. Let's see if we can do this safely.

# Split the content by `  },\n  {\n    id:`
# Actually, the easiest way is to match the end of `modules` array and insert the fields.
# `    ]\n  }` or `    ]\n  },`

new_content = ""
courses_str = content.split("export const courses: Course[] = [")[1]
prefix = content.split("export const courses: Course[] = [")[0] + "export const courses: Course[] = ["

course_blocks = re.split(r'\n  },\n  {\n', courses_str)

modified_blocks = []
for i, block in enumerate(course_blocks):
    # Only add if 'projects:' is not in the block
    if 'projects:' not in block:
        # Find the last `    ]` which belongs to `modules:`
        # It's usually at the end of the block.
        if block.endswith('\n    ]'):
            block = block + "," + standard_fields
        elif block.endswith('\n    ]\n]'): # end of file
            block = block[:-2] + "," + standard_fields + "\n]"
        elif block.endswith('\n    ];'):
            block = block[:-2] + "," + standard_fields + "\n];"
        else:
            # Let's just do a regex replace on the last `    ]`
            block = re.sub(r'    \]$', '    ],' + standard_fields, block)
            block = re.sub(r'    \]\n\];$', '    ],' + standard_fields + '\n];', block)
    modified_blocks.append(block)

new_courses_str = '\n  },\n  {\n'.join(modified_blocks)
final_content = prefix + new_courses_str

with open('client/src/lib/courses.ts', 'w') as f:
    f.write(final_content)

print("Done")
