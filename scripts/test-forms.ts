
import { Resend } from 'resend';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function sendTestForms() {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!apiKey || !toEmail) {
        console.error('Missing configuration');
        return;
    }

    const resend = new Resend(apiKey);

    const testCases = [
        {
            type: 'service',
            data: {
                name: 'Test Customer (Service)',
                email: 'customer@example.com',
                phone: '555-0123',
                serviceType: 'Welding Repair',
                urgency: 'Standard'
            }
        },
        {
            type: 'build',
            data: {
                name: 'Test Customer (Build)',
                email: 'builder@example.com',
                phone: '555-0987',
                budget: '$5,000 - $10,000',
                vehicle: { year: '1969', make: 'Ford', model: 'Mustang' },
                goal: 'Street',
                details: 'Looking for a full roll cage and custom exhaust.'
            }
        }
    ];

    for (const testCase of testCases) {
        const { type, data } = testCase;
        const { name, email, phone, details, budget, urgency, vehicle, serviceType } = data;

        console.log(`Sending ${type} inquiry...`);

        const subject = type === 'service'
            ? `New Service Inquiry: ${name} - ${serviceType}`
            : `New Custom Build Request: ${name}`;

        let htmlBody = `<h1>New Lead: ${type === 'service' ? 'Service Inquiry' : 'Custom Build'}</h1>`;

        if (type === 'service') {
            htmlBody += `
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Service Type:</strong> ${serviceType}</li>
                <li><strong>Urgency:</strong> ${urgency}</li>
            </ul>
        `;
        } else {
            htmlBody += `
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Budget:</strong> ${budget}</li>
                <li><strong>Vehicle:</strong> ${vehicle?.year} ${vehicle?.make} ${vehicle?.model}</li>
                <li><strong>Goal:</strong> ${data.goal}</li>
                <li><strong>Vision:</strong> ${details}</li>
            </ul>
        `;
        }

        try {
            const result = await resend.emails.send({
                from: 'Dude Racing Website <info@duderacing.ca>',
                to: [toEmail],
                replyTo: email,
                subject: subject + ' [TEST]',
                html: htmlBody,
            });
            console.log(`${type} inquiry sent:`, result);
        } catch (error) {
            console.error(`Failed to send ${type} inquiry:`, error);
        }
    }
}

sendTestForms();
