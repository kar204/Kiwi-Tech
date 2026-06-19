import re
import json

with open('client/src/lib/courses.ts', 'r') as f:
    content = f.read()

# We need to make sure the syllabus (`modules` array) inside courses.ts has the same robust structure
# { title: string; description: string } for ALL topics instead of just plain strings.

def replace_string_topics_in_modules(text):
    # This is a bit complex to do safely with regex. 
    # Let's write a simple python parser for the JS object or just do it via regex carefully.
    
    # We are looking for strings inside topics: [ ... ] that are just "Some text" and replacing them
    # with { title: "Some text", description: "Learn about Some text and its industry applications in this comprehensive module." }
    
    # Find all topics arrays
    topics_pattern = re.compile(r'topics:\s*\[([\s\S]*?)\]', re.MULTILINE)
    
    def replacer(match):
        topics_content = match.group(1)
        # Find all string literals "..."
        # Be careful not to match strings inside already formed objects
        # A simple heuristic: if the line has `{ title:`, we skip it.
        lines = topics_content.split('\n')
        new_lines = []
        for line in lines:
            if '{ title:' in line:
                new_lines.append(line)
            elif '"' in line and not '{' in line:
                # Extract the string
                m = re.search(r'"([^"]+)"', line)
                if m:
                    topic_name = m.group(1)
                    # Replace the string with an object
                    new_line = line.replace('"{}"'.format(topic_name), '{{ title: "{}", description: "Dive deep into {} with practical hands-on examples, industry best practices, and real-world applications tailored for professionals." }}'.format(topic_name, topic_name))
                    new_lines.append(new_line)
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        return 'topics: [' + '\n'.join(new_lines) + ']'

    return topics_pattern.sub(replacer, text)

new_content = replace_string_topics_in_modules(content)

with open('client/src/lib/courses.ts', 'w') as f:
    f.write(new_content)

print("Modules topics transformed successfully.")
