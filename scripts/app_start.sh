#!/bin/bash

# Move to the project directory
cd /home/ec2-user/bahamian-fact-generator || exit 1

sudo nginx -t && sudo systemctl reload nginx

