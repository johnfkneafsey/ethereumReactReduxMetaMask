### Integrating truffle 3 into an existing truffle 2 project

I [created](https://github.com/sogoiii/web3-react-redux-starter-kit) a fork of [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) and added web3 and truffle to the mix. Recently truffle was upgraded to [version 3](http://truffleframework.com/tutorials/upgrading-from-truffle-2-to-3), and broke the flow. Which is cool because now its nicer to work with. It no longer renders a `.js` file, but rather creates a `json` file. It also updated the configuration file. Follow along and see how I updated the previous repo to use truffle 3.

---

### Updating the configuration file

The `rpc` key was removed and a new key `networks` houses all possible environments. To add a staging or local target, I simply create a new object. Looking at the older `truffle.js` file, this was an easy update. I removed the `rpc` key and created a `networks.development` object.


```js
// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  build: 'webpack', //for building with webpack if so desired
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    production: {
      host: 'anotherHost',
      port: 8888,
      network_id: '*' // Match any network id
    }
  },
  migrations_directory: './migrations' //this is for truffle-solidity-loader
}
```

In `src/store/web3Reducer.js` I require in `truffle.js`, so I only had to [update the path of keys](https://github.com/sogoiii/web3-react-redux-starter-kit/commit/a6eb6cf9c1652f5bbec78ab4f7e16ef92f648b38#diff-21d4e70b0fc7dbc01cc6287bc59a066a).


### Updating truffle-solidity-loader

The current master branch on [truffle-solidity-loader](https://github.com/ConsenSys/truffle-solidity-loader) does not have my [pull request](https://github.com/ConsenSys/truffle-solidity-loader/pull/10) from [my branch](https://github.com/sogoiii/truffle-solidity-loader/tree/update_truffle_3). But thats ok, npm allows for direct linking into a github repo!

```js
{
  "devDependencies": {
    "truffle-solidity-loader": "git+https://github.com/sogoiii/truffle-solidity-loader.git#1f1e213d52f033b6863218307b8968ae68220fe1",
  }
}
```

I kept the old api, but given the changes in truffle we need to tell Webpack which `network` to attach to. When we `import` or `require` in a solidity file, it will return a json object. Therefore, we need to `json-loader`. Webpack will apply loaders right to left, thats why `json-loader` is first.


```js
webpackConfig.module.loaders.push({
  test: /\.sol/,
  loaders: ['json-loader', 'truffle-solidity-loader?migrations_directory=' + path.resolve(__dirname, '../migrations') + '&network=development']
})
```

As an FYI, if you upgrade to Webpack 2, you can can provide an object instead of query params.

```js
{
  test: /\.sol/,
  use: [
    { loader: 'json-loader' },
    { loader: 'truffle-solidity-loader',
      options: {
        migrations_directory: path.resolve(__dirname, './migrations'),
        network: 'development'
      }
    }
  ]
}
```

### Using the new Json files

The changes allow us to `import` solidity files and get back a `json` object. Workign with the new interface is as follows:


```js
import MyContractArtifact from './contracts/MyContract.sol'
import contract from 'truffle-contract'
const MyContract = contract(MyContractArtifact)
MyContract.deployed().then( instance => {
  instance.sendCoin(...)
})
```

Given how I was structured, I was required to make [some changes](https://github.com/sogoiii/web3-react-redux-starter-kit/commit/a6eb6cf9c1652f5bbec78ab4f7e16ef92f648b38#diff-70bec8a6f43a16e6bd44875435adf3b9). I had to update the chain of promises.

```js
export const sendCoin = ({ amount, address }) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      let meta = null
      let from = null
      getMetaCoin({ getState })
        .then(instance => {
          meta = instance
          from = getDefaultAccount({ getState })
          return meta.sendCoin(address, amount, { from })
        })
        .then(() => {
          return meta.getBalance.call(from, { from })
        })
        .then(value => {
          dispatch({
            type: SET_BALANCE,
            payload: { value: value.valueOf() }
          })
          resolve()
        })
        .catch(e => {
          console.log(e)
        })
    })
  }
}
```

I had to incorporate the promisified `deployed` method and and create my own chain. Given what we were doing, I had to create a few state variables.


## Conclusion

Overall upgrading to truffle 3 was relatively easy. I had to modify anything that requires `truffle.js`. Modify the assumption anything that `imports` a `.sol` file and wrap it around `truffle-contract`. The big work is really being done by `truffle-solidity-loader` to return a `json` file. Overal the new interface is very nice.
