(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.id="hdv_employees",e.appendChild(document.createTextNode(":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}.card{padding:2em}#app{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}ul.svelte-6fbsmq{list-style:none;display:flex;gap:1rem;padding:0;margin:0}li.svelte-6fbsmq{display:flex;width:15rem;height:12rem;padding:1rem;background-color:#393939;outline:2px solid rgba(0,0,0,0);outline-offset:-2px;gap:2rem;flex-direction:column}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Le = Object.defineProperty;
var Se = (e, t, n) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Y = (e, t, n) => (Se(e, typeof t != "symbol" ? t + "" : t, n), n);
function le() {
}
function X(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function ye(e) {
  return e();
}
function ue() {
  return /* @__PURE__ */ Object.create(null);
}
function M(e) {
  e.forEach(ye);
}
function ke(e) {
  return typeof e == "function";
}
function ve(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function je(e) {
  return Object.keys(e).length === 0;
}
function Z(e, t, n, l) {
  if (e) {
    const s = Ae(e, t, n, l);
    return e[0](s);
  }
}
function Ae(e, t, n, l) {
  return e[1] && l ? X(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function $(e, t, n, l) {
  if (e[2] && l) {
    const s = e[2](l(n));
    if (t.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const d = [], a = Math.max(t.dirty.length, s.length);
      for (let o = 0; o < a; o += 1)
        d[o] = t.dirty[o] | s[o];
      return d;
    }
    return t.dirty | s;
  }
  return t.dirty;
}
function ee(e, t, n, l, s, d) {
  if (s) {
    const a = Ae(t, n, l, d);
    e.p(a, s);
  }
}
function te(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function re(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function ae(e, t) {
  const n = {};
  t = new Set(t);
  for (const l in e)
    !t.has(l) && l[0] !== "$" && (n[l] = e[l]);
  return n;
}
function m(e, t) {
  e.appendChild(t);
}
function F(e, t, n) {
  e.insertBefore(t, n || null);
}
function z(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ne(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function y(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createTextNode(e);
}
function P() {
  return J(" ");
}
function w(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const Pe = ["width", "height"];
function ce(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const l in t)
    t[l] == null ? e.removeAttribute(l) : l === "style" ? e.style.cssText = t[l] : l === "__value" ? e.value = e[l] = t[l] : n[l] && n[l].set && Pe.indexOf(l) === -1 ? e[l] = t[l] : p(e, l, t[l]);
}
function ze(e) {
  return Array.from(e.childNodes);
}
function G(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Q(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
function T(e, t, n) {
  e.classList.toggle(t, !!n);
}
function Ce(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: l });
}
let H;
function x(e) {
  H = e;
}
function Ie() {
  if (!H)
    throw new Error("Function called outside component initialization");
  return H;
}
function Re() {
  const e = Ie();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const s = e.$$.callbacks[t];
    if (s) {
      const d = Ce(
        /** @type {string} */
        t,
        n,
        { cancelable: l }
      );
      return s.slice().forEach((a) => {
        a.call(e, d);
      }), !d.defaultPrevented;
    }
    return !0;
  };
}
function S(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const U = [], ie = [];
let q = [];
const oe = [], Ue = /* @__PURE__ */ Promise.resolve();
let se = !1;
function qe() {
  se || (se = !0, Ue.then(Ee));
}
function fe(e) {
  q.push(e);
}
function De(e) {
  oe.push(e);
}
const ne = /* @__PURE__ */ new Set();
let R = 0;
function Ee() {
  if (R !== 0)
    return;
  const e = H;
  do {
    try {
      for (; R < U.length; ) {
        const t = U[R];
        R++, x(t), Je(t.$$);
      }
    } catch (t) {
      throw U.length = 0, R = 0, t;
    }
    for (x(null), U.length = 0, R = 0; ie.length; )
      ie.pop()();
    for (let t = 0; t < q.length; t += 1) {
      const n = q[t];
      ne.has(n) || (ne.add(n), n());
    }
    q.length = 0;
  } while (U.length);
  for (; oe.length; )
    oe.pop()();
  se = !1, ne.clear(), x(e);
}
function Je(e) {
  if (e.fragment !== null) {
    e.update(), M(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(fe);
  }
}
function Me(e) {
  const t = [], n = [];
  q.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), q = t;
}
const W = /* @__PURE__ */ new Set();
let N;
function Fe() {
  N = {
    r: 0,
    c: [],
    p: N
    // parent group
  };
}
function Ke() {
  N.r || M(N.c), N = N.p;
}
function j(e, t) {
  e && e.i && (W.delete(e), e.i(t));
}
function D(e, t, n, l) {
  if (e && e.o) {
    if (W.has(e))
      return;
    W.add(e), N.c.push(() => {
      W.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function de(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Ve(e, t) {
  const n = {}, l = {}, s = { $$scope: 1 };
  let d = e.length;
  for (; d--; ) {
    const a = e[d], o = t[d];
    if (o) {
      for (const g in a)
        g in o || (l[g] = 1);
      for (const g in o)
        s[g] || (n[g] = o[g], s[g] = 1);
      e[d] = o;
    } else
      for (const g in a)
        s[g] = 1;
  }
  for (const a in l)
    a in n || (n[a] = void 0);
  return n;
}
function xe(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function Ge(e) {
  e && e.c();
}
function Te(e, t, n) {
  const { fragment: l, after_update: s } = e.$$;
  l && l.m(t, n), fe(() => {
    const d = e.$$.on_mount.map(ye).filter(ke);
    e.$$.on_destroy ? e.$$.on_destroy.push(...d) : M(d), e.$$.on_mount = [];
  }), s.forEach(fe);
}
function we(e, t) {
  const n = e.$$;
  n.fragment !== null && (Me(n.after_update), M(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function He(e, t) {
  e.$$.dirty[0] === -1 && (U.push(e), qe(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Be(e, t, n, l, s, d, a, o = [-1]) {
  const g = H;
  x(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: d,
    update: le,
    not_equal: s,
    bound: ue(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: ue(),
    dirty: o,
    skip_bound: !1,
    root: t.target || g.$$.root
  };
  a && a(f.root);
  let _ = !1;
  if (f.ctx = n ? n(e, t.props || {}, (r, c, ...A) => {
    const b = A.length ? A[0] : c;
    return f.ctx && s(f.ctx[r], f.ctx[r] = b) && (!f.skip_bound && f.bound[r] && f.bound[r](b), _ && He(e, r)), c;
  }) : [], f.update(), _ = !0, M(f.before_update), f.fragment = l ? l(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const r = ze(t.target);
      f.fragment && f.fragment.l(r), r.forEach(z);
    } else
      f.fragment && f.fragment.c();
    t.intro && j(e.$$.fragment), Te(e, t.target, t.anchor), Ee();
  }
  x(g);
}
class Oe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    we(this, 1), this.$destroy = le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!ke(n))
      return le;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const s = l.indexOf(n);
      s !== -1 && l.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !je(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Qe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Qe);
const We = (e) => ({}), ge = (e) => ({}), Xe = (e) => ({}), _e = (e) => ({}), Ye = (e) => ({}), he = (e) => ({});
function Ze(e) {
  let t;
  return {
    c() {
      t = J(
        /*labelText*/
        e[5]
      );
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l & /*labelText*/
      32 && G(
        t,
        /*labelText*/
        n[5]
      );
    },
    d(n) {
      n && z(t);
    }
  };
}
function $e(e) {
  let t;
  return {
    c() {
      t = J(
        /*labelA*/
        e[3]
      );
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l & /*labelA*/
      8 && G(
        t,
        /*labelA*/
        n[3]
      );
    },
    d(n) {
      n && z(t);
    }
  };
}
function et(e) {
  let t;
  return {
    c() {
      t = J(
        /*labelB*/
        e[4]
      );
    },
    m(n, l) {
      F(n, t, l);
    },
    p(n, l) {
      l & /*labelB*/
      16 && G(
        t,
        /*labelB*/
        n[4]
      );
    },
    d(n) {
      n && z(t);
    }
  };
}
function tt(e) {
  let t, n, l, s, d, a, o, g, f, _, r, c, A, b;
  const L = (
    /*#slots*/
    e[12].labelText
  ), B = Z(
    L,
    e,
    /*$$scope*/
    e[11],
    he
  ), h = B || Ze(e), E = (
    /*#slots*/
    e[12].labelA
  ), O = Z(
    E,
    e,
    /*$$scope*/
    e[11],
    _e
  ), k = O || $e(e), K = (
    /*#slots*/
    e[12].labelB
  ), C = Z(
    K,
    e,
    /*$$scope*/
    e[11],
    ge
  ), v = C || et(e);
  let V = [
    /*$$restProps*/
    e[9]
  ], I = {};
  for (let u = 0; u < V.length; u += 1)
    I = X(I, V[u]);
  return {
    c() {
      t = y("div"), n = y("input"), l = P(), s = y("label"), d = y("span"), h && h.c(), a = P(), o = y("span"), g = y("span"), k && k.c(), f = P(), _ = y("span"), v && v.c(), p(n, "role", "switch"), p(n, "type", "checkbox"), n.checked = /*toggled*/
      e[0], n.disabled = /*disabled*/
      e[2], p(
        n,
        "id",
        /*id*/
        e[7]
      ), p(
        n,
        "name",
        /*name*/
        e[8]
      ), T(n, "bx--toggle-input", !0), T(
        n,
        "bx--toggle-input--small",
        /*size*/
        e[1] === "sm"
      ), T(
        d,
        "bx--visually-hidden",
        /*hideLabel*/
        e[6]
      ), p(g, "aria-hidden", "true"), T(g, "bx--toggle__text--off", !0), p(_, "aria-hidden", "true"), T(_, "bx--toggle__text--on", !0), T(o, "bx--toggle__switch", !0), Q(
        o,
        "margin-top",
        /*hideLabel*/
        e[6] ? 0 : void 0
      ), p(s, "aria-label", r = /*labelText*/
      e[5] ? void 0 : (
        /*$$props*/
        e[10]["aria-label"] || "Toggle"
      )), p(
        s,
        "for",
        /*id*/
        e[7]
      ), T(s, "bx--toggle-input__label", !0), ce(t, I), T(t, "bx--form-item", !0), Q(t, "user-select", "none");
    },
    m(u, i) {
      F(u, t, i), m(t, n), m(t, l), m(t, s), m(s, d), h && h.m(d, null), m(s, a), m(s, o), m(o, g), k && k.m(g, null), m(o, f), m(o, _), v && v.m(_, null), c = !0, A || (b = [
        w(
          n,
          "change",
          /*change_handler_1*/
          e[21]
        ),
        w(
          n,
          "change",
          /*change_handler*/
          e[17]
        ),
        w(
          n,
          "keyup",
          /*keyup_handler_1*/
          e[22]
        ),
        w(
          n,
          "keyup",
          /*keyup_handler*/
          e[18]
        ),
        w(
          n,
          "focus",
          /*focus_handler*/
          e[19]
        ),
        w(
          n,
          "blur",
          /*blur_handler*/
          e[20]
        ),
        w(
          t,
          "click",
          /*click_handler*/
          e[13]
        ),
        w(
          t,
          "mouseover",
          /*mouseover_handler*/
          e[14]
        ),
        w(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[15]
        ),
        w(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], A = !0);
    },
    p(u, [i]) {
      (!c || i & /*toggled*/
      1) && (n.checked = /*toggled*/
      u[0]), (!c || i & /*disabled*/
      4) && (n.disabled = /*disabled*/
      u[2]), (!c || i & /*id*/
      128) && p(
        n,
        "id",
        /*id*/
        u[7]
      ), (!c || i & /*name*/
      256) && p(
        n,
        "name",
        /*name*/
        u[8]
      ), (!c || i & /*size*/
      2) && T(
        n,
        "bx--toggle-input--small",
        /*size*/
        u[1] === "sm"
      ), B ? B.p && (!c || i & /*$$scope*/
      2048) && ee(
        B,
        L,
        u,
        /*$$scope*/
        u[11],
        c ? $(
          L,
          /*$$scope*/
          u[11],
          i,
          Ye
        ) : te(
          /*$$scope*/
          u[11]
        ),
        he
      ) : h && h.p && (!c || i & /*labelText*/
      32) && h.p(u, c ? i : -1), (!c || i & /*hideLabel*/
      64) && T(
        d,
        "bx--visually-hidden",
        /*hideLabel*/
        u[6]
      ), O ? O.p && (!c || i & /*$$scope*/
      2048) && ee(
        O,
        E,
        u,
        /*$$scope*/
        u[11],
        c ? $(
          E,
          /*$$scope*/
          u[11],
          i,
          Xe
        ) : te(
          /*$$scope*/
          u[11]
        ),
        _e
      ) : k && k.p && (!c || i & /*labelA*/
      8) && k.p(u, c ? i : -1), C ? C.p && (!c || i & /*$$scope*/
      2048) && ee(
        C,
        K,
        u,
        /*$$scope*/
        u[11],
        c ? $(
          K,
          /*$$scope*/
          u[11],
          i,
          We
        ) : te(
          /*$$scope*/
          u[11]
        ),
        ge
      ) : v && v.p && (!c || i & /*labelB*/
      16) && v.p(u, c ? i : -1), i & /*hideLabel*/
      64 && Q(
        o,
        "margin-top",
        /*hideLabel*/
        u[6] ? 0 : void 0
      ), (!c || i & /*labelText, $$props*/
      1056 && r !== (r = /*labelText*/
      u[5] ? void 0 : (
        /*$$props*/
        u[10]["aria-label"] || "Toggle"
      ))) && p(s, "aria-label", r), (!c || i & /*id*/
      128) && p(
        s,
        "for",
        /*id*/
        u[7]
      ), ce(t, I = Ve(V, [i & /*$$restProps*/
      512 && /*$$restProps*/
      u[9]])), T(t, "bx--form-item", !0), Q(t, "user-select", "none");
    },
    i(u) {
      c || (j(h, u), j(k, u), j(v, u), c = !0);
    },
    o(u) {
      D(h, u), D(k, u), D(v, u), c = !1;
    },
    d(u) {
      u && z(t), h && h.d(u), k && k.d(u), v && v.d(u), A = !1, M(b);
    }
  };
}
function nt(e, t, n) {
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
  let s = ae(t, l), { $$slots: d = {}, $$scope: a } = t, { size: o = "default" } = t, { toggled: g = !1 } = t, { disabled: f = !1 } = t, { labelA: _ = "Off" } = t, { labelB: r = "On" } = t, { labelText: c = "" } = t, { hideLabel: A = !1 } = t, { id: b = "ccs-" + Math.random().toString(36) } = t, { name: L = void 0 } = t;
  const B = Re();
  function h(i) {
    S.call(this, e, i);
  }
  function E(i) {
    S.call(this, e, i);
  }
  function O(i) {
    S.call(this, e, i);
  }
  function k(i) {
    S.call(this, e, i);
  }
  function K(i) {
    S.call(this, e, i);
  }
  function C(i) {
    S.call(this, e, i);
  }
  function v(i) {
    S.call(this, e, i);
  }
  function V(i) {
    S.call(this, e, i);
  }
  const I = () => {
    n(0, g = !g);
  }, u = (i) => {
    (i.key === " " || i.key === "Enter") && (i.preventDefault(), n(0, g = !g));
  };
  return e.$$set = (i) => {
    n(10, t = X(X({}, t), re(i))), n(9, s = ae(t, l)), "size" in i && n(1, o = i.size), "toggled" in i && n(0, g = i.toggled), "disabled" in i && n(2, f = i.disabled), "labelA" in i && n(3, _ = i.labelA), "labelB" in i && n(4, r = i.labelB), "labelText" in i && n(5, c = i.labelText), "hideLabel" in i && n(6, A = i.hideLabel), "id" in i && n(7, b = i.id), "name" in i && n(8, L = i.name), "$$scope" in i && n(11, a = i.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*toggled*/
    1 && B("toggle", { toggled: g });
  }, t = re(t), [
    g,
    o,
    f,
    _,
    r,
    c,
    A,
    b,
    L,
    s,
    t,
    a,
    d,
    h,
    E,
    O,
    k,
    K,
    C,
    v,
    V,
    I,
    u
  ];
}
class lt extends Oe {
  constructor(t) {
    super(), Be(this, t, nt, tt, ve, {
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
const it = lt;
function me(e, t, n) {
  const l = e.slice();
  return l[3] = t[n], l[4] = t, l[5] = n, l;
}
function be(e) {
  let t, n, l, s = (
    /*employee*/
    e[3].name + ""
  ), d, a, o, g = (
    /*employee*/
    e[3].isAdmin ? "Admin" : "Employee"
  ), f, _, r, c, A, b;
  function L(h) {
    e[1](
      h,
      /*employee*/
      e[3]
    );
  }
  let B = { labelText: "Is Admin" };
  return (
    /*employee*/
    e[3].isAdmin !== void 0 && (B.toggled = /*employee*/
    e[3].isAdmin), r = new it({ props: B }), ie.push(() => xe(r, "toggled", L)), {
      c() {
        t = y("li"), n = y("div"), l = y("h4"), d = J(s), a = P(), o = y("p"), f = J(g), _ = P(), Ge(r.$$.fragment), A = P(), p(t, "class", "svelte-6fbsmq");
      },
      m(h, E) {
        F(h, t, E), m(t, n), m(n, l), m(l, d), m(n, a), m(n, o), m(o, f), m(t, _), Te(r, t, null), m(t, A), b = !0;
      },
      p(h, E) {
        e = h, (!b || E & /*employees*/
        1) && s !== (s = /*employee*/
        e[3].name + "") && G(d, s), (!b || E & /*employees*/
        1) && g !== (g = /*employee*/
        e[3].isAdmin ? "Admin" : "Employee") && G(f, g);
        const O = {};
        !c && E & /*employees*/
        1 && (c = !0, O.toggled = /*employee*/
        e[3].isAdmin, De(() => c = !1)), r.$set(O);
      },
      i(h) {
        b || (j(r.$$.fragment, h), b = !0);
      },
      o(h) {
        D(r.$$.fragment, h), b = !1;
      },
      d(h) {
        h && z(t), we(r);
      }
    }
  );
}
function ot(e) {
  let t, n, l, s, d, a = de(
    /*employees*/
    e[0]
  ), o = [];
  for (let f = 0; f < a.length; f += 1)
    o[f] = be(me(e, a, f));
  const g = (f) => D(o[f], 1, 1, () => {
    o[f] = null;
  });
  return {
    c() {
      t = y("main"), n = y("h1"), n.textContent = "Employees", l = P(), s = y("ul");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      p(s, "class", "svelte-6fbsmq");
    },
    m(f, _) {
      F(f, t, _), m(t, n), m(t, l), m(t, s);
      for (let r = 0; r < o.length; r += 1)
        o[r] && o[r].m(s, null);
      d = !0;
    },
    p(f, [_]) {
      if (_ & /*employees*/
      1) {
        a = de(
          /*employees*/
          f[0]
        );
        let r;
        for (r = 0; r < a.length; r += 1) {
          const c = me(f, a, r);
          o[r] ? (o[r].p(c, _), j(o[r], 1)) : (o[r] = be(c), o[r].c(), j(o[r], 1), o[r].m(s, null));
        }
        for (Fe(), r = a.length; r < o.length; r += 1)
          g(r);
        Ke();
      }
    },
    i(f) {
      if (!d) {
        for (let _ = 0; _ < a.length; _ += 1)
          j(o[_]);
        d = !0;
      }
    },
    o(f) {
      o = o.filter(Boolean);
      for (let _ = 0; _ < o.length; _ += 1)
        D(o[_]);
      d = !1;
    },
    d(f) {
      f && z(t), Ne(o, f);
    }
  };
}
function st(e) {
  window.localStorage.setItem("employees", JSON.stringify(e));
}
function ft(e, t, n) {
  let l = [];
  function s() {
    const a = window.localStorage.getItem("employees");
    a && (n(0, l = JSON.parse(a)), console.log({
      level: "dev",
      message: "employees",
      employees: l
    }));
  }
  s();
  function d(a, o) {
    e.$$.not_equal(o.isAdmin, a) && (o.isAdmin = a, n(0, l));
  }
  return e.$$.update = () => {
    e.$$.dirty & /*employees*/
    1 && st(l);
  }, [l, d];
}
class pe extends Oe {
  constructor(t) {
    super(), Be(this, t, ft, ot, ve, {});
  }
}
function rt() {
  new pe({
    target: document.getElementById("view-root")
  });
  const e = "./style.css", t = new URL(import.meta.url).origin;
  new URL(e, t), console.log({
    level: "dev",
    message: "app.js loaded",
    url: import.meta.url,
    origin: new URL(import.meta.url).origin,
    appKeys: Object.keys(pe)
  });
}
export {
  rt as default
};
