(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{301:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"certification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#certification"}},[t._v("#")]),t._v(" Certification")]),t._v(" "),a("p",[t._v("Various industries follow different standards. A standard reflects a need for defining a certain best practice and for establishing rules in a particular processor for a specific product. Today, companies and institutions mostly define their own rules of communication, operation, processes, and the format of stored and managed data. To establish more effective communication among them, the concept of system interoperability becomes increasingly valuable. As this idea develops over time, we will see companies and organizations choose interoperable systems more often.")]),t._v(" "),a("h2",{attrs:{id:"interoperability-standards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interoperability-standards"}},[t._v("#")]),t._v(" Interoperability standards")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-721")]),t._v(" has become an important standard for describing non-fungible assets, not just within the Ethereum community but much broader. It has given us rules and directions for describing and managing unique assets. Although it represents an interoperability standard, there's a general misconception about its overall purpose and about which part of the interoperability does it cover. The ERC-721 specification states that the following standard allows for the implementation of a standard API for non-fungible tokens (NFTs) within smart contracts. It also states that it describes a basic functionality to track and transfer assets based on their IDs. So this standard covers the asset ownership aspect.")]),t._v(" "),a("p",[t._v("But wait! The ERC-721 standard identifies unique assets based on IDs? What about data that these IDs represent? How can we make sure that the data under a certain ID actually represents an asset we claim it represents? How can we prove the authenticity of an asset, and how can a third party verify our claims without an intermediary? When we start asking these questions, it becomes clear that the ERC-721 lacks these functionalities and that we need something more opinionated.")]),t._v(" "),a("p",[t._v("The 0xcert Protocol was designed to add context to these IDs. Thus, it supports the cases where non-fungible tokens must also prove metadata authenticity. The 0xcert Protocol extends the ERC-721 features and provides an opinionated, contextified, and interoperable solution that comes in the form of a unique certification process and is based on conventions. To keep concepts truly interoperable, we introduced a new "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/2477",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-2477")]),t._v(" standard which covers the core mechanism of the 0xcert Protocol.")]),t._v(" "),a("p",[t._v("The certification is one of the unique and important parts of the 0xcert Protocol. It consists of protocol conventions that define asset certification and verification steps, unique 0xcert hashing algorithms creating verifiable asset metadata proofs and other artifacts, and the Xcert smart contract API describing the implementation part of the certification logic on immutable storage.")]),t._v(" "),a("h2",{attrs:{id:"certifying-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#certifying-assets"}},[t._v("#")]),t._v(" Certifying assets")]),t._v(" "),a("p",[t._v("Within the 0xcert ecosystem, an asset can represent various certificates, ranging from ISO certificates to car insurance contracts, academic credentials, agreements, and more. The certification process is responsible for generating digital proofs of asset metadata, which can be used by third-party users to verify asset information without intermediaries.")]),t._v(" "),a("p",[t._v("To create such proof for an arbitrary asset, we first need to prepare:")]),t._v(" "),a("ul",[a("li",[t._v("asset "),a("code",[t._v("metadata")]),t._v(" object holding asset information and")]),t._v(" "),a("li",[t._v("asset "),a("code",[t._v("schema")]),t._v(", which describes asset context and metadata structure.")])]),t._v(" "),a("p",[t._v("From these two objects, we then generate:")]),t._v(" "),a("ul",[a("li",[t._v("asset "),a("code",[t._v("imprint")]),t._v(" string representing a cryptographic fingerprint of asset metadata generated through the 0xcert AIH algorithm,")]),t._v(" "),a("li",[t._v("asset "),a("code",[t._v("evidence")]),t._v(" JSON object, which describes disclosed asset metadata and")]),t._v(" "),a("li",[t._v("asset "),a("code",[t._v("schema ID")]),t._v(" string, which uniquely identifies asset schema object and is generated through the 0xcert ASH algorithm.")])]),t._v(" "),a("p",[t._v("These are the main products of the certification process and together hold all the information needed to verify asset information mathematically. The following sections describe the certification process in more detail. The code snippets cover a step-by-step certification process of a simple crypto collectible. You can, however, apply these steps to any arbitrary use case.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/xpepermint/5e69e2654aaa78035db4e3c26cbbab0e",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("FULL EXAMPLE")])]),t._v(" "),a("div",{staticClass:"card custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Live example")]),t._v(" "),a("p",[t._v("Click "),a("a",{attrs:{href:"https://codesandbox.io/s/github/0xcert/example-certification?module=%2FREADME.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("here")]),t._v(" to check the live example for this section.")])]),t._v(" "),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("We recommend you employ the certification module as an NPM package in your application.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @0xcert/cert\n")])])]),a("p",[t._v("On our official open-source "),a("a",{attrs:{href:"https://github.com/0xcert/framework",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("GitHub repository")]),t._v(", we also host a compiled and minimized JavaScript files that can be directly implemented into your application or website. Please also refer to the "),a("router-link",{attrs:{to:"/api/core.html"}},[t._v("API Reference")]),t._v(" section to learn more about certification.")],1),t._v(" "),a("h3",{attrs:{id:"defining-asset-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-asset-metadata"}},[t._v("#")]),t._v(" Defining asset metadata")]),t._v(" "),a("p",[t._v("Asset metadata represents a digital object which holds asset information. It is described in the form of a common JSON object, which conforms to the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/JSON",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("RFC-7159")]),t._v(" specification.")]),t._v(" "),a("p",[t._v("A simple metadata object for a crypto-collectible, which represents a magic sword item in the imaginary Troopers game, can be described with an "),a("code",[t._v("id")]),t._v(", "),a("code",[t._v("name")]),t._v(", "),a("code",[t._v("description")]),t._v(", "),a("code",[t._v("image")]),t._v(" URL and "),a("code",[t._v("power")]),t._v(" properties.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Magic Sword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A weapon for the Troopers game which can severely injure the enemy."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://troopersgame.com/dog.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"power"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You will agree that this JSON object is easily readable when someone reveals metadata context and structure. In reality, these items are most likely read by machines, thus we have to include context information within the metadata itself. The 0xcert Protocol suggests the "),a("code",[t._v("$schema")]),t._v(" property be present in the metadata object, which points to a URI of a JSON object describing asset metadata context and structure. This property should always be present in the public metadata objects. We will talk more about the schema and how to define one in the next chapter. For now, let's just decide that our imaginary schema will be available at "),a("code",[t._v("https://troopersgame.com/")]),t._v(" public address.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://troopersgame.com/dog-schema.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("By adding metadata schema information, we enable automatic machine-level interpretation of metadata objects. With the 0xcert Protocol, we can optionally attach cryptographic proofs for metadata properties, which allow for third-party mathematical verification of asset information. We attach these proofs through the "),a("code",[t._v("$evidence")]),t._v(" property, which points to a URI of a JSON object with metadata proofs. The following sections describe this process in more detail. At this point, we just decide that our imaginary evidence, which will describe public metadata, will be available at "),a("code",[t._v("https://troopersgame.com/")]),t._v(" public address.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$evidence"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://troopersgame.com/dog-evidence.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"defining-asset-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-asset-schema"}},[t._v("#")]),t._v(" Defining asset schema")]),t._v(" "),a("p",[t._v("Within the 0xcert Protocol, a digital asset employs a JSON Schema to describe asset context and data object structure. The asset schema allows for machine-level processing of asset information and thus makes each asset interoperable at the application layer.")]),t._v(" "),a("p",[t._v("Asset schema is a specifically designed JSON object, which conforms to "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/JSON",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("RFC-7159")]),t._v(" and follows the mapping format defined by the "),a("a",{attrs:{href:"http://json-schema.org",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("JSON Schema")]),t._v(" specification. The 0xcert Protocol supports only a subset of JSON Schema specification, which is described by the "),a("a",{attrs:{href:"https://conventions.0xcert.org/xcert-schema.json",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("Xcert JSON Schema")]),t._v(". You should always refer to this JSON Schema subset when writing asset schemas for your projects.")]),t._v(" "),a("p",[t._v("We incentivize the community to agree on standard schema conventions. Schema conventions should be proposed and included in the official 0xcert repository on GitHub. The 0xcert Framework already provides some basic schema conventions for you to use. For the purpose of this guide, we will define a minimal custom asset schema that describes the context and properties of the metadata created earlier.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://conventions.0xcert.org/xcert-schema.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$evidence"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"power"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cryptocollectible"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This JSON file should now be placed on a public address, which we defined in the metadata object in the previous section ("),a("code",[t._v("https://troopersgame.com/dog-schema.json")]),t._v("). When a machine reads the asset metadata, it will be able to understand the asset context and will know how to parse asset information.")]),t._v(" "),a("p",[t._v("Did you notice that a "),a("code",[t._v("description")]),t._v(" property is not included in the schema? We did this intentionally just to show that the metadata object can include arbitrary properties. The schema, however, should include only the properties necessary to be included in the certification process. The properties defined in the schema are verifiable by a third party. Other arbitrary metadata properties are not included in the certification process and are simply ignored.")]),t._v(" "),a("h3",{attrs:{id:"creating-asset-evidence-imprint-and-schema-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-asset-evidence-imprint-and-schema-id"}},[t._v("#")]),t._v(" Creating asset evidence, imprint and schema ID")]),t._v(" "),a("p",[t._v("The previous section explained how a context and metadata structure information are attached to an asset. In this chapter, we dive into the core mistery of certification and calculate the "),a("code",[t._v("imprint")]),t._v(", "),a("code",[t._v("evidence")]),t._v(" and "),a("code",[t._v("schema ID")]),t._v(" artifacts. These are the main products of the certification process defined by the 0xcert Protocol, which allows third-party users to verify asset metadata information without an intermediary.")]),t._v(" "),a("p",[t._v("An imprint represents a cryptographic fingerprint of a complete asset metadata object. It is calculated through the SXH2 algorithm and represents a mathematical proof of asset metadata existence, where at the same time, it ensures metadata confidentiality. The imprint is one of the decentralized artifacts of the certification process and should thus be stored on immutable storage like permissionless public blockchain (e.g., Ethereum) where trust is not an issue and third-party users can autonomously read data.")]),t._v(" "),a("p",[t._v('Unlike the imprint string, the evidence object represents a centralized artifact of the certification process and holds disclosed metadata information. Yes, we used the word "disclosed" because the 0xcert Protocol allows selective metadata verification. This means we can create a subset of metadata including only the selected properties we want to disclose to a third party. We will describe this concept in more detail in one of the following chapters. At this point, we only need to understand that the evidence object holds disclosed metadata property values together with all the required cryptographic proofs needed for someone to verify the asset information.')]),t._v(" "),a("p",[t._v("The final artifact of the certification process is the "),a("code",[t._v("schema ID")]),t._v(" string. It is calculated through the "),a("code",[t._v("Schema Hashing algorithm")]),t._v(" (SHA) and uniquely represents the schema object. This ID must be stored as a part of the immutable storage and identifies storage context (e.g., Ethereum smart contract).")]),t._v(" "),a("p",[t._v("Now let's write some code to see how these artifacts are generated. We already defined asset metadata in associated schema objects.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" metadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the JSON metadata object we defined in previous sections")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the JSON schema object we defined in previous sections")]),t._v("\n")])])]),a("p",[t._v("Next, we create an instance of a magical "),a("code",[t._v("Cert")]),t._v(" class, provided by the "),a("code",[t._v("@0xcert/cert")]),t._v(" NPM package, which provides a complete logic for certifying assets.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@0xcert/cert'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we explain the metadata context and structure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("We can now certify the asset in a few lines of code.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imprint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imprint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evidence "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notarize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schemaId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("identify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("It is very important that we store "),a("code",[t._v("imprint")]),t._v(" and "),a("code",[t._v("schemaId")]),t._v(" strings in permanent, immutable storage. These two artifacts must be available to third-party users at all times and will permanently prove historical asset information in the present. We encourage you to use the Ethereum blockchain mainnet for storing these precious data. At this moment, Ethereum is probably the most decentralized and trusted network on the planet where people can trust the data is indeed genuine. In Ethereum, the schema ID should be stored as a part of the core asset ledger smart contract, and the imprint should be attached to the issued "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("ERC-721 token")]),t._v(". The 0xcert Protocol provides the implementation of such storage convention in the form of an upgraded ERC-721 smart contract API, called the "),a("a",{attrs:{href:"https://github.com/0xcert/framework/tree/e0d4e295f8fbf0b24f465f051cec8f7a6ef7f954/packages/0xcert-ethereum-xcert-contracts",target:"_self",rel:"noopener noreferrer alternate"}},[t._v("Xcert smart contract API")]),t._v(" which represents an asset ledger holding assets on the blockchain. When using the 0xcert Framework, you most likely won't be writing smart contracts but will instead be using higher-level 0xcert connectors, which hide the complexity of interactions within the immutable decentralized storage.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("evidence")]),t._v(" object, however, can be stored in some arbitrary place. In one of the previous sections, we wrote that the imaginary evidence object would be available at "),a("code",[t._v("https://troopersgame.com/")]),t._v(" public address. Yes, we will do this when exposing metadata to the general public. If this is not the case and if we are exposing metadata to a specific user, we can just send the object through an arbitrary communication medium (e.g., e-mail).")]),t._v(" "),a("h3",{attrs:{id:"disclosing-asset-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disclosing-asset-metadata"}},[t._v("#")]),t._v(" Disclosing asset metadata")]),t._v(" "),a("p",[t._v("In most cases, disclosing all asset metadata to a third party seems legitimate, but there are cases where we don't want a third party to know all about the assets we own. The 0xcert Protocol provides a powerful mechanism that supports selective metadata verification. This means we can expose only selected metadata properties and can keep the rest of the metadata private.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selectedProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'power'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exposedMetadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selectedProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" disclosedEvidence "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disclose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selectedProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This code snippet creates a subset of the metadata and the associated evidence object. In this case, only the "),a("code",[t._v("name")]),t._v(" and "),a("code",[t._v("power")]),t._v(" properties are disclosed. This is how you will usually create public asset data for the web or when disclosing private data for a specific user.")]),t._v(" "),a("h3",{attrs:{id:"verifying-asset-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-asset-information"}},[t._v("#")]),t._v(" Verifying asset information")]),t._v(" "),a("p",[t._v("Asset metadata is usually known only to the issuer and the owner of an asset. Both can reveal specific parts of the metadata to a third person at any time.")]),t._v(" "),a("p",[t._v("By now, we covered all the main technical aspects of the certification process. To better understand the concept and the purpose of the certification process, let's look at an imaginary use case where the content of our crypto-collectible needs to be verified by a third party. In this use case, the magic sword was issued to our Ethereum wallet by a trusted imaginary Troopers Game Studio. We trust the issuer, and we know the official asset ledger address because the issuer publishes it on their official public website.")]),t._v(" "),a("p",[t._v("Alright, so we own this awesome in-game item called the magic sword, and other players are dying to have it because of the power it represents within the Troopers game. At some point, we decide to transfer the ownership of this item to John, who is an avid gamer and understands the value of this in-game artifact. We offer John to transfer the ownership of this asset for a reasonable price, so we still make some profit. John agrees with the price, but he is not convinced that our offer is genuine. John is a smart guy and understands that by performing this purchase, we will be transferring ownership of an asset ID "),a("code",[t._v("12")]),t._v(" but who knows what this ID actually represents. Before John is willing to perform this purchase, he wants to verify the authenticity of the crypto-collectible ID "),a("code",[t._v("12")]),t._v(". He is interested in the properties "),a("code",[t._v("id")]),t._v(", "),a("code",[t._v("name")]),t._v(", and "),a("code",[t._v("power")]),t._v(", so we disclose this information to him by following the certification steps from the previous chapter.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selectedProperties "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'power'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" metadataForJohn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selectedProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" evidenceForJohn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disclose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selectedProperties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("John can now recalculate the imprint on his computer from these artifacts.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imprintByJohn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exposedMetadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exposedEvidence"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("John now verifies that the calculated imprint equals the imprint stored within the asset with ID "),a("code",[t._v("12")]),t._v(", stored in the asset ledger owned by the Troopers Game Studio. If the imprint is a match, it proves that we are telling the truth. John can now go ahead and perform the purchase because he was able to mathematically prove that the asset "),a("code",[t._v("12")]),t._v(" indeed represents the magic sword he wants.")]),t._v(" "),a("p",[t._v("Of course, in reality, John would use a dapp that would automate the whole process, leaving nothing to be done by hand. Such dapps would also provide other features like issuing and updating certificates, burning and revoking of certificates, tracking and logging, and much more.")])])}),[],!1,null,null,null);e.default=n.exports}}]);