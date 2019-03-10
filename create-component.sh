#!/bin/bash

# Creates a React component
# rooted in the src folder

COMPONENT_NAME=$1
SRC_FOLDER="src/components/$2"
CSS_FOLDER="src/css/$2"
TEST_FOLDER="src/tests/$2"

cp template.js "$SRC_FOLDER$COMPONENT_NAME.js"
cp template.css "$CSS_FOLDER$COMPONENT_NAME.css"
cp template.test.js "$TEST_FOLDER$COMPONENT_NAME.test.js"

sed -i '' "s/{{TEMPLATE}}/$COMPONENT_NAME/g" "$SRC_FOLDER$COMPONENT_NAME.js"
sed -i '' "s/{{TEMPLATE}}/$COMPONENT_NAME/g" "$CSS_FOLDER$COMPONENT_NAME.css"
sed -i '' "s/{{TEMPLATE}}/$COMPONENT_NAME/g" "$TEST_FOLDER$COMPONENT_NAME.test.js"
