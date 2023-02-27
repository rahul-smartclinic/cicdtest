#!/bin/bash
cd /home/ec2-user/my-server
npm install
pm2 start index.js

