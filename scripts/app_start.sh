cd /home/ec2-user/bahamian-fact-generator

sudo pm2 delete all
sudp pm2 start "npm run dev" --name "bahamian-fact-generator"
