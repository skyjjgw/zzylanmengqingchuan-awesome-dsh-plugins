#!/usr/bin/env node
import { readFile } from 'node:fs/promises';

const path = new URL('../catalog/plugins.json', import.meta.url);
const text = await readFile(path, 'utf8');
const catalog = JSON.parse(text);

const required = [
  'id', 'name', 'category', 'repository', 'install', 'license',
  'verification', 'compatibility', 'why', 'caution', 'source_reviewed', 'reviewed_on'
];
const allowedVerification = new Set([
  'locally-installed-and-used',
  'locally-installed-configured',
  'source-reviewed',
  'watchlist'
]);
const ids = new Set();
const failures = [];

if (catalog.schema !== 'awesome-dsh-plugins/v1') failures.push('invalid schema');
if (!Array.isArray(catalog.plugins) || catalog.plugins.length === 0) failures.push('plugins must be a non-empty array');

for (const [index, plugin] of (catalog.plugins ?? []).entries()) {
  for (const key of required) {
    if (typeof plugin[key] !== 'string' || plugin[key].trim() === '') {
      failures.push(`plugins[${index}] missing ${key}`);
    }
  }
  if (ids.has(plugin.id)) failures.push(`duplicate id: ${plugin.id}`);
  ids.add(plugin.id);
  if (!/^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(plugin.repository ?? '')) {
    failures.push(`${plugin.id}: repository must be an https GitHub URL`);
  }
  if (!allowedVerification.has(plugin.verification)) {
    failures.push(`${plugin.id}: invalid verification ${plugin.verification}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(plugin.reviewed_on ?? '')) {
    failures.push(`${plugin.id}: reviewed_on must be YYYY-MM-DD`);
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `✗ ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`✓ catalog valid: ${catalog.plugins.length} plugins`);
