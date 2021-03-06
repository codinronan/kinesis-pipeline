#!/bin/bash

region=us-east-1
env=${1:-dev}

echo "--- Running sls deploy for env: [${env}] ---"

npm i
npx serverless deploy --stage $env --region $region