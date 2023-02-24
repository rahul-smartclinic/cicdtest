#!/bin/bash
cd /home/ec2-user
npm install
npm install -g pm2
pm2 start index.js

