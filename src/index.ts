#!/usr/bin/env node

import { getJoke } from "./services/jokes.service";

(async function chuckJokes() {
    const joke = await getJoke();
    console.info(joke.value);
})()
