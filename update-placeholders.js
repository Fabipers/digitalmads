const fs = require('fs');
const path = require('path');

const files = [
  'src/components/industrias/FintechClient.tsx',
  'src/components/industrias/EcommerceClient.tsx',
  'src/components/industrias/SaludClient.tsx',
  'src/components/servicios/DesarrolloLlmClient.tsx',
  'src/components/ContactoClient.tsx',
  'src/components/ConsultoriaClient.tsx',
  'src/components/integraciones/WhatsappClient.tsx',
  'src/components/integraciones/CrmClient.tsx',
  'src/components/HomeClient.tsx',
  'src/components/BogotaClient.tsx',
  'src/components/AuditoriaClient.tsx'
];

const dir = '/Users/fabianperez/.gemini/antigravity/scratch/digitalmads';

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('+57 300 123 4567')) {
      content = content.replaceAll('+57 300 123 4567', '+57 350 261 7242');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated placeholders in: ${file}`);
    }
  } else {
    console.warn(`File not found: ${file}`);
  }
});
