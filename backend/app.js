const express = require('express');
const app = express();

app.get('/api', (req, res, next) => {
    res.json({ message: 'Hello from Server' });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});