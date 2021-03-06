# Providers

As explained previously, the 0xcert ecosystem tends to be platform-agnostic, thus it is not created for merely one blockchain or one specific platform. It aims to provide a consistently optimal developing experience, regardless of the platform you employ. To achieve this, the 0xcert ecosystem consists of several modules, and each module needs a provider object to tell the module how to operate. Each provider operates on the same principles, but can also have its own distinctive characteristics. 

Even within the same blockchain, you can use multiple providers depending on your needs. If you would like to communicate with the blockchain on the front-end, you could use [MetamaskProvider](https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#metamask-provider), while for communication on the back-end you could use [HttpProvider](https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#http-provider). For more information about other providers for Ethereum, please click [here](https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html).

In this guide, we will be using the MetaMask provider for the Ethereum blockchain. [MetaMask](https://metamask.io/) is a popular plug-in that allows you to create and store the private keys for your Ethereum account inside your browser or mobile device. It works as a bridge between your browser and the Ethereum blockchain through its own infrastructure. MetaMask can also be paired with hardware wallets such as [Ledger](https://www.ledger.com/) or [Trezor](https://trezor.io/).

::: card Live example
Click [here](https://codesandbox.io/s/github/0xcert/example-using-providers?module=%2FREADME.md) to check the live example for this section.
:::

## Installation process

We recommend you employ the provider module as an NPM package in your application.

```ell
$ npm i --save @0xcert/ethereum-metamask-provider
```

On our official [GitHub repository](https://github.com/0xcert/framework), we also host a compiled and minimized JavaScript file that can be directly implemented into your website. Please refer to the [API](https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html) section to learn more about other providers.

## Usage overview

To start developing the application, we have to first instantiate the [MetamaskProvider](https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#metamask-provider) provider class. This is usually only needed once within the application. When initializing we also set the gateway config. This is needed for the 0xcert API client to work properly.

```ts
import { MetamaskProvider, buildGatewayConfig, NetworkKind } from '@0xcert/ethereum-metamask-provider';

const provider = new MetamaskProvider({
  gatewayConfig: buildGatewayConfig(NetworkKind.RINKEBY)
});
```

MetaMask needs to be authorized and unlocked to be used on the website. This is specific to this provider. Therefore, before you start interacting with the Ethereum node, you should check whether the MetaMask account has been enabled. If not, you have to enable it, as shown in the example below.

```ts
if (!await provider.isEnabled()) {
  await provider.enable();
}
```
