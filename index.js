// require().config();
import  express from  "express"
import mongoose from "mongoose"
import Products from "./models/productschema.js"
import { DefaultData }from "./defaultdata.js"
import "./db/conn.js"
import cors from "cors"
import router from "./routes/router.js"
import cookieParser from "cookie-parser";

const app = express();
const PORT=process.env.PORT || 8005;


const corsOptions = {
    // origin: "https://gauravrawat123.netlify.app",
        origin: "http://localhost:3000",
    credentials: true,
     optionSuccessStatus: 200,
    headers: true,
    exposedHeaders: 'Set-Cookie',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Content-Type',
        'Authorization'
    ]
  };

  app.use(express.json());
  app.use(cookieParser());
  app.use(cors(corsOptions));
  app.use(router);






  

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
DefaultData();


