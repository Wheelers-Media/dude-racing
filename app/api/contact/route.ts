import { NextResponse } from 'next/server';
// import { Resend } from 'resend'; 

// const resend = new Resend(process.env.RESEND_API_KEY);

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

        // --- RESEND INTEGRATION START ---
        // Uncomment below once you have installed 'resend' and added RESEND_API_KEY to .env.local

        /*
        const { name, email, phone, details, budget, urgency, vehicle } = data;
        
        const subject = `[NEW LEAD] - ${type === 'service' ? 'Service Inquiry' : 'Custom Build'} - ${name}`;
        
        // Construct Email Body
        let htmlBody = `<h1>New Lead: ${type}</h1>`;
        
        if (type === 'service') {
            htmlBody += `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Type:</strong> ${data.serviceType}</p>
                <p><strong>Urgency:</strong> ${urgency}</p>
            `;
        } else {
             htmlBody += `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Vehicle:</strong> ${vehicle?.year} ${vehicle?.make} ${vehicle?.model}</p>
                <p><strong>Goal:</strong> ${data.goal}</p>
                <p><strong>Vision:</strong> ${details}</p>
            `;
        }

        const { data: emailData, error } = await resend.emails.send({
            from: 'DudeRacing <onboarding@resend.dev>', // Update this to your domain
            to: ['bob@duderacing.com'], // Update to Bob's real email
            subject: subject,
            html: htmlBody,
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ error }, { status: 500 });
        }
        */
        // --- RESEND INTEGRATION END ---

        // Simulate Network Delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        return NextResponse.json({ success: true, message: "Inquiry Sent Successfully" });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
