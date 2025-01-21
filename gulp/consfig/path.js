import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
const srcFolder = `./src`;

export const path = {
  build: {
    files: `${srcFolder}/files/`,
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
  },
  clear: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}
