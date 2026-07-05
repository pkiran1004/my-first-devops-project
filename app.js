const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Welcome to My First DevOps Project!</h1>
        <h1>My 1st Change</h1>
        <p>This app will soon run inside Docker and be deployed using Jenkins.</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 