import axios from 'axios';

const CHUCK_JOKES_URL = process.env.NODE_ENV === 'TEST' ? 'JOKE_API' : 'https://api.chucknorris.io/jokes/random';

type Joke = {
    value: string;
}

export async function getJoke(category?: string): Promise<Joke> {
    try {
        const response = await axios.get(category ? `${CHUCK_JOKES_URL}?category=${category}` : CHUCK_JOKES_URL);
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch Chuck joke.');
    }
}