import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const app = express();
const port = 3000

app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/marker',  (req, res) => {
    res.sendFile(path.join(__dirname + '/index-marker-based.html'))
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
