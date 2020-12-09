## Why

Only for those who only want to remember a sentence or long string instead of a private key.

Could be useful if you're at risk of losing all your tangible possessions.

> `passphrase` is case sensitive

### Usage

Not an npm package coz betting you rarely need this:

```sh
> git clone git@github.com:mohamedhayibor/eth-passphrase-exp.git && cd eth-passphrase-exp

> npm i
```

Get private key in node console:

```
> const genPrivKey = require('./');

> genPrivKey("whatever case sensitive passphrase...") // 1454....36da3d
```

## How

Gets the sha256 of passphrase then hashes it with keccak256, 47 times.

MIT license