const express = require('express');
const app = express();
const port = 3000;

// ฟังก์ชันคำนวณลำดับฟีโบนัชชี
const fibonacci = require('./fibonacci');

// Route สำหรับ API
app.get('/api/v1/test/:memberCount', (req, res) => {
    const memberCount = parseInt(req.params.memberCount);

    if (isNaN(memberCount) || memberCount < 1 || memberCount > 100) {
        return res.status(400).json({ error: 'Invalid input. Please enter a number between 1 and 100.' });
    }

    const sequence = fibonacci(memberCount);
    const total = sequence.reduce((acc, num) => acc + num, 0);

    res.json({
        'member-count': memberCount,
        sequence: sequence,
        total: total
    });
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
