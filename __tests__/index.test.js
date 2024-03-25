// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';

import { execSync } from 'child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = { encoding: 'utf8', cwd: path.join(__dirname, '..') };
const result1 = execSync(
  'bin/cars.js __fixtures__/cars1.csv',
  // @ts-ignore
  options,
);
const result2 = execSync(
  'bin/cars.js __fixtures__/cars2.csv',
  // @ts-ignore
  options,
);

const rows1 = result1.trim().split('\n');
const rows2 = result2.trim().split('\n');

test('step1', () => {
  assert.strictEqual(rows1[0], 'Count: 22');
  assert.strictEqual(rows2[0], 'Count: 24');
});

test('step2', () => {
  assert.strictEqual(rows1[1], 'Brands: Audi, BMW, Cadillac, Chevrolet, Ford, GMC, Honda, Hyundai, Infiniti, Jeep, '
    + 'Kia, Lexus, Mazda, Mercedes-Benz, Mitsubishi, Nissan, Porsche, Ram, Subaru, Tesla, Toyota, Volvo');
  assert.strictEqual(rows2[1], 'Brands: Audi, BMW, Cadillac, Chevrolet, Ford, GMC, Honda, Hyundai, Infiniti, '
    + 'Jaguar, Jeep, Kia, Land Rover, Lexus, Mazda, Mercedes-Benz, Mitsubishi, Nissan, Porsche, Ram, Subaru, '
    + 'Tesla, Toyota, Volvo');
});

test('step3', () => {
  assert.strictEqual(rows1[2], 'Cars price: Min price: 17999, Max price: 91999');
  assert.strictEqual(rows2[2], 'Cars price: Min price: 16999, Max price: 109999');
});

test('step4', () => {
  assert.strictEqual(rows1[3], 'Max Europe sale: 80000');
  assert.strictEqual(rows2[3], 'Max Europe sale: 120000');
});

test('step5', () => {
  assert.strictEqual(rows1[4], 'Outsider: Mitsubishi Outlander');
  assert.strictEqual(rows2[4], 'Outsider: Jaguar F-Type');
});
