var Hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var jt = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Gn() {
  if (Dr) return Ot;
  Dr = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, a, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), a.key !== void 0 && (c = "" + a.key), "key" in a) {
      s = {};
      for (var h in a)
        h !== "key" && (s[h] = a[h]);
    } else s = a;
    return a = s.ref, {
      $$typeof: r,
      type: n,
      key: c,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return Ot.Fragment = t, Ot.jsx = e, Ot.jsxs = e, Ot;
}
var St = {}, Lt = { exports: {} }, pe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function zn() {
  if (kr) return pe;
  kr = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.iterator;
  function p(o) {
    return o === null || typeof o != "object" ? null : (o = v && o[v] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, T = Object.assign, x = {};
  function S(o, y, R) {
    this.props = o, this.context = y, this.refs = x, this.updater = R || _;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(o, y) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, y, "setState");
  }, S.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function I() {
  }
  I.prototype = S.prototype;
  function C(o, y, R) {
    this.props = o, this.context = y, this.refs = x, this.updater = R || _;
  }
  var P = C.prototype = new I();
  P.constructor = C, T(P, S.prototype), P.isPureReactComponent = !0;
  var U = Array.isArray, M = { H: null, A: null, T: null, S: null, V: null }, k = Object.prototype.hasOwnProperty;
  function G(o, y, R, N, F, j) {
    return R = j.ref, {
      $$typeof: r,
      type: o,
      key: y,
      ref: R !== void 0 ? R : null,
      props: j
    };
  }
  function K(o, y) {
    return G(
      o.type,
      y,
      void 0,
      void 0,
      void 0,
      o.props
    );
  }
  function B(o) {
    return typeof o == "object" && o !== null && o.$$typeof === r;
  }
  function Z(o) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(R) {
      return y[R];
    });
  }
  var H = /\/+/g;
  function $(o, y) {
    return typeof o == "object" && o !== null && o.key != null ? Z("" + o.key) : y.toString(36);
  }
  function Q() {
  }
  function J(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Q, Q) : (o.status = "pending", o.then(
          function(y) {
            o.status === "pending" && (o.status = "fulfilled", o.value = y);
          },
          function(y) {
            o.status === "pending" && (o.status = "rejected", o.reason = y);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function ne(o, y, R, N, F) {
    var j = typeof o;
    (j === "undefined" || j === "boolean") && (o = null);
    var q = !1;
    if (o === null) q = !0;
    else
      switch (j) {
        case "bigint":
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case r:
            case t:
              q = !0;
              break;
            case m:
              return q = o._init, ne(
                q(o._payload),
                y,
                R,
                N,
                F
              );
          }
      }
    if (q)
      return F = F(o), q = N === "" ? "." + $(o, 0) : N, U(F) ? (R = "", q != null && (R = q.replace(H, "$&/") + "/"), ne(F, y, R, "", function(oe) {
        return oe;
      })) : F != null && (B(F) && (F = K(
        F,
        R + (F.key == null || o && o.key === F.key ? "" : ("" + F.key).replace(
          H,
          "$&/"
        ) + "/") + q
      )), y.push(F)), 1;
    q = 0;
    var ce = N === "" ? "." : N + ":";
    if (U(o))
      for (var z = 0; z < o.length; z++)
        N = o[z], j = ce + $(N, z), q += ne(
          N,
          y,
          R,
          j,
          F
        );
    else if (z = p(o), typeof z == "function")
      for (o = z.call(o), z = 0; !(N = o.next()).done; )
        N = N.value, j = ce + $(N, z++), q += ne(
          N,
          y,
          R,
          j,
          F
        );
    else if (j === "object") {
      if (typeof o.then == "function")
        return ne(
          J(o),
          y,
          R,
          N,
          F
        );
      throw y = String(o), Error(
        "Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return q;
  }
  function re(o, y, R) {
    if (o == null) return o;
    var N = [], F = 0;
    return ne(o, N, "", "", function(j) {
      return y.call(R, j, F++);
    }), N;
  }
  function A(o) {
    if (o._status === -1) {
      var y = o._result;
      y = y(), y.then(
        function(R) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = R);
        },
        function(R) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = R);
        }
      ), o._status === -1 && (o._status = 0, o._result = y);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var E = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  };
  function O() {
  }
  return pe.Children = {
    map: re,
    forEach: function(o, y, R) {
      re(
        o,
        function() {
          y.apply(this, arguments);
        },
        R
      );
    },
    count: function(o) {
      var y = 0;
      return re(o, function() {
        y++;
      }), y;
    },
    toArray: function(o) {
      return re(o, function(y) {
        return y;
      }) || [];
    },
    only: function(o) {
      if (!B(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  }, pe.Component = S, pe.Fragment = e, pe.Profiler = a, pe.PureComponent = C, pe.StrictMode = n, pe.Suspense = l, pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, pe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return M.H.useMemoCache(o);
    }
  }, pe.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, pe.cloneElement = function(o, y, R) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var N = T({}, o.props), F = o.key, j = void 0;
    if (y != null)
      for (q in y.ref !== void 0 && (j = void 0), y.key !== void 0 && (F = "" + y.key), y)
        !k.call(y, q) || q === "key" || q === "__self" || q === "__source" || q === "ref" && y.ref === void 0 || (N[q] = y[q]);
    var q = arguments.length - 2;
    if (q === 1) N.children = R;
    else if (1 < q) {
      for (var ce = Array(q), z = 0; z < q; z++)
        ce[z] = arguments[z + 2];
      N.children = ce;
    }
    return G(o.type, F, void 0, void 0, j, N);
  }, pe.createContext = function(o) {
    return o = {
      $$typeof: c,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: s,
      _context: o
    }, o;
  }, pe.createElement = function(o, y, R) {
    var N, F = {}, j = null;
    if (y != null)
      for (N in y.key !== void 0 && (j = "" + y.key), y)
        k.call(y, N) && N !== "key" && N !== "__self" && N !== "__source" && (F[N] = y[N]);
    var q = arguments.length - 2;
    if (q === 1) F.children = R;
    else if (1 < q) {
      for (var ce = Array(q), z = 0; z < q; z++)
        ce[z] = arguments[z + 2];
      F.children = ce;
    }
    if (o && o.defaultProps)
      for (N in q = o.defaultProps, q)
        F[N] === void 0 && (F[N] = q[N]);
    return G(o, j, void 0, void 0, null, F);
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(o) {
    return { $$typeof: h, render: o };
  }, pe.isValidElement = B, pe.lazy = function(o) {
    return {
      $$typeof: m,
      _payload: { _status: -1, _result: o },
      _init: A
    };
  }, pe.memo = function(o, y) {
    return {
      $$typeof: d,
      type: o,
      compare: y === void 0 ? null : y
    };
  }, pe.startTransition = function(o) {
    var y = M.T, R = {};
    M.T = R;
    try {
      var N = o(), F = M.S;
      F !== null && F(R, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(O, E);
    } catch (j) {
      E(j);
    } finally {
      M.T = y;
    }
  }, pe.unstable_useCacheRefresh = function() {
    return M.H.useCacheRefresh();
  }, pe.use = function(o) {
    return M.H.use(o);
  }, pe.useActionState = function(o, y, R) {
    return M.H.useActionState(o, y, R);
  }, pe.useCallback = function(o, y) {
    return M.H.useCallback(o, y);
  }, pe.useContext = function(o) {
    return M.H.useContext(o);
  }, pe.useDebugValue = function() {
  }, pe.useDeferredValue = function(o, y) {
    return M.H.useDeferredValue(o, y);
  }, pe.useEffect = function(o, y, R) {
    var N = M.H;
    if (typeof R == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return N.useEffect(o, y);
  }, pe.useId = function() {
    return M.H.useId();
  }, pe.useImperativeHandle = function(o, y, R) {
    return M.H.useImperativeHandle(o, y, R);
  }, pe.useInsertionEffect = function(o, y) {
    return M.H.useInsertionEffect(o, y);
  }, pe.useLayoutEffect = function(o, y) {
    return M.H.useLayoutEffect(o, y);
  }, pe.useMemo = function(o, y) {
    return M.H.useMemo(o, y);
  }, pe.useOptimistic = function(o, y) {
    return M.H.useOptimistic(o, y);
  }, pe.useReducer = function(o, y, R) {
    return M.H.useReducer(o, y, R);
  }, pe.useRef = function(o) {
    return M.H.useRef(o);
  }, pe.useState = function(o) {
    return M.H.useState(o);
  }, pe.useSyncExternalStore = function(o, y, R) {
    return M.H.useSyncExternalStore(
      o,
      y,
      R
    );
  }, pe.useTransition = function() {
    return M.H.useTransition();
  }, pe.version = "19.1.0", pe;
}
var At = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
At.exports;
var jr;
function Wn() {
  return jr || (jr = 1, function(r, t) {
    process.env.NODE_ENV !== "production" && function() {
      function e(u, w) {
        Object.defineProperty(s.prototype, u, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              w[0],
              w[1]
            );
          }
        });
      }
      function n(u) {
        return u === null || typeof u != "object" ? null : (u = be && u[be] || u["@@iterator"], typeof u == "function" ? u : null);
      }
      function a(u, w) {
        u = (u = u.constructor) && (u.displayName || u.name) || "ReactClass";
        var Y = u + "." + w;
        Ue[Y] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          w,
          u
        ), Ue[Y] = !0);
      }
      function s(u, w, Y) {
        this.props = u, this.context = w, this.refs = Ae, this.updater = Y || Ce;
      }
      function c() {
      }
      function h(u, w, Y) {
        this.props = u, this.context = w, this.refs = Ae, this.updater = Y || Ce;
      }
      function l(u) {
        return "" + u;
      }
      function d(u) {
        try {
          l(u);
          var w = !1;
        } catch {
          w = !0;
        }
        if (w) {
          w = console;
          var Y = w.error, X = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
          return Y.call(
            w,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            X
          ), l(u);
        }
      }
      function m(u) {
        if (u == null) return null;
        if (typeof u == "function")
          return u.$$typeof === $e ? null : u.displayName || u.name || null;
        if (typeof u == "string") return u;
        switch (u) {
          case o:
            return "Fragment";
          case R:
            return "Profiler";
          case y:
            return "StrictMode";
          case q:
            return "Suspense";
          case ce:
            return "SuspenseList";
          case he:
            return "Activity";
        }
        if (typeof u == "object")
          switch (typeof u.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), u.$$typeof) {
            case O:
              return "Portal";
            case F:
              return (u.displayName || "Context") + ".Provider";
            case N:
              return (u._context.displayName || "Context") + ".Consumer";
            case j:
              var w = u.render;
              return u = u.displayName, u || (u = w.displayName || w.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
            case z:
              return w = u.displayName || null, w !== null ? w : m(u.type) || "Memo";
            case oe:
              w = u._payload, u = u._init;
              try {
                return m(u(w));
              } catch {
              }
          }
        return null;
      }
      function v(u) {
        if (u === o) return "<>";
        if (typeof u == "object" && u !== null && u.$$typeof === oe)
          return "<...>";
        try {
          var w = m(u);
          return w ? "<" + w + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function p() {
        var u = V.A;
        return u === null ? null : u.getOwner();
      }
      function _() {
        return Error("react-stack-top-frame");
      }
      function T(u) {
        if (le.call(u, "key")) {
          var w = Object.getOwnPropertyDescriptor(u, "key").get;
          if (w && w.isReactWarning) return !1;
        }
        return u.key !== void 0;
      }
      function x(u, w) {
        function Y() {
          vt || (vt = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            w
          ));
        }
        Y.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: Y,
          configurable: !0
        });
      }
      function S() {
        var u = m(this.type);
        return _e[u] || (_e[u] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), u = this.props.ref, u !== void 0 ? u : null;
      }
      function I(u, w, Y, X, te, de, ue, ye) {
        return Y = de.ref, u = {
          $$typeof: E,
          type: u,
          key: w,
          props: de,
          _owner: te
        }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(u, "ref", {
          enumerable: !1,
          get: S
        }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(u, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(u, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ue
        }), Object.defineProperty(u, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ye
        }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
      }
      function C(u, w) {
        return w = I(
          u.type,
          w,
          void 0,
          void 0,
          u._owner,
          u.props,
          u._debugStack,
          u._debugTask
        ), u._store && (w._store.validated = u._store.validated), w;
      }
      function P(u) {
        return typeof u == "object" && u !== null && u.$$typeof === E;
      }
      function U(u) {
        var w = { "=": "=0", ":": "=2" };
        return "$" + u.replace(/[=:]/g, function(Y) {
          return w[Y];
        });
      }
      function M(u, w) {
        return typeof u == "object" && u !== null && u.key != null ? (d(u.key), U("" + u.key)) : w.toString(36);
      }
      function k() {
      }
      function G(u) {
        switch (u.status) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw u.reason;
          default:
            switch (typeof u.status == "string" ? u.then(k, k) : (u.status = "pending", u.then(
              function(w) {
                u.status === "pending" && (u.status = "fulfilled", u.value = w);
              },
              function(w) {
                u.status === "pending" && (u.status = "rejected", u.reason = w);
              }
            )), u.status) {
              case "fulfilled":
                return u.value;
              case "rejected":
                throw u.reason;
            }
        }
        throw u;
      }
      function K(u, w, Y, X, te) {
        var de = typeof u;
        (de === "undefined" || de === "boolean") && (u = null);
        var ue = !1;
        if (u === null) ue = !0;
        else
          switch (de) {
            case "bigint":
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (u.$$typeof) {
                case E:
                case O:
                  ue = !0;
                  break;
                case oe:
                  return ue = u._init, K(
                    ue(u._payload),
                    w,
                    Y,
                    X,
                    te
                  );
              }
          }
        if (ue) {
          ue = u, te = te(ue);
          var ye = X === "" ? "." + M(ue, 0) : X;
          return ze(te) ? (Y = "", ye != null && (Y = ye.replace(ie, "$&/") + "/"), K(te, w, Y, "", function(Ve) {
            return Ve;
          })) : te != null && (P(te) && (te.key != null && (ue && ue.key === te.key || d(te.key)), Y = C(
            te,
            Y + (te.key == null || ue && ue.key === te.key ? "" : ("" + te.key).replace(
              ie,
              "$&/"
            ) + "/") + ye
          ), X !== "" && ue != null && P(ue) && ue.key == null && ue._store && !ue._store.validated && (Y._store.validated = 2), te = Y), w.push(te)), 1;
        }
        if (ue = 0, ye = X === "" ? "." : X + ":", ze(u))
          for (var ve = 0; ve < u.length; ve++)
            X = u[ve], de = ye + M(X, ve), ue += K(
              X,
              w,
              Y,
              de,
              te
            );
        else if (ve = n(u), typeof ve == "function")
          for (ve === u.entries && (ee || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), ee = !0), u = ve.call(u), ve = 0; !(X = u.next()).done; )
            X = X.value, de = ye + M(X, ve++), ue += K(
              X,
              w,
              Y,
              de,
              te
            );
        else if (de === "object") {
          if (typeof u.then == "function")
            return K(
              G(u),
              w,
              Y,
              X,
              te
            );
          throw w = String(u), Error(
            "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ue;
      }
      function B(u, w, Y) {
        if (u == null) return u;
        var X = [], te = 0;
        return K(u, X, "", "", function(de) {
          return w.call(Y, de, te++);
        }), X;
      }
      function Z(u) {
        if (u._status === -1) {
          var w = u._result;
          w = w(), w.then(
            function(Y) {
              (u._status === 0 || u._status === -1) && (u._status = 1, u._result = Y);
            },
            function(Y) {
              (u._status === 0 || u._status === -1) && (u._status = 2, u._result = Y);
            }
          ), u._status === -1 && (u._status = 0, u._result = w);
        }
        if (u._status === 1)
          return w = u._result, w === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            w
          ), "default" in w || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            w
          ), w.default;
        throw u._result;
      }
      function H() {
        var u = V.H;
        return u === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), u;
      }
      function $() {
      }
      function Q(u) {
        if (we === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7);
            we = (r && r[w]).call(
              r,
              "timers"
            ).setImmediate;
          } catch {
            we = function(X) {
              fe === !1 && (fe = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var te = new MessageChannel();
              te.port1.onmessage = X, te.port2.postMessage(void 0);
            };
          }
        return we(u);
      }
      function J(u) {
        return 1 < u.length && typeof AggregateError == "function" ? new AggregateError(u) : u[0];
      }
      function ne(u, w) {
        w !== Ne - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Ne = w;
      }
      function re(u, w, Y) {
        var X = V.actQueue;
        if (X !== null)
          if (X.length !== 0)
            try {
              A(X), Q(function() {
                return re(u, w, Y);
              });
              return;
            } catch (te) {
              V.thrownErrors.push(te);
            }
          else V.actQueue = null;
        0 < V.thrownErrors.length ? (X = J(V.thrownErrors), V.thrownErrors.length = 0, Y(X)) : w(u);
      }
      function A(u) {
        if (!qe) {
          qe = !0;
          var w = 0;
          try {
            for (; w < u.length; w++) {
              var Y = u[w];
              do {
                V.didUsePromise = !1;
                var X = Y(!1);
                if (X !== null) {
                  if (V.didUsePromise) {
                    u[w] = Y, u.splice(0, w);
                    return;
                  }
                  Y = X;
                } else break;
              } while (!0);
            }
            u.length = 0;
          } catch (te) {
            u.splice(0, w + 1), V.thrownErrors.push(te);
          } finally {
            qe = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var E = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), F = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), be = Symbol.iterator, Ue = {}, Ce = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(u) {
          a(u, "forceUpdate");
        },
        enqueueReplaceState: function(u) {
          a(u, "replaceState");
        },
        enqueueSetState: function(u) {
          a(u, "setState");
        }
      }, Me = Object.assign, Ae = {};
      Object.freeze(Ae), s.prototype.isReactComponent = {}, s.prototype.setState = function(u, w) {
        if (typeof u != "object" && typeof u != "function" && u != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, u, w, "setState");
      }, s.prototype.forceUpdate = function(u) {
        this.updater.enqueueForceUpdate(this, u, "forceUpdate");
      };
      var se = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, Ee;
      for (Ee in se)
        se.hasOwnProperty(Ee) && e(Ee, se[Ee]);
      c.prototype = s.prototype, se = h.prototype = new c(), se.constructor = h, Me(se, s.prototype), se.isPureReactComponent = !0;
      var ze = Array.isArray, $e = Symbol.for("react.client.reference"), V = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, le = Object.prototype.hasOwnProperty, dt = console.createTask ? console.createTask : function() {
        return null;
      };
      se = {
        "react-stack-bottom-frame": function(u) {
          return u();
        }
      };
      var vt, ct, _e = {}, L = se["react-stack-bottom-frame"].bind(se, _)(), ae = dt(v(_)), ee = !1, ie = /\/+/g, ge = typeof reportError == "function" ? reportError : function(u) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var w = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof u == "object" && u !== null && typeof u.message == "string" ? String(u.message) : String(u),
            error: u
          });
          if (!window.dispatchEvent(w)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", u);
          return;
        }
        console.error(u);
      }, fe = !1, we = null, Ne = 0, xe = !1, qe = !1, Le = typeof queueMicrotask == "function" ? function(u) {
        queueMicrotask(function() {
          return queueMicrotask(u);
        });
      } : Q;
      se = Object.freeze({
        __proto__: null,
        c: function(u) {
          return H().useMemoCache(u);
        }
      }), t.Children = {
        map: B,
        forEach: function(u, w, Y) {
          B(
            u,
            function() {
              w.apply(this, arguments);
            },
            Y
          );
        },
        count: function(u) {
          var w = 0;
          return B(u, function() {
            w++;
          }), w;
        },
        toArray: function(u) {
          return B(u, function(w) {
            return w;
          }) || [];
        },
        only: function(u) {
          if (!P(u))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return u;
        }
      }, t.Component = s, t.Fragment = o, t.Profiler = R, t.PureComponent = h, t.StrictMode = y, t.Suspense = q, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, t.__COMPILER_RUNTIME = se, t.act = function(u) {
        var w = V.actQueue, Y = Ne;
        Ne++;
        var X = V.actQueue = w !== null ? w : [], te = !1;
        try {
          var de = u();
        } catch (ve) {
          V.thrownErrors.push(ve);
        }
        if (0 < V.thrownErrors.length)
          throw ne(w, Y), u = J(V.thrownErrors), V.thrownErrors.length = 0, u;
        if (de !== null && typeof de == "object" && typeof de.then == "function") {
          var ue = de;
          return Le(function() {
            te || xe || (xe = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(ve, Ve) {
              te = !0, ue.then(
                function(rt) {
                  if (ne(w, Y), Y === 0) {
                    try {
                      A(X), Q(function() {
                        return re(
                          rt,
                          ve,
                          Ve
                        );
                      });
                    } catch (Wt) {
                      V.thrownErrors.push(Wt);
                    }
                    if (0 < V.thrownErrors.length) {
                      var zt = J(
                        V.thrownErrors
                      );
                      V.thrownErrors.length = 0, Ve(zt);
                    }
                  } else ve(rt);
                },
                function(rt) {
                  ne(w, Y), 0 < V.thrownErrors.length && (rt = J(
                    V.thrownErrors
                  ), V.thrownErrors.length = 0), Ve(rt);
                }
              );
            }
          };
        }
        var ye = de;
        if (ne(w, Y), Y === 0 && (A(X), X.length !== 0 && Le(function() {
          te || xe || (xe = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), V.actQueue = null), 0 < V.thrownErrors.length)
          throw u = J(V.thrownErrors), V.thrownErrors.length = 0, u;
        return {
          then: function(ve, Ve) {
            te = !0, Y === 0 ? (V.actQueue = X, Q(function() {
              return re(
                ye,
                ve,
                Ve
              );
            })) : ve(ye);
          }
        };
      }, t.cache = function(u) {
        return function() {
          return u.apply(null, arguments);
        };
      }, t.captureOwnerStack = function() {
        var u = V.getCurrentStack;
        return u === null ? null : u();
      }, t.cloneElement = function(u, w, Y) {
        if (u == null)
          throw Error(
            "The argument must be a React element, but you passed " + u + "."
          );
        var X = Me({}, u.props), te = u.key, de = u._owner;
        if (w != null) {
          var ue;
          e: {
            if (le.call(w, "ref") && (ue = Object.getOwnPropertyDescriptor(
              w,
              "ref"
            ).get) && ue.isReactWarning) {
              ue = !1;
              break e;
            }
            ue = w.ref !== void 0;
          }
          ue && (de = p()), T(w) && (d(w.key), te = "" + w.key);
          for (ye in w)
            !le.call(w, ye) || ye === "key" || ye === "__self" || ye === "__source" || ye === "ref" && w.ref === void 0 || (X[ye] = w[ye]);
        }
        var ye = arguments.length - 2;
        if (ye === 1) X.children = Y;
        else if (1 < ye) {
          ue = Array(ye);
          for (var ve = 0; ve < ye; ve++)
            ue[ve] = arguments[ve + 2];
          X.children = ue;
        }
        for (X = I(
          u.type,
          te,
          void 0,
          void 0,
          de,
          X,
          u._debugStack,
          u._debugTask
        ), te = 2; te < arguments.length; te++)
          de = arguments[te], P(de) && de._store && (de._store.validated = 1);
        return X;
      }, t.createContext = function(u) {
        return u = {
          $$typeof: F,
          _currentValue: u,
          _currentValue2: u,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, u.Provider = u, u.Consumer = {
          $$typeof: N,
          _context: u
        }, u._currentRenderer = null, u._currentRenderer2 = null, u;
      }, t.createElement = function(u, w, Y) {
        for (var X = 2; X < arguments.length; X++) {
          var te = arguments[X];
          P(te) && te._store && (te._store.validated = 1);
        }
        if (X = {}, te = null, w != null)
          for (ve in ct || !("__self" in w) || "key" in w || (ct = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), T(w) && (d(w.key), te = "" + w.key), w)
            le.call(w, ve) && ve !== "key" && ve !== "__self" && ve !== "__source" && (X[ve] = w[ve]);
        var de = arguments.length - 2;
        if (de === 1) X.children = Y;
        else if (1 < de) {
          for (var ue = Array(de), ye = 0; ye < de; ye++)
            ue[ye] = arguments[ye + 2];
          Object.freeze && Object.freeze(ue), X.children = ue;
        }
        if (u && u.defaultProps)
          for (ve in de = u.defaultProps, de)
            X[ve] === void 0 && (X[ve] = de[ve]);
        te && x(
          X,
          typeof u == "function" ? u.displayName || u.name || "Unknown" : u
        );
        var ve = 1e4 > V.recentlyCreatedOwnerStacks++;
        return I(
          u,
          te,
          void 0,
          void 0,
          p(),
          X,
          ve ? Error("react-stack-top-frame") : L,
          ve ? dt(v(u)) : ae
        );
      }, t.createRef = function() {
        var u = { current: null };
        return Object.seal(u), u;
      }, t.forwardRef = function(u) {
        u != null && u.$$typeof === z ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof u != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          u === null ? "null" : typeof u
        ) : u.length !== 0 && u.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          u.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), u != null && u.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var w = { $$typeof: j, render: u }, Y;
        return Object.defineProperty(w, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return Y;
          },
          set: function(X) {
            Y = X, u.name || u.displayName || (Object.defineProperty(u, "name", { value: X }), u.displayName = X);
          }
        }), w;
      }, t.isValidElement = P, t.lazy = function(u) {
        return {
          $$typeof: oe,
          _payload: { _status: -1, _result: u },
          _init: Z
        };
      }, t.memo = function(u, w) {
        u == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          u === null ? "null" : typeof u
        ), w = {
          $$typeof: z,
          type: u,
          compare: w === void 0 ? null : w
        };
        var Y;
        return Object.defineProperty(w, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return Y;
          },
          set: function(X) {
            Y = X, u.name || u.displayName || (Object.defineProperty(u, "name", { value: X }), u.displayName = X);
          }
        }), w;
      }, t.startTransition = function(u) {
        var w = V.T, Y = {};
        V.T = Y, Y._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var X = u(), te = V.S;
          te !== null && te(Y, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then($, ge);
        } catch (de) {
          ge(de);
        } finally {
          w === null && Y._updatedFibers && (u = Y._updatedFibers.size, Y._updatedFibers.clear(), 10 < u && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), V.T = w;
        }
      }, t.unstable_useCacheRefresh = function() {
        return H().useCacheRefresh();
      }, t.use = function(u) {
        return H().use(u);
      }, t.useActionState = function(u, w, Y) {
        return H().useActionState(
          u,
          w,
          Y
        );
      }, t.useCallback = function(u, w) {
        return H().useCallback(u, w);
      }, t.useContext = function(u) {
        var w = H();
        return u.$$typeof === N && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), w.useContext(u);
      }, t.useDebugValue = function(u, w) {
        return H().useDebugValue(u, w);
      }, t.useDeferredValue = function(u, w) {
        return H().useDeferredValue(u, w);
      }, t.useEffect = function(u, w, Y) {
        u == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var X = H();
        if (typeof Y == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return X.useEffect(u, w);
      }, t.useId = function() {
        return H().useId();
      }, t.useImperativeHandle = function(u, w, Y) {
        return H().useImperativeHandle(u, w, Y);
      }, t.useInsertionEffect = function(u, w) {
        return u == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), H().useInsertionEffect(u, w);
      }, t.useLayoutEffect = function(u, w) {
        return u == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), H().useLayoutEffect(u, w);
      }, t.useMemo = function(u, w) {
        return H().useMemo(u, w);
      }, t.useOptimistic = function(u, w) {
        return H().useOptimistic(u, w);
      }, t.useReducer = function(u, w, Y) {
        return H().useReducer(u, w, Y);
      }, t.useRef = function(u) {
        return H().useRef(u);
      }, t.useState = function(u) {
        return H().useState(u);
      }, t.useSyncExternalStore = function(u, w, Y) {
        return H().useSyncExternalStore(
          u,
          w,
          Y
        );
      }, t.useTransition = function() {
        return H().useTransition();
      }, t.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(At, At.exports)), At.exports;
}
var Lr;
function Ht() {
  return Lr || (Lr = 1, process.env.NODE_ENV === "production" ? Lt.exports = zn() : Lt.exports = Wn()), Lt.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function $n() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    function r(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === Z ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case x:
          return "Fragment";
        case I:
          return "Profiler";
        case S:
          return "StrictMode";
        case M:
          return "Suspense";
        case k:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case T:
            return "Portal";
          case P:
            return (o.displayName || "Context") + ".Provider";
          case C:
            return (o._context.displayName || "Context") + ".Consumer";
          case U:
            var y = o.render;
            return o = o.displayName, o || (o = y.displayName || y.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case G:
            return y = o.displayName || null, y !== null ? y : r(o.type) || "Memo";
          case K:
            y = o._payload, o = o._init;
            try {
              return r(o(y));
            } catch {
            }
        }
      return null;
    }
    function t(o) {
      return "" + o;
    }
    function e(o) {
      try {
        t(o);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var R = y.error, N = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return R.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), t(o);
      }
    }
    function n(o) {
      if (o === x) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === K)
        return "<...>";
      try {
        var y = r(o);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var o = H.A;
      return o === null ? null : o.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(o) {
      if ($.call(o, "key")) {
        var y = Object.getOwnPropertyDescriptor(o, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function h(o, y) {
      function R() {
        ne || (ne = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: R,
        configurable: !0
      });
    }
    function l() {
      var o = r(this.type);
      return re[o] || (re[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function d(o, y, R, N, F, j, q, ce) {
      return R = j.ref, o = {
        $$typeof: _,
        type: o,
        key: y,
        props: j,
        _owner: F
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function m(o, y, R, N, F, j, q, ce) {
      var z = y.children;
      if (z !== void 0)
        if (N)
          if (Q(z)) {
            for (N = 0; N < z.length; N++)
              v(z[N]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(z);
      if ($.call(y, "key")) {
        z = r(o);
        var oe = Object.keys(y).filter(function(be) {
          return be !== "key";
        });
        N = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", O[z + N] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          z,
          oe,
          z
        ), O[z + N] = !0);
      }
      if (z = null, R !== void 0 && (e(R), z = "" + R), c(y) && (e(y.key), z = "" + y.key), "key" in y) {
        R = {};
        for (var he in y)
          he !== "key" && (R[he] = y[he]);
      } else R = y;
      return z && h(
        R,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), d(
        o,
        z,
        j,
        F,
        a(),
        R,
        q,
        ce
      );
    }
    function v(o) {
      typeof o == "object" && o !== null && o.$$typeof === _ && o._store && (o._store.validated = 1);
    }
    var p = Ht(), _ = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), P = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), H = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, Q = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(o) {
        return o();
      }
    };
    var ne, re = {}, A = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), E = J(n(s)), O = {};
    St.Fragment = x, St.jsx = function(o, y, R, N, F) {
      var j = 1e4 > H.recentlyCreatedOwnerStacks++;
      return m(
        o,
        y,
        R,
        !1,
        N,
        F,
        j ? Error("react-stack-top-frame") : A,
        j ? J(n(o)) : E
      );
    }, St.jsxs = function(o, y, R, N, F) {
      var j = 1e4 > H.recentlyCreatedOwnerStacks++;
      return m(
        o,
        y,
        R,
        !0,
        N,
        F,
        j ? Error("react-stack-top-frame") : A,
        j ? J(n(o)) : E
      );
    };
  }()), St;
}
var Fr;
function Vn() {
  return Fr || (Fr = 1, process.env.NODE_ENV === "production" ? jt.exports = Gn() : jt.exports = $n()), jt.exports;
}
var pt = Vn(), Oe = Ht();
const Bn = /* @__PURE__ */ Tt(Oe);
var Yt = { exports: {} }, De = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function Zn() {
  if (Ur) return De;
  Ur = 1;
  var r = Ht();
  function t(l) {
    var d = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        d += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return "Minified React error #" + l + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function e() {
  }
  var n = {
    d: {
      f: e,
      r: function() {
        throw Error(t(522));
      },
      D: e,
      C: e,
      L: e,
      m: e,
      X: e,
      S: e,
      M: e
    },
    p: 0,
    findDOMNode: null
  }, a = Symbol.for("react.portal");
  function s(l, d, m) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: a,
      key: v == null ? null : "" + v,
      children: l,
      containerInfo: d,
      implementation: m
    };
  }
  var c = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(l, d) {
    if (l === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = n, De.createPortal = function(l, d) {
    var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(t(299));
    return s(l, d, null, m);
  }, De.flushSync = function(l) {
    var d = c.T, m = n.p;
    try {
      if (c.T = null, n.p = 2, l) return l();
    } finally {
      c.T = d, n.p = m, n.d.f();
    }
  }, De.preconnect = function(l, d) {
    typeof l == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, n.d.C(l, d));
  }, De.prefetchDNS = function(l) {
    typeof l == "string" && n.d.D(l);
  }, De.preinit = function(l, d) {
    if (typeof l == "string" && d && typeof d.as == "string") {
      var m = d.as, v = h(m, d.crossOrigin), p = typeof d.integrity == "string" ? d.integrity : void 0, _ = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      m === "style" ? n.d.S(
        l,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: v,
          integrity: p,
          fetchPriority: _
        }
      ) : m === "script" && n.d.X(l, {
        crossOrigin: v,
        integrity: p,
        fetchPriority: _,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, De.preinitModule = function(l, d) {
    if (typeof l == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var m = h(
            d.as,
            d.crossOrigin
          );
          n.d.M(l, {
            crossOrigin: m,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0
          });
        }
      } else d == null && n.d.M(l);
  }, De.preload = function(l, d) {
    if (typeof l == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var m = d.as, v = h(m, d.crossOrigin);
      n.d.L(l, m, {
        crossOrigin: v,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, De.preloadModule = function(l, d) {
    if (typeof l == "string")
      if (d) {
        var m = h(d.as, d.crossOrigin);
        n.d.m(l, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: m,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else n.d.m(l);
  }, De.requestFormReset = function(l) {
    n.d.r(l);
  }, De.unstable_batchedUpdates = function(l, d) {
    return l(d);
  }, De.useFormState = function(l, d, m) {
    return c.H.useFormState(l, d, m);
  }, De.useFormStatus = function() {
    return c.H.useHostTransitionStatus();
  }, De.version = "19.1.0", De;
}
var ke = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Kn() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    function r() {
    }
    function t(v) {
      return "" + v;
    }
    function e(v, p, _) {
      var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        t(T);
        var x = !1;
      } catch {
        x = !0;
      }
      return x && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object"
      ), t(T)), {
        $$typeof: d,
        key: T == null ? null : "" + T,
        children: v,
        containerInfo: p,
        implementation: _
      };
    }
    function n(v, p) {
      if (v === "font") return "";
      if (typeof p == "string")
        return p === "use-credentials" ? p : "";
    }
    function a(v) {
      return v === null ? "`null`" : v === void 0 ? "`undefined`" : v === "" ? "an empty string" : 'something with type "' + typeof v + '"';
    }
    function s(v) {
      return v === null ? "`null`" : v === void 0 ? "`undefined`" : v === "" ? "an empty string" : typeof v == "string" ? JSON.stringify(v) : typeof v == "number" ? "`" + v + "`" : 'something with type "' + typeof v + '"';
    }
    function c() {
      var v = m.H;
      return v === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), v;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var h = Ht(), l = {
      d: {
        f: r,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r
      },
      p: 0,
      findDOMNode: null
    }, d = Symbol.for("react.portal"), m = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, ke.createPortal = function(v, p) {
      var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return e(v, p, null, _);
    }, ke.flushSync = function(v) {
      var p = m.T, _ = l.p;
      try {
        if (m.T = null, l.p = 2, v)
          return v();
      } finally {
        m.T = p, l.p = _, l.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ke.preconnect = function(v, p) {
      typeof v == "string" && v ? p != null && typeof p != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        s(p)
      ) : p != null && typeof p.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        a(p.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        a(v)
      ), typeof v == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, l.d.C(v, p));
    }, ke.prefetchDNS = function(v) {
      if (typeof v != "string" || !v)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          a(v)
        );
      else if (1 < arguments.length) {
        var p = arguments[1];
        typeof p == "object" && p.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          s(p)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          s(p)
        );
      }
      typeof v == "string" && l.d.D(v);
    }, ke.preinit = function(v, p) {
      if (typeof v == "string" && v ? p == null || typeof p != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        s(p)
      ) : p.as !== "style" && p.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        s(p.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        a(v)
      ), typeof v == "string" && p && typeof p.as == "string") {
        var _ = p.as, T = n(_, p.crossOrigin), x = typeof p.integrity == "string" ? p.integrity : void 0, S = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        _ === "style" ? l.d.S(
          v,
          typeof p.precedence == "string" ? p.precedence : void 0,
          {
            crossOrigin: T,
            integrity: x,
            fetchPriority: S
          }
        ) : _ === "script" && l.d.X(v, {
          crossOrigin: T,
          integrity: x,
          fetchPriority: S,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0
        });
      }
    }, ke.preinitModule = function(v, p) {
      var _ = "";
      if (typeof v == "string" && v || (_ += " The `href` argument encountered was " + a(v) + "."), p !== void 0 && typeof p != "object" ? _ += " The `options` argument encountered was " + a(p) + "." : p && "as" in p && p.as !== "script" && (_ += " The `as` option encountered was " + s(p.as) + "."), _)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          _
        );
      else
        switch (_ = p && typeof p.as == "string" ? p.as : "script", _) {
          case "script":
            break;
          default:
            _ = s(_), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              _,
              v
            );
        }
      typeof v == "string" && (typeof p == "object" && p !== null ? (p.as == null || p.as === "script") && (_ = n(
        p.as,
        p.crossOrigin
      ), l.d.M(v, {
        crossOrigin: _,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      })) : p == null && l.d.M(v));
    }, ke.preload = function(v, p) {
      var _ = "";
      if (typeof v == "string" && v || (_ += " The `href` argument encountered was " + a(v) + "."), p == null || typeof p != "object" ? _ += " The `options` argument encountered was " + a(p) + "." : typeof p.as == "string" && p.as || (_ += " The `as` option encountered was " + a(p.as) + "."), _ && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        _
      ), typeof v == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        _ = p.as;
        var T = n(
          _,
          p.crossOrigin
        );
        l.d.L(v, _, {
          crossOrigin: T,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0
        });
      }
    }, ke.preloadModule = function(v, p) {
      var _ = "";
      typeof v == "string" && v || (_ += " The `href` argument encountered was " + a(v) + "."), p !== void 0 && typeof p != "object" ? _ += " The `options` argument encountered was " + a(p) + "." : p && "as" in p && typeof p.as != "string" && (_ += " The `as` option encountered was " + a(p.as) + "."), _ && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        _
      ), typeof v == "string" && (p ? (_ = n(
        p.as,
        p.crossOrigin
      ), l.d.m(v, {
        as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
        crossOrigin: _,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0
      })) : l.d.m(v));
    }, ke.requestFormReset = function(v) {
      l.d.r(v);
    }, ke.unstable_batchedUpdates = function(v, p) {
      return v(p);
    }, ke.useFormState = function(v, p, _) {
      return c().useFormState(v, p, _);
    }, ke.useFormStatus = function() {
      return c().useHostTransitionStatus();
    }, ke.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ke;
}
var Xr;
function Qn() {
  if (Xr) return Yt.exports;
  Xr = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (t) {
        console.error(t);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (r(), Yt.exports = Zn()) : Yt.exports = Kn(), Yt.exports;
}
var mn = Qn();
const Jn = /* @__PURE__ */ Tt(mn);
var tr = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
var Hr;
function ea() {
  return Hr || (Hr = 1, function(r) {
    (function(t, e, n, a) {
      var s = ["", "webkit", "Moz", "MS", "ms", "o"], c = e.createElement("div"), h = "function", l = Math.round, d = Math.abs, m = Date.now;
      function v(i, f, g) {
        return setTimeout(P(i, g), f);
      }
      function p(i, f, g) {
        return Array.isArray(i) ? (_(i, g[f], g), !0) : !1;
      }
      function _(i, f, g) {
        var b;
        if (i)
          if (i.forEach)
            i.forEach(f, g);
          else if (i.length !== a)
            for (b = 0; b < i.length; )
              f.call(g, i[b], b, i), b++;
          else
            for (b in i)
              i.hasOwnProperty(b) && f.call(g, i[b], b, i);
      }
      function T(i, f, g) {
        var b = "DEPRECATED METHOD: " + f + `
` + g + ` AT 
`;
        return function() {
          var D = new Error("get-stack-trace"), W = D && D.stack ? D.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", me = t.console && (t.console.warn || t.console.log);
          return me && me.call(t.console, b, W), i.apply(this, arguments);
        };
      }
      var x;
      typeof Object.assign != "function" ? x = function(f) {
        if (f === a || f === null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var g = Object(f), b = 1; b < arguments.length; b++) {
          var D = arguments[b];
          if (D !== a && D !== null)
            for (var W in D)
              D.hasOwnProperty(W) && (g[W] = D[W]);
        }
        return g;
      } : x = Object.assign;
      var S = T(function(f, g, b) {
        for (var D = Object.keys(g), W = 0; W < D.length; )
          (!b || b && f[D[W]] === a) && (f[D[W]] = g[D[W]]), W++;
        return f;
      }, "extend", "Use `assign`."), I = T(function(f, g) {
        return S(f, g, !0);
      }, "merge", "Use `assign`.");
      function C(i, f, g) {
        var b = f.prototype, D;
        D = i.prototype = Object.create(b), D.constructor = i, D._super = b, g && x(D, g);
      }
      function P(i, f) {
        return function() {
          return i.apply(f, arguments);
        };
      }
      function U(i, f) {
        return typeof i == h ? i.apply(f && f[0] || a, f) : i;
      }
      function M(i, f) {
        return i === a ? f : i;
      }
      function k(i, f, g) {
        _(Z(f), function(b) {
          i.addEventListener(b, g, !1);
        });
      }
      function G(i, f, g) {
        _(Z(f), function(b) {
          i.removeEventListener(b, g, !1);
        });
      }
      function K(i, f) {
        for (; i; ) {
          if (i == f)
            return !0;
          i = i.parentNode;
        }
        return !1;
      }
      function B(i, f) {
        return i.indexOf(f) > -1;
      }
      function Z(i) {
        return i.trim().split(/\s+/g);
      }
      function H(i, f, g) {
        if (i.indexOf && !g)
          return i.indexOf(f);
        for (var b = 0; b < i.length; ) {
          if (g && i[b][g] == f || !g && i[b] === f)
            return b;
          b++;
        }
        return -1;
      }
      function $(i) {
        return Array.prototype.slice.call(i, 0);
      }
      function Q(i, f, g) {
        for (var b = [], D = [], W = 0; W < i.length; ) {
          var me = i[W][f];
          H(D, me) < 0 && b.push(i[W]), D[W] = me, W++;
        }
        return b = b.sort(function(Ie, Ye) {
          return Ie[f] > Ye[f];
        }), b;
      }
      function J(i, f) {
        for (var g, b, D = f[0].toUpperCase() + f.slice(1), W = 0; W < s.length; ) {
          if (g = s[W], b = g ? g + D : f, b in i)
            return b;
          W++;
        }
        return a;
      }
      var ne = 1;
      function re() {
        return ne++;
      }
      function A(i) {
        var f = i.ownerDocument || i;
        return f.defaultView || f.parentWindow || t;
      }
      var E = /mobile|tablet|ip(ad|hone|od)|android/i, O = "ontouchstart" in t, o = J(t, "PointerEvent") !== a, y = O && E.test(navigator.userAgent), R = "touch", N = "pen", F = "mouse", j = "kinect", q = 25, ce = 1, z = 2, oe = 4, he = 8, be = 1, Ue = 2, Ce = 4, Me = 8, Ae = 16, se = Ue | Ce, Ee = Me | Ae, ze = se | Ee, $e = ["x", "y"], V = ["clientX", "clientY"];
      function le(i, f) {
        var g = this;
        this.manager = i, this.callback = f, this.element = i.element, this.target = i.options.inputTarget, this.domHandler = function(b) {
          U(i.options.enable, [i]) && g.handler(b);
        }, this.init();
      }
      le.prototype = {
        /**
         * should handle the inputEvent data and trigger the callback
         * @virtual
         */
        handler: function() {
        },
        /**
         * bind the events
         */
        init: function() {
          this.evEl && k(this.element, this.evEl, this.domHandler), this.evTarget && k(this.target, this.evTarget, this.domHandler), this.evWin && k(A(this.element), this.evWin, this.domHandler);
        },
        /**
         * unbind the events
         */
        destroy: function() {
          this.evEl && G(this.element, this.evEl, this.domHandler), this.evTarget && G(this.target, this.evTarget, this.domHandler), this.evWin && G(A(this.element), this.evWin, this.domHandler);
        }
      };
      function dt(i) {
        var f, g = i.options.inputClass;
        return g ? f = g : o ? f = ue : y ? f = Pt : O ? f = $t : f = w, new f(i, vt);
      }
      function vt(i, f, g) {
        var b = g.pointers.length, D = g.changedPointers.length, W = f & ce && b - D === 0, me = f & (oe | he) && b - D === 0;
        g.isFirst = !!W, g.isFinal = !!me, W && (i.session = {}), g.eventType = f, ct(i, g), i.emit("hammer.input", g), i.recognize(g), i.session.prevInput = g;
      }
      function ct(i, f) {
        var g = i.session, b = f.pointers, D = b.length;
        g.firstInput || (g.firstInput = ae(f)), D > 1 && !g.firstMultiple ? g.firstMultiple = ae(f) : D === 1 && (g.firstMultiple = !1);
        var W = g.firstInput, me = g.firstMultiple, Pe = me ? me.center : W.center, Ie = f.center = ee(b);
        f.timeStamp = m(), f.deltaTime = f.timeStamp - W.timeStamp, f.angle = we(Pe, Ie), f.distance = fe(Pe, Ie), _e(g, f), f.offsetDirection = ge(f.deltaX, f.deltaY);
        var Ye = ie(f.deltaTime, f.deltaX, f.deltaY);
        f.overallVelocityX = Ye.x, f.overallVelocityY = Ye.y, f.overallVelocity = d(Ye.x) > d(Ye.y) ? Ye.x : Ye.y, f.scale = me ? xe(me.pointers, b) : 1, f.rotation = me ? Ne(me.pointers, b) : 0, f.maxPointers = g.prevInput ? f.pointers.length > g.prevInput.maxPointers ? f.pointers.length : g.prevInput.maxPointers : f.pointers.length, L(g, f);
        var Ze = i.element;
        K(f.srcEvent.target, Ze) && (Ze = f.srcEvent.target), f.target = Ze;
      }
      function _e(i, f) {
        var g = f.center, b = i.offsetDelta || {}, D = i.prevDelta || {}, W = i.prevInput || {};
        (f.eventType === ce || W.eventType === oe) && (D = i.prevDelta = {
          x: W.deltaX || 0,
          y: W.deltaY || 0
        }, b = i.offsetDelta = {
          x: g.x,
          y: g.y
        }), f.deltaX = D.x + (g.x - b.x), f.deltaY = D.y + (g.y - b.y);
      }
      function L(i, f) {
        var g = i.lastInterval || f, b = f.timeStamp - g.timeStamp, D, W, me, Pe;
        if (f.eventType != he && (b > q || g.velocity === a)) {
          var Ie = f.deltaX - g.deltaX, Ye = f.deltaY - g.deltaY, Ze = ie(b, Ie, Ye);
          W = Ze.x, me = Ze.y, D = d(Ze.x) > d(Ze.y) ? Ze.x : Ze.y, Pe = ge(Ie, Ye), i.lastInterval = f;
        } else
          D = g.velocity, W = g.velocityX, me = g.velocityY, Pe = g.direction;
        f.velocity = D, f.velocityX = W, f.velocityY = me, f.direction = Pe;
      }
      function ae(i) {
        for (var f = [], g = 0; g < i.pointers.length; )
          f[g] = {
            clientX: l(i.pointers[g].clientX),
            clientY: l(i.pointers[g].clientY)
          }, g++;
        return {
          timeStamp: m(),
          pointers: f,
          center: ee(f),
          deltaX: i.deltaX,
          deltaY: i.deltaY
        };
      }
      function ee(i) {
        var f = i.length;
        if (f === 1)
          return {
            x: l(i[0].clientX),
            y: l(i[0].clientY)
          };
        for (var g = 0, b = 0, D = 0; D < f; )
          g += i[D].clientX, b += i[D].clientY, D++;
        return {
          x: l(g / f),
          y: l(b / f)
        };
      }
      function ie(i, f, g) {
        return {
          x: f / i || 0,
          y: g / i || 0
        };
      }
      function ge(i, f) {
        return i === f ? be : d(i) >= d(f) ? i < 0 ? Ue : Ce : f < 0 ? Me : Ae;
      }
      function fe(i, f, g) {
        g || (g = $e);
        var b = f[g[0]] - i[g[0]], D = f[g[1]] - i[g[1]];
        return Math.sqrt(b * b + D * D);
      }
      function we(i, f, g) {
        g || (g = $e);
        var b = f[g[0]] - i[g[0]], D = f[g[1]] - i[g[1]];
        return Math.atan2(D, b) * 180 / Math.PI;
      }
      function Ne(i, f) {
        return we(f[1], f[0], V) + we(i[1], i[0], V);
      }
      function xe(i, f) {
        return fe(f[0], f[1], V) / fe(i[0], i[1], V);
      }
      var qe = {
        mousedown: ce,
        mousemove: z,
        mouseup: oe
      }, Le = "mousedown", u = "mousemove mouseup";
      function w() {
        this.evEl = Le, this.evWin = u, this.pressed = !1, le.apply(this, arguments);
      }
      C(w, le, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(f) {
          var g = qe[f.type];
          g & ce && f.button === 0 && (this.pressed = !0), g & z && f.which !== 1 && (g = oe), this.pressed && (g & oe && (this.pressed = !1), this.callback(this.manager, g, {
            pointers: [f],
            changedPointers: [f],
            pointerType: F,
            srcEvent: f
          }));
        }
      });
      var Y = {
        pointerdown: ce,
        pointermove: z,
        pointerup: oe,
        pointercancel: he,
        pointerout: he
      }, X = {
        2: R,
        3: N,
        4: F,
        5: j
        // see https://twitter.com/jacobrossi/status/480596438489890816
      }, te = "pointerdown", de = "pointermove pointerup pointercancel";
      t.MSPointerEvent && !t.PointerEvent && (te = "MSPointerDown", de = "MSPointerMove MSPointerUp MSPointerCancel");
      function ue() {
        this.evEl = te, this.evWin = de, le.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      C(ue, le, {
        /**
         * handle mouse events
         * @param {Object} ev
         */
        handler: function(f) {
          var g = this.store, b = !1, D = f.type.toLowerCase().replace("ms", ""), W = Y[D], me = X[f.pointerType] || f.pointerType, Pe = me == R, Ie = H(g, f.pointerId, "pointerId");
          W & ce && (f.button === 0 || Pe) ? Ie < 0 && (g.push(f), Ie = g.length - 1) : W & (oe | he) && (b = !0), !(Ie < 0) && (g[Ie] = f, this.callback(this.manager, W, {
            pointers: g,
            changedPointers: [f],
            pointerType: me,
            srcEvent: f
          }), b && g.splice(Ie, 1));
        }
      });
      var ye = {
        touchstart: ce,
        touchmove: z,
        touchend: oe,
        touchcancel: he
      }, ve = "touchstart", Ve = "touchstart touchmove touchend touchcancel";
      function rt() {
        this.evTarget = ve, this.evWin = Ve, this.started = !1, le.apply(this, arguments);
      }
      C(rt, le, {
        handler: function(f) {
          var g = ye[f.type];
          if (g === ce && (this.started = !0), !!this.started) {
            var b = zt.call(this, f, g);
            g & (oe | he) && b[0].length - b[1].length === 0 && (this.started = !1), this.callback(this.manager, g, {
              pointers: b[0],
              changedPointers: b[1],
              pointerType: R,
              srcEvent: f
            });
          }
        }
      });
      function zt(i, f) {
        var g = $(i.touches), b = $(i.changedTouches);
        return f & (oe | he) && (g = Q(g.concat(b), "identifier")), [g, b];
      }
      var Wt = {
        touchstart: ce,
        touchmove: z,
        touchend: oe,
        touchcancel: he
      }, In = "touchstart touchmove touchend touchcancel";
      function Pt() {
        this.evTarget = In, this.targetIds = {}, le.apply(this, arguments);
      }
      C(Pt, le, {
        handler: function(f) {
          var g = Wt[f.type], b = Dn.call(this, f, g);
          b && this.callback(this.manager, g, {
            pointers: b[0],
            changedPointers: b[1],
            pointerType: R,
            srcEvent: f
          });
        }
      });
      function Dn(i, f) {
        var g = $(i.touches), b = this.targetIds;
        if (f & (ce | z) && g.length === 1)
          return b[g[0].identifier] = !0, [g, g];
        var D, W, me = $(i.changedTouches), Pe = [], Ie = this.target;
        if (W = g.filter(function(Ye) {
          return K(Ye.target, Ie);
        }), f === ce)
          for (D = 0; D < W.length; )
            b[W[D].identifier] = !0, D++;
        for (D = 0; D < me.length; )
          b[me[D].identifier] && Pe.push(me[D]), f & (oe | he) && delete b[me[D].identifier], D++;
        if (Pe.length)
          return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            Q(W.concat(Pe), "identifier"),
            Pe
          ];
      }
      var kn = 2500, Sr = 25;
      function $t() {
        le.apply(this, arguments);
        var i = P(this.handler, this);
        this.touch = new Pt(this.manager, i), this.mouse = new w(this.manager, i), this.primaryTouch = null, this.lastTouches = [];
      }
      C($t, le, {
        /**
         * handle mouse and touch events
         * @param {Hammer} manager
         * @param {String} inputEvent
         * @param {Object} inputData
         */
        handler: function(f, g, b) {
          var D = b.pointerType == R, W = b.pointerType == F;
          if (!(W && b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents)) {
            if (D)
              jn.call(this, g, b);
            else if (W && Ln.call(this, b))
              return;
            this.callback(f, g, b);
          }
        },
        /**
         * remove the event listeners
         */
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy();
        }
      });
      function jn(i, f) {
        i & ce ? (this.primaryTouch = f.changedPointers[0].identifier, br.call(this, f)) : i & (oe | he) && br.call(this, f);
      }
      function br(i) {
        var f = i.changedPointers[0];
        if (f.identifier === this.primaryTouch) {
          var g = { x: f.clientX, y: f.clientY };
          this.lastTouches.push(g);
          var b = this.lastTouches, D = function() {
            var W = b.indexOf(g);
            W > -1 && b.splice(W, 1);
          };
          setTimeout(D, kn);
        }
      }
      function Ln(i) {
        for (var f = i.srcEvent.clientX, g = i.srcEvent.clientY, b = 0; b < this.lastTouches.length; b++) {
          var D = this.lastTouches[b], W = Math.abs(f - D.x), me = Math.abs(g - D.y);
          if (W <= Sr && me <= Sr)
            return !0;
        }
        return !1;
      }
      var Rr = J(c.style, "touchAction"), Ar = Rr !== a, xr = "compute", Cr = "auto", Vt = "manipulation", lt = "none", Et = "pan-x", _t = "pan-y", Mt = Fn();
      function Bt(i, f) {
        this.manager = i, this.set(f);
      }
      Bt.prototype = {
        /**
         * set the touchAction value on the element or enable the polyfill
         * @param {String} value
         */
        set: function(i) {
          i == xr && (i = this.compute()), Ar && this.manager.element.style && Mt[i] && (this.manager.element.style[Rr] = i), this.actions = i.toLowerCase().trim();
        },
        /**
         * just re-set the touchAction value
         */
        update: function() {
          this.set(this.manager.options.touchAction);
        },
        /**
         * compute the value for the touchAction property based on the recognizer's settings
         * @returns {String} value
         */
        compute: function() {
          var i = [];
          return _(this.manager.recognizers, function(f) {
            U(f.options.enable, [f]) && (i = i.concat(f.getTouchAction()));
          }), Yn(i.join(" "));
        },
        /**
         * this method is called on each input cycle and provides the preventing of the browser behavior
         * @param {Object} input
         */
        preventDefaults: function(i) {
          var f = i.srcEvent, g = i.offsetDirection;
          if (this.manager.session.prevented) {
            f.preventDefault();
            return;
          }
          var b = this.actions, D = B(b, lt) && !Mt[lt], W = B(b, _t) && !Mt[_t], me = B(b, Et) && !Mt[Et];
          if (D) {
            var Pe = i.pointers.length === 1, Ie = i.distance < 2, Ye = i.deltaTime < 250;
            if (Pe && Ie && Ye)
              return;
          }
          if (!(me && W) && (D || W && g & se || me && g & Ee))
            return this.preventSrc(f);
        },
        /**
         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
         * @param {Object} srcEvent
         */
        preventSrc: function(i) {
          this.manager.session.prevented = !0, i.preventDefault();
        }
      };
      function Yn(i) {
        if (B(i, lt))
          return lt;
        var f = B(i, Et), g = B(i, _t);
        return f && g ? lt : f || g ? f ? Et : _t : B(i, Vt) ? Vt : Cr;
      }
      function Fn() {
        if (!Ar)
          return !1;
        var i = {}, f = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(g) {
          i[g] = f ? t.CSS.supports("touch-action", g) : !0;
        }), i;
      }
      var Nt = 1, Xe = 2, ht = 4, ot = 8, nt = ot, wt = 16, Be = 32;
      function at(i) {
        this.options = x({}, this.defaults, i || {}), this.id = re(), this.manager = null, this.options.enable = M(this.options.enable, !0), this.state = Nt, this.simultaneous = {}, this.requireFail = [];
      }
      at.prototype = {
        /**
         * @virtual
         * @type {Object}
         */
        defaults: {},
        /**
         * set options
         * @param {Object} options
         * @return {Recognizer}
         */
        set: function(i) {
          return x(this.options, i), this.manager && this.manager.touchAction.update(), this;
        },
        /**
         * recognize simultaneous with an other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        recognizeWith: function(i) {
          if (p(i, "recognizeWith", this))
            return this;
          var f = this.simultaneous;
          return i = It(i, this), f[i.id] || (f[i.id] = i, i.recognizeWith(this)), this;
        },
        /**
         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRecognizeWith: function(i) {
          return p(i, "dropRecognizeWith", this) ? this : (i = It(i, this), delete this.simultaneous[i.id], this);
        },
        /**
         * recognizer can only run when an other is failing
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        requireFailure: function(i) {
          if (p(i, "requireFailure", this))
            return this;
          var f = this.requireFail;
          return i = It(i, this), H(f, i) === -1 && (f.push(i), i.requireFailure(this)), this;
        },
        /**
         * drop the requireFailure link. it does not remove the link on the other recognizer.
         * @param {Recognizer} otherRecognizer
         * @returns {Recognizer} this
         */
        dropRequireFailure: function(i) {
          if (p(i, "dropRequireFailure", this))
            return this;
          i = It(i, this);
          var f = H(this.requireFail, i);
          return f > -1 && this.requireFail.splice(f, 1), this;
        },
        /**
         * has require failures boolean
         * @returns {boolean}
         */
        hasRequireFailures: function() {
          return this.requireFail.length > 0;
        },
        /**
         * if the recognizer can recognize simultaneous with an other recognizer
         * @param {Recognizer} otherRecognizer
         * @returns {Boolean}
         */
        canRecognizeWith: function(i) {
          return !!this.simultaneous[i.id];
        },
        /**
         * You should use `tryEmit` instead of `emit` directly to check
         * that all the needed recognizers has failed before emitting.
         * @param {Object} input
         */
        emit: function(i) {
          var f = this, g = this.state;
          function b(D) {
            f.manager.emit(D, i);
          }
          g < ot && b(f.options.event + Pr(g)), b(f.options.event), i.additionalEvent && b(i.additionalEvent), g >= ot && b(f.options.event + Pr(g));
        },
        /**
         * Check that all the require failure recognizers has failed,
         * if true, it emits a gesture event,
         * otherwise, setup the state to FAILED.
         * @param {Object} input
         */
        tryEmit: function(i) {
          if (this.canEmit())
            return this.emit(i);
          this.state = Be;
        },
        /**
         * can we emit?
         * @returns {boolean}
         */
        canEmit: function() {
          for (var i = 0; i < this.requireFail.length; ) {
            if (!(this.requireFail[i].state & (Be | Nt)))
              return !1;
            i++;
          }
          return !0;
        },
        /**
         * update the recognizer
         * @param {Object} inputData
         */
        recognize: function(i) {
          var f = x({}, i);
          if (!U(this.options.enable, [this, f])) {
            this.reset(), this.state = Be;
            return;
          }
          this.state & (nt | wt | Be) && (this.state = Nt), this.state = this.process(f), this.state & (Xe | ht | ot | wt) && this.tryEmit(f);
        },
        /**
         * return the state of the recognizer
         * the actual recognizing happens in this method
         * @virtual
         * @param {Object} inputData
         * @returns {Const} STATE
         */
        process: function(i) {
        },
        // jshint ignore:line
        /**
         * return the preferred touch-action
         * @virtual
         * @returns {Array}
         */
        getTouchAction: function() {
        },
        /**
         * called when the gesture isn't allowed to recognize
         * like when another is being recognized or it is disabled
         * @virtual
         */
        reset: function() {
        }
      };
      function Pr(i) {
        return i & wt ? "cancel" : i & ot ? "end" : i & ht ? "move" : i & Xe ? "start" : "";
      }
      function Mr(i) {
        return i == Ae ? "down" : i == Me ? "up" : i == Ue ? "left" : i == Ce ? "right" : "";
      }
      function It(i, f) {
        var g = f.manager;
        return g ? g.get(i) : i;
      }
      function We() {
        at.apply(this, arguments);
      }
      C(We, at, {
        /**
         * @namespace
         * @memberof AttrRecognizer
         */
        defaults: {
          /**
           * @type {Number}
           * @default 1
           */
          pointers: 1
        },
        /**
         * Used to check if it the recognizer receives valid input, like input.distance > 10.
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {Boolean} recognized
         */
        attrTest: function(i) {
          var f = this.options.pointers;
          return f === 0 || i.pointers.length === f;
        },
        /**
         * Process the input and return the state for the recognizer
         * @memberof AttrRecognizer
         * @param {Object} input
         * @returns {*} State
         */
        process: function(i) {
          var f = this.state, g = i.eventType, b = f & (Xe | ht), D = this.attrTest(i);
          return b && (g & he || !D) ? f | wt : b || D ? g & oe ? f | ot : f & Xe ? f | ht : Xe : Be;
        }
      });
      function Dt() {
        We.apply(this, arguments), this.pX = null, this.pY = null;
      }
      C(Dt, We, {
        /**
         * @namespace
         * @memberof PanRecognizer
         */
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: ze
        },
        getTouchAction: function() {
          var i = this.options.direction, f = [];
          return i & se && f.push(_t), i & Ee && f.push(Et), f;
        },
        directionTest: function(i) {
          var f = this.options, g = !0, b = i.distance, D = i.direction, W = i.deltaX, me = i.deltaY;
          return D & f.direction || (f.direction & se ? (D = W === 0 ? be : W < 0 ? Ue : Ce, g = W != this.pX, b = Math.abs(i.deltaX)) : (D = me === 0 ? be : me < 0 ? Me : Ae, g = me != this.pY, b = Math.abs(i.deltaY))), i.direction = D, g && b > f.threshold && D & f.direction;
        },
        attrTest: function(i) {
          return We.prototype.attrTest.call(this, i) && (this.state & Xe || !(this.state & Xe) && this.directionTest(i));
        },
        emit: function(i) {
          this.pX = i.deltaX, this.pY = i.deltaY;
          var f = Mr(i.direction);
          f && (i.additionalEvent = this.options.event + f), this._super.emit.call(this, i);
        }
      });
      function Zt() {
        We.apply(this, arguments);
      }
      C(Zt, We, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [lt];
        },
        attrTest: function(i) {
          return this._super.attrTest.call(this, i) && (Math.abs(i.scale - 1) > this.options.threshold || this.state & Xe);
        },
        emit: function(i) {
          if (i.scale !== 1) {
            var f = i.scale < 1 ? "in" : "out";
            i.additionalEvent = this.options.event + f;
          }
          this._super.emit.call(this, i);
        }
      });
      function Kt() {
        at.apply(this, arguments), this._timer = null, this._input = null;
      }
      C(Kt, at, {
        /**
         * @namespace
         * @memberof PressRecognizer
         */
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          // minimal time of the pointer to be pressed
          threshold: 9
          // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
          return [Cr];
        },
        process: function(i) {
          var f = this.options, g = i.pointers.length === f.pointers, b = i.distance < f.threshold, D = i.deltaTime > f.time;
          if (this._input = i, !b || !g || i.eventType & (oe | he) && !D)
            this.reset();
          else if (i.eventType & ce)
            this.reset(), this._timer = v(function() {
              this.state = nt, this.tryEmit();
            }, f.time, this);
          else if (i.eventType & oe)
            return nt;
          return Be;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function(i) {
          this.state === nt && (i && i.eventType & oe ? this.manager.emit(this.options.event + "up", i) : (this._input.timeStamp = m(), this.manager.emit(this.options.event, this._input)));
        }
      });
      function Qt() {
        We.apply(this, arguments);
      }
      C(Qt, We, {
        /**
         * @namespace
         * @memberof RotateRecognizer
         */
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [lt];
        },
        attrTest: function(i) {
          return this._super.attrTest.call(this, i) && (Math.abs(i.rotation) > this.options.threshold || this.state & Xe);
        }
      });
      function Jt() {
        We.apply(this, arguments);
      }
      C(Jt, We, {
        /**
         * @namespace
         * @memberof SwipeRecognizer
         */
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: se | Ee,
          pointers: 1
        },
        getTouchAction: function() {
          return Dt.prototype.getTouchAction.call(this);
        },
        attrTest: function(i) {
          var f = this.options.direction, g;
          return f & (se | Ee) ? g = i.overallVelocity : f & se ? g = i.overallVelocityX : f & Ee && (g = i.overallVelocityY), this._super.attrTest.call(this, i) && f & i.offsetDirection && i.distance > this.options.threshold && i.maxPointers == this.options.pointers && d(g) > this.options.velocity && i.eventType & oe;
        },
        emit: function(i) {
          var f = Mr(i.offsetDirection);
          f && this.manager.emit(this.options.event + f, i), this.manager.emit(this.options.event, i);
        }
      });
      function kt() {
        at.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      C(kt, at, {
        /**
         * @namespace
         * @memberof PinchRecognizer
         */
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          // max time between the multi-tap taps
          time: 250,
          // max time of the pointer to be down (like finger on the screen)
          threshold: 9,
          // a minimal movement is ok, but keep it low
          posThreshold: 10
          // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
          return [Vt];
        },
        process: function(i) {
          var f = this.options, g = i.pointers.length === f.pointers, b = i.distance < f.threshold, D = i.deltaTime < f.time;
          if (this.reset(), i.eventType & ce && this.count === 0)
            return this.failTimeout();
          if (b && D && g) {
            if (i.eventType != oe)
              return this.failTimeout();
            var W = this.pTime ? i.timeStamp - this.pTime < f.interval : !0, me = !this.pCenter || fe(this.pCenter, i.center) < f.posThreshold;
            this.pTime = i.timeStamp, this.pCenter = i.center, !me || !W ? this.count = 1 : this.count += 1, this._input = i;
            var Pe = this.count % f.taps;
            if (Pe === 0)
              return this.hasRequireFailures() ? (this._timer = v(function() {
                this.state = nt, this.tryEmit();
              }, f.interval, this), Xe) : nt;
          }
          return Be;
        },
        failTimeout: function() {
          return this._timer = v(function() {
            this.state = Be;
          }, this.options.interval, this), Be;
        },
        reset: function() {
          clearTimeout(this._timer);
        },
        emit: function() {
          this.state == nt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
        }
      });
      function it(i, f) {
        return f = f || {}, f.recognizers = M(f.recognizers, it.defaults.preset), new er(i, f);
      }
      it.VERSION = "2.0.7", it.defaults = {
        /**
         * set if DOM events are being triggered.
         * But this is slower and unused by simple implementations, so disabled by default.
         * @type {Boolean}
         * @default false
         */
        domEvents: !1,
        /**
         * The value for the touchAction property/fallback.
         * When set to `compute` it will magically set the correct value based on the added recognizers.
         * @type {String}
         * @default compute
         */
        touchAction: xr,
        /**
         * @type {Boolean}
         * @default true
         */
        enable: !0,
        /**
         * EXPERIMENTAL FEATURE -- can be removed/changed
         * Change the parent input target element.
         * If Null, then it is being set the to main element.
         * @type {Null|EventTarget}
         * @default null
         */
        inputTarget: null,
        /**
         * force an input class
         * @type {Null|Function}
         * @default null
         */
        inputClass: null,
        /**
         * Default recognizer setup when calling `Hammer()`
         * When creating a new Manager these will be skipped.
         * @type {Array}
         */
        preset: [
          // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
          [Qt, { enable: !1 }],
          [Zt, { enable: !1 }, ["rotate"]],
          [Jt, { direction: se }],
          [Dt, { direction: se }, ["swipe"]],
          [kt],
          [kt, { event: "doubletap", taps: 2 }, ["tap"]],
          [Kt]
        ],
        /**
         * Some CSS properties can be used to improve the working of Hammer.
         * Add them to this method and they will be set when creating a new Manager.
         * @namespace
         */
        cssProps: {
          /**
           * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userSelect: "none",
          /**
           * Disable the Windows Phone grippers when pressing an element.
           * @type {String}
           * @default 'none'
           */
          touchSelect: "none",
          /**
           * Disables the default callout shown when you touch and hold a touch target.
           * On iOS, when you touch and hold a touch target such as a link, Safari displays
           * a callout containing information about the link. This property allows you to disable that callout.
           * @type {String}
           * @default 'none'
           */
          touchCallout: "none",
          /**
           * Specifies whether zooming is enabled. Used by IE10>
           * @type {String}
           * @default 'none'
           */
          contentZooming: "none",
          /**
           * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
           * @type {String}
           * @default 'none'
           */
          userDrag: "none",
          /**
           * Overrides the highlight color shown when the user taps a link or a JavaScript
           * clickable element in iOS. This property obeys the alpha value, if specified.
           * @type {String}
           * @default 'rgba(0,0,0,0)'
           */
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      var Un = 1, Nr = 2;
      function er(i, f) {
        this.options = x({}, it.defaults, f || {}), this.options.inputTarget = this.options.inputTarget || i, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = i, this.input = dt(this), this.touchAction = new Bt(this, this.options.touchAction), Ir(this, !0), _(this.options.recognizers, function(g) {
          var b = this.add(new g[0](g[1]));
          g[2] && b.recognizeWith(g[2]), g[3] && b.requireFailure(g[3]);
        }, this);
      }
      er.prototype = {
        /**
         * set options
         * @param {Object} options
         * @returns {Manager}
         */
        set: function(i) {
          return x(this.options, i), i.touchAction && this.touchAction.update(), i.inputTarget && (this.input.destroy(), this.input.target = i.inputTarget, this.input.init()), this;
        },
        /**
         * stop recognizing for this session.
         * This session will be discarded, when a new [input]start event is fired.
         * When forced, the recognizer cycle is stopped immediately.
         * @param {Boolean} [force]
         */
        stop: function(i) {
          this.session.stopped = i ? Nr : Un;
        },
        /**
         * run the recognizers!
         * called by the inputHandler function on every movement of the pointers (touches)
         * it walks through all the recognizers and tries to detect the gesture that is being made
         * @param {Object} inputData
         */
        recognize: function(i) {
          var f = this.session;
          if (!f.stopped) {
            this.touchAction.preventDefaults(i);
            var g, b = this.recognizers, D = f.curRecognizer;
            (!D || D && D.state & nt) && (D = f.curRecognizer = null);
            for (var W = 0; W < b.length; )
              g = b[W], f.stopped !== Nr && // 1
              (!D || g == D || // 2
              g.canRecognizeWith(D)) ? g.recognize(i) : g.reset(), !D && g.state & (Xe | ht | ot) && (D = f.curRecognizer = g), W++;
          }
        },
        /**
         * get a recognizer by its event name.
         * @param {Recognizer|String} recognizer
         * @returns {Recognizer|Null}
         */
        get: function(i) {
          if (i instanceof at)
            return i;
          for (var f = this.recognizers, g = 0; g < f.length; g++)
            if (f[g].options.event == i)
              return f[g];
          return null;
        },
        /**
         * add a recognizer to the manager
         * existing recognizers with the same event name will be removed
         * @param {Recognizer} recognizer
         * @returns {Recognizer|Manager}
         */
        add: function(i) {
          if (p(i, "add", this))
            return this;
          var f = this.get(i.options.event);
          return f && this.remove(f), this.recognizers.push(i), i.manager = this, this.touchAction.update(), i;
        },
        /**
         * remove a recognizer by name or instance
         * @param {Recognizer|String} recognizer
         * @returns {Manager}
         */
        remove: function(i) {
          if (p(i, "remove", this))
            return this;
          if (i = this.get(i), i) {
            var f = this.recognizers, g = H(f, i);
            g !== -1 && (f.splice(g, 1), this.touchAction.update());
          }
          return this;
        },
        /**
         * bind event
         * @param {String} events
         * @param {Function} handler
         * @returns {EventEmitter} this
         */
        on: function(i, f) {
          if (i !== a && f !== a) {
            var g = this.handlers;
            return _(Z(i), function(b) {
              g[b] = g[b] || [], g[b].push(f);
            }), this;
          }
        },
        /**
         * unbind event, leave emit blank to remove all handlers
         * @param {String} events
         * @param {Function} [handler]
         * @returns {EventEmitter} this
         */
        off: function(i, f) {
          if (i !== a) {
            var g = this.handlers;
            return _(Z(i), function(b) {
              f ? g[b] && g[b].splice(H(g[b], f), 1) : delete g[b];
            }), this;
          }
        },
        /**
         * emit event to the listeners
         * @param {String} event
         * @param {Object} data
         */
        emit: function(i, f) {
          this.options.domEvents && qn(i, f);
          var g = this.handlers[i] && this.handlers[i].slice();
          if (!(!g || !g.length)) {
            f.type = i, f.preventDefault = function() {
              f.srcEvent.preventDefault();
            };
            for (var b = 0; b < g.length; )
              g[b](f), b++;
          }
        },
        /**
         * destroy the manager and unbinds all events
         * it doesn't unbind dom events, that is the user own responsibility
         */
        destroy: function() {
          this.element && Ir(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
        }
      };
      function Ir(i, f) {
        var g = i.element;
        if (g.style) {
          var b;
          _(i.options.cssProps, function(D, W) {
            b = J(g.style, W), f ? (i.oldCssProps[b] = g.style[b], g.style[b] = D) : g.style[b] = i.oldCssProps[b] || "";
          }), f || (i.oldCssProps = {});
        }
      }
      function qn(i, f) {
        var g = e.createEvent("Event");
        g.initEvent(i, !0, !0), g.gesture = f, f.target.dispatchEvent(g);
      }
      x(it, {
        INPUT_START: ce,
        INPUT_MOVE: z,
        INPUT_END: oe,
        INPUT_CANCEL: he,
        STATE_POSSIBLE: Nt,
        STATE_BEGAN: Xe,
        STATE_CHANGED: ht,
        STATE_ENDED: ot,
        STATE_RECOGNIZED: nt,
        STATE_CANCELLED: wt,
        STATE_FAILED: Be,
        DIRECTION_NONE: be,
        DIRECTION_LEFT: Ue,
        DIRECTION_RIGHT: Ce,
        DIRECTION_UP: Me,
        DIRECTION_DOWN: Ae,
        DIRECTION_HORIZONTAL: se,
        DIRECTION_VERTICAL: Ee,
        DIRECTION_ALL: ze,
        Manager: er,
        Input: le,
        TouchAction: Bt,
        TouchInput: Pt,
        MouseInput: w,
        PointerEventInput: ue,
        TouchMouseInput: $t,
        SingleTouchInput: rt,
        Recognizer: at,
        AttrRecognizer: We,
        Tap: kt,
        Pan: Dt,
        Swipe: Jt,
        Pinch: Zt,
        Rotate: Qt,
        Press: Kt,
        on: k,
        off: G,
        each: _,
        merge: I,
        extend: S,
        assign: x,
        inherit: C,
        bindFn: P,
        prefixed: J
      });
      var Xn = typeof t < "u" ? t : typeof self < "u" ? self : {};
      Xn.Hammer = it, r.exports ? r.exports = it : t[n] = it;
    })(window, document, "Hammer");
  }(tr)), tr.exports;
}
var ta = ea();
const rr = /* @__PURE__ */ Tt(ta);
var Ke = function(r, t, e, n, a, s, c, h, l, d, m, v, p, _, T, x) {
  this.elements = window.Float32Array ? new Float32Array(16) : [];
  var S = this.elements;
  S[0] = r !== void 0 ? r : 1, S[4] = t || 0, S[8] = e || 0, S[12] = n || 0, S[1] = a || 0, S[5] = s !== void 0 ? s : 1, S[9] = c || 0, S[13] = h || 0, S[2] = l || 0, S[6] = d || 0, S[10] = m !== void 0 ? m : 1, S[14] = v || 0, S[3] = p || 0, S[7] = _ || 0, S[11] = T || 0, S[15] = x !== void 0 ? x : 1;
};
Ke.DEG_TO_RAD = Math.PI / 180;
Ke.prototype = {
  set: function(r, t, e, n, a, s, c, h, l, d, m, v, p, _, T, x) {
    var S = this.elements;
    return S[0] = r, S[4] = t, S[8] = e, S[12] = n, S[1] = a, S[5] = s, S[9] = c, S[13] = h, S[2] = l, S[6] = d, S[10] = m, S[14] = v, S[3] = p, S[7] = _, S[11] = T, S[15] = x, this;
  },
  identity: function() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  },
  multiplyMatrices: function(r, t) {
    var e = r.elements, n = this.elements, a = e[0], s = e[4], c = e[8], h = e[12], l = e[1], d = e[5], m = e[9], v = e[13], p = e[2], _ = e[6], T = e[10], x = e[14], S = e[3], I = e[7], C = e[11], P = e[15], U = t[0], M = t[1], k = t[2], G = t[3], K = t[4], B = t[5], Z = t[6], H = t[7], $ = t[8], Q = t[9], J = t[10], ne = t[11], re = t[12], A = t[13], E = t[14], O = t[15];
    return n[0] = a * U + s * K + c * $ + h * re, n[4] = a * M + s * B + c * Q + h * A, n[8] = a * k + s * Z + c * J + h * E, n[12] = a * G + s * H + c * ne + h * O, n[1] = l * U + d * K + m * $ + v * re, n[5] = l * M + d * B + m * Q + v * A, n[9] = l * k + d * Z + m * J + v * E, n[13] = l * G + d * H + m * ne + v * O, n[2] = p * U + _ * K + T * $ + x * re, n[6] = p * M + _ * B + T * Q + x * A, n[10] = p * k + _ * Z + T * J + x * E, n[14] = p * G + _ * H + T * ne + x * O, n[3] = S * U + I * K + C * $ + P * re, n[7] = S * M + I * B + C * Q + P * A, n[11] = S * k + I * Z + C * J + P * E, n[15] = S * G + I * H + C * ne + P * O, this;
  },
  // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
  _rounded: function(r, t) {
    return t = Math.pow(10, t || 15), Math.round(r * t) / t;
  },
  appendTransform: function(r, t, e, n, a, s, c, h, l, d, m, v, p, _) {
    var T = c * Ke.DEG_TO_RAD, x = this._rounded(Math.cos(T)), S = this._rounded(Math.sin(T)), I = h * Ke.DEG_TO_RAD, C = this._rounded(Math.cos(I)), P = this._rounded(Math.sin(I)), U = l * Ke.DEG_TO_RAD, M = this._rounded(Math.cos(U * -1)), k = this._rounded(Math.sin(U * -1));
    return this.multiplyMatrices(this, [1, 0, 0, r, 0, x, S, t, 0, -S, x, e, 0, 0, 0, 1]), this.multiplyMatrices(this, [C, 0, P, 0, 0, 1, 0, 0, -P, 0, C, 0, 0, 0, 0, 1]), this.multiplyMatrices(this, [M * n, k * a, 0, 0, -k * n, M * a, 0, 0, 0, 0, 1 * s, 0, 0, 0, 0, 1]), (d || m) && this.multiplyMatrices(this, [
      this._rounded(Math.cos(d * Ke.DEG_TO_RAD)),
      this._rounded(Math.sin(d * Ke.DEG_TO_RAD)),
      0,
      0,
      -1 * this._rounded(Math.sin(m * Ke.DEG_TO_RAD)),
      this._rounded(Math.cos(m * Ke.DEG_TO_RAD)),
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
    ]), (v || p || _) && (this.elements[12] -= v * this.elements[0] + p * this.elements[4] + _ * this.elements[8], this.elements[13] -= v * this.elements[1] + p * this.elements[5] + _ * this.elements[9], this.elements[14] -= v * this.elements[2] + p * this.elements[6] + _ * this.elements[10]), this;
  }
};
function Gr(r, t, e) {
  for (var n = 0, a = t.length; n < a; n++) {
    var s = t[n];
    ra(r, s, e);
  }
}
function ra(r, t, e) {
  Object.defineProperty(r, t, {
    get: function() {
      return this["__" + t];
    },
    set: function(n) {
      n !== this["__" + t] && (this["__" + t] = n, e());
    }
  });
}
var na = function(r, t) {
  Gr(r, ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"], function() {
    var e = r.matrix3D.identity().appendTransform(
      r.translateX,
      r.translateY,
      r.translateZ,
      r.scaleX,
      r.scaleY,
      r.scaleZ,
      r.rotateX,
      r.rotateY,
      r.rotateZ,
      r.skewX,
      r.skewY,
      r.originX,
      r.originY,
      r.originZ
    );
    r.style.transform = r.style.msTransform = r.style.OTransform = r.style.MozTransform = r.style.webkitTransform = "perspective(" + (r.perspective === void 0 ? 500 : r.perspective) + "px) matrix3d(" + Array.prototype.slice.call(e.elements).join(",") + ")";
  }), r.matrix3D = new Ke(), Gr(r, ["perspective"], function() {
    r.style.transform = r.style.msTransform = r.style.OTransform = r.style.MozTransform = r.style.webkitTransform = "perspective(" + r.perspective + "px) matrix3d(" + Array.prototype.slice.call(r.matrix3D.elements).join(",") + ")";
  }), r.perspective = 500, r.scaleX = r.scaleY = r.scaleZ = 1, r.translateX = r.translateY = r.translateZ = r.rotateX = r.rotateY = r.rotateZ = r.skewX = r.skewY = r.originX = r.originY = r.originZ = 0;
};
(function() {
  for (var r = 0, t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
    window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function(n) {
    var a = (/* @__PURE__ */ new Date()).getTime(), s = Math.max(0, 16 - (a - r)), c = window.setTimeout(function() {
      n(a + s);
    }, s);
    return r = a + s, c;
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
    clearTimeout(n);
  });
})();
var je = function(r, t, e, n, a, s, c) {
  var h = r[t], l = e - h, d = /* @__PURE__ */ new Date(), m = this, v = a || function(_) {
    return _;
  };
  this.tickID = null;
  var p = function() {
    var _ = /* @__PURE__ */ new Date() - d;
    if (_ >= n) {
      r[t] = e, c && c(e), s && s(e), cancelAnimationFrame(m.tickID), m.toTick = null;
      return;
    }
    r[t] = l * v(_ / n) + h, m.tickID = requestAnimationFrame(p), c && c(r[t]);
  };
  p(), je.List.push(this);
};
je.List = [];
je.stopAll = function() {
  for (var r = 0, t = je.List.length; r < t; r++)
    cancelAnimationFrame(je.List[r].tickID);
  je.List.length = 0;
};
je.stop = function(r) {
  cancelAnimationFrame(r.tickID);
};
function st(r) {
  return Math.sqrt(1 - Math.pow(r - 1, 2));
}
function gr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function aa(r) {
  if (Array.isArray(r)) return gr(r);
}
function oa(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function gn(r, t) {
  if (r) {
    if (typeof r == "string") return gr(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? gr(r, t) : void 0;
  }
}
function ia() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yt(r) {
  return aa(r) || oa(r) || gn(r) || ia();
}
function He(r) {
  "@babel/helpers - typeof";
  return He = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, He(r);
}
function sa(r, t) {
  if (He(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (He(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function yn(r) {
  var t = sa(r, "string");
  return He(t) == "symbol" ? t : t + "";
}
function ua(r, t, e) {
  return (t = yn(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function zr(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function Te(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zr(Object(e), !0).forEach(function(n) {
      ua(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : zr(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function ca(r) {
  if (Array.isArray(r)) return r;
}
function la(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, a, s, c, h = [], l = !0, d = !1;
    try {
      if (s = (e = e.call(r)).next, t !== 0) for (; !(l = (n = s.call(e)).done) && (h.push(n.value), h.length !== t); l = !0) ;
    } catch (m) {
      d = !0, a = m;
    } finally {
      try {
        if (!l && e.return != null && (c = e.return(), Object(c) !== c)) return;
      } finally {
        if (d) throw a;
      }
    }
    return h;
  }
}
function fa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wr(r, t) {
  return ca(r) || la(r, t) || gn(r, t) || fa();
}
function pa(r, t) {
  if (r == null) return {};
  var e = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (t.indexOf(n) !== -1) continue;
    e[n] = r[n];
  }
  return e;
}
function da(r, t) {
  if (r == null) return {};
  var e, n, a = pa(r, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (n = 0; n < s.length; n++) e = s[n], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(r, e) && (a[e] = r[e]);
  }
  return a;
}
function va(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, yn(n.key), n);
  }
}
function et(r, t, e) {
  return t && va(r.prototype, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function tt(r, t) {
  if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}
var Se = {}, $r;
function ha() {
  if ($r) return Se;
  $r = 1, Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.toCssLowerCase = p, Se.toStyleUpperCase = _, Se.toFixed = T, Se.createMatrix = x, Se.checkStyleName = S, Se.getGsapType = I, Se.parseColor = P, Se.parseShadow = U, Se.getColor = M, Se.isTransform = k, Se.isConvert = G, Se.splitFilterToObject = K, Se.getMatrix = B, Se.getTransform = H, Se.stylesToCss = $, Se.getUnit = Q, Se.getValues = J, Se.findStyleByName = ne, Se.mergeStyle = re;
  var r = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridColumn: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, t = ["Webkit", "ms", "Moz", "O"];
  function e(A, E) {
    return A + E.charAt(0).toUpperCase() + E.substring(1);
  }
  Object.keys(r).forEach(function(A) {
    t.forEach(function(E) {
      r[e(E, A)] = r[A];
    });
  });
  var n = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/, a = function() {
    return typeof document > "u" ? !1 : !!(navigator && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0));
  }(), s = 1e5, c = {
    aqua: [0, 255, 255, 1],
    lime: [0, 255, 0, 1],
    silver: [192, 192, 192, 1],
    black: [0, 0, 0, 1],
    maroon: [128, 0, 0, 1],
    teal: [0, 128, 128, 1],
    blue: [0, 0, 255, 1],
    navy: [0, 0, 128, 1],
    white: [255, 255, 255, 1],
    fuchsia: [255, 0, 255, 1],
    olive: [128, 128, 0, 1],
    yellow: [255, 255, 0, 1],
    orange: [255, 165, 0, 1],
    gray: [128, 128, 128, 1],
    purple: [128, 0, 128, 1],
    green: [0, 128, 0, 1],
    red: [255, 0, 0, 1],
    pink: [255, 192, 203, 1],
    cyan: [0, 255, 255, 1],
    transparent: [255, 255, 255, 0]
  }, h = 180 / Math.PI, l = {
    _lists: {
      transformsBase: ["translate", "translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ", "rotate"],
      transforms3D: ["translate3d", "translateZ", "scaleZ", "rotateX", "rotateY", "perspective"]
    },
    transformGroup: { translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1, skew: 1 },
    filter: ["grayScale", "sepia", "hueRotate", "invert", "brightness", "contrast", "blur"],
    filterConvert: { grayScale: "grayscale", hueRotate: "hue-rotate" }
  };
  l._lists.transformsBase = a ? l._lists.transformsBase : l._lists.transformsBase.concat(l._lists.transforms3D);
  var d = Se.hexExp = /#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})/;
  Se.rgbAndHslExp = /((rgb|hsl)[a]?)+\((?:\d|\.\d)+(?:(deg|\%|)),[\s+]?(?:\d|\.\d)+(?:(deg|\%|)),[\s+]?(?:\d|\.\d)+(?:(deg|%|))(,[\s+]?(?:\d|\.\d)+(?:(deg|\%|)))?\)/, Se.colorRegExp = /#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})|((rgb|hsl)[a]?)+\((?:\d|\.\d)+(?:(deg|\%)?),[\s+]?(?:\d|\.\d)+(?:(deg|\%)?),[\s+]?(?:\d|\.\d)+(?:(deg|%)?)(,[\s+]?(?:\d|\.\d)+(?:(deg|\%)?))?\)/;
  var m = Se.colorNumExp = /(?:\d|\.\d)+(%?)/g, v = Se.cssList = l;
  function p(A) {
    return A.replace(/[A-Z]/, function(E) {
      return "-" + E.toLocaleLowerCase();
    });
  }
  function _(A) {
    return A.replace(/-(.?)/g, function(E) {
      return E.replace("-", "").toLocaleUpperCase();
    });
  }
  function T(A, E) {
    var O = E ? Math.pow(10, E) : s, o = A | 0, y = A - o, R = A;
    if (y) {
      var N = (y * O + (A < 0 ? -0.5 : 0.5) | 0) / O, F = N | 0, j = N.toString(), q = j.split(".")[1] || "";
      R = (A < 0 && !(o + F) ? "-" : "") + (o + F) + "." + q;
    }
    return parseFloat(R);
  }
  function x(A) {
    if (typeof document > "u")
      return null;
    var E = ["WebKitCSS", "MozCSS", "DOM", "MsCSS", "MSCSS", "OCSS", "CSS"].filter(function(O) {
      return O + "Matrix" in window;
    });
    return E.length ? new window[E[0] + "Matrix"](A) : (console.warn("Browsers do not support matrix."), "");
  }
  function S(A) {
    if (typeof document > "u")
      return null;
    var E = ["O", "Moz", "ms", "Ms", "Webkit"];
    if (A !== "filter" && A in document.body.style)
      return A;
    var O = A.charAt(0).toUpperCase() + A.substr(1), o = E.filter(function(y) {
      return "" + y + O in document.body.style;
    });
    return o[0] ? "" + o[0] + O : null;
  }
  function I(A) {
    var E = A;
    return E = E === "x" ? "translateX" : E, E = E === "y" ? "translateY" : E, E = E === "z" ? "translateZ" : E, E;
  }
  var C = function(E, O, o) {
    return o < 0 && (o += 6), o >= 6 && (o -= 6), o < 1 ? (O - E) * o + E : o < 3 ? O : o < 4 ? (O - E) * (4 - o) + E : E;
  };
  function P(A) {
    var E = c.transparent, O = A, o = void 0, y = void 0, R = void 0;
    if (!O)
      E = c.transparent;
    else if (c[O])
      E = c[O];
    else if (typeof O == "number")
      E = [O >> 16, O >> 8 & 255, O & 255];
    else if (O.charAt(O.length - 1) === "," && (O = O.substr(0, O.length - 1)), O.match(d))
      O = O.substr(1), O.length === 3 && (o = O.charAt(0), y = O.charAt(1), R = O.charAt(2), O = "" + o + o + y + y + R + R + "ff"), O.length === 6 && (O += "ff"), O = parseInt(O, 16), E = [O >> 24 & 255, O >> 16 & 255, O >> 8 & 255, parseFloat(((O & 255) / 255).toFixed(2))];
    else if (O.match(/^hsl/)) {
      E = O.match(m);
      var N = E[3];
      N = typeof N == "string" && N.match("%") ? parseFloat(N) / 100 : parseFloat("" + (N || "1"));
      var F = parseFloat(E[0]) / 60, j = parseFloat(E[1]) / 100, q = parseFloat(E[2]) / 100, ce = q <= 0.5 ? q * (j + 1) : q + j - q * j, z = q * 2 - ce;
      o = Math.round(C(z, ce, F + 2) * 255), y = Math.round(C(z, ce, F) * 255), R = Math.round(C(z, ce, F - 2) * 255), E = [o, y, R, N];
    } else
      E = O.match(m) || c.transparent, E = E.map(function(oe) {
        return parseFloat(oe);
      }), E.length === 3 && E.push(1);
    return E;
  }
  function U(A, E) {
    var O = E && _(E);
    if (!A)
      return O === "boxShadow" ? [0, 0, 0, 0, 0, 0, 0, 0] : [0, 0, 0, 0, 0, 0, 0];
    var o = A.replace(/,\s+/gi, ",").split(/\s+/).filter(function(j) {
      return j;
    }), y = o.indexOf("inset");
    y >= 0 && o.splice(y, 1);
    var R = o.find(function(j) {
      return c[j] || j.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})|(rgb|hsl)+(?:a)?\((.*)\)/i);
    }) || "black", N = o.indexOf(R);
    o.splice(N, 1);
    var F = P(R);
    return F[3] = typeof F[3] == "number" ? F[3] : 1, O === "boxShadow" && o.length < 4 && o.push(0), o.concat(F, y >= 0 ? ["inset"] : []);
  }
  function M(A) {
    var E = A.length === 4 ? "rgba" : "rgb", O = A.map(function(o, y) {
      return y < 3 ? Math.round(o) : o;
    });
    return E + "(" + O.join(",") + ")";
  }
  function k(A) {
    return v._lists.transformsBase.indexOf(A) >= 0 ? "transform" : A;
  }
  function G(A) {
    var E = k(A);
    return v.filter.indexOf(E) >= 0 ? "filter" : E;
  }
  function K(A) {
    if (A === "none" || !A || A === "")
      return null;
    var E = A.replace(/\s+/g, "").split(")").filter(function(o) {
      return o;
    }), O = {};
    return E.forEach(function(o) {
      var y = o.split("(");
      O[y[0]] = y[1];
    }), O;
  }
  function B(A) {
    var E = A.match(/(?:\-|\b)[\d\-\.e]+\b/gi), O = {};
    return E.length === 6 ? (O.m11 = parseFloat(E[0]), O.m12 = parseFloat(E[1]), O.m13 = 0, O.m14 = 0, O.m21 = parseFloat(E[2]), O.m22 = parseFloat(E[3]), O.m23 = 0, O.m24 = 0, O.m31 = 0, O.m32 = 0, O.m33 = 1, O.m34 = 0, O.m41 = parseFloat(E[4]), O.m42 = parseFloat(E[5]), O.m43 = 0, O.m44 = 0) : E.forEach(function(o, y) {
      var R = y % 4 + 1, N = Math.floor(y / 4) + 1;
      O["m" + N + R] = parseFloat(o);
    }), O;
  }
  function Z(A) {
    var E = {};
    return E.translateX = 0, E.translateY = 0, E.translateZ = 0, E.rotate = 0, E.rotateX = 0, E.rotateY = 0, E.scaleX = 1, E.scaleY = 1, E.scaleZ = 1, E.skewX = 0, E.skewY = 0, E.perspective = 0, (A.trim().match(/(\w+)\([^\)]+\)/ig) || []).forEach(function(O) {
      var o = O.split("("), y = o[0].trim(), R = o[1].replace(")", "").trim();
      R.match(/%|em|rem/ig) && console.warn("value(" + R + ") must be absolute, not relative, has been converted to absolute."), R = R.replace(/px|deg|\)/ig, ""), v.transformGroup[y] && y !== "rotate" ? (R = R.split(",").map(function(N) {
        return parseFloat(N);
      }), y === "scale3d" || y === "translate3d" ? ["X", "Y", "Z"].forEach(function(N, F) {
        var j = y.substring(0, y.length - 2);
        E["" + j + N] = R[F] || E["" + j + N];
      }) : y === "rotate3d" ? (E.rotateX = R[0] && R[3] || E.rotateX, E.rotateY = R[1] && R[3] || E.rotateY, E.rotate = R[2] && R[3] || E.rotate) : ["X", "Y"].forEach(function(N, F) {
        E["" + y + N] = R[F] || E["" + y + N];
      })) : y === "rotateZ" ? E.rotate = parseFloat(R) || E.rotate : E[y] = parseFloat(R) || E[y];
    }), E;
  }
  function H(A) {
    var E = !A || A === "none" || A === "" ? "matrix(1, 0, 0, 1, 0, 0)" : A;
    if (!E.match("matrix"))
      return Z(A);
    var O = B(E), o = O.m11, y = O.m12, R = O.m13, N = O.m14, F = O.m21, j = O.m22, q = O.m23, ce = O.m24, z = O.m31, oe = O.m32, he = O.m33, be = O.m34, Ue = O.m43, Ce = void 0, Me = void 0, Ae = void 0, se = {}, Ee = Math.atan2(q, he), ze = Math.tan(F), $e = Math.tan(y), V = void 0, le = void 0;
    return se.rotateX = T(Ee * h) || 0, Ee && (V = Math.cos(-Ee), le = Math.sin(-Ee), Ce = F * V + z * le, Me = j * V + oe * le, Ae = q * V + he * le, z = F * -le + z * V, oe = j * -le + oe * V, he = q * -le + he * V, be = ce * -le + be * V, F = Ce, j = Me, q = Ae), Ee = Math.atan2(-R, he), se.rotateY = T(Ee * h) || 0, Ee && (V = Math.cos(-Ee), le = Math.sin(-Ee), Ce = o * V - z * le, Me = y * V - oe * le, Ae = R * V - he * le, oe = y * le + oe * V, he = R * le + he * V, be = N * le + be * V, o = Ce, y = Me, R = Ae), Ee = Math.atan2(y, o), se.rotate = T(Ee * h) || 0, Ee && (V = Math.cos(Ee), le = Math.sin(Ee), Ce = o * V + y * le, Me = F * V + j * le, Ae = z * V + oe * le, y = y * V - o * le, j = j * V - F * le, oe = oe * V - z * le, o = Ce, F = Me, z = Ae), se.rotateX && Math.abs(se.rotateX) + Math.abs(se.rotate) > 359.9 && (se.rotateX = se.rotate = 0, se.rotateY = 180 - se.rotateY || 0), se.scaleX = T(Math.sqrt(o * o + y * y + R * R)), se.scaleY = T(Math.sqrt(j * j + q * q)), se.scaleZ = T(Math.sqrt(z * z + oe * oe + he * he)), se.skewX = ze === -$e ? 0 : ze, se.skewY = $e === -ze ? 0 : $e, se.perspective = be ? 1 / (be < 0 ? -be : be) : 0, se.translateX = O.m41, se.translateY = O.m42, se.translateZ = Ue, se;
  }
  function $(A, E) {
    var O = void 0;
    return !r[A] && typeof E == "number" ? O = " " + E + "px" : A === "content" && !n.test(E) && (O = "'" + E.replace(/'/g, "\\'") + "'"), O || E;
  }
  function Q(A, E) {
    var O = E && E.toString().replace(/[^a-z|%]/ig, ""), o = "";
    return A.indexOf("translate") >= 0 || A.indexOf("perspective") >= 0 || A.indexOf("blur") >= 0 ? o = "px" : (A.indexOf("skew") >= 0 || A.indexOf("rotate") >= 0) && (o = "deg"), O || o;
  }
  function J(A, E, O) {
    return A + "(" + E + (O || "") + ")";
  }
  function ne(A, E) {
    var O = null;
    return A && A.forEach(function(o) {
      if (!O) {
        var y = o.split("(")[0], R = y in v.transformGroup && E.substring(0, E.length - 1).indexOf(y) >= 0, N = E in v.transformGroup && y.substring(0, y.length - 1).indexOf(E) >= 0, F = y in v.transformGroup && E in v.transformGroup && (y.substring(0, y.length - 2) === E || E.substring(0, E.length - 2) === y);
        (y === E || R || N || F) && (O = o);
      }
    }), O;
  }
  function re(A, E) {
    if (!A || A === "")
      return E;
    if (!E || E === "")
      return A;
    var O = A.replace(/\s/g, "").split(")").filter(function(y) {
      return y !== "" && y;
    }).map(function(y) {
      return y + ")";
    }), o = E.replace(/\s/g, "").split(")").filter(function(y) {
      return y !== "" && y;
    });
    return o.forEach(function(y) {
      var R = y.split("("), N = R[0], F = ne(O, N);
      if (!F)
        O.push(y + ")");
      else {
        var j = O.indexOf(F);
        O[j] = y + ")";
      }
    }), O.forEach(function(y, R) {
      y.indexOf("perspective") >= 0 && R && (O.splice(R, 1), O.unshift(y));
    }), O.join(" ").trim();
  }
  return Se;
}
var Re = ha();
function gt() {
}
var yr = Re.colorRegExp, ma = /.*shadow$/gi, Tn = !(typeof window < "u" && window.document && window.document.createElement), Vr = Date.now;
function ga(r) {
  if (typeof r == "string") {
    if (r.charAt(0).match(/m/i)) {
      var t = document.createElementNS("http://www.w3.org/2000/svg", "path");
      return t.setAttributeNS(null, "d", r), t;
    }
    return document.querySelector(r);
  } else if (r.style)
    return r;
  throw new Error("Error while parsing the path");
}
var Tr = {
  type: "to",
  duration: 450,
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  appearTo: 0,
  yoyo: !1,
  ease: "easeInOutQuad",
  onStart: gt,
  onUpdate: gt,
  onComplete: gt,
  onRepeat: gt,
  startAt: {}
}, Br = {
  animation: {},
  paused: !1,
  reverse: !1,
  delay: 0,
  repeat: 0,
  repeatDelay: 0,
  yoyo: !1,
  moment: null,
  resetStyle: !1,
  regionStartTime: 0,
  regionEndTime: void 0,
  onChange: gt,
  onChangeTimeline: gt
}, ya = function(t) {
  var e = {};
  return Object.keys(Br).forEach(function(n) {
    e[n] = typeof t[n] > "u" ? Br[n] : t[n];
  }), e.delay && (e.delay = Math.round(e.delay)), t.repeatDelay && (e.repeatDelay = Math.round(e.repeatDelay)), e;
}, Ct = function(t) {
  if (Array.isArray(t) || !t)
    return t;
  if (t.length) {
    var e = Array.prototype.slice.call(t);
    return e.length ? [t] : e;
  }
  return [t];
}, Qe = function(t) {
  return t.length === 1 ? t[0] : t;
}, Ta = function(t, e) {
  var n = e.appearTo, a = n === void 0 ? 0 : n, s = e.delay, c = s === void 0 ? 0 : s, h = e.duration, l = h === void 0 ? 450 : h, d = e.repeat, m = e.repeatDelay;
  if (typeof a == "string")
    return 0;
  var v, p = 0;
  return typeof t.appearTo == "number" ? t.appearTo : (typeof t.appearTo == "string" && t.appearTo.charAt(1) === "=" && (p = parseFloat(t.appearTo.replace("=", ""))), v = a + c + l + p, d === -1 ? v = Number.MAX_VALUE : d && (v = a + c + l * (d + 1) + (m || 0) * d + p), v);
}, En = function(t) {
  switch (t) {
    case "opacity":
    case "scaleX":
    case "scaleY":
    case "scale":
      return 1;
    default:
      return 0;
  }
}, _n = function(t, e) {
  var n = typeof t == "string" ? parseFloat(t) : t;
  return Je(n, e.vars, 1, e.count, e.unit);
}, Je = function(t, e, n) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = arguments.length > 4 ? arguments[4] : void 0;
  return a === "+=" || a === "-=" ? t + e * n + (s || 0) : (e - t) * n + t + (s || 0);
}, Ea = function(t) {
  if (!t)
    return {};
  var e = typeof window < "u" && document.defaultView ? document.defaultView.getComputedStyle(t) : {};
  return e;
}, _a = {
  margin: 1,
  padding: 1,
  borderWidth: 1,
  borderRadius: 1
};
function Ft(r) {
  var t = r.target, e = r.computedStyle, n = r.style, a = r.value, s = r.startUnit, c = r.endUnit, h = r.fixed, l = r.isOriginWidth, d = r.useCurrentTarget;
  if (Tn)
    return a;
  var m = /(?:Left|Right|Width|X)/i.test(n) || l;
  m = n === "padding" || n === "marign" ? !0 : m;
  var v = n.indexOf("border") !== -1 || n.indexOf("translate") !== -1 || n === "transformOrigin" || d ? t : t.parentNode || document.body;
  v = h ? document.body : v;
  var p, _, T;
  switch (s) {
    case "%":
      p = parseFloat(a) / 100 * (m ? v.clientWidth : v.clientHeight);
      break;
    case "vw":
      p = parseFloat(a) * document.body.clientWidth / 100;
      break;
    case "vh":
      p = parseFloat(a) * document.body.clientHeight / 100;
      break;
    case "em":
      e ? p = parseFloat(a) * parseFloat(e.fontSize) : (T = "em", p = parseFloat(a));
      break;
    case "rem": {
      e ? (_ = window.getComputedStyle(document.getElementsByTagName("html")[0]), p = parseFloat(a) * parseFloat(_.fontSize)) : (T = "rem", p = parseFloat(a));
      break;
    }
    default:
      p = parseFloat(a);
      break;
  }
  switch (c) {
    case "%":
      p = p ? p * 100 / (m ? v.clientWidth : v.clientHeight) : 0;
      break;
    case "vw":
      p = parseFloat(a) / document.body.clientWidth * 100;
      break;
    case "vh":
      p = parseFloat(a) / document.body.clientHeight * 100;
      break;
    case "em":
      e ? p = parseFloat(a) / parseFloat(e.fontSize) : (T = "em", p = parseFloat(a));
      break;
    case "rem": {
      e ? (_ = _ || window.getComputedStyle(document.getElementsByTagName("html")[0]), p = parseFloat(a) / parseFloat(_.fontSize)) : (T = "rem", p = parseFloat(a));
      break;
    }
  }
  return T && console.warn("Warning: Element is not 'DOM, can not use '".concat(T, "', automatically convert to animation units.")), p;
}
function wa(r) {
  if (typeof r == "string")
    return r;
  var t = r.perspective, e = r.rotate, n = r.rotateX, a = r.rotateY, s = r.scaleX, c = r.scaleY, h = r.scaleZ, l = r.skewX, d = r.skewY, m = typeof r.translateX == "string" ? r.translateX : "".concat(r.translateX, "px"), v = typeof r.translateY == "string" ? r.translateY : "".concat(r.translateY, "px"), p = typeof r.translateZ == "string" ? r.translateZ : "".concat(r.translateZ, "px"), _ = l || d ? "skew(".concat(l, "deg,").concat(d, "deg)") : "", T = e ? "rotate(".concat(e, "deg)") : "", x = s !== 1 || c !== 1 || h !== 1 ? "scale3d(".concat(s, ",").concat(c, ",").concat(h, ")") : "", S = n ? "rotateX(".concat(n, "deg)") : "", I = a ? "rotateY(".concat(a, "deg)") : "", C = t ? "perspective(".concat(t, "px)") : "", P = x || T || S || I || _ ? "" : "translate(0px, 0px)", U = r.translateZ ? "translate3d(".concat(m, ",").concat(v, ",").concat(p, ")") : (r.translateX || r.translateY) && "translate(".concat(m, ",").concat(v, ")") || P;
  return "".concat(C, " ").concat(U, " ").concat(x, " ").concat(T, " ").concat(S, " ").concat(I, " ").concat(_).trim();
}
var Oa = {
  brightness: 1,
  saturate: 1,
  contrast: 1,
  grayScale: 0,
  hueRotate: "0deg",
  sepia: 0,
  invert: 0
}, Sa = /* @__PURE__ */ et(function r() {
  var t = this;
  tt(this, r), this.push = function(e) {
    Ct(e).forEach(function(n) {
      t[n.className] = n;
    });
  }, this.register = this.push;
});
const Ge = new Sa();
var Or = /* @__PURE__ */ et(
  //CSSStyleDeclaration;
  function r(t) {
    var e = this;
    tt(this, r), this.props = void 0, this.computedStyle = void 0, this.root = void 0, this.index = void 0, this.targetIndex = void 0, this.tweenVars = {}, this.transformName = void 0, this.filterName = void 0, this.target = void 0, this.start = {}, this.startAt = {}, this.propsData = {
      data: {},
      type: {},
      unit: {},
      count: {},
      splitStr: {},
      isTransform: {}
    }, this.setDefaultData = function() {
      var n = e.props;
      for (var a in n) {
        var s = n[a], c = s.split && s.split(/\s+|,/).length > 1 || a.match(/color|fill|stroke/i) || a.match(/shadow/i), h = (a === "background" || a === "backgroundImage") && s.match(/[a-z|-]+\(([\s\S]*?)\)/gi);
        if (h) {
          e.propsData.data[a] = {
            value: s,
            plugin: Ge.GradientsPlugin
          };
          continue;
        }
        if (c) {
          e.propsData.data[a] = {
            value: s,
            plugin: Ge.ArrayPlugin
          };
          continue;
        }
        var l = Re.getGsapType(a), d = e.getTweenData(l, n[a]);
        e.propsData.data[l] = d.data[l], e.propsData.type[l] = d.type[l], e.propsData.unit[l] = d.unit[l], e.propsData.count[l] = d.count[l], e.propsData.isTransform[l] = Re.isConvert(l) === "transform", d.splitStr[l] && (e.propsData.splitStr[l] = d.splitStr[l]);
      }
    }, this.getTweenData = function(n, a) {
      var s = {
        data: {},
        isTransform: {},
        type: {},
        unit: {},
        count: {},
        splitStr: {}
      }, c = a;
      s.data[n] = c;
      var h = typeof s.data[n] == "string";
      s.unit[n] = h ? s.data[n].replace(/[^a-z|%]/g, "") : "", s.count[n] = h ? s.data[n].replace(/[^+|=|-]/g, "") : "";
      var l = h ? parseFloat(s.data[n].replace(/[a-z|%|=]/g, "")) : s.data[n];
      return s.data[n] = !l && l !== 0 ? s.data[n] : l, s;
    }, this.setStartAtValue = function(n, a) {
      return He(a) === "object" ? _n(n, a) : n;
    }, this.getAnimStart = function() {
      var n = e.target, a = e.root, s = e.targetIndex, c = e.propsData, h = e.startAt, l = e.start, d = e.tweenVars, m = {};
      for (var v in h)
        m[Re.getGsapType(v)] = h[v];
      e.computedStyle = e.computedStyle || Ea(n), d.style = d.style || {};
      var p, _;
      for (var T in c.data) {
        var x, S = c.data[T];
        if (S.plugin) {
          var I = new S.plugin(S.value, T);
          I.target = n, I.root = a, I.parent = parent, I.index = e.index, I.targetIndex = s, I.tweenVars = d, I.startAt = e.startAt, I.computedStyle = e.computedStyle, S.plugin = I, l[T] = I.getAnimStart();
          continue;
        }
        var C = Re.isConvert(T), P = C === "transform" ? e.transformName : C;
        P = C === "filter" ? e.filterName : P;
        var U = d.style[P], M = U ?? e.computedStyle[C], k = (x = m[T]) !== null && x !== void 0 ? x : M, G = c.unit[T], K = "";
        if (C === "transform") {
          p = p || (k === U ? Te({}, U) : Re.getTransform(e.computedStyle[e.transformName]));
          var B = p[T];
          if (m && T in m) {
            var Z, H;
            B = e.setStartAtValue((Z = (H = m[T].vars) !== null && H !== void 0 ? H : U?.[T]) !== null && Z !== void 0 ? Z : B, m[T]), K = m[T].unit, T === "scale" ? (p.scaleX = B, p.scaleY = B) : p[T] = B;
          }
          K !== G && (B = Ft({
            target: n,
            computedStyle: e.computedStyle,
            style: C,
            value: B,
            startUnit: K,
            endUnit: G
          }), T === "scale" ? (p.scaleX = B, p.scaleY = B) : p[T] = B), l[e.transformName] = p;
        } else if (C === "filter") {
          var $ = Re.cssList.filterConvert[T] || T;
          _ = _ || (k === U ? Te({}, U) : Re.splitFilterToObject(M) || {}), _[$] = _[$] || Oa[$];
          var Q = _[$];
          if (m && T in m) {
            var J;
            Q = e.setStartAtValue((J = m[T].vars) !== null && J !== void 0 ? J : Q, m[T]), K = m[T].unit, _[$] = Q;
          }
          if (G !== K) {
            var ne;
            _[$] = Ft({
              target: n,
              computedStyle: e.computedStyle,
              style: C,
              value: Q,
              startUnit: K,
              endUnit: G,
              fixed: ((ne = e.computedStyle) === null || ne === void 0 ? void 0 : ne.position) === "fixed"
            });
          }
          l[e.filterName] = _;
        } else {
          var re;
          if (k = (re = m[T]) !== null && re !== void 0 ? re : M, (!k || k === "none" || k === "auto") && (k = ""), G = c.unit[C], K = He(k) === "object" ? k.unit : "".concat(k).replace(/[^a-z|%]/g, ""), k = e.setStartAtValue(M, m[T]), G !== K) {
            var A;
            k = Ft({
              target: n,
              computedStyle: e.computedStyle,
              style: C,
              value: parseFloat(k),
              startUnit: K,
              endUnit: G,
              fixed: ((A = e.computedStyle) === null || A === void 0 ? void 0 : A.position) === "fixed"
            });
          }
          var E = parseFloat(k);
          l[C] = isNaN(E) ? En(C) : E;
        }
      }
      return l;
    }, this.render = function(n) {
      var a = e.propsData, s = e.start, c = e.tweenVars, h = c.style || {};
      s[e.transformName] && !h[e.transformName] && (h[e.transformName] = Te({}, s[e.transformName])), s[e.filterName] && !h[e.filterName] && (h[e.filterName] = Te({}, s[e.filterName]));
      var l = h[e.transformName], d = h[e.filterName], m = a.data, v = a.unit, p = a.count, _ = a.isTransform;
      for (var T in m) {
        var x = m[T];
        if (x.plugin) {
          h[T] = x.plugin.render(n);
          continue;
        }
        var S = _[T], I = S ? s[e.transformName][T] : s[T], C = v[T], P = p[T];
        if (S) {
          if (T === "scale") {
            var U = s[e.transformName].scaleX, M = s[e.transformName].scaleY;
            P.charAt(1) === "=" ? (l.scaleX = U + x * n, l.scaleY = M + x * n) : (l.scaleX = (x - U) * n + U, l.scaleY = (x - M) * n + M);
          } else
            l[T] = Je(parseFloat(I), x, n, P, C);
          l.text = wa(h[e.transformName]);
        } else if (Re.cssList.filter.indexOf(T) >= 0) {
          var k = Re.cssList.filterConvert[T] || T;
          I = parseFloat(s[e.filterName][k]) || 0, d[k] = Je(I, x, n, P, C), d.text = "";
          for (var G in d)
            G !== "text" && (d.text = "".concat(d.text, " ").concat(G, "(").concat(d[G], ")").trim());
        } else {
          var K = Re.stylesToCss(T, 0);
          K = typeof K == "number" ? 0 : K.replace(/[^a-z|%]/g, ""), C = C || K, typeof x == "string" ? h[T] = x : h[T] = Je(I, x, n, P, C);
        }
      }
      return h;
    }, this.props = t, this.transformName = Re.checkStyleName("transform"), this.filterName = Re.checkStyleName("filter") || "filter", this.setDefaultData();
  }
);
Or.key = "style";
Or.className = "style";
function xt(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Er(r, t) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, Er(r, t);
}
function wn(r, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), t && Er(r, t);
}
function Ut(r) {
  return Ut = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ut(r);
}
function On() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (On = function() {
    return !!r;
  })();
}
function ba(r, t) {
  if (t && (He(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return xt(r);
}
function Sn(r) {
  var t = On();
  return function() {
    var e, n = Ut(r);
    if (t) {
      var a = Ut(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return ba(this, e);
  };
}
var Gt = /* @__PURE__ */ et(
  // 转换成实际属性，__self 为平辅到子节点
  function r(t, e) {
    tt(this, r), this.value = void 0, this.key = void 0, this.root = void 0, this.index = void 0, this.style = {}, this.start = {}, this.startAt = {}, this.target = void 0, this.value = t, this.key = e;
  }
);
Gt.className = void 0;
Gt.key = void 0;
var bn = /* @__PURE__ */ function(r) {
  wn(e, r);
  var t = Sn(e);
  function e(n, a) {
    var s;
    tt(this, e), s = t.call(this, n, a), s.value = void 0, s.key = void 0, s.start = [], s.tweenVars = {}, s.vars = {}, s.computedStyle = void 0, s.propsData = {
      data: [],
      unit: [],
      count: []
    }, s.setDefaultData = function(l, d) {
      var m = xt(s), v = m.propsData, p = m.value, _ = yt(p);
      if (l === "color") {
        var T;
        _[3] = (T = _[3]) !== null && T !== void 0 ? T : 1;
      }
      v.type = l, v.data = _.map(function(x) {
        return !parseFloat(x) && parseFloat(x) !== 0 ? x : parseFloat(x);
      }), v.unit = _.map(function(x) {
        return x.toString().replace(/[^a-z|%]/g, "");
      }), v.count = _.map(function(x) {
        return x.toString().replace(/[^+|=|-]/g, "");
      }), d && (v.splitStr = d);
    }, s.convertToMarksArray = function(l, d, m, v) {
      var p = (m || "").toString().replace(/[^a-z|%]/g, ""), _ = typeof v == "number" ? l[v] : void 0;
      return p === _ ? parseFloat(m) : !parseFloat(m) && parseFloat(m) !== 0 ? m : Ft({
        target: s.target,
        computedStyle: s.computedStyle,
        style: d,
        value: m,
        startUnit: p,
        endUnit: _,
        isOriginWidth: d === "transformOrigin" && !v
      });
    }, s.getAnimStart = function() {
      var l, d, m, v, p = xt(s), _ = p.startAt, T = p.target, x = p.key, S = p.propsData, I = p.computedStyle, C = p.tweenVars, P = (l = (d = (m = _?.[x]) !== null && m !== void 0 ? m : I ? (v = C.style) === null || v === void 0 ? void 0 : v[x] : C[x]) !== null && d !== void 0 ? d : (I || T)[x]) !== null && l !== void 0 ? l : "", U = S.data.indexOf("inset"), M;
      if (U !== -1 && !P.match("inset") && S.type === "shadow" && (M = P, P = ""), (!P || P === "none" || P === "auto") && (P = ""), P = S.type === "shadow" ? Re.parseShadow(P, x) : P, P = S.type === "color" ? Re.parseColor(P) : P, P = S.type === "string" ? P.split(/[\s|,]/) : P, _a[x]) {
        var k, G, K, B;
        P[1] = (k = P[1]) !== null && k !== void 0 ? k : P[0], P[2] = (G = P[2]) !== null && G !== void 0 ? G : P[0], P[3] = (K = (B = P[3]) !== null && B !== void 0 ? B : P[1]) !== null && K !== void 0 ? K : P[0];
      }
      var Z = S.unit, H = P.map(function($, Q) {
        return parseFloat($).toString() === "NaN" ? $ : s.convertToMarksArray(Z, x, $, Q);
      });
      return s.start = H.concat(U >= 0 ? "inset" : []), s.start.oldShadow = M, s.start;
    }, s.render = function(l) {
      var d = xt(s), m = d.start, v = d.propsData, p = v.type, _ = v.splitStr, T = v.data, x = v.count, S = v.unit, I = T.map(function(k, G) {
        return typeof k == "string" ? k : Je(m[G], k, l, x[G], S[G]);
      });
      switch (p) {
        case "string":
          I = I.join(_);
          break;
        case "color":
          I = Re.getColor(I);
          break;
        case "shadow": {
          var C = I.indexOf("inset") >= 0, P = C ? I.filter(function(k) {
            return k !== "inset";
          }) : I, U = P.slice(0, P.length - 4).map(function(k) {
            return typeof k == "number" ? "".concat(k, "px") : k;
          }), M = Re.getColor(P.slice(P.length - 4, P.length));
          I = "".concat(m.oldShadow ? "".concat(m.oldShadow, ",") : "").concat(U.join(" "), " ").concat(M, " ").concat(C ? "inset" : "").trim();
          break;
        }
      }
      return I;
    }, s.value = n, s.key = a;
    var c = "", h = "";
    return typeof n == "string" && (a.match(ma) ? (s.value = Re.parseShadow(n, a), c = "shadow") : a.match(/color|fill|stroke/i) || n.match(yr) ? (s.value = Re.parseColor(n), c = "color") : (h = n.replace(/[^\s|,]/g, "").replace(/\s+/g, " "), s.value = n.split(/[\s|,]/), c = "string")), s.setDefaultData(c, h), s;
  }
  return et(e);
}(Gt);
bn.className = "ArrayPlugin";
var mt = {
  linear: {
    "to top": "0deg",
    "to top right": "45deg",
    "to right top": "45deg",
    "to right": "90deg",
    "to right bottom": "135deg",
    "to bottom right": "135deg",
    "to bottom": "180deg",
    "to bottom left": "225deg",
    "to left bottom": "225deg",
    "to left": "270deg",
    "to left top": "315deg",
    "to top left": "315deg"
  },
  radial: {
    center: "50% 50%",
    top: "50% 0%",
    "top right": "100% 0%",
    "right top": "100% 0%",
    right: "100% 50%",
    "right bottom": "100% 100%",
    "bottom right": "100% 100%",
    bottom: "50% 100%",
    "bottom left": "0% 100%",
    "left bottom": "0% 100%",
    left: "0% 50%",
    "left top": "0% 0%",
    "top left": "0% 0%"
  }
}, Zr = ["closest-side", "closest-corner", "farthest-side", "farthest-corner"], nr = function(t, e, n) {
  console.warn("Warning: The gradient ".concat(t, "(").concat(e, " => ").concat(n, ") is different, which has been automatically converted to animation gradient ").concat(t, "(").concat(n, ")."));
}, ar = function(t) {
  return t === "url" || t.indexOf("image") >= 0 || t === "paint" || t === "cross-fade" || t === "element";
}, Rn = /* @__PURE__ */ function(r) {
  wn(e, r);
  var t = Sn(e);
  function e(n) {
    var a;
    return tt(this, e), a = t.call(this, n, "backgroundImage"), a.value = void 0, a.tweenVars = {}, a.vars = [], a.computedStyle = void 0, a.defaultStartVars = [], a.getPosition = function(s) {
      return s.map(function(c) {
        return {
          data: parseFloat(c),
          unit: c.replace(/[^a-z|%]/g, "")
        };
      });
    }, a.getAngle = function(s, c) {
      var h = s.replace(/-|gradient|repeating]/g, ""), l, d, m, v;
      switch (h) {
        case "linear": {
          m = a.getPosition((mt.linear[c] || c || mt.linear["to bottom"]).split(" "));
          break;
        }
        case "radial": {
          var p = c.split(" ");
          l = p.find(function(I) {
            return Zr.indexOf(I) >= 0;
          }) || Zr[3], d = p.find(function(I) {
            return I === "circle" || I === "ellipse";
          }) || "ellipse";
          var _ = new RegExp("".concat(l, "|").concat(d, "|at"), "g"), T = c.replace(_, "").trim();
          v = a.getPosition((mt.radial[T] || T || mt.radial.center).split(" "));
          break;
        }
        case "conic": {
          var x = c.split("at").map(function(I) {
            return I.trim();
          }), S = (x[0] || "").split(" ");
          d = S[0] || "from", m = a.getPosition([S[1] || "0deg"]), v = a.getPosition((mt.radial[x[1]] || x[1] || mt.radial.center).split(" "));
          break;
        }
      }
      return {
        extent: l,
        shape: d,
        angle: m,
        position: v
      };
    }, a.valueToIValue = function(s) {
      if (!s)
        return [];
      var c = s.replace(/\),\s+?(url|radial|conic|linear|repeating|image|element|cross|paint)/, ")#,#$1").split("#,#");
      return c.map(function(h) {
        var l = h.replace(/([a-z|-]+)\((.*)\)/, "$1").trim();
        if (l === "url")
          return {
            type: l,
            values: h
          };
        var d = h.replace(/([a-z|-]+)\((.*)\)/, "$2").replace(/#([0-9a-f]{6}|[0-9a-f]{3})|(rgb[a]?|hsl)+\(\d+\,[\s+]?\d+[\%]?\,[\s+]?\d+[\%]?(\,\d+)?\)/gi, function(_) {
          return _.replace(/\s+/g, "");
        }).replace(/\,([a-z|#|\s+])/g, "#,#$1").split("#,#").map(function(_) {
          return _.trim();
        }), m = d[0].match(yr) ? "" : d[0];
        m && d.splice(0, 1);
        var v = a.getAngle(l, m), p = d.map(function(_) {
          var T = _.trim().split(/\s+/), x, S = (T[0].match(yr), T[0]);
          return S && (T.splice(0, 1), x = Re.parseColor(S)), {
            color: x,
            positions: T.map(function(I) {
              return {
                data: parseFloat(I),
                unit: I.toString().replace(/[^a-z|%]/g, "")
              };
            })
          };
        });
        return {
          type: l,
          angle: v,
          values: p
        };
      });
    }, a.getAnimStart = function() {
      var s, c = xt(a), h = c.startAt, l = c.key, d = c.computedStyle, m = c.target, v = c.vars, p = c.tweenVars, _ = Te({}, h), T = (s = p[l]) !== null && s !== void 0 ? s : (d || m)[l];
      (!T || T === "none" || T === "auto") && (T = ""), _[l] = _[l] || T, _[l] = _[l] ? a.valueToIValue(_[l]) : a.defaultStartVars;
      var x = Math.max(v.length, _[l].length), S = (x === _[l].length ? _[l] : v).map(function(I, C) {
        var P, U, M = _[l][C] || a.defaultStartVars[C], k = v[C] || M;
        if ((!M || M.type !== k.type) && (M.type !== k.type && nr("type", M.type, k.type), M = a.defaultStartVars[C]), ar(k.type) || typeof k.values == "string" || typeof M.values == "string")
          return Te({}, k);
        if (((P = k.angle) === null || P === void 0 ? void 0 : P.extent) !== ((U = M.angle) === null || U === void 0 ? void 0 : U.extent)) {
          var G, K;
          nr("extent keyword", (G = M.angle) === null || G === void 0 ? void 0 : G.extent, (K = k.angle) === null || K === void 0 ? void 0 : K.extent);
        }
        var B = Math.max(M.values.length, k.values.length), Z = B === M.values.length ? M.values : k.values;
        return M.values = Z.map(function(H, $) {
          var Q = M.values[$], J = k.values[$] || Q;
          return Te(Te({}, Q), {}, {
            positions: (J || Q).positions.map(function(ne, re) {
              var A = Q ? Q.positions[re] || Q.positions[Q.positions.length - 1] : J.positions[J.positions.length - 1], E = ne || A;
              return !A && Q && M.values.length && (A = {
                data: 100 / (M.values.length - 1) * $,
                unit: "%"
              }), E.unit !== A.unit && nr("units", A.unit, E.unit), {
                data: A.data,
                unit: E.unit
              };
            })
          });
        }), M;
      });
      return a.start = S, a.start;
    }, a.render = function(s) {
      var c = "", h = Math.max(a.vars.length, a.start.length);
      return (h === a.vars.length ? a.vars : a.start).forEach(function(l, d) {
        var m = a.start[d], v = a.vars[d] || m;
        if (ar(v.type) || typeof v.values == "string" || !v.angle) {
          c += "".concat(c ? "," : "", " ").concat(v.values).trim();
          return;
        }
        var p = Math.max(m.values.length, v.values.length), _ = (p === m.values.length ? m.values : v.values).map(function(C, P) {
          var U = m.values[P], M = v.values[P];
          M || (M = U);
          var k = U.color, G = U.positions;
          !k && M.color && (k = yt(M.color)), G || (G = M.positions.map(function(Z) {
            return Te({}, Z);
          }));
          var K = M.color ? M.color.map(function(Z, H) {
            return Je(k[H], Z, s);
          }) : M.color, B = M.positions.map(function(Z, H) {
            return "".concat(Je(G[H].data, Z.data, s)).concat(Z.unit);
          }).join(" ");
          return "".concat(K ? Re.getColor(K) : K || "", " ").concat(B).trim();
        }), T = v.angle, x = T.angle && T.angle.map(function(C, P) {
          return "".concat(Je(m.angle.angle[P].data, C.data, s)).concat(C.unit);
        }).join(" "), S = T.position && T.position.map(function(C, P) {
          return "".concat(Je(m.angle.position[P].data, C.data, s)).concat(C.unit);
        }).join(" "), I = "".concat(T.extent || "", " ").concat(T.shape || "", " ").concat(x || "", " ").concat(S ? "at ".concat(S) : "").trim();
        c += "".concat(c ? "," : "", " ").concat(v.type, "(").concat(I ? "".concat(I, ",") : "").concat(_.join(","), ")").trim();
      }), c;
    }, a.value = n, a.vars = a.valueToIValue(n), a.defaultStartVars = a.vars.map(function(s) {
      return ar(s.type) || typeof s.values == "string" ? Te({}, s) : Te(Te({}, s), {}, {
        values: s.values.map(function(c) {
          var h;
          return c.color && typeof c.color != "string" ? (h = yt(c.color), h[3] = 0) : h = c.color, {
            color: h,
            positions: yt(c.positions)
          };
        })
      });
    }), a;
  }
  return et(e);
}(Gt);
Rn.className = "GradientsPlugin";
var bt = { exports: {} }, ft = { exports: {} }, Ra = ft.exports, Kr;
function Aa() {
  return Kr || (Kr = 1, (function() {
    var r, t, e, n, a, s;
    typeof performance < "u" && performance !== null && performance.now ? ft.exports = function() {
      return performance.now();
    } : typeof process < "u" && process !== null && process.hrtime ? (ft.exports = function() {
      return (r() - a) / 1e6;
    }, t = process.hrtime, r = function() {
      var c;
      return c = t(), c[0] * 1e9 + c[1];
    }, n = r(), s = process.uptime() * 1e9, a = n - s) : Date.now ? (ft.exports = function() {
      return Date.now() - e;
    }, e = Date.now()) : (ft.exports = function() {
      return (/* @__PURE__ */ new Date()).getTime() - e;
    }, e = (/* @__PURE__ */ new Date()).getTime());
  }).call(Ra)), ft.exports;
}
var Qr;
function xa() {
  if (Qr) return bt.exports;
  Qr = 1;
  for (var r = Aa(), t = typeof window > "u" ? Hn : window, e = ["moz", "webkit"], n = "AnimationFrame", a = t["request" + n], s = t["cancel" + n] || t["cancelRequest" + n], c = 0; !a && c < e.length; c++)
    a = t[e[c] + "Request" + n], s = t[e[c] + "Cancel" + n] || t[e[c] + "CancelRequest" + n];
  if (!a || !s) {
    var h = 0, l = 0, d = [], m = 1e3 / 60;
    a = function(v) {
      if (d.length === 0) {
        var p = r(), _ = Math.max(0, m - (p - h));
        h = _ + p, setTimeout(function() {
          var T = d.slice(0);
          d.length = 0;
          for (var x = 0; x < T.length; x++)
            if (!T[x].cancelled)
              try {
                T[x].callback(h);
              } catch (S) {
                setTimeout(function() {
                  throw S;
                }, 0);
              }
        }, Math.round(_));
      }
      return d.push({
        handle: ++l,
        callback: v,
        cancelled: !1
      }), l;
    }, s = function(v) {
      for (var p = 0; p < d.length; p++)
        d[p].handle === v && (d[p].cancelled = !0);
    };
  }
  return bt.exports = function(v) {
    return a.call(t, v);
  }, bt.exports.cancel = function() {
    s.apply(t, arguments);
  }, bt.exports.polyfill = function(v) {
    v || (v = t), v.requestAnimationFrame = a, v.cancelAnimationFrame = s;
  }, bt.exports;
}
var An = xa();
const Ca = /* @__PURE__ */ Tt(An);
var Pa = /* @__PURE__ */ function() {
  function r() {
    var t = this;
    tt(this, r), this.lagThreshold = 150, this.adjustedLag = 33, this.emptyTime = 0, this.elapsed = 0, this.frameFPS = 1e3 / 240, this.startTime = 0, this.prevTime = 0, this.useTimeout = !1, this.lastUpdate = this.startTime, this.nextTime = this.frameFPS, this.req = void 0, this.id = -1, this.tweenId = 0, this.tickFn = [], this.state = "sleep", this.time = 0, this.frame = 0, this.removeReq = function(e) {
      return t.useTimeout ? clearTimeout(e) : An.cancel(e);
    }, this.tick = function() {
      var e = t.tickFn;
      t.startTime || (t.startTime = Vr() - t.frameFPS, t.lastUpdate = t.startTime), t.elapsed = Vr() - t.lastUpdate, t.elapsed > t.lagThreshold && (t.startTime += t.elapsed - t.adjustedLag), t.lastUpdate += t.elapsed, t.time = t.lastUpdate - t.startTime;
      var n = t.time - t.nextTime;
      if (n > 0) {
        t.frame++, t.nextTime += n + (n >= t.frameFPS ? 4 : t.frameFPS - n);
        for (var a = t.time - t.prevTime, s = 0; s < e.length; s++)
          e[s].fn({
            time: t.time,
            elapsed: a < t.frameFPS ? t.frameFPS : a
          });
        t.prevTime = t.time;
      }
      if (!t.tickFn.length && (t.emptyTime || (t.emptyTime = t.time + 500), t.time >= t.emptyTime)) {
        t.emptyTime = 0, t.sleep();
        return;
      }
      t.req && (t.id = t.req(t.tick));
    }, this.wake = function() {
      t.id && t.sleep(), t.req = t.useTimeout ? function(e) {
        return setTimeout(e, t.frameFPS);
      } : Ca, t.tick(), t.state = "wake";
    }, this.sleep = function() {
      t.removeReq(t.id), t.id = -1, t.req = void 0, t.state = "sleep";
    }, this.add = function(e) {
      var n = "TweenOneTicker_".concat(t.tweenId);
      return t.tweenId += 1, t.tickFn.findIndex(function(a) {
        return a.key === n;
      }) === -1 && t.tickFn.push({
        key: n,
        fn: e
      }), t.emptyTime = 0, t.req || t.wake(), n;
    }, this.clear = function(e) {
      t.tickFn = t.tickFn.filter(function(n) {
        return n.key !== e && n.fn !== e;
      });
    }, this.timeout = function(e, n) {
      if (typeof e != "function")
        return console.warn("not function");
      var a = t.time, s = t.add(function() {
        var c = t.time - a;
        c >= (n || 0) && (t.clear(s), e());
      });
      return s;
    }, this.interval = function(e, n) {
      if (typeof e != "function")
        return console.warn("not function"), null;
      var a = t.time;
      return t.add(function() {
        var s = t.time - a;
        s >= (n || 0) && (a = t.time, e());
      });
    };
  }
  return et(r, [{
    key: "fps",
    value: function(e, n) {
      this.frameFPS = 1e3 / (e || 240), this.nextTime = this.time + this.frameFPS, this.useTimeout = typeof n > "u" ? this.useTimeout : n, this.useTimeout && (this.req = function(a) {
        return setTimeout(a, e);
      });
    }
  }]), r;
}(), Fe = new Pa(), or, Jr;
function Ma() {
  if (Jr) return or;
  Jr = 1;
  var r = {
    linear: function(t, e, n, a) {
      var s = n - e;
      return s * t / a + e;
    },
    easeInQuad: function(t, e, n, a) {
      var s = n - e;
      return s * (t /= a) * t + e;
    },
    easeOutQuad: function(t, e, n, a) {
      var s = n - e;
      return -s * (t /= a) * (t - 2) + e;
    },
    easeInOutQuad: function(t, e, n, a) {
      var s = n - e;
      return (t /= a / 2) < 1 ? s / 2 * t * t + e : -s / 2 * (--t * (t - 2) - 1) + e;
    },
    easeInCubic: function(t, e, n, a) {
      var s = n - e;
      return s * (t /= a) * t * t + e;
    },
    easeOutCubic: function(t, e, n, a) {
      var s = n - e;
      return s * ((t = t / a - 1) * t * t + 1) + e;
    },
    easeInOutCubic: function(t, e, n, a) {
      var s = n - e;
      return (t /= a / 2) < 1 ? s / 2 * t * t * t + e : s / 2 * ((t -= 2) * t * t + 2) + e;
    },
    easeInQuart: function(t, e, n, a) {
      var s = n - e;
      return s * (t /= a) * t * t * t + e;
    },
    easeOutQuart: function(t, e, n, a) {
      var s = n - e;
      return -s * ((t = t / a - 1) * t * t * t - 1) + e;
    },
    easeInOutQuart: function(t, e, n, a) {
      var s = n - e;
      return (t /= a / 2) < 1 ? s / 2 * t * t * t * t + e : -s / 2 * ((t -= 2) * t * t * t - 2) + e;
    },
    easeInQuint: function(t, e, n, a) {
      var s = n - e;
      return s * (t /= a) * t * t * t * t + e;
    },
    easeOutQuint: function(t, e, n, a) {
      var s = n - e;
      return s * ((t = t / a - 1) * t * t * t * t + 1) + e;
    },
    easeInOutQuint: function(t, e, n, a) {
      var s = n - e;
      return (t /= a / 2) < 1 ? s / 2 * t * t * t * t * t + e : s / 2 * ((t -= 2) * t * t * t * t + 2) + e;
    },
    easeInSine: function(t, e, n, a) {
      var s = n - e;
      return -s * Math.cos(t / a * (Math.PI / 2)) + s + e;
    },
    easeOutSine: function(t, e, n, a) {
      var s = n - e;
      return s * Math.sin(t / a * (Math.PI / 2)) + e;
    },
    easeInOutSine: function(t, e, n, a) {
      var s = n - e;
      return -s / 2 * (Math.cos(Math.PI * t / a) - 1) + e;
    },
    easeInExpo: function(t, e, n, a) {
      var s = n - e;
      return t == 0 ? e : s * Math.pow(2, 10 * (t / a - 1)) + e;
    },
    easeOutExpo: function(t, e, n, a) {
      var s = n - e;
      return t == a ? e + s : s * (-Math.pow(2, -10 * t / a) + 1) + e;
    },
    easeInOutExpo: function(t, e, n, a) {
      var s = n - e;
      return t === 0 ? e : t === a ? e + s : (t /= a / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + e : s / 2 * (-Math.pow(2, -10 * --t) + 2) + e;
    },
    easeInCirc: function(t, e, n, a) {
      var s = n - e;
      return -s * (Math.sqrt(1 - (t /= a) * t) - 1) + e;
    },
    easeOutCirc: function(t, e, n, a) {
      var s = n - e;
      return s * Math.sqrt(1 - (t = t / a - 1) * t) + e;
    },
    easeInOutCirc: function(t, e, n, a) {
      var s = n - e;
      return (t /= a / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + e : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
    },
    easeInElastic: function(t, e, n, a) {
      var s = n - e, c, h, l;
      return l = 1.70158, h = 0, c = s, t === 0 ? e : (t /= a) === 1 ? e + s : (h || (h = a * 0.3), c < Math.abs(s) ? (c = s, l = h / 4) : l = h / (2 * Math.PI) * Math.asin(s / c), -(c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - l) * (2 * Math.PI) / h)) + e);
    },
    easeOutElastic: function(t, e, n, a) {
      var s = n - e, c, h, l;
      return l = 1.70158, h = 0, c = s, t === 0 ? e : (t /= a) === 1 ? e + s : (h || (h = a * 0.3), c < Math.abs(s) ? (c = s, l = h / 4) : l = h / (2 * Math.PI) * Math.asin(s / c), c * Math.pow(2, -10 * t) * Math.sin((t * a - l) * (2 * Math.PI) / h) + s + e);
    },
    easeInOutElastic: function(t, e, n, a) {
      var s = n - e, c, h, l;
      return l = 1.70158, h = 0, c = s, t === 0 ? e : (t /= a / 2) === 2 ? e + s : (h || (h = a * (0.3 * 1.5)), c < Math.abs(s) ? (c = s, l = h / 4) : l = h / (2 * Math.PI) * Math.asin(s / c), t < 1 ? -0.5 * (c * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - l) * (2 * Math.PI) / h)) + e : c * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - l) * (2 * Math.PI) / h) * 0.5 + s + e);
    },
    easeInBack: function(t, e, n, a, s) {
      var c = n - e;
      return s === void 0 && (s = 1.70158), c * (t /= a) * t * ((s + 1) * t - s) + e;
    },
    easeOutBack: function(t, e, n, a, s) {
      var c = n - e;
      return s === void 0 && (s = 1.70158), c * ((t = t / a - 1) * t * ((s + 1) * t + s) + 1) + e;
    },
    easeInOutBack: function(t, e, n, a, s) {
      var c = n - e;
      return s === void 0 && (s = 1.70158), (t /= a / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + e : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + e;
    },
    easeInBounce: function(t, e, n, a) {
      var s = n - e, c;
      return c = r.easeOutBounce(a - t, 0, s, a), s - c + e;
    },
    easeOutBounce: function(t, e, n, a) {
      var s = n - e;
      return (t /= a) < 1 / 2.75 ? s * (7.5625 * t * t) + e : t < 2 / 2.75 ? s * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e : t < 2.5 / 2.75 ? s * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e : s * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
    },
    easeInOutBounce: function(t, e, n, a) {
      var s = n - e, c;
      return t < a / 2 ? (c = r.easeInBounce(t * 2, 0, s, a), c * 0.5 + e) : (c = r.easeOutBounce(t * 2 - a, 0, s, a), c * 0.5 + s * 0.5 + e);
    }
  };
  return or = r, or;
}
var Na = Ma();
const qt = /* @__PURE__ */ Tt(Na);
qt.path = function(r, t) {
  var e = t || {};
  if (Tn)
    return "linear";
  for (var n = ga(r), a = n.getTotalLength(), s = e.rect || 100, c = e.lengthPixel || 200, h = [], l = 0; l < c - 1; l++)
    h.push(n.getPointAtLength(a / (c - 1) * l));
  return h.push(n.getPointAtLength(c)), function(m, v, p, _) {
    var T = qt.linear(m, v, p, _), x = s * T, S = h.filter(function(I) {
      return I.x >= x;
    })[0] || n.getPointAtLength(T * a);
    return 1 - S.y / s;
  };
};
var ir = { exports: {} }, sr = { exports: {} }, en;
function xn() {
  return en || (en = 1, function(r) {
    function t(e, n) {
      this.v = e, this.k = n;
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(sr)), sr.exports;
}
var ur = { exports: {} }, cr = { exports: {} }, tn;
function Cn() {
  return tn || (tn = 1, function(r) {
    function t(e, n, a, s) {
      var c = Object.defineProperty;
      try {
        c({}, "", {});
      } catch {
        c = 0;
      }
      r.exports = t = function(l, d, m, v) {
        if (d) c ? c(l, d, {
          value: m,
          enumerable: !v,
          configurable: !v,
          writable: !v
        }) : l[d] = m;
        else {
          var p = function(T, x) {
            t(l, T, function(S) {
              return this._invoke(T, x, S);
            });
          };
          p("next", 0), p("throw", 1), p("return", 2);
        }
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e, n, a, s);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(cr)), cr.exports;
}
var rn;
function Pn() {
  return rn || (rn = 1, function(r) {
    var t = Cn();
    function e() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
      var n, a, s = typeof Symbol == "function" ? Symbol : {}, c = s.iterator || "@@iterator", h = s.toStringTag || "@@toStringTag";
      function l(S, I, C, P) {
        var U = I && I.prototype instanceof m ? I : m, M = Object.create(U.prototype);
        return t(M, "_invoke", function(k, G, K) {
          var B, Z, H, $ = 0, Q = K || [], J = !1, ne = {
            p: 0,
            n: 0,
            v: n,
            a: re,
            f: re.bind(n, 4),
            d: function(E, O) {
              return B = E, Z = 0, H = n, ne.n = O, d;
            }
          };
          function re(A, E) {
            for (Z = A, H = E, a = 0; !J && $ && !O && a < Q.length; a++) {
              var O, o = Q[a], y = ne.p, R = o[2];
              A > 3 ? (O = R === E) && (H = o[(Z = o[4]) ? 5 : (Z = 3, 3)], o[4] = o[5] = n) : o[0] <= y && ((O = A < 2 && y < o[1]) ? (Z = 0, ne.v = E, ne.n = o[1]) : y < R && (O = A < 3 || o[0] > E || E > R) && (o[4] = A, o[5] = E, ne.n = R, Z = 0));
            }
            if (O || A > 1) return d;
            throw J = !0, E;
          }
          return function(A, E, O) {
            if ($ > 1) throw TypeError("Generator is already running");
            for (J && E === 1 && re(E, O), Z = E, H = O; (a = Z < 2 ? n : H) || !J; ) {
              B || (Z ? Z < 3 ? (Z > 1 && (ne.n = -1), re(Z, H)) : ne.n = H : ne.v = H);
              try {
                if ($ = 2, B) {
                  if (Z || (A = "next"), a = B[A]) {
                    if (!(a = a.call(B, H))) throw TypeError("iterator result is not an object");
                    if (!a.done) return a;
                    H = a.value, Z < 2 && (Z = 0);
                  } else Z === 1 && (a = B.return) && a.call(B), Z < 2 && (H = TypeError("The iterator does not provide a '" + A + "' method"), Z = 1);
                  B = n;
                } else if ((a = (J = ne.n < 0) ? H : k.call(G, ne)) !== d) break;
              } catch (o) {
                B = n, Z = 1, H = o;
              } finally {
                $ = 1;
              }
            }
            return {
              value: a,
              done: J
            };
          };
        }(S, C, P), !0), M;
      }
      var d = {};
      function m() {
      }
      function v() {
      }
      function p() {
      }
      a = Object.getPrototypeOf;
      var _ = [][c] ? a(a([][c]())) : (t(a = {}, c, function() {
        return this;
      }), a), T = p.prototype = m.prototype = Object.create(_);
      function x(S) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(S, p) : (S.__proto__ = p, t(S, h, "GeneratorFunction")), S.prototype = Object.create(T), S;
      }
      return v.prototype = p, t(T, "constructor", p), t(p, "constructor", v), v.displayName = "GeneratorFunction", t(p, h, "GeneratorFunction"), t(T), t(T, h, "Generator"), t(T, c, function() {
        return this;
      }), t(T, "toString", function() {
        return "[object Generator]";
      }), (r.exports = e = function() {
        return {
          w: l,
          m: x
        };
      }, r.exports.__esModule = !0, r.exports.default = r.exports)();
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(ur)), ur.exports;
}
var lr = { exports: {} }, fr = { exports: {} }, pr = { exports: {} }, nn;
function Mn() {
  return nn || (nn = 1, function(r) {
    var t = xn(), e = Cn();
    function n(a, s) {
      function c(l, d, m, v) {
        try {
          var p = a[l](d), _ = p.value;
          return _ instanceof t ? s.resolve(_.v).then(function(T) {
            c("next", T, m, v);
          }, function(T) {
            c("throw", T, m, v);
          }) : s.resolve(_).then(function(T) {
            p.value = T, m(p);
          }, function(T) {
            return c("throw", T, m, v);
          });
        } catch (T) {
          v(T);
        }
      }
      var h;
      this.next || (e(n.prototype), e(n.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
        return this;
      })), e(this, "_invoke", function(l, d, m) {
        function v() {
          return new s(function(p, _) {
            c(l, m, p, _);
          });
        }
        return h = h ? h.then(v, v) : v();
      }, !0);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(pr)), pr.exports;
}
var an;
function Nn() {
  return an || (an = 1, function(r) {
    var t = Pn(), e = Mn();
    function n(a, s, c, h, l) {
      return new e(t().w(a, s, c, h), l || Promise);
    }
    r.exports = n, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(fr)), fr.exports;
}
var on;
function Ia() {
  return on || (on = 1, function(r) {
    var t = Nn();
    function e(n, a, s, c, h) {
      var l = t(n, a, s, c, h);
      return l.next().then(function(d) {
        return d.done ? d.value : l.next();
      });
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(lr)), lr.exports;
}
var dr = { exports: {} }, sn;
function Da() {
  return sn || (sn = 1, function(r) {
    function t(e) {
      var n = Object(e), a = [];
      for (var s in n) a.unshift(s);
      return function c() {
        for (; a.length; ) if ((s = a.pop()) in n) return c.value = s, c.done = !1, c;
        return c.done = !0, c;
      };
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(dr)), dr.exports;
}
var vr = { exports: {} }, hr = { exports: {} }, un;
function ka() {
  return un || (un = 1, function(r) {
    function t(e) {
      "@babel/helpers - typeof";
      return r.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n;
      } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
      }, r.exports.__esModule = !0, r.exports.default = r.exports, t(e);
    }
    r.exports = t, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(hr)), hr.exports;
}
var cn;
function ja() {
  return cn || (cn = 1, function(r) {
    var t = ka().default;
    function e(n) {
      if (n != null) {
        var a = n[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], s = 0;
        if (a) return a.call(n);
        if (typeof n.next == "function") return n;
        if (!isNaN(n.length)) return {
          next: function() {
            return n && s >= n.length && (n = void 0), {
              value: n && n[s++],
              done: !n
            };
          }
        };
      }
      throw new TypeError(t(n) + " is not iterable");
    }
    r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(vr)), vr.exports;
}
var ln;
function La() {
  return ln || (ln = 1, function(r) {
    var t = xn(), e = Pn(), n = Ia(), a = Nn(), s = Mn(), c = Da(), h = ja();
    function l() {
      var d = e(), m = d.m(l), v = (Object.getPrototypeOf ? Object.getPrototypeOf(m) : m.__proto__).constructor;
      function p(x) {
        var S = typeof x == "function" && x.constructor;
        return !!S && (S === v || (S.displayName || S.name) === "GeneratorFunction");
      }
      var _ = {
        throw: 1,
        return: 2,
        break: 3,
        continue: 3
      };
      function T(x) {
        var S, I;
        return function(C) {
          S || (S = {
            stop: function() {
              return I(C.a, 2);
            },
            catch: function() {
              return C.v;
            },
            abrupt: function(U, M) {
              return I(C.a, _[U], M);
            },
            delegateYield: function(U, M, k) {
              return S.resultName = M, I(C.d, h(U), k);
            },
            finish: function(U) {
              return I(C.f, U);
            }
          }, I = function(U, M, k) {
            C.p = S.prev, C.n = S.next;
            try {
              return U(M, k);
            } finally {
              S.next = C.n;
            }
          }), S.resultName && (S[S.resultName] = C.v, S.resultName = void 0), S.sent = C.v, S.next = C.n;
          try {
            return x.call(this, S);
          } finally {
            C.p = S.prev, C.n = S.next;
          }
        };
      }
      return (r.exports = l = function() {
        return {
          wrap: function(I, C, P, U) {
            return d.w(T(I), C, P, U && U.reverse());
          },
          isGeneratorFunction: p,
          mark: d.m,
          awrap: function(I, C) {
            return new t(I, C);
          },
          AsyncIterator: s,
          async: function(I, C, P, U, M) {
            return (p(C) ? a : n)(T(I), C, P, U, M);
          },
          keys: c,
          values: h
        };
      }, r.exports.__esModule = !0, r.exports.default = r.exports)();
    }
    r.exports = l, r.exports.__esModule = !0, r.exports.default = r.exports;
  }(ir)), ir.exports;
}
var mr, fn;
function Ya() {
  if (fn) return mr;
  fn = 1;
  var r = La()();
  mr = r;
  try {
    regeneratorRuntime = r;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
  }
  return mr;
}
var Fa = Ya();
const pn = /* @__PURE__ */ Tt(Fa);
function dn(r, t, e, n, a, s, c) {
  try {
    var h = r[s](c), l = h.value;
  } catch (d) {
    return void e(d);
  }
  h.done ? t(l) : Promise.resolve(l).then(n, a);
}
function Ua(r) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(n, a) {
      var s = r.apply(t, e);
      function c(l) {
        dn(s, n, a, c, h, "next", l);
      }
      function h(l) {
        dn(s, n, a, c, h, "throw", l);
      }
      c(void 0);
    });
  };
}
var qa = /* @__PURE__ */ function() {
  function r() {
    var t = this;
    tt(this, r), this.children = [], this.autoSleep = 200, this.tickerKey = void 0, this.startTime = void 0, this.addChild = function(e) {
      t.children.indexOf(e) === -1 ? (t.children.push(e), t.updateTickerState()) : t.start();
    }, this.removeChild = function(e) {
      t.children = t.children.filter(function(n) {
        return n !== e;
      }), t.updateTickerState();
    }, this.kill = function(e) {
      t.children = t.children.filter(function(n) {
        var a = n.root.targets, s = a.map(function(h, l) {
          if (e.indexOf(h) === -1)
            return h;
          delete h._tweenOneVars;
        });
        n.root.targets = s;
        var c = !!s.filter(function(h) {
          return h;
        }).length;
        return c || n.kill(), c;
      }), t.updateTickerState();
    }, this.killAll = function(e) {
      e && (t.children.forEach(function(n) {
        n?.root.targets.forEach(function(a) {
          a && delete a._tweenOneVars;
        });
      }), t.children = []), Fe.clear(t.tickerKey), t.tickerKey = void 0;
    }, this.getTotalTime = function() {
      for (var e = 0, n = 0; n < t.children.length; n++) {
        var a = t.children[n], s = a.pausedState ? 0 : a.startTime + a.totalTime;
        e ? e = Math.max(s, e) : e = s;
      }
      return e;
    }, this.updateTickerState = function() {
      !t.children.length || !t.children.some(function(e) {
        return !e?.pausedState && (!e?.reverseState && e.progressTime < e.totalTime || e?.reverseState && e.progressTime > 0);
      }) ? t.killAll(!t.children.length) : t.start();
    }, this.start = function() {
      t.tickerKey || (t.tickerKey = Fe.add(t.render));
    }, this.render = function(e) {
      for (var n = e.time, a = e.elapsed, s = a === void 0 ? 0 : a, c = t.children, h = c.length, l = 0; l < h; l++) {
        var d = c[l];
        if (d) {
          var m = d.startTime - s, v = d.startTime + d.totalTime + s;
          n > m && n < v && !d.pausedState && d.render({
            time: n,
            elapsed: s
          });
        }
      }
    };
  }
  return et(r, [{
    key: "totalTime",
    get: function() {
      return this.getTotalTime();
    }
  }]), r;
}(), Xa = /* @__PURE__ */ function() {
  function r(t) {
    var e = this;
    tt(this, r), this.item = void 0, this.vars = {}, this.start = void 0, this.parent = void 0, this.root = void 0, this.startAt = {}, this.mode = void 0, this.appearTo = 0, this.props = {}, this.index = void 0, this.register = void 0, this.reverseStart = void 0, this.repeatNum = 0, this.prevMoment = void 0, this.easing = void 0, this.changeValueToVars = function(c, h, l) {
      var d = (Array.isArray(h) || c.match(/color|fill|stroke|.*shadow/i) && typeof h == "string" || typeof h == "string" && h.split(/[\s|,]/).length > 1) && !(c in Ge);
      if (c in Ge || d)
        return l ? h : {
          value: h,
          plugins: [],
          array: d
        };
      var m = parseFloat(h.toString().replace(/=/g, "")), v = h.toString().replace(/[^a-z|%]/g, ""), p = h.toString().charAt(1) === "=" ? h.toString().replace(/[^\+\=|\-\=]/gi, "") : "";
      return {
        vars: m,
        unit: v,
        count: p
      };
    }, this.setEase = function(c) {
      if (typeof c == "function") {
        e.easing = c;
        return;
      } else if (c.match(/,/g)) {
        e.easing = qt.path(c);
        return;
      }
      e.easing = qt[c];
    }, this.getTotalTime = function() {
      var c = e.props, h = c.duration, l = h === void 0 ? 450 : h, d = c.delay, m = d === void 0 ? 0 : d, v = c.repeat, p = v === void 0 ? 0 : v, _ = c.repeatDelay, T = _ === void 0 ? 0 : _;
      return p === -1 ? Number.MAX_VALUE : m + l * (p + 1) + T * p;
    }, this.getEaseToRatio = function(c, h) {
      var l = e.props.ease, d = l === void 0 ? "" : l;
      return (c === 0 || c === 1) && !(typeof d == "function" || d.match(/,/g)) ? c : e.easing(h ? 1 - c : c, h ? 1 : 0, h ? 0 : 1, 1);
    }, this.setRatioToVars = function(c) {
      for (var h = e.vars, l = e.root, d = 0; d < l.targets.length; d++)
        if (l.targets[d])
          for (var m in h) {
            var v = h[m];
            if (v.plugins) {
              m === "PathMotion" ? l.vars[d].style = v.plugins[d].render(c) : l.vars[d][m] = v.plugins[d].render(c);
              continue;
            }
            var p = v.vars, _ = v.count, T = v.unit, x = e.start[d][m];
            l.vars[d][m] = Je(x, p, c, _, T);
          }
    }, this.onRegisterAnimate = function() {
      e.register = !0;
      for (var c = e.root, h = e.parent, l = e.startAt, d = [], m = 0; m < c.targets.length; m++) {
        var v = c.targets[m], p = c.vars[m], _ = {};
        for (var T in e.vars) {
          var x = e.vars[T];
          if (x.plugins) {
            var S = new Ge[x.array ? "ArrayPlugin" : T](x.value, T);
            S.target = v, S.root = c, S.parent = h, S.targetIndex = m, S.tweenVars = p, S.index = e.index, S.startAt = l, _[T] = S.getAnimStart(), x.plugins.push(S);
          } else {
            var I, C, P = (I = c.attr ? v.getAttribute(T) : p[T] || v[T]) !== null && I !== void 0 ? I : En(T), U = (C = l[T]) !== null && C !== void 0 ? C : P, M = He(U) === "object" && "vars" in U && "count" in U, k = M ? U.unit : "".concat(U).replace(/[^a-z|%]/g, ""), G = x.unit;
            k && k !== G && console.warn("Different units, start unit ".concat(k, ", to value unit ").concat(G, ", remove start unit.")), _[T] = M ? _n(P, U) : parseFloat(U);
          }
        }
        d.push(_);
      }
      e.start = d;
    }, this.overflowRatio = function(c) {
      var h = c < 0 ? 0 : c, l = e.props.duration;
      return h = h > l ? l : h, h;
    }, this.render = function(c) {
      var h = c.moment, l = c.fps, d = l === void 0 ? 0 : l, m = c.silence, v = c.render, p = e.parent, _ = e.root, T = e.props, x = Qe(_.targets), S = p.onChange, I = T.repeat, C = I === void 0 ? 0 : I, P = T.type, U = P === void 0 ? "to" : P, M = T.duration, k = M === void 0 ? 450 : M, G = T.delay, K = G === void 0 ? 0 : G, B = T.repeatDelay, Z = B === void 0 ? 0 : B, H = T.yoyo;
      C = C === -1 ? Number.MAX_VALUE : C;
      var $ = h - K, Q = Math.floor($ / (k + Z)) || 0;
      Q = Q > C ? C : Q, Q = Q < 0 ? 0 : Q, $ = $ - (k + Z) * Q;
      var J = !!(H && Q % 2), ne = U === "from", re = J && ne ? !1 : J || ne;
      $ = re ? k - $ : $;
      var A = ne ? 0 : K, E = re ? 1 : 0;
      if (!e.register && h >= A && (e.onRegisterAnimate(), (re && $ <= 0 || !re && $ >= k && k) && (e.prevMoment = h, E = re ? 0 : 1), e.setRatioToVars(E), S({
        index: e.index,
        vars: _.vars
      })), e.register && h > K - d && h < e.totalTime + d) {
        $ = e.overflowRatio($), E = re ? 1 : 0, h >= e.totalTime && e.mode !== "onComplete" && e.prevMoment !== void 0 || e.prevMoment === void 0 && h >= e.totalTime && k ? (E = re ? 0 : 1, e.mode = "onComplete", e.props.onComplete && e.props.onComplete({
          mode: e.mode,
          index: e.index,
          moment: $,
          ratio: E,
          targets: x,
          vars: Qe(_.vars)
        })) : e.prevMoment === void 0 || h <= 0 && h > -d && e.mode !== "onStart" && e.prevMoment > h ? (e.mode = "onStart", e.props.onStart && e.props.onStart({
          mode: e.mode,
          index: e.index,
          moment: $,
          ratio: E,
          targets: x,
          vars: Qe(_.vars)
        })) : (E = $ && k ? $ / k : 0, e.mode = "onUpdate", e.props.onUpdate && e.props.onUpdate({
          mode: e.mode,
          index: e.index,
          moment: $,
          ratio: E,
          targets: x,
          vars: Qe(_.vars)
        })), C && Q !== e.repeatNum && h && e.mode === "onUpdate" && (e.mode = "onRepeat", e.props.onRepeat && e.props.onRepeat({
          mode: e.mode,
          index: e.index,
          moment: $,
          ratio: E,
          targets: x,
          vars: Qe(e.root.vars)
        })), e.setRatioToVars(e.getEaseToRatio(E, ne)), C && (e.repeatNum = Q);
        var O = {
          mode: e.mode,
          moment: $,
          repeat: Q,
          ratio: E,
          targets: _.targets,
          vars: _.vars,
          index: e.index
        };
        m && (O.silence = m), v && (O.render = v), S(O), e.prevMoment = h;
      }
    }, this.item = t, this.startAt = Te({}, t.startAt), Object.keys(this.startAt).forEach(function(c) {
      e.startAt[c] = e.changeValueToVars(c, e.startAt[c], !0);
    });
    var n = {};
    for (var a in t) {
      var s = t[a];
      a in Tr ? n[a] = s : this.vars[a] = this.changeValueToVars(a, s);
    }
    this.props = Te(Te({}, Tr), n), this.setEase(this.props.ease);
  }
  return et(r, [{
    key: "totalTime",
    get: (
      // parentBackwards?: boolean;
      function() {
        return this.getTotalTime();
      }
    )
  }]), r;
}(), Ha = /* @__PURE__ */ et(function r(t) {
  var e = this;
  tt(this, r), this.props = void 0, this.id = void 0, this.children = [], this.totalTime = 0, this.totalTimeRegion = 0, this.childTotalTime = 0, this.childRegionTotalTime = 0, this.prevMoment = void 0, this.progressTime = 0, this.progressMoment = -1, this.startMoment = 0, this.startTime = 0, this.repeatNum = 0, this.mode = "onTimelineStart", this.pausedState = void 0, this.reverseState = void 0, this.root = void 0, this.parent = void 0, this.regionStartTime = 0, this.regionEndTime = void 0, this.onChangeChild = void 0, this.onChangeTimeline = void 0, this.init = function() {
    for (var c = e.props, h = c.reverse, l = c.animation, d = c.moment, m = Ct(l), v = 0; v < m.length; v++) {
      var p = m[v];
      p.type === "set" && (p.duration = 0);
      var _ = new Xa(p);
      _.index = v;
      var T = v ? Ta(p, m[v - 1]) : 0;
      p.appearTo = T, _.appearTo = T, e.addChild(_);
    }
    e.render({
      time: (h ? e.totalTime : 0) + e.startTime,
      elapsed: 16.67
    }), e.totalTime || e.render({
      time: (h ? e.totalTime : 0) + e.startTime,
      elapsed: 16.67
    }), d ? e.goto(d) : e.play();
  }, this.addChild = function(c) {
    c.parent = e, c.root = e.root, e.children.indexOf(c) === -1 && (e.children.push(c), e.setTotalTime());
  }, this.setTotalTime = function() {
    e.childTotalTime = 0, e.childRegionTotalTime = 0;
    for (var c = 0; c < e.children.length; c++) {
      var h = e.children[c];
      if (h.appearTo !== e.childTotalTime) {
        var l = h.appearTo + h.totalTime;
        l > e.childTotalTime && (e.childTotalTime = l, e.childRegionTotalTime = l);
      } else
        e.childTotalTime += h.totalTime, e.childRegionTotalTime += h.totalTime;
    }
    e.regionStartTime && (e.childRegionTotalTime -= e.regionStartTime), e.regionEndTime && (e.childRegionTotalTime = e.regionEndTime - e.regionStartTime);
    var d = e.props, m = d.repeat, v = m === void 0 ? 0 : m, p = d.repeatDelay, _ = p === void 0 ? 0 : p, T = d.delay;
    e.totalTime = v === -1 ? Number.MAX_VALUE : T + e.childTotalTime * (v + 1) + _ * v, e.totalTimeRegion = v === -1 ? Number.MAX_VALUE : T + e.childRegionTotalTime * (v + 1) + _ * v;
  }, this.setStartTimeOrMoment = function(c) {
    e.startTime = Fe.time, e.startMoment = c || e.progressMoment;
  }, this.reRenderCall = function() {
    e.render({
      time: e.startTime,
      elapsed: Fe.elapsed || Fe.frameFPS
    });
  }, this.play = function(c) {
    if (c) {
      var l;
      (l = e.parent) === null || l === void 0 || l.updateTickerState();
    } else {
      var h;
      (h = e.parent) === null || h === void 0 || h.addChild(e);
    }
  }, this.paused = function() {
    var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    e.pausedState = c, e.setStartTimeOrMoment(), e.play(c);
  }, this.reverse = function(c) {
    e.reverseState = c, e.setStartTimeOrMoment(), e.play(e.pausedState);
  }, this.goto = function(c, h) {
    var l = c - e.regionStartTime;
    e.startTime = Fe.time, e.startMoment = l > e.totalTime ? e.totalTime : l, e.progressMoment = e.startMoment, e.progressTime = l, e.play(e.pausedState), e.reRenderCall(), !!h !== e.pausedState && e.paused(h);
  }, this.kill = function(c) {
    if (typeof c == "number")
      e.paused(), delete e.children[c], e.setTotalTime(), e.paused(!1);
    else {
      var h;
      e.children = [], (h = e.parent) === null || h === void 0 || h.removeChild(e);
    }
  }, this.onChange = function(c) {
    c.timelineMoment = e.progressMoment, e.onChangeChild(c);
  }, this.render = function(c) {
    var h = c.time, l = c.elapsed, d = l || Fe.frameFPS || 0, m = e.totalTime, v = e.totalTimeRegion, p = e.childTotalTime, _ = e.childRegionTotalTime, T = e.children, x = e.props, S = e.startTime, I = e.reverseState, C = e.pausedState, P = e.startMoment, U = e.onChangeTimeline, M = e.parent, k = e.root, G = e.prevMoment, K = e.regionStartTime, B = x.repeatDelay, Z = B === void 0 ? 0 : B, H = x.yoyo, $ = x.delay, Q = x.repeat, J = Q === void 0 ? 0 : Q;
    J = J === -1 ? Number.MAX_VALUE : J;
    var ne = h - S - $, re = I ? P - ne : ne + P;
    if (!(re < -d)) {
      var A = re < 0 ? 0 : re;
      A = A > m ? m : A, A = P < K ? re : A, A = P > v ? P : A;
      var E = J ? Math.floor(A / (_ + Z)) : 0;
      E = J && E > J ? J : E;
      var O = A - (_ + Z) * E, o = !!(H && E % 2);
      O = o ? _ - O : O, O = K + O;
      var y = I ? !o : o;
      if (e.mode = "onTimelineUpdate", typeof G != "number" && (e.mode = "onTimelineStart"), A >= v - $ && typeof G == "number" && (e.mode = "onTimelineComplete"), E !== e.repeatNum && (e.mode = "onTimelineRepeat", A > p * E && A < p * E + d)) {
        for (var R = y ? 0 : T.length - 1; y ? R <= T.length - 1 : R >= 0; y ? R++ : R--) {
          var N = T[R];
          y || (N.prevMoment = void 0), N.render({
            moment: y ? N.totalTime : 0,
            fps: d
          });
        }
        U({
          moment: A,
          totalTime: m,
          repeat: E,
          mode: e.mode,
          targets: k.targets
        }), e.mode = "onTimelineUpdate";
      }
      J && (e.repeatNum = E), e.progressMoment = A, e.prevMoment = A, e.progressTime = ne;
      for (var F = 0; F < T.length; F++) {
        var j = T[F], q = j.totalTime + j.appearTo, ce = O >= j.appearTo - d && O < q + d;
        if ((j.mode !== "onComplete" && O > q + d && !o && j.totalTime || typeof j.mode > "u" && !j.totalTime) && (j.render({
          moment: j.totalTime,
          fps: d
        }), j.prevMoment = void 0), O < j.appearTo - d && j.mode && j.mode !== "onStart" && (j.render({
          moment: j.appearTo,
          fps: d,
          silence: !0
        }), j.prevMoment = void 0, j.mode = void 0), ce) {
          var z = O < 0 ? 0 : O;
          if (O > q && j.mode === "onComplete" && !o)
            return;
          z = O > q ? q : O, j.render({
            moment: z - j.appearTo,
            fps: d
          }), q || (j.render({
            moment: j.totalTime,
            fps: d,
            render: !0
          }), j.prevMoment = void 0);
        }
      }
      U({
        moment: A,
        totalTime: m,
        repeat: E,
        mode: e.mode,
        targets: k.targets
      }), (C || v && re + $ >= v && !I || I && re + $ <= 0 || !T.length) && M?.removeChild(e);
    }
  }, this.props = t;
  var n = this.props, a = n.paused, s = n.reverse;
  this.reverseState = s, this.pausedState = a, this.regionStartTime = t.regionStartTime || 0, this.regionEndTime = t.regionEndTime;
});
Ge.push(bn);
Ge.push(Rn);
Ge.push(Or);
var vn = 0, _r = new qa(), hn = /* @__PURE__ */ function() {
  function r(t, e) {
    var n = this;
    tt(this, r), this.targets = void 0, this.props = void 0, this.timeline = void 0, this.animate = void 0, this.$reverse = !1, this.vars = [], this.initTime = void 0, this.attr = void 0, this.init = /* @__PURE__ */ function() {
      var a = Ua(/* @__PURE__ */ pn.mark(function s(c) {
        var h;
        return pn.wrap(function(d) {
          for (; ; )
            switch (d.prev = d.next) {
              case 0:
                h = ya(c), n.targets[0].tagName && !n.attr && (h.animation = Ct(h.animation).map(function(m) {
                  var v = {
                    style: {}
                  };
                  for (var p in m)
                    p in Ge || p in Tr ? v[p] = m[p] : v.style[p] = m[p];
                  return Object.keys(v.style).length || delete v.style, m.duration && (m.duration = Math.round(m.duration)), m.delay && (m.delay = Math.round(m.delay)), m.appearTo && (m.appearTo = Math.round(m.appearTo)), m.repeatDelay && (m.repeatDelay = Math.round(m.repeatDelay)), v;
                })), n.animate = new Ha(h), n.animate.id = "TweenOne_".concat(vn), vn++, n.animate.startTime = n.initTime, n.animate.onChangeChild = n.onChange, n.animate.onChangeTimeline = n.onChangeTimeline, n.animate.root = n, n.animate.parent = n.timeline, n.animate.init();
              case 11:
              case "end":
                return d.stop();
            }
        }, s);
      }));
      return function(s) {
        return a.apply(this, arguments);
      };
    }(), this.renderToDom = function() {
      for (var a = 0; a < n.vars.length; a++) {
        var s = n.vars[a];
        for (var c in s) {
          var h = s[c], l = n.targets[a];
          if (l)
            if (n.props.attr && l.tagName && l.setAttribute) {
              if (c === "style")
                for (var d in h)
                  l.style[d] = h[c];
              l.setAttribute(c, h);
            } else if (c in Ge) {
              var m = Ge[c].key;
              if (typeof l[m] == "function")
                l[m](h.attr, h.path);
              else if (He(h) === "object" && He(l[m]) === "object" && m)
                for (var v in h) {
                  var p = h[v];
                  m === "__self" ? l[v] = p : l[m][v] = He(p) === "object" && p.text || p;
                }
              else
                l[m || c] = h;
            } else
              l[c] = h;
        }
      }
    }, this.onChange = function(a) {
      a.mode === "onComplete" && a.render && n.renderToDom(), a.mode && n.props.onChange && !a.silence && (a.targets = Qe(a.targets), a.vars = Qe(a.vars), n.props.onChange(a));
    }, this.onChangeTimeline = function(a) {
      if (n.renderToDom(), a.mode === "onTimelineComplete") {
        var s;
        (s = a.targets) === null || s === void 0 || s.forEach(function(c) {
          delete c._tweenOneVars;
        });
      }
      a.mode && n.props.onChangeTimeline && (a.targets = Qe(a.targets), a.vars = Qe(n.vars), n.props.onChangeTimeline(a));
    }, this.goto = function(a, s) {
      n.targets.forEach(function(c) {
        c && Object.keys(c._tweenOneVars || {}).forEach(function(h) {
          delete c._tweenOneVars[h];
        });
      }), n.animate.goto(a, s);
    }, this.kill = function(a) {
      n.animate.kill(a);
    }, this.targets = t, this.props = e, this.timeline = _r, this.initTime = Fe.time, this.attr = e.attr, t.forEach(function(a) {
      n.vars.push(a._tweenOneVars);
    }), this.init(e);
  }
  return et(r, [{
    key: "paused",
    get: function() {
      return this.animate.pausedState;
    },
    set: function(e) {
      this.animate.paused(e);
    }
  }, {
    key: "reverse",
    get: function() {
      return this.$reverse;
    },
    set: function(e) {
      this.$reverse = e, this.animate.reverse(e);
    }
  }, {
    key: "regionStartTime",
    get: function() {
      return this.animate.regionStartTime;
    },
    set: function(e) {
      this.animate.regionStartTime = e, this.animate.setTotalTime();
    }
  }, {
    key: "regionEndTime",
    get: function() {
      return this.animate.regionEndTime || this.animate.totalTime;
    },
    set: function(e) {
      this.animate.regionEndTime = e, this.animate.setTotalTime();
    }
  }]), r;
}(), Xt = function(t, e) {
  if (!t) {
    console.error("Error: targets is undefined.");
    return;
  }
  Fe.state !== "wake" && Fe.wake();
  var n = Ct(t).map(function(h) {
    return h._tweenOneVars = h._tweenOneVars || {}, h;
  }), a = n.filter(function(h) {
    return h.tagName;
  }), s = n.filter(function(h) {
    return !h.tagName;
  }), c = [];
  return a.length && c.push(new hn(a, e)), s.length && c.push(new hn(s, e)), Qe(c);
};
Xt.kill = function(r) {
  typeof r > "u" ? _r.killAll(!0) : _r.kill(Ct(r));
};
Xt.plugins = Ge;
var Ga = !(typeof window < "u" && window.document && window.document.createElement);
function Rt(r) {
  var t = [];
  return Bn.Children.forEach(r, function(e) {
    t.push(e);
  }), t;
}
function wr(r, t) {
  var e = null;
  return r && r.forEach(function(n) {
    e || !n || n.key === t && (e = n);
  }), e;
}
function za(r, t) {
  var e = [], n = {}, a = [], s;
  return r.forEach(function(c) {
    c && (wr(t, c.key) ? (a.length && (n[c.key] = a, a = []), s = c.key) : c.key && a.push(c));
  }), s || (e = e.concat(a)), t.forEach(function(c) {
    c && (n.hasOwnProperty(c.key) && (e = e.concat(n[c.key])), e.push(c), c.key === s && (e = e.concat(a)));
  }), e;
}
function ut(r, t, e) {
  var n;
  return typeof r == "function" ? n = r({
    key: t,
    index: e
  }) : n = r, Array.isArray(n) ? n.length === 2 ? n : [n[0], n[0]] : [n, n];
}
const Wa = {
  left: {
    opacity: [1, 0],
    translateX: [0, -30]
  },
  top: {
    opacity: [1, 0],
    translateY: [0, -30]
  },
  right: {
    opacity: [1, 0],
    translateX: [0, 30]
  },
  bottom: {
    opacity: [1, 0],
    translateY: [0, 30]
  },
  alpha: {
    opacity: [1, 0]
  },
  scale: {
    opacity: [1, 0],
    scale: [1, 0]
  },
  scaleBig: {
    opacity: [1, 0],
    scale: [1, 2]
  },
  scaleX: {
    opacity: [1, 0],
    scaleX: [1, 0]
  },
  scaleY: {
    opacity: [1, 0],
    scaleY: [1, 0]
  }
};
var $a = ["component", "componentProps", "interval", "duration", "delay", "type", "animConfig", "ease", "leaveReverse", "forcedReplay", "animatingClassName", "onEnd", "appear"], Va = function() {
};
const Ba = /* @__PURE__ */ Oe.forwardRef(function(r, t) {
  var e = r.component, n = e === void 0 ? "div" : e, a = r.componentProps, s = a === void 0 ? {} : a, c = r.interval, h = c === void 0 ? 100 : c, l = r.duration, d = l === void 0 ? 450 : l, m = r.delay, v = m === void 0 ? 0 : m, p = r.type, _ = p === void 0 ? "right" : p, T = r.animConfig, x = T === void 0 ? null : T, S = r.ease, I = S === void 0 ? "easeOutQuart" : S, C = r.leaveReverse, P = C === void 0 ? !1 : C, U = r.forcedReplay, M = U === void 0 ? !1 : U, k = r.animatingClassName, G = k === void 0 ? ["queue-anim-entering", "queue-anim-leaving"] : k, K = r.onEnd, B = K === void 0 ? Va : K, Z = r.appear, H = Z === void 0 ? !0 : Z, $ = da(r, $a), Q = Oe.useRef({}), J = Oe.useRef([]), ne = Oe.useRef([]), re = Oe.useRef([]), A = Oe.useRef([]), E = Oe.useRef({}), O = Oe.useRef({}), o = Oe.useRef({}), y = Oe.useRef({}), R = Oe.useRef(!1), N = Oe.useRef([]), F = Oe.useState(), j = Wr(F, 2), q = j[0], ce = j[1], z = Oe.useState({}), oe = Wr(z, 2), he = oe[0], be = oe[1], Ue = function(L, ae, ee) {
    var ie = {};
    return Object.keys(L).forEach(function(ge) {
      Array.isArray(L[ge]) ? ie[ge] = L[ge][ae] : (!ee && !ae || ee && ae) && (ie[ge] = L[ge]);
    }), ie;
  }, Ce = function(L, ae, ee) {
    return Array.isArray(L) ? L.map(function(ie) {
      return Ue(ie, ae, ee);
    }) : Ue(L, ae, ee);
  }, Me = function(L, ae) {
    var ee = Wa[L];
    return Ce(ee, ae);
  }, Ae = function(L, ae, ee, ie) {
    return (
      /**
       * transformArguments 第一个为 enter, 第二个为 leave；
       * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
       * 用 tween-one 的数组来实现老的动画逻辑。。。
       */
      x ? Ce(ut(x, L, ae)[ee], ie, ee) : Me(ut(_, L, ae)[ee], ie)
    );
  }, se = function(L, ae, ee) {
    var ie = ee === "enter" ? 0 : 1, ge = ee === "enter" ? 1 : 0, fe = ee === "enter" ? 0 : 1, we = Ae(L, ae, ie, fe), Ne = ee === "enter" && (M || !Q.current[L]) ? Ae(L, ae, ie, ge) : null, xe = ut(I, L, ae)[ie], qe = ut(d, L, ae)[ie];
    return Array.isArray(I) && (I.length > 2 || Array.isArray(I[0])) && (xe = xe.map(function(Le) {
      return Le * 100;
    }), xe = "M0,100C".concat(xe[0], ",").concat(100 - xe[1], ",").concat(xe[2], ",").concat(100 - xe[3], ",100,0")), {
      startAnim: Ne,
      animate: we,
      ease: xe,
      duration: qe
    };
  }, Ee = function(L, ae) {
    var ee = ae.targets;
    ee.className = ee.className.replace(G[1], ""), ee.className.indexOf(G[0]) === -1 && (ee.className = "".concat(ee.className, " ").concat(G[0]).trim()), J.current.indexOf(L) >= 0 && J.current.splice(J.current.indexOf(L), 1), Q.current[L] = !0;
  }, ze = function(L, ae) {
    if (!(re.current.indexOf(L) >= 0)) {
      var ee = ae.targets;
      ee.className = ee.className.replace(G[0], "").trim(), delete y.current[L], B({
        key: L,
        type: "enter",
        target: ee
      });
    }
  }, $e = function(L, ae) {
    var ee = ae.targets;
    ee.className = ee.className.replace(G[0], ""), ee.className.indexOf(G[1]) === -1 && (ee.className = "".concat(ee.className, " ").concat(G[1]).trim());
  }, V = function(L, ae) {
    if (Rt(r.children).findIndex(function(fe) {
      return fe && fe.key === L;
    }), !(Rt(r.children).findIndex(function(fe) {
      return fe && fe.key === L;
    }) >= 0)) {
      delete Q.current[L], delete y.current[L], N.current = N.current.filter(function(fe) {
        return fe.key !== L;
      }), re.current.indexOf(L) >= 0 && re.current.splice(re.current.indexOf(L), 1);
      var ee = re.current.some(function(fe) {
        return he[fe];
      });
      if (!ee) {
        var ie = Rt(r.children);
        ce(ie), be(Te({}, Q.current)), A.current.forEach(function(fe) {
          delete o.current[fe];
        });
      }
      var ge = ae.targets;
      ge.className = ge.className.replace(G[1], "").trim(), B({
        key: L,
        type: "leave",
        target: ge
      });
    }
  }, le = function(L) {
    he[L] = !0, Fe.clear(E.current[L]), delete E.current[L], be(Te({}, he));
  }, dt = function(L, ae) {
    var ee = ut(h, L, ae)[0], ie = ut(v, L, ae)[0];
    E.current[L] = Fe.timeout(function() {
      le(L);
    }, ee * ae + ie);
  }, vt = function(L) {
    Fe.clear(E.current[L]), delete E.current[L];
  }, ct = function(L, ae, ee, ie) {
    var ge = se(L, ae, ie), fe = function(Le) {
      (ie === "enter" ? Ee : $e)(L, Le);
    }, we = function(Le) {
      (ie === "enter" ? ze : V)(L, Le);
    };
    if (Array.isArray(ge.animate)) {
      var Ne = ge.animate.length - 1, xe = ge.animate.map(function(qe, Le) {
        return Te(Te({}, qe), {}, {
          startAt: ge.startAnim ? ge.startAnim[Le] : void 0,
          duration: ge.duration / Ne,
          delay: !Le && ie === "leave" ? ee : 0,
          onStart: Le ? void 0 : fe,
          onComplete: Le === Ne ? we : void 0
        });
      });
      return xe;
    }
    return Te(Te({}, ge.animate), {}, {
      startAt: ge.startAnim || void 0,
      ease: ge.ease,
      duration: ge.duration,
      onStart: fe,
      onComplete: we,
      delay: ee
    });
  };
  return Oe.useEffect(function() {
    return function() {
      Object.keys(y.current).forEach(function(_e) {
        var L = y.current[_e];
        L && L.kill();
      });
    };
  }, []), Oe.useEffect(function() {
    var _e = Rt(r.children).filter(function(fe) {
      return fe;
    }), L = N.current.filter(function(fe) {
      return fe;
    }), ae = za(L, _e), ee = [], ie = [];
    if (!H && !R.current) {
      var ge = {};
      ae.forEach(function(fe) {
        !fe || !fe.key || (ge[fe.key] = !0);
      }), N.current = ae, Q.current = Te({}, ge), be(ge);
    } else
      L.forEach(function(fe) {
        if (fe) {
          var we = fe.key, Ne = wr(_e, we);
          !Ne && we && (ie.push(we), Fe.clear(E.current[we]), delete E.current[we]);
        }
      }), _e.forEach(function(fe) {
        if (fe) {
          var we = fe.key, Ne = wr(L, we);
          (!Ne && we || (!o.current[we] || o.current[we] === "leave" || J.current.indexOf(we) >= 0) && ie.indexOf(we) === -1) && ee.push(we);
        }
      });
    J.current = ee, ne.current = [].concat(ee), re.current = ie, A.current = [].concat(ie), ce(ae);
  }, [r.children]), Oe.useLayoutEffect(function() {
    if (N.current = q || [], H || R.current) {
      var _e = yt(J.current), L = yt(re.current);
      _e.forEach(dt), L.forEach(vt);
    }
    q && (R.current = !0);
  }, [q]), Oe.useLayoutEffect(function() {
    q && q.forEach(function(_e) {
      var L = _e.key, ae = O.current[L];
      if (ae) {
        var ee, ie = re.current.indexOf(L), ge = ut(h, L, ie), fe = ut(v, L, ie);
        if (ie >= 0) {
          if (o.current[L] === "leave")
            return;
          var we = P ? re.current.length - ie - 1 : ie, Ne = ge[1] * we + fe[1];
          ee = ct(L, ie, Ne, "leave"), o.current[L] = "leave";
        } else {
          if (o.current[L] === "enter" || J.current.indexOf(L) === -1)
            return;
          ie = ne.current.indexOf(L);
          var xe = ge[0] * ie + fe[0];
          ee = ct(L, ie, o.current[L] === "leave" ? xe : 0, "enter"), o.current[L] = "enter";
        }
        if (y.current[L] && y.current[L].kill(), M) {
          var qe = Te(Te({}, Array.isArray(ee) ? ee[0].startAt : ee.startAt), {}, {
            type: "set"
          });
          Xt(ae, {
            animation: qe
          });
        }
        y.current[L] = Xt(ae, {
          animation: ee
        });
      }
    });
  }, [he, q]), Oe.useMemo(function() {
    if (Ga)
      return /* @__PURE__ */ Oe.createElement(n, Te(Te(Te({}, $), s), {}, {
        ref: t
      }));
    var _e = Rt(q).map(function(ae) {
      return !ae || !ae.key ? ae : he[ae.key] && /* @__PURE__ */ Oe.cloneElement(ae, {
        ref: function(ie) {
          O.current[ae.key] = ie instanceof Element ? ie : mn.findDOMNode(ie), ie || delete O.current[ae.key];
        },
        key: ae.key
      });
    }), L = Te(Te(Te({}, $), s), {}, {
      ref: t
    });
    return /* @__PURE__ */ Oe.createElement(n, L, _e);
  }, [he, q]);
});
function Za({ imageList: r = [], current: t = 0, className: e = "", onClose: n }) {
  const [a, s] = Oe.useState(t), c = Oe.useRef(null), h = Oe.useRef(1);
  return Oe.useEffect(() => {
    const l = c.current.querySelectorAll(".image-item")[a].querySelector("img");
    if (!l)
      return;
    l.translateX === void 0 && na(l);
    const d = new rr(l);
    return d.get("pinch").set({ enable: !0 }), d.get("pan").set({ direction: rr.DIRECTION_ALL }), d.get("swipe").set({ direction: rr.DIRECTION_ALL }), d.on("doubletap", function(m) {
      m.preventDefault(), je.stopAll();
      let v = h.current + 1;
      v > 3 ? (h.current = 1, new je(l, "scaleX", h.current, 300, st), new je(l, "scaleY", h.current, 300, st), l.translateX = 0, l.translateY = 0) : (h.current = v, new je(l, "scaleX", h.current, 300, st), new je(l, "scaleY", h.current, 300, st));
    }), d.on("pinch", function(m) {
      m.preventDefault();
      const v = h.current * m.scale;
      h.current = v > 3 ? 3 : v < 1 ? 1 : v, new je(l, "scaleX", h.current, 100, st), new je(l, "scaleY", h.current, 100, st);
    }), d.on("panmove", function(m) {
      if (l.scaleX > 1) {
        m.preventDefault();
        const { width: v, height: p } = l, _ = (v * l.scaleX - v) / 2, T = (p * l.scaleY - p) / 2;
        l.translateX = m.deltaX, l.translateY = m.deltaY, l.translateX > _ && (l.translateX = _), l.translateX < -_ && (l.translateX = -_), l.translateY > T && (l.translateY = T), l.translateY < -T && (l.translateY = -T);
      }
    }), d.on("panend", function() {
      l.scaleX > 1 && (new je(l, "translateX", 0, 300, st), new je(l, "translateY", 0, 300, st));
    }), d.on("swipeup swipedown", function(m) {
      m.preventDefault(), l.scaleX === 1 && n && n();
    }), d.on("swipeleft", function(m) {
      m.preventDefault(), l.scaleX === 1 && s((v) => v + 1 > r.length - 1 ? v : v + 1);
    }), d.on("swiperight", function(m) {
      m.preventDefault(), l.scaleX === 1 && s((v) => v - 1 < 0 ? v : v - 1);
    }), () => d.destroy();
  }, [r, n, a]), /* @__PURE__ */ pt.jsxs("div", { className: `image-mobile-view-layout ${e}`, ref: c, children: [
    /* @__PURE__ */ pt.jsx(
      "div",
      {
        className: "image-view-box",
        style: {
          transform: `translateX(-${a * document.body.clientWidth}px)`,
          width: `${r.length * 100}%`
        },
        children: r.map((l, d) => /* @__PURE__ */ pt.jsx("div", { className: "image-item", children: /* @__PURE__ */ pt.jsx("img", { src: l, alt: "" }) }, d))
      }
    ),
    /* @__PURE__ */ pt.jsxs("span", { className: "label-index", children: [
      a + 1,
      " / ",
      r.length
    ] })
  ] });
}
const Ka = function({ visible: r, onClose: t, imageList: e, current: n, className: a }) {
  const s = Oe.useRef(document.createElement("div"));
  return Oe.useEffect(() => {
    const c = s.current;
    return document.body.appendChild(c), () => {
      document.body.removeChild(c);
    };
  }, []), Jn.createPortal(
    /* @__PURE__ */ pt.jsx(Ba, { type: "alpha", children: r ? /* @__PURE__ */ pt.jsx(Za, { className: a, onClose: t, current: n, imageList: e }, "animat-image-layout") : null }),
    s.current
  );
};
export {
  Za as ImageMobileView,
  Ka as default
};
