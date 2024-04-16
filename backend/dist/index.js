import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// ***JUST FOR THE BASICS***
// // GET
// // POST
// // PUT
// // DELETE
// app.use(express.json())// middleware it tells us that we are using json file
// app.get("/hello", (req,res)=>{//"hello is a static route"
//     res.send("Hello World")
// })  // This is a Middleware
// app.get("/user:id", (req,res)=>{//"This is dyanamic routing"
//   console.log(req.params.id)
//   res.send("Hello World")
// }) 
// if we use dynamic route then we dont know what "/"what to get reuest from where like "/user/:id"
// CONNECTIONS AND LISTENERS
const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log("Server Open And Connected to Database"));
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map