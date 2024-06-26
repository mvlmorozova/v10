#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'fs';

import showInfo from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = process.argv[2];
// console.log(process.argv);
const content = fs.readFileSync(path.join(
  __dirname,
  '..',
  fileName,
), 'utf-8'); // comment

showInfo(content);
