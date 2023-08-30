const { execSync } = require('child_process');

try {
  const command = 'npm run image:unused';

  console.log(`Running command: ${command}`);
  execSync(command, { stdio: 'inherit' });

  console.log('No unused images found!.');
} catch (error) {
  console.error('Pre-commit checks failed:');
  console.error(error.message);
  process.exit(1); // Exit with a non-zero status code to indicate failure
}
