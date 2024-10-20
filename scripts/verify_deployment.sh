# scripts/verify_deployment.sh
if [ -f /var/www/html/index.html ]; then
  echo "Deployment successful: index.html found."
else
  echo "Deployment failed: index.html missing."
  exit 1
fi
