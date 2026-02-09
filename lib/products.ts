export interface Product {
    id: number;
    name: string;
    variant: string;
    price: string;
    image: string;
    badge: string;
    options?: {
        colors?: string[];
        sizes?: string[];
    };
    category: 'apparel' | 'accessory' | 'other';
}

export const products: Product[] = [
    {
        id: 1,
        name: "Leather Patch Snapback",
        variant: "Black / Brown",
        price: "$35.00 CAD",
        image: "/Supply/leatherpatchsnapback.jpg",
        badge: "Limited Stock",
        options: {
            colors: ["Black / Brown", "All Black"]
        },
        category: 'apparel'
    },
    {
        id: 2,
        name: "Shop Logo Tee",
        variant: "Red / Blue / Black",
        price: "$45.00 CAD",
        image: "/Supply/shoplogotee.jpg",
        badge: "In Stock",
        options: {
            colors: ["Red", "Blue", "Black"],
            sizes: ["S", "M", "L", "XL", "2XL"]
        },
        category: 'apparel'
    },
    {
        id: 3,
        name: "Decal Pack",
        variant: "Mixed",
        price: "$15.00 CAD",
        image: "/Supply/stickers.jpg",
        badge: "Low Qty",
        category: 'accessory'
    },
    {
        id: 4,
        name: "BILLET KEYCHAIN OPENER",
        variant: "Black anodized aluminum bottle opener with laser engraving.",
        price: "$12.00 CAD",
        image: "/Supply/keychains.jpg",
        badge: "In Stock",
        options: {
            colors: ["Black Anodized"]
        },
        category: 'accessory'
    }
];
