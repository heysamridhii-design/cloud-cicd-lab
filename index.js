const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Cloud Application Development Lab");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Application is running",
        success: true
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
