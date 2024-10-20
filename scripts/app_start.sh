#!/bin/bash

# Move to the project directory
cd /home/ec2-user/bahamian-fact-generator || exit 1

# Delete all running PM2 processes
sudo pm2 delete all || echo "No PM2 processes to delete."

# Start the app with PM2
sudo pm2 start "npm run dev" --name "bahamian-fact-generator"
