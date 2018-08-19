
# pwa-overview
Code examples to provide an overview of Progressive Web Apps



## What do I do from here?

The site needs to be served up on `localhost` using a webserver.
The steps below show how this can be achieved using `express` (and the `serve-index` package to show directory listings).

1. Install `express` and the `serve-index` package with the command `npm install`.
2. Start the server with the command `node express`
3. With the server running, visit the site: [http://localhost:8080](http://localhost:8080).

For the later examples where AJAX JSON requests / responses are sent to the server, the node package `json-server` is required.

1. Install `json-server` globally with the command `npm install -g json-server`
2. Start the server by running `json-server --watch database/db.json`.

## Using Visual Studio Code to run JavaScript
VSCode has an extension `Code Runner` which allows JavaScript files to be run inside of VSCode.
The keyboard shortcut is Ctrl+Alt+N.

## Using Atom to run JavaScript
The Atom editor has a package `atom-runner` which allows JavaScript files to be run inside of Atom.
The keyboard shortcut is `Alt+R` (or `Ctrl+R` on a Mac).

## Getting and setting Git name & email
`git config user.name`<br />
`git config user.name "Mona Lisa"`<br />

`git config user.email`<br />
`git config user.email "email@example.com"`<br />