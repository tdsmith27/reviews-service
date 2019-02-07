const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, '../public')))
app.use(parser.json());



app.listen(port, () => console.log(`listening on port ${port}`));