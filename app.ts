import* as dotenv from 'dotenv';
dotenv.config({path:`.env.${process.env.NODE_ENV}`});
import express from 'express';
import router from './src/router/index';
import cors from 'cors'
const port =  process.env.PORT;
console.log(port);


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1",router)

app.listen(port, () => {
  console.log(` Server is running at https://localhost:${port}`);
});