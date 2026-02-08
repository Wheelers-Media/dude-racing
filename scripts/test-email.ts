
import { Resend } from 'resend';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function sendTest() {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;

    console.log('Sending from API Key:', apiKey ? 'Loaded' : 'Missing');
    console.log('Sending to Email:', toEmail);

    if (!apiKey || !toEmail) {
        console.error('Missing configuration');
        return;
    }

    const resend = new Resend(apiKey);

    try {
        const data = await resend.emails.send({
            from: 'Dude Racing Website <info@duderacing.ca>',
            to: [toEmail],
            replyTo: 'test@example.com',
            subject: 'Test Email from Dude Racing Website',
            html: '<h1>This is a test email</h1><p>If you see this, the Resend integration is working correctly with the new sender identity.</p>',
        });

        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

sendTest();
