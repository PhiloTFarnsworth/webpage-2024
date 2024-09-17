//Thanks Copilot
export function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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