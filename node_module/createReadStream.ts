import * as fs from 'fs';

const stream = fs.createReadStream('./read.txt', { highWaterMark: 1});
const data = [];

stream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data : ', chunk, chunk.length);
});

stream.on('end', (): void => {
  console.log('end : ', Buffer.concat(data).toString());
});
