import server from "./server.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || "8080";

// Middleware
server.use(cors);
//

// Routes
server.get("/", () => {
  console.log("main page");
});
//

server.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
