import express from 'express';
import path from "path";
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build', 'index.html'));
});

app.listen(port);