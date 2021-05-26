#!/usr/bin/env node

import prompts = require("prompts");
import { getJoke } from "./services/jokes.service";

const chuckJokesCategories = [
    { title: "Animal", value: "animal" },
    { title: "Career", value: "career" },
    { title: "Celebrity", value: "celebrity" },
    { title: "Developer", value: "dev" },
    { title: "Explicit", value: "explicit" },
    { title: "Fashion", value: "fashion" },
    { title: "Food", value: "food" },
    { title: "History", value: "history" },
    { title: "Money", value: "money" },
    { title: "Movie", value: "movie" },
    { title: "Music", value: "music" },
    { title: "Political", value: "political" },
    { title: "Religion", value: "religion" },
    { title: "Science", value: "science" },
    { title: "Sport", value: "sport" },
    { title: "Travel", value: "travel" }
];

(async function chuckJokes() {
    const args = process.argv.splice(process.execArgv.length + 2);
    const arg = args[0];

    if (args.length > 1) {
        return console.info("You can only pass one argument; `random` or `category`");
    }

    if (!arg) {
        return console.info("You need to pass one of the following arguments: `random` or `category`.");
    }

    let joke;
    if (arg === 'random') {
        joke = await getJoke();
    } else if (arg === 'category') {
        const category = await prompts({
            type: 'select',
            name: 'value',
            message: 'Pick a category',
            choices: chuckJokesCategories,
            initial: 1
        });
        joke = await getJoke(category.value);
    } else {
        return console.log(`Sorry, ${arg} is not a valid argument.`);
    }

    console.info(joke.value);
})();
