import { getJoke } from "./jokes.service";
import axios from 'axios';

describe('Jokes service', () => {
    const axiosSpy = jest.spyOn(axios, 'get');

    it('fetches a random joke without a category when no parameters are passed', async () => {
        axiosSpy.mockResolvedValueOnce({data: {value: 'random_joke'}});

        expect.assertions(2);
        try {
            const joke = await getJoke();
            expect(axiosSpy).toHaveBeenCalledWith('JOKE_API');
            expect(joke).toEqual({value: 'random_joke'});
        } catch (err) {
            console.log(err);
            expect(true).toBeFalsy();
        }
    });

    it('fetches a random joke from a category when the category is passed as a parameter', async () => {
        axiosSpy.mockResolvedValueOnce({data: {value: 'category_joke'}});

        expect.assertions(2);
        try {
            const joke = await getJoke('joke_category');
            expect(axiosSpy).toHaveBeenCalledWith('JOKE_API?category=joke_category');
            expect(joke).toEqual({value: 'category_joke'});
        } catch (err) {
            expect(true).toBeFalsy();
        }
    });
});