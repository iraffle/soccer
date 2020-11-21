! function() {
    var C = 4,
        A = {
            pro: 1,
            premium: 2,
            ads: 3,
            invalid: C,
            enterprise: 6,
            trial: 7,
            platinum: 8,
            starter: 9,
            business: 10,
            developer: 11
        },
        x = {
            viewable: 2
        },
        e = "DATA_EVENT_PLAY",
        a = "DATA_EVENT_META",
        t = "DATA_EVENT_LEVELS",
        n = "DATA_EVENT_FIRST_FRAME",
        m = 128,
        r = ["auto", "initial choice"],
        o = ["playlistItem", "playAttempt", "time", "adBreakEnd"],
        j = 0,
        g = 20;
    var B = Object.assign || function(e) {
        for (var a = arguments.length, t = Array(1 < a ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
        return t.reduce(function(e, a) {
            return t = e, (n = a) && Object.keys(n).forEach(function(e) {
                t[e] = n[e]
            }), t;
            var t, n
        }, e)
    };

    function i() {
        try {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues) return e.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (e) {}
        return Math.random().toString(36).slice(2, 9)
    }

    function R(e) {
        for (var a = ""; a.length < e;) a += i();
        return a.slice(0, e)
    }

    function M(e) {
        if (e) {
            if (/vast/.test(e)) return 0;
            if (/googima/.test(e)) return 1;
            if (/freewheel/.test(e)) return 2;
            if (/dai/.test(e)) return 3
        }
        return -1
    }

    function d(e) {
        return /^[a-zA-Z0-9]{8}$/.test(e)
    }

    function l(e, a) {
        if ("number" != typeof e) return null;
        var t = e / 1e3;
        return !(1 < arguments.length && void 0 !== a) || a ? Math.round(t) : t
    }

    function u(e, a) {
        return e + "-" + a
    }

    function c(e, a) {
        return a.split(".").reduce(function(e, a) {
            return e ? e[a] : void 0
        }, e)
    }

    function s(e) {
        var a = {};
        for (var t in e)
            if ("object" == typeof e[t]) {
                var n = s(e[t]);
                for (var r in n) n.hasOwnProperty(r) && (a[t + "." + r] = n[r])
            } else a[t] = e[t];
        return a
    }
    var p = a;

    function v(e) {
        var a = e.getContainer().querySelector("video");
        return a && a.currentTime ? a.currentTime : e.getPosition()
    }

    function y(a) {
        try {
            return a.getPlaylistItem()
        } catch (e) {
            var t = a.getPlaylistIndex();
            return a.getConfig().playlist[t] || null
        }
    }

    function f(e) {
        if ("function" != typeof e.getProvider) return "";
        var a = e.getProvider();
        return a ? a.name : ""
    }
    var b = void 0;

    function V(e, a) {
        var t = 1 < arguments.length && void 0 !== a && a,
            n = e.getVisualQuality(),
            r = void 0;
        if (n && n.level) {
            var i = "string" == typeof n.mode ? "auto" === n.mode : null;
            r = {
                width: n.level.width,
                height: n.level.height,
                bitrate: l(n.level.bitrate),
                reason: n.reason,
                adaptiveBitrateMode: i
            }
        } else r = {
            width: null,
            height: null,
            bitrate: null,
            reason: null,
            adaptiveBitrateMode: null
        };
        return b && !t || (b = r), r
    }

    function h(e) {
        var a = e.external.playerAPI,
            t = e.meta.playbackEvents,
            n = a.getDuration();
        if (n <= 0) {
            var r = t[p];
            r && (n = r.duration)
        }
        return 0 | n
    }

    function k(e, a) {
        var t = e.playerData.startup;
        null === t.startupTime && null !== t.initialTime && (t.startupTime = 10 * Math.round((Date.now() - t.initialTime) / 10), t.dispatchEvent = a)
    }

    function O(e) {
        var a = e.getConfig().setupConfig;
        if (a) {
            var i, o, d, l, t = window.jwplayer.defaults,
                n = B({}, t, a);
            return delete n.advertising, JSON.stringify(n, (i = n, o = [], d = [], l = 0, function(e, a) {
                if ("object" != typeof a) return "function" == typeof a ? "__FUNCTION__" : a;
                if (null === a || a instanceof Date || a instanceof RegExp) return a;
                if (Uint8Array && a instanceof Uint8Array) {
                    var t = "" + a;
                    return t = 40 < t.length ? t.substr(0, 40) : t, "Uint8Array(" + a.length + ") [" + t + "]"
                }
                if (Array.isArray(a) && 100 < a.length) return "Array(" + a.length + ")";
                if (a === i && 0 < l) return "<parent object>";
                var n = o.indexOf(a);
                if (-1 !== n) {
                    var r = d[n];
                    if (r) return r;
                    try {
                        JSON.stringify(a)
                    } catch (e) {
                        return d[n] = "__CIRCULAR__"
                    }
                    d[n] = a
                }
                return 1e4 < l++ ? "<complexity exceeded>" : (o.push(a), a)
            }))
        }
    }
    var w = {
            UNKNOWN: 999,
            IAB: 0
        },
        D = {
            noBid: 0,
            bid: 1,
            timeout: 2,
            invalid: 3,
            abort: 4,
            error: 5
        },
        G = {
            numCompanions: -1,
            podCount: 0,
            podIndex: 0,
            linear: -1,
            vastVersion: -1,
            adSystem: null,
            adCreativeType: null,
            adposition: -1,
            tagdomain: null,
            position: void 0,
            previousQuartile: 0,
            duration: void 0,
            witem: 1,
            wcount: 1,
            preload: void 0,
            adMediaFileURL: void 0,
            description: null,
            creativeAdId: null,
            creativeId: null,
            adTitle: null,
            adVastId: null,
            jwpseg: void 0,
            placement: void 0,
            timeForVPBCache: null,
            advertiser: null,
            advertiserId: null
        },
        I = /^IAB(\d+(?:-\d+)?)$/,
        S = {
            adRequest: "ar",
            adImpression: "i",
            adSkipped: "s",
            adError: "ae",
            adBidResponse: "abr",
            adClick: "c",
            adLoaded: "al",
            adViewableImpression: "vi",
            adBidRequest: "abq"
        },
        T = ["adStarted", "adMeta"],
        P = ["adTime", "adClick"],
        E = ["adBreakStart", "adMeta", "adImpression", "adViewableImpression", "adPlay", "adPause", "adTime", "adCompanions", "adClick", "adSkipped", "adComplete", "adError"],
        L = {
            dfp: 0,
            jwp: 1,
            jwpdfp: 2,
            jwpspotx: 3
        },
        F = ["id", "type", "pubid", "result", "code", "winner", "priceInCents", "grossPriceInCents", "timeForBidResponse", "requestId", "cacheKey", "dealId"],
        N = /[?&]iu=([^&]+)/,
        q = "error",
        U = "s",
        Q = "ana",
        _ = "t",
        z = "prp",
        K = "vsh",
        W = "paf",
        H = "bs",
        $ = "fs",
        J = "fc",
        X = "aa",
        Y = "gab",
        Z = "xapi",
        ee = "cpt",
        ae = "ph",
        te = "n",
        ne = "e",
        re = "sa",
        ie = "i",
        oe = "as",
        de = "ar",
        le = "ers",
        ue = "err",
        ce = {
            events: {
                "aa-jwplayer6": {
                    code: "aa",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fct", "fed", "fid", "fin", "fns", "fsid", "fsr", "ft", "mu", "os", "ovta", "psd"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "abr-clienta": {
                    code: "abr",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["apr", "tfvc"],
                    pingDestination: "main"
                },
                "abq-clienta": {
                    code: "abq",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["apr", "ipv", "rtp", "tpi"],
                    pingDestination: "main"
                },
                "ae-clienta": {
                    code: "ae",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["ad", "add", "adid", "adt", "adv", "advi", "aec", "aem", "amu", "apr", "apt", "ato", "atu", "caid", "cid", "ct", "did", "du", "ec", "iu", "mfc", "tal", "tpi", "uav"],
                    pingDestination: "main"
                },
                "al-clienta": {
                    code: "al",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["apr", "tal"],
                    filters: ["missingAdScheduleID"],
                    pingDestination: "main"
                },
                "ana-jwplayer6": {
                    code: "ana",
                    bucket: "jwplayer6",
                    parameterGroups: ["sessionParamsOnly"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "ar-clienta": {
                    code: "ar",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["apr", "apt", "ipv", "rtp", "tpi"],
                    pingDestination: "main"
                },
                "bi-clienta": {
                    code: "bi",
                    bucket: "clienta",
                    parameterGroups: [],
                    pingSpecificParameters: ["aid"],
                    pingDestination: "main"
                },
                "bs-jwplayer6": {
                    code: "bs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fed", "fid", "ft", "mu", "os"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "c-clienta": {
                    code: "c",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["ad", "adc", "al", "ct", "du", "qt", "srf", "tw", "vv", "uav"],
                    pingDestination: "main"
                },
                "cpe-jwplayer6": {
                    code: "cpe",
                    bucket: "jwplayer6",
                    parameterGroups: [],
                    pingSpecificParameters: ["aid", "id", "fed", "mu", "pss"],
                    pingDestination: "external"
                },
                "cpt-jwplayer6": {
                    code: "cpt",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingDestination: "main"
                },
                "e-jwplayer6": {
                    code: "e",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ab", "cae", "cb", "cdid", "cme", "dd", "dnt", "dpl", "flc", "fv", "ga", "ipv", "lng", "mk", "mu", "pad", "pbc", "pd", "pdr", "plng", "plt", "pni", "po", "pogt", "ptid", "pvt", "rf", "sn", "sp", "srf", "ss", "st", "vrt"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "err-error": {
                    code: "err",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cme", "erc", "pogt", "strt"],
                    pingDestination: "main"
                },
                "ers-error": {
                    code: "ers",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cme", "erc", "flc", "pogt"],
                    pingDestination: "main"
                },
                "fc-jwplayer6": {
                    code: "fc",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fct", "fed", "fid", "fin", "fns", "fpg", "fsid", "fsr", "ft", "mu", "oc", "os", "ovta", "psd", "srf", "stid"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "fs-jwplayer6": {
                    code: "fs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["fed", "fid", "fin", "fis", "fns", "fpc", "fpg", "fsid", "fsr", "ft", "mu", "os", "ovt", "rat", "srf", "tis", "vfi"],
                    filters: ["missingFeedID"],
                    pingDestination: "main"
                },
                "gab-jwplayer6": {
                    code: "gab",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abid", "abpr", "apid", "ati", "erc", "fls", "lae", "ovta", "pbs", "pcp", "prs", "prsd", "pvta", "srf", "strt", "ti", "tps", "ubc", "vti"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "i-clienta": {
                    code: "i",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal", "headerBidding"],
                    pingSpecificParameters: ["ad", "adc", "add", "adid", "adv", "advi", "apr", "apt", "adt", "al", "amu", "atu", "caid", "cid", "ct", "did", "du", "fed", "fid", "fsm", "iu", "mfc", "psd", "strt", "tal", "vv", "uav"],
                    pingDestination: "main"
                },
                "pa-jwplayer6": {
                    code: "pa",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ab", "abid", "abm", "apid", "bwe", "cme", "dnt", "dpl", "fed", "fid", "flc", "lng", "mu", "pd", "pdr", "plng", "pni", "pogt", "pr", "psd", "pvta", "sbr", "ss", "tb", "vd", "vh", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "paf-error": {
                    code: "paf",
                    bucket: "error",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "bwe", "erc", "fed", "fid", "mu", "pd", "pr", "psd", "sbr", "tb", "vd", "vh", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "prp-jwplayer6": {
                    code: "prp",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["tc"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "pru-jwplayer6": {
                    code: "pru",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["ppr"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "ret-jwplayer6": {
                    code: "ret",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "ati", "avc", "bwe", "etw", "fed", "fid", "fls", "fsm", "mu", "pbs", "pr", "q", "sbr", "srf", "ubc", "vh", "vr", "vti", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "s-jwplayer6": {
                    code: "s",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abid", "abm", "apid", "bwe", "cae", "cct", "cdid", "dnt", "dpl", "drm", "fed", "ff", "fid", "fsm", "l", "lng", "mk", "mu", "pd", "pdr", "plng", "pni", "pr", "psd", "q", "qcr", "sbr", "sp", "srf", "ss", "strt", "tb", "tt", "vd", "vh", "vs", "vrt", "vr", "vw"],
                    pingDestination: "main"
                },
                "s-clienta": {
                    code: "s",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["ad", "adc", "al", "atps", "ct", "du", "qt", "tw", "vv", "uav"],
                    pingDestination: "main"
                },
                "t-jwplayer6": {
                    code: "t",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "ati", "avc", "bwe", "dle", "fed", "fid", "fls", "fsm", "ltc", "mu", "pbs", "pcp", "pw", "q", "sbr", "ti", "ubi", "vh", "vr", "vti", "vw"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "v-clienta": {
                    code: "v",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingSpecificParameters: ["ad", "adc", "adti", "adati", "advti", "al", "ct", "du", "fsm", "qt", "vv", "uav"],
                    pingDestination: "main"
                },
                "vcae-clienta": {
                    code: "vcae",
                    bucket: "clienta",
                    parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                    pingSpecificParameters: ["abt", "aml", "ask", "c", "ed", "flpc", "ph", "pu", "sdk", "vcb", "vck", "vpb"],
                    pingDestination: "main"
                },
                "vci-clienta": {
                    code: "vci",
                    bucket: "clienta",
                    parameterGroups: ["adSessionParamsOnly", "sessionParamsOnly"],
                    pingSpecificParameters: ["abt", "aml", "ask", "c", "ed", "flpc", "ph", "pu", "sdk", "vcb", "vck", "vpb"],
                    pingDestination: "main"
                },
                "vi-clienta": {
                    code: "vi",
                    bucket: "clienta",
                    parameterGroups: ["global", "adGlobal"],
                    pingDestination: "main"
                },
                "vqc-jwplayer6": {
                    code: "vqc",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["abm", "avc", "bwe", "qcr", "sbr", "tb", "vw", "vh"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "vs-jwplayer6": {
                    code: "vs",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["cvl", "sdt", "tvl", "vso"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "vsh-jwplayer6": {
                    code: "vsh",
                    bucket: "jwplayer6",
                    parameterGroups: ["global"],
                    pingSpecificParameters: ["pcp", "srf", "stg"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "main"
                },
                "xapi-jwplayer6": {
                    code: "xapi",
                    bucket: "jwplayer6",
                    parameterGroups: ["sessionParamsOnly"],
                    pingSpecificParameters: ["ed", "prs", "pid", "ph", "sdk", "sv", "xam", "xfmp"],
                    filters: ["missingMediaOrExternalID"],
                    pingDestination: "meta"
                }
            },
            paramGroups: {
                global: {
                    members: ["abc", "abt", "aid", "amp", "ask", "at", "bun", "c", "ccp", "cp", "d", "eb", "ed", "emi", "i", "id", "jwac", "lid", "lsa", "mt", "om", "pbd", "pbr", "pgi", "ph", "pid", "pii", "pl", "plc", "pli", "pp", "ppm", "prc", "ps", "pss", "pt", "pu", "pv", "pyc", "s", "sdk", "stc", "stpe", "sv", "t", "tul", "tv", "vb", "vi", "vl", "wd", "xav", "xid"],
                    groupName: "global"
                },
                adGlobal: {
                    members: ["ab", "abid", "abo", "adi", "apid", "awi", "awc", "p", "pc", "pi", "pr", "sko", "tmid", "vu"],
                    groupName: "adGlobal"
                },
                adSessionParamsOnly: {
                    members: ["abid", "apid"],
                    groupName: "adSessionParamsOnly"
                },
                sessionParamsOnly: {
                    members: ["aid", "emi", "id", "pli", "pv", "tv", "xav", "xid"],
                    groupName: "sessionParamsOnly"
                },
                headerBidding: {
                    members: ["afbb", "afbi", "afbp", "afbt", "afbw", "aml", "asxb", "asxi", "asxp", "asxt", "asxw", "flpc", "flpy", "frid", "hbec", "vpb", "vto"],
                    groupName: "headerBidding"
                }
            }
        },
        se = {
            sgB1CN8sEeW9HgpVuA4vVw: !1,
            "QHh6WglVEeWjwQp+lcGdIw": !0,
            "4lTGrhE9EeWepAp+lcGdIw": !0,
            "98DmWsGzEeSdAQ4AfQhyIQ": !0,
            "xNaEVFs+Eea6EAY3v_uBow": !0,
            KvvTdq_lEeSqTw4AfQhyIQ: !1
        },
        pe = 1;

    function fe(e, a) {
        var t, n, r, i, o, d, l, u;
        for (t = 3 & e.length, n = e.length - t, r = a, o = 3432918353, d = 461845907, u = 0; u < n;) l = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, r = 27492 + (65535 & (i = 5 * (65535 & (r = (r ^= l = (65535 & (l = (l = (65535 & l) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * d + (((l >>> 16) * d & 65535) << 16) & 4294967295) << 13 | r >>> 19)) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (i >>> 16) & 65535) << 16);
        switch (l = 0, t) {
            case 3:
                l ^= (255 & e.charCodeAt(u + 2)) << 16;
            case 2:
                l ^= (255 & e.charCodeAt(u + 1)) << 8;
            case 1:
                r ^= l = (65535 & (l = (l = (65535 & (l ^= 255 & e.charCodeAt(u))) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * d + (((l >>> 16) * d & 65535) << 16) & 4294967295
        }
        return r ^= e.length, r = 2246822507 * (65535 & (r ^= r >>> 16)) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r = 3266489909 * (65535 & (r ^= r >>> 13)) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^= r >>> 16) >>> 0
    }

    function me(e) {
        return ye(e, "feedid")
    }

    function ge(e) {
        return ye(e, "feed_instance_id")
    }

    function ve(e) {
        return e ? e.pin_set_id : null
    }

    function ye(e, a) {
        return e ? (e.feedData || {})[a] || e[a] : null
    }

    function be(e) {
        if (!e) return null;
        var a, t, n = e.mediaid;
        return d(n) ? n : (a = e.file, d(n = (t = /.*\/(?:manifests|videos)\/([a-zA-Z0-9]{8})[\.-].*/.exec(a)) && 2 === t.length ? t[1] : null) ? n : null)
    }

    function he(e) {
        return e ? e.title : null
    }

    function ke(e) {
        return e ? !(!e.images || !e.images.length) && !!e.images.filter(function(e) {
            return e.type && e.type.match(/video/)
        }).length : null
    }

    function we(e, a) {
        var t = void 0;
        se[e.accountData.analyticsID] && (t = function(e, a) {
            var t = he(a);
            if (t) return function(e, a) {
                e.meta.xidAlgorithmVersion = 1;
                var t = fe(a, pe),
                    n = fe(a + a, pe);
                return "01_" + t + n
            }(e, t)
        }(e, a));
        var n = t || a.externalId;
        (e.playlistItemData.externalId = n) && !e.meta.xidAlgorithmVersion && (e.meta.xidAlgorithmVersion = 0)
    }
    var De = "hidden" in document ? function() {
        return !document.hidden
    } : "webkitHidden" in document ? function() {
        return !document.webkitHidden
    } : function() {
        return !0
    };

    function Ie(e, a) {
        var t = " " + a + " ";
        return 1 === e.nodeType && 0 <= (" " + e.className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(t)
    }
    var Se = 1,
        Te = 2,
        Pe = 3,
        Ee = 4,
        Ce = 5,
        Ae = 0;
    var xe = [H, Y];

    function je(e, a, t) {
        var n = e.external.playerAPI,
            r = n.getConfig();
        e.playerData.playerConfig = {
            visibility: r.visibility,
            bandwidthEstimate: r.bandwidthEstimate,
            floatingState: !!r.isFloating
        };
        var i, o, d, l = y(n) || {};
        e.playlistItemData.item = l, e.playlistItemData.mediaId = be(l), e.playerData.playerSize = function(e) {
            var a = e.getConfig(),
                t = a.containerWidth || e.getWidth(),
                n = a.containerHeight || e.getHeight();
            if (/\d+%/.test(t)) {
                var r = e.utils.bounds(e.getContainer());
                t = r.width, n = r.height
            }
            return t = 0 | Math.round(t), n = 0 | Math.round(n), /\d+%/.test(a.width || t) && a.aspectratio ? {
                bucket: Ee,
                width: t,
                height: n
            } : Ie(e.getContainer(), "jw-flag-audio-player") ? {
                bucket: Ce,
                width: t,
                height: n
            } : 0 === t ? {
                bucket: Ae,
                width: t,
                height: n
            } : t <= 320 ? {
                bucket: Se,
                width: t,
                height: n
            } : t <= 640 ? {
                bucket: Te,
                width: t,
                height: n
            } : {
                bucket: Pe,
                width: t,
                height: n
            }
        }(n), e.playlistItemData.duration = h(e), e.meta.lastEvent = a, e.meta.lastBucket = t, e.playerData.visualQuality = V(n, "s" === a && "jwplayer6" === t), e.playerData.defaultPlaybackRate = r.defaultPlaybackRate, e.playerData.playbackMode = r.streamType, we(e, l), i = e, o = a, d = t, -1 === xe.indexOf(o) && (i.meta.eventPreAbandonment = u(o, d))
    }
    var Be = {
            prs: function(e) {
                return e.meta.playerState
            },
            lae: function(e) {
                return e.meta.eventPreAbandonment
            },
            abpr: function(e) {
                return e.meta.playerRemoved
            },
            prsd: function(e) {
                var a = Date.now() - e.meta.playerStateDuration;
                return a <= 216e5 ? a : -1
            }
        },
        Re = {
            ab: function(e) {
                return e.configData.advertisingBlockType
            },
            abo: function(e) {
                return e.ads.adEventData.offset
            },
            adi: function(e) {
                return e.ads.adEventData.adId
            },
            apid: function(e) {
                return e.ads.adEventData.adPlayId
            },
            abid: function(e) {
                return e.ads.adEventData.adBreakId
            },
            awi: function(e) {
                return e.ads.adEventData.witem
            },
            awc: function(e) {
                return e.ads.adEventData.wcount
            },
            p: function(e) {
                return e.ads.adEventData.adposition
            },
            sko: function(e) {
                return e.ads.adEventData.skipoffset
            },
            vu: function(e) {
                return e.ads.adEventData.tagdomain
            },
            tmid: function(e) {
                return e.ads.adEventData.targetMediaId
            }
        },
        Me = {
            cae: function(e) {
                return !!e.ads.advertisingConfig.companiondiv
            },
            ad: function(e) {
                return e.ads.adEventData.adSystem
            },
            adc: function(e) {
                var a = e.ads.adEventData,
                    t = null;
                return Array.isArray(a.categories) && (t = a.categories.map(function(e) {
                    var a = e.match(I);
                    return a ? [w.IAB, a[1]].join("-") : w.UNKNOWN
                }).filter(function(e, a, t) {
                    return t.indexOf(e) === a
                }).slice(0, 10).join(",") || null), t
            },
            al: function(e) {
                return e.ads.adEventData.linear
            },
            ct: function(e) {
                return e.ads.adEventData.adCreativeType
            },
            mfc: function(e) {
                return e.ads.adEventData.mediaFileCompliance
            },
            pc: function(e) {
                return e.ads.adEventData.podCount
            },
            pi: function(e) {
                return e.ads.adEventData.podIndex
            },
            tal: function(e) {
                return e.ads.adEventData.timeAdLoading
            },
            vv: function(e) {
                return e.ads.adEventData.vastVersion
            },
            uav: function(e) {
                return e.ads.adEventData.universalAdId
            },
            advti: function(e) {
                return e.ads.adPlaybackTracking.viewablePlayedSeconds
            },
            adati: function(e) {
                return e.ads.adPlaybackTracking.audiblePlayedSeconds
            },
            adti: function(e) {
                return e.ads.adPlaybackTracking.playedSeconds
            },
            atps: function(e) {
                return e.ads.watchedPastSkipPoint
            },
            du: function(e) {
                return e.ads.adEventData.duration
            },
            qt: function(e) {
                var a = e.meta.lastEvent;
                return "s" === a || "c" === a ? e.ads.adEventData.previousQuartile : e.ads.currentQuartile
            },
            tw: function(e) {
                return e.ads.adEventData.position
            },
            aec: function(e) {
                return e.ads.jwAdErrorCode
            },
            aem: function(e) {
                return e.ads.errorMessage
            },
            ato: function(e) {
                return e.ads.timeout
            },
            ec: function(e) {
                return e.playerData.lastErrorCode[e.meta.lastEvent]
            },
            atu: function(e) {
                var a = e.ads.adEventData.tagURL;
                return "string" == typeof a ? a.substr(0, 100) : void 0
            },
            tpi: function(e) {
                var a = e.ads.adEventData.jwpseg;
                return Array.isArray(a) ? a.join(",") : void 0
            },
            cid: function(e) {
                return e.ads.adEventData.creativeId
            },
            adt: function(e) {
                return e.ads.adEventData.adTitle
            },
            apr: function(e) {
                return e.ads.adEventData.preload
            },
            amu: function(e) {
                return e.ads.adEventData.adMediaFileURL
            },
            add: function(e) {
                return e.ads.adEventData.description
            },
            adid: function(e) {
                return e.ads.adEventData.adVastId
            },
            caid: function(e) {
                return e.ads.adEventData.creativeAdId
            },
            apt: function(e) {
                return e.ads.adEventData.placement
            },
            tfvc: function(e) {
                return e.ads.adEventData.timeForVPBCache
            },
            adv: function(e) {
                return e.ads.adEventData.advertiser
            },
            advi: function(e) {
                return e.ads.adEventData.advertiserId
            },
            afbb: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.result")
            },
            afbi: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.id")
            },
            afbp: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.priceInCents")
            },
            afbt: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.timeForBidResponse")
            },
            afbw: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.winner")
            },
            frid: function(e) {
                return c(e.ads.headerBiddingData.bidders, "fan.requestId")
            },
            asxb: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.result")
            },
            asxi: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.id")
            },
            asxp: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.priceInCents")
            },
            asxt: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.timeForBidResponse")
            },
            asxw: function(e) {
                return c(e.ads.headerBiddingData.bidders, "spotx.winner")
            },
            aml: function(e) {
                return e.ads.headerBiddingData.mediationLayer
            },
            flpc: function(e) {
                return e.ads.headerBiddingData.floorPriceCents
            },
            flpy: function(e) {
                return e.ads.headerBiddingData.floorPriceCurrency
            },
            hbec: function(e) {
                return e.ads.headerBiddingData.errorCode
            },
            vto: function(e) {
                return e.ads.headerBiddingData.bidTimeout
            },
            vpb: function(e) {
                if ("object" == typeof e.ads.headerBiddingData.bidders) return JSON.stringify(s(e.ads.headerBiddingData.bidders))
            },
            vcb: function(e) {
                return e.ads.headerBiddingCacheData.bidder
            },
            vck: function(e) {
                return e.ads.headerBiddingCacheData.cacheKey
            },
            rtp: function(e) {
                if ("object" == typeof e.inference.result) return JSON.stringify(s(e.inference.result))
            },
            did: function(e) {
                return e.ads.adEventData.dealId
            },
            iu: function(e) {
                var a = e.ads.adEventData.tagURL;
                if (a) {
                    var t = a.match(N);
                    if (t) return t[1]
                }
            }
        },
        Ve = {
            dnt: function(e) {
                return e.browser.storage.doNotTrackProperty
            },
            fv: function(e) {
                return e.browser.pageData.flashVersion
            },
            lng: function(e) {
                return e.browser.langAttr
            },
            pdr: function(e) {
                return e.browser.docReferrer
            }
        };
    Ve.plt = function(e) {
        return function() {
            var e = (window.performance || {}).timing;
            if (e) {
                var a = (e.loadEventEnd || (new Date).getTime()) - e.navigationStart;
                if (0 < a) return 50 * Math.round(a / 50) | 0
            }
            return null
        }()
    }, Ve.sp = function(e) {
        return e.browser.isPageStandalone
    };
    var Oe = {
            cb: function(e) {
                return e.configData.castingBlockPresent
            },
            dd: function(e) {
                return e.configData.displayDescription
            },
            ga: function(e) {
                return e.configData.gaBlockPresent
            },
            pad: function(e) {
                return e.configData.abTestConfig
            },
            pbc: function(e) {
                return e.configData.playbackRateControlsSet
            },
            po: function(e) {
                return e.configData.posterImagePresent
            },
            rf: function(e) {
                return e.configData.relatedPluginFeedFile
            },
            sn: function(e) {
                return e.configData.skinName
            }
        },
        Ge = [X, H, J, $],
        Le = {
            fed: function(e) {
                return -1 !== Ge.indexOf(e.meta.lastEvent) ? e.related.feedId : me(e.playlistItemData.item)
            },
            fid: function(e) {
                return -1 !== Ge.indexOf(e.meta.lastEvent) ? e.related.feedInstanceId : ge(e.playlistItemData.item)
            },
            ft: function(e) {
                return e.related.feedType
            },
            os: function(e) {
                return e.related.onClickSetting
            },
            fin: function(e) {
                return e.related.feedInterface
            },
            fis: function(e) {
                return e.related.idsShown.join(",")
            },
            fns: function(e) {
                return e.related.idsShown.length
            },
            fpc: function(e) {
                return e.related.pinnedCount
            },
            fpg: function(e) {
                return e.related.page
            },
            fsr: function(e) {
                return e.related.shownReason
            },
            rat: function(e) {
                return e.related.autotimerLength
            },
            fct: function(e) {
                return e.related.advanceTarget
            },
            oc: function(e) {
                return e.related.ordinalClicked
            },
            stid: function(e) {
                return e.related.targetThumbID
            },
            tis: function(e) {
                return e.related.thumbnailIdsShown.join(",") || void 0
            },
            fsid: function(e) {
                return e.related.feedShownId
            },
            vfi: function(e) {
                return e.related.feedWasViewable
            },
            ovt: function(e) {
                return e.related.overlayVideoThumbs
            },
            cme: function(e) {
                return e.playerData.contextualEmbed
            },
            pogt: function(e) {
                return e.browser.pageData.pageOGTitle
            }
        },
        Fe = {};
    Fe.abc = function(e) {
        var a = e.ads.adBreakTracking;
        if (a) return a.adBreakCount
    }, Fe.abt = function(e) {
        var a = e.external.playerAPI.getConfig(),
            t = a.ab;
        if (t && t.tests) return Object.keys(t.tests).map(function(e) {
            return t.getSelected(e, a).join(",")
        }).filter(function(e) {
            return e
        }).join(",")
    }, Fe.aid = function(e) {
        return e.accountData.analyticsID
    }, Fe.ask = function(e) {
        return e.ads.adScheduleId
    }, Fe.at = function(e) {
        return De()
    }, Fe.c = function(e) {
        return e.ads.adClient
    }, Fe.ccp = function(e) {
        return e.casting
    }, Fe.cp = function(e) {
        return !e.external.playerAPI.getControls()
    }, Fe.d = function(e) {
        return e.configData.autostartConfig
    }, Fe.eb = function(e) {
        return (a = e.external.playerAPI).getAdBlock ? a.getAdBlock() : -1;
        var a
    }, Fe.ed = function(e) {
        return e.accountData.edition
    }, Fe.emi = function(e) {
        return e.staticPlayerData.embedID
    }, Fe.i = function(e) {
        return e.browser.pageData.inIframe
    }, Fe.id = function(e) {
        return e.playlistItemData.mediaId
    }, Fe.lid = function(e) {
        return e.meta.doNotPingBackIDs ? void 0 : e.browser.storage.localID
    }, Fe.lsa = function(e) {
        return e.browser.storage.storageAvailable
    }, Fe.mt = function(e) {
        return e.external.playerAPI.getMute()
    }, Fe.mu = function(e) {
        return function(e, a) {
            var t = void 0;
            if (!e) return null;
            var n = e.sources;
            if (n) {
                for (var r = [], i = n.length; i--;) n[i].file && r.push(n[i].file);
                r.sort(), t = r[0]
            } else t = e.file;
            return a.getAbsolutePath(t)
        }(e.playlistItemData.item, e.external.utils)
    }, Fe.pbd = function(e) {
        return e.playerData.defaultPlaybackRate
    }, Fe.pbr = function(e) {
        return (a = e.external.playerAPI).getPlaybackRate ? Math.round(100 * a.getPlaybackRate()) / 100 : 1;
        var a
    }, Fe.pgi = function(e) {
        return e.browser.pageData.pageViewId
    }, Fe[ae] = function(e) {
        return e.configData.playerHosting
    }, Fe.pid = function(e) {
        return e.configData.playerConfigKey
    }, Fe.pii = function(e) {
        return e.playlistItemData.index
    }, Fe.pl = function(e) {
        return e.playerData.playerSize.height
    }, Fe.plc = function(e) {
        return e.external.playerAPI.getPlaylist().length
    }, Fe.pli = function(e) {
        return e.playlistItemData.itemId
    }, Fe.pp = function(e) {
        return f(e.external.playerAPI)
    }, Fe.prc = function(e) {
        return function() {
            var e = window.jwplayer,
                a = 0;
            if ("function" == typeof e)
                for (a = 0; a < 1e3; a++)
                    if (!e(a).uniqueId) return a;
            return a
        }()
    }, Fe.ps = function(e) {
        return e.playerData.playerSize.bucket
    }, Fe.pss = function(e) {
        return e.meta.playbackTracking.playSessionSequence
    }, Fe.pt = function(e) {
        return e.browser.pageData.pageTitle
    }, Fe.pu = function(e) {
        return e.browser.pageData.pageURL
    }, Fe.pv = function(e) {
        return e.staticPlayerData.playerVersion
    }, Fe.pyc = function(e) {
        return e.meta.playbackTracking.playItemCount
    }, Fe.s = function(e) {
        return e.configData.sharingEnabled
    }, Fe.sdk = function(e) {
        return e.staticPlayerData.sdkPlatform
    }, Fe.stc = function(e) {
        return e.meta.setupCount
    }, Fe.sv = function(e) {
        return e.staticPlayerData.sdkVersion
    }, Fe.bun = function(e) {
        return e.staticPlayerData.bundleId
    }, Fe.ifa = function(e) {
        return e.meta.doNotPingBackIDs ? void 0 : e.staticPlayerData.advertisingId
    }, Fe.om = function(e) {
        return e.staticPlayerData.deviceModel
    }, Fe.t = function(e) {
        return he(e.playlistItemData.item)
    }, Fe.tul = function(e) {
        return e.playlistItemData.item.thumbnailUrl
    }, Fe.tv = function(e) {
        return "3.29.2"
    }, Fe.vb = function(e) {
        return e.playerData.viewable
    }, Fe.vi = function(e) {
        var a = e.playerData.playerConfig.visibility;
        return void 0 === a ? a : Math.round(100 * a) / 100
    }, Fe.vl = function(e) {
        return e.external.playerAPI.getVolume()
    }, Fe.wd = function(e) {
        return e.playerData.playerSize.width
    }, Fe.xid = function(e) {
        return e.playlistItemData.externalId
    }, Fe.xav = function(e) {
        return e.meta.xidAlgorithmVersion
    }, Fe.stpe = function(e) {
        return !!e.meta.playbackTracking.sendSetTimeEvents
    }, Fe.ppm = function(e) {
        return e.playerData.playbackMode
    }, Fe.strt = function(e) {
        var a = e.playerData.startup;
        return e.meta.lastEvent === a.dispatchEvent ? a.startupTime : void 0
    }, Fe.tstc = function(e) {
        return e.browser.pageData.testCaseId
    }, Fe.fsm = function(e) {
        return e.external.playerAPI.getFullscreen()
    }, Fe.dpl = function(e) {}, Fe.ss = function(e) {
        return e.meta.sessionSampled || void 0
    }, Fe.amp = function(e) {
        return e.browser.pageData.amp
    }, Fe.jwac = function(e) {
        return e.browser.pageData.jwAmpComponent || void 0
    };
    var Ne = {
        aes: 1,
        widevine: 2,
        playready: 3,
        fairplay: 4
    };
    var qe = {
        interaction: 1,
        autostart: 2,
        repeat: 3,
        external: 4,
        "related-interaction": 1,
        "related-auto": 5,
        playlist: 6,
        viewable: 7
    };
    var Ue = {
        none: 1,
        metadata: 2,
        auto: 3
    };

    function Qe(e) {
        return e === 1 / 0 ? 1 / 0 : (e |= 0) <= 0 ? 0 : e < 30 ? 1 : e < 60 ? 4 : e < 180 ? 8 : e < 300 ? 16 : 32
    }

    function _e(e) {
        try {
            return e.external.playerAPI.qoe().item.sums.stalled || 0
        } catch (e) {
            return 0
        }
    }
    var ze = Math.round,
        Ke = {};
    Ke.st = function(e) {
        return e.playerData.setupTime
    }, Ke.bwe = function(e) {
        return l(e.playerData.playerConfig.bandwidthEstimate)
    }, Ke.cct = function(e) {
        return a = e.playlistItemData.item, t = e.external.playerAPI, Array.prototype.some.call(a.tracks || 0, function(e) {
            var a = e.kind;
            return "captions" === a || "subtitles" === a
        }) ? 1 : 1 < t.getCaptionsList().length ? 2 : 0;
        var a, t
    }, Ke.drm = function(e) {
        return ((a = e.playlistItemData.drm) ? Ne[a] || 999 : 0) || e.meta.playbackTracking.segmentsEncrypted;
        var a
    }, Ke.ff = function(e) {
        return "function" == typeof(a = e.external.playerAPI).qoe ? 10 * Math.round(a.qoe().firstFrame / 10) | 0 : -1;
        var a
    }, Ke.l = function(e) {
        return a = e.playlistItemData.duration, (a |= 0) <= 0 || a === 1 / 0 ? 0 : a < 15 ? 1 : a <= 300 ? 2 : a <= 1200 ? 3 : 4;
        var a
    }, Ke.vr = function(e) {
        return function(e) {
            if (e.getPlugin) {
                var a = e.getPlugin("vr");
                if (a) switch (a.getMode()) {
                    case "magic-window":
                        return 0;
                    case "cardboard":
                        return 1;
                    case "gear-vr":
                        return 2;
                    default:
                        return null
                }
            }
            return null
        }(e.external.playerAPI)
    }, Ke.etw = function(e) {
        return e.meta.playbackTracking.retTimeWatched
    }, Ke.ubc = function(e) {
        return ze(_e(e))
    }, Ke.ltc = function(e) {
        return ze(function(e) {
            try {
                return e.external.playerAPI.qoe().item.sums.loading || 0
            } catch (e) {
                return 0
            }
        }(e))
    }, Ke.ubi = function(e) {
        return ze(function(e, a) {
            void 0 === a && (a = e.meta.lastEvent);
            var t = _e(e),
                n = e.meta.previousBufferTimes[a];
            void 0 === e.meta.previousBufferTimes[a] && (n = e.meta.previousBufferTimes[a] = t);
            var r = Math.round(t - n);
            return e.meta.previousBufferTimes[a] = t, r
        }(e))
    }, Ke.pw = function(e) {
        return 0 | e.meta.playbackTracking.normalizedTime
    }, Ke.ti = function(e) {
        return e.meta.playbackTracking.elapsedSeconds
    }, Ke.vti = function(e) {
        return e.meta.playbackTracking.viewableElapsedSeconds
    }, Ke.ati = function(e) {
        return e.meta.playbackTracking.audibleElapsedSeconds
    }, Ke.cvl = function(e) {
        return Math.floor(e.meta.seekTracking.videoStartDragTime)
    }, Ke.tvl = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime)
    }, Ke.sdt = function(e) {
        return 1 === e.meta.seekTracking.numTrackedSeeks ? 0 : Date.now() - e.meta.seekTracking.dragStartTime
    }, Ke.vso = function(e) {
        return Math.floor(e.meta.seekTracking.lastTargetTime) - Math.floor(e.meta.seekTracking.videoStartDragTime)
    }, Ke.qcr = function(e) {
        return e.playerData.visualQuality.reason
    }, Ke.abm = function(e) {
        return e.playerData.visualQuality.adaptiveBitrateMode
    }, Ke.avc = function(e) {
        return e.playerData.numAutoVisualQualityChange
    }, Ke.ppr = function(e) {
        return e.meta.playbackTracking.prevPlaybackRate
    }, Ke.erc = function(e) {
        return e.playerData.lastErrorCode[e.meta.lastEvent]
    }, Ke.pcp = function(e) {
        return ze(e.meta.playbackTracking.currentPosition)
    }, Ke.stg = function(e) {
        return e.sharing.shareMethod
    }, Ke.tps = function(e) {
        return ze(e.meta.playbackTracking.playedSecondsTotal)
    }, Ke.srf = function(e) {
        return e.sharing.shareReferrer
    }, Ke.plng = function(e) {
        return e.playerData.localization.language
    }, Ke.pni = function(e) {
        return e.playerData.localization.numIntlKeys
    }, Ke.pnl = function(e) {
        return e.playerData.localization.numLocalKeys
    }, Ke.pbs = function(e) {
        try {
            return e.external.playerAPI.qoe().item.counts.stalled || 0
        } catch (e) {
            return null
        }
    }, Ke.tc = function(e) {
        return e.meta.playbackTracking.thresholdCrossed
    }, Ke.flc = function(e) {
        return e.playerData.floatingConfigured
    }, Ke.fls = function(e) {
        return e.playerData.playerConfig.floatingState
    }, Ke.xam = function(e) {
        return e.playerData.apiTracking.methodCalled
    }, Ke.xfmp = function(e) {
        return e.playerData.apiTracking.firstMeaningfulParam
    }, Ke.dle = function(e) {
        return e.meta.playbackTracking.latency
    }, Ke.cdid = function(e) {
        return e.external.playerAPI.id
    }, Ke.pcfg = function(e) {
        return e.playerData.stringifiedSetupConfig
    }, Ke.pvta = function(e) {
        return e.meta.playbackTracking.posterVideoThumbAnimated
    }, Ke.ovta = function(e) {
        return e.meta.playbackTracking.overlayVideoThumbAnimated
    }, Ke.pvt = function(e) {
        return e.meta.playbackTracking.posterVideoThumbnail || void 0
    }, Ke.ipv = function(e) {
        return e.playerData.inferencePluginVersion
    };
    var We = t,
        He = a,
        $e = {};
    $e.mk = function(e) {
        return function(e, a) {
            if (!e) return null;
            var t = e.sources[0],
                n = t.type;
            if (!n) {
                var r = t.file;
                n = a.extension(r)
            }
            return n
        }(e.playlistItemData.item, e.external.utils)
    }, $e.pd = function(e) {
        return a = e.playlistItemData.item, t = a.preload, Ue[t] || 0;
        var a, t
    }, $e.vrt = function(e) {
        return function(e) {
            if (!e || !e.stereomode) return null;
            switch (e.stereomode) {
                case "monoscopic":
                    return 0;
                case "stereoscopicTopBottom":
                    return 1;
                case "stereoscopicLeftRight":
                    return 2;
                default:
                    return null
            }
        }(e.playlistItemData.item)
    }, $e.pr = function(e) {
        return a = e.playlistItemData.playReason, qe[a] || 0;
        var a
    }, $e.psd = function(e) {
        return -1 !== Ge.indexOf(e.meta.lastEvent) ? e.related.pinSetId : ve(e.playlistItemData.item)
    }, $e.vh = function(e) {
        return e.playerData.visualQuality.height
    }, $e.vw = function(e) {
        return e.playerData.visualQuality.width
    }, $e.sbr = function(e) {
        return e.playerData.visualQuality.bitrate
    }, $e.tb = function(e) {
        return function(e) {
            var a = e.getContainer().querySelector("video"),
                t = 0;
            if (a && (t = a.duration, a.buffered && a.buffered.length)) {
                var n = a.buffered.end(a.buffered.length - 1) || 0;
                return Math.round(10 * n) / 10
            }
            return t = t || Math.abs(e.getDuration()), Math.round(t * e.getBuffer() / 10) / 10
        }(e.external.playerAPI)
    }, $e.vd = function(e) {
        return e.playlistItemData.duration
    }, $e.q = function(e) {
        return Qe(e.playlistItemData.duration)
    }, $e.tt = function(e) {
        return a = e.playlistItemData.item, t = a.tracks, Array.prototype.some.call(t || 0, function(e) {
            return "thumbnails" === e.kind
        });
        var a, t
    }, $e.vs = function(e) {
        var a = e.meta.playbackEvents;
        return function(e, a, t, n) {
            var r = 3 < arguments.length && void 0 !== n ? n : {};
            if (!a) return null;
            if (t && t.levels && t.levels.length) {
                var i = t.levels[0];
                if (i && "auto" === ("" + i.label).toLowerCase()) return 5
            }
            if (Ie(e.getContainer(), "jw-flag-audio-player")) return 6;
            var o = 0 | r.width,
                d = 0 | r.height;
            return 0 != o || 0 != d ? o <= 320 ? 1 : o <= 640 ? 2 : o <= 1280 ? 3 : 4 : "rtmp" === a.sources[0].type ? 6 : 0
        }(e.external.playerAPI, e.playlistItemData.item, a[We], a[He])
    }, $e.ptid = function(e) {
        return c(e.playlistItemData.item, "variations.selected.images.id")
    };
    var Je = B({}, Fe, Oe, Ve, $e, Ke, Le, Re, Me, Be);

    function Xe(e, r) {
        var a = ce.events[e],
            t = a.parameterGroups.reduce(function(e, a) {
                return e.concat(ce.paramGroups[a].members)
            }, []).concat(a.pingSpecificParameters ? a.pingSpecificParameters : []).map(function(e) {
                return t = r, n = Je[a = e] ? Je[a] : function() {
                    t.meta.debug && console.log("No parameter generation function for param " + a)
                }, {
                    code: a,
                    value: n(t)
                };
                var a, t, n
            });
        return {
            event: a.code,
            bucket: a.bucket,
            parameters: t,
            pingDestination: a.pingDestination
        }
    }
    var Ye = {
        missingMediaOrExternalID: function(e) {
            return !e.meta.sessionSampled && (!e.playlistItemData.mediaId && !e.playlistItemData.externalId)
        },
        missingAdScheduleID: function(e) {
            return !e.meta.sessionSampled && !e.ads.adScheduleId
        },
        missingFeedID: function(e) {
            return !e.related.feedId
        }
    };
// DEFAULT ENABLED
// OUTPUT PING IN Player
// DONT OPEN THIS CODE WITH HTTPS:// IS EXAMPLE CODE
// https://prd.jwpltx.com/v1/jwplayer6/ping.gif?h=-1066119240&e=e&n=3136401433928968&aid=gz_FBsVMEeWiQBKCk4Wcgw&amp=0&at=1&c=-1&ccp=0&cp=0&d=0&eb=1&ed=6&emi=1964rcl10s3e&i=0&id=RDn7eg0o&lid=bnhiqfp0af70&lsa=set&mt=0&pbd=1&pbr=1&pgi=1lfx23t1mtrp&ph=1&pid=Jq6HIbgz&pii=0&pl=732&plc=1&pli=5jl51z1sduwh&pp=shaka&ppm=VOD&prc=1&ps=4&pss=1&pt=Out-Player%20Widget%20on%20an%20Article&pu=https%3A%2F%2Fdemo.kodi.al%2F1%2F&pv=8.16.3&pyc=0&s=0&sdk=0&stc=1&stpe=0&t=Surfing%20Ocean%20Wave&tv=3.29.2&vb=0&vi=0.34&vl=90&wd=1301&ab=0&cae=0&cb=0&cdid=player&cme=0&dd=0&flc=0&fv=&ga=0&lng=en&mk=dash&mu=https%3A%2F%2Fcdn.jwplayer.com%2Fmanifests%2FRDn7eg0o.mpd&pbc=0&pd=2&pdr=https%3A%2F%2Fdemo.kodi.al%2F&plng=en&plt=750&pni=0&po=0&sp=0&st=220&sa=1595599848248
    var Ze = {
            //main: "prd.jwpltx.com/v1", // DEFAULT ENABLED
           // meta: "ping-meta-prd.jwpltx.com/v1" // DEFAULT ENABLED
			
            main: "", // BLANK BY ME
            meta: "" // BLANK BY ME
			
        },
        ea = function(e, a, t, n) {
            var r = [{
                    code: ne,
                    value: e
                }, {
                    code: te,
                    value: Math.random().toFixed(16).substr(2, 16)
                }].concat(t),
                i = [];

// OUTPUT PING IN Player
// DONT OPEN THIS CODE WITH HTTPS:// IS EXAMPLE CODE
// https://jwplayer6/ping.gif?h=-533536024&e=e&n=1476195724907343&aid=gz_FBsVMEeWiQBKCk4Wcgw&amp=0&at=1&c=-1&ccp=0&cp=0&d=0&eb=1&ed=6&emi=sbfoq315rvjw&i=0&id=RDn7eg0o&lid=bnhiqfp0af70&lsa=read&mt=0&pbd=1&pbr=1&pgi=uqlpff1yhy4n&ph=1&pid=Jq6HIbgz&pii=0&pl=732&plc=1&pli=15saf6213nb6&pp=shaka&ppm=VOD&prc=1&ps=4&pss=1&pt=Out-Player%20Widget%20on%20an%20Article&pu=https%3A%2F%2Fdemo.kodi.al%2F1%2F&pv=8.16.3&pyc=0&s=0&sdk=0&stc=1&stpe=0&t=Surfing%20Ocean%20Wave&tv=3.29.2&vb=0&vi=0.34&vl=90&wd=1301&ab=0&cae=0&cb=0&cdid=player&cme=0&dd=0&flc=0&fv=&ga=0&lng=en&mk=dash&mu=https%3A%2F%2Fcdn.jwplayer.com%2Fmanifests%2FRDn7eg0o.mpd&pbc=0&pd=2&pdr=https%3A%2F%2Fdemo.kodi.al%2F&plng=en&plt=700&pni=0&po=0&sp=0&st=230&sa=1595600420655
            r.forEach(function(e) {
                var a = e.value;
                !0 !== a && !1 !== a || (a = a ? 1 : 0), null != a && i.push(e.code + "=" + encodeURIComponent(a))
            });
            var o = "file:" === window.location.protocol ? "https:" : "",
                d = i.join("&"),
                l = "h=" + function(e) {
                    var a = 0;
                    if (!(e = decodeURIComponent(e)).length) return a;
                    for (var t = 0; t < e.length; t++) {
                        a = (a << 5) - a + e.charCodeAt(t), a &= a
                    }
                    return a
                }(d) + "&" + d;
				// HIQE KETE ROP QIREN
				// PING.GIF
            return
			 // DEFAULT ENABLED
			//return o + "//" + Ze[n] + "/" + a + "/ping.gif?" + l
        },
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        aa = function(e) {
            e.trackingState.pageLoaded = !0;
            for (var a = e.trackingState.queue.length; a--;) ra(e, e.trackingState.queue.shift());
            window.removeEventListener("load", e.trackingState.boundFlushQueue)
        };

    function ta(e) {
        var a = e.external.playerAPI,
            t = "complete" === (a.getContainer().ownerDocument || window.document).readyState;
        (e.trackingState.pageLoaded = t) || (e.trackingState.boundFlushQueue = aa.bind(null, e), window.addEventListener && window.addEventListener("load", e.trackingState.boundFlushQueue), setTimeout(e.trackingState.boundFlushQueue, 5e3))
    }

    function na(e, a) {
        var t = a.event,
            n = a.bucket,
            r = a.parameters,
            i = a.pingDestination,
            o = ea(t, n, r, i),
            d = !e.trackingState.pageLoaded;
        if (d && (t === ie || t === de || t === oe)) aa(e);
        else if (d) return void e.trackingState.queue.push(o);
        ra(e, o)
    }

    function ra(e, a) {
        var t = new Image,
            n = void 0;
        try {
            n = Date.now()
        } catch (e) {}
        t.src = a + "&" + re + "=" + n;
        for (var r = e.trackingState.images, i = r.length; i-- && (r[i].width || r[i].complete);) r.length = i;
        if (r.push(t), e.meta.debug && e.trackingState.onping) try {
            e.trackingState.onping.call(null, a)
        } catch (e) {}
    }
    var ia = {
        delaySend: !1,
        returnURL: !1
    };


    function oa(t, e, a, n) {
        var r = 2 < arguments.length && void 0 !== a ? a : "jwplayer6",
            i = 3 < arguments.length && void 0 !== n ? n : {};
        i = B({}, ia, i), je(t, e, r);
        var o = u(e, r),
            d = ce.events[o];
        if (d && !(d.filters || []).map(function(e) {
                return a = t, Ye[e](a);
                var a
            }).some(function(e) {
                return !!e
            })) {
            var l = Xe(o, t);
            return i.delaySend ? na.bind(null, t, l) : i.returnURL ? ea(l.event, l.bucket, l.parameters, l.pingDestination) : void na(t, l)
        }
    }


    function da(e) {
        if (!e.bidders) return {};
        var r = {},
            i = void 0;
        e.bidders.forEach(function(e) {
            var t, n, a = e.name;
            r[a.toLowerCase()] = (t = e, n = {}, F.forEach(function(e) {
                var a;
                "result" === e ? n.result = D[t[e]] : B(n, void 0 !== t[e] ? ((a = {})[e] = t[e], a) : void 0), t.code && -1 !== ["error", "invalid"].indexOf(t.result) && (n.errorCode = t.code)
            }), n), e.errorCode && !i && (i = e.errorCode)
        });
        var a = e.floorPriceCurrency;
        return B({
            mediationLayer: L[e.mediationLayerAdServer],
            floorPriceCents: e.floorPriceCents,
            bidders: r,
            bidTimeout: e.bidTimeout
        }, void 0 !== i ? {
            errorCode: i
        } : void 0, a ? {
            floorPriceCurrency: a
        } : void 0)
    }

    function la(t, e) {
        var n = t.ads.adEventData; - 1 === t.ads.adClient && e && (t.ads.adClient = M(e.client)), e.sequence !== n.podIndex && (delete n.timeAdLoading, delete n.adCreativeType), ua(n, e, "offset"), ua(n, e, "witem"), ua(n, e, "wcount"), ua(n, e, "skipoffset"), ua(n, e, "linear", function(e, a) {
            return a === e
        }), ua(n, e, "adposition", function(e, a) {
            return {
                pre: 0,
                mid: 1,
                post: 2,
                api: 3
            } [a]
        }), ua(n, e, "creativetype", function(e, a) {
            var t = "";
            switch (a) {
                case "static":
                    t = "image/unknown";
                    break;
                case "video":
                    t = "video/unknown";
                    break;
                case "vpaid":
                case "vpaid-swf":
                    t = "application/x-shockwave-flash";
                    break;
                case "vpaid-js":
                    t = "application/javascript";
                    break;
                default:
                    t = a || t
            }
            return n.adCreativeType = t
        }), ua(n, e, "tag", function(e, a) {
            return n.tagdomain = function(e) {
                if (e) {
                    var a = e.match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/));
                    if (a && 1 < a.length) return a[1]
                }
                return ""
            }(t.external.playerAPI.utils.getAbsolutePath(a)), a
        }), ua(n, e, "description"), ua(n, e, "creativeAdId"), ua(n, e, "placement"), ua(n, e, "advertiser"), ua(n, e, "advertiserId"), e.timeLoading && (n.timeAdLoading = 10 * Math.round(e.timeLoading / 10)), e.universalAdId ? n.universalAdId = e.universalAdId.map(function(e) {
            if ("unknown" !== e.universalAdIdRegistry) return e.universalAdIdRegistry + "." + e.universalAdIdValue
        }).filter(function(e) {
            return !!e
        }).join(",") : delete n.universalAdId, n.mediaFileCompliance = e.mediaFileCompliance, n.categories = e.categories, n.adSystem = e.adsystem || n.adSystem, n.vastVersion = e.vastversion || n.vastVersion, n.podIndex = e.sequence || n.podIndex, n.podCount = e.podcount || n.podCount, n.tagURL = e.tag || n.tagURL || e.vmap, n.preload = "boolean" == typeof e.preloadAds ? e.preloadAds : n.preload, n.adPlayId = e.adPlayId || n.adPlayId, n.adBreakId = e.adBreakId || n.adBreakId, n.adVastId = e.adId || n.adVastId, n.duration = e.duration || n.duration, n.adTitle = e.adtitle || n.adTitle, n.jwpseg = e.jwpseg, n.timeForVPBCache = e.timeForVPBCache || n.timeForVPBCache, n.dealId = e.dealId || n.dealId;
        var a = void 0;
        if (a = "googima" === e.client ? (n.creativeId = c(e, "ima.ad.g.creativeId"), c(e, "ima.ad.g.mediaUrl")) : (n.creativeId = c(e, "creativeId"), c(e, "mediafile.file")), n.adMediaFileURL = "string" == typeof a ? a.substring(0, 2500) : a, e.item) {
            var r = be(e.item);
            n.targetMediaId = r !== t.playlistItemData.mediaId ? r : null
        }
        t.ads.headerBiddingData = da(e)
    }

    function ua(e, a, t, n) {
        var r = 3 < arguments.length && void 0 !== n ? n : ca;
        if (a.hasOwnProperty(t)) {
            var i = r;
            e[t] = i(t, a[t])
        }
    }

    function ca(e, a) {
        return a
    }

    function sa(e, a) {
        e.meta.playerState !== a && (e.meta.playerStateDuration = Date.now()), e.meta.playerState = a
    }

    function pa(e, a, t) {
        null === a.previousTime && (a.previousTime = t);
        var n = t - a.previousTime;
        return a.previousTime = t, n = Math.min(Math.max(0, n), 4), a.playedSeconds = a.playedSeconds + n, e.playerData.viewable && (a.viewablePlayedSeconds = a.viewablePlayedSeconds + n), !e.playerData.muted && 0 < e.playerData.volume && (a.audiblePlayedSeconds = a.audiblePlayedSeconds + n), n
    }

    function fa(e, a) {
        var t = e.ads.adEventData,
            n = e.ads.currentQuartile;
        n > t.previousQuartile && (la(e, a), oa(e, "v", "clienta"), t.previousQuartile = n)
    }
    var ma = {
        adComplete: function(e, a) {
            e.ads.currentQuartile = 4, fa(e, a)
        },
        adError: function(e, a) {
            "object" == typeof a && a && (e.playerData.lastErrorCode.ae = a.code || 1, e.ads.jwAdErrorCode = a.adErrorCode, 51901 === a.adErrorCode ? e.ads.errorMessage = "string" == typeof a.message ? a.message.substring(0, 100) : void 0 : e.ads.errorMessage = void 0, e.ads.timeout = a.timeout), oa(e, "ae", "clienta")
        },
        adTime: function(e, a) {
            var t = e.ads.adEventData,
                n = t.position = a.position;
            t.duration = t.duration || a.duration;
            var r = e.ads.adPlaybackTracking;
            !n || t.position > t.duration || (pa(e, r, n), e.ads.currentQuartile = Math.min(3, Math.floor((4 * t.position + .05) / t.duration)), fa(e, a))
        },
        adSkipped: function(e, a) {
            e.ads.watchedPastSkipPoint = a.watchedPastSkipPoint, oa(e, "s", "clienta")
        },
        adImpression: function(e, a) {
            k(e, ie);
            var t = e.ads.adPlaybackTracking;
            t.audiblePlayedSeconds = 0, t.viewablePlayedSeconds = 0, t.playedSeconds = 0, t.previousTime = null, oa(e, ie, "clienta")
        },
        adBreakEnd: function(e, a) {
            e.ads.adEventData = B({}, G)
        }
    };

    function ga(i) {
        var e = i.external.playerAPI;
        e.on(E.join(" "), function() {
            sa(i, "ad-break"), i.ads.adBreakTracking && i.ads.adBreakTracking.shouldTrack && (i.ads.adBreakTracking.shouldTrack = !1, i.ads.adBreakTracking.adBreakCount++)
        }), e.on("adClick adRequest adMeta adImpression adComplete adSkipped adError adTime adBidRequest adBidResponse adStarted adLoaded adViewableImpression adBreakEnd", function(e) {
            var a, t, n, r = i.ads.adEventData;
            a = r, "adClick" === (t = e).type || a && a.adId === t.id && -1 !== t.id || (i.ads.adEventData = B({
                adId: e.id
            }, G)), n = e, -1 === P.indexOf(n.type) && la(i, e), e.type in ma ? ma[e.type](i, e) : -1 === T.indexOf(e.type) && oa(i, S[e.type], "clienta")
        })
    }

    function va(a) {
        function e() {
            k(a, Y);
            var e = oa(a, Y, "jwplayer6", {
                returnURL: !0
            });
            void 0 !== e && navigator.sendBeacon(e)
        }
        window.addEventListener("unload", e), a.external.playerAPI.on("remove", function() {
            k(a, Y), window.removeEventListener("unload", e), a.meta.playerRemoved = !0, oa(a, Y, "jwplayer6")
        })
    }
    var ya = ["predictions", "segments"];
    var ba = 1e3;

    function ha(e) {
        var a = e.meta.seekTracking;
        if (ka(a)) {
            clearTimeout(a.seekDebounceTimeout);
            var t = oa(e, "vs", "jwplayer6", {
                delaySend: !0
            });
            a.seekDebounceTimeout = setTimeout(function() {
                var e;
                t && t(), (e = a).videoStartDragTime = 0, e.dragStartTime = 0, e.seekDebounceTimeout = null, e.lastTargetTime = 0, e.numTrackedSeeks = 0
            }, ba)
        }
    }

    function ka(e) {
        return 0 < e.numTrackedSeeks
    }
    var wa = a,
        Da = e,
        Ia = n;

    function Sa(e) {
        e.meta.playbackTracking.playItemCount++, oa(e, "s")
    }

    function Ta(d, l) {
        return function(e) {
            var a = d.meta.playbackEvents,
                t = d.playlistItemData,
                n = d.meta.playbackTracking,
                r = d.external.playerAPI,
                i = a[l];
            if (l === wa) {
                var o = e.segment;
                o && (n.segmentReceived = !0, n.segmentsEncrypted = o.encryption), t.drm = e.drm || ""
            }
            a[l] = e, l === Da && (i || (n.playedSeconds = 0, n.viewablePlayedSeconds = 0, n.audiblePlayedSeconds = 0, n.playedSecondsTotal = 0), n.previousTime = v(r)), l === Ia && (k(d, U), "flash_adaptive" === f(r) ? !d.meta.playbackSent && n.segmentReceived && (d.meta.playbackSent = !0, n.segmentReceived = !1, Sa(d)) : d.meta.playbackSent || (d.meta.playbackSent = !0, Sa(d)))
        }
    }

    function Pa(e) {
        var a = e.meta.playbackTracking,
            t = a.playedSeconds,
            n = a.viewablePlayedSeconds,
            r = a.audiblePlayedSeconds;
        a.playedSeconds = 0, a.viewablePlayedSeconds = 0;
        var i = t + .5 | (a.audiblePlayedSeconds = 0);
        a.elapsedSeconds = i;
        var o = n + .5 | 0;
        a.viewableElapsedSeconds = o;
        var d = r + .5 | 0;
        a.audibleElapsedSeconds = d, 0 < i && oa(e, _)
    }

    function Ea(e, a, t, n) {
        a < n && n <= a + t && (e.meta.playbackTracking.retTimeWatched = n, oa(e, "ret"))
    }

    function Ca(e, a, t) {
        var n, r, i, o = z + "-" + t;
        n = a, r = t, i = o, e.meta.pingLimiters.playlistItem.canSendPing(i) && Math.floor(n) === r && (e.meta.playbackTracking.thresholdCrossed = t, oa(e, z), e.meta.pingLimiters.playlistItem.setPingSent(o))
    }

    function Aa(e, a, t) {
        var n, r;
        2 < arguments.length && void 0 !== t && t ? ha(e) : (n = e.meta.seekTracking, r = a, ka(n) || (n.videoStartDragTime = r.position, n.dragStartTime = Date.now()), n.numTrackedSeeks++, n.lastTargetTime = r.offset)
    }

    function xa(e, a, t) {
        var n, r;
        e.playerData.lastErrorCode[a] = t.code, k(e, ue), e.meta.eventPreAbandonment = u(a, "error"), e.errors.numberEventsSent < e.errors.NUM_ERRORS_PER_SESSION && (r = a, "number" == typeof(n = e).playerData.lastErrorCode[r] || Math.random() < n.errors.SAMPLE_RATE) && (e.errors.numberEventsSent += 1, oa(e, a, q))
    }
    var ja = n,
        Ba = t,
        Ra = a,
        Ma = e;

    function Va(e) {
        var a = e.meta;
        a.playbackEvents = {}, a.playbackSent = !1, a.playbackTracking.trackingSegment = 0, a.pingLimiters.playlistItem.resetAll(), a.playbackTracking.posterVideoThumbAnimated = void 0, a.playbackTracking.overlayVideoThumbAnimated = void 0, e.playerData.numAutoVisualQualityChange = 0;
        var t = e.playerData.startup;
        t.initialTime = null, t.startupTime = null, t.dispatchEvent = null
    }

    function Oa(p) {
        var e, a, f = p.external.playerAPI,
            i = function(e, a) {
                e.playlistItemData.playReason = a.playReason || "", e.playerData.startup.initialTime = Date.now(), oa(e, "pa")
            }.bind(null, p),
            t = function(e, a) {
                var t = e.playlistItemData.mediaId;
                t && t === be(a.item) && (e.playerData.lastErrorCode[W] = a.code, oa(e, "paf", "error"))
            }.bind(null, p);
        f.on("idle buffer play pause complete error", function(e) {
            sa(p, e.type)
        }), f.on("idle", Va.bind(null, p)), f.on("ready", function(e) {
            p.playlistItemData.ready = B({}, e), p.playerData.viewable = f.getViewable(), p.playerData.muted = f.getMute(), p.playerData.volume = f.getVolume();
            try {
                var a = f.getPlugin("inference");
                a && a.version && (p.playerData.inferencePluginVersion = a.version)
            } catch (e) {}
        }), f.on("playlistItem", function(e) {
            var a = p.playlistItemData;
            a.drm = "", 0 !== p.meta.playbackTracking.playSessionSequence && (a.itemId = R(12)), p.meta.playbackTracking.playSessionSequence++, a.index = e.index;
            var t, n, r = e.item || y(f);
            r && (a.mediaId = be(r), we(p, r)), a.ready && (p.meta.playbackTracking.posterVideoThumbnail = ke(e.item), t = p, n = a.ready, t.playerData.setupTime = -1, n && n.setupTime && (t.playerData.setupTime = 10 * Math.round(n.setupTime / 10) | 0), oa(t, "e"), a.item = null, a.ready = null), f.off("beforePlay", i), f.once("beforePlay", i), Va(p), p.meta.playbackTracking.segmentReceived = p.meta.playbackTracking.segmentsEncrypted = !1
        }), f.on("playAttemptFailed", t), f.on("meta", Ta(p, Ra)), f.on("levels", Ta(p, Ba)), f.on("play", Ta(p, Ma)), f.on("firstFrame", Ta(p, ja)), f.on("time", function(e) {
            var a = p.meta.playbackEvents,
                t = p.meta.playbackTracking,
                n = "number" == typeof e.currentTime ? e.currentTime : v(f);
            t.currentPosition = n;
            var r = e.duration;
            if (n)
                if (p.meta.seekTracking.dragStartTime) t.previousTime = n;
                else {
                    1 < n && (a[Ba] || Ta(p, Ba)({}));
                    var i, o, d, l = Qe(r),
                        u = (i = n, d = l, (o = r) === 1 / 0 ? null : i / (o / d) + 1 | 0);
                    0 === t.trackingSegment && (t.trackingSegment = u);
                    var c = pa(p, t, n);
                    if (Ea(p, t.playedSecondsTotal, c, 10), Ea(p, t.playedSecondsTotal, c, 30), Ea(p, t.playedSecondsTotal, c, 60), t.playedSecondsTotal = t.playedSecondsTotal + c, !0 === t.sendSetTimeEvents && (Ca(p, n, 3), Ca(p, n, 10), Ca(p, n, 30)), r <= 0 || r === 1 / 0) t.playedSeconds >= g && (t.latency = e.latency, Pa(p));
                    else if (u === t.trackingSegment + 1) {
                        var s = m * t.trackingSegment / l;
                        if (l < u) return;
                        t.normalizedTime = s, Pa(p), t.trackingSegment = 0
                    }
                }
        }), f.on("seek", function(e) {
            p.meta.playbackTracking.previousTime = v(f), p.meta.playbackTracking.trackingSegment = 0, Aa(p, e)
        }), f.on("seeked", function(e) {
            Aa(p, e, !0)
        }), f.on("complete", function() {
            var e = p.meta.playbackTracking,
                a = h(p);
            if (!(a <= 0 || a === 1 / 0)) {
                Qe(a);
                e.normalizedTime = m, Pa(p), e.playedSecondsTotal = 0
            }
        }), f.on("cast", function(e) {
            p.casting = !!e.active
        }), f.on("playbackRateChanged", function(e) {
            oa(p, "pru"), p.meta.playbackTracking.prevPlaybackRate = e.playbackRate
        }), f.on("visualQuality", function(e) {
            "auto" === e.reason && (p.playerData.numAutoVisualQualityChange += 1);
            var a, t, n = V(f);
            a = n, t = !1, b.width === a.width && b.height === a.height || (t = !0), b = a, t && -1 === r.indexOf(n.reason) && oa(p, "vqc")
        }), f.on(o.join(" "), function() {
            p.ads.adBreakTracking && (p.ads.adBreakTracking.shouldTrack = !0)
        }), f.on("error", xa.bind(null, p, ue)), f.on("setupError", xa.bind(null, p, le)), f.on("autostartNotAllowed", function() {
            oa(p, Q)
        }), f.on("viewable", function(e) {
            p.playerData.viewable = e.viewable
        }), f.on("mute", function(e) {
            p.playerData.muted = e.mute
        }), f.on("volume", function(e) {
            p.playerData.volume = e.volume
        }), f.on("captionsChanged", function(e) {
            0 !== e.track && 0 === p.playerData.captionsIndex && oa(p, ee), p.playerData.captionsIndex = e.track
        }), f.on("videoThumbFirstFrame", function(e) {
            p.meta.playbackTracking.posterVideoThumbAnimated = !0
        }), f.on("inference", function(e) {
            var a, t, n;
            a = p, t = e, n = ya.reduce(function(e, a) {
                return t[a] && (e[a] = t[a]), e
            }, {}), a.inference.result = n
        }), Va(p), a = _, (e = p).meta.previousBufferTimes[a] = _e(e)
    }

    function Ga(e, a) {
        e.related.feedId = me(a), e.related.feedInstanceId = ge(a), e.related.feedType = ye(a, "kind"), e.related.feedShownId = a.feedShownId, e.related.onClickSetting = "onclick" in a ? "play" === a.onclick ? 1 : 0 : void 0, e.related.feedInterface = a.ui;
        var t = a.itemsShown || [],
            n = 0,
            r = [],
            i = [],
            o = [],
            d = !0,
            l = !1;
        t.forEach(function(e) {
            ve(e) && n++, r.push(be(e));
            var a = ke(e) ? "1" : "0";
            l || "1" != a || (l = !0), o.push(a);
            var t = c(e, "variations.selected.images.id");
            t && (d = !1), i.push(t || "null")
        }), e.related.thumbnailIdsShown = d ? [] : i, e.related.idsShown = r, e.related.pinnedCount = n, e.related.page = a.page, e.related.autotimerLength = a.autoTimer, e.related.pinSetId = ve(a.target), e.related.advanceTarget = be(a.target), e.related.targetThumbID = c(a.target, "variations.selected.images.id"), e.related.overlayVideoThumbs = l ? o.join(",") : void 0, e.related.ordinalClicked = "position" in a ? a.position + 1 : a.index
    }

    function La(e, a, t) {
        Ga(e, a), oa(e, t)
    }

    function Fa(a) {
        var e = a.external.playerAPI.getPlugin("related");
        e && (e.on("playlist", function(e) {
            null !== e.playlist && La(a, e, H)
        }), e.on("feedShown", function(e) {
            sa(a, "recs-overlay"), a.related.shownReason = e.reason, a.related.feedWasViewable = e.viewable, La(a, e, $)
        }), e.on("feedClick", function(e) {
            La(a, e, J)
        }), e.on("feedAutoAdvance", function(e) {
            La(a, e, X)
        }), e.on("videoThumbFirstFrame", function(e) {
            a.meta.playbackTracking.overlayVideoThumbAnimated = !0
        }), a.related.relatedSetUp = !0)
    }

    function Na(t) {
        t.external.playerAPI.getPlugin && (t.external.playerAPI.on("ready", function() {
            var a, e;
            Fa(t), (e = (a = t).external.playerAPI).on("playlistItem", function() {
                a.related.sendHoverPing = !0, a.related.nextShownReason = null, a.related.shownReason = null
            }), e.on("nextShown", function(e) {
                a.related.nextShownReason = e.reason, a.related.shownReason = e.reason, sa(a, "recs-overlay"), "hover" === e.reason && !a.related.sendHoverPing || (a.related.sendHoverPing = !1, La(a, e, $))
            }), e.on("nextClick", function(e) {
                a.related.nextShownReason && La(a, e, J)
            }), e.on("nextAutoAdvance", function(e) {
                La(a, e, X)
            })
        }), t.external.playerAPI.on("relatedReady", function() {
            t.related.relatedSetUp || Fa(t)
        }))
    }
    var qa = {
        facebook: "fb",
        twitter: "twi",
        email: "em",
        link: "cl",
        embed: "ceb",
        pinterest: "pin",
        tumblr: "tbr",
        googleplus: "gps",
        reddit: "rdt",
        linkedin: "lkn",
        custom: "cus"
    };

    function Ua(e) {
        e.external.playerAPI.on("ready", function() {
            ! function(a) {
                var e = a.external.playerAPI;
                if (e.getPlugin) {
                    var t = e.getPlugin("sharing");
                    t && t.on("click", function(e) {
                        a.sharing.shareMethod = qa[e.method] || qa.custom, oa(a, K)
                    })
                }
            }(e)
        })
    }

    function Qa(e) {
        var a;
        a = e, "function" == typeof navigator.sendBeacon && va(a), Oa(e), ga(e), Na(e), Ua(e)
    }
    var _a = .01;
    var za, Ka = (za = function() {
            var e = navigator.plugins;
            if (e && "object" == typeof e["Shockwave Flash"]) {
                var a = e["Shockwave Flash"].description;
                if (a) return a
            }
            if (void 0 !== window.ActiveXObject) try {
                var t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (t) {
                    var n = t.GetVariable("$version");
                    if (n) return n
                }
            } catch (e) {}
            return ""
        }().replace(/\D+(\d+\.?\d*).*/, "$1"), function() {
            return za
        }),
        Wa = R(12);

    function Ha(e) {
        if (e) return {
            pageViewId: Wa
        };
        var a = "",
            t = "",
            n = !1,
            r = window.top !== window.self;
        if (r) {
            n = (a = function(e) {
                var a = e.match(/^(https?:\/\/).*\.(?:ampproject\.org|bing-amp\.com)\/(?:.\/)?(?:.\/)?(.*)$/);
                if (a && 1 < a.length) return "" + a[1] + a[2];
                var t = e.match(/^(https?:\/\/.*)\.(?:cdn\.ampproject\.org|bing-amp\.com)$/);
                if (t && 1 < t.length) return ("" + t[1]).replace(/([^-])(\-)([^-])/g, "$1.$3").replace(/\-\-/g, "-");
                return e
            }(document.referrer)) !== document.referrer;
            try {
                a = a || window.top.location.href, t = window.top.document.title
            } catch (e) {}
        }
        var i, o = document.querySelector('meta[property="og:title"]'),
            d = void 0;
        return o && (d = o.getAttribute("content")), {
            pageURL: a || window.location.href,
            pageTitle: t || document.title,
            inIframe: r,
            flashVersion: Ka(),
            pageViewId: Wa,
            pageOGTitle: d,
            testCaseId: void 0,
            amp: n,
            jwAmpComponent: (i = document.location.search, /isAMP/.test(i))
        }
    }
    var $a = void 0;
    try {
        $a = window.localStorage
    } catch (e) {}
    var Ja = (Xa.prototype.canSendPing = function(e) {
        return !this.pingTracker[e]
    }, Xa.prototype.setPingSent = function(e) {
        this.pingTracker[e] = !0
    }, Xa.prototype.resetAll = function() {
        this.pingTracker = {}
    }, Xa.prototype.resetKey = function(e) {
        delete this.pingTracker[e]
    }, Xa);

    function Xa() {
        ! function(e, a) {
            if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
        }(this, Xa), this.pingTracker = {}
    }
    var Ya = ["1", "yes", "true"];
    var Za = 0;

    function et(e, a, t) {
        var n, r = a.sdkplatform ? parseInt(a.sdkplatform, 10) : j,
            i = e.getConfig(),
            o = (i || {}).advertising || {},
            d = Za += 1,
            l = "doNotTrack" in navigator || "doNotTrack" in window || "msDoNotTrack" in navigator ? navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack : "unsupported",
            u = null == (n = l) || -1 === Ya.indexOf(n.toString()),
            c = void 0,
            s = void 0;
        if (u) {
            var p = function() {
                if (!$a) return {
                    localID: null,
                    storageAvailable: "fail"
                };
                var e = $a.jwplayerLocalId;
                if (e) return {
                    localID: e,
                    storageAvailable: "read"
                };
                try {
                    return $a.jwplayerLocalId = R(12), {
                        localID: $a.jwplayerLocalId,
                        storageAvailable: "set"
                    }
                } catch (e) {
                    return {
                        localID: null,
                        storageAvailable: "fail"
                    }
                }
            }();
            c = p.localID, s = p.storageAvailable
        } else $a && $a.removeItem("jwplayerLocalId");
        var f, m = (f = document.querySelector("html")) ? f.getAttribute("lang") : null,
            g = window.matchMedia && window.matchMedia("(display-mode: standalone)").matches || !0 === window.navigator.standalone,
            v = function() {
                try {
                    if (window.top !== window.self) return window.top.document.referrer
                } catch (e) {
                    return null
                }
                return document.referrer
            }(),
            y = i.defaultPlaybackRate || 1,
            b = M(o.client);
        e.getPlugin && e.getPlugin("related");
        var h, k, w, D, I, S, T, P, E = Math.random() <= _a;
        return {
            external: {
                playerAPI: e,
                div: t,
                utils: e.utils
            },
            playerData: {
                setupTime: -1,
                startup: {
                    initialTime: null,
                    startupTime: null,
                    dispatchEvent: null
                },
                visualQuality: V(e),
                numAutoVisualQualityChange: 0,
                lastErrorCode: {},
                defaultPlaybackRate: y,
                playerConfig: {
                    visibility: -1,
                    bandwidthEstimate: -1,
                    floatingState: !1
                },
                floatingConfigured: !(!i.floating || i.floating.disabled),
                playerSize: {
                    width: 0,
                    height: 0,
                    bucket: 0
                },
                localization: {
                    language: i.language,
                    numIntlKeys: "object" == typeof i.intl ? Object.keys(i.intl).length : null,
                    numLocalKeys: "object" == typeof i.localization ? Object.keys(i.localization).length : null
                },
                contextualEmbed: !!i.contextual,
                playbackMode: null,
                stringifiedSetupConfig: O(e),
                captionsIndex: 0
            },
            staticPlayerData: (S = a, T = r, P = {
                playerVersion: e.version.split("+")[0],
                sdkPlatform: S.sdkplatform || j,
                embedID: R(12)
            }, T && (P.sdkVersion = S.iossdkversion, P.bundleId = S.bundleId, P.advertisingId = S.advertisingId, P.deviceModel = S.deviceModel), P),
            casting: !1,
            accountData: function(e, a) {
                var t = 0,
                    n = void 0;
                if (e) {
                    var r = new a(e),
                        i = r.edition();
                    (t = A[i] || 0) !== C && (n = r.token())
                }
                return {
                    analyticsID: n = n || "_",
                    edition: t
                }
            }(i.key, e.utils.key),
            configData: (h = i, w = window.jwplayer && window.jwplayer.defaults || {}, D = h.related, I = {
                playerHosting: h[ae] || w[ae] || 0,
                playerConfigKey: h.pid,
                abTestConfig: h.pad,
                skinName: h.skin,
                advertisingBlockType: (k = h).advertising ? k.advertising.outstream ? 2 : 1 : 0,
                sharingEnabled: !!h.sharing,
                castingBlockPresent: !!h.cast,
                gaBlockPresent: !!h.ga,
                autostartConfig: !!h.autostart,
                displayDescription: !1 !== h.displaydescription,
                posterImagePresent: !!h.image,
                playbackRateControlsSet: !!h.playbackRateControls
            }, h.autostart in x && (I.autostartConfig = x[h.autostart]), D && (I.relatedPluginFeedFile = D.recommendations || D.file), I),
            browser: {
                langAttr: m,
                isPageStandalone: g,
                docReferrer: v,
                storage: {
                    localID: c,
                    storageAvailable: s,
                    doNotTrackProperty: l
                },
                pageData: Ha(r),
                allowUserTracking: u
            },
            meta: {
                debug: !0 === a.debug,
                doNotPingBackIDs: !0 === i.doNotTrackCookies,
                setupCount: Za,
                nthPlayer: d,
                playbackEvents: {},
                playbackSent: void 0,
                playbackTracking: {
                    trackingSegment: void 0,
                    playedSeconds: 0,
                    viewablePlayedSeconds: 0,
                    audiblePlayedSeconds: 0,
                    playedSecondsTotal: 0,
                    previousTime: null,
                    segmentReceived: !1,
                    segmentsEncrypted: !1,
                    playItemCount: 0,
                    playSessionSequence: 0,
                    prevPlaybackRate: y,
                    retTimeWatched: 0,
                    normalizedTime: -1,
                    elapsedSeconds: 0,
                    viewableElapsedSeconds: 0,
                    audibleElapsedSeconds: 0,
                    currentPosition: 0,
                    thresholdCrossed: 0,
                    sendSetTimeEvents: i.setTimeEvents || !1
                },
                bufferedPings: [],
                seekTracking: {
                    numTrackedSeeks: 0,
                    videoStartDragTime: 0,
                    dragStartTime: 0,
                    seekDebounceTimeout: null,
                    lastTargetTime: 0
                },
                previousBufferTimes: {},
                lastEvent: "",
                lastBucket: "",
                eventPreAbandonment: void 0,
                playerState: "idle",
                playerStateDuration: 0,
                playerRemoved: !1,
                pingLimiters: {
                    playlistItem: new Ja
                },
                sessionSampled: E
            },
            playlistItemData: {
                ready: void 0,
                item: {},
                drm: "",
                index: 0,
                itemId: R(12),
                mediaId: "",
                playReason: "",
                duration: 0
            },
            related: {
                shownReason: null,
                nextShownReason: null,
                sendHoverPing: null,
                feedId: null,
                feedInstanceId: null,
                feedType: null,
                onClickSetting: -1,
                feedInterface: null,
                idsShown: [],
                thumbnailIdsShown: [],
                pinnedCount: -1,
                page: -1,
                autotimerLength: -1,
                pinSetId: -1,
                advanceTarget: null,
                ordinalClicked: -1,
                relatedSetUp: !1
            },
            sharing: {
                shareMethod: null,
                shareReferrer: function(e) {
                    if (!e) return null;
                    var a = e.match(/[?&]jwsource=([^&]+)/);
                    return a ? decodeURIComponent(a[1]) : null
                }(window.location.search)
            },
            ads: {
                adEventData: B({}, G),
                advertisingConfig: o,
                adClient: b,
                adScheduleId: o.adscheduleid,
                adBreakTracking: -1 !== b ? {
                    shouldTrack: !1,
                    adBreakCount: 0
                } : null,
                adPlaybackTracking: {},
                headerBiddingData: {},
                headerBiddingCacheData: {
                    bidder: null,
                    cacheKey: null
                },
                watchedPastSkipPoint: null,
                jwAdErrorCode: null,
                currentQuartile: null
            },
            errors: {
                SAMPLE_RATE: .02,
                NUM_ERRORS_PER_SESSION: 1,
                numberEventsSent: 0
            },
            trackingState: {
                pageLoaded: null,
                queue: [],
                onping: "function" == typeof a.onping ? a.onping : null,
                images: [],
                boundFlushQueue: null
            },
            inference: {
                result: null
            }
        }
    }
    var at = 0;
    (window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)("jwpsrv", "7.0", function(e, a, t) {
        var r, i = et(e, a, t);
        Qa(i), ta(i), this.getTrackingPixelURLs = (r = i, function(e, a) {
            if (e && a) {
                r.ads.headerBiddingCacheData.bidder = e, r.ads.headerBiddingCacheData.cacheKey = a;
                var t = oa(r, "vci", "clienta", {
                        returnURL: !0
                    }),
                    n = oa(r, "vcae", "clienta", {
                        returnURL: !0
                    });
                return r.ads.headerBiddingCacheData.bidder = void 0, r.ads.headerBiddingCacheData.cacheKey = void 0, {
                    impression: t,
                    error: n
                }
            }
        }), this.doNotTrackUser = function(e) {
            return e.meta.doNotPingBackIDs
        }.bind(null, i), this.trackExternalAPIUsage = function(e, a) {
            var t, n, r;
            if (!(25 <= at || .005 < Math.random())) return at++, n = e, r = a, (t = i).playerData.apiTracking = {
                methodCalled: n,
                firstMeaningfulParam: r
            }, oa(t, Z, "jwplayer6"), void delete t.playerData.apiTracking
        }
    })
}();