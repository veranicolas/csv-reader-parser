# csv-reader-parser

This project was born out of an interview, where I was asked if I knew how to parse large chunks of data using Node.js.
At the moment I didn't know how to do it, but after reading some documentation and experimenting I figured it out.

## Description

This app runs the fs module creating a Stream to read a .csv file, and parses it into a .json file. Then there's this small express.js server that makes the data available to use in a client application.

## Instructions and how to use

- clone the repo
- `npm i`
- use the `npm run generate-json` command to generate your file. Make sure to change the name of the `file` variable inside the `index.js` file, depending on what do you want to parse.
- use the `npm run dev` to have your server running and go to [localhost:4200/](localhost:4200/) to view your data.

If you want to use similar kind of data to the one In this app, you can find it [here](https://github.com/datablist/sample-csv-files?tab=readme-ov-file).

## Notes

This is just a proof of concept and a proof to myself that I can learn and create these types of projects if I just put my mind on it.

If you're reading this, future-self or whoever you are, don't quit! You got this 😎