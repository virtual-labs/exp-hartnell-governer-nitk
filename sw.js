importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0dd2a26e70db2d736223b7f6f5b03fc6","url":"details.json"},{"revision":"75dff6498ad949e0b34dcb53fce6d5c9","url":"feedback.html"},{"revision":"34174baa290c7e2f8d7cf80f25ff62ef","url":"images/controls.png"},{"revision":"6ee451e81f84dcd43e16f140b4ff272b","url":"images/controlStartBtn.png"},{"revision":"adb5eeb7d015d1ae2a1940339eb64d43","url":"images/equations/bigM.png"},{"revision":"f9e3bf4228a51bb803c70fa1e88de29a","url":"images/equations/bigS.png"},{"revision":"29a261171493765fe917e831d4f6de14","url":"images/equations/fc1.png"},{"revision":"67665320d7f9aaf4ceeee1d9c60f36ad","url":"images/equations/fc2.png"},{"revision":"e1b49a50c0c8585d87efe09c724877cc","url":"images/equations/h.png"},{"revision":"897d8ee0b9770c8675ac65be25b10ddb","url":"images/equations/heq.png"},{"revision":"d16a6676dd6fabc704121a97296a78e1","url":"images/equations/m.png"},{"revision":"8894de48053503b66aa3fa2239eac053","url":"images/equations/o.png"},{"revision":"c9410ef0f5b5deebbfb15f007ed8056e","url":"images/equations/omega1.png"},{"revision":"a7d761f35b79b2c31df8b5bf3ed64877","url":"images/equations/omega2.png"},{"revision":"ffbbc5de35b8ab171635c420a1b9328f","url":"images/equations/r.png"},{"revision":"ab3204c3893f829b575e682370834373","url":"images/equations/r1.png"},{"revision":"faffa3ee87e951aaaeeaec3ae36ed101","url":"images/equations/r2.png"},{"revision":"c13f661589007f1af239ecc4ab16b1fd","url":"images/equations/req.png"},{"revision":"28553029c4c193f4fa5f89d8b0a60263","url":"images/equations/rfinal.png"},{"revision":"97dd7e07819b64b159a67e249b59fc6c","url":"images/equations/s1.png"},{"revision":"8577a4fc6a7869f5f4fac5e8c85e5cc7","url":"images/equations/s2.png"},{"revision":"d59eda21a7d41dc3eec7f48b552c24ca","url":"images/equations/smallS.png"},{"revision":"cd4ce3c0a4fca5ab2f29a3e159254216","url":"images/equations/w11.png"},{"revision":"9c8b28009177ddff8b42c48fa12fc942","url":"images/equations/w22.png"},{"revision":"d1b58a69b6f6117cf31628e675ea217e","url":"images/equations/x.png"},{"revision":"ec005b890c973975708893332d4500d2","url":"images/equations/y.png"},{"revision":"c190c9966bd9e3c4babc4d320e842deb","url":"images/procedure_1a.png"},{"revision":"6f9d1803584e7d2392f63e169acfbb33","url":"images/resetandexitcntrls.png"},{"revision":"c7668180e7e58019e14574ddcc731d35","url":"images/simulation.png"},{"revision":"058eed80d5b2d62bcb265b56e12787a8","url":"images/var1.png"},{"revision":"fee7e519e2955f5a534d615e4c715df3","url":"images/var2.png"},{"revision":"ae22c2d8e8c3dd2e063b53e255645388","url":"index.html"},{"revision":"60d82ca6e02fe4365912e331dc0b62e8","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"6ebac4c65924868ab2c35ffa48d1cd33","url":"posttest.html"},{"revision":"326073a7162b0bb3b3fcccdd4c158bf6","url":"posttest.json"},{"revision":"d95aa5fcb3436e9328f9a69abfc66f81","url":"pretest.html"},{"revision":"9097335b176fc9b74e144aa1ca59b233","url":"pretest.json"},{"revision":"bc633ef2b210b063c41d16b33a6689a0","url":"procedure.html"},{"revision":"7f740e45ccb2a7d2597445ba317b2419","url":"references.html"},{"revision":"3d42c14b0fccc228a469bb256e0a7e1d","url":"simulation.html"},{"revision":"be258d773f908ecdcedb14e0769af1f9","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"8cbfe2cc7c63b65b47cee5b669f2fa34","url":"simulation/css/mathstyle.css"},{"revision":"7fccdc9620758cd32392d14542bee1b3","url":"simulation/css/query.css"},{"revision":"5ac77b9d5348e6ab62e3264866a157a9","url":"simulation/css/style.css"},{"revision":"dcbb368f9f8f086d11045f5575f5b201","url":"simulation/images/bluebkdulls.png"},{"revision":"0a2500d78f174c62cf1ad86ab8bcf597","url":"simulation/images/bluebkdulls.svg"},{"revision":"2bda3afdc72aae9ed0c3c8ddd50275fd","url":"simulation/images/blueccwdull.svg"},{"revision":"c79d61e3538555cb35a4324ed569ddb9","url":"simulation/images/bluecwdull.png"},{"revision":"8c66a36cd036f83d336f38db1312b346","url":"simulation/images/bluecwdull.svg"},{"revision":"b62cbdf1db997a67539af91b1f619e49","url":"simulation/images/bluepausedull.png"},{"revision":"f286896a0e223f36cc9db97ebe7a63e6","url":"simulation/images/bluepausedull.svg"},{"revision":"f6292ccd63e8eeea608c098ae260cb52","url":"simulation/images/blueplaydull.png"},{"revision":"2605b8ba706fa1c485d282b784c23b7b","url":"simulation/images/blueplaydull.svg"},{"revision":"39c1df9047df69aa74b207f509a8c90f","url":"simulation/images/crossOth.png"},{"revision":"1b16a123d982f8ea149615677bbc222a","url":"simulation/images/emblem.png"},{"revision":"30aa9c2c9bd6b7392856df022fbe240a","url":"simulation/images/expImage.png"},{"revision":"caaacf6a9c1c6757cc24b8db473b07a8","url":"simulation/images/exptImage.png"},{"revision":"2df1839e736f781701423d4ac1dd4511","url":"simulation/images/graphbutton.png"},{"revision":"011af776e07e07f3d614519077f7e195","url":"simulation/images/graphbutton.svg"},{"revision":"ac4263b09cfc8fa1e695234eea1a25a3","url":"simulation/images/icon_sprite.png"},{"revision":"418219a7f97dd2c4e82bd580f8bc18f0","url":"simulation/images/legend4BARacc.png"},{"revision":"6cdbc43fd52824605f442686e7e0e8ba","url":"simulation/images/legendicon.png"},{"revision":"0c05679b7dd635d0079d0399d7a8de93","url":"simulation/images/legendSCacc.png"},{"revision":"b7cfc6ff8ca4b3712f86c0c8fe6c760a","url":"simulation/images/legendSVAJ.png"},{"revision":"7d811f24fdef84ce6ab775aa4717c793","url":"simulation/images/legendSYacc.png"},{"revision":"f5dd76f29c41a2a1772c4478fdfb68f4","url":"simulation/images/legendSYvel.png"},{"revision":"1e01241b44562ec9be28ccdaee5741c2","url":"simulation/images/logo_nitk.png"},{"revision":"0a1d2aa9a0cab2be45337218c68352c5","url":"simulation/images/logo.png"},{"revision":"c13bb264306535e69bb86e7d5c9e328e","url":"simulation/images/maxPosition.png"},{"revision":"4c2ee44d61030fc9e904415deece29e6","url":"simulation/images/minPosition.png"},{"revision":"0e649e98db7b985e0620a0c182bf82d2","url":"simulation/images/nitk_logo.png"},{"revision":"8ada59e3313318c9e27dff45da3e5cf1","url":"simulation/images/nitk.svg"},{"revision":"815c631ac555b970c1d34f117ce808a7","url":"simulation/images/quickrefHart.png"},{"revision":"1ca3504c11f6a8096ab9e55cfacef8dd","url":"simulation/images/quickreficon.png"},{"revision":"9f9096a8556487c21a4061c0c645981f","url":"simulation/images/Reference.png"},{"revision":"02b3856455113dbe967bd95f04df94f7","url":"simulation/images/slider_handles.png"},{"revision":"8a24243072df38bdec6a9693ea77b9f5","url":"simulation/images/solve_.png"},{"revision":"ebe6b6902a408fbf9cac6379a1477525","url":"simulation/images/ui-icons_222222_256x240.png"},{"revision":"119dd0c2e94ad689de873ef39fd43e6e","url":"simulation/images/ui-icons_454545_256x240.png"},{"revision":"17cc2a298eae0dbc945db54486da821f","url":"simulation/index.html"},{"revision":"39d29cb0f013656378d954a47a0ce5eb","url":"simulation/js/dpi.js"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"33319b5056cbaa54a470350e50470e97","url":"simulation/js/MOMscript_ver2.js"},{"revision":"f059e26861ade2cad2e7087c60f22812","url":"simulation/js/MOMscript.js"},{"revision":"40c7fc015ca99f68cb5751a5bc18605c","url":"simulation/js/script.js"},{"revision":"0f63abb3fee1976dff8e77e62ce5169e","url":"simulation/js/script1.js"},{"revision":"9f15960e648c76fc5167ac3c53586e5a","url":"theory.html"},{"revision":"7d56b39a935bb87cdf5709a8b0b1a1e3","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );