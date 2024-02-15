import express from "express";
import multer from "multer";
import { saveFile } from "../utils/save-files";
import { readFile } from "../utils/read-file";
import { postData } from "../services/file-services";

const fileRouter = express.Router();

// Multer
const upload = multer({ dest: "uploads/" });

fileRouter.post("/", upload.single("data-table"), async (req, res, next) => {
  const newPath = saveFile(req.file);
  const objectData = readFile(newPath);
  const { response, errors } = await postData(objectData);

  try {
    res.json({
      ok: true,
      data: {
        success: response,
        errors: errors,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default fileRouter;
