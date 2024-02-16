import express from "express";
import multer from "multer";
import { saveFile } from "../utils/save-files";
import { readFile } from "../utils/read-file";
import { postData, postDataFixed } from "../services/file-services";

const fileRouter = express.Router();

// Multer
const upload = multer({ dest: "uploads/" });

fileRouter.post("/", upload.single("data-table"), async (req, res, next) => {
  try {
    const newPath = saveFile(req.file);
    if (newPath) {
      const objectData = readFile(newPath);
      const { response, errors } = await postData(objectData);
      res.json({
        ok: true,
        data: {
          success: response,
          errors: errors,
        },
      });
    } else {
      const fixedData = await postDataFixed(req.body);
      res.json({
        ok: true,
        data: [
          {
            name: fixedData.name,
            email: fixedData.email,
            age: fixedData.age,
          },
        ],
      });
    }
  } catch (error) {
    next(error);
  }
});

export default fileRouter;
