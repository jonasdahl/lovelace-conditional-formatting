var ao = Object.defineProperty;
var oo = (t, e, n) => e in t ? ao(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var is = (t, e, n) => (oo(t, typeof e != "symbol" ? e + "" : e, n), n);
const uo = "0.0.1";
var Wt, L, ri, Be, as, ni, mn, si, it = {}, ii = [], co = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, jr = Array.isArray;
function Ie(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ai(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function he(t, e, n) {
  var s, i, a, u = {};
  for (a in e)
    a == "key" ? s = e[a] : a == "ref" ? i = e[a] : u[a] = e[a];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? Wt.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (a in t.defaultProps)
      u[a] === void 0 && (u[a] = t.defaultProps[a]);
  return Rt(t, u, s, i, null);
}
function Rt(t, e, n, s, i) {
  var a = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ri };
  return i == null && L.vnode != null && L.vnode(a), a;
}
function oi() {
  return { current: null };
}
function Ce(t) {
  return t.children;
}
function ve(t, e) {
  this.props = t, this.context = e;
}
function At(t, e) {
  if (e == null)
    return t.__ ? At(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? At(t) : null;
}
function ui(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ui(t);
  }
}
function _n(t) {
  (!t.__d && (t.__d = !0) && Be.push(t) && !wr.__r++ || as !== L.debounceRendering) && ((as = L.debounceRendering) || ni)(wr);
}
function wr() {
  var t, e, n, s, i, a, u, d, l;
  for (Be.sort(mn); t = Be.shift(); )
    t.__d && (e = Be.length, s = void 0, i = void 0, a = void 0, d = (u = (n = t).__v).__e, (l = n.__P) && (s = [], i = [], (a = Ie({}, u)).__v = u.__v + 1, Nn(l, u, a, n.__n, l.ownerSVGElement !== void 0, u.__h != null ? [d] : null, s, d ?? At(u), u.__h, i), fi(s, u, i), u.__e != d && ui(u)), Be.length > e && Be.sort(mn));
  wr.__r = 0;
}
function di(t, e, n, s, i, a, u, d, l, h, v) {
  var m, k, x, w, C, O, Z, D, N, I = 0, U = s && s.__k || ii, P = U.length, R = P, j = e.length;
  for (n.__k = [], m = 0; m < j; m++)
    (w = n.__k[m] = (w = e[m]) == null || typeof w == "boolean" || typeof w == "function" ? null : typeof w == "string" || typeof w == "number" || typeof w == "bigint" ? Rt(null, w, null, null, w) : jr(w) ? Rt(Ce, { children: w }, null, null, null) : w.__b > 0 ? Rt(w.type, w.props, w.key, w.ref ? w.ref : null, w.__v) : w) != null ? (w.__ = n, w.__b = n.__b + 1, (D = lo(w, U, Z = m + I, R)) === -1 ? x = it : (x = U[D] || it, U[D] = void 0, R--), Nn(t, w, x, i, a, u, d, l, h, v), C = w.__e, (k = w.ref) && x.ref != k && (x.ref && An(x.ref, null, w), v.push(k, w.__c || C, w)), C != null && (O == null && (O = C), (N = x === it || x.__v === null) ? D == -1 && I-- : D !== Z && (D === Z + 1 ? I++ : D > Z ? R > j - Z ? I += D - Z : I-- : I = D < Z && D == Z - 1 ? D - Z : 0), Z = m + I, typeof w.type != "function" || D === Z && x.__k !== w.__k ? typeof w.type == "function" || D === Z && !N ? w.__d !== void 0 ? (l = w.__d, w.__d = void 0) : l = C.nextSibling : l = li(t, C, l) : l = ci(w, l, t), typeof n.type == "function" && (n.__d = l))) : (x = U[m]) && x.key == null && x.__e && (x.__e == l && (l = At(x)), yn(x, x, !1), U[m] = null);
  for (n.__e = O, m = P; m--; )
    U[m] != null && (typeof n.type == "function" && U[m].__e != null && U[m].__e == n.__d && (n.__d = U[m].__e.nextSibling), yn(U[m], U[m]));
}
function ci(t, e, n) {
  for (var s, i = t.__k, a = 0; i && a < i.length; a++)
    (s = i[a]) && (s.__ = t, e = typeof s.type == "function" ? ci(s, e, n) : li(n, s.__e, e));
  return e;
}
function Ze(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (jr(t) ? t.some(function(n) {
    Ze(n, e);
  }) : e.push(t)), e;
}
function li(t, e, n) {
  return n == null || n.parentNode !== t ? t.insertBefore(e, null) : e == n && e.parentNode != null || t.insertBefore(e, n), e.nextSibling;
}
function lo(t, e, n, s) {
  var i = t.key, a = t.type, u = n - 1, d = n + 1, l = e[n];
  if (l === null || l && i == l.key && a === l.type)
    return n;
  if (s > (l != null ? 1 : 0))
    for (; u >= 0 || d < e.length; ) {
      if (u >= 0) {
        if ((l = e[u]) && i == l.key && a === l.type)
          return u;
        u--;
      }
      if (d < e.length) {
        if ((l = e[d]) && i == l.key && a === l.type)
          return d;
        d++;
      }
    }
  return -1;
}
function fo(t, e, n, s, i) {
  var a;
  for (a in n)
    a === "children" || a === "key" || a in e || kr(t, a, null, n[a], s);
  for (a in e)
    i && typeof e[a] != "function" || a === "children" || a === "key" || a === "value" || a === "checked" || n[a] === e[a] || kr(t, a, e[a], n[a], s);
}
function os(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || co.test(e) ? n : n + "px";
}
function kr(t, e, n, s, i) {
  var a;
  e:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || os(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || os(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      a = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + a] = n, n ? s || t.addEventListener(e, a ? ds : us, a) : t.removeEventListener(e, a ? ds : us, a);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
        try {
          t[e] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function us(t) {
  return this.l[t.type + !1](L.event ? L.event(t) : t);
}
function ds(t) {
  return this.l[t.type + !0](L.event ? L.event(t) : t);
}
function Nn(t, e, n, s, i, a, u, d, l, h) {
  var v, m, k, x, w, C, O, Z, D, N, I, U, P, R, j, $ = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, d = e.__e = n.__e, e.__h = null, a = [d]), (v = L.__b) && v(e);
  e:
    if (typeof $ == "function")
      try {
        if (Z = e.props, D = (v = $.contextType) && s[v.__c], N = v ? D ? D.props.value : v.__ : s, n.__c ? O = (m = e.__c = n.__c).__ = m.__E : ("prototype" in $ && $.prototype.render ? e.__c = m = new $(Z, N) : (e.__c = m = new ve(Z, N), m.constructor = $, m.render = po), D && D.sub(m), m.props = Z, m.state || (m.state = {}), m.context = N, m.__n = s, k = m.__d = !0, m.__h = [], m._sb = []), m.__s == null && (m.__s = m.state), $.getDerivedStateFromProps != null && (m.__s == m.state && (m.__s = Ie({}, m.__s)), Ie(m.__s, $.getDerivedStateFromProps(Z, m.__s))), x = m.props, w = m.state, m.__v = e, k)
          $.getDerivedStateFromProps == null && m.componentWillMount != null && m.componentWillMount(), m.componentDidMount != null && m.__h.push(m.componentDidMount);
        else {
          if ($.getDerivedStateFromProps == null && Z !== x && m.componentWillReceiveProps != null && m.componentWillReceiveProps(Z, N), !m.__e && (m.shouldComponentUpdate != null && m.shouldComponentUpdate(Z, m.__s, N) === !1 || e.__v === n.__v)) {
            for (e.__v !== n.__v && (m.props = Z, m.state = m.__s, m.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(te) {
              te && (te.__ = e);
            }), I = 0; I < m._sb.length; I++)
              m.__h.push(m._sb[I]);
            m._sb = [], m.__h.length && u.push(m);
            break e;
          }
          m.componentWillUpdate != null && m.componentWillUpdate(Z, m.__s, N), m.componentDidUpdate != null && m.__h.push(function() {
            m.componentDidUpdate(x, w, C);
          });
        }
        if (m.context = N, m.props = Z, m.__P = t, m.__e = !1, U = L.__r, P = 0, "prototype" in $ && $.prototype.render) {
          for (m.state = m.__s, m.__d = !1, U && U(e), v = m.render(m.props, m.state, m.context), R = 0; R < m._sb.length; R++)
            m.__h.push(m._sb[R]);
          m._sb = [];
        } else
          do
            m.__d = !1, U && U(e), v = m.render(m.props, m.state, m.context), m.state = m.__s;
          while (m.__d && ++P < 25);
        m.state = m.__s, m.getChildContext != null && (s = Ie(Ie({}, s), m.getChildContext())), k || m.getSnapshotBeforeUpdate == null || (C = m.getSnapshotBeforeUpdate(x, w)), di(t, jr(j = v != null && v.type === Ce && v.key == null ? v.props.children : v) ? j : [j], e, n, s, i, a, u, d, l, h), m.base = e.__e, e.__h = null, m.__h.length && u.push(m), O && (m.__E = m.__ = null);
      } catch (te) {
        e.__v = null, (l || a != null) && (e.__e = d, e.__h = !!l, a[a.indexOf(d)] = null), L.__e(te, e, n);
      }
    else
      a == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = ho(n.__e, e, n, s, i, a, u, l, h);
  (v = L.diffed) && v(e);
}
function fi(t, e, n) {
  for (var s = 0; s < n.length; s++)
    An(n[s], n[++s], n[++s]);
  L.__c && L.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      L.__e(a, i.__v);
    }
  });
}
function ho(t, e, n, s, i, a, u, d, l) {
  var h, v, m, k = n.props, x = e.props, w = e.type, C = 0;
  if (w === "svg" && (i = !0), a != null) {
    for (; C < a.length; C++)
      if ((h = a[C]) && "setAttribute" in h == !!w && (w ? h.localName === w : h.nodeType === 3)) {
        t = h, a[C] = null;
        break;
      }
  }
  if (t == null) {
    if (w === null)
      return document.createTextNode(x);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, x.is && x), a = null, d = !1;
  }
  if (w === null)
    k === x || d && t.data === x || (t.data = x);
  else {
    if (a = a && Wt.call(t.childNodes), v = (k = n.props || it).dangerouslySetInnerHTML, m = x.dangerouslySetInnerHTML, !d) {
      if (a != null)
        for (k = {}, C = 0; C < t.attributes.length; C++)
          k[t.attributes[C].name] = t.attributes[C].value;
      (m || v) && (m && (v && m.__html == v.__html || m.__html === t.innerHTML) || (t.innerHTML = m && m.__html || ""));
    }
    if (fo(t, x, k, i, d), m)
      e.__k = [];
    else if (di(t, jr(C = e.props.children) ? C : [C], e, n, s, i && w !== "foreignObject", a, u, a ? a[0] : n.__k && At(n, 0), d, l), a != null)
      for (C = a.length; C--; )
        a[C] != null && ai(a[C]);
    d || ("value" in x && (C = x.value) !== void 0 && (C !== t.value || w === "progress" && !C || w === "option" && C !== k.value) && kr(t, "value", C, k.value, !1), "checked" in x && (C = x.checked) !== void 0 && C !== t.checked && kr(t, "checked", C, k.checked, !1));
  }
  return t;
}
function An(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    L.__e(s, n);
  }
}
function yn(t, e, n) {
  var s, i;
  if (L.unmount && L.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || An(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (a) {
        L.__e(a, e);
      }
    s.base = s.__P = null, t.__c = void 0;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && yn(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || ai(t.__e), t.__ = t.__e = t.__d = void 0;
}
function po(t, e, n) {
  return this.constructor(t, n);
}
function ut(t, e, n) {
  var s, i, a, u;
  L.__ && L.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, a = [], u = [], Nn(e, t = (!s && n || e).__k = he(Ce, null, [t]), i || it, it, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? Wt.call(e.childNodes) : null, a, !s && n ? n : i ? i.__e : e.firstChild, s, u), fi(a, t, u);
}
function hi(t, e) {
  ut(t, e, hi);
}
function mo(t, e, n) {
  var s, i, a, u, d = Ie({}, t.props);
  for (a in t.type && t.type.defaultProps && (u = t.type.defaultProps), e)
    a == "key" ? s = e[a] : a == "ref" ? i = e[a] : d[a] = e[a] === void 0 && u !== void 0 ? u[a] : e[a];
  return arguments.length > 2 && (d.children = arguments.length > 3 ? Wt.call(arguments, 2) : n), Rt(t.type, d, s || t.key, i || t.ref, null);
}
function ht(t, e) {
  var n = { __c: e = "__cC" + si++, __: t, Consumer: function(s, i) {
    return s.children(i);
  }, Provider: function(s) {
    var i, a;
    return this.getChildContext || (i = [], (a = {})[e] = this, this.getChildContext = function() {
      return a;
    }, this.shouldComponentUpdate = function(u) {
      this.props.value !== u.value && i.some(function(d) {
        d.__e = !0, _n(d);
      });
    }, this.sub = function(u) {
      i.push(u);
      var d = u.componentWillUnmount;
      u.componentWillUnmount = function() {
        i.splice(i.indexOf(u), 1), d && d.call(u);
      };
    }), s.children;
  } };
  return n.Provider.__ = n.Consumer.contextType = n;
}
Wt = ii.slice, L = { __e: function(t, e, n, s) {
  for (var i, a, u; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(t)), u = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), u = i.__d), u)
          return i.__E = i;
      } catch (d) {
        t = d;
      }
  throw t;
} }, ri = 0, ve.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ie({}, this.state), typeof t == "function" && (t = t(Ie({}, n), this.props)), t && Ie(n, t), t != null && this.__v && (e && this._sb.push(e), _n(this));
}, ve.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), _n(this));
}, ve.prototype.render = Ce, Be = [], ni = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, mn = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, wr.__r = 0, si = 0;
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Mn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function _o(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var i = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(n, s, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), n;
}
var pi = {}, rn = {}, Lr = {}, Kt = {}, nn = {}, Vr = {};
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.getZodPathArray = void 0;
function yo(t) {
  return ["[", ...t.map((n) => typeof n == "string" ? `"${n}"` : n).join(", "), "]"].join("");
}
Vr.getZodPathArray = yo;
var Tt = {}, cs;
function vo() {
  if (cs)
    return Tt;
  cs = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.getPathString = void 0;
  const t = Dn();
  function e(n, s) {
    if ((s == null ? void 0 : s.enabled) === void 0)
      return (0, t.getObjectNotation)(n, { enabled: !0, type: "objectNotation" });
    if (s.enabled === !1)
      return "";
    switch (s.type) {
      case "zodPathArray":
        return (0, t.getZodPathArray)(n);
      case "breadcrumbs":
        return (0, t.getBreadcrumbs)(n, s);
      case "objectNotation":
      default:
        return (0, t.getObjectNotation)(n, s);
    }
  }
  return Tt.getPathString = e, Tt;
}
var Ur = {};
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.getObjectNotation = void 0;
function go(t, e) {
  var n;
  const s = (n = e.arraySquareBrackets) !== null && n !== void 0 ? n : !0;
  return t.reduce((i, a) => typeof a == "number" && s ? `${i}[${a}]` : [i, a].filter((u) => typeof u == "number" || !!u).join("."), "");
}
Ur.getObjectNotation = go;
var Ct = {}, ls;
function bo() {
  if (ls)
    return Ct;
  ls = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.getErrorMessage = void 0;
  const t = Dn();
  function e(n, s, i) {
    var a, u, d, l, h, v, m, k, x, w;
    const C = (0, t.getComponentDelimiter)((a = i == null ? void 0 : i.delimiter) === null || a === void 0 ? void 0 : a.component), O = (0, t.getComponentLabels)(i), Z = [];
    let D = `${O.code}${n.code}`;
    ((d = (u = i == null ? void 0 : i.code) === null || u === void 0 ? void 0 : u.enabled) !== null && d !== void 0 ? d : !0) && (!((l = i == null ? void 0 : i.code) === null || l === void 0) && l.enabled && i.code.transform && (D = i.code.transform({ component: D, label: O.code, value: n.code })), Z.push(D));
    const I = (0, t.getPathString)(n.path, i == null ? void 0 : i.path);
    let U = `${O.path}${I}`;
    ((v = (h = i == null ? void 0 : i.path) === null || h === void 0 ? void 0 : h.enabled) !== null && v !== void 0 ? v : !0) && (!((m = i == null ? void 0 : i.path) === null || m === void 0) && m.enabled && i.path.transform && (U = i.path.transform({ component: U, label: O.path, value: I })), Z.push(U));
    let R = `${O.message}${n.message}`;
    ((x = (k = i == null ? void 0 : i.message) === null || k === void 0 ? void 0 : k.enabled) !== null && x !== void 0 ? x : !0) && (!((w = i == null ? void 0 : i.message) === null || w === void 0) && w.enabled && i.message.transform && (R = i.message.transform({
      component: R,
      label: O.message,
      value: n.message
    })), Z.push(R));
    const $ = Z.join(C);
    return i != null && i.transform ? i.transform({ pathComponent: U, messageComponent: R, issue: n, index: s, errorMessage: $, codeComponent: D }) : $;
  }
  return Ct.getErrorMessage = e, Ct;
}
var $r = {};
Object.defineProperty($r, "__esModule", { value: !0 });
$r.getErrorDelimiter = void 0;
function xo(t) {
  return t ?? " | ";
}
$r.getErrorDelimiter = xo;
var qr = {}, Fr = {};
Object.defineProperty(Fr, "__esModule", { value: !0 });
Fr.getLabel = void 0;
function wo(t, e) {
  return t === void 0 ? e : t.enabled === !1 ? "" : t.label === void 0 ? e : t.label === null ? "" : t.label;
}
Fr.getLabel = wo;
Object.defineProperty(qr, "__esModule", { value: !0 });
qr.getComponentLabels = void 0;
const sn = Fr;
function ko(t) {
  const e = (0, sn.getLabel)(t == null ? void 0 : t.code, "Code: "), n = (0, sn.getLabel)(t == null ? void 0 : t.message, "Message: "), s = (0, sn.getLabel)(t == null ? void 0 : t.path, "Path: ");
  return { code: e, message: n, path: s };
}
qr.getComponentLabels = ko;
var Br = {};
Object.defineProperty(Br, "__esModule", { value: !0 });
Br.getComponentDelimiter = void 0;
function To(t) {
  return t ?? " ~ ";
}
Br.getComponentDelimiter = To;
var zr = {};
Object.defineProperty(zr, "__esModule", { value: !0 });
zr.getBreadcrumbs = void 0;
function Co(t, e) {
  var n, s;
  const i = (n = e.arraySquareBrackets) !== null && n !== void 0 ? n : !0, a = (s = e.delimeter) !== null && s !== void 0 ? s : " > ";
  return t.map((u) => typeof u == "number" && i ? `[${u}]` : u).join(a);
}
zr.getBreadcrumbs = Co;
var fs;
function Dn() {
  return fs || (fs = 1, function(t) {
    var e = G && G.__createBinding || (Object.create ? function(s, i, a, u) {
      u === void 0 && (u = a);
      var d = Object.getOwnPropertyDescriptor(i, a);
      (!d || ("get" in d ? !i.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
        return i[a];
      } }), Object.defineProperty(s, u, d);
    } : function(s, i, a, u) {
      u === void 0 && (u = a), s[u] = i[a];
    }), n = G && G.__exportStar || function(s, i) {
      for (var a in s)
        a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, s, a);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), n(Vr, t), n(vo(), t), n(Ur, t), n(bo(), t), n($r, t), n(qr, t), n(Br, t), n(zr, t);
  }(nn)), nn;
}
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.generateErrorMessage = void 0;
const hs = Dn();
function So(t, e) {
  var n, s, i;
  const a = (0, hs.getErrorDelimiter)((n = e == null ? void 0 : e.delimiter) === null || n === void 0 ? void 0 : n.error), u = t.slice(0, e == null ? void 0 : e.maxErrors).map((d, l) => (0, hs.getErrorMessage)(d, l, e)).join(a);
  return `${(s = e == null ? void 0 : e.prefix) !== null && s !== void 0 ? s : ""}${u}${(i = e == null ? void 0 : e.suffix) !== null && i !== void 0 ? i : ""}`;
}
Kt.generateErrorMessage = So;
var mi = {}, vn = {}, ke = {}, Qr = {}, Gt = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getParsedType = t.ZodParsedType = t.objectUtil = t.util = void 0;
  var e;
  (function(s) {
    s.assertEqual = (d) => d;
    function i(d) {
    }
    s.assertIs = i;
    function a(d) {
      throw new Error();
    }
    s.assertNever = a, s.arrayToEnum = (d) => {
      const l = {};
      for (const h of d)
        l[h] = h;
      return l;
    }, s.getValidEnumValues = (d) => {
      const l = s.objectKeys(d).filter((v) => typeof d[d[v]] != "number"), h = {};
      for (const v of l)
        h[v] = d[v];
      return s.objectValues(h);
    }, s.objectValues = (d) => s.objectKeys(d).map(function(l) {
      return d[l];
    }), s.objectKeys = typeof Object.keys == "function" ? (d) => Object.keys(d) : (d) => {
      const l = [];
      for (const h in d)
        Object.prototype.hasOwnProperty.call(d, h) && l.push(h);
      return l;
    }, s.find = (d, l) => {
      for (const h of d)
        if (l(h))
          return h;
    }, s.isInteger = typeof Number.isInteger == "function" ? (d) => Number.isInteger(d) : (d) => typeof d == "number" && isFinite(d) && Math.floor(d) === d;
    function u(d, l = " | ") {
      return d.map((h) => typeof h == "string" ? `'${h}'` : h).join(l);
    }
    s.joinValues = u, s.jsonStringifyReplacer = (d, l) => typeof l == "bigint" ? l.toString() : l;
  })(e = t.util || (t.util = {})), function(s) {
    s.mergeShapes = (i, a) => ({
      ...i,
      ...a
    });
  }(t.objectUtil || (t.objectUtil = {})), t.ZodParsedType = e.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  const n = (s) => {
    switch (typeof s) {
      case "undefined":
        return t.ZodParsedType.undefined;
      case "string":
        return t.ZodParsedType.string;
      case "number":
        return isNaN(s) ? t.ZodParsedType.nan : t.ZodParsedType.number;
      case "boolean":
        return t.ZodParsedType.boolean;
      case "function":
        return t.ZodParsedType.function;
      case "bigint":
        return t.ZodParsedType.bigint;
      case "symbol":
        return t.ZodParsedType.symbol;
      case "object":
        return Array.isArray(s) ? t.ZodParsedType.array : s === null ? t.ZodParsedType.null : s.then && typeof s.then == "function" && s.catch && typeof s.catch == "function" ? t.ZodParsedType.promise : typeof Map < "u" && s instanceof Map ? t.ZodParsedType.map : typeof Set < "u" && s instanceof Set ? t.ZodParsedType.set : typeof Date < "u" && s instanceof Date ? t.ZodParsedType.date : t.ZodParsedType.object;
      default:
        return t.ZodParsedType.unknown;
    }
  };
  t.getParsedType = n;
})(Gt);
var Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
Te.ZodError = Te.quotelessJson = Te.ZodIssueCode = void 0;
const _i = Gt;
Te.ZodIssueCode = _i.util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
const Oo = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
Te.quotelessJson = Oo;
let gn = class extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const n = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, i = (a) => {
      for (const u of a.issues)
        if (u.code === "invalid_union")
          u.unionErrors.map(i);
        else if (u.code === "invalid_return_type")
          i(u.returnTypeError);
        else if (u.code === "invalid_arguments")
          i(u.argumentsError);
        else if (u.path.length === 0)
          s._errors.push(n(u));
        else {
          let d = s, l = 0;
          for (; l < u.path.length; ) {
            const h = u.path[l];
            l === u.path.length - 1 ? (d[h] = d[h] || { _errors: [] }, d[h]._errors.push(n(u))) : d[h] = d[h] || { _errors: [] }, d = d[h], l++;
          }
        }
    };
    return i(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, _i.util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (n) => n.message) {
    const n = {}, s = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e(i))) : s.push(e(i));
    return { formErrors: s, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
};
Te.ZodError = gn;
gn.create = (t) => new gn(t);
Object.defineProperty(Qr, "__esModule", { value: !0 });
const Fe = Gt, se = Te, Eo = (t, e) => {
  let n;
  switch (t.code) {
    case se.ZodIssueCode.invalid_type:
      t.received === Fe.ZodParsedType.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case se.ZodIssueCode.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, Fe.util.jsonStringifyReplacer)}`;
      break;
    case se.ZodIssueCode.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Fe.util.joinValues(t.keys, ", ")}`;
      break;
    case se.ZodIssueCode.invalid_union:
      n = "Invalid input";
      break;
    case se.ZodIssueCode.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Fe.util.joinValues(t.options)}`;
      break;
    case se.ZodIssueCode.invalid_enum_value:
      n = `Invalid enum value. Expected ${Fe.util.joinValues(t.options)}, received '${t.received}'`;
      break;
    case se.ZodIssueCode.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case se.ZodIssueCode.invalid_return_type:
      n = "Invalid function return type";
      break;
    case se.ZodIssueCode.invalid_date:
      n = "Invalid date";
      break;
    case se.ZodIssueCode.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : Fe.util.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case se.ZodIssueCode.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case se.ZodIssueCode.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case se.ZodIssueCode.custom:
      n = "Invalid input";
      break;
    case se.ZodIssueCode.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case se.ZodIssueCode.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case se.ZodIssueCode.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, Fe.util.assertNever(t);
  }
  return { message: n };
};
Qr.default = Eo;
var Io = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ke, "__esModule", { value: !0 });
ke.getErrorMap = ke.setErrorMap = ke.defaultErrorMap = void 0;
const yi = Io(Qr);
ke.defaultErrorMap = yi.default;
let vi = yi.default;
function Zo(t) {
  vi = t;
}
ke.setErrorMap = Zo;
function Po() {
  return vi;
}
ke.getErrorMap = Po;
var jn = {};
(function(t) {
  var e = G && G.__importDefault || function(x) {
    return x && x.__esModule ? x : { default: x };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isAsync = t.isValid = t.isDirty = t.isAborted = t.OK = t.DIRTY = t.INVALID = t.ParseStatus = t.addIssueToContext = t.EMPTY_PATH = t.makeIssue = void 0;
  const n = ke, s = e(Qr), i = (x) => {
    const { data: w, path: C, errorMaps: O, issueData: Z } = x, D = [...C, ...Z.path || []], N = {
      ...Z,
      path: D
    };
    let I = "";
    const U = O.filter((P) => !!P).slice().reverse();
    for (const P of U)
      I = P(N, { data: w, defaultError: I }).message;
    return {
      ...Z,
      path: D,
      message: Z.message || I
    };
  };
  t.makeIssue = i, t.EMPTY_PATH = [];
  function a(x, w) {
    const C = (0, t.makeIssue)({
      issueData: w,
      data: x.data,
      path: x.path,
      errorMaps: [
        x.common.contextualErrorMap,
        x.schemaErrorMap,
        (0, n.getErrorMap)(),
        s.default
      ].filter((O) => !!O)
    });
    x.common.issues.push(C);
  }
  t.addIssueToContext = a;
  class u {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(w, C) {
      const O = [];
      for (const Z of C) {
        if (Z.status === "aborted")
          return t.INVALID;
        Z.status === "dirty" && w.dirty(), O.push(Z.value);
      }
      return { status: w.value, value: O };
    }
    static async mergeObjectAsync(w, C) {
      const O = [];
      for (const Z of C)
        O.push({
          key: await Z.key,
          value: await Z.value
        });
      return u.mergeObjectSync(w, O);
    }
    static mergeObjectSync(w, C) {
      const O = {};
      for (const Z of C) {
        const { key: D, value: N } = Z;
        if (D.status === "aborted" || N.status === "aborted")
          return t.INVALID;
        D.status === "dirty" && w.dirty(), N.status === "dirty" && w.dirty(), D.value !== "__proto__" && (typeof N.value < "u" || Z.alwaysSet) && (O[D.value] = N.value);
      }
      return { status: w.value, value: O };
    }
  }
  t.ParseStatus = u, t.INVALID = Object.freeze({
    status: "aborted"
  });
  const d = (x) => ({ status: "dirty", value: x });
  t.DIRTY = d;
  const l = (x) => ({ status: "valid", value: x });
  t.OK = l;
  const h = (x) => x.status === "aborted";
  t.isAborted = h;
  const v = (x) => x.status === "dirty";
  t.isDirty = v;
  const m = (x) => x.status === "valid";
  t.isValid = m;
  const k = (x) => typeof Promise < "u" && x instanceof Promise;
  t.isAsync = k;
})(jn);
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
var bi = {}, xi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.errorUtil = void 0, function(e) {
    e.errToObj = (n) => typeof n == "string" ? { message: n } : n || {}, e.toString = (n) => typeof n == "string" ? n : n == null ? void 0 : n.message;
  }(t.errorUtil || (t.errorUtil = {}));
})(xi);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.date = t.boolean = t.bigint = t.array = t.any = t.coerce = t.ZodFirstPartyTypeKind = t.late = t.ZodSchema = t.Schema = t.custom = t.ZodReadonly = t.ZodPipeline = t.ZodBranded = t.BRAND = t.ZodNaN = t.ZodCatch = t.ZodDefault = t.ZodNullable = t.ZodOptional = t.ZodTransformer = t.ZodEffects = t.ZodPromise = t.ZodNativeEnum = t.ZodEnum = t.ZodLiteral = t.ZodLazy = t.ZodFunction = t.ZodSet = t.ZodMap = t.ZodRecord = t.ZodTuple = t.ZodIntersection = t.ZodDiscriminatedUnion = t.ZodUnion = t.ZodObject = t.ZodArray = t.ZodVoid = t.ZodNever = t.ZodUnknown = t.ZodAny = t.ZodNull = t.ZodUndefined = t.ZodSymbol = t.ZodDate = t.ZodBoolean = t.ZodBigInt = t.ZodNumber = t.ZodString = t.ZodType = void 0, t.NEVER = t.void = t.unknown = t.union = t.undefined = t.tuple = t.transformer = t.symbol = t.string = t.strictObject = t.set = t.record = t.promise = t.preprocess = t.pipeline = t.ostring = t.optional = t.onumber = t.oboolean = t.object = t.number = t.nullable = t.null = t.never = t.nativeEnum = t.nan = t.map = t.literal = t.lazy = t.intersection = t.instanceof = t.function = t.enum = t.effect = t.discriminatedUnion = void 0;
  const e = ke, n = xi, s = jn, i = Gt, a = Te;
  class u {
    constructor(o, c, f, y) {
      this._cachedPath = [], this.parent = o, this.data = c, this._path = f, this._key = y;
    }
    get path() {
      return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
    }
  }
  const d = (p, o) => {
    if ((0, s.isValid)(o))
      return { success: !0, data: o.value };
    if (!p.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error)
          return this._error;
        const c = new a.ZodError(p.common.issues);
        return this._error = c, this._error;
      }
    };
  };
  function l(p) {
    if (!p)
      return {};
    const { errorMap: o, invalid_type_error: c, required_error: f, description: y } = p;
    if (o && (c || f))
      throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return o ? { errorMap: o, description: y } : { errorMap: (S, T) => S.code !== "invalid_type" ? { message: T.defaultError } : typeof T.data > "u" ? { message: f ?? T.defaultError } : { message: c ?? T.defaultError }, description: y };
  }
  class h {
    constructor(o) {
      this.spa = this.safeParseAsync, this._def = o, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
    }
    get description() {
      return this._def.description;
    }
    _getType(o) {
      return (0, i.getParsedType)(o.data);
    }
    _getOrReturnCtx(o, c) {
      return c || {
        common: o.parent.common,
        data: o.data,
        parsedType: (0, i.getParsedType)(o.data),
        schemaErrorMap: this._def.errorMap,
        path: o.path,
        parent: o.parent
      };
    }
    _processInputParams(o) {
      return {
        status: new s.ParseStatus(),
        ctx: {
          common: o.parent.common,
          data: o.data,
          parsedType: (0, i.getParsedType)(o.data),
          schemaErrorMap: this._def.errorMap,
          path: o.path,
          parent: o.parent
        }
      };
    }
    _parseSync(o) {
      const c = this._parse(o);
      if ((0, s.isAsync)(c))
        throw new Error("Synchronous parse encountered promise.");
      return c;
    }
    _parseAsync(o) {
      const c = this._parse(o);
      return Promise.resolve(c);
    }
    parse(o, c) {
      const f = this.safeParse(o, c);
      if (f.success)
        return f.data;
      throw f.error;
    }
    safeParse(o, c) {
      var f;
      const y = {
        common: {
          issues: [],
          async: (f = c == null ? void 0 : c.async) !== null && f !== void 0 ? f : !1,
          contextualErrorMap: c == null ? void 0 : c.errorMap
        },
        path: (c == null ? void 0 : c.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: o,
        parsedType: (0, i.getParsedType)(o)
      }, _ = this._parseSync({ data: o, path: y.path, parent: y });
      return d(y, _);
    }
    async parseAsync(o, c) {
      const f = await this.safeParseAsync(o, c);
      if (f.success)
        return f.data;
      throw f.error;
    }
    async safeParseAsync(o, c) {
      const f = {
        common: {
          issues: [],
          contextualErrorMap: c == null ? void 0 : c.errorMap,
          async: !0
        },
        path: (c == null ? void 0 : c.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: o,
        parsedType: (0, i.getParsedType)(o)
      }, y = this._parse({ data: o, path: f.path, parent: f }), _ = await ((0, s.isAsync)(y) ? y : Promise.resolve(y));
      return d(f, _);
    }
    refine(o, c) {
      const f = (y) => typeof c == "string" || typeof c > "u" ? { message: c } : typeof c == "function" ? c(y) : c;
      return this._refinement((y, _) => {
        const S = o(y), T = () => _.addIssue({
          code: a.ZodIssueCode.custom,
          ...f(y)
        });
        return typeof Promise < "u" && S instanceof Promise ? S.then((F) => F ? !0 : (T(), !1)) : S ? !0 : (T(), !1);
      });
    }
    refinement(o, c) {
      return this._refinement((f, y) => o(f) ? !0 : (y.addIssue(typeof c == "function" ? c(f, y) : c), !1));
    }
    _refinement(o) {
      return new _e({
        schema: this,
        typeName: z.ZodEffects,
        effect: { type: "refinement", refinement: o }
      });
    }
    superRefine(o) {
      return this._refinement(o);
    }
    optional() {
      return Ee.create(this, this._def);
    }
    nullable() {
      return qe.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return ae.create(this, this._def);
    }
    promise() {
      return tt.create(this, this._def);
    }
    or(o) {
      return _t.create([this, o], this._def);
    }
    and(o) {
      return yt.create(this, o, this._def);
    }
    transform(o) {
      return new _e({
        ...l(this._def),
        schema: this,
        typeName: z.ZodEffects,
        effect: { type: "transform", transform: o }
      });
    }
    default(o) {
      const c = typeof o == "function" ? o : () => o;
      return new wt({
        ...l(this._def),
        innerType: this,
        defaultValue: c,
        typeName: z.ZodDefault
      });
    }
    brand() {
      return new es({
        typeName: z.ZodBranded,
        type: this,
        ...l(this._def)
      });
    }
    catch(o) {
      const c = typeof o == "function" ? o : () => o;
      return new hr({
        ...l(this._def),
        innerType: this,
        catchValue: c,
        typeName: z.ZodCatch
      });
    }
    describe(o) {
      const c = this.constructor;
      return new c({
        ...this._def,
        description: o
      });
    }
    pipe(o) {
      return kt.create(this, o);
    }
    readonly() {
      return mr.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  }
  t.ZodType = h, t.Schema = h, t.ZodSchema = h;
  const v = /^c[^\s-]{8,}$/i, m = /^[a-z][a-z0-9]*$/, k = /[0-9A-HJKMNP-TV-Z]{26}/, x = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, w = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, C = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, O = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Z = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, D = (p) => p.precision ? p.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${p.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${p.precision}}Z$`) : p.precision === 0 ? p.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : p.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
  function N(p, o) {
    return !!((o === "v4" || !o) && O.test(p) || (o === "v6" || !o) && Z.test(p));
  }
  class I extends h {
    constructor() {
      super(...arguments), this._regex = (o, c, f) => this.refinement((y) => o.test(y), {
        validation: c,
        code: a.ZodIssueCode.invalid_string,
        ...n.errorUtil.errToObj(f)
      }), this.nonempty = (o) => this.min(1, n.errorUtil.errToObj(o)), this.trim = () => new I({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }]
      }), this.toLowerCase = () => new I({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }]
      }), this.toUpperCase = () => new I({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }]
      });
    }
    _parse(o) {
      if (this._def.coerce && (o.data = String(o.data)), this._getType(o) !== i.ZodParsedType.string) {
        const _ = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(_, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.string,
          received: _.parsedType
        }), s.INVALID;
      }
      const f = new s.ParseStatus();
      let y;
      for (const _ of this._def.checks)
        if (_.kind === "min")
          o.data.length < _.value && (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.too_small,
            minimum: _.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: _.message
          }), f.dirty());
        else if (_.kind === "max")
          o.data.length > _.value && (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.too_big,
            maximum: _.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: _.message
          }), f.dirty());
        else if (_.kind === "length") {
          const S = o.data.length > _.value, T = o.data.length < _.value;
          (S || T) && (y = this._getOrReturnCtx(o, y), S ? (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.too_big,
            maximum: _.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: _.message
          }) : T && (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.too_small,
            minimum: _.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: _.message
          }), f.dirty());
        } else if (_.kind === "email")
          w.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "email",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty());
        else if (_.kind === "emoji")
          C.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "emoji",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty());
        else if (_.kind === "uuid")
          x.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "uuid",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty());
        else if (_.kind === "cuid")
          v.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "cuid",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty());
        else if (_.kind === "cuid2")
          m.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "cuid2",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty());
        else if (_.kind === "ulid")
          k.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "ulid",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty());
        else if (_.kind === "url")
          try {
            new URL(o.data);
          } catch {
            y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
              validation: "url",
              code: a.ZodIssueCode.invalid_string,
              message: _.message
            }), f.dirty();
          }
        else
          _.kind === "regex" ? (_.regex.lastIndex = 0, _.regex.test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "regex",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty())) : _.kind === "trim" ? o.data = o.data.trim() : _.kind === "includes" ? o.data.includes(_.value, _.position) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.invalid_string,
            validation: { includes: _.value, position: _.position },
            message: _.message
          }), f.dirty()) : _.kind === "toLowerCase" ? o.data = o.data.toLowerCase() : _.kind === "toUpperCase" ? o.data = o.data.toUpperCase() : _.kind === "startsWith" ? o.data.startsWith(_.value) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.invalid_string,
            validation: { startsWith: _.value },
            message: _.message
          }), f.dirty()) : _.kind === "endsWith" ? o.data.endsWith(_.value) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.invalid_string,
            validation: { endsWith: _.value },
            message: _.message
          }), f.dirty()) : _.kind === "datetime" ? D(_).test(o.data) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.invalid_string,
            validation: "datetime",
            message: _.message
          }), f.dirty()) : _.kind === "ip" ? N(o.data, _.version) || (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
            validation: "ip",
            code: a.ZodIssueCode.invalid_string,
            message: _.message
          }), f.dirty()) : i.util.assertNever(_);
      return { status: f.value, value: o.data };
    }
    _addCheck(o) {
      return new I({
        ...this._def,
        checks: [...this._def.checks, o]
      });
    }
    email(o) {
      return this._addCheck({ kind: "email", ...n.errorUtil.errToObj(o) });
    }
    url(o) {
      return this._addCheck({ kind: "url", ...n.errorUtil.errToObj(o) });
    }
    emoji(o) {
      return this._addCheck({ kind: "emoji", ...n.errorUtil.errToObj(o) });
    }
    uuid(o) {
      return this._addCheck({ kind: "uuid", ...n.errorUtil.errToObj(o) });
    }
    cuid(o) {
      return this._addCheck({ kind: "cuid", ...n.errorUtil.errToObj(o) });
    }
    cuid2(o) {
      return this._addCheck({ kind: "cuid2", ...n.errorUtil.errToObj(o) });
    }
    ulid(o) {
      return this._addCheck({ kind: "ulid", ...n.errorUtil.errToObj(o) });
    }
    ip(o) {
      return this._addCheck({ kind: "ip", ...n.errorUtil.errToObj(o) });
    }
    datetime(o) {
      var c;
      return typeof o == "string" ? this._addCheck({
        kind: "datetime",
        precision: null,
        offset: !1,
        message: o
      }) : this._addCheck({
        kind: "datetime",
        precision: typeof (o == null ? void 0 : o.precision) > "u" ? null : o == null ? void 0 : o.precision,
        offset: (c = o == null ? void 0 : o.offset) !== null && c !== void 0 ? c : !1,
        ...n.errorUtil.errToObj(o == null ? void 0 : o.message)
      });
    }
    regex(o, c) {
      return this._addCheck({
        kind: "regex",
        regex: o,
        ...n.errorUtil.errToObj(c)
      });
    }
    includes(o, c) {
      return this._addCheck({
        kind: "includes",
        value: o,
        position: c == null ? void 0 : c.position,
        ...n.errorUtil.errToObj(c == null ? void 0 : c.message)
      });
    }
    startsWith(o, c) {
      return this._addCheck({
        kind: "startsWith",
        value: o,
        ...n.errorUtil.errToObj(c)
      });
    }
    endsWith(o, c) {
      return this._addCheck({
        kind: "endsWith",
        value: o,
        ...n.errorUtil.errToObj(c)
      });
    }
    min(o, c) {
      return this._addCheck({
        kind: "min",
        value: o,
        ...n.errorUtil.errToObj(c)
      });
    }
    max(o, c) {
      return this._addCheck({
        kind: "max",
        value: o,
        ...n.errorUtil.errToObj(c)
      });
    }
    length(o, c) {
      return this._addCheck({
        kind: "length",
        value: o,
        ...n.errorUtil.errToObj(c)
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((o) => o.kind === "datetime");
    }
    get isEmail() {
      return !!this._def.checks.find((o) => o.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((o) => o.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((o) => o.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((o) => o.kind === "uuid");
    }
    get isCUID() {
      return !!this._def.checks.find((o) => o.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((o) => o.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((o) => o.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((o) => o.kind === "ip");
    }
    get minLength() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "min" && (o === null || c.value > o) && (o = c.value);
      return o;
    }
    get maxLength() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "max" && (o === null || c.value < o) && (o = c.value);
      return o;
    }
  }
  t.ZodString = I, I.create = (p) => {
    var o;
    return new I({
      checks: [],
      typeName: z.ZodString,
      coerce: (o = p == null ? void 0 : p.coerce) !== null && o !== void 0 ? o : !1,
      ...l(p)
    });
  };
  function U(p, o) {
    const c = (p.toString().split(".")[1] || "").length, f = (o.toString().split(".")[1] || "").length, y = c > f ? c : f, _ = parseInt(p.toFixed(y).replace(".", "")), S = parseInt(o.toFixed(y).replace(".", ""));
    return _ % S / Math.pow(10, y);
  }
  class P extends h {
    constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
    }
    _parse(o) {
      if (this._def.coerce && (o.data = Number(o.data)), this._getType(o) !== i.ZodParsedType.number) {
        const _ = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(_, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.number,
          received: _.parsedType
        }), s.INVALID;
      }
      let f;
      const y = new s.ParseStatus();
      for (const _ of this._def.checks)
        _.kind === "int" ? i.util.isInteger(o.data) || (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: "integer",
          received: "float",
          message: _.message
        }), y.dirty()) : _.kind === "min" ? (_.inclusive ? o.data < _.value : o.data <= _.value) && (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.too_small,
          minimum: _.value,
          type: "number",
          inclusive: _.inclusive,
          exact: !1,
          message: _.message
        }), y.dirty()) : _.kind === "max" ? (_.inclusive ? o.data > _.value : o.data >= _.value) && (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.too_big,
          maximum: _.value,
          type: "number",
          inclusive: _.inclusive,
          exact: !1,
          message: _.message
        }), y.dirty()) : _.kind === "multipleOf" ? U(o.data, _.value) !== 0 && (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.not_multiple_of,
          multipleOf: _.value,
          message: _.message
        }), y.dirty()) : _.kind === "finite" ? Number.isFinite(o.data) || (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.not_finite,
          message: _.message
        }), y.dirty()) : i.util.assertNever(_);
      return { status: y.value, value: o.data };
    }
    gte(o, c) {
      return this.setLimit("min", o, !0, n.errorUtil.toString(c));
    }
    gt(o, c) {
      return this.setLimit("min", o, !1, n.errorUtil.toString(c));
    }
    lte(o, c) {
      return this.setLimit("max", o, !0, n.errorUtil.toString(c));
    }
    lt(o, c) {
      return this.setLimit("max", o, !1, n.errorUtil.toString(c));
    }
    setLimit(o, c, f, y) {
      return new P({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: o,
            value: c,
            inclusive: f,
            message: n.errorUtil.toString(y)
          }
        ]
      });
    }
    _addCheck(o) {
      return new P({
        ...this._def,
        checks: [...this._def.checks, o]
      });
    }
    int(o) {
      return this._addCheck({
        kind: "int",
        message: n.errorUtil.toString(o)
      });
    }
    positive(o) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !1,
        message: n.errorUtil.toString(o)
      });
    }
    negative(o) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !1,
        message: n.errorUtil.toString(o)
      });
    }
    nonpositive(o) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !0,
        message: n.errorUtil.toString(o)
      });
    }
    nonnegative(o) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !0,
        message: n.errorUtil.toString(o)
      });
    }
    multipleOf(o, c) {
      return this._addCheck({
        kind: "multipleOf",
        value: o,
        message: n.errorUtil.toString(c)
      });
    }
    finite(o) {
      return this._addCheck({
        kind: "finite",
        message: n.errorUtil.toString(o)
      });
    }
    safe(o) {
      return this._addCheck({
        kind: "min",
        inclusive: !0,
        value: Number.MIN_SAFE_INTEGER,
        message: n.errorUtil.toString(o)
      })._addCheck({
        kind: "max",
        inclusive: !0,
        value: Number.MAX_SAFE_INTEGER,
        message: n.errorUtil.toString(o)
      });
    }
    get minValue() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "min" && (o === null || c.value > o) && (o = c.value);
      return o;
    }
    get maxValue() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "max" && (o === null || c.value < o) && (o = c.value);
      return o;
    }
    get isInt() {
      return !!this._def.checks.find((o) => o.kind === "int" || o.kind === "multipleOf" && i.util.isInteger(o.value));
    }
    get isFinite() {
      let o = null, c = null;
      for (const f of this._def.checks) {
        if (f.kind === "finite" || f.kind === "int" || f.kind === "multipleOf")
          return !0;
        f.kind === "min" ? (c === null || f.value > c) && (c = f.value) : f.kind === "max" && (o === null || f.value < o) && (o = f.value);
      }
      return Number.isFinite(c) && Number.isFinite(o);
    }
  }
  t.ZodNumber = P, P.create = (p) => new P({
    checks: [],
    typeName: z.ZodNumber,
    coerce: (p == null ? void 0 : p.coerce) || !1,
    ...l(p)
  });
  class R extends h {
    constructor() {
      super(...arguments), this.min = this.gte, this.max = this.lte;
    }
    _parse(o) {
      if (this._def.coerce && (o.data = BigInt(o.data)), this._getType(o) !== i.ZodParsedType.bigint) {
        const _ = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(_, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.bigint,
          received: _.parsedType
        }), s.INVALID;
      }
      let f;
      const y = new s.ParseStatus();
      for (const _ of this._def.checks)
        _.kind === "min" ? (_.inclusive ? o.data < _.value : o.data <= _.value) && (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.too_small,
          type: "bigint",
          minimum: _.value,
          inclusive: _.inclusive,
          message: _.message
        }), y.dirty()) : _.kind === "max" ? (_.inclusive ? o.data > _.value : o.data >= _.value) && (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.too_big,
          type: "bigint",
          maximum: _.value,
          inclusive: _.inclusive,
          message: _.message
        }), y.dirty()) : _.kind === "multipleOf" ? o.data % _.value !== BigInt(0) && (f = this._getOrReturnCtx(o, f), (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.not_multiple_of,
          multipleOf: _.value,
          message: _.message
        }), y.dirty()) : i.util.assertNever(_);
      return { status: y.value, value: o.data };
    }
    gte(o, c) {
      return this.setLimit("min", o, !0, n.errorUtil.toString(c));
    }
    gt(o, c) {
      return this.setLimit("min", o, !1, n.errorUtil.toString(c));
    }
    lte(o, c) {
      return this.setLimit("max", o, !0, n.errorUtil.toString(c));
    }
    lt(o, c) {
      return this.setLimit("max", o, !1, n.errorUtil.toString(c));
    }
    setLimit(o, c, f, y) {
      return new R({
        ...this._def,
        checks: [
          ...this._def.checks,
          {
            kind: o,
            value: c,
            inclusive: f,
            message: n.errorUtil.toString(y)
          }
        ]
      });
    }
    _addCheck(o) {
      return new R({
        ...this._def,
        checks: [...this._def.checks, o]
      });
    }
    positive(o) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !1,
        message: n.errorUtil.toString(o)
      });
    }
    negative(o) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !1,
        message: n.errorUtil.toString(o)
      });
    }
    nonpositive(o) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !0,
        message: n.errorUtil.toString(o)
      });
    }
    nonnegative(o) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !0,
        message: n.errorUtil.toString(o)
      });
    }
    multipleOf(o, c) {
      return this._addCheck({
        kind: "multipleOf",
        value: o,
        message: n.errorUtil.toString(c)
      });
    }
    get minValue() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "min" && (o === null || c.value > o) && (o = c.value);
      return o;
    }
    get maxValue() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "max" && (o === null || c.value < o) && (o = c.value);
      return o;
    }
  }
  t.ZodBigInt = R, R.create = (p) => {
    var o;
    return new R({
      checks: [],
      typeName: z.ZodBigInt,
      coerce: (o = p == null ? void 0 : p.coerce) !== null && o !== void 0 ? o : !1,
      ...l(p)
    });
  };
  class j extends h {
    _parse(o) {
      if (this._def.coerce && (o.data = !!o.data), this._getType(o) !== i.ZodParsedType.boolean) {
        const f = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.boolean,
          received: f.parsedType
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
  }
  t.ZodBoolean = j, j.create = (p) => new j({
    typeName: z.ZodBoolean,
    coerce: (p == null ? void 0 : p.coerce) || !1,
    ...l(p)
  });
  class $ extends h {
    _parse(o) {
      if (this._def.coerce && (o.data = new Date(o.data)), this._getType(o) !== i.ZodParsedType.date) {
        const _ = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(_, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.date,
          received: _.parsedType
        }), s.INVALID;
      }
      if (isNaN(o.data.getTime())) {
        const _ = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(_, {
          code: a.ZodIssueCode.invalid_date
        }), s.INVALID;
      }
      const f = new s.ParseStatus();
      let y;
      for (const _ of this._def.checks)
        _.kind === "min" ? o.data.getTime() < _.value && (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
          code: a.ZodIssueCode.too_small,
          message: _.message,
          inclusive: !0,
          exact: !1,
          minimum: _.value,
          type: "date"
        }), f.dirty()) : _.kind === "max" ? o.data.getTime() > _.value && (y = this._getOrReturnCtx(o, y), (0, s.addIssueToContext)(y, {
          code: a.ZodIssueCode.too_big,
          message: _.message,
          inclusive: !0,
          exact: !1,
          maximum: _.value,
          type: "date"
        }), f.dirty()) : i.util.assertNever(_);
      return {
        status: f.value,
        value: new Date(o.data.getTime())
      };
    }
    _addCheck(o) {
      return new $({
        ...this._def,
        checks: [...this._def.checks, o]
      });
    }
    min(o, c) {
      return this._addCheck({
        kind: "min",
        value: o.getTime(),
        message: n.errorUtil.toString(c)
      });
    }
    max(o, c) {
      return this._addCheck({
        kind: "max",
        value: o.getTime(),
        message: n.errorUtil.toString(c)
      });
    }
    get minDate() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "min" && (o === null || c.value > o) && (o = c.value);
      return o != null ? new Date(o) : null;
    }
    get maxDate() {
      let o = null;
      for (const c of this._def.checks)
        c.kind === "max" && (o === null || c.value < o) && (o = c.value);
      return o != null ? new Date(o) : null;
    }
  }
  t.ZodDate = $, $.create = (p) => new $({
    checks: [],
    coerce: (p == null ? void 0 : p.coerce) || !1,
    typeName: z.ZodDate,
    ...l(p)
  });
  class te extends h {
    _parse(o) {
      if (this._getType(o) !== i.ZodParsedType.symbol) {
        const f = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.symbol,
          received: f.parsedType
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
  }
  t.ZodSymbol = te, te.create = (p) => new te({
    typeName: z.ZodSymbol,
    ...l(p)
  });
  class ue extends h {
    _parse(o) {
      if (this._getType(o) !== i.ZodParsedType.undefined) {
        const f = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.undefined,
          received: f.parsedType
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
  }
  t.ZodUndefined = ue, ue.create = (p) => new ue({
    typeName: z.ZodUndefined,
    ...l(p)
  });
  class de extends h {
    _parse(o) {
      if (this._getType(o) !== i.ZodParsedType.null) {
        const f = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.null,
          received: f.parsedType
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
  }
  t.ZodNull = de, de.create = (p) => new de({
    typeName: z.ZodNull,
    ...l(p)
  });
  class ce extends h {
    constructor() {
      super(...arguments), this._any = !0;
    }
    _parse(o) {
      return (0, s.OK)(o.data);
    }
  }
  t.ZodAny = ce, ce.create = (p) => new ce({
    typeName: z.ZodAny,
    ...l(p)
  });
  class pe extends h {
    constructor() {
      super(...arguments), this._unknown = !0;
    }
    _parse(o) {
      return (0, s.OK)(o.data);
    }
  }
  t.ZodUnknown = pe, pe.create = (p) => new pe({
    typeName: z.ZodUnknown,
    ...l(p)
  });
  class me extends h {
    _parse(o) {
      const c = this._getOrReturnCtx(o);
      return (0, s.addIssueToContext)(c, {
        code: a.ZodIssueCode.invalid_type,
        expected: i.ZodParsedType.never,
        received: c.parsedType
      }), s.INVALID;
    }
  }
  t.ZodNever = me, me.create = (p) => new me({
    typeName: z.ZodNever,
    ...l(p)
  });
  class Ae extends h {
    _parse(o) {
      if (this._getType(o) !== i.ZodParsedType.undefined) {
        const f = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.void,
          received: f.parsedType
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
  }
  t.ZodVoid = Ae, Ae.create = (p) => new Ae({
    typeName: z.ZodVoid,
    ...l(p)
  });
  class ae extends h {
    _parse(o) {
      const { ctx: c, status: f } = this._processInputParams(o), y = this._def;
      if (c.parsedType !== i.ZodParsedType.array)
        return (0, s.addIssueToContext)(c, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.array,
          received: c.parsedType
        }), s.INVALID;
      if (y.exactLength !== null) {
        const S = c.data.length > y.exactLength.value, T = c.data.length < y.exactLength.value;
        (S || T) && ((0, s.addIssueToContext)(c, {
          code: S ? a.ZodIssueCode.too_big : a.ZodIssueCode.too_small,
          minimum: T ? y.exactLength.value : void 0,
          maximum: S ? y.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: y.exactLength.message
        }), f.dirty());
      }
      if (y.minLength !== null && c.data.length < y.minLength.value && ((0, s.addIssueToContext)(c, {
        code: a.ZodIssueCode.too_small,
        minimum: y.minLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: y.minLength.message
      }), f.dirty()), y.maxLength !== null && c.data.length > y.maxLength.value && ((0, s.addIssueToContext)(c, {
        code: a.ZodIssueCode.too_big,
        maximum: y.maxLength.value,
        type: "array",
        inclusive: !0,
        exact: !1,
        message: y.maxLength.message
      }), f.dirty()), c.common.async)
        return Promise.all([...c.data].map((S, T) => y.type._parseAsync(new u(c, S, c.path, T)))).then((S) => s.ParseStatus.mergeArray(f, S));
      const _ = [...c.data].map((S, T) => y.type._parseSync(new u(c, S, c.path, T)));
      return s.ParseStatus.mergeArray(f, _);
    }
    get element() {
      return this._def.type;
    }
    min(o, c) {
      return new ae({
        ...this._def,
        minLength: { value: o, message: n.errorUtil.toString(c) }
      });
    }
    max(o, c) {
      return new ae({
        ...this._def,
        maxLength: { value: o, message: n.errorUtil.toString(c) }
      });
    }
    length(o, c) {
      return new ae({
        ...this._def,
        exactLength: { value: o, message: n.errorUtil.toString(c) }
      });
    }
    nonempty(o) {
      return this.min(1, o);
    }
  }
  t.ZodArray = ae, ae.create = (p, o) => new ae({
    type: p,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: z.ZodArray,
    ...l(o)
  });
  function Xe(p) {
    if (p instanceof X) {
      const o = {};
      for (const c in p.shape) {
        const f = p.shape[c];
        o[c] = Ee.create(Xe(f));
      }
      return new X({
        ...p._def,
        shape: () => o
      });
    } else
      return p instanceof ae ? new ae({
        ...p._def,
        type: Xe(p.element)
      }) : p instanceof Ee ? Ee.create(Xe(p.unwrap())) : p instanceof qe ? qe.create(Xe(p.unwrap())) : p instanceof we ? we.create(p.items.map((o) => Xe(o))) : p;
  }
  class X extends h {
    constructor() {
      super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
    }
    _getCached() {
      if (this._cached !== null)
        return this._cached;
      const o = this._def.shape(), c = i.util.objectKeys(o);
      return this._cached = { shape: o, keys: c };
    }
    _parse(o) {
      if (this._getType(o) !== i.ZodParsedType.object) {
        const V = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(V, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.object,
          received: V.parsedType
        }), s.INVALID;
      }
      const { status: f, ctx: y } = this._processInputParams(o), { shape: _, keys: S } = this._getCached(), T = [];
      if (!(this._def.catchall instanceof me && this._def.unknownKeys === "strip"))
        for (const V in y.data)
          S.includes(V) || T.push(V);
      const F = [];
      for (const V of S) {
        const K = _[V], le = y.data[V];
        F.push({
          key: { status: "valid", value: V },
          value: K._parse(new u(y, le, y.path, V)),
          alwaysSet: V in y.data
        });
      }
      if (this._def.catchall instanceof me) {
        const V = this._def.unknownKeys;
        if (V === "passthrough")
          for (const K of T)
            F.push({
              key: { status: "valid", value: K },
              value: { status: "valid", value: y.data[K] }
            });
        else if (V === "strict")
          T.length > 0 && ((0, s.addIssueToContext)(y, {
            code: a.ZodIssueCode.unrecognized_keys,
            keys: T
          }), f.dirty());
        else if (V !== "strip")
          throw new Error("Internal ZodObject error: invalid unknownKeys value.");
      } else {
        const V = this._def.catchall;
        for (const K of T) {
          const le = y.data[K];
          F.push({
            key: { status: "valid", value: K },
            value: V._parse(new u(y, le, y.path, K)),
            alwaysSet: K in y.data
          });
        }
      }
      return y.common.async ? Promise.resolve().then(async () => {
        const V = [];
        for (const K of F) {
          const le = await K.key;
          V.push({
            key: le,
            value: await K.value,
            alwaysSet: K.alwaysSet
          });
        }
        return V;
      }).then((V) => s.ParseStatus.mergeObjectSync(f, V)) : s.ParseStatus.mergeObjectSync(f, F);
    }
    get shape() {
      return this._def.shape();
    }
    strict(o) {
      return n.errorUtil.errToObj, new X({
        ...this._def,
        unknownKeys: "strict",
        ...o !== void 0 ? {
          errorMap: (c, f) => {
            var y, _, S, T;
            const F = (S = (_ = (y = this._def).errorMap) === null || _ === void 0 ? void 0 : _.call(y, c, f).message) !== null && S !== void 0 ? S : f.defaultError;
            return c.code === "unrecognized_keys" ? {
              message: (T = n.errorUtil.errToObj(o).message) !== null && T !== void 0 ? T : F
            } : {
              message: F
            };
          }
        } : {}
      });
    }
    strip() {
      return new X({
        ...this._def,
        unknownKeys: "strip"
      });
    }
    passthrough() {
      return new X({
        ...this._def,
        unknownKeys: "passthrough"
      });
    }
    extend(o) {
      return new X({
        ...this._def,
        shape: () => ({
          ...this._def.shape(),
          ...o
        })
      });
    }
    merge(o) {
      return new X({
        unknownKeys: o._def.unknownKeys,
        catchall: o._def.catchall,
        shape: () => ({
          ...this._def.shape(),
          ...o._def.shape()
        }),
        typeName: z.ZodObject
      });
    }
    setKey(o, c) {
      return this.augment({ [o]: c });
    }
    catchall(o) {
      return new X({
        ...this._def,
        catchall: o
      });
    }
    pick(o) {
      const c = {};
      return i.util.objectKeys(o).forEach((f) => {
        o[f] && this.shape[f] && (c[f] = this.shape[f]);
      }), new X({
        ...this._def,
        shape: () => c
      });
    }
    omit(o) {
      const c = {};
      return i.util.objectKeys(this.shape).forEach((f) => {
        o[f] || (c[f] = this.shape[f]);
      }), new X({
        ...this._def,
        shape: () => c
      });
    }
    deepPartial() {
      return Xe(this);
    }
    partial(o) {
      const c = {};
      return i.util.objectKeys(this.shape).forEach((f) => {
        const y = this.shape[f];
        o && !o[f] ? c[f] = y : c[f] = y.optional();
      }), new X({
        ...this._def,
        shape: () => c
      });
    }
    required(o) {
      const c = {};
      return i.util.objectKeys(this.shape).forEach((f) => {
        if (o && !o[f])
          c[f] = this.shape[f];
        else {
          let _ = this.shape[f];
          for (; _ instanceof Ee; )
            _ = _._def.innerType;
          c[f] = _;
        }
      }), new X({
        ...this._def,
        shape: () => c
      });
    }
    keyof() {
      return Xn(i.util.objectKeys(this.shape));
    }
  }
  t.ZodObject = X, X.create = (p, o) => new X({
    shape: () => p,
    unknownKeys: "strip",
    catchall: me.create(),
    typeName: z.ZodObject,
    ...l(o)
  }), X.strictCreate = (p, o) => new X({
    shape: () => p,
    unknownKeys: "strict",
    catchall: me.create(),
    typeName: z.ZodObject,
    ...l(o)
  }), X.lazycreate = (p, o) => new X({
    shape: p,
    unknownKeys: "strip",
    catchall: me.create(),
    typeName: z.ZodObject,
    ...l(o)
  });
  class _t extends h {
    _parse(o) {
      const { ctx: c } = this._processInputParams(o), f = this._def.options;
      function y(_) {
        for (const T of _)
          if (T.result.status === "valid")
            return T.result;
        for (const T of _)
          if (T.result.status === "dirty")
            return c.common.issues.push(...T.ctx.common.issues), T.result;
        const S = _.map((T) => new a.ZodError(T.ctx.common.issues));
        return (0, s.addIssueToContext)(c, {
          code: a.ZodIssueCode.invalid_union,
          unionErrors: S
        }), s.INVALID;
      }
      if (c.common.async)
        return Promise.all(f.map(async (_) => {
          const S = {
            ...c,
            common: {
              ...c.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await _._parseAsync({
              data: c.data,
              path: c.path,
              parent: S
            }),
            ctx: S
          };
        })).then(y);
      {
        let _;
        const S = [];
        for (const F of f) {
          const V = {
            ...c,
            common: {
              ...c.common,
              issues: []
            },
            parent: null
          }, K = F._parseSync({
            data: c.data,
            path: c.path,
            parent: V
          });
          if (K.status === "valid")
            return K;
          K.status === "dirty" && !_ && (_ = { result: K, ctx: V }), V.common.issues.length && S.push(V.common.issues);
        }
        if (_)
          return c.common.issues.push(..._.ctx.common.issues), _.result;
        const T = S.map((F) => new a.ZodError(F));
        return (0, s.addIssueToContext)(c, {
          code: a.ZodIssueCode.invalid_union,
          unionErrors: T
        }), s.INVALID;
      }
    }
    get options() {
      return this._def.options;
    }
  }
  t.ZodUnion = _t, _t.create = (p, o) => new _t({
    options: p,
    typeName: z.ZodUnion,
    ...l(o)
  });
  const cr = (p) => p instanceof gt ? cr(p.schema) : p instanceof _e ? cr(p.innerType()) : p instanceof bt ? [p.value] : p instanceof Me ? p.options : p instanceof xt ? Object.keys(p.enum) : p instanceof wt ? cr(p._def.innerType) : p instanceof ue ? [void 0] : p instanceof de ? [null] : null;
  class lr extends h {
    _parse(o) {
      const { ctx: c } = this._processInputParams(o);
      if (c.parsedType !== i.ZodParsedType.object)
        return (0, s.addIssueToContext)(c, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.object,
          received: c.parsedType
        }), s.INVALID;
      const f = this.discriminator, y = c.data[f], _ = this.optionsMap.get(y);
      return _ ? c.common.async ? _._parseAsync({
        data: c.data,
        path: c.path,
        parent: c
      }) : _._parseSync({
        data: c.data,
        path: c.path,
        parent: c
      }) : ((0, s.addIssueToContext)(c, {
        code: a.ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [f]
      }), s.INVALID);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(o, c, f) {
      const y = /* @__PURE__ */ new Map();
      for (const _ of c) {
        const S = cr(_.shape[o]);
        if (!S)
          throw new Error(`A discriminator value for key \`${o}\` could not be extracted from all schema options`);
        for (const T of S) {
          if (y.has(T))
            throw new Error(`Discriminator property ${String(o)} has duplicate value ${String(T)}`);
          y.set(T, _);
        }
      }
      return new lr({
        typeName: z.ZodDiscriminatedUnion,
        discriminator: o,
        options: c,
        optionsMap: y,
        ...l(f)
      });
    }
  }
  t.ZodDiscriminatedUnion = lr;
  function en(p, o) {
    const c = (0, i.getParsedType)(p), f = (0, i.getParsedType)(o);
    if (p === o)
      return { valid: !0, data: p };
    if (c === i.ZodParsedType.object && f === i.ZodParsedType.object) {
      const y = i.util.objectKeys(o), _ = i.util.objectKeys(p).filter((T) => y.indexOf(T) !== -1), S = { ...p, ...o };
      for (const T of _) {
        const F = en(p[T], o[T]);
        if (!F.valid)
          return { valid: !1 };
        S[T] = F.data;
      }
      return { valid: !0, data: S };
    } else if (c === i.ZodParsedType.array && f === i.ZodParsedType.array) {
      if (p.length !== o.length)
        return { valid: !1 };
      const y = [];
      for (let _ = 0; _ < p.length; _++) {
        const S = p[_], T = o[_], F = en(S, T);
        if (!F.valid)
          return { valid: !1 };
        y.push(F.data);
      }
      return { valid: !0, data: y };
    } else
      return c === i.ZodParsedType.date && f === i.ZodParsedType.date && +p == +o ? { valid: !0, data: p } : { valid: !1 };
  }
  class yt extends h {
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o), y = (_, S) => {
        if ((0, s.isAborted)(_) || (0, s.isAborted)(S))
          return s.INVALID;
        const T = en(_.value, S.value);
        return T.valid ? (((0, s.isDirty)(_) || (0, s.isDirty)(S)) && c.dirty(), { status: c.value, value: T.data }) : ((0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_intersection_types
        }), s.INVALID);
      };
      return f.common.async ? Promise.all([
        this._def.left._parseAsync({
          data: f.data,
          path: f.path,
          parent: f
        }),
        this._def.right._parseAsync({
          data: f.data,
          path: f.path,
          parent: f
        })
      ]).then(([_, S]) => y(_, S)) : y(this._def.left._parseSync({
        data: f.data,
        path: f.path,
        parent: f
      }), this._def.right._parseSync({
        data: f.data,
        path: f.path,
        parent: f
      }));
    }
  }
  t.ZodIntersection = yt, yt.create = (p, o, c) => new yt({
    left: p,
    right: o,
    typeName: z.ZodIntersection,
    ...l(c)
  });
  class we extends h {
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o);
      if (f.parsedType !== i.ZodParsedType.array)
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.array,
          received: f.parsedType
        }), s.INVALID;
      if (f.data.length < this._def.items.length)
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), s.INVALID;
      !this._def.rest && f.data.length > this._def.items.length && ((0, s.addIssueToContext)(f, {
        code: a.ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), c.dirty());
      const _ = [...f.data].map((S, T) => {
        const F = this._def.items[T] || this._def.rest;
        return F ? F._parse(new u(f, S, f.path, T)) : null;
      }).filter((S) => !!S);
      return f.common.async ? Promise.all(_).then((S) => s.ParseStatus.mergeArray(c, S)) : s.ParseStatus.mergeArray(c, _);
    }
    get items() {
      return this._def.items;
    }
    rest(o) {
      return new we({
        ...this._def,
        rest: o
      });
    }
  }
  t.ZodTuple = we, we.create = (p, o) => {
    if (!Array.isArray(p))
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new we({
      items: p,
      typeName: z.ZodTuple,
      rest: null,
      ...l(o)
    });
  };
  class vt extends h {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o);
      if (f.parsedType !== i.ZodParsedType.object)
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.object,
          received: f.parsedType
        }), s.INVALID;
      const y = [], _ = this._def.keyType, S = this._def.valueType;
      for (const T in f.data)
        y.push({
          key: _._parse(new u(f, T, f.path, T)),
          value: S._parse(new u(f, f.data[T], f.path, T))
        });
      return f.common.async ? s.ParseStatus.mergeObjectAsync(c, y) : s.ParseStatus.mergeObjectSync(c, y);
    }
    get element() {
      return this._def.valueType;
    }
    static create(o, c, f) {
      return c instanceof h ? new vt({
        keyType: o,
        valueType: c,
        typeName: z.ZodRecord,
        ...l(f)
      }) : new vt({
        keyType: I.create(),
        valueType: o,
        typeName: z.ZodRecord,
        ...l(c)
      });
    }
  }
  t.ZodRecord = vt;
  class fr extends h {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o);
      if (f.parsedType !== i.ZodParsedType.map)
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.map,
          received: f.parsedType
        }), s.INVALID;
      const y = this._def.keyType, _ = this._def.valueType, S = [...f.data.entries()].map(([T, F], V) => ({
        key: y._parse(new u(f, T, f.path, [V, "key"])),
        value: _._parse(new u(f, F, f.path, [V, "value"]))
      }));
      if (f.common.async) {
        const T = /* @__PURE__ */ new Map();
        return Promise.resolve().then(async () => {
          for (const F of S) {
            const V = await F.key, K = await F.value;
            if (V.status === "aborted" || K.status === "aborted")
              return s.INVALID;
            (V.status === "dirty" || K.status === "dirty") && c.dirty(), T.set(V.value, K.value);
          }
          return { status: c.value, value: T };
        });
      } else {
        const T = /* @__PURE__ */ new Map();
        for (const F of S) {
          const V = F.key, K = F.value;
          if (V.status === "aborted" || K.status === "aborted")
            return s.INVALID;
          (V.status === "dirty" || K.status === "dirty") && c.dirty(), T.set(V.value, K.value);
        }
        return { status: c.value, value: T };
      }
    }
  }
  t.ZodMap = fr, fr.create = (p, o, c) => new fr({
    valueType: o,
    keyType: p,
    typeName: z.ZodMap,
    ...l(c)
  });
  class $e extends h {
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o);
      if (f.parsedType !== i.ZodParsedType.set)
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.set,
          received: f.parsedType
        }), s.INVALID;
      const y = this._def;
      y.minSize !== null && f.data.size < y.minSize.value && ((0, s.addIssueToContext)(f, {
        code: a.ZodIssueCode.too_small,
        minimum: y.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: y.minSize.message
      }), c.dirty()), y.maxSize !== null && f.data.size > y.maxSize.value && ((0, s.addIssueToContext)(f, {
        code: a.ZodIssueCode.too_big,
        maximum: y.maxSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: y.maxSize.message
      }), c.dirty());
      const _ = this._def.valueType;
      function S(F) {
        const V = /* @__PURE__ */ new Set();
        for (const K of F) {
          if (K.status === "aborted")
            return s.INVALID;
          K.status === "dirty" && c.dirty(), V.add(K.value);
        }
        return { status: c.value, value: V };
      }
      const T = [...f.data.values()].map((F, V) => _._parse(new u(f, F, f.path, V)));
      return f.common.async ? Promise.all(T).then((F) => S(F)) : S(T);
    }
    min(o, c) {
      return new $e({
        ...this._def,
        minSize: { value: o, message: n.errorUtil.toString(c) }
      });
    }
    max(o, c) {
      return new $e({
        ...this._def,
        maxSize: { value: o, message: n.errorUtil.toString(c) }
      });
    }
    size(o, c) {
      return this.min(o, c).max(o, c);
    }
    nonempty(o) {
      return this.min(1, o);
    }
  }
  t.ZodSet = $e, $e.create = (p, o) => new $e({
    valueType: p,
    minSize: null,
    maxSize: null,
    typeName: z.ZodSet,
    ...l(o)
  });
  class et extends h {
    constructor() {
      super(...arguments), this.validate = this.implement;
    }
    _parse(o) {
      const { ctx: c } = this._processInputParams(o);
      if (c.parsedType !== i.ZodParsedType.function)
        return (0, s.addIssueToContext)(c, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.function,
          received: c.parsedType
        }), s.INVALID;
      function f(T, F) {
        return (0, s.makeIssue)({
          data: T,
          path: c.path,
          errorMaps: [
            c.common.contextualErrorMap,
            c.schemaErrorMap,
            (0, e.getErrorMap)(),
            e.defaultErrorMap
          ].filter((V) => !!V),
          issueData: {
            code: a.ZodIssueCode.invalid_arguments,
            argumentsError: F
          }
        });
      }
      function y(T, F) {
        return (0, s.makeIssue)({
          data: T,
          path: c.path,
          errorMaps: [
            c.common.contextualErrorMap,
            c.schemaErrorMap,
            (0, e.getErrorMap)(),
            e.defaultErrorMap
          ].filter((V) => !!V),
          issueData: {
            code: a.ZodIssueCode.invalid_return_type,
            returnTypeError: F
          }
        });
      }
      const _ = { errorMap: c.common.contextualErrorMap }, S = c.data;
      if (this._def.returns instanceof tt) {
        const T = this;
        return (0, s.OK)(async function(...F) {
          const V = new a.ZodError([]), K = await T._def.args.parseAsync(F, _).catch((tn) => {
            throw V.addIssue(f(F, tn)), V;
          }), le = await Reflect.apply(S, this, K);
          return await T._def.returns._def.type.parseAsync(le, _).catch((tn) => {
            throw V.addIssue(y(le, tn)), V;
          });
        });
      } else {
        const T = this;
        return (0, s.OK)(function(...F) {
          const V = T._def.args.safeParse(F, _);
          if (!V.success)
            throw new a.ZodError([f(F, V.error)]);
          const K = Reflect.apply(S, this, V.data), le = T._def.returns.safeParse(K, _);
          if (!le.success)
            throw new a.ZodError([y(K, le.error)]);
          return le.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...o) {
      return new et({
        ...this._def,
        args: we.create(o).rest(pe.create())
      });
    }
    returns(o) {
      return new et({
        ...this._def,
        returns: o
      });
    }
    implement(o) {
      return this.parse(o);
    }
    strictImplement(o) {
      return this.parse(o);
    }
    static create(o, c, f) {
      return new et({
        args: o || we.create([]).rest(pe.create()),
        returns: c || pe.create(),
        typeName: z.ZodFunction,
        ...l(f)
      });
    }
  }
  t.ZodFunction = et;
  class gt extends h {
    get schema() {
      return this._def.getter();
    }
    _parse(o) {
      const { ctx: c } = this._processInputParams(o);
      return this._def.getter()._parse({ data: c.data, path: c.path, parent: c });
    }
  }
  t.ZodLazy = gt, gt.create = (p, o) => new gt({
    getter: p,
    typeName: z.ZodLazy,
    ...l(o)
  });
  class bt extends h {
    _parse(o) {
      if (o.data !== this._def.value) {
        const c = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(c, {
          received: c.data,
          code: a.ZodIssueCode.invalid_literal,
          expected: this._def.value
        }), s.INVALID;
      }
      return { status: "valid", value: o.data };
    }
    get value() {
      return this._def.value;
    }
  }
  t.ZodLiteral = bt, bt.create = (p, o) => new bt({
    value: p,
    typeName: z.ZodLiteral,
    ...l(o)
  });
  function Xn(p, o) {
    return new Me({
      values: p,
      typeName: z.ZodEnum,
      ...l(o)
    });
  }
  class Me extends h {
    _parse(o) {
      if (typeof o.data != "string") {
        const c = this._getOrReturnCtx(o), f = this._def.values;
        return (0, s.addIssueToContext)(c, {
          expected: i.util.joinValues(f),
          received: c.parsedType,
          code: a.ZodIssueCode.invalid_type
        }), s.INVALID;
      }
      if (this._def.values.indexOf(o.data) === -1) {
        const c = this._getOrReturnCtx(o), f = this._def.values;
        return (0, s.addIssueToContext)(c, {
          received: c.data,
          code: a.ZodIssueCode.invalid_enum_value,
          options: f
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const o = {};
      for (const c of this._def.values)
        o[c] = c;
      return o;
    }
    get Values() {
      const o = {};
      for (const c of this._def.values)
        o[c] = c;
      return o;
    }
    get Enum() {
      const o = {};
      for (const c of this._def.values)
        o[c] = c;
      return o;
    }
    extract(o) {
      return Me.create(o);
    }
    exclude(o) {
      return Me.create(this.options.filter((c) => !o.includes(c)));
    }
  }
  t.ZodEnum = Me, Me.create = Xn;
  class xt extends h {
    _parse(o) {
      const c = i.util.getValidEnumValues(this._def.values), f = this._getOrReturnCtx(o);
      if (f.parsedType !== i.ZodParsedType.string && f.parsedType !== i.ZodParsedType.number) {
        const y = i.util.objectValues(c);
        return (0, s.addIssueToContext)(f, {
          expected: i.util.joinValues(y),
          received: f.parsedType,
          code: a.ZodIssueCode.invalid_type
        }), s.INVALID;
      }
      if (c.indexOf(o.data) === -1) {
        const y = i.util.objectValues(c);
        return (0, s.addIssueToContext)(f, {
          received: f.data,
          code: a.ZodIssueCode.invalid_enum_value,
          options: y
        }), s.INVALID;
      }
      return (0, s.OK)(o.data);
    }
    get enum() {
      return this._def.values;
    }
  }
  t.ZodNativeEnum = xt, xt.create = (p, o) => new xt({
    values: p,
    typeName: z.ZodNativeEnum,
    ...l(o)
  });
  class tt extends h {
    unwrap() {
      return this._def.type;
    }
    _parse(o) {
      const { ctx: c } = this._processInputParams(o);
      if (c.parsedType !== i.ZodParsedType.promise && c.common.async === !1)
        return (0, s.addIssueToContext)(c, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.promise,
          received: c.parsedType
        }), s.INVALID;
      const f = c.parsedType === i.ZodParsedType.promise ? c.data : Promise.resolve(c.data);
      return (0, s.OK)(f.then((y) => this._def.type.parseAsync(y, {
        path: c.path,
        errorMap: c.common.contextualErrorMap
      })));
    }
  }
  t.ZodPromise = tt, tt.create = (p, o) => new tt({
    type: p,
    typeName: z.ZodPromise,
    ...l(o)
  });
  class _e extends h {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === z.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
    }
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o), y = this._def.effect || null, _ = {
        addIssue: (S) => {
          (0, s.addIssueToContext)(f, S), S.fatal ? c.abort() : c.dirty();
        },
        get path() {
          return f.path;
        }
      };
      if (_.addIssue = _.addIssue.bind(_), y.type === "preprocess") {
        const S = y.transform(f.data, _);
        return f.common.issues.length ? {
          status: "dirty",
          value: f.data
        } : f.common.async ? Promise.resolve(S).then((T) => this._def.schema._parseAsync({
          data: T,
          path: f.path,
          parent: f
        })) : this._def.schema._parseSync({
          data: S,
          path: f.path,
          parent: f
        });
      }
      if (y.type === "refinement") {
        const S = (T) => {
          const F = y.refinement(T, _);
          if (f.common.async)
            return Promise.resolve(F);
          if (F instanceof Promise)
            throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
          return T;
        };
        if (f.common.async === !1) {
          const T = this._def.schema._parseSync({
            data: f.data,
            path: f.path,
            parent: f
          });
          return T.status === "aborted" ? s.INVALID : (T.status === "dirty" && c.dirty(), S(T.value), { status: c.value, value: T.value });
        } else
          return this._def.schema._parseAsync({ data: f.data, path: f.path, parent: f }).then((T) => T.status === "aborted" ? s.INVALID : (T.status === "dirty" && c.dirty(), S(T.value).then(() => ({ status: c.value, value: T.value }))));
      }
      if (y.type === "transform")
        if (f.common.async === !1) {
          const S = this._def.schema._parseSync({
            data: f.data,
            path: f.path,
            parent: f
          });
          if (!(0, s.isValid)(S))
            return S;
          const T = y.transform(S.value, _);
          if (T instanceof Promise)
            throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
          return { status: c.value, value: T };
        } else
          return this._def.schema._parseAsync({ data: f.data, path: f.path, parent: f }).then((S) => (0, s.isValid)(S) ? Promise.resolve(y.transform(S.value, _)).then((T) => ({ status: c.value, value: T })) : S);
      i.util.assertNever(y);
    }
  }
  t.ZodEffects = _e, t.ZodTransformer = _e, _e.create = (p, o, c) => new _e({
    schema: p,
    typeName: z.ZodEffects,
    effect: o,
    ...l(c)
  }), _e.createWithPreprocess = (p, o, c) => new _e({
    schema: o,
    effect: { type: "preprocess", transform: p },
    typeName: z.ZodEffects,
    ...l(c)
  });
  class Ee extends h {
    _parse(o) {
      return this._getType(o) === i.ZodParsedType.undefined ? (0, s.OK)(void 0) : this._def.innerType._parse(o);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  t.ZodOptional = Ee, Ee.create = (p, o) => new Ee({
    innerType: p,
    typeName: z.ZodOptional,
    ...l(o)
  });
  class qe extends h {
    _parse(o) {
      return this._getType(o) === i.ZodParsedType.null ? (0, s.OK)(null) : this._def.innerType._parse(o);
    }
    unwrap() {
      return this._def.innerType;
    }
  }
  t.ZodNullable = qe, qe.create = (p, o) => new qe({
    innerType: p,
    typeName: z.ZodNullable,
    ...l(o)
  });
  class wt extends h {
    _parse(o) {
      const { ctx: c } = this._processInputParams(o);
      let f = c.data;
      return c.parsedType === i.ZodParsedType.undefined && (f = this._def.defaultValue()), this._def.innerType._parse({
        data: f,
        path: c.path,
        parent: c
      });
    }
    removeDefault() {
      return this._def.innerType;
    }
  }
  t.ZodDefault = wt, wt.create = (p, o) => new wt({
    innerType: p,
    typeName: z.ZodDefault,
    defaultValue: typeof o.default == "function" ? o.default : () => o.default,
    ...l(o)
  });
  class hr extends h {
    _parse(o) {
      const { ctx: c } = this._processInputParams(o), f = {
        ...c,
        common: {
          ...c.common,
          issues: []
        }
      }, y = this._def.innerType._parse({
        data: f.data,
        path: f.path,
        parent: {
          ...f
        }
      });
      return (0, s.isAsync)(y) ? y.then((_) => ({
        status: "valid",
        value: _.status === "valid" ? _.value : this._def.catchValue({
          get error() {
            return new a.ZodError(f.common.issues);
          },
          input: f.data
        })
      })) : {
        status: "valid",
        value: y.status === "valid" ? y.value : this._def.catchValue({
          get error() {
            return new a.ZodError(f.common.issues);
          },
          input: f.data
        })
      };
    }
    removeCatch() {
      return this._def.innerType;
    }
  }
  t.ZodCatch = hr, hr.create = (p, o) => new hr({
    innerType: p,
    typeName: z.ZodCatch,
    catchValue: typeof o.catch == "function" ? o.catch : () => o.catch,
    ...l(o)
  });
  class pr extends h {
    _parse(o) {
      if (this._getType(o) !== i.ZodParsedType.nan) {
        const f = this._getOrReturnCtx(o);
        return (0, s.addIssueToContext)(f, {
          code: a.ZodIssueCode.invalid_type,
          expected: i.ZodParsedType.nan,
          received: f.parsedType
        }), s.INVALID;
      }
      return { status: "valid", value: o.data };
    }
  }
  t.ZodNaN = pr, pr.create = (p) => new pr({
    typeName: z.ZodNaN,
    ...l(p)
  }), t.BRAND = Symbol("zod_brand");
  class es extends h {
    _parse(o) {
      const { ctx: c } = this._processInputParams(o), f = c.data;
      return this._def.type._parse({
        data: f,
        path: c.path,
        parent: c
      });
    }
    unwrap() {
      return this._def.type;
    }
  }
  t.ZodBranded = es;
  class kt extends h {
    _parse(o) {
      const { status: c, ctx: f } = this._processInputParams(o);
      if (f.common.async)
        return (async () => {
          const _ = await this._def.in._parseAsync({
            data: f.data,
            path: f.path,
            parent: f
          });
          return _.status === "aborted" ? s.INVALID : _.status === "dirty" ? (c.dirty(), (0, s.DIRTY)(_.value)) : this._def.out._parseAsync({
            data: _.value,
            path: f.path,
            parent: f
          });
        })();
      {
        const y = this._def.in._parseSync({
          data: f.data,
          path: f.path,
          parent: f
        });
        return y.status === "aborted" ? s.INVALID : y.status === "dirty" ? (c.dirty(), {
          status: "dirty",
          value: y.value
        }) : this._def.out._parseSync({
          data: y.value,
          path: f.path,
          parent: f
        });
      }
    }
    static create(o, c) {
      return new kt({
        in: o,
        out: c,
        typeName: z.ZodPipeline
      });
    }
  }
  t.ZodPipeline = kt;
  class mr extends h {
    _parse(o) {
      const c = this._def.innerType._parse(o);
      return (0, s.isValid)(c) && (c.value = Object.freeze(c.value)), c;
    }
  }
  t.ZodReadonly = mr, mr.create = (p, o) => new mr({
    innerType: p,
    typeName: z.ZodReadonly,
    ...l(o)
  });
  const Ca = (p, o = {}, c) => p ? ce.create().superRefine((f, y) => {
    var _, S;
    if (!p(f)) {
      const T = typeof o == "function" ? o(f) : typeof o == "string" ? { message: o } : o, F = (S = (_ = T.fatal) !== null && _ !== void 0 ? _ : c) !== null && S !== void 0 ? S : !0, V = typeof T == "string" ? { message: T } : T;
      y.addIssue({ code: "custom", ...V, fatal: F });
    }
  }) : ce.create();
  t.custom = Ca, t.late = {
    object: X.lazycreate
  };
  var z;
  (function(p) {
    p.ZodString = "ZodString", p.ZodNumber = "ZodNumber", p.ZodNaN = "ZodNaN", p.ZodBigInt = "ZodBigInt", p.ZodBoolean = "ZodBoolean", p.ZodDate = "ZodDate", p.ZodSymbol = "ZodSymbol", p.ZodUndefined = "ZodUndefined", p.ZodNull = "ZodNull", p.ZodAny = "ZodAny", p.ZodUnknown = "ZodUnknown", p.ZodNever = "ZodNever", p.ZodVoid = "ZodVoid", p.ZodArray = "ZodArray", p.ZodObject = "ZodObject", p.ZodUnion = "ZodUnion", p.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", p.ZodIntersection = "ZodIntersection", p.ZodTuple = "ZodTuple", p.ZodRecord = "ZodRecord", p.ZodMap = "ZodMap", p.ZodSet = "ZodSet", p.ZodFunction = "ZodFunction", p.ZodLazy = "ZodLazy", p.ZodLiteral = "ZodLiteral", p.ZodEnum = "ZodEnum", p.ZodEffects = "ZodEffects", p.ZodNativeEnum = "ZodNativeEnum", p.ZodOptional = "ZodOptional", p.ZodNullable = "ZodNullable", p.ZodDefault = "ZodDefault", p.ZodCatch = "ZodCatch", p.ZodPromise = "ZodPromise", p.ZodBranded = "ZodBranded", p.ZodPipeline = "ZodPipeline", p.ZodReadonly = "ZodReadonly";
  })(z = t.ZodFirstPartyTypeKind || (t.ZodFirstPartyTypeKind = {}));
  const Sa = (p, o = {
    message: `Input not instance of ${p.name}`
  }) => (0, t.custom)((c) => c instanceof p, o);
  t.instanceof = Sa;
  const ts = I.create;
  t.string = ts;
  const rs = P.create;
  t.number = rs;
  const Oa = pr.create;
  t.nan = Oa;
  const Ea = R.create;
  t.bigint = Ea;
  const ns = j.create;
  t.boolean = ns;
  const Ia = $.create;
  t.date = Ia;
  const Za = te.create;
  t.symbol = Za;
  const Pa = ue.create;
  t.undefined = Pa;
  const Ra = de.create;
  t.null = Ra;
  const Na = ce.create;
  t.any = Na;
  const Aa = pe.create;
  t.unknown = Aa;
  const Ma = me.create;
  t.never = Ma;
  const Da = Ae.create;
  t.void = Da;
  const ja = ae.create;
  t.array = ja;
  const La = X.create;
  t.object = La;
  const Va = X.strictCreate;
  t.strictObject = Va;
  const Ua = _t.create;
  t.union = Ua;
  const $a = lr.create;
  t.discriminatedUnion = $a;
  const qa = yt.create;
  t.intersection = qa;
  const Fa = we.create;
  t.tuple = Fa;
  const Ba = vt.create;
  t.record = Ba;
  const za = fr.create;
  t.map = za;
  const Qa = $e.create;
  t.set = Qa;
  const Ha = et.create;
  t.function = Ha;
  const Wa = gt.create;
  t.lazy = Wa;
  const Ka = bt.create;
  t.literal = Ka;
  const Ga = Me.create;
  t.enum = Ga;
  const Ja = xt.create;
  t.nativeEnum = Ja;
  const Ya = tt.create;
  t.promise = Ya;
  const ss = _e.create;
  t.effect = ss, t.transformer = ss;
  const Xa = Ee.create;
  t.optional = Xa;
  const eo = qe.create;
  t.nullable = eo;
  const to = _e.createWithPreprocess;
  t.preprocess = to;
  const ro = kt.create;
  t.pipeline = ro;
  const no = () => ts().optional();
  t.ostring = no;
  const so = () => rs().optional();
  t.onumber = so;
  const io = () => ns().optional();
  t.oboolean = io, t.coerce = {
    string: (p) => I.create({ ...p, coerce: !0 }),
    number: (p) => P.create({ ...p, coerce: !0 }),
    boolean: (p) => j.create({
      ...p,
      coerce: !0
    }),
    bigint: (p) => R.create({ ...p, coerce: !0 }),
    date: (p) => $.create({ ...p, coerce: !0 })
  }, t.NEVER = s.INVALID;
})(bi);
(function(t) {
  var e = G && G.__createBinding || (Object.create ? function(s, i, a, u) {
    u === void 0 && (u = a), Object.defineProperty(s, u, { enumerable: !0, get: function() {
      return i[a];
    } });
  } : function(s, i, a, u) {
    u === void 0 && (u = a), s[u] = i[a];
  }), n = G && G.__exportStar || function(s, i) {
    for (var a in s)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, s, a);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), n(ke, t), n(jn, t), n(gi, t), n(Gt, t), n(bi, t), n(Te, t);
})(vn);
(function(t) {
  var e = G && G.__createBinding || (Object.create ? function(u, d, l, h) {
    h === void 0 && (h = l), Object.defineProperty(u, h, { enumerable: !0, get: function() {
      return d[l];
    } });
  } : function(u, d, l, h) {
    h === void 0 && (h = l), u[h] = d[l];
  }), n = G && G.__setModuleDefault || (Object.create ? function(u, d) {
    Object.defineProperty(u, "default", { enumerable: !0, value: d });
  } : function(u, d) {
    u.default = d;
  }), s = G && G.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var d = {};
    if (u != null)
      for (var l in u)
        l !== "default" && Object.prototype.hasOwnProperty.call(u, l) && e(d, u, l);
    return n(d, u), d;
  }, i = G && G.__exportStar || function(u, d) {
    for (var l in u)
      l !== "default" && !Object.prototype.hasOwnProperty.call(d, l) && e(d, u, l);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.z = void 0;
  const a = s(vn);
  t.z = a, i(vn, t), t.default = a;
})(mi);
Object.defineProperty(Lr, "__esModule", { value: !0 });
Lr.generateError = void 0;
const Ro = Kt, No = mi;
function Ao(t, e) {
  if (t instanceof No.z.ZodError) {
    const n = (0, Ro.generateErrorMessage)(t.issues, e);
    return new Error(n);
  }
  return t instanceof Error ? t : new Error("Unknown error");
}
Lr.generateError = Ao;
var St = {}, ps;
function Mo() {
  if (ps)
    return St;
  ps = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.parse = void 0;
  const t = Jt();
  function e(n, s, i) {
    const a = n.safeParse(s);
    if (!a.success) {
      const u = (0, t.generateErrorMessage)(a.error.issues, i);
      throw new Error(u);
    }
    return a.data;
  }
  return St.parse = e, St;
}
var Ot = {}, ms;
function Do() {
  if (ms)
    return Ot;
  ms = 1;
  var t = G && G.__awaiter || function(s, i, a, u) {
    function d(l) {
      return l instanceof a ? l : new a(function(h) {
        h(l);
      });
    }
    return new (a || (a = Promise))(function(l, h) {
      function v(x) {
        try {
          k(u.next(x));
        } catch (w) {
          h(w);
        }
      }
      function m(x) {
        try {
          k(u.throw(x));
        } catch (w) {
          h(w);
        }
      }
      function k(x) {
        x.done ? l(x.value) : d(x.value).then(v, m);
      }
      k((u = u.apply(s, i || [])).next());
    });
  };
  Object.defineProperty(Ot, "__esModule", { value: !0 }), Ot.parseAsync = void 0;
  const e = Jt();
  function n(s, i, a) {
    return t(this, void 0, void 0, function* () {
      const u = yield s.safeParseAsync(i);
      if (!u.success) {
        const d = (0, e.generateErrorMessage)(u.error.issues, a);
        throw new Error(d);
      }
      return u.data;
    });
  }
  return Ot.parseAsync = n, Ot;
}
var Et = {}, _s;
function jo() {
  if (_s)
    return Et;
  _s = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.safeParse = void 0;
  const t = Jt();
  function e(n, s, i) {
    const a = n.safeParse(s);
    return a.success ? {
      success: !0,
      data: a.data
    } : { success: !1, error: { message: (0, t.generateErrorMessage)(a.error.issues, i) } };
  }
  return Et.safeParse = e, Et;
}
var It = {}, ys;
function Lo() {
  if (ys)
    return It;
  ys = 1;
  var t = G && G.__awaiter || function(s, i, a, u) {
    function d(l) {
      return l instanceof a ? l : new a(function(h) {
        h(l);
      });
    }
    return new (a || (a = Promise))(function(l, h) {
      function v(x) {
        try {
          k(u.next(x));
        } catch (w) {
          h(w);
        }
      }
      function m(x) {
        try {
          k(u.throw(x));
        } catch (w) {
          h(w);
        }
      }
      function k(x) {
        x.done ? l(x.value) : d(x.value).then(v, m);
      }
      k((u = u.apply(s, i || [])).next());
    });
  };
  Object.defineProperty(It, "__esModule", { value: !0 }), It.safeParseAsync = void 0;
  const e = Jt();
  function n(s, i, a) {
    return t(this, void 0, void 0, function* () {
      const u = yield s.safeParseAsync(i);
      return u.success ? { success: !0, data: u.data } : { success: !1, error: { message: (0, e.generateErrorMessage)(u.error.issues, a) } };
    });
  }
  return It.safeParseAsync = n, It;
}
var vs;
function Jt() {
  return vs || (vs = 1, function(t) {
    var e = G && G.__createBinding || (Object.create ? function(s, i, a, u) {
      u === void 0 && (u = a);
      var d = Object.getOwnPropertyDescriptor(i, a);
      (!d || ("get" in d ? !i.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
        return i[a];
      } }), Object.defineProperty(s, u, d);
    } : function(s, i, a, u) {
      u === void 0 && (u = a), s[u] = i[a];
    }), n = G && G.__exportStar || function(s, i) {
      for (var a in s)
        a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, s, a);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), n(Lr, t), n(Kt, t), n(Mo(), t), n(Do(), t), n(jo(), t), n(Lo(), t);
  }(rn)), rn;
}
var wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
(function(t) {
  var e = G && G.__createBinding || (Object.create ? function(s, i, a, u) {
    u === void 0 && (u = a);
    var d = Object.getOwnPropertyDescriptor(i, a);
    (!d || ("get" in d ? !i.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
      return i[a];
    } }), Object.defineProperty(s, u, d);
  } : function(s, i, a, u) {
    u === void 0 && (u = a), s[u] = i[a];
  }), n = G && G.__exportStar || function(s, i) {
    for (var a in s)
      a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, s, a);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), n(Jt(), t), n(wi, t);
})(pi);
var J;
(function(t) {
  t.assertEqual = (i) => i;
  function e(i) {
  }
  t.assertIs = e;
  function n(i) {
    throw new Error();
  }
  t.assertNever = n, t.arrayToEnum = (i) => {
    const a = {};
    for (const u of i)
      a[u] = u;
    return a;
  }, t.getValidEnumValues = (i) => {
    const a = t.objectKeys(i).filter((d) => typeof i[i[d]] != "number"), u = {};
    for (const d of a)
      u[d] = i[d];
    return t.objectValues(u);
  }, t.objectValues = (i) => t.objectKeys(i).map(function(a) {
    return i[a];
  }), t.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const a = [];
    for (const u in i)
      Object.prototype.hasOwnProperty.call(i, u) && a.push(u);
    return a;
  }, t.find = (i, a) => {
    for (const u of i)
      if (a(u))
        return u;
  }, t.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function s(i, a = " | ") {
    return i.map((u) => typeof u == "string" ? `'${u}'` : u).join(a);
  }
  t.joinValues = s, t.jsonStringifyReplacer = (i, a) => typeof a == "bigint" ? a.toString() : a;
})(J || (J = {}));
var bn;
(function(t) {
  t.mergeShapes = (e, n) => ({
    ...e,
    ...n
    // second overwrites first
  });
})(bn || (bn = {}));
const A = J.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), je = (t) => {
  switch (typeof t) {
    case "undefined":
      return A.undefined;
    case "string":
      return A.string;
    case "number":
      return isNaN(t) ? A.nan : A.number;
    case "boolean":
      return A.boolean;
    case "function":
      return A.function;
    case "bigint":
      return A.bigint;
    case "symbol":
      return A.symbol;
    case "object":
      return Array.isArray(t) ? A.array : t === null ? A.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? A.promise : typeof Map < "u" && t instanceof Map ? A.map : typeof Set < "u" && t instanceof Set ? A.set : typeof Date < "u" && t instanceof Date ? A.date : A.object;
    default:
      return A.unknown;
  }
}, E = J.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Vo = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class ge extends Error {
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e;
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const n = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, i = (a) => {
      for (const u of a.issues)
        if (u.code === "invalid_union")
          u.unionErrors.map(i);
        else if (u.code === "invalid_return_type")
          i(u.returnTypeError);
        else if (u.code === "invalid_arguments")
          i(u.argumentsError);
        else if (u.path.length === 0)
          s._errors.push(n(u));
        else {
          let d = s, l = 0;
          for (; l < u.path.length; ) {
            const h = u.path[l];
            l === u.path.length - 1 ? (d[h] = d[h] || { _errors: [] }, d[h]._errors.push(n(u))) : d[h] = d[h] || { _errors: [] }, d = d[h], l++;
          }
        }
    };
    return i(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, J.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (n) => n.message) {
    const n = {}, s = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e(i))) : s.push(e(i));
    return { formErrors: s, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
ge.create = (t) => new ge(t);
const Mt = (t, e) => {
  let n;
  switch (t.code) {
    case E.invalid_type:
      t.received === A.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
      break;
    case E.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(t.expected, J.jsonStringifyReplacer)}`;
      break;
    case E.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${J.joinValues(t.keys, ", ")}`;
      break;
    case E.invalid_union:
      n = "Invalid input";
      break;
    case E.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${J.joinValues(t.options)}`;
      break;
    case E.invalid_enum_value:
      n = `Invalid enum value. Expected ${J.joinValues(t.options)}, received '${t.received}'`;
      break;
    case E.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case E.invalid_return_type:
      n = "Invalid function return type";
      break;
    case E.invalid_date:
      n = "Invalid date";
      break;
    case E.invalid_string:
      typeof t.validation == "object" ? "includes" in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`, typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith" in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith" in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : J.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
      break;
    case E.too_small:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
      break;
    case E.too_big:
      t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
      break;
    case E.custom:
      n = "Invalid input";
      break;
    case E.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case E.not_multiple_of:
      n = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case E.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = e.defaultError, J.assertNever(t);
  }
  return { message: n };
};
let ki = Mt;
function Uo(t) {
  ki = t;
}
function Tr() {
  return ki;
}
const Cr = (t) => {
  const { data: e, path: n, errorMaps: s, issueData: i } = t, a = [...n, ...i.path || []], u = {
    ...i,
    path: a
  };
  let d = "";
  const l = s.filter((h) => !!h).slice().reverse();
  for (const h of l)
    d = h(u, { data: e, defaultError: d }).message;
  return {
    ...i,
    path: a,
    message: i.message || d
  };
}, $o = [];
function M(t, e) {
  const n = Cr({
    issueData: e,
    data: t.data,
    path: t.path,
    errorMaps: [
      t.common.contextualErrorMap,
      t.schemaErrorMap,
      Tr(),
      Mt
      // then global default map
    ].filter((s) => !!s)
  });
  t.common.issues.push(n);
}
class ie {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, n) {
    const s = [];
    for (const i of n) {
      if (i.status === "aborted")
        return Q;
      i.status === "dirty" && e.dirty(), s.push(i.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, n) {
    const s = [];
    for (const i of n)
      s.push({
        key: await i.key,
        value: await i.value
      });
    return ie.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, n) {
    const s = {};
    for (const i of n) {
      const { key: a, value: u } = i;
      if (a.status === "aborted" || u.status === "aborted")
        return Q;
      a.status === "dirty" && e.dirty(), u.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof u.value < "u" || i.alwaysSet) && (s[a.value] = u.value);
    }
    return { status: e.value, value: s };
  }
}
const Q = Object.freeze({
  status: "aborted"
}), Ti = (t) => ({ status: "dirty", value: t }), oe = (t) => ({ status: "valid", value: t }), xn = (t) => t.status === "aborted", wn = (t) => t.status === "dirty", Dt = (t) => t.status === "valid", Sr = (t) => typeof Promise < "u" && t instanceof Promise;
var q;
(function(t) {
  t.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, t.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(q || (q = {}));
class Se {
  constructor(e, n, s, i) {
    this._cachedPath = [], this.parent = e, this.data = n, this._path = s, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const gs = (t, e) => {
  if (Dt(e))
    return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new ge(t.common.issues);
      return this._error = n, this._error;
    }
  };
};
function H(t) {
  if (!t)
    return {};
  const { errorMap: e, invalid_type_error: n, required_error: s, description: i } = t;
  if (e && (n || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: i } : { errorMap: (u, d) => u.code !== "invalid_type" ? { message: d.defaultError } : typeof d.data > "u" ? { message: s ?? d.defaultError } : { message: n ?? d.defaultError }, description: i };
}
class W {
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return je(e.data);
  }
  _getOrReturnCtx(e, n) {
    return n || {
      common: e.parent.common,
      data: e.data,
      parsedType: je(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ie(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: je(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const n = this._parse(e);
    if (Sr(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(e) {
    const n = this._parse(e);
    return Promise.resolve(n);
  }
  parse(e, n) {
    const s = this.safeParse(e, n);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(e, n) {
    var s;
    const i = {
      common: {
        issues: [],
        async: (s = n == null ? void 0 : n.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: je(e)
    }, a = this._parseSync({ data: e, path: i.path, parent: i });
    return gs(i, a);
  }
  async parseAsync(e, n) {
    const s = await this.safeParseAsync(e, n);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(e, n) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: je(e)
    }, i = this._parse({ data: e, path: s.path, parent: s }), a = await (Sr(i) ? i : Promise.resolve(i));
    return gs(s, a);
  }
  refine(e, n) {
    const s = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, a) => {
      const u = e(i), d = () => a.addIssue({
        code: E.custom,
        ...s(i)
      });
      return typeof Promise < "u" && u instanceof Promise ? u.then((l) => l ? !0 : (d(), !1)) : u ? !0 : (d(), !1);
    });
  }
  refinement(e, n) {
    return this._refinement((s, i) => e(s) ? !0 : (i.addIssue(typeof n == "function" ? n(s, i) : n), !1));
  }
  _refinement(e) {
    return new xe({
      schema: this,
      typeName: B.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Pe.create(this, this._def);
  }
  nullable() {
    return Ge.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return be.create(this, this._def);
  }
  promise() {
    return ct.create(this, this._def);
  }
  or(e) {
    return Ut.create([this, e], this._def);
  }
  and(e) {
    return $t.create(this, e, this._def);
  }
  transform(e) {
    return new xe({
      ...H(this._def),
      schema: this,
      typeName: B.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Qt({
      ...H(this._def),
      innerType: this,
      defaultValue: n,
      typeName: B.ZodDefault
    });
  }
  brand() {
    return new Si({
      typeName: B.ZodBranded,
      type: this,
      ...H(this._def)
    });
  }
  catch(e) {
    const n = typeof e == "function" ? e : () => e;
    return new Zr({
      ...H(this._def),
      innerType: this,
      catchValue: n,
      typeName: B.ZodCatch
    });
  }
  describe(e) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return Yt.create(this, e);
  }
  readonly() {
    return Rr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const qo = /^c[^\s-]{8,}$/i, Fo = /^[a-z][a-z0-9]*$/, Bo = /[0-9A-HJKMNP-TV-Z]{26}/, zo = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Qo = /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Ho = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, Wo = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Ko = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Go = (t) => t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Jo(t, e) {
  return !!((e === "v4" || !e) && Wo.test(t) || (e === "v6" || !e) && Ko.test(t));
}
class ye extends W {
  constructor() {
    super(...arguments), this._regex = (e, n, s) => this.refinement((i) => e.test(i), {
      validation: n,
      code: E.invalid_string,
      ...q.errToObj(s)
    }), this.nonempty = (e) => this.min(1, q.errToObj(e)), this.trim = () => new ye({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new ye({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new ye({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== A.string) {
      const a = this._getOrReturnCtx(e);
      return M(
        a,
        {
          code: E.invalid_type,
          expected: A.string,
          received: a.parsedType
        }
        //
      ), Q;
    }
    const s = new ie();
    let i;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (i = this._getOrReturnCtx(e, i), M(i, {
          code: E.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (i = this._getOrReturnCtx(e, i), M(i, {
          code: E.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), s.dirty());
      else if (a.kind === "length") {
        const u = e.data.length > a.value, d = e.data.length < a.value;
        (u || d) && (i = this._getOrReturnCtx(e, i), u ? M(i, {
          code: E.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : d && M(i, {
          code: E.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), s.dirty());
      } else if (a.kind === "email")
        Qo.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "email",
          code: E.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "emoji")
        Ho.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "emoji",
          code: E.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "uuid")
        zo.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "uuid",
          code: E.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid")
        qo.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "cuid",
          code: E.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "cuid2")
        Fo.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "cuid2",
          code: E.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "ulid")
        Bo.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "ulid",
          code: E.invalid_string,
          message: a.message
        }), s.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          i = this._getOrReturnCtx(e, i), M(i, {
            validation: "url",
            code: E.invalid_string,
            message: a.message
          }), s.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "regex",
          code: E.invalid_string,
          message: a.message
        }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (i = this._getOrReturnCtx(e, i), M(i, {
          code: E.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (i = this._getOrReturnCtx(e, i), M(i, {
          code: E.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (i = this._getOrReturnCtx(e, i), M(i, {
          code: E.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), s.dirty()) : a.kind === "datetime" ? Go(a).test(e.data) || (i = this._getOrReturnCtx(e, i), M(i, {
          code: E.invalid_string,
          validation: "datetime",
          message: a.message
        }), s.dirty()) : a.kind === "ip" ? Jo(e.data, a.version) || (i = this._getOrReturnCtx(e, i), M(i, {
          validation: "ip",
          code: E.invalid_string,
          message: a.message
        }), s.dirty()) : J.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _addCheck(e) {
    return new ye({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...q.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...q.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...q.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...q.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...q.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...q.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...q.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...q.errToObj(e) });
  }
  datetime(e) {
    var n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
      ...q.errToObj(e == null ? void 0 : e.message)
    });
  }
  regex(e, n) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...q.errToObj(n)
    });
  }
  includes(e, n) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: n == null ? void 0 : n.position,
      ...q.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(e, n) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...q.errToObj(n)
    });
  }
  endsWith(e, n) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...q.errToObj(n)
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...q.errToObj(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...q.errToObj(n)
    });
  }
  length(e, n) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...q.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get minLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
ye.create = (t) => {
  var e;
  return new ye({
    checks: [],
    typeName: B.ZodString,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...H(t)
  });
};
function Yo(t, e) {
  const n = (t.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, i = n > s ? n : s, a = parseInt(t.toFixed(i).replace(".", "")), u = parseInt(e.toFixed(i).replace(".", ""));
  return a % u / Math.pow(10, i);
}
class Le extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== A.number) {
      const a = this._getOrReturnCtx(e);
      return M(a, {
        code: E.invalid_type,
        expected: A.number,
        received: a.parsedType
      }), Q;
    }
    let s;
    const i = new ie();
    for (const a of this._def.checks)
      a.kind === "int" ? J.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), i.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? Yo(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.not_finite,
        message: a.message
      }), i.dirty()) : J.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, q.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, q.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, q.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, q.toString(n));
  }
  setLimit(e, n, s, i) {
    return new Le({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: s,
          message: q.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Le({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: q.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: q.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: q.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: q.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: q.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: q.toString(n)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: q.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: q.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: q.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && J.isInteger(e.value));
  }
  get isFinite() {
    let e = null, n = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (n === null || s.value > n) && (n = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(n) && Number.isFinite(e);
  }
}
Le.create = (t) => new Le({
  checks: [],
  typeName: B.ZodNumber,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...H(t)
});
class Ve extends W {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== A.bigint) {
      const a = this._getOrReturnCtx(e);
      return M(a, {
        code: E.invalid_type,
        expected: A.bigint,
        received: a.parsedType
      }), Q;
    }
    let s;
    const i = new ie();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), i.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), M(s, {
        code: E.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), i.dirty()) : J.assertNever(a);
    return { status: i.value, value: e.data };
  }
  gte(e, n) {
    return this.setLimit("min", e, !0, q.toString(n));
  }
  gt(e, n) {
    return this.setLimit("min", e, !1, q.toString(n));
  }
  lte(e, n) {
    return this.setLimit("max", e, !0, q.toString(n));
  }
  lt(e, n) {
    return this.setLimit("max", e, !1, q.toString(n));
  }
  setLimit(e, n, s, i) {
    return new Ve({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: n,
          inclusive: s,
          message: q.toString(i)
        }
      ]
    });
  }
  _addCheck(e) {
    return new Ve({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(e)
    });
  }
  multipleOf(e, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: q.toString(n)
    });
  }
  get minValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e;
  }
}
Ve.create = (t) => {
  var e;
  return new Ve({
    checks: [],
    typeName: B.ZodBigInt,
    coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
    ...H(t)
  });
};
class jt extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== A.boolean) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: E.invalid_type,
        expected: A.boolean,
        received: s.parsedType
      }), Q;
    }
    return oe(e.data);
  }
}
jt.create = (t) => new jt({
  typeName: B.ZodBoolean,
  coerce: (t == null ? void 0 : t.coerce) || !1,
  ...H(t)
});
class We extends W {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== A.date) {
      const a = this._getOrReturnCtx(e);
      return M(a, {
        code: E.invalid_type,
        expected: A.date,
        received: a.parsedType
      }), Q;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return M(a, {
        code: E.invalid_date
      }), Q;
    }
    const s = new ie();
    let i;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (i = this._getOrReturnCtx(e, i), M(i, {
        code: E.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (i = this._getOrReturnCtx(e, i), M(i, {
        code: E.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), s.dirty()) : J.assertNever(a);
    return {
      status: s.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new We({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, n) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: q.toString(n)
    });
  }
  max(e, n) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: q.toString(n)
    });
  }
  get minDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "min" && (e === null || n.value > e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const n of this._def.checks)
      n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    return e != null ? new Date(e) : null;
  }
}
We.create = (t) => new We({
  checks: [],
  coerce: (t == null ? void 0 : t.coerce) || !1,
  typeName: B.ZodDate,
  ...H(t)
});
class Or extends W {
  _parse(e) {
    if (this._getType(e) !== A.symbol) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: E.invalid_type,
        expected: A.symbol,
        received: s.parsedType
      }), Q;
    }
    return oe(e.data);
  }
}
Or.create = (t) => new Or({
  typeName: B.ZodSymbol,
  ...H(t)
});
class Lt extends W {
  _parse(e) {
    if (this._getType(e) !== A.undefined) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: E.invalid_type,
        expected: A.undefined,
        received: s.parsedType
      }), Q;
    }
    return oe(e.data);
  }
}
Lt.create = (t) => new Lt({
  typeName: B.ZodUndefined,
  ...H(t)
});
class Vt extends W {
  _parse(e) {
    if (this._getType(e) !== A.null) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: E.invalid_type,
        expected: A.null,
        received: s.parsedType
      }), Q;
    }
    return oe(e.data);
  }
}
Vt.create = (t) => new Vt({
  typeName: B.ZodNull,
  ...H(t)
});
class dt extends W {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return oe(e.data);
  }
}
dt.create = (t) => new dt({
  typeName: B.ZodAny,
  ...H(t)
});
class He extends W {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return oe(e.data);
  }
}
He.create = (t) => new He({
  typeName: B.ZodUnknown,
  ...H(t)
});
class Re extends W {
  _parse(e) {
    const n = this._getOrReturnCtx(e);
    return M(n, {
      code: E.invalid_type,
      expected: A.never,
      received: n.parsedType
    }), Q;
  }
}
Re.create = (t) => new Re({
  typeName: B.ZodNever,
  ...H(t)
});
class Er extends W {
  _parse(e) {
    if (this._getType(e) !== A.undefined) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: E.invalid_type,
        expected: A.void,
        received: s.parsedType
      }), Q;
    }
    return oe(e.data);
  }
}
Er.create = (t) => new Er({
  typeName: B.ZodVoid,
  ...H(t)
});
class be extends W {
  _parse(e) {
    const { ctx: n, status: s } = this._processInputParams(e), i = this._def;
    if (n.parsedType !== A.array)
      return M(n, {
        code: E.invalid_type,
        expected: A.array,
        received: n.parsedType
      }), Q;
    if (i.exactLength !== null) {
      const u = n.data.length > i.exactLength.value, d = n.data.length < i.exactLength.value;
      (u || d) && (M(n, {
        code: u ? E.too_big : E.too_small,
        minimum: d ? i.exactLength.value : void 0,
        maximum: u ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), s.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (M(n, {
      code: E.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), s.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (M(n, {
      code: E.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), s.dirty()), n.common.async)
      return Promise.all([...n.data].map((u, d) => i.type._parseAsync(new Se(n, u, n.path, d)))).then((u) => ie.mergeArray(s, u));
    const a = [...n.data].map((u, d) => i.type._parseSync(new Se(n, u, n.path, d)));
    return ie.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, n) {
    return new be({
      ...this._def,
      minLength: { value: e, message: q.toString(n) }
    });
  }
  max(e, n) {
    return new be({
      ...this._def,
      maxLength: { value: e, message: q.toString(n) }
    });
  }
  length(e, n) {
    return new be({
      ...this._def,
      exactLength: { value: e, message: q.toString(n) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
be.create = (t, e) => new be({
  type: t,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: B.ZodArray,
  ...H(e)
});
function rt(t) {
  if (t instanceof ee) {
    const e = {};
    for (const n in t.shape) {
      const s = t.shape[n];
      e[n] = Pe.create(rt(s));
    }
    return new ee({
      ...t._def,
      shape: () => e
    });
  } else
    return t instanceof be ? new be({
      ...t._def,
      type: rt(t.element)
    }) : t instanceof Pe ? Pe.create(rt(t.unwrap())) : t instanceof Ge ? Ge.create(rt(t.unwrap())) : t instanceof Oe ? Oe.create(t.items.map((e) => rt(e))) : t;
}
class ee extends W {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), n = J.objectKeys(e);
    return this._cached = { shape: e, keys: n };
  }
  _parse(e) {
    if (this._getType(e) !== A.object) {
      const h = this._getOrReturnCtx(e);
      return M(h, {
        code: E.invalid_type,
        expected: A.object,
        received: h.parsedType
      }), Q;
    }
    const { status: s, ctx: i } = this._processInputParams(e), { shape: a, keys: u } = this._getCached(), d = [];
    if (!(this._def.catchall instanceof Re && this._def.unknownKeys === "strip"))
      for (const h in i.data)
        u.includes(h) || d.push(h);
    const l = [];
    for (const h of u) {
      const v = a[h], m = i.data[h];
      l.push({
        key: { status: "valid", value: h },
        value: v._parse(new Se(i, m, i.path, h)),
        alwaysSet: h in i.data
      });
    }
    if (this._def.catchall instanceof Re) {
      const h = this._def.unknownKeys;
      if (h === "passthrough")
        for (const v of d)
          l.push({
            key: { status: "valid", value: v },
            value: { status: "valid", value: i.data[v] }
          });
      else if (h === "strict")
        d.length > 0 && (M(i, {
          code: E.unrecognized_keys,
          keys: d
        }), s.dirty());
      else if (h !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const h = this._def.catchall;
      for (const v of d) {
        const m = i.data[v];
        l.push({
          key: { status: "valid", value: v },
          value: h._parse(
            new Se(i, m, i.path, v)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: v in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const h = [];
      for (const v of l) {
        const m = await v.key;
        h.push({
          key: m,
          value: await v.value,
          alwaysSet: v.alwaysSet
        });
      }
      return h;
    }).then((h) => ie.mergeObjectSync(s, h)) : ie.mergeObjectSync(s, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return q.errToObj, new ee({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (n, s) => {
          var i, a, u, d;
          const l = (u = (a = (i = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(i, n, s).message) !== null && u !== void 0 ? u : s.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (d = q.errToObj(e).message) !== null && d !== void 0 ? d : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new ee({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ee({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new ee({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new ee({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: B.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, n) {
    return this.augment({ [e]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new ee({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const n = {};
    return J.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (n[s] = this.shape[s]);
    }), new ee({
      ...this._def,
      shape: () => n
    });
  }
  omit(e) {
    const n = {};
    return J.objectKeys(this.shape).forEach((s) => {
      e[s] || (n[s] = this.shape[s]);
    }), new ee({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return rt(this);
  }
  partial(e) {
    const n = {};
    return J.objectKeys(this.shape).forEach((s) => {
      const i = this.shape[s];
      e && !e[s] ? n[s] = i : n[s] = i.optional();
    }), new ee({
      ...this._def,
      shape: () => n
    });
  }
  required(e) {
    const n = {};
    return J.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s])
        n[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof Pe; )
          a = a._def.innerType;
        n[s] = a;
      }
    }), new ee({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return Ci(J.objectKeys(this.shape));
  }
}
ee.create = (t, e) => new ee({
  shape: () => t,
  unknownKeys: "strip",
  catchall: Re.create(),
  typeName: B.ZodObject,
  ...H(e)
});
ee.strictCreate = (t, e) => new ee({
  shape: () => t,
  unknownKeys: "strict",
  catchall: Re.create(),
  typeName: B.ZodObject,
  ...H(e)
});
ee.lazycreate = (t, e) => new ee({
  shape: t,
  unknownKeys: "strip",
  catchall: Re.create(),
  typeName: B.ZodObject,
  ...H(e)
});
class Ut extends W {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), s = this._def.options;
    function i(a) {
      for (const d of a)
        if (d.result.status === "valid")
          return d.result;
      for (const d of a)
        if (d.result.status === "dirty")
          return n.common.issues.push(...d.ctx.common.issues), d.result;
      const u = a.map((d) => new ge(d.ctx.common.issues));
      return M(n, {
        code: E.invalid_union,
        unionErrors: u
      }), Q;
    }
    if (n.common.async)
      return Promise.all(s.map(async (a) => {
        const u = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: u
          }),
          ctx: u
        };
      })).then(i);
    {
      let a;
      const u = [];
      for (const l of s) {
        const h = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, v = l._parseSync({
          data: n.data,
          path: n.path,
          parent: h
        });
        if (v.status === "valid")
          return v;
        v.status === "dirty" && !a && (a = { result: v, ctx: h }), h.common.issues.length && u.push(h.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const d = u.map((l) => new ge(l));
      return M(n, {
        code: E.invalid_union,
        unionErrors: d
      }), Q;
    }
  }
  get options() {
    return this._def.options;
  }
}
Ut.create = (t, e) => new Ut({
  options: t,
  typeName: B.ZodUnion,
  ...H(e)
});
const vr = (t) => t instanceof Ft ? vr(t.schema) : t instanceof xe ? vr(t.innerType()) : t instanceof Bt ? [t.value] : t instanceof Ue ? t.options : t instanceof zt ? Object.keys(t.enum) : t instanceof Qt ? vr(t._def.innerType) : t instanceof Lt ? [void 0] : t instanceof Vt ? [null] : null;
class Hr extends W {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== A.object)
      return M(n, {
        code: E.invalid_type,
        expected: A.object,
        received: n.parsedType
      }), Q;
    const s = this.discriminator, i = n.data[s], a = this.optionsMap.get(i);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (M(n, {
      code: E.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), Q);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, n, s) {
    const i = /* @__PURE__ */ new Map();
    for (const a of n) {
      const u = vr(a.shape[e]);
      if (!u)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const d of u) {
        if (i.has(d))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(d)}`);
        i.set(d, a);
      }
    }
    return new Hr({
      typeName: B.ZodDiscriminatedUnion,
      discriminator: e,
      options: n,
      optionsMap: i,
      ...H(s)
    });
  }
}
function kn(t, e) {
  const n = je(t), s = je(e);
  if (t === e)
    return { valid: !0, data: t };
  if (n === A.object && s === A.object) {
    const i = J.objectKeys(e), a = J.objectKeys(t).filter((d) => i.indexOf(d) !== -1), u = { ...t, ...e };
    for (const d of a) {
      const l = kn(t[d], e[d]);
      if (!l.valid)
        return { valid: !1 };
      u[d] = l.data;
    }
    return { valid: !0, data: u };
  } else if (n === A.array && s === A.array) {
    if (t.length !== e.length)
      return { valid: !1 };
    const i = [];
    for (let a = 0; a < t.length; a++) {
      const u = t[a], d = e[a], l = kn(u, d);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else
    return n === A.date && s === A.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
class $t extends W {
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e), i = (a, u) => {
      if (xn(a) || xn(u))
        return Q;
      const d = kn(a.value, u.value);
      return d.valid ? ((wn(a) || wn(u)) && n.dirty(), { status: n.value, value: d.data }) : (M(s, {
        code: E.invalid_intersection_types
      }), Q);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([a, u]) => i(a, u)) : i(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
$t.create = (t, e, n) => new $t({
  left: t,
  right: e,
  typeName: B.ZodIntersection,
  ...H(n)
});
class Oe extends W {
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== A.array)
      return M(s, {
        code: E.invalid_type,
        expected: A.array,
        received: s.parsedType
      }), Q;
    if (s.data.length < this._def.items.length)
      return M(s, {
        code: E.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Q;
    !this._def.rest && s.data.length > this._def.items.length && (M(s, {
      code: E.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...s.data].map((u, d) => {
      const l = this._def.items[d] || this._def.rest;
      return l ? l._parse(new Se(s, u, s.path, d)) : null;
    }).filter((u) => !!u);
    return s.common.async ? Promise.all(a).then((u) => ie.mergeArray(n, u)) : ie.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Oe({
      ...this._def,
      rest: e
    });
  }
}
Oe.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Oe({
    items: t,
    typeName: B.ZodTuple,
    rest: null,
    ...H(e)
  });
};
class qt extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== A.object)
      return M(s, {
        code: E.invalid_type,
        expected: A.object,
        received: s.parsedType
      }), Q;
    const i = [], a = this._def.keyType, u = this._def.valueType;
    for (const d in s.data)
      i.push({
        key: a._parse(new Se(s, d, s.path, d)),
        value: u._parse(new Se(s, s.data[d], s.path, d))
      });
    return s.common.async ? ie.mergeObjectAsync(n, i) : ie.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, n, s) {
    return n instanceof W ? new qt({
      keyType: e,
      valueType: n,
      typeName: B.ZodRecord,
      ...H(s)
    }) : new qt({
      keyType: ye.create(),
      valueType: e,
      typeName: B.ZodRecord,
      ...H(n)
    });
  }
}
class Ir extends W {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== A.map)
      return M(s, {
        code: E.invalid_type,
        expected: A.map,
        received: s.parsedType
      }), Q;
    const i = this._def.keyType, a = this._def.valueType, u = [...s.data.entries()].map(([d, l], h) => ({
      key: i._parse(new Se(s, d, s.path, [h, "key"])),
      value: a._parse(new Se(s, l, s.path, [h, "value"]))
    }));
    if (s.common.async) {
      const d = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of u) {
          const h = await l.key, v = await l.value;
          if (h.status === "aborted" || v.status === "aborted")
            return Q;
          (h.status === "dirty" || v.status === "dirty") && n.dirty(), d.set(h.value, v.value);
        }
        return { status: n.value, value: d };
      });
    } else {
      const d = /* @__PURE__ */ new Map();
      for (const l of u) {
        const h = l.key, v = l.value;
        if (h.status === "aborted" || v.status === "aborted")
          return Q;
        (h.status === "dirty" || v.status === "dirty") && n.dirty(), d.set(h.value, v.value);
      }
      return { status: n.value, value: d };
    }
  }
}
Ir.create = (t, e, n) => new Ir({
  valueType: e,
  keyType: t,
  typeName: B.ZodMap,
  ...H(n)
});
class Ke extends W {
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== A.set)
      return M(s, {
        code: E.invalid_type,
        expected: A.set,
        received: s.parsedType
      }), Q;
    const i = this._def;
    i.minSize !== null && s.data.size < i.minSize.value && (M(s, {
      code: E.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && s.data.size > i.maxSize.value && (M(s, {
      code: E.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function u(l) {
      const h = /* @__PURE__ */ new Set();
      for (const v of l) {
        if (v.status === "aborted")
          return Q;
        v.status === "dirty" && n.dirty(), h.add(v.value);
      }
      return { status: n.value, value: h };
    }
    const d = [...s.data.values()].map((l, h) => a._parse(new Se(s, l, s.path, h)));
    return s.common.async ? Promise.all(d).then((l) => u(l)) : u(d);
  }
  min(e, n) {
    return new Ke({
      ...this._def,
      minSize: { value: e, message: q.toString(n) }
    });
  }
  max(e, n) {
    return new Ke({
      ...this._def,
      maxSize: { value: e, message: q.toString(n) }
    });
  }
  size(e, n) {
    return this.min(e, n).max(e, n);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ke.create = (t, e) => new Ke({
  valueType: t,
  minSize: null,
  maxSize: null,
  typeName: B.ZodSet,
  ...H(e)
});
class at extends W {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== A.function)
      return M(n, {
        code: E.invalid_type,
        expected: A.function,
        received: n.parsedType
      }), Q;
    function s(d, l) {
      return Cr({
        data: d,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Tr(),
          Mt
        ].filter((h) => !!h),
        issueData: {
          code: E.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(d, l) {
      return Cr({
        data: d,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Tr(),
          Mt
        ].filter((h) => !!h),
        issueData: {
          code: E.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, u = n.data;
    if (this._def.returns instanceof ct) {
      const d = this;
      return oe(async function(...l) {
        const h = new ge([]), v = await d._def.args.parseAsync(l, a).catch((x) => {
          throw h.addIssue(s(l, x)), h;
        }), m = await Reflect.apply(u, this, v);
        return await d._def.returns._def.type.parseAsync(m, a).catch((x) => {
          throw h.addIssue(i(m, x)), h;
        });
      });
    } else {
      const d = this;
      return oe(function(...l) {
        const h = d._def.args.safeParse(l, a);
        if (!h.success)
          throw new ge([s(l, h.error)]);
        const v = Reflect.apply(u, this, h.data), m = d._def.returns.safeParse(v, a);
        if (!m.success)
          throw new ge([i(v, m.error)]);
        return m.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new at({
      ...this._def,
      args: Oe.create(e).rest(He.create())
    });
  }
  returns(e) {
    return new at({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, n, s) {
    return new at({
      args: e || Oe.create([]).rest(He.create()),
      returns: n || He.create(),
      typeName: B.ZodFunction,
      ...H(s)
    });
  }
}
class Ft extends W {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Ft.create = (t, e) => new Ft({
  getter: t,
  typeName: B.ZodLazy,
  ...H(e)
});
class Bt extends W {
  _parse(e) {
    if (e.data !== this._def.value) {
      const n = this._getOrReturnCtx(e);
      return M(n, {
        received: n.data,
        code: E.invalid_literal,
        expected: this._def.value
      }), Q;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Bt.create = (t, e) => new Bt({
  value: t,
  typeName: B.ZodLiteral,
  ...H(e)
});
function Ci(t, e) {
  return new Ue({
    values: t,
    typeName: B.ZodEnum,
    ...H(e)
  });
}
class Ue extends W {
  _parse(e) {
    if (typeof e.data != "string") {
      const n = this._getOrReturnCtx(e), s = this._def.values;
      return M(n, {
        expected: J.joinValues(s),
        received: n.parsedType,
        code: E.invalid_type
      }), Q;
    }
    if (this._def.values.indexOf(e.data) === -1) {
      const n = this._getOrReturnCtx(e), s = this._def.values;
      return M(n, {
        received: n.data,
        code: E.invalid_enum_value,
        options: s
      }), Q;
    }
    return oe(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Values() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  get Enum() {
    const e = {};
    for (const n of this._def.values)
      e[n] = n;
    return e;
  }
  extract(e) {
    return Ue.create(e);
  }
  exclude(e) {
    return Ue.create(this.options.filter((n) => !e.includes(n)));
  }
}
Ue.create = Ci;
class zt extends W {
  _parse(e) {
    const n = J.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== A.string && s.parsedType !== A.number) {
      const i = J.objectValues(n);
      return M(s, {
        expected: J.joinValues(i),
        received: s.parsedType,
        code: E.invalid_type
      }), Q;
    }
    if (n.indexOf(e.data) === -1) {
      const i = J.objectValues(n);
      return M(s, {
        received: s.data,
        code: E.invalid_enum_value,
        options: i
      }), Q;
    }
    return oe(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
zt.create = (t, e) => new zt({
  values: t,
  typeName: B.ZodNativeEnum,
  ...H(e)
});
class ct extends W {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    if (n.parsedType !== A.promise && n.common.async === !1)
      return M(n, {
        code: E.invalid_type,
        expected: A.promise,
        received: n.parsedType
      }), Q;
    const s = n.parsedType === A.promise ? n.data : Promise.resolve(n.data);
    return oe(s.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
ct.create = (t, e) => new ct({
  type: t,
  typeName: B.ZodPromise,
  ...H(e)
});
class xe extends W {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === B.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e), i = this._def.effect || null, a = {
      addIssue: (u) => {
        M(s, u), u.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), i.type === "preprocess") {
      const u = i.transform(s.data, a);
      return s.common.issues.length ? {
        status: "dirty",
        value: s.data
      } : s.common.async ? Promise.resolve(u).then((d) => this._def.schema._parseAsync({
        data: d,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: u,
        path: s.path,
        parent: s
      });
    }
    if (i.type === "refinement") {
      const u = (d) => {
        const l = i.refinement(d, a);
        if (s.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return d;
      };
      if (s.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return d.status === "aborted" ? Q : (d.status === "dirty" && n.dirty(), u(d.value), { status: n.value, value: d.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((d) => d.status === "aborted" ? Q : (d.status === "dirty" && n.dirty(), u(d.value).then(() => ({ status: n.value, value: d.value }))));
    }
    if (i.type === "transform")
      if (s.common.async === !1) {
        const u = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!Dt(u))
          return u;
        const d = i.transform(u.value, a);
        if (d instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: d };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((u) => Dt(u) ? Promise.resolve(i.transform(u.value, a)).then((d) => ({ status: n.value, value: d })) : u);
    J.assertNever(i);
  }
}
xe.create = (t, e, n) => new xe({
  schema: t,
  typeName: B.ZodEffects,
  effect: e,
  ...H(n)
});
xe.createWithPreprocess = (t, e, n) => new xe({
  schema: e,
  effect: { type: "preprocess", transform: t },
  typeName: B.ZodEffects,
  ...H(n)
});
class Pe extends W {
  _parse(e) {
    return this._getType(e) === A.undefined ? oe(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pe.create = (t, e) => new Pe({
  innerType: t,
  typeName: B.ZodOptional,
  ...H(e)
});
class Ge extends W {
  _parse(e) {
    return this._getType(e) === A.null ? oe(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ge.create = (t, e) => new Ge({
  innerType: t,
  typeName: B.ZodNullable,
  ...H(e)
});
class Qt extends W {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e);
    let s = n.data;
    return n.parsedType === A.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Qt.create = (t, e) => new Qt({
  innerType: t,
  typeName: B.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...H(e)
});
class Zr extends W {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), s = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return Sr(i) ? i.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new ge(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new ge(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Zr.create = (t, e) => new Zr({
  innerType: t,
  typeName: B.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...H(e)
});
class Pr extends W {
  _parse(e) {
    if (this._getType(e) !== A.nan) {
      const s = this._getOrReturnCtx(e);
      return M(s, {
        code: E.invalid_type,
        expected: A.nan,
        received: s.parsedType
      }), Q;
    }
    return { status: "valid", value: e.data };
  }
}
Pr.create = (t) => new Pr({
  typeName: B.ZodNaN,
  ...H(t)
});
const Xo = Symbol("zod_brand");
class Si extends W {
  _parse(e) {
    const { ctx: n } = this._processInputParams(e), s = n.data;
    return this._def.type._parse({
      data: s,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Yt extends W {
  _parse(e) {
    const { status: n, ctx: s } = this._processInputParams(e);
    if (s.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? Q : a.status === "dirty" ? (n.dirty(), Ti(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return i.status === "aborted" ? Q : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(e, n) {
    return new Yt({
      in: e,
      out: n,
      typeName: B.ZodPipeline
    });
  }
}
class Rr extends W {
  _parse(e) {
    const n = this._def.innerType._parse(e);
    return Dt(n) && (n.value = Object.freeze(n.value)), n;
  }
}
Rr.create = (t, e) => new Rr({
  innerType: t,
  typeName: B.ZodReadonly,
  ...H(e)
});
const Oi = (t, e = {}, n) => t ? dt.create().superRefine((s, i) => {
  var a, u;
  if (!t(s)) {
    const d = typeof e == "function" ? e(s) : typeof e == "string" ? { message: e } : e, l = (u = (a = d.fatal) !== null && a !== void 0 ? a : n) !== null && u !== void 0 ? u : !0, h = typeof d == "string" ? { message: d } : d;
    i.addIssue({ code: "custom", ...h, fatal: l });
  }
}) : dt.create(), eu = {
  object: ee.lazycreate
};
var B;
(function(t) {
  t.ZodString = "ZodString", t.ZodNumber = "ZodNumber", t.ZodNaN = "ZodNaN", t.ZodBigInt = "ZodBigInt", t.ZodBoolean = "ZodBoolean", t.ZodDate = "ZodDate", t.ZodSymbol = "ZodSymbol", t.ZodUndefined = "ZodUndefined", t.ZodNull = "ZodNull", t.ZodAny = "ZodAny", t.ZodUnknown = "ZodUnknown", t.ZodNever = "ZodNever", t.ZodVoid = "ZodVoid", t.ZodArray = "ZodArray", t.ZodObject = "ZodObject", t.ZodUnion = "ZodUnion", t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", t.ZodIntersection = "ZodIntersection", t.ZodTuple = "ZodTuple", t.ZodRecord = "ZodRecord", t.ZodMap = "ZodMap", t.ZodSet = "ZodSet", t.ZodFunction = "ZodFunction", t.ZodLazy = "ZodLazy", t.ZodLiteral = "ZodLiteral", t.ZodEnum = "ZodEnum", t.ZodEffects = "ZodEffects", t.ZodNativeEnum = "ZodNativeEnum", t.ZodOptional = "ZodOptional", t.ZodNullable = "ZodNullable", t.ZodDefault = "ZodDefault", t.ZodCatch = "ZodCatch", t.ZodPromise = "ZodPromise", t.ZodBranded = "ZodBranded", t.ZodPipeline = "ZodPipeline", t.ZodReadonly = "ZodReadonly";
})(B || (B = {}));
const tu = (t, e = {
  message: `Input not instance of ${t.name}`
}) => Oi((n) => n instanceof t, e), Ei = ye.create, Ii = Le.create, ru = Pr.create, nu = Ve.create, Zi = jt.create, su = We.create, iu = Or.create, au = Lt.create, ou = Vt.create, uu = dt.create, du = He.create, cu = Re.create, lu = Er.create, fu = be.create, hu = ee.create, pu = ee.strictCreate, mu = Ut.create, _u = Hr.create, yu = $t.create, vu = Oe.create, gu = qt.create, bu = Ir.create, xu = Ke.create, wu = at.create, ku = Ft.create, Tu = Bt.create, Cu = Ue.create, Su = zt.create, Ou = ct.create, bs = xe.create, Eu = Pe.create, Iu = Ge.create, Zu = xe.createWithPreprocess, Pu = Yt.create, Ru = () => Ei().optional(), Nu = () => Ii().optional(), Au = () => Zi().optional(), Mu = {
  string: (t) => ye.create({ ...t, coerce: !0 }),
  number: (t) => Le.create({ ...t, coerce: !0 }),
  boolean: (t) => jt.create({
    ...t,
    coerce: !0
  }),
  bigint: (t) => Ve.create({ ...t, coerce: !0 }),
  date: (t) => We.create({ ...t, coerce: !0 })
}, Du = Q;
var re = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Mt,
  setErrorMap: Uo,
  getErrorMap: Tr,
  makeIssue: Cr,
  EMPTY_PATH: $o,
  addIssueToContext: M,
  ParseStatus: ie,
  INVALID: Q,
  DIRTY: Ti,
  OK: oe,
  isAborted: xn,
  isDirty: wn,
  isValid: Dt,
  isAsync: Sr,
  get util() {
    return J;
  },
  get objectUtil() {
    return bn;
  },
  ZodParsedType: A,
  getParsedType: je,
  ZodType: W,
  ZodString: ye,
  ZodNumber: Le,
  ZodBigInt: Ve,
  ZodBoolean: jt,
  ZodDate: We,
  ZodSymbol: Or,
  ZodUndefined: Lt,
  ZodNull: Vt,
  ZodAny: dt,
  ZodUnknown: He,
  ZodNever: Re,
  ZodVoid: Er,
  ZodArray: be,
  ZodObject: ee,
  ZodUnion: Ut,
  ZodDiscriminatedUnion: Hr,
  ZodIntersection: $t,
  ZodTuple: Oe,
  ZodRecord: qt,
  ZodMap: Ir,
  ZodSet: Ke,
  ZodFunction: at,
  ZodLazy: Ft,
  ZodLiteral: Bt,
  ZodEnum: Ue,
  ZodNativeEnum: zt,
  ZodPromise: ct,
  ZodEffects: xe,
  ZodTransformer: xe,
  ZodOptional: Pe,
  ZodNullable: Ge,
  ZodDefault: Qt,
  ZodCatch: Zr,
  ZodNaN: Pr,
  BRAND: Xo,
  ZodBranded: Si,
  ZodPipeline: Yt,
  ZodReadonly: Rr,
  custom: Oi,
  Schema: W,
  ZodSchema: W,
  late: eu,
  get ZodFirstPartyTypeKind() {
    return B;
  },
  coerce: Mu,
  any: uu,
  array: fu,
  bigint: nu,
  boolean: Zi,
  date: su,
  discriminatedUnion: _u,
  effect: bs,
  enum: Cu,
  function: wu,
  instanceof: tu,
  intersection: yu,
  lazy: ku,
  literal: Tu,
  map: bu,
  nan: ru,
  nativeEnum: Su,
  never: cu,
  null: ou,
  nullable: Iu,
  number: Ii,
  object: hu,
  oboolean: Au,
  onumber: Nu,
  optional: Eu,
  ostring: Ru,
  pipeline: Pu,
  preprocess: Zu,
  promise: Ou,
  record: gu,
  set: xu,
  strictObject: pu,
  string: Ei,
  symbol: iu,
  transformer: bs,
  tuple: vu,
  undefined: au,
  union: mu,
  unknown: du,
  void: lu,
  NEVER: Du,
  ZodIssueCode: E,
  quotelessJson: Vo,
  ZodError: ge
});
const ju = re.object({
  variableName: re.string(),
  rules: re.array(re.union([re.object({
    type: re.literal("any-value"),
    expression: re.string(),
    greaterThan: re.number().optional(),
    lessThan: re.number().optional(),
    value: re.string()
  }), re.object({
    type: re.literal("color-gradient"),
    expression: re.string(),
    scale: re.array(re.object({
      stateValue: re.number(),
      color: re.string()
    }))
  })]))
}), Lu = re.object({
  type: re.literal("custom:conditional-formatting"),
  source: re.string(),
  conditionalFormatting: re.array(ju)
});
class Xt {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    const n = {
      listener: e
    };
    return this.listeners.add(n), this.onSubscribe(), () => {
      this.listeners.delete(n), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}
const Ht = typeof window > "u" || "Deno" in window;
function fe() {
}
function Vu(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Tn(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Pi(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Pt(t, e, n) {
  return Wr(t) ? typeof e == "function" ? {
    ...n,
    queryKey: t,
    queryFn: e
  } : {
    ...e,
    queryKey: t
  } : t;
}
function De(t, e, n) {
  return Wr(t) ? [{
    ...e,
    queryKey: t
  }, n] : [t || {}, e];
}
function xs(t, e) {
  const {
    type: n = "all",
    exact: s,
    fetchStatus: i,
    predicate: a,
    queryKey: u,
    stale: d
  } = t;
  if (Wr(u)) {
    if (s) {
      if (e.queryHash !== Ln(u, e.options))
        return !1;
    } else if (!nt(e.queryKey, u))
      return !1;
  }
  if (n !== "all") {
    const l = e.isActive();
    if (n === "active" && !l || n === "inactive" && l)
      return !1;
  }
  return !(typeof d == "boolean" && e.isStale() !== d || typeof i < "u" && i !== e.state.fetchStatus || a && !a(e));
}
function ws(t, e) {
  const {
    exact: n,
    fetching: s,
    predicate: i,
    mutationKey: a
  } = t;
  if (Wr(a)) {
    if (!e.options.mutationKey)
      return !1;
    if (n) {
      if (Qe(e.options.mutationKey) !== Qe(a))
        return !1;
    } else if (!nt(e.options.mutationKey, a))
      return !1;
  }
  return !(typeof s == "boolean" && e.state.status === "loading" !== s || i && !i(e));
}
function Ln(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || Qe)(t);
}
function Qe(t) {
  return JSON.stringify(t, (e, n) => Sn(n) ? Object.keys(n).sort().reduce((s, i) => (s[i] = n[i], s), {}) : n);
}
function nt(t, e) {
  return Ri(t, e);
}
function Ri(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((n) => !Ri(t[n], e[n])) : !1;
}
function Ni(t, e) {
  if (t === e)
    return t;
  const n = ks(t) && ks(e);
  if (n || Sn(t) && Sn(e)) {
    const s = n ? t.length : Object.keys(t).length, i = n ? e : Object.keys(e), a = i.length, u = n ? [] : {};
    let d = 0;
    for (let l = 0; l < a; l++) {
      const h = n ? l : i[l];
      u[h] = Ni(t[h], e[h]), u[h] === t[h] && d++;
    }
    return s === a && d === s ? t : u;
  }
  return e;
}
function Cn(t, e) {
  if (t && !e || e && !t)
    return !1;
  for (const n in t)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function ks(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Sn(t) {
  if (!Ts(t))
    return !1;
  const e = t.constructor;
  if (typeof e > "u")
    return !0;
  const n = e.prototype;
  return !(!Ts(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Ts(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Wr(t) {
  return Array.isArray(t);
}
function Ai(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Cs(t) {
  Ai(0).then(t);
}
function Uu() {
  if (typeof AbortController == "function")
    return new AbortController();
}
function On(t, e, n) {
  return n.isDataEqual != null && n.isDataEqual(t, e) ? t : typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? Ni(t, e) : e;
}
class $u extends Xt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Ht && window.addEventListener) {
        const n = () => e();
        return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1), () => {
          window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n);
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var n;
    this.setup = e, (n = this.cleanup) == null || n.call(this), this.cleanup = e((s) => {
      typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
    });
  }
  setFocused(e) {
    this.focused !== e && (this.focused = e, this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Nr = new $u(), Ss = ["online", "offline"];
class qu extends Xt {
  constructor() {
    super(), this.setup = (e) => {
      if (!Ht && window.addEventListener) {
        const n = () => e();
        return Ss.forEach((s) => {
          window.addEventListener(s, n, !1);
        }), () => {
          Ss.forEach((s) => {
            window.removeEventListener(s, n);
          });
        };
      }
    };
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var e;
      (e = this.cleanup) == null || e.call(this), this.cleanup = void 0;
    }
  }
  setEventListener(e) {
    var n;
    this.setup = e, (n = this.cleanup) == null || n.call(this), this.cleanup = e((s) => {
      typeof s == "boolean" ? this.setOnline(s) : this.onOnline();
    });
  }
  setOnline(e) {
    this.online !== e && (this.online = e, this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({
      listener: e
    }) => {
      e();
    });
  }
  isOnline() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }
}
const Ar = new qu();
function Fu(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Kr(t) {
  return (t ?? "online") === "online" ? Ar.isOnline() : !0;
}
class Mi {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
}
function gr(t) {
  return t instanceof Mi;
}
function Di(t) {
  let e = !1, n = 0, s = !1, i, a, u;
  const d = new Promise((O, Z) => {
    a = O, u = Z;
  }), l = (O) => {
    s || (x(new Mi(O)), t.abort == null || t.abort());
  }, h = () => {
    e = !0;
  }, v = () => {
    e = !1;
  }, m = () => !Nr.isFocused() || t.networkMode !== "always" && !Ar.isOnline(), k = (O) => {
    s || (s = !0, t.onSuccess == null || t.onSuccess(O), i == null || i(), a(O));
  }, x = (O) => {
    s || (s = !0, t.onError == null || t.onError(O), i == null || i(), u(O));
  }, w = () => new Promise((O) => {
    i = (Z) => {
      const D = s || !m();
      return D && O(Z), D;
    }, t.onPause == null || t.onPause();
  }).then(() => {
    i = void 0, s || t.onContinue == null || t.onContinue();
  }), C = () => {
    if (s)
      return;
    let O;
    try {
      O = t.fn();
    } catch (Z) {
      O = Promise.reject(Z);
    }
    Promise.resolve(O).then(k).catch((Z) => {
      var D, N;
      if (s)
        return;
      const I = (D = t.retry) != null ? D : 3, U = (N = t.retryDelay) != null ? N : Fu, P = typeof U == "function" ? U(n, Z) : U, R = I === !0 || typeof I == "number" && n < I || typeof I == "function" && I(n, Z);
      if (e || !R) {
        x(Z);
        return;
      }
      n++, t.onFail == null || t.onFail(n, Z), Ai(P).then(() => {
        if (m())
          return w();
      }).then(() => {
        e ? x(Z) : C();
      });
    });
  };
  return Kr(t.networkMode) ? C() : w().then(C), {
    promise: d,
    cancel: l,
    continue: () => (i == null ? void 0 : i()) ? d : Promise.resolve(),
    cancelRetry: h,
    continueRetry: v
  };
}
const Vn = console;
function Bu() {
  let t = [], e = 0, n = (v) => {
    v();
  }, s = (v) => {
    v();
  };
  const i = (v) => {
    let m;
    e++;
    try {
      m = v();
    } finally {
      e--, e || d();
    }
    return m;
  }, a = (v) => {
    e ? t.push(v) : Cs(() => {
      n(v);
    });
  }, u = (v) => (...m) => {
    a(() => {
      v(...m);
    });
  }, d = () => {
    const v = t;
    t = [], v.length && Cs(() => {
      s(() => {
        v.forEach((m) => {
          n(m);
        });
      });
    });
  };
  return {
    batch: i,
    batchCalls: u,
    schedule: a,
    setNotifyFunction: (v) => {
      n = v;
    },
    setBatchNotifyFunction: (v) => {
      s = v;
    }
  };
}
const ne = Bu();
class ji {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Tn(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
      this.optionalRemove();
    }, this.cacheTime));
  }
  updateCacheTime(e) {
    this.cacheTime = Math.max(this.cacheTime || 0, e ?? (Ht ? 1 / 0 : 5 * 60 * 1e3));
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }
}
class zu extends ji {
  constructor(e) {
    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || Vn, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || Qu(this.options), this.state = this.initialState, this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this);
  }
  setData(e, n) {
    const s = On(this.state.data, e, this.options);
    return this.dispatch({
      data: s,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), s;
  }
  setState(e, n) {
    this.dispatch({
      type: "setState",
      state: e,
      setStateOptions: n
    });
  }
  cancel(e) {
    var n;
    const s = this.promise;
    return (n = this.retryer) == null || n.cancel(e), s ? s.then(fe).catch(fe) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({
      silent: !0
    });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((e) => e.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e) => e.getCurrentResult().isStale);
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !Pi(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var e;
    const n = this.observers.find((s) => s.shouldFetchOnWindowFocus());
    n && n.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  onOnline() {
    var e;
    const n = this.observers.find((s) => s.shouldFetchOnReconnect());
    n && n.refetch({
      cancelRefetch: !1
    }), (e = this.retryer) == null || e.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((n) => n !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: e
    }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }
  fetch(e, n) {
    var s, i;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var a;
        return (a = this.retryer) == null || a.continueRetry(), this.promise;
      }
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const x = this.observers.find((w) => w.options.queryFn);
      x && this.setOptions(x.options);
    }
    Array.isArray(this.options.queryKey) || {}.NODE_ENV !== "production" && this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
    const u = Uu(), d = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    }, l = (x) => {
      Object.defineProperty(x, "signal", {
        enumerable: !0,
        get: () => {
          if (u)
            return this.abortSignalConsumed = !0, u.signal;
        }
      });
    };
    l(d);
    const h = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(d)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), v = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: h
    };
    if (l(v), (s = this.options.behavior) == null || s.onFetch(v), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = v.fetchOptions) == null ? void 0 : i.meta)) {
      var m;
      this.dispatch({
        type: "fetch",
        meta: (m = v.fetchOptions) == null ? void 0 : m.meta
      });
    }
    const k = (x) => {
      if (gr(x) && x.silent || this.dispatch({
        type: "error",
        error: x
      }), !gr(x)) {
        var w, C, O, Z;
        (w = (C = this.cache.config).onError) == null || w.call(C, x, this), (O = (Z = this.cache.config).onSettled) == null || O.call(Z, this.state.data, x, this), {}.NODE_ENV !== "production" && this.logger.error(x);
      }
      this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return this.retryer = Di({
      fn: v.fetchFn,
      abort: u == null ? void 0 : u.abort.bind(u),
      onSuccess: (x) => {
        var w, C, O, Z;
        if (typeof x > "u") {
          ({}).NODE_ENV !== "production" && this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash), k(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(x), (w = (C = this.cache.config).onSuccess) == null || w.call(C, x, this), (O = (Z = this.cache.config).onSettled) == null || O.call(Z, x, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: k,
      onFail: (x, w) => {
        this.dispatch({
          type: "failed",
          failureCount: x,
          error: w
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: v.options.retry,
      retryDelay: v.options.retryDelay,
      networkMode: v.options.networkMode
    }), this.promise = this.retryer.promise, this.promise;
  }
  dispatch(e) {
    const n = (s) => {
      var i, a;
      switch (e.type) {
        case "failed":
          return {
            ...s,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...s,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...s,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...s,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (i = e.meta) != null ? i : null,
            fetchStatus: Kr(this.options.networkMode) ? "fetching" : "paused",
            ...!s.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...s,
            data: e.data,
            dataUpdateCount: s.dataUpdateCount + 1,
            dataUpdatedAt: (a = e.dataUpdatedAt) != null ? a : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const u = e.error;
          return gr(u) && u.revert && this.revertState ? {
            ...this.revertState
          } : {
            ...s,
            error: u,
            errorUpdateCount: s.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: s.fetchFailureCount + 1,
            fetchFailureReason: u,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...s,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...s,
            ...e.state
          };
      }
    };
    this.state = n(this.state), ne.batch(() => {
      this.observers.forEach((s) => {
        s.onQueryUpdate(e);
      }), this.cache.notify({
        query: this,
        type: "updated",
        action: e
      });
    });
  }
}
function Qu(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, n = typeof e < "u", s = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle"
  };
}
class Hu extends Xt {
  constructor(e) {
    super(), this.config = e || {}, this.queries = [], this.queriesMap = {};
  }
  build(e, n, s) {
    var i;
    const a = n.queryKey, u = (i = n.queryHash) != null ? i : Ln(a, n);
    let d = this.get(u);
    return d || (d = new zu({
      cache: this,
      logger: e.getLogger(),
      queryKey: a,
      queryHash: u,
      options: e.defaultQueryOptions(n),
      state: s,
      defaultOptions: e.getQueryDefaults(a)
    }), this.add(d)), d;
  }
  add(e) {
    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const n = this.queriesMap[e.queryHash];
    n && (e.destroy(), this.queries = this.queries.filter((s) => s !== e), n === e && delete this.queriesMap[e.queryHash], this.notify({
      type: "removed",
      query: e
    }));
  }
  clear() {
    ne.batch(() => {
      this.queries.forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return this.queriesMap[e];
  }
  getAll() {
    return this.queries;
  }
  find(e, n) {
    const [s] = De(e, n);
    return typeof s.exact > "u" && (s.exact = !0), this.queries.find((i) => xs(s, i));
  }
  findAll(e, n) {
    const [s] = De(e, n);
    return Object.keys(s).length > 0 ? this.queries.filter((i) => xs(s, i)) : this.queries;
  }
  notify(e) {
    ne.batch(() => {
      this.listeners.forEach(({
        listener: n
      }) => {
        n(e);
      });
    });
  }
  onFocus() {
    ne.batch(() => {
      this.queries.forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    ne.batch(() => {
      this.queries.forEach((e) => {
        e.onOnline();
      });
    });
  }
}
class Wu extends ji {
  constructor(e) {
    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || Vn, this.observers = [], this.state = e.state || Ku(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = {
      ...this.defaultOptions,
      ...e
    }, this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter((n) => n !== e), this.scheduleGc(), this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e, n;
    return (e = (n = this.retryer) == null ? void 0 : n.continue()) != null ? e : this.execute();
  }
  async execute() {
    const e = () => {
      var R;
      return this.retryer = Di({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (j, $) => {
          this.dispatch({
            type: "failed",
            failureCount: j,
            error: $
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (R = this.options.retry) != null ? R : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      }), this.retryer.promise;
    }, n = this.state.status === "loading";
    try {
      var s, i, a, u, d, l, h, v;
      if (!n) {
        var m, k, x, w;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        }), await ((m = (k = this.mutationCache.config).onMutate) == null ? void 0 : m.call(k, this.state.variables, this));
        const j = await ((x = (w = this.options).onMutate) == null ? void 0 : x.call(w, this.state.variables));
        j !== this.state.context && this.dispatch({
          type: "loading",
          context: j,
          variables: this.state.variables
        });
      }
      const R = await e();
      return await ((s = (i = this.mutationCache.config).onSuccess) == null ? void 0 : s.call(i, R, this.state.variables, this.state.context, this)), await ((a = (u = this.options).onSuccess) == null ? void 0 : a.call(u, R, this.state.variables, this.state.context)), await ((d = (l = this.mutationCache.config).onSettled) == null ? void 0 : d.call(l, R, null, this.state.variables, this.state.context, this)), await ((h = (v = this.options).onSettled) == null ? void 0 : h.call(v, R, null, this.state.variables, this.state.context)), this.dispatch({
        type: "success",
        data: R
      }), R;
    } catch (R) {
      try {
        var C, O, Z, D, N, I, U, P;
        throw await ((C = (O = this.mutationCache.config).onError) == null ? void 0 : C.call(O, R, this.state.variables, this.state.context, this)), {}.NODE_ENV !== "production" && this.logger.error(R), await ((Z = (D = this.options).onError) == null ? void 0 : Z.call(D, R, this.state.variables, this.state.context)), await ((N = (I = this.mutationCache.config).onSettled) == null ? void 0 : N.call(I, void 0, R, this.state.variables, this.state.context, this)), await ((U = (P = this.options).onSettled) == null ? void 0 : U.call(P, void 0, R, this.state.variables, this.state.context)), R;
      } finally {
        this.dispatch({
          type: "error",
          error: R
        });
      }
    }
  }
  dispatch(e) {
    const n = (s) => {
      switch (e.type) {
        case "failed":
          return {
            ...s,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...s,
            isPaused: !0
          };
        case "continue":
          return {
            ...s,
            isPaused: !1
          };
        case "loading":
          return {
            ...s,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Kr(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...s,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: e.error,
            failureCount: s.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...s,
            ...e.state
          };
      }
    };
    this.state = n(this.state), ne.batch(() => {
      this.observers.forEach((s) => {
        s.onMutationUpdate(e);
      }), this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
function Ku() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
class Gu extends Xt {
  constructor(e) {
    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0;
  }
  build(e, n, s) {
    const i = new Wu({
      mutationCache: this,
      logger: e.getLogger(),
      mutationId: ++this.mutationId,
      options: e.defaultMutationOptions(n),
      state: s,
      defaultOptions: n.mutationKey ? e.getMutationDefaults(n.mutationKey) : void 0
    });
    return this.add(i), i;
  }
  add(e) {
    this.mutations.push(e), this.notify({
      type: "added",
      mutation: e
    });
  }
  remove(e) {
    this.mutations = this.mutations.filter((n) => n !== e), this.notify({
      type: "removed",
      mutation: e
    });
  }
  clear() {
    ne.batch(() => {
      this.mutations.forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(e) {
    return typeof e.exact > "u" && (e.exact = !0), this.mutations.find((n) => ws(e, n));
  }
  findAll(e) {
    return this.mutations.filter((n) => ws(e, n));
  }
  notify(e) {
    ne.batch(() => {
      this.listeners.forEach(({
        listener: n
      }) => {
        n(e);
      });
    });
  }
  resumePausedMutations() {
    var e;
    return this.resuming = ((e = this.resuming) != null ? e : Promise.resolve()).then(() => {
      const n = this.mutations.filter((s) => s.state.isPaused);
      return ne.batch(() => n.reduce((s, i) => s.then(() => i.continue().catch(fe)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    }), this.resuming;
  }
}
function Ju() {
  return {
    onFetch: (t) => {
      t.fetchFn = () => {
        var e, n, s, i, a, u;
        const d = (e = t.fetchOptions) == null || (n = e.meta) == null ? void 0 : n.refetchPage, l = (s = t.fetchOptions) == null || (i = s.meta) == null ? void 0 : i.fetchMore, h = l == null ? void 0 : l.pageParam, v = (l == null ? void 0 : l.direction) === "forward", m = (l == null ? void 0 : l.direction) === "backward", k = ((a = t.state.data) == null ? void 0 : a.pages) || [], x = ((u = t.state.data) == null ? void 0 : u.pageParams) || [];
        let w = x, C = !1;
        const O = (P) => {
          Object.defineProperty(P, "signal", {
            enumerable: !0,
            get: () => {
              var R;
              if ((R = t.signal) != null && R.aborted)
                C = !0;
              else {
                var j;
                (j = t.signal) == null || j.addEventListener("abort", () => {
                  C = !0;
                });
              }
              return t.signal;
            }
          });
        }, Z = t.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + t.options.queryHash + "'")), D = (P, R, j, $) => (w = $ ? [R, ...w] : [...w, R], $ ? [j, ...P] : [...P, j]), N = (P, R, j, $) => {
          if (C)
            return Promise.reject("Cancelled");
          if (typeof j > "u" && !R && P.length)
            return Promise.resolve(P);
          const te = {
            queryKey: t.queryKey,
            pageParam: j,
            meta: t.options.meta
          };
          O(te);
          const ue = Z(te);
          return Promise.resolve(ue).then((ce) => D(P, j, ce, $));
        };
        let I;
        if (!k.length)
          I = N([]);
        else if (v) {
          const P = typeof h < "u", R = P ? h : Os(t.options, k);
          I = N(k, P, R);
        } else if (m) {
          const P = typeof h < "u", R = P ? h : Yu(t.options, k);
          I = N(k, P, R, !0);
        } else {
          w = [];
          const P = typeof t.options.getNextPageParam > "u";
          I = (d && k[0] ? d(k[0], 0, k) : !0) ? N([], P, x[0]) : Promise.resolve(D([], x[0], k[0]));
          for (let j = 1; j < k.length; j++)
            I = I.then(($) => {
              if (d && k[j] ? d(k[j], j, k) : !0) {
                const ue = P ? x[j] : Os(t.options, $);
                return N($, P, ue);
              }
              return Promise.resolve(D($, x[j], k[j]));
            });
        }
        return I.then((P) => ({
          pages: P,
          pageParams: w
        }));
      };
    }
  };
}
function Os(t, e) {
  return t.getNextPageParam == null ? void 0 : t.getNextPageParam(e[e.length - 1], e);
}
function Yu(t, e) {
  return t.getPreviousPageParam == null ? void 0 : t.getPreviousPageParam(e[0], e);
}
class Xu {
  constructor(e = {}) {
    this.queryCache = e.queryCache || new Hu(), this.mutationCache = e.mutationCache || new Gu(), this.logger = e.logger || Vn, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0, {}.NODE_ENV !== "production" && e.logger && this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
  }
  mount() {
    this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = Nr.subscribe(() => {
      Nr.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus());
    }), this.unsubscribeOnline = Ar.subscribe(() => {
      Ar.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline());
    }));
  }
  unmount() {
    var e, n;
    this.mountCount--, this.mountCount === 0 && ((e = this.unsubscribeFocus) == null || e.call(this), this.unsubscribeFocus = void 0, (n = this.unsubscribeOnline) == null || n.call(this), this.unsubscribeOnline = void 0);
  }
  isFetching(e, n) {
    const [s] = De(e, n);
    return s.fetchStatus = "fetching", this.queryCache.findAll(s).length;
  }
  isMutating(e) {
    return this.mutationCache.findAll({
      ...e,
      fetching: !0
    }).length;
  }
  getQueryData(e, n) {
    var s;
    return (s = this.queryCache.find(e, n)) == null ? void 0 : s.state.data;
  }
  ensureQueryData(e, n, s) {
    const i = Pt(e, n, s), a = this.getQueryData(i.queryKey);
    return a ? Promise.resolve(a) : this.fetchQuery(i);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({
      queryKey: n,
      state: s
    }) => {
      const i = s.data;
      return [n, i];
    });
  }
  setQueryData(e, n, s) {
    const i = this.queryCache.find(e), a = i == null ? void 0 : i.state.data, u = Vu(n, a);
    if (typeof u > "u")
      return;
    const d = Pt(e), l = this.defaultQueryOptions(d);
    return this.queryCache.build(this, l).setData(u, {
      ...s,
      manual: !0
    });
  }
  setQueriesData(e, n, s) {
    return ne.batch(() => this.getQueryCache().findAll(e).map(({
      queryKey: i
    }) => [i, this.setQueryData(i, n, s)]));
  }
  getQueryState(e, n) {
    var s;
    return (s = this.queryCache.find(e, n)) == null ? void 0 : s.state;
  }
  removeQueries(e, n) {
    const [s] = De(e, n), i = this.queryCache;
    ne.batch(() => {
      i.findAll(s).forEach((a) => {
        i.remove(a);
      });
    });
  }
  resetQueries(e, n, s) {
    const [i, a] = De(e, n, s), u = this.queryCache, d = {
      type: "active",
      ...i
    };
    return ne.batch(() => (u.findAll(i).forEach((l) => {
      l.reset();
    }), this.refetchQueries(d, a)));
  }
  cancelQueries(e, n, s) {
    const [i, a = {}] = De(e, n, s);
    typeof a.revert > "u" && (a.revert = !0);
    const u = ne.batch(() => this.queryCache.findAll(i).map((d) => d.cancel(a)));
    return Promise.all(u).then(fe).catch(fe);
  }
  invalidateQueries(e, n, s) {
    const [i, a] = De(e, n, s);
    return ne.batch(() => {
      var u, d;
      if (this.queryCache.findAll(i).forEach((h) => {
        h.invalidate();
      }), i.refetchType === "none")
        return Promise.resolve();
      const l = {
        ...i,
        type: (u = (d = i.refetchType) != null ? d : i.type) != null ? u : "active"
      };
      return this.refetchQueries(l, a);
    });
  }
  refetchQueries(e, n, s) {
    const [i, a] = De(e, n, s), u = ne.batch(() => this.queryCache.findAll(i).filter((l) => !l.isDisabled()).map((l) => {
      var h;
      return l.fetch(void 0, {
        ...a,
        cancelRefetch: (h = a == null ? void 0 : a.cancelRefetch) != null ? h : !0,
        meta: {
          refetchPage: i.refetchPage
        }
      });
    }));
    let d = Promise.all(u).then(fe);
    return a != null && a.throwOnError || (d = d.catch(fe)), d;
  }
  fetchQuery(e, n, s) {
    const i = Pt(e, n, s), a = this.defaultQueryOptions(i);
    typeof a.retry > "u" && (a.retry = !1);
    const u = this.queryCache.build(this, a);
    return u.isStaleByTime(a.staleTime) ? u.fetch(a) : Promise.resolve(u.state.data);
  }
  prefetchQuery(e, n, s) {
    return this.fetchQuery(e, n, s).then(fe).catch(fe);
  }
  fetchInfiniteQuery(e, n, s) {
    const i = Pt(e, n, s);
    return i.behavior = Ju(), this.fetchQuery(i);
  }
  prefetchInfiniteQuery(e, n, s) {
    return this.fetchInfiniteQuery(e, n, s).then(fe).catch(fe);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(e) {
    this.defaultOptions = e;
  }
  setQueryDefaults(e, n) {
    const s = this.queryDefaults.find((i) => Qe(e) === Qe(i.queryKey));
    s ? s.defaultOptions = n : this.queryDefaults.push({
      queryKey: e,
      defaultOptions: n
    });
  }
  getQueryDefaults(e) {
    if (!e)
      return;
    const n = this.queryDefaults.find((s) => nt(e, s.queryKey));
    return {}.NODE_ENV !== "production" && this.queryDefaults.filter((i) => nt(e, i.queryKey)).length > 1 && this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(e) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults."), n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(e, n) {
    const s = this.mutationDefaults.find((i) => Qe(e) === Qe(i.mutationKey));
    s ? s.defaultOptions = n : this.mutationDefaults.push({
      mutationKey: e,
      defaultOptions: n
    });
  }
  getMutationDefaults(e) {
    if (!e)
      return;
    const n = this.mutationDefaults.find((s) => nt(e, s.mutationKey));
    return {}.NODE_ENV !== "production" && this.mutationDefaults.filter((i) => nt(e, i.mutationKey)).length > 1 && this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(e) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults."), n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(e == null ? void 0 : e.queryKey),
      ...e,
      _defaulted: !0
    };
    return !n.queryHash && n.queryKey && (n.queryHash = Ln(n.queryKey, n)), typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"), typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense), n;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(e == null ? void 0 : e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class ed extends Xt {
  constructor(e, n) {
    super(), this.client = e, this.options = n, this.trackedProps = /* @__PURE__ */ new Set(), this.selectError = null, this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (this.currentQuery.addObserver(this), Es(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return En(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return En(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this);
  }
  setOptions(e, n) {
    const s = this.options, i = this.currentQuery;
    if (this.options = this.client.defaultQueryOptions(e), {}.NODE_ENV !== "production" && typeof (e == null ? void 0 : e.isDataEqual) < "u" && this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"), Cn(s, this.options) || this.client.getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: this.currentQuery,
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = s.queryKey), this.updateQuery();
    const a = this.hasListeners();
    a && Is(this.currentQuery, i, this.options, s) && this.executeFetch(), this.updateResult(n), a && (this.currentQuery !== i || this.options.enabled !== s.enabled || this.options.staleTime !== s.staleTime) && this.updateStaleTimeout();
    const u = this.computeRefetchInterval();
    a && (this.currentQuery !== i || this.options.enabled !== s.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u);
  }
  getOptimisticResult(e) {
    const n = this.client.getQueryCache().build(this.client, e), s = this.createResult(n, e);
    return rd(this, s, e) && (this.currentResult = s, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), s;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(e) {
    const n = {};
    return Object.keys(e).forEach((s) => {
      Object.defineProperty(n, s, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackedProps.add(s), e[s])
      });
    }), n;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage: e,
    ...n
  } = {}) {
    return this.fetch({
      ...n,
      meta: {
        refetchPage: e
      }
    });
  }
  fetchOptimistic(e) {
    const n = this.client.defaultQueryOptions(e), s = this.client.getQueryCache().build(this.client, n);
    return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, n));
  }
  fetch(e) {
    var n;
    return this.executeFetch({
      ...e,
      cancelRefetch: (n = e.cancelRefetch) != null ? n : !0
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(e) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, e);
    return e != null && e.throwOnError || (n = n.catch(fe)), n;
  }
  updateStaleTimeout() {
    if (this.clearStaleTimeout(), Ht || this.currentResult.isStale || !Tn(this.options.staleTime))
      return;
    const n = Pi(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var e;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (e = this.options.refetchInterval) != null ? e : !1;
  }
  updateRefetchInterval(e) {
    this.clearRefetchInterval(), this.currentRefetchInterval = e, !(Ht || this.options.enabled === !1 || !Tn(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => {
      (this.options.refetchIntervalInBackground || Nr.isFocused()) && this.executeFetch();
    }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }
  clearRefetchInterval() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }
  createResult(e, n) {
    const s = this.currentQuery, i = this.options, a = this.currentResult, u = this.currentResultState, d = this.currentResultOptions, l = e !== s, h = l ? e.state : this.currentQueryInitialState, v = l ? this.currentResult : this.previousQueryResult, {
      state: m
    } = e;
    let {
      dataUpdatedAt: k,
      error: x,
      errorUpdatedAt: w,
      fetchStatus: C,
      status: O
    } = m, Z = !1, D = !1, N;
    if (n._optimisticResults) {
      const j = this.hasListeners(), $ = !j && Es(e, n), te = j && Is(e, s, n, i);
      ($ || te) && (C = Kr(e.options.networkMode) ? "fetching" : "paused", k || (O = "loading")), n._optimisticResults === "isRestoring" && (C = "idle");
    }
    if (n.keepPreviousData && !m.dataUpdatedAt && v != null && v.isSuccess && O !== "error")
      N = v.data, k = v.dataUpdatedAt, O = v.status, Z = !0;
    else if (n.select && typeof m.data < "u")
      if (a && m.data === (u == null ? void 0 : u.data) && n.select === this.selectFn)
        N = this.selectResult;
      else
        try {
          this.selectFn = n.select, N = n.select(m.data), N = On(a == null ? void 0 : a.data, N, n), this.selectResult = N, this.selectError = null;
        } catch (j) {
          ({}).NODE_ENV !== "production" && this.client.getLogger().error(j), this.selectError = j;
        }
    else
      N = m.data;
    if (typeof n.placeholderData < "u" && typeof N > "u" && O === "loading") {
      let j;
      if (a != null && a.isPlaceholderData && n.placeholderData === (d == null ? void 0 : d.placeholderData))
        j = a.data;
      else if (j = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof j < "u")
        try {
          j = n.select(j), this.selectError = null;
        } catch ($) {
          ({}).NODE_ENV !== "production" && this.client.getLogger().error($), this.selectError = $;
        }
      typeof j < "u" && (O = "success", N = On(a == null ? void 0 : a.data, j, n), D = !0);
    }
    this.selectError && (x = this.selectError, N = this.selectResult, w = Date.now(), O = "error");
    const I = C === "fetching", U = O === "loading", P = O === "error";
    return {
      status: O,
      fetchStatus: C,
      isLoading: U,
      isSuccess: O === "success",
      isError: P,
      isInitialLoading: U && I,
      data: N,
      dataUpdatedAt: k,
      error: x,
      errorUpdatedAt: w,
      failureCount: m.fetchFailureCount,
      failureReason: m.fetchFailureReason,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount: m.dataUpdateCount > h.dataUpdateCount || m.errorUpdateCount > h.errorUpdateCount,
      isFetching: I,
      isRefetching: I && !U,
      isLoadingError: P && m.dataUpdatedAt === 0,
      isPaused: C === "paused",
      isPlaceholderData: D,
      isPreviousData: Z,
      isRefetchError: P && m.dataUpdatedAt !== 0,
      isStale: Un(e, n),
      refetch: this.refetch,
      remove: this.remove
    };
  }
  updateResult(e) {
    const n = this.currentResult, s = this.createResult(this.currentQuery, this.options);
    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, Cn(s, n))
      return;
    this.currentResult = s;
    const i = {
      cache: !0
    }, a = () => {
      if (!n)
        return !0;
      const {
        notifyOnChangeProps: u
      } = this.options, d = typeof u == "function" ? u() : u;
      if (d === "all" || !d && !this.trackedProps.size)
        return !0;
      const l = new Set(d ?? this.trackedProps);
      return this.options.useErrorBoundary && l.add("error"), Object.keys(this.currentResult).some((h) => {
        const v = h;
        return this.currentResult[v] !== n[v] && l.has(v);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && a() && (i.listeners = !0), this.notify({
      ...i,
      ...e
    });
  }
  updateQuery() {
    const e = this.client.getQueryCache().build(this.client, this.options);
    if (e === this.currentQuery)
      return;
    const n = this.currentQuery;
    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (n == null || n.removeObserver(this), e.addObserver(this));
  }
  onQueryUpdate(e) {
    const n = {};
    e.type === "success" ? n.onSuccess = !e.manual : e.type === "error" && !gr(e.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers();
  }
  notify(e) {
    ne.batch(() => {
      if (e.onSuccess) {
        var n, s, i, a;
        (n = (s = this.options).onSuccess) == null || n.call(s, this.currentResult.data), (i = (a = this.options).onSettled) == null || i.call(a, this.currentResult.data, null);
      } else if (e.onError) {
        var u, d, l, h;
        (u = (d = this.options).onError) == null || u.call(d, this.currentResult.error), (l = (h = this.options).onSettled) == null || l.call(h, void 0, this.currentResult.error);
      }
      e.listeners && this.listeners.forEach(({
        listener: v
      }) => {
        v(this.currentResult);
      }), e.cache && this.client.getQueryCache().notify({
        query: this.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }
}
function td(t, e) {
  return e.enabled !== !1 && !t.state.dataUpdatedAt && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Es(t, e) {
  return td(t, e) || t.state.dataUpdatedAt > 0 && En(t, e, e.refetchOnMount);
}
function En(t, e, n) {
  if (e.enabled !== !1) {
    const s = typeof n == "function" ? n(t) : n;
    return s === "always" || s !== !1 && Un(t, e);
  }
  return !1;
}
function Is(t, e, n, s) {
  return n.enabled !== !1 && (t !== e || s.enabled === !1) && (!n.suspense || t.state.status !== "error") && Un(t, n);
}
function Un(t, e) {
  return t.isStaleByTime(e.staleTime);
}
function rd(t, e, n) {
  return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? e.isPlaceholderData : !Cn(t.getCurrentResult(), e);
}
var Ne, Y, an, Zs, lt = 0, Li = [], br = [], Ps = L.__b, Rs = L.__r, Ns = L.diffed, As = L.__c, Ms = L.unmount;
function Je(t, e) {
  L.__h && L.__h(Y, t, lt || e), lt = 0;
  var n = Y.__H || (Y.__H = { __: [], __h: [] });
  return t >= n.__.length && n.__.push({ __V: br }), n.__[t];
}
function er(t) {
  return lt = 1, $n(qi, t);
}
function $n(t, e, n) {
  var s = Je(Ne++, 2);
  if (s.t = t, !s.__c && (s.__ = [n ? n(e) : qi(void 0, e), function(d) {
    var l = s.__N ? s.__N[0] : s.__[0], h = s.t(l, d);
    l !== h && (s.__N = [h, s.__[1]], s.__c.setState({}));
  }], s.__c = Y, !Y.u)) {
    var i = function(d, l, h) {
      if (!s.__c.__H)
        return !0;
      var v = s.__c.__H.__.filter(function(k) {
        return k.__c;
      });
      if (v.every(function(k) {
        return !k.__N;
      }))
        return !a || a.call(this, d, l, h);
      var m = !1;
      return v.forEach(function(k) {
        if (k.__N) {
          var x = k.__[0];
          k.__ = k.__N, k.__N = void 0, x !== k.__[0] && (m = !0);
        }
      }), !(!m && s.__c.props === d) && (!a || a.call(this, d, l, h));
    };
    Y.u = !0;
    var a = Y.shouldComponentUpdate, u = Y.componentWillUpdate;
    Y.componentWillUpdate = function(d, l, h) {
      if (this.__e) {
        var v = a;
        a = void 0, i(d, l, h), a = v;
      }
      u && u.call(this, d, l, h);
    }, Y.shouldComponentUpdate = i;
  }
  return s.__N || s.__;
}
function pt(t, e) {
  var n = Je(Ne++, 3);
  !L.__s && Bn(n.__H, e) && (n.__ = t, n.i = e, Y.__H.__h.push(n));
}
function tr(t, e) {
  var n = Je(Ne++, 4);
  !L.__s && Bn(n.__H, e) && (n.__ = t, n.i = e, Y.__h.push(n));
}
function Vi(t) {
  return lt = 5, mt(function() {
    return { current: t };
  }, []);
}
function Ui(t, e, n) {
  lt = 6, tr(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, n == null ? n : n.concat(t));
}
function mt(t, e) {
  var n = Je(Ne++, 7);
  return Bn(n.__H, e) ? (n.__V = t(), n.i = e, n.__h = t, n.__V) : n.__;
}
function qn(t, e) {
  return lt = 8, mt(function() {
    return t;
  }, e);
}
function ft(t) {
  var e = Y.context[t.__c], n = Je(Ne++, 9);
  return n.c = t, e ? (n.__ == null && (n.__ = !0, e.sub(Y)), e.props.value) : t.__;
}
function Fn(t, e) {
  L.useDebugValue && L.useDebugValue(e ? e(t) : t);
}
function nd(t) {
  var e = Je(Ne++, 10), n = er();
  return e.__ = t, Y.componentDidCatch || (Y.componentDidCatch = function(s, i) {
    e.__ && e.__(s, i), n[1](s);
  }), [n[0], function() {
    n[1](void 0);
  }];
}
function $i() {
  var t = Je(Ne++, 11);
  if (!t.__) {
    for (var e = Y.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var n = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + n[0] + "-" + n[1]++;
  }
  return t.__;
}
function sd() {
  for (var t; t = Li.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(xr), t.__H.__h.forEach(In), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], L.__e(e, t.__v);
      }
}
L.__b = function(t) {
  Y = null, Ps && Ps(t);
}, L.__r = function(t) {
  Rs && Rs(t), Ne = 0;
  var e = (Y = t.__c).__H;
  e && (an === Y ? (e.__h = [], Y.__h = [], e.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = br, n.__N = n.i = void 0;
  })) : (e.__h.forEach(xr), e.__h.forEach(In), e.__h = [], Ne = 0)), an = Y;
}, L.diffed = function(t) {
  Ns && Ns(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (Li.push(e) !== 1 && Zs === L.requestAnimationFrame || ((Zs = L.requestAnimationFrame) || id)(sd)), e.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== br && (n.__ = n.__V), n.i = void 0, n.__V = br;
  })), an = Y = null;
}, L.__c = function(t, e) {
  e.some(function(n) {
    try {
      n.__h.forEach(xr), n.__h = n.__h.filter(function(s) {
        return !s.__ || In(s);
      });
    } catch (s) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], L.__e(s, n.__v);
    }
  }), As && As(t, e);
}, L.unmount = function(t) {
  Ms && Ms(t);
  var e, n = t.__c;
  n && n.__H && (n.__H.__.forEach(function(s) {
    try {
      xr(s);
    } catch (i) {
      e = i;
    }
  }), n.__H = void 0, e && L.__e(e, n.__v));
};
var Ds = typeof requestAnimationFrame == "function";
function id(t) {
  var e, n = function() {
    clearTimeout(s), Ds && cancelAnimationFrame(e), setTimeout(t);
  }, s = setTimeout(n, 100);
  Ds && (e = requestAnimationFrame(n));
}
function xr(t) {
  var e = Y, n = t.__c;
  typeof n == "function" && (t.__c = void 0, n()), Y = e;
}
function In(t) {
  var e = Y;
  t.__c = t.__(), Y = e;
}
function Bn(t, e) {
  return !t || t.length !== e.length || e.some(function(n, s) {
    return n !== t[s];
  });
}
function qi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Fi(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Zn(t, e) {
  for (var n in t)
    if (n !== "__source" && !(n in e))
      return !0;
  for (var s in e)
    if (s !== "__source" && t[s] !== e[s])
      return !0;
  return !1;
}
function on(t, e) {
  return t === e && (t !== 0 || 1 / t == 1 / e) || t != t && e != e;
}
function Mr(t) {
  this.props = t;
}
function Bi(t, e) {
  function n(i) {
    var a = this.props.ref, u = a == i.ref;
    return !u && a && (a.call ? a(null) : a.current = null), e ? !e(this.props, i) || !u : Zn(this.props, i);
  }
  function s(i) {
    return this.shouldComponentUpdate = n, he(t, i);
  }
  return s.displayName = "Memo(" + (t.displayName || t.name) + ")", s.prototype.isReactComponent = !0, s.__f = !0, s;
}
(Mr.prototype = new ve()).isPureReactComponent = !0, Mr.prototype.shouldComponentUpdate = function(t, e) {
  return Zn(this.props, t) || Zn(this.state, e);
};
var js = L.__b;
L.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), js && js(t);
};
var ad = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function zi(t) {
  function e(n) {
    var s = Fi({}, n);
    return delete s.ref, t(s, n.ref || null);
  }
  return e.$$typeof = ad, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var Ls = function(t, e) {
  return t == null ? null : Ze(Ze(t).map(e));
}, Qi = { map: Ls, forEach: Ls, count: function(t) {
  return t ? Ze(t).length : 0;
}, only: function(t) {
  var e = Ze(t);
  if (e.length !== 1)
    throw "Children.only";
  return e[0];
}, toArray: Ze }, od = L.__e;
L.__e = function(t, e, n, s) {
  if (t.then) {
    for (var i, a = e; a = a.__; )
      if ((i = a.__c) && i.__c)
        return e.__e == null && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
  }
  od(t, e, n, s);
};
var Vs = L.unmount;
function Hi(t, e, n) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(s) {
    typeof s.__c == "function" && s.__c();
  }), t.__c.__H = null), (t = Fi({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(s) {
    return Hi(s, e, n);
  })), t;
}
function Wi(t, e, n) {
  return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(s) {
    return Wi(s, e, n);
  }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = n)), t;
}
function Nt() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Ki(t) {
  var e = t.__.__c;
  return e && e.__a && e.__a(t);
}
function Gi(t) {
  var e, n, s;
  function i(a) {
    if (e || (e = t()).then(function(u) {
      n = u.default || u;
    }, function(u) {
      s = u;
    }), s)
      throw s;
    if (!n)
      throw e;
    return he(n, a);
  }
  return i.displayName = "Lazy", i.__f = !0, i;
}
function st() {
  this.u = null, this.o = null;
}
L.unmount = function(t) {
  var e = t.__c;
  e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), Vs && Vs(t);
}, (Nt.prototype = new ve()).__c = function(t, e) {
  var n = e.__c, s = this;
  s.t == null && (s.t = []), s.t.push(n);
  var i = Ki(s.__v), a = !1, u = function() {
    a || (a = !0, n.__R = null, i ? i(d) : d());
  };
  n.__R = u;
  var d = function() {
    if (!--s.__u) {
      if (s.state.__a) {
        var h = s.state.__a;
        s.__v.__k[0] = Wi(h, h.__c.__P, h.__c.__O);
      }
      var v;
      for (s.setState({ __a: s.__b = null }); v = s.t.pop(); )
        v.forceUpdate();
    }
  }, l = e.__h === !0;
  s.__u++ || l || s.setState({ __a: s.__b = s.__v.__k[0] }), t.then(u, u);
}, Nt.prototype.componentWillUnmount = function() {
  this.t = [];
}, Nt.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var n = document.createElement("div"), s = this.__v.__k[0].__c;
      this.__v.__k[0] = Hi(this.__b, n, s.__O = s.__P);
    }
    this.__b = null;
  }
  var i = e.__a && he(Ce, null, t.fallback);
  return i && (i.__h = null), [he(Ce, null, e.__a ? null : t.children), i];
};
var Us = function(t, e, n) {
  if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    for (n = t.u; n; ) {
      for (; n.length > 3; )
        n.pop()();
      if (n[1] < n[0])
        break;
      t.u = n = n[2];
    }
};
function ud(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function dd(t) {
  var e = this, n = t.i;
  e.componentWillUnmount = function() {
    ut(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== n && e.componentWillUnmount(), e.l || (e.i = n, e.l = { nodeType: 1, parentNode: n, childNodes: [], appendChild: function(s) {
    this.childNodes.push(s), e.i.appendChild(s);
  }, insertBefore: function(s, i) {
    this.childNodes.push(s), e.i.appendChild(s);
  }, removeChild: function(s) {
    this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), e.i.removeChild(s);
  } }), ut(he(ud, { context: e.context }, t.__v), e.l);
}
function Ji(t, e) {
  var n = he(dd, { __v: t, i: e });
  return n.containerInfo = e, n;
}
(st.prototype = new ve()).__a = function(t) {
  var e = this, n = Ki(e.__v), s = e.o.get(t);
  return s[0]++, function(i) {
    var a = function() {
      e.props.revealOrder ? (s.push(i), Us(e, t, s)) : i();
    };
    n ? n(a) : a();
  };
}, st.prototype.render = function(t) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var e = Ze(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var n = e.length; n--; )
    this.o.set(e[n], this.u = [1, 0, this.u]);
  return t.children;
}, st.prototype.componentDidUpdate = st.prototype.componentDidMount = function() {
  var t = this;
  this.o.forEach(function(e, n) {
    Us(t, n, e);
  });
};
var Yi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, cd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ld = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, fd = /[A-Z0-9]/g, hd = typeof document < "u", pd = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
function Xi(t, e, n) {
  return e.__k == null && (e.textContent = ""), ut(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
function ea(t, e, n) {
  return hi(t, e), typeof n == "function" && n(), t ? t.__c : null;
}
ve.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(ve.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var $s = L.event;
function md() {
}
function _d() {
  return this.cancelBubble;
}
function yd() {
  return this.defaultPrevented;
}
L.event = function(t) {
  return $s && (t = $s(t)), t.persist = md, t.isPropagationStopped = _d, t.isDefaultPrevented = yd, t.nativeEvent = t;
};
var zn, vd = { enumerable: !1, configurable: !0, get: function() {
  return this.class;
} }, qs = L.vnode;
L.vnode = function(t) {
  typeof t.type == "string" && function(e) {
    var n = e.props, s = e.type, i = {};
    for (var a in n) {
      var u = n[a];
      if (!(a === "value" && "defaultValue" in n && u == null || hd && a === "children" && s === "noscript" || a === "class" || a === "className")) {
        var d = a.toLowerCase();
        a === "defaultValue" && "value" in n && n.value == null ? a = "value" : a === "download" && u === !0 ? u = "" : d === "ondoubleclick" ? a = "ondblclick" : d !== "onchange" || s !== "input" && s !== "textarea" || pd(n.type) ? d === "onfocus" ? a = "onfocusin" : d === "onblur" ? a = "onfocusout" : ld.test(a) ? a = d : s.indexOf("-") === -1 && cd.test(a) ? a = a.replace(fd, "-$&").toLowerCase() : u === null && (u = void 0) : d = a = "oninput", d === "oninput" && i[a = d] && (a = "oninputCapture"), i[a] = u;
      }
    }
    s == "select" && i.multiple && Array.isArray(i.value) && (i.value = Ze(n.children).forEach(function(l) {
      l.props.selected = i.value.indexOf(l.props.value) != -1;
    })), s == "select" && i.defaultValue != null && (i.value = Ze(n.children).forEach(function(l) {
      l.props.selected = i.multiple ? i.defaultValue.indexOf(l.props.value) != -1 : i.defaultValue == l.props.value;
    })), n.class && !n.className ? (i.class = n.class, Object.defineProperty(i, "className", vd)) : (n.className && !n.class || n.class && n.className) && (i.class = i.className = n.className), e.props = i;
  }(t), t.$$typeof = Yi, qs && qs(t);
};
var Fs = L.__r;
L.__r = function(t) {
  Fs && Fs(t), zn = t.__c;
};
var Bs = L.diffed;
L.diffed = function(t) {
  Bs && Bs(t);
  var e = t.props, n = t.__e;
  n != null && t.type === "textarea" && "value" in e && e.value !== n.value && (n.value = e.value == null ? "" : e.value), zn = null;
};
var ta = { ReactCurrentDispatcher: { current: { readContext: function(t) {
  return zn.__n[t.__c].props.value;
} } } }, gd = "17.0.2";
function ra(t) {
  return he.bind(null, t);
}
function rr(t) {
  return !!t && t.$$typeof === Yi;
}
function na(t) {
  return rr(t) && t.type === Ce;
}
function sa(t) {
  return rr(t) ? mo.apply(null, arguments) : t;
}
function ia(t) {
  return !!t.__k && (ut(null, t), !0);
}
function aa(t) {
  return t && (t.base || t.nodeType === 1 && t) || null;
}
var oa = function(t, e) {
  return t(e);
}, ua = function(t, e) {
  return t(e);
}, da = Ce;
function Qn(t) {
  t();
}
function ca(t) {
  return t;
}
function la() {
  return [!1, Qn];
}
var fa = tr, ha = rr;
function pa(t, e) {
  var n = e(), s = er({ h: { __: n, v: e } }), i = s[0].h, a = s[1];
  return tr(function() {
    i.__ = n, i.v = e, on(i.__, e()) || a({ h: i });
  }, [t, n, e]), pt(function() {
    return on(i.__, i.v()) || a({ h: i }), t(function() {
      on(i.__, i.v()) || a({ h: i });
    });
  }, [t]), n;
}
var bd = { useState: er, useId: $i, useReducer: $n, useEffect: pt, useLayoutEffect: tr, useInsertionEffect: fa, useTransition: la, useDeferredValue: ca, useSyncExternalStore: pa, startTransition: Qn, useRef: Vi, useImperativeHandle: Ui, useMemo: mt, useCallback: qn, useContext: ft, useDebugValue: Fn, version: "17.0.2", Children: Qi, render: Xi, hydrate: ea, unmountComponentAtNode: ia, createPortal: Ji, createElement: he, createContext: ht, createFactory: ra, cloneElement: sa, createRef: oi, Fragment: Ce, isValidElement: rr, isElement: ha, isFragment: na, findDOMNode: aa, Component: ve, PureComponent: Mr, memo: Bi, forwardRef: zi, flushSync: ua, unstable_batchedUpdates: oa, StrictMode: da, Suspense: Nt, SuspenseList: st, lazy: Gi, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ta };
const xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: Qi,
  Component: ve,
  Fragment: Ce,
  PureComponent: Mr,
  StrictMode: da,
  Suspense: Nt,
  SuspenseList: st,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ta,
  cloneElement: sa,
  createContext: ht,
  createElement: he,
  createFactory: ra,
  createPortal: Ji,
  createRef: oi,
  default: bd,
  findDOMNode: aa,
  flushSync: ua,
  forwardRef: zi,
  hydrate: ea,
  isElement: ha,
  isFragment: na,
  isValidElement: rr,
  lazy: Gi,
  memo: Bi,
  render: Xi,
  startTransition: Qn,
  unmountComponentAtNode: ia,
  unstable_batchedUpdates: oa,
  useCallback: qn,
  useContext: ft,
  useDebugValue: Fn,
  useDeferredValue: ca,
  useEffect: pt,
  useErrorBoundary: nd,
  useId: $i,
  useImperativeHandle: Ui,
  useInsertionEffect: fa,
  useLayoutEffect: tr,
  useMemo: mt,
  useReducer: $n,
  useRef: Vi,
  useState: er,
  useSyncExternalStore: pa,
  useTransition: la,
  version: gd
}, Symbol.toStringTag, { value: "Module" }));
var _r = { exports: {} }, un = {};
const Gr = /* @__PURE__ */ _o(xd);
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function wd() {
  if (zs)
    return un;
  zs = 1;
  var t = Gr;
  function e(m, k) {
    return m === k && (m !== 0 || 1 / m === 1 / k) || m !== m && k !== k;
  }
  var n = typeof Object.is == "function" ? Object.is : e, s = t.useState, i = t.useEffect, a = t.useLayoutEffect, u = t.useDebugValue;
  function d(m, k) {
    var x = k(), w = s({ inst: { value: x, getSnapshot: k } }), C = w[0].inst, O = w[1];
    return a(function() {
      C.value = x, C.getSnapshot = k, l(C) && O({ inst: C });
    }, [m, x, k]), i(function() {
      return l(C) && O({ inst: C }), m(function() {
        l(C) && O({ inst: C });
      });
    }, [m]), u(x), x;
  }
  function l(m) {
    var k = m.getSnapshot;
    m = m.value;
    try {
      var x = k();
      return !n(m, x);
    } catch {
      return !0;
    }
  }
  function h(m, k) {
    return k();
  }
  var v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : d;
  return un.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : v, un;
}
var dn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function kd() {
  return Qs || (Qs = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Gr, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(N) {
      {
        for (var I = arguments.length, U = new Array(I > 1 ? I - 1 : 0), P = 1; P < I; P++)
          U[P - 1] = arguments[P];
        s("error", N, U);
      }
    }
    function s(N, I, U) {
      {
        var P = e.ReactDebugCurrentFrame, R = P.getStackAddendum();
        R !== "" && (I += "%s", U = U.concat([R]));
        var j = U.map(function($) {
          return String($);
        });
        j.unshift("Warning: " + I), Function.prototype.apply.call(console[N], console, j);
      }
    }
    function i(N, I) {
      return N === I && (N !== 0 || 1 / N === 1 / I) || N !== N && I !== I;
    }
    var a = typeof Object.is == "function" ? Object.is : i, u = t.useState, d = t.useEffect, l = t.useLayoutEffect, h = t.useDebugValue, v = !1, m = !1;
    function k(N, I, U) {
      v || t.startTransition !== void 0 && (v = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var P = I();
      if (!m) {
        var R = I();
        a(P, R) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), m = !0);
      }
      var j = u({
        inst: {
          value: P,
          getSnapshot: I
        }
      }), $ = j[0].inst, te = j[1];
      return l(function() {
        $.value = P, $.getSnapshot = I, x($) && te({
          inst: $
        });
      }, [N, P, I]), d(function() {
        x($) && te({
          inst: $
        });
        var ue = function() {
          x($) && te({
            inst: $
          });
        };
        return N(ue);
      }, [N]), h(P), P;
    }
    function x(N) {
      var I = N.getSnapshot, U = N.value;
      try {
        var P = I();
        return !a(U, P);
      } catch {
        return !0;
      }
    }
    function w(N, I, U) {
      return I();
    }
    var C = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", O = !C, Z = O ? w : k, D = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : Z;
    dn.useSyncExternalStore = D, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), dn;
}
var Hs;
function Hn() {
  return Hs || (Hs = 1, {}.NODE_ENV === "production" ? _r.exports = wd() : _r.exports = kd()), _r.exports;
}
var Td = Hn();
const Cd = Td.useSyncExternalStore, Ws = /* @__PURE__ */ ht(void 0), ma = /* @__PURE__ */ ht(!1);
function _a(t, e) {
  return t || (e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Ws), window.ReactQueryClientContext) : Ws);
}
const Sd = ({
  context: t
} = {}) => {
  const e = ft(_a(t, ft(ma)));
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Od = ({
  client: t,
  children: e,
  context: n,
  contextSharing: s = !1
}) => {
  pt(() => (t.mount(), () => {
    t.unmount();
  }), [t]), {}.NODE_ENV !== "production" && s && t.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  const i = _a(n, s);
  return /* @__PURE__ */ he(ma.Provider, {
    value: !n && s
  }, /* @__PURE__ */ he(i.Provider, {
    value: t
  }, e));
}, ya = /* @__PURE__ */ ht(!1), Ed = () => ft(ya);
ya.Provider;
function Id() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
const Zd = /* @__PURE__ */ ht(Id()), Pd = () => ft(Zd);
function Rd(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
const Nd = (t, e) => {
  (t.suspense || t.useErrorBoundary) && (e.isReset() || (t.retryOnMount = !1));
}, Ad = (t) => {
  pt(() => {
    t.clearReset();
  }, [t]);
}, Md = ({
  result: t,
  errorResetBoundary: e,
  useErrorBoundary: n,
  query: s
}) => t.isError && !e.isReset() && !t.isFetching && Rd(n, [t.error, s]), Dd = (t) => {
  t.suspense && typeof t.staleTime != "number" && (t.staleTime = 1e3);
}, jd = (t, e) => t.isLoading && t.isFetching && !e, Ld = (t, e, n) => (t == null ? void 0 : t.suspense) && jd(e, n), Vd = (t, e, n) => e.fetchOptimistic(t).then(({
  data: s
}) => {
  t.onSuccess == null || t.onSuccess(s), t.onSettled == null || t.onSettled(s, null);
}).catch((s) => {
  n.clearReset(), t.onError == null || t.onError(s), t.onSettled == null || t.onSettled(void 0, s);
});
function Ud(t, e) {
  const n = Sd({
    context: t.context
  }), s = Ed(), i = Pd(), a = n.defaultQueryOptions(t);
  a._optimisticResults = s ? "isRestoring" : "optimistic", a.onError && (a.onError = ne.batchCalls(a.onError)), a.onSuccess && (a.onSuccess = ne.batchCalls(a.onSuccess)), a.onSettled && (a.onSettled = ne.batchCalls(a.onSettled)), Dd(a), Nd(a, i), Ad(i);
  const [u] = er(() => new e(n, a)), d = u.getOptimisticResult(a);
  if (Cd(qn((l) => {
    const h = s ? () => {
    } : u.subscribe(ne.batchCalls(l));
    return u.updateResult(), h;
  }, [u, s]), () => u.getCurrentResult(), () => u.getCurrentResult()), pt(() => {
    u.setOptions(a, {
      listeners: !1
    });
  }, [a, u]), Ld(a, d, s))
    throw Vd(a, u, i);
  if (Md({
    result: d,
    errorResetBoundary: i,
    useErrorBoundary: a.useErrorBoundary,
    query: u.getCurrentQuery()
  }))
    throw d.error;
  return a.notifyOnChangeProps ? d : u.trackResult(d);
}
function $d(t, e, n) {
  const s = Pt(t, e, n);
  return Ud(s, ed);
}
const Ks = (t) => {
  let e;
  const n = /* @__PURE__ */ new Set(), s = (l, h) => {
    const v = typeof l == "function" ? l(e) : l;
    if (!Object.is(v, e)) {
      const m = e;
      e = h ?? typeof v != "object" ? v : Object.assign({}, e, v), n.forEach((k) => k(e, m));
    }
  }, i = () => e, d = { setState: s, getState: i, subscribe: (l) => (n.add(l), () => n.delete(l)), destroy: () => {
    n.clear();
  } };
  return e = t(s, i, d), d;
}, qd = (t) => t ? Ks(t) : Ks;
var Pn = { exports: {} }, cn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function Fd() {
  if (Gs)
    return cn;
  Gs = 1;
  var t = Gr, e = Hn();
  function n(h, v) {
    return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
  }
  var s = typeof Object.is == "function" ? Object.is : n, i = e.useSyncExternalStore, a = t.useRef, u = t.useEffect, d = t.useMemo, l = t.useDebugValue;
  return cn.useSyncExternalStoreWithSelector = function(h, v, m, k, x) {
    var w = a(null);
    if (w.current === null) {
      var C = { hasValue: !1, value: null };
      w.current = C;
    } else
      C = w.current;
    w = d(function() {
      function Z(P) {
        if (!D) {
          if (D = !0, N = P, P = k(P), x !== void 0 && C.hasValue) {
            var R = C.value;
            if (x(R, P))
              return I = R;
          }
          return I = P;
        }
        if (R = I, s(N, P))
          return R;
        var j = k(P);
        return x !== void 0 && x(R, j) ? R : (N = P, I = j);
      }
      var D = !1, N, I, U = m === void 0 ? null : m;
      return [function() {
        return Z(v());
      }, U === null ? void 0 : function() {
        return Z(U());
      }];
    }, [v, m, k, x]);
    var O = i(h, w[0], w[1]);
    return u(function() {
      C.hasValue = !0, C.value = O;
    }, [O]), l(O), O;
  }, cn;
}
var ln = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;
function Bd() {
  return Js || (Js = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = Gr, e = Hn();
    function n(v, m) {
      return v === m && (v !== 0 || 1 / v === 1 / m) || v !== v && m !== m;
    }
    var s = typeof Object.is == "function" ? Object.is : n, i = e.useSyncExternalStore, a = t.useRef, u = t.useEffect, d = t.useMemo, l = t.useDebugValue;
    function h(v, m, k, x, w) {
      var C = a(null), O;
      C.current === null ? (O = {
        hasValue: !1,
        value: null
      }, C.current = O) : O = C.current;
      var Z = d(function() {
        var U = !1, P, R, j = function(de) {
          if (!U) {
            U = !0, P = de;
            var ce = x(de);
            if (w !== void 0 && O.hasValue) {
              var pe = O.value;
              if (w(pe, ce))
                return R = pe, pe;
            }
            return R = ce, ce;
          }
          var me = P, Ae = R;
          if (s(me, de))
            return Ae;
          var ae = x(de);
          return w !== void 0 && w(Ae, ae) ? Ae : (P = de, R = ae, ae);
        }, $ = k === void 0 ? null : k, te = function() {
          return j(m());
        }, ue = $ === null ? void 0 : function() {
          return j($());
        };
        return [te, ue];
      }, [m, k, x, w]), D = Z[0], N = Z[1], I = i(v, D, N);
      return u(function() {
        O.hasValue = !0, O.value = I;
      }, [I]), l(I), I;
    }
    ln.useSyncExternalStoreWithSelector = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ln;
}
({}).NODE_ENV === "production" ? Pn.exports = Fd() : Pn.exports = Bd();
var zd = Pn.exports;
const Qd = /* @__PURE__ */ Mn(zd), { useSyncExternalStoreWithSelector: Hd } = Qd;
function Wd(t, e = t.getState, n) {
  const s = Hd(
    t.subscribe,
    t.getState,
    t.getServerState || t.getState,
    e,
    n
  );
  return Fn(s), s;
}
const Ys = (t) => {
  const e = typeof t == "function" ? qd(t) : t, n = (s, i) => Wd(e, s, i);
  return Object.assign(n, e), n;
}, Kd = (t) => t ? Ys(t) : Ys;
var Gd = (t) => Kd(t);
const Dr = Gd(() => ({})), Jd = () => Dr(({
  config: t
}) => t), Yd = () => Dr(({
  hass: t
}) => t);
var Xd = globalThis && globalThis.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var s = 0, i = e.length, a; s < i; s++)
      (a || !(s in e)) && (a || (a = Array.prototype.slice.call(e, 0, s)), a[s] = e[s]);
  return t.concat(a || Array.prototype.slice.call(e));
};
function ec(t, e, n) {
  var s = t.length - e.length, i = Array.from(e);
  if (s === 0)
    return t.apply(void 0, i);
  if (s === 1) {
    var a = function(u) {
      return t.apply(void 0, Xd([u], i, !1));
    };
    return (n || t.lazy) && (a.lazy = n || t.lazy, a.lazyArgs = e), a;
  }
  throw new Error("Wrong number of arguments");
}
function tc() {
  return ec(rc, arguments);
}
function rc(t, e, n) {
  for (var s = t, i = 0, a = e; i < a.length; i++) {
    var u = a[i];
    if (s == null || s[u] == null)
      return n;
    s = s[u];
  }
  return s;
}
var nc = globalThis && globalThis.__spreadArray || function(t, e, n) {
  if (n || arguments.length === 2)
    for (var s = 0, i = e.length, a; s < i; s++)
      (a || !(s in e)) && (a || (a = Array.prototype.slice.call(e, 0, s)), a[s] = e[s]);
  return t.concat(a || Array.prototype.slice.call(e));
};
function sc(t) {
  return va(t);
}
function va(t) {
  var e;
  if (t.length === 0)
    return [];
  var n = (e = t.match(/^\[(.+?)\](.*)$/)) !== null && e !== void 0 ? e : t.match(/^\.?([^.[\]]+)(.*)$/);
  if (n) {
    var s = n[1], i = n[2];
    return nc([s], va(i), !0);
  }
  return [t];
}
function ga(t, e) {
  const n = sc(t), s = tc(e.hass, n, void 0);
  return s === void 0 ? null : s;
}
function ba(t) {
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function ic(t, e) {
  const n = ga(t.expression, e);
  if (n === void 0)
    return {
      success: !1
    };
  const s = ba(n);
  return t.greaterThan !== void 0 && (s === null || s <= t.greaterThan) ? {
    success: !1
  } : t.lessThan !== void 0 && (s === null || s >= t.lessThan) ? {
    success: !1
  } : {
    success: !0,
    data: t.value
  };
}
var ac = {
  jet: [{ index: 0, rgb: [0, 0, 131] }, { index: 0.125, rgb: [0, 60, 170] }, { index: 0.375, rgb: [5, 255, 255] }, { index: 0.625, rgb: [255, 255, 0] }, { index: 0.875, rgb: [250, 0, 0] }, { index: 1, rgb: [128, 0, 0] }],
  hsv: [{ index: 0, rgb: [255, 0, 0] }, { index: 0.169, rgb: [253, 255, 2] }, { index: 0.173, rgb: [247, 255, 2] }, { index: 0.337, rgb: [0, 252, 4] }, { index: 0.341, rgb: [0, 252, 10] }, { index: 0.506, rgb: [1, 249, 255] }, { index: 0.671, rgb: [2, 0, 253] }, { index: 0.675, rgb: [8, 0, 253] }, { index: 0.839, rgb: [255, 0, 251] }, { index: 0.843, rgb: [255, 0, 245] }, { index: 1, rgb: [255, 0, 6] }],
  hot: [{ index: 0, rgb: [0, 0, 0] }, { index: 0.3, rgb: [230, 0, 0] }, { index: 0.6, rgb: [255, 210, 0] }, { index: 1, rgb: [255, 255, 255] }],
  spring: [{ index: 0, rgb: [255, 0, 255] }, { index: 1, rgb: [255, 255, 0] }],
  summer: [{ index: 0, rgb: [0, 128, 102] }, { index: 1, rgb: [255, 255, 102] }],
  autumn: [{ index: 0, rgb: [255, 0, 0] }, { index: 1, rgb: [255, 255, 0] }],
  winter: [{ index: 0, rgb: [0, 0, 255] }, { index: 1, rgb: [0, 255, 128] }],
  bone: [{ index: 0, rgb: [0, 0, 0] }, { index: 0.376, rgb: [84, 84, 116] }, { index: 0.753, rgb: [169, 200, 200] }, { index: 1, rgb: [255, 255, 255] }],
  copper: [{ index: 0, rgb: [0, 0, 0] }, { index: 0.804, rgb: [255, 160, 102] }, { index: 1, rgb: [255, 199, 127] }],
  greys: [{ index: 0, rgb: [0, 0, 0] }, { index: 1, rgb: [255, 255, 255] }],
  yignbu: [{ index: 0, rgb: [8, 29, 88] }, { index: 0.125, rgb: [37, 52, 148] }, { index: 0.25, rgb: [34, 94, 168] }, { index: 0.375, rgb: [29, 145, 192] }, { index: 0.5, rgb: [65, 182, 196] }, { index: 0.625, rgb: [127, 205, 187] }, { index: 0.75, rgb: [199, 233, 180] }, { index: 0.875, rgb: [237, 248, 217] }, { index: 1, rgb: [255, 255, 217] }],
  greens: [{ index: 0, rgb: [0, 68, 27] }, { index: 0.125, rgb: [0, 109, 44] }, { index: 0.25, rgb: [35, 139, 69] }, { index: 0.375, rgb: [65, 171, 93] }, { index: 0.5, rgb: [116, 196, 118] }, { index: 0.625, rgb: [161, 217, 155] }, { index: 0.75, rgb: [199, 233, 192] }, { index: 0.875, rgb: [229, 245, 224] }, { index: 1, rgb: [247, 252, 245] }],
  yiorrd: [{ index: 0, rgb: [128, 0, 38] }, { index: 0.125, rgb: [189, 0, 38] }, { index: 0.25, rgb: [227, 26, 28] }, { index: 0.375, rgb: [252, 78, 42] }, { index: 0.5, rgb: [253, 141, 60] }, { index: 0.625, rgb: [254, 178, 76] }, { index: 0.75, rgb: [254, 217, 118] }, { index: 0.875, rgb: [255, 237, 160] }, { index: 1, rgb: [255, 255, 204] }],
  bluered: [{ index: 0, rgb: [0, 0, 255] }, { index: 1, rgb: [255, 0, 0] }],
  rdbu: [{ index: 0, rgb: [5, 10, 172] }, { index: 0.35, rgb: [106, 137, 247] }, { index: 0.5, rgb: [190, 190, 190] }, { index: 0.6, rgb: [220, 170, 132] }, { index: 0.7, rgb: [230, 145, 90] }, { index: 1, rgb: [178, 10, 28] }],
  picnic: [{ index: 0, rgb: [0, 0, 255] }, { index: 0.1, rgb: [51, 153, 255] }, { index: 0.2, rgb: [102, 204, 255] }, { index: 0.3, rgb: [153, 204, 255] }, { index: 0.4, rgb: [204, 204, 255] }, { index: 0.5, rgb: [255, 255, 255] }, { index: 0.6, rgb: [255, 204, 255] }, { index: 0.7, rgb: [255, 153, 255] }, { index: 0.8, rgb: [255, 102, 204] }, { index: 0.9, rgb: [255, 102, 102] }, { index: 1, rgb: [255, 0, 0] }],
  rainbow: [{ index: 0, rgb: [150, 0, 90] }, { index: 0.125, rgb: [0, 0, 200] }, { index: 0.25, rgb: [0, 25, 255] }, { index: 0.375, rgb: [0, 152, 255] }, { index: 0.5, rgb: [44, 255, 150] }, { index: 0.625, rgb: [151, 255, 0] }, { index: 0.75, rgb: [255, 234, 0] }, { index: 0.875, rgb: [255, 111, 0] }, { index: 1, rgb: [255, 0, 0] }],
  portland: [{ index: 0, rgb: [12, 51, 131] }, { index: 0.25, rgb: [10, 136, 186] }, { index: 0.5, rgb: [242, 211, 56] }, { index: 0.75, rgb: [242, 143, 56] }, { index: 1, rgb: [217, 30, 30] }],
  blackbody: [{ index: 0, rgb: [0, 0, 0] }, { index: 0.2, rgb: [230, 0, 0] }, { index: 0.4, rgb: [230, 210, 0] }, { index: 0.7, rgb: [255, 255, 255] }, { index: 1, rgb: [160, 200, 255] }],
  earth: [{ index: 0, rgb: [0, 0, 130] }, { index: 0.1, rgb: [0, 180, 180] }, { index: 0.2, rgb: [40, 210, 40] }, { index: 0.4, rgb: [230, 230, 50] }, { index: 0.6, rgb: [120, 70, 20] }, { index: 1, rgb: [255, 255, 255] }],
  electric: [{ index: 0, rgb: [0, 0, 0] }, { index: 0.15, rgb: [30, 0, 100] }, { index: 0.4, rgb: [120, 0, 100] }, { index: 0.6, rgb: [160, 90, 0] }, { index: 0.8, rgb: [230, 200, 0] }, { index: 1, rgb: [255, 250, 220] }],
  alpha: [{ index: 0, rgb: [255, 255, 255, 0] }, { index: 1, rgb: [255, 255, 255, 1] }],
  viridis: [{ index: 0, rgb: [68, 1, 84] }, { index: 0.13, rgb: [71, 44, 122] }, { index: 0.25, rgb: [59, 81, 139] }, { index: 0.38, rgb: [44, 113, 142] }, { index: 0.5, rgb: [33, 144, 141] }, { index: 0.63, rgb: [39, 173, 129] }, { index: 0.75, rgb: [92, 200, 99] }, { index: 0.88, rgb: [170, 220, 50] }, { index: 1, rgb: [253, 231, 37] }],
  inferno: [{ index: 0, rgb: [0, 0, 4] }, { index: 0.13, rgb: [31, 12, 72] }, { index: 0.25, rgb: [85, 15, 109] }, { index: 0.38, rgb: [136, 34, 106] }, { index: 0.5, rgb: [186, 54, 85] }, { index: 0.63, rgb: [227, 89, 51] }, { index: 0.75, rgb: [249, 140, 10] }, { index: 0.88, rgb: [249, 201, 50] }, { index: 1, rgb: [252, 255, 164] }],
  magma: [{ index: 0, rgb: [0, 0, 4] }, { index: 0.13, rgb: [28, 16, 68] }, { index: 0.25, rgb: [79, 18, 123] }, { index: 0.38, rgb: [129, 37, 129] }, { index: 0.5, rgb: [181, 54, 122] }, { index: 0.63, rgb: [229, 80, 100] }, { index: 0.75, rgb: [251, 135, 97] }, { index: 0.88, rgb: [254, 194, 135] }, { index: 1, rgb: [252, 253, 191] }],
  plasma: [{ index: 0, rgb: [13, 8, 135] }, { index: 0.13, rgb: [75, 3, 161] }, { index: 0.25, rgb: [125, 3, 168] }, { index: 0.38, rgb: [168, 34, 150] }, { index: 0.5, rgb: [203, 70, 121] }, { index: 0.63, rgb: [229, 107, 93] }, { index: 0.75, rgb: [248, 148, 65] }, { index: 0.88, rgb: [253, 195, 40] }, { index: 1, rgb: [240, 249, 33] }],
  warm: [{ index: 0, rgb: [125, 0, 179] }, { index: 0.13, rgb: [172, 0, 187] }, { index: 0.25, rgb: [219, 0, 170] }, { index: 0.38, rgb: [255, 0, 130] }, { index: 0.5, rgb: [255, 63, 74] }, { index: 0.63, rgb: [255, 123, 0] }, { index: 0.75, rgb: [234, 176, 0] }, { index: 0.88, rgb: [190, 228, 0] }, { index: 1, rgb: [147, 255, 0] }],
  cool: [{ index: 0, rgb: [125, 0, 179] }, { index: 0.13, rgb: [116, 0, 218] }, { index: 0.25, rgb: [98, 74, 237] }, { index: 0.38, rgb: [68, 146, 231] }, { index: 0.5, rgb: [0, 204, 197] }, { index: 0.63, rgb: [0, 247, 146] }, { index: 0.75, rgb: [0, 255, 88] }, { index: 0.88, rgb: [40, 255, 8] }, { index: 1, rgb: [147, 255, 0] }],
  "rainbow-soft": [{ index: 0, rgb: [125, 0, 179] }, { index: 0.1, rgb: [199, 0, 180] }, { index: 0.2, rgb: [255, 0, 121] }, { index: 0.3, rgb: [255, 108, 0] }, { index: 0.4, rgb: [222, 194, 0] }, { index: 0.5, rgb: [150, 255, 0] }, { index: 0.6, rgb: [0, 255, 55] }, { index: 0.7, rgb: [0, 246, 150] }, { index: 0.8, rgb: [50, 167, 222] }, { index: 0.9, rgb: [103, 51, 235] }, { index: 1, rgb: [124, 0, 186] }],
  bathymetry: [{ index: 0, rgb: [40, 26, 44] }, { index: 0.13, rgb: [59, 49, 90] }, { index: 0.25, rgb: [64, 76, 139] }, { index: 0.38, rgb: [63, 110, 151] }, { index: 0.5, rgb: [72, 142, 158] }, { index: 0.63, rgb: [85, 174, 163] }, { index: 0.75, rgb: [120, 206, 163] }, { index: 0.88, rgb: [187, 230, 172] }, { index: 1, rgb: [253, 254, 204] }],
  cdom: [{ index: 0, rgb: [47, 15, 62] }, { index: 0.13, rgb: [87, 23, 86] }, { index: 0.25, rgb: [130, 28, 99] }, { index: 0.38, rgb: [171, 41, 96] }, { index: 0.5, rgb: [206, 67, 86] }, { index: 0.63, rgb: [230, 106, 84] }, { index: 0.75, rgb: [242, 149, 103] }, { index: 0.88, rgb: [249, 193, 135] }, { index: 1, rgb: [254, 237, 176] }],
  chlorophyll: [{ index: 0, rgb: [18, 36, 20] }, { index: 0.13, rgb: [25, 63, 41] }, { index: 0.25, rgb: [24, 91, 59] }, { index: 0.38, rgb: [13, 119, 72] }, { index: 0.5, rgb: [18, 148, 80] }, { index: 0.63, rgb: [80, 173, 89] }, { index: 0.75, rgb: [132, 196, 122] }, { index: 0.88, rgb: [175, 221, 162] }, { index: 1, rgb: [215, 249, 208] }],
  density: [{ index: 0, rgb: [54, 14, 36] }, { index: 0.13, rgb: [89, 23, 80] }, { index: 0.25, rgb: [110, 45, 132] }, { index: 0.38, rgb: [120, 77, 178] }, { index: 0.5, rgb: [120, 113, 213] }, { index: 0.63, rgb: [115, 151, 228] }, { index: 0.75, rgb: [134, 185, 227] }, { index: 0.88, rgb: [177, 214, 227] }, { index: 1, rgb: [230, 241, 241] }],
  "freesurface-blue": [{ index: 0, rgb: [30, 4, 110] }, { index: 0.13, rgb: [47, 14, 176] }, { index: 0.25, rgb: [41, 45, 236] }, { index: 0.38, rgb: [25, 99, 212] }, { index: 0.5, rgb: [68, 131, 200] }, { index: 0.63, rgb: [114, 156, 197] }, { index: 0.75, rgb: [157, 181, 203] }, { index: 0.88, rgb: [200, 208, 216] }, { index: 1, rgb: [241, 237, 236] }],
  "freesurface-red": [{ index: 0, rgb: [60, 9, 18] }, { index: 0.13, rgb: [100, 17, 27] }, { index: 0.25, rgb: [142, 20, 29] }, { index: 0.38, rgb: [177, 43, 27] }, { index: 0.5, rgb: [192, 87, 63] }, { index: 0.63, rgb: [205, 125, 105] }, { index: 0.75, rgb: [216, 162, 148] }, { index: 0.88, rgb: [227, 199, 193] }, { index: 1, rgb: [241, 237, 236] }],
  oxygen: [{ index: 0, rgb: [64, 5, 5] }, { index: 0.13, rgb: [106, 6, 15] }, { index: 0.25, rgb: [144, 26, 7] }, { index: 0.38, rgb: [168, 64, 3] }, { index: 0.5, rgb: [188, 100, 4] }, { index: 0.63, rgb: [206, 136, 11] }, { index: 0.75, rgb: [220, 174, 25] }, { index: 0.88, rgb: [231, 215, 44] }, { index: 1, rgb: [248, 254, 105] }],
  par: [{ index: 0, rgb: [51, 20, 24] }, { index: 0.13, rgb: [90, 32, 35] }, { index: 0.25, rgb: [129, 44, 34] }, { index: 0.38, rgb: [159, 68, 25] }, { index: 0.5, rgb: [182, 99, 19] }, { index: 0.63, rgb: [199, 134, 22] }, { index: 0.75, rgb: [212, 171, 35] }, { index: 0.88, rgb: [221, 210, 54] }, { index: 1, rgb: [225, 253, 75] }],
  phase: [{ index: 0, rgb: [145, 105, 18] }, { index: 0.13, rgb: [184, 71, 38] }, { index: 0.25, rgb: [186, 58, 115] }, { index: 0.38, rgb: [160, 71, 185] }, { index: 0.5, rgb: [110, 97, 218] }, { index: 0.63, rgb: [50, 123, 164] }, { index: 0.75, rgb: [31, 131, 110] }, { index: 0.88, rgb: [77, 129, 34] }, { index: 1, rgb: [145, 105, 18] }],
  salinity: [{ index: 0, rgb: [42, 24, 108] }, { index: 0.13, rgb: [33, 50, 162] }, { index: 0.25, rgb: [15, 90, 145] }, { index: 0.38, rgb: [40, 118, 137] }, { index: 0.5, rgb: [59, 146, 135] }, { index: 0.63, rgb: [79, 175, 126] }, { index: 0.75, rgb: [120, 203, 104] }, { index: 0.88, rgb: [193, 221, 100] }, { index: 1, rgb: [253, 239, 154] }],
  temperature: [{ index: 0, rgb: [4, 35, 51] }, { index: 0.13, rgb: [23, 51, 122] }, { index: 0.25, rgb: [85, 59, 157] }, { index: 0.38, rgb: [129, 79, 143] }, { index: 0.5, rgb: [175, 95, 130] }, { index: 0.63, rgb: [222, 112, 101] }, { index: 0.75, rgb: [249, 146, 66] }, { index: 0.88, rgb: [249, 196, 65] }, { index: 1, rgb: [232, 250, 91] }],
  turbidity: [{ index: 0, rgb: [34, 31, 27] }, { index: 0.13, rgb: [65, 50, 41] }, { index: 0.25, rgb: [98, 69, 52] }, { index: 0.38, rgb: [131, 89, 57] }, { index: 0.5, rgb: [161, 112, 59] }, { index: 0.63, rgb: [185, 140, 66] }, { index: 0.75, rgb: [202, 174, 88] }, { index: 0.88, rgb: [216, 209, 126] }, { index: 1, rgb: [233, 246, 171] }],
  "velocity-blue": [{ index: 0, rgb: [17, 32, 64] }, { index: 0.13, rgb: [35, 52, 116] }, { index: 0.25, rgb: [29, 81, 156] }, { index: 0.38, rgb: [31, 113, 162] }, { index: 0.5, rgb: [50, 144, 169] }, { index: 0.63, rgb: [87, 173, 176] }, { index: 0.75, rgb: [149, 196, 189] }, { index: 0.88, rgb: [203, 221, 211] }, { index: 1, rgb: [254, 251, 230] }],
  "velocity-green": [{ index: 0, rgb: [23, 35, 19] }, { index: 0.13, rgb: [24, 64, 38] }, { index: 0.25, rgb: [11, 95, 45] }, { index: 0.38, rgb: [39, 123, 35] }, { index: 0.5, rgb: [95, 146, 12] }, { index: 0.63, rgb: [152, 165, 18] }, { index: 0.75, rgb: [201, 186, 69] }, { index: 0.88, rgb: [233, 216, 137] }, { index: 1, rgb: [255, 253, 205] }],
  cubehelix: [{ index: 0, rgb: [0, 0, 0] }, { index: 0.07, rgb: [22, 5, 59] }, { index: 0.13, rgb: [60, 4, 105] }, { index: 0.2, rgb: [109, 1, 135] }, { index: 0.27, rgb: [161, 0, 147] }, { index: 0.33, rgb: [210, 2, 142] }, { index: 0.4, rgb: [251, 11, 123] }, { index: 0.47, rgb: [255, 29, 97] }, { index: 0.53, rgb: [255, 54, 69] }, { index: 0.6, rgb: [255, 85, 46] }, { index: 0.67, rgb: [255, 120, 34] }, { index: 0.73, rgb: [255, 157, 37] }, { index: 0.8, rgb: [241, 191, 57] }, { index: 0.87, rgb: [224, 220, 93] }, { index: 0.93, rgb: [218, 241, 142] }, { index: 1, rgb: [227, 253, 198] }]
};
function oc(t, e, n) {
  return t * (1 - n) + e * n;
}
var uc = oc, Xs = ac, yr = uc, dc = cc;
function cc(t) {
  var e, n, s, i, a, u, d, l, k, h, v;
  if (t || (t = {}), l = (t.nshades || 72) - 1, d = t.format || "hex", u = t.colormap, u || (u = "jet"), typeof u == "string") {
    if (u = u.toLowerCase(), !Xs[u])
      throw Error(u + " not a supported colorscale");
    a = Xs[u];
  } else if (Array.isArray(u))
    a = u.slice();
  else
    throw Error("unsupported colormap option", u);
  if (a.length > l + 1)
    throw new Error(
      u + " map requires nshades to be at least size " + a.length
    );
  Array.isArray(t.alpha) ? t.alpha.length !== 2 ? h = [1, 1] : h = t.alpha.slice() : typeof t.alpha == "number" ? h = [t.alpha, t.alpha] : h = [1, 1], e = a.map(function(C) {
    return Math.round(C.index * l);
  }), h[0] = Math.min(Math.max(h[0], 0), 1), h[1] = Math.min(Math.max(h[1], 0), 1);
  var m = a.map(function(C, O) {
    var Z = a[O].index, D = a[O].rgb.slice();
    return D.length === 4 && D[3] >= 0 && D[3] <= 1 || (D[3] = h[0] + (h[1] - h[0]) * Z), D;
  }), k = [];
  for (v = 0; v < e.length - 1; ++v) {
    i = e[v + 1] - e[v], n = m[v], s = m[v + 1];
    for (var x = 0; x < i; x++) {
      var w = x / i;
      k.push([
        Math.round(yr(n[0], s[0], w)),
        Math.round(yr(n[1], s[1], w)),
        Math.round(yr(n[2], s[2], w)),
        yr(n[3], s[3], w)
      ]);
    }
  }
  return k.push(a[a.length - 1].rgb.concat(h[1])), d === "hex" ? k = k.map(fc) : d === "rgbaString" ? k = k.map(hc) : d === "float" && (k = k.map(lc)), k;
}
function lc(t) {
  return [
    t[0] / 255,
    t[1] / 255,
    t[2] / 255,
    t[3]
  ];
}
function fc(t) {
  for (var e, n = "#", s = 0; s < 3; ++s)
    e = t[s], e = e.toString(16), n += ("00" + e).substr(e.length);
  return n;
}
function hc(t) {
  return "rgba(" + t.join(",") + ")";
}
const pc = /* @__PURE__ */ Mn(dc);
var mc = {
  rgb2hsl: nr,
  rgb2hsv: Jr,
  rgb2hwb: sr,
  rgb2cmyk: ir,
  rgb2keyword: ar,
  rgb2xyz: Wn,
  rgb2lab: Kn,
  rgb2lch: _c,
  hsl2rgb: Yr,
  hsl2hsv: yc,
  hsl2hwb: vc,
  hsl2cmyk: gc,
  hsl2keyword: bc,
  hsv2rgb: Xr,
  hsv2hsl: xc,
  hsv2hwb: wc,
  hsv2cmyk: kc,
  hsv2keyword: Tc,
  hwb2rgb: or,
  hwb2hsl: Cc,
  hwb2hsv: Sc,
  hwb2cmyk: Oc,
  hwb2keyword: Ec,
  cmyk2rgb: ur,
  cmyk2hsl: Ic,
  cmyk2hsv: Zc,
  cmyk2hwb: Pc,
  cmyk2keyword: Rc,
  keyword2rgb: Ye,
  keyword2hsl: Dc,
  keyword2hsv: jc,
  keyword2hwb: Lc,
  keyword2cmyk: Vc,
  keyword2lab: Uc,
  keyword2xyz: $c,
  xyz2rgb: xa,
  xyz2lab: wa,
  xyz2lch: Nc,
  lab2xyz: Gn,
  lab2rgb: ka,
  lab2lch: Jn,
  lch2lab: Yn,
  lch2xyz: Ac,
  lch2rgb: Mc
};
function nr(t) {
  var e = t[0] / 255, n = t[1] / 255, s = t[2] / 255, i = Math.min(e, n, s), a = Math.max(e, n, s), u = a - i, d, l, h;
  return a == i ? d = 0 : e == a ? d = (n - s) / u : n == a ? d = 2 + (s - e) / u : s == a && (d = 4 + (e - n) / u), d = Math.min(d * 60, 360), d < 0 && (d += 360), h = (i + a) / 2, a == i ? l = 0 : h <= 0.5 ? l = u / (a + i) : l = u / (2 - a - i), [d, l * 100, h * 100];
}
function Jr(t) {
  var e = t[0], n = t[1], s = t[2], i = Math.min(e, n, s), a = Math.max(e, n, s), u = a - i, d, l, h;
  return a == 0 ? l = 0 : l = u / a * 1e3 / 10, a == i ? d = 0 : e == a ? d = (n - s) / u : n == a ? d = 2 + (s - e) / u : s == a && (d = 4 + (e - n) / u), d = Math.min(d * 60, 360), d < 0 && (d += 360), h = a / 255 * 1e3 / 10, [d, l, h];
}
function sr(t) {
  var e = t[0], n = t[1], a = t[2], s = nr(t)[0], i = 1 / 255 * Math.min(e, Math.min(n, a)), a = 1 - 1 / 255 * Math.max(e, Math.max(n, a));
  return [s, i * 100, a * 100];
}
function ir(t) {
  var e = t[0] / 255, n = t[1] / 255, s = t[2] / 255, i, a, u, d;
  return d = Math.min(1 - e, 1 - n, 1 - s), i = (1 - e - d) / (1 - d) || 0, a = (1 - n - d) / (1 - d) || 0, u = (1 - s - d) / (1 - d) || 0, [i * 100, a * 100, u * 100, d * 100];
}
function ar(t) {
  return Ta[JSON.stringify(t)];
}
function Wn(t) {
  var e = t[0] / 255, n = t[1] / 255, s = t[2] / 255;
  e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92, n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92, s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92;
  var i = e * 0.4124 + n * 0.3576 + s * 0.1805, a = e * 0.2126 + n * 0.7152 + s * 0.0722, u = e * 0.0193 + n * 0.1192 + s * 0.9505;
  return [i * 100, a * 100, u * 100];
}
function Kn(t) {
  var e = Wn(t), n = e[0], s = e[1], i = e[2], a, u, d;
  return n /= 95.047, s /= 100, i /= 108.883, n = n > 8856e-6 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, s = s > 8856e-6 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, i = i > 8856e-6 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, a = 116 * s - 16, u = 500 * (n - s), d = 200 * (s - i), [a, u, d];
}
function _c(t) {
  return Jn(Kn(t));
}
function Yr(t) {
  var e = t[0] / 360, n = t[1] / 100, s = t[2] / 100, i, a, u, d, l;
  if (n == 0)
    return l = s * 255, [l, l, l];
  s < 0.5 ? a = s * (1 + n) : a = s + n - s * n, i = 2 * s - a, d = [0, 0, 0];
  for (var h = 0; h < 3; h++)
    u = e + 1 / 3 * -(h - 1), u < 0 && u++, u > 1 && u--, 6 * u < 1 ? l = i + (a - i) * 6 * u : 2 * u < 1 ? l = a : 3 * u < 2 ? l = i + (a - i) * (2 / 3 - u) * 6 : l = i, d[h] = l * 255;
  return d;
}
function yc(t) {
  var e = t[0], n = t[1] / 100, s = t[2] / 100, i, a;
  return s === 0 ? [0, 0, 0] : (s *= 2, n *= s <= 1 ? s : 2 - s, a = (s + n) / 2, i = 2 * n / (s + n), [e, i * 100, a * 100]);
}
function vc(t) {
  return sr(Yr(t));
}
function gc(t) {
  return ir(Yr(t));
}
function bc(t) {
  return ar(Yr(t));
}
function Xr(t) {
  var e = t[0] / 60, n = t[1] / 100, l = t[2] / 100, s = Math.floor(e) % 6, i = e - Math.floor(e), a = 255 * l * (1 - n), u = 255 * l * (1 - n * i), d = 255 * l * (1 - n * (1 - i)), l = 255 * l;
  switch (s) {
    case 0:
      return [l, d, a];
    case 1:
      return [u, l, a];
    case 2:
      return [a, l, d];
    case 3:
      return [a, u, l];
    case 4:
      return [d, a, l];
    case 5:
      return [l, a, u];
  }
}
function xc(t) {
  var e = t[0], n = t[1] / 100, s = t[2] / 100, i, a;
  return a = (2 - n) * s, i = n * s, i /= a <= 1 ? a : 2 - a, i = i || 0, a /= 2, [e, i * 100, a * 100];
}
function wc(t) {
  return sr(Xr(t));
}
function kc(t) {
  return ir(Xr(t));
}
function Tc(t) {
  return ar(Xr(t));
}
function or(t) {
  var e = t[0] / 360, n = t[1] / 100, s = t[2] / 100, i = n + s, a, u, d, l;
  switch (i > 1 && (n /= i, s /= i), a = Math.floor(6 * e), u = 1 - s, d = 6 * e - a, a & 1 && (d = 1 - d), l = n + d * (u - n), a) {
    default:
    case 6:
    case 0:
      r = u, g = l, b = n;
      break;
    case 1:
      r = l, g = u, b = n;
      break;
    case 2:
      r = n, g = u, b = l;
      break;
    case 3:
      r = n, g = l, b = u;
      break;
    case 4:
      r = l, g = n, b = u;
      break;
    case 5:
      r = u, g = n, b = l;
      break;
  }
  return [r * 255, g * 255, b * 255];
}
function Cc(t) {
  return nr(or(t));
}
function Sc(t) {
  return Jr(or(t));
}
function Oc(t) {
  return ir(or(t));
}
function Ec(t) {
  return ar(or(t));
}
function ur(t) {
  var e = t[0] / 100, n = t[1] / 100, s = t[2] / 100, i = t[3] / 100, a, u, d;
  return a = 1 - Math.min(1, e * (1 - i) + i), u = 1 - Math.min(1, n * (1 - i) + i), d = 1 - Math.min(1, s * (1 - i) + i), [a * 255, u * 255, d * 255];
}
function Ic(t) {
  return nr(ur(t));
}
function Zc(t) {
  return Jr(ur(t));
}
function Pc(t) {
  return sr(ur(t));
}
function Rc(t) {
  return ar(ur(t));
}
function xa(t) {
  var e = t[0] / 100, n = t[1] / 100, s = t[2] / 100, i, a, u;
  return i = e * 3.2406 + n * -1.5372 + s * -0.4986, a = e * -0.9689 + n * 1.8758 + s * 0.0415, u = e * 0.0557 + n * -0.204 + s * 1.057, i = i > 31308e-7 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i = i * 12.92, a = a > 31308e-7 ? 1.055 * Math.pow(a, 1 / 2.4) - 0.055 : a = a * 12.92, u = u > 31308e-7 ? 1.055 * Math.pow(u, 1 / 2.4) - 0.055 : u = u * 12.92, i = Math.min(Math.max(0, i), 1), a = Math.min(Math.max(0, a), 1), u = Math.min(Math.max(0, u), 1), [i * 255, a * 255, u * 255];
}
function wa(t) {
  var e = t[0], n = t[1], s = t[2], i, a, u;
  return e /= 95.047, n /= 100, s /= 108.883, e = e > 8856e-6 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, n = n > 8856e-6 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, s = s > 8856e-6 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, i = 116 * n - 16, a = 500 * (e - n), u = 200 * (n - s), [i, a, u];
}
function Nc(t) {
  return Jn(wa(t));
}
function Gn(t) {
  var e = t[0], n = t[1], s = t[2], i, a, u, d;
  return e <= 8 ? (a = e * 100 / 903.3, d = 7.787 * (a / 100) + 16 / 116) : (a = 100 * Math.pow((e + 16) / 116, 3), d = Math.pow(a / 100, 1 / 3)), i = i / 95.047 <= 8856e-6 ? i = 95.047 * (n / 500 + d - 16 / 116) / 7.787 : 95.047 * Math.pow(n / 500 + d, 3), u = u / 108.883 <= 8859e-6 ? u = 108.883 * (d - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(d - s / 200, 3), [i, a, u];
}
function Jn(t) {
  var e = t[0], n = t[1], s = t[2], i, a, u;
  return i = Math.atan2(s, n), a = i * 360 / 2 / Math.PI, a < 0 && (a += 360), u = Math.sqrt(n * n + s * s), [e, u, a];
}
function ka(t) {
  return xa(Gn(t));
}
function Yn(t) {
  var e = t[0], n = t[1], s = t[2], i, a, u;
  return u = s / 360 * 2 * Math.PI, i = n * Math.cos(u), a = n * Math.sin(u), [e, i, a];
}
function Ac(t) {
  return Gn(Yn(t));
}
function Mc(t) {
  return ka(Yn(t));
}
function Ye(t) {
  return Rn[t];
}
function Dc(t) {
  return nr(Ye(t));
}
function jc(t) {
  return Jr(Ye(t));
}
function Lc(t) {
  return sr(Ye(t));
}
function Vc(t) {
  return ir(Ye(t));
}
function Uc(t) {
  return Kn(Ye(t));
}
function $c(t) {
  return Wn(Ye(t));
}
var Rn = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, Ta = {};
for (var ei in Rn)
  Ta[JSON.stringify(Rn[ei])] = ei;
var fn = mc, ze = function() {
  return new dr();
};
for (var Zt in fn) {
  ze[Zt + "Raw"] = function(t) {
    return function(e) {
      return typeof e == "number" && (e = Array.prototype.slice.call(arguments)), fn[t](e);
    };
  }(Zt);
  var ti = /(\w+)2(\w+)/.exec(Zt), hn = ti[1], qc = ti[2];
  ze[hn] = ze[hn] || {}, ze[hn][qc] = ze[Zt] = function(t) {
    return function(e) {
      typeof e == "number" && (e = Array.prototype.slice.call(arguments));
      var n = fn[t](e);
      if (typeof n == "string" || n === void 0)
        return n;
      for (var s = 0; s < n.length; s++)
        n[s] = Math.round(n[s]);
      return n;
    };
  }(Zt);
}
var dr = function() {
  this.convs = {};
};
dr.prototype.routeSpace = function(t, e) {
  var n = e[0];
  return n === void 0 ? this.getValues(t) : (typeof n == "number" && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
};
dr.prototype.setValues = function(t, e) {
  return this.space = t, this.convs = {}, this.convs[t] = e, this;
};
dr.prototype.getValues = function(t) {
  var e = this.convs[t];
  if (!e) {
    var n = this.space, s = this.convs[n];
    e = ze[n][t](s), this.convs[t] = e;
  }
  return e;
};
["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
  dr.prototype[t] = function(e) {
    return this.routeSpace(t, arguments);
  };
});
var Fc = ze, pn = Fc, Bc = function(t) {
  var e, n, s, i;
  if (e = /^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(t)) {
    var a = e[1], u = a.replace(/a$/, ""), d = u === "cmyk" ? 4 : 3;
    n = pn[u], s = e[2].replace(/^\s+|\s+$/g, "").split(/\s*,\s*/).map(function(h, v) {
      return /%$/.test(h) && v === d ? parseFloat(h) / 100 : (/%$/.test(h), parseFloat(h));
    }), a === u && s.push(1), i = s[d] === void 0 ? 1 : s[d], s = s.slice(0, d), n[u] = function() {
      return s;
    };
  } else if (/^#[A-Fa-f0-9]+$/.test(t)) {
    var u = t.replace(/^#/, ""), d = u.length;
    n = pn.rgb, s = u.split(d === 3 ? /(.)/ : /(..)/), s = s.filter(Boolean).map(function(m) {
      return parseInt(d === 3 ? m + m : m, 16);
    }), i = 1, n.rgb = function() {
      return s;
    }, s[0] || (s[0] = 0), s[1] || (s[1] = 0), s[2] || (s[2] = 0);
  } else
    n = pn.keyword, n.keyword = function() {
      return t;
    }, s = t, i = 1;
  var l = {
    rgb: void 0,
    hsl: void 0,
    hsv: void 0,
    cmyk: void 0,
    keyword: void 0,
    hex: void 0
  };
  try {
    l.rgb = n.rgb(s);
  } catch {
  }
  try {
    l.hsl = n.hsl(s);
  } catch {
  }
  try {
    l.hsv = n.hsv(s);
  } catch {
  }
  try {
    l.cmyk = n.cmyk(s);
  } catch {
  }
  try {
    l.keyword = n.keyword(s);
  } catch {
  }
  return l.rgb && (l.hex = "#" + l.rgb.map(function(h) {
    var v = h.toString(16);
    return v.length === 1 ? "0" + v : v;
  }).join("")), l.rgb && (l.rgba = l.rgb.concat(i)), l.hsl && (l.hsla = l.hsl.concat(i)), l.hsv && (l.hsva = l.hsv.concat(i)), l.cmyk && (l.cmyka = l.cmyk.concat(i)), l;
};
const zc = /* @__PURE__ */ Mn(Bc);
function Qc(t, e) {
  const n = ga(t.expression, e);
  if (n === void 0)
    return {
      success: !1
    };
  const s = ba(n);
  if (s === null)
    return {
      success: !1
    };
  const i = t.scale.map((d) => Number(d.stateValue)), a = Math.min(...i), u = Math.max(...i);
  if (isNaN(a) || isNaN(u))
    return {
      success: !1
    };
  try {
    const d = pc({
      colormap: t.scale.map((v) => ({
        index: (Number(v.stateValue) - a) / (u - a),
        rgb: zc(v.color).rgba
      })),
      nshades: 100
    }), l = Math.ceil((s - a) / (u - a) * (d.length - 1)), h = l < 0 ? d[0] : l >= d.length ? d[d.length - 1] : d[l];
    return {
      success: !0,
      data: typeof h == "string" ? h : `rgba(${h.join(",")})`
    };
  } catch {
    return {
      success: !1
    };
  }
}
function Hc(t, e) {
  for (const n of t) {
    const s = Wc(n, e);
    if (s.success)
      return s.data;
  }
  return null;
}
function Wc(t, e) {
  switch (t.type) {
    case "any-value":
      return ic(t, e);
    case "color-gradient":
      return Qc(t, e);
  }
}
var Kc = 0;
function ot(t, e, n, s, i, a) {
  var u, d, l = {};
  for (d in e)
    d == "ref" ? u = e[d] : l[d] = e[d];
  var h = { type: t, props: l, key: n, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Kc, __source: i, __self: a };
  if (typeof t == "function" && (u = t.defaultProps))
    for (d in u)
      l[d] === void 0 && (l[d] = u[d]);
  return L.vnode && L.vnode(h), h;
}
function Gc() {
  const t = Jd(), e = mt(() => new Xu(), []);
  return t ? ot(Od, {
    client: e,
    children: ot(Jc, {
      config: t
    })
  }) : null;
}
function Jc({
  config: t
}) {
  const {
    data: e
  } = $d({
    queryKey: ["svg", t.source],
    queryFn: async () => fetch(t.source).then((u) => u.text())
  }), n = mt(() => `conditional-formatting-${Math.random().toString(36).slice(2, 9)}`, []), s = Yd(), i = t.conditionalFormatting.map((u) => {
    const d = s ? Hc(u.rules, {
      hass: s
    }) : void 0;
    return {
      variableName: u.variableName,
      value: d
    };
  }), a = `#${n} { ${i.map(({
    value: u,
    variableName: d
  }) => `${d}: ${u};`).join(`
`)} }`;
  return e ? ot("div", {
    id: n,
    children: [ot("style", {
      dangerouslySetInnerHTML: {
        __html: a
      }
    }), ot("div", {
      dangerouslySetInnerHTML: {
        __html: e
      }
    })]
  }) : null;
}
class Yc extends HTMLElement {
  constructor() {
    super(...arguments);
    is(this, "_render", () => {
      ut(ot(Gc, {}), this);
    });
  }
  set hass(n) {
    Dr.setState({
      hass: n
    }), this._render();
  }
  setConfig(n) {
    const s = Lu.safeParse(n);
    if (s.success)
      Dr.setState({
        config: s.data
      });
    else {
      console.error(s.error);
      const i = pi.generateErrorMessage(s.error.issues);
      throw new Error(i);
    }
    this._render();
  }
  static getStubConfig() {
    return {
      type: "custom:conditional-formatting",
      conditionalFormatting: [],
      source: ""
    };
  }
  getCardSize() {
    return 4;
  }
}
function Xc(t) {
  window.customCards = window.customCards || [], window.customCards.push(t);
}
customElements.define("conditional-formatting", Yc);
Xc({
  type: "conditional-formatting",
  name: "Conditional formatting",
  preview: !0,
  description: "Conditonally set CSS styles for child elements"
});
console.info(`%clovelace-conditional-formatting ${uo} is installed`, "color: green; font-weight: bold", "");
