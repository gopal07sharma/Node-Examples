import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const getCurrentPath = () => {
    const url = new URL(import.meta.url);
    return fileURLToPath(url);
}

const filePath = getCurrentPath();

fs.readFile(filePath, (err, content) => {
    if(err) {
        console.log('Error:', err)
    } else {
        console.log('Content:', content.toString());
    }
});

var a = 10;
var b = 20;
var c = a + b;
console.log('Sum is:', c);
