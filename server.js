const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }],
            max_tokens: 150
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.API_KEY}`
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to fetch response from OpenAI API" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
