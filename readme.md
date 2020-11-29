## Why

Only for those who only want to remember a sentence or long string instead of a private key.

Could be useful if you're at risk for losing all your tangible possessions.

> `passphrase` is case sensitive

### Usage

Not an npm package.json coz betting you rarely need this:

```
> git clone 

> npm i
```

In node console:

```
> const eth-passphrase = require('./');

> eth-passphrase("whatever case sensitive passphrase...") // 1454....36da3d
```

## How

Gets the sha256 of passphrase then hashes it with keccak256, 47 times.

MIT license