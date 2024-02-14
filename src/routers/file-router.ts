import express from "express";

const fileRouter = express.Router();

fileRouter.post("/", async (req, res, next) => {
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
