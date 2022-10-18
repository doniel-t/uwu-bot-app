export function getRandomNumberBetween(lowerBound: number, upperBound: number): number {
    return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
}

export function isNumeric(val: string): boolean {
    return !isNaN(Number(val));
}