import * as jokesService from './services/jokes.service';
import * as prompts from 'prompts';
import { chuckJokes } from ".";
import { ARGUMENT_NOT_ALLOWED, MULTIPLE_ARGUMENTS_NOT_ALLOWED_MESSAGE, NO_ARGUMENTS_MESSAGE } from "./constants/messages";

jest.mock('prompts', () => jest.fn().mockResolvedValueOnce({value: 'joke_category'}));

describe('Index', () => {
    const processArgv = process.argv;
    const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation(jest.fn());
    const getJokeSpy = jest.spyOn(jokesService, 'getJoke');

    afterAll(() => {
        process.argv = processArgv;
    });

    it('returns an error if no argument is passed', async () => {
        process.argv = ['node', 'path'];

        expect.assertions(1);
        try {
            await chuckJokes();
            expect(consoleInfoSpy).toHaveBeenCalledWith(NO_ARGUMENTS_MESSAGE);
        } catch (err) {
            expect(true).toBeFalsy();
        }
    });

    it('returns an error if multiple argument is passed', async () => {
        process.argv = ['node', 'path', 'arg1', 'arg2'];

        expect.assertions(1);
        try {
            await chuckJokes();
            expect(consoleInfoSpy).toHaveBeenCalledWith(MULTIPLE_ARGUMENTS_NOT_ALLOWED_MESSAGE);
        } catch (err) {
            expect(true).toBeFalsy();
        }
    });

    it('returns an error if argument is not valid', async () => {
        process.argv = ['node', 'path', 'invalid_arg'];

        expect.assertions(1);
        try {
            await chuckJokes();
            expect(consoleInfoSpy).toHaveBeenCalledWith(ARGUMENT_NOT_ALLOWED('invalid_arg'));
        } catch (err) {
            expect(true).toBeFalsy();
        }
    });

    it('calls `getJokes` without a category if argument is `random`', async () => {
        process.argv = ['node', 'path', 'random'];
        getJokeSpy.mockResolvedValueOnce({value: 'Test Joke'});

        expect.assertions(2);
        try {
            await chuckJokes();
            expect(getJokeSpy).toHaveBeenCalledWith();
            expect(consoleInfoSpy).toHaveBeenLastCalledWith('Test Joke');
        } catch (err) {
            expect(true).toBeFalsy();
        }
    });

    it('calls `getJokes` with the category selected when argument is `category`', async () => {
        process.argv = ['node', 'path', 'category'];
        getJokeSpy.mockResolvedValueOnce({value: 'Test Joke'});

        expect.assertions(3);
        try {
            await chuckJokes();
            expect(prompts).toHaveBeenCalled();
            expect(getJokeSpy).toHaveBeenCalledWith('joke_category');
            expect(consoleInfoSpy).toHaveBeenLastCalledWith('Test Joke');
        } catch (err) {
            expect(true).toBeFalsy();
        }
    });
});