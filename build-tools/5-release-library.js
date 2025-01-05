// build-tools/5-release-library.js
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Function to execute a command and handle errors
function runCommand(command, errorMessage, exitCode) {
  try {
    execSync(command, { stdio: 'inherit', shell: true });
  } catch (error) {
    console.error(errorMessage);
    process.exit(exitCode);
  }
}

// Navigate to the root directory
process.chdir(path.join(__dirname, '..'));

// Check commit state
runCommand('node ./build-tools/release/check-commit-state.js', 'Error 51: check-commit-state.js failed', 51);

// Generate SBOM
runCommand('npx @cyclonedx/cyclonedx-npm --output-file sbom.json --mc-type library', 'Error 52: npm SBOM generation failed', 52);

// Build base library
runCommand('node ./build-tools/1-build-base-library.js', 'Error 53: build-base-library.js failed', 53);

// Build library
runCommand('node ./build-tools/2-build-library.js', 'Error 54: build-library.js failed', 54);

// Publish to npm
process.chdir('dist/ngx-extended-pdf-viewer');
runCommand('npm publish', 'Error 55: npm publish failed', 55);
process.chdir(path.join('..', '..'));

// Create tag
runCommand('node ./build-tools/release/createTag.js', 'Error 56: createTag.js failed', 56);

// Increase version number
runCommand('node ./build-tools/release/increase-version-number.js', 'Error 57: increase-version-number.js failed', 57);

// Read the new version number
const packageJsonPath = path.join('projects', 'ngx-extended-pdf-viewer', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

// Commit changes
runCommand(`git commit . -m "bumped the version number after publishing ${version}"`, 'Error 58: Git commit failed', 58);

// Change directory to mypdf.js and checkout 4.7
process.chdir(path.join('..', 'mypdf.js'));
runCommand('git checkout 4.7', 'Error 59: Git checkout failed', 59);

// Extract versions
runCommand('node ../ngx-extended-pdf-viewer/build-tools/base-library/extract-versions.js', 'Error 60: extract-versions.js failed', 60);

// Commit changes in mypdf.js
runCommand(`git commit . -m "bumped the version number after publishing ${version}"`, 'Error 61: Git commit in mypdf.js failed', 61);

console.log('Library released successfully');
