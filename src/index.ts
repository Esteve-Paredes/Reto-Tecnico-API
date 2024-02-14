import express from "express";
import cors from "cors";
import fileRouter from "./routers/file-router";
import errorHandler from "./middleware/error";
import authRouter from "./routers/auth-router";

const app = express();
const port = 5500;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/", authRouter);
app.use("/", fileRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Escuchando al puerto ${port}`));
