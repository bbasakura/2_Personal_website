/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/README.html","c7f1df5744df94432304916de6149431"],["/about/index.html","75decf61437c9ded5d7fca907e50bc91"],["/archives/index.html","54af0101fe635a2a1f8d040a6a8ff166"],["/books/index-1.html","60a619bc09bd4f216cb7f56f14e8e08d"],["/books/index.html","73c2ca47cca3e426267d95bc8a13b1a2"],["/categories/index.html","1782f121acb3a383c95f030057b3ebbd"],["/categories/java/index.html","6049513218e44a9bc180c52bfacad23f"],["/categories/博客/index.html","01ba222601bbfe1798a53438905c219c"],["/categories/工具/index.html","5d536d97bb146565b48bee4a53c4077d"],["/categories/扩展指示表/index.html","0f87b7318dce02003adf255332166a9b"],["/categories/扩展知识/index.html","6130f360b0a2f144b624359fabb606ff"],["/categories/数据库/index.html","171eeadb1b468482d76f520c2b4a743a"],["/categories/数据结构与算法/index.html","fe2d811b797d148100c5a4349f6ed6bb"],["/categories/杂记/index.html","f119151f3f23675f482818719f10be71"],["/categories/系统相关/index.html","09178711696f4ca26ea695229483a3f5"],["/categories/计算机网络/index.html","e9468cf9db8ddcf454430c03497ec797"],["/css/main.css","5894ea47001acfdbc1a805ea30f3b7fd"],["/dist/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/dist/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/dist/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/fonts/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["/fonts/SourceSansPro-Light.ttf","44a8e639bae28e48637f3b52bf827e11"],["/fonts/SourceSansPro-Regular.ttf","982386e2d4b16d8a061d83647e35c39c"],["/fonts/SourceSansPro-Semibold.ttf","ce8a7a5d8c76d57e5a384baa25fe6342"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/bk.jpg","e3e5132d6651663c02f042e353793dd4"],["/images/bk0.jpg","5ce69d9210bbe685be5b649d5504028c"],["/images/bk3.jpg","0b6091e7dc2d8357da3140f96d5b12de"],["/images/bk5.jpg","6d748337ca8cb0fa9cb1ba1a888121cb"],["/images/bk6.jpg","d9332f07599400c6d3339dec1707ca88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/faviconmedium.png","c70089712ea3e14e1a43e8ef3d2c7c0e"],["/images/faviconsmall.png","e28e30ed0fae9ed1d227c581992fa1d8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/scroll.png","655890bd6f7c5127fc57b2d385691b14"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/摘要配图/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/images/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/index.html","e9a242c87f36e0ccb0841593eedde890"],["/js/src/Valine.min.js","fd9ad8c343311b8da4c82369d238c1b1"],["/js/src/affix.js","ed87a8e5911bbd20644bfe31941ca4c3"],["/js/src/algolia-search.js","005b6bcd9b8c277b2cbdb06e0dcbcc90"],["/js/src/bootstrap.js","8c3d0fac1fa20ce1ffebb011305aa91a"],["/js/src/busuanzi.pure.mini.js","d7ec582e8c0974cbcfeda641fd673969"],["/js/src/clicklove.js","309e2c7a36de9b83cd71256f4901351e"],["/js/src/clicksocialvalue.js","2c1b961ffb7734be302c8630a84f3d18"],["/js/src/clicktexiao.js","e4907729706a2636aad6055ba70f7dd8"],["/js/src/dytitle.js","c3476d27b2fa018e27711dc8c4b739fe"],["/js/src/exturl.js","32a95ffdc5bc7e4be6270adef783cd58"],["/js/src/hook-duoshuo.js","e755567434187c4f51d08f884b465ad7"],["/js/src/image.js","ba5d1daaebeab242ec58ed1832a21fee"],["/js/src/instantclick.js","6490a9bf00b87cee3dadcd84b2501515"],["/js/src/js.cookie.js","6828a67db92341c9d15772ea905e7fd6"],["/js/src/linkcard.js","2751a618bc3b29cc882f2fe57f524ec8"],["/js/src/love.js","757d075c10d0275596f4825eb7085fbc"],["/js/src/motion.js","cd3558cceef0fcc22104d6cb98b740f8"],["/js/src/post-details.js","b36d08881d52480e65d9f27ad5e29a68"],["/js/src/sanarous.js","c5fe474ce8d3c64d1cb51db70d8f3011"],["/js/src/schemes/pisces.js","89f60ab089bfc51bde05dd632eda2ac8"],["/js/src/scroll-cookie.js","d5bc971201a08d6e319205ac1ef1b7f1"],["/js/src/scrollspy.js","6cb1ac997f8c6cff584cb98c6ee2b858"],["/js/src/utils.js","363642e5d196604ea9c6f656f0c490bd"],["/js/src/valine.js","a45eff90b1ed6716ab64519e01ef2b46"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","77c4e77b472e01c4ef812c87ce0b1325"],["/lib/Han/dist/han.js","21665906508f01cba4fc9b6948b58a12"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","8dc6b2e642f85a49f9ba736ab9185736"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","2eada662730c9eb85c36e1b7e93eb34d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6456c5cd5b2ede125f221c235f5b7139"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","1199f582782e9aec3a27d5141127d7e8"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","1f09a317a3a59c74da59db2bff28f221"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","fda724d43dd1e7f3e5a5847590a37b3a"],["/lib/fancybox/source/jquery.fancybox.css","4d6343d604e1fc207af529e876302f3a"],["/lib/fancybox/source/jquery.fancybox.js","26ca49f4a6c4c1f8350e0ad1bf6518f9"],["/lib/fancybox/source/jquery.fancybox.pack.js","63eb446cdf2e3372202deb98771b611f"],["/lib/fastclick/README.html","0e16b1bcfba957bdec28faf160c9e8c1"],["/lib/fastclick/lib/fastclick.js","ee02082aa5ec6589cc86613f66db293f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","29f2dd55a2bbf99ee14c7747ba63df26"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","bf33bdef1bcba6a07ef5e979d17caf80"],["/lib/jquery_lazyload/CONTRIBUTING.html","75288581d8d18a7e5aa05805bb5ce7fa"],["/lib/jquery_lazyload/README.html","893e9fe3e9b197b93a7f607acd04cf7c"],["/lib/jquery_lazyload/jquery.lazyload.js","5dbce0be5a01657fcbebf22924609467"],["/lib/jquery_lazyload/jquery.scrollstop.js","0edab0b889df9eb0e1da9455e281b413"],["/lib/needsharebutton/font-embedded.css","5fb59c156a7f004805e0d16627363a48"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","601c6679e5ddb78519d7f03acdec7cbe"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","00c172abf6760535cb33bf0f536427fe"],["/lib/velocity/velocity.js","ae0c1d4cdc4704edf234a58f9a2db4fe"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","058ed7d45e2b99c68894260614eb07c8"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","1469ac89ecead010c566af3c55eee29a"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1b3abeea6b807f5f84ae49ac209f3e91"],["/page/3/index.html","a6a9a57b0e07a63e23dcb5ca6e324a62"],["/page/4/index.html","cd70a852acebd21e9839efd12e25bedd"],["/page/5/index.html","9f4c53ea3de03056a474d02bd3fe2729"],["/page/6/index.html","0c36d561a30214e65337d2c0ff2423fd"],["/posts/1243066710.html","7c5a2dda0e31a9ddf4b29a5254a2ac60"],["/posts/12430667888.html","1844d5b21913099e1dad8cc43abb0622"],["/posts/1274426981.html","455e33bb18a6be7b71661e20d1ca1da6"],["/posts/1378359675.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1384240362.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1419458254.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1456419456.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1516893568.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/1647835064.html","9149bdfd5b47f1d0674376cac89495ae"],["/posts/182814426.html","29a10cac3b94f3889cfd9daa4a8fbafb"],["/posts/1927123280.html","7f9e7b6100798430f10704cde400ede6"],["/posts/1971364850.html","4029d6563185bbfb4d42f2a3b786a327"],["/posts/2028077414.html","50f683593e28168a31ddf994541c53f5"],["/posts/2087069048.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2258574111.html","9bade320e77aea711967cb2d6b2edc11"],["/posts/2316692063.html","7864d643334dc729a250d1c36b3da73a"],["/posts/2339583608.html","e023536b216ff1bc9466a218b7e3be6a"],["/posts/2450605903.html","6956ce5bf976f86a9930a1dfab4a9ef0"],["/posts/2463236226.html","c82e81c3fa528a4086a58a684786edd4"],["/posts/2501908538.html","e6710fd4e275a797ff82ba2bb3d1c5e9"],["/posts/252831892.html","8a130b92ff02c48c78938641dccef7dd"],["/posts/2541227442.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2585761718.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2595169217.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2631218787.html","f23314c436b083884252b79099b55dd2"],["/posts/2743408289.html","f292bbf6cb8ccb9721305bf3fc115f8a"],["/posts/2755965992.html","2e9964eecd041c0af9ef5e6e98ff4394"],["/posts/2831117782.html","93b1f86ed1141e396c8990542276cd71"],["/posts/2872061145.html","b38745a46f1e7b648494f18c0101a0f4"],["/posts/297658092.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/2980872090.html","81e80ede5e847d87b486228b5d83e166"],["/posts/3000723623.html","88ac0d58e7968e1db7028d5b186c78b4"],["/posts/3010310719.html","eb459c604fd3bec847d2c7eb4debfc4e"],["/posts/3123796831.html","89c1e3f9a741ea9cd0fd0f0dfd0789aa"],["/posts/3336378626.html","42831f3dd254e8a46bf769db9a531b19"],["/posts/3460397296.html","b7eb1c06818fe4af5ef807298c2da663"],["/posts/3494630844.html","73fae36b9ddc0025e26dd37a40d7b76f"],["/posts/3728090792.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3793957696.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/3797262602.html","99e687785c407fe9278f4ed06a2a0f62"],["/posts/3891854696.html","e60bc6580a1f5fa1d6a3c8c6d7e68ced"],["/posts/401216634.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/4190096253.html","1969e44463c2b2d37b4605225a658b2e"],["/posts/4228859297.html","b763584583bc55ba4a4e038acba7f0c3"],["/posts/435317312.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/525459397.html","27935c5e48208ffe57cc9f14560e22ca"],["/posts/525459397/背景图.jpg","df49a6467dec9263ee35e6b5196c51e0"],["/posts/525459397/问题.jpg","2ca21e72a84b7833523f1bcb1a57e539"],["/posts/687187461.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/734210201.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/748566205.html","55c353fac0b7df019b80b426d500a2ce"],["/posts/818431768.html","d41d8cd98f00b204e9800998ecf8427e"],["/posts/891169081.html","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/css/imgshare.css","8e0b06c75de0e990d8b5aac2a8a078b3"],["/static/api/css/like.css","db2c5737bd4af8aea890bed2b81cfaac"],["/static/api/css/select_share.css","2a12fb7a805b86e45dbfe3fa55e4a125"],["/static/api/css/share_popup.css","86bbe1e73c838df5efeec3ea97e20996"],["/static/api/css/share_style0_16.css","e81f0d88845441b4a3f2027b099a5927"],["/static/api/css/share_style0_24.css","1c93a4be047f1c6f059bd1f7258b57ae"],["/static/api/css/share_style0_32.css","59cf399e96ca5b99c0ca9eafc1e16040"],["/static/api/css/share_style1_16.css","4c4707922607a70c9f16e76eb89f511b"],["/static/api/css/share_style1_24.css","a9a14f3c1446c4e53ae1e43eda9f7cb0"],["/static/api/css/share_style1_32.css","3a6898be926f0c6126079602d0be8a57"],["/static/api/css/share_style2.css","d4577c8e2798c7d75477aba1fbf8fb3b"],["/static/api/css/share_style2_16.css","4ada244c45d9d18a7e43c203f8b4a3ec"],["/static/api/css/share_style2_24.css","14ef7c92bc0c8bb8bf785f236d16d852"],["/static/api/css/share_style2_32.css","40a00f665a9bc16620a685699d553116"],["/static/api/css/share_style4.css","96a35da0b72bf0f7aec819ceff4bafc7"],["/static/api/css/slide_share.css","3b07a98e87f31281921820bb9641ef9f"],["/static/api/css/weixin_popup.css","b07b85bb25af666f3a3292e5ed8d3e7c"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","a3aef2c0850fa0d83ea49793b8e5cb69"],["/static/api/js/base/tangram.js","4493a0f1c0c2bfd8eb088c56b5ac1c04"],["/static/api/js/component/animate.js","6f611f163469f09b3b5275679d418b58"],["/static/api/js/component/anticheat.js","6badbac6f23fbf2aa1091ea29ed8255c"],["/static/api/js/component/comm_tools.js","310cebb11072d1bc4996020f5f68508d"],["/static/api/js/component/partners.js","028e7be1d03b78e45dbb20b3a8c4523e"],["/static/api/js/component/pop_base.js","4ea8f3fd180d025fe8cf6f1cda0799e2"],["/static/api/js/component/pop_dialog.js","fb7d0339ff488c5aae35359cc0839090"],["/static/api/js/component/pop_popup.js","fdfe72a2ef55e6890374cf4073e9c95c"],["/static/api/js/component/pop_popup_slide.js","44e69ea64fc36c920f1d18a0c7906556"],["/static/api/js/component/qrcode.js","61baf0fca2244a38d991ba7079919dc2"],["/static/api/js/conf/const.js","9e3bf6cc16a43de90596c23b4e42cac9"],["/static/api/js/conf/define.js","8376c6ef7dfa4dda91f277236e7b922e"],["/static/api/js/share.js","4053c0154dd7c9465ce96ca96787a736"],["/static/api/js/share/api_base.js","f9107ac786db8c526d82e6b2618f9ff8"],["/static/api/js/share/combine_api.js","9900b24bea6fb6547e1a4b20df46e309"],["/static/api/js/share/image_api.js","ff83417660cbcd6aef27c48fb3388294"],["/static/api/js/share/like_api.js","08c164018b429482b0e46a6a81b1cdfc"],["/static/api/js/share/likeshare.js","6e20fd82b1321aea7785fb09db696f21"],["/static/api/js/share/select_api.js","afd9244ea36a82b3ceee51d195649e19"],["/static/api/js/share/share_api.js","9183573d71867b445cb20373bc31f9c5"],["/static/api/js/share/slide_api.js","f88de8b3e5efbe7a1e210f0eaad3bda0"],["/static/api/js/start/router.js","b4b4efdb6611c8f5efa79bd995c03391"],["/static/api/js/trans/data.js","6e20fd82b1321aea7785fb09db696f21"],["/static/api/js/trans/logger.js","6e20fd82b1321aea7785fb09db696f21"],["/static/api/js/trans/trans.js","32bbb1e7d17c887ff1b054719f236fd8"],["/static/api/js/trans/trans_bdxc.js","35a94c026b880e48985e1295e2595de9"],["/static/api/js/trans/trans_bdysc.js","9cc3c0f99721333aaedffd24a23e1317"],["/static/api/js/trans/trans_weixin.js","6945db6ca6ecba44ef35e10f5ba7ead0"],["/static/api/js/view/image_view.js","cbf4a7918fddfe3df8d5e48114c9a8ad"],["/static/api/js/view/like_view.js","1ca741274ad1df88098a83cf269af9d3"],["/static/api/js/view/select_view.js","87c03429c85c91613ade79b50ee30112"],["/static/api/js/view/share_view.js","dc27241ca364036c08a7ee462bde287f"],["/static/api/js/view/slide_view.js","f9c2e0ef18d8c3cd260b56c276e7600f"],["/static/api/js/view/view_base.js","751914ef791a51fe0411d83558c81b50"],["/sw-register.js","66c1b8fa50c9e2f7f3948021b4717c8a"],["/tags/hexo/index.html","cad98ebcca82e8a2dc6b774a5bd66c91"],["/tags/index.html","60b3ba7e98f0450d53fb311513ca6b7a"],["/tags/java转载的文章/index.html","f7fe03a1dd6980ff235ffe010f4fcfcf"],["/tags/markdown/index.html","344dce7a1f8b68f849f71394a10215cd"],["/tags/mysql/index.html","24023a38639f785cf2600c532420a709"],["/tags/分布式/index.html","7398dbee06324b5d8558aee8642029b2"],["/tags/扩展转载/index.html","ff7bcafbee388792727129d0fc700023"],["/tags/操作系统/index.html","506dd6f25086064f32ed7b126dd9aedb"],["/tags/网络基础/index.html","75a8c71e2c24a249ca791fceeb378389"],["/tags/转载/index.html","fe02490dd36a4bbb0bf831763374628d"],["/tags/转载的文章/index.html","50f295a55b0dc7d3ca80c7ff85c83d90"],["/top/index.html","28abc070b2e163fb14da9e77f42a4c19"]];
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
