const PORT = process.env.PORT || 8052;
const dotenv = require("dotenv");
const express = require("express");
const server = express();
const cors = require("cors");
const db = require("./Db/Connection.js");
dotenv.config();
db();
server.use(express.json());
server.use(cors());
server.use("/api", require("./Routes/UserRoutes.js"));
server.use("/emp", require("./Routes/EmpRoutes.js"));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
