import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4200;

app.use(express.json());

app.post('/narrate', async (req: Request, res: Response) => {
    const { openAIKey, elevenLabsKey, webpageUrl }: { openAIKey: string; elevenLabsKey: string; webpageUrl: string; } = req.body;
    console.log(req.body)
    if (!openAIKey || !elevenLabsKey || !webpageUrl) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        // Your logic to fetch webpage content and use Eleven Labs API will go here
        // ...

        res.json({
            audioStreamUrl: 'url-to-audio-stream', // This should be the actual URL from Eleven Labs
            healthData: {} // Placeholder for additional data
        });
    } catch (error: any) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
