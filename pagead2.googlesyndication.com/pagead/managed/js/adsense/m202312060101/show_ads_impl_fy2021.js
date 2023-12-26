(function(sttc) {
    'use strict';
    var r, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        fa = {},
        ia = {};

    function la(a, b, c) {
        if (!c || null != a) {
            c = ia[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }

    function ma(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ia[d] && (a = 1E9 * Math.random() >>> 0, ia[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ia[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ma("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    var na = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if (da && "function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa;

    function va(a, b) {
        a.prototype = na(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.oj = b.prototype
    }
    ma("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        va(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ma("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new fa.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var t = this || self;

    function wa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = t, e = 0; e < c.length; e++)
                if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    }

    function xa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ya(a) {
        var b = xa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Ba(a) {
        return Object.prototype.hasOwnProperty.call(a, Ca) && a[Ca] || (a[Ca] = ++Da)
    }
    var Ca = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Da = 0;

    function Ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Fa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ga(a, b, c) {
        Ga = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea : Fa;
        return Ga.apply(null, arguments)
    }

    function Ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ka(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function La(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.oj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Gn = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ma(a) {
        return a
    };
    var Na = {
        Em: 0,
        Dm: 1,
        Cm: 2
    };

    function Oa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    La(Oa, Error);
    Oa.prototype.name = "CustomError";
    var Pa;

    function Qa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Oa.call(this, c + a[d])
    }
    La(Qa, Oa);
    Qa.prototype.name = "AssertionError";

    function Ra(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ta(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ua(a, b) {
        var c = a.length;
        const d = "string" === typeof a ? a.split("") : a;
        for (--c; 0 <= c; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Va(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Wa(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Xa(a, b, c) {
        let d = c;
        Ta(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ya(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Za(a, b) {
        return 0 <= Ra(a, b)
    }

    function $a(a, b) {
        b = Ra(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function ab(a, b) {
        let c = 0;
        Ua(a, function(d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++
        })
    }

    function bb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function cb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function db(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ya(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function eb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function fb(a, b, c) {
        c = c || gb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function hb(a, b) {
        if (!ya(a) || !ya(b) || a.length != b.length) return !1;
        const c = a.length,
            d = ib;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function gb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ib(a, b) {
        return a === b
    }

    function jb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = jb.apply(null, eb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function lb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var mb = {
        Cj: "google_adtest",
        Gj: "google_ad_client",
        Hj: "google_ad_format",
        Jj: "google_ad_height",
        Xj: "google_ad_width",
        Nj: "google_ad_layout",
        Oj: "google_ad_layout_key",
        Pj: "google_ad_output",
        Qj: "google_ad_region",
        Tj: "google_ad_slot",
        Vj: "google_ad_type",
        Wj: "google_ad_url",
        Yj: "google_allow_expandable_ads",
        tk: "google_analytics_domain_name",
        uk: "google_analytics_uacct",
        Ik: "google_container_id",
        Sk: "google_gl",
        rl: "google_enable_ose",
        Dl: "google_full_width_responsive",
        Hm: "google_rl_filtering",
        Gm: "google_rl_mode",
        Im: "google_rt",
        Fm: "google_rl_dest_url",
        km: "google_max_radlink_len",
        qm: "google_num_radlinks",
        rm: "google_num_radlinks_per_unit",
        Fj: "google_ad_channel",
        jm: "google_max_num_ads",
        lm: "google_max_responsive_height",
        Dk: "google_color_border",
        ql: "google_enable_content_recommendations",
        Pk: "google_content_recommendation_ui_type",
        Ok: "google_source_type",
        Nk: "google_content_recommendation_rows_num",
        Mk: "google_content_recommendation_columns_num",
        Lk: "google_content_recommendation_ad_positions",
        Qk: "google_content_recommendation_use_square_imgs",
        Fk: "google_color_link",
        Ek: "google_color_line",
        Hk: "google_color_url",
        Dj: "google_ad_block",
        Sj: "google_ad_section",
        Ej: "google_ad_callback",
        Ak: "google_captcha_token",
        Gk: "google_color_text",
        kk: "google_alternate_ad_url",
        Mj: "google_ad_host_tier_id",
        Bk: "google_city",
        Kj: "google_ad_host",
        Lj: "google_ad_host_channel",
        lk: "google_alternate_color",
        Ck: "google_color_bg",
        ul: "google_encoding",
        Bl: "google_font_face",
        Vk: "google_cust_ch",
        Yk: "google_cust_job",
        Xk: "google_cust_interests",
        Wk: "google_cust_id",
        Zk: "google_cust_u_url",
        Fl: "google_hints",
        Vl: "google_image_size",
        mm: "google_mtl",
        mn: "google_cpm",
        Kk: "google_contents",
        om: "google_native_settings_key",
        Rk: "google_country",
        dn: "google_targeting",
        Cl: "google_font_size",
        dl: "google_disable_video_autoplay",
        Bn: "google_video_product_type",
        An: "google_video_doc_id",
        zn: "google_cust_gender",
        Xm: "google_cust_lh",
        Wm: "google_cust_l",
        ln: "google_tfs",
        nm: "google_native_ad_template",
        bm: "google_kw",
        an: "google_tag_for_child_directed_treatment",
        bn: "google_tag_for_under_age_of_consent",
        Km: "google_region",
        Uk: "google_cust_criteria",
        Rj: "google_safe",
        Tk: "google_ctr_threshold",
        Lm: "google_resizing_allowed",
        Nm: "google_resizing_width",
        Mm: "google_resizing_height",
        yn: "google_cust_age",
        em: "google_language",
        cm: "google_kw_type",
        zm: "google_pucrd",
        xm: "google_page_url",
        cn: "google_tag_partner",
        Rm: "google_restrict_data_processing",
        yj: "google_adbreak_test",
        Ij: "google_ad_frequency_hint",
        Aj: "google_admob_interstitial_slot",
        Bj: "google_admob_rewarded_slot",
        zj: "google_admob_ads_only",
        Uj: "google_ad_start_delay_hint",
        im: "google_max_ad_content_rating",
        Bm: "google_ad_public_floor",
        Am: "google_ad_private_floor",
        xn: "google_traffic_source",
        Um: "google_shadow_mode",
        um: "google_overlays",
        ym: "google_privacy_treatments",
        Ym: "google_xz"
    };

    function nb(a, b) {
        this.i = a === ob && b || "";
        this.j = pb
    }
    nb.prototype.Ja = !0;
    nb.prototype.g = function() {
        return this.i
    };
    nb.prototype.toString = function() {
        return this.i
    };

    function qb(a) {
        return a instanceof nb && a.constructor === nb && a.j === pb ? a.i : "type_error:Const"
    }
    var pb = {},
        ob = {};
    var u = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        rb = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        sb = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        tb = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var ub = new u(564509651),
        vb = new u(380025941);

    function wb() {
        return !1
    }

    function xb() {
        return !0
    }

    function yb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function zb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ab(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Bb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Cb(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Db(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Eb = {
            passive: !0
        },
        Fb = Ab(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Gb(a) {
        return a ? a.passive && Fb() ? a : a.capture || !1 : !1
    }

    function Hb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Gb(d)), !0) : !1
    }

    function Ib(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Gb(d)), !0) : !1
    };

    function Jb(a) {
        Jb[" "](a);
        return a
    }
    Jb[" "] = function() {};

    function Kb(a, b) {
        try {
            return Jb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var w = a => {
        var b = "De";
        if (a.De && a.hasOwnProperty(b)) return a.De;
        b = new a;
        return a.De = b
    };
    var Lb = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.i = () => {}
        }
    };

    function y(a) {
        return w(Lb).j(a.g, a.defaultValue)
    }

    function B(a) {
        return w(Lb).l(a.g, a.defaultValue)
    }

    function Mb(a) {
        return w(Lb).m(a.g, a.defaultValue)
    };
    var Nb = wa(610401301, !1),
        Ob = wa(572417392, !0);

    function Pb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Qb(a) {
        if (!Rb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Tb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ub, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Vb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Wb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Xb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Yb, "&#0;"));
        return a
    }
    var Tb = /&/g,
        Ub = /</g,
        Vb = />/g,
        Wb = /"/g,
        Xb = /'/g,
        Yb = /\x00/g,
        Rb = /[\x00&<>"']/;

    function Zb(a, b) {
        return -1 != a.indexOf(b)
    };

    function $b() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var ac;
    const bc = t.navigator;
    ac = bc ? bc.userAgentData || null : null;

    function cc(a) {
        return Nb ? ac ? ac.brands.some(({
            brand: b
        }) => b && Zb(b, a)) : !1 : !1
    }

    function C(a) {
        return Zb($b(), a)
    };

    function dc() {
        return Nb ? !!ac && 0 < ac.brands.length : !1
    }

    function ec() {
        return dc() ? !1 : C("Opera")
    }

    function fc() {
        return dc() ? !1 : C("Trident") || C("MSIE")
    }

    function gc() {
        return C("Safari") && !(hc() || (dc() ? 0 : C("Coast")) || ec() || (dc() ? 0 : C("Edge")) || (dc() ? cc("Microsoft Edge") : C("Edg/")) || (dc() ? cc("Opera") : C("OPR")) || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }

    function hc() {
        return dc() ? cc("Chromium") : (C("Chrome") || C("CriOS")) && !(dc() ? 0 : C("Edge")) || C("Silk")
    }

    function ic() {
        return C("Android") && !(hc() || C("Firefox") || C("FxiOS") || ec() || C("Silk"))
    };
    var jc = ec(),
        kc = fc(),
        lc = C("Edge"),
        mc = lc || kc,
        nc = C("Gecko") && !(Zb($b().toLowerCase(), "webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        oc = Zb($b().toLowerCase(), "webkit") && !C("Edge");

    function pc() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var qc;
    a: {
        var rc = "",
            sc = function() {
                var a = $b();
                if (nc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (lc) return /Edge\/([\d\.]+)/.exec(a);
                if (kc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (oc) return /WebKit\/(\S+)/.exec(a);
                if (jc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();sc && (rc = sc ? sc[1] : "");
        if (kc) {
            var tc = pc();
            if (null != tc && tc > parseFloat(rc)) {
                qc = String(tc);
                break a
            }
        }
        qc = rc
    }
    var uc = qc,
        vc;
    if (t.document && kc) {
        var wc = pc();
        vc = wc ? wc : parseInt(uc, 10) || void 0
    } else vc = void 0;
    var xc = vc;

    function yc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function zc(a) {
        var b = Ac;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Bc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Cc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Dc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ec(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Dc.length; f++) c = Dc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Fc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Gc;

    function Hc() {
        if (void 0 === Gc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ma,
                        createScript: Ma,
                        createScriptURL: Ma
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                Gc = a
            } else Gc = a
        }
        return Gc
    };
    class Ic {
        constructor(a) {
            this.i = a;
            this.Ja = !0
        }
        toString() {
            return this.i.toString()
        }
        g() {
            return this.i.toString()
        }
    };
    var Jc = class {
        constructor(a) {
            this.i = a
        }
        toString() {
            return this.i + ""
        }
    };
    Jc.prototype.Ja = !0;
    Jc.prototype.g = function() {
        return this.i.toString()
    };

    function Kc(a, b) {
        a = Lc.exec(Mc(a).toString());
        var c = a[3] || "";
        return Nc(a[1] + Oc("?", a[2] || "", b) + Oc("#", c))
    }

    function Mc(a) {
        return a instanceof Jc && a.constructor === Jc ? a.i : "type_error:TrustedResourceUrl"
    }

    function Pc(a, b) {
        var c = qb(a);
        if (!Qc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Rc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof nb ? qb(d) : encodeURIComponent(String(d))
        });
        return Nc(a)
    }
    var Rc = /%{(\w+)}/g,
        Qc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Lc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Sc = {};

    function Nc(a) {
        const b = Hc();
        a = b ? b.createScriptURL(a) : a;
        return new Jc(a, Sc)
    }

    function Oc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var Tc = class {
        constructor(a) {
            this.i = a
        }
        toString() {
            return this.i.toString()
        }
    };
    Tc.prototype.Ja = !0;
    Tc.prototype.g = function() {
        return this.i.toString()
    };

    function Uc(a) {
        return a instanceof Tc && a.constructor === Tc ? a.i : "type_error:SafeUrl"
    }
    var Vc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        $c = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function ad(a) {
        if (a instanceof Tc) return a;
        a = "object" == typeof a && a.Ja ? a.g() : String(a);
        $c.test(a) ? a = new Tc(a, bd) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Vc) ? new Tc(a, bd) : null);
        return a
    }
    var bd = {},
        cd = new Tc("about:invalid#zClosurez", bd);
    const dd = {};

    function ed(a) {
        return a instanceof fd && a.constructor === fd ? a.i : "type_error:SafeStyle"
    }

    function gd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(hd).join(" ") : hd(d), b += `${c}:${d};`)
            }
        return b ? new fd(b, dd) : id
    }
    class fd {
        constructor(a) {
            this.i = a;
            this.Ja = !0
        }
        g() {
            return this.i
        }
        toString() {
            return this.i.toString()
        }
    }
    var id = new fd("", dd);

    function hd(a) {
        if (a instanceof Tc) return 'url("' + Uc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof nb) a = qb(a);
        else {
            a = String(a);
            var b = a.replace(jd, "$1").replace(jd, "$1").replace(kd, "url");
            if (ld.test(b)) {
                if (b = !md.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && nd(a)
                }
                a = b ? od(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Qa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function nd(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const ld = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        kd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        jd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        md = /\/\*/;

    function od(a) {
        return a.replace(kd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (ad(d) || cd).g();
            return c + f + b + f + e
        })
    };
    class pd {
        constructor(a) {
            this.i = a;
            this.Ja = !0
        }
        toString() {
            return this.i.toString()
        }
        g() {
            return this.i
        }
    };
    const qd = {};

    function rd(a) {
        return a instanceof sd && a.constructor === sd ? a.i : "type_error:SafeHtml"
    }

    function td(a) {
        return a instanceof sd ? a : ud(Qb("object" == typeof a && a.Ja ? a.g() : String(a)))
    }

    function ud(a) {
        const b = Hc();
        a = b ? b.createHTML(a) : a;
        return new sd(a, qd)
    }

    function vd(a) {
        if (!wd.test(a)) throw Error("");
        if (a.toUpperCase() in xd) throw Error("");
    }

    function yd(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!wd.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof nb) e = qb(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!Aa(e)) throw Error("");
                            e instanceof fd || (e = gd(e));
                            e = ed(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in zd)
                                if (e instanceof Jc) e = Mc(e).toString();
                                else if (e instanceof Tc) e = Uc(e);
                            else if ("string" === typeof e) e = (ad(e) || cd).g();
                            else throw Error("");
                        }
                        e.Ja && (e = e.g());
                        f = `${f}="` +
                            Qb(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Fc[a.toLowerCase()] ? b += ">" : (c = Ad(c), b += ">" + rd(c).toString() + "</" + a + ">");
        return ud(b)
    }

    function Bd(a) {
        const b = td(Cd),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = td(e), c.push(rd(e).toString()))
            };
        a.forEach(d);
        return ud(c.join(rd(b).toString()))
    }

    function Ad(a) {
        return Bd(Array.prototype.slice.call(arguments))
    }
    class sd {
        constructor(a) {
            this.i = a;
            this.Ja = !0
        }
        g() {
            return this.i.toString()
        }
        toString() {
            return this.i.toString()
        }
    }
    const wd = /^[a-zA-Z0-9-]+$/,
        zd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        xd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Cd = new sd(t.trustedTypes && t.trustedTypes.emptyHTML || "", qd),
        Dd = ud("<br>");
    var Ed = Ab(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = rd(Cd);
        return !b.parentElement
    });

    function Fd(a, b) {
        if (Ed())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = rd(b)
    }
    var Gd = /^[\w+/_-]+[=]{0,2}$/;

    function Hd(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Jd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Kd(a) {
        return Jd.apply(null, arguments) / arguments.length
    };

    function Ld(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Ld.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Ld.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Ld.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Md(a, b) {
        this.width = a;
        this.height = b
    }

    function Nd(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    r = Md.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    };
    r.isEmpty = function() {
        return !(this.width * this.height)
    };
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Od(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Pd, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = ud(e + " "), Fd(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Pd = /&([^;\s<&]+);?/g;

    function Qd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Rd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Sd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Td(a) {
        return a ? new Ud(Vd(a)) : Pa || (Pa = new Ud)
    }

    function Wd(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Md(a.clientWidth, a.clientHeight)
    }

    function Xd(a) {
        var b = a.scrollingElement ? a.scrollingElement : oc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = Yd(a);
        return kc && a.pageYOffset != b.scrollTop ? new Ld(b.scrollLeft, b.scrollTop) : new Ld(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Yd(a) {
        return a.parentWindow || a.defaultView
    }

    function Zd(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ya(f) || Aa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (Aa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ta(g ? cb(f) : f, d)
            }
        }
    }

    function $d(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ae(a, b) {
        var c = $d(a, "DIV");
        kc ? (b = Ad(Dd, b), Fd(c, b), c.removeChild(c.firstChild)) : Fd(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Vd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var be = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ce = {
            IMG: " ",
            BR: "\n"
        };

    function de(a) {
        var b = [];
        ee(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ee(a, b, c) {
        if (!(a.nodeName in be))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ce) b.push(ce[a.nodeName]);
        else
            for (a = a.firstChild; a;) ee(a, b, c), a = a.nextSibling
    }

    function fe(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return ge(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Za(e.className.split(/\s+/), c))
        })
    }

    function ge(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Ud(a) {
        this.g = a || t.document || document
    }
    r = Ud.prototype;
    r.jh = function(a) {
        return "string" === typeof a ? this.g.getElementById(a) : a
    };
    r.xj = Ud.prototype.jh;
    r.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    r.createElement = function(a) {
        return $d(this.g, a)
    };
    r.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };

    function he(a, b) {
        return ae(a.g, b)
    }
    r.X = function() {
        return Yd(this.g)
    };
    r.append = function(a, b) {
        Zd(Vd(a), a, arguments)
    };
    r.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    r.ji = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function ie() {
        return Nb && ac ? ac.mobile : !je() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
    }

    function je() {
        return Nb && ac ? !ac.mobile && (C("iPad") || C("Android") || C("Silk")) : C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var ke = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function le(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function me(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) me(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function ne(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    class oe {
        constructor(a) {
            this.Ei = a
        }
    }

    function pe(a) {
        return new oe(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const qe = [pe("data"), pe("http"), pe("https"), pe("mailto"), pe("ftp"), new oe(a => /^[^:]*([/?#]|$)/.test(a))];

    function re(a, b = qe) {
        if (a instanceof Tc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof oe && d.Ei(a)) return new Tc(a, bd)
        }
    }

    function te(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function ue(a) {
        var b = re("#", qe) || cd;
        b = b instanceof Tc ? Uc(b) : te(b);
        void 0 !== b && (a.href = b)
    };
    var ve = class {};
    class we extends ve {
        constructor(a) {
            super();
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function xe(a, b, c) {
        var d = [ye `width`, ye `height`];
        if (0 === d.length) throw Error("");
        d = d.map(f => {
            if (f instanceof we) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => 0 !== e.indexOf(f))) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function ze(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const Ae = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Be(a, b) {
        a.src = Mc(b);
        (void 0) ? .Ln || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Ce(a) {
        try {
            return !!a && null != a.location.href && Kb(a, "foo")
        } catch {
            return !1
        }
    }

    function De(a, b = t) {
        b = Ee(b);
        let c = 0;
        for (; b && 40 > c++ && !a(b);) b = Ee(b)
    }

    function Ee(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function Fe(a) {
        return Ce(a.top) ? a.top : null
    }

    function Ge(a, b) {
        const c = He("SCRIPT", a);
        Be(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Ie(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Je() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Ke(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Le(a) {
        const b = [];
        Ke(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Me(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Oe = Ab(() => Ya(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ne) || 1E-4 > Math.random());
    const Ne = a => Zb($b(), a);
    var Pe = /^([0-9.]+)px$/,
        Qe = /^(-?[0-9.]{1,30})$/;

    function Re(a) {
        if (!Qe.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Se(a) {
        return (a = Pe.exec(a)) ? +a[1] : null
    }
    var Te = {
        Zj: "allow-forms",
        ak: "allow-modals",
        bk: "allow-orientation-lock",
        ck: "allow-pointer-lock",
        dk: "allow-popups",
        ek: "allow-popups-to-escape-sandbox",
        fk: "allow-presentation",
        gk: "allow-same-origin",
        hk: "allow-scripts",
        ik: "allow-top-navigation",
        jk: "allow-top-navigation-by-user-activation"
    };
    const Ue = Ab(() => Le(Te));

    function Ve() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Ue();
        return a.length ? Va(b, c => !Za(a, c)) : b
    }

    function We() {
        const a = He("IFRAME"),
            b = {};
        Ta(Ue(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Xe = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Ye = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (Xe(a, b)) return a;
                if (!(a = Ee(a))) break
            }
            return null
        },
        Ze = Ab(() => ie() ? 2 : je() ? 1 : 0),
        D = (a, b) => {
            Ke(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const $e = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        af = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        bf = /.*domain\.test$/,
        cf = /\.prod\.google\.com(:\d+)?$/;
    var df = a => $e[a] || af.test(a) || bf.test(a) || cf.test(a);
    let ef = [];
    const ff = () => {
        const a = ef;
        ef = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var gf = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        hf = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: gf(),
                    configurable: !1
                })
            } catch (c) {
                b && b.wa(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.wa(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        jf = (a, b) => {
            "complete" === a.document.readyState ? (ef.push(b), 1 == ef.length && (window.Promise ? Promise.resolve().then(ff) : window.setImmediate ? setImmediate(ff) : setTimeout(ff, 0))) : a.addEventListener("load", b)
        },
        kf = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function He(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var lf = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, Ce(a) && (b = a);
            return b
        },
        mf = a => {
            var b = Fe(a);
            if (!b) return 1;
            a = 0 === Ze();
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (0 === d) return 1;
            const e = Math.round(100 * (b / d + Number.EPSILON)) / 100;
            return 1 === e && y(ub) ? 1 : a || c ? e : Math.round(100 * (b / d / .4 + Number.EPSILON)) / 100
        };

    function nf(a) {
        t.setTimeout(() => {
            throw a;
        }, 0)
    };
    ic();
    hc();
    gc();
    var of = {}, pf = null;

    function qf(a) {
        var b = 3;
        void 0 === b && (b = 0);
        rf();
        b = of [b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function sf(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return qf(b)
    }

    function tf(a) {
        var b = [];
        uf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function uf(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = pf[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        rf();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function rf() {
        if (!pf) {
            pf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split("")); of [c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === pf[f] && (pf[f] = e)
                }
            }
        }
    };

    function vf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const wf = /[-_.]/g,
        xf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function yf(a) {
        return xf[a] || ""
    }

    function zf(a) {
        return null != a && a instanceof Uint8Array
    }
    let Af;
    var Bf = {};
    let Cf;

    function Df(a) {
        if (a !== Bf) throw Error("illegal external caller");
    }

    function Ef() {
        return Cf || (Cf = new Ff(null, Bf))
    }
    var Ff = class {
        constructor(a, b) {
            Df(b);
            this.J = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.J
        }
    };
    var Gf = !Ob;
    let Hf = !Ob;
    let Mf = 0,
        Nf = 0;

    function Of(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        if (b) {
            b = c;
            c = ~a;
            b ? b = ~b + 1 : c += 1;
            const [d, e] = [b, c];
            a = e;
            c = d
        }
        Mf = c >>> 0;
        Nf = a >>> 0
    }

    function Pf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        2097151 >= b ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Qf() {
        var a = Mf,
            b = Nf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Pf(a, b);
        return c
    }

    function Rf(a) {
        16 > a.length ? Of(Number(a)) : (a = BigInt(a), Mf = Number(a & BigInt(4294967295)) >>> 0, Nf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Sf(a) {
        return Array.prototype.slice.call(a)
    };
    var F = Symbol(),
        Tf = Symbol(),
        Uf = Symbol();

    function Vf(a) {
        const b = a[F] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Sf(a)), a[F] = b | 1)
    }

    function Wf(a, b, c) {
        return c ? a | b : a & ~b
    }

    function Xf() {
        var a = [];
        a[F] |= 1;
        return a
    }

    function Yf(a) {
        a[F] |= 34;
        return a
    }

    function Zf(a) {
        a[F] |= 32;
        return a
    }

    function $f(a, b) {
        b[F] = (a | 0) & -14591
    }

    function ag(a, b) {
        b[F] = (a | 34) & -14557
    }

    function bg(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var cg = {},
        dg = {};

    function eg(a) {
        return !(!a || "object" !== typeof a || a.Ji !== dg)
    }

    function fg(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let gg, hg = !Ob;

    function ig(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Ff(a, Bf) : Ef();
            else if (a.constructor !== Ff)
            if (zf(a)) {
                var d;
                c ? d = 0 == a.length ? Ef() : new Ff(a, Bf) : d = a.length ? new Ff(new Uint8Array(a), Bf) : Ef();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function jg(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        const d = a[F] | 0;
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        a[F] = d | 1;
        return !0
    }
    var kg;
    const lg = [];
    lg[F] = 55;
    kg = Object.freeze(lg);

    function mg(a) {
        if (a & 2) throw Error();
    }
    class ng {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new ng(this.g, this.i, this.l)
        }
    }
    var og = {};
    class pg {}
    class qg {}
    Object.freeze(new pg);
    Object.freeze(new qg);
    let rg;

    function sg(a) {
        if (rg) throw Error("");
        rg = a
    }

    function tg(a) {
        if (rg) try {
            rg(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function ug() {
        const a = vg();
        rg ? t.setTimeout(() => {
            tg(a)
        }, 0) : nf(a)
    }

    function wg(a) {
        a = Error(a);
        ne(a, "warning");
        tg(a);
        return a
    }

    function vg() {
        const a = Error();
        ne(a, "incident");
        return a
    };

    function xg(a) {
        if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function yg(a) {
        if ("boolean" !== typeof a) throw Error(`Expected boolean but got ${xa(a)}: ${a}`);
        return a
    }
    const zg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Ag(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : zg.test(a)
    }

    function Bg(a) {
        null != a && (Number.isFinite(a) || ug());
        return a
    }

    function Cg(a) {
        return a
    }

    function Dg(a) {
        if ("number" !== typeof a) throw wg("int32");
        if (!Number.isFinite(a)) throw wg("int32");
        return a | 0
    }

    function Eg(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function Fg(a) {
        if ("number" !== typeof a) throw wg("uint32");
        if (!Number.isFinite(a)) throw wg("uint32");
        return a >>> 0
    }

    function Gg(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Hg(a, b) {
        b = !!b;
        if (!Ag(a)) throw wg("int64");
        "string" === typeof a ? a = Ig(a) : b ? (a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), Jg(b) ? a = b : (Of(a), a = Qf()))) : a = Kg(a);
        return a
    }

    function Lg(a) {
        return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6))
    }

    function Jg(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function Mg(a) {
        if (0 > a) {
            Of(a);
            const b = Pf(Mf, Nf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Lg(String(a))) return a;
        Of(a);
        return 4294967296 * Nf + (Mf >>> 0)
    }

    function Kg(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Of(a);
            var b = Mf,
                c = Nf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
            b = 4294967296 * c + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Ig(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
        Jg(a) || (Rf(a), a = Qf());
        return a
    }

    function Ng(a) {
        if (null == a) return a;
        if (Ag(a)) {
            var b;
            "number" === typeof a ? b = Kg(a) : b = Ig(a);
            return b
        }
    }

    function Og(a, b) {
        b = !!b;
        if (!Ag(a)) throw wg("uint64");
        "string" === typeof a ? (b = Math.trunc(Number(a)), Number.isSafeInteger(b) && 0 <= b ? a = String(b) : (b = a.indexOf("."), -1 !== b && (a = a.substring(0, b)), Lg(a) || (Rf(a), a = Pf(Mf, Nf)))) : b ? (a = Math.trunc(a), 0 <= a && Number.isSafeInteger(a) ? a = String(a) : (b = String(a), Lg(b) ? a = b : (Of(a), a = Pf(Mf, Nf)))) : (a = Math.trunc(a), a = 0 <= a && Number.isSafeInteger(a) ? a : Mg(a));
        return a
    }

    function Pg(a) {
        return null == a ? a : Og(a)
    }

    function Qg(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function Rg(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Sg(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Tg(a, b, c, d) {
        if (null != a && "object" === typeof a && a.Me === cg) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Ug(b) : new b : void 0;
        let e = c = a[F] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[F] = e);
        return new b(a)
    }

    function Ug(a) {
        var b = a[Tf];
        if (b) return b;
        b = new a;
        Yf(b.R);
        return a[Tf] = b
    }

    function Vg(a, b, c) {
        return b ? Qg(a) : Sg(a) ? ? (c ? "" : void 0)
    };
    const Wg = (() => class extends Map {
        constructor() {
            super()
        }
    })();

    function Xg(a) {
        return a
    }

    function Yg(a) {
        if (a.Rc & 2) throw Error("Cannot mutate an immutable Map");
    }
    var bh = class extends Wg {
        constructor(a, b, c = Xg, d = Xg) {
            super();
            let e = a[F] | 0;
            e |= 64;
            this.Rc = a[F] = e;
            this.Rd = b;
            this.Ac = c || Xg;
            this.pf = this.Rd ? Zg : d || Xg;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? void 0 === k && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        Wg(a = $g) {
            return this.kf(a)
        }
        kf(a = $g) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        xc() {
            return this.size
        }
        clear() {
            Yg(this);
            super.clear()
        }
        delete(a) {
            Yg(this);
            return super.delete(this.Ac(a, !0, !1))
        }
        entries() {
            var a = this.rg();
            return new ng(a, ah, this)
        }
        keys() {
            return this.Fi()
        }
        values() {
            var a = this.rg();
            return new ng(a, bh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            Yg(this);
            a = this.Ac(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.pf(b, !0, !0, this.Rd, !1, this.Rc))
        }
        has(a) {
            return super.has(this.Ac(a, !1, !1))
        }
        get(a) {
            a = this.Ac(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.Rd;
                return c ?
                    (c = this.pf(b, !1, !0, c, this.Ih, this.Rc), c !== b && super.set(a, c), c) : b
            }
        }
        rg() {
            return Array.from(super.keys())
        }
        Fi() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    bh.prototype.toJSON = void 0;
    bh.prototype.Ji = dg;

    function Zg(a, b, c, d, e, f) {
        a = Tg(a, d, c, f);
        e && (a = ch(a));
        return a
    }

    function $g(a) {
        return a
    }

    function ah(a) {
        return [a, this.get(a)]
    };
    let dh;

    function eh(a, b) {
        dh = b;
        a = new a(b);
        dh = void 0;
        return a
    };

    function fh(a, b) {
        return gh(b)
    }

    function gh(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a) {
                    if (Array.isArray(a)) return hg || !jg(a, void 0, 9999) ? a : void 0;
                    if (zf(a)) return vf(a);
                    if (a instanceof Ff) {
                        const b = a.J;
                        return null == b ? "" : "string" === typeof b ? b : a.J = vf(b)
                    }
                    if (a instanceof bh) return a = a.Wg(), Gf || 0 !== a.length ? a : void 0
                }
        }
        return a
    };

    function hh(a, b, c) {
        a = Sf(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function ih(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[F] | 0) & 1 ? void 0 : f && (a[F] | 0) & 2 ? a : jh(a, b, c, void 0 !== d, e, f);
            else if (fg(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = ih(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function jh(a, b, c, d, e, f) {
        const g = d || c ? a[F] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Sf(a);
        for (let h = 0; h < a.length; h++) a[h] = ih(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function kh(a) {
        return ih(a, lh, void 0, void 0, !1, !1)
    }

    function lh(a) {
        return a.Me === cg ? a.toJSON() : a instanceof bh ? a.Wg(kh) : gh(a)
    };

    function mh(a, b, c = ag) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[F] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[F] = (d | 34) & -12293, a) : jh(a, mh, d & 4 ? ag : c, !0, !1, !0)
            }
            a.Me === cg ? (c = a.R, d = c[F], a = d & 2 ? a : eh(a.constructor, nh(c, d, !0))) : a instanceof bh && (c = Yf(a.kf(mh)), a = new bh(c, a.Rd, a.Ac, a.pf));
            return a
        }
    }

    function oh(a) {
        const b = a.R;
        return eh(a.constructor, nh(b, b[F], !1))
    }

    function nh(a, b, c) {
        const d = c || b & 2 ? ag : $f,
            e = !!(b & 32);
        a = hh(a, b, f => mh(f, e, d));
        a[F] = a[F] | 32 | (c ? 2 : 0);
        return a
    }

    function ch(a) {
        const b = a.R,
            c = b[F];
        return c & 2 ? eh(a.constructor, nh(b, c, !1)) : a
    };

    function ph(a, b, c) {
        if (!(4 & b)) return !0;
        if (null == c) return !1;
        0 === c && (4096 & b || 8192 & b) && 5 > (a.constructor[Uf] = (a.constructor[Uf] | 0) + 1) && ug();
        return 0 === c ? !1 : !(c & b)
    }

    function H(a, b) {
        a = a.R;
        return qh(a, a[F], b)
    }

    function qh(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= bg(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function rh(a, b, c) {
        const d = a.R;
        let e = d[F];
        mg(e);
        sh(d, e, b, c);
        return a
    }

    function sh(a, b, c, d, e) {
        var f = bg(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return e;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[F] = e);
            return e
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function th(a, b, c) {
        return void 0 !== uh(a, b, c, !1)
    }

    function vh(a, b, c, d, e) {
        var f = b & 2;
        let g = qh(a, b, c, e);
        Array.isArray(g) || (g = kg);
        const h = !(d & 2);
        d = !(d & 1);
        const k = !!(b & 32);
        let l = g[F] | 0;
        0 !== l || !k || f || h ? l & 1 || (l |= 1, g[F] = l) : (l |= 33, g[F] = l);
        f ? (a = !1, l & 2 || (Yf(g), a = !!(4 & l)), (d || a) && Object.freeze(g)) : (f = !!(2 & l) || !!(2048 & l), d && f ? (g = Sf(g), d = 1, k && !h && (d |= 32), g[F] = d, sh(a, b, c, g, e)) : h && l & 32 && !f && (g[F] &= -33));
        return g
    }

    function wh(a, b) {
        a = a.R;
        let c = a[F];
        const d = qh(a, c, b);
        var e = null == d || "number" === typeof d ? d : "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && sh(a, c, b, e);
        return e
    }

    function xh(a, b) {
        a = H(a, b);
        return null == a || "boolean" === typeof a ? a : "number" === typeof a ? !!a : void 0
    }

    function yh(a, b, c, d, e, f, g) {
        const h = a.R;
        let k = h[F];
        d = 2 & k ? 1 : d;
        f = !!f;
        let l = vh(h, k, b, 1 | (f ? 2 : 0), e);
        k = h[F];
        let m = l[F] | 0,
            n = m,
            p = !!(2 & m);
        var q = !!(4 & m);
        const v = p && q;
        if (ph(a, m, g)) {
            if (q || Object.isFrozen(l)) l = Sf(l), n = 0, m = zh(m, k, f), p = !!(2 & m), k = sh(h, k, b, l, e);
            for (q = a = 0; a < l.length; a++) {
                const A = c(l[a]);
                null != A && (l[q++] = A)
            }
            q < a && (l.length = q);
            c = Wf(m, 4096, !1);
            m = c = Wf(c, 8192, !1);
            m = Wf(m, 20, !0);
            g && (m = Wf(m, g, !0))
        }
        v || ((g = 1 === d) && (m = Wf(m, 2, !0)), m !== n && (l[F] = m), (g || p) && Object.freeze(l));
        2 === d && p && (l = Sf(l), m = zh(m, k, f), l[F] = m, sh(h,
            k, b, l, e));
        var z;
        f ? z = l : z = l;
        return z
    }
    let Ah;

    function Bh() {
        return Ah ? ? (Ah = new bh(Yf([]), void 0, void 0, void 0, og))
    }

    function Ch(a, b, c) {
        var d = Dh,
            e = b & 2;
        let f = !1;
        if (null == c) {
            if (e) return Bh();
            c = []
        } else if (c.constructor === bh) {
            if (0 == (c.Rc & 2) || e) return c;
            c = c.kf()
        } else Array.isArray(c) ? f = !!((c[F] | 0) & 2) : c = [];
        if (e) {
            if (!c.length) return Bh();
            f || (f = !0, Yf(c))
        } else if (f) {
            f = !1;
            e = Sf(c);
            for (c = 0; c < e.length; c++) {
                const g = e[c] = Sf(e[c]);
                Array.isArray(g[1]) && (g[1] = Yf(g[1]))
            }
            c = e
        }
        f || ((c[F] | 0) & 64 ? c[F] &= -33 : 32 & b && Zf(c));
        d = new bh(c, d, Vg, void 0);
        sh(a, b, 14, d, !1);
        return d
    }

    function Eh(a, b, c, d) {
        const e = a.R;
        let f = e[F];
        mg(f);
        if (null == c) return sh(e, f, b), a;
        let g = c[F] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && !1;
        if (ph(a, g))
            for (g = 21, k && (c = Sf(c), h = 0, g = zh(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = Sf(c), h = 0, g = zh(g, f, !0));
        g !== h && (c[F] = g);
        sh(e, f, b, c);
        return a
    }

    function Fh(a, b, c, d) {
        const e = a.R;
        let f = e[F];
        mg(f);
        sh(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function Gh(a, b, c, d) {
        const e = a.R;
        let f = e[F];
        mg(f);
        (c = Hh(e, f, c)) && c !== b && null != d && (f = sh(e, f, c));
        sh(e, f, b, d);
        return a
    }

    function Ih(a, b, c) {
        a = a.R;
        return Hh(a, a[F], b) === c ? c : -1
    }

    function Hh(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != qh(a, b, f) && (0 !== d && (b = sh(a, b, d)), d = f)
        }
        return d
    }

    function uh(a, b, c, d) {
        a = a.R;
        let e = a[F];
        const f = qh(a, e, c, d);
        b = Tg(f, b, !1, e);
        b !== f && null != b && sh(a, e, c, b, d);
        return b
    }

    function Jh(a) {
        var b = Kh;
        return (a = uh(a, b, 1, !1)) ? a : Ug(b)
    }

    function J(a, b, c) {
        b = uh(a, b, c, !1);
        if (null == b) return b;
        a = a.R;
        let d = a[F];
        if (!(d & 2)) {
            const e = ch(b);
            e !== b && (b = e, sh(a, d, c, b, !1))
        }
        return b
    }

    function Lh(a, b, c, d, e, f, g, h) {
        const k = 1 === e;
        e = 2 === e;
        g = !!g;
        var l = !!(2 & b) && e;
        let m = vh(a, b, d, 3, f);
        b = a[F];
        var n = m[F] | 0,
            p = !!(2 & n);
        const q = !!(4 & n),
            v = !!(32 & n);
        let z = p && q || !!(2048 & n);
        if (!q) {
            var A = m,
                E = b,
                I;
            (I = !!(2 & n)) && (E = Wf(E, 2, !0));
            let x = !I,
                G = !0,
                K = 0,
                N = 0;
            for (; K < A.length; K++) {
                const oa = Tg(A[K], c, !1, E);
                if (oa instanceof c) {
                    if (!I) {
                        const ea = !!((oa.R[F] | 0) & 2);
                        x && (x = !ea);
                        G && (G = ea)
                    }
                    A[N++] = oa
                }
            }
            N < K && (A.length = N);
            n = Wf(n, 4, !0);
            n = Wf(n, 16, G);
            n = Wf(n, 8, x);
            A[F] = n;
            p && !l && (Object.freeze(m), z = !0)
        }
        c = n;
        l = !!(8 & n) || k && !m.length;
        if (h &&
            !l) {
            z && (m = Sf(m), z = !1, c = 0, n = zh(n, b, g), b = sh(a, b, d, m, f));
            h = m;
            l = n;
            for (p = 0; p < h.length; p++) A = h[p], n = ch(A), A !== n && (h[p] = n);
            l = Wf(l, 8, !0);
            n = l = Wf(l, 16, !h.length)
        }
        z || (k ? n = Wf(n, !m.length || 16 & n && (!q || v) ? 2 : 2048, !0) : g || (n = Wf(n, 32, !1)), n !== c && (m[F] = n), k && (Object.freeze(m), z = !0));
        e && z && (m = Sf(m), n = zh(n, b, g), m[F] = n, sh(a, b, d, m, f));
        return m
    }

    function L(a, b, c) {
        a = a.R;
        const d = a[F],
            e = !!(2 & d);
        return Lh(a, d, b, c, e ? 1 : 2, void 0, !1, !e)
    }

    function M(a, b, c) {
        null == c && (c = void 0);
        return rh(a, b, c)
    }

    function Mh(a, b, c, d) {
        null == d && (d = void 0);
        return Gh(a, b, c, d)
    }

    function Nh(a, b, c) {
        const d = a.R;
        let e = d[F];
        mg(e);
        if (null == c) return sh(d, e, b), a;
        let f = c[F] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c);
        let l = !0,
            m = !0;
        for (let p = 0; p < c.length; p++) {
            var n = c[p];
            h || (n = !!((n.R[F] | 0) & 2), l && (l = !n), m && (m = n))
        }
        h || (f = Wf(f, 5, !0), f = Wf(f, 8, l), f = Wf(f, 16, m));
        k && f !== g && (c = Sf(c), g = 0, f = zh(f, e, !0));
        f !== g && (c[F] = f);
        sh(d, e, b, c);
        return a
    }

    function zh(a, b, c) {
        a = Wf(a, 2, !!(2 & b));
        a = Wf(a, 32, !!(32 & b) && c);
        return a = Wf(a, 2048, !1)
    }

    function Oh(a, b, c, d, e, f, g) {
        a = a.R;
        const h = a[F];
        mg(h);
        b = Lh(a, h, c, b, 2, f);
        c = null != d ? d : new c;
        if (g && ("number" !== typeof e || 0 > e || e > b.length)) throw Error();
        void 0 != e ? b.splice(e, g, c) : b.push(c);
        b[F] = (c.R[F] | 0) & 2 ? b[F] & -9 : b[F] & -17
    }

    function Ph(a, b) {
        return Eg(H(a, b))
    }

    function Qh(a, b) {
        return Ng(H(a, b))
    }

    function O(a, b) {
        return Sg(H(a, b))
    }

    function Rh(a, b) {
        return H(a, b)
    }

    function Sh(a) {
        return a ? ? 0
    }

    function P(a, b, c = !1) {
        return xh(a, b) ? ? c
    }

    function Th(a, b) {
        return Sh(Ph(a, b))
    }

    function Uh(a, b) {
        return Sh(Qh(a, b))
    }

    function Q(a, b) {
        return O(a, b) ? ? ""
    }

    function Vh(a, b) {
        return H(a, b) ? ? 0
    }

    function Wh(a, b, c, d) {
        return J(a, b, Ih(a, d, c))
    }

    function Zh(a, b) {
        a = Ph(a, b);
        return null == a ? void 0 : a
    }

    function $h(a) {
        a = wh(a, 4);
        return null == a ? void 0 : a
    }

    function ai(a, b, c) {
        return rh(a, b, null == c ? c : yg(c))
    }

    function bi(a, b, c) {
        return Fh(a, b, null == c ? c : yg(c), !1)
    }

    function ci(a, b, c) {
        return rh(a, b, null == c ? c : Dg(c))
    }

    function di(a, b, c) {
        return Fh(a, b, null == c ? c : Dg(c), 0)
    }

    function ei(a, b, c) {
        return rh(a, b, null == c ? c : Hg(c))
    }

    function R(a, b, c) {
        return Fh(a, b, null == c ? c : Hg(c), "0")
    }

    function fi(a, b, c) {
        return rh(a, b, Rg(c))
    }

    function gi(a, b, c) {
        return Fh(a, b, Rg(c), "")
    }

    function S(a, b, c) {
        return Fh(a, b, Bg(c), 0)
    };

    function hi(a) {
        gg = !0;
        try {
            return JSON.stringify(a.toJSON(), fh)
        } finally {
            gg = !1
        }
    }
    var T = class {
        constructor(a) {
            a: {
                null == a && (a = dh);dh = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[F] | 0;
                    if (b & 64) break a;
                    b |= 64;
                    var c = a.length;
                    if (c && (--c, fg(a[c]))) {
                        b |= 256;
                        c -= +!!(b & 512) - 1;
                        if (1024 <= c) throw Error();
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[F] = b
            }
            this.R = a
        }
        toJSON() {
            if (gg) var a = ii(this, this.R, !1);
            else a = jh(this.R, lh, void 0, void 0, !1, !1), a = ii(this, a, !0);
            return a
        }
        i() {
            const a = this.R,
                b = a[F];
            return b & 2 ? this : eh(this.constructor, nh(a, b, !0))
        }
    };
    T.prototype.Me = cg;

    function ii(a, b, c) {
        const d = a.constructor.L;
        var e = (c ? a.R : b)[F],
            f = bg(e),
            g = !1;
        if (d && hg) {
            if (!c) {
                b = Sf(b);
                var h;
                if (b.length && fg(h = b[b.length - 1]))
                    for (g = 0; g < d.length; g++)
                        if (d[g] >= f) {
                            Object.assign(b[b.length - 1] = {}, h);
                            break
                        }
                g = !0
            }
            f = b;
            c = !c;
            h = a.R[F];
            a = bg(h);
            h = +!!(h & 512) - 1;
            var k;
            for (let E = 0; E < d.length; E++) {
                var l = d[E];
                if (l < a) {
                    l += h;
                    var m = f[l];
                    null == m ? f[l] = c ? kg : Xf() : c && m !== kg && Vf(m)
                } else {
                    if (!k) {
                        var n = void 0;
                        f.length && fg(n = f[f.length - 1]) ? k = n : f.push(k = {})
                    }
                    m = k[l];
                    null == k[l] ? k[l] = c ? kg : Xf() : c && m !== kg && Vf(m)
                }
            }
        }
        k = b.length;
        if (!k) return b;
        let p, q;
        if (fg(n = b[k - 1])) {
            a: {
                var v = n;f = {};c = !1;
                for (var z in v)
                    if (Object.prototype.hasOwnProperty.call(v, z)) {
                        a = v[z];
                        if (Array.isArray(a)) {
                            h = a;
                            if (!Hf && jg(a, d, +z) || !Gf && eg(a) && 0 === a.size) a = null;
                            a != h && (c = !0)
                        }
                        null != a ? f[z] = a : c = !0
                    }
                if (c) {
                    for (let E in f) {
                        v = f;
                        break a
                    }
                    v = null
                }
            }
            v != n && (p = !0);k--
        }
        for (e = +!!(e & 512) - 1; 0 < k; k--) {
            z = k - 1;
            n = b[z];
            if (!(null == n || !Hf && jg(n, d, z - e) || !Gf && eg(n) && 0 === n.size)) break;
            q = !0
        }
        if (!p && !q) return b;
        var A;
        g ? A = b : A = Array.prototype.slice.call(b, 0, k);
        b = A;
        g && (b.length = k);
        v && b.push(v);
        return b
    }

    function ji(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[F] |= 128;
        return eh(a, Zf(b))
    };

    function ki(a, b) {
        const c = li;
        li = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    const mi = a => null !== a && void 0 !== a;
    let li = void 0;

    function ni(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = eh(a, Zf(b))
            }
            return b
        }
    };
    var oi = new nb(ob, "https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function pi(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Be(f, a);
            "complete" !== b.document.readyState ? Hb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function qi(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.cc}`;
        let c = void 0;
        try {
            c = await ri(b)
        } catch (g) {}
        if (c) {
            b = a.zc || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.j ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Dh: c.bg_hash_basename,
                Ch: c.bg_binary,
                Hi: a.g + "_" + a.i,
                zc: b,
                cc: a.cc,
                xd: d,
                Pd: e,
                vd: f
            }
        }
    }
    let ri = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function si(a) {
        var b = await qi(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Dh,
                _bgp_: b.Ch,
                _li_: b.Hi,
                _jk_: b.zc,
                _st_: b.cc,
                _rc_: b.xd,
                _dl_: b.Pd,
                _g2_: b.vd
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Pc(oi, {
                basename: "sodar2"
            });
            pi(a)
        }
    };

    function ti(a, b) {
        return gi(a, 1, b)
    }
    var ui = class extends T {
        g() {
            return Q(this, 1)
        }
    };

    function vi(a, b) {
        return M(a, 5, b)
    }

    function wi(a, b) {
        return gi(a, 3, b)
    }

    function xi(a, b) {
        return bi(a, 6, b)
    }
    var yi = class extends T {
        constructor() {
            super()
        }
    };

    function zi(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Ai = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.zc = a.zc;
                this.win = a.X();
                this.cc = a.cc;
                this.xd = a.xd;
                this.Pd = a.Pd;
                this.vd = a.vd;
                this.j = a.g
            }
        },
        Bi = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.cc = "env";
                this.xd = "n";
                this.Pd = "0";
                this.vd = "1";
                this.g = !0
            }
            X() {
                return this.win
            }
            build() {
                return new Ai(this)
            }
        };

    function Ci(a) {
        var b = new Di;
        return fi(b, 1, a)
    }

    function Ei(a, b) {
        return ei(a, 2, b)
    }

    function Fi(a, b) {
        return fi(a, 3, b)
    }

    function Gi(a, b) {
        return fi(a, 4, b)
    }
    var Di = class extends T {
        getValue() {
            return Q(this, 1)
        }
        getVersion() {
            return Vh(this, 5)
        }
    };
    var Hi = class extends T {};
    Hi.L = [2, 3, 4];

    function Ii(a, b, c = null, d = !1, e = !1) {
        Ji(a, b, c, d, e)
    }

    function Ji(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = He("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && $a(a.google_image_requests, f);
                Ib(f, "load", g);
                Ib(f, "error", g)
            };
            Hb(f, "load", g);
            Hb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Li = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Ke(a, (d, e) => {
                if (d || 0 === d) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Ki(c)
        },
        Ki = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ii(b, a, void 0, !1, !1)
        };
    var Mi = window;
    var Ni = class extends T {
        constructor() {
            super()
        }
    };
    Ni.L = [15];
    var Oi = class extends T {
        constructor() {
            super()
        }
        getCorrelator() {
            return Uh(this, 1)
        }
        setCorrelator(a) {
            return R(this, 1, a)
        }
    };
    var Pi = class extends T {
        constructor() {
            super()
        }
    };

    function Qi(a) {
        this.g = a || {
            cookie: ""
        }
    }
    r = Qi.prototype;
    r.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Pn, g = c.Rg || !1, f = c.domain || void 0, e = c.path || void 0, d = c.zd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    r.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Pb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    r.isEmpty = function() {
        return !this.g.cookie
    };
    r.wc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    r.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Pb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            zd: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Ri(a, b = window) {
        if (P(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function Si(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }

    function Ti(a) {
        return "null" !== a.origin
    }

    function Ui(a, b, c) {
        b = P(b, 5) && Ti(c) ? c.document.cookie : null;
        return null === b ? null : (new Qi({
            cookie: b
        })).get(a) || ""
    }

    function Vi(a, b, c, d, e) {
        P(b, 5) && Ti(c) && (b = new Qi(c.document), b.get(a), b.set(a, "", {
            zd: 0,
            path: d,
            domain: e
        }))
    };

    function ye(a) {
        return new we(a[0].toLowerCase())
    };

    function Wi(a) {
        var b = {};
        if (a instanceof sd) return a;
        a = Xi(String(a));
        b.Nn && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Mn && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.On && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return ud(a)
    }

    function Xi(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Yi(a) {
        const b = Wi("");
        return ud(a.map(c => rd(Wi(c))).join(rd(b).toString()))
    }
    const Zi = /^[a-z][a-z\d-]*$/i,
        $i = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var aj = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const bj = ["action", "formaction", "href"];

    function cj(a, b) {
        if (!Zi.test("body")) throw Error("");
        if (-1 !== $i.indexOf("BODY")) throw Error("");
        let c = "<body";
        a && (c += dj(a));
        Array.isArray(b) || (b = void 0 === b ? [] : [b]); - 1 !== aj.indexOf("BODY") ? c += ">" : (a = Yi(b.map(d => d instanceof sd ? d : Wi(String(d)))), c += ">" + a.toString() + "</body>");
        return ud(c)
    }

    function dj(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Zi.test(d)) throw Error("");
            if (void 0 !== e && null !== e) {
                if (/^on/i.test(d)) throw Error(""); - 1 !== bj.indexOf(d.toLowerCase()) && (e = e instanceof Tc ? e.toString() : te(String(e)) || "about:invalid#zClosurez");
                d = `${d}="${Wi(String(e))}"`;
                b += " " + d
            }
        }
        return b
    };

    function ej(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function fj(a, ...b) {
        if (0 === b.length) return Nc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Nc(c)
    }

    function gj(a) {
        var b = fj `https://cse.google.com/cse.js`;
        b = ej(Mc(b).toString());
        let c = b.params,
            d = c.length ? "&" : "?";
        a.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Nc(b.path + c + b.hash)
    };

    function hj(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new fd(c, dd)
    };
    let ij = null,
        jj = null;

    function kj() {
        if (null != ij) return ij;
        ij = !1;
        try {
            const a = Fe(t);
            a && -1 !== a.location.hash.indexOf("google_logging") && (ij = !0);
            Si(t) ? .getItem("google_logging") && (ij = !0)
        } catch (a) {}
        return ij
    }

    function lj() {
        if (null != jj) return jj;
        jj = !1;
        try {
            const a = Fe(t),
                b = Si(t);
            if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || b && b.getItem("auto_ads_logging")) jj = !0
        } catch (a) {}
        return jj
    }
    var mj = (a, b = []) => {
        let c = !1;
        t.google_logging_queue || (c = !0, t.google_logging_queue = []);
        t.google_logging_queue.push([a, b]);
        c && kj() && Ge(t.document, fj `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function nj(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = nj.prototype;
    r.getWidth = function() {
        return this.right - this.left
    };
    r.getHeight = function() {
        return this.bottom - this.top
    };

    function oj(a) {
        return new nj(a.top, a.right, a.bottom, a.left)
    }
    r.contains = function(a) {
        return this && a ? a instanceof nj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function pj(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function qj(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function rj(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new qj(c, e, d - c, a - e)
        }
        return null
    }

    function sj(a, b) {
        var c = rj(a, b);
        if (!c || !c.height || !c.width) return [new qj(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new qj(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new qj(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new qj(a.left, d, b.left - a.left, e));
        h < f && c.push(new qj(h, d, f - h, e));
        return c
    }
    qj.prototype.contains = function(a) {
        return a instanceof Ld ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    qj.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    qj.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    qj.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const tj = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function uj(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function vj(a = uj()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function wj(a = uj()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(tj[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function xj() {
        var a = uj();
        return a && a.initialIntersection
    }

    function yj() {
        const a = xj();
        return a && Aa(a.rootBounds) ? new Md(a.rootBounds.width, a.rootBounds.height) : null
    }

    function zj(a = uj()) {
        return a ? Ce(a.master) ? a.master : null : null
    }

    function Aj(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            $a(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Ge(a.document, g ? fj `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : fj `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Hb(a, "message", f), d = () => {
            Ib(a, "message", f)
        });
        return e
    };
    var Bj = () => a => {
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a) me(c, a[c], b);
        var c = le("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    };

    function Cj(a, b, c) {
        if ("string" === typeof b)(b = Dj(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Dj(c, d);
                f && (c.style[f] = e)
            }
    }
    var Ej = {};

    function Dj(a, b) {
        var c = Ej[b];
        if (!c) {
            var d = Rd(b);
            c = d;
            void 0 === a.style[d] && (d = (oc ? "Webkit" : nc ? "Moz" : kc ? "ms" : null) + Sd(d), void 0 !== a.style[d] && (c = d));
            Ej[b] = c
        }
        return c
    }

    function Fj(a, b) {
        var c = Vd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Gj(a, b) {
        return Fj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Hj(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Ij(a) {
        var b = Vd(a),
            c = new Ld(0, 0);
        var d = b ? Vd(b) : document;
        d = !kc || 9 <= Number(xc) || "CSS1Compat" == Td(d).g.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Hj(a);
        b = Xd(Td(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Jj(a) {
        var b = Kj;
        if ("none" != Gj(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Kj(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = oc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Hj(a), new Md(a.right - a.left, a.bottom - a.top)) : new Md(b, c)
    }

    function Lj(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Mj(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Lj(a, b) : 0
    }
    var Nj = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Oj(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Nj ? Nj[b] : Lj(a, b)
    };
    var Pj = a => "number" === typeof a && 0 < a,
        Rj = (a, b) => {
            a = Qj(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Qj = a => Object.entries(Sj(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Sj = a => {
            const b = {};
            Ke(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Tj = () => {
            try {
                return Mi.history.length
            } catch (a) {
                return 0
            }
        },
        Uj = a => {
            a = zj(uj(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Vj = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        Wj = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        Xj = () => {
            if (!Mi) return !1;
            try {
                return !(!Mi.navigator.standalone && !Mi.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Yj = a => (a = a.google_ad_format) ?
        0 < a.indexOf("_0ads") : !1,
        Zj = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class ak {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const bk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ck = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        dk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.og = !!c;
                this.depth = null
            }
        };
    let ek = null;

    function fk() {
        if (null === ek) {
            ek = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    ek = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return ek
    };

    function gk() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function hk() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    var ik = class {
        constructor(a, b) {
            var c = hk() || gk();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const jk = t.performance,
        kk = !!(jk && jk.mark && jk.measure && jk.clearMarks),
        lk = Ab(() => {
            var a;
            if (a = kk) a = fk(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function mk(a) {
        a && jk && lk() && (jk.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), jk.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function nk(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (lk() && Ta(a.i, mk), a.i.length = 0)
    }

    function ok(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw mk(c), e;
        }
        a.end(c);
        return d
    }
    class pk {
        constructor(a) {
            this.i = [];
            this.j = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = lk() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ik(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            jk && lk() && jk.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (hk() || gk()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                jk && lk() && jk.mark(b);
                !this.g || 2048 < this.i.length ||
                    this.i.push(a)
            }
        }
    };

    function qk(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function rk(a, b, c, d, e) {
        const f = [];
        Ke(a, function(g, h) {
            (g = sk(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function sk(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(sk(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(rk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function tk(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function uk(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = tk(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = rk(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class vk {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function wk(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = xk(a.stack, b));
        return b
    }

    function xk(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var zk = class {
        constructor(a, b, c = null) {
            this.qa = a;
            this.m = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.v = this.wa
        }
        df(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        Ic(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.m;
                try {
                    mk(e), b = this.v(a, new ak(f, {
                        message: wk(f)
                    }), void 0, c)
                } catch (g) {
                    this.wa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Ka(a, b, c, d) {
            return (...e) => this.Ic(a, () => b.apply(c, e), d)
        }
        wa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const x = new vk;
                x.g.push(1);
                x.i[1] = qk("context", a);
                b.error && b.meta && b.id || (b = new ak(b, {
                    message: wk(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    x.g.push(2);
                    x.i[2] = qk("msg", g)
                }
                const G = b.meta || {};
                if (this.g) try {
                    this.g(G)
                } catch (ea) {}
                if (d) try {
                    d(G)
                } catch (ea) {}
                b = [G];
                x.g.push(3);
                x.i[3] = b;
                d = t;
                b = [];
                g = null;
                do {
                    var h = d;
                    if (Ce(h)) {
                        var k = h.location.href;
                        g = h.document && h.document.referrer || null
                    } else k = g, g = null;
                    b.push(new dk(k || "", h));
                    try {
                        d = h.parent
                    } catch (ea) {
                        d = null
                    }
                } while (d && h != d);
                for (let ea = 0, ha = b.length - 1; ea <= ha; ++ea) b[ea].depth = ha - ea;
                h = t;
                if (h.location &&
                    h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (k = 1; k < b.length; ++k) {
                        var l = b[k];
                        l.url || (l.url = h.location.ancestorOrigins[k - 1] || "", l.og = !0)
                    }
                var m = b;
                let K = new dk(t.location.href, t, !1);
                h = null;
                const N = m.length - 1;
                for (l = N; 0 <= l; --l) {
                    var n = m[l];
                    !h && bk.test(n.url) && (h = n);
                    if (n.url && !n.og) {
                        K = n;
                        break
                    }
                }
                n = null;
                const oa = m.length && m[N].url;
                0 != K.depth && oa && (n = m[N]);
                f = new ck(K, n);
                if (f.i) {
                    var p = f.i.url || "";
                    x.g.push(4);
                    x.i[4] = qk("top", p)
                }
                var q = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var v = f.g.url.match(ke),
                        z = v[1],
                        A = v[3],
                        E = v[4];
                    m = "";
                    z && (m += z + ":");
                    A && (m += "//", m += A, E && (m += ":" + E));
                    var I = m
                } else I = "";
                q = [q, {
                    url: I
                }];
                x.g.push(5);
                x.i[5] = q;
                yk(this.qa, e, x, this.j, c)
            } catch (x) {
                try {
                    yk(this.qa, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: wk(x),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (G) {}
            }
            return this.m
        }
        La(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.wa(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var Ak = a => "string" === typeof a,
        Bk = a => void 0 === a;

    function Ck() {
        var a = Dk;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var Ek = class extends T {
        constructor() {
            super()
        }
    };

    function Fk(a, b) {
        const c = d => [{
            [d.Yg]: d.wg
        }];
        return JSON.stringify([a.filter(d => d.He).map(c), b.toJSON(), a.filter(d => !d.He).map(c)])
    }
    var Gk = class {
        constructor(a, b) {
            var c = new Ek;
            a = S(c, 1, a);
            this.l = gi(a, 2, b).i()
        }
    };
    var Hk = class extends T {
        getValue() {
            return Vh(this, 1)
        }
    };

    function Ik(a) {
        var b = new Jk;
        return rh(b, 1, Bg(a))
    }
    var Jk = class extends T {
        getValue() {
            return Vh(this, 1)
        }
    };
    var Kk = class extends T {
        constructor() {
            super()
        }
        getValue() {
            return Vh(this, 1)
        }
    };

    function Lk(a, b) {
        return R(a, 1, b)
    }

    function Mk(a, b) {
        return R(a, 2, b)
    }

    function Nk(a, b) {
        return R(a, 3, b)
    }

    function Ok(a, b) {
        return R(a, 4, b)
    }

    function Pk(a, b) {
        return R(a, 5, b)
    }

    function Qk(a, b) {
        return Fh(a, 8, xg(b), 0)
    }

    function Rk(a, b) {
        return Fh(a, 9, xg(b), 0)
    }
    var Sk = class extends T {
        constructor() {
            super()
        }
    };

    function Tk(a, b) {
        return R(a, 1, b)
    }

    function Uk(a, b) {
        return R(a, 2, b)
    }
    var Vk = class extends T {};

    function Wk(a, b) {
        Oh(a, 1, Vk, b)
    }
    var Dh = class extends T {
        Tg(a) {
            Oh(this, 1, Vk, void 0, a, !1, 1);
            return this
        }
    };
    Dh.L = [1];
    var Xk = class extends T {
        constructor() {
            super()
        }
    };

    function Yk(a, b) {
        return Eh(a, 1, b, Qg)
    }

    function Zk(a, b) {
        return Eh(a, 12, b, Og)
    }

    function $k() {
        var a = new al,
            b = a.R,
            c = "irr",
            d = b[F];
        mg(d);
        b = vh(b, d, 2, 2);
        d = b[F] | 0;
        c = Qg(c, !!(4 & d) && !!(4096 & d));
        b.push(c);
        return a
    }

    function bl(a, b) {
        return bi(a, 3, b)
    }

    function cl(a, b) {
        return bi(a, 4, b)
    }

    function dl(a, b) {
        return bi(a, 5, b)
    }

    function el(a, b) {
        return bi(a, 7, b)
    }

    function fl(a, b) {
        return bi(a, 8, b)
    }

    function gl(a, b) {
        return R(a, 9, b)
    }

    function hl(a, b) {
        return Nh(a, 10, b)
    }

    function il(a, b) {
        return Eh(a, 11, b, Hg)
    }
    var al = class extends T {
        constructor() {
            super()
        }
    };
    al.L = [1, 12, 2, 10, 11];

    function jl(a) {
        var b = kl();
        M(a, 1, b)
    }

    function ll(a, b) {
        return R(a, 2, b)
    }

    function ml(a, b) {
        return Nh(a, 3, b)
    }

    function nl(a, b) {
        return Nh(a, 4, b)
    }

    function ol(a, b) {
        Oh(a, 4, Jk, b);
        return a
    }

    function pl(a, b) {
        return Nh(a, 5, b)
    }

    function ql(a, b) {
        return Eh(a, 6, b, Qg)
    }

    function rl(a, b) {
        return R(a, 7, b)
    }

    function sl(a, b) {
        M(a, 9, b)
    }

    function tl(a, b) {
        return bi(a, 10, b)
    }

    function ul(a, b) {
        return bi(a, 11, b)
    }

    function vl(a, b) {
        return bi(a, 12, b)
    }

    function wl(a) {
        var b = a.R;
        const c = b[F];
        a = c & 2;
        b = Ch(b, c, qh(b, c, 14));
        null == b ? a = b : (!a && Dh && (b.Ih = !0), a = b);
        return a
    }
    var xl = class extends T {
        constructor() {
            super()
        }
        F(a) {
            Oh(this, 3, Hk, void 0, a, !1, 1);
            return this
        }
        D(a) {
            return R(this, 8, a)
        }
    };
    xl.L = [3, 4, 5, 15, 6];
    var yl = class extends T {
        constructor() {
            super()
        }
    };
    yl.L = [2];
    var zl = class extends T {
        constructor() {
            super()
        }
    };
    var Al = class extends T {
            constructor() {
                super()
            }
        },
        Bl = [1];

    function Cl(a) {
        var b = new Dl;
        return S(b, 1, a)
    }
    var Dl = class extends T {
        constructor() {
            super()
        }
    };
    var El = class extends T {
        constructor() {
            super()
        }
    };
    var Fl = class extends T {
        constructor() {
            super()
        }
    };
    var Gl = class extends T {
        constructor() {
            super()
        }
    };
    var Hl = class extends T {
        constructor() {
            super()
        }
    };
    var Il = class extends T {
        constructor() {
            super()
        }
        getContentUrl() {
            return Q(this, 1)
        }
    };
    var Jl = class extends T {
        constructor() {
            super()
        }
    };
    Jl.L = [1];
    var Kl = class extends T {
        constructor() {
            super()
        }
    };

    function Ll() {
        var a = new Ml,
            b = new Kl;
        return Mh(a, 1, Nl, b)
    }
    var Ml = class extends T {
            constructor() {
                super()
            }
        },
        Nl = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var Ol = class extends T {
        constructor() {
            super()
        }
    };
    Ol.L = [1];
    var Pl = class extends T {
        constructor() {
            super()
        }
    };
    Pl.L = [2];
    var Ql = class extends T {
        constructor() {
            super()
        }
    };
    var Rl = class extends T {
        constructor() {
            super()
        }
    };

    function Sl(a) {
        var b = new Tl;
        return S(b, 1, a)
    }
    var Tl = class extends T {
        constructor() {
            super()
        }
    };
    Tl.L = [9];
    var Ul = class extends T {
        constructor() {
            super()
        }
    };
    var cm = class extends T {
        constructor() {
            super()
        }
    };
    cm.L = [2];
    var dm = class extends T {
        constructor() {
            super()
        }
    };
    var em = class extends T {
            constructor() {
                super()
            }
        },
        fm = [4, 5];
    var gm = class extends T {
        constructor() {
            super()
        }
    };

    function hm(a) {
        var b = new im;
        return di(b, 2, a)
    }
    var im = class extends T {
        constructor() {
            super()
        }
    };
    im.L = [3];
    var jm = class extends T {
        constructor() {
            super()
        }
    };
    var km = class extends T {
        constructor() {
            super()
        }
    };
    var lm = class extends T {
        constructor() {
            super()
        }
    };
    var mm = class extends T {
        constructor() {
            super()
        }
    };
    var nm = class extends T {
            constructor() {
                super()
            }
        },
        om = [2, 3];
    var pm = class extends T {
            constructor() {
                super()
            }
        },
        qm = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13];
    var rm = class extends T {
            constructor() {
                super()
            }
            ac(a) {
                return gi(this, 2, a)
            }
        },
        sm = [4, 5, 6, 8, 9, 10, 11];
    var tm = class extends T {
        constructor() {
            super()
        }
    };
    var um = class extends T {
        constructor() {
            super()
        }
    };
    um.L = [4, 5];
    var vm = class extends T {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Uh(this, 1)
        }
    };
    vm.L = [2];
    var wm = class extends T {
            constructor() {
                super()
            }
        },
        xm = [4, 6];
    class ym extends Gk {}

    function zm(a, ...b) {
        Am(a, ...b.map(c => ({
            He: !0,
            Yg: 3,
            wg: c.toJSON()
        })))
    }

    function Bm(a, ...b) {
        Am(a, ...b.map(c => ({
            He: !0,
            Yg: 7,
            wg: c.toJSON()
        })))
    }
    var Cm = class extends ym {};
    var Dm = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Am(a, ...b) {
        a.A && 65536 <= Fk(a.g.concat(b), a.l).length && Em(a);
        a.j && !a.m && (a.m = !0, Fm(a.j, () => {
            Em(a)
        }));
        a.g.push(...b);
        a.g.length >= a.v && Em(a);
        a.g.length && null === a.i && (a.i = setTimeout(() => {
            Em(a)
        }, a.C))
    }

    function Em(a) {
        null !== a.i && (clearTimeout(a.i), a.i = null);
        if (a.g.length) {
            var b = Fk(a.g, a.l);
            a.D("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Gm = class extends Cm {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.D = Dm;
                this.C = b;
                this.v = c;
                this.A = d;
                this.j = e;
                this.g = [];
                this.i = null;
                this.m = !1
            }
        },
        Hm = class extends Gm {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };

    function Im(a, b, c) {
        return b[a] || c
    };

    function Jm(a, b) {
        a.g = (c, d) => Im(2, b, () => [])(c, 1, d);
        a.i = () => Im(3, b, () => [])(1)
    }
    class Km {
        g() {
            return []
        }
        i() {
            return []
        }
    }

    function Lm(a, b) {
        return w(Km).g(a, b)
    }

    function Mm() {
        return w(Km).i()
    };

    function yk(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof vk ? f = c : (f = new vk, Ke(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = qk(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = uk(f, "/pagead/gen_204?id=" + b + "&");
            g && Ii(t, g)
        } catch (f) {}
    }

    function Nm(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class Om {
        constructor() {
            this.g = Math.random()
        }
    };
    let Pm, Qm;
    const Rm = new pk(window);
    (a => {
        Pm = a ? ? new Om;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Nm(Pm, window.google_srt);
        Qm = new zk(Pm, !0, Rm);
        Qm.df(() => {});
        Qm.l(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || nk(Rm) : Rm.g && Hb(window, "load", () => {
            window.google_measure_js_timing || nk(Rm)
        })
    })();
    let Sm = (new Date).getTime();
    var Tm = {
        Ql: 0,
        Pl: 1,
        Ml: 2,
        Hl: 3,
        Nl: 4,
        Il: 5,
        Ol: 6,
        Kl: 7,
        Ll: 8,
        Gl: 9,
        Jl: 10,
        Rl: 11
    };
    var Um = {
        Tl: 0,
        Ul: 1,
        Sl: 2
    };

    function Vm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Wm(a) {
        a = Wa(a, b => new nj(b.top, b.right, b.bottom, b.left));
        a = Xm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Xm(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Xa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, oj(a[0]))
    };
    var Ac = {
        Jm: 0,
        vl: 1,
        yl: 2,
        wl: 3,
        xl: 4,
        El: 8,
        Tm: 9,
        gm: 10,
        hm: 11,
        Qm: 16,
        bl: 17,
        al: 24,
        dm: 25,
        wk: 26,
        vk: 27,
        kh: 30,
        Xl: 32,
        am: 40,
        Zm: 41,
        Vm: 42
    };
    var Ym = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Zm = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var $m = 728 * 1.38;

    function an(a) {
        return a !== a.top ? 512 : 0
    }

    function bn(a, b = 420, c = !1) {
        return (a = cn(a, c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    }

    function dn(a) {
        var b = cn(a);
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }

    function en(a) {
        return Math.max(0, fn(a, !0) - gn(a))
    }

    function hn(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function gn(a) {
        return hn(a).clientHeight
    }

    function cn(a, b = !1) {
        var c = hn(a).clientWidth;
        b && (a = hc() && ie() ? mf(a) : 1, c *= a);
        return c
    }

    function fn(a, b) {
        const c = hn(a);
        return b ? (a = gn(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function jn(a, b) {
        return kn(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1
    }

    function ln(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function mn(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function nn(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function on(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }

    function pn(a, b, c, d) {
        yk(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function kn(a) {
        return 26 === a || 27 === a || 40 === a || 41 === a
    };

    function qn(a, b) {
        rn(a).forEach(b, void 0)
    }

    function rn(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function sn(a, b) {
        return void 0 !== a.g[tn(b)]
    }

    function un(a) {
        const b = [];
        for (const c in a.g) void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function vn(a) {
        const b = [];
        for (const c in a.g) void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const wn = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = tn(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = tn(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        wc() {
            return un(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function tn(a) {
        return a instanceof Object ? String(Ba(a)) : a + ""
    };
    const xn = class {
        constructor(a) {
            this.g = new wn;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return sn(this.g, a)
        }
    };
    const yn = new xn("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function zn(a, {
        Za: b,
        Wa: c,
        Bb: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? An(a, {
            Za: b,
            Wa: c,
            Bb: !0
        }) : null
    }

    function An(a, {
        Za: b,
        Wa: c,
        Bb: d = !1
    }) {
        const e = Bn({
                Za: b,
                Wa: c,
                Bb: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = zn(a, {
            Za: b,
            Wa: c,
            Bb: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var Cn = class {
        constructor() {
            this.g = new Map
        }
    };

    function Bn({
        Za: a,
        Wa: b,
        Bb: c
    }) {
        a = Ba(a);
        b = Ba(b);
        return `${a}:${b}:${c}`
    };

    function Dn(a) {
        Jb(a.document.body.offsetHeight)
    };

    function En(a) {
        a && "function" == typeof a.ha && a.ha()
    };

    function U() {
        this.v = this.v;
        this.D = this.D
    }
    U.prototype.v = !1;
    U.prototype.ha = function() {
        this.v || (this.v = !0, this.i())
    };

    function Fn(a, b) {
        Gn(a, Ha(En, b))
    }

    function Gn(a, b) {
        a.v ? b() : (a.D || (a.D = []), a.D.push(b))
    }
    U.prototype.i = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function Hn(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function In(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Jn = class extends U {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            Hn(this);
            super.i()
        }
    };

    function Kn(a) {
        const b = new W(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Ln(a, b) {
        const c = new W({
            first: a.J,
            second: b.J
        });
        a.listen(() => c.g({
            first: a.J,
            second: b.J
        }));
        b.listen(() => c.g({
            first: a.J,
            second: b.J
        }));
        return c
    }

    function Mn(...a) {
        const b = [...a],
            c = () => b.every(f => f.J),
            d = new W(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Nn(d)
    }

    function On(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.J),
            d = new W(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Nn(d)
    }

    function Nn(a, b = Pn) {
        var c = a.J;
        const d = new W(a.J);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Qn(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Rn(a, b, c) {
        if (a.J === b) c();
        else {
            var d = {
                Wc: null
            };
            d.Wc = Qn(a, b, () => {
                d.Wc && (d.Wc(), d.Wc = null);
                c()
            })
        }
    }

    function Sn(a, b, c) {
        Nn(a).listen(d => {
            d === b && c()
        })
    }

    function Tn(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function Un(a, b, c, d) {
        const e = new W(!1);
        var f = null;
        a = a.map(d);
        Qn(a, !0, () => {
            null === f && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Qn(a, !1, () => {
            e.g(!1);
            null !== f && (b.clearTimeout(f), f = null)
        });
        return Nn(e)
    }

    function Vn(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.J
        }
    }
    class W {
        constructor(a) {
            this.J = a;
            this.j = new Map;
            this.v = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.v++;
            this.j.set(c, a);
            b && a(this.J);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        m() {
            return this.J
        }
        g(a) {
            this.J = a;
            this.j.forEach(b => {
                b(this.J)
            })
        }
        map(a) {
            const b = new W(a(this.J));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Pn(a, b) {
        return a == b
    };

    function Wn(a) {
        return new Xn(a)
    }

    function Yn(a, b) {
        Ta(a.g, c => {
            c(b)
        })
    }
    var Zn = class {
        constructor() {
            this.g = []
        }
    };
    class Xn {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new Zn;
            this.listen(c => Yn(b, a(c)));
            return Wn(b)
        }
        delay(a, b) {
            const c = new Zn;
            this.listen(d => {
                a.setTimeout(() => {
                    Yn(c, d)
                }, b)
            });
            return Wn(c)
        }
    }

    function $n(...a) {
        const b = new Zn;
        a.forEach(c => {
            c.listen(d => {
                Yn(b, d)
            })
        });
        return Wn(b)
    };

    function ao(a) {
        return Nn(Ln(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : bo(c, b)
        }))
    }
    var eo = class {
        constructor(a) {
            this.i = a;
            this.g = new W(null);
            this.j = new W(null);
            this.l = new Zn;
            this.A = b => {
                null == this.g.J && 1 == b.touches.length && this.g.g(b.touches[0])
            };
            this.m = b => {
                const c = this.g.J;
                null != c && (b = co(c, b.changedTouches), null != b && (this.g.g(null), this.j.g(null), Yn(this.l, bo(c, b))))
            };
            this.v = b => {
                var c = this.g.J;
                null != c && (c = co(c, b.changedTouches), null != c && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function bo(a, b) {
        return {
            hh: b.pageX - a.pageX,
            ih: b.pageY - a.pageY
        }
    }

    function co(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function fo(a) {
        return Nn(Ln(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : go(c, b)
        }))
    }
    var ho = class {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.g = new W(null);
            this.i = new W(null);
            this.j = new Zn;
            this.D = c => {
                this.g.g(c)
            };
            this.v = c => {
                const d = this.g.J;
                null != d && (this.g.g(null), this.i.g(null), Yn(this.j, go(d, c)))
            };
            this.A = c => {
                null != this.g.J && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function go(a, b) {
        return {
            hh: b.screenX - a.screenX,
            ih: b.screenY - a.screenY
        }
    };
    var ko = (a, b, c) => {
        const d = new io(a, b, c);
        return () => jo(d)
    };

    function jo(a) {
        if (a.g) return !1;
        if (null == a.i) return lo(a), !0;
        const b = a.i + a.m - (new Date).getTime();
        if (1 > b) return lo(a), !0;
        mo(a, b);
        return !0
    }

    function lo(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function mo(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            lo(a)
        }, b)
    }
    class io {
        constructor(a, b, c) {
            this.j = a;
            this.m = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function no(a) {
        return oo(fo(a.g), ao(a.i))
    }

    function po(a) {
        return $n(Wn(a.g.j), Wn(a.i.l))
    }
    var qo = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function oo(a, b) {
        return Ln(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var ro = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function so(a) {
        null == a.m && (a.m = new W(a.A.getBoundingClientRect()));
        return a.m
    }
    class to extends U {
        constructor(a, b) {
            super();
            this.j = a;
            this.A = b;
            this.C = !1;
            this.m = null;
            this.l = () => {
                so(this).g(this.A.getBoundingClientRect())
            }
        }
        g() {
            this.C || (this.C = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return so(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function uo(a, b) {
        return new vo(a, b)
    }

    function wo(a) {
        a.win.requestAnimationFrame(() => {
            a.v || a.j.g(new Md(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function xo(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return Nn(a.j, Nd)
    }
    var vo = class extends U {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new W(new Md(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                wo(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function yo(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class zo {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        xc() {
            return this.i
        }
    };

    function Ao(a, b) {
        a = a.getBoundingClientRect();
        return new Bo(a.top + mn(b), a.bottom - a.top)
    }

    function Co(a) {
        return new Bo(Math.round(a.g), Math.round(a.i))
    }
    class Bo {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var Eo = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new xn(c);
        b = b.filter(e => !d.contains(e));
        b.length && (Do(a, b), db(c, b))
    };

    function Do(a, b) {
        for (const f of b) {
            b = He("LINK", a.document);
            b.type = "text/css";
            var c = fj `//fonts.googleapis.com/css`,
                d = Bj();
            c = Kc(c, {
                family: f
            });
            if (c instanceof Jc) d = c;
            else if (c instanceof Tc) d = c;
            else {
                var e = re(c, qe) || cd;
                e === cd && d(c);
                d = e
            }
            c = b;
            c.rel = "stylesheet";
            if (Zb("stylesheet", "stylesheet")) {
                c.href = Mc(d).toString();
                a: if (d = (c.ownerDocument && c.ownerDocument.defaultView || t).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        Gd.test(d)) break a;
                    d = ""
                } else d = "";
                d && c.setAttribute("nonce", d)
            } else {
                if (d instanceof Jc) d = Mc(d).toString();
                else if (d instanceof Tc) d = Uc(d);
                else {
                    if (!(d instanceof Tc)) {
                        d = "object" == typeof d && d.Ja ? d.g() : String(d);
                        b: {
                            e = void 0;
                            try {
                                e = new URL(d)
                            } catch (g) {
                                e = "https:";
                                break b
                            }
                            e = e.protocol
                        }
                        "javascript:" === e && (d = "about:invalid#zClosurez");
                        d = new Tc(d, bd)
                    }
                    d = Uc(d)
                }
                c.href = d
            }
            a.document.head.appendChild(b)
        }
    };

    function Fo(a, b) {
        a.C ? b(a.l) : a.j.push(b)
    }

    function Go(a, b) {
        a.C = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class Ho extends U {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.C = !1;
            this.A = this.l = null;
            this.F = ko(a, 1E3, () => {
                if (null != this.A) {
                    var b = fn(this.g, !0) - this.A;
                    1E3 < b && Go(this, b)
                }
            });
            this.m = null
        }
        I(a, b) {
            null == a ? (this.A = a = fn(this.g, !0), this.g.addEventListener("scroll", this.F), null != b && b(a)) : this.m = this.g.setTimeout(() => {
                this.I(void 0, b)
            }, a)
        }
        i() {
            null != this.m && this.g.clearTimeout(this.m);
            this.g.removeEventListener("scroll", this.F);
            this.j = [];
            this.l = null;
            super.i()
        }
    };
    var Io = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Jo {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Ko(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Lo(d)
    }

    function Mo(a) {
        return a.g.slice(0)
    }

    function No(a, b = 1) {
        a = Mo(a);
        const c = new Jo(b);
        lb(a, () => c.next());
        return new Lo(a)
    }
    const Lo = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Lo(Va(this.g, a))
        }
        apply(a) {
            return new Lo(a(Mo(this)))
        }
        sort(a) {
            return new Lo(Mo(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Mo(this);
            b.push(a);
            return new Lo(b)
        }
    };
    class Oo {
        constructor(a) {
            this.g = new xn(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Po(a) {
        return new Qo({
            value: a
        }, null)
    }

    function Ro(a) {
        return new Qo(null, a)
    }

    function So(a) {
        try {
            return Po(a())
        } catch (b) {
            return Ro(b)
        }
    }

    function To(a) {
        return null != a.g ? a.getValue() : null
    }

    function Uo(a, b) {
        null != a.g && b(a.getValue());
        return a
    }

    function Vo(a, b) {
        null != a.g || b(a.i);
        return a
    }
    class Qo {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()), a instanceof Qo ? a : Po(a)) : this
        }
    };
    class Wo {
        constructor() {
            this.g = new wn
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new xn, this.g.set(a, c));
            c.add(b)
        }
    };

    function Xo(a) {
        return !a
    }

    function Yo(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Zo(a) {
        return null !== a
    };
    var $o = class extends T {
        getId() {
            return O(this, 3)
        }
    };
    $o.L = [4];
    class ap {
        constructor(a, {
            Ef: b,
            mh: c,
            zi: d,
            Og: e
        }) {
            this.m = a;
            this.j = c;
            this.l = new Lo(b || []);
            this.i = e;
            this.g = d
        }
    };
    var bp = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new wn;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        dp = a => {
            var b = cp(a);
            a = [];
            for (let c of b) b = String(c.mc), a.push(c.vb + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const cp = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                vb: "a",
                mc: ep(c)
            });
            null != a.j && b.push({
                vb: "as",
                mc: a.j
            });
            null != a.g && b.push({
                vb: "i",
                mc: String(a.g)
            });
            null != a.i && b.push({
                vb: "rp",
                mc: String(a.i)
            });
            b.sort(function(d, e) {
                return d.vb.localeCompare(e.vb)
            });
            b.unshift({
                vb: "t",
                mc: fp(a.m)
            });
            return b
        },
        fp = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        ep = a => {
            a = Mo(a).map(gp);
            a = JSON.stringify(a);
            return Me(a)
        },
        gp = a => {
            const b = {};
            null != O(a, 7) && (b.q = O(a, 7));
            null != Ph(a,
                2) && (b.o = Ph(a, 2));
            null != Ph(a, 5) && (b.p = Ph(a, 5));
            return b
        };

    function hp() {
        var a = new ip;
        return rh(a, 2, Bg(1))
    }
    var ip = class extends T {
        g() {
            return H(this, 1)
        }
        setLocation(a) {
            return rh(this, 1, Bg(a))
        }
    };

    function jp(a) {
        const b = [].slice.call(arguments).filter(zb(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Lf || []);
            d = Object.assign(d, e.yc())
        });
        return new kp(c, d)
    }

    function lp(a) {
        switch (a) {
            case 1:
                return new kp(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new kp(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new kp(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new kp(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function mp(a) {
        return null == a ? null : new kp(null, {
            google_ml_rank: a
        })
    }

    function np(a) {
        return null == a ? null : new kp(null, {
            google_placement_id: dp(a)
        })
    }

    function op({
        Sh: a,
        gi: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new kp(null, a)
    }
    class kp {
        constructor(a, b) {
            this.Lf = a;
            this.g = b
        }
        yc() {
            return this.g
        }
    };
    var pp = class extends T {};
    var qp = class extends T {};
    var rp = class extends T {};
    var sp = class extends T {};
    var tp = class extends T {
        m() {
            return O(this, 2)
        }
        l() {
            return O(this, 5)
        }
        g() {
            return L(this, sp, 3)
        }
        Kb() {
            return Ph(this, 4)
        }
        j() {
            return wh(this, 6)
        }
        v() {
            return th(this, rp, 7)
        }
    };
    tp.L = [3];
    var up = class extends T {};
    var vp = class extends T {};
    var wp = class extends T {
        constructor() {
            super()
        }
    };
    var xp = class extends T {
        g() {
            return H(this, 3)
        }
        Kb() {
            return Qh(this, 4)
        }
        j() {
            return xh(this, 6)
        }
    };
    var yp = class extends T {};
    var zp = class extends T {};
    var Ap = class extends T {
        ea() {
            return J(this, $o, 1)
        }
        g() {
            return H(this, 2)
        }
    };
    var Bp = class extends T {};
    var Cp = class extends T {};
    var Dp = class extends T {
            getName() {
                return O(this, 4)
            }
        },
        Ep = [1, 2, 3];
    var Fp = class extends T {
        g() {
            return J(this, xp, 10)
        }
    };
    Fp.L = [2, 5, 6, 11];
    var Gp = class extends T {
        g() {
            return xh(this, 2)
        }
        j() {
            return xh(this, 3)
        }
    };
    var Hp = class extends T {
        g() {
            return Qh(this, 1)
        }
    };
    var Ip = class extends T {};
    var Jp = class extends T {
        g() {
            return Vh(this, 1)
        }
        j() {
            return Q(this, 3)
        }
        l() {
            return Q(this, 4)
        }
    };
    var Kp = class extends T {
        j() {
            return Uh(this, 1)
        }
        g() {
            return Uh(this, 1)
        }
    };
    var Lp = class extends T {
        g() {
            return Q(this, 1)
        }
        j() {
            return Q(this, 2)
        }
        m() {
            return Q(this, 3)
        }
        l() {
            return Q(this, 4)
        }
    };
    var Mp = class extends T {
        j() {
            return J(this, Jp, 8)
        }
        l() {
            return J(this, Jp, 9)
        }
        v() {
            return J(this, Lp, 4)
        }
        g() {
            return J(this, Kp, 5)
        }
        m() {
            return Q(this, 10)
        }
        A() {
            return P(this, 12)
        }
        D() {
            return P(this, 14)
        }
    };
    var Np = class extends T {
        l() {
            return P(this, 1)
        }
        m() {
            return P(this, 3)
        }
        j() {
            return P(this, 4)
        }
        g() {
            return P(this, 5)
        }
    };
    var Op = class extends T {
        j() {
            return J(this, Lp, 5)
        }
        g() {
            return J(this, Kp, 6)
        }
        m() {
            return Q(this, 8)
        }
        v() {
            return P(this, 9)
        }
        A() {
            return P(this, 11)
        }
        l() {
            return J(this, Np, 12)
        }
    };

    function Pp() {
        var a = new Qp;
        a = fi(a, 1, "Toggle toolbar expansion");
        a = fi(a, 2, "Toggle privacy and legal settings display");
        return fi(a, 3, "Dismiss privacy and legal settings display")
    }
    var Qp = class extends T {};
    var Rp = class extends T {
        g() {
            return J(this, Qp, 1)
        }
    };
    var Sp = class extends T {};
    Sp.L = [2];
    var Tp = class extends T {};
    var Up = class extends T {
        g() {
            return L(this, Tp, 1)
        }
    };
    Up.L = [1];
    var Vp = class extends T {
        setProperty(a) {
            return fi(this, 1, a)
        }
        getValue() {
            return O(this, 2)
        }
    };
    var Wp = class extends T {};
    Wp.L = [3, 4];
    var Xp = class extends T {};
    var Yp = class extends T {
        ea() {
            return J(this, $o, 1)
        }
        g() {
            return H(this, 2)
        }
    };
    Yp.L = [6, 7, 9, 10, 11];
    var Zp = class extends T {};
    Zp.L = [4];
    var $p = class extends T {};
    var aq = class extends T {
        g() {
            return yh(this, 6, Sg, 2)
        }
    };
    aq.L = [6];
    var bq = class extends T {
        Be() {
            return th(this, $p, 2)
        }
    };
    var cq = class extends T {
        g() {
            return Uh(this, 1)
        }
    };
    var dq = class extends T {};
    var fq = class extends T {
            g() {
                return Wh(this, dq, 2, eq)
            }
        },
        eq = [1, 2];
    var gq = class extends T {
        g() {
            return J(this, fq, 3)
        }
    };
    var hq = class extends T {};
    var iq = class extends T {
        g() {
            return L(this, hq, 1)
        }
    };
    iq.L = [1];
    var jq = class extends T {
        g() {
            return yh(this, 1, Sg, 2)
        }
        j() {
            return J(this, gq, 3)
        }
    };
    jq.L = [1, 4];

    function kq(a) {
        return J(a, qp, 13)
    }

    function lq(a) {
        return J(a, vp, 15)
    }
    var mq = class extends T {},
        nq = ni(mq);
    mq.L = [1, 2, 5, 7];
    var oq = class extends T {},
        pq = ni(oq);

    function qq(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? pq(b) : null
        } catch (b) {
            return null
        }
    }

    function rq(a, b) {
        if (void 0 !== a.qe) {
            var c = qq(b);
            c || (c = new oq);
            void 0 !== a.qe && ai(c, 2, a.qe);
            a = Date.now() + 864E5;
            Number.isFinite(a) && ei(c, 1, Math.round(a));
            c = hi(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = qq(b)) && Qh(c, 1) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var sq = {
            Ta: "ama_success",
            Ma: .1,
            Qa: !0,
            Ua: !0
        },
        tq = {
            Ta: "ama_failure",
            Ma: .1,
            Qa: !0,
            Ua: !0
        },
        uq = {
            Ta: "ama_coverage",
            Ma: .1,
            Qa: !0,
            Ua: !0
        },
        vq = {
            Ta: "ama_opt",
            Ma: .1,
            Qa: !0,
            Ua: !1
        },
        wq = {
            Ta: "ama_auto_rs",
            Ma: 1,
            Qa: !0,
            Ua: !1
        },
        xq = {
            Ta: "ama_auto_prose",
            Ma: 1,
            Qa: !0,
            Ua: !1
        },
        yq = {
            Ta: "ama_improv",
            Ma: .1,
            Qa: !0,
            Ua: !1
        },
        zq = {
            Ta: "ama_constraints",
            Ma: 0,
            Qa: !0,
            Ua: !0
        };

    function Aq(a, b, c) {
        var d = 0 === a.i ? a.g.j() : a.g.l(),
            e = a.j,
            f = gn(a.win),
            g = a.g.g() ? .g() || 0;
        a: switch (d ? .g()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.i) {
            case 0:
                a = "DESKTOP";
                break a;
            case 2:
                a = "MOBILE";
                break a;
            default:
                a = "OTHER_VIEWPORT"
        }
        Bq(e, xq, { ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: a
        })
    }

    function Cq(a, b) {
        Aq(a, "place", {
            sts: b
        })
    }
    var Dq = class {
        constructor(a, b, c) {
            this.win = a;
            this.j = b;
            this.g = c;
            this.i = Ze()
        }
    };
    var Eq = {},
        Fq = {},
        Gq = {},
        Hq = {},
        Iq = {};

    function Jq() {
        throw Error("Do not instantiate directly");
    }
    Jq.prototype.Nf = null;
    Jq.prototype.Ha = function() {
        return this.content
    };
    Jq.prototype.toString = function() {
        return this.content
    };

    function Kq(a) {
        if (a.Of !== Eq) throw Error("Sanitized content was not of kind HTML.");
        return ud(a.toString())
    }

    function Lq() {
        Jq.call(this)
    }
    La(Lq, Jq);
    Lq.prototype.Of = Eq;

    function Mq(a, b) {
        return null != a && a.Of === b
    };

    function Nq(a) {
        if (null != a) switch (a.Nf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Oq(a) {
        return Mq(a, Eq) ? a : a instanceof sd ? Pq(rd(a).toString()) : Pq(String(String(a)).replace(Qq, Rq), Nq(a))
    }
    var Pq = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Nf = d);
            return c
        }
    }(Lq);

    function Sq(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Tq(a) {
        return Mq(a, Eq) ? String(String(a.Ha()).replace(Uq, "").replace(Vq, "&lt;")).replace(Wq, Rq) : String(a).replace(Qq, Rq)
    }

    function Xq(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Yq(a) {
        if (null == a) return " null ";
        if (Mq(a, Fq)) return a.Ha();
        if (a instanceof Ic) return (a instanceof Ic && a.constructor === Ic ? a.i : "type_error:SafeScript").toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Zq, $q) + "'"
        }
    }

    function X(a) {
        Mq(a, Iq) ? a = Sq(a.Ha()) : null == a ? a = "" : a instanceof fd ? a = Sq(ed(a)) : a instanceof pd ? a = Sq(a instanceof pd && a.constructor === pd ? a.i : "type_error:SafeStyleSheet") : (a = String(a), a = ar.test(a) ? a : "zSoyz");
        return a
    }
    const br = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Rq(a) {
        return br[a]
    }
    const cr = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function $q(a) {
        return cr[a]
    }
    const dr = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function er(a) {
        return dr[a]
    }
    const Qq = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Wq = /[\x00\x22\x27\x3c\x3e]/g,
        fr = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        gr = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Zq = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        hr = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        ar = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        ir =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Uq = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Vq = /</g;

    function jr(a) {
        a = void 0 === a ? "white" : a;
        return Pq('<svg width="' + Tq(18) + '" height="' + Tq(18) + '" viewBox="0 0 ' + Tq(18) + " " + Tq(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (Mq(a, Eq) ? String(String(a.Ha()).replace(Uq, "").replace(Vq,
            "&lt;")).replace(gr, Rq) : String(a).replace(fr, Rq)) + " /></svg>")
    };
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const kr = Math.floor;
    var lr = /^xn--/,
        mr = /[\x2E\u3002\uFF0E\uFF61]/g;
    const nr = {
        tm: "Overflow: input needs wider integers to process",
        pm: "Illegal input >= 0x80 (not a basic code point)",
        Zl: "Invalid input"
    };

    function or(a) {
        throw RangeError(nr[a]);
    }

    function pr(a, b) {
        const c = a.split("@");
        let d = "";
        1 < c.length && (d = c[0] + "@", a = c[1]);
        a = a.replace(mr, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function qr(a) {
        return pr(a, b => {
            if (lr.test(b) && 4 < b.length) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                0 > d && (d = 0);
                for (var e = 0; e < d; ++e) 128 <= b.charCodeAt(e) && or("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = 0 < d ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && or("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36;
                        (36 <= f || f > kr((2147483647 - l) / n)) && or("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > kr(2147483647 / f) && or("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = 0 == e ? kr(c / 700) : c >> 1;
                    for (c += kr(c / f); 455 < c; g += 36) c = kr(c / 35);
                    c = kr(g + 36 * c / (c + 38));
                    kr(l / f) > 2147483647 - m && or("Overflow: input needs wider integers to process");
                    m += kr(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };
    const rr = new nb(ob, "558153351");

    function sr(a, b, c) {
        var d = a.Ia.contentWindow;
        const e = !a.m && "number" === typeof a.g;
        a.v ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.A), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), d.execute(b, void 0, c))
    }

    function tr(a, b) {
        if (a.C) {
            const c = a.Ia.contentDocument ? .getElementById("prose-empty-serp-container");
            b && c && Hb(b, "input", () => {
                c.style.display = "none"
            })
        }
    }
    var ur = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m = !1, n = !1, p = !1) {
            this.Ia = a;
            this.j = b;
            this.A = c;
            this.i = d;
            this.G = e;
            this.host = f.host;
            this.origin = f.origin;
            this.l = g;
            this.D = h;
            this.g = k;
            this.F = m;
            this.v = l;
            this.C = n;
            this.m = p
        }
        I() {
            this.Ia.setAttribute("id", "prose-iframe");
            this.Ia.setAttribute("width", "100%");
            this.Ia.setAttribute("height", "100%");
            var a = hj `box-sizing:border-box;border:unset;`;
            this.Ia.style.cssText = ed(a);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var b = re(a,
                qe) || cd;
            var c = qr(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.A;
            var d = this.i,
                e = this.G;
            const f = this.host;
            c = this.D.replace("${website}", c);
            const g = this.C;
            var h = Pq,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.F ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(Zq, $q) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            Mq(b, Gq) || Mq(b, Hq) ? b = String(b).replace(hr, er) : b instanceof Tc ? b = String(Uc(b)).replace(hr, er) : b instanceof Jc ? b = String(Mc(b).toString()).replace(hr, er) : (b = String(b), b = ir.test(b) ? b.replace(hr, er) : "about:invalid#zSoyz");
            a = h(k + Tq(b) + '" alt="' + Tq(f) + ' icon"><p class="cse-header"><strong>' +
                Oq(c) + '</strong></p><div class="gcse-search" data-gname="' + Tq(a) + '" data-adclient="' + Tq(d) + '" data-adchannel="' + Tq(e) + '" data-as_sitesearch="' + Tq(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = Kq(a);
            this.v ? (a = Pc(new nb(ob, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: rr,
                cxId: this.j,
                host: this.host,
                lang: this.l,
                lrh: this.D,
                client: this.i,
                origin: this.origin
            }), this.Ia.src = Mc(a).toString()) : (d = new Map([
                    ["cx", this.j],
                    ["language", this.l]
                ]), this.m && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = gj(d), d = {}, e = `<script src="${Xi(Mc(e).toString())}"`, d.async &&
                (e += " async"), d.Rh && (e += ` custom-element="${Xi(d.Rh)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${Xi(d.id)}"`), d.nonce && (e += ` nonce="${Xi(d.nonce)}"`), d.type && (e += ` type="${Xi(d.type)}"`), d = ud(e + ">\x3c/script>"), a = cj({
                    style: hj `margin:${0};`
                }, [a, d]), this.Ia.srcdoc = rd(a))
        }
    };

    function vr(a) {
        var b = [];
        qn(a.getElementsByTagName("p"), function(c) {
            100 <= wr(c) && b.push(c)
        });
        return b
    }

    function wr(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        qn(a.childNodes, function(c) {
            b += wr(c)
        });
        return b
    }

    function xr(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function yr(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const zr = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.l)
            } catch (f) {}
            if (!b.length) return [];
            a = cb(b);
            a = yr(this, a);
            "number" === typeof this.i && (b = this.i, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.j) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = vr(a[c]),
                        e = this.j;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };

    function Ar(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function Br(a) {
        return rn(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var Cr = new u(1082, !0),
        Dr = new u(1310),
        Er = new u(1277, !0),
        Fr = new u(1308),
        Gr = new u(1275),
        Hr = new u(1311),
        Ir = new rb(1130, 100),
        Jr = new u(1270, !0),
        Kr = new rb(1032, 200),
        Lr = new sb(14),
        Mr = new rb(1224, .01),
        Nr = new u(1260),
        Or = new u(1239),
        Pr = new u(1196),
        Qr = new u(1160),
        Rr = new u(316),
        Sr = new u(1290),
        Tr = new u(334),
        Ur = new rb(1263, -1),
        Vr = new rb(54),
        Wr = new rb(1265, -1),
        Xr = new rb(1264, -1),
        Yr = new u(1291),
        Zr = new u(1267, !0),
        $r = new u(1268, !0),
        as = new u(1266),
        bs = new u(313),
        cs = new rb(66, -1),
        ds = new rb(65, -1),
        es = new u(1256),
        fs = new u(369),
        gs = new u(1241, !0),
        hs = new u(368),
        is = new u(1300, !0),
        js = new tb(1273, ["en", "de"]),
        ks = new u(1223, !0),
        ls = new tb(1261, ["44786015", "44786016"]),
        ms = new u(1309),
        ns = new u(1289),
        os = new u(1292, !0),
        ps = new u(1282),
        qs = new u(1250),
        rs = new u(1151),
        ss = new rb(1072, .75),
        ts = new u(290),
        us = new u(1222),
        vs = new u(1238),
        ws = new u(1237),
        xs = new sb(1307),
        ys = new rb(1245, 3600),
        zs = new u(1284, !0),
        As = new u(571859167),
        Bs = new rb(572636916, 25),
        Cs = new rb(579884443),
        Ds = new rb(566560958, 3E4),
        Es = new rb(506864295, 300),
        Fs = new rb(508040914, 100),
        Gs = new rb(547455356, 49),
        Hs = new u(583098152),
        Is = new u(577127756),
        Js = new u(566279275),
        Ks = new u(566279276),
        Ls = new u(583331697),
        Ms = new tb(556791602, ["1", "2"]),
        Ns = new u(561639568),
        Os = new u(566560957),
        Ps = new u(572636914),
        Qs = new u(529362570, !0),
        Rs = new u(579884441),
        Ss = new u(587671598),
        Ts = new rb(571329679),
        Us = new u(556739145),
        Vs = new rb(572636915, 150),
        Ws = new rb(579884442),
        Xs = new u(575790353),
        Ys = new u(575790354, !0),
        Zs = new rb(561668774, .1),
        $s = new u(576499818),
        at = new u(554474127),
        bt = new u(550910941),
        ct = new u(506914611),
        dt = new u(581290376),
        et = new rb(469675170, 3E4),
        ft = new rb(506871937),
        gt = new u(160889229),
        ht = new u(506852289),
        it = new u(1120),
        jt = new u(586386407),
        kt = new u(573506525, !0),
        lt = new u(573506524, !0),
        mt = new u(562896595),
        nt = new u(570863962, !0),
        ot = new sb(570879859, "control_1\\.\\d"),
        pt = new rb(570863961, 50),
        qt = new u(570879858, !0),
        rt = new u(577647450),
        st = new u(570804360),
        tt = new sb(1166),
        ut = new u(1E4),
        vt = new u(562874197),
        wt = new u(562874196),
        xt = new u(555237685, !0),
        yt = new u(45460956, !0),
        zt = new u(45414947, !0),
        At = new rb(472785970,
            500),
        Bt = new u(439828594),
        Ct = new u(483962503),
        Dt = new u(506738118),
        Et = new u(77),
        Ft = new u(78),
        Gt = new u(83),
        Ht = new u(80),
        It = new u(76),
        Jt = new u(84),
        Kt = new u(1973),
        Lt = new u(188),
        Mt = new u(485990406);

    function Nt(a, b) {
        a = (new Ud(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Ot(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Ar(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Pt(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Ar(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Rt = (a, b, c, d = 0) => {
            var e = Qt(b, c, d);
            if (e.I) {
                for (c = b = e.I; c = e.md(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Fd
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Ot(a, e.anchor, e.position)
        },
        St = (a, b, c, d = 0) => {
            y(bs) ? Rt(a, b, c, d) : Ot(a, b, c)
        };

    function Qt(a, b, c) {
        const d = f => {
                f = Tt(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = Tt(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    I: Ut(a.previousSibling, d),
                    md: f => Ut(f.previousSibling, d),
                    Fd: 0
                };
            case 2:
                return {
                    I: Ut(a.lastChild, d),
                    md: f => Ut(f.previousSibling, d),
                    Fd: 0
                };
            case 3:
                return {
                    I: Ut(a.nextSibling, e),
                    md: f => Ut(f.nextSibling, e),
                    Fd: 3
                };
            case 1:
                return {
                    I: Ut(a.firstChild, e),
                    md: f => Ut(f.nextSibling, e),
                    Fd: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Tt(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ut(a, b) {
        return a && b(a) ? a : null
    };
    var Vt = (a, b = !1) => {
        try {
            return b ? (new Md(a.innerWidth, a.innerHeight)).round() : Wd(a || window).round()
        } catch (c) {
            return new Md(-12245933, -12245933)
        }
    };

    function Wt(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Xt(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Ld(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Yt(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Zt(a) {
        -1 === a.g && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var $t = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function au(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Ge: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 === b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Ge: c
        }
    };

    function bu(a, b) {
        Ke(a, (c, d) => {
            b[d] = c
        })
    }
    var cu = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Ce(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var du = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        eu = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        fu = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const gu = (a, b, c) => {
        a = du(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var hu = (a, b) => {
            b = b.parentElement;
            return b ? (a = Ie(b, a)) ? a.direction : "" : ""
        },
        iu = (a, b, c) => {
            if (0 !== gu(a, b, c)) {
                fu(b, c, "0px");
                var d = gu(a, b, c);
                fu(b, c, -1 * d + "px");
                a = gu(a, b, c);
                0 !== a && a !== d && fu(b, c, d / (a - d) * d + "px")
            }
        };
    const ju = RegExp("(^| )adsbygoogle($| )");

    function ku(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Rd(d.property);
            a[e] = d.value
        }
    }

    function lu(a, b, c, d, e, f) {
        a = mu(a, e);
        a.sa.setAttribute("data-ad-format", d ? d : "auto");
        nu(a, b, c, f);
        return a
    }

    function ou(a, b, c = null) {
        a = mu(a, {});
        nu(a, b, null, c);
        return a
    }

    function nu(a, b, c, d) {
        var e = [];
        if (d = d && d.Lf) a.kb.className = d.join(" ");
        a = a.sa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function mu(a, b) {
        const c = Nt(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Ed && ku(d, b.Ed);
        a = (new Ud(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.lf && (d.marginTop = b.lf);
        b.ce && (d.marginBottom = b.ce);
        b.hc && ku(d, b.hc);
        c.appendChild(a);
        return {
            kb: c,
            sa: a
        }
    }

    function pu(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.yc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function qu(a) {
        const b = Br(a.document);
        Ta(b, function(c) {
            const d = ru(a, c);
            var e;
            if (e = d) {
                e = (e = du(c, a)) ? e.y : 0;
                const f = gn(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), pu(a, c))
        })
    }

    function ru(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in mb) a[mb[c]] && (b[mb[c]] = a[mb[c]]);
        return b
    };
    class su {
        constructor() {
            var a = fj `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.m = Math.random();
            this.j = this.wa;
            this.v = a
        }
        df(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        wa(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.m : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new ak(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (Ge(t.document, this.v), t.error_rep_loaded = !0);
            return !1
        }
        Ic(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror")) throw d;
            }
        }
        Ka(a, b, c, d) {
            return (...e) => this.Ic(a, () => b.apply(c, e), d)
        }
        La(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.wa(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    const tu = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var uu = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = hk();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && tu({
                        label: a.toString(),
                        value: h,
                        duration: (hk() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        vu = (a, b, c, d = !1) => uu(a, b, (e, f) => {
            (new su).wa(e, f)
        }, c, d);

    function wu(a, b, c) {
        return uu(a, b, void 0, c, !0).apply()
    }

    function xu(a, b) {
        return vu(754, a, b, !0).apply()
    }

    function yu(a) {
        if (!a) return null;
        var b = O(a, 7);
        if (O(a, 1) || a.getId() || 0 < yh(a, 4, Sg, 2).length) {
            var c = yh(a, 4, Sg, 2);
            b = Ph(a, 2);
            var d = Ph(a, 5),
                e = zu(H(a, 6)),
                f = O(a, 3),
                g = O(a, 1);
            a = "";
            g && (a += g);
            f && (a += "#" + xr(f));
            if (c)
                for (f = 0; f < c.length; f++) a += "." + xr(c[f]);
            b = (c = a) ? new zr(c, b, d, e) : null
        } else b = b ? new zr(b, Ph(a, 2), Ph(a, 5), zu(H(a, 6))) : null;
        return b
    }
    var Au = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function zu(a) {
        return null == a ? a : Au[a]
    }

    function Bu(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = O(a[c], 1),
                e = O(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Cu(a, b) {
        var c = {};
        a && (c.lf = O(a, 1), c.ce = O(a, 2), c.clearBoth = !!xh(a, 3));
        b && (c.Ed = Bu(L(b, Vp, 3)), a = L(b, Vp, 4), c.hc = Bu(a));
        return c
    }
    var Du = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Eu = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Fu = ["-webkit-text-fill-color"];

    function Gu(a) {
        if (mc) {
            {
                const c = Ie(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Hu(a)
                } else a = Iu()
            }
        } else a = Iu();
        return a
    }
    var Iu = () => {
        const a = {
            all: "initial"
        };
        Ta(Fu, b => {
            a[b] = "unset"
        });
        return a
    };

    function Hu(a) {
        Ta(Fu, b => {
            delete a[b]
        });
        return a
    };

    function Ju(a, b) {
        const c = a.document.createElement("div");
        D(c, Gu(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Ra: c,
            shadowRoot: a
        }
    };

    function Ku({
        dc: a,
        Gb: b,
        Ub: c,
        ec: d,
        Hb: e,
        Vb: f
    }) {
        const g = [];
        for (let l = 0; l < f; l++)
            for (let m = 0; m < c; m++) {
                var h = c - 1,
                    k = f - 1;
                g.push({
                    x: a + (0 === h ? 0 : m / h) * (b - a),
                    y: d + (0 === k ? 0 : l / k) * (e - d)
                })
            }
        return g
    }

    function Lu(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function Mu(a, b) {
        for (const c of b)
            if (b = Nu(a, c)) return b;
        return null
    }

    function Ou(a, {
        Gi: b,
        qj: c,
        width: d,
        height: e
    }) {
        b = Ku({
            dc: b,
            Gb: b + d,
            Ub: 10,
            ec: c,
            Hb: c + e,
            Vb: 10
        });
        return Mu(a, b)
    }

    function Pu(a, b) {
        var c = Ku({
            dc: b.left,
            Gb: b.right,
            Ub: 10,
            ec: b.top,
            Hb: b.bottom,
            Vb: 10
        });
        b = new Set;
        for (const d of c)(c = Nu(a, d)) && b.add(c);
        return b
    }

    function Qu(a, b, c) {
        if ("fixed" !== Gj(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= Jj(b).width && 1 >= Jj(b).height || a.g.ci && !a.g.ci(b) ? !0 : !1;
        a.g.ag && a.g.ag(b, c, d);
        return d ? null : b
    }

    function Nu(a, b) {
        var c = Lu(a.H.document, b);
        if (c) {
            var d;
            if (!(d = Qu(a, c, b))) a: {
                d = a.H.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = Qu(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var Ru = class {
        constructor(a, b = {}) {
            this.H = a;
            this.g = b
        }
    };

    function Su(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new Tu;
        return a.google_reactive_ads_global_state
    }
    class Tu {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Uu;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var Uu = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function Vu(a, b) {
        return new Wu(a, b)
    }

    function Xu(a) {
        const b = Yu(a);
        Ta(a.g.maxZIndexListeners, c => c(b))
    }

    function Yu(a) {
        a = Le(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function Zu(a, b) {
        ab(a.g.maxZIndexListeners, c => c === b)
    }
    class $u {
        constructor(a) {
            this.g = Su(a).floatingAdsStacking
        }
    }

    function av(a) {
        if (null == a.g) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            Xu(b);
            a.g = d
        }
    }

    function bv(a) {
        if (null != a.g) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            Xu(b);
            a.g = null
        }
    }
    class Wu {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function cv(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? cv(b) || a : a
    }

    function dv(a, b) {
        return ev(b, a.document.body).flatMap(c => fv(c))
    }

    function ev(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function fv(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function gv(a) {
        null !== a.g && (a.g.ei.forEach(b => {
            b.inert = !1
        }), a.g.Zi ? .focus(), a.g = null)
    }

    function lw(a, b) {
        gv(a);
        const c = cv(a.win.document);
        b = dv(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            Zi: c,
            ei: b
        }
    }
    var mw = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        Qd() {
            gv(this)
        }
    };

    function nw(a) {
        return new ow(a, new Jn(a, a.document.body), new Jn(a, a.document.documentElement), new Jn(a, a.document.documentElement))
    }

    function pw(a) {
        In(a.j, "scroll-behavior", "auto");
        const b = qw(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        In(a.g, "position", "fixed");
        In(a.g, "top", `${-b.previousWindowScroll}px`);
        In(a.g, "width", "100%");
        In(a.g, "overflow-x", "hidden");
        In(a.g, "overflow-y", "hidden");
        In(a.i, "overflow-x", "hidden");
        In(a.i, "overflow-y", "hidden")
    }

    function rw(a) {
        Hn(a.g);
        Hn(a.i);
        const b = qw(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        Hn(a.j)
    }
    var ow = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function qw(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function sw(a) {
        return a.googPageScrollPreventerInfo && 0 < a.googPageScrollPreventerInfo.activePageScrollPreventers.size ? !0 : !1
    };

    function tw(a, b) {
        return uw(`#${a}`, b)
    }

    function vw(a, b) {
        return uw(`.${a}`, b)
    }

    function uw(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function ww(a, b) {
        b = Ju(a, b);
        a.document.body.appendChild(b.Ra);
        return b
    }

    function xw(a, b) {
        const c = new W(b.J);
        Sn(b, !0, () => void c.g(!0));
        Sn(b, !1, () => {
            a.setTimeout(() => {
                b.J || c.g(!1)
            }, 700)
        });
        return Nn(c)
    };

    function yw(a) {
        const b = a.uc;
        var c = a.Ld,
            d = a.tc;
        const e = a.jc,
            f = a.If,
            g = a.Zd,
            h = a.Da;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += X(c) + "px; transition: transform " + X(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + X(c) + "px; border-bottom-right-radius: " + X(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(c) + "px; border-bottom-left-radius: " + X(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            Tq(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Tq(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Tq(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Tq(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return Pq(a)
    };

    function zw(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new Aw(a, b);
        b.I();
        return b ? a.googNavStack = b : null
    }

    function Bw(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function Cw(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.H.requestAnimationFrame(() => void b[c].ij({
                isFinal: d
            }))
        }
    }

    function Dw(a, b) {
        b = fb(a.stack, b, (c, d) => c - d.hg.googNavStackStateId);
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class Aw extends U {
        constructor(a, b) {
            super();
            this.H = a;
            this.g = b;
            this.stack = [];
            this.j = 1E9 * Math.random() >>> 0;
            this.m = 0;
            this.l = c => {
                (c = Bw(this, c.state)) ? Cw(this, Dw(this, c.googNavStackStateId + .5)): Cw(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.m++
                },
                b = new Promise(c => {
                    this.stack.push({
                        ij: c,
                        hg: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = Dw(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].hg;
                        const e = Bw(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    Cw(this, c)
                }
            }
        }
        I() {
            this.H.addEventListener("popstate", this.l)
        }
        i() {
            this.H.removeEventListener("popstate", this.l);
            super.i()
        }
    };

    function Ew(a) {
        return (a = zw(a)) ? new Fw(a) : null
    }

    function Gw(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.v && (a.g = null, Yn(a.j))
            })
        }
    }
    var Fw = class extends U {
        constructor(a) {
            super();
            this.l = a;
            this.j = new Zn;
            this.g = null
        }
    };

    function Hw(a, b, c) {
        var d = c.ne ? null : new mw(a);
        const e = Vu(new $u(a), c.zIndex - 1);
        b = Iw(a, b, c);
        d = new Jw(a, b, d, c.pb, nw(a), e);
        d.I();
        (c.dd || void 0 === c.dd) && Kw(d);
        c.mb && ((a = Ew(a)) ? Lw(d, a, c.Qe) : c.Qe ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Kw(a) {
        a.m = b => {
            "Escape" === b.key && a.g.J && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.m)
    }

    function Lw(a, b, c) {
        Sn(a.g, !0, () => {
            try {
                Gw(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Sn(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Wn(b.j).listen(() => void a.collapse());
        Fn(a, b)
    }

    function Mw(a) {
        if (a.v) throw Error("Accessing domItems after disposal");
        return a.A
    }

    function Nw(a) {
        a.win.setTimeout(() => {
            a.g.J && Mw(a).Ea.focus()
        }, 500)
    }

    function Ow(a) {
        const {
            Pe: b,
            Kh: c
        } = Mw(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function Pw(a) {
        Sn(a.j, !1, () => {
            Mw(a).Ea.classList.add("hd-hidden")
        })
    }
    var Jw = class extends U {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.A = b;
            this.l = c;
            this.pb = d;
            this.g = new W(!1);
            this.j = xw(a, this.g);
            Sn(this.j, !0, () => {
                pw(e);
                av(f)
            });
            Sn(this.j, !1, () => {
                rw(e);
                bv(f)
            })
        }
        show({
            Vf: a = !1
        } = {}) {
            if (this.v) throw Error("Cannot show drawer after disposal");
            Mw(this).Ea.classList.remove("hd-hidden");
            Dn(this.win);
            Mw(this).Ea.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (lw(this.l, Mw(this).Ya.Ra), this.pb && Nw(this));
            a && Sn(this.j, !1, () => {
                this.ha()
            })
        }
        collapse() {
            Mw(this).Ea.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .Qd()
        }
        isVisible() {
            return this.j
        }
        I() {
            Ow(this);
            Pw(this)
        }
        i() {
            this.m && this.win.document.body.removeEventListener("keydown", this.m);
            const a = this.A.Ya.Ra,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .Qd();
            super.i()
        }
    };

    function Iw(a, b, c) {
        const d = ww(a, c.pe),
            e = d.shadowRoot;
        e.appendChild(he(new Ud(a.document), Kq(yw({
            uc: c.uc,
            Ld: c.Ld ? ? !0,
            tc: c.tc || !1,
            jc: c.jc,
            If: c.If || "",
            zIndex: c.zIndex,
            Zd: .5,
            Da: c.Da || !1
        }))));
        const f = tw("hd-drawer-container", e);
        c.ue ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = tw("hd-content-container", e);
        c.appendChild(b);
        Dn(a);
        return {
            Ea: f,
            Pe: tw("hd-modal-background", e),
            ge: c,
            Kh: tw("hd-close-button", e),
            Fn: tw("hd-back-arrow-button", e),
            Ya: d
        }
    };

    function Qw(a) {
        const b = a.Ti,
            c = a.mi;
        var d = a.Zd;
        const e = a.Da;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += X(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(d) + "px " + X(d) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            Rw("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + Rw("ved-fixed-handle") + "</div></div></div>";
        return Pq(a)
    }

    function Rw(a) {
        return Pq('<div class="ved-handle" id="' + Tq(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function Sw(a) {
        return no(a.g).map(b => b ? Tw(a, b) : 0)
    }

    function Tw(a, b) {
        switch (a.direction) {
            case 0:
                return Uw(-b.ih);
            case 1:
                return Uw(-b.hh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function Vw(a) {
        return po(a.g).map(b => Tw(a, b))
    }
    var Ww = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function Uw(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.v) throw Error("Accessing domItems after disposal");
        return a.A
    }

    function Xw(a) {
        a.win.setTimeout(() => {
            a.g.J && Y(a).Ea.focus()
        }, 500)
    }

    function Yw(a) {
        Y(a).Ea.classList.remove("ved-hidden");
        Dn(a.win);
        const {
            ka: b,
            Xa: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || Zw(a);
        Y(a).Ea.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (lw(a.j, Y(a).Ya.Ra), a.pb && Xw(a))
    }

    function $w(a) {
        return xw(a.win, a.g)
    }

    function ax(a, b) {
        const c = new W(b());
        Wn(a.F).listen(() => void c.g(b()));
        return Nn(c)
    }

    function bx(a) {
        const {
            ka: b,
            Dd: c
        } = Y(a);
        return ax(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function cx(a) {
        const {
            ka: b,
            Dd: c
        } = Y(a);
        return ax(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function dx(a) {
        const {
            ka: b
        } = Y(a);
        return ax(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function ex(a) {
        return On(bx(a), dx(a))
    }

    function fx(a) {
        const {
            ka: b,
            Xa: c
        } = Y(a);
        return ax(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function Zw(a) {
        Y(a).Xa.classList.add("ved-snap-point-top");
        var b = gx(a, Y(a).Xa);
        Y(a).ka.scrollTop = b;
        hx(a)
    }

    function ix(a) {
        Qn(bx(a), !0, () => {
            const {
                bg: b,
                Kc: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Qn(bx(a), !1, () => {
            const {
                bg: b,
                Kc: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function jx(a) {
        const b = uo(a.win, Y(a).ge);
        xo(b).i(() => void kx(a));
        Fn(a, b)
    }

    function lx(a) {
        Qn(mx(a), !0, () => {
            Y(a).Ig.classList.remove("ved-hidden")
        });
        Qn(mx(a), !1, () => {
            Y(a).Ig.classList.add("ved-hidden")
        })
    }

    function nx(a) {
        const b = () => void Yn(a.C),
            {
                Pe: c,
                Xa: d,
                li: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Sn(ox(a), !0, b)
    }

    function px(a) {
        Sn($w(a), !1, () => {
            Zw(a);
            Y(a).Ea.classList.add("ved-hidden")
        })
    }

    function hx(a) {
        Rn(a.l, !1, () => void Yn(a.F))
    }

    function kx(a) {
        if (!a.l.J) {
            var {
                Pf: b,
                ge: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(qx(a), d);
            a.l.g(!0);
            var e = rx(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function mx(a) {
        const {
            ka: b,
            Xa: c
        } = Y(a);
        return ax(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function ox(a) {
        return Mn(a.m.map(Xo), sx(a))
    }

    function sx(a) {
        return ax(a, () => 0 === Y(a).ka.scrollTop)
    }

    function gx(a, b) {
        ({
            Kc: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function tx(a, b) {
        a.m.g(!0);
        const {
            Kc: c,
            ka: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void ux(a, b)
    }

    function ux(a, b) {
        const {
            Kc: c,
            ka: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).ka.scrollTop = b;
        hx(a);
        a.m.g(!1)
    }

    function rx(a) {
        const b = Y(a).ka.scrollTop;
        tx(a, b);
        return () => void ux(a, b)
    }

    function qx(a) {
        const {
            ka: b,
            Dd: c,
            Pf: d,
            Xa: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var vx = class extends U {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.A = b;
            this.G = c;
            this.j = d;
            this.pb = e;
            this.C = new Zn;
            this.F = new Zn;
            this.g = new W(!1);
            this.m = new W(!1);
            this.l = new W(!1)
        }
        I() {
            Zw(this);
            ix(this);
            jx(this);
            lx(this);
            nx(this);
            px(this);
            Y(this).ka.addEventListener("scroll", () => void hx(this))
        }
        i() {
            const a = this.A.Ya.Ra,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .Qd();
            super.i()
        }
    };

    function wx(a, b, c) {
        const d = ww(a, c.pe),
            e = d.shadowRoot;
        e.appendChild(he(new Ud(a.document), Kq(Qw({
            Ti: 100 * c.Ue,
            mi: 100 * c.ye,
            zIndex: c.zIndex,
            Zd: .5,
            Da: c.Da || !1
        }))));
        const f = tw("ved-drawer-container", e);
        c.ue ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = tw("ved-content-container", e);
        c.appendChild(b);
        Dn(a);
        return {
            Ea: f,
            Pe: tw("ved-modal-background", e),
            Zg: tw("ved-ui-revealer", e),
            ka: tw("ved-scroller", e),
            Kc: tw("ved-scrolled-stack", e),
            li: tw("ved-fully-closed-anchor", e),
            Xa: tw("ved-partially-extended-anchor", e),
            Pf: tw("ved-content-sizer",
                e),
            ge: c,
            Kn: tw("ved-moving-handle", e),
            Dd: tw("ved-moving-handle-holder", e),
            ki: tw("ved-fixed-handle", e),
            bg: tw("ved-fixed-handle-holder", e),
            Ig: tw("ved-over-scroll-block", e),
            Ya: d
        }
    };

    function xx(a, b, c) {
        var d = Vu(new $u(a), c.zIndex - 1);
        b = wx(a, b, c);
        const e = c.ne ? null : new mw(a);
        var f = b.ki;
        f = new qo(new ho(a, f), new eo(f));
        var g = f.g;
        g.m.addEventListener("mousedown", g.D);
        g.l.addEventListener("mouseup", g.v);
        g.l.addEventListener("mousemove", g.A, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.A);
        g.i.addEventListener("touchend", g.m);
        g.i.addEventListener("touchmove", g.v, {
            passive: !1
        });
        b = new vx(a, b, new Ww(f), e, c.pb);
        b.I();
        d = new yx(a, b, nw(a), d);
        Fn(d, b);
        d.I();
        c.mb && ((a = Ew(a)) ? zx(d, a, c.Qe) :
            c.Qe ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function zx(a, b, c) {
        Sn(a.g.g, !0, () => {
            try {
                Gw(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Sn(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Wn(b.j).listen(() => void a.collapse());
        Fn(a, b)
    }

    function Ax(a) {
        Sn(Mn(ex(a.g), fx(a.g)), !0, () => {
            Y(a.g).Xa.classList.remove("ved-snap-point-top")
        });
        Qn(cx(a.g), !0, () => {
            Y(a.g).ka.classList.add("ved-no-snap")
        });
        Qn(cx(a.g), !1, () => {
            Y(a.g).ka.classList.remove("ved-no-snap")
        });
        Sn(cx(a.g), !1, () => {
            var b = a.g;
            var c = Y(b).Dd;
            c = tx(b, gx(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function Bx(a) {
        const b = a.g.G;
        Sw(b).listen(c => {
            c = -c;
            if (0 < c) {
                const {
                    Zg: d
                } = Y(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                Zg: c
            } = Y(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        Vw(b).listen(c => {
            30 < -c && a.collapse()
        })
    }
    var yx = class extends U {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            Sn($w(b), !0, () => {
                pw(c);
                av(d)
            });
            Sn($w(b), !1, () => {
                rw(c);
                bv(d)
            })
        }
        show({
            Vf: a = !1
        } = {}) {
            if (this.v) throw Error("Cannot show drawer after disposal");
            Yw(this.g);
            a && Sn($w(this.g), !1, () => {
                this.ha()
            })
        }
        collapse() {
            var a = this.g;
            Y(a).Ea.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .Qd()
        }
        isVisible() {
            return $w(this.g)
        }
        I() {
            Wn(this.g.C).listen(() => {
                this.collapse()
            });
            Ax(this);
            Bx(this);
            Dn(this.win)
        }
    };
    var Cx = class {
        constructor(a, b, c) {
            this.position = a;
            this.xb = b;
            this.Ce = c
        }
    };

    function Dx(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    }
    Dx.prototype.xc = function() {
        return this.end - this.start
    };

    function Ex(a, b, c) {
        var d = gn(a);
        d = new Cx(b.Zb.Bg(b.ib), b.xb + 2 * b.ib, Math.min(d, b.Ad) - b.Zb.ld() + 2 * b.ib);
        d = d.position.Qf(a, d.xb, d.Ce);
        var e = cn(a),
            f = gn(a);
        c = Fx(a, new nj(Hd(d.top, 0, f - 1), Hd(d.right, 0, e - 1), Hd(d.bottom, 0, f - 1), Hd(d.left, 0, e - 1)), c);
        f = Gx(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new Dx(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new Dx(g, d.bottom));
        a = gn(a);
        d = [];
        for (f = e.length - 1; 0 <= f; f--) d.push(new Dx(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.ib, a >
                    b.Zb.ld() + b.Ke ? a = null : (d = Math.min(h.end - b.ib, b.Ad) - a, a = d < b.Ne ? null : {
                        position: b.Zb.gh(a),
                        Ec: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            be: b,
            En: c
        }
    }

    function Fx(a, b, c) {
        const d = Pu(new Ru(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function Gx(a) {
        return Array.from(a).map(Hx).sort((b, c) => b.start - c.start)
    }

    function Hx(a) {
        a = a.getBoundingClientRect();
        return new Dx(a.top, a.bottom)
    };

    function Ix({
        Z: a,
        pa: b
    }) {
        return new Jx(a, b)
    }
    var Jx = class {
        constructor(a, b) {
            this.Z = a;
            this.pa = b
        }
        Bg(a) {
            return new Jx(this.Z - a, this.pa - a)
        }
        Qf(a, b, c) {
            a = gn(a) - this.Z - c;
            return new nj(a, this.pa + b, a + c, this.pa)
        }
        Gf(a) {
            a.bottom = `${this.Z}px`;
            a.left = `${this.pa}px`;
            a.right = ""
        }
        dg() {
            return 0
        }
        ld() {
            return this.Z
        }
        gh(a) {
            return new Jx(a, this.pa)
        }
    };

    function Kx({
        Z: a,
        ya: b
    }) {
        return new Lx(a, b)
    }
    var Lx = class {
        constructor(a, b) {
            this.Z = a;
            this.ya = b
        }
        Bg(a) {
            return new Lx(this.Z - a, this.ya - a)
        }
        Qf(a, b, c) {
            var d = cn(a);
            a = gn(a) - this.Z - c;
            d = d - this.ya - b;
            return new nj(a, d + b, a + c, d)
        }
        Gf(a) {
            a.bottom = `${this.Z}px`;
            a.right = `${this.ya}px`;
            a.left = ""
        }
        dg() {
            return 1
        }
        ld() {
            return this.Z
        }
        gh(a) {
            return new Lx(a, this.ya)
        }
    };

    function Mx(a) {
        const b = a.fi,
            c = a.Mh,
            d = a.Fh,
            e = a.nj,
            f = a.Gh;
        a = a.Eh;
        return Pq('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + X(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            X(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + X(a) + "px; border-radius: " + X(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + X(a) + "px; margin: 0; border-radius: " + X(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            X(d) + "px; height: " + X(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + X(d) + "px; margin-bottom: " + X(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + X(d) + "px; width: " + X(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            X(d - 6) + "px; width: " + X(d - 6) + "px; border-radius: " + X(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            X(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + X(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            X(16) + "px; max-width: calc(90vw - " + X(2 * d) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + X(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + X(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            X(2 * d) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            Tq(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + Tq(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function Nx(a) {
        const b = a.googleIconName,
            c = a.backgroundColorCss,
            d = a.iconColorCss;
        return Pq('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + Tq(a.ariaLabel) + '" style="background-color: ' + Tq(X(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + Tq(X(d)) + '" aria-hidden="true">' + Oq(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const Ox = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function Px(a, b) {
        a = new Qx(a, b, Rx(a, b));
        a.I();
        return a
    }

    function Sx() {
        var {
            lc: a
        } = {
            lc: 2
        };
        return 1 < a ? 50 : 120
    }

    function Tx(a, b, c) {
        0 === Ux(a) && b.classList.remove("ft-collapsed");
        Vx(b, c);
        Dn(a.win);
        b.classList.remove("ft-collapsed");
        Wx(a);
        return () => void Xx(a, b, c)
    }

    function Yx(a) {
        0 === Zx(a.g.ia.Bd).length ? (a.l.J ? .cj(), a.l.g(null), a.g.ia.Be.g(!1), a.g.ia.ng.g(!1), a.g.ia.Ee.g(!1)) : (a.g.ia.Be.g(!0), $x(a))
    }

    function ay(a, {
        oh: b = 0,
        Dn: c = 0
    }) {
        b = Math.max(Zx(a.g.Cb).length + b, 0);
        c = Math.max(Zx(a.g.hb).length + c, 0);
        const d = b + c;
        let e = 50 * d;
        0 < b && 0 < c && (e += 11);
        e += 10 * Math.max(0, d - 1);
        d >= a.j.lc && (e += 60);
        1 < d && (e += 10);
        return e
    }

    function Ux(a) {
        const b = a.g.hb;
        return Zx(a.g.Cb).length + Zx(b).length
    }

    function Wx(a) {
        const b = a.g.hb,
            c = a.g.separator;
        0 < Zx(a.g.Cb).length && 0 < Zx(b).length ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        Ux(a) >= a.j.lc ? a.g.mg.g(!0) : a.g.mg.g(!1);
        1 < Ux(a) ? a.g.gg.g(!0) : a.g.gg.g(!1);
        0 < Ux(a) ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        by(a);
        cy(a)
    }

    function Xx(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), Wx(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function by(a) {
        const b = Zx(a.g.Cb).concat(Zx(a.g.hb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        Ux(a) >= a.j.lc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function cy(a) {
        const b = Zx(a.g.Cb).concat(Zx(a.g.hb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.C.g(0 < b.length)
    }

    function dy(a) {
        qn(a.g.ia.Bd.children, b => {
            const c = a.g.ia.Jd;
            Xx(a, b, a.g.ia.Bd);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        Yx(a)
    }

    function $x(a) {
        if (!a.l.J) {
            var b = ey(a.win, {
                googleIconName: "verified_user",
                ariaLabel: Q(a.j.Ga, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.ia.ng.g(!a.g.ia.isVisible.J);
                    for (const [, c] of a.g.ia.Jd) c.qg = !0;
                    a.g.ia.Ee.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Tc.classList.add("ft-reg-button");
            Tx(a, b.Tc, a.g.hb);
            Tn(b.Di, a.g.ia.isVisible);
            a.l.g({
                Hn: b,
                cj: () => void Xx(a, b.Tc, a.g.hb)
            })
        }
    }

    function fy(a) {
        var b = a.g.ia.Ee,
            c = b.g;
        a: {
            for ([, d] of a.g.ia.Jd)
                if (a = d, a.showUnlessUserInControl && !a.qg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function gy(a) {
        a.g.ia.Lh.listen(() => {
            dy(a)
        })
    }
    var Qx = class extends U {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new W(null);
            this.C = new W(!1)
        }
        addButton(a) {
            a = ey(this.win, a);
            return Tx(this, a.Tc, this.g.Cb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ia.Bd,
                c = hy(this.win, a);
            Vx(c.vg, b);
            this.g.ia.Jd.set(c.vg, c);
            Yx(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    fy(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    fy(this)
                },
                isDismissed: Vn(c.isDismissed)
            }
        }
        F() {
            return Nn(this.l.map(a => null != a))
        }
        A() {
            return Nn(this.C)
        }
        m() {
            return [this.g.container]
        }
        i() {
            const a =
                this.g.Ya.Ra;
            a.parentNode ? .removeChild(a);
            super.i()
        }
        I() {
            Eo(this.win, Ox);
            Tn(this.g.tj, this.j.Fc);
            this.win.document.body.appendChild(this.g.Ya.Ra);
            gy(this)
        }
    };

    function Rx(a, b) {
        const c = Ju(a),
            d = c.shadowRoot;
        d.appendChild(he(new Ud(a.document), Kq(Mx({
            fi: Q(b.Ga, 1),
            Mh: Q(b.Ga, 3),
            Fh: 50,
            nj: 11,
            Gh: 10,
            Eh: 5
        }))));
        const e = vw("ft-container", d),
            f = vw("ft-expand-toggle", d),
            g = vw("ft-expand-toggle-container", d),
            h = new W(null);
        h.i(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new W(!0);
        Qn(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Qn(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.g(!k.J)
            });
        const l = new W(!1);
        Qn(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Qn(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        });
        const m = new W(!1);
        Qn(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Qn(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(p => {
            if (p) {
                p.Gf(e.style);
                p = p.dg();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                Dn(a)
            }
        });
        const n = new W(!1);
        b = Mn(iy(a, d), n, b.position.map(p => null !== p));
        Qn(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Qn(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = jy(a, vw("ft-reg-bubble", d));
        return {
            container: e,
            Cb: vw("ft-button-holder", d),
            hb: vw("ft-bottom-button-holder", d),
            separator: vw("ft-separator", d),
            Ya: c,
            tj: h,
            Jn: k,
            mg: l,
            gg: m,
            isVisible: n,
            ia: b
        }
    }

    function jy(a, b) {
        const c = new W(!1),
            d = new W(!1),
            e = On(c, d);
        Qn(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Qn(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new W(!1);
        Qn(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Qn(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = vw("ft-reg-bubble-close", b),
            h = new Zn;
        g.addEventListener("click", () => {
            Yn(h)
        });
        const k = vw("ft-reg-message-holder", b);
        xo(uo(a, k)).i(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            Bd: k,
            ng: c,
            Ee: d,
            isVisible: e,
            Be: f,
            Jd: new Map,
            Lh: Wn(h)
        }
    }

    function ey(a, b) {
        const c = he(new Ud(a.document), Kq(Nx({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043"
        })));
        if (void 0 !== b.cornerNumber) {
            const d = Hd(Math.round(b.cornerNumber), 0, 99);
            vw("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && uw("BUTTON", c).addEventListener("click", b.onClick);
        a = new W(!1);
        Qn(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Qn(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Tc: c,
            Di: a
        }
    }

    function hy(a, b) {
        a = new Ud(a.document);
        var c = Pq('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = he(a, Kq(c));
        c = vw("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = vw("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            vg: a,
            showUnlessUserInControl: !1,
            qg: !1,
            isDismissed: new W(!1)
        }
    }

    function Vx(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function Zx(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function iy(a, b) {
        const c = new W(!1),
            d = vw("ft-symbol-font-load-test", b);
        b = vw("ft-symbol-reference", d);
        const e = vw("ft-text-reference", d),
            f = uo(a, b);
        Rn(xo(f).map(g => 0 < g.width && g.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.ha()
        });
        return c
    };

    function ky(a) {
        const b = new Zn,
            c = ko(a, 2500, () => void Yn(b));
        return new ly(a, () => void my(a, () => void c()), Wn(b))
    }

    function ny(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Gn(a, () => void b.disconnect())
    }

    function oy(a) {
        a.win.addEventListener("resize", a.g);
        Gn(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var ly = class extends U {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function my(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function py(a) {
        return a.g[a.g.length - 1]
    }
    var ry = class {
        constructor() {
            this.j = qy;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = fb(this.g, a, this.j);
            this.g.splice(0 <= b ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            ab(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function sy(a) {
        var b = a.Ec.J;
        let c;
        for (; a.j.Qh() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            ty(d, e);
            d.g.add(e)
        }
        for (;
            (d = py(a.g)) && a.j.ti() <= b;) uy(a, d);
        for (;
            (d = py(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, ty(b, e), b.g.add(e), uy(a, d)
    }

    function uy(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.mf = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function ty(a, b) {
        b.mf && b.mf();
        b.mf = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var vy = class {
        constructor(a, b) {
            this.Ec = a;
            this.j = b;
            this.g = new ry;
            this.i = new ry;
            this.l = 0;
            this.Ec.listen(() => void sy(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                vf: this.l++,
                isInToolbar: new W(!1)
            };
            this.g.add(b);
            sy(this);
            return {
                isInToolbar: Vn(Nn(b.isInToolbar)),
                removeCallback: () => {
                    ty(this, b);
                    this.g.delete(b);
                    sy(this)
                }
            }
        }
    };

    function qy(a, b) {
        return a.priority === b.priority ? b.vf - a.vf : a.priority - b.priority
    };

    function wy(a) {
        a = new xy(a);
        a.I();
        return a
    }

    function yy(a) {
        if (!sw(a.win)) {
            if (a.j.J) {
                const b = mn(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = en(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void zy(a), 200)
        }
    }

    function zy(a) {
        if (!sw(a.win)) {
            var b = en(a.win);
            a.g && a.g > b && (a.g = b);
            b = mn(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var xy = class extends U {
        constructor(a) {
            super();
            this.win = a;
            this.j = new W(!1);
            this.g = 0;
            this.l = null;
            this.m = () => void yy(this)
        }
        I() {
            this.win.addEventListener("scroll", this.m);
            this.g = en(this.win);
            zy(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.m);
            this.j.g(!1);
            super.i()
        }
    };

    function Ay(a) {
        if (!a.g) {
            const b = wy(a.win);
            a.g = Nn(b.j);
            Fn(a, b)
        }
        return a.g
    }

    function By(a, b) {
        const c = Ay(a),
            d = a.j.addRegulatoryMessage(b.messageSpec),
            e = Qn(c, !0, () => void d.showUnlessUserInControl()),
            f = Qn(c, !1, () => void d.hideUnlessUserInControl());
        Qn(Kn(d.isDismissed), !0, () => {
            e();
            f()
        })
    }
    var Cy = class extends U {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            Rn(Ay(this), !0, () => void By(this, a))
        }
    };

    function Dy(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new Ey(a, b));
        return a.googFloatingToolbarManager
    }

    function Fy(a) {
        a.g || (a.g = Gy(a.win, a.Ib, a.Fc), Fn(a, a.g.Jb), Fn(a, a.g.Ng), Hy(a), Iy(a, a.g.Jb));
        return a.g
    }

    function Jy(a) {
        var b = [];
        a.g ? .Jb ? .A().m() ? (b.push(() => Ky(a)), b.push(() => Ly(a))) : (b.push(() => Ly(a)), b.push(() => Ky(a)));
        a.g ? .Jb ? .F() ? .m() && b.push(() => {
            const c = gn(a.win);
            return {
                position: Ix({
                    Z: Math.floor(c / 3),
                    pa: 10
                }),
                Ec: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function Hy(a) {
        null === a.Fc.J && a.g ? .position.g(Jy(a))
    }

    function Iy(a, b) {
        const c = ky(a.win);
        c.j || (ny(c), oy(c), c.j = !0);
        c.l.listen(() => void Hy(a));
        Fn(a, c);
        b.F().listen(() => void Hy(a));
        b.A().listen(() => void Hy(a));
        a.Fc.listen(() => void Hy(a))
    }

    function Ky(a) {
        var b = a.win;
        const c = gn(a.win);
        return Ex(b, {
            Zb: Kx({
                Z: 50,
                ya: 10
            }),
            Ke: Math.floor(c / 3),
            xb: 60,
            Ne: Sx(),
            Ad: Math.floor(c / 2),
            ib: 20
        }, [...(a.g ? .Jb.m() ? ? []), a.win.document.body]).be
    }

    function Ly(a) {
        var b = a.win;
        const c = gn(a.win);
        return Ex(b, {
            Zb: Ix({
                Z: 50,
                pa: 10
            }),
            Ke: Math.floor(c / 3),
            xb: 60,
            Ne: Sx(),
            Ad: Math.floor(c / 2),
            ib: 40
        }, [...(a.g ? .Jb.m() ? ? []), a.win.document.body]).be
    }
    class Ey extends U {
        constructor(a, b) {
            super();
            this.win = a;
            this.Ib = b;
            this.g = null;
            this.Fc = My(this.win, this)
        }
        addButton(a) {
            return Fy(this).Oi.addButton(a)
        }
        addRegulatoryMessage(a) {
            Fy(this).Ng.addRegulatoryMessage(a)
        }
    }

    function Gy(a, b, c) {
        const d = new W(null),
            e = Px(a, {
                lc: 2,
                position: d.map(f => f ? .position ? ? null),
                Ga: b,
                Fc: c
            });
        b = new vy(d.map(f => f ? .Ec || 0), {
            addButton: f => e.addButton(f),
            Qh: () => ay(e, {}),
            ti: () => ay(e, {
                oh: 1
            })
        });
        a = new Cy(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Jb: e,
            position: d,
            Oi: b,
            Ng: a
        }
    }

    function My(a, b) {
        const c = new $u(a),
            d = new W(null),
            e = f => void d.g(f);
        Gn(b, () => {
            Zu(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g(Yu(c));
        return d
    };

    function Ny(a) {
        return Dy(a.win, a.Ga)
    }
    var Oy = class {
        constructor(a, b) {
            this.win = a;
            this.Ga = b
        }
    };

    function Py(a) {
        if (a.F) {
            var b = Ny(new Oy(a.g, a.F)).addButton({
                buttonSpec: {
                    googleIconName: "search",
                    ariaLabel: a.Ba,
                    orderingIndex: 0,
                    onClick: () => {
                        Qy(a)
                    }
                },
                priority: 0
            });
            Rn(Kn(b.isInToolbar), !0, () => {
                Ry(a)
            });
            a.g.setTimeout(() => {
                b.isInToolbar.getValue() || Cq(a.j, "pfmsb")
            }, 5E3);
            Sy(a)
        } else Ty(a)
    }

    function Ty(a) {
        var b = Uy(a);
        b = Ou(new Ru(a.g), b);
        b ? .className.startsWith("adsbygoogle") ? Cq(a.j, "pfeaa") : b ? Cq(a.j, "pfeofe") : (a.V.appendChild(a.v.Ra), a.v.shadowRoot.appendChild(ae(document, (() => {
            if (a.l) {
                var c = Vy(a),
                    d = {
                        backgroundColor: c.backgroundColor,
                        Mb: c.Mb,
                        offsetTop: c.Eg,
                        Re: c.Dg,
                        zIndex: 2147483643
                    },
                    e = d.Pi,
                    f = d.Re;
                c = d.backgroundColor;
                var g = d.Mb;
                e = void 0 === e ? 16 : e;
                var h = d.offsetTop;
                f = void 0 === f ? 2 : f;
                g = void 0 === g ? "white" : g;
                d = d.zIndex;
                c = "<style>.autoprose-search-button {background: " + X(void 0 === c ? "#000" : c) +
                    "; border-radius: ";
                c += X(24) + "px;" + (h ? "top: " + X(h) + "%;" : "bottom: " + X(f) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + X(48) + "px; position: fixed; right: " + X(e) + "px; width: 48px; z-index: " + X(d) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + jr(g) + "</div></button>";
                c = Pq(c);
                return Kq(c)
            }
            c = Vy(a);
            d = {
                mj: c.lj,
                backgroundColor: c.backgroundColor,
                Mb: c.Mb,
                offsetTop: c.Eg,
                Re: c.Dg,
                zIndex: 2147483643
            };
            e = d.Pi;
            f = d.Re;
            c = d.backgroundColor;
            var k = d.Mb;
            e = void 0 === e ? 16 : e;
            h = d.offsetTop;
            f = void 0 === f ? 2 : f;
            g = d.mj;
            k = void 0 === k ? "white" : k;
            d = d.zIndex;
            c = "<style>.autoprose-search-button {align-items: center; background: " + X(void 0 === c ? "#000" : c) + "; border-radius: ";
            c += X(24) + "px; border-width: 0;" + (h ? "top: " + X(h) + "%;" : "bottom: " + X(f) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " + X(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + X(e) +
                "px; z-index: " + X(d) + ";}.autoprose-search-text {color: " + X(k) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + jr(k) + '</div><div class="autoprose-search-text">' + Oq(g) + "</div></button>";
            c = Pq(c);
            return Kq(c)
        })())), (b = Wy(a)) ? (Ry(a), Hb(b, "click", () => {
            Qy(a)
        })) : Cq(a.j, "pfmsb"), Sy(a))
    }

    function Qy(a) {
        a.G || (wu(1139, () => a.D.I(), a.g), a.G = !0);
        Aq(a.j, "click", {});
        Xy(a)
    }

    function Ry(a) {
        Aq(a.j, "place", {
            sts: "ok"
        });
        Yy(a)
    }

    function Sy(a) {
        a.l && Sn(a.A.isVisible(), !1, () => {
            a.i.contentDocument.activeElement.blur()
        })
    }

    function Uy(a) {
        let b;
        b = a.l ? 50 : 150;
        var c = a.g.innerHeight;
        const d = a.C ? 20 : 2;
        c = 2 === a.m ? .g() ? (100 - d) / 100 * c : .2 * c;
        return {
            Gi: a.g.innerWidth - 16 - b,
            qj: c,
            width: b,
            height: 50
        }
    }

    function Vy(a) {
        const b = a.m ? .j() || void 0,
            c = a.m ? .l() || void 0;
        let d, e;
        2 === a.m ? .g() ? e = a.C ? 20 : 2 : d = 20;
        return {
            backgroundColor: b,
            Mb: c,
            Eg: d,
            Dg: e,
            lj: a.ra
        }
    }

    function Wy(a) {
        const b = a.v.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
        return b ? b : a.v.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]
    }

    function Yy(a) {
        Hb(a.g.top, "message", b => {
            b.data && "init" === b.data.action && "AutoProseVariant" === b.data.adChannel && (b = Zy(a), tr(a.D, b), $y(a), az(a))
        })
    }

    function Xy(a) {
        $y(a);
        a.A.show();
        az(a)
    }

    function Zy(a) {
        if (a = a.i.contentDocument ? .getElementsByTagName("input")[0]) return a;
        console.warn("searchbox missing");
        return null
    }

    function $y(a) {
        const b = new ResizeObserver(async d => {
                a.i.height = 0;
                await new Promise(e => a.g.requestAnimationFrame(e));
                a.i.height = d[0].target.scrollHeight
            }),
            c = () => {
                const d = a.i.contentDocument ? .documentElement;
                d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3))
            };
        c()
    }

    function az(a) {
        a.A.isVisible() && Zy(a) ? .focus({
            preventScroll: !0
        })
    }
    var bz = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.g = a;
            this.l = (this.aa = h) ? 500 > this.g.innerWidth : 2 === Ze();
            this.C = !!e ? .A();
            this.Sa = !!e ? .D();
            this.G = !1;
            this.V = c;
            this.v = Ju(this.g);
            this.j = d;
            c = e ? .v();
            this.la = c ? .g() || "en";
            this.Na = c ? .j() || "Search results from ${website}";
            this.ra = c ? .m() || "Search";
            this.Ba = c ? .l() || "Open AutoSearch";
            this.P = b.replace("ca", "partner");
            this.K = new Ud(window.document);
            this.i = this.K.createElement("IFRAME");
            this.D = new ur(this.i, e ? .m() || "", "auto-prose", this.P, "AutoProseVariant", a.location,
                this.la, this.Na, f, !1, !0, !0);
            a = this.i;
            this.A = this.l ? xx(this.g, a, {
                Ue: .95,
                ye: .95,
                zIndex: 2147483645,
                mb: !0,
                dd: !0,
                pb: !1,
                Da: !0
            }) : Hw(this.g, a, {
                uc: "min(65vw, 768px)",
                jc: "",
                tc: !1,
                zIndex: 2147483645,
                mb: !0,
                dd: !0,
                pb: !1,
                Ld: !1,
                Da: !0
            });
            this.m = this.l ? e ? .l() : e ? .j();
            this.F = g
        }
        I() {
            this.Sa ? Py(this) : Ty(this)
        }
    };

    function cz(a, b) {
        for (var c = 0; c < b.length; c++) a.ta(b[c]);
        return a
    }

    function dz(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class ez {
        constructor(a) {
            this.A = {};
            this.A.c = a;
            this.m = [];
            this.j = null;
            this.v = [];
            this.C = 0
        }
        ac(a) {
            this.A.wpc = a;
            return this
        }
        ta(a) {
            for (var b = 0; b < this.m.length; b++)
                if (this.m[b] == a) return this;
            this.m.push(a);
            return this
        }
        l(a) {
            var b = Cc(this.A);
            0 < this.C && (b.t = this.C);
            b.err = this.m.join();
            b.warn = this.v.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && xk(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };
    let fz, gz;
    const hz = new pk(t);
    ((a, b = !0) => {
        fz = a || new Om;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Nm(fz, t.google_srt);
        gz = new zk(fz, b, hz);
        gz.l(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || nk(hz) : hz.g && Hb(t, "load", () => {
            t.google_measure_js_timing || nk(hz)
        })
    })();
    var iz = (a, b) => gz.Ic(a, b),
        jz = (a, b) => gz.Ka(a, b),
        kz = (a, b, c) => {
            const d = Mm();
            !b.eid && d.length && (b.eid = d.toString());
            yk(fz, a, b, !0, c)
        },
        lz = (a, b) => gz.wa(a, b, void 0, void 0),
        mz = (a, b, c) => {
            gz.La(a, b, c)
        };

    function Bq(a, b, c) {
        let d = b.Ma;
        b.Ua && y(es) && (d = 1, "r" in c && (c.r += "F"));
        0 >= d || (!b.Qa || "pvc" in c || (c.pvc = hf(a.g)), kz(b.Ta, c, d))
    }

    function nz(a, b, c) {
        c = c.l(a.g);
        b.Qa && (c.pvc = hf(a.g));
        0 <= b.Ma && (c.r = b.Ma, Bq(a, b, c))
    }
    var oz = class {
        constructor(a) {
            this.g = a
        }
    };

    function pz(a) {
        const b = a.i ? .g() ? .j() || 0,
            c = a.j.document,
            d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        wu(1138, () => (new bz(a.j, a.m, d, a.l, a.i, b, J(a.g, Rp, 33) ? .g() ? .i() ? ? null, J(a.g, Gp, 25) ? .g() || !1)).I(), a.j)
    }
    async function qz(a) {
        await new Promise(b => {
            setTimeout(() => {
                b(pz(a))
            })
        })
    }
    var rz = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.g = c;
            this.i = J(this.g, Mp, 31);
            this.l = new Dq(a, b, this.i || new Mp);
            this.m = d
        }
    };

    function sz(a, b) {
        Bq(a.i, wq, { ...b,
            evt: "place",
            vh: gn(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.j() ? .g() || ""
        })
    }

    function tz(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && xk(c.stack, "") || "");
        sz(a, b)
    }
    var uz = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    var vz = class {
        constructor(a) {
            this.g = a
        }
        Ha(a) {
            const b = a.document.createElement("div");
            D(b, Gu(a));
            D(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            D(c, Gu(a));
            D(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var xz = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; 10 > d && b;) {
            if (b == c) return !0;
            if (wz(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const wz = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = Zb(b, "&") ? Od(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && yn.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (wz(a, b[c])) return !0
        }
        return !1
    };
    var yz = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const zz = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return lu(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return yz(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    const Az = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return lu(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class Bz {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.xc());
            const b = yz(a);
            return new kp(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Cz = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    };
    const Dz = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = 0 < L(this.g, Wp, 9).length ? L(this.g, Wp, 9)[0] : null,
                f = Cu(J(this.g, Xp, 3), e);
            if (!e) return null;
            if (e = O(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Ud(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ed && ku(c.style, f.Ed);
                d = (new Ud(d)).createElement("INS");
                f.hc && ku(d.style, f.hc);
                c.appendChild(d);
                f = {
                    kb: c,
                    sa: d
                };
                f.sa.setAttribute("data-ad-type", "text");
                f.sa.setAttribute("data-native-settings-key",
                    e);
                nu(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = 0 < L(this.g, Wp, 9).length ? L(this.g, Wp, 9)[0] : null;
            if (!a) return null;
            a = L(a, Vp, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == O(c, 1) && 0 < parseInt(O(c, 2), 10)) return parseInt(O(c, 2), 10)
            }
            return null
        }
    };
    const Ez = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    hc: g
                }
            } else c = {};
            a = lu(d.document, a, f, e, c, b);
            a.sa.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        yc() {
            return this.g
        }
    };
    class Fz {
        constructor(a) {
            this.i = a
        }
        g() {
            return new kp([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Gz = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = this.l.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Hz(a, b, c) {
        const d = [];
        for (let q = 0; q < a.length; q++) {
            var e = a[q];
            var f = q,
                g = b,
                h = c,
                k = e.ea();
            if (k) {
                var l = yu(k);
                if (l) {
                    var m = Du[H(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = J(e, Xp, 3)) ? xh(m, 3) : null;
                        l = new Gz(l, n);
                        n = yh(e, 10, Cg, 2).slice(0);
                        null != Ph(k, 5) && n.push(1);
                        var p = h ? h : {};
                        h = Ph(e, 12);
                        k = th(e, ip, 4) ? J(e, ip, 4) : null;
                        1 == H(e, 8) ? (p = p.Ah || null, e = new Iz(l, new Az(Cu(J(e, Xp, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = 2 == H(e, 8) ? new Iz(l, new Dz(e), p.Ai || new Fz("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !== e && d.push(e)
        }
        return d
    }

    function Jz(a) {
        return a.m
    }

    function Kz(a) {
        return a.ra
    }

    function Lz(a) {
        return y(Pr) ? (a.K || (a.K = a.C.i(a.j)), a.K) : a.C.i(a.j)
    }

    function Mz(a) {
        var b = a.F;
        a = a.j.document.createElement("div");
        y(Pr) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Nz(a) {
        return a.A instanceof Ez ? a.A.yc() : null
    }

    function Oz(a, b, c) {
        sn(a.G, b) || a.G.set(b, []);
        a.G.get(b).push(c)
    }

    function Pz(a, b) {
        a.m = !0;
        y(Pr) && (a.i && Pt(a.i), a.i = null);
        null != b && a.V.push(b)
    }

    function Qz(a) {
        return Nt(a.j.document, a.F || !1)
    }

    function Rz(a) {
        return a.A.j(a.j)
    }

    function Sz(a, b = null, c = null) {
        return new Iz(a.C, b || a.A, c || a.P, a.F, a.Ob, a.Bc, a.Nd, a.j, a.la, a.D, a.l, a.v, a.aa)
    }
    class Iz {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.C = a;
            this.A = b;
            this.P = c;
            this.F = d;
            this.Ob = e;
            this.Bc = f;
            this.Nd = g ? g : new ip;
            this.j = h;
            this.la = k;
            this.D = l;
            this.l = m;
            (a = !m) || (a = !(m.ea() && null != Ph(m.ea(), 5)));
            this.ra = !a;
            this.v = n;
            this.aa = p;
            this.V = [];
            this.m = !1;
            this.G = new wn;
            this.K = this.i = null
        }
        X() {
            return this.j
        }
        g() {
            return this.C.g()
        }
    };

    function Tz(a, b, c, d, e, f) {
        const g = hp();
        return new Iz(new Cz(c, e), new zz, new Bz(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function Uz(a, b, c, d, e) {
        const f = hp();
        return new Iz(new Cz(b, d), new Az({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var Vz = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        X() {
            return this.win
        }
        m(a) {
            return Tz(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return Uz(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const Wz = {
        TABLE: {
            qc: new Oo([1, 2])
        },
        THEAD: {
            qc: new Oo([0, 3, 1, 2])
        },
        TBODY: {
            qc: new Oo([0, 3, 1, 2])
        },
        TR: {
            qc: new Oo([0, 3, 1, 2])
        },
        TD: {
            qc: new Oo([0, 3])
        }
    };

    function Xz(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Ra(e, f), 0 > c || b.push(new Yz(a, [f], c, f, 3, de(f).trim(), d));
        return b
    }

    function Zz(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                if (1 != l.nodeType) var m = null;
                else "BR" == l.tagName ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = "inline" == m || "inline-block" == m ? null : l);
                m ? (d.length && k && e.push(new Yz(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = de(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Yz(a, d, h, b, 2, k, c));
        return e
    }

    function $z(a, b) {
        return a.g - b.g
    }
    class Yz {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.Zc = b.slice(0);
            this.g = c;
            this.Sd = d;
            this.Td = e;
            this.v = f;
            this.i = g
        }
        X() {
            return this.i
        }
        m(a) {
            return Tz(a, this.l, this.Sd, this.i, this.Td, this.g)
        }
        j() {
            return Uz(this.l, this.Sd, this.i, this.Td, this.g)
        }
    };

    function aA(a) {
        return bb(a.v ? Zz(a.g, a.j, a.i) : [], a.m ? Xz(a.g, a.m, a.j, a.i) : []).filter(b => {
            var c = b.Sd.tagName;
            c ? (c = Wz[c.toUpperCase()], b = null != c && c.qc.contains(b.Td)) : b = !1;
            return !b
        })
    }
    class bA {
        constructor(a, b, c) {
            this.j = a;
            this.m = b.Xc;
            this.v = b.Zf;
            this.g = b.articleStructure;
            this.i = c;
            this.l = b.Df
        }
    };

    function cA(a, b) {
        if (!b) return !1;
        const c = Ba(b),
            d = a.g.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.i.getComputedStyle(b).getPropertyValue("list-style-type")) return a.g.set(c, !0), !0;
        b = cA(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function dA(a, b) {
        return Ya(b.Zc, c => cA(a, c))
    }
    class eA {
        constructor(a) {
            this.g = new wn;
            this.i = a
        }
    };
    class fA {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var hA = (a, {
            lg: b = !1,
            ef: c = !1,
            zg: d = c || y(Or) ? 2 : 3,
            cf: e = null
        } = {}) => {
            a = aA(a);
            return gA(a, {
                lg: b,
                ef: c,
                zg: d,
                cf: e
            })
        },
        gA = (a, {
            lg: b = !1,
            ef: c = !1,
            zg: d = c || y(Or) ? 2 : 3,
            cf: e = null
        } = {}) => {
            if (2 > d) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort($z);
            a = [];
            b = new fA(b, e);
            for (const g of f) {
                e = {
                    Gd: g,
                    rd: 51 > g.v.length ? !1 : null != b.j ? !dA(b.j, g) : !0
                };
                if (b.l || e.rd) b.g.length ? (f = b.g[b.g.length - 1].Gd, f = xz(f.X(), f.Zc[f.Zc.length - 1], e.Gd.Zc[0])) : f = !0, f ? (b.g.push(e), e.rd && b.i.push(e.Gd)) : (b.g = [e], b.i = e.rd ? [e.Gd] : []);
                if (b.i.length >= d) {
                    e = c || y(Or) ? 0 : 1;
                    if (0 > e || e >= b.i.length) e = null;
                    else {
                        for (e = b.i[e]; b.g.length && !b.g[0].rd;) b.g.shift();
                        b.g.shift();
                        b.i.shift()
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var jA = (a, b, c = !1) => {
            a = iA(a, b);
            const d = new eA(b);
            return Io(a, e => hA(e, {
                ef: c,
                cf: d
            }))
        },
        kA = (a, b) => {
            a = iA(a, b);
            const c = new eA(b);
            return Io(a, d => {
                if (d.l) {
                    var e = d.g;
                    var f = d.i;
                    d = d.j.querySelectorAll(d.l);
                    var g = [];
                    for (var h of d) g.push(new Vz(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if ("style" === l.name.toLowerCase() && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = "IMG" === k || "SVG" === k
                        }(k || 1 < h.element.textContent.length) && !cA(c, f.element) && xz(m.X(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        iA = (a, b) => {
            const c = new wn;
            a.forEach(d => {
                var e = yu(J(d, $o, 1));
                if (e) {
                    var f = e.toString();
                    sn(c, f) || c.set(f, {
                        articleStructure: d,
                        sh: e,
                        Xc: null,
                        Zf: !1,
                        Df: null
                    });
                    e = c.get(f);
                    (f = (f = J(d, $o, 2)) ? O(f, 7) : null) ? e.Xc = e.Xc ? e.Xc + "," + f : f: e.Zf = !0;
                    d = J(d, $o, 4);
                    e.Df = d ? O(d, 7) : null
                }
            });
            return vn(c).map(d => {
                const e = d.sh.query(b.document);
                return e.length ? new bA(e[0],
                    d, b) : null
            }).filter(d => null != d)
        };
    var lA = a => a ? .google_ad_slot ? Po(new ap(1, {
            mh: a.google_ad_slot
        })) : Ro(Error("Missing dimension when creating placement id")),
        nA = a => {
            switch (a.Ob) {
                case 0:
                case 1:
                    var b = a.l;
                    null == b ? a = null : (a = b.ea(), null == a ? a = null : (b = H(b, 2), a = null == b ? null : new ap(0, {
                        Ef: [a],
                        Og: b
                    })));
                    return null != a ? Po(a) : Ro(Error("Missing dimension when creating placement id"));
                case 2:
                    return a = mA(a), null != a ? Po(a) : Ro(Error("Missing dimension when creating placement id"));
                default:
                    return Ro(Error("Invalid type: " + a.Ob))
            }
        };
    const mA = a => {
        if (null == a || null == a.v) return null;
        const b = J(a.v, $o, 1),
            c = J(a.v, $o, 2);
        if (null == b || null == c) return null;
        const d = a.aa;
        if (null == d) return null;
        a = a.g();
        return null == a ? null : new ap(0, {
            Ef: [b, c],
            zi: d,
            Og: Eu[a]
        })
    };

    function oA(a) {
        const b = Nz(a.ba);
        return (b ? lA(b) : nA(a.ba)).map(c => dp(c))
    }

    function pA(a) {
        a.g = a.g || oA(a);
        return a.g
    }

    function qA(a, b) {
        if (a.ba.m) throw Error("AMA:AP:AP");
        St(b, a.ea(), a.ba.g());
        Pz(a.ba, b)
    }
    const rA = class {
        constructor(a, b, c) {
            this.ba = a;
            this.i = b;
            this.ga = c;
            this.g = null
        }
        ea() {
            return this.i
        }
        fill(a, b) {
            var c = this.ba;
            (a = c.A.i(a, b, this.i, c.j)) && qA(this, a.kb);
            return a
        }
    };

    function sA(a, b) {
        return xu(() => {
            if (y(Pr)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Lz(f);
                    if (g) {
                        if (!f.i && !f.m) {
                            var h = null;
                            try {
                                var k = Lz(f);
                                if (k) {
                                    h = Mz(f);
                                    St(h, k, f.g());
                                    var l = h
                                } else l = null
                            } catch (q) {
                                throw Pt(h), q;
                            }
                            f.i = l
                        }(h = f.i) && d.push({
                            Xi: f,
                            anchorElement: g,
                            ii: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = mn(b), k = nn(b), e = 0; e < d.length; e++) {
                        const {
                            Xi: q,
                            anchorElement: v,
                            ii: z
                        } = d[e];
                        f = tA(z, k, l);
                        c.push(new rA(q, v, f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const q = [];
                    for (let v = 0; v < a.length; v++) {
                        var m = a[v],
                            n = Lz(m);
                        n && q.push({
                            Kg: m,
                            anchorElement: n
                        })
                    }
                    for (n =
                        0; n < q.length; n++) {
                        m = k;
                        g = m.push; {
                            var p = q[n];
                            const v = p.anchorElement,
                                z = p.Kg,
                                A = Mz(z);
                            try {
                                St(A, v, z.g()), h = A
                            } catch (E) {
                                throw Pt(A), E;
                            }
                        }
                        g.call(m, h)
                    }
                    c = mn(b);
                    d = nn(b);
                    for (g = 0; g < k.length; g++) e = tA(k[g], d, c), f = q[g], l.push(new rA(f.Kg, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) Pt(k[c])
                }
            }
            return l
        }, b)
    }

    function tA(a, b, c) {
        a = a.getBoundingClientRect();
        return new zo(a.left + b, a.top + c, a.right - a.left)
    };
    const uA = {
            1: "0.5vp",
            2: "300px"
        },
        vA = {
            1: 700,
            2: 1200
        },
        wA = {
            [1]: {
                Vg: "3vp",
                gf: "1vp",
                Ug: "0.3vp"
            },
            [2]: {
                Vg: "900px",
                gf: "300px",
                Ug: "90px"
            }
        };

    function xA(a, b, c) {
        var d = yA(a),
            e = gn(a) || vA[d],
            f = void 0;
        c && (f = (c = (c = zA(L(c, tp, 2), d)) ? J(c, rp, 7) : void 0) ? AA(c, e) : void 0);
        c = f;
        f = yA(a);
        a = gn(a) || vA[f];
        const g = BA(wA[f].gf, a);
        a = null === g ? CA(f, a) : new DA(g, g, EA(g, 8), 8, .3, c);
        c = BA(wA[d].Vg, e);
        f = BA(wA[d].gf, e);
        d = BA(wA[d].Ug, e);
        e = a.j;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new DA(e, e, EA(e, a.i), a.i, a.l, a.g)
    }

    function FA(a, b) {
        const c = a.Kb();
        a = wh(a, 5);
        return null == c || null == a ? b : new DA(a, 0, [], c, 1)
    }

    function GA(a, b) {
        const c = yA(a);
        a = gn(a) || vA[c];
        if (!b) return CA(c, a);
        if (b = zA(L(b, tp, 2), c))
            if (b = HA(b, a)) return b;
        return CA(c, a)
    }

    function IA(a) {
        const b = yA(a);
        a = gn(a) || vA[b];
        return CA(b, a)
    }

    function JA(a, b) {
        let c = {
            Gc: a.j,
            rb: a.v
        };
        for (let d of a.m) d.adCount <= b && (c = d.Lc);
        return c
    }

    function KA(a, b, c) {
        var d = xh(b, 2);
        b = J(b, tp, 1);
        var e = yA(c);
        var f = gn(c) || vA[e];
        c = BA(b ? .m(), f) ? ? a.j;
        e = BA(b ? .l(), f) ? ? a.v;
        d = d ? [] : LA(b ? .g(), f) ? ? a.m;
        const g = b ? .Kb() ? ? a.i,
            h = b ? .j() ? ? a.l;
        a = (b ? .v() ? AA(J(b, rp, 7), f) : null) ? ? a.g;
        return new DA(c, e, d, g, h, a)
    }

    function MA(a, b) {
        var c = yA(b);
        const d = new up,
            e = new tp;
        let f = !1;
        var g = B(Ur);
        0 <= g && (ci(e, 4, g), f = !0);
        g = null;
        1 === c ? (c = B(Xr), 0 <= c && (g = c + "vp")) : (c = B(Wr), 0 <= c && (g = c + "px"));
        null !== g && (fi(e, 2, g), f = !0);
        c = y(Zr) ? "0px" : null;
        null !== c && (fi(e, 5, c), f = !0);
        if (y(as)) ai(d, 2, !0), f = !0;
        else if (null !== c || null !== g) {
            const m = [];
            for (const n of a.m) {
                var h = m,
                    k = h.push;
                var l = new sp;
                l = ci(l, 1, n.adCount);
                l = fi(l, 3, c ? ? n.Lc.rb + "px");
                l = fi(l, 2, g ? ? n.Lc.Gc + "px");
                k.call(h, l)
            }
            Nh(e, 3, m)
        }
        return f ? (M(d, 1, e), KA(a, d, b)) : a
    }
    class DA {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.v = b;
            this.m = c.sort((g, h) => g.adCount - h.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
        Kb() {
            return this.i
        }
    }

    function zA(a, b) {
        for (let c of a)
            if (H(c, 1) == b) return c;
        return null
    }

    function LA(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = Ph(d, 1);
            const e = BA(O(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Lc: {
                    Gc: e,
                    rb: BA(O(d, 3), b)
                }
            })
        }
        return c
    }

    function HA(a, b) {
        const c = BA(O(a, 2), b),
            d = BA(O(a, 5), b);
        if (null === c) return null;
        const e = Ph(a, 4);
        if (null == e) return null;
        var f = a.g();
        f = LA(f, b);
        if (null === f) return null;
        const g = J(a, rp, 7);
        b = g ? AA(g, b) : void 0;
        return new DA(c, d, f, e, wh(a, 6), b)
    }

    function CA(a, b) {
        a = BA(uA[a], b);
        return y(Sr) ? new DA(null === a ? Infinity : a, null, [], 8, .3) : new DA(null === a ? Infinity : a, null, [], 3, null)
    }

    function BA(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function yA(a) {
        a = 900 <= cn(a);
        return ie() && !a ? 1 : 2
    }

    function EA(a, b) {
        if (4 > b) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Lc: {
                Gc: 2 * a,
                rb: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Lc: {
                Gc: 3 * a,
                rb: 3 * a
            }
        }]
    }

    function AA(a, b) {
        const c = BA(O(a, 2), b) || 0,
            d = Ph(a, 3) || 1;
        return {
            Ag: c,
            ug: d,
            kc: BA(O(a, 1), b) || 0
        }
    };

    function NA(a, b, c) {
        return Vm({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function OA(a) {
        if (!a.length) return null;
        const b = Wm(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new PA(b, a)
    }
    class PA {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function QA(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var WA = (a, b) => {
        var c = cb(b.document.querySelectorAll(".google-auto-placed"));
        const d = RA(b),
            e = SA(b),
            f = TA(b),
            g = UA(b),
            h = cb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = cb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = cb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(cb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), cb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.od, c],
                [a.Nb,
                    d
                ],
                [a.xi, e],
                [a.pd, f],
                [a.qd, g],
                [a.vi, h],
                [a.wi, k],
                [a.yi, l]
            ]) !1 === n ? b = b.concat(p) : m = m.concat(p);
        a = VA(m);
        c = VA(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const XA = a => {
            const b = QA(a);
            return b ? Va(Wa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        RA = a => cb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        SA = a => cb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        TA = a => (XA(a) || cb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(cb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        UA = a => cb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var VA = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var YA = gz.Ka(453, WA),
        ZA;
    ZA = gz.Ka(454, (a, b) => {
        const c = cb(b.document.querySelectorAll(".google-auto-placed")),
            d = RA(b),
            e = SA(b),
            f = TA(b),
            g = UA(b),
            h = cb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = cb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = cb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return VA([].concat(!0 === a.od ? c : [], !0 === a.Nb ? d : [], !0 === a.xi ? e : [], !0 === a.pd ? f : [], !0 === a.qd ? g : [], !0 === a.vi ? h : [], !0 === a.wi ? k : [], !0 === a.yi ? b : []))
    });

    function $A(a, b, c) {
        const d = aB(a);
        b = bB(d, b, c);
        return new cB(a, d, b)
    }

    function dB(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function eB(a) {
        return a.g.map(b => b.box)
    }

    function fB(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class cB {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function aB(a) {
        const b = YA({
                Nb: !1
            }, a),
            c = nn(a),
            d = mn(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && Zb(e.className, "google-auto-placed")) || dB(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Cn: e ? 1 : 0
            } : null
        }).filter(zb(e => null === e))
    }

    function bB(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? gB(a, b) : Wa(a, d => new PA(d.box, 1))
    }

    function gB(a, b) {
        a = Wa(a, d => new PA(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (NA(d, a[f], b)) {
                        d = OA([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function hB(a, b, c) {
        const d = yo(c, b);
        return !Ya(a, e => Vm(e, d))
    }

    function iB(a, b, c, d, e) {
        e = e.ga;
        const f = yo(e, b),
            g = yo(e, c),
            h = yo(e, d);
        return !Ya(a, k => Vm(k, g) || Vm(k, f) && !Vm(k, h))
    }

    function jB(a, b, c, d) {
        const e = eB(a);
        if (hB(e, b, d.ga)) return !0;
        if (!iB(e, b, c.Ag, c.kc, d)) return !1;
        const f = new PA(yo(d.ga, 0), 1);
        a = Va(a.l, g => NA(g, f, c.kc));
        b = Xa(a, (g, h) => g + h.i, 1);
        return 0 === a.length || b > c.ug ? !1 : !0
    };
    var kB = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function lB(a, b) {
        const c = new Wo,
            d = new xn;
        b.forEach(e => {
            if (Wh(e, Bp, 1, Ep)) {
                e = Wh(e, Bp, 1, Ep);
                if (J(e, Ap, 1) && J(e, Ap, 1).ea() && J(e, Ap, 2) && J(e, Ap, 2).ea()) {
                    const g = mB(a, J(e, Ap, 1).ea()),
                        h = mB(a, J(e, Ap, 2).ea());
                    if (g && h)
                        for (var f of kB({
                                anchor: g,
                                position: Rh(J(e, Ap, 1), 2)
                            }, {
                                anchor: h,
                                position: Rh(J(e, Ap, 2), 2)
                            })) c.set(Ba(f.anchor), f.position)
                }
                J(e, Ap, 3) && J(e, Ap, 3).ea() && (f = mB(a, J(e, Ap, 3).ea())) && c.set(Ba(f), Rh(J(e, Ap, 3), 2))
            } else Wh(e, Cp, 2, Ep) ? nB(a, Wh(e, Cp, 2, Ep), c) : Wh(e, zp, 3, Ep) && oB(a, Wh(e, zp, 3, Ep), d)
        });
        return new pB(c,
            d)
    }
    class pB {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const nB = (a, b, c) => {
            J(b, Ap, 2) ? (b = J(b, Ap, 2), (a = mB(a, b.ea())) && c.set(Ba(a), H(b, 2))) : J(b, $o, 1) && (a = qB(a, J(b, $o, 1))) && a.forEach(d => {
                d = Ba(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        oB = (a, b, c) => {
            J(b, $o, 1) && (a = qB(a, J(b, $o, 1))) && a.forEach(d => {
                c.add(Ba(d))
            })
        },
        mB = (a, b) => (a = qB(a, b)) && 0 < a.length ? a[0] : null,
        qB = (a, b) => (b = yu(b)) ? b.query(a) : null;
    var rB = class {
        constructor() {
            this.g = gf();
            this.i = 0
        }
    };

    function sB(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (tB(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function uB(a) {
        a = vB(a);
        return a.has("all") || a.has("after")
    }

    function wB(a) {
        a = vB(a);
        return a.has("all") || a.has("before")
    }

    function vB(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function tB(a) {
        const b = vB(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var xB = class {
        constructor() {
            this.g = new Set;
            this.i = new rB
        }
    };

    function yB(a) {
        return function(b) {
            return sA(b, a)
        }
    }

    function zB(a) {
        const b = gn(a);
        return b ? Ha(AB, b + mn(a)) : wb
    }

    function BB(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return wb;
        const d = eB(c || $A(b));
        return e => hB(d, a, e.ga)
    }

    function CB(a, b, c, d) {
        if (0 > a || 0 > b.Ag || 0 > b.ug || 0 > b.kc) throw Error("ama::ead:nd");
        return Infinity === a ? wb : e => jB(d || $A(c, b.kc), a, b, e)
    }

    function DB(a) {
        if (!a.length) return wb;
        const b = new Oo(a);
        return c => b.contains(c.Ob)
    }

    function EB(a) {
        return function(b) {
            for (let c of b.Bc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function FB(a) {
        return a.length ? function(b) {
            const c = b.Bc;
            return a.some(d => -1 < c.indexOf(d))
        } : xb
    }

    function GB(a, b) {
        if (0 >= a) return xb;
        const c = hn(b).scrollHeight - a;
        return function(d) {
            return d.ga.g <= c
        }
    }

    function HB(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[H(c.Nd, 2) || 0]
        }
    }

    function IB(a) {
        return a.length ? b => a.includes(H(b.Nd, 1) || 0) : xb
    }

    function JB(a, b) {
        const c = lB(a, b);
        return function(d) {
            var e = d.ea();
            d = Eu[d.ba.g()];
            var f = Ba(e);
            f = c.i.g.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Ba(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Ba(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function KB() {
        const a = new xB;
        return function(b) {
            var c = b.ea(),
                d = Eu[b.ba.g()];
            a: switch (d) {
                case 1:
                    b = uB(c.previousElementSibling) || wB(c);
                    break a;
                case 4:
                    b = uB(c) || wB(c.nextElementSibling);
                    break a;
                case 2:
                    b = wB(c.firstElementChild);
                    break a;
                case 3:
                    b = uB(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = sB(a, c, d);
            d = a.i;
            kz("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Ze()
            }, .1);
            return !(b || c)
        }
    }
    const AB = (a, b) => b.ga.g >= a,
        LB = (a, b, c) => {
            c = c.ga.xc();
            return a <= c && c <= b
        };

    function MB(a, b, c, d, e) {
        var f = NB({
            ah: e.eh
        }, OB(a, b), a);
        if (0 === f.length) {
            var g = !!J(b, Up, 6) ? .g() ? .length;
            f = J(b, Op, 28) ? .l() ? .g() && g ? NB({
                ah: !0
            }, PB(a, b), a) : f
        }
        if (0 === f.length) return tz(d, "pfno"), [];
        b = f;
        a = e.gd ? QB(a, b, c) : {
            gb: b,
            hd: null
        };
        const {
            gb: h,
            hd: k
        } = a;
        f = h;
        return 0 === f.length && k ? (tz(d, k), []) : [f[e.eh ? 0 : Math.floor(f.length / 2)]]
    }

    function QB(a, b, c) {
        c = c ? L(c, Dp, 5) : [];
        const d = JB(a.document, c),
            e = KB();
        b = b.filter(f => d(f));
        if (0 === b.length) return {
            gb: [],
            hd: "pfaz"
        };
        b = b.filter(f => e(f));
        return 0 === b.length ? {
            gb: [],
            hd: "pfet"
        } : {
            gb: b,
            hd: null
        }
    }

    function RB(a, b) {
        return a.ga.g - b.ga.g
    }

    function OB(a, b) {
        const c = J(b, Up, 6);
        if (!c) return [];
        b = J(b, Op, 28) ? .l();
        return (b ? .j() ? kA(c.g(), a) : jA(c.g(), a, !!b ? .l())).map(d => d.j())
    }

    function PB(a, b) {
        b = L(b, Yp, 1) || [];
        return Hz(b, a, {}).filter(c => !c.Bc.includes(6))
    }

    function NB(a, b, c) {
        b = sA(b, c);
        if (a.ah) {
            const d = zB(c);
            b = b.filter(e => d(e))
        }
        return b.sort(RB)
    };

    function SB(a, b) {
        return 2 === Ze() ? xx(a.win, b, {
            Ue: .95,
            ye: .95,
            zIndex: 2147483645,
            mb: !0,
            Da: !0
        }) : Hw(a.win, b, {
            uc: "min(65vw, 768px)",
            jc: "",
            tc: !1,
            zIndex: 2147483645,
            mb: !0,
            Ld: !1,
            Da: !0
        })
    }

    function TB(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.la.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.F,
                styleId: "5134551505",
                hl: a.aa,
                fexp: a.C,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.yb.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.G
            };
        a.ra && (c.adLoadedCallback = a.Ba.bind(a));
        a.l && a.A instanceof
        Array && (c.fexp = a.A.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function UB(a) {
        a.win.addEventListener("message", b => {
            "https://www.gstatic.com" === b.origin && "resize" === b.data.action && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var VB = class extends U {
        constructor(a, b, c, d, e, f, g, h, k = () => {}) {
            super();
            this.win = a;
            this.la = b;
            this.V = e;
            this.C = f;
            this.m = h;
            this.Sa = k;
            this.aa = d ? .g() || "en";
            this.Na = d ? .j() || "Search results from ${website}";
            this.ra = y(gs);
            this.F = c.replace("ca", "partner");
            this.K = new Ud(a.document);
            this.g = this.K.createElement("IFRAME");
            this.G = g.i ? g.g : "9d449ff4a772956c6";
            this.A = (this.l = y(ms)) ? Mm().concat(this.C) : this.C;
            this.j = new ur(this.g, this.G, "auto-rs-prose", this.F, "AutoRsVariant", a.location, this.aa, this.Na, this.A, this.m, this.l);
            this.P = SB(this, this.g);
            Fn(this, this.P)
        }
        I() {
            0 !== this.la.length && (this.ra || wu(1075, () => {
                this.j.I()
            }, this.win), wu(1076, () => {
                const a = this.K.createElement("SCRIPT");
                Be(a, fj `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), TB(this), sz(this.V, {
                sts: "ok"
            }), this.m && UB(this))
        }
        Ba(a, b) {
            b ? wu(1075, () => {
                this.j.I()
            }, this.win) : (this.Sa(), tz(this.V, "pfns"))
        }
        yb(a, b) {
            sr(this.j, a, b);
            (() => {
                if (!this.m) {
                    const c = new ResizeObserver(async e => {
                            this.g.height = "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.g.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.g.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.P.show()
            })()
        }
    };
    var WB = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function XB(a) {
        const b = Qz(a.l.ba),
            c = a.v.Ha(a.D, () => a.i());
        b.appendChild(c);
        a.m && (b.className = a.m);
        return {
            bi: b,
            Ph: c
        }
    }
    class YB {
        constructor(a, b, c, d) {
            this.D = a;
            this.l = b;
            this.v = c;
            this.m = d || null;
            this.g = null;
            this.j = new W(null)
        }
        I() {
            const a = XB(this);
            this.g = a.bi;
            qA(this.l, this.g);
            this.j.g(a.Ph)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        A() {
            return this.j
        }
    };
    async function ZB(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    $B(a)
                } catch (c) {
                    tz(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function $B(a) {
        if ((!a.gd || !aC(a.config, a.U, a.i)) && bC(a.g ? .j(), a.i)) {
            var b = MB(a.win, a.config, a.U, a.i, {
                eh: !!a.g ? .l() ? .m(),
                gd: a.gd
            });
            b = cC(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = dC(a.g),
                g = !!a.g ? .v();
            if (!J(a.config, Gp, 25) ? .g()) {
                var h = () => {
                    d.forEach(k => {
                        k.i()
                    })
                };
                wu(1074, () => {
                    (new VB(a.win, c, a.webPropertyCode, a.g ? .j(), a.i, e, f, g, h)).I()
                }, a.win)
            }
        }
    }
    var eC = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.U = e;
            this.gd = f;
            this.i = new uz(a, b, J(this.config, Op, 28) || new Op);
            this.g = J(this.config, Op, 28)
        }
    };

    function aC(a, b, c) {
        a = J(a, Op, 28) ? .g() ? .g() || 0;
        const d = w(Lb).g(ls.g, ls.defaultValue);
        return d && d.includes(a.toString()) ? !1 : 0 === (b ? yh(b, 2, Cg, 2) : []).length ? (tz(c, "pfeu"), !0) : !1
    }

    function bC(a, b) {
        const c = w(Lb).g(js.g, js.defaultValue);
        return c && 0 !== c.length && !c.includes((a ? .g() || "").toString()) ? (tz(b, "pflna"), !1) : !0
    }

    function cC(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new YB(b, d, new vz(g), "autors-widget");
            d.I();
            c[f] = d
        }
        return c
    }

    function dC(a) {
        return new WB(a ? .A() || !1, a ? .m() || "")
    };
    var fC = (a, b) => {
        const c = [];
        J(a, Zp, 18) && c.push(2);
        b.U && c.push(0);
        J(a, Op, 28) && 1 == Vh(J(a, Op, 28), 1) && c.push(1);
        J(a, Mp, 31) && 1 == Vh(J(a, Mp, 31), 1) && c.push(5);
        J(a, Ip, 32) && c.push(6);
        J(a, bq, 34) && P(J(a, bq, 34), 3) && c.push(7);
        return c
    };

    function gC(a, b) {
        const c = Td(a).createElement("IMG");
        hC(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        D(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function iC(a, b) {
        const c = b.document.createElement("button");
        hC(b, c);
        D(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d => {
            a.j();
            d.stopPropagation()
        });
        return c
    }

    function jC(a, b, c) {
        const d = Td(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        hC(b, d);
        D(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function kC(a) {
        const b = a.document.createElement("ins");
        hC(a, b);
        D(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class lC {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new W(!1)
        }
        Ha(a, b, c, d) {
            const e = gC(a, d),
                f = gC(a),
                g = iC(this, a),
                h = jC(this, a, c);
            a = kC(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.g.listen(k => {
                D(e, {
                    display: k ? "none" : "inline"
                });
                D(f, {
                    display: k ? "inline" : "none"
                });
                k ? (D(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), D(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (D(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), D(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        cg() {
            return 40
        }
        Gg() {
            this.g.g(!1);
            return 0
        }
        Hg() {
            this.g.g(!0)
        }
    }

    function hC(a, b) {
        D(b, Gu(a));
        D(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function mC(a, b) {
        const c = b.document.createElement("button");
        nC(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g, b["border-bottom"] = a.g);
        D(c, b);
        c.addEventListener("click", d => {
            a.v();
            d.stopPropagation()
        });
        return c
    }

    function oC(a, b, c, d) {
        const e = b.document.createElement("div");
        D(e, Gu(b));
        D(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        D(f, Gu(b));
        D(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (D(e, {
                    "flex-direction": "row"
                }), a.g && D(e, {
                    "border-top": a.g,
                    "border-bottom": a.g
                }), D(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                D(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (D(e, {
                border: "0",
                "flex-direction": "column"
            }), D(f, {
                "margin-left": "0",
                "text-align": "center"
            }), D(c, {
                "margin-right": "0",
                width: "100%"
            }), a.g && D(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function nC(a, b, c) {
        D(c, Gu(b));
        D(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.A,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.D,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class pC {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.m = a;
            this.v = b;
            this.D = c;
            this.i = d;
            this.A = e;
            this.l = f;
            this.g = g;
            this.j = h
        }
        Ha(a) {
            const b = a.document.createElement("div");
            nC(this, a, b);
            D(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = Td(a).createElement("IMG");
                c.src = this.l;
                nC(this, a, c);
                D(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            nC(this, a, c);
            D(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.m));
            b.appendChild(c);
            c = mC(this, a);
            c.appendChild(b);
            return this.j ? oC(this, a, c, this.j) : c
        }
    };

    function qC(a, b) {
        b = b.filter(c => 5 === J(c, ip, 4) ? .g() && 1 === H(c, 8));
        b = Hz(b, a);
        a = sA(b, a);
        a.sort((c, d) => d.ga.g - c.ga.g);
        return a[0] || null
    };

    function rC({
        H: a,
        Oe: b,
        Le: c,
        Kf: d,
        qa: e,
        Jh: f,
        rj: g
    }) {
        let h = 0;
        try {
            h |= an(a);
            const k = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= k ? 320 > k ? 8192 : 0 : 2048;
            h |= a.navigator && sC(a.navigator.userAgent) ? 1048576 : 0;
            h = b ? h | tC(a, b, g) : h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h |= bn(a, c, g);
            g || (h |= dn(a))
        } catch {
            h |= 32
        }
        switch (d) {
            case 2:
                uC(a, e) && (h |= 16777216);
                break;
            case 1:
                vC(a, e) && (h |= 16777216)
        }
        f && wC(a, e) && (h |= 16777216);
        return h
    }

    function sC(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var uC = (a, b = null) => {
            const c = Ku({
                dc: 0,
                Gb: a.innerWidth,
                Ub: 3,
                ec: 0,
                Hb: Math.min(Math.round(a.innerWidth / 320 * 50), xC) + 15,
                Vb: 3
            });
            return null != Mu(yC(a, b), c)
        },
        vC = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), xC) + 15,
                f = Ku({
                    dc: 0,
                    Gb: c,
                    Ub: 3,
                    ec: d - e,
                    Hb: d,
                    Vb: 3
                });
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return null != Mu(yC(a, b), f)
        };

    function wC(a, b = null) {
        return null != zC(a, b)
    }

    function zC(a, b = null) {
        var c = a.innerHeight;
        c = Ku({
            dc: 0,
            Gb: a.innerWidth,
            Ub: 10,
            ec: c - 66,
            Hb: c,
            Vb: 10
        });
        return Mu(yC(a, b), c)
    }

    function AC(a, b) {
        var c = y(Dr);
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let g = f;
            for (; g > b;) {
                var d = Ku({
                    dc: 0,
                    Gb: e,
                    Ub: 9,
                    ec: g - b,
                    Hb: g,
                    Vb: 9
                });
                d = Mu(yC(a), d);
                if (!d) {
                    a = f - g;
                    break a
                }
                g = c ? Math.min(d.getBoundingClientRect().top - 1, g - 1) : d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }

    function yC(a, b = null) {
        return new Ru(a, {
            ag: BC(a, b)
        })
    }

    function BC(a, b = null) {
        if (b) return (c, d, e) => {
            yk(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }

    function tC(a, b, c = !1) {
        const d = a.innerHeight;
        return (c ? (hc() && ie() ? mf(a) : 1) * d : d) >= b ? 0 : 1024
    }
    const xC = 90 * 1.38;

    function CC(a) {
        a.g || (a.g = DC(a));
        D(a.g, {
            display: "block"
        });
        a.m.Hg();
        a.j.g(a.v)
    }

    function EC(a) {
        const b = a.m.Gg();
        switch (b) {
            case 0:
                a.j.g(a.v);
                break;
            case 1:
                a.g && (D(a.g, {
                    display: "none"
                }), a.j.g(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function DC(a) {
        var b = AC(a.l, a.m.cg() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        D(c, Gu(a.l));
        D(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.v = a.m.Ha(a.l, () => a.i(), () => {
            a.D.ha();
            EC(a)
        }, () => {
            a.D.ha();
            CC(a)
        });
        c.appendChild(a.v);
        a.C && (c.className = a.C);
        a.l.document.body.appendChild(c);
        return c
    }
    class FC {
        constructor(a, b, c) {
            this.l = a;
            this.m = b;
            this.v = null;
            this.j = new W(null);
            this.C = c || null;
            this.D = wy(a);
            this.g = null
        }
        I() {
            const a = Nn(this.D.j);
            Qn(a, !0, () => void CC(this));
            Sn(a, !1, () => void EC(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.D.ha();
            this.j.g(null)
        }
        A() {
            return this.j
        }
    };

    function GC(a) {
        a.D.g(0);
        null != a.l && (a.l.i(), a.l = null);
        null != a.j && (a.j.i(), a.j = null)
    }

    function HC(a) {
        a.j = new FC(a.v, a.G, a.C);
        a.j.I();
        Tn(a.m, a.j.A());
        a.D.g(2)
    }
    class IC {
        constructor(a, b, c, d, e) {
            this.v = a;
            this.F = b;
            this.K = c;
            this.G = d;
            this.C = e;
            this.D = new W(0);
            this.m = new W(null);
            this.j = this.l = this.g = null
        }
        I() {
            this.F ? (this.l = new YB(this.v, this.F, this.K, this.C), this.l.I(), Tn(this.m, this.l.A()), this.D.g(1), null == this.g && (this.g = new Ho(this.v), this.g.I(2E3)), Fo(this.g, () => {
                GC(this);
                HC(this)
            })) : HC(this)
        }
        i() {
            GC(this);
            this.g && (this.g.ha(), this.g = null)
        }
        A() {
            return this.m
        }
    };
    var JC = (a, b, c, d, e) => {
        a = new IC(a, qC(a, e), new pC(b, d, "#FFF", "#4A4A4A", "normal"), new lC(b, c, d), "google-dns-link-placeholder");
        a.I();
        return a
    };
    var KC = a => a.googlefc = a.googlefc || {},
        LC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function MC(a) {
        var b = LC(a.g);
        if (NC(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.i = JC(a.g, c, b, () => OC(a), a.l))
        }
    }

    function PC(a) {
        const b = KC(a.g);
        LC(a.g).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => MC(a)
        })
    }

    function OC(a) {
        av(a.j);
        LC(a.g).openConfirmationDialog(b => {
            b && a.i && (a.i.i(), a.i = null);
            bv(a.j)
        })
    }
    class QC {
        constructor(a, b, c) {
            this.g = a;
            this.j = Vu(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }

    function NC(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function RC(a) {
        const b = a.document.createElement("ins");
        SC(a, b);
        D(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function TC(a, b, c, d) {
        const e = Td(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        SC(a, e);
        D(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function UC(a, b) {
        const c = b.document.createElement("span");
        SC(b, c);
        D(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.i();
            d.stopPropagation()
        });
        return c
    }

    function VC(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        D(c, Gu(b));
        D(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function WC(a) {
        const b = a.document.createElement("div");
        D(b, Gu(a));
        D(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class XC {
        constructor(a, b, c, d) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.i = d;
            this.g = new W(!1)
        }
        Ha(a, b, c, d) {
            c = RC(a);
            const e = TC(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = TC(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                g = UC(this, a),
                h = TC(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.m);
            D(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = VC(this, a);
            a = WC(a);
            a.appendChild(c);
            a.appendChild(k);
            this.g.listen(l => {
                D(e, {
                    display: l ? "none" : "inline"
                });
                D(f, {
                    display: l ? "inline" : "none"
                });
                l ? (D(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), D(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), D(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (D(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), D(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), D(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        cg() {
            return 71
        }
        Gg() {
            this.g.g(!1);
            return 0
        }
        Hg() {
            this.g.g(!0)
        }
    }

    function SC(a, b) {
        D(b, Gu(a));
        D(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };
    var YC = class extends T {
        constructor() {
            super()
        }
    };

    function ZC(a) {
        $C(a.i, b => {
            var c = a.l,
                d = b.jj,
                e = b.Nh,
                f = b.th;
            b = b.showRevocationMessage;
            (new IC(c, qC(c, a.j), new pC(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new XC(d, e, f, b), "google-revocation-link-placeholder")).I()
        }, () => {
            bv(a.g)
        })
    }
    class aD {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = Vu(b, 2147483643);
            this.j = c;
            this.i = d
        }
    };
    var bD = a => {
        if (!a || null == H(a, 1)) return !1;
        a = H(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function cD(a) {
        if (!0 !== a.i.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            bD(a.g) && (b = new aD(a.i, a.m, a.l || L(a.g, Yp, 4), a.j), av(b.g), ZC(b), b = !0);
            var c;
            a: if ((c = a.g) && null != H(c, 3)) switch (c = H(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (PC(new QC(a.i, a.m, a.l || L(a.g, Yp, 4))), b = !0);
            c = (c = a.g) ? !0 === xh(c, 5) : !1;
            var d = a.g;
            d = (d ? !0 === xh(d, 6) : !1) || y(rs);
            c && (b = !0);
            b && (b = new YC, b = ai(b, 1, c && d), a.j.start(b), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class dD {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.m = d;
            this.l = e || null
        }
    };

    function eD(a, b, c, d, e, f) {
        try {
            const g = a.g,
                h = He("SCRIPT", g);
            h.async = !0;
            Be(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                0 < c ? eD(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function fD(a, b, c = () => {}, d = () => {}) {
        eD(Td(a), b, 0, !1, c, d)
    };

    function gD(a = null) {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Bc(Tm).map(a => Number(a));
    Bc(Um).map(a => Number(a));
    const hD = t.URL;

    function iD(a) {
        var b = (new hD(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    }

    function jD(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new hD(a.location.href)).searchParams.get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    var kD = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = He("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var lD = ni(class extends T {});

    function mD(a) {
        if (a.g) return a.g;
        a.G && a.G(a.l) ? a.g = a.l : a.g = Ye(a.l, a.K);
        return a.g ? ? null
    }

    function nD(a) {
        a.A || (a.A = b => {
            try {
                var c = a.F ? a.F(b) : void 0;
                if (c) {
                    var d = c.We,
                        e = a.C.get(d);
                    e && (e.Wi || a.C.delete(d), e.sb ? .(e.Uh, c.payload))
                }
            } catch (f) {}
        }, Hb(a.l, "message", a.A))
    }

    function oD(a, b, c) {
        if (mD(a))
            if (a.g === a.l)(b = a.m.get(b)) && b(a.g, c);
            else {
                var d = a.j.get(b);
                if (d && d.Pb) {
                    nD(a);
                    var e = ++a.P;
                    a.C.set(e, {
                        sb: d.sb,
                        Uh: d.Cc(c),
                        Wi: "addEventListener" === b
                    });
                    a.g.postMessage(d.Pb(c, e), "*")
                }
            }
    }
    var pD = class extends U {
        constructor(a, b, c, d) {
            super();
            this.K = b;
            this.G = c;
            this.F = d;
            this.m = new Map;
            this.P = 0;
            this.j = new Map;
            this.C = new Map;
            this.A = void 0;
            this.l = a
        }
        i() {
            delete this.g;
            this.m.clear();
            this.j.clear();
            this.C.clear();
            this.A && (Ib(this.l, "message", this.A), delete this.A);
            delete this.l;
            delete this.F;
            super.i()
        }
    };
    const qD = (a, b) => {
            const c = {
                cb: d => {
                    d = lD(d);
                    b.callback({
                        jb: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        rD = {
            Cc: a => a.callback,
            Pb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            sb: (a, b) => {
                a({
                    jb: b
                })
            }
        };

    function sD(a) {
        a = lD(a.data.__fciReturn);
        return {
            payload: a,
            We: Uh(a, 1)
        }
    }

    function tD(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!mD(a.caller), a.j = !0);
        return a.g
    }

    function uD(a) {
        return new Promise(b => {
            tD(a) && oD(a.caller, "getDataWithCallback", {
                command: "loaded",
                callback: c => {
                    b(c.jb)
                }
            })
        })
    }

    function vD(a, b) {
        tD(a) && oD(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: hi(b),
            callback: () => {}
        })
    }
    var wD = class extends U {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new pD(a, "googlefcPresent", void 0, sD);
            this.caller.m.set("getDataWithCallback", qD);
            this.caller.j.set("getDataWithCallback", rD)
        }
        i() {
            this.caller.ha();
            super.i()
        }
    };
    const xD = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function yD(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = xD(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Li({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function zD(a) {
        return yD(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? AD(a, "1") : !0 : !1
    }

    function AD(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function BD(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => AD(a, c))
    }

    function CD(a) {
        if (a.g) return a.g;
        a.g = Ye(a.j, "__tcfapiLocator");
        return a.g
    }

    function DD(a) {
        return "function" === typeof a.j.__tcfapi || null != CD(a)
    }

    function ED(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (CD(a)) {
            FD(a);
            const e = ++a.F;
            a.A[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function GD(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.m
        };
        const d = Bb(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        ED(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = xD(c), c.internalBlockOnErrors = a.m, yD(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), ED(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function FD(a) {
        a.l || (a.l = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.A[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Hb(a.j, "message", a.l))
    }
    class HD extends U {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.A = {};
            this.F = 0;
            this.C = b.timeoutMs ? ? 500;
            this.m = b.Bh ? ? !1;
            this.l = null
        }
        i() {
            this.A = {};
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.A;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.m
            };
            const c = Bb(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = xD(b),
                    b.internalBlockOnErrors = this.m, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                ED(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && ED(this, "removeEventListener", null, a.listenerId)
        }
    };

    function $C(a, b, c) {
        const d = gD(a.g);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = gD(a.g),
                    f = new HD(a.g);
                DD(f) && GD(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        jj: e.getDefaultConsentRevocationText(),
                        Nh: e.getDefaultConsentRevocationCloseText(),
                        th: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function ID(a, b) {
        var c = iD(a.g);
        const d = jD(a.g);
        c = JD(a.i, {
            fc: c,
            fctype: d
        });
        fD(a.g, c, () => {}, () => {});
        b && vD(new wD(a.g), b)
    }

    function JD(a, b) {
        b = { ...b,
            ers: 2
        };
        return Kc(Pc(new nb(ob, "https://fundingchoicesmessages.google.com/i/%{id}"), {
            id: a
        }), b)
    }
    class KD {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        start(a) {
            if (this.g === this.g.top) try {
                kD(this.g, "googlefcPresent"), ID(this, a)
            } catch (b) {}
        }
    };
    const LD = new Set(["ARTICLE", "SECTION"]);
    var MD = class {
        constructor(a) {
            this.g = a
        }
    };

    function ND(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function OD(a) {
        return 0 < a.classList.length
    }

    function PD(a) {
        return LD.has(a.tagName)
    };
    var QD = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function RD(a) {
        return Aa(a) && 1 == a.nodeType && "FIGURE" == a.tagName ? a : (a = a.parentNode) ? RD(a) : null
    };
    var SD = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = RD(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new QD(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var TD = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), 0 === c.size && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b,
                        c
                    ] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function UD(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function VD(a) {
        return Array.from(WD(a).map.values()).filter(b => 3 <= b.size).map(b => [...b])
    }

    function XD(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = 50 <= d.height && d.width >= a.m) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new Dx(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && null === An(a.j, {
                Za: c.g,
                Wa: YD,
                Bb: !0
            })
        })
    }

    function ZD(a) {
        return VD(a).sort($D).find(b => XD(a, b)) || []
    }

    function WD(a) {
        return aE(Array.from(a.win.document.getElementsByTagName("IMG")).map(SD).filter(Zo), b => {
            var c = [...ND("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? ND("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? ND("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = An(a.i.g, {
                Za: b.g,
                Wa: OD
            })) ? ND("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(An(a.i.g, {
                Za: b.g,
                Wa: PD
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var bE = class {
        constructor(a, b, c, d, e) {
            var f = new ro;
            this.win = a;
            this.l = b;
            this.m = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function aE(a, b) {
        const c = new TD;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function YD(a) {
        return "A" === a.tagName && a.hasAttribute("href")
    }

    function $D(a, b) {
        return b.length - a.length
    };

    function cE(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = dE(a.j),
            d = eE(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.m.g().i(e => {
            var f = a.j;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            1 > Math.abs(h) && 1 > Math.abs(k) && 1 > Math.abs(l) && 1 > Math.abs(e) || (f = f.getComputedStyle(d), D(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function fE(a) {
        a.g || (a.g = cE(a));
        return a.g
    }
    var gE = class extends U {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.m = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    };

    function eE(a) {
        const b = a.document.createElement("div");
        D(b, Gu(a));
        D(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function dE(a) {
        const b = a.document.createElement("div");
        D(b, Gu(a));
        D(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function hE(a) {
        const b = new W(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Nn(b)
    };
    const iE = ["Google Material Icons", "Roboto"];

    function jE({
        win: a,
        va: b,
        ui: c,
        webPropertyCode: d,
        Ga: e,
        ca: f
    }) {
        const g = new to(a, c);
        c = new gE(a, c, g);
        Fn(c, g);
        a = new kE(a, d, e, b, c, f);
        Fn(a, c);
        a.I()
    }
    var kE = class extends U {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Ga = c;
            this.va = d;
            this.j = e;
            this.ca = f;
            this.g = new W(!1)
        }
        I() {
            const a = lE(this.win, this.webPropertyCode, this.Ga);
            fE(this.j).appendChild(a.di);
            pu(this.win, a.sa);
            hE(a.sa).i(b => {
                if (null !== b) {
                    switch (b) {
                        case "unfilled":
                            this.ha();
                            break;
                        case "filled":
                            this.g.g(!0);
                            break;
                        default:
                            this.ca ? .reportError("Unhandled AdStatus: " + String(b)), this.ha()
                    }
                    this.ca ? .fj(this.va, b)
                }
            });
            Rn(this.g, !0, () => void a.Ci.g(!0));
            a.Yh.listen(() => void this.ha());
            a.Xh.listen(() => void this.ca ? .dj(this.va))
        }
    };

    function lE(a, b, c) {
        const d = new W(!1),
            e = a.document.createElement("div");
        D(e, Gu(a));
        D(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        Qn(d, !0, () => void D(e, {
            opacity: "1"
        }));
        Qn(d, !1, () => void D(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        D(f, Gu(a));
        D(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            lh: g,
            Bi: h
        } = mE(a, b);
        f.appendChild(g);
        e.appendChild(nE(a, Q(c, 1)));
        b = oE(a, Q(c, 2));
        e.appendChild(b.Hh);
        b.fe.listen(() => void d.g(!1));
        return {
            Ci: d,
            di: e,
            sa: h,
            Xh: b.fe,
            Yh: b.fe.delay(a, 450)
        }
    }

    function nE(a, b) {
        const c = a.document.createElement("div");
        D(c, Gu(a));
        D(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function oE(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        D(c, Gu(a));
        D(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new Zn;
        c.addEventListener("click", () => void Yn(d));
        return {
            Hh: c,
            fe: Wn(d)
        }
    }

    function mE(a, b) {
        a = lu(a.document, b, null, null, {});
        return {
            lh: a.kb,
            Bi: a.sa
        }
    };

    function pE({
        target: a,
        threshold: b = 0
    }) {
        const c = new qE;
        c.I(a, b);
        return c
    }
    var qE = class extends U {
        constructor() {
            super();
            this.g = new W(!1)
        }
        I(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            Gn(this, () => void c.disconnect())
        }
    };

    function rE(a) {
        const b = sE(a.win, Zh(a.g, 2) ? ? 250, Zh(a.g, 3) ? ? 300);
        let c = 1;
        return ZD(a.l).map(d => ({
            va: c++,
            image: d,
            bb: b(d)
        }))
    }

    function tE(a, b) {
        const c = pE({
            target: b.image.g,
            threshold: $h(a.g) ? ? .8
        });
        a.j.push(c);
        Rn(Un(c.g, a.win, Zh(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (Zh(a.g, 1) ? ? 1)) {
                jE({
                    win: a.win,
                    va: b.va,
                    ui: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Ga: a.Ga,
                    ca: a.ca
                });
                a.i++;
                if (!(a.i < (Zh(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .ha();
                a.ca ? .ej(b.va)
            }
        })
    }

    function uE(a) {
        const b = rE(a);
        b.filter(vE).forEach(c => void tE(a, c));
        a.ca ? .gj(b.map(c => ({
            va: c.va,
            bb: c.bb
        })))
    }
    var wE = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Ga = d;
            this.l = e;
            this.ca = f;
            this.j = [];
            this.i = 0
        }
    };

    function vE(a) {
        return 0 === a.bb.rejectionReasons.length
    }

    function sE(a, b, c) {
        const d = gn(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                xb: e.width,
                Ce: e.height,
                Zh: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function xE(a, b) {
        a.va = b;
        return a
    }
    var yE = class {
        constructor(a, b, c, d, e) {
            this.m = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.va = this.g = null
        }
    };

    function zE(a, b) {
        return new yE(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function AE(a, b, c) {
        var d = a.j++;
        null === a.g ? (a.g = gk(), a = 0) : a = gk() - a.g;
        var e = b.m,
            f = b.webPropertyCode,
            g = b.hostname,
            h = b.j,
            k = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].va;
                l[`${p}_s_w`] = b.g[n].bb.xb;
                l[`${p}_s_h`] = b.g[n].bb.Ce;
                l[`${p}_s_dbf`] = b.g[n].bb.Zh;
                0 < b.g[n].bb.rejectionReasons.length && (l[`${p}_s_rej`] = b.g[n].bb.rejectionReasons.join(","))
            }
        } else l = null;
        kz("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(null === b.va ? {} : {
                imid: b.va
            }),
            ...(null === b.i ? {} : {
                astat: b.i
            }),
            ...(null === b.errorMessage ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var BE = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        gj(a) {
            var b = zE(this, "fndi");
            b.g = a;
            AE(this, b, 0 < a.length ? 1 : .1)
        }
        ej(a) {
            a = xE(zE(this, "adpl"), a);
            AE(this, a, 1)
        }
        fj(a, b) {
            a = xE(zE(this, "adst"), a);
            a.i = b;
            AE(this, a, 1)
        }
        dj(a) {
            a = xE(zE(this, "adis"), a);
            AE(this, a, 1)
        }
        reportError(a) {
            var b = zE(this, "err");
            b.errorMessage = a;
            AE(this, b, .1)
        }
    };

    function CE(a, b, c) {
        return (a = lq(a)) && xh(a, 11) ? c.map(d => d.j()) : c.map(d => d.m(b))
    };
    var DE = class extends T {
        getHeight() {
            return Th(this, 2)
        }
    };

    function EE(a, b) {
        return ci(a, 1, b)
    }

    function FE(a, b) {
        return Nh(a, 2, b)
    }
    var GE = class extends T {};
    GE.L = [2];
    var HE = class extends T {
        constructor() {
            super()
        }
    };
    HE.L = [5];
    var IE = class extends T {
            constructor() {
                super()
            }
        },
        JE = [1, 2];
    const KE = new Set([7, 1]);
    var LE = class {
        constructor() {
            this.j = new TD;
            this.l = []
        }
        g(a, b) {
            KE.has(b) || Vo(Uo(pA(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function ME(a) {
        return new kp(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class NE {
        g(a) {
            return ME(Math.floor(a.xc()))
        }
    };
    var OE = class extends T {
        constructor() {
            super()
        }
    };

    function PE(a, b) {
        var c = b.adClient;
        if ("string" !== typeof c || !c) return !1;
        a.Ud = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        Aa(c) && (a.B = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
            a.v = {};
            for (const d of b.fillMessage) a.v[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        Pj(a.l) && Pj(a.i) || kz("rctnosize", b);
        return !0
    }
    class QE {
        constructor() {
            this.v = this.B = this.j = this.Ud = null;
            this.i = this.l = 0
        }
        A() {
            return !0
        }
    };

    function RE(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (b) {
            return !1
        }
    }

    function SE(a, b = []) {
        const c = Date.now();
        return Va(b, d => c - d < 1E3 * a)
    }

    function TE(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Ya(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = SE(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function UE(a, b) {
        return 0 >= b || null == a || !RE(a) ? null : TE(a, b)
    };
    var VE = (a, b, c) => {
        let d = 0;
        try {
            d |= an(a);
            d |= dn(a);
            d |= bn(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = UE(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            y(vb) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    var WE = class extends QE {
        constructor() {
            super(...arguments);
            this.m = !1;
            this.g = null
        }
        A(a) {
            this.m = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = nq(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const XE = {};

    function YE(a, b, c) {
        let d = ZE(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.A.Kb();
        for (; d.Xb && d.Xb.length;) {
            const h = d.Xb.shift();
            var g = Rz(h.ba);
            const k = h.ga.g,
                l = !!c.j.ff || !!c.j.nf || c.Va() || !!c.j.Rf || y($r) || k > e;
            g = !g || g <= d.Sc;
            if (!l) c.v ? .g(h, 20);
            else if (!g) c.v ? .g(h, 18);
            else if ($E(c, h, {
                    yd: d.Sc
                })) {
                e = k;
                if (d.Pc.g.length + 1 >= f) return c.v ? .i(d.Xb, 19), !0;
                d = ZE(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const ZE = (a, b, c) => {
        var d = b.A.Kb(),
            e = b.A.l,
            f = b.A;
        f = $A(b.X(), f.g ? f.g.kc : void 0, d);
        if (f.g.length >= d) return b.v ? .i(aF(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = hn(f.j).scrollHeight || null), e = !d || 0 > d ? -1 : f.i * e - fB(f)) : e = void 0;
        const g = (d = null == e || 50 <= e) ? aF(b, f, {
            types: a
        }, c) : null;
        d || b.v ? .i(aF(b, f, {
            types: a
        }, c), 18);
        return {
            Pc: f,
            Sc: e,
            Xb: g
        }
    };
    XE[2] = Ha(function(a, b) {
        a = aF(b, $A(b.X()), {
            types: a,
            zb: IA(b.X())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if ($E(b, a[c])) return !0;
        return b.l ? (b.m.push(11), !0) : !1
    }, [0]);
    XE[5] = Ha(YE, [0], 5);
    XE[10] = Ha(function(a, b) {
        a = [];
        const c = b.Ba;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !y(Qr) && a.push(1);
        return YE(a, 10, b)
    }, 10);
    XE[3] = function(a) {
        if (!a.l) return !1;
        var b = aF(a, $A(a.X()), {
            types: [0],
            zb: IA(a.X())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if ($E(a, b[c])) return !0;
        a.m.push(11);
        return !0
    };
    const bF = a => {
            var b;
            a.j.bh ? b = y(Sr) ? new DA(0, null, [], 8, .3) : new DA(0, null, [], 3, null) : b = IA(a.X());
            return {
                types: [0],
                zb: b
            }
        },
        dF = a => {
            const b = a.X().document.body.getBoundingClientRect().width;
            cF(a, ME(b))
        },
        fF = (a, b) => {
            var c = bF(a);
            c.hj = [5];
            c = aF(a, $A(a.X()), c, 8);
            eF(a, c.reverse(), b)
        },
        eF = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.ga), $E(a, d, {
                        Vd: b
                    })) return !0;
            return !1
        };
    XE[8] = function(a) {
        var b = a.X().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => XE[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.wd()) return !0;
        b = bF(a);
        b.Ze = [2, 4, 5];
        b = aF(a, $A(a.X()), b, 8);
        const c = new NE;
        if (eF(a, b, c)) return !0;
        if (a.j.Yf) switch (a.j.Jg || 0) {
            case 1:
                fF(a, c);
                break;
            default:
                dF(a)
        }
        return !0
    };
    XE[6] = Ha(YE, [2], 6);
    XE[7] = Ha(YE, [1], 7);
    XE[9] = function(a) {
        const b = ZE([0, 2], a, 9);
        if (!b || !b.Xb) return a.m.push(17), a.l;
        for (const d of b.Xb) {
            var c = a.j.xe || null;
            null == c ? c = null : (c = Sz(d.ba, new gF, new hF(c, a.X())), c = new rA(c, d.ea(), d.ga));
            if (c && !(Rz(c.ba) > b.Sc) && $E(a, c, {
                    yd: b.Sc,
                    ee: !0
                })) return a = c.ba.V, Pz(d.ba, 0 < a.length ? a[0] : null), !0
        }
        a.m.push(17);
        return a.l
    };
    class gF {
        i(a, b, c, d) {
            return ou(d.document, a, b)
        }
        j(a) {
            return gn(a) || 0
        }
    };
    var iF = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Pc = c
        }
        xa(a) {
            return this.g ? CB(this.i, this.g, a, this.Pc) : BB(this.i, a, this.Pc)
        }
        ua() {
            return this.g ? 16 : 9
        }
    };
    var jF = class {
        constructor(a) {
            this.Wd = a
        }
        xa(a) {
            return JB(a.document, this.Wd)
        }
        ua() {
            return 11
        }
    };
    var kF = class {
        constructor(a) {
            this.rb = a
        }
        xa(a) {
            return GB(this.rb, a)
        }
        ua() {
            return 13
        }
    };
    var lF = class {
        xa(a) {
            return zB(a)
        }
        ua() {
            return 12
        }
    };
    var mF = class {
        constructor(a) {
            this.sc = a
        }
        xa() {
            return EB(this.sc)
        }
        ua() {
            return 2
        }
    };
    var nF = class {
        constructor(a) {
            this.g = a
        }
        xa() {
            return HB(this.g)
        }
        ua() {
            return 3
        }
    };
    var oF = class {
        xa() {
            return KB()
        }
        ua() {
            return 17
        }
    };
    var pF = class {
        constructor(a) {
            this.g = a
        }
        xa() {
            return DB(this.g)
        }
        ua() {
            return 1
        }
    };
    var qF = class {
        xa() {
            return zb(Jz)
        }
        ua() {
            return 7
        }
    };
    var rF = class {
        constructor(a) {
            this.Ze = a
        }
        xa() {
            return FB(this.Ze)
        }
        ua() {
            return 6
        }
    };
    var sF = class {
        constructor(a) {
            this.g = a
        }
        xa() {
            return IB(this.g)
        }
        ua() {
            return 5
        }
    };
    var tF = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        xa() {
            return Ha(LB, this.minWidth, this.maxWidth)
        }
        ua() {
            return 10
        }
    };
    var uF = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.m = a.l;
            this.g = a.m
        }
    };

    function vF(a) {
        var b = new wF;
        b.m = a;
        b.i.push(new pF(a));
        return b
    }

    function xF(a, b) {
        a.i.push(new rF(b));
        return a
    }

    function yF(a, b) {
        a.i.push(new mF(b));
        return a
    }

    function zF(a, b) {
        a.i.push(new sF(b));
        return a
    }

    function AF(a, b) {
        a.i.push(new nF(b));
        return a
    }

    function BF(a) {
        a.i.push(new qF);
        return a
    }

    function CF(a) {
        a.g.push(new lF);
        return a
    }

    function DF(a, b = 0, c, d) {
        a.g.push(new iF(b, c, d));
        return a
    }

    function EF(a, b = 0, c = Infinity) {
        a.g.push(new tF(b, c));
        return a
    }

    function FF(a) {
        a.g.push(new oF);
        return a
    }

    function GF(a, b = 0) {
        a.g.push(new kF(b));
        return a
    }

    function HF(a, b) {
        a.j = b;
        return a
    }
    var wF = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new uF(this)
        }
    };
    class hF {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.B || {};
            c.google_ad_client = a.Ud;
            c.google_ad_height = gn(b) || 0;
            c.google_ad_width = cn(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new OE;
            b = ai(b, 1, a.m);
            a.g && M(b, 2, a.g);
            c.google_rasc = hi(b);
            a.j && (c.google_adtest = "on");
            return new kp(["fsi_container"], c)
        }
    };
    var IF = dp(new ap(0, {})),
        JF = dp(new ap(1, {})),
        KF = a => a === IF || a === JF;

    function LF(a, b, c) {
        sn(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class MF {
        constructor() {
            this.g = new wn
        }
    };

    function NF(a, b) {
        b && (a.g.apv = O(b, 4), th(b, Hp, 23) && (a.g.sat = "" + Qh(J(b, Hp, 23), 1)));
        return a
    }

    function OF(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var PF = class extends ez {
        constructor(a) {
            super(a);
            this.g = {}
        }
        F(a) {
            this.g.a = a.join(",");
            return this
        }
        D(a) {
            null != a && (this.g.allp = a);
            return this
        }
        Tg(a) {
            if (a) {
                const b = [];
                for (const c of un(a))
                    if (0 < a.get(c).length) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.gb, d.fh].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Ec(a, this.g);
            return a
        }
    };

    function QF(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function RF(a, b, c, d = 30) {
        c.length <= d ? a[b] = SF(c) : (a[b] = SF(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function SF(a) {
        const b = 0 < a.length && "string" === typeof a[0];
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => la(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function TF(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function UF(a, b) {
        a.i.op = TF(b)
    }

    function VF(a, b, c) {
        RF(a.i, "fap", b);
        a.i.fad = TF(c)
    }

    function WF(a, b, c) {
        RF(a.i, "fmp", b);
        a.i.fmd = TF(c)
    }

    function XF(a, b, c) {
        RF(a.i, "vap", b);
        a.i.vad = TF(c)
    }

    function YF(a, b, c) {
        RF(a.i, "vmp", b);
        a.i.vmd = TF(c)
    }

    function ZF(a, b, c) {
        RF(a.i, "pap", b);
        a.i.pad = TF(c)
    }

    function $F(a, b, c) {
        RF(a.i, "pmp", b);
        a.i.pmd = TF(c)
    }

    function aG(a, b) {
        RF(a.i, "psq", b)
    }
    var bG = class extends PF {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            0 < this.errors.length && (a.e = SF(this.errors));
            return a
        }
    };

    function cG(a, b, c) {
        const d = b.ba;
        sn(a.g, d) || a.g.set(d, new dG(To(pA(b)) ? ? ""));
        c(a.g.get(d))
    }

    function eG(a, b) {
        cG(a, b, c => {
            c.g = !0
        })
    }

    function fG(a, b) {
        cG(a, b, c => {
            c.i = !0
        })
    }

    function gG(a, b) {
        cG(a, b, c => {
            c.j = !0
        });
        a.G.push(b.ba)
    }

    function hG(a, b, c) {
        cG(a, b, d => {
            d.Qb = c
        })
    }

    function iG(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) KF(f.Qb ? ? "") ? ++e : (b = a.i.get(f.Qb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Rb: e
        }
    }

    function jG(a, b) {
        UF(b, a.i.wc());
        var c = vn(a.g).filter(f => 0 === (f.ub.startsWith(IF) ? 0 : 1)),
            d = vn(a.g).filter(f => 1 === (f.ub.startsWith(IF) ? 0 : 1)),
            e = iG(a, f => f.g, c);
        VF(b, e.list, e.Rb);
        e = iG(a, f => f.g, d);
        WF(b, e.list, e.Rb);
        e = iG(a, f => f.i, c);
        XF(b, e.list, e.Rb);
        e = iG(a, f => f.i, d);
        YF(b, e.list, e.Rb);
        c = iG(a, f => f.j, c);
        ZF(b, c.list, c.Rb);
        d = iG(a, f => f.j, d);
        $F(b, d.list, d.Rb);
        aG(b, a.G.map(f => a.g.get(f) ? .Qb).map(f => a.i.get(f) ? ? null))
    }

    function kl() {
        var a = w(kG);
        if (!a.m) return $k();
        const b = il(hl(gl(fl(el(dl(cl(bl(Zk(Yk(new al, a.m ? ? []), a.F ? ? []), a.v), a.D), a.C), a.K), a.P), a.A ? ? 0), vn(a.g).map(c => {
            var d = new Xk;
            d = gi(d, 1, c.ub);
            var e = a.i.get(c.Qb ? ? "", -1);
            d = R(d, 2, e);
            d = bi(d, 3, c.g);
            return bi(d, 4, c.i)
        })), a.G.map(c => a.g.get(c) ? .Qb).map(c => a.i.get(c) ? ? -1));
        null != a.j && bi(b, 6, a.j);
        null != a.l && Fh(b, 13, Pg(a.l), "0");
        return b
    }
    var kG = class {
        constructor() {
            this.l = this.F = this.m = null;
            this.C = this.D = !1;
            this.j = null;
            this.P = this.v = this.K = !1;
            this.A = null;
            this.i = new wn;
            this.g = new wn;
            this.G = []
        }
    };
    class dG {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Qb = null;
            this.ub = a
        }
    };
    class lG {
        constructor(a = 0) {
            this.g = a
        }
    };
    class mG {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function nG(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function oG(a, b) {
        const c = a.F.filter(d => un(d.cd).every(e => d.cd.get(e) === b.get(e)));
        return 0 === c.length ? (a.i.push(19), null) : c.reduce((d, e) => d.cd.wc() > e.cd.wc() ? d : e, c[0])
    }

    function pG(a, b) {
        b = pA(b);
        if (null == b.g) return a.i.push(18), null;
        b = b.getValue();
        if (sn(a.j, b)) return a.j.get(b);
        var c = bp(b);
        c = oG(a, c);
        a.j.set(b, c);
        return c
    }
    var qG = class {
        constructor(a) {
            this.g = a;
            this.j = new wn;
            this.F = (J(a, iq, 2) ? .g() || []).map(b => {
                const c = bp(Q(b, 1)),
                    d = Uh(b, 2);
                return {
                    cd: c,
                    Lg: d,
                    ub: Q(b, 1)
                }
            });
            this.i = []
        }
        C() {
            const a = w(kG);
            var b = this.l();
            a.m = b;
            b = this.v();
            a.F = b;
            b = this.m();
            null != b && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.C = b;
            b = new wn;
            for (const c of J(this.g, iq, 2) ? .g() ? ? []) b.set(Q(c, 1), Uh(c, 2));
            a.i = b
        }
        A() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        v() {
            return [...yh(this.g, 4, Ng, 2, void 0, void 0, 0)]
        }
        m() {
            return J(this.g, cq, 5) ? .g() ? ? null
        }
        D(a) {
            const b = pG(this,
                a);
            null != b ? .ub && hG(w(kG), a, b.ub)
        }
        G(a) {
            const b = B(ss) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new Lo(a)).filter(d => {
                d = pG(this, d) ? .ub || "";
                return "" != d && !(d === IF || d === JF)
            });
            return b <= c.g.length / a.length
        }
    };

    function rG(a, b) {
        return 0 == b.g.length ? b : b.sort((c, d) => (pG(a.g, c) ? .Lg ? ? Number.MAX_VALUE) - (pG(a.g, d) ? .Lg ? ? Number.MAX_VALUE))
    }

    function sG(a, b) {
        var c = b.ga.g,
            d = Math,
            e = d.min;
        const f = b.ea(),
            g = b.ba.g();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? nG(f.parentElement) : nG(f));
        d = a.j;
        0 > d.g && (d.g = hn(d.i).scrollHeight || 0);
        d = d.g - b.ga.g;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.i;
        b = b.ea();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.g : 0)
    }

    function tG(a, b) {
        return 0 == b.g.length ? b : b.sort((c, d) => sG(a, c) - sG(a, d))
    }

    function uG(a, b) {
        return b.sort((c, d) => {
            const e = c.ba.D,
                f = d.ba.D;
            var g;
            null == e || null == f ? g = null == e && null == f ? sG(a, c) - sG(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class vG {
        constructor(a, b = 0, c = null) {
            this.j = new mG(a);
            this.i = new lG(b);
            this.g = c && new qG(c)
        }
    };

    function wG(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = Ko(e, f.xa(a.j), xG(f.ua(), c));
        f = e = e.apply(yB(a.j));
        for (const g of b.i) f = Ko(f, g.xa(a.j), Yo([yG(g.ua(), c), h => {
            d ? .g(h, g.ua())
        }]));
        switch (b.j) {
            case 1:
                f = tG(a.g, f);
                break;
            case 2:
                f = uG(a.g, f);
                break;
            case 3:
                const g = w(kG);
                f = rG(a.g, f);
                e.forEach(h => {
                    eG(g, h);
                    a.g.g ? .D(h)
                });
                f.forEach(h => fG(g, h))
        }
        b.m && (f = No(f, Qd(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        1 === b.g ? .length && LF(a.l, b.g[0], {
            gb: e.g.length,
            fh: f.g.length
        });
        return Mo(f)
    }
    class zG {
        constructor(a, b, c = 0, d = null) {
            this.i = new Lo(a);
            this.g = new vG(b, c, d);
            this.j = b;
            this.l = new MF
        }
        m() {
            this.i.forEach(a => {
                a.i && Pt(a.i);
                a.i = null
            })
        }
    }
    const xG = (a, b) => c => Oz(c, b, a),
        yG = (a, b) => c => Oz(c.ba, b, a);

    function AG(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = BG(CG(c), a);
                    break a;
                case 3:
                    a = BG(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = BG(e ? 1 == e.nodeType ? e : CG(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !DG(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !Ar(b) && 0 >= b.offsetWidth);
        return d
    }

    function BG(a, b) {
        if (!a) return !1;
        a = Ie(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function CG(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function DG(a) {
        return !!a.nextSibling || !!a.parentNode && DG(a.parentNode)
    };
    var EG = !kc && !gc();

    function FG(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (EG && a.dataset) {
            if (ic() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var GG = (a, b, c) => {
            if (!b) return null;
            const d = $d(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = gn(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        HG = a => {
            const b = a.document.body;
            var c = GG(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 <
                    d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (null == m || null == c ? 0 : m >= .9 * c && m <= 1.01 * c) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? GG(a, c.parentNode || b, c) : null
        },
        JG = a => {
            let b = 0;
            try {
                b |= an(a), ie() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), IG(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        IG = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == FG(a[b])) return !0;
            return !1
        };

    function KG(a) {
        const b = fn(a, !0),
            c = hn(a).scrollWidth,
            d = hn(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = mn(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let q = 0,
            v = 0,
            z = Infinity,
            A = Infinity,
            E = null;
        var I = WA({
            Nb: !1
        }, a);
        for (var x of I) {
            I = x.getBoundingClientRect();
            const N = b - (I.bottom + f);
            var G = void 0,
                K = void 0;
            if (x.className && Zb(x.className, "adsbygoogle-ablated-ad-slot")) {
                G = x.getAttribute("google_element_uid");
                K = a.google_sv_map;
                if (!G || !K ||
                    !K[G]) continue;
                G = (K = Zj(K[G])) ? K.height : 0;
                K = K ? K.width : 0
            } else if (G = I.bottom - I.top, K = I.right - I.left, 1 >= G || 1 >= K) continue;
            g.push(G);
            k.push(K);
            l.push(G * K);
            x.className && Zb(x.className, "google-auto-placed") ? (v += 1, x.className && Zb(x.className, "pedestal_container") && (E = G)) : (z = Math.min(z, N), n.push(I), q += 1, h.push(G), m.push(G * K));
            A = Math.min(A, N);
            p.push(I)
        }
        z = Infinity === z ? null : z;
        A = Infinity === A ? null : A;
        f = LG(n);
        p = LG(p);
        h = MG(b, h);
        n = MG(b, g);
        m = MG(b * c, m);
        x = MG(b * c, l);
        return new NG(a, {
            ai: e,
            Se: b,
            Si: c,
            Ri: d,
            Ii: q,
            uh: v,
            xh: OG(g),
            yh: OG(k),
            wh: OG(l),
            Ni: f,
            Mi: p,
            Li: z,
            Ki: A,
            me: h,
            ke: n,
            rh: m,
            qh: x,
            Ui: E
        })
    }

    function PG(a, b, c, d) {
        const e = ie() && !(900 <= cn(a.i));
        d = Va(d, f => Za(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.ai,
            pg_h: QG(a.g.Se),
            pg_w: QG(a.g.Si),
            pg_hs: QG(a.g.Ri),
            c: QG(a.g.Ii),
            aa_c: QG(a.g.uh),
            av_h: QG(a.g.xh),
            av_w: QG(a.g.yh),
            av_a: QG(a.g.wh),
            s: QG(a.g.Ni),
            all_s: QG(a.g.Mi),
            b: QG(a.g.Li),
            all_b: QG(a.g.Ki),
            d: QG(a.g.me),
            all_d: QG(a.g.ke),
            ard: QG(a.g.rh),
            all_ard: QG(a.g.qh),
            pd_h: QG(a.g.Ui),
            dt: e ? "m" : "d"
        }
    }
    class NG {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function OG(a) {
        return Kd.apply(null, Va(a, b => 0 < b)) || null
    }

    function MG(a, b) {
        return 0 >= a ? null : Jd.apply(null, b) / a
    }

    function LG(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function QG(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function RG(a, b) {
        b = (gn(b) || 0) - mn(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            dB(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function SG(a) {
        const b = {};
        var c = YA({
            Nb: !1,
            od: !1,
            pd: !1,
            qd: !1
        }, a).map(d => d.getBoundingClientRect()).filter(dB);
        b.wf = c.length;
        c = ZA({
            pd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(dB);
        b.Xf = c.length;
        c = ZA({
            qd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(dB);
        b.Cg = c.length;
        c = ZA({
            od: !0
        }, a).map(d => d.getBoundingClientRect()).filter(dB);
        b.Bf = c.length;
        c = (gn(a) || 0) - mn(a);
        c = YA({
            Nb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(dB).filter(Ga(TG, null, c));
        b.xf = c.length;
        a = KG(a);
        c = null != a.g.me ? a.g.me : null;
        null !=
            c && (b.tg = c);
        a = null != a.g.ke ? a.g.ke : null;
        null != a && (b.yf = a);
        return b
    }

    function $E(a, b, {
        yd: c,
        Vd: d,
        ee: e
    } = {}) {
        return wu(997, () => UG(a, b, {
            yd: c,
            Vd: d,
            ee: e
        }), a.g)
    }

    function aF(a, b, c, d) {
        var e = c.zb ? c.zb : a.A;
        const f = JA(e, b.g.length);
        e = a.j.zf ? e.g : void 0;
        const g = FF(GF(CF(EF(DF(BF(zF(AF(xF(yF(vF(c.types), a.aa), c.Ze || []), a.V), c.hj || [])), f.Gc || void 0, e, b), c.minWidth, c.maxWidth)), f.rb || void 0));
        a.P && g.g.push(new jF(a.P));
        b = 1;
        a.j.nf ? b = 2 : a.Va() && (b = 3);
        HF(g, b);
        a.j.ff && (g.l = !0);
        return wu(995, () => wG(a.i, g.build(), d, a.v || void 0), a.g)
    }

    function cF(a, b) {
        const c = HG(a.g);
        if (c) {
            const d = jp(a.G, b),
                e = lu(a.g.document, a.D, null, null, {}, d);
            e && (St(e.kb, c, 2, 256), wu(996, () => VG(a, e, d), a.g))
        }
    }

    function WG(a) {
        return a.C ? a.C : a.C = a.g.google_ama_state
    }

    function UG(a, b, {
        yd: c,
        Vd: d,
        ee: e
    } = {}) {
        const f = b.ba;
        if (f.m) return !1;
        var g = b.ea(),
            h = f.g();
        if (!AG(a.g, h, g, a.l)) return !1;
        h = null;
        f.Bc ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new kp(null, {
            google_max_responsive_height: null == c ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = null == c ? null : new kp(null, {
            google_max_responsive_height: c
        });
        c = lp(H(f.Nd, 2) || 0);
        g = mp(f.D);
        const k = XG(a, f),
            l = YG(a),
            m = jp(a.G, f.P ? f.P.g(b.ga) : null, h, d || null, c, g, k, l),
            n = b.fill(a.D, m);
        if (e && !ZG(a, n, m) || !wu(996,
                () => VG(a, n, m), a.g)) return !1;
        mj(9, [f.D, f.Ob]);
        a.Va() && gG(w(kG), b);
        return !0
    }

    function XG(a, b) {
        return To(Vo(nA(b).map(np), () => {
            a.m.push(18)
        }))
    }

    function YG(a) {
        if (!a.Va()) return null;
        var b = a.i.g.g ? .v();
        if (null == b) return null;
        b = b.join("~");
        a = a.i.g.g ? .m() ? ? null;
        return op({
            Sh: b,
            gi: a
        })
    }

    function ZG(a, b, c) {
        if (!b) return !1;
        var d = b.sa,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.sa;
        c = c && c.yc() || {};
        if (d !== d.top) var g = Fe(d) ? 3 : 16;
        else if (488 > cn(d))
            if (d.innerHeight >= d.innerWidth)
                if (g = cn(d), !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = cn(d); h; h = h.parentElement) {
                            const k = Ie(h, d);
                            if (!k) continue;
                            const l = Se(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !==
            g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Ie(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = cn(d), f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.sa;
            if (f = hu(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", fu(b, f, "0px"), b.style.width = cn(a) + "px", iu(a, b, f), b.style.zIndex = 30;
            return !0
        }
        Pt(b.kb);
        return !1
    }

    function VG(a, b, c) {
        if (!b) return !1;
        try {
            pu(a.g, b.sa, c)
        } catch (d) {
            return Pt(b.kb), a.m.push(6), !1
        }
        return !0
    }
    class $G {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.i = a;
            this.D = b;
            this.g = c;
            this.A = d.zb;
            this.aa = d.sc || [];
            this.G = d.hi || null;
            this.V = d.Vh || [];
            this.P = d.Wd || [];
            this.j = e;
            this.l = !1;
            this.K = [];
            this.m = [];
            this.F = this.C = void 0;
            this.Ba = f;
            this.v = g ? new LE : null
        }
        ra() {
            return this.i
        }
        X() {
            return this.g
        }
        ta(a) {
            this.K.push(a)
        }
        Va() {
            if (0 == (this.i.g.g ? .l().length ? ? 0)) return !1;
            if (0 == (B(ss) || 0)) return !0;
            if (void 0 === this.F) {
                const a = HF(CF(BF(vF([0, 1, 2]))), 1).build(),
                    b = wu(995, () => wG(this.i, a), this.g);
                this.F = this.i.g.g ? .G(b) || !1
            }
            return this.F
        }
        Fe() {
            return !!this.j.Pg
        }
        wd() {
            return !IG(this.g)
        }
        la() {
            return this.v
        }
    }
    const TG = (a, b) => b.top <= a;

    function aH(a, b, c, d, e, f = 0, g = 0) {
        this.Oa = a;
        this.Id = f;
        this.Hd = g;
        this.errors = b;
        this.wb = c;
        this.g = d;
        this.i = e
    };
    var bH = (a, {
        wd: b = !1,
        Fe: c = !1,
        kj: d = !1,
        Va: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !y(Qr);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !y(Qr) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function cH(a, b, c) {
        a = bH(a, {
            wd: b.wd(),
            Fe: b.Fe(),
            kj: !!b.j.xe,
            Va: b.Va()
        });
        return new dH(a, b, c)
    }

    function eH(a, b) {
        const c = XE[b];
        return c ? wu(998, () => c(a.g), a.m) : (a.g.ta(12), !0)
    }

    function fH(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(eH(a, b))
            })
        })
    }

    function gH(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => fH(a, b))).then(b => {
            b.includes(!1) && a.g.ta(5);
            a.i.splice(0, a.i.length)
        })
    }
    class dH {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = $a(this.i, 1);
            this.g = b;
            this.m = c
        }
    };
    const hH = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function iH(a) {
        return gH(a).then(() => {
            var b = a.g.i.i.filter(Jz).g.length;
            var c = a.g.K.slice(0);
            var d = a.g;
            d = [...d.m, ...(d.i.g.g ? .A() || [])];
            b = new aH(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(Jz).filter(Kz).g.length, a.g.i.i.filter(Kz).g.length);
            return new hH(b)
        })
    };
    class jH {
        g() {
            return new kp([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class kH {
        g() {
            return new kp(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function lH(a) {
        return Br(a.g.document).map(b => {
            const c = new Cz(b, 3);
            b = new Ez(ru(a.g, b));
            return new Iz(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class mH {
        constructor(a) {
            var b = new kH;
            this.g = a;
            this.i = b || null
        }
    };
    const nH = {
        lf: "10px",
        ce: "10px"
    };

    function oH(a) {
        return rn(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Iz(new Cz(b, 1), new Az(nH), a.i, !1, 0, [], null, a.g, null))
    }
    class pH {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function qH(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(la(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        RF(a.i, "cnstr", c, 80)
    }
    var rH = class extends ez {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function sH(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function tH(a, b, c) {
        const d = sH(c.kd, "gapsMeasurementWindow") || sH(c.vc, "gapsPerMeasurementWindow") || sH(c.Dc, "maxGapsToReport");
        return null != d ? Ro(Error(d)) : c.Af || -1 != c.vc || -1 != c.Dc ? Po(new uH(a, b, c)) : Ro(Error("ShouldHaveLimits"))
    }

    function vH(a) {
        return WG(a.j) && WG(a.j).placed || []
    }

    function wH(a) {
        return vH(a).map(b => Co(Ao(b.element, a.g)))
    }

    function xH(a) {
        return vH(a).map(b => b.index)
    }

    function yH(a, b) {
        const c = b.ba;
        return !a.v && c.l && null != H(c.l, 8) && 1 == H(c.l, 8) ? [] : c.m ? (c.V || []).map(d => Co(Ao(d, a.g))) : [Co(new Bo(b.ga.g, 0))]
    }

    function zH(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new Bo(c, f - c)), c = d)
        }
        return b
    }

    function AH(a, b) {
        b = b.map(c => {
            var d = new DE;
            d = ci(d, 1, c.g);
            c = c.getHeight();
            return ci(d, 2, c)
        });
        return FE(EE(new GE, a), b)
    }

    function BH(a) {
        const b = L(a, DE, 2).map(c => `G${Th(c,1)}~${c.getHeight()}`);
        return `W${Th(a,1)}${b.join("")}`
    }

    function CH(a, b) {
        const c = [];
        let d = 0;
        for (const e of un(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.C || f.splice(a.m, f.length);
            !a.A && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(AH(e, f));
            d += f.length;
            if (!a.A && d >= a.i) break
        }
        return c
    }

    function DH(a) {
        const b = L(a, GE, 5).map(c => BH(c));
        return `M${Th(a,1)}H${Th(a,2)}C${Th(a,3)}B${Number(!!P(a,4))}${b.join("")}`
    }

    function EH(a) {
        var b = sA(Mo(a.j.i.i), a.g),
            c = wH(a),
            d = new xn(xH(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = yH(a, b[e]);
                c.push(...f)
            }
        c.push(new Bo(0, 0));
        c.push(Co(new Bo(hn(a.g).scrollHeight, 0)));
        b = zH(c);
        c = new wn;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.D ? 0 : Math.floor(e.g / a.l), sn(c, f) || c.set(f, []), c.get(f).push(e);
        b = CH(a, c);
        c = new HE;
        c = ci(c, 1, a.i);
        c = ci(c, 2, a.l);
        c = ci(c, 3, a.m);
        a = ai(c, 4, a.v);
        return Nh(a, 5, b)
    }

    function FH(a) {
        a = EH(a);
        return DH(a)
    }
    var uH = class {
        constructor(a, b, c) {
            this.D = -1 == c.kd;
            this.l = c.kd;
            this.C = -1 == c.vc;
            this.m = c.vc;
            this.A = -1 == c.Dc;
            this.i = c.Dc;
            this.v = c.kg;
            this.j = b;
            this.g = a
        }
    };
    const GH = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function HH(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        kz("ama", b, .01)
    }

    function IH(a) {
        const b = {};
        Ke(GH, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };
    const JH = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        KH = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var LH = (a, b) => {
            a = yh(a, 2, Cg, 2);
            if (!a) return !1;
            for (let c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        NH = (a, b) => {
            a = KH(JH(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Me(a),
                d = MH(a);
            return b.find(e => {
                const f = th(e, yp, 7) ? Gg(H(J(e, yp, 7), 1)) : Gg(H(e, 1));
                e = th(e, yp, 7) ? Rh(J(e, yp, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const MH = a => {
        const b = {};
        for (;;) {
            b[Me(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var OH = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                HH(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            HH(a, {
                lserr: 1
            })
        }
    };

    function PH(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function QH(a, b) {
        a = PH(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function RH() {
        if (SH) return SH;
        const a = zj() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? SH = b : a.google_persistent_state_async = SH = new TH
    }

    function UH(a, b, c) {
        b = VH[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Z(a, b, c) {
        return UH(a, b, () => c)
    }

    function WH(a, b, c) {
        return a.S[VH[b] || `google_ps_${b}`] = c
    }

    function XH(a, b) {
        return WH(a, b, Z(a, b, 0) + 1)
    }

    function YH() {
        var a = RH();
        return Z(a, 20, {})
    }

    function ZH() {
        var a = RH();
        const b = Z(a, 31, !1);
        b || WH(a, 31, !0);
        return !b
    }

    function $H() {
        var a = RH();
        return Z(a, 26)
    }

    function aI() {
        var a = RH();
        return Z(a, 28, [])
    }

    function bI() {
        var a = RH();
        return UH(a, 39, cI)
    }
    var TH = class {
            constructor() {
                this.S = {}
            }
        },
        SH = null;
    const VH = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var dI = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            asptt: "asptt",
            asro: "asro",
            asiscm: "asiscm",
            sugawps: "aseaascu",
            asla: "aslmt",
            asaa: "asamt",
            sedf: "asedf",
            sefa: "asefa",
            seiel: "aseiel",
            slcwct: "aslcwct",
            sacwct: "asacwct",
            slmct: "aslmct",
            samct: "asamct",
            vmsli: "itsi"
        },
        eI = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        fI = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        gI = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function Fm(a, b) {
        0 < a.g.size || hI(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function iI(a, b, c, d) {
        Hb(b, c, d);
        Gn(a, () => Ib(b, c, d))
    }

    function jI(a, b) {
        1 !== a.j && (a.j = 1, 0 < a.g.size && kI(a, b))
    }

    function hI(a) {
        a.win.document.visibilityState ? iI(a, a.win.document, "visibilitychange", b => {
            "hidden" === a.win.document.visibilityState && jI(a, b);
            "visible" === a.win.document.visibilityState && (a.j = 0)
        }) : "onpagehide" in a.win ? (iI(a, a.win, "pagehide", b => {
            jI(a, b)
        }), iI(a, a.win, "pageshow", () => {
            a.j = 0
        })) : iI(a, a.win, "beforeunload", b => {
            jI(a, b)
        })
    }

    function kI(a, b) {
        for (let c = 9; 0 <= c; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var lI = class extends U {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function mI(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function nI(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = hf(a.win)
    }

    function oI(a) {
        var b = a.g.wpc;
        if (null === b || "" === b) {
            b = a.g;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = PH(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !Xj() ? eI : fI;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = gI(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function pI(a, b) {
        var c = new rm,
            d = nI(a);
        c = R(c, 1, d).ac(oI(a));
        c = R(c, 3, a.g.sd);
        return R(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function qI(a) {
        await mI(a.win, () => !(!nI(a) || !oI(a)))
    }
    async function rI(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await qI(a);
            var e = a.qa;
            a = pI(a, d);
            d = new yl;
            b = S(d, 1, b);
            c = Eh(b, 2, c, Dg);
            c = Mh(a, 9, sm, c);
            Bm(e, c)
        }
    }
    async function sI(a, b) {
        await qI(a);
        var c = pI(a);
        b = Mh(c, 5, sm, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), Bm(a.qa, b))
    }
    async function tI(a, b, c) {
        await qI(a);
        var d = a.qa;
        a = pI(a, c);
        a = R(a, 3, 1);
        b = Mh(a, 6, sm, b);
        Bm(d, b)
    }
    async function uI(a, b) {
        if (a.i) {
            await qI(a);
            var c = a.qa;
            a = pI(a);
            b = Mh(a, 11, sm, b);
            Bm(c, b)
        }
    }
    var vI = class {
        constructor(a, b) {
            this.win = zj() || window;
            this.j = b ? ? new lI(this.win);
            this.qa = a ? ? new Hm("m202312060101", 100, 100, !0, this.j);
            this.g = UH(RH(), 33, () => {
                const c = B(Ir);
                return {
                    sd: c,
                    ssp: 0 < c && Je() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null
                }
            })
        }
        get i() {
            return this.g.ssp
        }
        get bd() {
            return this.g.cu
        }
        set bd(a) {
            this.g.cu = a
        }
    };
    var xI = (a, b, c, d, e, f = null, g = null) => {
            wI(a, new oz(a), b, c, d, e, f, g)
        },
        wI = (a, b, c, d, e, f, g = null, h = null) => {
            if (c)
                if (d) {
                    var k = fC(d, e);
                    try {
                        const l = new yI(a, b, c, d, e, k, f, g, h);
                        wu(990, () => zI(l), a)
                    } catch (l) {
                        lj() && mj(15, [l]), nz(b, tq, dz(OF(NF((new PF(0)).ac(c), d), k).ta(1), l)), sI(w(vI), ol(new xl, Ik(1)))
                    }
                } else nz(b, tq, (new PF(0)).ac(c).ta(8)), sI(w(vI), ol(new xl, Ik(8)));
            else nz(b, tq, (new PF(0)).ta(9)), sI(w(vI), ol(new xl, Ik(9)))
        };

    function zI(a) {
        a.C.forEach(b => {
            switch (b) {
                case 0:
                    wu(991, () => AI(a), a.g);
                    break;
                case 1:
                    wu(1073, () => {
                        const c = y(ks);
                        ZB(new eC(a.g, a.v, a.i, a.m, a.j.U, c))
                    }, a.g);
                    break;
                case 5:
                    wu(1137, () => {
                        qz(new rz(a.g, a.v, a.i, a.m))
                    }, a.g);
                    break;
                case 2:
                    BI(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    wu(1203, () => {
                        var c = J(a.i, bq, 34);
                        if (c) {
                            var d = a.g,
                                e = a.m,
                                f = c.i();
                            c = J(f, aq, 1) ? .g() ? ? [];
                            c = new BE(e, d.location.hostname, hf(t), c);
                            const k = J(f, aq, 1);
                            if (k)
                                if (f = J(f, $p, 2)) {
                                    Eo(d, iE);
                                    const l = new Cn;
                                    var g = d.innerWidth;
                                    var h = .375 * g;
                                    g = new Dx(h,
                                        g - h);
                                    h = d.innerWidth;
                                    h = 900 <= cn(d) ? .2 * h : .5 * h;
                                    uE(new wE(d, e, k, f, new bE(d, g, h, l, new MD(l)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function AI(a) {
        if (kq(a.i) && 1 === Rh(kq(a.i), 1)) {
            var b = J(kq(a.i), pp, 6);
            b && 2 === H(b, 1) && (qu(a.g), a.A = "b")
        }
        var c = y(Sr) ? void 0 : a.j.Yi;
        b = null;
        b = y(Sr) ? IA(a.g) : GA(a.g, c);
        if (a.j.U && th(a.j.U, xp, 10)) {
            var d = wh(a.j.U.g(), 1);
            null !== d && void 0 !== d && (b = xA(a.g, d, c));
            y(is) && 2 === a.j.U.g() ? .g() && (b = FA(a.j.U.g(), b))
        }
        th(a.i, up, 26) && (b = KA(b, J(a.i, up, 26), a.g));
        b = MA(b, a.g);
        c = a.j.U ? yh(a.j.U, 6, Cg, 2) : [];
        d = a.j.U ? L(a.j.U, Dp, 5) : [];
        const e = a.j.U ? yh(a.j.U, 2, Cg, 2) : [],
            f = wu(993, () => {
                var g = a.i,
                    h = L(g, Yp, 1),
                    k = a.j.U && LH(a.j.U, 1);
                k = y(qs) ? "" :
                    k ? "text_image" : "text";
                var l = new jH,
                    m = Hz(h, a.g, {
                        Ah: l,
                        Ai: new Fz(k)
                    });
                h.length != m.length && a.F.push(13);
                m = m.concat(oH(new pH(a.g, l)));
                h = 0;
                l = y(fs);
                var n = !1;
                if (kq(g) && 1 === Rh(kq(g), 1)) {
                    var p = J(kq(g), pp, 6);
                    p && (h = Ph(p, 2) || 0, 1 === H(p, 1) && (n = !0))
                }
                p = J(g, jq, 24) ? .j() ? .g() ? .g() || !1;
                if (l || n || p) l = lH(new mH(a.g)), n = w(kG), m = m.concat(l), n.K = !0, n.A = l.length, "n" === a.A && (a.A = J(g, jq, 24) ? .g() ? .length ? "o" : "p");
                l = y(is) && 2 === a.j.U.g() ? .g() && a.j.U.g() ? .j();
                l = y(Nr) || l;
                a: {
                    if (n = J(g, Up, 6))
                        for (q of n.g())
                            if (th(q, $o, 4)) {
                                var q = !0;
                                break a
                            }
                    q = !1
                }
                l && q ? (q = m.concat, l = a.g, (n = J(g, Up, 6)) ? (l = kA(n.g(), l), k = CE(g, k, l)) : k = [], k = q.call(m, k)) : (q = m.concat, l = a.g, (n = J(g, Up, 6)) ? (l = jA(n.g(), l), k = CE(g, k, l)) : k = [], k = q.call(m, k));
                m = k;
                g = J(g, jq, 24);
                return new zG(m, a.g, h, g)
            }, a.g);
        a.l = new $G(f, a.m, a.g, {
            zb: b,
            hi: a.K,
            sc: a.j.sc,
            Vh: c,
            Wd: d
        }, CI(a), e, y(es));
        WG(a.l) ? .optimization ? .ablatingThisPageview && !a.l.Va() && (qu(a.g), w(kG).v = !0, a.A = "f");
        a.D = cH(e, a.l, a.g);
        wu(992, () => iH(a.D), a.g).then(wu(994, () => a.aa.bind(a), a.g), a.V.bind(a))
    }

    function BI(a) {
        const b = J(a.i, Zp, 18);
        b && cD(new dD(a.g, new KD(a.g, a.m), b, new $u(a.g), L(a.i, Yp, 1)))
    }

    function CI(a) {
        const b = y(hs);
        if (!lq(a.i)) return {
            ff: b,
            nf: !1,
            Rf: !1,
            bh: !1,
            Yf: !1,
            Pg: !1,
            Vi: 0,
            Jg: 0,
            zf: DI(a),
            xe: a.G
        };
        const c = lq(a.i);
        return {
            ff: b || P(c, 14, !1),
            nf: P(c, 2, !1),
            Rf: P(c, 3, !1),
            bh: P(c, 4, !1),
            Yf: P(c, 5, !1),
            Pg: P(c, 6, !1),
            Vi: Sh(wh(c, 8)),
            Jg: H(c, 10),
            zf: DI(a),
            xe: a.G
        }
    }

    function DI(a) {
        return y(Yr) || y(is) && 2 === a.j.U ? .g() ? .g() ? !1 : a.j.U && th(a.j.U, xp, 10) ? .5 <= (wh(a.j.U.g(), 1) || 0) : !0
    }

    function EI(a, b) {
        for (var c = cz(cz(new PF(b.Oa), b.errors), a.F), d = b.wb, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.v.length; g++)
                if (c.v[g] == f) break a;c.v.push(f)
        }
        c.g.pp = b.Hd;
        c.g.ppp = b.Id;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.nc;
        c.g.eatfAbg = b.oc;
        c.g.reatf = b.Lb;
        c = OF(NF(c.F(a.D.l.slice(0)), a.i), a.C).ac(a.m);
        if (d = b.Ca) c.g.as_count = d.wf, c.g.d_count = d.Xf, c.g.ng_count = d.Cg, c.g.am_count = d.Bf, c.g.atf_count = d.xf, c.g.mdns = QF(d.tg), c.g.alldns = QF(d.yf);
        c = c.D(b.Wb).Tg(b.jd);
        d = b.Se;
        null != d && (c.g.pgh = d);
        c.g.abl =
            b.fg;
        c.g.rr = a.A;
        void 0 !== b.exception && dz(c, b.exception).ta(1);
        return c
    }

    function FI(a, b) {
        var c = EI(a, b);
        nz(a.v, 0 < b.errors.length || 0 < a.F.length || void 0 !== b.exception ? tq : sq, c);
        if (J(a.i, jq, 24)) {
            a.l.i.g.g ? .C();
            b = WG(a.l);
            const d = w(kG);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.D = !0);
            d.P = !!b ? .optimization ? .availableAbg;
            b = w(kG);
            c = new bG(c);
            b.m ? (c.i.sl = SF(b.m ? ? []), c.i.daaos = SF(b.F ? ? []), c.i.ab = TF(b.D), c.i.rr = TF(b.K), c.i.oab = TF(b.C), null != b.j && (c.i.sab = TF(b.j)), b.v && (c.i.fb = TF(b.v)), c.i.ls = TF(b.P), UF(c, b.i.wc()), null != b.A && (c.i.rp = TF(b.A)),
                null != b.l && (c.i.expl = TF(b.l)), jG(b, c)) : c.errors.push("irr");
            nz(a.v, vq, c)
        }
        c = a.l ? .la();
        y(es) && null != c && (c = new Map([...c.j.map.entries()].map(UD)), b = new rH, qH(b, c), nz(a.v, zq, b))
    }

    function GI(a, b) {
        const c = w(vI);
        if (c.i) {
            var d = new xl,
                e = b.wb.filter(g => null !== g),
                f = a.F.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            sl(ql(vl(ul(tl(rl(ll(nl(pl(ml(d, a.D.l.slice(0).map(g => {
                var h = new Hk;
                return rh(h, 1, Bg(g))
            })), e.map(g => {
                var h = new Kk;
                return rh(h, 1, Bg(g))
            })), f.map(g => Ik(g))), J(a.i, Hp, 23) ? .g()), b.Oa).D(b.Wb), b.Lb), b.nc), b.oc), a.C.map(g => g.toString())), Rk(Qk(Pk(Ok(Nk(Mk(Lk(new Sk, b.Ca ? .wf), b.Ca ? .Xf), b.Ca ? .Cg), b.Ca ? .Bf), b.Ca ? .xf), b.Ca ? .tg), b.Ca ? .yf));
            if (b.jd)
                for (let g of un(b.jd)) {
                    e =
                        new Dh;
                    for (let h of b.jd.get(g)) Wk(e, Uk(Tk(new Vk, h.gb), h.fh));
                    wl(d).set(g.toString(), e)
                }
            J(a.i, jq, 24) && jl(d);
            sI(c, d)
        }
    }

    function HI(a) {
        return kq(a.i) && 1 === Rh(kq(a.i), 1) ? !(J(kq(a.i), pp, 6) && 1 <= (Ph(J(kq(a.i), pp, 6), 3) || 0)) : !1
    }

    function II(a) {
        if (HI(a)) {
            a = a.l;
            var b = ZA({
                pd: !0,
                qd: !0
            }, a.g);
            a = 0 < RG(b, a.g)
        } else a = a.l.g, b = YA({
            Nb: !1,
            od: !1
        }, a), a = 0 < RG(b, a);
        return a
    }

    function JI(a, b) {
        try {
            y(Pr) && a.l ? .ra() ? .m()
        } catch (c) {
            nz(a.v, yq, dz(OF(NF((new PF(b)).ac(a.m), a.i), a.C).ta(14), c))
        }
    }

    function KI(a, b, c) {
        {
            var d = WG(a.l),
                e = b.g;
            const f = e.g,
                g = e.Hd;
            let h = e.Oa,
                k = e.Id,
                l = e.errors.slice(),
                m = e.wb.slice(),
                n = b.exception;
            const p = PH(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.D.j && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Oa: h,
                Hd: g,
                Id: k,
                Wb: f,
                errors: e.errors.slice(),
                wb: m,
                exception: n,
                Lb: c,
                nc: !!d.eatf,
                oc: !!d.eatfAbg,
                fg: p
            }) : (m.push(12), a.D.j && m.push(13), c = {
                Oa: h,
                Hd: g,
                Id: k,
                Wb: f,
                errors: l,
                wb: m,
                exception: n,
                Lb: c,
                nc: !1,
                oc: !1,
                fg: p
            })
        }
        c.Ca = SG(a.l.g);
        if (b = b.g.i) c.jd = b;
        c.Se = hn(a.g).scrollHeight;
        if (lj() || J(a.i, Gp, 25) ? .j()) {
            d = Mo(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.G;
                for (const g of un(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Lz(f),
                    position: f.g(),
                    clearBoth: f.F,
                    locationType: f.Ob,
                    placed: f.m,
                    placementProto: f.l ? f.l.toJSON() : null,
                    articleStructure: f.v ? f.v.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            mj(14, [{
                placementIdentifiers: b
            }, a.l.D, c.Ca])
        }
        return c
    }

    function LI(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Wb;
        c.numAutoAdsPlaced = b.Oa;
        c.hasAtfAd = b.Lb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.l && (a = tH(a.g, a.l, {
            kd: -1,
            vc: -1,
            Dc: -1,
            kg: !0,
            Af: !0
        }), null != a.g ? (c.placementPositionDiffs = FH(a.getValue()), b = EH(a.getValue()), a = new IE, a = Mh(a, 2, JE, b), c.placementPositionDiffsReport = hi(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new IE, a = Gh(a, 1, JE, Rg(b)), c.placementPositionDiffsReport = hi(a)))
    }

    function MI(a, b) {
        FI(a, {
            Oa: 0,
            Wb: void 0,
            errors: [],
            wb: [],
            exception: b,
            Lb: void 0,
            nc: void 0,
            oc: void 0,
            Ca: void 0
        });
        GI(a, {
            Oa: 0,
            Wb: void 0,
            errors: [],
            wb: [],
            exception: b,
            Lb: void 0,
            nc: void 0,
            oc: void 0,
            Ca: void 0
        })
    }
    class yI {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.g = a;
            this.v = b;
            this.m = c;
            this.i = d;
            this.j = e;
            this.C = f;
            this.K = h || null;
            this.F = [];
            this.G = k;
            this.P = g;
            this.A = "n"
        }
        runAutoGames() {
            const a = J(this.i, Ip, 32);
            a && this.P.runAutoGames({
                win: this.g,
                webPropertyCode: this.m,
                Hf: a,
                Ib: (J(this.i, Rp, 33) ? .g() ? .i() ? ? null) || Pp().i()
            })
        }
        aa(a) {
            try {
                JI(this, a.g.Oa);
                const b = II(this) || HI(this) ? II(this) : void 0;
                rq({
                    qe: b
                }, this.g);
                const c = KI(this, a, II(this));
                th(this.i, Gp, 25) && xh(J(this.i, Gp, 25), 1) && LI(this, c);
                FI(this, c);
                GI(this, c);
                jz(753, () => {
                    if (y(Tr) &&
                        null != this.l) {
                        var d = tH(this.g, this.l, {
                                kd: B(ds),
                                vc: B(cs),
                                Dc: B(Vr),
                                kg: !0,
                                Af: !1
                            }),
                            e = Cc(c);
                        null != d.g ? (d = FH(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = EI(this, e);
                        nz(this.v, uq, e)
                    }
                })()
            } catch (b) {
                MI(this, b)
            }
        }
        V(a) {
            JI(this, 0);
            MI(this, a)
        }
    };
    var NI = class extends T {},
        OI = ni(NI);

    function PI(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? So(() => OI(c)) : Po(null)
    };

    function QI(a, b) {
        return ai(a, 5, b)
    }
    var RI = class extends T {
        constructor() {
            super()
        }
        g() {
            return P(this, 6)
        }
    };
    RI.L = [10];
    var UI = ({
        win: a,
        ud: b,
        ig: c = !1,
        jg: d = !1
    }) => SI({
        win: a,
        ud: b,
        ig: c,
        jg: d
    }) ? (b = Z(RH(), 24)) ? TI(a, QI(new RI, zD(b))) : Ro(Error("tcunav")) : TI(a, QI(new RI, !0));

    function SI({
        win: a,
        ud: b,
        ig: c,
        jg: d
    }) {
        if (!(d = !d && DD(new HD(a)))) {
            if (c = !c) {
                if (b) {
                    a = PI(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != H(a, 1)) b: switch (a = H(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else lz(806, a.i), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function TI(a, b) {
        return (a = Ri(b, a)) ? Po(a) : Ro(Error("unav"))
    };
    var VI = class extends T {};
    class WI {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.v = c;
            this.i = !1;
            this.j = d;
            this.m = e
        }
    };
    class XI {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.g = b
            })
        }
    };

    function YI() {
        const {
            promise: a,
            resolve: b
        } = new XI;
        return {
            promise: a,
            resolve: b
        }
    };

    function ZI(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = YI();
        b[a] = d;
        c();
        return d
    }

    function $I(a, b, c) {
        return ZI(a, b, () => {
            Ge(b.document, c)
        }).promise
    };
    var aJ = class {
        constructor(a) {
            this.eb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Hf: c,
            Ib: d
        }) {
            mz(1116, $I(12, a, this.eb).then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: hi(c),
                    serializedFloatingToolbarMessages: hi(d)
                })
            }))
        }
    };
    var bJ = {
            xk: "google_ads_preview",
            el: "google_mc_lab",
            Al: "google_anchor_debug",
            zl: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Wl: "google_scr_debug",
            Yl: "google_ia_debug_allow_onclick",
            wm: "googleads",
            kh: "google_pedestal_debug",
            Pm: "google_responsive_slot_preview",
            Om: "google_responsive_dummy_ad",
            mk: "google_audio_sense",
            qk: "google_auto_gallery",
            sk: "google_auto_storify_swipeable",
            rk: "google_auto_storify_scrollable",
            pk: "google_games_single_game",
            nk: "google_games_catalog"
        },
        cJ = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var dJ = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function eJ(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = fJ(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function fJ(a) {
        let b = "";
        Ke(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function gJ() {
        var a = t.location;
        let b = !1;
        Ke(bJ, c => {
            eJ(a, c) && (b = !0)
        });
        return b
    }

    function hJ(a, b) {
        switch (a) {
            case 1:
                return eJ(b, "google_ia_debug");
            case 2:
                return eJ(b, "google_bottom_anchor_debug");
            case 3:
                return eJ(b, "google_anchor_debug") || eJ(b, "googleads")
        }
    };

    function iJ({
        win: a,
        webPropertyCode: b,
        eb: c
    }) {
        eJ(a.location, "google_games_single_game") ? jJ(a, b, 1, c) : eJ(a.location, "google_games_catalog") && jJ(a, b, 2, c)
    }

    function jJ(a, b, c, d) {
        var e = new Ip;
        c = rh(e, 1, Bg(c));
        (new aJ(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Hf: c,
            Ib: Pp().i()
        })
    };
    var kJ = class extends T {
        constructor() {
            super()
        }
        ni() {
            return Vh(this, 3)
        }
    };
    const lJ = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var mJ = class extends T {
        constructor() {
            super()
        }
        getVersion() {
            return Th(this, 2)
        }
    };
    mJ.L = [3];

    function nJ(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function oJ(a) {
        return tf(2 > (a.length + 3) % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function pJ(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function qJ(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function rJ(a) {
        var b = oJ(a + "A"),
            c = pJ(b.slice(0, 6));
        a = pJ(b.slice(6, 12));
        var d = new mJ;
        c = di(d, 1, c);
        a = di(c, 2, a);
        b = b.slice(12);
        c = pJ(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === pJ(e[0]);
            e = e.slice(1);
            var g = sJ(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = qJ(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = sJ(e, b);
                g = qJ(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (0 <
            e.length) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Eh(a, 3, d, Dg)
    }

    function sJ(a, b) {
        const c = a.indexOf("11");
        if (-1 === c) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var tJ = class extends T {
        constructor() {
            super()
        }
    };
    var uJ = class extends T {
        constructor() {
            super()
        }
    };
    var vJ = class extends T {
        getVersion() {
            return Th(this, 1)
        }
    };
    var wJ = class extends T {
        constructor() {
            super()
        }
    };

    function xJ(a) {
        var b = new yJ;
        return M(b, 1, a)
    }
    var yJ = class extends T {
        constructor() {
            super()
        }
    };
    const zJ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        AJ = zJ.reduce((a, b) => a + b);
    var BJ = class extends T {
        constructor() {
            super()
        }
    };
    var CJ = class extends T {
        getVersion() {
            return Th(this, 1)
        }
    };
    var DJ = class extends T {
        constructor() {
            super()
        }
    };

    function EJ(a) {
        var b = new FJ;
        return M(b, 1, a)
    }
    var FJ = class extends T {
        constructor() {
            super()
        }
    };
    const GJ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        HJ = GJ.reduce((a, b) => a + b);
    var IJ = class extends T {
        constructor() {
            super()
        }
    };
    var JJ = class extends T {
        constructor() {
            super()
        }
    };
    var KJ = class extends T {
        getVersion() {
            return Th(this, 1)
        }
    };
    var LJ = class extends T {
        constructor() {
            super()
        }
    };

    function MJ(a) {
        var b = new NJ;
        return M(b, 1, a)
    }
    var NJ = class extends T {
        constructor() {
            super()
        }
    };
    const OJ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        PJ = OJ.reduce((a, b) => a + b);
    var QJ = class extends T {
        constructor() {
            super()
        }
    };
    var RJ = class extends T {
        constructor() {
            super()
        }
        getVersion() {
            return Th(this, 1)
        }
    };
    const SJ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        TJ = SJ.reduce((a, b) => a + b);
    var UJ = "a".charCodeAt(),
        VJ = Bc(Tm),
        WJ = Bc(Um);

    function XJ() {
        var a = new YJ;
        return R(a, 1, 0)
    }

    function ZJ(a) {
        const b = Uh(a, 1);
        a = Th(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var YJ = class extends T {};

    function $J(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function aK(a) {
        let b = $J(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!$J(a, 1),
                e = $J(a, 16);
            if (d)
                for (d = $J(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function bK(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if ($J(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function cK(a) {
        const b = $J(a, 16);
        return !0 === !!$J(a, 1) ? (a = aK(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : bK(a, b)
    }
    class dK {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var fK = (a, b) => {
        try {
            var c = tf(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new dK(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.skip(78);
            c.cmpId = $J(d, 12);
            c.cmpVersion = $J(d, 12);
            d.skip(30);
            c.tcfPolicyVersion = $J(d, 6);
            c.isServiceSpecific = !!$J(d, 1);
            c.useNonStandardStacks = !!$J(d, 1);
            c.specialFeatureOptins = eK(bK(d, 12, WJ), WJ);
            c.purpose = {
                consents: eK(bK(d, 24, VJ), VJ),
                legitimateInterests: eK(bK(d, 24, VJ), VJ)
            };
            c.purposeOneTreatment = !!$J(d, 1);
            c.publisherCC = String.fromCharCode(UJ + $J(d, 6)) + String.fromCharCode(UJ +
                $J(d, 6));
            c.vendor = {
                consents: eK(cK(d), b),
                legitimateInterests: eK(cK(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const eK = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var gK = new u(557811243, !0);
    var hK = class extends T {
        g() {
            return null != O(this, 2)
        }
    };
    var iK = class extends T {
        g() {
            return null != O(this, 2)
        }
    };
    var jK = class extends T {};
    var kK = class extends T {},
        lK = ni(kK);
    kK.L = [7];

    function mK(a) {
        a = nK(a);
        try {
            var b = a ? lK(a) : null
        } catch (c) {
            b = null
        }
        return b ? J(b, jK, 4) || null : null
    }

    function nK(a) {
        a = (new Qi(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function oK(a) {
        a.__uspapiPostMessageReady || pK(new qK(a))
    }

    function pK(a) {
        a.g = b => {
            const c = "string" === typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && "getUSPData" === e.command && a.win.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var qK = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };

    function rK(a) {
        a.__tcfapiPostMessageReady || sK(new tK(a))
    }

    function sK(a) {
        a.i = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.i);
        a.g.__tcfapiPostMessageReady = !0
    }
    var tK = class {
        constructor(a) {
            this.g = a;
            this.i = null
        }
    };
    var uK = class extends T {};
    var vK = class extends T {
            g() {
                return null != O(this, 1)
            }
        },
        wK = ni(vK);
    vK.L = [2];

    function xK(a, b, c) {
        function d(m) {
            if (10 > m.length) return null;
            var n = g(m.slice(0, 4));
            n = h(n);
            m = g(m.slice(6, 10));
            m = k(m);
            return "1" + n + m + "N"
        }

        function e(m) {
            if (10 > m.length) return null;
            var n = g(m.slice(0, 6));
            n = h(n);
            m = g(m.slice(6, 10));
            m = k(m);
            return "1" + n + m + "N"
        }

        function f(m) {
            if (12 > m.length) return null;
            var n = g(m.slice(0, 6));
            n = h(n);
            m = g(m.slice(8, 12));
            m = k(m);
            return "1" + n + m + "N"
        }

        function g(m) {
            const n = [];
            let p = 0;
            for (let q = 0; q < m.length / 2; q++) n.push(pJ(m.slice(p, p + 2))), p += 2;
            return n
        }

        function h(m) {
            return m.every(n => 1 === n) ?
                "Y" : "N"
        }

        function k(m) {
            return m.some(n => 1 === n) ? "Y" : "N"
        }
        if (0 === a.length) return null;
        a = a.split(".");
        if (2 < a.length) return null;
        a = oJ(a[0]);
        const l = pJ(a.slice(0, 6));
        a = a.slice(6);
        if (1 !== l) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return c ? f(a) : null;
            default:
                return null
        }
    };

    function yK(a) {
        var b = y(Fr);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new zK(a, b), AK(a), BK(a))
    }

    function AK(a) {
        !a.l || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", kD(a.g, "__uspapiLocator"), Ka("__uspapi", (...b) => CK(a, ...b), a.g), oK(a.g))
    }

    function BK(a) {
        !a.i || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", kD(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], Ka("__tcfapi", (...b) => DK(a, ...b), a.g), rK(a.g))
    }

    function CK(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.l
        }, !0)
    }

    function EK(a, b) {
        if (!b ? .g() || 0 === Q(b, 1).length || 0 == L(b, uK, 2).length) return null;
        const c = Q(b, 1);
        let d;
        try {
            var e = rJ(c.split("~")[0]);
            d = nJ(c)
        } catch (f) {
            return null
        }
        b = L(b, uK, 2).reduce((f, g) => Uh(FK(f), 1) > Uh(FK(g), 1) ? f : g);
        e = yh(e, 3, Eg, 2).indexOf(Th(b, 1));
        return -1 === e || e >= d.length ? null : {
            uspString: xK(d[e], Th(b, 1), a.m),
            je: ZJ(FK(b))
        }
    }

    function GK(a) {
        a = a.find(b => 13 === Vh(b, 1));
        if (a ? .g()) try {
            return wK(Q(a, 2))
        } catch (b) {}
        return null
    }

    function FK(a) {
        return th(a, YJ, 2) ? J(a, YJ, 2) : XJ()
    }

    function DK(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c)) d(null, !1);
            else switch (c = a.g.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(HK(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(HK(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function HK(a, b, c) {
        if (!a.i) return null;
        b = fK(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class zK {
        constructor(a, b) {
            this.g = a;
            this.m = b;
            b = nK(this.g.document);
            try {
                var c = b ? lK(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = J(b, iK, 5) || null, b = L(b, hK, 7), b = GK(b ? ? []), c = {
                Jf: c,
                eg: b
            }) : c = {
                Jf: null,
                eg: null
            };
            b = c;
            c = EK(this, b.eg);
            b = b.Jf;
            if (b ? .g() && 0 !== Q(b, 2).length) {
                var d = th(b, YJ, 1) ? J(b, YJ, 1) : XJ();
                b = {
                    uspString: Q(b, 2),
                    je: ZJ(d)
                }
            } else b = null;
            this.l = b && c ? c.je > b.je ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.i = (c = mK(a.document)) && null != O(c, 1) ? Q(c, 1) : null;
            this.j = (a = mK(a.document)) && null != O(a, 2) ? Q(a, 2) : null
        }
    };
    const IK = a => {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    };
    var JK = (a, b) => {
        a = IK(a);
        b = IK(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var KK = Promise;
    class LK {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d => {
                d.i(a, b, c)
            })
        }
        g(a, b) {
            return this.j.then(c => c.g(a, b))
        }
    };
    class MK {
        constructor(a) {
            this.data = a
        }
    };

    function NK(a, b) {
        OK(a, b);
        return new PK(a)
    }
    class PK {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            OK(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new KK(c => {
                this.i(a, c, b)
            })
        }
    }

    function OK(a, b) {
        b && (a.onmessage = c => {
            b(new MK(c.data, NK(c.ports[0])))
        })
    };
    var SK = ({
        destination: a,
        Ia: b,
        origin: c,
        de: d = "ZNWN1d",
        onMessage: e,
        Fg: f
    }) => QK({
        destination: a,
        oi: () => b.contentWindow,
        Qi: RK(c),
        de: d,
        onMessage: e,
        Fg: f
    });
    const QK = ({
            destination: a,
            oi: b,
            Qi: c,
            Rn: d,
            de: e,
            onMessage: f,
            Fg: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new LK(new KK((k, l) => {
                const m = n => {
                    n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(NK(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        RK = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };

    function TK(a, b, c, d, e, f, g = null) {
        try {
            var h = a.localStorage
        } catch (n) {
            h = null
        }
        if (h) {
            if (y(Rr)) var k = null;
            else try {
                k = h.getItem("google_ama_config")
            } catch (n) {
                k = null
            }
            try {
                var l = k ? nq(k) : null
            } catch (n) {
                l = null
            }
            k = l
        } else k = null;
        a: {
            if (d) try {
                var m = nq(d);
                break a
            } catch (n) {
                HH(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            if (e) {
                m = new wp;
                M(d, 3, m);
                k = lq(d) && Qh(lq(d), 13) ? Qh(lq(d), 13) : 1;
                k = Date.now() + 864E5 * k;
                Number.isFinite(k) && ei(m, 1, Math.round(k));
                m = oh(d);
                lq(d) && (k = new vp, l = lq(d), l = xh(l, 23), k = ai(k, 23, null == l ? void 0 : l), l = P(lq(d), 12, !1),
                    k = ai(k, 12, l), l = P(lq(d), 15, !1), k = ai(k, 15, l), M(m, 15, k));
                k = L(m, Yp, 1);
                for (l = 0; l < k.length; l++) rh(k[l], 11);
                rh(m, 22);
                if (y(Rr)) OH(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", hi(m))
                } catch (n) {
                    HH(a, {
                        lserr: 1
                    })
                }
            }
            e = NH(a, L(d, Fp, 7));
            m = {};
            y(Sr) || (m.Yi = J(d, Sp, 8) || new Sp);
            e && (m.U = e);
            e && LH(e, 3) && (m.sc = [1]);
            e = m;
            if (7 === c.google_pgb_reactive && !e.U) return !1;
            QH(a, 2) && (mj(5, [d.toJSON()]), c = IH(c), f = new aJ(f), m = e.U, c.google_package = m && O(m, 4) || "", xI(a, b, d, e, f, new kp(["google-auto-placed"], c), g));
            return !0
        }
        k && (HH(a, {
            cfg: 1,
            cl: 1
        }), OH(a));
        return !1
    };
    var VK = a => {
        const b = a.B;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Mi.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = UK(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = UK(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = UK(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = UK(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = UK(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = UK(a, b.google_color_line, c))
    };

    function UK(a, b, c) {
        a.g |= 2;
        return b[c % b.length]
    };

    function WK(a, b) {
        var c = gz,
            d;
        var e;
        d = (e = (e = uj()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new qj(d.left, d.top, d.width, d.height) : null) ? new Ld(e.left, e.top) : (d = xj()) && Aa(d.rootBounds) ? new Ld(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Ld(0, 0),
                g = Vd(b);
            var h = g ? Yd(g) : window;
            if (Kb(h, "parent")) {
                do {
                    if (h == a) var k = Ij(b);
                    else {
                        var l = Hj(b);
                        k = new Ld(l.left,
                            l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.wa(888, m), new Ld(-12245933, -12245933)
        }
    };

    function XK(a, b, c) {
        return c ? Ui(b, c, a.g) : null
    }

    function YK(a, b, c, d) {
        if (d) {
            var e = Uh(c, 2) - Date.now() / 1E3;
            e = {
                zd: Math.max(e, 0),
                path: Q(c, 3),
                domain: Q(c, 4),
                Rg: !1
            };
            c = c.getValue();
            a = a.g;
            P(d, 5) && Ti(a) && (new Qi(a.document)).set(b, c, e)
        }
    }

    function ZK(a, b, c) {
        if (c && Ui(b, c, a.g))
            for (const d of $K(a.g.location.hostname)) Vi(b, c, a.g, "/", d)
    }
    var aL = class {
        constructor(a) {
            this.g = a;
            this.i = 0
        }
    };

    function $K(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function bL(a, b, c) {
        return jz(629, function(d) {
            delete a._gfp_s_;
            if (y(Jr) && Z(RH(), 37, !1)) return Promise.resolve();
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Gi(Fi(Ei(Ci(g),
                    h), k), e);
                switch (d) {
                    case 1:
                        YK(c, "__gads", e, b);
                        break;
                    case 2:
                        YK(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function cL(a, b, c) {
        let d;
        if (0 === a.i) {
            if (XK(a, "__gads", b)) var e = !0;
            else e = a.g, P(b, 5) && Ti(e) && (new Qi(e.document)).set("GoogleAdServingTest", "Good", void 0), (e = "Good" === Ui("GoogleAdServingTest", b, a.g)) && Vi("GoogleAdServingTest", b, a.g);
            a.i = e ? 2 : 1
        }
        2 === a.i && (d = bL(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function dL(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = XK(b, "__gads", a);
        e && (d.cookie = e);
        (e = XK(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = Kc(fj `https://partner.googleadservices.com/gampad/cookie.js`, d),
            g = cL(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Ge(c.document, f)
        }) : Promise.resolve()
    }

    function eL(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1);
        var d = new aL(b);
        c = b.google_ad_client || c;
        const e = b._gfp_p_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
        e ? Promise.resolve() : dL(a, d, b, c)
    };
    const fL = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        gL = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        hL = (a, b) => {
            (0, a.__gpp)("getSection", c => {
                b.callback({
                    jb: c ? ? void 0,
                    ed: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        iL = {
            Cc: a => a.listener,
            Pb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            sb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        jL = {
            Cc: a => a.listener,
            Pb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            sb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        },
        kL = {
            Cc: a => a.callback,
            Pb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }
            }),
            sb: (a, b) => {
                b = b.__gppReturn;
                a({
                    jb: b.returnValue ? ? void 0,
                    ed: b.success ? void 0 : 2
                })
            }
        };

    function lL(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            We: b.__gppReturn.callId
        }
    }

    function mL(a) {
        if (!a) return !1;
        const b = rJ(a.split("~")[0]),
            c = nJ(a);
        for (let Xh = 0; Xh < yh(b, 3, Eg, 2).length; ++Xh) {
            const IO = yh(b, 3, Eg, 2)[Xh],
                Sb = c[Xh];
            switch (IO) {
                case 8:
                    if (0 === Sb.length) throw Error("Cannot decode empty USCA section string");
                    const If = Sb.split(".");
                    if (2 < If.length) throw Error(`Expected at most 1 sub-section but got ${If.length-1} when decoding ${Sb}`);
                    var d = void 0,
                        e = void 0,
                        f = void 0,
                        g = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        q = void 0,
                        v = void 0,
                        z = void 0,
                        A = void 0,
                        E = void 0,
                        I =
                        void 0,
                        x = void 0,
                        G = void 0,
                        K = void 0,
                        N = void 0,
                        oa = void 0,
                        ea = void 0,
                        ha = void 0;
                    let Wc = oJ(If[0]);
                    const Vl = pJ(Wc.slice(0, 6));
                    Wc = Wc.slice(6);
                    if (1 !== Vl) throw Error(`Unable to decode unsupported USCA Section specification version ${Vl} - only version 1 is supported.`);
                    if (Wc.length < AJ)
                        if (Wc.length + 8 >= AJ) Wc += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${AJ} but was ${Wc.length+8}`);
                    let Wl = 0;
                    const ua = [];
                    for (let V = 0; V < zJ.length; V++) {
                        const ja = zJ[V];
                        ua.push(pJ(Wc.slice(Wl, Wl + ja)));
                        Wl += ja
                    }
                    var kb = new vJ;
                    ha = di(kb, 1, Vl);
                    var Ia = ua.shift();
                    ea = S(ha, 2, Ia);
                    var Id = ua.shift();
                    oa = S(ea, 3, Id);
                    var Yh = ua.shift();
                    N = S(oa, 4, Yh);
                    var ka = ua.shift();
                    K = S(N, 5, ka);
                    var se = ua.shift();
                    G = S(K, 6, se);
                    var JO = new uJ,
                        KO = ua.shift();
                    x = S(JO, 1, KO);
                    var LO = ua.shift();
                    I = S(x, 2, LO);
                    var MO = ua.shift();
                    E = S(I, 3, MO);
                    var NO = ua.shift();
                    A = S(E, 4, NO);
                    var OO = ua.shift();
                    z = S(A, 5, OO);
                    var PO = ua.shift();
                    v = S(z, 6, PO);
                    var QO = ua.shift();
                    q = S(v, 7, QO);
                    var RO = ua.shift();
                    p = S(q, 8, RO);
                    var SO = ua.shift();
                    n = S(p, 9, SO);
                    m = M(G, 7, n);
                    var TO = new tJ,
                        UO = ua.shift();
                    l = S(TO, 1, UO);
                    var VO = ua.shift();
                    k = S(l, 2, VO);
                    h = M(m, 8, k);
                    var WO = ua.shift();
                    g = S(h, 9, WO);
                    var XO = ua.shift();
                    f = S(g, 10, XO);
                    var YO = ua.shift();
                    e = S(f, 11, YO);
                    var ZO = ua.shift();
                    const hv = d = S(e, 12, ZO);
                    if (1 === If.length) var iv = xJ(hv);
                    else {
                        var $O = xJ(hv),
                            jv = void 0,
                            kv = void 0,
                            lv = void 0;
                        const V = oJ(If[1]);
                        if (3 > V.length) throw Error(`Invalid GPC Segment [${V}]. Expected length ${3}, but was ${V.length}.`);
                        const ja = pJ(V.slice(0, 2));
                        if (0 > ja || 1 < ja) throw Error(`Attempting to decode unknown GPC segment subsection type ${ja}.`);
                        lv = ja + 1;
                        const Jf = pJ(V.charAt(2));
                        var aP = new wJ;
                        kv = S(aP, 2, lv);
                        jv = bi(kv, 1, !!Jf);
                        iv = M($O, 2, jv)
                    }
                    const mv = J(iv, vJ, 1);
                    if (1 === Vh(mv, 5) || 1 === Vh(mv, 6)) return !0;
                    break;
                case 10:
                    if (0 === Sb.length) throw Error("Cannot decode empty USCO section string.");
                    const Kf = Sb.split(".");
                    if (2 < Kf.length) throw Error(`Expected at most 2 segments but got ${Kf.length} when decoding ${Sb}`);
                    var bP = void 0,
                        nv = void 0,
                        ov = void 0,
                        pv = void 0,
                        qv = void 0,
                        rv = void 0,
                        sv = void 0,
                        tv = void 0,
                        uv = void 0,
                        vv = void 0,
                        wv = void 0,
                        xv = void 0,
                        yv = void 0,
                        zv = void 0,
                        Av = void 0,
                        Bv = void 0,
                        Cv = void 0,
                        Dv = void 0;
                    let Xc = oJ(Kf[0]);
                    const Xl = pJ(Xc.slice(0, 6));
                    Xc = Xc.slice(6);
                    if (1 !== Xl) throw Error(`Unable to decode unsupported USCO Section specification version ${Xl} - only version 1 is supported.`);
                    if (Xc.length < HJ)
                        if (Xc.length + 8 >= HJ) Xc += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${HJ} but was ${Xc.length+8}`);
                    let Yl = 0;
                    const Sa = [];
                    for (let V = 0; V < GJ.length; V++) {
                        const ja = GJ[V];
                        Sa.push(pJ(Xc.slice(Yl, Yl + ja)));
                        Yl += ja
                    }
                    var cP = new CJ;
                    Dv = di(cP, 1, Xl);
                    var dP = Sa.shift();
                    Cv = S(Dv, 2, dP);
                    var eP = Sa.shift();
                    Bv = S(Cv, 3, eP);
                    var fP = Sa.shift();
                    Av = S(Bv, 4, fP);
                    var gP = Sa.shift();
                    zv = S(Av, 5, gP);
                    var hP = Sa.shift();
                    yv = S(zv, 6, hP);
                    var iP = new BJ,
                        jP = Sa.shift();
                    xv = S(iP, 1, jP);
                    var kP = Sa.shift();
                    wv = S(xv, 2, kP);
                    var lP = Sa.shift();
                    vv = S(wv, 3, lP);
                    var mP = Sa.shift();
                    uv = S(vv, 4, mP);
                    var nP = Sa.shift();
                    tv = S(uv, 5, nP);
                    var oP = Sa.shift();
                    sv = S(tv, 6, oP);
                    var pP = Sa.shift();
                    rv = S(sv, 7, pP);
                    qv = M(yv, 7, rv);
                    var qP = Sa.shift();
                    pv = S(qv, 8, qP);
                    var rP = Sa.shift();
                    ov = S(pv,
                        9, rP);
                    var sP = Sa.shift();
                    nv = S(ov, 10, sP);
                    var tP = Sa.shift();
                    const Ev = bP = S(nv, 11, tP);
                    if (1 === Kf.length) var Fv = EJ(Ev);
                    else {
                        var uP = EJ(Ev),
                            Gv = void 0,
                            Hv = void 0,
                            Iv = void 0;
                        const V = oJ(Kf[1]);
                        if (3 > V.length) throw Error(`Invalid GPC Segment [${V}]. Expected length ${3}, but was ${V.length}.`);
                        const ja = pJ(V.slice(0, 2));
                        if (0 > ja || 1 < ja) throw Error(`Attempting to decode unknown GPC segment subsection type ${ja}.`);
                        Iv = ja + 1;
                        const Jf = pJ(V.charAt(2));
                        var vP = new DJ;
                        Hv = S(vP, 2, Iv);
                        Gv = bi(Hv, 1, !!Jf);
                        Fv = M(uP, 2, Gv)
                    }
                    const Jv = J(Fv,
                        CJ, 1);
                    if (1 === Vh(Jv, 5) || 1 === Vh(Jv, 6)) return !0;
                    break;
                case 12:
                    if (0 === Sb.length) throw Error("Cannot decode empty usct section string.");
                    const Lf = Sb.split(".");
                    if (2 < Lf.length) throw Error(`Expected at most 2 segments but got ${Lf.length} when decoding ${Sb}`);
                    var wP = void 0,
                        Kv = void 0,
                        Lv = void 0,
                        Mv = void 0,
                        Nv = void 0,
                        Ov = void 0,
                        Pv = void 0,
                        Qv = void 0,
                        Rv = void 0,
                        Sv = void 0,
                        Tv = void 0,
                        Uv = void 0,
                        Vv = void 0,
                        Wv = void 0,
                        Xv = void 0,
                        Yv = void 0,
                        Zv = void 0,
                        $v = void 0,
                        aw = void 0,
                        bw = void 0,
                        cw = void 0,
                        dw = void 0;
                    let Yc = oJ(Lf[0]);
                    const Zl =
                        pJ(Yc.slice(0, 6));
                    Yc = Yc.slice(6);
                    if (1 !== Zl) throw Error(`Unable to decode unsupported USCT Section specification version ${Zl} - only version 1 is supported.`);
                    if (Yc.length < PJ)
                        if (Yc.length + 8 >= PJ) Yc += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${PJ} but was ${Yc.length+8}`);
                    let $l = 0;
                    const za = [];
                    for (let V = 0; V < OJ.length; V++) {
                        const ja = OJ[V];
                        za.push(pJ(Yc.slice($l, $l + ja)));
                        $l += ja
                    }
                    var xP = new KJ;
                    dw = di(xP, 1, Zl);
                    var yP = za.shift();
                    cw = S(dw,
                        2, yP);
                    var zP = za.shift();
                    bw = S(cw, 3, zP);
                    var AP = za.shift();
                    aw = S(bw, 4, AP);
                    var BP = za.shift();
                    $v = S(aw, 5, BP);
                    var CP = za.shift();
                    Zv = S($v, 6, CP);
                    var DP = new JJ,
                        EP = za.shift();
                    Yv = S(DP, 1, EP);
                    var FP = za.shift();
                    Xv = S(Yv, 2, FP);
                    var GP = za.shift();
                    Wv = S(Xv, 3, GP);
                    var HP = za.shift();
                    Vv = S(Wv, 4, HP);
                    var IP = za.shift();
                    Uv = S(Vv, 5, IP);
                    var JP = za.shift();
                    Tv = S(Uv, 6, JP);
                    var KP = za.shift();
                    Sv = S(Tv, 7, KP);
                    var LP = za.shift();
                    Rv = S(Sv, 8, LP);
                    Qv = M(Zv, 7, Rv);
                    var MP = new IJ,
                        NP = za.shift();
                    Pv = S(MP, 1, NP);
                    var OP = za.shift();
                    Ov = S(Pv, 2, OP);
                    var PP = za.shift();
                    Nv = S(Ov, 3, PP);
                    Mv = M(Qv, 8, Nv);
                    var QP = za.shift();
                    Lv = S(Mv, 9, QP);
                    var RP = za.shift();
                    Kv = S(Lv, 10, RP);
                    var SP = za.shift();
                    const ew = wP = S(Kv, 11, SP);
                    if (1 === Lf.length) var fw = MJ(ew);
                    else {
                        var TP = MJ(ew),
                            gw = void 0,
                            hw = void 0,
                            iw = void 0;
                        const V = oJ(Lf[1]);
                        if (3 > V.length) throw Error(`Invalid GPC Segment [${V}]. Expected length ${3}, but was ${V.length}.`);
                        const ja = pJ(V.slice(0, 2));
                        if (0 > ja || 1 < ja) throw Error(`Attempting to decode unknown GPC segment subsection type ${ja}.`);
                        iw = ja + 1;
                        const Jf = pJ(V.charAt(2));
                        var UP = new LJ;
                        hw =
                            S(UP, 2, iw);
                        gw = bi(hw, 1, !!Jf);
                        fw = M(TP, 2, gw)
                    }
                    const jw = J(fw, KJ, 1);
                    if (1 === Vh(jw, 5) || 1 === Vh(jw, 6)) return !0;
                    break;
                case 9:
                    if (0 === Sb.length) throw Error("Cannot decode empty USVA section string.");
                    let Zc = oJ(Sb);
                    const am = pJ(Zc.slice(0, 6));
                    Zc = Zc.slice(6);
                    if (1 !== am) throw Error(`Unable to decode unsupported USVA Section specification version ${am} - only version 1 is supported.`);
                    if (Zc.length < TJ)
                        if (Zc.length + 8 >= TJ) Zc += "00000000";
                        else throw Error(`Expected bitstring minus version plus padding to be at least of length ${TJ} but was ${Zc.length+ 
8}`);
                    let bm = 0;
                    const Ja = [];
                    for (let V = 0; V < SJ.length; V++) {
                        const ja = SJ[V];
                        Ja.push(pJ(Zc.slice(bm, bm + ja)));
                        bm += ja
                    }
                    var VP = am,
                        WP = new RJ;
                    var XP = di(WP, 1, VP);
                    var YP = Ja.shift();
                    var ZP = S(XP, 2, YP);
                    var $P = Ja.shift();
                    var aQ = S(ZP, 3, $P);
                    var bQ = Ja.shift();
                    var cQ = S(aQ, 4, bQ);
                    var dQ = Ja.shift();
                    var eQ = S(cQ, 5, dQ);
                    var fQ = Ja.shift();
                    var gQ = S(eQ, 6, fQ);
                    var hQ = new QJ,
                        iQ = Ja.shift();
                    var jQ = S(hQ, 1, iQ);
                    var kQ = Ja.shift();
                    var lQ = S(jQ, 2, kQ);
                    var mQ = Ja.shift();
                    var nQ = S(lQ, 3, mQ);
                    var oQ = Ja.shift();
                    var pQ = S(nQ, 4, oQ);
                    var qQ = Ja.shift();
                    var rQ =
                        S(pQ, 5, qQ);
                    var sQ = Ja.shift();
                    var tQ = S(rQ, 6, sQ);
                    var uQ = Ja.shift();
                    var vQ = S(tQ, 7, uQ);
                    var wQ = Ja.shift();
                    var xQ = S(vQ, 8, wQ);
                    var yQ = M(gQ, 7, xQ);
                    var zQ = Ja.shift();
                    var AQ = S(yQ, 8, zQ);
                    var BQ = Ja.shift();
                    var CQ = S(AQ, 9, BQ);
                    var DQ = Ja.shift();
                    var EQ = S(CQ, 10, DQ);
                    var FQ = Ja.shift(),
                        kw = S(EQ, 11, FQ);
                    if (1 === Vh(kw, 5) || 1 === Vh(kw, 6)) return !0
            }
        }
        return !1
    }
    var qL = class extends U {
        constructor(a) {
            super();
            this.caller = new pD(a, "__gppLocator", b => "function" === typeof b.__gpp, lL);
            this.caller.m.set("addEventListener", fL);
            this.caller.j.set("addEventListener", iL);
            this.caller.m.set("removeEventListener", gL);
            this.caller.j.set("removeEventListener", jL);
            this.caller.m.set("getDataWithCallback", hL);
            this.caller.j.set("getDataWithCallback", kL);
            this.timeoutMs = {}.timeoutMs ? ? 500
        }
        i() {
            this.caller.ha();
            super.i()
        }
        addEventListener(a) {
            const b = Bb(() => {
                    a(nL, !0)
                }),
                c = -1 === this.timeoutMs ?
                void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            oD(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (void 0 === d.pingData ? .gppVersion || "1" === d.pingData.gppVersion || "1.0" === d.pingData.gppVersion) {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) && 0 !== d.pingData.applicableSections.length ? f = d : (this.removeEventListener(d.listenerId),
                            f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 2,
                                    gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                    applicableSections: [-1]
                                }
                            });
                        a(f, e)
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(oL, !0);
                            return
                        }
                        a(pL, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            oD(this.caller, "removeEventListener", {
                listenerId: a
            })
        }
    };
    const pL = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        nL = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        oL = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function rL(a) {
        return !a || 1 === a.length && -1 === a[0]
    };

    function sL(a, b) {
        if (b.internalErrorState) fi(a, 11, b.gppString);
        else if (rL(b.applicableSections)) {
            var c = Eh(a, 10, b.applicableSections, Hg);
            ai(c, 12, !1)
        } else {
            c = !1;
            try {
                c = mL(b.gppString)
            } catch (d) {
                lz(1182, d)
            }
            a = Eh(a, 10, b.applicableSections, Hg);
            b = fi(a, 11, b.gppString);
            ai(b, 12, c)
        }
    }

    function tL(a) {
        const b = new qL(a.pubWin);
        if (!mD(b.caller)) return Promise.resolve(null);
        const c = RH(),
            d = Z(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Z(c, 36, []);
            g.push(f);
            WH(c, 36, g)
        });
        d || null === d || (WH(c, 35, null), b.addEventListener(f => {
            if ("ready" === f.pingData.signalStatus || rL(f.pingData.applicableSections)) {
                f = f.pingData;
                WH(c, 35, f);
                sL(a.i, f);
                for (const g of Z(c, 36, [])) g.resolve(f);
                WH(c, 36, [])
            }
        }));
        return e
    };

    function uL(a) {
        a.easpi = y(it);
        a.asla = .4;
        a.asaa = -1;
        a.sedf = !1;
        a.asro = y(ct);
        y(Qs) && (a.asiscm = !0);
        a.sefa = !0;
        y(ht) && (a.sugawps = !0);
        const b = w(Lb).g(Ms.g, Ms.defaultValue);
        b.length && (a.seiel = b.join("~"));
        y(Ps) && (a.slcwct = B(Vs), a.sacwct = B(Bs));
        y(Rs) && (a.slmct = B(Ws), a.samct = B(Cs))
    };

    function vL(a, b) {
        return rC({
            H: a,
            Le: 3E3,
            Oe: a.innerWidth > $m ? 650 : 0,
            qa: fz,
            Kf: b,
            rj: y(kt)
        })
    };
    var wL = a => {
        let b = 0;
        try {
            b |= an(a), y(os) || (b |= bn(a, 1E4))
        } catch (c) {
            b |= 32
        }
        return b
    };
    var xL = a => {
        let b = 0;
        try {
            b |= an(a), b |= bn(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function yL() {
        const a = {};
        Mb(Lr) && (a.bust = Mb(Lr));
        var b = RH();
        b = Z(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    };

    function zL(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function AL(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function BL(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    }

    function CL(a, b) {
        if (3 == zL(b)) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Ib(b, "prerenderingchange", d);
                a()
            };
            Hb(b, "prerenderingchange", d)
        }
    };
    var EL = (a, b, c, d, e = !1) => 0 == DL(a, b, c, d, e),
        DL = (a, b, c, d = !1, e = !1) => {
            let f = 0;
            try {
                f |= an(a);
                var g;
                if (!(g = !a.navigator)) {
                    var h = a.navigator;
                    g = "brave" in h && "isBrave" in h.brave || !1
                }
                f |= g || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
                f |= bn(a, 2500, e);
                e || (f |= dn(a));
                if (0 < c)
                    if (d) b && RE(b) || (f |= 4194304);
                    else {
                        var k = UE(b, c);
                        k && 1 > k.length || (f |= 134217728)
                    }
            } catch (l) {
                f |= 32
            }
            return f
        };

    function FL(a, b, c, d = null) {
        let e = an(a);
        sC(a.navigator ? .userAgent) && (e |= 1048576);
        const f = a.innerWidth;
        1200 > f && (e |= 65536);
        const g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (d = 3 === d ? "left" : "right", (b = GL({
            H: a,
            pg: b,
            Qg: 1,
            position: d,
            O: f,
            T: g,
            nb: new Set,
            minWidth: 120,
            minHeight: 500
        })) ? c && Su(a).sideRailPlasParam.set(d, `${b.width}x${b.height}_${String(d).charAt(0)}`) : e |= 16);
        return e
    }

    function HL(a) {
        if (y(vs)) return [...Su(a).sideRailPlasParam.values()].join("|");
        if (0 !== FL(a, !0, !1)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = GL({
                H: a,
                pg: !0,
                Qg: 1,
                position: e,
                O: c,
                T: d,
                nb: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function IL(a, b) {
        return null !== ge(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function JL(a, b) {
        return ge(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function KL(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function LL(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function ML(a) {
        return `${a.position}-${LL(a.O)}x${LL(a.T)}-${LL(a.scrollY+a.Yb)}Y`
    }

    function NL(a) {
        return `f-${ML({position:a.position,Yb:a.Yb,scrollY:0,O:a.O,T:a.T})}`
    }

    function OL(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function PL(a, b, c) {
        const d = Su(c.H).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.T),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.O);
                for (var k = .3 * c.O; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = NL({
                            position: "left",
                            Yb: f,
                            O: c.O,
                            T: c.T
                        });
                        b.set(l, OL(b.get(l), h))
                    }
                    if (h < c.O && e > c.O - k) {
                        l = NL({
                            position: "right",
                            Yb: f,
                            O: c.O,
                            T: c.T
                        });
                        const m = c.O - e;
                        b.set(l, OL(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function GL(a) {
        if (1200 > a.O || 650 > a.T) return null;
        var b = Su(a.H).sideRailAvailableSpace;
        if (!a.pg) {
            var c = {
                    H: a.H,
                    O: a.O,
                    T: a.T,
                    nb: a.nb
                },
                d = `f-${LL(c.O)}x${LL(c.T)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                Su(c.H).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.H.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.nb]);
                for (var e of KL(c.H)) IL(e, d) || PL(e, b, c)
            }
        }
        c = [];
        d = .9 * a.T;
        var f = mn(a.H),
            g = e = (a.T - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    q = {
                        H: a.H,
                        O: a.O,
                        T: a.T,
                        nb: a.nb
                    };
                const z = NL({
                        position: p,
                        Yb: n,
                        O: q.O,
                        T: q.T
                    }),
                    A = ML({
                        position: p,
                        Yb: n,
                        scrollY: f,
                        O: q.O,
                        T: q.T
                    });
                if (b.has(A)) {
                    n = OL(b.get(z), b.get(A));
                    break a
                }
                const E = "left" === p ? 20 : q.O - 20;
                let I = E;p = .3 * q.O / 5 * ("left" === p ? 1 : -1);
                for (let x = 0; 6 > x; x++) {
                    const G = Lu(q.H.document, {
                        x: Math.round(I),
                        y: Math.round(n)
                    });
                    var v = IL(G, q.nb);
                    const K = JL(G, q.H);
                    if (!v && null !== K) {
                        PL(K, b, q);
                        b.delete(A);
                        break
                    }
                    v || (v = G.offsetHeight >= .25 * q.T, v = G.offsetWidth >= .9 * q.O && v);
                    if (v) b.set(A, Math.round(Math.abs(I - E) + 20));
                    else if (I !== E) I -= p, p /=
                        2;
                    else {
                        b.set(A, 0);
                        break
                    }
                    I += p
                }
                n = OL(b.get(z), b.get(A))
            }
            m.call(l, n);
            g += h
        }
        b = a.Qg;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    offsetY: e + h[k] * d
                }, q = n.width >= g && n.height >= a, 0 === b && q) {
                m = n;
                break
            } else 1 === b && q && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const QL = {
        [27]: 512,
        [26]: 128
    };
    var RL = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === vL(a, c);
                case 3:
                case 4:
                    return 0 === FL(a, !1, !1, c);
                case 8:
                    return EL(a, d, "on" === b.google_adtest || eJ(a.location, "google_ia_debug") ? -1 : B(ys), y(zs), y(lt));
                case 9:
                    return b = !("on" === b.google_adtest || eJ(a.location, "google_scr_debug")), !VE(a, b, d);
                case 30:
                    return 0 == JG(a);
                case 26:
                    return 0 == xL(a);
                case 27:
                    return 0 === wL(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        SL = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return vL(a, c);
                case 3:
                case 4:
                    return FL(a,
                        y(ws), y(vs), c);
                case 8:
                    return DL(a, d, "on" === b.google_adtest || eJ(a.location, "google_ia_debug") ? -1 : B(ys), y(zs), y(lt));
                case 9:
                    return VE(a, !("on" === b.google_adtest || eJ(a.location, "google_scr_debug")), d);
                case 16:
                    return eu(b, a) ? 0 : 8388608;
                case 30:
                    return JG(a);
                case 26:
                    return xL(a);
                case 27:
                    return wL(a);
                default:
                    return 32
            }
        },
        TL = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!zc(d)) return !1;
            a = Fe(a);
            if (!a || !RL(a, b, d, c)) return !1;
            b = Su(a);
            if (jn(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        VL = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && UL(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        WL = a => {
            if (!a.hash) return null;
            let b = null;
            Ke(bJ, c => {
                !b && eJ(a, c) && (b = cJ[c])
            });
            return b
        },
        YL = (a, b) => {
            const c = Su(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Ke(dJ, d => {
                !c.debugCardRequested && "number" === typeof d && hJ(d, a.location) && (c.debugCardRequested = !0, XL(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        $L = (a, b, c) => {
            if (!b) return null;
            const d = Su(b);
            let e = 0;
            Ke(Ac, f => {
                const g = QL[f];
                g && 0 === ZL(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        aM = (a, b, c) => {
            const d = [];
            Ke(Ac, e => {
                const f = ZL(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        bM = a => {
            const b = [],
                c = {};
            Ke(a, (d, e) => {
                if ((e = Ym[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        cM = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        ZL = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = Su(b),
                g = jn(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Ke(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            return h && WL(b.location) !== c && (e |= 128, 2 == c || 1 == c || 3 == c || 4 == c || 8 == c) ? e : e | SL(b, a, c, d)
        },
        dM = (a, b) => {
            if (a) {
                var c = Su(a),
                    d = {};
                Ke(b, (e, f) => {
                    (f = Ym[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Ke(Ac, e => {
                    d[Zm[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        eM = (a, b, c) => {
            b = gz.Ka(b, c);
            return $I(1, window, Kc(a, yL())).then(b)
        },
        XL = (a, b, c) => {
            c = gz.Ka(212,
                c);
            $I(3, a, b).then(c)
        },
        fM = a => {
            a = a.google_reactive_ad_format;
            return zc(a) ? "" + a : null
        },
        UL = a => !!fM(a) || null != a.google_pgb_reactive,
        gM = a => {
            a = fM(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };
    var hM = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            Hb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Ib(a, "message", e));
                return g
            }
        },
        iM = (a, b, c, d = null) => {
            const e = hM(a, b, yb(c, () => e()), d);
            return e
        },
        jM = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && jM(a[f], b, c, d, --e)
        };

    function kM(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function lM(a, b, c) {
        const d = b.H || b.pubWin,
            e = b.B;
        var f = aM(d, e, c);
        e.google_reactive_plat = f;
        (f = bM(a)) && (e.google_reactive_plaf = f);
        (f = cM(a)) && (e.google_reactive_fba = f);
        (f = HL(d)) && (e.google_plas = f);
        mM(a, e);
        f = WL(b.pubWin.location);
        nM(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        uL(e);
        e.fsapi = !0;
        y(zs) && 8 !== f && (f = UE(c, 86400), f ? .length && (e.vmsli = Math.floor((Date.now() - Math.max(...f)) / 6E4)));
        yj() || Vt(b.pubWin.top);
        f = iM(b.pubWin, "rsrai", jz(429, (g, h) => oM(b, d, e.google_ad_client, a, g, h, c)),
            jz(430, (g, h) => pn(b.pubWin, "431", fz, h)));
        b.j.push(f);
        Su(d).wasReactiveTagRequestSent = !0;
        pM(b, a, c)
    }

    function pM(a, b, c) {
        const d = a.B,
            e = Aa(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = iM(a.pubWin, "apcnf", jz(353, (f, g) => {
            const h = Kc(a.ma.eb, yL());
            var k = a.pubWin,
                l = d.google_ad_client;
            return df(g.origin) ? TK(k, l, e, f.config, c, h, null) : !1
        }), jz(353, (f, g) => pn(a.pubWin, "353", fz, g)));
        a.j.push(b)
    }

    function oM(a, b, c, d, e, f, g) {
        if (!df(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!QH(b, 1)) return !0;
        f && mj(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = Su(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                q = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (9 === q && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, qM(d, p));
                    const v = new WE;
                    if (PE(v, p) && v.A(p)) {
                        m = v;
                        continue
                    }
                }
                h.push(p);
                k.push(q)
            }
        }
        h.length && eM(a.ma.Mg,
            522, n => {
                rM(h, b, n, d, g)
            });
        e && TK(b, c, d, e, g, Kc(a.ma.eb, yL()), m);
        return !0
    }

    function qM(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Aa(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function rM(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = qM(d, h), delete h.google_reactive_sra_index, f.push(k), iz(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function mM(a, b) {
        const c = [];
        let d = !1;
        Ke(Ym, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function nM(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    Jb("script");
    var sM = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function tM(a, b) {
        if (!eu(b, a)) return () => {};
        a = uM(b, a);
        if (!a) return () => {};
        const c = aI();
        b = Cc(b);
        const d = {
            tb: a,
            B: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => $a(c, d)
    }

    function uM(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !ju.test(a.className);) a = a.parentElement;
        return a
    }

    function vM(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = Se(c[d[k]]);
                    e = null === e ? null : Math.round(e);
                    null != e && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function wM(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function xM(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = aI();
            for (const d of a)
                if (d.tb.offsetWidth != d.offsetWidth || d.B.google_full_width_responsive_allowed) d.offsetWidth = d.tb.offsetWidth, iz(467, () => {
                    var e = d.tb,
                        f = d.B;
                    const g = vM(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = vM(e, f);
                    !h && g && 1 == e.childNodes.length ? (wM(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", b.adsbygoogle || (b.adsbygoogle = [], Ge(b.document, fj `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)),
                        b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g && h != g && (wM(g, !1), wM(h, !0))
                })
        }
    }
    var yM = class extends U {
        constructor() {
            super(...arguments);
            this.g = null
        }
        I(a) {
            const b = RH();
            if (!Z(b, 27, !1)) {
                WH(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    xM(this, a)
                };
                Hb(a, "resize", c);
                Gn(this, () => {
                    Ib(a, "resize", c)
                })
            }
        }
    };
    var zM = class {
        constructor(a, b) {
            this.H = a;
            this.tb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            10 <= ++this.j && t.clearInterval(this.g);
            var a = hu(this.H, this.tb);
            iu(this.H, this.tb, a);
            a = du(this.tb, this.H);
            null != a && 0 === a.x || t.clearInterval(this.g)
        }
    };
    var AM = class {
        constructor(a) {
            this.g = 0;
            this.i = this.C = null;
            this.D = 0;
            this.j = [];
            this.rc = this.A = "";
            this.l = this.v = null;
            this.H = a.H;
            this.pubWin = a.pubWin;
            this.B = a.B;
            this.za = a.za;
            this.ma = a.ma;
            this.qb = a.qb;
            this.da = a.da
        }
    };

    function BM(a, b) {
        var c = QI(a, zD(b));
        c = fi(c, 2, b.tcString);
        c = fi(c, 4, b.addtlConsent || "");
        rh(c, 7, Bg(b.internalErrorState));
        c = !BD(b);
        ai(a, 9, c);
        null != b.gdprApplies && ai(a, 3, b.gdprApplies)
    }

    function CM(a) {
        const b = new HD(a.pubWin, {
            timeoutMs: -1,
            Bh: !0
        });
        if (!DD(b)) return Promise.resolve(null);
        const c = RH(),
            d = Z(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Z(c, 25, []);
            g.push(f);
            WH(c, 25, g)
        });
        d || null === d || (WH(c, 24, null), b.addEventListener(f => {
            if (yD(f)) {
                WH(c, 24, f);
                BM(a.i, f);
                for (const g of Z(c, 25, [])) g.resolve(f);
                WH(c, 25, [])
            } else WH(c, 24, null)
        }));
        return e
    };

    function DM(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var FM = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => EM(d));
        return iM(a, "adpnt", (e, f) => {
            if (ln(f, c.contentWindow)) {
                e = on(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), 500 < a.googletag.queryIds.length && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function EM(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var GM = class {
        constructor(a) {
            this.g = a
        }
    };
    var HM = class extends T {
        g() {
            return P(this, 6)
        }
        j() {
            return P(this, 7)
        }
    };
    var IM = class extends T {
        g() {
            return yh(this, 1, Sg, 2)
        }
    };
    IM.L = [1];
    var JM = class extends T {};
    JM.L = [19];
    var KM = [13, 14];
    let LM = void 0;

    function MM() {
        ki(LM, mi);
        return LM
    }

    function NM(a) {
        ki(LM, Bk);
        LM = a
    };

    function OM(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : yc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function PM(a, b, c) {
        try {
            if (!df(c.origin) || !ln(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.ra[d]) && a.P.Ic(168, () => {
            e.call(a, b, c)
        })
    }
    class QM extends U {
        constructor(a, b) {
            var c = gz,
                d = fz;
            super();
            this.j = a;
            this.g = b;
            this.P = c;
            this.qa = d;
            this.ra = {};
            this.yb = this.P.Ka(168, (e, f) => void PM(this, e, f));
            this.Oc = this.P.Ka(169, (e, f) => pn(this.j, "ras::xsf", this.qa, f));
            this.V = [];
            this.aa(this.ra);
            this.V.push(hM(this.j, "sth", this.yb, this.Oc))
        }
        i() {
            for (const a of this.V) a();
            this.V.length = 0;
            super.i()
        }
    };
    class RM extends QM {};

    function SM(a, b, c = null) {
        return new TM(a, b, c)
    }
    var TM = class extends RM {
        constructor(a, b, c) {
            super(a, b);
            this.m = c;
            this.A = w(vI);
            this.l = () => {};
            Hb(this.g, "load", this.l)
        }
        i() {
            Ib(this.g, "load", this.l);
            super.i()
        }
        aa(a) {
            a["adsense-labs"] = b => {
                if (b = on(b).settings)
                    if (b = ji(Hi, JSON.parse(b)), null != O(b, 1)) {
                        var c;
                        if (c = y(Jr)) c = b.R, c = 0 < Lh(c, c[F], Di, 4, 3, !1).length;
                        if (c) {
                            c = L(b, Di, 4);
                            var d = this.A;
                            const g = new zl;
                            for (var e of c) switch (e.getVersion()) {
                                case 1:
                                    ai(g, 1, !0);
                                    break;
                                case 2:
                                    ai(g, 2, !0)
                            }
                            e = new Al;
                            e = Mh(e, 1, Bl, g);
                            uI(d, e);
                            d = this.j;
                            e = this.m;
                            if (!Z(RH(), 37, !1)) {
                                d = new aL(d);
                                for (var f of c) switch (f.getVersion()) {
                                    case 1:
                                        YK(d, "__gads", f, e);
                                        break;
                                    case 2:
                                        YK(d, "__gpi", f, e)
                                }
                                WH(RH(), 37, !0)
                            }
                            rh(b, 4)
                        }
                        if (y(Hr)) {
                            if (f = J(b, Di, 5)) c = this.j, Z(RH(), 40, !1) || (c = new GM(c), e = Uh(f, 2) - Date.now() / 1E3, e = {
                                zd: Math.max(e, 0),
                                path: Q(f, 3),
                                domain: Q(f, 4),
                                Rg: !1
                            }, (new Qi(c.g.document)).set("__eoi", f.getValue(), e), WH(RH(), 40, !0));
                            rh(b, 5)
                        }
                        f = this.j;
                        c = Q(b, 1) || "";
                        if (y(Cr) ? null != UI({
                                win: f,
                                ud: MM()
                            }).g : 1) {
                            y(Cr) ? (e = UI({
                                win: f,
                                ud: MM()
                            }), e = null != e.g ? OM(e.getValue()) : {}) : e = OM(f.localStorage);
                            null !== b && (e[c] = b.toJSON());
                            try {
                                f.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (g) {}
                        }
                    }
            }
        }
    };

    function UM(a) {
        a.m = a.A;
        a.C.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        VM(a)
    }

    function WM(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function VM(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.m}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.m);
        a.g.style.height = a.m + "px";
        a.l.setAttribute("height", a.m);
        a.l.style.height = a.m + "px";
        a.C.style.height = a.m + "px"
    }

    function XM(a, b) {
        b = Re(b.r_nh);
        a.A = null == b ? 0 : b;
        if (0 >= a.A) return "1";
        a.G = Ij(a.C).y;
        a.F = mn(a.j);
        if (a.G + a.m < a.F) return "2";
        if (a.G > fn(a.j) - a.j.innerHeight) return "3";
        b = a.F;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.style.overflow = "hidden";
        a.C.style.position = "relative";
        a.C.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.G, a.m);
        Cj(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Cj(a.g, {
            clip: b
        });
        Cj(a.l, {
            clip: b
        });
        return "0"
    }
    class YM extends RM {
        constructor(a, b) {
            super(a.H, b);
            this.l = a.da;
            this.C = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.m = parseInt(this.l.style.height, 10);
            this.Ba = this.Na = !1;
            this.la = this.F = this.A = 0;
            this.Nc = this.m / 5;
            this.G = Ij(this.C).y;
            this.Sa = Db(jz(651, () => {
                this.G = Ij(this.C).y;
                var c = this.F;
                this.F = mn(this.j);
                this.m < this.A ? (c = this.F - c, 0 < c && (this.la += c, this.la >= this.Nc ? (UM(this), WM(this, this.A)) : (this.m = Math.min(this.A, this.m + c), WM(this, c), VM(this)))) :
                    Ib(this.j, "scroll", this.K)
            }), this);
            this.K = () => {
                var c = this.Sa;
                Mi.requestAnimationFrame ? Mi.requestAnimationFrame(c) : c()
            }
        }
        aa(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = on(b);
                this.Na || (this.Na = !0, b = XM(this, b), "0" === b && Hb(this.j, "scroll", this.K, Eb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ba || (this.Ba = !0, UM(this), Ib(this.j, "scroll", this.K))
            }
        }
        i() {
            this.K && Ib(this.j, "scroll", this.K, Eb);
            super.i()
        }
    };

    function ZM(a) {
        const b = a.G.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.j.innerHeight) && !c
    }
    class $M extends U {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.m = b;
            this.G = c;
            this.A = 0;
            this.l = ZM(this);
            this.F = Cb(this.C, this);
            this.g = jz(433, () => {
                var d = this.F;
                Mi.requestAnimationFrame ? Mi.requestAnimationFrame(d) : d()
            });
            Hb(this.j, "scroll", this.g, Eb)
        }
        C() {
            const a = ZM(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.m.contentWindow;
                c && (jM(c, "ig", b, "*", 2), 10 <= ++this.A && this.g && Ib(this.j, "scroll", this.g, Eb))
            }
            this.l = a
        }
    };

    function aN(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Cj(a, "transition", b.join(","))
    }
    var bN = Ab(function() {
        if (kc) return !0;
        var a = $d(document, "DIV"),
            b = oc ? "-webkit" : nc ? "-moz" : kc ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        vd("div");
        b = yd("div", b);
        Fd(a, b);
        a = a.firstChild;
        b = a.style[Rd("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Dj(a, "transition")] || "")
    });

    function cN(a, b, c) {
        0 > a.i[b].indexOf(c) && (a.i[b] += c)
    }

    function dN(a, b) {
        0 <= a.g.indexOf(b) || (a.g = b + a.g)
    }

    function eN(a, b, c, d) {
        return "" != a.errors || b ? null : "" == a.g.replace(fN, "") ? null != c && a.i[0] || null != d && a.i[1] ? !1 : !0 : !1
    }

    function gN(a) {
        var b = eN(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var hN = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        ta(a) {
            0 > this.errors.indexOf(a) && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function iN(a) {
        let b = a.P;
        a.D = () => {};
        jN(a, a.v, b);
        let c = a.v.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ie(c, b)
            } catch (g) {
                a.g.ta("c")
            }
            const f = kN(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.K = !0);
            if (d && !f && lN(e)) {
                dN(a.g, "l");
                a.C = c;
                break
            }
            d = d && f;
            if (e && mN(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Ce(b)) {
                        dN(a.g, "c");
                        break
                    }
                } catch (g) {
                    dN(a.g,
                        "c");
                    break
                }
            }
        }
        a.A && a.m && nN(a);
        return a.g
    }

    function oN(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) Cj(k, m[n], "0px")
        }

        function c() {
            pN(d, g, h);
            !k || l || h || (b(qN), b(rN))
        }
        const d = a.v;
        d.style.overflow = a.Qc ? "visible" : "hidden";
        a.A && (a.C ? (aN(d, sN()), aN(a.C, sN())) : aN(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.G && (d.style.opacity = String(a.G));
        const e = null != a.width && null != a.j && (a.Kd || a.j > a.width) ? a.j : null,
            f = null != a.height && null != a.i && (a.Kd || a.i > a.height) ? a.i : null;
        if (a.F) {
            const m =
                a.F.length;
            for (let n = 0; n < m; n++) pN(a.F[n], e, f)
        }
        const g = a.j,
            h = a.i,
            k = a.C,
            l = a.K;
        a.A ? t.setTimeout(c, 1E3) : c()
    }

    function tN(a) {
        if (a.m && !a.V || null == a.j && null == a.i && null == a.G && a.m) return a.g;
        var b = a.m;
        a.m = !1;
        iN(a);
        a.m = b;
        if (!b || null != a.check && !eN(a.g, a.check, a.j, a.i)) return a.g;
        0 <= a.g.g.indexOf("n") && (a.width = null, a.height = null);
        if (null == a.width && null !== a.j || null == a.height && null !== a.i) a.A = !1;
        (0 == a.j || 0 == a.i) && 0 <= a.g.g.indexOf("l") && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        oN(a);
        return iN(a)
    }

    function mN(a, b) {
        let c = !1;
        "none" == b.display && (dN(a.g, "n"), a.m && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || dN(a.g, "v");
        "hidden" == b.overflow && dN(a.g, "o");
        "absolute" == b.position ? (dN(a.g, "a"), c = !0) : "fixed" == b.position && (dN(a.g, "f"), c = !0);
        return c
    }

    function jN(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = uN(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && cN(a.g, 0, "o"), d & 4 && cN(a.g, 1, "o"));
        return !(d & 1)
    }

    function kN(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (z) {
            a.g.ta("s")
        }
        var f = c.getAttribute("width"),
            g = Re(f),
            h = c.getAttribute("height"),
            k = Re(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = jN(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            q = e && e.height,
            v = Se(m) == a.width && Se(n) == a.height;
        m = v ? m : p;
        q = v ? n : q;
        p = Se(m);
        v = Se(q);
        g = null !== a.width && (null !== p && a.width >= p || null !== g && a.width >= g);
        v = null !== a.height && (null !== v && a.height >= v || null !== k && a.height >= k);
        k = !b && lN(d);
        v = b || v || k || !(f ||
            m || d && (!vN(String(d.minWidth)) || !wN(String(d.maxWidth))));
        l = b || g || k || l || !(h || q || d && (!vN(String(d.minHeight)) || !wN(String(d.maxHeight))));
        xN(a, 0, v, c, "width", f, a.width, a.j);
        yN(a, 0, "d", v, e, d, "width", m, a.width, a.j);
        yN(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        yN(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.af ? (c = /^html|body$/i.test(c.nodeName), f = Se(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.i && d && f && Math.round(f) !== a.i && !h && "100%" !== d.minHeight, a.m && !c && h && (e.setProperty("height",
            "auto", "important"), d && !vN(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !wN(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (xN(a, 1, l, c, "height", h, a.height, a.i), yN(a, 1, "d", l, e, d, "height", q, a.height, a.i), yN(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i), yN(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function nN(a) {
        function b() {
            if (0 < c) {
                var l = Ie(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = Se(l.width);
                l = Se(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.P,
            e = a.v,
            f = a.j,
            g = a.i,
            h = a.D;
        let k;
        t.setTimeout(() => {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function uN(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ie(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.l.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function xN(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Re(f);
                null == f && (a.g.ta("n"), cN(a.g, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.m)
                        if (a.A) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.D;
                            a.D = (m, n) => {
                                m == b && xe(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else xe(d, e, String(h))
                } else cN(a.g, b, "d")
        }
    }

    function yN(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? vN(f) : wN(f)) || (f = Se(f), null == f ? dN(a.g, "p") : null != k && dN(a.g, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? vN(h) : wN(h)) return;
                h = Se(h);
                null == h && (a.g.ta("p"), cN(a.g, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.m)
                        if (a.A) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.D;
                            a.D = (p, q) => {
                                p == b && (e[g] = m - q + "px");
                                n && n(p, q)
                            }
                        } else e[g] = l + "px"
                } else cN(a.g, b, c)
        }
    }
    var DN = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.v = b;
            this.F = c;
            this.l = new zN(this.v);
            this.C = this.D = null;
            this.K = !1;
            this.P = (a = this.v.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new zN(this.v);
            this.m = g;
            this.V = AN(this.l, d.hf, d.height, d.Jc);
            this.width = this.m ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.m ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = BN(d.width);
            this.i = BN(d.height);
            this.G = this.m ? BN(d.opacity) : null;
            this.check = d.check;
            this.Jc = !!d.Jc;
            this.A = "animate" == d.hf && !CN(this.l, this.i, this.Jc) && bN();
            this.Qc = !!d.Qc;
            this.g = new hN;
            CN(this.l, this.i, this.Jc) && dN(this.g, "r");
            e = this.l;
            e.g && e.i >= e.T && dN(this.g, "b");
            this.Kd = !!d.Kd;
            this.af = !!d.af
        }
    };

    function CN(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, BN(a.getHeight())), a = a.g && b >= a.T) : a = a.g && a.i >= a.T, d = a);
        return d
    }
    var zN = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Fe(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.i = e;
            c = c || t;
            this.T = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && zL(b);
            this.visible = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function AN(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return CN(a, c, d)
        }
    }

    function lN(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function EN(a, b, c, d) {
        return tN(new DN(a, b, d, c, null, null, !0))
    }
    var FN = new hN("s", ""),
        fN = RegExp("[lonvafrbpEe]", "g");

    function wN(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function vN(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function pN(a, b, c) {
        null !== b && null !== Re(a.getAttribute("width")) && a.setAttribute("width", String(b));
        null !== c && null !== Re(a.getAttribute("height")) && a.setAttribute("height", String(c));
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var qN = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        rN = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function sN() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = qN;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = rN;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function BN(a) {
        return "string" === typeof a ? Re(a) : "number" === typeof a && isFinite(a) ? a : null
    };
    var GN = class extends RM {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        aa(a) {
            a["resize-me"] = (b, c) => {
                b = on(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = Re(b.r_nw),
                        f = Re(b.r_nh),
                        g = Re(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const q = window;
                        if (q)
                            if ("no_rsz" === h) b.err = "7", e = !0;
                            else {
                                var n = new zN(this.g);
                                if (n.g) {
                                    var p = n.getWidth();
                                    null != p && (b.w = p);
                                    p = n.getHeight();
                                    null != p && (b.h = p);
                                    AN(n, h, f, m) ? (n = this.l, d = EN(q, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        hf: h,
                                        Qc: k,
                                        Kd: l,
                                        Jc: m
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && D(n, {
                                        height: (null === f ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), null != e && (b.nw = e), null != f && (b.nh = f), b.rsz = d.toString(), b.abl = gN(d), b.frsz = ("force" === h).toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };
    const HN = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const IN = /^blogger$/,
        JN = /^wordpress(.|\s|$)/i,
        KN = /^joomla!/i,
        LN = /^drupal/i,
        MN = /\/wp-content\//,
        NN = /\/wp-content\/plugins\/advanced-ads/,
        ON = /\/wp-content\/themes\/genesis/,
        PN = /\/wp-content\/plugins\/genesis/;

    function QN(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (NN.test(e)) return 5;
                if (PN.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", ON.test(e) || PN.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (IN.test(f)) return 1;
                if (JN.test(f)) return 2;
                if (KN.test(f)) return 3;
                if (LN.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", MN.test(d))) return 2;
        return 0
    };
    let RN = navigator;
    var SN = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        TN = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return SN(a.toLowerCase())
        };
    const UN = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        VN = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        WN = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function XN(a) {
        var b = window;
        return "on" === a.google_adtest || "on" === a.google_adbreak_test || b.location.host.endsWith("h5games.usercontent.goog") ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && 0 < c) || [] : []
    };

    function YN(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => 0 === c.indexOf("ID=")) || null, a.j = b.find(c => 0 === c.indexOf("T=")) ? .substring(2) || null)
    }
    var ZN = class {
            constructor() {
                this.l = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g,
                            c = Number(a[1]);
                        a = null !== b ? Me(`${"w5uHecUBa2S"}:${Number(a[0])}:${b}`) % c === Math.floor(this.l.valueOf() / 864E5) % c : void 0;
                        return a
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(1E3 * a), a = 1E4 * a.getFullYear() + 100 * (a.getMonth() + 1) + a.getDate());
                        return a
                    }
                }
            }
        },
        $N;

    function aO(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function bO(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function cO(a = Je()) {
        return b => Me(`${b} + ${a}`) % 1E3
    };

    function dO(a, b) {
        a.g = Im(14, b, () => {})
    }
    class eO {
        constructor() {
            this.g = () => {}
        }
    }

    function fO(a) {
        w(eO).g(a)
    };

    function gO(a = aO()) {
        Jm(w(Km), a);
        hO(a);
        dO(w(eO), a);
        w(Lb).i()
    }

    function hO(a) {
        const b = w(Lb);
        b.j = (c, d) => Im(5, a, () => !1)(c, d, 1);
        b.l = (c, d) => Im(6, a, () => 0)(c, d, 1);
        b.m = (c, d) => Im(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Im(8, a, () => [])(c, d, 1);
        b.i = () => {
            Im(15, a, () => {})(1)
        }
    };

    function iO(a, b, c) {
        var d = {
            [0]: cO(hf(b).toString())
        };
        if (c) {
            c = XK(new aL(b), "__gads", c) || "";
            $N || ($N = new ZN);
            b = $N;
            YN(b, c);
            fO(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? cO(e)(f) : void 0
        }
        d = Lm(a, d);
        Qm.La(1085, rI(w(vI), a, d))
    }
    var jO = (a, b) => {
            iO(20, a, b);
            iO(17, a, b)
        },
        kO = a => {
            const b = Mm();
            a = XN(a);
            return b.concat(a).join(",")
        },
        lO = a => {
            const b = fk();
            b && (a.debug_experiment_id = b)
        };

    function mO() {
        const a = new $t;
        "SVGElement" in t && "createElementNS" in t.document && a.set(0);
        const b = We();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        "TextDecoder" in t && "TextEncoder" in t && a.set(4);
        return Zt(a)
    };
    const nO = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        oO = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function pO(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return nO.get(b.type) ? ? null
        } catch {}
        return oO.get(a.performance ? .navigation ? .type) ? ? null
    };
    var qO = class extends T {
        constructor() {
            super()
        }
    };

    function rO(a, b) {
        if (hc()) {
            var c = a.document.documentElement.lang;
            sO(a) ? tO(b, hf(a), !0, "", c) : (new MutationObserver((d, e) => {
                sO(a) && (tO(b, hf(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function sO(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function tO(a, b, c, d, e) {
        Li({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function uO(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const vO = /[+, ]/;

    function wO(a, b) {
        const c = a.B;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = lf(d);
        a: {
            var h = c.google_ad_width || d.google_ad_width;
            var k = c.google_ad_height || d.google_ad_height;
            if (d && d.top == d) var l = !1;
            else {
                l = d.document;
                var m = l.documentElement;
                if (h && k) {
                    let p = 1,
                        q = 1;
                    d.innerHeight ? (p = d.innerWidth, q = d.innerHeight) : m && m.clientHeight ? (p = m.clientWidth, q = m.clientHeight) : l.body && (p = l.body.clientWidth, q = l.body.clientHeight);
                    if (q > 2 * k || p > 2 * h) {
                        l = !1;
                        break a
                    }
                }
                l = !0
            }
        }
        m = au(g).Ge;
        h = d.top == d ? 0 : Ce(d.top) ? 1 : 2;
        k = 4;
        l || 1 != h ? l || 2 != h ? l &&
            1 == h ? k = 7 : l && 2 == h && (k = 8) : k = 6 : k = 5;
        m && (k |= 16);
        m = "" + k;
        h = cu(d);
        k = !!c.google_page_url;
        e.google_iframing = m;
        0 != h && (e.google_iframing_environment = h);
        if (!k && "ad.yieldmanager.com" == f.domain) {
            for (m = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < m.indexOf("%");) try {
                m = decodeURIComponent(m)
            } catch (p) {
                break
            }
            c.google_page_url = m;
            k = !!m
        }
        k ? (e.google_page_url = c.google_page_url, e.google_page_location = (l ? f.referrer : f.URL) || "EMPTY") : (l && Ce(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL :
            e.google_page_url = l ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = uj()) && d.referrer || "";
        e.google_referrer_url = d;
        bu(e, c);
        e = c.google_page_location || c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in HN), 2 <= e.length && (d = d || e[e.length - 2] in HN), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = xO(a, b);
        d = a.B;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && yO.test(f) && (g = "/pagead/lopri?");
        a = Rj(b, `https://${e}${g}` + (P(a.za, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function zO(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = a ? Yd(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && Ce(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function AO(a, b) {
        var c = kO(a.pubWin);
        a.B.saaei && (c += ("" === c ? "" : ",") + a.B.saaei);
        b.eid = c;
        c = a.B.google_loeid;
        "string" === typeof c && (a.g |= 4096, b.loeid = c)
    }

    function BO(a, b) {
        a = (a = Fe(a.pubWin)) && a.document ? Xt(a.document, a) : new Ld(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function CO(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function DO(a, b, c) {
        const d = a.B;
        var e = a.pubWin,
            f = a.H,
            g = lf(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = uj(e)) && Aa(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = au(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Ge || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.rc && (b.etu = a.rc);
        (c = $L(d, f, f ? Ri(c, f) : null)) && (b.fc = c);
        if (!Yj(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = (new Ud(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const ka = h.contentWindow.document;
                    ka.open();
                    var k = ud("<!DOCTYPE html>");
                    ka.write(rd(k));
                    ka.close();
                    g += ka.documentMode
                } catch (ka) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, q, v, z, A, E, I;
        try {
            l = e.screenX, m = e.screenY
        } catch (ka) {}
        try {
            n = e.outerWidth, p = e.outerHeight
        } catch (ka) {}
        try {
            q = e.innerWidth, v = e.innerHeight
        } catch (ka) {}
        try {
            z = e.screenLeft, A = e.screenTop
        } catch (ka) {}
        try {
            q =
                e.innerWidth, v = e.innerHeight
        } catch (ka) {}
        try {
            E = e.screen.availWidth, I = e.screen.availTop
        } catch (ka) {}
        b.brdim = [z, A, l, m, E, I, n, p, q, v].join();
        k = 0;
        void 0 === t.postMessage && (k |= 1);
        0 < k && (b.osd = k);
        b.vis = zL(e.document);
        k = a.da;
        e = UL(d) ? FN : tN(new DN(e, k, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = gN(e);
        if (!UL(d) && (e = Zj(d), null != e)) {
            k = 0;
            a: {
                try {
                    {
                        var x = d.google_async_iframe_id;
                        const ka = window.document;
                        if (x) var G = ka.getElementById(x);
                        else {
                            var K = ka.getElementsByTagName("script"),
                                N = K[K.length - 1];
                            G = N && N.parentNode || null
                        }
                    }
                    if (x = G) {
                        G = [];
                        K = 0;
                        for (var oa = Date.now(); 100 >= ++K && 50 > Date.now() - oa && (x = zO(x));) 1 === x.nodeType && G.push(x);
                        var ea = G;
                        b: {
                            for (oa = 0; oa < ea.length; oa++) {
                                c: {
                                    var ha = ea[oa];
                                    try {
                                        if (ha.parentNode && 0 < ha.offsetWidth && 0 < ha.offsetHeight && ha.style && "none" !== ha.style.display && "hidden" !== ha.style.visibility && (!ha.style.opacity || 0 !== Number(ha.style.opacity))) {
                                            const ka = ha.getBoundingClientRect();
                                            var kb = 0 < ka.right && 0 < ka.bottom;
                                            break c
                                        }
                                    } catch (ka) {}
                                    kb = !1
                                }
                                if (!kb) {
                                    var Ia = !1;
                                    break b
                                }
                            }
                            Ia = !0
                        }
                        if (Ia) {
                            b: {
                                const ka = Date.now();Ia = /^html|body$/i;kb = /^fixed/i;
                                for (ha = 0; ha < ea.length && 50 > Date.now() - ka; ha++) {
                                    const se = ea[ha];
                                    if (!Ia.test(se.tagName) && kb.test(se.style.position || Gj(se, "position"))) {
                                        var Id = se;
                                        break b
                                    }
                                }
                                Id = null
                            }
                            break a
                        }
                    }
                } catch {}
                Id = null
            }
            Id && Id.offsetWidth * Id.offsetHeight <= 4 * e.width * e.height && (k = 1);
            b.pfx = k
        }
        a: {
            if (.05 > Math.random() && f) try {
                const ka = f.document.getElementsByTagName("head")[0];
                var Yh = ka ? QN(ka) : 0;
                break a
            } catch (ka) {}
            Yh = 0
        }
        f = Yh;
        0 !== f && (b.cms = f);
        d.google_lrv !== a.qb && (b.alvm = d.google_lrv ||
            "none")
    }

    function EO(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : De(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function FO(a, b) {
        const c = Z(b, 8, {});
        b = Z(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function GO(a, b, c) {
        const d = a.B;
        var e = a.B;
        b.dt = Sm;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (K) {}
            g = null
        }(e = (e = g) ? DM(e, t.Date.now() - Sm, 1E6) : null) && (b.bdt = e);
        b.idt = DM(a.D, Sm);
        e = a.B;
        b.shv = Q(a.za, 2);
        a.qb && (b.mjsv = a.qb);
        "sd" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = uj(a.pubWin)) b.is_amp = 1, b.amp_v = vj(e), (e = wj(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new aL(a.pubWin);
        (g = XK(e, "__gads", c)) && (b.cookie = g);
        (g = XK(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        "1" === XK(e, "__gpi_opt_out", c) && (b.pdopt = "1");
        e = RH();
        f = Z(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Z(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        FO(d, e);
        g = Z(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = uj(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0,
            6))) : g = null, g = +g) : (g = lf(window), f = g.google_global_correlator, f || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = Z(e, 7, g);
        y(Gt) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Z(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(vO);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f = Z(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(vO);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n <
                    l.length; n++) {
                    var p = l[n];
                    "" !== p && (f[k][p] ? m += "+" + p : f[k][p] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var q = lf(window),
                v = q.google_prev_clients;
            v || (v = q.google_prev_clients = {});
            if (e in v) var z = 1;
            else v[e] = !0, z = 2
        } catch {
            z = 0
        }
        b.pv = z;
        a.H && y(us) && (z = a.H, z = hc() && sO(z) ? z.document.documentElement.lang : void 0, z && (b.tl = z));
        v = a.pubWin.document;
        z = a.B;
        e = a.pubWin;
        q = v.domain;
        e = (P(c, 5) && Ti(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = v.referrer;
        m = Tj();
        if (uj()) var A = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = z.google_analytics_domain_name;
            c = "undefined" == typeof f ? TN("auto", q) : TN(f, q);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (q = (zj() || window).gaGlobal) || (q = {}, (zj() || window).gaGlobal = q);
            v = !1;
            if (n) {
                var E = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? q.sid = E[3] : q.sid || (q.sid = g + "");
                q.vid = E[0] + "." + E[1];
                q.from_cookie = !0
            } else {
                q.sid ||
                    (q.sid = g + "");
                if (!q.vid) {
                    v = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = RN.appName;
                    p = RN.version;
                    var I = RN.language ? RN.language : RN.browserLanguage,
                        x = RN.platform,
                        G = RN.userAgent;
                    try {
                        E = RN.javaEnabled()
                    } catch (K) {
                        E = !1
                    }
                    E = [n, p, I, x, G, E ? 1 : 0].join("");
                    h ? E += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), E += h.screen.width + "x" + h.screen.height);
                    E = E + e + (k || "");
                    for (h = E.length; 0 < m;) E += m-- ^ h++;
                    q.vid = (l ^ SN(E) & 2147483647) + "." + g
                }
                q.from_cookie || (q.from_cookie = !1)
            }
            if (!q.cid) {
                b: for (g = f, E = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, E = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = UN.exec(e[f]) || VN.exec(e[f]) || WN.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == E) {
                            A = h[2];
                            break b
                        }
                        k < g && (g = k, A = h[2])
                    }v && A && -1 != A.search(/^\d+\.\d+$/) ? (q.vid = A, q.from_cookie = !0) : A != q.vid && (q.cid = A)
            }
            q.dh = c;
            q.hid || (q.hid = Math.round(2147483647 * Math.random()));
            A = q
        }
        b.ga_vid = A.vid;
        b.ga_sid = A.sid;
        b.ga_hid = A.hid;
        b.ga_fc = A.from_cookie;
        b.ga_cid = A.cid;
        b.ga_wpids = z.google_analytics_uacct;
        EO(a.pubWin,
            b);
        (a = d.google_ad_layout) && 0 <= sM[a] && (b.rplot = sM[a])
    }

    function HO(a, b) {
        a = a.i;
        if (a ? .g() || $H()) b.npa = 1;
        if (a) {
            null != xh(a, 3) && (b.gdpr = P(a, 3) ? "1" : "0");
            var c = O(a, 1);
            c && (b.us_privacy = c);
            (c = O(a, 2)) && (b.gdpr_consent = c);
            (c = O(a, 4)) && (b.addtl_consent = c);
            (c = H(a, 7)) && (b.tcfe = c);
            y(Gr) && ((c = Q(a, 11)) && (b.gpp = c), (a = yh(a, 10, Ng, 2, void 0, void 0, 0)) && 0 < a.length && (b.gpp_sid = a.join(",")))
        }
    }

    function GQ(a, b) {
        const c = a.B;
        HO(a, b);
        Ke(dI, (d, e) => {
            b[d] = c[e]
        });
        UL(c) && (a = fM(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = lA(c), null != a.g && (a = dp(a.getValue()), b.pi = a))
    }

    function HQ(a, b) {
        var c = yj() || Vt(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = Vt(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function IQ(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = Vt(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Me(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function JQ(a, b) {
        (a = YH()[a.B.google_ad_client]) && (b.psts = a.join())
    }

    function KQ(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function LQ(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = sf(a))
    }

    function MQ(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function NQ(a, b) {
        0 <= a.B.google_ad_public_floor && (b.pubf = a.B.google_ad_public_floor);
        0 <= a.B.google_ad_private_floor && (b.pvtf = a.B.google_ad_private_floor)
    }

    function OQ(a, b) {
        const c = Number(a.B.google_traffic_source);
        c && Object.values(Na).includes(c) && (b.trt = a.B.google_traffic_source)
    }

    function PQ(a, b) {
        var c;
        (c = y(Mt)) || (c = a.m ? .label, c = y(qt) && c ? !!c.match(Mb(ot)) : !1);
        c || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function QQ(a, b) {
        if (null != a.m && (!y(rt) || hc())) {
            var c = new qO,
                d = gi(c, 3, a.m.label);
            S(d, 4, a.m.status);
            b.psd = sf(hi(c))
        }
    }

    function RQ(a, b) {
        y(Dt) || bO("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function SQ(a, b) {
        if ("string" === typeof a.B.google_privacy_treatments) {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.B.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function TQ(a, b) {
        y(jt) && (b.bz = mf(a.pubWin))
    }

    function xO(a, b) {
        const c = {};
        GQ(a, c);
        LQ(a, c);
        GO(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = Tj();
        c.u_h = Mi.screen ? .height;
        c.u_w = Mi.screen ? .width;
        c.u_ah = Mi.screen ? .availHeight;
        c.u_aw = Mi.screen ? .availWidth;
        c.u_cd = Mi.screen ? .colorDepth;
        c.u_sd = Wt(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        iz(889, () => {
            if (null == a.H) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = WK(a.H, a.da);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Yt(a.da) || (c.adx = -12245933,
                    c.ady = -12245933, a.g |= 32768)
            }
        });
        HQ(a, c);
        IQ(a, c);
        BO(a, c);
        AO(a, c);
        c.oid = 2;
        JQ(a, c);
        c.pvsid = hf(a.pubWin, gz);
        KQ(a, c);
        MQ(a, c);
        c.uas = uO(a.pubWin);
        const d = pO(a.pubWin);
        d && (c.nvt = d);
        a.A && (c.scar = a.A);
        a.l instanceof Uint8Array ? c.topics = qf(a.l) : a.l && (c.topics = a.l, c.tps = a.l);
        DO(a, c, b);
        c.fu = a.g;
        c.bc = mO();
        P(a.za, 9) && (lO(c), c.creatives = CO(/\b(?:creatives)=([\d,]+)/), c.adgroups = CO(/\b(?:adgroups)=([\d,]+)/), c.adgroups && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0));
        kj() && (c.atl = !0);
        TQ(a, c);
        NQ(a, c);
        OQ(a, c);
        PQ(a, c);
        QQ(a, c);
        RQ(a, c);
        SQ(a, c);
        y(st) && "true" === String(a.B.google_xz) && (c.scd = 1);
        null == Mb(tt) || !1 !== a.B.google_video_play_muted && !0 !== y(ut) || 10 !== a.B.google_reactive_ad_format && 11 !== a.B.google_reactive_ad_format || (c.sdkv = Mb(tt));
        return c
    }
    const yO = /YtLoPri/;
    var UQ = class extends T {};
    UQ.L = [5];
    var Kh = class extends T {
            ze() {
                return Q(this, 18)
            }
            nd() {
                return Q(this, 19)
            }
            Ae() {
                return Q(this, 20)
            }
        },
        VQ = ni(Kh);
    Kh.L = [15];
    var WQ = class extends T {},
        XQ = ni(WQ);
    WQ.L = [3];
    var YQ = class {
        constructor(a) {
            this.ie = a.ie;
            this.Tb = a.Tb ? ? [];
            this.Ff = a.Ff ? ? 300;
            this.Mc = a.Mc ? ? !1;
            this.Te = a.Te ? ? .1;
            this.Yc = !!a.Yc;
            this.Ye = a.Ye ? ? !1;
            this.Xe = !!a.Xe;
            this.Pa = a.Pa ? ? !1;
            this.Fb = !!a.Fb;
            this.sg = a.sg ? ? 0;
            this.Cf = a.Cf ? ? 0;
            this.re = a.re ? ? !1;
            this.se = a.se ? ? !1;
            this.we = !!a.we;
            this.Yd = a.Yd ? ? 3E4;
            this.Ie = !!a.Ie;
            this.Je = a.Je ? ? !0;
            this.Ve = !!a.Ve;
            this.Od = !!a.Od;
            this.ve = !!a.ve
        }
    };

    function ZQ(a, b, c, d, e) {
        var f = J(b, HM, 2);
        try {
            const k = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
            if (k) {
                var g = decodeURIComponent(k[1]);
                var h = VQ(g)
            } else h = null
        } catch (k) {
            h = null
        }
        h = h || Jh(b);
        f = f ? .g() && (488 > cn(a) || !f ? .j()) ? 0 : 1;
        b = L(b, Yp, 3);
        a = {
            sj: B(Fs),
            Hc: 300,
            bf: 2,
            ae: 5,
            Sb: 300,
            Wh: y(Is) ? void 0 : $Q(a, b),
            Sf: y(Is) ? b : void 0
        };
        return {
            W: h,
            bd: c,
            te: f,
            ri: d,
            Fa: a,
            ic: {
                Hc: 50,
                jf: B(et)
            },
            M: new YQ({
                ie: B(ft),
                Tb: Mm(),
                Ff: B(Es),
                Te: B(Zs),
                Mc: y(gt),
                Yc: y(Hs),
                Ye: y(bt),
                Xe: y(at),
                Pa: y(Ns),
                Fb: y(Ps),
                sg: B(Vs),
                Cf: B(Bs),
                re: y(Js),
                se: y(Ks),
                we: y(Os),
                Yd: B(Ds),
                Ie: y(Xs),
                Je: y(Ys),
                Ve: y($s),
                Od: y(dt),
                ve: y(Ls)
            }),
            Xd: e
        }
    }

    function $Q(a, b) {
        a = sA(Hz(b, a), a);
        if (0 !== a.length) return a.reduce((c, d) => c.ga.g > d.ga.g ? c : d)
    };

    function aR(a, b) {
        a.entries.push(oh(b));
        return a.entries.length - 1
    }

    function bR(a) {
        return a.i = a.i ? ? new Ul
    }

    function cR(a, b, c, d, e, f, g, h) {
        var k = new em,
            l = new Il;
        c = gi(l, 1, c);
        d = gi(c, 2, d);
        b = bi(d, 3, b);
        b = ei(b, 4, a.g);
        k = M(k, 1, b);
        b = new Jl;
        b = gi(b, 2, a.j);
        e = gi(b, 3, e);
        e = M(k, 2, e);
        g = R(e, 3, Math.round(g));
        b = L(f, UQ, 15);
        e = d = k = 0;
        for (m of b) k += (P(m, 3) ? 1 : 0) + (P(m, 4) ? 1 : 0) + yh(m, 5, Sg, 2).length, c = P(m, 3) ? 1 : 0, l = P(m, 4) || yh(m, 5, Sg, 2).length ? 1 : 0, d += c + l, e += P(m, 3) ? 1 : 0;
        var m = new dm;
        m = ci(m, 1, b.length);
        m = ci(m, 2, k);
        m = rh(m, 3, null == d ? d : Fg(d));
        m = rh(m, 4, null == e ? e : Fg(e));
        m = M(g, 6, m);
        h.length ? (a = new Ol, a = Nh(a, 1, h), Mh(m, 5, fm, a)) : (h = new cm, h = Nh(h, 2,
            a.entries), f = L(f, UQ, 15).length, f = R(h, 3, f), a = M(f, 4, a.i), Mh(m, 4, fm, a));
        return m
    }
    var dR = class {
        constructor() {
            this.entries = [];
            this.g = 0;
            this.i = this.j = null
        }
    };
    async function eR(a, b) {
        await new Promise(c => {
            0 < a.j && a.win.requestIdleCallback ? a.win.requestIdleCallback(() => void c(), {
                timeout: a.j
            }) : a.win.setTimeout(c, 0)
        });
        a.i = a.g.Aa(b) + a.l
    }
    var fR = class {
        constructor(a, b) {
            var c = B(Gs),
                d = B(Ts);
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = d;
            this.i = b.Aa(2) + c
        }
    };
    var gR = class {
            constructor(a) {
                this.performance = a
            }
            Aa() {
                return this.performance.now()
            }
        },
        hR = class {
            Aa() {
                return Date.now()
            }
        };
    const iR = [255, 255, 255];

    function jR(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a || "" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function kR(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = jR(b.backgroundColor);
        var c = lR(b);
        if (c) return c;
        a = (a = a.parentElement) ? kR(a) : iR;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function lR(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var nR = class {
        constructor(a, b, c, d) {
            this.bf = b;
            this.ae = c;
            this.Sb = d;
            this.i = 0;
            this.g = new mR(a)
        }
    };

    function oR(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            0 < e && a.g.set(c, d.slice(e))
        }
    }
    class mR {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function pR(a) {
        D(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function qR(a, b) {
        return rR(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z")
    }

    function sR(a) {
        return rR(a, "0 -960 960 960", "20px", "20px", "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z")
    }

    function tR(a, b) {
        a = rR(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        D(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }

    function rR(a, b, c, d, e) {
        const f = a.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        a = a.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.setAttribute("viewBox", b);
        a.setAttribute("width", c);
        a.setAttribute("height", d);
        pR(a);
        a.appendChild(f);
        return a
    };
    const uR = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function vR(a, b, c, d, e) {
        a = new wR(a, b, c, d, e);
        if (a.l) {
            Eo(a.win, uR);
            var f = a.win;
            b = a.message;
            c = Ju(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new Ud(f.document);
            var g = Pq('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                he(f, Kq(g)));
            d = vw("ipr-container", e);
            e = vw("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = vw("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Ra;
            qA(a.l, a.g);
            a.j && a.j(Cl(1));
            xR(a)
        } else yR(a)
    }

    function xR(a) {
        const b = new Ho(a.win);
        b.I(2E3);
        Fn(a, b);
        Fo(b, () => {
            zR(a);
            yR(a);
            b.ha()
        })
    }

    function yR(a) {
        Dy(a.win, a.Ib).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        a.j && a.j(Cl(2))
    }

    function zR(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var wR = class extends U {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.Ib = d;
            this.j = e;
            this.g = null
        }
        i() {
            zR(this);
            super.i()
        }
    };

    function AR(a, b, c, d, e, f) {
        if (!a.g) {
            var g = b.document.createElement("span");
            g.appendChild(qR(b.document, "12px"));
            g.appendChild(b.document.createTextNode(d));
            vR(b, c || null, {
                informationText: g
            }, e, f ? h => {
                var k = f.handle,
                    l = BR(f, 16);
                h = Mh(l, 11, qm, h);
                k.call(f, h)
            } : f);
            a.g = !0
        }
    }
    var CR = class {
        constructor() {
            this.g = !1
        }
    };
    const DR = [{
        Md: "1907259590",
        Cd: 480,
        Ab: 220
    }, {
        Md: "2837189651",
        Cd: 400,
        Ab: 180
    }, {
        Md: "9211025045",
        Cd: 360,
        Ab: 160
    }, {
        Md: "6584860439",
        Cd: -Infinity,
        Ab: 150
    }];

    function ER(a) {
        return DR.find(b => b.Cd <= a)
    };

    function FR(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };

    function GR(a) {
        HR.g.push(a)
    }
    const HR = new class {
        constructor() {
            this.g = []
        }
    };
    let IR = !1;

    function JR(a) {
        KR(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new nm;
                b = R(b, 1, a.i);
                var c = new mm;
                b = Mh(b, 2, om, c);
                LR(a.config.ca, b)
            }
        }, 1E4)
    }
    class MR {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function NR(a, b, c, d, e, f) {
        const g = ER(a.document.body.clientWidth);
        d = b.na ? OR(a, b, d, g, e, f) : PR(a, b, d, g, e, f);
        Sn(d.isVisible(), !1, () => {
            IR = !1;
            var k = HR;
            for (const l of k.g) l();
            k.g.length = 0
        });
        d.show({
            Vf: !0
        });
        IR = !0;
        const h = new MR(a, b, c);
        JR(h);
        GR(() => {
            var k = b.ca;
            var l = new nm;
            l = R(l, 1, c);
            var m = new lm;
            l = Mh(l, 3, om, m);
            LR(k, l);
            h.g = !0
        })
    }

    function OR(a, b, c, d, e, f) {
        d = b.M.Mc ? QR(a, b, c, f) : RR(a, b, c, {
            he: d,
            Wf: a.innerWidth,
            Uf: "100%",
            xg: "15px",
            Tf: "13px",
            yg: "center",
            Xg: 0
        }, e, f);
        return xx(a, d, {
            Ue: b.M.ve ? .95 : .75,
            ye: .95,
            zIndex: 100001,
            mb: !0,
            pe: "adpub-drawer-root",
            ne: !1,
            Da: !0,
            ue: new W(Q(b.W, 10).replace("TERM", c))
        })
    }

    function PR(a, b, c, d, e, f) {
        a: {
            var g = a.document.body.clientWidth;
            var h = .9 * g;
            for (g = 768 >= g ? 3 : 4; 1 <= g; g--) {
                const k = d.Ab * g + 42;
                if (k <= h) {
                    h = k;
                    break a
                }
            }
        }
        d = b.M.Mc ? QR(a, b, c, f) : RR(a, b, c, {
            he: d,
            Wf: h,
            Uf: "600px",
            xg: "24px",
            Tf: "24px",
            yg: "start",
            Xg: 0
        }, e, f);
        return Hw(a, d, {
            uc: `${h}px`,
            tc: b.ja(),
            jc: Q(b.W, 14),
            zIndex: 100001,
            mb: !0,
            dd: !0,
            pe: "adpub-drawer-root",
            ne: !1,
            Da: !0,
            ue: new W(Q(b.W, 10).replace("TERM", c))
        })
    }

    function QR(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.W;
        f = new ur(e, Q(f, 16), "anno-cse", FR(b.i, P(f, 22)), "ShoppingVariant", a.location, Q(f, 7), Q(f, 10).replace("TERM", c), b.M.Od ? b.M.Tb : b.M.ie, !1, !0, void 0, b.M.Od);
        f.I();
        SR(a, b, e, c, f, d);
        return e
    }

    function RR(a, b, c, d, e, f) {
        var g = b.W,
            h = Q(g, 10),
            k = h.indexOf("TERM"),
            l = d.Wf,
            m = d.he;
        l = Math.max(Math.floor((l - Math.floor(l / m.Ab) * m.Ab) / 2), 5);
        m = d.Uf;
        const n = Q(g, 3),
            p = d.xg,
            q = d.Tf,
            v = d.yg,
            z = Q(g, 6),
            A = h.substring(0, k);
        h = h.substring(k + 4);
        k = !!P(g, 13);
        e = Pq('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' + Tq(X(p)) +
            " " + Tq(X(q)) + "; text-align: " + Tq(X(v)) + ';">' + (e ? '<div style="max-width: ' + Tq(X(m)) + '">' + Oq(n) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Oq(z) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Tq(X(p)) + "; text-align: " + Tq(X(v)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' +
            Oq(A) + "</span>" + Oq(c) + '<span style="color:#80868b">' + Oq(h) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Tq(X(l)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');parent.postMessage({query:" + Xq(Yq(c)) + "},parent.location.origin);\x3c/script>" + (k ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        g = {
            dir: b.ja() ? "rtl" : "ltr",
            lang: Q(g, 7),
            style: gd({
                margin: "0",
                height: "100%",
                "padding-top": `${d.Xg}px`,
                overflow: "hidden"
            })
        };
        e = Kq(e);
        vd("body");
        g = yd("body", g, e);
        e = a.document.createElement("IFRAME");
        D(e, {
            border: "0",
            width: "100%"
        });
        TR(a, b, e, c, d.he, f);
        e.srcdoc = rd(g);
        return e
    }

    function TR(a, b, c, d, e, f) {
        const g = UR(b, a, function(h) {
            h.data.query === d && VR(a, b, c, d, e, f)
        });
        GR(() => {
            a.removeEventListener("message", g)
        })
    }

    function SR(a, b, c, d, e, f) {
        const g = UR(b, a.top, function(h) {
            "init" === h.data.action && "ShoppingVariant" === h.data.adChannel && WR(a, b, c, e, d, f)
        });
        GR(() => {
            a.top.removeEventListener("message", g)
        })
    }

    function VR(a, b, c, d, e, f) {
        const g = c.contentDocument ? .documentElement;
        g && ((new ResizeObserver(() => {
            c.height = `${g.offsetHeight}px`
        })).observe(g), YR(b, a, () => {
            const h = g.offsetHeight;
            h && (c.height = `${h}px`)
        }), ZR(b, c, d, e, f))
    }

    function WR(a, b, c, d, e, f) {
        P(b.W, 13) || sr(d, e, f);
        const g = c.contentDocument.documentElement,
            h = new ResizeObserver(() => {
                c.height = `${Math.ceil(g.offsetHeight+22)}px`
            });
        h.observe(g);
        const k = YR(b, a, () => {
            const l = g.offsetHeight;
            l && (c.height = `${l+22}px`)
        });
        GR(() => {
            h.disconnect();
            a.clearInterval(k)
        })
    }

    function ZR(a, b, c, d, e) {
        const f = a.W,
            g = b.contentWindow;
        b = b ? .contentDocument || b.contentWindow ? .document;
        if (g) {
            if (void 0 === g._googCsa) throw Error("No _googCsa");
            if (!b) throw Error("No contentDocument");
        } else throw Error("No googCsa window");
        a = {
            pubId: FR(a.i, P(f, 22)),
            styleId: d.Md,
            disableCarousel: !0,
            query: c,
            hl: Q(f, 7),
            personalizedAds: "false",
            fexp: a.M.Tb.join(","),
            adfiliateWp: a.i,
            adtest: a.Xd ? "on" : ""
        };
        e && (a.afdToken = e);
        g._googCsa("ads", a, {
            container: "anno-csa",
            linkTarget: "_blank",
            number: 8,
            width: b.body.offsetWidth -
                30
        });
        P(f, 13) && (e = b.getElementById("anno-csa"), e.dir = "ltr", e.style.height = "800px", e.style.width = "75vw", e.style.overflow = "hidden", e.style.g = "break-word", e.textContent = JSON.stringify(g._googCsa.q))
    };

    function $R(a) {
        a = jR(a);
        var b = new Ql;
        b = di(b, 1, a[0]);
        b = di(b, 2, a[1]);
        b = di(b, 3, a[2]);
        return Fh(b, 4, xg(a[3]), 0)
    };

    function aS(a, b) {
        var c;
        if (!(c = bS(a, b))) a: {
            c = b.O;
            var d = cS(a, b);a = 16;
            for (const e of d) {
                d = e.start;
                const f = e.end;
                if (d > a) {
                    if (200 <= d - a - 16) {
                        c = dS(b, d, a);
                        break a
                    }
                    a = f + 16
                } else f >= a && (a = f + 16)
            }
            c = 200 <= c - a - 16 ? dS(b, c, a) : null
        }
        return c
    }

    function bS(a, b) {
        const c = b.na === b.ja;
        var d = eS(a, b, c);
        if (!d) return null;
        d = d.position.ld();
        a = fS(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.O - f.right : f.left
        });
        if (!a || 200 > a - 16) return null;
        const e = b.O;
        return {
            pa: c ? e - a : 16,
            ya: c ? 16 : e - a,
            Z: d
        }
    }

    function gS(a, b) {
        const c = cn(a),
            d = gn(a);
        return 0 < Pu(new Ru(a), new nj(d - b.Z - 50, c - b.ya, d - b.Z, b.pa)).size
    }

    function eS(a, b, c) {
        b = Math.floor(.3 * b.T);
        return 66 > b ? null : Ex(a, {
            Zb: c ? Kx({
                Z: 16,
                ya: 16
            }) : Ix({
                Z: 16,
                pa: 16
            }),
            Ke: b - 66,
            xb: 50,
            Ne: 50,
            Ad: b,
            ib: 16
        }, [a.document.body]).be
    }

    function fS(a, b, c, d) {
        a = c.na ? hS(a, b, c) : iS(a, b, c);
        b = c.O;
        let e = c.na ? b : .35 * b;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return 16 > e ? null : e - 16
    }

    function hS(a, b, c) {
        const d = c.T;
        return Pu(new Ru(a), new nj(d - b - 50, c.O - 16, d - b, 16))
    }

    function iS(a, b, c) {
        const d = c.T,
            e = c.O;
        c = c.ja;
        return Pu(new Ru(a), new nj(d - b - 50, (c ? .35 * e : e) - 16, d - b, (c ? 16 : .65 * e) + 16))
    }

    function dS(a, b, c) {
        const d = a.ja;
        return {
            pa: d ? jS(a, b, c) : c,
            ya: d ? c : jS(a, b, c),
            Z: 16
        }
    }

    function jS(a, b, c) {
        const d = a.O;
        return a.na ? d - b + 16 : Math.max(d - c - .35 * d, d - b + 16)
    }

    function cS(a, b) {
        const c = b.ja,
            d = b.O;
        a = b.na ? hS(a, 16, b) : iS(a, 16, b);
        return Array.from(a).map(e => new Dx(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function kS(a, b, c, d, e, f, g, h) {
        D(c, {
            width: "50px",
            bottom: g ? g.Z + "px" : "16px",
            left: b.ja() === b.na ? "" : g ? g.pa + "px" : "16px",
            right: b.ja() === b.na ? g ? g.ya + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = b.Ae();
        D(e, {
            display: "none"
        });
        D(d, {
            display: "none"
        });
        const k = sR(a.document);
        D(k, {
            position: "absolute",
            top: "14px",
            left: "15px"
        });
        c.appendChild(k);
        lS(b, 1064, c, l => {
            h ? .();
            k.remove();
            D(c, {
                bottom: g ? g.Z + "px" : "16px",
                left: g ? g.pa + "px" : b.na ? "16px" : b.ja() ? "16px" : "65%",
                right: g ? g.ya + "px" : mS(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            D(e, {
                display: ""
            });
            D(d, {
                display: "flex"
            });
            f.focus();
            l.preventDefault();
            return !1
        });
        c.focus()
    }

    function mS(a) {
        return a.ja() ? a.na ? "16px" : "65%" : "16px"
    };

    function nS(a, b, c, d, e, f, g, h) {
        const k = document.createElement("SPAN");
        k.id = "gda";
        k.appendChild(tR(a.document, b.ze()));
        lS(b, 1064, k, l => {
            g ? .();
            kS(a, b, c, d, k, e, f, h);
            l.preventDefault();
            l.stopImmediatePropagation();
            return !1
        });
        return k
    }

    function oS(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && D(a.document.body, {
                    "padding-bottom": (y(gK) ? 66 : 45) + "px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function pS(a, b, c, d, e, f, g) {
        var h = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        h = (h && h.length ? Number(h[0]) : 0) + (y(gK) ? 66 : 45);
        D(a.document.body, {
            "padding-bottom": h + "px"
        });
        oS(a);
        h = document.createElement("div");
        h.id = "google-anno-sa";
        h.dir = b.ja() ? "rtl" : "ltr";
        h.tabIndex = 0;
        var k = {
            background: "#1A73E8",
            "border-style": "solid",
            bottom: e ? e.Z + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: e ? e.pa + "px" : b.na ? "16px" : b.ja() ? "16px" : "65%",
            right: e ?
                e.ya + "px" : mS(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        D(h, k);
        D(h, {
            fill: "white"
        });
        const l = document.createElement("SPAN");
        k = document.createElement("SPAN");
        pR(k);
        var m = {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (b.ja(), "50px"),
            right: b.ja() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        };
        D(k, m);
        b.na || D(k, {
            "justify-content": ""
        });
        m = sR(a.document);
        var n = b.ja();
        D(m, {
            "margin-left": n ?
                "6px" : "4px",
            "margin-right": n ? "4px" : "6px",
            "margin-top": "12px"
        });
        k.appendChild(m);
        l.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        m = b.nd();
        l.tabIndex = 0;
        l.role = "link";
        l.ariaLive = "polite";
        l.ariaLabel = m.replace("TERM", d);
        D(l, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        lS(b, 999, k, c);
        k.appendChild(l);
        a = nS(a, b, h, k, l, e, f, g);
        h.appendChild(k);
        h.appendChild(a);
        return h
    }

    function qS(a, b, c) {
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = a.g);
        b.ariaLabel = c.W.nd().replace("TERM", a.g);
        c = c.ca;
        b = new Hl;
        b = ei(b, 1, a.i);
        b = gi(b, 4, a.g);
        a = c.handle;
        var d = BR(c, 13);
        b = Mh(d, 6, qm, b);
        return a.call(c, b)
    }

    function rS(a, b, c, d) {
        if (c.M.Pa && gS(b, d) || !c.M.Pa && wC(b)) return null;
        d = pS(b, c, f => {
            var g = c.ca;
            var h = new gm;
            h = gi(h, 4, a.g);
            h = ei(h, 1, a.i);
            h = ei(h, 3, a.j);
            g = sS(g, h);
            NR(b, c, g, a.g, !1, c.l.get(a.g) || "");
            f.preventDefault();
            return !1
        }, a.g, d, c.M.Yc ? () => {
            var f = c.ca;
            var g = new El;
            g = R(g, 1, a.i);
            var h = gi(g, 2, a.g);
            g = f.handle;
            var k = BR(f, 18);
            h = Mh(k, 12, qm, h);
            return g.call(f, h)
        } : null, c.M.Yc ? () => {
            var f = c.ca,
                g = new Fl,
                h = f.handle,
                k = BR(f, 19);
            g = Mh(k, 13, qm, g);
            return h.call(f, g)
        } : null);
        const e = qS(a, d, c);
        b.document.body.appendChild(d);
        return e
    }

    function tS(a, b, c, d, e, f) {
        if (a.g !== d || null !== a.i || a.l !== e) {
            if (null !== a.j) {
                var g = a.j,
                    h = c.ca;
                var k = new Gl;
                k = R(k, 1, g);
                g = h.handle;
                var l = BR(h, 14);
                k = Mh(l, 7, qm, k);
                g.call(h, k)
            }
            a.g = d;
            a.i = null;
            a.l = e;
            P(c.W, 17) || (d = b.document.getElementById("google-anno-sa"), a.j = d ? qS(a, d, c) : rS(a, b, c, f))
        }
    }
    var uS = class {
        constructor() {
            this.g = "";
            this.i = null;
            this.l = "";
            this.j = null
        }
    };

    function vS(a, b) {
        a.g >= a.i.length && (a.g = 0);
        if (IR) GR(() => void vS(a, b));
        else {
            var c = a.i[a.g++];
            a.j = !1;
            tS(a.m, a.win, a.config, c.g, c.i, a.l);
            KR(a.config, 898, a.win, () => void vS(a, b), a.jf)
        }
    }
    var wS = class {
        constructor(a, b, c) {
            var d = new uS;
            this.win = a;
            this.config = b;
            this.m = d;
            this.l = c;
            this.i = [];
            this.j = !0;
            this.g = 0;
            this.jf = b.ic.jf
        }
    };
    class xS {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function yS(a, b, c, d) {
        b.forEach(e => {
            var f = Sl(1);
            f = gi(f, 4, e);
            aR(c, f);
            d.i.push(new xS(e, e));
            d.j && vS(d, a)
        })
    };
    const zS = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function AS(a, b) {
        switch (b) {
            case 1:
                b = 0;
                for (let c = a.length - 1; 0 <= c; c--) zS.test(a[c]) || b++;
                return b;
            default:
                return a = a.trim(), "" === a ? 0 : a.split(/\s+/).length
        }
    }

    function BS(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || zS.test(a)
        }
    };
    var CS = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };
    class DS {
        constructor(a) {
            this.v = a;
            this.size = 1;
            this.g = [new ES];
            this.j = [];
            this.i = new Map;
            this.m = new Map;
            this.l = 0
        }
        isEmpty() {
            return 0 === this.l
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.g
                }
                let g = b;
                for (;;) {
                    g = this.g[g].i;
                    if (0 === g) break;
                    const h = f + 1 - this.j[this.g[g].D],
                        k = f;
                    d = a;
                    e = this.v;
                    BS(d.charAt(h - 1), e) && BS(d.charAt(k + 1), e) && c.push(new FS(h, k, this.m.get(this.g[g].v)));
                    g = this.g[g].g
                }
            }
            return c
        }
    }
    class ES {
        constructor() {
            this.j = new Map;
            this.G = !1;
            this.aa = this.F = this.C = this.V = this.K = this.P = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set m(a) {
            this.P = a
        }
        get m() {
            return this.P
        }
        set A(a) {
            this.K = a
        }
        get A() {
            return this.K
        }
        set l(a) {
            this.G = a
        }
        get l() {
            return this.G
        }
        set v(a) {
            this.F = a
        }
        get v() {
            return this.F
        }
        set g(a) {
            this.V = a
        }
        get g() {
            return this.V
        }
        set i(a) {
            this.C = a
        }
        get i() {
            return this.C
        }
        set D(a) {
            this.aa = a
        }
        get D() {
            return this.aa
        }
        get childNodes() {
            return this.j.values()
        }
    }
    var FS = class {
        constructor(a, b, c) {
            this.j = a;
            this.i = b;
            this.v = c
        }
        get l() {
            return this.j
        }
        get m() {
            return this.i
        }
        get g() {
            return this.v
        }
        get length() {
            return this.i - this.j
        }
    };
    const GS = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function HS(a, b, c, d, e) {
        d.g.Aa(5) >= d.i && await eR(d, 6);
        if (!c.M.re) {
            const f = L(c.W, UQ, 15);
            f.length && IS(a, b, c, e, f)
        }
        c.M.se || await JS(a, c, d, e)
    }

    function IS(a, b, c, d, e) {
        c.M.we && !aS(a, KS(a, c)) ? KR(c, 898, a, () => {
            LS(a, b, c, d, e)
        }, c.M.Yd) : LS(a, b, c, d, e)
    }

    function MS(a, b, c, d) {
        var e = !0;
        const f = b.qa;
        let g = rC({
            H: a,
            Le: 3E3,
            Oe: 400,
            qa: f,
            Jh: !b.M.Pa
        });
        b.M.Pa && !c && (g |= 16777216);
        if (c = g) e = bR(d), R(e, 2, c), e = !1;
        b.M.Fb || d.g >= b.ic.Hc || (bi(bR(d), 5, !0), e = !1);
        0 !== b.te || 0 !== NS(a, 1, f) || b.na && 0 === NS(a, 2, f) || (bi(bR(d), 3, !0), e = !1);
        return e
    }

    function NS(a, b, c) {
        return rC({
            H: a,
            Le: 3E3,
            Oe: a.innerWidth > $m ? 650 : 0,
            qa: c,
            Kf: b
        })
    }
    async function JS(a, b, c, d) {
        var e = L(b.W, UQ, 15);
        var f = new DS(b.g);
        for (var g of e)
            if (P(g, 3)) {
                e = Q(g, 1);
                var h = f.i.has(e) ? f.i.get(e) : f.l++;
                f.i.set(e, h);
                f.m.set(h, e);
                var k = 0;
                for (var l = 0; l < e.length; l++) {
                    const n = e.charCodeAt(l);
                    f.g[k].contains(n) || (f.g.push(new ES), f.g[f.size].m = k, f.g[f.size].A = n, f.g[k].j.set(n, f.size), f.size++);
                    k = f.g[k].j.get(n)
                }
                f.g[k].l = !0;
                f.g[k].v = h;
                f.g[k].D = f.j.length;
                f.j.push(e.length)
            }
        g = [];
        for (g.push(0); 0 < g.length;) {
            h = g.shift();
            e = f;
            k = e.g[h];
            if (0 === h) k.g = 0, k.i = 0;
            else if (0 === k.m) k.g = 0,
                k.i = k.l ? h : e.g[e.g[h].g].i;
            else {
                k = e.g[e.g[h].m].g;
                for (l = e.g[h].A;;) {
                    if (e.g[k].contains(l)) {
                        e.g[h].g = e.g[k].j.get(l);
                        break
                    }
                    if (0 === k) {
                        e.g[h].g = 0;
                        break
                    }
                    k = e.g[k].g
                }
                e.g[h].i = e.g[h].l ? h : e.g[e.g[h].g].i
            }
            for (var m of f.g[h].childNodes) g.push(m)
        }
        f = new CS(f);
        f.isEmpty() || (b.M.Fb || d.g >= b.Fa.Hc ? (m = b.M.Xe ? OS(L(b.W, UQ, 15)) : null, await b.La(898, PS(a, b, c, d, f, m, new nR(b.Fa.sj, b.Fa.bf, b.Fa.ae, b.Fa.Sb)))) : bi(bR(d), 4, !0))
    }

    function OS(a) {
        return RegExp(a.filter(b => P(b, 3)).map(b => Q(b, 1).replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "u")
    }
    async function PS(a, b, c, d, e, f, g) {
        var h = new CR,
            k = a.document.body;
        if (P(b.W, 17) || J(b.W, Qp, 21))
            for (; k;) {
                c.g.Aa(7) >= c.i && await eR(c, 8);
                if (k.nodeType === Node.TEXT_NODE && "" !== k.textContent && k.parentElement) {
                    var l = k.parentElement;
                    a: {
                        var m = a;
                        var n = b,
                            p = k.textContent,
                            q = d,
                            v = e,
                            z = g;
                        const kb = [];b: {
                            var A = p;
                            switch (n.g) {
                                case 1:
                                    var E = Array(A.length),
                                        I = 0;
                                    for (var x = 0; x < A.length; x++) zS.test(A[x]) || I++, E[x] = I;
                                    A = E;
                                    break b;
                                default:
                                    E = Array(A.length);
                                    for (x = I = 0; x < A.length;) {
                                        for (;
                                            /\s/.test(A[x]);) E[x] = I, x++;
                                        for (var G = !1; x < A.length &&
                                            !/\s/.test(A[x]);) G = !0, E[x] = I, x++;
                                        G && (I++, E[x - 1] = I)
                                    }
                                    A = E
                            }
                        }
                        if (p.includes("\u00bb")) v = [];
                        else {
                            E = v.match(p);
                            v = new Map;
                            for (const Ia of E) E = Ia.l, v.has(E) ? (I = v.get(E), Ia.length > I.length && v.set(E, Ia)) : v.set(E, Ia);
                            v = Array.from(v.values())
                        }
                        I = -1;
                        for (const Ia of v) {
                            E = Ia.l;
                            v = Ia.m;
                            x = z;
                            var K = Ia.g;
                            oR(x.g, x.i + A[E]);
                            G = x;
                            var N = G.g;
                            if ((N.g.has(K) ? N.g.get(K).length : 0) < G.bf && x.g.j < x.ae) {
                                x = m.getComputedStyle(l);
                                G = x.fontSize.match(/\d+/);
                                if (!(G && 12 <= Number(G[0]) && 22 >= Number(G[0]) && Za(GS, x.display))) {
                                    z.i += A[A.length - 1];
                                    m = [];
                                    break a
                                }
                                I += 1;
                                I < E && kb.push(m.document.createTextNode(p.substring(I, E)));
                                I = p.substring(E, v + 1);
                                G = v + 1;
                                x = m;
                                var oa = I,
                                    ea = p.substring(Math.max(E - 30, 0), E) + "~~" + p.substring(G, Math.min(G + 30, p.length));
                                K = Ia.g;
                                N = A[E];
                                G = l.getBoundingClientRect();
                                var ha = Sl(2);
                                oa = gi(ha, 2, oa);
                                oa = gi(oa, 3, ea);
                                K = gi(oa, 4, K);
                                N = di(K, 5, N);
                                N = di(N, 6, Math.round(G.x));
                                G = di(N, 7, Math.round(G.y));
                                x = x.getComputedStyle(l);
                                N = new Rl;
                                N = gi(N, 1, x.fontFamily);
                                K = $R(x.color);
                                N = M(N, 7, K);
                                K = $R(x.backgroundColor);
                                N = M(N, 8, K);
                                K = x.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                N = di(N, 4, K ? Math.round(Number(K[1])) : 0);
                                K = Math.round(Number(x.fontWeight));
                                isNaN(K) || 400 === K || di(N, 5, K);
                                "none" !== x.textDecorationLine && gi(N, 6, x.textDecorationLine);
                                x = M(G, 8, N);
                                oa = [];
                                for (ea = l; ea && 20 > oa.length;) {
                                    G = oa;
                                    N = G.push;
                                    K = ea;
                                    ha = new Pl;
                                    ha = gi(ha, 1, K.tagName);
                                    "" !== K.className && Eh(ha, 2, K.className.split(" "), Qg);
                                    N.call(G, ha);
                                    if ("BODY" === ea.tagName) break;
                                    ea = ea.parentElement
                                }
                                G = oa.reverse();
                                x = Nh(x, 9, G);
                                x = aR(q, x);
                                kb.push(QS(m, n, x, Ia.g, I, l));
                                I = z.g;
                                x = Ia.g;
                                E = z.i + A[E];
                                G = [];
                                I.g.has(x) && (G = I.g.get(x));
                                G.push(E);
                                I.i++;
                                I.g.set(x, G);
                                I = v;
                                if (0 < z.Sb && z.g.j >= z.Sb) break
                            }
                        }
                        n = I + 1;0 !== n && n < p.length && kb.push(m.document.createTextNode(p.substring(n)));z.i += A[A.length - 1];m = kb
                    }
                    if (0 < m.length && !P(b.W, 17)) {
                        AR(h, a, b.Fa.Sf ? $Q(a, b.Fa.Sf) : b.Fa.Wh, Q(b.W, 3), J(b.W, Qp, 21).i(), b.ca);
                        for (const kb of m) l.insertBefore(kb, k), RS(kb);
                        l.removeChild(k);
                        for (k = m[m.length - 1]; k.lastChild;) k = k.lastChild;
                        if (0 < g.Sb && g.g.j >= g.Sb) break
                    }
                }
                a: {
                    p = f;l = g;m = b.g;
                    if (k.firstChild && (k.nodeType !== Node.ELEMENT_NODE ? 0 : !k.classList ? .contains("google-anno-skip") &&
                            k.offsetHeight)) {
                        b: {
                            switch (k.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    p = !1;
                                    break b
                            }
                            p = !(k.className.toUpperCase ? .() ? .includes("CRUMB") || k.id.toUpperCase ? .() ? .includes("CRUMB")) && (!p || 2 > (k.parentNode ? .childElementCount ? ?
                                0) || !!k.textContent ? .match(p))
                        }
                        if (p) {
                            k = k.firstChild;
                            break a
                        }
                        k.textContent ? .length && (m = AS(k.textContent, m), oR(l.g, l.i + m))
                    }
                    for (;;) {
                        if (k.nextSibling) {
                            k = k.nextSibling;
                            break a
                        }
                        if (!k.parentNode) {
                            k = null;
                            break a
                        }
                        k = k.parentNode
                    }
                }
            }
    }

    function KS(a, b) {
        return {
            ja: b.ja(),
            na: b.na,
            O: cn(a),
            T: gn(a)
        }
    }

    function LS(a, b, c, d, e) {
        e = e.filter(g => P(g, 4) || 0 < yh(g, 5, Sg, 3, void 0, !0).length).map(g => Q(g, 1));
        if (0 !== e.length) {
            var f = c.M.Pa ? aS(a, KS(a, c)) : null;
            MS(a, c, f, d) && (c.M.Ye && lb(e), yS(b, e, d, new wS(a, c, f)))
        }
    }

    function RS(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = lR(jR(getComputedStyle(a.parentElement).color)),
                    c = lR(jR(getComputedStyle(a).color));
                var d = kR(a);
                if (d = b && c && d ? JK(c, d) < Math.min(JK(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    D(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) RS(a.children[b])
        }
    }
    class SS {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function QS(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        TS(g, b);
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        pR(e);
        D(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        ue(e);
        e.className = "google-anno";
        b.M.Ve ? (e.appendChild(g), e.appendChild(a.document.createTextNode("\u00a0")), e.appendChild(qR(a.document, a.getComputedStyle(f).fontSize))) : (e.appendChild(qR(a.document, a.getComputedStyle(f).fontSize)), e.appendChild(a.document.createTextNode("\u00a0")), e.appendChild(g));
        const h = US(b, c, e);
        lS(b, 999, e, k => {
            try {
                var l = b.ca,
                    m = new gm;
                var n = gi(m, 4, d);
                var p = ei(n, 1, c);
                var q = ei(p, 2, h.i);
                const v = sS(l, q);
                NR(a, b, v, d, !0, b.m.get(d) || "");
                return !1
            } finally {
                k.preventDefault(), k.stopImmediatePropagation()
            }
        });
        return e
    }

    function US(a, b, c) {
        const d = new SS;
        VS(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.ca;
                    var g = new km;
                    g = f = R(g, 1, f);
                    f = e.handle;
                    var h = BR(e, 11);
                    g = Mh(h, 4, qm, g);
                    e = f.call(e, g);
                    d.g = e
                } else d.g && (e = a.ca, f = new jm, g = f = R(f, 1, d.g), f = e.handle, h = BR(e, 12), g = Mh(h, 5, qm, g), f.call(e, g), d.g = null)
        }).observe(c);
        return d
    }

    function TS(a, b) {
        pR(a);
        b.M.Je && (D(a, {
            "text-decoration": "underline"
        }), D(a, {
            "text-decoration-style": "dotted"
        }), D(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        }));
        b.M.Ie && D(a, {
            "font-weight": "bolder"
        })
    };

    function LR(a, b) {
        var c = a.handle,
            d = BR(a, 15);
        b = Mh(d, 9, qm, b);
        c.call(a, b)
    }

    function sS(a, b) {
        var c = a.handle,
            d = BR(a, 10);
        b = Mh(d, 8, qm, b);
        return c.call(a, b)
    }

    function BR(a, b) {
        var c = new pm;
        var d = a.m++;
        c = R(c, 1, d);
        b = R(c, 2, Math.round(a.g.Aa(b) - a.i));
        return M(b, 10, a.j)
    }
    var WS = class {
        constructor(a, b, c, d) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.m = 1;
            this.l = [...d]
        }
        handle(a) {
            for (const b of this.l) b(a);
            return Uh(a, 1)
        }
    };

    function KR(a, b, c, d, e) {
        c.setTimeout(XS(a, b, d), e)
    }

    function UR(a, b, c) {
        a = XS(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function YR(a, b, c) {
        return b.setInterval(XS(a, 1066, c), 1E3)
    }

    function lS(a, b, c, d) {
        c.addEventListener("click", XS(a, b, d))
    }

    function VS(a, b) {
        return new IntersectionObserver(XS(a, 1065, b), {
            threshold: .98
        })
    }

    function XS(a, b, c) {
        return a.j.Ka(b, c, void 0, d => void YS(a, d))
    }

    function YS(a, b) {
        b.es = a.M.Tb.join(",");
        b.c = `${a.A}`
    }
    var $S = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, p = !1) {
            this.i = a;
            this.na = b;
            this.te = c;
            this.W = d;
            this.A = e;
            this.j = f;
            this.ca = g;
            this.qa = h;
            this.v = k;
            this.Fa = l;
            this.ic = m;
            this.Xd = p;
            this.M = new YQ(n);
            this.g = Za(ZS, Q(d, 7)) ? 1 : 0;
            this.m = new Map;
            this.l = new Map;
            for (const q of L(this.W, UQ, 15)) null != O(q, 6) && this.m.set(Q(q, 1), Q(q, 6)), null != O(q, 7) && this.l.set(Q(q, 1), Q(q, 7))
        }
        La(a, b) {
            this.j.La(a, b, c => void YS(this, c));
            return b
        }
        Aa(a) {
            return this.v.Aa(a)
        }
        ja() {
            return 2 === Vh(this.W, 12)
        }
        ze() {
            return this.W.ze()
        }
        Ae() {
            return this.W.Ae()
        }
        nd() {
            return this.W.nd()
        }
        Pa() {
            return this.M.Pa
        }
    };
    const ZS = ["ja", "zh_CN", "zh_TW"];

    function aT(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function bT(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function cT() {
        const a = new Set,
            b = QA();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function dT(a) {
        a = a.id;
        return null != a && (cT().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function eT(a, b, c) {
        if (!a.sources) return !1;
        switch (fT(a)) {
            case 2:
                const d = gT(a);
                if (d) return c.some(f => hT(d, f));
                break;
            case 1:
                const e = iT(a);
                if (e) return b.some(f => hT(e, f))
        }
        return !1
    }

    function fT(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function iT(a) {
        return jT(a, b => b.currentRect)
    }

    function gT(a) {
        return jT(a, b => b.previousRect)
    }

    function jT(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function hT(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function kT() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(dT),
            b = [...cT()].map(c => document.getElementById(c)).filter(c => null !== c);
        lT = window.scrollX;
        mT = window.scrollY;
        return nT = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function oT(a, b) {
        const c = lT !== window.scrollX || mT !== window.scrollY ? [] : nT,
            d = kT();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                pT(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.yb = Math.floor(b.renderTime || b.loadTime);
                a.Sa = b.size;
                break;
            case "first-input":
                b = e;
                a.ra = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ba = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || qT(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.A +=
                    b;
                a.F = Math.max(a.F, b);
                a.V += 1;
                break;
            case "event":
                qT(a, e);
                break;
            default:
                ze(b, void 0)
        }
    }

    function rT(a) {
        a.m || (a.m = new PerformanceObserver(vu(640, b => {
            oT(a, b)
        })));
        return a.m
    }

    function sT(a) {
        const b = vu(641, () => {
                2 === zL(document) && tT(a)
            }),
            c = vu(641, () => void tT(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.la = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            rT(a).disconnect()
        }
    }

    function tT(a) {
        if (!a.qf) {
            a.qf = !0;
            rT(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += bT("cls", a.D), b += bT("mls", a.G), b += aT("nls", a.P), window.LayoutShiftAttribution && (b += bT("cas", a.v), b += aT("nas", a.Oc), b += bT("was", a.uf)), b += bT("wls", a.aa), b += bT("tls", a.tf));
            window.LargestContentfulPaint && (b += aT("lcp", a.yb), b += aT("lcps", a.Sa));
            window.PerformanceEventTiming && a.Ba && (b += aT("fid", a.ra));
            window.PerformanceLongTaskTiming && (b += aT("cbt", a.A),
                b += aT("mbt", a.F), b += aT("nlt", a.V));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) dT(c) && d++;
            b += aT("nif", d);
            b += aT("ifi", Vj(window));
            c = Mm();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${t===t.top?1:0}`;
            b += a.sf ? `&${"qqid"}=${encodeURIComponent(a.sf)}` : aT("pvsid", hf(t));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.m ? a.Na : performance.interactionCount || 0) / 50));
            0 <= c && (c = a.g[c].latency, 0 <= c && (b += aT("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.la()
        }
    }

    function pT(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.D += Number(b.value);
            Number(b.value) > a.G && (a.G = Number(b.value));
            a.P += 1;
            if (c = eT(b, c, d)) a.v += b.value, a.Oc++;
            if (5E3 < b.startTime - a.Nc || 1E3 < b.startTime - a.rf) a.Nc = b.startTime, a.i = 0, a.j = 0;
            a.rf = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.aa && (a.aa = a.i, a.uf = a.j, a.tf = b.startTime + b.duration)
        }
    }

    function qT(a, b) {
        uT(a, b);
        const c = a.g[a.g.length - 1],
            d = a.C[b.interactionId];
        if (d || 10 > a.g.length || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.C[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.C[e.id]
        })
    }

    function uT(a, b) {
        b.interactionId && (a.K = Math.min(a.K, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.Na = a.l ? (a.l - a.K) / 7 + 1 : 0)
    }
    var vT = class {
            constructor() {
                this.j = this.i = this.P = this.G = this.D = 0;
                this.rf = this.Nc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.C = {};
                this.Na = 0;
                this.K = Infinity;
                this.ra = this.Sa = this.yb = this.Oc = this.uf = this.v = this.tf = this.aa = this.l = 0;
                this.Ba = !1;
                this.V = this.F = this.A = 0;
                this.m = null;
                this.qf = !1;
                this.la = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.sf = a ? a.getAttribute("data-google-query-id") : null;
                this.zh = {
                    Oh: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.zh.Oh && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, "event" === b && (a.durationThreshold = 40), rT(this).observe(a);
                    sT(this)
                }
            }
        },
        lT, mT, nT = [];
    async function wT(a, b, c, d, e, f, g, h) {
        var k = gz,
            l = fz;
        const m = ((h = XK(new aL(a), "__gads", h)) ? Me(h + "t2Z7mVic") % 20 : null) ? ? Math.floor(20 * Je());
        if (Math.random() < c.M.Te) try {
            (new vT).observe()
        } catch (z) {
            k.wa(1161, z instanceof Error ? z : Error("Unknown error."))
        }
        var n = f.Aa(0);
        h = 488 > cn(a);
        const p = c.W;
        var q = c.M,
            v = hm(m);
        q = Eh(v, 3, q.Tb, Hg);
        e = new WS(f, n, q, e);
        k = new $S(d, h, c.te, p, m, k, e, l, f, c.Fa, c.ic, c.M, c.Xd);
        d = new dR;
        b = await xT(a, a.document, b, k, g, d);
        f = f.Aa(9) - n;
        if (!P(p, 17) && d.entries.length && !P(p, 13)) {
            g = a.document;
            n = g.createElement("LINK");
            a: {
                k = c.M.Mc ? fj `https://cse.google.com/cse.js?cx=${Q(p,16)}&language=${Q(p,7)}` : fj `https://www.google.com/adsense/search/ads.js`;
                if (k instanceof Jc) n.href = Mc(k).toString();
                else {
                    if (-1 === Ae.indexOf("prefetch")) throw Error('TrustedResourceUrl href attribute required with rel="prefetch"');
                    k = k instanceof Tc ? Uc(k) : te(k);
                    if (void 0 === k) break a;
                    n.href = k
                }
                n.rel = "prefetch"
            }
            n.as = "script";
            n.fetchPriority = "low";
            g.head.appendChild(n)
        }
        c = cR(d, h, c.bd, a.location.hostname, c.ri, p, f, b);
        a = e.handle;
        h = BR(e, 9);
        c = Mh(h, 3, qm, c);
        a.call(e, c)
    }
    async function xT(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !yT(b)) return [Ll()];
        var g = -1;
        d.M.Fb || (g = AS(b.innerText ? ? "", d.g), f.g = g);
        e.g.Aa(3) >= e.i && await eR(e, 4);
        b = (b = Q(d.W, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.j = b;
        b = [];
        if (!d.M.Fb && g < Math.min(d.Fa.Hc, d.ic.Hc)) {
            g = b.push;
            var h = new Ml;
            var k = new Kl;
            h = Mh(h, 2, Nl, k);
            g.call(b, h)
        }
        a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') && (g = b.push, h = new Ml, k = new Kl, h = Mh(h, 3, Nl, k), g.call(b, h));
        b.length || await HS(a, c, d, e, f);
        return b
    }

    function yT(a) {
        try {
            Jb(new ResizeObserver(() => {})), Jb(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };
    async function zT(a, b, c, d, e, f) {
        c = await AT(a, b, c, d, e, f);
        c.ob.length && (a = cR(new dR, !!a && 488 > cn(a), BT(b), a ? .location ? .hostname ? ? "", f, c.Eb ? ? new Kh, 0, c.ob), f = Math.floor(20 * Je()), b = new pm, b = R(b, 1, 1), b = R(b, 2, 0), f = hm(f), c = Mm(), f = Eh(f, 3, c, Hg), b = M(b, 10, f), a = Mh(b, 3, qm, a), gz.La(1214, tI(w(vI), a, Date.now()), CT))
    }
    async function AT(a, b, c, d, e, f) {
        if ("string" !== typeof d) return d = new Ml, a = new Kl, {
            Eb: null,
            ob: [Mh(d, 12, Nl, a)]
        };
        const g = XQ(d);
        d = Jh(g);
        if (!a) return a = new Ml, b = new Kl, a = Mh(a, 9, Nl, b), {
            Eb: d,
            ob: [a]
        };
        const h = a.performance ? .now ? new gR(a.performance) : new hR,
            k = new fR(a, h),
            l = b.google_ad_client;
        if ("string" !== typeof l) return a = new Ml, b = new Kl, a = Mh(a, 11, Nl, b), {
            Eb: d,
            ob: [a]
        };
        if (fc()) return {
            Eb: d,
            ob: [Ll()]
        };
        if (Oe()) return a = new Ml, b = new Kl, a = Mh(a, 13, Nl, b), {
            Eb: d,
            ob: [a]
        };
        await DT(a, c, w(vI), ZQ(a, g, BT(b), f, "on" === b.google_adtest),
            l, h, k, e);
        return {
            Eb: d,
            ob: []
        }
    }
    async function DT(a, b, c, d, e, f, g, h) {
        const k = Su(a);
        k.wasReactiveAdConfigReceived[42] || (k.wasReactiveAdConfigReceived[42] = !0, await wT(a, b, d, e, [l => {
            gz.La(1214, tI(c, l, f.Aa(17)), CT)
        }], f, g, h))
    }

    function CT(a) {
        a.es = Mm().join(",")
    }

    function BT(a) {
        a = a.google_page_url;
        return "string" === typeof a ? a : ""
    };

    function ET({
        Mf: a,
        Sg: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function FT(a) {
        gz.df(b => {
            b.shv = String(a);
            b.mjsv = ET({
                Mf: "m202312060101",
                Sg: a
            });
            b.eid = kO(t)
        })
    };
    var GT = "undefined" === typeof sttc ? void 0 : sttc;

    function HT(a) {
        var b = gz;
        try {
            return ki(a, Ak), new JM(JSON.parse(a))
        } catch (c) {
            b.wa(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new JM
    };
    const IT = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    jb: c ? ? void 0,
                    ed: d ? void 0 : 2
                })
            })
        },
        JT = {
            Cc: a => a.callback,
            Pb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            sb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    jb: b.returnValue ? ? void 0,
                    ed: b.success ? void 0 : 2
                })
            }
        };

    function KT(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            We: b.__uspapiReturn.callId
        }
    }

    function LT(a, b) {
        let c = {};
        if (mD(a.caller)) {
            var d = Bb(() => {
                b(c)
            });
            oD(a.caller, "getDataWithCallback", {
                callback: e => {
                    e.ed || (c = e.jb);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var MT = class extends U {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new pD(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, KT);
            this.caller.m.set("getDataWithCallback", IT);
            this.caller.j.set("getDataWithCallback", JT)
        }
        i() {
            this.caller.ha();
            super.i()
        }
    };

    function NT(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Wd(a.g.X() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = OT(a, b, c, a.g.g.elementsFromPoint(Hd(c.left + c.width / 2, c.left, c.right - 1), Hd(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = OT(a, b, c, a.g.g.elementsFromPoint(Hd(c.left + c.width / 2, c.left, c.right - 1), Hd(c.top + 2, c.top, c.bottom - 1)), 2, e.lb),
            g = OT(a, b, c, a.g.g.elementsFromPoint(Hd(c.left + 2, c.left, c.right - 1), Hd(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.lb, ...f.lb]);
        const h = OT(a, b, c, a.g.g.elementsFromPoint(Hd(c.right - 1 - 2, c.left, c.right - 1), Hd(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.lb, ...f.lb, ...g.lb]);
        var k = PT(a, b, c),
            l = n => Za(a.j, n.overlapType) && Za(a.l, n.overlapDepth) && Za(a.i, n.overlapDetectionPoint);
        e = Va([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Va(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = Xd(a.g.g);
        const m = new qj(c.left, c.top, c.width, c.height);
        e = [...Wa(e, n => new qj(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...jb(Wa(l, n => sj(m, n.elementRect))), ...Va(sj(m, new qj(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? QT(m, e) : RT(c, e)
        }
    }

    function ST(a, b) {
        const c = a.g.X(),
            d = a.g.g;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new pk,
                                        m = ok(l, () => NT(a, k));
                                    m && (l.i.length && (m.executionTime = Math.round(Number(l.i[0].duration))), h.disconnect(), e(m))
                                }, TT);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function OT(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            lb: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Za(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(UT(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(UT(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const z = k.g.ji(l, n);
                if (!z) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    Db: E
                } = VT(k, l, z, n) || {},
                {
                    suspectAncestor: I,
                    Db: x
                } = VT(k, n, z, l) || {};k = A && E && I && x ? E <= x ? {
                    suspectAncestor: A,
                    overlapType: WT[E]
                } : {
                    suspectAncestor: I,
                    overlapType: XT[x]
                } : A && E ? {
                    suspectAncestor: A,
                    overlapType: WT[E]
                } : I && x ? {
                    suspectAncestor: I,
                    overlapType: XT[x]
                } : null
            }
            const {
                suspectAncestor: q,
                overlapType: v
            } = k || {};
            q && v ? g.push(UT(a, c, n, p, v, e, q)) : g.push(UT(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            lb: h
        }
    }

    function PT(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ie(b, a.g.X());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(UT(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(UT(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(UT(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function QT(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = rj(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function RT(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function UT(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Za(a.j, e) && Za(a.i, f)) {
            b = new nj(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = YT(a, c)) && pj(b, a)) c = 4;
            else {
                a = ZT(c, d);
                if (kc) {
                    e = Mj(c, "paddingLeft");
                    f = Mj(c, "paddingRight");
                    var k = Mj(c, "paddingTop"),
                        l = Mj(c, "paddingBottom");
                    e = new nj(k, f, l, e)
                } else e = Fj(c, "paddingLeft"), f = Fj(c, "paddingRight"), k = Fj(c, "paddingTop"), l = Fj(c, "paddingBottom"), e = new nj(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                pj(b, new nj(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = ZT(c, d), c = pj(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function VT(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.X();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Ie(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Db: 1
                };
                if ("sticky" === g.position && a.g.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Db: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Db: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = $T(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Db: 4
                    }
                }
            }
        }
        return (a = $T(a, e, b)) ? {
                suspectAncestor: a,
                Db: 5
            } :
            null
    }

    function $T(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Ie(f, a.g.X());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function YT(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new nj(a.top, a.right, a.bottom, a.left)
    }

    function ZT(a, b) {
        if (!kc || 9 <= Number(xc)) {
            var c = Fj(a, "borderLeftWidth");
            d = Fj(a, "borderRightWidth");
            e = Fj(a, "borderTopWidth");
            a = Fj(a, "borderBottomWidth");
            c = new nj(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Oj(a, "borderLeft");
            var d = Oj(a, "borderRight"),
                e = Oj(a, "borderTop");
            a = Oj(a, "borderBottom");
            c = new nj(e, d, a, c)
        }
        return new nj(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class aU {
        constructor(a) {
            var b = bU;
            this.g = Td(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const WT = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        XT = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Va(Le({
        ll: 1,
        ml: 2,
        fn: 3,
        gn: 4,
        jn: 5,
        gl: 6,
        il: 7,
        kl: 8,
        sm: 9,
        hn: 10,
        jl: 11,
        en: 12,
        fl: 13
    }), a => !Za([1, 2], a));
    Le({
        yk: 1,
        vm: 2,
        Jk: 3,
        kn: 4
    });
    const bU = Le({
            zk: 1,
            nn: 2,
            fm: 3,
            Sm: 4
        }),
        TT = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function cU(a, b, c, d) {
        const e = new XI;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Ib(a, "message", g), l.error ? e.g(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return Hb(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * Je())), Hb(a, "message", g), b(c, f), e.promise) : null
    }

    function dU(a) {
        return cU(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    const eU = (a, b) => {
        try {
            const k = void 0 === P(b, 6) ? !0 : P(b, 6);
            var c = zi(Vh(b, 2)),
                d = Q(b, 3);
            a: switch (Vh(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Bi(c, d, e),
                g = J(b, ui, 5) ? .g() ? ? "";
            f.zc = g;
            f.g = k;
            f.win = a;
            var h = f.build();
            si(h)
        } catch {}
    };

    function fU(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? eU(a, b) : Hb(a, "load", () => void eU(a, b)))
    };

    function gU(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function hU(a) {
        if (a === a.top || Ce(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && gU(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new XI;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                rc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var Dk = {
        wn: 0,
        rn: 1,
        sn: 9,
        on: 2,
        pn: 3,
        vn: 5,
        un: 7,
        qn: 10
    };
    var iU = class extends T {},
        jU = ni(iU),
        kU = [1, 3];
    const lU = fj `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function mU(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.g(h).then(({
                    data: k
                }) => k)
            }
            const e = He("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Mc(lU).toString();
            const f = (new URL(lU.toString())).origin,
                g = SK({
                    destination: a,
                    Ia: e,
                    origin: f,
                    de: "goog:gRpYw:doubleclick"
                });
            g.g("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function nU(a, b, c) {
        var d = gz,
            e = {
                skipTopicsObservation: y(zt)
            };
        const {
            Vc: f,
            Uc: g
        } = oU(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && hb(h, f)));
            else if (Ck()(h)) k || (k = h !== f);
            else return d.wa(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new iU;
                var m = ei(l, 2, gk());
                h instanceof Uint8Array ? Gh(m, 1, kU, ig(h, !1, !1)) : Gh(m, 3, kU, Bg(h));
                c.setItem("goog:cached:topics", hi(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function oU(a) {
        if (!a) return {
            Vc: null,
            Uc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Vc: null,
                Uc: !0
            };
            const n = jU(m);
            let p;
            const q = n.R;
            var b = Hh(q, q[F], kU);
            switch (b) {
                case 0:
                    p = null;
                    break;
                case 1:
                    var c, d = Ih(n, kU, 1);
                    const z = n.R;
                    let A = z[F];
                    const E = qh(z, A, d),
                        I = ig(E, !0, !!(A & 34));
                    null != I && I !== E && sh(z, A, d, I);
                    var e = I;
                    var f = null == e ? Ef() : e;
                    Df(Bf);
                    var g = f.J;
                    if (null == g || zf(g)) var h = g;
                    else {
                        if ("string" === typeof g) {
                            a = g;
                            wf.test(a) && (a = a.replace(wf, yf));
                            let x;
                            x = atob(a);
                            const G = new Uint8Array(x.length);
                            for (a =
                                0; a < x.length; a++) G[a] = x.charCodeAt(a);
                            var k = G
                        } else k = null;
                        h = k
                    }
                    var l = h;
                    p = (c = null == l ? l : f.J = l) ? new Uint8Array(c) : Af || (Af = new Uint8Array(0));
                    break;
                case 3:
                    p = Vh(n, Ih(n, kU, 3));
                    break;
                default:
                    ze(b, void 0)
            }
            const v = Uh(n, 2) + 6048E5 < gk();
            return {
                Vc: p,
                Uc: v
            }
        } catch {
            return {
                Vc: null,
                Uc: !0
            }
        }
    };

    function cI() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), kf(B(pt), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function pU(a) {
        return y(qt) && a ? !!a.match(Mb(ot)) : !1
    }

    function qU(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function rU({
        za: a,
        ma: b,
        qb: c,
        slot: d
    }) {
        const e = d.vars,
            f = Fe(d.pubWin),
            g = qU(d),
            h = new AM({
                H: f,
                pubWin: d.pubWin,
                B: e,
                za: a,
                ma: b,
                qb: c,
                da: g
            });
        h.D = Date.now();
        mj(1, [h.B]);
        iz(1032, () => {
            if (f && y(Kt)) {
                var k = h.B;
                Z(RH(), 32, !1) || (WH(RH(), 32, !0), rO(f, "sd" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await sU(h)
        } catch (k) {
            if (!lz(159, k)) throw k;
        }
        iz(639, () => {
            var k;
            var l = h.B;
            (k = h.H) && 1 === l.google_responsive_auto_format && !0 === l.google_full_width_responsive_allowed ? (l = (l = k.document.getElementById(l.google_async_iframe_id)) ? fe(l,
                "INS", "adsbygoogle") : null) ? (k = new zM(k, l), k.g = t.setInterval(Ga(k.i, k), 500), k.i(), k = !0) : k = !1 : k = !1;
            return k
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? mz(1008, tU(f, e, h.j, hi(uU()), h.i, Q(a, 8)), CT) : iM(h.pubWin, "affa", k => {
            k = tU(f, e, h.j, k.config, h.i, Q(a, 8));
            gz.La(1008, k, CT);
            return !0
        });
        return h
    }
    async function tU(a, b, c, d, e, f) {
        y(Ss) ? await zT(a, b, c, d, e, f) : (a = await vU(a, b, c, d, e, f), 0 !== a && yk(fz, "adfil-imp", {
            wp: b.google_ad_client ? ? "",
            e: Mm().join("~"),
            h: b.google_page_url ? ? "",
            o: a
        }, !0, 1))
    }
    async function vU(a, b, c, d, e, f) {
        if (!a) return 1;
        if (!y(As) && !a.performance ? .now) return 2;
        const g = y(As) && !a.performance ? .now ? new hR : new gR(a.performance),
            h = new fR(a, g),
            k = b.google_ad_client;
        if ("string" !== typeof k) return 3;
        if ("string" !== typeof d) return 4;
        if (fc()) return 5;
        if (Oe()) return 6;
        var l = w(vI);
        d = XQ(d);
        const m = b.google_page_url;
        await DT(a, c, l, ZQ(a, d, "string" === typeof m ? m : "", f, "on" === b.google_adtest), k, g, h, e);
        return 0
    }

    function uU() {
        const a = new WQ;
        if (!y(ct)) {
            var b = new HM;
            b = bi(b, 5, !0);
            M(a, 2, b)
        }
        if (!y(Us)) {
            b = new Yp;
            b = rh(b, 2, Bg(4));
            b = rh(b, 8, Bg(1));
            var c = new $o;
            c = fi(c, 7, "#dpId");
            b = M(b, 1, c);
            Oh(a, 3, Yp, b)
        }
        return a
    }

    function sU(a) {
        if (/_sdo/.test(a.B.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        iO(13, b);
        iO(11, b);
        b = RH();
        var c = Z(b, 23, !1);
        c || WH(b, 23, !0);
        if (!c) {
            b = a.B.google_ad_client;
            c = a.za;
            b = void 0 !== uh(c, HM, Ih(c, KM, 13)) ? J(Wh(c, HM, 13, KM), VI, 2) : hb(Wh(c, IM, 14, KM) ? .g() ? ? [], [b]) ? J(J(Wh(c, IM, 14, KM), HM, 2), VI, 2) : new VI;
            b = new WI(a.pubWin, a.B.google_ad_client, b, P(a.za, 6), P(a.za, 20));
            b.i = !0;
            c = J(b.v, Zp, 1);
            if (b.i) {
                var d = b.g;
                if (b.j && !bD(c)) {
                    var e = new NI;
                    e = rh(e, 1, Bg(1))
                } else e = null;
                if (e) {
                    e = hi(e);
                    try {
                        d.localStorage.setItem("google_auto_fc_cmp_setting",
                            e)
                    } catch (f) {}
                }
            }
            d = bD(c) && (b.j || b.m);
            c && d && cD(new dD(b.g, new KD(b.g, b.l), c, new $u(b.g)))
        }
        b = !uj() && !ec();
        return !b || b && !wU(a) ? xU(a) : Promise.resolve()
    }

    function yU(a, b, c = !1) {
        b = WK(a.H, b);
        const d = yj() || Vt(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Xt(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function wU(a) {
        return zU(a) || AU(a)
    }

    function zU(a) {
        const b = a.B;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                kz("abg:cmppar", {
                    client: a.B.google_ad_client,
                    url: a.B.google_page_url
                })
            }, 1E4),
            d = jz(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                wU(a) || xU(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function AU(a) {
        const b = a.pubWin.document,
            c = a.da;
        if (3 === zL(b)) return CL(jz(332, () => {
            BU(a, CU().visible, c) || xU(a)
        }), b), !0;
        const d = CU();
        if (0 > d.hidden && 0 > d.visible) return !1;
        const e = AL(b);
        if (!e) return !1;
        if (!BL(b)) return BU(a, d.visible, c);
        if (yU(a, c) <= d.hidden) return !1;
        let f = jz(332, () => {
            !BL(b) && f && (Ib(b, e, f), BU(a, d.visible, c) || xU(a), f = null)
        });
        return Hb(b, e, f)
    }

    function CU() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        ie() && (a.visible *= 2);
        return a
    }

    function BU(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.B;
        if (!kn(d.google_reactive_ad_format) && (UL(d) || d.google_reactive_ads_config) || !Yt(c) || yU(a, c) <= b) return !1;
        var e = RH(),
            f = Z(e, 8, {});
        e = Z(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                Ta(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.C = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        la(Promise, "any").call(Promise, [f, e]).then(() => {
            iz(294, () => {
                xU(a)
            })
        });
        return !0
    }

    function xU(a) {
        iz(326, () => {
            if (1 === Vj(a.B)) {
                var c = y(Lt),
                    d = c || y(Jt),
                    e = a.pubWin;
                if (d && e === a.H) {
                    var f = new Oi;
                    d = new Pi;
                    var g = f.setCorrelator(hf(a.pubWin));
                    var h = kO(a.pubWin);
                    g = gi(g, 5, h);
                    S(g, 2, 1);
                    f = M(d, 1, f);
                    g = new Ni;
                    g = bi(g, 10, !0);
                    h = y(Et);
                    g = bi(g, 8, h);
                    h = y(Ft);
                    g = bi(g, 12, h);
                    h = y(It);
                    g = bi(g, 7, h);
                    h = y(Ht);
                    g = bi(g, 13, h);
                    M(f, 2, g);
                    e.google_rum_config = d.toJSON();
                    Ge(e.document, P(a.za, 9) && c ? a.ma.aj : a.ma.bj)
                } else nk(hz)
            }
        });
        a.B.google_ad_channel = DU(a, a.B.google_ad_channel);
        a.B.google_tag_partner = EU(a, a.B.google_tag_partner);
        FU(a);
        const b = a.B.google_start_time;
        "number" === typeof b && (Sm = b, a.B.google_start_time = null);
        VK(a);
        a.H && YL(a.H, Kc(a.ma.Th, yL()));
        ZH() && iJ({
            win: a.pubWin,
            webPropertyCode: a.B.google_ad_client,
            eb: Kc(a.ma.eb, yL())
        });
        UL(a.B) && (gJ() && (a.B.google_adtest = a.B.google_adtest || "on"), a.B.google_pgb_reactive = a.B.google_pgb_reactive || 3);
        return GU(a)
    }

    function DU(a, b) {
        return (b ? [b] : []).concat(PH(a.pubWin).ad_channels || []).join("+")
    }

    function EU(a, b) {
        return (b ? [b] : []).concat(PH(a.pubWin).tag_partners || []).join("+")
    }

    function HU(a) {
        const b = He("IFRAME");
        Ke(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function IU(a, b, c) {
        return 9 === a.B.google_reactive_ad_format && fe(a.da, null, "fsi_container") ? (a.da.appendChild(b), Promise.resolve(b)) : eM(a.ma.Mg, 525, d => {
            a.da.appendChild(b);
            d.createAdSlot(a.H, a.B, b, a.da.parentElement, Ri(c, a.pubWin));
            return b
        })
    }

    function JU(a, b, c, d) {
        w(vI).bd = a.B.google_page_url;
        fU(a.pubWin, xi(wi(S(S(vi(new yi, ti(new ui, String(hf(a.pubWin)))), 4, 1), 2, 1), Q(a.za, 2)), P(d, 5)));
        const e = a.H;
        a.B.google_acr && a.B.google_acr(b);
        Hb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = e ? PH(e).enable_overlap_observer || !1 : !1;
            (a.B.ovlp || f) && e && e === a.pubWin && KU(e, a, a.da, b)
        });
        d = f => {
            f && a.j.push(() => {
                f.ha()
            })
        };
        LU(a, b);
        MU(a, b);
        !e || UL(a.B) && !gM(a.B) || (d(new GN(e, b, a.da)), d(new YM(a, b)), d(e.IntersectionObserver ? null : new $M(e, b, a.da)));
        e && (d(SM(e, b, a.i)), a.j.push(tM(e, a.B)), w(yM).I(e), a.j.push(FM(e, a.da, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.B.iaaso;
        if (null != c) {
            d = a.da;
            const f = d.parentElement;
            (f && ju.test(f.className) ? f : d).setAttribute("data-auto-ad-size", c)
        }
        c = a.da;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        NU(a)
    }

    function LU(a, b) {
        const c = a.pubWin,
            d = a.B.google_ad_client,
            e = YH();
        let f = null;
        const g = hM(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.j.push(g)
    }

    function OU(a, b) {
        var c = XK(a, "__gpi_opt_out", b.i);
        c && (c = Gi(Fi(Ei(Ci(c), 2147483647), "/"), b.pubWin.location.hostname), YK(a, "__gpi_opt_out", c, b.i))
    }

    function MU(a, b) {
        const c = hM(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = Gi(Fi(Ei(Ci(d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new aL(a.pubWin);
                YK(f, "__gpi_opt_out", e, a.i);
                if (d.userOptOut || d.clearAdsData) ZK(f, "__gads", a.i), ZK(f, "__gpi", a.i)
            }
        });
        a.j.push(c)
    }

    function NU(a) {
        const b = uj(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                Hb(a.pubWin, "message", gz.Ka(616, c));
                a.j.push(() => {
                    Ib(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function KU(a, b, c, d) {
        ST(new aU(a), c).then(e => {
            mj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && ju.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.B.armr || "",
                g = e.executionTime || "",
                h = null == b.B.iaaso ? "" : Number(b.B.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Wa(e.entries, A => `${A.overlapType}:${A.overlapDepth}:${A.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p =
                m * e.targetRect.width * e.targetRect.height,
                q = `${e.scrollPosition.scrollX},${e.scrollPosition.scrollY}`,
                v = Wj(e.target),
                z = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = `${e.viewportSize.width}x${e.viewportSize.height}`;
            kz("ovlp", {
                adf: b.B.google_ad_dom_fingerprint,
                armr: f,
                client: b.B.google_ad_client,
                eid: kO(b.B),
                et: g,
                fwrattr: b.B.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.B.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.B.google_responsive_auto_format,
                roa: p,
                slot: b.B.google_ad_slot,
                sp: q,
                tgt: v,
                tr: z,
                url: b.B.google_page_url,
                vp: e,
                pvc: hf(a)
            }, 1)
        }).catch(e => {
            mj(8, ["Error:", e.message, c]);
            kz("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function PU(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function QU(a, b, c) {
        var d = a.B,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            g = d.google_ad_height,
            h = kM(d);
        e = {
            id: e,
            name: e
        };
        bO("browsing-topics", a.pubWin.document) && RU(a) && !y(vt) && !pU(a.m ? .label) && (e.browsingTopics = "true");
        e.style = h ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${g}px;`;
        var k = We();
        k["allow-top-navigation-by-user-activation"] && k["allow-popups-to-escape-sandbox"] && (y(ps) && h || (k = "=" + encodeURIComponent("1"),
            b = le(b, "fsb" + k)), e.sandbox = Ve().join(" "));
        !1 === d.google_video_play_muted && PU("autoplay", e);
        k = b;
        61440 < k.length && (k = k.substring(0, 61432), k = k.replace(/%\w?$/, ""), k = k.replace(/&[^=]*=?$/, ""), k += "&trunc=1");
        if (k !== b) {
            let l = b.lastIndexOf("&", 61432); - 1 === l && (l = b.lastIndexOf("?", 61432));
            kz("trn", {
                ol: b.length,
                tr: -1 === l ? "" : b.substring(l + 1),
                url: b
            }, .01)
        }
        b = k;
        null != f && (e.width = String(f));
        null != g && (e.height = String(g));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency =
            "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") && PU("attribution-reporting", e);
        y(Bt) && (d = a.pubWin, void 0 !== d.credentialless && (y(Ct) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (h) e.src = b, e = HU(e), a = IU(a, e, c);
        else {
            c = {};
            c.dtd = DM((new Date).getTime(), Sm);
            c = Rj(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = HU(e);
            c && a.j.push(Aj(a.pubWin, e));
            a.da.style.visibility = "visible";
            for (a = a.da; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function SU(a) {
        var b = a.B,
            c = a.pubWin;
        const d = a.i;
        P(d, 5) && OU(new aL(a.pubWin), a);
        var e = Ri(d, a.pubWin);
        if (!P(d, 5)) return kz("afc_noc_req", {}, B(Mr)), Promise.resolve();
        y(nt) && (a.m = await bI());
        if (!y(xt)) {
            var f = bO("shared-storage", a.pubWin.document),
                g = bO("browsing-topics", a.pubWin.document);
            if (f || g) try {
                a.v = mU(a.pubWin)
            } catch (h) {
                lz(984, h)
            }
        }
        y(Er) || eL(d, a.pubWin, a.B.google_ad_client);
        jO(a.pubWin, d);
        if (f = a.B.google_reactive_ads_config) dM(a.H, f), lM(f, a, Ri(d)), f = f.page_level_pubvars, Aa(f) && Ec(a.B, f);
        f = bO("shared-storage",
            a.pubWin.document);
        a.v && P(d, 5) && f && !y(mt) && !Z(RH(), 34, !1) && (WH(RH(), 34, !0), f = a.v.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: hf(a.pubWin)
            })
        }), gz.La(1069, f));
        if (bO("browsing-topics", a.pubWin.document) && a.v && !y(wt) && !pU(a.m ? .label))
            if (RU(a)) {
                a.l = 1;
                const h = Ri(a.i, a.pubWin);
                f = a.v.then(async k => {
                    await nU(k, a.pubWin, h).then(l => {
                        a.l = l
                    })
                });
                y(yt) && (g = B(At), 0 < g ? await Promise.race([f, kf(g)]) : await f)
            } else a.l = 5;
        f = "";
        kM(b) ? (e = a.ma.wj, f = Mb(xs), "inhead" === f ? e = a.ma.uj : "nohtml" === f && (e = a.ma.vj), y(ns) && (e = Kc(e, {
            hello: "world"
        })), f = e.toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + Qj({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), FO(b, RH()), TU(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !VL(b) || TL(c, b, e)) && TU(b) && (f = wO(a, d));
        mj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || Uj(c);
        e = Vj(b);
        b = a.pubWin === a.H ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648* 
Math.random())^Date.now()).toString(36)}`;
        c = 0 < yU(a, a.da, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = RH(), e.btvi = Z(c, 21, 1), XH(c, 21));
        f = Rj(e, f);
        c = QU(a, f, d);
        a.B.rpe && EN(a.pubWin, a.da, {
            height: a.B.google_ad_height,
            hf: "force",
            Qc: !0,
            af: !0,
            Ud: a.B.google_ad_client
        });
        c = await c;
        try {
            JU(a, c, b, d)
        } catch (h) {
            lz(223, h)
        }
    }

    function UU(a) {
        const b = new MT(a);
        return new Promise(c => {
            LT(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function VU(a) {
        var b = Xe(t.top, "googlefcPresent");
        t.googlefc && !b && kz("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function WU(a, b) {
        var c = b.pj,
            d = b.uspString;
        b = b.si;
        c ? BM(a, c) : QI(a, !0);
        if (d) {
            c = fi(a, 1, d);
            d = d.toUpperCase();
            if (4 == d.length && (-1 == d.indexOf("-") || "---" === d.substring(1)) && "1" <= d[0] && "9" >= d[0] && lJ.hasOwnProperty(d[1]) && lJ.hasOwnProperty(d[2]) && lJ.hasOwnProperty(d[3])) {
                var e = new kJ;
                e = di(e, 1, parseInt(d[0], 10));
                e = S(e, 2, lJ[d[1]]);
                e = S(e, 3, lJ[d[2]]);
                d = S(e, 4, lJ[d[3]])
            } else d = null;
            d = 2 === d ? .ni();
            ai(c, 13, d)
        }
        b && sL(a, b)
    }

    function XU(a) {
        const b = B(Kr);
        if (0 >= b) return null;
        const c = gk(),
            d = dU(a.pubWin);
        if (!d) return null;
        a.A = "0";
        return Promise.race([d, kf(b, "0")]).then(e => {
            kz("adsense_paw", {
                time: gk() - c
            });
            1E4 < e ? .length ? lz(809, Error(`ML:${e.length}`)) : a.A = e
        }).catch(e => {
            lz(809, e)
        })
    }

    function YU(a) {
        const b = gk();
        return Promise.race([iz(832, () => hU(a)), kf(200)]).then(c => {
            kz("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: gk() - b,
                tms: 200
            });
            return c ? .rc
        })
    }
    async function ZU(a) {
        const b = XU(a),
            c = iz(868, () => YU(a.pubWin));
        yK(a.pubWin);
        VU(a.B.google_ad_client);
        var d = new wD(a.pubWin);
        await (tD(d, ".google.cn" === Q(a.za, 8)) ? uD(d) : Promise.resolve(null));
        a.i = new RI;
        d = [CM(a), UU(a.pubWin), y(Gr) ? tL(a) : null];
        d = await Promise.all(d);
        WU(a.i, {
            pj: d[0],
            uspString: d[1],
            si: d[2]
        });
        await b;
        a.rc = await c || "";
        await SU(a)
    }

    function RU(a) {
        const b = a.i;
        a = a.B;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!P(b, 5) && !b.g() && !$H() && !P(b, 9) && !P(b, 13) && (!y(Gr) || !P(b, 12)) && ("string" !== typeof a.google_privacy_treatments || !a.google_privacy_treatments.split(",").includes("disablePersonalization"))
    }

    function GU(a) {
        a.B.google_allow_expandable_ads = !1;
        lf(a.pubWin) !== a.pubWin && (a.g |= 4);
        3 === zL(a.pubWin.document) && (a.g |= 32);
        var b;
        if (b = a.H) {
            b = a.H;
            const c = cn(b);
            b = !(hn(b).scrollWidth <= c)
        }
        b && (a.g |= 1024);
        a.pubWin.Prototype ? .Version && (a.g |= 16384);
        a.B.google_loader_features_used && (a.g |= a.B.google_loader_features_used);
        return ZU(a)
    }

    function TU(a) {
        const b = RH(),
            c = a.google_ad_section;
        UL(a) && XH(b, 15);
        if (Yj(a)) {
            if (100 < XH(b, 5)) return !1
        } else if (100 < XH(b, 6) - Z(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function FU(a) {
        const b = a.H;
        if (b && !PH(b).ads_density_stats_processed && !uj(b) && (PH(b).ads_density_stats_processed = !0, y(ts) || .01 > Je())) {
            const c = () => {
                if (b) {
                    var d = PG(KG(b), a.B.google_ad_client, b.location.hostname, kO(a.B).split(","));
                    kz("ama_stats", d, 1)
                }
            };
            jf(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        iz(843, () => {
            if (!t.google_sa_impl) {
                var d = new Hm(b);
                try {
                    sg(k => {
                        var l = new wm;
                        var m = new vm;
                        try {
                            var n = hf(window);
                            R(m, 1, n)
                        } catch (z) {}
                        try {
                            var p = Mm();
                            Eh(m, 2, p, Dg)
                        } catch (z) {}
                        try {
                            gi(m, 3, window.document.URL)
                        } catch (z) {}
                        l = M(l, 2, m);
                        m = new um;
                        m = S(m, 1, 1192);
                        try {
                            var q = Ak(k ? .name) ? k.name : "Unknown error";
                            gi(m, 2, q)
                        } catch (z) {}
                        try {
                            var v = Ak(k ? .message) ? k.message : `Caught ${k}`;
                            gi(m, 3, v)
                        } catch (z) {}
                        try {
                            const z = Ak(k ? .stack) ? k.stack : Error().stack;
                            z && Eh(m, 4, z.split(/\n\s*/), Qg)
                        } catch (z) {}
                        k = M(l, 1, m);
                        q = new tm;
                        try {
                            gi(q,
                                1, "m202312060101")
                        } catch {}
                        Mh(k, 6, xm, q);
                        R(k, 5, 1);
                        zm(d, k)
                    })
                } catch (k) {}
                var e = HT(a);
                FT(Q(e, 2));
                NM(P(e, 6));
                mj(16, [3, e.toJSON()]);
                var f = ET({
                        Mf: b,
                        Sg: Q(e, 2)
                    }),
                    g = c(f, e);
                t.google_sa_impl = k => rU({
                    za: e,
                    ma: g,
                    qb: f,
                    slot: k
                });
                gO(aO(t));
                t.google_process_slots ? .();
                var h = (t.Prototype || {}).Version;
                null != h && kz("prtpjs", {
                    version: h
                })
            }
        })
    })(GT, "m202312060101", function(a, b) {
        const c = 2012 < Th(b, 1) ? `_fy${Th(b,1)}` : "",
            d = Q(b, 3);
        b = Q(b, 2);
        return {
            bj: fj `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            aj: fj `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Mg: fj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            Th: fj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            wj: fj `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            uj: fj `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_inhead${c}.html`,
            vj: fj `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup_nohtml${c}.html`,
            Qn: fj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            In: fj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            eb: fj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`
        }
    });
}).call(this, "[2021,\"r20231207\",\"r20110914\",null,null,null,null,\".google.com.pk\",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759837]]");