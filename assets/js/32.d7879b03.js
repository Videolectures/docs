(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{249:function(t,e,s){"use strict";s.r(e);var a=s(3),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transfer-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-value"}},[t._v("#")]),t._v(" Transfer value")]),t._v(" "),s("p",[t._v("In this guide we will transfer value to a specific receiver. For simplicity we will be transfering credits since you already obtained them. But credits can only transfered to one specific address. This is because credits are made to be used only for a specific purpose. When you want to transfer some other ERC20 token you can transfer to anyone.")]),t._v(" "),s("div",{staticClass:"card custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Live example")]),t._v(" "),s("p",[t._v("Click "),s("a",{attrs:{href:"https://codesandbox.io/s/github/0xcert/api-example-order?module=%2FREADME.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("here")]),t._v(" to check the live example for this section. There are multiple actions in this example.")])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("You will need a MetaMask account with some credits.")]),t._v(" "),s("h2",{attrs:{id:"usage-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[t._v("#")]),t._v(" Usage overview")]),t._v(" "),s("p",[t._v("We begin by importing the client modules.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ActionTransferValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActionKind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Priority "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@0xcert/client"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Before we can start transferring "),s("code",[t._v("ERC20")]),t._v(" assets we must initialize our client first.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  apiUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api-rinkeby.0xcert.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("For successful client initialization you need connected 0xcert framework provider instance. See "),s("router-link",{attrs:{to:"/api/guides/providers.html#providers"}},[t._v("Providers")]),t._v(" chapter for detailed instructions. Your provider must be connected to "),s("code",[t._v("Rinkeby")]),t._v(" Ethereum test network.")],1)]),t._v(" "),s("p",[t._v("Once client is initialized, we define our transfer value action.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actionTransferValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ActionTransferValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  kind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ActionKind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TRANSFER_VALUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  valueLedgerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xDaD2363a110309a294973da86c9C3681154394Ff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  senderId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  receiverId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("As "),s("code",[t._v("valueLedgerId")]),t._v(" we must provide the ID representing Ethereum "),s("code",[t._v("ERC20")]),t._v(" smart contract address on which the value will be transferred. As "),s("code",[t._v("senderId")]),t._v(" we set "),s("code",[t._v("provider.accountId")]),t._v(", which means that we will be sending the asset to the receiver. We must specify the receiver of "),s("code",[t._v("ERC20")]),t._v(" assets by setting "),s("code",[t._v("receiverId")]),t._v(" to receiver's address.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Make sure you have enough "),s("code",[t._v("ERC20")]),t._v(" assets of the provided "),s("code",[t._v("valueLedgerId")]),t._v(" smart contract to perform this action.")])]),t._v(" "),s("p",[t._v("After we defined our transfer tokens action, it's time to define our order which will perform the defined action.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  signersIds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    actionTransferValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  wildcardSigner"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  automatedPerform"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  payerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Order must be signed by all of the accounts specified in "),s("code",[t._v("signersIds")]),t._v(" array. In our case, we are transferring our assets, so we are the only signer of the order. We add our defined transfer value action in "),s("code",[t._v("actions")]),t._v(" array. There can be multiple different actions present in one order and they will be atomically performed. If "),s("code",[t._v("wildcardSigner")]),t._v(" is set to "),s("code",[t._v("true")]),t._v(" order can be signed by any account. In our case we need only our signature for the order to be successfully performed, so we set "),s("code",[t._v("wildcardSigner")]),t._v(" to "),s("code",[t._v("false")]),t._v(". We want our order to be performed as soon as it can be, so we enable automated performance of the order by setting "),s("code",[t._v("automatedPerform")]),t._v(" to "),s("code",[t._v("true")]),t._v(". Order will be automatically performed after all of the requirements of the order are fulfilled. If "),s("code",[t._v("automatedPerform")]),t._v(" was set to "),s("code",[t._v("false")]),t._v(" we would need to call "),s("code",[t._v("performOrder(orderRef)")]),t._v(" function after the order creation. As "),s("code",[t._v("payerId")]),t._v(" we set "),s("code",[t._v("provider.accountId")]),t._v(", so we will be paying for the execution of the order. To learn more about different scenarios check out the "),s("router-link",{attrs:{to:"/api/guides/additional-scenarios.html"}},[t._v("Additional scenarios")]),t._v(" section.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If payer is not specified "),s("code",[t._v("wildcardSigner")]),t._v(" field must be set to "),s("code",[t._v("true")]),t._v(" and order's payer will be set automatically. If payer is specified it must be listed as order signer in "),s("code",[t._v("signersIds")]),t._v(" array.")])]),t._v(" "),s("p",[t._v("After our actions order is defined we can finally create it.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actionsOrder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Priority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HIGH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Make sure you have enough credits to perform this action.")])]),t._v(" "),s("p",[t._v("Since actions order performance might take some time, we can check the order's status by requesting its data.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("actionsOrder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If the status of the action order equals to "),s("code",[t._v("7")]),t._v(", we know that our order was performed successfully a "),s("code",[t._v("ERC20")]),t._v(" assets were transferred.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can also set up and receive webhooks. In this scenario you will receive webhooks when our order changes (updated or successful) or if it fails. You can learn more about webhooks in chapter "),s("router-link",{attrs:{to:"/api/api/client.html#webhooks"}},[t._v("Webhooks")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);