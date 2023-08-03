(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.id="hdv_employees",e.appendChild(document.createTextNode(":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}ul.svelte-5qrp3d{list-style:none;display:flex;flex-wrap:wrap;gap:1rem;padding:0;margin:0}li.svelte-5qrp3d{display:flex;width:15rem;padding:1rem;background-color:#393939;outline:2px solid rgba(0,0,0,0);outline-offset:-2px;gap:2rem;flex-direction:column}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ot = Object.defineProperty;
var st = (t, e, n) => e in t ? ot(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ke = (t, e, n) => (st(t, typeof e != "symbol" ? e + "" : e, n), n);
function D() {
}
function N(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Re(t) {
  return t();
}
function Ee() {
  return /* @__PURE__ */ Object.create(null);
}
function G(t) {
  t.forEach(Re);
}
function qe(t) {
  return typeof t == "function";
}
function X(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ut(t) {
  return Object.keys(t).length === 0;
}
function ft(t, ...e) {
  if (t == null) {
    for (const l of e)
      l(void 0);
    return D;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ze(t, e, n) {
  t.$$.on_destroy.push(ft(e, n));
}
function ie(t, e, n, l) {
  if (t) {
    const i = Je(t, e, n, l);
    return t[0](i);
  }
}
function Je(t, e, n, l) {
  return t[1] && l ? N(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function oe(t, e, n, l) {
  if (t[2] && l) {
    const i = t[2](l(n));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const f = [], s = Math.max(e.dirty.length, i.length);
      for (let o = 0; o < s; o += 1)
        f[o] = e.dirty[o] | i[o];
      return f;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function se(t, e, n, l, i, f) {
  if (i) {
    const s = Je(e, n, l, f);
    t.p(s, i);
  }
}
function ue(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function re(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function W(t, e) {
  const n = {};
  e = new Set(e);
  for (const l in t)
    !e.has(l) && l[0] !== "$" && (n[l] = t[l]);
  return n;
}
function rt(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function y(t, e) {
  t.appendChild(e);
}
function C(t, e, n) {
  t.insertBefore(e, n || null);
}
function w(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function at(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function z(t) {
  return document.createElement(t);
}
function ye(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function q(t) {
  return document.createTextNode(t);
}
function J() {
  return q(" ");
}
function He() {
  return q("");
}
function E(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function L(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const ct = ["width", "height"];
function U(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const l in e)
    e[l] == null ? t.removeAttribute(l) : l === "style" ? t.style.cssText = e[l] : l === "__value" ? t.value = t[l] = e[l] : n[l] && n[l].set && ct.indexOf(l) === -1 ? t[l] = e[l] : L(t, l, e[l]);
}
function Se(t, e) {
  for (const n in e)
    L(t, n, e[n]);
}
function dt(t) {
  return Array.from(t.childNodes);
}
function V(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function be(t, e, n, l) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
function k(t, e, n) {
  t.classList.toggle(e, !!n);
}
function mt(t, e, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: l });
}
function ge(t, e) {
  return new t(e);
}
let ce;
function ae(t) {
  ce = t;
}
function Ue() {
  if (!ce)
    throw new Error("Function called outside component initialization");
  return ce;
}
function _t() {
  const t = Ue();
  return (e, n, { cancelable: l = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const f = mt(
        /** @type {string} */
        e,
        n,
        { cancelable: l }
      );
      return i.slice().forEach((s) => {
        s.call(t, f);
      }), !f.defaultPrevented;
    }
    return !0;
  };
}
function bt(t) {
  return Ue().$$.context.get(t);
}
function v(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((l) => l.call(this, e));
}
const le = [], de = [];
let fe = [];
const ve = [], ht = /* @__PURE__ */ Promise.resolve();
let Ae = !1;
function gt() {
  Ae || (Ae = !0, ht.then(Ve));
}
function Be(t) {
  fe.push(t);
}
function kt(t) {
  ve.push(t);
}
const pe = /* @__PURE__ */ new Set();
let te = 0;
function Ve() {
  if (te !== 0)
    return;
  const t = ce;
  do {
    try {
      for (; te < le.length; ) {
        const e = le[te];
        te++, ae(e), pt(e.$$);
      }
    } catch (e) {
      throw le.length = 0, te = 0, e;
    }
    for (ae(null), le.length = 0, te = 0; de.length; )
      de.pop()();
    for (let e = 0; e < fe.length; e += 1) {
      const n = fe[e];
      pe.has(n) || (pe.add(n), n());
    }
    fe.length = 0;
  } while (le.length);
  for (; ve.length; )
    ve.pop()();
  Ae = !1, pe.clear(), ae(t);
}
function pt(t) {
  if (t.fragment !== null) {
    t.update(), G(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Be);
  }
}
function yt(t) {
  const e = [], n = [];
  fe.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), fe = e;
}
const he = /* @__PURE__ */ new Set();
let Z;
function me() {
  Z = {
    r: 0,
    c: [],
    p: Z
    // parent group
  };
}
function _e() {
  Z.r || G(Z.c), Z = Z.p;
}
function P(t, e) {
  t && t.i && (he.delete(t), t.i(e));
}
function O(t, e, n, l) {
  if (t && t.o) {
    if (he.has(t))
      return;
    he.add(t), Z.c.push(() => {
      he.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function Te(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function x(t, e) {
  const n = {}, l = {}, i = { $$scope: 1 };
  let f = t.length;
  for (; f--; ) {
    const s = t[f], o = e[f];
    if (o) {
      for (const r in s)
        r in o || (l[r] = 1);
      for (const r in o)
        i[r] || (n[r] = o[r], i[r] = 1);
      t[f] = o;
    } else
      for (const r in s)
        i[r] = 1;
  }
  for (const s in l)
    s in n || (n[s] = void 0);
  return n;
}
function vt(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function At(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function Q(t) {
  t && t.c();
}
function Y(t, e, n) {
  const { fragment: l, after_update: i } = t.$$;
  l && l.m(e, n), Be(() => {
    const f = t.$$.on_mount.map(Re).filter(qe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...f) : G(f), t.$$.on_mount = [];
  }), i.forEach(Be);
}
function F(t, e) {
  const n = t.$$;
  n.fragment !== null && (yt(n.after_update), G(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Bt(t, e) {
  t.$$.dirty[0] === -1 && (le.push(t), gt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function $(t, e, n, l, i, f, s, o = [-1]) {
  const r = ce;
  ae(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: D,
    not_equal: i,
    bound: Ee(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (r ? r.$$.context : [])),
    // everything else
    callbacks: Ee(),
    dirty: o,
    skip_bound: !1,
    root: e.target || r.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (_, b, ...p) => {
    const a = p.length ? p[0] : b;
    return u.ctx && i(u.ctx[_], u.ctx[_] = a) && (!u.skip_bound && u.bound[_] && u.bound[_](a), c && Bt(t, _)), b;
  }) : [], u.update(), c = !0, G(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const _ = dt(e.target);
      u.fragment && u.fragment.l(_), _.forEach(w);
    } else
      u.fragment && u.fragment.c();
    e.intro && P(t.$$.fragment), Y(t, e.target, e.anchor), Ve();
  }
  ae(r);
}
class ee {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ke(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ke(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    F(this, 1), this.$destroy = D;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!qe(n))
      return D;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ut(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Et = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Et);
const ne = [];
function Ye(t, e = D) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(o) {
    if (X(t, o) && (t = o, n)) {
      const r = !ne.length;
      for (const u of l)
        u[1](), ne.push(u, t);
      if (r) {
        for (let u = 0; u < ne.length; u += 2)
          ne[u][0](ne[u + 1]);
        ne.length = 0;
      }
    }
  }
  function f(o) {
    i(o(t));
  }
  function s(o, r = D) {
    const u = [o, r];
    return l.add(u), l.size === 1 && (n = e(i, f) || D), o(t), () => {
      l.delete(u), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: f, subscribe: s };
}
function zt(t) {
  let e, n, l, i = [
    /*$$restProps*/
    t[2]
  ], f = {};
  for (let s = 0; s < i.length; s += 1)
    f = N(f, i[s]);
  return {
    c() {
      e = z("div"), U(e, f), k(e, "bx--skeleton", !0), k(e, "bx--btn", !0), k(
        e,
        "bx--btn--field",
        /*size*/
        t[1] === "field"
      ), k(
        e,
        "bx--btn--sm",
        /*size*/
        t[1] === "small"
      ), k(
        e,
        "bx--btn--lg",
        /*size*/
        t[1] === "lg"
      ), k(
        e,
        "bx--btn--xl",
        /*size*/
        t[1] === "xl"
      );
    },
    m(s, o) {
      C(s, e, o), n || (l = [
        E(
          e,
          "click",
          /*click_handler_1*/
          t[7]
        ),
        E(
          e,
          "mouseover",
          /*mouseover_handler_1*/
          t[8]
        ),
        E(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[9]
        ),
        E(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[10]
        )
      ], n = !0);
    },
    p(s, o) {
      U(e, f = x(i, [o & /*$$restProps*/
      4 && /*$$restProps*/
      s[2]])), k(e, "bx--skeleton", !0), k(e, "bx--btn", !0), k(
        e,
        "bx--btn--field",
        /*size*/
        s[1] === "field"
      ), k(
        e,
        "bx--btn--sm",
        /*size*/
        s[1] === "small"
      ), k(
        e,
        "bx--btn--lg",
        /*size*/
        s[1] === "lg"
      ), k(
        e,
        "bx--btn--xl",
        /*size*/
        s[1] === "xl"
      );
    },
    d(s) {
      s && w(e), n = !1, G(l);
    }
  };
}
function St(t) {
  let e, n = "", l, i, f, s, o = [
    { href: (
      /*href*/
      t[0]
    ) },
    {
      rel: i = /*$$restProps*/
      t[2].target === "_blank" ? "noopener noreferrer" : void 0
    },
    { role: "button" },
    /*$$restProps*/
    t[2]
  ], r = {};
  for (let u = 0; u < o.length; u += 1)
    r = N(r, o[u]);
  return {
    c() {
      e = z("a"), l = q(n), U(e, r), k(e, "bx--skeleton", !0), k(e, "bx--btn", !0), k(
        e,
        "bx--btn--field",
        /*size*/
        t[1] === "field"
      ), k(
        e,
        "bx--btn--sm",
        /*size*/
        t[1] === "small"
      ), k(
        e,
        "bx--btn--lg",
        /*size*/
        t[1] === "lg"
      ), k(
        e,
        "bx--btn--xl",
        /*size*/
        t[1] === "xl"
      );
    },
    m(u, c) {
      C(u, e, c), y(e, l), f || (s = [
        E(
          e,
          "click",
          /*click_handler*/
          t[3]
        ),
        E(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[4]
        ),
        E(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        E(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], f = !0);
    },
    p(u, c) {
      U(e, r = x(o, [
        c & /*href*/
        1 && { href: (
          /*href*/
          u[0]
        ) },
        c & /*$$restProps*/
        4 && i !== (i = /*$$restProps*/
        u[2].target === "_blank" ? "noopener noreferrer" : void 0) && { rel: i },
        { role: "button" },
        c & /*$$restProps*/
        4 && /*$$restProps*/
        u[2]
      ])), k(e, "bx--skeleton", !0), k(e, "bx--btn", !0), k(
        e,
        "bx--btn--field",
        /*size*/
        u[1] === "field"
      ), k(
        e,
        "bx--btn--sm",
        /*size*/
        u[1] === "small"
      ), k(
        e,
        "bx--btn--lg",
        /*size*/
        u[1] === "lg"
      ), k(
        e,
        "bx--btn--xl",
        /*size*/
        u[1] === "xl"
      );
    },
    d(u) {
      u && w(e), f = !1, G(s);
    }
  };
}
function Tt(t) {
  let e;
  function n(f, s) {
    return (
      /*href*/
      f[0] ? St : zt
    );
  }
  let l = n(t), i = l(t);
  return {
    c() {
      i.c(), e = He();
    },
    m(f, s) {
      i.m(f, s), C(f, e, s);
    },
    p(f, [s]) {
      l === (l = n(f)) && i ? i.p(f, s) : (i.d(1), i = l(f), i && (i.c(), i.m(e.parentNode, e)));
    },
    i: D,
    o: D,
    d(f) {
      f && w(e), i.d(f);
    }
  };
}
function Pt(t, e, n) {
  const l = ["href", "size"];
  let i = W(e, l), { href: f = void 0 } = e, { size: s = "default" } = e;
  function o(h) {
    v.call(this, t, h);
  }
  function r(h) {
    v.call(this, t, h);
  }
  function u(h) {
    v.call(this, t, h);
  }
  function c(h) {
    v.call(this, t, h);
  }
  function _(h) {
    v.call(this, t, h);
  }
  function b(h) {
    v.call(this, t, h);
  }
  function p(h) {
    v.call(this, t, h);
  }
  function a(h) {
    v.call(this, t, h);
  }
  return t.$$set = (h) => {
    e = N(N({}, e), re(h)), n(2, i = W(e, l)), "href" in h && n(0, f = h.href), "size" in h && n(1, s = h.size);
  }, [
    f,
    s,
    i,
    o,
    r,
    u,
    c,
    _,
    b,
    p,
    a
  ];
}
class Ot extends ee {
  constructor(e) {
    super(), $(this, e, Pt, Tt, X, { href: 0, size: 1 });
  }
}
const wt = Ot, Ct = (t) => ({ props: t[0] & /*buttonProps*/
512 }), Pe = (t) => ({ props: (
  /*buttonProps*/
  t[9]
) });
function It(t) {
  let e, n, l, i, f, s, o = (
    /*hasIconOnly*/
    t[8] && Oe(t)
  );
  const r = (
    /*#slots*/
    t[19].default
  ), u = ie(
    r,
    t,
    /*$$scope*/
    t[18],
    null
  );
  var c = (
    /*icon*/
    t[2]
  );
  function _(a) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        style: (
          /*hasIconOnly*/
          a[8] ? "margin-left: 0" : void 0
        ),
        "aria-label": (
          /*iconDescription*/
          a[3]
        )
      }
    };
  }
  c && (l = ge(c, _(t)));
  let b = [
    /*buttonProps*/
    t[9]
  ], p = {};
  for (let a = 0; a < b.length; a += 1)
    p = N(p, b[a]);
  return {
    c() {
      e = z("button"), o && o.c(), n = J(), u && u.c(), l && Q(l.$$.fragment), U(e, p);
    },
    m(a, h) {
      C(a, e, h), o && o.m(e, null), y(e, n), u && u.m(e, null), l && Y(l, e, null), e.autofocus && e.focus(), t[33](e), i = !0, f || (s = [
        E(
          e,
          "click",
          /*click_handler_2*/
          t[24]
        ),
        E(
          e,
          "mouseover",
          /*mouseover_handler_2*/
          t[25]
        ),
        E(
          e,
          "mouseenter",
          /*mouseenter_handler_2*/
          t[26]
        ),
        E(
          e,
          "mouseleave",
          /*mouseleave_handler_2*/
          t[27]
        )
      ], f = !0);
    },
    p(a, h) {
      /*hasIconOnly*/
      a[8] ? o ? o.p(a, h) : (o = Oe(a), o.c(), o.m(e, n)) : o && (o.d(1), o = null), u && u.p && (!i || h[0] & /*$$scope*/
      262144) && se(
        u,
        r,
        a,
        /*$$scope*/
        a[18],
        i ? oe(
          r,
          /*$$scope*/
          a[18],
          h,
          null
        ) : ue(
          /*$$scope*/
          a[18]
        ),
        null
      );
      const S = {};
      if (h[0] & /*hasIconOnly*/
      256 && (S.style = /*hasIconOnly*/
      a[8] ? "margin-left: 0" : void 0), h[0] & /*iconDescription*/
      8 && (S["aria-label"] = /*iconDescription*/
      a[3]), h[0] & /*icon*/
      4 && c !== (c = /*icon*/
      a[2])) {
        if (l) {
          me();
          const A = l;
          O(A.$$.fragment, 1, 0, () => {
            F(A, 1);
          }), _e();
        }
        c ? (l = ge(c, _(a)), Q(l.$$.fragment), P(l.$$.fragment, 1), Y(l, e, null)) : l = null;
      } else
        c && l.$set(S);
      U(e, p = x(b, [h[0] & /*buttonProps*/
      512 && /*buttonProps*/
      a[9]]));
    },
    i(a) {
      i || (P(u, a), l && P(l.$$.fragment, a), i = !0);
    },
    o(a) {
      O(u, a), l && O(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && w(e), o && o.d(), u && u.d(a), l && F(l), t[33](null), f = !1, G(s);
    }
  };
}
function Lt(t) {
  let e, n, l, i, f, s, o = (
    /*hasIconOnly*/
    t[8] && we(t)
  );
  const r = (
    /*#slots*/
    t[19].default
  ), u = ie(
    r,
    t,
    /*$$scope*/
    t[18],
    null
  );
  var c = (
    /*icon*/
    t[2]
  );
  function _(a) {
    return {
      props: {
        "aria-hidden": "true",
        class: "bx--btn__icon",
        "aria-label": (
          /*iconDescription*/
          a[3]
        )
      }
    };
  }
  c && (l = ge(c, _(t)));
  let b = [
    /*buttonProps*/
    t[9]
  ], p = {};
  for (let a = 0; a < b.length; a += 1)
    p = N(p, b[a]);
  return {
    c() {
      e = z("a"), o && o.c(), n = J(), u && u.c(), l && Q(l.$$.fragment), U(e, p);
    },
    m(a, h) {
      C(a, e, h), o && o.m(e, null), y(e, n), u && u.m(e, null), l && Y(l, e, null), t[32](e), i = !0, f || (s = [
        E(
          e,
          "click",
          /*click_handler_1*/
          t[20]
        ),
        E(
          e,
          "mouseover",
          /*mouseover_handler_1*/
          t[21]
        ),
        E(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[22]
        ),
        E(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[23]
        )
      ], f = !0);
    },
    p(a, h) {
      /*hasIconOnly*/
      a[8] ? o ? o.p(a, h) : (o = we(a), o.c(), o.m(e, n)) : o && (o.d(1), o = null), u && u.p && (!i || h[0] & /*$$scope*/
      262144) && se(
        u,
        r,
        a,
        /*$$scope*/
        a[18],
        i ? oe(
          r,
          /*$$scope*/
          a[18],
          h,
          null
        ) : ue(
          /*$$scope*/
          a[18]
        ),
        null
      );
      const S = {};
      if (h[0] & /*iconDescription*/
      8 && (S["aria-label"] = /*iconDescription*/
      a[3]), h[0] & /*icon*/
      4 && c !== (c = /*icon*/
      a[2])) {
        if (l) {
          me();
          const A = l;
          O(A.$$.fragment, 1, 0, () => {
            F(A, 1);
          }), _e();
        }
        c ? (l = ge(c, _(a)), Q(l.$$.fragment), P(l.$$.fragment, 1), Y(l, e, null)) : l = null;
      } else
        c && l.$set(S);
      U(e, p = x(b, [h[0] & /*buttonProps*/
      512 && /*buttonProps*/
      a[9]]));
    },
    i(a) {
      i || (P(u, a), l && P(l.$$.fragment, a), i = !0);
    },
    o(a) {
      O(u, a), l && O(l.$$.fragment, a), i = !1;
    },
    d(a) {
      a && w(e), o && o.d(), u && u.d(a), l && F(l), t[32](null), f = !1, G(s);
    }
  };
}
function Nt(t) {
  let e;
  const n = (
    /*#slots*/
    t[19].default
  ), l = ie(
    n,
    t,
    /*$$scope*/
    t[18],
    Pe
  );
  return {
    c() {
      l && l.c();
    },
    m(i, f) {
      l && l.m(i, f), e = !0;
    },
    p(i, f) {
      l && l.p && (!e || f[0] & /*$$scope, buttonProps*/
      262656) && se(
        l,
        n,
        i,
        /*$$scope*/
        i[18],
        e ? oe(
          n,
          /*$$scope*/
          i[18],
          f,
          Ct
        ) : ue(
          /*$$scope*/
          i[18]
        ),
        Pe
      );
    },
    i(i) {
      e || (P(l, i), e = !0);
    },
    o(i) {
      O(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Mt(t) {
  let e, n;
  const l = [
    { href: (
      /*href*/
      t[7]
    ) },
    { size: (
      /*size*/
      t[1]
    ) },
    /*$$restProps*/
    t[10],
    {
      style: (
        /*hasIconOnly*/
        t[8] && "width: 3rem;"
      )
    }
  ];
  let i = {};
  for (let f = 0; f < l.length; f += 1)
    i = N(i, l[f]);
  return e = new wt({ props: i }), e.$on(
    "click",
    /*click_handler*/
    t[28]
  ), e.$on(
    "mouseover",
    /*mouseover_handler*/
    t[29]
  ), e.$on(
    "mouseenter",
    /*mouseenter_handler*/
    t[30]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler*/
    t[31]
  ), {
    c() {
      Q(e.$$.fragment);
    },
    m(f, s) {
      Y(e, f, s), n = !0;
    },
    p(f, s) {
      const o = s[0] & /*href, size, $$restProps, hasIconOnly*/
      1410 ? x(l, [
        s[0] & /*href*/
        128 && { href: (
          /*href*/
          f[7]
        ) },
        s[0] & /*size*/
        2 && { size: (
          /*size*/
          f[1]
        ) },
        s[0] & /*$$restProps*/
        1024 && vt(
          /*$$restProps*/
          f[10]
        ),
        s[0] & /*hasIconOnly*/
        256 && {
          style: (
            /*hasIconOnly*/
            f[8] && "width: 3rem;"
          )
        }
      ]) : {};
      e.$set(o);
    },
    i(f) {
      n || (P(e.$$.fragment, f), n = !0);
    },
    o(f) {
      O(e.$$.fragment, f), n = !1;
    },
    d(f) {
      F(e, f);
    }
  };
}
function Oe(t) {
  let e, n;
  return {
    c() {
      e = z("span"), n = q(
        /*iconDescription*/
        t[3]
      ), k(e, "bx--assistive-text", !0);
    },
    m(l, i) {
      C(l, e, i), y(e, n);
    },
    p(l, i) {
      i[0] & /*iconDescription*/
      8 && V(
        n,
        /*iconDescription*/
        l[3]
      );
    },
    d(l) {
      l && w(e);
    }
  };
}
function we(t) {
  let e, n;
  return {
    c() {
      e = z("span"), n = q(
        /*iconDescription*/
        t[3]
      ), k(e, "bx--assistive-text", !0);
    },
    m(l, i) {
      C(l, e, i), y(e, n);
    },
    p(l, i) {
      i[0] & /*iconDescription*/
      8 && V(
        n,
        /*iconDescription*/
        l[3]
      );
    },
    d(l) {
      l && w(e);
    }
  };
}
function jt(t) {
  let e, n, l, i;
  const f = [Mt, Nt, Lt, It], s = [];
  function o(r, u) {
    return (
      /*skeleton*/
      r[5] ? 0 : (
        /*as*/
        r[4] ? 1 : (
          /*href*/
          r[7] && !/*disabled*/
          r[6] ? 2 : 3
        )
      )
    );
  }
  return e = o(t), n = s[e] = f[e](t), {
    c() {
      n.c(), l = He();
    },
    m(r, u) {
      s[e].m(r, u), C(r, l, u), i = !0;
    },
    p(r, u) {
      let c = e;
      e = o(r), e === c ? s[e].p(r, u) : (me(), O(s[c], 1, 1, () => {
        s[c] = null;
      }), _e(), n = s[e], n ? n.p(r, u) : (n = s[e] = f[e](r), n.c()), P(n, 1), n.m(l.parentNode, l));
    },
    i(r) {
      i || (P(n), i = !0);
    },
    o(r) {
      O(n), i = !1;
    },
    d(r) {
      r && w(l), s[e].d(r);
    }
  };
}
function Dt(t, e, n) {
  let l, i;
  const f = [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ];
  let s = W(e, f), { $$slots: o = {}, $$scope: r } = e;
  const u = rt(o);
  let { kind: c = "primary" } = e, { size: _ = "default" } = e, { expressive: b = !1 } = e, { isSelected: p = !1 } = e, { icon: a = void 0 } = e, { iconDescription: h = void 0 } = e, { tooltipAlignment: S = "center" } = e, { tooltipPosition: A = "bottom" } = e, { as: H = !1 } = e, { skeleton: T = !1 } = e, { disabled: B = !1 } = e, { href: M = void 0 } = e, { tabindex: R = "0" } = e, { type: I = "button" } = e, { ref: j = null } = e;
  const K = bt("ComposedModal");
  function g(m) {
    v.call(this, t, m);
  }
  function d(m) {
    v.call(this, t, m);
  }
  function Ke(m) {
    v.call(this, t, m);
  }
  function Qe(m) {
    v.call(this, t, m);
  }
  function We(m) {
    v.call(this, t, m);
  }
  function Xe(m) {
    v.call(this, t, m);
  }
  function Ze(m) {
    v.call(this, t, m);
  }
  function xe(m) {
    v.call(this, t, m);
  }
  function $e(m) {
    v.call(this, t, m);
  }
  function et(m) {
    v.call(this, t, m);
  }
  function tt(m) {
    v.call(this, t, m);
  }
  function nt(m) {
    v.call(this, t, m);
  }
  function lt(m) {
    de[m ? "unshift" : "push"](() => {
      j = m, n(0, j);
    });
  }
  function it(m) {
    de[m ? "unshift" : "push"](() => {
      j = m, n(0, j);
    });
  }
  return t.$$set = (m) => {
    e = N(N({}, e), re(m)), n(10, s = W(e, f)), "kind" in m && n(11, c = m.kind), "size" in m && n(1, _ = m.size), "expressive" in m && n(12, b = m.expressive), "isSelected" in m && n(13, p = m.isSelected), "icon" in m && n(2, a = m.icon), "iconDescription" in m && n(3, h = m.iconDescription), "tooltipAlignment" in m && n(14, S = m.tooltipAlignment), "tooltipPosition" in m && n(15, A = m.tooltipPosition), "as" in m && n(4, H = m.as), "skeleton" in m && n(5, T = m.skeleton), "disabled" in m && n(6, B = m.disabled), "href" in m && n(7, M = m.href), "tabindex" in m && n(16, R = m.tabindex), "type" in m && n(17, I = m.type), "ref" in m && n(0, j = m.ref), "$$scope" in m && n(18, r = m.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*ref*/
    1 && K && j && K.declareRef(j), t.$$.dirty[0] & /*icon*/
    4 && n(8, l = a && !u.default), n(9, i = {
      type: M && !B ? void 0 : I,
      tabindex: R,
      disabled: B === !0 ? !0 : void 0,
      href: M,
      "aria-pressed": l && c === "ghost" && !M ? p : void 0,
      ...s,
      class: [
        "bx--btn",
        b && "bx--btn--expressive",
        (_ === "small" && !b || _ === "sm" && !b || _ === "small" && !b) && "bx--btn--sm",
        _ === "field" && !b || _ === "md" && !b && "bx--btn--md",
        _ === "field" && "bx--btn--field",
        _ === "small" && "bx--btn--sm",
        _ === "lg" && "bx--btn--lg",
        _ === "xl" && "bx--btn--xl",
        c && `bx--btn--${c}`,
        B && "bx--btn--disabled",
        l && "bx--btn--icon-only",
        l && "bx--tooltip__trigger",
        l && "bx--tooltip--a11y",
        l && A && `bx--btn--icon-only--${A}`,
        l && S && `bx--tooltip--align-${S}`,
        l && p && c === "ghost" && "bx--btn--selected",
        s.class
      ].filter(Boolean).join(" ")
    });
  }, [
    j,
    _,
    a,
    h,
    H,
    T,
    B,
    M,
    l,
    i,
    s,
    c,
    b,
    p,
    S,
    A,
    R,
    I,
    r,
    o,
    g,
    d,
    Ke,
    Qe,
    We,
    Xe,
    Ze,
    xe,
    $e,
    et,
    tt,
    nt,
    lt,
    it
  ];
}
class Rt extends ee {
  constructor(e) {
    super(), $(
      this,
      e,
      Dt,
      jt,
      X,
      {
        kind: 11,
        size: 1,
        expressive: 12,
        isSelected: 13,
        icon: 2,
        iconDescription: 3,
        tooltipAlignment: 14,
        tooltipPosition: 15,
        as: 4,
        skeleton: 5,
        disabled: 6,
        href: 7,
        tabindex: 16,
        type: 17,
        ref: 0
      },
      null,
      [-1, -1]
    );
  }
}
const qt = Rt, Jt = (t) => ({}), Ce = (t) => ({}), Ht = (t) => ({}), Ie = (t) => ({}), Ut = (t) => ({}), Le = (t) => ({});
function Vt(t) {
  let e;
  return {
    c() {
      e = q(
        /*labelText*/
        t[5]
      );
    },
    m(n, l) {
      C(n, e, l);
    },
    p(n, l) {
      l & /*labelText*/
      32 && V(
        e,
        /*labelText*/
        n[5]
      );
    },
    d(n) {
      n && w(e);
    }
  };
}
function Yt(t) {
  let e;
  return {
    c() {
      e = q(
        /*labelA*/
        t[3]
      );
    },
    m(n, l) {
      C(n, e, l);
    },
    p(n, l) {
      l & /*labelA*/
      8 && V(
        e,
        /*labelA*/
        n[3]
      );
    },
    d(n) {
      n && w(e);
    }
  };
}
function Ft(t) {
  let e;
  return {
    c() {
      e = q(
        /*labelB*/
        t[4]
      );
    },
    m(n, l) {
      C(n, e, l);
    },
    p(n, l) {
      l & /*labelB*/
      16 && V(
        e,
        /*labelB*/
        n[4]
      );
    },
    d(n) {
      n && w(e);
    }
  };
}
function Gt(t) {
  let e, n, l, i, f, s, o, r, u, c, _, b, p, a;
  const h = (
    /*#slots*/
    t[12].labelText
  ), S = ie(
    h,
    t,
    /*$$scope*/
    t[11],
    Le
  ), A = S || Vt(t), H = (
    /*#slots*/
    t[12].labelA
  ), T = ie(
    H,
    t,
    /*$$scope*/
    t[11],
    Ie
  ), B = T || Yt(t), M = (
    /*#slots*/
    t[12].labelB
  ), R = ie(
    M,
    t,
    /*$$scope*/
    t[11],
    Ce
  ), I = R || Ft(t);
  let j = [
    /*$$restProps*/
    t[9]
  ], K = {};
  for (let g = 0; g < j.length; g += 1)
    K = N(K, j[g]);
  return {
    c() {
      e = z("div"), n = z("input"), l = J(), i = z("label"), f = z("span"), A && A.c(), s = J(), o = z("span"), r = z("span"), B && B.c(), u = J(), c = z("span"), I && I.c(), L(n, "role", "switch"), L(n, "type", "checkbox"), n.checked = /*toggled*/
      t[0], n.disabled = /*disabled*/
      t[2], L(
        n,
        "id",
        /*id*/
        t[7]
      ), L(
        n,
        "name",
        /*name*/
        t[8]
      ), k(n, "bx--toggle-input", !0), k(
        n,
        "bx--toggle-input--small",
        /*size*/
        t[1] === "sm"
      ), k(
        f,
        "bx--visually-hidden",
        /*hideLabel*/
        t[6]
      ), L(r, "aria-hidden", "true"), k(r, "bx--toggle__text--off", !0), L(c, "aria-hidden", "true"), k(c, "bx--toggle__text--on", !0), k(o, "bx--toggle__switch", !0), be(
        o,
        "margin-top",
        /*hideLabel*/
        t[6] ? 0 : void 0
      ), L(i, "aria-label", _ = /*labelText*/
      t[5] ? void 0 : (
        /*$$props*/
        t[10]["aria-label"] || "Toggle"
      )), L(
        i,
        "for",
        /*id*/
        t[7]
      ), k(i, "bx--toggle-input__label", !0), U(e, K), k(e, "bx--form-item", !0), be(e, "user-select", "none");
    },
    m(g, d) {
      C(g, e, d), y(e, n), y(e, l), y(e, i), y(i, f), A && A.m(f, null), y(i, s), y(i, o), y(o, r), B && B.m(r, null), y(o, u), y(o, c), I && I.m(c, null), b = !0, p || (a = [
        E(
          n,
          "change",
          /*change_handler_1*/
          t[21]
        ),
        E(
          n,
          "change",
          /*change_handler*/
          t[17]
        ),
        E(
          n,
          "keyup",
          /*keyup_handler_1*/
          t[22]
        ),
        E(
          n,
          "keyup",
          /*keyup_handler*/
          t[18]
        ),
        E(
          n,
          "focus",
          /*focus_handler*/
          t[19]
        ),
        E(
          n,
          "blur",
          /*blur_handler*/
          t[20]
        ),
        E(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        E(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[14]
        ),
        E(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[15]
        ),
        E(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[16]
        )
      ], p = !0);
    },
    p(g, [d]) {
      (!b || d & /*toggled*/
      1) && (n.checked = /*toggled*/
      g[0]), (!b || d & /*disabled*/
      4) && (n.disabled = /*disabled*/
      g[2]), (!b || d & /*id*/
      128) && L(
        n,
        "id",
        /*id*/
        g[7]
      ), (!b || d & /*name*/
      256) && L(
        n,
        "name",
        /*name*/
        g[8]
      ), (!b || d & /*size*/
      2) && k(
        n,
        "bx--toggle-input--small",
        /*size*/
        g[1] === "sm"
      ), S ? S.p && (!b || d & /*$$scope*/
      2048) && se(
        S,
        h,
        g,
        /*$$scope*/
        g[11],
        b ? oe(
          h,
          /*$$scope*/
          g[11],
          d,
          Ut
        ) : ue(
          /*$$scope*/
          g[11]
        ),
        Le
      ) : A && A.p && (!b || d & /*labelText*/
      32) && A.p(g, b ? d : -1), (!b || d & /*hideLabel*/
      64) && k(
        f,
        "bx--visually-hidden",
        /*hideLabel*/
        g[6]
      ), T ? T.p && (!b || d & /*$$scope*/
      2048) && se(
        T,
        H,
        g,
        /*$$scope*/
        g[11],
        b ? oe(
          H,
          /*$$scope*/
          g[11],
          d,
          Ht
        ) : ue(
          /*$$scope*/
          g[11]
        ),
        Ie
      ) : B && B.p && (!b || d & /*labelA*/
      8) && B.p(g, b ? d : -1), R ? R.p && (!b || d & /*$$scope*/
      2048) && se(
        R,
        M,
        g,
        /*$$scope*/
        g[11],
        b ? oe(
          M,
          /*$$scope*/
          g[11],
          d,
          Jt
        ) : ue(
          /*$$scope*/
          g[11]
        ),
        Ce
      ) : I && I.p && (!b || d & /*labelB*/
      16) && I.p(g, b ? d : -1), d & /*hideLabel*/
      64 && be(
        o,
        "margin-top",
        /*hideLabel*/
        g[6] ? 0 : void 0
      ), (!b || d & /*labelText, $$props*/
      1056 && _ !== (_ = /*labelText*/
      g[5] ? void 0 : (
        /*$$props*/
        g[10]["aria-label"] || "Toggle"
      ))) && L(i, "aria-label", _), (!b || d & /*id*/
      128) && L(
        i,
        "for",
        /*id*/
        g[7]
      ), U(e, K = x(j, [d & /*$$restProps*/
      512 && /*$$restProps*/
      g[9]])), k(e, "bx--form-item", !0), be(e, "user-select", "none");
    },
    i(g) {
      b || (P(A, g), P(B, g), P(I, g), b = !0);
    },
    o(g) {
      O(A, g), O(B, g), O(I, g), b = !1;
    },
    d(g) {
      g && w(e), A && A.d(g), B && B.d(g), I && I.d(g), p = !1, G(a);
    }
  };
}
function Kt(t, e, n) {
  const l = [
    "size",
    "toggled",
    "disabled",
    "labelA",
    "labelB",
    "labelText",
    "hideLabel",
    "id",
    "name"
  ];
  let i = W(e, l), { $$slots: f = {}, $$scope: s } = e, { size: o = "default" } = e, { toggled: r = !1 } = e, { disabled: u = !1 } = e, { labelA: c = "Off" } = e, { labelB: _ = "On" } = e, { labelText: b = "" } = e, { hideLabel: p = !1 } = e, { id: a = "ccs-" + Math.random().toString(36) } = e, { name: h = void 0 } = e;
  const S = _t();
  function A(d) {
    v.call(this, t, d);
  }
  function H(d) {
    v.call(this, t, d);
  }
  function T(d) {
    v.call(this, t, d);
  }
  function B(d) {
    v.call(this, t, d);
  }
  function M(d) {
    v.call(this, t, d);
  }
  function R(d) {
    v.call(this, t, d);
  }
  function I(d) {
    v.call(this, t, d);
  }
  function j(d) {
    v.call(this, t, d);
  }
  const K = () => {
    n(0, r = !r);
  }, g = (d) => {
    (d.key === " " || d.key === "Enter") && (d.preventDefault(), n(0, r = !r));
  };
  return t.$$set = (d) => {
    n(10, e = N(N({}, e), re(d))), n(9, i = W(e, l)), "size" in d && n(1, o = d.size), "toggled" in d && n(0, r = d.toggled), "disabled" in d && n(2, u = d.disabled), "labelA" in d && n(3, c = d.labelA), "labelB" in d && n(4, _ = d.labelB), "labelText" in d && n(5, b = d.labelText), "hideLabel" in d && n(6, p = d.hideLabel), "id" in d && n(7, a = d.id), "name" in d && n(8, h = d.name), "$$scope" in d && n(11, s = d.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*toggled*/
    1 && S("toggle", { toggled: r });
  }, e = re(e), [
    r,
    o,
    u,
    c,
    _,
    b,
    p,
    a,
    h,
    i,
    e,
    s,
    f,
    A,
    H,
    T,
    B,
    M,
    R,
    I,
    j,
    K,
    g
  ];
}
class Qt extends ee {
  constructor(e) {
    super(), $(this, e, Kt, Gt, X, {
      size: 1,
      toggled: 0,
      disabled: 2,
      labelA: 3,
      labelB: 4,
      labelText: 5,
      hideLabel: 6,
      id: 7,
      name: 8
    });
  }
}
const Wt = Qt;
function Ne(t) {
  let e, n;
  return {
    c() {
      e = ye("title"), n = q(
        /*title*/
        t[1]
      );
    },
    m(l, i) {
      C(l, e, i), y(e, n);
    },
    p(l, i) {
      i & /*title*/
      2 && V(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && w(e);
    }
  };
}
function Xt(t) {
  let e, n, l = (
    /*title*/
    t[1] && Ne(t)
  ), i = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { preserveAspectRatio: "xMidYMid meet" },
    { width: (
      /*size*/
      t[0]
    ) },
    { height: (
      /*size*/
      t[0]
    ) },
    /*attributes*/
    t[2],
    /*$$restProps*/
    t[3]
  ], f = {};
  for (let s = 0; s < i.length; s += 1)
    f = N(f, i[s]);
  return {
    c() {
      e = ye("svg"), l && l.c(), n = ye("path"), L(n, "d", "M2 26H30V28H2zM25.4 9c.8-.8.8-2 0-2.8 0 0 0 0 0 0l-3.6-3.6c-.8-.8-2-.8-2.8 0 0 0 0 0 0 0l-15 15V24h6.4L25.4 9zM20.4 4L24 7.6l-3 3L17.4 7 20.4 4zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"), Se(e, f);
    },
    m(s, o) {
      C(s, e, o), l && l.m(e, null), y(e, n);
    },
    p(s, [o]) {
      /*title*/
      s[1] ? l ? l.p(s, o) : (l = Ne(s), l.c(), l.m(e, n)) : l && (l.d(1), l = null), Se(e, f = x(i, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { preserveAspectRatio: "xMidYMid meet" },
        o & /*size*/
        1 && { width: (
          /*size*/
          s[0]
        ) },
        o & /*size*/
        1 && { height: (
          /*size*/
          s[0]
        ) },
        o & /*attributes*/
        4 && /*attributes*/
        s[2],
        o & /*$$restProps*/
        8 && /*$$restProps*/
        s[3]
      ]));
    },
    i: D,
    o: D,
    d(s) {
      s && w(e), l && l.d();
    }
  };
}
function Zt(t, e, n) {
  let l, i;
  const f = ["size", "title"];
  let s = W(e, f), { size: o = 16 } = e, { title: r = void 0 } = e;
  return t.$$set = (u) => {
    n(5, e = N(N({}, e), re(u))), n(3, s = W(e, f)), "size" in u && n(0, o = u.size), "title" in u && n(1, r = u.title);
  }, t.$$.update = () => {
    n(4, l = e["aria-label"] || e["aria-labelledby"] || r), n(2, i = {
      "aria-hidden": l ? void 0 : !0,
      role: l ? "img" : void 0,
      focusable: Number(e.tabindex) === 0 ? !0 : void 0
    });
  }, e = re(e), [o, r, i, s, l];
}
class xt extends ee {
  constructor(e) {
    super(), $(this, e, Zt, Xt, X, { size: 0, title: 1 });
  }
}
const Fe = Ye(""), Ge = Ye("");
function Me(t, e, n) {
  const l = t.slice();
  return l[5] = e[n], l[6] = e, l[7] = n, l;
}
function je(t) {
  let e, n, l, i, f, s = (
    /*employee*/
    t[5].name + ""
  ), o, r, u, c = (
    /*employee*/
    t[5].isAdmin ? "Admin" : "Employee"
  ), _, b, p, a, h, S;
  l = new qt({
    props: {
      kind: "secondary",
      iconDescription: "Edit",
      icon: xt,
      href: `${/*$appBase$*/
      t[1]}/${/*$viewBase$*/
      t[2]}/${/*employee*/
      t[5].id}`
    }
  });
  function A(T) {
    t[3](
      T,
      /*employee*/
      t[5]
    );
  }
  let H = { labelText: "Is Admin" };
  return (
    /*employee*/
    t[5].isAdmin !== void 0 && (H.toggled = /*employee*/
    t[5].isAdmin), p = new Wt({ props: H }), de.push(() => At(p, "toggled", A)), {
      c() {
        e = z("li"), n = z("div"), Q(l.$$.fragment), i = J(), f = z("h4"), o = q(s), r = J(), u = z("p"), _ = q(c), b = J(), Q(p.$$.fragment), h = J(), L(e, "class", "svelte-5qrp3d");
      },
      m(T, B) {
        C(T, e, B), y(e, n), Y(l, n, null), y(n, i), y(n, f), y(f, o), y(n, r), y(n, u), y(u, _), y(e, b), Y(p, e, null), y(e, h), S = !0;
      },
      p(T, B) {
        t = T;
        const M = {};
        B & /*$appBase$, $viewBase$, employees*/
        7 && (M.href = `${/*$appBase$*/
        t[1]}/${/*$viewBase$*/
        t[2]}/${/*employee*/
        t[5].id}`), l.$set(M), (!S || B & /*employees*/
        1) && s !== (s = /*employee*/
        t[5].name + "") && V(o, s), (!S || B & /*employees*/
        1) && c !== (c = /*employee*/
        t[5].isAdmin ? "Admin" : "Employee") && V(_, c);
        const R = {};
        !a && B & /*employees*/
        1 && (a = !0, R.toggled = /*employee*/
        t[5].isAdmin, kt(() => a = !1)), p.$set(R);
      },
      i(T) {
        S || (P(l.$$.fragment, T), P(p.$$.fragment, T), S = !0);
      },
      o(T) {
        O(l.$$.fragment, T), O(p.$$.fragment, T), S = !1;
      },
      d(T) {
        T && w(e), F(l), F(p);
      }
    }
  );
}
function $t(t) {
  let e, n, l, i, f, s = Te(
    /*employees*/
    t[0]
  ), o = [];
  for (let u = 0; u < s.length; u += 1)
    o[u] = je(Me(t, s, u));
  const r = (u) => O(o[u], 1, 1, () => {
    o[u] = null;
  });
  return {
    c() {
      e = z("main"), n = z("h1"), n.textContent = "Employees", l = J(), i = z("ul");
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      L(i, "class", "svelte-5qrp3d");
    },
    m(u, c) {
      C(u, e, c), y(e, n), y(e, l), y(e, i);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_] && o[_].m(i, null);
      f = !0;
    },
    p(u, [c]) {
      if (c & /*employees, Edit, $appBase$, $viewBase$*/
      7) {
        s = Te(
          /*employees*/
          u[0]
        );
        let _;
        for (_ = 0; _ < s.length; _ += 1) {
          const b = Me(u, s, _);
          o[_] ? (o[_].p(b, c), P(o[_], 1)) : (o[_] = je(b), o[_].c(), P(o[_], 1), o[_].m(i, null));
        }
        for (me(), _ = s.length; _ < o.length; _ += 1)
          r(_);
        _e();
      }
    },
    i(u) {
      if (!f) {
        for (let c = 0; c < s.length; c += 1)
          P(o[c]);
        f = !0;
      }
    },
    o(u) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        O(o[c]);
      f = !1;
    },
    d(u) {
      u && w(e), at(o, u);
    }
  };
}
function en(t) {
  window.localStorage.setItem("employees", JSON.stringify(t));
}
function tn(t, e, n) {
  let l, i;
  ze(t, Fe, (r) => n(1, l = r)), ze(t, Ge, (r) => n(2, i = r));
  let f = [];
  function s() {
    const r = window.localStorage.getItem("employees");
    r && n(0, f = JSON.parse(r));
  }
  s();
  function o(r, u) {
    t.$$.not_equal(u.isAdmin, r) && (u.isAdmin = r, n(0, f));
  }
  return t.$$.update = () => {
    t.$$.dirty & /*employees*/
    1 && en(f);
  }, [f, l, i, o];
}
class nn extends ee {
  constructor(e) {
    super(), $(this, e, tn, $t, X, {});
  }
}
function De(t) {
  let e, n, l = (
    /*employee*/
    t[0].name + ""
  ), i, f, s, o = (
    /*employee*/
    t[0].isAdmin ? "Admin" : "Employee"
  ), r;
  return {
    c() {
      e = z("div"), n = z("h4"), i = q(l), f = J(), s = z("p"), r = q(o);
    },
    m(u, c) {
      C(u, e, c), y(e, n), y(n, i), y(e, f), y(e, s), y(s, r);
    },
    p(u, c) {
      c & /*employee*/
      1 && l !== (l = /*employee*/
      u[0].name + "") && V(i, l), c & /*employee*/
      1 && o !== (o = /*employee*/
      u[0].isAdmin ? "Admin" : "Employee") && V(r, o);
    },
    d(u) {
      u && w(e);
    }
  };
}
function ln(t) {
  let e, n, l, i = (
    /*employee*/
    t[0] && De(t)
  );
  return {
    c() {
      e = z("main"), n = z("h1"), n.textContent = "Employee", l = J(), i && i.c();
    },
    m(f, s) {
      C(f, e, s), y(e, n), y(e, l), i && i.m(e, null);
    },
    p(f, [s]) {
      /*employee*/
      f[0] ? i ? i.p(f, s) : (i = De(f), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i: D,
    o: D,
    d(f) {
      f && w(e), i && i.d();
    }
  };
}
function on(t, e, n) {
  let { employeeId: l = "" } = e, i;
  function f(s) {
    const o = window.localStorage.getItem("employees");
    if (!o)
      return;
    const r = JSON.parse(o);
    n(0, i = r.find((u) => u.id === s));
  }
  return t.$$set = (s) => {
    "employeeId" in s && n(1, l = s.employeeId);
  }, t.$$.update = () => {
    t.$$.dirty & /*employeeId*/
    2 && f(l);
  }, [i, l];
}
class sn extends ee {
  constructor(e) {
    super(), $(this, e, on, ln, X, { employeeId: 1 });
  }
}
function un(t) {
  let e, n;
  return e = new nn({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), n = !0;
    },
    p: D,
    i(l) {
      n || (P(e.$$.fragment, l), n = !0);
    },
    o(l) {
      O(e.$$.fragment, l), n = !1;
    },
    d(l) {
      F(e, l);
    }
  };
}
function fn(t) {
  let e, n;
  return e = new sn({
    props: { employeeId: (
      /*employeeId*/
      t[0]
    ) }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), n = !0;
    },
    p(l, i) {
      const f = {};
      i & /*employeeId*/
      1 && (f.employeeId = /*employeeId*/
      l[0]), e.$set(f);
    },
    i(l) {
      n || (P(e.$$.fragment, l), n = !0);
    },
    o(l) {
      O(e.$$.fragment, l), n = !1;
    },
    d(l) {
      F(e, l);
    }
  };
}
function rn(t) {
  let e, n, l, i;
  const f = [fn, un], s = [];
  function o(r, u) {
    return (
      /*employeeId*/
      r[0] ? 0 : 1
    );
  }
  return n = o(t), l = s[n] = f[n](t), {
    c() {
      e = z("main"), l.c();
    },
    m(r, u) {
      C(r, e, u), s[n].m(e, null), i = !0;
    },
    p(r, [u]) {
      let c = n;
      n = o(r), n === c ? s[n].p(r, u) : (me(), O(s[c], 1, 1, () => {
        s[c] = null;
      }), _e(), l = s[n], l ? l.p(r, u) : (l = s[n] = f[n](r), l.c()), P(l, 1), l.m(e, null));
    },
    i(r) {
      i || (P(l), i = !0);
    },
    o(r) {
      O(l), i = !1;
    },
    d(r) {
      r && w(e), s[n].d();
    }
  };
}
function an(t, e, n) {
  let l, { appBase: i = "" } = e, { viewBase: f = "" } = e, { routeChunks: s = [] } = e;
  return t.$$set = (o) => {
    "appBase" in o && n(1, i = o.appBase), "viewBase" in o && n(2, f = o.viewBase), "routeChunks" in o && n(3, s = o.routeChunks);
  }, t.$$.update = () => {
    t.$$.dirty & /*appBase*/
    2 && Fe.set(i), t.$$.dirty & /*viewBase*/
    4 && Ge.set(f), t.$$.dirty & /*routeChunks*/
    8 && n(0, l = s[0]);
  }, [l, i, f, s];
}
class cn extends ee {
  constructor(e) {
    super(), $(this, e, an, rn, X, { appBase: 1, viewBase: 2, routeChunks: 3 });
  }
}
function mn(t, e, n) {
  new cn({
    target: document.getElementById("view-root"),
    props: {
      appBase: t,
      viewBase: e,
      routeChunks: n
    }
  });
  const l = "./style.css", i = new URL(import.meta.url).origin;
  new URL(l, i);
}
export {
  mn as default
};
