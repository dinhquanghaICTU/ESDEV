<!DOCTYPE html>
<html lang="vi">
    <head>
        <title>Yêu cầu thay đổi ngày sinh</title>
        <meta name="viewport" content="user-scalable=no,initial-scale=1.0001,maximum-scale=1.0001,viewport-fit=cover"/>
        <link href="https://static.xx.fbcdn.net/rsrc.php/y4/r/M6oWJ5INQpg.webp?_nc_eui2=AeEwlBipDEtByG7E2c5YysVcfXoDzMdBU_J9egPMx0FT8orjNRQLuu9hLhEuxJwyZzhvQwLknRnd5ZL2gmrZFb-1" rel="apple-touch-icon-precomposed" sizes="196x196"/>
        <meta name="referrer" content="default" id="meta_referrer"/>
        <script id="u_0_f_/I" nonce="GDUaeE4h">
            "use strict";
            window.MPageLoadClientMetrics = (function() {
                var e = +new Date
                  , t = {
                    prelude_onload: ["jewels_visible", "first_paint", "visibility_change", "tti"],
                    nav_started: ["first_paint", "visibility_change", "prelude_onload"],
                    first_paint: ["jewels_visible", "visibility_change", "prelude_onload"],
                    jewels_visible: ["tti", "visibility_change", "navigation", "prelude_onload"],
                    tti: ["e2e", "visibility_change", "navigation"]
                }
                  , n = 3
                  , r = 3
                  , o = "nav_started"
                  , a = !0
                  , i = ""
                  , l = ""
                  , s = 1
                  , u = ""
                  , c = ""
                  , d = ""
                  , m = ""
                  , p = function() {}
                  , _ = !0
                  , f = null
                  , g = !1
                  , h = !1
                  , y = null
                  , C = null
                  , b = !1
                  , v = []
                  , S = []
                  , R = window.performance || window.msPerformance || window.webkitPerformance || {}
                  , L = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout).bind(window)
                  , E = window.location.origin || window.location.protocol + "//" + window.location.hostname + (window.location.port && ":" + window.location.port);
                function k(t, n, r, o, a, s, p, g, h, v, S) {
                    R.timing && R.timing.navigationStart && (e = R.timing.navigationStart),
                    u = t,
                    c = n,
                    d = r,
                    m = o,
                    i = a,
                    l = s,
                    _ = p,
                    f = g,
                    y = h,
                    C = v,
                    b = S,
                    T()
                }
                function I(e) {
                    var n = t[o];
                    return n && n.indexOf(e) !== -1
                }
                function T() {
                    var e, t;
                    document.hidden !== void 0 ? (e = "hidden",
                    t = "visibilitychange") : document.mozHidden !== void 0 ? (e = "mozHidden",
                    t = "mozvisibilitychange") : document.msHidden !== void 0 ? (e = "msHidden",
                    t = "msvisibilitychange") : document.webkitHidden !== void 0 && (e = "webkitHidden",
                    t = "webkitvisibilitychange");
                    var n = function() {
                        V("visibility_change", x()),
                        t != null && document.removeEventListener(t, n),
                        window.removeEventListener("beforeunload", n)
                    };
                    t != null && e != null && !window[e] ? (document.addEventListener(t, n),
                    window.addEventListener("beforeunload", n)) : n()
                }
                function D(t) {
                    return t - e
                }
                function x() {
                    return R.now ? R.now() : D(+new Date)
                }
                function $() {
                    a && (a = !1,
                    p())
                }
                function P() {
                    return a
                }
                function N(e) {
                    p = e
                }
                function M() {
                    var e = s;
                    return ++s,
                    e
                }
                function w(e) {
                    window.navigator && (window.navigator.hardwareConcurrency !== void 0 && (e.num_cores = window.navigator.hardwareConcurrency),
                    window.navigator.deviceMemory && (e.ram_gb = window.navigator.deviceMemory),
                    window.navigator.connection && (typeof window.navigator.connection.downlink == "number" && (e.downlink_mb = window.navigator.connection.downlink),
                    typeof window.navigator.connection.effectiveType == "string" && (e.effective_connection_type = window.navigator.connection.effectiveType),
                    typeof window.navigator.connection.rtt == "number" && (e.rtt_ms = window.navigator.connection.rtt)))
                }
                var A = {};
                function F(t, n, r) {
                    if (a) {
                        if (y && !(t in y)) {
                            for (var i in y)
                                !A[i] && y && y[i].indexOf(t) !== -1 && (A[i] = !0,
                                F(i, n != null ? n : x(), r));
                            return
                        }
                        var s = !I(t)
                          , p = (n + e) / 1e3
                          , g = {
                            lid: l,
                            seq_num: M(),
                            event: t,
                            client_event_time: p,
                            time_from_nav_start_ms: Math.floor(n),
                            previous_event: o,
                            log_to_scuba: _
                        };
                        d !== "" && (g[d] = m),
                        o = t,
                        f !== null && (g.page_path = f),
                        u !== "" && (g.fb_dtsg = u),
                        c !== "" && (g.lsd = c),
                        s && (g.illegal_transition_event = t);
                        var h = r || "";
                        h !== "" && (g.navigation_endpoint = h),
                        C != null && (g.pa = C),
                        w(g),
                        b ? O(g) : v.push(g)
                    }
                }
                function O(e) {
                    q(e) || U(e)
                }
                function B() {
                    b = !0,
                    v.forEach(O),
                    v.length = 0
                }
                function W(e) {
                    var t = [];
                    for (var n in e)
                        t.push(n + "=" + encodeURIComponent(e[n]));
                    var r = E + i
                      , o = t.join("&");
                    return r + "?" + o
                }
                function q(e) {
                    if (e.transmission_method = "beacon",
                    window.navigator && window.navigator.sendBeacon) {
                        if (window.navigator.sendBeacon(W(e)))
                            return !0;
                        e.is_retransmit = !0
                    }
                    return !1
                }
                function U(e, t) {
                    t === void 0 && (t = r),
                    e.transmission_method = "img";
                    var n = new Image;
                    t < r && (e.is_retransmit = !0),
                    t && (n.onerror = function(n) {
                        U(e, t - 1)
                    }
                    ),
                    n.src = W(e)
                }
                function V(e, t, n) {
                    if (g) {
                        S.push({
                            e: e,
                            time: t,
                            nav: n
                        });
                        return
                    }
                    F(e, t, n)
                }
                function H(e) {
                    if (a) {
                        g = !0;
                        var t = function(t) {
                            var n = Math.min.apply(Math, [t].concat(S.map(function(e) {
                                return e.time
                            })));
                            g = !1,
                            F("first_paint", n),
                            (e || h) && F("jewels_visible", n),
                            S.forEach(function(e) {
                                return F(e.e, e.time, e.nav)
                            })
                        };
                        L(function() {
                            var e = x();
                            if (R.getEntriesByName) {
                                var r = function(o) {
                                    var a = R.getEntriesByName("first-paint")[0];
                                    a ? t(a.startTime || e) : o ? window.setTimeout(function() {
                                        return r(!1)
                                    }, n) : t(e)
                                };
                                window.setTimeout(function() {
                                    return r(!0)
                                }, n)
                            } else
                                t(e)
                        })
                    }
                }
                function G() {
                    if (g) {
                        h = !0;
                        return
                    }
                    F("jewels_visible", x())
                }
                function z() {
                    F("prelude_onload", x())
                }
                return {
                    init: k,
                    logFirstPaint: H,
                    logJewelsVisible: G,
                    logPreludeOnload: z,
                    logEvent: V,
                    getMSFromNavStart: x,
                    isEnabled: P,
                    currentTimeToNavStartDelta: D,
                    setDisableCallback: N,
                    disable: $,
                    origin: E,
                    runPostConsentLogs: B
                }
            }
            )();
            MPageLoadClientMetrics.init("NAfvM9kVr5I1tAYIwrCtXdbjcKYt2RHZL7Bm-OrjH2HHcS-ifr7rGQQ:50:1769352215", "", "jazoest", "25407", "\/ajax\/mtouch_perf_page_load_timings\/", "7615615677563578745", false, "XMContactController", null, "", true);
        </script>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/yA/l/0,cross/SWCXbp2TArq.css?_nc_eui2=AeGP1tJSrj4Q2SEgqA9mvr43Z2p0vginQKtnanS-CKdAq-adTX-6FskKWa-Ed0dmHsdtc6MRYEUVj8M0-HmEhNzi" data-bootloader-hash="rHI9PUR" crossorigin="anonymous"/>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/yC/l/0,cross/prLHKxegjAh.css?_nc_eui2=AeHm0Jzgfpa0t4Bd18oi0XnqjoX_9xPhObWOhf_3E-E5tXZhiYkE2jLKyywFaN-6vRqX9KlaRLHfkU6xPi531U8v" data-bootloader-hash="iFYxqSq" crossorigin="anonymous"/>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/yl/l/0,cross/N9XGsEkrqPN.css?_nc_eui2=AeHVFrjnqrXwghzQLET-RzOizyyoM_QLaH3PLKgz9AtofRhuB2Gf7mb2FEnN3fl1fQznx4e5USV6B2plL64N3vFX" data-bootloader-hash="CsX+gXJ" crossorigin="anonymous"/>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/yb/l/0,cross/7BjVYxUqHbK.css?_nc_eui2=AeE87kleKYdvqFskXzBUuy4BBzNKCEzi3GMHM0oITOLcYxNOtQKYXcsGQf3gQRIQra6vmhNGqSsaRzA4qyUt34Y0" data-bootloader-hash="fEQZi8x" crossorigin="anonymous"/>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/yZ/l/0,cross/3VJWSz8UF52.css?_nc_eui2=AeExYfrqm_LQvwlwFx1R0PREf_VNwIL2EmR_9U3AgvYSZJ1RcVcdTiDr8q4CjA2KTrWcuPdwFzOw8mQPXPkmujRj" data-bootloader-hash="236A0bD" crossorigin="anonymous"/>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/y2/l/0,cross/G8SXblP5m5F.css?_nc_eui2=AeGvBywIVp57C-XCs7ozvmTxgQKcJmrRmkyBApwmatGaTPqhn0G-JPxA83ttzKUd1nNZieRumwuxQQbKrxnyme5f" data-bootloader-hash="Gd+1NvE" crossorigin="anonymous"/>
        <link type="text/css" rel="stylesheet" href="https://static.xx.fbcdn.net/rsrc.php/v5/yO/l/0,cross/S6VKuAula38.css?_nc_eui2=AeH4obqpyxIkZUANjL9er8rjz8fMlAxaPcbPx8yUDFo9xtYkEdJuuzbHiFhXfDqPHrGlOonD_AiU3Om5XDe8vo5X" data-bootloader-hash="jCjSDgF" crossorigin="anonymous"/>
        <script id="u_0_g_ce" nonce="GDUaeE4h">
            function envFlush(e) {
                function t(t) {
                    for (var n in e)
                        t[n] = e[n]
                }
                window.requireLazy ? window.requireLazy(["Env"], t) : (window.Env = window.Env || {},
                t(window.Env))
            }
            envFlush({
                "useTrustedTypes": false,
                "isTrustedTypesReportOnly": false,
                "stratcom_event_profiler_hook": "1",
                "shouldLogCounters": true,
                "timeslice_categories": {
                    "react_render": true,
                    "reflow": true
                },
                "sample_continuation_stacktraces": true,
                "dom_mutation_flag": true
            });
        </script>
        <script nonce="GDUaeE4h"></script>
        <script nonce="GDUaeE4h">
            __DEV__ = 0;
            ;
            _btldr = {};
            ;
            (function() {
                function e(e) {
                    return e.parentElement !== document.body && e.parentElement !== document.head
                }
                function t(e) {
                    var t;
                    return e.nodeName === "SCRIPT" || e.nodeName === "LINK" && ((t = n(e)) == null ? void 0 : t.asyncCss)
                }
                function n(e) {
                    return e.dataset instanceof window.DOMStringMap ? e.dataset : null
                }
                function r(r) {
                    var o;
                    try {
                        if (r.nodeType !== Node.ELEMENT_NODE)
                            return
                    } catch (e) {
                        return
                    }
                    if (!(e(r) || !t(r))) {
                        var a = (o = n(r)) == null ? void 0 : o.bootloaderHash;
                        if (a != null && a !== "") {
                            var i = null
                              , l = function() {
                                window._btldr[a] = 1,
                                i == null || i()
                            };
                            i = function() {
                                r.removeEventListener("load", l),
                                r.removeEventListener("error", l)
                            }
                            ,
                            r.addEventListener("load", l),
                            r.addEventListener("error", l)
                        }
                    }
                }
                Array.from(document.querySelectorAll('script,link[data-async-css="1"]')).forEach(function(e) {
                    return r(e)
                });
                var o = new MutationObserver(function(e, t) {
                    e.forEach(function(e) {
                        e.type === "childList" && Array.from(e.addedNodes).forEach(function(e) {
                            r(e)
                        })
                    })
                }
                );
                o.observe(document.getElementsByTagName("html")[0], {
                    attributes: !1,
                    childList: !0,
                    subtree: !0
                })
            }
            )();
        </script>
        <script id="u_0_h_et" crossorigin="anonymous" src="https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/dNu9TjYRS-y.js?_nc_eui2=AeFc4YzC0wun1v-VRyZf5MWmqKHADDsqPVqoocAMOyo9WumJkjAV8xaiFJWXffBXIhAgzEJ-w8DNjSnZd39dLGmw" data-bootloader-hash="+nv1HmN"></script>
        <script id="u_0_i_PW" nonce="GDUaeE4h">
            MPageLoadClientMetrics.logPreludeOnload();
        </script>
        <script id="u_0_e_P6" nonce="GDUaeE4h">
            (function _(e, t, n, r) {
                var o;
                function a(e) {
                    document.cookie = e + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/;domain=.facebook.com"
                }
                function i(e, t) {
                    document.cookie = e + "=" + t + ";path=/;domain=.facebook.com;secure"
                }
                if (!e) {
                    a(t),
                    a(n);
                    return
                }
                var l = null;
                (navigator.userAgent.indexOf("Firefox") !== -1 || !window.devicePixelRatio && navigator.userAgent.indexOf("Windows Phone") !== -1) && document.documentElement != null && (l = screen.width / document.documentElement.offsetWidth,
                l = Math.max(1, Math.floor(l * 2) / 2)),
                (l == null || l === 0 || l === 1) && navigator.userAgent.indexOf("IEMobile") !== -1 && (l = Math.sqrt(screen.deviceXDPI * screen.deviceYDPI) / 96,
                l = Math.max(1, Math.round(l * 2) / 2)),
                i(t, ((o = l != null ? l : window.devicePixelRatio) != null ? o : 1).toString());
                var s = window.screen ? screen.width : 0
                  , u = window.screen ? screen.height : 0;
                i(n, s + "x" + u),
                r && document.cookie && window.devicePixelRatio > 1 && document.location.reload()
            }
            )(true, "m_pixel_ratio", "wd", false);
        </script>
        <link rel="manifest" id="MANIFEST_LINK" href="/data/manifest/?is_workplace_mobile_pwa_dogfooding=0" crossorigin="use-credentials"/>
    </head>
    <body tabindex="0" class="touch x2 ios sf mSafari _fzu _50-3 _67i4 _55wm">
        <script id="u_0_d_9C" nonce="GDUaeE4h">
            (function(e) {
                e.__updateOrientation = function() {
                    var t = !!e.orientation && e.orientation !== 180
                      , n = document.body;
                    return n && (n.className = n.className.replace(/(^|\s)(landscape|portrait)(\s|$)/g, " ") + " " + (t ? "landscape" : "portrait")),
                    t
                }
            }
            )(window);
        </script>
        <div id="viewport" data-kaios-focus-transparent="1">
            <h1 style="display:block;height:0;overflow:hidden;position:absolute;width:0;padding:0">Facebook</h1>
            <div id="page">
                <div class="_129_" id="header-notices"></div>
                <div class="_52z5 _451a mFuturePageHeader _1uh1 titled" id="header">
                    <div class="_7om2 _52we">
                        <div class="_5s61">
                            <div class="_52z7">
                                <a role="button" class="backButton btn btnI bgb mfss touchable iconOnly" href="/help/?helpref=header_back" aria-label="Quay l&#x1ea1;i" id="u_0_2_rt" data-sigil="back-button">
                                    <i class="img sp_NBdFi5n4y4n_3x sx_fcbe07" style="margin-top: 2px;"></i>
                                </a>
                            </div>
                        </div>
                        <div class="_4g34">
                            <div class="_52z6">
                                <div class="_50l4 mfsl fcw" id="m-future-page-header-title" data-sigil="m-dialog-header-title">Yêu cầu thay đổi ngày sinh</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rootcontainer">
                    <div class="_65w _55wm" id="root" role="main" data-sigil="context-layer-root content-pane">
                        <div>
                            <article class="_55wm _55wr" id="u_0_0_gU">
                                <form method="post" action="/a/help/contact_us/" class="_5u9h" enctype="multipart/form-data" id="Changing Your Birthday">
                                    <input type="hidden" name="fb_dtsg" value="NAfvM9kVr5I1tAYIwrCtXdbjcKYt2RHZL7Bm-OrjH2HHcS-ifr7rGQQ:50:1769352215" autocomplete="off"/>
                                    <input type="hidden" name="jazoest" value="25407" autocomplete="off"/>
                                    <div class="_56be _5u9j _1fja">
                                        <div class="_55wo _55x2 _56bf">
                                            <h3 class="_52je _52jb _52jh _59e9 _55ws">Yêu cầu thay đổi ngày sinh</h3>
                                            <div class="_55wr"></div>
                                            <div>
                                                <div class="_55wr" id="SupportFormRow.236441056435545">
                                                    <div>
                                                        <div class="acw" data-sigil="marea">
                                                            <div>
                                                                <p class="_46ki">Xin lưu ý rằng tài khoản Facebook của bạn phải liệt kê ngày sinh và tên thật của bạn. Những tài khoản liệt kê thông tin không chính xác (ví dụ: tên giả, ngày sinh giả) có thể bị tạm ngừng. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_55wr" id="SupportFormRow.365669286792421">
                                                    <div>
                                                        <div class="acw" data-sigil="marea">
                                                            Ngày sinh<br/>
                                                            <span class="_5u9i">
                                                                <select name="Dob[year]">
                                                                    <option value="2026">2026</option>
                                                                    <option value="2025">2025</option>
                                                                    <option value="2024">2024</option>
                                                                    <option value="2023">2023</option>
                                                                    <option value="2022">2022</option>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2020">2020</option>
                                                                    <option value="2019">2019</option>
                                                                    <option value="2018">2018</option>
                                                                    <option value="2017">2017</option>
                                                                    <option value="2016">2016</option>
                                                                    <option value="2015">2015</option>
                                                                    <option value="2014">2014</option>
                                                                    <option value="2013">2013</option>
                                                                    <option value="2012">2012</option>
                                                                    <option value="2011">2011</option>
                                                                    <option value="2010">2010</option>
                                                                    <option value="2009">2009</option>
                                                                    <option value="2008">2008</option>
                                                                    <option value="2007">2007</option>
                                                                    <option value="2006">2006</option>
                                                                    <option value="2005">2005</option>
                                                                    <option value="2004">2004</option>
                                                                    <option value="2003">2003</option>
                                                                    <option value="2002">2002</option>
                                                                    <option value="2001">2001</option>
                                                                    <option value="2000">2000</option>
                                                                    <option value="1999">1999</option>
                                                                    <option value="1998">1998</option>
                                                                    <option value="1997">1997</option>
                                                                    <option value="1996">1996</option>
                                                                    <option value="1995">1995</option>
                                                                    <option value="1994">1994</option>
                                                                    <option value="1993">1993</option>
                                                                    <option value="1992">1992</option>
                                                                    <option value="1991">1991</option>
                                                                    <option value="1990">1990</option>
                                                                    <option value="1989">1989</option>
                                                                    <option value="1988">1988</option>
                                                                    <option value="1987">1987</option>
                                                                    <option value="1986">1986</option>
                                                                    <option value="1985">1985</option>
                                                                    <option value="1984">1984</option>
                                                                    <option value="1983">1983</option>
                                                                    <option value="1982">1982</option>
                                                                    <option value="1981">1981</option>
                                                                    <option value="1980">1980</option>
                                                                    <option value="1979">1979</option>
                                                                    <option value="1978">1978</option>
                                                                    <option value="1977">1977</option>
                                                                    <option value="1976">1976</option>
                                                                    <option value="1975">1975</option>
                                                                    <option value="1974">1974</option>
                                                                    <option value="1973">1973</option>
                                                                    <option value="1972">1972</option>
                                                                    <option value="1971">1971</option>
                                                                    <option value="1970">1970</option>
                                                                    <option value="1969">1969</option>
                                                                    <option value="1968">1968</option>
                                                                    <option value="1967">1967</option>
                                                                    <option value="1966">1966</option>
                                                                    <option value="1965">1965</option>
                                                                    <option value="1964">1964</option>
                                                                    <option value="1963">1963</option>
                                                                    <option value="1962">1962</option>
                                                                    <option value="1961">1961</option>
                                                                    <option value="1960">1960</option>
                                                                    <option value="1959">1959</option>
                                                                    <option value="1958">1958</option>
                                                                    <option value="1957">1957</option>
                                                                    <option value="1956">1956</option>
                                                                    <option value="1955">1955</option>
                                                                    <option value="1954">1954</option>
                                                                    <option value="1953">1953</option>
                                                                    <option value="1952">1952</option>
                                                                    <option value="1951">1951</option>
                                                                    <option value="1950">1950</option>
                                                                    <option value="1949">1949</option>
                                                                    <option value="1948">1948</option>
                                                                    <option value="1947">1947</option>
                                                                    <option value="1946">1946</option>
                                                                    <option value="1945">1945</option>
                                                                    <option value="1944">1944</option>
                                                                    <option value="1943">1943</option>
                                                                    <option value="1942">1942</option>
                                                                    <option value="1941">1941</option>
                                                                    <option value="1940">1940</option>
                                                                    <option value="1939">1939</option>
                                                                    <option value="1938">1938</option>
                                                                    <option value="1937">1937</option>
                                                                    <option value="1936">1936</option>
                                                                    <option value="1935">1935</option>
                                                                    <option value="1934">1934</option>
                                                                    <option value="1933">1933</option>
                                                                    <option value="1932">1932</option>
                                                                    <option value="1931">1931</option>
                                                                    <option value="1930">1930</option>
                                                                    <option value="1929">1929</option>
                                                                    <option value="1928">1928</option>
                                                                    <option value="1927">1927</option>
                                                                    <option value="1926">1926</option>
                                                                    <option value="1925">1925</option>
                                                                    <option value="1924">1924</option>
                                                                    <option value="1923">1923</option>
                                                                    <option value="1922">1922</option>
                                                                    <option value="1921">1921</option>
                                                                    <option value="1920">1920</option>
                                                                    <option value="1919">1919</option>
                                                                    <option value="1918">1918</option>
                                                                    <option value="1917">1917</option>
                                                                    <option value="1916">1916</option>
                                                                    <option value="1915">1915</option>
                                                                    <option value="1914">1914</option>
                                                                    <option value="1913">1913</option>
                                                                    <option value="1912">1912</option>
                                                                    <option value="1911">1911</option>
                                                                    <option value="1910">1910</option>
                                                                    <option value="1909">1909</option>
                                                                    <option value="1908">1908</option>
                                                                    <option value="1907">1907</option>
                                                                    <option value="1906">1906</option>
                                                                    <option value="1905">1905</option>
                                                                </select>
                                                                <select name="Dob[month]">
                                                                    <option value="1">Tháng 1</option>
                                                                    <option value="2">Tháng 2</option>
                                                                    <option value="3">Tháng 3</option>
                                                                    <option value="4">Tháng 4</option>
                                                                    <option value="5">Tháng 5</option>
                                                                    <option value="6">Tháng 6</option>
                                                                    <option value="7">Tháng 7</option>
                                                                    <option value="8">Tháng 8</option>
                                                                    <option value="9">Tháng 9</option>
                                                                    <option value="10">Tháng 10</option>
                                                                    <option value="11">Tháng 11</option>
                                                                    <option value="12">Tháng 12</option>
                                                                </select>
                                                                <select name="Dob[day]">
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                    <option value="13">13</option>
                                                                    <option value="14">14</option>
                                                                    <option value="15">15</option>
                                                                    <option value="16">16</option>
                                                                    <option value="17">17</option>
                                                                    <option value="18">18</option>
                                                                    <option value="19">19</option>
                                                                    <option value="20">20</option>
                                                                    <option value="21">21</option>
                                                                    <option value="22">22</option>
                                                                    <option value="23">23</option>
                                                                    <option value="24">24</option>
                                                                    <option value="25">25</option>
                                                                    <option value="26">26</option>
                                                                    <option value="27">27</option>
                                                                    <option value="28">28</option>
                                                                    <option value="29">29</option>
                                                                    <option value="30">30</option>
                                                                    <option value="31">31</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_55wr" id="SupportFormRow.1554023828199014">
                                                    <div>
                                                        <div class="acw" data-sigil="marea">
                                                            Lý do thay đổi<br/>
                                                            <select name="Reason" id="1554023828199014">
                                                                <option value="" selected="1">Vui lòng chọn</option>
                                                                <option value="This is my real birthday">Đây là ngày sinh thật của tôi</option>
                                                                <option value="I don&#039;t want to display my birthday">Tôi không muốn hiển thị ngày sinh của mình</option>
                                                                <option value="This is a special date (ex: anniversary, wedding, spiritual)">Đây là một ngày đặc biệt (ví dụ: ngày kỷ niệm, ngày cưới, ngày lễ tôn giáo)</option>
                                                                <option value="This is my child&#039;s birthday">Đây là ngày sinh nhật của con tôi</option>
                                                                <option value="This is my pet&#039;s birthday">Đây là sinh nhật thú cưng của tôi</option>
                                                                <option value="This is a business">Tài khoản này được dùng để đại diện cho một doanh nghiệp</option>
                                                                <option value="I want to deactivate or remove my account ">Tôi muốn vô hiệu hóa hoặc gỡ tài khoản của mình</option>
                                                                <option value="Other">Khác</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_55wr" id="SupportFormRow.355657773032941">
                                                    <div>
                                                        <div class="acw" data-sigil="marea">
                                                            <div>
                                                                <p class="_46ki">
                                                                    Please provide a photo of a <a href="https://www.facebook.com/help/159096464162185">valid ID</a>
                                                                    .
                                                                </p>
                                                                <p class="_46ki">Your photo ID must include your face and date of birth so we can verify your age. After you send us a copy of your ID, it &#039;ll be encrypted and stored securely. Your ID won &#039;t be visible on your profile, to friends or to other people on Facebook and will be deleted 30 days after submission.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="_55wr" id="SupportFormRow.2252252358246313">
                                                    <div>
                                                        <div class="acw" data-sigil="marea">
                                                            Giấy tờ tùy thân của bạn<br/>
                                                            <div class="_6-q _6-r" id="attach_photo">
                                                                <input type="file" name="id_upload[]" id="2252252358246313" accept="image/*" multiple="1" data-sigil="photo-input"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="hidden" name="form_id" value="233841356784195"/>
                                                <input type="hidden" name="support_form_id" value="233841356784195"/>
                                                <input type="hidden" name="support_form_locale_id" value="vi_VN"/>
                                                <input type="hidden" id="support_form_233841356784195_hidden_fields" name="support_form_hidden_fields" value="[]"/>
                                                <input type="hidden" id="support_form_233841356784195_fact_false_fields" name="support_form_fact_false_fields" value="[]"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="_3-8y">
                                        <button type="submit" value="G&#x1eed;i" class="_54k8 _52jg _56bs _26vk _56b_ _56bw _56bu" id="u_0_1_ZU" data-sigil="touchable">
                                            <span class="_55sr">Gửi</span>
                                        </button>
                                    </div>
                                </form>
                            </article>
                        </div>
                        <div style="display:none">
                            <iframe data-testid="sem_pixel_iframe" width="0" height="0" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=ORgiCM6w56cBEOWhsuwD&amp;sub_categories_ints=-1&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=14&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP4HN" scrolling="no" frameborder="0" id="u_0_3_uD"></iframe>
                            <iframe data-testid="sem_pixel_iframe" width="0" height="0" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=l67ACNeVscEZEOWhsuwD&amp;sub_categories_ints=-1&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=31&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP1Gw" scrolling="no" frameborder="0" id="u_0_4_bw"></iframe>
                            <iframe data-testid="sem_pixel_iframe" width="0" height="0" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=9FZaCInEnOwaEOWhsuwD&amp;sub_categories_ints=7148434200721666028&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=36&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP4GK" scrolling="no" frameborder="0" id="u_0_5_Aa"></iframe>
                            <iframe data-testid="sem_pixel_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="1" width="1" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=sVPrCLPQkewaEOWhsuwD&amp;sub_categories_ints=7148434200721666028&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=37&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP9vP" sandbox="allow-same-origin allow-scripts" id=""></iframe>
                            <iframe data-testid="sem_pixel_iframe" width="0" height="0" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=eJm5CNz_kewaEOWhsuwD&amp;sub_categories_ints=7148434200721666028&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=38&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP_2-" scrolling="no" frameborder="0" id="u_0_6_r2"></iframe>
                            <iframe data-testid="sem_pixel_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="1" width="1" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=qtZmCLPD5PIaEOWhsuwD&amp;sub_categories_ints=7148434200721666028&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=39&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP0yz" sandbox="allow-same-origin allow-scripts" id=""></iframe>
                            <iframe data-testid="sem_pixel_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" height="1" width="1" src="https://www.fbsbx.com/paid_ads_pixel/iframe/?tag_ids%5B0%5D=AW-1032622309&amp;labels%5B0%5D=r7Z2CLXFqoUbEOWhsuwD&amp;sub_categories_ints=7148434200721666028&amp;funnel_id=2ed7c0d1-e4ae-4ae8-9cab-d281d86707e8&amp;caller=view_port&amp;sem_pixel_category=40&amp;is_remarketing&amp;__cci=FQAREiIVABn1iQEC5ALSAiQuPkBGSEpMTlBUWFxeYGJkamxydHh6gAGCAYQBhgGIAYoBjAGUAZwBngGgAaQBuAHOAdoC2gHeAeAB4gHqAewB7gHwAfQB%2FgGAAoYClgKaAqACsAIEBgoMDhASFhgcHiAiJigqLDAyNjg6PLICQkTqAmZucHa%2BAnyOAZABwgKSAZYBmAGaAeYCogHIAroCqAGsAa4BsAGyAbQBzgK6Ab4B1gLAAcIBygLGAcgBygHMAcwC0AHUAdgB1ALkAegB%2BAH6AeAC%2FAGKAsYCjAKOApAC2AKYAqICGAxGYWNlYm9va0hvc3QYAW0YE1hNQ29udGFjdENvbnRyb2xsZXIA.Aap98dW4UmciMtmyfSilebryX9fnQJrKubXWEYjeOJkYP59v" sandbox="allow-same-origin allow-scripts" id=""></iframe>
                        </div>
                    </div>
                </div>
                <div class=""></div>
                <div class="viewportArea _2v9s" style="display:none" id="u_0_7_9G" data-sigil="marea">
                    <div class="_5vsg" id="u_0_8_lR"></div>
                    <div class="_5vsh" id="u_0_9_eQ"></div>
                    <div class="_5v5d fcg">
                        <div class="_2so _2sq _2ss img _50ch" data-animtype="3" data-sigil="m-loading-indicator-root">
                            <div class="_2sr" data-sigil="m-loading-indicator-animate"></div>
                        </div>
                        Đang tải...
                    </div>
                </div>
                <div class="viewportArea aclb" id="mErrorView" style="display:none" data-sigil="marea">
                    <div class="container">
                        <div class="image"></div>
                        <div class="message" data-sigil="error-message"></div>
                        <a class="link" data-sigil="MPageError:retry">Thử lại</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="static_templates">
            <div class="mDialog" id="modalDialog" style="display:none">
                <div class="_52z5 _451a mFuturePageHeader _1uh1 firstStep titled" id="mDialogHeader">
                    <div class="_7om2 _52we">
                        <div class="_5s61">
                            <div class="_52z7">
                                <button type="submit" value="H&#x1ee7;y" class="cancelButton btn btnD bgb mfss touchable" id="u_0_b_X6" data-sigil="dialog-cancel-button">Hủy</button>
                                <button type="submit" value="Quay l&#x1ea1;i" class="backButton btn btnI bgb mfss touchable iconOnly" aria-label="Quay l&#x1ea1;i" id="u_0_c_LP" data-sigil="dialog-back-button">
                                    <i class="img sp_NBdFi5n4y4n_3x sx_fcbe07" style="margin-top: 2px;"></i>
                                </button>
                            </div>
                        </div>
                        <div class="_4g34">
                            <div class="_52z6">
                                <div class="_50l4 mfsl fcw" id="m-future-page-header-title" role="heading" tabindex="0" data-sigil="m-dialog-header-title dialog-title">Đang tải...</div>
                            </div>
                        </div>
                        <div class="_5s61">
                            <div class="_52z8" id="modalDialogHeaderButtons"></div>
                        </div>
                    </div>
                </div>
                <div class="modalDialogView" id="modalDialogView"></div>
                <div class="_5v5d _5v5e fcg" id="dialogSpinner">
                    <div class="_2so _2sq _2ss img _50ch" data-animtype="3" id="u_0_a_lQ" data-sigil="m-loading-indicator-root">
                        <div class="_2sr" data-sigil="m-loading-indicator-animate"></div>
                    </div>
                    Đang tải...
                </div>
            </div>
        </div>
        <script type="text/javascript" nonce="GDUaeE4h">
            /*<![CDATA[*/
            (function() {
                if (top != self) {
                    try {
                        if (parent != top) {
                            throw 1;
                        }
                        var si_cj_d = ["apps.facebook.com", "apps.beta.facebook.com"];
                        var href = top.location.href.toLowerCase();
                        for (var i = 0; i < si_cj_d.length; i++) {
                            if (href.indexOf(si_cj_d[i]) >= 0) {
                                throw 1;
                            }
                        }
                    } catch (e) {
                        window.document.write("\u003Cstyle nonce=\"GDUaeE4h\">body * {display:none !important;}\u003C\/style>\u003Ca href=\"#\" onclick=\"top.location.href=window.location.href\" style=\"display:block !important;padding:10px\" role=\"button\">Truy c\u1eadp Facebook.com\u003C\/a>");
                        /*GaELuz9c*/
                    }
                }
            }())
            /*]]>*/
        </script>
        <script id="u_0_j_RW" nonce="GDUaeE4h">
            MPageLoadClientMetrics.logFirstPaint(true);
        </script>
        <script id="u_0_k_Ux" crossorigin="anonymous" src="https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/M7Eie-RKPFe.js?_nc_eui2=AeFbMpurYQEyDCx5M9iqxLuwbuaPmfhm719u5o-Z-GbvX0cAM-wGodl6xo1jmyrb331knBBuH_R55iO4xuuvMf9O" data-bootloader-hash="SfH6S8P"></script>
        <script id="u_0_l_0t" nonce="GDUaeE4h">
            requireLazy(["HasteSupportData"], function(m) {
                m.handle({
                    "clpData": {
                        "1838142": {
                            "r": 1,
                            "s": 1
                        }
                    },
                    "gkxData": {
                        "1174": {
                            "result": false,
                            "hash": null
                        },
                        "5163": {
                            "result": false,
                            "hash": null
                        },
                        "5415": {
                            "result": false,
                            "hash": null
                        },
                        "7742": {
                            "result": false,
                            "hash": null
                        },
                        "8068": {
                            "result": false,
                            "hash": null
                        },
                        "8869": {
                            "result": false,
                            "hash": null
                        },
                        "9063": {
                            "result": false,
                            "hash": null
                        },
                        "15745": {
                            "result": false,
                            "hash": null
                        },
                        "18719": {
                            "result": false,
                            "hash": null
                        },
                        "20935": {
                            "result": false,
                            "hash": null
                        },
                        "20936": {
                            "result": false,
                            "hash": null
                        },
                        "21043": {
                            "result": false,
                            "hash": null
                        }
                    },
                    "justknobxData": {
                        "3323": {
                            "r": true
                        },
                        "3414": {
                            "r": true
                        },
                        "1276": {
                            "r": true
                        }
                    }
                })
            });
            requireLazy(["TimeSliceImpl", "ServerJS"], function(TimeSlice, ServerJS) {
                (new ServerJS()).handle({
                    "define": [["cr:135", ["MRun"], {
                        "__rc": ["MRun", null]
                    }, -1], ["cr:1078", ["MURIgo"], {
                        "__rc": ["MURIgo", null]
                    }, -1], ["cr:1080", [], {
                        "__rc": [null, null]
                    }, -1], ["cr:1126", ["TimeSliceImpl"], {
                        "__rc": ["TimeSliceImpl", null]
                    }, -1], ["cr:3725", ["clearTimeoutWWWOrMobile"], {
                        "__rc": ["clearTimeoutWWWOrMobile", null]
                    }, -1], ["cr:4344", ["setTimeoutWWWOrMobile"], {
                        "__rc": ["setTimeoutWWWOrMobile", null]
                    }, -1], ["cr:6640", ["PromiseImpl"], {
                        "__rc": ["PromiseImpl", null]
                    }, -1], ["cr:6669", ["MDataStore"], {
                        "__rc": ["MDataStore", null]
                    }, -1], ["cr:7385", ["clearIntervalBlue"], {
                        "__rc": ["clearIntervalBlue", null]
                    }, -1], ["cr:7386", ["clearTimeoutBlue"], {
                        "__rc": ["clearTimeoutBlue", null]
                    }, -1], ["cr:7389", ["setIntervalAcrossTransitionsBlue"], {
                        "__rc": ["setIntervalAcrossTransitionsBlue", null]
                    }, -1], ["cr:7390", ["setTimeoutBlue"], {
                        "__rc": ["setTimeoutBlue", null]
                    }, -1], ["cr:7391", ["setTimeoutAcrossTransitionsBlue"], {
                        "__rc": ["setTimeoutAcrossTransitionsBlue", null]
                    }, -1], ["cr:8959", ["MDTSG"], {
                        "__rc": ["MDTSG", null]
                    }, -1], ["cr:8960", ["MDTSG_ASYNC"], {
                        "__rc": ["MDTSG_ASYNC", null]
                    }, -1], ["cr:696703", [], {
                        "__rc": [null, null]
                    }, -1], ["CometPersistQueryParams", [], {
                        "relative": {},
                        "domain": {}
                    }, 6231], ["AdsManagerReadRegions", [], {
                        "excluded_endpoints": ["\/am_tabular", "\/ad_limits_insights", "\/ads_reporting", "\/column_suggestions", "\/customaudiences", "\/insights", "\/reporting", "\/edit", "\/adspixels"],
                        "excluded_preloaders": ["AdsPEInsightsEdgeDataLoaderPreloader", "AdsPEInsightsEdgeSummaryDataLoaderPreloader", "AdsPEInsightsColumnPresetDataLoaderPreloader", "AdsReportBuilderBusinessViewReportPreloader", "AdsReportBuilderAdAccountViewReportPreloader", "AdsReportBuilderManageUnifiedReportsPreloader"]
                    }, 7950], ["BigPipeExperiments", [], {
                        "link_images_to_pagelets": false,
                        "am_page_load_promise_timeout": false,
                        "enable_bigpipe_plugins": false
                    }, 907], ["BootloaderConfig", [], {
                        "deferBootloads": false,
                        "enableLoadingUnavailableResources": true,
                        "enableRetryOnStuckResource": false,
                        "immediatesBugFixKillswitch": true,
                        "jsRetries": [200, 500],
                        "jsRetryAbortNum": 2,
                        "jsRetryAbortTime": 5,
                        "silentDups": true,
                        "timeout": 60000,
                        "tieredLoadingFromTier": 100,
                        "hypStep4": false,
                        "btCutoffIndex": 307,
                        "fastPathForAlreadyRequired": true,
                        "csrOn": false,
                        "nonce": "GDUaeE4h",
                        "shouldEnableProxyArgs": false,
                        "translationRetries": [200, 500],
                        "translationRetryAbortNum": 3,
                        "translationRetryAbortTime": 50
                    }, 329], ["CSSLoaderConfig", [], {
                        "timeout": 5000,
                        "loadEventSupported": true
                    }, 619], ["CurrentUserInitialData", [], {
                        "ACCOUNT_ID": "100027371148291",
                        "USER_ID": "100027371148291",
                        "NAME": "\u0110inh Quang H\u00e0",
                        "SHORT_NAME": "\u0110inh",
                        "IS_BUSINESS_PERSON_ACCOUNT": false,
                        "HAS_SECONDARY_BUSINESS_PERSON": false,
                        "IS_FACEBOOK_WORK_ACCOUNT": false,
                        "IS_INSTAGRAM_BUSINESS_PERSON": false,
                        "IS_WABA_BUSINESS_PERSON": false,
                        "IS_MESSENGER_ONLY_USER": false,
                        "IS_DEACTIVATED_ALLOWED_ON_MESSENGER": false,
                        "IS_MESSENGER_CALL_GUEST_USER": false,
                        "IS_WORK_MESSENGER_CALL_GUEST_USER": false,
                        "IS_WORKROOMS_USER": false,
                        "APP_ID": "412378670482",
                        "IS_BUSINESS_DOMAIN": false
                    }, 270], ["LSD", [], {
                        "token": "pewV-UiH-NuDfgPvbR0_oT"
                    }, 323], ["ServerNonce", [], {
                        "ServerNonce": "MKPGW_dsplDWjA_w-RbLL2"
                    }, 141], ["SprinkleConfig", [], {
                        "param_name": "jazoest",
                        "version": 2,
                        "should_randomize": false
                    }, 2111], ["PromiseUsePolyfillSetImmediateGK", [], {
                        "www_always_use_polyfill_setimmediate": false
                    }, 2190], ["JSErrorLoggingConfig", [], {
                        "appId": 412378670482,
                        "extra": [],
                        "reportInterval": 50,
                        "sampleWeight": null,
                        "sampleWeightKey": "__jssesw",
                        "projectBlocklist": []
                    }, 2776], ["ImmediateImplementationExperiments", [], {
                        "prefer_message_channel": true
                    }, 3419], ["UriNeedRawQuerySVConfig", [], {
                        "uris": ["dms.netmng.com", "doubleclick.net", "r.msn.com", "watchit.sky.com", "graphite.instagram.com", "www.kfc.co.th", "learn.pantheon.io", "www.landmarkshops.in", "www.ncl.com", "s0.wp.com", "www.tatacliq.com", "bs.serving-sys.com", "kohls.com", "lazada.co.th", "xg4ken.com", "technopark.ru", "officedepot.com.mx", "bestbuy.com.mx", "booking.com", "nibio.no", "myworkdayjobs.com", "united-united.com", "gcc.gnu.org"]
                    }, 3871], ["RunGatingConfig", [], {
                        "shouldUseBrowserUnload": true
                    }, 3914], ["InitialCookieConsent", [], {
                        "deferCookies": false,
                        "initialConsent": [1, 2],
                        "noCookies": false,
                        "shouldShowCookieBanner": false,
                        "shouldWaitForDeferredDatrCookie": false,
                        "optedInIntegrations": ["adobe_marketo_rest_api", "apple_pay", "brightedge", "chili_piper_api", "cloudfront_cdn", "giphy_api", "giphy_media", "google_ads_pixel_frame_legacy", "google_ads_pixel_img_legacy", "google_ads_pixel_legacy", "google_ads_remarketing_tag", "google_ads_services", "google_analytics_4_tag", "google_apis", "google_cached_img", "google_double_click_loading", "google_double_click_redirecting", "google_double_click_uri_connect", "google_double_click_uri_frame", "google_double_click_uri_img", "google_fonts", "google_fonts_font", "google_img", "google_maps", "google_paid_ads_frame", "google_paid_ads_img", "google_tag", "google_translate", "google_universal_analytics_legacy", "google_universal_analytics_legacy_img", "google_universal_analytics_legacy_script", "google_uri_frame", "google_uri_script", "jio", "linkedin_insight", "linkedin_insight_img", "mapbox_maps_api", "medallia_digital_experience_analytics", "nytimes_oembed", "reachtheworld_s3", "salesforce_mcp_beacon", "salesforce_miaw", "soundcloud_oembed", "spotify_oembed", "spreaker_oembed", "ted_oembed", "tenor_api", "tenor_images", "tenor_media", "tiktok_oembed", "twitter_analytics_pixel", "twitter_analytics_pixel_img", "twitter_legacy_embed", "vimeo_oembed", "youtube_embed", "youtube_oembed", "kochava", "advertiser_hosted_pixel", "airbus_sat", "amazon_media", "apps_for_office", "arkose_captcha", "aspnet_cdn", "autodesk_fusion", "bing_maps", "bing_widget", "boku_wallet", "bootstrap", "box", "cardinal_centinel_api", "chromecast_extensions", "cloudflare_cdnjs", "cloudflare_datatables", "cloudflare_relay", "conversions_api_gateway", "demandbase_api", "digitalglobe_maps_api", "dlocal", "dropbox", "esri_sat", "fastly_relay", "gmg_pulse_embed_iframe", "google_ads_conversions_tag", "google_cast_receiver", "google_drive", "google_fonts_legacy", "google_hosted_libraries", "google_oauth_api", "google_oauth_api_v2", "google_recaptcha", "here_map_ext", "hive_streaming_video", "iproov", "isptoolbox", "jquery", "js_delivr", "kbank", "mastercard_click_to_pay", "mathjax", "meshy", "metacdn", "microsoft_excel", "microsoft_office_addin", "microsoft_onedrive", "microsoft_speech", "microsoft_teams", "mmi_tiles", "oculus", "open_street_map", "paypal_billing_agreement", "paypal_fastlane_sdk", "paypal_oauth_api", "payu", "payu_india", "plaid", "platformized_adyen_checkout", "plotly", "pydata", "razorpay", "recruitics", "rstudio", "salesforce_lighting", "shopify_app_bridge", "stripe", "team_center", "tripshot", "trustly_direct_debit_ach", "turbo_gala", "twilio_voice", "unifier", "unpkg", "unsplash_api", "unsplash_image_loading", "vega", "whatsapp_arkose_captcha", "yoti_api", "youtube_oembed_api"],
                        "hasGranularThirdPartyCookieConsent": true,
                        "exemptedIntegrations": ["advertiser_hosted_pixel", "airbus_sat", "amazon_media", "apps_for_office", "arkose_captcha", "aspnet_cdn", "autodesk_fusion", "bing_maps", "bing_widget", "boku_wallet", "bootstrap", "box", "cardinal_centinel_api", "chromecast_extensions", "cloudflare_cdnjs", "cloudflare_datatables", "cloudflare_relay", "conversions_api_gateway", "demandbase_api", "digitalglobe_maps_api", "dlocal", "dropbox", "esri_sat", "fastly_relay", "gmg_pulse_embed_iframe", "google_ads_conversions_tag", "google_cast_receiver", "google_drive", "google_fonts_legacy", "google_hosted_libraries", "google_oauth_api", "google_oauth_api_v2", "google_recaptcha", "here_map_ext", "hive_streaming_video", "iproov", "isptoolbox", "jquery", "js_delivr", "kbank", "mastercard_click_to_pay", "mathjax", "meshy", "metacdn", "microsoft_excel", "microsoft_office_addin", "microsoft_onedrive", "microsoft_speech", "microsoft_teams", "mmi_tiles", "oculus", "open_street_map", "paypal_billing_agreement", "paypal_fastlane_sdk", "paypal_oauth_api", "payu", "payu_india", "plaid", "platformized_adyen_checkout", "plotly", "pydata", "razorpay", "recruitics", "rstudio", "salesforce_lighting", "shopify_app_bridge", "stripe", "team_center", "tripshot", "trustly_direct_debit_ach", "turbo_gala", "twilio_voice", "unifier", "unpkg", "unsplash_api", "unsplash_image_loading", "vega", "whatsapp_arkose_captcha", "yoti_api", "youtube_oembed_api"],
                        "nonBlockingBannerPage": true,
                        "consentRequiredForMetaPixel": false
                    }, 4328], ["WebConnectionClassServerGuess", [], {
                        "connectionClass": "GOOD"
                    }, 4705], ["BootloaderEndpointConfig", [], {
                        "retryEnabled": false,
                        "debugNoBatching": false,
                        "maxBatchSize": -1,
                        "endpointURI": "https:\/\/m.facebook.com\/ajax\/bootloader-endpoint\/",
                        "adsManagerReadRegions": false
                    }, 5094], ["cr:310", ["MRun"], {
                        "__rc": ["MRun", null]
                    }, -1], ["cr:8958", ["MFBJSON"], {
                        "__rc": ["MFBJSON", null]
                    }, -1], ["ServerTimeData", [], {
                        "serverTime": 1773148701301,
                        "timeOfRequestStart": 1773148700899,
                        "timeOfResponseStart": 1773148700899
                    }, 5943], ["SiteData", [], {
                        "server_revision": 1034851462,
                        "client_revision": 1034851462,
                        "push_phase": "C3",
                        "pkg_cohort": "BP:mtouch_pkg",
                        "haste_session": "20522.BP:mtouch_pkg.2.0...0",
                        "pr": 3,
                        "manifest_base_uri": "https:\/\/static.xx.fbcdn.net",
                        "manifest_origin": null,
                        "manifest_version_prefix": null,
                        "be_one_ahead": false,
                        "is_rtl": false,
                        "is_experimental_tier": false,
                        "is_jit_warmed_up": true,
                        "hsi": "7615615677563578745",
                        "semr_host_bucket": "6",
                        "bl_hash_version": 2,
                        "comet_env": 0,
                        "wbloks_env": false,
                        "ef_page": null,
                        "compose_bootloads": false,
                        "spin": 0,
                        "__spin_r": 1034851462,
                        "__spin_b": "trunk",
                        "__spin_t": 1773148700,
                        "is_legacy_msite": true,
                        "force_touch": true,
                        "vip": "157.240.13.35"
                    }, 317], ["MRequestConfig", [], {
                        "dtsg": {
                            "token": "NAfvM9kVr5I1tAYIwrCtXdbjcKYt2RHZL7Bm-OrjH2HHcS-ifr7rGQQ:50:1769352215",
                            "valid_for": 86400,
                            "expire": 1773235101
                        },
                        "dtsg_ag": {
                            "token": "Ad1yR-9j5wLUvwD4yeLPJHshsbP1Wi66oAmQiwlx3GEA7fRj:50:1769352215",
                            "valid_for": 604800,
                            "expire": 1773753501
                        },
                        "checkResponseOrigin": true,
                        "checkResponseToken": true,
                        "cleanFinishedRequest": false,
                        "cleanFinishedPrefetchRequests": true,
                        "ajaxResponseToken": {
                            "secret": "7X-9CAGs7k25RC89zSVlbZUtAoIKHjRu",
                            "encrypted": "AYwWwIDXkwfuC-1G2jRgiENmiRZYgKoAjOojxwz9j52EBJEEpj-F-twgC7UV2Y9k1eR5cF63TswncxEI5vf_K-zsVLLAEon3OF0"
                        }
                    }, 51], ["AnalyticsCoreData", [], {
                        "device_id": "$^|ARtNmbK5gQQUoSjc-mGFang73UnnHV2YHLwmRl0cb7G9Y4dcyv5-624VG90SZSH3InaKcBzmxaeYrCILjjQMUUEWaJaiJEM|fd.ARssWL2up3MARK0iLSqp_xxmptzjqvEgulcD8CuNUTRJpgneF9GX_wD-4IB-MlUlQ_Krc7OL72Y5LXXQ-OOg9USj",
                        "app_id": "412378670482",
                        "app_version": "1034.851.462.0 (1034851462)",
                        "enable_bladerunner": true,
                        "enable_ack": true,
                        "push_phase": "C3",
                        "enable_observer": false,
                        "enable_cmcd_observer": false,
                        "enable_dataloss_timer": false,
                        "enable_fallback_for_br": true,
                        "queue_activation_experiment": false,
                        "max_delay_br_queue": 60000,
                        "max_delay_br_queue_immediate": 3,
                        "max_delay_br_init_not_complete": 3000,
                        "consents": {},
                        "app_universe": 1,
                        "br_stateful_migration_on": true,
                        "enable_non_fb_br_stateless_by_default": false,
                        "use_falco_as_mutex_key": false,
                        "is_intern": false,
                        "identity": {
                            "fbIdentity": {
                                "actorId": "100027371148291",
                                "accountId": "100027371148291"
                            },
                            "claim": "hmac_ttl.1773148700.AR1QlZABwhCQLqOSfGK5-Kgxopin8BDmuy5ynjOawmbuwJdk"
                        },
                        "state_for_br": "fase.ARuZowLvZOxDoPdcwPAMUv51-S_jx4MtWuBV4D_qyl1Cxppf6z5dQ1ZUaXqlUsCScXi5rgrdrrEmsxDqSLI-SbLMwBMQNMSVYE0V412luuv7U9ki_EOhg3XAhX12iA64nY1x3QIm4SyVr6UwGZ1kzgLgzeScEK3aZ0FIUOvmP8yI0x8jWieUJZmZy78SkhN07zRri0sWTpeeelsjPYIwA3V1yE6dDdnYIgRqSD5kLOTpw4b5FIycUFKS845Je59HPqJsWTohzBKH7BnlJa-m7v1AAcFpyENPs-E0CMb-PFfwHC4Ukuj7qp6jPUs_paY4Qly0pm670nwOo_4S8NEJLwl1klUkni2IlaOd395i5HqKTrGkf9FFGoKAZ5nFmPCMG6z-OLNhB56qElQCGM_QvlEe1q4EvmP6kVh6lx28FxmJDRUzwgyGcLwBehR_Fq_LCoYMQZzgKLZEztNQym1G6N0EjWzBoTYt5AMothVyJE5SHZ1kjK52XlwBll6KYxeZ6JqYvlBKb_hkiN54JQQj0AsGQ0Yq7RhYngVMbHb1xidd_tG2zJibGrZ8U0Ehl8oOKCZn4WgvLH5ZPoLlMTEJFPqhAIAvSXZlpuWLQtVjdc2dlSC9Dx6j-1TQZEfHDHfJ-boHqH7rlrDDKj6ePdJL8zyPGtjLa1oE-QROioGc3B10bSmMlmT5GM0ozlR6IxDsQQetTvgibh04koHdPwb7j39sHbwSbXF44EJL8XUHgR0N6WEWQTt4vN6dwvaybynXGJIxnPuRkCccg8Vf-4pmQjx0aG2iTVDIEJTwo6HiXOumDkAhlUgcGPHQG1qbuFKWpGex4lMELWguyifdFIUn1oeAGtaAIL2NtIAOuFWk2w3ZZB9qQSa9FiMRdqqN2HiDE8V-Q-qXKEAQc5YBUAZtMy30Xz8-TFG0bX7ueGqknvgua8pDJACS4n38kcbs-L-i8ecWLjNZHqdHV3GK6F-Lhpkse7AsU0S1XM_wAMBp_hBBQzTGhhMLIIaxngFpRhXVRwc--3Q6LVRiFrwWoz-_vel32lk4YuAXrsYoH2QBckMpmkK1QaNyDEKdtE8Db4Nf5j1KADtSLOio584ytuJc5s8YsoGzZHNa93S_b5BAHGPGKJYZDoNd3s_cfxXbWkJMn9JpC1hmNmkoaJFMFH5-3ePSYyu4RrTguxgeQKyM5ZKEBtlgvHzCGmVmAnE4pvnZdwcpYV3mLCqIQGQ-JyX5ES9NDgszGc6dbnprUVln3LLleQhhYSTOAsq2GQlpboygBlQHDxw3GSKboGmX3NTcvMZbMDdXF3t6aOfkrNtoZ5zLoz9NCaGtqfdxYNJcQJf-f5MH0n4mC_MojGBNqvtikmSSk9JkQajqamMP7lxiSMtyFSq1MLc9idNo-r0Ij6soRAQ26vYtw-AGZiUYNSoYu9CR0woXy_QDJc7Hb-j5K-6cfAqkS0EMk2Pa0uh_t-U6Gp-sXrvF9LlXf4-i9D3jWw5-r398JZZ9cRnmiMliEM5mbmisBemoVBmB31n6Nq1vghzVSZ4uk8345OuxjhjQ2c2gaarvEBnMFOtP5T_pF2EjBvjWQMVkkGntYn_SyZ81X_9bnicFAOth4PZj6V9SV5-_bw5ge3-Pom-CVjSxqQWAoJ8liSUBVd_cdJLHXYFFCzI7VVCmweuVEHOR2-ZtqgMy_GitUyVfQffEzHjW4SX9GG-cl5o3_nC2FdWmWBUTxavPTrj2cKYSQXxQQE7iikEIx7WjtpU1A0JvhlHbfU7_cb2UgcHWhm7SSWpSC6BWqqPQSPVMYqK2y_xeI_mdm6e-DfKKoOnnr09AlNuiTyp7Gtc-456IXZ853d6P4ClEYP6qvgwXDrJgWTSwIXLFswomSjxQ8f7jRZVNF_8mwgvMpWAoRTvPC8noLQCEU0foyvy4n4lDcGUygKgDxPurDs6678jnxUrXHGEGDndli3EbOjJJlAwJmwne8TlYB1GCmWHz6nluENkZ3DlZv3JUqEA7_ck5sHnz7wGT9o4MsIx73IlBB-_wiLe-ShgWoKOiLd4GkdGBrc-apu0MEUOT11aBUSdzGUoKMNIuGg5pHiNO-AvlCkADNIXwmU1ecoSIWSw8z1B7N6w9b5R6e82iylqlzJYZ__Udd3rhJmy0fDhiD5IXf47wX5b5593P8Lc3eP0g5P54nJyvwZlozhWBbEckE0tLd4lWGQuQWxIQuHqJ_FPGu40iV3tdupuJGIAAnzAX3eqjCKAmrjpUmEKNBoDobc6I6P-z9s4ta8w8VkHTdXKJ5taxdHElb1RR9-VfrlqUI8ZPDidEIoXCcbAiJ1tRdMUzzuz6uP9rlgG4nS0ms9IYT60vNwhdwos2iHPiDVUz5u2GhSMAkj__ZgtIxmiqyPZ8ciiwJygjX4lGcHYACluMI_nzPkSnruyVgghCafLR-2xo5Tlsow87mrQaGzJ9cK7BSU5UYMQl-mDSJb-Hkbr4nPerOiXdXrr7Y-PtofejOHs37CFP4pGl_nKwtLRygmAQz3ruxI36SiZaCEGRXx7x2BOqoLgjFDMrfZSxL-SSdAFJ6N4bFjfbdCvKlounV8KdWDz_RQselY_HWqapUd92tRsgbPbRmHIx_qr-lO79N3WJEuONivJylYy5DptxSznhChmz5Vu0BqGnGep1-i6Fp5GiX4OOn29qeMxavO1JWJPDwhMdbzJ_CfZ1ZrK0ZmTcLhDJbRdKjoJhoKmG2ZznQJtZoLuAwbVigOXxE9XrQvnqCmxMNKnDTMyIldSoW3e1vuKsHfOa4yF-uzjSNOu8Tzm6TT-jxHUbINUFP9clxjjIqNkqhlDJHGzyOf8h4Oe0D_ZBhGoKicaamlkFGLCtzPz9GmKm0LNskHUrI1JTAR63Cn84wgAiPSxJhIHZXQae5VlpYhWuHmL0uV8n-kiNXTjgPpvbpJXGZ7yEUSeRlzwdCWUcpr7-fxVanMtg5BSMK4HiKq57bEnXqHHMeFqtbvLc3ig1zXILRJKJ4aWT7wHcp9PXaSLkFDk960JPyZirX3M-DIWZ0ZbU5zQtmRecfP5o-TsYRV9_w2NqWU_j7BW8p9h6uDlRUSDE3ZVhAfexDHTnnZTROJXppUKAIriu-Ul5dNnDLJWlc1Wc9Tnej1RnOpr7LzeDHwh5jPrW6RzkaGqd93Wv8pnlzC1wojSX2RWA_pZ5eVzVwnBxMBsDV8x4ENFRsogU5iJP_65lISbn-IggcEE2GEeh_S-r1ggePe3d-nC4xWDlH-G5TduLhpt05Rc4oa2-JNVQZbzDWIzKCZHO3PGYqHQAentrA10gJYvb-Dx6xX1PeijGdEEfi4edPloYmdR9LW4nkAReABengxhYJQz_vripf2JEoEBbmlVxhXwMaBsrb9CtOurXeinil56i2KU7Au9cSGmxUPDmKdJ94BNja4lRlr2DsFdymJKx9b71qy_5h8C2wziNdLo9OAyfwONxoDFFmrAPT1LMRAfn-uVf4PmM1vbRnfa2LPD4C6Bt_GpiDP0pY6d7WJmh8pmWZ24kG8sp7pf5nF3La-MsR0Z8_3_0AkPlbF5Wi7V8QpWxBsrXuOk3P7jnxvtsd07hBWGfg-KdnqPQg5QTdxx0e6N7i68VZEXXQpLm8Dh8YEQne7GdpkSZp06s5R3BfBobaz0Hxz2FSpE6VEYwVVXha6OqLIgiyTprB2ENt-r2EfqSDs4d-qjOcx1b1pH-MOHk7_EP3kVkiAuisz1v1NLC3ftf4ZhM9n5oRrw4X9Rdxsnf7ajx2rzhiTSiEqUBTYCyO0WBWuCAyhFIbNEOR1su_u6tkmFJMpzqg9vt0yB_vgC2X465fKpCnV8Wo5by2G82Dh2XjzHJWEksvhHPxzLCHkqv2P0CC6ewR0KHFHkwik4mDrf2L0_FLFOtJx9RyEbObl_ibnWiQf0SDM33AUHn6KJHYKvhUpIVSL7nfbWuhxSRYY-3ci89gmgJ-oBttc47Dh25BIUeBygQwxWZYQyVnz6TTk2NbZiFJTiVpzaVdcNqv--3omduTKihNx43P0D6NED8qkl-G-wrlFYanMyb_TebOTsN8fK978SO2rYEa-rlWFPiGmEUxpJMkxvIA-uiM9-uGV-GrQzITMuQFekfjI57vIUr6ZZD1veqPFTqFC_sfIUbGjOocafKQ3eXIzaaZkKw5AGS8rcQZ7saGXr5XTU3soCCRG0rxfcfjliPXK-HNGpKbN2fD6o-c6jBjqjr7j0GuLxxwmoGDmvGJjTPwKYADuKFU4VtCsufJpDqBIPxPcRdlJvCNN7z5ZuP31iyhdNo1lk6wNJermS82i75ct_rK5wisdnnHs9SLm0ICl8aH4A-_OmvjuZ8d97C25JuUIZapCGg83Cn2DXhrnNSj12MKGWP_Ik-F4geGhQ2cHP_jYlRi5rBCuFdWnJkO6fcBvJW4PaOcsGXVV9pfPyXtyHW6hTa-nnPsWfV6OcPg4wamCEblL72sJaoWbdLOJ0j3uRuQLs-IrYDL0hfx1tHH7IyRD9WbLMIglkxI69rdZDWmIqQgLyq-Ew_r1rYV0tNQNRcyaBwagCPQ2-d5JCY80xSlSpd3Gc5OxNCt7YD_aSQ5Hx1Ehaj14TRxJUSUH3BZuPerTAK5K8E9lA7el2w-9Quzia0FJuN87rtIRPeKppE7uWx-X3YGFKW8JNNVPIXcBdZzsU2atycZ3DcSSEVG_0TF8BdkAK6RuoTzBM8xw7GIgZDM-EpEWpAWoNg4WHuqZnIuOKO9uyAJuVzkwpfqDsFbvODY1dEHNmMsO4AAnbacqkaVfCj-mrEPTOgm4-1lydU-18fuMVqI8FH0rTUr5eN_XC6X9aayXXzlu1wGqiVi9ycL_NIpbn5VilkjP51dn6DwO9NK2XjWyLGwn7nX0b2Dwl78NvJdV_Rir3gtAfAFXAEQNVnXHCv3rI50m0YJKR3WRf5W1q4FeTO-7Yb4OIPPV3RzmrvXH_RYS5EyID2Bda62M52MbHDVYvAQ2NPYu60NLfSSuZQWuYpXQdOgnx4pNKoFkQn1JJ9LbVBvhFE520qrZedDt0JYrHn4JV3CLyYEjRx9zzZ5Ici_ipbHPPs_TJmvQzd1raj0vmKWZC23wsKdlS-hw",
                        "stateful_events_list_for_br": ["comet_metrics_viewable_impression", "web_time_spent_bit_array", "web_time_spent_navigation", "cloud_gaming_events", "cloud_gaming_session_event"]
                    }, 5237], ["GetAsyncParamsExtraData", [], {
                        "extra_data": {}
                    }, 7511]],
                    "require": [["MPrelude"], ["ODS"], ["RequireDeferredReference", "unblock", [], [["ODS"], "sd"]], ["RequireDeferredReference", "unblock", [], [["ODS"], "css"]]]
                });
            });
        </script>
        <script nonce="GDUaeE4h">
            now_inl = (function() {
                var p = window.performance;
                return p && p.now && p.timing && p.timing.navigationStart ? function() {
                    return p.now() + p.timing.navigationStart
                }
                : function() {
                    return new Date().getTime()
                }
                ;
            }
            )();
            window.__bigPipeFR = now_inl();
        </script>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/yA/l/0,cross/SWCXbp2TArq.css?_nc_eui2=AeGP1tJSrj4Q2SEgqA9mvr43Z2p0vginQKtnanS-CKdAq-adTX-6FskKWa-Ed0dmHsdtc6MRYEUVj8M0-HmEhNzi" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/yC/l/0,cross/prLHKxegjAh.css?_nc_eui2=AeHm0Jzgfpa0t4Bd18oi0XnqjoX_9xPhObWOhf_3E-E5tXZhiYkE2jLKyywFaN-6vRqX9KlaRLHfkU6xPi531U8v" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/yl/l/0,cross/N9XGsEkrqPN.css?_nc_eui2=AeHVFrjnqrXwghzQLET-RzOizyyoM_QLaH3PLKgz9AtofRhuB2Gf7mb2FEnN3fl1fQznx4e5USV6B2plL64N3vFX" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/yb/l/0,cross/7BjVYxUqHbK.css?_nc_eui2=AeE87kleKYdvqFskXzBUuy4BBzNKCEzi3GMHM0oITOLcYxNOtQKYXcsGQf3gQRIQra6vmhNGqSsaRzA4qyUt34Y0" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/yZ/l/0,cross/3VJWSz8UF52.css?_nc_eui2=AeExYfrqm_LQvwlwFx1R0PREf_VNwIL2EmR_9U3AgvYSZJ1RcVcdTiDr8q4CjA2KTrWcuPdwFzOw8mQPXPkmujRj" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/M7Eie-RKPFe.js?_nc_eui2=AeFbMpurYQEyDCx5M9iqxLuwbuaPmfhm719u5o-Z-GbvX0cAM-wGodl6xo1jmyrb331knBBuH_R55iO4xuuvMf9O" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4/yH/r/CGojlpa5Ypv.js?_nc_eui2=AeEuv7UY8FDLYlYP7Y9oQP1aS1P0s6IdGg1LU_Szoh0aDaLZZTCR0jC7H8AAvR9bA4RHtewNV5KgmyD-RPqI27KQ" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/y2/l/0,cross/G8SXblP5m5F.css?_nc_eui2=AeGvBywIVp57C-XCs7ozvmTxgQKcJmrRmkyBApwmatGaTPqhn0G-JPxA83ttzKUd1nNZieRumwuxQQbKrxnyme5f" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/3p5uUpd6N5a.js?_nc_eui2=AeFoOX1SCZgSYOvM5vtzjKn4FKTcIjZXD4gUpNwiNlcPiGsAyPuSgZyzQC7sUxmTJexXaFJi9F1jr_DIMEF9CBkR" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4/ye/r/JbnzZ5D8B16.js?_nc_eui2=AeEaRE7F5yQwuSDwegnS0plqsOeGI67CmwGw54YjrsKbAVBIg7k_tEeoJhaxx9HmB1QKH5oYwSPip2-09XICNpI1" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v5/yO/l/0,cross/S6VKuAula38.css?_nc_eui2=AeH4obqpyxIkZUANjL9er8rjz8fMlAxaPcbPx8yUDFo9xtYkEdJuuzbHiFhXfDqPHrGlOonD_AiU3Om5XDe8vo5X" as="style" crossorigin="anonymous"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4iczx4/ye/l/vi_VN-j/t59sumwTONO.js?_nc_eui2=AeEQyQEDbY6t2a-o0jih7YXnc3eCkXdKZFVzd4KRd0pkVW_gCDH_wBPjW8y1TckiAQpjEBRb0DgyfwNYVQ-E1AkT" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/dBucjCMxnfZ.js?_nc_eui2=AeEcpTtFqfCc39XGGOhkqWLSi7a7YMrtv_yLtrtgyu2__FLrM2lPWVRsHF-ed9S6kkIHQuSlISLjp6TV91JA_F_w" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <link rel="preload" href="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/8wypiAW_bfk.js?_nc_eui2=AeEJPWt5N0cZMFY2AoQT_1bhjlT2kpNDmQKOVPaSk0OZAv3zMsCpp2k43E8IG7RsbASEeR2TQyUn0ySoBbuXh5po" as="script" crossorigin="anonymous" nonce="GDUaeE4h"/>
        <script nonce="GDUaeE4h">
            window.__bigPipeCtor = now_inl();
            requireLazy(["BigPipe"], function(BigPipe) {
                define("__bigPipe", [], window.bigPipe = new BigPipe({
                    "forceFinish": true,
                    "config": {
                        "flush_pagelets_asap": true,
                        "dispatch_pagelet_replayable_actions": false
                    }
                }));
            });
        </script>
        <script nonce="GDUaeE4h">
            (function() {
                var n = now_inl();
                requireLazy(["__bigPipe"], function(bigPipe) {
                    bigPipe.beforePageletArrive("first_response", n);
                })
            }
            )();
        </script>
        <script nonce="GDUaeE4h">
            requireLazy(["__bigPipe"], (function(bigPipe) {
                bigPipe.onPageletArrive({
                    displayResources: ["rHI9PUR", "iFYxqSq", "CsX+gXJ", "fEQZi8x", "236A0bD", "SfH6S8P", "Tvy4lR4", "Gd+1NvE", "ZaEr9W1", "RpLCDYo", "jCjSDgF", "2fZVJd1", "dbjOx85", "R5w1rCJ"],
                    id: "first_response",
                    phase: 0,
                    last_in_phase: true,
                    tti_phase: 0,
                    all_phases: [63],
                    jsmods: {
                        define: [["cr:6943", ["MEventListenerImplForCacheStorage"], {
                            __rc: ["MEventListenerImplForCacheStorage", null]
                        }, -1], ["cr:7383", ["BanzaiBase"], {
                            __rc: ["BanzaiBase", null]
                        }, -1], ["cr:7730", ["MGetFbtResult"], {
                            __rc: ["MGetFbtResult", null]
                        }, -1], ["cr:6016", ["NavigationMetricsMobile"], {
                            __rc: ["NavigationMetricsMobile", null]
                        }, -1], ["cr:7387", ["requestIdleCallbackBlue"], {
                            __rc: ["requestIdleCallbackBlue", null]
                        }, -1], ["cr:2915", [], {
                            __rc: [null, null]
                        }, -1], ["cr:15957", [], {
                            __rc: [null, null]
                        }, -1], ["cr:27524", [], {
                            __rc: [null, null]
                        }, -1], ["cr:1108857", [], {
                            __rc: [null, null]
                        }, -1], ["cr:1294158", ["React.classic"], {
                            __rc: ["React.classic", null]
                        }, -1], ["cr:5695", ["MEventListener"], {
                            __rc: ["MEventListener", null]
                        }, -1], ["cr:9985", ["performanceAbsoluteNow"], {
                            __rc: ["performanceAbsoluteNow", null]
                        }, -1], ["cr:7736", ["MFBLynxLogging"], {
                            __rc: ["MFBLynxLogging", null]
                        }, -1], ["cr:7384", ["cancelIdleCallbackBlue"], {
                            __rc: ["cancelIdleCallbackBlue", null]
                        }, -1], ["cr:7388", ["setIntervalBlue"], {
                            __rc: ["setIntervalBlue", null]
                        }, -1], ["cr:8906", ["goURIMobile"], {
                            __rc: ["goURIMobile", null]
                        }, -1], ["cr:9989", ["Banzai"], {
                            __rc: ["Banzai", null]
                        }, -1], ["MWebStorageMonsterWhiteList", [], {
                            whitelist: ["^CacheStorageVersion$", "^RSTData$", "^RTC_VIDEO_INPUT$", "^RTC_AUDIO_INPUT$", "^RTC_AUDIO_OUTPUT$", "^RTC_IS_AUDIO_ONLY$", "^RTC_NOISE_SUPPRESSION$", "^RTC_LOBBY_MUTE_STATE$", "^Session$", "^_oz_", "^_video_bandwidthEstimate$", "^Banzai$", "^bz", "^banzai\\:last_storage_flush$", "^falco_queue_", "^mutex", "^msys", "^Bandicoot\\:", "^imp_seq_num$", "^qe_switcher_nub_selection$", "^TabId$", "^sp_pi$", "^\\:userchooser\\:osessusers$", "^\\:userchooser\\:settings$", "^brands\\:console\\:config$", "^consoleEnabled$", "^__fb_messenger_desktop_presence_info$", "^vc_", "^_showMDevConsole$", "^ga_client_id$", "^ga4_client_id$", "^_mswam_$", "^am_recently_used_filters\\:", "^am_image_size_cache$", "^ickt$", "^hb_timestamp$", "^signal_flush_timestamp$", "^__MWCMAutoJoinNotifNuxBanner\\.showBanner__$", "^last_fast_refresh$", "^_ctv_access_token$", "^_ctv_android_device_info$", "^_ctv_cast_access_token$", "^_ctv_casting_remote$", "^_ctv_console_log_viewer_on_full_screen_player_enabled$", "^_ctv_cookie_consent_displayed$", "^_ctv_debug_redux_logger_enabled$", "^_ctv_deviceUniqueIDFallback$", "^_ctv_gaming_consent_displayed$", "^_ctv_installed_app_player_debug_overlay_enabled$", "^_ctv_last_load_time_ms$", "^_ctv_locale$", "^_ctv_logged_out_constraints_sessions_count$", "^_ctv_reloadedDueToStaleApp$", "^_ctv_reloadedDueToUnrecoverableError$", "^_ctv_search_terms$", "^_ctv_tv_experiments$", "^_ctv_usedCloseAppFallback$", "^_ctv_user_sessions$", "^_ctv_video_debug_overlay_enabled$", "^_ctv_debug_rampart_server_number$", "^fx_did$", "^wa_lang_banner_dismissed$", "^bulletin_article_reader_onload_dialog_seen$", "^bulletin_session_attributes$", "^md_survey$", "^support_guest_chat$", "^comet_is_recent_profile_switch$", "^comet_console_position$", "^mw_exchange_vm$", "^has_seen_email_login_toast$", "^cs_chat_support_user$", "^comet_ai_hts_chat_support_user$", "^comet_ai_mobile_hts_chat_support_user$", "^NFT_DEVICE_KEY_PRIVATE_V1$", "^NFT_DEVICE_KEY_PUBLIC_V1$", "^show_wa_auth_button$", "^BusinessInbox\\:sortMethod$", "^LeadsCenter\\:ViewType$", "^BizWebInsightsLeadsCenterHeaderGuidanceCard\\:LastClosedTime$", "^BizWebInsightsOutcomesSectionLineChartBreakdownUpsellGuidanceCard\\:LastClosedTime$", "^Routing\\:url\\:AdsTALRouting$", "^BizWebDirectResponseAdsBannerView$", "^firefly_auth_tokens$", "^BizWebStoryInsightsOptInBannerView$", "^fair_ai_demos_rid$", "^interact_explorer_user_rid$", "^videoseal_tos_accepted$", "^videoseal_user_rid$", "^sam3_user_rid$", "^sam_tos_accepted$", "^seen_password_entry_auto_prompt$", "^trusted_devices_storage_version$", "^mp_dialog_impression$", "^comet_ai_support_conversation_feedback$", "^fb_warning_labels_enforcement_cache$", "^leads_center_education_nux_show_later_timestamp$", "^catalog_api_banner_dismissed$"]
                        }, 254], ["UserAgentData", [], {
                            browserArchitecture: "32",
                            browserFullVersion: "18.5",
                            browserMinorVersion: 5,
                            browserName: "Mobile Safari",
                            browserVersion: 18,
                            deviceName: "iPhone",
                            engineName: "WebKit",
                            engineVersion: "605.1.15",
                            platformArchitecture: "32",
                            platformName: "iOS",
                            platformVersion: "18",
                            platformFullVersion: "18.5"
                        }, 527], ["IntlVariationHoldout", [], {
                            disable_variation: false
                        }, 6533], ["IntlNumberTypeProps", ["IntlCLDRNumberType01"], {
                            module: {
                                __m: "IntlCLDRNumberType01"
                            }
                        }, 7027], ["IntlPhonologicalRules", [], {
                            meta: {},
                            patterns: {}
                        }, 1496], ["IntlViewerContext", [], {
                            GENDER: 1,
                            regionalLocale: null
                        }, 772], ["MJSEnvironment", [], {
                            IS_APPLE_WEBKIT_IOS: true,
                            IS_TABLET: false,
                            IS_ANDROID: false,
                            IS_CHROME: false,
                            IS_FIREFOX: false,
                            IS_WINDOWS_PHONE: false,
                            IS_SAMSUNG_DEVICE: false,
                            OS_VERSION: 18.5,
                            PIXEL_RATIO: 3,
                            BROWSER_NAME: "Mobile Safari"
                        }, 46], ["NumberFormatConfig", [], {
                            decimalSeparator: ",",
                            numberDelimiter: ".",
                            minDigitsForThousandsSeparator: 4,
                            standardDecimalPatternInfo: {
                                primaryGroupSize: 3,
                                secondaryGroupSize: 3
                            },
                            numberingSystemData: null
                        }, 54], ["MLoadingIndicatorSigils", [], {
                            ANIMATE: "m-loading-indicator-animate",
                            ROOT: "m-loading-indicator-root"
                        }, 279], ["CookiePrivacySandboxConfig", [], {
                            is_affected_by_samesite_lax: false
                        }, 7723], ["CookieDomain", [], {
                            domain: "facebook.com"
                        }, 6421], ["CookieCoreConfig", [], {
                            alsfid: {},
                            c_user: {
                                t: 31536000
                            },
                            cppo: {
                                t: 86400
                            },
                            dpr: {
                                t: 604800
                            },
                            fbl_st: {
                                t: 31536000
                            },
                            hckd: {},
                            i_user: {
                                t: 31536000
                            },
                            locale: {
                                t: 604800
                            },
                            m_ls: {
                                t: 34560000
                            },
                            m_pixel_ratio: {
                                t: 604800
                            },
                            noscript: {},
                            presence: {
                                t: 2592000
                            },
                            sfau: {},
                            usida: {},
                            vpd: {
                                t: 5184000
                            },
                            wd: {
                                t: 604800
                            },
                            wl_cbv: {
                                t: 7776000
                            },
                            "x-referer": {},
                            "x-src": {
                                t: 1
                            }
                        }, 2104], ["CookieCoreLoggingConfig", [], {
                            maximumIgnorableStallMs: 16.67,
                            sampleRate: 9.7e-5,
                            sampleRateClassic: 1.0e-10,
                            sampleRateFastStale: 1.0e-8
                        }, 3401], ["MemoryLoggerConfigWebSitevarConfig", [], {
                            measurement_interval_minutes: 5,
                            quick_measurement_interval_seconds: 3,
                            jest_e2e_measurement_interval_seconds: 15,
                            app_specific_config: [{
                                app_id: 307542933446158,
                                description: "intern site in general",
                                measurement_interval_minutes: 1
                            }, {
                                app_id: 1358015658191005,
                                description: "Meta.ai site",
                                measurement_interval_minutes: 2
                            }]
                        }, 5573], ["CurrentEnvironment", [], {
                            facebookdotcom: true,
                            messengerdotcom: false,
                            workplacedotcom: false,
                            instagramdotcom: false,
                            workdotmetadotcom: false,
                            horizondotmetadotcom: false,
                            developersdotmetadotcom: false,
                            devicemanagerdotmetadotcom: false
                        }, 827], ["CurrentCommunityInitialData", [], {}, 490], ["FWLoader", [], {}, 278], ["ZeroCategoryHeader", [], {}, 1127], ["ZeroRewriteRules", [], {
                            rewrite_rules: {},
                            whitelist: {
                                "/hr/r": 1,
                                "/hr/p": 1,
                                "/zero/unsupported_browser/": 1,
                                "/zero/policy/optin": 1,
                                "/zero/optin/write/": 1,
                                "/zero/optin/legal/": 1,
                                "/zero/optin/free/": 1,
                                "/about/privacy/": 1,
                                "/about/privacy/update/": 1,
                                "/privacy/explanation/": 1,
                                "/zero/toggle/welcome/": 1,
                                "/zero/toggle/nux/": 1,
                                "/zero/toggle/settings/": 1,
                                "/fup/interstitial/": 1,
                                "/work/landing": 1,
                                "/work/login/": 1,
                                "/work/email/": 1,
                                "/ai.php": 1,
                                "/js_dialog_resources/dialog_descriptions_android.json": 0,
                                "/connect/jsdialog/MPlatformAppInvitesJSDialog/": 0,
                                "/connect/jsdialog/MPlatformOAuthShimJSDialog/": 0,
                                "/connect/jsdialog/MPlatformLikeJSDialog/": 0,
                                "/qp/interstitial/": 1,
                                "/qp/action/redirect/": 1,
                                "/qp/action/close/": 1,
                                "/zero/support/ineligible/": 1,
                                "/zero_balance_redirect/": 1,
                                "/zero_balance_redirect": 1,
                                "/zero_balance_redirect/l/": 1,
                                "/l.php": 1,
                                "/lsr.php": 1,
                                "/ajax/dtsg/": 1,
                                "/checkpoint/block/": 1,
                                "/exitdsite": 1,
                                "/zero/balance/pixel/": 1,
                                "/zero/balance/": 1,
                                "/zero/balance/carrier_landing/": 1,
                                "/zero/flex/logging/": 1,
                                "/tr": 1,
                                "/tr/": 1,
                                "/sem_campaigns/sem_pixel_test/": 1,
                                "/bookmarks/flyout/body/": 1,
                                "/zero/subno/": 1,
                                "/confirmemail.php": 1,
                                "/policies/": 1,
                                "/mobile/internetdotorg/classifier/": 1,
                                "/zero/dogfooding": 1,
                                "/xti.php": 1,
                                "/zero/fblite/config/": 1,
                                "/hr/zsh/wc/": 1,
                                "/ajax/bootloader-endpoint/": 1,
                                "/mobile/zero/carrier_page/": 1,
                                "/mobile/zero/carrier_page/education_page/": 1,
                                "/mobile/zero/carrier_page/feature_switch/": 1,
                                "/mobile/zero/carrier_page/settings_page/": 1,
                                "/aloha_check_build": 1,
                                "/upsell/zbd/softnudge/": 1,
                                "/mobile/zero/af_transition/": 1,
                                "/mobile/zero/af_transition/action/": 1,
                                "/mobile/zero/freemium/": 1,
                                "/mobile/zero/freemium/redirect/": 1,
                                "/mobile/zero/freemium/zero_fup/": 1,
                                "/privacy/policy/": 1,
                                "/privacy/center/": 1,
                                "/data/manifest/": 1,
                                "/cmon": 1,
                                "/cmon/": 1,
                                "/zero/minidt/": 1,
                                "/diagnostics": 1,
                                "/diagnostics/": 1,
                                "/4oh4.php": 1,
                                "/autologin.php": 1,
                                "/birthday_help.php": 1,
                                "/checkpoint/": 1,
                                "/contact-importer/": 1,
                                "/cr.php": 1,
                                "/legal/terms/": 1,
                                "/login.php": 1,
                                "/login/": 1,
                                "/mobile/account/": 1,
                                "/n/": 1,
                                "/remote_test_device/": 1,
                                "/upsell/buy/": 1,
                                "/upsell/buyconfirm/": 1,
                                "/upsell/buyresult/": 1,
                                "/upsell/promos/": 1,
                                "/upsell/continue/": 1,
                                "/upsell/h/promos/": 1,
                                "/upsell/loan/learnmore/": 1,
                                "/upsell/purchase/": 1,
                                "/upsell/promos/upgrade/": 1,
                                "/upsell/buy_redirect/": 1,
                                "/upsell/loan/buyconfirm/": 1,
                                "/upsell/loan/buy/": 1,
                                "/upsell/sms/": 1,
                                "/wap/a/channel/reconnect.php": 1,
                                "/wap/a/nux/wizard/nav.php": 1,
                                "/wap/appreg.php": 1,
                                "/wap/birthday_help.php": 1,
                                "/wap/c.php": 1,
                                "/wap/confirmemail.php": 1,
                                "/wap/cr.php": 1,
                                "/wap/login.php": 1,
                                "/wap/r.php": 1,
                                "/zero/datapolicy": 1,
                                "/a/timezone.php": 1,
                                "/a/bz": 1,
                                "/bz/reliability": 1,
                                "/r.php": 1,
                                "/mr/": 1,
                                "/reg/": 1,
                                "/registration/log/": 1,
                                "/terms/": 1,
                                "/f123/": 1,
                                "/expert/": 1,
                                "/experts/": 1,
                                "/terms/index.php": 1,
                                "/terms.php": 1,
                                "/srr/": 1,
                                "/msite/redirect/": 1,
                                "/fbs/pixel/": 1,
                                "/contactpoint/preconfirmation/": 1,
                                "/contactpoint/cliff/": 1,
                                "/contactpoint/confirm/submit/": 1,
                                "/contactpoint/confirmed/": 1,
                                "/contactpoint/login/": 1,
                                "/preconfirmation/contactpoint_change/": 1,
                                "/help/contact/": 1,
                                "/survey/": 1,
                                "/upsell/loyaltytopup/accept/": 1,
                                "/settings/": 1,
                                "/lite/": 1,
                                "/zero_status_update/": 1,
                                "/operator_store/": 1,
                                "/upsell/": 1,
                                "/wifiauth/login/": 1
                            }
                        }, 1478], ["ImmediateActiveSecondsConfig", [], {
                            sampling_rate: 2003,
                            ias_bucket: 1141
                        }, 423], ["MPageControllerGating", [], {
                            shouldDeferUntilCertainNoRedirect: false,
                            shouldReleaseFetcherLock: true,
                            shouldLoadingScreenSetScriptPath: false,
                            shouldRenderAsync404: true
                        }, 2023], ["MobileAppDetect", [], {
                            is_mobile_app: false,
                            is_ads_manager_app: false,
                            is_pages_manager: false,
                            is_facebook_for_android: false,
                            is_facebook_for_android_in_app_browser: false,
                            is_android_faceweb: false,
                            is_facebook_for_ios: false,
                            is_instagram: false,
                            is_messenger_for_android: false,
                            is_messenger_for_ios: false,
                            is_messenger_lite_for_android: false,
                            is_messenger_lite_for_ios: false,
                            is_wilde: false,
                            is_kaios: false,
                            is_whatsapp_smb: false,
                            is_whatsapp_smb_for_android: false,
                            is_whatsapp_smb_for_ios: false
                        }, 1109], ["cr:1172", ["WebSession"], {
                            __rc: ["WebSession", null]
                        }, -1], ["cr:2037", ["BanzaiAdapter"], {
                            __rc: ["BanzaiAdapter", null]
                        }, -1], ["cr:3724", ["SetIdleTimeoutAcrossTransitions"], {
                            __rc: ["SetIdleTimeoutAcrossTransitions", null]
                        }, -1], ["cr:9986", ["CurrentUser"], {
                            __rc: ["CurrentUser", null]
                        }, -1], ["cr:9987", ["NavigationMetrics"], {
                            __rc: ["NavigationMetrics", null]
                        }, -1], ["cr:9988", ["Visibility"], {
                            __rc: ["Visibility", null]
                        }, -1], ["cr:1292365", ["React-prod.classic"], {
                            __rc: ["React-prod.classic", null]
                        }, -1], ["FbtResultGK", [], {
                            shouldReturnFbtResult: true,
                            inlineMode: "NO_INLINE"
                        }, 876], ["cr:5866", ["BanzaiAdapterMobile"], {
                            __rc: ["BanzaiAdapterMobile", null]
                        }, -1], ["MBanzaiConfig", [], {
                            MAX_SIZE: 10000,
                            MAX_WAIT: 30000,
                            MIN_WAIT: null,
                            RESTORE_WAIT: 30000,
                            blacklist: ["time_spent"],
                            disabled: false,
                            gks: {
                                mtouch_use_beacon: true
                            },
                            known_routes: ["artillery_javascript_actions", "artillery_javascript_trace", "artillery_logger_data", "logger", "falco", "gk2_exposure", "js_error_logging", "loom_trace", "marauder", "perfx_custom_logger_endpoint", "qex", "require_cond_exposure_logging", "metaconfig_exposure"],
                            should_drop_unknown_routes: true,
                            should_log_unknown_routes: false
                        }, 32], ["FbtQTOverrides", [], {
                            overrides: {
                                "1_2aae3149cc8bc6f4060d162fb5c20744": "Chỉ là tôi không thích nội dung này"
                            }
                        }, 551], ["LinkshimHandlerConfig", [], {
                            supports_meta_referrer: true,
                            default_meta_referrer_policy: "default",
                            switched_meta_referrer_policy: "origin",
                            non_linkshim_lnfb_mode: "origin",
                            link_react_default_hash: "AT7SPTKOpbbnCe0L-4cWcy7KjjE7QskMLNG3Vfi6fcJQQNPkMec69E3D8nsa1Ez6E7IPdNcHuH9CEMMQD03V6EG1jzy6bXLP5AotAndVXGl8edKWIV7Mxn9Nbt4hxZdU",
                            untrusted_link_default_hash: "AT4b91YONvGttXz_hkeT5z4UIfgvGEKsXtI1jn2ieBXd-X19Irj5cw5jk_-yItNa4wtJef5cOC6C2TpHDOF4vdDinhjrxZ0pQ8Bild5wkijywx6QMw-EFWYW5BOfJY9s",
                            linkshim_host: "lm.facebook.com",
                            linkshim_path: "/l.php",
                            linkshim_enc_param: "h",
                            linkshim_url_param: "u",
                            use_rel_no_opener: false,
                            use_rel_no_referrer: false,
                            always_use_https: true,
                            onion_always_shim: true,
                            middle_click_requires_event: false,
                            www_safe_js_mode: "origin",
                            m_safe_js_mode: "MLynx_originlazy",
                            ghl_param_link_shim: false,
                            click_ids: ["IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHu-WCGVa5mAia2KtJdyvsij3c_-mialF1CdDUJMD8CfbBVsVpm9mTJ5Hk7HH_aem_nMGWDZui0Yt6PfTgTJy4Uw", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHvMaHcZHTf9TRiAp0T-cBXo7GyiF6cU423FiJ0fZ2ek-SXLpHaV6QMOJRUZP_aem_VWrVDgBEYiRSByPrTuFJfQ", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHoW6JZXs41RLjgEOc-uvvtrvyUVMEaUuyNwAWGQiFuYS3JKZ5u1C157XOKSx_aem_0Re9D22LnsSMY8IcrXcZow", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHmTvLuO6rInAkRI8EeKPIQZ1knBCwYXf1XGi-BO1NNI8me-H1WLRp_YUDEPn_aem_DivcDZ43z5K410FMZ9fM4Q", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHjEOq7EapeARy7Px5GI4N2eaiJUhzclbuXCxFsNh-5JdFogTlb_ClbDrhM1x_aem_yxlw17xcIoqQRR9lr5rK3Q", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHsAuWMMzsb8c_BFi40hDkOw9q0VakHtQ04nU_Jz_jT4Dcbw24Xzhekuz0j0d_aem_Ks8I4wlRdZvmtHhrsZzKlQ", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHo3xMYB-ev4rt10Si2NAKRX2w5PNG2jyavQ-str3XENOmqctl70j1veIctwg_aem_qDt9qDmV06Gy-cobY-4JJg", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHvHKuCGg_VN0OwmXwGlMEktocTUNt-p0mlOKe41JC1WRv3uK1ze53Xyjfaph_aem_nwVcby-_M2KhbbK3kXXVEw", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHj8sscBmPTc7PVk9Rm6-nnHzCDKPKwbcci1kGUrQZUabOlf1n3s9JyGLo7rL_aem_90Uu-aO9ejrJFMmhDaaSfw", "IwZXh0bgNhZW0CMTAAYnJpZBExcDN2MlJGalJYcmo1VG5KVHNydGMGYXBwX2lkDDQxMjM3ODY3MDQ4MgABHpZzYs85hktz6e4QoSXYcTt0lDfg4ss_ieSlZgpnLimK8dd6AA82GWH876uu_aem_r1vgBIANKBExfSTF0Rckpw"],
                            aggr_ids: null,
                            is_linkshim_supported: true,
                            current_domain: "facebook.com",
                            blocklisted_domains: ["ad.doubleclick.net", "ads-encryption-url-example.com", "bs.serving-sys.com", "ad.atdmt.com", "adform.net", "ad13.adfarm1.adition.com", "ilovemyfreedoms.com", "secure.adnxs.com"],
                            is_mobile_device: true
                        }, 27]],
                        instances: [["__inst_0b9a2a66_0_0_tl", ["ContactFormMobileConditionChecker", "__elem_0b9a2a66_0_0_S9", "__elem_62659873_0_0_6I"], [{
                            __m: "__elem_0b9a2a66_0_0_S9"
                        }, {
                            __m: "__elem_62659873_0_0_6I"
                        }, null, [], [], [], [], "233841356784195"], 1]],
                        elements: [["__elem_0b9a2a66_0_0_S9", "u_0_0_gU", 1], ["__elem_62659873_0_0_6I", "u_0_1_ZU", 1], ["__elem_e980dec4_0_0_yH", "u_0_2_rt", 1], ["__elem_a32d506f_0_3_JU", "u_0_3_uD", 1], ["__elem_a32d506f_0_0_IH", "u_0_4_bw", 1], ["__elem_a32d506f_0_2_Lt", "u_0_5_Aa", 1], ["__elem_a32d506f_0_1_qb", "u_0_6_r2", 1], ["__elem_eed16c0a_0_0_vu", "u_0_7_9G", 1], ["__elem_a588f507_0_0_2l", "u_0_8_lR", 1], ["__elem_a588f507_0_1_9f", "u_0_9_eQ", 1], ["__elem_0cdc66ad_0_0_ej", "u_0_b_X6", 1], ["__elem_0cdc66ad_0_1_YW", "u_0_c_LP", 1]],
                        require: [["MHelpHeader", "init", [], []], ["__inst_0b9a2a66_0_0_tl"], ["SupportFormFileUpload", "logQPLEventFileSelectedForUpload", [], ["2252252358246313"]], ["MTouchable"], ["GHLSurvey", "survey", [], []], ["MScrollPositionSaver"], ["MPageHeaderAccessibility"], ["MBackButton", "main", [], []], ["MBlockingTouchable", "init", ["__elem_e980dec4_0_0_yH"], [{
                            __m: "__elem_e980dec4_0_0_yH"
                        }]], ["MStoriesRing", "setupStoryRingForUpdates", [], ["m_group_stories_container"]], ["LoadingIndicator", "init", ["__elem_eed16c0a_0_0_vu", "__elem_a588f507_0_0_2l", "__elem_a588f507_0_1_9f"], [{
                            __m: "__elem_eed16c0a_0_0_vu"
                        }, {
                            __m: "__elem_a588f507_0_0_2l"
                        }, {
                            __m: "__elem_a588f507_0_1_9f"
                        }]], ["MPageError"], ["ControlledReferer", "useFacebookRefererHtml", ["__elem_a32d506f_0_0_IH"], [{
                            __m: "__elem_a32d506f_0_0_IH"
                        }, ""]], ["ControlledReferer", "useFacebookRefererHtml", ["__elem_a32d506f_0_1_qb"], [{
                            __m: "__elem_a32d506f_0_1_qb"
                        }, ""]], ["ControlledReferer", "useFacebookRefererHtml", ["__elem_a32d506f_0_2_Lt"], [{
                            __m: "__elem_a32d506f_0_2_Lt"
                        }, ""]], ["ControlledReferer", "useFacebookRefererHtml", ["__elem_a32d506f_0_3_JU"], [{
                            __m: "__elem_a32d506f_0_3_JU"
                        }, ""]], ["MBlockingTouchable", "init", ["__elem_0cdc66ad_0_0_ej"], [{
                            __m: "__elem_0cdc66ad_0_0_ej"
                        }]], ["MBlockingTouchable", "init", ["__elem_0cdc66ad_0_1_YW"], [{
                            __m: "__elem_0cdc66ad_0_1_YW"
                        }]], ["MLoadingIndicator", "init", [], ["u_0_a_lQ"]], ["MPageLoadClientMetricsCallbacks", "init", [], [{
                            lid: "7615615677563578745"
                        }]], ["LogHistoryListeners"], ["ScriptPath", "set", [], ["XMContactController", "a1f3c513", {
                            imp_id: "0mshtzs7MKrUpvWpk",
                            ef_page: null
                        }]], ["MCommentViewportTracking", "singleton", [], [{
                            enabled: true,
                            debug_console: false,
                            debug_html: false,
                            idle_timeout: 5000,
                            min_duration_to_log: 100,
                            min_visible_size: 200
                        }]], ["MLogging", "main", [], [{
                            refid: 0
                        }]], ["Artillery"], ["MLink", "setupListener", [], []], ["MLinkHack"], ["MModalDialogInit"], ["MVerifyCache", "main", [], [{
                            viewer: 100027371148291
                        }]], ["FalcoLoggerTransports", "attach", [], []], ["ScriptPathLogger", "setLid", [], ["7615615677563578745"]], ["ScriptPathLogger", "startLogging", [], []], ["MTimeSpentBitArrayLogger", "init", [], ["m", false, "7615615677563578745", true, false]], ["MCoreDeferred"], ["FbtLogging"], ["IntlQtEventFalcoEvent"], ["MPageControllerImpl"], ["bumpVultureJSHash"], ["LogWebMemoryUsageFalcoEvent"], ["TransportSelectingClientSingletonConditional"], ["MPageFetcherImpl"], ["json-bigint"], ["ContextualConfig"], ["BladeRunnerClient"], ["DGWClient"], ["DGWRequestStreamClient"], ["MqttLongPollingRunner"], ["RequireDeferredReference", "unblock", [], [["FbtLogging", "IntlQtEventFalcoEvent", "MPageControllerImpl", "bumpVultureJSHash", "LogWebMemoryUsageFalcoEvent", "ODS", "TransportSelectingClientSingletonConditional", "MPageFetcherImpl", "json-bigint", "ContextualConfig", "BladeRunnerClient", "DGWClient", "DGWRequestStreamClient", "MqttLongPollingRunner"], "sd"]], ["RequireDeferredReference", "unblock", [], [["FbtLogging", "IntlQtEventFalcoEvent", "MPageControllerImpl", "bumpVultureJSHash", "LogWebMemoryUsageFalcoEvent", "ODS", "TransportSelectingClientSingletonConditional", "MPageFetcherImpl", "json-bigint", "ContextualConfig", "BladeRunnerClient", "DGWClient", "DGWRequestStreamClient", "MqttLongPollingRunner"], "css"]]],
                        pre_display_requires: [["AddressBar", "setupLoadListener", [], [], 4], ["MobileBigPipeStratcomProxy", "init", [], [], 4], ["Stratcom", "init", [], [], 4], ["MViewport", "init", [], [], 4], ["MPageController", "init", [], [], 4], ["ViewportDimensions", "init", [], [], 4], ["onSyncTTI", "run", [], [], 4], ["MLiteInit", "init", [], [], 4]]
                    },
                    hsrp: {
                        hsdp: {
                            clpData: {
                                "1744178": {
                                    r: 1,
                                    s: 1
                                },
                                "1942319": {
                                    r: 1,
                                    s: 1
                                },
                                "1842512": {
                                    r: 1
                                },
                                "1829319": {
                                    r: 1
                                },
                                "1814852": {
                                    r: 1
                                },
                                "1829320": {
                                    r: 1
                                },
                                "1843988": {
                                    r: 1
                                },
                                "1848815": {
                                    r: 10000,
                                    s: 1
                                },
                                "1765264": {
                                    r: 1,
                                    s: 1
                                },
                                "819": {
                                    r: 1,
                                    s: 1
                                },
                                "7235": {
                                    r: 1,
                                    s: 1
                                },
                                "1744057": {
                                    r: 500,
                                    s: 1
                                },
                                "1744058": {
                                    r: 5000,
                                    s: 1
                                },
                                "1744059": {
                                    r: 10000,
                                    s: 1
                                },
                                "1744060": {
                                    r: 1000,
                                    s: 1
                                },
                                "1857112": {
                                    r: 1
                                },
                                "1755537": {
                                    r: 1
                                }
                            },
                            gkxData: {
                                "163": {
                                    result: true,
                                    hash: null
                                },
                                "207": {
                                    result: true,
                                    hash: null
                                },
                                "1624": {
                                    result: false,
                                    hash: null
                                },
                                "2160": {
                                    result: false,
                                    hash: null
                                },
                                "2815": {
                                    result: true,
                                    hash: null
                                },
                                "3193": {
                                    result: false,
                                    hash: null
                                },
                                "3917": {
                                    result: false,
                                    hash: null
                                },
                                "4222": {
                                    result: false,
                                    hash: null
                                },
                                "4279": {
                                    result: false,
                                    hash: null
                                },
                                "4337": {
                                    result: false,
                                    hash: null
                                },
                                "4617": {
                                    result: false,
                                    hash: null
                                },
                                "5679": {
                                    result: false,
                                    hash: null
                                },
                                "6800": {
                                    result: false,
                                    hash: null
                                },
                                "8836": {
                                    result: true,
                                    hash: null
                                },
                                "9317": {
                                    result: true,
                                    hash: null
                                },
                                "10841": {
                                    result: false,
                                    hash: null
                                },
                                "11141": {
                                    result: false,
                                    hash: null
                                },
                                "11557": {
                                    result: true,
                                    hash: "AT-AurnHVKy-9IrOE80"
                                },
                                "11860": {
                                    result: false,
                                    hash: null
                                },
                                "12572": {
                                    result: false,
                                    hash: null
                                },
                                "15466": {
                                    result: false,
                                    hash: null
                                },
                                "17201": {
                                    result: false,
                                    hash: null
                                },
                                "17254": {
                                    result: false,
                                    hash: null
                                },
                                "18142": {
                                    result: false,
                                    hash: null
                                },
                                "18162": {
                                    result: false,
                                    hash: null
                                },
                                "18172": {
                                    result: false,
                                    hash: null
                                },
                                "18246": {
                                    result: false,
                                    hash: null
                                },
                                "18259": {
                                    result: true,
                                    hash: null
                                },
                                "18875": {
                                    result: false,
                                    hash: null
                                },
                                "20483": {
                                    result: false,
                                    hash: null
                                },
                                "20836": {
                                    result: false,
                                    hash: null
                                },
                                "20839": {
                                    result: false,
                                    hash: null
                                },
                                "20840": {
                                    result: false,
                                    hash: null
                                },
                                "20841": {
                                    result: true,
                                    hash: null
                                },
                                "20842": {
                                    result: false,
                                    hash: null
                                },
                                "20861": {
                                    result: false,
                                    hash: null
                                },
                                "20869": {
                                    result: false,
                                    hash: null
                                },
                                "20870": {
                                    result: false,
                                    hash: null
                                },
                                "20871": {
                                    result: true,
                                    hash: null
                                },
                                "20872": {
                                    result: true,
                                    hash: null
                                },
                                "20916": {
                                    result: true,
                                    hash: null
                                },
                                "20919": {
                                    result: true,
                                    hash: null
                                },
                                "20920": {
                                    result: false,
                                    hash: null
                                },
                                "20921": {
                                    result: true,
                                    hash: null
                                },
                                "20922": {
                                    result: true,
                                    hash: null
                                },
                                "20923": {
                                    result: true,
                                    hash: null
                                },
                                "20924": {
                                    result: true,
                                    hash: null
                                },
                                "20925": {
                                    result: true,
                                    hash: null
                                },
                                "20926": {
                                    result: true,
                                    hash: null
                                },
                                "20929": {
                                    result: true,
                                    hash: null
                                },
                                "20995": {
                                    result: true,
                                    hash: null
                                },
                                "21030": {
                                    result: false,
                                    hash: null
                                },
                                "21032": {
                                    result: true,
                                    hash: null
                                },
                                "21050": {
                                    result: false,
                                    hash: null
                                },
                                "21051": {
                                    result: false,
                                    hash: null
                                },
                                "21053": {
                                    result: false,
                                    hash: null
                                },
                                "21055": {
                                    result: false,
                                    hash: null
                                },
                                "21056": {
                                    result: false,
                                    hash: null
                                },
                                "21057": {
                                    result: false,
                                    hash: null
                                },
                                "21058": {
                                    result: false,
                                    hash: null
                                },
                                "21072": {
                                    result: false,
                                    hash: null
                                },
                                "21116": {
                                    result: false,
                                    hash: null
                                },
                                "21118": {
                                    result: true,
                                    hash: null
                                },
                                "21119": {
                                    result: false,
                                    hash: null
                                },
                                "21120": {
                                    result: true,
                                    hash: null
                                },
                                "21122": {
                                    result: false,
                                    hash: null
                                },
                                "21123": {
                                    result: true,
                                    hash: null
                                },
                                "21124": {
                                    result: false,
                                    hash: null
                                }
                            },
                            metaconfigData: {
                                "15": {
                                    value: false
                                },
                                "99": {
                                    value: false
                                },
                                "262": {
                                    value: false
                                }
                            },
                            qexData: {
                                "104": {
                                    r: null,
                                    l: "J{\"qeid\":\"100027371148291\",\"u\":\"\",\"t\":\"fb\",\"gks\":[],\"qe\":null}"
                                },
                                "128": {
                                    r: 250,
                                    l: "J{\"qeid\":\"100027371148291\",\"u\":\"\",\"t\":\"fb\",\"gks\":[],\"qe\":null}"
                                },
                                "344": {
                                    r: 5000,
                                    l: "J{\"qeid\":\"100027371148291\",\"u\":\"\",\"t\":\"fb\",\"gks\":[],\"qe\":null}"
                                },
                                "388": {
                                    r: 5000,
                                    l: "J{\"qeid\":\"100027371148291\",\"u\":\"\",\"t\":\"fb\",\"gks\":[],\"qe\":null}"
                                },
                                "2513": {
                                    r: null,
                                    l: "J{\"qeid\":\"100027371148291\",\"u\":\"\",\"t\":\"fb\",\"gks\":[],\"qe\":null}"
                                }
                            },
                            qplData: {
                                "1177": {
                                    r: 1
                                },
                                "2919": {
                                    r: 100
                                },
                                "3037": {
                                    r: 1
                                }
                            },
                            justknobxData: {
                                "2269": {
                                    r: true
                                },
                                "2635": {
                                    r: true
                                },
                                "195": {
                                    r: true
                                },
                                "1162": {
                                    r: true
                                },
                                "1816": {
                                    r: true
                                },
                                "1858": {
                                    r: 3000
                                },
                                "3831": {
                                    r: true
                                },
                                "4004": {
                                    r: true
                                },
                                "4704": {
                                    r: false
                                },
                                "678": {
                                    r: true
                                },
                                "317": {
                                    r: 16
                                },
                                "822": {
                                    r: true
                                }
                            }
                        },
                        hblp: {
                            consistency: {
                                rev: 1034851462
                            },
                            rsrcMap: {
                                jOON9K3: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yn/r/yFHdK3kd2jy.js?_nc_eui2=AeG6iS1Q9S5pnX34Z-sxpIJVE00meKnDMvATTSZ4qcMy8Hr3L874oJ7tmQbDktZxBRqJPMFOGIfwwm-yxw7W-I3d"
                                },
                                Tvy4lR4: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yH/r/CGojlpa5Ypv.js?_nc_eui2=AeEuv7UY8FDLYlYP7Y9oQP1aS1P0s6IdGg1LU_Szoh0aDaLZZTCR0jC7H8AAvR9bA4RHtewNV5KgmyD-RPqI27KQ"
                                },
                                ZaEr9W1: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/3p5uUpd6N5a.js?_nc_eui2=AeFoOX1SCZgSYOvM5vtzjKn4FKTcIjZXD4gUpNwiNlcPiGsAyPuSgZyzQC7sUxmTJexXaFJi9F1jr_DIMEF9CBkR"
                                },
                                RpLCDYo: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/ye/r/JbnzZ5D8B16.js?_nc_eui2=AeEaRE7F5yQwuSDwegnS0plqsOeGI67CmwGw54YjrsKbAVBIg7k_tEeoJhaxx9HmB1QKH5oYwSPip2-09XICNpI1"
                                },
                                "2fZVJd1": {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4iczx4/ye/l/vi_VN-j/t59sumwTONO.js?_nc_eui2=AeEQyQEDbY6t2a-o0jih7YXnc3eCkXdKZFVzd4KRd0pkVW_gCDH_wBPjW8y1TckiAQpjEBRb0DgyfwNYVQ-E1AkT"
                                },
                                dbjOx85: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/dBucjCMxnfZ.js?_nc_eui2=AeEcpTtFqfCc39XGGOhkqWLSi7a7YMrtv_yLtrtgyu2__FLrM2lPWVRsHF-ed9S6kkIHQuSlISLjp6TV91JA_F_w"
                                },
                                R5w1rCJ: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/8wypiAW_bfk.js?_nc_eui2=AeEJPWt5N0cZMFY2AoQT_1bhjlT2kpNDmQKOVPaSk0OZAv3zMsCpp2k43E8IG7RsbASEeR2TQyUn0ySoBbuXh5po"
                                },
                                kvdHd9K: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yu/r/-GDt2tCXNW6.js?_nc_eui2=AeG_i0nuF4CClf_Lh43nwZUUFTmw37FHFGkVObDfsUcUaY6jV-0MNfTuxj9ikshcHC8aeBTYOYFZMu1F-Gri9b-9"
                                },
                                "TQkO+bI": {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yl/r/_Vmoeo-CxIr.js?_nc_eui2=AeGuYQTM-nrploUyvgzopJJV30J15HQIGqHfQnXkdAgaoWePZR9iNytf1XYe5G-qDyWoFRFQbDpkktiIGy0ErtFS"
                                },
                                pMZsSv3: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yn/r/z1iYoroLALm.js?_nc_eui2=AeEKWQleLDwODiLMavvOHPw7nMTX2Lx5OSCcxNfYvHk5IKNbKUf8XA7rLhT5r3xcKEce5V_0XfbDlkEOv_ssJkkN"
                                },
                                WfyqCTd: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4iLl54/yt/l/vi_VN-j/YCgnOPbQxAK.js?_nc_eui2=AeG6dsbIIenphYAY_3s5WTOlNHzJv0NS_7U0fMm_Q1L_tbKJu8VXa3wcPaGJmAOyLmKCXAlxdBhjMyhLaew1Nypj"
                                },
                                DvaAHZv: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yy/r/yjhAIxi_viH.js?_nc_eui2=AeHCSBq-cH8Uv0JwjK3NjBbrbdgT7O04MP1t2BPs7Tgw_bYrXMIBRbuq_TV-ACNg9STwS5rKKGkTRts4Zt6oIUbH"
                                },
                                "0VxnAb/": {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yu/r/VOyBL-eLmtl.js?_nc_eui2=AeEsSMQCqBd3rOi6Y1bkuZgswZoXaRRkx__BmhdpFGTH_2techrif2wnfIXIZn2TGM7GXZT-1wYcdufF2wx178mc"
                                },
                                P3FfmzZ: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/45b30s4uE-w.js?_nc_eui2=AeH9hYWdWrhyl0YpiOxDRfeK1PrqAK3AbBfU-uoArcBsFwrspHAlICGKx0sztPXbxEj3NLwyfc67jDQ9eBoBbBDY"
                                },
                                "ZD+S2f8": {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yx/r/v_kkAv_-wGQ.js?_nc_eui2=AeES63KXHuTz0mU_XCeDE0uGhRH97ds24fCFEf3t2zbh8B7RRjF1xoQ4bcuzKhN2a5Fg4ChYKOAO3DtZIOp260IC"
                                },
                                SMikW0a: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/y0/r/E6I-vX9fw2W.js?_nc_eui2=AeEplOBUdfaIdIjxiuvf0g_xXixH00jqZm1eLEfTSOpmbahyDSA8N6VQpmndE-IU0HcUIW5PVJ128vWDpICd-X9c"
                                },
                                e7WO4LU: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/yV/r/mKnIlWLea_s.js?_nc_eui2=AeH2uN0az2iHi97dkWLefYqvXkF0ONe-K-ReQXQ4174r5JubeUCTq8z9n6Uux2AblWcfp0f1PMZGVQ01Rei9_60M"
                                }
                            },
                            compMap: {
                                VultureJSSampleRatesLoader: {
                                    r: ["jOON9K3"],
                                    be: 1
                                },
                                Cookie: {
                                    r: ["SfH6S8P"],
                                    be: 1
                                }
                            },
                            indexUpgrades: {}
                        }
                    },
                    allResources: ["rHI9PUR", "iFYxqSq", "CsX+gXJ", "fEQZi8x", "236A0bD", "SfH6S8P", "Tvy4lR4", "Gd+1NvE", "ZaEr9W1", "RpLCDYo", "jCjSDgF", "2fZVJd1", "dbjOx85", "R5w1rCJ", "kvdHd9K", "TQkO+bI", "pMZsSv3", "WfyqCTd", "DvaAHZv", "0VxnAb/", "P3FfmzZ", "ZD+S2f8", "SMikW0a", "e7WO4LU"]
                });
            }
            ));
        </script>
        <script nonce="GDUaeE4h">
            requireLazy(["__bigPipe"], function(bigPipe) {
                bigPipe.setPageID("7615615677563578745")
            });
        </script>
        <script nonce="GDUaeE4h">
            (function() {
                var n = now_inl();
                requireLazy(["__bigPipe"], function(bigPipe) {
                    bigPipe.beforePageletArrive("last_response", n);
                })
            }
            )();
        </script>
        <script nonce="GDUaeE4h">
            requireLazy(["__bigPipe"], (function(bigPipe) {
                bigPipe.onPageletArrive({
                    id: "last_response",
                    phase: 63,
                    last_in_phase: true,
                    the_end: true,
                    jsmods: {
                        define: [["cr:686", [], {
                            __rc: [null, null]
                        }, -1], ["cr:12180", [], {
                            __rc: [null, null]
                        }, -1], ["cr:1752405", ["QPLAddBlueRequestHeaders"], {
                            __rc: ["QPLAddBlueRequestHeaders", null]
                        }, -1], ["cr:1984081", [], {
                            __rc: [null, null]
                        }, -1], ["cr:334", ["ghlTestUBTFacebook"], {
                            __rc: ["ghlTestUBTFacebook", null]
                        }, -1], ["cr:1088657", [], {
                            __rc: [null, null]
                        }, -1], ["cr:1543261", [], {
                            __rc: [null, null]
                        }, -1], ["IntlCurrentLocale", [], {
                            code: "vi_VN"
                        }, 5954], ["cr:8828", [], {
                            __rc: [null, null]
                        }, -1], ["cr:1094907", [], {
                            __rc: [null, null]
                        }, -1], ["cr:710", ["TransportSelectingClientSingleton"], {
                            __rc: ["TransportSelectingClientSingleton", null]
                        }, -1], ["cr:6108", ["MCSS"], {
                            __rc: ["MCSS", null]
                        }, -1], ["cr:975", [], {
                            __rc: [null, null]
                        }, -1], ["cr:3024", [], {
                            __rc: [null, null]
                        }, -1], ["TransportSelectingClientContextualConfig", [], {
                            rawConfig: "{\"name\":\"rti/web_rs_transport_selecting_client\",\"cctype\":\"dense\",\"version\":1,\"policy_id\":\"static\",\"sample_rate\":1000,\"contexts\":[{\"name\":\"method\",\"type\":\"STRING\",\"callsite\":true,\"buckets\":[{\"name\":\"rollout_group_1\",\"strategy\":\"in\",\"values\":[\"FBGQLS:FEEDBACK_LIKE_SUBSCRIBE\",\"Falco\",\"FBLQ:comet_notifications_live_query_experimental\"]},{\"name\":\"rollout_group_6\",\"strategy\":\"in\",\"values\":[\"FBGQLS:COMMENT_CREATE_SUBSCRIBE\",\"FBGQLS:COMMENT_LIKE_SUBSCRIBE\",\"FBGQLS:FEEDBACK_COMMENT_PERMISSION_TOGGLE_SUBSCRIBE\",\"FBGQLS:FEEDBACK_TYPING_SUBSCRIBE\"]},{\"name\":\"rollout_group_4\",\"strategy\":\"regex\",\"values\":[\"FBGQLS:.*\"]},{\"name\":\"rollout_group_3\",\"strategy\":\"regex\",\"values\":[\"FBLQ:.*\"]},{\"name\":\"skywalker\",\"strategy\":\"in\",\"values\":[\"SKY:test_topic\",\"live/api/copyright\",\"intern_notify\",\"locplat/ttm\",\"rti_widget_dashboard\",\"srt/user_metrics_counter\",\"media_manager_instagram_composer_create_update\",\"cubism_annotations/fleet_health\",\"srt/notifications\",\"ads/reporting/snapshot\",\"unidash/widget\",\"cubism_annotations\",\"ads/reporting/export\",\"pubx/notification/update\",\"ads/powereditor/import\",\"lwi_async_create\",\"video_edit\",\"metric_graph_realtime\",\"vcc_video_posting_www\",\"cms/object_archive_copy_created\",\"cms/branch_updated\",\"cms/object_saved\",\"codeless_event_tracking\",\"srt/job_updated\",\"video_broadcast\",\"video/broadcast/error\",\"vcpanel/api\",\"lwi_everywhere_plugin\",\"commercial_break_v2\",\"advanced_analytics/query\",\"cubism_annotations/ads_mastercook_models\",\"gqls/comment_like_subscribe\",\"live/api/copyright\",\"shiba/mock_bot_error\",\"shiba/save_state\",\"video_list_publishing_progress_update\",\"assistant_wizard\",\"gizmo/manage\",\"collab/presentation/request\",\"snaptu/push_notif\"]},{\"name\":\"skywalker_bulletin\",\"strategy\":\"in\",\"values\":[\"www/sr/hot_reload\"]},{\"name\":\"rollout_group_5\",\"strategy\":\"regex\",\"values\":[\"Collabri|RealtimeClientSync:.*\"]},{\"name\":\"default\",\"strategy\":\"catch_all\"}]}],\"outputs\":[{\"name\":\"group\",\"type\":\"STRING\"},{\"name\":\"dgwUpsampleMultiplier\",\"type\":\"FLOAT\"}],\"vector\":[\"group1\",\"0.01\",\"group6\",\"0.001\",\"group4\",\"1.0\",\"group3\",\"1.0\",\"skywalker\",\"1.0\",\"skywalker_bulletin\",\"1.0\",\"group5\",\"1.0\",\"default_group\",\"1.0\"],\"vectorDefaults\":[\"default_group\",\"1.0\"],\"timestamp\":1663366072}"
                        }, 5968], ["RtiWebRequestStreamClient", [], {
                            ThrottledMethods: {},
                            overrideHeaders: {}
                        }, 6639], ["WebDriverConfig", [], {
                            isTestRunning: false,
                            isJestE2ETestRun: false,
                            isXRequestConfigEnabled: false,
                            auxiliaryServiceInfo: {},
                            testPath: null,
                            originHost: null,
                            experiments: null
                        }, 5332], ["MarauderConfig", [], {
                            app_version: "1.0.0.0 (1034851462)",
                            gk_enabled: false
                        }, 31], ["RTISubscriptionManagerConfig", [], {
                            config: {},
                            autobot: {},
                            assimilator: {},
                            unsubscribe_release: true,
                            bladerunner_www_sandbox: null,
                            is_intern: false
                        }, 1081], ["RequestStreamE2EClientSamplingConfig", [], {
                            sampleRate: 500000,
                            methodToSamplingMultiplier: {
                                RTCSessionMessage: 10000,
                                Presence: 0.01,
                                "FBGQLS:VOD_TICKER_SUBSCRIBE": 0.01,
                                "FBGQLS:STORIES_TRAY_SUBSCRIBE": 100,
                                Collabri: 0.1,
                                "FBGQLS:WORK_AVAILABILITY_STATUS_FANOUT_SUBSCRIBE": 0.1,
                                "FBGQLS:GROUP_UNSEEN_ACTIVITY_SUBSCRIBE": 0.1,
                                "FBGQLS:GROUP_RESET_UNSEEN_ACTIVITY_SUBSCRIBE": 0.1,
                                "FBGQLS:INTERN_CALENDAR_UPDATE_SUBSCRIBE": 0.1,
                                "SKY:gizmo_manage": 10000,
                                "FBGQLS:XFB_HZW_CHALLENGE_COMPLETE_SUBSCRIBE": 10,
                                FalcoMobile: 1,
                                "FBGQLS:FEEDBACK_LIKE_SUBSCRIBE": 10,
                                "FBLQ:ios_huddle_listener": 1000,
                                "FBGQLS:HUDDLE_USERS_REQUESTED_TO_SPEAK_COUNT_SUBSCRIBE": 1000
                            }
                        }, 4501], ["MqttWebDeviceID", [], {
                            clientID: "54169c7a-8a9a-4ec9-85a6-db35c93afd82"
                        }, 5003], ["DGWWebConfig", [], {
                            appId: "412378670482",
                            appVersion: "0",
                            dgwVersion: "2",
                            endpoint: "",
                            fbId: "100027371148291",
                            authType: ""
                        }, 5508], ["cr:2046346", [], {
                            __rc: [null, "Aa6TDoKRVnnc50RlybdWACsYpAxa26cd4SAdBm0CWZkTatAHGmBYylcJbWtqlpefN26NugQRaGdq_CH_ULcf_zByOJzA8aZy7KiWKXlAAF6IUKckWvCiyDjvkhrHXLDkzI_vlTpnZmpb"]
                        }, -1], ["MqttWebConfig", [], {
                            fbid: "100027371148291",
                            appID: 219994525426954,
                            endpoint: "wss://edge-chat.facebook.com/chat?region=prn",
                            pollingEndpoint: "https://edge-chat.facebook.com/mqtt/pull?region=prn",
                            subscribedTopics: [],
                            capabilities: 10,
                            clientCapabilities: 3,
                            chatVisibility: false,
                            hostNameOverride: ""
                        }, 3790], ["cr:19611", ["GhlTennisKnobsConfigJSModuleWrapper"], {
                            __rc: ["GhlTennisKnobsConfigJSModuleWrapper", null]
                        }, -1], ["GhlTennisKnobsConfig", [], {
                            ghlbox_log_validity_in_mins: 7200,
                            ghlbox_initialize_in_mins: 14400,
                            change_class_interval_in_mins: 1440
                        }, 6687], ["cr:13908", ["MTouchableSyntheticClickGKJSModuleWrapper"], {
                            __rc: ["MTouchableSyntheticClickGKJSModuleWrapper", null]
                        }, -1], ["MTouchableSyntheticClickGK", [], {
                            USE_SYNTHETIC_CLICK: true
                        }, 368]],
                        require: [["BDClientSignalCollectionTrigger", "startSignalCollection", [], [{
                            sc: "{\"t\":1773148700,\"c\":[[30000,838801],[30001,838801],[30002,838801],[30003,838801],[30004,838801],[30005,838801],[30006,573585],[30007,838801],[30008,838801],[30012,838801],[30013,838801],[30015,806033],[30018,806033],[30021,540823],[30022,540817],[30040,806033],[30093,806033],[30094,806033],[30095,806033],[30101,541591],[30102,541591],[30103,541591],[30104,541591],[30106,806039],[30107,806039],[38000,541427],[38001,806643]]}",
                            fds: 60,
                            fda: 60,
                            i: 60,
                            sbs: 1,
                            dbs: 100,
                            bbs: 100,
                            hbi: 60,
                            rt: 262144,
                            hbcbc: 2,
                            hbvbc: 0,
                            hbbi: 30,
                            sid: 50,
                            hbv: "4681300905213741819"
                        }]], ["NavigationMetrics", "setPage", [], [{
                            page: "XMContactController",
                            page_type: "normal",
                            page_uri: "https://m.facebook.com/help/contact/233841356784195",
                            serverLID: "7615615677563578745"
                        }]], ["ServiceWorkerURLCleaner", "removeRedirectID", [], []]]
                    },
                    hsrp: {
                        hsdp: {
                            clpData: {
                                "1743095": {
                                    r: 1,
                                    s: 1
                                }
                            },
                            gkxData: {
                                "21049": {
                                    result: false,
                                    hash: null
                                }
                            }
                        },
                        hblp: {
                            consistency: {
                                rev: 1034851462
                            },
                            rsrcMap: {
                                "gIK+GlG": {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/zhK17QCJvRT.js?_nc_eui2=AeHl2WkWRsBiXhCKFi3qwPBNUjYwzN9YZMxSNjDM31hkzEz9S46s29gmDFmI160Qs_CEQuAdDd_YoMjj3G__YezN"
                                },
                                zPYlTyl: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/y8/r/GKU4lvpjmBB.js?_nc_eui2=AeGc49HcrPDjBjOM5BFeTaLb6cYXD8kRs9TpxhcPyRGz1EjseTpWntSs_p1-SWbAPxwy36oJhV-pBjUtL2gjfHP5"
                                },
                                bXeUAho: {
                                    type: "js",
                                    src: "https://static.xx.fbcdn.net/rsrc.php/v4/y0/r/Kc5uUHPou2M.js?_nc_eui2=AeGPpGWdANVhf1heXVB48aOH-W_fVJegoUn5b99Ul6ChSTpPkXx2q-SiMsz-lNRdb-7fawOxfl4Jzppvn9IUphpm"
                                }
                            },
                            indexUpgrades: {}
                        }
                    },
                    allResources: ["gIK+GlG", "SfH6S8P", "zPYlTyl", "Tvy4lR4", "bXeUAho"]
                });
            }
            ));
        </script>
    </body>
</html>
