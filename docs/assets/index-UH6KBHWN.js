(function () {
  const m = document.createElement("link").relList;
  if (m && m.supports && m.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) f(s);
  new MutationObserver((s) => {
    for (const h of s)
      if (h.type === "childList")
        for (const S of h.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(s) {
    const h = {};
    return (
      s.integrity && (h.integrity = s.integrity),
      s.referrerPolicy && (h.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function f(s) {
    if (s.ep) return;
    s.ep = !0;
    const h = d(s);
    fetch(s.href, h);
  }
})();
function Dv(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default")
    ? c.default
    : c;
}
var Sf = { exports: {} },
  Un = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function Uv() {
  if (jd) return Un;
  jd = 1;
  var c = Symbol.for("react.transitional.element"),
    m = Symbol.for("react.fragment");
  function d(f, s, h) {
    var S = null;
    if (
      (h !== void 0 && (S = "" + h),
      s.key !== void 0 && (S = "" + s.key),
      "key" in s)
    ) {
      h = {};
      for (var T in s) T !== "key" && (h[T] = s[T]);
    } else h = s;
    return (
      (s = h.ref),
      { $$typeof: c, type: f, key: S, ref: s !== void 0 ? s : null, props: h }
    );
  }
  return (Un.Fragment = m), (Un.jsx = d), (Un.jsxs = d), Un;
}
var Dd;
function wv() {
  return Dd || ((Dd = 1), (Sf.exports = Uv())), Sf.exports;
}
var b = wv(),
  Ef = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ud;
function Cv() {
  if (Ud) return ce;
  Ud = 1;
  var c = Symbol.for("react.transitional.element"),
    m = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    S = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    o = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function z(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (_ && p[_]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var q = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    j = Object.assign,
    L = {};
  function Q(p, H, Z) {
    (this.props = p),
      (this.context = H),
      (this.refs = L),
      (this.updater = Z || q);
  }
  (Q.prototype.isReactComponent = {}),
    (Q.prototype.setState = function (p, H) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, p, H, "setState");
    }),
    (Q.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function B() {}
  B.prototype = Q.prototype;
  function V(p, H, Z) {
    (this.props = p),
      (this.context = H),
      (this.refs = L),
      (this.updater = Z || q);
  }
  var I = (V.prototype = new B());
  (I.constructor = V), j(I, Q.prototype), (I.isPureReactComponent = !0);
  var re = Array.isArray,
    P = { H: null, A: null, T: null, S: null, V: null },
    ye = Object.prototype.hasOwnProperty;
  function Te(p, H, Z, Y, K, ie) {
    return (
      (Z = ie.ref),
      { $$typeof: c, type: p, key: H, ref: Z !== void 0 ? Z : null, props: ie }
    );
  }
  function ne(p, H) {
    return Te(p.type, H, void 0, void 0, void 0, p.props);
  }
  function he(p) {
    return typeof p == "object" && p !== null && p.$$typeof === c;
  }
  function De(p) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (Z) {
        return H[Z];
      })
    );
  }
  var J = /\/+/g;
  function G(p, H) {
    return typeof p == "object" && p !== null && p.key != null
      ? De("" + p.key)
      : H.toString(36);
  }
  function oe() {}
  function ee(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(oe, oe)
            : ((p.status = "pending"),
              p.then(
                function (H) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = H));
                },
                function (H) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = H));
                },
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function ge(p, H, Z, Y, K) {
    var ie = typeof p;
    (ie === "undefined" || ie === "boolean") && (p = null);
    var F = !1;
    if (p === null) F = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          F = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case c:
            case m:
              F = !0;
              break;
            case O:
              return (F = p._init), ge(F(p._payload), H, Z, Y, K);
          }
      }
    if (F)
      return (
        (K = K(p)),
        (F = Y === "" ? "." + G(p, 0) : Y),
        re(K)
          ? ((Z = ""),
            F != null && (Z = F.replace(J, "$&/") + "/"),
            ge(K, H, Z, "", function (He) {
              return He;
            }))
          : K != null &&
            (he(K) &&
              (K = ne(
                K,
                Z +
                  (K.key == null || (p && p.key === K.key)
                    ? ""
                    : ("" + K.key).replace(J, "$&/") + "/") +
                  F,
              )),
            H.push(K)),
        1
      );
    F = 0;
    var Se = Y === "" ? "." : Y + ":";
    if (re(p))
      for (var ue = 0; ue < p.length; ue++)
        (Y = p[ue]), (ie = Se + G(Y, ue)), (F += ge(Y, H, Z, ie, K));
    else if (((ue = z(p)), typeof ue == "function"))
      for (p = ue.call(p), ue = 0; !(Y = p.next()).done; )
        (Y = Y.value), (ie = Se + G(Y, ue++)), (F += ge(Y, H, Z, ie, K));
    else if (ie === "object") {
      if (typeof p.then == "function") return ge(ee(p), H, Z, Y, K);
      throw (
        ((H = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return F;
  }
  function M(p, H, Z) {
    if (p == null) return p;
    var Y = [],
      K = 0;
    return (
      ge(p, Y, "", "", function (ie) {
        return H.call(Z, ie, K++);
      }),
      Y
    );
  }
  function X(p) {
    if (p._status === -1) {
      var H = p._result;
      (H = H()),
        H.then(
          function (Z) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = Z));
          },
          function (Z) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = Z));
          },
        ),
        p._status === -1 && ((p._status = 0), (p._result = H));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var $ =
    typeof reportError == "function"
      ? reportError
      : function (p) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof p == "object" &&
                p !== null &&
                typeof p.message == "string"
                  ? String(p.message)
                  : String(p),
              error: p,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", p);
            return;
          }
          console.error(p);
        };
  function ve() {}
  return (
    (ce.Children = {
      map: M,
      forEach: function (p, H, Z) {
        M(
          p,
          function () {
            H.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (p) {
        var H = 0;
        return (
          M(p, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (p) {
        return (
          M(p, function (H) {
            return H;
          }) || []
        );
      },
      only: function (p) {
        if (!he(p))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return p;
      },
    }),
    (ce.Component = Q),
    (ce.Fragment = d),
    (ce.Profiler = s),
    (ce.PureComponent = V),
    (ce.StrictMode = f),
    (ce.Suspense = y),
    (ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (ce.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (p) {
        return P.H.useMemoCache(p);
      },
    }),
    (ce.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (ce.cloneElement = function (p, H, Z) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + ".",
        );
      var Y = j({}, p.props),
        K = p.key,
        ie = void 0;
      if (H != null)
        for (F in (H.ref !== void 0 && (ie = void 0),
        H.key !== void 0 && (K = "" + H.key),
        H))
          !ye.call(H, F) ||
            F === "key" ||
            F === "__self" ||
            F === "__source" ||
            (F === "ref" && H.ref === void 0) ||
            (Y[F] = H[F]);
      var F = arguments.length - 2;
      if (F === 1) Y.children = Z;
      else if (1 < F) {
        for (var Se = Array(F), ue = 0; ue < F; ue++)
          Se[ue] = arguments[ue + 2];
        Y.children = Se;
      }
      return Te(p.type, K, void 0, void 0, ie, Y);
    }),
    (ce.createContext = function (p) {
      return (
        (p = {
          $$typeof: S,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: h, _context: p }),
        p
      );
    }),
    (ce.createElement = function (p, H, Z) {
      var Y,
        K = {},
        ie = null;
      if (H != null)
        for (Y in (H.key !== void 0 && (ie = "" + H.key), H))
          ye.call(H, Y) &&
            Y !== "key" &&
            Y !== "__self" &&
            Y !== "__source" &&
            (K[Y] = H[Y]);
      var F = arguments.length - 2;
      if (F === 1) K.children = Z;
      else if (1 < F) {
        for (var Se = Array(F), ue = 0; ue < F; ue++)
          Se[ue] = arguments[ue + 2];
        K.children = Se;
      }
      if (p && p.defaultProps)
        for (Y in ((F = p.defaultProps), F)) K[Y] === void 0 && (K[Y] = F[Y]);
      return Te(p, ie, void 0, void 0, null, K);
    }),
    (ce.createRef = function () {
      return { current: null };
    }),
    (ce.forwardRef = function (p) {
      return { $$typeof: T, render: p };
    }),
    (ce.isValidElement = he),
    (ce.lazy = function (p) {
      return { $$typeof: O, _payload: { _status: -1, _result: p }, _init: X };
    }),
    (ce.memo = function (p, H) {
      return { $$typeof: o, type: p, compare: H === void 0 ? null : H };
    }),
    (ce.startTransition = function (p) {
      var H = P.T,
        Z = {};
      P.T = Z;
      try {
        var Y = p(),
          K = P.S;
        K !== null && K(Z, Y),
          typeof Y == "object" &&
            Y !== null &&
            typeof Y.then == "function" &&
            Y.then(ve, $);
      } catch (ie) {
        $(ie);
      } finally {
        P.T = H;
      }
    }),
    (ce.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (ce.use = function (p) {
      return P.H.use(p);
    }),
    (ce.useActionState = function (p, H, Z) {
      return P.H.useActionState(p, H, Z);
    }),
    (ce.useCallback = function (p, H) {
      return P.H.useCallback(p, H);
    }),
    (ce.useContext = function (p) {
      return P.H.useContext(p);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (p, H) {
      return P.H.useDeferredValue(p, H);
    }),
    (ce.useEffect = function (p, H, Z) {
      var Y = P.H;
      if (typeof Z == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return Y.useEffect(p, H);
    }),
    (ce.useId = function () {
      return P.H.useId();
    }),
    (ce.useImperativeHandle = function (p, H, Z) {
      return P.H.useImperativeHandle(p, H, Z);
    }),
    (ce.useInsertionEffect = function (p, H) {
      return P.H.useInsertionEffect(p, H);
    }),
    (ce.useLayoutEffect = function (p, H) {
      return P.H.useLayoutEffect(p, H);
    }),
    (ce.useMemo = function (p, H) {
      return P.H.useMemo(p, H);
    }),
    (ce.useOptimistic = function (p, H) {
      return P.H.useOptimistic(p, H);
    }),
    (ce.useReducer = function (p, H, Z) {
      return P.H.useReducer(p, H, Z);
    }),
    (ce.useRef = function (p) {
      return P.H.useRef(p);
    }),
    (ce.useState = function (p) {
      return P.H.useState(p);
    }),
    (ce.useSyncExternalStore = function (p, H, Z) {
      return P.H.useSyncExternalStore(p, H, Z);
    }),
    (ce.useTransition = function () {
      return P.H.useTransition();
    }),
    (ce.version = "19.1.0"),
    ce
  );
}
var wd;
function Df() {
  return wd || ((wd = 1), (Ef.exports = Cv())), Ef.exports;
}
var w = Df(),
  Tf = { exports: {} },
  wn = {},
  Af = { exports: {} },
  Of = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd;
function Hv() {
  return (
    Cd ||
      ((Cd = 1),
      (function (c) {
        function m(M, X) {
          var $ = M.length;
          M.push(X);
          e: for (; 0 < $; ) {
            var ve = ($ - 1) >>> 1,
              p = M[ve];
            if (0 < s(p, X)) (M[ve] = X), (M[$] = p), ($ = ve);
            else break e;
          }
        }
        function d(M) {
          return M.length === 0 ? null : M[0];
        }
        function f(M) {
          if (M.length === 0) return null;
          var X = M[0],
            $ = M.pop();
          if ($ !== X) {
            M[0] = $;
            e: for (var ve = 0, p = M.length, H = p >>> 1; ve < H; ) {
              var Z = 2 * (ve + 1) - 1,
                Y = M[Z],
                K = Z + 1,
                ie = M[K];
              if (0 > s(Y, $))
                K < p && 0 > s(ie, Y)
                  ? ((M[ve] = ie), (M[K] = $), (ve = K))
                  : ((M[ve] = Y), (M[Z] = $), (ve = Z));
              else if (K < p && 0 > s(ie, $))
                (M[ve] = ie), (M[K] = $), (ve = K);
              else break e;
            }
          }
          return X;
        }
        function s(M, X) {
          var $ = M.sortIndex - X.sortIndex;
          return $ !== 0 ? $ : M.id - X.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          c.unstable_now = function () {
            return h.now();
          };
        } else {
          var S = Date,
            T = S.now();
          c.unstable_now = function () {
            return S.now() - T;
          };
        }
        var y = [],
          o = [],
          O = 1,
          _ = null,
          z = 3,
          q = !1,
          j = !1,
          L = !1,
          Q = !1,
          B = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          I = typeof setImmediate < "u" ? setImmediate : null;
        function re(M) {
          for (var X = d(o); X !== null; ) {
            if (X.callback === null) f(o);
            else if (X.startTime <= M)
              f(o), (X.sortIndex = X.expirationTime), m(y, X);
            else break;
            X = d(o);
          }
        }
        function P(M) {
          if (((L = !1), re(M), !j))
            if (d(y) !== null) (j = !0), ye || ((ye = !0), G());
            else {
              var X = d(o);
              X !== null && ge(P, X.startTime - M);
            }
        }
        var ye = !1,
          Te = -1,
          ne = 5,
          he = -1;
        function De() {
          return Q ? !0 : !(c.unstable_now() - he < ne);
        }
        function J() {
          if (((Q = !1), ye)) {
            var M = c.unstable_now();
            he = M;
            var X = !0;
            try {
              e: {
                (j = !1), L && ((L = !1), V(Te), (Te = -1)), (q = !0);
                var $ = z;
                try {
                  t: {
                    for (
                      re(M), _ = d(y);
                      _ !== null && !(_.expirationTime > M && De());

                    ) {
                      var ve = _.callback;
                      if (typeof ve == "function") {
                        (_.callback = null), (z = _.priorityLevel);
                        var p = ve(_.expirationTime <= M);
                        if (((M = c.unstable_now()), typeof p == "function")) {
                          (_.callback = p), re(M), (X = !0);
                          break t;
                        }
                        _ === d(y) && f(y), re(M);
                      } else f(y);
                      _ = d(y);
                    }
                    if (_ !== null) X = !0;
                    else {
                      var H = d(o);
                      H !== null && ge(P, H.startTime - M), (X = !1);
                    }
                  }
                  break e;
                } finally {
                  (_ = null), (z = $), (q = !1);
                }
                X = void 0;
              }
            } finally {
              X ? G() : (ye = !1);
            }
          }
        }
        var G;
        if (typeof I == "function")
          G = function () {
            I(J);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            ee = oe.port2;
          (oe.port1.onmessage = J),
            (G = function () {
              ee.postMessage(null);
            });
        } else
          G = function () {
            B(J, 0);
          };
        function ge(M, X) {
          Te = B(function () {
            M(c.unstable_now());
          }, X);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (c.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ne = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (c.unstable_next = function (M) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = z;
            }
            var $ = z;
            z = X;
            try {
              return M();
            } finally {
              z = $;
            }
          }),
          (c.unstable_requestPaint = function () {
            Q = !0;
          }),
          (c.unstable_runWithPriority = function (M, X) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var $ = z;
            z = M;
            try {
              return X();
            } finally {
              z = $;
            }
          }),
          (c.unstable_scheduleCallback = function (M, X, $) {
            var ve = c.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? ve + $ : ve))
                : ($ = ve),
              M)
            ) {
              case 1:
                var p = -1;
                break;
              case 2:
                p = 250;
                break;
              case 5:
                p = 1073741823;
                break;
              case 4:
                p = 1e4;
                break;
              default:
                p = 5e3;
            }
            return (
              (p = $ + p),
              (M = {
                id: O++,
                callback: X,
                priorityLevel: M,
                startTime: $,
                expirationTime: p,
                sortIndex: -1,
              }),
              $ > ve
                ? ((M.sortIndex = $),
                  m(o, M),
                  d(y) === null &&
                    M === d(o) &&
                    (L ? (V(Te), (Te = -1)) : (L = !0), ge(P, $ - ve)))
                : ((M.sortIndex = p),
                  m(y, M),
                  j || q || ((j = !0), ye || ((ye = !0), G()))),
              M
            );
          }),
          (c.unstable_shouldYield = De),
          (c.unstable_wrapCallback = function (M) {
            var X = z;
            return function () {
              var $ = z;
              z = X;
              try {
                return M.apply(this, arguments);
              } finally {
                z = $;
              }
            };
          });
      })(Of)),
    Of
  );
}
var Hd;
function qv() {
  return Hd || ((Hd = 1), (Af.exports = Hv())), Af.exports;
}
var Nf = { exports: {} },
  tt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Bv() {
  if (qd) return tt;
  qd = 1;
  var c = Df();
  function m(y) {
    var o = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      o += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        o += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      o +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d() {}
  var f = {
      d: {
        f: d,
        r: function () {
          throw Error(m(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function h(y, o, O) {
    var _ =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: _ == null ? null : "" + _,
      children: y,
      containerInfo: o,
      implementation: O,
    };
  }
  var S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function T(y, o) {
    if (y === "font") return "";
    if (typeof o == "string") return o === "use-credentials" ? o : "";
  }
  return (
    (tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (tt.createPortal = function (y, o) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!o || (o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11))
        throw Error(m(299));
      return h(y, o, null, O);
    }),
    (tt.flushSync = function (y) {
      var o = S.T,
        O = f.p;
      try {
        if (((S.T = null), (f.p = 2), y)) return y();
      } finally {
        (S.T = o), (f.p = O), f.d.f();
      }
    }),
    (tt.preconnect = function (y, o) {
      typeof y == "string" &&
        (o
          ? ((o = o.crossOrigin),
            (o =
              typeof o == "string"
                ? o === "use-credentials"
                  ? o
                  : ""
                : void 0))
          : (o = null),
        f.d.C(y, o));
    }),
    (tt.prefetchDNS = function (y) {
      typeof y == "string" && f.d.D(y);
    }),
    (tt.preinit = function (y, o) {
      if (typeof y == "string" && o && typeof o.as == "string") {
        var O = o.as,
          _ = T(O, o.crossOrigin),
          z = typeof o.integrity == "string" ? o.integrity : void 0,
          q = typeof o.fetchPriority == "string" ? o.fetchPriority : void 0;
        O === "style"
          ? f.d.S(y, typeof o.precedence == "string" ? o.precedence : void 0, {
              crossOrigin: _,
              integrity: z,
              fetchPriority: q,
            })
          : O === "script" &&
            f.d.X(y, {
              crossOrigin: _,
              integrity: z,
              fetchPriority: q,
              nonce: typeof o.nonce == "string" ? o.nonce : void 0,
            });
      }
    }),
    (tt.preinitModule = function (y, o) {
      if (typeof y == "string")
        if (typeof o == "object" && o !== null) {
          if (o.as == null || o.as === "script") {
            var O = T(o.as, o.crossOrigin);
            f.d.M(y, {
              crossOrigin: O,
              integrity: typeof o.integrity == "string" ? o.integrity : void 0,
              nonce: typeof o.nonce == "string" ? o.nonce : void 0,
            });
          }
        } else o == null && f.d.M(y);
    }),
    (tt.preload = function (y, o) {
      if (
        typeof y == "string" &&
        typeof o == "object" &&
        o !== null &&
        typeof o.as == "string"
      ) {
        var O = o.as,
          _ = T(O, o.crossOrigin);
        f.d.L(y, O, {
          crossOrigin: _,
          integrity: typeof o.integrity == "string" ? o.integrity : void 0,
          nonce: typeof o.nonce == "string" ? o.nonce : void 0,
          type: typeof o.type == "string" ? o.type : void 0,
          fetchPriority:
            typeof o.fetchPriority == "string" ? o.fetchPriority : void 0,
          referrerPolicy:
            typeof o.referrerPolicy == "string" ? o.referrerPolicy : void 0,
          imageSrcSet:
            typeof o.imageSrcSet == "string" ? o.imageSrcSet : void 0,
          imageSizes: typeof o.imageSizes == "string" ? o.imageSizes : void 0,
          media: typeof o.media == "string" ? o.media : void 0,
        });
      }
    }),
    (tt.preloadModule = function (y, o) {
      if (typeof y == "string")
        if (o) {
          var O = T(o.as, o.crossOrigin);
          f.d.m(y, {
            as: typeof o.as == "string" && o.as !== "script" ? o.as : void 0,
            crossOrigin: O,
            integrity: typeof o.integrity == "string" ? o.integrity : void 0,
          });
        } else f.d.m(y);
    }),
    (tt.requestFormReset = function (y) {
      f.d.r(y);
    }),
    (tt.unstable_batchedUpdates = function (y, o) {
      return y(o);
    }),
    (tt.useFormState = function (y, o, O) {
      return S.H.useFormState(y, o, O);
    }),
    (tt.useFormStatus = function () {
      return S.H.useHostTransitionStatus();
    }),
    (tt.version = "19.1.0"),
    tt
  );
}
var Bd;
function Yv() {
  if (Bd) return Nf.exports;
  Bd = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (m) {
        console.error(m);
      }
  }
  return c(), (Nf.exports = Bv()), Nf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function Lv() {
  if (Yd) return wn;
  Yd = 1;
  var c = qv(),
    m = Df(),
    d = Yv();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function S(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (h(e) !== e) throw Error(f(188));
  }
  function y(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return T(n), e;
          if (u === a) return T(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = u);
      else {
        for (var i = !1, r = n.child; r; ) {
          if (r === l) {
            (i = !0), (l = n), (a = u);
            break;
          }
          if (r === a) {
            (i = !0), (a = n), (l = u);
            break;
          }
          r = r.sibling;
        }
        if (!i) {
          for (r = u.child; r; ) {
            if (r === l) {
              (i = !0), (l = u), (a = n);
              break;
            }
            if (r === a) {
              (i = !0), (a = u), (l = n);
              break;
            }
            r = r.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function o(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = o(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var O = Object.assign,
    _ = Symbol.for("react.element"),
    z = Symbol.for("react.transitional.element"),
    q = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    V = Symbol.for("react.consumer"),
    I = Symbol.for("react.context"),
    re = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    ye = Symbol.for("react.suspense_list"),
    Te = Symbol.for("react.memo"),
    ne = Symbol.for("react.lazy"),
    he = Symbol.for("react.activity"),
    De = Symbol.for("react.memo_cache_sentinel"),
    J = Symbol.iterator;
  function G(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (J && e[J]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case Q:
        return "Profiler";
      case L:
        return "StrictMode";
      case P:
        return "Suspense";
      case ye:
        return "SuspenseList";
      case he:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case q:
          return "Portal";
        case I:
          return (e.displayName || "Context") + ".Provider";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case re:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Te:
          return (
            (t = e.displayName || null), t !== null ? t : ee(e.type) || "Memo"
          );
        case ne:
          (t = e._payload), (e = e._init);
          try {
            return ee(e(t));
          } catch {}
      }
    return null;
  }
  var ge = Array.isArray,
    M = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    ve = [],
    p = -1;
  function H(e) {
    return { current: e };
  }
  function Z(e) {
    0 > p || ((e.current = ve[p]), (ve[p] = null), p--);
  }
  function Y(e, t) {
    p++, (ve[p] = e.current), (e.current = t);
  }
  var K = H(null),
    ie = H(null),
    F = H(null),
    Se = H(null);
  function ue(e, t) {
    switch ((Y(F, t), Y(ie, e), Y(K, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ud(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = ud(t)), (e = id(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Z(K), Y(K, e);
  }
  function He() {
    Z(K), Z(ie), Z(F);
  }
  function xt(e) {
    e.memoizedState !== null && Y(Se, e);
    var t = K.current,
      l = id(t, e.type);
    t !== l && (Y(ie, e), Y(K, l));
  }
  function ft(e) {
    ie.current === e && (Z(K), Z(ie)),
      Se.current === e && (Z(Se), (zn._currentValue = $));
  }
  var rt = Object.prototype.hasOwnProperty,
    Me = c.unstable_scheduleCallback,
    be = c.unstable_cancelCallback,
    Pe = c.unstable_shouldYield,
    Ut = c.unstable_requestPaint,
    ot = c.unstable_now,
    dm = c.unstable_getCurrentPriorityLevel,
    Bf = c.unstable_ImmediatePriority,
    Yf = c.unstable_UserBlockingPriority,
    Xn = c.unstable_NormalPriority,
    mm = c.unstable_LowPriority,
    Lf = c.unstable_IdlePriority,
    hm = c.log,
    vm = c.unstable_setDisableYieldValue,
    Ca = null,
    st = null;
  function ul(e) {
    if (
      (typeof hm == "function" && vm(e),
      st && typeof st.setStrictMode == "function")
    )
      try {
        st.setStrictMode(Ca, e);
      } catch {}
  }
  var dt = Math.clz32 ? Math.clz32 : gm,
    ym = Math.log,
    pm = Math.LN2;
  function gm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ym(e) / pm) | 0)) | 0;
  }
  var Qn = 256,
    Zn = 4194304;
  function Ml(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var r = a & 134217727;
    return (
      r !== 0
        ? ((a = r & ~u),
          a !== 0
            ? (n = Ml(a))
            : ((i &= r),
              i !== 0
                ? (n = Ml(i))
                : l || ((l = r & ~e), l !== 0 && (n = Ml(l)))))
        : ((r = a & ~u),
          r !== 0
            ? (n = Ml(r))
            : i !== 0
              ? (n = Ml(i))
              : l || ((l = a & ~e), l !== 0 && (n = Ml(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Ha(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function bm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Gf() {
    var e = Qn;
    return (Qn <<= 1), (Qn & 4194048) === 0 && (Qn = 256), e;
  }
  function Xf() {
    var e = Zn;
    return (Zn <<= 1), (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function ri(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function qa(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function xm(e, t, l, a, n, u) {
    var i = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var r = e.entanglements,
      v = e.expirationTimes,
      A = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var D = 31 - dt(l),
        C = 1 << D;
      (r[D] = 0), (v[D] = -1);
      var N = A[D];
      if (N !== null)
        for (A[D] = null, D = 0; D < N.length; D++) {
          var R = N[D];
          R !== null && (R.lane &= -536870913);
        }
      l &= ~C;
    }
    a !== 0 && Qf(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
  }
  function Qf(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - dt(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function Zf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - dt(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function oi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function si(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vf() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Od(e.type));
  }
  function Sm(e, t) {
    var l = X.p;
    try {
      return (X.p = e), t();
    } finally {
      X.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2),
    Ie = "__reactFiber$" + il,
    at = "__reactProps$" + il,
    Jl = "__reactContainer$" + il,
    di = "__reactEvents$" + il,
    Em = "__reactListeners$" + il,
    Tm = "__reactHandles$" + il,
    Kf = "__reactResources$" + il,
    Ba = "__reactMarker$" + il;
  function mi(e) {
    delete e[Ie], delete e[at], delete e[di], delete e[Em], delete e[Tm];
  }
  function $l(e) {
    var t = e[Ie];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Jl] || l[Ie])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = od(e); e !== null; ) {
            if ((l = e[Ie])) return l;
            e = od(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function Wl(e) {
    if ((e = e[Ie] || e[Jl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ya(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Fl(e) {
    var t = e[Kf];
    return (
      t ||
        (t = e[Kf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ve(e) {
    e[Ba] = !0;
  }
  var kf = new Set(),
    Jf = {};
  function _l(e, t) {
    Pl(e, t), Pl(e + "Capture", t);
  }
  function Pl(e, t) {
    for (Jf[e] = t, e = 0; e < t.length; e++) kf.add(t[e]);
  }
  var Am = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    $f = {},
    Wf = {};
  function Om(e) {
    return rt.call(Wf, e)
      ? !0
      : rt.call($f, e)
        ? !1
        : Am.test(e)
          ? (Wf[e] = !0)
          : (($f[e] = !0), !1);
  }
  function Kn(e, t, l) {
    if (Om(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function kn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Gt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var hi, Ff;
  function Il(e) {
    if (hi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (hi = (t && t[1]) || ""),
          (Ff =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      hi +
      e +
      Ff
    );
  }
  var vi = !1;
  function yi(e, t) {
    if (!e || vi) return "";
    vi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var C = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(C.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(C, []);
                } catch (R) {
                  var N = R;
                }
                Reflect.construct(e, [], C);
              } else {
                try {
                  C.call();
                } catch (R) {
                  N = R;
                }
                e.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                N = R;
              }
              (C = e()) &&
                typeof C.catch == "function" &&
                C.catch(function () {});
            }
          } catch (R) {
            if (R && N && typeof R.stack == "string") return [R.stack, N.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        r = u[1];
      if (i && r) {
        var v = i.split(`
`),
          A = r.split(`
`);
        for (
          n = a = 0;
          a < v.length && !v[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < A.length && !A[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === v.length || n === A.length)
          for (
            a = v.length - 1, n = A.length - 1;
            1 <= a && 0 <= n && v[a] !== A[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (v[a] !== A[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || v[a] !== A[n])) {
                  var D =
                    `
` + v[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      D.includes("<anonymous>") &&
                      (D = D.replace("<anonymous>", e.displayName)),
                    D
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (vi = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Il(l) : "";
  }
  function Nm(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Il(e.type);
      case 16:
        return Il("Lazy");
      case 13:
        return Il("Suspense");
      case 19:
        return Il("SuspenseList");
      case 0:
      case 15:
        return yi(e.type, !1);
      case 11:
        return yi(e.type.render, !1);
      case 1:
        return yi(e.type, !0);
      case 31:
        return Il("Activity");
      default:
        return "";
    }
  }
  function Pf(e) {
    try {
      var t = "";
      do (t += Nm(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function St(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function If(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Rm(e) {
    var t = If(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            (a = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Jn(e) {
    e._valueTracker || (e._valueTracker = Rm(e));
  }
  function er(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = If(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function $n(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var zm = /[\n"\\]/g;
  function Et(e) {
    return e.replace(zm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function pi(e, t, l, a, n, u, i, r) {
    (e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + St(t))
          : e.value !== "" + St(t) && (e.value = "" + St(t))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      t != null
        ? gi(e, i, St(t))
        : l != null
          ? gi(e, i, St(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.name = "" + St(r))
        : e.removeAttribute("name");
  }
  function tr(e, t, l, a, n, u, i, r) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (l = l != null ? "" + St(l) : ""),
        (t = t != null ? "" + St(t) : l),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = r ? e.checked : !!a),
      (e.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i);
  }
  function gi(e, t, l) {
    (t === "number" && $n(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function ea(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + St(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function lr(e, t, l) {
    if (
      t != null &&
      ((t = "" + St(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + St(l) : "";
  }
  function ar(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (ge(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = St(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a);
  }
  function ta(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Mm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function nr(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Mm.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function ur(e, t, l) {
    if (t != null && typeof t != "object") throw Error(f(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && nr(e, n, a);
    } else for (var u in t) t.hasOwnProperty(u) && nr(e, u, t[u]);
  }
  function bi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var _m = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    jm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Wn(e) {
    return jm.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var xi = null;
  function Si(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var la = null,
    aa = null;
  function ir(e) {
    var t = Wl(e);
    if (t && (e = t.stateNode)) {
      var l = e[at] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (pi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Et("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[at] || null;
                if (!n) throw Error(f(90));
                pi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && er(a);
          }
          break e;
        case "textarea":
          lr(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && ea(e, !!l.multiple, t, !1);
      }
    }
  }
  var Ei = !1;
  function cr(e, t, l) {
    if (Ei) return e(t, l);
    Ei = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ei = !1),
        (la !== null || aa !== null) &&
          (Cu(), la && ((t = la), (e = aa), (aa = la = null), ir(t), e)))
      )
        for (t = 0; t < e.length; t++) ir(e[t]);
    }
  }
  function La(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[at] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(f(231, t, typeof l));
    return l;
  }
  var Xt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ti = !1;
  if (Xt)
    try {
      var Ga = {};
      Object.defineProperty(Ga, "passive", {
        get: function () {
          Ti = !0;
        },
      }),
        window.addEventListener("test", Ga, Ga),
        window.removeEventListener("test", Ga, Ga);
    } catch {
      Ti = !1;
    }
  var cl = null,
    Ai = null,
    Fn = null;
  function fr() {
    if (Fn) return Fn;
    var e,
      t = Ai,
      l = t.length,
      a,
      n = "value" in cl ? cl.value : cl.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var i = l - e;
    for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
    return (Fn = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Pn(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function In() {
    return !0;
  }
  function rr() {
    return !1;
  }
  function nt(e) {
    function t(l, a, n, u, i) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var r in e)
        e.hasOwnProperty(r) && ((l = e[r]), (this[r] = l ? l(u) : u[r]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? In
          : rr),
        (this.isPropagationStopped = rr),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = In));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = In));
        },
        persist: function () {},
        isPersistent: In,
      }),
      t
    );
  }
  var jl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eu = nt(jl),
    Xa = O({}, jl, { view: 0, detail: 0 }),
    Dm = nt(Xa),
    Oi,
    Ni,
    Qa,
    tu = O({}, Xa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Qa &&
              (Qa && e.type === "mousemove"
                ? ((Oi = e.screenX - Qa.screenX), (Ni = e.screenY - Qa.screenY))
                : (Ni = Oi = 0),
              (Qa = e)),
            Oi);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ni;
      },
    }),
    or = nt(tu),
    Um = O({}, tu, { dataTransfer: 0 }),
    wm = nt(Um),
    Cm = O({}, Xa, { relatedTarget: 0 }),
    Ri = nt(Cm),
    Hm = O({}, jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qm = nt(Hm),
    Bm = O({}, jl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ym = nt(Bm),
    Lm = O({}, jl, { data: 0 }),
    sr = nt(Lm),
    Gm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Xm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Qm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Qm[e])
        ? !!t[e]
        : !1;
  }
  function zi() {
    return Zm;
  }
  var Vm = O({}, Xa, {
      key: function (e) {
        if (e.key) {
          var t = Gm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Pn(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Xm[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zi,
      charCode: function (e) {
        return e.type === "keypress" ? Pn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Pn(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Km = nt(Vm),
    km = O({}, tu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    dr = nt(km),
    Jm = O({}, Xa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zi,
    }),
    $m = nt(Jm),
    Wm = O({}, jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fm = nt(Wm),
    Pm = O({}, tu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Im = nt(Pm),
    eh = O({}, jl, { newState: 0, oldState: 0 }),
    th = nt(eh),
    lh = [9, 13, 27, 32],
    Mi = Xt && "CompositionEvent" in window,
    Za = null;
  Xt && "documentMode" in document && (Za = document.documentMode);
  var ah = Xt && "TextEvent" in window && !Za,
    mr = Xt && (!Mi || (Za && 8 < Za && 11 >= Za)),
    hr = " ",
    vr = !1;
  function yr(e, t) {
    switch (e) {
      case "keyup":
        return lh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function pr(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var na = !1;
  function nh(e, t) {
    switch (e) {
      case "compositionend":
        return pr(t);
      case "keypress":
        return t.which !== 32 ? null : ((vr = !0), hr);
      case "textInput":
        return (e = t.data), e === hr && vr ? null : e;
      default:
        return null;
    }
  }
  function uh(e, t) {
    if (na)
      return e === "compositionend" || (!Mi && yr(e, t))
        ? ((e = fr()), (Fn = Ai = cl = null), (na = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return mr && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ih = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function gr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ih[e.type] : t === "textarea";
  }
  function br(e, t, l, a) {
    la ? (aa ? aa.push(a) : (aa = [a])) : (la = a),
      (t = Gu(t, "onChange")),
      0 < t.length &&
        ((l = new eu("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var Va = null,
    Ka = null;
  function ch(e) {
    ed(e, 0);
  }
  function lu(e) {
    var t = Ya(e);
    if (er(t)) return e;
  }
  function xr(e, t) {
    if (e === "change") return t;
  }
  var Sr = !1;
  if (Xt) {
    var _i;
    if (Xt) {
      var ji = "oninput" in document;
      if (!ji) {
        var Er = document.createElement("div");
        Er.setAttribute("oninput", "return;"),
          (ji = typeof Er.oninput == "function");
      }
      _i = ji;
    } else _i = !1;
    Sr = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function Tr() {
    Va && (Va.detachEvent("onpropertychange", Ar), (Ka = Va = null));
  }
  function Ar(e) {
    if (e.propertyName === "value" && lu(Ka)) {
      var t = [];
      br(t, Ka, e, Si(e)), cr(ch, t);
    }
  }
  function fh(e, t, l) {
    e === "focusin"
      ? (Tr(), (Va = t), (Ka = l), Va.attachEvent("onpropertychange", Ar))
      : e === "focusout" && Tr();
  }
  function rh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return lu(Ka);
  }
  function oh(e, t) {
    if (e === "click") return lu(t);
  }
  function sh(e, t) {
    if (e === "input" || e === "change") return lu(t);
  }
  function dh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var mt = typeof Object.is == "function" ? Object.is : dh;
  function ka(e, t) {
    if (mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!rt.call(t, n) || !mt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Or(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Nr(e, t) {
    var l = Or(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Or(l);
    }
  }
  function Rr(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Rr(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function zr(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = $n(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = $n(e.document);
    }
    return t;
  }
  function Di(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var mh = Xt && "documentMode" in document && 11 >= document.documentMode,
    ua = null,
    Ui = null,
    Ja = null,
    wi = !1;
  function Mr(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    wi ||
      ua == null ||
      ua !== $n(a) ||
      ((a = ua),
      "selectionStart" in a && Di(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ja && ka(Ja, a)) ||
        ((Ja = a),
        (a = Gu(Ui, "onSelect")),
        0 < a.length &&
          ((t = new eu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = ua))));
  }
  function Dl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ia = {
      animationend: Dl("Animation", "AnimationEnd"),
      animationiteration: Dl("Animation", "AnimationIteration"),
      animationstart: Dl("Animation", "AnimationStart"),
      transitionrun: Dl("Transition", "TransitionRun"),
      transitionstart: Dl("Transition", "TransitionStart"),
      transitioncancel: Dl("Transition", "TransitionCancel"),
      transitionend: Dl("Transition", "TransitionEnd"),
    },
    Ci = {},
    _r = {};
  Xt &&
    ((_r = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ia.animationend.animation,
      delete ia.animationiteration.animation,
      delete ia.animationstart.animation),
    "TransitionEvent" in window || delete ia.transitionend.transition);
  function Ul(e) {
    if (Ci[e]) return Ci[e];
    if (!ia[e]) return e;
    var t = ia[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in _r) return (Ci[e] = t[l]);
    return e;
  }
  var jr = Ul("animationend"),
    Dr = Ul("animationiteration"),
    Ur = Ul("animationstart"),
    hh = Ul("transitionrun"),
    vh = Ul("transitionstart"),
    yh = Ul("transitioncancel"),
    wr = Ul("transitionend"),
    Cr = new Map(),
    Hi =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Hi.push("scrollEnd");
  function _t(e, t) {
    Cr.set(e, t), _l(t, [e]);
  }
  var Hr = new WeakMap();
  function Tt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Hr.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Pf(t) }), Hr.set(e, t), t);
    }
    return { value: e, source: t, stack: Pf(t) };
  }
  var At = [],
    ca = 0,
    qi = 0;
  function au() {
    for (var e = ca, t = (qi = ca = 0); t < e; ) {
      var l = At[t];
      At[t++] = null;
      var a = At[t];
      At[t++] = null;
      var n = At[t];
      At[t++] = null;
      var u = At[t];
      if (((At[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n);
      }
      u !== 0 && qr(l, n, u);
    }
  }
  function nu(e, t, l, a) {
    (At[ca++] = e),
      (At[ca++] = t),
      (At[ca++] = l),
      (At[ca++] = a),
      (qi |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function Bi(e, t, l, a) {
    return nu(e, t, l, a), uu(e);
  }
  function fa(e, t) {
    return nu(e, null, null, t), uu(e);
  }
  function qr(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      (u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - dt(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function uu(e) {
    if (50 < xn) throw ((xn = 0), (Zc = null), Error(f(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ra = {};
  function ph(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ht(e, t, l, a) {
    return new ph(e, t, l, a);
  }
  function Yi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Qt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = ht(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Br(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function iu(e, t, l, a, n, u) {
    var i = 0;
    if (((a = e), typeof e == "function")) Yi(e) && (i = 1);
    else if (typeof e == "string")
      i = bv(e, l, K.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case he:
          return (e = ht(31, l, t, n)), (e.elementType = he), (e.lanes = u), e;
        case j:
          return wl(l.children, n, u, t);
        case L:
          (i = 8), (n |= 24);
          break;
        case Q:
          return (
            (e = ht(12, l, t, n | 2)), (e.elementType = Q), (e.lanes = u), e
          );
        case P:
          return (e = ht(13, l, t, n)), (e.elementType = P), (e.lanes = u), e;
        case ye:
          return (e = ht(19, l, t, n)), (e.elementType = ye), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case B:
              case I:
                i = 10;
                break e;
              case V:
                i = 9;
                break e;
              case re:
                i = 11;
                break e;
              case Te:
                i = 14;
                break e;
              case ne:
                (i = 16), (a = null);
                break e;
            }
          (i = 29),
            (l = Error(f(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = ht(i, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = u), t
    );
  }
  function wl(e, t, l, a) {
    return (e = ht(7, e, a, t)), (e.lanes = l), e;
  }
  function Li(e, t, l) {
    return (e = ht(6, e, null, t)), (e.lanes = l), e;
  }
  function Gi(e, t, l) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var oa = [],
    sa = 0,
    cu = null,
    fu = 0,
    Ot = [],
    Nt = 0,
    Cl = null,
    Zt = 1,
    Vt = "";
  function Hl(e, t) {
    (oa[sa++] = fu), (oa[sa++] = cu), (cu = e), (fu = t);
  }
  function Yr(e, t, l) {
    (Ot[Nt++] = Zt), (Ot[Nt++] = Vt), (Ot[Nt++] = Cl), (Cl = e);
    var a = Zt;
    e = Vt;
    var n = 32 - dt(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var u = 32 - dt(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      (u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (Zt = (1 << (32 - dt(t) + n)) | (l << n) | a),
        (Vt = u + e);
    } else (Zt = (1 << u) | (l << n) | a), (Vt = e);
  }
  function Xi(e) {
    e.return !== null && (Hl(e, 1), Yr(e, 1, 0));
  }
  function Qi(e) {
    for (; e === cu; )
      (cu = oa[--sa]), (oa[sa] = null), (fu = oa[--sa]), (oa[sa] = null);
    for (; e === Cl; )
      (Cl = Ot[--Nt]),
        (Ot[Nt] = null),
        (Vt = Ot[--Nt]),
        (Ot[Nt] = null),
        (Zt = Ot[--Nt]),
        (Ot[Nt] = null);
  }
  var lt = null,
    qe = null,
    Ee = !1,
    ql = null,
    wt = !1,
    Zi = Error(f(519));
  function Bl(e) {
    var t = Error(f(418, ""));
    throw (Fa(Tt(t, e)), Zi);
  }
  function Lr(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ie] = e), (t[at] = a), l)) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++) me(En[l], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t),
          tr(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          Jn(t);
        break;
      case "select":
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), ar(t, a.value, a.defaultValue, a.children), Jn(t);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      nd(t.textContent, l)
        ? (a.popover != null && (me("beforetoggle", t), me("toggle", t)),
          a.onScroll != null && me("scroll", t),
          a.onScrollEnd != null && me("scrollend", t),
          a.onClick != null && (t.onclick = Xu),
          (t = !0))
        : (t = !1),
      t || Bl(e);
  }
  function Gr(e) {
    for (lt = e.return; lt; )
      switch (lt.tag) {
        case 5:
        case 13:
          wt = !1;
          return;
        case 27:
        case 3:
          wt = !0;
          return;
        default:
          lt = lt.return;
      }
  }
  function $a(e) {
    if (e !== lt) return !1;
    if (!Ee) return Gr(e), (Ee = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || cf(e.type, e.memoizedProps))),
        (l = !l)),
      l && qe && Bl(e),
      Gr(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                qe = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        qe = null;
      }
    } else
      t === 27
        ? ((t = qe), Tl(e.type) ? ((e = sf), (sf = null), (qe = e)) : (qe = t))
        : (qe = lt ? Dt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Wa() {
    (qe = lt = null), (Ee = !1);
  }
  function Xr() {
    var e = ql;
    return (
      e !== null &&
        (ct === null ? (ct = e) : ct.push.apply(ct, e), (ql = null)),
      e
    );
  }
  function Fa(e) {
    ql === null ? (ql = [e]) : ql.push(e);
  }
  var Vi = H(null),
    Yl = null,
    Kt = null;
  function fl(e, t, l) {
    Y(Vi, t._currentValue), (t._currentValue = l);
  }
  function kt(e) {
    (e._currentValue = Vi.current), Z(Vi);
  }
  function Ki(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function ki(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var r = u;
          u = n;
          for (var v = 0; v < t.length; v++)
            if (r.context === t[v]) {
              (u.lanes |= l),
                (r = u.alternate),
                r !== null && (r.lanes |= l),
                Ki(u.return, l, e),
                a || (i = null);
              break e;
            }
          u = r.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(f(341));
        (i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Ki(i, l, e),
          (i = null);
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            (n.return = i.return), (i = n);
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function Pa(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var r = n.type;
          mt(n.pendingProps.value, i.value) ||
            (e !== null ? e.push(r) : (e = [r]));
        }
      } else if (n === Se.current) {
        if (((i = n.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(zn) : (e = [zn]));
      }
      n = n.return;
    }
    e !== null && ki(t, e, l, a), (t.flags |= 262144);
  }
  function ru(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ll(e) {
    (Yl = e),
      (Kt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function et(e) {
    return Qr(Yl, e);
  }
  function ou(e, t) {
    return Yl === null && Ll(e), Qr(e, t);
  }
  function Qr(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Kt === null)) {
      if (e === null) throw Error(f(308));
      (Kt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Kt = Kt.next = t;
    return l;
  }
  var gh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    bh = c.unstable_scheduleCallback,
    xh = c.unstable_NormalPriority,
    Qe = {
      $$typeof: I,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ji() {
    return { controller: new gh(), data: new Map(), refCount: 0 };
  }
  function Ia(e) {
    e.refCount--,
      e.refCount === 0 &&
        bh(xh, function () {
          e.controller.abort();
        });
  }
  var en = null,
    $i = 0,
    da = 0,
    ma = null;
  function Sh(e, t) {
    if (en === null) {
      var l = (en = []);
      ($i = 0),
        (da = Fc()),
        (ma = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return $i++, t.then(Zr, Zr), t;
  }
  function Zr() {
    if (--$i === 0 && en !== null) {
      ma !== null && (ma.status = "fulfilled");
      var e = en;
      (en = null), (da = 0), (ma = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Eh(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Vr = M.S;
  M.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Sh(e, t),
      Vr !== null && Vr(e, t);
  };
  var Gl = H(null);
  function Wi() {
    var e = Gl.current;
    return e !== null ? e : je.pooledCache;
  }
  function su(e, t) {
    t === null ? Y(Gl, Gl.current) : Y(Gl, t.pool);
  }
  function Kr() {
    var e = Wi();
    return e === null ? null : { parent: Qe._currentValue, pool: e };
  }
  var tn = Error(f(460)),
    kr = Error(f(474)),
    du = Error(f(542)),
    Fi = { then: function () {} };
  function Jr(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function mu() {}
  function $r(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(mu, mu), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Fr(e), e);
      default:
        if (typeof t.status == "string") t.then(mu, mu);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(f(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              },
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Fr(e), e);
        }
        throw ((ln = t), tn);
    }
  }
  var ln = null;
  function Wr() {
    if (ln === null) throw Error(f(459));
    var e = ln;
    return (ln = null), e;
  }
  function Fr(e) {
    if (e === tn || e === du) throw Error(f(483));
  }
  var rl = !1;
  function Pi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ii(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function ol(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function sl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ae & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = uu(e)),
        qr(e, null, l),
        t
      );
    }
    return nu(e, a, t, l), uu(e);
  }
  function an(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Zf(e, l);
    }
  }
  function ec(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          u === null ? (n = u = i) : (u = u.next = i), (l = l.next);
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var tc = !1;
  function nn() {
    if (tc) {
      var e = ma;
      if (e !== null) throw e;
    }
  }
  function un(e, t, l, a) {
    tc = !1;
    var n = e.updateQueue;
    rl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var v = r,
        A = v.next;
      (v.next = null), i === null ? (u = A) : (i.next = A), (i = v);
      var D = e.alternate;
      D !== null &&
        ((D = D.updateQueue),
        (r = D.lastBaseUpdate),
        r !== i &&
          (r === null ? (D.firstBaseUpdate = A) : (r.next = A),
          (D.lastBaseUpdate = v)));
    }
    if (u !== null) {
      var C = n.baseState;
      (i = 0), (D = A = v = null), (r = u);
      do {
        var N = r.lane & -536870913,
          R = N !== r.lane;
        if (R ? (pe & N) === N : (a & N) === N) {
          N !== 0 && N === da && (tc = !0),
            D !== null &&
              (D = D.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ae = e,
              te = r;
            N = t;
            var ze = l;
            switch (te.tag) {
              case 1:
                if (((ae = te.payload), typeof ae == "function")) {
                  C = ae.call(ze, C, N);
                  break e;
                }
                C = ae;
                break e;
              case 3:
                ae.flags = (ae.flags & -65537) | 128;
              case 0:
                if (
                  ((ae = te.payload),
                  (N = typeof ae == "function" ? ae.call(ze, C, N) : ae),
                  N == null)
                )
                  break e;
                C = O({}, C, N);
                break e;
              case 2:
                rl = !0;
            }
          }
          (N = r.callback),
            N !== null &&
              ((e.flags |= 64),
              R && (e.flags |= 8192),
              (R = n.callbacks),
              R === null ? (n.callbacks = [N]) : R.push(N));
        } else
          (R = {
            lane: N,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            D === null ? ((A = D = R), (v = C)) : (D = D.next = R),
            (i |= N);
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          (R = r),
            (r = R.next),
            (R.next = null),
            (n.lastBaseUpdate = R),
            (n.shared.pending = null);
        }
      } while (!0);
      D === null && (v = C),
        (n.baseState = v),
        (n.firstBaseUpdate = A),
        (n.lastBaseUpdate = D),
        u === null && (n.shared.lanes = 0),
        (bl |= i),
        (e.lanes = i),
        (e.memoizedState = C);
    }
  }
  function Pr(e, t) {
    if (typeof e != "function") throw Error(f(191, e));
    e.call(t);
  }
  function Ir(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Pr(l[e], t);
  }
  var ha = H(null),
    hu = H(0);
  function eo(e, t) {
    (e = el), Y(hu, e), Y(ha, t), (el = e | t.baseLanes);
  }
  function lc() {
    Y(hu, el), Y(ha, ha.current);
  }
  function ac() {
    (el = hu.current), Z(ha), Z(hu);
  }
  var dl = 0,
    fe = null,
    Ne = null,
    Ge = null,
    vu = !1,
    va = !1,
    Xl = !1,
    yu = 0,
    cn = 0,
    ya = null,
    Th = 0;
  function Ye() {
    throw Error(f(321));
  }
  function nc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!mt(e[l], t[l])) return !1;
    return !0;
  }
  function uc(e, t, l, a, n, u) {
    return (
      (dl = u),
      (fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? Bo : Yo),
      (Xl = !1),
      (u = l(a, n)),
      (Xl = !1),
      va && (u = lo(t, l, a, n)),
      to(e),
      u
    );
  }
  function to(e) {
    M.H = Eu;
    var t = Ne !== null && Ne.next !== null;
    if (((dl = 0), (Ge = Ne = fe = null), (vu = !1), (cn = 0), (ya = null), t))
      throw Error(f(300));
    e === null ||
      Ke ||
      ((e = e.dependencies), e !== null && ru(e) && (Ke = !0));
  }
  function lo(e, t, l, a) {
    fe = e;
    var n = 0;
    do {
      if ((va && (ya = null), (cn = 0), (va = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (Ge = Ne = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (M.H = _h), (u = t(l, a));
    } while (va);
    return u;
  }
  function Ah() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? fn(t) : t),
      (e = e.useState()[0]),
      (Ne !== null ? Ne.memoizedState : null) !== e && (fe.flags |= 1024),
      t
    );
  }
  function ic() {
    var e = yu !== 0;
    return (yu = 0), e;
  }
  function cc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function fc(e) {
    if (vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      vu = !1;
    }
    (dl = 0), (Ge = Ne = fe = null), (va = !1), (cn = yu = 0), (ya = null);
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ge === null ? (fe.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge;
  }
  function Xe() {
    if (Ne === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Ge === null ? fe.memoizedState : Ge.next;
    if (t !== null) (Ge = t), (Ne = e);
    else {
      if (e === null)
        throw fe.alternate === null ? Error(f(467)) : Error(f(310));
      (Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        Ge === null ? (fe.memoizedState = Ge = e) : (Ge = Ge.next = e);
    }
    return Ge;
  }
  function rc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fn(e) {
    var t = cn;
    return (
      (cn += 1),
      ya === null && (ya = []),
      (e = $r(ya, e, t)),
      (t = fe),
      (Ge === null ? t.memoizedState : Ge.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? Bo : Yo)),
      e
    );
  }
  function pu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return fn(e);
      if (e.$$typeof === I) return et(e);
    }
    throw Error(f(438, String(e)));
  }
  function oc(e) {
    var t = null,
      l = fe.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = fe.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = rc()), (fe.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = De;
    return t.index++, l;
  }
  function Jt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gu(e) {
    var t = Xe();
    return sc(t, Ne, e);
  }
  function sc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        (n.next = u.next), (u.next = i);
      }
      (t.baseQueue = n = u), (a.pending = null);
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var r = (i = null),
        v = null,
        A = t,
        D = !1;
      do {
        var C = A.lane & -536870913;
        if (C !== A.lane ? (pe & C) === C : (dl & C) === C) {
          var N = A.revertLane;
          if (N === 0)
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: A.action,
                  hasEagerState: A.hasEagerState,
                  eagerState: A.eagerState,
                  next: null,
                }),
              C === da && (D = !0);
          else if ((dl & N) === N) {
            (A = A.next), N === da && (D = !0);
            continue;
          } else
            (C = {
              lane: 0,
              revertLane: A.revertLane,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null,
            }),
              v === null ? ((r = v = C), (i = u)) : (v = v.next = C),
              (fe.lanes |= N),
              (bl |= N);
          (C = A.action),
            Xl && l(u, C),
            (u = A.hasEagerState ? A.eagerState : l(u, C));
        } else
          (N = {
            lane: C,
            revertLane: A.revertLane,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          }),
            v === null ? ((r = v = N), (i = u)) : (v = v.next = N),
            (fe.lanes |= C),
            (bl |= C);
        A = A.next;
      } while (A !== null && A !== t);
      if (
        (v === null ? (i = u) : (v.next = r),
        !mt(u, e.memoizedState) && ((Ke = !0), D && ((l = ma), l !== null)))
      )
        throw l;
      (e.memoizedState = u),
        (e.baseState = i),
        (e.baseQueue = v),
        (a.lastRenderedState = u);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function dc(e) {
    var t = Xe(),
      l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== n);
      mt(u, t.memoizedState) || (Ke = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u);
    }
    return [u, a];
  }
  function ao(e, t, l) {
    var a = fe,
      n = Xe(),
      u = Ee;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var i = !mt((Ne || n).memoizedState, l);
    i && ((n.memoizedState = l), (Ke = !0)), (n = n.queue);
    var r = io.bind(null, a, n, e);
    if (
      (rn(2048, 8, r, [e]),
      n.getSnapshot !== t || i || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        pa(9, bu(), uo.bind(null, a, n, l, t), null),
        je === null)
      )
        throw Error(f(349));
      u || (dl & 124) !== 0 || no(a, t, l);
    }
    return l;
  }
  function no(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = fe.updateQueue),
      t === null
        ? ((t = rc()), (fe.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function uo(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), co(t) && fo(e);
  }
  function io(e, t, l) {
    return l(function () {
      co(t) && fo(e);
    });
  }
  function co(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !mt(e, l);
    } catch {
      return !0;
    }
  }
  function fo(e) {
    var t = fa(e, 2);
    t !== null && bt(t, e, 2);
  }
  function mc(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Xl)) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ro(e, t, l, a) {
    return (e.baseState = l), sc(e, Ne, typeof a == "function" ? a : Jt);
  }
  function Oh(e, t, l, a, n) {
    if (Su(e)) throw Error(f(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      M.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), oo(t, u))
          : ((u.next = l.next), (t.pending = l.next = u));
    }
  }
  function oo(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = M.T,
        i = {};
      M.T = i;
      try {
        var r = l(n, a),
          v = M.S;
        v !== null && v(i, r), so(e, t, r);
      } catch (A) {
        hc(e, t, A);
      } finally {
        M.T = u;
      }
    } else
      try {
        (u = l(n, a)), so(e, t, u);
      } catch (A) {
        hc(e, t, A);
      }
  }
  function so(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            mo(e, t, a);
          },
          function (a) {
            return hc(e, t, a);
          },
        )
      : mo(e, t, l);
  }
  function mo(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      ho(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), oo(e, l)));
  }
  function hc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), ho(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function ho(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function vo(e, t) {
    return t;
  }
  function yo(e, t) {
    if (Ee) {
      var l = je.formState;
      if (l !== null) {
        e: {
          var a = fe;
          if (Ee) {
            if (qe) {
              t: {
                for (var n = qe, u = wt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = Dt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (u = n.data), (n = u === "F!" || u === "F" ? n : null);
              }
              if (n) {
                (qe = Dt(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            Bl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = ut()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vo,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Co.bind(null, fe, a)),
      (a.dispatch = l),
      (a = mc(!1)),
      (u = bc.bind(null, fe, !1, a.queue)),
      (a = ut()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = Oh.bind(null, fe, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function po(e) {
    var t = Xe();
    return go(t, Ne, e);
  }
  function go(e, t, l) {
    if (
      ((t = sc(e, t, vo)[0]),
      (e = gu(Jt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = fn(t);
      } catch (i) {
        throw i === tn ? du : i;
      }
    else a = t;
    t = Xe();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((fe.flags |= 2048), pa(9, bu(), Nh.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function Nh(e, t) {
    e.action = t;
  }
  function bo(e) {
    var t = Xe(),
      l = Ne;
    if (l !== null) return go(t, l, e);
    Xe(), (t = t.memoizedState), (l = Xe());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function pa(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = fe.updateQueue),
      t === null && ((t = rc()), (fe.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function bu() {
    return { destroy: void 0, resource: void 0 };
  }
  function xo() {
    return Xe().memoizedState;
  }
  function xu(e, t, l, a) {
    var n = ut();
    (a = a === void 0 ? null : a),
      (fe.flags |= e),
      (n.memoizedState = pa(1 | t, bu(), l, a));
  }
  function rn(e, t, l, a) {
    var n = Xe();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Ne !== null && a !== null && nc(a, Ne.memoizedState.deps)
      ? (n.memoizedState = pa(t, u, l, a))
      : ((fe.flags |= e), (n.memoizedState = pa(1 | t, u, l, a)));
  }
  function So(e, t) {
    xu(8390656, 8, e, t);
  }
  function Eo(e, t) {
    rn(2048, 8, e, t);
  }
  function To(e, t) {
    return rn(4, 2, e, t);
  }
  function Ao(e, t) {
    return rn(4, 4, e, t);
  }
  function Oo(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function No(e, t, l) {
    (l = l != null ? l.concat([e]) : null), rn(4, 4, Oo.bind(null, t, e), l);
  }
  function vc() {}
  function Ro(e, t) {
    var l = Xe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && nc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function zo(e, t) {
    var l = Xe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && nc(t, a[1])) return a[0];
    if (((a = e()), Xl)) {
      ul(!0);
      try {
        e();
      } finally {
        ul(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function yc(e, t, l) {
    return l === void 0 || (dl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = js()), (fe.lanes |= e), (bl |= e), l);
  }
  function Mo(e, t, l, a) {
    return mt(l, t)
      ? l
      : ha.current !== null
        ? ((e = yc(e, l, a)), mt(e, t) || (Ke = !0), e)
        : (dl & 42) === 0
          ? ((Ke = !0), (e.memoizedState = l))
          : ((e = js()), (fe.lanes |= e), (bl |= e), t);
  }
  function _o(e, t, l, a, n) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var i = M.T,
      r = {};
    (M.T = r), bc(e, !1, t, l);
    try {
      var v = n(),
        A = M.S;
      if (
        (A !== null && A(r, v),
        v !== null && typeof v == "object" && typeof v.then == "function")
      ) {
        var D = Eh(v, a);
        on(e, t, D, gt(e));
      } else on(e, t, a, gt(e));
    } catch (C) {
      on(e, t, { then: function () {}, status: "rejected", reason: C }, gt());
    } finally {
      (X.p = u), (M.T = i);
    }
  }
  function Rh() {}
  function pc(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = jo(e).queue;
    _o(
      e,
      n,
      t,
      $,
      l === null
        ? Rh
        : function () {
            return Do(e), l(a);
          },
    );
  }
  function jo(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jt,
        lastRenderedState: $,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Jt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Do(e) {
    var t = jo(e).next.queue;
    on(e, t, {}, gt());
  }
  function gc() {
    return et(zn);
  }
  function Uo() {
    return Xe().memoizedState;
  }
  function wo() {
    return Xe().memoizedState;
  }
  function zh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = gt();
          e = ol(l);
          var a = sl(t, e, l);
          a !== null && (bt(a, t, l), an(a, t, l)),
            (t = { cache: Ji() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Mh(e, t, l) {
    var a = gt();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Su(e)
        ? Ho(t, l)
        : ((l = Bi(e, t, l, a)), l !== null && (bt(l, e, a), qo(l, t, a)));
  }
  function Co(e, t, l) {
    var a = gt();
    on(e, t, l, a);
  }
  function on(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Su(e)) Ho(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            r = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = r), mt(r, i)))
            return nu(e, t, n, 0), je === null && au(), !1;
        } catch {
        } finally {
        }
      if (((l = Bi(e, t, n, a)), l !== null))
        return bt(l, e, a), qo(l, t, a), !0;
    }
    return !1;
  }
  function bc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Fc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Su(e))
    ) {
      if (t) throw Error(f(479));
    } else (t = Bi(e, l, a, 2)), t !== null && bt(t, e, 2);
  }
  function Su(e) {
    var t = e.alternate;
    return e === fe || (t !== null && t === fe);
  }
  function Ho(e, t) {
    va = vu = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function qo(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Zf(e, l);
    }
  }
  var Eu = {
      readContext: et,
      use: pu,
      useCallback: Ye,
      useContext: Ye,
      useEffect: Ye,
      useImperativeHandle: Ye,
      useLayoutEffect: Ye,
      useInsertionEffect: Ye,
      useMemo: Ye,
      useReducer: Ye,
      useRef: Ye,
      useState: Ye,
      useDebugValue: Ye,
      useDeferredValue: Ye,
      useTransition: Ye,
      useSyncExternalStore: Ye,
      useId: Ye,
      useHostTransitionStatus: Ye,
      useFormState: Ye,
      useActionState: Ye,
      useOptimistic: Ye,
      useMemoCache: Ye,
      useCacheRefresh: Ye,
    },
    Bo = {
      readContext: et,
      use: pu,
      useCallback: function (e, t) {
        return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: et,
      useEffect: So,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          xu(4194308, 4, Oo.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return xu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        xu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = ut();
        t = t === void 0 ? null : t;
        var a = e();
        if (Xl) {
          ul(!0);
          try {
            e();
          } finally {
            ul(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = ut();
        if (l !== void 0) {
          var n = l(t);
          if (Xl) {
            ul(!0);
            try {
              l(t);
            } finally {
              ul(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = Mh.bind(null, fe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ut();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = mc(e);
        var t = e.queue,
          l = Co.bind(null, fe, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: vc,
      useDeferredValue: function (e, t) {
        var l = ut();
        return yc(l, e, t);
      },
      useTransition: function () {
        var e = mc(!1);
        return (
          (e = _o.bind(null, fe, e.queue, !0, !1)),
          (ut().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = fe,
          n = ut();
        if (Ee) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (((l = t()), je === null)) throw Error(f(349));
          (pe & 124) !== 0 || no(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          So(io.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          pa(9, bu(), uo.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = ut(),
          t = je.identifierPrefix;
        if (Ee) {
          var l = Vt,
            a = Zt;
          (l = (a & ~(1 << (32 - dt(a) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = yu++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»");
        } else (l = Th++), (t = "«" + t + "r" + l.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: gc,
      useFormState: yo,
      useActionState: yo,
      useOptimistic: function (e) {
        var t = ut();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = bc.bind(null, fe, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: oc,
      useCacheRefresh: function () {
        return (ut().memoizedState = zh.bind(null, fe));
      },
    },
    Yo = {
      readContext: et,
      use: pu,
      useCallback: Ro,
      useContext: et,
      useEffect: Eo,
      useImperativeHandle: No,
      useInsertionEffect: To,
      useLayoutEffect: Ao,
      useMemo: zo,
      useReducer: gu,
      useRef: xo,
      useState: function () {
        return gu(Jt);
      },
      useDebugValue: vc,
      useDeferredValue: function (e, t) {
        var l = Xe();
        return Mo(l, Ne.memoizedState, e, t);
      },
      useTransition: function () {
        var e = gu(Jt)[0],
          t = Xe().memoizedState;
        return [typeof e == "boolean" ? e : fn(e), t];
      },
      useSyncExternalStore: ao,
      useId: Uo,
      useHostTransitionStatus: gc,
      useFormState: po,
      useActionState: po,
      useOptimistic: function (e, t) {
        var l = Xe();
        return ro(l, Ne, e, t);
      },
      useMemoCache: oc,
      useCacheRefresh: wo,
    },
    _h = {
      readContext: et,
      use: pu,
      useCallback: Ro,
      useContext: et,
      useEffect: Eo,
      useImperativeHandle: No,
      useInsertionEffect: To,
      useLayoutEffect: Ao,
      useMemo: zo,
      useReducer: dc,
      useRef: xo,
      useState: function () {
        return dc(Jt);
      },
      useDebugValue: vc,
      useDeferredValue: function (e, t) {
        var l = Xe();
        return Ne === null ? yc(l, e, t) : Mo(l, Ne.memoizedState, e, t);
      },
      useTransition: function () {
        var e = dc(Jt)[0],
          t = Xe().memoizedState;
        return [typeof e == "boolean" ? e : fn(e), t];
      },
      useSyncExternalStore: ao,
      useId: Uo,
      useHostTransitionStatus: gc,
      useFormState: bo,
      useActionState: bo,
      useOptimistic: function (e, t) {
        var l = Xe();
        return Ne !== null
          ? ro(l, Ne, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: oc,
      useCacheRefresh: wo,
    },
    ga = null,
    sn = 0;
  function Tu(e) {
    var t = sn;
    return (sn += 1), ga === null && (ga = []), $r(ga, e, t);
  }
  function dn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Au(e, t) {
    throw t.$$typeof === _
      ? Error(f(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Lo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Go(e) {
    function t(x, g) {
      if (e) {
        var E = x.deletions;
        E === null ? ((x.deletions = [g]), (x.flags |= 16)) : E.push(g);
      }
    }
    function l(x, g) {
      if (!e) return null;
      for (; g !== null; ) t(x, g), (g = g.sibling);
      return null;
    }
    function a(x) {
      for (var g = new Map(); x !== null; )
        x.key !== null ? g.set(x.key, x) : g.set(x.index, x), (x = x.sibling);
      return g;
    }
    function n(x, g) {
      return (x = Qt(x, g)), (x.index = 0), (x.sibling = null), x;
    }
    function u(x, g, E) {
      return (
        (x.index = E),
        e
          ? ((E = x.alternate),
            E !== null
              ? ((E = E.index), E < g ? ((x.flags |= 67108866), g) : E)
              : ((x.flags |= 67108866), g))
          : ((x.flags |= 1048576), g)
      );
    }
    function i(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function r(x, g, E, U) {
      return g === null || g.tag !== 6
        ? ((g = Li(E, x.mode, U)), (g.return = x), g)
        : ((g = n(g, E)), (g.return = x), g);
    }
    function v(x, g, E, U) {
      var k = E.type;
      return k === j
        ? D(x, g, E.props.children, U, E.key)
        : g !== null &&
            (g.elementType === k ||
              (typeof k == "object" &&
                k !== null &&
                k.$$typeof === ne &&
                Lo(k) === g.type))
          ? ((g = n(g, E.props)), dn(g, E), (g.return = x), g)
          : ((g = iu(E.type, E.key, E.props, null, x.mode, U)),
            dn(g, E),
            (g.return = x),
            g);
    }
    function A(x, g, E, U) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== E.containerInfo ||
        g.stateNode.implementation !== E.implementation
        ? ((g = Gi(E, x.mode, U)), (g.return = x), g)
        : ((g = n(g, E.children || [])), (g.return = x), g);
    }
    function D(x, g, E, U, k) {
      return g === null || g.tag !== 7
        ? ((g = wl(E, x.mode, U, k)), (g.return = x), g)
        : ((g = n(g, E)), (g.return = x), g);
    }
    function C(x, g, E) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return (g = Li("" + g, x.mode, E)), (g.return = x), g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case z:
            return (
              (E = iu(g.type, g.key, g.props, null, x.mode, E)),
              dn(E, g),
              (E.return = x),
              E
            );
          case q:
            return (g = Gi(g, x.mode, E)), (g.return = x), g;
          case ne:
            var U = g._init;
            return (g = U(g._payload)), C(x, g, E);
        }
        if (ge(g) || G(g))
          return (g = wl(g, x.mode, E, null)), (g.return = x), g;
        if (typeof g.then == "function") return C(x, Tu(g), E);
        if (g.$$typeof === I) return C(x, ou(x, g), E);
        Au(x, g);
      }
      return null;
    }
    function N(x, g, E, U) {
      var k = g !== null ? g.key : null;
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return k !== null ? null : r(x, g, "" + E, U);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case z:
            return E.key === k ? v(x, g, E, U) : null;
          case q:
            return E.key === k ? A(x, g, E, U) : null;
          case ne:
            return (k = E._init), (E = k(E._payload)), N(x, g, E, U);
        }
        if (ge(E) || G(E)) return k !== null ? null : D(x, g, E, U, null);
        if (typeof E.then == "function") return N(x, g, Tu(E), U);
        if (E.$$typeof === I) return N(x, g, ou(x, E), U);
        Au(x, E);
      }
      return null;
    }
    function R(x, g, E, U, k) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (x = x.get(E) || null), r(g, x, "" + U, k);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case z:
            return (
              (x = x.get(U.key === null ? E : U.key) || null), v(g, x, U, k)
            );
          case q:
            return (
              (x = x.get(U.key === null ? E : U.key) || null), A(g, x, U, k)
            );
          case ne:
            var se = U._init;
            return (U = se(U._payload)), R(x, g, E, U, k);
        }
        if (ge(U) || G(U)) return (x = x.get(E) || null), D(g, x, U, k, null);
        if (typeof U.then == "function") return R(x, g, E, Tu(U), k);
        if (U.$$typeof === I) return R(x, g, E, ou(g, U), k);
        Au(g, U);
      }
      return null;
    }
    function ae(x, g, E, U) {
      for (
        var k = null, se = null, W = g, le = (g = 0), Je = null;
        W !== null && le < E.length;
        le++
      ) {
        W.index > le ? ((Je = W), (W = null)) : (Je = W.sibling);
        var xe = N(x, W, E[le], U);
        if (xe === null) {
          W === null && (W = Je);
          break;
        }
        e && W && xe.alternate === null && t(x, W),
          (g = u(xe, g, le)),
          se === null ? (k = xe) : (se.sibling = xe),
          (se = xe),
          (W = Je);
      }
      if (le === E.length) return l(x, W), Ee && Hl(x, le), k;
      if (W === null) {
        for (; le < E.length; le++)
          (W = C(x, E[le], U)),
            W !== null &&
              ((g = u(W, g, le)),
              se === null ? (k = W) : (se.sibling = W),
              (se = W));
        return Ee && Hl(x, le), k;
      }
      for (W = a(W); le < E.length; le++)
        (Je = R(W, x, le, E[le], U)),
          Je !== null &&
            (e &&
              Je.alternate !== null &&
              W.delete(Je.key === null ? le : Je.key),
            (g = u(Je, g, le)),
            se === null ? (k = Je) : (se.sibling = Je),
            (se = Je));
      return (
        e &&
          W.forEach(function (zl) {
            return t(x, zl);
          }),
        Ee && Hl(x, le),
        k
      );
    }
    function te(x, g, E, U) {
      if (E == null) throw Error(f(151));
      for (
        var k = null, se = null, W = g, le = (g = 0), Je = null, xe = E.next();
        W !== null && !xe.done;
        le++, xe = E.next()
      ) {
        W.index > le ? ((Je = W), (W = null)) : (Je = W.sibling);
        var zl = N(x, W, xe.value, U);
        if (zl === null) {
          W === null && (W = Je);
          break;
        }
        e && W && zl.alternate === null && t(x, W),
          (g = u(zl, g, le)),
          se === null ? (k = zl) : (se.sibling = zl),
          (se = zl),
          (W = Je);
      }
      if (xe.done) return l(x, W), Ee && Hl(x, le), k;
      if (W === null) {
        for (; !xe.done; le++, xe = E.next())
          (xe = C(x, xe.value, U)),
            xe !== null &&
              ((g = u(xe, g, le)),
              se === null ? (k = xe) : (se.sibling = xe),
              (se = xe));
        return Ee && Hl(x, le), k;
      }
      for (W = a(W); !xe.done; le++, xe = E.next())
        (xe = R(W, x, le, xe.value, U)),
          xe !== null &&
            (e &&
              xe.alternate !== null &&
              W.delete(xe.key === null ? le : xe.key),
            (g = u(xe, g, le)),
            se === null ? (k = xe) : (se.sibling = xe),
            (se = xe));
      return (
        e &&
          W.forEach(function (jv) {
            return t(x, jv);
          }),
        Ee && Hl(x, le),
        k
      );
    }
    function ze(x, g, E, U) {
      if (
        (typeof E == "object" &&
          E !== null &&
          E.type === j &&
          E.key === null &&
          (E = E.props.children),
        typeof E == "object" && E !== null)
      ) {
        switch (E.$$typeof) {
          case z:
            e: {
              for (var k = E.key; g !== null; ) {
                if (g.key === k) {
                  if (((k = E.type), k === j)) {
                    if (g.tag === 7) {
                      l(x, g.sibling),
                        (U = n(g, E.props.children)),
                        (U.return = x),
                        (x = U);
                      break e;
                    }
                  } else if (
                    g.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === ne &&
                      Lo(k) === g.type)
                  ) {
                    l(x, g.sibling),
                      (U = n(g, E.props)),
                      dn(U, E),
                      (U.return = x),
                      (x = U);
                    break e;
                  }
                  l(x, g);
                  break;
                } else t(x, g);
                g = g.sibling;
              }
              E.type === j
                ? ((U = wl(E.props.children, x.mode, U, E.key)),
                  (U.return = x),
                  (x = U))
                : ((U = iu(E.type, E.key, E.props, null, x.mode, U)),
                  dn(U, E),
                  (U.return = x),
                  (x = U));
            }
            return i(x);
          case q:
            e: {
              for (k = E.key; g !== null; ) {
                if (g.key === k)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === E.containerInfo &&
                    g.stateNode.implementation === E.implementation
                  ) {
                    l(x, g.sibling),
                      (U = n(g, E.children || [])),
                      (U.return = x),
                      (x = U);
                    break e;
                  } else {
                    l(x, g);
                    break;
                  }
                else t(x, g);
                g = g.sibling;
              }
              (U = Gi(E, x.mode, U)), (U.return = x), (x = U);
            }
            return i(x);
          case ne:
            return (k = E._init), (E = k(E._payload)), ze(x, g, E, U);
        }
        if (ge(E)) return ae(x, g, E, U);
        if (G(E)) {
          if (((k = G(E)), typeof k != "function")) throw Error(f(150));
          return (E = k.call(E)), te(x, g, E, U);
        }
        if (typeof E.then == "function") return ze(x, g, Tu(E), U);
        if (E.$$typeof === I) return ze(x, g, ou(x, E), U);
        Au(x, E);
      }
      return (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
        ? ((E = "" + E),
          g !== null && g.tag === 6
            ? (l(x, g.sibling), (U = n(g, E)), (U.return = x), (x = U))
            : (l(x, g), (U = Li(E, x.mode, U)), (U.return = x), (x = U)),
          i(x))
        : l(x, g);
    }
    return function (x, g, E, U) {
      try {
        sn = 0;
        var k = ze(x, g, E, U);
        return (ga = null), k;
      } catch (W) {
        if (W === tn || W === du) throw W;
        var se = ht(29, W, null, x.mode);
        return (se.lanes = U), (se.return = x), se;
      } finally {
      }
    };
  }
  var ba = Go(!0),
    Xo = Go(!1),
    Rt = H(null),
    Ct = null;
  function ml(e) {
    var t = e.alternate;
    Y(Ze, Ze.current & 1),
      Y(Rt, e),
      Ct === null &&
        (t === null || ha.current !== null || t.memoizedState !== null) &&
        (Ct = e);
  }
  function Qo(e) {
    if (e.tag === 22) {
      if ((Y(Ze, Ze.current), Y(Rt, e), Ct === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Ct = e);
      }
    } else hl();
  }
  function hl() {
    Y(Ze, Ze.current), Y(Rt, Rt.current);
  }
  function $t(e) {
    Z(Rt), Ct === e && (Ct = null), Z(Ze);
  }
  var Ze = H(0);
  function Ou(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || of(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function xc(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : O({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Sc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = ol(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = sl(e, n, a)),
        t !== null && (bt(t, e, a), an(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = ol(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = sl(e, n, a)),
        t !== null && (bt(t, e, a), an(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = gt(),
        a = ol(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = sl(e, a, l)),
        t !== null && (bt(t, e, l), an(t, e, l));
    },
  };
  function Zo(e, t, l, a, n, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ka(l, a) || !ka(n, u)
          : !0
    );
  }
  function Vo(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Sc.enqueueReplaceState(t, t.state, null);
  }
  function Ql(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = O({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Nu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Ko(e) {
    Nu(e);
  }
  function ko(e) {
    console.error(e);
  }
  function Jo(e) {
    Nu(e);
  }
  function Ru(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function $o(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Ec(e, t, l) {
    return (
      (l = ol(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Ru(e, t);
      }),
      l
    );
  }
  function Wo(e) {
    return (e = ol(e)), (e.tag = 3), e;
  }
  function Fo(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      (e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          $o(t, l, a);
        });
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        $o(t, l, a),
          typeof n != "function" &&
            (xl === null ? (xl = new Set([this])) : xl.add(this));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function jh(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && Pa(t, l, n, !0),
        (l = Rt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Ct === null ? Kc() : l.alternate === null && Be === 0 && (Be = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Fi
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Jc(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Fi
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Jc(e, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return Jc(e, a, n), Kc(), !1;
    }
    if (Ee)
      return (
        (t = Rt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Zi && ((e = Error(f(422), { cause: a })), Fa(Tt(e, l))))
          : (a !== Zi && ((t = Error(f(423), { cause: a })), Fa(Tt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Tt(a, l)),
            (n = Ec(e.stateNode, a, n)),
            ec(e, n),
            Be !== 4 && (Be = 2)),
        !1
      );
    var u = Error(f(520), { cause: a });
    if (
      ((u = Tt(u, l)),
      bn === null ? (bn = [u]) : bn.push(u),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    (a = Tt(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Ec(l.stateNode, a, e)),
            ec(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (xl === null || !xl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Wo(n)),
              Fo(n, e, l, a),
              ec(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Po = Error(f(461)),
    Ke = !1;
  function $e(e, t, l, a) {
    t.child = e === null ? Xo(t, null, l, a) : ba(t, e.child, l, a);
  }
  function Io(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var r in a) r !== "ref" && (i[r] = a[r]);
    } else i = a;
    return (
      Ll(t),
      (a = uc(e, t, l, i, u, n)),
      (r = ic()),
      e !== null && !Ke
        ? (cc(e, t, n), Wt(e, t, n))
        : (Ee && r && Xi(t), (t.flags |= 1), $e(e, t, a, n), t.child)
    );
  }
  function es(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !Yi(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), ts(e, t, u, a, n))
        : ((e = iu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !_c(e, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ka), l(i, a) && e.ref === t.ref)
      )
        return Wt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Qt(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ts(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ka(u, a) && e.ref === t.ref)
        if (((Ke = !1), (t.pendingProps = a = u), _c(e, n)))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else return (t.lanes = e.lanes), Wt(e, t, n);
    }
    return Tc(e, t, l, a, n);
  }
  function ls(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, u = 0; n !== null; )
            (u = u | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = u & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return as(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && su(t, u !== null ? u.cachePool : null),
          u !== null ? eo(t, u) : lc(),
          Qo(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          as(e, t, u !== null ? u.baseLanes | l : l, l)
        );
    } else
      u !== null
        ? (su(t, u.cachePool), eo(t, u), hl(), (t.memoizedState = null))
        : (e !== null && su(t, null), lc(), hl());
    return $e(e, t, n, l), t.child;
  }
  function as(e, t, l, a) {
    var n = Wi();
    return (
      (n = n === null ? null : { parent: Qe._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && su(t, null),
      lc(),
      Qo(t),
      e !== null && Pa(e, t, a, !0),
      null
    );
  }
  function zu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Tc(e, t, l, a, n) {
    return (
      Ll(t),
      (l = uc(e, t, l, a, void 0, n)),
      (a = ic()),
      e !== null && !Ke
        ? (cc(e, t, n), Wt(e, t, n))
        : (Ee && a && Xi(t), (t.flags |= 1), $e(e, t, l, n), t.child)
    );
  }
  function ns(e, t, l, a, n, u) {
    return (
      Ll(t),
      (t.updateQueue = null),
      (l = lo(t, a, l, n)),
      to(e),
      (a = ic()),
      e !== null && !Ke
        ? (cc(e, t, u), Wt(e, t, u))
        : (Ee && a && Xi(t), (t.flags |= 1), $e(e, t, l, u), t.child)
    );
  }
  function us(e, t, l, a, n) {
    if ((Ll(t), t.stateNode === null)) {
      var u = ra,
        i = l.contextType;
      typeof i == "object" && i !== null && (u = et(i)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Sc),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Pi(t),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? et(i) : ra),
        (u.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (xc(t, l, i, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && Sc.enqueueReplaceState(u, u.state, null),
          un(t, a, u, n),
          nn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      u = t.stateNode;
      var r = t.memoizedProps,
        v = Ql(l, r);
      u.props = v;
      var A = u.context,
        D = l.contextType;
      (i = ra), typeof D == "object" && D !== null && (i = et(D));
      var C = l.getDerivedStateFromProps;
      (D =
        typeof C == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (r = t.pendingProps !== r),
        D ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((r || A !== i) && Vo(t, u, a, i)),
        (rl = !1);
      var N = t.memoizedState;
      (u.state = N),
        un(t, a, u, n),
        nn(),
        (A = t.memoizedState),
        r || N !== A || rl
          ? (typeof C == "function" && (xc(t, l, C, a), (A = t.memoizedState)),
            (v = rl || Zo(t, l, v, a, N, A, i))
              ? (D ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = A)),
            (u.props = a),
            (u.state = A),
            (u.context = i),
            (a = v))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (u = t.stateNode),
        Ii(e, t),
        (i = t.memoizedProps),
        (D = Ql(l, i)),
        (u.props = D),
        (C = t.pendingProps),
        (N = u.context),
        (A = l.contextType),
        (v = ra),
        typeof A == "object" && A !== null && (v = et(A)),
        (r = l.getDerivedStateFromProps),
        (A =
          typeof r == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== C || N !== v) && Vo(t, u, a, v)),
        (rl = !1),
        (N = t.memoizedState),
        (u.state = N),
        un(t, a, u, n),
        nn();
      var R = t.memoizedState;
      i !== C ||
      N !== R ||
      rl ||
      (e !== null && e.dependencies !== null && ru(e.dependencies))
        ? (typeof r == "function" && (xc(t, l, r, a), (R = t.memoizedState)),
          (D =
            rl ||
            Zo(t, l, D, a, N, R, v) ||
            (e !== null && e.dependencies !== null && ru(e.dependencies)))
            ? (A ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, R, v),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, R, v)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && N === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = R)),
          (u.props = a),
          (u.state = R),
          (u.context = v),
          (a = D))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && N === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      zu(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ba(t, e.child, null, n)),
              (t.child = ba(t, null, l, n)))
            : $e(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Wt(e, t, n)),
      e
    );
  }
  function is(e, t, l, a) {
    return Wa(), (t.flags |= 256), $e(e, t, l, a), t.child;
  }
  var Ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Oc(e) {
    return { baseLanes: e, cachePool: Kr() };
  }
  function Nc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= zt), e;
  }
  function cs(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ee) {
        if ((n ? ml(t) : hl(), Ee)) {
          var r = qe,
            v;
          if ((v = r)) {
            e: {
              for (v = r, r = wt; v.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break e;
                }
                if (((v = Dt(v.nextSibling)), v === null)) {
                  r = null;
                  break e;
                }
              }
              r = v;
            }
            r !== null
              ? ((t.memoizedState = {
                  dehydrated: r,
                  treeContext: Cl !== null ? { id: Zt, overflow: Vt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (v = ht(18, null, null, 0)),
                (v.stateNode = r),
                (v.return = t),
                (t.child = v),
                (lt = t),
                (qe = null),
                (v = !0))
              : (v = !1);
          }
          v || Bl(t);
        }
        if (
          ((r = t.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null))
        )
          return of(r) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        $t(t);
      }
      return (
        (r = a.children),
        (a = a.fallback),
        n
          ? (hl(),
            (n = t.mode),
            (r = Mu({ mode: "hidden", children: r }, n)),
            (a = wl(a, n, l, null)),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            (n = t.child),
            (n.memoizedState = Oc(l)),
            (n.childLanes = Nc(e, i, l)),
            (t.memoizedState = Ac),
            a)
          : (ml(t), Rc(t, r))
      );
    }
    if (
      ((v = e.memoizedState), v !== null && ((r = v.dehydrated), r !== null))
    ) {
      if (u)
        t.flags & 256
          ? (ml(t), (t.flags &= -257), (t = zc(e, t, l)))
          : t.memoizedState !== null
            ? (hl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (hl(),
              (n = a.fallback),
              (r = t.mode),
              (a = Mu({ mode: "visible", children: a.children }, r)),
              (n = wl(n, r, l, null)),
              (n.flags |= 2),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              ba(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Oc(l)),
              (a.childLanes = Nc(e, i, l)),
              (t.memoizedState = Ac),
              (t = n));
      else if ((ml(t), of(r))) {
        if (((i = r.nextSibling && r.nextSibling.dataset), i)) var A = i.dgst;
        (i = A),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = i),
          Fa({ value: a, source: null, stack: null }),
          (t = zc(e, t, l));
      } else if (
        (Ke || Pa(e, t, l, !1), (i = (l & e.childLanes) !== 0), Ke || i)
      ) {
        if (
          ((i = je),
          i !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : oi(a)),
            (a = (a & (i.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== v.retryLane))
        )
          throw ((v.retryLane = a), fa(e, a), bt(i, e, a), Po);
        r.data === "$?" || Kc(), (t = zc(e, t, l));
      } else
        r.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = v.treeContext),
            (qe = Dt(r.nextSibling)),
            (lt = t),
            (Ee = !0),
            (ql = null),
            (wt = !1),
            e !== null &&
              ((Ot[Nt++] = Zt),
              (Ot[Nt++] = Vt),
              (Ot[Nt++] = Cl),
              (Zt = e.id),
              (Vt = e.overflow),
              (Cl = t)),
            (t = Rc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (hl(),
        (n = a.fallback),
        (r = t.mode),
        (v = e.child),
        (A = v.sibling),
        (a = Qt(v, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = v.subtreeFlags & 65011712),
        A !== null ? (n = Qt(A, n)) : ((n = wl(n, r, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (r = e.child.memoizedState),
        r === null
          ? (r = Oc(l))
          : ((v = r.cachePool),
            v !== null
              ? ((A = Qe._currentValue),
                (v = v.parent !== A ? { parent: A, pool: A } : v))
              : (v = Kr()),
            (r = { baseLanes: r.baseLanes | l, cachePool: v })),
        (n.memoizedState = r),
        (n.childLanes = Nc(e, i, l)),
        (t.memoizedState = Ac),
        a)
      : (ml(t),
        (l = e.child),
        (e = l.sibling),
        (l = Qt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Rc(e, t) {
    return (
      (t = Mu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mu(e, t) {
    return (
      (e = ht(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function zc(e, t, l) {
    return (
      ba(t, e.child, null, l),
      (e = Rc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function fs(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ki(e.return, t, l);
  }
  function Mc(e, t, l, a, n) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n));
  }
  function rs(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if (($e(e, t, a.children, l), (a = Ze.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && fs(e, l, t);
          else if (e.tag === 19) fs(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((Y(Ze, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && Ou(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Mc(t, !1, n, l, u);
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Ou(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        Mc(t, !0, l, null, u);
        break;
      case "together":
        Mc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (bl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Pa(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Qt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Qt(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function _c(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ru(e)));
  }
  function Dh(e, t, l) {
    switch (t.tag) {
      case 3:
        ue(t, t.stateNode.containerInfo),
          fl(t, Qe, e.memoizedState.cache),
          Wa();
        break;
      case 27:
      case 5:
        xt(t);
        break;
      case 4:
        ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        fl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ml(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? cs(e, t, l)
              : (ml(t), (e = Wt(e, t, l)), e !== null ? e.sibling : null);
        ml(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (Pa(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return rs(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          Y(Ze, Ze.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ls(e, t, l);
      case 24:
        fl(t, Qe, e.memoizedState.cache);
    }
    return Wt(e, t, l);
  }
  function os(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ke = !0;
      else {
        if (!_c(e, l) && (t.flags & 128) === 0) return (Ke = !1), Dh(e, t, l);
        Ke = (e.flags & 131072) !== 0;
      }
    else (Ke = !1), Ee && (t.flags & 1048576) !== 0 && Yr(t, fu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Yi(a)
              ? ((e = Ql(a, e)), (t.tag = 1), (t = us(null, t, a, e, l)))
              : ((t.tag = 0), (t = Tc(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === re)) {
                (t.tag = 11), (t = Io(null, t, a, e, l));
                break e;
              } else if (n === Te) {
                (t.tag = 14), (t = es(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = ee(a) || a), Error(f(306, t, "")));
          }
        }
        return t;
      case 0:
        return Tc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = Ql(a, t.pendingProps)), us(e, t, a, n, l);
      case 3:
        e: {
          if ((ue(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          (n = u.element), Ii(e, t), un(t, a, null, l);
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            fl(t, Qe, a),
            a !== u.cache && ki(t, [Qe], l, !0),
            nn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = is(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = Tt(Error(f(424)), t)), Fa(n), (t = is(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                qe = Dt(e.firstChild),
                  lt = t,
                  Ee = !0,
                  ql = null,
                  wt = !0,
                  l = Xo(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Wa(), a === n)) {
              t = Wt(e, t, l);
              break e;
            }
            $e(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          zu(e, t),
          e === null
            ? (l = hd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ee ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Qu(F.current).createElement(l)),
                (a[Ie] = t),
                (a[at] = e),
                Fe(a, l, e),
                Ve(a),
                (t.stateNode = a))
            : (t.memoizedState = hd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          xt(t),
          e === null &&
            Ee &&
            ((a = t.stateNode = sd(t.type, t.pendingProps, F.current)),
            (lt = t),
            (wt = !0),
            (n = qe),
            Tl(t.type) ? ((sf = n), (qe = Dt(a.firstChild))) : (qe = n)),
          $e(e, t, t.pendingProps.children, l),
          zu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ee &&
            ((n = a = qe) &&
              ((a = iv(a, t.type, t.pendingProps, wt)),
              a !== null
                ? ((t.stateNode = a),
                  (lt = t),
                  (qe = Dt(a.firstChild)),
                  (wt = !1),
                  (n = !0))
                : (n = !1)),
            n || Bl(t)),
          xt(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = u.children),
          cf(n, u) ? (a = null) : i !== null && cf(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = uc(e, t, Ah, null, null, l)), (zn._currentValue = n)),
          zu(e, t),
          $e(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ee &&
            ((e = l = qe) &&
              ((l = cv(l, t.pendingProps, wt)),
              l !== null
                ? ((t.stateNode = l), (lt = t), (qe = null), (e = !0))
                : (e = !1)),
            e || Bl(t)),
          null
        );
      case 13:
        return cs(e, t, l);
      case 4:
        return (
          ue(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ba(t, null, a, l)) : $e(e, t, a, l),
          t.child
        );
      case 11:
        return Io(e, t, t.type, t.pendingProps, l);
      case 7:
        return $e(e, t, t.pendingProps, l), t.child;
      case 8:
        return $e(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return $e(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          fl(t, t.type, a.value),
          $e(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Ll(t),
          (n = et(n)),
          (a = a(n)),
          (t.flags |= 1),
          $e(e, t, a, l),
          t.child
        );
      case 14:
        return es(e, t, t.type, t.pendingProps, l);
      case 15:
        return ts(e, t, t.type, t.pendingProps, l);
      case 19:
        return rs(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Mu(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = Qt(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return ls(e, t, l);
      case 24:
        return (
          Ll(t),
          (a = et(Qe)),
          e === null
            ? ((n = Wi()),
              n === null &&
                ((n = je),
                (u = Ji()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Pi(t),
              fl(t, Qe, n))
            : ((e.lanes & l) !== 0 && (Ii(e, t), un(t, null, null, l), nn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  fl(t, Qe, a))
                : ((a = u.cache),
                  fl(t, Qe, a),
                  a !== n.cache && ki(t, [Qe], l, !0))),
          $e(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function Ft(e) {
    e.flags |= 4;
  }
  function ss(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !bd(t))) {
      if (
        ((t = Rt.current),
        t !== null &&
          ((pe & 4194048) === pe
            ? Ct !== null
            : ((pe & 62914560) !== pe && (pe & 536870912) === 0) || t !== Ct))
      )
        throw ((ln = Fi), kr);
      e.flags |= 8192;
    }
  }
  function _u(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Xf() : 536870912), (e.lanes |= t), (Ta |= t));
  }
  function mn(e, t) {
    if (!Ee)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Uh(e, t, l) {
    var a = t.pendingProps;
    switch ((Qi(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          kt(Qe),
          He(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            ($a(t)
              ? Ft(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xr())),
          we(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (Ft(t),
              l !== null ? (we(t), ss(t, l)) : (we(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (Ft(t), we(t), ss(t, l))
                : (we(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && Ft(t), we(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        ft(t), (l = F.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return we(t), null;
          }
          (e = K.current),
            $a(t) ? Lr(t) : ((e = sd(n, a, l)), (t.stateNode = e), Ft(t));
        }
        return we(t), null;
      case 5:
        if ((ft(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return we(t), null;
          }
          if (((e = K.current), $a(t))) Lr(t);
          else {
            switch (((n = Qu(F.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (e[Ie] = t), (e[at] = a);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch ((Fe(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ft(t);
          }
        }
        return we(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Ft(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
          if (((e = F.current), $a(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = lt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[Ie] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                nd(e.nodeValue, l)
              )),
              e || Bl(t);
          } else (e = Qu(e).createTextNode(a)), (e[Ie] = t), (t.stateNode = e);
        }
        return we(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = $a(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[Ie] = t;
            } else
              Wa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            we(t), (n = !1);
          } else
            (n = Xr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        if (($t(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          _u(t, t.updateQueue),
          we(t),
          null
        );
      case 4:
        return He(), e === null && tf(t.stateNode.containerInfo), we(t), null;
      case 10:
        return kt(t.type), we(t), null;
      case 19:
        if ((Z(Ze), (n = t.memoizedState), n === null)) return we(t), null;
        if (((a = (t.flags & 128) !== 0), (u = n.rendering), u === null))
          if (a) mn(n, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Ou(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      mn(n, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      _u(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    Br(l, e), (l = l.sibling);
                  return Y(Ze, (Ze.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              ot() > Uu &&
              ((t.flags |= 128), (a = !0), mn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Ou(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                _u(t, e),
                mn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ee)
              )
                return we(t), null;
            } else
              2 * ot() - n.renderingStartTime > Uu &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), mn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = n.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (n.last = u));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = ot()),
            (t.sibling = null),
            (e = Ze.current),
            Y(Ze, a ? (e & 1) | 2 : e & 1),
            t)
          : (we(t), null);
      case 22:
      case 23:
        return (
          $t(t),
          ac(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : we(t),
          (l = t.updateQueue),
          l !== null && _u(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && Z(Gl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          kt(Qe),
          we(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function wh(e, t) {
    switch ((Qi(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kt(Qe),
          He(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ft(t), null;
      case 13:
        if (
          ($t(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          Wa();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Z(Ze), null;
      case 4:
        return He(), null;
      case 10:
        return kt(t.type), null;
      case 22:
      case 23:
        return (
          $t(t),
          ac(),
          e !== null && Z(Gl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kt(Qe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ds(e, t) {
    switch ((Qi(t), t.tag)) {
      case 3:
        kt(Qe), He();
        break;
      case 26:
      case 27:
      case 5:
        ft(t);
        break;
      case 4:
        He();
        break;
      case 13:
        $t(t);
        break;
      case 19:
        Z(Ze);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        $t(t), ac(), e !== null && Z(Gl);
        break;
      case 24:
        kt(Qe);
    }
  }
  function hn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            (a = u()), (i.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      _e(t, t.return, r);
    }
  }
  function vl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var i = a.inst,
              r = i.destroy;
            if (r !== void 0) {
              (i.destroy = void 0), (n = t);
              var v = l,
                A = r;
              try {
                A();
              } catch (D) {
                _e(n, v, D);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (D) {
      _e(t, t.return, D);
    }
  }
  function ms(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Ir(t, l);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function hs(e, t, l) {
    (l.props = Ql(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function vn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      _e(e, t, n);
    }
  }
  function Ht(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          _e(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          _e(e, t, n);
        }
      else l.current = null;
  }
  function vs(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      _e(e, e.return, n);
    }
  }
  function jc(e, t, l) {
    try {
      var a = e.stateNode;
      tv(a, e.type, l, t), (a[at] = t);
    } catch (n) {
      _e(e, e.return, n);
    }
  }
  function ys(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Tl(e.type)) ||
      e.tag === 4
    );
  }
  function Dc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ys(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Tl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Uc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Xu));
    else if (
      a !== 4 &&
      (a === 27 && Tl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Uc(e, t, l), e = e.sibling; e !== null; )
        Uc(e, t, l), (e = e.sibling);
  }
  function ju(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && Tl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (ju(e, t, l), e = e.sibling; e !== null; )
        ju(e, t, l), (e = e.sibling);
  }
  function ps(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Fe(t, a, l), (t[Ie] = e), (t[at] = l);
    } catch (u) {
      _e(e, e.return, u);
    }
  }
  var Pt = !1,
    Le = !1,
    wc = !1,
    gs = typeof WeakSet == "function" ? WeakSet : Set,
    ke = null;
  function Ch(e, t) {
    if (((e = e.containerInfo), (nf = $u), (e = zr(e)), Di(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var i = 0,
              r = -1,
              v = -1,
              A = 0,
              D = 0,
              C = e,
              N = null;
            t: for (;;) {
              for (
                var R;
                C !== l || (n !== 0 && C.nodeType !== 3) || (r = i + n),
                  C !== u || (a !== 0 && C.nodeType !== 3) || (v = i + a),
                  C.nodeType === 3 && (i += C.nodeValue.length),
                  (R = C.firstChild) !== null;

              )
                (N = C), (C = R);
              for (;;) {
                if (C === e) break t;
                if (
                  (N === l && ++A === n && (r = i),
                  N === u && ++D === a && (v = i),
                  (R = C.nextSibling) !== null)
                )
                  break;
                (C = N), (N = C.parentNode);
              }
              C = R;
            }
            l = r === -1 || v === -1 ? null : { start: r, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      uf = { focusedElem: e, selectionRange: l }, $u = !1, ke = t;
      ke !== null;

    )
      if (
        ((t = ke), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (ke = e);
      else
        for (; ke !== null; ) {
          switch (((t = ke), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (l = t),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = l.stateNode);
                try {
                  var ae = Ql(l.type, n, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(ae, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (te) {
                  _e(l, l.return, te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  rf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (ke = e);
            break;
          }
          ke = t.return;
        }
  }
  function bs(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        yl(e, l), a & 4 && hn(5, l);
        break;
      case 1:
        if ((yl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              _e(l, l.return, i);
            }
          else {
            var n = Ql(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              _e(l, l.return, i);
            }
          }
        a & 64 && ms(l), a & 512 && vn(l, l.return);
        break;
      case 3:
        if ((yl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Ir(e, t);
          } catch (i) {
            _e(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ps(l);
      case 26:
      case 5:
        yl(e, l), t === null && a & 4 && vs(l), a & 512 && vn(l, l.return);
        break;
      case 12:
        yl(e, l);
        break;
      case 13:
        yl(e, l),
          a & 4 && Es(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = Zh.bind(null, l)), fv(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Pt), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Le), (n = Pt);
          var u = Le;
          (Pt = a),
            (Le = t) && !u ? pl(e, l, (l.subtreeFlags & 8772) !== 0) : yl(e, l),
            (Pt = n),
            (Le = u);
        }
        break;
      case 30:
        break;
      default:
        yl(e, l);
    }
  }
  function xs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), xs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && mi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ue = null,
    it = !1;
  function It(e, t, l) {
    for (l = l.child; l !== null; ) Ss(e, t, l), (l = l.sibling);
  }
  function Ss(e, t, l) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(Ca, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Le || Ht(l, t),
          It(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Le || Ht(l, t);
        var a = Ue,
          n = it;
        Tl(l.type) && ((Ue = l.stateNode), (it = !1)),
          It(e, t, l),
          An(l.stateNode),
          (Ue = a),
          (it = n);
        break;
      case 5:
        Le || Ht(l, t);
      case 6:
        if (
          ((a = Ue),
          (n = it),
          (Ue = null),
          It(e, t, l),
          (Ue = a),
          (it = n),
          Ue !== null)
        )
          if (it)
            try {
              (Ue.nodeType === 9
                ? Ue.body
                : Ue.nodeName === "HTML"
                  ? Ue.ownerDocument.body
                  : Ue
              ).removeChild(l.stateNode);
            } catch (u) {
              _e(l, t, u);
            }
          else
            try {
              Ue.removeChild(l.stateNode);
            } catch (u) {
              _e(l, t, u);
            }
        break;
      case 18:
        Ue !== null &&
          (it
            ? ((e = Ue),
              rd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              Dn(e))
            : rd(Ue, l.stateNode));
        break;
      case 4:
        (a = Ue),
          (n = it),
          (Ue = l.stateNode.containerInfo),
          (it = !0),
          It(e, t, l),
          (Ue = a),
          (it = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Le || vl(2, l, t), Le || vl(4, l, t), It(e, t, l);
        break;
      case 1:
        Le ||
          (Ht(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && hs(l, t, a)),
          It(e, t, l);
        break;
      case 21:
        It(e, t, l);
        break;
      case 22:
        (Le = (a = Le) || l.memoizedState !== null), It(e, t, l), (Le = a);
        break;
      default:
        It(e, t, l);
    }
  }
  function Es(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Dn(e);
      } catch (l) {
        _e(t, t.return, l);
      }
  }
  function Hh(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new gs()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new gs()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function Cc(e, t) {
    var l = Hh(e);
    t.forEach(function (a) {
      var n = Vh.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function vt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = e,
          i = t,
          r = i;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
              if (Tl(r.type)) {
                (Ue = r.stateNode), (it = !1);
                break e;
              }
              break;
            case 5:
              (Ue = r.stateNode), (it = !1);
              break e;
            case 3:
            case 4:
              (Ue = r.stateNode.containerInfo), (it = !0);
              break e;
          }
          r = r.return;
        }
        if (Ue === null) throw Error(f(160));
        Ss(u, i, n),
          (Ue = null),
          (it = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Ts(t, e), (t = t.sibling);
  }
  var jt = null;
  function Ts(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vt(t, e),
          yt(e),
          a & 4 && (vl(3, e, e.return), hn(3, e), vl(5, e, e.return));
        break;
      case 1:
        vt(t, e),
          yt(e),
          a & 512 && (Le || l === null || Ht(l, l.return)),
          a & 64 &&
            Pt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = jt;
        if (
          (vt(t, e),
          yt(e),
          a & 512 && (Le || l === null || Ht(l, l.return)),
          a & 4)
        ) {
          var u = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ba] ||
                          u[Ie] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Fe(u, a, l),
                        (u[Ie] = e),
                        Ve(u),
                        (a = u);
                      break e;
                    case "link":
                      var i = pd("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var r = 0; r < i.length; r++)
                          if (
                            ((u = i[r]),
                            u.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              u.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              u.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              u.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            i.splice(r, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Fe(u, a, l),
                        n.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (i = pd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (r = 0; r < i.length; r++)
                          if (
                            ((u = i[r]),
                            u.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              u.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              u.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              u.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            i.splice(r, 1);
                            break t;
                          }
                      }
                      (u = n.createElement(a)),
                        Fe(u, a, l),
                        n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (u[Ie] = e), Ve(u), (a = u);
                }
                e.stateNode = a;
              } else gd(n, e.type, e.stateNode);
            else e.stateNode = yd(n, a, e.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : u.count--,
                a === null
                  ? gd(n, e.type, e.stateNode)
                  : yd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                jc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        vt(t, e),
          yt(e),
          a & 512 && (Le || l === null || Ht(l, l.return)),
          l !== null && a & 4 && jc(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (vt(t, e),
          yt(e),
          a & 512 && (Le || l === null || Ht(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            ta(n, "");
          } catch (R) {
            _e(e, e.return, R);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), jc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (wc = !0);
        break;
      case 6:
        if ((vt(t, e), yt(e), a & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (R) {
            _e(e, e.return, R);
          }
        }
        break;
      case 3:
        if (
          ((Ku = null),
          (n = jt),
          (jt = Zu(t.containerInfo)),
          vt(t, e),
          (jt = n),
          yt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Dn(t.containerInfo);
          } catch (R) {
            _e(e, e.return, R);
          }
        wc && ((wc = !1), As(e));
        break;
      case 4:
        (a = jt),
          (jt = Zu(e.stateNode.containerInfo)),
          vt(t, e),
          yt(e),
          (jt = a);
        break;
      case 12:
        vt(t, e), yt(e);
        break;
      case 13:
        vt(t, e),
          yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Gc = ot()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Cc(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null,
          A = Pt,
          D = Le;
        if (
          ((Pt = A || n),
          (Le = D || v),
          vt(t, e),
          (Le = D),
          (Pt = A),
          yt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || v || Pt || Le || Zl(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (((u = v.stateNode), n))
                    (i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    r = v.stateNode;
                    var C = v.memoizedProps.style,
                      N =
                        C != null && C.hasOwnProperty("display")
                          ? C.display
                          : null;
                    r.style.display =
                      N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (R) {
                  _e(v, v.return, R);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = n ? "" : v.memoizedProps;
                } catch (R) {
                  _e(v, v.return, R);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Cc(e, l))));
        break;
      case 19:
        vt(t, e),
          yt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Cc(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        vt(t, e), yt(e);
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (ys(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Dc(e);
            ju(e, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (ta(i, ""), (l.flags &= -33));
            var r = Dc(e);
            ju(e, r, i);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              A = Dc(e);
            Uc(e, A, v);
            break;
          default:
            throw Error(f(161));
        }
      } catch (D) {
        _e(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function As(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        As(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function yl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) bs(e, t.alternate, t), (t = t.sibling);
  }
  function Zl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vl(4, t, t.return), Zl(t);
          break;
        case 1:
          Ht(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && hs(t, t.return, l),
            Zl(t);
          break;
        case 27:
          An(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Zl(t);
          break;
        case 22:
          t.memoizedState === null && Zl(t);
          break;
        case 30:
          Zl(t);
          break;
        default:
          Zl(t);
      }
      e = e.sibling;
    }
  }
  function pl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        u = t,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          pl(n, u, l), hn(4, u);
          break;
        case 1:
          if (
            (pl(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (A) {
              _e(a, a.return, A);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var r = a.stateNode;
            try {
              var v = n.shared.hiddenCallbacks;
              if (v !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < v.length; n++)
                  Pr(v[n], r);
            } catch (A) {
              _e(a, a.return, A);
            }
          }
          l && i & 64 && ms(u), vn(u, u.return);
          break;
        case 27:
          ps(u);
        case 26:
        case 5:
          pl(n, u, l), l && a === null && i & 4 && vs(u), vn(u, u.return);
          break;
        case 12:
          pl(n, u, l);
          break;
        case 13:
          pl(n, u, l), l && i & 4 && Es(n, u);
          break;
        case 22:
          u.memoizedState === null && pl(n, u, l), vn(u, u.return);
          break;
        case 30:
          break;
        default:
          pl(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Hc(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Ia(l));
  }
  function qc(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ia(e));
  }
  function qt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Os(e, t, l, a), (t = t.sibling);
  }
  function Os(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(e, t, l, a), n & 2048 && hn(9, t);
        break;
      case 1:
        qt(e, t, l, a);
        break;
      case 3:
        qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ia(e)));
        break;
      case 12:
        if (n & 2048) {
          qt(e, t, l, a), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              i = u.id,
              r = u.onPostCommit;
            typeof r == "function" &&
              r(
                i,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (v) {
            _e(t, t.return, v);
          }
        } else qt(e, t, l, a);
        break;
      case 13:
        qt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? qt(e, t, l, a)
              : yn(e, t)
            : u._visibility & 2
              ? qt(e, t, l, a)
              : ((u._visibility |= 2),
                xa(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Hc(i, t);
        break;
      case 24:
        qt(e, t, l, a), n & 2048 && qc(t.alternate, t);
        break;
      default:
        qt(e, t, l, a);
    }
  }
  function xa(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        i = t,
        r = l,
        v = a,
        A = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          xa(u, i, r, v, n), hn(8, i);
          break;
        case 23:
          break;
        case 22:
          var D = i.stateNode;
          i.memoizedState !== null
            ? D._visibility & 2
              ? xa(u, i, r, v, n)
              : yn(u, i)
            : ((D._visibility |= 2), xa(u, i, r, v, n)),
            n && A & 2048 && Hc(i.alternate, i);
          break;
        case 24:
          xa(u, i, r, v, n), n && A & 2048 && qc(i.alternate, i);
          break;
        default:
          xa(u, i, r, v, n);
      }
      t = t.sibling;
    }
  }
  function yn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            yn(l, a), n & 2048 && Hc(a.alternate, a);
            break;
          case 24:
            yn(l, a), n & 2048 && qc(a.alternate, a);
            break;
          default:
            yn(l, a);
        }
        t = t.sibling;
      }
  }
  var pn = 8192;
  function Sa(e) {
    if (e.subtreeFlags & pn)
      for (e = e.child; e !== null; ) Ns(e), (e = e.sibling);
  }
  function Ns(e) {
    switch (e.tag) {
      case 26:
        Sa(e),
          e.flags & pn &&
            e.memoizedState !== null &&
            Sv(jt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Sa(e);
        break;
      case 3:
      case 4:
        var t = jt;
        (jt = Zu(e.stateNode.containerInfo)), Sa(e), (jt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = pn), (pn = 16777216), Sa(e), (pn = t))
            : Sa(e));
        break;
      default:
        Sa(e);
    }
  }
  function Rs(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function gn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (ke = a), Ms(a, e);
        }
      Rs(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) zs(e), (e = e.sibling);
  }
  function zs(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        gn(e), e.flags & 2048 && vl(9, e, e.return);
        break;
      case 3:
        gn(e);
        break;
      case 12:
        gn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Du(e))
          : gn(e);
        break;
      default:
        gn(e);
    }
  }
  function Du(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (ke = a), Ms(a, e);
        }
      Rs(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          vl(8, t, t.return), Du(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Du(t));
          break;
        default:
          Du(t);
      }
      e = e.sibling;
    }
  }
  function Ms(e, t) {
    for (; ke !== null; ) {
      var l = ke;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          vl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ia(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (ke = a);
      else
        e: for (l = e; ke !== null; ) {
          a = ke;
          var n = a.sibling,
            u = a.return;
          if ((xs(a), a === l)) {
            ke = null;
            break e;
          }
          if (n !== null) {
            (n.return = u), (ke = n);
            break e;
          }
          ke = u;
        }
    }
  }
  var qh = {
      getCacheForType: function (e) {
        var t = et(Qe),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    Bh = typeof WeakMap == "function" ? WeakMap : Map,
    Ae = 0,
    je = null,
    de = null,
    pe = 0,
    Oe = 0,
    pt = null,
    gl = !1,
    Ea = !1,
    Bc = !1,
    el = 0,
    Be = 0,
    bl = 0,
    Vl = 0,
    Yc = 0,
    zt = 0,
    Ta = 0,
    bn = null,
    ct = null,
    Lc = !1,
    Gc = 0,
    Uu = 1 / 0,
    wu = null,
    xl = null,
    We = 0,
    Sl = null,
    Aa = null,
    Oa = 0,
    Xc = 0,
    Qc = null,
    _s = null,
    xn = 0,
    Zc = null;
  function gt() {
    if ((Ae & 2) !== 0 && pe !== 0) return pe & -pe;
    if (M.T !== null) {
      var e = da;
      return e !== 0 ? e : Fc();
    }
    return Vf();
  }
  function js() {
    zt === 0 && (zt = (pe & 536870912) === 0 || Ee ? Gf() : 536870912);
    var e = Rt.current;
    return e !== null && (e.flags |= 32), zt;
  }
  function bt(e, t, l) {
    ((e === je && (Oe === 2 || Oe === 9)) || e.cancelPendingCommit !== null) &&
      (Na(e, 0), El(e, pe, zt, !1)),
      qa(e, l),
      ((Ae & 2) === 0 || e !== je) &&
        (e === je &&
          ((Ae & 2) === 0 && (Vl |= l), Be === 4 && El(e, pe, zt, !1)),
        Bt(e));
  }
  function Ds(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(f(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ha(e, t),
      n = a ? Gh(e, t) : kc(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        Ea && !a && El(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Yh(l))) {
          (n = kc(e, t, !1)), (u = !1);
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            (i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0);
          if (i !== 0) {
            t = i;
            e: {
              var r = e;
              n = bn;
              var v = r.current.memoizedState.isDehydrated;
              if ((v && (Na(r, i).flags |= 256), (i = kc(r, i, !1)), i !== 2)) {
                if (Bc && !v) {
                  (r.errorRecoveryDisabledLanes |= u), (Vl |= u), (n = 4);
                  break e;
                }
                (u = ct),
                  (ct = n),
                  u !== null && (ct === null ? (ct = u) : ct.push.apply(ct, u));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          Na(e, 0), El(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              El(a, t, zt, !gl);
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && ((n = Gc + 300 - ot()), 10 < n)) {
            if ((El(a, t, zt, !gl), Vn(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = cd(
              Us.bind(null, a, l, ct, wu, Lc, t, zt, Vl, Ta, gl, u, 2, -0, 0),
              n,
            );
            break e;
          }
          Us(a, l, ct, wu, Lc, t, zt, Vl, Ta, gl, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Bt(e);
  }
  function Us(e, t, l, a, n, u, i, r, v, A, D, C, N, R) {
    if (
      ((e.timeoutHandle = -1),
      (C = t.subtreeFlags),
      (C & 8192 || (C & 16785408) === 16785408) &&
        ((Rn = { stylesheets: null, count: 0, unsuspend: xv }),
        Ns(t),
        (C = Ev()),
        C !== null))
    ) {
      (e.cancelPendingCommit = C(
        Ls.bind(null, e, t, u, l, a, n, i, r, v, D, 1, N, R),
      )),
        El(e, u, i, !A);
      return;
    }
    Ls(e, t, u, l, a, n, i, r, v);
  }
  function Yh(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!mt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function El(e, t, l, a) {
    (t &= ~Yc),
      (t &= ~Vl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var u = 31 - dt(n),
        i = 1 << u;
      (a[u] = -1), (n &= ~i);
    }
    l !== 0 && Qf(e, l, t);
  }
  function Cu() {
    return (Ae & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function Vc() {
    if (de !== null) {
      if (Oe === 0) var e = de.return;
      else (e = de), (Kt = Yl = null), fc(e), (ga = null), (sn = 0), (e = de);
      for (; e !== null; ) ds(e.alternate, e), (e = e.return);
      de = null;
    }
  }
  function Na(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), av(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Vc(),
      (je = e),
      (de = l = Qt(e.current, null)),
      (pe = t),
      (Oe = 0),
      (pt = null),
      (gl = !1),
      (Ea = Ha(e, t)),
      (Bc = !1),
      (Ta = zt = Yc = Vl = bl = Be = 0),
      (ct = bn = null),
      (Lc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - dt(a),
          u = 1 << n;
        (t |= e[n]), (a &= ~u);
      }
    return (el = t), au(), l;
  }
  function ws(e, t) {
    (fe = null),
      (M.H = Eu),
      t === tn || t === du
        ? ((t = Wr()), (Oe = 3))
        : t === kr
          ? ((t = Wr()), (Oe = 4))
          : (Oe =
              t === Po
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (pt = t),
      de === null && ((Be = 1), Ru(e, Tt(t, e.current)));
  }
  function Cs() {
    var e = M.H;
    return (M.H = Eu), e === null ? Eu : e;
  }
  function Hs() {
    var e = M.A;
    return (M.A = qh), e;
  }
  function Kc() {
    (Be = 4),
      gl || ((pe & 4194048) !== pe && Rt.current !== null) || (Ea = !0),
      ((bl & 134217727) === 0 && (Vl & 134217727) === 0) ||
        je === null ||
        El(je, pe, zt, !1);
  }
  function kc(e, t, l) {
    var a = Ae;
    Ae |= 2;
    var n = Cs(),
      u = Hs();
    (je !== e || pe !== t) && ((wu = null), Na(e, t)), (t = !1);
    var i = Be;
    e: do
      try {
        if (Oe !== 0 && de !== null) {
          var r = de,
            v = pt;
          switch (Oe) {
            case 8:
              Vc(), (i = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var A = Oe;
              if (((Oe = 0), (pt = null), Ra(e, r, v, A), l && Ea)) {
                i = 0;
                break e;
              }
              break;
            default:
              (A = Oe), (Oe = 0), (pt = null), Ra(e, r, v, A);
          }
        }
        Lh(), (i = Be);
        break;
      } catch (D) {
        ws(e, D);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Kt = Yl = null),
      (Ae = a),
      (M.H = n),
      (M.A = u),
      de === null && ((je = null), (pe = 0), au()),
      i
    );
  }
  function Lh() {
    for (; de !== null; ) qs(de);
  }
  function Gh(e, t) {
    var l = Ae;
    Ae |= 2;
    var a = Cs(),
      n = Hs();
    je !== e || pe !== t
      ? ((wu = null), (Uu = ot() + 500), Na(e, t))
      : (Ea = Ha(e, t));
    e: do
      try {
        if (Oe !== 0 && de !== null) {
          t = de;
          var u = pt;
          t: switch (Oe) {
            case 1:
              (Oe = 0), (pt = null), Ra(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Jr(u)) {
                (Oe = 0), (pt = null), Bs(t);
                break;
              }
              (t = function () {
                (Oe !== 2 && Oe !== 9) || je !== e || (Oe = 7), Bt(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              Jr(u)
                ? ((Oe = 0), (pt = null), Bs(t))
                : ((Oe = 0), (pt = null), Ra(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (de.tag) {
                case 26:
                  i = de.memoizedState;
                case 5:
                case 27:
                  var r = de;
                  if (!i || bd(i)) {
                    (Oe = 0), (pt = null);
                    var v = r.sibling;
                    if (v !== null) de = v;
                    else {
                      var A = r.return;
                      A !== null ? ((de = A), Hu(A)) : (de = null);
                    }
                    break t;
                  }
              }
              (Oe = 0), (pt = null), Ra(e, t, u, 5);
              break;
            case 6:
              (Oe = 0), (pt = null), Ra(e, t, u, 6);
              break;
            case 8:
              Vc(), (Be = 6);
              break e;
            default:
              throw Error(f(462));
          }
        }
        Xh();
        break;
      } catch (D) {
        ws(e, D);
      }
    while (!0);
    return (
      (Kt = Yl = null),
      (M.H = a),
      (M.A = n),
      (Ae = l),
      de !== null ? 0 : ((je = null), (pe = 0), au(), Be)
    );
  }
  function Xh() {
    for (; de !== null && !Pe(); ) qs(de);
  }
  function qs(e) {
    var t = os(e.alternate, e, el);
    (e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (de = t);
  }
  function Bs(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ns(l, t, t.pendingProps, t.type, void 0, pe);
        break;
      case 11:
        t = ns(l, t, t.pendingProps, t.type.render, t.ref, pe);
        break;
      case 5:
        fc(t);
      default:
        ds(l, t), (t = de = Br(t, el)), (t = os(l, t, el));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Hu(e) : (de = t);
  }
  function Ra(e, t, l, a) {
    (Kt = Yl = null), fc(t), (ga = null), (sn = 0);
    var n = t.return;
    try {
      if (jh(e, n, t, l, pe)) {
        (Be = 1), Ru(e, Tt(l, e.current)), (de = null);
        return;
      }
    } catch (u) {
      if (n !== null) throw ((de = n), u);
      (Be = 1), Ru(e, Tt(l, e.current)), (de = null);
      return;
    }
    t.flags & 32768
      ? (Ee || a === 1
          ? (e = !0)
          : Ea || (pe & 536870912) !== 0
            ? (e = !1)
            : ((gl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Rt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Ys(t, e))
      : Hu(t);
  }
  function Hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ys(t, gl);
        return;
      }
      e = t.return;
      var l = Uh(t.alternate, t, el);
      if (l !== null) {
        de = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function Ys(e, t) {
    do {
      var l = wh(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (de = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        de = e;
        return;
      }
      de = e = l;
    } while (e !== null);
    (Be = 6), (de = null);
  }
  function Ls(e, t, l, a, n, u, i, r, v) {
    e.cancelPendingCommit = null;
    do qu();
    while (We !== 0);
    if ((Ae & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= qi),
        xm(e, l, u, i, r, v),
        e === je && ((de = je = null), (pe = 0)),
        (Aa = t),
        (Sl = e),
        (Oa = l),
        (Xc = u),
        (Qc = n),
        (_s = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Kh(Xn, function () {
              return Vs(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = M.T), (M.T = null), (n = X.p), (X.p = 2), (i = Ae), (Ae |= 4);
        try {
          Ch(e, t, l);
        } finally {
          (Ae = i), (X.p = n), (M.T = a);
        }
      }
      (We = 1), Gs(), Xs(), Qs();
    }
  }
  function Gs() {
    if (We === 1) {
      We = 0;
      var e = Sl,
        t = Aa,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = X.p;
        X.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          Ts(t, e);
          var u = uf,
            i = zr(e.containerInfo),
            r = u.focusedElem,
            v = u.selectionRange;
          if (
            i !== r &&
            r &&
            r.ownerDocument &&
            Rr(r.ownerDocument.documentElement, r)
          ) {
            if (v !== null && Di(r)) {
              var A = v.start,
                D = v.end;
              if ((D === void 0 && (D = A), "selectionStart" in r))
                (r.selectionStart = A),
                  (r.selectionEnd = Math.min(D, r.value.length));
              else {
                var C = r.ownerDocument || document,
                  N = (C && C.defaultView) || window;
                if (N.getSelection) {
                  var R = N.getSelection(),
                    ae = r.textContent.length,
                    te = Math.min(v.start, ae),
                    ze = v.end === void 0 ? te : Math.min(v.end, ae);
                  !R.extend && te > ze && ((i = ze), (ze = te), (te = i));
                  var x = Nr(r, te),
                    g = Nr(r, ze);
                  if (
                    x &&
                    g &&
                    (R.rangeCount !== 1 ||
                      R.anchorNode !== x.node ||
                      R.anchorOffset !== x.offset ||
                      R.focusNode !== g.node ||
                      R.focusOffset !== g.offset)
                  ) {
                    var E = C.createRange();
                    E.setStart(x.node, x.offset),
                      R.removeAllRanges(),
                      te > ze
                        ? (R.addRange(E), R.extend(g.node, g.offset))
                        : (E.setEnd(g.node, g.offset), R.addRange(E));
                  }
                }
              }
            }
            for (C = [], R = r; (R = R.parentNode); )
              R.nodeType === 1 &&
                C.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (
              typeof r.focus == "function" && r.focus(), r = 0;
              r < C.length;
              r++
            ) {
              var U = C[r];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          ($u = !!nf), (uf = nf = null);
        } finally {
          (Ae = n), (X.p = a), (M.T = l);
        }
      }
      (e.current = t), (We = 2);
    }
  }
  function Xs() {
    if (We === 2) {
      We = 0;
      var e = Sl,
        t = Aa,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = X.p;
        X.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          bs(e, t.alternate, t);
        } finally {
          (Ae = n), (X.p = a), (M.T = l);
        }
      }
      We = 3;
    }
  }
  function Qs() {
    if (We === 4 || We === 3) {
      (We = 0), Ut();
      var e = Sl,
        t = Aa,
        l = Oa,
        a = _s;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (We = 5)
        : ((We = 0), (Aa = Sl = null), Zs(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (xl = null),
        si(l),
        (t = t.stateNode),
        st && typeof st.onCommitFiberRoot == "function")
      )
        try {
          st.onCommitFiberRoot(Ca, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = M.T), (n = X.p), (X.p = 2), (M.T = null);
        try {
          for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
            var r = a[i];
            u(r.value, { componentStack: r.stack });
          }
        } finally {
          (M.T = t), (X.p = n);
        }
      }
      (Oa & 3) !== 0 && qu(),
        Bt(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === Zc
            ? xn++
            : ((xn = 0), (Zc = e))
          : (xn = 0),
        Sn(0);
    }
  }
  function Zs(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ia(t)));
  }
  function qu(e) {
    return Gs(), Xs(), Qs(), Vs();
  }
  function Vs() {
    if (We !== 5) return !1;
    var e = Sl,
      t = Xc;
    Xc = 0;
    var l = si(Oa),
      a = M.T,
      n = X.p;
    try {
      (X.p = 32 > l ? 32 : l), (M.T = null), (l = Qc), (Qc = null);
      var u = Sl,
        i = Oa;
      if (((We = 0), (Aa = Sl = null), (Oa = 0), (Ae & 6) !== 0))
        throw Error(f(331));
      var r = Ae;
      if (
        ((Ae |= 4),
        zs(u.current),
        Os(u, u.current, i, l),
        (Ae = r),
        Sn(0, !1),
        st && typeof st.onPostCommitFiberRoot == "function")
      )
        try {
          st.onPostCommitFiberRoot(Ca, u);
        } catch {}
      return !0;
    } finally {
      (X.p = n), (M.T = a), Zs(e, t);
    }
  }
  function Ks(e, t, l) {
    (t = Tt(l, t)),
      (t = Ec(e.stateNode, t, 2)),
      (e = sl(e, t, 2)),
      e !== null && (qa(e, 2), Bt(e));
  }
  function _e(e, t, l) {
    if (e.tag === 3) Ks(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ks(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (xl === null || !xl.has(a)))
          ) {
            (e = Tt(l, e)),
              (l = Wo(2)),
              (a = sl(t, l, 2)),
              a !== null && (Fo(l, a, t, e), qa(a, 2), Bt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Bh();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((Bc = !0), n.add(l), (e = Qh.bind(null, e, t, l)), t.then(e, e));
  }
  function Qh(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      je === e &&
        (pe & l) === l &&
        (Be === 4 || (Be === 3 && (pe & 62914560) === pe && 300 > ot() - Gc)
          ? (Ae & 2) === 0 && Na(e, 0)
          : (Yc |= l),
        Ta === pe && (Ta = 0)),
      Bt(e);
  }
  function ks(e, t) {
    t === 0 && (t = Xf()), (e = fa(e, t)), e !== null && (qa(e, t), Bt(e));
  }
  function Zh(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), ks(e, l);
  }
  function Vh(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), ks(e, l);
  }
  function Kh(e, t) {
    return Me(e, t);
  }
  var Bu = null,
    za = null,
    $c = !1,
    Yu = !1,
    Wc = !1,
    Kl = 0;
  function Bt(e) {
    e !== za &&
      e.next === null &&
      (za === null ? (Bu = za = e) : (za = za.next = e)),
      (Yu = !0),
      $c || (($c = !0), Jh());
  }
  function Sn(e, t) {
    if (!Wc && Yu) {
      Wc = !0;
      do
        for (var l = !1, a = Bu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                r = a.pingedLanes;
              (u = (1 << (31 - dt(42 | e) + 1)) - 1),
                (u &= n & ~(i & ~r)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((l = !0), Fs(a, u));
          } else
            (u = pe),
              (u = Vn(
                a,
                a === je ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Ha(a, u) || ((l = !0), Fs(a, u));
          a = a.next;
        }
      while (l);
      Wc = !1;
    }
  }
  function kh() {
    Js();
  }
  function Js() {
    Yu = $c = !1;
    var e = 0;
    Kl !== 0 && (lv() && (e = Kl), (Kl = 0));
    for (var t = ot(), l = null, a = Bu; a !== null; ) {
      var n = a.next,
        u = $s(a, t);
      u === 0
        ? ((a.next = null),
          l === null ? (Bu = n) : (l.next = n),
          n === null && (za = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Yu = !0)),
        (a = n);
    }
    Sn(e);
  }
  function $s(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var i = 31 - dt(u),
        r = 1 << i,
        v = n[i];
      v === -1
        ? ((r & l) === 0 || (r & a) !== 0) && (n[i] = bm(r, t))
        : v <= t && (e.expiredLanes |= r),
        (u &= ~r);
    }
    if (
      ((t = je),
      (l = pe),
      (l = Vn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (Oe === 2 || Oe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && be(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ha(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && be(a), si(l))) {
        case 2:
        case 8:
          l = Yf;
          break;
        case 32:
          l = Xn;
          break;
        case 268435456:
          l = Lf;
          break;
        default:
          l = Xn;
      }
      return (
        (a = Ws.bind(null, e)),
        (l = Me(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && be(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Ws(e, t) {
    if (We !== 0 && We !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (qu() && e.callbackNode !== l) return null;
    var a = pe;
    return (
      (a = Vn(
        e,
        e === je ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Ds(e, a, t),
          $s(e, ot()),
          e.callbackNode != null && e.callbackNode === l
            ? Ws.bind(null, e)
            : null)
    );
  }
  function Fs(e, t) {
    if (qu()) return null;
    Ds(e, t, !0);
  }
  function Jh() {
    nv(function () {
      (Ae & 6) !== 0 ? Me(Bf, kh) : Js();
    });
  }
  function Fc() {
    return Kl === 0 && (Kl = Gf()), Kl;
  }
  function Ps(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Wn("" + e);
  }
  function Is(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function $h(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Ps((n[at] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[at] || null)
          ? Ps(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var r = new eu("action", "action", null, a, n);
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Kl !== 0) {
                  var v = i ? Is(n, i) : new FormData(n);
                  pc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    null,
                    v,
                  );
                }
              } else
                typeof u == "function" &&
                  (r.preventDefault(),
                  (v = i ? Is(n, i) : new FormData(n)),
                  pc(
                    l,
                    { pending: !0, data: v, method: n.method, action: u },
                    u,
                    v,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Pc = 0; Pc < Hi.length; Pc++) {
    var Ic = Hi[Pc],
      Wh = Ic.toLowerCase(),
      Fh = Ic[0].toUpperCase() + Ic.slice(1);
    _t(Wh, "on" + Fh);
  }
  _t(jr, "onAnimationEnd"),
    _t(Dr, "onAnimationIteration"),
    _t(Ur, "onAnimationStart"),
    _t("dblclick", "onDoubleClick"),
    _t("focusin", "onFocus"),
    _t("focusout", "onBlur"),
    _t(hh, "onTransitionRun"),
    _t(vh, "onTransitionStart"),
    _t(yh, "onTransitionCancel"),
    _t(wr, "onTransitionEnd"),
    Pl("onMouseEnter", ["mouseout", "mouseover"]),
    Pl("onMouseLeave", ["mouseout", "mouseover"]),
    Pl("onPointerEnter", ["pointerout", "pointerover"]),
    Pl("onPointerLeave", ["pointerout", "pointerover"]),
    _l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    _l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    _l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    _l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    _l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    _l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var En =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ph = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(En),
    );
  function ed(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var r = a[i],
              v = r.instance,
              A = r.currentTarget;
            if (((r = r.listener), v !== u && n.isPropagationStopped()))
              break e;
            (u = r), (n.currentTarget = A);
            try {
              u(n);
            } catch (D) {
              Nu(D);
            }
            (n.currentTarget = null), (u = v);
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((r = a[i]),
              (v = r.instance),
              (A = r.currentTarget),
              (r = r.listener),
              v !== u && n.isPropagationStopped())
            )
              break e;
            (u = r), (n.currentTarget = A);
            try {
              u(n);
            } catch (D) {
              Nu(D);
            }
            (n.currentTarget = null), (u = v);
          }
      }
    }
  }
  function me(e, t) {
    var l = t[di];
    l === void 0 && (l = t[di] = new Set());
    var a = e + "__bubble";
    l.has(a) || (td(t, e, 2, !1), l.add(a));
  }
  function ef(e, t, l) {
    var a = 0;
    t && (a |= 4), td(l, e, a, t);
  }
  var Lu = "_reactListening" + Math.random().toString(36).slice(2);
  function tf(e) {
    if (!e[Lu]) {
      (e[Lu] = !0),
        kf.forEach(function (l) {
          l !== "selectionchange" && (Ph.has(l) || ef(l, !1, e), ef(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Lu] || ((t[Lu] = !0), ef("selectionchange", !1, t));
    }
  }
  function td(e, t, l, a) {
    switch (Od(t)) {
      case 2:
        var n = Ov;
        break;
      case 8:
        n = Nv;
        break;
      default:
        n = yf;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !Ti ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1);
  }
  function lf(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var v = i.tag;
              if ((v === 3 || v === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; r !== null; ) {
            if (((i = $l(r)), i === null)) return;
            if (((v = i.tag), v === 5 || v === 6 || v === 26 || v === 27)) {
              a = u = i;
              continue e;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    cr(function () {
      var A = u,
        D = Si(l),
        C = [];
      e: {
        var N = Cr.get(e);
        if (N !== void 0) {
          var R = eu,
            ae = e;
          switch (e) {
            case "keypress":
              if (Pn(l) === 0) break e;
            case "keydown":
            case "keyup":
              R = Km;
              break;
            case "focusin":
              (ae = "focus"), (R = Ri);
              break;
            case "focusout":
              (ae = "blur"), (R = Ri);
              break;
            case "beforeblur":
            case "afterblur":
              R = Ri;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = or;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = $m;
              break;
            case jr:
            case Dr:
            case Ur:
              R = qm;
              break;
            case wr:
              R = Fm;
              break;
            case "scroll":
            case "scrollend":
              R = Dm;
              break;
            case "wheel":
              R = Im;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Ym;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = dr;
              break;
            case "toggle":
            case "beforetoggle":
              R = th;
          }
          var te = (t & 4) !== 0,
            ze = !te && (e === "scroll" || e === "scrollend"),
            x = te ? (N !== null ? N + "Capture" : null) : N;
          te = [];
          for (var g = A, E; g !== null; ) {
            var U = g;
            if (
              ((E = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                E === null ||
                x === null ||
                ((U = La(g, x)), U != null && te.push(Tn(g, U, E))),
              ze)
            )
              break;
            g = g.return;
          }
          0 < te.length &&
            ((N = new R(N, ae, null, l, D)),
            C.push({ event: N, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (R = e === "mouseout" || e === "pointerout"),
            N &&
              l !== xi &&
              (ae = l.relatedTarget || l.fromElement) &&
              ($l(ae) || ae[Jl]))
          )
            break e;
          if (
            (R || N) &&
            ((N =
              D.window === D
                ? D
                : (N = D.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            R
              ? ((ae = l.relatedTarget || l.toElement),
                (R = A),
                (ae = ae ? $l(ae) : null),
                ae !== null &&
                  ((ze = h(ae)),
                  (te = ae.tag),
                  ae !== ze || (te !== 5 && te !== 27 && te !== 6)) &&
                  (ae = null))
              : ((R = null), (ae = A)),
            R !== ae)
          ) {
            if (
              ((te = or),
              (U = "onMouseLeave"),
              (x = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((te = dr),
                (U = "onPointerLeave"),
                (x = "onPointerEnter"),
                (g = "pointer")),
              (ze = R == null ? N : Ya(R)),
              (E = ae == null ? N : Ya(ae)),
              (N = new te(U, g + "leave", R, l, D)),
              (N.target = ze),
              (N.relatedTarget = E),
              (U = null),
              $l(D) === A &&
                ((te = new te(x, g + "enter", ae, l, D)),
                (te.target = E),
                (te.relatedTarget = ze),
                (U = te)),
              (ze = U),
              R && ae)
            )
              t: {
                for (te = R, x = ae, g = 0, E = te; E; E = Ma(E)) g++;
                for (E = 0, U = x; U; U = Ma(U)) E++;
                for (; 0 < g - E; ) (te = Ma(te)), g--;
                for (; 0 < E - g; ) (x = Ma(x)), E--;
                for (; g--; ) {
                  if (te === x || (x !== null && te === x.alternate)) break t;
                  (te = Ma(te)), (x = Ma(x));
                }
                te = null;
              }
            else te = null;
            R !== null && ld(C, N, R, te, !1),
              ae !== null && ze !== null && ld(C, ze, ae, te, !0);
          }
        }
        e: {
          if (
            ((N = A ? Ya(A) : window),
            (R = N.nodeName && N.nodeName.toLowerCase()),
            R === "select" || (R === "input" && N.type === "file"))
          )
            var k = xr;
          else if (gr(N))
            if (Sr) k = sh;
            else {
              k = rh;
              var se = fh;
            }
          else
            (R = N.nodeName),
              !R ||
              R.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? A && bi(A.elementType) && (k = xr)
                : (k = oh);
          if (k && (k = k(e, A))) {
            br(C, k, l, D);
            break e;
          }
          se && se(e, N, A),
            e === "focusout" &&
              A &&
              N.type === "number" &&
              A.memoizedProps.value != null &&
              gi(N, "number", N.value);
        }
        switch (((se = A ? Ya(A) : window), e)) {
          case "focusin":
            (gr(se) || se.contentEditable === "true") &&
              ((ua = se), (Ui = A), (Ja = null));
            break;
          case "focusout":
            Ja = Ui = ua = null;
            break;
          case "mousedown":
            wi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wi = !1), Mr(C, l, D);
            break;
          case "selectionchange":
            if (mh) break;
          case "keydown":
          case "keyup":
            Mr(C, l, D);
        }
        var W;
        if (Mi)
          e: {
            switch (e) {
              case "compositionstart":
                var le = "onCompositionStart";
                break e;
              case "compositionend":
                le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                le = "onCompositionUpdate";
                break e;
            }
            le = void 0;
          }
        else
          na
            ? yr(e, l) && (le = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (le = "onCompositionStart");
        le &&
          (mr &&
            l.locale !== "ko" &&
            (na || le !== "onCompositionStart"
              ? le === "onCompositionEnd" && na && (W = fr())
              : ((cl = D),
                (Ai = "value" in cl ? cl.value : cl.textContent),
                (na = !0))),
          (se = Gu(A, le)),
          0 < se.length &&
            ((le = new sr(le, e, null, l, D)),
            C.push({ event: le, listeners: se }),
            W ? (le.data = W) : ((W = pr(l)), W !== null && (le.data = W)))),
          (W = ah ? nh(e, l) : uh(e, l)) &&
            ((le = Gu(A, "onBeforeInput")),
            0 < le.length &&
              ((se = new sr("onBeforeInput", "beforeinput", null, l, D)),
              C.push({ event: se, listeners: le }),
              (se.data = W))),
          $h(C, e, A, l, D);
      }
      ed(C, t);
    });
  }
  function Tn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Gu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = La(e, l)),
          n != null && a.unshift(Tn(e, n, u)),
          (n = La(e, t)),
          n != null && a.push(Tn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Ma(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ld(e, t, l, a, n) {
    for (var u = t._reactName, i = []; l !== null && l !== a; ) {
      var r = l,
        v = r.alternate,
        A = r.stateNode;
      if (((r = r.tag), v !== null && v === a)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        A === null ||
        ((v = A),
        n
          ? ((A = La(l, u)), A != null && i.unshift(Tn(l, A, v)))
          : n || ((A = La(l, u)), A != null && i.push(Tn(l, A, v)))),
        (l = l.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Ih = /\r\n?/g,
    ev = /\u0000|\uFFFD/g;
  function ad(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ih,
        `
`,
      )
      .replace(ev, "");
  }
  function nd(e, t) {
    return (t = ad(t)), ad(e) === t;
  }
  function Xu() {}
  function Re(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ta(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ta(e, "" + a);
        break;
      case "className":
        kn(e, "class", a);
        break;
      case "tabIndex":
        kn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kn(e, l, a);
        break;
      case "style":
        ur(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          kn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = Wn("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && Re(e, t, "name", n.name, n, null),
                Re(e, t, "formEncType", n.formEncType, n, null),
                Re(e, t, "formMethod", n.formMethod, n, null),
                Re(e, t, "formTarget", n.formTarget, n, null))
              : (Re(e, t, "encType", n.encType, n, null),
                Re(e, t, "method", n.method, n, null),
                Re(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = Wn("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Xu);
        break;
      case "onScroll":
        a != null && me("scroll", e);
        break;
      case "onScrollEnd":
        a != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = Wn("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        me("beforetoggle", e), me("toggle", e), Kn(e, "popover", a);
        break;
      case "xlinkActuate":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Gt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Kn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = _m.get(l) || l), Kn(e, l, a));
    }
  }
  function af(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        ur(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ta(e, a)
          : (typeof a == "number" || typeof a == "bigint") && ta(e, "" + a);
        break;
      case "onScroll":
        a != null && me("scroll", e);
        break;
      case "onScrollEnd":
        a != null && me("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Xu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Jf.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (u = e[at] || null),
              (u = u != null ? u[l] : null),
              typeof u == "function" && e.removeEventListener(t, u, n),
              typeof a == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Kn(e, l, a);
          }
    }
  }
  function Fe(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        me("error", e), me("load", e);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  Re(e, t, u, i, l, null);
              }
          }
        n && Re(e, t, "srcSet", l.srcSet, l, null),
          a && Re(e, t, "src", l.src, l, null);
        return;
      case "input":
        me("invalid", e);
        var r = (u = i = n = null),
          v = null,
          A = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  n = D;
                  break;
                case "type":
                  i = D;
                  break;
                case "checked":
                  v = D;
                  break;
                case "defaultChecked":
                  A = D;
                  break;
                case "value":
                  u = D;
                  break;
                case "defaultValue":
                  r = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null) throw Error(f(137, t));
                  break;
                default:
                  Re(e, t, a, D, l, null);
              }
          }
        tr(e, u, r, v, A, i, n, !1), Jn(e);
        return;
      case "select":
        me("invalid", e), (a = i = u = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
            switch (n) {
              case "value":
                u = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "multiple":
                a = r;
              default:
                Re(e, t, n, r, l, null);
            }
        (t = u),
          (l = i),
          (e.multiple = !!a),
          t != null ? ea(e, !!a, t, !1) : l != null && ea(e, !!a, l, !0);
        return;
      case "textarea":
        me("invalid", e), (u = n = a = null);
        for (i in l)
          if (l.hasOwnProperty(i) && ((r = l[i]), r != null))
            switch (i) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                u = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                Re(e, t, i, r, l, null);
            }
        ar(e, a, n, u), Jn(e);
        return;
      case "option":
        for (v in l)
          if (l.hasOwnProperty(v) && ((a = l[v]), a != null))
            switch (v) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Re(e, t, v, a, l, null);
            }
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++) me(En[a], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (A in l)
          if (l.hasOwnProperty(A) && ((a = l[A]), a != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                Re(e, t, A, a, l, null);
            }
        return;
      default:
        if (bi(t)) {
          for (D in l)
            l.hasOwnProperty(D) &&
              ((a = l[D]), a !== void 0 && af(e, t, D, a, l, void 0));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && ((a = l[r]), a != null && Re(e, t, r, a, l, null));
  }
  function tv(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          r = null,
          v = null,
          A = null,
          D = null;
        for (R in l) {
          var C = l[R];
          if (l.hasOwnProperty(R) && C != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = C;
              default:
                a.hasOwnProperty(R) || Re(e, t, R, null, a, C);
            }
        }
        for (var N in a) {
          var R = a[N];
          if (((C = l[N]), a.hasOwnProperty(N) && (R != null || C != null)))
            switch (N) {
              case "type":
                u = R;
                break;
              case "name":
                n = R;
                break;
              case "checked":
                A = R;
                break;
              case "defaultChecked":
                D = R;
                break;
              case "value":
                i = R;
                break;
              case "defaultValue":
                r = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(f(137, t));
                break;
              default:
                R !== C && Re(e, t, N, R, a, C);
            }
        }
        pi(e, i, r, v, A, D, u, n);
        return;
      case "select":
        R = i = r = N = null;
        for (u in l)
          if (((v = l[u]), l.hasOwnProperty(u) && v != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = v;
              default:
                a.hasOwnProperty(u) || Re(e, t, u, null, a, v);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (v = l[n]),
            a.hasOwnProperty(n) && (u != null || v != null))
          )
            switch (n) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                r = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== v && Re(e, t, n, u, a, v);
            }
        (t = r),
          (l = i),
          (a = R),
          N != null
            ? ea(e, !!l, N, !1)
            : !!a != !!l &&
              (t != null ? ea(e, !!l, t, !0) : ea(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        R = N = null;
        for (r in l)
          if (
            ((n = l[r]),
            l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, r, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                N = n;
                break;
              case "defaultValue":
                R = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && Re(e, t, i, n, a, u);
            }
        lr(e, N, R);
        return;
      case "option":
        for (var ae in l)
          if (
            ((N = l[ae]),
            l.hasOwnProperty(ae) && N != null && !a.hasOwnProperty(ae))
          )
            switch (ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Re(e, t, ae, null, a, N);
            }
        for (v in a)
          if (
            ((N = a[v]),
            (R = l[v]),
            a.hasOwnProperty(v) && N !== R && (N != null || R != null))
          )
            switch (v) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Re(e, t, v, N, a, R);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var te in l)
          (N = l[te]),
            l.hasOwnProperty(te) &&
              N != null &&
              !a.hasOwnProperty(te) &&
              Re(e, t, te, null, a, N);
        for (A in a)
          if (
            ((N = a[A]),
            (R = l[A]),
            a.hasOwnProperty(A) && N !== R && (N != null || R != null))
          )
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(f(137, t));
                break;
              default:
                Re(e, t, A, N, a, R);
            }
        return;
      default:
        if (bi(t)) {
          for (var ze in l)
            (N = l[ze]),
              l.hasOwnProperty(ze) &&
                N !== void 0 &&
                !a.hasOwnProperty(ze) &&
                af(e, t, ze, void 0, a, N);
          for (D in a)
            (N = a[D]),
              (R = l[D]),
              !a.hasOwnProperty(D) ||
                N === R ||
                (N === void 0 && R === void 0) ||
                af(e, t, D, N, a, R);
          return;
        }
    }
    for (var x in l)
      (N = l[x]),
        l.hasOwnProperty(x) &&
          N != null &&
          !a.hasOwnProperty(x) &&
          Re(e, t, x, null, a, N);
    for (C in a)
      (N = a[C]),
        (R = l[C]),
        !a.hasOwnProperty(C) ||
          N === R ||
          (N == null && R == null) ||
          Re(e, t, C, N, a, R);
  }
  var nf = null,
    uf = null;
  function Qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ud(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function id(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function cf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ff = null;
  function lv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ff
        ? !1
        : ((ff = e), !0)
      : ((ff = null), !1);
  }
  var cd = typeof setTimeout == "function" ? setTimeout : void 0,
    av = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fd = typeof Promise == "function" ? Promise : void 0,
    nv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof fd < "u"
          ? function (e) {
              return fd.resolve(null).then(e).catch(uv);
            }
          : cd;
  function uv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Tl(e) {
    return e === "head";
  }
  function rd(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var i = e.ownerDocument;
            if ((l & 1 && An(i.documentElement), l & 2 && An(i.body), l & 4))
              for (l = i.head, An(l), i = l.firstChild; i; ) {
                var r = i.nextSibling,
                  v = i.nodeName;
                i[Ba] ||
                  v === "SCRIPT" ||
                  v === "STYLE" ||
                  (v === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(i),
                  (i = r);
              }
          }
          if (n === 0) {
            e.removeChild(u), Dn(t);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = u;
    } while (l);
    Dn(t);
  }
  function rf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(l), mi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function iv(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Ba])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Dt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function cv(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Dt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function of(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function fv(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var sf = null;
  function od(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function sd(e, t, l) {
    switch (((t = Qu(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(f(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(f(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function An(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    mi(e);
  }
  var Mt = new Map(),
    dd = new Set();
  function Zu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var tl = X.d;
  X.d = { f: rv, r: ov, D: sv, C: dv, L: mv, m: hv, X: yv, S: vv, M: pv };
  function rv() {
    var e = tl.f(),
      t = Cu();
    return e || t;
  }
  function ov(e) {
    var t = Wl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Do(t) : tl.r(e);
  }
  var _a = typeof document > "u" ? null : document;
  function md(e, t, l) {
    var a = _a;
    if (a && typeof t == "string" && t) {
      var n = Et(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        dd.has(n) ||
          (dd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            Fe(t, "link", e),
            Ve(t),
            a.head.appendChild(t)));
    }
  }
  function sv(e) {
    tl.D(e), md("dns-prefetch", e, null);
  }
  function dv(e, t) {
    tl.C(e, t), md("preconnect", e, t);
  }
  function mv(e, t, l) {
    tl.L(e, t, l);
    var a = _a;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Et(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Et(l.imageSizes) + '"]'))
        : (n += '[href="' + Et(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = ja(e);
          break;
        case "script":
          u = Da(e);
      }
      Mt.has(u) ||
        ((e = O(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Mt.set(u, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(On(u))) ||
          (t === "script" && a.querySelector(Nn(u))) ||
          ((t = a.createElement("link")),
          Fe(t, "link", e),
          Ve(t),
          a.head.appendChild(t)));
    }
  }
  function hv(e, t) {
    tl.m(e, t);
    var l = _a;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Da(e);
      }
      if (
        !Mt.has(u) &&
        ((e = O({ rel: "modulepreload", href: e }, t)),
        Mt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Nn(u))) return;
        }
        (a = l.createElement("link")),
          Fe(a, "link", e),
          Ve(a),
          l.head.appendChild(a);
      }
    }
  }
  function vv(e, t, l) {
    tl.S(e, t, l);
    var a = _a;
    if (a && e) {
      var n = Fl(a).hoistableStyles,
        u = ja(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var r = { loading: 0, preload: null };
        if ((i = a.querySelector(On(u)))) r.loading = 5;
        else {
          (e = O({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Mt.get(u)) && df(e, l);
          var v = (i = a.createElement("link"));
          Ve(v),
            Fe(v, "link", e),
            (v._p = new Promise(function (A, D) {
              (v.onload = A), (v.onerror = D);
            })),
            v.addEventListener("load", function () {
              r.loading |= 1;
            }),
            v.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Vu(i, t, a);
        }
        (i = { type: "stylesheet", instance: i, count: 1, state: r }),
          n.set(u, i);
      }
    }
  }
  function yv(e, t) {
    tl.X(e, t);
    var l = _a;
    if (l && e) {
      var a = Fl(l).hoistableScripts,
        n = Da(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Nn(n))),
        u ||
          ((e = O({ src: e, async: !0 }, t)),
          (t = Mt.get(n)) && mf(e, t),
          (u = l.createElement("script")),
          Ve(u),
          Fe(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function pv(e, t) {
    tl.M(e, t);
    var l = _a;
    if (l && e) {
      var a = Fl(l).hoistableScripts,
        n = Da(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(Nn(n))),
        u ||
          ((e = O({ src: e, async: !0, type: "module" }, t)),
          (t = Mt.get(n)) && mf(e, t),
          (u = l.createElement("script")),
          Ve(u),
          Fe(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function hd(e, t, l, a) {
    var n = (n = F.current) ? Zu(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = ja(l.href)),
            (l = Fl(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = ja(l.href);
          var u = Fl(n).hoistableStyles,
            i = u.get(e);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, i),
              (u = n.querySelector(On(e))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Mt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Mt.set(e, l),
                u || gv(n, e, l, i.state))),
            t && a === null)
          )
            throw Error(f(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Da(l)),
              (l = Fl(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, e));
    }
  }
  function ja(e) {
    return 'href="' + Et(e) + '"';
  }
  function On(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function vd(e) {
    return O({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function gv(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Fe(t, "link", l),
        Ve(t),
        e.head.appendChild(t));
  }
  function Da(e) {
    return '[src="' + Et(e) + '"]';
  }
  function Nn(e) {
    return "script[async]" + e;
  }
  function yd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
          if (a) return (t.instance = a), Ve(a), a;
          var n = O({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Ve(a),
            Fe(a, "style", n),
            Vu(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = ja(l.href);
          var u = e.querySelector(On(n));
          if (u) return (t.state.loading |= 4), (t.instance = u), Ve(u), u;
          (a = vd(l)),
            (n = Mt.get(n)) && df(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            Ve(u);
          var i = u;
          return (
            (i._p = new Promise(function (r, v) {
              (i.onload = r), (i.onerror = v);
            })),
            Fe(u, "link", a),
            (t.state.loading |= 4),
            Vu(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Da(l.src)),
            (n = e.querySelector(Nn(u)))
              ? ((t.instance = n), Ve(n), n)
              : ((a = l),
                (n = Mt.get(u)) && ((a = O({}, l)), mf(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Ve(n),
                Fe(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Vu(a, l.precedence, e));
    return t.instance;
  }
  function Vu(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var r = a[i];
      if (r.dataset.precedence === t) u = r;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function df(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function mf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Ku = null;
  function pd(e, t, l) {
    if (Ku === null) {
      var a = new Map(),
        n = (Ku = new Map());
      n.set(l, a);
    } else (n = Ku), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[Ba] ||
          u[Ie] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var r = a.get(i);
        r ? r.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function gd(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      );
  }
  function bv(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function bd(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Rn = null;
  function xv() {}
  function Sv(e, t, l) {
    if (Rn === null) throw Error(f(475));
    var a = Rn;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = ja(l.href),
          u = e.querySelector(On(n));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = ku.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = u),
            Ve(u);
          return;
        }
        (u = e.ownerDocument || e),
          (l = vd(l)),
          (n = Mt.get(n)) && df(l, n),
          (u = u.createElement("link")),
          Ve(u);
        var i = u;
        (i._p = new Promise(function (r, v) {
          (i.onload = r), (i.onerror = v);
        })),
          Fe(u, "link", l),
          (t.instance = u);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = ku.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Ev() {
    if (Rn === null) throw Error(f(475));
    var e = Rn;
    return (
      e.stylesheets && e.count === 0 && hf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && hf(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function ku() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) hf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ju = null;
  function hf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ju = new Map()),
        t.forEach(Tv, e),
        (Ju = null),
        ku.call(e));
  }
  function Tv(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ju.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Ju.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = ku.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var zn = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function Av(e, t, l, a, n, u, i, r) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ri(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ri(0)),
      (this.hiddenUpdates = ri(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function xd(e, t, l, a, n, u, i, r, v, A, D, C) {
    return (
      (e = new Av(e, t, l, i, r, v, A, C)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ht(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Ji()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Pi(u),
      e
    );
  }
  function Sd(e) {
    return e ? ((e = ra), e) : ra;
  }
  function Ed(e, t, l, a, n, u) {
    (n = Sd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ol(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = sl(e, a, t)),
      l !== null && (bt(l, e, t), an(l, e, t));
  }
  function Td(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function vf(e, t) {
    Td(e, t), (e = e.alternate) && Td(e, t);
  }
  function Ad(e) {
    if (e.tag === 13) {
      var t = fa(e, 67108864);
      t !== null && bt(t, e, 67108864), vf(e, 67108864);
    }
  }
  var $u = !0;
  function Ov(e, t, l, a) {
    var n = M.T;
    M.T = null;
    var u = X.p;
    try {
      (X.p = 2), yf(e, t, l, a);
    } finally {
      (X.p = u), (M.T = n);
    }
  }
  function Nv(e, t, l, a) {
    var n = M.T;
    M.T = null;
    var u = X.p;
    try {
      (X.p = 8), yf(e, t, l, a);
    } finally {
      (X.p = u), (M.T = n);
    }
  }
  function yf(e, t, l, a) {
    if ($u) {
      var n = pf(a);
      if (n === null) lf(e, t, a, Wu, l), Nd(e, a);
      else if (zv(n, e, t, l, a)) a.stopPropagation();
      else if ((Nd(e, a), t & 4 && -1 < Rv.indexOf(e))) {
        for (; n !== null; ) {
          var u = Wl(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Ml(u.pendingLanes);
                  if (i !== 0) {
                    var r = u;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; i; ) {
                      var v = 1 << (31 - dt(i));
                      (r.entanglements[1] |= v), (i &= ~v);
                    }
                    Bt(u), (Ae & 6) === 0 && ((Uu = ot() + 500), Sn(0));
                  }
                }
                break;
              case 13:
                (r = fa(u, 2)), r !== null && bt(r, u, 2), Cu(), vf(u, 2);
            }
          if (((u = pf(a)), u === null && lf(e, t, a, Wu, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else lf(e, t, a, null, l);
    }
  }
  function pf(e) {
    return (e = Si(e)), gf(e);
  }
  var Wu = null;
  function gf(e) {
    if (((Wu = null), (e = $l(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = S(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Wu = e), null;
  }
  function Od(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dm()) {
          case Bf:
            return 2;
          case Yf:
            return 8;
          case Xn:
          case mm:
            return 32;
          case Lf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1,
    Al = null,
    Ol = null,
    Nl = null,
    Mn = new Map(),
    _n = new Map(),
    Rl = [],
    Rv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Nd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        Ol = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Mn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _n.delete(t.pointerId);
    }
  }
  function jn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Wl(t)), t !== null && Ad(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function zv(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (Al = jn(Al, e, t, l, a, n)), !0;
      case "dragenter":
        return (Ol = jn(Ol, e, t, l, a, n)), !0;
      case "mouseover":
        return (Nl = jn(Nl, e, t, l, a, n)), !0;
      case "pointerover":
        var u = n.pointerId;
        return Mn.set(u, jn(Mn.get(u) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (u = n.pointerId), _n.set(u, jn(_n.get(u) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function Rd(e) {
    var t = $l(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = S(l)), t !== null)) {
            (e.blockedOn = t),
              Sm(e.priority, function () {
                if (l.tag === 13) {
                  var a = gt();
                  a = oi(a);
                  var n = fa(l, a);
                  n !== null && bt(n, l, a), vf(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Fu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = pf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (xi = a), l.target.dispatchEvent(a), (xi = null);
      } else return (t = Wl(l)), t !== null && Ad(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function zd(e, t, l) {
    Fu(e) && l.delete(t);
  }
  function Mv() {
    (bf = !1),
      Al !== null && Fu(Al) && (Al = null),
      Ol !== null && Fu(Ol) && (Ol = null),
      Nl !== null && Fu(Nl) && (Nl = null),
      Mn.forEach(zd),
      _n.forEach(zd);
  }
  function Pu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      bf ||
        ((bf = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Mv)));
  }
  var Iu = null;
  function Md(e) {
    Iu !== e &&
      ((Iu = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Iu === e && (Iu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (gf(a || l) === null) continue;
            break;
          }
          var u = Wl(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            pc(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Dn(e) {
    function t(v) {
      return Pu(v, e);
    }
    Al !== null && Pu(Al, e),
      Ol !== null && Pu(Ol, e),
      Nl !== null && Pu(Nl, e),
      Mn.forEach(t),
      _n.forEach(t);
    for (var l = 0; l < Rl.length; l++) {
      var a = Rl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Rl.length && ((l = Rl[0]), l.blockedOn === null); )
      Rd(l), l.blockedOn === null && Rl.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[at] || null;
        if (typeof u == "function") i || Md(l);
        else if (i) {
          var r = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[at] || null))) r = i.formAction;
            else if (gf(n) !== null) continue;
          } else r = i.action;
          typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
            Md(l);
        }
      }
  }
  function xf(e) {
    this._internalRoot = e;
  }
  (ei.prototype.render = xf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current,
        a = gt();
      Ed(l, a, e, t, null, null);
    }),
    (ei.prototype.unmount = xf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Ed(e.current, 2, null, e, null, null), Cu(), (t[Jl] = null);
        }
      });
  function ei(e) {
    this._internalRoot = e;
  }
  ei.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Rl.length && t !== 0 && t < Rl[l].priority; l++);
      Rl.splice(l, 0, e), l === 0 && Rd(e);
    }
  };
  var _d = m.version;
  if (_d !== "19.1.0") throw Error(f(527, _d, "19.1.0"));
  X.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(f(188))
        : ((e = Object.keys(e).join(",")), Error(f(268, e)));
    return (
      (e = y(t)),
      (e = e !== null ? o(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var _v = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber)
      try {
        (Ca = ti.inject(_v)), (st = ti);
      } catch {}
  }
  return (
    (wn.createRoot = function (e, t) {
      if (!s(e)) throw Error(f(299));
      var l = !1,
        a = "",
        n = Ko,
        u = ko,
        i = Jo,
        r = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (r = t.unstable_transitionCallbacks)),
        (t = xd(e, 1, !1, null, null, l, a, n, u, i, r, null)),
        (e[Jl] = t.current),
        tf(e),
        new xf(t)
      );
    }),
    (wn.hydrateRoot = function (e, t, l) {
      if (!s(e)) throw Error(f(299));
      var a = !1,
        n = "",
        u = Ko,
        i = ko,
        r = Jo,
        v = null,
        A = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (v = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (A = l.formState)),
        (t = xd(e, 1, !0, t, l ?? null, a, n, u, i, r, v, A)),
        (t.context = Sd(null)),
        (l = t.current),
        (a = gt()),
        (a = oi(a)),
        (n = ol(a)),
        (n.callback = null),
        sl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        qa(t, l),
        Bt(t),
        (e[Jl] = t.current),
        tf(e),
        new ei(t)
      );
    }),
    (wn.version = "19.1.0"),
    wn
  );
}
var Ld;
function Gv() {
  if (Ld) return Tf.exports;
  Ld = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (m) {
        console.error(m);
      }
  }
  return c(), (Tf.exports = Lv()), Tf.exports;
}
var Xv = Gv();
const Qv = "/kindcare-react/assets/patient-B8hP70FI.png",
  Zv = () =>
    b.jsx("main", {
      className: "bg-[var(--secondary)] text-white",
      children: b.jsxs("section", {
        className:
          "grid grid-cols-1 gap-8 bg-[var(--teal)] px-4 py-12 text-[var(--primary)] sm:px-8 md:py-24 lg:grid-cols-7",
        children: [
          b.jsx("div", {
            "data-aos": "fade-right",
            "data-aos-delay": "200",
            "data-aos-duration": "1000",
            "data-aos-easing": "ease-in-out",
            "data-aos-once": "true",
            className:
              "order-2 rounded-[20px] shadow-2xl lg:order-1 lg:col-span-2 lg:col-start-2",
            children: b.jsx("img", {
              src: Qv,
              alt: "Smiling senior patient receiving care at home from a KindCare nurse",
              className: "h-auto w-full rounded-[20px]",
            }),
          }),
          b.jsxs("article", {
            "data-aos": "fade-left",
            "data-aos-delay": "200",
            "data-aos-duration": "1000",
            "data-aos-easing": "ease-in-out",
            "data-aos-once": "true",
            className:
              "order-1 flex flex-col items-center justify-center rounded-[20px] bg-[var(--white)] p-6 shadow-2xl sm:p-8 md:p-12 lg:order-2 lg:col-span-3 lg:col-start-4 lg:px-20",
            children: [
              b.jsx("h1", {
                className:
                  "mb-4 text-center text-3xl font-light sm:mb-6 sm:text-4xl md:text-4xl lg:text-2xl xl:text-6xl",
                children: "Compassionate healthcare, at home with you.",
              }),
              b.jsx("p", {
                className:
                  "mb-6 text-center text-lg font-light sm:mb-8 sm:text-xl md:text-xl lg:text-xl",
                children:
                  "Reliable care, thoughtful support, and a path forward—tailored to you.",
              }),
              b.jsx("a", {
                href: "#register",
                className:
                  "rounded-2xl bg-[var(--primary)] px-6 py-3 text-base text-white transition-colors hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none",
                children: "Request Consultation",
              }),
            ],
          }),
        ],
      }),
    }),
  Rf = ({
    imageSrc: c,
    title: m,
    description: d,
    buttonText: f,
    buttonLink: s,
    fadeDirection: h,
  }) =>
    b.jsxs("article", {
      "data-aos": h,
      "data-aos-delay": "200",
      "data-aos-duration": "1000",
      "data-aos-easing": "ease-in-out",
      "data-aos-once": "true",
      className:
        "flex origin-center transform flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[var(--teal)] shadow-2xl transition-all duration-500 ease-in-out hover:scale-105",
      children: [
        b.jsx("img", {
          src: c,
          alt: m,
          className: "h-48 w-full object-cover sm:h-56",
        }),
        b.jsxs("div", {
          className:
            "flex h-full flex-col items-center px-4 py-6 text-center text-[var(--primary)] sm:px-5 sm:py-8",
          children: [
            b.jsx("h3", {
              className:
                "mb-3 text-2xl font-light sm:mb-4 sm:text-3xl md:text-4xl",
              children: m,
            }),
            b.jsx("p", {
              className: "mb-6 flex-grow text-sm sm:mb-8 sm:text-base",
              children: d,
            }),
            b.jsx("a", {
              href: s,
              className:
                "w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] sm:px-6 sm:py-3 sm:text-base",
              children: f,
            }),
          ],
        }),
      ],
    }),
  Vv = "/kindcare-react/assets/hospice-C0oP6JMA.png",
  Kv = "/kindcare-react/assets/Palliative-rjFEnB4-.png",
  kv = "/kindcare-react/assets/home-CAETwr6s.png",
  Jv = () =>
    b.jsxs("section", {
      className: "bg-[var(--lightgreen)] px-4 py-12 sm:px-8 md:py-24",
      children: [
        b.jsx("h3", {
          "data-aos": "fade-down",
          "data-aos-delay": "200",
          "data-aos-duration": "1000",
          "data-aos-easing": "ease-in-out",
          "data-aos-once": "true",
          className:
            "mb-2 text-center text-xl text-[var(--white)] sm:text-2xl md:text-3xl lg:text-3xl",
          children: "What We Offer",
        }),
        b.jsx("h2", {
          "data-aos": "fade-down",
          "data-aos-delay": "200",
          "data-aos-duration": "1000",
          "data-aos-once": "true",
          "data-aos-easing": "ease-in-out",
          className:
            "mb-8 text-center text-3xl font-light text-[var(--primary)] sm:mb-16 sm:text-4xl md:text-5xl lg:text-6xl",
          children: "Our Services",
        }),
        b.jsxs("div", {
          className:
            "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          children: [
            b.jsx(Rf, {
              imageSrc: Vv,
              title: "Hospice Care",
              description:
                "When a loved one faces a life-limiting illness, our team offers compassionate care and comfort—bringing peace, dignity, and support to every moment.",
              buttonText: "Learn More",
              buttonLink: "#",
              fadeDirection: "fade-right",
            }),
            b.jsx(Rf, {
              imageSrc: Kv,
              title: "Palliative Care",
              description:
                "Whether you're healing from surgery or managing a chronic condition, our skilled nurses and therapists provide personalized care—right at home—so you can focus on what matters most: feeling your best.",
              buttonText: "Learn More",
              buttonLink: "#",
              fadeDirection: "fade-up",
            }),
            b.jsx(Rf, {
              imageSrc: kv,
              title: "Home Health Care",
              description:
                "For those facing a serious illness, our compassionate team provides expert care to ease symptoms and enhance quality of life.",
              buttonText: "Learn More",
              buttonLink: "#",
              fadeDirection: "fade-left",
            }),
          ],
        }),
      ],
    }),
  $v = () => b.jsxs(b.Fragment, { children: [b.jsx(Zv, {}), b.jsx(Jv, {})] });
var ai = { exports: {} },
  Wv = ai.exports,
  Gd;
function Fv() {
  return (
    Gd ||
      ((Gd = 1),
      (function (c, m) {
        (function (d, f) {
          c.exports = f();
        })(Wv, function () {
          return (function (d) {
            function f(h) {
              if (s[h]) return s[h].exports;
              var S = (s[h] = { exports: {}, id: h, loaded: !1 });
              return (
                d[h].call(S.exports, S, S.exports, f),
                (S.loaded = !0),
                S.exports
              );
            }
            var s = {};
            return (f.m = d), (f.c = s), (f.p = "dist/"), f(0);
          })([
            function (d, f, s) {
              function h(ee) {
                return ee && ee.__esModule ? ee : { default: ee };
              }
              var S =
                  Object.assign ||
                  function (ee) {
                    for (var ge = 1; ge < arguments.length; ge++) {
                      var M = arguments[ge];
                      for (var X in M)
                        Object.prototype.hasOwnProperty.call(M, X) &&
                          (ee[X] = M[X]);
                    }
                    return ee;
                  },
                T = s(1),
                y = (h(T), s(6)),
                o = h(y),
                O = s(7),
                _ = h(O),
                z = s(8),
                q = h(z),
                j = s(9),
                L = h(j),
                Q = s(10),
                B = h(Q),
                V = s(11),
                I = h(V),
                re = s(14),
                P = h(re),
                ye = [],
                Te = !1,
                ne = {
                  offset: 120,
                  delay: 0,
                  easing: "ease",
                  duration: 400,
                  disable: !1,
                  once: !1,
                  startEvent: "DOMContentLoaded",
                  throttleDelay: 99,
                  debounceDelay: 50,
                  disableMutationObserver: !1,
                },
                he = function () {
                  var ee =
                    arguments.length > 0 &&
                    arguments[0] !== void 0 &&
                    arguments[0];
                  if ((ee && (Te = !0), Te))
                    return (
                      (ye = (0, I.default)(ye, ne)),
                      (0, B.default)(ye, ne.once),
                      ye
                    );
                },
                De = function () {
                  (ye = (0, P.default)()), he();
                },
                J = function () {
                  ye.forEach(function (ee, ge) {
                    ee.node.removeAttribute("data-aos"),
                      ee.node.removeAttribute("data-aos-easing"),
                      ee.node.removeAttribute("data-aos-duration"),
                      ee.node.removeAttribute("data-aos-delay");
                  });
                },
                G = function (ee) {
                  return (
                    ee === !0 ||
                    (ee === "mobile" && L.default.mobile()) ||
                    (ee === "phone" && L.default.phone()) ||
                    (ee === "tablet" && L.default.tablet()) ||
                    (typeof ee == "function" && ee() === !0)
                  );
                },
                oe = function (ee) {
                  (ne = S(ne, ee)), (ye = (0, P.default)());
                  var ge = document.all && !window.atob;
                  return G(ne.disable) || ge
                    ? J()
                    : (ne.disableMutationObserver ||
                        q.default.isSupported() ||
                        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                        (ne.disableMutationObserver = !0)),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-easing", ne.easing),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-duration", ne.duration),
                      document
                        .querySelector("body")
                        .setAttribute("data-aos-delay", ne.delay),
                      ne.startEvent === "DOMContentLoaded" &&
                      ["complete", "interactive"].indexOf(document.readyState) >
                        -1
                        ? he(!0)
                        : ne.startEvent === "load"
                          ? window.addEventListener(ne.startEvent, function () {
                              he(!0);
                            })
                          : document.addEventListener(
                              ne.startEvent,
                              function () {
                                he(!0);
                              },
                            ),
                      window.addEventListener(
                        "resize",
                        (0, _.default)(he, ne.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "orientationchange",
                        (0, _.default)(he, ne.debounceDelay, !0),
                      ),
                      window.addEventListener(
                        "scroll",
                        (0, o.default)(function () {
                          (0, B.default)(ye, ne.once);
                        }, ne.throttleDelay),
                      ),
                      ne.disableMutationObserver ||
                        q.default.ready("[data-aos]", De),
                      ye);
                };
              d.exports = { init: oe, refresh: he, refreshHard: De };
            },
            function (d, f) {},
            ,
            ,
            ,
            ,
            function (d, f) {
              (function (s) {
                function h(G, oe, ee) {
                  function ge(be) {
                    var Pe = K,
                      Ut = ie;
                    return (K = ie = void 0), (xt = be), (Se = G.apply(Ut, Pe));
                  }
                  function M(be) {
                    return (
                      (xt = be), (ue = setTimeout(ve, oe)), ft ? ge(be) : Se
                    );
                  }
                  function X(be) {
                    var Pe = be - He,
                      Ut = be - xt,
                      ot = oe - Pe;
                    return rt ? De(ot, F - Ut) : ot;
                  }
                  function $(be) {
                    var Pe = be - He,
                      Ut = be - xt;
                    return (
                      He === void 0 || Pe >= oe || Pe < 0 || (rt && Ut >= F)
                    );
                  }
                  function ve() {
                    var be = J();
                    return $(be) ? p(be) : void (ue = setTimeout(ve, X(be)));
                  }
                  function p(be) {
                    return (
                      (ue = void 0), Me && K ? ge(be) : ((K = ie = void 0), Se)
                    );
                  }
                  function H() {
                    ue !== void 0 && clearTimeout(ue),
                      (xt = 0),
                      (K = He = ie = ue = void 0);
                  }
                  function Z() {
                    return ue === void 0 ? Se : p(J());
                  }
                  function Y() {
                    var be = J(),
                      Pe = $(be);
                    if (((K = arguments), (ie = this), (He = be), Pe)) {
                      if (ue === void 0) return M(He);
                      if (rt) return (ue = setTimeout(ve, oe)), ge(He);
                    }
                    return ue === void 0 && (ue = setTimeout(ve, oe)), Se;
                  }
                  var K,
                    ie,
                    F,
                    Se,
                    ue,
                    He,
                    xt = 0,
                    ft = !1,
                    rt = !1,
                    Me = !0;
                  if (typeof G != "function") throw new TypeError(z);
                  return (
                    (oe = O(oe) || 0),
                    T(ee) &&
                      ((ft = !!ee.leading),
                      (rt = "maxWait" in ee),
                      (F = rt ? he(O(ee.maxWait) || 0, oe) : F),
                      (Me = "trailing" in ee ? !!ee.trailing : Me)),
                    (Y.cancel = H),
                    (Y.flush = Z),
                    Y
                  );
                }
                function S(G, oe, ee) {
                  var ge = !0,
                    M = !0;
                  if (typeof G != "function") throw new TypeError(z);
                  return (
                    T(ee) &&
                      ((ge = "leading" in ee ? !!ee.leading : ge),
                      (M = "trailing" in ee ? !!ee.trailing : M)),
                    h(G, oe, { leading: ge, maxWait: oe, trailing: M })
                  );
                }
                function T(G) {
                  var oe = typeof G > "u" ? "undefined" : _(G);
                  return !!G && (oe == "object" || oe == "function");
                }
                function y(G) {
                  return (
                    !!G && (typeof G > "u" ? "undefined" : _(G)) == "object"
                  );
                }
                function o(G) {
                  return (
                    (typeof G > "u" ? "undefined" : _(G)) == "symbol" ||
                    (y(G) && ne.call(G) == j)
                  );
                }
                function O(G) {
                  if (typeof G == "number") return G;
                  if (o(G)) return q;
                  if (T(G)) {
                    var oe = typeof G.valueOf == "function" ? G.valueOf() : G;
                    G = T(oe) ? oe + "" : oe;
                  }
                  if (typeof G != "string") return G === 0 ? G : +G;
                  G = G.replace(L, "");
                  var ee = B.test(G);
                  return ee || V.test(G)
                    ? I(G.slice(2), ee ? 2 : 8)
                    : Q.test(G)
                      ? q
                      : +G;
                }
                var _ =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (G) {
                          return typeof G;
                        }
                      : function (G) {
                          return G &&
                            typeof Symbol == "function" &&
                            G.constructor === Symbol &&
                            G !== Symbol.prototype
                            ? "symbol"
                            : typeof G;
                        },
                  z = "Expected a function",
                  q = NaN,
                  j = "[object Symbol]",
                  L = /^\s+|\s+$/g,
                  Q = /^[-+]0x[0-9a-f]+$/i,
                  B = /^0b[01]+$/i,
                  V = /^0o[0-7]+$/i,
                  I = parseInt,
                  re =
                    (typeof s > "u" ? "undefined" : _(s)) == "object" &&
                    s &&
                    s.Object === Object &&
                    s,
                  P =
                    (typeof self > "u" ? "undefined" : _(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  ye = re || P || Function("return this")(),
                  Te = Object.prototype,
                  ne = Te.toString,
                  he = Math.max,
                  De = Math.min,
                  J = function () {
                    return ye.Date.now();
                  };
                d.exports = S;
              }).call(
                f,
                (function () {
                  return this;
                })(),
              );
            },
            function (d, f) {
              (function (s) {
                function h(J, G, oe) {
                  function ee(Me) {
                    var be = Y,
                      Pe = K;
                    return (Y = K = void 0), (He = Me), (F = J.apply(Pe, be));
                  }
                  function ge(Me) {
                    return (He = Me), (Se = setTimeout($, G)), xt ? ee(Me) : F;
                  }
                  function M(Me) {
                    var be = Me - ue,
                      Pe = Me - He,
                      Ut = G - be;
                    return ft ? he(Ut, ie - Pe) : Ut;
                  }
                  function X(Me) {
                    var be = Me - ue,
                      Pe = Me - He;
                    return (
                      ue === void 0 || be >= G || be < 0 || (ft && Pe >= ie)
                    );
                  }
                  function $() {
                    var Me = De();
                    return X(Me) ? ve(Me) : void (Se = setTimeout($, M(Me)));
                  }
                  function ve(Me) {
                    return (
                      (Se = void 0), rt && Y ? ee(Me) : ((Y = K = void 0), F)
                    );
                  }
                  function p() {
                    Se !== void 0 && clearTimeout(Se),
                      (He = 0),
                      (Y = ue = K = Se = void 0);
                  }
                  function H() {
                    return Se === void 0 ? F : ve(De());
                  }
                  function Z() {
                    var Me = De(),
                      be = X(Me);
                    if (((Y = arguments), (K = this), (ue = Me), be)) {
                      if (Se === void 0) return ge(ue);
                      if (ft) return (Se = setTimeout($, G)), ee(ue);
                    }
                    return Se === void 0 && (Se = setTimeout($, G)), F;
                  }
                  var Y,
                    K,
                    ie,
                    F,
                    Se,
                    ue,
                    He = 0,
                    xt = !1,
                    ft = !1,
                    rt = !0;
                  if (typeof J != "function") throw new TypeError(_);
                  return (
                    (G = o(G) || 0),
                    S(oe) &&
                      ((xt = !!oe.leading),
                      (ft = "maxWait" in oe),
                      (ie = ft ? ne(o(oe.maxWait) || 0, G) : ie),
                      (rt = "trailing" in oe ? !!oe.trailing : rt)),
                    (Z.cancel = p),
                    (Z.flush = H),
                    Z
                  );
                }
                function S(J) {
                  var G = typeof J > "u" ? "undefined" : O(J);
                  return !!J && (G == "object" || G == "function");
                }
                function T(J) {
                  return (
                    !!J && (typeof J > "u" ? "undefined" : O(J)) == "object"
                  );
                }
                function y(J) {
                  return (
                    (typeof J > "u" ? "undefined" : O(J)) == "symbol" ||
                    (T(J) && Te.call(J) == q)
                  );
                }
                function o(J) {
                  if (typeof J == "number") return J;
                  if (y(J)) return z;
                  if (S(J)) {
                    var G = typeof J.valueOf == "function" ? J.valueOf() : J;
                    J = S(G) ? G + "" : G;
                  }
                  if (typeof J != "string") return J === 0 ? J : +J;
                  J = J.replace(j, "");
                  var oe = Q.test(J);
                  return oe || B.test(J)
                    ? V(J.slice(2), oe ? 2 : 8)
                    : L.test(J)
                      ? z
                      : +J;
                }
                var O =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (J) {
                          return typeof J;
                        }
                      : function (J) {
                          return J &&
                            typeof Symbol == "function" &&
                            J.constructor === Symbol &&
                            J !== Symbol.prototype
                            ? "symbol"
                            : typeof J;
                        },
                  _ = "Expected a function",
                  z = NaN,
                  q = "[object Symbol]",
                  j = /^\s+|\s+$/g,
                  L = /^[-+]0x[0-9a-f]+$/i,
                  Q = /^0b[01]+$/i,
                  B = /^0o[0-7]+$/i,
                  V = parseInt,
                  I =
                    (typeof s > "u" ? "undefined" : O(s)) == "object" &&
                    s &&
                    s.Object === Object &&
                    s,
                  re =
                    (typeof self > "u" ? "undefined" : O(self)) == "object" &&
                    self &&
                    self.Object === Object &&
                    self,
                  P = I || re || Function("return this")(),
                  ye = Object.prototype,
                  Te = ye.toString,
                  ne = Math.max,
                  he = Math.min,
                  De = function () {
                    return P.Date.now();
                  };
                d.exports = h;
              }).call(
                f,
                (function () {
                  return this;
                })(),
              );
            },
            function (d, f) {
              function s(O) {
                var _ = void 0,
                  z = void 0;
                for (_ = 0; _ < O.length; _ += 1)
                  if (
                    ((z = O[_]),
                    (z.dataset && z.dataset.aos) ||
                      (z.children && s(z.children)))
                  )
                    return !0;
                return !1;
              }
              function h() {
                return (
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver
                );
              }
              function S() {
                return !!h();
              }
              function T(O, _) {
                var z = window.document,
                  q = h(),
                  j = new q(y);
                (o = _),
                  j.observe(z.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              }
              function y(O) {
                O &&
                  O.forEach(function (_) {
                    var z = Array.prototype.slice.call(_.addedNodes),
                      q = Array.prototype.slice.call(_.removedNodes),
                      j = z.concat(q);
                    if (s(j)) return o();
                  });
              }
              Object.defineProperty(f, "__esModule", { value: !0 });
              var o = function () {};
              f.default = { isSupported: S, ready: T };
            },
            function (d, f) {
              function s(z, q) {
                if (!(z instanceof q))
                  throw new TypeError("Cannot call a class as a function");
              }
              function h() {
                return (
                  navigator.userAgent || navigator.vendor || window.opera || ""
                );
              }
              Object.defineProperty(f, "__esModule", { value: !0 });
              var S = (function () {
                  function z(q, j) {
                    for (var L = 0; L < j.length; L++) {
                      var Q = j[L];
                      (Q.enumerable = Q.enumerable || !1),
                        (Q.configurable = !0),
                        "value" in Q && (Q.writable = !0),
                        Object.defineProperty(q, Q.key, Q);
                    }
                  }
                  return function (q, j, L) {
                    return j && z(q.prototype, j), L && z(q, L), q;
                  };
                })(),
                T =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                y =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                o =
                  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                O =
                  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                _ = (function () {
                  function z() {
                    s(this, z);
                  }
                  return (
                    S(z, [
                      {
                        key: "phone",
                        value: function () {
                          var q = h();
                          return !(!T.test(q) && !y.test(q.substr(0, 4)));
                        },
                      },
                      {
                        key: "mobile",
                        value: function () {
                          var q = h();
                          return !(!o.test(q) && !O.test(q.substr(0, 4)));
                        },
                      },
                      {
                        key: "tablet",
                        value: function () {
                          return this.mobile() && !this.phone();
                        },
                      },
                    ]),
                    z
                  );
                })();
              f.default = new _();
            },
            function (d, f) {
              Object.defineProperty(f, "__esModule", { value: !0 });
              var s = function (S, T, y) {
                  var o = S.node.getAttribute("data-aos-once");
                  T > S.position
                    ? S.node.classList.add("aos-animate")
                    : typeof o < "u" &&
                      (o === "false" || (!y && o !== "true")) &&
                      S.node.classList.remove("aos-animate");
                },
                h = function (S, T) {
                  var y = window.pageYOffset,
                    o = window.innerHeight;
                  S.forEach(function (O, _) {
                    s(O, o + y, T);
                  });
                };
              f.default = h;
            },
            function (d, f, s) {
              function h(o) {
                return o && o.__esModule ? o : { default: o };
              }
              Object.defineProperty(f, "__esModule", { value: !0 });
              var S = s(12),
                T = h(S),
                y = function (o, O) {
                  return (
                    o.forEach(function (_, z) {
                      _.node.classList.add("aos-init"),
                        (_.position = (0, T.default)(_.node, O.offset));
                    }),
                    o
                  );
                };
              f.default = y;
            },
            function (d, f, s) {
              function h(o) {
                return o && o.__esModule ? o : { default: o };
              }
              Object.defineProperty(f, "__esModule", { value: !0 });
              var S = s(13),
                T = h(S),
                y = function (o, O) {
                  var _ = 0,
                    z = 0,
                    q = window.innerHeight,
                    j = {
                      offset: o.getAttribute("data-aos-offset"),
                      anchor: o.getAttribute("data-aos-anchor"),
                      anchorPlacement: o.getAttribute(
                        "data-aos-anchor-placement",
                      ),
                    };
                  switch (
                    (j.offset && !isNaN(j.offset) && (z = parseInt(j.offset)),
                    j.anchor &&
                      document.querySelectorAll(j.anchor) &&
                      (o = document.querySelectorAll(j.anchor)[0]),
                    (_ = (0, T.default)(o).top),
                    j.anchorPlacement)
                  ) {
                    case "top-bottom":
                      break;
                    case "center-bottom":
                      _ += o.offsetHeight / 2;
                      break;
                    case "bottom-bottom":
                      _ += o.offsetHeight;
                      break;
                    case "top-center":
                      _ += q / 2;
                      break;
                    case "bottom-center":
                      _ += q / 2 + o.offsetHeight;
                      break;
                    case "center-center":
                      _ += q / 2 + o.offsetHeight / 2;
                      break;
                    case "top-top":
                      _ += q;
                      break;
                    case "bottom-top":
                      _ += o.offsetHeight + q;
                      break;
                    case "center-top":
                      _ += o.offsetHeight / 2 + q;
                  }
                  return (
                    j.anchorPlacement || j.offset || isNaN(O) || (z = O), _ + z
                  );
                };
              f.default = y;
            },
            function (d, f) {
              Object.defineProperty(f, "__esModule", { value: !0 });
              var s = function (h) {
                for (
                  var S = 0, T = 0;
                  h && !isNaN(h.offsetLeft) && !isNaN(h.offsetTop);

                )
                  (S +=
                    h.offsetLeft - (h.tagName != "BODY" ? h.scrollLeft : 0)),
                    (T +=
                      h.offsetTop - (h.tagName != "BODY" ? h.scrollTop : 0)),
                    (h = h.offsetParent);
                return { top: T, left: S };
              };
              f.default = s;
            },
            function (d, f) {
              Object.defineProperty(f, "__esModule", { value: !0 });
              var s = function (h) {
                return (
                  (h = h || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(h, function (S) {
                    return { node: S };
                  })
                );
              };
              f.default = s;
            },
          ]);
        });
      })(ai)),
    ai.exports
  );
}
var Pv = Fv();
const Iv = Dv(Pv),
  ey = ({ onToggle: c, isExpanded: m }) =>
    b.jsxs("div", {
      className: "grid grid-cols-3 bg-white p-4 lg:hidden",
      children: [
        b.jsx("div", { className: "col-start-1" }),
        b.jsx("div", {
          className: "col-start-2 flex items-center justify-center",
          children: b.jsx("img", {
            src: "./src/assets/kindcare.png",
            alt: "KindCare Wellness Logo",
            className: "h-30 max-w-full",
          }),
        }),
        b.jsx("div", {
          className: "col-start-3 flex items-center justify-end",
          children: b.jsx("button", {
            onClick: c,
            className: "p-2 text-2xl text-[var(--primary)]",
            "aria-label": m ? "Close menu" : "Menu",
            "aria-expanded": m,
            "aria-controls": "mobile-menu",
            children: b.jsx("span", {
              className: "mobile-menu-btn fas fa-bars",
              "aria-hidden": "true",
            }),
          }),
        }),
      ],
    }),
  ty = () => {
    const [c, m] = w.useState(!1),
      d = w.useRef(null),
      f = w.useRef({}),
      s = w.useRef({}),
      h = (T) => {
        const y = s.current[T],
          o = f.current[T];
        if (!y || !o) return;
        const O = o.getAttribute("aria-expanded") === "true";
        o.setAttribute("aria-expanded", (!O).toString()),
          y.classList.toggle("hidden");
        const _ = o.querySelector('span[aria-hidden="true"]');
        _ &&
          (_.classList.toggle("fa-chevron-down"),
          _.classList.toggle("fa-chevron-up"));
      },
      S = () => {
        m(!1),
          d.current &&
            (d.current.setAttribute("aria-hidden", "true"),
            Object.values(s.current).forEach((T) =>
              T == null ? void 0 : T.classList.add("hidden"),
            ),
            Object.values(f.current).forEach((T) => {
              T == null || T.setAttribute("aria-expanded", "false");
              const y =
                T == null
                  ? void 0
                  : T.querySelector('span[aria-hidden="true"]');
              y == null || y.classList.remove("fa-chevron-up"),
                y == null || y.classList.add("fa-chevron-down");
            }));
      };
    return (
      w.useEffect(() => {
        const T = (o) => {
            d.current && !d.current.contains(o.target) && S();
          },
          y = (o) => {
            o.key === "Escape" && S();
          };
        return (
          document.addEventListener("click", T),
          document.addEventListener("keydown", y),
          () => {
            document.removeEventListener("click", T),
              document.removeEventListener("keydown", y);
          }
        );
      }, []),
      w.useEffect(() => {
        const T = (y) => {
          if (!c || !d.current) return;
          const o = d.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            ),
            O = o[0],
            _ = o[o.length - 1];
          y.key === "Tab" &&
            (y.shiftKey
              ? document.activeElement === O && (y.preventDefault(), _.focus())
              : document.activeElement === _ &&
                (y.preventDefault(), O.focus()));
        };
        return (
          d.current && d.current.addEventListener("keydown", T),
          () => {
            var y;
            (y = d.current) == null || y.removeEventListener("keydown", T);
          }
        );
      }, [c]),
      b.jsxs(b.Fragment, {
        children: [
          b.jsx(ey, { onToggle: () => m((T) => !T), isExpanded: c }),
          b.jsxs("div", {
            id: "mobile-menu",
            ref: d,
            className: `${c ? "" : "hidden"} bg-white p-4 lg:hidden`,
            "aria-hidden": !c,
            children: [
              b.jsxs("div", {
                className: "mb-4 text-sm text-[var(--primary)]",
                children: [
                  b.jsxs("p", {
                    children: [
                      b.jsx("strong", { children: "Hours:" }),
                      " Mon-Fri | 9am-5pm",
                    ],
                  }),
                  b.jsxs("p", {
                    children: [
                      b.jsx("strong", { children: "Location:" }),
                      " Jersey City, NJ 07306",
                    ],
                  }),
                  b.jsxs("p", {
                    children: [
                      b.jsx("strong", { children: "Phone:" }),
                      " ",
                      b.jsx("a", {
                        href: "tel:+12012341566",
                        children: "(201) 234-1566",
                      }),
                    ],
                  }),
                  b.jsxs("p", {
                    children: [
                      b.jsx("strong", { children: "Email:" }),
                      " ",
                      b.jsx("a", {
                        href: "mailto:support@kindcare.com",
                        children: "support@kindcare.com",
                      }),
                    ],
                  }),
                ],
              }),
              b.jsxs("nav", {
                className: "flex flex-col space-y-2",
                "aria-label": "Mobile navigation",
                children: [
                  b.jsx("a", {
                    href: "index.html",
                    className: "px-4 py-3 text-lg",
                    children: "Home",
                  }),
                  b.jsxs("div", {
                    className: "relative",
                    children: [
                      b.jsxs("button", {
                        ref: (T) => {
                          f.current.about = T;
                        },
                        className:
                          "mobile-dropdown-btn flex w-full justify-between px-4 py-3 text-left text-lg",
                        "aria-expanded": "false",
                        "aria-controls": "mobile-about-menu",
                        onClick: () => h("about"),
                        children: [
                          b.jsx("span", { children: "About Us" }),
                          b.jsx("span", {
                            className: "fas fa-chevron-down",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        id: "mobile-about-menu",
                        className: "mobile-dropdown-content hidden pl-6",
                        children: [
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Why KindCare?",
                          }),
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Our Leadership",
                          }),
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Compliance & Ethics",
                          }),
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Donate",
                          }),
                        ],
                      }),
                    ],
                  }),
                  b.jsxs("div", {
                    className: "relative",
                    children: [
                      b.jsxs("button", {
                        ref: (T) => {
                          f.current.services = T;
                        },
                        className:
                          "mobile-dropdown-btn flex w-full justify-between px-4 py-3 text-left text-lg",
                        "aria-expanded": "false",
                        "aria-controls": "mobile-services-menu",
                        onClick: () => h("services"),
                        children: [
                          b.jsx("span", { children: "Services" }),
                          b.jsx("span", {
                            className: "fas fa-chevron-down",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      b.jsxs("div", {
                        id: "mobile-services-menu",
                        className: "mobile-dropdown-content hidden pl-6",
                        children: [
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Hospice Care",
                          }),
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Palliative Care",
                          }),
                          b.jsx("a", {
                            href: "#autism",
                            className: "block px-4 py-2",
                            children: "Home Health Care",
                          }),
                        ],
                      }),
                    ],
                  }),
                  b.jsx("a", {
                    href: "#blog",
                    className: "px-4 py-3 text-lg",
                    children: "Blog",
                  }),
                  b.jsx("a", {
                    href: "#careers",
                    className: "px-4 py-3 text-lg",
                    children: "Careers",
                  }),
                  b.jsx("a", {
                    href: "#contact",
                    className: "px-4 py-3 text-lg",
                    children: "Contact Us",
                  }),
                  b.jsx("a", {
                    href: "#register",
                    className:
                      "mt-2 bg-[var(--primary)] px-4 py-3 text-center text-white hover:bg-[var(--secondary)]",
                    children: "Request Consultation",
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
var Cn = {},
  Xd;
function ly() {
  if (Xd) return Cn;
  (Xd = 1),
    Object.defineProperty(Cn, "__esModule", { value: !0 }),
    (Cn.parse = S),
    (Cn.serialize = o);
  const c = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    m = /^[\u0021-\u003A\u003C-\u007E]*$/,
    d =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    s = Object.prototype.toString,
    h = (() => {
      const z = function () {};
      return (z.prototype = Object.create(null)), z;
    })();
  function S(z, q) {
    const j = new h(),
      L = z.length;
    if (L < 2) return j;
    const Q = (q == null ? void 0 : q.decode) || O;
    let B = 0;
    do {
      const V = z.indexOf("=", B);
      if (V === -1) break;
      const I = z.indexOf(";", B),
        re = I === -1 ? L : I;
      if (V > re) {
        B = z.lastIndexOf(";", V - 1) + 1;
        continue;
      }
      const P = T(z, B, V),
        ye = y(z, V, P),
        Te = z.slice(P, ye);
      if (j[Te] === void 0) {
        let ne = T(z, V + 1, re),
          he = y(z, re, ne);
        const De = Q(z.slice(ne, he));
        j[Te] = De;
      }
      B = re + 1;
    } while (B < L);
    return j;
  }
  function T(z, q, j) {
    do {
      const L = z.charCodeAt(q);
      if (L !== 32 && L !== 9) return q;
    } while (++q < j);
    return j;
  }
  function y(z, q, j) {
    for (; q > j; ) {
      const L = z.charCodeAt(--q);
      if (L !== 32 && L !== 9) return q + 1;
    }
    return j;
  }
  function o(z, q, j) {
    const L = (j == null ? void 0 : j.encode) || encodeURIComponent;
    if (!c.test(z)) throw new TypeError(`argument name is invalid: ${z}`);
    const Q = L(q);
    if (!m.test(Q)) throw new TypeError(`argument val is invalid: ${q}`);
    let B = z + "=" + Q;
    if (!j) return B;
    if (j.maxAge !== void 0) {
      if (!Number.isInteger(j.maxAge))
        throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);
      B += "; Max-Age=" + j.maxAge;
    }
    if (j.domain) {
      if (!d.test(j.domain))
        throw new TypeError(`option domain is invalid: ${j.domain}`);
      B += "; Domain=" + j.domain;
    }
    if (j.path) {
      if (!f.test(j.path))
        throw new TypeError(`option path is invalid: ${j.path}`);
      B += "; Path=" + j.path;
    }
    if (j.expires) {
      if (!_(j.expires) || !Number.isFinite(j.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${j.expires}`);
      B += "; Expires=" + j.expires.toUTCString();
    }
    if (
      (j.httpOnly && (B += "; HttpOnly"),
      j.secure && (B += "; Secure"),
      j.partitioned && (B += "; Partitioned"),
      j.priority)
    )
      switch (
        typeof j.priority == "string" ? j.priority.toLowerCase() : void 0
      ) {
        case "low":
          B += "; Priority=Low";
          break;
        case "medium":
          B += "; Priority=Medium";
          break;
        case "high":
          B += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${j.priority}`);
      }
    if (j.sameSite)
      switch (
        typeof j.sameSite == "string" ? j.sameSite.toLowerCase() : j.sameSite
      ) {
        case !0:
        case "strict":
          B += "; SameSite=Strict";
          break;
        case "lax":
          B += "; SameSite=Lax";
          break;
        case "none":
          B += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${j.sameSite}`);
      }
    return B;
  }
  function O(z) {
    if (z.indexOf("%") === -1) return z;
    try {
      return decodeURIComponent(z);
    } catch {
      return z;
    }
  }
  function _(z) {
    return s.call(z) === "[object Date]";
  }
  return Cn;
}
ly();
var Qd = "popstate";
function ay(c = {}) {
  function m(f, s) {
    let { pathname: h, search: S, hash: T } = f.location;
    return _f(
      "",
      { pathname: h, search: S, hash: T },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default",
    );
  }
  function d(f, s) {
    return typeof s == "string" ? s : Bn(s);
  }
  return uy(m, d, null, c);
}
function Ce(c, m) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(m);
}
function Yt(c, m) {
  if (!c) {
    typeof console < "u" && console.warn(m);
    try {
      throw new Error(m);
    } catch {}
  }
}
function ny() {
  return Math.random().toString(36).substring(2, 10);
}
function Zd(c, m) {
  return { usr: c.state, key: c.key, idx: m };
}
function _f(c, m, d = null, f) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof m == "string" ? Ua(m) : m),
    state: d,
    key: (m && m.key) || f || ny(),
  };
}
function Bn({ pathname: c = "/", search: m = "", hash: d = "" }) {
  return (
    m && m !== "?" && (c += m.charAt(0) === "?" ? m : "?" + m),
    d && d !== "#" && (c += d.charAt(0) === "#" ? d : "#" + d),
    c
  );
}
function Ua(c) {
  let m = {};
  if (c) {
    let d = c.indexOf("#");
    d >= 0 && ((m.hash = c.substring(d)), (c = c.substring(0, d)));
    let f = c.indexOf("?");
    f >= 0 && ((m.search = c.substring(f)), (c = c.substring(0, f))),
      c && (m.pathname = c);
  }
  return m;
}
function uy(c, m, d, f = {}) {
  let { window: s = document.defaultView, v5Compat: h = !1 } = f,
    S = s.history,
    T = "POP",
    y = null,
    o = O();
  o == null && ((o = 0), S.replaceState({ ...S.state, idx: o }, ""));
  function O() {
    return (S.state || { idx: null }).idx;
  }
  function _() {
    T = "POP";
    let Q = O(),
      B = Q == null ? null : Q - o;
    (o = Q), y && y({ action: T, location: L.location, delta: B });
  }
  function z(Q, B) {
    T = "PUSH";
    let V = _f(L.location, Q, B);
    o = O() + 1;
    let I = Zd(V, o),
      re = L.createHref(V);
    try {
      S.pushState(I, "", re);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      s.location.assign(re);
    }
    h && y && y({ action: T, location: L.location, delta: 1 });
  }
  function q(Q, B) {
    T = "REPLACE";
    let V = _f(L.location, Q, B);
    o = O();
    let I = Zd(V, o),
      re = L.createHref(V);
    S.replaceState(I, "", re),
      h && y && y({ action: T, location: L.location, delta: 0 });
  }
  function j(Q) {
    return iy(Q);
  }
  let L = {
    get action() {
      return T;
    },
    get location() {
      return c(s, S);
    },
    listen(Q) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Qd, _),
        (y = Q),
        () => {
          s.removeEventListener(Qd, _), (y = null);
        }
      );
    },
    createHref(Q) {
      return m(s, Q);
    },
    createURL: j,
    encodeLocation(Q) {
      let B = j(Q);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: z,
    replace: q,
    go(Q) {
      return S.go(Q);
    },
  };
  return L;
}
function iy(c, m = !1) {
  let d = "http://localhost";
  typeof window < "u" &&
    (d =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ce(d, "No window.location.(origin|href) available to create URL");
  let f = typeof c == "string" ? c : Bn(c);
  return (
    (f = f.replace(/ $/, "%20")),
    !m && f.startsWith("//") && (f = d + f),
    new URL(f, d)
  );
}
function Jd(c, m, d = "/") {
  return cy(c, m, d, !1);
}
function cy(c, m, d, f) {
  let s = typeof m == "string" ? Ua(m) : m,
    h = al(s.pathname || "/", d);
  if (h == null) return null;
  let S = $d(c);
  fy(S);
  let T = null;
  for (let y = 0; T == null && y < S.length; ++y) {
    let o = by(h);
    T = py(S[y], o, f);
  }
  return T;
}
function $d(c, m = [], d = [], f = "") {
  let s = (h, S, T) => {
    let y = {
      relativePath: T === void 0 ? h.path || "" : T,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: S,
      route: h,
    };
    y.relativePath.startsWith("/") &&
      (Ce(
        y.relativePath.startsWith(f),
        `Absolute route path "${y.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (y.relativePath = y.relativePath.slice(f.length)));
    let o = ll([f, y.relativePath]),
      O = d.concat(y);
    h.children &&
      h.children.length > 0 &&
      (Ce(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${o}".`,
      ),
      $d(h.children, m, O, o)),
      !(h.path == null && !h.index) &&
        m.push({ path: o, score: vy(o, h.index), routesMeta: O });
  };
  return (
    c.forEach((h, S) => {
      var T;
      if (h.path === "" || !((T = h.path) != null && T.includes("?"))) s(h, S);
      else for (let y of Wd(h.path)) s(h, S, y);
    }),
    m
  );
}
function Wd(c) {
  let m = c.split("/");
  if (m.length === 0) return [];
  let [d, ...f] = m,
    s = d.endsWith("?"),
    h = d.replace(/\?$/, "");
  if (f.length === 0) return s ? [h, ""] : [h];
  let S = Wd(f.join("/")),
    T = [];
  return (
    T.push(...S.map((y) => (y === "" ? h : [h, y].join("/")))),
    s && T.push(...S),
    T.map((y) => (c.startsWith("/") && y === "" ? "/" : y))
  );
}
function fy(c) {
  c.sort((m, d) =>
    m.score !== d.score
      ? d.score - m.score
      : yy(
          m.routesMeta.map((f) => f.childrenIndex),
          d.routesMeta.map((f) => f.childrenIndex),
        ),
  );
}
var ry = /^:[\w-]+$/,
  oy = 3,
  sy = 2,
  dy = 1,
  my = 10,
  hy = -2,
  Vd = (c) => c === "*";
function vy(c, m) {
  let d = c.split("/"),
    f = d.length;
  return (
    d.some(Vd) && (f += hy),
    m && (f += sy),
    d
      .filter((s) => !Vd(s))
      .reduce((s, h) => s + (ry.test(h) ? oy : h === "" ? dy : my), f)
  );
}
function yy(c, m) {
  return c.length === m.length && c.slice(0, -1).every((f, s) => f === m[s])
    ? c[c.length - 1] - m[m.length - 1]
    : 0;
}
function py(c, m, d = !1) {
  let { routesMeta: f } = c,
    s = {},
    h = "/",
    S = [];
  for (let T = 0; T < f.length; ++T) {
    let y = f[T],
      o = T === f.length - 1,
      O = h === "/" ? m : m.slice(h.length) || "/",
      _ = ii(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: o },
        O,
      ),
      z = y.route;
    if (
      (!_ &&
        o &&
        d &&
        !f[f.length - 1].route.index &&
        (_ = ii(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          O,
        )),
      !_)
    )
      return null;
    Object.assign(s, _.params),
      S.push({
        params: s,
        pathname: ll([h, _.pathname]),
        pathnameBase: Ty(ll([h, _.pathnameBase])),
        route: z,
      }),
      _.pathnameBase !== "/" && (h = ll([h, _.pathnameBase]));
  }
  return S;
}
function ii(c, m) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [d, f] = gy(c.path, c.caseSensitive, c.end),
    s = m.match(d);
  if (!s) return null;
  let h = s[0],
    S = h.replace(/(.)\/+$/, "$1"),
    T = s.slice(1);
  return {
    params: f.reduce((o, { paramName: O, isOptional: _ }, z) => {
      if (O === "*") {
        let j = T[z] || "";
        S = h.slice(0, h.length - j.length).replace(/(.)\/+$/, "$1");
      }
      const q = T[z];
      return (
        _ && !q ? (o[O] = void 0) : (o[O] = (q || "").replace(/%2F/g, "/")), o
      );
    }, {}),
    pathname: h,
    pathnameBase: S,
    pattern: c,
  };
}
function gy(c, m = !1, d = !0) {
  Yt(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, "/*")}".`,
  );
  let f = [],
    s =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (S, T, y) => (
            f.push({ paramName: T, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    c.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (s += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : d
        ? (s += "\\/*$")
        : c !== "" && c !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, m ? void 0 : "i"), f]
  );
}
function by(c) {
  try {
    return c
      .split("/")
      .map((m) => decodeURIComponent(m).replace(/\//g, "%2F"))
      .join("/");
  } catch (m) {
    return (
      Yt(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`,
      ),
      c
    );
  }
}
function al(c, m) {
  if (m === "/") return c;
  if (!c.toLowerCase().startsWith(m.toLowerCase())) return null;
  let d = m.endsWith("/") ? m.length - 1 : m.length,
    f = c.charAt(d);
  return f && f !== "/" ? null : c.slice(d) || "/";
}
function xy(c, m = "/") {
  let {
    pathname: d,
    search: f = "",
    hash: s = "",
  } = typeof c == "string" ? Ua(c) : c;
  return {
    pathname: d ? (d.startsWith("/") ? d : Sy(d, m)) : m,
    search: Ay(f),
    hash: Oy(s),
  };
}
function Sy(c, m) {
  let d = m.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((s) => {
      s === ".." ? d.length > 1 && d.pop() : s !== "." && d.push(s);
    }),
    d.length > 1 ? d.join("/") : "/"
  );
}
function zf(c, m, d, f) {
  return `Cannot include a '${c}' character in a manually specified \`to.${m}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ey(c) {
  return c.filter(
    (m, d) => d === 0 || (m.route.path && m.route.path.length > 0),
  );
}
function Fd(c) {
  let m = Ey(c);
  return m.map((d, f) => (f === m.length - 1 ? d.pathname : d.pathnameBase));
}
function Pd(c, m, d, f = !1) {
  let s;
  typeof c == "string"
    ? (s = Ua(c))
    : ((s = { ...c }),
      Ce(
        !s.pathname || !s.pathname.includes("?"),
        zf("?", "pathname", "search", s),
      ),
      Ce(
        !s.pathname || !s.pathname.includes("#"),
        zf("#", "pathname", "hash", s),
      ),
      Ce(!s.search || !s.search.includes("#"), zf("#", "search", "hash", s)));
  let h = c === "" || s.pathname === "",
    S = h ? "/" : s.pathname,
    T;
  if (S == null) T = d;
  else {
    let _ = m.length - 1;
    if (!f && S.startsWith("..")) {
      let z = S.split("/");
      for (; z[0] === ".."; ) z.shift(), (_ -= 1);
      s.pathname = z.join("/");
    }
    T = _ >= 0 ? m[_] : "/";
  }
  let y = xy(s, T),
    o = S && S !== "/" && S.endsWith("/"),
    O = (h || S === ".") && d.endsWith("/");
  return !y.pathname.endsWith("/") && (o || O) && (y.pathname += "/"), y;
}
var ll = (c) => c.join("/").replace(/\/\/+/g, "/"),
  Ty = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ay = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  Oy = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function Ny(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
var Id = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Id);
var Ry = ["GET", ...Id];
new Set(Ry);
var wa = w.createContext(null);
wa.displayName = "DataRouter";
var ci = w.createContext(null);
ci.displayName = "DataRouterState";
var em = w.createContext({ isTransitioning: !1 });
em.displayName = "ViewTransition";
var zy = w.createContext(new Map());
zy.displayName = "Fetchers";
var My = w.createContext(null);
My.displayName = "Await";
var Lt = w.createContext(null);
Lt.displayName = "Navigation";
var Yn = w.createContext(null);
Yn.displayName = "Location";
var nl = w.createContext({ outlet: null, matches: [], isDataRoute: !1 });
nl.displayName = "Route";
var Uf = w.createContext(null);
Uf.displayName = "RouteError";
function _y(c, { relative: m } = {}) {
  Ce(
    Ln(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: d, navigator: f } = w.useContext(Lt),
    { hash: s, pathname: h, search: S } = Gn(c, { relative: m }),
    T = h;
  return (
    d !== "/" && (T = h === "/" ? d : ll([d, h])),
    f.createHref({ pathname: T, search: S, hash: s })
  );
}
function Ln() {
  return w.useContext(Yn) != null;
}
function kl() {
  return (
    Ce(
      Ln(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    w.useContext(Yn).location
  );
}
var tm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function lm(c) {
  w.useContext(Lt).static || w.useLayoutEffect(c);
}
function am() {
  let { isDataRoute: c } = w.useContext(nl);
  return c ? Qy() : jy();
}
function jy() {
  Ce(
    Ln(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let c = w.useContext(wa),
    { basename: m, navigator: d } = w.useContext(Lt),
    { matches: f } = w.useContext(nl),
    { pathname: s } = kl(),
    h = JSON.stringify(Fd(f)),
    S = w.useRef(!1);
  return (
    lm(() => {
      S.current = !0;
    }),
    w.useCallback(
      (y, o = {}) => {
        if ((Yt(S.current, tm), !S.current)) return;
        if (typeof y == "number") {
          d.go(y);
          return;
        }
        let O = Pd(y, JSON.parse(h), s, o.relative === "path");
        c == null &&
          m !== "/" &&
          (O.pathname = O.pathname === "/" ? m : ll([m, O.pathname])),
          (o.replace ? d.replace : d.push)(O, o.state, o);
      },
      [m, d, h, s, c],
    )
  );
}
w.createContext(null);
function Gn(c, { relative: m } = {}) {
  let { matches: d } = w.useContext(nl),
    { pathname: f } = kl(),
    s = JSON.stringify(Fd(d));
  return w.useMemo(() => Pd(c, JSON.parse(s), f, m === "path"), [c, s, f, m]);
}
function Dy(c, m) {
  return nm(c, m);
}
function nm(c, m, d, f) {
  var B;
  Ce(
    Ln(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: s } = w.useContext(Lt),
    { matches: h } = w.useContext(nl),
    S = h[h.length - 1],
    T = S ? S.params : {},
    y = S ? S.pathname : "/",
    o = S ? S.pathnameBase : "/",
    O = S && S.route;
  {
    let V = (O && O.path) || "";
    um(
      y,
      !O || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`,
    );
  }
  let _ = kl(),
    z;
  if (m) {
    let V = typeof m == "string" ? Ua(m) : m;
    Ce(
      o === "/" || ((B = V.pathname) == null ? void 0 : B.startsWith(o)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${o}" but pathname "${V.pathname}" was given in the \`location\` prop.`,
    ),
      (z = V);
  } else z = _;
  let q = z.pathname || "/",
    j = q;
  if (o !== "/") {
    let V = o.replace(/^\//, "").split("/");
    j = "/" + q.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let L = Jd(c, { pathname: j });
  Yt(
    O || L != null,
    `No routes matched location "${z.pathname}${z.search}${z.hash}" `,
  ),
    Yt(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    );
  let Q = qy(
    L &&
      L.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, T, V.params),
          pathname: ll([
            o,
            s.encodeLocation
              ? s.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? o
              : ll([
                  o,
                  s.encodeLocation
                    ? s.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        }),
      ),
    h,
    d,
    f,
  );
  return m && Q
    ? w.createElement(
        Yn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...z,
            },
            navigationType: "POP",
          },
        },
        Q,
      )
    : Q;
}
function Uy() {
  let c = Xy(),
    m = Ny(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
        ? c.message
        : JSON.stringify(c),
    d = c instanceof Error ? c.stack : null,
    f = "rgba(200,200,200, 0.5)",
    s = { padding: "0.5rem", backgroundColor: f },
    h = { padding: "2px 4px", backgroundColor: f },
    S = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (S = w.createElement(
      w.Fragment,
      null,
      w.createElement("p", null, "💿 Hey developer 👋"),
      w.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        w.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        w.createElement("code", { style: h }, "errorElement"),
        " prop on your route.",
      ),
    )),
    w.createElement(
      w.Fragment,
      null,
      w.createElement("h2", null, "Unexpected Application Error!"),
      w.createElement("h3", { style: { fontStyle: "italic" } }, m),
      d ? w.createElement("pre", { style: s }, d) : null,
      S,
    )
  );
}
var wy = w.createElement(Uy, null),
  Cy = class extends w.Component {
    constructor(c) {
      super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, m) {
      return m.location !== c.location ||
        (m.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : m.error,
            location: m.location,
            revalidation: c.revalidation || m.revalidation,
          };
    }
    componentDidCatch(c, m) {
      console.error(
        "React Router caught the following error during render",
        c,
        m,
      );
    }
    render() {
      return this.state.error !== void 0
        ? w.createElement(
            nl.Provider,
            { value: this.props.routeContext },
            w.createElement(Uf.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Hy({ routeContext: c, match: m, children: d }) {
  let f = w.useContext(wa);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (m.route.errorElement || m.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = m.route.id),
    w.createElement(nl.Provider, { value: c }, d)
  );
}
function qy(c, m = [], d = null, f = null) {
  if (c == null) {
    if (!d) return null;
    if (d.errors) c = d.matches;
    else if (m.length === 0 && !d.initialized && d.matches.length > 0)
      c = d.matches;
    else return null;
  }
  let s = c,
    h = d == null ? void 0 : d.errors;
  if (h != null) {
    let y = s.findIndex(
      (o) => o.route.id && (h == null ? void 0 : h[o.route.id]) !== void 0,
    );
    Ce(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`,
    ),
      (s = s.slice(0, Math.min(s.length, y + 1)));
  }
  let S = !1,
    T = -1;
  if (d)
    for (let y = 0; y < s.length; y++) {
      let o = s[y];
      if (
        ((o.route.HydrateFallback || o.route.hydrateFallbackElement) && (T = y),
        o.route.id)
      ) {
        let { loaderData: O, errors: _ } = d,
          z =
            o.route.loader &&
            !O.hasOwnProperty(o.route.id) &&
            (!_ || _[o.route.id] === void 0);
        if (o.route.lazy || z) {
          (S = !0), T >= 0 ? (s = s.slice(0, T + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((y, o, O) => {
    let _,
      z = !1,
      q = null,
      j = null;
    d &&
      ((_ = h && o.route.id ? h[o.route.id] : void 0),
      (q = o.route.errorElement || wy),
      S &&
        (T < 0 && O === 0
          ? (um(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (z = !0),
            (j = null))
          : T === O &&
            ((z = !0), (j = o.route.hydrateFallbackElement || null))));
    let L = m.concat(s.slice(0, O + 1)),
      Q = () => {
        let B;
        return (
          _
            ? (B = q)
            : z
              ? (B = j)
              : o.route.Component
                ? (B = w.createElement(o.route.Component, null))
                : o.route.element
                  ? (B = o.route.element)
                  : (B = y),
          w.createElement(Hy, {
            match: o,
            routeContext: { outlet: y, matches: L, isDataRoute: d != null },
            children: B,
          })
        );
      };
    return d && (o.route.ErrorBoundary || o.route.errorElement || O === 0)
      ? w.createElement(Cy, {
          location: d.location,
          revalidation: d.revalidation,
          component: q,
          error: _,
          children: Q(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : Q();
  }, null);
}
function wf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function By(c) {
  let m = w.useContext(wa);
  return Ce(m, wf(c)), m;
}
function Yy(c) {
  let m = w.useContext(ci);
  return Ce(m, wf(c)), m;
}
function Ly(c) {
  let m = w.useContext(nl);
  return Ce(m, wf(c)), m;
}
function Cf(c) {
  let m = Ly(c),
    d = m.matches[m.matches.length - 1];
  return (
    Ce(
      d.route.id,
      `${c} can only be used on routes that contain a unique "id"`,
    ),
    d.route.id
  );
}
function Gy() {
  return Cf("useRouteId");
}
function Xy() {
  var f;
  let c = w.useContext(Uf),
    m = Yy("useRouteError"),
    d = Cf("useRouteError");
  return c !== void 0 ? c : (f = m.errors) == null ? void 0 : f[d];
}
function Qy() {
  let { router: c } = By("useNavigate"),
    m = Cf("useNavigate"),
    d = w.useRef(!1);
  return (
    lm(() => {
      d.current = !0;
    }),
    w.useCallback(
      async (s, h = {}) => {
        Yt(d.current, tm),
          d.current &&
            (typeof s == "number"
              ? c.navigate(s)
              : await c.navigate(s, { fromRouteId: m, ...h }));
      },
      [c, m],
    )
  );
}
var Kd = {};
function um(c, m, d) {
  !m && !Kd[c] && ((Kd[c] = !0), Yt(!1, d));
}
w.memo(Zy);
function Zy({ routes: c, future: m, state: d }) {
  return nm(c, void 0, d, m);
}
function qn(c) {
  Ce(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Vy({
  basename: c = "/",
  children: m = null,
  location: d,
  navigationType: f = "POP",
  navigator: s,
  static: h = !1,
}) {
  Ce(
    !Ln(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let S = c.replace(/^\/*/, "/"),
    T = w.useMemo(
      () => ({ basename: S, navigator: s, static: h, future: {} }),
      [S, s, h],
    );
  typeof d == "string" && (d = Ua(d));
  let {
      pathname: y = "/",
      search: o = "",
      hash: O = "",
      state: _ = null,
      key: z = "default",
    } = d,
    q = w.useMemo(() => {
      let j = al(y, S);
      return j == null
        ? null
        : {
            location: { pathname: j, search: o, hash: O, state: _, key: z },
            navigationType: f,
          };
    }, [S, y, o, O, _, z, f]);
  return (
    Yt(
      q != null,
      `<Router basename="${S}"> is not able to match the URL "${y}${o}${O}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    q == null
      ? null
      : w.createElement(
          Lt.Provider,
          { value: T },
          w.createElement(Yn.Provider, { children: m, value: q }),
        )
  );
}
function Ky({ children: c, location: m }) {
  return Dy(jf(c), m);
}
function jf(c, m = []) {
  let d = [];
  return (
    w.Children.forEach(c, (f, s) => {
      if (!w.isValidElement(f)) return;
      let h = [...m, s];
      if (f.type === w.Fragment) {
        d.push.apply(d, jf(f.props.children, h));
        return;
      }
      Ce(
        f.type === qn,
        `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ce(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes.",
        );
      let S = {
        id: f.props.id || h.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (S.children = jf(f.props.children, h)), d.push(S);
    }),
    d
  );
}
var ni = "get",
  ui = "application/x-www-form-urlencoded";
function fi(c) {
  return c != null && typeof c.tagName == "string";
}
function ky(c) {
  return fi(c) && c.tagName.toLowerCase() === "button";
}
function Jy(c) {
  return fi(c) && c.tagName.toLowerCase() === "form";
}
function $y(c) {
  return fi(c) && c.tagName.toLowerCase() === "input";
}
function Wy(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function Fy(c, m) {
  return c.button === 0 && (!m || m === "_self") && !Wy(c);
}
var li = null;
function Py() {
  if (li === null)
    try {
      new FormData(document.createElement("form"), 0), (li = !1);
    } catch {
      li = !0;
    }
  return li;
}
var Iy = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Mf(c) {
  return c != null && !Iy.has(c)
    ? (Yt(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`,
      ),
      null)
    : c;
}
function e0(c, m) {
  let d, f, s, h, S;
  if (Jy(c)) {
    let T = c.getAttribute("action");
    (f = T ? al(T, m) : null),
      (d = c.getAttribute("method") || ni),
      (s = Mf(c.getAttribute("enctype")) || ui),
      (h = new FormData(c));
  } else if (ky(c) || ($y(c) && (c.type === "submit" || c.type === "image"))) {
    let T = c.form;
    if (T == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = c.getAttribute("formaction") || T.getAttribute("action");
    if (
      ((f = y ? al(y, m) : null),
      (d = c.getAttribute("formmethod") || T.getAttribute("method") || ni),
      (s =
        Mf(c.getAttribute("formenctype")) ||
        Mf(T.getAttribute("enctype")) ||
        ui),
      (h = new FormData(T, c)),
      !Py())
    ) {
      let { name: o, type: O, value: _ } = c;
      if (O === "image") {
        let z = o ? `${o}.` : "";
        h.append(`${z}x`, "0"), h.append(`${z}y`, "0");
      } else o && h.append(o, _);
    }
  } else {
    if (fi(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (d = ni), (f = null), (s = ui), (S = c);
  }
  return (
    h && s === "text/plain" && ((S = h), (h = void 0)),
    { action: f, method: d.toLowerCase(), encType: s, formData: h, body: S }
  );
}
function Hf(c, m) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(m);
}
async function t0(c, m) {
  if (c.id in m) return m[c.id];
  try {
    let d = await import(c.module);
    return (m[c.id] = d), d;
  } catch (d) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`,
      ),
      console.error(d),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function l0(c) {
  return c == null
    ? !1
    : c.href == null
      ? c.rel === "preload" &&
        typeof c.imageSrcSet == "string" &&
        typeof c.imageSizes == "string"
      : typeof c.rel == "string" && typeof c.href == "string";
}
async function a0(c, m, d) {
  let f = await Promise.all(
    c.map(async (s) => {
      let h = m.routes[s.route.id];
      if (h) {
        let S = await t0(h, d);
        return S.links ? S.links() : [];
      }
      return [];
    }),
  );
  return c0(
    f
      .flat(1)
      .filter(l0)
      .filter((s) => s.rel === "stylesheet" || s.rel === "preload")
      .map((s) =>
        s.rel === "stylesheet"
          ? { ...s, rel: "prefetch", as: "style" }
          : { ...s, rel: "prefetch" },
      ),
  );
}
function kd(c, m, d, f, s, h) {
  let S = (y, o) => (d[o] ? y.route.id !== d[o].route.id : !0),
    T = (y, o) => {
      var O;
      return (
        d[o].pathname !== y.pathname ||
        (((O = d[o].route.path) == null ? void 0 : O.endsWith("*")) &&
          d[o].params["*"] !== y.params["*"])
      );
    };
  return h === "assets"
    ? m.filter((y, o) => S(y, o) || T(y, o))
    : h === "data"
      ? m.filter((y, o) => {
          var _;
          let O = f.routes[y.route.id];
          if (!O || !O.hasLoader) return !1;
          if (S(y, o) || T(y, o)) return !0;
          if (y.route.shouldRevalidate) {
            let z = y.route.shouldRevalidate({
              currentUrl: new URL(
                s.pathname + s.search + s.hash,
                window.origin,
              ),
              currentParams: ((_ = d[0]) == null ? void 0 : _.params) || {},
              nextUrl: new URL(c, window.origin),
              nextParams: y.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof z == "boolean") return z;
          }
          return !0;
        })
      : [];
}
function n0(c, m, { includeHydrateFallback: d } = {}) {
  return u0(
    c
      .map((f) => {
        let s = m.routes[f.route.id];
        if (!s) return [];
        let h = [s.module];
        return (
          s.clientActionModule && (h = h.concat(s.clientActionModule)),
          s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)),
          d &&
            s.hydrateFallbackModule &&
            (h = h.concat(s.hydrateFallbackModule)),
          s.imports && (h = h.concat(s.imports)),
          h
        );
      })
      .flat(1),
  );
}
function u0(c) {
  return [...new Set(c)];
}
function i0(c) {
  let m = {},
    d = Object.keys(c).sort();
  for (let f of d) m[f] = c[f];
  return m;
}
function c0(c, m) {
  let d = new Set();
  return (
    new Set(m),
    c.reduce((f, s) => {
      let h = JSON.stringify(i0(s));
      return d.has(h) || (d.add(h), f.push({ key: h, link: s })), f;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var f0 = new Set([100, 101, 204, 205]);
function r0(c, m) {
  let d =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : c;
  return (
    d.pathname === "/"
      ? (d.pathname = "_root.data")
      : m && al(d.pathname, m) === "/"
        ? (d.pathname = `${m.replace(/\/$/, "")}/_root.data`)
        : (d.pathname = `${d.pathname.replace(/\/$/, "")}.data`),
    d
  );
}
function im() {
  let c = w.useContext(wa);
  return (
    Hf(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    c
  );
}
function o0() {
  let c = w.useContext(ci);
  return (
    Hf(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    c
  );
}
var qf = w.createContext(void 0);
qf.displayName = "FrameworkContext";
function cm() {
  let c = w.useContext(qf);
  return (
    Hf(c, "You must render this element inside a <HydratedRouter> element"), c
  );
}
function s0(c, m) {
  let d = w.useContext(qf),
    [f, s] = w.useState(!1),
    [h, S] = w.useState(!1),
    {
      onFocus: T,
      onBlur: y,
      onMouseEnter: o,
      onMouseLeave: O,
      onTouchStart: _,
    } = m,
    z = w.useRef(null);
  w.useEffect(() => {
    if ((c === "render" && S(!0), c === "viewport")) {
      let L = (B) => {
          B.forEach((V) => {
            S(V.isIntersecting);
          });
        },
        Q = new IntersectionObserver(L, { threshold: 0.5 });
      return (
        z.current && Q.observe(z.current),
        () => {
          Q.disconnect();
        }
      );
    }
  }, [c]),
    w.useEffect(() => {
      if (f) {
        let L = setTimeout(() => {
          S(!0);
        }, 100);
        return () => {
          clearTimeout(L);
        };
      }
    }, [f]);
  let q = () => {
      s(!0);
    },
    j = () => {
      s(!1), S(!1);
    };
  return d
    ? c !== "intent"
      ? [h, z, {}]
      : [
          h,
          z,
          {
            onFocus: Hn(T, q),
            onBlur: Hn(y, j),
            onMouseEnter: Hn(o, q),
            onMouseLeave: Hn(O, j),
            onTouchStart: Hn(_, q),
          },
        ]
    : [!1, z, {}];
}
function Hn(c, m) {
  return (d) => {
    c && c(d), d.defaultPrevented || m(d);
  };
}
function d0({ page: c, ...m }) {
  let { router: d } = im(),
    f = w.useMemo(() => Jd(d.routes, c, d.basename), [d.routes, c, d.basename]);
  return f ? w.createElement(h0, { page: c, matches: f, ...m }) : null;
}
function m0(c) {
  let { manifest: m, routeModules: d } = cm(),
    [f, s] = w.useState([]);
  return (
    w.useEffect(() => {
      let h = !1;
      return (
        a0(c, m, d).then((S) => {
          h || s(S);
        }),
        () => {
          h = !0;
        }
      );
    }, [c, m, d]),
    f
  );
}
function h0({ page: c, matches: m, ...d }) {
  let f = kl(),
    { manifest: s, routeModules: h } = cm(),
    { basename: S } = im(),
    { loaderData: T, matches: y } = o0(),
    o = w.useMemo(() => kd(c, m, y, s, f, "data"), [c, m, y, s, f]),
    O = w.useMemo(() => kd(c, m, y, s, f, "assets"), [c, m, y, s, f]),
    _ = w.useMemo(() => {
      if (c === f.pathname + f.search + f.hash) return [];
      let j = new Set(),
        L = !1;
      if (
        (m.forEach((B) => {
          var I;
          let V = s.routes[B.route.id];
          !V ||
            !V.hasLoader ||
            ((!o.some((re) => re.route.id === B.route.id) &&
              B.route.id in T &&
              (I = h[B.route.id]) != null &&
              I.shouldRevalidate) ||
            V.hasClientLoader
              ? (L = !0)
              : j.add(B.route.id));
        }),
        j.size === 0)
      )
        return [];
      let Q = r0(c, S);
      return (
        L &&
          j.size > 0 &&
          Q.searchParams.set(
            "_routes",
            m
              .filter((B) => j.has(B.route.id))
              .map((B) => B.route.id)
              .join(","),
          ),
        [Q.pathname + Q.search]
      );
    }, [S, T, f, s, o, m, c, h]),
    z = w.useMemo(() => n0(O, s), [O, s]),
    q = m0(O);
  return w.createElement(
    w.Fragment,
    null,
    _.map((j) =>
      w.createElement("link", {
        key: j,
        rel: "prefetch",
        as: "fetch",
        href: j,
        ...d,
      }),
    ),
    z.map((j) =>
      w.createElement("link", { key: j, rel: "modulepreload", href: j, ...d }),
    ),
    q.map(({ key: j, link: L }) => w.createElement("link", { key: j, ...L })),
  );
}
function v0(...c) {
  return (m) => {
    c.forEach((d) => {
      typeof d == "function" ? d(m) : d != null && (d.current = m);
    });
  };
}
var fm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  fm && (window.__reactRouterVersion = "7.6.2");
} catch {}
function y0({ basename: c, children: m, window: d }) {
  let f = w.useRef();
  f.current == null && (f.current = ay({ window: d, v5Compat: !0 }));
  let s = f.current,
    [h, S] = w.useState({ action: s.action, location: s.location }),
    T = w.useCallback(
      (y) => {
        w.startTransition(() => S(y));
      },
      [S],
    );
  return (
    w.useLayoutEffect(() => s.listen(T), [s, T]),
    w.createElement(Vy, {
      basename: c,
      children: m,
      location: h.location,
      navigationType: h.action,
      navigator: s,
    })
  );
}
var rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  om = w.forwardRef(function (
    {
      onClick: m,
      discover: d = "render",
      prefetch: f = "none",
      relative: s,
      reloadDocument: h,
      replace: S,
      state: T,
      target: y,
      to: o,
      preventScrollReset: O,
      viewTransition: _,
      ...z
    },
    q,
  ) {
    let { basename: j } = w.useContext(Lt),
      L = typeof o == "string" && rm.test(o),
      Q,
      B = !1;
    if (typeof o == "string" && L && ((Q = o), fm))
      try {
        let he = new URL(window.location.href),
          De = o.startsWith("//") ? new URL(he.protocol + o) : new URL(o),
          J = al(De.pathname, j);
        De.origin === he.origin && J != null
          ? (o = J + De.search + De.hash)
          : (B = !0);
      } catch {
        Yt(
          !1,
          `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let V = _y(o, { relative: s }),
      [I, re, P] = s0(f, z),
      ye = x0(o, {
        replace: S,
        state: T,
        target: y,
        preventScrollReset: O,
        relative: s,
        viewTransition: _,
      });
    function Te(he) {
      m && m(he), he.defaultPrevented || ye(he);
    }
    let ne = w.createElement("a", {
      ...z,
      ...P,
      href: Q || V,
      onClick: B || h ? m : Te,
      ref: v0(q, re),
      target: y,
      "data-discover": !L && d === "render" ? "true" : void 0,
    });
    return I && !L
      ? w.createElement(w.Fragment, null, ne, w.createElement(d0, { page: V }))
      : ne;
  });
om.displayName = "Link";
var p0 = w.forwardRef(function (
  {
    "aria-current": m = "page",
    caseSensitive: d = !1,
    className: f = "",
    end: s = !1,
    style: h,
    to: S,
    viewTransition: T,
    children: y,
    ...o
  },
  O,
) {
  let _ = Gn(S, { relative: o.relative }),
    z = kl(),
    q = w.useContext(ci),
    { navigator: j, basename: L } = w.useContext(Lt),
    Q = q != null && O0(_) && T === !0,
    B = j.encodeLocation ? j.encodeLocation(_).pathname : _.pathname,
    V = z.pathname,
    I =
      q && q.navigation && q.navigation.location
        ? q.navigation.location.pathname
        : null;
  d ||
    ((V = V.toLowerCase()),
    (I = I ? I.toLowerCase() : null),
    (B = B.toLowerCase())),
    I && L && (I = al(I, L) || I);
  const re = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
  let P = V === B || (!s && V.startsWith(B) && V.charAt(re) === "/"),
    ye =
      I != null &&
      (I === B || (!s && I.startsWith(B) && I.charAt(B.length) === "/")),
    Te = { isActive: P, isPending: ye, isTransitioning: Q },
    ne = P ? m : void 0,
    he;
  typeof f == "function"
    ? (he = f(Te))
    : (he = [
        f,
        P ? "active" : null,
        ye ? "pending" : null,
        Q ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let De = typeof h == "function" ? h(Te) : h;
  return w.createElement(
    om,
    {
      ...o,
      "aria-current": ne,
      className: he,
      ref: O,
      style: De,
      to: S,
      viewTransition: T,
    },
    typeof y == "function" ? y(Te) : y,
  );
});
p0.displayName = "NavLink";
var g0 = w.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: m,
      navigate: d,
      reloadDocument: f,
      replace: s,
      state: h,
      method: S = ni,
      action: T,
      onSubmit: y,
      relative: o,
      preventScrollReset: O,
      viewTransition: _,
      ...z
    },
    q,
  ) => {
    let j = T0(),
      L = A0(T, { relative: o }),
      Q = S.toLowerCase() === "get" ? "get" : "post",
      B = typeof T == "string" && rm.test(T),
      V = (I) => {
        if ((y && y(I), I.defaultPrevented)) return;
        I.preventDefault();
        let re = I.nativeEvent.submitter,
          P = (re == null ? void 0 : re.getAttribute("formmethod")) || S;
        j(re || I.currentTarget, {
          fetcherKey: m,
          method: P,
          navigate: d,
          replace: s,
          state: h,
          relative: o,
          preventScrollReset: O,
          viewTransition: _,
        });
      };
    return w.createElement("form", {
      ref: q,
      method: Q,
      action: L,
      onSubmit: f ? y : V,
      ...z,
      "data-discover": !B && c === "render" ? "true" : void 0,
    });
  },
);
g0.displayName = "Form";
function b0(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sm(c) {
  let m = w.useContext(wa);
  return Ce(m, b0(c)), m;
}
function x0(
  c,
  {
    target: m,
    replace: d,
    state: f,
    preventScrollReset: s,
    relative: h,
    viewTransition: S,
  } = {},
) {
  let T = am(),
    y = kl(),
    o = Gn(c, { relative: h });
  return w.useCallback(
    (O) => {
      if (Fy(O, m)) {
        O.preventDefault();
        let _ = d !== void 0 ? d : Bn(y) === Bn(o);
        T(c, {
          replace: _,
          state: f,
          preventScrollReset: s,
          relative: h,
          viewTransition: S,
        });
      }
    },
    [y, T, o, d, f, m, c, s, h, S],
  );
}
var S0 = 0,
  E0 = () => `__${String(++S0)}__`;
function T0() {
  let { router: c } = sm("useSubmit"),
    { basename: m } = w.useContext(Lt),
    d = Gy();
  return w.useCallback(
    async (f, s = {}) => {
      let { action: h, method: S, encType: T, formData: y, body: o } = e0(f, m);
      if (s.navigate === !1) {
        let O = s.fetcherKey || E0();
        await c.fetch(O, d, s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: o,
          formMethod: s.method || S,
          formEncType: s.encType || T,
          flushSync: s.flushSync,
        });
      } else
        await c.navigate(s.action || h, {
          preventScrollReset: s.preventScrollReset,
          formData: y,
          body: o,
          formMethod: s.method || S,
          formEncType: s.encType || T,
          replace: s.replace,
          state: s.state,
          fromRouteId: d,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition,
        });
    },
    [c, m, d],
  );
}
function A0(c, { relative: m } = {}) {
  let { basename: d } = w.useContext(Lt),
    f = w.useContext(nl);
  Ce(f, "useFormAction must be used inside a RouteContext");
  let [s] = f.matches.slice(-1),
    h = { ...Gn(c || ".", { relative: m }) },
    S = kl();
  if (c == null) {
    h.search = S.search;
    let T = new URLSearchParams(h.search),
      y = T.getAll("index");
    if (y.some((O) => O === "")) {
      T.delete("index"),
        y.filter((_) => _).forEach((_) => T.append("index", _));
      let O = T.toString();
      h.search = O ? `?${O}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      s.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    d !== "/" && (h.pathname = h.pathname === "/" ? d : ll([d, h.pathname])),
    Bn(h)
  );
}
function O0(c, m = {}) {
  let d = w.useContext(em);
  Ce(
    d != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: f } = sm("useViewTransitionState"),
    s = Gn(c, { relative: m.relative });
  if (!d.isTransitioning) return !1;
  let h = al(d.currentLocation.pathname, f) || d.currentLocation.pathname,
    S = al(d.nextLocation.pathname, f) || d.nextLocation.pathname;
  return ii(s.pathname, S) != null || ii(s.pathname, h) != null;
}
[...f0];
const N0 = "/kindcare-react/assets/kindcare-ukINupWo.png",
  R0 = () => {
    const c = am();
    return b.jsxs("header", {
      className:
        "mx-auto hidden grid-cols-6 grid-rows-2 items-center rounded-t-[35px] bg-white py-4 lg:grid xl:max-w-[1200px]",
      children: [
        b.jsx("div", {
          className: "col-start-1 row-span-2 flex items-center",
          children: b.jsx("img", {
            src: N0,
            alt: "KindCare Wellness Logo",
            className: "h-50 max-w-full md:h-30 lg:h-45",
          }),
        }),
        b.jsxs("address", {
          className:
            "col-span-2 col-start-5 row-start-1 flex flex-col items-end justify-end pr-4 text-right text-sm text-[var(--primary)] not-italic",
          children: [
            b.jsxs("p", {
              children: [
                b.jsx("span", {
                  className: "font-semibold",
                  children: "Hours:",
                }),
                " Mon-Fri | 9am-5pm",
              ],
            }),
            b.jsxs("p", {
              children: [
                b.jsx("span", {
                  className: "font-semibold",
                  children: "Location:",
                }),
                " 131 PALISADE AVE, Jersey City, NJ 07306",
              ],
            }),
            b.jsxs("p", {
              children: [
                b.jsx("span", {
                  className: "font-semibold",
                  children: "Phone:",
                }),
                b.jsx("a", {
                  href: "tel:+12012859722",
                  className: "hover:underline",
                  children: "(201) 285-9722",
                }),
              ],
            }),
            b.jsxs("p", {
              children: [
                b.jsx("span", {
                  className: "font-semibold",
                  children: "Email:",
                }),
                b.jsx("a", {
                  href: "mailto:support@kindcare.com",
                  className: "hover:underline",
                  children: "support@kindcare.com",
                }),
              ],
            }),
          ],
        }),
        b.jsxs("nav", {
          className:
            "col-span-5 col-start-2 row-start-2 hidden items-center justify-center space-x-4 px-4 lg:flex xl:space-x-10",
          "aria-label": "Main navigation",
          children: [
            b.jsx("a", {
              href: "/",
              className:
                "px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm",
              children: "Home",
            }),
            b.jsx("div", {
              className: "group relative",
              role: "none",
              children: b.jsxs("div", {
                className: "flex flex-col",
                children: [
                  b.jsxs("button", {
                    id: "about-menu-button",
                    className:
                      "about-us-btn flex items-center rounded-tl-[35px] rounded-tr-[35px] px-3 py-3 text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white lg:text-xs xl:px-4 xl:py-4 xl:text-sm",
                    "aria-expanded": "false",
                    "aria-controls": "about-menu",
                    role: "menuitem",
                    onClick: () => c("/about"),
                    children: [
                      b.jsx("span", { children: "About Us" }),
                      b.jsx("span", {
                        className: "fas fa-angle-down px-2",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                  b.jsx("div", {
                    id: "about-menu",
                    className:
                      "submenu absolute top-full left-0 z-50 mt-1 hidden w-max min-w-[20rem] rounded-br-[35px] rounded-bl-[35px] bg-[var(--primary)] px-6 py-6 text-white group-hover:block lg:text-xs",
                    role: "menu",
                    "aria-labelledby": "about-menu-button",
                    children: b.jsxs("ul", {
                      role: "none",
                      children: [
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Why KindCare?",
                          }),
                        }),
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Our Leadership",
                          }),
                        }),
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Compliance & Ethics",
                          }),
                        }),
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Donate",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            b.jsx("div", {
              className: "group relative",
              role: "none",
              children: b.jsxs("div", {
                className: "flex flex-col",
                children: [
                  b.jsxs("button", {
                    id: "services-menu-button",
                    className:
                      "about-us-btn flex items-center rounded-tl-[35px] rounded-tr-[35px] px-3 py-3 text-lg text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white lg:text-xs xl:px-4 xl:py-4 xl:text-sm",
                    "aria-expanded": "false",
                    "aria-controls": "services-menu",
                    role: "menuitem",
                    onClick: () => c("/Services"),
                    children: [
                      b.jsx("span", { children: "Services" }),
                      b.jsx("span", {
                        className: "fas fa-angle-down px-2",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                  b.jsx("div", {
                    id: "services-menu",
                    className:
                      "submenu absolute top-full left-0 z-50 mt-1 hidden w-max min-w-[20rem] rounded-br-[35px] rounded-bl-[35px] bg-[var(--primary)] px-6 py-6 text-white group-hover:block",
                    role: "menu",
                    "aria-labelledby": "services-menu-button",
                    children: b.jsxs("ul", {
                      role: "none",
                      children: [
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Hospice Care",
                          }),
                        }),
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Palliative Care",
                          }),
                        }),
                        b.jsx("li", {
                          role: "none",
                          children: b.jsx("a", {
                            href: "#autism",
                            className:
                              "block py-1 text-lg text-white hover:underline xl:text-xl",
                            role: "menuitem",
                            children: "Home Health Care",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            " ",
            b.jsx("a", {
              href: "/careers",
              className:
                "px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm",
              children: "Careers",
            }),
            b.jsx("a", {
              href: "/contact",
              className:
                "px-2 py-2 text-lg text-[var(--primary)] hover:rounded-[15px] hover:bg-[var(--primary)] hover:text-white lg:text-xs xl:text-sm",
              children: "Contact Us",
            }),
            b.jsx("a", {
              href: "#register",
              className:
                "rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--secondary)] lg:text-xs xl:px-6 xl:py-3 xl:text-base",
              children: "Request Consultation",
            }),
          ],
        }),
      ],
    });
  },
  z0 = () => b.jsx(b.Fragment, {}),
  M0 = "/kindcare-react/assets/ServicesHeroImage-DQIxyDZe.png",
  _0 = "/kindcare-react/assets/patientwithaid-5f65GyPY.png",
  j0 = () =>
    b.jsxs(b.Fragment, {
      children: [
        b.jsxs("section", {
          className: "grid grid-cols-1 lg:grid-cols-5 bg-white",
          children: [
            b.jsxs("div", {
              "data-aos": "fade-right",
              "data-aos-delay": "200",
              "data-aos-duration": "1000",
              "data-aos-easing": "ease-in-out",
              "data-aos-once": "true",
              className:
                "col-span-2 flex flex-col justify-center px-6 py-2 lg:px-20 lg:py-16 relative z-10",
              children: [
                b.jsxs("h1", {
                  className:
                    "text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-tight text-[var(--secondary)] mb-6",
                  children: [
                    "We Provide Home Care Services for",
                    " ",
                    b.jsx("span", {
                      className: "text-[var(--primary)]",
                      children: "Seniors.",
                    }),
                  ],
                }),
                b.jsx("p", {
                  className: "text-base sm:text-lg text-gray-700 mb-8",
                  children:
                    "Discover the comfort of aging in place with compassionate, professional care—right where you belong, home.",
                }),
                b.jsx("h2", {
                  className:
                    "pb-10 text-xl sm:text-2xl font-semibold text-[var(--primary)]",
                  children: "Stay home. Stay independent.",
                }),
              ],
            }),
            b.jsx("div", {
              className: "col-span-3 h-64 sm:h-80 md:h-[30rem] lg:h-auto",
              children: b.jsx("img", {
                "data-aos": "fade-left",
                "data-aos-delay": "200",
                "data-aos-duration": "1000",
                "data-aos-easing": "ease-in-out",
                "data-aos-once": "true",
                src: M0,
                alt: "Senior Home Care",
                className: "rounded-l-[25px] h-full w-full object-cover",
              }),
            }),
          ],
        }),
        b.jsxs("section", {
          className:
            "mt-[-10%] rounded-tl-[25px] grid grid-cols-1 sm:mt-[-10%] sm:pt-[10%] lg:grid-cols-5 bg-[var(--primary)]",
          children: [
            b.jsxs("div", {
              "data-aos": "fade-right",
              "data-aos-delay": "200",
              "data-aos-duration": "1000",
              "data-aos-easing": "ease-in-out",
              "data-aos-once": "true",
              className:
                "col-span-2 flex flex-col justify-center px-6 pt-20 sm:px-12 lg:px-20 lg:py-16 relative z-10",
              children: [
                b.jsx("p", {
                  className: "mt-5 text-base sm:text-lg text-white mb-8",
                  children:
                    "At KindCare Wellness, our personalized home care services empower seniors and individuals with disabilities to live safely and independently—without leaving the comfort of home. Whether it’s help with daily tasks, mobility, medication, or companionship, our professional caregivers provide the compassionate support you need to maintain your quality of life.",
                }),
                b.jsx("p", {
                  className: "text-base sm:text-lg text-white mb-20",
                  children:
                    "We create care plans tailored to your needs—so you or your loved one can age in place with confidence, dignity, and peace of mind.",
                }),
              ],
            }),
            b.jsxs("div", {
              "data-aos": "fade-left",
              "data-aos-delay": "200",
              "data-aos-duration": "1000",
              "data-aos-easing": "ease-in-out",
              "data-aos-once": "true",
              className:
                "flex-col items-center w-2xl sm:pl-10 sm:pt-0 lg:pl-25 lg:pt-30 col-span-3 h-64 md:h-[30rem] lg:h-auto",
              children: [
                b.jsxs("h1", {
                  className:
                    "text-[2rem] ml-10 w-70 sm:text-[3rem] md:text-[2rem] lg:text-[3rem] font-extrabold leading-tight text-white mb-6",
                  children: [
                    "Compassionate In-Home Support That Helps You",
                    " ",
                    b.jsx("span", {
                      className: "text-[var(--secondary)]",
                      children: "Thrive.",
                    }),
                  ],
                }),
                b.jsx("img", {
                  src: _0,
                  alt: "",
                  className:
                    " w-60 ml-30 z-10 lg:mb-[-40%] md:mb-[-60%] mb-[-30%] rounded-[25px]",
                }),
              ],
            }),
          ],
        }),
        b.jsx("section", {
          className: "p-12 grid grid-cols-1 lg:grid-cols-5 bg-white",
          children: b.jsxs("div", {
            className: "lg:col-span-5 flex lg:flex-row gap-x-20 flex-col",
            children: [
              b.jsxs("h1", {
                "data-aos": "fade-right",
                "data-aos-delay": "200",
                "data-aos-duration": "1000",
                "data-aos-easing": "ease-in-out",
                "data-aos-once": "true",
                className:
                  "mt-20 w-60 sm:mt-20 lg:ml-20 lg:mt-30 text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-extrabold leading-tight text-[var(--secondary)] flex-shrink-0",
                children: [
                  "Why Home Care May Be Right for",
                  " ",
                  b.jsx("span", {
                    className: "text-[var(--primary)]",
                    children: "You.",
                  }),
                ],
              }),
              b.jsxs("div", {
                "data-aos": "fade-left",
                "data-aos-delay": "200",
                "data-aos-duration": "1000",
                "data-aos-easing": "ease-in-out",
                "data-aos-once": "true",
                className: "flex flex-col max-w-[35rem] mt-10",
                children: [
                  b.jsx("p", {
                    className: "text-base sm:text-lg text-gray-700 mb-6",
                    children:
                      "Experience compassionate, professional care designed to support your independence and enhance your quality of life—right in the comfort of your own home. Our senior and home health care services are perfect for those who want expert assistance with daily tasks, health management, and companionship without sacrificing the comfort and familiarity of home.",
                  }),
                  b.jsx("p", {
                    className: "text-base sm:text-lg text-gray-700",
                    children:
                      "Whether you need a little extra help or around-the-clock support, we tailor our care to your unique needs—giving you and your loved ones peace of mind and the freedom to live life on your terms.",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  D0 = () => b.jsx(b.Fragment, {}),
  U0 = () =>
    b.jsxs("footer", {
      className:
        "mx-auto grid grid-cols-1 rounded-t-[35px] bg-white pt-6 pb-6 sm:p-8 md:grid-cols-12 md:p-12 xl:max-w-[1200px] [@media(max-width:449px)]:pl-5",
      children: [
        b.jsxs("div", {
          className: "mb-8 flex flex-col md:col-span-3 md:mb-0",
          children: [
            b.jsx("h2", {
              className: "mb-4 text-2xl text-[var(--primary)] sm:text-3xl",
              children: "Follow Us:",
            }),
            b.jsxs("div", {
              className: "mb-6 flex space-x-4 sm:space-x-5",
              "aria-label": "Social media links",
              children: [
                b.jsx("a", {
                  href: "https://facebook.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl",
                  "aria-label": "Facebook",
                  children: b.jsx("span", {
                    className: "fab fa-facebook-f",
                    "aria-hidden": "true",
                  }),
                }),
                b.jsx("a", {
                  href: "https://instagram.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl",
                  "aria-label": "Instagram",
                  children: b.jsx("span", {
                    className: "fab fa-instagram",
                    "aria-hidden": "true",
                  }),
                }),
                b.jsx("a", {
                  href: "https://linkedin.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl",
                  "aria-label": "LinkedIn",
                  children: b.jsx("span", {
                    className: "fab fa-linkedin-in",
                    "aria-hidden": "true",
                  }),
                }),
                b.jsx("a", {
                  href: "https://twitter.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl",
                  "aria-label": "Twitter",
                  children: b.jsx("span", {
                    className: "fab fa-x-twitter",
                    "aria-hidden": "true",
                  }),
                }),
                b.jsx("a", {
                  href: "https://youtube.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex size-8 items-center justify-center rounded-full bg-[var(--secondary)] text-lg text-white hover:bg-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none sm:size-10 sm:text-xl",
                  "aria-label": "YouTube",
                  children: b.jsx("span", {
                    className: "fab fa-youtube",
                    "aria-hidden": "true",
                  }),
                }),
              ],
            }),
            b.jsxs("div", {
              className: "space-y-2 text-sm",
              children: [
                b.jsx("p", {
                  children: "© KindCare, 2025. All Rights Reserved.",
                }),
                b.jsx("p", {
                  children:
                    "KindCare is accredited by Community Health Accreditation Partner for meeting the industry's highest nationally recognized standards of care.",
                }),
              ],
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "mb-6 flex flex-col space-y-2 md:col-span-2 md:col-start-7 md:mb-0",
          children: [
            b.jsx("h3", {
              className: "font-semibold text-[var(--primary)]",
              children: "Quick Links",
            }),
            b.jsx("a", {
              href: "#about",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "About Us",
            }),
            b.jsx("a", {
              href: "#services",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Services",
            }),
            b.jsx("a", {
              href: "#blog",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Blog",
            }),
            b.jsx("a", {
              href: "#careers",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Join Our Team",
            }),
            b.jsx("a", {
              href: "#register",
              className:
                "mt-2 w-max rounded-2xl bg-[var(--primary)] px-4 py-2 text-sm text-white hover:bg-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none",
              children: "Request Consultation",
            }),
          ],
        }),
        b.jsxs("div", {
          className:
            "mb-6 flex flex-col space-y-2 md:col-span-2 md:col-start-9 md:mb-0",
          children: [
            b.jsx("h3", {
              className: "font-semibold text-[var(--primary)]",
              children: "Resources",
            }),
            b.jsx("a", {
              href: "#Contact",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Contact Us",
            }),
            b.jsx("a", {
              href: "#services",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "FAQs",
            }),
            b.jsx("a", {
              href: "#referrals",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Employees",
            }),
            b.jsx("a", {
              href: "#referrals",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Referrals",
            }),
            b.jsx("a", {
              href: "#blog",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "How To Pay For Home Care",
            }),
          ],
        }),
        b.jsxs("div", {
          className: "flex flex-col space-y-2 md:col-span-2 md:col-start-11",
          children: [
            b.jsx("h3", {
              className: "font-semibold text-[var(--primary)]",
              children: "Legal",
            }),
            b.jsx("a", {
              href: "#Contact",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Compliance",
            }),
            b.jsx("a", {
              href: "#services",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Privacy Notice for Clients",
            }),
            b.jsx("a", {
              href: "#blog",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "HIPAA",
            }),
            b.jsx("a", {
              href: "#blog",
              className:
                "px-2 py-1 text-sm text-[var(--primary)] hover:text-[var(--secondary)]",
              children: "Ethics and Safety",
            }),
          ],
        }),
      ],
    });
function w0() {
  return (
    w.useEffect(() => {
      Iv.init({ duration: 800, once: !0 });
    }, []),
    b.jsxs(y0, {
      children: [
        b.jsx("header", { className: "lg:hidden", children: b.jsx(ty, {}) }),
        b.jsx(R0, {}),
        b.jsxs(Ky, {
          children: [
            b.jsx(qn, { path: "/", element: b.jsx($v, {}) }),
            b.jsx(qn, { path: "/about", element: b.jsx(z0, {}) }),
            b.jsx(qn, { path: "/services", element: b.jsx(j0, {}) }),
            b.jsx(qn, { path: "/contact", element: b.jsx(D0, {}) }),
          ],
        }),
        b.jsx(U0, {}),
      ],
    })
  );
}
Xv.createRoot(document.getElementById("root")).render(
  b.jsx(w.StrictMode, { children: b.jsx(w0, {}) }),
);
