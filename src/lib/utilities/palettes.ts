//Thanks Copilot
export function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const palettes = {
    coder: [
        "#000000", // Black
        "#36454F", // Charcoal
        "#2C3539", // Gunmetal
        "#2F4F4F", // Dark Slate Gray
        "#191970", // Midnight Blue
        "#301934", // Dark Purple
        "#4A646C", // Deep Space Sparkle
        "#7DF9FF", // Electric Blue
        "#39FF14",  // Neon Green
        "#00FF00", // Bright Green
    ],
    coder2: [
        "#797D62",
        "#9B9B7A",
        "#BAA587",
        "#D9AE94",
        "#F1DCA7",
        "#FFCB69",
        "#E8AC65",
        "#D08C60",
        "#B58463",
        "#997B66"
    ],
    beach: [
        "#FF8C00", // Dark Orange
        "#FFA500", // Orange
        "#DAA520", // Goldenrod
        "#FFFF00", // Yellow
        "#FFFFE0", // Light Yellow
        "#98FB98", // Pale Green
        "#00FA9A", // Medium Spring Green
        "#40E0D0", // Turquoise
        "#48D1CC", // Medium Turquoise
        "#7FFFD4"  // Aquamarine
    ],
    beach2: [
        "#001219",
        "#005F73",
        "#0A9396",
        "#94D2BD",
        "#E9D8A6",
        "#EE9B00",
        "#CA6702",
        "#BB3E03",
        "#AE2012",
        "#9B2226"
    ],
    winter: [
        "#9400D3", // Dark Violet
        "#4B0082", // Indigo
        "#6A5ACD", // Slate Blue
        "#7B68EE", // Medium Slate Blue
        "#6495ED", // Cornflower Blue
        "#1E90FF", // Dodger Blue
        "#00BFFF", // Deep Sky Blue
        "#87CEEB", // Sky Blue
        "#87CEFA", // Light Sky Blue
        "#ADD8E6"  // Light Blue
    ],
    winter2: [
        "#FFCBF2",
        "#F3C4FB",
        "#ECBCFD",
        "#E5B3FE",
        "#E2AFFF",
        "#DEAAFF",
        "#D8BBFF",
        "#D0D1FF",
        "#C8E7FF",
        "#C0FDFF"
    ]
}

export function hexToRGB(hex: string, alpha: number) {
    const r: number = parseInt(hex.slice(1, 3), 16)
    const g: number = parseInt(hex.slice(3, 5), 16)
    const b: number = parseInt(hex.slice(5, 7), 16)

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}