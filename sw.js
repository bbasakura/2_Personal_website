/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/README.html","5ee7b2fa88a71169b16093eb49d900b9"],["/about/index.html","96e8570927a433b79f26755056b5e91b"],["/archives/index.html","232d704df686ca32d5911dc2f8609037"],["/books/index-1.html","2d0f07235b9b222cbfdda22b7344ba1c"],["/books/index.html","cd929015efc322556ec11181410d6433"],["/categories/index.html","f8b6941f92a2edbbbeffd3b4d4397b71"],["/categories/java/index.html","9adad93896af94a32b8d485cf1e53e4f"],["/categories/test/index.html","96f7481947407b3d6f2ad25038947c4c"],["/categories/博客/index.html","bcd0fd6b2562b9d0de02ade6d5bafe92"],["/categories/工具/index.html","bc8c789979c4864dbc42dd4d0f8def2c"],["/categories/扩展指示表/index.html","ddb9d9cf51462098309431ad05ffeeec"],["/categories/扩展知识/index.html","f4c95dca240276bf636d6d53ef7a0150"],["/categories/数据库/index.html","ccb990e7e2a6367a031c8fc4b82111cc"],["/categories/数据结构与算法/index.html","49a14b79b445427d3867f44a89a2eb57"],["/categories/杂记/index.html","030e30f8fd472924fad3598760d4fc52"],["/categories/系统相关/index.html","df8157d607b302e77b55927749c5c256"],["/categories/计算机网络/index.html","2efc81a133169094caf71d53eaba7279"],["/css/main.css","3a1aeb89985efc2cc8953f42805e236f"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/fonts/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/SourceSansPro-Light.ttf","44a8e639bae28e48637f3b52bf827e11"],["/fonts/SourceSansPro-Regular.ttf","982386e2d4b16d8a061d83647e35c39c"],["/fonts/SourceSansPro-Semibold.ttf","ce8a7a5d8c76d57e5a384baa25fe6342"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bk.jpg","e3e5132d6651663c02f042e353793dd4"],["/images/bk0.jpg","5ce69d9210bbe685be5b649d5504028c"],["/images/bk3.jpg","0b6091e7dc2d8357da3140f96d5b12de"],["/images/bk5.jpg","6d748337ca8cb0fa9cb1ba1a888121cb"],["/images/bk6.jpg","d9332f07599400c6d3339dec1707ca88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/images/faviconsmall.png","e28e30ed0fae9ed1d227c581992fa1d8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","655890bd6f7c5127fc57b2d385691b14"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/摘要配图/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/images/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/index.html","024aaf0ca91553e4d0ddfca5013f0c11"],["/js/src/Valine.min.js","fd9ad8c343311b8da4c82369d238c1b1"],["/js/src/affix.js","52d314a2e8c6c83941371d84914689e1"],["/js/src/algolia-search.js","9ac40465b1233a3304b8ef0f18d2ebf3"],["/js/src/bootstrap.js","c24601d8b44b689aae252122b2f082fb"],["/js/src/busuanzi.pure.mini.js","e8160296952446f7e65dd0f640f24c8c"],["/js/src/clicklove.js","309e2c7a36de9b83cd71256f4901351e"],["/js/src/clicksocialvalue.js","2c1b961ffb7734be302c8630a84f3d18"],["/js/src/clicktexiao.js","d83b7b75dea8dc94392c96f5f094112d"],["/js/src/dytitle.js","23632c7f1f7975aca2ca24d1c2961b75"],["/js/src/exturl.js","d7b5ce4397623956096ea34c20149255"],["/js/src/hook-duoshuo.js","4da995f5a29b2157a63f5be670acff84"],["/js/src/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/src/instantclick.js","ed659521762019d495c3c892d7df03e9"],["/js/src/js.cookie.js","ce3b991541f6e75a4bf3e78d1f62c76f"],["/js/src/linkcard.js","2751a618bc3b29cc882f2fe57f524ec8"],["/js/src/love.js","802ed38c948a9e9e945d105e60bc0225"],["/js/src/motion.js","e19e65bd95bc6651e03f180764d38916"],["/js/src/post-details.js","1ef0c6763d9a870eb5fd4f3cc52cb4ae"],["/js/src/sanarous.js","df6e0d5ca5c196d8603a09dcab7c145b"],["/js/src/schemes/pisces.js","555766c0031edbf4adcbbf8a05987e5d"],["/js/src/scroll-cookie.js","9fda10414e30cf8c4aedcf9171d62576"],["/js/src/scrollspy.js","abc88f9d8a8f7f0b5f9f821f9dae22c5"],["/js/src/utils.js","ce05ad23f51b18bb0becff2154069498"],["/js/src/valine.js","a45eff90b1ed6716ab64519e01ef2b46"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c9530bd54f606f86c626804eac0389e6"],["/lib/Han/dist/han.js","57b2a182fbec6e75037507a1f5fcca22"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9cb434c9c6c97644afb2cdc0ba01cff8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d89fde4963289204a64b4e4d021d5fc9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2af7da3f638a8b99c09ba5354ccbce01"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","30f925c6e7d0a3680c7688de39d7ad6d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f625484934c9e134a4419ef00de9373e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7eb2e1bf50e47a55155364c9df570682"],["/lib/fancybox/source/jquery.fancybox.css","cee99752a5ed9ad9dacfac6c0498d542"],["/lib/fancybox/source/jquery.fancybox.js","b3e6ce63520a8800095e8d46044177ae"],["/lib/fancybox/source/jquery.fancybox.pack.js","d16abfd2f0fcc1ca8770f2954c3ada9a"],["/lib/fastclick/README.html","32de33735b88565c02d4d700018628fc"],["/lib/fastclick/lib/fastclick.js","d218eeeb7de6b3db08c8ac07af01094f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b4e7d1a9d2fb0c4fab9cc569953faca8"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","52febe548812efe942c7b262c0c31ef1"],["/lib/jquery_lazyload/CONTRIBUTING.html","ed6e837507730f64bad4a2497b15de8e"],["/lib/jquery_lazyload/README.html","a15cea4a95daabfb6d28dd0fd3533b73"],["/lib/jquery_lazyload/jquery.lazyload.js","fc55884f731576799b2de65aa1ab5c95"],["/lib/jquery_lazyload/jquery.scrollstop.js","af445db56ee795ba3cd86c2a880eb2e2"],["/lib/needsharebutton/font-embedded.css","5ea174ef01094532bf10ef1623556c9a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6a1605f69d54b0bc45b7d42d370d5ac3"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e336c2931818b25b2e9629d8949a9744"],["/lib/velocity/velocity.js","fe00a95adb1305acdc2ec21617be05d1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","0c8aff98861db1d151447d8fac07a0e8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b6a97b6d12cd99d87a2dc9536c985f8d"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","87aba71e8140dfeea35a7d69cfaf16a6"],["/page/3/index.html","ee6842f4eecb4110524009788ad893fa"],["/page/4/index.html","7ce458b81a3a5376f16dd1b10911262c"],["/page/5/index.html","f3f863a5d95c14bcb8a2ba48438da4c2"],["/page/6/index.html","8b2d6ccd9dd9409521564df8f3eceb15"],["/posts/1243066710.html","2a01305fdd03a25051996b883b0a13bb"],["/posts/12430667888.html","db8253d5a3caf39c3a789ba74dcf24b9"],["/posts/1274426981.html","62e97a2f225bdd04e9447a7e81b8d1e2"],["/posts/1378359675.html","9c061c48a68eaca147e7c96df216b0a5"],["/posts/1384240362.html","f54dd7c0afe2ae5d9c913b775a9fa54c"],["/posts/1419458254.html","692723bb40b666f326ce101aa8c3df92"],["/posts/1456419456.html","bebc4afa423eeee0d32d8a75d552f98d"],["/posts/1516893568.html","d56092a4154b1f1af835f44c4429cb74"],["/posts/1647835064.html","c2ae932cc1531f18448d94d430cb4a4a"],["/posts/182814426.html","d50bebffee5a14fc4e3a219c9e115402"],["/posts/1927123280.html","ec4d51d609bbe1848302fee7dbc06610"],["/posts/1971364850.html","af28be97e8f3a04b1de5ebc41194c894"],["/posts/2028077414.html","ff63d96a841f11cffa70c2bfe85b453e"],["/posts/2087069048.html","4aaca3abac4f095236c0b8cf1b2c104c"],["/posts/2258574111.html","7b42d66d9e655ae239e75ff72b8008ef"],["/posts/2316692063.html","9c59ba70e6705115c855df775dca299f"],["/posts/2339583608.html","44a9c3901bb81b2fadd72b5bce92e20a"],["/posts/2450605903.html","ed3d476e88e1f3419aee728e724adbed"],["/posts/2463236226.html","3955b41c1e36646b01a31b24611c7e6b"],["/posts/2501908538.html","70264ee4bb4abe96d10669d2ad9ba903"],["/posts/252831892.html","a5f49f6daf33d77c696dfe3cc1d4c3cb"],["/posts/2541227442.html","0e3d2b4e3136740f39fda5c31f3c922c"],["/posts/2585761718.html","6e5d2641a476e0c2eb4fe896d8e3778b"],["/posts/2595169217.html","69dbce05927e215d5150c3344cba4154"],["/posts/2631218787.html","ee8d230b103e04596449f49ad8db4f89"],["/posts/2743408289.html","4aa4c1686d3f13fcd6830da56eab28f1"],["/posts/2755965992.html","4fa48551d79dad505f09cbfe60a001f1"],["/posts/2831117782.html","a4d95c149c29b8eb33af20acea94b476"],["/posts/2872061145.html","3a9432449567f2a4f2a6b5718da8d98d"],["/posts/297658092.html","2e39fbd06ddd769740193bbe591079f4"],["/posts/2980872090.html","25c551cb00ecec4baba499abda779cd5"],["/posts/3000723623.html","f98aead4d5cdc637b7b500a88f613e5d"],["/posts/3010310719.html","a931709f7031dd1021f03fc81dec3b23"],["/posts/3123796831.html","d3bbd66295c5968fc9c8089b58b6bbe7"],["/posts/3336378626.html","b2e22f98b4f64bc0f446f8d25fe27223"],["/posts/3460397296.html","d5ad626f83b3bae15d3da1c7f088039f"],["/posts/3494630844.html","a6034f8f4bc2c6e6649ea08dca72b048"],["/posts/3728090792.html","25a8282c1d4f177f37ef05659eba653e"],["/posts/3793957696.html","fdcc32dad0135dd4f5064d6a97adb648"],["/posts/3797262602.html","728f6a6db6465f79a7e010e1ccad6689"],["/posts/3891854696.html","2995bcac31b2236645a257bf3596fc8d"],["/posts/401216634.html","e00e44dce524bbd77dc2be4f55ae951b"],["/posts/4190096253.html","cba5430fb1c761e3cb54c6a5aed8e15f"],["/posts/4228859297.html","7a61a76a0f127790c48336755bd36d19"],["/posts/435317312.html","bbb56c2bd8ceeeec762d380af60a62e1"],["/posts/525459397.html","ee9257807581138729e732630a76ee06"],["/posts/525459397/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/posts/525459397/问题.jpg","2ca21e72a84b7833523f1bcb1a57e539"],["/posts/687187461.html","8450e18906693987d34a7bb8c63b2fc4"],["/posts/734210201.html","b224c6bf7e2828fecacd4f79e9c4ab8d"],["/posts/748566205.html","36e75ab9e6acd0efe2e31a5e8326bd50"],["/posts/818431768.html","f90051c95fa7ccc48f356a88f1eb684a"],["/posts/843121599.html","9cbc60ede7e216524fc0390481ec0943"],["/posts/891169081.html","c2ecf7c2a5e69aec2c26b86db801cd12"],["/static/api/css/imgshare.css","d7fbd04feae8407d9cd1b99700c8d4db"],["/static/api/css/like.css","2ecca0678e7b93e603f23e1c96d59569"],["/static/api/css/select_share.css","05b38a5960b9347ada92c7c0f32dd4a9"],["/static/api/css/share_popup.css","bd870e57562eac83330a79b77ecd4f31"],["/static/api/css/share_style0_16.css","526cd0a60a6359b287b1ade78f7a917c"],["/static/api/css/share_style0_24.css","a1bf4cdbac32187ba4d951aa2f6684e0"],["/static/api/css/share_style0_32.css","a052bac3c7263ff960993f231b670b75"],["/static/api/css/share_style1_16.css","30215eb1988aa9a394a4c9ccf2f08de7"],["/static/api/css/share_style1_24.css","72fd9d1ab050b089786f4799b19f1bec"],["/static/api/css/share_style1_32.css","b6bf2a04a5879556df005b07597c9a61"],["/static/api/css/share_style2.css","e2381c68b6b01690137f4e55b5ffa0ef"],["/static/api/css/share_style2_16.css","099803ca8143680ffe2e4dd09f062391"],["/static/api/css/share_style2_24.css","7ac2d4b78478163ebe983e7edce1d522"],["/static/api/css/share_style2_32.css","50f7c4f18f72d18e3d55b6443767973e"],["/static/api/css/share_style4.css","7da81ca2e9775fd8327c2c5404773e7a"],["/static/api/css/slide_share.css","2f12bc203998027fb464073eb1eb771d"],["/static/api/css/weixin_popup.css","afaaa149256f9dca3e357089e2fe1994"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","8fd9bfceba57f0207fa83ebd2b56554d"],["/static/api/js/base/tangram.js","1609157e7f41435b43ebff5e72e0a8ca"],["/static/api/js/component/animate.js","a914a6cf05f871423d5557b52ddcbd70"],["/static/api/js/component/anticheat.js","f9e635ec984ac96a564aa9ac5e3efff7"],["/static/api/js/component/comm_tools.js","5a0f45e1db9b19b5bd14320aa2819b57"],["/static/api/js/component/partners.js","43f6212185f7631f7b2c6db19b8ecf3d"],["/static/api/js/component/pop_base.js","67d7b2e9f292bcd3868695636dfd828f"],["/static/api/js/component/pop_dialog.js","350bd4cb93acb930c918cd059f20b96e"],["/static/api/js/component/pop_popup.js","1a959a3a8fa393527236c4c2d19b94c3"],["/static/api/js/component/pop_popup_slide.js","68976cea455a6ee0feeeb09deb3a55ce"],["/static/api/js/component/qrcode.js","9c88c50c6f42cce65d2199848cc59a52"],["/static/api/js/conf/const.js","b62664557038d9347cb7a0de8b0453f8"],["/static/api/js/conf/define.js","6fcb8d8d5a0bf1476e8539c4f59878ba"],["/static/api/js/share.js","8b9706186f6cd03305a5cb5608217006"],["/static/api/js/share/api_base.js","a755e663329f5138bb13532491e55bdf"],["/static/api/js/share/combine_api.js","c1f10b07feb70effdd3f3b31f5bb6400"],["/static/api/js/share/image_api.js","2d791fcf205e9b1ed4385bf706d66b48"],["/static/api/js/share/like_api.js","74f1e4dd0c27c66a07d2560c2b4f5ba9"],["/static/api/js/share/likeshare.js","760a509f52868d76f36db6e0174879c7"],["/static/api/js/share/select_api.js","5da67f13d89237cfc1f58e0165698891"],["/static/api/js/share/share_api.js","7b91b42eb3f20fc01ab64508d0d44b24"],["/static/api/js/share/slide_api.js","e5c15e1fa29bb04e7b6183d774b3caa8"],["/static/api/js/start/router.js","e5c9a4c398441730bb589456346269f4"],["/static/api/js/trans/data.js","efa2ce4661a181497b4f882e55f2c68d"],["/static/api/js/trans/logger.js","efa2ce4661a181497b4f882e55f2c68d"],["/static/api/js/trans/trans.js","c171e4e389be74eafc8175bafedbf94d"],["/static/api/js/trans/trans_bdxc.js","5ff1437c684727ea2655871f42eb5bd4"],["/static/api/js/trans/trans_bdysc.js","5e295be4cfc87848d0b0e582ccfadca4"],["/static/api/js/trans/trans_weixin.js","3c941fe4bbef58114a8da64ec6918156"],["/static/api/js/view/image_view.js","76807e50e236e1692d2a757c0626d627"],["/static/api/js/view/like_view.js","effe5e495656141ecb414c14aabd5109"],["/static/api/js/view/select_view.js","be2f27cc4e297206d180f672d2d9b210"],["/static/api/js/view/share_view.js","87fe5f2ce10d1ed769008247e40abdd4"],["/static/api/js/view/slide_view.js","6a9cf50686ffd093638fd3afb6d29c7a"],["/static/api/js/view/view_base.js","7f8695cc2f300ec25a84add96d0a6192"],["/sw-register.js","2695b2307dcf19b03e283e66d1203be2"],["/tags/hexo/index.html","be19a2c9c02dfd8df7ffc3622a07ef7d"],["/tags/index.html","e56c22fca2c688370147b52b7172bf9c"],["/tags/java转载的文章/index.html","e792f220e55cb1aab2e7714dbe157239"],["/tags/markdown/index.html","c8c774eb7b6212924cc179ce742a8b5a"],["/tags/mysql/index.html","29297f3ce42a775c3940b093de05078d"],["/tags/tags测试/index.html","663cfd7ad222242981be6446e7b3d2fd"],["/tags/分布式/index.html","c42965b95a12e00ad566d2a5cbf6b670"],["/tags/扩展转载/index.html","93b84f4acd9c67df09ec5460e05bbdbd"],["/tags/操作系统/index.html","092b9606b2beb4b895db24536abaa5fa"],["/tags/网络基础/index.html","df08cc93de0ffa34709972b2f178b85f"],["/tags/转载/index.html","be347b8b448066ad904320aa937f9e6c"],["/tags/转载的文章/index.html","fbf021eaef7c14b20d15e0b5de1199e7"],["/top/index.html","4109e7df13bac532a59728b837409a3f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
