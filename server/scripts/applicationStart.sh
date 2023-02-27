#!/bin/bash
source /home/ec2-user/.bashrc
cd /home/ec2-user/clinic-server
SECRET_KEY=$(aws secretsmanager get-secret-value --secret-id cicdserverenvkeys --region us-east-1 --query SecretString --output text| jq .SECRET_KEY)
SECRET_KEY2=$(aws secretsmanager get-secret-value --secret-id cicdserverenvkeys --region us-east-1 --query SecretString --output text| jq .SECRET_KEY2)

echo "SECRET_KEY=$SECRET_KEY" > .env
echo "SECRET_KEY2=$SECRET_KEY2" >> .env

npm install
pm2 start index.js

