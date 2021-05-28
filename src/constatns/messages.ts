export const NO_ARGUMENTS_MESSAGE = `\
*******************
*** Chuck Jokes ***
*******************

Usage: chuckjokes <command>

Command list:
- \`random\`: Returns a random Chuck Norris joke.
- \`category\`: Returns a list of categories to choose from and returns a joke from that category.
`;
export const MULTIPLE_ARGUMENTS_NOT_ALLOWED_MESSAGE = `\
${NO_ARGUMENTS_MESSAGE}
Error: Multiple arguments are not allowed.
`;
export const ARGUMENT_NOT_ALLOWED = (arg: string): string => `\
${NO_ARGUMENTS_MESSAGE}
Error: \`${arg}\` is not a valid argument.
`;