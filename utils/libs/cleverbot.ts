import cleverbot from 'cleverbot-free';

export async function getCleverbotAnswer(input: string): Promise<string> {
    const answer = await cleverbot(input);
    return answer;
}