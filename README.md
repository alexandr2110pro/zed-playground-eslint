# Zed Playground

This repo is created to explore configuration options for Zed to 
play nicely with typescript monorepos. Primarily focusing on proper recognition of
typescript and eslint configuration files and associated DX (autoimport, autocomplete, eslint errors, autofixes, etc.)

See comments in the ts and tsx code for additional specific notes on expected behavior.
Some of them are satisfied, some are not.

## Convenience package.json scripts

- `lint-all`: `nx run-many -t lint --skip-nx-cache --outputStyle=static`

## Expected Behavior

- Typescript projects should be properly discovered and their exported members should be autocompletable and autoimportable
- Both "paths" aliases (`$.compilerOptions.paths`), and "ts project references" (`$.references`) should be supported.
  * Nx convention: paths aliases should not be defined in the root `tsconfig.json` nx conventional configuration)
  * Nx convention: ts project references should be specified in both root `tsconfig.json` and individual `tsconfig.json`/`tsconfig.lib.json` files of monorepo projects. 
- Eslint errors in code should be the same as reported by running `nx run-many -t lint` (that runs lint . for every monorepo project.)
- Autofixable eslint errors should be fixed on format (on save) with the zed configuration listed below and should lead to the same result as the `nx run-many -t lint --fix` command.
- Code actions should suggest ignoring eslint with ignore comment for the line or entire file.

## Zed versions tested:

```
Zed 0.217.1 
56049ac3b58f2da9e171c3fee318f7d4944b0159

0.217.1+stable.98.56049ac3b58f2da9e171c3fee318f7d4944b0159
```

## Configuration used:

see [settings.json](./.zed/settings.json)

```json
{
  "languages": {
    "TypeScript": {
      "language_servers": ["vtsls"],
    },
  },
  "lsp": {
    "eslint": {
      "settings": {
        "workingDirectory": {
          "mode": "auto",
        },
        "workingDirectories": ["./**"],
      },
    },
  },
  "code_actions_on_format": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true,
  },
}
```

**Variations around eslint:**

```jsonc
{
  // ...
      "settings": {
        "workingDirectory": {
          // "mode": "location"
          "mode": "auto"
        },
        // workingDirectories: "location"
        // workingDirectories: ["./*"]
        "workingDirectories": ["./**"]
      }
  // ...
}
```

None of the permutations provide any improvements in my tests.
So far, `"workingDirectories": ["./**"]` seems to be the best, but still not enough.

IMO, this configuration should not be necessary, as automatic recognition of nested eslint configs should be by default. At least this is what I would expect as a user.
