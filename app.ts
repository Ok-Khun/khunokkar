import * as express from 'express';
import * as path from 'path';

require("dotenv").config();

const app = express()
const PORT = Number(process.env.PORT) | 5000;

app.use(express.static('public'))

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'pages/home.html')
    res.sendFile(filePath);
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.listen(PORT, () => {
    console.log("Server running at PORT:", PORT);
})