const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const port = 81


app.use(express.json())

app.post('/authorization', async (req, res) => {
    const { token } = req.body;
    try{
        const verifToken = jwt.verify(token, process.env.JWT_KEY)
        if (verifToken) {
            res.status(200).json({ message: 'Authenticated user accessed service' });
        }
    } catch(err) {
        console.error(err);
        res.status(401).json({ message: 'User not authenticated' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
