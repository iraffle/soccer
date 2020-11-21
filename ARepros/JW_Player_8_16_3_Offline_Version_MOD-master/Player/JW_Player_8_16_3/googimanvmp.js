! function() {
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function a(e, t, a) {
        return t && i(e.prototype, t), a && i(e, a), e
    }

    function s(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function r() {
        return (r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
            }
            return e
        }).apply(this, arguments)
    }

    function n(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                return i
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var o, l = "googimanvmp",
        d = "TYPE_API",
        u = "TYPE_SCHEDULE",
        h = "viewable",
        g = "-1",
        c = "adCompanions",
        p = "adError",
        f = "adStarted",
        v = 4096,
        y = 1e3,
        m = "__jwpseg__",
        w = "instream",
        P = "article",
        A = (s(o = {}, [w], 1), s(o, ["banner"], 2), s(o, [P], 3), s(o, ["feed"], 4), s(o, ["floating"], 5), s(o, ["interstitial"], 5), s(o, ["slider"], 5), o),
        k = "inference",
        b = function() {
            function e(i) {
                t(this, e), this.utils = i, this.midRolls = [], this.playedMidRolls = [], this.adRules = {}
            }
            return a(e, [{
                key: "getPreRoll",
                value: function(e) {
                    return e && "none" === this.adRules.startOnSeek ? null : this.preRoll
                }
            }, {
                key: "getPostRoll",
                value: function() {
                    return this.postRoll ? this.postRoll : null
                }
            }, {
                key: "getMidRollAtIndex",
                value: function(e) {
                    return this.midRolls[e]
                }
            }, {
                key: "peek",
                value: function(e, t, i) {
                    if (this.midRolls.length > this.playedMidRolls.length) {
                        this.sort(i);
                        for (var a = 0; this.midRolls[a];) {
                            var s = M(this.midRolls[a].offset, i);
                            if (s >= e && -1 === this.playedMidRolls.indexOf(a)) return s <= t ? a : null;
                            a += 1
                        }
                    }
                    return this.postRoll && t >= i ? -1 : null
                }
            }, {
                key: "getNextMidrollIndex",
                value: function(e, t, i) {
                    if (this.midRolls.length > this.playedMidRolls.length) {
                        var a = this.getClosestIndex(t, i);
                        if (a >= 0 && this.playedMidRolls.indexOf(a) < 0) return this.playedMidRolls.push(a), a
                    }
                    return null
                }
            }, {
                key: "getMidRolls",
                value: function() {
                    return this.midRolls
                }
            }, {
                key: "setPreRoll",
                value: function(e) {
                    this.resetBreakId(e), this.preRoll = e
                }
            }, {
                key: "addMidRoll",
                value: function(e) {
                    this.resetBreakId(e), this.midRolls.push(e), this.duration = 0
                }
            }, {
                key: "setPostRoll",
                value: function(e) {
                    this.resetBreakId(e), this.postRoll = e
                }
            }, {
                key: "sort",
                value: function(e, t) {
                    (!e || e < 1) && (e = 1), (this.duration !== e || t) && (this.duration = e, this.midRolls.sort((function(t, i) {
                        return M(t.offset, e) - M(i.offset, e)
                    })))
                }
            }, {
                key: "getAllAds",
                value: function() {
                    var e = this.preRoll ? [this.preRoll] : [],
                        t = this.postRoll ? [this.postRoll] : [];
                    return e.concat(this.midRolls, t)
                }
            }, {
                key: "setVMAP",
                value: function(e) {
                    this.vmap = e
                }
            }, {
                key: "isVMAP",
                value: function() {
                    return !!this.vmap
                }
            }, {
                key: "getClosestIndex",
                value: function(e, t) {
                    this.sort(t);
                    for (var i = this.midRolls.length; i--;)
                        if (e >= M(this.midRolls[i].offset, t)) return i;
                    return -1
                }
            }, {
                key: "resetBreakId",
                value: function(e) {
                    e.adBreakId = this.utils.genId(12)
                }
            }]), e
        }();

    function M(e, t) {
        return "%" === e.toString().slice(-1) ? t * parseFloat(e.slice(0, -1)) / 100 : parseFloat(e)
    }
    var E = function(e) {
            var t = R("".concat(e, "Locator"));
            return null !== t && function(i, a, r, n) {
                var o = x();
                window.addEventListener("message", (function t(i) {
                    var a = i ? i.data : {};
                    if ("string" == typeof a) try {
                        a = JSON.parse(a)
                    } catch (e) {
                        a = {}
                    }
                    var s = "".concat(e, "Return");
                    a[s] && a[s].callId === o && (removeEventListener("message", t), r(a[s].returnValue, a[s].success))
                }), !1);
                var l = void 0 !== n ? "version" : "parameter",
                    d = s({}, ["".concat(e, "Call")], s({
                        command: i,
                        callId: o,
                        parameter: n
                    }, [l], a));
                t.postMessage(JSON.stringify(d), "*")
            }
        },
        C = new RegExp(/^[^/]*:\/\/\/?([^\/]*)/);

    function I(e) {
        var t = e.match(C);
        return t && t.length > 1 ? t[1] : ""
    }
    var R = function(e) {
            for (var t = window; t;) {
                try {
                    if (t.frames[e]) break
                } catch (e) {}
                t = t === window.top ? null : t.parent
            }
            return t
        },
        j = new RegExp(/^[^:\/?#]+:?\/\/[^\/?#]+/);
    var L = /^(https?:\/\/).*.(?:ampproject.org|bing-amp.com)\/(?:.\/)*(.*)\/amp.*$/;
    var _ = null,
        S = {
            gdprApplies: !0,
            consentData: ""
        },
        T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
            return null === _ && (_ = new Promise((function(e) {
                var t = window.__tcfapi || E("__tcfapi");
                if (t) return t("getTCData", 2, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies,
                        consentData: t.tcString
                    } : null)
                }), null);
                var i = window.__cmp || E("__cmp");
                return i ? i("getConsentData", null, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies || t.isUserInEu,
                        consentData: t.consentData
                    } : null)
                })) : e({
                    gdprApplies: !1,
                    consentData: ""
                })
            })).then((function(e) {
                return e && (S = e), S
            }))), Promise.race([_, new Promise((function(t) {
                setTimeout(t, e, S)
            }))])
        },
        x = Date.now || function() {
            return (new Date).getTime()
        };

    function D(e) {
        var t = e.advertising;
        if (t && t.placement) {
            var i = t.placement.toLowerCase();
            if (A[i]) return A[i]
        }
        return A[t && t.outstream ? P : w]
    }

    function O() {
        var e, t, i = null !== document.referrer.match(j) ? (e = document.referrer, (t = e.match(L)) && t.length > 1 ? "".concat(t[1]).concat(t[2]) : e) : "";
        if (window.top !== window.self) {
            try {
                return {
                    url: window.top.location.href,
                    domain: window.top.document.domain,
                    referrer: i
                }
            } catch (e) {}
            return {
                url: i,
                domain: I(i),
                referrer: ""
            }
        }
        return {
            url: document.location.href,
            domain: document.domain,
            referrer: i
        }
    }

    function B(e, t) {
        if ("start" === e || "0%" === e) return "pre";
        if ("end" === e || "100%" === e) return "post";
        if ("string" == typeof e && ("pre" === e || "post" === e || e.indexOf("%") >= 0)) return e;
        var i = t.seconds(e);
        return "number" == typeof i && !isNaN(i) && i
    }

    function q(e, t) {
        var i = B(e, t);
        return "pre" === i ? 0 : "post" === i ? -1 : i
    }

    function V(e, t) {
        var i, a = e.getPlugin(k),
            s = t.jwpseg_client_side,
            r = t.jwpseg || [];
        if (!s || !s.length || !a) return r;
        try {
            i = a.predict(s, t)
        } catch (e) {
            return t.jwpseg || []
        }
        var o = Object.keys(i).filter((function(e) {
                return i[e]
            })),
            l = r.filter((function(e) {
                return -1 === s.indexOf(e)
            }));
        return [].concat(n(o), n(l))
    }

    function U(e, t) {
        if (e && e[t] && "function" == typeof e[t]) try {
            for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) a[s - 2] = arguments[s];
            return e[t].apply(e, a)
        } catch (e) {
            return null
        }
        return null
    }

    function N(e, t, i) {
        var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (!e) return Promise.resolve(e);
        var s = t.getPlaylistItem() || {},
            r = t.getConfig(),
            n = O(),
            o = V(t, s); - 1 !== e.indexOf(m) && (a.jwpseg = o);
        for (var l, d, u, h = e.replace("__random-number__", Math.random() * Math.pow(10, 18)).replace("__timestamp__", (new Date).getTime()).replace("__page-url__", encodeURIComponent(n.url)).replace("__referrer__", encodeURIComponent(n.referrer)).replace("__player-height__", t.getHeight() || r.height).replace("__player-width__", t.getWidth() || r.width).replace("__item-duration__", (l = t.getDuration(), d = 3, u = Math.pow(10, d), Math.round(l * u) / u)).replace(m, o).replace("__domain__", encodeURIComponent(n.domain)).replace("__placement__", D(r)).replace("__device-ua__", encodeURIComponent(navigator.userAgent)), g = null, c = /__item-([\w-]+?)(-list)?__/g, p = h = i.companiondiv && i.companiondiv.id ? h.replace("__companion-div__", i.companiondiv.id) : h.replace("__companion-div__", ""); null !== (g = c.exec(p));) {
            var f = g[0],
                w = g[1],
                P = "";
            if (s.hasOwnProperty(w) && "string" == typeof s[w]) {
                P = s[w];
                var A = i.truncateMacros ? y : v;
                P.length > A && (P = P.substring(0, A));
                var k = g[2] ? "," : null;
                P = P.split(k).map(encodeURIComponent)
            }
            h = h.replace(f, P)
        }
        if (s.title && -1 === h.indexOf("vid_t=")) {
            var b = s.title.substring(0, 100).replace(/[^\x00-\x7F]/g, "");
            h += function(e) {
                return -1 !== e.indexOf("?") ? "&" : "?"
            }(h) + "vid_t=" + encodeURIComponent(b)
        }
        return -1 !== h.indexOf("__gdpr__") || -1 !== h.indexOf("__gdpr_consent__") ? T().then((function(e) {
            var t = e.gdprApplies,
                i = e.consentData;
            return h.replace("__gdpr__", t ? 1 : 0).replace("__gdpr_consent__", i)
        })).catch((function() {
            return h
        })) : Promise.resolve(h)
    }
    var z = function() {
        function e(i, a, s) {
            t(this, e), this.player = i, this.utils = a, this.options = s
        }
        return a(e, [{
            key: "getSchedule",
            value: function(e) {
                var t = new b(this.utils);
                if (e.tag) t.setPreRoll({
                    offset: "pre",
                    tag: e.tag
                });
                else {
                    if ("string" == typeof e.schedule) return t.setVMAP(e.schedule), t;
                    if ("string" == typeof e.adschedule) return t.setVMAP(e.adschedule), t;
                    ! function(e, t, i) {
                        var a = t.schedule || t.adschedule;
                        if (!a) return;
                        var s = {};
                        Object.keys(a).forEach((function(e) {
                            var t = a[e];
                            t.ad && (r(t, t.ad), delete t.ad);
                            var n = B(t.offset, i),
                                o = s[n];
                            if (o) {
                                if ("nonlinear" === t.type) return;
                                "nonlinear" === o._type && (o = null)
                            }
                            var l = s[n] = o || {
                                offset: n,
                                _type: t.type,
                                _breakId: e
                            };
                            !1 === n && i.log("Error: ad offset format not supported", n), t.adm ? l.adm = t.adm : t.tag ? l.tag = t.tag : i.log("Error: no ad tag provided")
                        })), J(e, s)
                    }(t, e, this.utils)
                }
                return t
            }
        }, {
            key: "tagReplace",
            value: function(e) {
                var t = this.player.utils;
                return N(W(e.tag, t, e.custParams), this.player, r({}, this.options, e.custParams), e)
            }
        }, {
            key: "normalize",
            value: function(e) {
                var t = this,
                    i = this.player.utils;
                "string" == typeof e && (e = {
                    0: {
                        tag: e
                    }
                });
                var a = Object.keys(e),
                    s = a.map((function(a) {
                        var s = e[a],
                            n = s.ad || s;
                        if (n.tag) return N(W(n.tag, i, n.custParams), t.player, r({}, t.options, n.custParams), n)
                    }));
                return Promise.all(s).then((function(s) {
                    var r = a.reduce((function(t, a, r) {
                            var n = e[a],
                                o = n.ad || n,
                                l = s[r];
                            return t[a] = {
                                offset: G(o.offset || o.position || n.offset || "", i),
                                adm: o.adm,
                                tag: l,
                                type: o.type || n.type || "linear,nonlinear",
                                jwpseg: n.jwpseg
                            }, t
                        }), {}),
                        n = new b(t.utils);
                    return J(n, r, t.utils), n
                }))
            }
        }]), e
    }();

    function W(e, t, i) {
        if (!i) return e;
        var a = e.indexOf("?") >= 0 ? "&" : "?",
            s = e.indexOf("cust_params="),
            r = "cust_params=".length,
            n = "",
            o = "";
        if (t.foreach(i, (function(e, t) {
                n = "".concat(n).concat(o).concat(e, "=").concat(t), o = "&"
            })), n = encodeURIComponent(n), s >= 0) {
            var l = e.substr(0, s + r),
                d = e.substr(s + r);
            return "".concat(l).concat(n, "%26").concat(d)
        }
        return "".concat(e).concat(a, "cust_params=").concat(n)
    }

    function G(e, t) {
        var i = B(e, t);
        return i || "pre"
    }

    function J(e, t) {
        Object.keys(t).forEach((function(i) {
            var a = t[i];
            switch (a.offset || i) {
                case "pre":
                    e.setPreRoll(a);
                    break;
                case "post":
                    e.setPostRoll(a);
                    break;
                default:
                    e.addMidRoll(a)
            }
        }))
    }
    var H = {
        adPosition: "",
        autoplayadsmuted: !1,
        companiondiv: null,
        companionResourceType: "",
        debug: !1,
        enablePreloading: !1,
        loadVideoTimeout: 15e3,
        locale: "",
        maxRedirects: -1,
        preloadAds: !1,
        requestTimeout: 1e4,
        truncateMacros: !0,
        vastLoadTimeout: 1e4,
        vpaidcontrols: !1,
        vpaidmode: "insecure"
    };

    function F(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        var t = parseFloat(e);
        return isNaN(t) ? e : t
    }
    var K = function() {
            function i(a, s) {
                for (var r in t(this, i), this.config = a, this.utils = s, this.bidsResponse = {}, H)
                    if (H.hasOwnProperty(r)) {
                        var n = a[r],
                            o = H[r],
                            l = e(o);
                        if (void 0 !== n) {
                            if ("boolean" !== l && "number" !== l || (n = F(n)), e(n) !== l) throw new Error("invalid parameter: " + r + " should be a " + l);
                            this[r] = n
                        } else this[r] = o
                    }
            }
            return a(i, [{
                key: "getSingleTagPrerollBlock",
                value: function() {
                    var e = this.getConfigSchedule(),
                        t = this.singleTagBidsResponse;
                    if ("string" == typeof e) {
                        if (!t) return e;
                        var i = t.adm,
                            a = t.tag,
                            s = t.jwpseg,
                            r = t.custParams;
                        return [{
                            adm: i,
                            tag: a ? W(a, this.utils, r) : null,
                            jwpseg: s
                        }]
                    }
                    return null
                }
            }, {
                key: "addBidsResponse",
                value: function(e, t) {
                    var i;
                    i = e && !e.error && (e.adm || e.tag) ? e : null, t ? this.bidsResponse[t] = i : this.singleTagBidsResponse = i
                }
            }, {
                key: "resetBidsResponse",
                value: function() {
                    this.bidsResponse = {}, this.singleTagBidsResponse = null
                }
            }, {
                key: "isScheduleVMAP",
                value: function() {
                    var e = this.config;
                    return "string" == typeof this.adschedule || "string" == typeof e.schedule
                }
            }, {
                key: "getSchedule",
                value: function() {
                    var e = this,
                        t = this.getConfigSchedule();
                    if (!t) return t;
                    var i = this.utils.extend({}, t),
                        a = this.getSingleTagPrerollBlock();
                    return a || Object.keys(this.bidsResponse).reduce((function(t, i) {
                        var a = t[i],
                            s = e.bidsResponse[i];
                        return a && s && (t[i] = r({}, a, {
                            adm: s.adm,
                            tag: s.tag,
                            custParams: r({}, a.custParams, s.custParams),
                            jwpseg: s.jwpseg
                        })), t
                    }), i)
                }
            }, {
                key: "getConfigSchedule",
                value: function() {
                    var e = this.config;
                    return this.adschedule || e.tag || e.schedule || e.ad
                }
            }, {
                key: "getAdRules",
                value: function() {
                    var e = this.config.rules || {},
                        t = parseInt(e.frequency, 10);
                    return {
                        startOn: e.startOn || 1,
                        frequency: isNaN(t) ? 1 : t
                    }
                }
            }, {
                key: "getNonConvertedSchedule",
                value: function() {
                    var e = this.getSchedule();
                    return e ? "string" == typeof e && (this.config.tag || this.config.ad) ? {
                        tag: e
                    } : {
                        schedule: e
                    } : null
                }
            }, {
                key: "setLocalizationOptions",
                value: function(e) {
                    var t = e.admessage,
                        i = e.cuetext,
                        a = e.podmessage,
                        s = e.loadingAd;
                    this.admessage = t, this.cuetext = i, this.podmessage = a, this.loadingAd = s
                }
            }]), i
        }(),
        Q = function() {
            function e(i, a, s) {
                t(this, e), s.addClass(i, "jw-plugin-googima");
                var r = document.createElement("div");
                r.id = a + "_ad", r.className = "jw-ads-view", this.visible = !1, this.utils = s, this.div = i, this.adDiv = r, i.appendChild(r)
            }
            return a(e, [{
                key: "resizeNonLinear",
                value: function(e) {
                    this.resize(!1, e)
                }
            }, {
                key: "resizeLinear",
                value: function() {
                    this.resize(!0)
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    var i = this.utils;
                    i.toggleClass(this.div, "jw-ad-non-linear", !e), i.toggleClass(this.div, "jw-ad-linear", e), i.style(this.div, {
                        height: t ? t + "px" : ""
                    })
                }
            }, {
                key: "getAdDiv",
                value: function() {
                    return this.adDiv
                }
            }, {
                key: "adSetup",
                value: function() {
                    this.visible = !0, this.utils.addClass(this.div, "jw-ad-instream"), this.resize(!0)
                }
            }, {
                key: "adTakeDown",
                value: function() {
                    this.visible = !1, this.utils.removeClass(this.div, "jw-ad-instream"), this.resize(!0)
                }
            }]), e
        }(),
        X = null;

    function $(e) {
        if (X) return X;
        if (window.google && google.ima && google.ima.AdDisplayContainer) return X = Promise.resolve();
		// GOOGLE LIBS
        var t = ["//", "imasdk.googleapis.com/js/sdkloader/ima3.js"];
        "file:" === document.location.protocol && t.unshift("https:");
        var i = new(0, e.scriptloader)(t.join(""));
        return X = i.load()
    }
    var Y = {};
    var Z = function() {
        function e(i, a, s) {
            t(this, e), i.extend(this, a), this.vol = 0, this.imaProxy = null, this.view = s
        }
        return a(e, [{
            key: "setProxy",
            value: function(e) {
                this.imaProxy = e, "boolean" == typeof this.muted && this.mute(this.muted)
            }
        }, {
            key: "attachMedia",
            value: function() {}
        }, {
            key: "detachMedia",
            value: function() {}
        }, {
            key: "mute",
            value: function(e) {
                this.muted = e, this.imaProxy && (e ? this.imaProxy.setVolume(0) : this.vol && this.imaProxy.setVolume(this.vol)), this.muteAllAdContainerVideo(e)
            }
        }, {
            key: "muteAllAdContainerVideo",
            value: function(e) {
                for (var t = this.view.getAdDiv().getElementsByTagName("video"), i = 0; i < t.length; i++) t[i].muted = e
            }
        }, {
            key: "volume",
            value: function(e) {
                this.vol = e / 100, this.imaProxy && this.imaProxy.setVolume(this.vol)
            }
        }]), e
    }();

    function ee(e, t, i, a) {
        var s = te(e, i, a),
            n = t.getVastErrorCode ? t.getVastErrorCode() : t.code,
            o = t.getErrorCode ? t.getErrorCode() : t.adErrorCode;
        return o = o < 1e4 ? o + 2e4 : o || 60900, r(s, {
            message: "Ad Error: " + (t.getMessage ? t.getMessage() : t.message),
            code: n >= 100 && n <= 1008 ? n : 900,
            adErrorCode: o
        }), e && (20402 === o ? s.timeout = e.options.loadVideoTimeout : 21009 === o ? s.timeout = e.options.vastLoadTimeout : 60004 === o && (s.timeout = e.options.requestTimeout)), void 0 !== t.id && (s.id = t.id), void 0 !== t.placement && (s.placement = t.placement), t.getInnerError && (s.sourceError = t.getInnerError()), void 0 !== t.tag && (s.tag = t.tag), s
    }

    function te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = {
                client: l
            },
            s = e && !e.destroyed();
        if (s) {
            var n = e.player;
            r(a, {
                placement: D(n.getConfig()),
                viewable: n.getViewable()
            }), a.adposition = ie(n)
        }
        i.jwpseg && (a.jwpseg = i.jwpseg);
        var o = U(t, "getAdPodInfo");
        if (o) {
            var d = U(o, "getTotalAds");
            d > 1 && r(a, {
                sequence: U(o, "getAdPosition"),
                podcount: d
            });
            var u = U(o, "getTimeOffset");
            0 === u ? a.adposition = "pre" : -1 === u && (a.adposition = "post")
        }
        var h = s ? e.adsLoaderManager : i.loader;
        if (h) {
            var g = o ? U(o, "getTimeOffset") : void 0 !== i.offset && i.offset;
            !g && s && (e.offset || 0 === e.offset) && (g = e.offset), r(a, {
                adBreakId: h.getAdBreakId(g),
                adPlayId: h.getAdPlayId(g, o ? U(o, "getAdPosition") : void 0),
                id: h.getAdBreakId(g)
            });
            var c = h.getBid(g);
            if (c && r(a, c.getEventObject()), t) {
                var p = a.mediationLayerAdServer;
                if ("dfp" === p || "jwpdfp" === p) - 1 !== (t.getWrapperAdSystems() || []).concat(t.getAdSystem()).indexOf("SpotXJW") && a.bidders.forEach((function(e) {
                    e.winner = "SpotX" === e.name
                }));
                var f = h.userRequestContext;
                r(a, {
                    adposition: f && f.adPosition || a.adposition,
                    tag: h.getTag(t),
                    ima: {
                        ad: t,
                        userRequestContext: f
                    }
                })
            }
        }
        if (t) {
            r(a, {
                adtitle: t.getTitle(),
                adsystem: t.getAdSystem(),
                creativetype: t.getContentType(),
                duration: t.getDuration(),
                linear: t.isLinear() ? "linear" : "nonlinear",
                description: t.getDescription(),
                creativeAdId: t.getCreativeAdId(),
                adId: t.getAdId(),
                universalAdId: t.getUniversalAdIds().map((function(e) {
                    return {
                        universalAdIdRegistry: e.g,
                        universalAdIdValue: e.h
                    }
                })),
                advertiser: t.getAdvertiserName()
            });
            var v = t.getMediaUrl();
            v && (a.mediaFile = {
                file: v
            })
        }
        return void 0 !== i.offset && r(a, {
            adposition: a.adposition || i.offset,
            offset: i.offset
        }), i.tag && (a.tag = a.tag || i.tag), a
    }

    function ie(e) {
        return e.isBeforePlay() || 0 === e.getPosition() ? "pre" : e.isBeforeComplete() || e.getPosition() === e.getDuration() ? "post" : "mid"
    }
    var ae = function() {
            return null
        },
        se = function() {
            function e(i) {
                t(this, e);
                var a = i.player,
                    s = i.options,
                    r = i.instreamProvider,
                    n = i.view,
                    o = i.adsLoaderManager,
                    l = i.video,
                    d = i._qoe;
                a.utils.extend(this, a.Events), this.playlistItemManager = i, this.options = s, this.player = a, this.env = a.getEnvironment(), this.utils = a.utils, this.instreamProvider = r, this.view = n, this.initAdsManagerPromise = null, this.blockingInstreamPlayer = null, this.currentAd = null, this.timeoutAdStart = -1, this.progressIntervalId = -1, this.viewablePlayedTime = 0, this.lastPosition = null, this.adViewableImpressionHandler = ae, this.fullscreenIcon = a.getContainer().querySelector(".jw-icon-fullscreen"), this.adsLoaderManager = o, this.playbackProxy = {
                    currentTime: 0,
                    duration: 0
                }, this.video = l, this.paused = !1, this._qoe = d, this.debugConsoleLog = ae, s.debug && (this.debugConsoleLog = function() {
                    var e;
                    (e = console).log.apply(e, arguments)
                })
            }
            return a(e, [{
                key: "init",
                value: function(e, t, i) {
                    var a = this;
                    this.requestType = e, this.requestOptions = t;
                    var s = this.adsLoaderManager;
                    return this.initAdsManagerPromise = $().then((function() {
                        return a.destroyed() ? null : (a.debugConsoleLog("[JW DEBUG] Open adsLoaderManager"), s.open(e, t, a.video))
                    })).then((function(e) {
                        if (a.destroyed()) return null;
                        var t = s.getAdsManager(e, a.playbackProxy, a.options);
                        a.instreamProvider.setProxy(t), s.bindEvents({
                            AD_ERROR: a.adError.bind(a),
                            CONTENT_PAUSE_REQUESTED: a.pauseRequested.bind(a),
                            CONTENT_RESUME_REQUESTED: a.resumeRequested.bind(a),
                            LOG: a.adLog.bind(a),
                            STARTED: a.adStarted.bind(a),
                            IMPRESSION: a.adImpression.bind(a),
                            LINEAR_CHANGED: a.resize.bind(a),
                            CLICK: a.adClick.bind(a),
                            PAUSED: a.adPaused.bind(a),
                            RESUMED: a.adResumed.bind(a),
                            SKIPPED: a.adSkipped.bind(a),
                            USER_CLOSE: a.adUserClose.bind(a),
                            ALL_ADS_COMPLETED: a.allAdsCompleted.bind(a)
                        }, a), i && s.bindEvents({
                            LOADED: a.adLoaded.bind(a)
                        }, a);
                        var r = t.getCuePoints();
                        if (r.length && i) {
                            var n = r.filter((function(e) {
                                return e > 0
                            })).map((function(e) {
                                return {
                                    begin: e,
                                    text: a.options.cuetext
                                }
                            }));
                            a.player.addCues(n)
                        }
                        var o = a.player.getSafeRegion(!1),
                            l = o.width,
                            d = o.height,
                            u = a.getViewMode();
                        return s.init(l, d, u), t
                    })).catch((function(e) {
                        throw a.asyncError && a.asyncError(e), e
                    })), this.initAdsManagerPromise
                }
            }, {
                key: "getViewMode",
                value: function() {
                    var e = google.ima.ViewMode;
                    return this.player.getFullscreen() ? e.FULLSCREEN : e.NORMAL
                }
            }, {
                key: "prepareToPlayAd",
                value: function(e) {
                    if (!this.destroyed())
                        if (this.blockingInstreamPlayer) {
                            var t = e ? "" : this.options.loadingAd;
                            this.blockingInstreamPlayer.setText(t)
                        } else clearTimeout(this.timeoutAdStart), this.startBlocking(e), this.muteInstreamProvider()
                }
            }, {
                key: "requestAds",
                value: function(e) {
                    if (!this.destroyed()) {
                        this.debugConsoleLog("[JW DEBUG] Request ads to IMA SDK");
                        var t = this.adsLoaderManager.requestAds(this.requestType, this.requestOptions, this.options);
                        return this.startLoadingAds(e), t
                    }
                }
            }, {
                key: "muteInstreamProvider",
                value: function() {
                    var e = this.video.muted || this.player.getMute();
                    this.debugConsoleLog("[JW DEBUG] Setting mute on instreamProvider", e), this.instreamProvider.mute(e)
                }
            }, {
                key: "exitFullscreenOnInlineIOS",
                value: function() {
                    if (this.env.OS.iOS && !(this.env.Browser.version.major < 10)) {
                        var e = this.player.getContainer();
                        e.requestFullscreen || e.webkitRequestFullscreen || (this.debugConsoleLog("[JW DEBUG] Exiting fullscreen mode on iOS 10 or 11"), this.player.setFullscreen(!1), this.utils.style(this.fullscreenIcon, {
                            display: "none"
                        }))
                    }
                }
            }, {
                key: "startBlocking",
                value: function(e) {
                    var t = this;
                    if (!this.blockingInstreamPlayer && !this.destroyed()) {
                        this.debugConsoleLog("[JW DEBUG] JW Player startBlocking"), this.exitFullscreenOnInlineIOS(), this._qoe.tick("adLoading"), this.utils.addClass(this.player.getContainer(), "jw-flag-ads-googleima"), this.blockingInstreamPlayer = this.player.createInstream().init();
                        var i = e ? "" : this.options.loadingAd;
                        this.blockingInstreamPlayer.setText(i), this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider), this.view.adSetup(), clearTimeout(this.timeoutAdStart), this.timeoutAdStart = setTimeout((function() {
                            if (t.debugConsoleLog("[JW DEBUG] Ad request timeout"), !t.destroyed()) {
                                t.asyncError = null;
                                var e = {
                                    message: "Ad Request timeout after ".concat(t.options.requestTimeout, " milliseconds"),
                                    getErrorCode: function() {
                                        return 60004
                                    }
                                };
                                t.handleAdError(e, {}), t.asyncDiscardAdBreak()
                            }
                        }), this.options.requestTimeout)
                    }
                }
            }, {
                key: "stopBlocking",
                value: function() {
                    this.destroyed() || (this.debugConsoleLog("[JW DEBUG] JW Player stopBlocking"), this.player.off("viewable", null, this), clearTimeout(this.timeoutAdStart), this.utils.style(this.fullscreenIcon, {
                        display: ""
                    }), this.utils.removeClass(this.player.getContainer(), ["jw-flag-ads-vpaid", "jw-flag-ads-vpaid-controls", "jw-flag-ads-googleima"]), this.blockingInstreamPlayer && (this.instreamProvider.off(), this.blockingInstreamPlayer.destroy(), this.blockingInstreamPlayer = null))
                }
            }, {
                key: "pauseRequested",
                value: function(e) {
                    var t = this;
                    this.prepareToPlayAd();
                    var i = e && e.getAd();
                    this.blockingInstreamPlayer.on("destroyed", (function() {
                        t.player.trigger("adBreakEnd", te(t.playlistItemManager, i))
                    }));
                    var a = te(this.playlistItemManager, i);
                    this.player.trigger("adBreakStart", a), this.player.trigger("adItem", a)
                }
            }, {
                key: "resumeRequested",
                value: function() {
                    this.debugConsoleLog("[JW DEBUG] ResumeRequest from IMA SDK"), this.currentAd && this.currentAd.isLinear() && this.finishAd(), this.blockingInstreamPlayer && this.view.adTakeDown(), this.stopBlocking()
                }
            }, {
                key: "finishAd",
                value: function() {
                    this.currentAd && (clearInterval(this.progressIntervalId), this.viewablePlayedTime = 0, this.currentAd = null)
                }
            }, {
                key: "discardAdBreak",
                value: function(e) {
                    !e && this.adsLoaderManager && (e = this.adsLoaderManager.adsManager), !this.destroyed() && e && (0 === e.getCuePoints().length ? this.destroy() : (e.discardAdBreak(), e.stop()))
                }
            }, {
                key: "asyncDiscardAdBreak",
                value: function() {
                    var e = this;
                    this.initAdsManagerPromise && this.initAdsManagerPromise.then((function(t) {
                        return e.discardAdBreak(t)
                    })).catch(ae)
                }
            }, {
                key: "pause",
                value: function(e) {
                    var t = e.reason;
                    if (!this.destroyed()) {
                        var i = this.adsLoaderManager.adsManager;
                        i && (this.viewablePlayedTime = 0, this.debugConsoleLog("[JW DEBUG] JW Player pause ad"), this.playlistItemManager.reason = t || "external", i.pause())
                    }
                }
            }, {
                key: "resume",
                value: function(e) {
                    var t = e.reason;
                    if (!this.destroyed()) {
                        var i = this.adsLoaderManager.adsManager;
                        i && (this.debugConsoleLog("[JW DEBUG] JW Player resume ad"), this.playlistItemManager.reason = t || "external", i.resume())
                    }
                }
            }, {
                key: "startLoadingAds",
                value: function(e) {
                    var t = this;
                    if (this.initAdsManagerPromise) {
                        this.player.off("beforePlay", null, this);
                        var i = !!e;
                        this.prepareToPlayAd(i), this._qoe.tick("adBeforePlay"), this.initAdsManagerPromise.then((function() {
                            if (!t.destroyed()) {
                                var e = t.adsLoaderManager;
                                if (!e.initialized) {
                                    var i = t.player.getSafeRegion(!1),
                                        a = i.width,
                                        s = i.height,
                                        r = t.getViewMode();
                                    t.debugConsoleLog("[JW DEBUG] adsManager init with", a, s, r), e.init(a, s, r)
                                }
                                t.debugConsoleLog("[JW DEBUG] Start adsManager"), e.start()
                            }
                        })).catch(ae)
                    }
                }
            }, {
                key: "time",
                value: function(e) {
                    this.playbackProxy.currentTime = e.position, e.duration >= e.position ? this.playbackProxy.duration = e.duration : this.playbackProxy.duration = 1 / 0
                }
            }, {
                key: "beforeComplete",
                value: function() {
                    var e = this.adsLoaderManager.adsManager;
                    e && e.getCuePoints().indexOf(-1) > -1 && this.prepareToPlayAd(), this.adsLoaderManager.unbindEvents(["CONTENT_RESUME_REQUESTED"]), this.playbackProxy.currentTime = this.playbackProxy.duration, this.debugConsoleLog("[JW DEBUG] Call contentComplete on IMA SDK"), this.adsLoaderManager.contentComplete()
                }
            }, {
                key: "resize",
                value: function() {
                    var e = this.currentAd,
                        t = this.adsLoaderManager.adsManager;
                    if (t) {
                        var i = e && !e.isLinear(),
                            a = this.player.getSafeRegion(i);
                        if (i) {
                            var s = e.getHeight();
                            s = this.player.getFullscreen() ? a.height / 2 : Math.max(100, s + 10), this.debugConsoleLog("[JW DEBUG] Resize adsManager", a.width, s, this.getViewMode()), t.resize(a.width, s, this.getViewMode()), this.view.resizeNonLinear(s)
                        } else this.debugConsoleLog("[JW DEBUG] Resize adsManager", a.width, a.height, this.getViewMode()), t.resize(a.width, a.height, this.getViewMode()), this.view.resizeLinear()
                    }
                }
            }, {
                key: "setState",
                value: function(e, t, i) {
                    if (e.isLinear()) {
                        var a = te(this.playlistItemManager, e);
                        if (a.newstate = t, i && (a.oldstate = i), null !== this.playlistItemManager.reason) a["playing" === t ? "playReason" : "pauseReason"] = this.playlistItemManager.reason, this.playlistItemManager.reason = null;
                        this.instreamProvider.trigger("state", a)
                    }
                }
            }, {
                key: "progressInterval",
                value: function(e, t) {
                    var i = this;
                    if (clearInterval(this.progressIntervalId), t) {
                        var a = e.getAdId(),
                            s = -1,
                            r = this.options.admessage || "",
                            n = this.options.podmessage || "",
                            o = new RegExp("__AD_POD_CURRENT__", "g"),
                            l = new RegExp("__AD_POD_LENGTH__", "g");
                        this.progressIntervalId = setInterval((function() {
                            if (i.currentAd && i.currentAd.getAdId() === a) {
                                var e = t.getRemainingTime();
                                if (!(isNaN(e) || e <= 0) && s !== e) {
                                    s = e;
                                    var d = i.currentAd.getDuration(),
                                        u = d - e,
                                        h = Math.round(d - u);
                                    if (i.blockingInstreamPlayer) {
                                        var g = r.replace(/(\b)xx(s?\b)/g, "$1".concat(h, "$2")),
                                            c = U(i.currentAd, "getAdPodInfo");
                                        if (c) {
                                            var p = U(c, "getTotalAds");
                                            if (p > 1) {
                                                var f = U(c, "getAdPosition");
                                                g = n.replace(o, f).replace(l, p) + "  " + g
                                            }
                                        }
                                        i.blockingInstreamPlayer.setText(g), i.instreamProvider.trigger("time", {
                                            duration: d,
                                            position: u
                                        })
                                    }
                                    if (d > 0) {
                                        var v = te(i.playlistItemManager, i.currentAd);
                                        v.position = u, v.duration = d, i.adViewableImpressionHandler(v), i.trigger("adTime", v)
                                    }
                                }
                            } else clearInterval(i.progressIntervalId)
                        }), 250)
                    }
                }
            }, {
                key: "adLoaded",
                value: function(e) {
                    var t = this.currentAd = e.getAd(),
                        i = te(this.playlistItemManager, t);
                    this.trigger("adRequest", i)
                }
            }, {
                key: "adStarted",
                value: function(e) {
                    this.paused = !1;
                    var t = this.currentAd = e.getAd(),
                        i = te(this.playlistItemManager, t);
                    this.trigger(f, i)
                }
            }, {
                key: "adImpression",
                value: function(e) {
                    var t = this;
                    this.view.adSetup();
                    var i = e.getAd(),
                        a = i.isLinear(),
                        s = a && (i.getContentType().indexOf("image") >= 0 || -1 === i.getDuration()),
                        r = this.isVpaidAd(i),
                        n = a && r && this.options.vpaidcontrols;
                    this.currentAd = i, this.blockingInstreamPlayer && this.blockingInstreamPlayer.setSkipOffset(i.getSkipTimeOffset()), this.adsLoaderManager.bindEvents({
                        COMPLETE: this.adComplete.bind(this)
                    }), r && this.env.OS.mobile && this.options.autoplayadsmuted && this.adsLoaderManager.bindEvents({
                        VOLUME_CHANGED: function() {
                            t.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"]), t.player.setMute(0 === t.adsLoaderManager.adsManager.getVolume())
                        }
                    }), s ? this.startBlocking() : a || this.stopBlocking(), this.utils.toggleClass(this.player.getContainer(), "jw-flag-ads-vpaid", a && (s || r)), this.utils.toggleClass(this.player.getContainer(), "jw-flag-ads-vpaid-controls", n), this.resize(), this.muteInstreamProvider(), clearTimeout(this.timeoutAdStart);
                    var o = this.adsLoaderManager.adsManager;
                    this.progressInterval(i, o);
                    var l = te(this.playlistItemManager, i),
                        d = void 0 === l.podcount || 1 === l.sequence;
                    "pre" === l.adposition && d && (this._qoe.tick("adImpression"), l.timeLoading = this._qoe.between("adBeforePlay", "adImpression")), a && !d && this.trigger("adItem", l), this.trigger("adImpression", l), this.setupViewableListener(), this.setState(i, "playing", "buffering")
                }
            }, {
                key: "setupViewableListener",
                value: function() {
                    this.player.off("viewable", this.viewableHandler, this), this.player.on("viewable", this.viewableHandler, this), this.viewableHandler({
                        viewable: this.player.getViewable()
                    })
                }
            }, {
                key: "adViewableHandler",
                value: function(e) {
                    var t = e.position;
                    null === this.lastPosition && (this.lastPosition = t);
                    var i = t - this.lastPosition;
                    if (this.lastPosition = t, i = Math.min(Math.max(0, i), 4), this.viewablePlayedTime += i, this.viewablePlayedTime >= 2) {
                        this.player.off("viewable", this.viewableHandler, this), this.adViewableImpressionHandler = ae;
                        var a = te(this.playlistItemManager, this.currentAd);
                        this.trigger("adViewableImpression", a)
                    }
                }
            }, {
                key: "viewableHandler",
                value: function(e) {
                    e.viewable ? (this.viewablePlayedTime = 0, this.lastPosition = null, this.adViewableImpressionHandler = this.adViewableHandler) : this.adViewableImpressionHandler = ae
                }
            }, {
                key: "adComplete",
                value: function(e) {
                    this.finishAd();
                    var t = e.getAd(),
                        i = te(this.playlistItemManager, t);
                    this.trigger("adComplete", i), this.adsLoaderManager.unbindEvents(["VOLUME_CHANGED"])
                }
            }, {
                key: "adClick",
                value: function(e) {
                    var t = this.adsLoaderManager.adsManager,
                        i = e.getAd();
                    this.playlistItemManager.reason = "clickthrough", this.isVpaidAd(i) || (this.debugConsoleLog("[JW DEBUG] Ad paused due to ad click"), t.pause());
                    var a = te(this.playlistItemManager, i);
                    this.trigger("adClick", a)
                }
            }, {
                key: "adPaused",
                value: function(e) {
                    if (!this.paused) {
                        this.paused = !0;
                        var t = e.getAd();
                        null === this.playlistItemManager.reason && this.isVpaidAd(t) && (this.playlistItemManager.reason = "external"), this.setState(t, "paused")
                    }
                }
            }, {
                key: "adResumed",
                value: function(e) {
                    if (this.paused) {
                        this.paused = !1;
                        var t = e.getAd();
                        null === this.playlistItemManager.reason && this.isVpaidAd(t) && (this.playlistItemManager.reason = "external"), this.setState(t, "playing")
                    }
                }
            }, {
                key: "adSkipped",
                value: function(e) {
                    this.debugConsoleLog("[JW DEBUG] AdSkipped"), this.adsLoaderManager.unbindEvents(["COMPLETE", "VOLUME_CHANGED"]), this.finishAd();
                    var t = te(this.playlistItemManager, e.getAd());
                    this.trigger("adSkipped", t)
                }
            }, {
                key: "adUserClose",
                value: function(e) {
                    this.debugConsoleLog("[JW DEBUG] AdUserClose"), this.currentAd && this.currentAd.isLinear() && -1 === this.currentAd.getDuration() ? this.adSkipped(e) : (this.adsLoaderManager.unbindEvents(["COMPLETE", "VOLUME_CHANGED"]), this.finishAd())
                }
            }, {
                key: "allAdsCompleted",
                value: function() {
                    this.resumeRequested(), this.view.adTakeDown(), this.stopAdsManager(), this.trigger("allAdsComplete", {})
                }
            }, {
                key: "stopAdsManager",
                value: function() {
                    var e = this;
                    this.initAdsManagerPromise.then((function(t) {
                        e.destroyed() || (e.debugConsoleLog("[JW DEBUG] Stop IMA SDK adsManager"), t.stop(), t.destroy(), e.initAdsManagerPromise = null)
                    })).catch(ae)
                }
            }, {
                key: "adLog",
                value: function(e) {
                    this.debugConsoleLog("[JW DEBUG]", e.type, e);
                    var t = U(e, "getAdData"),
                        i = t && t.adError;
                    if (i && 402 === i.getVastErrorCode()) this.handleAdError(i, e);
                    else if (i) {
                        var a = U(e, "getAd");
                        this.trigger(p, ee(this.playlistItemManager, i, a, {
                            jwpseg: this.adsLoaderManager.getJwpSeg(a)
                        }))
                    }
                }
            }, {
                key: "adError",
                value: function(e) {
                    var t = e.getError();
                    this.handleAdError(t, e)
                }
            }, {
                key: "asyncError",
                value: function(e) {
                    var t = this;
                    if (!this.destroyed())
                        if (clearTimeout(this.timeoutAdStart), this.timeoutAdStart = setTimeout((function() {
                                return t.destroy()
                            }), 0), e && e.getError) {
                            var i = e.getError();
                            this.handleAdError(i, e, !0)
                        } else e.target && e.target.src ? console.error("Failed to load " + e.target.src) : console.error(e)
                }
            }, {
                key: "handleAdError",
                value: function(e, t, i) {
                    var a = this;
                    this.options.debug && console.error(e);
                    var s = U(t, "getUserRequestContext"),
                        r = s ? s.offset : void 0,
                        n = ee(this.playlistItemManager, e, null, {
                            offset: r
                        });
                    this.player && 0 === this.player.getPosition() && (this._qoe.tick("adError"), n.timeLoading = this._qoe.between("adBeforePlay", "adError")), this.trigger(p, n), this.destroyed() || (900 === e.getErrorCode() || i ? (clearTimeout(this.timeoutAdStart), this.timeoutAdStart = setTimeout((function() {
                        return a.destroy()
                    }), 0)) : (this.stopBlocking(), this.view.adTakeDown()))
                }
            }, {
                key: "isVpaidAd",
                value: function(e) {
                    var t = e.getContentType();
                    return "application/javascript" === t || "application/x-shockwave-flash" === t
                }
            }, {
                key: "destroy",
                value: function() {
                    if (this.debugConsoleLog("[JW DEBUG] JW Player destroy AdsPlayer"), this.off(), !this.destroyed()) {
                        this.player.off(null, null, this), clearTimeout(this.timeoutAdStart), clearInterval(this.progressIntervalId), this.currentAd = null, this.options = null, this.video = null, this.initAdsManagerPromise = null;
                        var e = this.adsLoaderManager;
                        e && (e.reset(), this.adsLoaderManager = null), this.blockingInstreamPlayer && this.stopBlocking(), this.instreamProvider.off(), this.instreamProvider.setProxy(null), this.instreamProvider = null, this.view.adTakeDown(), this.view = null, this.player = null
                    }
                }
            }, {
                key: "destroyed",
                value: function() {
                    return !this.player
                }
            }]), e
        }(),
        re = function() {
            return null
        },
        ne = function() {
            function e(i, a, s, r, n, o, l, d, u) {
                t(this, e), s.utils.extend(this, s.Events), this.item = i, this.baseConfig = d, this.defaultSchedule = u, this.options = a, this.player = s, this.env = s.getEnvironment(), this.utils = s.utils, this.instreamProvider = r, this.view = n, this.bidding = s.getPlugin("bidding"), this.bids = [], this.bidsPromises = [], this.midrollPromises = [], this.adsLoaderManager = o, this.video = l, this.hasPreroll = !0, this.reason = null, this._qoe = new s.utils.Timer, this.adsParser = new z(s, s.utils, a)
            }
            return a(e, [{
                key: "startBid",
                value: function(e, t, i) {
                    var a = this,
                        s = this.player,
                        r = t.offset,
                        n = s.getConfig(),
                        o = V(s, this.item),
                        l = this.bidding.createNewBid({
                            id: this.adsLoaderManager.getAdPlayId(r),
                            tag: t.tag,
                            offset: r,
                            placement: D(n),
                            jwpseg: o
                        }, {
                            getURLParts: O
                        });
                    this.bids.push(l);
                    var d = Promise.resolve().then((function() {
                        return a.adsLoaderManager.setBid(r, l), a.trigger("adBidRequest", te(a, null, {
                            jwpseg: o,
                            offset: r
                        })), l.init(), l.start().then((function(t) {
                            var s = t.result;
                            if (a.destroyed()) return null;
                            s && (s.jwpseg = o), e.addBidsResponse(s, i), a.trigger("adBidResponse", te(a, null, {
                                offset: r
                            }))
                        }))
                    }));
                    this.bidsPromises.push(d)
                }
            }, {
                key: "init",
                value: function(e, t) {
                    var i = this,
                        a = t.isScheduleVMAP();
                    this.isVMAP = a || this.defaultSchedule.isVMAP();
                    var s = t.config.bids;
                    if (s)
                        if (this.bidding) {
                            var r = t.getSchedule();
                            if ("string" == typeof r) this.startBid(t, {
                                tag: r,
                                offset: "pre"
                            });
                            else {
                                var n = parseInt(s.bidOnBreaks);
                                n = n > 0 ? n : 1 / 0, Object.keys(r).slice(0, n).forEach((function(e) {
                                    i.startBid(t, r[e], e)
                                }))
                            }
                        } else Promise.resolve().then((function() {
                            if (i.destroyed()) return null;
                            var e = ee(i, {
                                message: "bidding plugin failed to load",
                                adErrorCode: 60008
                            });
                            i.trigger(p, e)
                        })).catch(re);
                    this.attachEventListeners(), this.schedulePromise = Promise.all(this.bidsPromises.concat($())).then((function() {
                        if (!i.destroyed()) return i.adsParser.normalize(t.getSchedule()).then((function(s) {
                            if (i.schedule = s, a) s.setVMAP(t.getSchedule()), i.initAdsPlayer(e, t, !0);
                            else {
                                var r = s.getMidRolls(),
                                    n = [];
                                r.length && r.forEach((function(e) {
                                    "nonlinear" !== e._type && n.push({
                                        begin: e.offset,
                                        text: i.options.cuetext || "Advertisement"
                                    })
                                })), i.player.addCues(n)
                            }
                            return e
                        }))
                    }))
                }
            }, {
                key: "attachEventListeners",
                value: function() {
                    var e = this.player;
                    e.once("beforePlay", this.beforePlay, this), e.on("all", this.onAll.bind(this), this)
                }
            }, {
                key: "onAll",
                value: function(e, t) {
                    "time" === e ? this.checkMidrolls(t) : "beforeComplete" === e && this.beforeComplete(t)
                }
            }, {
                key: "playPreloaded",
                value: function(e) {
                    var t = this,
                        i = this.utils.extend({}, this.baseConfig);
                    i.ad = {
                        xml: e
                    }, i.adPosition = ie(this.player);
                    var a = new K(i, this.utils);
                    this.adsPlayer && this.adsPlayer.requestType && this.adsPlayer.destroy(), this.initAdsPlayer(u, a), $().then((function() {
                        t.adsPlayer.requestAds()
                    }))
                }
            }, {
                key: "loadPreroll",
                value: function() {
                    var e = this;
                    return this.prerollPromise = this.prerollPromise || this.schedulePromise.then((function() {
                        return e.loadPromise(e.schedule.getPreRoll())
                    })), this.prerollPromise
                }
            }, {
                key: "playPreroll",
                value: function(e) {
                    var t = this;
                    this.schedulePromise && this.schedulePromise.then((function() {
                        if (t.prerollPromise) t.prerollPromise.then((function(e) {
                            e && (t.offset = 0, t.playPreloaded(e))
                        }));
                        else {
                            var i = t.schedule.getPreRoll();
                            t.playAd(i, e)
                        }
                    }))
                }
            }, {
                key: "playMidrollAtIndex",
                value: function(e) {
                    var t = this;
                    if (this.midrollPromises[e]) this.midrollPromises[e].then((function(i) {
                        t.offset = t.schedule.getMidRollAtIndex(e).offset, t.playPreloaded(i)
                    }));
                    else {
                        this.adsPlayer && this.adsPlayer.requestType && this.adsPlayer.destroy();
                        var i = this.schedule.getMidRollAtIndex(e);
                        this.playAd(i)
                    }
                }
            }, {
                key: "loadPromise",
                value: function(e) {
                    var t = this;
                    if (!e || "string" != typeof e.tag) return null;
                    var i = e.tag;
                    return this.trigger("adRequest", te(this, null, e)), new Promise((function(e, a) {
                        t.player.utils.ajax({
                            url: i,
                            withCredentials: !0,
                            retryWithoutCredentials: !0,
                            requireValidXML: !0,
                            timeout: 5e3,
                            requestFilter: t.options.requestFilter
                        }, e, (function(e, t, i, s) {
                            return a(s)
                        }))
                    })).then((function(e) {
                        return e.responseText
                    })).catch(this.player.utils.noop)
                }
            }, {
                key: "loadMidrollAtIndex",
                value: function(e) {
                    var t = this;
                    return this.midrollPromises[e] = this.midrollPromises[e] || this.schedulePromise.then((function() {
                        return t.loadPromise(t.schedule.getMidRollAtIndex(e))
                    })), this.midrollPromises[e]
                }
            }, {
                key: "loadPostroll",
                value: function() {
                    var e = this;
                    this.postrollPromise = this.postrollPromise || this.schedulePromise.then((function() {
                        return e.loadPromise(e.schedule.getPostRoll())
                    }))
                }
            }, {
                key: "playPostroll",
                value: function() {
                    var e = this;
                    if (this.postrollPromise) this.postrollPromise.then((function(t) {
                        e.offset = -1, e.playPreloaded(t)
                    }));
                    else {
                        this.adsPlayer && this.adsPlayer.requestType && this.adsPlayer.destroy();
                        var t = this.schedule.getPostRoll();
                        this.playAd(t)
                    }
                }
            }, {
                key: "playAd",
                value: function(e, t) {
                    var i = this;
                    if (e) {
                        var a = this.utils.extend({}, this.baseConfig);
                        a.ad = e, this.offset = e.offset || this.offset, a.adPosition = ie(this.player);
                        var s = new K(a, this.utils);
                        this.initAdsPlayer(u, s), this.adsPlayer.startBlocking(), this.schedulePromise.then((function() {
                            i.trigger("adRequest", te(i, null, e)), i.adsPlayer.requestAds(t)
                        }))
                    }
                }
            }, {
                key: "beforePlay",
                value: function(e) {
                    var t = this;
                    this.adsLoaderManager.initializeDisplay({
                        restrict: !0
                    }), this.reason = e && e.playReason ? e.playReason : "external", this.createAdsPlayer(), this.adsPlayer.startBlocking(), this.schedulePromise.then((function() {
                        t.isVMAP ? t.adsPlayer.requestAds() : t.defaultSchedule.getPreRoll() || t.adsPlayer.requestType === d ? t.schedulePromise.then((function() {
                            t.playPreroll(e)
                        })) : t.adsPlayer.stopBlocking()
                    }))
                }
            }, {
                key: "createAdsPlayer",
                value: function() {
                    var e = this;
                    this.adsPlayer && !this.adsPlayer.destroyed() || (this.adsPlayer = new se(this), this.adsPlayer.on("all", (function(t, i) {
                        if ("allAdsComplete" === t) return e.adsPlayer.destroy(), void(e.adsPlayer = null);
                        e.trigger(t, i)
                    })))
                }
            }, {
                key: "initAdsPlayer",
                value: function(e, t, i) {
                    var a = this;
                    this.createAdsPlayer(), this.adsPlayer.init(e, t, i).then((function(e) {
                        (a.player.trigger("adsManager", {
                            adsManager: e,
                            videoElement: a.video
                        }), i || t.isScheduleVMAP()) && (e.getCuePoints().filter((function(e) {
                            return 0 === e
                        })).length || a.adsPlayer.stopBlocking())
                    })).catch(this.utils.noop), (i || t.isScheduleVMAP()) && this.player.once("beforePlay", (function(e) {
                        a.adsPlayer.startBlocking(!0), a.adsPlayer.requestAds(e)
                    }), this).on("time", (function(e) {
                        return a.adsPlayer.time(e)
                    }), this.adsPlayer).on("beforeComplete", (function() {
                        return a.adsPlayer.beforeComplete()
                    }), this.adsPlayer), this.player.on("resize", (function() {
                        return a.adsPlayer.resize()
                    }), this.adsPlayer).on("fullscreen", (function() {
                        return a.adsPlayer.resize()
                    }), this.adsPlayer)
                }
            }, {
                key: "beforeComplete",
                value: function() {
                    !this.schedule.isVMAP() && this.adsPlayer && this.adsPlayer.destroy();
                    var e = this.schedule.getPostRoll();
                    e && this.playAd(e)
                }
            }, {
                key: "pause",
                value: function(e) {
                    this.adsPlayer && this.adsPlayer.pause(e)
                }
            }, {
                key: "resume",
                value: function(e) {
                    this.adsPlayer && this.adsPlayer.resume(e)
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.adsLoaderManager;
                    e && (e.reset(), this.adsLoaderManager = null), this.adsPlayer && this.adsPlayer.destroy(), this.player.off(null, null, this), this.schedulePromise = null, this.adsPlayer = null
                }
            }, {
                key: "discardAdBreak",
                value: function() {
                    this.adsPlayer && this.adsPlayer.discardAdBreak()
                }
            }, {
                key: "checkMidrolls",
                value: function(e) {
                    if (0 !== e.duration) {
                        var t = this.schedule,
                            i = t.getNextMidrollIndex(this.lastTimeEvent, e.position, e.duration);
                        if (this.lastTimeEvent = e.position, null !== i) this.playMidrollAtIndex(i);
                        else if (this.baseConfig.preloadAds) {
                            var a = e.position + 5,
                                s = t.peek(e.position, a, e.duration);
                            null !== s && s >= 0 ? this.loadMidrollAtIndex(s) : -1 === s && this.loadPostroll()
                        }
                    }
                }
            }, {
                key: "destroyed",
                value: function() {
                    return null === this.adsPlayer
                }
            }]), e
        }(),
        oe = function() {
            function e(i, a) {
                t(this, e), this.adsLoader = null, this.adDisplayContainer = null, this.displayInitialized = !1, this.initialized = !1, this.started = !1, this.adsRequest = null, this.userRequestContext = null, this.adsManager = null, this.adsLoaderEvents = {}, this.adsManagerEvents = {}, this.container = a, this.schedule = null, this.breakMap = {}, this.player = i
            }
            return a(e, [{
                key: "getVpaidMode",
                value: function(e) {
                    var t = google.ima.ImaSdkSettings.VpaidMode;
                    return "disabled" === e || "none" === e ? t.DISABLED : "enabled" === e ? t.ENABLED : t.INSECURE
                }
            }, {
                key: "initializeDisplay",
                value: function(e) {
                    this.adDisplayContainer && !this.displayInitialized && (this.adDisplayContainer.initialize(), e && e.restrict && (this.displayInitialized = !0))
                }
            }, {
                key: "contentComplete",
                value: function() {
                    if (null !== this.adsRequest) {
                        var e = this.adsLoader;
                        e && e.contentComplete(), this.adsRequest = null
                    }
                }
            }, {
                key: "reset",
                value: function(e) {
                    var t = this;
                    this.userRequestContext = null;
                    var i = this.adsManager;
                    i && (i.destroy(), this.adsManager = null), this.contentComplete(!0), e && (this.schedule = null, this.breakMap = {}), Object.keys(this.adsLoaderEvents).forEach((function(e) {
                        t.adsLoader.removeEventListener(e, t.adsLoaderEvents[e])
                    })), this.adsLoaderEvents = {}, this.adsManagerEvents = {}, this.initialized = this.started = !1
                }
            }, {
                key: "prepare",
                value: function(e) {
                    return null === this.adsLoader && (this.adDisplayContainer = new google.ima.AdDisplayContainer(this.container, e), this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer)), this.adsLoader
                }
            }, {
                key: "open",
                value: function(e, t, i) {
                    var a = this,
                        s = google.ima.settings;
                    s.setDisableCustomPlaybackForIOS10Plus(!0);
                    var r = t.locale || this.player.getConfig().language;
                    s.setLocale(r), t.maxRedirects >= 0 && s.setNumRedirects(t.maxRedirects);
                    var n = this.prepare(i);
                    return new Promise((function(e, t) {
                        n.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, t, !1), n.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e, !1), a.adsLoaderEvents[google.ima.AdErrorEvent.Type.AD_ERROR] = t, a.adsLoaderEvents[google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED] = e
                    }))
                }
            }, {
                key: "requestAds",
                value: function(e, t, i) {
                    if (null === this.adsRequest) {
                        var a = t.getSchedule();
                        if (a) {
                            var s = this.player,
                                r = this.adsRequest = new google.ima.AdsRequest,
                                n = this.userRequestContext = {
                                    requestType: e,
                                    vpaidMode: t.vpaidmode,
                                    playerVersion: s.version.split("+")[0],
                                    adPosition: t.adPosition
                                };
                            r.setAdWillAutoPlay(!1 !== s.getConfig().autostart), r.setAdWillPlayMuted(s.getMute());
                            var o = s.getSafeRegion(!1);
                            r.linearAdSlotWidth = o.width, r.linearAdSlotHeight = o.height;
                            var l = s.getSafeRegion(!0);
                            r.nonLinearAdSlotWidth = l.width, r.nonLinearAdSlotHeight = l.height, r.forceNonLinearFullSlot = i.forceNonLinearFullSlot, r.vastLoadTimeout = i.vastLoadTimeout;
                            var d, u, h, g = this.adsLoader.getSettings(),
                                c = this.getVpaidMode(n.vpaidMode);
                            if (g.setPlayerType("jwplayer"), g.setPlayerVersion(n.playerVersion), g.setVpaidMode(c), "string" == typeof a) r.adTagUrl = n.adTagUrl = a.trim();
                            else if (a.adm || a.xml) r.adsResponse = n.adsResponse = a.adm || a.xml;
                            else if (a.tag) r.adTagUrl = n.adTagUrl = a.tag.trim();
                            else {
                                var p = a._adQueue && a._adQueue.length ? (d = a._adQueue, u = document.implementation.createDocument("http://www.w3.org/2001/XMLSchema-instance", "VAST", null), (h = u.documentElement).setAttribute("version", "2.0"), d.forEach((function(e, t) {
                                    var i = u.createElement("Ad");
                                    i.setAttribute("id", t);
                                    var a = u.createElement("Wrapper"),
                                        s = u.createElement("Extensions"),
                                        r = u.createElement("Extension");
                                    r.setAttribute("type", "waterfall"), r.setAttribute("fallback_index", t);
                                    var n = u.createElement("VASTAdTagURI");
                                    n.appendChild(u.createCDATASection(e)), i.appendChild(a), a.appendChild(n), a.appendChild(s), s.appendChild(r), h.appendChild(i)
                                })), h.outerHTML || (new XMLSerializer).serializeToString(h)) : a.xml;
                                r.adsResponse = n.adsResponse = p
                            }
                            this.adsLoader.requestAds(r, n)
                        }
                    }
                }
            }, {
                key: "getAdsManager",
                value: function(e, t, i) {
                    var a = new google.ima.AdsRenderingSettings;
                    a.enablePreloading = i.enablePreloading || i.preloadAds, a.loadVideoTimeout = i.loadVideoTimeout, a.uiElements = null, a.useStyledNonLinearAds = !0;
                    var s = this.player.getConfig().bandwidthEstimate;
                    return a.bitrate = s ? s / 1e3 : -1, this.adsManager = e.getAdsManager(t, a), this.userRequestContext = e.getUserRequestContext(), this.adsManager
                }
            }, {
                key: "init",
                value: function(e, t, i) {
                    null !== this.adsManager && !1 === this.initialized && (this.adsManager.init(e, t, i), this.initialized = !0)
                }
            }, {
                key: "start",
                value: function() {
                    null !== this.adsManager && !1 === this.started && (this.initializeDisplay({
                        restrict: !0
                    }), this.adsManager.start(), this.started = !0)
                }
            }, {
                key: "bindEvents",
                value: function(e) {
                    var t = this,
                        i = google.ima.AdEvent.Type,
                        a = google.ima.AdErrorEvent.Type;
                    Object.keys(e).forEach((function(s) {
                        var r = i[s] || a[s],
                            n = t.adsManagerEvents[r];
                        n && t.adsManager.removeEventListener(r, n), t.adsManager.addEventListener(r, e[s], !1), t.adsManagerEvents[r] = e[s]
                    }))
                }
            }, {
                key: "unbindEvents",
                value: function(e) {
                    var t = this,
                        i = google.ima.AdEvent.Type,
                        a = google.ima.AdErrorEvent.Type;
                    e.forEach((function(e) {
                        var s = i[e] || a[e],
                            r = t.adsManagerEvents[s];
                        r && (t.adsManager.removeEventListener(s, r), delete t.adsManagerEvents[s])
                    }))
                }
            }, {
                key: "getTag",
                value: function(e) {
                    if ("string" == typeof this.schedule) return this.schedule;
                    var t = U(e, "getAdPodInfo");
                    if (t) {
                        var i = this.breakMap[U(t, "getTimeOffset")] || {};
                        if (i.tag) return i.tag
                    }
                    return this.userRequestContext ? this.userRequestContext.adTagUrl || this.userRequestContext.adsResponse || "" : (console.error("invalid request context", this.userRequestContext), "")
                }
            }, {
                key: "getAdBreakId",
                value: function(e) {
                    var t = this.player.utils,
                        i = q(e, t);
                    return this.breakMap[i] = this.breakMap[i] || {}, this.breakMap[i].adBreakId = this.breakMap[i].adBreakId || t.genId(12), this.breakMap[i].adBreakId
                }
            }, {
                key: "getAdPlayId",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        i = this.player.utils,
                        a = q(e, i);
                    return this.breakMap[a] = this.breakMap[a] || {}, this.breakMap[a].adPlayId = this.breakMap[a].adPlayId || {
                        1: i.genId(12)
                    }, this.breakMap[a].adPlayId[t] = this.breakMap[a].adPlayId[t] || i.genId(12), this.breakMap[a].adPlayId[t]
                }
            }, {
                key: "getJwpSeg",
                value: function(e) {
                    var t = U(e, "getAdPodInfo");
                    if (t) {
                        var i = U(t, "getTimeOffset");
                        return this.breakMap[i] && this.breakMap[i].jwpseg
                    }
                    return null
                }
            }, {
                key: "getTimeoffsetFromPosition_",
                value: function() {
                    var e, t = this.player.getPosition(),
                        i = 1 / 0;
                    return Object.keys(this.breakMap).forEach((function(a) {
                        var s = t - a;
                        s >= 0 && s < i && (e = a, i = s)
                    })), i === 1 / 0 ? -1 : e
                }
            }, {
                key: "skipAd",
                value: function() {
                    this.adsManager && this.adsManager.skip()
                }
            }, {
                key: "getBid",
                value: function(e) {
                    var t = q(e, this.player.utils);
                    return this.breakMap[t] ? this.breakMap[t].bid : null
                }
            }, {
                key: "setBid",
                value: function(e, t) {
                    var i = q(e, this.player.utils);
                    this.breakMap[i] = this.breakMap[i] || {}, this.breakMap[i].bid = t
                }
            }]), e
        }();
    ! function(e) {
        if (e && "undefined" != typeof window) {
            var t = document.createElement("style");
            t.setAttribute("media", "screen"), t.innerHTML = e, document.head.appendChild(t)
        }
    }(".jw-plugin-googima{overflow:hidden;width:100%;height:100%;display:block;visibility:hidden;pointer-events:none;opacity:0}.jw-plugin-googima.jw-ad-instream{visibility:visible;display:block;pointer-events:all;opacity:1}.jw-plugin-googima.jw-ad-instream .jw-ads-view>:not(div),.jw-plugin-googima.jw-ad-instream .jw-ads-view>div:not(:empty){width:100%;height:100%}.jw-plugin-googima.jw-ad-linear{top:0;left:0;bottom:0}.jw-plugin-googima.jw-ad-non-linear{top:auto}.jw-plugin-googima .jw-ads-view{position:absolute;width:100%;height:100%}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display,.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-display-icon-display .jw-icon-display{pointer-events:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{background:0 0!important;pointer-events:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-icon{pointer-events:all}.jwplayer.jw-flag-ads-googleima .jw-controls-backdrop{display:none}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume,.jwplayer.jw-flag-ads-googleima.jw-ie .jw-svg-icon{background:rgba(0,0,0,.25);border-radius:3px}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume{margin:0 10px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume,.jwplayer.jw-flag-ads-googleima.jw-ie .jw-svg-icon{background:0 0;border-radius:0}.jwplayer.jw-flag-ads-googleima.jw-ie .jw-slider-volume{margin:0}}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-svg-icon{fill:#fff;filter:drop-shadow(0 0 3px #000)}.jwplayer.jw-flag-ads-googleima .jw-spacer,.jwplayer.jw-flag-ads-googleima .jw-text{order:1}.jwplayer.jw-flag-ads-googleima .jw-controlbar .jw-text{text-shadow:0 0 3px #000}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar{pointer-events:none}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-controlbar{flex-flow:column-reverse nowrap;height:100%;max-height:none}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-button-container{align-items:flex-end;flex-wrap:wrap;margin-bottom:7px}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-controlbar .jw-icon{height:30px}.jwplayer.jw-flag-ads-googleima.jw-flag-small-player .jw-text{align-self:flex-start;margin:16px 0 0 16px;order:-1;width:100%}"), (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)(l, "8.1", (function(e, t, i) {
        var a = this,
            s = e.utils,
            r = e.getConfig(),
            n = s.extend({}, t);
        delete n.ad, delete n.tag, delete n.schedule, delete n.adschedule;
        var o = new K(t || {}, s),
            l = new z(e, s, o).getSchedule(t),
            v = null,
            y = 0;
        $(s).catch(s.noop);
        var m = r.key,
            w = new Q(i, e.id, s),
            P = new Z(s, e.Events, w),
            A = new oe(e, w.getAdDiv()),
            k = null;

        function b(e, t, i, a) {
            try {
                return e.getCompanionAds(t, i, a)
            } catch (e) {
                return []
            }
        }

        function M(t) {
            var i = t.currentAd,
                a = new google.ima.CompanionAdSelectionSettings;
            a.sizeCriteria = google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE;
            var s = o.companiondiv || {
                    width: 300,
                    height: 250
                },
                r = function(e) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var a = e[i];
                        t.push({
                            width: a.getWidth(),
                            height: a.getHeight(),
                            type: "html",
                            resource: a.getContent(),
                            click: null
                        })
                    }
                    return t
                }(b(i, s.width, s.height, a)),
                n = r.length;
            if (n) {
                var l = te(k, i);
                l.companions = r, e.trigger(c, l)
            }
            if (o.companiondiv) {
                a = new google.ima.CompanionAdSelectionSettings, o.companionResourceType && (a.resourceType = google.ima.CompanionAdSelectionSettings.ResourceType[o.companionResourceType]);
                var d = b(i, o.companiondiv.width, o.companiondiv.height, a);
                n = Math.max(n, d.length),
                    function(e) {
                        if (e && e.length) {
                            var t = document.getElementById(o.companiondiv.id);
                            if (t) {
                                var i = e[0];
                                i && ("function" == typeof i.getContent ? t.innerHTML = i.getContent() : t.innerHTML = i.resource || i.content)
                            }
                        }
                    }(d)
            }
            return n > 0
        }

        function E() {
            C(), A && A.adDisplayContainer && A.adDisplayContainer.destroy(), e.off(null, null, this), e.playAd = s.noop
        }

        function C() {
            k && (k.destroy(), k = null)
        }

        function I(t) {
            k && k.discardAdBreak(), A.contentComplete(), C(), t && t.adschedule ? o.adschedule = t.adschedule : o.adschedule = null, e.setCues([])
        }

        function R(t, i, a) {
            var r = t.item || {};
            I(r);
            var d, g, c, p = a.getSchedule();
            if (i === u && (d = o.getAdRules(), g = 0 === d.frequency && 1 === y, c = y >= d.startOn && (y - d.startOn) % d.frequency == 0, !(g || c)) || !p || "string" != typeof p && !Object.keys(p).length) return o.adschedule = null, void $(s).then((function() {
                A.prepare(v)
            })).catch(s.noop);
            if (k && k.destroy(), A.reset(!0), (k = new ne(r, o, e, P, w, A, v, n, l)).on("all", (function(t, i) {
                    return e.trigger(t, i)
                })), k.init(i, a), k.on(f, (function() {
                    return M(k.adsPlayer)
                })), a.preloadAds) {
                var m = e.getConfig().autostart;
                !1 === m || m === h && 0 === e.getViewable() ? k.loadPreroll() : e.once("autostartNotAllowed", (function() {
                    k.loadPreroll()
                }), k)
            }
        }
        this.version = "8.7.13", e.utils.extend(this, e.Events), e.pauseAd = function(e, t) {
            k && (e ? k.pause(t || {}) : k.resume(t || {}))
        }, e.playAd = function(i) {
            var a = s.extend({}, t);
            delete a.ad, delete a.tag, delete a.schedule, delete a.adschedule, e._.isArray(i) ? a.tag = i[0] : a.tag = i, a.adPosition = ie(e);
            var n = new K(a, s);
            n.setLocalizationOptions(r.localization.advertising);
            var o = k ? k.blockingInstreamPlayer : null;
            o && (o.noResume = !0), R({}, d, n), k && !k.destroyed() && (k.initAdsPlayer(d, n), k.beforePlay(null))
        }, e.skipAd = function() {
            A && A.skipAd()
        }, e.on("ready", (function() {
            r.localization = e.getConfig().localization, o.setLocalizationOptions(r.localization.advertising), v || (v = e.createInstream().getMediaElement()), $().catch((function(e) {
                e.message.match(/Failed to load/) && L("Ad playback blocked by an ad blocker", 2e4)
            })), j.catch((function(e) {
                L(e.message, 60002)
            }));
            var t = document.body,
                i = function e() {
                    t.removeEventListener("mouseup", e), t.removeEventListener("touchend", e), A.initializeDisplay()
                };
            t.addEventListener("mouseup", i, !1), t.addEventListener("touchend", i, !1)
        }), this).on("playlistItem", (function(e) {
            y++, o.resetBidsResponse(), R(e, u, o)
        }), this).on("playlistComplete", (function() {
            I()
        }), this).on("cast", (function(e) {
            e.active && I()
        }), this).on("mute", (function(e) {
            var t = e.mute;
            P.mute(t)
        }), this).on("destroyPlugin", (function() {
            a.destroy()
        }), this).on("remove", E, this);
        var j = function(e, t, i) {
            var a = Y[t];
            return a || (Y[t] = new Promise((function(a, s) {
                ! function(i) {
                    var a = new e.key(t);
                    if ("unlimited" === a.edition()) return i(); // TOKEN
                    var s = ["//", "entitlements.jwplayer.com", "/", a.token(), ".json"];
                    "file:" === window.location.protocol && s.unshift("https:"), e.ajax(s.join(""), (function(e) {
                        i(e && e.response)
                    }), (function() {
                        i()
                    }), {
                        timeout: 1e4,
                        responseType: "json"
                    })
                }((function(e) {
                    var t, r, n = e || {};
                    !0 === i.outstream ? (t = !1 !== n.canPlayOutstreamAds, r = "Outstream Ad Limit Reached") : (t = !1 !== n.canPlayAds, r = "Ad Limit Reached"), !1 !== t ? a({
                        message: "Can Play Ads"
                    }) : s({
                        message: r
                    })
                }))
            })))
        }(s, m, t);
        j.catch(s.noop);
        var L = function(t, i) {
            E(), e.trigger(p, ee(null, {
                message: t,
                adErrorCode: i,
                id: g,
                placement: D(r),
                tag: ""
            }))
        };
        this.destroy = C, this.adsDebugMode = function() {}
    }))
}();