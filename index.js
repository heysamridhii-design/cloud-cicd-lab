const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Automated Build Application");
});

app.get("/status", (req, res) => {
    res.send("Build pipeline is working successfully!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
