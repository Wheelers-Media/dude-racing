import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
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
            from: 'Dude Racing Website <onboarding@resend.dev>',
            to: ['nathan@wheelersmedia.ca'], // Changed to account owner for testing
            replyTo: email,
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
