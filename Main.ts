import express, { Application, Express, Response, Request } from "express";
import crypto from "crypto";
import dotenv, { config } from "dotenv";
dotenv.config();

// console.log(PORT);

// console.log(process.env.PORT);
const value = crypto.randomBytes(3).toString("hex");

interface iprops {
  id: string;
  name: string;
  grade: string;
  score: number;
}

const app: Application = express();
app.use(express.json());
const database: Array<iprops> = [];

app.get("/api", (req: Request, res: Response): any => {
  return res.status(200).json({
    message: "Welcome to my API",
  });
});
app.get("/api/students", (req: Request, res: Response): any => {
  console.log(req.body);
  return res.status(200).json({
    message: "Welcome to my API",
    data: database,
  });
});

app.post("/api/create-students", (req: Request, res: Response) => {
  const { name, score } = req.body;
  console.log(req.body);

  let y = {
    id: value,
    name,
    score,
    grade:
      score >= 0 && score <= 50
        ? " F"
        : score >= 51 && score <= 60
        ? "C"
        : score >= 61 && score <= 70
        ? "B"
        : score >= 71 && score <= 80
        ? "A"
        : null,
  };

  let data = [...database, y];
  res.status(200).json({
    message: "Create student API",
    data: y,
    value: data,
  });
});
console.clear();
app.listen(process.env.PORT, () => {
  console.clear();
  console.log(`server is running on port ${process.env.PORT}`);
});
