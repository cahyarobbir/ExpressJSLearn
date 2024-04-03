const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Coba API')
})


app.listen(port, () => {
    console.log(`Running in port ${port}`);
})