const tasks = require('./tasks');

console.log('[Copy assets]');
console.log('-'.repeat(80));
tasks.copyAssets('dev');

console.log('[Webpack Build]');
console.log('-'.repeat(80));
exec('webpack --config webpack.config.js --progress --profile --colors');
