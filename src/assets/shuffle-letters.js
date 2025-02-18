(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f() } else if (typeof define === "function" && define.amd) { define([], f) } else {
        var g;
        if (typeof window !== "undefined") { g = window } else if (typeof global !== "undefined") { g = global } else if (typeof self !== "undefined") { g = self } else { g = this }
        g.shuffleLetters = f()
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f }
                var l = n[o] = { exports: {} };
                t[o][0].call(l.exports, function(e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function(require, module, exports) { module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true }; }, { "core-js/library/fn/array/from": 4 }],
        2: [function(require, module, exports) { module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true }; }, { "core-js/library/fn/object/assign": 5 }],
        3: [function(require, module, exports) { module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true }; }, { "core-js/library/fn/promise": 6 }],
        4: [function(require, module, exports) {
            require('../../modules/es6.string.iterator');
            require('../../modules/es6.array.from');
            module.exports = require('../../modules/_core').Array.from;
        }, { "../../modules/_core": 14, "../../modules/es6.array.from": 71, "../../modules/es6.string.iterator": 76 }],
        5: [function(require, module, exports) {
            require('../../modules/es6.object.assign');
            module.exports = require('../../modules/_core').Object.assign;
        }, { "../../modules/_core": 14, "../../modules/es6.object.assign": 73 }],
        6: [function(require, module, exports) {
            require('../modules/es6.object.to-string');
            require('../modules/es6.string.iterator');
            require('../modules/web.dom.iterable');
            require('../modules/es6.promise');
            module.exports = require('../modules/_core').Promise;
        }, { "../modules/_core": 14, "../modules/es6.object.to-string": 74, "../modules/es6.promise": 75, "../modules/es6.string.iterator": 76, "../modules/web.dom.iterable": 77 }],
        7: [function(require, module, exports) { module.exports = function(it) { if (typeof it != 'function') throw TypeError(it + ' is not a function!'); return it; }; }, {}],
        8: [function(require, module, exports) { module.exports = function() {}; }, {}],
        9: [function(require, module, exports) { module.exports = function(it, Constructor, name, forbiddenField) { if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) { throw TypeError(name + ': incorrect invocation!'); } return it; }; }, {}],
        10: [function(require, module, exports) {
            var isObject = require('./_is-object');
            module.exports = function(it) { if (!isObject(it)) throw TypeError(it + ' is not an object!'); return it; };
        }, { "./_is-object": 32 }],
        11: [function(require, module, exports) {
            var toIObject = require('./_to-iobject'),
                toLength = require('./_to-length'),
                toIndex = require('./_to-index');
            module.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIObject($this),
                        length = toLength(O.length),
                        index = toIndex(fromIndex, length),
                        value;
                    if (IS_INCLUDES && el != el)
                        while (length > index) { value = O[index++]; if (value != value) return true; } else
                            for (; length > index; index++)
                                if (IS_INCLUDES || index in O) { if (O[index] === el) return IS_INCLUDES || index || 0; }
                    return !IS_INCLUDES && -1;
                };
            };
        }, { "./_to-index": 62, "./_to-iobject": 64, "./_to-length": 65 }],
        12: [function(require, module, exports) {
            var cof = require('./_cof'),
                TAG = require('./_wks')('toStringTag'),
                ARG = cof(function() { return arguments; }()) == 'Arguments';
            var tryGet = function(it, key) { try { return it[key]; } catch (e) {} };
            module.exports = function(it) { var O, T, B; return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B; };
        }, { "./_cof": 13, "./_wks": 69 }],
        13: [function(require, module, exports) {
            var toString = {}.toString;
            module.exports = function(it) { return toString.call(it).slice(8, -1); };
        }, {}],
        14: [function(require, module, exports) { var core = module.exports = { version: '2.4.0' }; if (typeof __e == 'number') __e = core; }, {}],
        15: [function(require, module, exports) {
            'use strict';
            var $defineProperty = require('./_object-dp'),
                createDesc = require('./_property-desc');
            module.exports = function(object, index, value) {
                if (index in object) $defineProperty.f(object, index, createDesc(0, value));
                else object[index] = value;
            };
        }, { "./_object-dp": 43, "./_property-desc": 51 }],
        16: [function(require, module, exports) {
            var aFunction = require('./_a-function');
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function(a) { return fn.call(that, a); };
                    case 2:
                        return function(a, b) { return fn.call(that, a, b); };
                    case 3:
                        return function(a, b, c) { return fn.call(that, a, b, c); };
                }
                return function() { return fn.apply(that, arguments); };
            };
        }, { "./_a-function": 7 }],
        17: [function(require, module, exports) { module.exports = function(it) { if (it == undefined) throw TypeError("Can't call method on  " + it); return it; }; }, {}],
        18: [function(require, module, exports) { module.exports = !require('./_fails')(function() { return Object.defineProperty({}, 'a', { get: function() { return 7; } }).a != 7; }); }, { "./_fails": 22 }],
        19: [function(require, module, exports) {
            var isObject = require('./_is-object'),
                document = require('./_global').document,
                is = isObject(document) && isObject(document.createElement);
            module.exports = function(it) { return is ? document.createElement(it) : {}; };
        }, { "./_global": 24, "./_is-object": 32 }],
        20: [function(require, module, exports) { module.exports = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf').split(','); }, {}],
        21: [function(require, module, exports) {
            var global = require('./_global'),
                core = require('./_core'),
                ctx = require('./_ctx'),
                hide = require('./_hide'),
                PROTOTYPE = 'prototype';
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F,
                    IS_GLOBAL = type & $export.G,
                    IS_STATIC = type & $export.S,
                    IS_PROTO = type & $export.P,
                    IS_BIND = type & $export.B,
                    IS_WRAP = type & $export.W,
                    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                    expProto = exports[PROTOTYPE],
                    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
                    key, own, out;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    own = !IS_FORCED && target && target[key] !== undefined;
                    if (own && key in exports) continue;
                    out = own ? target[key] : source[key];
                    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
                        var F = function(a, b, c) {
                            if (this instanceof C) {
                                switch (arguments.length) {
                                    case 0:
                                        return new C;
                                    case 1:
                                        return new C(a);
                                    case 2:
                                        return new C(a, b);
                                }
                                return new C(a, b, c);
                            }
                            return C.apply(this, arguments);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    if (IS_PROTO) {
                        (exports.virtual || (exports.virtual = {}))[key] = out;
                        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                    }
                }
            };
            $export.F = 1;
            $export.G = 2;
            $export.S = 4;
            $export.P = 8;
            $export.B = 16;
            $export.W = 32;
            $export.U = 64;
            $export.R = 128;
            module.exports = $export;
        }, { "./_core": 14, "./_ctx": 16, "./_global": 24, "./_hide": 26 }],
        22: [function(require, module, exports) { module.exports = function(exec) { try { return !!exec(); } catch (e) { return true; } }; }, {}],
        23: [function(require, module, exports) {
            var ctx = require('./_ctx'),
                call = require('./_iter-call'),
                isArrayIter = require('./_is-array-iter'),
                anObject = require('./_an-object'),
                toLength = require('./_to-length'),
                getIterFn = require('./core.get-iterator-method'),
                BREAK = {},
                RETURN = {};
            var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function() { return iterable; } : getIterFn(iterable),
                    f = ctx(fn, that, entries ? 2 : 1),
                    index = 0,
                    length, step, iterator, result;
                if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
                if (isArrayIter(iterFn))
                    for (length = toLength(iterable.length); length > index; index++) { result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]); if (result === BREAK || result === RETURN) return result; } else
                        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) { result = call(iterator, f, step.value, entries); if (result === BREAK || result === RETURN) return result; }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;
        }, { "./_an-object": 10, "./_ctx": 16, "./_is-array-iter": 31, "./_iter-call": 33, "./_to-length": 65, "./core.get-iterator-method": 70 }],
        24: [function(require, module, exports) { var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')(); if (typeof __g == 'number') __g = global; }, {}],
        25: [function(require, module, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function(it, key) { return hasOwnProperty.call(it, key); };
        }, {}],
        26: [function(require, module, exports) {
            var dP = require('./_object-dp'),
                createDesc = require('./_property-desc');
            module.exports = require('./_descriptors') ? function(object, key, value) { return dP.f(object, key, createDesc(1, value)); } : function(object, key, value) { object[key] = value; return object; };
        }, { "./_descriptors": 18, "./_object-dp": 43, "./_property-desc": 51 }],
        27: [function(require, module, exports) { module.exports = require('./_global').document && document.documentElement; }, { "./_global": 24 }],
        28: [function(require, module, exports) { module.exports = !require('./_descriptors') && !require('./_fails')(function() { return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function() { return 7; } }).a != 7; }); }, { "./_descriptors": 18, "./_dom-create": 19, "./_fails": 22 }],
        29: [function(require, module, exports) {
            module.exports = function(fn, args, that) {
                var un = that === undefined;
                switch (args.length) {
                    case 0:
                        return un ? fn() : fn.call(that);
                    case 1:
                        return un ? fn(args[0]) : fn.call(that, args[0]);
                    case 2:
                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                    case 3:
                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                    case 4:
                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                }
                return fn.apply(that, args);
            };
        }, {}],
        30: [function(require, module, exports) {
            var cof = require('./_cof');
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) { return cof(it) == 'String' ? it.split('') : Object(it); };
        }, { "./_cof": 13 }],
        31: [function(require, module, exports) {
            var Iterators = require('./_iterators'),
                ITERATOR = require('./_wks')('iterator'),
                ArrayProto = Array.prototype;
            module.exports = function(it) { return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it); };
        }, { "./_iterators": 38, "./_wks": 69 }],
        32: [function(require, module, exports) { module.exports = function(it) { return typeof it === 'object' ? it !== null : typeof it === 'function'; }; }, {}],
        33: [function(require, module, exports) {
            var anObject = require('./_an-object');
            module.exports = function(iterator, fn, value, entries) { try { return entries ? fn(anObject(value)[0], value[1]) : fn(value); } catch (e) { var ret = iterator['return']; if (ret !== undefined) anObject(ret.call(iterator)); throw e; } };
        }, { "./_an-object": 10 }],
        34: [function(require, module, exports) {
            'use strict';
            var create = require('./_object-create'),
                descriptor = require('./_property-desc'),
                setToStringTag = require('./_set-to-string-tag'),
                IteratorPrototype = {};
            require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function() { return this; });
            module.exports = function(Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + ' Iterator');
            };
        }, { "./_hide": 26, "./_object-create": 42, "./_property-desc": 51, "./_set-to-string-tag": 56, "./_wks": 69 }],
        35: [function(require, module, exports) {
            'use strict';
            var LIBRARY = require('./_library'),
                $export = require('./_export'),
                redefine = require('./_redefine'),
                hide = require('./_hide'),
                has = require('./_has'),
                Iterators = require('./_iterators'),
                $iterCreate = require('./_iter-create'),
                setToStringTag = require('./_set-to-string-tag'),
                getPrototypeOf = require('./_object-gpo'),
                ITERATOR = require('./_wks')('iterator'),
                BUGGY = !([].keys && 'next' in [].keys()),
                FF_ITERATOR = '@@iterator',
                KEYS = 'keys',
                VALUES = 'values';
            var returnThis = function() { return this; };
            module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() { return new Constructor(this, kind); };
                        case VALUES:
                            return function values() { return new Constructor(this, kind); };
                    }
                    return function entries() { return new Constructor(this, kind); };
                };
                var TAG = NAME + ' Iterator',
                    DEF_VALUES = DEFAULT == VALUES,
                    VALUES_BUG = false,
                    proto = Base.prototype,
                    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                    $default = $native || getMethod(DEFAULT),
                    $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
                    $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
                    methods, key, IteratorPrototype;
                if ($anyNative) { IteratorPrototype = getPrototypeOf($anyNative.call(new Base)); if (IteratorPrototype !== Object.prototype) { setToStringTag(IteratorPrototype, TAG, true); if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis); } }
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() { return $native.call(this); };
                }
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) { hide(proto, ITERATOR, $default); }
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = { values: DEF_VALUES ? $default : getMethod(VALUES), keys: IS_SET ? $default : getMethod(KEYS), entries: $entries };
                    if (FORCED)
                        for (key in methods) { if (!(key in proto)) redefine(proto, key, methods[key]); } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };
        }, { "./_export": 21, "./_has": 25, "./_hide": 26, "./_iter-create": 34, "./_iterators": 38, "./_library": 39, "./_object-gpo": 47, "./_redefine": 53, "./_set-to-string-tag": 56, "./_wks": 69 }],
        36: [function(require, module, exports) {
            var ITERATOR = require('./_wks')('iterator'),
                SAFE_CLOSING = false;
            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function() { SAFE_CLOSING = true; };
                Array.from(riter, function() { throw 2; });
            } catch (e) {}
            module.exports = function(exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7],
                        iter = arr[ITERATOR]();
                    iter.next = function() { return { done: safe = true }; };
                    arr[ITERATOR] = function() { return iter; };
                    exec(arr);
                } catch (e) {}
                return safe;
            };
        }, { "./_wks": 69 }],
        37: [function(require, module, exports) { module.exports = function(done, value) { return { value: value, done: !!done }; }; }, {}],
        38: [function(require, module, exports) { module.exports = {}; }, {}],
        39: [function(require, module, exports) { module.exports = true; }, {}],
        40: [function(require, module, exports) {
            var global = require('./_global'),
                macrotask = require('./_task').set,
                Observer = global.MutationObserver || global.WebKitMutationObserver,
                process = global.process,
                Promise = global.Promise,
                isNode = require('./_cof')(process) == 'process';
            module.exports = function() {
                var head, last, notify;
                var flush = function() {
                    var parent, fn;
                    if (isNode && (parent = process.domain)) parent.exit();
                    while (head) {
                        fn = head.fn;
                        head = head.next;
                        try { fn(); } catch (e) {
                            if (head) notify();
                            else last = undefined;
                            throw e;
                        }
                    }
                    last = undefined;
                    if (parent) parent.enter();
                };
                if (isNode) { notify = function() { process.nextTick(flush); }; } else if (Observer) {
                    var toggle = true,
                        node = document.createTextNode('');
                    new Observer(flush).observe(node, { characterData: true });
                    notify = function() { node.data = toggle = !toggle; };
                } else if (Promise && Promise.resolve) {
                    var promise = Promise.resolve();
                    notify = function() { promise.then(flush); };
                } else { notify = function() { macrotask.call(global, flush); }; }
                return function(fn) {
                    var task = { fn: fn, next: undefined };
                    if (last) last.next = task;
                    if (!head) {
                        head = task;
                        notify();
                    }
                    last = task;
                };
            };
        }, { "./_cof": 13, "./_global": 24, "./_task": 61 }],
        41: [function(require, module, exports) {
            'use strict';
            var getKeys = require('./_object-keys'),
                gOPS = require('./_object-gops'),
                pIE = require('./_object-pie'),
                toObject = require('./_to-object'),
                IObject = require('./_iobject'),
                $assign = Object.assign;
            module.exports = !$assign || require('./_fails')(function() {
                var A = {},
                    B = {},
                    S = Symbol(),
                    K = 'abcdefghijklmnopqrst';
                A[S] = 7;
                K.split('').forEach(function(k) { B[k] = k; });
                return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
            }) ? function assign(target, source) {
                var T = toObject(target),
                    aLen = arguments.length,
                    index = 1,
                    getSymbols = gOPS.f,
                    isEnum = pIE.f;
                while (aLen > index) {
                    var S = IObject(arguments[index++]),
                        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
                        length = keys.length,
                        j = 0,
                        key;
                    while (length > j)
                        if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
                }
                return T;
            } : $assign;
        }, { "./_fails": 22, "./_iobject": 30, "./_object-gops": 46, "./_object-keys": 49, "./_object-pie": 50, "./_to-object": 66 }],
        42: [function(require, module, exports) {
            var anObject = require('./_an-object'),
                dPs = require('./_object-dps'),
                enumBugKeys = require('./_enum-bug-keys'),
                IE_PROTO = require('./_shared-key')('IE_PROTO'),
                Empty = function() {},
                PROTOTYPE = 'prototype';
            var createDict = function() {
                var iframe = require('./_dom-create')('iframe'),
                    i = enumBugKeys.length,
                    gt = '>',
                    iframeDocument;
                iframe.style.display = 'none';
                require('./_html').appendChild(iframe);
                iframe.src = 'javascript:';
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write('<script>document.F=Object</script' + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
                return createDict();
            };
            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty;
                    Empty[PROTOTYPE] = null;
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };
        }, { "./_an-object": 10, "./_dom-create": 19, "./_enum-bug-keys": 20, "./_html": 27, "./_object-dps": 44, "./_shared-key": 57 }],
        43: [function(require, module, exports) {
            var anObject = require('./_an-object'),
                IE8_DOM_DEFINE = require('./_ie8-dom-define'),
                toPrimitive = require('./_to-primitive'),
                dP = Object.defineProperty;
            exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try { return dP(O, P, Attributes); } catch (e) {}
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };
        }, { "./_an-object": 10, "./_descriptors": 18, "./_ie8-dom-define": 28, "./_to-primitive": 67 }],
        44: [function(require, module, exports) {
            var dP = require('./_object-dp'),
                anObject = require('./_an-object'),
                getKeys = require('./_object-keys');
            module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties),
                    length = keys.length,
                    i = 0,
                    P;
                while (length > i) dP.f(O, P = keys[i++], Properties[P]);
                return O;
            };
        }, { "./_an-object": 10, "./_descriptors": 18, "./_object-dp": 43, "./_object-keys": 49 }],
        45: [function(require, module, exports) {
            var pIE = require('./_object-pie'),
                createDesc = require('./_property-desc'),
                toIObject = require('./_to-iobject'),
                toPrimitive = require('./_to-primitive'),
                has = require('./_has'),
                IE8_DOM_DEFINE = require('./_ie8-dom-define'),
                gOPD = Object.getOwnPropertyDescriptor;
            exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try { return gOPD(O, P); } catch (e) {}
                if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
            };
        }, { "./_descriptors": 18, "./_has": 25, "./_ie8-dom-define": 28, "./_object-pie": 50, "./_property-desc": 51, "./_to-iobject": 64, "./_to-primitive": 67 }],
        46: [function(require, module, exports) { exports.f = Object.getOwnPropertySymbols; }, {}],
        47: [function(require, module, exports) {
            var has = require('./_has'),
                toObject = require('./_to-object'),
                IE_PROTO = require('./_shared-key')('IE_PROTO'),
                ObjectProto = Object.prototype;
            module.exports = Object.getPrototypeOf || function(O) { O = toObject(O); if (has(O, IE_PROTO)) return O[IE_PROTO]; if (typeof O.constructor == 'function' && O instanceof O.constructor) { return O.constructor.prototype; } return O instanceof Object ? ObjectProto : null; };
        }, { "./_has": 25, "./_shared-key": 57, "./_to-object": 66 }],
        48: [function(require, module, exports) {
            var has = require('./_has'),
                toIObject = require('./_to-iobject'),
                arrayIndexOf = require('./_array-includes')(false),
                IE_PROTO = require('./_shared-key')('IE_PROTO');
            module.exports = function(object, names) {
                var O = toIObject(object),
                    i = 0,
                    result = [],
                    key;
                for (key in O)
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                while (names.length > i)
                    if (has(O, key = names[i++])) {~arrayIndexOf(result, key) || result.push(key); }
                return result;
            };
        }, { "./_array-includes": 11, "./_has": 25, "./_shared-key": 57, "./_to-iobject": 64 }],
        49: [function(require, module, exports) {
            var $keys = require('./_object-keys-internal'),
                enumBugKeys = require('./_enum-bug-keys');
            module.exports = Object.keys || function keys(O) { return $keys(O, enumBugKeys); };
        }, { "./_enum-bug-keys": 20, "./_object-keys-internal": 48 }],
        50: [function(require, module, exports) { exports.f = {}.propertyIsEnumerable; }, {}],
        51: [function(require, module, exports) { module.exports = function(bitmap, value) { return { enumerable: !(bitmap & 1), configurable: !(bitmap & 2), writable: !(bitmap & 4), value: value }; }; }, {}],
        52: [function(require, module, exports) {
            var hide = require('./_hide');
            module.exports = function(target, src, safe) {
                for (var key in src) {
                    if (safe && target[key]) target[key] = src[key];
                    else hide(target, key, src[key]);
                }
                return target;
            };
        }, { "./_hide": 26 }],
        53: [function(require, module, exports) { module.exports = require('./_hide'); }, { "./_hide": 26 }],
        54: [function(require, module, exports) {
            var isObject = require('./_is-object'),
                anObject = require('./_an-object');
            var check = function(O, proto) { anObject(O); if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!"); };
            module.exports = {
                set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
                    try {
                        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) { buggy = true; }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
                check: check
            };
        }, { "./_an-object": 10, "./_ctx": 16, "./_is-object": 32, "./_object-gopd": 45 }],
        55: [function(require, module, exports) {
            'use strict';
            var global = require('./_global'),
                core = require('./_core'),
                dP = require('./_object-dp'),
                DESCRIPTORS = require('./_descriptors'),
                SPECIES = require('./_wks')('species');
            module.exports = function(KEY) { var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY]; if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, { configurable: true, get: function() { return this; } }); };
        }, { "./_core": 14, "./_descriptors": 18, "./_global": 24, "./_object-dp": 43, "./_wks": 69 }],
        56: [function(require, module, exports) {
            var def = require('./_object-dp').f,
                has = require('./_has'),
                TAG = require('./_wks')('toStringTag');
            module.exports = function(it, tag, stat) { if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag }); };
        }, { "./_has": 25, "./_object-dp": 43, "./_wks": 69 }],
        57: [function(require, module, exports) {
            var shared = require('./_shared')('keys'),
                uid = require('./_uid');
            module.exports = function(key) { return shared[key] || (shared[key] = uid(key)); };
        }, { "./_shared": 58, "./_uid": 68 }],
        58: [function(require, module, exports) {
            var global = require('./_global'),
                SHARED = '__core-js_shared__',
                store = global[SHARED] || (global[SHARED] = {});
            module.exports = function(key) { return store[key] || (store[key] = {}); };
        }, { "./_global": 24 }],
        59: [function(require, module, exports) {
            var anObject = require('./_an-object'),
                aFunction = require('./_a-function'),
                SPECIES = require('./_wks')('species');
            module.exports = function(O, D) {
                var C = anObject(O).constructor,
                    S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };
        }, { "./_a-function": 7, "./_an-object": 10, "./_wks": 69 }],
        60: [function(require, module, exports) {
            var toInteger = require('./_to-integer'),
                defined = require('./_defined');
            module.exports = function(TO_STRING) {
                return function(that, pos) {
                    var s = String(defined(that)),
                        i = toInteger(pos),
                        l = s.length,
                        a, b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };
        }, { "./_defined": 17, "./_to-integer": 63 }],
        61: [function(require, module, exports) {
            var ctx = require('./_ctx'),
                invoke = require('./_invoke'),
                html = require('./_html'),
                cel = require('./_dom-create'),
                global = require('./_global'),
                process = global.process,
                setTask = global.setImmediate,
                clearTask = global.clearImmediate,
                MessageChannel = global.MessageChannel,
                counter = 0,
                queue = {},
                ONREADYSTATECHANGE = 'onreadystatechange',
                defer, channel, port;
            var run = function() {
                var id = +this;
                if (queue.hasOwnProperty(id)) {
                    var fn = queue[id];
                    delete queue[id];
                    fn();
                }
            };
            var listener = function(event) { run.call(event.data); };
            if (!setTask || !clearTask) {
                setTask = function setImmediate(fn) {
                    var args = [],
                        i = 1;
                    while (arguments.length > i) args.push(arguments[i++]);
                    queue[++counter] = function() { invoke(typeof fn == 'function' ? fn : Function(fn), args); };
                    defer(counter);
                    return counter;
                };
                clearTask = function clearImmediate(id) { delete queue[id]; };
                if (require('./_cof')(process) == 'process') { defer = function(id) { process.nextTick(ctx(run, id, 1)); }; } else if (MessageChannel) {
                    channel = new MessageChannel;
                    port = channel.port2;
                    channel.port1.onmessage = listener;
                    defer = ctx(port.postMessage, port, 1);
                } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                    defer = function(id) { global.postMessage(id + '', '*'); };
                    global.addEventListener('message', listener, false);
                } else if (ONREADYSTATECHANGE in cel('script')) {
                    defer = function(id) {
                        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                            html.removeChild(this);
                            run.call(id);
                        };
                    };
                } else { defer = function(id) { setTimeout(ctx(run, id, 1), 0); }; }
            }
            module.exports = { set: setTask, clear: clearTask };
        }, { "./_cof": 13, "./_ctx": 16, "./_dom-create": 19, "./_global": 24, "./_html": 27, "./_invoke": 29 }],
        62: [function(require, module, exports) {
            var toInteger = require('./_to-integer'),
                max = Math.max,
                min = Math.min;
            module.exports = function(index, length) { index = toInteger(index); return index < 0 ? max(index + length, 0) : min(index, length); };
        }, { "./_to-integer": 63 }],
        63: [function(require, module, exports) {
            var ceil = Math.ceil,
                floor = Math.floor;
            module.exports = function(it) { return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it); };
        }, {}],
        64: [function(require, module, exports) {
            var IObject = require('./_iobject'),
                defined = require('./_defined');
            module.exports = function(it) { return IObject(defined(it)); };
        }, { "./_defined": 17, "./_iobject": 30 }],
        65: [function(require, module, exports) {
            var toInteger = require('./_to-integer'),
                min = Math.min;
            module.exports = function(it) { return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; };
        }, { "./_to-integer": 63 }],
        66: [function(require, module, exports) {
            var defined = require('./_defined');
            module.exports = function(it) { return Object(defined(it)); };
        }, { "./_defined": 17 }],
        67: [function(require, module, exports) {
            var isObject = require('./_is-object');
            module.exports = function(it, S) { if (!isObject(it)) return it; var fn, val; if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val; if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val; if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val; throw TypeError("Can't convert object to primitive value"); };
        }, { "./_is-object": 32 }],
        68: [function(require, module, exports) {
            var id = 0,
                px = Math.random();
            module.exports = function(key) { return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36)); };
        }, {}],
        69: [function(require, module, exports) {
            var store = require('./_shared')('wks'),
                uid = require('./_uid'),
                Symbol = require('./_global').Symbol,
                USE_SYMBOL = typeof Symbol == 'function';
            var $exports = module.exports = function(name) { return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name)); };
            $exports.store = store;
        }, { "./_global": 24, "./_shared": 58, "./_uid": 68 }],
        70: [function(require, module, exports) {
            var classof = require('./_classof'),
                ITERATOR = require('./_wks')('iterator'),
                Iterators = require('./_iterators');
            module.exports = require('./_core').getIteratorMethod = function(it) { if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)]; };
        }, { "./_classof": 12, "./_core": 14, "./_iterators": 38, "./_wks": 69 }],
        71: [function(require, module, exports) {
            'use strict';
            var ctx = require('./_ctx'),
                $export = require('./_export'),
                toObject = require('./_to-object'),
                call = require('./_iter-call'),
                isArrayIter = require('./_is-array-iter'),
                toLength = require('./_to-length'),
                createProperty = require('./_create-property'),
                getIterFn = require('./core.get-iterator-method');
            $export($export.S + $export.F * !require('./_iter-detect')(function(iter) { Array.from(iter); }), 'Array', {
                from: function from(arrayLike) {
                    var O = toObject(arrayLike),
                        C = typeof this == 'function' ? this : Array,
                        aLen = arguments.length,
                        mapfn = aLen > 1 ? arguments[1] : undefined,
                        mapping = mapfn !== undefined,
                        index = 0,
                        iterFn = getIterFn(O),
                        length, result, step, iterator;
                    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) { for (iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++) { createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value); } } else { length = toLength(O.length); for (result = new C(length); length > index; index++) { createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]); } }
                    result.length = index;
                    return result;
                }
            });
        }, { "./_create-property": 15, "./_ctx": 16, "./_export": 21, "./_is-array-iter": 31, "./_iter-call": 33, "./_iter-detect": 36, "./_to-length": 65, "./_to-object": 66, "./core.get-iterator-method": 70 }],
        72: [function(require, module, exports) {
            'use strict';
            var addToUnscopables = require('./_add-to-unscopables'),
                step = require('./_iter-step'),
                Iterators = require('./_iterators'),
                toIObject = require('./_to-iobject');
            module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind) {
                this._t = toIObject(iterated);
                this._i = 0;
                this._k = kind;
            }, function() {
                var O = this._t,
                    kind = this._k,
                    index = this._i++;
                if (!O || index >= O.length) { this._t = undefined; return step(1); }
                if (kind == 'keys') return step(0, index);
                if (kind == 'values') return step(0, O[index]);
                return step(0, [index, O[index]]);
            }, 'values');
            Iterators.Arguments = Iterators.Array;
            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');
        }, { "./_add-to-unscopables": 8, "./_iter-define": 35, "./_iter-step": 37, "./_iterators": 38, "./_to-iobject": 64 }],
        73: [function(require, module, exports) {
            var $export = require('./_export');
            $export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });
        }, { "./_export": 21, "./_object-assign": 41 }],
        74: [function(require, module, exports) {}, {}],
        75: [function(require, module, exports) {
            'use strict';
            var LIBRARY = require('./_library'),
                global = require('./_global'),
                ctx = require('./_ctx'),
                classof = require('./_classof'),
                $export = require('./_export'),
                isObject = require('./_is-object'),
                anObject = require('./_an-object'),
                aFunction = require('./_a-function'),
                anInstance = require('./_an-instance'),
                forOf = require('./_for-of'),
                setProto = require('./_set-proto').set,
                speciesConstructor = require('./_species-constructor'),
                task = require('./_task').set,
                microtask = require('./_microtask')(),
                PROMISE = 'Promise',
                TypeError = global.TypeError,
                process = global.process,
                $Promise = global[PROMISE],
                process = global.process,
                isNode = classof(process) == 'process',
                empty = function() {},
                Internal, GenericPromiseCapability, Wrapper;
            var USE_NATIVE = !! function() {
                try {
                    var promise = $Promise.resolve(1),
                        FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec) { exec(empty, empty); };
                    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
                } catch (e) {}
            }();
            var sameConstructor = function(a, b) { return a === b || a === $Promise && b === Wrapper; };
            var isThenable = function(it) { var then; return isObject(it) && typeof(then = it.then) == 'function' ? then : false; };
            var newPromiseCapability = function(C) { return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C); };
            var PromiseCapability = GenericPromiseCapability = function(C) {
                var resolve, reject;
                this.promise = new C(function($$resolve, $$reject) {
                    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                    resolve = $$resolve;
                    reject = $$reject;
                });
                this.resolve = aFunction(resolve);
                this.reject = aFunction(reject);
            };
            var perform = function(exec) { try { exec(); } catch (e) { return { error: e }; } };
            var notify = function(promise, isReject) {
                if (promise._n) return;
                promise._n = true;
                var chain = promise._c;
                microtask(function() {
                    var value = promise._v,
                        ok = promise._s == 1,
                        i = 0;
                    var run = function(reaction) {
                        var handler = ok ? reaction.ok : reaction.fail,
                            resolve = reaction.resolve,
                            reject = reaction.reject,
                            domain = reaction.domain,
                            result, then;
                        try {
                            if (handler) {
                                if (!ok) {
                                    if (promise._h == 2) onHandleUnhandled(promise);
                                    promise._h = 1;
                                }
                                if (handler === true) result = value;
                                else {
                                    if (domain) domain.enter();
                                    result = handler(value);
                                    if (domain) domain.exit();
                                }
                                if (result === reaction.promise) { reject(TypeError('Promise-chain cycle')); } else if (then = isThenable(result)) { then.call(result, resolve, reject); } else resolve(result);
                            } else reject(value);
                        } catch (e) { reject(e); }
                    };
                    while (chain.length > i) run(chain[i++]);
                    promise._c = [];
                    promise._n = false;
                    if (isReject && !promise._h) onUnhandled(promise);
                });
            };
            var onUnhandled = function(promise) {
                task.call(global, function() {
                    var value = promise._v,
                        abrupt, handler, console;
                    if (isUnhandled(promise)) {
                        abrupt = perform(function() { if (isNode) { process.emit('unhandledRejection', value, promise); } else if (handler = global.onunhandledrejection) { handler({ promise: promise, reason: value }); } else if ((console = global.console) && console.error) { console.error('Unhandled promise rejection', value); } });
                        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                    }
                    promise._a = undefined;
                    if (abrupt) throw abrupt.error;
                });
            };
            var isUnhandled = function(promise) {
                if (promise._h == 1) return false;
                var chain = promise._a || promise._c,
                    i = 0,
                    reaction;
                while (chain.length > i) { reaction = chain[i++]; if (reaction.fail || !isUnhandled(reaction.promise)) return false; }
                return true;
            };
            var onHandleUnhandled = function(promise) { task.call(global, function() { var handler; if (isNode) { process.emit('rejectionHandled', promise); } else if (handler = global.onrejectionhandled) { handler({ promise: promise, reason: promise._v }); } }); };
            var $reject = function(value) {
                var promise = this;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise;
                promise._v = value;
                promise._s = 2;
                if (!promise._a) promise._a = promise._c.slice();
                notify(promise, true);
            };
            var $resolve = function(value) {
                var promise = this,
                    then;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise;
                try {
                    if (promise === value) throw TypeError("Promise can't be resolved itself");
                    if (then = isThenable(value)) { microtask(function() { var wrapper = { _w: promise, _d: false }; try { then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1)); } catch (e) { $reject.call(wrapper, e); } }); } else {
                        promise._v = value;
                        promise._s = 1;
                        notify(promise, false);
                    }
                } catch (e) { $reject.call({ _w: promise, _d: false }, e); }
            };
            if (!USE_NATIVE) {
                $Promise = function Promise(executor) {
                    anInstance(this, $Promise, PROMISE, '_h');
                    aFunction(executor);
                    Internal.call(this);
                    try { executor(ctx($resolve, this, 1), ctx($reject, this, 1)); } catch (err) { $reject.call(this, err); }
                };
                Internal = function Promise(executor) {
                    this._c = [];
                    this._a = undefined;
                    this._s = 0;
                    this._d = false;
                    this._v = undefined;
                    this._h = 0;
                    this._n = false;
                };
                Internal.prototype = require('./_redefine-all')($Promise.prototype, {
                    then: function then(onFulfilled, onRejected) {
                        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                        reaction.fail = typeof onRejected == 'function' && onRejected;
                        reaction.domain = isNode ? process.domain : undefined;
                        this._c.push(reaction);
                        if (this._a) this._a.push(reaction);
                        if (this._s) notify(this, false);
                        return reaction.promise;
                    },
                    'catch': function(onRejected) { return this.then(undefined, onRejected); }
                });
                PromiseCapability = function() {
                    var promise = new Internal;
                    this.promise = promise;
                    this.resolve = ctx($resolve, promise, 1);
                    this.reject = ctx($reject, promise, 1);
                };
            }
            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
            require('./_set-to-string-tag')($Promise, PROMISE);
            require('./_set-species')(PROMISE);
            Wrapper = require('./_core')[PROMISE];
            $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                reject: function reject(r) {
                    var capability = newPromiseCapability(this),
                        $$reject = capability.reject;
                    $$reject(r);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                resolve: function resolve(x) {
                    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
                    var capability = newPromiseCapability(this),
                        $$resolve = capability.resolve;
                    $$resolve(x);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter) { $Promise.all(iter)['catch'](empty); })), PROMISE, {
                all: function all(iterable) {
                    var C = this,
                        capability = newPromiseCapability(C),
                        resolve = capability.resolve,
                        reject = capability.reject;
                    var abrupt = perform(function() {
                        var values = [],
                            index = 0,
                            remaining = 1;
                        forOf(iterable, false, function(promise) {
                            var $index = index++,
                                alreadyCalled = false;
                            values.push(undefined);
                            remaining++;
                            C.resolve(promise).then(function(value) {
                                if (alreadyCalled) return;
                                alreadyCalled = true;
                                values[$index] = value;
                                --remaining || resolve(values);
                            }, reject);
                        });
                        --remaining || resolve(values);
                    });
                    if (abrupt) reject(abrupt.error);
                    return capability.promise;
                },
                race: function race(iterable) {
                    var C = this,
                        capability = newPromiseCapability(C),
                        reject = capability.reject;
                    var abrupt = perform(function() { forOf(iterable, false, function(promise) { C.resolve(promise).then(capability.resolve, reject); }); });
                    if (abrupt) reject(abrupt.error);
                    return capability.promise;
                }
            });
        }, { "./_a-function": 7, "./_an-instance": 9, "./_an-object": 10, "./_classof": 12, "./_core": 14, "./_ctx": 16, "./_export": 21, "./_for-of": 23, "./_global": 24, "./_is-object": 32, "./_iter-detect": 36, "./_library": 39, "./_microtask": 40, "./_redefine-all": 52, "./_set-proto": 54, "./_set-species": 55, "./_set-to-string-tag": 56, "./_species-constructor": 59, "./_task": 61, "./_wks": 69 }],
        76: [function(require, module, exports) {
            'use strict';
            var $at = require('./_string-at')(true);
            require('./_iter-define')(String, 'String', function(iterated) {
                this._t = String(iterated);
                this._i = 0;
            }, function() {
                var O = this._t,
                    index = this._i,
                    point;
                if (index >= O.length) return { value: undefined, done: true };
                point = $at(O, index);
                this._i += point.length;
                return { value: point, done: false };
            });
        }, { "./_iter-define": 35, "./_string-at": 60 }],
        77: [function(require, module, exports) {
            require('./es6.array.iterator');
            var global = require('./_global'),
                hide = require('./_hide'),
                Iterators = require('./_iterators'),
                TO_STRING_TAG = require('./_wks')('toStringTag');
            for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
                var NAME = collections[i],
                    Collection = global[NAME],
                    proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array;
            }
        }, { "./_global": 24, "./_hide": 26, "./_iterators": 38, "./_wks": 69, "./es6.array.iterator": 72 }],
        78: [function(require, module, exports) {
            'use strict';
            var _assign = require('babel-runtime/core-js/object/assign');
            var _assign2 = _interopRequireDefault(_assign);
            var _promise = require('babel-runtime/core-js/promise');
            var _promise2 = _interopRequireDefault(_promise);
            var _from = require('babel-runtime/core-js/array/from');
            var _from2 = _interopRequireDefault(_from);

            function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            function range(start, end) { return (0, _from2.default)({ length: end - start + 1 }, function(_, i) { return i + start; }); }

            function getRandomChar(type) {
                var pool = '';
                switch (type) {
                    case 'lowerLetter':
                        pool = 'abcdefghijklmnopqrstuvwxyz0123456789';
                        break;
                    case 'upperLetter':
                        pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                        break;
                    case 'symbol':
                        pool = ',.?/\\(^)![]{}*&^%$#\'"';
                        break;
                }
                var poolArray = (0, _from2.default)(pool);
                return poolArray[Math.floor(Math.random() * poolArray.length)];
            }

            function shuffleLetters(el, options) {
                return new _promise2.default(function(resolve) {
                    if (el.dataset.shuffleLettersAnimated === 'true') { return; }
                    el.dataset.shuffleLettersAnimated = 'true';
                    var strArray = (0, _from2.default)(options.text || el.textContent);
                    var types = [];
                    var letters = [];
                    strArray.forEach(function(char, i) {
                        if (char === ' ') { types[i] = 'space'; return; } else if (/[a-z]/.test(char)) { types[i] = 'lowerLetter'; } else if (/[A-Z]/.test(char)) { types[i] = 'upperLetter'; } else { types[i] = 'symbol'; }
                        letters.push(i);
                    });
                    el.textContent = '';
                    (function shuffle(start) {
                        var len = letters.length;
                        var shuffledArray = [].concat(strArray);
                        if (start > len) { el.dataset.shuffleLettersAnimated = 'false'; return resolve(); }
                        range(Math.max(start, 0), len).forEach(function(i) { shuffledArray[letters[i]] = i < start + options.step ? getRandomChar(types[letters[i]]) : ''; });
                        el.textContent = shuffledArray.join('');
                        setTimeout(function() { return shuffle(start + 1); }, 1000 / options.fps);
                    })(-options.step);
                });
            }

            function isArrayLike(el) { return Array.isArray(el) || el instanceof NodeList || el instanceof HTMLCollection; }
            module.exports = function(el, options) { options = (0, _assign2.default)({}, { step: 8, fps: 25, text: '' }, options); return isArrayLike(el) ? _promise2.default.all((0, _from2.default)(el).map(function(e) { return shuffleLetters(e, options); })) : shuffleLetters(el, options); };
        }, { "babel-runtime/core-js/array/from": 1, "babel-runtime/core-js/object/assign": 2, "babel-runtime/core-js/promise": 3 }]
    }, {}, [78])(78)
}); //# sourceMappingURL=shuffle-letters.js.map
