/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 191));
})([
  function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r('object' == typeof globalThis && globalThis) ||
        r('object' == typeof window && window) ||
        r('object' == typeof self && self) ||
        r('object' == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    }).call(this, r(60));
  },
  function (t, e, r) {
    var n = r(0),
      i = r(95).f,
      a = r(71),
      s = r(27),
      o = r(98),
      l = r(273),
      h = r(105);
    t.exports = function (t, e) {
      var r,
        c,
        u,
        f,
        p,
        d = t.target,
        m = t.global,
        v = t.stat;
      if ((r = m ? n : v ? n[d] || o(d, {}) : (n[d] || {}).prototype))
        for (c in e) {
          if (
            ((f = e[c]),
            (u = t.noTargetGet ? (p = i(r, c)) && p.value : r[c]),
            !h(m ? c : d + (v ? '.' : '#') + c, t.forced) && void 0 !== u)
          ) {
            if (typeof f == typeof u) continue;
            l(f, u);
          }
          (t.sham || (u && u.sham)) && a(f, 'sham', !0), s(r, c, f, t);
        }
    };
  },
  function (t, e) {
    var r = Function.prototype,
      n = r.bind,
      i = r.call,
      a = n && n.bind(i);
    t.exports = n
      ? function (t) {
          return t && a(i, t);
        }
      : function (t) {
          return (
            t &&
            function () {
              return i.apply(t, arguments);
            }
          );
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e, r) {
    var n = r(275);
    t.exports = function (t) {
      return n(t.length);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return 'function' == typeof t;
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(148),
      a = r(16),
      s = r(99),
      o = r(147),
      l = r(146),
      h = i('wks'),
      c = n.Symbol,
      u = c && c.for,
      f = l ? c : (c && c.withoutSetter) || s;
    t.exports = function (t) {
      if (!a(h, t) || (!o && 'string' != typeof h[t])) {
        var e = 'Symbol.' + t;
        o && a(c, t) ? (h[t] = c[t]) : (h[t] = l && u ? u(e) : f(e));
      }
      return h[t];
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(96),
      a = n.Object;
    t.exports = function (t) {
      return a(i(t));
    };
  },
  function (t, e, r) {
    var n = r(6),
      i = r(36),
      a = r(17),
      s = n('unscopables'),
      o = Array.prototype;
    null == o[s] && a.f(o, s, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        o[s][t] = !0;
      });
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e) {
    var r = Array.isArray;
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(0),
      i = r(12),
      a = n.String,
      s = n.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw s(a(t) + ' is not an object');
    };
  },
  function (t, e, r) {
    var n = r(5);
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : n(t);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(55);
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var a = r(385);
    Object.keys(a).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return a[t];
            },
          }));
    });
    var s = r(174);
    Object.keys(s).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          }));
    });
    var o = r(386);
    Object.keys(o).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            },
          }));
    });
    var l = r(387);
    Object.keys(l).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          }));
    });
    var h = n(r(388));
    e.IX2EngineActionTypes = h;
    var c = n(r(389));
    e.IX2EngineConstants = c;
  },
  function (t, e) {
    var r = Function.prototype.call;
    t.exports = r.bind
      ? r.bind(r)
      : function () {
          return r.apply(r, arguments);
        };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5);
    t.exports = function (t, e) {
      return arguments.length < 2 ? ((r = n[t]), i(r) ? r : void 0) : n[t] && n[t][e];
      var r;
    };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(7),
      a = n({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return a(i(t), e);
      };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(19),
      a = r(149),
      s = r(11),
      o = r(68),
      l = n.TypeError,
      h = Object.defineProperty;
    e.f = i
      ? h
      : function (t, e, r) {
          if ((s(t), (e = o(e)), s(r), a))
            try {
              return h(t, e, r);
            } catch (t) {}
          if ('get' in r || 'set' in r) throw l('Accessors not supported');
          return 'value' in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var n = r(129),
      i = 'object' == typeof self && self && self.Object === Object && self,
      a = n || i || Function('return this')();
    t.exports = a;
  },
  function (t, e, r) {
    var n = r(9);
    t.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      a = r(69),
      s = n.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw s(a(t) + ' is not a function');
    };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(20),
      a = n(n.bind);
    t.exports = function (t, e) {
      return (
        i(t),
        void 0 === e
          ? t
          : a
          ? a(t, e)
          : function () {
              return t.apply(e, arguments);
            }
      );
    };
  },
  function (t, e, r) {
    'use strict';
    var n = {},
      i = {},
      a = [],
      s = window.Webflow || [],
      o = window.jQuery,
      l = o(window),
      h = o(document),
      c = o.isFunction,
      u = (n._ = r(193)),
      f = (n.tram = r(124) && o.tram),
      p = !1,
      d = !1;
    function m(t) {
      n.env() &&
        (c(t.design) && l.on('__wf_design', t.design),
        c(t.preview) && l.on('__wf_preview', t.preview)),
        c(t.destroy) && l.on('__wf_destroy', t.destroy),
        t.ready &&
          c(t.ready) &&
          (function (t) {
            if (p) return void t.ready();
            if (u.contains(a, t.ready)) return;
            a.push(t.ready);
          })(t);
    }
    function v(t) {
      c(t.design) && l.off('__wf_design', t.design),
        c(t.preview) && l.off('__wf_preview', t.preview),
        c(t.destroy) && l.off('__wf_destroy', t.destroy),
        t.ready &&
          c(t.ready) &&
          (function (t) {
            a = u.filter(a, function (e) {
              return e !== t.ready;
            });
          })(t);
    }
    (f.config.hideBackface = !1),
      (f.config.keepInherited = !0),
      (n.define = function (t, e, r) {
        i[t] && v(i[t]);
        var n = (i[t] = e(o, u, r) || {});
        return m(n), n;
      }),
      (n.require = function (t) {
        return i[t];
      }),
      (n.push = function (t) {
        p ? c(t) && t() : s.push(t);
      }),
      (n.env = function (t) {
        var e = window.__wf_design,
          r = void 0 !== e;
        return t
          ? 'design' === t
            ? r && e
            : 'preview' === t
            ? r && !e
            : 'slug' === t
            ? r && window.__wf_slug
            : 'editor' === t
            ? window.WebflowEditor
            : 'test' === t
            ? window.__wf_test
            : 'frame' === t
            ? window !== window.top
            : void 0
          : r;
      });
    var y,
      g = navigator.userAgent.toLowerCase(),
      E = (n.env.touch =
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      b = (n.env.chrome =
        /chrome/.test(g) &&
        /Google/.test(navigator.vendor) &&
        parseInt(g.match(/chrome\/(\d+)\./)[1], 10)),
      _ = (n.env.ios = /(ipod|iphone|ipad)/.test(g));
    (n.env.safari = /safari/.test(g) && !b && !_),
      E &&
        h.on('touchstart mousedown', function (t) {
          y = t.target;
        }),
      (n.validClick = E
        ? function (t) {
            return t === y || o.contains(t, y);
          }
        : function () {
            return !0;
          });
    var x,
      S = 'resize.webflow orientationchange.webflow load.webflow';
    function T(t, e) {
      var r = [],
        n = {};
      return (
        (n.up = u.throttle(function (t) {
          u.each(r, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, n.up),
        (n.on = function (t) {
          'function' == typeof t && (u.contains(r, t) || r.push(t));
        }),
        (n.off = function (t) {
          r = arguments.length
            ? u.filter(r, function (e) {
                return e !== t;
              })
            : [];
        }),
        n
      );
    }
    function I(t) {
      c(t) && t();
    }
    function A() {
      x && (x.reject(), l.off('load', x.resolve)), (x = new o.Deferred()), l.on('load', x.resolve);
    }
    (n.resize = T(l, S)),
      (n.scroll = T(l, 'scroll.webflow resize.webflow orientationchange.webflow load.webflow')),
      (n.redraw = T()),
      (n.location = function (t) {
        window.location = t;
      }),
      n.env() && (n.location = function () {}),
      (n.ready = function () {
        (p = !0), d ? ((d = !1), u.each(i, m)) : u.each(a, I), u.each(s, I), n.resize.up();
      }),
      (n.load = function (t) {
        x.then(t);
      }),
      (n.destroy = function (t) {
        (t = t || {}),
          (d = !0),
          l.triggerHandler('__wf_destroy'),
          null != t.domready && (p = t.domready),
          u.each(i, v),
          n.resize.off(),
          n.scroll.off(),
          n.redraw.off(),
          (a = []),
          (s = []),
          'pending' === x.state() && A();
      }),
      o(n.ready),
      A(),
      (t.exports = window.Webflow = n);
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  function (t, e, r) {
    var n = r(40),
      i = r(96);
    t.exports = function (t) {
      return n(i(t));
    };
  },
  function (t, e, r) {
    var n = r(21),
      i = r(2),
      a = r(40),
      s = r(7),
      o = r(4),
      l = r(43),
      h = i([].push),
      c = function (t) {
        var e = 1 == t,
          r = 2 == t,
          i = 3 == t,
          c = 4 == t,
          u = 6 == t,
          f = 7 == t,
          p = 5 == t || u;
        return function (d, m, v, y) {
          for (
            var g,
              E,
              b = s(d),
              _ = a(b),
              x = n(m, v),
              S = o(_),
              T = 0,
              I = y || l,
              A = e ? I(d, S) : r || f ? I(d, 0) : void 0;
            S > T;
            T++
          )
            if ((p || T in _) && ((E = x((g = _[T]), T, b)), t))
              if (e) A[T] = E;
              else if (E)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return T;
                  case 2:
                    h(A, g);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    h(A, g);
                }
          return u ? -1 : i || c ? c : A;
        };
      };
    t.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
      filterReject: c(7),
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(9);
    t.exports = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        n(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      a = r(16),
      s = r(71),
      o = r(98),
      l = r(72),
      h = r(41),
      c = r(150).CONFIGURABLE,
      u = h.get,
      f = h.enforce,
      p = String(String).split('String');
    (t.exports = function (t, e, r, l) {
      var h,
        u = !!l && !!l.unsafe,
        d = !!l && !!l.enumerable,
        m = !!l && !!l.noTargetGet,
        v = l && void 0 !== l.name ? l.name : e;
      i(r) &&
        ('Symbol(' === String(v).slice(0, 7) &&
          (v = '[' + String(v).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!a(r, 'name') || (c && r.name !== v)) && s(r, 'name', v),
        (h = f(r)).source || (h.source = p.join('string' == typeof v ? v : ''))),
        t !== n
          ? (u ? !m && t[e] && (d = !0) : delete t[e], d ? (t[e] = r) : s(t, e, r))
          : d
          ? (t[e] = r)
          : o(e, r);
    })(Function.prototype, 'toString', function () {
      return (i(this) && u(this).source) || l(this);
    });
  },
  function (t, e, r) {
    var n = r(197),
      i = r(251),
      a = r(93),
      s = r(10),
      o = r(260);
    t.exports = function (t) {
      return 'function' == typeof t
        ? t
        : null == t
        ? a
        : 'object' == typeof t
        ? s(t)
          ? i(t[0], t[1])
          : n(t)
        : o(t);
    };
  },
  function (t, e, r) {
    var n = r(209),
      i = r(214);
    t.exports = function (t, e) {
      var r = i(t, e);
      return n(r) ? r : void 0;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  function (t, e, r) {
    var n,
      i,
      a = r(0),
      s = r(32),
      o = a.process,
      l = a.Deno,
      h = (o && o.versions) || (l && l.version),
      c = h && h.v8;
    c && (i = (n = c.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
      !i &&
        s &&
        (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
        (n = s.match(/Chrome\/(\d+)/)) &&
        (i = +n[1]),
      (t.exports = i);
  },
  function (t, e, r) {
    var n = r(15);
    t.exports = n('navigator', 'userAgent') || '';
  },
  function (t, e, r) {
    var n = r(20);
    t.exports = function (t, e) {
      var r = t[e];
      return null == r ? void 0 : n(r);
    };
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : (e > 0 ? n : r)(e);
    };
  },
  function (t, e, r) {
    var n = r(48);
    t.exports =
      Array.isArray ||
      function (t) {
        return 'Array' == n(t);
      };
  },
  function (t, e, r) {
    var n,
      i = r(11),
      a = r(281),
      s = r(104),
      o = r(73),
      l = r(155),
      h = r(100),
      c = r(101),
      u = c('IE_PROTO'),
      f = function () {},
      p = function (t) {
        return '<script>' + t + '</script>';
      },
      d = function (t) {
        t.write(p('')), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      m = function () {
        try {
          n = new ActiveXObject('htmlfile');
        } catch (t) {}
        var t, e;
        m =
          'undefined' != typeof document
            ? document.domain && n
              ? d(n)
              : (((e = h('iframe')).style.display = 'none'),
                l.appendChild(e),
                (e.src = String('javascript:')),
                (t = e.contentWindow.document).open(),
                t.write(p('document.F=Object')),
                t.close(),
                t.F)
            : d(n);
        for (var r = s.length; r--; ) delete m.prototype[s[r]];
        return m();
      };
    (o[u] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((f.prototype = i(t)), (r = new f()), (f.prototype = null), (r[u] = t))
              : (r = m()),
            void 0 === e ? r : a(r, e)
          );
        });
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = r(210),
      a = r(211),
      s = '[object Null]',
      o = '[object Undefined]',
      l = n ? n.toStringTag : void 0;
    t.exports = function (t) {
      return null == t ? (void 0 === t ? o : s) : l && l in Object(t) ? i(t) : a(t);
    };
  },
  function (t, e, r) {
    var n = r(128),
      i = r(86);
    t.exports = function (t) {
      return null != t && i(t.length) && !n(t);
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2),
      a = r(9),
      s = r(48),
      o = n.Object,
      l = i(''.split);
    t.exports = a(function () {
      return !o('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == s(t) ? l(t, '') : o(t);
        }
      : o;
  },
  function (t, e, r) {
    var n,
      i,
      a,
      s = r(272),
      o = r(0),
      l = r(2),
      h = r(12),
      c = r(71),
      u = r(16),
      f = r(70),
      p = r(101),
      d = r(73),
      m = o.TypeError,
      v = o.WeakMap;
    if (s || f.state) {
      var y = f.state || (f.state = new v()),
        g = l(y.get),
        E = l(y.has),
        b = l(y.set);
      (n = function (t, e) {
        if (E(y, t)) throw new m('Object already initialized');
        return (e.facade = t), b(y, t, e), e;
      }),
        (i = function (t) {
          return g(y, t) || {};
        }),
        (a = function (t) {
          return E(y, t);
        });
    } else {
      var _ = p('state');
      (d[_] = !0),
        (n = function (t, e) {
          if (u(t, _)) throw new m('Object already initialized');
          return (e.facade = t), c(t, _, e), e;
        }),
        (i = function (t) {
          return u(t, _) ? t[_] : {};
        }),
        (a = function (t) {
          return u(t, _);
        });
    }
    t.exports = {
      set: n,
      get: i,
      has: a,
      enforce: function (t) {
        return a(t) ? i(t) : n(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!h(e) || (r = i(e)).type !== t) throw m('Incompatible receiver, ' + t + ' required');
          return r;
        };
      },
    };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(9),
      a = r(5),
      s = r(74),
      o = r(15),
      l = r(72),
      h = function () {},
      c = [],
      u = o('Reflect', 'construct'),
      f = /^\s*(?:class|function)\b/,
      p = n(f.exec),
      d = !f.exec(h),
      m = function (t) {
        if (!a(t)) return !1;
        try {
          return u(h, c, t), !0;
        } catch (t) {
          return !1;
        }
      };
    t.exports =
      !u ||
      i(function () {
        var t;
        return (
          m(m.call) ||
          !m(Object) ||
          !m(function () {
            t = !0;
          }) ||
          t
        );
      })
        ? function (t) {
            if (!a(t)) return !1;
            switch (s(t)) {
              case 'AsyncFunction':
              case 'GeneratorFunction':
              case 'AsyncGeneratorFunction':
                return !1;
            }
            return d || !!p(f, l(t));
          }
        : m;
  },
  function (t, e, r) {
    var n = r(156);
    t.exports = function (t, e) {
      return new (n(t))(0 === e ? 0 : e);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(55);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IX2VanillaUtils =
        e.IX2VanillaPlugins =
        e.IX2ElementsReducer =
        e.IX2EasingUtils =
        e.IX2Easings =
        e.IX2BrowserSupport =
          void 0);
    var i = n(r(119));
    e.IX2BrowserSupport = i;
    var a = n(r(177));
    e.IX2Easings = a;
    var s = n(r(179));
    e.IX2EasingUtils = s;
    var o = n(r(395));
    e.IX2ElementsReducer = o;
    var l = n(r(181));
    e.IX2VanillaPlugins = l;
    var h = n(r(397));
    e.IX2VanillaUtils = h;
  },
  function (t, e) {
    function r() {
      return (
        (t.exports = r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }),
        r.apply(this, arguments)
      );
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(18).Symbol;
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(66),
      i = 1 / 0;
    t.exports = function (t) {
      if ('string' == typeof t || n(t)) return t;
      var e = t + '';
      return '0' == e && 1 / t == -i ? '-0' : e;
    };
  },
  function (t, e, r) {
    var n = r(2),
      i = n({}.toString),
      a = n(''.slice);
    t.exports = function (t) {
      return a(i(t), 8, -1);
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, r) {
    var n = r(34),
      i = Math.max,
      a = Math.min;
    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? i(r + e, 0) : a(r, e);
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    'use strict';
    var n = r(68),
      i = r(17),
      a = r(67);
    t.exports = function (t, e, r) {
      var s = n(e);
      s in t ? i.f(t, s, a(0, r)) : (t[s] = r);
    };
  },
  function (t, e, r) {
    var n = r(9),
      i = r(6),
      a = r(31),
      s = i('species');
    t.exports = function (t) {
      return (
        a >= 51 ||
        !n(function () {
          var e = [];
          return (
            ((e.constructor = {})[s] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, r) {
    var n = r(48),
      i = r(0);
    t.exports = 'process' == n(i.process);
  },
  function (t, e) {
    t.exports = function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var r in t)
          if (Object.prototype.hasOwnProperty.call(t, r)) {
            var n =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(t, r)
                : {};
            n.get || n.set ? Object.defineProperty(e, r, n) : (e[r] = t[r]);
          }
      return (e.default = t), e;
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          };
    (e.clone = l),
      (e.addLast = u),
      (e.addFirst = f),
      (e.removeLast = p),
      (e.removeFirst = d),
      (e.insert = m),
      (e.removeAt = v),
      (e.replaceAt = y),
      (e.getIn = g),
      (e.set = E),
      (e.setIn = b),
      (e.update = _),
      (e.updateIn = x),
      (e.merge = S),
      (e.mergeDeep = T),
      (e.mergeIn = I),
      (e.omit = A),
      (e.addDefaults = P);
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = 'INVALID_ARGS';
    function a(t) {
      throw new Error(t);
    }
    function s(t) {
      var e = Object.keys(t);
      return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
    }
    var o = {}.hasOwnProperty;
    function l(t) {
      if (Array.isArray(t)) return t.slice();
      for (var e = s(t), r = {}, n = 0; n < e.length; n++) {
        var i = e[n];
        r[i] = t[i];
      }
      return r;
    }
    function h(t, e, r) {
      var n = r;
      null == n && a(i);
      for (var o = !1, u = arguments.length, f = Array(u > 3 ? u - 3 : 0), p = 3; p < u; p++)
        f[p - 3] = arguments[p];
      for (var d = 0; d < f.length; d++) {
        var m = f[d];
        if (null != m) {
          var v = s(m);
          if (v.length)
            for (var y = 0; y <= v.length; y++) {
              var g = v[y];
              if (!t || void 0 === n[g]) {
                var E = m[g];
                e && c(n[g]) && c(E) && (E = h(t, e, n[g], E)),
                  void 0 !== E && E !== n[g] && (o || ((o = !0), (n = l(n))), (n[g] = E));
              }
            }
        }
      }
      return n;
    }
    function c(t) {
      var e = void 0 === t ? 'undefined' : n(t);
      return null != t && ('object' === e || 'function' === e);
    }
    function u(t, e) {
      return Array.isArray(e) ? t.concat(e) : t.concat([e]);
    }
    function f(t, e) {
      return Array.isArray(e) ? e.concat(t) : [e].concat(t);
    }
    function p(t) {
      return t.length ? t.slice(0, t.length - 1) : t;
    }
    function d(t) {
      return t.length ? t.slice(1) : t;
    }
    function m(t, e, r) {
      return t
        .slice(0, e)
        .concat(Array.isArray(r) ? r : [r])
        .concat(t.slice(e));
    }
    function v(t, e) {
      return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
    }
    function y(t, e, r) {
      if (t[e] === r) return t;
      for (var n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = t[a];
      return (i[e] = r), i;
    }
    function g(t, e) {
      if ((!Array.isArray(e) && a(i), null != t)) {
        for (var r = t, n = 0; n < e.length; n++) {
          var s = e[n];
          if (void 0 === (r = null != r ? r[s] : void 0)) return r;
        }
        return r;
      }
    }
    function E(t, e, r) {
      var n = null == t ? ('number' == typeof e ? [] : {}) : t;
      if (n[e] === r) return n;
      var i = l(n);
      return (i[e] = r), i;
    }
    function b(t, e, r) {
      return e.length
        ? (function t(e, r, n, i) {
            var a = void 0,
              s = r[i];
            a =
              i === r.length - 1
                ? n
                : t(c(e) && c(e[s]) ? e[s] : 'number' == typeof r[i + 1] ? [] : {}, r, n, i + 1);
            return E(e, s, a);
          })(t, e, r, 0)
        : r;
    }
    function _(t, e, r) {
      return E(t, e, r(null == t ? void 0 : t[e]));
    }
    function x(t, e, r) {
      return b(t, e, r(g(t, e)));
    }
    function S(t, e, r, n, i, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++)
        o[l - 6] = arguments[l];
      return o.length
        ? h.call.apply(h, [null, !1, !1, t, e, r, n, i, a].concat(o))
        : h(!1, !1, t, e, r, n, i, a);
    }
    function T(t, e, r, n, i, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++)
        o[l - 6] = arguments[l];
      return o.length
        ? h.call.apply(h, [null, !1, !0, t, e, r, n, i, a].concat(o))
        : h(!1, !0, t, e, r, n, i, a);
    }
    function I(t, e, r, n, i, a, s) {
      var o = g(t, e);
      null == o && (o = {});
      for (var l = arguments.length, c = Array(l > 7 ? l - 7 : 0), u = 7; u < l; u++)
        c[u - 7] = arguments[u];
      return b(
        t,
        e,
        c.length
          ? h.call.apply(h, [null, !1, !1, o, r, n, i, a, s].concat(c))
          : h(!1, !1, o, r, n, i, a, s)
      );
    }
    function A(t, e) {
      for (var r = Array.isArray(e) ? e : [e], n = !1, i = 0; i < r.length; i++)
        if (o.call(t, r[i])) {
          n = !0;
          break;
        }
      if (!n) return t;
      for (var a = {}, l = s(t), h = 0; h < l.length; h++) {
        var c = l[h];
        r.indexOf(c) >= 0 || (a[c] = t[c]);
      }
      return a;
    }
    function P(t, e, r, n, i, a) {
      for (var s = arguments.length, o = Array(s > 6 ? s - 6 : 0), l = 6; l < s; l++)
        o[l - 6] = arguments[l];
      return o.length
        ? h.call.apply(h, [null, !0, !1, t, e, r, n, i, a].concat(o))
        : h(!0, !1, t, e, r, n, i, a);
    }
    var w = {
      clone: l,
      addLast: u,
      addFirst: f,
      removeLast: p,
      removeFirst: d,
      insert: m,
      removeAt: v,
      replaceAt: y,
      getIn: g,
      set: E,
      setIn: b,
      update: _,
      updateIn: x,
      merge: S,
      mergeDeep: T,
      mergeIn: I,
      omit: A,
      addDefaults: P,
    };
    e.default = w;
  },
  function (t, e) {
    function r(t) {
      return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function n(e) {
      return (
        'function' == typeof Symbol && 'symbol' === r(Symbol.iterator)
          ? (t.exports = n =
              function (t) {
                return r(t);
              })
          : (t.exports = n =
              function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : r(t);
              }),
        n(e)
      );
    }
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(199),
      i = r(200),
      a = r(201),
      s = r(202),
      o = r(203);
    function l(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (l.prototype.clear = n),
      (l.prototype.delete = i),
      (l.prototype.get = a),
      (l.prototype.has = s),
      (l.prototype.set = o),
      (t.exports = l);
  },
  function (t, e, r) {
    var n = r(79);
    t.exports = function (t, e) {
      for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
      return -1;
    };
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(29)(Object, 'create');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(223);
    t.exports = function (t, e) {
      var r = t.__data__;
      return n(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
    };
  },
  function (t, e, r) {
    var n = r(136),
      i = r(87),
      a = r(39);
    t.exports = function (t) {
      return a(t) ? n(t) : i(t);
    };
  },
  function (t, e, r) {
    var n = r(241),
      i = r(30),
      a = Object.prototype,
      s = a.hasOwnProperty,
      o = a.propertyIsEnumerable,
      l = n(
        (function () {
          return arguments;
        })()
      )
        ? n
        : function (t) {
            return i(t) && s.call(t, 'callee') && !o.call(t, 'callee');
          };
    t.exports = l;
  },
  function (t, e, r) {
    var n = r(10),
      i = r(92),
      a = r(252),
      s = r(255);
    t.exports = function (t, e) {
      return n(t) ? t : i(t, e) ? [t] : a(s(t));
    };
  },
  function (t, e, r) {
    var n = r(38),
      i = r(30),
      a = '[object Symbol]';
    t.exports = function (t) {
      return 'symbol' == typeof t || (i(t) && n(t) == a);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  },
  function (t, e, r) {
    var n = r(270),
      i = r(145);
    t.exports = function (t) {
      var e = n(t, 'string');
      return i(e) ? e : e + '';
    };
  },
  function (t, e, r) {
    var n = r(0).String;
    t.exports = function (t) {
      try {
        return n(t);
      } catch (t) {
        return 'Object';
      }
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(98),
      a = n['__core-js_shared__'] || i('__core-js_shared__', {});
    t.exports = a;
  },
  function (t, e, r) {
    var n = r(19),
      i = r(17),
      a = r(67);
    t.exports = n
      ? function (t, e, r) {
          return i.f(t, e, a(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(5),
      a = r(70),
      s = n(Function.toString);
    i(a.inspectSource) ||
      (a.inspectSource = function (t) {
        return s(t);
      }),
      (t.exports = a.inspectSource);
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(0),
      i = r(106),
      a = r(5),
      s = r(48),
      o = r(6)('toStringTag'),
      l = n.Object,
      h =
        'Arguments' ==
        s(
          (function () {
            return arguments;
          })()
        );
    t.exports = i
      ? s
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = l(t)), o))
            ? r
            : h
            ? s(e)
            : 'Object' == (n = s(e)) && a(e.callee)
            ? 'Arguments'
            : n;
        };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(14),
      a = r(20),
      s = r(11),
      o = r(69),
      l = r(76),
      h = n.TypeError;
    t.exports = function (t, e) {
      var r = arguments.length < 2 ? l(t) : e;
      if (a(r)) return s(i(r, t));
      throw h(o(t) + ' is not iterable');
    };
  },
  function (t, e, r) {
    var n = r(74),
      i = r(33),
      a = r(51),
      s = r(6)('iterator');
    t.exports = function (t) {
      if (null != t) return i(t, s) || i(t, '@@iterator') || a[n(t)];
    };
  },
  function (t, e, r) {
    var n = r(17).f,
      i = r(16),
      a = r(6)('toStringTag');
    t.exports = function (t, e, r) {
      t && !i((t = r ? t : t.prototype), a) && n(t, a, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n([].slice);
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, r) {
    var n = r(29)(r(18), 'Map');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(215),
      i = r(222),
      a = r(224),
      s = r(225),
      o = r(226);
    function l(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (l.prototype.clear = n),
      (l.prototype.delete = i),
      (l.prototype.get = a),
      (l.prototype.has = s),
      (l.prototype.set = o),
      (t.exports = l);
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
      return t;
    };
  },
  function (t, e, r) {
    (function (t) {
      var n = r(18),
        i = r(242),
        a = e && !e.nodeType && e,
        s = a && 'object' == typeof t && t && !t.nodeType && t,
        o = s && s.exports === a ? n.Buffer : void 0,
        l = (o ? o.isBuffer : void 0) || i;
      t.exports = l;
    }).call(this, r(137)(t));
  },
  function (t, e) {
    var r = 9007199254740991,
      n = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
      var i = typeof t;
      return (
        !!(e = null == e ? r : e) &&
        ('number' == i || ('symbol' != i && n.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function (t, e, r) {
    var n = r(243),
      i = r(244),
      a = r(245),
      s = a && a.isTypedArray,
      o = s ? i(s) : n;
    t.exports = o;
  },
  function (t, e) {
    var r = 9007199254740991;
    t.exports = function (t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= r;
    };
  },
  function (t, e, r) {
    var n = r(88),
      i = r(246),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!n(t)) return i(t);
      var e = [];
      for (var r in Object(t)) a.call(t, r) && 'constructor' != r && e.push(r);
      return e;
    };
  },
  function (t, e) {
    var r = Object.prototype;
    t.exports = function (t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || r);
    };
  },
  function (t, e, r) {
    var n = r(247),
      i = r(80),
      a = r(248),
      s = r(249),
      o = r(139),
      l = r(38),
      h = r(130),
      c = h(n),
      u = h(i),
      f = h(a),
      p = h(s),
      d = h(o),
      m = l;
    ((n && '[object DataView]' != m(new n(new ArrayBuffer(1)))) ||
      (i && '[object Map]' != m(new i())) ||
      (a && '[object Promise]' != m(a.resolve())) ||
      (s && '[object Set]' != m(new s())) ||
      (o && '[object WeakMap]' != m(new o()))) &&
      (m = function (t) {
        var e = l(t),
          r = '[object Object]' == e ? t.constructor : void 0,
          n = r ? h(r) : '';
        if (n)
          switch (n) {
            case c:
              return '[object DataView]';
            case u:
              return '[object Map]';
            case f:
              return '[object Promise]';
            case p:
              return '[object Set]';
            case d:
              return '[object WeakMap]';
          }
        return e;
      }),
      (t.exports = m);
  },
  function (t, e, r) {
    var n = r(91);
    t.exports = function (t, e, r) {
      var i = null == t ? void 0 : n(t, e);
      return void 0 === i ? r : i;
    };
  },
  function (t, e, r) {
    var n = r(65),
      i = r(47);
    t.exports = function (t, e) {
      for (var r = 0, a = (e = n(e, t)).length; null != t && r < a; ) t = t[i(e[r++])];
      return r && r == a ? t : void 0;
    };
  },
  function (t, e, r) {
    var n = r(10),
      i = r(66),
      a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      s = /^\w*$/;
    t.exports = function (t, e) {
      if (n(t)) return !1;
      var r = typeof t;
      return (
        !('number' != r && 'symbol' != r && 'boolean' != r && null != t && !i(t)) ||
        s.test(t) ||
        !a.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e, r) {
    var n = r(263),
      i = r(23),
      a = r(66),
      s = NaN,
      o = /^[-+]0x[0-9a-f]+$/i,
      l = /^0b[01]+$/i,
      h = /^0o[0-7]+$/i,
      c = parseInt;
    t.exports = function (t) {
      if ('number' == typeof t) return t;
      if (a(t)) return s;
      if (i(t)) {
        var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = i(e) ? e + '' : e;
      }
      if ('string' != typeof t) return 0 === t ? t : +t;
      t = n(t);
      var r = l.test(t);
      return r || h.test(t) ? c(t.slice(2), r ? 2 : 8) : o.test(t) ? s : +t;
    };
  },
  function (t, e, r) {
    var n = r(19),
      i = r(14),
      a = r(269),
      s = r(67),
      o = r(24),
      l = r(68),
      h = r(16),
      c = r(149),
      u = Object.getOwnPropertyDescriptor;
    e.f = n
      ? u
      : function (t, e) {
          if (((t = o(t)), (e = l(e)), c))
            try {
              return u(t, e);
            } catch (t) {}
          if (h(t, e)) return s(!i(a.f, t, e), t[e]);
        };
  },
  function (t, e, r) {
    var n = r(0).TypeError;
    t.exports = function (t) {
      if (null == t) throw n("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n({}.isPrototypeOf);
  },
  function (t, e, r) {
    var n = r(0),
      i = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        i(n, t, { value: e, configurable: !0, writable: !0 });
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var n = r(2),
      i = 0,
      a = Math.random(),
      s = n((1).toString);
    t.exports = function (t) {
      return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + s(++i + a, 36);
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(12),
      a = n.document,
      s = i(a) && i(a.createElement);
    t.exports = function (t) {
      return s ? a.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var n = r(148),
      i = r(99),
      a = n('keys');
    t.exports = function (t) {
      return a[t] || (a[t] = i(t));
    };
  },
  function (t, e, r) {
    var n = r(151),
      i = r(104).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(24),
      i = r(50),
      a = r(4),
      s = function (t) {
        return function (e, r, s) {
          var o,
            l = n(e),
            h = a(l),
            c = i(s, h);
          if (t && r != r) {
            for (; h > c; ) if ((o = l[c++]) != o) return !0;
          } else for (; h > c; c++) if ((t || c in l) && l[c] === r) return t || c || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ];
  },
  function (t, e, r) {
    var n = r(9),
      i = r(5),
      a = /#|\.prototype\./,
      s = function (t, e) {
        var r = l[o(t)];
        return r == c || (r != h && (i(e) ? n(e) : !!e));
      },
      o = (s.normalize = function (t) {
        return String(t).replace(a, '.').toLowerCase();
      }),
      l = (s.data = {}),
      h = (s.NATIVE = 'N'),
      c = (s.POLYFILL = 'P');
    t.exports = s;
  },
  function (t, e, r) {
    var n = {};
    (n[r(6)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(n));
  },
  function (t, e, r) {
    var n = r(6)('iterator'),
      i = !1;
    try {
      var a = 0,
        s = {
          next: function () {
            return { done: !!a++ };
          },
          return: function () {
            i = !0;
          },
        };
      (s[n] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var a = {};
        (a[n] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(a);
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(14),
      a = r(49),
      s = r(150),
      o = r(5),
      l = r(298),
      h = r(109),
      c = r(110),
      u = r(77),
      f = r(71),
      p = r(27),
      d = r(6),
      m = r(51),
      v = r(159),
      y = s.PROPER,
      g = s.CONFIGURABLE,
      E = v.IteratorPrototype,
      b = v.BUGGY_SAFARI_ITERATORS,
      _ = d('iterator'),
      x = function () {
        return this;
      };
    t.exports = function (t, e, r, s, d, v, S) {
      l(r, e, s);
      var T,
        I,
        A,
        P = function (t) {
          if (t === d && O) return O;
          if (!b && t in D) return D[t];
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        w = e + ' Iterator',
        C = !1,
        D = t.prototype,
        M = D[_] || D['@@iterator'] || (d && D[d]),
        O = (!b && M) || P(d),
        F = ('Array' == e && D.entries) || M;
      if (
        (F &&
          (T = h(F.call(new t()))) !== Object.prototype &&
          T.next &&
          (a || h(T) === E || (c ? c(T, E) : o(T[_]) || p(T, _, x)),
          u(T, w, !0, !0),
          a && (m[w] = x)),
        y &&
          'values' == d &&
          M &&
          'values' !== M.name &&
          (!a && g
            ? f(D, 'name', 'values')
            : ((C = !0),
              (O = function () {
                return i(M, this);
              }))),
        d)
      )
        if (((I = { values: P('values'), keys: v ? O : P('keys'), entries: P('entries') }), S))
          for (A in I) (!b && !C && A in D) || p(D, A, I[A]);
        else n({ target: e, proto: !0, forced: b || C }, I);
      return (a && !S) || D[_] === O || p(D, _, O, { name: d }), (m[e] = O), I;
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(16),
      a = r(5),
      s = r(7),
      o = r(101),
      l = r(299),
      h = o('IE_PROTO'),
      c = n.Object,
      u = c.prototype;
    t.exports = l
      ? c.getPrototypeOf
      : function (t) {
          var e = s(t);
          if (i(e, h)) return e[h];
          var r = e.constructor;
          return a(r) && e instanceof r ? r.prototype : e instanceof c ? u : null;
        };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(11),
      a = r(300);
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = n(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set))(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return i(r), a(n), e ? t(r, n) : (r.__proto__ = n), r;
            };
          })()
        : void 0);
  },
  function (t, e) {
    var r = Function.prototype,
      n = r.apply,
      i = r.bind,
      a = r.call;
    t.exports =
      ('object' == typeof Reflect && Reflect.apply) ||
      (i
        ? a.bind(n)
        : function () {
            return a.apply(n, arguments);
          });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(74),
      a = n.String;
    t.exports = function (t) {
      if ('Symbol' === i(t)) throw TypeError('Cannot convert a Symbol value to a string');
      return a(t);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(15),
      i = r(17),
      a = r(6),
      s = r(19),
      o = a('species');
    t.exports = function (t) {
      var e = n(t),
        r = i.f;
      s &&
        e &&
        !e[o] &&
        r(e, o, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(21),
      a = r(14),
      s = r(11),
      o = r(69),
      l = r(153),
      h = r(4),
      c = r(97),
      u = r(75),
      f = r(76),
      p = r(152),
      d = n.TypeError,
      m = function (t, e) {
        (this.stopped = t), (this.result = e);
      },
      v = m.prototype;
    t.exports = function (t, e, r) {
      var n,
        y,
        g,
        E,
        b,
        _,
        x,
        S = r && r.that,
        T = !(!r || !r.AS_ENTRIES),
        I = !(!r || !r.IS_ITERATOR),
        A = !(!r || !r.INTERRUPTED),
        P = i(e, S),
        w = function (t) {
          return n && p(n, 'normal', t), new m(!0, t);
        },
        C = function (t) {
          return T ? (s(t), A ? P(t[0], t[1], w) : P(t[0], t[1])) : A ? P(t, w) : P(t);
        };
      if (I) n = t;
      else {
        if (!(y = f(t))) throw d(o(t) + ' is not iterable');
        if (l(y)) {
          for (g = 0, E = h(t); E > g; g++) if ((b = C(t[g])) && c(v, b)) return b;
          return new m(!1);
        }
        n = u(t, y);
      }
      for (_ = n.next; !(x = a(_, n)).done; ) {
        try {
          b = C(x.value);
        } catch (t) {
          p(n, 'throw', t);
        }
        if ('object' == typeof b && b && c(v, b)) return b;
      }
      return new m(!1);
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(97),
      a = n.TypeError;
    t.exports = function (t, e) {
      if (i(e, t)) return t;
      throw a('Incorrect invocation');
    };
  },
  function (t, e, r) {
    var n = r(27);
    t.exports = function (t, e, r) {
      for (var i in e) n(t, i, e[i], r);
      return t;
    };
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      r.d(e, 'ActionTypes', function () {
        return a;
      }),
      r.d(e, 'default', function () {
        return s;
      });
    var n = r(168),
      i = r(380),
      a = { INIT: '@@redux/INIT' };
    function s(t, e, r) {
      var o;
      if (('function' == typeof e && void 0 === r && ((r = e), (e = void 0)), void 0 !== r)) {
        if ('function' != typeof r) throw new Error('Expected the enhancer to be a function.');
        return r(s)(t, e);
      }
      if ('function' != typeof t) throw new Error('Expected the reducer to be a function.');
      var l = t,
        h = e,
        c = [],
        u = c,
        f = !1;
      function p() {
        u === c && (u = c.slice());
      }
      function d() {
        return h;
      }
      function m(t) {
        if ('function' != typeof t) throw new Error('Expected listener to be a function.');
        var e = !0;
        return (
          p(),
          u.push(t),
          function () {
            if (e) {
              (e = !1), p();
              var r = u.indexOf(t);
              u.splice(r, 1);
            }
          }
        );
      }
      function v(t) {
        if (!Object(n.default)(t))
          throw new Error(
            'Actions must be plain objects. Use custom middleware for async actions.'
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (f) throw new Error('Reducers may not dispatch actions.');
        try {
          (f = !0), (h = l(h, t));
        } finally {
          f = !1;
        }
        for (var e = (c = u), r = 0; r < e.length; r++) e[r]();
        return t;
      }
      return (
        v({ type: a.INIT }),
        ((o = {
          dispatch: v,
          subscribe: m,
          getState: d,
          replaceReducer: function (t) {
            if ('function' != typeof t)
              throw new Error('Expected the nextReducer to be a function.');
            (l = t), v({ type: a.INIT });
          },
        })[i.default] = function () {
          var t,
            e = m;
          return (
            ((t = {
              subscribe: function (t) {
                if ('object' != typeof t)
                  throw new TypeError('Expected the observer to be an object.');
                function r() {
                  t.next && t.next(d());
                }
                return r(), { unsubscribe: e(r) };
              },
            })[i.default] = function () {
              return this;
            }),
            t
          );
        }),
        o
      );
    }
  },
  function (t, e, r) {
    'use strict';
    function n() {
      for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      if (0 === e.length)
        return function (t) {
          return t;
        };
      if (1 === e.length) return e[0];
      var n = e[e.length - 1],
        i = e.slice(0, -1);
      return function () {
        return i.reduceRight(function (t, e) {
          return e(t);
        }, n.apply(void 0, arguments));
      };
    }
    r.r(e),
      r.d(e, 'default', function () {
        return n;
      });
  },
  function (t, e, r) {
    'use strict';
    var n = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TRANSFORM_STYLE_PREFIXED =
        e.TRANSFORM_PREFIXED =
        e.FLEX_PREFIXED =
        e.ELEMENT_MATCHES =
        e.withBrowser =
        e.IS_BROWSER_ENV =
          void 0);
    var i = n(r(175)),
      a = 'undefined' != typeof window;
    e.IS_BROWSER_ENV = a;
    var s = function (t, e) {
      return a ? t() : e;
    };
    e.withBrowser = s;
    var o = s(function () {
      return (0,
      i.default)(['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'], function (t) {
        return t in Element.prototype;
      });
    });
    e.ELEMENT_MATCHES = o;
    var l = s(function () {
      var t = document.createElement('i'),
        e = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
      try {
        for (var r = e.length, n = 0; n < r; n++) {
          var i = e[n];
          if (((t.style.display = i), t.style.display === i)) return i;
        }
        return '';
      } catch (t) {
        return '';
      }
    }, 'flex');
    e.FLEX_PREFIXED = l;
    var h = s(function () {
      var t = document.createElement('i');
      if (null == t.style.transform)
        for (var e = ['Webkit', 'Moz', 'ms'], r = e.length, n = 0; n < r; n++) {
          var i = e[n] + 'Transform';
          if (void 0 !== t.style[i]) return i;
        }
      return 'transform';
    }, 'transform');
    e.TRANSFORM_PREFIXED = h;
    var c = h.split('transform')[0],
      u = c ? c + 'TransformStyle' : 'transformStyle';
    e.TRANSFORM_STYLE_PREFIXED = u;
  },
  function (t, e, r) {
    'use strict';
    var n = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.mediaQueriesDefined =
        e.viewportWidthChanged =
        e.actionListPlaybackChanged =
        e.elementStateChanged =
        e.instanceRemoved =
        e.instanceStarted =
        e.instanceAdded =
        e.parameterChanged =
        e.animationFrameChanged =
        e.eventStateChanged =
        e.testFrameRendered =
        e.eventListenerAdded =
        e.clearRequested =
        e.stopRequested =
        e.playbackRequested =
        e.previewRequested =
        e.sessionStopped =
        e.sessionStarted =
        e.sessionInitialized =
        e.rawDataImported =
          void 0);
    var i = n(r(45)),
      a = r(13),
      s = r(44),
      o = a.IX2EngineActionTypes,
      l = o.IX2_RAW_DATA_IMPORTED,
      h = o.IX2_SESSION_INITIALIZED,
      c = o.IX2_SESSION_STARTED,
      u = o.IX2_SESSION_STOPPED,
      f = o.IX2_PREVIEW_REQUESTED,
      p = o.IX2_PLAYBACK_REQUESTED,
      d = o.IX2_STOP_REQUESTED,
      m = o.IX2_CLEAR_REQUESTED,
      v = o.IX2_EVENT_LISTENER_ADDED,
      y = o.IX2_TEST_FRAME_RENDERED,
      g = o.IX2_EVENT_STATE_CHANGED,
      E = o.IX2_ANIMATION_FRAME_CHANGED,
      b = o.IX2_PARAMETER_CHANGED,
      _ = o.IX2_INSTANCE_ADDED,
      x = o.IX2_INSTANCE_STARTED,
      S = o.IX2_INSTANCE_REMOVED,
      T = o.IX2_ELEMENT_STATE_CHANGED,
      I = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      A = o.IX2_VIEWPORT_WIDTH_CHANGED,
      P = o.IX2_MEDIA_QUERIES_DEFINED,
      w = s.IX2VanillaUtils.reifyState;
    e.rawDataImported = function (t) {
      return { type: l, payload: (0, i.default)({}, w(t)) };
    };
    e.sessionInitialized = function (t) {
      var e = t.hasBoundaryNodes,
        r = t.reducedMotion;
      return { type: h, payload: { hasBoundaryNodes: e, reducedMotion: r } };
    };
    e.sessionStarted = function () {
      return { type: c };
    };
    e.sessionStopped = function () {
      return { type: u };
    };
    e.previewRequested = function (t) {
      var e = t.rawData,
        r = t.defer;
      return { type: f, payload: { defer: r, rawData: e } };
    };
    e.playbackRequested = function (t) {
      var e = t.actionTypeId,
        r = void 0 === e ? a.ActionTypeConsts.GENERAL_START_ACTION : e,
        n = t.actionListId,
        i = t.actionItemId,
        s = t.eventId,
        o = t.allowEvents,
        l = t.immediate,
        h = t.testManual,
        c = t.verbose,
        u = t.rawData;
      return {
        type: p,
        payload: {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          testManual: h,
          eventId: s,
          allowEvents: o,
          immediate: l,
          verbose: c,
          rawData: u,
        },
      };
    };
    e.stopRequested = function (t) {
      return { type: d, payload: { actionListId: t } };
    };
    e.clearRequested = function () {
      return { type: m };
    };
    e.eventListenerAdded = function (t, e) {
      return { type: v, payload: { target: t, listenerParams: e } };
    };
    e.testFrameRendered = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return { type: y, payload: { step: t } };
    };
    e.eventStateChanged = function (t, e) {
      return { type: g, payload: { stateKey: t, newState: e } };
    };
    e.animationFrameChanged = function (t, e) {
      return { type: E, payload: { now: t, parameters: e } };
    };
    e.parameterChanged = function (t, e) {
      return { type: b, payload: { key: t, value: e } };
    };
    e.instanceAdded = function (t) {
      return { type: _, payload: (0, i.default)({}, t) };
    };
    e.instanceStarted = function (t, e) {
      return { type: x, payload: { instanceId: t, time: e } };
    };
    e.instanceRemoved = function (t) {
      return { type: S, payload: { instanceId: t } };
    };
    e.elementStateChanged = function (t, e, r, n) {
      return { type: T, payload: { elementId: t, actionTypeId: e, current: r, actionItem: n } };
    };
    e.actionListPlaybackChanged = function (t) {
      var e = t.actionListId,
        r = t.isPlaying;
      return { type: I, payload: { actionListId: e, isPlaying: r } };
    };
    e.viewportWidthChanged = function (t) {
      var e = t.width,
        r = t.mediaQueries;
      return { type: A, payload: { width: e, mediaQueries: r } };
    };
    e.mediaQueriesDefined = function () {
      return { type: P };
    };
  },
  function (t, e, r) {
    var n = r(188),
      i = r(122);
    function a(t, e) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__chain__ = !!e),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (a.prototype = n(i.prototype)), (a.prototype.constructor = a), (t.exports = a);
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e, r) {
    var n = r(188),
      i = r(122),
      a = 4294967295;
    function s(t) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = a),
        (this.__views__ = []);
    }
    (s.prototype = n(i.prototype)), (s.prototype.constructor = s), (t.exports = s);
  },
  function (t, e, r) {
    'use strict';
    var n = r(3)(r(57));
    window.tram = (function (t) {
      function e(t, e) {
        return new N.Bare().init(t, e);
      }
      function r(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return '-' + t.toLowerCase();
        });
      }
      function i(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function a(t, e, r) {
        return '#' + ((1 << 24) | (t << 16) | (e << 8) | r).toString(16).slice(1);
      }
      function s() {}
      function o(t, e, r) {
        h('Units do not match [' + t + ']: ' + e + ', ' + r);
      }
      function l(t, e, r) {
        if ((void 0 !== e && (r = e), void 0 === t)) return r;
        var n = r;
        return (
          $.test(t) || !Z.test(t) ? (n = parseInt(t, 10)) : Z.test(t) && (n = 1e3 * parseFloat(t)),
          0 > n && (n = 0),
          n == n ? n : r
        );
      }
      function h(t) {
        W.debug && window && window.console.warn(t);
      }
      var c = (function (t, e, r) {
          function i(t) {
            return 'object' == (0, n.default)(t);
          }
          function a(t) {
            return 'function' == typeof t;
          }
          function s() {}
          return function n(o, l) {
            function h() {
              var t = new c();
              return a(t.init) && t.init.apply(t, arguments), t;
            }
            function c() {}
            l === r && ((l = o), (o = Object)), (h.Bare = c);
            var u,
              f = (s[t] = o[t]),
              p = (c[t] = h[t] = new s());
            return (
              (p.constructor = h),
              (h.mixin = function (e) {
                return (c[t] = h[t] = n(h, e)[t]), h;
              }),
              (h.open = function (t) {
                if (((u = {}), a(t) ? (u = t.call(h, p, f, h, o)) : i(t) && (u = t), i(u)))
                  for (var r in u) e.call(u, r) && (p[r] = u[r]);
                return a(p.init) || (p.init = o), h;
              }),
              h.open(l)
            );
          };
        })('prototype', {}.hasOwnProperty),
        u = {
          ease: [
            'ease',
            function (t, e, r, n) {
              var i = (t /= n) * t,
                a = i * t;
              return e + r * (-2.75 * a * i + 11 * i * i + -15.5 * a + 8 * i + 0.25 * t);
            },
          ],
          'ease-in': [
            'ease-in',
            function (t, e, r, n) {
              var i = (t /= n) * t,
                a = i * t;
              return e + r * (-1 * a * i + 3 * i * i + -3 * a + 2 * i);
            },
          ],
          'ease-out': [
            'ease-out',
            function (t, e, r, n) {
              var i = (t /= n) * t,
                a = i * t;
              return e + r * (0.3 * a * i + -1.6 * i * i + 2.2 * a + -1.8 * i + 1.9 * t);
            },
          ],
          'ease-in-out': [
            'ease-in-out',
            function (t, e, r, n) {
              var i = (t /= n) * t,
                a = i * t;
              return e + r * (2 * a * i + -5 * i * i + 2 * a + 2 * i);
            },
          ],
          linear: [
            'linear',
            function (t, e, r, n) {
              return (r * t) / n + e;
            },
          ],
          'ease-in-quad': [
            'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
            function (t, e, r, n) {
              return r * (t /= n) * t + e;
            },
          ],
          'ease-out-quad': [
            'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            function (t, e, r, n) {
              return -r * (t /= n) * (t - 2) + e;
            },
          ],
          'ease-in-out-quad': [
            'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            function (t, e, r, n) {
              return (t /= n / 2) < 1 ? (r / 2) * t * t + e : (-r / 2) * (--t * (t - 2) - 1) + e;
            },
          ],
          'ease-in-cubic': [
            'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            function (t, e, r, n) {
              return r * (t /= n) * t * t + e;
            },
          ],
          'ease-out-cubic': [
            'cubic-bezier(0.215, 0.610, 0.355, 1)',
            function (t, e, r, n) {
              return r * ((t = t / n - 1) * t * t + 1) + e;
            },
          ],
          'ease-in-out-cubic': [
            'cubic-bezier(0.645, 0.045, 0.355, 1)',
            function (t, e, r, n) {
              return (t /= n / 2) < 1
                ? (r / 2) * t * t * t + e
                : (r / 2) * ((t -= 2) * t * t + 2) + e;
            },
          ],
          'ease-in-quart': [
            'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
            function (t, e, r, n) {
              return r * (t /= n) * t * t * t + e;
            },
          ],
          'ease-out-quart': [
            'cubic-bezier(0.165, 0.840, 0.440, 1)',
            function (t, e, r, n) {
              return -r * ((t = t / n - 1) * t * t * t - 1) + e;
            },
          ],
          'ease-in-out-quart': [
            'cubic-bezier(0.770, 0, 0.175, 1)',
            function (t, e, r, n) {
              return (t /= n / 2) < 1
                ? (r / 2) * t * t * t * t + e
                : (-r / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
          ],
          'ease-in-quint': [
            'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
            function (t, e, r, n) {
              return r * (t /= n) * t * t * t * t + e;
            },
          ],
          'ease-out-quint': [
            'cubic-bezier(0.230, 1, 0.320, 1)',
            function (t, e, r, n) {
              return r * ((t = t / n - 1) * t * t * t * t + 1) + e;
            },
          ],
          'ease-in-out-quint': [
            'cubic-bezier(0.860, 0, 0.070, 1)',
            function (t, e, r, n) {
              return (t /= n / 2) < 1
                ? (r / 2) * t * t * t * t * t + e
                : (r / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
          ],
          'ease-in-sine': [
            'cubic-bezier(0.470, 0, 0.745, 0.715)',
            function (t, e, r, n) {
              return -r * Math.cos((t / n) * (Math.PI / 2)) + r + e;
            },
          ],
          'ease-out-sine': [
            'cubic-bezier(0.390, 0.575, 0.565, 1)',
            function (t, e, r, n) {
              return r * Math.sin((t / n) * (Math.PI / 2)) + e;
            },
          ],
          'ease-in-out-sine': [
            'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
            function (t, e, r, n) {
              return (-r / 2) * (Math.cos((Math.PI * t) / n) - 1) + e;
            },
          ],
          'ease-in-expo': [
            'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            function (t, e, r, n) {
              return 0 === t ? e : r * Math.pow(2, 10 * (t / n - 1)) + e;
            },
          ],
          'ease-out-expo': [
            'cubic-bezier(0.190, 1, 0.220, 1)',
            function (t, e, r, n) {
              return t === n ? e + r : r * (1 - Math.pow(2, (-10 * t) / n)) + e;
            },
          ],
          'ease-in-out-expo': [
            'cubic-bezier(1, 0, 0, 1)',
            function (t, e, r, n) {
              return 0 === t
                ? e
                : t === n
                ? e + r
                : (t /= n / 2) < 1
                ? (r / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (r / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
          ],
          'ease-in-circ': [
            'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
            function (t, e, r, n) {
              return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
            },
          ],
          'ease-out-circ': [
            'cubic-bezier(0.075, 0.820, 0.165, 1)',
            function (t, e, r, n) {
              return r * Math.sqrt(1 - (t = t / n - 1) * t) + e;
            },
          ],
          'ease-in-out-circ': [
            'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            function (t, e, r, n) {
              return (t /= n / 2) < 1
                ? (-r / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (r / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
          ],
          'ease-in-back': [
            'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            function (t, e, r, n, i) {
              return void 0 === i && (i = 1.70158), r * (t /= n) * t * ((i + 1) * t - i) + e;
            },
          ],
          'ease-out-back': [
            'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            function (t, e, r, n, i) {
              return (
                void 0 === i && (i = 1.70158), r * ((t = t / n - 1) * t * ((i + 1) * t + i) + 1) + e
              );
            },
          ],
          'ease-in-out-back': [
            'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            function (t, e, r, n, i) {
              return (
                void 0 === i && (i = 1.70158),
                (t /= n / 2) < 1
                  ? (r / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                  : (r / 2) * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
              );
            },
          ],
        },
        f = {
          'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
          'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
          'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)',
        },
        p = document,
        d = window,
        m = 'bkwld-tram',
        v = /[\-\.0-9]/g,
        y = /[A-Z]/,
        g = 'number',
        E = /^(rgb|#)/,
        b = /(em|cm|mm|in|pt|pc|px)$/,
        _ = /(em|cm|mm|in|pt|pc|px|%)$/,
        x = /(deg|rad|turn)$/,
        S = 'unitless',
        T = /(all|none) 0s ease 0s/,
        I = /^(width|height)$/,
        A = ' ',
        P = p.createElement('a'),
        w = ['Webkit', 'Moz', 'O', 'ms'],
        C = ['-webkit-', '-moz-', '-o-', '-ms-'],
        D = function (t) {
          if (t in P.style) return { dom: t, css: t };
          var e,
            r,
            n = '',
            i = t.split('-');
          for (e = 0; e < i.length; e++) n += i[e].charAt(0).toUpperCase() + i[e].slice(1);
          for (e = 0; e < w.length; e++)
            if ((r = w[e] + n) in P.style) return { dom: r, css: C[e] + t };
        },
        M = (e.support = {
          bind: Function.prototype.bind,
          transform: D('transform'),
          transition: D('transition'),
          backface: D('backface-visibility'),
          timing: D('transition-timing-function'),
        });
      if (M.transition) {
        var O = M.timing.dom;
        if (((P.style[O] = u['ease-in-back'][0]), !P.style[O])) for (var F in f) u[F][0] = f[F];
      }
      var k = (e.frame = (function () {
          var t =
            d.requestAnimationFrame ||
            d.webkitRequestAnimationFrame ||
            d.mozRequestAnimationFrame ||
            d.oRequestAnimationFrame ||
            d.msRequestAnimationFrame;
          return t && M.bind
            ? t.bind(d)
            : function (t) {
                d.setTimeout(t, 16);
              };
        })()),
        R = (e.now = (function () {
          var t = d.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && M.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        L = c(function (e) {
          function i(t, e) {
            var r = (function (t) {
                for (var e = -1, r = t ? t.length : 0, n = []; ++e < r; ) {
                  var i = t[e];
                  i && n.push(i);
                }
                return n;
              })(('' + t).split(A)),
              n = r[0];
            e = e || {};
            var i = K[n];
            if (!i) return h('Unsupported property: ' + n);
            if (!e.weak || !this.props[n]) {
              var a = i[0],
                s = this.props[n];
              return s || (s = this.props[n] = new a.Bare()), s.init(this.$el, r, i, e), s;
            }
          }
          function a(t, e, r) {
            if (t) {
              var a = (0, n.default)(t);
              if (
                (e || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)),
                'number' == a && e)
              )
                return (
                  (this.timer = new H({ duration: t, context: this, complete: s })),
                  void (this.active = !0)
                );
              if ('string' == a && e) {
                switch (t) {
                  case 'hide':
                    c.call(this);
                    break;
                  case 'stop':
                    o.call(this);
                    break;
                  case 'redraw':
                    u.call(this);
                    break;
                  default:
                    i.call(this, t, r && r[1]);
                }
                return s.call(this);
              }
              if ('function' == a) return void t.call(this, this);
              if ('object' == a) {
                var h = 0;
                p.call(
                  this,
                  t,
                  function (t, e) {
                    t.span > h && (h = t.span), t.stop(), t.animate(e);
                  },
                  function (t) {
                    'wait' in t && (h = l(t.wait, 0));
                  }
                ),
                  f.call(this),
                  h > 0 &&
                    ((this.timer = new H({ duration: h, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = s));
                var d = this,
                  m = !1,
                  v = {};
                k(function () {
                  p.call(d, t, function (t) {
                    t.active && ((m = !0), (v[t.name] = t.nextStyle));
                  }),
                    m && d.$el.css(v);
                });
              }
            }
          }
          function s() {
            if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
              var t = this.queue.shift();
              a.call(this, t.options, !0, t.args);
            }
          }
          function o(t) {
            var e;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              'string' == typeof t
                ? ((e = {})[t] = 1)
                : (e = 'object' == (0, n.default)(t) && null != t ? t : this.props),
              p.call(this, e, d),
              f.call(this);
          }
          function c() {
            o.call(this), (this.el.style.display = 'none');
          }
          function u() {
            this.el.offsetHeight;
          }
          function f() {
            var t,
              e,
              r = [];
            for (t in (this.upstream && r.push(this.upstream), this.props))
              (e = this.props[t]).active && r.push(e.string);
            (r = r.join(',')),
              this.style !== r && ((this.style = r), (this.el.style[M.transition.dom] = r));
          }
          function p(t, e, n) {
            var a,
              s,
              o,
              l,
              h = e !== d,
              c = {};
            for (a in t)
              (o = t[a]),
                a in Q
                  ? (c.transform || (c.transform = {}), (c.transform[a] = o))
                  : (y.test(a) && (a = r(a)), a in K ? (c[a] = o) : (l || (l = {}), (l[a] = o)));
            for (a in c) {
              if (((o = c[a]), !(s = this.props[a]))) {
                if (!h) continue;
                s = i.call(this, a);
              }
              e.call(this, s, o);
            }
            n && l && n.call(this, l);
          }
          function d(t) {
            t.stop();
          }
          function v(t, e) {
            t.set(e);
          }
          function g(t) {
            this.$el.css(t);
          }
          function E(t, r) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var r,
                      n = this.children.length;
                    for (r = 0; n > r; r++) t.apply(this.children[r], e);
                    return this;
                  }.call(this, r, arguments)
                : (this.el && r.apply(this, arguments), this);
            };
          }
          (e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ''),
              (this.active = !1),
              W.keepInherited && !W.fallback)
            ) {
              var r = q(this.el, 'transition');
              r && !T.test(r) && (this.upstream = r);
            }
            M.backface && W.hideBackface && U(this.el, M.backface.css, 'hidden');
          }),
            E('add', i),
            E('start', a),
            E('wait', function (t) {
              (t = l(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new H({ duration: t, context: this, complete: s })),
                    (this.active = !0));
            }),
            E('then', function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }), void (this.timer.complete = s))
                : h('No active transition timer. Use start() or wait() before then().');
            }),
            E('next', s),
            E('stop', o),
            E('set', function (t) {
              o.call(this, t), p.call(this, t, v, g);
            }),
            E('show', function (t) {
              'string' != typeof t && (t = 'block'), (this.el.style.display = t);
            }),
            E('hide', c),
            E('redraw', u),
            E('destroy', function () {
              o.call(this), t.removeData(this.el, m), (this.$el = this.el = null);
            });
        }),
        N = c(L, function (e) {
          function r(e, r) {
            var n = t.data(e, m) || t.data(e, m, new L.Bare());
            return n.el || n.init(e), r ? n.start(r) : n;
          }
          e.init = function (e, n) {
            var i = t(e);
            if (!i.length) return this;
            if (1 === i.length) return r(i[0], n);
            var a = [];
            return (
              i.each(function (t, e) {
                a.push(r(e, n));
              }),
              (this.children = a),
              this
            );
          };
        }),
        V = c(function (t) {
          function e() {
            var t = this.get();
            this.update('auto');
            var e = this.get();
            return this.update(t), e;
          }
          function r(t) {
            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
            return (e ? a(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3');
          }
          var i = 500,
            s = 'ease',
            o = 0;
          (t.init = function (t, e, r, n) {
            (this.$el = t), (this.el = t[0]);
            var a = e[0];
            r[2] && (a = r[2]),
              Y[a] && (a = Y[a]),
              (this.name = a),
              (this.type = r[1]),
              (this.duration = l(e[1], this.duration, i)),
              (this.ease = (function (t, e, r) {
                return void 0 !== e && (r = e), t in u ? t : r;
              })(e[2], this.ease, s)),
              (this.delay = l(e[3], this.delay, o)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = I.test(this.name)),
              (this.unit = n.unit || this.unit || W.defaultUnit),
              (this.angle = n.angle || this.angle || W.defaultAngle),
              W.fallback || n.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    A +
                    this.duration +
                    'ms' +
                    ('ease' != this.ease ? A + u[this.ease][0] : '') +
                    (this.delay ? A + this.delay + 'ms' : '')));
          }),
            (t.set = function (t) {
              (t = this.convert(t, this.type)), this.update(t), this.redraw();
            }),
            (t.transition = function (t) {
              (this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == this.el.style[this.name] && (this.update(this.get()), this.redraw()),
                  'auto' == t && (t = e.call(this))),
                (this.nextStyle = t);
            }),
            (t.fallback = function (t) {
              var r = this.el.style[this.name] || this.convert(this.get(), this.type);
              (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == r && (r = this.convert(this.get(), this.type)),
                  'auto' == t && (t = e.call(this))),
                (this.tween = new z({
                  from: r,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (t.get = function () {
              return q(this.el, this.name);
            }),
            (t.update = function (t) {
              U(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1), (this.nextStyle = null), U(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ('auto' == t && this.auto) return t;
              var i,
                a = 'number' == typeof t,
                s = 'string' == typeof t;
              switch (e) {
                case g:
                  if (a) return t;
                  if (s && '' === t.replace(v, '')) return +t;
                  i = 'number(unitless)';
                  break;
                case E:
                  if (s) {
                    if ('' === t && this.original) return this.original;
                    if (e.test(t)) return '#' == t.charAt(0) && 7 == t.length ? t : r(t);
                  }
                  i = 'hex or rgb string';
                  break;
                case b:
                  if (a) return t + this.unit;
                  if (s && e.test(t)) return t;
                  i = 'number(px) or string(unit)';
                  break;
                case _:
                  if (a) return t + this.unit;
                  if (s && e.test(t)) return t;
                  i = 'number(px) or string(unit or %)';
                  break;
                case x:
                  if (a) return t + this.angle;
                  if (s && e.test(t)) return t;
                  i = 'number(deg) or string(angle)';
                  break;
                case S:
                  if (a) return t;
                  if (s && _.test(t)) return t;
                  i = 'number(unitless) or string(unit or %)';
              }
              return (
                (function (t, e) {
                  h('Type warning: Expected: [' + t + '] Got: [' + (0, n.default)(e) + '] ' + e);
                })(i, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        B = c(V, function (t, e) {
          t.init = function () {
            e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), E));
          };
        }),
        G = c(V, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            });
        }),
        j = c(V, function (t, e) {
          function r(t, e) {
            var r, n, i, a, s;
            for (r in t)
              (i = (a = Q[r])[0]),
                (n = a[1] || r),
                (s = this.convert(t[r], i)),
                e.call(this, n, s, i);
          }
          (t.init = function () {
            e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                Q.perspective &&
                  W.perspective &&
                  ((this.current.perspective = W.perspective),
                  U(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (t.set = function (t) {
              r.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                U(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new X({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var r,
                n = {};
              for (r in this.current) n[r] = r in e ? e[r] : this.current[r];
              (this.active = !0), (this.nextStyle = this.style(n));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new X({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (t.update = function () {
              U(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                r = '';
              for (e in t) r += e + '(' + t[e] + ') ';
              return r;
            }),
            (t.values = function (t) {
              var e,
                n = {};
              return (
                r.call(this, t, function (t, r, i) {
                  (n[t] = r),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf('scale') && (e = 1),
                      (this.current[t] = this.convert(e, i)));
                }),
                n
              );
            });
        }),
        z = c(function (e) {
          function r() {
            var t,
              e,
              n,
              i = l.length;
            if (i) for (k(r), e = R(), t = i; t--; ) (n = l[t]) && n.render(e);
          }
          var n = { ease: u.ease[1], from: 0, to: 1 };
          (e.init = function (t) {
            (this.duration = t.duration || 0), (this.delay = t.delay || 0);
            var e = t.ease || n.ease;
            u[e] && (e = u[e][1]),
              'function' != typeof e && (e = n.ease),
              (this.ease = e),
              (this.update = t.update || s),
              (this.complete = t.complete || s),
              (this.context = t.context || this),
              (this.name = t.name);
            var r = t.from,
              i = t.to;
            void 0 === r && (r = n.from),
              void 0 === i && (i = n.to),
              (this.unit = t.unit || ''),
              'number' == typeof r && 'number' == typeof i
                ? ((this.begin = r), (this.change = i - r))
                : this.format(i, r),
              (this.value = this.begin + this.unit),
              (this.start = R()),
              !1 !== t.autoplay && this.play();
          }),
            (e.play = function () {
              var t;
              this.active ||
                (this.start || (this.start = R()),
                (this.active = !0),
                (t = this),
                1 === l.push(t) && k(r));
            }),
            (e.stop = function () {
              var e, r, n;
              this.active &&
                ((this.active = !1),
                (e = this),
                (n = t.inArray(e, l)) >= 0 &&
                  ((r = l.slice(n + 1)), (l.length = n), r.length && (l = l.concat(r))));
            }),
            (e.render = function (t) {
              var e,
                r = t - this.start;
              if (this.delay) {
                if (r <= this.delay) return;
                r -= this.delay;
              }
              if (r < this.duration) {
                var n = this.ease(r, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, r) {
                        return a(
                          t[0] + r * (e[0] - t[0]),
                          t[1] + r * (e[1] - t[1]),
                          t[2] + r * (e[2] - t[2])
                        );
                      })(this.startRGB, this.endRGB, n)
                    : (function (t) {
                        return Math.round(t * h) / h;
                      })(this.begin + n * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (e.format = function (t, e) {
              if (((e += ''), '#' == (t += '').charAt(0)))
                return (
                  (this.startRGB = i(e)),
                  (this.endRGB = i(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var r = e.replace(v, '');
                r !== t.replace(v, '') && o('tween', e, t), (this.unit = r);
              }
              (e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e);
            }),
            (e.destroy = function () {
              this.stop(), (this.context = null), (this.ease = this.update = this.complete = s);
            });
          var l = [],
            h = 1e3;
        }),
        H = c(z, function (t) {
          (t.init = function (t) {
            (this.duration = t.duration || 0),
              (this.complete = t.complete || s),
              (this.context = t.context),
              this.play();
          }),
            (t.render = function (t) {
              t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
            });
        }),
        X = c(z, function (t, e) {
          (t.init = function (t) {
            var e, r;
            for (e in ((this.context = t.context),
            (this.update = t.update),
            (this.tweens = []),
            (this.current = t.current),
            t.values))
              (r = t.values[e]),
                this.current[e] !== r &&
                  this.tweens.push(
                    new z({
                      name: e,
                      from: this.current[e],
                      to: r,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (t.render = function (t) {
              var e,
                r,
                n = !1;
              for (e = this.tweens.length; e--; )
                (r = this.tweens[e]).context &&
                  (r.render(t), (this.current[r.name] = r.value), (n = !0));
              return n ? void (this.update && this.update.call(this.context)) : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        W = (e.config = {
          debug: !1,
          defaultUnit: 'px',
          defaultAngle: 'deg',
          keepInherited: !1,
          hideBackface: !1,
          perspective: '',
          fallback: !M.transition,
          agentTests: [],
        });
      (e.fallback = function (t) {
        if (!M.transition) return (W.fallback = !0);
        W.agentTests.push('(' + t + ')');
        var e = new RegExp(W.agentTests.join('|'), 'i');
        W.fallback = e.test(navigator.userAgent);
      }),
        e.fallback('6.0.[2-5] Safari'),
        (e.tween = function (t) {
          return new z(t);
        }),
        (e.delay = function (t, e, r) {
          return new H({ complete: e, duration: t, context: r });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        });
      var U = t.style,
        q = t.css,
        Y = { transform: M.transform && M.transform.css },
        K = {
          color: [B, E],
          background: [B, E, 'background-color'],
          'outline-color': [B, E],
          'border-color': [B, E],
          'border-top-color': [B, E],
          'border-right-color': [B, E],
          'border-bottom-color': [B, E],
          'border-left-color': [B, E],
          'border-width': [V, b],
          'border-top-width': [V, b],
          'border-right-width': [V, b],
          'border-bottom-width': [V, b],
          'border-left-width': [V, b],
          'border-spacing': [V, b],
          'letter-spacing': [V, b],
          margin: [V, b],
          'margin-top': [V, b],
          'margin-right': [V, b],
          'margin-bottom': [V, b],
          'margin-left': [V, b],
          padding: [V, b],
          'padding-top': [V, b],
          'padding-right': [V, b],
          'padding-bottom': [V, b],
          'padding-left': [V, b],
          'outline-width': [V, b],
          opacity: [V, g],
          top: [V, _],
          right: [V, _],
          bottom: [V, _],
          left: [V, _],
          'font-size': [V, _],
          'text-indent': [V, _],
          'word-spacing': [V, _],
          width: [V, _],
          'min-width': [V, _],
          'max-width': [V, _],
          height: [V, _],
          'min-height': [V, _],
          'max-height': [V, _],
          'line-height': [V, S],
          'scroll-top': [G, g, 'scrollTop'],
          'scroll-left': [G, g, 'scrollLeft'],
        },
        Q = {};
      M.transform &&
        ((K.transform = [j]),
        (Q = {
          x: [_, 'translateX'],
          y: [_, 'translateY'],
          rotate: [x],
          rotateX: [x],
          rotateY: [x],
          scale: [g],
          scaleX: [g],
          scaleY: [g],
          skew: [x],
          skewX: [x],
          skewY: [x],
        })),
        M.transform &&
          M.backface &&
          ((Q.z = [_, 'translateZ']), (Q.rotateZ = [x]), (Q.scaleZ = [g]), (Q.perspective = [b]));
      var $ = /ms/,
        Z = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, r) {
    var n = r(126),
      i = r(28),
      a = r(144),
      s = Math.max;
    t.exports = function (t, e, r) {
      var o = null == t ? 0 : t.length;
      if (!o) return -1;
      var l = null == r ? 0 : a(r);
      return l < 0 && (l = s(o + l, 0)), n(t, i(e, 3), l);
    };
  },
  function (t, e) {
    t.exports = function (t, e, r, n) {
      for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (e(t[a], a, t)) return a;
      return -1;
    };
  },
  function (t, e, r) {
    var n = r(58),
      i = r(204),
      a = r(205),
      s = r(206),
      o = r(207),
      l = r(208);
    function h(t) {
      var e = (this.__data__ = new n(t));
      this.size = e.size;
    }
    (h.prototype.clear = i),
      (h.prototype.delete = a),
      (h.prototype.get = s),
      (h.prototype.has = o),
      (h.prototype.set = l),
      (t.exports = h);
  },
  function (t, e, r) {
    var n = r(38),
      i = r(23),
      a = '[object AsyncFunction]',
      s = '[object Function]',
      o = '[object GeneratorFunction]',
      l = '[object Proxy]';
    t.exports = function (t) {
      if (!i(t)) return !1;
      var e = n(t);
      return e == s || e == o || e == a || e == l;
    };
  },
  function (t, e, r) {
    (function (e) {
      var r = 'object' == typeof e && e && e.Object === Object && e;
      t.exports = r;
    }).call(this, r(60));
  },
  function (t, e) {
    var r = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return r.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    };
  },
  function (t, e, r) {
    var n = r(227),
      i = r(30);
    t.exports = function t(e, r, a, s, o) {
      return (
        e === r ||
        (null == e || null == r || (!i(e) && !i(r)) ? e != e && r != r : n(e, r, a, s, t, o))
      );
    };
  },
  function (t, e, r) {
    var n = r(228),
      i = r(231),
      a = r(232),
      s = 1,
      o = 2;
    t.exports = function (t, e, r, l, h, c) {
      var u = r & s,
        f = t.length,
        p = e.length;
      if (f != p && !(u && p > f)) return !1;
      var d = c.get(t),
        m = c.get(e);
      if (d && m) return d == e && m == t;
      var v = -1,
        y = !0,
        g = r & o ? new n() : void 0;
      for (c.set(t, e), c.set(e, t); ++v < f; ) {
        var E = t[v],
          b = e[v];
        if (l) var _ = u ? l(b, E, v, e, t, c) : l(E, b, v, t, e, c);
        if (void 0 !== _) {
          if (_) continue;
          y = !1;
          break;
        }
        if (g) {
          if (
            !i(e, function (t, e) {
              if (!a(g, e) && (E === t || h(E, t, r, l, c))) return g.push(e);
            })
          ) {
            y = !1;
            break;
          }
        } else if (E !== b && !h(E, b, r, l, c)) {
          y = !1;
          break;
        }
      }
      return c.delete(t), c.delete(e), y;
    };
  },
  function (t, e, r) {
    var n = r(82),
      i = r(10);
    t.exports = function (t, e, r) {
      var a = e(t);
      return i(t) ? a : n(a, r(t));
    };
  },
  function (t, e, r) {
    var n = r(239),
      i = r(135),
      a = Object.prototype.propertyIsEnumerable,
      s = Object.getOwnPropertySymbols,
      o = s
        ? function (t) {
            return null == t
              ? []
              : ((t = Object(t)),
                n(s(t), function (e) {
                  return a.call(t, e);
                }));
          }
        : i;
    t.exports = o;
  },
  function (t, e) {
    t.exports = function () {
      return [];
    };
  },
  function (t, e, r) {
    var n = r(240),
      i = r(64),
      a = r(10),
      s = r(83),
      o = r(84),
      l = r(85),
      h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      var r = a(t),
        c = !r && i(t),
        u = !r && !c && s(t),
        f = !r && !c && !u && l(t),
        p = r || c || u || f,
        d = p ? n(t.length, String) : [],
        m = d.length;
      for (var v in t)
        (!e && !h.call(t, v)) ||
          (p &&
            ('length' == v ||
              (u && ('offset' == v || 'parent' == v)) ||
              (f && ('buffer' == v || 'byteLength' == v || 'byteOffset' == v)) ||
              o(v, m))) ||
          d.push(v);
      return d;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (r) {
        return t(e(r));
      };
    };
  },
  function (t, e, r) {
    var n = r(29)(r(18), 'WeakMap');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(23);
    t.exports = function (t) {
      return t == t && !n(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (r) {
        return null != r && r[t] === e && (void 0 !== e || t in Object(r));
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; ) i[r] = e(t[r], r, t);
      return i;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  function (t, e, r) {
    var n = r(262);
    t.exports = function (t) {
      var e = n(t),
        r = e % 1;
      return e == e ? (r ? e - r : e) : 0;
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(15),
      a = r(5),
      s = r(97),
      o = r(146),
      l = n.Object;
    t.exports = o
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          var e = i('Symbol');
          return a(e) && s(e.prototype, l(t));
        };
  },
  function (t, e, r) {
    var n = r(147);
    t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function (t, e, r) {
    var n = r(31),
      i = r(9);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && n && n < 41);
      });
  },
  function (t, e, r) {
    var n = r(49),
      i = r(70);
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.19.0',
      mode: n ? 'pure' : 'global',
      copyright: 'Â© 2021 Denis Pushkarev (zloirock.ru)',
    });
  },
  function (t, e, r) {
    var n = r(19),
      i = r(9),
      a = r(100);
    t.exports =
      !n &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(a('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(19),
      i = r(16),
      a = Function.prototype,
      s = n && Object.getOwnPropertyDescriptor,
      o = i(a, 'name'),
      l = o && 'something' === function () {}.name,
      h = o && (!n || (n && s(a, 'name').configurable));
    t.exports = { EXISTS: o, PROPER: l, CONFIGURABLE: h };
  },
  function (t, e, r) {
    var n = r(2),
      i = r(16),
      a = r(24),
      s = r(103).indexOf,
      o = r(73),
      l = n([].push);
    t.exports = function (t, e) {
      var r,
        n = a(t),
        h = 0,
        c = [];
      for (r in n) !i(o, r) && i(n, r) && l(c, r);
      for (; e.length > h; ) i(n, (r = e[h++])) && (~s(c, r) || l(c, r));
      return c;
    };
  },
  function (t, e, r) {
    var n = r(14),
      i = r(11),
      a = r(33);
    t.exports = function (t, e, r) {
      var s, o;
      i(t);
      try {
        if (!(s = a(t, 'return'))) {
          if ('throw' === e) throw r;
          return r;
        }
        s = n(s, t);
      } catch (t) {
        (o = !0), (s = t);
      }
      if ('throw' === e) throw r;
      if (o) throw s;
      return i(s), r;
    };
  },
  function (t, e, r) {
    var n = r(6),
      i = r(51),
      a = n('iterator'),
      s = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || s[a] === t);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(7),
      a = r(4),
      s = r(34),
      o = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        at: function (t) {
          var e = i(this),
            r = a(e),
            n = s(t),
            o = n >= 0 ? n : r + n;
          return o < 0 || o >= r ? void 0 : e[o];
        },
      }
    ),
      o('at');
  },
  function (t, e, r) {
    var n = r(15);
    t.exports = n('document', 'documentElement');
  },
  function (t, e, r) {
    var n = r(0),
      i = r(35),
      a = r(42),
      s = r(12),
      o = r(6)('species'),
      l = n.Array;
    t.exports = function (t) {
      var e;
      return (
        i(t) &&
          ((e = t.constructor),
          a(e) && (e === l || i(e.prototype))
            ? (e = void 0)
            : s(e) && null === (e = e[o]) && (e = void 0)),
        void 0 === e ? l : e
      );
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(35),
      a = r(4),
      s = r(21),
      o = n.TypeError,
      l = function (t, e, r, n, h, c, u, f) {
        for (var p, d, m = h, v = 0, y = !!u && s(u, f); v < n; ) {
          if (v in r) {
            if (((p = y ? y(r[v], v, e) : r[v]), c > 0 && i(p)))
              (d = a(p)), (m = l(t, e, p, d, m, c - 1) - 1);
            else {
              if (m >= 9007199254740991) throw o('Exceed the acceptable array length');
              t[m] = p;
            }
            m++;
          }
          v++;
        }
        return m;
      };
    t.exports = l;
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(103).includes,
      a = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      a('includes');
  },
  function (t, e, r) {
    'use strict';
    var n,
      i,
      a,
      s = r(9),
      o = r(5),
      l = r(36),
      h = r(109),
      c = r(27),
      u = r(6),
      f = r(49),
      p = u('iterator'),
      d = !1;
    [].keys &&
      ('next' in (a = [].keys()) ? (i = h(h(a))) !== Object.prototype && (n = i) : (d = !0)),
      null == n ||
      s(function () {
        var t = {};
        return n[p].call(t) !== t;
      })
        ? (n = {})
        : f && (n = l(n)),
      o(n[p]) ||
        c(n, p, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(20),
      a = r(7),
      s = r(40),
      o = r(4),
      l = n.TypeError,
      h = function (t) {
        return function (e, r, n, h) {
          i(r);
          var c = a(e),
            u = s(c),
            f = o(c),
            p = t ? f - 1 : 0,
            d = t ? -1 : 1;
          if (n < 2)
            for (;;) {
              if (p in u) {
                (h = u[p]), (p += d);
                break;
              }
              if (((p += d), t ? p < 0 : f <= p))
                throw l('Reduce of empty array with no initial value');
            }
          for (; t ? p >= 0 : f > p; p += d) p in u && (h = r(h, u[p], p, c));
          return h;
        };
      };
    t.exports = { left: h(!1), right: h(!0) };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(2),
      a = r(73),
      s = r(12),
      o = r(16),
      l = r(17).f,
      h = r(102),
      c = r(326),
      u = r(99),
      f = r(327),
      p = !1,
      d = u('meta'),
      m = 0,
      v =
        Object.isExtensible ||
        function () {
          return !0;
        },
      y = function (t) {
        l(t, d, { value: { objectID: 'O' + m++, weakData: {} } });
      },
      g = (t.exports = {
        enable: function () {
          (g.enable = function () {}), (p = !0);
          var t = h.f,
            e = i([].splice),
            r = {};
          (r[d] = 1),
            t(r).length &&
              ((h.f = function (r) {
                for (var n = t(r), i = 0, a = n.length; i < a; i++)
                  if (n[i] === d) {
                    e(n, i, 1);
                    break;
                  }
                return n;
              }),
              n({ target: 'Object', stat: !0, forced: !0 }, { getOwnPropertyNames: c.f }));
        },
        fastKey: function (t, e) {
          if (!s(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t;
          if (!o(t, d)) {
            if (!v(t)) return 'F';
            if (!e) return 'E';
            y(t);
          }
          return t[d].objectID;
        },
        getWeakData: function (t, e) {
          if (!o(t, d)) {
            if (!v(t)) return !0;
            if (!e) return !1;
            y(t);
          }
          return t[d].weakData;
        },
        onFreeze: function (t) {
          return f && p && v(t) && !o(t, d) && y(t), t;
        },
      });
    a[d] = !0;
  },
  function (t, e, r) {
    var n,
      i,
      a,
      s,
      o = r(0),
      l = r(111),
      h = r(21),
      c = r(5),
      u = r(16),
      f = r(9),
      p = r(155),
      d = r(78),
      m = r(100),
      v = r(163),
      y = r(54),
      g = o.setImmediate,
      E = o.clearImmediate,
      b = o.process,
      _ = o.Dispatch,
      x = o.Function,
      S = o.MessageChannel,
      T = o.String,
      I = 0,
      A = {};
    try {
      n = o.location;
    } catch (t) {}
    var P = function (t) {
        if (u(A, t)) {
          var e = A[t];
          delete A[t], e();
        }
      },
      w = function (t) {
        return function () {
          P(t);
        };
      },
      C = function (t) {
        P(t.data);
      },
      D = function (t) {
        o.postMessage(T(t), n.protocol + '//' + n.host);
      };
    (g && E) ||
      ((g = function (t) {
        var e = d(arguments, 1);
        return (
          (A[++I] = function () {
            l(c(t) ? t : x(t), void 0, e);
          }),
          i(I),
          I
        );
      }),
      (E = function (t) {
        delete A[t];
      }),
      y
        ? (i = function (t) {
            b.nextTick(w(t));
          })
        : _ && _.now
        ? (i = function (t) {
            _.now(w(t));
          })
        : S && !v
        ? ((s = (a = new S()).port2), (a.port1.onmessage = C), (i = h(s.postMessage, s)))
        : o.addEventListener &&
          c(o.postMessage) &&
          !o.importScripts &&
          n &&
          'file:' !== n.protocol &&
          !f(D)
        ? ((i = D), o.addEventListener('message', C, !1))
        : (i =
            'onreadystatechange' in m('script')
              ? function (t) {
                  p.appendChild(m('script')).onreadystatechange = function () {
                    p.removeChild(this), P(t);
                  };
                }
              : function (t) {
                  setTimeout(w(t), 0);
                })),
      (t.exports = { set: g, clear: E });
  },
  function (t, e, r) {
    var n = r(32);
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
  },
  function (t, e, r) {
    'use strict';
    var n = r(20),
      i = function (t) {
        var e, r;
        (this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r) throw TypeError('Bad Promise constructor');
          (e = t), (r = n);
        })),
          (this.resolve = n(e)),
          (this.reject = n(r));
      };
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(111),
      i = r(11),
      a = r(36),
      s = r(33),
      o = r(116),
      l = r(41),
      h = r(15),
      c = r(344),
      u = h('Promise'),
      f = l.set,
      p = l.get,
      d = function (t, e, r) {
        var n = t.done;
        u.resolve(t.value).then(function (t) {
          e({ done: n, value: t });
        }, r);
      },
      m = function (t) {
        f(this, { iterator: i(t), next: t.next });
      };
    (m.prototype = o(a(c), {
      next: function (t) {
        var e = p(this),
          r = !!arguments.length;
        return new u(function (a, s) {
          var o = i(n(e.next, e.iterator, r ? [t] : []));
          d(o, a, s);
        });
      },
      return: function (t) {
        var e = p(this).iterator,
          r = !!arguments.length;
        return new u(function (a, o) {
          var l = s(e, 'return');
          if (void 0 === l) return a({ done: !0, value: t });
          var h = i(n(l, e, r ? [t] : []));
          d(h, a, o);
        });
      },
      throw: function (t) {
        var e = p(this).iterator,
          r = !!arguments.length;
        return new u(function (a, o) {
          var l = s(e, 'throw');
          if (void 0 === l) return o(t);
          var h = i(n(l, e, r ? [t] : []));
          d(h, a, o);
        });
      },
    })),
      (t.exports = m);
  },
  function (t, e, r) {
    var n = r(21),
      i = r(40),
      a = r(7),
      s = r(4),
      o = function (t) {
        var e = 1 == t;
        return function (r, o, l) {
          for (var h, c = a(r), u = i(c), f = n(o, l), p = s(u); p-- > 0; )
            if (f((h = u[p]), p, c))
              switch (t) {
                case 0:
                  return h;
                case 1:
                  return p;
              }
          return e ? -1 : void 0;
        };
      };
    t.exports = { findLast: o(0), findLastIndex: o(1) };
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(117);
    r.d(e, 'createStore', function () {
      return n.default;
    });
    var i = r(170);
    r.d(e, 'combineReducers', function () {
      return i.default;
    });
    var a = r(172);
    r.d(e, 'bindActionCreators', function () {
      return a.default;
    });
    var s = r(173);
    r.d(e, 'applyMiddleware', function () {
      return s.default;
    });
    var o = r(118);
    r.d(e, 'compose', function () {
      return o.default;
    });
    r(171);
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(372),
      i = r(377),
      a = r(379),
      s = '[object Object]',
      o = Function.prototype,
      l = Object.prototype,
      h = o.toString,
      c = l.hasOwnProperty,
      u = h.call(Object);
    e.default = function (t) {
      if (!Object(a.default)(t) || Object(n.default)(t) != s) return !1;
      var e = Object(i.default)(t);
      if (null === e) return !0;
      var r = c.call(e, 'constructor') && e.constructor;
      return 'function' == typeof r && r instanceof r && h.call(r) == u;
    };
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(373).default.Symbol;
    e.default = n;
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      r.d(e, 'default', function () {
        return a;
      });
    var n = r(117);
    r(168), r(171);
    function i(t, e) {
      var r = e && e.type;
      return (
        'Given action ' +
        ((r && '"' + r.toString() + '"') || 'an action') +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function a(t) {
      for (var e = Object.keys(t), r = {}, a = 0; a < e.length; a++) {
        var s = e[a];
        0, 'function' == typeof t[s] && (r[s] = t[s]);
      }
      var o,
        l = Object.keys(r);
      try {
        !(function (t) {
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            if (void 0 === r(void 0, { type: n.ActionTypes.INIT }))
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              r(void 0, {
                type:
                  '@@redux/PROBE_UNKNOWN_ACTION_' +
                  Math.random().toString(36).substring(7).split('').join('.'),
              })
            )
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined when probed with a random type. Don\'t try to handle ' +
                  n.ActionTypes.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(r);
      } catch (t) {
        o = t;
      }
      return function () {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          e = arguments[1];
        if (o) throw o;
        for (var n = !1, a = {}, s = 0; s < l.length; s++) {
          var h = l[s],
            c = r[h],
            u = t[h],
            f = c(u, e);
          if (void 0 === f) {
            var p = i(h, e);
            throw new Error(p);
          }
          (a[h] = f), (n = n || f !== u);
        }
        return n ? a : t;
      };
    }
  },
  function (t, e, r) {
    'use strict';
    function n(t) {
      'undefined' != typeof console && 'function' == typeof console.error && console.error(t);
      try {
        throw new Error(t);
      } catch (t) {}
    }
    r.r(e),
      r.d(e, 'default', function () {
        return n;
      });
  },
  function (t, e, r) {
    'use strict';
    function n(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }
    function i(t, e) {
      if ('function' == typeof t) return n(t, e);
      if ('object' != typeof t || null === t)
        throw new Error(
          'bindActionCreators expected an object or a function, instead received ' +
            (null === t ? 'null' : typeof t) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(t), i = {}, a = 0; a < r.length; a++) {
        var s = r[a],
          o = t[s];
        'function' == typeof o && (i[s] = n(o, e));
      }
      return i;
    }
    r.r(e),
      r.d(e, 'default', function () {
        return i;
      });
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      r.d(e, 'default', function () {
        return a;
      });
    var n = r(118),
      i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        };
    function a() {
      for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return function (t) {
        return function (r, a, s) {
          var o,
            l = t(r, a, s),
            h = l.dispatch,
            c = {
              getState: l.getState,
              dispatch: function (t) {
                return h(t);
              },
            };
          return (
            (o = e.map(function (t) {
              return t(c);
            })),
            (h = n.default.apply(void 0, o)(l.dispatch)),
            i({}, l, { dispatch: h })
          );
        };
      };
    }
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
    e.ActionTypeConsts = {
      TRANSFORM_MOVE: 'TRANSFORM_MOVE',
      TRANSFORM_SCALE: 'TRANSFORM_SCALE',
      TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
      TRANSFORM_SKEW: 'TRANSFORM_SKEW',
      STYLE_OPACITY: 'STYLE_OPACITY',
      STYLE_SIZE: 'STYLE_SIZE',
      STYLE_FILTER: 'STYLE_FILTER',
      STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
      STYLE_BORDER: 'STYLE_BORDER',
      STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
      PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
      GENERAL_DISPLAY: 'GENERAL_DISPLAY',
      GENERAL_START_ACTION: 'GENERAL_START_ACTION',
      GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
      GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
      GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
      GENERAL_LOOP: 'GENERAL_LOOP',
      STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW',
    };
    e.ActionAppliesTo = {
      ELEMENT: 'ELEMENT',
      ELEMENT_CLASS: 'ELEMENT_CLASS',
      TRIGGER_ELEMENT: 'TRIGGER_ELEMENT',
    };
  },
  function (t, e, r) {
    var n = r(176)(r(125));
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(28),
      i = r(39),
      a = r(63);
    t.exports = function (t) {
      return function (e, r, s) {
        var o = Object(e);
        if (!i(e)) {
          var l = n(r, 3);
          (e = a(e)),
            (r = function (t) {
              return l(o[t], t, o);
            });
        }
        var h = t(e, r, s);
        return h > -1 ? o[l ? e[h] : h] : void 0;
      };
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.inQuad = function (t) {
        return Math.pow(t, 2);
      }),
      (e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1);
      }),
      (e.inOutQuad = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
        return -0.5 * ((t -= 2) * t - 2);
      }),
      (e.inCubic = function (t) {
        return Math.pow(t, 3);
      }),
      (e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1;
      }),
      (e.inOutCubic = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
        return 0.5 * (Math.pow(t - 2, 3) + 2);
      }),
      (e.inQuart = function (t) {
        return Math.pow(t, 4);
      }),
      (e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1);
      }),
      (e.inOutQuart = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
        return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
      }),
      (e.inQuint = function (t) {
        return Math.pow(t, 5);
      }),
      (e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1;
      }),
      (e.inOutQuint = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
        return 0.5 * (Math.pow(t - 2, 5) + 2);
      }),
      (e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      }),
      (e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2));
      }),
      (e.inOutSine = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
      }),
      (e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      }),
      (e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      }),
      (e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
        return 0.5 * (2 - Math.pow(2, -10 * --t));
      }),
      (e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
      }),
      (e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2));
      }),
      (e.inOutCirc = function (t) {
        if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      }),
      (e.outBounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.inBack = function (t) {
        return t * t * ((a + 1) * t - a);
      }),
      (e.outBack = function (t) {
        return (t -= 1) * t * ((a + 1) * t + a) + 1;
      }),
      (e.inOutBack = function (t) {
        var e = a;
        if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
        return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.inElastic = function (t) {
        var e = a,
          r = 0,
          n = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        r || (r = 0.3);
        n < 1 ? ((n = 1), (e = r / 4)) : (e = (r / (2 * Math.PI)) * Math.asin(1 / n));
        return -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / r);
      }),
      (e.outElastic = function (t) {
        var e = a,
          r = 0,
          n = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        r || (r = 0.3);
        n < 1 ? ((n = 1), (e = r / 4)) : (e = (r / (2 * Math.PI)) * Math.asin(1 / n));
        return n * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / r) + 1;
      }),
      (e.inOutElastic = function (t) {
        var e = a,
          r = 0,
          n = 1;
        if (0 === t) return 0;
        if (2 == (t /= 0.5)) return 1;
        r || (r = 0.3 * 1.5);
        n < 1 ? ((n = 1), (e = r / 4)) : (e = (r / (2 * Math.PI)) * Math.asin(1 / n));
        if (t < 1)
          return n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / r) * -0.5;
        return n * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / r) * 0.5 + 1;
      }),
      (e.swingFromTo = function (t) {
        var e = a;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.swingFrom = function (t) {
        return t * t * ((a + 1) * t - a);
      }),
      (e.swingTo = function (t) {
        return (t -= 1) * t * ((a + 1) * t + a) + 1;
      }),
      (e.bounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.bouncePast = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
          : t < 2.5 / 2.75
          ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
          : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
      }),
      (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
    var i = n(r(178)),
      a = 1.70158,
      s = (0, i.default)(0.25, 0.1, 0.25, 1);
    e.ease = s;
    var o = (0, i.default)(0.42, 0, 1, 1);
    e.easeIn = o;
    var l = (0, i.default)(0, 0, 0.58, 1);
    e.easeOut = l;
    var h = (0, i.default)(0.42, 0, 0.58, 1);
    e.easeInOut = h;
  },
  function (t, e) {
    var r = 4,
      n = 0.001,
      i = 1e-7,
      a = 10,
      s = 11,
      o = 1 / (s - 1),
      l = 'function' == typeof Float32Array;
    function h(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function c(t, e) {
      return 3 * e - 6 * t;
    }
    function u(t) {
      return 3 * t;
    }
    function f(t, e, r) {
      return ((h(e, r) * t + c(e, r)) * t + u(e)) * t;
    }
    function p(t, e, r) {
      return 3 * h(e, r) * t * t + 2 * c(e, r) * t + u(e);
    }
    t.exports = function (t, e, h, c) {
      if (!(0 <= t && t <= 1 && 0 <= h && h <= 1))
        throw new Error('bezier x values must be in [0, 1] range');
      var u = l ? new Float32Array(s) : new Array(s);
      if (t !== e || h !== c) for (var d = 0; d < s; ++d) u[d] = f(d * o, t, h);
      function m(e) {
        for (var l = 0, c = 1, d = s - 1; c !== d && u[c] <= e; ++c) l += o;
        var m = l + ((e - u[--c]) / (u[c + 1] - u[c])) * o,
          v = p(m, t, h);
        return v >= n
          ? (function (t, e, n, i) {
              for (var a = 0; a < r; ++a) {
                var s = p(e, n, i);
                if (0 === s) return e;
                e -= (f(e, n, i) - t) / s;
              }
              return e;
            })(e, m, t, h)
          : 0 === v
          ? m
          : (function (t, e, r, n, s) {
              var o,
                l,
                h = 0;
              do {
                (o = f((l = e + (r - e) / 2), n, s) - t) > 0 ? (r = l) : (e = l);
              } while (Math.abs(o) > i && ++h < a);
              return l;
            })(e, l, l + o, t, h);
      }
      return function (r) {
        return t === e && h === c ? r : 0 === r ? 0 : 1 === r ? 1 : f(m(r), e, c);
      };
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(3)(r(180)),
      i = r(3),
      a = r(55);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.optimizeFloat = l),
      (e.createBezierEasing = function (t) {
        return o.default.apply(void 0, (0, n.default)(t));
      }),
      (e.applyEasing = function (t, e, r) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (r) return l(e > 0 ? r(e) : e);
        return l(e > 0 && t && s[t] ? s[t](e) : e);
      });
    var s = a(r(177)),
      o = i(r(178));
    function l(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        n = Math.pow(r, e),
        i = Number(Math.round(t * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
  },
  function (t, e, r) {
    var n = r(392),
      i = r(393),
      a = r(394);
    t.exports = function (t) {
      return n(t) || i(t) || a();
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(3)(r(37));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isPluginType = function (t) {
        return t === a.ActionTypeConsts.PLUGIN_LOTTIE;
      }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginDuration =
        e.getPluginOrigin =
        e.getPluginConfig =
          void 0);
    var i = r(396),
      a = r(13),
      s = r(119),
      o = (0, n.default)({}, a.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: i.getPluginConfig,
        getOrigin: i.getPluginOrigin,
        getDuration: i.getPluginDuration,
        getDestination: i.getPluginDestination,
        createInstance: i.createPluginInstance,
        render: i.renderPlugin,
        clear: i.clearPlugin,
      });
    var l = function (t) {
        return function (e) {
          if (!s.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var r = o[e];
          if (!r) throw new Error('IX2 no plugin configured for: '.concat(e));
          var n = r[t];
          if (!n) throw new Error('IX2 invalid plugin method: '.concat(t));
          return n;
        };
      },
      h = l('getConfig');
    e.getPluginConfig = h;
    var c = l('getOrigin');
    e.getPluginOrigin = c;
    var u = l('getDuration');
    e.getPluginDuration = u;
    var f = l('getDestination');
    e.getPluginDestination = f;
    var p = l('createInstance');
    e.createPluginInstance = p;
    var d = l('render');
    e.renderPlugin = d;
    var m = l('clear');
    e.clearPlugin = m;
  },
  function (t, e, r) {
    var n = r(183),
      i = r(403)(n);
    t.exports = i;
  },
  function (t, e, r) {
    var n = r(401),
      i = r(63);
    t.exports = function (t, e) {
      return t && n(t, e, i);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(407);
    (e.__esModule = !0), (e.default = void 0);
    var i = n(r(408)).default;
    e.default = i;
  },
  function (t, e, r) {
    'use strict';
    var n = r(3)(r(180)),
      i = r(55),
      a = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.observeRequests = function (t) {
        k({
          store: t,
          select: function (t) {
            var e = t.ixRequest;
            return e.preview;
          },
          onChange: et,
        }),
          k({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.playback;
            },
            onChange: nt,
          }),
          k({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.stop;
            },
            onChange: it,
          }),
          k({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.clear;
            },
            onChange: at,
          });
      }),
      (e.startEngine = st),
      (e.stopEngine = ot),
      (e.stopAllActionGroups = mt),
      (e.stopActionGroup = vt),
      (e.startActionGroup = yt);
    var s = a(r(45)),
      o = a(r(411)),
      l = a(r(175)),
      h = a(r(90)),
      c = a(r(412)),
      u = a(r(418)),
      f = a(r(430)),
      p = a(r(431)),
      d = a(r(432)),
      m = a(r(435)),
      v = a(r(184)),
      y = r(13),
      g = r(44),
      E = r(120),
      b = i(r(438)),
      _ = a(r(439)),
      x = Object.keys(y.QuickEffectIds),
      S = function (t) {
        return x.includes(t);
      },
      T = y.IX2EngineConstants,
      I = T.COLON_DELIMITER,
      A = T.BOUNDARY_SELECTOR,
      P = T.HTML_ELEMENT,
      w = T.RENDER_GENERAL,
      C = T.W_MOD_IX,
      D = g.IX2VanillaUtils,
      M = D.getAffectedElements,
      O = D.getElementId,
      F = D.getDestinationValues,
      k = D.observeStore,
      R = D.getInstanceId,
      L = D.renderHTMLElement,
      N = D.clearAllStyles,
      V = D.getMaxDurationItemIndex,
      B = D.getComputedStyle,
      G = D.getInstanceOrigin,
      j = D.reduceListToGroup,
      z = D.shouldNamespaceEventParameter,
      H = D.getNamespacedParameterId,
      X = D.shouldAllowMediaQuery,
      W = D.cleanupHTMLElement,
      U = D.stringifyTarget,
      q = D.mediaQueriesEqual,
      Y = g.IX2VanillaPlugins,
      K = Y.isPluginType,
      Q = Y.createPluginInstance,
      $ = Y.getPluginDuration,
      Z = navigator.userAgent,
      J = Z.match(/iPad/i) || Z.match(/iPhone/),
      tt = 12;
    function et(t, e) {
      var r = t.rawData,
        n = function () {
          st({ store: e, rawData: r, allowEvents: !0 }), rt();
        };
      t.defer ? setTimeout(n, 0) : n();
    }
    function rt() {
      document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
    }
    function nt(t, e) {
      var r = t.actionTypeId,
        n = t.actionListId,
        i = t.actionItemId,
        a = t.eventId,
        s = t.allowEvents,
        o = t.immediate,
        l = t.testManual,
        h = t.verbose,
        c = void 0 === h || h,
        u = t.rawData;
      if (n && i && u && o) {
        var f = u.actionLists[n];
        f && (u = j({ actionList: f, actionItemId: i, rawData: u }));
      }
      if (
        (st({ store: e, rawData: u, allowEvents: s, testManual: l }),
        (n && r === y.ActionTypeConsts.GENERAL_START_ACTION) || S(r))
      ) {
        vt({ store: e, actionListId: n }), dt({ store: e, actionListId: n, eventId: a });
        var p = yt({ store: e, eventId: a, actionListId: n, immediate: o, verbose: c });
        c && p && e.dispatch((0, E.actionListPlaybackChanged)({ actionListId: n, isPlaying: !o }));
      }
    }
    function it(t, e) {
      var r = t.actionListId;
      r ? vt({ store: e, actionListId: r }) : mt({ store: e }), ot(e);
    }
    function at(t, e) {
      ot(e), N({ store: e, elementApi: b });
    }
    function st(t) {
      var e,
        r = t.store,
        i = t.rawData,
        a = t.allowEvents,
        s = t.testManual,
        o = r.getState().ixSession;
      i && r.dispatch((0, E.rawDataImported)(i)),
        o.active ||
          (r.dispatch(
            (0, E.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(A)),
              reducedMotion:
                document.body.hasAttribute('data-wf-ix-vacation') &&
                window.matchMedia('(prefers-reduced-motion)').matches,
            })
          ),
          a &&
            ((function (t) {
              var e = t.getState().ixData.eventTypeMap;
              ct(t),
                (0, d.default)(e, function (e, r) {
                  var i = _.default[r];
                  i
                    ? (function (t) {
                        var e = t.logic,
                          r = t.store,
                          i = t.events;
                        !(function (t) {
                          if (J) {
                            var e = {},
                              r = '';
                            for (var n in t) {
                              var i = t[n],
                                a = i.eventTypeId,
                                s = i.target,
                                o = b.getQuerySelector(s);
                              e[o] ||
                                (a !== y.EventTypeConsts.MOUSE_CLICK &&
                                  a !== y.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                ((e[o] = !0),
                                (r += o + '{cursor: pointer;touch-action: manipulation;}'));
                            }
                            if (r) {
                              var l = document.createElement('style');
                              (l.textContent = r), document.body.appendChild(l);
                            }
                          }
                        })(i);
                        var a = e.types,
                          s = e.handler,
                          o = r.getState().ixData,
                          u = o.actionLists,
                          f = ut(i, pt);
                        if ((0, c.default)(f)) {
                          (0, d.default)(f, function (t, e) {
                            var a = i[e],
                              s = a.action,
                              c = a.id,
                              f = a.mediaQueries,
                              p = void 0 === f ? o.mediaQueryKeys : f,
                              d = s.config.actionListId;
                            if (
                              (q(p, o.mediaQueryKeys) || r.dispatch((0, E.mediaQueriesDefined)()),
                              s.actionTypeId === y.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
                            ) {
                              var m = Array.isArray(a.config) ? a.config : [a.config];
                              m.forEach(function (e) {
                                var i = e.continuousParameterGroupId,
                                  a = (0, h.default)(
                                    u,
                                    ''.concat(d, '.continuousParameterGroups'),
                                    []
                                  ),
                                  s = (0, l.default)(a, function (t) {
                                    var e = t.id;
                                    return e === i;
                                  }),
                                  o = (e.smoothing || 0) / 100,
                                  f = (e.restingState || 0) / 100;
                                s &&
                                  t.forEach(function (t, i) {
                                    var a = c + I + i;
                                    !(function (t) {
                                      var e = t.store,
                                        r = t.eventStateKey,
                                        i = t.eventTarget,
                                        a = t.eventId,
                                        s = t.eventConfig,
                                        o = t.actionListId,
                                        l = t.parameterGroup,
                                        c = t.smoothing,
                                        u = t.restingValue,
                                        f = e.getState(),
                                        p = f.ixData,
                                        d = f.ixSession,
                                        m = p.events[a],
                                        v = m.eventTypeId,
                                        y = {},
                                        g = {},
                                        E = [],
                                        _ = l.continuousActionGroups,
                                        x = l.id;
                                      z(v, s) && (x = H(r, x));
                                      var S =
                                        d.hasBoundaryNodes && i ? b.getClosestElement(i, A) : null;
                                      _.forEach(function (t) {
                                        var e = t.keyframe,
                                          r = t.actionItems;
                                        r.forEach(function (t) {
                                          var r = t.actionTypeId,
                                            a = t.config.target;
                                          if (a) {
                                            var s = a.boundaryMode ? S : null,
                                              o = U(a) + I + r;
                                            if (
                                              ((g[o] = (function () {
                                                var t,
                                                  e =
                                                    arguments.length > 0 && void 0 !== arguments[0]
                                                      ? arguments[0]
                                                      : [],
                                                  r = arguments.length > 1 ? arguments[1] : void 0,
                                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                                  a = (0, n.default)(e);
                                                return (
                                                  a.some(function (e, n) {
                                                    return e.keyframe === r && ((t = n), !0);
                                                  }),
                                                  null == t &&
                                                    ((t = a.length),
                                                    a.push({ keyframe: r, actionItems: [] })),
                                                  a[t].actionItems.push(i),
                                                  a
                                                );
                                              })(g[o], e, t)),
                                              !y[o])
                                            ) {
                                              y[o] = !0;
                                              var l = t.config;
                                              M({
                                                config: l,
                                                event: m,
                                                eventTarget: i,
                                                elementRoot: s,
                                                elementApi: b,
                                              }).forEach(function (t) {
                                                E.push({ element: t, key: o });
                                              });
                                            }
                                          }
                                        });
                                      }),
                                        E.forEach(function (t) {
                                          var r = t.element,
                                            n = t.key,
                                            i = g[n],
                                            s = (0, h.default)(i, '[0].actionItems[0]', {}),
                                            l = s.actionTypeId,
                                            f = K(l) ? Q(l)(r, s) : null,
                                            p = F({ element: r, actionItem: s, elementApi: b }, f);
                                          gt({
                                            store: e,
                                            element: r,
                                            eventId: a,
                                            actionListId: o,
                                            actionItem: s,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: x,
                                            actionGroups: i,
                                            smoothing: c,
                                            restingValue: u,
                                            pluginInstance: f,
                                          });
                                        });
                                    })({
                                      store: r,
                                      eventStateKey: a,
                                      eventTarget: t,
                                      eventId: c,
                                      eventConfig: e,
                                      actionListId: d,
                                      parameterGroup: s,
                                      smoothing: o,
                                      restingValue: f,
                                    });
                                  });
                              });
                            }
                            (s.actionTypeId === y.ActionTypeConsts.GENERAL_START_ACTION ||
                              S(s.actionTypeId)) &&
                              dt({ store: r, actionListId: d, eventId: c });
                          });
                          var p = function (t) {
                              var e = r.getState(),
                                n = e.ixSession;
                              ft(f, function (e, a, l) {
                                var h = i[a],
                                  c = n.eventState[l],
                                  u = h.action,
                                  f = h.mediaQueries,
                                  p = void 0 === f ? o.mediaQueryKeys : f;
                                if (X(p, n.mediaQueryKey)) {
                                  var d = function () {
                                    var n =
                                        arguments.length > 0 && void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {},
                                      i = s(
                                        {
                                          store: r,
                                          element: e,
                                          event: h,
                                          eventConfig: n,
                                          nativeEvent: t,
                                          eventStateKey: l,
                                        },
                                        c
                                      );
                                    (0, v.default)(i, c) ||
                                      r.dispatch((0, E.eventStateChanged)(l, i));
                                  };
                                  if (
                                    u.actionTypeId === y.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                  ) {
                                    var m = Array.isArray(h.config) ? h.config : [h.config];
                                    m.forEach(d);
                                  } else d();
                                }
                              });
                            },
                            g = (0, m.default)(p, tt),
                            _ = function (t) {
                              var e = t.target,
                                n = void 0 === e ? document : e,
                                i = t.types,
                                a = t.throttle;
                              i.split(' ')
                                .filter(Boolean)
                                .forEach(function (t) {
                                  var e = a ? g : p;
                                  n.addEventListener(t, e),
                                    r.dispatch((0, E.eventListenerAdded)(n, [t, e]));
                                });
                            };
                          Array.isArray(a) ? a.forEach(_) : 'string' == typeof a && _(e);
                        }
                      })({ logic: i, store: t, events: e })
                    : console.warn('IX2 event type not configured: '.concat(r));
                }),
                t.getState().ixSession.eventListeners.length &&
                  (function (t) {
                    var e = function () {
                      ct(t);
                    };
                    ht.forEach(function (r) {
                      window.addEventListener(r, e),
                        t.dispatch((0, E.eventListenerAdded)(window, [r, e]));
                    }),
                      e();
                  })(t);
            })(r),
            -1 === (e = document.documentElement).className.indexOf(C) &&
              (e.className += ' '.concat(C)),
            r.getState().ixSession.hasDefinedMediaQueries &&
              (function (t) {
                k({
                  store: t,
                  select: function (t) {
                    return t.ixSession.mediaQueryKey;
                  },
                  onChange: function () {
                    ot(t), N({ store: t, elementApi: b }), st({ store: t, allowEvents: !0 }), rt();
                  },
                });
              })(r)),
          r.dispatch((0, E.sessionStarted)()),
          (function (t, e) {
            !(function r(n) {
              var i = t.getState(),
                a = i.ixSession,
                s = i.ixParameters;
              a.active &&
                (t.dispatch((0, E.animationFrameChanged)(n, s)),
                e
                  ? (function (t, e) {
                      var r = k({
                        store: t,
                        select: function (t) {
                          return t.ixSession.tick;
                        },
                        onChange: function (t) {
                          e(t), r();
                        },
                      });
                    })(t, r)
                  : requestAnimationFrame(r));
            })(window.performance.now());
          })(r, s));
    }
    function ot(t) {
      var e = t.getState().ixSession;
      e.active && (e.eventListeners.forEach(lt), t.dispatch((0, E.sessionStopped)()));
    }
    function lt(t) {
      var e = t.target,
        r = t.listenerParams;
      e.removeEventListener.apply(e, r);
    }
    var ht = ['resize', 'orientationchange'];
    function ct(t) {
      var e = t.getState(),
        r = e.ixSession,
        n = e.ixData,
        i = window.innerWidth;
      if (i !== r.viewportWidth) {
        var a = n.mediaQueries;
        t.dispatch((0, E.viewportWidthChanged)({ width: i, mediaQueries: a }));
      }
    }
    var ut = function (t, e) {
        return (0, u.default)((0, p.default)(t, e), f.default);
      },
      ft = function (t, e) {
        (0, d.default)(t, function (t, r) {
          t.forEach(function (t, n) {
            e(t, r, r + I + n);
          });
        });
      },
      pt = function (t) {
        var e = { target: t.target, targets: t.targets };
        return M({ config: e, elementApi: b });
      };
    function dt(t) {
      var e = t.store,
        r = t.actionListId,
        n = t.eventId,
        i = e.getState(),
        a = i.ixData,
        s = i.ixSession,
        o = a.actionLists,
        l = a.events[n],
        c = o[r];
      if (c && c.useFirstGroupAsInitialState) {
        var u = (0, h.default)(c, 'actionItemGroups[0].actionItems', []),
          f = (0, h.default)(l, 'mediaQueries', a.mediaQueryKeys);
        if (!X(f, s.mediaQueryKey)) return;
        u.forEach(function (t) {
          var i,
            a = t.config,
            s = t.actionTypeId,
            o =
              !0 ===
              (null == a
                ? void 0
                : null === (i = a.target) || void 0 === i
                ? void 0
                : i.useEventTarget)
                ? { target: l.target, targets: l.targets }
                : a,
            h = M({ config: o, event: l, elementApi: b }),
            c = K(s);
          h.forEach(function (i) {
            var a = c ? Q(s)(i, t) : null;
            gt({
              destination: F({ element: i, actionItem: t, elementApi: b }, a),
              immediate: !0,
              store: e,
              element: i,
              eventId: n,
              actionItem: t,
              actionListId: r,
              pluginInstance: a,
            });
          });
        });
      }
    }
    function mt(t) {
      var e = t.store,
        r = e.getState().ixInstances;
      (0, d.default)(r, function (t) {
        if (!t.continuous) {
          var r = t.actionListId,
            n = t.verbose;
          Et(t, e),
            n && e.dispatch((0, E.actionListPlaybackChanged)({ actionListId: r, isPlaying: !1 }));
        }
      });
    }
    function vt(t) {
      var e = t.store,
        r = t.eventId,
        n = t.eventTarget,
        i = t.eventStateKey,
        a = t.actionListId,
        s = e.getState(),
        o = s.ixInstances,
        l = s.ixSession.hasBoundaryNodes && n ? b.getClosestElement(n, A) : null;
      (0, d.default)(o, function (t) {
        var n = (0, h.default)(t, 'actionItem.config.target.boundaryMode'),
          s = !i || t.eventStateKey === i;
        if (t.actionListId === a && t.eventId === r && s) {
          if (l && n && !b.elementContains(l, t.element)) return;
          Et(t, e),
            t.verbose &&
              e.dispatch((0, E.actionListPlaybackChanged)({ actionListId: a, isPlaying: !1 }));
        }
      });
    }
    function yt(t) {
      var e,
        r = t.store,
        n = t.eventId,
        i = t.eventTarget,
        a = t.eventStateKey,
        s = t.actionListId,
        o = t.groupIndex,
        l = void 0 === o ? 0 : o,
        c = t.immediate,
        u = t.verbose,
        f = r.getState(),
        p = f.ixData,
        d = f.ixSession,
        m = p.events[n] || {},
        v = m.mediaQueries,
        y = void 0 === v ? p.mediaQueryKeys : v,
        g = (0, h.default)(p, 'actionLists.'.concat(s), {}),
        E = g.actionItemGroups,
        _ = g.useFirstGroupAsInitialState;
      if (!E || !E.length) return !1;
      l >= E.length && (0, h.default)(m, 'config.loop') && (l = 0), 0 === l && _ && l++;
      var x =
          (0 === l || (1 === l && _)) &&
          S(null === (e = m.action) || void 0 === e ? void 0 : e.actionTypeId)
            ? m.config.delay
            : void 0,
        T = (0, h.default)(E, [l, 'actionItems'], []);
      if (!T.length) return !1;
      if (!X(y, d.mediaQueryKey)) return !1;
      var I = d.hasBoundaryNodes && i ? b.getClosestElement(i, A) : null,
        P = V(T),
        w = !1;
      return (
        T.forEach(function (t, e) {
          var o = t.config,
            h = t.actionTypeId,
            f = K(h),
            p = o.target;
          if (p) {
            var d = p.boundaryMode ? I : null;
            M({ config: o, event: m, eventTarget: i, elementRoot: d, elementApi: b }).forEach(
              function (o, p) {
                var d = f ? Q(h)(o, t) : null,
                  m = f ? $(h)(o, t) : null;
                w = !0;
                var v = P === e && 0 === p,
                  y = B({ element: o, actionItem: t }),
                  g = F({ element: o, actionItem: t, elementApi: b }, d);
                gt({
                  store: r,
                  element: o,
                  actionItem: t,
                  eventId: n,
                  eventTarget: i,
                  eventStateKey: a,
                  actionListId: s,
                  groupIndex: l,
                  isCarrier: v,
                  computedStyle: y,
                  destination: g,
                  immediate: c,
                  verbose: u,
                  pluginInstance: d,
                  pluginDuration: m,
                  instanceDelay: x,
                });
              }
            );
          }
        }),
        w
      );
    }
    function gt(t) {
      var e,
        r,
        n = t.store,
        i = t.computedStyle,
        a = (0, o.default)(t, ['store', 'computedStyle']),
        l = a.element,
        h = a.actionItem,
        c = a.immediate,
        u = a.pluginInstance,
        f = a.continuous,
        p = a.restingValue,
        d = a.eventId,
        m = !f,
        v = R(),
        g = n.getState(),
        _ = g.ixElements,
        x = g.ixSession,
        S = g.ixData,
        T = O(_, l),
        I = (_[T] || {}).refState,
        A = b.getRefType(l),
        P = x.reducedMotion && y.ReducedMotionTypes[h.actionTypeId];
      if (P && f)
        switch (null === (e = S.events[d]) || void 0 === e ? void 0 : e.eventTypeId) {
          case y.EventTypeConsts.MOUSE_MOVE:
          case y.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            r = p;
            break;
          default:
            r = 0.5;
        }
      var w = G(l, I, i, h, b, u);
      n.dispatch(
        (0, E.instanceAdded)(
          (0, s.default)(
            { instanceId: v, elementId: T, origin: w, refType: A, skipMotion: P, skipToValue: r },
            a
          )
        )
      ),
        bt(document.body, 'ix2-animation-started', v),
        c
          ? (function (t, e) {
              var r = t.getState().ixParameters;
              t.dispatch((0, E.instanceStarted)(e, 0)),
                t.dispatch((0, E.animationFrameChanged)(performance.now(), r)),
                _t(t.getState().ixInstances[e], t);
            })(n, v)
          : (k({
              store: n,
              select: function (t) {
                return t.ixInstances[v];
              },
              onChange: _t,
            }),
            m && n.dispatch((0, E.instanceStarted)(v, x.tick)));
    }
    function Et(t, e) {
      bt(document.body, 'ix2-animation-stopping', { instanceId: t.id, state: e.getState() });
      var r = t.elementId,
        n = t.actionItem,
        i = e.getState().ixElements[r] || {},
        a = i.ref;
      i.refType === P && W(a, n, b), e.dispatch((0, E.instanceRemoved)(t.id));
    }
    function bt(t, e, r) {
      var n = document.createEvent('CustomEvent');
      n.initCustomEvent(e, !0, !0, r), t.dispatchEvent(n);
    }
    function _t(t, e) {
      var r = t.active,
        n = t.continuous,
        i = t.complete,
        a = t.elementId,
        s = t.actionItem,
        o = t.actionTypeId,
        l = t.renderType,
        h = t.current,
        c = t.groupIndex,
        u = t.eventId,
        f = t.eventTarget,
        p = t.eventStateKey,
        d = t.actionListId,
        m = t.isCarrier,
        v = t.styleProp,
        y = t.verbose,
        g = t.pluginInstance,
        _ = e.getState(),
        x = _.ixData,
        S = _.ixSession,
        T = (x.events[u] || {}).mediaQueries,
        I = void 0 === T ? x.mediaQueryKeys : T;
      if (X(I, S.mediaQueryKey) && (n || r || i)) {
        if (h || (l === w && i)) {
          e.dispatch((0, E.elementStateChanged)(a, o, h, s));
          var A = e.getState().ixElements[a] || {},
            C = A.ref,
            D = A.refType,
            M = A.refState,
            O = M && M[o];
          switch (D) {
            case P:
              L(C, M, O, u, s, v, b, l, g);
          }
        }
        if (i) {
          if (m) {
            var F = yt({
              store: e,
              eventId: u,
              eventTarget: f,
              eventStateKey: p,
              actionListId: d,
              groupIndex: c + 1,
              verbose: y,
            });
            y &&
              !F &&
              e.dispatch((0, E.actionListPlaybackChanged)({ actionListId: d, isPlaying: !1 }));
          }
          Et(t, e);
        }
      }
    }
  },
  function (t, e, r) {
    var n = r(187);
    t.exports = function (t, e, r) {
      '__proto__' == e && n
        ? n(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (t[e] = r);
    };
  },
  function (t, e, r) {
    var n = r(29),
      i = (function () {
        try {
          var t = n(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function (t, e, r) {
    var n = r(23),
      i = Object.create,
      a = (function () {
        function t() {}
        return function (e) {
          if (!n(e)) return {};
          if (i) return i(e);
          t.prototype = e;
          var r = new t();
          return (t.prototype = void 0), r;
        };
      })();
    t.exports = a;
  },
  function (t, e, r) {
    var n = r(452),
      i = r(453),
      a = n
        ? function (t) {
            return n.get(t);
          }
        : i;
    t.exports = a;
  },
  function (t, e, r) {
    var n = r(454),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      for (var e = t.name + '', r = n[e], a = i.call(n, e) ? r.length : 0; a--; ) {
        var s = r[a],
          o = s.func;
        if (null == o || o == t) return s.name;
      }
      return e;
    };
  },
  function (t, e, r) {
    r(192), r(361), r(362), r(363), r(364), r(366), r(461), r(462), r(463), (t.exports = r(464));
  },
  function (t, e, r) {
    'use strict';
    var n = r(22),
      i = r(194),
      a = r(360);
    n.define(
      'lottie',
      (t.exports = function () {
        return {
          lottie: a,
          createInstance: i.createInstance,
          cleanupElement: i.cleanupElement,
          init: i.init,
          destroy: i.destroy,
          ready: i.ready,
        };
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = window.$,
      i = r(124) && n.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = { VERSION: '1.6.0-Webflow' },
        e = {},
        r = Array.prototype,
        n = Object.prototype,
        a = Function.prototype,
        s = (r.push, r.slice),
        o = (r.concat, n.toString, n.hasOwnProperty),
        l = r.forEach,
        h = r.map,
        c = (r.reduce, r.reduceRight, r.filter),
        u = (r.every, r.some),
        f = r.indexOf,
        p = (r.lastIndexOf, Array.isArray, Object.keys),
        d =
          (a.bind,
          (t.each = t.forEach =
            function (r, n, i) {
              if (null == r) return r;
              if (l && r.forEach === l) r.forEach(n, i);
              else if (r.length === +r.length) {
                for (var a = 0, s = r.length; a < s; a++) if (n.call(i, r[a], a, r) === e) return;
              } else {
                var o = t.keys(r);
                for (a = 0, s = o.length; a < s; a++) if (n.call(i, r[o[a]], o[a], r) === e) return;
              }
              return r;
            }));
      (t.map = t.collect =
        function (t, e, r) {
          var n = [];
          return null == t
            ? n
            : h && t.map === h
            ? t.map(e, r)
            : (d(t, function (t, i, a) {
                n.push(e.call(r, t, i, a));
              }),
              n);
        }),
        (t.find = t.detect =
          function (t, e, r) {
            var n;
            return (
              m(t, function (t, i, a) {
                if (e.call(r, t, i, a)) return (n = t), !0;
              }),
              n
            );
          }),
        (t.filter = t.select =
          function (t, e, r) {
            var n = [];
            return null == t
              ? n
              : c && t.filter === c
              ? t.filter(e, r)
              : (d(t, function (t, i, a) {
                  e.call(r, t, i, a) && n.push(t);
                }),
                n);
          });
      var m =
        (t.some =
        t.any =
          function (r, n, i) {
            n || (n = t.identity);
            var a = !1;
            return null == r
              ? a
              : u && r.some === u
              ? r.some(n, i)
              : (d(r, function (t, r, s) {
                  if (a || (a = n.call(i, t, r, s))) return e;
                }),
                !!a);
          });
      (t.contains = t.include =
        function (t, e) {
          return (
            null != t &&
            (f && t.indexOf === f
              ? -1 != t.indexOf(e)
              : m(t, function (t) {
                  return t === e;
                }))
          );
        }),
        (t.delay = function (t, e) {
          var r = s.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, r);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(s.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, r, n;
          return function () {
            e ||
              ((e = !0),
              (r = arguments),
              (n = this),
              i.frame(function () {
                (e = !1), t.apply(n, r);
              }));
          };
        }),
        (t.debounce = function (e, r, n) {
          var i,
            a,
            s,
            o,
            l,
            h = function h() {
              var c = t.now() - o;
              c < r
                ? (i = setTimeout(h, r - c))
                : ((i = null), n || ((l = e.apply(s, a)), (s = a = null)));
            };
          return function () {
            (s = this), (a = arguments), (o = t.now());
            var c = n && !i;
            return i || (i = setTimeout(h, r)), c && ((l = e.apply(s, a)), (s = a = null)), l;
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var r = 1, n = arguments.length; r < n; r++) {
            var i = arguments[r];
            for (var a in i) void 0 === e[a] && (e[a] = i[a]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (p) return p(e);
          var r = [];
          for (var n in e) t.has(e, n) && r.push(n);
          return r;
        }),
        (t.has = function (t, e) {
          return o.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var v = /(.)^/,
        y = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
        g = /\\|'|\r|\n|\u2028|\u2029/g,
        E = function (t) {
          return '\\' + y[t];
        };
      return (
        (t.template = function (e, r, n) {
          !r && n && (r = n), (r = t.defaults({}, r, t.templateSettings));
          var i = RegExp(
              [(r.escape || v).source, (r.interpolate || v).source, (r.evaluate || v).source].join(
                '|'
              ) + '|$',
              'g'
            ),
            a = 0,
            s = "__p+='";
          e.replace(i, function (t, r, n, i, o) {
            return (
              (s += e.slice(a, o).replace(g, E)),
              (a = o + t.length),
              r
                ? (s += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
                : n
                ? (s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                : i && (s += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (s += "';\n"),
            r.variable || (s = 'with(obj||{}){\n' + s + '}\n'),
            (s =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              s +
              'return __p;\n');
          try {
            var o = new Function(r.variable || 'obj', '_', s);
          } catch (t) {
            throw ((t.source = s), t);
          }
          var l = function (e) {
              return o.call(this, e, t);
            },
            h = r.variable || 'obj';
          return (l.source = 'function(' + h + '){\n' + s + '}'), l;
        }),
        t
      );
    })();
  },
  function (t, e, r) {
    'use strict';
    var n = r(3),
      i = n(r(195)),
      a = n(r(196)),
      s = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ready = e.destroy = e.init = e.cleanupElement = e.createInstance = void 0);
    var o = s(r(45)),
      l = s(r(37)),
      h = s(r(125));
    r(265);
    var c = { Playing: 'playing', Stopped: 'stopped' },
      u = new ((function () {
        function t() {
          (0, i.default)(this, t), (0, l.default)(this, '_cache', []);
        }
        return (
          (0, a.default)(t, [
            {
              key: 'set',
              value: function (t, e) {
                var r = (0, h.default)(this._cache, function (e) {
                  return e.wrapper === t;
                });
                -1 !== r && this._cache.splice(r, 1), this._cache.push({ wrapper: t, instance: e });
              },
            },
            {
              key: 'delete',
              value: function (t) {
                var e = (0, h.default)(this._cache, function (e) {
                  return e.wrapper === t;
                });
                -1 !== e && this._cache.splice(e, 1);
              },
            },
            {
              key: 'get',
              value: function (t) {
                var e = (0, h.default)(this._cache, function (e) {
                  return e.wrapper === t;
                });
                return -1 !== e ? this._cache[e].instance : null;
              },
            },
          ]),
          t
        );
      })())(),
      f = {},
      p = (function () {
        function t() {
          (0, i.default)(this, t),
            (0, l.default)(this, 'config', null),
            (0, l.default)(this, 'currentState', c.Stopped),
            (0, l.default)(this, 'handlers', {
              enterFrame: [],
              complete: [],
              loop: [],
              dataReady: [],
              destroy: [],
              error: [],
            });
        }
        return (
          (0, a.default)(t, [
            {
              key: 'load',
              value: function (t) {
                var e = this,
                  r = t.dataset || f,
                  n = r.src || '',
                  i = r.preserveAspectRatio || 'xMidYMid meet',
                  a = r.renderer || 'svg',
                  s = 1 === parseFloat(r.loop),
                  l = parseFloat(r.direction) || 1,
                  h = 1 === parseFloat(r.autoplay),
                  p = parseFloat(r.duration) || 0,
                  d = 1 === parseFloat(r.isIx2Target),
                  m = parseFloat(r.ix2InitialState);
                isNaN(m) && (m = null);
                var v = {
                  src: n,
                  loop: s,
                  autoplay: h,
                  renderer: a,
                  direction: l,
                  duration: p,
                  hasIx2: d,
                  ix2InitialValue: m,
                  preserveAspectRatio: i,
                };
                if (
                  this.animationItem &&
                  this.config &&
                  this.config.src === n &&
                  a === this.config.renderer &&
                  i === this.config.preserveAspectRatio
                ) {
                  if (
                    (s !== this.config.loop && this.setLooping(s),
                    d ||
                      (l !== this.config.direction && this.setDirection(l),
                      p !== this.config.duration &&
                        (p > 0 && p !== this.duration
                          ? this.setSpeed(this.duration / p)
                          : this.setSpeed(1))),
                    h && this.play(),
                    m && m !== this.config.ix2InitialValue)
                  ) {
                    var y = m / 100;
                    this.goToFrame(this.frames * y);
                  }
                  this.config = v;
                } else {
                  var g = {
                    container: t,
                    loop: s,
                    autoplay: h,
                    renderer: a,
                    rendererSettings: {
                      preserveAspectRatio: i,
                      progressiveLoad: !0,
                      hideOnTransparent: !0,
                    },
                  };
                  try {
                    this.animationItem && this.destroy(),
                      (this.animationItem = window.Webflow.require('lottie').lottie.loadAnimation(
                        (0, o.default)({}, g, { path: n })
                      ));
                  } catch (t) {
                    return void this.handlers.error.forEach(function (e) {
                      return e(t);
                    });
                  }
                  this.animationItem &&
                    (Boolean(window.Webflow.env('design') || window.Webflow.env('preview')) &&
                      (this.animationItem.addEventListener('enterFrame', function () {
                        if (e.isPlaying) {
                          var t = e.animationItem,
                            r = t.currentFrame,
                            n = t.totalFrames,
                            i = t.playDirection,
                            a = (r / n) * 100,
                            s = Math.round(1 === i ? a : 100 - a);
                          e.handlers.enterFrame.forEach(function (t) {
                            return t(s, r);
                          });
                        }
                      }),
                      this.animationItem.addEventListener('complete', function () {
                        e.currentState === c.Playing && e.animationItem.loop
                          ? (e.currentState = c.Stopped)
                          : e.handlers.complete.forEach(function (t) {
                              return t();
                            });
                      }),
                      this.animationItem.addEventListener('loopComplete', function (t) {
                        e.handlers.loop.forEach(function (e) {
                          return e(t);
                        });
                      }),
                      this.animationItem.addEventListener('data_failed', function (t) {
                        e.handlers.error.forEach(function (e) {
                          return e(t);
                        });
                      }),
                      this.animationItem.addEventListener('error', function (t) {
                        e.handlers.error.forEach(function (e) {
                          return e(t);
                        });
                      })),
                    this.isLoaded
                      ? (this.handlers.dataReady.forEach(function (t) {
                          return t();
                        }),
                        h && this.play())
                      : this.animationItem.addEventListener('data_ready', function () {
                          if (
                            (e.handlers.dataReady.forEach(function (t) {
                              return t();
                            }),
                            d ||
                              (e.setDirection(l),
                              p > 0 && p !== e.duration && e.setSpeed(e.duration / p),
                              h && e.play()),
                            m)
                          ) {
                            var t = m / 100;
                            e.goToFrame(e.frames * t);
                          }
                        }),
                    u.set(t, this),
                    (this.container = t),
                    (this.config = v));
                }
              },
            },
            {
              key: 'onFrameChange',
              value: function (t) {
                -1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t);
              },
            },
            {
              key: 'onPlaybackComplete',
              value: function (t) {
                -1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t);
              },
            },
            {
              key: 'onLoopComplete',
              value: function (t) {
                -1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t);
              },
            },
            {
              key: 'onDestroy',
              value: function (t) {
                -1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t);
              },
            },
            {
              key: 'onDataReady',
              value: function (t) {
                -1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t);
              },
            },
            {
              key: 'onError',
              value: function (t) {
                -1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t);
              },
            },
            {
              key: 'play',
              value: function () {
                if (this.animationItem) {
                  var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                  this.animationItem.goToAndPlay(t, !0), (this.currentState = c.Playing);
                }
              },
            },
            {
              key: 'stop',
              value: function () {
                if (this.animationItem) {
                  if (this.isPlaying) {
                    var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                    this.animationItem.goToAndStop(t, !0);
                  }
                  this.currentState = c.Stopped;
                }
              },
            },
            {
              key: 'destroy',
              value: function () {
                var t = this;
                this.animationItem &&
                  (this.isPlaying && this.stop(),
                  this.handlers.destroy.forEach(function (t) {
                    return t();
                  }),
                  this.container && u.delete(this.container),
                  this.animationItem.destroy(),
                  Object.keys(this.handlers).forEach(function (e) {
                    return (t.handlers[e].length = 0);
                  }),
                  (this.animationItem = null),
                  (this.container = null),
                  (this.config = null));
              },
            },
            {
              key: 'goToFrame',
              value: function (t) {
                this.animationItem && this.animationItem.setCurrentRawFrameValue(t);
              },
            },
            {
              key: 'setSubframe',
              value: function (t) {
                this.animationItem && this.animationItem.setSubframe(t);
              },
            },
            {
              key: 'setSpeed',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                this.animationItem &&
                  (this.isPlaying && this.stop(), this.animationItem.setSpeed(t));
              },
            },
            {
              key: 'setLooping',
              value: function (t) {
                this.animationItem &&
                  (this.isPlaying && this.stop(), (this.animationItem.loop = t));
              },
            },
            {
              key: 'setDirection',
              value: function (t) {
                this.animationItem &&
                  (this.isPlaying && this.stop(),
                  this.animationItem.setDirection(t),
                  this.goToFrame(1 === t ? 0 : this.frames));
              },
            },
            {
              key: 'isPlaying',
              get: function () {
                return !!this.animationItem && !this.animationItem.isPaused;
              },
            },
            {
              key: 'isPaused',
              get: function () {
                return !!this.animationItem && this.animationItem.isPaused;
              },
            },
            {
              key: 'duration',
              get: function () {
                return this.animationItem ? this.animationItem.getDuration() : 0;
              },
            },
            {
              key: 'frames',
              get: function () {
                return this.animationItem ? this.animationItem.totalFrames : 0;
              },
            },
            {
              key: 'direction',
              get: function () {
                return this.animationItem ? this.animationItem.playDirection : 1;
              },
            },
            {
              key: 'isLoaded',
              get: function () {
                return this.animationItem, this.animationItem.isLoaded;
              },
            },
            {
              key: 'ix2InitialValue',
              get: function () {
                return this.config ? this.config.ix2InitialValue : null;
              },
            },
          ]),
          t
        );
      })(),
      d = function () {
        return Array.from(document.querySelectorAll('[data-animation-type="lottie"]'));
      },
      m = function (t) {
        var e = u.get(t);
        return null == e && (e = new p()), e.load(t), e;
      };
    e.createInstance = m;
    var v = function (t) {
      var e = u.get(t);
      e && e.destroy();
    };
    e.cleanupElement = v;
    var y = function () {
      d().forEach(function (t) {
        1 === parseFloat(t.getAttribute('data-is-ix2-target')) || v(t), m(t);
      });
    };
    e.init = y;
    e.destroy = function () {
      d().forEach(v);
    };
    var g = y;
    e.ready = g;
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
    };
  },
  function (t, e) {
    function r(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    t.exports = function (t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t;
    };
  },
  function (t, e, r) {
    var n = r(198),
      i = r(250),
      a = r(141);
    t.exports = function (t) {
      var e = i(t);
      return 1 == e.length && e[0][2]
        ? a(e[0][0], e[0][1])
        : function (r) {
            return r === t || n(r, t, e);
          };
    };
  },
  function (t, e, r) {
    var n = r(127),
      i = r(131),
      a = 1,
      s = 2;
    t.exports = function (t, e, r, o) {
      var l = r.length,
        h = l,
        c = !o;
      if (null == t) return !h;
      for (t = Object(t); l--; ) {
        var u = r[l];
        if (c && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
      }
      for (; ++l < h; ) {
        var f = (u = r[l])[0],
          p = t[f],
          d = u[1];
        if (c && u[2]) {
          if (void 0 === p && !(f in t)) return !1;
        } else {
          var m = new n();
          if (o) var v = o(p, d, f, t, e, m);
          if (!(void 0 === v ? i(d, p, a | s, o, m) : v)) return !1;
        }
      }
      return !0;
    };
  },
  function (t, e) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, e, r) {
    var n = r(59),
      i = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return !(r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0));
    };
  },
  function (t, e, r) {
    var n = r(59);
    t.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
  },
  function (t, e, r) {
    var n = r(59);
    t.exports = function (t) {
      return n(this.__data__, t) > -1;
    };
  },
  function (t, e, r) {
    var n = r(59);
    t.exports = function (t, e) {
      var r = this.__data__,
        i = n(r, t);
      return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
    };
  },
  function (t, e, r) {
    var n = r(58);
    t.exports = function () {
      (this.__data__ = new n()), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
        r = e.delete(t);
      return (this.size = e.size), r;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, r) {
    var n = r(58),
      i = r(80),
      a = r(81),
      s = 200;
    t.exports = function (t, e) {
      var r = this.__data__;
      if (r instanceof n) {
        var o = r.__data__;
        if (!i || o.length < s - 1) return o.push([t, e]), (this.size = ++r.size), this;
        r = this.__data__ = new a(o);
      }
      return r.set(t, e), (this.size = r.size), this;
    };
  },
  function (t, e, r) {
    var n = r(128),
      i = r(212),
      a = r(23),
      s = r(130),
      o = /^\[object .+?Constructor\]$/,
      l = Function.prototype,
      h = Object.prototype,
      c = l.toString,
      u = h.hasOwnProperty,
      f = RegExp(
        '^' +
          c
            .call(u)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );
    t.exports = function (t) {
      return !(!a(t) || i(t)) && (n(t) ? f : o).test(s(t));
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = Object.prototype,
      a = i.hasOwnProperty,
      s = i.toString,
      o = n ? n.toStringTag : void 0;
    t.exports = function (t) {
      var e = a.call(t, o),
        r = t[o];
      try {
        t[o] = void 0;
        var n = !0;
      } catch (t) {}
      var i = s.call(t);
      return n && (e ? (t[o] = r) : delete t[o]), i;
    };
  },
  function (t, e) {
    var r = Object.prototype.toString;
    t.exports = function (t) {
      return r.call(t);
    };
  },
  function (t, e, r) {
    var n,
      i = r(213),
      a = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + n : '';
    t.exports = function (t) {
      return !!a && a in t;
    };
  },
  function (t, e, r) {
    var n = r(18)['__core-js_shared__'];
    t.exports = n;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e, r) {
    var n = r(216),
      i = r(58),
      a = r(80);
    t.exports = function () {
      (this.size = 0), (this.__data__ = { hash: new n(), map: new (a || i)(), string: new n() });
    };
  },
  function (t, e, r) {
    var n = r(217),
      i = r(218),
      a = r(219),
      s = r(220),
      o = r(221);
    function l(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (l.prototype.clear = n),
      (l.prototype.delete = i),
      (l.prototype.get = a),
      (l.prototype.has = s),
      (l.prototype.set = o),
      (t.exports = l);
  },
  function (t, e, r) {
    var n = r(61);
    t.exports = function () {
      (this.__data__ = n ? n(null) : {}), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e, r) {
    var n = r(61),
      i = '__lodash_hash_undefined__',
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (n) {
        var r = e[t];
        return r === i ? void 0 : r;
      }
      return a.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, r) {
    var n = r(61),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return n ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function (t, e, r) {
    var n = r(61),
      i = '__lodash_hash_undefined__';
    t.exports = function (t, e) {
      var r = this.__data__;
      return (this.size += this.has(t) ? 0 : 1), (r[t] = n && void 0 === e ? i : e), this;
    };
  },
  function (t, e, r) {
    var n = r(62);
    t.exports = function (t) {
      var e = n(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
  },
  function (t, e, r) {
    var n = r(62);
    t.exports = function (t) {
      return n(this, t).get(t);
    };
  },
  function (t, e, r) {
    var n = r(62);
    t.exports = function (t) {
      return n(this, t).has(t);
    };
  },
  function (t, e, r) {
    var n = r(62);
    t.exports = function (t, e) {
      var r = n(this, t),
        i = r.size;
      return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
    };
  },
  function (t, e, r) {
    var n = r(127),
      i = r(132),
      a = r(233),
      s = r(237),
      o = r(89),
      l = r(10),
      h = r(83),
      c = r(85),
      u = 1,
      f = '[object Arguments]',
      p = '[object Array]',
      d = '[object Object]',
      m = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r, v, y, g) {
      var E = l(t),
        b = l(e),
        _ = E ? p : o(t),
        x = b ? p : o(e),
        S = (_ = _ == f ? d : _) == d,
        T = (x = x == f ? d : x) == d,
        I = _ == x;
      if (I && h(t)) {
        if (!h(e)) return !1;
        (E = !0), (S = !1);
      }
      if (I && !S)
        return g || (g = new n()), E || c(t) ? i(t, e, r, v, y, g) : a(t, e, _, r, v, y, g);
      if (!(r & u)) {
        var A = S && m.call(t, '__wrapped__'),
          P = T && m.call(e, '__wrapped__');
        if (A || P) {
          var w = A ? t.value() : t,
            C = P ? e.value() : e;
          return g || (g = new n()), y(w, C, r, v, g);
        }
      }
      return !!I && (g || (g = new n()), s(t, e, r, v, y, g));
    };
  },
  function (t, e, r) {
    var n = r(81),
      i = r(229),
      a = r(230);
    function s(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
    }
    (s.prototype.add = s.prototype.push = i), (s.prototype.has = a), (t.exports = s);
  },
  function (t, e) {
    var r = '__lodash_hash_undefined__';
    t.exports = function (t) {
      return this.__data__.set(t, r), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = r(234),
      a = r(79),
      s = r(132),
      o = r(235),
      l = r(236),
      h = 1,
      c = 2,
      u = '[object Boolean]',
      f = '[object Date]',
      p = '[object Error]',
      d = '[object Map]',
      m = '[object Number]',
      v = '[object RegExp]',
      y = '[object Set]',
      g = '[object String]',
      E = '[object Symbol]',
      b = '[object ArrayBuffer]',
      _ = '[object DataView]',
      x = n ? n.prototype : void 0,
      S = x ? x.valueOf : void 0;
    t.exports = function (t, e, r, n, x, T, I) {
      switch (r) {
        case _:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
          (t = t.buffer), (e = e.buffer);
        case b:
          return !(t.byteLength != e.byteLength || !T(new i(t), new i(e)));
        case u:
        case f:
        case m:
          return a(+t, +e);
        case p:
          return t.name == e.name && t.message == e.message;
        case v:
        case g:
          return t == e + '';
        case d:
          var A = o;
        case y:
          var P = n & h;
          if ((A || (A = l), t.size != e.size && !P)) return !1;
          var w = I.get(t);
          if (w) return w == e;
          (n |= c), I.set(t, e);
          var C = s(A(t), A(e), n, x, T, I);
          return I.delete(t), C;
        case E:
          if (S) return S.call(t) == S.call(e);
      }
      return !1;
    };
  },
  function (t, e, r) {
    var n = r(18).Uint8Array;
    t.exports = n;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t, n) {
          r[++e] = [n, t];
        }),
        r
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t) {
          r[++e] = t;
        }),
        r
      );
    };
  },
  function (t, e, r) {
    var n = r(238),
      i = 1,
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r, s, o, l) {
      var h = r & i,
        c = n(t),
        u = c.length;
      if (u != n(e).length && !h) return !1;
      for (var f = u; f--; ) {
        var p = c[f];
        if (!(h ? p in e : a.call(e, p))) return !1;
      }
      var d = l.get(t),
        m = l.get(e);
      if (d && m) return d == e && m == t;
      var v = !0;
      l.set(t, e), l.set(e, t);
      for (var y = h; ++f < u; ) {
        var g = t[(p = c[f])],
          E = e[p];
        if (s) var b = h ? s(E, g, p, e, t, l) : s(g, E, p, t, e, l);
        if (!(void 0 === b ? g === E || o(g, E, r, s, l) : b)) {
          v = !1;
          break;
        }
        y || (y = 'constructor' == p);
      }
      if (v && !y) {
        var _ = t.constructor,
          x = e.constructor;
        _ != x &&
          'constructor' in t &&
          'constructor' in e &&
          !('function' == typeof _ && _ instanceof _ && 'function' == typeof x && x instanceof x) &&
          (v = !1);
      }
      return l.delete(t), l.delete(e), v;
    };
  },
  function (t, e, r) {
    var n = r(133),
      i = r(134),
      a = r(63);
    t.exports = function (t) {
      return n(t, a, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n; ) {
        var s = t[r];
        e(s, r, t) && (a[i++] = s);
      }
      return a;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
      return n;
    };
  },
  function (t, e, r) {
    var n = r(38),
      i = r(30),
      a = '[object Arguments]';
    t.exports = function (t) {
      return i(t) && n(t) == a;
    };
  },
  function (t, e) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, e, r) {
    var n = r(38),
      i = r(86),
      a = r(30),
      s = {};
    (s['[object Float32Array]'] =
      s['[object Float64Array]'] =
      s['[object Int8Array]'] =
      s['[object Int16Array]'] =
      s['[object Int32Array]'] =
      s['[object Uint8Array]'] =
      s['[object Uint8ClampedArray]'] =
      s['[object Uint16Array]'] =
      s['[object Uint32Array]'] =
        !0),
      (s['[object Arguments]'] =
        s['[object Array]'] =
        s['[object ArrayBuffer]'] =
        s['[object Boolean]'] =
        s['[object DataView]'] =
        s['[object Date]'] =
        s['[object Error]'] =
        s['[object Function]'] =
        s['[object Map]'] =
        s['[object Number]'] =
        s['[object Object]'] =
        s['[object RegExp]'] =
        s['[object Set]'] =
        s['[object String]'] =
        s['[object WeakMap]'] =
          !1),
      (t.exports = function (t) {
        return a(t) && i(t.length) && !!s[n(t)];
      });
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e, r) {
    (function (t) {
      var n = r(129),
        i = e && !e.nodeType && e,
        a = i && 'object' == typeof t && t && !t.nodeType && t,
        s = a && a.exports === i && n.process,
        o = (function () {
          try {
            var t = a && a.require && a.require('util').types;
            return t || (s && s.binding && s.binding('util'));
          } catch (t) {}
        })();
      t.exports = o;
    }).call(this, r(137)(t));
  },
  function (t, e, r) {
    var n = r(138)(Object.keys, Object);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(29)(r(18), 'DataView');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(29)(r(18), 'Promise');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(29)(r(18), 'Set');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(140),
      i = r(63);
    t.exports = function (t) {
      for (var e = i(t), r = e.length; r--; ) {
        var a = e[r],
          s = t[a];
        e[r] = [a, s, n(s)];
      }
      return e;
    };
  },
  function (t, e, r) {
    var n = r(131),
      i = r(90),
      a = r(257),
      s = r(92),
      o = r(140),
      l = r(141),
      h = r(47),
      c = 1,
      u = 2;
    t.exports = function (t, e) {
      return s(t) && o(e)
        ? l(h(t), e)
        : function (r) {
            var s = i(r, t);
            return void 0 === s && s === e ? a(r, t) : n(e, s, c | u);
          };
    };
  },
  function (t, e, r) {
    var n = r(253),
      i =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      a = /\\(\\)?/g,
      s = n(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(''),
          t.replace(i, function (t, r, n, i) {
            e.push(n ? i.replace(a, '$1') : r || t);
          }),
          e
        );
      });
    t.exports = s;
  },
  function (t, e, r) {
    var n = r(254),
      i = 500;
    t.exports = function (t) {
      var e = n(t, function (t) {
          return r.size === i && r.clear(), t;
        }),
        r = e.cache;
      return e;
    };
  },
  function (t, e, r) {
    var n = r(81),
      i = 'Expected a function';
    function a(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e)) throw new TypeError(i);
      var r = function () {
        var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          a = r.cache;
        if (a.has(i)) return a.get(i);
        var s = t.apply(this, n);
        return (r.cache = a.set(i, s) || a), s;
      };
      return (r.cache = new (a.Cache || n)()), r;
    }
    (a.Cache = n), (t.exports = a);
  },
  function (t, e, r) {
    var n = r(256);
    t.exports = function (t) {
      return null == t ? '' : n(t);
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = r(142),
      a = r(10),
      s = r(66),
      o = 1 / 0,
      l = n ? n.prototype : void 0,
      h = l ? l.toString : void 0;
    t.exports = function t(e) {
      if ('string' == typeof e) return e;
      if (a(e)) return i(e, t) + '';
      if (s(e)) return h ? h.call(e) : '';
      var r = e + '';
      return '0' == r && 1 / e == -o ? '-0' : r;
    };
  },
  function (t, e, r) {
    var n = r(258),
      i = r(259);
    t.exports = function (t, e) {
      return null != t && i(t, e, n);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  function (t, e, r) {
    var n = r(65),
      i = r(64),
      a = r(10),
      s = r(84),
      o = r(86),
      l = r(47);
    t.exports = function (t, e, r) {
      for (var h = -1, c = (e = n(e, t)).length, u = !1; ++h < c; ) {
        var f = l(e[h]);
        if (!(u = null != t && r(t, f))) break;
        t = t[f];
      }
      return u || ++h != c
        ? u
        : !!(c = null == t ? 0 : t.length) && o(c) && s(f, c) && (a(t) || i(t));
    };
  },
  function (t, e, r) {
    var n = r(143),
      i = r(261),
      a = r(92),
      s = r(47);
    t.exports = function (t) {
      return a(t) ? n(s(t)) : i(t);
    };
  },
  function (t, e, r) {
    var n = r(91);
    t.exports = function (t) {
      return function (e) {
        return n(e, t);
      };
    };
  },
  function (t, e, r) {
    var n = r(94),
      i = 1 / 0,
      a = 1.7976931348623157e308;
    t.exports = function (t) {
      return t
        ? (t = n(t)) === i || t === -i
          ? (t < 0 ? -1 : 1) * a
          : t == t
          ? t
          : 0
        : 0 === t
        ? t
        : 0;
    };
  },
  function (t, e, r) {
    var n = r(264),
      i = /^\s+/;
    t.exports = function (t) {
      return t ? t.slice(0, n(t) + 1).replace(i, '') : t;
    };
  },
  function (t, e) {
    var r = /\s/;
    t.exports = function (t) {
      for (var e = t.length; e-- && r.test(t.charAt(e)); );
      return e;
    };
  },
  function (t, e, r) {
    var n = r(266);
    r(324),
      r(330),
      r(341),
      r(347),
      r(348),
      r(349),
      r(350),
      r(351),
      r(352),
      r(355),
      r(356),
      r(357),
      r(358),
      (t.exports = n);
  },
  function (t, e, r) {
    var n = r(267);
    t.exports = n;
  },
  function (t, e, r) {
    r(268),
      r(279),
      r(280),
      r(154),
      r(283),
      r(284),
      r(286),
      r(287),
      r(289),
      r(290),
      r(291),
      r(292),
      r(293),
      r(294),
      r(158),
      r(296),
      r(297),
      r(301),
      r(302),
      r(304),
      r(305),
      r(306),
      r(307),
      r(308),
      r(309),
      r(310),
      r(315),
      r(316),
      r(317),
      r(318),
      r(319),
      r(321);
    var n = r(323);
    t.exports = n.Array;
  },
  function (t, e, r) {
    var n = r(1),
      i = r(277);
    n(
      {
        target: 'Array',
        stat: !0,
        forced: !r(107)(function (t) {
          Array.from(t);
        }),
      },
      { from: i }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      a = i && !n.call({ 1: 2 }, 1);
    e.f = a
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function (t, e, r) {
    var n = r(0),
      i = r(14),
      a = r(12),
      s = r(145),
      o = r(33),
      l = r(271),
      h = r(6),
      c = n.TypeError,
      u = h('toPrimitive');
    t.exports = function (t, e) {
      if (!a(t) || s(t)) return t;
      var r,
        n = o(t, u);
      if (n) {
        if ((void 0 === e && (e = 'default'), (r = i(n, t, e)), !a(r) || s(r))) return r;
        throw c("Can't convert object to primitive value");
      }
      return void 0 === e && (e = 'number'), l(t, e);
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(14),
      a = r(5),
      s = r(12),
      o = n.TypeError;
    t.exports = function (t, e) {
      var r, n;
      if ('string' === e && a((r = t.toString)) && !s((n = i(r, t)))) return n;
      if (a((r = t.valueOf)) && !s((n = i(r, t)))) return n;
      if ('string' !== e && a((r = t.toString)) && !s((n = i(r, t)))) return n;
      throw o("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      a = r(72),
      s = n.WeakMap;
    t.exports = i(s) && /native code/.test(a(s));
  },
  function (t, e, r) {
    var n = r(16),
      i = r(274),
      a = r(95),
      s = r(17);
    t.exports = function (t, e) {
      for (var r = i(e), o = s.f, l = a.f, h = 0; h < r.length; h++) {
        var c = r[h];
        n(t, c) || o(t, c, l(e, c));
      }
    };
  },
  function (t, e, r) {
    var n = r(15),
      i = r(2),
      a = r(102),
      s = r(276),
      o = r(11),
      l = i([].concat);
    t.exports =
      n('Reflect', 'ownKeys') ||
      function (t) {
        var e = a.f(o(t)),
          r = s.f;
        return r ? l(e, r(t)) : e;
      };
  },
  function (t, e, r) {
    var n = r(34),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(21),
      a = r(14),
      s = r(7),
      o = r(278),
      l = r(153),
      h = r(42),
      c = r(4),
      u = r(52),
      f = r(75),
      p = r(76),
      d = n.Array;
    t.exports = function (t) {
      var e = s(t),
        r = h(this),
        n = arguments.length,
        m = n > 1 ? arguments[1] : void 0,
        v = void 0 !== m;
      v && (m = i(m, n > 2 ? arguments[2] : void 0));
      var y,
        g,
        E,
        b,
        _,
        x,
        S = p(e),
        T = 0;
      if (!S || (this == d && l(S)))
        for (y = c(e), g = r ? new this(y) : d(y); y > T; T++)
          (x = v ? m(e[T], T) : e[T]), u(g, T, x);
      else
        for (_ = (b = f(e, S)).next, g = r ? new this() : []; !(E = a(_, b)).done; T++)
          (x = v ? o(b, m, [E.value, T], !0) : E.value), u(g, T, x);
      return (g.length = T), g;
    };
  },
  function (t, e, r) {
    var n = r(11),
      i = r(152);
    t.exports = function (t, e, r, a) {
      try {
        return a ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        i(t, 'throw', e);
      }
    };
  },
  function (t, e, r) {
    r(1)({ target: 'Array', stat: !0 }, { isArray: r(35) });
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(0),
      a = r(9),
      s = r(42),
      o = r(52),
      l = i.Array;
    n(
      {
        target: 'Array',
        stat: !0,
        forced: a(function () {
          function t() {}
          return !(l.of.call(t) instanceof t);
        }),
      },
      {
        of: function () {
          for (var t = 0, e = arguments.length, r = new (s(this) ? this : l)(e); e > t; )
            o(r, t, arguments[t++]);
          return (r.length = e), r;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(19),
      i = r(17),
      a = r(11),
      s = r(24),
      o = r(282);
    t.exports = n
      ? Object.defineProperties
      : function (t, e) {
          a(t);
          for (var r, n = s(e), l = o(e), h = l.length, c = 0; h > c; ) i.f(t, (r = l[c++]), n[r]);
          return t;
        };
  },
  function (t, e, r) {
    var n = r(151),
      i = r(104);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(0),
      a = r(9),
      s = r(35),
      o = r(12),
      l = r(7),
      h = r(4),
      c = r(52),
      u = r(43),
      f = r(53),
      p = r(6),
      d = r(31),
      m = p('isConcatSpreadable'),
      v = i.TypeError,
      y =
        d >= 51 ||
        !a(function () {
          var t = [];
          return (t[m] = !1), t.concat()[0] !== t;
        }),
      g = f('concat'),
      E = function (t) {
        if (!o(t)) return !1;
        var e = t[m];
        return void 0 !== e ? !!e : s(t);
      };
    n(
      { target: 'Array', proto: !0, forced: !y || !g },
      {
        concat: function (t) {
          var e,
            r,
            n,
            i,
            a,
            s = l(this),
            o = u(s, 0),
            f = 0;
          for (e = -1, n = arguments.length; e < n; e++)
            if (((a = -1 === e ? s : arguments[e]), E(a))) {
              if (f + (i = h(a)) > 9007199254740991) throw v('Maximum allowed index exceeded');
              for (r = 0; r < i; r++, f++) r in a && c(o, f, a[r]);
            } else {
              if (f >= 9007199254740991) throw v('Maximum allowed index exceeded');
              c(o, f++, a);
            }
          return (o.length = f), o;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(1),
      i = r(285),
      a = r(8);
    n({ target: 'Array', proto: !0 }, { copyWithin: i }), a('copyWithin');
  },
  function (t, e, r) {
    'use strict';
    var n = r(7),
      i = r(50),
      a = r(4),
      s = Math.min;
    t.exports =
      [].copyWithin ||
      function (t, e) {
        var r = n(this),
          o = a(r),
          l = i(t, o),
          h = i(e, o),
          c = arguments.length > 2 ? arguments[2] : void 0,
          u = s((void 0 === c ? o : i(c, o)) - h, o - l),
          f = 1;
        for (h < l && l < h + u && ((f = -1), (h += u - 1), (l += u - 1)); u-- > 0; )
          h in r ? (r[l] = r[h]) : delete r[l], (l += f), (h += f);
        return r;
      };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).every;
    n(
      { target: 'Array', proto: !0, forced: !r(26)('every') },
      {
        every: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(1),
      i = r(288),
      a = r(8);
    n({ target: 'Array', proto: !0 }, { fill: i }), a('fill');
  },
  function (t, e, r) {
    'use strict';
    var n = r(7),
      i = r(50),
      a = r(4);
    t.exports = function (t) {
      for (
        var e = n(this),
          r = a(e),
          s = arguments.length,
          o = i(s > 1 ? arguments[1] : void 0, r),
          l = s > 2 ? arguments[2] : void 0,
          h = void 0 === l ? r : i(l, r);
        h > o;

      )
        e[o++] = t;
      return e;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).filter;
    n(
      { target: 'Array', proto: !0, forced: !r(53)('filter') },
      {
        filter: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).find,
      a = r(8),
      s = !0;
    'find' in [] &&
      Array(1).find(function () {
        s = !1;
      }),
      n(
        { target: 'Array', proto: !0, forced: s },
        {
          find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      a('find');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).findIndex,
      a = r(8),
      s = !0;
    'findIndex' in [] &&
      Array(1).findIndex(function () {
        s = !1;
      }),
      n(
        { target: 'Array', proto: !0, forced: s },
        {
          findIndex: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
      a('findIndex');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(157),
      a = r(7),
      s = r(4),
      o = r(34),
      l = r(43);
    n(
      { target: 'Array', proto: !0 },
      {
        flat: function () {
          var t = arguments.length ? arguments[0] : void 0,
            e = a(this),
            r = s(e),
            n = l(e, 0);
          return (n.length = i(n, e, e, r, 0, void 0 === t ? 1 : o(t))), n;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(157),
      a = r(20),
      s = r(7),
      o = r(4),
      l = r(43);
    n(
      { target: 'Array', proto: !0 },
      {
        flatMap: function (t) {
          var e,
            r = s(this),
            n = o(r);
          return (
            a(t),
            ((e = l(r, 0)).length = i(
              e,
              r,
              r,
              n,
              0,
              1,
              t,
              arguments.length > 1 ? arguments[1] : void 0
            )),
            e
          );
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(295);
    n({ target: 'Array', proto: !0, forced: [].forEach != i }, { forEach: i });
  },
  function (t, e, r) {
    'use strict';
    var n = r(25).forEach,
      i = r(26)('forEach');
    t.exports = i
      ? [].forEach
      : function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(2),
      a = r(103).indexOf,
      s = r(26),
      o = i([].indexOf),
      l = !!o && 1 / o([1], 1, -0) < 0,
      h = s('indexOf');
    n(
      { target: 'Array', proto: !0, forced: l || !h },
      {
        indexOf: function (t) {
          var e = arguments.length > 1 ? arguments[1] : void 0;
          return l ? o(this, t, e) || 0 : a(this, t, e);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(24),
      i = r(8),
      a = r(51),
      s = r(41),
      o = r(108),
      l = s.set,
      h = s.getterFor('Array Iterator');
    (t.exports = o(
      Array,
      'Array',
      function (t, e) {
        l(this, { type: 'Array Iterator', target: n(t), index: 0, kind: e });
      },
      function () {
        var t = h(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == r
          ? { value: n, done: !1 }
          : 'values' == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      'values'
    )),
      (a.Arguments = a.Array),
      i('keys'),
      i('values'),
      i('entries');
  },
  function (t, e, r) {
    'use strict';
    var n = r(159).IteratorPrototype,
      i = r(36),
      a = r(67),
      s = r(77),
      o = r(51),
      l = function () {
        return this;
      };
    t.exports = function (t, e, r) {
      var h = e + ' Iterator';
      return (t.prototype = i(n, { next: a(1, r) })), s(t, h, !1, !0), (o[h] = l), t;
    };
  },
  function (t, e, r) {
    var n = r(9);
    t.exports = !n(function () {
      function t() {}
      return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(5),
      a = n.String,
      s = n.TypeError;
    t.exports = function (t) {
      if ('object' == typeof t || i(t)) return t;
      throw s("Can't set " + a(t) + ' as a prototype');
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(2),
      a = r(40),
      s = r(24),
      o = r(26),
      l = i([].join),
      h = a != Object,
      c = o('join', ',');
    n(
      { target: 'Array', proto: !0, forced: h || !c },
      {
        join: function (t) {
          return l(s(this), void 0 === t ? ',' : t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(1),
      i = r(303);
    n({ target: 'Array', proto: !0, forced: i !== [].lastIndexOf }, { lastIndexOf: i });
  },
  function (t, e, r) {
    'use strict';
    var n = r(111),
      i = r(24),
      a = r(34),
      s = r(4),
      o = r(26),
      l = Math.min,
      h = [].lastIndexOf,
      c = !!h && 1 / [1].lastIndexOf(1, -0) < 0,
      u = o('lastIndexOf'),
      f = c || !u;
    t.exports = f
      ? function (t) {
          if (c) return n(h, this, arguments) || 0;
          var e = i(this),
            r = s(e),
            o = r - 1;
          for (
            arguments.length > 1 && (o = l(o, a(arguments[1]))), o < 0 && (o = r + o);
            o >= 0;
            o--
          )
            if (o in e && e[o] === t) return o || 0;
          return -1;
        }
      : h;
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).map;
    n(
      { target: 'Array', proto: !0, forced: !r(53)('map') },
      {
        map: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(160).left,
      a = r(26),
      s = r(31),
      o = r(54);
    n(
      { target: 'Array', proto: !0, forced: !a('reduce') || (!o && s > 79 && s < 83) },
      {
        reduce: function (t) {
          var e = arguments.length;
          return i(this, t, e, e > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(160).right,
      a = r(26),
      s = r(31),
      o = r(54);
    n(
      { target: 'Array', proto: !0, forced: !a('reduceRight') || (!o && s > 79 && s < 83) },
      {
        reduceRight: function (t) {
          return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(2),
      a = r(35),
      s = i([].reverse),
      o = [1, 2];
    n(
      { target: 'Array', proto: !0, forced: String(o) === String(o.reverse()) },
      {
        reverse: function () {
          return a(this) && (this.length = this.length), s(this);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(0),
      a = r(35),
      s = r(42),
      o = r(12),
      l = r(50),
      h = r(4),
      c = r(24),
      u = r(52),
      f = r(6),
      p = r(53),
      d = r(78),
      m = p('slice'),
      v = f('species'),
      y = i.Array,
      g = Math.max;
    n(
      { target: 'Array', proto: !0, forced: !m },
      {
        slice: function (t, e) {
          var r,
            n,
            i,
            f = c(this),
            p = h(f),
            m = l(t, p),
            E = l(void 0 === e ? p : e, p);
          if (
            a(f) &&
            ((r = f.constructor),
            s(r) && (r === y || a(r.prototype))
              ? (r = void 0)
              : o(r) && null === (r = r[v]) && (r = void 0),
            r === y || void 0 === r)
          )
            return d(f, m, E);
          for (n = new (void 0 === r ? y : r)(g(E - m, 0)), i = 0; m < E; m++, i++)
            m in f && u(n, i, f[m]);
          return (n.length = i), n;
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).some;
    n(
      { target: 'Array', proto: !0, forced: !r(26)('some') },
      {
        some: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(2),
      a = r(20),
      s = r(7),
      o = r(4),
      l = r(112),
      h = r(9),
      c = r(311),
      u = r(26),
      f = r(312),
      p = r(313),
      d = r(31),
      m = r(314),
      v = [],
      y = i(v.sort),
      g = i(v.push),
      E = h(function () {
        v.sort(void 0);
      }),
      b = h(function () {
        v.sort(null);
      }),
      _ = u('sort'),
      x = !h(function () {
        if (d) return d < 70;
        if (!(f && f > 3)) {
          if (p) return !0;
          if (m) return m < 603;
          var t,
            e,
            r,
            n,
            i = '';
          for (t = 65; t < 76; t++) {
            switch (((e = String.fromCharCode(t)), t)) {
              case 66:
              case 69:
              case 70:
              case 72:
                r = 3;
                break;
              case 68:
              case 71:
                r = 4;
                break;
              default:
                r = 2;
            }
            for (n = 0; n < 47; n++) v.push({ k: e + n, v: r });
          }
          for (
            v.sort(function (t, e) {
              return e.v - t.v;
            }),
              n = 0;
            n < v.length;
            n++
          )
            (e = v[n].k.charAt(0)), i.charAt(i.length - 1) !== e && (i += e);
          return 'DGBEFHACIJK' !== i;
        }
      });
    n(
      { target: 'Array', proto: !0, forced: E || !b || !_ || !x },
      {
        sort: function (t) {
          void 0 !== t && a(t);
          var e = s(this);
          if (x) return void 0 === t ? y(e) : y(e, t);
          var r,
            n,
            i = [],
            h = o(e);
          for (n = 0; n < h; n++) n in e && g(i, e[n]);
          for (
            c(
              i,
              (function (t) {
                return function (e, r) {
                  return void 0 === r
                    ? -1
                    : void 0 === e
                    ? 1
                    : void 0 !== t
                    ? +t(e, r) || 0
                    : l(e) > l(r)
                    ? 1
                    : -1;
                };
              })(t)
            ),
              r = i.length,
              n = 0;
            n < r;

          )
            e[n] = i[n++];
          for (; n < h; ) delete e[n++];
          return e;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(78),
      i = Math.floor,
      a = function (t, e) {
        var r = t.length,
          l = i(r / 2);
        return r < 8 ? s(t, e) : o(t, a(n(t, 0, l), e), a(n(t, l), e), e);
      },
      s = function (t, e) {
        for (var r, n, i = t.length, a = 1; a < i; ) {
          for (n = a, r = t[a]; n && e(t[n - 1], r) > 0; ) t[n] = t[--n];
          n !== a++ && (t[n] = r);
        }
        return t;
      },
      o = function (t, e, r, n) {
        for (var i = e.length, a = r.length, s = 0, o = 0; s < i || o < a; )
          t[s + o] =
            s < i && o < a ? (n(e[s], r[o]) <= 0 ? e[s++] : r[o++]) : s < i ? e[s++] : r[o++];
        return t;
      };
    t.exports = a;
  },
  function (t, e, r) {
    var n = r(32).match(/firefox\/(\d+)/i);
    t.exports = !!n && +n[1];
  },
  function (t, e, r) {
    var n = r(32);
    t.exports = /MSIE|Trident/.test(n);
  },
  function (t, e, r) {
    var n = r(32).match(/AppleWebKit\/(\d+)\./);
    t.exports = !!n && +n[1];
  },
  function (t, e, r) {
    r(113)('Array');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(0),
      a = r(50),
      s = r(34),
      o = r(4),
      l = r(7),
      h = r(43),
      c = r(52),
      u = r(53)('splice'),
      f = i.TypeError,
      p = Math.max,
      d = Math.min;
    n(
      { target: 'Array', proto: !0, forced: !u },
      {
        splice: function (t, e) {
          var r,
            n,
            i,
            u,
            m,
            v,
            y = l(this),
            g = o(y),
            E = a(t, g),
            b = arguments.length;
          if (
            (0 === b
              ? (r = n = 0)
              : 1 === b
              ? ((r = 0), (n = g - E))
              : ((r = b - 2), (n = d(p(s(e), 0), g - E))),
            g + r - n > 9007199254740991)
          )
            throw f('Maximum allowed length exceeded');
          for (i = h(y, n), u = 0; u < n; u++) (m = E + u) in y && c(i, u, y[m]);
          if (((i.length = n), r < n)) {
            for (u = E; u < g - n; u++) (v = u + r), (m = u + n) in y ? (y[v] = y[m]) : delete y[v];
            for (u = g; u > g - n + r; u--) delete y[u - 1];
          } else if (r > n)
            for (u = g - n; u > E; u--)
              (v = u + r - 1), (m = u + n - 1) in y ? (y[v] = y[m]) : delete y[v];
          for (u = 0; u < r; u++) y[u + E] = arguments[u + 2];
          return (y.length = g - n + r), i;
        },
      }
    );
  },
  function (t, e, r) {
    r(8)('flat');
  },
  function (t, e, r) {
    r(8)('flatMap');
  },
  function (t, e, r) {
    var n = r(106),
      i = r(27),
      a = r(320);
    n || i(Object.prototype, 'toString', a, { unsafe: !0 });
  },
  function (t, e, r) {
    'use strict';
    var n = r(106),
      i = r(74);
    t.exports = n
      ? {}.toString
      : function () {
          return '[object ' + i(this) + ']';
        };
  },
  function (t, e, r) {
    'use strict';
    var n = r(322).charAt,
      i = r(112),
      a = r(41),
      s = r(108),
      o = a.set,
      l = a.getterFor('String Iterator');
    s(
      String,
      'String',
      function (t) {
        o(this, { type: 'String Iterator', string: i(t), index: 0 });
      },
      function () {
        var t,
          e = l(this),
          r = e.string,
          i = e.index;
        return i >= r.length
          ? { value: void 0, done: !0 }
          : ((t = n(r, i)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, r) {
    var n = r(2),
      i = r(34),
      a = r(112),
      s = r(96),
      o = n(''.charAt),
      l = n(''.charCodeAt),
      h = n(''.slice),
      c = function (t) {
        return function (e, r) {
          var n,
            c,
            u = a(s(e)),
            f = i(r),
            p = u.length;
          return f < 0 || f >= p
            ? t
              ? ''
              : void 0
            : (n = l(u, f)) < 55296 ||
              n > 56319 ||
              f + 1 === p ||
              (c = l(u, f + 1)) < 56320 ||
              c > 57343
            ? t
              ? o(u, f)
              : n
            : t
            ? h(u, f, f + 2)
            : c - 56320 + ((n - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: c(!1), charAt: c(!0) };
  },
  function (t, e, r) {
    var n = r(0);
    t.exports = n;
  },
  function (t, e, r) {
    'use strict';
    r(325)(
      'Map',
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      r(329)
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(0),
      a = r(2),
      s = r(105),
      o = r(27),
      l = r(161),
      h = r(114),
      c = r(115),
      u = r(5),
      f = r(12),
      p = r(9),
      d = r(107),
      m = r(77),
      v = r(328);
    t.exports = function (t, e, r) {
      var y = -1 !== t.indexOf('Map'),
        g = -1 !== t.indexOf('Weak'),
        E = y ? 'set' : 'add',
        b = i[t],
        _ = b && b.prototype,
        x = b,
        S = {},
        T = function (t) {
          var e = a(_[t]);
          o(
            _,
            t,
            'add' == t
              ? function (t) {
                  return e(this, 0 === t ? 0 : t), this;
                }
              : 'delete' == t
              ? function (t) {
                  return !(g && !f(t)) && e(this, 0 === t ? 0 : t);
                }
              : 'get' == t
              ? function (t) {
                  return g && !f(t) ? void 0 : e(this, 0 === t ? 0 : t);
                }
              : 'has' == t
              ? function (t) {
                  return !(g && !f(t)) && e(this, 0 === t ? 0 : t);
                }
              : function (t, r) {
                  return e(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        s(
          t,
          !u(b) ||
            !(
              g ||
              (_.forEach &&
                !p(function () {
                  new b().entries().next();
                }))
            )
        )
      )
        (x = r.getConstructor(e, t, y, E)), l.enable();
      else if (s(t, !0)) {
        var I = new x(),
          A = I[E](g ? {} : -0, 1) != I,
          P = p(function () {
            I.has(1);
          }),
          w = d(function (t) {
            new b(t);
          }),
          C =
            !g &&
            p(function () {
              for (var t = new b(), e = 5; e--; ) t[E](e, e);
              return !t.has(-0);
            });
        w ||
          (((x = e(function (t, e) {
            c(t, _);
            var r = v(new b(), t, x);
            return null != e && h(e, r[E], { that: r, AS_ENTRIES: y }), r;
          })).prototype = _),
          (_.constructor = x)),
          (P || C) && (T('delete'), T('has'), y && T('get')),
          (C || A) && T(E),
          g && _.clear && delete _.clear;
      }
      return (
        (S[t] = x), n({ global: !0, forced: x != b }, S), m(x, t), g || r.setStrong(x, t, y), x
      );
    };
  },
  function (t, e, r) {
    var n = r(48),
      i = r(24),
      a = r(102).f,
      s = r(78),
      o =
        'object' == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return o && 'Window' == n(t)
        ? (function (t) {
            try {
              return a(t);
            } catch (t) {
              return s(o);
            }
          })(t)
        : a(i(t));
    };
  },
  function (t, e, r) {
    var n = r(9);
    t.exports = !n(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function (t, e, r) {
    var n = r(5),
      i = r(12),
      a = r(110);
    t.exports = function (t, e, r) {
      var s, o;
      return (
        a &&
          n((s = e.constructor)) &&
          s !== r &&
          i((o = s.prototype)) &&
          o !== r.prototype &&
          a(t, o),
        t
      );
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(17).f,
      i = r(36),
      a = r(116),
      s = r(21),
      o = r(115),
      l = r(114),
      h = r(108),
      c = r(113),
      u = r(19),
      f = r(161).fastKey,
      p = r(41),
      d = p.set,
      m = p.getterFor;
    t.exports = {
      getConstructor: function (t, e, r, h) {
        var c = t(function (t, n) {
            o(t, p),
              d(t, { type: e, index: i(null), first: void 0, last: void 0, size: 0 }),
              u || (t.size = 0),
              null != n && l(n, t[h], { that: t, AS_ENTRIES: r });
          }),
          p = c.prototype,
          v = m(e),
          y = function (t, e, r) {
            var n,
              i,
              a = v(t),
              s = g(t, e);
            return (
              s
                ? (s.value = r)
                : ((a.last = s =
                    {
                      index: (i = f(e, !0)),
                      key: e,
                      value: r,
                      previous: (n = a.last),
                      next: void 0,
                      removed: !1,
                    }),
                  a.first || (a.first = s),
                  n && (n.next = s),
                  u ? a.size++ : t.size++,
                  'F' !== i && (a.index[i] = s)),
              t
            );
          },
          g = function (t, e) {
            var r,
              n = v(t),
              i = f(e);
            if ('F' !== i) return n.index[i];
            for (r = n.first; r; r = r.next) if (r.key == e) return r;
          };
        return (
          a(p, {
            clear: function () {
              for (var t = v(this), e = t.index, r = t.first; r; )
                (r.removed = !0),
                  r.previous && (r.previous = r.previous.next = void 0),
                  delete e[r.index],
                  (r = r.next);
              (t.first = t.last = void 0), u ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var e = v(this),
                r = g(this, t);
              if (r) {
                var n = r.next,
                  i = r.previous;
                delete e.index[r.index],
                  (r.removed = !0),
                  i && (i.next = n),
                  n && (n.previous = i),
                  e.first == r && (e.first = n),
                  e.last == r && (e.last = i),
                  u ? e.size-- : this.size--;
              }
              return !!r;
            },
            forEach: function (t) {
              for (
                var e, r = v(this), n = s(t, arguments.length > 1 ? arguments[1] : void 0);
                (e = e ? e.next : r.first);

              )
                for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function (t) {
              return !!g(this, t);
            },
          }),
          a(
            p,
            r
              ? {
                  get: function (t) {
                    var e = g(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return y(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function (t) {
                    return y(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          u &&
            n(p, 'size', {
              get: function () {
                return v(this).size;
              },
            }),
          c
        );
      },
      setStrong: function (t, e, r) {
        var n = e + ' Iterator',
          i = m(e),
          a = m(n);
        h(
          t,
          e,
          function (t, e) {
            d(this, { type: n, target: t, state: i(t), kind: e, last: void 0 });
          },
          function () {
            for (var t = a(this), e = t.kind, r = t.last; r && r.removed; ) r = r.previous;
            return t.target && (t.last = r = r ? r.next : t.state.first)
              ? 'keys' == e
                ? { value: r.key, done: !1 }
                : 'values' == e
                ? { value: r.value, done: !1 }
                : { value: [r.key, r.value], done: !1 }
              : ((t.target = void 0), { value: void 0, done: !0 });
          },
          r ? 'entries' : 'values',
          !r,
          !0
        ),
          c(e);
      },
    };
  },
  function (t, e, r) {
    'use strict';
    var n,
      i,
      a,
      s,
      o = r(1),
      l = r(49),
      h = r(0),
      c = r(15),
      u = r(14),
      f = r(331),
      p = r(27),
      d = r(116),
      m = r(110),
      v = r(77),
      y = r(113),
      g = r(20),
      E = r(5),
      b = r(12),
      _ = r(115),
      x = r(72),
      S = r(114),
      T = r(107),
      I = r(332),
      A = r(162).set,
      P = r(334),
      w = r(337),
      C = r(338),
      D = r(164),
      M = r(339),
      O = r(41),
      F = r(105),
      k = r(6),
      R = r(340),
      L = r(54),
      N = r(31),
      V = k('species'),
      B = O.get,
      G = O.set,
      j = O.getterFor('Promise'),
      z = f && f.prototype,
      H = f,
      X = z,
      W = h.TypeError,
      U = h.document,
      q = h.process,
      Y = D.f,
      K = Y,
      Q = !!(U && U.createEvent && h.dispatchEvent),
      $ = E(h.PromiseRejectionEvent),
      Z = !1,
      J = F('Promise', function () {
        var t = x(H),
          e = t !== String(H);
        if (!e && 66 === N) return !0;
        if (l && !X.finally) return !0;
        if (N >= 51 && /native code/.test(t)) return !1;
        var r = new H(function (t) {
            t(1);
          }),
          n = function (t) {
            t(
              function () {},
              function () {}
            );
          };
        return (
          ((r.constructor = {})[V] = n),
          !(Z = r.then(function () {}) instanceof n) || (!e && R && !$)
        );
      }),
      tt =
        J ||
        !T(function (t) {
          H.all(t).catch(function () {});
        }),
      et = function (t) {
        var e;
        return !(!b(t) || !E((e = t.then))) && e;
      },
      rt = function (t, e) {
        if (!t.notified) {
          t.notified = !0;
          var r = t.reactions;
          P(function () {
            for (var n = t.value, i = 1 == t.state, a = 0; r.length > a; ) {
              var s,
                o,
                l,
                h = r[a++],
                c = i ? h.ok : h.fail,
                f = h.resolve,
                p = h.reject,
                d = h.domain;
              try {
                c
                  ? (i || (2 === t.rejection && st(t), (t.rejection = 1)),
                    !0 === c ? (s = n) : (d && d.enter(), (s = c(n)), d && (d.exit(), (l = !0))),
                    s === h.promise
                      ? p(W('Promise-chain cycle'))
                      : (o = et(s))
                      ? u(o, s, f, p)
                      : f(s))
                  : p(n);
              } catch (t) {
                d && !l && d.exit(), p(t);
              }
            }
            (t.reactions = []), (t.notified = !1), e && !t.rejection && it(t);
          });
        }
      },
      nt = function (t, e, r) {
        var n, i;
        Q
          ? (((n = U.createEvent('Event')).promise = e),
            (n.reason = r),
            n.initEvent(t, !1, !0),
            h.dispatchEvent(n))
          : (n = { promise: e, reason: r }),
          !$ && (i = h['on' + t])
            ? i(n)
            : 'unhandledrejection' === t && C('Unhandled promise rejection', r);
      },
      it = function (t) {
        u(A, h, function () {
          var e,
            r = t.facade,
            n = t.value;
          if (
            at(t) &&
            ((e = M(function () {
              L ? q.emit('unhandledRejection', n, r) : nt('unhandledrejection', r, n);
            })),
            (t.rejection = L || at(t) ? 2 : 1),
            e.error)
          )
            throw e.value;
        });
      },
      at = function (t) {
        return 1 !== t.rejection && !t.parent;
      },
      st = function (t) {
        u(A, h, function () {
          var e = t.facade;
          L ? q.emit('rejectionHandled', e) : nt('rejectionhandled', e, t.value);
        });
      },
      ot = function (t, e, r) {
        return function (n) {
          t(e, n, r);
        };
      },
      lt = function (t, e, r) {
        t.done || ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), rt(t, !0));
      },
      ht = function (t, e, r) {
        if (!t.done) {
          (t.done = !0), r && (t = r);
          try {
            if (t.facade === e) throw W("Promise can't be resolved itself");
            var n = et(e);
            n
              ? P(function () {
                  var r = { done: !1 };
                  try {
                    u(n, e, ot(ht, r, t), ot(lt, r, t));
                  } catch (e) {
                    lt(r, e, t);
                  }
                })
              : ((t.value = e), (t.state = 1), rt(t, !1));
          } catch (e) {
            lt({ done: !1 }, e, t);
          }
        }
      };
    if (
      J &&
      ((X = (H = function (t) {
        _(this, X), g(t), u(n, this);
        var e = B(this);
        try {
          t(ot(ht, e), ot(lt, e));
        } catch (t) {
          lt(e, t);
        }
      }).prototype),
      ((n = function (t) {
        G(this, {
          type: 'Promise',
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = d(X, {
        then: function (t, e) {
          var r = j(this),
            n = r.reactions,
            i = Y(I(this, H));
          return (
            (i.ok = !E(t) || t),
            (i.fail = E(e) && e),
            (i.domain = L ? q.domain : void 0),
            (r.parent = !0),
            (n[n.length] = i),
            0 != r.state && rt(r, !1),
            i.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (i = function () {
        var t = new n(),
          e = B(t);
        (this.promise = t), (this.resolve = ot(ht, e)), (this.reject = ot(lt, e));
      }),
      (D.f = Y =
        function (t) {
          return t === H || t === a ? new i(t) : K(t);
        }),
      !l && E(f) && z !== Object.prototype)
    ) {
      (s = z.then),
        Z ||
          (p(
            z,
            'then',
            function (t, e) {
              var r = this;
              return new H(function (t, e) {
                u(s, r, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          ),
          p(z, 'catch', X.catch, { unsafe: !0 }));
      try {
        delete z.constructor;
      } catch (t) {}
      m && m(z, X);
    }
    o({ global: !0, wrap: !0, forced: J }, { Promise: H }),
      v(H, 'Promise', !1, !0),
      y('Promise'),
      (a = c('Promise')),
      o(
        { target: 'Promise', stat: !0, forced: J },
        {
          reject: function (t) {
            var e = Y(this);
            return u(e.reject, void 0, t), e.promise;
          },
        }
      ),
      o(
        { target: 'Promise', stat: !0, forced: l || J },
        {
          resolve: function (t) {
            return w(l && this === a ? H : this, t);
          },
        }
      ),
      o(
        { target: 'Promise', stat: !0, forced: tt },
        {
          all: function (t) {
            var e = this,
              r = Y(e),
              n = r.resolve,
              i = r.reject,
              a = M(function () {
                var r = g(e.resolve),
                  a = [],
                  s = 0,
                  o = 1;
                S(t, function (t) {
                  var l = s++,
                    h = !1;
                  o++,
                    u(r, e, t).then(function (t) {
                      h || ((h = !0), (a[l] = t), --o || n(a));
                    }, i);
                }),
                  --o || n(a);
              });
            return a.error && i(a.value), r.promise;
          },
          race: function (t) {
            var e = this,
              r = Y(e),
              n = r.reject,
              i = M(function () {
                var i = g(e.resolve);
                S(t, function (t) {
                  u(i, e, t).then(r.resolve, n);
                });
              });
            return i.error && n(i.value), r.promise;
          },
        }
      );
  },
  function (t, e, r) {
    var n = r(0);
    t.exports = n.Promise;
  },
  function (t, e, r) {
    var n = r(11),
      i = r(333),
      a = r(6)('species');
    t.exports = function (t, e) {
      var r,
        s = n(t).constructor;
      return void 0 === s || null == (r = n(s)[a]) ? e : i(r);
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(42),
      a = r(69),
      s = n.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw s(a(t) + ' is not a constructor');
    };
  },
  function (t, e, r) {
    var n,
      i,
      a,
      s,
      o,
      l,
      h,
      c,
      u = r(0),
      f = r(21),
      p = r(95).f,
      d = r(162).set,
      m = r(163),
      v = r(335),
      y = r(336),
      g = r(54),
      E = u.MutationObserver || u.WebKitMutationObserver,
      b = u.document,
      _ = u.process,
      x = u.Promise,
      S = p(u, 'queueMicrotask'),
      T = S && S.value;
    T ||
      ((n = function () {
        var t, e;
        for (g && (t = _.domain) && t.exit(); i; ) {
          (e = i.fn), (i = i.next);
          try {
            e();
          } catch (t) {
            throw (i ? s() : (a = void 0), t);
          }
        }
        (a = void 0), t && t.enter();
      }),
      m || g || y || !E || !b
        ? !v && x && x.resolve
          ? (((h = x.resolve(void 0)).constructor = x),
            (c = f(h.then, h)),
            (s = function () {
              c(n);
            }))
          : g
          ? (s = function () {
              _.nextTick(n);
            })
          : ((d = f(d, u)),
            (s = function () {
              d(n);
            }))
        : ((o = !0),
          (l = b.createTextNode('')),
          new E(n).observe(l, { characterData: !0 }),
          (s = function () {
            l.data = o = !o;
          }))),
      (t.exports =
        T ||
        function (t) {
          var e = { fn: t, next: void 0 };
          a && (a.next = e), i || ((i = e), s()), (a = e);
        });
  },
  function (t, e, r) {
    var n = r(32),
      i = r(0);
    t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== i.Pebble;
  },
  function (t, e, r) {
    var n = r(32);
    t.exports = /web0s(?!.*chrome)/i.test(n);
  },
  function (t, e, r) {
    var n = r(11),
      i = r(12),
      a = r(164);
    t.exports = function (t, e) {
      if ((n(t), i(e) && e.constructor === t)) return e;
      var r = a.f(t);
      return (0, r.resolve)(e), r.promise;
    };
  },
  function (t, e, r) {
    var n = r(0);
    t.exports = function (t, e) {
      var r = n.console;
      r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, e));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    };
  },
  function (t, e) {
    t.exports = 'object' == typeof window;
  },
  function (t, e, r) {
    r(1)({ target: 'Array', stat: !0 }, { fromAsync: r(342) });
  },
  function (t, e, r) {
    'use strict';
    var n = r(21),
      i = r(7),
      a = r(42),
      s = r(343),
      o = r(75),
      l = r(76),
      h = r(33),
      c = r(345),
      u = r(15),
      f = r(6),
      p = r(165),
      d = r(346).toArray,
      m = f('asyncIterator'),
      v = c('Array').values;
    t.exports = function (t) {
      var e = this,
        r = arguments.length,
        c = r > 1 ? arguments[1] : void 0,
        f = r > 2 ? arguments[2] : void 0;
      return new (u('Promise'))(function (r) {
        var u = i(t);
        void 0 !== c && (c = n(c, f));
        var y = h(u, m),
          g = y ? void 0 : l(u) || v,
          E = a(e) ? new e() : [],
          b = y ? s(u, y) : new p(o(u, g));
        r(d(b, c, E));
      });
    };
  },
  function (t, e, r) {
    var n = r(14),
      i = r(165),
      a = r(11),
      s = r(75),
      o = r(33),
      l = r(6)('asyncIterator');
    t.exports = function (t, e) {
      var r = arguments.length < 2 ? o(t, l) : e;
      return r ? a(n(r, t)) : new i(s(t));
    };
  },
  function (t, e, r) {
    var n,
      i,
      a = r(0),
      s = r(70),
      o = r(5),
      l = r(36),
      h = r(109),
      c = r(27),
      u = r(6),
      f = r(49),
      p = u('asyncIterator'),
      d = a.AsyncIterator,
      m = s.AsyncIteratorPrototype;
    if (m) n = m;
    else if (o(d)) n = d.prototype;
    else if (s.USE_FUNCTION_CONSTRUCTOR || a.USE_FUNCTION_CONSTRUCTOR)
      try {
        (i = h(h(h(Function('return async function*(){}()')())))),
          h(i) === Object.prototype && (n = i);
      } catch (t) {}
    n ? f && (n = l(n)) : (n = {}),
      o(n[p]) ||
        c(n, p, function () {
          return this;
        }),
      (t.exports = n);
  },
  function (t, e, r) {
    var n = r(0);
    t.exports = function (t) {
      return n[t].prototype;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(0),
      i = r(14),
      a = r(20),
      s = r(11),
      o = r(15),
      l = r(33),
      h = n.TypeError,
      c = function (t) {
        var e = 0 == t,
          r = 1 == t,
          n = 2 == t,
          c = 3 == t;
        return function (t, u, f) {
          s(t);
          var p = o('Promise'),
            d = a(t.next),
            m = 0,
            v = void 0 !== u;
          return (
            (!v && e) || a(u),
            new p(function (a, o) {
              var y = function (e, r) {
                  try {
                    var n = l(t, 'return');
                    if (n)
                      return p.resolve(i(n, t)).then(
                        function () {
                          e(r);
                        },
                        function (t) {
                          o(t);
                        }
                      );
                  } catch (t) {
                    return o(t);
                  }
                  e(r);
                },
                g = function (t) {
                  y(o, t);
                },
                E = function () {
                  try {
                    if (e && m > 9007199254740991 && v)
                      throw h('The allowed number of iterations has been exceeded');
                    p.resolve(s(i(d, t))).then(function (t) {
                      try {
                        if (s(t).done) e ? ((f.length = m), a(f)) : a(!c && (n || void 0));
                        else {
                          var i = t.value;
                          v
                            ? p.resolve(e ? u(i, m) : u(i)).then(function (t) {
                                r
                                  ? E()
                                  : n
                                  ? t
                                    ? E()
                                    : y(a, !1)
                                  : e
                                  ? ((f[m++] = t), E())
                                  : t
                                  ? y(a, c || i)
                                  : E();
                              }, g)
                            : ((f[m++] = i), E());
                        }
                      } catch (t) {
                        g(t);
                      }
                    }, g);
                  } catch (t) {
                    g(t);
                  }
                };
              E();
            })
          );
        };
      };
    t.exports = { toArray: c(0), forEach: c(1), every: c(2), some: c(3), find: c(4) };
  },
  function (t, e, r) {
    r(154);
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).filterReject,
      a = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        filterOut: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      a('filterOut');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(25).filterReject,
      a = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        filterReject: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      a('filterReject');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(166).findLast,
      a = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        findLast: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      a('findLast');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(166).findLastIndex,
      a = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        findLastIndex: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      a('findLastIndex');
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(353),
      a = r(156),
      s = r(8);
    n(
      { target: 'Array', proto: !0 },
      {
        groupBy: function (t) {
          var e = arguments.length > 1 ? arguments[1] : void 0;
          return i(this, t, e, a);
        },
      }
    ),
      s('groupBy');
  },
  function (t, e, r) {
    var n = r(0),
      i = r(21),
      a = r(2),
      s = r(40),
      o = r(7),
      l = r(68),
      h = r(4),
      c = r(36),
      u = r(354),
      f = n.Array,
      p = a([].push);
    t.exports = function (t, e, r, n) {
      for (var a, d, m, v = o(t), y = s(v), g = i(e, r), E = c(null), b = h(y), _ = 0; b > _; _++)
        (m = y[_]), (d = l(g(m, _, v))) in E ? p(E[d], m) : (E[d] = [m]);
      if (n && (a = n(v)) !== f) for (d in E) E[d] = u(a, E[d]);
      return E;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = 0, n = e.length, i = new t(n); n > r; ) i[r] = e[r++];
      return i;
    };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(35),
      a = Object.isFrozen,
      s = function (t, e) {
        if (!a || !i(t) || !a(t)) return !1;
        for (var r, n = 0, s = t.length; n < s; )
          if (!('string' == typeof (r = t[n++]) || (e && void 0 === r))) return !1;
        return 0 !== s;
      };
    n(
      { target: 'Array', stat: !0 },
      {
        isTemplateObject: function (t) {
          if (!s(t, !0)) return !1;
          var e = t.raw;
          return !(e.length !== t.length || !s(e, !1));
        },
      }
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(19),
      i = r(8),
      a = r(7),
      s = r(4),
      o = r(17).f;
    !n ||
      'lastItem' in [] ||
      (o(Array.prototype, 'lastItem', {
        configurable: !0,
        get: function () {
          var t = a(this),
            e = s(t);
          return 0 == e ? void 0 : t[e - 1];
        },
        set: function (t) {
          var e = a(this),
            r = s(e);
          return (e[0 == r ? 0 : r - 1] = t);
        },
      }),
      i('lastItem'));
  },
  function (t, e, r) {
    'use strict';
    var n = r(19),
      i = r(8),
      a = r(7),
      s = r(4),
      o = r(17).f;
    !n ||
      'lastIndex' in [] ||
      (o(Array.prototype, 'lastIndex', {
        configurable: !0,
        get: function () {
          var t = a(this),
            e = s(t);
          return 0 == e ? 0 : e - 1;
        },
      }),
      i('lastIndex'));
  },
  function (t, e, r) {
    'use strict';
    var n = r(1),
      i = r(8);
    n({ target: 'Array', proto: !0 }, { uniqueBy: r(359) }), i('uniqueBy');
  },
  function (t, e, r) {
    'use strict';
    var n = r(15),
      i = r(2),
      a = r(20),
      s = r(4),
      o = r(7),
      l = r(43),
      h = n('Map'),
      c = h.prototype,
      u = i(c.forEach),
      f = i(c.has),
      p = i(c.set),
      d = i([].push);
    t.exports = function (t) {
      var e,
        r,
        n,
        i = o(this),
        c = s(i),
        m = l(i, 0),
        v = new h(),
        y =
          null != t
            ? a(t)
            : function (t) {
                return t;
              };
      for (e = 0; e < c; e++) (n = y((r = i[e]))), f(v, n) || p(v, n, r);
      return (
        u(v, function (t) {
          d(m, t);
        }),
        m
      );
    };
  },
  function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
    'undefined' != typeof navigator &&
      ((root = window || {}),
      (factory = function (window) {
        'use strict';
        var svgNS = 'http://www.w3.org/2000/svg',
          locationHref = '',
          initialDefaultFrame = -999999,
          subframeEnabled = !0,
          idPrefix = '',
          expressionsPlugin,
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          cachedColors = {},
          bmRnd,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};
        function ProjectInterface() {
          return {};
        }
        !(function () {
          var t,
            e = [
              'abs',
              'acos',
              'acosh',
              'asin',
              'asinh',
              'atan',
              'atanh',
              'atan2',
              'ceil',
              'cbrt',
              'expm1',
              'clz32',
              'cos',
              'cosh',
              'exp',
              'floor',
              'fround',
              'hypot',
              'imul',
              'log',
              'log1p',
              'log2',
              'log10',
              'max',
              'min',
              'pow',
              'random',
              'round',
              'sign',
              'sin',
              'sinh',
              'sqrt',
              'tan',
              'tanh',
              'trunc',
              'E',
              'LN10',
              'LN2',
              'LOG10E',
              'LOG2E',
              'PI',
              'SQRT1_2',
              'SQRT2',
            ],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
        })(),
          (BMMath.random = Math.random),
          (BMMath.abs = function (t) {
            if ('object' === typeof t && t.length) {
              var e,
                r = createSizedArray(t.length),
                n = t.length;
              for (e = 0; e < n; e += 1) r[e] = Math.abs(t[e]);
              return r;
            }
            return Math.abs(t);
          });
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = 0.5519;
        function roundValues(t) {
          bmRnd = t
            ? Math.round
            : function (t) {
                return t;
              };
        }
        function styleDiv(t) {
          (t.style.position = 'absolute'),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.display = 'block'),
            (t.style.transformOrigin = '0 0'),
            (t.style.webkitTransformOrigin = '0 0'),
            (t.style.backfaceVisibility = 'visible'),
            (t.style.webkitBackfaceVisibility = 'visible'),
            (t.style.transformStyle = 'preserve-3d'),
            (t.style.webkitTransformStyle = 'preserve-3d'),
            (t.style.mozTransformStyle = 'preserve-3d');
        }
        function BMEnterFrameEvent(t, e, r, n) {
          (this.type = t),
            (this.currentTime = e),
            (this.totalTime = r),
            (this.direction = n < 0 ? -1 : 1);
        }
        function BMCompleteEvent(t, e) {
          (this.type = t), (this.direction = e < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(t, e, r, n) {
          (this.type = t),
            (this.currentLoop = r),
            (this.totalLoops = e),
            (this.direction = n < 0 ? -1 : 1);
        }
        function BMSegmentStartEvent(t, e, r) {
          (this.type = t), (this.firstFrame = e), (this.totalFrames = r);
        }
        function BMDestroyEvent(t, e) {
          (this.type = t), (this.target = e);
        }
        function BMRenderFrameErrorEvent(t, e) {
          (this.type = 'renderFrameError'), (this.nativeError = t), (this.currentTime = e);
        }
        function BMConfigErrorEvent(t) {
          (this.type = 'configError'), (this.nativeError = t);
        }
        function BMAnimationConfigErrorEvent(t, e) {
          (this.type = t), (this.nativeError = e);
        }
        roundValues(!1);
        var createElementID =
            ((_count = 0),
            function () {
              return idPrefix + '__lottie_element_' + (_count += 1);
            }),
          _count;
        function HSVtoRGB(t, e, r) {
          var n, i, a, s, o, l, h, c;
          switch (
            ((l = r * (1 - e)),
            (h = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e)),
            (c = r * (1 - (1 - o) * e)),
            s % 6)
          ) {
            case 0:
              (n = r), (i = c), (a = l);
              break;
            case 1:
              (n = h), (i = r), (a = l);
              break;
            case 2:
              (n = l), (i = r), (a = c);
              break;
            case 3:
              (n = l), (i = h), (a = r);
              break;
            case 4:
              (n = c), (i = l), (a = r);
              break;
            case 5:
              (n = r), (i = l), (a = h);
          }
          return [n, i, a];
        }
        function RGBtoHSV(t, e, r) {
          var n,
            i = Math.max(t, e, r),
            a = Math.min(t, e, r),
            s = i - a,
            o = 0 === i ? 0 : s / i,
            l = i / 255;
          switch (i) {
            case a:
              n = 0;
              break;
            case t:
              (n = e - r + s * (e < r ? 6 : 0)), (n /= 6 * s);
              break;
            case e:
              (n = r - t + 2 * s), (n /= 6 * s);
              break;
            case r:
              (n = t - e + 4 * s), (n /= 6 * s);
          }
          return [n, o, l];
        }
        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[1] += e), r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[2] += e), r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[0] += e / 360),
            r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        var rgbToHex = (function () {
          var t,
            e,
            r = [];
          for (t = 0; t < 256; t += 1) (e = t.toString(16)), (r[t] = 1 === e.length ? '0' + e : e);
          return function (t, e, n) {
            return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), '#' + r[t] + r[e] + r[n];
          };
        })();
        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function (t, e) {
            if (this._cbs[t]) for (var r = this._cbs[t], n = 0; n < r.length; n += 1) r[n](e);
          },
          addEventListener: function (t, e) {
            return (
              this._cbs[t] || (this._cbs[t] = []),
              this._cbs[t].push(e),
              function () {
                this.removeEventListener(t, e);
              }.bind(this)
            );
          },
          removeEventListener: function (t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, n = this._cbs[t].length; r < n; )
                  this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), (r -= 1), (n -= 1)),
                    (r += 1);
                this._cbs[t].length || (this._cbs[t] = null);
              }
            } else this._cbs[t] = null;
          },
        };
        var createTypedArray = (function () {
          function t(t, e) {
            var r,
              n = 0,
              i = [];
            switch (t) {
              case 'int16':
              case 'uint8c':
                r = 1;
                break;
              default:
                r = 1.1;
            }
            for (n = 0; n < e; n += 1) i.push(r);
            return i;
          }
          return 'function' == typeof Uint8ClampedArray && 'function' == typeof Float32Array
            ? function (e, r) {
                return 'float32' === e
                  ? new Float32Array(r)
                  : 'int16' === e
                  ? new Int16Array(r)
                  : 'uint8c' === e
                  ? new Uint8ClampedArray(r)
                  : t(e, r);
              }
            : t;
        })();
        function createSizedArray(t) {
          return Array.apply(null, { length: t });
        }
        function createNS(t) {
          return document.createElementNS(svgNS, t);
        }
        function createTag(t) {
          return document.createElement(t);
        }
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) &&
              (this.dynamicProperties.push(t),
              this.container.addDynamicProperty(this),
              (this._isAnimated = !0));
          },
          iterateDynamicProperties: function () {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1)
              this.dynamicProperties[t].getValue(),
                this.dynamicProperties[t]._mdf && (this._mdf = !0);
          },
          initDynamicPropertyContainer: function (t) {
            (this.container = t),
              (this.dynamicProperties = []),
              (this._mdf = !1),
              (this._isAnimated = !1);
          },
        };
        var getBlendMode =
            ((blendModeEnums = {
              0: 'source-over',
              1: 'multiply',
              2: 'screen',
              3: 'overlay',
              4: 'darken',
              5: 'lighten',
              6: 'color-dodge',
              7: 'color-burn',
              8: 'hard-light',
              9: 'soft-light',
              10: 'difference',
              11: 'exclusion',
              12: 'hue',
              13: 'saturation',
              14: 'color',
              15: 'luminosity',
            }),
            function (t) {
              return blendModeEnums[t] || '';
            }),
          blendModeEnums,
          lineCapEnum = { 1: 'butt', 2: 'round', 3: 'square' },
          lineJoinEnum = { 1: 'miter', 2: 'round', 3: 'bevel' },
          Matrix = (function () {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              n = Math.round;
            function i() {
              return (
                (this.props[0] = 1),
                (this.props[1] = 0),
                (this.props[2] = 0),
                (this.props[3] = 0),
                (this.props[4] = 0),
                (this.props[5] = 1),
                (this.props[6] = 0),
                (this.props[7] = 0),
                (this.props[8] = 0),
                (this.props[9] = 0),
                (this.props[10] = 1),
                (this.props[11] = 0),
                (this.props[12] = 0),
                (this.props[13] = 0),
                (this.props[14] = 0),
                (this.props[15] = 1),
                this
              );
            }
            function a(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function s(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1);
            }
            function o(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1);
            }
            function l(r) {
              if (0 === r) return this;
              var n = t(r),
                i = e(r);
              return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function h(t, e) {
              return this._t(1, e, t, 1, 0, 0);
            }
            function c(t, e) {
              return this.shear(r(t), r(e));
            }
            function u(n, i) {
              var a = t(i),
                s = e(i);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(t, e, r) {
              return (
                r || 0 === r || (r = 1),
                1 === t && 1 === e && 1 === r
                  ? this
                  : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
              );
            }
            function p(t, e, r, n, i, a, s, o, l, h, c, u, f, p, d, m) {
              return (
                (this.props[0] = t),
                (this.props[1] = e),
                (this.props[2] = r),
                (this.props[3] = n),
                (this.props[4] = i),
                (this.props[5] = a),
                (this.props[6] = s),
                (this.props[7] = o),
                (this.props[8] = l),
                (this.props[9] = h),
                (this.props[10] = c),
                (this.props[11] = u),
                (this.props[12] = f),
                (this.props[13] = p),
                (this.props[14] = d),
                (this.props[15] = m),
                this
              );
            }
            function d(t, e, r) {
              return (
                (r = r || 0),
                0 !== t || 0 !== e || 0 !== r
                  ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)
                  : this
              );
            }
            function m(t, e, r, n, i, a, s, o, l, h, c, u, f, p, d, m) {
              var v = this.props;
              if (
                1 === t &&
                0 === e &&
                0 === r &&
                0 === n &&
                0 === i &&
                1 === a &&
                0 === s &&
                0 === o &&
                0 === l &&
                0 === h &&
                1 === c &&
                0 === u
              )
                return (
                  (v[12] = v[12] * t + v[15] * f),
                  (v[13] = v[13] * a + v[15] * p),
                  (v[14] = v[14] * c + v[15] * d),
                  (v[15] *= m),
                  (this._identityCalculated = !1),
                  this
                );
              var y = v[0],
                g = v[1],
                E = v[2],
                b = v[3],
                _ = v[4],
                x = v[5],
                S = v[6],
                T = v[7],
                I = v[8],
                A = v[9],
                P = v[10],
                w = v[11],
                C = v[12],
                D = v[13],
                M = v[14],
                O = v[15];
              return (
                (v[0] = y * t + g * i + E * l + b * f),
                (v[1] = y * e + g * a + E * h + b * p),
                (v[2] = y * r + g * s + E * c + b * d),
                (v[3] = y * n + g * o + E * u + b * m),
                (v[4] = _ * t + x * i + S * l + T * f),
                (v[5] = _ * e + x * a + S * h + T * p),
                (v[6] = _ * r + x * s + S * c + T * d),
                (v[7] = _ * n + x * o + S * u + T * m),
                (v[8] = I * t + A * i + P * l + w * f),
                (v[9] = I * e + A * a + P * h + w * p),
                (v[10] = I * r + A * s + P * c + w * d),
                (v[11] = I * n + A * o + P * u + w * m),
                (v[12] = C * t + D * i + M * l + O * f),
                (v[13] = C * e + D * a + M * h + O * p),
                (v[14] = C * r + D * s + M * c + O * d),
                (v[15] = C * n + D * o + M * u + O * m),
                (this._identityCalculated = !1),
                this
              );
            }
            function v() {
              return (
                this._identityCalculated ||
                  ((this._identity = !(
                    1 !== this.props[0] ||
                    0 !== this.props[1] ||
                    0 !== this.props[2] ||
                    0 !== this.props[3] ||
                    0 !== this.props[4] ||
                    1 !== this.props[5] ||
                    0 !== this.props[6] ||
                    0 !== this.props[7] ||
                    0 !== this.props[8] ||
                    0 !== this.props[9] ||
                    1 !== this.props[10] ||
                    0 !== this.props[11] ||
                    0 !== this.props[12] ||
                    0 !== this.props[13] ||
                    0 !== this.props[14] ||
                    1 !== this.props[15]
                  )),
                  (this._identityCalculated = !0)),
                this._identity
              );
            }
            function y(t) {
              for (var e = 0; e < 16; ) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1;
              }
              return !0;
            }
            function g(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t;
            }
            function E(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e];
            }
            function b(t, e, r) {
              return {
                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14],
              };
            }
            function _(t, e, r) {
              return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12];
            }
            function x(t, e, r) {
              return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13];
            }
            function S(t, e, r) {
              return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14];
            }
            function T() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                n = -this.props[4] / t,
                i = this.props[0] / t,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix();
              return (
                (o.props[0] = e),
                (o.props[1] = r),
                (o.props[4] = n),
                (o.props[5] = i),
                (o.props[12] = a),
                (o.props[13] = s),
                o
              );
            }
            function I(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
            }
            function A(t) {
              var e,
                r = t.length,
                n = [];
              for (e = 0; e < r; e += 1) n[e] = I(t[e]);
              return n;
            }
            function P(t, e, r) {
              var n = createTypedArray('float32', 6);
              if (this.isIdentity())
                (n[0] = t[0]),
                  (n[1] = t[1]),
                  (n[2] = e[0]),
                  (n[3] = e[1]),
                  (n[4] = r[0]),
                  (n[5] = r[1]);
              else {
                var i = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                (n[0] = t[0] * i + t[1] * s + l),
                  (n[1] = t[0] * a + t[1] * o + h),
                  (n[2] = e[0] * i + e[1] * s + l),
                  (n[3] = e[0] * a + e[1] * o + h),
                  (n[4] = r[0] * i + r[1] * s + l),
                  (n[5] = r[0] * a + r[1] * o + h);
              }
              return n;
            }
            function w(t, e, r) {
              return this.isIdentity()
                ? [t, e, r]
                : [
                    t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                    t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                    t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14],
                  ];
            }
            function C(t, e) {
              if (this.isIdentity()) return t + ',' + e;
              var r = this.props;
              return (
                Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
                ',' +
                Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
              );
            }
            function D() {
              for (var t = 0, e = this.props, r = 'matrix3d('; t < 16; )
                (r += n(1e4 * e[t]) / 1e4), (r += 15 === t ? ')' : ','), (t += 1);
              return r;
            }
            function M(t) {
              return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0) ? n(1e4 * t) / 1e4 : t;
            }
            function O() {
              var t = this.props;
              return (
                'matrix(' +
                M(t[0]) +
                ',' +
                M(t[1]) +
                ',' +
                M(t[4]) +
                ',' +
                M(t[5]) +
                ',' +
                M(t[12]) +
                ',' +
                M(t[13]) +
                ')'
              );
            }
            return function () {
              (this.reset = i),
                (this.rotate = a),
                (this.rotateX = s),
                (this.rotateY = o),
                (this.rotateZ = l),
                (this.skew = c),
                (this.skewFromAxis = u),
                (this.shear = h),
                (this.scale = f),
                (this.setTransform = p),
                (this.translate = d),
                (this.transform = m),
                (this.applyToPoint = b),
                (this.applyToX = _),
                (this.applyToY = x),
                (this.applyToZ = S),
                (this.applyToPointArray = w),
                (this.applyToTriplePoints = P),
                (this.applyToPointStringified = C),
                (this.toCSS = D),
                (this.to2dCSS = O),
                (this.clone = g),
                (this.cloneFromProps = E),
                (this.equals = y),
                (this.inversePoints = A),
                (this.inversePoint = I),
                (this.getInverseMatrix = T),
                (this._t = this.transform),
                (this.isIdentity = v),
                (this._identity = !0),
                (this._identityCalculated = !1),
                (this.props = createTypedArray('float32', 16)),
                this.reset();
            };
          })();
        !(function (t, e) {
          var r,
            n = this,
            i = 256,
            a = 6,
            s = 'random',
            o = e.pow(i, a),
            l = e.pow(2, 52),
            h = 2 * l,
            c = i - 1;
          function u(t) {
            var e,
              r = t.length,
              n = this,
              a = 0,
              s = (n.i = n.j = 0),
              o = (n.S = []);
            for (r || (t = [r++]); a < i; ) o[a] = a++;
            for (a = 0; a < i; a++) (o[a] = o[(s = c & (s + t[a % r] + (e = o[a])))]), (o[s] = e);
            n.g = function (t) {
              for (var e, r = 0, a = n.i, s = n.j, o = n.S; t--; )
                (e = o[(a = c & (a + 1))]),
                  (r = r * i + o[c & ((o[a] = o[(s = c & (s + e))]) + (o[s] = e))]);
              return (n.i = a), (n.j = s), r;
            };
          }
          function f(t, e) {
            return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
          }
          function p(t, e) {
            for (var r, n = t + '', i = 0; i < n.length; )
              e[c & i] = c & ((r ^= 19 * e[c & i]) + n.charCodeAt(i++));
            return d(e);
          }
          function d(t) {
            return String.fromCharCode.apply(0, t);
          }
          (e['seed' + s] = function (c, m, v) {
            var y = [],
              g = p(
                (function t(e, r) {
                  var n,
                    i = [],
                    a = typeof e;
                  if (r && 'object' == a)
                    for (n in e)
                      try {
                        i.push(t(e[n], r - 1));
                      } catch (t) {}
                  return i.length ? i : 'string' == a ? e : e + '\0';
                })(
                  (m = !0 === m ? { entropy: !0 } : m || {}).entropy
                    ? [c, d(t)]
                    : null === c
                    ? (function () {
                        try {
                          if (r) return d(r.randomBytes(i));
                          var e = new Uint8Array(i);
                          return (n.crypto || n.msCrypto).getRandomValues(e), d(e);
                        } catch (e) {
                          var a = n.navigator,
                            s = a && a.plugins;
                          return [+new Date(), n, s, n.screen, d(t)];
                        }
                      })()
                    : c,
                  3
                ),
                y
              ),
              E = new u(y),
              b = function () {
                for (var t = E.g(a), e = o, r = 0; t < l; )
                  (t = (t + r) * i), (e *= i), (r = E.g(1));
                for (; t >= h; ) (t /= 2), (e /= 2), (r >>>= 1);
                return (t + r) / e;
              };
            return (
              (b.int32 = function () {
                return 0 | E.g(4);
              }),
              (b.quick = function () {
                return E.g(4) / 4294967296;
              }),
              (b.double = b),
              p(d(E.S), t),
              (
                m.pass ||
                v ||
                function (t, r, n, i) {
                  return (
                    i &&
                      (i.S && f(i, E),
                      (t.state = function () {
                        return f(E, {});
                      })),
                    n ? ((e[s] = t), r) : t
                  );
                }
              )(b, g, 'global' in m ? m.global : this == e, m.state)
            );
          }),
            p(e.random(), t);
        })([], BMMath);
        var BezierFactory = (function () {
          var t = {
              getBezierEasing: function (t, r, n, i, a) {
                var s = a || ('bez_' + t + '_' + r + '_' + n + '_' + i).replace(/\./g, 'p');
                if (e[s]) return e[s];
                var o = new p([t, r, n, i]);
                return (e[s] = o), o;
              },
            },
            e = {};
          var r = 4,
            n = 1e-7,
            i = 10,
            a = 11,
            s = 1 / (a - 1),
            o = 'function' == typeof Float32Array;
          function l(t, e) {
            return 1 - 3 * e + 3 * t;
          }
          function h(t, e) {
            return 3 * e - 6 * t;
          }
          function c(t) {
            return 3 * t;
          }
          function u(t, e, r) {
            return ((l(e, r) * t + h(e, r)) * t + c(e)) * t;
          }
          function f(t, e, r) {
            return 3 * l(e, r) * t * t + 2 * h(e, r) * t + c(e);
          }
          function p(t) {
            (this._p = t),
              (this._mSampleValues = o ? new Float32Array(a) : new Array(a)),
              (this._precomputed = !1),
              (this.get = this.get.bind(this));
          }
          return (
            (p.prototype = {
              get: function (t) {
                var e = this._p[0],
                  r = this._p[1],
                  n = this._p[2],
                  i = this._p[3];
                return (
                  this._precomputed || this._precompute(),
                  e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : u(this._getTForX(t), r, i)
                );
              },
              _precompute: function () {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  n = this._p[3];
                (this._precomputed = !0), (t === e && r === n) || this._calcSampleValues();
              },
              _calcSampleValues: function () {
                for (var t = this._p[0], e = this._p[2], r = 0; r < a; ++r)
                  this._mSampleValues[r] = u(r * s, t, e);
              },
              _getTForX: function (t) {
                for (
                  var e = this._p[0],
                    o = this._p[2],
                    l = this._mSampleValues,
                    h = 0,
                    c = 1,
                    p = a - 1;
                  c !== p && l[c] <= t;
                  ++c
                )
                  h += s;
                var d = h + ((t - l[--c]) / (l[c + 1] - l[c])) * s,
                  m = f(d, e, o);
                return m >= 0.001
                  ? (function (t, e, n, i) {
                      for (var a = 0; a < r; ++a) {
                        var s = f(e, n, i);
                        if (0 === s) return e;
                        e -= (u(e, n, i) - t) / s;
                      }
                      return e;
                    })(t, d, e, o)
                  : 0 === m
                  ? d
                  : (function (t, e, r, a, s) {
                      var o,
                        l,
                        h = 0;
                      do {
                        (o = u((l = e + (r - e) / 2), a, s) - t) > 0 ? (r = l) : (e = l);
                      } while (Math.abs(o) > n && ++h < i);
                      return l;
                    })(t, h, h + s, e, o);
              },
            }),
            t
          );
        })();
        function extendPrototype(t, e) {
          var r,
            n,
            i = t.length;
          for (r = 0; r < i; r += 1)
            for (var a in (n = t[r].prototype))
              Object.prototype.hasOwnProperty.call(n, a) && (e.prototype[a] = n[a]);
        }
        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e);
        }
        function createProxyFunction(t) {
          function e() {}
          return (e.prototype = t), e;
        }
        function bezFunction() {
          var t = Math;
          function e(t, e, r, n, i, a) {
            var s = t * n + e * i + r * a - i * n - a * t - r * e;
            return s > -0.001 && s < 0.001;
          }
          var r = function (t, e, r, n) {
            var i,
              a,
              s,
              o,
              l,
              h,
              c = defaultCurveSegments,
              u = 0,
              f = [],
              p = [],
              d = bezierLengthPool.newElement();
            for (s = r.length, i = 0; i < c; i += 1) {
              for (l = i / (c - 1), h = 0, a = 0; a < s; a += 1)
                (o =
                  bmPow(1 - l, 3) * t[a] +
                  3 * bmPow(1 - l, 2) * l * r[a] +
                  3 * (1 - l) * bmPow(l, 2) * n[a] +
                  bmPow(l, 3) * e[a]),
                  (f[a] = o),
                  null !== p[a] && (h += bmPow(f[a] - p[a], 2)),
                  (p[a] = f[a]);
              h && (u += h = bmSqrt(h)), (d.percents[i] = l), (d.lengths[i] = u);
            }
            return (d.addedLength = u), d;
          };
          function n(t) {
            (this.segmentLength = 0), (this.points = new Array(t));
          }
          function i(t, e) {
            (this.partialLength = t), (this.point = e);
          }
          var a,
            s =
              ((a = {}),
              function (t, r, s, o) {
                var l = (
                  t[0] +
                  '_' +
                  t[1] +
                  '_' +
                  r[0] +
                  '_' +
                  r[1] +
                  '_' +
                  s[0] +
                  '_' +
                  s[1] +
                  '_' +
                  o[0] +
                  '_' +
                  o[1]
                ).replace(/\./g, 'p');
                if (!a[l]) {
                  var h,
                    c,
                    u,
                    f,
                    p,
                    d,
                    m,
                    v = defaultCurveSegments,
                    y = 0,
                    g = null;
                  2 === t.length &&
                    (t[0] !== r[0] || t[1] !== r[1]) &&
                    e(t[0], t[1], r[0], r[1], t[0] + s[0], t[1] + s[1]) &&
                    e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) &&
                    (v = 2);
                  var E = new n(v);
                  for (u = s.length, h = 0; h < v; h += 1) {
                    for (m = createSizedArray(u), p = h / (v - 1), d = 0, c = 0; c < u; c += 1)
                      (f =
                        bmPow(1 - p, 3) * t[c] +
                        3 * bmPow(1 - p, 2) * p * (t[c] + s[c]) +
                        3 * (1 - p) * bmPow(p, 2) * (r[c] + o[c]) +
                        bmPow(p, 3) * r[c]),
                        (m[c] = f),
                        null !== g && (d += bmPow(m[c] - g[c], 2));
                    (y += d = bmSqrt(d)), (E.points[h] = new i(d, m)), (g = m);
                  }
                  (E.segmentLength = y), (a[l] = E);
                }
                return a[l];
              });
          function o(t, e) {
            var r = e.percents,
              n = e.lengths,
              i = r.length,
              a = bmFloor((i - 1) * t),
              s = t * e.addedLength,
              o = 0;
            if (a === i - 1 || 0 === a || s === n[a]) return r[a];
            for (var l = n[a] > s ? -1 : 1, h = !0; h; )
              if (
                (n[a] <= s && n[a + 1] > s
                  ? ((o = (s - n[a]) / (n[a + 1] - n[a])), (h = !1))
                  : (a += l),
                a < 0 || a >= i - 1)
              ) {
                if (a === i - 1) return r[a];
                h = !1;
              }
            return r[a] + (r[a + 1] - r[a]) * o;
          }
          var l = createTypedArray('float32', 8);
          return {
            getSegmentsLength: function (t) {
              var e,
                n = segmentsLengthPool.newElement(),
                i = t.c,
                a = t.v,
                s = t.o,
                o = t.i,
                l = t._length,
                h = n.lengths,
                c = 0;
              for (e = 0; e < l - 1; e += 1)
                (h[e] = r(a[e], a[e + 1], s[e], o[e + 1])), (c += h[e].addedLength);
              return (
                i && l && ((h[e] = r(a[e], a[0], s[e], o[0])), (c += h[e].addedLength)),
                (n.totalLength = c),
                n
              );
            },
            getNewSegment: function (e, r, n, i, a, s, h) {
              a < 0 ? (a = 0) : a > 1 && (a = 1);
              var c,
                u = o(a, h),
                f = o((s = s > 1 ? 1 : s), h),
                p = e.length,
                d = 1 - u,
                m = 1 - f,
                v = d * d * d,
                y = u * d * d * 3,
                g = u * u * d * 3,
                E = u * u * u,
                b = d * d * m,
                _ = u * d * m + d * u * m + d * d * f,
                x = u * u * m + d * u * f + u * d * f,
                S = u * u * f,
                T = d * m * m,
                I = u * m * m + d * f * m + d * m * f,
                A = u * f * m + d * f * f + u * m * f,
                P = u * f * f,
                w = m * m * m,
                C = f * m * m + m * f * m + m * m * f,
                D = f * f * m + m * f * f + f * m * f,
                M = f * f * f;
              for (c = 0; c < p; c += 1)
                (l[4 * c] = t.round(1e3 * (v * e[c] + y * n[c] + g * i[c] + E * r[c])) / 1e3),
                  (l[4 * c + 1] = t.round(1e3 * (b * e[c] + _ * n[c] + x * i[c] + S * r[c])) / 1e3),
                  (l[4 * c + 2] = t.round(1e3 * (T * e[c] + I * n[c] + A * i[c] + P * r[c])) / 1e3),
                  (l[4 * c + 3] = t.round(1e3 * (w * e[c] + C * n[c] + D * i[c] + M * r[c])) / 1e3);
              return l;
            },
            getPointInSegment: function (e, r, n, i, a, s) {
              var l = o(a, s),
                h = 1 - l;
              return [
                t.round(
                  1e3 *
                    (h * h * h * e[0] +
                      (l * h * h + h * l * h + h * h * l) * n[0] +
                      (l * l * h + h * l * l + l * h * l) * i[0] +
                      l * l * l * r[0])
                ) / 1e3,
                t.round(
                  1e3 *
                    (h * h * h * e[1] +
                      (l * h * h + h * l * h + h * h * l) * n[1] +
                      (l * l * h + h * l * l + l * h * l) * i[1] +
                      l * l * l * r[1])
                ) / 1e3,
              ];
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function (r, n, i, a, s, o, l, h, c) {
              if (0 === i && 0 === o && 0 === c) return e(r, n, a, s, l, h);
              var u,
                f = t.sqrt(t.pow(a - r, 2) + t.pow(s - n, 2) + t.pow(o - i, 2)),
                p = t.sqrt(t.pow(l - r, 2) + t.pow(h - n, 2) + t.pow(c - i, 2)),
                d = t.sqrt(t.pow(l - a, 2) + t.pow(h - s, 2) + t.pow(c - o, 2));
              return (
                (u = f > p ? (f > d ? f - p - d : d - p - f) : d > p ? d - p - f : p - f - d) >
                  -1e-4 && u < 1e-4
              );
            },
          };
        }
        !(function () {
          for (
            var t = 0, e = ['ms', 'moz', 'webkit', 'o'], r = 0;
            r < e.length && !window.requestAnimationFrame;
            ++r
          )
            (window.requestAnimationFrame = window[e[r] + 'RequestAnimationFrame']),
              (window.cancelAnimationFrame =
                window[e[r] + 'CancelAnimationFrame'] ||
                window[e[r] + 'CancelRequestAnimationFrame']);
          window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e) {
              var r = new Date().getTime(),
                n = Math.max(0, 16 - (r - t)),
                i = setTimeout(function () {
                  e(r + n);
                }, n);
              return (t = r + n), i;
            }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (t) {
                clearTimeout(t);
              });
        })();
        var bez = bezFunction();
        function dataFunctionManager() {
          function t(i, a, s) {
            var o,
              l,
              h,
              u,
              f,
              p,
              d = i.length;
            for (l = 0; l < d; l += 1)
              if ('ks' in (o = i[l]) && !o.completed) {
                if (((o.completed = !0), o.tt && (i[l - 1].td = o.tt), o.hasMask)) {
                  var m = o.masksProperties;
                  for (u = m.length, h = 0; h < u; h += 1)
                    if (m[h].pt.k.i) n(m[h].pt.k);
                    else
                      for (p = m[h].pt.k.length, f = 0; f < p; f += 1)
                        m[h].pt.k[f].s && n(m[h].pt.k[f].s[0]),
                          m[h].pt.k[f].e && n(m[h].pt.k[f].e[0]);
                }
                0 === o.ty
                  ? ((o.layers = e(o.refId, a)), t(o.layers, a, s))
                  : 4 === o.ty
                  ? r(o.shapes)
                  : 5 === o.ty && c(o);
              }
          }
          function e(t, e) {
            for (var r = 0, n = e.length; r < n; ) {
              if (e[r].id === t)
                return e[r].layers.__used
                  ? JSON.parse(JSON.stringify(e[r].layers))
                  : ((e[r].layers.__used = !0), e[r].layers);
              r += 1;
            }
            return null;
          }
          function r(t) {
            var e, i, a;
            for (e = t.length - 1; e >= 0; e -= 1)
              if ('sh' === t[e].ty)
                if (t[e].ks.k.i) n(t[e].ks.k);
                else
                  for (a = t[e].ks.k.length, i = 0; i < a; i += 1)
                    t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
              else 'gr' === t[e].ty && r(t[e].it);
          }
          function n(t) {
            var e,
              r = t.i.length;
            for (e = 0; e < r; e += 1)
              (t.i[e][0] += t.v[e][0]),
                (t.i[e][1] += t.v[e][1]),
                (t.o[e][0] += t.v[e][0]),
                (t.o[e][1] += t.v[e][1]);
          }
          function i(t, e) {
            var r = e ? e.split('.') : [100, 100, 100];
            return (
              t[0] > r[0] ||
              (!(r[0] > t[0]) &&
                (t[1] > r[1] || (!(r[1] > t[1]) && (t[2] > r[2] || (!(r[2] > t[2]) && null)))))
            );
          }
          var a,
            s = (function () {
              var t = [4, 4, 14];
              function e(t) {
                var e,
                  r,
                  n,
                  i = t.length;
                for (e = 0; e < i; e += 1)
                  5 === t[e].ty &&
                    ((r = t[e]), (n = void 0), (n = r.t.d), (r.t.d = { k: [{ s: n, t: 0 }] }));
              }
              return function (r) {
                if (i(t, r.v) && (e(r.layers), r.assets)) {
                  var n,
                    a = r.assets.length;
                  for (n = 0; n < a; n += 1) r.assets[n].layers && e(r.assets[n].layers);
                }
              };
            })(),
            o =
              ((a = [4, 7, 99]),
              function (t) {
                if (t.chars && !i(a, t.v)) {
                  var e,
                    r,
                    s,
                    o,
                    l,
                    h = t.chars.length;
                  for (e = 0; e < h; e += 1)
                    if (t.chars[e].data && t.chars[e].data.shapes)
                      for (s = (l = t.chars[e].data.shapes[0].it).length, r = 0; r < s; r += 1)
                        (o = l[r].ks.k).__converted || (n(l[r].ks.k), (o.__converted = !0));
                }
              }),
            l = (function () {
              var t = [4, 1, 9];
              function e(t) {
                var r,
                  n,
                  i,
                  a = t.length;
                for (r = 0; r < a; r += 1)
                  if ('gr' === t[r].ty) e(t[r].it);
                  else if ('fl' === t[r].ty || 'st' === t[r].ty)
                    if (t[r].c.k && t[r].c.k[0].i)
                      for (i = t[r].c.k.length, n = 0; n < i; n += 1)
                        t[r].c.k[n].s &&
                          ((t[r].c.k[n].s[0] /= 255),
                          (t[r].c.k[n].s[1] /= 255),
                          (t[r].c.k[n].s[2] /= 255),
                          (t[r].c.k[n].s[3] /= 255)),
                          t[r].c.k[n].e &&
                            ((t[r].c.k[n].e[0] /= 255),
                            (t[r].c.k[n].e[1] /= 255),
                            (t[r].c.k[n].e[2] /= 255),
                            (t[r].c.k[n].e[3] /= 255));
                    else
                      (t[r].c.k[0] /= 255),
                        (t[r].c.k[1] /= 255),
                        (t[r].c.k[2] /= 255),
                        (t[r].c.k[3] /= 255);
              }
              function r(t) {
                var r,
                  n = t.length;
                for (r = 0; r < n; r += 1) 4 === t[r].ty && e(t[r].shapes);
              }
              return function (e) {
                if (i(t, e.v) && (r(e.layers), e.assets)) {
                  var n,
                    a = e.assets.length;
                  for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers);
                }
              };
            })(),
            h = (function () {
              var t = [4, 4, 18];
              function e(t) {
                var r, n, i;
                for (r = t.length - 1; r >= 0; r -= 1)
                  if ('sh' === t[r].ty)
                    if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                    else
                      for (i = t[r].ks.k.length, n = 0; n < i; n += 1)
                        t[r].ks.k[n].s && (t[r].ks.k[n].s[0].c = t[r].closed),
                          t[r].ks.k[n].e && (t[r].ks.k[n].e[0].c = t[r].closed);
                  else 'gr' === t[r].ty && e(t[r].it);
              }
              function r(t) {
                var r,
                  n,
                  i,
                  a,
                  s,
                  o,
                  l = t.length;
                for (n = 0; n < l; n += 1) {
                  if ((r = t[n]).hasMask) {
                    var h = r.masksProperties;
                    for (a = h.length, i = 0; i < a; i += 1)
                      if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                      else
                        for (o = h[i].pt.k.length, s = 0; s < o; s += 1)
                          h[i].pt.k[s].s && (h[i].pt.k[s].s[0].c = h[i].cl),
                            h[i].pt.k[s].e && (h[i].pt.k[s].e[0].c = h[i].cl);
                  }
                  4 === r.ty && e(r.shapes);
                }
              }
              return function (e) {
                if (i(t, e.v) && (r(e.layers), e.assets)) {
                  var n,
                    a = e.assets.length;
                  for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers);
                }
              };
            })();
          function c(t) {
            0 !== t.t.a.length || 'm' in t.t.p || (t.singleShape = !0);
          }
          var u = {
            completeData: function (e, r) {
              e.__complete ||
                (l(e), s(e), o(e), h(e), t(e.layers, e.assets, r), (e.__complete = !0));
            },
          };
          return (
            (u.checkColors = l), (u.checkChars = o), (u.checkShapes = h), (u.completeLayers = t), u
          );
        }
        var dataManager = dataFunctionManager();
        function getFontProperties(t) {
          for (
            var e = t.fStyle ? t.fStyle.split(' ') : [],
              r = 'normal',
              n = 'normal',
              i = e.length,
              a = 0;
            a < i;
            a += 1
          )
            switch (e[a].toLowerCase()) {
              case 'italic':
                n = 'italic';
                break;
              case 'bold':
                r = '700';
                break;
              case 'black':
                r = '900';
                break;
              case 'medium':
                r = '500';
                break;
              case 'regular':
              case 'normal':
                r = '400';
                break;
              case 'light':
              case 'thin':
                r = '200';
            }
          return { style: n, weight: t.fWeight || r };
        }
        var FontManager = (function () {
            var t = 5e3,
              e = { w: 0, size: 0, shapes: [] },
              r = [];
            r = r.concat([
              2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371,
              2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388,
              2389, 2390, 2391, 2402, 2403,
            ]);
            var n = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'],
              i = [65039, 8205];
            function a(t, e) {
              var r = createTag('span');
              r.setAttribute('aria-hidden', !0), (r.style.fontFamily = e);
              var n = createTag('span');
              (n.innerText = 'giItT1WQy@!-/#'),
                (r.style.position = 'absolute'),
                (r.style.left = '-10000px'),
                (r.style.top = '-10000px'),
                (r.style.fontSize = '300px'),
                (r.style.fontVariant = 'normal'),
                (r.style.fontStyle = 'normal'),
                (r.style.fontWeight = 'normal'),
                (r.style.letterSpacing = '0'),
                r.appendChild(n),
                document.body.appendChild(r);
              var i = n.offsetWidth;
              return (
                (n.style.fontFamily =
                  (function (t) {
                    var e,
                      r = t.split(','),
                      n = r.length,
                      i = [];
                    for (e = 0; e < n; e += 1)
                      'sans-serif' !== r[e] && 'monospace' !== r[e] && i.push(r[e]);
                    return i.join(',');
                  })(t) +
                  ', ' +
                  e),
                { node: n, w: i, parent: r }
              );
            }
            function s(t, e) {
              var r = createNS('text');
              r.style.fontSize = '100px';
              var n = getFontProperties(e);
              return (
                r.setAttribute('font-family', e.fFamily),
                r.setAttribute('font-style', n.style),
                r.setAttribute('font-weight', n.weight),
                (r.textContent = '1'),
                e.fClass
                  ? ((r.style.fontFamily = 'inherit'), r.setAttribute('class', e.fClass))
                  : (r.style.fontFamily = e.fFamily),
                t.appendChild(r),
                (createTag('canvas').getContext('2d').font =
                  e.fWeight + ' ' + e.fStyle + ' 100px ' + e.fFamily),
                r
              );
            }
            var o = function () {
              (this.fonts = []),
                (this.chars = null),
                (this.typekitLoaded = 0),
                (this.isLoaded = !1),
                (this._warned = !1),
                (this.initTime = Date.now()),
                (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
            };
            return (
              (o.isModifier = function (t, e) {
                var r = t.toString(16) + e.toString(16);
                return -1 !== n.indexOf(r);
              }),
              (o.isZeroWidthJoiner = function (t, e) {
                return e ? t === i[0] && e === i[1] : t === i[1];
              }),
              (o.isCombinedCharacter = function (t) {
                return -1 !== r.indexOf(t);
              }),
              (o.prototype = {
                addChars: function (t) {
                  if (t) {
                    var e;
                    this.chars || (this.chars = []);
                    var r,
                      n,
                      i = t.length,
                      a = this.chars.length;
                    for (e = 0; e < i; e += 1) {
                      for (r = 0, n = !1; r < a; )
                        this.chars[r].style === t[e].style &&
                          this.chars[r].fFamily === t[e].fFamily &&
                          this.chars[r].ch === t[e].ch &&
                          (n = !0),
                          (r += 1);
                      n || (this.chars.push(t[e]), (a += 1));
                    }
                  }
                },
                addFonts: function (t, e) {
                  if (t) {
                    if (this.chars) return (this.isLoaded = !0), void (this.fonts = t.list);
                    var r,
                      n = t.list,
                      i = n.length,
                      o = i;
                    for (r = 0; r < i; r += 1) {
                      var l,
                        h,
                        c = !0;
                      if (
                        ((n[r].loaded = !1),
                        (n[r].monoCase = a(n[r].fFamily, 'monospace')),
                        (n[r].sansCase = a(n[r].fFamily, 'sans-serif')),
                        n[r].fPath)
                      ) {
                        if ('p' === n[r].fOrigin || 3 === n[r].origin) {
                          if (
                            ((l = document.querySelectorAll(
                              'style[f-forigin="p"][f-family="' +
                                n[r].fFamily +
                                '"], style[f-origin="3"][f-family="' +
                                n[r].fFamily +
                                '"]'
                            )).length > 0 && (c = !1),
                            c)
                          ) {
                            var u = createTag('style');
                            u.setAttribute('f-forigin', n[r].fOrigin),
                              u.setAttribute('f-origin', n[r].origin),
                              u.setAttribute('f-family', n[r].fFamily),
                              (u.type = 'text/css'),
                              (u.innerText =
                                '@font-face {font-family: ' +
                                n[r].fFamily +
                                "; font-style: normal; src: url('" +
                                n[r].fPath +
                                "');}"),
                              e.appendChild(u);
                          }
                        } else if ('g' === n[r].fOrigin || 1 === n[r].origin) {
                          for (
                            l = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]'
                            ),
                              h = 0;
                            h < l.length;
                            h += 1
                          )
                            -1 !== l[h].href.indexOf(n[r].fPath) && (c = !1);
                          if (c) {
                            var f = createTag('link');
                            f.setAttribute('f-forigin', n[r].fOrigin),
                              f.setAttribute('f-origin', n[r].origin),
                              (f.type = 'text/css'),
                              (f.rel = 'stylesheet'),
                              (f.href = n[r].fPath),
                              document.body.appendChild(f);
                          }
                        } else if ('t' === n[r].fOrigin || 2 === n[r].origin) {
                          for (
                            l = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]'
                            ),
                              h = 0;
                            h < l.length;
                            h += 1
                          )
                            n[r].fPath === l[h].src && (c = !1);
                          if (c) {
                            var p = createTag('link');
                            p.setAttribute('f-forigin', n[r].fOrigin),
                              p.setAttribute('f-origin', n[r].origin),
                              p.setAttribute('rel', 'stylesheet'),
                              p.setAttribute('href', n[r].fPath),
                              e.appendChild(p);
                          }
                        }
                      } else (n[r].loaded = !0), (o -= 1);
                      (n[r].helper = s(e, n[r])), (n[r].cache = {}), this.fonts.push(n[r]);
                    }
                    0 === o
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                },
                getCharData: function (t, r, n) {
                  for (var i = 0, a = this.chars.length; i < a; ) {
                    if (
                      this.chars[i].ch === t &&
                      this.chars[i].style === r &&
                      this.chars[i].fFamily === n
                    )
                      return this.chars[i];
                    i += 1;
                  }
                  return (
                    (('string' == typeof t && 13 !== t.charCodeAt(0)) || !t) &&
                      console &&
                      console.warn &&
                      !this._warned &&
                      ((this._warned = !0),
                      console.warn('Missing character from exported characters list: ', t, r, n)),
                    e
                  );
                },
                getFontByName: function (t) {
                  for (var e = 0, r = this.fonts.length; e < r; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                },
                measureText: function (t, e, r) {
                  var n = this.getFontByName(e),
                    i = t.charCodeAt(0);
                  if (!n.cache[i + 1]) {
                    var a = n.helper;
                    if (' ' === t) {
                      a.textContent = '|' + t + '|';
                      var s = a.getComputedTextLength();
                      a.textContent = '||';
                      var o = a.getComputedTextLength();
                      n.cache[i + 1] = (s - o) / 100;
                    } else (a.textContent = t), (n.cache[i + 1] = a.getComputedTextLength() / 100);
                  }
                  return n.cache[i + 1] * r;
                },
                checkLoadedFonts: function () {
                  var e,
                    r,
                    n,
                    i = this.fonts.length,
                    a = i;
                  for (e = 0; e < i; e += 1)
                    this.fonts[e].loaded
                      ? (a -= 1)
                      : 'n' === this.fonts[e].fOrigin || 0 === this.fonts[e].origin
                      ? (this.fonts[e].loaded = !0)
                      : ((r = this.fonts[e].monoCase.node),
                        (n = this.fonts[e].monoCase.w),
                        r.offsetWidth !== n
                          ? ((a -= 1), (this.fonts[e].loaded = !0))
                          : ((r = this.fonts[e].sansCase.node),
                            (n = this.fonts[e].sansCase.w),
                            r.offsetWidth !== n && ((a -= 1), (this.fonts[e].loaded = !0))),
                        this.fonts[e].loaded &&
                          (this.fonts[e].sansCase.parent.parentNode.removeChild(
                            this.fonts[e].sansCase.parent
                          ),
                          this.fonts[e].monoCase.parent.parentNode.removeChild(
                            this.fonts[e].monoCase.parent
                          )));
                  0 !== a && Date.now() - this.initTime < t
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function () {
                  this.isLoaded = !0;
                },
              }),
              o
            );
          })(),
          PropertyFactory = (function () {
            var t = initialDefaultFrame,
              e = Math.abs;
            function r(t, e) {
              var r,
                i = this.offsetTime;
              'multidimensional' === this.propType &&
                (r = createTypedArray('float32', this.pv.length));
              for (
                var a,
                  s,
                  o,
                  l,
                  h,
                  c,
                  u,
                  f,
                  p = e.lastIndex,
                  d = p,
                  m = this.keyframes.length - 1,
                  v = !0;
                v;

              ) {
                if (
                  ((a = this.keyframes[d]),
                  (s = this.keyframes[d + 1]),
                  d === m - 1 && t >= s.t - i)
                ) {
                  a.h && (a = s), (p = 0);
                  break;
                }
                if (s.t - i > t) {
                  p = d;
                  break;
                }
                d < m - 1 ? (d += 1) : ((p = 0), (v = !1));
              }
              var y,
                g,
                E,
                b,
                _,
                x,
                S,
                T,
                I,
                A,
                P = s.t - i,
                w = a.t - i;
              if (a.to) {
                a.bezierData || (a.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                var C = a.bezierData;
                if (t >= P || t < w) {
                  var D = t >= P ? C.points.length - 1 : 0;
                  for (l = C.points[D].point.length, o = 0; o < l; o += 1)
                    r[o] = C.points[D].point[o];
                } else {
                  a.__fnct
                    ? (f = a.__fnct)
                    : ((f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get),
                      (a.__fnct = f)),
                    (h = f((t - w) / (P - w)));
                  var M,
                    O = C.segmentLength * h,
                    F = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                  for (
                    u = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0,
                      v = !0,
                      c = C.points.length;
                    v;

                  ) {
                    if (
                      ((F += C.points[u].partialLength),
                      0 === O || 0 === h || u === C.points.length - 1)
                    ) {
                      for (l = C.points[u].point.length, o = 0; o < l; o += 1)
                        r[o] = C.points[u].point[o];
                      break;
                    }
                    if (O >= F && O < F + C.points[u + 1].partialLength) {
                      for (
                        M = (O - F) / C.points[u + 1].partialLength,
                          l = C.points[u].point.length,
                          o = 0;
                        o < l;
                        o += 1
                      )
                        r[o] =
                          C.points[u].point[o] +
                          (C.points[u + 1].point[o] - C.points[u].point[o]) * M;
                      break;
                    }
                    u < c - 1 ? (u += 1) : (v = !1);
                  }
                  (e._lastPoint = u),
                    (e._lastAddedLength = F - C.points[u].partialLength),
                    (e._lastKeyframeIndex = d);
                }
              } else {
                var k, R, L, N, V;
                if (((m = a.s.length), (y = s.s || a.e), this.sh && 1 !== a.h))
                  if (t >= P) (r[0] = y[0]), (r[1] = y[1]), (r[2] = y[2]);
                  else if (t <= w) (r[0] = a.s[0]), (r[1] = a.s[1]), (r[2] = a.s[2]);
                  else {
                    var B = n(a.s),
                      G = n(y);
                    (g = r),
                      (E = (function (t, e, r) {
                        var n,
                          i,
                          a,
                          s,
                          o,
                          l = [],
                          h = t[0],
                          c = t[1],
                          u = t[2],
                          f = t[3],
                          p = e[0],
                          d = e[1],
                          m = e[2],
                          v = e[3];
                        (i = h * p + c * d + u * m + f * v) < 0 &&
                          ((i = -i), (p = -p), (d = -d), (m = -m), (v = -v));
                        1 - i > 1e-6
                          ? ((n = Math.acos(i)),
                            (a = Math.sin(n)),
                            (s = Math.sin((1 - r) * n) / a),
                            (o = Math.sin(r * n) / a))
                          : ((s = 1 - r), (o = r));
                        return (
                          (l[0] = s * h + o * p),
                          (l[1] = s * c + o * d),
                          (l[2] = s * u + o * m),
                          (l[3] = s * f + o * v),
                          l
                        );
                      })(B, G, (t - w) / (P - w))),
                      (b = E[0]),
                      (_ = E[1]),
                      (x = E[2]),
                      (S = E[3]),
                      (T = Math.atan2(2 * _ * S - 2 * b * x, 1 - 2 * _ * _ - 2 * x * x)),
                      (I = Math.asin(2 * b * _ + 2 * x * S)),
                      (A = Math.atan2(2 * b * S - 2 * _ * x, 1 - 2 * b * b - 2 * x * x)),
                      (g[0] = T / degToRads),
                      (g[1] = I / degToRads),
                      (g[2] = A / degToRads);
                  }
                else
                  for (d = 0; d < m; d += 1)
                    1 !== a.h &&
                      (t >= P
                        ? (h = 1)
                        : t < w
                        ? (h = 0)
                        : (a.o.x.constructor === Array
                            ? (a.__fnct || (a.__fnct = []),
                              a.__fnct[d]
                                ? (f = a.__fnct[d])
                                : ((k = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d]),
                                  (R = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d]),
                                  (L = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d]),
                                  (N = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d]),
                                  (f = BezierFactory.getBezierEasing(k, R, L, N).get),
                                  (a.__fnct[d] = f)))
                            : a.__fnct
                            ? (f = a.__fnct)
                            : ((k = a.o.x),
                              (R = a.o.y),
                              (L = a.i.x),
                              (N = a.i.y),
                              (f = BezierFactory.getBezierEasing(k, R, L, N).get),
                              (a.__fnct = f)),
                          (h = f((t - w) / (P - w))))),
                      (y = s.s || a.e),
                      (V = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * h),
                      'multidimensional' === this.propType ? (r[d] = V) : (r = V);
              }
              return (e.lastIndex = p), r;
            }
            function n(t) {
              var e = t[0] * degToRads,
                r = t[1] * degToRads,
                n = t[2] * degToRads,
                i = Math.cos(e / 2),
                a = Math.cos(r / 2),
                s = Math.cos(n / 2),
                o = Math.sin(e / 2),
                l = Math.sin(r / 2),
                h = Math.sin(n / 2);
              return [
                o * l * s + i * a * h,
                o * a * s + i * l * h,
                i * l * s - o * a * h,
                i * a * s - o * l * h,
              ];
            }
            function i() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
              if (
                !(
                  e === this._caching.lastFrame ||
                  (this._caching.lastFrame !== t &&
                    ((this._caching.lastFrame >= n && e >= n) ||
                      (this._caching.lastFrame < r && e < r)))
                )
              ) {
                this._caching.lastFrame >= e &&
                  ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                var i = this.interpolateValue(e, this._caching);
                this.pv = i;
              }
              return (this._caching.lastFrame = e), this.pv;
            }
            function a(t) {
              var r;
              if ('unidimensional' === this.propType)
                (r = t * this.mult), e(this.v - r) > 1e-5 && ((this.v = r), (this._mdf = !0));
              else
                for (var n = 0, i = this.v.length; n < i; )
                  (r = t[n] * this.mult),
                    e(this.v[n] - r) > 1e-5 && ((this.v[n] = r), (this._mdf = !0)),
                    (n += 1);
            }
            function s() {
              if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                if (this.lock) this.setVValue(this.pv);
                else {
                  var t;
                  (this.lock = !0), (this._mdf = this._isFirstFrame);
                  var e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                  for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                  this.setVValue(r),
                    (this._isFirstFrame = !1),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId);
                }
            }
            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this);
            }
            function l(t, e, r, n) {
              (this.propType = 'unidimensional'),
                (this.mult = r || 1),
                (this.data = e),
                (this.v = r ? e.k * r : e.k),
                (this.pv = e.k),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = n),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.vel = 0),
                (this.effectsSequence = []),
                (this._isFirstFrame = !0),
                (this.getValue = s),
                (this.setVValue = a),
                (this.addEffect = o);
            }
            function h(t, e, r, n) {
              var i;
              (this.propType = 'multidimensional'),
                (this.mult = r || 1),
                (this.data = e),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = n),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.frameId = -1);
              var l = e.k.length;
              for (
                this.v = createTypedArray('float32', l),
                  this.pv = createTypedArray('float32', l),
                  this.vel = createTypedArray('float32', l),
                  i = 0;
                i < l;
                i += 1
              )
                (this.v[i] = e.k[i] * this.mult), (this.pv[i] = e.k[i]);
              (this._isFirstFrame = !0),
                (this.effectsSequence = []),
                (this.getValue = s),
                (this.setVValue = a),
                (this.addEffect = o);
            }
            function c(e, n, l, h) {
              (this.propType = 'unidimensional'),
                (this.keyframes = n.k),
                (this.offsetTime = e.data.st),
                (this.frameId = -1),
                (this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }),
                (this.k = !0),
                (this.kf = !0),
                (this.data = n),
                (this.mult = l || 1),
                (this.elem = e),
                (this.container = h),
                (this.comp = e.comp),
                (this.v = t),
                (this.pv = t),
                (this._isFirstFrame = !0),
                (this.getValue = s),
                (this.setVValue = a),
                (this.interpolateValue = r),
                (this.effectsSequence = [i.bind(this)]),
                (this.addEffect = o);
            }
            function u(e, n, l, h) {
              var c;
              this.propType = 'multidimensional';
              var u,
                f,
                p,
                d,
                m = n.k.length;
              for (c = 0; c < m - 1; c += 1)
                n.k[c].to &&
                  n.k[c].s &&
                  n.k[c + 1] &&
                  n.k[c + 1].s &&
                  ((u = n.k[c].s),
                  (f = n.k[c + 1].s),
                  (p = n.k[c].to),
                  (d = n.k[c].ti),
                  ((2 === u.length &&
                    (u[0] !== f[0] || u[1] !== f[1]) &&
                    bez.pointOnLine2D(u[0], u[1], f[0], f[1], u[0] + p[0], u[1] + p[1]) &&
                    bez.pointOnLine2D(u[0], u[1], f[0], f[1], f[0] + d[0], f[1] + d[1])) ||
                    (3 === u.length &&
                      (u[0] !== f[0] || u[1] !== f[1] || u[2] !== f[2]) &&
                      bez.pointOnLine3D(
                        u[0],
                        u[1],
                        u[2],
                        f[0],
                        f[1],
                        f[2],
                        u[0] + p[0],
                        u[1] + p[1],
                        u[2] + p[2]
                      ) &&
                      bez.pointOnLine3D(
                        u[0],
                        u[1],
                        u[2],
                        f[0],
                        f[1],
                        f[2],
                        f[0] + d[0],
                        f[1] + d[1],
                        f[2] + d[2]
                      ))) &&
                    ((n.k[c].to = null), (n.k[c].ti = null)),
                  u[0] === f[0] &&
                    u[1] === f[1] &&
                    0 === p[0] &&
                    0 === p[1] &&
                    0 === d[0] &&
                    0 === d[1] &&
                    (2 === u.length || (u[2] === f[2] && 0 === p[2] && 0 === d[2])) &&
                    ((n.k[c].to = null), (n.k[c].ti = null)));
              (this.effectsSequence = [i.bind(this)]),
                (this.data = n),
                (this.keyframes = n.k),
                (this.offsetTime = e.data.st),
                (this.k = !0),
                (this.kf = !0),
                (this._isFirstFrame = !0),
                (this.mult = l || 1),
                (this.elem = e),
                (this.container = h),
                (this.comp = e.comp),
                (this.getValue = s),
                (this.setVValue = a),
                (this.interpolateValue = r),
                (this.frameId = -1);
              var v = n.k[0].s.length;
              for (
                this.v = createTypedArray('float32', v),
                  this.pv = createTypedArray('float32', v),
                  c = 0;
                c < v;
                c += 1
              )
                (this.v[c] = t), (this.pv[c] = t);
              (this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: createTypedArray('float32', v),
              }),
                (this.addEffect = o);
            }
            return {
              getProp: function (t, e, r, n, i) {
                var a;
                if (e.k.length)
                  if ('number' == typeof e.k[0]) a = new h(t, e, n, i);
                  else
                    switch (r) {
                      case 0:
                        a = new c(t, e, n, i);
                        break;
                      case 1:
                        a = new u(t, e, n, i);
                    }
                else a = new l(t, e, n, i);
                return a.effectsSequence.length && i.addDynamicProperty(a), a;
              },
            };
          })(),
          TransformPropertyFactory = (function () {
            var t = [0, 0];
            function e(t, e, r) {
              if (
                ((this.elem = t),
                (this.frameId = -1),
                (this.propType = 'transform'),
                (this.data = e),
                (this.v = new Matrix()),
                (this.pre = new Matrix()),
                (this.appliedTransformations = 0),
                this.initDynamicPropertyContainer(r || t),
                e.p && e.p.s
                  ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                    (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                    e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                  : (this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this)),
                e.rx)
              ) {
                if (
                  ((this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this)),
                  (this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this)),
                  (this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this)),
                  e.or.k[0].ti)
                ) {
                  var n,
                    i = e.or.k.length;
                  for (n = 0; n < i; n += 1) (e.or.k[n].to = null), (e.or.k[n].ti = null);
                }
                (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)), (this.or.sh = !0);
              } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
              e.sk &&
                ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)),
                (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
                (this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this)),
                (this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, 0.01, this)),
                e.o
                  ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                  : (this.o = { _mdf: !1, v: 1 }),
                (this._isDirty = !0),
                this.dynamicProperties.length || this.getValue(!0);
            }
            return (
              (e.prototype = {
                applyToMatrix: function (t) {
                  var e = this._mdf;
                  this.iterateDynamicProperties(),
                    (this._mdf = this._mdf || e),
                    this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r
                      ? t.rotate(-this.r.v)
                      : t
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                    this.data.p.s
                      ? this.data.p.z
                        ? t.translate(this.px.v, this.py.v, -this.pz.v)
                        : t.translate(this.px.v, this.py.v, 0)
                      : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                },
                getValue: function (e) {
                  if (this.elem.globalData.frameId !== this.frameId) {
                    if (
                      (this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)),
                      this.iterateDynamicProperties(),
                      this._mdf || e)
                    ) {
                      var r;
                      if (
                        (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 &&
                          this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations < 2 &&
                          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk &&
                          this.appliedTransformations < 3 &&
                          this.v.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r && this.appliedTransformations < 4
                          ? this.v.rotate(-this.r.v)
                          : !this.r &&
                            this.appliedTransformations < 4 &&
                            this.v
                              .rotateZ(-this.rz.v)
                              .rotateY(this.ry.v)
                              .rotateX(this.rx.v)
                              .rotateZ(-this.or.v[2])
                              .rotateY(this.or.v[1])
                              .rotateX(this.or.v[0]),
                        this.autoOriented)
                      ) {
                        var n, i;
                        if (
                          ((r = this.elem.globalData.frameRate),
                          this.p && this.p.keyframes && this.p.getValueAtTime)
                        )
                          this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t
                            ? ((n = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / r, 0)),
                              (i = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)))
                            : this.p._caching.lastFrame + this.p.offsetTime >=
                              this.p.keyframes[this.p.keyframes.length - 1].t
                            ? ((n = this.p.getValueAtTime(
                                this.p.keyframes[this.p.keyframes.length - 1].t / r,
                                0
                              )),
                              (i = this.p.getValueAtTime(
                                (this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / r,
                                0
                              )))
                            : ((n = this.p.pv),
                              (i = this.p.getValueAtTime(
                                (this.p._caching.lastFrame + this.p.offsetTime - 0.01) / r,
                                this.p.offsetTime
                              )));
                        else if (
                          this.px &&
                          this.px.keyframes &&
                          this.py.keyframes &&
                          this.px.getValueAtTime &&
                          this.py.getValueAtTime
                        ) {
                          (n = []), (i = []);
                          var a = this.px,
                            s = this.py;
                          a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t
                            ? ((n[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / r, 0)),
                              (n[1] = s.getValueAtTime((s.keyframes[0].t + 0.01) / r, 0)),
                              (i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0)),
                              (i[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)))
                            : a._caching.lastFrame + a.offsetTime >=
                              a.keyframes[a.keyframes.length - 1].t
                            ? ((n[0] = a.getValueAtTime(
                                a.keyframes[a.keyframes.length - 1].t / r,
                                0
                              )),
                              (n[1] = s.getValueAtTime(
                                s.keyframes[s.keyframes.length - 1].t / r,
                                0
                              )),
                              (i[0] = a.getValueAtTime(
                                (a.keyframes[a.keyframes.length - 1].t - 0.01) / r,
                                0
                              )),
                              (i[1] = s.getValueAtTime(
                                (s.keyframes[s.keyframes.length - 1].t - 0.01) / r,
                                0
                              )))
                            : ((n = [a.pv, s.pv]),
                              (i[0] = a.getValueAtTime(
                                (a._caching.lastFrame + a.offsetTime - 0.01) / r,
                                a.offsetTime
                              )),
                              (i[1] = s.getValueAtTime(
                                (s._caching.lastFrame + s.offsetTime - 0.01) / r,
                                s.offsetTime
                              )));
                        } else n = i = t;
                        this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0]));
                      }
                      this.data.p && this.data.p.s
                        ? this.data.p.z
                          ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                          : this.v.translate(this.px.v, this.py.v, 0)
                        : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                  }
                },
                precalculateMatrix: function () {
                  if (
                    !this.a.k &&
                    (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    (this.appliedTransformations = 1),
                    !this.s.effectsSequence.length)
                  ) {
                    if (
                      (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      (this.appliedTransformations = 2),
                      this.sk)
                    ) {
                      if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                      this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        (this.appliedTransformations = 3);
                    }
                    this.r
                      ? this.r.effectsSequence.length ||
                        (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
                      : this.rz.effectsSequence.length ||
                        this.ry.effectsSequence.length ||
                        this.rx.effectsSequence.length ||
                        this.or.effectsSequence.length ||
                        (this.pre
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                        (this.appliedTransformations = 4));
                  }
                },
                autoOrient: function () {},
              }),
              extendPrototype([DynamicPropertyContainer], e),
              (e.prototype.addDynamicProperty = function (t) {
                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), (this._isDirty = !0);
              }),
              (e.prototype._addDynamicProperty =
                DynamicPropertyContainer.prototype.addDynamicProperty),
              {
                getTransformProperty: function (t, r, n) {
                  return new e(t, r, n);
                },
              }
            );
          })();
        function ShapePath() {
          (this.c = !1),
            (this._length = 0),
            (this._maxLength = 8),
            (this.v = createSizedArray(this._maxLength)),
            (this.o = createSizedArray(this._maxLength)),
            (this.i = createSizedArray(this._maxLength));
        }
        (ShapePath.prototype.setPathData = function (t, e) {
          (this.c = t), this.setLength(e);
          for (var r = 0; r < e; )
            (this.v[r] = pointPool.newElement()),
              (this.o[r] = pointPool.newElement()),
              (this.i[r] = pointPool.newElement()),
              (r += 1);
        }),
          (ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t; ) this.doubleArrayLength();
            this._length = t;
          }),
          (ShapePath.prototype.doubleArrayLength = function () {
            (this.v = this.v.concat(createSizedArray(this._maxLength))),
              (this.i = this.i.concat(createSizedArray(this._maxLength))),
              (this.o = this.o.concat(createSizedArray(this._maxLength))),
              (this._maxLength *= 2);
          }),
          (ShapePath.prototype.setXYAt = function (t, e, r, n, i) {
            var a;
            switch (
              ((this._length = Math.max(this._length, n + 1)),
              this._length >= this._maxLength && this.doubleArrayLength(),
              r)
            ) {
              case 'v':
                a = this.v;
                break;
              case 'i':
                a = this.i;
                break;
              case 'o':
                a = this.o;
                break;
              default:
                a = [];
            }
            (!a[n] || (a[n] && !i)) && (a[n] = pointPool.newElement()),
              (a[n][0] = t),
              (a[n][1] = e);
          }),
          (ShapePath.prototype.setTripleAt = function (t, e, r, n, i, a, s, o) {
            this.setXYAt(t, e, 'v', s, o),
              this.setXYAt(r, n, 'o', s, o),
              this.setXYAt(i, a, 'i', s, o);
          }),
          (ShapePath.prototype.reverse = function () {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v,
              r = this.o,
              n = this.i,
              i = 0;
            this.c &&
              (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), (i = 1));
            var a,
              s = this._length - 1,
              o = this._length;
            for (a = i; a < o; a += 1)
              t.setTripleAt(e[s][0], e[s][1], n[s][0], n[s][1], r[s][0], r[s][1], a, !1), (s -= 1);
            return t;
          });
        var ShapePropertyFactory = (function () {
            var t = -999999;
            function e(t, e, r) {
              var n,
                i,
                a,
                s,
                o,
                l,
                h,
                c,
                u,
                f = r.lastIndex,
                p = this.keyframes;
              if (t < p[0].t - this.offsetTime) (n = p[0].s[0]), (a = !0), (f = 0);
              else if (t >= p[p.length - 1].t - this.offsetTime)
                (n = p[p.length - 1].s ? p[p.length - 1].s[0] : p[p.length - 2].e[0]), (a = !0);
              else {
                for (
                  var d, m, v = f, y = p.length - 1, g = !0;
                  g && ((d = p[v]), !((m = p[v + 1]).t - this.offsetTime > t));

                )
                  v < y - 1 ? (v += 1) : (g = !1);
                if (((f = v), !(a = 1 === d.h))) {
                  if (t >= m.t - this.offsetTime) c = 1;
                  else if (t < d.t - this.offsetTime) c = 0;
                  else {
                    var E;
                    d.__fnct
                      ? (E = d.__fnct)
                      : ((E = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get),
                        (d.__fnct = E)),
                      (c = E(
                        (t - (d.t - this.offsetTime)) /
                          (m.t - this.offsetTime - (d.t - this.offsetTime))
                      ));
                  }
                  i = m.s ? m.s[0] : d.e[0];
                }
                n = d.s[0];
              }
              for (l = e._length, h = n.i[0].length, r.lastIndex = f, s = 0; s < l; s += 1)
                for (o = 0; o < h; o += 1)
                  (u = a ? n.i[s][o] : n.i[s][o] + (i.i[s][o] - n.i[s][o]) * c),
                    (e.i[s][o] = u),
                    (u = a ? n.o[s][o] : n.o[s][o] + (i.o[s][o] - n.o[s][o]) * c),
                    (e.o[s][o] = u),
                    (u = a ? n.v[s][o] : n.v[s][o] + (i.v[s][o] - n.v[s][o]) * c),
                    (e.v[s][o] = u);
            }
            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                i = this._caching.lastFrame;
              return (
                (i !== t && ((i < r && e < r) || (i > n && e > n))) ||
                  ((this._caching.lastIndex = i < e ? this._caching.lastIndex : 0),
                  this.interpolateShape(e, this.pv, this._caching)),
                (this._caching.lastFrame = e),
                this.pv
              );
            }
            function n() {
              this.paths = this.localShapeCollection;
            }
            function i(t) {
              (function (t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r,
                  n = t._length;
                for (r = 0; r < n; r += 1)
                  if (
                    t.v[r][0] !== e.v[r][0] ||
                    t.v[r][1] !== e.v[r][1] ||
                    t.o[r][0] !== e.o[r][0] ||
                    t.o[r][1] !== e.o[r][1] ||
                    t.i[r][0] !== e.i[r][0] ||
                    t.i[r][1] !== e.i[r][1]
                  )
                    return !1;
                return !0;
              })(this.v, t) ||
                ((this.v = shapePool.clone(t)),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                (this._mdf = !0),
                (this.paths = this.localShapeCollection));
            }
            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    (this.lock = !0),
                      (this._mdf = !1),
                      (t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k);
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId);
                  }
                else this._mdf = !1;
            }
            function s(t, e, r) {
              (this.propType = 'shape'),
                (this.comp = t.comp),
                (this.container = t),
                (this.elem = t),
                (this.data = e),
                (this.k = !1),
                (this.kf = !1),
                (this._mdf = !1);
              var i = 3 === r ? e.pt.k : e.ks.k;
              (this.v = shapePool.clone(i)),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.reset = n),
                (this.effectsSequence = []);
            }
            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this);
            }
            function l(e, i, a) {
              (this.propType = 'shape'),
                (this.comp = e.comp),
                (this.elem = e),
                (this.container = e),
                (this.offsetTime = e.data.st),
                (this.keyframes = 3 === a ? i.pt.k : i.ks.k),
                (this.k = !0),
                (this.kf = !0);
              var s = this.keyframes[0].s[0].i.length;
              (this.v = shapePool.newElement()),
                this.v.setPathData(this.keyframes[0].s[0].c, s),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.lastFrame = t),
                (this.reset = n),
                (this._caching = { lastFrame: t, lastIndex: 0 }),
                (this.effectsSequence = [r.bind(this)]);
            }
            (s.prototype.interpolateShape = e),
              (s.prototype.getValue = a),
              (s.prototype.setVValue = i),
              (s.prototype.addEffect = o),
              (l.prototype.getValue = a),
              (l.prototype.interpolateShape = e),
              (l.prototype.setVValue = i),
              (l.prototype.addEffect = o);
            var h = (function () {
                var t = roundCorner;
                function e(t, e) {
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 4),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.localShapeCollection.addShape(this.v),
                    (this.d = e.d),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertEllToPath());
                }
                return (
                  (e.prototype = {
                    reset: n,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function () {
                      var e = this.p.v[0],
                        r = this.p.v[1],
                        n = this.s.v[0] / 2,
                        i = this.s.v[1] / 2,
                        a = 3 !== this.d,
                        s = this.v;
                      (s.v[0][0] = e),
                        (s.v[0][1] = r - i),
                        (s.v[1][0] = a ? e + n : e - n),
                        (s.v[1][1] = r),
                        (s.v[2][0] = e),
                        (s.v[2][1] = r + i),
                        (s.v[3][0] = a ? e - n : e + n),
                        (s.v[3][1] = r),
                        (s.i[0][0] = a ? e - n * t : e + n * t),
                        (s.i[0][1] = r - i),
                        (s.i[1][0] = a ? e + n : e - n),
                        (s.i[1][1] = r - i * t),
                        (s.i[2][0] = a ? e + n * t : e - n * t),
                        (s.i[2][1] = r + i),
                        (s.i[3][0] = a ? e - n : e + n),
                        (s.i[3][1] = r + i * t),
                        (s.o[0][0] = a ? e + n * t : e - n * t),
                        (s.o[0][1] = r - i),
                        (s.o[1][0] = a ? e + n : e - n),
                        (s.o[1][1] = r + i * t),
                        (s.o[2][0] = a ? e - n * t : e + n * t),
                        (s.o[2][1] = r + i),
                        (s.o[3][0] = a ? e - n : e + n),
                        (s.o[3][1] = r - i * t);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], e),
                  e
                );
              })(),
              c = (function () {
                function t(t, e) {
                  (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 0),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.data = e),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    1 === e.sy
                      ? ((this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this)),
                        (this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this)),
                        (this.convertToPath = this.convertStarToPath))
                      : (this.convertToPath = this.convertPolygonToPath),
                    (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this)),
                    (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                    (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertToPath());
                }
                return (
                  (t.prototype = {
                    reset: n,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function () {
                      var t,
                        e,
                        r,
                        n,
                        i = 2 * Math.floor(this.pt.v),
                        a = (2 * Math.PI) / i,
                        s = !0,
                        o = this.or.v,
                        l = this.ir.v,
                        h = this.os.v,
                        c = this.is.v,
                        u = (2 * Math.PI * o) / (2 * i),
                        f = (2 * Math.PI * l) / (2 * i),
                        p = -Math.PI / 2;
                      p += this.r.v;
                      var d = 3 === this.data.d ? -1 : 1;
                      for (this.v._length = 0, t = 0; t < i; t += 1) {
                        (r = s ? h : c), (n = s ? u : f);
                        var m = (e = s ? o : l) * Math.cos(p),
                          v = e * Math.sin(p),
                          y = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                          g = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                        (m += +this.p.v[0]),
                          (v += +this.p.v[1]),
                          this.v.setTripleAt(
                            m,
                            v,
                            m - y * n * r * d,
                            v - g * n * r * d,
                            m + y * n * r * d,
                            v + g * n * r * d,
                            t,
                            !0
                          ),
                          (s = !s),
                          (p += a * d);
                      }
                    },
                    convertPolygonToPath: function () {
                      var t,
                        e = Math.floor(this.pt.v),
                        r = (2 * Math.PI) / e,
                        n = this.or.v,
                        i = this.os.v,
                        a = (2 * Math.PI * n) / (4 * e),
                        s = 0.5 * -Math.PI,
                        o = 3 === this.data.d ? -1 : 1;
                      for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                        var l = n * Math.cos(s),
                          h = n * Math.sin(s),
                          c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                          u = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                        (l += +this.p.v[0]),
                          (h += +this.p.v[1]),
                          this.v.setTripleAt(
                            l,
                            h,
                            l - c * a * i * o,
                            h - u * a * i * o,
                            l + c * a * i * o,
                            h + u * a * i * o,
                            t,
                            !0
                          ),
                          (s += r * o);
                      }
                      (this.paths.length = 0), (this.paths[0] = this.v);
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })(),
              u = (function () {
                function t(t, e) {
                  (this.v = shapePool.newElement()),
                    (this.v.c = !0),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertRectToPath());
                }
                return (
                  (t.prototype = {
                    convertRectToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        r = this.s.v[0] / 2,
                        n = this.s.v[1] / 2,
                        i = bmMin(r, n, this.r.v),
                        a = i * (1 - roundCorner);
                      (this.v._length = 0),
                        2 === this.d || 1 === this.d
                          ? (this.v.setTripleAt(
                              t + r,
                              e - n + i,
                              t + r,
                              e - n + i,
                              t + r,
                              e - n + a,
                              0,
                              !0
                            ),
                            this.v.setTripleAt(
                              t + r,
                              e + n - i,
                              t + r,
                              e + n - a,
                              t + r,
                              e + n - i,
                              1,
                              !0
                            ),
                            0 !== i
                              ? (this.v.setTripleAt(
                                  t + r - i,
                                  e + n,
                                  t + r - i,
                                  e + n,
                                  t + r - a,
                                  e + n,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + i,
                                  e + n,
                                  t - r + a,
                                  e + n,
                                  t - r + i,
                                  e + n,
                                  3,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + n - i,
                                  t - r,
                                  e + n - i,
                                  t - r,
                                  e + n - a,
                                  4,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - n + i,
                                  t - r,
                                  e - n + a,
                                  t - r,
                                  e - n + i,
                                  5,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + i,
                                  e - n,
                                  t - r + i,
                                  e - n,
                                  t - r + a,
                                  e - n,
                                  6,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r - i,
                                  e - n,
                                  t + r - a,
                                  e - n,
                                  t + r - i,
                                  e - n,
                                  7,
                                  !0
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e + n,
                                  t - r + a,
                                  e + n,
                                  t - r,
                                  e + n,
                                  2
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - n,
                                  t - r,
                                  e - n + a,
                                  t - r,
                                  e - n,
                                  3
                                )))
                          : (this.v.setTripleAt(
                              t + r,
                              e - n + i,
                              t + r,
                              e - n + a,
                              t + r,
                              e - n + i,
                              0,
                              !0
                            ),
                            0 !== i
                              ? (this.v.setTripleAt(
                                  t + r - i,
                                  e - n,
                                  t + r - i,
                                  e - n,
                                  t + r - a,
                                  e - n,
                                  1,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + i,
                                  e - n,
                                  t - r + a,
                                  e - n,
                                  t - r + i,
                                  e - n,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - n + i,
                                  t - r,
                                  e - n + i,
                                  t - r,
                                  e - n + a,
                                  3,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + n - i,
                                  t - r,
                                  e + n - a,
                                  t - r,
                                  e + n - i,
                                  4,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r + i,
                                  e + n,
                                  t - r + i,
                                  e + n,
                                  t - r + a,
                                  e + n,
                                  5,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r - i,
                                  e + n,
                                  t + r - a,
                                  e + n,
                                  t + r - i,
                                  e + n,
                                  6,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + n - i,
                                  t + r,
                                  e + n - i,
                                  t + r,
                                  e + n - a,
                                  7,
                                  !0
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e - n,
                                  t - r + a,
                                  e - n,
                                  t - r,
                                  e - n,
                                  1,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + n,
                                  t - r,
                                  e + n - a,
                                  t - r,
                                  e + n,
                                  2,
                                  !0
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + n,
                                  t + r - a,
                                  e + n,
                                  t + r,
                                  e + n,
                                  3,
                                  !0
                                )));
                    },
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath());
                    },
                    reset: n,
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })();
            var f = {
              getShapeProp: function (t, e, r) {
                var n;
                return (
                  3 === r || 4 === r
                    ? (n = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new s(t, e, r))
                    : 5 === r
                    ? (n = new u(t, e))
                    : 6 === r
                    ? (n = new h(t, e))
                    : 7 === r && (n = new c(t, e)),
                  n.k && t.addDynamicProperty(n),
                  n
                );
              },
              getConstructorFunction: function () {
                return s;
              },
              getKeyframedConstructorFunction: function () {
                return l;
              },
            };
            return f;
          })(),
          ShapeModifiers = (function () {
            var t = {},
              e = {};
            return (
              (t.registerModifier = function (t, r) {
                e[t] || (e[t] = r);
              }),
              (t.getModifier = function (t, r, n) {
                return new e[t](r, n);
              }),
              t
            );
          })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function RoundCornersModifier() {}
        function PuckerAndBloatModifier() {}
        function RepeaterModifier() {}
        function ShapeCollection() {
          (this._length = 0),
            (this._maxLength = 4),
            (this.shapes = createSizedArray(this._maxLength));
        }
        function DashProperty(t, e, r, n) {
          var i;
          (this.elem = t),
            (this.frameId = -1),
            (this.dataProps = createSizedArray(e.length)),
            (this.renderer = r),
            (this.k = !1),
            (this.dashStr = ''),
            (this.dashArray = createTypedArray('float32', e.length ? e.length - 1 : 0)),
            (this.dashoffset = createTypedArray('float32', 1)),
            this.initDynamicPropertyContainer(n);
          var a,
            s = e.length || 0;
          for (i = 0; i < s; i += 1)
            (a = PropertyFactory.getProp(t, e[i].v, 0, 0, this)),
              (this.k = a.k || this.k),
              (this.dataProps[i] = { n: e[i].n, p: a });
          this.k || this.getValue(!0), (this._isAnimated = this.k);
        }
        function GradientProperty(t, e, r) {
          (this.data = e), (this.c = createTypedArray('uint8c', 4 * e.p));
          var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          (this.o = createTypedArray('float32', n)),
            (this._cmdf = !1),
            (this._omdf = !1),
            (this._collapsable = this.checkCollapsable()),
            (this._hasOpacity = n),
            this.initDynamicPropertyContainer(r),
            (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
            (this.k = this.prop.k),
            this.getValue(!0);
        }
        (ShapeModifier.prototype.initModifierProperties = function () {}),
          (ShapeModifier.prototype.addShapeToModifier = function () {}),
          (ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
              t.sh.container.addDynamicProperty(t.sh);
              var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollectionPool.newShapeCollection(),
              };
              this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated();
            }
          }),
          (ShapeModifier.prototype.init = function (t, e) {
            (this.shapes = []),
              (this.elem = t),
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e),
              (this.frameId = initialDefaultFrame),
              (this.closed = !1),
              (this.k = !1),
              this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId &&
              ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
          }),
          extendPrototype([DynamicPropertyContainer], ShapeModifier),
          extendPrototype([ShapeModifier], TrimModifier),
          (TrimModifier.prototype.initModifierProperties = function (t, e) {
            (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
              (this.sValue = 0),
              (this.eValue = 0),
              (this.getValue = this.processKeys),
              (this.m = e.m),
              (this._isAnimated =
                !!this.s.effectsSequence.length ||
                !!this.e.effectsSequence.length ||
                !!this.o.effectsSequence.length);
          }),
          (TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = [];
          }),
          (TrimModifier.prototype.calculateShapeEdges = function (t, e, r, n, i) {
            var a = [];
            e <= 1
              ? a.push({ s: t, e: e })
              : t >= 1
              ? a.push({ s: t - 1, e: e - 1 })
              : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
            var s,
              o,
              l = [],
              h = a.length;
            for (s = 0; s < h; s += 1) {
              var c, u;
              if (!((o = a[s]).e * i < n || o.s * i > n + r))
                (c = o.s * i <= n ? 0 : (o.s * i - n) / r),
                  (u = o.e * i >= n + r ? 1 : (o.e * i - n) / r),
                  l.push([c, u]);
            }
            return l.length || l.push([0, 0]), l;
          }),
          (TrimModifier.prototype.releasePathsData = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return (t.length = 0), t;
          }),
          (TrimModifier.prototype.processShapes = function (t) {
            var e, r, n, i;
            if (this._mdf || t) {
              var a = (this.o.v % 360) / 360;
              if (
                (a < 0 && (a += 1),
                (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) >
                  (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a))
              ) {
                var s = e;
                (e = r), (r = s);
              }
              (e = 1e-4 * Math.round(1e4 * e)),
                (r = 1e-4 * Math.round(1e4 * r)),
                (this.sValue = e),
                (this.eValue = r);
            } else (e = this.sValue), (r = this.eValue);
            var o,
              l,
              h,
              c,
              u,
              f = this.shapes.length,
              p = 0;
            if (r === e)
              for (i = 0; i < f; i += 1)
                this.shapes[i].localShapeCollection.releaseShapes(),
                  (this.shapes[i].shape._mdf = !0),
                  (this.shapes[i].shape.paths = this.shapes[i].localShapeCollection),
                  this._mdf && (this.shapes[i].pathsData.length = 0);
            else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
              if (this._mdf)
                for (i = 0; i < f; i += 1)
                  (this.shapes[i].pathsData.length = 0), (this.shapes[i].shape._mdf = !0);
            } else {
              var d,
                m,
                v = [];
              for (i = 0; i < f; i += 1)
                if ((d = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) {
                  if (
                    ((l = (n = d.shape.paths)._length),
                    (u = 0),
                    !d.shape._mdf && d.pathsData.length)
                  )
                    u = d.totalShapeLength;
                  else {
                    for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1)
                      (c = bez.getSegmentsLength(n.shapes[o])), h.push(c), (u += c.totalLength);
                    (d.totalShapeLength = u), (d.pathsData = h);
                  }
                  (p += u), (d.shape._mdf = !0);
                } else d.shape.paths = d.localShapeCollection;
              var y,
                g = e,
                E = r,
                b = 0;
              for (i = f - 1; i >= 0; i -= 1)
                if ((d = this.shapes[i]).shape._mdf) {
                  for (
                    (m = d.localShapeCollection).releaseShapes(),
                      2 === this.m && f > 1
                        ? ((y = this.calculateShapeEdges(e, r, d.totalShapeLength, b, p)),
                          (b += d.totalShapeLength))
                        : (y = [[g, E]]),
                      l = y.length,
                      o = 0;
                    o < l;
                    o += 1
                  ) {
                    (g = y[o][0]),
                      (E = y[o][1]),
                      (v.length = 0),
                      E <= 1
                        ? v.push({ s: d.totalShapeLength * g, e: d.totalShapeLength * E })
                        : g >= 1
                        ? v.push({
                            s: d.totalShapeLength * (g - 1),
                            e: d.totalShapeLength * (E - 1),
                          })
                        : (v.push({ s: d.totalShapeLength * g, e: d.totalShapeLength }),
                          v.push({ s: 0, e: d.totalShapeLength * (E - 1) }));
                    var _ = this.addShapes(d, v[0]);
                    if (v[0].s !== v[0].e) {
                      if (v.length > 1)
                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                          var x = _.pop();
                          this.addPaths(_, m), (_ = this.addShapes(d, v[1], x));
                        } else this.addPaths(_, m), (_ = this.addShapes(d, v[1]));
                      this.addPaths(_, m);
                    }
                  }
                  d.shape.paths = m;
                }
            }
          }),
          (TrimModifier.prototype.addPaths = function (t, e) {
            var r,
              n = t.length;
            for (r = 0; r < n; r += 1) e.addShape(t[r]);
          }),
          (TrimModifier.prototype.addSegment = function (t, e, r, n, i, a, s) {
            i.setXYAt(e[0], e[1], 'o', a),
              i.setXYAt(r[0], r[1], 'i', a + 1),
              s && i.setXYAt(t[0], t[1], 'v', a),
              i.setXYAt(n[0], n[1], 'v', a + 1);
          }),
          (TrimModifier.prototype.addSegmentFromArray = function (t, e, r, n) {
            e.setXYAt(t[1], t[5], 'o', r),
              e.setXYAt(t[2], t[6], 'i', r + 1),
              n && e.setXYAt(t[0], t[4], 'v', r),
              e.setXYAt(t[3], t[7], 'v', r + 1);
          }),
          (TrimModifier.prototype.addShapes = function (t, e, r) {
            var n,
              i,
              a,
              s,
              o,
              l,
              h,
              c,
              u = t.pathsData,
              f = t.shape.paths.shapes,
              p = t.shape.paths._length,
              d = 0,
              m = [],
              v = !0;
            for (
              r
                ? ((o = r._length), (c = r._length))
                : ((r = shapePool.newElement()), (o = 0), (c = 0)),
                m.push(r),
                n = 0;
              n < p;
              n += 1
            ) {
              for (
                l = u[n].lengths, r.c = f[n].c, a = f[n].c ? l.length : l.length + 1, i = 1;
                i < a;
                i += 1
              )
                if (d + (s = l[i - 1]).addedLength < e.s) (d += s.addedLength), (r.c = !1);
                else {
                  if (d > e.e) {
                    r.c = !1;
                    break;
                  }
                  e.s <= d && e.e >= d + s.addedLength
                    ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[i], f[n].v[i], r, o, v),
                      (v = !1))
                    : ((h = bez.getNewSegment(
                        f[n].v[i - 1],
                        f[n].v[i],
                        f[n].o[i - 1],
                        f[n].i[i],
                        (e.s - d) / s.addedLength,
                        (e.e - d) / s.addedLength,
                        l[i - 1]
                      )),
                      this.addSegmentFromArray(h, r, o, v),
                      (v = !1),
                      (r.c = !1)),
                    (d += s.addedLength),
                    (o += 1);
                }
              if (f[n].c && l.length) {
                if (((s = l[i - 1]), d <= e.e)) {
                  var y = l[i - 1].addedLength;
                  e.s <= d && e.e >= d + y
                    ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[0], f[n].v[0], r, o, v),
                      (v = !1))
                    : ((h = bez.getNewSegment(
                        f[n].v[i - 1],
                        f[n].v[0],
                        f[n].o[i - 1],
                        f[n].i[0],
                        (e.s - d) / y,
                        (e.e - d) / y,
                        l[i - 1]
                      )),
                      this.addSegmentFromArray(h, r, o, v),
                      (v = !1),
                      (r.c = !1));
                } else r.c = !1;
                (d += s.addedLength), (o += 1);
              }
              if (
                (r._length &&
                  (r.setXYAt(r.v[c][0], r.v[c][1], 'i', c),
                  r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], 'o', r._length - 1)),
                d > e.e)
              )
                break;
              n < p - 1 && ((r = shapePool.newElement()), (v = !0), m.push(r), (o = 0));
            }
            return m;
          }),
          ShapeModifiers.registerModifier('tm', TrimModifier),
          extendPrototype([ShapeModifier], RoundCornersModifier),
          (RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
              (this._isAnimated = !!this.rd.effectsSequence.length);
          }),
          (RoundCornersModifier.prototype.processPath = function (t, e) {
            var r,
              n = shapePool.newElement();
            n.c = t.c;
            var i,
              a,
              s,
              o,
              l,
              h,
              c,
              u,
              f,
              p,
              d,
              m,
              v = t._length,
              y = 0;
            for (r = 0; r < v; r += 1)
              (i = t.v[r]),
                (s = t.o[r]),
                (a = t.i[r]),
                i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1]
                  ? (0 !== r && r !== v - 1) || t.c
                    ? ((o = 0 === r ? t.v[v - 1] : t.v[r - 1]),
                      (h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)))
                        ? Math.min(l / 2, e) / l
                        : 0),
                      (c = d = i[0] + (o[0] - i[0]) * h),
                      (u = m = i[1] - (i[1] - o[1]) * h),
                      (f = c - (c - i[0]) * roundCorner),
                      (p = u - (u - i[1]) * roundCorner),
                      n.setTripleAt(c, u, f, p, d, m, y),
                      (y += 1),
                      (o = r === v - 1 ? t.v[0] : t.v[r + 1]),
                      (h = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)))
                        ? Math.min(l / 2, e) / l
                        : 0),
                      (c = f = i[0] + (o[0] - i[0]) * h),
                      (u = p = i[1] + (o[1] - i[1]) * h),
                      (d = c - (c - i[0]) * roundCorner),
                      (m = u - (u - i[1]) * roundCorner),
                      n.setTripleAt(c, u, f, p, d, m, y),
                      (y += 1))
                    : (n.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], y), (y += 1))
                  : (n.setTripleAt(
                      t.v[r][0],
                      t.v[r][1],
                      t.o[r][0],
                      t.o[r][1],
                      t.i[r][0],
                      t.i[r][1],
                      y
                    ),
                    (y += 1));
            return n;
          }),
          (RoundCornersModifier.prototype.processShapes = function (t) {
            var e,
              r,
              n,
              i,
              a,
              s,
              o = this.shapes.length,
              l = this.rd.v;
            if (0 !== l)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (a = this.shapes[r]).localShapeCollection), a.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      i = a.shape.paths._length,
                      n = 0;
                    n < i;
                    n += 1
                  )
                    s.addShape(this.processPath(e[n], l));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          ShapeModifiers.registerModifier('rd', RoundCornersModifier),
          extendPrototype([ShapeModifier], PuckerAndBloatModifier),
          (PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
              (this._isAnimated = !!this.amount.effectsSequence.length);
          }),
          (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var r = e / 100,
              n = [0, 0],
              i = t._length,
              a = 0;
            for (a = 0; a < i; a += 1) (n[0] += t.v[a][0]), (n[1] += t.v[a][1]);
            (n[0] /= i), (n[1] /= i);
            var s,
              o,
              l,
              h,
              c,
              u,
              f = shapePool.newElement();
            for (f.c = t.c, a = 0; a < i; a += 1)
              (s = t.v[a][0] + (n[0] - t.v[a][0]) * r),
                (o = t.v[a][1] + (n[1] - t.v[a][1]) * r),
                (l = t.o[a][0] + (n[0] - t.o[a][0]) * -r),
                (h = t.o[a][1] + (n[1] - t.o[a][1]) * -r),
                (c = t.i[a][0] + (n[0] - t.i[a][0]) * -r),
                (u = t.i[a][1] + (n[1] - t.i[a][1]) * -r),
                f.setTripleAt(s, o, l, h, c, u, a);
            return f;
          }),
          (PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e,
              r,
              n,
              i,
              a,
              s,
              o = this.shapes.length,
              l = this.amount.v;
            if (0 !== l)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (a = this.shapes[r]).localShapeCollection), a.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      i = a.shape.paths._length,
                      n = 0;
                    n < i;
                    n += 1
                  )
                    s.addShape(this.processPath(e[n], l));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier),
          extendPrototype([ShapeModifier], RepeaterModifier),
          (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
              (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
              (this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this)),
              (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
              (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
              (this.data = e),
              this.dynamicProperties.length || this.getValue(!0),
              (this._isAnimated = !!this.dynamicProperties.length),
              (this.pMatrix = new Matrix()),
              (this.rMatrix = new Matrix()),
              (this.sMatrix = new Matrix()),
              (this.tMatrix = new Matrix()),
              (this.matrix = new Matrix());
          }),
          (RepeaterModifier.prototype.applyTransforms = function (t, e, r, n, i, a) {
            var s = a ? -1 : 1,
              o = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
              l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
            t.translate(n.p.v[0] * s * i, n.p.v[1] * s * i, n.p.v[2]),
              e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]),
              e.rotate(-n.r.v * s * i),
              e.translate(n.a.v[0], n.a.v[1], n.a.v[2]),
              r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]),
              r.scale(a ? 1 / o : o, a ? 1 / l : l),
              r.translate(n.a.v[0], n.a.v[1], n.a.v[2]);
          }),
          (RepeaterModifier.prototype.init = function (t, e, r, n) {
            for (
              this.elem = t,
                this.arr = e,
                this.pos = r,
                this.elemsData = n,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[r]);
              r > 0;

            )
              (r -= 1), this._elements.unshift(e[r]);
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (RepeaterModifier.prototype.resetElements = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              (t[e]._processed = !1), 'gr' === t[e].ty && this.resetElements(t[e].it);
          }),
          (RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return this.resetElements(e), e;
          }),
          (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var r,
              n = t.length;
            for (r = 0; r < n; r += 1)
              (t[r]._render = e), 'gr' === t[r].ty && this.changeGroupRender(t[r].it, e);
          }),
          (RepeaterModifier.prototype.processShapes = function (t) {
            var e,
              r,
              n,
              i,
              a,
              s = !1;
            if (this._mdf || t) {
              var o,
                l = Math.ceil(this.c.v);
              if (this._groups.length < l) {
                for (; this._groups.length < l; ) {
                  var h = { it: this.cloneElements(this._elements), ty: 'gr' };
                  h.it.push({
                    a: { a: 0, ix: 1, k: [0, 0] },
                    nm: 'Transform',
                    o: { a: 0, ix: 7, k: 100 },
                    p: { a: 0, ix: 2, k: [0, 0] },
                    r: {
                      a: 1,
                      ix: 6,
                      k: [
                        { s: 0, e: 0, t: 0 },
                        { s: 0, e: 0, t: 1 },
                      ],
                    },
                    s: { a: 0, ix: 3, k: [100, 100] },
                    sa: { a: 0, ix: 5, k: 0 },
                    sk: { a: 0, ix: 4, k: 0 },
                    ty: 'tr',
                  }),
                    this.arr.splice(0, 0, h),
                    this._groups.splice(0, 0, h),
                    (this._currentCopies += 1);
                }
                this.elem.reloadShapes(), (s = !0);
              }
              for (a = 0, n = 0; n <= this._groups.length - 1; n += 1) {
                if (
                  ((o = a < l),
                  (this._groups[n]._render = o),
                  this.changeGroupRender(this._groups[n].it, o),
                  !o)
                ) {
                  var c = this.elemsData[n].it,
                    u = c[c.length - 1];
                  0 !== u.transform.op.v
                    ? ((u.transform.op._mdf = !0), (u.transform.op.v = 0))
                    : (u.transform.op._mdf = !1);
                }
                a += 1;
              }
              this._currentCopies = l;
              var f = this.o.v,
                p = f % 1,
                d = f > 0 ? Math.floor(f) : Math.ceil(f),
                m = this.pMatrix.props,
                v = this.rMatrix.props,
                y = this.sMatrix.props;
              this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset();
              var g,
                E,
                b = 0;
              if (f > 0) {
                for (; b < d; )
                  this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                    (b += 1);
                p &&
                  (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1),
                  (b += p));
              } else if (f < 0) {
                for (; b > d; )
                  this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                    (b -= 1);
                p &&
                  (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0),
                  (b -= p));
              }
              for (
                n = 1 === this.data.m ? 0 : this._currentCopies - 1,
                  i = 1 === this.data.m ? 1 : -1,
                  a = this._currentCopies;
                a;

              ) {
                if (
                  ((E = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props)
                    .length),
                  (e[e.length - 1].transform.mProps._mdf = !0),
                  (e[e.length - 1].transform.op._mdf = !0),
                  (e[e.length - 1].transform.op.v =
                    1 === this._currentCopies
                      ? this.so.v
                      : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1))),
                  0 !== b)
                ) {
                  for (
                    ((0 !== n && 1 === i) || (n !== this._currentCopies - 1 && -1 === i)) &&
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1
                      ),
                      this.matrix.transform(
                        v[0],
                        v[1],
                        v[2],
                        v[3],
                        v[4],
                        v[5],
                        v[6],
                        v[7],
                        v[8],
                        v[9],
                        v[10],
                        v[11],
                        v[12],
                        v[13],
                        v[14],
                        v[15]
                      ),
                      this.matrix.transform(
                        y[0],
                        y[1],
                        y[2],
                        y[3],
                        y[4],
                        y[5],
                        y[6],
                        y[7],
                        y[8],
                        y[9],
                        y[10],
                        y[11],
                        y[12],
                        y[13],
                        y[14],
                        y[15]
                      ),
                      this.matrix.transform(
                        m[0],
                        m[1],
                        m[2],
                        m[3],
                        m[4],
                        m[5],
                        m[6],
                        m[7],
                        m[8],
                        m[9],
                        m[10],
                        m[11],
                        m[12],
                        m[13],
                        m[14],
                        m[15]
                      ),
                      g = 0;
                    g < E;
                    g += 1
                  )
                    r[g] = this.matrix.props[g];
                  this.matrix.reset();
                } else for (this.matrix.reset(), g = 0; g < E; g += 1) r[g] = this.matrix.props[g];
                (b += 1), (a -= 1), (n += i);
              }
            } else
              for (a = this._currentCopies, n = 0, i = 1; a; )
                (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props),
                  (e[e.length - 1].transform.mProps._mdf = !1),
                  (e[e.length - 1].transform.op._mdf = !1),
                  (a -= 1),
                  (n += i);
            return s;
          }),
          (RepeaterModifier.prototype.addShape = function () {}),
          ShapeModifiers.registerModifier('rp', RepeaterModifier),
          (ShapeCollection.prototype.addShape = function (t) {
            this._length === this._maxLength &&
              ((this.shapes = this.shapes.concat(createSizedArray(this._maxLength))),
              (this._maxLength *= 2)),
              (this.shapes[this._length] = t),
              (this._length += 1);
          }),
          (ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0;
          }),
          (DashProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId || t) &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties(),
              (this._mdf = this._mdf || t),
              this._mdf)
            ) {
              var e = 0,
                r = this.dataProps.length;
              for ('svg' === this.renderer && (this.dashStr = ''), e = 0; e < r; e += 1)
                'o' !== this.dataProps[e].n
                  ? 'svg' === this.renderer
                    ? (this.dashStr += ' ' + this.dataProps[e].p.v)
                    : (this.dashArray[e] = this.dataProps[e].p.v)
                  : (this.dashoffset[0] = this.dataProps[e].p.v);
            }
          }),
          extendPrototype([DynamicPropertyContainer], DashProperty),
          (GradientProperty.prototype.comparePoints = function (t, e) {
            for (var r = 0, n = this.o.length / 2; r < n; ) {
              if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
              r += 1;
            }
            return !0;
          }),
          (GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
              for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
          }),
          (GradientProperty.prototype.getValue = function (t) {
            if (
              (this.prop.getValue(),
              (this._mdf = !1),
              (this._cmdf = !1),
              (this._omdf = !1),
              this.prop._mdf || t)
            ) {
              var e,
                r,
                n,
                i = 4 * this.data.p;
              for (e = 0; e < i; e += 1)
                (r = e % 4 == 0 ? 100 : 255),
                  (n = Math.round(this.prop.v[e] * r)),
                  this.c[e] !== n && ((this.c[e] = n), (this._cmdf = !t));
              if (this.o.length)
                for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1)
                  (r = e % 2 == 0 ? 100 : 1),
                    (n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e]),
                    this.o[e - 4 * this.data.p] !== n &&
                      ((this.o[e - 4 * this.data.p] = n), (this._omdf = !t));
              this._mdf = !t;
            }
          }),
          extendPrototype([DynamicPropertyContainer], GradientProperty);
        var buildShapeString = function (t, e, r, n) {
            if (0 === e) return '';
            var i,
              a = t.o,
              s = t.i,
              o = t.v,
              l = ' M' + n.applyToPointStringified(o[0][0], o[0][1]);
            for (i = 1; i < e; i += 1)
              l +=
                ' C' +
                n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) +
                ' ' +
                n.applyToPointStringified(s[i][0], s[i][1]) +
                ' ' +
                n.applyToPointStringified(o[i][0], o[i][1]);
            return (
              r &&
                e &&
                ((l +=
                  ' C' +
                  n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) +
                  ' ' +
                  n.applyToPointStringified(s[0][0], s[0][1]) +
                  ' ' +
                  n.applyToPointStringified(o[0][0], o[0][1])),
                (l += 'z')),
              l
            );
          },
          audioControllerFactory = (function () {
            function t(t) {
              (this.audios = []), (this.audioFactory = t), (this._volume = 1), (this._isMuted = !1);
            }
            return (
              (t.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause();
                },
                resume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume();
                },
                setRate: function (t) {
                  var e,
                    r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : Howl
                    ? new Howl({ src: [t] })
                    : {
                        isPlaying: !1,
                        play: function () {
                          this.isPlaying = !0;
                        },
                        seek: function () {
                          this.isPlaying = !1;
                        },
                        playing: function () {},
                        rate: function () {},
                        setVolume: function () {},
                      };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  (this._volume = t), this._updateVolume();
                },
                mute: function () {
                  (this._isMuted = !0), this._updateVolume();
                },
                unmute: function () {
                  (this._isMuted = !1), this._updateVolume();
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1)
                    this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1));
                },
              }),
              function () {
                return new t();
              }
            );
          })(),
          ImagePreloader = (function () {
            var t = (function () {
              var t = createTag('canvas');
              (t.width = 1), (t.height = 1);
              var e = t.getContext('2d');
              return (e.fillStyle = 'rgba(0,0,0,0)'), e.fillRect(0, 0, 1, 1), t;
            })();
            function e() {
              (this.loadedAssets += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
            }
            function r() {
              (this.loadedFootagesCount += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null);
            }
            function n(t, e, r) {
              var n = '';
              if (t.e) n = t.p;
              else if (e) {
                var i = t.p;
                -1 !== i.indexOf('images/') && (i = i.split('/')[1]), (n = e + i);
              } else (n = r), (n += t.u ? t.u : ''), (n += t.p);
              return n;
            }
            function i() {
              (this._imageLoaded = e.bind(this)),
                (this._footageLoaded = r.bind(this)),
                (this.testImageLoaded = function (t) {
                  var e = 0,
                    r = setInterval(
                      function () {
                        (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)),
                          (e += 1);
                      }.bind(this),
                      50
                    );
                }.bind(this)),
                (this.createFootageData = function (t) {
                  var e = { assetData: t },
                    r = n(t, this.assetsPath, this.path);
                  return (
                    assetLoader.load(
                      r,
                      function (t) {
                        (e.img = t), this._footageLoaded();
                      }.bind(this),
                      function () {
                        (e.img = {}), this._footageLoaded();
                      }.bind(this)
                    ),
                    e
                  );
                }.bind(this)),
                (this.assetsPath = ''),
                (this.path = ''),
                (this.totalImages = 0),
                (this.totalFootages = 0),
                (this.loadedAssets = 0),
                (this.loadedFootagesCount = 0),
                (this.imagesLoadedCb = null),
                (this.images = []);
            }
            return (
              (i.prototype = {
                loadAssets: function (t, e) {
                  var r;
                  this.imagesLoadedCb = e;
                  var n = t.length;
                  for (r = 0; r < n; r += 1)
                    t[r].layers ||
                      (t[r].t && 'seq' !== t[r].t
                        ? 3 === t[r].t &&
                          ((this.totalFootages += 1),
                          this.images.push(this.createFootageData(t[r])))
                        : ((this.totalImages += 1), this.images.push(this._createImageData(t[r]))));
                },
                setAssetsPath: function (t) {
                  this.assetsPath = t || '';
                },
                setPath: function (t) {
                  this.path = t || '';
                },
                loadedImages: function () {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function () {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function () {
                  (this.imagesLoadedCb = null), (this.images.length = 0);
                },
                getAsset: function (t) {
                  for (var e = 0, r = this.images.length; e < r; ) {
                    if (this.images[e].assetData === t) return this.images[e].img;
                    e += 1;
                  }
                  return null;
                },
                createImgData: function (e) {
                  var r = n(e, this.assetsPath, this.path),
                    i = createTag('img');
                  (i.crossOrigin = 'anonymous'),
                    i.addEventListener('load', this._imageLoaded, !1),
                    i.addEventListener(
                      'error',
                      function () {
                        (a.img = t), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    (i.src = r);
                  var a = { img: i, assetData: e };
                  return a;
                },
                createImageData: function (e) {
                  var r = n(e, this.assetsPath, this.path),
                    i = createNS('image');
                  isSafari
                    ? this.testImageLoaded(i)
                    : i.addEventListener('load', this._imageLoaded, !1),
                    i.addEventListener(
                      'error',
                      function () {
                        (a.img = t), this._imageLoaded();
                      }.bind(this),
                      !1
                    ),
                    i.setAttributeNS('http://www.w3.org/1999/xlink', 'href', r),
                    this._elementHelper.append
                      ? this._elementHelper.append(i)
                      : this._elementHelper.appendChild(i);
                  var a = { img: i, assetData: e };
                  return a;
                },
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: function (t, e) {
                  'svg' === t
                    ? ((this._elementHelper = e),
                      (this._createImageData = this.createImageData.bind(this)))
                    : (this._createImageData = this.createImgData.bind(this));
                },
              }),
              i
            );
          })(),
          featureSupport =
            ((ob = { maskType: !0 }),
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (ob.maskType = !1),
            ob),
          ob,
          filtersFactory = (function () {
            var t = {};
            return (
              (t.createFilter = function (t, e) {
                var r = createNS('filter');
                r.setAttribute('id', t),
                  !0 !== e &&
                    (r.setAttribute('filterUnits', 'objectBoundingBox'),
                    r.setAttribute('x', '0%'),
                    r.setAttribute('y', '0%'),
                    r.setAttribute('width', '100%'),
                    r.setAttribute('height', '100%'));
                return r;
              }),
              (t.createAlphaToLuminanceFilter = function () {
                var t = createNS('feColorMatrix');
                return (
                  t.setAttribute('type', 'matrix'),
                  t.setAttribute('color-interpolation-filters', 'sRGB'),
                  t.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'),
                  t
                );
              }),
              t
            );
          })(),
          assetLoader = (function () {
            function t(t) {
              return t.response && 'object' == typeof t.response
                ? t.response
                : t.response && 'string' == typeof t.response
                ? JSON.parse(t.response)
                : t.responseText
                ? JSON.parse(t.responseText)
                : null;
            }
            return {
              load: function (e, r, n) {
                var i,
                  a = new XMLHttpRequest();
                try {
                  a.responseType = 'json';
                } catch (t) {}
                (a.onreadystatechange = function () {
                  if (4 === a.readyState)
                    if (200 === a.status) (i = t(a)), r(i);
                    else
                      try {
                        (i = t(a)), r(i);
                      } catch (t) {
                        n && n(t);
                      }
                }),
                  a.open('GET', e, !0),
                  a.send();
              },
            };
          })();
        function TextAnimatorProperty(t, e, r) {
          (this._isFirstFrame = !0),
            (this._hasMaskedPath = !1),
            (this._frameId = -1),
            (this._textData = t),
            (this._renderType = e),
            (this._elem = r),
            (this._animatorsData = createSizedArray(this._textData.a.length)),
            (this._pathData = {}),
            (this._moreOptions = { alignment: {} }),
            (this.renderedLetters = []),
            (this.lettersChangedFlag = !1),
            this.initDynamicPropertyContainer(r);
        }
        function TextAnimatorDataProperty(t, e, r) {
          var n = { propType: !1 },
            i = PropertyFactory.getProp,
            a = e.a;
          (this.a = {
            r: a.r ? i(t, a.r, 0, degToRads, r) : n,
            rx: a.rx ? i(t, a.rx, 0, degToRads, r) : n,
            ry: a.ry ? i(t, a.ry, 0, degToRads, r) : n,
            sk: a.sk ? i(t, a.sk, 0, degToRads, r) : n,
            sa: a.sa ? i(t, a.sa, 0, degToRads, r) : n,
            s: a.s ? i(t, a.s, 1, 0.01, r) : n,
            a: a.a ? i(t, a.a, 1, 0, r) : n,
            o: a.o ? i(t, a.o, 0, 0.01, r) : n,
            p: a.p ? i(t, a.p, 1, 0, r) : n,
            sw: a.sw ? i(t, a.sw, 0, 0, r) : n,
            sc: a.sc ? i(t, a.sc, 1, 0, r) : n,
            fc: a.fc ? i(t, a.fc, 1, 0, r) : n,
            fh: a.fh ? i(t, a.fh, 0, 0, r) : n,
            fs: a.fs ? i(t, a.fs, 0, 0.01, r) : n,
            fb: a.fb ? i(t, a.fb, 0, 0.01, r) : n,
            t: a.t ? i(t, a.t, 0, 0, r) : n,
          }),
            (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
            (this.s.t = e.s.t);
        }
        function LetterProps(t, e, r, n, i, a) {
          (this.o = t),
            (this.sw = e),
            (this.sc = r),
            (this.fc = n),
            (this.m = i),
            (this.p = a),
            (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!n, m: !0, p: !0 });
        }
        function TextProperty(t, e) {
          (this._frameId = initialDefaultFrame),
            (this.pv = ''),
            (this.v = ''),
            (this.kf = !1),
            (this._isFirstFrame = !0),
            (this._mdf = !1),
            (this.data = e),
            (this.elem = t),
            (this.comp = this.elem.comp),
            (this.keysIndex = 0),
            (this.canResize = !1),
            (this.minimumFontSize = 1),
            (this.effectsSequence = []),
            (this.currentData = {
              ascent: 0,
              boxWidth: this.defaultBoxWidth,
              f: '',
              fStyle: '',
              fWeight: '',
              fc: '',
              j: '',
              justifyOffset: '',
              l: [],
              lh: 0,
              lineWidths: [],
              ls: '',
              of: '',
              s: '',
              sc: '',
              sw: 0,
              t: 0,
              tr: 0,
              sz: 0,
              ps: null,
              fillColorAnim: !1,
              strokeColorAnim: !1,
              strokeWidthAnim: !1,
              yOffset: 0,
              finalSize: 0,
              finalText: [],
              finalLineHeight: 0,
              __complete: !1,
            }),
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData);
        }
        (TextAnimatorProperty.prototype.searchProperties = function () {
          var t,
            e,
            r = this._textData.a.length,
            n = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1)
            (e = this._textData.a[t]),
              (this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this));
          this._textData.p && 'm' in this._textData.p
            ? ((this._pathData = {
                f: n(this._elem, this._textData.p.f, 0, 0, this),
                l: n(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
              }),
              (this._hasMaskedPath = !0))
            : (this._hasMaskedPath = !1),
            (this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this));
        }),
          (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (
              ((this.lettersChangedFlag = e),
              this._mdf ||
                this._isFirstFrame ||
                e ||
                (this._hasMaskedPath && this._pathData.m._mdf))
            ) {
              this._isFirstFrame = !1;
              var r,
                n,
                i,
                a,
                s,
                o,
                l,
                h,
                c,
                u,
                f,
                p,
                d,
                m,
                v,
                y,
                g,
                E,
                b,
                _ = this._moreOptions.alignment.v,
                x = this._animatorsData,
                S = this._textData,
                T = this.mHelper,
                I = this._renderType,
                A = this.renderedLetters.length,
                P = t.l;
              if (this._hasMaskedPath) {
                if (((b = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                  var w,
                    C = b.v;
                  for (
                    this._pathData.r && (C = C.reverse()),
                      s = { tLength: 0, segments: [] },
                      a = C._length - 1,
                      y = 0,
                      i = 0;
                    i < a;
                    i += 1
                  )
                    (w = bez.buildBezierData(
                      C.v[i],
                      C.v[i + 1],
                      [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]],
                      [C.i[i + 1][0] - C.v[i + 1][0], C.i[i + 1][1] - C.v[i + 1][1]]
                    )),
                      (s.tLength += w.segmentLength),
                      s.segments.push(w),
                      (y += w.segmentLength);
                  (i = a),
                    b.v.c &&
                      ((w = bez.buildBezierData(
                        C.v[i],
                        C.v[0],
                        [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]],
                        [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]
                      )),
                      (s.tLength += w.segmentLength),
                      s.segments.push(w),
                      (y += w.segmentLength)),
                    (this._pathData.pi = s);
                }
                if (
                  ((s = this._pathData.pi),
                  (o = this._pathData.f.v),
                  (f = 0),
                  (u = 1),
                  (h = 0),
                  (c = !0),
                  (m = s.segments),
                  o < 0 && b.v.c)
                )
                  for (
                    s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength),
                      u = (d = m[(f = m.length - 1)].points).length - 1;
                    o < 0;

                  )
                    (o += d[u].partialLength),
                      (u -= 1) < 0 && (u = (d = m[(f -= 1)].points).length - 1);
                (p = (d = m[f].points)[u - 1]), (v = (l = d[u]).partialLength);
              }
              (a = P.length), (r = 0), (n = 0);
              var D,
                M,
                O,
                F,
                k,
                R = 1.2 * t.finalSize * 0.714,
                L = !0;
              O = x.length;
              var N,
                V,
                B,
                G,
                j,
                z,
                H,
                X,
                W,
                U,
                q,
                Y,
                K = -1,
                Q = o,
                $ = f,
                Z = u,
                J = -1,
                tt = '',
                et = this.defaultPropsArray;
              if (2 === t.j || 1 === t.j) {
                var rt = 0,
                  nt = 0,
                  it = 2 === t.j ? -0.5 : -1,
                  at = 0,
                  st = !0;
                for (i = 0; i < a; i += 1)
                  if (P[i].n) {
                    for (rt && (rt += nt); at < i; ) (P[at].animatorJustifyOffset = rt), (at += 1);
                    (rt = 0), (st = !0);
                  } else {
                    for (M = 0; M < O; M += 1)
                      (D = x[M].a).t.propType &&
                        (st && 2 === t.j && (nt += D.t.v * it),
                        (k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)).length
                          ? (rt += D.t.v * k[0] * it)
                          : (rt += D.t.v * k * it));
                    st = !1;
                  }
                for (rt && (rt += nt); at < i; ) (P[at].animatorJustifyOffset = rt), (at += 1);
              }
              for (i = 0; i < a; i += 1) {
                if ((T.reset(), (G = 1), P[i].n))
                  (r = 0),
                    (n += t.yOffset),
                    (n += L ? 1 : 0),
                    (o = Q),
                    (L = !1),
                    this._hasMaskedPath &&
                      ((u = Z),
                      (p = (d = m[(f = $)].points)[u - 1]),
                      (v = (l = d[u]).partialLength),
                      (h = 0)),
                    (tt = ''),
                    (q = ''),
                    (W = ''),
                    (Y = ''),
                    (et = this.defaultPropsArray);
                else {
                  if (this._hasMaskedPath) {
                    if (J !== P[i].line) {
                      switch (t.j) {
                        case 1:
                          o += y - t.lineWidths[P[i].line];
                          break;
                        case 2:
                          o += (y - t.lineWidths[P[i].line]) / 2;
                      }
                      J = P[i].line;
                    }
                    K !== P[i].ind &&
                      (P[K] && (o += P[K].extra), (o += P[i].an / 2), (K = P[i].ind)),
                      (o += _[0] * P[i].an * 0.005);
                    var ot = 0;
                    for (M = 0; M < O; M += 1)
                      (D = x[M].a).p.propType &&
                        ((k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)).length
                          ? (ot += D.p.v[0] * k[0])
                          : (ot += D.p.v[0] * k)),
                        D.a.propType &&
                          ((k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)).length
                            ? (ot += D.a.v[0] * k[0])
                            : (ot += D.a.v[0] * k));
                    for (c = !0; c; )
                      h + v >= o + ot || !d
                        ? ((g = (o + ot - h) / l.partialLength),
                          (V = p.point[0] + (l.point[0] - p.point[0]) * g),
                          (B = p.point[1] + (l.point[1] - p.point[1]) * g),
                          T.translate(-_[0] * P[i].an * 0.005, -_[1] * R * 0.01),
                          (c = !1))
                        : d &&
                          ((h += l.partialLength),
                          (u += 1) >= d.length &&
                            ((u = 0),
                            m[(f += 1)]
                              ? (d = m[f].points)
                              : b.v.c
                              ? ((u = 0), (d = m[(f = 0)].points))
                              : ((h -= l.partialLength), (d = null))),
                          d && ((p = l), (v = (l = d[u]).partialLength)));
                    (N = P[i].an / 2 - P[i].add), T.translate(-N, 0, 0);
                  } else
                    (N = P[i].an / 2 - P[i].add),
                      T.translate(-N, 0, 0),
                      T.translate(-_[0] * P[i].an * 0.005, -_[1] * R * 0.01, 0);
                  for (M = 0; M < O; M += 1)
                    (D = x[M].a).t.propType &&
                      ((k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)),
                      (0 === r && 0 === t.j) ||
                        (this._hasMaskedPath
                          ? k.length
                            ? (o += D.t.v * k[0])
                            : (o += D.t.v * k)
                          : k.length
                          ? (r += D.t.v * k[0])
                          : (r += D.t.v * k)));
                  for (
                    t.strokeWidthAnim && (z = t.sw || 0),
                      t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                      t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]),
                      M = 0;
                    M < O;
                    M += 1
                  )
                    (D = x[M].a).a.propType &&
                      ((k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)).length
                        ? T.translate(-D.a.v[0] * k[0], -D.a.v[1] * k[1], D.a.v[2] * k[2])
                        : T.translate(-D.a.v[0] * k, -D.a.v[1] * k, D.a.v[2] * k));
                  for (M = 0; M < O; M += 1)
                    (D = x[M].a).s.propType &&
                      ((k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)).length
                        ? T.scale(1 + (D.s.v[0] - 1) * k[0], 1 + (D.s.v[1] - 1) * k[1], 1)
                        : T.scale(1 + (D.s.v[0] - 1) * k, 1 + (D.s.v[1] - 1) * k, 1));
                  for (M = 0; M < O; M += 1) {
                    if (
                      ((D = x[M].a),
                      (k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)),
                      D.sk.propType &&
                        (k.length
                          ? T.skewFromAxis(-D.sk.v * k[0], D.sa.v * k[1])
                          : T.skewFromAxis(-D.sk.v * k, D.sa.v * k)),
                      D.r.propType && (k.length ? T.rotateZ(-D.r.v * k[2]) : T.rotateZ(-D.r.v * k)),
                      D.ry.propType &&
                        (k.length ? T.rotateY(D.ry.v * k[1]) : T.rotateY(D.ry.v * k)),
                      D.rx.propType &&
                        (k.length ? T.rotateX(D.rx.v * k[0]) : T.rotateX(D.rx.v * k)),
                      D.o.propType &&
                        (k.length ? (G += (D.o.v * k[0] - G) * k[0]) : (G += (D.o.v * k - G) * k)),
                      t.strokeWidthAnim &&
                        D.sw.propType &&
                        (k.length ? (z += D.sw.v * k[0]) : (z += D.sw.v * k)),
                      t.strokeColorAnim && D.sc.propType)
                    )
                      for (X = 0; X < 3; X += 1)
                        k.length
                          ? (j[X] += (D.sc.v[X] - j[X]) * k[0])
                          : (j[X] += (D.sc.v[X] - j[X]) * k);
                    if (t.fillColorAnim && t.fc) {
                      if (D.fc.propType)
                        for (X = 0; X < 3; X += 1)
                          k.length
                            ? (H[X] += (D.fc.v[X] - H[X]) * k[0])
                            : (H[X] += (D.fc.v[X] - H[X]) * k);
                      D.fh.propType &&
                        (H = k.length ? addHueToRGB(H, D.fh.v * k[0]) : addHueToRGB(H, D.fh.v * k)),
                        D.fs.propType &&
                          (H = k.length
                            ? addSaturationToRGB(H, D.fs.v * k[0])
                            : addSaturationToRGB(H, D.fs.v * k)),
                        D.fb.propType &&
                          (H = k.length
                            ? addBrightnessToRGB(H, D.fb.v * k[0])
                            : addBrightnessToRGB(H, D.fb.v * k));
                    }
                  }
                  for (M = 0; M < O; M += 1)
                    (D = x[M].a).p.propType &&
                      ((k = x[M].s.getMult(P[i].anIndexes[M], S.a[M].s.totalChars)),
                      this._hasMaskedPath
                        ? k.length
                          ? T.translate(0, D.p.v[1] * k[0], -D.p.v[2] * k[1])
                          : T.translate(0, D.p.v[1] * k, -D.p.v[2] * k)
                        : k.length
                        ? T.translate(D.p.v[0] * k[0], D.p.v[1] * k[1], -D.p.v[2] * k[2])
                        : T.translate(D.p.v[0] * k, D.p.v[1] * k, -D.p.v[2] * k));
                  if (
                    (t.strokeWidthAnim && (W = z < 0 ? 0 : z),
                    t.strokeColorAnim &&
                      (U =
                        'rgb(' +
                        Math.round(255 * j[0]) +
                        ',' +
                        Math.round(255 * j[1]) +
                        ',' +
                        Math.round(255 * j[2]) +
                        ')'),
                    t.fillColorAnim &&
                      t.fc &&
                      (q =
                        'rgb(' +
                        Math.round(255 * H[0]) +
                        ',' +
                        Math.round(255 * H[1]) +
                        ',' +
                        Math.round(255 * H[2]) +
                        ')'),
                    this._hasMaskedPath)
                  ) {
                    if ((T.translate(0, -t.ls), T.translate(0, _[1] * R * 0.01 + n, 0), S.p.p)) {
                      E = (l.point[1] - p.point[1]) / (l.point[0] - p.point[0]);
                      var lt = (180 * Math.atan(E)) / Math.PI;
                      l.point[0] < p.point[0] && (lt += 180), T.rotate((-lt * Math.PI) / 180);
                    }
                    T.translate(V, B, 0),
                      (o -= _[0] * P[i].an * 0.005),
                      P[i + 1] &&
                        K !== P[i + 1].ind &&
                        ((o += P[i].an / 2), (o += 0.001 * t.tr * t.finalSize));
                  } else {
                    switch (
                      (T.translate(r, n, 0),
                      t.ps && T.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                      t.j)
                    ) {
                      case 1:
                        T.translate(
                          P[i].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[P[i].line]),
                          0,
                          0
                        );
                        break;
                      case 2:
                        T.translate(
                          P[i].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[P[i].line]) / 2,
                          0,
                          0
                        );
                    }
                    T.translate(0, -t.ls),
                      T.translate(N, 0, 0),
                      T.translate(_[0] * P[i].an * 0.005, _[1] * R * 0.01, 0),
                      (r += P[i].l + 0.001 * t.tr * t.finalSize);
                  }
                  'html' === I
                    ? (tt = T.toCSS())
                    : 'svg' === I
                    ? (tt = T.to2dCSS())
                    : (et = [
                        T.props[0],
                        T.props[1],
                        T.props[2],
                        T.props[3],
                        T.props[4],
                        T.props[5],
                        T.props[6],
                        T.props[7],
                        T.props[8],
                        T.props[9],
                        T.props[10],
                        T.props[11],
                        T.props[12],
                        T.props[13],
                        T.props[14],
                        T.props[15],
                      ]),
                    (Y = G);
                }
                A <= i
                  ? ((F = new LetterProps(Y, W, U, q, tt, et)),
                    this.renderedLetters.push(F),
                    (A += 1),
                    (this.lettersChangedFlag = !0))
                  : ((F = this.renderedLetters[i]),
                    (this.lettersChangedFlag =
                      F.update(Y, W, U, q, tt, et) || this.lettersChangedFlag));
              }
            }
          }),
          (TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId &&
              ((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
          }),
          (TextAnimatorProperty.prototype.mHelper = new Matrix()),
          (TextAnimatorProperty.prototype.defaultPropsArray = []),
          extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
          (LetterProps.prototype.update = function (t, e, r, n, i, a) {
            (this._mdf.o = !1),
              (this._mdf.sw = !1),
              (this._mdf.sc = !1),
              (this._mdf.fc = !1),
              (this._mdf.m = !1),
              (this._mdf.p = !1);
            var s = !1;
            return (
              this.o !== t && ((this.o = t), (this._mdf.o = !0), (s = !0)),
              this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (s = !0)),
              this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (s = !0)),
              this.fc !== n && ((this.fc = n), (this._mdf.fc = !0), (s = !0)),
              this.m !== i && ((this.m = i), (this._mdf.m = !0), (s = !0)),
              !a.length ||
                (this.p[0] === a[0] &&
                  this.p[1] === a[1] &&
                  this.p[4] === a[4] &&
                  this.p[5] === a[5] &&
                  this.p[12] === a[12] &&
                  this.p[13] === a[13]) ||
                ((this.p = a), (this._mdf.p = !0), (s = !0)),
              s
            );
          }),
          (TextProperty.prototype.defaultBoxWidth = [0, 0]),
          (TextProperty.prototype.copyData = function (t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }),
          (TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t),
              (this.currentData = t),
              (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth),
              (this._mdf = !0);
          }),
          (TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes();
          }),
          (TextProperty.prototype.searchKeyframes = function () {
            return (
              (this.kf = this.data.d.k.length > 1),
              this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
              this.kf
            );
          }),
          (TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) ||
              t
            ) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var e = this.currentData,
                r = this.keysIndex;
              if (this.lock) this.setCurrentData(this.currentData);
              else {
                var n;
                (this.lock = !0), (this._mdf = !1);
                var i = this.effectsSequence.length,
                  a = t || this.data.d.k[this.keysIndex].s;
                for (n = 0; n < i; n += 1)
                  a =
                    r !== this.keysIndex
                      ? this.effectsSequence[n](a, a.t)
                      : this.effectsSequence[n](this.currentData, a.t);
                e !== a && this.setCurrentData(a),
                  (this.v = this.currentData),
                  (this.pv = this.v),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId);
              }
            }
          }),
          (TextProperty.prototype.getKeyframeValue = function () {
            for (
              var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length;
              r <= n - 1 && !(r === n - 1 || t[r + 1].t > e);

            )
              r += 1;
            return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
          }),
          (TextProperty.prototype.buildFinalText = function (t) {
            for (var e, r, n = [], i = 0, a = t.length, s = !1; i < a; )
              (e = t.charCodeAt(i)),
                FontManager.isCombinedCharacter(e)
                  ? (n[n.length - 1] += t.charAt(i))
                  : e >= 55296 && e <= 56319
                  ? (r = t.charCodeAt(i + 1)) >= 56320 && r <= 57343
                    ? (s || FontManager.isModifier(e, r)
                        ? ((n[n.length - 1] += t.substr(i, 2)), (s = !1))
                        : n.push(t.substr(i, 2)),
                      (i += 1))
                    : n.push(t.charAt(i))
                  : e > 56319
                  ? ((r = t.charCodeAt(i + 1)),
                    FontManager.isZeroWidthJoiner(e, r)
                      ? ((s = !0), (n[n.length - 1] += t.substr(i, 2)), (i += 1))
                      : n.push(t.charAt(i)))
                  : FontManager.isZeroWidthJoiner(e)
                  ? ((n[n.length - 1] += t.charAt(i)), (s = !0))
                  : n.push(t.charAt(i)),
                (i += 1);
            return n;
          }),
          (TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e,
              r,
              n,
              i,
              a,
              s,
              o,
              l = this.elem.globalData.fontManager,
              h = this.data,
              c = [],
              u = 0,
              f = h.m.g,
              p = 0,
              d = 0,
              m = 0,
              v = [],
              y = 0,
              g = 0,
              E = l.getFontByName(t.f),
              b = 0,
              _ = getFontProperties(E);
            (t.fWeight = _.weight),
              (t.fStyle = _.style),
              (t.finalSize = t.s),
              (t.finalText = this.buildFinalText(t.t)),
              (r = t.finalText.length),
              (t.finalLineHeight = t.lh);
            var x,
              S = (t.tr / 1e3) * t.finalSize;
            if (t.sz)
              for (var T, I, A = !0, P = t.sz[0], w = t.sz[1]; A; ) {
                (T = 0),
                  (y = 0),
                  (r = (I = this.buildFinalText(t.t)).length),
                  (S = (t.tr / 1e3) * t.finalSize);
                var C = -1;
                for (e = 0; e < r; e += 1)
                  (x = I[e].charCodeAt(0)),
                    (n = !1),
                    ' ' === I[e]
                      ? (C = e)
                      : (13 !== x && 3 !== x) ||
                        ((y = 0), (n = !0), (T += t.finalLineHeight || 1.2 * t.finalSize)),
                    l.chars
                      ? ((o = l.getCharData(I[e], E.fStyle, E.fFamily)),
                        (b = n ? 0 : (o.w * t.finalSize) / 100))
                      : (b = l.measureText(I[e], t.f, t.finalSize)),
                    y + b > P && ' ' !== I[e]
                      ? (-1 === C ? (r += 1) : (e = C),
                        (T += t.finalLineHeight || 1.2 * t.finalSize),
                        I.splice(e, C === e ? 1 : 0, '\r'),
                        (C = -1),
                        (y = 0))
                      : ((y += b), (y += S));
                (T += (E.ascent * t.finalSize) / 100),
                  this.canResize && t.finalSize > this.minimumFontSize && w < T
                    ? ((t.finalSize -= 1), (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                    : ((t.finalText = I), (r = t.finalText.length), (A = !1));
              }
            (y = -S), (b = 0);
            var D,
              M = 0;
            for (e = 0; e < r; e += 1)
              if (
                ((n = !1),
                13 === (x = (D = t.finalText[e]).charCodeAt(0)) || 3 === x
                  ? ((M = 0),
                    v.push(y),
                    (g = y > g ? y : g),
                    (y = -2 * S),
                    (i = ''),
                    (n = !0),
                    (m += 1))
                  : (i = D),
                l.chars
                  ? ((o = l.getCharData(D, E.fStyle, l.getFontByName(t.f).fFamily)),
                    (b = n ? 0 : (o.w * t.finalSize) / 100))
                  : (b = l.measureText(i, t.f, t.finalSize)),
                ' ' === D ? (M += b + S) : ((y += b + S + M), (M = 0)),
                c.push({
                  l: b,
                  an: b,
                  add: p,
                  n: n,
                  anIndexes: [],
                  val: i,
                  line: m,
                  animatorJustifyOffset: 0,
                }),
                2 == f)
              ) {
                if (((p += b), '' === i || ' ' === i || e === r - 1)) {
                  for (('' !== i && ' ' !== i) || (p -= b); d <= e; )
                    (c[d].an = p), (c[d].ind = u), (c[d].extra = b), (d += 1);
                  (u += 1), (p = 0);
                }
              } else if (3 == f) {
                if (((p += b), '' === i || e === r - 1)) {
                  for ('' === i && (p -= b); d <= e; )
                    (c[d].an = p), (c[d].ind = u), (c[d].extra = b), (d += 1);
                  (p = 0), (u += 1);
                }
              } else (c[u].ind = u), (c[u].extra = 0), (u += 1);
            if (((t.l = c), (g = y > g ? y : g), v.push(y), t.sz))
              (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
            else
              switch (((t.boxWidth = g), t.j)) {
                case 1:
                  t.justifyOffset = -t.boxWidth;
                  break;
                case 2:
                  t.justifyOffset = -t.boxWidth / 2;
                  break;
                default:
                  t.justifyOffset = 0;
              }
            t.lineWidths = v;
            var O,
              F,
              k,
              R,
              L = h.a;
            s = L.length;
            var N = [];
            for (a = 0; a < s; a += 1) {
              for (
                (O = L[a]).a.sc && (t.strokeColorAnim = !0),
                  O.a.sw && (t.strokeWidthAnim = !0),
                  (O.a.fc || O.a.fh || O.a.fs || O.a.fb) && (t.fillColorAnim = !0),
                  R = 0,
                  k = O.s.b,
                  e = 0;
                e < r;
                e += 1
              )
                ((F = c[e]).anIndexes[a] = R),
                  ((1 == k && '' !== F.val) ||
                    (2 == k && '' !== F.val && ' ' !== F.val) ||
                    (3 == k && (F.n || ' ' == F.val || e == r - 1)) ||
                    (4 == k && (F.n || e == r - 1))) &&
                    (1 === O.s.rn && N.push(R), (R += 1));
              h.a[a].s.totalChars = R;
              var V,
                B = -1;
              if (1 === O.s.rn)
                for (e = 0; e < r; e += 1)
                  B != (F = c[e]).anIndexes[a] &&
                    ((B = F.anIndexes[a]),
                    (V = N.splice(Math.floor(Math.random() * N.length), 1)[0])),
                    (F.anIndexes[a] = V);
            }
            (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
              (t.ls = t.ls || 0),
              (t.ascent = (E.ascent * t.finalSize) / 100);
          }),
          (TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            (r = this.copyData(r, t)),
              (this.data.d.k[e].s = r),
              this.recalculate(e),
              this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            (e.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(e);
          }),
          (TextProperty.prototype.canResizeFont = function (t) {
            (this.canResize = t),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this);
          }),
          (TextProperty.prototype.setMinimumFontSize = function (t) {
            (this.minimumFontSize = Math.floor(t) || 1),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this);
          });
        var TextSelectorProp = (function () {
            var t = Math.max,
              e = Math.min,
              r = Math.floor;
            function n(t, e) {
              (this._currentTextLength = -1),
                (this.k = !1),
                (this.data = e),
                (this.elem = t),
                (this.comp = t.comp),
                (this.finalS = 0),
                (this.finalE = 0),
                this.initDynamicPropertyContainer(t),
                (this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this)),
                (this.e = 'e' in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }),
                (this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this)),
                (this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this)),
                (this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this)),
                (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                this.dynamicProperties.length || this.getValue();
            }
            return (
              (n.prototype = {
                getMult: function (n) {
                  this._currentTextLength !== this.elem.textProperty.currentData.l.length &&
                    this.getValue();
                  var i = 0,
                    a = 0,
                    s = 1,
                    o = 1;
                  this.ne.v > 0 ? (i = this.ne.v / 100) : (a = -this.ne.v / 100),
                    this.xe.v > 0 ? (s = 1 - this.xe.v / 100) : (o = 1 + this.xe.v / 100);
                  var l = BezierFactory.getBezierEasing(i, a, s, o).get,
                    h = 0,
                    c = this.finalS,
                    u = this.finalE,
                    f = this.data.sh;
                  if (2 === f)
                    h = l(
                      (h =
                        u === c ? (n >= u ? 1 : 0) : t(0, e(0.5 / (u - c) + (n - c) / (u - c), 1)))
                    );
                  else if (3 === f)
                    h = l(
                      (h =
                        u === c
                          ? n >= u
                            ? 0
                            : 1
                          : 1 - t(0, e(0.5 / (u - c) + (n - c) / (u - c), 1)))
                    );
                  else if (4 === f)
                    u === c
                      ? (h = 0)
                      : (h = t(0, e(0.5 / (u - c) + (n - c) / (u - c), 1))) < 0.5
                      ? (h *= 2)
                      : (h = 1 - 2 * (h - 0.5)),
                      (h = l(h));
                  else if (5 === f) {
                    if (u === c) h = 0;
                    else {
                      var p = u - c,
                        d = -p / 2 + (n = e(t(0, n + 0.5 - c), u - c)),
                        m = p / 2;
                      h = Math.sqrt(1 - (d * d) / (m * m));
                    }
                    h = l(h);
                  } else
                    6 === f
                      ? (u === c
                          ? (h = 0)
                          : ((n = e(t(0, n + 0.5 - c), u - c)),
                            (h = (1 + Math.cos(Math.PI + (2 * Math.PI * n) / (u - c))) / 2)),
                        (h = l(h)))
                      : (n >= r(c) && (h = t(0, e(n - c < 0 ? e(u, 1) - (c - n) : u - n, 1))),
                        (h = l(h)));
                  return h * this.a.v;
                },
                getValue: function (t) {
                  this.iterateDynamicProperties(),
                    (this._mdf = t || this._mdf),
                    (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0),
                    t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                  var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                    r = this.o.v / e,
                    n = this.s.v / e + r,
                    i = this.e.v / e + r;
                  if (n > i) {
                    var a = n;
                    (n = i), (i = a);
                  }
                  (this.finalS = n), (this.finalE = i);
                },
              }),
              extendPrototype([DynamicPropertyContainer], n),
              {
                getTextSelectorProp: function (t, e, r) {
                  return new n(t, e, r);
                },
              }
            );
          })(),
          poolFactory = function (t, e, r) {
            var n = 0,
              i = t,
              a = createSizedArray(i);
            return {
              newElement: function () {
                return n ? a[(n -= 1)] : e();
              },
              release: function (t) {
                n === i && ((a = pooling.double(a)), (i *= 2)), r && r(t), (a[n] = t), (n += 1);
              },
            };
          },
          pooling = (function () {
            return {
              double: function (t) {
                return t.concat(createSizedArray(t.length));
              },
            };
          })(),
          pointPool = (function () {
            return poolFactory(8, function () {
              return createTypedArray('float32', 2);
            });
          })(),
          shapePool = (function () {
            var t = poolFactory(
              4,
              function () {
                return new ShapePath();
              },
              function (t) {
                var e,
                  r = t._length;
                for (e = 0; e < r; e += 1)
                  pointPool.release(t.v[e]),
                    pointPool.release(t.i[e]),
                    pointPool.release(t.o[e]),
                    (t.v[e] = null),
                    (t.i[e] = null),
                    (t.o[e] = null);
                (t._length = 0), (t.c = !1);
              }
            );
            return (
              (t.clone = function (e) {
                var r,
                  n = t.newElement(),
                  i = void 0 === e._length ? e.v.length : e._length;
                for (n.setLength(i), n.c = e.c, r = 0; r < i; r += 1)
                  n.setTripleAt(
                    e.v[r][0],
                    e.v[r][1],
                    e.o[r][0],
                    e.o[r][1],
                    e.i[r][0],
                    e.i[r][1],
                    r
                  );
                return n;
              }),
              t
            );
          })(),
          shapeCollectionPool = (function () {
            var t = {
                newShapeCollection: function () {
                  var t;
                  t = e ? n[(e -= 1)] : new ShapeCollection();
                  return t;
                },
                release: function (t) {
                  var i,
                    a = t._length;
                  for (i = 0; i < a; i += 1) shapePool.release(t.shapes[i]);
                  (t._length = 0), e === r && ((n = pooling.double(n)), (r *= 2));
                  (n[e] = t), (e += 1);
                },
              },
              e = 0,
              r = 4,
              n = createSizedArray(r);
            return t;
          })(),
          segmentsLengthPool = (function () {
            return poolFactory(
              8,
              function () {
                return { lengths: [], totalLength: 0 };
              },
              function (t) {
                var e,
                  r = t.lengths.length;
                for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0;
              }
            );
          })(),
          bezierLengthPool = (function () {
            return poolFactory(8, function () {
              return {
                addedLength: 0,
                percents: createTypedArray('float32', defaultCurveSegments),
                lengths: createTypedArray('float32', defaultCurveSegments),
              };
            });
          })(),
          markerParser = (function () {
            function t(t) {
              for (var e, r = t.split('\r\n'), n = {}, i = 0, a = 0; a < r.length; a += 1)
                2 === (e = r[a].split(':')).length && ((n[e[0]] = e[1].trim()), (i += 1));
              if (0 === i) throw new Error();
              return n;
            }
            return function (e) {
              for (var r = [], n = 0; n < e.length; n += 1) {
                var i = e[n],
                  a = { time: i.tm, duration: i.dr };
                try {
                  a.payload = JSON.parse(e[n].cm);
                } catch (r) {
                  try {
                    a.payload = t(e[n].cm);
                  } catch (t) {
                    a.payload = { name: e[n] };
                  }
                }
                r.push(a);
              }
              return r;
            };
          })();
        function BaseRenderer() {}
        function SVGRenderer(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.svgElement = createNS('svg'));
          var r = '';
          if (e && e.title) {
            var n = createNS('title'),
              i = createElementID();
            n.setAttribute('id', i),
              (n.textContent = e.title),
              this.svgElement.appendChild(n),
              (r += i);
          }
          if (e && e.description) {
            var a = createNS('desc'),
              s = createElementID();
            a.setAttribute('id', s),
              (a.textContent = e.description),
              this.svgElement.appendChild(a),
              (r += ' ' + s);
          }
          r && this.svgElement.setAttribute('aria-labelledby', r);
          var o = createNS('defs');
          this.svgElement.appendChild(o);
          var l = createNS('g');
          this.svgElement.appendChild(l),
            (this.layerElement = l),
            (this.renderConfig = {
              preserveAspectRatio: (e && e.preserveAspectRatio) || 'xMidYMid meet',
              imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
              progressiveLoad: (e && e.progressiveLoad) || !1,
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              viewBoxOnly: (e && e.viewBoxOnly) || !1,
              viewBoxSize: (e && e.viewBoxSize) || !1,
              className: (e && e.className) || '',
              id: (e && e.id) || '',
              focusable: e && e.focusable,
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || '100%',
                height: (e && e.filterSize && e.filterSize.height) || '100%',
                x: (e && e.filterSize && e.filterSize.x) || '0%',
                y: (e && e.filterSize && e.filterSize.y) || '0%',
              },
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              defs: o,
              renderConfig: this.renderConfig,
            }),
            (this.elements = []),
            (this.pendingElements = []),
            (this.destroyed = !1),
            (this.rendererType = 'svg');
        }
        function CanvasRenderer(t, e) {
          (this.animationItem = t),
            (this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio: (e && e.preserveAspectRatio) || 'xMidYMid meet',
              imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
              className: (e && e.className) || '',
              id: (e && e.id) || '',
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr = (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = 'canvas');
        }
        function HybridRenderer(t, e) {
          (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
              className: (e && e.className) || '',
              imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || 'xMidYMid slice',
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || '400%',
                height: (e && e.filterSize && e.filterSize.height) || '400%',
                x: (e && e.filterSize && e.filterSize.x) || '-100%',
                y: (e && e.filterSize && e.filterSize.y) || '-100%',
              },
            }),
            (this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = 'html');
        }
        function MaskElement(t, e, r) {
          (this.data = t),
            (this.element = e),
            (this.globalData = r),
            (this.storedData = []),
            (this.masksProperties = this.data.masksProperties || []),
            (this.maskElement = null);
          var n,
            i,
            a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          (this.viewData = createSizedArray(s)), (this.solidPath = '');
          var o,
            l,
            h,
            c,
            u,
            f,
            p = this.masksProperties,
            d = 0,
            m = [],
            v = createElementID(),
            y = 'clipPath',
            g = 'clip-path';
          for (n = 0; n < s; n += 1)
            if (
              ((('a' !== p[n].mode && 'n' !== p[n].mode) ||
                p[n].inv ||
                100 !== p[n].o.k ||
                p[n].o.x) &&
                ((y = 'mask'), (g = 'mask')),
              ('s' !== p[n].mode && 'i' !== p[n].mode) || 0 !== d
                ? (h = null)
                : ((h = createNS('rect')).setAttribute('fill', '#ffffff'),
                  h.setAttribute('width', this.element.comp.data.w || 0),
                  h.setAttribute('height', this.element.comp.data.h || 0),
                  m.push(h)),
              (i = createNS('path')),
              'n' === p[n].mode)
            )
              (this.viewData[n] = {
                op: PropertyFactory.getProp(this.element, p[n].o, 0, 0.01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3),
                elem: i,
                lastPath: '',
              }),
                a.appendChild(i);
            else {
              var E;
              if (
                ((d += 1),
                i.setAttribute('fill', 's' === p[n].mode ? '#000000' : '#ffffff'),
                i.setAttribute('clip-rule', 'nonzero'),
                0 !== p[n].x.k
                  ? ((y = 'mask'),
                    (g = 'mask'),
                    (f = PropertyFactory.getProp(this.element, p[n].x, 0, null, this.element)),
                    (E = createElementID()),
                    (c = createNS('filter')).setAttribute('id', E),
                    (u = createNS('feMorphology')).setAttribute('operator', 'erode'),
                    u.setAttribute('in', 'SourceGraphic'),
                    u.setAttribute('radius', '0'),
                    c.appendChild(u),
                    a.appendChild(c),
                    i.setAttribute('stroke', 's' === p[n].mode ? '#000000' : '#ffffff'))
                  : ((u = null), (f = null)),
                (this.storedData[n] = {
                  elem: i,
                  x: f,
                  expan: u,
                  lastPath: '',
                  lastOperator: '',
                  filterId: E,
                  lastRadius: 0,
                }),
                'i' === p[n].mode)
              ) {
                l = m.length;
                var b = createNS('g');
                for (o = 0; o < l; o += 1) b.appendChild(m[o]);
                var _ = createNS('mask');
                _.setAttribute('mask-type', 'alpha'),
                  _.setAttribute('id', v + '_' + d),
                  _.appendChild(i),
                  a.appendChild(_),
                  b.setAttribute('mask', 'url(' + locationHref + '#' + v + '_' + d + ')'),
                  (m.length = 0),
                  m.push(b);
              } else m.push(i);
              p[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                (this.viewData[n] = {
                  elem: i,
                  lastPath: '',
                  op: PropertyFactory.getProp(this.element, p[n].o, 0, 0.01, this.element),
                  prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3),
                  invRect: h,
                }),
                this.viewData[n].prop.k ||
                  this.drawPath(p[n], this.viewData[n].prop.v, this.viewData[n]);
            }
          for (this.maskElement = createNS(y), s = m.length, n = 0; n < s; n += 1)
            this.maskElement.appendChild(m[n]);
          d > 0 &&
            (this.maskElement.setAttribute('id', v),
            this.element.maskedElement.setAttribute(g, 'url(' + locationHref + '#' + v + ')'),
            a.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this);
        }
        function HierarchyElement() {}
        function FrameElement() {}
        function TransformElement() {}
        function RenderableElement() {}
        function RenderableDOMElement() {}
        function ProcessedElement(t, e) {
          (this.elem = t), (this.pos = e);
        }
        function SVGStyleData(t, e) {
          (this.data = t),
            (this.type = t.ty),
            (this.d = ''),
            (this.lvl = e),
            (this._mdf = !1),
            (this.closed = !0 === t.hd),
            (this.pElem = createNS('path')),
            (this.msElem = null);
        }
        function SVGShapeData(t, e, r) {
          (this.caches = []),
            (this.styles = []),
            (this.transformers = t),
            (this.lStr = ''),
            (this.sh = r),
            (this.lvl = e),
            (this._isAnimated = !!r.k);
          for (var n = 0, i = t.length; n < i; ) {
            if (t[n].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break;
            }
            n += 1;
          }
        }
        function SVGTransformData(t, e, r) {
          (this.transform = { mProps: t, op: e, container: r }),
            (this.elements = []),
            (this._isAnimated =
              this.transform.mProps.dynamicProperties.length ||
              this.transform.op.effectsSequence.length);
        }
        function SVGStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r),
            (this._isAnimated = !!this._isAnimated);
        }
        function SVGFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r);
        }
        function SVGGradientFillStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            this.initGradientData(t, e, r);
        }
        function SVGGradientStrokeStyleData(t, e, r) {
          this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, 'svg', this)),
            this.initGradientData(t, e, r),
            (this._isAnimated = !!this._isAnimated);
        }
        function ShapeGroupData() {
          (this.it = []), (this.prevViewData = []), (this.gr = createNS('g'));
        }
        (BaseRenderer.prototype.checkLayers = function (t) {
          var e,
            r,
            n = this.layers.length;
          for (this.completeLayers = !0, e = n - 1; e >= 0; e -= 1)
            this.elements[e] ||
              ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                r.op - r.st > t - this.layers[e].st &&
                this.buildItem(e)),
              (this.completeLayers = !!this.elements[e] && this.completeLayers);
          this.checkPendingElements();
        }),
          (BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
              case 2:
                return this.createImage(t);
              case 0:
                return this.createComp(t);
              case 1:
                return this.createSolid(t);
              case 3:
                return this.createNull(t);
              case 4:
                return this.createShape(t);
              case 5:
                return this.createText(t);
              case 6:
                return this.createAudio(t);
              case 13:
                return this.createCamera(t);
              case 15:
                return this.createFootage(t);
              default:
                return this.createNull(t);
            }
          }),
          (BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          }),
          (BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.buildAllItems = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements();
          }),
          (BaseRenderer.prototype.includeLayers = function (t) {
            var e;
            this.completeLayers = !1;
            var r,
              n = t.length,
              i = this.layers.length;
            for (e = 0; e < n; e += 1)
              for (r = 0; r < i; ) {
                if (this.layers[r].id === t[e].id) {
                  this.layers[r] = t[e];
                  break;
                }
                r += 1;
              }
          }),
          (BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t;
          }),
          (BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
          }),
          (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
            for (var n = this.elements, i = this.layers, a = 0, s = i.length; a < s; )
              i[a].ind == e &&
                (n[a] && !0 !== n[a]
                  ? (r.push(n[a]),
                    n[a].setAsParent(),
                    void 0 !== i[a].parent
                      ? this.buildElementParenting(t, i[a].parent, r)
                      : t.setHierarchy(r))
                  : (this.buildItem(a), this.addPendingElement(t))),
                (a += 1);
          }),
          (BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t);
          }),
          (BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var n = this.createComp(t[e]);
                n.initExpressions(), this.globalData.projectInterface.registerComposition(n);
              }
          }),
          (BaseRenderer.prototype.setupGlobalData = function (t, e) {
            (this.globalData.fontManager = new FontManager()),
              this.globalData.fontManager.addChars(t.chars),
              this.globalData.fontManager.addFonts(t.fonts, e),
              (this.globalData.getAssetData = this.animationItem.getAssetData.bind(
                this.animationItem
              )),
              (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(
                this.animationItem
              )),
              (this.globalData.imageLoader = this.animationItem.imagePreloader),
              (this.globalData.audioController = this.animationItem.audioController),
              (this.globalData.frameId = 0),
              (this.globalData.frameRate = t.fr),
              (this.globalData.nm = t.nm),
              (this.globalData.compSize = { w: t.w, h: t.h });
          }),
          extendPrototype([BaseRenderer], SVGRenderer),
          (SVGRenderer.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
              this.renderConfig.viewBoxSize
                ? this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize)
                : this.svgElement.setAttribute('viewBox', '0 0 ' + t.w + ' ' + t.h),
              this.renderConfig.viewBoxOnly ||
                (this.svgElement.setAttribute('width', t.w),
                this.svgElement.setAttribute('height', t.h),
                (this.svgElement.style.width = '100%'),
                (this.svgElement.style.height = '100%'),
                (this.svgElement.style.transform = 'translate3d(0,0,0)')),
              this.renderConfig.className &&
                this.svgElement.setAttribute('class', this.renderConfig.className),
              this.renderConfig.id && this.svgElement.setAttribute('id', this.renderConfig.id),
              void 0 !== this.renderConfig.focusable &&
                this.svgElement.setAttribute('focusable', this.renderConfig.focusable),
              this.svgElement.setAttribute(
                'preserveAspectRatio',
                this.renderConfig.preserveAspectRatio
              ),
              this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e),
              (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
              (this.data = t);
            var r = createNS('clipPath'),
              n = createNS('rect');
            n.setAttribute('width', t.w),
              n.setAttribute('height', t.h),
              n.setAttribute('x', 0),
              n.setAttribute('y', 0);
            var i = createElementID();
            r.setAttribute('id', i),
              r.appendChild(n),
              this.layerElement.setAttribute('clip-path', 'url(' + locationHref + '#' + i + ')'),
              e.appendChild(r),
              (this.layers = t.layers),
              (this.elements = createSizedArray(t.layers.length));
          }),
          (SVGRenderer.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''),
              (this.layerElement = null),
              (this.globalData.defs = null);
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
            (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
          }),
          (SVGRenderer.prototype.updateContainerSize = function () {}),
          (SVGRenderer.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              e[t] = !0;
              var r = this.createItem(this.layers[t]);
              (e[t] = r),
                expressionsPlugin &&
                  (0 === this.layers[t].ty &&
                    this.globalData.projectInterface.registerComposition(r),
                  r.initExpressions()),
                this.appendElementInPos(r, t),
                this.layers[t].tt &&
                  (this.elements[t - 1] && !0 !== this.elements[t - 1]
                    ? r.setMatte(e[t - 1].layerId)
                    : (this.buildItem(t - 1), this.addPendingElement(r)));
            }
          }),
          (SVGRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              if ((t.checkParenting(), t.data.tt))
                for (var e = 0, r = this.elements.length; e < r; ) {
                  if (this.elements[e] === t) {
                    t.setMatte(this.elements[e - 1].layerId);
                    break;
                  }
                  e += 1;
                }
            }
          }),
          (SVGRenderer.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
              var e;
              null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
                (this.globalData.frameNum = t),
                (this.globalData.frameId += 1),
                (this.globalData.projectInterface.currentFrame = t),
                (this.globalData._mdf = !1);
              var r = this.layers.length;
              for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].prepareFrame(t - this.layers[e].st);
              if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)
                  (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
          }),
          (SVGRenderer.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              for (var n, i = 0; i < e; )
                this.elements[i] &&
                  !0 !== this.elements[i] &&
                  this.elements[i].getBaseElement() &&
                  (n = this.elements[i].getBaseElement()),
                  (i += 1);
              n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r);
            }
          }),
          (SVGRenderer.prototype.hide = function () {
            this.layerElement.style.display = 'none';
          }),
          (SVGRenderer.prototype.show = function () {
            this.layerElement.style.display = 'block';
          }),
          extendPrototype([BaseRenderer], CanvasRenderer),
          (CanvasRenderer.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull),
          (CanvasRenderer.prototype.ctxTransform = function (t) {
            if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
              if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15]
                ),
                  this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
              } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
          }),
          (CanvasRenderer.prototype.ctxOpacity = function (t) {
            if (!this.renderConfig.clearCanvas)
              return (
                (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                void (this.globalData.currentGlobalAlpha = this.contextData.cO)
              );
            (this.contextData.cO *= t < 0 ? 0 : t),
              this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                ((this.canvasContext.globalAlpha = this.contextData.cO),
                (this.globalData.currentGlobalAlpha = this.contextData.cO));
          }),
          (CanvasRenderer.prototype.reset = function () {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
          }),
          (CanvasRenderer.prototype.save = function (t) {
            if (this.renderConfig.clearCanvas) {
              t && this.canvasContext.save();
              var e,
                r = this.contextData.cTr.props;
              this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
              var n = this.contextData.saved[this.contextData.cArrPos];
              for (e = 0; e < 16; e += 1) n[e] = r[e];
              (this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO),
                (this.contextData.cArrPos += 1);
            } else this.canvasContext.save();
          }),
          (CanvasRenderer.prototype.restore = function (t) {
            if (this.renderConfig.clearCanvas) {
              t && (this.canvasContext.restore(), (this.globalData.blendMode = 'source-over')),
                (this.contextData.cArrPos -= 1);
              var e,
                r = this.contextData.saved[this.contextData.cArrPos],
                n = this.contextData.cTr.props;
              for (e = 0; e < 16; e += 1) n[e] = r[e];
              this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
                (r = this.contextData.savedOp[this.contextData.cArrPos]),
                (this.contextData.cO = r),
                this.globalData.currentGlobalAlpha !== r &&
                  ((this.canvasContext.globalAlpha = r), (this.globalData.currentGlobalAlpha = r));
            } else this.canvasContext.restore();
          }),
          (CanvasRenderer.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag('canvas');
              var e = this.animationItem.container.style;
              (e.width = '100%'), (e.height = '100%');
              var r = '0px 0px 0px';
              (e.transformOrigin = r),
                (e.mozTransformOrigin = r),
                (e.webkitTransformOrigin = r),
                (e['-webkit-transform'] = r),
                this.animationItem.wrapper.appendChild(this.animationItem.container),
                (this.canvasContext = this.animationItem.container.getContext('2d')),
                this.renderConfig.className &&
                  this.animationItem.container.setAttribute('class', this.renderConfig.className),
                this.renderConfig.id &&
                  this.animationItem.container.setAttribute('id', this.renderConfig.id);
            } else this.canvasContext = this.renderConfig.context;
            (this.data = t),
              (this.layers = t.layers),
              (this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }),
              this.setupGlobalData(t, document.body),
              (this.globalData.canvasContext = this.canvasContext),
              (this.globalData.renderer = this),
              (this.globalData.isDashed = !1),
              (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
              (this.globalData.transformCanvas = this.transformCanvas),
              (this.elements = createSizedArray(t.layers.length)),
              this.updateContainerSize();
          }),
          (CanvasRenderer.prototype.updateContainerSize = function () {
            var t, e, r, n;
            if (
              (this.reset(),
              this.animationItem.wrapper && this.animationItem.container
                ? ((t = this.animationItem.wrapper.offsetWidth),
                  (e = this.animationItem.wrapper.offsetHeight),
                  this.animationItem.container.setAttribute('width', t * this.renderConfig.dpr),
                  this.animationItem.container.setAttribute('height', e * this.renderConfig.dpr))
                : ((t = this.canvasContext.canvas.width * this.renderConfig.dpr),
                  (e = this.canvasContext.canvas.height * this.renderConfig.dpr)),
              -1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') ||
                -1 !== this.renderConfig.preserveAspectRatio.indexOf('slice'))
            ) {
              var i = this.renderConfig.preserveAspectRatio.split(' '),
                a = i[1] || 'meet',
                s = i[0] || 'xMidYMid',
                o = s.substr(0, 4),
                l = s.substr(4);
              (r = t / e),
                ((n = this.transformCanvas.w / this.transformCanvas.h) > r && 'meet' === a) ||
                (n < r && 'slice' === a)
                  ? ((this.transformCanvas.sx =
                      t / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      t / (this.transformCanvas.w / this.renderConfig.dpr)))
                  : ((this.transformCanvas.sx =
                      e / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      e / (this.transformCanvas.h / this.renderConfig.dpr))),
                (this.transformCanvas.tx =
                  'xMid' === o && ((n < r && 'meet' === a) || (n > r && 'slice' === a))
                    ? ((t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2) *
                      this.renderConfig.dpr
                    : 'xMax' === o && ((n < r && 'meet' === a) || (n > r && 'slice' === a))
                    ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) *
                      this.renderConfig.dpr
                    : 0),
                (this.transformCanvas.ty =
                  'YMid' === l && ((n > r && 'meet' === a) || (n < r && 'slice' === a))
                    ? ((e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2) *
                      this.renderConfig.dpr
                    : 'YMax' === l && ((n > r && 'meet' === a) || (n < r && 'slice' === a))
                    ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) *
                      this.renderConfig.dpr
                    : 0);
            } else
              'none' === this.renderConfig.preserveAspectRatio
                ? ((this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0))
                : ((this.transformCanvas.sx = this.renderConfig.dpr),
                  (this.transformCanvas.sy = this.renderConfig.dpr),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0));
            (this.transformCanvas.props = [
              this.transformCanvas.sx,
              0,
              0,
              0,
              0,
              this.transformCanvas.sy,
              0,
              0,
              0,
              0,
              1,
              0,
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              0,
              1,
            ]),
              this.ctxTransform(this.transformCanvas.props),
              this.canvasContext.beginPath(),
              this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
              this.canvasContext.closePath(),
              this.canvasContext.clip(),
              this.renderFrame(this.renderedFrame, !0);
          }),
          (CanvasRenderer.prototype.destroy = function () {
            var t;
            for (
              this.renderConfig.clearCanvas &&
                this.animationItem.wrapper &&
                (this.animationItem.wrapper.innerText = ''),
                t = (this.layers ? this.layers.length : 0) - 1;
              t >= 0;
              t -= 1
            )
              this.elements[t] && this.elements[t].destroy();
            (this.elements.length = 0),
              (this.globalData.canvasContext = null),
              (this.animationItem.container = null),
              (this.destroyed = !0);
          }),
          (CanvasRenderer.prototype.renderFrame = function (t, e) {
            if (
              (this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) &&
              !this.destroyed &&
              -1 !== t
            ) {
              var r;
              (this.renderedFrame = t),
                (this.globalData.frameNum = t - this.animationItem._isFirstFrame),
                (this.globalData.frameId += 1),
                (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                (this.globalData.projectInterface.currentFrame = t);
              var n = this.layers.length;
              for (this.completeLayers || this.checkLayers(t), r = 0; r < n; r += 1)
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].prepareFrame(t - this.layers[r].st);
              if (this.globalData._mdf) {
                for (
                  !0 === this.renderConfig.clearCanvas
                    ? this.canvasContext.clearRect(
                        0,
                        0,
                        this.transformCanvas.w,
                        this.transformCanvas.h
                      )
                    : this.save(),
                    r = n - 1;
                  r >= 0;
                  r -= 1
                )
                  (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore();
              }
            }
          }),
          (CanvasRenderer.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              var r = this.createItem(this.layers[t], this, this.globalData);
              (e[t] = r), r.initExpressions();
            }
          }),
          (CanvasRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              this.pendingElements.pop().checkParenting();
            }
          }),
          (CanvasRenderer.prototype.hide = function () {
            this.animationItem.container.style.display = 'none';
          }),
          (CanvasRenderer.prototype.show = function () {
            this.animationItem.container.style.display = 'block';
          }),
          extendPrototype([BaseRenderer], HybridRenderer),
          (HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem),
          (HybridRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              this.pendingElements.pop().checkParenting();
            }
          }),
          (HybridRenderer.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              var n = this.layers[e];
              if (n.ddd && this.supports3d) this.addTo3dContainer(r, e);
              else if (this.threeDElements) this.addTo3dContainer(r, e);
              else {
                for (var i, a, s = 0; s < e; )
                  this.elements[s] &&
                    !0 !== this.elements[s] &&
                    this.elements[s].getBaseElement &&
                    ((a = this.elements[s]),
                    (i =
                      (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) ||
                      i)),
                    (s += 1);
                i
                  ? (n.ddd && this.supports3d) || this.layerElement.insertBefore(r, i)
                  : (n.ddd && this.supports3d) || this.layerElement.appendChild(r);
              }
            }
          }),
          (HybridRenderer.prototype.createShape = function (t) {
            return this.supports3d
              ? new HShapeElement(t, this.globalData, this)
              : new SVGShapeElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createText = function (t) {
            return this.supports3d
              ? new HTextElement(t, this.globalData, this)
              : new SVGTextLottieElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createCamera = function (t) {
            return (this.camera = new HCameraElement(t, this.globalData, this)), this.camera;
          }),
          (HybridRenderer.prototype.createImage = function (t) {
            return this.supports3d
              ? new HImageElement(t, this.globalData, this)
              : new IImageElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createSolid = function (t) {
            return this.supports3d
              ? new HSolidElement(t, this.globalData, this)
              : new ISolidElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull),
          (HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, r = this.threeDElements.length; e < r; ) {
              if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                return this.threeDElements[e].perspectiveElem;
              e += 1;
            }
            return null;
          }),
          (HybridRenderer.prototype.createThreeDContainer = function (t, e) {
            var r,
              n,
              i = createTag('div');
            styleDiv(i);
            var a = createTag('div');
            if ((styleDiv(a), '3d' === e)) {
              ((r = i.style).width = this.globalData.compSize.w + 'px'),
                (r.height = this.globalData.compSize.h + 'px');
              (r.webkitTransformOrigin = '50% 50%'),
                (r.mozTransformOrigin = '50% 50%'),
                (r.transformOrigin = '50% 50%');
              var s = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
              ((n = a.style).transform = s), (n.webkitTransform = s);
            }
            i.appendChild(a);
            var o = { container: a, perspectiveElem: i, startPos: t, endPos: t, type: e };
            return this.threeDElements.push(o), o;
          }),
          (HybridRenderer.prototype.build3dContainers = function () {
            var t,
              e,
              r = this.layers.length,
              n = '';
            for (t = 0; t < r; t += 1)
              this.layers[t].ddd && 3 !== this.layers[t].ty
                ? ('3d' !== n && ((n = '3d'), (e = this.createThreeDContainer(t, '3d'))),
                  (e.endPos = Math.max(e.endPos, t)))
                : ('2d' !== n && ((n = '2d'), (e = this.createThreeDContainer(t, '2d'))),
                  (e.endPos = Math.max(e.endPos, t)));
            for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
              this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
          }),
          (HybridRenderer.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, n = this.threeDElements.length; r < n; ) {
              if (e <= this.threeDElements[r].endPos) {
                for (var i, a = this.threeDElements[r].startPos; a < e; )
                  this.elements[a] &&
                    this.elements[a].getBaseElement &&
                    (i = this.elements[a].getBaseElement()),
                    (a += 1);
                i
                  ? this.threeDElements[r].container.insertBefore(t, i)
                  : this.threeDElements[r].container.appendChild(t);
                break;
              }
              r += 1;
            }
          }),
          (HybridRenderer.prototype.configAnimation = function (t) {
            var e = createTag('div'),
              r = this.animationItem.wrapper,
              n = e.style;
            (n.width = t.w + 'px'),
              (n.height = t.h + 'px'),
              (this.resizerElem = e),
              styleDiv(e),
              (n.transformStyle = 'flat'),
              (n.mozTransformStyle = 'flat'),
              (n.webkitTransformStyle = 'flat'),
              this.renderConfig.className && e.setAttribute('class', this.renderConfig.className),
              r.appendChild(e),
              (n.overflow = 'hidden');
            var i = createNS('svg');
            i.setAttribute('width', '1'),
              i.setAttribute('height', '1'),
              styleDiv(i),
              this.resizerElem.appendChild(i);
            var a = createNS('defs');
            i.appendChild(a),
              (this.data = t),
              this.setupGlobalData(t, i),
              (this.globalData.defs = a),
              (this.layers = t.layers),
              (this.layerElement = this.resizerElem),
              this.build3dContainers(),
              this.updateContainerSize();
          }),
          (HybridRenderer.prototype.destroy = function () {
            var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''),
              (this.animationItem.container = null),
              (this.globalData.defs = null);
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
          }),
          (HybridRenderer.prototype.updateContainerSize = function () {
            var t,
              e,
              r,
              n,
              i = this.animationItem.wrapper.offsetWidth,
              a = this.animationItem.wrapper.offsetHeight,
              s = i / a;
            this.globalData.compSize.w / this.globalData.compSize.h > s
              ? ((t = i / this.globalData.compSize.w),
                (e = i / this.globalData.compSize.w),
                (r = 0),
                (n = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2))
              : ((t = a / this.globalData.compSize.h),
                (e = a / this.globalData.compSize.h),
                (r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2),
                (n = 0));
            var o = this.resizerElem.style;
            (o.webkitTransform =
              'matrix3d(' + t + ',0,0,0,0,' + e + ',0,0,0,0,1,0,' + r + ',' + n + ',0,1)'),
              (o.transform = o.webkitTransform);
          }),
          (HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame),
          (HybridRenderer.prototype.hide = function () {
            this.resizerElem.style.display = 'none';
          }),
          (HybridRenderer.prototype.show = function () {
            this.resizerElem.style.display = 'block';
          }),
          (HybridRenderer.prototype.initItems = function () {
            if ((this.buildAllItems(), this.camera)) this.camera.setup();
            else {
              var t,
                e = this.globalData.compSize.w,
                r = this.globalData.compSize.h,
                n = this.threeDElements.length;
              for (t = 0; t < n; t += 1) {
                var i = this.threeDElements[t].perspectiveElem.style;
                (i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + 'px'),
                  (i.perspective = i.webkitPerspective);
              }
            }
          }),
          (HybridRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length,
              n = createTag('div');
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var i = this.createComp(t[e], n, this.globalData.comp, null);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
              }
          }),
          (MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop;
          }),
          (MaskElement.prototype.renderFrame = function (t) {
            var e,
              r = this.element.finalTransform.mat,
              n = this.masksProperties.length;
            for (e = 0; e < n; e += 1)
              if (
                ((this.viewData[e].prop._mdf || t) &&
                  this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                (this.viewData[e].op._mdf || t) &&
                  this.viewData[e].elem.setAttribute('fill-opacity', this.viewData[e].op.v),
                'n' !== this.masksProperties[e].mode &&
                  (this.viewData[e].invRect &&
                    (this.element.finalTransform.mProp._mdf || t) &&
                    this.viewData[e].invRect.setAttribute(
                      'transform',
                      r.getInverseMatrix().to2dCSS()
                    ),
                  this.storedData[e].x && (this.storedData[e].x._mdf || t)))
              ) {
                var i = this.storedData[e].expan;
                this.storedData[e].x.v < 0
                  ? ('erode' !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = 'erode'),
                      this.storedData[e].elem.setAttribute(
                        'filter',
                        'url(' + locationHref + '#' + this.storedData[e].filterId + ')'
                      )),
                    i.setAttribute('radius', -this.storedData[e].x.v))
                  : ('dilate' !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = 'dilate'),
                      this.storedData[e].elem.setAttribute('filter', null)),
                    this.storedData[e].elem.setAttribute(
                      'stroke-width',
                      2 * this.storedData[e].x.v
                    ));
              }
          }),
          (MaskElement.prototype.getMaskelement = function () {
            return this.maskElement;
          }),
          (MaskElement.prototype.createLayerSolidPath = function () {
            var t = 'M0,0 ';
            return (
              (t += ' h' + this.globalData.compSize.w),
              (t += ' v' + this.globalData.compSize.h),
              (t += ' h-' + this.globalData.compSize.w),
              (t += ' v-' + this.globalData.compSize.h + ' ')
            );
          }),
          (MaskElement.prototype.drawPath = function (t, e, r) {
            var n,
              i,
              a = ' M' + e.v[0][0] + ',' + e.v[0][1];
            for (i = e._length, n = 1; n < i; n += 1)
              a +=
                ' C' +
                e.o[n - 1][0] +
                ',' +
                e.o[n - 1][1] +
                ' ' +
                e.i[n][0] +
                ',' +
                e.i[n][1] +
                ' ' +
                e.v[n][0] +
                ',' +
                e.v[n][1];
            if (
              (e.c &&
                i > 1 &&
                (a +=
                  ' C' +
                  e.o[n - 1][0] +
                  ',' +
                  e.o[n - 1][1] +
                  ' ' +
                  e.i[0][0] +
                  ',' +
                  e.i[0][1] +
                  ' ' +
                  e.v[0][0] +
                  ',' +
                  e.v[0][1]),
              r.lastPath !== a)
            ) {
              var s = '';
              r.elem && (e.c && (s = t.inv ? this.solidPath + a : a), r.elem.setAttribute('d', s)),
                (r.lastPath = a);
            }
          }),
          (MaskElement.prototype.destroy = function () {
            (this.element = null),
              (this.globalData = null),
              (this.maskElement = null),
              (this.data = null),
              (this.masksProperties = null);
          }),
          (HierarchyElement.prototype = {
            initHierarchy: function () {
              (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
            },
            setHierarchy: function (t) {
              this.hierarchy = t;
            },
            setAsParent: function () {
              this._isParent = !0;
            },
            checkParenting: function () {
              void 0 !== this.data.parent &&
                this.comp.buildElementParenting(this, this.data.parent, []);
            },
          }),
          (FrameElement.prototype = {
            initFrame: function () {
              (this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
            },
            prepareProperties: function (t, e) {
              var r,
                n = this.dynamicProperties.length;
              for (r = 0; r < n; r += 1)
                (e || (this._isParent && 'transform' === this.dynamicProperties[r].propType)) &&
                  (this.dynamicProperties[r].getValue(),
                  this.dynamicProperties[r]._mdf &&
                    ((this.globalData._mdf = !0), (this._mdf = !0)));
            },
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
            },
          }),
          (TransformElement.prototype = {
            initTransform: function () {
              (this.finalTransform = {
                mProp: this.data.ks
                  ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this)
                  : { o: 0 },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix(),
              }),
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty;
            },
            renderTransform: function () {
              if (
                ((this.finalTransform._opMdf =
                  this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                (this.finalTransform._matMdf =
                  this.finalTransform.mProp._mdf || this._isFirstFrame),
                this.hierarchy)
              ) {
                var t,
                  e = this.finalTransform.mat,
                  r = 0,
                  n = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                  for (; r < n; ) {
                    if (this.hierarchy[r].finalTransform.mProp._mdf) {
                      this.finalTransform._matMdf = !0;
                      break;
                    }
                    r += 1;
                  }
                if (this.finalTransform._matMdf)
                  for (
                    t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0;
                    r < n;
                    r += 1
                  )
                    (t = this.hierarchy[r].finalTransform.mProp.v.props),
                      e.transform(
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7],
                        t[8],
                        t[9],
                        t[10],
                        t[11],
                        t[12],
                        t[13],
                        t[14],
                        t[15]
                      );
              }
            },
            globalToLocal: function (t) {
              var e = [];
              e.push(this.finalTransform);
              for (var r, n = !0, i = this.comp; n; )
                i.finalTransform
                  ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), (i = i.comp))
                  : (n = !1);
              var a,
                s = e.length;
              for (r = 0; r < s; r += 1)
                (a = e[r].mat.applyToPointArray(0, 0, 0)), (t = [t[0] - a[0], t[1] - a[1], 0]);
              return t;
            },
            mHelper: new Matrix(),
          }),
          (RenderableElement.prototype = {
            initRenderable: function () {
              (this.isInRange = !1),
                (this.hidden = !1),
                (this.isTransparent = !1),
                (this.renderableComponents = []);
            },
            addRenderableComponent: function (t) {
              -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
            },
            removeRenderableComponent: function (t) {
              -1 !== this.renderableComponents.indexOf(t) &&
                this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
            },
            prepareRenderableFrame: function (t) {
              this.checkLayerLimits(t);
            },
            checkTransparency: function () {
              this.finalTransform.mProp.o.v <= 0
                ? !this.isTransparent &&
                  this.globalData.renderConfig.hideOnTransparent &&
                  ((this.isTransparent = !0), this.hide())
                : this.isTransparent && ((this.isTransparent = !1), this.show());
            },
            checkLayerLimits: function (t) {
              this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
                ? !0 !== this.isInRange &&
                  ((this.globalData._mdf = !0),
                  (this._mdf = !0),
                  (this.isInRange = !0),
                  this.show())
                : !1 !== this.isInRange &&
                  ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
            },
            renderRenderable: function () {
              var t,
                e = this.renderableComponents.length;
              for (t = 0; t < e; t += 1)
                this.renderableComponents[t].renderFrame(this._isFirstFrame);
            },
            sourceRectAtTime: function () {
              return { top: 0, left: 0, width: 100, height: 100 };
            },
            getLayerSize: function () {
              return 5 === this.data.ty
                ? { w: this.data.textData.width, h: this.data.textData.height }
                : { w: this.data.width, h: this.data.height };
            },
          }),
          extendPrototype(
            [
              RenderableElement,
              createProxyFunction({
                initElement: function (t, e, r) {
                  this.initFrame(),
                    this.initBaseData(t, e, r),
                    this.initTransform(t, e, r),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide();
                },
                hide: function () {
                  this.hidden ||
                    (this.isInRange && !this.isTransparent) ||
                    (((this.baseElement || this.layerElement).style.display = 'none'),
                    (this.hidden = !0));
                },
                show: function () {
                  this.isInRange &&
                    !this.isTransparent &&
                    (this.data.hd ||
                      ((this.baseElement || this.layerElement).style.display = 'block'),
                    (this.hidden = !1),
                    (this._isFirstFrame = !0));
                },
                renderFrame: function () {
                  this.data.hd ||
                    this.hidden ||
                    (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function () {},
                prepareFrame: function (t) {
                  (this._mdf = !1),
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency();
                },
                destroy: function () {
                  (this.innerElem = null), this.destroyBaseElement();
                },
              }),
            ],
            RenderableDOMElement
          ),
          (SVGStyleData.prototype.reset = function () {
            (this.d = ''), (this._mdf = !1);
          }),
          (SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0;
          }),
          extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
          extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
          (SVGGradientFillStyleData.prototype.initGradientData = function (t, e, r) {
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
              (this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this)),
              (this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this)),
              (this.g = new GradientProperty(t, e.g, this)),
              (this.style = r),
              (this.stops = []),
              this.setGradientData(r.pElem, e),
              this.setGradientOpacity(e, r),
              (this._isAnimated = !!this._isAnimated);
          }),
          (SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
            var r = createElementID(),
              n = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
            n.setAttribute('id', r),
              n.setAttribute('spreadMethod', 'pad'),
              n.setAttribute('gradientUnits', 'userSpaceOnUse');
            var i,
              a,
              s,
              o = [];
            for (s = 4 * e.g.p, a = 0; a < s; a += 4)
              (i = createNS('stop')), n.appendChild(i), o.push(i);
            t.setAttribute(
              'gf' === e.ty ? 'fill' : 'stroke',
              'url(' + locationHref + '#' + r + ')'
            ),
              (this.gf = n),
              (this.cst = o);
          }),
          (SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var r,
                n,
                i,
                a = createNS('mask'),
                s = createNS('path');
              a.appendChild(s);
              var o = createElementID(),
                l = createElementID();
              a.setAttribute('id', l);
              var h = createNS(1 === t.t ? 'linearGradient' : 'radialGradient');
              h.setAttribute('id', o),
                h.setAttribute('spreadMethod', 'pad'),
                h.setAttribute('gradientUnits', 'userSpaceOnUse'),
                (i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length);
              var c = this.stops;
              for (n = 4 * t.g.p; n < i; n += 2)
                (r = createNS('stop')).setAttribute('stop-color', 'rgb(255,255,255)'),
                  h.appendChild(r),
                  c.push(r);
              s.setAttribute(
                'gf' === t.ty ? 'fill' : 'stroke',
                'url(' + locationHref + '#' + o + ')'
              ),
                'gs' === t.ty &&
                  (s.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]),
                  s.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]),
                  1 === t.lj && s.setAttribute('stroke-miterlimit', t.ml)),
                (this.of = h),
                (this.ms = a),
                (this.ost = c),
                (this.maskId = l),
                (e.msElem = s);
            }
          }),
          extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
          extendPrototype(
            [SVGGradientFillStyleData, DynamicPropertyContainer],
            SVGGradientStrokeStyleData
          );
        var SVGElementsRenderer = (function () {
          var t = new Matrix(),
            e = new Matrix();
          function r(t, e, r) {
            (r || e.transform.op._mdf) &&
              e.transform.container.setAttribute('opacity', e.transform.op.v),
              (r || e.transform.mProps._mdf) &&
                e.transform.container.setAttribute('transform', e.transform.mProps.v.to2dCSS());
          }
          function n(r, n, i) {
            var a,
              s,
              o,
              l,
              h,
              c,
              u,
              f,
              p,
              d,
              m,
              v = n.styles.length,
              y = n.lvl;
            for (c = 0; c < v; c += 1) {
              if (((l = n.sh._mdf || i), n.styles[c].lvl < y)) {
                for (
                  f = e.reset(), d = y - n.styles[c].lvl, m = n.transformers.length - 1;
                  !l && d > 0;

                )
                  (l = n.transformers[m].mProps._mdf || l), (d -= 1), (m -= 1);
                if (l)
                  for (d = y - n.styles[c].lvl, m = n.transformers.length - 1; d > 0; )
                    (p = n.transformers[m].mProps.v.props),
                      f.transform(
                        p[0],
                        p[1],
                        p[2],
                        p[3],
                        p[4],
                        p[5],
                        p[6],
                        p[7],
                        p[8],
                        p[9],
                        p[10],
                        p[11],
                        p[12],
                        p[13],
                        p[14],
                        p[15]
                      ),
                      (d -= 1),
                      (m -= 1);
              } else f = t;
              if (((s = (u = n.sh.paths)._length), l)) {
                for (o = '', a = 0; a < s; a += 1)
                  (h = u.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, f));
                n.caches[c] = o;
              } else o = n.caches[c];
              (n.styles[c].d += !0 === r.hd ? '' : o), (n.styles[c]._mdf = l || n.styles[c]._mdf);
            }
          }
          function i(t, e, r) {
            var n = e.style;
            (e.c._mdf || r) &&
              n.pElem.setAttribute(
                'fill',
                'rgb(' + bmFloor(e.c.v[0]) + ',' + bmFloor(e.c.v[1]) + ',' + bmFloor(e.c.v[2]) + ')'
              ),
              (e.o._mdf || r) && n.pElem.setAttribute('fill-opacity', e.o.v);
          }
          function a(t, e, r) {
            s(t, e, r), o(t, e, r);
          }
          function s(t, e, r) {
            var n,
              i,
              a,
              s,
              o,
              l = e.gf,
              h = e.g._hasOpacity,
              c = e.s.v,
              u = e.e.v;
            if (e.o._mdf || r) {
              var f = 'gf' === t.ty ? 'fill-opacity' : 'stroke-opacity';
              e.style.pElem.setAttribute(f, e.o.v);
            }
            if (e.s._mdf || r) {
              var p = 1 === t.t ? 'x1' : 'cx',
                d = 'x1' === p ? 'y1' : 'cy';
              l.setAttribute(p, c[0]),
                l.setAttribute(d, c[1]),
                h && !e.g._collapsable && (e.of.setAttribute(p, c[0]), e.of.setAttribute(d, c[1]));
            }
            if (e.g._cmdf || r) {
              n = e.cst;
              var m = e.g.c;
              for (a = n.length, i = 0; i < a; i += 1)
                (s = n[i]).setAttribute('offset', m[4 * i] + '%'),
                  s.setAttribute(
                    'stop-color',
                    'rgb(' + m[4 * i + 1] + ',' + m[4 * i + 2] + ',' + m[4 * i + 3] + ')'
                  );
            }
            if (h && (e.g._omdf || r)) {
              var v = e.g.o;
              for (a = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1)
                (s = n[i]),
                  e.g._collapsable || s.setAttribute('offset', v[2 * i] + '%'),
                  s.setAttribute('stop-opacity', v[2 * i + 1]);
            }
            if (1 === t.t)
              (e.e._mdf || r) &&
                (l.setAttribute('x2', u[0]),
                l.setAttribute('y2', u[1]),
                h &&
                  !e.g._collapsable &&
                  (e.of.setAttribute('x2', u[0]), e.of.setAttribute('y2', u[1])));
            else if (
              ((e.s._mdf || e.e._mdf || r) &&
                ((o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2))),
                l.setAttribute('r', o),
                h && !e.g._collapsable && e.of.setAttribute('r', o)),
              e.e._mdf || e.h._mdf || e.a._mdf || r)
            ) {
              o || (o = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)));
              var y = Math.atan2(u[1] - c[1], u[0] - c[0]),
                g = e.h.v;
              g >= 1 ? (g = 0.99) : g <= -1 && (g = -0.99);
              var E = o * g,
                b = Math.cos(y + e.a.v) * E + c[0],
                _ = Math.sin(y + e.a.v) * E + c[1];
              l.setAttribute('fx', b),
                l.setAttribute('fy', _),
                h && !e.g._collapsable && (e.of.setAttribute('fx', b), e.of.setAttribute('fy', _));
            }
          }
          function o(t, e, r) {
            var n = e.style,
              i = e.d;
            i &&
              (i._mdf || r) &&
              i.dashStr &&
              (n.pElem.setAttribute('stroke-dasharray', i.dashStr),
              n.pElem.setAttribute('stroke-dashoffset', i.dashoffset[0])),
              e.c &&
                (e.c._mdf || r) &&
                n.pElem.setAttribute(
                  'stroke',
                  'rgb(' +
                    bmFloor(e.c.v[0]) +
                    ',' +
                    bmFloor(e.c.v[1]) +
                    ',' +
                    bmFloor(e.c.v[2]) +
                    ')'
                ),
              (e.o._mdf || r) && n.pElem.setAttribute('stroke-opacity', e.o.v),
              (e.w._mdf || r) &&
                (n.pElem.setAttribute('stroke-width', e.w.v),
                n.msElem && n.msElem.setAttribute('stroke-width', e.w.v));
          }
          return {
            createRenderFunction: function (t) {
              switch (t.ty) {
                case 'fl':
                  return i;
                case 'gf':
                  return s;
                case 'gs':
                  return a;
                case 'st':
                  return o;
                case 'sh':
                case 'el':
                case 'rc':
                case 'sr':
                  return n;
                case 'tr':
                  return r;
                default:
                  return null;
              }
            },
          };
        })();
        function ShapeTransformManager() {
          (this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
        }
        function CVShapeData(t, e, r, n) {
          (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
          var i,
            a = 4;
          'rc' === e.ty ? (a = 5) : 'el' === e.ty ? (a = 6) : 'sr' === e.ty && (a = 7),
            (this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t));
          var s,
            o = r.length;
          for (i = 0; i < o; i += 1)
            r[i].closed ||
              ((s = { transforms: n.addTransformSequence(r[i].transforms), trNodes: [] }),
              this.styledShapes.push(s),
              r[i].elements.push(s));
        }
        function BaseElement() {}
        function NullElement(t, e, r) {
          this.initFrame(),
            this.initBaseData(t, e, r),
            this.initFrame(),
            this.initTransform(t, e, r),
            this.initHierarchy();
        }
        function SVGBaseElement() {}
        function IShapeElement() {}
        function ITextElement() {}
        function ICompElement() {}
        function IImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)),
            this.initElement(t, e, r),
            (this.sourceRect = {
              top: 0,
              left: 0,
              width: this.assetData.w,
              height: this.assetData.h,
            });
        }
        function ISolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function AudioElement(t, e, r) {
          this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            this.initBaseData(t, e, r),
            (this._isPlaying = !1),
            (this._canPlay = !1);
          var n = this.globalData.getAssetsPath(this.assetData);
          (this.audio = this.globalData.audioController.createAudio(n)),
            (this._currentTime = 0),
            this.globalData.audioController.addAudio(this),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function FootageElement(t, e, r) {
          this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            (this.footageData = e.imageLoader.getAsset(this.assetData)),
            this.initBaseData(t, e, r);
        }
        function SVGCompElement(t, e, r) {
          (this.layers = t.layers),
            (this.supports3d = !0),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function SVGTextLottieElement(t, e, r) {
          (this.textSpans = []), (this.renderType = 'svg'), this.initElement(t, e, r);
        }
        function SVGShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            this.initElement(t, e, r),
            (this.prevViewData = []);
        }
        function SVGTintFilter(t, e) {
          this.filterManager = e;
          var r = createNS('feColorMatrix');
          if (
            (r.setAttribute('type', 'matrix'),
            r.setAttribute('color-interpolation-filters', 'linearRGB'),
            r.setAttribute(
              'values',
              '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
            ),
            r.setAttribute('result', 'f1'),
            t.appendChild(r),
            (r = createNS('feColorMatrix')).setAttribute('type', 'matrix'),
            r.setAttribute('color-interpolation-filters', 'sRGB'),
            r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
            r.setAttribute('result', 'f2'),
            t.appendChild(r),
            (this.matrixFilter = r),
            100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
          ) {
            var n,
              i = createNS('feMerge');
            t.appendChild(i),
              (n = createNS('feMergeNode')).setAttribute('in', 'SourceGraphic'),
              i.appendChild(n),
              (n = createNS('feMergeNode')).setAttribute('in', 'f2'),
              i.appendChild(n);
          }
        }
        function SVGFillFilter(t, e) {
          this.filterManager = e;
          var r = createNS('feColorMatrix');
          r.setAttribute('type', 'matrix'),
            r.setAttribute('color-interpolation-filters', 'sRGB'),
            r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'),
            t.appendChild(r),
            (this.matrixFilter = r);
        }
        function SVGGaussianBlurEffect(t, e) {
          t.setAttribute('x', '-100%'),
            t.setAttribute('y', '-100%'),
            t.setAttribute('width', '300%'),
            t.setAttribute('height', '300%'),
            (this.filterManager = e);
          var r = createNS('feGaussianBlur');
          t.appendChild(r), (this.feGaussianBlur = r);
        }
        function SVGStrokeEffect(t, e) {
          (this.initialized = !1), (this.filterManager = e), (this.elem = t), (this.paths = []);
        }
        function SVGTritoneFilter(t, e) {
          this.filterManager = e;
          var r = createNS('feColorMatrix');
          r.setAttribute('type', 'matrix'),
            r.setAttribute('color-interpolation-filters', 'linearRGB'),
            r.setAttribute(
              'values',
              '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'
            ),
            r.setAttribute('result', 'f1'),
            t.appendChild(r);
          var n = createNS('feComponentTransfer');
          n.setAttribute('color-interpolation-filters', 'sRGB'),
            t.appendChild(n),
            (this.matrixFilter = n);
          var i = createNS('feFuncR');
          i.setAttribute('type', 'table'), n.appendChild(i), (this.feFuncR = i);
          var a = createNS('feFuncG');
          a.setAttribute('type', 'table'), n.appendChild(a), (this.feFuncG = a);
          var s = createNS('feFuncB');
          s.setAttribute('type', 'table'), n.appendChild(s), (this.feFuncB = s);
        }
        function SVGProLevelsFilter(t, e) {
          this.filterManager = e;
          var r = this.filterManager.effectElements,
            n = createNS('feComponentTransfer');
          (r[10].p.k ||
            0 !== r[10].p.v ||
            r[11].p.k ||
            1 !== r[11].p.v ||
            r[12].p.k ||
            1 !== r[12].p.v ||
            r[13].p.k ||
            0 !== r[13].p.v ||
            r[14].p.k ||
            1 !== r[14].p.v) &&
            (this.feFuncR = this.createFeFunc('feFuncR', n)),
            (r[17].p.k ||
              0 !== r[17].p.v ||
              r[18].p.k ||
              1 !== r[18].p.v ||
              r[19].p.k ||
              1 !== r[19].p.v ||
              r[20].p.k ||
              0 !== r[20].p.v ||
              r[21].p.k ||
              1 !== r[21].p.v) &&
              (this.feFuncG = this.createFeFunc('feFuncG', n)),
            (r[24].p.k ||
              0 !== r[24].p.v ||
              r[25].p.k ||
              1 !== r[25].p.v ||
              r[26].p.k ||
              1 !== r[26].p.v ||
              r[27].p.k ||
              0 !== r[27].p.v ||
              r[28].p.k ||
              1 !== r[28].p.v) &&
              (this.feFuncB = this.createFeFunc('feFuncB', n)),
            (r[31].p.k ||
              0 !== r[31].p.v ||
              r[32].p.k ||
              1 !== r[32].p.v ||
              r[33].p.k ||
              1 !== r[33].p.v ||
              r[34].p.k ||
              0 !== r[34].p.v ||
              r[35].p.k ||
              1 !== r[35].p.v) &&
              (this.feFuncA = this.createFeFunc('feFuncA', n)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
              (n.setAttribute('color-interpolation-filters', 'sRGB'),
              t.appendChild(n),
              (n = createNS('feComponentTransfer'))),
            (r[3].p.k ||
              0 !== r[3].p.v ||
              r[4].p.k ||
              1 !== r[4].p.v ||
              r[5].p.k ||
              1 !== r[5].p.v ||
              r[6].p.k ||
              0 !== r[6].p.v ||
              r[7].p.k ||
              1 !== r[7].p.v) &&
              (n.setAttribute('color-interpolation-filters', 'sRGB'),
              t.appendChild(n),
              (this.feFuncRComposed = this.createFeFunc('feFuncR', n)),
              (this.feFuncGComposed = this.createFeFunc('feFuncG', n)),
              (this.feFuncBComposed = this.createFeFunc('feFuncB', n)));
        }
        function SVGDropShadowEffect(t, e) {
          var r = e.container.globalData.renderConfig.filterSize;
          t.setAttribute('x', r.x),
            t.setAttribute('y', r.y),
            t.setAttribute('width', r.width),
            t.setAttribute('height', r.height),
            (this.filterManager = e);
          var n = createNS('feGaussianBlur');
          n.setAttribute('in', 'SourceAlpha'),
            n.setAttribute('result', 'drop_shadow_1'),
            n.setAttribute('stdDeviation', '0'),
            (this.feGaussianBlur = n),
            t.appendChild(n);
          var i = createNS('feOffset');
          i.setAttribute('dx', '25'),
            i.setAttribute('dy', '0'),
            i.setAttribute('in', 'drop_shadow_1'),
            i.setAttribute('result', 'drop_shadow_2'),
            (this.feOffset = i),
            t.appendChild(i);
          var a = createNS('feFlood');
          a.setAttribute('flood-color', '#00ff00'),
            a.setAttribute('flood-opacity', '1'),
            a.setAttribute('result', 'drop_shadow_3'),
            (this.feFlood = a),
            t.appendChild(a);
          var s = createNS('feComposite');
          s.setAttribute('in', 'drop_shadow_3'),
            s.setAttribute('in2', 'drop_shadow_2'),
            s.setAttribute('operator', 'in'),
            s.setAttribute('result', 'drop_shadow_4'),
            t.appendChild(s);
          var o,
            l = createNS('feMerge');
          t.appendChild(l),
            (o = createNS('feMergeNode')),
            l.appendChild(o),
            (o = createNS('feMergeNode')).setAttribute('in', 'SourceGraphic'),
            (this.feMergeNode = o),
            (this.feMerge = l),
            (this.originalNodeAdded = !1),
            l.appendChild(o);
        }
        (ShapeTransformManager.prototype = {
          addTransformSequence: function (t) {
            var e,
              r = t.length,
              n = '_';
            for (e = 0; e < r; e += 1) n += t[e].transform.key + '_';
            var i = this.sequences[n];
            return (
              i ||
                ((i = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: !1 }),
                (this.sequences[n] = i),
                this.sequenceList.push(i)),
              i
            );
          },
          processSequence: function (t, e) {
            for (var r, n = 0, i = t.transforms.length, a = e; n < i && !e; ) {
              if (t.transforms[n].transform.mProps._mdf) {
                a = !0;
                break;
              }
              n += 1;
            }
            if (a)
              for (t.finalTransform.reset(), n = i - 1; n >= 0; n -= 1)
                (r = t.transforms[n].transform.mProps.v.props),
                  t.finalTransform.transform(
                    r[0],
                    r[1],
                    r[2],
                    r[3],
                    r[4],
                    r[5],
                    r[6],
                    r[7],
                    r[8],
                    r[9],
                    r[10],
                    r[11],
                    r[12],
                    r[13],
                    r[14],
                    r[15]
                  );
            t._mdf = a;
          },
          processSequences: function (t) {
            var e,
              r = this.sequenceList.length;
            for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t);
          },
          getNewKey: function () {
            return (this.transform_key_count += 1), '_' + this.transform_key_count;
          },
        }),
          (CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated),
          (BaseElement.prototype = {
            checkMasks: function () {
              if (!this.data.hasMask) return !1;
              for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                if (
                  'n' !== this.data.masksProperties[t].mode &&
                  !1 !== this.data.masksProperties[t].cl
                )
                  return !0;
                t += 1;
              }
              return !1;
            },
            initExpressions: function () {
              (this.layerInterface = LayerExpressionInterface(this)),
                this.data.hasMask &&
                  this.maskManager &&
                  this.layerInterface.registerMaskInterface(this.maskManager);
              var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(t),
                0 === this.data.ty || this.data.xt
                  ? (this.compInterface = CompExpressionInterface(this))
                  : 4 === this.data.ty
                  ? ((this.layerInterface.shapeInterface = ShapeExpressionInterface(
                      this.shapesData,
                      this.itemsData,
                      this.layerInterface
                    )),
                    (this.layerInterface.content = this.layerInterface.shapeInterface))
                  : 5 === this.data.ty &&
                    ((this.layerInterface.textInterface = TextExpressionInterface(this)),
                    (this.layerInterface.text = this.layerInterface.textInterface));
            },
            setBlendMode: function () {
              var t = getBlendMode(this.data.bm);
              (this.baseElement || this.layerElement).style['mix-blend-mode'] = t;
            },
            initBaseData: function (t, e, r) {
              (this.globalData = e),
                (this.comp = r),
                (this.data = t),
                (this.layerId = createElementID()),
                this.data.sr || (this.data.sr = 1),
                (this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
            },
            getType: function () {
              return this.type;
            },
            sourceRectAtTime: function () {},
          }),
          (NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (NullElement.prototype.renderFrame = function () {}),
          (NullElement.prototype.getBaseElement = function () {
            return null;
          }),
          (NullElement.prototype.destroy = function () {}),
          (NullElement.prototype.sourceRectAtTime = function () {}),
          (NullElement.prototype.hide = function () {}),
          extendPrototype(
            [BaseElement, TransformElement, HierarchyElement, FrameElement],
            NullElement
          ),
          (SVGBaseElement.prototype = {
            initRendererElement: function () {
              this.layerElement = createNS('g');
            },
            createContainerElements: function () {
              (this.matteElement = createNS('g')),
                (this.transformedElement = this.layerElement),
                (this.maskedElement = this.layerElement),
                (this._sizeChanged = !1);
              var t,
                e,
                r,
                n = null;
              if (this.data.td) {
                if (3 == this.data.td || 1 == this.data.td) {
                  var i = createNS('mask');
                  i.setAttribute('id', this.layerId),
                    i.setAttribute('mask-type', 3 == this.data.td ? 'luminance' : 'alpha'),
                    i.appendChild(this.layerElement),
                    (n = i),
                    this.globalData.defs.appendChild(i),
                    featureSupport.maskType ||
                      1 != this.data.td ||
                      (i.setAttribute('mask-type', 'luminance'),
                      (t = createElementID()),
                      (e = filtersFactory.createFilter(t)),
                      this.globalData.defs.appendChild(e),
                      e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                      (r = createNS('g')).appendChild(this.layerElement),
                      (n = r),
                      i.appendChild(r),
                      r.setAttribute('filter', 'url(' + locationHref + '#' + t + ')'));
                } else if (2 == this.data.td) {
                  var a = createNS('mask');
                  a.setAttribute('id', this.layerId), a.setAttribute('mask-type', 'alpha');
                  var s = createNS('g');
                  a.appendChild(s), (t = createElementID()), (e = filtersFactory.createFilter(t));
                  var o = createNS('feComponentTransfer');
                  o.setAttribute('in', 'SourceGraphic'), e.appendChild(o);
                  var l = createNS('feFuncA');
                  l.setAttribute('type', 'table'),
                    l.setAttribute('tableValues', '1.0 0.0'),
                    o.appendChild(l),
                    this.globalData.defs.appendChild(e);
                  var h = createNS('rect');
                  h.setAttribute('width', this.comp.data.w),
                    h.setAttribute('height', this.comp.data.h),
                    h.setAttribute('x', '0'),
                    h.setAttribute('y', '0'),
                    h.setAttribute('fill', '#ffffff'),
                    h.setAttribute('opacity', '0'),
                    s.setAttribute('filter', 'url(' + locationHref + '#' + t + ')'),
                    s.appendChild(h),
                    s.appendChild(this.layerElement),
                    (n = s),
                    featureSupport.maskType ||
                      (a.setAttribute('mask-type', 'luminance'),
                      e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                      (r = createNS('g')),
                      s.appendChild(h),
                      r.appendChild(this.layerElement),
                      (n = r),
                      s.appendChild(r)),
                    this.globalData.defs.appendChild(a);
                }
              } else
                this.data.tt
                  ? (this.matteElement.appendChild(this.layerElement),
                    (n = this.matteElement),
                    (this.baseElement = this.matteElement))
                  : (this.baseElement = this.layerElement);
              if (
                (this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
                this.data.cl && this.layerElement.setAttribute('class', this.data.cl),
                0 === this.data.ty && !this.data.hd)
              ) {
                var c = createNS('clipPath'),
                  u = createNS('path');
                u.setAttribute(
                  'd',
                  'M0,0 L' +
                    this.data.w +
                    ',0 L' +
                    this.data.w +
                    ',' +
                    this.data.h +
                    ' L0,' +
                    this.data.h +
                    'z'
                );
                var f = createElementID();
                if (
                  (c.setAttribute('id', f),
                  c.appendChild(u),
                  this.globalData.defs.appendChild(c),
                  this.checkMasks())
                ) {
                  var p = createNS('g');
                  p.setAttribute('clip-path', 'url(' + locationHref + '#' + f + ')'),
                    p.appendChild(this.layerElement),
                    (this.transformedElement = p),
                    n
                      ? n.appendChild(this.transformedElement)
                      : (this.baseElement = this.transformedElement);
                } else
                  this.layerElement.setAttribute(
                    'clip-path',
                    'url(' + locationHref + '#' + f + ')'
                  );
              }
              0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              this.finalTransform._matMdf &&
                this.transformedElement.setAttribute(
                  'transform',
                  this.finalTransform.mat.to2dCSS()
                ),
                this.finalTransform._opMdf &&
                  this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
            },
            destroyBaseElement: function () {
              (this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
            },
            getBaseElement: function () {
              return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function () {
              (this.maskManager = new MaskElement(this.data, this, this.globalData)),
                (this.renderableEffectsManager = new SVGEffects(this));
            },
            setMatte: function (t) {
              this.matteElement &&
                this.matteElement.setAttribute('mask', 'url(' + locationHref + '#' + t + ')');
            },
          }),
          (IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
              var e,
                r = this.shapeModifiers.length;
              for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function (t) {
              for (var e = this.shapeModifiers.length; 0 < e; )
                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
              return !1;
            },
            renderModifiers: function () {
              if (this.shapeModifiers.length) {
                var t,
                  e = this.shapes.length;
                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                for (
                  t = (e = this.shapeModifiers.length) - 1;
                  t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                  t -= 1
                );
              }
            },
            searchProcessedElement: function (t) {
              for (var e = this.processedElements, r = 0, n = e.length; r < n; ) {
                if (e[r].elem === t) return e[r].pos;
                r += 1;
              }
              return 0;
            },
            addProcessedElement: function (t, e) {
              for (var r = this.processedElements, n = r.length; n; )
                if (r[(n -= 1)].elem === t) return void (r[n].pos = e);
              r.push(new ProcessedElement(t, e));
            },
            prepareFrame: function (t) {
              this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
            },
          }),
          (ITextElement.prototype.initElement = function (t, e, r) {
            (this.lettersChangedFlag = !0),
              this.initFrame(),
              this.initBaseData(t, e, r),
              (this.textProperty = new TextProperty(this, t.t, this.dynamicProperties)),
              (this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this)),
              this.initTransform(t, e, r),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide(),
              this.textAnimator.searchProperties(this.dynamicProperties);
          }),
          (ITextElement.prototype.prepareFrame = function (t) {
            (this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                (this.buildNewText(),
                (this.textProperty._isFirstFrame = !1),
                (this.textProperty._mdf = !1));
          }),
          (ITextElement.prototype.createPathShape = function (t, e) {
            var r,
              n,
              i = e.length,
              a = '';
            for (r = 0; r < i; r += 1)
              (n = e[r].ks.k), (a += buildShapeString(n, n.i.length, !0, t));
            return a;
          }),
          (ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e);
          }),
          (ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t);
          }),
          (ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t);
          }),
          (ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, r, n, i) {
            switch (
              (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j)
            ) {
              case 1:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                break;
              case 2:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
            }
            e.translate(n, i, 0);
          }),
          (ITextElement.prototype.buildColor = function (t) {
            return (
              'rgb(' +
              Math.round(255 * t[0]) +
              ',' +
              Math.round(255 * t[1]) +
              ',' +
              Math.round(255 * t[2]) +
              ')'
            );
          }),
          (ITextElement.prototype.emptyProp = new LetterProps()),
          (ITextElement.prototype.destroy = function () {}),
          extendPrototype(
            [BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement],
            ICompElement
          ),
          (ICompElement.prototype.initElement = function (t, e, r) {
            this.initFrame(),
              this.initBaseData(t, e, r),
              this.initTransform(t, e, r),
              this.initRenderable(),
              this.initHierarchy(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
              this.hide();
          }),
          (ICompElement.prototype.prepareFrame = function (t) {
            if (
              ((this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              this.isInRange || this.data.xt)
            ) {
              if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
              else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), (this.renderedFrame = e);
              }
              var r,
                n = this.elements.length;
              for (
                this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st),
                  this.elements[r]._mdf && (this._mdf = !0));
            }
          }),
          (ICompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
          }),
          (ICompElement.prototype.setElements = function (t) {
            this.elements = t;
          }),
          (ICompElement.prototype.getElements = function () {
            return this.elements;
          }),
          (ICompElement.prototype.destroyElements = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
          }),
          (ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement();
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            IImageElement
          ),
          (IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            (this.innerElem = createNS('image')),
              this.innerElem.setAttribute('width', this.assetData.w + 'px'),
              this.innerElem.setAttribute('height', this.assetData.h + 'px'),
              this.innerElem.setAttribute(
                'preserveAspectRatio',
                this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio
              ),
              this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t),
              this.layerElement.appendChild(this.innerElem);
          }),
          (IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
          }),
          extendPrototype([IImageElement], ISolidElement),
          (ISolidElement.prototype.createContent = function () {
            var t = createNS('rect');
            t.setAttribute('width', this.data.sw),
              t.setAttribute('height', this.data.sh),
              t.setAttribute('fill', this.data.sc),
              this.layerElement.appendChild(t);
          }),
          (AudioElement.prototype.prepareFrame = function (t) {
            if (
              (this.prepareRenderableFrame(t, !0),
              this.prepareProperties(t, !0),
              this.tm._placeholder)
            )
              this._currentTime = t / this.data.sr;
            else {
              var e = this.tm.v;
              this._currentTime = e;
            }
          }),
          extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
          (AudioElement.prototype.renderFrame = function () {
            this.isInRange &&
              this._canPlay &&
              (this._isPlaying
                ? (!this.audio.playing() ||
                    Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) >
                      0.1) &&
                  this.audio.seek(this._currentTime / this.globalData.frameRate)
                : (this.audio.play(),
                  this.audio.seek(this._currentTime / this.globalData.frameRate),
                  (this._isPlaying = !0)));
          }),
          (AudioElement.prototype.show = function () {}),
          (AudioElement.prototype.hide = function () {
            this.audio.pause(), (this._isPlaying = !1);
          }),
          (AudioElement.prototype.pause = function () {
            this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
          }),
          (AudioElement.prototype.resume = function () {
            this._canPlay = !0;
          }),
          (AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t);
          }),
          (AudioElement.prototype.volume = function (t) {
            this.audio.volume(t);
          }),
          (AudioElement.prototype.getBaseElement = function () {
            return null;
          }),
          (AudioElement.prototype.destroy = function () {}),
          (AudioElement.prototype.sourceRectAtTime = function () {}),
          (AudioElement.prototype.initExpressions = function () {}),
          (FootageElement.prototype.prepareFrame = function () {}),
          extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
          (FootageElement.prototype.getBaseElement = function () {
            return null;
          }),
          (FootageElement.prototype.renderFrame = function () {}),
          (FootageElement.prototype.destroy = function () {}),
          (FootageElement.prototype.initExpressions = function () {
            this.layerInterface = FootageInterface(this);
          }),
          (FootageElement.prototype.getFootageData = function () {
            return this.footageData;
          }),
          extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            SVGTextLottieElement
          ),
          (SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape &&
              !this.globalData.fontManager.chars &&
              (this.textContainer = createNS('text'));
          }),
          (SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, r = t.length, n = [], i = ''; e < r; )
              t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3)
                ? (n.push(i), (i = ''))
                : (i += t[e]),
                (e += 1);
            return n.push(i), n;
          }),
          (SVGTextLottieElement.prototype.buildNewText = function () {
            var t,
              e,
              r = this.textProperty.currentData;
            (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
              r.fc
                ? this.layerElement.setAttribute('fill', this.buildColor(r.fc))
                : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'),
              r.sc &&
                (this.layerElement.setAttribute('stroke', this.buildColor(r.sc)),
                this.layerElement.setAttribute('stroke-width', r.sw)),
              this.layerElement.setAttribute('font-size', r.finalSize);
            var n = this.globalData.fontManager.getFontByName(r.f);
            if (n.fClass) this.layerElement.setAttribute('class', n.fClass);
            else {
              this.layerElement.setAttribute('font-family', n.fFamily);
              var i = r.fWeight,
                a = r.fStyle;
              this.layerElement.setAttribute('font-style', a),
                this.layerElement.setAttribute('font-weight', i);
            }
            this.layerElement.setAttribute('aria-label', r.t);
            var s,
              o = r.l || [],
              l = !!this.globalData.fontManager.chars;
            e = o.length;
            var h,
              c = this.mHelper,
              u = '',
              f = this.data.singleShape,
              p = 0,
              d = 0,
              m = !0,
              v = 0.001 * r.tr * r.finalSize;
            if (!f || l || r.sz) {
              var y,
                g,
                E = this.textSpans.length;
              for (t = 0; t < e; t += 1)
                (l && f && 0 !== t) ||
                  ((s = E > t ? this.textSpans[t] : createNS(l ? 'path' : 'text')),
                  E <= t &&
                    (s.setAttribute('stroke-linecap', 'butt'),
                    s.setAttribute('stroke-linejoin', 'round'),
                    s.setAttribute('stroke-miterlimit', '4'),
                    (this.textSpans[t] = s),
                    this.layerElement.appendChild(s)),
                  (s.style.display = 'inherit')),
                  c.reset(),
                  c.scale(r.finalSize / 100, r.finalSize / 100),
                  f &&
                    (o[t].n && ((p = -v), (d += r.yOffset), (d += m ? 1 : 0), (m = !1)),
                    this.applyTextPropertiesToMatrix(r, c, o[t].line, p, d),
                    (p += o[t].l || 0),
                    (p += v)),
                  l
                    ? ((h = (y =
                        ((g = this.globalData.fontManager.getCharData(
                          r.finalText[t],
                          n.fStyle,
                          this.globalData.fontManager.getFontByName(r.f).fFamily
                        )) &&
                          g.data) ||
                        {}).shapes
                        ? y.shapes[0].it
                        : []),
                      f
                        ? (u += this.createPathShape(c, h))
                        : s.setAttribute('d', this.createPathShape(c, h)))
                    : (f &&
                        s.setAttribute(
                          'transform',
                          'translate(' + c.props[12] + ',' + c.props[13] + ')'
                        ),
                      (s.textContent = o[t].val),
                      s.setAttributeNS(
                        'http://www.w3.org/XML/1998/namespace',
                        'xml:space',
                        'preserve'
                      ));
              f && s && s.setAttribute('d', u);
            } else {
              var b = this.textContainer,
                _ = 'start';
              switch (r.j) {
                case 1:
                  _ = 'end';
                  break;
                case 2:
                  _ = 'middle';
                  break;
                default:
                  _ = 'start';
              }
              b.setAttribute('text-anchor', _), b.setAttribute('letter-spacing', v);
              var x = this.buildTextContents(r.finalText);
              for (e = x.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
                ((s = this.textSpans[t] || createNS('tspan')).textContent = x[t]),
                  s.setAttribute('x', 0),
                  s.setAttribute('y', d),
                  (s.style.display = 'inherit'),
                  b.appendChild(s),
                  (this.textSpans[t] = s),
                  (d += r.finalLineHeight);
              this.layerElement.appendChild(b);
            }
            for (; t < this.textSpans.length; )
              (this.textSpans[t].style.display = 'none'), (t += 1);
            this._sizeChanged = !0;
          }),
          (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (
              (this.prepareFrame(this.comp.renderedFrame - this.data.st),
              this.renderInnerContent(),
              this._sizeChanged)
            ) {
              this._sizeChanged = !1;
              var t = this.layerElement.getBBox();
              this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
            }
            return this.bbox;
          }),
          (SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (
              !this.data.singleShape &&
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var t, e;
              this._sizeChanged = !0;
              var r,
                n,
                i = this.textAnimator.renderedLetters,
                a = this.textProperty.currentData.l;
              for (e = a.length, t = 0; t < e; t += 1)
                a[t].n ||
                  ((r = i[t]),
                  (n = this.textSpans[t]),
                  r._mdf.m && n.setAttribute('transform', r.m),
                  r._mdf.o && n.setAttribute('opacity', r.o),
                  r._mdf.sw && n.setAttribute('stroke-width', r.sw),
                  r._mdf.sc && n.setAttribute('stroke', r.sc),
                  r._mdf.fc && n.setAttribute('fill', r.fc));
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            SVGShapeElement
          ),
          (SVGShapeElement.prototype.initSecondaryElement = function () {}),
          (SVGShapeElement.prototype.identityMatrix = new Matrix()),
          (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
          (SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes();
          }),
          (SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t,
              e,
              r,
              n,
              i = this.shapes.length,
              a = this.stylesList.length,
              s = [],
              o = !1;
            for (r = 0; r < a; r += 1) {
              for (n = this.stylesList[r], o = !1, s.length = 0, t = 0; t < i; t += 1)
                -1 !== (e = this.shapes[t]).styles.indexOf(n) &&
                  (s.push(e), (o = e._isAnimated || o));
              s.length > 1 && o && this.setShapesAsAnimated(s);
            }
          }),
          (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated();
          }),
          (SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var r,
              n = new SVGStyleData(t, e),
              i = n.pElem;
            if ('st' === t.ty) r = new SVGStrokeStyleData(this, t, n);
            else if ('fl' === t.ty) r = new SVGFillStyleData(this, t, n);
            else if ('gf' === t.ty || 'gs' === t.ty) {
              (r = new ('gf' === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(
                this,
                t,
                n
              )),
                this.globalData.defs.appendChild(r.gf),
                r.maskId &&
                  (this.globalData.defs.appendChild(r.ms),
                  this.globalData.defs.appendChild(r.of),
                  i.setAttribute('mask', 'url(' + locationHref + '#' + r.maskId + ')'));
            }
            return (
              ('st' !== t.ty && 'gs' !== t.ty) ||
                (i.setAttribute('stroke-linecap', lineCapEnum[t.lc || 2]),
                i.setAttribute('stroke-linejoin', lineJoinEnum[t.lj || 2]),
                i.setAttribute('fill-opacity', '0'),
                1 === t.lj && i.setAttribute('stroke-miterlimit', t.ml)),
              2 === t.r && i.setAttribute('fill-rule', 'evenodd'),
              t.ln && i.setAttribute('id', t.ln),
              t.cl && i.setAttribute('class', t.cl),
              t.bm && (i.style['mix-blend-mode'] = getBlendMode(t.bm)),
              this.stylesList.push(n),
              this.addToAnimatedContents(t, r),
              r
            );
          }),
          (SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData();
            return (
              t.ln && e.gr.setAttribute('id', t.ln),
              t.cl && e.gr.setAttribute('class', t.cl),
              t.bm && (e.gr.style['mix-blend-mode'] = getBlendMode(t.bm)),
              e
            );
          }),
          (SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var r = TransformPropertyFactory.getTransformProperty(this, t, this),
              n = new SVGTransformData(r, r.o, e);
            return this.addToAnimatedContents(t, n), n;
          }),
          (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
            var n = 4;
            'rc' === t.ty ? (n = 5) : 'el' === t.ty ? (n = 6) : 'sr' === t.ty && (n = 7);
            var i = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this));
            return (
              this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i
            );
          }),
          (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var r = 0, n = this.animatedContents.length; r < n; ) {
              if (this.animatedContents[r].element === e) return;
              r += 1;
            }
            this.animatedContents.push({
              fn: SVGElementsRenderer.createRenderFunction(t),
              element: e,
              data: t,
            });
          }),
          (SVGShapeElement.prototype.setElementStyles = function (t) {
            var e,
              r = t.styles,
              n = this.stylesList.length;
            for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e]);
          }),
          (SVGShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0
              ),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers();
          }),
          (SVGShapeElement.prototype.searchShapes = function (t, e, r, n, i, a, s) {
            var o,
              l,
              h,
              c,
              u,
              f,
              p = [].concat(a),
              d = t.length - 1,
              m = [],
              v = [];
            for (o = d; o >= 0; o -= 1) {
              if (
                ((f = this.searchProcessedElement(t[o])) ? (e[o] = r[f - 1]) : (t[o]._render = s),
                'fl' === t[o].ty || 'st' === t[o].ty || 'gf' === t[o].ty || 'gs' === t[o].ty)
              )
                f ? (e[o].style.closed = !1) : (e[o] = this.createStyleElement(t[o], i)),
                  t[o]._render && n.appendChild(e[o].style.pElem),
                  m.push(e[o].style);
              else if ('gr' === t[o].ty) {
                if (f)
                  for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                else e[o] = this.createGroupElement(t[o]);
                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, i + 1, p, s),
                  t[o]._render && n.appendChild(e[o].gr);
              } else
                'tr' === t[o].ty
                  ? (f || (e[o] = this.createTransformElement(t[o], n)),
                    (c = e[o].transform),
                    p.push(c))
                  : 'sh' === t[o].ty || 'rc' === t[o].ty || 'el' === t[o].ty || 'sr' === t[o].ty
                  ? (f || (e[o] = this.createShapeElement(t[o], p, i)), this.setElementStyles(e[o]))
                  : 'tm' === t[o].ty || 'rd' === t[o].ty || 'ms' === t[o].ty || 'pb' === t[o].ty
                  ? (f
                      ? ((u = e[o]).closed = !1)
                      : ((u = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                        (e[o] = u),
                        this.shapeModifiers.push(u)),
                    v.push(u))
                  : 'rp' === t[o].ty &&
                    (f
                      ? ((u = e[o]).closed = !0)
                      : ((u = ShapeModifiers.getModifier(t[o].ty)),
                        (e[o] = u),
                        u.init(this, t, o, e),
                        this.shapeModifiers.push(u),
                        (s = !1)),
                    v.push(u));
              this.addProcessedElement(t[o], o + 1);
            }
            for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
            for (d = v.length, o = 0; o < d; o += 1) v[o].closed = !0;
          }),
          (SVGShapeElement.prototype.renderInnerContent = function () {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)
              (this.stylesList[t]._mdf || this._isFirstFrame) &&
                (this.stylesList[t].msElem &&
                  (this.stylesList[t].msElem.setAttribute('d', this.stylesList[t].d),
                  (this.stylesList[t].d = 'M0 0' + this.stylesList[t].d)),
                this.stylesList[t].pElem.setAttribute('d', this.stylesList[t].d || 'M0 0'));
          }),
          (SVGShapeElement.prototype.renderShape = function () {
            var t,
              e,
              r = this.animatedContents.length;
            for (t = 0; t < r; t += 1)
              (e = this.animatedContents[t]),
                (this._isFirstFrame || e.element._isAnimated) &&
                  !0 !== e.data &&
                  e.fn(e.data, e.element, this._isFirstFrame);
          }),
          (SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
          }),
          (SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                n = this.filterManager.effectElements[2].p.v / 100;
              this.matrixFilter.setAttribute(
                'values',
                r[0] -
                  e[0] +
                  ' 0 0 0 ' +
                  e[0] +
                  ' ' +
                  (r[1] - e[1]) +
                  ' 0 0 0 ' +
                  e[1] +
                  ' ' +
                  (r[2] - e[2]) +
                  ' 0 0 0 ' +
                  e[2] +
                  ' 0 0 0 ' +
                  n +
                  ' 0'
              );
            }
          }),
          (SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[2].p.v,
                r = this.filterManager.effectElements[6].p.v;
              this.matrixFilter.setAttribute(
                'values',
                '0 0 0 0 ' + e[0] + ' 0 0 0 0 ' + e[1] + ' 0 0 0 0 ' + e[2] + ' 0 0 0 ' + r + ' 0'
              );
            }
          }),
          (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = 0.3 * this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                n = 3 == r ? 0 : e,
                i = 2 == r ? 0 : e;
              this.feGaussianBlur.setAttribute('stdDeviation', n + ' ' + i);
              var a = 1 == this.filterManager.effectElements[2].p.v ? 'wrap' : 'duplicate';
              this.feGaussianBlur.setAttribute('edgeMode', a);
            }
          }),
          (SVGStrokeEffect.prototype.initialize = function () {
            var t,
              e,
              r,
              n,
              i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (
              1 === this.filterManager.effectElements[1].p.v
                ? ((n = this.elem.maskManager.masksProperties.length), (r = 0))
                : (n = (r = this.filterManager.effectElements[0].p.v - 1) + 1),
                (e = createNS('g')).setAttribute('fill', 'none'),
                e.setAttribute('stroke-linecap', 'round'),
                e.setAttribute('stroke-dashoffset', 1);
              r < n;
              r += 1
            )
              (t = createNS('path')), e.appendChild(t), this.paths.push({ p: t, m: r });
            if (3 === this.filterManager.effectElements[10].p.v) {
              var a = createNS('mask'),
                s = createElementID();
              a.setAttribute('id', s),
                a.setAttribute('mask-type', 'alpha'),
                a.appendChild(e),
                this.elem.globalData.defs.appendChild(a);
              var o = createNS('g');
              for (o.setAttribute('mask', 'url(' + locationHref + '#' + s + ')'); i[0]; )
                o.appendChild(i[0]);
              this.elem.layerElement.appendChild(o),
                (this.masker = a),
                e.setAttribute('stroke', '#fff');
            } else if (
              1 === this.filterManager.effectElements[10].p.v ||
              2 === this.filterManager.effectElements[10].p.v
            ) {
              if (2 === this.filterManager.effectElements[10].p.v)
                for (
                  i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                  i.length;

                )
                  this.elem.layerElement.removeChild(i[0]);
              this.elem.layerElement.appendChild(e),
                this.elem.layerElement.removeAttribute('mask'),
                e.setAttribute('stroke', '#fff');
            }
            (this.initialized = !0), (this.pathMasker = e);
          }),
          (SVGStrokeEffect.prototype.renderFrame = function (t) {
            var e;
            this.initialized || this.initialize();
            var r,
              n,
              i = this.paths.length;
            for (e = 0; e < i; e += 1)
              if (
                -1 !== this.paths[e].m &&
                ((r = this.elem.maskManager.viewData[this.paths[e].m]),
                (n = this.paths[e].p),
                (t || this.filterManager._mdf || r.prop._mdf) && n.setAttribute('d', r.lastPath),
                t ||
                  this.filterManager.effectElements[9].p._mdf ||
                  this.filterManager.effectElements[4].p._mdf ||
                  this.filterManager.effectElements[7].p._mdf ||
                  this.filterManager.effectElements[8].p._mdf ||
                  r.prop._mdf)
              ) {
                var a;
                if (
                  0 !== this.filterManager.effectElements[7].p.v ||
                  100 !== this.filterManager.effectElements[8].p.v
                ) {
                  var s =
                      0.01 *
                      Math.min(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v
                      ),
                    o =
                      0.01 *
                      Math.max(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v
                      ),
                    l = n.getTotalLength();
                  a = '0 0 0 ' + l * s + ' ';
                  var h,
                    c = l * (o - s),
                    u =
                      1 +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01,
                    f = Math.floor(c / u);
                  for (h = 0; h < f; h += 1)
                    a +=
                      '1 ' +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01 +
                      ' ';
                  a += '0 ' + 10 * l + ' 0 0';
                } else
                  a =
                    '1 ' +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01;
                n.setAttribute('stroke-dasharray', a);
              }
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.pathMasker.setAttribute(
                  'stroke-width',
                  2 * this.filterManager.effectElements[4].p.v
                ),
              (t || this.filterManager.effectElements[6].p._mdf) &&
                this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v),
              (1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v) &&
                (t || this.filterManager.effectElements[3].p._mdf))
            ) {
              var p = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute(
                'stroke',
                'rgb(' +
                  bmFloor(255 * p[0]) +
                  ',' +
                  bmFloor(255 * p[1]) +
                  ',' +
                  bmFloor(255 * p[2]) +
                  ')'
              );
            }
          }),
          (SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                n = this.filterManager.effectElements[2].p.v,
                i = n[0] + ' ' + r[0] + ' ' + e[0],
                a = n[1] + ' ' + r[1] + ' ' + e[1],
                s = n[2] + ' ' + r[2] + ' ' + e[2];
              this.feFuncR.setAttribute('tableValues', i),
                this.feFuncG.setAttribute('tableValues', a),
                this.feFuncB.setAttribute('tableValues', s);
            }
          }),
          (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var r = createNS(t);
            return r.setAttribute('type', 'table'), e.appendChild(r), r;
          }),
          (SVGProLevelsFilter.prototype.getTableValue = function (t, e, r, n, i) {
            for (
              var a,
                s,
                o = 0,
                l = Math.min(t, e),
                h = Math.max(t, e),
                c = Array.call(null, { length: 256 }),
                u = 0,
                f = i - n,
                p = e - t;
              o <= 256;

            )
              (s =
                (a = o / 256) <= l
                  ? p < 0
                    ? i
                    : n
                  : a >= h
                  ? p < 0
                    ? n
                    : i
                  : n + f * Math.pow((a - t) / p, 1 / r)),
                (c[u] = s),
                (u += 1),
                (o += 256 / 255);
            return c.join(' ');
          }),
          (SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e,
                r = this.filterManager.effectElements;
              this.feFuncRComposed &&
                (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) &&
                ((e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v)),
                this.feFuncRComposed.setAttribute('tableValues', e),
                this.feFuncGComposed.setAttribute('tableValues', e),
                this.feFuncBComposed.setAttribute('tableValues', e)),
                this.feFuncR &&
                  (t ||
                    r[10].p._mdf ||
                    r[11].p._mdf ||
                    r[12].p._mdf ||
                    r[13].p._mdf ||
                    r[14].p._mdf) &&
                  ((e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v)),
                  this.feFuncR.setAttribute('tableValues', e)),
                this.feFuncG &&
                  (t ||
                    r[17].p._mdf ||
                    r[18].p._mdf ||
                    r[19].p._mdf ||
                    r[20].p._mdf ||
                    r[21].p._mdf) &&
                  ((e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v)),
                  this.feFuncG.setAttribute('tableValues', e)),
                this.feFuncB &&
                  (t ||
                    r[24].p._mdf ||
                    r[25].p._mdf ||
                    r[26].p._mdf ||
                    r[27].p._mdf ||
                    r[28].p._mdf) &&
                  ((e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v)),
                  this.feFuncB.setAttribute('tableValues', e)),
                this.feFuncA &&
                  (t ||
                    r[31].p._mdf ||
                    r[32].p._mdf ||
                    r[33].p._mdf ||
                    r[34].p._mdf ||
                    r[35].p._mdf) &&
                  ((e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v)),
                  this.feFuncA.setAttribute('tableValues', e));
            }
          }),
          (SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.feGaussianBlur.setAttribute(
                    'stdDeviation',
                    this.filterManager.effectElements[4].p.v / 4
                  ),
                t || this.filterManager.effectElements[0].p._mdf)
              ) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute(
                  'flood-color',
                  rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2]))
                );
              }
              if (
                ((t || this.filterManager.effectElements[1].p._mdf) &&
                  this.feFlood.setAttribute(
                    'flood-opacity',
                    this.filterManager.effectElements[1].p.v / 255
                  ),
                t ||
                  this.filterManager.effectElements[2].p._mdf ||
                  this.filterManager.effectElements[3].p._mdf)
              ) {
                var r = this.filterManager.effectElements[3].p.v,
                  n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                  i = r * Math.cos(n),
                  a = r * Math.sin(n);
                this.feOffset.setAttribute('dx', i), this.feOffset.setAttribute('dy', a);
              }
            }
          });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
          (this.initialized = !1),
            (this.filterManager = e),
            (this.filterElem = t),
            (this.elem = r),
            (r.matteElement = createNS('g')),
            r.matteElement.appendChild(r.layerElement),
            r.matteElement.appendChild(r.transformedElement),
            (r.baseElement = r.matteElement);
        }
        function SVGEffects(t) {
          var e,
            r,
            n = t.data.ef ? t.data.ef.length : 0,
            i = createElementID(),
            a = filtersFactory.createFilter(i, !0),
            s = 0;
          for (this.filters = [], e = 0; e < n; e += 1)
            (r = null),
              20 === t.data.ef[e].ty
                ? ((s += 1), (r = new SVGTintFilter(a, t.effectsManager.effectElements[e])))
                : 21 === t.data.ef[e].ty
                ? ((s += 1), (r = new SVGFillFilter(a, t.effectsManager.effectElements[e])))
                : 22 === t.data.ef[e].ty
                ? (r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]))
                : 23 === t.data.ef[e].ty
                ? ((s += 1), (r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])))
                : 24 === t.data.ef[e].ty
                ? ((s += 1), (r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])))
                : 25 === t.data.ef[e].ty
                ? ((s += 1), (r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])))
                : 28 === t.data.ef[e].ty
                ? (r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t))
                : 29 === t.data.ef[e].ty &&
                  ((s += 1),
                  (r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e]))),
              r && this.filters.push(r);
          s &&
            (t.globalData.defs.appendChild(a),
            t.layerElement.setAttribute('filter', 'url(' + locationHref + '#' + i + ')')),
            this.filters.length && t.addRenderableComponent(this);
        }
        function CVContextData() {
          var t;
          (this.saved = []), (this.cArrPos = 0), (this.cTr = new Matrix()), (this.cO = 1);
          for (this.savedOp = createTypedArray('float32', 15), t = 0; t < 15; t += 1)
            this.saved[t] = createTypedArray('float32', 16);
          this._length = 15;
        }
        function CVBaseElement() {}
        function CVImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)),
            (this.img = e.imageLoader.getAsset(this.assetData)),
            this.initElement(t, e, r);
        }
        function CVCompElement(t, e, r) {
          (this.completeLayers = !1),
            (this.layers = t.layers),
            (this.pendingElements = []),
            (this.elements = createSizedArray(this.layers.length)),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function CVMaskElement(t, e) {
          var r;
          (this.data = t),
            (this.element = e),
            (this.masksProperties = this.data.masksProperties || []),
            (this.viewData = createSizedArray(this.masksProperties.length));
          var n = this.masksProperties.length,
            i = !1;
          for (r = 0; r < n; r += 1)
            'n' !== this.masksProperties[r].mode && (i = !0),
              (this.viewData[r] = ShapePropertyFactory.getShapeProp(
                this.element,
                this.masksProperties[r],
                3
              ));
          (this.hasMasks = i), i && this.element.addRenderableComponent(this);
        }
        function CVShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.itemsData = []),
            (this.prevViewData = []),
            (this.shapeModifiers = []),
            (this.processedElements = []),
            (this.transformsManager = new ShapeTransformManager()),
            this.initElement(t, e, r);
        }
        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function CVTextElement(t, e, r) {
          (this.textSpans = []),
            (this.yOffset = 0),
            (this.fillColorAnim = !1),
            (this.strokeColorAnim = !1),
            (this.strokeWidthAnim = !1),
            (this.stroke = !1),
            (this.fill = !1),
            (this.justifyOffset = 0),
            (this.currentRender = null),
            (this.renderType = 'canvas'),
            (this.values = {
              fill: 'rgba(0,0,0,0)',
              stroke: 'rgba(0,0,0,0)',
              sWidth: 0,
              fValue: '',
            }),
            this.initElement(t, e, r);
        }
        function CVEffects() {}
        function HBaseElement() {}
        function HSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function HCompElement(t, e, r) {
          (this.layers = t.layers),
            (this.supports3d = !t.hasMask),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 });
        }
        function HShapeElement(t, e, r) {
          (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            (this.shapesContainer = createNS('g')),
            this.initElement(t, e, r),
            (this.prevViewData = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
        }
        function HTextElement(t, e, r) {
          (this.textSpans = []),
            (this.textPaths = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
            (this.renderType = 'svg'),
            (this.isMasked = !1),
            this.initElement(t, e, r);
        }
        function HImageElement(t, e, r) {
          (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, r);
        }
        function HCameraElement(t, e, r) {
          this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
          var n = PropertyFactory.getProp;
          if (
            ((this.pe = n(this, t.pe, 0, 0, this)),
            t.ks.p.s
              ? ((this.px = n(this, t.ks.p.x, 1, 0, this)),
                (this.py = n(this, t.ks.p.y, 1, 0, this)),
                (this.pz = n(this, t.ks.p.z, 1, 0, this)))
              : (this.p = n(this, t.ks.p, 1, 0, this)),
            t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to)
          ) {
            var i,
              a = t.ks.or.k.length;
            for (i = 0; i < a; i += 1) (t.ks.or.k[i].to = null), (t.ks.or.k[i].ti = null);
          }
          (this.or = n(this, t.ks.or, 1, degToRads, this)),
            (this.or.sh = !0),
            (this.rx = n(this, t.ks.rx, 0, degToRads, this)),
            (this.ry = n(this, t.ks.ry, 0, degToRads, this)),
            (this.rz = n(this, t.ks.rz, 0, degToRads, this)),
            (this.mat = new Matrix()),
            (this._prevMat = new Matrix()),
            (this._isFirstFrame = !0),
            (this.finalTransform = { mProp: this });
        }
        function HEffects() {}
        (SVGMatte3Effect.prototype.findSymbol = function (t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1;
          }
          return null;
        }),
          (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
              for (var n, i = r.children, a = 0, s = i.length; a < s && i[a] !== t.layerElement; )
                a += 1;
              a <= s - 2 && (n = i[a + 1]);
              var o = createNS('use');
              o.setAttribute('href', '#' + e), n ? r.insertBefore(o, n) : r.appendChild(o);
            }
          }),
          (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
              var r = createElementID(),
                n = createNS('mask');
              n.setAttribute('id', e.layerId),
                n.setAttribute('mask-type', 'alpha'),
                _svgMatteSymbols.push(e);
              var i = t.globalData.defs;
              i.appendChild(n);
              var a = createNS('symbol');
              a.setAttribute('id', r),
                this.replaceInParent(e, r),
                a.appendChild(e.layerElement),
                i.appendChild(a);
              var s = createNS('use');
              s.setAttribute('href', '#' + r), n.appendChild(s), (e.data.hd = !1), e.show();
            }
            t.setMatte(e.layerId);
          }),
          (SVGMatte3Effect.prototype.initialize = function () {
            for (
              var t = this.filterManager.effectElements[0].p.v,
                e = this.elem.comp.elements,
                r = 0,
                n = e.length;
              r < n;

            )
              e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), (r += 1);
            this.initialized = !0;
          }),
          (SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize();
          }),
          (SVGEffects.prototype.renderFrame = function (t) {
            var e,
              r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
          }),
          (CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length,
              e = this.savedOp;
            (this.savedOp = createTypedArray('float32', t)), this.savedOp.set(e);
            var r = 0;
            for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray('float32', 16);
            this._length = t;
          }),
          (CVContextData.prototype.reset = function () {
            (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
          }),
          (CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
              (this.canvasContext = this.globalData.canvasContext),
                (this.renderableEffectsManager = new CVEffects(this));
            },
            createContent: function () {},
            setBlendMode: function () {
              var t = this.globalData;
              if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e;
              }
            },
            createRenderableComponents: function () {
              this.maskManager = new CVMaskElement(this.data, this);
            },
            hideElement: function () {
              this.hidden || (this.isInRange && !this.isTransparent) || (this.hidden = !0);
            },
            showElement: function () {
              this.isInRange &&
                !this.isTransparent &&
                ((this.hidden = !1),
                (this._isFirstFrame = !0),
                (this.maskManager._isFirstFrame = !0));
            },
            renderFrame: function () {
              if (!this.hidden && !this.data.hd) {
                this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                var t = 0 === this.data.ty;
                this.globalData.renderer.save(t),
                  this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                  this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                  this.renderInnerContent(),
                  this.globalData.renderer.restore(t),
                  this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                  this._isFirstFrame && (this._isFirstFrame = !1);
              }
            },
            destroy: function () {
              (this.canvasContext = null),
                (this.data = null),
                (this.globalData = null),
                this.maskManager.destroy();
            },
            mHelper: new Matrix(),
          }),
          (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
          (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVImageElement
          ),
          (CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement),
          (CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
          (CVImageElement.prototype.createContent = function () {
            if (
              this.img.width &&
              (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)
            ) {
              var t = createTag('canvas');
              (t.width = this.assetData.w), (t.height = this.assetData.h);
              var e,
                r,
                n = t.getContext('2d'),
                i = this.img.width,
                a = this.img.height,
                s = i / a,
                o = this.assetData.w / this.assetData.h,
                l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
              (s > o && 'xMidYMid slice' === l) || (s < o && 'xMidYMid slice' !== l)
                ? (e = (r = a) * o)
                : (r = (e = i) / o),
                n.drawImage(
                  this.img,
                  (i - e) / 2,
                  (a - r) / 2,
                  e,
                  r,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h
                ),
                (this.img = t);
            }
          }),
          (CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
          }),
          (CVImageElement.prototype.destroy = function () {
            this.img = null;
          }),
          extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),
          (CVCompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.canvasContext;
            for (
              e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(this.data.w, 0),
                e.lineTo(this.data.w, this.data.h),
                e.lineTo(0, this.data.h),
                e.lineTo(0, 0),
                e.clip(),
                t = this.layers.length - 1;
              t >= 0;
              t -= 1
            )
              (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
          }),
          (CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            (this.layers = null), (this.elements = null);
          }),
          (CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
              var t,
                e,
                r,
                n,
                i = this.element.finalTransform.mat,
                a = this.element.canvasContext,
                s = this.masksProperties.length;
              for (a.beginPath(), t = 0; t < s; t += 1)
                if ('n' !== this.masksProperties[t].mode) {
                  var o;
                  this.masksProperties[t].inv &&
                    (a.moveTo(0, 0),
                    a.lineTo(this.element.globalData.compSize.w, 0),
                    a.lineTo(
                      this.element.globalData.compSize.w,
                      this.element.globalData.compSize.h
                    ),
                    a.lineTo(0, this.element.globalData.compSize.h),
                    a.lineTo(0, 0)),
                    (n = this.viewData[t].v),
                    (e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0)),
                    a.moveTo(e[0], e[1]);
                  var l = n._length;
                  for (o = 1; o < l; o += 1)
                    (r = i.applyToTriplePoints(n.o[o - 1], n.i[o], n.v[o])),
                      a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  (r = i.applyToTriplePoints(n.o[o - 1], n.i[0], n.v[0])),
                    a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                }
              this.element.globalData.renderer.save(!0), a.clip();
            }
          }),
          (CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty),
          (CVMaskElement.prototype.destroy = function () {
            this.element = null;
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVShapeElement
          ),
          (CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement),
          (CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }),
          (CVShapeElement.prototype.dashResetter = []),
          (CVShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
          }),
          (CVShapeElement.prototype.createStyleElement = function (t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd,
              },
              n = {};
            if (
              ('fl' === t.ty || 'st' === t.ty
                ? ((n.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                  n.c.k ||
                    (r.co =
                      'rgb(' +
                      bmFloor(n.c.v[0]) +
                      ',' +
                      bmFloor(n.c.v[1]) +
                      ',' +
                      bmFloor(n.c.v[2]) +
                      ')'))
                : ('gf' !== t.ty && 'gs' !== t.ty) ||
                  ((n.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                  (n.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                  (n.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this)),
                  (n.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this)),
                  (n.g = new GradientProperty(this, t.g, this))),
              (n.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
              'st' === t.ty || 'gs' === t.ty)
            ) {
              if (
                ((r.lc = lineCapEnum[t.lc || 2]),
                (r.lj = lineJoinEnum[t.lj || 2]),
                1 == t.lj && (r.ml = t.ml),
                (n.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                n.w.k || (r.wi = n.w.v),
                t.d)
              ) {
                var i = new DashProperty(this, t.d, 'canvas', this);
                (n.d = i), n.d.k || ((r.da = n.d.dashArray), (r.do = n.d.dashoffset[0]));
              }
            } else r.r = 2 === t.r ? 'evenodd' : 'nonzero';
            return this.stylesList.push(r), (n.style = r), n;
          }),
          (CVShapeElement.prototype.createGroupElement = function () {
            return { it: [], prevViewData: [] };
          }),
          (CVShapeElement.prototype.createTransformElement = function (t) {
            return {
              transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                mProps: TransformPropertyFactory.getTransformProperty(this, t, this),
              },
            };
          }),
          (CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
          }),
          (CVShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
          }),
          (CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e,
              r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
              this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
          }),
          (CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t,
              e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          }),
          (CVShapeElement.prototype.closeStyles = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0;
          }),
          (CVShapeElement.prototype.searchShapes = function (t, e, r, n, i) {
            var a,
              s,
              o,
              l,
              h,
              c,
              u = t.length - 1,
              f = [],
              p = [],
              d = [].concat(i);
            for (a = u; a >= 0; a -= 1) {
              if (
                ((l = this.searchProcessedElement(t[a]))
                  ? (e[a] = r[l - 1])
                  : (t[a]._shouldRender = n),
                'fl' === t[a].ty || 'st' === t[a].ty || 'gf' === t[a].ty || 'gs' === t[a].ty)
              )
                l ? (e[a].style.closed = !1) : (e[a] = this.createStyleElement(t[a], d)),
                  f.push(e[a].style);
              else if ('gr' === t[a].ty) {
                if (l)
                  for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
                else e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, n, d);
              } else
                'tr' === t[a].ty
                  ? (l || ((c = this.createTransformElement(t[a])), (e[a] = c)),
                    d.push(e[a]),
                    this.addTransformToStyleList(e[a]))
                  : 'sh' === t[a].ty || 'rc' === t[a].ty || 'el' === t[a].ty || 'sr' === t[a].ty
                  ? l || (e[a] = this.createShapeElement(t[a]))
                  : 'tm' === t[a].ty || 'rd' === t[a].ty || 'pb' === t[a].ty
                  ? (l
                      ? ((h = e[a]).closed = !1)
                      : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]),
                        (e[a] = h),
                        this.shapeModifiers.push(h)),
                    p.push(h))
                  : 'rp' === t[a].ty &&
                    (l
                      ? ((h = e[a]).closed = !0)
                      : ((h = ShapeModifiers.getModifier(t[a].ty)),
                        (e[a] = h),
                        h.init(this, t, a, e),
                        this.shapeModifiers.push(h),
                        (n = !1)),
                    p.push(h));
              this.addProcessedElement(t[a], a + 1);
            }
            for (
              this.removeTransformFromStyleList(), this.closeStyles(f), u = p.length, a = 0;
              a < u;
              a += 1
            )
              p[a].closed = !0;
          }),
          (CVShapeElement.prototype.renderInnerContent = function () {
            (this.transformHelper.opacity = 1),
              (this.transformHelper._opMdf = !1),
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame),
              this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
          }),
          (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) &&
              ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
          }),
          (CVShapeElement.prototype.drawLayer = function () {
            var t,
              e,
              r,
              n,
              i,
              a,
              s,
              o,
              l,
              h = this.stylesList.length,
              c = this.globalData.renderer,
              u = this.globalData.canvasContext;
            for (t = 0; t < h; t += 1)
              if (
                (('st' !== (o = (l = this.stylesList[t]).type) && 'gs' !== o) || 0 !== l.wi) &&
                l.data._shouldRender &&
                0 !== l.coOp &&
                0 !== this.globalData.currentGlobalAlpha
              ) {
                for (
                  c.save(),
                    a = l.elements,
                    'st' === o || 'gs' === o
                      ? ((u.strokeStyle = 'st' === o ? l.co : l.grd),
                        (u.lineWidth = l.wi),
                        (u.lineCap = l.lc),
                        (u.lineJoin = l.lj),
                        (u.miterLimit = l.ml || 0))
                      : (u.fillStyle = 'fl' === o ? l.co : l.grd),
                    c.ctxOpacity(l.coOp),
                    'st' !== o && 'gs' !== o && u.beginPath(),
                    c.ctxTransform(l.preTransforms.finalTransform.props),
                    r = a.length,
                    e = 0;
                  e < r;
                  e += 1
                ) {
                  for (
                    ('st' !== o && 'gs' !== o) ||
                      (u.beginPath(), l.da && (u.setLineDash(l.da), (u.lineDashOffset = l.do))),
                      i = (s = a[e].trNodes).length,
                      n = 0;
                    n < i;
                    n += 1
                  )
                    'm' === s[n].t
                      ? u.moveTo(s[n].p[0], s[n].p[1])
                      : 'c' === s[n].t
                      ? u.bezierCurveTo(
                          s[n].pts[0],
                          s[n].pts[1],
                          s[n].pts[2],
                          s[n].pts[3],
                          s[n].pts[4],
                          s[n].pts[5]
                        )
                      : u.closePath();
                  ('st' !== o && 'gs' !== o) ||
                    (u.stroke(), l.da && u.setLineDash(this.dashResetter));
                }
                'st' !== o && 'gs' !== o && u.fill(l.r), c.restore();
              }
          }),
          (CVShapeElement.prototype.renderShape = function (t, e, r, n) {
            var i, a;
            for (a = t, i = e.length - 1; i >= 0; i -= 1)
              'tr' === e[i].ty
                ? ((a = r[i].transform), this.renderShapeTransform(t, a))
                : 'sh' === e[i].ty || 'el' === e[i].ty || 'rc' === e[i].ty || 'sr' === e[i].ty
                ? this.renderPath(e[i], r[i])
                : 'fl' === e[i].ty
                ? this.renderFill(e[i], r[i], a)
                : 'st' === e[i].ty
                ? this.renderStroke(e[i], r[i], a)
                : 'gf' === e[i].ty || 'gs' === e[i].ty
                ? this.renderGradientFill(e[i], r[i], a)
                : 'gr' === e[i].ty
                ? this.renderShape(a, e[i].it, r[i].it)
                : e[i].ty;
            n && this.drawLayer();
          }),
          (CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var r,
                n,
                i,
                a = t.trNodes,
                s = e.paths,
                o = s._length;
              a.length = 0;
              var l = t.transforms.finalTransform;
              for (i = 0; i < o; i += 1) {
                var h = s.shapes[i];
                if (h && h.v) {
                  for (n = h._length, r = 1; r < n; r += 1)
                    1 === r && a.push({ t: 'm', p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }),
                      a.push({ t: 'c', pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r]) });
                  1 === n && a.push({ t: 'm', p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }),
                    h.c &&
                      n &&
                      (a.push({ t: 'c', pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0]) }),
                      a.push({ t: 'z' }));
                }
              }
              t.trNodes = a;
            }
          }),
          (CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
              var r,
                n = e.styledShapes.length;
              for (r = 0; r < n; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh);
            }
          }),
          (CVShapeElement.prototype.renderFill = function (t, e, r) {
            var n = e.style;
            (e.c._mdf || this._isFirstFrame) &&
              (n.co =
                'rgb(' +
                bmFloor(e.c.v[0]) +
                ',' +
                bmFloor(e.c.v[1]) +
                ',' +
                bmFloor(e.c.v[2]) +
                ')'),
              (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity);
          }),
          (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
            var n,
              i = e.style;
            if (
              !i.grd ||
              e.g._mdf ||
              e.s._mdf ||
              e.e._mdf ||
              (1 !== t.t && (e.h._mdf || e.a._mdf))
            ) {
              var a,
                s = this.globalData.canvasContext,
                o = e.s.v,
                l = e.e.v;
              if (1 === t.t) n = s.createLinearGradient(o[0], o[1], l[0], l[1]);
              else {
                var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                  c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                  u = e.h.v;
                u >= 1 ? (u = 0.99) : u <= -1 && (u = -0.99);
                var f = h * u,
                  p = Math.cos(c + e.a.v) * f + o[0],
                  d = Math.sin(c + e.a.v) * f + o[1];
                n = s.createRadialGradient(p, d, 0, o[0], o[1], h);
              }
              var m = t.g.p,
                v = e.g.c,
                y = 1;
              for (a = 0; a < m; a += 1)
                e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * a + 1]),
                  n.addColorStop(
                    v[4 * a] / 100,
                    'rgba(' + v[4 * a + 1] + ',' + v[4 * a + 2] + ',' + v[4 * a + 3] + ',' + y + ')'
                  );
              i.grd = n;
            }
            i.coOp = e.o.v * r.opacity;
          }),
          (CVShapeElement.prototype.renderStroke = function (t, e, r) {
            var n = e.style,
              i = e.d;
            i && (i._mdf || this._isFirstFrame) && ((n.da = i.dashArray), (n.do = i.dashoffset[0])),
              (e.c._mdf || this._isFirstFrame) &&
                (n.co =
                  'rgb(' +
                  bmFloor(e.c.v[0]) +
                  ',' +
                  bmFloor(e.c.v[1]) +
                  ',' +
                  bmFloor(e.c.v[2]) +
                  ')'),
              (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity),
              (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v);
          }),
          (CVShapeElement.prototype.destroy = function () {
            (this.shapesData = null),
              (this.globalData = null),
              (this.canvasContext = null),
              (this.stylesList.length = 0),
              (this.itemsData.length = 0);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVSolidElement
          ),
          (CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement),
          (CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
          (CVSolidElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            (t.fillStyle = this.data.sc), t.fillRect(0, 0, this.data.sw, this.data.sh);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
              ITextElement,
            ],
            CVTextElement
          ),
          (CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d')),
          (CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc
              ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
              : (this.values.fill = 'rgba(0,0,0,0)'),
              (this.fill = e);
            var r = !1;
            t.sc &&
              ((r = !0), (this.values.stroke = this.buildColor(t.sc)), (this.values.sWidth = t.sw));
            var n,
              i,
              a,
              s,
              o,
              l,
              h,
              c,
              u,
              f,
              p,
              d,
              m = this.globalData.fontManager.getFontByName(t.f),
              v = t.l,
              y = this.mHelper;
            (this.stroke = r),
              (this.values.fValue =
                t.finalSize + 'px ' + this.globalData.fontManager.getFontByName(t.f).fFamily),
              (i = t.finalText.length);
            var g = this.data.singleShape,
              E = 0.001 * t.tr * t.finalSize,
              b = 0,
              _ = 0,
              x = !0,
              S = 0;
            for (n = 0; n < i; n += 1) {
              for (
                s =
                  ((a = this.globalData.fontManager.getCharData(
                    t.finalText[n],
                    m.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily
                  )) &&
                    a.data) ||
                  {},
                  y.reset(),
                  g && v[n].n && ((b = -E), (_ += t.yOffset), (_ += x ? 1 : 0), (x = !1)),
                  u = (h = s.shapes ? s.shapes[0].it : []).length,
                  y.scale(t.finalSize / 100, t.finalSize / 100),
                  g && this.applyTextPropertiesToMatrix(t, y, v[n].line, b, _),
                  p = createSizedArray(u),
                  c = 0;
                c < u;
                c += 1
              ) {
                for (l = h[c].ks.k.i.length, f = h[c].ks.k, d = [], o = 1; o < l; o += 1)
                  1 === o &&
                    d.push(
                      y.applyToX(f.v[0][0], f.v[0][1], 0),
                      y.applyToY(f.v[0][0], f.v[0][1], 0)
                    ),
                    d.push(
                      y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0),
                      y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0),
                      y.applyToX(f.i[o][0], f.i[o][1], 0),
                      y.applyToY(f.i[o][0], f.i[o][1], 0),
                      y.applyToX(f.v[o][0], f.v[o][1], 0),
                      y.applyToY(f.v[o][0], f.v[o][1], 0)
                    );
                d.push(
                  y.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0),
                  y.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0),
                  y.applyToX(f.i[0][0], f.i[0][1], 0),
                  y.applyToY(f.i[0][0], f.i[0][1], 0),
                  y.applyToX(f.v[0][0], f.v[0][1], 0),
                  y.applyToY(f.v[0][0], f.v[0][1], 0)
                ),
                  (p[c] = d);
              }
              g && ((b += v[n].l), (b += E)),
                this.textSpans[S]
                  ? (this.textSpans[S].elem = p)
                  : (this.textSpans[S] = { elem: p }),
                (S += 1);
            }
          }),
          (CVTextElement.prototype.renderInnerContent = function () {
            var t,
              e,
              r,
              n,
              i,
              a,
              s = this.canvasContext;
            (s.font = this.values.fValue),
              (s.lineCap = 'butt'),
              (s.lineJoin = 'miter'),
              (s.miterLimit = 4),
              this.data.singleShape ||
                this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag
                );
            var o,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            e = h.length;
            var c,
              u,
              f = null,
              p = null,
              d = null;
            for (t = 0; t < e; t += 1)
              if (!h[t].n) {
                if (
                  ((o = l[t]) &&
                    (this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(o.p),
                    this.globalData.renderer.ctxOpacity(o.o)),
                  this.fill)
                ) {
                  for (
                    o && o.fc
                      ? f !== o.fc && ((f = o.fc), (s.fillStyle = o.fc))
                      : f !== this.values.fill &&
                        ((f = this.values.fill), (s.fillStyle = this.values.fill)),
                      n = (c = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < n;
                    r += 1
                  )
                    for (
                      a = (u = c[r]).length,
                        this.globalData.canvasContext.moveTo(u[0], u[1]),
                        i = 2;
                      i < a;
                      i += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        u[i],
                        u[i + 1],
                        u[i + 2],
                        u[i + 3],
                        u[i + 4],
                        u[i + 5]
                      );
                  this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                }
                if (this.stroke) {
                  for (
                    o && o.sw
                      ? d !== o.sw && ((d = o.sw), (s.lineWidth = o.sw))
                      : d !== this.values.sWidth &&
                        ((d = this.values.sWidth), (s.lineWidth = this.values.sWidth)),
                      o && o.sc
                        ? p !== o.sc && ((p = o.sc), (s.strokeStyle = o.sc))
                        : p !== this.values.stroke &&
                          ((p = this.values.stroke), (s.strokeStyle = this.values.stroke)),
                      n = (c = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < n;
                    r += 1
                  )
                    for (
                      a = (u = c[r]).length,
                        this.globalData.canvasContext.moveTo(u[0], u[1]),
                        i = 2;
                      i < a;
                      i += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        u[i],
                        u[i + 1],
                        u[i + 2],
                        u[i + 3],
                        u[i + 4],
                        u[i + 5]
                      );
                  this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                }
                o && this.globalData.renderer.restore();
              }
          }),
          (CVEffects.prototype.renderFrame = function () {}),
          (HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
              (this.baseElement = createTag(this.data.tg || 'div')),
                this.data.hasMask
                  ? ((this.svgElement = createNS('svg')),
                    (this.layerElement = createNS('g')),
                    (this.maskedElement = this.layerElement),
                    this.svgElement.appendChild(this.layerElement),
                    this.baseElement.appendChild(this.svgElement))
                  : (this.layerElement = this.baseElement),
                styleDiv(this.baseElement);
            },
            createContainerElements: function () {
              (this.renderableEffectsManager = new CVEffects(this)),
                (this.transformedElement = this.baseElement),
                (this.maskedElement = this.layerElement),
                this.data.ln && this.layerElement.setAttribute('id', this.data.ln),
                this.data.cl && this.layerElement.setAttribute('class', this.data.cl),
                0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              var t = this.transformedElement ? this.transformedElement.style : {};
              if (this.finalTransform._matMdf) {
                var e = this.finalTransform.mat.toCSS();
                (t.transform = e), (t.webkitTransform = e);
              }
              this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function () {
              this.data.hd ||
                this.hidden ||
                (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function () {
              (this.layerElement = null),
                (this.transformedElement = null),
                this.matteElement && (this.matteElement = null),
                this.maskManager && (this.maskManager.destroy(), (this.maskManager = null));
            },
            createRenderableComponents: function () {
              this.maskManager = new MaskElement(this.data, this, this.globalData);
            },
            addEffects: function () {},
            setMatte: function () {},
          }),
          (HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement),
          (HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy),
          (HBaseElement.prototype.buildElementParenting =
            HybridRenderer.prototype.buildElementParenting),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            HSolidElement
          ),
          (HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask
              ? ((t = createNS('rect')).setAttribute('width', this.data.sw),
                t.setAttribute('height', this.data.sh),
                t.setAttribute('fill', this.data.sc),
                this.svgElement.setAttribute('width', this.data.sw),
                this.svgElement.setAttribute('height', this.data.sh))
              : (((t = createTag('div')).style.width = this.data.sw + 'px'),
                (t.style.height = this.data.sh + 'px'),
                (t.style.backgroundColor = this.data.sc)),
              this.layerElement.appendChild(t);
          }),
          extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
          (HCompElement.prototype._createBaseContainerElements =
            HCompElement.prototype.createContainerElements),
          (HCompElement.prototype.createContainerElements = function () {
            this._createBaseContainerElements(),
              this.data.hasMask
                ? (this.svgElement.setAttribute('width', this.data.w),
                  this.svgElement.setAttribute('height', this.data.h),
                  (this.transformedElement = this.baseElement))
                : (this.transformedElement = this.layerElement);
          }),
          (HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var r, n = 0; n < e; )
              this.elements[n] &&
                this.elements[n].getBaseElement &&
                (r = this.elements[n].getBaseElement()),
                (n += 1);
            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HSolidElement,
              SVGShapeElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HShapeElement
          ),
          (HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent),
          (HShapeElement.prototype.createContent = function () {
            var t;
            if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
              this.layerElement.appendChild(this.shapesContainer), (t = this.svgElement);
            else {
              t = createNS('svg');
              var e = this.comp.data ? this.comp.data : this.globalData.compSize;
              t.setAttribute('width', e.w),
                t.setAttribute('height', e.h),
                t.appendChild(this.shapesContainer),
                this.layerElement.appendChild(t);
            }
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.shapesContainer,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              (this.shapeCont = t);
          }),
          (HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var r,
              n = t.length;
            for (r = 0; r < n; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
          }),
          (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var r,
              n,
              i,
              a,
              s,
              o = t.sh.v,
              l = t.transformers,
              h = o._length;
            if (!(h <= 1)) {
              for (r = 0; r < h - 1; r += 1)
                (n = this.getTransformedPoint(l, o.v[r])),
                  (i = this.getTransformedPoint(l, o.o[r])),
                  (a = this.getTransformedPoint(l, o.i[r + 1])),
                  (s = this.getTransformedPoint(l, o.v[r + 1])),
                  this.checkBounds(n, i, a, s, e);
              o.c &&
                ((n = this.getTransformedPoint(l, o.v[r])),
                (i = this.getTransformedPoint(l, o.o[r])),
                (a = this.getTransformedPoint(l, o.i[0])),
                (s = this.getTransformedPoint(l, o.v[0])),
                this.checkBounds(n, i, a, s, e));
            }
          }),
          (HShapeElement.prototype.checkBounds = function (t, e, r, n, i) {
            this.getBoundsOfCurve(t, e, r, n);
            var a = this.shapeBoundingBox;
            (i.x = bmMin(a.left, i.x)),
              (i.xMax = bmMax(a.right, i.xMax)),
              (i.y = bmMin(a.top, i.y)),
              (i.yMax = bmMax(a.bottom, i.yMax));
          }),
          (HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }),
          (HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0,
          }),
          (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, n) {
            for (
              var i,
                a,
                s,
                o,
                l,
                h,
                c,
                u = [
                  [t[0], n[0]],
                  [t[1], n[1]],
                ],
                f = 0;
              f < 2;
              ++f
            )
              (a = 6 * t[f] - 12 * e[f] + 6 * r[f]),
                (i = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * n[f]),
                (s = 3 * e[f] - 3 * t[f]),
                (a |= 0),
                (s |= 0),
                (0 === (i |= 0) && 0 === a) ||
                  (0 === i
                    ? (o = -s / a) > 0 && o < 1 && u[f].push(this.calculateF(o, t, e, r, n, f))
                    : (l = a * a - 4 * s * i) >= 0 &&
                      ((h = (-a + bmSqrt(l)) / (2 * i)) > 0 &&
                        h < 1 &&
                        u[f].push(this.calculateF(h, t, e, r, n, f)),
                      (c = (-a - bmSqrt(l)) / (2 * i)) > 0 &&
                        c < 1 &&
                        u[f].push(this.calculateF(c, t, e, r, n, f))));
            (this.shapeBoundingBox.left = bmMin.apply(null, u[0])),
              (this.shapeBoundingBox.top = bmMin.apply(null, u[1])),
              (this.shapeBoundingBox.right = bmMax.apply(null, u[0])),
              (this.shapeBoundingBox.bottom = bmMax.apply(null, u[1]));
          }),
          (HShapeElement.prototype.calculateF = function (t, e, r, n, i, a) {
            return (
              bmPow(1 - t, 3) * e[a] +
              3 * bmPow(1 - t, 2) * t * r[a] +
              3 * (1 - t) * bmPow(t, 2) * n[a] +
              bmPow(t, 3) * i[a]
            );
          }),
          (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var r,
              n = t.length;
            for (r = 0; r < n; r += 1)
              t[r] && t[r].sh
                ? this.calculateShapeBoundingBox(t[r], e)
                : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
          }),
          (HShapeElement.prototype.currentBoxContains = function (t) {
            return (
              this.currentBBox.x <= t.x &&
              this.currentBBox.y <= t.y &&
              this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
              this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            );
          }),
          (HShapeElement.prototype.renderInnerContent = function () {
            if ((this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf))) {
              var t = this.tempBoundingBox,
                e = 999999;
              if (
                ((t.x = e),
                (t.xMax = -e),
                (t.y = e),
                (t.yMax = -e),
                this.calculateBoundingBox(this.itemsData, t),
                (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                this.currentBoxContains(t))
              )
                return;
              var r = !1;
              if (
                (this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width),
                  this.shapeCont.setAttribute('width', t.width),
                  (r = !0)),
                this.currentBBox.h !== t.height &&
                  ((this.currentBBox.h = t.height),
                  this.shapeCont.setAttribute('height', t.height),
                  (r = !0)),
                r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
              ) {
                (this.currentBBox.w = t.width),
                  (this.currentBBox.h = t.height),
                  (this.currentBBox.x = t.x),
                  (this.currentBBox.y = t.y),
                  this.shapeCont.setAttribute(
                    'viewBox',
                    this.currentBBox.x +
                      ' ' +
                      this.currentBBox.y +
                      ' ' +
                      this.currentBBox.w +
                      ' ' +
                      this.currentBBox.h
                  );
                var n = this.shapeCont.style,
                  i = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                (n.transform = i), (n.webkitTransform = i);
              }
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            HTextElement
          ),
          (HTextElement.prototype.createContent = function () {
            if (((this.isMasked = this.checkMasks()), this.isMasked)) {
              (this.renderType = 'svg'),
                (this.compW = this.comp.data.w),
                (this.compH = this.comp.data.h),
                this.svgElement.setAttribute('width', this.compW),
                this.svgElement.setAttribute('height', this.compH);
              var t = createNS('g');
              this.maskedElement.appendChild(t), (this.innerElem = t);
            } else (this.renderType = 'html'), (this.innerElem = this.layerElement);
            this.checkParenting();
          }),
          (HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
              r = t.fc ? this.buildColor(t.fc) : 'rgba(0,0,0,0)';
            (e.fill = r),
              (e.color = r),
              t.sc && ((e.stroke = this.buildColor(t.sc)), (e.strokeWidth = t.sw + 'px'));
            var n,
              i,
              a = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
              if (
                ((e.fontSize = t.finalSize + 'px'), (e.lineHeight = t.finalSize + 'px'), a.fClass)
              )
                this.innerElem.className = a.fClass;
              else {
                e.fontFamily = a.fFamily;
                var s = t.fWeight,
                  o = t.fStyle;
                (e.fontStyle = o), (e.fontWeight = s);
              }
            var l,
              h,
              c,
              u = t.l;
            i = u.length;
            var f,
              p = this.mHelper,
              d = '',
              m = 0;
            for (n = 0; n < i; n += 1) {
              if (
                (this.globalData.fontManager.chars
                  ? (this.textPaths[m]
                      ? (l = this.textPaths[m])
                      : ((l = createNS('path')).setAttribute('stroke-linecap', lineCapEnum[1]),
                        l.setAttribute('stroke-linejoin', lineJoinEnum[2]),
                        l.setAttribute('stroke-miterlimit', '4')),
                    this.isMasked ||
                      (this.textSpans[m]
                        ? (c = (h = this.textSpans[m]).children[0])
                        : (((h = createTag('div')).style.lineHeight = 0),
                          (c = createNS('svg')).appendChild(l),
                          styleDiv(h))))
                  : this.isMasked
                  ? (l = this.textPaths[m] ? this.textPaths[m] : createNS('text'))
                  : this.textSpans[m]
                  ? ((h = this.textSpans[m]), (l = this.textPaths[m]))
                  : (styleDiv((h = createTag('span'))),
                    styleDiv((l = createTag('span'))),
                    h.appendChild(l)),
                this.globalData.fontManager.chars)
              ) {
                var v,
                  y = this.globalData.fontManager.getCharData(
                    t.finalText[n],
                    a.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily
                  );
                if (
                  ((v = y ? y.data : null),
                  p.reset(),
                  v &&
                    v.shapes &&
                    ((f = v.shapes[0].it),
                    p.scale(t.finalSize / 100, t.finalSize / 100),
                    (d = this.createPathShape(p, f)),
                    l.setAttribute('d', d)),
                  this.isMasked)
                )
                  this.innerElem.appendChild(l);
                else {
                  if ((this.innerElem.appendChild(h), v && v.shapes)) {
                    document.body.appendChild(c);
                    var g = c.getBBox();
                    c.setAttribute('width', g.width + 2),
                      c.setAttribute('height', g.height + 2),
                      c.setAttribute(
                        'viewBox',
                        g.x - 1 + ' ' + (g.y - 1) + ' ' + (g.width + 2) + ' ' + (g.height + 2)
                      );
                    var E = c.style,
                      b = 'translate(' + (g.x - 1) + 'px,' + (g.y - 1) + 'px)';
                    (E.transform = b), (E.webkitTransform = b), (u[n].yOffset = g.y - 1);
                  } else c.setAttribute('width', 1), c.setAttribute('height', 1);
                  h.appendChild(c);
                }
              } else if (
                ((l.textContent = u[n].val),
                l.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'),
                this.isMasked)
              )
                this.innerElem.appendChild(l);
              else {
                this.innerElem.appendChild(h);
                var _ = l.style,
                  x = 'translate3d(0,' + -t.finalSize / 1.2 + 'px,0)';
                (_.transform = x), (_.webkitTransform = x);
              }
              this.isMasked ? (this.textSpans[m] = l) : (this.textSpans[m] = h),
                (this.textSpans[m].style.display = 'block'),
                (this.textPaths[m] = l),
                (m += 1);
            }
            for (; m < this.textSpans.length; )
              (this.textSpans[m].style.display = 'none'), (m += 1);
          }),
          (HTextElement.prototype.renderInnerContent = function () {
            var t;
            if (this.data.singleShape) {
              if (!this._isFirstFrame && !this.lettersChangedFlag) return;
              if (this.isMasked && this.finalTransform._matMdf) {
                this.svgElement.setAttribute(
                  'viewBox',
                  -this.finalTransform.mProp.p.v[0] +
                    ' ' +
                    -this.finalTransform.mProp.p.v[1] +
                    ' ' +
                    this.compW +
                    ' ' +
                    this.compH
                ),
                  (t = this.svgElement.style);
                var e =
                  'translate(' +
                  -this.finalTransform.mProp.p.v[0] +
                  'px,' +
                  -this.finalTransform.mProp.p.v[1] +
                  'px)';
                (t.transform = e), (t.webkitTransform = e);
              }
            }
            if (
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var r,
                n,
                i,
                a,
                s,
                o = 0,
                l = this.textAnimator.renderedLetters,
                h = this.textProperty.currentData.l;
              for (n = h.length, r = 0; r < n; r += 1)
                h[r].n
                  ? (o += 1)
                  : ((a = this.textSpans[r]),
                    (s = this.textPaths[r]),
                    (i = l[o]),
                    (o += 1),
                    i._mdf.m &&
                      (this.isMasked
                        ? a.setAttribute('transform', i.m)
                        : ((a.style.webkitTransform = i.m), (a.style.transform = i.m))),
                    (a.style.opacity = i.o),
                    i.sw && i._mdf.sw && s.setAttribute('stroke-width', i.sw),
                    i.sc && i._mdf.sc && s.setAttribute('stroke', i.sc),
                    i.fc && i._mdf.fc && (s.setAttribute('fill', i.fc), (s.style.color = i.fc)));
              if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                var c = this.innerElem.getBBox();
                this.currentBBox.w !== c.width &&
                  ((this.currentBBox.w = c.width), this.svgElement.setAttribute('width', c.width)),
                  this.currentBBox.h !== c.height &&
                    ((this.currentBBox.h = c.height),
                    this.svgElement.setAttribute('height', c.height));
                if (
                  this.currentBBox.w !== c.width + 2 ||
                  this.currentBBox.h !== c.height + 2 ||
                  this.currentBBox.x !== c.x - 1 ||
                  this.currentBBox.y !== c.y - 1
                ) {
                  (this.currentBBox.w = c.width + 2),
                    (this.currentBBox.h = c.height + 2),
                    (this.currentBBox.x = c.x - 1),
                    (this.currentBBox.y = c.y - 1),
                    this.svgElement.setAttribute(
                      'viewBox',
                      this.currentBBox.x +
                        ' ' +
                        this.currentBBox.y +
                        ' ' +
                        this.currentBBox.w +
                        ' ' +
                        this.currentBBox.h
                    ),
                    (t = this.svgElement.style);
                  var u = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                  (t.transform = u), (t.webkitTransform = u);
                }
              }
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HSolidElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HImageElement
          ),
          (HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData),
              e = new Image();
            this.data.hasMask
              ? ((this.imageElem = createNS('image')),
                this.imageElem.setAttribute('width', this.assetData.w + 'px'),
                this.imageElem.setAttribute('height', this.assetData.h + 'px'),
                this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', t),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute('width', this.assetData.w),
                this.baseElement.setAttribute('height', this.assetData.h))
              : this.layerElement.appendChild(e),
              (e.crossOrigin = 'anonymous'),
              (e.src = t),
              this.data.ln && this.baseElement.setAttribute('id', this.data.ln);
          }),
          extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
          (HCameraElement.prototype.setup = function () {
            var t,
              e,
              r,
              n,
              i = this.comp.threeDElements.length;
            for (t = 0; t < i; t += 1)
              if ('3d' === (e = this.comp.threeDElements[t]).type) {
                (r = e.perspectiveElem.style), (n = e.container.style);
                var a = this.pe.v + 'px',
                  s = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                (r.perspective = a),
                  (r.webkitPerspective = a),
                  (n.transformOrigin = '0px 0px 0px'),
                  (n.mozTransformOrigin = '0px 0px 0px'),
                  (n.webkitTransformOrigin = '0px 0px 0px'),
                  (r.transform = s),
                  (r.webkitTransform = s);
              }
          }),
          (HCameraElement.prototype.createElements = function () {}),
          (HCameraElement.prototype.hide = function () {}),
          (HCameraElement.prototype.renderFrame = function () {
            var t,
              e,
              r = this._isFirstFrame;
            if (this.hierarchy)
              for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (
              r ||
              this.pe._mdf ||
              (this.p && this.p._mdf) ||
              (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
              this.rx._mdf ||
              this.ry._mdf ||
              this.rz._mdf ||
              this.or._mdf ||
              (this.a && this.a._mdf)
            ) {
              if ((this.mat.reset(), this.hierarchy))
                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                  var n = this.hierarchy[t].finalTransform.mProp;
                  this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]),
                    this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]),
                    this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v),
                    this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]),
                    this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2]);
                }
              if (
                (this.p
                  ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                  : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a)
              ) {
                var i;
                i = this.p
                  ? [
                      this.p.v[0] - this.a.v[0],
                      this.p.v[1] - this.a.v[1],
                      this.p.v[2] - this.a.v[2],
                    ]
                  : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                  s = [i[0] / a, i[1] / a, i[2] / a],
                  o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                  l = Math.atan2(s[1], o),
                  h = Math.atan2(s[0], -s[2]);
                this.mat.rotateY(h).rotateX(-l);
              }
              this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                this.mat.translate(
                  this.globalData.compSize.w / 2,
                  this.globalData.compSize.h / 2,
                  0
                ),
                this.mat.translate(0, 0, this.pe.v);
              var c = !this._prevMat.equals(this.mat);
              if ((c || this.pe._mdf) && this.comp.threeDElements) {
                var u, f, p;
                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                  if ('3d' === (u = this.comp.threeDElements[t]).type) {
                    if (c) {
                      var d = this.mat.toCSS();
                      ((p = u.container.style).transform = d), (p.webkitTransform = d);
                    }
                    this.pe._mdf &&
                      (((f = u.perspectiveElem.style).perspective = this.pe.v + 'px'),
                      (f.webkitPerspective = this.pe.v + 'px'));
                  }
                this.mat.clone(this._prevMat);
              }
            }
            this._isFirstFrame = !1;
          }),
          (HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (HCameraElement.prototype.destroy = function () {}),
          (HCameraElement.prototype.getBaseElement = function () {
            return null;
          }),
          (HEffects.prototype.renderFrame = function () {});
        var animationManager = (function () {
            var t = {},
              e = [],
              r = 0,
              n = 0,
              i = 0,
              a = !0,
              s = !1;
            function o(t) {
              for (var r = 0, i = t.target; r < n; )
                e[r].animation === i && (e.splice(r, 1), (r -= 1), (n -= 1), i.isPaused || c()),
                  (r += 1);
            }
            function l(t, r) {
              if (!t) return null;
              for (var i = 0; i < n; ) {
                if (e[i].elem === t && null !== e[i].elem) return e[i].animation;
                i += 1;
              }
              var a = new AnimationItem();
              return u(a, t), a.setData(t, r), a;
            }
            function h() {
              (i += 1), d();
            }
            function c() {
              i -= 1;
            }
            function u(t, r) {
              t.addEventListener('destroy', o),
                t.addEventListener('_active', h),
                t.addEventListener('_idle', c),
                e.push({ elem: r, animation: t }),
                (n += 1);
            }
            function f(t) {
              var o,
                l = t - r;
              for (o = 0; o < n; o += 1) e[o].animation.advanceTime(l);
              (r = t), i && !s ? window.requestAnimationFrame(f) : (a = !0);
            }
            function p(t) {
              (r = t), window.requestAnimationFrame(f);
            }
            function d() {
              !s && i && a && (window.requestAnimationFrame(p), (a = !1));
            }
            return (
              (t.registerAnimation = l),
              (t.loadAnimation = function (t) {
                var e = new AnimationItem();
                return u(e, null), e.setParams(t), e;
              }),
              (t.setSpeed = function (t, r) {
                var i;
                for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r);
              }),
              (t.setDirection = function (t, r) {
                var i;
                for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r);
              }),
              (t.play = function (t) {
                var r;
                for (r = 0; r < n; r += 1) e[r].animation.play(t);
              }),
              (t.pause = function (t) {
                var r;
                for (r = 0; r < n; r += 1) e[r].animation.pause(t);
              }),
              (t.stop = function (t) {
                var r;
                for (r = 0; r < n; r += 1) e[r].animation.stop(t);
              }),
              (t.togglePause = function (t) {
                var r;
                for (r = 0; r < n; r += 1) e[r].animation.togglePause(t);
              }),
              (t.searchAnimations = function (t, e, r) {
                var n,
                  i = [].concat(
                    [].slice.call(document.getElementsByClassName('lottie')),
                    [].slice.call(document.getElementsByClassName('bodymovin'))
                  ),
                  a = i.length;
                for (n = 0; n < a; n += 1) r && i[n].setAttribute('data-bm-type', r), l(i[n], t);
                if (e && 0 === a) {
                  r || (r = 'svg');
                  var s = document.getElementsByTagName('body')[0];
                  s.innerText = '';
                  var o = createTag('div');
                  (o.style.width = '100%'),
                    (o.style.height = '100%'),
                    o.setAttribute('data-bm-type', r),
                    s.appendChild(o),
                    l(o, t);
                }
              }),
              (t.resize = function () {
                var t;
                for (t = 0; t < n; t += 1) e[t].animation.resize();
              }),
              (t.goToAndStop = function (t, r, i) {
                var a;
                for (a = 0; a < n; a += 1) e[a].animation.goToAndStop(t, r, i);
              }),
              (t.destroy = function (t) {
                var r;
                for (r = n - 1; r >= 0; r -= 1) e[r].animation.destroy(t);
              }),
              (t.freeze = function () {
                s = !0;
              }),
              (t.unfreeze = function () {
                (s = !1), d();
              }),
              (t.setVolume = function (t, r) {
                var i;
                for (i = 0; i < n; i += 1) e[i].animation.setVolume(t, r);
              }),
              (t.mute = function (t) {
                var r;
                for (r = 0; r < n; r += 1) e[r].animation.mute(t);
              }),
              (t.unmute = function (t) {
                var r;
                for (r = 0; r < n; r += 1) e[r].animation.unmute(t);
              }),
              (t.getRegisteredAnimations = function () {
                var t,
                  r = e.length,
                  n = [];
                for (t = 0; t < r; t += 1) n.push(e[t].animation);
                return n;
              }),
              t
            );
          })(),
          AnimationItem = function () {
            (this._cbs = []),
              (this.name = ''),
              (this.path = ''),
              (this.isLoaded = !1),
              (this.currentFrame = 0),
              (this.currentRawFrame = 0),
              (this.firstFrame = 0),
              (this.totalFrames = 0),
              (this.frameRate = 0),
              (this.frameMult = 0),
              (this.playSpeed = 1),
              (this.playDirection = 1),
              (this.playCount = 0),
              (this.animationData = {}),
              (this.assets = []),
              (this.isPaused = !0),
              (this.autoplay = !1),
              (this.loop = !0),
              (this.renderer = null),
              (this.animationID = createElementID()),
              (this.assetsPath = ''),
              (this.timeCompleted = 0),
              (this.segmentPos = 0),
              (this.isSubframeEnabled = subframeEnabled),
              (this.segments = []),
              (this._idle = !0),
              (this._completedLoop = !1),
              (this.projectInterface = ProjectInterface()),
              (this.imagePreloader = new ImagePreloader()),
              (this.audioController = audioControllerFactory()),
              (this.markers = []);
          };
        extendPrototype([BaseEvent], AnimationItem),
          (AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = 'svg';
            switch ((t.animType ? (e = t.animType) : t.renderer && (e = t.renderer), e)) {
              case 'canvas':
                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                break;
              case 'svg':
                this.renderer = new SVGRenderer(this, t.rendererSettings);
                break;
              default:
                this.renderer = new HybridRenderer(this, t.rendererSettings);
            }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
              this.renderer.setProjectInterface(this.projectInterface),
              (this.animType = e),
              '' === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop
                ? (this.loop = !0)
                : !1 === t.loop
                ? (this.loop = !1)
                : (this.loop = parseInt(t.loop, 10)),
              (this.autoplay = !('autoplay' in t) || t.autoplay),
              (this.name = t.name ? t.name : ''),
              (this.autoloadSegments =
                !Object.prototype.hasOwnProperty.call(t, 'autoloadSegments') || t.autoloadSegments),
              (this.assetsPath = t.assetsPath),
              (this.initialSegment = t.initialSegment),
              t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
              t.animationData
                ? this.configAnimation(t.animationData)
                : t.path &&
                  (-1 !== t.path.lastIndexOf('\\')
                    ? (this.path = t.path.substr(0, t.path.lastIndexOf('\\') + 1))
                    : (this.path = t.path.substr(0, t.path.lastIndexOf('/') + 1)),
                  (this.fileName = t.path.substr(t.path.lastIndexOf('/') + 1)),
                  (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'))),
                  assetLoader.load(
                    t.path,
                    this.configAnimation.bind(this),
                    function () {
                      this.trigger('data_failed');
                    }.bind(this)
                  ));
          }),
          (AnimationItem.prototype.setData = function (t, e) {
            e && 'object' != typeof e && (e = JSON.parse(e));
            var r = { wrapper: t, animationData: e },
              n = t.attributes;
            (r.path = n.getNamedItem('data-animation-path')
              ? n.getNamedItem('data-animation-path').value
              : n.getNamedItem('data-bm-path')
              ? n.getNamedItem('data-bm-path').value
              : n.getNamedItem('bm-path')
              ? n.getNamedItem('bm-path').value
              : ''),
              (r.animType = n.getNamedItem('data-anim-type')
                ? n.getNamedItem('data-anim-type').value
                : n.getNamedItem('data-bm-type')
                ? n.getNamedItem('data-bm-type').value
                : n.getNamedItem('bm-type')
                ? n.getNamedItem('bm-type').value
                : n.getNamedItem('data-bm-renderer')
                ? n.getNamedItem('data-bm-renderer').value
                : n.getNamedItem('bm-renderer')
                ? n.getNamedItem('bm-renderer').value
                : 'canvas');
            var i = n.getNamedItem('data-anim-loop')
              ? n.getNamedItem('data-anim-loop').value
              : n.getNamedItem('data-bm-loop')
              ? n.getNamedItem('data-bm-loop').value
              : n.getNamedItem('bm-loop')
              ? n.getNamedItem('bm-loop').value
              : '';
            'false' === i
              ? (r.loop = !1)
              : 'true' === i
              ? (r.loop = !0)
              : '' !== i && (r.loop = parseInt(i, 10));
            var a = n.getNamedItem('data-anim-autoplay')
              ? n.getNamedItem('data-anim-autoplay').value
              : n.getNamedItem('data-bm-autoplay')
              ? n.getNamedItem('data-bm-autoplay').value
              : !n.getNamedItem('bm-autoplay') || n.getNamedItem('bm-autoplay').value;
            (r.autoplay = 'false' !== a),
              (r.name = n.getNamedItem('data-name')
                ? n.getNamedItem('data-name').value
                : n.getNamedItem('data-bm-name')
                ? n.getNamedItem('data-bm-name').value
                : n.getNamedItem('bm-name')
                ? n.getNamedItem('bm-name').value
                : ''),
              'false' ===
                (n.getNamedItem('data-anim-prerender')
                  ? n.getNamedItem('data-anim-prerender').value
                  : n.getNamedItem('data-bm-prerender')
                  ? n.getNamedItem('data-bm-prerender').value
                  : n.getNamedItem('bm-prerender')
                  ? n.getNamedItem('bm-prerender').value
                  : '') && (r.prerender = !1),
              this.setParams(r);
          }),
          (AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op &&
              ((this.animationData.op = t.op),
              (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
            var e,
              r,
              n = this.animationData.layers,
              i = n.length,
              a = t.layers,
              s = a.length;
            for (r = 0; r < s; r += 1)
              for (e = 0; e < i; ) {
                if (n[e].id === a[r].id) {
                  n[e] = a[r];
                  break;
                }
                e += 1;
              }
            if (
              ((t.chars || t.fonts) &&
                (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(
                  t.fonts,
                  this.renderer.globalData.defs
                )),
              t.assets)
            )
              for (i = t.assets.length, e = 0; e < i; e += 1)
                this.animationData.assets.push(t.assets[e]);
            (this.animationData.__complete = !1),
              dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
              this.renderer.includeLayers(t.layers),
              expressionsPlugin && expressionsPlugin.initExpressions(this),
              this.loadNextSegment();
          }),
          (AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments)
              return this.trigger('data_ready'), void (this.timeCompleted = this.totalFrames);
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + '_' + this.segmentPos + '.json';
            (this.segmentPos += 1),
              assetLoader.load(
                r,
                this.includeLayers.bind(this),
                function () {
                  this.trigger('data_failed');
                }.bind(this)
              );
          }),
          (AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments || (this.timeCompleted = this.totalFrames),
              this.loadNextSegment();
          }),
          (AnimationItem.prototype.imagesLoaded = function () {
            this.trigger('loaded_images'), this.checkLoaded();
          }),
          (AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath),
              this.imagePreloader.setPath(this.path),
              this.imagePreloader.loadAssets(
                this.animationData.assets,
                this.imagesLoaded.bind(this)
              );
          }),
          (AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer)
              try {
                (this.animationData = t),
                  this.initialSegment
                    ? ((this.totalFrames = Math.floor(
                        this.initialSegment[1] - this.initialSegment[0]
                      )),
                      (this.firstFrame = Math.round(this.initialSegment[0])))
                    : ((this.totalFrames = Math.floor(
                        this.animationData.op - this.animationData.ip
                      )),
                      (this.firstFrame = Math.round(this.animationData.ip))),
                  this.renderer.configAnimation(t),
                  t.assets || (t.assets = []),
                  (this.assets = this.animationData.assets),
                  (this.frameRate = this.animationData.fr),
                  (this.frameMult = this.animationData.fr / 1e3),
                  this.renderer.searchExtraCompositions(t.assets),
                  (this.markers = markerParser(t.markers || [])),
                  this.trigger('config_ready'),
                  this.preloadImages(),
                  this.loadSegments(),
                  this.updaFrameModifier(),
                  this.waitForFontsLoaded(),
                  this.isPaused && this.audioController.pause();
              } catch (t) {
                this.triggerConfigError(t);
              }
          }),
          (AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer &&
              (this.renderer.globalData.fontManager.isLoaded
                ? this.checkLoaded()
                : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          }),
          (AnimationItem.prototype.checkLoaded = function () {
            !this.isLoaded &&
              this.renderer.globalData.fontManager.isLoaded &&
              (this.imagePreloader.loadedImages() || 'canvas' !== this.renderer.rendererType) &&
              this.imagePreloader.loadedFootages() &&
              ((this.isLoaded = !0),
              dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
              expressionsPlugin && expressionsPlugin.initExpressions(this),
              this.renderer.initItems(),
              setTimeout(
                function () {
                  this.trigger('DOMLoaded');
                }.bind(this),
                0
              ),
              this.gotoFrame(),
              this.autoplay && this.play());
          }),
          (AnimationItem.prototype.resize = function () {
            this.renderer.updateContainerSize();
          }),
          (AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t;
          }),
          (AnimationItem.prototype.gotoFrame = function () {
            (this.currentFrame = this.isSubframeEnabled
              ? this.currentRawFrame
              : ~~this.currentRawFrame),
              this.timeCompleted !== this.totalFrames &&
                this.currentFrame > this.timeCompleted &&
                (this.currentFrame = this.timeCompleted),
              this.trigger('enterFrame'),
              this.renderFrame();
          }),
          (AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer)
              try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
              } catch (t) {
                this.triggerRenderFrameError(t);
              }
          }),
          (AnimationItem.prototype.play = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused &&
                ((this.isPaused = !1),
                this.audioController.resume(),
                this._idle && ((this._idle = !1), this.trigger('_active'))));
          }),
          (AnimationItem.prototype.pause = function (t) {
            (t && this.name !== t) ||
              (!1 === this.isPaused &&
                ((this.isPaused = !0),
                (this._idle = !0),
                this.trigger('_idle'),
                this.audioController.pause()));
          }),
          (AnimationItem.prototype.togglePause = function (t) {
            (t && this.name !== t) || (!0 === this.isPaused ? this.play() : this.pause());
          }),
          (AnimationItem.prototype.stop = function (t) {
            (t && this.name !== t) ||
              (this.pause(),
              (this.playCount = 0),
              (this._completedLoop = !1),
              this.setCurrentRawFrameValue(0));
          }),
          (AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
              if ((e = this.markers[r]).payload && e.payload.name === t) return e;
            return null;
          }),
          (AnimationItem.prototype.goToAndStop = function (t, e, r) {
            if (!r || this.name === r) {
              var n = Number(t);
              if (isNaN(n)) {
                var i = this.getMarkerData(t);
                i && this.goToAndStop(i.time, !0);
              } else
                e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier);
              this.pause();
            }
          }),
          (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
            if (!r || this.name === r) {
              var n = Number(t);
              if (isNaN(n)) {
                var i = this.getMarkerData(t);
                i &&
                  (i.duration
                    ? this.playSegments([i.time, i.time + i.duration], !0)
                    : this.goToAndStop(i.time, !0));
              } else this.goToAndStop(n, e, r);
              this.play();
            }
          }),
          (AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
              var e = this.currentRawFrame + t * this.frameModifier,
                r = !1;
              e >= this.totalFrames - 1 && this.frameModifier > 0
                ? this.loop && this.playCount !== this.loop
                  ? e >= this.totalFrames
                    ? ((this.playCount += 1),
                      this.checkSegments(e % this.totalFrames) ||
                        (this.setCurrentRawFrameValue(e % this.totalFrames),
                        (this._completedLoop = !0),
                        this.trigger('loopComplete')))
                    : this.setCurrentRawFrameValue(e)
                  : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) ||
                    ((r = !0), (e = this.totalFrames - 1))
                : e < 0
                ? this.checkSegments(e % this.totalFrames) ||
                  (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                    ? ((r = !0), (e = 0))
                    : (this.setCurrentRawFrameValue(this.totalFrames + (e % this.totalFrames)),
                      this._completedLoop
                        ? this.trigger('loopComplete')
                        : (this._completedLoop = !0)))
                : this.setCurrentRawFrameValue(e),
                r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger('complete'));
            }
          }),
          (AnimationItem.prototype.adjustSegment = function (t, e) {
            (this.playCount = 0),
              t[1] < t[0]
                ? (this.frameModifier > 0 &&
                    (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                  (this.totalFrames = t[0] - t[1]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[1]),
                  this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                : t[1] > t[0] &&
                  (this.frameModifier < 0 &&
                    (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                  (this.totalFrames = t[1] - t[0]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[0]),
                  this.setCurrentRawFrameValue(0.001 + e)),
              this.trigger('segmentStart');
          }),
          (AnimationItem.prototype.setSegment = function (t, e) {
            var r = -1;
            this.isPaused &&
              (this.currentRawFrame + this.firstFrame < t
                ? (r = t)
                : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
              (this.firstFrame = t),
              (this.totalFrames = e - t),
              (this.timeCompleted = this.totalFrames),
              -1 !== r && this.goToAndStop(r, !0);
          }),
          (AnimationItem.prototype.playSegments = function (t, e) {
            if ((e && (this.segments.length = 0), 'object' == typeof t[0])) {
              var r,
                n = t.length;
              for (r = 0; r < n; r += 1) this.segments.push(t[r]);
            } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
              this.isPaused && this.play();
          }),
          (AnimationItem.prototype.resetSegments = function (t) {
            (this.segments.length = 0),
              this.segments.push([this.animationData.ip, this.animationData.op]),
              t && this.checkSegments(0);
          }),
          (AnimationItem.prototype.checkSegments = function (t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
          }),
          (AnimationItem.prototype.destroy = function (t) {
            (t && this.name !== t) ||
              !this.renderer ||
              (this.renderer.destroy(),
              this.imagePreloader.destroy(),
              this.trigger('destroy'),
              (this._cbs = null),
              (this.onEnterFrame = null),
              (this.onLoopComplete = null),
              (this.onComplete = null),
              (this.onSegmentStart = null),
              (this.onDestroy = null),
              (this.renderer = null),
              (this.renderer = null),
              (this.imagePreloader = null),
              (this.projectInterface = null));
          }),
          (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            (this.currentRawFrame = t), this.gotoFrame();
          }),
          (AnimationItem.prototype.setSpeed = function (t) {
            (this.playSpeed = t), this.updaFrameModifier();
          }),
          (AnimationItem.prototype.setDirection = function (t) {
            (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
          }),
          (AnimationItem.prototype.setVolume = function (t, e) {
            (e && this.name !== e) || this.audioController.setVolume(t);
          }),
          (AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume();
          }),
          (AnimationItem.prototype.mute = function (t) {
            (t && this.name !== t) || this.audioController.mute();
          }),
          (AnimationItem.prototype.unmute = function (t) {
            (t && this.name !== t) || this.audioController.unmute();
          }),
          (AnimationItem.prototype.updaFrameModifier = function () {
            (this.frameModifier = this.frameMult * this.playSpeed * this.playDirection),
              this.audioController.setRate(this.playSpeed * this.playDirection);
          }),
          (AnimationItem.prototype.getPath = function () {
            return this.path;
          }),
          (AnimationItem.prototype.getAssetsPath = function (t) {
            var e = '';
            if (t.e) e = t.p;
            else if (this.assetsPath) {
              var r = t.p;
              -1 !== r.indexOf('images/') && (r = r.split('/')[1]), (e = this.assetsPath + r);
            } else (e = this.path), (e += t.u ? t.u : ''), (e += t.p);
            return e;
          }),
          (AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, r = this.assets.length; e < r; ) {
              if (t === this.assets[e].id) return this.assets[e];
              e += 1;
            }
            return null;
          }),
          (AnimationItem.prototype.hide = function () {
            this.renderer.hide();
          }),
          (AnimationItem.prototype.show = function () {
            this.renderer.show();
          }),
          (AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
          }),
          (AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t])
              switch (t) {
                case 'enterFrame':
                  this.triggerEvent(
                    t,
                    new BMEnterFrameEvent(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameModifier
                    )
                  );
                  break;
                case 'loopComplete':
                  this.triggerEvent(
                    t,
                    new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)
                  );
                  break;
                case 'complete':
                  this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                  break;
                case 'segmentStart':
                  this.triggerEvent(
                    t,
                    new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                  );
                  break;
                case 'destroy':
                  this.triggerEvent(t, new BMDestroyEvent(t, this));
                  break;
                default:
                  this.triggerEvent(t);
              }
            'enterFrame' === t &&
              this.onEnterFrame &&
              this.onEnterFrame.call(
                this,
                new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)
              ),
              'loopComplete' === t &&
                this.onLoopComplete &&
                this.onLoopComplete.call(
                  this,
                  new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)
                ),
              'complete' === t &&
                this.onComplete &&
                this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)),
              'segmentStart' === t &&
                this.onSegmentStart &&
                this.onSegmentStart.call(
                  this,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
                ),
              'destroy' === t &&
                this.onDestroy &&
                this.onDestroy.call(this, new BMDestroyEvent(t, this));
          }),
          (AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent('error', e), this.onError && this.onError.call(this, e);
          }),
          (AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent('error', e), this.onError && this.onError.call(this, e);
          });
        var Expressions = (function () {
          var t = {};
          return (
            (t.initExpressions = function (t) {
              var e = 0,
                r = [];
              (t.renderer.compInterface = CompExpressionInterface(t.renderer)),
                t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                (t.renderer.globalData.pushExpression = function () {
                  e += 1;
                }),
                (t.renderer.globalData.popExpression = function () {
                  0 == (e -= 1) &&
                    (function () {
                      var t,
                        e = r.length;
                      for (t = 0; t < e; t += 1) r[t].release();
                      r.length = 0;
                    })();
                }),
                (t.renderer.globalData.registerExpressionProperty = function (t) {
                  -1 === r.indexOf(t) && r.push(t);
                });
            }),
            t
          );
        })();
        expressionsPlugin = Expressions;
        var ExpressionManager = (function () {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null;
            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array;
            }
            function isNumerable(t, e) {
              return 'number' === t || 'boolean' === t || 'string' === t || e instanceof Number;
            }
            function $bm_neg(t) {
              var e = typeof t;
              if ('number' === e || 'boolean' === e || t instanceof Number) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r,
                  n = t.length,
                  i = [];
                for (r = 0; r < n; r += 1) i[r] = -t[r];
                return i;
              }
              return t.propType ? t.v : -t;
            }
            var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
              easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get,
              easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;
            function sum(t, e) {
              var r = typeof t,
                n = typeof e;
              if ('string' === r || 'string' === n) return t + e;
              if (isNumerable(r, t) && isNumerable(n, e)) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e))
                return ((t = t.slice(0))[0] += e), t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return ((e = e.slice(0))[0] = t + e[0]), e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s; )
                  ('number' == typeof t[i] || t[i] instanceof Number) &&
                  ('number' == typeof e[i] || e[i] instanceof Number)
                    ? (o[i] = t[i] + e[i])
                    : (o[i] = void 0 === e[i] ? t[i] : t[i] || e[i]),
                    (i += 1);
                return o;
              }
              return 0;
            }
            var add = sum;
            function sub(t, e) {
              var r = typeof t,
                n = typeof e;
              if (isNumerable(r, t) && isNumerable(n, e))
                return (
                  'string' === r && (t = parseInt(t, 10)),
                  'string' === n && (e = parseInt(e, 10)),
                  t - e
                );
              if ($bm_isInstanceOfArray(t) && isNumerable(n, e))
                return ((t = t.slice(0))[0] -= e), t;
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return ((e = e.slice(0))[0] = t - e[0]), e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s; )
                  ('number' == typeof t[i] || t[i] instanceof Number) &&
                  ('number' == typeof e[i] || e[i] instanceof Number)
                    ? (o[i] = t[i] - e[i])
                    : (o[i] = void 0 === e[i] ? t[i] : t[i] || e[i]),
                    (i += 1);
                return o;
              }
              return 0;
            }
            function mul(t, e) {
              var r,
                n,
                i,
                a = typeof t,
                s = typeof e;
              if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (i = t.length, r = createTypedArray('float32', i), n = 0; n < i; n += 1)
                  r[n] = t[n] * e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, r = createTypedArray('float32', i), n = 0; n < i; n += 1)
                  r[n] = t * e[n];
                return r;
              }
              return 0;
            }
            function div(t, e) {
              var r,
                n,
                i,
                a = typeof t,
                s = typeof e;
              if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (i = t.length, r = createTypedArray('float32', i), n = 0; n < i; n += 1)
                  r[n] = t[n] / e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, r = createTypedArray('float32', i), n = 0; n < i; n += 1)
                  r[n] = t / e[n];
                return r;
              }
              return 0;
            }
            function mod(t, e) {
              return (
                'string' == typeof t && (t = parseInt(t, 10)),
                'string' == typeof e && (e = parseInt(e, 10)),
                t % e
              );
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;
            function clamp(t, e, r) {
              if (e > r) {
                var n = r;
                (r = e), (e = n);
              }
              return Math.min(Math.max(t, e), r);
            }
            function radiansToDegrees(t) {
              return t / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
              return t * degToRads;
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
              if ('number' == typeof t || t instanceof Number) return (e = e || 0), Math.abs(t - e);
              var r;
              e || (e = helperLengthArray);
              var n = Math.min(t.length, e.length),
                i = 0;
              for (r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(i);
            }
            function normalize(t) {
              return div(t, length(t));
            }
            function rgbToHsl(t) {
              var e,
                r,
                n = t[0],
                i = t[1],
                a = t[2],
                s = Math.max(n, i, a),
                o = Math.min(n, i, a),
                l = (s + o) / 2;
              if (s === o) (e = 0), (r = 0);
              else {
                var h = s - o;
                switch (((r = l > 0.5 ? h / (2 - s - o) : h / (s + o)), s)) {
                  case n:
                    e = (i - a) / h + (i < a ? 6 : 0);
                    break;
                  case i:
                    e = (a - n) / h + 2;
                    break;
                  case a:
                    e = (n - i) / h + 4;
                }
                e /= 6;
              }
              return [e, r, l, t[3]];
            }
            function hue2rgb(t, e, r) {
              return (
                r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6
                  ? t + 6 * (e - t) * r
                  : r < 0.5
                  ? e
                  : r < 2 / 3
                  ? t + (e - t) * (2 / 3 - r) * 6
                  : t
              );
            }
            function hslToRgb(t) {
              var e,
                r,
                n,
                i = t[0],
                a = t[1],
                s = t[2];
              if (0 === a) (e = s), (n = s), (r = s);
              else {
                var o = s < 0.5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                (e = hue2rgb(l, o, i + 1 / 3)),
                  (r = hue2rgb(l, o, i)),
                  (n = hue2rgb(l, o, i - 1 / 3));
              }
              return [e, r, n, t[3]];
            }
            function linear(t, e, r, n, i) {
              if (((void 0 !== n && void 0 !== i) || ((n = e), (i = r), (e = 0), (r = 1)), r < e)) {
                var a = r;
                (r = e), (e = a);
              }
              if (t <= e) return n;
              if (t >= r) return i;
              var s,
                o = r === e ? 0 : (t - e) / (r - e);
              if (!n.length) return n + (i - n) * o;
              var l = n.length,
                h = createTypedArray('float32', l);
              for (s = 0; s < l; s += 1) h[s] = n[s] + (i[s] - n[s]) * o;
              return h;
            }
            function random(t, e) {
              if (
                (void 0 === e && (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
                e.length)
              ) {
                var r,
                  n = e.length;
                t || (t = createTypedArray('float32', n));
                var i = createTypedArray('float32', n),
                  a = BMMath.random();
                for (r = 0; r < n; r += 1) i[r] = t[r] + a * (e[r] - t[r]);
                return i;
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
            }
            function createPath(t, e, r, n) {
              var i,
                a = t.length,
                s = shapePool.newElement();
              s.setPathData(!!n, a);
              var o,
                l,
                h = [0, 0];
              for (i = 0; i < a; i += 1)
                (o = e && e[i] ? e[i] : h),
                  (l = r && r[i] ? r[i] : h),
                  s.setTripleAt(
                    t[i][0],
                    t[i][1],
                    l[0] + t[i][0],
                    l[1] + t[i][1],
                    o[0] + t[i][0],
                    o[1] + t[i][1],
                    i,
                    !0
                  );
              return s;
            }
            function initiateExpression(elem, data, property) {
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf('random'),
                elemType = elem.data.ty,
                transform,
                $bm_transform,
                content,
                effect,
                thisProperty = property;
              (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                Object.defineProperty(thisProperty, 'value', {
                  get: function () {
                    return thisProperty.v;
                  },
                }),
                (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                (elem.comp.displayStartTime = 0);
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn,
                loop_in,
                loopOut,
                loop_out,
                smooth,
                toWorld,
                fromWorld,
                fromComp,
                toComp,
                fromCompToSurface,
                position,
                rotation,
                anchorPoint,
                scale,
                thisLayer,
                thisComp,
                mask,
                valueAtTime,
                velocityAtTime,
                scoped_bm_rt,
                expression_function = eval(
                  '[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]'
                )[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function (t, e) {
                  var r,
                    n,
                    i = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray('float32', i);
                  var s = Math.floor(5 * time);
                  for (r = 0, n = 0; r < s; ) {
                    for (n = 0; n < i; n += 1) a[n] += -e + 2 * e * BMMath.random();
                    r += 1;
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray('float32', i);
                  if (i > 1) {
                    for (n = 0; n < i; n += 1)
                      h[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * l;
                    return h;
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l;
                }.bind(this);
              function loopInDuration(t, e) {
                return loopIn(t, e, !0);
              }
              function loopOutDuration(t, e) {
                return loopOut(t, e, !0);
              }
              thisProperty.loopIn &&
                ((loopIn = thisProperty.loopIn.bind(thisProperty)), (loop_in = loopIn)),
                thisProperty.loopOut &&
                  ((loopOut = thisProperty.loopOut.bind(thisProperty)), (loop_out = loopOut)),
                thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(
                  elem.comp.globalData.projectInterface
                ),
                time,
                velocity,
                value,
                text,
                textIndex,
                textTotal,
                selectorValue;
              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, n, 0];
              }
              function easeOut(t, e, r, n, i) {
                return applyEase(easeOutBez, t, e, r, n, i);
              }
              function easeIn(t, e, r, n, i) {
                return applyEase(easeInBez, t, e, r, n, i);
              }
              function ease(t, e, r, n, i) {
                return applyEase(easeInOutBez, t, e, r, n, i);
              }
              function applyEase(t, e, r, n, i, a) {
                void 0 === i ? ((i = r), (a = n)) : (e = (e - r) / (n - r)),
                  e > 1 ? (e = 1) : e < 0 && (e = 0);
                var s = t(e);
                if ($bm_isInstanceOfArray(i)) {
                  var o,
                    l = i.length,
                    h = createTypedArray('float32', l);
                  for (o = 0; o < l; o += 1) h[o] = (a[o] - i[o]) * s + i[o];
                  return h;
                }
                return (a - i) * s + i;
              }
              function nearestKey(t) {
                var e,
                  r,
                  n,
                  i = data.k.length;
                if (data.k.length && 'number' != typeof data.k[0])
                  if (((r = -1), (t *= elem.comp.globalData.frameRate) < data.k[0].t))
                    (r = 1), (n = data.k[0].t);
                  else {
                    for (e = 0; e < i - 1; e += 1) {
                      if (t === data.k[e].t) {
                        (r = e + 1), (n = data.k[e].t);
                        break;
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t
                          ? ((r = e + 2), (n = data.k[e + 1].t))
                          : ((r = e + 1), (n = data.k[e].t));
                        break;
                      }
                    }
                    -1 === r && ((r = e + 1), (n = data.k[e].t));
                  }
                else (r = 0), (n = 0);
                var a = {};
                return (a.index = r), (a.time = n / elem.comp.globalData.frameRate), a;
              }
              function key(t) {
                var e, r, n;
                if (!data.k.length || 'number' == typeof data.k[0])
                  throw new Error('The property has no keyframe at index ' + t);
                (t -= 1), (e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] });
                var i = Object.prototype.hasOwnProperty.call(data.k[t], 's')
                  ? data.k[t].s
                  : data.k[t - 1].e;
                for (n = i.length, r = 0; r < n; r += 1) (e[r] = i[r]), (e.value[r] = i[r]);
                return e;
              }
              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e;
              }
              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
              }
              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t);
              }
              function sourceRectAtTime() {
                return elem.sourceRectAtTime();
              }
              function substring(t, e) {
                return 'string' == typeof value
                  ? void 0 === e
                    ? value.substring(t)
                    : value.substring(t, e)
                  : '';
              }
              function substr(t, e) {
                return 'string' == typeof value
                  ? void 0 === e
                    ? value.substr(t)
                    : value.substr(t, e)
                  : '';
              }
              function posterizeTime(t) {
                (time = 0 === t ? 0 : Math.floor(time * t) / t), (value = valueAtTime(time));
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent,
                randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;
              function executeExpression(t) {
                return (
                  (value = t),
                  _needsRandom && seedRandom(randSeed),
                  this.frameExpressionId === elem.globalData.frameId &&
                  'textSelector' !== this.propType
                    ? value
                    : ('textSelector' === this.propType &&
                        ((textIndex = this.textIndex),
                        (textTotal = this.textTotal),
                        (selectorValue = this.selectorValue)),
                      thisLayer ||
                        ((text = elem.layerInterface.text),
                        (thisLayer = elem.layerInterface),
                        (thisComp = elem.comp.compInterface),
                        (toWorld = thisLayer.toWorld.bind(thisLayer)),
                        (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                        (fromComp = thisLayer.fromComp.bind(thisLayer)),
                        (toComp = thisLayer.toComp.bind(thisLayer)),
                        (mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null),
                        (fromCompToSurface = fromComp)),
                      transform ||
                        ((transform = elem.layerInterface('ADBE Transform Group')),
                        ($bm_transform = transform),
                        transform && (anchorPoint = transform.anchorPoint)),
                      4 !== elemType || content || (content = thisLayer('ADBE Root Vectors Group')),
                      effect || (effect = thisLayer(4)),
                      (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) &&
                        !parent &&
                        (parent = elem.hierarchy[0].layerInterface),
                      (time = this.comp.renderedFrame / this.comp.globalData.frameRate),
                      needsVelocity && (velocity = velocityAtTime(time)),
                      expression_function(),
                      (this.frameExpressionId = elem.globalData.frameId),
                      'shape' === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v),
                      scoped_bm_rt)
                );
              }
              return executeExpression;
            }
            return (ob.initiateExpression = initiateExpression), ob;
          })(),
          expressionHelpers = (function () {
            return {
              searchExpressions: function (t, e, r) {
                e.x &&
                  ((r.k = !0),
                  (r.x = !0),
                  (r.initiateExpression = ExpressionManager.initiateExpression),
                  r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
              },
              getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t),
                  r = this.getValueAtTime(t + -0.01),
                  n = 0;
                if (e.length) {
                  var i;
                  for (i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
                  n = 100 * Math.sqrt(n);
                } else n = 0;
                return n;
              },
              getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  r,
                  n = this.getValueAtTime(t),
                  i = this.getValueAtTime(t + -0.001);
                if (n.length)
                  for (e = createTypedArray('float32', n.length), r = 0; r < n.length; r += 1)
                    e[r] = (i[r] - n[r]) / -0.001;
                else e = (i - n) / -0.001;
                return e;
              },
              getValueAtTime: function (t) {
                return (
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0),
                    (this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime)),
                    (this._cachingAtTime.lastFrame = t)),
                  this._cachingAtTime.value
                );
              },
              getStaticValueAtTime: function () {
                return this.pv;
              },
              setGroupProperty: function (t) {
                this.propertyGroup = t;
              },
            };
          })();
        !(function () {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : '';
            var n,
              i,
              a,
              s,
              o,
              l = this.comp.renderedFrame,
              h = this.keyframes,
              c = h[h.length - 1].t;
            if (l <= c) return this.pv;
            if (
              (r
                ? (i =
                    c -
                    (n = e
                      ? Math.abs(c - this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, c - this.elem.data.ip)))
                : ((!e || e > h.length - 1) && (e = h.length - 1),
                  (n = c - (i = h[h.length - 1 - e].t))),
              'pingpong' === t)
            ) {
              if (Math.floor((l - i) / n) % 2 != 0)
                return this.getValueAtTime(
                  (n - ((l - i) % n) + i) / this.comp.globalData.frameRate,
                  0
                );
            } else {
              if ('offset' === t) {
                var u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime((((l - i) % n) + i) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - i) / n);
                if (this.pv.length) {
                  for (s = (o = new Array(u.length)).length, a = 0; a < s; a += 1)
                    o[a] = (f[a] - u[a]) * d + p[a];
                  return o;
                }
                return (f - u) * d + p;
              }
              if ('continue' === t) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((c - 0.001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1)
                    o[a] =
                      m[a] + ((m[a] - v[a]) * ((l - c) / this.comp.globalData.frameRate)) / 5e-4;
                  return o;
                }
                return m + ((l - c) / 0.001) * (m - v);
              }
            }
            return this.getValueAtTime((((l - i) % n) + i) / this.comp.globalData.frameRate, 0);
          }
          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : '';
            var n,
              i,
              a,
              s,
              o,
              l = this.comp.renderedFrame,
              h = this.keyframes,
              c = h[0].t;
            if (l >= c) return this.pv;
            if (
              (r
                ? (i =
                    c +
                    (n = e
                      ? Math.abs(this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, this.elem.data.op - c)))
                : ((!e || e > h.length - 1) && (e = h.length - 1), (n = (i = h[e].t) - c)),
              'pingpong' === t)
            ) {
              if (Math.floor((c - l) / n) % 2 == 0)
                return this.getValueAtTime((((c - l) % n) + c) / this.comp.globalData.frameRate, 0);
            } else {
              if ('offset' === t) {
                var u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(
                    (n - ((c - l) % n) + c) / this.comp.globalData.frameRate,
                    0
                  ),
                  d = Math.floor((c - l) / n) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(u.length)).length, a = 0; a < s; a += 1)
                    o[a] = p[a] - (f[a] - u[a]) * d;
                  return o;
                }
                return p - (f - u) * d;
              }
              if ('continue' === t) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((c + 0.001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1)
                    o[a] = m[a] + ((m[a] - v[a]) * (c - l)) / 0.001;
                  return o;
                }
                return m + ((m - v) * (c - l)) / 0.001;
              }
            }
            return this.getValueAtTime(
              (n - (((c - l) % n) + c)) / this.comp.globalData.frameRate,
              0
            );
          }
          function r(t, e) {
            if (!this.k) return this.pv;
            if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1)) return this.pv;
            var r,
              n,
              i = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = i - t,
              s = e > 1 ? (i + t - a) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray('float32', this.pv.length) : 0; o < e; ) {
              if (((n = this.getValueAtTime(a + o * s)), this.pv.length))
                for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
              else r += n;
              o += 1;
            }
            if (this.pv.length) for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
            else r /= e;
            return r;
          }
          var n = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function (t, e, r) {
            var i = n(t, e, r);
            return (
              i.dynamicProperties.length
                ? (i.getValueAtTime = function (t) {
                    this._transformCachingAtTime ||
                      (this._transformCachingAtTime = { v: new Matrix() });
                    var e = this._transformCachingAtTime.v;
                    if ((e.cloneFromProps(this.pre.props), this.appliedTransformations < 1)) {
                      var r = this.a.getValueAtTime(t);
                      e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult);
                    }
                    if (this.appliedTransformations < 2) {
                      var n = this.s.getValueAtTime(t);
                      e.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult);
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                      var i = this.sk.getValueAtTime(t),
                        a = this.sa.getValueAtTime(t);
                      e.skewFromAxis(-i * this.sk.mult, a * this.sa.mult);
                    }
                    if (this.r && this.appliedTransformations < 4) {
                      var s = this.r.getValueAtTime(t);
                      e.rotate(-s * this.r.mult);
                    } else if (!this.r && this.appliedTransformations < 4) {
                      var o = this.rz.getValueAtTime(t),
                        l = this.ry.getValueAtTime(t),
                        h = this.rx.getValueAtTime(t),
                        c = this.or.getValueAtTime(t);
                      e.rotateZ(-o * this.rz.mult)
                        .rotateY(l * this.ry.mult)
                        .rotateX(h * this.rx.mult)
                        .rotateZ(-c[2] * this.or.mult)
                        .rotateY(c[1] * this.or.mult)
                        .rotateX(c[0] * this.or.mult);
                    }
                    if (this.data.p && this.data.p.s) {
                      var u = this.px.getValueAtTime(t),
                        f = this.py.getValueAtTime(t);
                      if (this.data.p.z) {
                        var p = this.pz.getValueAtTime(t);
                        e.translate(u * this.px.mult, f * this.py.mult, -p * this.pz.mult);
                      } else e.translate(u * this.px.mult, f * this.py.mult, 0);
                    } else {
                      var d = this.p.getValueAtTime(t);
                      e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult);
                    }
                    return e;
                  }.bind(i))
                : (i.getValueAtTime = function () {
                    return this.v.clone(new Matrix());
                  }.bind(i)),
              (i.setGroupProperty = expressionHelpers.setGroupProperty),
              i
            );
          };
          var i = PropertyFactory.getProp;
          PropertyFactory.getProp = function (n, a, s, o, l) {
            var h = i(n, a, s, o, l);
            h.kf
              ? (h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h))
              : (h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h)),
              (h.setGroupProperty = expressionHelpers.setGroupProperty),
              (h.loopOut = t),
              (h.loopIn = e),
              (h.smooth = r),
              (h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h)),
              (h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h)),
              (h.numKeys = 1 === a.a ? a.k.length : 0),
              (h.propertyIndex = a.ix);
            var c = 0;
            return (
              0 !== s &&
                (c = createTypedArray('float32', 1 === a.a ? a.k[0].s.length : a.k.length)),
              (h._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: c }),
              expressionHelpers.searchExpressions(n, a, h),
              h.k && l.addDynamicProperty(h),
              h
            );
          };
          var a = ShapePropertyFactory.getConstructorFunction(),
            s = ShapePropertyFactory.getKeyframedConstructorFunction();
          function o() {}
          (o.prototype = {
            vertices: function (t, e) {
              this.k && this.getValue();
              var r,
                n = this.v;
              void 0 !== e && (n = this.getValueAtTime(e, 0));
              var i = n._length,
                a = n[t],
                s = n.v,
                o = createSizedArray(i);
              for (r = 0; r < i; r += 1)
                o[r] =
                  'i' === t || 'o' === t
                    ? [a[r][0] - s[r][0], a[r][1] - s[r][1]]
                    : [a[r][0], a[r][1]];
              return o;
            },
            points: function (t) {
              return this.vertices('v', t);
            },
            inTangents: function (t) {
              return this.vertices('i', t);
            },
            outTangents: function (t) {
              return this.vertices('o', t);
            },
            isClosed: function () {
              return this.v.c;
            },
            pointOnPath: function (t, e) {
              var r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0)),
                this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (
                var n,
                  i = this._segmentsLength,
                  a = i.lengths,
                  s = i.totalLength * t,
                  o = 0,
                  l = a.length,
                  h = 0;
                o < l;

              ) {
                if (h + a[o].addedLength > s) {
                  var c = o,
                    u = r.c && o === l - 1 ? 0 : o + 1,
                    f = (s - h) / a[o].addedLength;
                  n = bez.getPointInSegment(r.v[c], r.v[u], r.o[c], r.i[u], f, a[o]);
                  break;
                }
                (h += a[o].addedLength), (o += 1);
              }
              return (
                n ||
                  (n = r.c
                    ? [r.v[0][0], r.v[0][1]]
                    : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                n
              );
            },
            vectorOnPath: function (t, e, r) {
              1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
              var n = this.pointOnPath(t, e),
                i = this.pointOnPath(t + 0.001, e),
                a = i[0] - n[0],
                s = i[1] - n[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : 'tangent' === r ? [a / o, s / o] : [-s / o, a / o];
            },
            tangentOnPath: function (t, e) {
              return this.vectorOnPath(t, e, 'tangent');
            },
            normalOnPath: function (t, e) {
              return this.vectorOnPath(t, e, 'normal');
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime,
          }),
            extendPrototype([o], a),
            extendPrototype([o], s),
            (s.prototype.getValueAtTime = function (t) {
              return (
                this._cachingAtTime ||
                  (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame,
                  }),
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                  ((this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0),
                  (this._cachingAtTime.lastTime = t),
                  this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                this._cachingAtTime.shapeValue
              );
            }),
            (s.prototype.initiateExpression = ExpressionManager.initiateExpression);
          var l = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function (t, e, r, n, i) {
            var a = l(t, e, r, n, i);
            return (
              (a.propertyIndex = e.ix),
              (a.lock = !1),
              3 === r
                ? expressionHelpers.searchExpressions(t, e.pt, a)
                : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a),
              a.k && t.addDynamicProperty(a),
              a
            );
          };
        })(),
          (function () {
            (TextProperty.prototype.getExpressionValue = function (t, e) {
              var r = this.calculateExpression(e);
              if (t.t !== r) {
                var n = {};
                return this.copyData(n, t), (n.t = r.toString()), (n.__complete = !1), n;
              }
              return t;
            }),
              (TextProperty.prototype.searchProperty = function () {
                var t = this.searchKeyframes(),
                  e = this.searchExpressions();
                return (this.kf = t || e), this.kf;
              }),
              (TextProperty.prototype.searchExpressions = function () {
                return this.data.d.x
                  ? ((this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(
                      this.elem,
                      this.data.d,
                      this
                    )),
                    this.addEffect(this.getExpressionValue.bind(this)),
                    !0)
                  : null;
              });
          })();
        var ShapePathInterface = function (t, e, r) {
            var n = e.sh;
            function i(t) {
              return 'Shape' === t ||
                'shape' === t ||
                'Path' === t ||
                'path' === t ||
                'ADBE Vector Shape' === t ||
                2 === t
                ? i.path
                : null;
            }
            var a = propertyGroupFactory(i, r);
            return (
              n.setGroupProperty(PropertyInterface('Path', a)),
              Object.defineProperties(i, {
                path: {
                  get: function () {
                    return n.k && n.getValue(), n;
                  },
                },
                shape: {
                  get: function () {
                    return n.k && n.getValue(), n;
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: r },
              }),
              i
            );
          },
          propertyGroupFactory = function (t, e) {
            return function (r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
            };
          },
          PropertyInterface = function (t, e) {
            var r = { _name: t };
            return function (t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
            };
          },
          ShapeExpressionInterface = (function () {
            function t(t, o, p) {
              var d,
                m = [],
                v = t ? t.length : 0;
              for (d = 0; d < v; d += 1)
                'gr' === t[d].ty
                  ? m.push(e(t[d], o[d], p))
                  : 'fl' === t[d].ty
                  ? m.push(r(t[d], o[d], p))
                  : 'st' === t[d].ty
                  ? m.push(a(t[d], o[d], p))
                  : 'tm' === t[d].ty
                  ? m.push(s(t[d], o[d], p))
                  : 'tr' === t[d].ty ||
                    ('el' === t[d].ty
                      ? m.push(l(t[d], o[d], p))
                      : 'sr' === t[d].ty
                      ? m.push(h(t[d], o[d], p))
                      : 'sh' === t[d].ty
                      ? m.push(ShapePathInterface(t[d], o[d], p))
                      : 'rc' === t[d].ty
                      ? m.push(c(t[d], o[d], p))
                      : 'rd' === t[d].ty
                      ? m.push(u(t[d], o[d], p))
                      : 'rp' === t[d].ty
                      ? m.push(f(t[d], o[d], p))
                      : 'gf' === t[d].ty
                      ? m.push(n(t[d], o[d], p))
                      : m.push(i(t[d], o[d])));
              return m;
            }
            function e(e, r, n) {
              var i = function (t) {
                switch (t) {
                  case 'ADBE Vectors Group':
                  case 'Contents':
                  case 2:
                    return i.content;
                  default:
                    return i.transform;
                }
              };
              i.propertyGroup = propertyGroupFactory(i, n);
              var a = (function (e, r, n) {
                  var i,
                    a = function (t) {
                      for (var e = 0, r = i.length; e < r; ) {
                        if (
                          i[e]._name === t ||
                          i[e].mn === t ||
                          i[e].propertyIndex === t ||
                          i[e].ix === t ||
                          i[e].ind === t
                        )
                          return i[e];
                        e += 1;
                      }
                      return 'number' == typeof t ? i[t - 1] : null;
                    };
                  (a.propertyGroup = propertyGroupFactory(a, n)),
                    (i = t(e.it, r.it, a.propertyGroup)),
                    (a.numProperties = i.length);
                  var s = o(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return (a.transform = s), (a.propertyIndex = e.cix), (a._name = e.nm), a;
                })(e, r, i.propertyGroup),
                s = o(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup);
              return (
                (i.content = a),
                (i.transform = s),
                Object.defineProperty(i, '_name', {
                  get: function () {
                    return e.nm;
                  },
                }),
                (i.numProperties = e.np),
                (i.propertyIndex = e.ix),
                (i.nm = e.nm),
                (i.mn = e.mn),
                i
              );
            }
            function r(t, e, r) {
              function n(t) {
                return 'Color' === t || 'color' === t
                  ? n.color
                  : 'Opacity' === t || 'opacity' === t
                  ? n.opacity
                  : null;
              }
              return (
                Object.defineProperties(n, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface('Color', r)),
                e.o.setGroupProperty(PropertyInterface('Opacity', r)),
                n
              );
            }
            function n(t, e, r) {
              function n(t) {
                return 'Start Point' === t || 'start point' === t
                  ? n.startPoint
                  : 'End Point' === t || 'end point' === t
                  ? n.endPoint
                  : 'Opacity' === t || 'opacity' === t
                  ? n.opacity
                  : null;
              }
              return (
                Object.defineProperties(n, {
                  startPoint: { get: ExpressionPropertyInterface(e.s) },
                  endPoint: { get: ExpressionPropertyInterface(e.e) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  type: {
                    get: function () {
                      return 'a';
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.s.setGroupProperty(PropertyInterface('Start Point', r)),
                e.e.setGroupProperty(PropertyInterface('End Point', r)),
                e.o.setGroupProperty(PropertyInterface('Opacity', r)),
                n
              );
            }
            function i() {
              return function () {
                return null;
              };
            }
            function a(t, e, r) {
              var n,
                i = propertyGroupFactory(h, r),
                a = propertyGroupFactory(l, i);
              function s(r) {
                Object.defineProperty(l, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p),
                });
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (n = 0; n < o; n += 1) s(n), e.d.dataProps[n].p.setGroupProperty(a);
              function h(t) {
                return 'Color' === t || 'color' === t
                  ? h.color
                  : 'Opacity' === t || 'opacity' === t
                  ? h.opacity
                  : 'Stroke Width' === t || 'stroke width' === t
                  ? h.strokeWidth
                  : null;
              }
              return (
                Object.defineProperties(h, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                  dash: {
                    get: function () {
                      return l;
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface('Color', i)),
                e.o.setGroupProperty(PropertyInterface('Opacity', i)),
                e.w.setGroupProperty(PropertyInterface('Stroke Width', i)),
                h
              );
            }
            function s(t, e, r) {
              function n(e) {
                return e === t.e.ix || 'End' === e || 'end' === e
                  ? n.end
                  : e === t.s.ix
                  ? n.start
                  : e === t.o.ix
                  ? n.offset
                  : null;
              }
              var i = propertyGroupFactory(n, r);
              return (
                (n.propertyIndex = t.ix),
                e.s.setGroupProperty(PropertyInterface('Start', i)),
                e.e.setGroupProperty(PropertyInterface('End', i)),
                e.o.setGroupProperty(PropertyInterface('Offset', i)),
                (n.propertyIndex = t.ix),
                (n.propertyGroup = r),
                Object.defineProperties(n, {
                  start: { get: ExpressionPropertyInterface(e.s) },
                  end: { get: ExpressionPropertyInterface(e.e) },
                  offset: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                }),
                (n.mn = t.mn),
                n
              );
            }
            function o(t, e, r) {
              function n(e) {
                return t.a.ix === e || 'Anchor Point' === e
                  ? n.anchorPoint
                  : t.o.ix === e || 'Opacity' === e
                  ? n.opacity
                  : t.p.ix === e || 'Position' === e
                  ? n.position
                  : t.r.ix === e || 'Rotation' === e || 'ADBE Vector Rotation' === e
                  ? n.rotation
                  : t.s.ix === e || 'Scale' === e
                  ? n.scale
                  : (t.sk && t.sk.ix === e) || 'Skew' === e
                  ? n.skew
                  : (t.sa && t.sa.ix === e) || 'Skew Axis' === e
                  ? n.skewAxis
                  : null;
              }
              var i = propertyGroupFactory(n, r);
              return (
                e.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', i)),
                e.transform.mProps.p.setGroupProperty(PropertyInterface('Position', i)),
                e.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', i)),
                e.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', i)),
                e.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', i)),
                e.transform.mProps.sk &&
                  (e.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', i)),
                  e.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', i))),
                e.transform.op.setGroupProperty(PropertyInterface('Opacity', i)),
                Object.defineProperties(n, {
                  opacity: { get: ExpressionPropertyInterface(e.transform.mProps.o) },
                  position: { get: ExpressionPropertyInterface(e.transform.mProps.p) },
                  anchorPoint: { get: ExpressionPropertyInterface(e.transform.mProps.a) },
                  scale: { get: ExpressionPropertyInterface(e.transform.mProps.s) },
                  rotation: { get: ExpressionPropertyInterface(e.transform.mProps.r) },
                  skew: { get: ExpressionPropertyInterface(e.transform.mProps.sk) },
                  skewAxis: { get: ExpressionPropertyInterface(e.transform.mProps.sa) },
                  _name: { value: t.nm },
                }),
                (n.ty = 'tr'),
                (n.mn = t.mn),
                (n.propertyGroup = r),
                n
              );
            }
            function l(t, e, r) {
              function n(e) {
                return t.p.ix === e ? n.position : t.s.ix === e ? n.size : null;
              }
              var i = propertyGroupFactory(n, r);
              n.propertyIndex = t.ix;
              var a = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
              return (
                a.s.setGroupProperty(PropertyInterface('Size', i)),
                a.p.setGroupProperty(PropertyInterface('Position', i)),
                Object.defineProperties(n, {
                  size: { get: ExpressionPropertyInterface(a.s) },
                  position: { get: ExpressionPropertyInterface(a.p) },
                  _name: { value: t.nm },
                }),
                (n.mn = t.mn),
                n
              );
            }
            function h(t, e, r) {
              function n(e) {
                return t.p.ix === e
                  ? n.position
                  : t.r.ix === e
                  ? n.rotation
                  : t.pt.ix === e
                  ? n.points
                  : t.or.ix === e || 'ADBE Vector Star Outer Radius' === e
                  ? n.outerRadius
                  : t.os.ix === e
                  ? n.outerRoundness
                  : !t.ir || (t.ir.ix !== e && 'ADBE Vector Star Inner Radius' !== e)
                  ? t.is && t.is.ix === e
                    ? n.innerRoundness
                    : null
                  : n.innerRadius;
              }
              var i = propertyGroupFactory(n, r),
                a = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (n.propertyIndex = t.ix),
                a.or.setGroupProperty(PropertyInterface('Outer Radius', i)),
                a.os.setGroupProperty(PropertyInterface('Outer Roundness', i)),
                a.pt.setGroupProperty(PropertyInterface('Points', i)),
                a.p.setGroupProperty(PropertyInterface('Position', i)),
                a.r.setGroupProperty(PropertyInterface('Rotation', i)),
                t.ir &&
                  (a.ir.setGroupProperty(PropertyInterface('Inner Radius', i)),
                  a.is.setGroupProperty(PropertyInterface('Inner Roundness', i))),
                Object.defineProperties(n, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  rotation: { get: ExpressionPropertyInterface(a.r) },
                  points: { get: ExpressionPropertyInterface(a.pt) },
                  outerRadius: { get: ExpressionPropertyInterface(a.or) },
                  outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                  innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                  innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                  _name: { value: t.nm },
                }),
                (n.mn = t.mn),
                n
              );
            }
            function c(t, e, r) {
              function n(e) {
                return t.p.ix === e
                  ? n.position
                  : t.r.ix === e
                  ? n.roundness
                  : t.s.ix === e || 'Size' === e || 'ADBE Vector Rect Size' === e
                  ? n.size
                  : null;
              }
              var i = propertyGroupFactory(n, r),
                a = 'tm' === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (n.propertyIndex = t.ix),
                a.p.setGroupProperty(PropertyInterface('Position', i)),
                a.s.setGroupProperty(PropertyInterface('Size', i)),
                a.r.setGroupProperty(PropertyInterface('Rotation', i)),
                Object.defineProperties(n, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  roundness: { get: ExpressionPropertyInterface(a.r) },
                  size: { get: ExpressionPropertyInterface(a.s) },
                  _name: { value: t.nm },
                }),
                (n.mn = t.mn),
                n
              );
            }
            function u(t, e, r) {
              function n(e) {
                return t.r.ix === e || 'Round Corners 1' === e ? n.radius : null;
              }
              var i = propertyGroupFactory(n, r),
                a = e;
              return (
                (n.propertyIndex = t.ix),
                a.rd.setGroupProperty(PropertyInterface('Radius', i)),
                Object.defineProperties(n, {
                  radius: { get: ExpressionPropertyInterface(a.rd) },
                  _name: { value: t.nm },
                }),
                (n.mn = t.mn),
                n
              );
            }
            function f(t, e, r) {
              function n(e) {
                return t.c.ix === e || 'Copies' === e
                  ? n.copies
                  : t.o.ix === e || 'Offset' === e
                  ? n.offset
                  : null;
              }
              var i = propertyGroupFactory(n, r),
                a = e;
              return (
                (n.propertyIndex = t.ix),
                a.c.setGroupProperty(PropertyInterface('Copies', i)),
                a.o.setGroupProperty(PropertyInterface('Offset', i)),
                Object.defineProperties(n, {
                  copies: { get: ExpressionPropertyInterface(a.c) },
                  offset: { get: ExpressionPropertyInterface(a.o) },
                  _name: { value: t.nm },
                }),
                (n.mn = t.mn),
                n
              );
            }
            return function (e, r, n) {
              var i;
              function a(t) {
                if ('number' == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? n : i[t - 1];
                for (var e = 0, r = i.length; e < r; ) {
                  if (i[e]._name === t) return i[e];
                  e += 1;
                }
                return null;
              }
              return (
                (a.propertyGroup = propertyGroupFactory(a, function () {
                  return n;
                })),
                (i = t(e, r, a.propertyGroup)),
                (a.numProperties = i.length),
                (a._name = 'Contents'),
                a
              );
            };
          })(),
          TextExpressionInterface = function (t) {
            var e;
            function r(t) {
              switch (t) {
                case 'ADBE Text Document':
                  return r.sourceText;
                default:
                  return null;
              }
            }
            return (
              Object.defineProperty(r, 'sourceText', {
                get: function () {
                  t.textProperty.getValue();
                  var r = t.textProperty.currentData.t;
                  return (
                    void 0 !== r &&
                      ((t.textProperty.currentData.t = void 0),
                      ((e = new String(r)).value = r || new String(r))),
                    e
                  );
                },
              }),
              r
            );
          },
          LayerExpressionInterface = (function () {
            function t(t) {
              var e = new Matrix();
              void 0 !== t
                ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                : this._elem.finalTransform.mProp.applyToMatrix(e);
              return e;
            }
            function e(t, e) {
              var r = this.getMatrix(e);
              return (r.props[12] = 0), (r.props[13] = 0), (r.props[14] = 0), this.applyPoint(r, t);
            }
            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t);
            }
            function n(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0), (r.props[13] = 0), (r.props[14] = 0), this.invertPoint(r, t)
              );
            }
            function i(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t);
            }
            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0);
            }
            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.inversePoint(e);
            }
            function o(t) {
              var e = new Matrix();
              if (
                (e.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(e),
                this._elem.hierarchy && this._elem.hierarchy.length)
              ) {
                var r,
                  n = this._elem.hierarchy.length;
                for (r = 0; r < n; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t);
              }
              return e.inversePoint(t);
            }
            function l() {
              return [1, 1, 1, 1];
            }
            return function (h) {
              var c;
              function u(t) {
                switch (t) {
                  case 'ADBE Root Vectors Group':
                  case 'Contents':
                  case 2:
                    return u.shapeInterface;
                  case 1:
                  case 6:
                  case 'Transform':
                  case 'transform':
                  case 'ADBE Transform Group':
                    return c;
                  case 4:
                  case 'ADBE Effect Parade':
                  case 'effects':
                  case 'Effects':
                    return u.effect;
                  case 'ADBE Text Properties':
                    return u.textInterface;
                  default:
                    return null;
                }
              }
              (u.getMatrix = t),
                (u.invertPoint = s),
                (u.applyPoint = a),
                (u.toWorld = r),
                (u.toWorldVec = e),
                (u.fromWorld = i),
                (u.fromWorldVec = n),
                (u.toComp = r),
                (u.fromComp = o),
                (u.sampleImage = l),
                (u.sourceRectAtTime = h.sourceRectAtTime.bind(h)),
                (u._elem = h);
              var f = getDescriptor(
                (c = TransformExpressionInterface(h.finalTransform.mProp)),
                'anchorPoint'
              );
              return (
                Object.defineProperties(u, {
                  hasParent: {
                    get: function () {
                      return h.hierarchy.length;
                    },
                  },
                  parent: {
                    get: function () {
                      return h.hierarchy[0].layerInterface;
                    },
                  },
                  rotation: getDescriptor(c, 'rotation'),
                  scale: getDescriptor(c, 'scale'),
                  position: getDescriptor(c, 'position'),
                  opacity: getDescriptor(c, 'opacity'),
                  anchorPoint: f,
                  anchor_point: f,
                  transform: {
                    get: function () {
                      return c;
                    },
                  },
                  active: {
                    get: function () {
                      return h.isInRange;
                    },
                  },
                }),
                (u.startTime = h.data.st),
                (u.index = h.data.ind),
                (u.source = h.data.refId),
                (u.height = 0 === h.data.ty ? h.data.h : 100),
                (u.width = 0 === h.data.ty ? h.data.w : 100),
                (u.inPoint = h.data.ip / h.comp.globalData.frameRate),
                (u.outPoint = h.data.op / h.comp.globalData.frameRate),
                (u._name = h.data.nm),
                (u.registerMaskInterface = function (t) {
                  u.mask = new MaskManagerInterface(t, h);
                }),
                (u.registerEffectsInterface = function (t) {
                  u.effect = t;
                }),
                u
              );
            };
          })(),
          FootageInterface =
            ((dataInterfaceFactory = function (t) {
              function e(t) {
                return 'Outline' === t ? e.outlineInterface() : null;
              }
              return (
                (e._name = 'Outline'),
                (e.outlineInterface = (function (t) {
                  var e = '',
                    r = t.getFootageData();
                  function n(t) {
                    if (r[t]) return (e = t), 'object' == typeof (r = r[t]) ? n : r;
                    var i = t.indexOf(e);
                    if (-1 !== i) {
                      var a = parseInt(t.substr(i + e.length), 10);
                      return 'object' == typeof (r = r[a]) ? n : r;
                    }
                    return '';
                  }
                  return function () {
                    return (e = ''), (r = t.getFootageData()), n;
                  };
                })(t)),
                e
              );
            }),
            function (t) {
              function e(t) {
                return 'Data' === t ? e.dataInterface : null;
              }
              return (e._name = 'Data'), (e.dataInterface = dataInterfaceFactory(t)), e;
            }),
          dataInterfaceFactory,
          CompExpressionInterface = function (t) {
            function e(e) {
              for (var r = 0, n = t.layers.length; r < n; ) {
                if (t.layers[r].nm === e || t.layers[r].ind === e)
                  return t.elements[r].layerInterface;
                r += 1;
              }
              return null;
            }
            return (
              Object.defineProperty(e, '_name', { value: t.data.nm }),
              (e.layer = e),
              (e.pixelAspect = 1),
              (e.height = t.data.h || t.globalData.compSize.h),
              (e.width = t.data.w || t.globalData.compSize.w),
              (e.pixelAspect = 1),
              (e.frameDuration = 1 / t.globalData.frameRate),
              (e.displayStartTime = 0),
              (e.numLayers = t.layers.length),
              e
            );
          },
          TransformExpressionInterface = function (t) {
            function e(t) {
              switch (t) {
                case 'scale':
                case 'Scale':
                case 'ADBE Scale':
                case 6:
                  return e.scale;
                case 'rotation':
                case 'Rotation':
                case 'ADBE Rotation':
                case 'ADBE Rotate Z':
                case 10:
                  return e.rotation;
                case 'ADBE Rotate X':
                  return e.xRotation;
                case 'ADBE Rotate Y':
                  return e.yRotation;
                case 'position':
                case 'Position':
                case 'ADBE Position':
                case 2:
                  return e.position;
                case 'ADBE Position_0':
                  return e.xPosition;
                case 'ADBE Position_1':
                  return e.yPosition;
                case 'ADBE Position_2':
                  return e.zPosition;
                case 'anchorPoint':
                case 'AnchorPoint':
                case 'Anchor Point':
                case 'ADBE AnchorPoint':
                case 1:
                  return e.anchorPoint;
                case 'opacity':
                case 'Opacity':
                case 11:
                  return e.opacity;
                default:
                  return null;
              }
            }
            var r, n, i, a;
            return (
              Object.defineProperty(e, 'rotation', {
                get: ExpressionPropertyInterface(t.r || t.rz),
              }),
              Object.defineProperty(e, 'zRotation', {
                get: ExpressionPropertyInterface(t.rz || t.r),
              }),
              Object.defineProperty(e, 'xRotation', { get: ExpressionPropertyInterface(t.rx) }),
              Object.defineProperty(e, 'yRotation', { get: ExpressionPropertyInterface(t.ry) }),
              Object.defineProperty(e, 'scale', { get: ExpressionPropertyInterface(t.s) }),
              t.p
                ? (a = ExpressionPropertyInterface(t.p))
                : ((r = ExpressionPropertyInterface(t.px)),
                  (n = ExpressionPropertyInterface(t.py)),
                  t.pz && (i = ExpressionPropertyInterface(t.pz))),
              Object.defineProperty(e, 'position', {
                get: function () {
                  return t.p ? a() : [r(), n(), i ? i() : 0];
                },
              }),
              Object.defineProperty(e, 'xPosition', { get: ExpressionPropertyInterface(t.px) }),
              Object.defineProperty(e, 'yPosition', { get: ExpressionPropertyInterface(t.py) }),
              Object.defineProperty(e, 'zPosition', { get: ExpressionPropertyInterface(t.pz) }),
              Object.defineProperty(e, 'anchorPoint', { get: ExpressionPropertyInterface(t.a) }),
              Object.defineProperty(e, 'opacity', { get: ExpressionPropertyInterface(t.o) }),
              Object.defineProperty(e, 'skew', { get: ExpressionPropertyInterface(t.sk) }),
              Object.defineProperty(e, 'skewAxis', { get: ExpressionPropertyInterface(t.sa) }),
              Object.defineProperty(e, 'orientation', { get: ExpressionPropertyInterface(t.or) }),
              e
            );
          },
          ProjectInterface = (function () {
            function t(t) {
              this.compositions.push(t);
            }
            return function () {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r; ) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t)
                    return (
                      this.compositions[e].prepareFrame &&
                        this.compositions[e].data.xt &&
                        this.compositions[e].prepareFrame(this.currentFrame),
                      this.compositions[e].compInterface
                    );
                  e += 1;
                }
                return null;
              }
              return (e.compositions = []), (e.currentFrame = 0), (e.registerComposition = t), e;
            };
          })(),
          EffectsExpressionInterface = (function () {
            function t(r, n, i, a) {
              function s(t) {
                for (var e = r.ef, n = 0, i = e.length; n < i; ) {
                  if (t === e[n].nm || t === e[n].mn || t === e[n].ix)
                    return 5 === e[n].ty ? h[n] : h[n]();
                  n += 1;
                }
                throw new Error();
              }
              var o,
                l = propertyGroupFactory(s, i),
                h = [],
                c = r.ef.length;
              for (o = 0; o < c; o += 1)
                5 === r.ef[o].ty
                  ? h.push(t(r.ef[o], n.effectElements[o], n.effectElements[o].propertyGroup, a))
                  : h.push(e(n.effectElements[o], r.ef[o].ty, a, l));
              return (
                'ADBE Color Control' === r.mn &&
                  Object.defineProperty(s, 'color', {
                    get: function () {
                      return h[0]();
                    },
                  }),
                Object.defineProperties(s, {
                  numProperties: {
                    get: function () {
                      return r.np;
                    },
                  },
                  _name: { value: r.nm },
                  propertyGroup: { value: l },
                }),
                (s.enabled = 0 !== r.en),
                (s.active = s.enabled),
                s
              );
            }
            function e(t, e, r, n) {
              var i = ExpressionPropertyInterface(t.p);
              return (
                t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface('', n)),
                function () {
                  return 10 === e ? r.comp.compInterface(t.p.v) : i();
                }
              );
            }
            return {
              createEffectsInterface: function (e, r) {
                if (e.effectsManager) {
                  var n,
                    i = [],
                    a = e.data.ef,
                    s = e.effectsManager.effectElements.length;
                  for (n = 0; n < s; n += 1)
                    i.push(t(a[n], e.effectsManager.effectElements[n], r, e));
                  var o = e.data.ef || [],
                    l = function (t) {
                      for (n = 0, s = o.length; n < s; ) {
                        if (t === o[n].nm || t === o[n].mn || t === o[n].ix) return i[n];
                        n += 1;
                      }
                      return null;
                    };
                  return (
                    Object.defineProperty(l, 'numProperties', {
                      get: function () {
                        return o.length;
                      },
                    }),
                    l
                  );
                }
                return null;
              },
            };
          })(),
          MaskManagerInterface = (function () {
            function t(t, e) {
              (this._mask = t), (this._data = e);
            }
            Object.defineProperty(t.prototype, 'maskPath', {
              get: function () {
                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
              },
            }),
              Object.defineProperty(t.prototype, 'maskOpacity', {
                get: function () {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                },
              });
            return function (e) {
              var r,
                n = createSizedArray(e.viewData.length),
                i = e.viewData.length;
              for (r = 0; r < i; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]);
              return function (t) {
                for (r = 0; r < i; ) {
                  if (e.masksProperties[r].nm === t) return n[r];
                  r += 1;
                }
                return null;
              };
            };
          })(),
          ExpressionPropertyInterface = (function () {
            var t = { pv: 0, v: 0, mult: 1 },
              e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
            function r(t, e, r) {
              Object.defineProperty(t, 'velocity', {
                get: function () {
                  return e.getVelocityAtTime(e.comp.currentFrame);
                },
              }),
                (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                (t.key = function (n) {
                  if (!t.numKeys) return 0;
                  var i = '';
                  i =
                    's' in e.keyframes[n - 1]
                      ? e.keyframes[n - 1].s
                      : 'e' in e.keyframes[n - 2]
                      ? e.keyframes[n - 2].e
                      : e.keyframes[n - 2].s;
                  var a = 'unidimensional' === r ? new Number(i) : Object.assign({}, i);
                  return (
                    (a.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate),
                    (a.value = 'unidimensional' === r ? i[0] : i),
                    a
                  );
                }),
                (t.valueAtTime = e.getValueAtTime),
                (t.speedAtTime = e.getSpeedAtTime),
                (t.velocityAtTime = e.getVelocityAtTime),
                (t.propertyGroup = e.propertyGroup);
            }
            function n() {
              return t;
            }
            return function (i) {
              return i
                ? 'unidimensional' === i.propType
                  ? (function (e) {
                      (e && 'pv' in e) || (e = t);
                      var n = 1 / e.mult,
                        i = e.pv * n,
                        a = new Number(i);
                      return (
                        (a.value = i),
                        r(a, e, 'unidimensional'),
                        function () {
                          return (
                            e.k && e.getValue(),
                            (i = e.v * n),
                            a.value !== i &&
                              (((a = new Number(i)).value = i), r(a, e, 'unidimensional')),
                            a
                          );
                        }
                      );
                    })(i)
                  : (function (t) {
                      (t && 'pv' in t) || (t = e);
                      var n = 1 / t.mult,
                        i = (t.data && t.data.l) || t.pv.length,
                        a = createTypedArray('float32', i),
                        s = createTypedArray('float32', i);
                      return (
                        (a.value = s),
                        r(a, t, 'multidimensional'),
                        function () {
                          t.k && t.getValue();
                          for (var e = 0; e < i; e += 1) (s[e] = t.v[e] * n), (a[e] = s[e]);
                          return a;
                        }
                      );
                    })(i)
                : n;
            };
          })(),
          TextExpressionSelectorPropFactory = (function () {
            function t(t, e) {
              return (
                (this.textIndex = t + 1),
                (this.textTotal = e),
                (this.v = this.getValue() * this.mult),
                this.v
              );
            }
            return function (e, r) {
              (this.pv = 1),
                (this.comp = e.comp),
                (this.elem = e),
                (this.mult = 0.01),
                (this.propType = 'textSelector'),
                (this.textTotal = r.totalChars),
                (this.selectorValue = 100),
                (this.lastValue = [1, 1, 1]),
                (this.k = !0),
                (this.x = !0),
                (this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this)),
                (this.getMult = t),
                (this.getVelocityAtTime = expressionHelpers.getVelocityAtTime),
                this.kf
                  ? (this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this))
                  : (this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this)),
                (this.setGroupProperty = expressionHelpers.setGroupProperty);
            };
          })(),
          propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function NoValueEffect() {
          this.p = {};
        }
        function EffectsManager(t, e) {
          var r,
            n = t.ef || [];
          this.effectElements = [];
          var i,
            a = n.length;
          for (r = 0; r < a; r += 1) (i = new GroupEffect(n[r], e)), this.effectElements.push(i);
        }
        function GroupEffect(t, e) {
          this.init(t, e);
        }
        (TextSelectorProp.getTextSelectorProp = function (t, e, r) {
          return 1 === e.t
            ? new TextExpressionSelectorPropFactory(t, e, r)
            : propertyGetTextProp(t, e, r);
        }),
          extendPrototype([DynamicPropertyContainer], GroupEffect),
          (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
          (GroupEffect.prototype.init = function (t, e) {
            var r;
            (this.data = t), (this.effectElements = []), this.initDynamicPropertyContainer(e);
            var n,
              i = this.data.ef.length,
              a = this.data.ef;
            for (r = 0; r < i; r += 1) {
              switch (((n = null), a[r].ty)) {
                case 0:
                  n = new SliderEffect(a[r], e, this);
                  break;
                case 1:
                  n = new AngleEffect(a[r], e, this);
                  break;
                case 2:
                  n = new ColorEffect(a[r], e, this);
                  break;
                case 3:
                  n = new PointEffect(a[r], e, this);
                  break;
                case 4:
                case 7:
                  n = new CheckboxEffect(a[r], e, this);
                  break;
                case 10:
                  n = new LayerIndexEffect(a[r], e, this);
                  break;
                case 11:
                  n = new MaskIndexEffect(a[r], e, this);
                  break;
                case 5:
                  n = new EffectsManager(a[r], e, this);
                  break;
                default:
                  n = new NoValueEffect(a[r], e, this);
              }
              n && this.effectElements.push(n);
            }
          });
        var lottie = {};
        function setLocationHref(t) {
          locationHref = t;
        }
        function searchAnimations() {
          !0 === standalone
            ? animationManager.searchAnimations(animationData, standalone, renderer)
            : animationManager.searchAnimations();
        }
        function setSubframeRendering(t) {
          subframeEnabled = t;
        }
        function setIDPrefix(t) {
          idPrefix = t;
        }
        function loadAnimation(t) {
          return (
            !0 === standalone && (t.animationData = JSON.parse(animationData)),
            animationManager.loadAnimation(t)
          );
        }
        function setQuality(t) {
          if ('string' == typeof t)
            switch (t) {
              case 'high':
                defaultCurveSegments = 200;
                break;
              default:
              case 'medium':
                defaultCurveSegments = 50;
                break;
              case 'low':
                defaultCurveSegments = 10;
            }
          else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
          roundValues(!(defaultCurveSegments >= 50));
        }
        function inBrowser() {
          return 'undefined' != typeof navigator;
        }
        function installPlugin(t, e) {
          'expressions' === t && (expressionsPlugin = e);
        }
        function getFactory(t) {
          switch (t) {
            case 'propertyFactory':
              return PropertyFactory;
            case 'shapePropertyFactory':
              return ShapePropertyFactory;
            case 'matrix':
              return Matrix;
            default:
              return null;
          }
        }
        function checkReady() {
          'complete' === document.readyState &&
            (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
          for (var e = queryString.split('&'), r = 0; r < e.length; r += 1) {
            var n = e[r].split('=');
            if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1]);
          }
          return null;
        }
        (lottie.play = animationManager.play),
          (lottie.pause = animationManager.pause),
          (lottie.setLocationHref = setLocationHref),
          (lottie.togglePause = animationManager.togglePause),
          (lottie.setSpeed = animationManager.setSpeed),
          (lottie.setDirection = animationManager.setDirection),
          (lottie.stop = animationManager.stop),
          (lottie.searchAnimations = searchAnimations),
          (lottie.registerAnimation = animationManager.registerAnimation),
          (lottie.loadAnimation = loadAnimation),
          (lottie.setSubframeRendering = setSubframeRendering),
          (lottie.resize = animationManager.resize),
          (lottie.goToAndStop = animationManager.goToAndStop),
          (lottie.destroy = animationManager.destroy),
          (lottie.setQuality = setQuality),
          (lottie.inBrowser = inBrowser),
          (lottie.installPlugin = installPlugin),
          (lottie.freeze = animationManager.freeze),
          (lottie.unfreeze = animationManager.unfreeze),
          (lottie.setVolume = animationManager.setVolume),
          (lottie.mute = animationManager.mute),
          (lottie.unmute = animationManager.unmute),
          (lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations),
          (lottie.setIDPrefix = setIDPrefix),
          (lottie.__getFactory = getFactory),
          (lottie.version = '5.7.13');
        var standalone = '__[STANDALONE]__',
          animationData = '__[ANIMATIONDATA]__',
          renderer = '',
          queryString;
        if (standalone) {
          var scripts = document.getElementsByTagName('script'),
            index = scripts.length - 1,
            myScript = scripts[index] || { src: '' };
          (queryString = myScript.src.replace(/^[^\?]+\??/, '')),
            (renderer = getQueryVariable('renderer'));
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie;
      }),
      void 0 ===
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return factory(root);
        }.call(exports, __webpack_require__, exports, module)) ||
        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  },
  function (t, e, r) {
    'use strict';
    var n = r(22);
    n.define(
      'brand',
      (t.exports = function (t) {
        var e,
          r = {},
          i = document,
          a = t('html'),
          s = t('body'),
          o = '.w-webflow-badge',
          l = window.location,
          h = /PhantomJS/i.test(navigator.userAgent),
          c = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
        function u() {
          var r =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            Boolean(i.webkitFullscreenElement);
          t(e).attr('style', r ? 'display: none !important;' : '');
        }
        function f() {
          var t = s.children(o),
            r = t.length && t.get(0) === e,
            i = n.env('editor');
          r ? i && t.remove() : (t.length && t.remove(), i || s.append(e));
        }
        return (
          (r.ready = function () {
            var r,
              n,
              s,
              o = a.attr('data-wf-status'),
              p = a.attr('data-wf-domain') || '';
            /\.webflow\.io$/i.test(p) && l.hostname !== p && (o = !0),
              o &&
                !h &&
                ((e =
                  e ||
                  ((r = t('<a class="w-webflow-badge"></a>').attr(
                    'href',
                    'https://webflow.com?utm_campaign=brandjs'
                  )),
                  (n = t('<img>')
                    .attr(
                      'src',
                      'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg'
                    )
                    .attr('alt', '')
                    .css({ marginRight: '8px', width: '16px' })),
                  (s = t('<img>')
                    .attr(
                      'src',
                      'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg'
                    )
                    .attr('alt', 'Made in Webflow')),
                  r.append(n, s),
                  r[0])),
                f(),
                setTimeout(f, 500),
                t(i).off(c, u).on(c, u));
          }),
          r
        );
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(22);
    n.define(
      'edit',
      (t.exports = function (t, e, r) {
        if (
          ((r = r || {}),
          (n.env('test') || n.env('frame')) &&
            !r.fixture &&
            !(function () {
              try {
                return window.top.__Cypress__;
              } catch (t) {
                return !1;
              }
            })())
        )
          return { exit: 1 };
        var i,
          a = t(window),
          s = t(document.documentElement),
          o = document.location,
          l = 'hashchange',
          h =
            r.load ||
            function () {
              (i = !0),
                (window.WebflowEditor = !0),
                a.off(l, u),
                (function (t) {
                  var e = window.document.createElement('iframe');
                  (e.src = 'https://webflow.com/site/third-party-cookie-check.html'),
                    (e.style.display = 'none'),
                    (e.sandbox = 'allow-scripts allow-same-origin');
                  var r = function r(n) {
                    'WF_third_party_cookies_unsupported' === n.data
                      ? (y(e, r), t(!1))
                      : 'WF_third_party_cookies_supported' === n.data && (y(e, r), t(!0));
                  };
                  (e.onerror = function () {
                    y(e, r), t(!1);
                  }),
                    window.addEventListener('message', r, !1),
                    window.document.body.appendChild(e);
                })(function (e) {
                  t.ajax({
                    url: v('https://editor-api.webflow.com/api/editor/view'),
                    data: { siteId: s.attr('data-wf-site') },
                    xhrFields: { withCredentials: !0 },
                    dataType: 'json',
                    crossDomain: !0,
                    success: f(e),
                  });
                });
            },
          c = !1;
        try {
          c = localStorage && localStorage.getItem && localStorage.getItem('WebflowEditor');
        } catch (t) {}
        function u() {
          i || (/\?edit/.test(o.hash) && h());
        }
        function f(t) {
          return function (e) {
            e
              ? ((e.thirdPartyCookiesSupported = t),
                p(m(e.bugReporterScriptPath), function () {
                  p(m(e.scriptPath), function () {
                    window.WebflowEditor(e);
                  });
                }))
              : console.error('Could not load editor data');
          };
        }
        function p(e, r) {
          t.ajax({ type: 'GET', url: e, dataType: 'script', cache: !0 }).then(r, d);
        }
        function d(t, e, r) {
          throw (console.error('Could not load editor script: ' + e), r);
        }
        function m(t) {
          return t.indexOf('//') >= 0 ? t : v('https://editor-api.webflow.com' + t);
        }
        function v(t) {
          return t.replace(/([^:])\/\//g, '$1/');
        }
        function y(t, e) {
          window.removeEventListener('message', e, !1), t.remove();
        }
        return (
          c
            ? h()
            : o.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) || /\?edit$/.test(o.href)) && h()
            : a.on(l, u).triggerHandler(l),
          {}
        );
      })
    );
  },
  function (t, e, r) {
    'use strict';
    r(22).define(
      'focus-visible',
      (t.exports = function () {
        function t(t) {
          var e = !0,
            r = !1,
            n = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              'datetime-local': !0,
            };
          function a(t) {
            return !!(
              t &&
              t !== document &&
              'HTML' !== t.nodeName &&
              'BODY' !== t.nodeName &&
              'classList' in t &&
              'contains' in t.classList
            );
          }
          function s(t) {
            t.getAttribute('data-wf-focus-visible') ||
              t.setAttribute('data-wf-focus-visible', 'true');
          }
          function o() {
            e = !1;
          }
          function l() {
            document.addEventListener('mousemove', h),
              document.addEventListener('mousedown', h),
              document.addEventListener('mouseup', h),
              document.addEventListener('pointermove', h),
              document.addEventListener('pointerdown', h),
              document.addEventListener('pointerup', h),
              document.addEventListener('touchmove', h),
              document.addEventListener('touchstart', h),
              document.addEventListener('touchend', h);
          }
          function h(t) {
            (t.target.nodeName && 'html' === t.target.nodeName.toLowerCase()) ||
              ((e = !1),
              document.removeEventListener('mousemove', h),
              document.removeEventListener('mousedown', h),
              document.removeEventListener('mouseup', h),
              document.removeEventListener('pointermove', h),
              document.removeEventListener('pointerdown', h),
              document.removeEventListener('pointerup', h),
              document.removeEventListener('touchmove', h),
              document.removeEventListener('touchstart', h),
              document.removeEventListener('touchend', h));
          }
          document.addEventListener(
            'keydown',
            function (r) {
              r.metaKey ||
                r.altKey ||
                r.ctrlKey ||
                (a(t.activeElement) && s(t.activeElement), (e = !0));
            },
            !0
          ),
            document.addEventListener('mousedown', o, !0),
            document.addEventListener('pointerdown', o, !0),
            document.addEventListener('touchstart', o, !0),
            document.addEventListener(
              'visibilitychange',
              function () {
                'hidden' === document.visibilityState && (r && (e = !0), l());
              },
              !0
            ),
            l(),
            t.addEventListener(
              'focus',
              function (t) {
                var r, n, o;
                a(t.target) &&
                  (e ||
                    ((r = t.target),
                    (n = r.type),
                    ('INPUT' === (o = r.tagName) && i[n] && !r.readOnly) ||
                      ('TEXTAREA' === o && !r.readOnly) ||
                      r.isContentEditable)) &&
                  s(t.target);
              },
              !0
            ),
            t.addEventListener(
              'blur',
              function (t) {
                var e;
                a(t.target) &&
                  t.target.hasAttribute('data-wf-focus-visible') &&
                  ((r = !0),
                  window.clearTimeout(n),
                  (n = window.setTimeout(function () {
                    r = !1;
                  }, 100)),
                  (e = t.target).getAttribute('data-wf-focus-visible') &&
                    e.removeAttribute('data-wf-focus-visible'));
              },
              !0
            );
        }
        return {
          ready: function () {
            if ('undefined' != typeof document)
              try {
                document.querySelector(':focus-visible');
              } catch (e) {
                t(document);
              }
          },
        };
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(365);
    function i(t, e) {
      var r = document.createEvent('CustomEvent');
      r.initCustomEvent(e, !0, !0, null), t.dispatchEvent(r);
    }
    var a = window.jQuery,
      s = {},
      o = {
        reset: function (t, e) {
          n.triggers.reset(t, e);
        },
        intro: function (t, e) {
          n.triggers.intro(t, e), i(e, 'COMPONENT_ACTIVE');
        },
        outro: function (t, e) {
          n.triggers.outro(t, e), i(e, 'COMPONENT_INACTIVE');
        },
      };
    (s.triggers = {}),
      (s.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      a.extend(s.triggers, o),
      (t.exports = s);
  },
  function (t, e, r) {
    'use strict';
    var n = window.jQuery,
      i = {},
      a = [],
      s = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro || ((e.__wf_intro = !0), n(e).triggerHandler(i.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro && ((e.__wf_intro = null), n(e).triggerHandler(i.types.OUTRO));
        },
      };
    (i.triggers = {}),
      (i.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      (i.init = function () {
        for (var t = a.length, e = 0; e < t; e++) {
          var r = a[e];
          r[0](0, r[1]);
        }
        (a = []), n.extend(i.triggers, s);
      }),
      (i.async = function () {
        for (var t in s) {
          var e = s[t];
          s.hasOwnProperty(t) &&
            (i.triggers[t] = function (t, r) {
              a.push([e, r]);
            });
        }
      }),
      i.async(),
      (t.exports = i);
  },
  function (t, e, r) {
    'use strict';
    var n = r(22),
      i = r(367);
    i.setEnv(n.env),
      n.define(
        'ix2',
        (t.exports = function () {
          return i;
        })
      );
  },
  function (t, e, r) {
    'use strict';
    var n = r(55),
      i = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setEnv = function (t) {
        t() && (0, o.observeRequests)(h);
      }),
      (e.init = function (t) {
        c(), (0, o.startEngine)({ store: h, rawData: t, allowEvents: !0 });
      }),
      (e.destroy = c),
      (e.actions = e.store = void 0),
      r(368);
    var a = r(167),
      s = i(r(383)),
      o = r(185),
      l = n(r(120));
    e.actions = l;
    var h = (0, a.createStore)(s.default);
    function c() {
      (0, o.stopEngine)(h);
    }
    e.store = h;
  },
  function (t, e, r) {
    var n = r(369);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(370);
    t.exports = n;
  },
  function (t, e, r) {
    r(158);
    var n = r(371);
    t.exports = n('Array', 'includes');
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2);
    t.exports = function (t, e) {
      return i(n[t].prototype[e]);
    };
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(169),
      i = r(375),
      a = r(376),
      s = '[object Null]',
      o = '[object Undefined]',
      l = n.default ? n.default.toStringTag : void 0;
    e.default = function (t) {
      return null == t
        ? void 0 === t
          ? o
          : s
        : l && l in Object(t)
        ? Object(i.default)(t)
        : Object(a.default)(t);
    };
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(374),
      i = 'object' == typeof self && self && self.Object === Object && self,
      a = n.default || i || Function('return this')();
    e.default = a;
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      function (t) {
        var r = 'object' == typeof t && t && t.Object === Object && t;
        e.default = r;
      }.call(this, r(60));
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(169),
      i = Object.prototype,
      a = i.hasOwnProperty,
      s = i.toString,
      o = n.default ? n.default.toStringTag : void 0;
    e.default = function (t) {
      var e = a.call(t, o),
        r = t[o];
      try {
        t[o] = void 0;
        var n = !0;
      } catch (t) {}
      var i = s.call(t);
      return n && (e ? (t[o] = r) : delete t[o]), i;
    };
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = Object.prototype.toString;
    e.default = function (t) {
      return n.call(t);
    };
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(378),
      i = Object(n.default)(Object.getPrototypeOf, Object);
    e.default = i;
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      (e.default = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      });
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      (e.default = function (t) {
        return null != t && 'object' == typeof t;
      });
  },
  function (t, e, r) {
    'use strict';
    r.r(e),
      function (t, n) {
        var i,
          a = r(382);
        i =
          'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : void 0 !== t
            ? t
            : n;
        var s = Object(a.default)(i);
        e.default = s;
      }.call(this, r(60), r(381)(t));
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, r) {
    'use strict';
    function n(t) {
      var e,
        r = t.Symbol;
      return (
        'function' == typeof r
          ? r.observable
            ? (e = r.observable)
            : ((e = r('observable')), (r.observable = e))
          : (e = '@@observable'),
        e
      );
    }
    r.r(e),
      r.d(e, 'default', function () {
        return n;
      });
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var n = r(167),
      i = r(384),
      a = r(390),
      s = r(391),
      o = r(44),
      l = r(409),
      h = r(410),
      c = o.IX2ElementsReducer.ixElements,
      u = (0, n.combineReducers)({
        ixData: i.ixData,
        ixRequest: a.ixRequest,
        ixSession: s.ixSession,
        ixElements: c,
        ixInstances: l.ixInstances,
        ixParameters: h.ixParameters,
      });
    e.default = u;
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixData = void 0);
    var n = r(13).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case n:
          return e.payload.ixData || Object.freeze({});
        default:
          return t;
      }
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.QuickEffectDirectionConsts =
        e.QuickEffectIds =
        e.EventLimitAffectedElements =
        e.EventContinuousMouseAxes =
        e.EventBasedOn =
        e.EventAppliesTo =
        e.EventTypeConsts =
          void 0);
    e.EventTypeConsts = {
      NAVBAR_OPEN: 'NAVBAR_OPEN',
      NAVBAR_CLOSE: 'NAVBAR_CLOSE',
      TAB_ACTIVE: 'TAB_ACTIVE',
      TAB_INACTIVE: 'TAB_INACTIVE',
      SLIDER_ACTIVE: 'SLIDER_ACTIVE',
      SLIDER_INACTIVE: 'SLIDER_INACTIVE',
      DROPDOWN_OPEN: 'DROPDOWN_OPEN',
      DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
      MOUSE_CLICK: 'MOUSE_CLICK',
      MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
      MOUSE_DOWN: 'MOUSE_DOWN',
      MOUSE_UP: 'MOUSE_UP',
      MOUSE_OVER: 'MOUSE_OVER',
      MOUSE_OUT: 'MOUSE_OUT',
      MOUSE_MOVE: 'MOUSE_MOVE',
      MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
      SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
      SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
      SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
      ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
      ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
      PAGE_START: 'PAGE_START',
      PAGE_FINISH: 'PAGE_FINISH',
      PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
      PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
      PAGE_SCROLL: 'PAGE_SCROLL',
    };
    e.EventAppliesTo = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' };
    e.EventBasedOn = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' };
    e.EventContinuousMouseAxes = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' };
    e.EventLimitAffectedElements = {
      CHILDREN: 'CHILDREN',
      SIBLINGS: 'SIBLINGS',
      IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN',
    };
    e.QuickEffectIds = {
      FADE_EFFECT: 'FADE_EFFECT',
      SLIDE_EFFECT: 'SLIDE_EFFECT',
      GROW_EFFECT: 'GROW_EFFECT',
      SHRINK_EFFECT: 'SHRINK_EFFECT',
      SPIN_EFFECT: 'SPIN_EFFECT',
      FLY_EFFECT: 'FLY_EFFECT',
      POP_EFFECT: 'POP_EFFECT',
      FLIP_EFFECT: 'FLIP_EFFECT',
      JIGGLE_EFFECT: 'JIGGLE_EFFECT',
      PULSE_EFFECT: 'PULSE_EFFECT',
      DROP_EFFECT: 'DROP_EFFECT',
      BLINK_EFFECT: 'BLINK_EFFECT',
      BOUNCE_EFFECT: 'BOUNCE_EFFECT',
      FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
      FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
      RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
      JELLO_EFFECT: 'JELLO_EFFECT',
      GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
      SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
      PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT',
    };
    e.QuickEffectDirectionConsts = {
      LEFT: 'LEFT',
      RIGHT: 'RIGHT',
      BOTTOM: 'BOTTOM',
      TOP: 'TOP',
      BOTTOM_LEFT: 'BOTTOM_LEFT',
      BOTTOM_RIGHT: 'BOTTOM_RIGHT',
      TOP_RIGHT: 'TOP_RIGHT',
      TOP_LEFT: 'TOP_LEFT',
      CLOCKWISE: 'CLOCKWISE',
      COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE',
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.InteractionTypeConsts = void 0);
    e.InteractionTypeConsts = {
      MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
      MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
      MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
      SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
      SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
      PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
      PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
      PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
      NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
      DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
      ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
      TAB_INTERACTION: 'TAB_INTERACTION',
      SLIDER_INTERACTION: 'SLIDER_INTERACTION',
    };
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(3)(r(37));
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ReducedMotionTypes = void 0);
    var a = r(174).ActionTypeConsts,
      s = a.TRANSFORM_MOVE,
      o = a.TRANSFORM_SCALE,
      l = a.TRANSFORM_ROTATE,
      h = a.TRANSFORM_SKEW,
      c = a.STYLE_SIZE,
      u = a.STYLE_FILTER,
      f =
        ((n = {}),
        (0, i.default)(n, s, !0),
        (0, i.default)(n, o, !0),
        (0, i.default)(n, l, !0),
        (0, i.default)(n, h, !0),
        (0, i.default)(n, c, !0),
        (0, i.default)(n, u, !0),
        n);
    e.ReducedMotionTypes = f;
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IX2_TEST_FRAME_RENDERED =
        e.IX2_MEDIA_QUERIES_DEFINED =
        e.IX2_VIEWPORT_WIDTH_CHANGED =
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        e.IX2_ELEMENT_STATE_CHANGED =
        e.IX2_INSTANCE_REMOVED =
        e.IX2_INSTANCE_STARTED =
        e.IX2_INSTANCE_ADDED =
        e.IX2_PARAMETER_CHANGED =
        e.IX2_ANIMATION_FRAME_CHANGED =
        e.IX2_EVENT_STATE_CHANGED =
        e.IX2_EVENT_LISTENER_ADDED =
        e.IX2_CLEAR_REQUESTED =
        e.IX2_STOP_REQUESTED =
        e.IX2_PLAYBACK_REQUESTED =
        e.IX2_PREVIEW_REQUESTED =
        e.IX2_SESSION_STOPPED =
        e.IX2_SESSION_STARTED =
        e.IX2_SESSION_INITIALIZED =
        e.IX2_RAW_DATA_IMPORTED =
          void 0);
    e.IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
    e.IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
    e.IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
    e.IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
    e.IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
    e.IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
    e.IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
    e.IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
    e.IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
    e.IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
    e.IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
    e.IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
    e.IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
    e.IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
    e.IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
    e.IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
    e.IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';
    e.IX2_MEDIA_QUERIES_DEFINED = 'IX2_MEDIA_QUERIES_DEFINED';
    e.IX2_TEST_FRAME_RENDERED = 'IX2_TEST_FRAME_RENDERED';
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.RENDER_PLUGIN =
        e.RENDER_STYLE =
        e.RENDER_GENERAL =
        e.RENDER_TRANSFORM =
        e.ABSTRACT_NODE =
        e.PLAIN_OBJECT =
        e.HTML_ELEMENT =
        e.PRESERVE_3D =
        e.PARENT =
        e.SIBLINGS =
        e.IMMEDIATE_CHILDREN =
        e.CHILDREN =
        e.BAR_DELIMITER =
        e.COLON_DELIMITER =
        e.COMMA_DELIMITER =
        e.AUTO =
        e.WILL_CHANGE =
        e.FLEX =
        e.DISPLAY =
        e.COLOR =
        e.BORDER_COLOR =
        e.BACKGROUND =
        e.BACKGROUND_COLOR =
        e.HEIGHT =
        e.WIDTH =
        e.FILTER =
        e.OPACITY =
        e.SKEW_Y =
        e.SKEW_X =
        e.SKEW =
        e.ROTATE_Z =
        e.ROTATE_Y =
        e.ROTATE_X =
        e.SCALE_3D =
        e.SCALE_Z =
        e.SCALE_Y =
        e.SCALE_X =
        e.TRANSLATE_3D =
        e.TRANSLATE_Z =
        e.TRANSLATE_Y =
        e.TRANSLATE_X =
        e.TRANSFORM =
        e.CONFIG_UNIT =
        e.CONFIG_Z_UNIT =
        e.CONFIG_Y_UNIT =
        e.CONFIG_X_UNIT =
        e.CONFIG_VALUE =
        e.CONFIG_Z_VALUE =
        e.CONFIG_Y_VALUE =
        e.CONFIG_X_VALUE =
        e.BOUNDARY_SELECTOR =
        e.W_MOD_IX =
        e.W_MOD_JS =
        e.WF_PAGE =
        e.IX2_ID_DELIMITER =
          void 0);
    e.IX2_ID_DELIMITER = '|';
    e.WF_PAGE = 'data-wf-page';
    e.W_MOD_JS = 'w-mod-js';
    e.W_MOD_IX = 'w-mod-ix';
    e.BOUNDARY_SELECTOR = '.w-dyn-item';
    e.CONFIG_X_VALUE = 'xValue';
    e.CONFIG_Y_VALUE = 'yValue';
    e.CONFIG_Z_VALUE = 'zValue';
    e.CONFIG_VALUE = 'value';
    e.CONFIG_X_UNIT = 'xUnit';
    e.CONFIG_Y_UNIT = 'yUnit';
    e.CONFIG_Z_UNIT = 'zUnit';
    e.CONFIG_UNIT = 'unit';
    e.TRANSFORM = 'transform';
    e.TRANSLATE_X = 'translateX';
    e.TRANSLATE_Y = 'translateY';
    e.TRANSLATE_Z = 'translateZ';
    e.TRANSLATE_3D = 'translate3d';
    e.SCALE_X = 'scaleX';
    e.SCALE_Y = 'scaleY';
    e.SCALE_Z = 'scaleZ';
    e.SCALE_3D = 'scale3d';
    e.ROTATE_X = 'rotateX';
    e.ROTATE_Y = 'rotateY';
    e.ROTATE_Z = 'rotateZ';
    e.SKEW = 'skew';
    e.SKEW_X = 'skewX';
    e.SKEW_Y = 'skewY';
    e.OPACITY = 'opacity';
    e.FILTER = 'filter';
    e.WIDTH = 'width';
    e.HEIGHT = 'height';
    e.BACKGROUND_COLOR = 'backgroundColor';
    e.BACKGROUND = 'background';
    e.BORDER_COLOR = 'borderColor';
    e.COLOR = 'color';
    e.DISPLAY = 'display';
    e.FLEX = 'flex';
    e.WILL_CHANGE = 'willChange';
    e.AUTO = 'AUTO';
    e.COMMA_DELIMITER = ',';
    e.COLON_DELIMITER = ':';
    e.BAR_DELIMITER = '|';
    e.CHILDREN = 'CHILDREN';
    e.IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
    e.SIBLINGS = 'SIBLINGS';
    e.PARENT = 'PARENT';
    e.PRESERVE_3D = 'preserve-3d';
    e.HTML_ELEMENT = 'HTML_ELEMENT';
    e.PLAIN_OBJECT = 'PLAIN_OBJECT';
    e.ABSTRACT_NODE = 'ABSTRACT_NODE';
    e.RENDER_TRANSFORM = 'RENDER_TRANSFORM';
    e.RENDER_GENERAL = 'RENDER_GENERAL';
    e.RENDER_STYLE = 'RENDER_STYLE';
    e.RENDER_PLUGIN = 'RENDER_PLUGIN';
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(3)(r(37)),
      a = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixRequest = void 0);
    var s = a(r(45)),
      o = r(13),
      l = r(56),
      h = o.IX2EngineActionTypes,
      c = h.IX2_PREVIEW_REQUESTED,
      u = h.IX2_PLAYBACK_REQUESTED,
      f = h.IX2_STOP_REQUESTED,
      p = h.IX2_CLEAR_REQUESTED,
      d = { preview: {}, playback: {}, stop: {}, clear: {} },
      m = Object.create(
        null,
        ((n = {}),
        (0, i.default)(n, c, { value: 'preview' }),
        (0, i.default)(n, u, { value: 'playback' }),
        (0, i.default)(n, f, { value: 'stop' }),
        (0, i.default)(n, p, { value: 'clear' }),
        n)
      );
    e.ixRequest = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
        e = arguments.length > 1 ? arguments[1] : void 0;
      if (e.type in m) {
        var r = [m[e.type]];
        return (0, l.setIn)(t, [r], (0, s.default)({}, e.payload));
      }
      return t;
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixSession = void 0);
    var n = r(13),
      i = r(56),
      a = n.IX2EngineActionTypes,
      s = a.IX2_SESSION_INITIALIZED,
      o = a.IX2_SESSION_STARTED,
      l = a.IX2_TEST_FRAME_RENDERED,
      h = a.IX2_SESSION_STOPPED,
      c = a.IX2_EVENT_LISTENER_ADDED,
      u = a.IX2_EVENT_STATE_CHANGED,
      f = a.IX2_ANIMATION_FRAME_CHANGED,
      p = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      d = a.IX2_VIEWPORT_WIDTH_CHANGED,
      m = a.IX2_MEDIA_QUERIES_DEFINED,
      v = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      };
    e.ixSession = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case s:
          var r = e.payload,
            n = r.hasBoundaryNodes,
            a = r.reducedMotion;
          return (0, i.merge)(t, { hasBoundaryNodes: n, reducedMotion: a });
        case o:
          return (0, i.set)(t, 'active', !0);
        case l:
          var y = e.payload.step,
            g = void 0 === y ? 20 : y;
          return (0, i.set)(t, 'tick', t.tick + g);
        case h:
          return v;
        case f:
          var E = e.payload.now;
          return (0, i.set)(t, 'tick', E);
        case c:
          var b = (0, i.addLast)(t.eventListeners, e.payload);
          return (0, i.set)(t, 'eventListeners', b);
        case u:
          var _ = e.payload,
            x = _.stateKey,
            S = _.newState;
          return (0, i.setIn)(t, ['eventState', x], S);
        case p:
          var T = e.payload,
            I = T.actionListId,
            A = T.isPlaying;
          return (0, i.setIn)(t, ['playbackState', I], A);
        case d:
          for (
            var P = e.payload, w = P.width, C = P.mediaQueries, D = C.length, M = null, O = 0;
            O < D;
            O++
          ) {
            var F = C[O],
              k = F.key,
              R = F.min,
              L = F.max;
            if (w >= R && w <= L) {
              M = k;
              break;
            }
          }
          return (0, i.merge)(t, { viewportWidth: w, mediaQueryKey: M });
        case m:
          return (0, i.set)(t, 'hasDefinedMediaQueries', !0);
        default:
          return t;
      }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
        return r;
      }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (
        Symbol.iterator in Object(t) ||
        '[object Arguments]' === Object.prototype.toString.call(t)
      )
        return Array.from(t);
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance');
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createElementState = _),
      (e.mergeActionState = x),
      (e.ixElements = void 0);
    var n = r(56),
      i = r(13),
      a = i.IX2EngineConstants,
      s = (a.HTML_ELEMENT, a.PLAIN_OBJECT),
      o = (a.ABSTRACT_NODE, a.CONFIG_X_VALUE),
      l = a.CONFIG_Y_VALUE,
      h = a.CONFIG_Z_VALUE,
      c = a.CONFIG_VALUE,
      u = a.CONFIG_X_UNIT,
      f = a.CONFIG_Y_UNIT,
      p = a.CONFIG_Z_UNIT,
      d = a.CONFIG_UNIT,
      m = i.IX2EngineActionTypes,
      v = m.IX2_SESSION_STOPPED,
      y = m.IX2_INSTANCE_ADDED,
      g = m.IX2_ELEMENT_STATE_CHANGED,
      E = {},
      b = 'refState';
    function _(t, e, r, i, a) {
      var o = r === s ? (0, n.getIn)(a, ['config', 'target', 'objectId']) : null;
      return (0, n.mergeIn)(t, [i], { id: i, ref: e, refId: o, refType: r });
    }
    function x(t, e, r, i, a) {
      var s = (function (t) {
          var e = t.config;
          return S.reduce(function (t, r) {
            var n = r[0],
              i = r[1],
              a = e[n],
              s = e[i];
            return null != a && null != s && (t[i] = s), t;
          }, {});
        })(a),
        o = [e, b, r];
      return (0, n.mergeIn)(t, o, i, s);
    }
    e.ixElements = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      switch (e.type) {
        case v:
          return E;
        case y:
          var r = e.payload,
            i = r.elementId,
            a = r.element,
            s = r.origin,
            o = r.actionItem,
            l = r.refType,
            h = o.actionTypeId,
            c = t;
          return (0, n.getIn)(c, [i, a]) !== a && (c = _(c, a, l, i, o)), x(c, i, h, s, o);
        case g:
          var u = e.payload;
          return x(t, u.elementId, u.actionTypeId, u.current, u.actionItem);
        default:
          return t;
      }
    };
    var S = [
      [o, u],
      [l, f],
      [h, p],
      [c, d],
    ];
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginOrigin =
        e.getPluginDuration =
        e.getPluginConfig =
          void 0);
    e.getPluginConfig = function (t) {
      return t.value;
    };
    e.getPluginDuration = function (t, e) {
      if ('auto' !== e.config.duration) return null;
      var r = parseFloat(t.getAttribute('data-duration'));
      return r > 0 ? 1e3 * r : 1e3 * parseFloat(t.getAttribute('data-default-duration'));
    };
    e.getPluginOrigin = function (t) {
      return t || { value: 0 };
    };
    e.getPluginDestination = function (t) {
      return { value: t.value };
    };
    e.createPluginInstance = function (t) {
      var e = window.Webflow.require('lottie').createInstance(t);
      return e.stop(), e.setSubframe(!0), e;
    };
    e.renderPlugin = function (t, e, r) {
      if (t) {
        var n = e[r.actionTypeId].value / 100;
        t.goToFrame(t.frames * n);
      }
    };
    e.clearPlugin = function (t) {
      window.Webflow.require('lottie').createInstance(t).stop();
    };
  },
  function (t, e, r) {
    'use strict';
    var n,
      i,
      a,
      s = r(3),
      o = s(r(57)),
      l = s(r(37)),
      h = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getInstanceId = function () {
        return 'i' + dt++;
      }),
      (e.getElementId = function (t, e) {
        for (var r in t) {
          var n = t[r];
          if (n && n.ref === e) return n.id;
        }
        return 'e' + mt++;
      }),
      (e.reifyState = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.events,
          r = t.actionLists,
          n = t.site,
          i = (0, u.default)(
            e,
            function (t, e) {
              var r = e.eventTypeId;
              return t[r] || (t[r] = {}), (t[r][e.id] = e), t;
            },
            {}
          ),
          a = n && n.mediaQueries,
          s = [];
        a
          ? (s = a.map(function (t) {
              return t.key;
            }))
          : ((a = []), console.warn('IX2 missing mediaQueries in site data'));
        return {
          ixData: {
            events: e,
            actionLists: r,
            eventTypeMap: i,
            mediaQueries: a,
            mediaQueryKeys: s,
          },
        };
      }),
      (e.observeStore = function (t) {
        var e = t.store,
          r = t.select,
          n = t.onChange,
          i = t.comparator,
          a = void 0 === i ? vt : i,
          s = e.getState,
          o = (0, e.subscribe)(function () {
            var t = r(s());
            if (null == t) return void o();
            a(t, l) || n((l = t), e);
          }),
          l = r(s());
        return o;
      }),
      (e.getAffectedElements = gt),
      (e.getComputedStyle = function (t) {
        var e = t.element,
          r = t.actionItem;
        if (!g.IS_BROWSER_ENV) return {};
        switch (r.actionTypeId) {
          case it:
          case at:
          case st:
          case ot:
          case lt:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }),
      (e.getInstanceOrigin = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = arguments.length > 3 ? arguments[3] : void 0,
          i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
          a = n.actionTypeId,
          s = n.config;
        if ((0, y.isPluginType)(a)) return (0, y.getPluginOrigin)(a)(e[a]);
        switch (a) {
          case Z:
          case J:
          case tt:
          case et:
            return e[a] || St[a];
          case nt:
            return bt(e[a], n.config.filters);
          case rt:
            return { value: (0, c.default)(parseFloat(i(t, D)), 1) };
          case it:
            var o,
              l,
              h = i(t, O),
              u = i(t, F);
            return (
              (o =
                s.widthUnit === H
                  ? Et.test(h)
                    ? parseFloat(h)
                    : parseFloat(r.width)
                  : (0, c.default)(parseFloat(h), parseFloat(r.width))),
              (l =
                s.heightUnit === H
                  ? Et.test(u)
                    ? parseFloat(u)
                    : parseFloat(r.height)
                  : (0, c.default)(parseFloat(u), parseFloat(r.height))),
              { widthValue: o, heightValue: l }
            );
          case at:
          case st:
          case ot:
            return (function (t) {
              var e = t.element,
                r = t.actionTypeId,
                n = t.computedStyle,
                i = t.getStyle,
                a = ut[r],
                s = i(e, a),
                o = Pt.test(s) ? s : n[a],
                l = (function (t, e) {
                  var r = t.exec(e);
                  return r ? r[1] : '';
                })(wt, o).split(X);
              return {
                rValue: (0, c.default)(parseInt(l[0], 10), 255),
                gValue: (0, c.default)(parseInt(l[1], 10), 255),
                bValue: (0, c.default)(parseInt(l[2], 10), 255),
                aValue: (0, c.default)(parseFloat(l[3]), 1),
              };
            })({ element: t, actionTypeId: a, computedStyle: r, getStyle: i });
          case lt:
            return { value: (0, c.default)(i(t, j), r.display) };
          case ht:
            return e[a] || { value: 0 };
          default:
            return;
        }
      }),
      (e.getDestinationValues = function (t) {
        var e = t.element,
          r = t.actionItem,
          n = t.elementApi,
          i = r.actionTypeId;
        if ((0, y.isPluginType)(i)) return (0, y.getPluginDestination)(i)(r.config);
        switch (i) {
          case Z:
          case J:
          case tt:
          case et:
            var a = r.config,
              s = a.xValue,
              o = a.yValue,
              l = a.zValue;
            return { xValue: s, yValue: o, zValue: l };
          case it:
            var h = n.getStyle,
              c = n.setStyle,
              u = n.getProperty,
              f = r.config,
              p = f.widthUnit,
              d = f.heightUnit,
              m = r.config,
              v = m.widthValue,
              E = m.heightValue;
            if (!g.IS_BROWSER_ENV) return { widthValue: v, heightValue: E };
            if (p === H) {
              var b = h(e, O);
              c(e, O, ''), (v = u(e, 'offsetWidth')), c(e, O, b);
            }
            if (d === H) {
              var _ = h(e, F);
              c(e, F, ''), (E = u(e, 'offsetHeight')), c(e, F, _);
            }
            return { widthValue: v, heightValue: E };
          case at:
          case st:
          case ot:
            var x = r.config,
              S = x.rValue,
              T = x.gValue,
              I = x.bValue,
              A = x.aValue;
            return { rValue: S, gValue: T, bValue: I, aValue: A };
          case nt:
            return r.config.filters.reduce(_t, {});
          default:
            var P = r.config.value;
            return { value: P };
        }
      }),
      (e.getRenderType = xt),
      (e.getStyleProp = function (t, e) {
        return t === K ? e.replace('STYLE_', '').toLowerCase() : null;
      }),
      (e.renderHTMLElement = function (t, e, r, n, i, a, s, o, l) {
        switch (o) {
          case q:
            return (function (t, e, r, n, i) {
              var a = At.map(function (t) {
                  var r = St[t],
                    n = e[t] || {},
                    i = n.xValue,
                    a = void 0 === i ? r.xValue : i,
                    s = n.yValue,
                    o = void 0 === s ? r.yValue : s,
                    l = n.zValue,
                    h = void 0 === l ? r.zValue : l,
                    c = n.xUnit,
                    u = void 0 === c ? '' : c,
                    f = n.yUnit,
                    p = void 0 === f ? '' : f,
                    d = n.zUnit,
                    m = void 0 === d ? '' : d;
                  switch (t) {
                    case Z:
                      return ''
                        .concat(x, '(')
                        .concat(a)
                        .concat(u, ', ')
                        .concat(o)
                        .concat(p, ', ')
                        .concat(h)
                        .concat(m, ')');
                    case J:
                      return ''
                        .concat(S, '(')
                        .concat(a)
                        .concat(u, ', ')
                        .concat(o)
                        .concat(p, ', ')
                        .concat(h)
                        .concat(m, ')');
                    case tt:
                      return ''
                        .concat(T, '(')
                        .concat(a)
                        .concat(u, ') ')
                        .concat(I, '(')
                        .concat(o)
                        .concat(p, ') ')
                        .concat(A, '(')
                        .concat(h)
                        .concat(m, ')');
                    case et:
                      return ''.concat(P, '(').concat(a).concat(u, ', ').concat(o).concat(p, ')');
                    default:
                      return '';
                  }
                }).join(' '),
                s = i.setStyle;
              Ct(t, g.TRANSFORM_PREFIXED, i),
                s(t, g.TRANSFORM_PREFIXED, a),
                (o = n),
                (l = r),
                (h = o.actionTypeId),
                (c = l.xValue),
                (u = l.yValue),
                (f = l.zValue),
                ((h === Z && void 0 !== f) ||
                  (h === J && void 0 !== f) ||
                  (h === tt && (void 0 !== c || void 0 !== u))) &&
                  s(t, g.TRANSFORM_STYLE_PREFIXED, w);
              var o, l, h, c, u, f;
            })(t, e, r, i, s);
          case K:
            return (function (t, e, r, n, i, a) {
              var s = a.setStyle,
                o = n.actionTypeId,
                l = n.config;
              switch (o) {
                case it:
                  var h = n.config,
                    c = h.widthUnit,
                    f = void 0 === c ? '' : c,
                    p = h.heightUnit,
                    d = void 0 === p ? '' : p,
                    m = r.widthValue,
                    v = r.heightValue;
                  void 0 !== m && (f === H && (f = 'px'), Ct(t, O, a), s(t, O, m + f)),
                    void 0 !== v && (d === H && (d = 'px'), Ct(t, F, a), s(t, F, v + d));
                  break;
                case nt:
                  !(function (t, e, r, n) {
                    var i = (0, u.default)(
                        e,
                        function (t, e, n) {
                          return ''.concat(t, ' ').concat(n, '(').concat(e).concat(It(n, r), ')');
                        },
                        ''
                      ),
                      a = n.setStyle;
                    Ct(t, M, n), a(t, M, i);
                  })(t, r, l, a);
                  break;
                case at:
                case st:
                case ot:
                  var y = ut[o],
                    g = Math.round(r.rValue),
                    E = Math.round(r.gValue),
                    b = Math.round(r.bValue),
                    _ = r.aValue;
                  Ct(t, y, a),
                    s(
                      t,
                      y,
                      _ >= 1
                        ? 'rgb('.concat(g, ',').concat(E, ',').concat(b, ')')
                        : 'rgba('.concat(g, ',').concat(E, ',').concat(b, ',').concat(_, ')')
                    );
                  break;
                default:
                  var x = l.unit,
                    S = void 0 === x ? '' : x;
                  Ct(t, i, a), s(t, i, r.value + S);
              }
            })(t, 0, r, i, a, s);
          case Y:
            return (function (t, e, r) {
              var n = r.setStyle;
              switch (e.actionTypeId) {
                case lt:
                  var i = e.config.value;
                  return void (i === C && g.IS_BROWSER_ENV ? n(t, j, g.FLEX_PREFIXED) : n(t, j, i));
              }
            })(t, i, s);
          case Q:
            var h = i.actionTypeId;
            if ((0, y.isPluginType)(h)) return (0, y.renderPlugin)(h)(l, e, i);
        }
      }),
      (e.clearAllStyles = function (t) {
        var e = t.store,
          r = t.elementApi,
          n = e.getState().ixData,
          i = n.events,
          a = void 0 === i ? {} : i,
          s = n.actionLists,
          o = void 0 === s ? {} : s;
        Object.keys(a).forEach(function (t) {
          var e = a[t],
            n = e.action.config,
            i = n.actionListId,
            s = o[i];
          s && Mt({ actionList: s, event: e, elementApi: r });
        }),
          Object.keys(o).forEach(function (t) {
            Mt({ actionList: o[t], elementApi: r });
          });
      }),
      (e.cleanupHTMLElement = function (t, e, r) {
        var n = r.setStyle,
          i = r.getStyle,
          a = e.actionTypeId;
        if (a === it) {
          var s = e.config;
          s.widthUnit === H && n(t, O, ''), s.heightUnit === H && n(t, F, '');
        }
        i(t, z) && Ft({ effect: Dt, actionTypeId: a, elementApi: r })(t);
      }),
      (e.getMaxDurationItemIndex = Rt),
      (e.getActionListProgress = function (t, e) {
        var r = t.actionItemGroups,
          n = t.useFirstGroupAsInitialState,
          i = e.actionItem,
          a = e.verboseTimeElapsed,
          s = void 0 === a ? 0 : a,
          o = 0,
          l = 0;
        return (
          r.forEach(function (t, e) {
            if (!n || 0 !== e) {
              var r = t.actionItems,
                a = r[Rt(r)],
                h = a.config,
                c = a.actionTypeId;
              i.id === a.id && (l = o + s);
              var u = xt(c) === Y ? 0 : h.duration;
              o += h.delay + u;
            }
          }),
          o > 0 ? (0, v.optimizeFloat)(l / o) : 0
        );
      }),
      (e.reduceListToGroup = function (t) {
        var e = t.actionList,
          r = t.actionItemId,
          n = t.rawData,
          i = e.actionItemGroups,
          a = e.continuousParameterGroups,
          s = [],
          o = function (t) {
            return s.push((0, p.mergeIn)(t, ['config'], { delay: 0, duration: 0 })), t.id === r;
          };
        return (
          i &&
            i.some(function (t) {
              return t.actionItems.some(o);
            }),
          a &&
            a.some(function (t) {
              return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(o);
              });
            }),
          (0, p.setIn)(
            n,
            ['actionLists'],
            (0, l.default)({}, e.id, { id: e.id, actionItemGroups: [{ actionItems: s }] })
          )
        );
      }),
      (e.shouldNamespaceEventParameter = function (t, e) {
        var r = e.basedOn;
        return (
          (t === m.EventTypeConsts.SCROLLING_IN_VIEW &&
            (r === m.EventBasedOn.ELEMENT || null == r)) ||
          (t === m.EventTypeConsts.MOUSE_MOVE && r === m.EventBasedOn.ELEMENT)
        );
      }),
      (e.getNamespacedParameterId = function (t, e) {
        return t + W + e;
      }),
      (e.shouldAllowMediaQuery = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e);
      }),
      (e.mediaQueriesEqual = function (t, e) {
        return (0, d.default)(t && t.sort(), e && e.sort());
      }),
      (e.stringifyTarget = function (t) {
        if ('string' == typeof t) return t;
        var e = t.id,
          r = void 0 === e ? '' : e,
          n = t.selector,
          i = void 0 === n ? '' : n,
          a = t.useEventTarget;
        return r + U + i + U + (void 0 === a ? '' : a);
      }),
      (e.getItemConfigByKey = void 0);
    var c = h(r(398)),
      u = h(r(399)),
      f = h(r(405)),
      p = r(56),
      d = h(r(184)),
      m = r(13),
      v = r(179),
      y = r(181),
      g = r(119),
      E = m.IX2EngineConstants,
      b = E.BACKGROUND,
      _ = E.TRANSFORM,
      x = E.TRANSLATE_3D,
      S = E.SCALE_3D,
      T = E.ROTATE_X,
      I = E.ROTATE_Y,
      A = E.ROTATE_Z,
      P = E.SKEW,
      w = E.PRESERVE_3D,
      C = E.FLEX,
      D = E.OPACITY,
      M = E.FILTER,
      O = E.WIDTH,
      F = E.HEIGHT,
      k = E.BACKGROUND_COLOR,
      R = E.BORDER_COLOR,
      L = E.COLOR,
      N = E.CHILDREN,
      V = E.IMMEDIATE_CHILDREN,
      B = E.SIBLINGS,
      G = E.PARENT,
      j = E.DISPLAY,
      z = E.WILL_CHANGE,
      H = E.AUTO,
      X = E.COMMA_DELIMITER,
      W = E.COLON_DELIMITER,
      U = E.BAR_DELIMITER,
      q = E.RENDER_TRANSFORM,
      Y = E.RENDER_GENERAL,
      K = E.RENDER_STYLE,
      Q = E.RENDER_PLUGIN,
      $ = m.ActionTypeConsts,
      Z = $.TRANSFORM_MOVE,
      J = $.TRANSFORM_SCALE,
      tt = $.TRANSFORM_ROTATE,
      et = $.TRANSFORM_SKEW,
      rt = $.STYLE_OPACITY,
      nt = $.STYLE_FILTER,
      it = $.STYLE_SIZE,
      at = $.STYLE_BACKGROUND_COLOR,
      st = $.STYLE_BORDER,
      ot = $.STYLE_TEXT_COLOR,
      lt = $.GENERAL_DISPLAY,
      ht = 'OBJECT_VALUE',
      ct = function (t) {
        return t.trim();
      },
      ut = Object.freeze(
        ((n = {}), (0, l.default)(n, at, k), (0, l.default)(n, st, R), (0, l.default)(n, ot, L), n)
      ),
      ft = Object.freeze(
        ((i = {}),
        (0, l.default)(i, g.TRANSFORM_PREFIXED, _),
        (0, l.default)(i, k, b),
        (0, l.default)(i, D, D),
        (0, l.default)(i, M, M),
        (0, l.default)(i, O, O),
        (0, l.default)(i, F, F),
        i)
      ),
      pt = {},
      dt = 1;
    var mt = 1;
    var vt = function (t, e) {
      return t === e;
    };
    function yt(t) {
      var e = (0, o.default)(t);
      return 'string' === e
        ? { id: t }
        : null != t && 'object' === e
        ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget,
          }
        : {};
    }
    function gt(t) {
      var e,
        r,
        n,
        i = t.config,
        a = t.event,
        s = t.eventTarget,
        o = t.elementRoot,
        l = t.elementApi;
      if (!l) throw new Error('IX2 missing elementApi');
      var h = i.targets;
      if (Array.isArray(h) && h.length > 0)
        return h.reduce(function (t, e) {
          return t.concat(
            gt({ config: { target: e }, event: a, eventTarget: s, elementRoot: o, elementApi: l })
          );
        }, []);
      var c = l.getValidDocument,
        u = l.getQuerySelector,
        f = l.queryDocument,
        p = l.getChildElements,
        d = l.getSiblingElements,
        v = l.matchSelector,
        y = l.elementContains,
        E = l.isSiblingNode,
        b = i.target;
      if (!b) return [];
      var _ = yt(b),
        x = _.id,
        S = _.objectId,
        T = _.selector,
        I = _.selectorGuids,
        A = _.appliesTo,
        P = _.useEventTarget;
      if (S) return [pt[S] || (pt[S] = {})];
      if (A === m.EventAppliesTo.PAGE) {
        var w = c(x);
        return w ? [w] : [];
      }
      var C,
        D,
        M,
        O =
          (null !==
            (e =
              null == a
                ? void 0
                : null === (r = a.action) || void 0 === r
                ? void 0
                : null === (n = r.config) || void 0 === n
                ? void 0
                : n.affectedElements) && void 0 !== e
            ? e
            : {})[x || T] || {},
        F = Boolean(O.id || O.selector),
        k = a && u(yt(a.target));
      if (
        (F
          ? ((C = O.limitAffectedElements), (D = k), (M = u(O)))
          : (D = M = u({ id: x, selector: T, selectorGuids: I })),
        a && P)
      ) {
        var R = s && (M || !0 === P) ? [s] : f(k);
        if (M) {
          if (P === G)
            return f(M).filter(function (t) {
              return R.some(function (e) {
                return y(t, e);
              });
            });
          if (P === N)
            return f(M).filter(function (t) {
              return R.some(function (e) {
                return y(e, t);
              });
            });
          if (P === B)
            return f(M).filter(function (t) {
              return R.some(function (e) {
                return E(e, t);
              });
            });
        }
        return R;
      }
      return null == D || null == M
        ? []
        : g.IS_BROWSER_ENV && o
        ? f(M).filter(function (t) {
            return o.contains(t);
          })
        : C === N
        ? f(D, M)
        : C === V
        ? p(f(D)).filter(v(M))
        : C === B
        ? d(f(D)).filter(v(M))
        : f(M);
    }
    var Et = /px/,
      bt = function (t, e) {
        return e.reduce(function (t, e) {
          return null == t[e.type] && (t[e.type] = Tt[e.type]), t;
        }, t || {});
      };
    var _t = function (t, e) {
      return e && (t[e.type] = e.value || 0), t;
    };
    function xt(t) {
      return /^TRANSFORM_/.test(t)
        ? q
        : /^STYLE_/.test(t)
        ? K
        : /^GENERAL_/.test(t)
        ? Y
        : /^PLUGIN_/.test(t)
        ? Q
        : void 0;
    }
    e.getItemConfigByKey = function (t, e, r) {
      if ((0, y.isPluginType)(t)) return (0, y.getPluginConfig)(t)(r, e);
      switch (t) {
        case nt:
          var n = (0, f.default)(r.filters, function (t) {
            return t.type === e;
          });
          return n ? n.value : 0;
        default:
          return r[e];
      }
    };
    var St =
        ((a = {}),
        (0, l.default)(a, Z, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
        (0, l.default)(a, J, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })),
        (0, l.default)(a, tt, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
        (0, l.default)(a, et, Object.freeze({ xValue: 0, yValue: 0 })),
        a),
      Tt = Object.freeze({
        blur: 0,
        'hue-rotate': 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      It = function (t, e) {
        var r = (0, f.default)(e.filters, function (e) {
          return e.type === t;
        });
        if (r && r.unit) return r.unit;
        switch (t) {
          case 'blur':
            return 'px';
          case 'hue-rotate':
            return 'deg';
          default:
            return '%';
        }
      },
      At = Object.keys(St);
    var Pt = /^rgb/,
      wt = RegExp('rgba?'.concat('\\(([^)]+)\\)'));
    function Ct(t, e, r) {
      if (g.IS_BROWSER_ENV) {
        var n = ft[e];
        if (n) {
          var i = r.getStyle,
            a = r.setStyle,
            s = i(t, z);
          if (s) {
            var o = s.split(X).map(ct);
            -1 === o.indexOf(n) && a(t, z, o.concat(n).join(X));
          } else a(t, z, n);
        }
      }
    }
    function Dt(t, e, r) {
      if (g.IS_BROWSER_ENV) {
        var n = ft[e];
        if (n) {
          var i = r.getStyle,
            a = r.setStyle,
            s = i(t, z);
          s &&
            -1 !== s.indexOf(n) &&
            a(
              t,
              z,
              s
                .split(X)
                .map(ct)
                .filter(function (t) {
                  return t !== n;
                })
                .join(X)
            );
        }
      }
    }
    function Mt(t) {
      var e = t.actionList,
        r = void 0 === e ? {} : e,
        n = t.event,
        i = t.elementApi,
        a = r.actionItemGroups,
        s = r.continuousParameterGroups;
      a &&
        a.forEach(function (t) {
          Ot({ actionGroup: t, event: n, elementApi: i });
        }),
        s &&
          s.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
              Ot({ actionGroup: t, event: n, elementApi: i });
            });
          });
    }
    function Ot(t) {
      var e = t.actionGroup,
        r = t.event,
        n = t.elementApi;
      e.actionItems.forEach(function (t) {
        var e,
          i = t.actionTypeId,
          a = t.config;
        (e = (0, y.isPluginType)(i)
          ? (0, y.clearPlugin)(i)
          : Ft({ effect: kt, actionTypeId: i, elementApi: n })),
          gt({ config: a, event: r, elementApi: n }).forEach(e);
      });
    }
    var Ft = function (t) {
      var e = t.effect,
        r = t.actionTypeId,
        n = t.elementApi;
      return function (t) {
        switch (r) {
          case Z:
          case J:
          case tt:
          case et:
            e(t, g.TRANSFORM_PREFIXED, n);
            break;
          case nt:
            e(t, M, n);
            break;
          case rt:
            e(t, D, n);
            break;
          case it:
            e(t, O, n), e(t, F, n);
            break;
          case at:
          case st:
          case ot:
            e(t, ut[r], n);
            break;
          case lt:
            e(t, j, n);
        }
      };
    };
    function kt(t, e, r) {
      var n = r.setStyle;
      Dt(t, e, r), n(t, e, ''), e === g.TRANSFORM_PREFIXED && n(t, g.TRANSFORM_STYLE_PREFIXED, '');
    }
    function Rt(t) {
      var e = 0,
        r = 0;
      return (
        t.forEach(function (t, n) {
          var i = t.config,
            a = i.delay + i.duration;
          a >= e && ((e = a), (r = n));
        }),
        r
      );
    }
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t || t != t ? e : t;
    };
  },
  function (t, e, r) {
    var n = r(400),
      i = r(182),
      a = r(28),
      s = r(404),
      o = r(10);
    t.exports = function (t, e, r) {
      var l = o(t) ? n : s,
        h = arguments.length < 3;
      return l(t, a(e, 4), r, h, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e, r, n) {
      var i = -1,
        a = null == t ? 0 : t.length;
      for (n && a && (r = t[++i]); ++i < a; ) r = e(r, t[i], i, t);
      return r;
    };
  },
  function (t, e, r) {
    var n = r(402)();
    t.exports = n;
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e, r, n) {
        for (var i = -1, a = Object(e), s = n(e), o = s.length; o--; ) {
          var l = s[t ? o : ++i];
          if (!1 === r(a[l], l, a)) break;
        }
        return e;
      };
    };
  },
  function (t, e, r) {
    var n = r(39);
    t.exports = function (t, e) {
      return function (r, i) {
        if (null == r) return r;
        if (!n(r)) return t(r, i);
        for (
          var a = r.length, s = e ? a : -1, o = Object(r);
          (e ? s-- : ++s < a) && !1 !== i(o[s], s, o);

        );
        return r;
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, r, n, i) {
      return (
        i(t, function (t, i, a) {
          r = n ? ((n = !1), t) : e(r, t, i, a);
        }),
        r
      );
    };
  },
  function (t, e, r) {
    var n = r(176)(r(406));
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(126),
      i = r(28),
      a = r(144),
      s = Math.max,
      o = Math.min;
    t.exports = function (t, e, r) {
      var l = null == t ? 0 : t.length;
      if (!l) return -1;
      var h = l - 1;
      return (
        void 0 !== r && ((h = a(r)), (h = r < 0 ? s(l + h, 0) : o(h, l - 1))), n(t, i(e, 3), h, !0)
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e, r) {
    'use strict';
    var n = Object.prototype.hasOwnProperty;
    function i(t, e) {
      return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
    }
    t.exports = function (t, e) {
      if (i(t, e)) return !0;
      if ('object' != typeof t || null === t || 'object' != typeof e || null === e) return !1;
      var r = Object.keys(t),
        a = Object.keys(e);
      if (r.length !== a.length) return !1;
      for (var s = 0; s < r.length; s++) if (!n.call(e, r[s]) || !i(t[r[s]], e[r[s]])) return !1;
      return !0;
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixInstances = void 0);
    var n = r(13),
      i = r(44),
      a = r(56),
      s = n.IX2EngineActionTypes,
      o = s.IX2_RAW_DATA_IMPORTED,
      l = s.IX2_SESSION_STOPPED,
      h = s.IX2_INSTANCE_ADDED,
      c = s.IX2_INSTANCE_STARTED,
      u = s.IX2_INSTANCE_REMOVED,
      f = s.IX2_ANIMATION_FRAME_CHANGED,
      p = i.IX2EasingUtils,
      d = p.optimizeFloat,
      m = p.applyEasing,
      v = p.createBezierEasing,
      y = n.IX2EngineConstants.RENDER_GENERAL,
      g = i.IX2VanillaUtils,
      E = g.getItemConfigByKey,
      b = g.getRenderType,
      _ = g.getStyleProp,
      x = function (t, e) {
        var r = t.position,
          n = t.parameterId,
          i = t.actionGroups,
          s = t.destinationKeys,
          o = t.smoothing,
          l = t.restingValue,
          h = t.actionTypeId,
          c = t.customEasingFn,
          u = t.skipMotion,
          f = t.skipToValue,
          p = e.payload.parameters,
          v = Math.max(1 - o, 0.01),
          y = p[n];
        null == y && ((v = 1), (y = l));
        var g,
          b,
          _,
          x,
          S = Math.max(y, 0) || 0,
          T = d(S - r),
          I = u ? f : d(r + T * v),
          A = 100 * I;
        if (I === r && t.current) return t;
        for (var P = 0, w = i.length; P < w; P++) {
          var C = i[P],
            D = C.keyframe,
            M = C.actionItems;
          if ((0 === P && (g = M[0]), A >= D)) {
            g = M[0];
            var O = i[P + 1],
              F = O && A !== D;
            (b = F ? O.actionItems[0] : null), F && ((_ = D / 100), (x = (O.keyframe - D) / 100));
          }
        }
        var k = {};
        if (g && !b)
          for (var R = 0, L = s.length; R < L; R++) {
            var N = s[R];
            k[N] = E(h, N, g.config);
          }
        else if (g && b && void 0 !== _ && void 0 !== x)
          for (
            var V = (I - _) / x, B = g.config.easing, G = m(B, V, c), j = 0, z = s.length;
            j < z;
            j++
          ) {
            var H = s[j],
              X = E(h, H, g.config),
              W = (E(h, H, b.config) - X) * G + X;
            k[H] = W;
          }
        return (0, a.merge)(t, { position: I, current: k });
      },
      S = function (t, e) {
        var r = t,
          n = r.active,
          i = r.origin,
          s = r.start,
          o = r.immediate,
          l = r.renderType,
          h = r.verbose,
          c = r.actionItem,
          u = r.destination,
          f = r.destinationKeys,
          p = r.pluginDuration,
          v = r.instanceDelay,
          g = r.customEasingFn,
          E = r.skipMotion,
          b = c.config.easing,
          _ = c.config,
          x = _.duration,
          S = _.delay;
        null != p && (x = p), (S = null != v ? v : S), l === y ? (x = 0) : (o || E) && (x = S = 0);
        var T = e.payload.now;
        if (n && i) {
          var I = T - (s + S);
          if (h) {
            var A = T - s,
              P = x + S,
              w = d(Math.min(Math.max(0, A / P), 1));
            t = (0, a.set)(t, 'verboseTimeElapsed', P * w);
          }
          if (I < 0) return t;
          var C = d(Math.min(Math.max(0, I / x), 1)),
            D = m(b, C, g),
            M = {},
            O = null;
          return (
            f.length &&
              (O = f.reduce(function (t, e) {
                var r = u[e],
                  n = parseFloat(i[e]) || 0,
                  a = (parseFloat(r) - n) * D + n;
                return (t[e] = a), t;
              }, {})),
            (M.current = O),
            (M.position = C),
            1 === C && ((M.active = !1), (M.complete = !0)),
            (0, a.merge)(t, M)
          );
        }
        return t;
      };
    e.ixInstances = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case o:
          return e.payload.ixInstances || Object.freeze({});
        case l:
          return Object.freeze({});
        case h:
          var r = e.payload,
            n = r.instanceId,
            i = r.elementId,
            s = r.actionItem,
            p = r.eventId,
            d = r.eventTarget,
            m = r.eventStateKey,
            y = r.actionListId,
            g = r.groupIndex,
            E = r.isCarrier,
            T = r.origin,
            I = r.destination,
            A = r.immediate,
            P = r.verbose,
            w = r.continuous,
            C = r.parameterId,
            D = r.actionGroups,
            M = r.smoothing,
            O = r.restingValue,
            F = r.pluginInstance,
            k = r.pluginDuration,
            R = r.instanceDelay,
            L = r.skipMotion,
            N = r.skipToValue,
            V = s.actionTypeId,
            B = b(V),
            G = _(B, V),
            j = Object.keys(I).filter(function (t) {
              return null != I[t];
            }),
            z = s.config.easing;
          return (0, a.set)(t, n, {
            id: n,
            elementId: i,
            active: !1,
            position: 0,
            start: 0,
            origin: T,
            destination: I,
            destinationKeys: j,
            immediate: A,
            verbose: P,
            current: null,
            actionItem: s,
            actionTypeId: V,
            eventId: p,
            eventTarget: d,
            eventStateKey: m,
            actionListId: y,
            groupIndex: g,
            renderType: B,
            isCarrier: E,
            styleProp: G,
            continuous: w,
            parameterId: C,
            actionGroups: D,
            smoothing: M,
            restingValue: O,
            pluginInstance: F,
            pluginDuration: k,
            instanceDelay: R,
            skipMotion: L,
            skipToValue: N,
            customEasingFn: Array.isArray(z) && 4 === z.length ? v(z) : void 0,
          });
        case c:
          var H = e.payload,
            X = H.instanceId,
            W = H.time;
          return (0, a.mergeIn)(t, [X], { active: !0, complete: !1, start: W });
        case u:
          var U = e.payload.instanceId;
          if (!t[U]) return t;
          for (var q = {}, Y = Object.keys(t), K = Y.length, Q = 0; Q < K; Q++) {
            var $ = Y[Q];
            $ !== U && (q[$] = t[$]);
          }
          return q;
        case f:
          for (var Z = t, J = Object.keys(t), tt = J.length, et = 0; et < tt; et++) {
            var rt = J[et],
              nt = t[rt],
              it = nt.continuous ? x : S;
            Z = (0, a.set)(Z, rt, it(nt, e));
          }
          return Z;
        default:
          return t;
      }
    };
  },
  function (t, e, r) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixParameters = void 0);
    var n = r(13).IX2EngineActionTypes,
      i = n.IX2_RAW_DATA_IMPORTED,
      a = n.IX2_SESSION_STOPPED,
      s = n.IX2_PARAMETER_CHANGED;
    e.ixParameters = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case i:
          return e.payload.ixParameters || {};
        case a:
          return {};
        case s:
          var r = e.payload,
            n = r.key,
            o = r.value;
          return (t[n] = o), t;
        default:
          return t;
      }
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var r,
        n,
        i = {},
        a = Object.keys(t);
      for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i;
    };
  },
  function (t, e, r) {
    var n = r(87),
      i = r(89),
      a = r(39),
      s = r(413),
      o = r(414),
      l = '[object Map]',
      h = '[object Set]';
    t.exports = function (t) {
      if (null == t) return 0;
      if (a(t)) return s(t) ? o(t) : t.length;
      var e = i(t);
      return e == l || e == h ? t.size : n(t).length;
    };
  },
  function (t, e, r) {
    var n = r(38),
      i = r(10),
      a = r(30),
      s = '[object String]';
    t.exports = function (t) {
      return 'string' == typeof t || (!i(t) && a(t) && n(t) == s);
    };
  },
  function (t, e, r) {
    var n = r(415),
      i = r(416),
      a = r(417);
    t.exports = function (t) {
      return i(t) ? a(t) : n(t);
    };
  },
  function (t, e, r) {
    var n = r(143)('length');
    t.exports = n;
  },
  function (t, e) {
    var r = RegExp(
      '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
    );
    t.exports = function (t) {
      return r.test(t);
    };
  },
  function (t, e) {
    var r = '[\\ud800-\\udfff]',
      n = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
      i = '\\ud83c[\\udffb-\\udfff]',
      a = '[^\\ud800-\\udfff]',
      s = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      o = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      l = '(?:' + n + '|' + i + ')' + '?',
      h =
        '[\\ufe0e\\ufe0f]?' +
        l +
        ('(?:\\u200d(?:' + [a, s, o].join('|') + ')[\\ufe0e\\ufe0f]?' + l + ')*'),
      c = '(?:' + [a + n + '?', n, s, o, r].join('|') + ')',
      u = RegExp(i + '(?=' + i + ')|' + c + h, 'g');
    t.exports = function (t) {
      for (var e = (u.lastIndex = 0); u.test(t); ) ++e;
      return e;
    };
  },
  function (t, e, r) {
    var n = r(28),
      i = r(419),
      a = r(420);
    t.exports = function (t, e) {
      return a(t, i(n(e)));
    };
  },
  function (t, e) {
    var r = 'Expected a function';
    t.exports = function (t) {
      if ('function' != typeof t) throw new TypeError(r);
      return function () {
        var e = arguments;
        switch (e.length) {
          case 0:
            return !t.call(this);
          case 1:
            return !t.call(this, e[0]);
          case 2:
            return !t.call(this, e[0], e[1]);
          case 3:
            return !t.call(this, e[0], e[1], e[2]);
        }
        return !t.apply(this, e);
      };
    };
  },
  function (t, e, r) {
    var n = r(142),
      i = r(28),
      a = r(421),
      s = r(424);
    t.exports = function (t, e) {
      if (null == t) return {};
      var r = n(s(t), function (t) {
        return [t];
      });
      return (
        (e = i(e)),
        a(t, r, function (t, r) {
          return e(t, r[0]);
        })
      );
    };
  },
  function (t, e, r) {
    var n = r(91),
      i = r(422),
      a = r(65);
    t.exports = function (t, e, r) {
      for (var s = -1, o = e.length, l = {}; ++s < o; ) {
        var h = e[s],
          c = n(t, h);
        r(c, h) && i(l, a(h, t), c);
      }
      return l;
    };
  },
  function (t, e, r) {
    var n = r(423),
      i = r(65),
      a = r(84),
      s = r(23),
      o = r(47);
    t.exports = function (t, e, r, l) {
      if (!s(t)) return t;
      for (var h = -1, c = (e = i(e, t)).length, u = c - 1, f = t; null != f && ++h < c; ) {
        var p = o(e[h]),
          d = r;
        if ('__proto__' === p || 'constructor' === p || 'prototype' === p) return t;
        if (h != u) {
          var m = f[p];
          void 0 === (d = l ? l(m, p, f) : void 0) && (d = s(m) ? m : a(e[h + 1]) ? [] : {});
        }
        n(f, p, d), (f = f[p]);
      }
      return t;
    };
  },
  function (t, e, r) {
    var n = r(186),
      i = r(79),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r) {
      var s = t[e];
      (a.call(t, e) && i(s, r) && (void 0 !== r || e in t)) || n(t, e, r);
    };
  },
  function (t, e, r) {
    var n = r(133),
      i = r(425),
      a = r(427);
    t.exports = function (t) {
      return n(t, a, i);
    };
  },
  function (t, e, r) {
    var n = r(82),
      i = r(426),
      a = r(134),
      s = r(135),
      o = Object.getOwnPropertySymbols
        ? function (t) {
            for (var e = []; t; ) n(e, a(t)), (t = i(t));
            return e;
          }
        : s;
    t.exports = o;
  },
  function (t, e, r) {
    var n = r(138)(Object.getPrototypeOf, Object);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(136),
      i = r(428),
      a = r(39);
    t.exports = function (t) {
      return a(t) ? n(t, !0) : i(t);
    };
  },
  function (t, e, r) {
    var n = r(23),
      i = r(88),
      a = r(429),
      s = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!n(t)) return a(t);
      var e = i(t),
        r = [];
      for (var o in t) ('constructor' != o || (!e && s.call(t, o))) && r.push(o);
      return r;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      if (null != t) for (var r in Object(t)) e.push(r);
      return e;
    };
  },
  function (t, e, r) {
    var n = r(87),
      i = r(89),
      a = r(64),
      s = r(10),
      o = r(39),
      l = r(83),
      h = r(88),
      c = r(85),
      u = '[object Map]',
      f = '[object Set]',
      p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (null == t) return !0;
      if (
        o(t) &&
        (s(t) || 'string' == typeof t || 'function' == typeof t.splice || l(t) || c(t) || a(t))
      )
        return !t.length;
      var e = i(t);
      if (e == u || e == f) return !t.size;
      if (h(t)) return !n(t).length;
      for (var r in t) if (p.call(t, r)) return !1;
      return !0;
    };
  },
  function (t, e, r) {
    var n = r(186),
      i = r(183),
      a = r(28);
    t.exports = function (t, e) {
      var r = {};
      return (
        (e = a(e, 3)),
        i(t, function (t, i, a) {
          n(r, i, e(t, i, a));
        }),
        r
      );
    };
  },
  function (t, e, r) {
    var n = r(433),
      i = r(182),
      a = r(434),
      s = r(10);
    t.exports = function (t, e) {
      return (s(t) ? n : i)(t, a(e));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t); );
      return t;
    };
  },
  function (t, e, r) {
    var n = r(93);
    t.exports = function (t) {
      return 'function' == typeof t ? t : n;
    };
  },
  function (t, e, r) {
    var n = r(436),
      i = r(23),
      a = 'Expected a function';
    t.exports = function (t, e, r) {
      var s = !0,
        o = !0;
      if ('function' != typeof t) throw new TypeError(a);
      return (
        i(r) && ((s = 'leading' in r ? !!r.leading : s), (o = 'trailing' in r ? !!r.trailing : o)),
        n(t, e, { leading: s, maxWait: e, trailing: o })
      );
    };
  },
  function (t, e, r) {
    var n = r(23),
      i = r(437),
      a = r(94),
      s = 'Expected a function',
      o = Math.max,
      l = Math.min;
    t.exports = function (t, e, r) {
      var h,
        c,
        u,
        f,
        p,
        d,
        m = 0,
        v = !1,
        y = !1,
        g = !0;
      if ('function' != typeof t) throw new TypeError(s);
      function E(e) {
        var r = h,
          n = c;
        return (h = c = void 0), (m = e), (f = t.apply(n, r));
      }
      function b(t) {
        var r = t - d;
        return void 0 === d || r >= e || r < 0 || (y && t - m >= u);
      }
      function _() {
        var t = i();
        if (b(t)) return x(t);
        p = setTimeout(
          _,
          (function (t) {
            var r = e - (t - d);
            return y ? l(r, u - (t - m)) : r;
          })(t)
        );
      }
      function x(t) {
        return (p = void 0), g && h ? E(t) : ((h = c = void 0), f);
      }
      function S() {
        var t = i(),
          r = b(t);
        if (((h = arguments), (c = this), (d = t), r)) {
          if (void 0 === p)
            return (function (t) {
              return (m = t), (p = setTimeout(_, e)), v ? E(t) : f;
            })(d);
          if (y) return clearTimeout(p), (p = setTimeout(_, e)), E(d);
        }
        return void 0 === p && (p = setTimeout(_, e)), f;
      }
      return (
        (e = a(e) || 0),
        n(r) &&
          ((v = !!r.leading),
          (u = (y = 'maxWait' in r) ? o(a(r.maxWait) || 0, e) : u),
          (g = 'trailing' in r ? !!r.trailing : g)),
        (S.cancel = function () {
          void 0 !== p && clearTimeout(p), (m = 0), (h = d = c = p = void 0);
        }),
        (S.flush = function () {
          return void 0 === p ? f : x(i());
        }),
        S
      );
    };
  },
  function (t, e, r) {
    var n = r(18);
    t.exports = function () {
      return n.Date.now();
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(3)(r(57));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setStyle = function (t, e, r) {
        t.style[e] = r;
      }),
      (e.getStyle = function (t, e) {
        return t.style[e];
      }),
      (e.getProperty = function (t, e) {
        return t[e];
      }),
      (e.matchSelector = function (t) {
        return function (e) {
          return e[s](t);
        };
      }),
      (e.getQuerySelector = function (t) {
        var e = t.id,
          r = t.selector;
        if (e) {
          var n = e;
          if (-1 !== e.indexOf(l)) {
            var i = e.split(l),
              a = i[0];
            if (((n = i[1]), a !== document.documentElement.getAttribute(u))) return null;
          }
          return '[data-w-id="'.concat(n, '"], [data-w-id^="').concat(n, '_instance"]');
        }
        return r;
      }),
      (e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(u)) return document;
        return null;
      }),
      (e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + ' ' + e : t));
      }),
      (e.elementContains = function (t, e) {
        return t.contains(e);
      }),
      (e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode;
      }),
      (e.getChildElements = function (t) {
        for (var e = [], r = 0, n = (t || []).length; r < n; r++) {
          var i = t[r].children,
            a = i.length;
          if (a) for (var s = 0; s < a; s++) e.push(i[s]);
        }
        return e;
      }),
      (e.getSiblingElements = function () {
        for (
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = [],
            r = [],
            n = 0,
            i = t.length;
          n < i;
          n++
        ) {
          var a = t[n].parentNode;
          if (a && a.children && a.children.length && -1 === r.indexOf(a)) {
            r.push(a);
            for (var s = a.firstElementChild; null != s; )
              -1 === t.indexOf(s) && e.push(s), (s = s.nextElementSibling);
          }
        }
        return e;
      }),
      (e.getRefType = function (t) {
        if (null != t && 'object' == (0, n.default)(t)) return t instanceof Element ? h : c;
        return null;
      }),
      (e.getClosestElement = void 0);
    var i = r(44),
      a = r(13),
      s = i.IX2BrowserSupport.ELEMENT_MATCHES,
      o = a.IX2EngineConstants,
      l = o.IX2_ID_DELIMITER,
      h = o.HTML_ELEMENT,
      c = o.PLAIN_OBJECT,
      u = o.WF_PAGE;
    var f = Element.prototype.closest
      ? function (t, e) {
          return document.documentElement.contains(t) ? t.closest(e) : null;
        }
      : function (t, e) {
          if (!document.documentElement.contains(t)) return null;
          var r = t;
          do {
            if (r[s] && r[s](e)) return r;
            r = r.parentNode;
          } while (null != r);
          return null;
        };
    e.getClosestElement = f;
  },
  function (t, e, r) {
    'use strict';
    var n,
      i = r(3),
      a = i(r(37)),
      s = i(r(57)),
      o = r(3);
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var l,
      h,
      c,
      u = o(r(45)),
      f = o(r(440)),
      p = o(r(90)),
      d = o(r(459)),
      m = r(13),
      v = r(185),
      y = r(120),
      g = r(44),
      E = m.EventTypeConsts,
      b = E.MOUSE_CLICK,
      _ = E.MOUSE_SECOND_CLICK,
      x = E.MOUSE_DOWN,
      S = E.MOUSE_UP,
      T = E.MOUSE_OVER,
      I = E.MOUSE_OUT,
      A = E.DROPDOWN_CLOSE,
      P = E.DROPDOWN_OPEN,
      w = E.SLIDER_ACTIVE,
      C = E.SLIDER_INACTIVE,
      D = E.TAB_ACTIVE,
      M = E.TAB_INACTIVE,
      O = E.NAVBAR_CLOSE,
      F = E.NAVBAR_OPEN,
      k = E.MOUSE_MOVE,
      R = E.PAGE_SCROLL_DOWN,
      L = E.SCROLL_INTO_VIEW,
      N = E.SCROLL_OUT_OF_VIEW,
      V = E.PAGE_SCROLL_UP,
      B = E.SCROLLING_IN_VIEW,
      G = E.PAGE_FINISH,
      j = E.ECOMMERCE_CART_CLOSE,
      z = E.ECOMMERCE_CART_OPEN,
      H = E.PAGE_START,
      X = E.PAGE_SCROLL,
      W = 'COMPONENT_ACTIVE',
      U = 'COMPONENT_INACTIVE',
      q = m.IX2EngineConstants.COLON_DELIMITER,
      Y = g.IX2VanillaUtils.getNamespacedParameterId,
      K = function (t) {
        return function (e) {
          return !('object' !== (0, s.default)(e) || !t(e)) || e;
        };
      },
      Q = K(function (t) {
        return t.element === t.nativeEvent.target;
      }),
      $ = K(function (t) {
        var e = t.element,
          r = t.nativeEvent;
        return e.contains(r.target);
      }),
      Z = (0, f.default)([Q, $]),
      J = function (t, e) {
        if (e) {
          var r = t.getState().ixData.events[e];
          if (r && !st[r.eventTypeId]) return r;
        }
        return null;
      },
      tt = function (t, e) {
        var r = t.store,
          n = t.event,
          i = t.element,
          a = t.eventStateKey,
          s = n.action,
          o = n.id,
          l = s.config,
          h = l.actionListId,
          c = l.autoStopEventId,
          u = J(r, c);
        return (
          u &&
            (0, v.stopActionGroup)({
              store: r,
              eventId: c,
              eventTarget: i,
              eventStateKey: c + q + a.split(q)[1],
              actionListId: (0, p.default)(u, 'action.config.actionListId'),
            }),
          (0, v.stopActionGroup)({
            store: r,
            eventId: o,
            eventTarget: i,
            eventStateKey: a,
            actionListId: h,
          }),
          (0, v.startActionGroup)({
            store: r,
            eventId: o,
            eventTarget: i,
            eventStateKey: a,
            actionListId: h,
          }),
          e
        );
      },
      et = function (t, e) {
        return function (r, n) {
          return !0 === t(r, n) ? e(r, n) : n;
        };
      },
      rt = { handler: et(Z, tt) },
      nt = (0, u.default)({}, rt, { types: [W, U].join(' ') }),
      it = [
        { target: window, types: 'resize orientationchange', throttle: !0 },
        { target: document, types: 'scroll wheel readystatechange IX2_PAGE_UPDATE', throttle: !0 },
      ],
      at = { types: it },
      st = { PAGE_START: H, PAGE_FINISH: G },
      ot =
        ((l = void 0 !== window.pageXOffset),
        (h = 'CSS1Compat' === document.compatMode ? document.documentElement : document.body),
        function () {
          return {
            scrollLeft: l ? window.pageXOffset : h.scrollLeft,
            scrollTop: l ? window.pageYOffset : h.scrollTop,
            stiffScrollTop: (0, d.default)(
              l ? window.pageYOffset : h.scrollTop,
              0,
              h.scrollHeight - window.innerHeight
            ),
            scrollWidth: h.scrollWidth,
            scrollHeight: h.scrollHeight,
            clientWidth: h.clientWidth,
            clientHeight: h.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          };
        }),
      lt = function (t) {
        var e = t.element,
          r = t.nativeEvent,
          n = r.type,
          i = r.target,
          a = r.relatedTarget,
          s = e.contains(i);
        if ('mouseover' === n && s) return !0;
        var o = e.contains(a);
        return !('mouseout' !== n || !s || !o);
      },
      ht = function (t) {
        var e,
          r,
          n = t.element,
          i = t.event.config,
          a = ot(),
          s = a.clientWidth,
          o = a.clientHeight,
          l = i.scrollOffsetValue,
          h = 'PX' === i.scrollOffsetUnit ? l : (o * (l || 0)) / 100;
        return (
          (e = n.getBoundingClientRect()),
          (r = { left: 0, top: h, right: s, bottom: o - h }),
          !(e.left > r.right || e.right < r.left || e.top > r.bottom || e.bottom < r.top)
        );
      },
      ct = function (t) {
        return function (e, r) {
          var n = e.nativeEvent.type,
            i = -1 !== [W, U].indexOf(n) ? n === W : r.isActive,
            a = (0, u.default)({}, r, { isActive: i });
          return r && a.isActive === r.isActive ? a : t(e, a) || a;
        };
      },
      ut = function (t) {
        return function (e, r) {
          var n = { elementHovered: lt(e) };
          return ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) && t(e, n)) || n;
        };
      },
      ft = function (t) {
        return function (e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = ot(),
            i = n.stiffScrollTop,
            a = n.scrollHeight,
            s = n.innerHeight,
            o = e.event,
            l = o.config,
            h = o.eventTypeId,
            c = l.scrollOffsetValue,
            f = 'PX' === l.scrollOffsetUnit,
            p = a - s,
            d = Number((i / p).toFixed(2));
          if (r && r.percentTop === d) return r;
          var m,
            v,
            y = (f ? c : (s * (c || 0)) / 100) / p,
            g = 0;
          r && ((m = d > r.percentTop), (g = (v = r.scrollingDown !== m) ? d : r.anchorTop));
          var E = h === R ? d >= g + y : d <= g - y,
            b = (0, u.default)({}, r, {
              percentTop: d,
              inBounds: E,
              anchorTop: g,
              scrollingDown: m,
            });
          return (r && E && (v || b.inBounds !== r.inBounds) && t(e, b)) || b;
        };
      },
      pt = function (t) {
        return function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
            n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && t(e, n)) || n;
        };
      },
      dt = function () {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, u.default)({}, nt, {
          handler: et(
            t ? Z : Q,
            ct(function (t, e) {
              return e.isActive ? rt.handler(t, e) : e;
            })
          ),
        });
      },
      mt = function () {
        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, u.default)({}, nt, {
          handler: et(
            t ? Z : Q,
            ct(function (t, e) {
              return e.isActive ? e : rt.handler(t, e);
            })
          ),
        });
      },
      vt = (0, u.default)({}, at, {
        handler:
          ((c = function (t, e) {
            var r = e.elementVisible,
              n = t.event;
            return !t.store.getState().ixData.events[n.action.config.autoStopEventId] && e.triggered
              ? e
              : (n.eventTypeId === L) === r
              ? (tt(t), (0, u.default)({}, e, { triggered: !0 }))
              : e;
          }),
          function (t, e) {
            var r = (0, u.default)({}, e, { elementVisible: ht(t) });
            return ((e ? r.elementVisible !== e.elementVisible : r.elementVisible) && c(t, r)) || r;
          }),
      }),
      yt =
        ((n = {}),
        (0, a.default)(n, w, dt()),
        (0, a.default)(n, C, mt()),
        (0, a.default)(n, P, dt()),
        (0, a.default)(n, A, mt()),
        (0, a.default)(n, F, dt(!1)),
        (0, a.default)(n, O, mt(!1)),
        (0, a.default)(n, D, dt()),
        (0, a.default)(n, M, mt()),
        (0, a.default)(n, z, { types: 'ecommerce-cart-open', handler: et(Z, tt) }),
        (0, a.default)(n, j, { types: 'ecommerce-cart-close', handler: et(Z, tt) }),
        (0, a.default)(n, b, {
          types: 'click',
          handler: et(
            Z,
            pt(function (t, e) {
              var r,
                n,
                i,
                a = e.clickCount;
              (n = (r = t).store),
                (i = r.event.action.config.autoStopEventId),
                Boolean(J(n, i)) ? 1 === a && tt(t) : tt(t);
            })
          ),
        }),
        (0, a.default)(n, _, {
          types: 'click',
          handler: et(
            Z,
            pt(function (t, e) {
              2 === e.clickCount && tt(t);
            })
          ),
        }),
        (0, a.default)(n, x, (0, u.default)({}, rt, { types: 'mousedown' })),
        (0, a.default)(n, S, (0, u.default)({}, rt, { types: 'mouseup' })),
        (0, a.default)(n, T, {
          types: 'mouseover mouseout',
          handler: et(
            Z,
            ut(function (t, e) {
              e.elementHovered && tt(t);
            })
          ),
        }),
        (0, a.default)(n, I, {
          types: 'mouseover mouseout',
          handler: et(
            Z,
            ut(function (t, e) {
              e.elementHovered || tt(t);
            })
          ),
        }),
        (0, a.default)(n, k, {
          types: 'mousemove mouseout scroll',
          handler: function (t) {
            var e = t.store,
              r = t.element,
              n = t.eventConfig,
              i = t.nativeEvent,
              a = t.eventStateKey,
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              o = n.basedOn,
              l = n.selectedAxis,
              h = n.continuousParameterGroupId,
              c = n.reverse,
              u = n.restingState,
              f = void 0 === u ? 0 : u,
              p = i.clientX,
              d = void 0 === p ? s.clientX : p,
              v = i.clientY,
              g = void 0 === v ? s.clientY : v,
              E = i.pageX,
              b = void 0 === E ? s.pageX : E,
              _ = i.pageY,
              x = void 0 === _ ? s.pageY : _,
              S = 'X_AXIS' === l,
              T = 'mouseout' === i.type,
              I = f / 100,
              A = h,
              P = !1;
            switch (o) {
              case m.EventBasedOn.VIEWPORT:
                I = S
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(g, window.innerHeight) / window.innerHeight;
                break;
              case m.EventBasedOn.PAGE:
                var w = ot(),
                  C = w.scrollLeft,
                  D = w.scrollTop,
                  M = w.scrollWidth,
                  O = w.scrollHeight;
                I = S ? Math.min(C + b, M) / M : Math.min(D + x, O) / O;
                break;
              case m.EventBasedOn.ELEMENT:
              default:
                A = Y(a, h);
                var F = 0 === i.type.indexOf('mouse');
                if (F && !0 !== Z({ element: r, nativeEvent: i })) break;
                var k = r.getBoundingClientRect(),
                  R = k.left,
                  L = k.top,
                  N = k.width,
                  V = k.height;
                if (
                  !F &&
                  !(function (t, e) {
                    return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom;
                  })({ left: d, top: g }, k)
                )
                  break;
                (P = !0), (I = S ? (d - R) / N : (g - L) / V);
            }
            return (
              T && (I > 0.95 || I < 0.05) && (I = Math.round(I)),
              (o !== m.EventBasedOn.ELEMENT || P || P !== s.elementHovered) &&
                ((I = c ? 1 - I : I), e.dispatch((0, y.parameterChanged)(A, I))),
              { elementHovered: P, clientX: d, clientY: g, pageX: b, pageY: x }
            );
          },
        }),
        (0, a.default)(n, X, {
          types: it,
          handler: function (t) {
            var e = t.store,
              r = t.eventConfig,
              n = r.continuousParameterGroupId,
              i = r.reverse,
              a = ot(),
              s = a.scrollTop / (a.scrollHeight - a.clientHeight);
            (s = i ? 1 - s : s), e.dispatch((0, y.parameterChanged)(n, s));
          },
        }),
        (0, a.default)(n, B, {
          types: it,
          handler: function (t) {
            var e = t.element,
              r = t.store,
              n = t.eventConfig,
              i = t.eventStateKey,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              s = ot(),
              o = s.scrollLeft,
              l = s.scrollTop,
              h = s.scrollWidth,
              c = s.scrollHeight,
              u = s.clientHeight,
              f = n.basedOn,
              p = n.selectedAxis,
              d = n.continuousParameterGroupId,
              v = n.startsEntering,
              g = n.startsExiting,
              E = n.addEndOffset,
              b = n.addStartOffset,
              _ = n.addOffsetValue,
              x = void 0 === _ ? 0 : _,
              S = n.endOffsetValue,
              T = void 0 === S ? 0 : S,
              I = 'X_AXIS' === p;
            if (f === m.EventBasedOn.VIEWPORT) {
              var A = I ? o / h : l / c;
              return (
                A !== a.scrollPercent && r.dispatch((0, y.parameterChanged)(d, A)),
                { scrollPercent: A }
              );
            }
            var P = Y(i, d),
              w = e.getBoundingClientRect(),
              C = (b ? x : 0) / 100,
              D = (E ? T : 0) / 100;
            (C = v ? C : 1 - C), (D = g ? D : 1 - D);
            var M = w.top + Math.min(w.height * C, u),
              O = w.top + w.height * D - M,
              F = Math.min(u + O, c),
              k = Math.min(Math.max(0, u - M), F) / F;
            return (
              k !== a.scrollPercent && r.dispatch((0, y.parameterChanged)(P, k)),
              { scrollPercent: k }
            );
          },
        }),
        (0, a.default)(n, L, vt),
        (0, a.default)(n, N, vt),
        (0, a.default)(
          n,
          R,
          (0, u.default)({}, at, {
            handler: ft(function (t, e) {
              e.scrollingDown && tt(t);
            }),
          })
        ),
        (0, a.default)(
          n,
          V,
          (0, u.default)({}, at, {
            handler: ft(function (t, e) {
              e.scrollingDown || tt(t);
            }),
          })
        ),
        (0, a.default)(n, G, {
          types: 'readystatechange IX2_PAGE_UPDATE',
          handler: et(
            Q,
            (function (t) {
              return function (e, r) {
                var n = { finished: 'complete' === document.readyState };
                return !n.finished || (r && r.finshed) || t(e), n;
              };
            })(tt)
          ),
        }),
        (0, a.default)(n, H, {
          types: 'readystatechange IX2_PAGE_UPDATE',
          handler: et(
            Q,
            (function (t) {
              return function (e, r) {
                return r || t(e), { started: !0 };
              };
            })(tt)
          ),
        }),
        n);
    e.default = yt;
  },
  function (t, e, r) {
    var n = r(441)();
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(121),
      i = r(442),
      a = r(189),
      s = r(190),
      o = r(10),
      l = r(455),
      h = 'Expected a function',
      c = 8,
      u = 32,
      f = 128,
      p = 256;
    t.exports = function (t) {
      return i(function (e) {
        var r = e.length,
          i = r,
          d = n.prototype.thru;
        for (t && e.reverse(); i--; ) {
          var m = e[i];
          if ('function' != typeof m) throw new TypeError(h);
          if (d && !v && 'wrapper' == s(m)) var v = new n([], !0);
        }
        for (i = v ? i : r; ++i < r; ) {
          m = e[i];
          var y = s(m),
            g = 'wrapper' == y ? a(m) : void 0;
          v =
            g && l(g[0]) && g[1] == (f | c | u | p) && !g[4].length && 1 == g[9]
              ? v[s(g[0])].apply(v, g[3])
              : 1 == m.length && l(m)
              ? v[y]()
              : v.thru(m);
        }
        return function () {
          var t = arguments,
            n = t[0];
          if (v && 1 == t.length && o(n)) return v.plant(n).value();
          for (var i = 0, a = r ? e[i].apply(this, t) : n; ++i < r; ) a = e[i].call(this, a);
          return a;
        };
      });
    };
  },
  function (t, e, r) {
    var n = r(443),
      i = r(446),
      a = r(448);
    t.exports = function (t) {
      return a(i(t, void 0, n), t + '');
    };
  },
  function (t, e, r) {
    var n = r(444);
    t.exports = function (t) {
      return null != t && t.length ? n(t, 1) : [];
    };
  },
  function (t, e, r) {
    var n = r(82),
      i = r(445);
    t.exports = function t(e, r, a, s, o) {
      var l = -1,
        h = e.length;
      for (a || (a = i), o || (o = []); ++l < h; ) {
        var c = e[l];
        r > 0 && a(c) ? (r > 1 ? t(c, r - 1, a, s, o) : n(o, c)) : s || (o[o.length] = c);
      }
      return o;
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = r(64),
      a = r(10),
      s = n ? n.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return a(t) || i(t) || !!(s && t && t[s]);
    };
  },
  function (t, e, r) {
    var n = r(447),
      i = Math.max;
    t.exports = function (t, e, r) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (var a = arguments, s = -1, o = i(a.length - e, 0), l = Array(o); ++s < o; )
            l[s] = a[e + s];
          s = -1;
          for (var h = Array(e + 1); ++s < e; ) h[s] = a[s];
          return (h[e] = r(l)), n(t, this, h);
        }
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    };
  },
  function (t, e, r) {
    var n = r(449),
      i = r(451)(n);
    t.exports = i;
  },
  function (t, e, r) {
    var n = r(450),
      i = r(187),
      a = r(93),
      s = i
        ? function (t, e) {
            return i(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: n(e),
              writable: !0,
            });
          }
        : a;
    t.exports = s;
  },
  function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, e) {
    var r = 800,
      n = 16,
      i = Date.now;
    t.exports = function (t) {
      var e = 0,
        a = 0;
      return function () {
        var s = i(),
          o = n - (s - a);
        if (((a = s), o > 0)) {
          if (++e >= r) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function (t, e, r) {
    var n = r(139),
      i = n && new n();
    t.exports = i;
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(123),
      i = r(189),
      a = r(190),
      s = r(456);
    t.exports = function (t) {
      var e = a(t),
        r = s[e];
      if ('function' != typeof r || !(e in n.prototype)) return !1;
      if (t === r) return !0;
      var o = i(r);
      return !!o && t === o[0];
    };
  },
  function (t, e, r) {
    var n = r(123),
      i = r(121),
      a = r(122),
      s = r(10),
      o = r(30),
      l = r(457),
      h = Object.prototype.hasOwnProperty;
    function c(t) {
      if (o(t) && !s(t) && !(t instanceof n)) {
        if (t instanceof i) return t;
        if (h.call(t, '__wrapped__')) return l(t);
      }
      return new i(t);
    }
    (c.prototype = a.prototype), (c.prototype.constructor = c), (t.exports = c);
  },
  function (t, e, r) {
    var n = r(123),
      i = r(121),
      a = r(458);
    t.exports = function (t) {
      if (t instanceof n) return t.clone();
      var e = new i(t.__wrapped__, t.__chain__);
      return (
        (e.__actions__ = a(t.__actions__)),
        (e.__index__ = t.__index__),
        (e.__values__ = t.__values__),
        e
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var r = -1,
        n = t.length;
      for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
      return e;
    };
  },
  function (t, e, r) {
    var n = r(460),
      i = r(94);
    t.exports = function (t, e, r) {
      return (
        void 0 === r && ((r = e), (e = void 0)),
        void 0 !== r && (r = (r = i(r)) == r ? r : 0),
        void 0 !== e && (e = (e = i(e)) == e ? e : 0),
        n(i(t), e, r)
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      return (
        t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== e && (t = t >= e ? t : e)), t
      );
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(22);
    n.define(
      'links',
      (t.exports = function (t, e) {
        var r,
          i,
          a,
          s = {},
          o = t(window),
          l = n.env(),
          h = window.location,
          c = document.createElement('a'),
          u = 'w--current',
          f = /index\.(html|php)$/,
          p = /\/$/;
        function d(e) {
          var n = (r && e.getAttribute('href-disabled')) || e.getAttribute('href');
          if (((c.href = n), !(n.indexOf(':') >= 0))) {
            var s = t(e);
            if (c.hash.length > 1 && c.host + c.pathname === h.host + h.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(c.hash)) return;
              var o = t(c.hash);
              o.length && i.push({ link: s, sec: o, active: !1 });
            } else if ('#' !== n && '' !== n) {
              var l = c.href === h.href || n === a || (f.test(n) && p.test(a));
              v(s, u, l);
            }
          }
        }
        function m() {
          var t = o.scrollTop(),
            r = o.height();
          e.each(i, function (e) {
            var n = e.link,
              i = e.sec,
              a = i.offset().top,
              s = i.outerHeight(),
              o = 0.5 * r,
              l = i.is(':visible') && a + s - o >= t && a + o <= t + r;
            e.active !== l && ((e.active = l), v(n, u, l));
          });
        }
        function v(t, e, r) {
          var n = t.hasClass(e);
          (r && n) || ((r || n) && (r ? t.addClass(e) : t.removeClass(e)));
        }
        return (
          (s.ready =
            s.design =
            s.preview =
              function () {
                (r = l && n.env('design')),
                  (a = n.env('slug') || h.pathname || ''),
                  n.scroll.off(m),
                  (i = []);
                for (var t = document.links, e = 0; e < t.length; ++e) d(t[e]);
                i.length && (n.scroll.on(m), m());
              }),
          s
        );
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(22);
    n.define(
      'scroll',
      (t.exports = function (t) {
        var e = { WF_CLICK_EMPTY: 'click.wf-empty-link', WF_CLICK_SCROLL: 'click.wf-scroll' },
          r = window.location,
          i = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : window.history,
          a = t(window),
          s = t(document),
          o = t(document.body),
          l =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 15);
            },
          h = n.env('editor') ? '.w-editor-body' : 'body',
          c = 'header, ' + h + ' > .header, ' + h + ' > .w-nav:not([data-no-scroll])',
          u = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ')',
          p = document.createElement('style');
        p.appendChild(
          document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}')
        );
        var d = /^#[a-zA-Z0-9][\w:.-]*$/;
        var m =
          'function' == typeof window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)');
        function v(t, e) {
          var r;
          switch (e) {
            case 'add':
              (r = t.attr('tabindex'))
                ? t.attr('data-wf-tabindex-swap', r)
                : t.attr('tabindex', '-1');
              break;
            case 'remove':
              (r = t.attr('data-wf-tabindex-swap'))
                ? (t.attr('tabindex', r), t.removeAttr('data-wf-tabindex-swap'))
                : t.removeAttr('tabindex');
          }
          t.toggleClass('wf-force-outline-none', 'add' === e);
        }
        function y(e) {
          var s = e.currentTarget;
          if (
            !(n.env('design') || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(s.className)))
          ) {
            var h,
              u =
                ((h = s),
                d.test(h.hash) && h.host + h.pathname === r.host + r.pathname ? s.hash : '');
            if ('' !== u) {
              var f = t(u);
              f.length &&
                (e && (e.preventDefault(), e.stopPropagation()),
                (function (t) {
                  if (
                    r.hash !== t &&
                    i &&
                    i.pushState &&
                    (!n.env.chrome || 'file:' !== r.protocol)
                  ) {
                    var e = i.state && i.state.hash;
                    e !== t && i.pushState({ hash: t }, '', t);
                  }
                })(u),
                window.setTimeout(
                  function () {
                    !(function (e, r) {
                      var n = a.scrollTop(),
                        i = (function (e) {
                          var r = t(c),
                            n = 'fixed' === r.css('position') ? r.outerHeight() : 0,
                            i = e.offset().top - n;
                          if ('mid' === e.data('scroll')) {
                            var s = a.height() - n,
                              o = e.outerHeight();
                            o < s && (i -= Math.round((s - o) / 2));
                          }
                          return i;
                        })(e);
                      if (n === i) return;
                      var s = (function (t, e, r) {
                          if (
                            'none' === document.body.getAttribute('data-wf-scroll-motion') ||
                            m.matches
                          )
                            return 0;
                          var n = 1;
                          return (
                            o.add(t).each(function (t, e) {
                              var r = parseFloat(e.getAttribute('data-scroll-time'));
                              !isNaN(r) && r >= 0 && (n = r);
                            }),
                            (472.143 * Math.log(Math.abs(e - r) + 125) - 2e3) * n
                          );
                        })(e, n, i),
                        h = Date.now();
                      l(function t() {
                        var e = Date.now() - h;
                        window.scroll(
                          0,
                          (function (t, e, r, n) {
                            return r > n
                              ? e
                              : t +
                                  (e - t) *
                                    ((i = r / n) < 0.5
                                      ? 4 * i * i * i
                                      : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                            var i;
                          })(n, i, e, s)
                        ),
                          e <= s ? l(t) : 'function' == typeof r && r();
                      });
                    })(f, function () {
                      v(f, 'add'), f.get(0).focus({ preventScroll: !0 }), v(f, 'remove');
                    });
                  },
                  e ? 0 : 300
                ));
            }
          }
        }
        return {
          ready: function () {
            var t = e.WF_CLICK_EMPTY,
              r = e.WF_CLICK_SCROLL;
            s.on(r, f, y),
              s.on(t, u, function (t) {
                t.preventDefault();
              }),
              document.head.insertBefore(p, document.head.firstChild);
          },
        };
      })
    );
  },
  function (t, e, r) {
    'use strict';
    r(22).define(
      'touch',
      (t.exports = function (t) {
        var e = {},
          r = window.getSelection;
        function n(e) {
          var n,
            i,
            a = !1,
            s = !1,
            o = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function l(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((a = !0), e ? ((s = !0), (n = e[0].clientX)) : (n = t.clientX), (i = n));
          }
          function h(e) {
            if (a) {
              if (s && 'mousemove' === e.type) return e.preventDefault(), void e.stopPropagation();
              var n = e.touches,
                l = n ? n[0].clientX : e.clientX,
                h = l - i;
              (i = l),
                Math.abs(h) > o &&
                  r &&
                  '' === String(r()) &&
                  (!(function (e, r, n) {
                    var i = t.Event(e, { originalEvent: r });
                    t(r.target).trigger(i, n);
                  })('swipe', e, { direction: h > 0 ? 'right' : 'left' }),
                  u());
            }
          }
          function c(t) {
            if (a)
              return (
                (a = !1),
                s && 'mouseup' === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void (s = !1))
                  : void 0
              );
          }
          function u() {
            a = !1;
          }
          e.addEventListener('touchstart', l, !1),
            e.addEventListener('touchmove', h, !1),
            e.addEventListener('touchend', c, !1),
            e.addEventListener('touchcancel', u, !1),
            e.addEventListener('mousedown', l, !1),
            e.addEventListener('mousemove', h, !1),
            e.addEventListener('mouseup', c, !1),
            e.addEventListener('mouseout', u, !1),
            (this.destroy = function () {
              e.removeEventListener('touchstart', l, !1),
                e.removeEventListener('touchmove', h, !1),
                e.removeEventListener('touchend', c, !1),
                e.removeEventListener('touchcancel', u, !1),
                e.removeEventListener('mousedown', l, !1),
                e.removeEventListener('mousemove', h, !1),
                e.removeEventListener('mouseup', c, !1),
                e.removeEventListener('mouseout', u, !1),
                (e = null);
            });
        }
        return (
          (t.event.special.tap = { bindType: 'click', delegateType: 'click' }),
          (e.init = function (e) {
            return (e = 'string' == typeof e ? t(e).get(0) : e) ? new n(e) : null;
          }),
          (e.instance = e.init(document)),
          e
        );
      })
    );
  },
  function (t, e, r) {
    'use strict';
    var n = r(3)(r(465)),
      i = r(22);
    i.define(
      'forms',
      (t.exports = function (t, e) {
        var r,
          a,
          s,
          o,
          l,
          h = {},
          c = t(document),
          u = window.location,
          f = window.XDomainRequest && !window.atob,
          p = '.w-form',
          d = /e(-)?mail/i,
          m = /^\S+@\S+$/,
          v = window.alert,
          y = i.env(),
          g = /list-manage[1-9]?.com/i,
          E = e.debounce(function () {
            v(
              'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
            );
          }, 100);
        function b(e, r) {
          var n = t(r),
            i = t.data(r, p);
          i || (i = t.data(r, p, { form: n })), _(i);
          var s = n.closest('div.w-form');
          (i.done = s.find('> .w-form-done')),
            (i.fail = s.find('> .w-form-fail')),
            (i.fileUploads = s.find('.w-file-upload')),
            i.fileUploads.each(function (e) {
              !(function (e, r) {
                if (!r.fileUploads || !r.fileUploads[e]) return;
                var n,
                  i = t(r.fileUploads[e]),
                  a = i.find('> .w-file-upload-default'),
                  s = i.find('> .w-file-upload-uploading'),
                  o = i.find('> .w-file-upload-success'),
                  h = i.find('> .w-file-upload-error'),
                  c = a.find('.w-file-upload-input'),
                  u = a.find('.w-file-upload-label'),
                  f = u.children(),
                  p = h.find('.w-file-upload-error-msg'),
                  d = o.find('.w-file-upload-file'),
                  m = o.find('.w-file-remove-link'),
                  v = d.find('.w-file-upload-file-name'),
                  g = p.attr('data-w-size-error'),
                  E = p.attr('data-w-type-error'),
                  b = p.attr('data-w-generic-error');
                if (y)
                  c.on('click', function (t) {
                    t.preventDefault();
                  }),
                    u.on('click', function (t) {
                      t.preventDefault();
                    }),
                    f.on('click', function (t) {
                      t.preventDefault();
                    });
                else {
                  m.on('click', function () {
                    c.removeAttr('data-value'), c.val(''), v.html(''), a.toggle(!0), o.toggle(!1);
                  }),
                    c.on('change', function (i) {
                      (n = i.target && i.target.files && i.target.files[0]) &&
                        (a.toggle(!1),
                        h.toggle(!1),
                        s.toggle(!0),
                        v.text(n.name),
                        P() || x(r),
                        (r.fileUploads[e].uploading = !0),
                        (function (e, r) {
                          var n = { name: e.name, size: e.size };
                          t.ajax({
                            type: 'POST',
                            url: l,
                            data: n,
                            dataType: 'json',
                            crossDomain: !0,
                          })
                            .done(function (t) {
                              r(null, t);
                            })
                            .fail(function (t) {
                              r(t);
                            });
                        })(n, I));
                    });
                  var S = u.outerHeight();
                  c.height(S), c.width(1);
                }
                function T(t) {
                  var n = t.responseJSON && t.responseJSON.msg,
                    i = b;
                  'string' == typeof n && 0 === n.indexOf('InvalidFileTypeError')
                    ? (i = E)
                    : 'string' == typeof n && 0 === n.indexOf('MaxFileSizeError') && (i = g),
                    p.text(i),
                    c.removeAttr('data-value'),
                    c.val(''),
                    s.toggle(!1),
                    a.toggle(!0),
                    h.toggle(!0),
                    (r.fileUploads[e].uploading = !1),
                    P() || _(r);
                }
                function I(e, r) {
                  if (e) return T(e);
                  var i = r.fileName,
                    a = r.postData,
                    s = r.fileId,
                    o = r.s3Url;
                  c.attr('data-value', s),
                    (function (e, r, n, i, a) {
                      var s = new FormData();
                      for (var o in r) s.append(o, r[o]);
                      s.append('file', n, i),
                        t
                          .ajax({ type: 'POST', url: e, data: s, processData: !1, contentType: !1 })
                          .done(function () {
                            a(null);
                          })
                          .fail(function (t) {
                            a(t);
                          });
                    })(o, a, n, i, A);
                }
                function A(t) {
                  if (t) return T(t);
                  s.toggle(!1),
                    o.css('display', 'inline-block'),
                    (r.fileUploads[e].uploading = !1),
                    P() || _(r);
                }
                function P() {
                  var t = (r.fileUploads && r.fileUploads.toArray()) || [];
                  return t.some(function (t) {
                    return t.uploading;
                  });
                }
              })(e, i);
            });
          var o = (i.action = n.attr('action'));
          (i.handler = null),
            (i.redirect = n.attr('data-redirect')),
            g.test(o) ? (i.handler = A) : o || (a ? (i.handler = I) : E());
        }
        function _(t) {
          var e = (t.btn = t.form.find(':input[type="submit"]'));
          (t.wait = t.btn.attr('data-wait') || null),
            (t.success = !1),
            e.prop('disabled', !1),
            t.label && e.val(t.label);
        }
        function x(t) {
          var e = t.btn,
            r = t.wait;
          e.prop('disabled', !0), r && ((t.label = e.val()), e.val(r));
        }
        function S(e, r) {
          var n = null;
          return (
            (r = r || {}),
            e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, a) {
              var s = t(a),
                o = s.attr('type'),
                l = s.attr('data-name') || s.attr('name') || 'Field ' + (i + 1),
                h = s.val();
              if ('checkbox' === o) h = s.is(':checked');
              else if ('radio' === o) {
                if (null === r[l] || 'string' == typeof r[l]) return;
                h = e.find('input[name="' + s.attr('name') + '"]:checked').val() || null;
              }
              'string' == typeof h && (h = t.trim(h)),
                (r[l] = h),
                (n =
                  n ||
                  (function (t, e, r, n) {
                    var i = null;
                    'password' === e
                      ? (i = 'Passwords cannot be submitted.')
                      : t.attr('required')
                      ? n
                        ? d.test(t.attr('type')) &&
                          (m.test(n) || (i = 'Please enter a valid email address for: ' + r))
                        : (i = 'Please fill out the required field: ' + r)
                      : 'g-recaptcha-response' !== r ||
                        n ||
                        (i = 'Please confirm youâ€™re not a robot.');
                    return i;
                  })(s, o, l, h));
            }),
            n
          );
        }
        h.ready =
          h.design =
          h.preview =
            function () {
              !(function () {
                (a = t('html').attr('data-wf-site')),
                  (o = 'https://webflow.com/api/v1/form/' + a),
                  f &&
                    o.indexOf('https://webflow.com') >= 0 &&
                    (o = o.replace('https://webflow.com', 'http://formdata.webflow.com'));
                if (((l = ''.concat(o, '/signFile')), !(r = t(p + ' form')).length)) return;
                r.each(b);
              })(),
                y ||
                  s ||
                  (function () {
                    (s = !0),
                      c.on('submit', p + ' form', function (e) {
                        var r = t.data(this, p);
                        r.handler && ((r.evt = e), r.handler(r));
                      });
                    var e = [
                      ['checkbox', '.w-checkbox-input'],
                      ['radio', '.w-radio-input'],
                    ];
                    c.on(
                      'change',
                      p + ' form input[type="checkbox"]:not(.w-checkbox-input)',
                      function (e) {
                        t(e.target)
                          .siblings('.w-checkbox-input')
                          .toggleClass('w--redirected-checked');
                      }
                    ),
                      c.on('change', p + ' form input[type="radio"]', function (e) {
                        t(
                          'input[name="'
                            .concat(e.target.name, '"]:not(')
                            .concat('.w-checkbox-input', ')')
                        ).map(function (e, r) {
                          return t(r)
                            .siblings('.w-radio-input')
                            .removeClass('w--redirected-checked');
                        });
                        var r = t(e.target);
                        r.hasClass('w-radio-input') ||
                          r.siblings('.w-radio-input').addClass('w--redirected-checked');
                      }),
                      e.forEach(function (e) {
                        var r = (0, n.default)(e, 2),
                          i = r[0],
                          a = r[1];
                        c.on(
                          'focus',
                          p + ' form input[type="'.concat(i, '"]:not(') + a + ')',
                          function (e) {
                            t(e.target).siblings(a).addClass('w--redirected-focus');
                          }
                        ),
                          c.on(
                            'blur',
                            p + ' form input[type="'.concat(i, '"]:not(') + a + ')',
                            function (e) {
                              t(e.target).siblings(a).removeClass('w--redirected-focus');
                            }
                          );
                      });
                  })();
            };
        var T = { _mkto_trk: 'marketo' };
        function I(e) {
          _(e);
          var r = e.form,
            n = {
              name: r.attr('data-name') || r.attr('name') || 'Untitled Form',
              source: u.href,
              test: i.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(r.html()),
              trackingCookies: document.cookie.split('; ').reduce(function (t, e) {
                var r = e.split('='),
                  n = r[0];
                if (n in T) {
                  var i = T[n],
                    a = r.slice(1).join('=');
                  t[i] = a;
                }
                return t;
              }, {}),
            };
          w(e);
          var s = S(r, n.fields);
          if (s) return v(s);
          (n.fileUploads = (function (e) {
            var r = {};
            return (
              e.find(':input[type="file"]').each(function (e, n) {
                var i = t(n),
                  a = i.attr('data-name') || i.attr('name') || 'File ' + (e + 1),
                  s = i.attr('data-value');
                'string' == typeof s && (s = t.trim(s)), (r[a] = s);
              }),
              r
            );
          })(r)),
            x(e),
            a
              ? t
                  .ajax({ url: o, type: 'POST', data: n, dataType: 'json', crossDomain: !0 })
                  .done(function (t) {
                    t && 200 === t.code && (e.success = !0), P(e);
                  })
                  .fail(function () {
                    P(e);
                  })
              : P(e);
        }
        function A(r) {
          _(r);
          var n = r.form,
            i = {};
          if (!/^https/.test(u.href) || /^https/.test(r.action)) {
            w(r);
            var a,
              s = S(n, i);
            if (s) return v(s);
            x(r),
              e.each(i, function (t, e) {
                d.test(e) && (i.EMAIL = t),
                  /^((full[ _-]?)?name)$/i.test(e) && (a = t),
                  /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t),
                  /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
              }),
              a && !i.FNAME && ((a = a.split(' ')), (i.FNAME = a[0]), (i.LNAME = i.LNAME || a[1]));
            var o = r.action.replace('/post?', '/post-json?') + '&c=?',
              l = o.indexOf('u=') + 2;
            l = o.substring(l, o.indexOf('&', l));
            var h = o.indexOf('id=') + 3;
            (h = o.substring(h, o.indexOf('&', h))),
              (i['b_' + l + '_' + h] = ''),
              t
                .ajax({ url: o, data: i, dataType: 'jsonp' })
                .done(function (t) {
                  (r.success = 'success' === t.result || /already/.test(t.msg)),
                    r.success || console.info('MailChimp error: ' + t.msg),
                    P(r);
                })
                .fail(function () {
                  P(r);
                });
          } else n.attr('method', 'post');
        }
        function P(t) {
          var e = t.form,
            r = t.redirect,
            n = t.success;
          n && r ? i.location(r) : (t.done.toggle(n), t.fail.toggle(!n), e.toggle(!n), _(t));
        }
        function w(t) {
          t.evt && t.evt.preventDefault(), (t.evt = null);
        }
        return h;
      })
    );
  },
  function (t, e, r) {
    var n = r(466),
      i = r(467),
      a = r(468);
    t.exports = function (t, e) {
      return n(t) || i(t, e) || a();
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var r = [],
        n = !0,
        i = !1,
        a = void 0;
      try {
        for (
          var s, o = t[Symbol.iterator]();
          !(n = (s = o.next()).done) && (r.push(s.value), !e || r.length !== e);
          n = !0
        );
      } catch (t) {
        (i = !0), (a = t);
      } finally {
        try {
          n || null == o.return || o.return();
        } finally {
          if (i) throw a;
        }
      }
      return r;
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    };
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  events: {
    e: {
      id: 'e',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.section._2',
        originalId: '618840fee64ff65453508c37|2834e164-6d96-cf39-1269-3c25e1d9ffcf',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.section._2',
          originalId: '618840fee64ff65453508c37|2834e164-6d96-cf39-1269-3c25e1d9ffcf',
          appliesTo: 'CLASS',
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-p',
          smoothing: 50,
          startsEntering: false,
          addStartOffset: true,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1635845820315,
    },
    'e-2': {
      id: 'e-2',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.book_container',
        originalId: '618840fee64ff65453508c37|30159b97-adc1-5736-b6da-94c04ef49110',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.book_container',
          originalId: '618840fee64ff65453508c37|30159b97-adc1-5736-b6da-94c04ef49110',
          appliesTo: 'CLASS',
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-p',
          smoothing: 65,
          startsEntering: true,
          addStartOffset: true,
          addOffsetValue: 20,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1635847742645,
    },
    'e-9': {
      id: 'e-9',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-6',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-10',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.hero_book',
        originalId: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.hero_book',
          originalId: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1635865086123,
    },
    'e-11': {
      id: 'e-11',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-12' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.book_description-item',
        originalId: '618840fee64ff65453508c37|d8e468f2-2f88-e1e8-de08-a740c44af8f7',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.book_description-item',
          originalId: '618840fee64ff65453508c37|d8e468f2-2f88-e1e8-de08-a740c44af8f7',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1635891744871,
    },
    'e-13': {
      id: 'e-13',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-14' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.book_description-text',
        originalId: '618840fee64ff65453508c37|5c27d1c2-6b56-93f1-8301-551bf4a36ca3',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.book_description-text',
          originalId: '618840fee64ff65453508c37|5c27d1c2-6b56-93f1-8301-551bf4a36ca3',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1635891840523,
    },
    'e-17': {
      id: 'e-17',
      name: '',
      animationType: 'custom',
      eventTypeId: 'PAGE_FINISH',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-16',
        },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: { id: '618840fee64ff65453508c37', appliesTo: 'PAGE', styleBlockIds: [] },
      targets: [{ id: '618840fee64ff65453508c37', appliesTo: 'PAGE', styleBlockIds: [] }],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1636036043792,
    },
    'e-18': {
      id: 'e-18',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-9', affectedElements: {}, duration: 0 },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.hero_container',
        originalId: '618840fee64ff65453508c37|0be9fcf7-bc89-85ab-8170-93d5d2799389',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.hero_container',
          originalId: '618840fee64ff65453508c37|0be9fcf7-bc89-85ab-8170-93d5d2799389',
          appliesTo: 'CLASS',
        },
      ],
      config: [
        {
          continuousParameterGroupId: 'a-9-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1636045651477,
    },
    'e-19': {
      id: 'e-19',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-20' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.book_description-title',
        originalId: '618840fee64ff65453508c37|8553b5d8-2bbb-9c30-7154-7675997f64f0',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.book_description-title',
          originalId: '618840fee64ff65453508c37|8553b5d8-2bbb-9c30-7154-7675997f64f0',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1636063026348,
    },
    'e-21': {
      id: 'e-21',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-22' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.book_description-year',
        originalId: '618840fee64ff65453508c37|e6cad466-567f-0bcb-0dda-d2449c587283',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.book_description-year',
          originalId: '618840fee64ff65453508c37|e6cad466-567f-0bcb-0dda-d2449c587283',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1636063047255,
    },
    'e-23': {
      id: 'e-23',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'SLIDE_EFFECT',
        instant: false,
        config: { actionListId: 'slideInBottom', autoStopEventId: 'e-24' },
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.footer_text-wrap',
        originalId: '618840fee64ff65453508c37|8d3e2e34-88f8-62c9-fdb0-a341a73dd759',
        appliesTo: 'CLASS',
      },
      targets: [
        {
          selector: '.footer_text-wrap',
          originalId: '618840fee64ff65453508c37|8d3e2e34-88f8-62c9-fdb0-a341a73dd759',
          appliesTo: 'CLASS',
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: 'BOTTOM',
        effectIn: true,
      },
      createdOn: 1636407543960,
    },
  },
  actionLists: {
    a: {
      id: 'a',
      title: 'book animation',
      continuousParameterGroups: [
        {
          id: 'a-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    yValue: -150,
                    xUnit: 'PX',
                    yUnit: 'px',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-n-6',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: 'deg',
                    yUnit: 'deg',
                    zUnit: 'deg',
                  },
                },
                {
                  id: 'a-n-7',
                  actionTypeId: 'STYLE_FILTER',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    filters: [{ type: 'brightness', filterId: '45fd', value: 80, unit: '%' }],
                  },
                },
                {
                  id: 'a-n-10',
                  actionTypeId: 'STYLE_FILTER',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    filters: [{ type: 'saturate', filterId: 'e866', value: 75, unit: '%' }],
                  },
                },
                {
                  id: 'a-n-15',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.shadow',
                      selectorGuids: ['c46d43dc-320d-4473-0692-7ae460e30df5'],
                    },
                    value: 0,
                    unit: '',
                  },
                },
                {
                  id: 'a-n-17',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.shadow',
                      selectorGuids: ['c46d43dc-320d-4473-0692-7ae460e30df5'],
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 20,
              actionItems: [
                {
                  id: 'a-n',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: 'deg',
                    yUnit: 'deg',
                    zUnit: 'deg',
                  },
                },
                {
                  id: 'a-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    xValue: null,
                    yValue: 0,
                    xUnit: 'px',
                    yUnit: 'px',
                    zUnit: 'PX',
                  },
                },
                {
                  id: 'a-n-8',
                  actionTypeId: 'STYLE_FILTER',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    filters: [{ type: 'brightness', filterId: 'de08', value: 90, unit: '%' }],
                  },
                },
                {
                  id: 'a-n-11',
                  actionTypeId: 'STYLE_FILTER',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    filters: [{ type: 'saturate', filterId: '8d64', value: 75, unit: '%' }],
                  },
                },
                {
                  id: 'a-n-16',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.shadow',
                      selectorGuids: ['c46d43dc-320d-4473-0692-7ae460e30df5'],
                    },
                    value: 0,
                    unit: '',
                  },
                },
                {
                  id: 'a-n-19',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.shadow',
                      selectorGuids: ['c46d43dc-320d-4473-0692-7ae460e30df5'],
                    },
                    xValue: 0,
                    yValue: 0,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: 'a-n-3',
                  actionTypeId: 'TRANSFORM_ROTATE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    xValue: 15,
                    yValue: 26,
                    zValue: -12,
                    xUnit: 'deg',
                    yUnit: 'deg',
                    zUnit: 'deg',
                  },
                },
                {
                  id: 'a-n-9',
                  actionTypeId: 'STYLE_FILTER',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    filters: [{ type: 'brightness', filterId: '9fea', value: 100, unit: '%' }],
                  },
                },
                {
                  id: 'a-n-12',
                  actionTypeId: 'STYLE_FILTER',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    filters: [{ type: 'saturate', filterId: '357a', value: 100, unit: '%' }],
                  },
                },
                {
                  id: 'a-n-18',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.shadow',
                      selectorGuids: ['c46d43dc-320d-4473-0692-7ae460e30df5'],
                    },
                    value: 1,
                    unit: '',
                  },
                },
                {
                  id: 'a-n-20',
                  actionTypeId: 'TRANSFORM_SCALE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.shadow',
                      selectorGuids: ['c46d43dc-320d-4473-0692-7ae460e30df5'],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: 'a-n-13',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'px',
                    zUnit: 'PX',
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-n-14',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.book_object',
                      selectorGuids: ['22a94c3f-e0c9-0403-0ce7-7c6ec598ece7'],
                    },
                    yValue: 100,
                    xUnit: 'PX',
                    yUnit: 'px',
                    zUnit: 'PX',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1635845826965,
    },
    'a-6': {
      id: 'a-6',
      title: 'book click',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-6-n',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
                },
                xValue: 57,
                yValue: null,
                zValue: null,
                xUnit: 'deg',
                yUnit: 'deg',
                zUnit: 'deg',
              },
            },
            {
              id: 'a-6-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-6-n-2',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
                },
                xValue: null,
                yValue: 52,
                xUnit: 'deg',
                yUnit: 'deg',
                zUnit: 'DEG',
              },
            },
            {
              id: 'a-6-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: 'a-6-n-3',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '618840fee64ff65453508c37|27db7e67-0097-54c9-d27e-7ff6be015ebf',
                },
                xValue: 0,
                yValue: 0,
                zValue: 90,
                xUnit: 'deg',
                yUnit: 'deg',
                zUnit: 'deg',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1635865091455,
    },
    'a-8': {
      id: 'a-8',
      title: 'hero animation on page load',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-8-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '618840fee64ff65453508c37|f1126fe3-b938-f23f-2c8c-4f53da3806ab' },
                yValue: -200,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-32',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.lottie-wrap',
                  selectorGuids: ['0078ee50-02f2-155f-15c5-d174536b241f'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-8-n-22',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '618840fee64ff65453508c37|2834e164-6d96-cf39-1269-3c25e1d9ffd0' },
                yValue: 120,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-19',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero_info-item.is_25',
                  selectorGuids: [
                    '21828aa1-72c2-3d68-a899-33234882e4c1',
                    'ba141fce-a67e-1168-00d8-bc116e75d20d',
                  ],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-8-n-18',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero_info-item.is_25',
                  selectorGuids: [
                    '21828aa1-72c2-3d68-a899-33234882e4c1',
                    'ba141fce-a67e-1168-00d8-bc116e75d20d',
                  ],
                },
                xValue: 300,
                xUnit: 'px',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-16',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.anchors_wrapper',
                  selectorGuids: ['b9482693-a960-482b-6796-e0fa8844be11'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-8-n-14',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.anchors_wrapper',
                  selectorGuids: ['b9482693-a960-482b-6796-e0fa8844be11'],
                },
                xValue: -80,
                xUnit: 'px',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-9',
              actionTypeId: 'STYLE_FILTER',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero_sub-heading',
                  selectorGuids: ['1e1902a5-9b7e-1728-4f9e-a497b48d3372'],
                },
                filters: [{ type: 'blur', filterId: 'd481', value: 100, unit: 'px' }],
              },
            },
            {
              id: 'a-8-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero_sub-heading',
                  selectorGuids: ['1e1902a5-9b7e-1728-4f9e-a497b48d3372'],
                },
                value: 0,
                unit: '',
              },
            },
            {
              id: 'a-8-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.hero_sub-heading',
                  selectorGuids: ['1e1902a5-9b7e-1728-4f9e-a497b48d3372'],
                },
                yValue: 100,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-3',
              actionTypeId: 'STYLE_FILTER',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '618840fee64ff65453508c37|f1126fe3-b938-f23f-2c8c-4f53da3806ab' },
                filters: [{ type: 'blur', filterId: 'da90', value: 100, unit: 'px' }],
              },
            },
            {
              id: 'a-8-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: { id: '618840fee64ff65453508c37|f1126fe3-b938-f23f-2c8c-4f53da3806ab' },
                value: 0,
                unit: '',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: 'a-8-n-15',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'swingTo',
                duration: 1500,
                target: {
                  selector: '.anchors_wrapper',
                  selectorGuids: ['b9482693-a960-482b-6796-e0fa8844be11'],
                },
                xValue: 0,
                xUnit: 'px',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-21',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'swingTo',
                duration: 1500,
                target: {
                  selector: '.hero_info-item.is_25',
                  selectorGuids: [
                    '21828aa1-72c2-3d68-a899-33234882e4c1',
                    'ba141fce-a67e-1168-00d8-bc116e75d20d',
                  ],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-8-n-20',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'swingTo',
                duration: 1500,
                target: {
                  selector: '.hero_info-item.is_25',
                  selectorGuids: [
                    '21828aa1-72c2-3d68-a899-33234882e4c1',
                    'ba141fce-a67e-1168-00d8-bc116e75d20d',
                  ],
                },
                xValue: 0,
                xUnit: 'px',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-17',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'swingTo',
                duration: 1500,
                target: {
                  selector: '.anchors_wrapper',
                  selectorGuids: ['b9482693-a960-482b-6796-e0fa8844be11'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-8-n-23',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'swingTo',
                duration: 1500,
                target: { id: '618840fee64ff65453508c37|2834e164-6d96-cf39-1269-3c25e1d9ffd0' },
                yValue: -150,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-13',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 2000,
                target: {
                  selector: '.hero_sub-heading',
                  selectorGuids: ['1e1902a5-9b7e-1728-4f9e-a497b48d3372'],
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: '%',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 2000,
                target: { id: '618840fee64ff65453508c37|f1126fe3-b938-f23f-2c8c-4f53da3806ab' },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-8-n-6',
              actionTypeId: 'STYLE_FILTER',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 2000,
                target: { id: '618840fee64ff65453508c37|f1126fe3-b938-f23f-2c8c-4f53da3806ab' },
                filters: [{ type: 'blur', filterId: 'e8cb', value: 0, unit: 'px' }],
              },
            },
            {
              id: 'a-8-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 2000,
                target: { id: '618840fee64ff65453508c37|f1126fe3-b938-f23f-2c8c-4f53da3806ab' },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX',
              },
            },
            {
              id: 'a-8-n-11',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 2000,
                target: {
                  selector: '.hero_sub-heading',
                  selectorGuids: ['1e1902a5-9b7e-1728-4f9e-a497b48d3372'],
                },
                value: 1,
                unit: '',
              },
            },
            {
              id: 'a-8-n-12',
              actionTypeId: 'STYLE_FILTER',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 2000,
                target: {
                  selector: '.hero_sub-heading',
                  selectorGuids: ['1e1902a5-9b7e-1728-4f9e-a497b48d3372'],
                },
                filters: [{ type: 'blur', filterId: '5bdc', value: 0, unit: 'px' }],
              },
            },
            {
              id: 'a-8-n-33',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 0,
                target: {
                  selector: '.lottie-wrap',
                  selectorGuids: ['0078ee50-02f2-155f-15c5-d174536b241f'],
                },
                value: 0.05,
                unit: '',
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636036053689,
    },
    'a-9': {
      id: 'a-9',
      title: 'hero scroll down',
      continuousParameterGroups: [
        {
          id: 'a-9-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 56,
              actionItems: [
                {
                  id: 'a-9-n',
                  actionTypeId: 'STYLE_BACKGROUND_COLOR',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'PARENT',
                      selector: '.section_hero',
                      selectorGuids: ['3d2228d3-0a7a-318f-924f-a7789744e19f'],
                    },
                    globalSwatchId: 'aa0beb24',
                    rValue: 192,
                    bValue: 33,
                    gValue: 65,
                    aValue: 1,
                  },
                },
                {
                  id: 'a-9-n-3',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.hero_info-item.is_25',
                      selectorGuids: [
                        '21828aa1-72c2-3d68-a899-33234882e4c1',
                        'ba141fce-a67e-1168-00d8-bc116e75d20d',
                      ],
                    },
                    value: 1,
                    unit: '',
                  },
                },
                {
                  id: 'a-9-n-5',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'SIBLINGS',
                      selector: '.lottie-wrap',
                      selectorGuids: ['0078ee50-02f2-155f-15c5-d174536b241f'],
                    },
                    value: 0.05,
                    unit: '',
                  },
                },
              ],
            },
            {
              keyframe: 59,
              actionItems: [
                {
                  id: 'a-9-n-6',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'SIBLINGS',
                      selector: '.lottie-wrap',
                      selectorGuids: ['0078ee50-02f2-155f-15c5-d174536b241f'],
                    },
                    value: 0,
                    unit: '',
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: 'a-9-n-2',
                  actionTypeId: 'STYLE_BACKGROUND_COLOR',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'PARENT',
                      selector: '.section_hero',
                      selectorGuids: ['3d2228d3-0a7a-318f-924f-a7789744e19f'],
                    },
                    globalSwatchId: '2196f910',
                    rValue: 51,
                    bValue: 51,
                    gValue: 51,
                    aValue: 1,
                  },
                },
                {
                  id: 'a-9-n-4',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.hero_info-item.is_25',
                      selectorGuids: [
                        '21828aa1-72c2-3d68-a899-33234882e4c1',
                        'ba141fce-a67e-1168-00d8-bc116e75d20d',
                      ],
                    },
                    value: 0,
                    unit: '',
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1636063117728,
    },
    slideInBottom: {
      id: 'slideInBottom',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                duration: 0,
                target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
                xValue: 0,
                yValue: 100,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
                xValue: 0,
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX',
              },
            },
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: true },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: 'main', min: 992, max: 10000 },
      { key: 'medium', min: 768, max: 991 },
      { key: 'small', min: 480, max: 767 },
      { key: 'tiny', min: 0, max: 479 },
    ],
  },
});