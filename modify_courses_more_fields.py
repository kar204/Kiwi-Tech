import re

with open('client/src/lib/courses.ts', 'r') as f:
    content = f.read()

# We need to add stats, bullets, targetRole to ALL courses.
# They are only present in id: "1" and id: "2".

# Shared standard data for stats, bullets, targetRole
stats_str = """    targetRole: "Software Engineer",
    bullets: [
      "Master the fundamental and advanced concepts with hands-on practice",
      "Complete career assistance with placement opportunities from top companies",
      "Work on real-time projects and case studies applying modern industry practices",
      "Beginner-friendly sessions with personalized career mentorship",
      "Earn an industry-recognized certification supporting placement and career growth"
    ],
    stats: [
      { label: "Freshers To IT", value: "12,500+" },
      { label: "NON-IT To IT", value: "6,200+" },
      { label: "Career Gap", value: "8,100+" },
      { label: "Less Then 60%", value: "5,300+" }
    ],"""

new_content = ""
courses_str = content.split("export const courses: Course[] = [")[1]
prefix = content.split("export const courses: Course[] = [")[0] + "export const courses: Course[] = ["

course_blocks = re.split(r'\n  },\n  {\n', courses_str)

modified_blocks = []
for i, block in enumerate(course_blocks):
    # Only add if 'targetRole:' is not in the block
    if 'targetRole:' not in block:
        # We can insert it after `discountedPrice: xxxx,`
        block = re.sub(r'(discountedPrice:\s*\d+,)', r'\1\n' + stats_str, block)
    modified_blocks.append(block)

new_courses_str = '\n  },\n  {\n'.join(modified_blocks)
final_content = prefix + new_courses_str

with open('client/src/lib/courses.ts', 'w') as f:
    f.write(final_content)

print("Added targetRole, bullets, and stats to all courses.")
