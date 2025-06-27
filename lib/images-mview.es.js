import sr, { useState as ir, useRef as Ce, useEffect as Ue } from "react";
import cr from "react-dom";
import ke from "hammerjs";
import or from "rc-queue-anim";
var he = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function ur() {
  if (Ne) return ce;
  Ne = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, a, s) {
    var u = null;
    if (s !== void 0 && (u = "" + s), a.key !== void 0 && (u = "" + a.key), "key" in a) {
      s = {};
      for (var f in a)
        f !== "key" && (s[f] = a[f]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: n,
      key: u,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return ce.Fragment = r, ce.jsx = t, ce.jsxs = t, ce;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function fr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    function e(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === re ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case m:
          return "Fragment";
        case E:
          return "Profiler";
        case h:
          return "StrictMode";
        case S:
          return "Suspense";
        case _:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case w:
            return "Portal";
          case A:
            return (i.displayName || "Context") + ".Provider";
          case R:
            return (i._context.displayName || "Context") + ".Consumer";
          case j:
            var p = i.render;
            return i = i.displayName, i || (i = p.displayName || p.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case g:
            return p = i.displayName || null, p !== null ? p : e(i.type) || "Memo";
          case V:
            p = i._payload, i = i._init;
            try {
              return e(i(p));
            } catch {
            }
        }
      return null;
    }
    function r(i) {
      return "" + i;
    }
    function t(i) {
      try {
        r(i);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var T = p.error, C = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return T.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), r(i);
      }
    }
    function n(i) {
      if (i === m) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === V)
        return "<...>";
      try {
        var p = e(i);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var i = G.A;
      return i === null ? null : i.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function u(i) {
      if (Z.call(i, "key")) {
        var p = Object.getOwnPropertyDescriptor(i, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function f(i, p) {
      function T() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: T,
        configurable: !0
      });
    }
    function c() {
      var i = e(this.type);
      return J[i] || (J[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function l(i, p, T, C, W, Y, Te, Ae) {
      return T = Y.ref, i = {
        $$typeof: b,
        type: i,
        key: p,
        props: Y,
        _owner: W
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Te
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ae
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function o(i, p, T, C, W, Y, Te, Ae) {
      var P = p.children;
      if (P !== void 0)
        if (C)
          if (te(P)) {
            for (C = 0; C < P.length; C++)
              d(P[C]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(P);
      if (Z.call(p, "key")) {
        P = e(i);
        var ne = Object.keys(p).filter(function(ar) {
          return ar !== "key";
        });
        C = 0 < ne.length ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}", Q[P + C] || (ne = 0 < ne.length ? "{" + ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          P,
          ne,
          P
        ), Q[P + C] = !0);
      }
      if (P = null, T !== void 0 && (t(T), P = "" + T), u(p) && (t(p.key), P = "" + p.key), "key" in p) {
        T = {};
        for (var _e in p)
          _e !== "key" && (T[_e] = p[_e]);
      } else T = p;
      return P && f(
        T,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), l(
        i,
        P,
        Y,
        W,
        a(),
        T,
        Te,
        Ae
      );
    }
    function d(i) {
      typeof i == "object" && i !== null && i.$$typeof === b && i._store && (i._store.validated = 1);
    }
    var v = sr, b = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), A = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), G = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, te = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var U, J = {}, B = v["react-stack-bottom-frame"].bind(
      v,
      s
    )(), H = L(n(s)), Q = {};
    oe.Fragment = m, oe.jsx = function(i, p, T, C, W) {
      var Y = 1e4 > G.recentlyCreatedOwnerStacks++;
      return o(
        i,
        p,
        T,
        !1,
        C,
        W,
        Y ? Error("react-stack-top-frame") : B,
        Y ? L(n(i)) : H
      );
    }, oe.jsxs = function(i, p, T, C, W) {
      var Y = 1e4 > G.recentlyCreatedOwnerStacks++;
      return o(
        i,
        p,
        T,
        !0,
        C,
        W,
        Y ? Error("react-stack-top-frame") : B,
        Y ? L(n(i)) : H
      );
    };
  }()), oe;
}
var Ie;
function lr() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? he.exports = ur() : he.exports = fr()), he.exports;
}
var K = lr(), I = function(e, r, t, n, a, s, u, f, c, l, o, d, v, b, w, m) {
  this.elements = window.Float32Array ? new Float32Array(16) : [];
  var h = this.elements;
  h[0] = e !== void 0 ? e : 1, h[4] = r || 0, h[8] = t || 0, h[12] = n || 0, h[1] = a || 0, h[5] = s !== void 0 ? s : 1, h[9] = u || 0, h[13] = f || 0, h[2] = c || 0, h[6] = l || 0, h[10] = o !== void 0 ? o : 1, h[14] = d || 0, h[3] = v || 0, h[7] = b || 0, h[11] = w || 0, h[15] = m !== void 0 ? m : 1;
};
I.DEG_TO_RAD = Math.PI / 180;
I.prototype = {
  set: function(e, r, t, n, a, s, u, f, c, l, o, d, v, b, w, m) {
    var h = this.elements;
    return h[0] = e, h[4] = r, h[8] = t, h[12] = n, h[1] = a, h[5] = s, h[9] = u, h[13] = f, h[2] = c, h[6] = l, h[10] = o, h[14] = d, h[3] = v, h[7] = b, h[11] = w, h[15] = m, this;
  },
  identity: function() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  },
  multiplyMatrices: function(e, r) {
    var t = e.elements, n = this.elements, a = t[0], s = t[4], u = t[8], f = t[12], c = t[1], l = t[5], o = t[9], d = t[13], v = t[2], b = t[6], w = t[10], m = t[14], h = t[3], E = t[7], R = t[11], A = t[15], j = r[0], S = r[1], _ = r[2], g = r[3], V = r[4], ee = r[5], re = r[6], G = r[7], Z = r[8], te = r[9], L = r[10], U = r[11], J = r[12], B = r[13], H = r[14], Q = r[15];
    return n[0] = a * j + s * V + u * Z + f * J, n[4] = a * S + s * ee + u * te + f * B, n[8] = a * _ + s * re + u * L + f * H, n[12] = a * g + s * G + u * U + f * Q, n[1] = c * j + l * V + o * Z + d * J, n[5] = c * S + l * ee + o * te + d * B, n[9] = c * _ + l * re + o * L + d * H, n[13] = c * g + l * G + o * U + d * Q, n[2] = v * j + b * V + w * Z + m * J, n[6] = v * S + b * ee + w * te + m * B, n[10] = v * _ + b * re + w * L + m * H, n[14] = v * g + b * G + w * U + m * Q, n[3] = h * j + E * V + R * Z + A * J, n[7] = h * S + E * ee + R * te + A * B, n[11] = h * _ + E * re + R * L + A * H, n[15] = h * g + E * G + R * U + A * Q, this;
  },
  // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
  _rounded: function(e, r) {
    return r = Math.pow(10, r || 15), Math.round(e * r) / r;
  },
  appendTransform: function(e, r, t, n, a, s, u, f, c, l, o, d, v, b) {
    var w = u * I.DEG_TO_RAD, m = this._rounded(Math.cos(w)), h = this._rounded(Math.sin(w)), E = f * I.DEG_TO_RAD, R = this._rounded(Math.cos(E)), A = this._rounded(Math.sin(E)), j = c * I.DEG_TO_RAD, S = this._rounded(Math.cos(j * -1)), _ = this._rounded(Math.sin(j * -1));
    return this.multiplyMatrices(this, [1, 0, 0, e, 0, m, h, r, 0, -h, m, t, 0, 0, 0, 1]), this.multiplyMatrices(this, [R, 0, A, 0, 0, 1, 0, 0, -A, 0, R, 0, 0, 0, 0, 1]), this.multiplyMatrices(this, [S * n, _ * a, 0, 0, -_ * n, S * a, 0, 0, 0, 0, 1 * s, 0, 0, 0, 0, 1]), (l || o) && this.multiplyMatrices(this, [
      this._rounded(Math.cos(l * I.DEG_TO_RAD)),
      this._rounded(Math.sin(l * I.DEG_TO_RAD)),
      0,
      0,
      -1 * this._rounded(Math.sin(o * I.DEG_TO_RAD)),
      this._rounded(Math.cos(o * I.DEG_TO_RAD)),
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ]), (d || v || b) && (this.elements[12] -= d * this.elements[0] + v * this.elements[4] + b * this.elements[8], this.elements[13] -= d * this.elements[1] + v * this.elements[5] + b * this.elements[9], this.elements[14] -= d * this.elements[2] + v * this.elements[6] + b * this.elements[10]), this;
  }
};
function Fe(e, r, t) {
  for (var n = 0, a = r.length; n < a; n++) {
    var s = r[n];
    dr(e, s, t);
  }
}
function dr(e, r, t) {
  Object.defineProperty(e, r, {
    get: function() {
      return this["__" + r];
    },
    set: function(n) {
      n !== this["__" + r] && (this["__" + r] = n, t());
    }
  });
}
var hr = function(e, r) {
  Fe(e, ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"], function() {
    var t = e.matrix3D.identity().appendTransform(
      e.translateX,
      e.translateY,
      e.translateZ,
      e.scaleX,
      e.scaleY,
      e.scaleZ,
      e.rotateX,
      e.rotateY,
      e.rotateZ,
      e.skewX,
      e.skewY,
      e.originX,
      e.originY,
      e.originZ
    );
    e.style.transform = e.style.msTransform = e.style.OTransform = e.style.MozTransform = e.style.webkitTransform = "perspective(" + (e.perspective === void 0 ? 500 : e.perspective) + "px) matrix3d(" + Array.prototype.slice.call(t.elements).join(",") + ")";
  }), e.matrix3D = new I(), Fe(e, ["perspective"], function() {
    e.style.transform = e.style.msTransform = e.style.OTransform = e.style.MozTransform = e.style.webkitTransform = "perspective(" + e.perspective + "px) matrix3d(" + Array.prototype.slice.call(e.matrix3D.elements).join(",") + ")";
  }), e.perspective = 500, e.scaleX = e.scaleY = e.scaleZ = 1, e.translateX = e.translateY = e.translateZ = e.rotateX = e.rotateY = e.rotateZ = e.skewX = e.skewY = e.originX = e.originY = e.originZ = 0;
};
(function() {
  for (var e = 0, r = ["webkit", "moz"], t = 0; t < r.length && !window.requestAnimationFrame; ++t)
    window.requestAnimationFrame = window[r[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r[t] + "CancelAnimationFrame"] || window[r[t] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
    var a = (/* @__PURE__ */ new Date()).getTime(), s = Math.max(0, 16 - (a - e)), u = window.setTimeout(function() {
      n(a + s);
    }, s);
    return e = a + s, u;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
    clearTimeout(n);
  });
})();
var D = function(e, r, t, n, a, s, u) {
  var f = e[r], c = t - f, l = /* @__PURE__ */ new Date(), o = this, d = a || function(b) {
    return b;
  };
  this.tickID = null;
  var v = function() {
    var b = /* @__PURE__ */ new Date() - l;
    if (b >= n) {
      e[r] = t, u && u(t), s && s(t), cancelAnimationFrame(o.tickID), o.toTick = null;
      return;
    }
    e[r] = c * d(b / n) + f, o.tickID = requestAnimationFrame(v), u && u(e[r]);
  };
  v(), D.List.push(this);
};
D.List = [];
D.stopAll = function() {
  for (var e = 0, r = D.List.length; e < r; e++)
    cancelAnimationFrame(D.List[e].tickID);
  D.List.length = 0;
};
D.stop = function(e) {
  cancelAnimationFrame(e.tickID);
};
function q(e) {
  return Math.sqrt(1 - Math.pow(e - 1, 2));
}
function mr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function pr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var vr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var s;
      n.tags.length === 0 ? n.insertionPoint ? s = n.insertionPoint.nextSibling : n.prepend ? s = n.container.firstChild : s = n.before : s = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, s), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(pr(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = mr(a);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), $ = "-ms-", we = "-moz-", y = "-webkit-", Je = "comm", De = "rule", je = "decl", br = "@import", Be = "@keyframes", wr = "@layer", gr = Math.abs, ye = String.fromCharCode, yr = Object.assign;
function xr(e, r) {
  return O(e, 0) ^ 45 ? (((r << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function He(e) {
  return e.trim();
}
function Er(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function x(e, r, t) {
  return e.replace(r, t);
}
function Pe(e, r) {
  return e.indexOf(r);
}
function O(e, r) {
  return e.charCodeAt(r) | 0;
}
function fe(e, r, t) {
  return e.slice(r, t);
}
function F(e) {
  return e.length;
}
function Me(e) {
  return e.length;
}
function me(e, r) {
  return r.push(e), e;
}
function Rr(e, r) {
  return e.map(r).join("");
}
var xe = 1, se = 1, Qe = 0, M = 0, k = 0, ie = "";
function Ee(e, r, t, n, a, s, u) {
  return { value: e, root: r, parent: t, type: n, props: a, children: s, line: xe, column: se, length: u, return: "" };
}
function ue(e, r) {
  return yr(Ee("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Tr() {
  return k;
}
function Ar() {
  return k = M > 0 ? O(ie, --M) : 0, se--, k === 10 && (se = 1, xe--), k;
}
function N() {
  return k = M < Qe ? O(ie, M++) : 0, se++, k === 10 && (se = 1, xe++), k;
}
function X() {
  return O(ie, M);
}
function pe() {
  return M;
}
function de(e, r) {
  return fe(ie, e, r);
}
function le(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ke(e) {
  return xe = se = 1, Qe = F(ie = e), M = 0, [];
}
function er(e) {
  return ie = "", e;
}
function ve(e) {
  return He(de(M - 1, $e(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _r(e) {
  for (; (k = X()) && k < 33; )
    N();
  return le(e) > 2 || le(k) > 3 ? "" : " ";
}
function kr(e, r) {
  for (; --r && N() && !(k < 48 || k > 102 || k > 57 && k < 65 || k > 70 && k < 97); )
    ;
  return de(e, pe() + (r < 6 && X() == 32 && N() == 32));
}
function $e(e) {
  for (; N(); )
    switch (k) {
      // ] ) " '
      case e:
        return M;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && $e(k);
        break;
      // (
      case 40:
        e === 41 && $e(e);
        break;
      // \
      case 92:
        N();
        break;
    }
  return M;
}
function Sr(e, r) {
  for (; N() && e + k !== 57; )
    if (e + k === 84 && X() === 47)
      break;
  return "/*" + de(r, M - 1) + "*" + ye(e === 47 ? e : N());
}
function Or(e) {
  for (; !le(X()); )
    N();
  return de(e, M);
}
function Cr(e) {
  return er(be("", null, null, null, [""], e = Ke(e), 0, [0], e));
}
function be(e, r, t, n, a, s, u, f, c) {
  for (var l = 0, o = 0, d = u, v = 0, b = 0, w = 0, m = 1, h = 1, E = 1, R = 0, A = "", j = a, S = s, _ = n, g = A; h; )
    switch (w = R, R = N()) {
      // (
      case 40:
        if (w != 108 && O(g, d - 1) == 58) {
          Pe(g += x(ve(R), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        g += ve(R);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        g += _r(w);
        break;
      // \
      case 92:
        g += kr(pe() - 1, 7);
        continue;
      // /
      case 47:
        switch (X()) {
          case 42:
          case 47:
            me(Pr(Sr(N(), pe()), r, t), c);
            break;
          default:
            g += "/";
        }
        break;
      // {
      case 123 * m:
        f[l++] = F(g) * E;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (R) {
          // \0 }
          case 0:
          case 125:
            h = 0;
          // ;
          case 59 + o:
            E == -1 && (g = x(g, /\f/g, "")), b > 0 && F(g) - d && me(b > 32 ? Ge(g + ";", n, t, d - 1) : Ge(x(g, " ", "") + ";", n, t, d - 2), c);
            break;
          // @ ;
          case 59:
            g += ";";
          // { rule/at-rule
          default:
            if (me(_ = Xe(g, r, t, l, o, a, f, A, j = [], S = [], d), s), R === 123)
              if (o === 0)
                be(g, r, _, _, j, s, d, f, S);
              else
                switch (v === 99 && O(g, 3) === 110 ? 100 : v) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    be(e, _, _, n && me(Xe(e, _, _, 0, 0, a, f, A, a, j = [], d), S), a, S, d, f, n ? j : S);
                    break;
                  default:
                    be(g, _, _, _, [""], S, 0, f, S);
                }
        }
        l = o = b = 0, m = E = 1, A = g = "", d = u;
        break;
      // :
      case 58:
        d = 1 + F(g), b = w;
      default:
        if (m < 1) {
          if (R == 123)
            --m;
          else if (R == 125 && m++ == 0 && Ar() == 125)
            continue;
        }
        switch (g += ye(R), R * m) {
          // &
          case 38:
            E = o > 0 ? 1 : (g += "\f", -1);
            break;
          // ,
          case 44:
            f[l++] = (F(g) - 1) * E, E = 1;
            break;
          // @
          case 64:
            X() === 45 && (g += ve(N())), v = X(), o = d = F(A = g += Or(pe())), R++;
            break;
          // -
          case 45:
            w === 45 && F(g) == 2 && (m = 0);
        }
    }
  return s;
}
function Xe(e, r, t, n, a, s, u, f, c, l, o) {
  for (var d = a - 1, v = a === 0 ? s : [""], b = Me(v), w = 0, m = 0, h = 0; w < n; ++w)
    for (var E = 0, R = fe(e, d + 1, d = gr(m = u[w])), A = e; E < b; ++E)
      (A = He(m > 0 ? v[E] + " " + R : x(R, /&\f/g, v[E]))) && (c[h++] = A);
  return Ee(e, r, t, a === 0 ? De : f, c, l, o);
}
function Pr(e, r, t) {
  return Ee(e, r, t, Je, ye(Tr()), fe(e, 2, -2), 0);
}
function Ge(e, r, t, n) {
  return Ee(e, r, t, je, fe(e, 0, n), fe(e, n + 1, -1), n);
}
function ae(e, r) {
  for (var t = "", n = Me(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function $r(e, r, t, n) {
  switch (e.type) {
    case wr:
      if (e.children.length) break;
    case br:
    case je:
      return e.return = e.return || e.value;
    case Je:
      return "";
    case Be:
      return e.return = e.value + "{" + ae(e.children, n) + "}";
    case De:
      e.value = e.props.join(",");
  }
  return F(t = ae(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Dr(e) {
  var r = Me(e);
  return function(t, n, a, s) {
    for (var u = "", f = 0; f < r; f++)
      u += e[f](t, n, a, s) || "";
    return u;
  };
}
function jr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Mr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Nr = function(r, t, n) {
  for (var a = 0, s = 0; a = s, s = X(), a === 38 && s === 12 && (t[n] = 1), !le(s); )
    N();
  return de(r, M);
}, Yr = function(r, t) {
  var n = -1, a = 44;
  do
    switch (le(a)) {
      case 0:
        a === 38 && X() === 12 && (t[n] = 1), r[n] += Nr(M - 1, t, n);
        break;
      case 2:
        r[n] += ve(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = X() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      // fallthrough
      default:
        r[n] += ye(a);
    }
  while (a = N());
  return r;
}, Ir = function(r, t) {
  return er(Yr(Ke(r), t));
}, Le = /* @__PURE__ */ new WeakMap(), Fr = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Le.get(n)) && !a) {
      Le.set(r, !0);
      for (var s = [], u = Ir(t, s), f = n.props, c = 0, l = 0; c < u.length; c++)
        for (var o = 0; o < f.length; o++, l++)
          r.props[l] = s[c] ? u[c].replace(/&\f/g, f[o]) : f[o] + " " + u[c];
    }
  }
}, Xr = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function rr(e, r) {
  switch (xr(e, r)) {
    // color-adjust
    case 5103:
      return y + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return y + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return y + e + we + e + $ + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return y + e + $ + e + e;
    // order
    case 6165:
      return y + e + $ + "flex-" + e + e;
    // align-items
    case 5187:
      return y + e + x(e, /(\w+).+(:[^]+)/, y + "box-$1$2" + $ + "flex-$1$2") + e;
    // align-self
    case 5443:
      return y + e + $ + "flex-item-" + x(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return y + e + $ + "flex-line-pack" + x(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return y + e + $ + x(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return y + e + $ + x(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return y + "box-" + x(e, "-grow", "") + y + e + $ + x(e, "grow", "positive") + e;
    // transition
    case 4554:
      return y + x(e, /([^-])(transform)/g, "$1" + y + "$2") + e;
    // cursor
    case 6187:
      return x(x(x(e, /(zoom-|grab)/, y + "$1"), /(image-set)/, y + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return x(e, /(image-set\([^]*)/, y + "$1$`$1");
    // justify-content
    case 4968:
      return x(x(e, /(.+:)(flex-)?(.*)/, y + "box-pack:$3" + $ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + y + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return x(e, /(.+)-inline(.+)/, y + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (F(e) - 1 - r > 6) switch (O(e, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (O(e, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return x(e, /(.+:)(.+)-([^]+)/, "$1" + y + "$2-$3$1" + we + (O(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Pe(e, "stretch") ? rr(x(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (O(e, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (O(e, F(e) - 3 - (~Pe(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return x(e, ":", ":" + y) + e;
        // (inline-)?fl(e)x
        case 101:
          return x(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + y + (O(e, 14) === 45 ? "inline-" : "") + "box$3$1" + y + "$2$3$1" + $ + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (O(e, r + 11)) {
        // vertical-l(r)
        case 114:
          return y + e + $ + x(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return y + e + $ + x(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return y + e + $ + x(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return y + e + $ + e + e;
  }
  return e;
}
var Gr = function(r, t, n, a) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case je:
      r.return = rr(r.value, r.length);
      break;
    case Be:
      return ae([ue(r, {
        value: x(r.value, "@", "@" + y)
      })], a);
    case De:
      if (r.length) return Rr(r.props, function(s) {
        switch (Er(s, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ae([ue(r, {
              props: [x(s, /:(read-\w+)/, ":" + we + "$1")]
            })], a);
          // :placeholder
          case "::placeholder":
            return ae([ue(r, {
              props: [x(s, /:(plac\w+)/, ":" + y + "input-$1")]
            }), ue(r, {
              props: [x(s, /:(plac\w+)/, ":" + we + "$1")]
            }), ue(r, {
              props: [x(s, /:(plac\w+)/, $ + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, Lr = [Gr], Wr = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var h = m.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || Lr, s = {}, u, f = [];
  u = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var h = m.getAttribute("data-emotion").split(" "), E = 1; E < h.length; E++)
        s[h[E]] = !0;
      f.push(m);
    }
  );
  var c, l = [Fr, Xr];
  {
    var o, d = [$r, jr(function(m) {
      o.insert(m);
    })], v = Dr(l.concat(a, d)), b = function(h) {
      return ae(Cr(h), v);
    };
    c = function(h, E, R, A) {
      o = R, b(h ? h + "{" + E.styles + "}" : E.styles), A && (w.inserted[E.name] = !0);
    };
  }
  var w = {
    key: t,
    sheet: new vr({
      key: t,
      container: u,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return w.sheet.hydrate(f), w;
};
function qr(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var zr = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Vr = /[A-Z]|^ms/g, Zr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tr = function(r) {
  return r.charCodeAt(1) === 45;
}, We = function(r) {
  return r != null && typeof r != "boolean";
}, Se = /* @__PURE__ */ Mr(function(e) {
  return tr(e) ? e : e.replace(Vr, "-$&").toLowerCase();
}), qe = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Zr, function(n, a, s) {
          return z = {
            name: a,
            styles: s,
            next: z
          }, a;
        });
  }
  return zr[r] !== 1 && !tr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function ge(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var a = t;
      if (a.anim === 1)
        return z = {
          name: a.name,
          styles: a.styles,
          next: z
        }, a.name;
      var s = t;
      if (s.styles !== void 0) {
        var u = s.next;
        if (u !== void 0)
          for (; u !== void 0; )
            z = {
              name: u.name,
              styles: u.styles,
              next: z
            }, u = u.next;
        var f = s.styles + ";";
        return f;
      }
      return Ur(e, r, t);
    }
  }
  var c = t;
  if (r == null)
    return c;
  var l = r[c];
  return l !== void 0 ? l : c;
}
function Ur(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += ge(e, r, t[a]) + ";";
  else
    for (var s in t) {
      var u = t[s];
      if (typeof u != "object") {
        var f = u;
        r != null && r[f] !== void 0 ? n += s + "{" + r[f] + "}" : We(f) && (n += Se(s) + ":" + qe(s, f) + ";");
      } else if (Array.isArray(u) && typeof u[0] == "string" && (r == null || r[u[0]] === void 0))
        for (var c = 0; c < u.length; c++)
          We(u[c]) && (n += Se(s) + ":" + qe(s, u[c]) + ";");
      else {
        var l = ge(e, r, u);
        switch (s) {
          case "animation":
          case "animationName": {
            n += Se(s) + ":" + l + ";";
            break;
          }
          default:
            n += s + "{" + l + "}";
        }
      }
    }
  return n;
}
var ze = /label:\s*([^\s;{]+)\s*(;|$)/g, z;
function Oe(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, a = "";
  z = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    n = !1, a += ge(t, r, s);
  else {
    var u = s;
    a += u[0];
  }
  for (var f = 1; f < e.length; f++)
    if (a += ge(t, r, e[f]), n) {
      var c = s;
      a += c[f];
    }
  ze.lastIndex = 0;
  for (var l = "", o; (o = ze.exec(a)) !== null; )
    l += "-" + o[1];
  var d = qr(a) + l;
  return {
    name: d,
    styles: a,
    next: z
  };
}
function nr(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : a && (n += a + " ");
  }), n;
}
var Jr = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, Br = function(r, t, n) {
  Jr(r, t);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var s = t;
    do
      r.insert(t === s ? "." + a : "", s, r.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Ve(e, r) {
  if (e.inserted[r.name] === void 0)
    return e.insert("", r, e.sheet, !0);
}
function Ze(e, r, t) {
  var n = [], a = nr(e, n, t);
  return n.length < 2 ? t : a + r(n);
}
var Hr = function(r) {
  var t = Wr(r);
  t.sheet.speedy = function(f) {
    this.isSpeedy = f;
  }, t.compat = !0;
  var n = function() {
    for (var c = arguments.length, l = new Array(c), o = 0; o < c; o++)
      l[o] = arguments[o];
    var d = Oe(l, t.registered, void 0);
    return Br(t, d), t.key + "-" + d.name;
  }, a = function() {
    for (var c = arguments.length, l = new Array(c), o = 0; o < c; o++)
      l[o] = arguments[o];
    var d = Oe(l, t.registered), v = "animation-" + d.name;
    return Ve(t, {
      name: d.name,
      styles: "@keyframes " + v + "{" + d.styles + "}"
    }), v;
  }, s = function() {
    for (var c = arguments.length, l = new Array(c), o = 0; o < c; o++)
      l[o] = arguments[o];
    var d = Oe(l, t.registered);
    Ve(t, d);
  }, u = function() {
    for (var c = arguments.length, l = new Array(c), o = 0; o < c; o++)
      l[o] = arguments[o];
    return Ze(t.registered, n, Qr(l));
  };
  return {
    css: n,
    cx: u,
    injectGlobal: s,
    keyframes: a,
    hydrate: function(c) {
      c.forEach(function(l) {
        t.inserted[l] = !0;
      });
    },
    flush: function() {
      t.registered = {}, t.inserted = {}, t.sheet.flush();
    },
    sheet: t.sheet,
    cache: t,
    getRegisteredStyles: nr.bind(null, t.registered),
    merge: Ze.bind(null, t.registered, n)
  };
}, Qr = function e(r) {
  for (var t = "", n = 0; n < r.length; n++) {
    var a = r[n];
    if (a != null) {
      var s = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            s = e(a);
          else {
            s = "";
            for (var u in a)
              a[u] && u && (s && (s += " "), s += u);
          }
          break;
        }
        default:
          s = a;
      }
      s && (t && (t += " "), t += s);
    }
  }
  return t;
}, Kr = Hr({
  key: "css"
}), Re = Kr.css;
const et = Re`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: fixed;
  left: 0;
  top: 0;
`, rt = Re`
  display: flex;
  overflow: hidden;
  align-items: center;
  height: 100%;
  transition: transform 0.3s;
`, tt = Re`
  flex: 1;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`, nt = Re`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
`;
function at({ imageList: e = [], current: r = 0, className: t = "", onClose: n }) {
  const [a, s] = ir(r), u = Ce(null), f = Ce(1);
  return Ue(() => {
    const c = u.current.querySelectorAll(".image-item")[a].querySelector("img");
    if (!c)
      return;
    c.translateX === void 0 && hr(c);
    const l = new ke(c);
    return l.get("pinch").set({ enable: !0 }), l.get("pan").set({ direction: ke.DIRECTION_ALL }), l.get("swipe").set({ direction: ke.DIRECTION_ALL }), l.on("doubletap", function(o) {
      o.preventDefault(), D.stopAll();
      let d = f.current + 1;
      d > 3 ? (f.current = 1, new D(c, "scaleX", f.current, 300, q), new D(c, "scaleY", f.current, 300, q), c.translateX = 0, c.translateY = 0) : (f.current = d, new D(c, "scaleX", f.current, 300, q), new D(c, "scaleY", f.current, 300, q));
    }), l.on("pinch", function(o) {
      o.preventDefault();
      const d = f.current * o.scale;
      f.current = d > 3 ? 3 : d < 1 ? 1 : d, new D(c, "scaleX", f.current, 100, q), new D(c, "scaleY", f.current, 100, q);
    }), l.on("panmove", function(o) {
      if (c.scaleX > 1) {
        o.preventDefault();
        const { width: d, height: v } = c, b = (d * c.scaleX - d) / 2, w = (v * c.scaleY - v) / 2;
        c.translateX = o.deltaX, c.translateY = o.deltaY, c.translateX > b && (c.translateX = b), c.translateX < -b && (c.translateX = -b), c.translateY > w && (c.translateY = w), c.translateY < -w && (c.translateY = -w);
      }
    }), l.on("panend", function() {
      c.scaleX > 1 && (new D(c, "translateX", 0, 300, q), new D(c, "translateY", 0, 300, q));
    }), l.on("swipeup swipedown", function(o) {
      o.preventDefault(), c.scaleX === 1 && n && n();
    }), l.on("swipeleft", function(o) {
      o.preventDefault(), c.scaleX === 1 && s((d) => d + 1 > e.length - 1 ? d : d + 1);
    }), l.on("swiperight", function(o) {
      o.preventDefault(), c.scaleX === 1 && s((d) => d - 1 < 0 ? d : d - 1);
    }), () => l.destroy();
  }, [e, n, a]), /* @__PURE__ */ K.jsxs("div", { className: et, ref: u, children: [
    /* @__PURE__ */ K.jsx(
      "div",
      {
        className: rt,
        style: {
          transform: `translateX(-${a * document.body.clientWidth}px)`,
          width: `${e.length * 100}%`
        },
        children: e.map((c, l) => /* @__PURE__ */ K.jsx("div", { className: `${tt} image-item`, children: /* @__PURE__ */ K.jsx("img", { src: c, alt: "" }) }, l))
      }
    ),
    /* @__PURE__ */ K.jsxs("span", { className: nt, children: [
      a + 1,
      " / ",
      e.length
    ] })
  ] });
}
const ut = function({ visible: e, onClose: r, imageList: t, current: n, className: a }) {
  const s = Ce(document.createElement("div"));
  return Ue(() => {
    const u = s.current;
    return document.body.appendChild(u), () => {
      document.body.removeChild(u);
    };
  }, []), cr.createPortal(
    /* @__PURE__ */ K.jsx(or, { type: "alpha", children: e ? /* @__PURE__ */ K.jsx(at, { className: a, onClose: r, current: n, imageList: t }, "animat-image-layout") : null }),
    s.current
  );
};
export {
  at as ImageMobileView,
  ut as default
};
