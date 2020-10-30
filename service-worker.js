/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0xcert-framework.svg",
    "revision": "82d69102af8178f89d620d53a8dd46e1"
  },
  {
    "url": "0xcert-logo.svg",
    "revision": "780242d9a166ea4703aa89253b275583"
  },
  {
    "url": "404.html",
    "revision": "2a5cd7ccab5742e8fe4346e69007aac1"
  },
  {
    "url": "api-icon.svg",
    "revision": "df67661118113e7c8d05ffbb9cd882e1"
  },
  {
    "url": "api/api/certification.html",
    "revision": "64502747db02b45da33568b5b8d9c2c4"
  },
  {
    "url": "api/api/client.html",
    "revision": "bd301c5bfcc314875f2f1a2bd033cca4"
  },
  {
    "url": "api/api/rest.html",
    "revision": "486d5dfc1d161d92b31b97ef17403462"
  },
  {
    "url": "api/guides/additional-scenarios.html",
    "revision": "7677c25385e20bf529581db0a633b59a"
  },
  {
    "url": "api/guides/approve-asset-transfer.html",
    "revision": "b51d20951ebc4ce8bc5b71585e414d73"
  },
  {
    "url": "api/guides/asset-ledger-deployment.html",
    "revision": "cae9047ae3d44290df5aca777d833676"
  },
  {
    "url": "api/guides/atomic-operations.html",
    "revision": "07d6b9c658025ccf804f3c45b162f10a"
  },
  {
    "url": "api/guides/certification.html",
    "revision": "164a2652dc3cbd23bfcd32060e781788"
  },
  {
    "url": "api/guides/dashboard.html",
    "revision": "eaa481760d09d29840e06949ce493eba"
  },
  {
    "url": "api/guides/destroy-asset.html",
    "revision": "9dc20e2b0db16ae981cc6f359fe26e51"
  },
  {
    "url": "api/guides/fungible-values.html",
    "revision": "a9dc8d7f0744924d86fe99ce1be67fe3"
  },
  {
    "url": "api/guides/get-credits.html",
    "revision": "b8e977ee9013fdb025388c186e230324"
  },
  {
    "url": "api/guides/installation.html",
    "revision": "50b7a4a96f4b05860dcc62e3e6959bc4"
  },
  {
    "url": "api/guides/issue-asset.html",
    "revision": "46555e5159bd1432683b448d88f5d55a"
  },
  {
    "url": "api/guides/non-fungible-assets.html",
    "revision": "d41d44479f988387d266f5ddf0784fc3"
  },
  {
    "url": "api/guides/providers.html",
    "revision": "15d86858dd4c8a35287b28795fc39682"
  },
  {
    "url": "api/guides/set-asset-ledger-abilities.html",
    "revision": "113b693503411ead804153446dda92c8"
  },
  {
    "url": "api/guides/transfer-asset.html",
    "revision": "850e53444e4fe7c0078aa57f40bff6da"
  },
  {
    "url": "api/guides/transfer-value.html",
    "revision": "2385a41b0f124e5306dc9dd56d071d92"
  },
  {
    "url": "api/guides/update-asset-imprint.html",
    "revision": "1f36d6863d056846d85ee9e3f0ab8536"
  },
  {
    "url": "api/guides/use-cases.html",
    "revision": "f4a0032be9324fc8668bd041a3b6887e"
  },
  {
    "url": "api/index.html",
    "revision": "2ed455d68d4cce37f61ec266ea9eeb72"
  },
  {
    "url": "api/schemas/86-base-asset-schema.html",
    "revision": "9f3247241cfa868743d01f82a0b2371a"
  },
  {
    "url": "api/schemas/87-asset-evidence-schema.html",
    "revision": "2059d4c4955c4e86612fe00a43745a5c"
  },
  {
    "url": "api/schemas/88-crypto-collectible-schema.html",
    "revision": "72632959a2a98b50b99451e47ef34fba"
  },
  {
    "url": "api/schemas/xcert-schema.html",
    "revision": "a071de37610c7879adff973108afa86e"
  },
  {
    "url": "assets/css/0.styles.97a5db50.css",
    "revision": "d980e7241d63ce13723cf3f79a901889"
  },
  {
    "url": "assets/img/atomic-swap.33e9e009.svg",
    "revision": "33e9e009fd08bc8d33037e7612c718bf"
  },
  {
    "url": "assets/img/block_balance.76df9697.svg",
    "revision": "76df969771b008e4c91ecba8efc7c865"
  },
  {
    "url": "assets/img/certification.31c7b71d.svg",
    "revision": "31c7b71d4c8fd6a766c108d2ff494226"
  },
  {
    "url": "assets/img/conflicts-explained.c37f02a2.svg",
    "revision": "c37f02a29cb1699937146a8acb6fdce4"
  },
  {
    "url": "assets/img/dashboard.16371e3e.svg",
    "revision": "16371e3ebd00b65330840c8ac581ed64"
  },
  {
    "url": "assets/img/deposit-options.5d6d1f98.png",
    "revision": "5d6d1f98ad1757646a2d42b0db7cdbbf"
  },
  {
    "url": "assets/img/exposed-part.5e486307.svg",
    "revision": "5e48630774daf3592db57d1454aa3b08"
  },
  {
    "url": "assets/img/login.4079c082.svg",
    "revision": "4079c08226ab1fce2cdfb44c124eab35"
  },
  {
    "url": "assets/img/no-conflicting-proogs.a3213736.svg",
    "revision": "a32137363710f3ee693cbd9c072ae3a4"
  },
  {
    "url": "assets/img/notarized.e62f8d82.svg",
    "revision": "e62f8d828e030c82db405054e14d705f"
  },
  {
    "url": "assets/img/part-proved.c1187f5f.svg",
    "revision": "c1187f5f1951d21e14a64ee515e22217"
  },
  {
    "url": "assets/img/request-details.cabc2414.svg",
    "revision": "cabc24145895fe13025c229bddea9cca"
  },
  {
    "url": "assets/img/scheme_1.4b756bc1.svg",
    "revision": "4b756bc1575b7bdb18b62f706659a2a9"
  },
  {
    "url": "assets/img/scheme_1.4e83c37f.svg",
    "revision": "4e83c37fa32170bfa902024b974ce4a4"
  },
  {
    "url": "assets/img/scheme_2.1806743d.svg",
    "revision": "1806743d3971430f0c0c5bd6b2641fd2"
  },
  {
    "url": "assets/img/scheme_3.6fecffe4.svg",
    "revision": "6fecffe4ee3161e49c44902379f6691f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zero-info.eab30f82.svg",
    "revision": "eab30f82996642dc34cfefcc90e61222"
  },
  {
    "url": "assets/js/10.2277c913.js",
    "revision": "e17af8aa8634e19a1ef043a9cc489e6e"
  },
  {
    "url": "assets/js/11.6f1b0b1d.js",
    "revision": "cdd5ede040482b111e05522f1ebb5ac0"
  },
  {
    "url": "assets/js/12.a34ff170.js",
    "revision": "f715b9d3fd5a43f0b9ab1f9fa5ac3860"
  },
  {
    "url": "assets/js/13.d87b2481.js",
    "revision": "019406a93e346e4ce7adf7048c8cec9f"
  },
  {
    "url": "assets/js/14.4c758c0f.js",
    "revision": "a127186791800edb2ad9c2cd86482dfa"
  },
  {
    "url": "assets/js/15.ff735b42.js",
    "revision": "3cf50b69e29d4d67ea25c7966f82a8a2"
  },
  {
    "url": "assets/js/16.8616de88.js",
    "revision": "4b19b1a5c2071e648a2009f5989d6027"
  },
  {
    "url": "assets/js/17.7a096c73.js",
    "revision": "f1c25ed2f11afb7132f5336e8bec17fe"
  },
  {
    "url": "assets/js/18.df55d4c7.js",
    "revision": "3bff5f85537189e90ec0ffb03da1d8c4"
  },
  {
    "url": "assets/js/19.21c246ac.js",
    "revision": "41a2309426c809009843a24d6cc7baf0"
  },
  {
    "url": "assets/js/2.5351199c.js",
    "revision": "37d3fb5524cbf7b7ef95815f56a85efc"
  },
  {
    "url": "assets/js/20.d997995a.js",
    "revision": "51c2b69162b6b54934843d62bbd925af"
  },
  {
    "url": "assets/js/21.bad4ed5d.js",
    "revision": "ac3c249b623ba62235ffade3ad0e0654"
  },
  {
    "url": "assets/js/22.7a95674e.js",
    "revision": "65206e87156a98027fba8103085f9b7c"
  },
  {
    "url": "assets/js/23.570e24a4.js",
    "revision": "404d6ecb13fa1aad9c50ff284a67e4ab"
  },
  {
    "url": "assets/js/24.334a6fa9.js",
    "revision": "7f6c63e1005af96cb996530fa2b9f44f"
  },
  {
    "url": "assets/js/25.3bb9e535.js",
    "revision": "d47026d2a7a3001bdc2aae12166ac10f"
  },
  {
    "url": "assets/js/26.7fd1cafc.js",
    "revision": "e7e8871aa23a21f25913d5b076ae5198"
  },
  {
    "url": "assets/js/27.8807a221.js",
    "revision": "cb5e136ef632664b14661ddc3baa97e7"
  },
  {
    "url": "assets/js/28.c4f5906e.js",
    "revision": "a9db16a325a08cdcc038e63db4323852"
  },
  {
    "url": "assets/js/29.a20d440f.js",
    "revision": "af3c9adbe3624accfd2f329c1b62d901"
  },
  {
    "url": "assets/js/3.d9706aa8.js",
    "revision": "318ed46d80c64ef04435de487d4421d4"
  },
  {
    "url": "assets/js/30.b584d461.js",
    "revision": "61c29ca47c1f7a1409a86838de81bacf"
  },
  {
    "url": "assets/js/31.ccf8ce14.js",
    "revision": "277e0abf18b287b448a99b8cc462c3e1"
  },
  {
    "url": "assets/js/32.d7879b03.js",
    "revision": "34f7077f30d7d1af9dd7c1f5be1a4008"
  },
  {
    "url": "assets/js/33.14f042b7.js",
    "revision": "2e261c225844da120c57166ee28a8c44"
  },
  {
    "url": "assets/js/34.69c8c5f1.js",
    "revision": "1adf5b37f748dc41ca7f2d1e23f7bbba"
  },
  {
    "url": "assets/js/35.79a80416.js",
    "revision": "d07d4adfce71e9fb63f7200057789b67"
  },
  {
    "url": "assets/js/36.be0a2966.js",
    "revision": "4fcb749f0551be503c9ccb86ae351905"
  },
  {
    "url": "assets/js/37.1b016ce3.js",
    "revision": "798cd31b6b90b2b038631a153af2deae"
  },
  {
    "url": "assets/js/38.f6e8d6fc.js",
    "revision": "4f77568a60d0470176fe22d7149a2760"
  },
  {
    "url": "assets/js/39.8dfe8654.js",
    "revision": "c4e843399cc6d817129b22fd68045371"
  },
  {
    "url": "assets/js/4.16d3443a.js",
    "revision": "657c4dc4e7b555e66fe6a3fecc459369"
  },
  {
    "url": "assets/js/40.da414b8f.js",
    "revision": "69f6dad440e8a65aa8f3ccdd3895f9bd"
  },
  {
    "url": "assets/js/41.1a4499ff.js",
    "revision": "8baf27bb7777a069517c2fdaee1798c1"
  },
  {
    "url": "assets/js/42.860480ce.js",
    "revision": "44ded82de63e50087b67cb9af5084f63"
  },
  {
    "url": "assets/js/43.d30532d9.js",
    "revision": "927d5af6020a2f74f26ff5fde5fb9911"
  },
  {
    "url": "assets/js/44.a3fe1875.js",
    "revision": "163adf557bafaecfb0654f9a664e2238"
  },
  {
    "url": "assets/js/45.fd3160f9.js",
    "revision": "bcb9f4dbfb89b050514e3b244c27bbae"
  },
  {
    "url": "assets/js/46.e214237a.js",
    "revision": "77fb31a6bc4014687267ce8148ad948f"
  },
  {
    "url": "assets/js/47.80d166e7.js",
    "revision": "d22e8720fd51d84ed54a36537adabd35"
  },
  {
    "url": "assets/js/48.c186c07c.js",
    "revision": "19fdf8d9bcc74d72fea4006bc5b67b0c"
  },
  {
    "url": "assets/js/49.e78069e6.js",
    "revision": "000381dbbc53bde71be68b330830f76a"
  },
  {
    "url": "assets/js/5.288ef22c.js",
    "revision": "03bf761c2e610d3c28960f389b357647"
  },
  {
    "url": "assets/js/50.a769f8de.js",
    "revision": "65d5248e6ee5280e0e8110021de6a0d4"
  },
  {
    "url": "assets/js/51.1c0d6c88.js",
    "revision": "d944aef60f9408623df6a5458482dfd0"
  },
  {
    "url": "assets/js/52.d259651e.js",
    "revision": "d1bd341b44ed9f146f3aab876f1a789e"
  },
  {
    "url": "assets/js/53.8e268332.js",
    "revision": "64f416fab81cbcd4ba13508d835f3590"
  },
  {
    "url": "assets/js/54.bd57017f.js",
    "revision": "201413fe9243809d934ca557f64fb1e1"
  },
  {
    "url": "assets/js/55.f34aa6d1.js",
    "revision": "a78a5ee1de3c3f5185f957705f6ae846"
  },
  {
    "url": "assets/js/56.b4f2922a.js",
    "revision": "a50a696b6208254abdf69d0d7ceed614"
  },
  {
    "url": "assets/js/57.148c8d98.js",
    "revision": "906e044d96e23ab88a5593553e0c95c6"
  },
  {
    "url": "assets/js/58.22bad604.js",
    "revision": "3f07551df9f7ccb01f2cea29b987b8cc"
  },
  {
    "url": "assets/js/59.645b4e68.js",
    "revision": "4b467618922ff6c0e5613265822f3efc"
  },
  {
    "url": "assets/js/6.60320752.js",
    "revision": "84c1952a5624379040abdd48ad8356bc"
  },
  {
    "url": "assets/js/60.d12f4d92.js",
    "revision": "2392a36ca5062f5f4ba3557e1c08af86"
  },
  {
    "url": "assets/js/61.5e4d3104.js",
    "revision": "a5f81dfb132625bc1e778e9b8ed6bec5"
  },
  {
    "url": "assets/js/62.e233f41a.js",
    "revision": "1f174ec83dfe8abd304e92f974795977"
  },
  {
    "url": "assets/js/63.983615e7.js",
    "revision": "bc31abbdafa9d9c98f5d31ce18f3f01b"
  },
  {
    "url": "assets/js/64.e20547b8.js",
    "revision": "b913f6dc293e9835033629f862762b6d"
  },
  {
    "url": "assets/js/65.c415c92e.js",
    "revision": "d055c4202a28bc4b2c93627cfbcbcddd"
  },
  {
    "url": "assets/js/66.353a1614.js",
    "revision": "dc8f23d0921a722cac31902c99cde8da"
  },
  {
    "url": "assets/js/67.2df8126d.js",
    "revision": "6c1d2594ce44ec2ac06dfd5f3bc68356"
  },
  {
    "url": "assets/js/68.375d87b3.js",
    "revision": "9ebbfcf7cc2985fe9cdec7a70b159740"
  },
  {
    "url": "assets/js/69.ee4fe147.js",
    "revision": "78323820bb063e72c07011c7087655ee"
  },
  {
    "url": "assets/js/7.6abbfced.js",
    "revision": "e107e613de9782e4674ce984df475e16"
  },
  {
    "url": "assets/js/70.7fccdd77.js",
    "revision": "b9d570feff434eccb295783d0084afa6"
  },
  {
    "url": "assets/js/71.9636a4df.js",
    "revision": "a7a39d37f001d40d9a8fe8e168759b21"
  },
  {
    "url": "assets/js/72.911eda69.js",
    "revision": "bea57e2ba15593c957fb2aa231193886"
  },
  {
    "url": "assets/js/73.c19f8450.js",
    "revision": "7e20f4771ebd743f2d91285785b1be7e"
  },
  {
    "url": "assets/js/74.a2da4ff4.js",
    "revision": "94549a9731946f5ae17617e16bada1b6"
  },
  {
    "url": "assets/js/75.49521020.js",
    "revision": "502e286f85e3f9339e590f7ee08ded80"
  },
  {
    "url": "assets/js/76.fc94e93e.js",
    "revision": "86c6945aa1afe99cdba579d68461e1cc"
  },
  {
    "url": "assets/js/77.3b77a324.js",
    "revision": "04ffcca4280798b5a9bfea59d4892c86"
  },
  {
    "url": "assets/js/8.b27c0d14.js",
    "revision": "da1d2e47972cf7b2eca71fbcc4cd89ac"
  },
  {
    "url": "assets/js/9.4517449b.js",
    "revision": "2e4a8d3f40523d3c8fb5bed8a11c0082"
  },
  {
    "url": "assets/js/app.25c637a9.js",
    "revision": "c3dcaa225492b9b2811ce786c1553044"
  },
  {
    "url": "background.svg",
    "revision": "5dfa0b3c79465dfa2a64827a18d32db0"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "ee5337ae1b09f2659e992aec8ec50afd"
  },
  {
    "url": "ethereum.png",
    "revision": "e87ef377b6298693af14e868e7bd9d54"
  },
  {
    "url": "favicon.png",
    "revision": "95a4dd7b4970ca0eb015e3a10c3e6394"
  },
  {
    "url": "framework-icon.svg",
    "revision": "238a8eda04c75c7ca680da3cfacbb6b8"
  },
  {
    "url": "framework/v1/api/core.html",
    "revision": "141489effc3b7c4def7eface83770fb7"
  },
  {
    "url": "framework/v1/api/ethereum.html",
    "revision": "e54ab7f2f7c4aaaf6aefe250e46e34ad"
  },
  {
    "url": "framework/v1/api/wanchain.html",
    "revision": "8e8b27495bcf25ffaf156fa8deddc6b6"
  },
  {
    "url": "framework/v1/guide/about-assets.html",
    "revision": "95b645b855746e36d697b20715e13c49"
  },
  {
    "url": "framework/v1/guide/about-cryptocurrency.html",
    "revision": "712d948170436b47fac7d2c61d1c7df3"
  },
  {
    "url": "framework/v1/guide/asset-management.html",
    "revision": "c888ad5d05c8e3b737abcbb2d2ef64be"
  },
  {
    "url": "framework/v1/guide/atomic-orders.html",
    "revision": "8d0f67de336a2594d8c61b390edfe6b2"
  },
  {
    "url": "framework/v1/guide/certification.html",
    "revision": "232cba0f15260a4cf939630b7077f027"
  },
  {
    "url": "framework/v1/guide/communication.html",
    "revision": "111a8a900e6087cb2d96683808749563"
  },
  {
    "url": "framework/v1/guide/getting-started.html",
    "revision": "ad5baf1503b93f2ec255d7bb296764d9"
  },
  {
    "url": "framework/v1/guide/introduction.html",
    "revision": "ee219511ec3fef728cca0961dc122850"
  },
  {
    "url": "framework/v1/guide/threat-models.html",
    "revision": "4e377099f9efe8c6f134543b3f73e67f"
  },
  {
    "url": "framework/v1/guide/using-providers.html",
    "revision": "87a5795df0f7b3242684cf2a70d1e330"
  },
  {
    "url": "framework/v1/guide/value-management.html",
    "revision": "027e4008c45036b48e4e65c91d99b404"
  },
  {
    "url": "framework/v1/index.html",
    "revision": "a85bd1f20e562a1e01ae342408255bbb"
  },
  {
    "url": "framework/v1/plugins/vuejs.html",
    "revision": "05431a2d14df602cc711e3479a34715a"
  },
  {
    "url": "framework/v2/api/0xcertapi-client.html",
    "revision": "6abe6b10ce503ddfc6c00cb57311df86"
  },
  {
    "url": "framework/v2/api/certification.html",
    "revision": "6e75dc3343b469aceb6283b020249c43"
  },
  {
    "url": "framework/v2/api/ethereum-connectors.html",
    "revision": "33356be81d97c46bcb970ad257c81e54"
  },
  {
    "url": "framework/v2/api/vuejs-plugin.html",
    "revision": "35a27440965514a33a56fe5cb42bda0c"
  },
  {
    "url": "framework/v2/api/wanchain-connectors.html",
    "revision": "60c3722bc191e94388ba818be4598284"
  },
  {
    "url": "framework/v2/guides/asset-management.html",
    "revision": "585dc488846481081bc5d44313f68c98"
  },
  {
    "url": "framework/v2/guides/atomic-actions.html",
    "revision": "82fe9eae11f25773d26ccf565d29584b"
  },
  {
    "url": "framework/v2/guides/atomic-approval.html",
    "revision": "46249c0a416b7f59af8dd71b662c192e"
  },
  {
    "url": "framework/v2/guides/atomic-deployments.html",
    "revision": "11b9a28ffa101d08af3ed398b7a74fe6"
  },
  {
    "url": "framework/v2/guides/certification.html",
    "revision": "b305d0001e1cdceb65bf05e81f3f589b"
  },
  {
    "url": "framework/v2/guides/communication.html",
    "revision": "77f783340c4642e5f72f926479d02a85"
  },
  {
    "url": "framework/v2/guides/providers.html",
    "revision": "9c758efc7574f49e70d504b690bb981d"
  },
  {
    "url": "framework/v2/guides/value-management.html",
    "revision": "37267932d0af804d1951020140fe4dca"
  },
  {
    "url": "framework/v2/index.html",
    "revision": "3605e11716e2517b19645b31666ce07c"
  },
  {
    "url": "framework/v2/introduction/0xcert-tokens.html",
    "revision": "fdfaae5523e33cf65905cc4e5f4c82bc"
  },
  {
    "url": "framework/v2/introduction/atomic-transactions.html",
    "revision": "54f1f72036b540954d19df47879f5e2f"
  },
  {
    "url": "framework/v2/introduction/authenticity.html",
    "revision": "e4e1178ae6bb283036d98d91210e32ba"
  },
  {
    "url": "framework/v2/introduction/fungible-values.html",
    "revision": "f6b6b33596ed2a717d77599541ce0e87"
  },
  {
    "url": "framework/v2/introduction/getting-started.html",
    "revision": "771810cd13a103a0f84f023dfb77924d"
  },
  {
    "url": "framework/v2/introduction/interoperability.html",
    "revision": "a0c047f3da1c9a654e66110b7f81e92d"
  },
  {
    "url": "framework/v2/introduction/non-fungible-assets.html",
    "revision": "724368f65c1e5e7d66664ff3f38b2ca1"
  },
  {
    "url": "framework/v2/introduction/threat-models.html",
    "revision": "e595187c4a2ed04713687d74563ed244"
  },
  {
    "url": "framework/v2/schemas/86-base-asset-schema.html",
    "revision": "c5dc3d949a4e8820ed36f312aa265838"
  },
  {
    "url": "framework/v2/schemas/87-asset-evidence-schema.html",
    "revision": "011c597262a6dbb411d767f68fcc5f4f"
  },
  {
    "url": "framework/v2/schemas/88-crypto-collectible-schema.html",
    "revision": "c8fc88bc404572505dd5522c00c2ae30"
  },
  {
    "url": "framework/v2/schemas/xcert-schema.html",
    "revision": "2c2f037d36b2fed59e1123e32707e0d6"
  },
  {
    "url": "hero-image.svg",
    "revision": "7a23f7cc21f915a46ce92c59b8984d3b"
  },
  {
    "url": "index.html",
    "revision": "3f706f676e7af5432ae3e08d50f9d344"
  },
  {
    "url": "logo_0xcert.svg",
    "revision": "1b51dc3973753349a7c9c72a4c37fb3a"
  },
  {
    "url": "logo_alliance.svg",
    "revision": "077c3f0fc6e4955815f8e9d7d4d53e61"
  },
  {
    "url": "logo_swapmarket.svg",
    "revision": "c14ff3d5b6d2ccb8bbcbcb63dbed8d15"
  },
  {
    "url": "logo_validator.svg",
    "revision": "f6b907c537d8075d30fc24a49d9dcf66"
  },
  {
    "url": "logo-bitski.svg",
    "revision": "6bf34f5872caea823c755a950675ccb1"
  },
  {
    "url": "logo-metamask.svg",
    "revision": "fa7b829817860f80d7733f08efd3e4fe"
  },
  {
    "url": "wanchain.png",
    "revision": "c3256bc210ca559021a431d950d3fb3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
