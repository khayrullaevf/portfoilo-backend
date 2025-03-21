const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get("/api/message", (req, res) => {
        res.json({ message: "Hello from Backend!" });
        console.log('hi');
        
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
