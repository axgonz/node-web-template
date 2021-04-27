# Node Web Template

> Great Resources
> - https://www.npmjs.com/
> - https://www.youtube.com/watch?v=Oe421EPjeBE

## Getting Started (with an empty folder)

- Install node (use the LTS version)

- Install vscode extentions
    - ESLint
    - Rest Client

- Initialise the folder, you won't need to do this again, it creates the *packages.json* file and the *node_modules* directory.

```
npm init --yes
```

- Install some basic modules. Here we want to use TypeScript.

```
npm install typescript dotenv express ejs
```

- Install specific dev modules. The `-D` is for telling node these are modules used to enable the dev environemnt.

```
npm install -D @types/node @types/express eslint ts-node nodemon
```

- Create *nodemon.json* file. This is used to watch for file changes and auto restart the app while developing.

``` json
{
    "watch": [
        "src"
    ],
    "ext": "ts,json",
    "ignore": [
        "src/**/*.spec.ts"
    ],
    "exec": "ts-node ./src/index.ts"
}
```

- Create *.vscode/settings.json* file so that we use the right linter and formatter.

``` json
{
    "eslint.alwaysShowStatus": true,
    "eslint.format.enable": true,
    "editor.formatOnSave": true
}
```

- Update *packages.json* with a `serve` command so that we can use `npm run serve`.

``` json
{
    ...
    "scripts": {
        "serve": "nodemon"
    },
    ...
}
```

- Create *.env* for creating environment variables.
```
APP_TITLE = Web Template
```

- Initilise the folder with git 
```
git init
```

- Create *.gitignore*
```
node_modules
.env
```

- Create *src/index.ts* which will be the entry-point for node (based on our configuration so far).
```
console.log("Hello World!");
```

## What did we just do?

We have setup our dev environment to start working with node. There will be more modules needed later and more files and directories will be created. For now, though, we can simply run `npm run serve` and see 'Hello World!' printed to the console.

This command works because we configured npm using *packages.json* to run nodemon.

Using *nodemon.json* we told nodemon which files to watch and which command to run if is see a change. 

When a change occures nodemon will can ts-node which compiles and then runs a typescript file. We can see that the command uses *src/index.ts* but this could have been any .ts file.
