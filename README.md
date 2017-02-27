# firegen

[![Build Status](https://travis-ci.org/pghalliday/firegen.svg?branch=master)](https://travis-ci.org/pghalliday/firegen)
[![Coverage Status](https://coveralls.io/repos/github/pghalliday/firegen/badge.svg?branch=master)](https://coveralls.io/github/pghalliday/firegen?branch=master)

Generate database rules and JavaScript APIs for Firebase projects

## Usage

Install as a development dependency

```
npm install --save-dev firegen
```

Initialise an API definition file and config file

```
./node_modules/.bin/firegen init
```

Using the defaults this will create the following files and directories

```
.
├── .firegen.js
└── api
    └── src
        └── index.js
```

It will also add a `generate-api` script to `package.json`

```json
  "scripts": {
    "firegen": "firegen"
  },
```

Then you can generate Firebase rules and a JavaScript API with

```
npm run firegen
```

This will create the following files and directories

```
.
├── .firegen.js
└── api
    ├── src
    |   └── index.js
    ├── lib
    |   └── index.js
    └── rules
        ├── database.rules.bolt
        └── storage.rules
```

`api/rules/database.rules.bolt` and `api/rules/storage.rules` should be deployed to firebase using the firebase CLI.

`api/lib/index.js` should be used in your client applications to interact with firebase.

For details on the DSL used in `api/src/index.js` see the [DSL documentation](docs/DSL.md)

## Contributing

Build and run tests before pushing/opening a PR

- `npm test` - lint and test
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
