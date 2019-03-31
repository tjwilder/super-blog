#!/bin/bash

# TODO: Don't use this, load it automatically!
# For now, we'll copy the blog posts directly into the src folder so CRA can find them

# Copy just the numbered files
cp ./blog_posts/*_*.md ./src/static
