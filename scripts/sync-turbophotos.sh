#!/bin/bash

# Sync script to copy files from Desktop turbophotos to public/turbophotos
# Run this script whenever you add new files to /Users/venorthjeyan/Desktop/turbophotos

SOURCE_DIR="/Users/venorthjeyan/Desktop/turbophotos"
TARGET_DIR="$(pwd)/public/turbophotos"

echo "🔄 Syncing turbophotos files..."
echo "Source: $SOURCE_DIR"
echo "Target: $TARGET_DIR"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy all files
cp -r "$SOURCE_DIR"/* "$TARGET_DIR"/

echo "✅ Files synced successfully!"
echo ""
echo "📝 Next steps:"
echo "   1. Review changes: git status"
echo "   2. Add files: git add public/turbophotos/"
echo "   3. Commit: git commit -m 'Update turbophotos media files'"
echo "   4. Push: git push origin main"

