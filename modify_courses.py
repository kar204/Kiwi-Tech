import re
import os

with open('client/src/lib/courses.ts', 'r') as f:
    content = f.read()

# For any module where topics is a list of strings like: topics: ["A", "B", "C", "D"]
# We will find them and replace with objects
# Wait, it's easier to just use sed or regex in python for the specific strings.

import ast

def replace_modules(text):
    # This is a bit complex for simple regex. Let's just write the specific replacements for each course using simple strings.
    pass

