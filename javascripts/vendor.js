// Make it safe to do console.log() always.
(function (con) {
  var method;
  var dummy = function() {};
  var methods = ('assert,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,' + 
     'time,timeEnd,trace,warn').split(',');
  while (method = methods.pop()) {
    con[method] = con[method] || dummy;
  }
})(window.console = window.console || {});
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e, t) {
  function _(e) {
    var t = M[e] = {};
    return v.each(e.split(y), function(e, n) {
      t[n] = !0
    }), t
  }
  function H(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      r = e.getAttribute(i);
      if (typeof r == "string") {
        try {
          r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
        } catch (s) {}
        v.data(e, n, r)
      } else r = t
    }
    return r
  }
  function B(e) {
    var t;
    for (t in e) {
      if (t === "data" && v.isEmptyObject(e[t])) continue;
      if (t !== "toJSON") return !1
    }
    return !0
  }
  function et() {
    return !1
  }
  function tt() {
    return !0
  }
  function ut(e) {
    return !e || !e.parentNode || e.parentNode.nodeType === 11
  }
  function at(e, t) {
    do e = e[t];
    while (e && e.nodeType !== 1);
    return e
  }
  function ft(e, t, n) {
    t = t || 0;
    if (v.isFunction(t)) return v.grep(e, function(e, r) {
      var i = !! t.call(e, r, e);
      return i === n
    });
    if (t.nodeType) return v.grep(e, function(e, r) {
      return e === t === n
    });
    if (typeof t == "string") {
      var r = v.grep(e, function(e) {
        return e.nodeType === 1
      });
      if (it.test(t)) return v.filter(t, r, !n);
      t = v.filter(t, r)
    }
    return v.grep(e, function(e, r) {
      return v.inArray(e, t) >= 0 === n
    })
  }
  function lt(e) {
    var t = ct.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n
  }
  function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
  }
  function At(e, t) {
    if (t.nodeType !== 1 || !v.hasData(e)) return;
    var n, r, i, s = v._data(e),
      o = v._data(t, s),
      u = s.events;
    if (u) {
      delete o.handle, o.events = {};
      for (n in u) for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
    }
    o.data && (o.data = v.extend({}, o.data))
  }
  function Ot(e, t) {
    var n;
    if (t.nodeType !== 1) return;
    t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
  }
  function Mt(e) {
    return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
  }
  function _t(e) {
    Et.test(e.type) && (e.defaultChecked = e.checked)
  }
  function Qt(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = Jt.length;
    while (i--) {
      t = Jt[i] + n;
      if (t in e) return t
    }
    return r
  }
  function Gt(e, t) {
    return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
  }
  function Yt(e, t) {
    var n, r, i = [],
      s = 0,
      o = e.length;
    for (; s < o; s++) {
      n = e[s];
      if (!n.style) continue;
      i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
    }
    for (s = 0; s < o; s++) {
      n = e[s];
      if (!n.style) continue;
      if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
    }
    return e
  }
  function Zt(e, t, n) {
    var r = Rt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
  }
  function en(e, t, n, r) {
    var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
      s = 0;
    for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
    return s
  }
  function tn(e, t, n) {
    var r = t === "width" ? e.offsetWidth : e.offsetHeight,
      i = !0,
      s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
    if (r <= 0 || r == null) {
      r = Dt(e, t);
      if (r < 0 || r == null) r = e.style[t];
      if (Ut.test(r)) return r;
      i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
  }
  function nn(e) {
    if (Wt[e]) return Wt[e];
    var t = v("<" + e + ">").appendTo(i.body),
      n = t.css("display");
    t.remove();
    if (n === "none" || n === "") {
      Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      }));
      if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
      t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
    }
    return Wt[e] = n, n
  }
  function fn(e, t, n, r) {
    var i;
    if (v.isArray(t)) v.each(t, function(t, i) {
      n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
    });
    else if (!n && v.type(t) === "object") for (i in t) fn(e + "[" + i + "]", t[i], n, r);
    else r(e, t)
  }
  function Cn(e) {
    return function(t, n) {
      typeof t != "string" && (n = t, t = "*");
      var r, i, s, o = t.toLowerCase().split(y),
        u = 0,
        a = o.length;
      if (v.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
    }
  }
  function kn(e, n, r, i, s, o) {
    s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
    var u, a = e[s],
      f = 0,
      l = a ? a.length : 0,
      c = e === Sn;
    for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
    return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
  }
  function Ln(e, n) {
    var r, i, s = v.ajaxSettings.flatOptions || {};
    for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
    i && v.extend(!0, e, i)
  }
  function An(e, n, r) {
    var i, s, o, u, a = e.contents,
      f = e.dataTypes,
      l = e.responseFields;
    for (s in l) s in r && (n[l[s]] = r[s]);
    while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
    if (i) for (s in a) if (a[s] && a[s].test(i)) {
      f.unshift(s);
      break
    }
    if (f[0] in r) o = f[0];
    else {
      for (s in r) {
        if (!f[0] || e.converters[s + " " + f[0]]) {
          o = s;
          break
        }
        u || (u = s)
      }
      o = o || u
    }
    if (o) return o !== f[0] && f.unshift(o), r[o]
  }
  function On(e, t) {
    var n, r, i, s, o = e.dataTypes.slice(),
      u = o[0],
      a = {},
      f = 0;
    e.dataFilter && (t = e.dataFilter(t, e.dataType));
    if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
    for (; i = o[++f];) if (i !== "*") {
      if (u !== "*" && u !== i) {
        n = a[u + " " + i] || a["* " + i];
        if (!n) for (r in a) {
          s = r.split(" ");
          if (s[1] === i) {
            n = a[u + " " + s[0]] || a["* " + s[0]];
            if (n) {
              n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
              break
            }
          }
        }
        if (n !== !0) if (n && e["throws"]) t = n(t);
        else try {
          t = n(t)
        } catch (l) {
          return {
            state: "parsererror",
            error: n ? l : "No conversion from " + u + " to " + i
          }
        }
      }
      u = i
    }
    return {
      state: "success",
      data: t
    }
  }
  function Fn() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {}
  }
  function In() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP")
    } catch (t) {}
  }
  function $n() {
    return setTimeout(function() {
      qn = t
    }, 0), qn = v.now()
  }
  function Jn(e, t) {
    v.each(t, function(t, n) {
      var r = (Vn[t] || []).concat(Vn["*"]),
        i = 0,
        s = r.length;
      for (; i < s; i++) if (r[i].call(e, t, n)) return
    })
  }
  function Kn(e, t, n) {
    var r, i = 0,
      s = 0,
      o = Xn.length,
      u = v.Deferred().always(function() {
        delete a.elem
      }),
      a = function() {
        var t = qn || $n(),
          n = Math.max(0, f.startTime + f.duration - t),
          r = n / f.duration || 0,
          i = 1 - r,
          s = 0,
          o = f.tweens.length;
        for (; s < o; s++) f.tweens[s].run(i);
        return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
      },
      f = u.promise({
        elem: e,
        props: v.extend({}, t),
        opts: v.extend(!0, {
          specialEasing: {}
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: qn || $n(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n, r) {
          var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
          return f.tweens.push(i), i
        },
        stop: function(t) {
          var n = 0,
            r = t ? f.tweens.length : 0;
          for (; n < r; n++) f.tweens[n].run(1);
          return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
        }
      }),
      l = f.props;
    Qn(l, f.opts.specialEasing);
    for (; i < o; i++) {
      r = Xn[i].call(f, e, l, f.opts);
      if (r) return r
    }
    return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
      anim: f,
      queue: f.opts.queue,
      elem: e
    })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
  }
  function Qn(e, t) {
    var n, r, i, s, o;
    for (n in e) {
      r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
      if (o && "expand" in o) {
        s = o.expand(s), delete e[r];
        for (n in s) n in e || (e[n] = s[n], t[n] = i)
      } else t[r] = i
    }
  }
  function Gn(e, t, n) {
    var r, i, s, o, u, a, f, l, c, h = this,
      p = e.style,
      d = {},
      m = [],
      g = e.nodeType && Gt(e);
    n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
      l.unqueued || c()
    }), l.unqueued++, h.always(function() {
      h.always(function() {
        l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
      })
    })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
    }));
    for (r in t) {
      s = t[r];
      if (Un.exec(s)) {
        delete t[r], a = a || s === "toggle";
        if (s === (g ? "hide" : "show")) continue;
        m.push(r)
      }
    }
    o = m.length;
    if (o) {
      u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
        v(e).hide()
      }), h.done(function() {
        var t;
        v.removeData(e, "fxshow", !0);
        for (t in d) v.style(e, t, d[t])
      });
      for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
    }
  }
  function Yn(e, t, n, r, i) {
    return new Yn.prototype.init(e, t, n, r, i)
  }
  function Zn(e, t) {
    var n, r = {
      height: e
    },
      i = 0;
    t = t ? 1 : 0;
    for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r
  }
  function tr(e) {
    return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
  }
  var n, r, i = e.document,
    s = e.location,
    o = e.navigator,
    u = e.jQuery,
    a = e.$,
    f = Array.prototype.push,
    l = Array.prototype.slice,
    c = Array.prototype.indexOf,
    h = Object.prototype.toString,
    p = Object.prototype.hasOwnProperty,
    d = String.prototype.trim,
    v = function(e, t) {
      return new v.fn.init(e, t, n)
    },
    m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    g = /\S/,
    y = /\s+/,
    b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    S = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    C = /^-ms-/,
    k = /-([\da-z])/gi,
    L = function(e, t) {
      return (t + "").toUpperCase()
    },
    A = function() {
      i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
    },
    O = {};
  v.fn = v.prototype = {
    constructor: v,
    init: function(e, n, r) {
      var s, o, u, a;
      if (!e) return this;
      if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
      if (typeof e == "string") {
        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
        if (s && (s[1] || !n)) {
          if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
          o = i.getElementById(s[2]);
          if (o && o.parentNode) {
            if (o.id !== s[2]) return r.find(e);
            this.length = 1, this[0] = o
          }
          return this.context = i, this.selector = e, this
        }
        return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
      }
      return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
    },
    selector: "",
    jquery: "1.8.3",
    length: 0,
    size: function() {
      return this.length
    },
    toArray: function() {
      return l.call(this)
    },
    get: function(e) {
      return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
    },
    pushStack: function(e, t, n) {
      var r = v.merge(this.constructor(), e);
      return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
    },
    each: function(e, t) {
      return v.each(this, e, t)
    },
    ready: function(e) {
      return v.ready.promise().done(e), this
    },
    eq: function(e) {
      return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    slice: function() {
      return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
    },
    map: function(e) {
      return this.pushStack(v.map(this, function(t, n) {
        return e.call(t, n, t)
      }))
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: [].sort,
    splice: [].splice
  }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
    var e, n, r, i, s, o, u = arguments[0] || {},
      a = 1,
      f = arguments.length,
      l = !1;
    typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
    for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
      r = u[n], i = e[n];
      if (u === i) continue;
      l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
    }
    return u
  }, v.extend({
    noConflict: function(t) {
      return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? v.readyWait++ : v.ready(!0)
    },
    ready: function(e) {
      if (e === !0 ? --v.readyWait : v.isReady) return;
      if (!i.body) return setTimeout(v.ready, 1);
      v.isReady = !0;
      if (e !== !0 && --v.readyWait > 0) return;
      r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
    },
    isFunction: function(e) {
      return v.type(e) === "function"
    },
    isArray: Array.isArray ||
    function(e) {
      return v.type(e) === "array"
    },
    isWindow: function(e) {
      return e != null && e == e.window
    },
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    type: function(e) {
      return e == null ? String(e) : O[h.call(e)] || "object"
    },
    isPlainObject: function(e) {
      if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
      try {
        if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
      } catch (n) {
        return !1
      }
      var r;
      for (r in e);
      return r === t || p.call(e, r)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    error: function(e) {
      throw new Error(e)
    },
    parseHTML: function(e, t, n) {
      var r;
      return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
    },
    parseJSON: function(t) {
      if (!t || typeof t != "string") return null;
      t = v.trim(t);
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
      if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
      v.error("Invalid JSON: " + t)
    },
    parseXML: function(n) {
      var r, i;
      if (!n || typeof n != "string") return null;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
      } catch (s) {
        r = t
      }
      return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
    },
    noop: function() {},
    globalEval: function(t) {
      t && g.test(t) && (e.execScript ||
      function(t) {
        e.eval.call(e, t)
      })(t)
    },
    camelCase: function(e) {
      return e.replace(C, "ms-").replace(k, L)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, n, r) {
      var i, s = 0,
        o = e.length,
        u = o === t || v.isFunction(e);
      if (r) {
        if (u) {
          for (i in e) if (n.apply(e[i], r) === !1) break
        } else for (; s < o;) if (n.apply(e[s++], r) === !1) break
      } else if (u) {
        for (i in e) if (n.call(e[i], i, e[i]) === !1) break
      } else for (; s < o;) if (n.call(e[s], s, e[s++]) === !1) break;
      return e
    },
    trim: d && !d.call("\ufeff\u00a0") ?
    function(e) {
      return e == null ? "" : d.call(e)
    } : function(e) {
      return e == null ? "" : (e + "").replace(b, "")
    },
    makeArray: function(e, t) {
      var n, r = t || [];
      return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (c) return c.call(t, e, n);
        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
        for (; n < r; n++) if (n in t && t[n] === e) return n
      }
      return -1
    },
    merge: function(e, n) {
      var r = n.length,
        i = e.length,
        s = 0;
      if (typeof r == "number") for (; s < r; s++) e[i++] = n[s];
      else while (n[s] !== t) e[i++] = n[s++];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      var r, i = [],
        s = 0,
        o = e.length;
      n = !! n;
      for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
      return i
    },
    map: function(e, n, r) {
      var i, s, o = [],
        u = 0,
        a = e.length,
        f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
      if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
      else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
      return o.concat.apply([], o)
    },
    guid: 1,
    proxy: function(e, n) {
      var r, i, s;
      return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
        return e.apply(n, i.concat(l.call(arguments)))
      }, s.guid = e.guid = e.guid || v.guid++, s) : t
    },
    access: function(e, n, r, i, s, o, u) {
      var a, f = r == null,
        l = 0,
        c = e.length;
      if (r && typeof r == "object") {
        for (l in r) v.access(e, n, l, r[l], 1, o, i);
        s = 1
      } else if (i !== t) {
        a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
          return a.call(v(e), n)
        }) : (n.call(e, i), n = null));
        if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
        s = 1
      }
      return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
    },
    now: function() {
      return (new Date).getTime()
    }
  }), v.ready.promise = function(t) {
    if (!r) {
      r = v.Deferred();
      if (i.readyState === "complete") setTimeout(v.ready, 1);
      else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
      else {
        i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
        var n = !1;
        try {
          n = e.frameElement == null && i.documentElement
        } catch (s) {}
        n && n.doScroll &&
        function o() {
          if (!v.isReady) {
            try {
              n.doScroll("left")
            } catch (e) {
              return setTimeout(o, 50)
            }
            v.ready()
          }
        }()
      }
    }
    return r.promise(t)
  }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
    O["[object " + t + "]"] = t.toLowerCase()
  }), n = v(i);
  var M = {};
  v.Callbacks = function(e) {
    e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
    var n, r, i, s, o, u, a = [],
      f = !e.once && [],
      l = function(t) {
        n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
        for (; a && u < o; u++) if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          n = !1;
          break
        }
        i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
      },
      c = {
        add: function() {
          if (a) {
            var t = a.length;
            (function r(t) {
              v.each(t, function(t, n) {
                var i = v.type(n);
                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
              })
            })(arguments), i ? o = a.length : n && (s = t, l(n))
          }
          return this
        },
        remove: function() {
          return a && v.each(arguments, function(e, t) {
            var n;
            while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
          }), this
        },
        has: function(e) {
          return v.inArray(e, a) > -1
        },
        empty: function() {
          return a = [], this
        },
        disable: function() {
          return a = f = n = t, this
        },
        disabled: function() {
          return !a
        },
        lock: function() {
          return f = t, n || c.disable(), this
        },
        locked: function() {
          return !f
        },
        fireWith: function(e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
        },
        fire: function() {
          return c.fireWith(this, arguments), this
        },
        fired: function() {
          return !!r
        }
      };
    return c
  }, v.extend({
    Deferred: function(e) {
      var t = [
        ["resolve", "done", v.Callbacks("once memory"), "resolved"],
        ["reject", "fail", v.Callbacks("once memory"), "rejected"],
        ["notify", "progress", v.Callbacks("memory")]
      ],
        n = "pending",
        r = {
          state: function() {
            return n
          },
          always: function() {
            return i.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return v.Deferred(function(n) {
              v.each(t, function(t, r) {
                var s = r[0],
                  o = e[t];
                i[r[1]](v.isFunction(o) ?
                function() {
                  var e = o.apply(this, arguments);
                  e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                } : n[s])
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return e != null ? v.extend(e, r) : r
          }
        },
        i = {};
      return r.pipe = r.then, v.each(t, function(e, s) {
        var o = s[2],
          u = s[3];
        r[s[1]] = o.add, u && o.add(function() {
          n = u
        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
      }), r.promise(i), e && e.call(i, i), i
    },
    when: function(e) {
      var t = 0,
        n = l.call(arguments),
        r = n.length,
        i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
        s = i === 1 ? e : v.Deferred(),
        o = function(e, t, n) {
          return function(r) {
            t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
          }
        },
        u, a, f;
      if (r > 1) {
        u = new Array(r), a = new Array(r), f = new Array(r);
        for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
      }
      return i || s.resolveWith(f, n), s.promise()
    }
  }), v.support = function() {
    var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
    p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
    if (!n || !r || !n.length) return {};
    s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
      leadingWhitespace: p.firstChild.nodeType === 3,
      tbody: !p.getElementsByTagName("tbody").length,
      htmlSerialize: !! p.getElementsByTagName("link").length,
      style: /top/.test(r.getAttribute("style")),
      hrefNormalized: r.getAttribute("href") === "/a",
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !! r.style.cssFloat,
      checkOn: u.value === "on",
      optSelected: o.selected,
      getSetAttribute: p.className !== "t",
      enctype: !! i.createElement("form").enctype,
      html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
      boxModel: i.compatMode === "CSS1Compat",
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
    try {
      delete p.test
    } catch (d) {
      t.deleteExpando = !1
    }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
      t.noCloneEvent = !1
    }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
    if (p.attachEvent) for (l in {
      submit: !0,
      change: !0,
      focusin: !0
    }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
    return v(function() {
      var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
        a = i.getElementsByTagName("body")[0];
      if (!a) return;
      n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
        width: "4px"
      }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
    }), a.removeChild(p), n = r = s = o = u = a = p = null, t
  }();
  var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    P = /([A-Z])/g;
  v.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function(e) {
      return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !! e && !B(e)
    },
    data: function(e, n, r, i) {
      if (!v.acceptData(e)) return;
      var s, o, u = v.expando,
        a = typeof n == "string",
        f = e.nodeType,
        l = f ? v.cache : e,
        c = f ? e[u] : e[u] && u;
      if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
      c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
      if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
      return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
    },
    removeData: function(e, t, n) {
      if (!v.acceptData(e)) return;
      var r, i, s, o = e.nodeType,
        u = o ? v.cache : e,
        a = o ? e[v.expando] : v.expando;
      if (!u[a]) return;
      if (t) {
        r = n ? u[a] : u[a].data;
        if (r) {
          v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
          for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
          if (!(n ? B : v.isEmptyObject)(r)) return
        }
      }
      if (!n) {
        delete u[a].data;
        if (!B(u[a])) return
      }
      o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
    },
    _data: function(e, t, n) {
      return v.data(e, t, n, !0)
    },
    acceptData: function(e) {
      var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t
    }
  }), v.fn.extend({
    data: function(e, n) {
      var r, i, s, o, u, a = this[0],
        f = 0,
        l = null;
      if (e === t) {
        if (this.length) {
          l = v.data(a);
          if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
            s = a.attributes;
            for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
            v._data(a, "parsedAttrs", !0)
          }
        }
        return l
      }
      return typeof e == "object" ? this.each(function() {
        v.data(this, e)
      }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
        if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
        r[1] = n, this.each(function() {
          var t = v(this);
          t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
        })
      }, null, n, arguments.length > 1, null, !1))
    },
    removeData: function(e) {
      return this.each(function() {
        v.removeData(this, e)
      })
    }
  }), v.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = v.queue(e, t),
        r = n.length,
        i = n.shift(),
        s = v._queueHooks(e, t),
        o = function() {
          v.dequeue(e, t)
        };
      i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return v._data(e, n) || v._data(e, n, {
        empty: v.Callbacks("once memory").add(function() {
          v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
        })
      })
    }
  }), v.fn.extend({
    queue: function(e, n) {
      var r = 2;
      return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
        var t = v.queue(this, e, n);
        v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        v.dequeue(this, e)
      })
    },
    delay: function(e, t) {
      return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r)
        }
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, n) {
      var r, i = 1,
        s = v.Deferred(),
        o = this,
        u = this.length,
        a = function() {
          --i || s.resolveWith(o, [o])
        };
      typeof e != "string" && (n = e, e = t), e = e || "fx";
      while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
      return a(), s.promise(n)
    }
  });
  var j, F, I, q = /[\t\r\n]/g,
    R = /\r/g,
    U = /^(?:button|input)$/i,
    z = /^(?:button|input|object|select|textarea)$/i,
    W = /^a(?:rea|)$/i,
    X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    V = v.support.getSetAttribute;
  v.fn.extend({
    attr: function(e, t) {
      return v.access(this, v.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        v.removeAttr(this, e)
      })
    },
    prop: function(e, t) {
      return v.access(this, v.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return e = v.propFix[e] || e, this.each(function() {
        try {
          this[e] = t, delete this[e]
        } catch (n) {}
      })
    },
    addClass: function(e) {
      var t, n, r, i, s, o, u;
      if (v.isFunction(e)) return this.each(function(t) {
        v(this).addClass(e.call(this, t, this.className))
      });
      if (e && typeof e == "string") {
        t = e.split(y);
        for (n = 0, r = this.length; n < r; n++) {
          i = this[n];
          if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e;
          else {
            s = " " + i.className + " ";
            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
            i.className = v.trim(s)
          }
        }
      }
      return this
    },
    removeClass: function(e) {
      var n, r, i, s, o, u, a;
      if (v.isFunction(e)) return this.each(function(t) {
        v(this).removeClass(e.call(this, t, this.className))
      });
      if (e && typeof e == "string" || e === t) {
        n = (e || "").split(y);
        for (u = 0, a = this.length; u < a; u++) {
          i = this[u];
          if (i.nodeType === 1 && i.className) {
            r = (" " + i.className + " ").replace(q, " ");
            for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
            i.className = e ? v.trim(r) : ""
          }
        }
      }
      return this
    },
    toggleClass: function(e, t) {
      var n = typeof e,
        r = typeof t == "boolean";
      return v.isFunction(e) ? this.each(function(n) {
        v(this).toggleClass(e.call(this, n, this.className, t), t)
      }) : this.each(function() {
        if (n === "string") {
          var i, s = 0,
            o = v(this),
            u = t,
            a = e.split(y);
          while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
        } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
      })
    },
    hasClass: function(e) {
      var t = " " + e + " ",
        n = 0,
        r = this.length;
      for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
      return !1
    },
    val: function(e) {
      var n, r, i, s = this[0];
      if (!arguments.length) {
        if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
        return
      }
      return i = v.isFunction(e), this.each(function(r) {
        var s, o = v(this);
        if (this.nodeType !== 1) return;
        i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
          return e == null ? "" : e + ""
        })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
        if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
      })
    }
  }), v.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text
        }
      },
      select: {
        get: function(e) {
          var t, n, r = e.options,
            i = e.selectedIndex,
            s = e.type === "select-one" || i < 0,
            o = s ? null : [],
            u = s ? i + 1 : r.length,
            a = i < 0 ? u : s ? i : 0;
          for (; a < u; a++) {
            n = r[a];
            if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
              t = v(n).val();
              if (s) return t;
              o.push(t)
            }
          }
          return o
        },
        set: function(e, t) {
          var n = v.makeArray(t);
          return v(e).find("option").each(function() {
            this.selected = v.inArray(v(this).val(), n) >= 0
          }), n.length || (e.selectedIndex = -1), n
        }
      }
    },
    attrFn: {},
    attr: function(e, n, r, i) {
      var s, o, u, a = e.nodeType;
      if (!e || a === 3 || a === 8 || a === 2) return;
      if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
      if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
      u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
      if (r !== t) {
        if (r === null) {
          v.removeAttr(e, n);
          return
        }
        return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
      }
      return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
    },
    removeAttr: function(e, t) {
      var n, r, i, s, o = 0;
      if (t && e.nodeType === 1) {
        r = t.split(y);
        for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
      }
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
          else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      },
      value: {
        get: function(e, t) {
          return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
        },
        set: function(e, t, n) {
          if (j && v.nodeName(e, "button")) return j.set(e, t, n);
          e.value = t
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function(e, n, r) {
      var i, s, o, u = e.nodeType;
      if (!e || u === 3 || u === 8 || u === 2) return;
      return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
        }
      }
    }
  }), F = {
    get: function(e, n) {
      var r, i = v.prop(e, n);
      return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
    },
    set: function(e, t, n) {
      var r;
      return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
    }
  }, V || (I = {
    name: !0,
    id: !0,
    coords: !0
  }, j = v.valHooks.button = {
    get: function(e, n) {
      var r;
      return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
    },
    set: function(e, t, n) {
      var r = e.getAttributeNode(n);
      return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
    }
  }, v.each(["width", "height"], function(e, t) {
    v.attrHooks[t] = v.extend(v.attrHooks[t], {
      set: function(e, n) {
        if (n === "") return e.setAttribute(t, "auto"), n
      }
    })
  }), v.attrHooks.contenteditable = {
    get: j.get,
    set: function(e, t, n) {
      t === "" && (t = "false"), j.set(e, t, n)
    }
  }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
    v.attrHooks[n] = v.extend(v.attrHooks[n], {
      get: function(e) {
        var r = e.getAttribute(n, 2);
        return r === null ? t : r
      }
    })
  }), v.support.style || (v.attrHooks.style = {
    get: function(e) {
      return e.style.cssText.toLowerCase() || t
    },
    set: function(e, t) {
      return e.style.cssText = t + ""
    }
  }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }
  })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
    v.valHooks[this] = {
      get: function(e) {
        return e.getAttribute("value") === null ? "on" : e.value
      }
    }
  }), v.each(["radio", "checkbox"], function() {
    v.valHooks[this] = v.extend(v.valHooks[this], {
      set: function(e, t) {
        if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
      }
    })
  });
  var $ = /^(?:textarea|input|select)$/i,
    J = /^([^\.]*|)(?:\.(.+)|)$/,
    K = /(?:^|\s)hover(\.\S+|)\b/,
    Q = /^key/,
    G = /^(?:mouse|contextmenu)|click/,
    Y = /^(?:focusinfocus|focusoutblur)$/,
    Z = function(e) {
      return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
    };
  v.event = {
    add: function(e, n, r, i, s) {
      var o, u, a, f, l, c, h, p, d, m, g;
      if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
      r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
        return typeof v == "undefined" || !! e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
      }, u.elem = e), n = v.trim(Z(n)).split(" ");
      for (f = 0; f < n.length; f++) {
        l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
          type: c,
          origType: l[1],
          data: i,
          handler: r,
          guid: r.guid,
          selector: s,
          needsContext: s && v.expr.match.needsContext.test(s),
          namespace: h.join(".")
        }, d), m = a[c];
        if (!m) {
          m = a[c] = [], m.delegateCount = 0;
          if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
        }
        g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
      }
      e = null
    },
    global: {},
    remove: function(e, t, n, r, i) {
      var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
      if (!g || !(h = g.events)) return;
      t = v.trim(Z(t || "")).split(" ");
      for (s = 0; s < t.length; s++) {
        o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
        if (!u) {
          for (u in h) v.event.remove(e, u + t[s], n, r, !0);
          continue
        }
        p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
        d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
      }
      v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0
    },
    trigger: function(n, r, s, o) {
      if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
        var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
          b = [];
        if (Y.test(y + v.event.triggered)) return;
        y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
        if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
        n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
        if (!s) {
          u = v.cache;
          for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
          return
        }
        n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
        if (p.trigger && p.trigger.apply(s, r) === !1) return;
        m = [
          [s, p.bindType || y]
        ];
        if (!o && !p.noBubble && !v.isWindow(s)) {
          g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
          for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
          c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
        }
        for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
        return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
      }
      return
    },
    dispatch: function(n) {
      n = v.event.fix(n || e.event);
      var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
        m = d.delegateCount,
        g = l.call(arguments),
        y = !n.exclusive && !n.namespace,
        b = v.event.special[n.type] || {},
        w = [];
      g[0] = n, n.delegateTarget = this;
      if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
      if (m && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
        u = {}, f = [];
        for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
        f.length && w.push({
          elem: s,
          matches: f
        })
      }
      d.length > m && w.push({
        elem: this,
        matches: d.slice(m)
      });
      for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
        a = w[r], n.currentTarget = a.elem;
        for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
          c = a.matches[i];
          if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
        }
      }
      return b.postDispatch && b.postDispatch.call(this, n), n.result
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, n) {
        var r, s, o, u = n.button,
          a = n.fromElement;
        return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[v.expando]) return e;
      var t, n, r = e,
        s = v.event.fixHooks[e.type] || {},
        o = s.props ? this.props.concat(s.props) : this.props;
      e = v.Event(r);
      for (t = o.length; t;) n = o[--t], e[n] = r[n];
      return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, r) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        delegateType: "focusin"
      },
      blur: {
        delegateType: "focusout"
      },
      beforeunload: {
        setup: function(e, t, n) {
          v.isWindow(this) && (this.onbeforeunload = n)
        },
        teardown: function(e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null)
        }
      }
    },
    simulate: function(e, t, n, r) {
      var i = v.extend(new v.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }
  }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ?
  function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  } : function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
  }, v.Event = function(e, t) {
    if (!(this instanceof v.Event)) return new v.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
  }, v.Event.prototype = {
    preventDefault: function() {
      this.isDefaultPrevented = tt;
      var e = this.originalEvent;
      if (!e) return;
      e.preventDefault ? e.preventDefault() : e.returnValue = !1
    },
    stopPropagation: function() {
      this.isPropagationStopped = tt;
      var e = this.originalEvent;
      if (!e) return;
      e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
    },
    stopImmediatePropagation: function() {
      this.isImmediatePropagationStopped = tt, this.stopPropagation()
    },
    isDefaultPrevented: et,
    isPropagationStopped: et,
    isImmediatePropagationStopped: et
  }, v.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function(e, t) {
    v.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this,
          i = e.relatedTarget,
          s = e.handleObj,
          o = s.selector;
        if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
        return n
      }
    }
  }), v.support.submitBubbles || (v.event.special.submit = {
    setup: function() {
      if (v.nodeName(this, "form")) return !1;
      v.event.add(this, "click._submit keypress._submit", function(e) {
        var n = e.target,
          r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
        r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
          e._submit_bubble = !0
        }), v._data(r, "_submit_attached", !0))
      })
    },
    postDispatch: function(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
    },
    teardown: function() {
      if (v.nodeName(this, "form")) return !1;
      v.event.remove(this, "._submit")
    }
  }), v.support.changeBubbles || (v.event.special.change = {
    setup: function() {
      if ($.test(this.nodeName)) {
        if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
          e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
        }), v.event.add(this, "click._change", function(e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
        });
        return !1
      }
      v.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
          this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
        }), v._data(t, "_change_attached", !0))
      })
    },
    handle: function(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
    },
    teardown: function() {
      return v.event.remove(this, "._change"), !$.test(this.nodeName)
    }
  }), v.support.focusinBubbles || v.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = 0,
      r = function(e) {
        v.event.simulate(t, e.target, v.event.fix(e), !0)
      };
    v.event.special[t] = {
      setup: function() {
        n++ === 0 && i.addEventListener(e, r, !0)
      },
      teardown: function() {
        --n === 0 && i.removeEventListener(e, r, !0)
      }
    }
  }), v.fn.extend({
    on: function(e, n, r, i, s) {
      var o, u;
      if (typeof e == "object") {
        typeof n != "string" && (r = r || n, n = t);
        for (u in e) this.on(u, n, r, e[u], s);
        return this
      }
      r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
      if (i === !1) i = et;
      else if (!i) return this;
      return s === 1 && (o = i, i = function(e) {
        return v().off(e), o.apply(this, arguments)
      }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
        v.event.add(this, e, i, r, n)
      })
    },
    one: function(e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function(e, n, r) {
      var i, s;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if (typeof e == "object") {
        for (s in e) this.off(s, n, e[s]);
        return this
      }
      if (n === !1 || typeof n == "function") r = n, n = t;
      return r === !1 && (r = et), this.each(function() {
        v.event.remove(this, e, r, n)
      })
    },
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    live: function(e, t, n) {
      return v(this.context).on(e, this.selector, t, n), this
    },
    die: function(e, t) {
      return v(this.context).off(e, this.selector || "**", t), this
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    trigger: function(e, t) {
      return this.each(function() {
        v.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      if (this[0]) return v.event.trigger(e, t, this[0], !0)
    },
    toggle: function(e) {
      var t = arguments,
        n = e.guid || v.guid++,
        r = 0,
        i = function(n) {
          var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
          return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
        };
      i.guid = n;
      while (r < t.length) t[r++].guid = n;
      return this.click(i)
    },
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    v.fn[t] = function(e, n) {
      return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
  }), function(e, t) {
    function nt(e, t, n, r) {
      n = n || [], t = t || g;
      var i, s, a, f, l = t.nodeType;
      if (!e || typeof e != "string") return n;
      if (l !== 1 && l !== 9) return [];
      a = o(t);
      if (!a && !r) if (i = R.exec(e)) if (f = i[1]) {
        if (l === 9) {
          s = t.getElementById(f);
          if (!s || !s.parentNode) return n;
          if (s.id === f) return n.push(s), n
        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
      } else {
        if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
        if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
      }
      return vt(e.replace(j, "$1"), t, n, r, a)
    }
    function rt(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return n === "input" && t.type === e
      }
    }
    function it(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return (n === "input" || n === "button") && t.type === e
      }
    }
    function st(e) {
      return N(function(t) {
        return t = +t, N(function(n, r) {
          var i, s = e([], n.length, t),
            o = s.length;
          while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }
    function ot(e, t, n) {
      if (e === t) return n;
      var r = e.nextSibling;
      while (r) {
        if (r === t) return -1;
        r = r.nextSibling
      }
      return 1
    }
    function ut(e, t) {
      var n, r, s, o, u, a, f, l = L[d][e + " "];
      if (l) return t ? 0 : l.slice(0);
      u = e, a = [], f = i.preFilter;
      while (u) {
        if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
        n = !1;
        if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
        for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
        if (!n) break
      }
      return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
    }
    function at(e, t, r) {
      var i = t.dir,
        s = r && t.dir === "parentNode",
        o = w++;
      return t.first ?
      function(t, n, r) {
        while (t = t[i]) if (s || t.nodeType === 1) return e(t, n, r)
      } : function(t, r, u) {
        if (!u) {
          var a, f = b + " " + o + " ",
            l = f + n;
          while (t = t[i]) if (s || t.nodeType === 1) {
            if ((a = t[d]) === l) return t.sizset;
            if (typeof a == "string" && a.indexOf(f) === 0) {
              if (t.sizset) return t
            } else {
              t[d] = l;
              if (e(t, r, u)) return t.sizset = !0, t;
              t.sizset = !1
            }
          }
        } else while (t = t[i]) if (s || t.nodeType === 1) if (e(t, r, u)) return t
      }
    }
    function ft(e) {
      return e.length > 1 ?
      function(t, n, r) {
        var i = e.length;
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0
      } : e[0]
    }
    function lt(e, t, n, r, i) {
      var s, o = [],
        u = 0,
        a = e.length,
        f = t != null;
      for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
      return o
    }
    function ct(e, t, n, r, i, s) {
      return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
        var f, l, c, h = [],
          p = [],
          d = o.length,
          v = s || dt(t || "*", u.nodeType ? [u] : u, []),
          m = e && (s || !t) ? lt(v, h, e, u, a) : v,
          g = n ? i || (s ? e : d || r) ? [] : o : m;
        n && n(m, g, u, a);
        if (r) {
          f = lt(g, p), r(f, [], u, a), l = f.length;
          while (l--) if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
        }
        if (s) {
          if (i || e) {
            if (i) {
              f = [], l = g.length;
              while (l--)(c = g[l]) && f.push(m[l] = c);
              i(null, g = [], f, a)
            }
            l = g.length;
            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
          }
        } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
      })
    }
    function ht(e) {
      var t, n, r, s = e.length,
        o = i.relative[e[0].type],
        u = o || i.relative[" "],
        a = o ? 1 : 0,
        f = at(function(e) {
          return e === t
        }, u, !0),
        l = at(function(e) {
          return T.call(t, e) > -1
        }, u, !0),
        h = [function(e, n, r) {
          return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
        }];
      for (; a < s; a++) if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
      else {
        n = i.filter[e[a].type].apply(null, e[a].matches);
        if (n[d]) {
          r = ++a;
          for (; r < s; r++) if (i.relative[e[r].type]) break;
          return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
        }
        h.push(n)
      }
      return ft(h)
    }
    function pt(e, t) {
      var r = t.length > 0,
        s = e.length > 0,
        o = function(u, a, f, l, h) {
          var p, d, v, m = [],
            y = 0,
            w = "0",
            x = u && [],
            T = h != null,
            N = c,
            C = u || s && i.find.TAG("*", h && a.parentNode || a),
            k = b += N == null ? 1 : Math.E;
          T && (c = a !== g && a, n = o.el);
          for (;
          (p = C[w]) != null; w++) {
            if (s && p) {
              for (d = 0; v = e[d]; d++) if (v(p, a, f)) {
                l.push(p);
                break
              }
              T && (b = k, n = ++o.el)
            }
            r && ((p = !v && p) && y--, u && x.push(p))
          }
          y += w;
          if (r && w !== y) {
            for (d = 0; v = t[d]; d++) v(x, m, a, f);
            if (u) {
              if (y > 0) while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
              m = lt(m)
            }
            S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
          }
          return T && (b = k, c = N), x
        };
      return o.el = 0, r ? N(o) : o
    }
    function dt(e, t, n) {
      var r = 0,
        i = t.length;
      for (; r < i; r++) nt(e, t[r], n);
      return n
    }
    function vt(e, t, n, r, s) {
      var o, u, f, l, c, h = ut(e),
        p = h.length;
      if (!r && h.length === 1) {
        u = h[0] = h[0].slice(0);
        if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
          t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
          if (!t) return n;
          e = e.slice(u.shift().length)
        }
        for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
          f = u[o];
          if (i.relative[l = f.type]) break;
          if (c = i.find[l]) if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
            u.splice(o, 1), e = r.length && u.join("");
            if (!e) return S.apply(n, x.call(r, 0)), n;
            break
          }
        }
      }
      return a(e, h)(r, t, s, n, z.test(e)), n
    }
    function mt() {}
    var n, r, i, s, o, u, a, f, l, c, h = !0,
      p = "undefined",
      d = ("sizcache" + Math.random()).replace(".", ""),
      m = String,
      g = e.document,
      y = g.documentElement,
      b = 0,
      w = 0,
      E = [].pop,
      S = [].push,
      x = [].slice,
      T = [].indexOf ||
    function(e) {
      var t = 0,
        n = this.length;
      for (; t < n; t++) if (this[t] === e) return t;
      return -1
    }, N = function(e, t) {
      return e[d] = t == null || t, e
    }, C = function() {
      var e = {},
        t = [];
      return N(function(n, r) {
        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
      }, e)
    }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
      TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + P),
      PSEUDO: new RegExp("^" + H),
      POS: new RegExp(B, "i"),
      CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
      needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
    }, K = function(e) {
      var t = g.createElement("div");
      try {
        return e(t)
      } catch (n) {
        return !1
      } finally {
        t = null
      }
    }, Q = K(function(e) {
      return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
    }), G = K(function(e) {
      return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
    }), Y = K(function(e) {
      e.innerHTML = "<select></select>";
      var t = typeof e.lastChild.getAttribute("multiple");
      return t !== "boolean" && t !== "string"
    }), Z = K(function(e) {
      return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
    }), et = K(function(e) {
      e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
      var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
      return r = !g.getElementById(d), y.removeChild(e), t
    });
    try {
      x.call(y.childNodes, 0)[0].nodeType
    } catch (tt) {
      x = function(e) {
        var t, n = [];
        for (; t = this[e]; e++) n.push(t);
        return n
      }
    }
    nt.matches = function(e, t) {
      return nt(e, null, null, t)
    }, nt.matchesSelector = function(e, t) {
      return nt(t, null, null, [e]).length > 0
    }, s = nt.getText = function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (i === 1 || i === 9 || i === 11) {
          if (typeof e.textContent == "string") return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
        } else if (i === 3 || i === 4) return e.nodeValue
      } else for (; t = e[r]; r++) n += s(t);
      return n
    }, o = nt.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? t.nodeName !== "HTML" : !1
    }, u = nt.contains = y.contains ?
    function(e, t) {
      var n = e.nodeType === 9 ? e.documentElement : e,
        r = t && t.parentNode;
      return e === r || !! (r && r.nodeType === 1 && n.contains && n.contains(r))
    } : y.compareDocumentPosition ?
    function(e, t) {
      return t && !! (e.compareDocumentPosition(t) & 16)
    } : function(e, t) {
      while (t = t.parentNode) if (t === e) return !0;
      return !1
    }, nt.attr = function(e, t) {
      var n, r = o(e);
      return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
    }, i = nt.selectors = {
      cacheLength: 50,
      createPseudo: N,
      match: J,
      attrHandle: G ? {} : {
        href: function(e) {
          return e.getAttribute("href", 2)
        },
        type: function(e) {
          return e.getAttribute("type")
        }
      },
      find: {
        ID: r ?
        function(e, t, n) {
          if (typeof t.getElementById !== p && !n) {
            var r = t.getElementById(e);
            return r && r.parentNode ? [r] : []
          }
        } : function(e, n, r) {
          if (typeof n.getElementById !== p && !r) {
            var i = n.getElementById(e);
            return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
          }
        },
        TAG: Q ?
        function(e, t) {
          if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
        } : function(e, t) {
          var n = t.getElementsByTagName(e);
          if (e === "*") {
            var r, i = [],
              s = 0;
            for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
            return i
          }
          return n
        },
        NAME: et &&
        function(e, t) {
          if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
        },
        CLASS: Z &&
        function(e, t, n) {
          if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
        }
      },
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
        },
        PSEUDO: function(e) {
          var t, n;
          if (J.CHILD.test(e[0])) return null;
          if (e[3]) e[2] = e[3];
          else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
          return e.slice(0, 3)
        }
      },
      filter: {
        ID: r ?
        function(e) {
          return e = e.replace($, ""), function(t) {
            return t.getAttribute("id") === e
          }
        } : function(e) {
          return e = e.replace($, ""), function(t) {
            var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
            return n && n.value === e
          }
        },
        TAG: function(e) {
          return e === "*" ?
          function() {
            return !0
          } : (e = e.replace($, "").toLowerCase(), function(t) {
            return t.nodeName && t.nodeName.toLowerCase() === e
          })
        },
        CLASS: function(e) {
          var t = k[d][e + " "];
          return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
          })
        },
        ATTR: function(e, t, n) {
          return function(r, i) {
            var s = nt.attr(r, e);
            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
          }
        },
        CHILD: function(e, t, n, r) {
          return e === "nth" ?
          function(e) {
            var t, i, s = e.parentNode;
            if (n === 1 && r === 0) return !0;
            if (s) {
              i = 0;
              for (t = s.firstChild; t; t = t.nextSibling) if (t.nodeType === 1) {
                i++;
                if (e === t) break
              }
            }
            return i -= r, i === n || i % n === 0 && i / n >= 0
          } : function(t) {
            var n = t;
            switch (e) {
            case "only":
            case "first":
              while (n = n.previousSibling) if (n.nodeType === 1) return !1;
              if (e === "first") return !0;
              n = t;
            case "last":
              while (n = n.nextSibling) if (n.nodeType === 1) return !1;
              return !0
            }
          }
        },
        PSEUDO: function(e, t) {
          var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
          return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
            var i, s = r(e, t),
              o = s.length;
            while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
          }) : function(e) {
            return r(e, 0, n)
          }) : r
        }
      },
      pseudos: {
        not: N(function(e) {
          var t = [],
            n = [],
            r = a(e.replace(j, "$1"));
          return r[d] ? N(function(e, t, n, i) {
            var s, o = r(e, null, i, []),
              u = e.length;
            while (u--) if (s = o[u]) e[u] = !(t[u] = s)
          }) : function(e, i, s) {
            return t[0] = e, r(t, null, s, n), !n.pop()
          }
        }),
        has: N(function(e) {
          return function(t) {
            return nt(e, t).length > 0
          }
        }),
        contains: N(function(e) {
          return function(t) {
            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
          }
        }),
        enabled: function(e) {
          return e.disabled === !1
        },
        disabled: function(e) {
          return e.disabled === !0
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && !! e.checked || t === "option" && !! e.selected
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        },
        parent: function(e) {
          return !i.pseudos.empty(e)
        },
        empty: function(e) {
          var t;
          e = e.firstChild;
          while (e) {
            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
            e = e.nextSibling
          }
          return !0
        },
        header: function(e) {
          return X.test(e.nodeName)
        },
        text: function(e) {
          var t, n;
          return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
        },
        radio: rt("radio"),
        checkbox: rt("checkbox"),
        file: rt("file"),
        password: rt("password"),
        image: rt("image"),
        submit: it("submit"),
        reset: it("reset"),
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && e.type === "button" || t === "button"
        },
        input: function(e) {
          return V.test(e.nodeName)
        },
        focus: function(e) {
          var t = e.ownerDocument;
          return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
        },
        active: function(e) {
          return e === e.ownerDocument.activeElement
        },
        first: st(function() {
          return [0]
        }),
        last: st(function(e, t) {
          return [t - 1]
        }),
        eq: st(function(e, t, n) {
          return [n < 0 ? n + t : n]
        }),
        even: st(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }),
        odd: st(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }),
        lt: st(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
          return e
        }),
        gt: st(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }, f = y.compareDocumentPosition ?
    function(e, t) {
      return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
    } : function(e, t) {
      if (e === t) return l = !0, 0;
      if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
      var n, r, i = [],
        s = [],
        o = e.parentNode,
        u = t.parentNode,
        a = o;
      if (o === u) return ot(e, t);
      if (!o) return -1;
      if (!u) return 1;
      while (a) i.unshift(a), a = a.parentNode;
      a = u;
      while (a) s.unshift(a), a = a.parentNode;
      n = i.length, r = s.length;
      for (var f = 0; f < n && f < r; f++) if (i[f] !== s[f]) return ot(i[f], s[f]);
      return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
    }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
      var t, n = [],
        r = 1,
        i = 0;
      l = h, e.sort(f);
      if (l) {
        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
        while (i--) e.splice(n[i], 1)
      }
      return e
    }, nt.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, a = nt.compile = function(e, t) {
      var n, r = [],
        i = [],
        s = A[d][e + " "];
      if (!s) {
        t || (t = ut(e)), n = t.length;
        while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
        s = A(e, pt(i, r))
      }
      return s
    }, g.querySelectorAll &&
    function() {
      var e, t = vt,
        n = /'|\\/g,
        r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        i = [":focus"],
        s = [":active"],
        u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
      K(function(e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
      }), K(function(e) {
        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
      }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
        if (!o && !u && !i.test(e)) {
          var a, f, l = !0,
            c = d,
            h = r,
            p = r.nodeType === 9 && e;
          if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
            while (f--) a[f] = c + a[f].join("");
            h = z.test(e) && r.parentNode || r, p = a.join(",")
          }
          if (p) try {
            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
          } catch (v) {} finally {
            l || r.removeAttribute("id")
          }
        }
        return t(e, r, s, o, u)
      }, u && (K(function(t) {
        e = u.call(t, "div");
        try {
          u.call(t, "[test!='']:sizzle"), s.push("!=", H)
        } catch (n) {}
      }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
        n = n.replace(r, "='$1']");
        if (!o(t) && !s.test(n) && !i.test(n)) try {
          var a = u.call(t, n);
          if (a || e || t.document && t.document.nodeType !== 11) return a
        } catch (f) {}
        return nt(n, null, null, [t]).length > 0
      })
    }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
  }(e);
  var nt = /Until$/,
    rt = /^(?:parents|prev(?:Until|All))/,
    it = /^.[^:#\[\.,]*$/,
    st = v.expr.match.needsContext,
    ot = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  v.fn.extend({
    find: function(e) {
      var t, n, r, i, s, o, u = this;
      if (typeof e != "string") return v(e).filter(function() {
        for (t = 0, n = u.length; t < n; t++) if (v.contains(u[t], this)) return !0
      });
      o = this.pushStack("", "find", e);
      for (t = 0, n = this.length; t < n; t++) {
        r = o.length, v.find(e, this[t], o);
        if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
          o.splice(i--, 1);
          break
        }
      }
      return o
    },
    has: function(e) {
      var t, n = v(e, this),
        r = n.length;
      return this.filter(function() {
        for (t = 0; t < r; t++) if (v.contains(this, n[t])) return !0
      })
    },
    not: function(e) {
      return this.pushStack(ft(this, e, !1), "not", e)
    },
    filter: function(e) {
      return this.pushStack(ft(this, e, !0), "filter", e)
    },
    is: function(e) {
      return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
    },
    closest: function(e, t) {
      var n, r = 0,
        i = this.length,
        s = [],
        o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
      for (; r < i; r++) {
        n = this[r];
        while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
          if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
            s.push(n);
            break
          }
          n = n.parentNode
        }
      }
      return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
    },
    index: function(e) {
      return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    },
    add: function(e, t) {
      var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
        r = v.merge(this.get(), n);
      return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
    },
    addBack: function(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }
  }), v.fn.andSelf = v.fn.addBack, v.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && t.nodeType !== 11 ? t : null
    },
    parents: function(e) {
      return v.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return v.dir(e, "parentNode", n)
    },
    next: function(e) {
      return at(e, "nextSibling")
    },
    prev: function(e) {
      return at(e, "previousSibling")
    },
    nextAll: function(e) {
      return v.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return v.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return v.dir(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return v.dir(e, "previousSibling", n)
    },
    siblings: function(e) {
      return v.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return v.sibling(e.firstChild)
    },
    contents: function(e) {
      return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
    }
  }, function(e, t) {
    v.fn[e] = function(n, r) {
      var i = v.map(this, t, n);
      return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
    }
  }), v.extend({
    filter: function(e, t, n) {
      return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
    },
    dir: function(e, n, r) {
      var i = [],
        s = e[n];
      while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
      return i
    },
    sibling: function(e, t) {
      var n = [];
      for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
      return n
    }
  });
  var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ht = / jQuery\d+="(?:null|\d+)"/g,
    pt = /^\s+/,
    dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    vt = /<([\w:]+)/,
    mt = /<tbody/i,
    gt = /<|&#?\w+;/,
    yt = /<(?:script|style|link)/i,
    bt = /<(?:script|object|embed|option|style)/i,
    wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
    Et = /^(?:checkbox|radio)$/,
    St = /checked\s*(?:[^=]|=\s*.checked.)/i,
    xt = /\/(java|ecma)script/i,
    Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    Nt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""]
    },
    Ct = lt(i),
    kt = Ct.appendChild(i.createElement("div"));
  Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
    text: function(e) {
      return v.access(this, function(e) {
        return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
      }, null, e, arguments.length)
    },
    wrapAll: function(e) {
      if (v.isFunction(e)) return this.each(function(t) {
        v(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          var e = this;
          while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function(e) {
      return v.isFunction(e) ? this.each(function(t) {
        v(this).wrapInner(e.call(this, t))
      }) : this.each(function() {
        var t = v(this),
          n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = v.isFunction(e);
      return this.each(function(n) {
        v(this).wrapAll(t ? e.call(this, n) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
      }).end()
    },
    append: function() {
      return this.domManip(arguments, !0, function(e) {
        (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
      })
    },
    prepend: function() {
      return this.domManip(arguments, !0, function(e) {
        (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
      })
    },
    before: function() {
      if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
        this.parentNode.insertBefore(e, this)
      });
      if (arguments.length) {
        var e = v.clean(arguments);
        return this.pushStack(v.merge(e, this), "before", this.selector)
      }
    },
    after: function() {
      if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
        this.parentNode.insertBefore(e, this.nextSibling)
      });
      if (arguments.length) {
        var e = v.clean(arguments);
        return this.pushStack(v.merge(this, e), "after", this.selector)
      }
    },
    remove: function(e, t) {
      var n, r = 0;
      for (;
      (n = this[r]) != null; r++) if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
      return this
    },
    empty: function() {
      var e, t = 0;
      for (;
      (e = this[t]) != null; t++) {
        e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
        while (e.firstChild) e.removeChild(e.firstChild)
      }
      return this
    },
    clone: function(e, t) {
      return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
        return v.clone(this, e, t)
      })
    },
    html: function(e) {
      return v.access(this, function(e) {
        var n = this[0] || {},
          r = 0,
          i = this.length;
        if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
        if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(dt, "<$1></$2>");
          try {
            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
            n = 0
          } catch (s) {}
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function(e) {
      return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
        var n = v(this),
          r = n.html();
        n.replaceWith(e.call(this, t, r))
      }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
        var t = this.nextSibling,
          n = this.parentNode;
        v(this).remove(), t ? v(t).before(e) : v(n).append(e)
      }))
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, n, r) {
      e = [].concat.apply([], e);
      var i, s, o, u, a = 0,
        f = e[0],
        l = [],
        c = this.length;
      if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
        v(this).domManip(e, n, r)
      });
      if (v.isFunction(f)) return this.each(function(i) {
        var s = v(this);
        e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
      });
      if (this[0]) {
        i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
        if (s) {
          n = n && v.nodeName(s, "tr");
          for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
        }
        o = s = null, l.length && v.each(l, function(e, t) {
          t.src ? v.ajax ? v.ajax({
            url: t.src,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
          }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
        })
      }
      return this
    }
  }), v.buildFragment = function(e, n, r) {
    var s, o, u, a = e[0];
    return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
      fragment: s,
      cacheable: o
    }
  }, v.fragments = {}, v.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    v.fn[e] = function(n) {
      var r, i = 0,
        s = [],
        o = v(n),
        u = o.length,
        a = this.length === 1 && this[0].parentNode;
      if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
      for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
      return this.pushStack(s, e, o.selector)
    }
  }), v.extend({
    clone: function(e, t, n) {
      var r, i, s, o;
      v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
      if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
        Ot(e, o), r = Mt(e), i = Mt(o);
        for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
      }
      if (t) {
        At(e, o);
        if (n) {
          r = Mt(e), i = Mt(o);
          for (s = 0; r[s]; ++s) At(r[s], i[s])
        }
      }
      return r = i = null, o
    },
    clean: function(e, t, n, r) {
      var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
        b = [];
      if (!t || typeof t.createDocumentFragment == "undefined") t = i;
      for (s = 0;
      (u = e[s]) != null; s++) {
        typeof u == "number" && (u += "");
        if (!u) continue;
        if (typeof u == "string") if (!gt.test(u)) u = t.createTextNode(u);
        else {
          y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
          while (l--) c = c.lastChild;
          if (!v.support.tbody) {
            h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
            for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
          }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
        }
        u.nodeType ? b.push(u) : v.merge(b, u)
      }
      c && (u = c = y = null);
      if (!v.support.appendChecked) for (s = 0;
      (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
      if (n) {
        m = function(e) {
          if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
        };
        for (s = 0;
        (u = b[s]) != null; s++) if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
      }
      return b
    },
    cleanData: function(e, t) {
      var n, r, i, s, o = 0,
        u = v.expando,
        a = v.cache,
        f = v.support.deleteExpando,
        l = v.event.special;
      for (;
      (i = e[o]) != null; o++) if (t || v.acceptData(i)) {
        r = i[u], n = r && a[r];
        if (n) {
          if (n.events) for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
          a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
        }
      }
    }
  }), function() {
    var e, t;
    v.uaMatch = function(e) {
      e = e.toLowerCase();
      var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
      return {
        browser: t[1] || "",
        version: t[2] || "0"
      }
    }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
      function e(t, n) {
        return new e.fn.init(t, n)
      }
      v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
        return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
      }, e.fn.init.prototype = e.fn;
      var t = e(i);
      return e
    }
  }();
  var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
    jt = /opacity=([^)]*)/,
    Ft = /^(top|right|bottom|left)$/,
    It = /^(none|table(?!-c[ea]).+)/,
    qt = /^margin/,
    Rt = new RegExp("^(" + m + ")(.*)$", "i"),
    Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
    zt = new RegExp("^([-+])=(" + m + ")", "i"),
    Wt = {
      BODY: "block"
    },
    Xt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Vt = {
      letterSpacing: 0,
      fontWeight: 400
    },
    $t = ["Top", "Right", "Bottom", "Left"],
    Jt = ["Webkit", "O", "Moz", "ms"],
    Kt = v.fn.toggle;
  v.fn.extend({
    css: function(e, n) {
      return v.access(this, function(e, n, r) {
        return r !== t ? v.style(e, n, r) : v.css(e, n)
      }, e, n, arguments.length > 1)
    },
    show: function() {
      return Yt(this, !0)
    },
    hide: function() {
      return Yt(this)
    },
    toggle: function(e, t) {
      var n = typeof e == "boolean";
      return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
        (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
      })
    }
  }), v.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Dt(e, "opacity");
            return n === "" ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, n, r, i) {
      if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
      var s, o, u, a = v.camelCase(n),
        f = e.style;
      n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
      if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
      o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
      if (r == null || o === "number" && isNaN(r)) return;
      o === "number" && !v.cssNumber[a] && (r += "px");
      if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
        f[n] = r
      } catch (l) {}
    },
    css: function(e, n, r, i) {
      var s, o, u, a = v.camelCase(n);
      return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
    },
    swap: function(e, t, n) {
      var r, i, s = {};
      for (i in t) s[i] = e.style[i], e.style[i] = t[i];
      r = n.call(e);
      for (i in t) e.style[i] = s[i];
      return r
    }
  }), e.getComputedStyle ? Dt = function(t, n) {
    var r, i, s, o, u = e.getComputedStyle(t, null),
      a = t.style;
    return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
  } : i.documentElement.currentStyle && (Dt = function(e, t) {
    var n, r, i = e.currentStyle && e.currentStyle[t],
      s = e.style;
    return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
  }), v.each(["height", "width"], function(e, t) {
    v.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
          return tn(e, t, r)
        }) : tn(e, t, r)
      },
      set: function(e, n, r) {
        return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
      }
    }
  }), v.support.opacity || (v.cssHooks.opacity = {
    get: function(e, t) {
      return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    },
    set: function(e, t) {
      var n = e.style,
        r = e.currentStyle,
        i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
        s = r && r.filter || n.filter || "";
      n.zoom = 1;
      if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
        n.removeAttribute("filter");
        if (r && !r.filter) return
      }
      n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
    }
  }), v(function() {
    v.support.reliableMarginRight || (v.cssHooks.marginRight = {
      get: function(e, t) {
        return v.swap(e, {
          display: "inline-block"
        }, function() {
          if (t) return Dt(e, "marginRight")
        })
      }
    }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
      v.cssHooks[t] = {
        get: function(e, n) {
          if (n) {
            var r = Dt(e, t);
            return Ut.test(r) ? v(e).position()[t] + "px" : r
          }
        }
      }
    })
  }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
    return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
  }, v.expr.filters.visible = function(e) {
    return !v.expr.filters.hidden(e)
  }), v.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    v.cssHooks[e + t] = {
      expand: function(n) {
        var r, i = typeof n == "string" ? n.split(" ") : [n],
          s = {};
        for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
        return s
      }
    }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
  });
  var rn = /%20/g,
    sn = /\[\]$/,
    on = /\r?\n/g,
    un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    an = /^(?:select|textarea)/i;
  v.fn.extend({
    serialize: function() {
      return v.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        return this.elements ? v.makeArray(this.elements) : this
      }).filter(function() {
        return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
      }).map(function(e, t) {
        var n = v(this).val();
        return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
          return {
            name: t.name,
            value: e.replace(on, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(on, "\r\n")
        }
      }).get()
    }
  }), v.param = function(e, n) {
    var r, i = [],
      s = function(e, t) {
        t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
    if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
      s(this.name, this.value)
    });
    else for (r in e) fn(r, e[r], n, s);
    return i.join("&").replace(rn, "+")
  };
  var ln, cn, hn = /#.*$/,
    pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    vn = /^(?:GET|HEAD)$/,
    mn = /^\/\//,
    gn = /\?/,
    yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bn = /([?&])_=[^&]*/,
    wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    En = v.fn.load,
    Sn = {},
    xn = {},
    Tn = ["*/"] + ["*"];
  try {
    cn = s.href
  } catch (Nn) {
    cn = i.createElement("a"), cn.href = "", cn = cn.href
  }
  ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
    if (typeof e != "string" && En) return En.apply(this, arguments);
    if (!this.length) return this;
    var i, s, o, u = this,
      a = e.indexOf(" ");
    return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
      url: e,
      type: s,
      dataType: "html",
      data: n,
      complete: function(e, t) {
        r && u.each(r, o || [e.responseText, t, e])
      }
    }).done(function(e) {
      o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
    }), this
  }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
    v.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), v.each(["get", "post"], function(e, n) {
    v[n] = function(e, r, i, s) {
      return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
        type: n,
        url: e,
        data: r,
        success: i,
        dataType: s
      })
    }
  }), v.extend({
    getScript: function(e, n) {
      return v.get(e, t, n, "script")
    },
    getJSON: function(e, t, n) {
      return v.get(e, t, n, "json")
    },
    ajaxSetup: function(e, t) {
      return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
    },
    ajaxSettings: {
      url: cn,
      isLocal: dn.test(ln[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": Tn
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": e.String,
        "text html": !0,
        "text json": v.parseJSON,
        "text xml": v.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: Cn(Sn),
    ajaxTransport: Cn(xn),
    ajax: function(e, n) {
      function T(e, n, s, a) {
        var l, y, b, w, S, T = n;
        if (E === 2) return;
        E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
        if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
        else {
          b = T;
          if (!T || e) T = "error", e < 0 && (e = 0)
        }
        x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
      }
      typeof e == "object" && (n = e, e = t), n = n || {};
      var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
        h = c.context || c,
        p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
        d = v.Deferred(),
        m = v.Callbacks("once memory"),
        g = c.statusCode || {},
        b = {},
        w = {},
        E = 0,
        S = "canceled",
        x = {
          readyState: 0,
          setRequestHeader: function(e, t) {
            if (!E) {
              var n = e.toLowerCase();
              e = w[n] = w[n] || e, b[e] = t
            }
            return this
          },
          getAllResponseHeaders: function() {
            return E === 2 ? i : null
          },
          getResponseHeader: function(e) {
            var n;
            if (E === 2) {
              if (!s) {
                s = {};
                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
              }
              n = s[e.toLowerCase()]
            }
            return n === t ? null : n
          },
          overrideMimeType: function(e) {
            return E || (c.mimeType = e), this
          },
          abort: function(e) {
            return e = e || S, o && o.abort(e), T(0, e), this
          }
        };
      d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
        if (e) {
          var t;
          if (E < 2) for (t in e) g[t] = [g[t], e[t]];
          else t = e[x.status], x.always(t)
        }
        return this
      }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
      if (E === 2) return x;
      f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
      if (!c.hasContent) {
        c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
        if (c.cache === !1) {
          var N = v.now(),
            C = c.url.replace(bn, "$1_=" + N);
          c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
        }
      }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
      for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
      if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
        S = "abort";
        for (l in {
          success: 1,
          error: 1,
          complete: 1
        }) x[l](c[l]);
        o = kn(xn, c, n, x);
        if (!o) T(-1, "No Transport");
        else {
          x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
            x.abort("timeout")
          }, c.timeout));
          try {
            E = 1, o.send(b, T)
          } catch (k) {
            if (!(E < 2)) throw k;
            T(-1, k)
          }
        }
        return x
      }
      return x.abort()
    },
    active: 0,
    lastModified: {},
    etag: {}
  });
  var Mn = [],
    _n = /\?/,
    Dn = /(=)\?(?=&|$)|\?\?/,
    Pn = v.now();
  v.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Mn.pop() || v.expando + "_" + Pn++;
      return this[e] = !0, e
    }
  }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
    var s, o, u, a = n.data,
      f = n.url,
      l = n.jsonp !== !1,
      c = l && Dn.test(f),
      h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
    if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
      return u || v.error(s + " was not called"), u[0]
    }, n.dataTypes[0] = "json", e[s] = function() {
      u = arguments
    }, i.always(function() {
      e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
    }), "script"
  }), v.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function(e) {
        return v.globalEval(e), e
      }
    }
  }), v.ajaxPrefilter("script", function(e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
  }), v.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
      return {
        send: function(s, o) {
          n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
            if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
          }, r.insertBefore(n, r.firstChild)
        },
        abort: function() {
          n && n.onload(0, 1)
        }
      }
    }
  });
  var Hn, Bn = e.ActiveXObject ?
  function() {
    for (var e in Hn) Hn[e](0, 1)
  } : !1, jn = 0;
  v.ajaxSettings.xhr = e.ActiveXObject ?
  function() {
    return !this.isLocal && Fn() || In()
  } : Fn, function(e) {
    v.extend(v.support, {
      ajax: !! e,
      cors: !! e && "withCredentials" in e
    })
  }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
    if (!n.crossDomain || v.support.cors) {
      var r;
      return {
        send: function(i, s) {
          var o, u, a = n.xhr();
          n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
          if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
          n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
          try {
            for (u in i) a.setRequestHeader(u, i[u])
          } catch (f) {}
          a.send(n.hasContent && n.data || null), r = function(e, i) {
            var u, f, l, c, h;
            try {
              if (r && (i || a.readyState === 4)) {
                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                if (i) a.readyState !== 4 && a.abort();
                else {
                  u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                  try {
                    c.text = a.responseText
                  } catch (p) {}
                  try {
                    f = a.statusText
                  } catch (p) {
                    f = ""
                  }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                }
              }
            } catch (d) {
              i || s(-1, d)
            }
            c && s(u, f, c, l)
          }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
        },
        abort: function() {
          r && r(0, 1)
        }
      }
    }
  });
  var qn, Rn, Un = /^(?:toggle|show|hide)$/,
    zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
    Wn = /queueHooks$/,
    Xn = [Gn],
    Vn = {
      "*": [function(e, t) {
        var n, r, i = this.createTween(e, t),
          s = zn.exec(t),
          o = i.cur(),
          u = +o || 0,
          a = 1,
          f = 20;
        if (s) {
          n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
          if (r !== "px" && u) {
            u = v.css(i.elem, e, !0) || n || 1;
            do a = a || ".5", u /= a, v.style(i.elem, e, u + r);
            while (a !== (a = i.cur() / o) && a !== 1 && --f)
          }
          i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
        }
        return i
      }]
    };
  v.Animation = v.extend(Kn, {
    tweener: function(e, t) {
      v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n, r = 0,
        i = e.length;
      for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
    },
    prefilter: function(e, t) {
      t ? Xn.unshift(e) : Xn.push(e)
    }
  }), v.Tween = Yn, Yn.prototype = {
    constructor: Yn,
    init: function(e, t, n, r, i, s) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = Yn.propHooks[this.prop];
      return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = Yn.propHooks[this.prop];
      return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
    }
  }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
      },
      set: function(e) {
        v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, v.each(["toggle", "show", "hide"], function(e, t) {
    var n = v.fn[t];
    v.fn[t] = function(r, i, s) {
      return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
    }
  }), v.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(Gt).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(e, t, n, r) {
      var i = v.isEmptyObject(e),
        s = v.speed(t, n, r),
        o = function() {
          var t = Kn(this, v.extend({}, e), s);
          i && t.stop(!0)
        };
      return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
    },
    stop: function(e, n, r) {
      var i = function(e) {
          var t = e.stop;
          delete e.stop, t(r)
        };
      return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
        var t = !0,
          n = e != null && e + "queueHooks",
          s = v.timers,
          o = v._data(this);
        if (n) o[n] && o[n].stop && i(o[n]);
        else for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
        for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
        (t || !r) && v.dequeue(this, e)
      })
    }
  }), v.each({
    slideDown: Zn("show"),
    slideUp: Zn("hide"),
    slideToggle: Zn("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    v.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r)
    }
  }), v.speed = function(e, t, n) {
    var r = e && typeof e == "object" ? v.extend({}, e) : {
      complete: n || !n && t || v.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !v.isFunction(t) && t
    };
    r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
    if (r.queue == null || r.queue === !0) r.queue = "fx";
    return r.old = r.complete, r.complete = function() {
      v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
    }, r
  }, v.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
    var e, n = v.timers,
      r = 0;
    qn = v.now();
    for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
    n.length || v.fx.stop(), qn = t
  }, v.fx.timer = function(e) {
    e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
  }, v.fx.interval = 13, v.fx.stop = function() {
    clearInterval(Rn), Rn = null
  }, v.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
    return v.grep(v.timers, function(t) {
      return e === t.elem
    }).length
  });
  var er = /^(?:body|html)$/i;
  v.fn.offset = function(e) {
    if (arguments.length) return e === t ? this : this.each(function(t) {
      v.offset.setOffset(this, e, t)
    });
    var n, r, i, s, o, u, a, f = {
      top: 0,
      left: 0
    },
      l = this[0],
      c = l && l.ownerDocument;
    if (!c) return;
    return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
      top: f.top + u - s,
      left: f.left + a - o
    }) : f)
  }, v.offset = {
    bodyOffset: function(e) {
      var t = e.offsetTop,
        n = e.offsetLeft;
      return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
        top: t,
        left: n
      }
    },
    setOffset: function(e, t, n) {
      var r = v.css(e, "position");
      r === "static" && (e.style.position = "relative");
      var i = v(e),
        s = i.offset(),
        o = v.css(e, "top"),
        u = v.css(e, "left"),
        a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
        f = {},
        l = {},
        c, h;
      a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
    }
  }, v.fn.extend({
    position: function() {
      if (!this[0]) return;
      var e = this[0],
        t = this.offsetParent(),
        n = this.offset(),
        r = er.test(t[0].nodeName) ? {
          top: 0,
          left: 0
        } : t.offset();
      return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
        top: n.top - r.top,
        left: n.left - r.left
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent || i.body;
        while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
        return e || i.body
      })
    }
  }), v.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, n) {
    var r = /Y/.test(n);
    v.fn[e] = function(i) {
      return v.access(this, function(e, i, s) {
        var o = tr(e);
        if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
        o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
      }, e, i, arguments.length, null)
    }
  }), v.each({
    Height: "height",
    Width: "width"
  }, function(e, n) {
    v.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function(r, i) {
      v.fn[i] = function(i, s) {
        var o = arguments.length && (r || typeof i != "boolean"),
          u = r || (i === !0 || s === !0 ? "margin" : "border");
        return v.access(this, function(n, r, i) {
          var s;
          return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
        }, n, o ? i : t, o, null)
      }
    })
  }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
    return v
  })
})(window);//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var push             = ArrayProto.push,
      slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object via a string identifier,
  // for Closure Compiler "advanced" mode.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.4.4';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (_.has(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = _.collect = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var length = obj.length;
    if (length !== +length) {
      var keys = _.keys(obj);
      length = keys.length;
    }
    each(obj, function(value, index, list) {
      index = keys ? keys[--length] : --length;
      if (!initial) {
        memo = obj[index];
        initial = true;
      } else {
        memo = iterator.call(context, memo, obj[index], index, list);
      }
    });
    if (!initial) throw new TypeError(reduceError);
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    return _.filter(obj, function(value, index, list) {
      return !iterator.call(context, value, index, list);
    }, context);
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    return any(obj, function(value) {
      return value === target;
    });
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return _[first ? 'find' : 'filter'](obj, function(value) {
      for (var key in attrs) {
        if (attrs[key] !== value[key]) return false;
      }
      return true;
    });
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.where(obj, attrs, true);
  };

  // Return the maximum element or (element-based computation).
  // Can't optimize arrays of integers longer than 65,535 elements.
  // See: https://bugs.webkit.org/show_bug.cgi?id=80797
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.max.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity, value: -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
      return Math.min.apply(Math, obj);
    }
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity, value: Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var rand;
    var index = 0;
    var shuffled = [];
    each(obj, function(value) {
      rand = _.random(index++);
      shuffled[index - 1] = shuffled[rand];
      shuffled[rand] = value;
    });
    return shuffled;
  };

  // An internal function to generate lookup iterators.
  var lookupIterator = function(value) {
    return _.isFunction(value) ? value : function(obj){ return obj[value]; };
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, value, context) {
    var iterator = lookupIterator(value);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        index : index,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index < right.index ? -1 : 1;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(obj, value, context, behavior) {
    var result = {};
    var iterator = lookupIterator(value || _.identity);
    each(obj, function(value, index) {
      var key = iterator.call(context, value, index, obj);
      behavior(result, key, value);
    });
    return result;
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key, value) {
      (_.has(result, key) ? result[key] : (result[key] = [])).push(value);
    });
  };

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = function(obj, value, context) {
    return group(obj, value, context, function(result, key) {
      if (!_.has(result, key)) result[key] = 0;
      result[key]++;
    });
  };

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator, context) {
    iterator = iterator == null ? _.identity : lookupIterator(iterator);
    var value = iterator.call(context, obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >>> 1;
      iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return (obj.length === +obj.length) ? obj.length : _.keys(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, output) {
    each(input, function(value) {
      if (_.isArray(value)) {
        shallow ? push.apply(output, value) : flatten(value, shallow, output);
      } else {
        output.push(value);
      }
    });
    return output;
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator, context) {
    if (_.isFunction(isSorted)) {
      context = iterator;
      iterator = isSorted;
      isSorted = false;
    }
    var initial = iterator ? _.map(array, iterator, context) : array;
    var results = [];
    var seen = [];
    each(initial, function(value, index) {
      if (isSorted ? (!index || seen[seen.length - 1] !== value) : !_.contains(seen, value)) {
        seen.push(value);
        results.push(array[index]);
      }
    });
    return results;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(concat.apply(ArrayProto, arguments));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.contains(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(args, "" + i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, l = list.length; i < l; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, l = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = (isSorted < 0 ? Math.max(0, l + isSorted) : isSorted);
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
    for (; i < l; i++) if (array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var hasIndex = from != null;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
      return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
    }
    var i = (hasIndex ? from : array.length);
    while (i--) if (array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
      return func.apply(context, args.concat(slice.call(arguments)));
    };
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context.
  _.partial = function(func) {
    var args = slice.call(arguments, 1);
    return function() {
      return func.apply(this, args.concat(slice.call(arguments)));
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length === 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return _.has(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(null, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
      previous = new Date;
      timeout = null;
      result = func.apply(context, args);
    };
    return function() {
      var now = new Date;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) result = func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(context, args);
      return result;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      memo = func.apply(this, arguments);
      func = null;
      return memo;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = [func];
      push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var values = [];
    for (var key in obj) if (_.has(obj, key)) values.push(obj[key]);
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var pairs = [];
    for (var key in obj) if (_.has(obj, key)) pairs.push([key, obj[key]]);
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    for (var key in obj) if (_.has(obj, key)) result[obj[key]] = key;
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    each(keys, function(key) {
      if (key in obj) copy[key] = obj[key];
    });
    return copy;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj) {
    var copy = {};
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1));
    for (var key in obj) {
      if (!_.contains(keys, key)) copy[key] = obj[key];
    }
    return copy;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          if (obj[prop] == null) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && (aCtor instanceof aCtor) &&
                               _.isFunction(bCtor) && (bCtor instanceof bCtor))) {
        return false;
      }
      // Deep compare objects.
      for (var key in a) {
        if (_.has(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) == '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && _.has(obj, 'callee'));
    };
  }

  // Optimize `isFunction` if appropriate.
  if (typeof (/./) !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj === 'function';
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj != +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function(n, iterator, context) {
    var accum = Array(n);
    for (var i = 0; i < n; i++) accum[i] = iterator.call(context, i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // List of HTML entities for escaping.
  var entityMap = {
    escape: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    }
  };
  entityMap.unescape = _.invert(entityMap.escape);

  // Regexes containing the keys and values listed immediately above.
  var entityRegexes = {
    escape:   new RegExp('[' + _.keys(entityMap.escape).join('') + ']', 'g'),
    unescape: new RegExp('(' + _.keys(entityMap.unescape).join('|') + ')', 'g')
  };

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  _.each(['escape', 'unescape'], function(method) {
    _[method] = function(string) {
      if (string == null) return '';
      return ('' + string).replace(entityRegexes[method], function(match) {
        return entityMap[method][match];
      });
    };
  });

  // If the value of the named property is a function then invoke it;
  // otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\t':     't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(text, data, settings) {
    var render;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = new RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset)
        .replace(escaper, function(match) { return '\\' + escapes[match]; });

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      }
      if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      }
      if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + "return __p;\n";

    try {
      render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    if (data) return render(data, _);
    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled function source as a convenience for precompilation.
    template.source = 'function(' + (settings.variable || 'obj') + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function, which will delegate to the wrapper.
  _.chain = function(obj) {
    return _(obj).chain();
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name == 'shift' || name == 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  _.extend(_.prototype, {

    // Start chaining a wrapped Underscore object.
    chain: function() {
      this._chain = true;
      return this;
    },

    // Extracts the result from a wrapped and chained object.
    value: function() {
      return this._wrapped;
    }

  });

}).call(this);
/**
 *  jQuery Avgrund Popin Plugin
 *  http://github.com/voronianski/jquery.avgrund.js/
 * 
 *  MIT licensed, (c) 2012 http://pixelhunter.me/
 */

(function($) {
	$.fn.avgrund = function(options) {
		var defaults = {
			width: 380, // max = 640
			height: 280, // max = 350
			showClose: false,
			showCloseText: '',
			closeByEscape: true,
			closeByDocument: true,
			holderClass: '',
			overlayClass: '',
			enableStackAnimation: false,
			onBlurContainer: '',
			openOnEvent: true,
			setEvent: 'click',
			onLoad: function() {},
			onUnload: function() {},
			template: '<p>This is test popin content!</p>'
		};
		var options = $.extend(defaults, options);

		return this.each(function() {
			var self = $(this),
				body = $('body'),
				maxWidth = options.width > 640 ? 640 : options.width,
				maxHeight = options.height > 350 ? 350 : options.height,
				template = typeof options.template === 'function' ? options.template(self) : options.template;

			body.addClass('avgrund-ready');				
			
			if (options.onBlurContainer !== '') {
				$(options.onBlurContainer).addClass('avgrund-blur');
			}
			
			// close popup by clicking Esc button
			function onDocumentKeyup(e) {
				if (options.closeByEscape) {
					if (e.keyCode === 27) {
						deactivate();
					}
				}
			}
			
			// close popup by clicking outside it
			function onDocumentClick(e) {
				if (options.closeByDocument) {
					if ($(e.target).is('.avgrund-overlay, .avgrund-close')) {
						deactivate();
					}
				} else {
					if ($(e.target).is('.avgrund-close')) {
						deactivate();
					}
				}
			}

			// show popup
			function activate() {
				// check if onLoad is a function and call it before popin is active
				if (typeof options.onLoad === 'function') {
					options.onLoad.call(self);
				}

				body.append('<div class="avgrund-overlay ' + options.overlayClass + '"></div>');
				body.append('<div class="avgrund-popin ' + options.holderClass + '">' + template + '</div>');

				$('.avgrund-popin').css({
					'width': maxWidth + 'px',
					'height': maxHeight + 'px',
					'margin-left': '-' + (maxWidth / 2 + 10) + 'px',
					'margin-top': '-' + (maxHeight / 2 + 10) + 'px'
				});

				if (options.showClose) {
					$('.avgrund-popin').append('<a href="#" class="avgrund-close">' + options.showCloseText + '</a>');
				}

				if (options.enableStackAnimation) {
					$('.avgrund-popin').addClass('stack');
				}

				body.bind('keyup', onDocumentKeyup);
				body.bind('click', onDocumentClick);

				body.addClass('avgrund-active');
			}

			// hide popup
			function deactivate() {
				body.unbind('keyup', onDocumentKeyup);
				body.unbind('click', onDocumentClick);

				body.removeClass('avgrund-active');

				// prevent multiple overlays
				$('.avgrund-overlay').remove();
				
				// remove after small pause to apply special avgrund effect
				setTimeout(function() {
					$('.avgrund-popin').remove();
				}, 500);

				// check if onUnload is a function and call it after popin is closed
				if (typeof options.onUnload === 'function') {
					options.onUnload.call(self);
				}
			}

			// init on click or custom event
			if (options.openOnEvent) {
				self.bind(options.setEvent, function(e) {
					e.stopPropagation();

					// prevent redirect for href url
					if ($(e.target).is('a')) {
						e.preventDefault();
					}

					activate();
				});
			} else {
				activate();
			}
		});

	}
})(jQuery)/* ===================================================
 * bootstrap-transition.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);/* ==========================================================
 * bootstrap-alert.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);/* ============================================================
 * bootstrap-button.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);/* ==========================================================
 * bootstrap-carousel.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.item.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle()
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      })

      if ($next.hasClass('active')) return

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
    $target.carousel(options)
    e.preventDefault()
  })

}(window.jQuery);/* =============================================================
 * bootstrap-collapse.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);/* ============================================================
 * bootstrap-dropdown.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) return $this.click()

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)
    $parent.length || ($parent = $this.parent())

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
    .on('click.dropdown touchstart.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('touchstart.dropdown.data-api', '.dropdown-menu', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);/* =========================================================
 * bootstrap-modal.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function (that) {
        this.$element
          .hide()
          .trigger('hidden')

        this.backdrop()
      }

    , removeBackdrop: function () {
        this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, $.proxy(this.removeBackdrop, this)) :
            this.removeBackdrop()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (this.options.trigger != 'manual') {
        eventIn = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })
          .insertAfter(this.$element)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .offset(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)
      self[self.tip().hasClass('in') ? 'hide' : 'show']()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  , html: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);/* ===========================================================
 * bootstrap-popover.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);/* =============================================================
 * bootstrap-scrollspy.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + self.$scrollElement.scrollTop(), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);/* ========================================================
 * bootstrap-tab.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);/* =============================================================
 * bootstrap-typeahead.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    e.preventDefault()
    $this.typeahead($this.data())
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.2.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);(function() {
  var WebSocket = window.WebSocket || window.MozWebSocket;
  var br = window.brunch || {};
  var ar = br['auto-reload'] || {};
  if (!WebSocket || !ar.enabled) return;

  var cacheBuster = function(url){
    var date = Math.round(Date.now() / 1000).toString();
    url = url.replace(/(\&|\\?)cacheBuster=\d*/, '');
    return url + (url.indexOf('?') >= 0 ? '&' : '?') +'cacheBuster=' + date;
  };

  var reloaders = {
    page: function(){
      window.location.reload(true);
    },

    stylesheet: function(){
      [].slice
        .call(document.querySelectorAll('link[rel="stylesheet"]'))
        .filter(function(link){
          return (link != null && link.href != null);
        })
        .forEach(function(link) {
          link.href = cacheBuster(link.href);
        });
    }
  };
  var port = ar.port || 9485;
  var host = (!br['server']) ? window.location.hostname : br['server'];
  var connection = new WebSocket('ws://' + host + ':' + port);
  connection.onmessage = function(event) {
    var message = event.data;
    var b = window.brunch;
    if (!b || !b['auto-reload'] || !b['auto-reload'].enabled) return;
    if (reloaders[message] != null) {
      reloaders[message]();
    } else {
      reloaders.page();
    }
  };
})();
/*
	gh3.js
	Created : 2012.07.25 by k33g

	TODO :
		- Repositories for an organization
		- Search : http://developer.github.com/v3/search/
		- ...

	History :
		- 2012.07.25 : '0.0.1' : first version
		- 2012.07.26 : '0.0.2' : fixes
		- 2012.07.26 : '0.0.3' : gists pagination
		- 2012.07.28 : '0.0.4' :
			* refactoring : Gh3.Helper
			* gists filtering
			* gist comments filtering
			* file commits filtering
			* commits sorting
			* new Type : Gh3.Repositories (with pagination)
		- 2012.07.29 : '0.0.5' :
			* Gh3.Repositories : add search ability		
			* add Gh3.Users : search user ability
		- 2012.07.29 : '0.0.6' :
			* async.js compliant
		- 2012.08.02 : '0.0.7' :
			* Node compliant for the future ... becareful to dependencies			
*/

(function () {

	//var Gh3 = this.Gh3 = {}
	var root = this
	,	Gh3
	,	Kind
	,	Base64;
	
	if (typeof exports !== 'undefined') {
		Gh3 = exports;
	} else {
		Gh3 = root.Gh3 = {};
	}

	Gh3.VERSION = '0.0.7'; //2012.08.02
	
	//Object Model Tools (helpers) like Backbone
	Kind = function(){};
	
	Kind.inherits = function (parent, protoProps, staticProps) {
		var child
			, ctor = function(){}
			, merge = function (destination, source) {
				for (var prop in source) {
					destination[prop] = source[prop];
				}
		};
		//constructor ....
		if (protoProps && protoProps.hasOwnProperty('constructor')) {
			child = protoProps.constructor;
		} else {
			child = function(){ parent.apply(this, arguments); };
		}
	
		//inherits from parent
		merge(child, parent);
	
		ctor.prototype = parent.prototype;
		child.prototype = new ctor();
	
		//instance properties
		if(protoProps) merge(child.prototype, protoProps);
	
		//static properties
		if(staticProps) merge(child, staticProps);
	
		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;
	
		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;
	
		return child
	
	};
	Kind.extend = function (protoProps, staticProps) {
		var child = Kind.inherits(this, protoProps, staticProps);
		child.extend = this.extend;
		return child;
	};
	

	Base64 = { //http://www.webtoolkit.info/javascript-base64.html
 
		// private property
		_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	 	 
		// public method for decoding
		decode : function (input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
	 
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	 
			while (i < input.length) {
	 
				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));
	 
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
	 
				output = output + String.fromCharCode(chr1);
	 
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
	 
			}
	 
			output = Base64._utf8_decode(output);
	 
			return output;
	 
		},

		encode : function (input) {
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;

				input = Base64._utf8_encode(input);

				while (i < input.length) {

						chr1 = input.charCodeAt(i++);
						chr2 = input.charCodeAt(i++);
						chr3 = input.charCodeAt(i++);

						enc1 = chr1 >> 2;
						enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
						enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
						enc4 = chr3 & 63;

						if (isNaN(chr2)) {
								enc3 = enc4 = 64;
						} else if (isNaN(chr3)) {
								enc4 = 64;
						}

						output = output +
						this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
						this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

				}

				return output;
		},

		// private method for UTF-8 decoding
		_utf8_decode : function (utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
	 
			while ( i < utftext.length ) {
	 
				c = utftext.charCodeAt(i);
	 
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
	 
			}
	 
			return string;
		},

		// private method for UTF-8 encoding
		_utf8_encode : function (string) {
				string = string.replace(/\r\n/g,"\n");
				var utftext = "";

				for (var n = 0; n < string.length; n++) {

						var c = string.charCodeAt(n);

						if (c < 128) {
								utftext += String.fromCharCode(c);
						}
						else if((c > 127) && (c < 2048)) {
								utftext += String.fromCharCode((c >> 6) | 192);
								utftext += String.fromCharCode((c & 63) | 128);
						}
						else {
								utftext += String.fromCharCode((c >> 12) | 224);
								utftext += String.fromCharCode(((c >> 6) & 63) | 128);
								utftext += String.fromCharCode((c & 63) | 128);
						}

				}

				return utftext;
		}		
			 
	}


	Gh3.Base64 = Base64;

	if (window.XDomainRequest != null) {
		try {
			new XDomainRequest()
			$.support.cors = true
			$.ajaxSetup.xhr = function() { return new XDomainRequest() }
		} catch (e) {}
	}

	Gh3.Helper = Kind.extend({

	},{
		protocol : "https",
		domain : "api.github.com",
		callHttpApi : function (apiParams) {
			apiParams.url = Gh3.Helper.protocol + "://" + Gh3.Helper.domain + "/" + apiParams.service;
			if ($.support.cors) {
				apiParams.headers = { Origin: location.host }
				var success = apiParams.success
				if ($.isFunction(success)) {
					apiParams.success = function (data, textStatus, jqXHR) {
						success.call(this, {data: data}, textStatus, jqXHR)
					}
				}
			} else {
				//delete apiParams.service;
				apiParams.dataType = 'jsonp';
			}

			$.ajax(apiParams);
		}
	});

	Gh3.Users = Kind.extend({

	},{//static members
		users : [],
		search : function (keyword, pagesInfo, callback) {
			Gh3.Users.users = [];
			Gh3.Helper.callHttpApi({
				service : "legacy/user/search/"+keyword,
				data : pagesInfo,
				//beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); },
				success : function(res) {
					_.each(res.data.users, function (user) {
						Gh3.Users.users.push(new Gh3.User(user.login, user));
					});
					
					if (callback) callback(null, Gh3.Users);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		reverse : function () {
			Gh3.Users.users.reverse();
		},
		sort : function (comparison_func) {
			if (comparison_func) {
				Gh3.Users.users.sort(comparison_func);
			} else {
				Gh3.Users.users.sort();
			}
		},
		getAll : function() { return Gh3.Users.users; },
		getByName : function (name) {
			return _.find(Gh3.Users.users, function (item) {
				return item.name == name;
			});
		},
		each : function (callback) {
			_.each(Gh3.Users.users, function (user) {
				callback(user);
			});
		},
		filter : function (comparator) {
			return _.filter(Gh3.Users.users, comparator);
		}

	});

	Gh3.User = Kind.extend({
	
		constructor : function (login, user_infos) {

			if (user_infos) {
				for(var prop in user_infos) {
					this[prop] = user_infos[prop];
				}
			}

			if (login) {
				this.login = login; 
			} else { 
				throw "login !";
			}
		},
		fetch : function (callback) {
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "users/"+that.login,
				success : function (res) {
					for(var prop in res.data) {
						that[prop] = res.data[prop];
					}
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});
			
		}
		
		
	},{});
	

	/*Gists*/

	Gh3.GistComment = Kind.extend({
		constructor : function (gistCommentData) {
			for(var prop in gistCommentData) {
				this[prop] = gistCommentData[prop];
			}
		}
	},{});

	Gh3.Gist = Kind.extend({
		constructor : function (gistData) {
			for(var prop in gistData) {
				this[prop] = gistData[prop];
			}
		},
		fetchContents : function (callback) {
			var that = this;
			that.files = [];

			Gh3.Helper.callHttpApi({
				service : "gists/"+that.id,
				success : function(res) {

					for(var file in res.data.files) {
						that.files.push(res.data.files[file]);
					}

					delete res.data.files;

					for(var prop in res.data) {
						that[prop] = res.data[prop];
					}
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});


		},
		fetchComments : function (callback) {
			var that = this;
			that.comments = [];


			Gh3.Helper.callHttpApi({
				service : "gists/"+that.id+"/comments",
				success : function(res) {
					_.each(res.data, function (comment) {
						that.comments.push(new Gh3.GistComment(comment));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});
	
		},
		getFileByName : function (name) {
			return _.find(this.files, function (file) {
				return file.filename == name;
			});
		},
		getFiles : function () {
			return this.files;
		},
		eachFile : function (callback) {
			_.each(this.files, function (file) {
				callback(file);

			});
		},
		getComments : function () { return this.comments; },
		eachComment : function (callback) {
			_.each(this.comments, function (comment) {
				callback(comment);
			});
		},
		filterComments : function (comparator) {
			return _.filter(this.comments, comparator);
		}

	},{});

	Gh3.Gists = Kind.extend({//http://developer.github.com/v3/gists/
		constructor : function (ghUser) {
			if (ghUser) this.user = ghUser;
			this.gists = []
		}, 
		fetch : function (pagesInfo, paginationInfo, callback) {//http://developer.github.com/v3/#pagination
			var that = this;

			Gh3.Helper.callHttpApi({
				service : "users/"+that.user.login+"/gists",
				data : pagesInfo,
				beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); },
				success : function(res) {
					_.each(res.data, function (gist) {
						that.gists.push(new Gh3.Gist(gist));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},

		getGists : function () { return this.gists; },
		eachGist : function (callback) {
			_.each(this.gists, function (gist) {
				callback(gist);
			});
		},
		filter : function (comparator) {
			return _.filter(this.gists, comparator);
		}

	},{});


	Gh3.Commit = Kind.extend({
		constructor : function (commitInfos) {
			this.author = commitInfos.author;
			this.author.email = commitInfos.commit.author.email;
			this.author.name = commitInfos.commit.author.name;
			this.date =	commitInfos.commit.author.date;
			this.message = commitInfos.commit.message;
			this.sha = commitInfos.sha;
			this.url = commitInfos.url;
		}
	},{});

	Gh3.ItemContent = Kind.extend({
		constructor : function (contentItem, ghUser, repositoryName, branchName) {
			for(var prop in contentItem) {
				this[prop] = contentItem[prop];
			}
			if (ghUser) this.user = ghUser;
			if (repositoryName) this.repositoryName = repositoryName;
			if (branchName) this.branchName = branchName;
		}

	},{});

	Gh3.File = Gh3.ItemContent.extend({
		constructor : function (contentItem, ghUser, repositoryName, branchName) {
			Gh3.File.__super__.constructor.call(this, contentItem, ghUser, repositoryName, branchName);
		},
		fetchContent : function (callback) {
			var that = this;
			
			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/contents/"+that.path,
				success : function(res) {
					that.content = res.data.content;
					that.rawContent = Base64.decode(res.data.content);

					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		fetchCommits : function (callback) {//http://developer.github.com/v3/repos/commits/
			var that = this;
			that.commits = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/commits",
				data : {path: that.path },
				success : function(res) {
					_.each(res.data, function (commit) {
						that.commits.push(new Gh3.Commit(commit));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		getRawContent : function() { return this.rawContent; },
		getCommits : function () { return this.commits; },
		getLastCommit : function () {
			return this.commits[0];
		},
		getFirstCommit : function () {
			return this.commits[this.commits.length-1];
		},
		eachCommit : function (callback) {
			_.each(this.commits, function (branch) {
				callback(branch);
			});
		},
		filterCommits : function (comparator) {
			return _.filter(this.commits, comparator);
		},
		reverseCommits : function () {
			this.commits.reverse();
		},
		sortCommits: function (comparison_func) {
			if (comparison_func) {
				this.commits.sort(comparison_func);
			} else {
				this.commits.sort();
			}
		}
	},{});


	Gh3.Dir = Gh3.ItemContent.extend({
		constructor : function (contentItem, ghUser, repositoryName, branchName) {
			Gh3.Dir.__super__.constructor.call(this, contentItem, ghUser, repositoryName, branchName);
		},
		fetchContents : function (callback) {
			var that = this;
			that.contents = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/contents/"+that.path,
				data : {ref: that.branchName },
				success : function(res) {
					_.each(res.data, function (item) {
						if (item.type == "file") that.contents.push(new Gh3.File(item, that.user, that.repositoryName, that.branchName));
						if (item.type == "dir") that.contents.push(new Gh3.Dir(item, that.user, that.repositoryName, that.branchName));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		reverseContents : function () {
			this.contents.reverse();
		},
		sortContents : function (comparison_func) {
			if (comparison_func) {
				this.contents.sort(comparison_func);
			} else {
				this.contents.sort();
			}
		},
		getContents : function() { return this.contents; },
		getFileByName : function (name) {
			return _.find(this.contents, function (item) {
				return item.name == name && item.type == "file";
			});
		},
		getDirByName : function (name) {
			return _.find(this.contents, function (item) {
				return item.name == name && item.type == "dir";
			});
		},
		eachContent : function (callback) {
			_.each(this.contents, function (branch) {
				callback(branch);
			});
		},
		filterContents : function (comparator) {
			return _.filter(this.contents, comparator);
		}

	},{});

	Gh3.Branch = Kind.extend({
		constructor : function (name, sha, url, ghUser, repositoryName) {
			if (name) this.name = name;
			if (sha) this.sha = sha;
			if (url) this.url = url;

			if (ghUser) this.user = ghUser;
			if (repositoryName) this.repositoryName = repositoryName;

		},

		fetchContents : function (callback) { //see how to refactor with Gh3.Dir
			var that = this;
			that.contents = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.repositoryName+"/contents/",
				data : {ref: that.name },
				success : function(res) {
					_.each(res.data, function (item) {

						if (item.type == "file") that.contents.push(new Gh3.File(item, that.user, that.repositoryName, that.name));
						if (item.type == "dir") that.contents.push(new Gh3.Dir(item, that.user, that.repositoryName, that.name));
					});
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		reverseContents : function () {
			this.contents.reverse();
		},
		sortContents : function (comparison_func) {
			if (comparison_func) {
				this.contents.sort(comparison_func);
			} else {
				this.contents.sort();
			}
		},
		getContents : function() { return this.contents; },
		getFileByName : function (name) {
			return _.find(this.contents, function (item) {
				return item.name == name && item.type == "file";
			});
		},
		getDirByName : function (name) {
			return _.find(this.contents, function (item) {
				return item.name == name && item.type == "dir";
			});
		},
		eachContent : function (callback) {
			_.each(this.contents, function (branch) {
				callback(branch);
			});
		},
		filterContents : function (comparator) {
			return _.filter(this.contents, comparator);
		}
		
	},{});

	Gh3.Repository = Kind.extend({
		constructor : function (name, ghUser, infos) {

			if (infos) {
				for(var prop in infos) {
					this[prop] = infos[prop];
				}
			}

			if (name) this.name = name; 

			if (ghUser) this.user = ghUser;

		},
		fetch : function (callback) {
			var that = this;
			//TODO test user.login & name

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name,
				success : function(res) {
					for(var prop in res.data) {
						that[prop] = res.data[prop];
					}
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		fetchBranches : function (callback) {
			var that = this;
			that.branches = [];

			Gh3.Helper.callHttpApi({
				service : "repos/"+that.user.login+"/"+that.name+"/branches",
				success : function(res) {
					_.each(res.data, function (branch) {
						that.branches.push(new Gh3.Branch(branch.name, branch.commit.sha, branch.commit.url, that.user, that.name));
					});
					
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		getBranches : function () { return this.branches; },
		getBranchByName : function (name) {
			return _.find(this.branches, function (branch) {
				return branch.name == name;
			});
		},
		eachBranch : function (callback) {
			_.each(this.branches, function (branch) {
				callback(branch);
			});
		},
		reverseBranches : function () {
			this.branches.reverse();
		},
		sortBranches : function (comparison_func) {
			if (comparison_func) {
				this.branches.sort(comparison_func);
			} else {
				this.branches.sort();
			}
		}

	},{});

	//TODO: Repositories for an organization
	
	Gh3.Repositories = Kind.extend({//http://developer.github.com/v3/repos/
		constructor : function (ghUser) {

			if (ghUser) this.user = ghUser;

		},
		//List user repositories
		fetch : function (pagesInfoAndParameters, paginationInfo, callback) {
			var that = this;
			that.repositories = [];

			Gh3.Helper.callHttpApi({
				service : "users/"+that.user.login+"/repos",
				data : pagesInfoAndParameters,
				beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); },
				success : function(res) {
					_.each(res.data, function (repository) {
						that.repositories.push(new Gh3.Repository(repository.name, that.user));
					});
					
					if (callback) callback(null, that);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		reverseRepositories : function () {
			this.repositories.reverse();
		},
		sortRepositories : function (comparison_func) {
			if (comparison_func) {
				this.repositories.sort(comparison_func);
			} else {
				this.repositories.sort();
			}
		},
		getRepositories : function() { return this.repositories; },
		getRepositoryByName : function (name) {
			return _.find(this.repositories, function (item) {
				return item.name == name;
			});
		},

		eachRepository : function (callback) {
			_.each(this.repositories, function (repository) {
				callback(repository);
			});
		},
		filterRepositories : function (comparator) {
			return _.filter(this.repositories, comparator);
		}		


	},{//static members
		repositories : [],
		search : function (keyword, pagesInfo, callback) {
			Gh3.Repositories.repositories = [];
			Gh3.Helper.callHttpApi({
				service : "legacy/repos/search/"+keyword,
				data : pagesInfo,
				//beforeSend: function (xhr) { xhr.setRequestHeader ("rel", paginationInfo); },
				success : function(res) {
					//console.log("*** : ", res);
					_.each(res.data.repositories, function (repository) {
						Gh3.Repositories.repositories.push(new Gh3.Repository(repository.name, new Gh3.User(repository.owner), repository));
						//owner & login : same thing ???
					});
					
					if (callback) callback(null, Gh3.Repositories);
				},
				error : function (res) {
					if (callback) callback(new Error(res));
				}
			});

		},
		reverse : function () {
			Gh3.Repositories.repositories.reverse();
		},
		sort : function (comparison_func) {
			if (comparison_func) {
				Gh3.Repositories.repositories.sort(comparison_func);
			} else {
				Gh3.Repositories.repositories.sort();
			}
		},
		getAll : function() { return Gh3.Repositories.repositories; },
		getByName : function (name) {
			return _.find(Gh3.Repositories.repositories, function (item) {
				return item.name == name;
			});
		},
		each : function (callback) {
			_.each(Gh3.Repositories.repositories, function (repository) {
				callback(repository);
			});
		},
		filter : function (comparator) {
			return _.filter(Gh3.Repositories.repositories, comparator);
		}	
	});


	
}).call(this);
var hljs=new function(){function l(o){return o.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function b(p){for(var o=p.firstChild;o;o=o.nextSibling){if(o.nodeName=="CODE"){return o}if(!(o.nodeType==3&&o.nodeValue.match(/\s+/))){break}}}function h(p,o){return Array.prototype.map.call(p.childNodes,function(q){if(q.nodeType==3){return o?q.nodeValue.replace(/\n/g,""):q.nodeValue}if(q.nodeName=="BR"){return"\n"}return h(q,o)}).join("")}function a(q){var p=(q.className+" "+q.parentNode.className).split(/\s+/);p=p.map(function(r){return r.replace(/^language-/,"")});for(var o=0;o<p.length;o++){if(e[p[o]]||p[o]=="no-highlight"){return p[o]}}}function c(q){var o=[];(function p(r,s){for(var t=r.firstChild;t;t=t.nextSibling){if(t.nodeType==3){s+=t.nodeValue.length}else{if(t.nodeName=="BR"){s+=1}else{if(t.nodeType==1){o.push({event:"start",offset:s,node:t});s=p(t,s);o.push({event:"stop",offset:s,node:t})}}}}return s})(q,0);return o}function j(x,v,w){var p=0;var y="";var r=[];function t(){if(x.length&&v.length){if(x[0].offset!=v[0].offset){return(x[0].offset<v[0].offset)?x:v}else{return v[0].event=="start"?x:v}}else{return x.length?x:v}}function s(A){function z(B){return" "+B.nodeName+'="'+l(B.value)+'"'}return"<"+A.nodeName+Array.prototype.map.call(A.attributes,z).join("")+">"}while(x.length||v.length){var u=t().splice(0,1)[0];y+=l(w.substr(p,u.offset-p));p=u.offset;if(u.event=="start"){y+=s(u.node);r.push(u.node)}else{if(u.event=="stop"){var o,q=r.length;do{q--;o=r[q];y+=("</"+o.nodeName.toLowerCase()+">")}while(o!=u.node);r.splice(q,1);while(q<r.length){y+=s(r[q]);q++}}}}return y+l(w.substr(p))}function f(q){function o(s,r){return RegExp(s,"m"+(q.cI?"i":"")+(r?"g":""))}function p(y,w){if(y.compiled){return}y.compiled=true;var s=[];if(y.k){var r={};function z(A,t){t.split(" ").forEach(function(B){var C=B.split("|");r[C[0]]=[A,C[1]?Number(C[1]):1];s.push(C[0])})}y.lR=o(y.l||hljs.IR,true);if(typeof y.k=="string"){z("keyword",y.k)}else{for(var x in y.k){if(!y.k.hasOwnProperty(x)){continue}z(x,y.k[x])}}y.k=r}if(w){if(y.bWK){y.b="\\b("+s.join("|")+")\\s"}y.bR=o(y.b?y.b:"\\B|\\b");if(!y.e&&!y.eW){y.e="\\B|\\b"}if(y.e){y.eR=o(y.e)}y.tE=y.e||"";if(y.eW&&w.tE){y.tE+=(y.e?"|":"")+w.tE}}if(y.i){y.iR=o(y.i)}if(y.r===undefined){y.r=1}if(!y.c){y.c=[]}for(var v=0;v<y.c.length;v++){if(y.c[v]=="self"){y.c[v]=y}p(y.c[v],y)}if(y.starts){p(y.starts,w)}var u=[];for(var v=0;v<y.c.length;v++){u.push(y.c[v].b)}if(y.tE){u.push(y.tE)}if(y.i){u.push(y.i)}y.t=u.length?o(u.join("|"),true):{exec:function(t){return null}}}p(q)}function d(D,E){function o(r,M){for(var L=0;L<M.c.length;L++){var K=M.c[L].bR.exec(r);if(K&&K.index==0){return M.c[L]}}}function s(K,r){if(K.e&&K.eR.test(r)){return K}if(K.eW){return s(K.parent,r)}}function t(r,K){return K.i&&K.iR.test(r)}function y(L,r){var K=F.cI?r[0].toLowerCase():r[0];return L.k.hasOwnProperty(K)&&L.k[K]}function G(){var K=l(w);if(!A.k){return K}var r="";var N=0;A.lR.lastIndex=0;var L=A.lR.exec(K);while(L){r+=K.substr(N,L.index-N);var M=y(A,L);if(M){v+=M[1];r+='<span class="'+M[0]+'">'+L[0]+"</span>"}else{r+=L[0]}N=A.lR.lastIndex;L=A.lR.exec(K)}return r+K.substr(N)}function z(){if(A.sL&&!e[A.sL]){return l(w)}var r=A.sL?d(A.sL,w):g(w);if(A.r>0){v+=r.keyword_count;B+=r.r}return'<span class="'+r.language+'">'+r.value+"</span>"}function J(){return A.sL!==undefined?z():G()}function I(L,r){var K=L.cN?'<span class="'+L.cN+'">':"";if(L.rB){x+=K;w=""}else{if(L.eB){x+=l(r)+K;w=""}else{x+=K;w=r}}A=Object.create(L,{parent:{value:A}});B+=L.r}function C(K,r){w+=K;if(r===undefined){x+=J();return 0}var L=o(r,A);if(L){x+=J();I(L,r);return L.rB?0:r.length}var M=s(A,r);if(M){if(!(M.rE||M.eE)){w+=r}x+=J();do{if(A.cN){x+="</span>"}A=A.parent}while(A!=M.parent);if(M.eE){x+=l(r)}w="";if(M.starts){I(M.starts,"")}return M.rE?0:r.length}if(t(r,A)){throw"Illegal"}w+=r;return r.length||1}var F=e[D];f(F);var A=F;var w="";var B=0;var v=0;var x="";try{var u,q,p=0;while(true){A.t.lastIndex=p;u=A.t.exec(E);if(!u){break}q=C(E.substr(p,u.index-p),u[0]);p=u.index+q}C(E.substr(p));return{r:B,keyword_count:v,value:x,language:D}}catch(H){if(H=="Illegal"){return{r:0,keyword_count:0,value:l(E)}}else{throw H}}}function g(s){var o={keyword_count:0,r:0,value:l(s)};var q=o;for(var p in e){if(!e.hasOwnProperty(p)){continue}var r=d(p,s);r.language=p;if(r.keyword_count+r.r>q.keyword_count+q.r){q=r}if(r.keyword_count+r.r>o.keyword_count+o.r){q=o;o=r}}if(q.language){o.second_best=q}return o}function i(q,p,o){if(p){q=q.replace(/^((<[^>]+>|\t)+)/gm,function(r,v,u,t){return v.replace(/\t/g,p)})}if(o){q=q.replace(/\n/g,"<br>")}return q}function m(r,u,p){var v=h(r,p);var t=a(r);if(t=="no-highlight"){return}var w=t?d(t,v):g(v);t=w.language;var o=c(r);if(o.length){var q=document.createElement("pre");q.innerHTML=w.value;w.value=j(o,c(q),v)}w.value=i(w.value,u,p);var s=r.className;if(!s.match("(\\s|^)(language-)?"+t+"(\\s|$)")){s=s?(s+" "+t):t}r.innerHTML=w.value;r.className=s;r.result={language:t,kw:w.keyword_count,re:w.r};if(w.second_best){r.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function n(){if(n.called){return}n.called=true;Array.prototype.map.call(document.getElementsByTagName("pre"),b).filter(Boolean).forEach(function(o){m(o,hljs.tabReplace)})}function k(){window.addEventListener("DOMContentLoaded",n,false);window.addEventListener("load",n,false)}var e={};this.LANGUAGES=e;this.highlight=d;this.highlightAuto=g;this.fixMarkup=i;this.highlightBlock=m;this.initHighlighting=n;this.initHighlightingOnLoad=k;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.inherit=function(q,r){var o={};for(var p in q){o[p]=q[p]}if(r){for(var p in r){o[p]=r[p]}}return o}}();hljs.LANGUAGES.bash=function(a){var g="true false";var e="if then else elif fi for break continue while in do done echo exit return set declare";var c={cN:"variable",b:"\\$[a-zA-Z0-9_#]+"};var b={cN:"variable",b:"\\${([^}]|\\\\})+}"};var h={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE,c,b],r:0};var d={cN:"string",b:"'",e:"'",c:[{b:"''"}],r:0};var f={cN:"test_condition",b:"",e:"",c:[h,d,c,b],k:{literal:g},r:0};return{k:{keyword:e,literal:g},c:[{cN:"shebang",b:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",r:10},c,b,a.HCM,h,d,a.inherit(f,{b:"\\[ ",e:" \\]",r:0}),a.inherit(f,{b:"\\[\\[ ",e:" \\]\\]"})]}}(hljs);hljs.LANGUAGES.cs=function(a){return{k:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},a.CLCM,a.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},a.ASM,a.QSM,a.CNM]}}(hljs);hljs.LANGUAGES.ruby=function(e){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var j="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};var c={cN:"yardoctag",b:"@[A-Za-z]+"};var k=[{cN:"comment",b:"#",e:"$",c:[c]},{cN:"comment",b:"^\\=begin",e:"^\\=end",c:[c],r:10},{cN:"comment",b:"^__END__",e:"\\n$"}];var d={cN:"subst",b:"#\\{",e:"}",l:a,k:g};var i=[e.BE,d];var b=[{cN:"string",b:"'",e:"'",c:i,r:0},{cN:"string",b:'"',e:'"',c:i,r:0},{cN:"string",b:"%[qw]?\\(",e:"\\)",c:i},{cN:"string",b:"%[qw]?\\[",e:"\\]",c:i},{cN:"string",b:"%[qw]?{",e:"}",c:i},{cN:"string",b:"%[qw]?<",e:">",c:i,r:10},{cN:"string",b:"%[qw]?/",e:"/",c:i,r:10},{cN:"string",b:"%[qw]?%",e:"%",c:i,r:10},{cN:"string",b:"%[qw]?-",e:"-",c:i,r:10},{cN:"string",b:"%[qw]?\\|",e:"\\|",c:i,r:10}];var h={cN:"function",bWK:true,e:" |$|;",k:"def",c:[{cN:"title",b:j,l:a,k:g},{cN:"params",b:"\\(",e:"\\)",l:a,k:g}].concat(k)};var f=k.concat(b.concat([{cN:"class",bWK:true,e:"$|;",k:"class module",c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]}].concat(k)},h,{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:b.concat([{b:j}]),r:0},{cN:"symbol",b:a+":",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:k.concat([{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[e.BE,d]}]),r:0}]));d.c=f;h.c[1].c=f;return{l:a,k:g,c:f}}(hljs);hljs.LANGUAGES.diff=function(a){return{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}}(hljs);hljs.LANGUAGES.javascript=function(a){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",i:"\\n",c:[{b:"\\\\/"}]},{b:"<",e:">;",sL:"xml"}],r:0},{cN:"function",bWK:true,e:"{",k:"function",c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[a.CLCM,a.CBLCLM],i:"[\"'\\(]"}],i:"\\[|%"}]}}(hljs);hljs.LANGUAGES.css=function(a){var b={cN:"function",b:a.IR+"\\(",e:"\\)",c:[a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:"import page media charset",c:[b,a.ASM,a.QSM,a.NM]},{cN:"tag",b:a.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[b,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}(hljs);hljs.LANGUAGES.xml=function(a){var c="[A-Za-z0-9\\._:-]+";var b={eW:true,c:[{cN:"attribute",b:c,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},b]}]}}(hljs);hljs.LANGUAGES.lisp=function(i){var k="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*";var l="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";var a={cN:"literal",b:"\\b(t{1}|nil)\\b"};var d=[{cN:"number",b:l},{cN:"number",b:"#b[0-1]+(/[0-1]+)?"},{cN:"number",b:"#o[0-7]+(/[0-7]+)?"},{cN:"number",b:"#x[0-9a-f]+(/[0-9a-f]+)?"},{cN:"number",b:"#c\\("+l+" +"+l,e:"\\)"}];var h={cN:"string",b:'"',e:'"',c:[i.BE],r:0};var m={cN:"comment",b:";",e:"$"};var g={cN:"variable",b:"\\*",e:"\\*"};var n={cN:"keyword",b:"[:&]"+k};var b={b:"\\(",e:"\\)",c:["self",a,h].concat(d)};var e={cN:"quoted",b:"['`]\\(",e:"\\)",c:d.concat([h,g,n,b])};var c={cN:"quoted",b:"\\(quote ",e:"\\)",k:{title:"quote"},c:d.concat([h,g,n,b])};var j={cN:"list",b:"\\(",e:"\\)"};var f={cN:"body",eW:true,eE:true};j.c=[{cN:"title",b:k},f];f.c=[e,c,j,a].concat(d).concat([h,m,g,n]);return{i:"[^\\s]",c:d.concat([a,h,m,e,c,j])}}(hljs);hljs.LANGUAGES.profile=function(a){return{c:[a.CNM,{cN:"builtin",b:"{",e:"}$",eB:true,eE:true,c:[a.ASM,a.QSM],r:0},{cN:"filename",b:"[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",e:":",eE:true},{cN:"header",b:"(ncalls|tottime|cumtime)",e:"$",k:"ncalls tottime|10 cumtime|10 filename",r:10},{cN:"summary",b:"function calls",e:"$",c:[a.CNM],r:10},a.ASM,a.QSM,{cN:"function",b:"\\(",e:"\\)$",c:[{cN:"title",b:a.UIR,r:0}],r:0}]}}(hljs);hljs.LANGUAGES.http=function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}}(hljs);hljs.LANGUAGES.java=function(a){return{k:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"@[A-Za-z]+"}],r:10},a.CLCM,a.CBLCLM,a.ASM,a.QSM,{cN:"class",bWK:true,e:"{",k:"class interface",i:":",c:[{bWK:true,k:"extends implements",r:10},{cN:"title",b:a.UIR}]},a.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}}(hljs);hljs.LANGUAGES.php=function(a){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var b=[a.inherit(a.ASM,{i:null}),a.inherit(a.QSM,{i:null}),{cN:"string",b:'b"',e:'"',c:[a.BE]},{cN:"string",b:"b'",e:"'",c:[a.BE]}];var c=[a.BNM,a.CNM];var d={cN:"title",b:a.UIR};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",c:[a.CLCM,a.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"}]},{cN:"comment",eB:true,b:"__halt_compiler.+?;",eW:true},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[a.BE]},{cN:"preprocessor",b:"<\\?php",r:10},{cN:"preprocessor",b:"\\?>"},e,{cN:"function",bWK:true,e:"{",k:"function",i:"\\$|\\[|%",c:[d,{cN:"params",b:"\\(",e:"\\)",c:["self",e,a.CBLCLM].concat(b).concat(c)}]},{cN:"class",bWK:true,e:"{",k:"class",i:"[:\\(\\$]",c:[{bWK:true,eW:true,k:"extends",c:[d]},d]},{b:"=>"}].concat(b).concat(c)}}(hljs);hljs.LANGUAGES.python=function(a){var f={cN:"prompt",b:"^(>>>|\\.\\.\\.) "};var c=[{cN:"string",b:"(u|b)?r?'''",e:"'''",c:[f],r:10},{cN:"string",b:'(u|b)?r?"""',e:'"""',c:[f],r:10},{cN:"string",b:"(u|r|ur)'",e:"'",c:[a.BE],r:10},{cN:"string",b:'(u|r|ur)"',e:'"',c:[a.BE],r:10},{cN:"string",b:"(b|br)'",e:"'",c:[a.BE]},{cN:"string",b:'(b|br)"',e:'"',c:[a.BE]}].concat([a.ASM,a.QSM]);var e={cN:"title",b:a.UIR};var d={cN:"params",b:"\\(",e:"\\)",c:["self",a.CNM,f].concat(c)};var b={bWK:true,e:":",i:"[${=;\\n]",c:[e,d],r:10};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},i:"(</|->|\\?)",c:c.concat([f,a.HCM,a.inherit(b,{cN:"function",k:"def"}),a.inherit(b,{cN:"class",k:"class"}),a.CNM,{cN:"decorator",b:"@",e:"$"},{b:"\\b(print|exec)\\("}])}}(hljs);hljs.LANGUAGES.sql=function(a){return{cI:true,c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}(hljs);hljs.LANGUAGES.ini=function(a){return{cI:true,i:"[^\\s]",c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM]}]}]}}(hljs);hljs.LANGUAGES.perl=function(e){var a="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var d={cN:"subst",b:"[$@]\\{",e:"\\}",k:a,r:10};var b={cN:"variable",b:"\\$\\d"};var i={cN:"variable",b:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};var f=[e.BE,d,b,i];var h={b:"->",c:[{b:e.IR},{b:"{",e:"}"}]};var g={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var c=[b,i,e.HCM,g,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},h,{cN:"string",b:"q[qwxr]?\\s*\\(",e:"\\)",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\[",e:"\\]",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\{",e:"\\}",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\|",e:"\\|",c:f,r:5},{cN:"string",b:"q[qwxr]?\\s*\\<",e:"\\>",c:f,r:5},{cN:"string",b:"qw\\s+q",e:"q",c:f,r:5},{cN:"string",b:"'",e:"'",c:[e.BE],r:0},{cN:"string",b:'"',e:'"',c:f,r:0},{cN:"string",b:"`",e:"`",c:[e.BE]},{cN:"string",b:"{\\w+}",r:0},{cN:"string",b:"-?\\w+\\s*\\=\\>",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"("+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,g,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bWK:true,e:"(\\s*\\(.*?\\))?[;{]",k:"sub",r:5},{cN:"operator",b:"-\\w\\b",r:0}];d.c=c;h.c[1].c=c;return{k:a,c:c}}(hljs);hljs.LANGUAGES.objectivec=function(a){var b={keyword:"int float while private char catch export sizeof typedef const struct for union unsigned long volatile static protected bool mutable if public do return goto void enum else break extern class asm case short default double throw register explicit signed typename try this switch continue wchar_t inline readonly assign property protocol self synchronized end synthesize id optional required implementation nonatomic interface super unichar finally dynamic IBOutlet IBAction selector strong weak readonly",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection class UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};return{k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.CNM,a.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",bWK:true,e:"({|$)",k:"interface class protocol implementation",c:[{cN:"id",b:a.UIR}]},{cN:"variable",b:"\\."+a.UIR}]}}(hljs);hljs.LANGUAGES.coffeescript=function(c){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off ",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf"};var a="[A-Za-z$_][0-9A-Za-z$_]*";var e={cN:"title",b:a};var d={cN:"subst",b:"#\\{",e:"}",k:b,c:[c.BNM,c.CNM]};return{k:b,c:[c.BNM,c.CNM,c.ASM,{cN:"string",b:'"""',e:'"""',c:[c.BE,d]},{cN:"string",b:'"',e:'"',c:[c.BE,d],r:0},{cN:"comment",b:"###",e:"###"},c.HCM,{cN:"regexp",b:"///",e:"///",c:[c.HCM]},{cN:"regexp",b:"//[gim]*"},{cN:"regexp",b:"/\\S(\\\\.|[^\\n])*/[gim]*"},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"},{cN:"function",b:a+"\\s*=\\s*(\\(.+\\))?\\s*[-=]>",rB:true,c:[e,{cN:"params",b:"\\(",e:"\\)"}]},{cN:"class",bWK:true,k:"class",e:"$",i:":",c:[{bWK:true,k:"extends",eW:true,i:":",c:[e]},e]},{cN:"property",b:"@"+a}]}}(hljs);hljs.LANGUAGES.nginx=function(b){var c=[{cN:"variable",b:"\\$\\d+"},{cN:"variable",b:"\\${",e:"}"},{cN:"variable",b:"[\\$\\@]"+b.UIR}];var a={eW:true,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[b.HCM,{cN:"string",b:'"',e:'"',c:[b.BE].concat(c),r:0},{cN:"string",b:"'",e:"'",c:[b.BE].concat(c),r:0},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:true,eE:true},{cN:"regexp",b:"\\s\\^",e:"\\s|{|;",rE:true,c:[b.BE].concat(c)},{cN:"regexp",b:"~\\*?\\s+",e:"\\s|{|;",rE:true,c:[b.BE].concat(c)},{cN:"regexp",b:"\\*(\\.[a-z\\-]+)+",c:[b.BE].concat(c)},{cN:"regexp",b:"([a-z\\-]+\\.)+\\*",c:[b.BE].concat(c)},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0}].concat(c)};return{c:[b.HCM,{b:b.UIR+"\\s",e:";|{",rB:true,c:[{cN:"title",b:b.UIR,starts:a}]}],i:"[^\\s\\}]"}}(hljs);hljs.LANGUAGES.json=function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}}(hljs);hljs.LANGUAGES.django=function(c){function e(h,g){return(g==undefined||(!h.cN&&g.cN=="tag")||h.cN=="value")}function f(l,k){var g={};for(var j in l){if(j!="contains"){g[j]=l[j]}var m=[];for(var h=0;l.c&&h<l.c.length;h++){m.push(f(l.c[h],l))}if(e(l,k)){m=b.concat(m)}if(m.length){g.c=m}}return g}var d={cN:"filter",b:"\\|[A-Za-z]+\\:?",eE:true,k:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",c:[{cN:"argument",b:'"',e:'"'}]};var b=[{cN:"template_comment",b:"{%\\s*comment\\s*%}",e:"{%\\s*endcomment\\s*%}"},{cN:"template_comment",b:"{#",e:"#}"},{cN:"template_tag",b:"{%",e:"%}",k:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone",c:[d]},{cN:"variable",b:"{{",e:"}}",c:[d]}];var a=f(c.LANGUAGES.xml);a.cI=true;return a}(hljs);hljs.LANGUAGES.cpp=function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};return{k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$"},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}}(hljs);hljs.LANGUAGES.clojure=function(l){var e={built_in:"def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for doseq dosync dotimes and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import intern refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! import use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if throw printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time ns assert re-find re-groups rand-int rand mod locking assert-valid-fdecl alias namespace resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! memfn to-array future future-call into-array aset gen-class reduce merge map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"};var f="[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+";var a="[\\s:\\(\\{]+\\d+(\\.\\d+)?";var d={cN:"number",b:a,r:0};var j={cN:"string",b:'"',e:'"',c:[l.BE],r:0};var o={cN:"comment",b:";",e:"$",r:0};var n={cN:"collection",b:"[\\[\\{]",e:"[\\]\\}]"};var c={cN:"comment",b:"\\^"+f};var b={cN:"comment",b:"\\^\\{",e:"\\}"};var h={cN:"attribute",b:"[:]"+f};var m={cN:"list",b:"\\(",e:"\\)",r:0};var g={eW:true,eE:true,k:{literal:"true false nil"},r:0};var i={k:e,l:f,cN:"title",b:f,starts:g};m.c=[{cN:"comment",b:"comment"},i];g.c=[m,j,c,b,o,h,n,d];n.c=[m,j,c,o,h,n,d];return{i:"\\S",c:[o,m]}}(hljs);/*!
 * Copyright (C) 2011 by Vitaly Puzrin
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function () {
  'use strict';

  // getOwnPropertyNames shim for IE7. Thanks to @Fanjita
  // Not using es5-shams as they give more problems. See:
  // https://github.com/nodeca/js-yaml/issues/49#issuecomment-10963606
  if ('function' !== typeof Object.getOwnPropertyNames) {
    Object.getOwnPropertyNames = function getOwnPropertyNames(obj) {
      var keys = [], k;

      // Only iterate the keys if we were given an object, and
      // a special check for null, as typeof null == "object"
      if (!!obj && 'object' === typeof obj) {
        // Use a standard for in loop
        for (k in obj) {
          // A for in will iterate over members on the prototype
          // chain as well, but Object.getOwnPropertyNames returns
          // only those directly on the object, so use hasOwnProperty.
          if (obj.hasOwnProperty(k)) {
            keys.push(k);
          }
        }
      }

      return keys;
    };
  }
}());
var jsyaml = window.jsyaml = (function () {
var require = function (file, cwd) {
    var resolved = require.resolve(file, cwd || '/');
    var mod = require.modules[resolved];
    if (!mod) throw new Error(
        'Failed to resolve module ' + file + ', tried ' + resolved
    );
    var cached = require.cache[resolved];
    var res = cached? cached.exports : mod();
    return res;
};

require.paths = [];
require.modules = {};
require.cache = {};
require.extensions = [".js",".coffee"];

require._core = {
    'assert': true,
    'events': true,
    'fs': true,
    'path': true,
    'vm': true
};

require.resolve = (function () {
    return function (x, cwd) {
        if (!cwd) cwd = '/';
        
        if (require._core[x]) return x;
        var path = require.modules.path();
        cwd = path.resolve('/', cwd);
        var y = cwd || '/';
        
        if (x.match(/^(?:\.\.?\/|\/)/)) {
            var m = loadAsFileSync(path.resolve(y, x))
                || loadAsDirectorySync(path.resolve(y, x));
            if (m) return m;
        }
        
        var n = loadNodeModulesSync(x, y);
        if (n) return n;
        
        throw new Error("Cannot find module '" + x + "'");
        
        function loadAsFileSync (x) {
            x = path.normalize(x);
            if (require.modules[x]) {
                return x;
            }
            
            for (var i = 0; i < require.extensions.length; i++) {
                var ext = require.extensions[i];
                if (require.modules[x + ext]) return x + ext;
            }
        }
        
        function loadAsDirectorySync (x) {
            x = x.replace(/\/+$/, '');
            var pkgfile = path.normalize(x + '/package.json');
            if (require.modules[pkgfile]) {
                var pkg = require.modules[pkgfile]();
                var b = pkg.browserify;
                if (typeof b === 'object' && b.main) {
                    var m = loadAsFileSync(path.resolve(x, b.main));
                    if (m) return m;
                }
                else if (typeof b === 'string') {
                    var m = loadAsFileSync(path.resolve(x, b));
                    if (m) return m;
                }
                else if (pkg.main) {
                    var m = loadAsFileSync(path.resolve(x, pkg.main));
                    if (m) return m;
                }
            }
            
            return loadAsFileSync(x + '/index');
        }
        
        function loadNodeModulesSync (x, start) {
            var dirs = nodeModulesPathsSync(start);
            for (var i = 0; i < dirs.length; i++) {
                var dir = dirs[i];
                var m = loadAsFileSync(dir + '/' + x);
                if (m) return m;
                var n = loadAsDirectorySync(dir + '/' + x);
                if (n) return n;
            }
            
            var m = loadAsFileSync(x);
            if (m) return m;
        }
        
        function nodeModulesPathsSync (start) {
            var parts;
            if (start === '/') parts = [ '' ];
            else parts = path.normalize(start).split('/');
            
            var dirs = [];
            for (var i = parts.length - 1; i >= 0; i--) {
                if (parts[i] === 'node_modules') continue;
                var dir = parts.slice(0, i + 1).join('/') + '/node_modules';
                dirs.push(dir);
            }
            
            return dirs;
        }
    };
})();

require.alias = function (from, to) {
    var path = require.modules.path();
    var res = null;
    try {
        res = require.resolve(from + '/package.json', '/');
    }
    catch (err) {
        res = require.resolve(from, '/');
    }
    var basedir = path.dirname(res);
    
    var keys = (Object.keys || function (obj) {
        var res = [];
        for (var key in obj) res.push(key);
        return res;
    })(require.modules);
    
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key.slice(0, basedir.length + 1) === basedir + '/') {
            var f = key.slice(basedir.length);
            require.modules[to + f] = require.modules[basedir + f];
        }
        else if (key === basedir) {
            require.modules[to] = require.modules[basedir];
        }
    }
};

(function () {
    var process = {};
    
    require.define = function (filename, fn) {
        if (require.modules.__browserify_process) {
            process = require.modules.__browserify_process();
        }
        
        var dirname = require._core[filename]
            ? ''
            : require.modules.path().dirname(filename)
        ;
        
        var require_ = function (file) {
            var requiredModule = require(file, dirname);
            var cached = require.cache[require.resolve(file, dirname)];

            if (cached.parent === null) {
                cached.parent = module_;
            }

            return requiredModule;
        };
        require_.resolve = function (name) {
            return require.resolve(name, dirname);
        };
        require_.modules = require.modules;
        require_.define = require.define;
        require_.cache = require.cache;
        var module_ = {
            id : filename,
            filename: filename,
            exports : {},
            loaded : false,
            parent: null
        };
        
        require.modules[filename] = function () {
            require.cache[filename] = module_;
            fn.call(
                module_.exports,
                require_,
                module_,
                module_.exports,
                dirname,
                filename,
                process
            );
            module_.loaded = true;
            return module_.exports;
        };
    };
})();


require.define("path",function(require,module,exports,__dirname,__filename,process){function filter (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (fn(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length; i >= 0; i--) {
    var last = parts[i];
    if (last == '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Regex to split a filename into [*, dir, basename, ext]
// posix version
var splitPathRe = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
var resolvedPath = '',
    resolvedAbsolute = false;

for (var i = arguments.length; i >= -1 && !resolvedAbsolute; i--) {
  var path = (i >= 0)
      ? arguments[i]
      : process.cwd();

  // Skip empty and invalid entries
  if (typeof path !== 'string' || !path) {
    continue;
  }

  resolvedPath = path + '/' + resolvedPath;
  resolvedAbsolute = path.charAt(0) === '/';
}

// At this point the path should be resolved to a full absolute path, but
// handle relative paths to be safe (might happen when process.cwd() fails)

// Normalize the path
resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
var isAbsolute = path.charAt(0) === '/',
    trailingSlash = path.slice(-1) === '/';

// Normalize the path
path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }
  
  return (isAbsolute ? '/' : '') + path;
};


// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    return p && typeof p === 'string';
  }).join('/'));
};


exports.dirname = function(path) {
  var dir = splitPathRe.exec(path)[1] || '';
  var isWindows = false;
  if (!dir) {
    // No dirname
    return '.';
  } else if (dir.length === 1 ||
      (isWindows && dir.length <= 3 && dir.charAt(1) === ':')) {
    // It is just a slash or a drive letter with a slash
    return dir;
  } else {
    // It is a full dirname, strip trailing slash
    return dir.substring(0, dir.length - 1);
  }
};


exports.basename = function(path, ext) {
  var f = splitPathRe.exec(path)[2] || '';
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPathRe.exec(path)[3] || '';
};
});

require.define("__browserify_process",function(require,module,exports,__dirname,__filename,process){var process = module.exports = {};

process.nextTick = (function () {
    var queue = [];
    var canPost = typeof window !== 'undefined'
        && window.postMessage && window.addEventListener
    ;
    
    if (canPost) {
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'browserify-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);
    }
    
    return function (fn) {
        if (canPost) {
            queue.push(fn);
            window.postMessage('browserify-tick', '*');
        }
        else setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    if (name === 'evals') return (require)('vm')
    else throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    process.cwd = function () { return cwd };
    process.chdir = function (dir) {
        if (!path) path = require('path');
        cwd = path.resolve(dir, cwd);
    };
})();
});

require.define("/package.json",function(require,module,exports,__dirname,__filename,process){module.exports = {"main":"./index.js"}});

require.define("/index.js",function(require,module,exports,__dirname,__filename,process){module.exports = require('./lib/js-yaml.js');
});

require.define("/lib/js-yaml.js",function(require,module,exports,__dirname,__filename,process){/**
 *  jsyaml
 **/


'use strict';


var fs = require('fs');
var _loader = require('./js-yaml/loader');


var jsyaml = module.exports = {};


jsyaml.scan = function scan(stream, callback, Loader) {
  Loader = (Loader || _loader.SafeLoader);

  var loader = new Loader(stream);
  while (loader.checkToken()) {
    callback(loader.getToken());
  }
};


jsyaml.compose = function compose(stream, Loader) {
  Loader = (Loader || _loader.SafeLoader);

  var loader = new Loader(stream);
  return loader.getSingleNode();
};


jsyaml.load = function load(stream, Loader) {
  Loader = (Loader || _loader.Loader);

  var loader = new Loader(stream);
  return loader.getSingleData();
};


jsyaml.loadAll = function loadAll(stream, callback, Loader) {
  Loader = (Loader || _loader.Loader);

  var loader = new Loader(stream);
  while (loader.checkData()) {
    callback(loader.getData());
  }
};


jsyaml.safeLoad = function load(stream) {
  return jsyaml.load(stream, _loader.SafeLoader);
};


jsyaml.safeLoadAll = function loadAll(stream, callback) {
  jsyaml.loadAll(stream, callback, _loader.SafeLoader);
};


/**
 *  jsyaml.addConstructor(tag, constructor[, Loader]) -> Void
 *
 *  Add a constructor for the given tag.
 *
 *  Constructor is a function that accepts a Loader instance
 *  and a node object and produces the corresponding JavaScript object.
 **/
jsyaml.addConstructor = function addConstructor(tag, constructor, Loader) {
  (Loader || _loader.Loader).addConstructor(tag, constructor);
};


// Register extensions handler
(function () {
  var require_handler = function (module, filename) {
    var str = fs.readFileSync(filename, 'utf8');

    // fill in documents
    module.exports = jsyaml.load(str);
  };

  // register require extensions only if we're on node.js
  // hack for browserify
  if (undefined !== require.extensions) {
    require.extensions['.yml'] = require_handler;
    require.extensions['.yaml'] = require_handler;
  }
}());
});

require.define("fs",function(require,module,exports,__dirname,__filename,process){// nothing to see here... no file methods for the browser
});

require.define("/lib/js-yaml/loader.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');
var _reader = require('./reader');
var _scanner = require('./scanner');
var _parser = require('./parser');
var _composer = require('./composer');
var _resolver = require('./resolver');
var _constructor = require('./constructor');


function BaseLoader(stream) {
  _reader.Reader.call(this, stream);
  _scanner.Scanner.call(this);
  _parser.Parser.call(this);
  _composer.Composer.call(this);
  _constructor.BaseConstructor.call(this);
  _resolver.BaseResolver.call(this);
}

$$.extend(BaseLoader.prototype,
         _reader.Reader.prototype,
         _scanner.Scanner.prototype,
         _parser.Parser.prototype,
         _composer.Composer.prototype,
         _constructor.BaseConstructor.prototype,
         _resolver.BaseResolver.prototype);


function SafeLoader(stream) {
  _reader.Reader.call(this, stream);
  _scanner.Scanner.call(this);
  _parser.Parser.call(this);
  _composer.Composer.call(this);
  _constructor.SafeConstructor.call(this);
  _resolver.Resolver.call(this);
}

$$.extend(SafeLoader.prototype,
         _reader.Reader.prototype,
         _scanner.Scanner.prototype,
         _parser.Parser.prototype,
         _composer.Composer.prototype,
         _constructor.SafeConstructor.prototype,
         _resolver.Resolver.prototype);


function Loader(stream) {
  _reader.Reader.call(this, stream);
  _scanner.Scanner.call(this);
  _parser.Parser.call(this);
  _composer.Composer.call(this);
  _constructor.Constructor.call(this);
  _resolver.Resolver.call(this);
}

$$.extend(Loader.prototype,
         _reader.Reader.prototype,
         _scanner.Scanner.prototype,
         _parser.Parser.prototype,
         _composer.Composer.prototype,
         _constructor.Constructor.prototype,
         _resolver.Resolver.prototype);


BaseLoader.addConstructor = function (tag, constructor) {
  _constructor.BaseConstructor.addConstructor(tag, constructor);
};


SafeLoader.addConstructor = function (tag, constructor) {
  _constructor.SafeConstructor.addConstructor(tag, constructor);
};


Loader.addConstructor = function (tag, constructor) {
  _constructor.Constructor.addConstructor(tag, constructor);
};


module.exports.BaseLoader = BaseLoader;
module.exports.SafeLoader = SafeLoader;
module.exports.Loader = Loader;
});

require.define("/lib/js-yaml/common.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = module.exports = {};


// UTILITY METHODS
////////////////////////////////////////////////////////////////////////////////


// <object> $$.extend(receiver, *sources)
//
// Copy all of the properties in the source objects over to the target object.
// It's in-order, so the last source will override properties of the same name
// in previous arguments.
//
// Example: var o = $$.extend({}, a, b, c);
$$.extend = function extend(receiver) {
  var i, l, key, skip = [];

  receiver = receiver || {};
  l = arguments.length;

  if (!!arguments[l - 1] && !!arguments[l - 1].except) {
    skip = arguments[l - 1].except;
    l -= 1;
  }

  for (i = 1; i < l; i += 1) {
    if (!!arguments[i] && 'object' === typeof arguments[i]) {
      for (key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key) && -1 === skip.indexOf(key)) {
          receiver[key] = arguments[i][key];
        }
      }
    }
  }

  return receiver;
};


// simple inheritance algorithm
$$.inherits = function inherits(child, parent) {
  var InheritanceGlue = function () {};

  InheritanceGlue.prototype = parent.prototype;
  child.prototype = new InheritanceGlue();

  // copy parent prototype' methods into child, so mixing made possible
  // think of it as of caching of parent's prototype methods in child
  $$.extend(child.prototype, parent.prototype, {except: [
    'arguments', 'length', 'name', 'prototype', 'caller'
  ]});

  // restore constructor
  $$.extend(child.prototype, {constructor: child});

  child.__parent__ = parent;
};


// wrapper for instanceof that allows to check inheritance after $$.inherits
$$.isInstanceOf = function isInstanceOf(obj, klass) {
  var parent;

  if (obj instanceof klass) {
    return true;
  }

  if (!!obj && !!obj.constructor) {
    parent = obj.constructor.__parent__;
    return (parent === klass || $$.isInstanceOf(parent, klass));
  }

  return false;
};


// iterates through all object keys-value pairs calling iterator on each one
// example: $$.each(objOrArr, function (val, key) { /* ... */ });
$$.each = function each(obj, iterator, context) {
  var keys, i, l;

  if (null === obj || undefined === obj) {
    return;
  }

  context = context || iterator;

  if (obj.forEach === Array.prototype.forEach) {
    obj.forEach(iterator, context);
  } else {
    keys = Object.getOwnPropertyNames(obj);
    for (i = 0, l = keys.length; i < l; i += 1) {
      iterator.call(context, obj[keys[i]], keys[i], obj);
    }
  }
};


// returns reversed copy of array
$$.reverse = function reverse(arr) {
  var result = [], i, l;
  for (i = 0, l = arr.length; i < l; i += 1) {
    result.unshift(arr[i]);
  }
  return result;
};


// Modified from:
// https://raw.github.com/kanaka/noVNC/d890e8640f20fba3215ba7be8e0ff145aeb8c17c/include/base64.js
$$.decodeBase64 = (function () {
  var padding = '=', binTable = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1,  0, -1, -1,
    -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
    -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1
  ];

  return function decode(data) {
    var value, code, idx = 0, result = [], leftbits, leftdata;

    leftbits = 0; // number of bits decoded, but yet to be appended
    leftdata = 0; // bits decoded, but yet to be appended

    // Convert one by one.
    for (idx = 0; idx < data.length; idx += 1) {
      code = data.charCodeAt(idx);
      value = binTable[code & 0x7F];

      // Skip LF(NL) || CR
      if (0x0A !== code && 0x0D !== code) {
        // Fail on illegal characters
        if (-1 === value) {
          throw new Error("Illegal characters (code=" + code + ") in position " +
                          idx + ": ordinal not in range(0..128)");
        }

        // Collect data into leftdata, update bitcount
        leftdata = (leftdata << 6) | value;
        leftbits += 6;

        // If we have 8 or more bits, append 8 bits to the result
        if (leftbits >= 8) {
          leftbits -= 8;
          // Append if not padding.
          if (padding !== data.charAt(idx)) {
            result.push((leftdata >> leftbits) & 0xFF);
          }
          leftdata &= (1 << leftbits) - 1;
        }
      }
    }

    // If there are any bits left, the base64 string was corrupted
    if (leftbits) {
      throw new Error("Corrupted base64 string");
    }

    return new Buffer(result);
  };
}());


// CLASSES
////////////////////////////////////////////////////////////////////////////////


// Dummy alternative of delayed population based on generators in PyYAML
$$.Populator = function Populator(data, callback, context) {
  if (!(this instanceof $$.Populator)) {
    return new $$.Populator(data, callback, context);
  }

  this.data = data;
  this.execute = function () {
    callback.call(context || callback);
  };
};


// Simple implementation of hashtable
$$.Hash = function Hash(defaultValue) {
  var keys, values, index;

  if (!(this instanceof $$.Hash)) {
    return new $$.Hash(defaultValue);
  }

  index = 0;
  keys = [];
  values = [];

  this.store = function store(key, value) {
    var i = keys.indexOf(key);

    if (0 <= i) {
      values[i] = value;
      return;
    }

    i = index;
    index += 1;

    keys[i] = key;
    values[i] = value;
  };


  this.remove = function remove(key) {
    var i = keys.indexOf(key);

    if (0 <= i) {
      delete keys[i];
      delete values[i];
    }
  };


  this.hasKey = function hasKey(key) {
    return 0 <= keys.indexOf(key);
  };


  this.get = function get(key) {
    var i = keys.indexOf(key);
    return (0 <= i) ? values[i] : defaultValue;
  };
};


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/reader.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');
var _errors = require('./errors');


// "\x20-\x7E" -> " -~" for JSLint
var NON_PRINTABLE = new RegExp('[^\x09\x0A\x0D -~\x85\xA0-\uD7FF\uE000-\uFFFD]');


// IE 7-8 hack. As we use ONLY strings in browsers as input stream, there's no
// need for stream.slice() call and we can simply use stream.charAt() when we
// are running on that shit...
var getSingleChar = (undefined === ('a')[0]) ?
                    function (str, pos) { return str.charAt(pos); }
                  : function (str, pos) { return str[pos]; };


function ReaderError(name, position, character, encoding, reason) {
  _errors.YAMLError.call(this,
    'unacceptable character ' + character + ': ' + reason +
    '\n in "' + name + '", position ' + position);
}


$$.inherits(ReaderError, _errors.YAMLError);


ReaderError.prototype.name = 'ReaderError';


function Reader(stream) {
  this.name = '<unicode string>';
  this.stream = null;
  this.streamPointer = 0;
  this.eof = true;
  this.buffer = '';
  this.pointer = 0;
  this.encoding = 'utf-8';
  this.index = 0;
  this.line = 0;
  this.column = 0;

  if ('string' === typeof stream) { // simple string
    this.name = '<unicode string>';
    this.checkPrintable(stream);
    this.buffer = stream + '\x00';
  } else {
    throw new _errors.YAMLError('Invalid source. Unicode string expected.');
  }
}

Reader.prototype.peek = function peek(index) {
  index = +index || 0;
  return getSingleChar(this.buffer, this.pointer + index);
};

Reader.prototype.prefix = function prefix(length) {
  length = +length || 1;
  return this.buffer.slice(this.pointer, this.pointer + length);
};

Reader.prototype.forward = function forward(length) {
  var ch;

  // WARNING!!! length default is <int:1>, but method cn be called with
  //            <int:0> which is absolutely NOT default length value, so
  //            that's why we have ternary operator instead of lazy assign.
  length = (undefined !== length) ? (+length) : 1;

  while (length) {
    ch = this.buffer.charAt(this.pointer);
    this.pointer += 1;
    this.index += 1;

    if (0 <= '\n\x85\u2028\u2029'.indexOf(ch) ||
        ('\r' === ch && '\n' !== this.buffer.charAt(this.pointer))) {
      this.line += 1;
      this.column = 0;
    } else if (ch !== '\uFEFF') {
      this.column += 1;
    }

    length -= 1;
  }
};

Reader.prototype.getMark = function getMark() {
  if (null === this.stream) {
    return new _errors.Mark(this.name, this.index, this.line, this.column,
                       this.buffer, this.pointer);
  } else {
    return new _errors.Mark(this.name, this.index, this.line, this.column,
                       null, null);
  }
};


Reader.prototype.checkPrintable = function checkPrintable(data) {
  var match = String(data).match(NON_PRINTABLE), position;

  if (match) {
    position = this.index + this.buffer.length - this.pointer + match.index;
    throw new ReaderError(this.name, position, match[0],
                          'unicode', 'special characters are not allowed');
  }
};


module.exports.Reader = Reader;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/errors.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');


var repeat = function repeat(str, n) {
  var result = '', i;
  for (i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
};


function Mark(name, index, line, column, buffer, pointer) {
  this.name = name;
  this.index = index;
  this.line = line;
  this.column = column;
  this.buffer = buffer;
  this.pointer = pointer;
}

Mark.prototype.getSnippet = function (indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) {
    return null;
  }

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.pointer;

  while (start > 0 && -1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1))) {
    start -= 1;
    if (this.pointer - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.pointer;

  while (end < this.buffer.length && -1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end))) {
    end += 1;
    if (end - this.pointer > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return repeat(' ', indent) + head + snippet + tail + '\n' +
    repeat(' ', indent + this.pointer - start + head.length) + '^';
};

Mark.prototype.toString = function () {
  var snippet = this.getSnippet(), where;

  where = ' in "' + this.name +
    '", line ' + (this.line + 1) +
    ', column ' + (this.column + 1);

  if (snippet) {
    where += ':\n' + snippet;
  }

  return where;
};


function YAMLError(message) {
  this.message = message;
}


YAMLError.prototype.name = 'YAMLError';


YAMLError.prototype.toString = function () {
  return this.name + ': ' + this.message;
};


function toStringCompact(self) {
  var str = "Error ";

  if (null !== self.problemMark) {
    str += "on line " + (self.problemMark.line + 1) + ", col " + (self.problemMark.column + 1) + ": ";
  }

  if (null !== self.problem) {
    str += self.problem;
  }

  if (null !== self.note) {
    str += self.note;
  }

  return str;
}

function toStringFull(self) {
  var lines = [];

  if (null !== self.context) {
    lines.push(self.context);
  }

  if (null !== self.contextMark &&
      (null === self.problem || null === self.problemMark ||
       self.contextMark.name !== self.problemMark.name ||
       self.contextMark.line !== self.problemMark.line ||
       self.contextMark.column !== self.problemMark.column)) {
    lines.push(self.contextMark.toString());
  }

  if (null !== self.problem) {
    lines.push(self.problem);
  }

  if (null !== self.problemMark) {
    lines.push(self.problemMark.toString());
  }

  if (null !== self.note) {
    lines.push(self.note);
  }

  return lines.join('\n');
}


function MarkedYAMLError(context, contextMark, problem, problemMark, note) {
  YAMLError.call(this);
  this.name = 'MarkedYAMLError';

  this.context = context || null;
  this.contextMark = contextMark || null;
  this.problem = problem || null;
  this.problemMark = problemMark || null;
  this.note = note || null;

  this.toString = function toString(compact) {
    return compact ? toStringCompact(this) : toStringFull(this);
  };
}
$$.inherits(MarkedYAMLError, YAMLError);


module.exports.Mark = Mark;
module.exports.YAMLError = YAMLError;
module.exports.MarkedYAMLError = MarkedYAMLError;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/scanner.js",function(require,module,exports,__dirname,__filename,process){// Scanner produces tokens of the following types:
//
// STREAM-START
// STREAM-END
// DIRECTIVE(name, value)
// DOCUMENT-START
// DOCUMENT-END
// BLOCK-SEQUENCE-START
// BLOCK-MAPPING-START
// BLOCK-END
// FLOW-SEQUENCE-START
// FLOW-MAPPING-START
// FLOW-SEQUENCE-END
// FLOW-MAPPING-END
// BLOCK-ENTRY
// FLOW-ENTRY
// KEY
// VALUE
// ALIAS(value)
// ANCHOR(value)
// TAG(value)
// SCALAR(value, plain, style)
//
// Read comments in the Scanner code for more details.


'use strict';


var $$ = require('./common');
var _errors = require('./errors');
var _tokens = require('./tokens');


var ESCAPE_REPLACEMENTS = {
  '0':    '\x00',
  'a':    '\x07',
  'b':    '\x08',
  't':    '\x09',
  '\t':   '\x09',
  'n':    '\x0A',
  'v':    '\x0B',
  'f':    '\x0C',
  'r':    '\x0D',
  'e':    '\x1B',
  ' ':    ' ', // \x20, but JSLint against it :))
  '\"':   '\"',
  '\\':   '\\',
  'N':    '\x85',
  '_':    '\xA0',
  'L':    '\u2028',
  'P':    '\u2029'
};

var ESCAPE_CODES = {
  'x':    2,
  'u':    4,
  'U':    8
};

var range = function (start, count) {
  var result = [];

  if (undefined === count) {
    count = start;
    start = 0;
  }

  while (0 < count) {
    result.push(start);
    count -= 1;
    start += 1;
  }

  return result;
};


function ScannerError() {
  _errors.MarkedYAMLError.apply(this, arguments);
  this.name = 'ScannerError';
}
$$.inherits(ScannerError, _errors.MarkedYAMLError);


// See below simple keys treatment.
function SimpleKey(tokenNumber, required, index, line, column, mark) {
  this.tokenNumber = tokenNumber;
  this.required = required;
  this.index = index;
  this.line = line;
  this.column = column;
  this.mark = mark;
}


function Scanner() {
  // It is assumed that Scanner and Reader will have a common descendant.
  // Reader do the dirty work of checking for BOM and converting the
  // input data to Unicode. It also adds NUL to the end.
  //
  // Reader supports the following methods
  //   this.peek(i=0)       # peek the next i-th character
  //   this.prefix(l=1)     # peek the next l characters
  //   this.forward(l=1)    # read the next l characters and move the pointer.

  // Had we reached the end of the stream?
  this.done = false;

  // The number of unclosed '{' and '['. `flowLevel == 0` means block
  // context.
  this.flowLevel = 0;

  // List of processed tokens that are not yet emitted.
  this.tokens = [];

  // Add the STREAM-START token.
  this.fetchStreamStart();

  // Number of tokens that were emitted through the `getToken` method.
  this.tokensTaken = 0;

  // The current indentation level.
  this.indent = -1;

  // Past indentation levels.
  this.indents = [];

  // Variables related to simple keys treatment.

  // A simple key is a key that is not denoted by the '?' indicator.
  // Example of simple keys:
  //   ---
  //   block simple key: value
  //   ? not a simple key:
  //   : { flow simple key: value }
  // We emit the KEY token before all keys, so when we find a potential
  // simple key, we try to locate the corresponding ':' indicator.
  // Simple keys should be limited to a single line and 1024 characters.

  // Can a simple key start at the current position? A simple key may
  // start:
  // - at the beginning of the line, not counting indentation spaces
  //       (in block context),
  // - after '{', '[', ',' (in the flow context),
  // - after '?', ':', '-' (in the block context).
  // In the block context, this flag also signifies if a block collection
  // may start at the current position.
  this.allowSimpleKey = true;

  // Keep track of possible simple keys. This is a dictionary. The key
  // is `flowLevel`; there can be no more that one possible simple key
  // for each level. The value is a SimpleKey record:
  //   (tokenNumber, required, index, line, column, mark)
  // A simple key may start with ALIAS, ANCHOR, TAG, SCALAR(flow),
  // '[', or '{' tokens.
  this.possibleSimpleKeys = {};
}

Scanner.prototype.checkToken = function checkToken() {
  var i;

  while (this.needMoreTokens()) {
    this.fetchMoreTokens();
  }

  if (this.tokens.length) {
    if (!arguments.length) {
      return true;
    }

    for (i = 0; i < arguments.length; i += 1) {
      if ($$.isInstanceOf(this.tokens[0], arguments[i])) {
        return true;
      }
    }
  }

  return false;
};

Scanner.prototype.peekToken = function peekToken() {
  // Return the next token, but do not delete if from the queue.

  while (this.needMoreTokens()) {
    this.fetchMoreTokens();
  }

  if (this.tokens.length) {
    return this.tokens[0];
  }

  return null;
};

Scanner.prototype.getToken = function getToken() {
  var token = null;

  // Return the next token.

  while (this.needMoreTokens()) {
    this.fetchMoreTokens();
  }

  if (this.tokens.length) {
    this.tokensTaken += 1;
    token = this.tokens.shift();
  }

  return token;
};

Scanner.prototype.needMoreTokens = function needMoreTokens() {
  if (this.done) {
    return false;
  }

  if (!this.tokens.length) {
    return true;
  }

  // The current token may be a potential simple key, so we
  // need to look further.

  this.stalePossibleSimpleKeys();
  if (this.nextPossibleSimpleKey() === this.tokensTaken) {
    return true;
  }

  return false;
};

Scanner.prototype.fetchMoreTokens = function fetchMoreTokens() {
  var ch;

  // Eat whitespaces and comments until we reach the next token.
  this.scanToNextToken();

  // Remove obsolete possible simple keys.
  this.stalePossibleSimpleKeys();

  // Compare the current indentation and column. It may add some tokens
  // and decrease the current indentation level.
  this.unwindIndent(this.column);

  // Peek the next character.
  ch = this.peek();

  // Is it the end of stream?
  if (ch === '\x00') {
    return this.fetchStreamEnd();
  }

  // Is it a directive?
  if (ch === '%' && this.checkDirective()) {
    return this.fetchDirective();
  }

  // Is it the document start?
  if (ch === '-' && this.checkDocumentStart()) {
    return this.fetchDocumentStart();
  }

  // Is it the document end?
  if (ch === '.' && this.checkDocumentEnd()) {
    return this.fetchDocumentEnd();
  }

  // Note: the order of the following checks is NOT significant.

  // Is it the flow sequence start indicator?
  if (ch === '[') {
    return this.fetchFlowSequenceStart();
  }

  // Is it the flow mapping start indicator?
  if (ch === '{') {
    return this.fetchFlowMappingStart();
  }

  // Is it the flow sequence end indicator?
  if (ch === ']') {
    return this.fetchFlowSequenceEnd();
  }

  // Is it the flow mapping end indicator?
  if (ch === '}') {
    return this.fetchFlowMappingEnd();
  }

  // Is it the flow entry indicator?
  if (ch === ',') {
    return this.fetchFlowEntry();
  }

  // Is it the block entry indicator?
  if (ch === '-' && this.checkBlockEntry()) {
    return this.fetchBlockEntry();
  }

  // Is it the key indicator?
  if (ch === '?' && this.checkKey()) {
    return this.fetchKey();
  }

  // Is it the value indicator?
  if (ch === ':' && this.checkValue()) {
    return this.fetchValue();
  }

  // Is it an alias?
  if (ch === '*') {
    return this.fetchAlias();
  }

  // Is it an anchor?
  if (ch === '&') {
    return this.fetchAnchor();
  }

  // Is it a tag?
  if (ch === '!') {
    return this.fetchTag();
  }

  // Is it a literal scalar?
  if (ch === '|' && !this.flowLevel) {
    return this.fetchLiteral();
  }

  // Is it a folded scalar?
  if (ch === '>' && !this.flowLevel) {
    return this.fetchFolded();
  }

  // Is it a single quoted scalar?
  if (ch === '\'') {
    return this.fetchSingle();
  }

  // Is it a double quoted scalar?
  if (ch === '\"') {
    return this.fetchDouble();
  }

  // It must be a plain scalar then.
  if (this.checkPlain()) {
    return this.fetchPlain();
  }

  // No? It's an error. Let's produce a nice error message.
  throw new ScannerError("while scanning for the next token", null,
                         "found character " + ch + " that cannot start any token",
                         this.getMark());
};

Scanner.prototype.nextPossibleSimpleKey = function nextPossibleSimpleKey() {
  var minTokenNumber = null;

  // Return the number of the nearest possible simple key. Actually we
  // don't need to loop through the whole dictionary. We may replace it
  // with the following code:
  //   if (!this.possibleSimpleKeys.langth) {
  //     return null;
  //   }
  //   return this.possibleSimpleKeys[
  //     Math.min.apply({}, this.possibleSimpleKeys.keys())
  //   ].tokenNumber;

  $$.each(this.possibleSimpleKeys, function (key) {
    if (null === minTokenNumber || key.tokenNumber < minTokenNumber) {
      minTokenNumber = key.tokenNumber;
    }
  });

  return minTokenNumber;
};

Scanner.prototype.stalePossibleSimpleKeys = function stalePossibleSimpleKeys() {
  // Remove entries that are no longer possible simple keys. According to
  // the YAML specification, simple keys
  // - should be limited to a single line,
  // - should be no longer than 1024 characters.
  // Disabling this procedure will allow simple keys of any length and
  // height (may cause problems if indentation is broken though).
  $$.each(this.possibleSimpleKeys, function (key, level) {
    if (key.line !== this.line || 1024 < (this.index - key.index)) {
      if (key.required) {
        throw new ScannerError("while scanning a simple key", key.mark,
                               "could not found expected ':'", this.getMark());
      }
      delete this.possibleSimpleKeys[level];
    }
  }, this);
};

Scanner.prototype.savePossibleSimpleKey = function savePossibleSimpleKey() {
  var required, tokenNumber, key;

  // The next token may start a simple key. We check if it's possible
  // and save its position. This function is called for
  //   ALIAS, ANCHOR, TAG, SCALAR(flow), '[', and '{'.

  // Check if a simple key is required at the current position.
  required = (!this.flowLevel && this.indent === this.column);

  // A simple key is required only if it is the first token in the current
  // line. Therefore it is always allowed.
  if (!this.allowSimpleKey && required) {
    throw new _errors.YAMLError('Simple key is required');
  }

  // The next token might be a simple key. Let's save it's number and
  // position.
  if (this.allowSimpleKey) {
    this.removePossibleSimpleKey();
    tokenNumber = this.tokensTaken + this.tokens.length;
    key = new SimpleKey(tokenNumber, required, this.index, this.line,
                        this.column, this.getMark());
    this.possibleSimpleKeys[this.flowLevel] = key;
  }
};

Scanner.prototype.removePossibleSimpleKey = function removePossibleSimpleKey() {
  var key;

  // Remove the saved possible key position at the current flow level.

  if (undefined !== this.possibleSimpleKeys[this.flowLevel]) {
    key = this.possibleSimpleKeys[this.flowLevel];

    if (key.required) {
      throw new ScannerError("while scanning a simple key", key.mark,
                             "could not found expected ':'", this.getMark());
    }

    delete this.possibleSimpleKeys[this.flowLevel];
  }
};

Scanner.prototype.unwindIndent = function unwindIndent(column) {
  var mark;

  // In flow context, tokens should respect indentation.
  // Actually the condition should be `self.indent >= column` according to
  // the spec. But this condition will prohibit intuitively correct
  // constructions such as
  //   key : {
  //   }
  //  if self.flow_level and self.indent > column:
  //    raise ScannerError(None, None,
  //            "invalid intendation or unclosed '[' or '{'",
  //            self.get_mark())

  // In the flow context, indentation is ignored. We make the scanner less
  // restrictive then specification requires.

  if (this.flowLevel) {
    return;
  }

  // In block context, we may need to issue the BLOCK-END tokens.
  while (this.indent > column) {
    mark = this.getMark();
    this.indent = this.indents.pop();
    this.tokens.push(new _tokens.BlockEndToken(mark, mark));
  }
};

Scanner.prototype.addIndent = function addIndent(column) {
  // Check if we need to increase indentation.

  if (this.indent < column) {
    this.indents.push(this.indent);
    this.indent = column;
    return true;
  }

  return false;
};

Scanner.prototype.fetchStreamStart = function fetchStreamStart() {
  var mark;

  // We always add STREAM-START as the first token and STREAM-END as the
  // last token.

  // Read the token.
  mark = this.getMark();
  
  // Add STREAM-START.
  this.tokens.push(new _tokens.StreamStartToken(mark, mark, this.encoding));
};

Scanner.prototype.fetchStreamEnd = function fetchStreamEnd() {
  var mark;

  // Set the current intendation to -1.
  this.unwindIndent(-1);

  // Reset simple keys.
  this.removePossibleSimpleKey();
  this.allowSimpleKey = false;
  this.possibleSimpleKeys = {};

  // Read the token.
  mark = this.getMark();
  
  // Add STREAM-END.
  this.tokens.push(new _tokens.StreamEndToken(mark, mark));

  // The steam is finished.
  this.done = true;
};

Scanner.prototype.fetchDirective = function fetchDirective() {
  // Set the current intendation to -1.
  this.unwindIndent(-1);

  // Reset simple keys.
  this.removePossibleSimpleKey();
  this.allowSimpleKey = false;

  // Scan and add DIRECTIVE.
  this.tokens.push(this.scanDirective());
};

Scanner.prototype.fetchDocumentStart = function fetchDocumentStart() {
  this.fetchDocumentIndicator(_tokens.DocumentStartToken);
};

Scanner.prototype.fetchDocumentEnd = function fetchDocumentEnd() {
  this.fetchDocumentIndicator(_tokens.DocumentEndToken);
};

Scanner.prototype.fetchDocumentIndicator = function fetchDocumentIndicator(TokenClass) {
  var startMark, endMark;

  // Set the current intendation to -1.
  this.unwindIndent(-1);

  // Reset simple keys. Note that there could not be a block collection
  // after '---'.
  this.removePossibleSimpleKey();
  this.allowSimpleKey = false;

  // Add DOCUMENT-START or DOCUMENT-END.
  startMark = this.getMark();
  this.forward(3);
  endMark = this.getMark();

  this.tokens.push(new TokenClass(startMark, endMark));
};

Scanner.prototype.fetchFlowSequenceStart = function fetchFlowSequenceStart() {
  this.fetchFlowCollectionStart(_tokens.FlowSequenceStartToken);
};

Scanner.prototype.fetchFlowMappingStart = function fetchFlowMappingStart() {
  this.fetchFlowCollectionStart(_tokens.FlowMappingStartToken);
};

Scanner.prototype.fetchFlowCollectionStart = function fetchFlowCollectionStart(TokenClass) {
  var startMark, endMark;

  // '[' and '{' may start a simple key.
  this.savePossibleSimpleKey();

  // Increase the flow level.
  this.flowLevel += 1;

  // Simple keys are allowed after '[' and '{'.
  this.allowSimpleKey = true;

  // Add FLOW-SEQUENCE-START or FLOW-MAPPING-START.
  startMark = this.getMark();
  this.forward();
  endMark = this.getMark();

  this.tokens.push(new TokenClass(startMark, endMark));
};

Scanner.prototype.fetchFlowSequenceEnd = function fetchFlowSequenceEnd() {
  this.fetchFlowCollectionEnd(_tokens.FlowSequenceEndToken);
};

Scanner.prototype.fetchFlowMappingEnd = function fetchFlowMappingEnd() {
  this.fetchFlowCollectionEnd(_tokens.FlowMappingEndToken);
};

Scanner.prototype.fetchFlowCollectionEnd = function fetchFlowCollectionEnd(TokenClass) {
  var startMark, endMark;

  // Reset possible simple key on the current level.
  this.removePossibleSimpleKey();

  // Decrease the flow level.
  this.flowLevel -= 1;

  // No simple keys after ']' or '}'.
  this.allowSimpleKey = false;

  // Add FLOW-SEQUENCE-END or FLOW-MAPPING-END.
  startMark = this.getMark();
  this.forward();
  endMark = this.getMark();
  this.tokens.push(new TokenClass(startMark, endMark));
};

Scanner.prototype.fetchFlowEntry = function fetchFlowEntry() {
  var startMark, endMark;

  // Simple keys are allowed after ','.
  this.allowSimpleKey = true;

  // Reset possible simple key on the current level.
  this.removePossibleSimpleKey();

  // Add FLOW-ENTRY.
  startMark = this.getMark();
  this.forward();
  endMark = this.getMark();

  this.tokens.push(new _tokens.FlowEntryToken(startMark, endMark));
};

Scanner.prototype.fetchBlockEntry = function fetchBlockEntry() {
  var mark, startMark, endMark;

  // Block context needs additional checks.
  if (!this.flowLevel) {
    // Are we allowed to start a new entry?
    if (!this.allowSimpleKey) {
      throw new ScannerError(null, null,
                             "sequence entries are not allowed here",
                             this.getMark());
    }

    // We may need to add BLOCK-SEQUENCE-START.
    if (this.addIndent(this.column)) {
      mark = this.getMark();
      this.tokens.push(new _tokens.BlockSequenceStartToken(mark, mark));
    }
  }

  // else --------------------------------------------------------------------
  // It's an error for the block entry to occur in the flow context,
  // but we let the parser detect this.
  // -------------------------------------------------------------------------

  // Simple keys are allowed after '-'.
  this.allowSimpleKey = true;

  // Reset possible simple key on the current level.
  this.removePossibleSimpleKey();

  // Add BLOCK-ENTRY.
  startMark = this.getMark();
  this.forward();
  endMark = this.getMark();

  this.tokens.push(new _tokens.BlockEntryToken(startMark, endMark));
};

Scanner.prototype.fetchKey = function fetchKey() {
  var mark, startMark, endMark;

  // Block context needs additional checks.
  if (!this.flowLevel) {
    // Are we allowed to start a key (not nessesary a simple)?
    if (!this.allowSimpleKey) {
      throw new ScannerError(null, null,
                             "mapping keys are not allowed here",
                             this.getMark());
    }

    // We may need to add BLOCK-MAPPING-START.
    if (this.addIndent(this.column)) {
      mark = this.getMark();
      this.tokens.push(new _tokens.BlockMappingStartToken(mark, mark));
    }
  }

  // Simple keys are allowed after '?' in the block context.
  this.allowSimpleKey = !this.flowLevel;

  // Reset possible simple key on the current level.
  this.removePossibleSimpleKey();

  // Add KEY.
  startMark = this.getMark();
  this.forward();
  endMark = this.getMark();

  this.tokens.push(new _tokens.KeyToken(startMark, endMark));
};

Scanner.prototype.fetchValue = function fetchValue() {
  var key, mark, startMark, endMark;

  // Do we determine a simple key?
  if (undefined !== this.possibleSimpleKeys[this.flowLevel]) {
    // Add KEY.
    key = this.possibleSimpleKeys[this.flowLevel];
    delete this.possibleSimpleKeys[this.flowLevel];

    this.tokens.splice(key.tokenNumber - this.tokensTaken, 0,
                       new _tokens.KeyToken(key.mark, key.mark));

    // If this key starts a new block mapping, we need to add
    // BLOCK-MAPPING-START.
    if (!this.flowLevel) {
      if (this.addIndent(key.column)) {
        this.tokens.splice(key.tokenNumber - this.tokensTaken, 0,
                           new _tokens.BlockMappingStartToken(key.mark, key.mark));
      }
    }

    // There cannot be two simple keys one after another.
    this.allowSimpleKey = false;

  // It must be a part of a complex key.
  } else {

    // Block context needs additional checks.
    // (Do we really need them? They will be catched by the parser
    // anyway.)
    if (!this.flowLevel) {
      // We are allowed to start a complex value if and only if
      // we can start a simple key.
      if (!this.allowSimpleKey) {
        throw new ScannerError(null, null,
                               "mapping values are not allowed here",
                               this.getMark());
      }
    }

    // If this value starts a new block mapping, we need to add
    // BLOCK-MAPPING-START.  It will be detected as an error later by
    // the parser.
    if (!this.flowLevel) {
      if (this.addIndent(this.column)) {
        mark = this.getMark();
        this.tokens.push(new _tokens.BlockMappingStartToken(mark, mark));
      }
    }

    // Simple keys are allowed after ':' in the block context.
    this.allowSimpleKey = !this.flowLevel;

    // Reset possible simple key on the current level.
    this.removePossibleSimpleKey();
  }

  // Add VALUE.
  startMark = this.getMark();
  this.forward();
  endMark = this.getMark();

  this.tokens.push(new _tokens.ValueToken(startMark, endMark));
};

Scanner.prototype.fetchAlias = function fetchAlias() {
  // ALIAS could be a simple key.
  this.savePossibleSimpleKey();

  // No simple keys after ALIAS.
  this.allowSimpleKey = false;

  // Scan and add ALIAS.
  this.tokens.push(this.scanAnchor(_tokens.AliasToken));
};

Scanner.prototype.fetchAnchor = function fetchAnchor() {
  // ANCHOR could start a simple key.
  this.savePossibleSimpleKey();

  // No simple keys after ANCHOR.
  this.allowSimpleKey = false;

  // Scan and add ANCHOR.
  this.tokens.push(this.scanAnchor(_tokens.AnchorToken));
};

Scanner.prototype.fetchTag = function fetchTag() {
  // TAG could start a simple key.
  this.savePossibleSimpleKey();

  // No simple keys after TAG.
  this.allowSimpleKey = false;

  // Scan and add TAG.
  this.tokens.push(this.scanTag());
};

Scanner.prototype.fetchLiteral = function fetchLiteral() {
  this.fetchBlockScalar('|');
};

Scanner.prototype.fetchFolded = function fetchFolded() {
  this.fetchBlockScalar('>');
};

Scanner.prototype.fetchBlockScalar = function fetchBlockScalar(style) {
  // A simple key may follow a block scalar.
  this.allowSimpleKey = true;

  // Reset possible simple key on the current level.
  this.removePossibleSimpleKey();

  // Scan and add SCALAR.
  this.tokens.push(this.scanBlockScalar(style));
};

Scanner.prototype.fetchSingle = function fetchSingle() {
  this.fetchFlowScalar('\'');
};

Scanner.prototype.fetchDouble = function fetchDouble() {
  this.fetchFlowScalar('"');
};

Scanner.prototype.fetchFlowScalar = function fetchFlowScalar(style) {
  // A flow scalar could be a simple key.
  this.savePossibleSimpleKey();

  // No simple keys after flow scalars.
  this.allowSimpleKey = false;

  // Scan and add SCALAR.
  this.tokens.push(this.scanFlowScalar(style));
};

Scanner.prototype.fetchPlain = function fetchPlain() {
  // A plain scalar could be a simple key.
  this.savePossibleSimpleKey();

  // No simple keys after plain scalars. But note that `scan_plain` will
  // change this flag if the scan is finished at the beginning of the
  // line.
  this.allowSimpleKey = false;

  // Scan and add SCALAR. May change `allow_simple_key`.
  this.tokens.push(this.scanPlain());
};

Scanner.prototype.checkDirective = function checkDirective() {
  // DIRECTIVE:    ^ '%' ...
  // The '%' indicator is already checked.
  return (this.column === 0);
};

Scanner.prototype.checkDocumentStart = function checkDocumentStart() {
  // DOCUMENT-START:   ^ '---' (' '|'\n')
  if (+this.column === 0 && this.prefix(3) === '---') {
    return (0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(3)));
  }

  return false;
};

Scanner.prototype.checkDocumentEnd = function checkDocumentEnd() {
  // DOCUMENT-END:   ^ '...' (' '|'\n')
  if (+this.column === 0 && this.prefix(3) === '...') {
    return (0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(3)));
  }

  return false;
};

Scanner.prototype.checkBlockEntry = function checkBlockEntry() {
  // BLOCK-ENTRY:    '-' (' '|'\n')
  return (0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(1)));
};

Scanner.prototype.checkKey = function checkKey() {
  // KEY(flow context):  '?'
  if (this.flowLevel) {
    return true;
  }

  // KEY(block context):   '?' (' '|'\n')
  return 0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(1));
};

Scanner.prototype.checkValue = function checkValue() {
  // VALUE(flow context):  ':'
  if (this.flowLevel) {
    return true;
  }

  // VALUE(block context): ':' (' '|'\n')
  return 0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(1));
};

Scanner.prototype.checkPlain = function checkPlain() {
  // A plain scalar may start with any non-space character except:
  //   '-', '?', ':', ',', '[', ']', '{', '}',
  //   '#', '&', '*', '!', '|', '>', '\'', '\"',
  //   '%', '@', '`'.
  //
  // It may also start with
  //   '-', '?', ':'
  // if it is followed by a non-space character.
  //
  // Note that we limit the last rule to the block context (except the
  // '-' character) because we want the flow context to be space
  // independent.
  var ch = this.peek();
  return (
   -1 === '\x00 \t\r\n\x85\u2028\u2029-?:,[]{}#&*!|>\'\"%@`'.indexOf(ch) ||
   (
      -1 === '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(1)) &&
      (
        ch === '-' || (!this.flowLevel && 0 <= '?:'.indexOf(ch))
      )
    )
  );
};

Scanner.prototype.scanToNextToken = function scanToNextToken() {
  var found = false;

  // We ignore spaces, line breaks and comments.
  // If we find a line break in the block context, we set the flag
  // `allow_simple_key` on.
  // The byte order mark is stripped if it's the first character in the
  // stream. We do not yet support BOM inside the stream as the
  // specification requires. Any such mark will be considered as a part
  // of the document.
  //
  // TODO: We need to make tab handling rules more sane. A good rule is
  //   Tabs cannot precede tokens
  //   BLOCK-SEQUENCE-START, BLOCK-MAPPING-START, BLOCK-END,
  //   KEY(block), VALUE(block), BLOCK-ENTRY
  // So the checking code is
  //   if <TAB>:
  //     self.allow_simple_keys = False
  // We also need to add the check for `allow_simple_keys == True` to
  // `unwind_indent` before issuing BLOCK-END.
  // Scanners for block, flow, and plain scalars need to be modified.

  if (this.index === 0 && this.peek() === '\uFEFF') {
    this.forward();
  }

  while (!found) {
    while (this.peek() === ' ') {
      this.forward();
    }

    if (this.peek() === '#') {
      while (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.peek())) {
        this.forward();
      }
    }

    if (this.scanLineBreak()) {
      if (!this.flowLevel) {
        this.allowSimpleKey = true;
      }
    } else {
      found = true;
    }
  }
};

Scanner.prototype.scanDirective = function scanDirective() {
  var startMark, endMark, name, value;

  // See the specification for details.
  startMark = this.getMark();
  this.forward();
  name = this.scanDirectiveName(startMark);
  value = null;

  if (name === 'YAML') {
    value = this.scanYamlDirectiveValue(startMark);
    endMark = this.getMark();
  } else if (name === 'TAG') {
    value = this.scanTagDirectiveValue(startMark);
    endMark = this.getMark();
  } else {
    endMark = this.getMark();

    while (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.peek())) {
      this.forward();
    }
  }

  this.scanDirectiveIgnoredLine(startMark);
  return new _tokens.DirectiveToken(name, value, startMark, endMark);
};

Scanner.prototype.scanDirectiveName = function scanDirectiveName(startMark) {
  var length, ch, value;

  // See the specification for details.
  length = 0;
  ch = this.peek(length);

  while (/^[0-9A-Za-z]/.test(ch) || 0 <= '-_'.indexOf(ch)) {
    length += 1;
    ch = this.peek(length);
  }

  if (!length) {
    throw new ScannerError("while scanning a directive", startMark,
        "expected alphabetic or numeric character, but found " + ch,
        this.getMark());
  }

  value = this.prefix(length);
  this.forward(length);
  ch = this.peek();

  if (-1 === '\x00 \r\n\x85\u2028\u2029'.indexOf(ch)) {
    throw new ScannerError("while scanning a directive", startMark,
        "expected alphabetic or numeric character, but found " + ch,
        this.getMark());
  }

  return value;
};

Scanner.prototype.scanYamlDirectiveValue = function scanYamlDirectiveValue(startMark) {
  var major, minor;

  // See the specification for details.

  while (this.peek() === ' ') {
    this.forward();
  }

  major = this.scanYamlDirectiveNumber(startMark);

  if (this.peek() !== '.') {
    throw new ScannerError("while scanning a directive", startMark,
        "expected a digit or '.', but found " + this.peek(),
        this.getMark());
  }

  this.forward();

  minor = this.scanYamlDirectiveNumber(startMark);

  if (-1 === '\x00 \r\n\x85\u2028\u2029'.indexOf(this.peek())) {
    throw new ScannerError("while scanning a directive", startMark,
        "expected a digit or ' ', but found " + this.peek(),
        this.getMark());
  }

  return [major, minor];
};

Scanner.prototype.scanYamlDirectiveNumber = function scanYamlDirectiveNumber(startMark) {
  var ch, length, value;

  // See the specification for details.

  ch = this.peek();

  if (!/^[0-9]/.test(ch)) {
    throw new ScannerError("while scanning a directive", startMark,
        "expected a digit, but found " + ch, this.getMark());
  }

  length = 0;

  while (/^[0-9]/.test(this.peek(length))) {
    length += 1;
  }

  value = +(this.prefix(length));
  this.forward(length);

  return value;
};

Scanner.prototype.scanTagDirectiveValue = function scanTagDirectiveValue(startMark) {
  var handle, prefix;

  // See the specification for details.
  while (this.peek() === ' ') {
    this.forward();
  }

  handle = this.scanTagDirectiveHandle(startMark);

  while (this.peek() === ' ') {
    this.forward();
  }

  prefix = this.scanTagDirectivePrefix(startMark);

  return [handle, prefix];
};

Scanner.prototype.scanTagDirectiveHandle = function scanTagDirectiveHandle(startMark) {
  var value, ch;

  // See the specification for details.
  value = this.scanTagHandle('directive', startMark);
  ch = this.peek();

  if (ch !== ' ') {
    throw new ScannerError("while scanning a directive", startMark,
        "expected ' ', but found " + ch, this.getMark());
  }

  return value;
};

Scanner.prototype.scanTagDirectivePrefix = function scanTagDirectivePrefix(startMark) {
  var value, ch;

  // See the specification for details.
  value = this.scanTagUri('directive', startMark);
  ch = this.peek();

  if (-1 === '\x00 \r\n\x85\u2028\u2029'.indexOf(ch)) {
    throw new ScannerError("while scanning a directive", startMark,
                           "expected ' ', but found " + ch, this.getMark());
  }

  return value;
};

Scanner.prototype.scanDirectiveIgnoredLine = function scanDirectiveIgnoredLine(startMark) {
  var ch;

  // See the specification for details.
  while (this.peek() === ' ') {
    this.forward();
  }

  if (this.peek() === '#') {
    while (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.peek())) {
      this.forward();
    }
  }

  ch = this.peek();

  if (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(ch)) {
    throw new ScannerError("while scanning a directive", startMark,
        "expected a comment or a line break, but found " + ch,
        this.getMark());
  }

  this.scanLineBreak();
};

Scanner.prototype.scanAnchor = function scanAnchor(TokenClass) {
  var startMark, indicator, name, length, ch, value;

  // The specification does not restrict characters for anchors and
  // aliases. This may lead to problems, for instance, the document:
  //   [ *alias, value ]
  // can be interpteted in two ways, as
  //   [ "value" ]
  // and
  //   [ *alias , "value" ]
  // Therefore we restrict aliases to numbers and ASCII letters.

  startMark = this.getMark();
  indicator = this.peek();
  name = (indicator === '*') ? 'alias' : 'anchor';

  this.forward();
  length = 0;
  ch = this.peek(length);

  while (/^[0-9A-Za-z]/.test(ch) || 0 <= '-_'.indexOf(ch)) {
    length += 1;
    ch = this.peek(length);
  }
    
  if (!length) {
    throw new ScannerError("while scanning an " + name, startMark,
        "expected alphabetic or numeric character, but found " + ch,
        this.getMark());
  }

  value = this.prefix(length);
  this.forward(length);
  ch = this.peek();

  if (-1 === '\x00 \t\r\n\x85\u2028\u2029?:,]}%@`'.indexOf(ch)) {
    throw new ScannerError("while scanning an " + name, startMark,
        "expected alphabetic or numeric character, but found " + ch,
        this.getMark());
  }

  return new TokenClass(value, startMark, this.getMark());
};

Scanner.prototype.scanTag = function scanTag() {
  var startMark, ch, handle, suffix, length, useHandle;

  // See the specification for details.
  startMark = this.getMark();
  ch = this.peek(1);

  if (ch === '<') {
    handle = null;
    this.forward(2);
    suffix = this.scanTagUri('tag', startMark);

    if (this.peek() !== '>') {
      throw new ScannerError("while parsing a tag", startMark,
          "expected '>', but found " + this.peek(),
          this.getMark());
    }

    this.forward();
  } else if (0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(ch)) {
    handle = null;
    suffix = '!';

    this.forward();
  } else {
    length = 1;
    useHandle = false;

    while (-1 === '\x00 \r\n\x85\u2028\u2029'.indexOf(ch)) {
      if (ch === '!') {
        useHandle = true;
        break;
      }

      length += 1;
      ch = this.peek(length);
    }

    if (useHandle) {
      handle = this.scanTagHandle('tag', startMark);
    } else {
      handle = '!';
      this.forward();
    }

    suffix = this.scanTagUri('tag', startMark);
  }

  ch = this.peek();

  if (-1 === '\x00 \r\n\x85\u2028\u2029'.indexOf(ch)) {
    throw new ScannerError("while scanning a tag", startMark,
                           "expected ' ', but found " + ch, this.getMark());
  }

  return new _tokens.TagToken([handle, suffix], startMark, this.getMark());
};

Scanner.prototype.scanBlockScalar = function scanBlockScalar(style) {
  var folded, chunks, startMark, endMark, chomping, increment = null,
      minIndent, maxIndent, indent, breaks, lineBreak, leadingNonSpace,
      tuple, length;
  // See the specification for details.

  folded = (style === '>');
  chunks = [];
  startMark = this.getMark();

  // Scan the header.
  this.forward();
  tuple = this.scanBlockScalarIndicators(startMark);
  chomping = tuple[0];
  increment = tuple[1] || null;
  this.scanBlockScalarIgnoredLine(startMark);

  // Determine the indentation level and go to the first non-empty line.
  minIndent = this.indent + 1;

  if (minIndent < 1) {
    minIndent = 1;
  }

  if (null === increment) {
    tuple = this.scanBlockScalarIndentation();
    breaks = tuple[0];
    maxIndent = tuple[1];
    endMark = tuple[2];
    indent = Math.max(minIndent, maxIndent);
  } else {
    indent = minIndent + increment - 1;
    tuple = this.scanBlockScalarBreaks(indent);
    breaks = tuple[0];
    endMark = tuple[1];
  }

  lineBreak = '';

  // Scan the inner part of the block scalar.
  while (+this.column === indent && this.peek() !== '\x00') {
    chunks = chunks.concat(breaks);
    leadingNonSpace = -1 === ' \t'.indexOf(this.peek());
    length = 0;

    while (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.peek(length))) {
      length += 1;
    }

    chunks.push(this.prefix(length));
    this.forward(length);
    lineBreak = this.scanLineBreak();

    tuple = this.scanBlockScalarBreaks(indent);
    breaks = tuple[0];
    endMark = tuple[1];

    if (+this.column !== indent || this.peek() === '\x00') {
      break;
    }

    // Unfortunately, folding rules are ambiguous.
    //
    // This is the folding according to the specification:

    if (folded && lineBreak === '\n' && leadingNonSpace && -1 === ' \t'.indexOf(this.peek())) {
      if (!breaks || !breaks.length) {
        chunks.push(' ');
      }
    } else {
      chunks.push(lineBreak);
    }
    
    // This is Clark Evans's interpretation (also in the spec
    // examples):
    //
    //if folded and line_break == '\n':
    //  if not breaks:
    //    if this.peek() not in ' \t':
    //      chunks.append(' ')
    //    else:
    //      chunks.append(line_break)
    //else:
    //  chunks.append(line_break)
  }

  // Chomp the tail.
  if (false !== chomping) {
    chunks.push(lineBreak);
  }

  if (true === chomping) {
    chunks = chunks.concat(breaks);
  }

  // We are done.
  return new _tokens.ScalarToken(chunks.join(''), false, startMark, endMark, style);
};

Scanner.prototype.scanBlockScalarIndicators = function scanBlockScalarIndicators(startMark) {
  var chomping = null, increment = null, ch = this.peek();

  // See the specification for details.
  if (0 <= '+-'.indexOf(ch)) {
    chomping = (ch === '+');
    this.forward();
    ch = this.peek();

    if (0 <= '0123456789'.indexOf(ch)) {
      increment = +ch;
      if (increment === 0) {
        throw new ScannerError("while scanning a block scalar", startMark,
            "expected indentation indicator in the range 1-9, but found 0",
            this.getMark());
      }
      this.forward();
    }
  } else if (0 <= '0123456789'.indexOf(ch)) {
    increment = +ch;
    if (increment === 0) {
      throw new ScannerError("while scanning a block scalar", startMark,
          "expected indentation indicator in the range 1-9, but found 0",
          this.getMark());
    }

    this.forward();
    ch = this.peek();

    if (0 <= '+-'.indexOf(ch)) {
      chomping = (ch === '+');
      this.forward();
    }
  }

  ch = this.peek();

  if (-1 === '\x00 \r\n\x85\u2028\u2029'.indexOf(ch)) {
    throw new ScannerError("while scanning a block scalar", startMark,
        "expected chomping or indentation indicators, but found " + ch,
        this.getMark());
  }

  return [chomping, increment];
};

Scanner.prototype.scanBlockScalarIgnoredLine = function scanBlockScalarIgnoredLine(startMark) {
  var ch;

  // See the specification for details.
  while (this.peek() === ' ') {
    this.forward();
  }

  if (this.peek() === '#') {
    while (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.peek())) {
      this.forward();
    }
  }

  ch = this.peek();

  if (-1 === '\x00\r\n\x85\u2028\u2029'.indexOf(ch)) {
    throw new ScannerError("while scanning a block scalar", startMark,
        "expected a comment or a line break, but found " + ch,
        this.getMark());
  }

  this.scanLineBreak();
};

Scanner.prototype.scanBlockScalarIndentation = function scanBlockScalarIndentation() {
  var chunks, maxIndent, endMark;
  // See the specification for details.
  chunks = [];
  maxIndent = 0;
  endMark = this.getMark();

  while (0 <= ' \r\n\x85\u2028\u2029'.indexOf(this.peek())) {
    if (this.peek() !== ' ') {
      chunks.push(this.scanLineBreak());
      endMark = this.getMark();
    } else {
      this.forward();
      if (this.column > maxIndent) {
        maxIndent = this.column;
      }
    }
  }

  return [chunks, maxIndent, endMark];
};

Scanner.prototype.scanBlockScalarBreaks = function scanBlockScalarBreaks(indent) {
  var chunks, endMark;
  // See the specification for details.
  chunks = [];
  endMark = this.getMark();

  while (this.column < indent && this.peek() === ' ') {
    this.forward();
  }

  while (0 <= '\r\n\x85\u2028\u2029'.indexOf(this.peek())) {
    chunks.push(this.scanLineBreak());
    endMark = this.getMark();

    while (this.column < indent && this.peek() === ' ') {
      this.forward();
    }
  }

  return [chunks, endMark];
};

Scanner.prototype.scanFlowScalar = function scanFlowScalar(style) {
  var dbl, chunks, startMark, quote, endMark;
  // See the specification for details.
  // Note that we loose indentation rules for quoted scalars. Quoted
  // scalars don't need to adhere indentation because " and ' clearly
  // mark the beginning and the end of them. Therefore we are less
  // restrictive then the specification requires. We only need to check
  // that document separators are not included in scalars.
  dbl = (style === '"');
  chunks = [];
  startMark = this.getMark();
  quote = this.peek();
  this.forward();

  chunks = chunks.concat(this.scanFlowScalarNonSpaces(dbl, startMark));

  while (this.peek() !== quote) {
    chunks = chunks.concat(this.scanFlowScalarSpaces(dbl, startMark));
    chunks = chunks.concat(this.scanFlowScalarNonSpaces(dbl, startMark));
  }

  this.forward();
  endMark = this.getMark();

  return new _tokens.ScalarToken(chunks.join(''), false, startMark, endMark, style);
};

Scanner.prototype.scanFlowScalarNonSpaces = function scanFlowScalarNonSpaces(dbl, startMark) {
  var self = this, chunks, length, ch, code, validator;

  validator = function (k) {
    if (-1 === '0123456789ABCDEFabcdef'.indexOf(self.peek(k))) {
      throw new ScannerError("while scanning a double-quoted scalar", startMark,
          "expected escape sequence of " + length + " hexdecimal numbers, but found " + self.peek(k),
          self.getMark());
    }
  };

  // See the specification for details.
  chunks = [];
  while (true) {
    length = 0;

    while (-1 === '\'\"\\\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(length))) {
      length += 1;
    }

    if (length) {
      chunks.push(this.prefix(length));
      this.forward(length);
    }

    ch = this.peek();

    if (!dbl && ch === '\'' && this.peek(1) === '\'') {
      chunks.push('\'');
      this.forward(2);
    } else if ((dbl && ch === '\'') || (!dbl && 0 <= '\"\\'.indexOf(ch))) {
      chunks.push(ch);
      this.forward();
    } else if (dbl && ch === '\\') {
      this.forward();
      ch = this.peek();

      if (ESCAPE_REPLACEMENTS.hasOwnProperty(ch)) {
        chunks.push(ESCAPE_REPLACEMENTS[ch]);
        this.forward();
      } else if (ESCAPE_CODES.hasOwnProperty(ch)) {
        length = ESCAPE_CODES[ch];
        this.forward();
        range(length).forEach(validator);
        code = parseInt(this.prefix(length), 16);
        chunks.push(String.fromCharCode(code));
        this.forward(length);
      } else if (0 <= '\r\n\x85\u2028\u2029'.indexOf(ch)) {
        this.scanLineBreak();
        chunks = chunks.concat(this.scanFlowScalarBreaks(dbl, startMark));
      } else {
        throw new ScannerError("while scanning a double-quoted scalar", startMark,
                               "found unknown escape character " + ch, this.getMark());
      }
    } else {
      return chunks;
    }
  }
};

Scanner.prototype.scanFlowScalarSpaces = function scanFlowScalarSpaces(dbl, startMark) {
  var chunks, length, whitespaces, ch, lineBreak, breaks;
  // See the specification for details.
  chunks = [];
  length = 0;

  while (0 <= ' \t'.indexOf(this.peek(length))) {
    length += 1;
  }

  whitespaces = this.prefix(length);
  this.forward(length);
  ch = this.peek();

  if (ch === '\x00') {
    throw new ScannerError("while scanning a quoted scalar", startMark,
                           "found unexpected end of stream", this.getMark());
  } else if (0 <= '\r\n\x85\u2028\u2029'.indexOf(ch)) {
    lineBreak = this.scanLineBreak();
    breaks = this.scanFlowScalarBreaks(dbl, startMark);

    if (lineBreak !== '\n') {
      chunks.push(lineBreak);
    } else if (!breaks) {
      chunks.push(' ');
    }

    chunks = chunks.concat(breaks);
  } else {
    chunks.push(whitespaces);
  }

  return chunks;
};

Scanner.prototype.scanFlowScalarBreaks = function scanFlowScalarBreaks(dbl, startMark) {
  var chunks = [], prefix;

  // See the specification for details.

  while (true) {
    // Instead of checking indentation, we check for document
    // separators.
    prefix = this.prefix(3);

    if ((prefix === '---' || prefix === '...') && 0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(3))) {
      throw new ScannerError("while scanning a quoted scalar", startMark,
                             "found unexpected document separator", this.getMark());
    }

    while (0 <= ' \t'.indexOf(this.peek())) {
      this.forward();
    }

    if (0 <= '\r\n\x85\u2028\u2029'.indexOf(this.peek())) {
      chunks.push(this.scanLineBreak());
    } else {
      return chunks;
    }
  }
};

Scanner.prototype.scanPlain = function scanPlain() {
  var ch, chunks, startMark, endMark, indent, spaces, length;

  // See the specification for details.
  // We add an additional restriction for the flow context:
  //   plain scalars in the flow context cannot contain ',', ':' and '?'.
  // We also keep track of the `allow_simple_key` flag here.
  // Indentation rules are loosed for the flow context.

  chunks = [];
  startMark = this.getMark();
  endMark = startMark;
  indent = this.indent + 1;
  spaces = [];

  // We allow zero indentation for scalars, but then we need to check for
  // document separators at the beginning of the line.
  //if indent == 0:
  //  indent = 1

  while (true) {
    length = 0;

    if (this.peek() === '#') {
      break;
    }

    while (true) {
      ch = this.peek(length);

      if (0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(ch) || (
            !this.flowLevel && ch === ':' &&
            0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(length + 1))
          ) || (this.flowLevel && 0 <= ',:?[]{}'.indexOf(ch))) {
        break;
      }

      length += 1;
    }

    // It's not clear what we should do with ':' in the flow context.
    if (this.flowLevel && ch === ':' && -1 === '\x00 \t\r\n\x85\u2028\u2029,[]{}'.indexOf(this.peek(length + 1))) {
      this.forward(length);
      throw new ScannerError("while scanning a plain scalar", startMark,
        "found unexpected ':'", this.getMark(),
        "Please check http://pyyaml.org/wiki/YAMLColonInFlowContext for details.");
    }

    if (length === 0) {
      break;
    }

    this.allowSimpleKey = false;
    chunks = chunks.concat(spaces);
    chunks.push(this.prefix(length));

    this.forward(length);
    endMark = this.getMark();
    spaces = this.scanPlainSpaces(indent, startMark);

    if (!Array.isArray(spaces) || !spaces.length || this.peek() === '#' ||
        (!this.flowLevel && this.column < indent)) {
      break;
    }
  }

  return new _tokens.ScalarToken(chunks.join(''), true, startMark, endMark);
};

Scanner.prototype.scanPlainSpaces = function scanPlainSpaces() {
  var chunks, length, whitespaces, ch, prefix, breaks, lineBreak;

  // See the specification for details.
  // The specification is really confusing about tabs in plain scalars.
  // We just forbid them completely. Do not use tabs in YAML!

  chunks = [];
  length = 0;

  while (this.peek(length) === ' ') {
    length += 1;
  }

  whitespaces = this.prefix(length);
  this.forward(length);
  ch = this.peek();

  if (0 <= '\r\n\x85\u2028\u2029'.indexOf(ch)) {
    lineBreak = this.scanLineBreak();
    this.allowSimpleKey = true;
    prefix = this.prefix(3);

    if ((prefix === '---' || prefix === '...') &&
        0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(3))) {
      return;
    }

    breaks = [];

    while (0 <= ' \r\n\x85\u2028\u2029'.indexOf(this.peek())) {
      if (this.peek() === ' ') {
        this.forward();
      } else {
        breaks.push(this.scanLineBreak());
        prefix = this.prefix(3);

        if ((prefix === '---' || prefix === '...') &&
            0 <= '\x00 \t\r\n\x85\u2028\u2029'.indexOf(this.peek(3))) {
          return;
        }
      }
    }

    if (lineBreak !== '\n') {
      chunks.push(lineBreak);
    } else if (!breaks || !breaks.length) {
      chunks.push(' ');
    }

    chunks = chunks.concat(breaks);
  } else if (whitespaces) {
    chunks.push(whitespaces);
  }

  return chunks;
};

Scanner.prototype.scanTagHandle = function scanTagHandle(name, startMark) {
  var ch, length, value;

  // See the specification for details.
  // For some strange reasons, the specification does not allow '_' in
  // tag handles. I have allowed it anyway.

  ch = this.peek();

  if (ch !== '!') {
    throw new ScannerError("while scanning a " + name, startMark,
                           "expected '!', but found " + ch, this.getMark());
  }

  length = 1;
  ch = this.peek(length);

  if (ch !== ' ') {
    while (/^[0-9A-Za-z]/.test(ch) || 0 <= '-_'.indexOf(ch)) {
      length += 1;
      ch = this.peek(length);
    }

    if (ch !== '!') {
      this.forward(length);
      throw new ScannerError("while scanning a " + name, startMark,
                             "expected '!', but found " + ch, this.getMark());
    }

    length += 1;
  }

  value = this.prefix(length);
  this.forward(length);

  return value;
};

Scanner.prototype.scanTagUri = function scanTagUri(name, startMark) {
  var chunks, length, ch;

  // See the specification for details.
  // Note: we do not check if URI is well-formed.

  chunks = [];
  length = 0;
  ch = this.peek(length);

  while (/^[0-9A-Za-z]/.test(ch) || 0 <= '-;/?:@&=+$,_.!~*\'()[]%'.indexOf(ch)) {
    if (ch === '%') {
      chunks.push(this.prefix(length));
      this.forward(length);
      length = 0;
      chunks.push(this.scanUriEscapes(name, startMark));
    } else {
      length += 1;
    }

    ch = this.peek(length);
  }

  if (length) {
    chunks.push(this.prefix(length));
    this.forward(length);
    length = 0;
  }

  if (!chunks.length) {
    throw new ScannerError("while parsing a " + name, startMark,
        "expected URI, but found " + ch, this.getMark());
  }

  return chunks.join('');
};

Scanner.prototype.scanUriEscapes = function scanUriEscapes(name, startMark) {
  var self = this, codes, mark, value, validator;

  // See the specification for details.
  codes = [];
  mark = this.getMark();

  validator = function (k) {
    if (-1 === '0123456789ABCDEFabcdef'.indexOf(self.peek(k))) {
      throw new ScannerError("while scanning a " + name, startMark,
        "expected URI escape sequence of 2 hexdecimal numbers, but found " + self.peek(k),
        self.getMark());
    }
  };

  while (this.peek() === '%') {
    this.forward();
    range(2).forEach(validator);
    codes.push(parseInt(this.prefix(2), 16));
    this.forward(2);
  }

  try {
    value = (new Buffer(codes)).toString('utf8');
  } catch (err) {
    throw new ScannerError("while scanning a " + name, startMark, err.toString(), mark);
  }

  return value;
};

Scanner.prototype.scanLineBreak = function scanLineBreak() {
  var ch;

  // Transforms:
  //   '\r\n'    :   '\n'
  //   '\r'    :   '\n'
  //   '\n'    :   '\n'
  //   '\x85'    :   '\n'
  //   '\u2028'  :   '\u2028'
  //   '\u2029   :   '\u2029'
  //   default   :   ''
  
  ch = this.peek();

  if (0 <= '\r\n\x85'.indexOf(ch)) {
    if (this.prefix(2) === '\r\n') {
      this.forward(2);
    } else {
      this.forward();
    }

    return '\n';
  } else if (0 <= '\u2028\u2029'.indexOf(ch)) {
    this.forward();
    return ch;
  }

  return '';
};


module.exports.Scanner = Scanner;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/tokens.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');


function Token(startMark, endMark) {
  this.startMark = startMark || null;
  this.endMark = endMark || null;
}

Token.prototype.hash =
Token.prototype.toString = function toString() {
  var values = [], self = this;
    
  Object.getOwnPropertyNames(this).forEach(function (key) {
    if (!/startMark|endMark|__meta__/.test(key)) {
      values.push(key + ':' + self[key]);
    }
  });

  return this.constructor.name + '(' + values.join(', ') + ')';
};


function DirectiveToken(name, value, startMark, endMark) {
  Token.call(this, startMark, endMark);
  this.name = name;
  this.value = value;
}
$$.inherits(DirectiveToken, Token);
DirectiveToken.id = '<directive>';


function DocumentStartToken() { Token.apply(this, arguments); }
$$.inherits(DocumentStartToken, Token);
DocumentStartToken.id = '<document start>';


function DocumentEndToken() { Token.apply(this, arguments); }
$$.inherits(DocumentEndToken, Token);
DocumentEndToken.id = '<document end>';


function StreamStartToken(startMark, endMark, encoding) {
  Token.call(this, startMark, endMark);
  this.encoding = encoding || null;
}
$$.inherits(StreamStartToken, Token);
StreamStartToken.id = '<stream start>';


function StreamEndToken() { Token.apply(this, arguments); }
$$.inherits(StreamEndToken, Token);
StreamEndToken.id = '<stream end>';


function BlockSequenceStartToken() { Token.apply(this, arguments); }
$$.inherits(BlockSequenceStartToken, Token);
BlockSequenceStartToken.id = '<block sequence start>';


function BlockMappingStartToken() { Token.apply(this, arguments); }
$$.inherits(BlockMappingStartToken, Token);
BlockMappingStartToken.id = '<block mapping start>';


function BlockEndToken() { Token.apply(this, arguments); }
$$.inherits(BlockEndToken, Token);
BlockEndToken.id = '<block end>';


function FlowSequenceStartToken() { Token.apply(this, arguments); }
$$.inherits(FlowSequenceStartToken, Token);
FlowSequenceStartToken.id = '[';


function FlowMappingStartToken() { Token.apply(this, arguments); }
$$.inherits(FlowMappingStartToken, Token);
FlowMappingStartToken.id = '{';


function FlowSequenceEndToken() { Token.apply(this, arguments); }
$$.inherits(FlowSequenceEndToken, Token);
FlowSequenceEndToken.id = ']';


function FlowMappingEndToken() { Token.apply(this, arguments); }
$$.inherits(FlowMappingEndToken, Token);
FlowMappingEndToken.id = '}';


function KeyToken() { Token.apply(this, arguments); }
$$.inherits(KeyToken, Token);
KeyToken.id = '?';


function ValueToken() { Token.apply(this, arguments); }
$$.inherits(ValueToken, Token);
ValueToken.id = ':';


function BlockEntryToken() { Token.apply(this, arguments); }
$$.inherits(BlockEntryToken, Token);
BlockEntryToken.id = '-';


function FlowEntryToken() { Token.apply(this, arguments); }
$$.inherits(FlowEntryToken, Token);
FlowEntryToken.id = ',';


function AliasToken(value, startMark, endMark) {
  Token.call(this, startMark, endMark);
  this.value = value;
}
$$.inherits(AliasToken, Token);
AliasToken.id = '<alias>';


function AnchorToken(value, startMark, endMark) {
  Token.call(this, startMark, endMark);
  this.value = value;
}
$$.inherits(AnchorToken, Token);
AnchorToken.id = '<anchor>';


function TagToken(value, startMark, endMark) {
  Token.call(this, startMark, endMark);
  this.value = value;
}
$$.inherits(TagToken, Token);
TagToken.id = '<tag>';


function ScalarToken(value, plain, startMark, endMark, style) {
  Token.call(this, startMark, endMark);
  this.value = value;
  this.plain = plain;
  this.style = style || null;
}
$$.inherits(ScalarToken, Token);
TagToken.id = '<scalar>';


module.exports.DirectiveToken = DirectiveToken;
module.exports.DocumentStartToken = DocumentStartToken;
module.exports.DocumentEndToken = DocumentEndToken;
module.exports.StreamStartToken = StreamStartToken;
module.exports.StreamEndToken = StreamEndToken;
module.exports.BlockSequenceStartToken = BlockSequenceStartToken;
module.exports.BlockMappingStartToken = BlockMappingStartToken;
module.exports.BlockEndToken = BlockEndToken;
module.exports.FlowSequenceStartToken = FlowSequenceStartToken;
module.exports.FlowMappingStartToken = FlowMappingStartToken;
module.exports.FlowSequenceEndToken = FlowSequenceEndToken;
module.exports.FlowMappingEndToken = FlowMappingEndToken;
module.exports.KeyToken = KeyToken;
module.exports.ValueToken = ValueToken;
module.exports.BlockEntryToken = BlockEntryToken;
module.exports.FlowEntryToken = FlowEntryToken;
module.exports.AliasToken = AliasToken;
module.exports.AnchorToken = AnchorToken;
module.exports.TagToken = TagToken;
module.exports.ScalarToken = ScalarToken;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/parser.js",function(require,module,exports,__dirname,__filename,process){// The following YAML grammar is LL(1) and is parsed by a recursive descent
// parser.
//
// stream            ::= STREAM-START implicit_document? explicit_document* STREAM-END
// implicit_document ::= block_node DOCUMENT-END*
// explicit_document ::= DIRECTIVE* DOCUMENT-START block_node? DOCUMENT-END*
// block_node_or_indentless_sequence ::=
//                       ALIAS
//                       | properties (block_content | indentless_block_sequence)?
//                       | block_content
//                       | indentless_block_sequence
// block_node        ::= ALIAS
//                       | properties block_content?
//                       | block_content
// flow_node         ::= ALIAS
//                       | properties flow_content?
//                       | flow_content
// properties        ::= TAG ANCHOR? | ANCHOR TAG?
// block_content     ::= block_collection | flow_collection | SCALAR
// flow_content      ::= flow_collection | SCALAR
// block_collection  ::= block_sequence | block_mapping
// flow_collection   ::= flow_sequence | flow_mapping
// block_sequence    ::= BLOCK-SEQUENCE-START (BLOCK-ENTRY block_node?)* BLOCK-END
// indentless_sequence   ::= (BLOCK-ENTRY block_node?)+
// block_mapping     ::= BLOCK-MAPPING_START
//                       ((KEY block_node_or_indentless_sequence?)?
//                       (VALUE block_node_or_indentless_sequence?)?)*
//                       BLOCK-END
// flow_sequence     ::= FLOW-SEQUENCE-START
//                       (flow_sequence_entry FLOW-ENTRY)*
//                       flow_sequence_entry?
//                       FLOW-SEQUENCE-END
// flow_sequence_entry   ::= flow_node | KEY flow_node? (VALUE flow_node?)?
// flow_mapping      ::= FLOW-MAPPING-START
//                       (flow_mapping_entry FLOW-ENTRY)*
//                       flow_mapping_entry?
//                       FLOW-MAPPING-END
// flow_mapping_entry    ::= flow_node | KEY flow_node? (VALUE flow_node?)?
//
// FIRST sets:
//
// stream: { STREAM-START }
// explicit_document: { DIRECTIVE DOCUMENT-START }
// implicit_document: FIRST(block_node)
// block_node: { ALIAS TAG ANCHOR SCALAR BLOCK-SEQUENCE-START BLOCK-MAPPING-START FLOW-SEQUENCE-START FLOW-MAPPING-START }
// flow_node: { ALIAS ANCHOR TAG SCALAR FLOW-SEQUENCE-START FLOW-MAPPING-START }
// block_content: { BLOCK-SEQUENCE-START BLOCK-MAPPING-START FLOW-SEQUENCE-START FLOW-MAPPING-START SCALAR }
// flow_content: { FLOW-SEQUENCE-START FLOW-MAPPING-START SCALAR }
// block_collection: { BLOCK-SEQUENCE-START BLOCK-MAPPING-START }
// flow_collection: { FLOW-SEQUENCE-START FLOW-MAPPING-START }
// block_sequence: { BLOCK-SEQUENCE-START }
// block_mapping: { BLOCK-MAPPING-START }
// block_node_or_indentless_sequence: { ALIAS ANCHOR TAG SCALAR BLOCK-SEQUENCE-START BLOCK-MAPPING-START FLOW-SEQUENCE-START FLOW-MAPPING-START BLOCK-ENTRY }
// indentless_sequence: { ENTRY }
// flow_collection: { FLOW-SEQUENCE-START FLOW-MAPPING-START }
// flow_sequence: { FLOW-SEQUENCE-START }
// flow_mapping: { FLOW-MAPPING-START }
// flow_sequence_entry: { ALIAS ANCHOR TAG SCALAR FLOW-SEQUENCE-START FLOW-MAPPING-START KEY }
// flow_mapping_entry: { ALIAS ANCHOR TAG SCALAR FLOW-SEQUENCE-START FLOW-MAPPING-START KEY }


'use strict';


var $$ = require('./common');
var _errors = require('./errors');
var _tokens = require('./tokens');
var _events = require('./events');


function ParserError() {
  _errors.MarkedYAMLError.apply(this, arguments);
  this.name = 'ParserError';
}
$$.inherits(ParserError, _errors.MarkedYAMLError);


var DEFAULT_TAGS = {
  '!':  '!',
  '!!': 'tag:yaml.org,2002:'
};


function Parser() {
  this.currentEvent = null;
  this.yamlVersion = null;
  this.tagHandles = {};
  this.states = [];
  this.marks = [];
  this.state = this.parseStreamStart.bind(this);
}


Parser.prototype.dispose = function dispose() {
  // Reset the state attributes (to clear self-references)
  this.states = [];
  this.state = null;
};

Parser.prototype.checkEvent = function checkEvent() {
  var i;

  // Check the type of the next event.
  if (null === this.currentEvent && !!this.state) {
    this.currentEvent = this.state();
  }

  if (null !== this.currentEvent) {
    if (0 === arguments.length) {
      return true;
    }

    for (i = 0; i < arguments.length; i += 1) {
      if ($$.isInstanceOf(this.currentEvent, arguments[i])) {
        return true;
      }
    }
  }

  return false;
};

Parser.prototype.peekEvent = function peekEvent() {
  // Get the next event.
  if (null === this.currentEvent && !!this.state) {
    this.currentEvent = this.state();
  }

  return this.currentEvent;
};

Parser.prototype.getEvent = function getEvent() {
  var value;

  // Get the next event and proceed further.
  if (null === this.currentEvent && !!this.state) {
    this.currentEvent = this.state();
  }

  value = this.currentEvent;
  this.currentEvent = null;

  return value;
};

Parser.prototype.parseStreamStart = function parseStreamStart() {
  var token, event;

  // Parse the stream start.
  token = this.getToken();
  event = new _events.StreamStartEvent(token.startMark, token.endMark,
                                  token.encoding);

  // Prepare the next state.
  this.state = this.parseImplicitDocumentStart.bind(this);

  return event;
};

Parser.prototype.parseImplicitDocumentStart = function parseImplicitDocumentStart() {
  var token, event;
  if (this.checkToken(_tokens.DirectiveToken, _tokens.DocumentStartToken, _tokens.StreamEndToken)) {
    return this.parseDocumentStart();
  }

  // Parse an implicit document.
  this.tagHandles = DEFAULT_TAGS;
  token = this.peekToken();
  event = new _events.DocumentStartEvent(token.startMark, token.startMark, false);

  // Prepare the next state.
  this.states.push(this.parseDocumentEnd.bind(this));
  this.state = this.parseBlockNode.bind(this);

  return event;
};

Parser.prototype.parseDocumentStart = function parseDocumentStart() {
  var token, event, version, tags, startMark, tuple;

  // Parse any extra document end indicators.
  while (this.checkToken(_tokens.DocumentEndToken)) {
    this.getToken();
  }

  if (this.checkToken(_tokens.StreamEndToken)) {
    // Parse the end of the stream.
    token = this.getToken();
    event = new _events.StreamEndEvent(token.startMark, token.endMark);

    // Should be empty arrays
    if (this.states && this.states.length) {
      throw new _errors.YAMLError('States supposed to be empty');
    }
    if (this.marks && this.marks.length) {
      throw new _errors.YAMLError('Marks supposed to be empty');
    }

    this.state = null;
    return event;
  }

  // Parse an explicit document.
  token = this.peekToken();
  startMark = token.startMark;

  tuple = this.processDirectives();
  version = tuple.shift();
  tags = tuple.shift();

  if (!this.checkToken(_tokens.DocumentStartToken)) {
    throw new ParserError(null, null,
                "expected '<document start>', but found " + this.peekToken().constructor.id,
                this.peekToken().startMark);
  }

  token = this.getToken();
  event = new _events.DocumentStartEvent(startMark, token.endMark, true, version, tags);

  this.states.push(this.parseDocumentEnd.bind(this));
  this.state = this.parseDocumentContent.bind(this);

  return event;
};

Parser.prototype.parseDocumentEnd = function parseDocumentEnd() {
  var token, event, explicit, startMark, endMark;

  // Parse the document end.
  token = this.peekToken();
  startMark = endMark = token.startMark;
  explicit = false;

  if (this.checkToken(_tokens.DocumentEndToken)) {
    token = this.getToken();
    endMark = token.endMark;
    explicit = true;
  }

  event = new _events.DocumentEndEvent(startMark, endMark, explicit);

  // Prepare the next state.
  this.state = this.parseDocumentStart.bind(this);

  return event;
};

Parser.prototype.parseDocumentContent = function parseDocumentContent() {
  var event;

  if (!this.checkToken(_tokens.DirectiveToken, _tokens.DocumentStartToken,
                       _tokens.DocumentEndToken, _tokens.StreamEndToken)) {
    return this.parseBlockNode();
  }

  event = this.processEmptyScalar(this.peekToken().startMark);
  this.state = this.states.pop();

  return event;
};

Parser.prototype.processDirectives = function processDirectives() {
  var token, handle, prefix, value;

  this.yamlVersion = null;
  this.tagHandles = {};

  while (this.checkToken(_tokens.DirectiveToken)) {
    token = this.getToken();

    if ('YAML' === token.name) {
      if (null !== this.yamlVersion) {
        throw new ParserError(null, null, "found duplicate YAML directive",
                              token.startMark);
      }

      // token.value => [major, minor]
      if (1 !== +(token.value[0])) {
        throw new ParserError(null, null, "found incompatible YAML document (version 1.* is required)",
                              token.startMark);
      }

      this.yamlVersion = token.value;
    } else if ('TAG' === token.name) {
      handle = token.value[0];
      prefix = token.value[1];

      if (undefined !== this.tagHandles[handle]) {
        throw new ParserError(null, null, "duplicate tag handle " + handle,
                              token.startMark);
      }

      this.tagHandles[handle] = prefix;
    }
  }

  if (!Object.getOwnPropertyNames(this.tagHandles).length) {
    value = [this.yamlVersion, null];
  } else {
    value = [this.yamlVersion, {}];
    Object.getOwnPropertyNames(this.tagHandles).forEach(function (key) {
      value[1][key] = this.tagHandles[key];
    }.bind(this));
  }

  Object.getOwnPropertyNames(DEFAULT_TAGS).forEach(function (key) {
    if (undefined === this.tagHandles[key]) {
      this.tagHandles[key] = DEFAULT_TAGS[key];
    }
  }.bind(this));

  return value;
};

Parser.prototype.parseBlockNode = function parseBlockNode() {
  return this.parseNode(true);
};

Parser.prototype.parseFlowNode = function parseFlowNode() {
  return this.parseNode();
};

Parser.prototype.parseBlockNodeOrIndentlessSequence = function parseBlockNodeOrIndentlessSequence() {
  return this.parseNode(true, true);
};

Parser.prototype.parseNode = function parseNode(block, indentlessSequence) {
  var token, event, anchor = null, tag = null, startMark = null,
      endMark, tagMark, handle = null, suffix = null, implicit, node;

  block = block || false;
  indentlessSequence = indentlessSequence || false;

  if (this.checkToken(_tokens.AliasToken)) {
    token = this.getToken();
    event = new _events.AliasEvent(token.value, token.startMark, token.endMark);
    this.state = this.states.pop();
  } else {
    anchor = null;
    tag = null;
    startMark = endMark = tagMark = null;

    if (this.checkToken(_tokens.AnchorToken)) {
      token = this.getToken();
      startMark = token.startMark;
      endMark = token.endMark;
      anchor = token.value;

      if (this.checkToken(_tokens.TagToken)) {
        token = this.getToken();
        tagMark = token.startMark;
        endMark = token.endMark;
        tag = token.value;
      }
    } else if (this.checkToken(_tokens.TagToken)) {

      token = this.getToken();
      startMark = tagMark = token.startMark;
      endMark = token.endMark;
      tag = token.value;

      if (this.checkToken(_tokens.AnchorToken)) {
        token = this.getToken();
        endMark = token.endMark;
        anchor = token.value;
      }

    }

    if (null !== tag) {
      handle = tag[0];
      suffix = tag[1];

      if (null === handle) {
        tag = suffix;
      } else {
        if (undefined === this.tagHandles[handle]) {
          throw new ParserError("while parsing a node", startMark,
                                "found undefined tag handle " + handle,
                                tagMark);
        }

        tag = this.tagHandles[handle] + suffix;
      }
    }

    if (null === startMark) {
      startMark = endMark = this.peekToken().startMark;
    }

    event = null;
    implicit = (null === tag || '!' === tag);

    if (indentlessSequence && this.checkToken(_tokens.BlockEntryToken)) {
      endMark = this.peekToken().endMark;
      event = new _events.SequenceStartEvent(anchor, tag, implicit,
                                        startMark, endMark);
      this.state = this.parseIndentlessSequenceEntry.bind(this);
    } else {
      if (this.checkToken(_tokens.ScalarToken)) {
        token = this.getToken();
        endMark = token.endMark;

        if ((token.plain && null === tag) || '!' === tag) {
          implicit = [true, false];
        } else if (null === tag) {
          implicit = [false, true];
        } else {
          implicit = [false, false];
        }

        event = new _events.ScalarEvent(anchor, tag, implicit, token.value,
                                   startMark, endMark, token.style);
        this.state = this.states.pop();

      } else if (this.checkToken(_tokens.FlowSequenceStartToken)) {

        endMark = this.peekToken().endMark;
        event = new _events.SequenceStartEvent(anchor, tag, implicit,
                                          startMark, endMark, true);
        this.state = this.parseFlowSequenceFirstEntry.bind(this);

      } else if (this.checkToken(_tokens.FlowMappingStartToken)) {

        endMark = this.peekToken().endMark;
        event = new _events.MappingStartEvent(anchor, tag, implicit,
                                         startMark, endMark, true);
        this.state = this.parseFlowMappingFirstKey.bind(this);

      } else if (block && this.checkToken(_tokens.BlockSequenceStartToken)) {

        endMark = this.peekToken().startMark;
        event = new _events.SequenceStartEvent(anchor, tag, implicit,
                                          startMark, endMark, false);
        this.state = this.parseBlockSequenceFirstEntry.bind(this);

      } else if (block && this.checkToken(_tokens.BlockMappingStartToken)) {

        endMark = this.peekToken().startMark;
        event = new _events.MappingStartEvent(anchor, tag, implicit,
                                         startMark, endMark, false);
        this.state = this.parseBlockMappingFirstKey.bind(this);

      } else if (null !== anchor || null !== tag) {

        // Empty scalars are allowed even if a tag or an anchor is
        // specified.
        event = new _events.ScalarEvent(anchor, tag, [implicit, false], '',
                                   startMark, endMark);
        this.state = this.states.pop();

      } else {

        node = !!block ? 'block' : 'flow';
        token = this.peekToken();
        throw new ParserError("while parsing a " + node + " node", startMark,
                  "expected the node content, but found " + token.constructor.id,
                  token.startMark);
      }
    }
  }

  return event;
};

Parser.prototype.parseBlockSequenceFirstEntry = function parseBlockSequenceFirstEntry() {
  var token = this.getToken();
  this.marks.push(token.startMark);
  return this.parseBlockSequenceEntry();
};

Parser.prototype.parseBlockSequenceEntry = function parseBlockSequenceEntry() {
  var token, event;

  if (this.checkToken(_tokens.BlockEntryToken)) {
    token = this.getToken();

    if (!this.checkToken(_tokens.BlockEntryToken, _tokens.BlockEndToken)) {
      this.states.push(this.parseBlockSequenceEntry.bind(this));
      return this.parseBlockNode();
    }

    this.state = this.parseBlockSequenceEntry.bind(this);
    return this.processEmptyScalar(token.endMark);
  }

  if (!this.checkToken(_tokens.BlockEndToken)) {
    token = this.peekToken();
    throw new ParserError("while parsing a block collection", this.marks[this.marks.length - 1],
                          "expected <block end>, but found " + token.constructor.id,
                          token.startMark);
  }

  token = this.getToken();
  event = new _events.SequenceEndEvent(token.startMark, token.endMark);

  this.state = this.states.pop();
  this.marks.pop();

  return event;
};

Parser.prototype.parseIndentlessSequenceEntry = function parseIndentlessSequenceEntry() {
  var token, event;

  if (this.checkToken(_tokens.BlockEntryToken)) {
    token = this.getToken();

    if (!this.checkToken(_tokens.BlockEntryToken, _tokens.KeyToken,
                         _tokens.ValueToken, _tokens.BlockEndToken)) {
      this.states.push(this.parseIndentlessSequenceEntry.bind(this));
      return this.parseBlockNode();
    }

    this.state = this.parseIndentlessSequenceEntry.bind(this);
    return this.processEmptyScalar(token.endMark);
  }

  token = this.peekToken();
  event = new _events.SequenceEndEvent(token.startMark, token.startMark);
  this.state = this.states.pop();
  return event;
};

// block_mapping     ::= BLOCK-MAPPING_START
//                       ((KEY block_node_or_indentless_sequence?)?
//                       (VALUE block_node_or_indentless_sequence?)?)*
//                       BLOCK-END

Parser.prototype.parseBlockMappingFirstKey = function parseBlockMappingFirstKey() {
  var token = this.getToken();
  this.marks.push(token.startMark);
  return this.parseBlockMappingKey();
};

Parser.prototype.parseBlockMappingKey = function parseBlockMappingKey() {
  var token, event;

  if (this.checkToken(_tokens.KeyToken)) {
    token = this.getToken();

    if (!this.checkToken(_tokens.KeyToken, _tokens.ValueToken, _tokens.BlockEndToken)) {
      this.states.push(this.parseBlockMappingValue.bind(this));
      return this.parseBlockNodeOrIndentlessSequence();
    }

    this.state = this.parseBlockMappingValue.bind(this);
    return this.processEmptyScalar(token.endMark);
  }

  if (!this.checkToken(_tokens.BlockEndToken)) {
    token = this.peekToken();
    throw new ParserError("while parsing a block mapping", this.marks[this.marks.length - 1],
                          "expected <block end>, but found " + token.constructor.id,
                          token.startMark);
  }

  token = this.getToken();
  event = new _events.MappingEndEvent(token.startMark, token.endMark);

  this.state = this.states.pop();
  this.marks.pop();

  return event;
};

Parser.prototype.parseBlockMappingValue = function parseBlockMappingValue() {
  var token;

  if (this.checkToken(_tokens.ValueToken)) {
    token = this.getToken();

    if (!this.checkToken(_tokens.KeyToken, _tokens.ValueToken, _tokens.BlockEndToken)) {
      this.states.push(this.parseBlockMappingKey.bind(this));
      return this.parseBlockNodeOrIndentlessSequence();
    }

    this.state = this.parseBlockMappingKey.bind(this);
    return this.processEmptyScalar(token.endMark);
  }

  this.state = this.parseBlockMappingKey.bind(this);
  token = this.peekToken();

  return this.processEmptyScalar(token.startMark);
};

// flow_sequence     ::= FLOW-SEQUENCE-START
//                       (flow_sequence_entry FLOW-ENTRY)*
//                       flow_sequence_entry?
//                       FLOW-SEQUENCE-END
// flow_sequence_entry   ::= flow_node | KEY flow_node? (VALUE flow_node?)?
//
// Note that while production rules for both flow_sequence_entry and
// flow_mapping_entry are equal, their interpretations are different.
// For `flow_sequence_entry`, the part `KEY flow_node? (VALUE flow_node?)?`
// generate an inline mapping (set syntax).

Parser.prototype.parseFlowSequenceFirstEntry = function parseFlowSequenceFirstEntry() {
  var token = this.getToken();
  this.marks.push(token.startMark);
  return this.parseFlowSequenceEntry(true);
};

Parser.prototype.parseFlowSequenceEntry = function parseFlowSequenceEntry(first) {
  var token, event;

  first = first || false;

  if (!this.checkToken(_tokens.FlowSequenceEndToken)) {
    if (!first) {
      if (this.checkToken(_tokens.FlowEntryToken)) {
        this.getToken();
      } else {
        token = this.peekToken();
        throw new ParserError("while parsing a flow sequence", this.marks[this.marks.length - 1],
                              "expected ',' or ']', but got " + token.constructor.id, token.startMark);
      }
    }
      
    if (this.checkToken(_tokens.KeyToken)) {
      token = this.peekToken();
      event = new _events.MappingStartEvent(null, null, true,
                                       token.startMark, token.endMark, true);
      this.state = this.parseFlowSequenceEntryMappingKey.bind(this);
      return event;
    } else if (!this.checkToken(_tokens.FlowSequenceEndToken)) {
      this.states.push(this.parseFlowSequenceEntry.bind(this));
      return this.parseFlowNode();
    }
  }

  token = this.getToken();
  event = new _events.SequenceEndEvent(token.startMark, token.endMark);

  this.state = this.states.pop();
  this.marks.pop();

  return event;
};

Parser.prototype.parseFlowSequenceEntryMappingKey = function parseFlowSequenceEntryMappingKey() {
  var token = this.getToken();

  if (!this.checkToken(_tokens.ValueToken, _tokens.FlowEntryToken, _tokens.FlowSequenceEndToken)) {
    this.states.push(this.parseFlowSequenceEntryMappingValue.bind(this));
    return this.parseFlowNode();
  }

  this.state = this.parseFlowSequenceEntryMappingValue.bind(this);
  return this.processEmptyScalar(token.endMark);
};

Parser.prototype.parseFlowSequenceEntryMappingValue = function parseFlowSequenceEntryMappingValue() {
  var token;

  if (this.checkToken(_tokens.ValueToken)) {
    token = this.getToken();

    if (!this.checkToken(_tokens.FlowEntryToken, _tokens.FlowSequenceEndToken)) {
      this.states.push(this.parseFlowSequenceEntryMappingEnd.bind(this));
      return this.parseFlowNode();
    }

    this.state = this.parseFlowSequenceEntryMappingEnd.bind(this);
    return this.processEmptyScalar(token.endMark);
  }

  this.state = this.parseFlowSequenceEntryMappingEnd.bind(this);
  token = this.peekToken();
  return this.processEmptyScalar(token.startMark);
};

Parser.prototype.parseFlowSequenceEntryMappingEnd = function parseFlowSequenceEntryMappingEnd() {
  var token;

  this.state = this.parseFlowSequenceEntry.bind(this);
  token = this.peekToken();

  return new _events.MappingEndEvent(token.startMark, token.startMark);
};

// flow_mapping  ::= FLOW-MAPPING-START
//                   (flow_mapping_entry FLOW-ENTRY)*
//                   flow_mapping_entry?
//                   FLOW-MAPPING-END
// flow_mapping_entry    ::= flow_node | KEY flow_node? (VALUE flow_node?)?

Parser.prototype.parseFlowMappingFirstKey = function parseFlowMappingFirstKey() {
  var token = this.getToken();
  this.marks.push(token.startMark);
  return this.parseFlowMappingKey(true);
};

Parser.prototype.parseFlowMappingKey = function parseFlowMappingKey(first) {
  var token, event;

  first = first || false;

  if (!this.checkToken(_tokens.FlowMappingEndToken)) {
    if (!first) {
      if (this.checkToken(_tokens.FlowEntryToken)) {
        this.getToken();
      } else {
        token = this.peekToken();
        throw new ParserError("while parsing a flow mapping", this.marks[this.marks.length - 1],
                              "expected ',' or '}', but got " + token.constructor.id, token.startMark);
      }
    }

    if (this.checkToken(_tokens.KeyToken)) {
      token = this.getToken();

      if (!this.checkToken(_tokens.ValueToken, _tokens.FlowEntryToken, _tokens.FlowMappingEndToken)) {
        this.states.push(this.parseFlowMappingValue.bind(this));
        return this.parseFlowNode();
      }

      this.state = this.parseFlowMappingValue.bind(this);
      return this.processEmptyScalar(token.endMark);
    } else if (!this.checkToken(_tokens.FlowMappingEndToken)) {
      this.states.push(this.parseFlowMappingEmptyValue.bind(this));
      return this.parseFlowNode();
    }
  }

  token = this.getToken();
  event = new _events.MappingEndEvent(token.startMark, token.endMark);

  this.state = this.states.pop();
  this.marks.pop();

  return event;
};

Parser.prototype.parseFlowMappingValue = function parseFlowMappingValue() {
  var token;

  if (this.checkToken(_tokens.ValueToken)) {
    token = this.getToken();

    if (!this.checkToken(_tokens.FlowEntryToken, _tokens.FlowMappingEndToken)) {
      this.states.push(this.parseFlowMappingKey.bind(this));
      return this.parseFlowNode();
    }

    this.state = this.parseFlowMappingKey.bind(this);
    return this.processEmptyScalar(token.endMark);
  }

  this.state = this.parseFlowMappingKey.bind(this);
  token = this.peekToken();
  return this.processEmptyScalar(token.startMark);
};

Parser.prototype.parseFlowMappingEmptyValue = function parseFlowMappingEmptyValue() {
  this.state = this.parseFlowMappingKey.bind(this);
  return this.processEmptyScalar(this.peekToken().startMark);
};

Parser.prototype.processEmptyScalar = function processEmptyScalar(mark) {
  return new _events.ScalarEvent(null, null, [true, false], '', mark, mark);
};


module.exports.Parser = Parser;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/events.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');


var HASHIFY_KEYS = ['anchor', 'tag', 'implicit', 'value'];


function Event(startMark, endMark) {
  this.startMark = startMark || null;
  this.endMark = endMark || null;
}

Event.prototype.hash = Event.prototype.toString = function toString() {
  var self = this, values = [];

  Object.getOwnPropertyNames(this).forEach(function (key) {
    if (0 <= HASHIFY_KEYS.indexOf(key)) {
      values.push(key + '=' + self[key]);
    }
  });

  return this.constructor.name + '(' + values.join(', ') + ')';
};


function NodeEvent(anchor, startMark, endMark) {
  Event.call(this, startMark, endMark);
  this.anchor = anchor;
}
$$.inherits(NodeEvent, Event);


function CollectionStartEvent(anchor, tag, implicit, startMark, endMark, flowStyle) {
  NodeEvent.call(this, anchor, startMark, endMark);
  this.tag = tag;
  this.implicit = implicit;
  this.flowStyle = flowStyle || null;
}
$$.inherits(CollectionStartEvent, NodeEvent);


function CollectionEndEvent() { Event.apply(this, arguments); }
$$.inherits(CollectionEndEvent, Event);


function StreamStartEvent(startMark, endMark, encoding) {
  Event.call(this, startMark, endMark);
  this.encoding = encoding || null;
}
$$.inherits(StreamStartEvent, Event);


function StreamEndEvent() { Event.apply(this, arguments); }
$$.inherits(StreamEndEvent, Event);


function DocumentStartEvent(startMark, endMark, explicit, version, tags) {
  Event.call(this, startMark, endMark);
  this.explicit = explicit || null;
  this.version = version || null;
  this.tags = tags || null;
}
$$.inherits(DocumentStartEvent, Event);


function DocumentEndEvent(startMark, endMark, explicit) {
  Event.call(this, startMark, endMark);
  this.explicit = explicit || null;
}
$$.inherits(DocumentEndEvent, Event);


function AliasEvent() { NodeEvent.apply(this, arguments); }
$$.inherits(AliasEvent, NodeEvent);


function ScalarEvent(anchor, tag, implicit, value, startMark, endMark, style) {
  NodeEvent.call(this, anchor, startMark, endMark);
  this.tag = tag;
  this.implicit = implicit;
  this.value = value;
  this.style = style || null;
}
$$.inherits(ScalarEvent, NodeEvent);


function SequenceStartEvent() { CollectionStartEvent.apply(this, arguments); }
$$.inherits(SequenceStartEvent, CollectionStartEvent);


function SequenceEndEvent() { CollectionEndEvent.apply(this, arguments); }
$$.inherits(SequenceEndEvent, CollectionEndEvent);


function MappingStartEvent() { CollectionStartEvent.apply(this, arguments); }
$$.inherits(MappingStartEvent, CollectionStartEvent);


function MappingEndEvent() { CollectionEndEvent.apply(this, arguments); }
$$.inherits(MappingEndEvent, CollectionEndEvent);


module.exports.NodeEvent = NodeEvent;
module.exports.CollectionStartEvent = CollectionStartEvent;
module.exports.CollectionEndEvent = CollectionEndEvent;
module.exports.StreamStartEvent = StreamStartEvent;
module.exports.StreamEndEvent = StreamEndEvent;
module.exports.DocumentStartEvent = DocumentStartEvent;
module.exports.DocumentEndEvent = DocumentEndEvent;
module.exports.AliasEvent = AliasEvent;
module.exports.ScalarEvent = ScalarEvent;
module.exports.SequenceStartEvent = SequenceStartEvent;
module.exports.SequenceEndEvent = SequenceEndEvent;
module.exports.MappingStartEvent = MappingStartEvent;
module.exports.MappingEndEvent = MappingEndEvent;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/composer.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');
var _nodes = require('./nodes');
var _events = require('./events');
var _errors = require('./errors');


function ComposerError() {
  _errors.MarkedYAMLError.apply(this, arguments);
  this.name = 'ComposerError';
}
$$.inherits(ComposerError, _errors.MarkedYAMLError);


function Composer() {
  this.anchors = {};
}


Composer.prototype.checkNode = function checkNode() {
  // Drop the STREAM-START event
  if (this.checkEvent(_events.StreamStartEvent)) {
    this.getEvent();
  }

  // If there are more documents vailable?
  return !this.checkEvent(_events.StreamEndEvent);
};

Composer.prototype.getNode = function getNode() {
  // Get the root node of the next document.
  if (!this.checkEvent(_events.StreamEndEvent)) {
    return this.composeDocument();
  }

  return null;
};

Composer.prototype.getSingleNode = function getSingleNode() {
  var document = null;

  // Drop the STREAM-START event.
  this.getEvent();

  // Compose a document if the stream is not empty.
  if (!this.checkEvent(_events.StreamEndEvent)) {
    document = this.composeDocument();
  }

  // Ensure that the stream contains no more documents.
  if (!this.checkEvent(_events.StreamEndEvent)) {
    throw new ComposerError("expected a single document in the stream",
            document.startMark, "but found another document",
            this.getEvent().startMark);
  }

  // Drop the STREAM-END event.
  this.getEvent();

  return document;
};

Composer.prototype.composeDocument = function composeDocument() {
  var node;

  // Drop the DOCUMENT-START event.
  this.getEvent();

  // Compose the root node.
  node = this.composeNode(null, null);

  // Drop the DOCUMENT-END event.
  this.getEvent();

  this.anchors = {};

  return node;
};

Composer.prototype.composeNode = function composeNode() {
  var node = null, event, anchor;

  if (this.checkEvent(_events.AliasEvent)) {
    event = this.getEvent();
    anchor = event.anchor;

    if (undefined === this.anchors[anchor]) {
      throw new ComposerError(null, null, "found undefined alias " + anchor,
                              event.startMark);
    }

    return this.anchors[anchor];
  }

  event = this.peekEvent();
  anchor = event.anchor;

  if (null !== anchor && undefined !== this.anchors[anchor]) {
    throw new ComposerError("found duplicate anchor " + anchor + "; first occurence",
                            this.anchors[anchor].startMark, "second occurence",
                            event.startMark);
  }

  if (this.checkEvent(_events.ScalarEvent)) {
    node = this.composeScalarNode(anchor);
  } else if (this.checkEvent(_events.SequenceStartEvent)) {
    node = this.composeSequenceNode(anchor);
  } else if (this.checkEvent(_events.MappingStartEvent)) {
    node = this.composeMappingNode(anchor);
  }

  return node;
};

Composer.prototype.composeScalarNode = function composeScalarNode(anchor) {
  var event, tag, node;

  event = this.getEvent();
  tag = event.tag;

  if (null === tag) {
    tag = this.resolve(_nodes.ScalarNode, event.value, event.implicit);
  } else if ("!" === tag) {
    tag = this.resolve(_nodes.ScalarNode, event.value, false);
  }

  node = new _nodes.ScalarNode(tag, event.value, event.startMark, event.endMark,
                           event.style);

  if (null !== anchor) {
    this.anchors[anchor] = node;
  }

  return node;
};

Composer.prototype.composeSequenceNode = function composeSequenceNode(anchor) {
  var start_event, tag, node, index, end_event;

  start_event = this.getEvent();
  tag = start_event.tag;

  if (null === tag) {
    tag = this.resolve(_nodes.SequenceNode, null, start_event.implicit);
  } else if ("!" === tag) {
    tag = this.resolve(_nodes.SequenceNode, null, false);
  }

  node = new _nodes.SequenceNode(tag, [], start_event.startMark, null,
                             start_event.flowStyle);

  if (null !== anchor) {
    this.anchors[anchor] = node;
  }

  index = 0;

  while (!this.checkEvent(_events.SequenceEndEvent)) {
    node.value.push(this.composeNode(node, index));
    index += 1;
  }

  end_event = this.getEvent();
  node.endMark = end_event.endMark;

  return node;
};


Composer.prototype.composeMappingNode = function composeMappingNode(anchor) {
  var startEvent, tag, node, itemKey, itemValue, endEvent;

  startEvent = this.getEvent();
  tag = startEvent.tag;

  if (null === tag) {
    tag = this.resolve(_nodes.MappingNode, null, startEvent.implicit);
  } else if ("!" === tag) {
    tag = this.resolve(_nodes.MappingNode, null, false);
  }

  node = new _nodes.MappingNode(tag, [], startEvent.startMark, null,
                            startEvent.flowStyle);

  if (null !== anchor) {
    this.anchors[anchor] = node;
  }

  while (!this.checkEvent(_events.MappingEndEvent)) {
    itemKey = this.composeNode(node, null);
    itemValue = this.composeNode(node, itemKey);
    node.value.push([itemKey, itemValue]);
  }

  endEvent = this.getEvent();
  node.endMark = endEvent.endMark;

  return node;
};


module.exports.Composer = Composer;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/nodes.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');


function GenericNode(tag, value, startMark, endMark) {
  this.tag = tag;
  this.value = value;
  this.startMark = startMark || null;
  this.endMark = endMark || null;
}

GenericNode.prototype.hash =
GenericNode.prototype.toString = function toString() {
  var value = this.value.toString();
  return this.constructor.name + '(' + this.tag + ', ' + value + ')';
};


function ScalarNode(tag, value, startMark, endMark, style) {
  GenericNode.call(this, tag, value, startMark, endMark);
  this.style = style || null;
}
$$.inherits(ScalarNode, GenericNode);
ScalarNode.id = 'scalar';


function CollectionNode(tag, value, startMark, endMark, flowStyle) {
  GenericNode.call(this, tag, value, startMark, endMark);
  this.flowStyle = flowStyle || null;
}
$$.inherits(CollectionNode, GenericNode);


function SequenceNode() { CollectionNode.apply(this, arguments); }
$$.inherits(SequenceNode, CollectionNode);
SequenceNode.id = 'sequence';


function MappingNode() { CollectionNode.apply(this, arguments); }
$$.inherits(MappingNode, CollectionNode);
MappingNode.id = 'mapping';


module.exports.ScalarNode = ScalarNode;
module.exports.SequenceNode = SequenceNode;
module.exports.MappingNode = MappingNode;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/resolver.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');
var _nodes = require('./nodes');


var DEFAULT_SCALAR_TAG = 'tag:yaml.org,2002:str';
var DEFAULT_SEQUENCE_TAG = 'tag:yaml.org,2002:seq';
var DEFAULT_MAPPING_TAG = 'tag:yaml.org,2002:map';


function BaseResolver() {
  this.resolverExactPaths = [];
  this.resolverPrefixPaths = [];
  this.yamlImplicitResolvers = BaseResolver.yamlImplicitResolvers;
}

BaseResolver.yamlImplicitResolvers = {};
BaseResolver.addImplicitResolver = function addImplicitResolver(tag, regexp, first) {
  var self = this;

  if (undefined === first) {
    first = [null];
  }

  first.forEach(function (ch) {
    if (undefined === self.yamlImplicitResolvers[ch]) {
      self.yamlImplicitResolvers[ch] = [];
    }

    self.yamlImplicitResolvers[ch].push([tag, regexp]);
  });
};

BaseResolver.prototype.resolve = function resolve(kind, value, implicit) {
  var resolvers, i, tag, regexp;

  if (kind === _nodes.ScalarNode && implicit && implicit[0]) {
    if (value === '') {
      resolvers = this.yamlImplicitResolvers[''] || [];
    } else {
      resolvers = this.yamlImplicitResolvers[value.charAt(0)] || [];
    }

    resolvers = resolvers.concat(this.yamlImplicitResolvers[null] || []);

    for (i = 0; i < resolvers.length; i += 1) {
      tag = resolvers[i][0];
      regexp = resolvers[i][1];

      if (regexp.test(value)) {
        return tag;
      }
    }
  }

  if (kind === _nodes.ScalarNode) {
    tag = DEFAULT_SCALAR_TAG;
  } else if (kind === _nodes.SequenceNode) {
    tag = DEFAULT_SEQUENCE_TAG;
  } else if (kind === _nodes.MappingNode) {
    tag = DEFAULT_MAPPING_TAG;
  } else {
    tag = null;
  }

  return tag;
};


function Resolver() {
  BaseResolver.apply(this, arguments);
  this.yamlImplicitResolvers = Resolver.yamlImplicitResolvers;
}

$$.inherits(Resolver, BaseResolver);

Resolver.yamlImplicitResolvers = {};
Resolver.addImplicitResolver = BaseResolver.addImplicitResolver;

Resolver.addImplicitResolver('tag:yaml.org,2002:bool',
  new RegExp('^(?:true|True|TRUE|false|False|FALSE)$'),
  ['t', 'T', 'f', 'F']);

Resolver.addImplicitResolver('tag:yaml.org,2002:float',
  new RegExp('^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?' +
             '|\\.[0-9_]+(?:[eE][-+][0-9]+)?' +
             '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
             '|[-+]?\\.(?:inf|Inf|INF)' +
             '|\\.(?:nan|NaN|NAN))$'),
  ['-', '+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']);

Resolver.addImplicitResolver('tag:yaml.org,2002:int',
  new RegExp('^(?:[-+]?0b[0-1_]+' +
             '|[-+]?0[0-7_]+' +
             '|[-+]?(?:0|[1-9][0-9_]*)' +
             '|[-+]?0x[0-9a-fA-F_]+' +
             '|[-+]?[1-9][0-9_]*(?::[0-5]?[0-9])+)$'),
  ['-', '+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

Resolver.addImplicitResolver('tag:yaml.org,2002:merge',
  new RegExp('^(?:<<)$'),
  ['<']);

Resolver.addImplicitResolver('tag:yaml.org,2002:null',
  new RegExp('^(?:~|null|Null|NULL|)$'),
  ['~', 'n', 'N', '']);

Resolver.addImplicitResolver('tag:yaml.org,2002:timestamp',
  new RegExp('^(?:[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]' +
             '|[0-9][0-9][0-9][0-9]-[0-9][0-9]?-[0-9][0-9]?' +
             '(?:[Tt]|[ \\t]+)[0-9][0-9]?' +
             ':[0-9][0-9]:[0-9][0-9](?:\\.[0-9]*)?' +
             '(?:[ \\t]*(?:Z|[-+][0-9][0-9]?(?::[0-9][0-9])?))?)$'),
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);

Resolver.addImplicitResolver('tag:yaml.org,2002:value',
  new RegExp('^(?:=)$'),
  ['=']);

// The following resolver is only for documentation purposes. It cannot work
// because plain scalars cannot start with '!', '&', or '*'.
Resolver.addImplicitResolver('tag:yaml.org,2002:yaml',
  new RegExp('^(?:!|&|\\*)$'),
  ['!', '&', '*']);



module.exports.BaseResolver = BaseResolver;
module.exports.Resolver = Resolver;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});

require.define("/lib/js-yaml/constructor.js",function(require,module,exports,__dirname,__filename,process){'use strict';


var $$ = require('./common');
var _errors = require('./errors');
var _nodes = require('./nodes');


function ConstructorError() {
  _errors.MarkedYAMLError.apply(this, arguments);
  this.name = 'ConstructorError';
}
$$.inherits(ConstructorError, _errors.MarkedYAMLError);


var BOOL_VALUES = {
  'y':        true,
  'yes':      true,
  'n':        false,
  'no':       false,
  'true':     true,
  'false':    false,
  'on':       true,
  'off':      false
};


var TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'           + // [1] year
  '-([0-9][0-9]?)'                    + // [2] month
  '-([0-9][0-9]?)'                    + // [3] day
  '(?:(?:[Tt]|[ \\t]+)'               + // ...
  '([0-9][0-9]?)'                     + // [4] hour
  ':([0-9][0-9])'                     + // [5] minute
  ':([0-9][0-9])'                     + // [6] second
  '(?:\\.([0-9]*))?'                  + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)'  + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?)?$'            // [11] tz_minute
);


function BaseConstructor() {
  this.constructedObjects = new $$.Hash();
  this.recursiveObjects = new $$.Hash();
  this.statePopulators = []; // was state_generators
  this.deepConstruct = false;

  this.yamlConstructors = BaseConstructor.yamlConstructors;
}

BaseConstructor.yamlConstructors = {};
BaseConstructor.addConstructor = function addConstructor(tag, constructor) {
  this.yamlConstructors[tag] = constructor;
};

BaseConstructor.prototype.checkData = function checkData() {
  return this.checkNode();
};

BaseConstructor.prototype.getData = function getData() {
  if (this.checkNode()) {
    return this.constructDocument(this.getNode());
  }
};

BaseConstructor.prototype.getSingleData = function getSingleData() {
  var node = this.getSingleNode();
  if (null !== node) {
    return this.constructDocument(node);
  }
  return null;
};

BaseConstructor.prototype.constructDocument = function constructDocument(node) {
  var data = this.constructObject(node),
      stateIterator, statePopulators;

  stateIterator = function (populator) { populator.execute(); };

  while (!!this.statePopulators.length) {
    statePopulators = this.statePopulators;
    this.statePopulators = [];

    statePopulators.forEach(stateIterator);
  }

  this.constructedObjects = new $$.Hash();
  this.recursiveObjects = new $$.Hash();
  this.deepConstruct = false;

  return data;
};

BaseConstructor.prototype.constructObject = function constructObject(node, deep) {
  var data, old_deep, constructor, populator;

  if (this.constructedObjects.hasKey(node)) {
    return this.constructedObjects.get(node);
  }

  if (!!deep) {
    old_deep = this.deepConstruct;
    this.deepConstruct = true;
  }

  if (this.recursiveObjects.hasKey(node)) {
    throw new ConstructorError(null, null,
                "found unconstructable recursive node",
                node.startMark);
  }

  this.recursiveObjects.store(node, null);

  if (undefined !== this.yamlConstructors[node.tag]) {
    constructor = this.yamlConstructors[node.tag];
  } else {
    if (undefined !== this.yamlConstructors[null]) {
      constructor = this.yamlConstructors[null];
    } else {
      throw new ConstructorError(null, null,
                  "can't find any constructor for tag=" + node.tag,
                  node.startMark);
    }
  }

  data = constructor.call(this, node);

  if (data instanceof $$.Populator) {
    populator = data;
    data = populator.data;

    if (this.deepConstruct) {
      populator.execute();
    } else {
      this.statePopulators.push(populator);
    }
  }

  this.constructedObjects.store(node, data);
  this.recursiveObjects.remove(node);

  if (deep) {
    this.deepConstruct = old_deep;
  }

  return data;
};

BaseConstructor.prototype.constructScalar = function constructScalar(node) {
  if (!$$.isInstanceOf(node, _nodes.ScalarNode)) {
    throw new ConstructorError(null, null,
                "expected a scalar node, but found " + node.id,
                node.startMark);
  }

  return node.value;
};

BaseConstructor.prototype.constructSequence = function constructSequence(node, deep) {
  if (!$$.isInstanceOf(node, _nodes.SequenceNode)) {
    throw new ConstructorError(null, null,
                "expected a sequence node, but found " + node.id,
                node.startMark);
  }

  return node.value.map(function (child) {
    return this.constructObject(child, deep);
  }, this);
};

BaseConstructor.prototype.constructMapping = function constructMapping(node, deep) {
  var mapping;

  if (!$$.isInstanceOf(node, _nodes.MappingNode)) {
    throw new ConstructorError(null, null,
                "expected a mapping node, but found " + node.id,
                node.startMark);
  }

  mapping = {};

  $$.each(node.value, function (pair) {
    var key_node = pair[0], value_node = pair[1], key, value;

    key = this.constructObject(key_node, deep);
    // TODO: Do we need to check
    if (undefined === key_node.hash) {
      throw new ConstructorError("while constructing a mapping", key_node.startMark,
                  "found unhashable key", key_node.startMark);
    }
    value = this.constructObject(value_node, deep);

    mapping[key] = value;
  }, this);

  return mapping;
};

BaseConstructor.prototype.constructPairs = function constructPairs(node, deep) {
  var pairs;

  if (!$$.isInstanceOf(node, _nodes.MappingNode)) {
    throw new ConstructorError(null, null,
                "expected a mapping node, but found " + node.id,
                node.startMark);
  }

  pairs = [];

  $$.each(node.value, function (pair) {
    var key, value;
    key = this.constructObject(pair[0], deep);
    value = this.constructObject(pair[1], deep);
    pairs.store(key, value);
  }, this);

  return pairs;
};


function SafeConstructor() {
  BaseConstructor.apply(this);
  this.yamlConstructors = SafeConstructor.yamlConstructors;
}

$$.inherits(SafeConstructor, BaseConstructor);

SafeConstructor.yamlConstructors = $$.extend({}, BaseConstructor.yamlConstructors);
SafeConstructor.addConstructor = BaseConstructor.addConstructor;

SafeConstructor.prototype.constructScalar = function constructScalar(node) {
  var result;

  if ($$.isInstanceOf(node, _nodes.MappingNode)) {
    $$.each(node.value, function (pair) {
      var key_node = pair[0], value_node = pair[1];

      if ('tag:yaml.org,2002:value' === key_node.tag) {
        result = this.constructScalar(value_node);
      }
    }, this);

    if (undefined !== result) {
      return result;
    }
  }

  return BaseConstructor.prototype.constructScalar.call(this, node);
};

SafeConstructor.prototype.flattenMapping = function flattenMapping(node) {
  var self = this, merge = [], index = 0, keyNode, valueNode, submerge,
      pushSingleValue, pushMultipleValues, submergeIterator;

  pushSingleValue = function (value) {
    merge.push(value);
  };

  pushMultipleValues = function (values) {
    values.forEach(pushSingleValue);
  };

  submergeIterator = function (subnode) {
    if (!$$.isInstanceOf(subnode, _nodes.MappingNode)) {
      throw new ConstructorError("while constructing a mapping", node.startMark,
                  "expected a mapping for merging, but found " + subnode.id,
                  subnode.startMark);
    }
    self.flattenMapping(subnode);
    submerge.push(subnode.value);
  };

  while (index < node.value.length) {
    keyNode = node.value[index][0];
    valueNode = node.value[index][1];

    if ('tag:yaml.org,2002:merge' === keyNode.tag) {
      node.value.splice(index, 1);

      if ($$.isInstanceOf(valueNode, _nodes.MappingNode)) {
        self.flattenMapping(valueNode);
        $$.each(valueNode.value, pushSingleValue);
      } else if ($$.isInstanceOf(valueNode, _nodes.SequenceNode)) {
        submerge = [];
        $$.each(valueNode.value, submergeIterator);
        $$.reverse(submerge).forEach(pushMultipleValues);
      } else {
        throw new ConstructorError("while constructing a mapping", node.startMark,
                    "expected a mapping or list of mappings for merging, but found " + valueNode.id,
                    valueNode.startMark);
      }
    } else if ('tag:yaml.org,2002:value' === keyNode.tag) {
      keyNode.tag = 'tag:yaml.org,2002:str';
      index += 1;
    } else {
      index += 1;
    }
  }

  if (!!merge.length) {
    $$.each(node.value, function (value) { merge.push(value); });
    node.value = merge;
  }
};

SafeConstructor.prototype.constructMapping = function constructMapping(node) {
  if ($$.isInstanceOf(node, _nodes.MappingNode)) {
    this.flattenMapping(node);
  }
  return BaseConstructor.prototype.constructMapping.call(this, node);
};

SafeConstructor.prototype.constructYamlNull = function constructYamlNull(node) {
  this.constructScalar(node);
  return null;
};

SafeConstructor.prototype.constructYamlBool = function constructYamlBool(node) {
  var value = this.constructScalar(node);
  return BOOL_VALUES[value.toLowerCase()];
};

SafeConstructor.prototype.constructYamlInt = function constructYamlInt(node) {
  var value = this.constructScalar(node).replace(/_/g, ''),
      sign = ('-' === value[0]) ? -1 : 1,
      base, digits = [];

  if (0 <= '+-'.indexOf(value[0])) {
    value = value.slice(1);
  }

  if ('0' === value) {
    return 0;
  } else if (/^0b/.test(value)) {
    return sign * parseInt(value.slice(2), 2);
  } else if (/^0x/.test(value)) {
    return sign * parseInt(value, 16);
  } else if ('0' === value[0]) {
    return sign * parseInt(value, 8);
  } else if (0 <= value.indexOf(':')) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });
    value = 0;
    base = 1;
    digits.forEach(function (d) {
      value += (d * base);
      base *= 60;
    });
    return sign * value;
  } else {
    return sign * parseInt(value, 10);
  }
};

SafeConstructor.prototype.constructYamlFloat = function constructYamlFloat(node) {
  var value = this.constructScalar(node).replace(/_/g, ''),
      sign = ('-' === value[0]) ? -1 : 1,
      base, digits = [];

  if (0 <= '+-'.indexOf(value[0])) {
    value = value.slice(1);
  }

  if ('.inf' === value) {
    return (1 === sign) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if ('.nan' === value) {
    return NaN;
  } else if (0 <= value.indexOf(':')) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });
    value = 0.0;
    base = 1;
    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });
    return sign * value;
  } else {
    return sign * parseFloat(value, 10);
  }
};

SafeConstructor.prototype.constructYamlBinary = function constructYamlBinary(node) {
  try {
    return $$.decodeBase64(this.constructScalar(node));
  } catch (err) {
    throw new ConstructorError(null, null,
                "failed to decode base64 data: " + err.toString(), node.startMark);
  }
};

SafeConstructor.prototype.constructYamlTimestamp = function constructYamlTimestamp(node) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, data;

  match = TIMESTAMP_REGEXP.exec(this.constructScalar(node));

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (!!match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (!!match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if ('-' === match[9]) {
      delta = -delta;
    }
  }

  data = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (!!delta) {
    data.setTime(data.getTime() - delta);
  }

  return data;
};

SafeConstructor.prototype.constructYamlOmap = function constructYamlOmap(node) {
  var self = this, omap = [];
  return $$.Populator(omap, function () {
    if (!$$.isInstanceOf(node, _nodes.SequenceNode)) {
      throw new ConstructorError("while constructing an ordered map", node.startMark,
                  "expected a sequence, but found " + node.id, node.startMark);
    }

    node.value.forEach(function (subnode) {
      var data, key, value;

      if (!$$.isInstanceOf(subnode, _nodes.MappingNode)) {
        throw new ConstructorError("while constructing an ordered map", node.startMark,
                    "expected a mapping of length 1, but found " + subnode.id,
                    subnode.startMark);
      }

      if (1 !== subnode.value.length) {
        throw new ConstructorError("while constructing an ordered map", node.startMark,
                      "expected a single mapping item, but found " + subnode.value.length + " items",
                      subnode.startMark);
      }

      key = self.constructObject(subnode.value[0][0]);
      value = self.constructObject(subnode.value[0][1]);
      data = Object.create(null);

      data[key] = value;

      omap.push(data);
    });
  });
};

SafeConstructor.prototype.constructYamlPairs = function constructYamlPairs(node) {
  var self = this, pairs = [];
  return $$.Populator(pairs, function () {
    if (!$$.isInstanceOf(node, _nodes.SequenceNode)) {
      throw new ConstructorError("while constructing pairs", node.startMark,
                "expected a sequence, but found " + node.id, node.startMark);
    }

    node.value.forEach(function (subnode) {
      var key, value;
     
      if (!$$.isInstanceOf(subnode, _nodes.MappingNode)) {
        throw new ConstructorError("while constructing pairs", node.startMark,
                    "expected a mapping of length 1, but found " + subnode.id,
                    subnode.startMark);
      }

      if (1 !== subnode.value.length) {
        throw new ConstructorError("while constructing pairs", node.startMark,
                    "expected a single mapping item, but found " + subnode.value.length + " items",
                    subnode.startMark);
      }

      key = self.constructObject(subnode.value[0][0]);
      value = self.constructObject(subnode.value[0][1]);

      pairs.push([key, value]);
    });
  });
};

SafeConstructor.prototype.constructYamlSet = function constructYamlSet(node) {
  var data = {};
  return $$.Populator(data, function () {
    $$.extend(data, this.constructMapping(node));
  }, this);
};

SafeConstructor.prototype.constructYamlStr = function constructYamlStr(node) {
  return this.constructScalar(node);
};

SafeConstructor.prototype.constructYamlSeq = function constructYamlSeq(node) {
  var data = [];
  return $$.Populator(data, function () {
    this.constructSequence(node).forEach(function (value) {
      data.push(value);
    });
  }, this);
};

SafeConstructor.prototype.constructYamlMap = function constructYamlMap(node) {
  var data = {};
  return $$.Populator(data, function () {
    $$.extend(data, this.constructMapping(node, true));
  }, this);
};

SafeConstructor.prototype.constructUndefined = function constructUndefined(node) {
  throw new ConstructorError(null, null,
              "could not determine constructor for the tag " + node.tag,
              node.startMark);
};


SafeConstructor.addConstructor(
  'tag:yaml.org,2002:null',
  SafeConstructor.prototype.constructYamlNull);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:bool',
  SafeConstructor.prototype.constructYamlBool);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:int',
  SafeConstructor.prototype.constructYamlInt);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:float',
  SafeConstructor.prototype.constructYamlFloat);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:binary',
  SafeConstructor.prototype.constructYamlBinary);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:timestamp',
  SafeConstructor.prototype.constructYamlTimestamp);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:omap',
  SafeConstructor.prototype.constructYamlOmap);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:pairs',
  SafeConstructor.prototype.constructYamlPairs);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:set',
  SafeConstructor.prototype.constructYamlSet);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:str',
  SafeConstructor.prototype.constructYamlStr);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:seq',
  SafeConstructor.prototype.constructYamlSeq);

SafeConstructor.addConstructor(
  'tag:yaml.org,2002:map',
  SafeConstructor.prototype.constructYamlMap);

SafeConstructor.addConstructor(
  null,
  SafeConstructor.prototype.constructUndefined);


function Constructor() {
  SafeConstructor.apply(this);
  this.yamlConstructors = Constructor.yamlConstructors;
}

$$.inherits(Constructor, SafeConstructor);

Constructor.yamlConstructors = $$.extend({}, SafeConstructor.yamlConstructors);
Constructor.addConstructor = SafeConstructor.addConstructor;

Constructor.prototype.constructJavascriptRegExp = function constructJavascriptRegExp(node) {
  var regexp = this.constructScalar(node),
      tail = /\/([gim]*)$/.exec(regexp),
      modifiers;

  // `/foo/gim` - tail can be maximum 4 chars
  if ('/' === regexp[0] && !!tail && 4 >= tail[0].length) {
    regexp = regexp.slice(1, regexp.length - tail[0].length);
    modifiers = tail[1];
  }

  return new RegExp(regexp, modifiers);
};

Constructor.prototype.constructJavascriptUndefined = function constructJavascriptUndefined() {
  var undef;
  return undef;
};

Constructor.prototype.constructJavascriptFunction = function constructJavascriptFunction(node) {
  /*jslint evil:true*/
  var func = new Function('return ' + this.constructScalar(node));
  return func();
};

Constructor.addConstructor(
  'tag:yaml.org,2002:js/undefined',
  Constructor.prototype.constructJavascriptUndefined);

Constructor.addConstructor(
  'tag:yaml.org,2002:js/regexp',
  Constructor.prototype.constructJavascriptRegExp);

Constructor.addConstructor(
  'tag:yaml.org,2002:js/function',
  Constructor.prototype.constructJavascriptFunction);


module.exports.BaseConstructor = BaseConstructor;
module.exports.SafeConstructor = SafeConstructor;
module.exports.Constructor = Constructor;


////////////////////////////////////////////////////////////////////////////////
// vim:ts=2:sw=2
////////////////////////////////////////////////////////////////////////////////
});
return require('./index'); }());
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
  blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\w+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i+1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item[item.length-1] === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre',
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1][cap[1].length-1] === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1][6] === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // url (gfm)
    if (cap = this.rules.url.exec(src)) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0][0];
        src = cap[0].substring(1) + src;
        continue;
      }
      out += this.outputLink(cap, link);
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<strong>'
        + this.output(cap[2] || cap[1])
        + '</strong>';
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<em>'
        + this.output(cap[2] || cap[1])
        + '</em>';
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<code>'
        + escape(cap[2], true)
        + '</code>';
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<br>';
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<del>'
        + this.output(cap[1])
        + '</del>';
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[0]);
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  if (cap[0][0] !== '!') {
    return '<a href="'
      + escape(link.href)
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>'
      + this.output(cap[1])
      + '</a>';
  } else {
    return '<img src="'
      + escape(link.href)
      + '" alt="'
      + escape(cap[1])
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>';
  }
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length-1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return '<hr>\n';
    }
    case 'heading': {
      return '<h'
        + this.token.depth
        + '>'
        + this.inline.output(this.token.text)
        + '</h'
        + this.token.depth
        + '>\n';
    }
    case 'code': {
      if (this.options.highlight) {
        var code = this.options.highlight(this.token.text, this.token.lang);
        if (code != null && code !== this.token.text) {
          this.token.escaped = true;
          this.token.text = code;
        }
      }

      if (!this.token.escaped) {
        this.token.text = escape(this.token.text, true);
      }

      return '<pre><code'
        + (this.token.lang
        ? ' class="'
        + this.options.langPrefix
        + this.token.lang
        + '"'
        : '')
        + '>'
        + this.token.text
        + '</code></pre>\n';
    }
    case 'table': {
      var body = ''
        , heading
        , i
        , row
        , cell
        , j;

      // header
      body += '<thead>\n<tr>\n';
      for (i = 0; i < this.token.header.length; i++) {
        heading = this.inline.output(this.token.header[i]);
        body += this.token.align[i]
          ? '<th align="' + this.token.align[i] + '">' + heading + '</th>\n'
          : '<th>' + heading + '</th>\n';
      }
      body += '</tr>\n</thead>\n';

      // body
      body += '<tbody>\n'
      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];
        body += '<tr>\n';
        for (j = 0; j < row.length; j++) {
          cell = this.inline.output(row[j]);
          body += this.token.align[j]
            ? '<td align="' + this.token.align[j] + '">' + cell + '</td>\n'
            : '<td>' + cell + '</td>\n';
        }
        body += '</tr>\n';
      }
      body += '</tbody>\n';

      return '<table>\n'
        + body
        + '</table>\n';
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return '<blockquote>\n'
        + body
        + '</blockquote>\n';
    }
    case 'list_start': {
      var type = this.token.ordered ? 'ol' : 'ul'
        , body = '';

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return '<'
        + type
        + '>\n'
        + body
        + '</'
        + type
        + '>\n';
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'html': {
      return !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
    }
    case 'paragraph': {
      return '<p>'
        + this.inline.output(this.token.text)
        + '</p>\n';
    }
    case 'text': {
      return '<p>'
        + this.parseText()
        + '</p>\n';
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

/**
 * Marked
 */

function marked(src, opt) {
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-'
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof exports === 'object') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "1.7.2",
        round = Math.round, i,
        // internal storage for language config files
        languages = {},

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing tokens
        parseMultipleFormatChunker = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenWord = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, // any word (or two) characters or numbers including two word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO seperator)

        // preliminary iso regex
        // 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
        isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return ~~(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(~~(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(10 * a / 6), 4);
            }
        };

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a));
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i]);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var data = this._data = {},
            years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.week || duration.w || 0,
            days = duration.days || duration.day || duration.d || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0,
            milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        // representation for dateAddRemove
        this._milliseconds = milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months +
            years * 12;

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds += absRound(milliseconds / 1000);

        data.seconds = seconds % 60;
        minutes += absRound(seconds / 60);

        data.minutes = minutes % 60;
        hours += absRound(minutes / 60);

        data.hours = hours % 24;
        days += absRound(hours / 24);

        days += weeks * 7;
        data.days = days % 30;

        months += absRound(days / 30);

        data.months = months % 12;
        years += absRound(months / 12);

        data.years = years;
    }


    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }
        return a;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding) {
        var ms = duration._milliseconds,
            d = duration._days,
            M = duration._months,
            currentDate;

        if (ms) {
            mom._d.setTime(+mom + ms * isAdding);
        }
        if (d) {
            mom.date(mom.date() + d * isAdding);
        }
        if (M) {
            currentDate = mom.date();
            mom.date(1)
                .month(mom.month() + M * isAdding)
                .date(Math.min(currentDate, mom.daysInMonth()));
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (~~array1[i] !== ~~array2[i]) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }


    /************************************
        Languages
    ************************************/


    Language.prototype = {
        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex, output;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy);
        },
        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    };

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        if (!key) {
            return moment.fn._lang;
        }
        if (!languages[key] && hasModule) {
            require('./lang/' + key);
        }
        return languages[key];
    }


    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[.*\]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += typeof array[i].call === 'function' ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return m.lang().longDateFormat(input) || input;
        }

        while (i-- && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        }

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token) {
        switch (token) {
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
            return parseTokenFourDigits;
        case 'YYYYY':
            return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'a':
        case 'A':
            return parseTokenWord;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return parseTokenOneOrTwoDigits;
        default :
            return new RegExp(token.replace('\\', ''));
        }
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, b,
            datePartArray = config._a;

        switch (token) {
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            datePartArray[1] = (input == null) ? 0 : ~~input - 1;
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[1] = a;
            } else {
                config._isValid = false;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DDDD
        case 'DD' : // fall through to DDDD
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                datePartArray[2] = ~~input;
            }
            break;
        // YEAR
        case 'YY' :
            datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
            break;
        case 'YYYY' :
        case 'YYYYY' :
            datePartArray[0] = ~~input;
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = ((input + '').toLowerCase() === 'pm');
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[3] = ~~input;
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[4] = ~~input;
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[5] = ~~input;
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
            datePartArray[6] = ~~ (('0.' + input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            a = (input + '').match(parseTimezoneChunker);
            if (a && a[1]) {
                config._tzh = ~~a[1];
            }
            if (a && a[2]) {
                config._tzm = ~~a[2];
            }
            // reverse offsets
            if (a && a[0] === '+') {
                config._tzh = -config._tzh;
                config._tzm = -config._tzm;
            }
            break;
        }

        // if the input is null, the date is not valid
        if (input == null) {
            config._isValid = false;
        }
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromArray(config) {
        var i, date, input = [];

        for (i = 0; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[3] += config._tzh || 0;
        input[4] += config._tzm || 0;

        date = new Date(0);

        if (config._useUTC) {
            date.setUTCFullYear(input[0], input[1], input[2]);
            date.setUTCHours(input[3], input[4], input[5], input[6]);
        } else {
            date.setFullYear(input[0], input[1], input[2]);
            date.setHours(input[3], input[4], input[5], input[6]);
        }

        config._d = date;
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var tokens = config._f.match(formattingTokens),
            string = config._i,
            i, parsedInput;

        config._a = [];

        for (i = 0; i < tokens.length; i++) {
            parsedInput = (getParseRegexForToken(tokens[i]).exec(string) || [])[0];
            if (parsedInput) {
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            }
            // don't parse if its not a known token
            if (formatTokenFunctions[tokens[i]]) {
                addTimeToArrayFromToken(tokens[i], parsedInput, config);
            }
        }
        // handle am pm
        if (config._isPm && config._a[3] < 12) {
            config._a[3] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[3] === 12) {
            config._a[3] = 0;
        }
        // return
        dateFromArray(config);
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            tempMoment,
            bestMoment,

            scoreToBeat = 99,
            i,
            currentDate,
            currentScore;

        while (config._f.length) {
            tempConfig = extend({}, config);
            tempConfig._f = config._f.pop();
            makeDateFromStringAndFormat(tempConfig);
            tempMoment = new Moment(tempConfig);

            if (tempMoment.isValid()) {
                bestMoment = tempMoment;
                break;
            }

            currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempMoment;
            }
        }

        extend(config, bestMoment);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i,
            string = config._i;
        if (isoRegex.exec(string)) {
            config._f = 'YYYY-MM-DDT';
            for (i = 0; i < 4; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (parseTokenTimezone.exec(string)) {
                config._f += " Z";
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._d = new Date(string);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromArray(config);
        } else {
            config._d = input instanceof Date ? new Date(+input) : new Date(input);
        }
    }


    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        return Math.ceil(moment(mom).add('d', daysToDayOfWeek).dayOfYear() / 7);
    }


    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || input === '') {
            return null;
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = extend({}, input);
            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang) {
        return makeMoment({
            _i : input,
            _f : format,
            _l : lang,
            _isUTC : false
        });
    };

    // creating with utc
    moment.utc = function (input, format, lang) {
        return makeMoment({
            _useUTC : true,
            _isUTC : true,
            _l : lang,
            _i : input,
            _f : format
        });
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var isDuration = moment.isDuration(input),
            isNumber = (typeof input === 'number'),
            duration = (isDuration ? input._data : (isNumber ? {} : input)),
            ret;

        if (isNumber) {
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        }

        ret = new Duration(duration);

        if (isDuration && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // humanizeDuration
    // This method is deprecated in favor of the new Duration object.  Please
    // see the moment.duration method.
    moment.humanizeDuration = function (num, type, withSuffix) {
        return moment.duration(num, type === true ? null : type).humanize(type === true ? true : withSuffix);
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var i;

        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(key, values);
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment;
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };


    /************************************
        Moment Prototype
    ************************************/


    moment.fn = Moment.prototype = {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d;
        },

        unix : function () {
            return Math.floor(+this._d / 1000);
        },

        toString : function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._d;
        },

        toJSON : function () {
            return moment.utc(this).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            if (this._isValid == null) {
                if (this._a) {
                    this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
                } else {
                    this._isValid = !isNaN(this._d.getTime());
                }
            }
            return !!this._isValid;
        },

        utc : function () {
            this._isUTC = true;
            return this;
        },

        local : function () {
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = this._isUTC ? moment(input).utc() : moment(input).local(),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            if (units) {
                // standardize on singular form
                units = units.replace(/s$/, '');
            }

            if (units === 'year' || units === 'month') {
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                output += ((this - moment(this).startOf('month')) - (that - moment(that).startOf('month'))) / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that) - zoneDiff;
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                    units === 'week' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                    diff;
            }
            return asFloat ? output : round(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            var diff = this.diff(moment().sod(), 'days', true),
                format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            var year = this.year();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },

        isDST : function () {
            return (this.zone() < moment([this.year()]).zone() ||
                this.zone() < moment([this.year(), 5]).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return input == null ? day :
                this.add({ d : input - day });
        },

        startOf: function (units) {
            units = units.replace(/s$/, '');
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.day(0);
            }

            return this;
        },

        endOf: function (units) {
            return this.startOf(units).add(units.replace(/s?$/, 's'), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) === +moment(input).startOf(units);
        },

        sod: function () {
            return this.clone().startOf('day');
        },

        eod: function () {
            // end of day = start of day plus 1 day, minus 1 millisecond
            return this.clone().endOf('day');
        },

        zone : function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset();
        },

        daysInMonth : function () {
            return moment.utc([this.year(), this.month() + 1, 0]).date();
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    };

    // helper for adding shortcuts
    function makeGetterAndSetter(name, key) {
        moment.fn[name] = moment.fn[name + 's'] = function (input) {
            var utc = this._isUTC ? 'UTC' : '';
            if (input != null) {
                this._d['set' + utc + key](input);
                return this;
            } else {
                return this._d['get' + utc + key]();
            }
        };
    }

    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeGetterAndSetter('year', 'FullYear');

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;

    /************************************
        Duration Prototype
    ************************************/


    moment.duration.fn = Duration.prototype = {
        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              this._months * 2592e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        lang : moment.fn.lang
    };

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });


    /************************************
        Exposing Moment
    ************************************/


    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    }
    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `moment` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        this['moment'] = moment;
    }
    /*global define:false */
    if (typeof define === "function" && define.amd) {
        define("moment", [], function () {
            return moment;
        });
    }
}).call(this);
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.carousel","ui.bootstrap.collapse","ui.bootstrap.dialog","ui.bootstrap.dropdownToggle","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.popover","ui.bootstrap.tabs","ui.bootstrap.tooltip","ui.bootstrap.transition"]);

angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/dialog/message.html","template/pagination/pagination.html","template/popover/popover.html","template/tabs/pane.html","template/tabs/tabs.html","template/tooltip/tooltip-popup.html"]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {
  
  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };
  
  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(this.groups.indexOf(group), 1);
    }
  };

}]);

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
angular.module('ui.bootstrap.accordion').directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
});

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
angular.module('ui.bootstrap.accordion').directive('accordionGroup', ['$parse', '$transition', '$timeout', function($parse, $transition, $timeout) {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope:{ heading:'@' },        // Create an isolated scope and interpolate the heading attribute onto this scope
    link: function(scope, element, attrs, accordionCtrl) {
      var getIsOpen, setIsOpen;

      accordionCtrl.addGroup(scope);

      scope.isOpen = false;
      
      if ( attrs.isOpen ) {
        getIsOpen = $parse(attrs.isOpen);
        setIsOpen = getIsOpen.assign;

        scope.$watch(
          function watchIsOpen() { return getIsOpen(scope.$parent); },
          function updateOpen(value) { scope.isOpen = value; }
        );
        
        scope.isOpen = getIsOpen ? getIsOpen(scope.$parent) : false;
      }

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
        if ( setIsOpen ) {
          setIsOpen(scope.$parent, value);
        }
      });

    }
  };
}]);

angular.module("ui.bootstrap.alert", []).directive('alert', function () {
  return {
    restrict:'EA',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope:{
      type:'=',
      close:'&'
    }
  };
});
/*
*
*    Angular Bootstrap Carousel 
*
*      The carousel has all of the function that the original Bootstrap carousel has, except for animations.
*      
*      For no interval set the interval to non-number, or milliseconds of desired interval
*      Template: <carousel interval="none"><slide>{{anything}}</slide></carousel>
*      To change the carousel's active slide set the active attribute to true
*      Template: <carousel interval="none"><slide active="someModel">{{anything}}</slide></carousel>
*/
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
.controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
  var self = this,
    slides = self.slides = [],
    currentIndex = -1,
    currentTimeout, isPlaying;
  self.currentSlide = null;

  /* direction: "prev" or "next" */
  self.select = function(nextSlide, direction) {
    var nextIndex = slides.indexOf(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > currentIndex ? "next" : "prev";
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      if ($scope.$currentTransition) {
        $scope.$currentTransition.cancel();
        //Timeout so ng-class in template has time to fix classes for finished slide
        $timeout(goNext);
      } else {
        goNext();
      }
    }
    function goNext() {
      //If we have a slide to transition from and we have a transition type and we're allowed, go
      if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) { 
        //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
        nextSlide.$element.addClass(direction);
        nextSlide.$element[0].offsetWidth = nextSlide.$element[0].offsetWidth; //force reflow

        //Set all other slides to stop doing their stuff for the new transition
        angular.forEach(slides, function(slide) {
          angular.extend(slide, {direction: '', entering: false, leaving: false, active: false});
        });
        angular.extend(nextSlide, {direction: direction, active: true, entering: true});
        angular.extend(self.currentSlide||{}, {direction: direction, leaving: true});

        $scope.$currentTransition = $transition(nextSlide.$element, {});
        //We have to create new pointers inside a closure since next & current will change
        (function(next,current) {
          $scope.$currentTransition.then(
            function(){ transitionDone(next, current); },
            function(){ transitionDone(next, current); }
          );
        }(nextSlide, self.currentSlide));
      } else {
        transitionDone(nextSlide, self.currentSlide);
      }
      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
    function transitionDone(next, current) {
      angular.extend(next, {direction: '', active: true, leaving: false, entering: false});
      angular.extend(current||{}, {direction: '', active: false, leaving: false, entering: false});
      $scope.$currentTransition = null;
    }
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (currentIndex + 1) % slides.length;
    return self.select(slides[newIndex], 'next');
  };

  $scope.prev = function() {
    var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    return self.select(slides[newIndex], 'prev');
  };

  $scope.$watch('interval', restartTimer);
  function restartTimer() {
    if (currentTimeout) {
      $timeout.cancel(currentTimeout);
    }
    function go() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval>=0) {
      currentTimeout = $timeout(go, interval);
    }
  }
  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    isPlaying = false;
    if (currentTimeout) {
      $timeout.cancel(currentTimeout);
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    }
  };
}])
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '='
    }
  };
}])
.directive('slide', [function() {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
      active: '='
    },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.collapse',['ui.bootstrap.transition'])

// The collapsible directive indicates a block of html that will expand and collapse
.directive('collapse', ['$transition', function($transition) {
  // CSS transitions don't work with height: auto, so we have to manually change the height to a
  // specific value and then once the animation completes, we can reset the height to auto.
  // Unfortunately if you do this while the CSS transitions are specified (i.e. in the CSS class
  // "collapse") then you trigger a change to height 0 in between.
  // The fix is to remove the "collapse" CSS class while changing the height back to auto - phew!
  var fixUpHeight = function(scope, element, height) {
    // We remove the collapse CSS class to prevent a transition when we change to height: auto
    element.removeClass('collapse');
    element.css({ height: height });
    // It appears that  reading offsetWidth makes the browser realise that we have changed the
    // height already :-/
    var x = element[0].offsetWidth;
    element.addClass('collapse');
  };

  return {
    link: function(scope, element, attrs) {

      var isCollapsed;
      var initialAnimSkip = true;
      scope.$watch(function (){ return element[0].scrollHeight; }, function (value) {
        //The listener is called when scollHeight changes
        //It actually does on 2 scenarios: 
        // 1. Parent is set to display none
        // 2. angular bindings inside are resolved
        //When we have a change of scrollHeight we are setting again the correct height if the group is opened
        if (element[0].scrollHeight !== 0) {
          if (!isCollapsed) {
            fixUpHeight(scope, element, element[0].scrollHeight + 'px');
          }
        }
      });
      
      scope.$watch(attrs.collapse, function(value) {
        if (value) {
          collapse();
        } else {
          expand();
        }
      });
      

      var currentTransition;
      var doTransition = function(change) {
        if ( currentTransition ) {
          currentTransition.cancel();
        }
        currentTransition = $transition(element,change);
        currentTransition.then(
          function() { currentTransition = undefined; },
          function() { currentTransition = undefined; }
        );
        return currentTransition;
      };

      var expand = function() {
        if (initialAnimSkip) {
          initialAnimSkip = false;
          if ( !isCollapsed ) {
            fixUpHeight(scope, element, 'auto');
          }
        } else {
          doTransition({ height : element[0].scrollHeight + 'px' })
          .then(function() {
            // This check ensures that we don't accidentally update the height if the user has closed
            // the group while the animation was still running
            if ( !isCollapsed ) {
              fixUpHeight(scope, element, 'auto');
            }
          });
        }
        isCollapsed = false;
      };
      
      var collapse = function() {
        isCollapsed = true;
        if (initialAnimSkip) {
          initialAnimSkip = false;
          fixUpHeight(scope, element, 0);
        } else {
          fixUpHeight(scope, element, element[0].scrollHeight + 'px');
          doTransition({'height':'0'});
        }
      };
    }
  };
}]);

// The `$dialogProvider` can be used to configure global defaults for your
// `$dialog` service.
var dialogModule = angular.module('ui.bootstrap.dialog', ['ui.bootstrap.transition']);

dialogModule.controller('MessageBoxController', ['$scope', 'dialog', 'model', function($scope, dialog, model){
  $scope.title = model.title;
  $scope.message = model.message;
  $scope.buttons = model.buttons;
  $scope.close = function(res){
    dialog.close(res);
  };
}]);

dialogModule.provider("$dialog", function(){

  // The default options for all dialogs.
	var defaults = {
		backdrop: true,
		modalClass: 'modal',
		backdropClass: 'modal-backdrop',
    transitionClass: 'fade',
    triggerClass: 'in',
		resolve:{},
		backdropFade: false,
		modalFade:false,
		keyboard: true, // close with esc key
		backdropClick: true // only in conjunction with backdrop=true
    /* other options: template, templateUrl, controller */
	};

	var globalOptions = {};

  // The `options({})` allows global configuration of all dialogs in the application.
  //
  //      var app = angular.module('App', ['ui.bootstrap.dialog'], function($dialogProvider){
  //        // don't close dialog when backdrop is clicked by default
  //        $dialogProvider.options({backdropClick: false});
  //      });
	this.options = function(value){
		globalOptions = value;
	};

  // Returns the actual `$dialog` service that is injected in controllers
	this.$get = ["$http", "$document", "$compile", "$rootScope", "$controller", "$templateCache", "$q", "$transition",
  function ($http, $document, $compile, $rootScope, $controller, $templateCache, $q, $transition) {

		var body = $document.find('body');

		function createElement(clazz) {
			var el = angular.element("<div>");
			el.addClass(clazz);
			return el;
		}

    // The `Dialog` class represents a modal dialog. The dialog class can be invoked by providing an options object
    // containing at lest template or templateUrl and controller:
    // 
    //     var d = new Dialog({templateUrl: 'foo.html', controller: 'BarController'});
    // 
    // Dialogs can also be created using templateUrl and controller as distinct arguments:
    //
    //     var d = new Dialog('path/to/dialog.html', MyDialogController);
		function Dialog(opts) {

      var self = this, options = this.options = angular.extend({}, defaults, globalOptions, opts);

      this.backdropEl = createElement(options.backdropClass);
      if(options.backdropFade){
        this.backdropEl.addClass(options.transitionClass);
        this.backdropEl.removeClass(options.triggerClass);
      }

      this.modalEl = createElement(options.modalClass);
      if(options.modalFade){
        this.modalEl.addClass(options.transitionClass);
        this.modalEl.removeClass(options.triggerClass);
      }

      this.handledEscapeKey = function(e) {
        if (e.which === 27) {
          self.close();
          e.preventDefault();
          self.$scope.$apply();
        }
      };

      this.handleBackDropClick = function(e) {
        self.close();
        e.preventDefault();
        self.$scope.$apply();
      };
    }

    // The `isOpen()` method returns wether the dialog is currently visible.
    Dialog.prototype.isOpen = function(){
      return this._open;
    };

    // The `open(templateUrl, controller)` method opens the dialog.
    // Use the `templateUrl` and `controller` arguments if specifying them at dialog creation time is not desired.
    Dialog.prototype.open = function(templateUrl, controller){
      var self = this, options = this.options;

      if(templateUrl){
        options.templateUrl = templateUrl;
      }
      if(controller){
        options.controller = controller;
      }
      
      if(!(options.template || options.templateUrl)) {
        throw new Error('Dialog.open expected template or templateUrl, neither found. Use options or open method to specify them.');
      }

      this._loadResolves().then(function(locals) {
        var $scope = locals.$scope = self.$scope = $rootScope.$new();

        self.modalEl.html(locals.$template);

        if (self.options.controller) {
          var ctrl = $controller(self.options.controller, locals);
          self.modalEl.contents().data('ngControllerController', ctrl);
        }

        $compile(self.modalEl.contents())($scope);
        self._addElementsToDom();

        // trigger tranisitions
        setTimeout(function(){
          if(self.options.modalFade){ self.modalEl.addClass(self.options.triggerClass); }
          if(self.options.backdropFade){ self.backdropEl.addClass(self.options.triggerClass); }
        });

        self._bindEvents();
      });

      this.deferred = $q.defer();
      return this.deferred.promise;
    };

    // closes the dialog and resolves the promise returned by the `open` method with the specified result.
    Dialog.prototype.close = function(result){
      var self = this;
      var fadingElements = this._getFadingElements();

      if(fadingElements.length > 0){
        for (var i = fadingElements.length - 1; i >= 0; i--) {
          $transition(fadingElements[i], removeTriggerClass).then(onCloseComplete);
        }
        return;
      }

      this._onCloseComplete(result);

      function removeTriggerClass(el){
        el.removeClass(self.options.triggerClass);
      }

      function onCloseComplete(){
        if(self._open){
          self._onCloseComplete(result);
        }
      }
    };

    Dialog.prototype._getFadingElements = function(){
      var elements = [];
      if(this.options.modalFade){
        elements.push(this.modalEl);
      }
      if(this.options.backdropFade){
        elements.push(this.backdropEl);
      }

      return elements;
    };

    Dialog.prototype._bindEvents = function() {
      if(this.options.keyboard){ body.bind('keydown', this.handledEscapeKey); }
      if(this.options.backdrop && this.options.backdropClick){ this.backdropEl.bind('click', this.handleBackDropClick); }
    };

    Dialog.prototype._unbindEvents = function() {
      if(this.options.keyboard){ body.unbind('keydown', this.handledEscapeKey); }
      if(this.options.backdrop && this.options.backdropClick){ this.backdropEl.unbind('click', this.handleBackDropClick); }
    };

    Dialog.prototype._onCloseComplete = function(result) {
      this._removeElementsFromDom();
      this._unbindEvents();

      this.deferred.resolve(result);
    };

    Dialog.prototype._addElementsToDom = function(){
      body.append(this.modalEl);
      if(this.options.backdrop) { body.append(this.backdropEl); }
      this._open = true;
    };

    Dialog.prototype._removeElementsFromDom = function(){
      this.modalEl.remove();
      if(this.options.backdrop) { this.backdropEl.remove(); }
      this._open = false;
    };

    // Loads all `options.resolve` members to be used as locals for the controller associated with the dialog.
    Dialog.prototype._loadResolves = function(){
      var values = [], keys = [], templatePromise, self = this;

      if (this.options.template) {
        templatePromise = $q.when(this.options.template);
      } else if (this.options.templateUrl) {
        templatePromise = $http.get(this.options.templateUrl, {cache:$templateCache})
        .then(function(response) { return response.data; });
      }

      angular.forEach(this.options.resolve || [], function(value, key) {
        keys.push(key);
        values.push(value);
      });

      keys.push('$template');
      values.push(templatePromise);

      return $q.all(values).then(function(values) {
        var locals = {};
        angular.forEach(values, function(value, index) {
          locals[keys[index]] = value;
        });
        locals.dialog = self;
        return locals;
      });
    };

    // The actual `$dialog` service that is injected in controllers.
    return {
      // Creates a new `Dialog` with the specified options.
      dialog: function(opts){
        return new Dialog(opts);
      },
      // creates a new `Dialog` tied to the default message box template and controller.
      //
      // Arguments `title` and `message` are rendered in the modal header and body sections respectively.
      // The `buttons` array holds an object with the following members for each button to include in the
      // modal footer section:
      //
      // * `result`: the result to pass to the `close` method of the dialog when the button is clicked
      // * `label`: the label of the button
      // * `cssClass`: additional css class(es) to apply to the button for styling
      messageBox: function(title, message, buttons){
        return new Dialog({templateUrl: 'template/dialog/message.html', controller: 'MessageBoxController', resolve: {model: {
          title: title,
          message: message,
          buttons: buttons
        }}});
      }
    };
  }];
});

/*
 * dropdownToggle - Provides dropdown menu functionality in place of bootstrap js
 * @restrict class or attribute
 * @example:
   <li class="dropdown">
     <a class="dropdown-toggle">My Dropdown Menu</a>
     <ul class="dropdown-menu">
       <li ng-repeat="choice in dropChoices">
         <a ng-href="{{choice.href}}">{{choice.text}}</a>
       </li>
     </ul>
   </li>
 */

angular.module('ui.bootstrap.dropdownToggle', []).directive('dropdownToggle', 
['$document', '$location', '$window', function ($document, $location, $window) {
  var openElement = null, close;
  return {
    restrict: 'CA',
    link: function(scope, element, attrs) {
      scope.$watch(function dropdownTogglePathWatch(){return $location.path();}, function dropdownTogglePathWatchAction() {
        if (close) { close(); }
      });

      element.parent().bind('click', function(event) {
        if (close) { close(); }
      });

      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var iWasOpen = false;

        if (openElement) {
          iWasOpen = openElement === element;
          close();
        }

        if (!iWasOpen){
          element.parent().addClass('open');
          openElement = element;

          close = function (event) {
            if (event) {
              event.preventDefault();
              event.stopPropagation();
            }
            $document.unbind('click', close);
            element.parent().removeClass('open');
            close = null;
            openElement = null;
          };

          $document.bind('click', close);
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.modal', []).directive('modal', ['$parse',function($parse) {
  var backdropEl;
  var body = angular.element(document.getElementsByTagName('body')[0]);
  var defaultOpts = {
    backdrop: true,
    escape: true
  };
  return {
    restrict: 'EA',
    link: function(scope, elm, attrs) {
      var opts = angular.extend(defaultOpts, scope.$eval(attrs.uiOptions || attrs.bsOptions || attrs.options));
      var shownExpr = attrs.modal || attrs.show;
      var setClosed;

      if (attrs.close) {
        setClosed = function() {
          scope.$apply(attrs.close);
        };
      } else {
        setClosed = function() {
          scope.$apply(function() {
            $parse(shownExpr).assign(scope, false);
          });
        };
      }
      elm.addClass('modal');

      if (opts.backdrop && !backdropEl) {
        backdropEl = angular.element('<div class="modal-backdrop"></div>');
        backdropEl.css('display','none');
        body.append(backdropEl);
      }
      
      function setShown(shown) {
        scope.$apply(function() {
          model.assign(scope, shown);
        });
      }

      function escapeClose(evt) {
        if (evt.which === 27) { setClosed(); }
      }
      function clickClose() { 
        setClosed();
      }
      
      function close() {
        if (opts.escape) { body.unbind('keyup', escapeClose); }
        if (opts.backdrop) {
          backdropEl.css('display', 'none').removeClass('in');
          backdropEl.unbind('click', clickClose);
        }
        elm.css('display', 'none').removeClass('in');
        body.removeClass('modal-open');
      }
      function open() {
        if (opts.escape) { body.bind('keyup', escapeClose); }
        if (opts.backdrop) {
          backdropEl.css('display', 'block').addClass('in');
          if(opts.backdrop != "static") {
            backdropEl.bind('click', clickClose);
          }
        }
        elm.css('display', 'block').addClass('in');
        body.addClass('modal-open');
      }

      scope.$watch(shownExpr, function(isShown, oldShown) {
        if (isShown) {
          open();
        } else {
          close();
        }
      });
    }
  };
}]);

angular.module('ui.bootstrap.pagination', [])

.directive('pagination', function() {
  return {
    restrict: 'EA',
    scope: {
      numPages: '=',
      currentPage: '=',
      maxSize: '=',
      onSelectPage: '&',
      nextText: '@',
      previousText: '@'
    },
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope) {
      scope.$watch('numPages + currentPage + maxSize', function() {
        scope.pages = [];
        
        //set the default maxSize to numPages
        var maxSize = ( scope.maxSize && scope.maxSize < scope.numPages ) ? scope.maxSize : scope.numPages;
        var startPage = scope.currentPage - Math.floor(maxSize/2);
        
        //adjust the startPage within boundary
        if(startPage < 1) {
            startPage = 1;
        }
        if ((startPage + maxSize - 1) > scope.numPages) {
            startPage = startPage - ((startPage + maxSize - 1) - scope.numPages );
        }

        for(var i=0; i < maxSize && i < scope.numPages ;i++) {
          scope.pages.push(startPage + i);
        }
        if ( scope.currentPage > scope.numPages ) {
          scope.selectPage(scope.numPages);
        }
      });
      scope.noPrevious = function() {
        return scope.currentPage === 1;
      };
      scope.noNext = function() {
        return scope.currentPage === scope.numPages;
      };
      scope.isActive = function(page) {
        return scope.currentPage === page;
      };

      scope.selectPage = function(page) {
        if ( ! scope.isActive(page) ) {
          scope.currentPage = page;
          scope.onSelectPage({ page: page });
        }
      };

      scope.selectPrevious = function() {
        if ( !scope.noPrevious() ) {
          scope.selectPage(scope.currentPage-1);
        }
      };
      scope.selectNext = function() {
        if ( !scope.noNext() ) {
          scope.selectPage(scope.currentPage+1);
        }
      };
    }
  };
});
/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [] )
.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { popoverTitle: '@', popoverContent: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})
.directive( 'popover', [ '$compile', '$timeout', '$parse', function ( $compile, $timeout, $parse ) {
  
  var template = 
    '<popover-popup '+
      'popover-title="{{tt_title}}" '+
      'popover-content="{{tt_popover}}" '+
      'placement="{{tt_placement}}" '+
      'animation="tt_animation()" '+
      'is-open="tt_isOpen"'+
      '>'+
    '</popover-popup>';
  
  return {
    scope: true,
    link: function ( scope, element, attr ) {
      var popover = $compile( template )( scope ), 
          transitionTimeout;

      attr.$observe( 'popover', function ( val ) {
        scope.tt_popover = val;
      });

      attr.$observe( 'popoverTitle', function ( val ) {
        scope.tt_title = val;
      });

      attr.$observe( 'popoverPlacement', function ( val ) {
        // If no placement was provided, default to 'top'.
        scope.tt_placement = val || 'top';
      });

      attr.$observe( 'popoverAnimation', function ( val ) {
        scope.tt_animation = $parse( val );
      });

      // By default, the popover is not open.
      scope.tt_isOpen = false;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the popover popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) {
          $timeout.cancel( transitionTimeout );
        }
        
        // Set the initial positioning.
        popover.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( popover );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the popover so we can center it.
        ttWidth = popover.prop( 'offsetWidth' );
        ttHeight = popover.prop( 'offsetHeight' );
        
        // Calculate the popover's top and left coordinates to center it with
        // this directive.
        switch ( scope.tt_placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        popover.css( ttPosition );
          
        // And show the popover.
        scope.tt_isOpen = true;
      }
      
      // Hide the popover popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //popover.removeClass( 'in' );
        scope.tt_isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.tt_animation ) && scope.tt_animation() ) {
          transitionTimeout = $timeout( function () { popover.remove(); }, 500 );
        } else {
          popover.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'click', function() {
        if(scope.tt_isOpen){
            scope.$apply( hide );
        } else {
            scope.$apply( show );
        }

      });
    }
  };
}]);


angular.module('ui.bootstrap.tabs', [])
.controller('TabsController', ['$scope', '$element', function($scope, $element) {
  var panes = $scope.panes = [];

  this.select = $scope.select = function selectPane(pane) {
    angular.forEach(panes, function(pane) {
      pane.selected = false;
    });
    pane.selected = true;
  };

  this.addPane = function addPane(pane) {
    if (!panes.length) {
      $scope.select(pane);
    }
    panes.push(pane);
  };

  this.removePane = function removePane(pane) { 
    var index = panes.indexOf(pane);
    panes.splice(index, 1);
    //Select a new pane if removed pane was selected 
    if (pane.selected && panes.length > 0) {
      $scope.select(panes[index < panes.length ? index : index-1]);
    }
  };
}])
.directive('tabs', function() {
  return {
    restrict: 'EA',
    transclude: true,
    scope: {},
    controller: 'TabsController',
    templateUrl: 'template/tabs/tabs.html',
    replace: true
  };
})
.directive('pane', ['$parse', function($parse) {
  return {
    require: '^tabs',
    restrict: 'EA',
    transclude: true,
    scope:{
      heading:'@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      var getSelected, setSelected;
      scope.selected = false;
      if (attrs.active) {
        getSelected = $parse(attrs.active);
        setSelected = getSelected.assign;
        scope.$watch(
          function watchSelected() {return getSelected(scope.$parent);},
          function updateSelected(value) {scope.selected = value;}
        );
        scope.selected = getSelected ? getSelected(scope.$parent) : false;
      }
      scope.$watch('selected', function(selected) {
        if(selected) {
          tabsCtrl.select(scope);
        }
        if(setSelected) {
          setSelected(scope.$parent, selected);
        }
      });

      tabsCtrl.addPane(scope);
      scope.$on('$destroy', function() {
        tabsCtrl.removePane(scope);
      });
    },
    templateUrl: 'template/tabs/pane.html',
    replace: true
  };
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegatation.
 */
angular.module( 'ui.bootstrap.tooltip', [] )
.directive( 'tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { tooltipTitle: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})
.directive( 'tooltip', [ '$compile', '$timeout', '$parse', function ( $compile, $timeout, $parse ) {
  
  var template = 
    '<tooltip-popup '+
      'tooltip-title="{{tt_tooltip}}" '+
      'placement="{{tt_placement}}" '+
      'animation="tt_animation()" '+
      'is-open="tt_isOpen"'+
      '>'+
    '</tooltip-popup>';
  
  return {
    scope: true,
    link: function ( scope, element, attr ) {
      var tooltip = $compile( template )( scope ), 
          transitionTimeout;

      attr.$observe( 'tooltip', function ( val ) {
        scope.tt_tooltip = val;
      });

      attr.$observe( 'tooltipPlacement', function ( val ) {
        // If no placement was provided, default to 'top'.
        scope.tt_placement = val || 'top';
      });

      attr.$observe( 'tooltipAnimation', function ( val ) {
        scope.tt_animation = $parse( val );
      });

      // By default, the tooltip is not open.
      scope.tt_isOpen = false;
      
      // Calculate the current position and size of the directive element.
      function getPosition() {
        return {
          width: element.prop( 'offsetWidth' ),
          height: element.prop( 'offsetHeight' ),
          top: element.prop( 'offsetTop' ),
          left: element.prop( 'offsetLeft' )
        };
      }
      
      // Show the tooltip popup element.
      function show() {
        var position,
            ttWidth,
            ttHeight,
            ttPosition;
          
        // If there is a pending remove transition, we must cancel it, lest the
        // toolip be mysteriously removed.
        if ( transitionTimeout ) {
          $timeout.cancel( transitionTimeout );
        }
        
        // Set the initial positioning.
        tooltip.css({ top: 0, left: 0, display: 'block' });
        
        // Now we add it to the DOM because need some info about it. But it's not 
        // visible yet anyway.
        element.after( tooltip );
        
        // Get the position of the directive element.
        position = getPosition();
        
        // Get the height and width of the tooltip so we can center it.
        ttWidth = tooltip.prop( 'offsetWidth' );
        ttHeight = tooltip.prop( 'offsetHeight' );
        
        // Calculate the tooltip's top and left coordinates to center it with
        // this directive.
        switch ( scope.tt_placement ) {
          case 'right':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left + position.width) + 'px'
            };
            break;
          case 'bottom':
            ttPosition = {
              top: (position.top + position.height) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
          case 'left':
            ttPosition = {
              top: (position.top + position.height / 2 - ttHeight / 2) + 'px',
              left: (position.left - ttWidth) + 'px'
            };
            break;
          default:
            ttPosition = {
              top: (position.top - ttHeight) + 'px',
              left: (position.left + position.width / 2 - ttWidth / 2) + 'px'
            };
            break;
        }
        
        // Now set the calculated positioning.
        tooltip.css( ttPosition );
          
        // And show the tooltip.
        scope.tt_isOpen = true;
      }
      
      // Hide the tooltip popup element.
      function hide() {
        // First things first: we don't show it anymore.
        //tooltip.removeClass( 'in' );
        scope.tt_isOpen = false;
        
        // And now we remove it from the DOM. However, if we have animation, we 
        // need to wait for it to expire beforehand.
        // FIXME: this is a placeholder for a port of the transitions library.
        if ( angular.isDefined( scope.tt_animation ) && scope.tt_animation() ) {
          transitionTimeout = $timeout( function () { tooltip.remove(); }, 500 );
        } else {
          tooltip.remove();
        }
      }
      
      // Register the event listeners.
      element.bind( 'mouseenter', function() {
        scope.$apply( show );
      });
      element.bind( 'mouseleave', function() {
        scope.$apply( hide );
      });
    }
  };
}]);


angular.module('ui.bootstrap.transition', [])

/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? "animationEndEventName" : "transitionEndEventName"];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'msTransition': 'MSAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"accordion-group\">" +
    "  <div class=\"accordion-heading\" ><a class=\"accordion-toggle\" ng-click=\"isOpen = !isOpen\">{{heading}}</a></div>" +
    "  <div class=\"accordion-body\" collapse=\"!isOpen\">" +
    "    <div class=\"accordion-inner\" ng-transclude></div>  </div>" +
    "</div>");
}]);

angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/accordion/accordion.html",
    "<div class=\"accordion\" ng-transclude></div>");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/alert/alert.html",
    "<div class='alert' ng-class='type && \"alert-\" + type'>" +
    "    <button type='button' class='close' ng-click='close()'>&times;</button>" +
    "    <div ng-transclude></div>" +
    "</div>");
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">" +
    "    <div class=\"carousel-inner\" ng-transclude></div>" +
    "    <a ng-click=\"prev()\" class=\"carousel-control left\">&lsaquo;</a>" +
    "    <a ng-click=\"next()\" class=\"carousel-control right\">&rsaquo;</a>" +
    "</div>" +
    "");
}]);

angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/carousel/slide.html",
    "<div ng-class=\"{" +
    "    'active': leaving || (active && !entering)," +
    "    'prev': (next || active) && direction=='prev'," +
    "    'next': (next || active) && direction=='next'," +
    "    'right': direction=='prev'," +
    "    'left': direction=='next'" +
    "  }\" class=\"item\" ng-transclude></div>" +
    "");
}]);

angular.module("template/dialog/message.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/dialog/message.html",
    "<div class=\"modal-header\">" +
    "	<h1>{{ title }}</h1>" +
    "</div>" +
    "<div class=\"modal-body\">" +
    "	<p>{{ message }}</p>" +
    "</div>" +
    "<div class=\"modal-footer\">" +
    "	<button ng-repeat=\"btn in buttons\" ng-click=\"close(btn.result)\" class=btn ng-class=\"btn.cssClass\">{{ btn.label }}</button>" +
    "</div>" +
    "");
}]);

angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/pagination/pagination.html",
    "<div class=\"pagination\"><ul>" +
    "  <li ng-class=\"{disabled: noPrevious()}\"><a ng-click=\"selectPrevious()\">{{previousText || 'Previous'}}</a></li>" +
    "  <li ng-repeat=\"page in pages\" ng-class=\"{active: isActive(page)}\"><a ng-click=\"selectPage(page)\">{{page}}</a></li>" +
    "  <li ng-class=\"{disabled: noNext()}\"><a ng-click=\"selectNext()\">{{nextText || 'Next'}}</a></li>" +
    "  </ul>" +
    "</div>" +
    "");
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">" +
    "  <div class=\"arrow\"></div>" +
    "" +
    "  <div class=\"popover-inner\">" +
    "      <h3 class=\"popover-title\" ng-bind=\"popoverTitle\" ng-show=\"popoverTitle\"></h3>" +
    "      <div class=\"popover-content\" ng-bind=\"popoverContent\"></div>" +
    "  </div>" +
    "</div>" +
    "");
}]);

angular.module("template/tabs/pane.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tabs/pane.html",
    "<div class=\"tab-pane\" ng-class=\"{active: selected}\" ng-show=\"selected\" ng-transclude></div>" +
    "");
}]);

angular.module("template/tabs/tabs.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tabs/tabs.html",
    "<div class=\"tabbable\">" +
    "  <ul class=\"nav nav-tabs\">" +
    "    <li ng-repeat=\"pane in panes\" ng-class=\"{active:pane.selected}\">" +
    "      <a href=\"\" ng-click=\"select(pane)\">{{pane.heading}}</a>" +
    "    </li>" +
    "  </ul>" +
    "  <div class=\"tab-content\" ng-transclude></div>" +
    "</div>" +
    "");
}]);

angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache){
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">" +
    "  <div class=\"tooltip-arrow\"></div>" +
    "  <div class=\"tooltip-inner\" ng-bind=\"tooltipTitle\"></div>" +
    "</div>" +
    "");
}]);
var difference, entryMap,
  __slice = [].slice;

entryMap = {
  escape: {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  }
};

entryMap.unescape = _.invert(entryMap.escape);

difference = _.difference;

_.mixin({
  difference: function() {
    var array, deep, others, rest, _i;
    array = arguments[0], others = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), deep = arguments[_i++];
    if (!deep || _(deep).isArray()) {
      return difference.apply(_, [array].concat(others).concat([deep]));
    }
    rest = _(others).flatten(true);
    return _.filter(array, function(value) {
      return !_(rest).some(function(part) {
        return _(part).isEqual(value);
      });
    });
  },
  escape: function(string, ignoreChar) {
    var keys;
    if (ignoreChar == null) {
      ignoreChar = [];
    }
    if (string == null) {
      return '';
    }
    keys = _(entryMap.escape).keys();
    _(ignoreChar).each(function(char) {
      return keys = _(keys).arrayDel(char);
    });
    return ('' + string).replace(RegExp("[" + (keys.join('')) + "]", "g"), function(match) {
      return entryMap.escape[match];
    });
  },
  unescape: function(string, ignoreChar) {
    var keys;
    if (ignoreChar == null) {
      ignoreChar = [];
    }
    if (string == null) {
      return '';
    }
    keys = _(entryMap.escape).keys();
    _(ignoreChar).each(function(char) {
      return keys = _(keys).arrayDel(entryMap.escape[char]);
    });
    return ('' + string).replace(RegExp("[" + (keys.join('')) + "]", "g"), function(match) {
      return entryMap.unescape[match];
    });
  },
  property: _.result,
  result: function(object, property, args, context) {
    if (!arguments.length) {
      return;
    }
    if (arguments.length === 1) {
      if (_(object).isFunction()) {
        object();
      } else {
        object;
      }
    }
    if (arguments.length === 2) {
      return _.property(object, property);
    } else if (_(property).isFunction()) {
      return property.apply(context || object, args);
    } else {
      return _.resultWithArgs(object, property, args, context);
    }
  },
  "in": function(elem, obj) {
    var _elem, _obj;
    if (elem == null) {
      return false;
    }
    if (obj == null) {
      return false;
    }
    _elem = _(elem);
    _obj = _(_(obj).result());
    if ($.isPlainObject(obj)) {
      return obj[elem] != null;
    } else if (_obj.isArray() || _obj.isString()) {
      return !!~_obj.indexOf(elem);
    } else {
      return false;
    }
  },
  pack: function(obj) {
    var result;
    if (!_(obj).isObject()) {
      return obj;
    }
    if (!_(obj).every(function(value) {
      return _(value).isArray();
    })) {
      return obj;
    }
    result = [];
    _(obj).forEach(function(vals, key) {
      return _(vals).forEach(function(value, index) {
        result[index] || (result[index] = _(obj).isArray() ? [] : {});
        return result[index][key] = value;
      });
    });
    return result;
  },
  deleteWhere: function(coll, filter, destructive) {
    if (_(filter).isArray()) {
      _(filter).forEach(function(f) {
        return coll = _(coll).deleteWhere(f, destructive);
      });
    } else {
      _(coll).chain().where(filter).forEach(function(atom) {
        return coll = _(coll).arrayDel(atom, destructive);
      });
    }
    return coll;
  },
  split: function(obj, spliter) {
    var cloneThis, memo;
    if (_.isString(obj)) {
      return obj.split(spliter);
    }
    if (!_.isArray(obj)) {
      return [];
    }
    memo = [];
    cloneThis = _(obj).clone();
    cloneThis.push(spliter);
    return _(cloneThis).chain().map(function(elem) {
      var clone, _ref;
      if (_(elem).isEqual(spliter)) {
        _ref = [memo, []], clone = _ref[0], memo = _ref[1];
        return clone;
      } else {
        memo.push(elem);
      }
    }).filter(function(elem) {
      return (elem != null) && elem.length;
    }).value();
  },
  sum: function(array) {
    var _array;
    _array = _(array);
    if (!_array.isArray()) {
      return;
    }
    return _array.reduce(function(result, number) {
      return result + number;
    });
  },
  arrayDel: function(array, obj, destructive) {
    var index, newArray;
    index = _(array).indexOf(obj);
    if (!~index) {
      return;
    }
    newArray = destructive ? array : _.clone(array);
    newArray.splice(index, 1);
    return newArray;
  },
  isDigit: function(obj) {
    return /^\d+$/.test(obj.toString());
  },
  hasProp: function(obj, attrList, some) {
    return _(attrList).chain().map(function(attr) {
      return _(obj).has(attr) && (obj[attr] != null);
    }).resultWithArgs((some ? "some" : "every"), [_.identity]).value();
  },
  swap: function(obj, propertys) {
    var first, last, _ref;
    obj = _.clone(obj);
    first = propertys[0], last = propertys[1];
    _ref = [obj[last], obj[first]], obj[first] = _ref[0], obj[last] = _ref[1];
    return obj;
  },
  /*
    _(obj).chain()
      .batch("isFunction", "isString") // [true, false]
      .some()
  */

  batch: function() {
    var methods, obj;
    obj = arguments[0], methods = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (_(methods).isEmpty()) {
      return obj;
    }
    return _(methods).map(function(method) {
      return _(obj).result(method);
    });
  },
  /*
    _.batchIf([
      function (name, value) { return this[name] == null },
      function (name, value) { return this[name] === value }
    ], {args: ["a", 1], context: {a: 2}}) // => false
  */

  batchIf: function(exprs, options) {
    var args, context;
    if (options == null) {
      options = {};
    }
    args = options.args, context = options.context;
    return _(exprs).chain().map(function(expr) {
      if (_(expr).isFunction()) {
        return expr.apply(context, args);
      } else {
        return expr;
      }
    }).every(function(result) {
      return !!result;
    }).value();
  },
  /*
    handlerMap = {
      "true": function() {
        alert("a")
        return "b"
      },
      "b": "b"
    }
  
    obj = {
      "b": function(m) {
        console.log(m)
        return "c"
      },
      "c": 3
    }
  
    _([1, 0]).chain()
      .every()
      .disjunctor(handlerMap) // alert "a"
      .disjunctor(handlerMap, {context: obj, args: ["b"]}) // console "b"
      .disjunctor(handlerMap, {context: obj})
      .value() // => 3
  */

  disjunctor: function(signal, handlerMap, options) {
    var args, context, handler;
    if (options == null) {
      options = {};
    }
    if (!(handler = handlerMap[signal])) {
      return;
    }
    context = options.context, args = options.args;
    return _(context).result(handler, args);
  },
  /*
    get obj result
      _.resultWithArgs obj, undefined, [args...], context
    get obj[fn] result
      _.resultWithArgs obj, fn, [args...], context
  */

  resultWithArgs: function(obj, property, args, context) {
    var value;
    if (obj == null) {
      return;
    }
    value = property != null ? obj[property] : obj;
    if (property != null) {
      if (context == null) {
        context = obj;
      }
    }
    if (!_.isFunction(value)) {
      return value;
    }
    return value.apply(context, args);
  }
});
var funcHolder,
  __slice = [].slice;

funcHolder = function(originArgs) {
  return function() {
    var args, callback, _i;
    args = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), callback = arguments[_i++];
    return callback.apply(null, [null].concat(__slice.call(originArgs)));
  };
};

_.mixin({
  waterfall: function(fn) {
    var cacheArgs, callback, calls, metaMethods, stacks, start, thenArgs;
    stacks = {};
    calls = {};
    metaMethods = ["then", "done", "fail", "anyway"];
    thenArgs = [];
    cacheArgs = function(args) {
      args = _(args).toArray();
      if (args.length === 0) {
        return thenArgs.push(void 0);
      } else if (args.length === 1) {
        return thenArgs.push(args[0]);
      } else {
        return thenArgs.push(args);
      }
    };
    start = function() {
      cacheArgs(arguments);
      return fn.apply(null, __slice.call(arguments).concat([callback]));
    };
    callback = function() {
      var args, err, thenFn;
      err = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (err) {
        calls.fail(err);
        calls.anyway(err);
        return;
      }
      if (stacks.then.length) {
        cacheArgs(args);
        thenFn = stacks.then.shift();
        if (typeof thenFn === "function") {
          thenFn.apply(null, __slice.call(args).concat([callback]));
        }
        return;
      }
      calls.done.apply(calls, thenArgs);
      return calls.anyway.apply(calls, [null].concat(__slice.call(thenArgs)));
    };
    _(metaMethods).forEach(function(method) {
      var _ref;
      if ((_ref = stacks[method]) == null) {
        stacks[method] = [];
      }
      start[method] = function(callback) {
        if (_(callback).isFunction()) {
          stacks[method].push(callback);
        } else if (callback) {
          stacks[method].push(funcHolder(_(arguments).toArray()));
        }
        return this;
      };
      return calls[method] = function() {
        var stack, _results;
        stack = stacks[method];
        if (stack == null) {
          return;
        }
        _results = [];
        while (stack.length) {
          fn = stack.shift();
          if (method === "then") {
            _results.push(typeof fn === "function" ? fn.apply(null, __slice.call(arguments).concat([callback])) : void 0);
          } else {
            _results.push(typeof fn === "function" ? fn.apply(null, arguments) : void 0);
          }
        }
        return _results;
      };
    });
    return start;
  }
});
