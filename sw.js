/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/README.html","a9fa6720721d2124dfb8e3bc10be3990"],["/about/index.html","7b7fe4cfbde84100ff2ce3360484e123"],["/archives/index.html","0bc5c25e461c6250d3fceeb77e1c0d31"],["/books/index-1.html","d529805de65fea86310fdfb0e0f5d6d5"],["/books/index.html","2dae2c0002a8d84dd0e649239a224ddd"],["/categories/index.html","5a519943c47f3e7b875e712f7ce017fe"],["/categories/java/index.html","86264b16895062be7cda090b7f6a622f"],["/categories/test/index.html","b702192269b96f3226e24f22f52559d4"],["/categories/博客/index.html","365abab911a3befc5a5d2f509ee8287b"],["/categories/工具/index.html","b25831d11881addcadd9870ade9a0717"],["/categories/扩展指示表/index.html","67bcebd533b769c4d0189d0c71236eea"],["/categories/扩展知识/index.html","f6f9e4998ddc78aeb9f09522567fce91"],["/categories/数据库/index.html","52cce308591852a9216d5acdf9f72c85"],["/categories/数据结构与算法/index.html","70e47277f2c25563d9073cf42bec954c"],["/categories/杂记/index.html","1c042dd2698f63ff92c59ed3eb8aa205"],["/categories/系统相关/index.html","f102bce73f206e31e8fdd630aa58e7bc"],["/categories/计算机网络/index.html","714511844e79039f24ee7476decd5e51"],["/css/main.css","3a1aeb89985efc2cc8953f42805e236f"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/fonts/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/SourceSansPro-Light.ttf","44a8e639bae28e48637f3b52bf827e11"],["/fonts/SourceSansPro-Regular.ttf","982386e2d4b16d8a061d83647e35c39c"],["/fonts/SourceSansPro-Semibold.ttf","ce8a7a5d8c76d57e5a384baa25fe6342"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bk.jpg","e3e5132d6651663c02f042e353793dd4"],["/images/bk0.jpg","5ce69d9210bbe685be5b649d5504028c"],["/images/bk3.jpg","0b6091e7dc2d8357da3140f96d5b12de"],["/images/bk5.jpg","6d748337ca8cb0fa9cb1ba1a888121cb"],["/images/bk6.jpg","d9332f07599400c6d3339dec1707ca88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/images/faviconsmall.png","e28e30ed0fae9ed1d227c581992fa1d8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","655890bd6f7c5127fc57b2d385691b14"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/摘要配图/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/images/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/index.html","0e9802434dcd6ab4baeb6e7a1e923f38"],["/js/src/Valine.min.js","fd9ad8c343311b8da4c82369d238c1b1"],["/js/src/affix.js","52d314a2e8c6c83941371d84914689e1"],["/js/src/algolia-search.js","9ac40465b1233a3304b8ef0f18d2ebf3"],["/js/src/bootstrap.js","c24601d8b44b689aae252122b2f082fb"],["/js/src/busuanzi.pure.mini.js","e8160296952446f7e65dd0f640f24c8c"],["/js/src/clicklove.js","309e2c7a36de9b83cd71256f4901351e"],["/js/src/clicksocialvalue.js","2c1b961ffb7734be302c8630a84f3d18"],["/js/src/clicktexiao.js","d83b7b75dea8dc94392c96f5f094112d"],["/js/src/dytitle.js","23632c7f1f7975aca2ca24d1c2961b75"],["/js/src/exturl.js","d7b5ce4397623956096ea34c20149255"],["/js/src/hook-duoshuo.js","4da995f5a29b2157a63f5be670acff84"],["/js/src/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/src/instantclick.js","ed659521762019d495c3c892d7df03e9"],["/js/src/js.cookie.js","ce3b991541f6e75a4bf3e78d1f62c76f"],["/js/src/linkcard.js","2751a618bc3b29cc882f2fe57f524ec8"],["/js/src/love.js","802ed38c948a9e9e945d105e60bc0225"],["/js/src/motion.js","e19e65bd95bc6651e03f180764d38916"],["/js/src/post-details.js","1ef0c6763d9a870eb5fd4f3cc52cb4ae"],["/js/src/sanarous.js","df6e0d5ca5c196d8603a09dcab7c145b"],["/js/src/schemes/pisces.js","555766c0031edbf4adcbbf8a05987e5d"],["/js/src/scroll-cookie.js","9fda10414e30cf8c4aedcf9171d62576"],["/js/src/scrollspy.js","abc88f9d8a8f7f0b5f9f821f9dae22c5"],["/js/src/utils.js","ce05ad23f51b18bb0becff2154069498"],["/js/src/valine.js","a45eff90b1ed6716ab64519e01ef2b46"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c9530bd54f606f86c626804eac0389e6"],["/lib/Han/dist/han.js","57b2a182fbec6e75037507a1f5fcca22"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","9cb434c9c6c97644afb2cdc0ba01cff8"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","d89fde4963289204a64b4e4d021d5fc9"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","2af7da3f638a8b99c09ba5354ccbce01"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","30f925c6e7d0a3680c7688de39d7ad6d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f625484934c9e134a4419ef00de9373e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7eb2e1bf50e47a55155364c9df570682"],["/lib/fancybox/source/jquery.fancybox.css","cee99752a5ed9ad9dacfac6c0498d542"],["/lib/fancybox/source/jquery.fancybox.js","b3e6ce63520a8800095e8d46044177ae"],["/lib/fancybox/source/jquery.fancybox.pack.js","d16abfd2f0fcc1ca8770f2954c3ada9a"],["/lib/fastclick/README.html","32de33735b88565c02d4d700018628fc"],["/lib/fastclick/lib/fastclick.js","d218eeeb7de6b3db08c8ac07af01094f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b4e7d1a9d2fb0c4fab9cc569953faca8"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","52febe548812efe942c7b262c0c31ef1"],["/lib/jquery_lazyload/CONTRIBUTING.html","ed6e837507730f64bad4a2497b15de8e"],["/lib/jquery_lazyload/README.html","a15cea4a95daabfb6d28dd0fd3533b73"],["/lib/jquery_lazyload/jquery.lazyload.js","fc55884f731576799b2de65aa1ab5c95"],["/lib/jquery_lazyload/jquery.scrollstop.js","af445db56ee795ba3cd86c2a880eb2e2"],["/lib/needsharebutton/font-embedded.css","5ea174ef01094532bf10ef1623556c9a"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6a1605f69d54b0bc45b7d42d370d5ac3"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","e336c2931818b25b2e9629d8949a9744"],["/lib/velocity/velocity.js","fe00a95adb1305acdc2ec21617be05d1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","0c8aff98861db1d151447d8fac07a0e8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","5ff6312def0591dc39717f043295860b"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","01d1f112487a2a3f4ef94b698f5f22ef"],["/page/3/index.html","9a9d07fdf6e7fac9dbb03140aca7344b"],["/page/4/index.html","d9102275b9786f6600094956b01e0846"],["/page/5/index.html","918da0c1c03e908c9b6b7e2c698a31a0"],["/page/6/index.html","e28d6406e2fee2c3e50aa8b869dc09a7"],["/posts/1243066710.html","a66025b3dad561a6c1b53670db6a995b"],["/posts/12430667888.html","8752517952d7f0c38c32bd4ee3559562"],["/posts/1274426981.html","a25a29d518e2e5fd802a8bab0da6b3c9"],["/posts/1378359675.html","48bf99810a0eaf822ab97597cac0cd6f"],["/posts/1384240362.html","9f8d329f9780419006f7d787693b9df3"],["/posts/1419458254.html","ccb8f260bb0b8715331318572bc8f8ba"],["/posts/1456419456.html","32f47ba18665d472fbea96c089998d0a"],["/posts/1516893568.html","95dfdc0b9645ba648038df96e259e41e"],["/posts/1647835064.html","ea07b688596d8b781e4e349bf6a990e5"],["/posts/182814426.html","63f3e1042417dbe4a1bf18401118484a"],["/posts/1927123280.html","3d650926ce215fd31aa5eb2bcaac0a0d"],["/posts/1971364850.html","800f3c8129da659a43b4a969c2157b80"],["/posts/2028077414.html","90efa1ae85ebd94add721d850d0ab932"],["/posts/2087069048.html","09b98cc24cceeb7d8a4a29ed7c06e72b"],["/posts/2258574111.html","da61ab3f13e11f03952b3d61f51e4691"],["/posts/2316692063.html","a694283e23da4b518427efaf3939f128"],["/posts/2339583608.html","567ff33ede75ef8273af0a3793c2d558"],["/posts/2450605903.html","593d8f7e0ffd067d7f69ea1dc29d1bb3"],["/posts/2463236226.html","b4bf859f0fae55c72f3ed52a65bac597"],["/posts/2501908538.html","75817e5f9391a47ae2590426aec1ed04"],["/posts/252831892.html","08517aedd541f2563ab6f639c7cb974f"],["/posts/2541227442.html","385f17fd4cfcea0f09259d26b686aa3b"],["/posts/2585761718.html","472847dbb555f08ba3eed58ccf1d2e8f"],["/posts/2595169217.html","79ef894696be2868728e5fc351c9edd8"],["/posts/2631218787.html","906a078cd09dcd1284ebb3c395548d11"],["/posts/2743408289.html","b701a8deadb2a37c5461b7bbe54a6e94"],["/posts/2755965992.html","7d96da7a9000fba3a3e4f3176c65600e"],["/posts/2831117782.html","9cbdf7c940a49065e5126b4ed06eff43"],["/posts/2872061145.html","c957d86157397cfdc472efd91b2634c3"],["/posts/297658092.html","3f05cc5c2cbf3dcc096a0149d7af80dc"],["/posts/2980872090.html","cf10329cc80856e182f1917dbebdce3a"],["/posts/3000723623.html","37d864f3e0bcfafe3008f14b74a95a06"],["/posts/3010310719.html","d45ca7185fc20df34dfa1be9a054cdf1"],["/posts/3123796831.html","ffd0c248a6f4f243ce7af3e54aa9a371"],["/posts/3336378626.html","6cddae2f3899ba6dea0eefe97d4b2d8a"],["/posts/3460397296.html","d6c18cc322226078483558fdbdefb083"],["/posts/3494630844.html","e1c753209639da5159354ac61561d3bc"],["/posts/3728090792.html","1e98369047b4a71b102aec9fa52db835"],["/posts/3793957696.html","09687ece22bb0bf978b137bd5328ce06"],["/posts/3797262602.html","edbe09f719ab422b2fe7390f65e512e9"],["/posts/3891854696.html","7d0746d61f89c8e1b8bea10c3c6a559e"],["/posts/401216634.html","61665cd8697aee42357be5ef627e4b28"],["/posts/4190096253.html","23f33dfb04ea42909ae73f298c11c1b7"],["/posts/4228859297.html","c5dd90285f03683a6b567c656040b8d9"],["/posts/435317312.html","b7ad79c4fbfacb02c382a9197717c0c5"],["/posts/525459397.html","b99e7ccf8617c81b92eb3c949cf7667c"],["/posts/525459397/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/posts/525459397/问题.jpg","2ca21e72a84b7833523f1bcb1a57e539"],["/posts/687187461.html","1b5c3995efc2a0223066a298d82a551c"],["/posts/734210201.html","87ee80eb41d3c7636b72d9002d02df17"],["/posts/748566205.html","e5f8a85f2a0a42c2f9bc6a85dbba8803"],["/posts/818431768.html","c61b6b4ef939d82b013013f404fe2915"],["/posts/843121599.html","4506418550bc3493908ab4105554b61e"],["/posts/891169081.html","84c21a48ad5feebe2065d9a0ebce8e34"],["/static/api/css/imgshare.css","d7fbd04feae8407d9cd1b99700c8d4db"],["/static/api/css/like.css","2ecca0678e7b93e603f23e1c96d59569"],["/static/api/css/select_share.css","05b38a5960b9347ada92c7c0f32dd4a9"],["/static/api/css/share_popup.css","bd870e57562eac83330a79b77ecd4f31"],["/static/api/css/share_style0_16.css","526cd0a60a6359b287b1ade78f7a917c"],["/static/api/css/share_style0_24.css","a1bf4cdbac32187ba4d951aa2f6684e0"],["/static/api/css/share_style0_32.css","a052bac3c7263ff960993f231b670b75"],["/static/api/css/share_style1_16.css","30215eb1988aa9a394a4c9ccf2f08de7"],["/static/api/css/share_style1_24.css","72fd9d1ab050b089786f4799b19f1bec"],["/static/api/css/share_style1_32.css","b6bf2a04a5879556df005b07597c9a61"],["/static/api/css/share_style2.css","e2381c68b6b01690137f4e55b5ffa0ef"],["/static/api/css/share_style2_16.css","099803ca8143680ffe2e4dd09f062391"],["/static/api/css/share_style2_24.css","7ac2d4b78478163ebe983e7edce1d522"],["/static/api/css/share_style2_32.css","50f7c4f18f72d18e3d55b6443767973e"],["/static/api/css/share_style4.css","7da81ca2e9775fd8327c2c5404773e7a"],["/static/api/css/slide_share.css","2f12bc203998027fb464073eb1eb771d"],["/static/api/css/weixin_popup.css","afaaa149256f9dca3e357089e2fe1994"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","8fd9bfceba57f0207fa83ebd2b56554d"],["/static/api/js/base/tangram.js","1609157e7f41435b43ebff5e72e0a8ca"],["/static/api/js/component/animate.js","a914a6cf05f871423d5557b52ddcbd70"],["/static/api/js/component/anticheat.js","f9e635ec984ac96a564aa9ac5e3efff7"],["/static/api/js/component/comm_tools.js","5a0f45e1db9b19b5bd14320aa2819b57"],["/static/api/js/component/partners.js","43f6212185f7631f7b2c6db19b8ecf3d"],["/static/api/js/component/pop_base.js","67d7b2e9f292bcd3868695636dfd828f"],["/static/api/js/component/pop_dialog.js","350bd4cb93acb930c918cd059f20b96e"],["/static/api/js/component/pop_popup.js","1a959a3a8fa393527236c4c2d19b94c3"],["/static/api/js/component/pop_popup_slide.js","68976cea455a6ee0feeeb09deb3a55ce"],["/static/api/js/component/qrcode.js","9c88c50c6f42cce65d2199848cc59a52"],["/static/api/js/conf/const.js","b62664557038d9347cb7a0de8b0453f8"],["/static/api/js/conf/define.js","6fcb8d8d5a0bf1476e8539c4f59878ba"],["/static/api/js/share.js","8b9706186f6cd03305a5cb5608217006"],["/static/api/js/share/api_base.js","a755e663329f5138bb13532491e55bdf"],["/static/api/js/share/combine_api.js","c1f10b07feb70effdd3f3b31f5bb6400"],["/static/api/js/share/image_api.js","2d791fcf205e9b1ed4385bf706d66b48"],["/static/api/js/share/like_api.js","74f1e4dd0c27c66a07d2560c2b4f5ba9"],["/static/api/js/share/likeshare.js","760a509f52868d76f36db6e0174879c7"],["/static/api/js/share/select_api.js","5da67f13d89237cfc1f58e0165698891"],["/static/api/js/share/share_api.js","7b91b42eb3f20fc01ab64508d0d44b24"],["/static/api/js/share/slide_api.js","e5c15e1fa29bb04e7b6183d774b3caa8"],["/static/api/js/start/router.js","e5c9a4c398441730bb589456346269f4"],["/static/api/js/trans/data.js","efa2ce4661a181497b4f882e55f2c68d"],["/static/api/js/trans/logger.js","efa2ce4661a181497b4f882e55f2c68d"],["/static/api/js/trans/trans.js","c171e4e389be74eafc8175bafedbf94d"],["/static/api/js/trans/trans_bdxc.js","5ff1437c684727ea2655871f42eb5bd4"],["/static/api/js/trans/trans_bdysc.js","5e295be4cfc87848d0b0e582ccfadca4"],["/static/api/js/trans/trans_weixin.js","3c941fe4bbef58114a8da64ec6918156"],["/static/api/js/view/image_view.js","76807e50e236e1692d2a757c0626d627"],["/static/api/js/view/like_view.js","effe5e495656141ecb414c14aabd5109"],["/static/api/js/view/select_view.js","be2f27cc4e297206d180f672d2d9b210"],["/static/api/js/view/share_view.js","87fe5f2ce10d1ed769008247e40abdd4"],["/static/api/js/view/slide_view.js","6a9cf50686ffd093638fd3afb6d29c7a"],["/static/api/js/view/view_base.js","7f8695cc2f300ec25a84add96d0a6192"],["/sw-register.js","b0c6f00f83f23f0e48c53812bc0e04a6"],["/tags/hexo/index.html","3794bdaf606c07fcb69248b3167f63ea"],["/tags/index.html","5830ff735ed28d6b6671654c1db3d00e"],["/tags/java转载的文章/index.html","e35d6698aeb892ea0620760628046d5e"],["/tags/markdown/index.html","6e6240df96588ab06e3072422232519a"],["/tags/mysql/index.html","478701c882bbe822424308f10b77813e"],["/tags/tags测试/index.html","ee9e3abfa6100cbfd4ec0f61bd2b11f1"],["/tags/分布式/index.html","bba228c3d6da5580aad2849e0e2917d8"],["/tags/扩展转载/index.html","a71636d2c97fc0ed9a7889042cfb55a6"],["/tags/操作系统/index.html","37a00296cdf16e216fe1b3ae7792f5a2"],["/tags/网络基础/index.html","2f72a1a317ebbc7ce6624879b643e2ef"],["/tags/转载/index.html","fc0565b2672c308286a5558e85c994d9"],["/tags/转载的文章/index.html","d7ebee8dfdb7c6ef1920f67d709c3fdf"],["/top/index.html","9b0bb1968e56f97eb9fd0fcd9a439a54"]];
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
