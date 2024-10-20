#!/bin/bash
set -e
exec > /var/log/clean_build_directory.log 2>&1

sudo rm -rf /var/www/html/*
echo "Cleaned build directory."
