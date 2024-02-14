import fs from "fs";

export function saveFile(file: Express.Multer.File | undefined) {
  if (file) {
    const newPath = `./uploads/${file.originalname}`;
    fs.renameSync(file.path, newPath);
    return newPath;
  }
}
