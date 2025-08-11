#!/bin/bash
set -e

VERSION=$(grep '"version"' package.json | head -1 | sed -E 's/[^0-9.]//g')

MAJOR=$(echo $VERSION | cut -d. -f1)
MINOR=$(echo $VERSION | cut -d. -f2)
PATCH=$(echo $VERSION | cut -d. -f3)

MINOR=$((MINOR + 1))
PATCH=0

NEW_VERSION="$MAJOR.$MINOR.$PATCH"

sed -i.bak "s/\"version\": \"$VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json
rm package.json.bak

echo "Versión actualizada: $VERSION → $NEW_VERSION"