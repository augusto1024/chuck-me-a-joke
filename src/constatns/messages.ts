export const NO_ARGUMENTS_MESSAGE = "You can only pass one argument; `random` or `category`";
export const MULTIPLE_ARGUMENTS_NOT_ALLOWED_MESSAGE = "You need to pass one of the following arguments: `random` or `category`.";
export const ARGUMENT_NOT_ALLOWED = (arg: string): string => `Sorry, ${arg} is not a valid argument.`;