const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const historyDir = path.join(projectRoot, "public", "galeria", "historico");
const outputFile = path.join(projectRoot, "src", "historyGallery.js");

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
const videoExtensions = [".mp4", ".webm", ".mov"];

function getMediaType(fileName) {
  const ext = path.extname(fileName).toLowerCase();

  if (imageExtensions.includes(ext)) return "image";
  if (videoExtensions.includes(ext)) return "video";

  return null;
}

if (!fs.existsSync(historyDir)) {
  console.error("Pasta não encontrada:", historyDir);
  process.exit(1);
}

const files = fs
  .readdirSync(historyDir)
  .filter((fileName) => getMediaType(fileName))
  .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));

const items = files.map((fileName) => {
  const type = getMediaType(fileName);

  return {
    type,
    src: `/galeria/historico/${fileName}`,
  };
});

const fileContent = `const historyGallery = ${JSON.stringify(items, null, 2)};

export default historyGallery;
`;

fs.writeFileSync(outputFile, fileContent, "utf8");

console.log(`Galeria gerada com sucesso: ${items.length} arquivos encontrados.`);
console.log(`Arquivo criado em: ${outputFile}`);