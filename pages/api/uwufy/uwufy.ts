export function uwufy(inputPhrase: string): string {
  return inputPhrase
    .replace(/L|R|V/g, "W")
    .replace(/l|r|v/g, "w")
    .replace("y", "ie")
    .replace("Y", "Ie");
}
