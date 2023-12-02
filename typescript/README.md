# Requirements
It is recommended to have _nvm_ (Node Version Manager) installed.

- [nvm for Linux/macOS](https://github.com/nvm-sh/nvm#installing-and-updating)
- [nvm for Windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

# Installation
> If any problems are encountered during installation, check the *Troubleshooting* section to resolve common problems.

In the `typescript` folder of this project (where this README.md file is located) run the following command to download the version of node corresponding to the project.
```bash
nvm install
# --- or ---
nvm install $(Get-Content .nvmrc) # <- if you are working on Windows
```

Once downloaded, mark this version as active in the current console session using the command:
```bash
nvm use
# --- or ---
nvm use $(Get-Content .nvmrc) # <- if you are working on Windows
```

Finally, you need to download the project dependencies, this can be done with `npm` or `yarn` of your choice.
```bash
npm install
# --- or ---
yarn install
```

# Scripts
All scripts can be run with either `npm` or `yarn`, if you want to know more about these you can check the `scripts` section of the `package.json` file.

> Remember that all these commands must be launched in the `typescript` folder of this project.

## Launch the tests
```bash
npm run test
# --- or ---
yarn test
```

## Calculate test coverage
```bash
npm run coverage
# --- or ---
yarn coverage
```

> You will find the coverage report generated in the file `coverage/lcov-report/index.html`.

## Launch the tests automatically
```bash
npm run test:watch
# --- or ---
yarn test:watch
```

> Run tests automatically whenever test or production code is modified.

## Check for style errors in the code
```bash
npm run lint
# --- or ---
yarn lint
```

## Correct styling errors in the code
```bash
npm run lint:fix
# --- or ---
yarn lint:fix
```

# Troubleshooting
## Doesn't recognise the `nvm` command
If you have just installed _nvm_, you may need to restart the terminal to get the new command detected.

## `nvm install`/`nvm use` prompts me to specify the version
Make sure you are inside the `typescript` folder of this project.

If you are on Windows you can add `$(Get-Content .nvmrc)` to the end of the command to pass the contents of the `.nvmrc` file as an argument. [Source](https://gist.github.com/danpetitt/e87dabb707079e1bfaf797d0f5f798f2?permalink_comment_id=3778440#gistcomment-3778440).

If it still does not automatically detect the version, check the contents of the `.nvmrc` file and type `nvm install [version]`/`nvm use [version]` replacing `[version]` with the contents of the file instead.

## It does not recognise the `yarn` command
You can install `yarn` as easily as running the following command:
```bash
npm install --global yarn
```

## Can't find the package.json file when running any command with `npm` or `yarn`
Make sure you are inside the `typescript` directory which is located in the root of this project.
