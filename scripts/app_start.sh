cd /home/ec2-user/bahamian-fact-generator

pm2 delete all
pm2 start "npm run dev" --name "bahamian-fact-generator"
