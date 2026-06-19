import re

with open('client/src/lib/courses.ts', 'r') as f:
    content = f.read()

# We need to add projects, whatsIncluded, targetAudience, and keySkills to ALL courses.
# Right now, they might only be in Data Science and AI Training (id: "2"). Let's check.
