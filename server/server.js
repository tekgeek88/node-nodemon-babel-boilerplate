import dotenv from 'dotenv';
dotenv.config();

console.log('Ready to install a server and get started...');

const ENVIRONMENT_VALUE = process.env.MY_SECRET || 'No key MY_SECRET was found in a local .env file';
console.log(ENVIRONMENT_VALUE);