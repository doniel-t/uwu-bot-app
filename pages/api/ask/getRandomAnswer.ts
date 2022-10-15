import { APRIL_FOOLS_ANSWERS, ASK_ANSWERS } from "./askStrings";

function isAprilFools(): boolean {
    let aprilFoolsDay = {
        month: 3,
        date: 1,
    };
    let now = new Date();
    return now.getMonth() == aprilFoolsDay.month && now.getDate() == aprilFoolsDay.date;
}

function getRandomChoice(optionArr: string[]): string {
    return optionArr[Math.floor(Math.random() * optionArr.length)];
}

export default function getAnswer(): string {
    const randChoice = isAprilFools() ? getRandomChoice(APRIL_FOOLS_ANSWERS) : getRandomChoice(ASK_ANSWERS)
    return randChoice;
}