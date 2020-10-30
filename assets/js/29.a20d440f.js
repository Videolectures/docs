(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{246:function(e,t,a){"use strict";a.r(t);var r=a(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providers"}},[e._v("#")]),e._v(" Providers")]),e._v(" "),a("p",[e._v("As explained previously, the 0xcert ecosystem tends to be platform-agnostic, thus it is not created for merely one blockchain or one specific platform. It aims to provide a consistently optimal developing experience, regardless of the platform you employ. To achieve this, the 0xcert ecosystem consists of several modules, and each module needs a provider object to tell the module how to operate. Each provider operates on the same principles, but can also have its own distinctive characteristics.")]),e._v(" "),a("p",[e._v("Even within the same blockchain, you can use multiple providers depending on your needs. If you would like to communicate with the blockchain on the front-end, you could use "),a("a",{attrs:{href:"https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#metamask-provider",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("MetamaskProvider")]),e._v(", while for communication on the back-end you could use "),a("a",{attrs:{href:"https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#http-provider",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("HttpProvider")]),e._v(". For more information about other providers for Ethereum, please click "),a("a",{attrs:{href:"https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("here")]),e._v(".")]),e._v(" "),a("p",[e._v("In this guide, we will be using the MetaMask provider for the Ethereum blockchain. "),a("a",{attrs:{href:"https://metamask.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("MetaMask")]),e._v(" is a popular plug-in that allows you to create and store the private keys for your Ethereum account inside your browser or mobile device. It works as a bridge between your browser and the Ethereum blockchain through its own infrastructure. MetaMask can also be paired with hardware wallets such as "),a("a",{attrs:{href:"https://www.ledger.com/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("Ledger")]),e._v(" or "),a("a",{attrs:{href:"https://trezor.io/",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("Trezor")]),e._v(".")]),e._v(" "),a("div",{staticClass:"card custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Live example")]),e._v(" "),a("p",[e._v("Click "),a("a",{attrs:{href:"https://codesandbox.io/s/github/0xcert/example-using-providers?module=%2FREADME.md",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("here")]),e._v(" to check the live example for this section.")])]),e._v(" "),a("h2",{attrs:{id:"installation-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-process"}},[e._v("#")]),e._v(" Installation process")]),e._v(" "),a("p",[e._v("We recommend you employ the provider module as an NPM package in your application.")]),e._v(" "),a("div",{staticClass:"language-ell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm i --save @0xcert/ethereum-metamask-provider\n")])])]),a("p",[e._v("On our official "),a("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("GitHub repository")]),e._v(", we also host a compiled and minimized JavaScript file that can be directly implemented into your website. Please refer to the "),a("a",{attrs:{href:"https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("API")]),e._v(" section to learn more about other providers.")]),e._v(" "),a("h2",{attrs:{id:"usage-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[e._v("#")]),e._v(" Usage overview")]),e._v(" "),a("p",[e._v("To start developing the application, we have to first instantiate the "),a("a",{attrs:{href:"https://docs.0xcert.org/framework/v2/api/ethereum-connectors.html#metamask-provider",target:"_self",rel:"noopener noreferrer alternate"}},[e._v("MetamaskProvider")]),e._v(" provider class. This is usually only needed once within the application. When initializing we also set the gateway config. This is needed for the 0xcert API client to work properly.")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" MetamaskProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" buildGatewayConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" NetworkKind "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@0xcert/ethereum-metamask-provider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" provider "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MetamaskProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  gatewayConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("buildGatewayConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("NetworkKind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("RINKEBY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("MetaMask needs to be authorized and unlocked to be used on the website. This is specific to this provider. Therefore, before you start interacting with the Ethereum node, you should check whether the MetaMask account has been enabled. If not, you have to enable it, as shown in the example below.")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("isEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" provider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);