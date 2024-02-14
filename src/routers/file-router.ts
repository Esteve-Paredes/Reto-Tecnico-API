import express from "express";
import multer from "multer";
import { saveFile } from "../utils/save-files";
import { readFile } from "../utils/read-file";

const fileRouter = express.Router();

// Multer
const upload = multer({ dest: "uploads/" });

fileRouter.post("/", upload.single("data-table"), async (req, res, next) => {
  console.log(req.file);
  const newPath = saveFile(req.file);
  const objectData = readFile(newPath);
  console.log(objectData);
  try {
    res.json({
      ok: true,
      data: "hola",
    });
  } catch (error) {
    next(error);
  }
});

export default fileRouter;
