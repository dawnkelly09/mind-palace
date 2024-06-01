// pages/api/generate-og.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, type, description, imageUrl, linkUrl } = req.body;
        console.log({ title, type, description, imageUrl, linkUrl });
        
        // Generate HTML content with OG tags
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <meta property="og:title" content="${title}" />
                <meta property="og:type" content="${type}" />
                <meta property="og:description" content="${description}" />
                <meta property="og:image" content="${imageUrl}" />
                <meta property="og:url" content="${linkUrl}" />
            </head>
            <body>
                <h1>${title}</h1>
                <p>${description}</p>
                <img src="${imageUrl}" alt="${title}" />
                <span>${linkUrl}</span>
            </body>
            </html>
        `;

        // Define path for the new file
        const filePath = path.join(process.cwd(), 'public', 'ogFiles', `${title.replace(/ /g, '_')}.html`);

        // Write HTML content to a new file in the public directory
        fs.writeFile(filePath, htmlContent, 'utf8', (err) => {
            if (err) {
                console.error('Failed to save HTML file', err);
                return res.status(500).json({ success: false, message: 'Failed to save HTML file.', error: err.message });
            }

            // Respond back with success message
            res.status(200).json({ success: true, message: 'HTML content generated and saved successfully.', filePath: `/ogFiles/${title.replace(/ /g, '_')}.html` });
        });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}