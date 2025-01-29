// deploy.js
import { execSync } from 'child_process';

try {
  // Obtener el mensaje del último commit
  const lastCommitMessage = execSync('git log -1 --pretty=%B').toString().trim();

  console.log("lastCommitMessage", lastCommitMessage);
  

  // Ejecutar el comando gh-pages con el mensaje del último commit
  execSync(`npx gh-pages -d dist --nojekyll --message "${lastCommitMessage}"`, { stdio: 'inherit' });
} catch (error) {
  console.error('Error durante el despliegue:', error.message);
}
