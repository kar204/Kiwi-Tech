import re

with open('client/index.html', 'r') as f:
    content = f.read()

# We need to add the og:image and twitter:image tags if they don't exist
# Also add twitter:site

if '<meta property="og:image"' not in content:
    og_image = '<meta property="og:image" content="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />'
    content = content.replace('<meta property="og:type" content="website" />', '<meta property="og:type" content="website" />\n    ' + og_image)

if '<meta name="twitter:image"' not in content:
    twitter_image = '<meta name="twitter:image" content="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />'
    content = content.replace('<meta name="twitter:description"', twitter_image + '\n    <meta name="twitter:description"')

if '<meta name="twitter:site"' not in content:
    twitter_site = '<meta name="twitter:site" content="@kiwitech" />'
    content = content.replace('<meta name="twitter:card"', twitter_site + '\n    <meta name="twitter:card"')

with open('client/index.html', 'w') as f:
    f.write(content)

print("Meta tags updated.")
