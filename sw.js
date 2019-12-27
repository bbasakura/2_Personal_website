/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/README.html","7738cb69b5c2d3e28ffae031068bfabe"],["/about/index.html","882eb059505062500549e4760dd5ea87"],["/archives/index.html","225493194c7b0a3300ba38612adb5a23"],["/books/index.html","5754c438e42a815515f1a18f7a91ccf3"],["/categories/index.html","def0b99711a825f1bf77e9b74164e263"],["/categories/java/index.html","0829232bd66480373bf94eb8614588ba"],["/categories/test/index.html","a19c9bea7462e0acad8b33e72171544a"],["/categories/书籍/index.html","1a5c231274c1da50a6b2603cc660194a"],["/categories/博客/index.html","201a84c0dc6f6639071a3a4183e37305"],["/categories/工具/index.html","930add3b75a3f1c0bb8edc4330f63af3"],["/categories/扩展指示表/index.html","10eff537b1d63e6e1d9c8d3c3f0f0135"],["/categories/扩展知识/index.html","647e789d2a5efc772854137043f237a6"],["/categories/数据库/index.html","63c2f4b3e5ca84b256780c4a9c77675d"],["/categories/数据结构与算法/index.html","fa92e66ed8e6716b9368230c68638d7c"],["/categories/杂记/index.html","087e67dcc2ecf2e93d3ccf6faecdb5b1"],["/categories/系统相关/index.html","fce1c07c1aabdd3517d1971c637dd6d2"],["/categories/计算机网络/index.html","3b0c2ee2a06133643c0222e4f860f755"],["/css/main.css","8b25f33d6939abeac259eec4698c14f8"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/fonts/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/SourceSansPro-Light.ttf","44a8e639bae28e48637f3b52bf827e11"],["/fonts/SourceSansPro-Regular.ttf","982386e2d4b16d8a061d83647e35c39c"],["/fonts/SourceSansPro-Semibold.ttf","ce8a7a5d8c76d57e5a384baa25fe6342"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bk.jpg","e3e5132d6651663c02f042e353793dd4"],["/images/bk0.jpg","5ce69d9210bbe685be5b649d5504028c"],["/images/bk3.jpg","0b6091e7dc2d8357da3140f96d5b12de"],["/images/bk5.jpg","6d748337ca8cb0fa9cb1ba1a888121cb"],["/images/bk6.jpg","d9332f07599400c6d3339dec1707ca88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/images/faviconsmall.png","e28e30ed0fae9ed1d227c581992fa1d8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","655890bd6f7c5127fc57b2d385691b14"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/摘要配图/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/images/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/index.html","1b85732ab406b722c704f2378ae85824"],["/js/src/Valine.min.js","fd9ad8c343311b8da4c82369d238c1b1"],["/js/src/affix.js","6181d9469285575fc91084dcb552fcdf"],["/js/src/algolia-search.js","63d13206bd39c941baaa12ce1121e957"],["/js/src/bootstrap.js","c35239f33129708d6a8c58f5a6011199"],["/js/src/busuanzi.pure.mini.js","970d9a44ceb3156ccebcc92b2a6298ea"],["/js/src/clicklove.js","309e2c7a36de9b83cd71256f4901351e"],["/js/src/clicksocialvalue.js","2c1b961ffb7734be302c8630a84f3d18"],["/js/src/clicktexiao.js","762e7cb8a7c61f7e40b87578383d974b"],["/js/src/dytitle.js","2dc2df4f157f0c661c344f859ad9838a"],["/js/src/exturl.js","f28b2afaff25b510e4b49f6179a1681f"],["/js/src/hook-duoshuo.js","585d5e4bb922ffd40dd90bc7ac01bf67"],["/js/src/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/src/instantclick.js","db7e9040c7cd4e7ac5aef32892a636f8"],["/js/src/js.cookie.js","59a6083e46483c8f515029b60222a934"],["/js/src/linkcard.js","2751a618bc3b29cc882f2fe57f524ec8"],["/js/src/love.js","07b5f4fbbb68c03a376baf606c14f758"],["/js/src/motion.js","6c58234d4c3db55d9d30f685df5fd4c8"],["/js/src/post-details.js","b2d0017de95f515546ecab4578752c4a"],["/js/src/sanarous.js","279e1fec0598c523e3e7bc3550384d1c"],["/js/src/schemes/pisces.js","28b5ca1010a55944d11c3d34240dec08"],["/js/src/scroll-cookie.js","d20dce36764ea528d4adc3242dbd4a30"],["/js/src/scrollspy.js","f8160876c3d3b9e0e2b60bd5efb8b450"],["/js/src/utils.js","59829d7dd79a948bc67daf180c5a513a"],["/js/src/valine.js","a45eff90b1ed6716ab64519e01ef2b46"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","c8ea0f7eea152ddae86022a797585cd0"],["/lib/Han/dist/han.js","7ebd9a307c238cf16ecfada3e4e3e807"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8aa90c45f4f547f03998b9c424ecbb4a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","ebec62ddfedb68e4fde0ae6ecddce94c"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a80d30750b0c00548fc2614e2c51b885"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","4f42663bda8175b951ae606bbfa0ee1f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","a445dcc0bb91b8d1bd64d2842b441875"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","dfed3b67cb626b70a3166f4457aa436f"],["/lib/fancybox/source/jquery.fancybox.css","055a8696a4be65a10920f13246468b8e"],["/lib/fancybox/source/jquery.fancybox.js","fc5c30a1d3f891ef35ca7cfc71c4a4e9"],["/lib/fancybox/source/jquery.fancybox.pack.js","6f15c1c9e76aae9327e35fded1009016"],["/lib/fastclick/README.html","e9eb8321088a991f5ce0a224bf17e0d5"],["/lib/fastclick/lib/fastclick.js","e3589c026e2d2c758533a761f74077c9"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d0b14d0279909027ec58fc946598202b"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","79f22f8db124aa0e6e75c708fe40f818"],["/lib/jquery_lazyload/CONTRIBUTING.html","fb7b389c3b1900465df18a5a6051e2b5"],["/lib/jquery_lazyload/README.html","8f963b9840644c794a0ce260f63dbc28"],["/lib/jquery_lazyload/jquery.lazyload.js","3599647458e9e03698744e28aaf01811"],["/lib/jquery_lazyload/jquery.scrollstop.js","1a3921af33eeba067c1a4b21ec90d7b6"],["/lib/needsharebutton/font-embedded.css","164018bca63b412ae4d1c3fbcfc219e7"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","84dd8afb6ff5da2ce2e74b8016cb3135"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","88d38c2c43fc37c292ea4847e64f4658"],["/lib/velocity/velocity.js","73bc575df28daa7e77235b34c72432a3"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e86599e96a2043527d50462267ee6394"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fd355b5eadcf52ddc64aa19f5021ef9f"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f12178e16fbde1f8c7651423f46fd774"],["/page/3/index.html","c08d57468203a6a4a79bc71858d8958f"],["/page/4/index.html","33aa780b3742c09ebd07ee1815cec89d"],["/page/5/index.html","828c2e603afb676626f223d2e00952c0"],["/page/6/index.html","3fe0ad54f5251c51c4bbd5f7616799a5"],["/posts/1243066710.html","7bc689f7b799419e0866e0839745b24c"],["/posts/12430667888.html","984ae8b25b18ea1836145a57bd341ef8"],["/posts/1274426981.html","adad3547bdadd0a701874c4017f0c728"],["/posts/1378359675.html","120e5464ab675908688e16ee5526dc22"],["/posts/1384240362.html","2dd1a9e14e54ddcaa6b571321d6b2c13"],["/posts/1419458254.html","2526c9a46c416a78a06b3df1b5f45ecd"],["/posts/1456419456.html","05548aa8df98c7b862ec889d67fafced"],["/posts/1516893568.html","7cb5df761d172dad8b058a7dca4c6d7e"],["/posts/1647835064.html","c4dc3e17072113c8218d46ed4c77f63f"],["/posts/182814426.html","82fd080dca69b16abfe60ebe371362c9"],["/posts/1927123280.html","85455f0606f8489b9d99e778c0325163"],["/posts/1971364850.html","9a6f8f4b5b4c789ee281d92405dcdd59"],["/posts/2028077414.html","faafff6ede4ec2fffdbc8eb230abbab0"],["/posts/2087069048.html","11b9a8526ded959a104bcfce524eea43"],["/posts/2258574111.html","acf59badc924667f7de2b54c0cc1e345"],["/posts/2316692063.html","25b281f8014ad37d013b6a66fa1c94b0"],["/posts/2339583608.html","f275ce8bc93077c6e095d524a259a446"],["/posts/2450605903.html","87a5093b3e1cdfd85f20ab094ff4ab95"],["/posts/2463236226.html","8d2d0c47bf24c9b5e5bd31f8bbc8c463"],["/posts/2501908538.html","4ea40e956c0ad3ceb71b8a981a570abf"],["/posts/252831892.html","a36d6738eb917ebd29b81bd1add95b2b"],["/posts/2541227442.html","507953e823f30682700f93e8f47b3911"],["/posts/2585761718.html","1f6403cc67465710e9bec7375ef26264"],["/posts/2595169217.html","59d90f8d5e520eedb10844328e3df320"],["/posts/2631218787.html","1ca4035b68c50ae4fbe5ca6376fc18e2"],["/posts/2743408289.html","f3349d568ea6c751fae241bfd2cef52d"],["/posts/2755965992.html","644ddbd360a60e0b7f5432f90431cd34"],["/posts/2831117782.html","53dc119cbb2377a06e56901ae4f88e77"],["/posts/2872061145.html","2a41b1d553c06088a5c7cddcdad74d4b"],["/posts/297658092.html","8ba5b2992a4d1da848891f2a22f21e6a"],["/posts/2980872090.html","6a369590d2522a06e3eec084730346a4"],["/posts/2995907862.html","6aa3a0787839ae4af16234fbedf84d98"],["/posts/3000723623.html","2e1a78e4fb5f52ce47929bb69bc95fcd"],["/posts/3010310719.html","63cedac07609da7e2c60735f9b6fff70"],["/posts/3123796831.html","66487459414633b4a0b7fc03c53211c0"],["/posts/3336378626.html","26150f7a3ee5d377754cab79aea0a6b0"],["/posts/3460397296.html","ec4e52178d53714334dcc67ca7695eb0"],["/posts/3494630844.html","d9fdf96458c5a1567a33700d860b4bae"],["/posts/3694593981.html","27b6b99906bcf9d4ca029c357c390922"],["/posts/3728090792.html","4810308cae660b3557e61e09c0356a69"],["/posts/3793957696.html","2326df7375fd11d9225a4f552f479de3"],["/posts/3797262602.html","e60a31ec2a03de13c83c83e195b98c04"],["/posts/3891854696.html","56ef26f6c49387aab426276b71f33bc6"],["/posts/401216634.html","f20c69c166cc90c9c0ee4077e54f6613"],["/posts/4190096253.html","e9038ec3c16887a25bbe10839617bbec"],["/posts/4228859297.html","62603ef4a4d9d9980aa252314b3b520e"],["/posts/435317312.html","6f23efd4f31da89117f25fa9c1a2845b"],["/posts/525459397.html","42567777e5bcccd2a8ed6a68ef1e0f85"],["/posts/525459397/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/posts/525459397/问题.jpg","2ca21e72a84b7833523f1bcb1a57e539"],["/posts/687187461.html","3b1e09c735b3c9596e91c225d10acd62"],["/posts/734210201.html","c0931d47b2e48f5941d5e9f3fca0444d"],["/posts/748566205.html","1b2732f642067235ca4f4fc28e22db94"],["/posts/818431768.html","9b3bffc51bf121448a540872cc3aebeb"],["/posts/843121599.html","ad0ee0e876d6dc382ba88acfc1b2e20f"],["/posts/891169081.html","9d9b29d2ef72b45e9cf7b4dc40bc57c7"],["/static/api/css/imgshare.css","45529b6733865ee6852654ab6065b0b7"],["/static/api/css/like.css","1426416e6f8a7662ddbb9285664b5dfe"],["/static/api/css/select_share.css","8dc8b01ed3062ed6a4d23a2d89c213ad"],["/static/api/css/share_popup.css","1644477c1cc81074c5bc826e9a1bc2a8"],["/static/api/css/share_style0_16.css","f07cd8947986e2b8cdd63eea8b1a91f5"],["/static/api/css/share_style0_24.css","a6b9d91d84ca2e8027cfd6523591af2d"],["/static/api/css/share_style0_32.css","76de41a5343757fc04ef1bc6ac5ff413"],["/static/api/css/share_style1_16.css","d5018b5a5bcb7629bb11ce56a341d640"],["/static/api/css/share_style1_24.css","ca7199722fd0d33a42b8ef2810b1a2a2"],["/static/api/css/share_style1_32.css","d0b3bd48cdfa403740c3dbdb8d7127e7"],["/static/api/css/share_style2.css","93ff3b6fd888269721b0842decf19389"],["/static/api/css/share_style2_16.css","7a9c5351b29e0fd4a35f48ff366c355d"],["/static/api/css/share_style2_24.css","4bd930540d0a3c3e38b467828e3bfc43"],["/static/api/css/share_style2_32.css","a3b79e84c74cc1bf365e20e110c56465"],["/static/api/css/share_style4.css","b904797bfeb5d04f9f1aa94f96c41ee3"],["/static/api/css/slide_share.css","cbdc06fe4161bcab05d688c4d9d3db9b"],["/static/api/css/weixin_popup.css","aaefaf0f61ea7d3719008d54bfd5904a"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","cdff2ed5ed3ac872c97cb74c898ce299"],["/static/api/js/base/tangram.js","7269a03f7a9f97b0a8b0d18a6505d5e7"],["/static/api/js/component/animate.js","42e175914c5c048b7b641c560d60ab72"],["/static/api/js/component/anticheat.js","07551f801e9ee997abd2a0e42edcfc62"],["/static/api/js/component/comm_tools.js","90e59dad36487fa6de6c3fde3287712a"],["/static/api/js/component/partners.js","eca3d5e8aa74843f77516cd2df9ec6ab"],["/static/api/js/component/pop_base.js","1243adbe02d97aaf6d5461917dbf3d24"],["/static/api/js/component/pop_dialog.js","c6b10e67f9aa3cb9562ea2e24089cbbd"],["/static/api/js/component/pop_popup.js","1810362498a274cbd27316ff9a4c5cbf"],["/static/api/js/component/pop_popup_slide.js","e8f3e8240d39d2beeca591f7cc81083c"],["/static/api/js/component/qrcode.js","ec7befd29ccd8bddb6008b1b16451394"],["/static/api/js/conf/const.js","a2828ab7a3f71f257d5feff5f72319db"],["/static/api/js/conf/define.js","3dd1fce564468916b5eb24cc022046fc"],["/static/api/js/share.js","3146f87a4d7f75bc6c9b93c05f098b44"],["/static/api/js/share/api_base.js","3b1b1f8c5a32682cc4dec130dc05cd47"],["/static/api/js/share/combine_api.js","145b9d8f5f276575b1cd5aafb6e7f674"],["/static/api/js/share/image_api.js","d31a87331d8b5488fc5a2b4e1ce598e7"],["/static/api/js/share/like_api.js","b917f9990600a57b89bd6c9753bdbe6b"],["/static/api/js/share/likeshare.js","618f52857e843de2c6242e3eea54b722"],["/static/api/js/share/select_api.js","1e063cec3b1ea33d46d25cfdebcedec2"],["/static/api/js/share/share_api.js","fbe0bd942384a3b6ecfe29f5986def8c"],["/static/api/js/share/slide_api.js","f71725b26bf476258424b9b5b942bac4"],["/static/api/js/start/router.js","5440281380fed81cb3087dd785172e62"],["/static/api/js/trans/data.js","42f905df579dbfb3768969552b49d28c"],["/static/api/js/trans/logger.js","42f905df579dbfb3768969552b49d28c"],["/static/api/js/trans/trans.js","caf0c56ee13c5fa1a47732b39af1aad7"],["/static/api/js/trans/trans_bdxc.js","0d0a5f497a8560f747a12580a3d8e718"],["/static/api/js/trans/trans_bdysc.js","55d1035cd4aee012fa63931c3db7307d"],["/static/api/js/trans/trans_weixin.js","df5c14224b5d4ec2cae727fc4a5a29c4"],["/static/api/js/view/image_view.js","41a2bfe777c24af86cd9ab73f6dc3970"],["/static/api/js/view/like_view.js","d96a9d83b427a6654aadb0c62e92b160"],["/static/api/js/view/select_view.js","7308c1fcd0f992e7ebafa76fa7ccfd63"],["/static/api/js/view/share_view.js","f84dc66c6c675800daaafa6ef9a0a35b"],["/static/api/js/view/slide_view.js","da5264b91e78914fd2a879365f9374d4"],["/static/api/js/view/view_base.js","1829749632c65aceba5c42f02450b82d"],["/sw-register.js","30ade741bff73d6c526f11e953651ff5"],["/tags/hexo/index.html","ba62c4b0a6ec6f2a25e7cc15bd20929e"],["/tags/index.html","c850f7948fb9d7af0595b4bb95b3c16a"],["/tags/java转载的文章/index.html","d5b0cc1f20876b60d06ac84faa9e4d89"],["/tags/markdown/index.html","9f54fa38b9d50ae3d1fd467d08e41146"],["/tags/mysql/index.html","ee79ae254d2661fd4aac8e27a68d5f50"],["/tags/tags测试/index.html","ed80c1ac5ecafcc3a77d782e52e5c36a"],["/tags/分布式/index.html","37107d74436df78c30000fdeb913b64b"],["/tags/图床/index.html","5e612a53a76b510107c5a88eae0aa354"],["/tags/扩展转载/index.html","2524fafc164efbb6c2779cbd327857c4"],["/tags/操作系统/index.html","abbe8b83f7cede6940b45fb3b69834ca"],["/tags/编程/index.html","38c451b36df010f2684a2ecc45038465"],["/tags/网络基础/index.html","7413a5258eca322e05fea1a99fa00849"],["/tags/转载/index.html","25bc2bd665eeb54cd0700f2d3d8ffc98"],["/tags/转载的文章/index.html","d4ce3e976abbe35172def9e8d39f1053"],["/top/index.html","cb90ded6196c0bc3cba0982e044d6e0b"]];
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
