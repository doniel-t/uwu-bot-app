export default function getAnswer(optionArr: string[]): string {
    return optionArr[Math.floor(Math.random() * optionArr.length)];
}