#!/bin/bash

git add .

echo

echo "Adding files..."

echo

echo "Added files!"

echo

echo "Enter your commit message:"

read varname

echo

git commit -m "$varname"

echo

echo "Commit done!"

echo

echo "Pushing files to GitHub repository..."

echo

git push

echo

echo "Push done!"

echo

echo "Process completed!"