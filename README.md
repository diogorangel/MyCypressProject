# MyCypressProject capacitação Minsait
1ª Comands cypress:

npm install --save-dev @types/cypress
npm install cypress@14.0.0 --save-dev
npm init -y
npx cypress install 
npm install cypress@14.0.0
- npx cypress open
- yarn cypress open
- pnpm cypress open
 updated
 
Instruções adicionais caso haja necessidade:
1. Desabilitar verificação de certificado no npm
npm config set strict-ssl false
npm config set registry "http://registry.npmjs.org/"

2. Desabilitar SSL no Cypress

Antes de instalar, configure estas variáveis de ambiente (no PowerShell ou CMD):

setx NODE_TLS_REJECT_UNAUTHORIZED 0
setx CYPRESS_INSTALL_BINARY 0


🔹 NODE_TLS_REJECT_UNAUTHORIZED=0 → ignora verificação SSL.
🔹 CYPRESS_INSTALL_BINARY=0 → pula o download automático do binário.

Depois rode:

npm install cypress --ignore-scripts