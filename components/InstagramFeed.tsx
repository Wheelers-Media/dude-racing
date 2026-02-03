
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

interface InstagramPost {
    id: string;
    media_url: string;
    thumbnail_url?: string; // For videos
    permalink: string;
    caption?: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

const FALLBACK_POSTS = [
    "https://images.unsplash.com/photo-1610444695034-780c2f829f03?q=80&w=2670&auto=format&fit=crop", // Sparks
    "https://images.unsplash.com/photo-1588612143003-85fbf8f547c1?q=80&w=2670&auto=format&fit=crop", // Coffee & Sketches
    "https://images.unsplash.com/photo-1628522307371-2ab6c55653b6?q=80&w=2670&auto=format&fit=crop", // Engine Block
    "https://images.unsplash.com/photo-1530046339160-ce3e41600f2e?q=80&w=2574&auto=format&fit=crop", // Welding
    "https://images.unsplash.com/photo-1606821466870-7607a7266946?q=80&w=2574&auto=format&fit=crop", // Tools
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2670&auto=format&fit=crop", // Messy workbench
];

export default function InstagramFeed() {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('/api/instagram');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();

                if (data.data) {
                    setPosts(data.data.slice(0, 6)); // Ensure only 6
                } else {
                    throw new Error('No data');
                }
            } catch (err) {
                console.error("Instagram feed failed:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    // Render Logic
    if (error || (!loading && posts.length === 0)) {
        // Fallback View
        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {FALLBACK_POSTS.map((src, idx) => (
                    <div key={idx} className="relative aspect-square bg-carbon overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            style={{ backgroundImage: `url('${src}')` }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        {/* Overlay icon to show it's a social placeholder if desired, or keep clean */}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {loading ? (
                // Skeleton Loader
                Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-white/5 animate-pulse" />
                ))
            ) : (
                posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.permalink}
                        target="_blank"
                        rel="noreferrer"
                        className="relative aspect-square bg-carbon overflow-hidden group block"
                    >
                        {post.media_type === 'VIDEO' ? (
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url('${post.thumbnail_url || post.media_url}')` }}
                            />
                        ) : (
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url('${post.media_url}')` }}
                            />
                        )}

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Instagram className="w-8 h-8 text-white drop-shadow-md" />
                        </div>
                    </a>
                ))
            )}
        </div>
    );
}
