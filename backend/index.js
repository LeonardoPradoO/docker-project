const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
