import { GoogleGenAI } from '@google/genai';

// This is a Vercel Serverless Function, which runs in a Node.js environment.
export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Un prompt est requis' });
        }

        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            console.error('API_KEY environment variable not set on the Vercel server.');
            // This is the server-side error that will be sent to the client.
            return res.status(500).json({ error: "Le service AI n'est pas disponible: La variable d'environnement API_KEY doit être configurée." });
        }
        
        const ai = new GoogleGenAI({ apiKey });

        const modelParams = {
            model: "gemini-2.5-flash",
            contents: prompt,
        };

        const responseStream = await ai.models.generateContentStream(modelParams);

        // Set headers for streaming the response
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');

        for await (const chunk of responseStream) {
            res.write(chunk.text);
        }
        
        res.end();

    } catch (error) {
        console.error('Error in /api/generate:', error);
        // Do not send the detailed error to the client for security.
        res.status(500).json({ error: "Échec de la génération de la réponse de l'IA." });
    }
}
