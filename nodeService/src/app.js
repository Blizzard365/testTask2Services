const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const dataRoutes = require("./routes/dataRoutes");

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/data", dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
