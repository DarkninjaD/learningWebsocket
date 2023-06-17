import server from "./server.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || "8080";

// Middleware
server.use(cors);
//

// Routes
server.get("/", (req, res) => {
  console.log("main page");
  res.end();
});
//

// Web Socket
server.ws("/", (ws, req) => {
  ws.on("message", (msg) => {
    console.log(msg);
  });
  console.log("socket on?");
});
//

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
