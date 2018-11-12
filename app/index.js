const express = require('express')
const { join } = require('path')
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'yabaiwebyasan!' });
});

app.listen()
