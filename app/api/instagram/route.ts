
import { NextResponse } from 'next/server';

export async function GET() {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!token) {
        return NextResponse.json({ error: 'Instagram Access Token not configured' }, { status: 500 });
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=6`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch Instagram feed' }, { status: 500 });
    }
}
