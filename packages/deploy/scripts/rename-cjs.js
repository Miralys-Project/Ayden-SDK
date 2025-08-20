import fs from 'fs';
import path from 'path';

const dir = path.resolve('dist/cjs');

function walk(dir) {
    for (const file of fs.readdirSync(dir)) {
        const full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) {
            walk(full);
        } else if (file.endsWith('.js')) {
            fs.renameSync(full, full.replace(/\.js$/, '.cjs'));
        }
    }
}

walk(dir);
