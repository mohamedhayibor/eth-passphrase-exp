const sha3 = require("js-sha3");
const crypto = require("crypto");

function passToPriv(passphrase) {
  let arr = "FOR EXPERIMENTATION ONLY, USE AT YOUR OWN RISK!".split('');

  let initialHash = crypto.createHash("sha256").update(passphrase).digest('hex');

  let finalHash = arr.reduce((acc, i) => sha3.keccak_256(acc), initialHash);

  console.log("> Private key: ", finalHash)
  return finalHash;
}

module.exports = passToPriv;