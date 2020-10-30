(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{217:function(t,e,a){t.exports=a.p+"assets/img/atomic-swap.33e9e009.svg"},267:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"atomic-orders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atomic-orders"}},[t._v("#")]),t._v(" Atomic orders")]),t._v(" "),s("p",[t._v("If you want to exchange assets with someone in a trustless way, not depending on a third party nor accepting counterparty risk, atomic orders are the way to go.")]),t._v(" "),s("p",[t._v("Atomic order is a way of creating an atomic swap within the 0xcert Framework. It is a set of instructions for what you will execute in a single mutation and with only two possible results. Either the mutation will succeed and all participants will receive their assets, or the mutation will fail and the operation will return to its starting point.")]),t._v(" "),s("h2",{attrs:{id:"how-it-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),s("p",[t._v("An Atomic swap operation is always an order between a maker and a taker. A maker is the one who creates an order, signs it and sends it to the taker, who in turn executes the order and pays the execution fee. There are two different models when defining an order:")]),t._v(" "),s("ol",[s("li",[t._v("You know who will execute the order and you want them any only them to execute it. For example, you want to send a diploma to a specific receiver.")]),t._v(" "),s("li",[t._v("You do not care who will execute the order. For example, you are selling a digital artwork to anyone who wants to buy it.")])]),t._v(" "),s("p",[t._v("In case 1, both Maker and Taker need to be defined and every action in the order needs to have a sender and receiver.")]),t._v(" "),s("p",[t._v("In case 2, only the Maker is defined, and in the actions either sender or receiver can be left undefined and will automatically be assigned to whoever will perform the action.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(217),alt:"Atomic swap"}})]),t._v(" "),s("p",[t._v("Multiple actions can be performed in such a manner. Currently supported actions include transferring assets, transferring value, or creating new assets. Using atomic orders provides multiple advantages in addition to trustlessness and safety. You can delegate paying storage fees to another user as well as delegate the time when a mutation should be made.")]),t._v(" "),s("p",[t._v("The 0xcert Framework provides automatization to ensure that a specific agreement among multiple parties is reached. There are only two possible outcomes for an atomic swap:")]),t._v(" "),s("ul",[s("li",[t._v("Successful completion of the trade for all parties involved; or")]),t._v(" "),s("li",[t._v("Abolition of the process and returning to the starting point if the swap operation encounters issues in its settlement.")])]),t._v(" "),s("p",[t._v("There is no middle ground for an atomic swap's outcome which reduces the possibility of one party taking advantage over the other.")]),t._v(" "),s("p",[t._v("Atomic swaps are performed through the Order Gateway structure which is permanently deployed on the 0xcert platform and is publicly available to everyone. A fixed sequence of required steps and conditions is secured by cryptography embedded in the order gateway. Once all steps are completed, the swap is confirmed and successfully settled. If not, the atomic swap process is abolished and canceled, with no effect on the assets that were subject to swap.")]),t._v(" "),s("p",[t._v("While the trade agreement is created in an off-chain environment between trading parties, the settlement of the trade done by atomic swap is performed entirely on-chain. This makes every single step of the operation trackable and verifiable.")]),t._v(" "),s("div",{staticClass:"card custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("More about atomic swaps")]),t._v(" "),s("p",[t._v("For more information on the actual process of atomic operation, please check "),s("a",{attrs:{href:"https://0xcert.org/news/dex-series-7-atomic-swaps/",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("this article")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"card custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Learn by example")]),t._v(" "),s("p",[t._v("Click "),s("a",{attrs:{href:"https://stackblitz.com/edit/atomic-order-example",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("here")]),t._v(" to check the live example for this section.")])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("We recommend you employ the package as an NPM package in your application.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @0xcert/ethereum-order-gateway\n")])])]),s("p",[t._v("On our official "),s("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("GitHub repository")]),t._v(", we also host a compiled and minimized JavaScript file that can be directly implemented in your website. Please refer to the "),s("router-link",{attrs:{to:"/api/core.html"}},[t._v("API")]),t._v(" section to learn more about order gateway.")],1),t._v(" "),s("h2",{attrs:{id:"usage-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[t._v("#")]),t._v(" Usage overview")]),t._v(" "),s("p",[t._v("To demonstrate the greatness of atomic swap operations, we will transfer an existent asset to a new wallet, then create a new asset and send it to the main wallet. All within a single mutation. First, we will prepare the state that allows us to execute the plan.")]),t._v(" "),s("p",[t._v("These guidelines assume that you have followed the complete guide and taken all the steps from both "),s("router-link",{attrs:{to:"/guide/certification.html"}},[t._v("Certification")]),t._v(" and "),s("router-link",{attrs:{to:"/guide/asset-management.html"}},[t._v("Asset management")]),t._v(" sections, where we created a new asset with the ID "),s("code",[t._v("100")]),t._v(". For the purpose of this guide, please make sure you have opened two MetaMask accounts. In this example, we'll name the second account as "),s("code",[t._v("0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa")]),t._v(", you may change it if you like.")],1),t._v(" "),s("p",[t._v("As usual, we first import a module into the application. This time, we import the "),s("code",[t._v("OrderGateway")]),t._v(" class which represents a wrapper around a specific pre-deployed structure on the Ethereum network.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" OrderGateway "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/ethereum-order-gateway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Then, we create a new instance of the "),s("code",[t._v("OrderGateway")]),t._v(" class with an ID that points to a pre-deployed order gateway on the Ethereum Ropsten network (this option can also be configured in the provider).")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" orderGatewayId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x073d230a53bffc8295d9a5247296213298e3fbcf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" orderGateway "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" OrderGateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orderGatewayId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now, we can define an order with two actions: the first action transfers an existing asset that we created in the "),s("router-link",{attrs:{to:"/guide/asset-management.html"}},[t._v("Asset management")]),t._v(" section into our second MetaMask wallet. In the second action, we create a new asset with ID "),s("code",[t._v("200")]),t._v(" and imprint created in the "),s("router-link",{attrs:{to:"/guide/certification.html"}},[t._v("Certification")]),t._v(" section.")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("For the purpose of simplicity of this guide, we will be both the maker and the taker of the order. For the "),s("code",[t._v("makerId")]),t._v(" and "),s("code",[t._v("takerId")]),t._v(", we will employ our current MetaMask account.")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OrderActionKind "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/ethereum-order-gateway'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" order "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    makerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    takerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            kind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OrderActionKind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TRANSFER_ASSET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            ledgerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" assetLedgerId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            senderId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            receiverId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            assetId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            kind"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OrderActionKind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CREATE_ASSET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            ledgerId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" assetLedgerId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            senderId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            receiverId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" provider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accountId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            assetId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            assetImprint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa431acea5ded5d83ea45f1caf39da9783775c8c8c65d30795f41ed6eff45e1b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// imprint generated in the certification step")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    seed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unique order identification")]),t._v("\n    expiration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 day")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("When you work on a real case, make sure to set the "),s("code",[t._v("takerId")]),t._v(" correctly. If you want your colleague or a third party to execute an order, you should insert their Ethereum wallet address as the "),s("code",[t._v("takerId")]),t._v(".")]),t._v(" "),s("p",[t._v("The following step is made only by the maker, i.e. the person who creates an order.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" signedClaim "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" orderGateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("claim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("By calling the "),s("code",[t._v("claim")]),t._v(" function, we sign the order. Now, we need to send this signature to the taker, together with the "),s("code",[t._v("order")]),t._v(" object via an arbitrary communication channel.")]),t._v(" "),s("p",[t._v("All participants in the order must unlock the transferred assets and allow the "),s("code",[t._v("OrderGateway")]),t._v(" to manage them. Make sure this step is done by every party that performs a transfer within order operations. In the example below, we authorize the "),s("code",[t._v("OrderGateway")]),t._v(" to transfer the asset with ID "),s("code",[t._v("100")]),t._v(" to another address and give it the ability to create assets.")]),t._v(" "),s("p",[t._v("The "),s("router-link",{attrs:{to:"/api/core.html#asset-proof"}},[t._v("API")]),t._v(" section contains information about how to authorize the order gateway for all the assets simultaneously, to avoid repeating approval for each individual asset (this is especially useful in the case of a decentralized exchange).")],1),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// approve account for transfering asset")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("approveAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" orderGateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// assign ability to mint")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grantAbilities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orderGateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GeneralAssetLedgerAbility"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CREATE_ASSET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Don't forget to create an instance of "),s("code",[t._v("assetLedger")]),t._v(" and to import "),s("code",[t._v("GeneralAssetLedgerAbility")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"card custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Why instance of OrderGateway?")]),t._v(" "),s("p",[t._v("Order gateway is comprised of multiple smart contracts. To save your time from having to know their addresses, we handle it under the hood; however the instance of "),s("code",[t._v("OrderGateway")]),t._v(" is required so that we know how to process it. You can also do this manually by finding the exact proxy contracts for the order gateway, but we recommend using "),s("code",[t._v("OrderGateway")]),t._v(" instance and let the framework handle it for you.")])]),t._v(" "),s("p",[t._v("The following step is done only by the taker, who executes the order on the network and pays the execution fees. For the purpose of this guide, we define the same account for both maker and taker, since we are present on both sides.")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" orderGateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("perform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("order"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" signedClaim"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" mutation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("complete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("By now, the asset with ID "),s("code",[t._v("100")]),t._v(" should be present in our new wallet, while the main wallet should be left with the new asset with ID "),s("code",[t._v("200")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" owner100Id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAssetAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 0x...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" owner200Id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" assetLedger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAssetAccount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> 0x...")]),t._v("\n")])])]),s("p",[t._v("To learn more about atomic operations on Ethereum, please refer to the "),s("router-link",{attrs:{to:"/api/ethereum.html#orders-gateway"}},[t._v("API for Ethereum")]),t._v(" section. For more information on atomic operations on Wanchain, please refer to the "),s("router-link",{attrs:{to:"/api/wanchain.html#order-gateway"}},[t._v("API for Wanchain")]),t._v(" section.")],1),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("We have now come to the end of our basic guide. Hopefully, you have grasped the basic concepts of the framework, for further information, you may check how the features work in the "),s("router-link",{attrs:{to:"/api/core.html"}},[t._v("API section")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);