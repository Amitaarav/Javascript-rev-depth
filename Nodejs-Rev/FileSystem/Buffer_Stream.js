import fs from 'fs';
import path from 'path';
import { dirname } from 'path';

// const filePath = path.join('amit.txt');
const stream = fs.createReadStream(dirname,'amit.txt');

stream.on('data', chunk => {
  console.log('Received chunk:', chunk.toString());
});
stream.on('error', err => {
  console.error('Stream error:', err.message);
});
