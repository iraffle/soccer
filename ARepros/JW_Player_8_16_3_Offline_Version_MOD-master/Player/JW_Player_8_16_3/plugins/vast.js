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

    function r(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function n() {
        return (n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
            }
            return e
        }).apply(this, arguments)
    }

    function s(e) {
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
    var o, l = "vast",
        d = "-1",
        u = "time",
        c = "[ERRORCODE]",
        h = "__jwpseg__",
        p = "beforeComplete",
        v = "vmap",
        f = 5e3,
        m = 15e3,
        g = "jwp",
        y = "jwpspotx",
        k = "autostartNotAllowed",
        A = "viewable",
        w = 5,
        P = "playing",
        b = "adBidRequest",
        T = "adBidResponse",
        _ = "adBreakEnd",
        I = "adBreakIgnored",
        E = "adBreakStart",
        C = "adError",
        R = "adImpression",
        S = "adItem",
        x = "adLoaded",
        j = "adPlayComplete",
        M = "adPodError",
        V = "adRequest",
        L = "adSchedule",
        O = "adWarning",
        B = "external",
        H = B,
        D = "click",
        q = "play",
        N = "error",
        F = "complete",
        U = [R, C, M],
        Q = ["adStarted", "adComplete", R, "adClick", "adSkipped", C, "adPlay", "adPause", "adMeta"],
        X = "instream",
        W = "article",
        z = (r(o = {}, [X], 1), r(o, ["banner"], 2), r(o, [W], 3), r(o, ["feed"], 4), r(o, ["floating"], 5), r(o, ["interstitial"], 5), r(o, ["slider"], 5), o),
        G = "inference",
        $ = function() {
            function e(i, a, r, s, o) {
                var l = this;
                t(this, e), this.player = i, this.state = i.state, this.vpaidURL = r, this.adTag = s, this.adParams = o.adParams, this.vpaidControls = o.vpaidControls, this.remainingTimeInterval = null, this.type = "vpaid", this.instream = a || i.createInstream(), this.vpaidState = {
                    linear: !1,
                    expanded: !1,
                    remainingTime: -1
                }, this.paused = !1, n(this, i.Events), this.setMuteCallback = function() {
                    l.handleMute ? l.setMute() : l.handleMute = !0
                }, this.playerContainer = this.player.getContainer(), o.adOptOut ? setTimeout((function() {
                    l.sendEvent("error", {
                        message: "Conditional ad rejected",
                        code: 408
                    })
                }), 0) : this.iframe = function(e, t, i, a) {
                    var r = document.createElement("iframe");
                    r.setAttribute("allow", "autoplay"), r.src = "javascript:false", r.classList.add("jw-vpaid-iframe"), r.scrolling = "no", i.querySelector(".jw-media").appendChild(r);
                    var n = r.contentWindow.document;
                    return n.open().write("\n    <body onload=\"\n        var js = document.createElement('script');\n        js.src = '".concat(t, "';\n        js.addEventListener('load', function() { window.myCallback(); });\n        document.body.appendChild(js);\"\n    style=\"margin: 0\">")), r.contentWindow.myCallback = a, n.close(), r
                }(i.utils, this.vpaidURL, this.playerContainer, this.callback.bind(this))
            }
            return a(e, [{
                key: "sendEvent",
                value: function(e, t) {
                    (t = t || {}).tag || (t.tag = this.adTag), this.trigger(e, t)
                }
            }, {
                key: "sendTimeEvent",
                value: function(e, t, i) {
                    var a = t.getAdDuration(),
                        r = t.getAdRemainingTime(),
                        s = n({
                            duration: a
                        }, i);
                    this.sendEvent(e, s), r > 0 && (s.position = a - r, this.trigger("time", s))
                }
            }, {
                key: "handleQuartile",
                value: function(e, t) {
                    this.sendTimeEvent("quartile", e, {
                        quartile: t
                    })
                }
            }, {
                key: "genEvent",
                value: function(e) {
                    var t = this;
                    return function(i) {
                        t.on(e, i)
                    }
                }
            }, {
                key: "setMute",
                value: function() {
                    var e = 0 === this.vpaidAd.getAdVolume();
                    this.player.getMute() !== e && this.player.setMute(e)
                }
            }, {
                key: "prepareNonlinearAd",
                value: function() {
                    if (this.player.utils.style(this.iframe, {
                            height: 150
                        }), this.iframe.classList.add("jw-vpaid-non-linear"), this.resize(null, 150), this.instream) {
                        this.instream.noResume = !0, this.instream.applyProviderListeners(null), this.instream.destroy(), this.instream = null;
                        var e = this.playerContainer.querySelector(".jw-media"),
                            t = e.querySelector("video,audio");
                        e.insertBefore(t, this.iframe), t.play()
                    }
                }
            }, {
                key: "progressInterval",
                value: function(e) {
                    var t = this;
                    if (clearInterval(this.remainingTimeInterval), e && e.getAdRemainingTime) {
                        var i = -1;
                        this.remainingTimeInterval = setInterval((function() {
                            if (!t.paused) {
                                var a = e.getAdRemainingTime();
                                isNaN(a) || a <= 0 || i === a || (i = a, t.sendTimeEvent("remainingTimeChange", e, {
                                    remainingTime: a
                                }))
                            }
                        }), 250)
                    }
                }
            }, {
                key: "genListeners",
                value: function(e) {
                    var t = this;
                    return {
                        AdLoaded: function() {
                            e.setAdVolume(t.getPlayerVolume()), e.startAd()
                        },
                        AdStarted: function() {
                            var i = e.getAdDuration ? e.getAdDuration() : 0,
                                a = !e.getAdLinear || e.getAdLinear(),
                                r = a ? "linear" : "nonlinear";
                            a ? (t.vpaidControls || (t.instream = t.instream || t.player.createInstream(), t.instream.hide()), t.progressInterval(e)) : t.prepareNonlinearAd(), t.sendEvent("impression", {
                                linear: r,
                                duration: i
                            }), t.sendEvent("play", {
                                oldstate: "buffering",
                                newstate: P,
                                linear: r
                            }), t.handleMute = !0, e.subscribe(t.setMuteCallback, "AdVolumeChange", e)
                        },
                        AdVideoStart: function() {
                            t.sendEvent("started")
                        },
                        AdStopped: function() {
                            t.sendEvent("stopped")
                        },
                        AdPaused: function() {
                            t.paused || (t.paused = !0, t.sendEvent("pause", {
                                newstate: "paused",
                                oldstate: P
                            }))
                        },
                        AdPlaying: function() {
                            if (t.paused) {
                                var i = !e.getAdLinear || e.getAdLinear() ? "linear" : "nonlinear";
                                t.paused = !1, t.sendEvent("play", {
                                    newstate: P,
                                    oldstate: "paused",
                                    linear: i
                                })
                            }
                        },
                        AdLinearChange: function() {
                            !e.getAdLinear || e.getAdLinear() ? (t.player.utils.style(t.iframe, {
                                height: "100%"
                            }), t.player.off(null, null, t), t.instream = t.instream || t.player.createInstream(), t.instream.init(), t.vpaidControls || t.instream.hide()) : t.prepareNonlinearAd()
                        },
                        AdDurationChange: function() {
                            t.sendTimeEvent("remainingTimeChange", e, {
                                isDurationChange: !0,
                                remainingTime: e.getAdRemainingTime()
                            })
                        },
                        AdRemainingTimeChange: function() {
                            t.paused || t.sendTimeEvent("remainingTimeChange", e, {
                                remainingTime: e.getAdRemainingTime()
                            })
                        },
                        AdExpandedChange: function() {
                            t.sendEvent("expandedChange", {
                                expanded: e.getAdExpanded()
                            })
                        },
                        AdSkippableStateChange: function() {
                            t.sendEvent("skippableStateChange", {
                                skippable: e.getAdSkippableState()
                            })
                        },
                        AdSkipped: function() {
                            t.sendEvent("skipped")
                        },
                        AdVideoFirstQuartile: function() {
                            t.handleQuartile(e, 1)
                        },
                        AdVideoMidpoint: function() {
                            t.handleQuartile(e, 2)
                        },
                        AdVideoThirdQuartile: function() {
                            t.handleQuartile(e, 3)
                        },
                        AdVideoComplete: function() {
                            t.sendEvent("complete")
                        },
                        AdUserClose: function() {
                            t.sendEvent("close")
                        },
                        AdClickThru: function(e, i, a) {
                            t.sendEvent("click", {
                                id: i,
                                url: e,
                                playerHandles: a
                            })
                        },
                        AdError: function(e) {
                            var i = function(e) {
                                if (e) {
                                    var t = e.match(/\b(?:[34])[0-9]{2}\b/);
                                    if (t) return parseInt(t[0], 10);
                                    if (e.match(/timeout/i)) return e.match(/vpaid|vast/i) ? 301 : 402;
                                    if (e.match(/found/i)) return 401;
                                    if (e.match(/supported/i)) return 403;
                                    if (e.match(/(?:displaying|media file)/i)) return 405
                                }
                                return 901
                            }(e);
                            t.sendEvent("error", {
                                message: e,
                                code: i,
                                adErrorCode: 5e4 + i
                            })
                        }
                    }
                }
            }, {
                key: "callback",
                value: function() {
                    try {
                        this.vpaidAd = this.iframe.contentWindow.getVPAIDAd();
                        var e = this.vpaidAd.handshakeVersion("2.0");
                        if (parseFloat(e) < 1) throw new Error("Invalid vpaid version in handshake")
                    } catch (e) {
                        return void this.sendEvent("error", {
                            message: e.message || "VPAID general error",
                            code: 901,
                            adErrorCode: 51901
                        })
                    }
                    var t = this.vpaidAd,
                        i = this.genListeners(t);
                    Object.keys(i).forEach((function(e) {
                        t.subscribe(i[e], e, t)
                    })), this.listeners = i;
                    var a = {
                            AdParameters: this.adParams
                        },
                        r = this.iframe.contentWindow.document.createElement("div");
                    r.className = "jw-vpaid-wrapper", r.style.height = "100%", this.iframe.contentWindow.document.body.appendChild(r), this.vpaidURL.indexOf("//imasdk.googleapis.com/js/sdkloader/vpaid_adapter.js") >= 0 && (this.iframe.contentWindow.HTMLVideoElement = HTMLVideoElement);
                    var n = {
                        videoSlot: this.instream.getMediaElement(),
                        slot: r
                    };
                    t.initAd(this.player.getWidth(), this.player.getHeight(), "normal", 1e3, a, n), t.setAdVolume(this.getPlayerVolume())
                }
            }, {
                key: "play",
                value: function() {
                    this.vpaidAd.resumeAd()
                }
            }, {
                key: "pause",
                value: function() {
                    this.vpaidAd.pauseAd()
                }
            }, {
                key: "skip",
                value: function() {
                    return !(!this.vpaidAd.skipAd || !this.vpaidAd.getAdSkippableState()) && (this.vpaidAd.skipAd(), !0)
                }
            }, {
                key: "stop",
                value: function() {
                    if (this.vpaidAd) try {
                        this.vpaidAd.stopAd()
                    } catch (e) {}
                }
            }, {
                key: "getPlayerVolume",
                value: function() {
                    return this.player.getMute() ? 0 : this.player.getVolume() / 100
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.handleMute = !1, this.vpaidAd.setAdVolume(e / 100)
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    if (this.vpaidAd && this.vpaidAd.resizeAd) {
                        var i = this.player.getFullscreen() || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "fullscreen" : "normal";
                        this.vpaidAd.resizeAd(e || this.player.getWidth(), t || this.player.getHeight(), i)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    if (this.removeEvents(), clearInterval(this.remainingTimeInterval), this.vpaidAd) try {
                        var e = this.listeners,
                            t = this.vpaidAd;
                        Object.keys(e).forEach((function(i) {
                            t.unsubscribe(e[i], i, t)
                        })), t.unsubscribe(this.setMuteCallback, "AdVolumeChange", t)
                    } catch (e) {}
                    this.iframe && this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.vpaidAd = null, this.player = null, this.instream = null
                }
            }, {
                key: "removeEvents",
                value: function() {
                    this.player && this.player.off(null, null, this), this.off()
                }
            }, {
                key: "attachMedia",
                value: function() {}
            }, {
                key: "detachMedia",
                value: function() {}
            }, {
                key: "volume",
                value: function() {}
            }, {
                key: "mute",
                value: function() {}
            }, {
                key: "getState",
                value: function() {
                    return this.vpaidState.linear ? this.paused ? "paused" : P : "idle"
                }
            }]), e
        }();
    var J = function(e) {
            var t = ee("".concat(e, "Locator"));
            return null !== t && function(i, a, n, s) {
                var o = ne();
                window.addEventListener("message", (function t(i) {
                    var a = i ? i.data : {};
                    if ("string" == typeof a) try {
                        a = JSON.parse(a)
                    } catch (e) {
                        a = {}
                    }
                    var r = "".concat(e, "Return");
                    a[r] && a[r].callId === o && (removeEventListener("message", t), n(a[r].returnValue, a[r].success))
                }), !1);
                var l = void 0 !== s ? "version" : "parameter",
                    d = r({}, ["".concat(e, "Call")], r({
                        command: i,
                        callId: o,
                        parameter: s
                    }, [l], a));
                t.postMessage(JSON.stringify(d), "*")
            }
        },
        Y = /^(https?:\/\/).*.(?:ampproject.org|bing-amp.com)\/(?:.\/)*(.*)\/amp.*$/;
    var K = new RegExp(/^[^/]*:\/\/\/?([^\/]*)/);

    function Z(e) {
        var t = e.match(K);
        return t && t.length > 1 ? t[1] : ""
    }
    var ee = function(e) {
            for (var t = window; t;) {
                try {
                    if (t.frames[e]) break
                } catch (e) {}
                t = t === window.top ? null : t.parent
            }
            return t
        },
        te = new RegExp(/^[^:\/?#]+:?\/\/[^\/?#]+/);
    var ie = null,
        ae = {
            gdprApplies: !0,
            consentData: ""
        },
        re = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
            return null === ie && (ie = new Promise((function(e) {
                var t = window.__tcfapi || J("__tcfapi");
                if (t) return t("getTCData", 2, (function(t, i) {
                    e(!1 !== i ? {
                        gdprApplies: t.gdprApplies,
                        consentData: t.tcString
                    } : null)
                }), null);
                var i = window.__cmp || J("__cmp");
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
                return e && (ae = e), ae
            }))), Promise.race([ie, new Promise((function(t) {
                setTimeout(t, e, ae)
            }))])
        },
        ne = Date.now || function() {
            return (new Date).getTime()
        };

    function se() {
        var e, t, i = null !== document.referrer.match(te) ? (e = document.referrer, (t = e.match(Y)) && t.length > 1 ? "".concat(t[1]).concat(t[2]) : e) : "";
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
                domain: Z(i),
                referrer: ""
            }
        }
        return {
            url: document.location.href,
            domain: document.domain,
            referrer: i
        }
    }

    function oe(e) {
        var t = e.advertising;
        if (t && t.placement) {
            var i = t.placement.toLowerCase();
            if (z[i]) return z[i]
        }
        return z[t && t.outstream ? W : X]
    }
    var le = function(e) {
        return e.replace(/^\s+|\s+$/g, "")
    };

    function de(e, t) {
        var i, a = e.getPlugin(G),
            r = t.jwpseg_client_side,
            n = t.jwpseg || [];
        if (!r || !r.length || !a) return n;
        try {
            i = a.predict(r, t)
        } catch (e) {
            return t.jwpseg || []
        }
        var o = Object.keys(i).filter((function(e) {
                return i[e]
            })),
            l = n.filter((function(e) {
                return -1 === r.indexOf(e)
            }));
        return [].concat(s(o), s(l))
    }
    var ue = [];
    var ce = function() {
        function e(i, a, r, n, s) {
            var o = this;
            t(this, e);
            var l = a || {};
            this.ad = i, this.map = l, this.debugTrackFn = r, this.trackerPlayerUtils = function(e) {
                return {
                    getPosition: function() {
                        return e.getPosition()
                    },
                    getFile: function() {
                        return e.getPlaylistItem().file
                    },
                    getPlacement: function() {
                        return oe(e.getConfig())
                    },
                    getUserAgent: function() {
                        return navigator.userAgent
                    }
                }
            }(n), this.trackingFilter = s, this.lastQuartile = 0, this.progressEvents = [], this.breakStarted = !1, this.started = !1, this.firedError = !1, this.hasComp = !1, Object.keys(l).forEach((function(e) {
                if (l.hasOwnProperty(e) && 0 === e.indexOf("progress")) {
                    var t = "".concat(e.split("_")[1]),
                        i = {
                            key: e,
                            offset: t,
                            tracked: !1,
                            percentage: !1
                        };
                    /^\d+%$/.test(t) ? (i.percentage = !0, i.offset = parseFloat(t)) : i.offset = n.utils.seconds(t), o.progressEvents.push(i)
                }
            })), this.setFactories()
        }
        return a(e, [{
            key: "getUrls",
            value: function(e) {
                return this.map.hasOwnProperty(e) ? this.map[e] : []
            }
        }, {
            key: "addUrl",
            value: function(e, t) {
                this.map.hasOwnProperty(e) ? this.map[e].push(t) : (this.map[e] = [], this.map[e].push(t))
            }
        }, {
            key: "trackPings",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this.getUrls(e),
                    a = this.trackingFilter,
                    r = [],
                    n = [],
                    s = [];
                if (i.length) {
                    t = this.replaceMacros(t), i.forEach((function(e) {
                        if (e) {
                            if (Object.keys(t).forEach((function(i) {
                                    e = e.replace(i, t[i])
                                })), a && !1 === a(e)) return void n.push(e);
                            var i = new Image;
                            i.src = e, r.push(e), s.push(i)
                        }
                    })), Array.prototype.push.apply(ue, s);
                    for (var o = ue.length; o-- && (ue[o].width || ue[o].complete);) ue.length = o
                }
                "function" == typeof this.debugTrackFn && this.debugTrackFn({
                    type: "ping",
                    data: {
                        pingType: e,
                        urls: r,
                        filteredUrls: n,
                        images: s
                    }
                })
            }
        }, {
            key: "replaceMacros",
            value: function(e) {
                var t, i, a, r, n, s, o, l = ae,
                    d = l.gdprApplies,
                    u = l.consentData;
                return e["[ADSERVINGID]"] = encodeURIComponent(this.ad.adServingId || ""), e["[ASSETURI]"] = encodeURIComponent(this.trackerPlayerUtils.getFile()), e["[CACHEBUSTING]"] = Math.random().toString().slice(2, 10), e["[CONTENTPLAYHEAD]"] = encodeURIComponent((t = this.trackerPlayerUtils.getPosition(), i = ("0" + Math.floor(t / 3600)).slice(-2), a = ("0" + Math.floor((t - 3600 * i) / 60)).slice(-2), i + ":" + a + ":" + ("0" + Math.floor(t - 3600 * i - 60 * a)).slice(-2) + "." + (t % 1).toFixed(3).toString().slice(2, 5))), e["[DEVICEUA]"] = encodeURIComponent(this.trackerPlayerUtils.getUserAgent()), e["[GDPRCONSENT]"] = u, e["[PAGEURL]"] = encodeURIComponent(se().url), e["[PLACEMENTTYPE]"] = this.trackerPlayerUtils.getPlacement(), e["[REGULATIONS]"] = d ? "gdpr" : "", e["[TIMESTAMP]"] = encodeURIComponent((r = new Date, n = r.getTime(), s = r.getTimezoneOffset() / 60, o = 6e4 * r.getTimezoneOffset(), new Date(n - o).toISOString().slice(0, -1) + (s > 0 ? "-" : "+") + ("0" + s).slice(-2))), e
            }
        }, {
            key: "start",
            value: function() {
                this.started = !0, this.trackPings("start")
            }
        }, {
            key: "breakStart",
            value: function() {
                this.breakStarted = !0, this.trackPings("breakStart")
            }
        }, {
            key: "time",
            value: function(e, t) {
                if (!(t <= 1)) {
                    for (var i = (4 * e + .05) / t | 0; i > this.lastQuartile && this.lastQuartile < 3;) this.lastQuartile++, 1 === this.lastQuartile ? this.trackPings("firstQuartile") : 2 === this.lastQuartile ? this.trackPings("midpoint") : 3 === this.lastQuartile && this.trackPings("thirdQuartile");
                    this.trackProgress(e, t)
                }
            }
        }, {
            key: "trackProgress",
            value: function(e, t) {
                for (var i = this.progressEvents.length; i--;) {
                    var a = this.progressEvents[i];
                    if (!a.tracked) {
                        var r = a.offset;
                        a.percentage && (r = t * r / 100), e >= r && (a.tracked = !0, this.trackPings(a.key))
                    }
                }
            }
        }, {
            key: "error",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 900;
                this.firedError = !0;
                var t = {};
                t[c] = e, this.trackPings("error", t)
            }
        }, {
            key: "factory",
            value: function(e) {
                var t = this;
                return function() {
                    t.trackPings(e)
                }
            }
        }, {
            key: "setFactories",
            value: function() {
                this.creativeView = this.factory("creativeView"), this.click = this.factory("click"), this.skip = this.factory("skip"), this.complete = this.factory("complete"), this.pause = this.factory("pause"), this.resume = this.factory("resume"), this.mute = this.factory("mute"), this.unmute = this.factory("unmute"), this.fullscreen = this.factory("fullscreen"), this.expand = this.factory("expand"), this.collapse = this.factory("collapse"), this.acceptInvitation = this.factory("acceptInvitation"), this.close = this.factory("close"), this.rewind = this.factory("rewind"), this.impression = this.factory("impression"), this.viewable = this.factory("viewable"), this.notViewable = this.factory("notviewable"), this.breakEnd = this.factory("breakEnd")
            }
        }]), e
    }();

    function he(e, t, i, a) {
        var r = pe(e, i, a),
            s = t.adErrorCode || 60900;
        return n(r, {
            message: t.message,
            code: t.code >= 100 && t.code <= 1008 ? t.code : 900,
            adErrorCode: s
        }), 10402 === s || 50004 === s || 50400 === s ? r.timeout = i ? i.creativeTimeout : a.creativeTimeout : 11007 !== s && 10301 !== s && 60006 !== s || (r.timeout = i ? i.requestTimeout : a.requestTimeout), void 0 !== t.id && (r.id = t.id), void 0 !== t.sourceError && (r.sourceError = t.sourceError), void 0 !== t.tag && (r.tag = t.tag), void 0 !== t.vmap && (r.vmap = t.vmap), r
    }

    function pe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = {
                client: l
            };
        if (null === e) return a;
        var r = e.bidding,
            s = e.config,
            o = e.item,
            d = e.player;
        e.isDestroyed() || (a.placement = oe(d.getConfig()));
        var u = i.schedule;
        if (u) return n(a, {
            item: o,
            tag: u.getVMAP(),
            adbreaks: u.getAllAds().map((function(e) {
                var t = {
                    type: e._type,
                    offset: e._offSet
                };
                if (e._vmap ? t.vmap = e._vmap : t.adbreak = n({}, e._adbreak), r) {
                    var i = r.getBid(e.adPlayId);
                    i && n(t, i.getEventObject())
                }
                return t
            }))
        });
        if (s.preloadAds && (a.preloadAds = i.preload || t && t._preload || !1), i.jwpseg && (a.jwpseg = i.jwpseg), t) {
            var c = e.getAdIds(t, i),
                h = c.adBreakId,
                p = c.adPlayId;
            if (n(a, {
                    adBreakId: h,
                    adPlayId: p,
                    offset: t._offSet
                }), r) {
                var v = r.getBid(p);
                v && n(a, v.getEventObject())
            }
        }
        var f = t && (i.tag || t._currentTag);
        if (f && (n(a, {
                id: t._id,
                tag: f,
                adposition: t._position,
                sequence: t._adPodIndex + 1,
                witem: t._waterfallIndex + 1,
                wcount: t._adQueue ? t._adQueue.length : 1,
                adsystem: t.adsystem || ""
            }), t.adServingId && (a.adServingId = t.adServingId), void 0 !== t.skipoffset && (a.skipoffset = t.skipoffset), t.wrappedTags && n(a, {
                wrapperAdSystem: t.wrapper || "",
                wrappedTags: t.wrappedTags.slice(1)
            }), t._adbreak && (a.adschedule = t._adbreak, a.adschedule.offset = t._offSet)), t && t.companions && i.companions) return a.companions = i.companions, a;
        if (t && t.response) {
            var m = e.params;
            n(a, {
                adtitle: t.adTitle || "",
                description: t.description || "",
                adId: t.adId || "",
                advertiser: t.advertiser || "",
                advertiserId: t.advertiserId || "",
                creativeId: t.creativeId || "",
                creativeAdId: t.creativeAdId || "",
                dealId: t.dealId || "",
                request: t.request,
                response: t.response,
                conditionalAd: t.conditionalAd,
                conditionalAdOptOut: m.conditionaladoptout,
                vastversion: t.vastversion,
                clickThroughUrl: t.clickthrough,
                duration: i.duration,
                linear: i.linear
            }), "boolean" == typeof t.mediaFileCompliance && (a.mediaFileCompliance = t.mediaFileCompliance, t.nonComplianceReasons && (a.nonComplianceReasons = t.nonComplianceReasons)), t.selectedMedia && (a.mediafile = {
                file: t.selectedMedia.file
            }), i.metadata && (a.adMessage = m.dynamicMessage || "", t.companions && (a.companions = t.companions), t.sequence && (a.podMessage = m.podMessage || ""), void 0 !== t.skipoffset && n(a, {
                skipMessage: m.skipMessage,
                skipText: m.skipText
            }))
        } else a.item = o;
        return a
    }

    function ve(e) {
        return e.isBeforePlay() || 0 === e.getPosition() && "idle" === e.getState() ? "pre" : e.isBeforeComplete() || e.getPosition() === e.getDuration() ? "post" : "mid"
    }
    var fe = function() {
        function e(i, a, r) {
            t(this, e), this.player = i, this.icon = a, this.div = r;
            var n = this.utils = i.utils;
            this.images = [], this.iconContainer = function(e, t) {
                var i = document.createElement("div");
                return i.className = "jw-ad-icon-container", t.style(i, e), i
            }(a.style, n);
            var s = function(e, t) {
                var i, a = e.resourceSource,
                    r = e.resourceType;
                switch (r) {
                    case "iframe":
                        (i = document.createElement("iframe")).src = a, i.scrolling = "no";
                        break;
                    case "html":
                        i = document.createElement("div"), t.replaceInnerHtml(i, a);
                        break;
                    default:
                        (i = document.createElement("img")).src = a, i.setAttribute("type", r)
                }
                return t.addClass(i, "jw-ad-icon"), i
            }(a.resource, n);
            this.iconContainer.appendChild(s), r.appendChild(this.iconContainer);
            var o = 1e3 * n.seconds(a.offset);
            o > 0 ? this.showTimeout = setTimeout(this.show.bind(this), o) : this.show(), this.ui = new n.UI(this.iconContainer).on("click tap", this.clickHandler, this)
        }
        return a(e, [{
            key: "clickHandler",
            value: function() {
                this.player.pause({
                    reason: "clickthrough"
                }), this.sendPing(this.icon.trackers.iconClick), this.utils.openLink(this.icon.clickThrough, "_blank", {
                    rel: "noreferrer"
                })
            }
        }, {
            key: "show",
            value: function() {
                clearTimeout(this.showTimeout), this.utils.addClass(this.iconContainer, "jw-ad-icon-active"), this.sendPing(this.icon.trackers.iconView), this.icon.duration && (this.duration = this.utils.seconds(this.icon.duration), this.beginningPosition = this.utils.seconds(this.icon.offset))
            }
        }, {
            key: "updateTime",
            value: function(e) {
                e - this.beginningPosition >= this.duration && this.remove()
            }
        }, {
            key: "sendPing",
            value: function(e) {
                if (e) {
                    var t = this.images,
                        i = new Image;
                    i.src = e;
                    for (var a = t.length; a-- && (t[a].width || t[a].complete);) t.length = a;
                    t.push(i)
                }
            }
        }, {
            key: "remove",
            value: function() {
                clearTimeout(this.showTimeout), this.div.contains(this.iconContainer) && this.div.removeChild(this.iconContainer), this.ui && (this.ui.destroy(), this.ui = null)
            }
        }]), e
    }();
    var me = function() {
        function e(i, a, r, s, o, l, d) {
            t(this, e), this.player = a, this.staticPlayer = r, this.companion = s, this.playlistItemManager = o, this.div = l, this.optionalParams = d, this.debugTrackFn = d.debugTrackFn, this.scheduledAd = i.scheduledAd(), this.vastBuffet = i.adBuffet(), this.vastAdPod = i.adPod(), this.vastAd = this.vastBuffet.length ? this.vastBuffet[0] : null, this.adType = null, this.vpaidPlayer = null, this.instreamPlayer = null, this.blockingInstreamPlayer = null, this.mediaType = null, this.adPodItems = null, this.creativeTimeout = null, this.vastOptions = null, this.duration = 0, this.position = 0, this.initialIndex = 0, this.viewablePlayedTime = 0, this.adViewableImpressionHandler = a.utils.noop, this.lastPosition = null, this.reason = null, n(this, a.Events)
        }
        return a(e, [{
            key: "init",
            value: function(e, t) {
                return this.init = function() {
                    throw new Error("Adplayer can only be initialized once")
                }, this.blockingInstreamPlayer = e, this.reason = t, this.prepareAdPod() ? (this.player.on("fullscreen", this.playerFullscreenHandler, this), this.player.on("volume", this.playerVolumeHandler, this), this.player.on("mute", this.muteHandler, this), this.player.on("resize", this.playerResizeHandler, this), this.playAd()) : Promise.reject()
            }
        }, {
            key: "prepareAdPod",
            value: function() {
                var e, t = this,
                    i = null,
                    a = 0,
                    r = [];
                if (this.vastAd && (ke(this.vastAd, this.debugTrackFn, this.player, this.optionalParams.trackingFilter), (i = this.prepareAdPodItem(this.vastAd)) && "vpaid" === i.adType && !ye(this.vastAd) && (i = null)), this.vastAdPod)
                    for (var n = null, s = 0; s < this.vastAdPod.length; s++) {
                        var o = this.vastAdPod[s];
                        ke(o, this.debugTrackFn, this.player, this.optionalParams.trackingFilter);
                        var l = this.prepareAdPodItem(o);
                        if (l) {
                            if (n !== l.adType && "instream" === n) break;
                            if (n = l.adType, "vpaid" !== l.adType || ye(o)) {
                                var d = r.length + a === s;
                                l && d && r.push(l)
                            } else a++
                        } else a++
                    }
                return r.length || i ? (r.length ? (e = r, this.vastOptions = [], e.forEach((function(e) {
                    t.vastOptions.push(t.getInstreamOptions(e.vastAd))
                }))) : (e = i, this.vastOptions = this.getInstreamOptions(this.vastAd)), this.adPodItems = e, !0) : (this.scheduledAd._pod && this.scheduledAd._pod.length || this.adError("No Compatible Creatives", 403), !1)
            }
        }, {
            key: "prepareAdPodItem",
            value: function(e) {
                e.tracker.linear = "linear";
                var t = "".concat(e.media[0].adType).toLowerCase() || "instream";
                "vpaid" !== t || ye(e) || (t = "instream");
                var i = {
                    vastAd: e,
                    sources: [],
                    adType: t
                };
                void 0 !== this.scheduledAd.skipoffset && (i.skipoffset = this.scheduledAd.skipoffset);
                var a = e.media,
                    r = {};
                if (a.forEach((function(e, t) {
                        i.sources.push({
                            file: e.file,
                            mimeType: e.type,
                            type: ("" + e.type).replace(/^(?:video|audio)\/(?:x-)?/, ""),
                            id: t
                        }), r[e.file] = {
                            width: e.width || 0,
                            height: e.height || 0,
                            bitrate: e.bitrate || e.maxBitrate,
                            id: t
                        }
                    })), "instream" === t && (i.sources = function(e) {
                        var t;
                        t = jwplayer.api.availableProviders.filter((function(e) {
                            return "flash" !== e.name
                        }));
                        var i = e.filter((function(e) {
                                return t.some((function(t) {
                                    return t.supports(e)
                                }))
                            })),
                            a = i.filter((function(e) {
                                return "3gpp" !== e.type
                            }));
                        return a.length ? a : i
                    }(i.sources)), 0 === i.sources.length) return null;
                var n = this.player.getSafeRegion(!1).width,
                    s = this.player.getConfig().bandwidthEstimate || 5e5,
                    o = function() {
                        var e = s / 1e3 * .95,
                            t = i.sources.map((function(e) {
                                return r[e.file]
                            })),
                            a = t.filter((function(e) {
                                return e.width >= n
                            })).sort((function(e, t) {
                                return e.width - t.width
                            }));
                        a.length || (a = t.sort((function(e, t) {
                            return t.width - e.width
                        })));
                        var o = a.filter((function(e) {
                            return e.width === a[0].width
                        }));
                        if (o.length > 1) {
                            var l = o.reduce((function(t, i) {
                                    return i.bitrate < e && i.bitrate > t.bitrate ? i : t
                                })),
                                d = o.reduce((function(t, i) {
                                    return i.bitrate >= e && i.bitrate < t.bitrate ? i : t
                                }));
                            return l || d
                        }
                        return o[0]
                    }().id;
                return i.vastAd.selectedMedia = i.sources.filter((function(e) {
                    return e.id === o
                }))[0], this.mediaType = i.vastAd.selectedMedia.mimeType.toLowerCase(), i.sources = [i.vastAd.selectedMedia], i
            }
        }, {
            key: "getInstreamOptions",
            value: function(e) {
                return {
                    skipoffset: this.getSkipOffset(e),
                    skipMessage: this.optionalParams.skipMessage,
                    skipText: this.optionalParams.skipText
                }
            }
        }, {
            key: "getSkipOffset",
            value: function(e) {
                var t = [this.scheduledAd.skipoffset, this.optionalParams.skipoffset, e.skipoffset].filter((function(e) {
                    return null != e
                }));
                return e.skipoffset = t.length ? this.player.utils.seconds(t[0]) : void 0, e.skipoffset
            }
        }, {
            key: "getVastAd",
            value: function() {
                var e, t = this.scheduledAd._adPodIndex;
                if (this.adPodItems) {
                    if ((e = this.adPodItems.length ? this.adPodItems[t] : this.adPodItems).vastAd) return e.vastAd
                } else if (this.vastAdPod && this.vastAdPod.length) return this.vastAdPod[t];
                return this.vastAd
            }
        }, {
            key: "adError",
            value: function(e, t, i) {
                clearTimeout(this.creativeTimeout), this.creativeTimeout = null;
                var a = this.getVastAd();
                Ae(a), t = t || 900;
                var r = "vpaid" === this.adType ? 5e4 : 1e4;
                i = i || r + t;
                var s = n({}, this.scheduledAd, a),
                    o = {
                        jwpseg: s.jwpseg
                    },
                    l = he(this.playlistItemManager, {
                        message: e,
                        code: t,
                        adErrorCode: i
                    }, s, o);
                this.vastAdPod && this.scheduledAd._adPodIndex < this.vastAdPod.length - 1 ? this.triggerEvent(M, l) : (a.tracker.error(l.code), this.triggerEvent(C, l), this.removePlayerListeners())
            }
        }, {
            key: "playAd",
            value: function() {
                var e = this.scheduledAd._adPodIndex,
                    t = this.adPodItems[e] || this.adPodItems;
                if (this.adType = t.adType, this.blockingInstreamPlayer) {
                    var i = this.optionalParams.loadingAd;
                    this.blockingInstreamPlayer.setText(i)
                }
                if ("vpaid" === this.adType) return this.playVpaid(t.vastAd);
                if ("static" === this.adType) return this.playStatic(), Promise.resolve();
                var a = Array.isArray(this.adPodItems) ? this.adPodItems.slice(e) : this.adPodItems,
                    r = Array.isArray(this.vastOptions) ? this.vastOptions.slice(e) : this.vastOptions;
                return this.initialIndex = e, this.playInstream(a, r).catch(this.player.utils.noop)
            }
        }, {
            key: "clearVpaidBlocking",
            value: function() {
                var e = this.vpaidPlayer.instream;
                e && e !== this.blockingInstreamPlayer && (this.vpaidPlayer.instream = null, this.clearBlocking(e))
            }
        }, {
            key: "clearBlocking",
            value: function(e) {
                (e = e || this.blockingInstreamPlayer) && e !== this.instreamPlayer && e.destroy()
            }
        }, {
            key: "getState",
            value: function() {
                return this.instreamPlayer ? this.instreamPlayer.getState() : this.vpaidPlayer ? this.vpaidPlayer.getState() : ""
            }
        }, {
            key: "clearNonlinear",
            value: function() {
                this.staticPlayer.stop(), this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.stop(), this.vpaidPlayer.destroy(), this.vpaidPlayer = null))
            }
        }, {
            key: "destroy",
            value: function() {
                if (this.off(), this.removePlayerListeners(), clearTimeout(this.creativeTimeout), this.creativeTimeout = null, this.instreamPlayer) {
                    var e = this.instreamPlayer;
                    this.instreamPlayer = null, this.clearBlocking(e)
                }
                this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null)), this.clearNonlinear(), Ae(this.vastAd), this.player = null, this.instreamPlayer = null, this.scheduledAd = null, this.vastBuffet = null, this.vastAd = null, this.vastAdPod = null
            }
        }, {
            key: "pause",
            value: function(e) {
                var t = e.reason;
                this.reason = t || B, this.instreamPlayer ? this.instreamPlayer.pause() : this.vpaidPlayer && this.vpaidPlayer.pause()
            }
        }, {
            key: "play",
            value: function(e) {
                var t = e.reason;
                this.reason = t || B, this.instreamPlayer ? this.instreamPlayer.play() : this.vpaidPlayer && this.vpaidPlayer.play()
            }
        }, {
            key: "skip",
            value: function() {
                if (this.instreamPlayer) {
                    var e = this.getSkipOffset(this.getVastAd());
                    if (e > 0 && this.position < e) return;
                    this.instreamPlayer.skipAd()
                } else this.vpaidPlayer && this.vpaidPlayer.skip()
            }
        }, {
            key: "removePlayerListeners",
            value: function() {
                this.player && (this.player.off("fullscreen", this.playerFullscreenHandler, this), this.player.off("volume", this.playerVolumeHandler, this), this.player.off("mute", this.muteHandler, this), this.player.off("viewable", this.viewableHandler, this)), this.instreamPlayer && this.instreamPlayer.off(null, null, this), this.vpaidPlayer && (this.vpaidPlayer.removeEvents(), this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null)), this.staticPlayer.stop(), this.staticPlayer.removeEvents()
            }
        }, {
            key: "adEventObject",
            value: function(e) {
                var t = this.getVastAd(),
                    i = n({}, this.scheduledAd, t),
                    a = pe(this.playlistItemManager, i);
                return a.viewable = this.player.getViewable(), this.adPodItems && this.adPodItems.length && (a.sequence = this.scheduledAd._adPodIndex + 1, a.podcount = this.adPodItems.length), this.mediaType && (a.creativetype = this.mediaType), this.scheduledAd._vmap && (a.vmap = this.scheduledAd._vmap), -1 !== Q.indexOf(e) && (a.universalAdId = t.universalAdId, a.categories = t.categories), a
            }
        }, {
            key: "playStatic",
            value: function() {
                this.vastAd.tracker.linear = "nonlinear";
                var e = this.vastAd.media[0];
                this.vastAd.selectedMedia = e;
                var t = this.vastAd.clickthrough || "",
                    i = this.staticPlayer;
                i.removeEvents(), i.on("play", this.impressionHandler, this), i.on("play", this.playHandler, this), i.on("complete", this.combinedCompleteHandler, this), i.on("click", this.clickStaticHandler, this), i.on("error", this.staticErrorHandler, this), this.playlistItemManager.addStaticOffset(this.scheduledAd._offSet), i.playAd(e.file, t, e.minDuration, this.scheduledAd._currentTag, this.scheduledAd.requestTimeout), this.clearBlocking()
            }
        }, {
            key: "creativeAdError",
            value: function(e, t, i) {
                if (this.adError(e, t, i), this.adPodItems && this.adPodItems.length - 1 > this.scheduledAd._adPodIndex) {
                    if (this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null), "instream" === this.adType && this.instreamPlayer) return void this.instreamPlayer.loadNextItemOnError();
                    this.scheduledAd._adPodIndex++, this.playAd()
                }
            }
        }, {
            key: "playVpaid",
            value: function(e) {
                var t = this;
                clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout((function() {
                    t.creativeAdError("VPAID tag communication timeout", 900, 50004)
                }), this.scheduledAd.creativeTimeout), this.vastAd = e;
                var i = ye(e),
                    a = this.optionalParams.conditionaladoptout && e.conditionalAd;
                if (this.vastAd.selectedMedia = i, this.mediaType = i.type, "flash" === ge(i)) return this.creativeAdError("Flash creatives are not supported", 403, 10403), Promise.reject();
                var r = {
                    adParams: this.vastAd.adParams,
                    vpaidControls: this.optionalParams.vpaidcontrols,
                    adOptOut: a
                };
                return this.vpaidPlayer = new $(this.player, this.blockingInstreamPlayer, i.file, this.scheduledAd._currentTag, r), this.blockingInstreamPlayer && this.blockingInstreamPlayer.applyProviderListeners(this.vpaidPlayer), this.vpaidPlayer.on("play", this.playHandler, this), this.vpaidPlayer.on("pause", this.pauseHandler, this), this.vpaidPlayer.on("quartile", this.quartileHandler, this), this.vpaidPlayer.on("remainingTimeChange", this.remainingTimeHandler, this), this.vpaidPlayer.on("click", this.clickVpaidHandler, this), this.vpaidPlayer.on("error", this.playbackErrorHandler, this), this.vpaidPlayer.on("impression", this.impressionHandler, this), this.vpaidPlayer.on("expandedChange", this.vpaidExpandedHandler, this), this.vpaidPlayer.on("close", this.adCloseHandler, this), this.vpaidPlayer.on("skipped", this.vpaidAdSkipped, this), this.vpaidPlayer.on("stopped", this.endOfVpaidAdHandler, this), this.vpaidPlayer.on("complete", this.adCompleteHandler, this), this.vpaidPlayer.on("started", this.adStartedHandler, this), this.vpaidPlayer.on("skippableStateChange", this.skippableStateChangeHandler, this), Promise.resolve()
            }
        }, {
            key: "skippableStateChangeHandler",
            value: function(e) {
                e.skippable && this.blockingInstreamPlayer && (this.blockingInstreamPlayer.off("adSkipped", this.skipVpaidAd, this), this.blockingInstreamPlayer.setupSkipButton(0, this.optionalParams, this.player.utils.noop), this.blockingInstreamPlayer.on("adSkipped", this.skipVpaidAd, this))
            }
        }, {
            key: "playInstream",
            value: function(e, t) {
                var i = this,
                    a = this.player.getEnvironment().OS;
                if (a.android && 2 === a.version.major && 3 === a.version.minor) return this.adError("Android 2.3 not supported", 900, 60007), Promise.reject();
                clearTimeout(this.creativeTimeout), this.blockingInstreamPlayer ? this.instreamPlayer = this.blockingInstreamPlayer : this.instreamPlayer = this.player.createInstream().init(), this.instreamPlayer.on("play", this.playHandler, this), this.instreamPlayer.on("pause", this.pauseHandler, this), this.instreamPlayer.on("time", this.timeHandler, this), this.instreamPlayer.on("playlistItem", this.playlistItemHandler, this), this.instreamPlayer.on("complete", this.adCompleteHandler, this), this.instreamPlayer.on("playlistComplete", this.endOfAdBreakHandler, this), this.instreamPlayer.on("mute", this.muteHandler, this), this.instreamPlayer.on("instreamClick", this.clickInstreamHandler, this), this.instreamPlayer.on("adSkipped", this.adSkipped, this), this.instreamPlayer.on("error", this.playbackErrorHandler, this), this.instreamPlayer.on("mediaError", this.playbackErrorHandler, this), this.instreamPlayer.on("destroyed", (function() {
                    i.instreamPlayer = null
                }), this);
                var r = this.instreamPlayer.loadItem(e, t);
                return this.clearBlocking(), r
            }
        }, {
            key: "playerFullscreenHandler",
            value: function(e) {
                var t = this.getVastAd().tracker;
                e.fullscreen && t.started && t.fullscreen()
            }
        }, {
            key: "playerResizeHandler",
            value: function(e) {
                this.vpaidPlayer && this.vpaidPlayer.resize(e.width, e.height)
            }
        }, {
            key: "playerVolumeHandler",
            value: function(e) {
                this.vpaidPlayer && this.vpaidPlayer.setVolume(e.volume)
            }
        }, {
            key: "playlistItemHandler",
            value: function(e) {
                var t = this;
                this.instreamPlayer && (clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout((function() {
                    t.creativeAdError("Video creative timeout", 402, 10402)
                }), this.scheduledAd.creativeTimeout), this.scheduledAd._adPodIndex = e.index + this.initialIndex, this.scheduledAd._adPodIndex > 0 && this.triggerEvent(S))
            }
        }, {
            key: "impressionHandler",
            value: function(e) {
                var t = this.getVastAd(),
                    i = t.tracker;
                i.impression(), this.player.getViewable() ? i.viewable() : i.notViewable();
                var a = n({}, this.scheduledAd, t);
                this.triggerEvent(R, pe(this.playlistItemManager, a, {
                    duration: e.duration || t.duration || this.getDurationFromVideoTag(),
                    linear: e.linear || i.linear
                })), this.setupViewableListener()
            }
        }, {
            key: "getDurationFromVideoTag",
            value: function() {
                var e = this.blockingInstreamPlayer ? this.blockingInstreamPlayer.getMediaElement() : null;
                return e ? e.duration : 0
            }
        }, {
            key: "setupViewableListener",
            value: function() {
                this.player.off("viewable", this.viewableHandler, this), this.player.on("viewable", this.viewableHandler, this), this.viewableHandler({
                    viewable: this.player.getViewable()
                })
            }
        }, {
            key: "viewableHandler",
            value: function(e) {
                e.viewable ? (this.viewablePlayedTime = 0, this.lastPosition = null, this.adViewableImpressionHandler = this.adViewableHandler) : this.adViewableImpressionHandler = this.player.utils.noop
            }
        }, {
            key: "playHandler",
            value: function(e) {
                var t = this;
                clearTimeout(this.creativeTimeout), this.creativeTimeout = null;
                var i, a = this.getVastAd(),
                    r = a.tracker;
                if (r.started) "paused" === e.oldstate && (r.resume(), this.dispatchPlay(e));
                else {
                    this.vpaidPlayer && (r.linear = e.linear), this.instreamPlayer && this.impressionHandler({
                        linear: r.linear
                    });
                    var s = n({}, this.scheduledAd, a),
                        o = pe(this.playlistItemManager, s, {
                            linear: r.linear,
                            metadata: !0
                        });
                    if (this.triggerEvent("adMeta", o), a.companions) {
                        var l = pe(this.playlistItemManager, s, {
                            companions: (i = a.companions, i.map((function(e) {
                                var t, i = "iframe" === e.type || "html" === e.type ? e.type : "static";
                                return e.trackers && e.trackers.creativeView && e.trackers.creativeView.length && (t = e.trackers.creativeView), {
                                    width: e.width,
                                    height: e.height,
                                    type: i,
                                    resource: e.source,
                                    creativeview: t,
                                    click: e.clickthrough
                                }
                            })))
                        });
                        this.triggerEvent("adCompanions", l)
                    }
                    a.icons && (a.iconInstances = a.icons.map((function(e) {
                        return new fe(t.player, e, t.div)
                    })));
                    var d, u = this.companion;
                    d = this.player.utils.flashVersion() > 9 ? a.companions : function(e) {
                        if (e) return e.filter((function(e) {
                            return e.type.indexOf("flash") < 0
                        }));
                        return []
                    }(a.companions), this.optionalParams.companion && d && d.length && (r.hasComp = u.addCompanion(this.optionalParams.companion, d)), r.start(), r.creativeView(), this.dispatchPlay(e)
                }
            }
        }, {
            key: "dispatchPlay",
            value: function(e) {
                "static" === this.adType || "vpaid" === this.adType && "linear" !== e.linear || (null === this.reason && "vpaid" === this.adType && (this.reason = H), this.setState(e))
            }
        }, {
            key: "pauseHandler",
            value: function(e) {
                clearTimeout(this.creativeTimeout), this.creativeTimeout = null, this.getVastAd().tracker.pause(), null === this.reason && "vpaid" === this.adType && (this.reason = H), this.setState(e)
            }
        }, {
            key: "setState",
            value: function(e) {
                var t = e.newstate,
                    i = e.oldstate,
                    a = t === P,
                    r = this.adEventObject(a ? "adPlay" : "adPause");
                (r.newstate = t, null !== this.reason) && (r[a ? "playReason" : "pauseReason"] = this.reason, this.reason = null);
                this.vpaidPlayer ? (r.oldstate = i, this.vpaidPlayer.trigger("state", r)) : this.instreamPlayer.setEventData(r)
            }
        }, {
            key: "remainingTimeHandler",
            value: function(e) {
                var t = this;
                e.duration ? this.duration = e.duration : this.duration = Math.max(1, this.duration, e.remainingTime);
                var i = e.remainingTime >= 0 ? this.duration - e.remainingTime : 0;
                this.position === i ? this.creativeTimeout = this.creativeTimeout || setTimeout((function() {
                    t.creativeAdError("Video stall", 400)
                }), this.scheduledAd.creativeTimeout) : this.creativeTimeout && (clearTimeout(this.creativeTimeout), this.creativeTimeout = null), this.timeHandler({
                    position: i,
                    duration: this.duration,
                    isDurationChange: e.isDurationChange
                })
            }
        }, {
            key: "quartileHandler",
            value: function(e) {
                if (e.duration) this.duration = e.duration;
                else {
                    var t = 4 * e.remainingTime / (4 - e.quartile);
                    this.duration = Math.max(this.duration, 1, t)
                }
                this.timeHandler({
                    position: this.duration * e.quartile * .25,
                    duration: this.duration
                })
            }
        }, {
            key: "adViewableHandler",
            value: function(e) {
                var t = e.position;
                null === this.lastPosition && (this.lastPosition = t);
                var i = t - this.lastPosition;
                this.lastPosition = t, i = Math.min(Math.max(0, i), 4), this.viewablePlayedTime += i, this.viewablePlayedTime >= 2 && (this.player.off("viewable", this.viewableHandler, this), this.adViewableImpressionHandler = this.player.utils.noop, this.triggerEvent("adViewableImpression", {}))
            }
        }, {
            key: "timeHandler",
            value: function(e) {
                var t = this.getVastAd(),
                    i = e.position,
                    a = e.duration;
                this.adViewableImpressionHandler(e);
                var r = a - i,
                    n = t.tracker,
                    s = this.optionalParams.dynamicMessage || "",
                    o = this.optionalParams.podMessage || "";
                if (s && r > 0) {
                    if (s = s.replace(/(\b)xx(s?\b)/gi, "$1".concat(Math.ceil(r), "$2")), this.adPodItems && this.adPodItems.length > 1 && o) {
                        var l = this.scheduledAd._adPodIndex + 1;
                        s = (o = (o = o.replace(/__AD_POD_CURRENT__/g, "".concat(l))).replace(/__AD_POD_LENGTH__/g, "".concat(this.adPodItems.length))) + " " + s
                    }
                    this.instreamPlayer ? this.instreamPlayer.setText(s) : this.vpaidPlayer && this.vpaidPlayer.instream && this.vpaidPlayer.instream.setText(s)
                }
                if (!e.isDurationChange) {
                    n && n.time(i, a), t.iconInstances && t.iconInstances.forEach((function(e) {
                        e.updateTime(i)
                    }));
                    var d = {};
                    d.position = this.position = i, d.duration = a, this.triggerEvent("adTime", d)
                }
            }
        }, {
            key: "combinedCompleteHandler",
            value: function() {
                this.adCompleteHandler(), this.endOfAdBreakHandler()
            }
        }, {
            key: "adCompleteHandler",
            value: function() {
                clearTimeout(this.viewableTimeout);
                var e = this.getVastAd();
                Ae(e);
                var t = e.tracker;
                t.firedError || (t.complete(), this.triggerEvent("adComplete"))
            }
        }, {
            key: "adCloseHandler",
            value: function() {
                clearTimeout(this.viewableTimeout);
                var e = this.getVastAd().tracker;
                e.firedError || e.close()
            }
        }, {
            key: "adStartedHandler",
            value: function() {
                this.triggerEvent("adStarted")
            }
        }, {
            key: "endOfVpaidAdHandler",
            value: function() {
                if (clearTimeout(this.viewableTimeout), this.adPodItems && this.adPodItems.length - 1 > this.scheduledAd._adPodIndex) return this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null), this.scheduledAd._adPodIndex++, void this.playAd();
                this.endOfAdBreakHandler()
            }
        }, {
            key: "endOfAdBreakHandler",
            value: function() {
                this.removePlayerListeners(), this.trigger(j)
            }
        }, {
            key: "muteHandler",
            value: function(e) {
                var t = this.getVastAd().tracker;
                t && (e.mute ? t.mute() : t.unmute(), this.vpaidPlayer && this.vpaidPlayer.setVolume(e.mute ? 0 : this.player.getVolume()))
            }
        }, {
            key: "clickStaticHandler",
            value: function() {
                var e = this.getVastAd();
                this.player.pause({
                    reason: "clickthrough"
                }), this.clickThrough(e)
            }
        }, {
            key: "clickVpaidHandler",
            value: function(e) {
                var t = this.getVastAd(),
                    i = !0;
                e && void 0 !== e.url && (!1 === e.playerHandles && (i = !1), t.clickthrough = e.url), this.clickThrough(t, i)
            }
        }, {
            key: "clickInstreamHandler",
            value: function() {
                "paused" !== this.instreamPlayer.getState() && this.clickThrough(this.getVastAd())
            }
        }, {
            key: "clickThrough",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                e.tracker.click();
                var i = {};
                e.clickthrough && (i.clickThroughUrl = e.clickthrough), this.reason = "clickthrough", this.triggerEvent("adClick", i), window.jwcast && window.jwcast.player.id || e.clickthrough && t && window.open(e.clickthrough)
            }
        }, {
            key: "skipVpaidAd",
            value: function() {
                this.vpaidPlayer && this.vpaidPlayer.skip() && this.vpaidAdSkipped()
            }
        }, {
            key: "vpaidAdSkipped",
            value: function() {
                this.adSkipped(), this.endOfVpaidAdHandler()
            }
        }, {
            key: "adSkipped",
            value: function() {
                clearTimeout(this.viewableTimeout);
                var e = this.getVastAd();
                e.tracker.skip(), Ae(e);
                var t = "vpaid" === this.adType ? void 0 : this.getSkipOffset(e);
                this.triggerEvent("adSkipped", {
                    duration: e.duration,
                    skipoffset: t,
                    position: this.position,
                    watchedPastSkipPoint: this.position - t
                })
            }
        }, {
            key: "playbackErrorHandler",
            value: function(e) {
                var t = e.message || "Error Playing Ad Tag",
                    i = e.code;
                i && 232404 === i ? i = 403 : (!i || i <= 4 || i > 901) && (i = 405), this.vpaidPlayer && "function" == typeof this.vpaidPlayer.off ? (this.vpaidPlayer.off(), this.creativeAdError(t, i, e.adErrorCode)) : this.adError(t, i, e.adErrorCode)
            }
        }, {
            key: "staticErrorHandler",
            value: function() {
                this.adError("Unable to fetch NonLinear resource", 502)
            }
        }, {
            key: "vpaidExpandedHandler",
            value: function(e) {
                var t = this.getVastAd().tracker;
                e.expanded ? t.expand() : t.collapse()
            }
        }, {
            key: "triggerEvent",
            value: function(e, t) {
                var i = this.adEventObject(e);
                t && n(i, t), this.trigger(e, i), -1 === U.indexOf(e) && this.player.trigger(e, i)
            }
        }]), e
    }();

    function ge(e) {
        return function(e) {
            return "application/javascript" === e.type || "application/x-javascript" === e.type
        }(e) ? "html5" : "flash"
    }

    function ye(e) {
        for (var t, i = 0; i < e.media.length; i++) {
            var a = e.media[i];
            if ("html5" === ge(a)) {
                t = a;
                break
            }
        }
        return t
    }

    function ke(e, t, i, a) {
        e.tracker = new ce(e, e.trackers, t, i, a)
    }

    function Ae(e) {
        e && e.iconInstances && (e.iconInstances.forEach((function(e) {
            e.remove()
        })), e.iconInstances = null)
    }
    var we = function() {
        function e(i, a, r) {
            t(this, e), this.debugTrackFn = i, this.div = null, this.elem = null, this.environment = a, this.utils = r
        }
        return a(e, [{
            key: "addCompanion",
            value: function(e, t) {
                if (this.div = e, this.elem = document.getElementById(this.div.id), !this.elem) return !1;
                for (var i = 0; i < t.length; i++)
                    if (this.fitsDiv(t[i])) return this.placeCompanion(t[i]), !0;
                return !1
            }
        }, {
            key: "removeCompanion",
            value: function() {
                this.elem.innerHTML = ""
            }
        }, {
            key: "sendPings",
            value: function(e) {
                (e = e.creativeView) && (e.forEach((function(e) {
                    (new Image).src = e
                })), "function" == typeof this.debugTrackFn && this.debugTrackFn({
                    type: "companion",
                    data: {
                        trackers: e
                    }
                }))
            }
        }, {
            key: "placeCompanion",
            value: function(e) {
                var t = this;
                if (this.removeCompanion(), "html" === e.type) {
                    var i = document.createElement("div");
                    i.innerHTML = e.source;
                    var a = i.getElementsByTagName("script");
                    return a.length && a.forEach((function(e) {
                        new t.utils.scriptloader(e.src).load(), e.parentElement.removeChild(e)
                    })), this.elem.appendChild(i), void this.sendPings(e.trackers)
                }
                if ("iframe" === e.type) {
                    var r = document.createElement("iframe");
                    return r.height = this.div.height, r.width = this.div.width, r.src = e.source, r.scrolling = "no", r.style.border = "none", r.marginWidth = 0, r.marginHeight = 0, this.sendPings(e.trackers), this.elem.innerHTML = "", void this.elem.appendChild(r)
                }
                if ("application/x-shockwave-flash" === e.type) {
                    var n = document.createElement("object");
                    return n.setAttribute("type", "application/x-shockwave-flash"), n.setAttribute("data", e.source), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("tabindex", 0), Pe(n, "allowfullscreen", "true"), Pe(n, "allowscriptaccess", "always"), Pe(n, "seamlesstabbing", "true"), Pe(n, "wmode", "opaque"), this.elem.appendChild(n), void this.sendPings(e.trackers)
                }
                var s = new Image;
                s.src = e.source, e.clickthrough && (s.onclick = function() {
                    t.utils.openLink(e.clickthrough, "_blank", {
                        rel: "noreferrer"
                    })
                }), this.elem.innerHTML = "", this.elem.appendChild(s), this.sendPings(e.trackers)
            }
        }, {
            key: "fitsDiv",
            value: function(e) {
                return e.width === this.div.width && e.height === this.div.height
            }
        }]), e
    }();

    function Pe(e, t, i) {
        var a = document.createElement("param");
        a.setAttribute("name", t), a.setAttribute("value", i), e.appendChild(a)
    }
    var be = /^((https?:)?\/\/)?(secure)?pubads\.g\.doubleclick\.net\/gampad\/ads\?[\S]*$/;

    function Te(e, t, i, a) {
        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (!e) return Promise.resolve(e);
        var n = function(e, t) {
                var i = e.getConfig(),
                    a = e.getPlaylistItem() === t;
                return {
                    playerHeight: e.getHeight() || i.height || "",
                    playerWidth: e.getWidth() || i.width || "",
                    itemDuration: a ? (r = e.getDuration(), n = 3, s = Math.pow(10, n), Math.round(r * s) / s || "") : "",
                    item: t,
                    jwpseg: de(e, t),
                    placement: oe(i),
                    userAgent: navigator.userAgent
                };
                var r, n, s
            }(t, i),
            s = se(); - 1 !== e.indexOf(h) && (r.jwpseg = n.jwpseg), e = _e(e, "__random-number__", Math.random() * Math.pow(10, 18)), e = _e(e, "__timestamp__", (new Date).getTime()), e = _e(e, "__page-url__", encodeURIComponent(s.url)), e = _e(e, "__referrer__", encodeURIComponent(s.referrer)), e = _e(e, "__player-height__", n.playerHeight), e = _e(e, "__player-width__", n.playerWidth), e = _e(e, "__item-duration__", n.itemDuration), e = _e(e, h, n.jwpseg), e = _e(e, "__domain__", encodeURIComponent(s.domain)), e = _e(e, "__placement__", n.placement), e = _e(e, "__device-ua__", encodeURIComponent(n.userAgent));
        for (var o = null, l = /__item-([\w-]+?)(-list)?__/g, d = e = a.companion ? _e(e, "__companion-div__", a.companion.id) : _e(e, "__companion-div__", ""); null !== (o = l.exec(d));) {
            var u = o[0],
                c = o[1],
                p = "";
            if (i.hasOwnProperty(c) && "string" == typeof i[c]) {
                (p = i[c]).length > 1e3 && (p = p.substring(0, 1e3));
                var v = o[2] ? "," : null;
                p = p.split(v).map(encodeURIComponent)
            }
            e = _e(e, u, p)
        }
        var f = t.getConfig().autostart ? 1 : 0,
            m = t.getMute() ? 1 : 0;
        return -1 !== (e = function(e, t, i) {
            be.test(e) && (e = "".concat(e, "&vpa=").concat(t, "&vpmute=").concat(i));
            return e
        }(e, f, m)).indexOf("__gdpr__") || -1 !== e.indexOf("__gdpr_consent__") ? re().then((function(t) {
            var i = t.gdprApplies,
                a = t.consentData;
            return e = _e(e, "__gdpr__", i ? 1 : 0), _e(e, "__gdpr_consent__", a)
        })).catch((function() {
            return e
        })) : Promise.resolve(e)
    }

    function _e(e, t, i) {
        return e.replace(t, i)
    }
    var Ie = Array.prototype,
        Ee = Ie.forEach,
        Ce = Ie.map,
        Re = function() {};

    function Se(e, t, i) {
        e.push({
            message: t,
            code: 1002,
            adErrorCode: 70001,
            id: i
        })
    }

    function xe() {
        var e = new Error("No AdBreaks in VMAP");
        throw e.adErrorCode = 60005, e
    }
    var je = function() {
        function i(e, a) {
            t(this, i), this.utils = a, this._error = null, this._version = null, e && this.parse(e)
        }
        return a(i, [{
            key: "error",
            value: function() {
                return this._error
            }
        }, {
            key: "version",
            value: function() {
                return this._version
            }
        }, {
            key: "parse",
            value: function(e, t) {
                var i, a = this;
                "VAST" === e.nodeName ? i = e : (i = Ve(e, "VAST")) || (i = Ve(e, "VideoAdServingTemplate")), i || this.throwError(101, "Invalid VAST response");
                var r = "VideoAdServingTemplate" === i.tagName ? 1 : parseFloat(Oe(i, "version") || 0);
                this._version = r;
                var n, s = Me(i, "Ad"),
                    o = Ce.call(s, (function(i) {
                        var n = a.parseAd(r, i);
                        return n.vastversion = r, n.response = e, n.request = t || null, n
                    }));
                return o.length || (n = Me(i, "Error"), Ee.call(n, (function(e) {
                    var t = He(e).replace(c, 303);
                    (new Image).src = t
                }))), o
            }
        }, {
            key: "parseAd",
            value: function(t, i, a) {
                a = a || {};
                var r, s, o, l = Ve(i, "InLine"),
                    d = Ve(i, "Wrapper"),
                    u = l || d,
                    c = Ve(u, "Advertiser");
                return a.sequence = Oe(i, "sequence"), a.adId = Oe(i, "id"), a.adTitle = He(Ve(u, "AdTitle")), a.advertiser = He(c), a.advertiserId = Oe(c, "id"), a.description = He(Ve(u, "Description")), a.dealId = He(Ve(u, "DealId")), (!t || t > 4.2 || t < 2) && this.throwError(102, "Vast version not supported"), t >= 4 && (a.conditionalAd = !!Oe(i, "conditionalAd")), u ? (qe(u, "Impression", (r = function(e, t, i) {
                    var a = Me(Ve(e, "Creatives"), "Creative"),
                        r = {},
                        n = {
                            trackers: r
                        };
                    n.adServingId = He(Ve(e, "AdServingId")), n.adsystem = He(Ve(e, "AdSystem"));
                    var s = Me(e, "Category");
                    return n.categories = Ce.call(s, (function(e) {
                        return He(e)
                    })), Ee.call(a, (function(e) {
                        var a = Ve(e, "Linear"),
                            s = Ve(e, "NonLinear"),
                            o = Me(Ve(e, "TrackingEvents"), "Tracking");
                        if (t >= 4) {
                            var l = Me(e, "UniversalAdId");
                            n.universalAdId = Ce.call(l, (function(e) {
                                return {
                                    universalAdIdRegistry: Oe(e, "idRegistry") || "unknown",
                                    universalAdIdValue: He(e) || Oe(e, "idValue") || "unknown"
                                }
                            }))
                        }
                        n.creativeId = Oe(e, "id"), n.creativeAdId = Oe(e, "adId"), (a || s) && Ee.call(o, (function(e) {
                            Be(r, e)
                        }));
                        var d = He(Ve(e, "AdParameters"));
                        if (d && (n.adParams = d), a) {
                            var u = Ve(a, "VideoClicks"),
                                c = He(Ve(u, "ClickThrough")),
                                h = Me(u, "ClickTracking"),
                                p = Oe(a, "skipoffset"),
                                v = He(Ve(a, "Duration"));
                            Ee.call(h, (function(e) {
                                    De(r, "click", He(e))
                                })), v && (n.duration = i.seconds(v)), c && (n.clickthrough = c), void 0 !== p && (n.skipoffset = p),
                                function(e, t) {
                                    var i = Me(Ve(e, "MediaFiles"), "MediaFile"),
                                        a = t.media ? t.media : [];
                                    t.media = a.concat(Ce.call(i, (function(e) {
                                        return {
                                            type: Oe(e, "type"),
                                            file: He(e),
                                            adType: Oe(e, "apiFramework") || "",
                                            width: parseInt(Oe(e, "width"), 10) || 0,
                                            height: parseInt(Oe(e, "height"), 10) || 0,
                                            bitrate: parseInt(Oe(e, "bitrate"), 10) || null,
                                            maxBitrate: parseInt(Oe(e, "maxBitrate"), 10) || null
                                        }
                                    })).filter((function(e) {
                                        return e.file
                                    })))
                                }(a, n),
                                function(e, t) {
                                    var i = Me(e, "Icon");
                                    t.icons = Array.prototype.reduce.call(i, (function(e, t) {
                                        var i, a;
                                        if (i = Ve(t, "StaticResource")) a = Oe(i, "creativeType");
                                        else if (i = Ve(t, "IFrameResource")) a = "iframe";
                                        else {
                                            if (!(i = Ve(t, "HTMLResource"))) return e;
                                            a = "html"
                                        }
                                        var r = He(i),
                                            n = {};
                                        n.iconClick = He(Ve(t, "IconClickTracking")) || null, n.iconView = He(Ve(t, "IconViewTracking")) || null;
                                        var s = Oe(t, "xPosition").toLowerCase(),
                                            o = Oe(t, "yPosition").toLowerCase(),
                                            l = {};
                                        return "left" === s || "right" === s ? l[s] = 0 : l.left = parseInt(s, 10) || 0, "top" === o || "bottom" === o ? l[o] = 0 : l.top = parseInt(o, 10) || 0, l.width = parseInt(Oe(t, "width"), 10) || 0, l.height = parseInt(Oe(t, "height"), 10) || 0, e.push({
                                            program: Oe(t, "program"),
                                            style: l,
                                            apiFramework: Oe(t, "apiFramework"),
                                            offset: Oe(t, "offset") || "00:00:00",
                                            duration: Oe(t, "duration") || null,
                                            clickThrough: He(Ve(t, "IconClickThrough")),
                                            trackers: n,
                                            resource: {
                                                resourceType: a,
                                                resourceSource: r
                                            }
                                        }), e
                                    }), t.icons || [])
                                }(a, n)
                        } else if (s) {
                            var f = He(Ve(s, "NonLinearClickThrough"));
                            f && (n.clickthrough = f),
                                function(e, t) {
                                    var i = [],
                                        a = Ve(e, "StaticResource");
                                    a && (i.push({
                                        type: Oe(a, "creativeType"),
                                        file: He(a),
                                        adType: Oe(Ve(e, "NonLinear"), "apiFramework") || "static",
                                        minDuration: Oe(Ve(e, "NonLinear"), "minSuggestedDuration") || "00:00:00"
                                    }), t.media = i)
                                }(e, n)
                        } else ! function(e, t) {
                            var i = Me(Ve(e, "CompanionAds"), "Companion"),
                                a = t.companions ? t.companions : [];
                            Ee.call(i, (function(e) {
                                var t, i, r = Ve(e, "StaticResource"),
                                    n = Ve(e, "IFrameResource"),
                                    s = Ve(e, "HTMLResource"),
                                    o = {};
                                if (r) t = Oe(r, "creativeType"), i = He(r);
                                else if (n) t = "iframe", i = He(n);
                                else {
                                    if (!s) return;
                                    t = "html", i = He(s)
                                }
                                var l = Me(Ve(e, "TrackingEvents"), "Tracking");
                                Ee.call(l, (function(e) {
                                    var t = Oe(e, "event");
                                    De(o, t, He(e))
                                }));
                                var d = He(Ve(e, "CompanionClickThrough"));
                                a.push({
                                    width: parseInt(Oe(e, "width"), 10),
                                    height: parseInt(Oe(e, "height"), 10),
                                    type: t,
                                    source: i,
                                    trackers: o,
                                    clickthrough: d
                                })
                            })), t.companions = a
                        }(e, n)
                    })), n
                }(u, t, this.utils)).trackers), qe(u, "Error", r.trackers), qe(u, "NotViewable", r.trackers), qe(u, "Viewable", r.trackers), function(e) {
                    var t = {};
                    e.media && e.media.forEach((function(e) {
                        var i = e.type,
                            a = "application/x-mpegURL" === i || "vnd.apple.mpegURL" === i;
                        "vpaid" === e.adType.toLowerCase() || a || (t[i] = t[i] || 0, t[i]++)
                    }));
                    e.mediaFileCompliance = !0, Object.keys(t).forEach((function(i) {
                        var a = t[i];
                        a < 3 && (e.mediaFileCompliance = !1, e.nonComplianceReasons = e.nonComplianceReasons || [], e.nonComplianceReasons.push("".concat(i, " has only ").concat(a, " qualities")))
                    }))
                }(r), d && (r.wrappedURI = He(Ve(d, "VASTAdTagURI")) || He(Ve(d, "VASTAdTagURL")), r.followAdditionalWrappers = JSON.parse(Oe(d, "followAdditionalWrappers")), r.allowMultipleAds = JSON.parse(Oe(d, "allowMultipleAds")), r.fallbackOnNoAd = JSON.parse(Oe(d, "fallbackOnNoAd"))), s = r, o = n({}, a), Object.keys(s).forEach((function(t) {
                    var i = s[t];
                    Array.isArray(o[t]) ? o[t] = o[t].concat(i) : "object" === e(o[t]) && null !== o[t] ? o[t] = n(o[t], i) : o[t] = i
                })), r = o) : this.throwError(303, "No ads", 10303), r
            }
        }, {
            key: "throwError",
            value: function(e, t, i) {
                throw this._error = new Error(t), this._error.code = e, this._error.adErrorCode = i || 1e4 + e, this._error
            }
        }]), i
    }();

    function Me(e, t, i) {
        var a = [];
        return e && (a = e.getElementsByTagName(t), i && a && 0 === a.length && (a = e.getElementsByTagName("".concat(i, ":").concat(t)))), a
    }

    function Ve(e, t) {
        if (e) {
            var i = e.getElementsByTagName(t);
            if (i) return i[0]
        }
        return null
    }

    function Le(e, t, i, a) {
        var r = [];
        return e || t ? r = t.getElementsByTagNameNS ? t.getElementsByTagNameNS(e, i) : t.getElementsByTagName("".concat(a, ":").concat(i)) : r
    }

    function Oe(e, t) {
        return e ? e.getAttribute(t) : null
    }

    function Be(e, t) {
        var i = Oe(t, "event");
        if ("progress" === i) {
            var a = Oe(t, "offset");
            i = "".concat(i, "_").concat(a)
        }
        De(e, i, He(t))
    }

    function He(e) {
        if (e) {
            var t = e.textContent || e.text;
            if (t) return le(t)
        }
        return ""
    }

    function De(e, t, i) {
        e[t] || (e[t] = []), i && (e[t].push(i), Ne(i))
    }

    function qe(e, t, i) {
        var a = Me(e, t);
        Ce.call(a, (function(e) {
            De(i, t.toLowerCase(), He(e))
        }))
    }
    var Ne = function(e) {
        (e.indexOf("[REGULATIONS]") >= 0 || e.indexOf("[GDPRCONSENT]") >= 0) && (re().catch(Re), Ne = Re)
    };

    function Fe(e) {
        e.onload = e.onreadystatechange = e.onerror = null, "abort" in e && e.abort()
    }
    var Ue = function() {
        function e(i, a) {
            t(this, e), this.adRules = i, this.utils = a, this.preRoll = null, this.vmap = null, this.postRoll = null, this.midRolls = [], this.playedMidRolls = [], this.duration = 0, this._vmapPromise = null, this._vmapXHR = null
        }
        return a(e, [{
            key: "load",
            value: function(e, t, i) {
                var a = this;
                if (this._vmapPromise) return this._vmapPromise;
                null !== this._vmapXHR && (Fe(this._vmapXHR), this._vmapXHR = null);
                var r = Te(this.getVMAP(), e, t, i);
                return this._vmapPromise = r.then((function(t) {
                    return new Promise((function(r, n) {
                        a._vmapXHR = e.utils.ajax({
                            url: t,
                            withCredentials: i.withCredentials,
                            retryWithoutCredentials: !0,
                            requireValidXML: !0,
                            timeout: a.requestTimeout
                        }, r, (function(e, t, i, a) {
                            return n(a)
                        }))
                    })).then((function(i) {
                        return a._vmapXHR = null,
                            function(e, t, i) {
                                var a = [],
                                    r = Me(e, "VMAP", v);
                                if (!r.length) throw new Error("No VMAP tag in response");
                                Oe(r[0], "version") || Se(a, "VMAP Schema Error: version missing from VMAP tag", d);
                                var n = Me(e, "AdBreak", v);
                                n.length || xe();
                                for (var s = e.lookupNamespaceURI(v), o = 0; o < n.length; o++) {
                                    var l = {},
                                        u = {},
                                        c = n[o],
                                        h = Oe(c, "timeOffset"),
                                        p = Oe(c, "breakId"),
                                        f = Oe(c, "breakType"),
                                        m = Oe(Me(c, "AdSource", v)[0], "id"),
                                        g = Me(c, "AdTagURI", v)[0],
                                        y = Me(c, "VASTData", v)[0] || Me(c, "VASTAdData", v)[0],
                                        k = Oe(g, "templateType"),
                                        A = He(g),
                                        w = Le(s, c, "Tracking", v);
                                    if (f || Se(a, "VMAP Schema Error: missing breakType on AdBreak", p), y || k || Se(a, "VMAP Schema Error: missing templateType on AdBreak", p), h || Se(a, "VMAP Schema Error: missing timeOffset on AdBreak", p), l._type = f, l._vmap = {
                                            id: m,
                                            breakid: p,
                                            timeoffset: h
                                        }, y) l._adXML = Ve(y, "VAST");
                                    else {
                                        if ("vast2" !== k && "vast3" !== k && "vast4" !== k) continue;
                                        l._adQueue = [A], l._waterfallIndex = 0
                                    }
                                    var P = [];
                                    if (w)
                                        for (var b = 0; b < w.length; b++) {
                                            Be(u, w[b]);
                                            var T = Oe(w[b], "event");
                                            P.push(T)
                                        }
                                    switch ((P.indexOf("breakStart") < 0 || P.indexOf("breakEnd") < 0 || P.indexOf("error") < 0) && Se(a, "Tracking events are missing breakStart, breakEnd, or error for AdBreak", p), l._trackers = u, l._type = f, h) {
                                        case "start":
                                            l._offSet = "pre", t.setPreRoll(l);
                                            break;
                                        case "100%":
                                        case "end":
                                            l._offSet = "post", t.setPostRoll(l);
                                            break;
                                        default:
                                            if (/^#/.test(h)) break;
                                            /^\d\d?(?:\.\d+)?%$/.test(h) ? l._offSet = h : l._offSet = i.seconds(h), t.addMidRoll(l)
                                    }
                                }
                                return t.preRoll || t.midRolls.length || t.postRoll || xe(), t.sort(null, !0), a
                            }(i.responseXML, a, e.utils).map((function(e) {
                                return n(e, {
                                    vmap: t
                                })
                            }))
                    })).catch((function(i) {
                        a._vmapXHR = null;
                        var r = {
                            id: d,
                            vmap: t
                        };
                        if (i.message) n(r, {
                            message: "VMAP Schema Error: ".concat(i.message),
                            code: 1002,
                            adErrorCode: i.adErrorCode || 11002
                        });
                        else {
                            var s = {
                                    1: {
                                        code: 1007,
                                        message: "Timeout"
                                    },
                                    602: {
                                        code: 1e3,
                                        message: "Invalid XML"
                                    },
                                    default: {
                                        code: 1008,
                                        message: e.getConfig().localization.errors[i.key]
                                    }
                                },
                                o = s[i.code] || s.default;
                            e.utils.log(o.message), n(r, {
                                message: "Error Loading VMAP Schedule",
                                code: o.code,
                                adErrorCode: o.code + 1e4
                            })
                        }
                        throw r
                    }))
                })), this._vmapPromise
            }
        }, {
            key: "canWaterfall",
            value: function(e) {
                return e._adQueue && e._waterfallIndex + 1 < e._adQueue.length
            }
        }, {
            key: "getPreRoll",
            value: function(e) {
                return e && "none" === this.adRules.startOnSeek ? null : Qe(this.preRoll, this.requestTimeout, this.creativeTimeout)
            }
        }, {
            key: "getPostRoll",
            value: function(e) {
                var t = Qe(this.postRoll, this.requestTimeout, this.creativeTimeout);
                return this.adRules.timeBetweenAdsAllowsAdPlayback(t, e) ? t : null
            }
        }, {
            key: "getMidRollAtIndex",
            value: function(e) {
                return Qe(this.midRolls[e], this.requestTimeout, this.creativeTimeout)
            }
        }, {
            key: "getLastMidRollIndexBetweenTime",
            value: function(e, t, i) {
                if (e > t) return null;
                this.sort(i);
                for (var a = this.midRolls.length; a--;) {
                    var r = this.midRolls[a],
                        n = Xe(this.midRolls[a]._offSet, i);
                    if (e >= n) return null;
                    if (t >= n) {
                        var s = Qe(r, this.requestTimeout, this.creativeTimeout);
                        if (!this.adRules.timeBetweenAdsAllowsAdPlayback(s)) return null;
                        if (!this.adRules.timeBetweenAds) {
                            if (this.playedMidRolls.indexOf(a) >= 0) return null;
                            this.playedMidRolls.push(a)
                        }
                        return a
                    }
                }
                return null
            }
        }, {
            key: "peek",
            value: function(e, t, i) {
                if (this.midRolls.length > this.playedMidRolls.length) {
                    this.sort(i);
                    for (var a = 0; this.midRolls[a];) {
                        var r = Xe(this.midRolls[a]._offSet, i);
                        if (r >= e && -1 === this.playedMidRolls.indexOf(a)) {
                            var n = ne() + 1e3 * (r - e);
                            return r <= t && this.adRules.timeBetweenAdsAllowsAdPlayback(null, n) ? a : null
                        }
                        a += 1
                    }
                }
                var s = ne() + 1e3 * (i - e);
                return this.postRoll && t >= i && this.adRules.timeBetweenAdsAllowsAdPlayback(null, s) ? -1 : null
            }
        }, {
            key: "getNextMidrollIndex",
            value: function(e, t, i) {
                if (this.adRules.timeBetweenAds || this.adRules.startOnSeek) return this.getLastMidRollIndexBetweenTime(e, t, i);
                if (this.midRolls.length > this.playedMidRolls.length) {
                    var a = this.getClosestIndex(t, i);
                    if (a >= 0 && this.playedMidRolls.indexOf(a) < 0) return this.playedMidRolls.push(a), a
                }
                return null
            }
        }, {
            key: "getMidRolls",
            value: function() {
                var e = this;
                return this.midRolls.map((function(t) {
                    return Qe(t, e.requestTimeout, e.creativeTimeout)
                }))
            }
        }, {
            key: "reset",
            value: function() {
                null !== this._vmapXHR && (Fe(this._vmapXHR), this._vmapXHR = null), this.playedMidRolls = [], this.duration = 0
            }
        }, {
            key: "resetBreakIdByOffset",
            value: function(e) {
                var t;
                e && (t = "pre" === e ? this.preRoll : "post" === e ? this.postRoll : this.midRolls[e], this.resetBreakId(t))
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
                    return Xe(t._offSet, e) - Xe(i._offSet, e)
                })), function(e, t) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        t ? a._vmap.item = i + 1 : (a._adbreak = {
                            item: i + 1,
                            breakid: a._breakId
                        }, a._pod ? a._adbreak.pod = a._pod : a._adbreak.tags = a._adQueue)
                    }
                }(this.getAllAds(), t))
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
            key: "getVMAP",
            value: function() {
                return this.vmap
            }
        }, {
            key: "getClosestIndex",
            value: function(e, t) {
                this.sort(t);
                for (var i = this.midRolls.length; i--;)
                    if (e >= Xe(this.midRolls[i]._offSet, t)) return i;
                return -1
            }
        }, {
            key: "resetBreakId",
            value: function(e) {
                e.adBreakId = this.utils.genId(12)
            }
        }]), e
    }();

    function Qe(e, t, i) {
        var a;
        if (null !== e) return Object.keys(e).forEach((function(t) {
            var i = e[t];
            (a = a || {})[t] = "_adQueue" === t || "_pod" === t ? i.slice() : i
        })), a ? (a.requestTimeout = t, a.creativeTimeout = i, a._errors = [], a._waterfallIndex = 0, a._adPodIndex = 0, a) : void 0
    }

    function Xe(e, t) {
        return "%" === e.toString().slice(-1) ? t * parseFloat(e.slice(0, -1)) / 100 : parseFloat(e)
    }
    var We = function() {
        function e(i) {
            t(this, e), this.utils = i
        }
        return a(e, [{
            key: "getSchedule",
            value: function(e, t) {
                var i = new Ue(t, this.utils);
                if (i.requestTimeout = Ge(e.requestTimeout, f), i.creativeTimeout = Ge(e.creativeTimeout, m), e.tag) i.setPreRoll({
                    _offSet: "pre",
                    _adQueue: ze(e.tag),
                    _waterfallIndex: 0
                });
                else if ("string" == typeof e.vastxml) i.setPreRoll({
                    _offSet: "pre",
                    _adXML: e.vastxml
                });
                else {
                    if ("string" == typeof e.schedule) return i.setVMAP(e.schedule), i;
                    if ("string" == typeof e.adschedule) return i.setVMAP(e.adschedule), i;
                    ! function(e, t, i) {
                        var a = t.schedule || t.adschedule;
                        if (!a) return;
                        var r = {};
                        Object.keys(a).forEach((function(e) {
                            var t = a[e];
                            t.ad && (n(t, t.ad), delete t.ad);
                            var s = function(e, t) {
                                    if ("start" === e || "0%" === e || !e && 0 !== e) return "pre";
                                    if ("end" === e || "100%" === e) return "post";
                                    if ("pre" === e || "post" === e || (e + "").indexOf("%") >= 0) return e;
                                    var i = t.seconds(e);
                                    if ("number" == typeof i) return i;
                                    return !1
                                }(t.offset, i),
                                o = Ge(t.requestTimeout, f),
                                l = Ge(t.creativeTimeout, m),
                                d = r[s];
                            if (d) {
                                if ("nonlinear" === t.type) return;
                                "nonlinear" === d._type && (d = null)
                            }
                            var u = r[s] = d || {
                                _offSet: s,
                                _type: t.type,
                                _breakId: e,
                                requestTimeout: o,
                                creativeTimeout: l
                            };
                            !1 === s && i.log("Error: ad offset format not supported", s);
                            var c = t.skipoffset;
                            if (void 0 !== c && void 0 === u.skipoffset && (u.skipoffset = c), t.pod) {
                                var h = u._pod || [];
                                u._pod = h.concat(t.pod)
                            } else if (t.tag) {
                                var p = function(e, t) {
                                    if (!t) return e;
                                    var i = e.indexOf("?") >= 0 ? "&" : "?",
                                        a = e.indexOf("cust_params="),
                                        r = "cust_params=".length,
                                        n = "",
                                        s = "";
                                    if (Object.keys(t).forEach((function(e) {
                                            var i = t[e];
                                            n = "".concat(n).concat(s).concat(e, "=").concat(i), s = "&"
                                        })), n = encodeURIComponent(n), a >= 0) {
                                        var o = e.substr(0, a + r),
                                            l = e.substr(a + r);
                                        return "".concat(o).concat(n, "%26").concat(l)
                                    }
                                    return "".concat(e).concat(i, "cust_params=").concat(n)
                                }(t.tag, t.custParams);
                                u._adQueue && (u._pod = [u._adQueue[0]], delete u._adQueue), u._pod ? u._pod.push(ze(p)[0]) : u._adQueue = ze(p)
                            } else {
                                if ("string" != typeof t.vastxml) return void i.log("Error: no ad tag provided");
                                u._adXML = t.vastxml
                            }
                        })), Object.keys(r).forEach((function(i) {
                            var a = r[i];
                            switch (a.skipoffset = void 0 !== a.skipoffset ? a.skipoffset : t.skipoffset, i) {
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
                    }(i, e, this.utils)
                }
                return i.sort(), i
            }
        }, {
            key: "getOptParams",
            value: function(e, t) {
                var i = {
                        cuetext: t.cuetext,
                        dynamicMessage: t.admessage,
                        loadingAd: t.loadingAd,
                        podMessage: t.podmessage,
                        skipoffset: e.skipoffset,
                        skipMessage: t.skipmessage,
                        skipText: t.skiptext,
                        vpaidcontrols: e.vpaidcontrols || !1,
                        conditionaladoptout: e.conditionaladoptout || !1,
                        requestFilter: e.requestFilter,
                        trackingFilter: e.trackingFilter,
                        withCredentials: void 0 === e.withCredentials || e.withCredentials
                    },
                    a = e.companiondiv;
                return a && (i.companion = {
                    id: a.id,
                    height: a.height,
                    width: a.width
                }), i
            }
        }, {
            key: "getAdRules",
            value: function(e) {
                var t = e.rules || {},
                    i = parseInt(t.frequency, 10);
                return {
                    startOn: t.startOn || 1,
                    frequency: isNaN(i) ? 1 : i,
                    timeBetweenAds: t.timeBetweenAds || 0,
                    startOnSeek: t.startOnSeek || null,
                    deferAds: t.deferAds || null
                }
            }
        }]), e
    }();

    function ze(e) {
        return Array.isArray(e) ? e.slice(0) : [e]
    }

    function Ge(e, t) {
        return 0 === e ? 1 / 0 : e || t
    }
    var $e = function() {
        function i(e, a, r, s, o) {
            t(this, i), this._scheduledAd = e, this.player = a, this.options = r, this.item = r.item, this.params = r.params || {}, this.wrapperOptions = s || {
                followAdditionalAds: !0,
                allowMultipleAds: !0
            }, this.debugTrackFn = o, n(this, a.Events), this._history = [], this.loadedAds = [], this.parser = null, this.promise = null, this.xmlhttp = null, this.wrappedTags = null, this.options.isPodItemLoader || (e.adPlayIds = {})
        }
        return a(i, [{
            key: "load",
            value: function(e) {
                var t = this;
                if (null === this.promise) {
                    this._history.push(e);
                    var i = this.options.requestFilter;
                    this.promise = new Promise((function(a, r) {
                        t.xmlhttp = t.player.utils.ajax({
                            url: e,
                            withCredentials: t.params.withCredentials,
                            retryWithoutCredentials: !0,
                            requireValidXML: !0,
                            timeout: t._scheduledAd.requestTimeout,
                            requestFilter: i
                        }, a, (function(e, t, i, a) {
                            return r(a)
                        }))
                    })).catch((function(i) {
                        if (null !== t.player) throw t.ajaxError(i, e)
                    })).then((function(i) {
                        if (null !== t.player) return t.parseXMLString(i.responseXML || i.responseText, e)
                    }))
                }
                return this.promise
            }
        }, {
            key: "destroy",
            value: function() {
                var e;
                (e = this.xmlhttp) && (e.onload = null, e.onreadystatechange = null, e.onerror = null, e.abort && e.abort()), this.player = null, this.xmlhttp = null
            }
        }, {
            key: "scheduledAd",
            value: function() {
                return this._scheduledAd
            }
        }, {
            key: "allAds",
            value: function() {
                return this.loadedAds
            }
        }, {
            key: "podMultipleVastLoaders",
            value: function(e) {
                var t = this,
                    i = e.map((function(e) {
                        return e.then((function(e) {
                            var i = e.adPod();
                            if (i.length) return i;
                            var a = e.adBuffet();
                            return a.length ? [a[0]] : Promise.reject({
                                vloader: t,
                                message: "No compatible ad"
                            })
                        })).catch((function(e) {
                            return {
                                error: e
                            }
                        }))
                    }));
                return Promise.all(i).then((function(e) {
                    var i = 0,
                        a = e.reduce((function(e, a, r) {
                            if (a.error) return a.error.tagIndex = r, t.trigger(M, a.error), e;
                            if (a.length && 0 !== r) {
                                var n = "p".concat(i, "w").concat(t._scheduledAd._waterfallIndex);
                                t._scheduledAd.adPlayIds[n] = t._scheduledAd.adRequestIds[r]
                            }
                            return a.forEach((function(t) {
                                t.sequence = ++i, e.push(t)
                            })), e
                        }), []);
                    return a.length ? (t.loadedAds = a, t) : null
                }))
            }
        }, {
            key: "adPod",
            value: function() {
                var e = [];
                return this.loadedAds.forEach((function(t) {
                    t.sequence && e.push(t)
                })), e.sort((function(e, t) {
                    return e.sequence - t.sequence
                })), e
            }
        }, {
            key: "adBuffet",
            value: function() {
                var e = [];
                return this.loadedAds.forEach((function(t) {
                    t.sequence || e.push(t)
                })), e
            }
        }, {
            key: "parseXMLString",
            value: function(t, a) {
                var r = this;
                return null === this.parser && (this.parser = new je(null, this.player.utils)), new Promise((function(i) {
                    var a, n = (a = t, ("object" === ("undefined" == typeof Node ? "undefined" : e(Node)) ? a instanceof Node : a && "object" === e(a) && "number" == typeof a.nodeType && "string" == typeof a.nodeName) ? t : r.player.utils.parseXML(t));
                    if (null === n) {
                        throw {
                            message: "Invalid XML",
                            code: 100
                        }
                    }
                    return i(r.parser.parse(n, r.xmlhttp))
                })).catch((function(e) {
                    if (null !== r.player) {
                        var t = e.code || 900,
                            i = e.adErrorCode || 1e4 + t;
                        throw r.sendErrorEvent(e.message, t, i, a)
                    }
                })).then((function(e) {
                    if (null === r.player) return null;
                    if (0 === e.length) throw r.sendErrorEvent("No ads", 303, 10303, a);
                    var t = e.filter((function(e) {
                        return !e.sequence
                    })).map((function(e) {
                        return e._currentTag = a, e
                    }));
                    r.wrapperOptions.allowMultipleAds ? r.loadedAds = e : r.loadedAds = t, r.options.wrapper = r.options.wrapper || [], r.options.adsystem && r.options.wrapper.push(r.options.adsystem), r.options.adsystem = r.loadedAds[0].adsystem;
                    var n = [];
                    return e.forEach((function(e, a) {
                        if (e.wrappedURI) {
                            if (!1 === r.wrapperOptions.followAdditionalWrappers) return;
                            r.options.wrappedTags = r.options.wrappedTags || [r._scheduledAd._currentTag], r.options.wrappedTags.push(e.wrappedURI);
                            var s = new i(r._scheduledAd, r.player, r.options, {
                                    fallbackOnNoAd: e.fallbackOnNoAd,
                                    allowMultipleAds: e.allowMultipleAds,
                                    followAdditionalWrappers: e.followAdditionalWrappers
                                }, r.debugTrackFn),
                                o = Te(e.wrappedURI, r.player, r.item, r.params, e).then((function(e) {
                                    return s.load(e)
                                })).then((function(t) {
                                    var i, a, n, s = (i = e, a = t.allAds(), n = [], a.forEach((function(e) {
                                            var t, a;
                                            i.companions && (e.companions = (e.companions ? e.companions : []).concat(i.companions)), i.trackers && (e.trackers = (t = e.trackers, a = i.trackers, t = t || {}, Object.keys(a).forEach((function(e) {
                                                var i = a[e];
                                                t[e] ? t[e] = t[e].concat(i) : t[e] = i
                                            })), t)), i.sequence && (e.sequence = i.sequence), i._currentTag && (e._currentTag = i._currentTag), n.push(e)
                                        })), n),
                                        o = r.loadedAds.indexOf(e);
                                    Array.prototype.splice.apply(r.loadedAds, [o, 1].concat(s))
                                })).catch((function(i) {
                                    var n = r.sendAdpodErrorEvent(i, e, a),
                                        s = e.fallbackOnNoAd && e.sequence && t.length,
                                        o = r.loadedAds.indexOf(e);
                                    if (s) return e.loadError = n, void i.vloader.destroy();
                                    if (r.loadedAds.splice(o, 1), i.vloader.destroy(), n.type !== M) throw n;
                                    r.trigger(M, n)
                                }));
                            n.push(o)
                        } else r.options.wrapper.length && (e.wrapper = r.options.wrapper, e.wrappedTags = r.options.wrappedTags)
                    })), Promise.all(n)
                })).then((function() {
                    if (null === r.player) return null;
                    var e = r.loadedAds.filter((function(e) {
                        return !e.sequence
                    }));
                    r.loadedAds.forEach((function(t, i) {
                        if (t.loadError)
                            if (e.length) {
                                var a = r.loadedAds[i + 1],
                                    s = a && !a.sequence ? a : e[0];
                                r.loadedAds[i] = n({}, s, {
                                    sequence: t.sequence
                                })
                            } else r.trigger(M, t.loadError)
                    }));
                    var t = r.loadedAds.slice(0),
                        i = t.length;
                    t.forEach((function(e) {
                        e.media && e.media.length || t.length--
                    }));
                    var a = 0 === i,
                        s = t.length !== i;
                    if (a || s) throw r.sendErrorEvent("Ad Tag Empty", 101, 10101, r._history[r._history.length - 1]);
                    return r
                }))
            }
        }, {
            key: "ajaxError",
            value: function(e, t) {
                if (this.player.getAdBlock()) return this.sendErrorEvent("Ad playback blocked by an ad blocker", 900, 60003, t);
                var i = e.code;
                if (601 === i || 602 === i) return this.sendErrorEvent("Invalid XML", 100, 10100, t);
                var a = this.options.wrappedTags && this.options.wrappedTags.length,
                    r = a ? 301 : 900,
                    n = a ? 10301 : 60006;
                return this.sendErrorEvent(e.message || "Error loading file", r, n, t)
            }
        }, {
            key: "firstUrl",
            value: function() {
                return this._history && this._history.length ? this._history[0] : ""
            }
        }, {
            key: "sendAdpodErrorEvent",
            value: function(e, t, i) {
                var a = e.message,
                    r = e.code,
                    n = e.adErrorCode,
                    s = e.url;
                if (1 === this.loadedAds.length) return this.sendErrorEvent(a, r, n, s, i);
                var o = {
                    message: a,
                    code: r,
                    adErrorCode: n,
                    podIndex: i,
                    vloader: this,
                    tag: this.firstUrl() || s,
                    type: M
                };
                return this.trackError(o, t), this.wrappedTags = s, o
            }
        }, {
            key: "sendErrorEvent",
            value: function(e, t, i, a, r) {
                var n = {
                    message: e,
                    code: t,
                    adErrorCode: i,
                    podIndex: r,
                    vloader: this,
                    tag: this.firstUrl() || a,
                    adsystem: this.options.adsystem || ""
                };
                return this.options.wrappedTags && (n.wrapperAdSystem = this.options.wrapper || "", n.wrappedTags = this.options.wrappedTags), this.trackError(n), n
            }
        }, {
            key: "trackError",
            value: function(e, t) {
                var i = e.vloader.allAds();
                if (i && i.length) {
                    var a = t || i[0];
                    if (a) {
                        var r = a.trackers;
                        if (r && r.error) new ce(a, r, this.debugTrackFn, this.player, this.options.trackingFilter).error(e.code)
                    }
                }
            }
        }]), i
    }();
    var Je = function() {},
        Ye = function() {
            function e(i, a, r, s, o) {
                t(this, e), this.config = s, this.item = r, this.params = o, this.player = i, this.schedule = a, this.vmapPromise = null, this._preRollPromise = null, this._midRollPromise = {}, this._postRollPromise = null, this.vmapTracker = null, this._events = [], this._vloaderQueue = [], this._staticAdsOffset = [], this.bidding = i.getPlugin("bidding"), this.bids = [], this.bidsPromises = [], this.bidsPromise = null, this._debugTrackFn = s.debug && s.trackFn ? s.trackFn : null, n(this, i.Events)
            }
            return a(e, [{
                key: "init",
                value: function(e, t) {
                    var i = this,
                        a = this.schedule;
                    return a.isVMAP() && (this.vmapPromise = a._vmapPromise.catch(Je)), this.bidsPromise = this.vmapPromise || Promise.resolve(), null !== e && (this.bidsPromise = this.bidsPromise.then((function() {
                        if (!i.isDestroyed()) {
                            if (i.bidding) return i._createBidsPromise(e, t);
                            var a = he(i, {
                                message: "Ad Error: bidding plugin failed to load",
                                adErrorCode: 60008
                            }, null, t);
                            i.trigger(C, a)
                        }
                    }))), this.bidsPromise
                }
            }, {
                key: "_createBidsPromise",
                value: function(e, t) {
                    var i = this,
                        a = this.player,
                        r = parseInt(e.bidOnBreaks, 10);
                    return r = r > 0 ? r : 1 / 0, this.bids = this.schedule.getAllAds().slice(0, r).map((function(e) {
                        var r = i.getAdIds(e).adPlayId,
                            s = a.getConfig(),
                            o = i.config.skipoffset,
                            l = null != o && o >= 0,
                            d = de(a, i.item),
                            u = i.bidding.createNewBid({
                                id: r,
                                offset: e._offSet,
                                jwpseg: d,
                                placement: oe(s),
                                skipoffset: l ? o : -1,
                                tag: e._adQueue ? e._adQueue[0] : e._currentTag
                            }, {
                                getURLParts: se
                            });
                        i.trigger(b, pe(i, e, n({
                            jwpseg: d
                        }, t))), u.init();
                        var c = u.start().then((function(a) {
                            var r = a.result;
                            i.isDestroyed() || (r && !r.error && (r.adm ? (e.jwpseg = d, e._adXML = r.adm, e._adQueue && e._adQueue.length && e._adQueue.unshift(r.adm)) : r.tag && (e.jwpseg = d, e._adQueue = e._adQueue || [], e._adQueue.unshift(r.tag))), i.trigger(T, pe(i, e, t)))
                        }));
                        return i.bidsPromises.push(c), u
                    })), Promise.all(this.bidsPromises)
                }
            }, {
                key: "getAdIds",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = t.tagIndex,
                        a = t.podIndex,
                        r = e.adRequestIds && void 0 !== i ? e.adRequestIds[i] : null;
                    if (!r) {
                        var n = a || e._adPodIndex || 0,
                            s = "p".concat(n, "w").concat(e._waterfallIndex || 0);
                        r = "p0w0" === s ? e.adBreakId : e.adPlayIds[s] = e.adPlayIds[s] || this.player.utils.genId(12)
                    }
                    return {
                        adBreakId: e.adBreakId,
                        adPlayId: r
                    }
                }
            }, {
                key: "loadPreRoll",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null === this._preRollPromise && (this._preRollPromise = this.bidsPromise.then((function() {
                        if (!e.isDestroyed()) {
                            var i = e.schedule.getPreRoll(t.startTime);
                            return i ? (i._position = "pre", e.loadAd(i, t)) : void 0
                        }
                    }))), this._preRollPromise
                }
            }, {
                key: "loadMidRollAtIndex",
                value: function(e, t) {
                    var i = this;
                    return this._midRollPromise[e] || (this._midRollPromise[e] = this.bidsPromise.then((function() {
                        if (!i.isDestroyed()) {
                            var a = i.schedule.getMidRollAtIndex(e);
                            return a ? (a._position = "mid", i.loadAd(a, t)) : void 0
                        }
                    }))), this._midRollPromise[e]
                }
            }, {
                key: "loadPostRoll",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return null === this._postRollPromise && (this._postRollPromise = this.bidsPromise.then((function() {
                        if (!e.isDestroyed()) {
                            var i = e.schedule.getPostRoll(t.startTime);
                            return i ? (i._position = "post", e.loadAd(i, t)) : void 0
                        }
                    }))), this._postRollPromise
                }
            }, {
                key: "loadAd",
                value: function(e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = this.player.utils;
                    if (e._id = e._id || a.genId(12), this.config.preloadAds && (e._preload = i.preload || !1), e._vmapTracker = this.getVMAPTracker(e), e._adQueue || e._adXML || e._pod) {
                        if (i.adBlock) throw he(this, {
                            message: "Ad playback blocked by an ad blocker",
                            adErrorCode: 600003
                        }, e, i);
                        var r;
                        if (e._pod) return this._loadPods(e, i);
                        var n = function() {
                            return t.isDestroyed() ? null : t._dispatchAdLoaded(e, i)
                        };
                        return (r = e._adXML ? this._loadXML(e, i) : this._loadTag(e, i)).then(n).catch(Je), r.catch(n).catch(Je), r.catch((function(e) {
                            return t.isDestroyed() ? null : t._vloaderWaterfall(e, i)
                        }))
                    }
                    a.log("scheduled ad has no url or xml", e)
                }
            }, {
                key: "getVMAPTracker",
                value: function(e) {
                    if (!e._vmapTracker) {
                        var t = new ce(e, e._trackers, this._debugTrackFn, this.player, this.config.trackingFilter);
                        e._vmapTracker = this.vmapTracker = t
                    }
                    return e._vmapTracker
                }
            }, {
                key: "_loadTagUrl",
                value: function(e, t, i) {
                    var a = this;
                    return Te(t, this.player, this.item, this.params, e).then((function(r) {
                        "function" == typeof a._debugTrackFn && a._debugTrackFn({
                            type: "tagReplacement",
                            data: {
                                actualTag: r,
                                originalTag: t
                            }
                        });
                        var s = a._createVastLoader(e, i),
                            o = s.load(r);
                        return i.isPodItemLoader ? i.tagIndex && (s.scheduledAd().adRequestIds[i.tagIndex] = a.player.utils.genId(12)) : e._currentTag = r, a._dispatchAdRequest(e, n({
                            tag: r
                        }, i)), o
                    }))
                }
            }, {
                key: "_loadTag",
                value: function(e, t) {
                    var i = e._adQueue[e._waterfallIndex];
                    return this._loadTagUrl(e, i, t)
                }
            }, {
                key: "_loadPods",
                value: function(e, t) {
                    var i = this;
                    e.adRequestIds = [];
                    var a = this._createVastLoader(e, t),
                        r = e._pod.map((function(a, r) {
                            var s = n({
                                    tag: a,
                                    isPodItemLoader: !0,
                                    tagIndex: r
                                }, t),
                                o = i._loadTagUrl(e, a, s).catch((function(e) {
                                    return e.tagIndex = r, Promise.reject(e)
                                })),
                                l = function() {
                                    return i.isDestroyed() ? null : i._dispatchAdLoaded(e, s)
                                };
                            return o.then(l).catch(Je), o.catch(l).catch(Je), o
                        }));
                    return a.podMultipleVastLoaders(r)
                }
            }, {
                key: "_loadXML",
                value: function(e, t) {
                    var i;
                    e._currentTag = e._currentTag || ((i = e._adXML).ownerDocument instanceof Document ? i.outerHTML || (new XMLSerializer).serializeToString(i) : null) || e._adXML.toString();
                    var a = this._createVastLoader(e, t).parseXMLString(e._adXML, e._currentTag);
                    return this._dispatchAdRequest(e, t), a
                }
            }, {
                key: "_dispatchAdRequest",
                value: function(e, t) {
                    this.trigger(V, pe(this, e, n({
                        jwpseg: e.jwpseg
                    }, t)))
                }
            }, {
                key: "_dispatchAdLoaded",
                value: function(e, t) {
                    this.trigger(x, pe(this, e, t))
                }
            }, {
                key: "_handleVastLoadError",
                value: function(e, t, i) {
                    var a = e.vloader;
                    return this.removeVastLoader(a), this._getVloaderErrorObject(e, t, i)
                }
            }, {
                key: "_vloaderWaterfall",
                value: function(e, t) {
                    var i = this._handleVastLoadError(e, null, t),
                        a = e.vloader;
                    return this.adWaterfall(a, i, t)
                }
            }, {
                key: "adWaterfall",
                value: function(e, t, i) {
                    var a = e.scheduledAd();
                    if (this.schedule.canWaterfall(a)) return a.jwpseg = null, a._adXML = null, a._waterfallIndex += 1, this._enqueueAdEvent(C, t, i), this.loadAd(a, i);
                    throw t
                }
            }, {
                key: "addStaticOffset",
                value: function(e) {
                    this._staticAdsOffset.push(e)
                }
            }, {
                key: "_createVastLoader",
                value: function(e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = this.config,
                        r = new $e(e, this.player, n({
                            requestFilter: a.requestFilter,
                            trackingFilter: a.trackingFilter,
                            item: this.item,
                            params: this.params
                        }, i));
                    this._vloaderQueue.push(r);
                    var s = 0;
                    return r.on(M, (function(a) {
                        s += 1;
                        var n = t._getVloaderErrorObject(a, null, i);
                        if (t._enqueueAdEvent(C, n, i), !(r._scheduledAd._pod && r._scheduledAd._pod.length === s)) {
                            var o = pe(t, e, {
                                podIndex: r._scheduledAd._adPodIndex,
                                tagIndex: s
                            }, i);
                            t._enqueueAdEvent(S, o, i)
                        }
                    })), r
                }
            }, {
                key: "_getVloaderErrorObject",
                value: function(e, t, i) {
                    e.wrapperAdSystem && e.wrapperAdSystem.length !== e.wrappedTags.length && (e.wrapperAdSystem.push(e.adsystem), e.adsystem = "");
                    var a = n({
                        adsystem: e.adsystem,
                        wrapper: e.wrapperAdSystem,
                        wrappedTags: e.wrappedTags
                    }, e.vloader.scheduledAd());
                    return he(this, e, a, n({
                        tag: e.tag,
                        tagIndex: e.tagIndex || t,
                        podIndex: e.podIndex
                    }, n({
                        jwpseg: a.jwpseg
                    }, i)))
                }
            }, {
                key: "_enqueueAdEvent",
                value: function(e, t, i) {
                    this._events.push({
                        type: e,
                        event: t
                    }), i.preload || this.dequeueAdEvents()
                }
            }, {
                key: "dequeueAdEvents",
                value: function() {
                    var e = this;
                    this._events.forEach((function(t) {
                        var i = t.type,
                            a = t.event;
                        return e.trigger(i, a)
                    })), this._events.splice(0)
                }
            }, {
                key: "removeVastLoader",
                value: function(e) {
                    var t = this._vloaderQueue.indexOf(e); - 1 !== t && (e.destroy(), this._vloaderQueue.splice(t, 1))
                }
            }, {
                key: "isDestroyed",
                value: function() {
                    return null === this.player
                }
            }, {
                key: "destroy",
                value: function() {
                    this.bids.forEach((function(e) {
                        return e.stop()
                    })), this.bidsPromises = [], this._vloaderQueue.forEach((function(e) {
                        return e.destroy()
                    })), this.player = null
                }
            }]), e
        }(),
        Ke = document.createElement("img"),
        Ze = document.createElement("img");
    Ke.src = Ze.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="%23191919"/><line stroke="%23CCC" stroke-width="6" x1="32" y1="20" x2="32" y2="44"/><line stroke="%23CCC" stroke-width="6" x1="20" y1="32" x2="44" y2="32"/></svg>', Ke.className = "jw-vast-nonlinear-open-button", Ze.className = "jw-vast-nonlinear-close-button";
    var et = function() {
            function e(i, a, r, s, o) {
                t(this, e), this.player = i, this.environment = i.getEnvironment(), this.div = s, this.staticURL = a, this.clickURL = r, this.loadTimer = -1, this.animationTimer = -1, this.banner = null, n(this, i.Events), this.banner = document.createElement("img"), this.banner.className = "jw-banner", this.banner.id = this.player.id + "_vast_static", this.div.appendChild(Ke), this.div.appendChild(this.banner), this.div.appendChild(Ze), this.loadTimer = setTimeout(this.imageLoadError.bind(this), o), this.banner.onerror = this.imageLoadError.bind(this), this.banner.onload = this.onLoaded.bind(this), this.banner.src = this.staticURL
            }
            return a(e, [{
                key: "onLoaded",
                value: function() {
                    if (clearTimeout(this.loadTimer), 0 !== this.banner.naturalWidth) {
                        this.removeBannerEventListeners();
                        var e = this.player.utils;
                        e.addClass(this.div, "jw-vast-nonlinear-active"), e.style(Ze, {
                            bottom: this.banner.height - 8,
                            left: this.banner.width
                        }, !0), new e.UI(this.banner).on("click tap", this.sendClick.bind(this)), Ze.onclick = Ze.ontouchstart = this.collapse.bind(this), Ke.onclick = Ke.ontouchstart = this.expand.bind(this), this.trigger(q)
                    } else this.imageLoadError()
                }
            }, {
                key: "imageLoadError",
                value: function() {
                    clearTimeout(this.loadTimer), this.trigger(N), this.removeBanner()
                }
            }, {
                key: "sendClick",
                value: function() {
                    this.trigger(D)
                }
            }, {
                key: "collapse",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.player.utils.addClass(this.div, "jw-vast-nonlinear-collapsed"), this.animationTimer = setTimeout((function() {
                        t.remove(t.banner), t.remove(Ze), t.animationTimer = -1
                    }), 250)
                }
            }, {
                key: "expand",
                value: function(e) {
                    -1 === this.animationTimer && (e.preventDefault(), this.player.utils.removeClass(this.div, "jw-vast-nonlinear-collapsed"), this.div.appendChild(this.banner), this.div.appendChild(Ze))
                }
            }, {
                key: "remove",
                value: function(e) {
                    this.div.contains(e) && this.div.removeChild(e)
                }
            }, {
                key: "removeBannerEventListeners",
                value: function() {
                    this.banner.onload = this.banner.onerror = null
                }
            }, {
                key: "removeBanner",
                value: function() {
                    this.removeBannerEventListeners(), this.remove(this.banner)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    clearTimeout(this.loadTimer), clearTimeout(this.animationTimer), Ze.onclick = Ze.ontouchstart = Ke.onclick = Ke.ontouchstart = null, this.off(), this.removeBannerEventListeners()
                }
            }, {
                key: "stop",
                value: function() {
                    this.player.utils.removeClass(this.div, "jw-vast-nonlinear-active jw-vast-nonlinear-collapsed"), this.removeBanner(), this.remove(Ze), this.remove(Ke)
                }
            }]), e
        }(),
        tt = function() {
            function e(i, a) {
                t(this, e), this.player = i, this.div = a, this.startTime = 0, this.minDur = 0, this.environment = i.getEnvironment(), n(this, i.Events), this.type = "static", i.on("time", this.dispatchTime, this)
            }
            return a(e, [{
                key: "playAd",
                value: function(e, t, i, a, r) {
                    this.minDur = this.player.utils.seconds(i), this.adTag = a, this.static && (this.static.removeListeners(), this.static.stop()), this.player.utils.addClass(this.div, "jw-vast-nonlinear"), this.static = new et(this.player, e, t, this.div, r), this.static.on(q, this.startAd, this), this.static.on(D, this.clickHandler, this), this.static.on(N, this.errorHandler, this)
                }
            }, {
                key: "dispatchTime",
                value: function(e) {
                    this.trigger(u, e)
                }
            }, {
                key: "startAd",
                value: function() {
                    this.startTime = this.player.getPosition(), this.minDur > 0 && (0 === this.startTime ? this.on(u, this.startTimingAd, this) : this.on(u, this.timeAd, this)), this.sendEvent(q)
                }
            }, {
                key: "startTimingAd",
                value: function(e) {
                    this.startTime = e.position, this.off(u, this.startTimingAd, this), this.on(u, this.timeAd, this)
                }
            }, {
                key: "timeAd",
                value: function(e) {
                    e.position - this.startTime > this.minDur && (this.off(u, this.timeAd, this), this.stop())
                }
            }, {
                key: "clickHandler",
                value: function() {
                    this.sendEvent(D)
                }
            }, {
                key: "errorHandler",
                value: function() {
                    this.sendEvent(N)
                }
            }, {
                key: "sendEvent",
                value: function(e, t) {
                    (t = t || {}).tag = t.tag || this.adTag, this.trigger(e, t)
                }
            }, {
                key: "removeEvents",
                value: function() {
                    this.off()
                }
            }, {
                key: "getState",
                value: function() {
                    return P
                }
            }, {
                key: "stop",
                value: function() {
                    this.startTime && this.static && (this.startTime = 0, this.minDur = 0, this.off(u, this.startTimingAd, this), this.off(u, this.timeAd, this), this.static.removeListeners(), this.static.stop(), this.sendEvent(F))
                }
            }, {
                key: "pause",
                value: function() {}
            }]), e
        }(),
        it = function() {
            function e(i, a) {
                t(this, e), this.player = i, this.options = a, this.ignoreStartOnSeek = !1, this.reset(), a.timeBetweenAds && i.on({
                    adBreakStart: this.handleAdBreakStart,
                    adSkipped: this.handleAdSkipped,
                    adComplete: this.handleAdComplete,
                    adBreakEnd: this.handleAdBreakEnd,
                    destroyPlugin: this.destroy
                }, this)
            }
            return a(e, [{
                key: "shouldDeferAds",
                value: function() {
                    return this.options.deferAds && !this.player.getConfig().activeTab
                }
            }, {
                key: "clearStartOnSeek",
                value: function() {
                    this.ignoreStartOnSeek = !0
                }
            }, {
                key: "sendAdBreakIgnored",
                value: function(e, t) {
                    e && this.player.trigger(I, function(e, t) {
                        return {
                            id: e._breakId,
                            tag: e._adQueue && e._adQueue.length > 0 ? e._adQueue[0] : e._adXML,
                            client: l,
                            offset: e._offSet,
                            timeSinceLastAd: t,
                            type: I
                        }
                    }(e, t))
                }
            }, {
                key: "rulesAllowAdPlayback",
                value: function(e) {
                    var t = this.options,
                        i = 0 === t.frequency && 1 === e,
                        a = e >= t.startOn && (e - t.startOn) % t.frequency == 0;
                    return i || a
                }
            }, {
                key: "handleAdBreakStart",
                value: function() {
                    this.adSkipped = !1, this.adComplete = !1
                }
            }, {
                key: "handleAdComplete",
                value: function() {
                    this.adComplete = !0
                }
            }, {
                key: "handleAdSkipped",
                value: function() {
                    this.adSkipped = !0
                }
            }, {
                key: "handleAdBreakEnd",
                value: function() {
                    !this.adSkipped && this.adComplete && (this.recentCompletedAdTime = ne())
                }
            }, {
                key: "timeBetweenAdsAllowsAdPlayback",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ne();
                    if (this.options.timeBetweenAds) {
                        var i = (t - this.recentCompletedAdTime) / 1e3;
                        if (i < this.options.timeBetweenAds) return this.sendAdBreakIgnored(e, i), !1
                    }
                    return !0
                }
            }, {
                key: "reset",
                value: function() {
                    this.ignoreStartOnSeek = !1, this.recentCompletedAdTime = 0
                }
            }, {
                key: "destroy",
                value: function() {
                    this.player.off(null, null, this)
                }
            }, {
                key: "timeBetweenAds",
                get: function() {
                    return this.options.timeBetweenAds
                }
            }, {
                key: "startOnSeek",
                get: function() {
                    return this.ignoreStartOnSeek ? null : this.options.startOnSeek
                }
            }]), e
        }(),
        at = {};
    var rt = function() {};
    ! function(e) {
        if (e && "undefined" != typeof window) {
            var t = document.createElement("style");
            t.setAttribute("media", "screen"), t.innerHTML = e, document.head.appendChild(t)
        }
    }(".jwplayer.jw-flag-time-slider-above .jw-vpaid-non-linear{bottom:66px}.jwplayer.jw-breakpoint-7 .jw-vpaid-non-linear{bottom:132px}.jwplayer.jw-flag-user-inactive:not(.jw-state-paused) .jw-vpaid-non-linear{bottom:.5em}.jwplayer .jw-vpaid-non-linear{bottom:60px}.jwplayer .jw-vpaid-iframe{border:0;width:100%;height:100%;position:absolute;overflow:hidden}.jwplayer .jw-plugin-vast.jw-plugin{top:0;width:100%;pointer-events:none}.jwplayer .jw-plugin-vast.jw-plugin *{pointer-events:all}.jwplayer .jw-plugin-vast .jw-ad-icon-container{position:absolute;display:none;pointer-events:all;cursor:pointer}.jwplayer .jw-plugin-vast .jw-ad-icon-container.jw-ad-icon-active{display:block}.jwplayer .jw-plugin-vast .jw-ad-icon-container iframe{pointer-events:none;border:none;height:100%;width:100%;margin:0}.jw-plugin-vast.jw-vast-nonlinear-active .jw-banner{opacity:1}.jw-plugin-vast.jw-vast-nonlinear-active .jw-vast-nonlinear-close-button{margin:0 auto;opacity:.75}.jw-plugin-vast.jw-vast-nonlinear-active:hover .jw-vast-nonlinear-close-button{opacity:1}.jw-plugin-vast.jw-vast-nonlinear-collapsed .jw-vast-nonlinear-open-button{margin:0 auto;opacity:.5}.jw-plugin-vast.jw-vast-nonlinear-collapsed .jw-banner,.jw-plugin-vast.jw-vast-nonlinear-collapsed .jw-vast-nonlinear-close-button{opacity:0}.jw-plugin-vast.jw-vast-nonlinear-collapsed:hover .jw-vast-nonlinear-open-button{opacity:1}.jw-plugin-vast.jw-vast-nonlinear-collapsed:hover .jw-vast-nonlinear-close-button{opacity:0}.jw-plugin-vast .jw-vast-nonlinear-close-button,.jw-plugin-vast .jw-vast-nonlinear-open-button{position:absolute;right:0;bottom:0;left:0;display:block;margin:auto;width:18px;height:18px;cursor:pointer;opacity:0;transition:opacity .2s ease}.jw-plugin-vast .jw-vast-nonlinear-close-button{transform:rotate(45deg)}"), (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)(l, "8.1", (function(e, t, i) {
        var a = e.getConfig(),
            s = a.key,
            o = e.getEnvironment(),
            l = t.debug && t.trackFn ? t.trackFn : null,
            c = this,
            h = void 0 === t.withCredentials || t.withCredentials,
            v = null,
            I = t.bids && t.bids.settings ? t.bids.settings.mediationLayerAdServer || g : null;
        if ((I === g || I === y) && t.bids.bidders) {
            var H = t.bids.bidders;
            H.length && (v = n({}, t.bids, {
                bidders: H
            }))
        }
        var D, q, N, F, U, Q, X = {
                withCredentials: h
            },
            W = !1,
            z = [],
            G = !1,
            $ = 0,
            J = 0,
            Y = !1,
            K = !1,
            Z = null,
            ee = null,
            te = !1,
            ie = new We(e.utils),
            ae = new it(e, ie.getAdRules(t)),
            re = new e.utils.Timer;
        this.version = "8.7.18";
        var se = new Ue(ae, e.utils),
            oe = ie.getSchedule(t, ae);

        function le(e) {
            ce();
            var t = D;
            Promise.resolve(e).then((function() {
                if (!t.isDestroyed()) return de(e), t.loadAd(e, {
                    adBlock: Y
                })
            })).then((function(e) {
                return t.isDestroyed() ? null : ye(e, B)
            })).catch((function(e) {
                return t.isDestroyed() ? null : Ie(e)
            }))
        }

        function de(t, i) {
            var a = D,
                r = a.getVMAPTracker(t);
            U.once("destroyed", (function() {
                re.clear("adBreakStart"), r.breakEnd(), e.trigger(_, pe(a, t)), D === a && D.schedule.resetBreakIdByOffset(i)
            })), re.tick("adBreakStart"), r.breakStart();
            var n = pe(a, t);
            e.trigger(E, n), e.trigger(S, n)
        }

        function ue(t) {
            if (K || (K = !0, D.bids.forEach((function(e) {
                    return e.timeout()
                }))), !(G || W || ae.shouldDeferAds())) {
                W = !0;
                var i = (t || {}).startTime || e.getPosition();
                J = i || J;
                var a = D.schedule.getPreRoll(i);
                if (a || D.vmapPromise) {
                    (null !== D.vmapPromise || a && "nonlinear" !== a._type) && ce();
                    var r = D;
                    r.bidsPromise.then((function() {
                        if (!r.isDestroyed()) {
                            var e = r.schedule.getPreRoll(i);
                            e && "nonlinear" !== e._type && de(e, "pre")
                        }
                    })), i ? "none" === ae.startOnSeek && (D._preRollPromise = null) : ae.clearStartOnSeek(), r.loadPreRoll({
                        adBlock: Y,
                        startTime: i
                    }).then((function(e) {
                        var i = t && t.playReason ? t.playReason : B;
                        return r.isDestroyed() ? null : ye(e, i)
                    })).catch((function(e) {
                        return r.isDestroyed() ? null : Ie(e)
                    }))
                }
            }
        }

        function ce() {
            U || (U = e.createInstream().init()).setText(null)
        }

        function fe(i, a) {
            var n, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = function(e, t) {
                    return ae.rulesAllowAdPlayback(t) ? e && e.adschedule ? ie.getSchedule(e, ae) : oe : se
                }(i, a),
                l = new Ye(e, o, i, t, X);
            return l.on((r(n = {}, [b], (function(t) {
                return e.trigger(b, t)
            })), r(n, [T], (function(t) {
                return e.trigger(T, t)
            })), r(n, [S], (function(t) {
                return e.trigger(S, t)
            })), r(n, [V], _e), r(n, [x], Te), r(n, [C], Ee), n), c), o.isVMAP() && (s.requestTimeout = o.requestTimeout, s.creativeTimeout = o.creativeTimeout, o.load(e, i, X).then((function(e) {
                l.isDestroyed() || e.forEach((function(e) {
                    Ee(he(l, e, null, s))
                }))
            })).catch((function(e) {
                l.isDestroyed() || Ie(he(l, e, null, s))
            }))), l.init(v, s).then((function() {
                l.isDestroyed() || e.trigger(L, pe(l, null, {
                    schedule: o
                }))
            })), l
        }

        function ge() {
            D && (D.schedule.reset(), D.off(null, null, c), D.destroy(), D = null), ke(), be(), Pe(), ae.reset(), e.setCues([]), J = 0, W = !1, K = !1
        }

        function ye(t, a) {
            if (D.dequeueAdEvents(), t) return "nonlinear" === t.scheduledAd()._type && be(),
                function(t, a) {
                    var r = t.scheduledAd();
                    0 === r._waterfallIndex && Pe();
                    D.removeVastLoader(t);
                    var n = new Promise((function(r, n) {
                            var s = new me(t, e, N, F, D, i, X);
                            s.on(j, r), s.on(C, n), s.on(R, Ae), s.on(M, Ee), s.init(U, a).catch(rt), q = U, U = null, z.push(s)
                        })),
                        s = D;
                    return n.then((function() {
                        s.isDestroyed() || "nonlinear" === r._type || be()
                    })).catch((function(e) {
                        if (!s.isDestroyed()) return U = U || q, s.adWaterfall(t, e, {
                            adBlock: Y
                        }).then((function(e) {
                            return s.isDestroyed() ? null : ye(e, a)
                        }))
                    }))
                }(t, a);
            be()
        }

        function ke() {
            z.forEach((function(e) {
                return e.destroy()
            })), z.splice(0)
        }

        function Ae(t) {
            Ce(t) && (re.tick("adImpression".concat(t.id)), t.timeLoading = re.between("adBreakStart", "adImpression".concat(t.id))), e.trigger(R, t)
        }

        function Pe() {
            z.length && z[z.length - 1].clearNonlinear()
        }

        function be() {
            if (U || q) {
                var e = U || q;
                U = null, e.destroy()
            }
            q = null
        }

        function Te(t) {
            var i = t.id;
            re.tick("adLoaded".concat(i)), t.timeLoading = re.between("adLoading".concat(i), "adLoaded".concat(i)), e.trigger(x, t)
        }

        function _e(t) {
            e.trigger(V, t), re.tick("adLoading".concat(t.id))
        }

        function Ie(e) {
            e && e.adErrorCode || (e = he(D, {
                message: "An unexpected ad error has occurred",
                sourceError: e
            })), D.dequeueAdEvents(), Ee(e), ke(), be()
        }

        function Ee(t) {
            Ce(t) && (re.tick("adError".concat(t.id)), t.timeLoading = re.between("adBreakStart", "adError".concat(t.id))), D && D.vmapTracker && D.vmapTracker.error(t.code), 50004 !== t.adErrorCode && 50901 !== t.adErrorCode || !e.getAdBlock() || (Y = !0);
            var i = 70001 === t.adErrorCode ? O : C;
            e.trigger(i, t)
        }

        function Ce(e) {
            return e.tag && (void 0 === e.podcount || 1 === e.sequence)
        }

        function Re(t) {
            var i = t.getMidRolls(),
                a = [];
            i.length && i.forEach((function(e) {
                "nonlinear" !== e._type && a.push({
                    begin: e._offSet,
                    text: X.cuetext,
                    cueType: "ads"
                })
            })), e.addCues(a)
        }
        oe.isVMAP() && oe.load(e, {}, X).catch(rt), n(this, e.Events), e.utils.addClass(i, "jw-plugin-vast"), e.on({
            all: function(i, a) {
                i === u ? function(i) {
                    if (G || 0 === i.duration || ae.shouldDeferAds()) return;
                    var a = D.schedule.getNextMidrollIndex(J, i.position, i.duration);
                    if (J = i.position, null !== a) {
                        var r = D.schedule.getMidRollAtIndex(a);
                        "nonlinear" !== r._type && (ce(), de(r, a));
                        var n = D;
                        n.loadMidRollAtIndex(a, {
                            adBlock: Y
                        }).then((function(e) {
                            return n.isDestroyed() ? null : ye(e)
                        })).catch((function(e) {
                            return n.isDestroyed() ? null : Ie(e)
                        }))
                    } else if (!W && D.schedule.getClosestIndex(i.position, i.duration) < 0) ue(i);
                    else if (t.preloadAds) {
                        var s = i.position + w,
                            o = D.schedule.peek(i.position, s, i.duration);
                        if (null !== o && o >= 0) D.loadMidRollAtIndex(o, {
                            adBlock: Y,
                            preload: !0
                        }).catch(rt);
                        else if (-1 === o) {
                            var l = ne() + 1e3 * (i.duration - i.position);
                            D.loadPostRoll({
                                adBlock: Y,
                                preload: !0,
                                startTime: l
                            }).catch(rt)
                        } else if (null === Z && null === ee && s > i.duration) {
                            var d = e.getPlaylistIndex() + 1,
                                u = e.getPlaylistItem(d);
                            if (te = !!Q, u || Q) {
                                var c = Q ? -1 : d,
                                    h = D;
                                ee = Promise.resolve(e.getPlaylistItemPromise(c)).then((function() {
                                    h.isDestroyed() || ((Z = fe(e.getPlaylistItem(d) || Q, $ + 1, {
                                        preload: !0
                                    })).loadPreRoll({
                                        adBlock: Y,
                                        preload: !0
                                    }).catch(rt), Q = null, ee = null)
                                })).catch(rt)
                            }
                        }
                    }
                }(a) : i === p && function() {
                    if (G || ae.shouldDeferAds() || !D || D.isDestroyed()) return;
                    var e = D.schedule.getPostRoll();
                    if (e) {
                        "nonlinear" !== e._type && (ce(), de(e, "post"));
                        var t = D;
                        t.loadPostRoll({
                            adBlock: Y
                        }).then((function(e) {
                            return t.isDestroyed() ? null : ye(e)
                        })).catch((function(e) {
                            return t.isDestroyed() ? null : Ie(e)
                        }))
                    }
                }()
            },
            ready: function() {
                var r = this;
                N = new tt(e, i), F = new we(l, o, {
                    openLink: e.utils.openLink
                }), a.localization = e.getConfig().localization, (X = ie.getOptParams(t, a.localization.advertising)).debugTrackFn = l, Se.catch((function(t) {
                    ge(), e.off(null, null, r), e.playAd = rt, Ee(he(null, {
                        message: "Ad Error: ".concat(t.message),
                        adErrorCode: 60002,
                        id: d,
                        tag: ""
                    }))
                }))
            },
            relatedReady: function() {
                if (t.preloadAds) {
                    var i = e.getPlugin("related");
                    i && i.on("nextUp", (function(e) {
                        e && "discovery" === e.mode && (Q = e)
                    }))
                }
            },
            beforePlay: ue,
            cast: function(e) {
                G = !!e.active
            },
            play: function(e) {
                c.trigger(P, e)
            },
            playlistItem: function(i) {
                $ += 1, ge(), ee = null, Q = null;
                var r = e.getPlaylistItem(i.index);
                Z && r !== Z.item && !1 === te && (Z.off(null, null, c), Z.destroy(), Z = null);
                D = Z || fe(r, $), Z = null, D.schedule.isVMAP() ? D.vmapPromise.then((function() {
                    D.isDestroyed() || Re(D.schedule)
                })).catch(rt) : Re(D.schedule);
                if (t.preloadAds && 1 === $) {
                    var n = a.autostart;
                    !1 === n || n === A && 0 === e.getViewable() ? D.loadPreRoll({
                        adBlock: Y,
                        preload: !0
                    }).catch(rt) : e.once(k, (function() {
                        D.loadPreRoll({
                            adBlock: Y,
                            preload: !0
                        }).catch(rt)
                    }))
                }
            },
            playlistComplete: ge,
            complete: function() {
                Pe(), W = !1, K = !1
            },
            destroyPlugin: ge
        }, this), e.pauseAd = function(e, t) {
            if (e = "boolean" != typeof e || e, z.length) {
                var i = z[z.length - 1];
                e ? i.pause(t || {}) : i.play(t || {})
            }
        }, e.playAd = function(t) {
            var i;
            Pe();
            var a = 0 === X.requestTimeout ? 1 / 0 : X.requestTimeout,
                r = 0 === X.creativeTimeout ? 1 / 0 : X.creativeTimeout;
            i = Array.isArray(t) ? t.slice(0) : [t];
            var n = e.utils.genId,
                s = {
                    _id: n(12),
                    _adQueue: i,
                    _waterfallIndex: 0,
                    _adPodIndex: 0,
                    adBreakId: n(12),
                    _offset: 0,
                    _position: ve(e),
                    requestTimeout: a || f,
                    creativeTimeout: r || m
                };
            D ? le(s) : e.once("playlistItem", (function() {
                return le(s)
            }))
        }, e.skipAd = function() {
            z.length && z[z.length - 1].skip()
        };
        var Se = function(e, t, i) {
            var a = at[t];
            return a || (at[t] = new Promise((function(a, r) {
                ! function(i) {
                    var a = new e.key(t);
                    if ("unlimited" === a.edition()) return i();
                    var r = ["//", "entitlements.jwplayer.com", "/", a.token(), ".json"];
                    "file:" === window.location.protocol && r.unshift("https:"), e.ajax(r.join(""), (function(e) {
                        i(e && e.response)
                    }), (function() {
                        i()
                    }), {
                        timeout: 1e4,
                        responseType: "json"
                    })
                }((function(e) {
                    var t, n, s = e || {};
                    !0 === i.outstream ? (t = !1 !== s.canPlayOutstreamAds, n = "Outstream Ad Limit Reached") : (t = !1 !== s.canPlayAds, n = "Ad Limit Reached"), !1 !== t ? a({
                        message: "Can Play Ads"
                    }) : r({
                        message: n
                    })
                }))
            })))
        }(e.utils, s, t);
        Se.catch(rt), this.destroy = ge
    }))
}();