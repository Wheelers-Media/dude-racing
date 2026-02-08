import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        const toEmail = process.env.RESEND_TO_EMAIL;

        if (!apiKey || !toEmail) {
            console.error("RESEND_API_KEY or RESEND_TO_EMAIL is missing from environment variables.");
            return NextResponse.json({ error: 'Server Misconfiguration: Missing Email Config' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const body = await request.json();
        const { type, data } = body;

        // Basic Validation
        if (!data) {
            return NextResponse.json({ error: 'Missing Data' }, { status: 400 });
        }

        console.log("------------------------------------------");
        console.log(`[DudeRacing API] New Lead Received: ${type}`);
        console.log("Data:", data);
        console.log("------------------------------------------");

        const { name, email, phone, details, budget, urgency, vehicle, serviceType } = data;

        const subject = type === 'service'
            ? `New Service Inquiry: ${name} - ${serviceType}`
            : `New Custom Build Request: ${name}`;

        // Construct Email Body
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

        const { data: emailData, error } = await resend.emails.send({
            from: 'Dude Racing Website <info@duderacing.ca>', // Use verified domain sender
            to: [toEmail],
            replyTo: email, // This allows Bob to reply directly to the customer
            subject: subject,
            html: htmlBody,
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Inquiry Sent Successfully", id: emailData?.id });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
