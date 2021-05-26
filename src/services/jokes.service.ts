import axios from 'axios';

const CHUCK_JOKES_URL = 'https://api.chucknorris.io/jokes/random';

type Joke = {
    value: string;
}

export async function getJoke(): Promise<Joke> {
    try {
        const response = await axios.get(CHUCK_JOKES_URL);
        return response.data;
    } catch (err) {
        throw new Error('Failed to fetch Chuck joke.');
    }
}