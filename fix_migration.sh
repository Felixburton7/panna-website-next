#!/usr/bin/env bash
#
# fix_migration.sh
#
# A script to automate common fixes when migrating from React to Next.js.
#
# Usage:
#   1. Place this script in the root directory of your project.
#   2. Make it executable: chmod +x fix_migration.sh
#   3. Run it: ./fix_migration.sh
#

set -e

# Directory to scan
TARGET_DIR="./src"

# Colours for logging
RED='\033[0;31m'
GREEN='\033[0;32m'
BOLD='\033[1m'
NC='\033[0m' # No Color

echo -e "${BOLD}=== Starting fix_migration.sh ===${NC}"
echo "This script will modify .js and .jsx files in: $TARGET_DIR"
echo

# Find all .js and .jsx files
FILES=$(find "$TARGET_DIR" -type f \( -name "*.js" -o -name "*.jsx" \))

if [ -z "$FILES" ]; then
  echo -e "${RED}No .js or .jsx files found under $TARGET_DIR. Exiting...${NC}"
  exit 0
fi

# Loop through each file
for FILE in $FILES; do
  echo -e "${GREEN}Processing: $FILE${NC}"

  # 1. Remove invalid imports like: import "..app/home";
  sed -i.bak '/import[[:space:]]*".*app\/home";/d' "$FILE"

  # 2. Replace react-typed import
  sed -i.bak 's/import[[:space:]]*{\s*ReactTyped\s*as\s*Typed\s*} from\s*"react-typed";/import Typed from "react-typed";/g' "$FILE"

  # 3. Remove image imports from ../public/assets
  sed -i.bak '/import\s\+\S\+\s\+from\s\+"\.\.\/public\/assets\/.*";/d' "$FILE"

  # 4. Add "use client"; at the top if React hooks are used and not present
  if grep -Eq 'useState|useEffect' "$FILE"; then
    # Check if "use client"; is already present in the first 5 lines
    HEAD_LINES=$(head -n 5 "$FILE")
    if ! echo "$HEAD_LINES" | grep -q '"use client"'; then
      # Insert "use client"; at the top
      # For macOS sed, use a backslash-newline after 'i'
      sed -i.bak '1i\
"use client";

' "$FILE"
    fi
  fi

  # 5. Remove react-router-dom imports
  sed -i.bak '/import\s\+{\?\s*\S*\s*\}*\s\+from\s\+"react-router-dom";/d' "$FILE"

  # 6. Optionally, replace Link imports with Next.js Link
  # Uncomment the following lines if you want to replace react-router-dom's Link with Next.js's Link
  # Only works if <Link> usage is compatible
  # if grep -q '<Link ' "$FILE"; then
  #   sed -i.bak 's/import\s\+{\?\s*Link\s*\}*\s\+from\s\+"react-router-dom";/import Link from "next/link";/' "$FILE"
  # fi

  # 7. Handle layout.jsx to ensure global CSS is imported correctly
  if [[ "$FILE" == *"layout.jsx" ]]; then
    # Replace import of globals.css with correct path
    sed -i.bak 's/import\s\+".*app\/global\.css";/import "../globals.css";/' "$FILE"
  fi

  # 8. Remove any remaining react-router-dom usage warnings
  # Could add more patterns here as needed

  # Clean up backup file
  rm -f "${FILE}.bak"
done

echo
echo -e "${BOLD}All done.${NC} Please review your files for correctness."
echo "You may need to manually adjust image references and Link components."
