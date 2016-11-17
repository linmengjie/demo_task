var getJasmineRequireObj = function (a) {
    var b; "undefined" !== typeof module && module.exports && "undefined" !== typeof exports ? (a = "undefined" !== typeof global ? global : {}, b = exports) : ("undefined" !== typeof window && "function" === typeof window.toString && "[object GjsGlobal]" === window.toString() && (a = window), b = a.jasmineRequire = a.jasmineRequire || {}); b.core = function (b) {
        var d = {}; b.base(d, a); d.util = b.util(); d.errors = b.errors(); d.formatErrorMsg = b.formatErrorMsg(); d.Any = b.Any(d); d.Anything = b.Anything(d); d.CallTracker = b.CallTracker(d);
        d.MockDate = b.MockDate(); d.Clock = b.Clock(); d.DelayedFunctionScheduler = b.DelayedFunctionScheduler(); d.Env = b.Env(d); d.ExceptionFormatter = b.ExceptionFormatter(); d.Expectation = b.Expectation(); d.buildExpectationResult = b.buildExpectationResult(); d.JsApiReporter = b.JsApiReporter(); d.matchersUtil = b.matchersUtil(d); d.ObjectContaining = b.ObjectContaining(d); d.ArrayContaining = b.ArrayContaining(d); d.pp = b.pp(d); d.QueueRunner = b.QueueRunner(d); d.ReportDispatcher = b.ReportDispatcher(); d.Spec = b.Spec(d); d.SpyRegistry =
            b.SpyRegistry(d); d.SpyStrategy = b.SpyStrategy(d); d.StringMatching = b.StringMatching(d); d.Suite = b.Suite(d); d.Timer = b.Timer(); d.TreeProcessor = b.TreeProcessor(); d.version = b.version(); d.Order = b.Order(); d.matchers = b.requireMatchers(b, d); return d
    }; return function () { return b }
} (this);
getJasmineRequireObj().requireMatchers = function (a, b) { for (var e = "toBe toBeCloseTo toBeDefined toBeFalsy toBeGreaterThan toBeGreaterThanOrEqual toBeLessThanOrEqual toBeLessThan toBeNaN toBeNull toBeTruthy toBeUndefined toContain toEqual toHaveBeenCalled toHaveBeenCalledWith toHaveBeenCalledTimes toMatch toThrow toThrowError".split(" "), d = {}, c = 0; c < e.length; c++) { var f = e[c]; d[f] = a[f](b) } return d };
getJasmineRequireObj().base = function (a, b) {
    a.unimplementedMethod_ = function () { throw Error("unimplemented method"); }; a.MAX_PRETTY_PRINT_DEPTH = 40; a.MAX_PRETTY_PRINT_ARRAY_LENGTH = 100; a.DEFAULT_TIMEOUT_INTERVAL = 5E3; a.getGlobal = function () { return b }; a.getEnv = function (b) { return a.currentEnv_ = a.currentEnv_ || new a.Env(b) }; a.isArray_ = function (b) { return a.isA_("Array", b) }; a.isString_ = function (b) { return a.isA_("String", b) }; a.isNumber_ = function (b) { return a.isA_("Number", b) }; a.isFunction_ = function (b) {
        return a.isA_("Function",
            b)
    }; a.isA_ = function (a, d) { return Object.prototype.toString.apply(d) === "[object " + a + "]" }; a.isDomNode = function (a) { return 0 < a.nodeType }; a.fnNameFor = function (a) { return a.name ? a.name : (a = a.toString().match(/^\s*function\s*(\w*)\s*\(/)) ? a[1] : "<anonymous>" }; a.any = function (b) { return new a.Any(b) }; a.anything = function () { return new a.Anything }; a.objectContaining = function (b) { return new a.ObjectContaining(b) }; a.stringMatching = function (b) { return new a.StringMatching(b) }; a.arrayContaining = function (b) { return new a.ArrayContaining(b) };
    a.createSpy = function (b, d) { var c = new a.SpyStrategy({ name: b, fn: d, getSpy: function () { return h } }), f = new a.CallTracker, h = function () { var a = { object: this, args: Array.prototype.slice.apply(arguments) }; f.track(a); var b = c.exec.apply(this, arguments); return a.returnValue = b }, g; for (g in d) { if ("and" === g || "calls" === g) throw Error("Jasmine spies would overwrite the 'and' and 'calls' properties on the object being spied upon"); h[g] = d[g] } h.and = c; h.calls = f; return h }; a.isSpy = function (b) {
        return b ? b.and instanceof a.SpyStrategy &&
            b.calls instanceof a.CallTracker : !1
    }; a.createSpyObj = function (b, d) { a.isArray_(b) && a.util.isUndefined(d) && (d = b, b = "unknown"); if (!a.isArray_(d) || 0 === d.length) throw "createSpyObj requires a non-empty array of method names to create spies for"; for (var c = {}, f = 0; f < d.length; f++)c[d[f]] = a.createSpy(b + "." + d[f]); return c }
};
getJasmineRequireObj().util = function () {
    return {
        inherit: function (a, b) { var e = function () { }; e.prototype = b.prototype; a.prototype = new e }, htmlEscape: function (a) { return a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : a }, argsToArray: function (a) { for (var b = [], e = 0; e < a.length; e++)b.push(a[e]); return b }, isUndefined: function (a) { return void 0 === a }, arrayContains: function (a, b) { for (var e = a.length; e--;)if (a[e] === b) return !0; return !1 }, clone: function (a) {
            if ("[object Array]" === Object.prototype.toString.apply(a)) return a.slice();
            var b = {}, e; for (e in a) a.hasOwnProperty(e) && (b[e] = a[e]); return b
        }
    }
};
getJasmineRequireObj().Spec = function (a) {
    function b(a) {
        this.expectationFactory = a.expectationFactory; this.resultCallback = a.resultCallback || function () { }; this.id = a.id; this.description = a.description || ""; this.queueableFn = a.queueableFn; this.beforeAndAfterFns = a.beforeAndAfterFns || function () { return { befores: [], afters: [] } }; this.userContext = a.userContext || function () { return {} }; this.onStart = a.onStart || function () { }; this.getSpecName = a.getSpecName || function () { return "" }; this.expectationResultFactory = a.expectationResultFactory ||
            function () { }; this.queueRunnerFactory = a.queueRunnerFactory || function () { }; this.catchingExceptions = a.catchingExceptions || function () { return !0 }; this.throwOnExpectationFailure = !!a.throwOnExpectationFailure; this.queueableFn.fn || this.pend(); this.result = { id: this.id, description: this.description, fullName: this.getFullName(), failedExpectations: [], passedExpectations: [], pendingReason: "" }
    } b.prototype.addExpectationResult = function (b, c, f) {
        c = this.expectationResultFactory(c); if (b) this.result.passedExpectations.push(c);
        else if (this.result.failedExpectations.push(c), this.throwOnExpectationFailure && !f) throw new a.errors.ExpectationFailed;
    }; b.prototype.expect = function (a) { return this.expectationFactory(a, this) }; b.prototype.execute = function (a, b) {
        function f(b) { e.result.status = e.status(b); e.resultCallback(e.result); a && a() } var e = this; this.onStart(this); if (!this.isExecutable() || this.markedPending || !1 === b) f(b); else {
            var g = this.beforeAndAfterFns(), g = g.befores.concat(this.queueableFn).concat(g.afters); this.queueRunnerFactory({
                queueableFns: g,
                onException: function () { e.onException.apply(e, arguments) }, onComplete: f, userContext: this.userContext()
            })
        }
    }; b.prototype.onException = function (d) { b.isPendingSpecException(d) ? this.pend(e(d)) : d instanceof a.errors.ExpectationFailed || this.addExpectationResult(!1, { matcherName: "", passed: !1, expected: "", actual: "", error: d }, !0) }; b.prototype.disable = function () { this.disabled = !0 }; b.prototype.pend = function (a) { this.markedPending = !0; a && (this.result.pendingReason = a) }; b.prototype.getResult = function () {
        this.result.status =
            this.status(); return this.result
    }; b.prototype.status = function (a) { return this.disabled || !1 === a ? "disabled" : this.markedPending ? "pending" : 0 < this.result.failedExpectations.length ? "failed" : "passed" }; b.prototype.isExecutable = function () { return !this.disabled }; b.prototype.getFullName = function () { return this.getSpecName(this) }; var e = function (a) { a = a.toString(); var c = a.indexOf(b.pendingSpecExceptionMessage) + b.pendingSpecExceptionMessage.length; return a.substr(c) }; b.pendingSpecExceptionMessage = "=> marked Pending";
    b.isPendingSpecException = function (a) { return !(!a || !a.toString || -1 === a.toString().indexOf(b.pendingSpecExceptionMessage)) }; return b
}; void 0 == typeof window && "object" == typeof exports && (exports.Spec = jasmineRequire.Spec);
getJasmineRequireObj().Order = function () { return function (a) { function b(a) { return a } function e(a) { a = a.slice(); a.sort(function (a, b) { return d(c + a.id) - d(c + b.id) }); return a } function d(a) { var b, c; for (b = c = 0; c < a.length; ++c)b += a.charCodeAt(c), b += b << 10, b ^= b >> 6; b += b << 3; b ^= b >> 11; return b + (b << 15) } this.random = "random" in a ? a.random : !0; var c = this.seed = a.seed || String(Math.random()).slice(-5); this.sort = this.random ? e : b } };
getJasmineRequireObj().Env = function (a) {
    return function (b) {
        function e(a) { J++; 20 <= J ? (J = 0, k(a, 0)) : a() } function d(a, b) { var c = q; c.addChild(a); q = a; var d = null; try { b.call(a) } catch (e) { d = e } d && f.it("encountered a declaration exception", function () { throw d; }); q = c } function c() { var a; a: { for (a = q; a;) { if (a.isFocused) { a = a.id; break a } a = a.parentSuite } a = null } if (a) for (var b = 0; b < C.length; b++)if (C[b] === a) { C.splice(b, 1); break } } b = b || {}; var f = this; b = b.global || a.getGlobal(); var h = 0, g = !0, k = a.getGlobal().setTimeout, m = a.getGlobal().clearTimeout;
        this.clock = new a.Clock(b, function () { return new a.DelayedFunctionScheduler }, new a.MockDate(b)); var p = {}, n = null, l = [], q = null, t = !1, F = !1, z = null, w = function () { return n || l[l.length - 1] }, u = new a.ReportDispatcher("jasmineStarted jasmineDone suiteStarted suiteDone specStarted specDone".split(" ")); this.specFilter = function () { return !0 }; this.addCustomEqualityTester = function (a) { if (!w()) throw Error("Custom Equalities must be added in a before function or a spec"); p[w().id].customEqualityTesters.push(a) }; this.addMatchers =
            function (a) { if (!w()) throw Error("Matchers must be added in a before function or a spec"); var b = p[w().id].customMatchers, c; for (c in a) b[c] = a[c] }; a.Expectation.addCoreMatchers(a.matchers); var G = 0, D = 0, v = function (b, c) { return a.Expectation.Factory({ util: a.matchersUtil, customEqualityTesters: p[c.id].customEqualityTesters, customMatchers: p[c.id].customMatchers, actual: b, addExpectationResult: function (a, b) { return c.addExpectationResult(a, b) } }) }, r = function (b, c) {
                var d = { spies: [], customEqualityTesters: [], customMatchers: {} };
                p[c] && (d.customEqualityTesters = a.util.clone(p[c].customEqualityTesters), d.customMatchers = a.util.clone(p[c].customMatchers)); p[b] = d
            }, x = function (a) { I.clearSpies(); delete p[a] }, E = function (a) { return function () { for (var b = [], c = []; a;)b = b.concat(a.beforeFns), c = c.concat(a.afterFns), a = a.parentSuite; return { befores: b.reverse(), afters: c } } }, H = a.buildExpectationResult, y = new a.ExceptionFormatter, A = function (a) { a.messageFormatter = y.message; a.stackFormatter = y.stack; return H(a) }; this.catchExceptions = function (a) {
                return g =
                    !!a
            }; this.catchingExceptions = function () { return g }; var J = 0, N = function (b) { return a.Spec.isPendingSpecException(b) || g }; this.throwOnExpectationFailure = function (a) { t = !!a }; this.throwingExpectationFailures = function () { return t }; this.randomizeTests = function (a) { F = !!a }; this.randomTests = function () { return F }; this.seed = function (a) { a && (z = a); return z }; var L = function (b) { b.catchException = N; b.clearStack = b.clearStack || e; b.timeout = { setTimeout: k, clearTimeout: m }; b.fail = f.fail; (new a.QueueRunner(b)).execute() }, B = new a.Suite({
                env: this,
                id: "suite" + D++, description: "Jasmine__TopLevel__Suite", expectationFactory: v, expectationResultFactory: A
            }); r(B.id); q = B; this.topSuite = function () { return B }; this.execute = function (b) {
                b || (b = C.length ? C : [B.id]); var c = new a.Order({ random: F, seed: z }); b = new a.TreeProcessor({ tree: B, runnableIds: b, queueRunnerFactory: L, nodeStart: function (a) { l.push(a); r(a.id, a.parentSuite.id); u.suiteStarted(a.result) }, nodeComplete: function (a, b) { a.disabled || x(a.id); l.pop(); u.suiteDone(b) }, orderChildren: function (a) { return c.sort(a.children) } });
                if (!b.processTree().valid) throw Error("Invalid order: would cause a beforeAll or afterAll to be run multiple times"); u.jasmineStarted({ totalSpecsDefined: h }); l.push(B); b.execute(function () { x(B.id); l.pop(); u.jasmineDone({ order: c, failedExpectations: B.result.failedExpectations }) })
            }; this.addReporter = function (a) { u.addReporter(a) }; this.provideFallbackReporter = function (a) { u.provideFallbackReporter(a) }; this.clearReporters = function () { u.clearReporters() }; var I = new a.SpyRegistry({
                currentSpies: function () {
                    if (!w()) throw Error("Spies must be created in a before function or a spec");
                    return p[w().id].spies
                }
            }); this.allowRespy = function (a) { I.allowRespy(a) }; this.spyOn = function () { return I.spyOn.apply(I, arguments) }; var K = function (b) { return new a.Suite({ env: f, id: "suite" + D++, description: b, parentSuite: q, expectationFactory: v, expectationResultFactory: A, throwOnExpectationFailure: t }) }; this.describe = function (a, b) { var c = K(a); if (0 < b.length) throw Error("describe does not expect any arguments"); q.markedPending && c.pend(); d(c, b); return c }; this.xdescribe = function (a, b) { var c = K(a); c.pend(); d(c, b); return c };
        var C = []; this.fdescribe = function (a, b) { var f = K(a); f.isFocused = !0; C.push(f.id); c(); d(f, b); return f }; var M = function (b, c, d, e) {
            h++; var g = new a.Spec({
                id: "spec" + G++, beforeAndAfterFns: E(d), expectationFactory: v, resultCallback: function (a) { x(g.id); n = null; u.specDone(a) }, getSpecName: function (a) { a = [a.description]; var b = d.getFullName(); "" !== b && a.unshift(b); return a.join(" ") }, onStart: function (a) { n = a; r(a.id, d.id); u.specStarted(a.result) }, description: b, expectationResultFactory: A, queueRunnerFactory: L, userContext: function () { return d.clonedSharedUserContext() },
                queueableFn: { fn: c, timeout: function () { return e || a.DEFAULT_TIMEOUT_INTERVAL } }, throwOnExpectationFailure: t
            }); f.specFilter(g) || g.disable(); return g
        }; this.it = function (a, b, c) { a = M(a, b, q, c); q.markedPending && a.pend(); q.addChild(a); return a }; this.xit = function () { var a = this.it.apply(this, arguments); a.pend("Temporarily disabled with xit"); return a }; this.fit = function (a, b, d) { a = M(a, b, q, d); q.addChild(a); C.push(a.id); c(); return a }; this.expect = function (a) {
            if (!w()) throw Error("'expect' was used when there was no current spec, this could be because an asynchronous test timed out");
            return w().expect(a)
        }; this.beforeEach = function (b, c) { q.beforeEach({ fn: b, timeout: function () { return c || a.DEFAULT_TIMEOUT_INTERVAL } }) }; this.beforeAll = function (b, c) { q.beforeAll({ fn: b, timeout: function () { return c || a.DEFAULT_TIMEOUT_INTERVAL } }) }; this.afterEach = function (b, c) { q.afterEach({ fn: b, timeout: function () { return c || a.DEFAULT_TIMEOUT_INTERVAL } }) }; this.afterAll = function (b, c) { q.afterAll({ fn: b, timeout: function () { return c || a.DEFAULT_TIMEOUT_INTERVAL } }) }; this.pending = function (b) {
            var c = a.Spec.pendingSpecExceptionMessage;
            b && (c += b); throw c;
        }; this.fail = function (a) { var b = "Failed"; a && (b = b + ": " + (a.message || a)); w().addExpectationResult(!1, { matcherName: "", passed: !1, expected: "", actual: "", message: b, error: a && a.message ? a : null }) }
    }
};
getJasmineRequireObj().JsApiReporter = function () {
    var a = { start: function () { }, elapsed: function () { return 0 } }; return function (b) {
        var e = b.timer || a, d = "loaded"; this.finished = this.started = !1; this.runDetails = {}; this.jasmineStarted = function () { this.started = !0; d = "started"; e.start() }; var c; this.jasmineDone = function (a) { this.finished = !0; this.runDetails = a; c = e.elapsed(); d = "done" }; this.status = function () { return d }; var f = [], h = {}; this.suiteStarted = function (a) { h[a.id] = a }; this.suiteDone = function (a) { f.push(a); h[a.id] = a }; this.suiteResults =
            function (a, b) { return f.slice(a, a + b) }; this.suites = function () { return h }; var g = []; this.specDone = function (a) { g.push(a) }; this.specResults = function (a, b) { return g.slice(a, a + b) }; this.specs = function () { return g }; this.executionTime = function () { return c }
    }
};
getJasmineRequireObj().CallTracker = function (a) {
    return function () {
        var b = [], e = {}; this.track = function (d) { if (e.cloneArgs) { for (var c = [], f = a.util.argsToArray(d.args), h = 0; h < f.length; h++)Object.prototype.toString.apply(f[h]).match(/^\[object/) ? c.push(a.util.clone(f[h])) : c.push(f[h]); d.args = c } b.push(d) }; this.any = function () { return !!b.length }; this.count = function () { return b.length }; this.argsFor = function (a) { return (a = b[a]) ? a.args : [] }; this.all = function () { return b }; this.allArgs = function () {
            for (var a = [], c = 0; c < b.length; c++)a.push(b[c].args);
            return a
        }; this.first = function () { return b[0] }; this.mostRecent = function () { return b[b.length - 1] }; this.reset = function () { b = [] }; this.saveArgumentsByValue = function () { e.cloneArgs = !0 }
    }
};
getJasmineRequireObj().Clock = function () {
    return function (a, b, e) {
        function d(a, b) { for (var c in b) a[c] = b[c] } var c = this, f = { setTimeout: a.setTimeout, clearTimeout: a.clearTimeout, setInterval: a.setInterval, clearInterval: a.clearInterval }, h = { setTimeout: function (a, b) { return k.scheduleFunction(a, b, Array.prototype.slice.call(arguments, 2)) }, clearTimeout: function (a) { return k.removeFunctionWithId(a) }, setInterval: function (a, b) { return k.scheduleFunction(a, b, Array.prototype.slice.call(arguments, 2), !0) }, clearInterval: function (a) { return k.removeFunctionWithId(a) } },
            g = !1, k, m; c.install = function () { if (a.setTimeout !== f.setTimeout || a.clearTimeout !== f.clearTimeout || a.setInterval !== f.setInterval || a.clearInterval !== f.clearInterval) throw Error("Jasmine Clock was unable to install over custom global timer functions. Is the clock already installed?"); d(a, h); m = h; k = b(); g = !0; return c }; c.uninstall = function () { k = null; e.uninstall(); d(a, f); m = f; g = !1 }; c.withMock = function (a) { this.install(); try { a() } finally { this.uninstall() } }; c.mockDate = function (a) { e.install(a) }; c.setTimeout = function (b,
                c, d) { if (!(f.setTimeout || f.setInterval).apply) { if (2 < arguments.length) throw Error("IE < 9 cannot support extra params to setTimeout without a polyfill"); return m.setTimeout(b, c) } return Function.prototype.apply.apply(m.setTimeout, [a, arguments]) }; c.setInterval = function (b, c, d) {
                    if (!(f.setTimeout || f.setInterval).apply) { if (2 < arguments.length) throw Error("IE < 9 cannot support extra params to setInterval without a polyfill"); return m.setInterval(b, c) } return Function.prototype.apply.apply(m.setInterval, [a,
                        arguments])
                }; c.clearTimeout = function (b) { return Function.prototype.call.apply(m.clearTimeout, [a, b]) }; c.clearInterval = function (b) { return Function.prototype.call.apply(m.clearInterval, [a, b]) }; c.tick = function (a) { if (g) k.tick(a, function (a) { e.tick(a) }); else throw Error("Mock clock is not installed, use jasmine.clock().install()"); }; return c
    }
};
getJasmineRequireObj().DelayedFunctionScheduler = function () {
    return function () {
        function a(a, b) { for (var c = -1, d = 0; d < a.length; ++d)if (b(a[d])) { c = d; break } return c } function b(b) { var c = Number(b); b = a(f, function (a) { return a === c }); -1 < b && f.splice(b, 1) } function e(a, b) { for (var c = 0; c < a.length; ++c)b(a[c]) } function d(a, b) {
            b = b || function () { }; if (0 === f.length || f[0] > a) b(a - g); else {
                do {
                    var d = f.shift(); b(d - g); g = d; d = h[g]; delete h[g]; e(d, function (a) {
                        a.recurring && c.scheduleFunction(a.funcToCall, a.millis, a.params, !0, a.timeoutKey,
                            a.runAtMillis + a.millis)
                    }); e(d, function (a) { a.funcToCall.apply(null, a.params || []) })
                } while (0 < f.length && g !== a && f[0] <= a); g !== a && b(a - g)
            }
        } var c = this, f = [], h = {}, g = 0, k = 0; c.tick = function (a, b) { var c = g + (a || 0); d(c, b); g = c }; c.scheduleFunction = function (a, b, c, d, e, t) { b = b || 0; e = e || ++k; t = t || g + b; b = { runAtMillis: t, funcToCall: "string" === typeof a ? function () { return eval(a) } : a, recurring: d, params: c, timeoutKey: e, millis: b }; t in h ? h[t].push(b) : (h[t] = [b], f.push(t), f.sort(function (a, b) { return a - b })); return e }; c.removeFunctionWithId =
            function (c) { for (var d in h) { var f = h[d], e = a(f, function (a) { return a.timeoutKey === c }); if (-1 < e) { 1 === f.length ? (delete h[d], b(d)) : f.splice(e, 1); break } } }; return c
    }
};
getJasmineRequireObj().ExceptionFormatter = function () { return function () { this.message = function (a) { var b = "", b = a.name && a.message ? b + (a.name + ": " + a.message) : b + (a.toString() + " thrown"); if (a.fileName || a.sourceURL) b += " in " + (a.fileName || a.sourceURL); if (a.line || a.lineNumber) b += " (line " + (a.line || a.lineNumber) + ")"; return b }; this.stack = function (a) { return a ? a.stack : null } } };
getJasmineRequireObj().Expectation = function () {
    function a(b) { this.util = b.util || { buildFailureMessage: function () { } }; this.customEqualityTesters = b.customEqualityTesters || []; this.actual = b.actual; this.addExpectationResult = b.addExpectationResult || function () { }; this.isNot = b.isNot; b = b.customMatchers || {}; for (var e in b) this[e] = a.prototype.wrapCompare(e, b[e]) } a.prototype.wrapCompare = function (a, e) {
        return function () {
            function d() { var a = g.compare.apply(null, c); a.pass = !a.pass; return a } var c = Array.prototype.slice.call(arguments,
                0), f = c.slice(0), h = ""; c.unshift(this.actual); var g = e(this.util, this.customEqualityTesters), k = g.compare; this.isNot && (k = g.negativeCompare || d); k = k.apply(null, c); k.pass || (k.message ? h = "[object Function]" === Object.prototype.toString.apply(k.message) ? k.message() : k.message : (c.unshift(this.isNot), c.unshift(a), h = this.util.buildFailureMessage.apply(null, c))); 1 == f.length && (f = f[0]); this.addExpectationResult(k.pass, { matcherName: a, passed: k.pass, message: h, actual: this.actual, expected: f })
        }
    }; a.addCoreMatchers = function (b) {
        var e =
            a.prototype, d; for (d in b) e[d] = e.wrapCompare(d, b[d])
    }; a.Factory = function (b) { b = b || {}; var e = new a(b); b.isNot = !0; e.not = new a(b); return e }; return a
};
getJasmineRequireObj().buildExpectationResult = function () { return function (a) { function b() { return a.passed ? "Passed." : a.message ? a.message : a.error ? e(a.error) : "" } var e = a.messageFormatter || function () { }, d = a.stackFormatter || function () { }, c = { matcherName: a.matcherName, message: b(), stack: function () { if (a.passed) return ""; var c = a.error; if (!c) try { cc.log("                \u9519\u8bef\u4fe1\u606f\uff1a" + b()) } catch (e) { c = e } return d(c) } (), passed: a.passed }; c.passed || (c.expected = a.expected, c.actual = a.actual); return c } };
getJasmineRequireObj().MockDate = function () {
    return function (a) {
        function b() {
            switch (arguments.length) {
                case 0: return new d(e); case 1: return new d(arguments[0]); case 2: return new d(arguments[0], arguments[1]); case 3: return new d(arguments[0], arguments[1], arguments[2]); case 4: return new d(arguments[0], arguments[1], arguments[2], arguments[3]); case 5: return new d(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]); case 6: return new d(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4],
                    arguments[5]); default: return new d(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6])
            }
        } var e = 0; if (!a || !a.Date) return this.install = function () { }, this.tick = function () { }, this.uninstall = function () { }, this; var d = a.Date; this.install = function (c) { e = c instanceof d ? c.getTime() : (new d).getTime(); a.Date = b }; this.tick = function (a) { e += a || 0 }; this.uninstall = function () { e = 0; a.Date = d }; (function () {
            b.prototype = d.prototype; b.now = function () {
                if (d.now) return e; throw Error("Browser does not support Date.now()");
            }; b.toSource = d.toSource; b.toString = d.toString; b.parse = d.parse; b.UTC = d.UTC
        })(); return this
    }
};
getJasmineRequireObj().pp = function (a) {
    function b() { this.ppNestLevel_ = 0; this.seen = [] } function e() { b.call(this); this.string = "" } b.prototype.format = function (b) {
        this.ppNestLevel_++; try {
            a.util.isUndefined(b) ? this.emitScalar("undefined") : null === b ? this.emitScalar("null") : 0 === b && -Infinity === 1 / b ? this.emitScalar("-0") : b === a.getGlobal() ? this.emitScalar("<global>") : b.jasmineToString ? this.emitScalar(b.jasmineToString()) : "string" === typeof b ? this.emitString(b) : a.isSpy(b) ? this.emitScalar("spy on " + b.and.identity()) :
                b instanceof RegExp ? this.emitScalar(b.toString()) : "function" === typeof b ? this.emitScalar("Function") : "number" === typeof b.nodeType ? this.emitScalar("HTMLNode") : b instanceof Date ? this.emitScalar("Date(" + b + ")") : !b.toString || "object" !== typeof b || b instanceof Array || b.toString === Object.prototype.toString ? a.util.arrayContains(this.seen, b) ? this.emitScalar("<circular reference: " + (a.isArray_(b) ? "Array" : "Object") + ">") : a.isArray_(b) || a.isA_("Object", b) ? (this.seen.push(b), a.isArray_(b) ? this.emitArray(b) : this.emitObject(b),
                    this.seen.pop()) : this.emitScalar(b.toString()) : this.emitScalar(b.toString())
        } finally { this.ppNestLevel_-- }
    }; b.prototype.iterateObject = function (b, c) { for (var f in b) Object.prototype.hasOwnProperty.call(b, f) && c(f, b.__lookupGetter__ ? !a.util.isUndefined(b.__lookupGetter__(f)) && null !== b.__lookupGetter__(f) : !1) }; b.prototype.emitArray = a.unimplementedMethod_; b.prototype.emitObject = a.unimplementedMethod_; b.prototype.emitScalar = a.unimplementedMethod_; b.prototype.emitString = a.unimplementedMethod_; a.util.inherit(e,
        b); e.prototype.emitScalar = function (a) { this.append(a) }; e.prototype.emitString = function (a) { this.append("'" + a + "'") }; e.prototype.emitArray = function (b) {
            if (this.ppNestLevel_ > a.MAX_PRETTY_PRINT_DEPTH) this.append("Array"); else {
                var c = Math.min(b.length, a.MAX_PRETTY_PRINT_ARRAY_LENGTH); this.append("[ "); for (var f = 0; f < c; f++)0 < f && this.append(", "), this.format(b[f]); b.length > c && this.append(", ..."); var e = this, g = 0 === b.length; this.iterateObject(b, function (a, c) {
                    a.match(/^\d+$/) || (g ? g = !1 : e.append(", "), e.formatProperty(b,
                        a, c))
                }); this.append(" ]")
            }
        }; e.prototype.emitObject = function (b) { var c = b.constructor ? a.fnNameFor(b.constructor) : "null"; this.append(c); if (!(this.ppNestLevel_ > a.MAX_PRETTY_PRINT_DEPTH)) { var f = this; this.append("({ "); var e = !0; this.iterateObject(b, function (a, c) { e ? e = !1 : f.append(", "); f.formatProperty(b, a, c) }); this.append(" })") } }; e.prototype.formatProperty = function (a, b, f) { this.append(b); this.append(": "); f ? this.append("<getter>") : this.format(a[b]) }; e.prototype.append = function (a) { this.string += a }; return function (a) {
            var b =
                new e; b.format(a); return b.string
        }
};
getJasmineRequireObj().QueueRunner = function (a) {
    function b(a) { var b = !1; return function () { b || (b = !0, a()); return null } } function e(a) { this.queueableFns = a.queueableFns || []; this.onComplete = a.onComplete || function () { }; this.clearStack = a.clearStack || function (a) { a() }; this.onException = a.onException || function () { }; this.catchException = a.catchException || function () { return !0 }; this.userContext = a.userContext || {}; this.timeout = a.timeout || { setTimeout: setTimeout, clearTimeout: clearTimeout }; this.fail = a.fail || function () { } } e.prototype.execute =
        function () { this.run(this.queueableFns, 0) }; e.prototype.run = function (d, c) {
            function f(a) { try { a.fn.call(m.userContext) } catch (b) { g(b, a) } } function e(c) {
                var f = b(function () { Function.prototype.apply.apply(m.timeout.clearTimeout, [a.getGlobal(), [h]]); m.run(d, p + 1) }), h; f.fail = function () { m.fail.apply(null, arguments); f() }; c.timeout && (h = Function.prototype.apply.apply(m.timeout.setTimeout, [a.getGlobal(), [function () {
                    m.onException(Error("Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL."));
                    f()
                }, c.timeout()]])); try { c.fn.call(m.userContext, f) } catch (k) { g(k, c), f() }
            } function g(a, b) { m.onException(a); if (!m.catchException(a)) throw a; } var k = d.length, m = this, p; for (p = c; p < k; p++) { var n = d[p]; if (0 < n.fn.length) { e(n); return } f(n) } p >= k && this.clearStack(this.onComplete)
        }; return e
};
getJasmineRequireObj().ReportDispatcher = function () { return function (a) { a = a || []; for (var b = 0; b < a.length; b++) { var e = a[b]; this[e] = function (a) { return function () { var b = arguments; 0 === d.length && null !== c && d.push(c); for (var e = 0; e < d.length; e++) { var k = d[e]; k[a] && k[a].apply(k, b) } } } (e) } var d = [], c = null; this.addReporter = function (a) { d.push(a) }; this.provideFallbackReporter = function (a) { c = a }; this.clearReporters = function () { d = [] }; return this } };
getJasmineRequireObj().SpyRegistry = function (a) {
    var b = a.formatErrorMsg("<spyOn>", "spyOn(<object>, <methodName>)"); return function (e) {
        e = e || {}; var d = e.currentSpies || function () { return [] }; this.allowRespy = function (a) { this.respy = a }; this.spyOn = function (c, f) {
            if (a.util.isUndefined(c)) throw Error(b("could not find an object to spy upon for " + f + "()")); if (a.util.isUndefined(f)) throw Error(b("No method name supplied")); if (a.util.isUndefined(c[f])) throw Error(b(f + "() method does not exist")); if (c[f] && a.isSpy(c[f])) {
                if (this.respy) return c[f];
                throw Error(b(f + " has already been spied upon"));
            } var e; try { e = Object.getOwnPropertyDescriptor(c, f) } catch (m) { } if (e && !e.writable && !e.set) throw Error(b(f + " is not declared writable or has no setter")); var g = c[f]; e = a.createSpy(f, g); var k; k = Object.prototype.hasOwnProperty.call(c, f) ? function () { c[f] = g } : function () { delete c[f] || (c[f] = g) }; d().push({ restoreObjectToOriginalState: k }); return c[f] = e
        }; this.clearSpies = function () { for (var a = d(), b = a.length - 1; 0 <= b; b--)a[b].restoreObjectToOriginalState() }
    }
};
getJasmineRequireObj().SpyStrategy = function (a) {
    return function (b) {
        b = b || {}; var e = b.name || "unknown", d = b.fn || function () { }, c = b.getSpy || function () { }, f = function () { }; this.identity = function () { return e }; this.exec = function () { return f.apply(this, arguments) }; this.callThrough = function () { f = d; return c() }; this.returnValue = function (a) { f = function () { return a }; return c() }; this.returnValues = function () { var a = Array.prototype.slice.call(arguments); f = function () { return a.shift() }; return c() }; this.throwError = function (a) {
            var b =
                a instanceof Error ? a : Error(a); f = function () { throw b; }; return c()
        }; this.callFake = function (b) { if (!a.isFunction_(b)) throw Error("Argument passed to callFake should be a function, got " + b); f = b; return c() }; this.stub = function (a) { f = function () { }; return c() }
    }
};
getJasmineRequireObj().Suite = function (a) {
    function b(a) { this.env = a.env; this.id = a.id; this.parentSuite = a.parentSuite; this.description = a.description; this.expectationFactory = a.expectationFactory; this.expectationResultFactory = a.expectationResultFactory; this.throwOnExpectationFailure = !!a.throwOnExpectationFailure; this.beforeFns = []; this.afterFns = []; this.beforeAllFns = []; this.afterAllFns = []; this.disabled = !1; this.children = []; this.result = { id: this.id, description: this.description, fullName: this.getFullName(), failedExpectations: [] } }
    function e(a) { return a && a[0].result.status } function d(a) { var b = {}, d; for (d in a) a.hasOwnProperty(d) && (b[d] = a[d]); return b } b.prototype.expect = function (a) { return this.expectationFactory(a, this) }; b.prototype.getFullName = function () { for (var a = [], b = this; b; b = b.parentSuite)b.parentSuite && a.unshift(b.description); return a.join(" ") }; b.prototype.disable = function () { this.disabled = !0 }; b.prototype.pend = function (a) { this.markedPending = !0 }; b.prototype.beforeEach = function (a) { this.beforeFns.unshift(a) }; b.prototype.beforeAll =
        function (a) { this.beforeAllFns.push(a) }; b.prototype.afterEach = function (a) { this.afterFns.unshift(a) }; b.prototype.afterAll = function (a) { this.afterAllFns.push(a) }; b.prototype.addChild = function (a) { this.children.push(a) }; b.prototype.status = function () { return this.disabled ? "disabled" : this.markedPending ? "pending" : 0 < this.result.failedExpectations.length ? "failed" : "finished" }; b.prototype.isExecutable = function () { return !this.disabled }; b.prototype.canBeReentered = function () {
            return 0 === this.beforeAllFns.length && 0 ===
                this.afterAllFns.length
        }; b.prototype.getResult = function () { this.result.status = this.status(); return this.result }; b.prototype.sharedUserContext = function () { this.sharedContext || (this.sharedContext = this.parentSuite ? d(this.parentSuite.sharedUserContext()) : {}); return this.sharedContext }; b.prototype.clonedSharedUserContext = function () { return d(this.sharedUserContext()) }; b.prototype.onException = function () {
            if (!(arguments[0] instanceof a.errors.ExpectationFailed)) if (e(this.children)) this.result.failedExpectations.push(this.expectationResultFactory({
                matcherName: "",
                passed: !1, expected: "", actual: "", error: arguments[0]
            })); else for (var b = 0; b < this.children.length; b++) { var d = this.children[b]; d.onException.apply(d, arguments) }
        }; b.prototype.addExpectationResult = function () { if (e(this.children) && !arguments[0]) { if (this.result.failedExpectations.push(this.expectationResultFactory(arguments[1])), this.throwOnExpectationFailure) throw new a.errors.ExpectationFailed; } else for (var b = 0; b < this.children.length; b++) { var d = this.children[b]; try { d.addExpectationResult.apply(d, arguments) } catch (h) { } } };
    return b
}; void 0 == typeof window && "object" == typeof exports && (exports.Suite = jasmineRequire.Suite); getJasmineRequireObj().Timer = function () { var a = function (a) { return function () { return (new a).getTime() } } (Date); return function (b) { b = b || {}; var e = b.now || a, d; this.start = function () { d = e() }; this.elapsed = function () { return e() - d } } };
getJasmineRequireObj().TreeProcessor = function () {
    return function (a) {
        function b(a, c) {
            var d; a: { for (var f = 0; f < h.length; f++)if (h[f] === a.id) { d = f; break a } d = void 0 } void 0 !== d && (c = !0); c = c && a.isExecutable(); if (a.children) {
                for (var f = !1, g = p(a), k = 0; k < g.length; k++) { var m = g[k]; b(m, c); if (!n.valid) return; m = n[m.id]; f = f || m.executable } n[a.id] = { executable: f }; f = n[a.id]; d = { index: 0, owner: a, nodes: [], min: void 0 === d ? Infinity : d, max: void 0 === d ? -Infinity : d }; for (var k = [d], m = -Infinity, g = e(g), l = 0; l < g.length; l++) {
                    var v = g[l], r = v.max,
                        x = v.min; -Infinity !== m && Infinity !== x && m < x - 1 && (d = { index: k.length, owner: a, nodes: [], min: Infinity, max: -Infinity }, k.push(d)); d.nodes.push(v); d.min = Math.min(d.min, x); d.max = Math.max(d.max, r); m = r
                } f.segments = k; !a.canBeReentered() && 1 < n[a.id].segments.length && (n = { valid: !1 })
            } else n[a.id] = { executable: c && a.isExecutable(), segments: [{ index: 0, owner: a, nodes: [a], min: void 0 === d ? Infinity : d, max: void 0 === d ? -Infinity : d }] }
        } function e(a) {
            for (var b = [], c = [], d = 0; d < a.length; d++)for (var f = n[a[d].id].segments, e = 0; e < f.length; e++) {
                var g =
                    f[e]; Infinity === g.min ? c.push(g) : b.push(g)
            } b.sort(function (a, b) { return a.min - b.min }); return b.concat(c)
        } function d(a, b) { return a.children ? { fn: function (d) { k(a); g({ onComplete: function () { m(a, a.getResult()); d() }, queueableFns: c(a, b), userContext: a.sharedUserContext(), onException: function () { a.onException.apply(a, arguments) } }) } } : { fn: function (b) { a.execute(b, n[a.id].executable) } } } function c(a, b) {
            for (var c = [], f = n[a.id].segments[b].nodes, e = 0; e < f.length; e++)c.push(d(f[e].owner, f[e].index)); return n[a.id].executable ?
                a.beforeAllFns.concat(c).concat(a.afterAllFns) : c
        } var f = a.tree, h = a.runnableIds, g = a.queueRunnerFactory, k = a.nodeStart || function () { }, m = a.nodeComplete || function () { }, p = a.orderChildren || function (a) { return a.children }, n = { valid: !0 }, l = !1; this.processTree = function () { b(f, !1); l = !0; return n }; this.execute = function (a) { l || this.processTree(); if (!n.valid) throw "invalid order"; var b = c(f, 0); g({ queueableFns: b, userContext: f.sharedUserContext(), onException: function () { f.onException.apply(f, arguments) }, onComplete: a }) }
    }
};
getJasmineRequireObj().Any = function (a) {
    function b(a) { if ("undefined" === typeof a) throw new TypeError("jasmine.any() expects to be passed a constructor function. Please pass one or use jasmine.anything() to match any object."); this.expectedObject = a } b.prototype.asymmetricMatch = function (a) {
        return this.expectedObject == String ? "string" == typeof a || a instanceof String : this.expectedObject == Number ? "number" == typeof a || a instanceof Number : this.expectedObject == Function ? "function" == typeof a || a instanceof Function :
            this.expectedObject == Object ? "object" == typeof a : this.expectedObject == Boolean ? "boolean" == typeof a : a instanceof this.expectedObject
    }; b.prototype.jasmineToString = function () { return "<jasmine.any(" + a.fnNameFor(this.expectedObject) + ")>" }; return b
}; getJasmineRequireObj().Anything = function (a) { function b() { } b.prototype.asymmetricMatch = function (b) { return !a.util.isUndefined(b) && null !== b }; b.prototype.jasmineToString = function () { return "<jasmine.anything>" }; return b };
getJasmineRequireObj().ArrayContaining = function (a) { function b(a) { this.sample = a } b.prototype.asymmetricMatch = function (b) { if ("[object Array]" !== Object.prototype.toString.call(this.sample)) throw Error("You must provide an array to arrayContaining, not '" + this.sample + "'."); for (var d = 0; d < this.sample.length; d++)if (!a.matchersUtil.contains(b, this.sample[d])) return !1; return !0 }; b.prototype.jasmineToString = function () { return "<jasmine.arrayContaining(" + jasmine.pp(this.sample) + ")>" }; return b };
getJasmineRequireObj().ObjectContaining = function (a) {
    function b(a) { this.sample = a } function e(a, b) { if (!a) return !1; if (Object.prototype.hasOwnProperty.call(a, b)) return !0; var f; f = Object.getPrototypeOf ? Object.getPrototypeOf(a) : a.constructor.prototype == a ? null : a.constructor.prototype; return e(f, b) } b.prototype.asymmetricMatch = function (b) {
        if ("object" !== typeof this.sample) throw Error("You must provide an object to objectContaining, not '" + this.sample + "'."); for (var c in this.sample) if (!e(b, c) || !a.matchersUtil.equals(this.sample[c],
            b[c])) return !1; return !0
    }; b.prototype.jasmineToString = function () { return "<jasmine.objectContaining(" + a.pp(this.sample) + ")>" }; return b
}; getJasmineRequireObj().StringMatching = function (a) { function b(b) { if (!a.isString_(b) && !a.isA_("RegExp", b)) throw Error("Expected is not a String or a RegExp"); this.regexp = new RegExp(b) } b.prototype.asymmetricMatch = function (a) { return this.regexp.test(a) }; b.prototype.jasmineToString = function () { return "<jasmine.stringMatching(" + this.regexp + ")>" }; return b };
getJasmineRequireObj().errors = function () { function a() { } a.prototype = Error(); a.prototype.constructor = a; return { ExpectationFailed: a } }; getJasmineRequireObj().formatErrorMsg = function () { return function (a, b) { var e = b ? "\nUsage: " + b : ""; return function (b) { return a + " : " + b + e } } };
getJasmineRequireObj().matchersUtil = function (a) {
    function b(b, d) { var e = b && a.isA_("Function", b.asymmetricMatch), g = d && a.isA_("Function", d.asymmetricMatch); if (!e || !g) { if (e) return b.asymmetricMatch(d); if (g) return d.asymmetricMatch(b) } } function e(c, f, h, g, k) {
        function m(a, b) { var c; if (Object.keys) c = Object.keys(a); else { c = []; for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && c.push(d) } if (!b) return c; d = []; if (0 === c.length) return c; for (var f = 0; f < c.length; f++)c[f].match(/^[0-9]+$/) || d.push(c[f]); return d }
        var p = !0, n = b(c, f); if (!a.util.isUndefined(n)) return n; for (n = 0; n < k.length; n++) { var l = k[n](c, f); if (!a.util.isUndefined(l)) return l } if (c instanceof Error && f instanceof Error) return c.message == f.message; if (c === f) return 0 !== c || 1 / c == 1 / f; if (null === c || null === f) return c === f; n = Object.prototype.toString.call(c); if (n != Object.prototype.toString.call(f)) return !1; switch (n) {
            case "[object String]": return c == String(f); case "[object Number]": return c != +c ? f != +f : 0 === c ? 1 / c == 1 / f : c == +f; case "[object Date]": case "[object Boolean]": return +c ==
                +f; case "[object RegExp]": return c.source == f.source && c.global == f.global && c.multiline == f.multiline && c.ignoreCase == f.ignoreCase
        }if ("object" != typeof c || "object" != typeof f) return !1; var l = a.isDomNode(c), q = a.isDomNode(f); if (l && q) { if (c.isEqualNode) return c.isEqualNode(f); h = c instanceof Element; g = f instanceof Element; return h && g ? c.outerHTML == f.outerHTML : h || g ? !1 : c.innerText == f.innerText && c.textContent == f.textContent } if (l || q) return !1; for (l = h.length; l--;)if (h[l] == c) return g[l] == f; h.push(c); g.push(f); l = 0; if ("[object Array]" ==
            n) { l = c.length; if (l !== f.length) return !1; for (; l--;)if (p = e(c[l], f[l], h, g, k), !p) return !1 } else if (l = c.constructor, q = f.constructor, !(l === q || d(l) && d(q))) return !1; q = m(c, "[object Array]" == n); l = q.length; if (m(f, "[object Array]" == n).length !== l) return !1; for (; l--;)if (p = q[l], p = Object.prototype.hasOwnProperty.call(f, p) && e(c[p], f[p], h, g, k), !p) return !1; h.pop(); g.pop(); return p
    } function d(a) { return "function" === typeof a && a instanceof a } return {
        equals: function (a, b, d) { d = d || []; return e(a, b, [], [], d) }, contains: function (a,
            b, d) { d = d || []; if ("[object Array]" === Object.prototype.toString.apply(a) || a && !a.indexOf) { for (var g = 0; g < a.length; g++)if (e(a[g], b, [], [], d)) return !0; return !1 } return !!a && 0 <= a.indexOf(b) }, buildFailureMessage: function () { var b = Array.prototype.slice.call(arguments, 0), d = b[0], e = b[1], g = b[2], b = b.slice(3), d = d.replace(/[A-Z]/g, function (a) { return " " + a.toLowerCase() }), e = "Expected " + a.pp(g) + (e ? " not " : " ") + d; if (0 < b.length) for (g = 0; g < b.length; g++)0 < g && (e += ","), e += " " + a.pp(b[g]); return e + "." }
    }
};
getJasmineRequireObj().toBe = function () { return function () { return { compare: function (a, b) { return { pass: a === b } } } } }; getJasmineRequireObj().toBeCloseTo = function () { return function () { return { compare: function (a, b, e) { 0 !== e && (e = e || 2); return { pass: Math.abs(b - a) < Math.pow(10, -e) / 2 } } } } }; getJasmineRequireObj().toBeDefined = function () { return function () { return { compare: function (a) { return { pass: void 0 !== a } } } } }; getJasmineRequireObj().toBeFalsy = function () { return function () { return { compare: function (a) { return { pass: !a } } } } };
getJasmineRequireObj().toBeGreaterThan = function () { return function () { return { compare: function (a, b) { return { pass: a > b } } } } }; getJasmineRequireObj().toBeGreaterThanOrEqual = function () { return function () { return { compare: function (a, b) { return { pass: a >= b } } } } }; getJasmineRequireObj().toBeLessThan = function () { return function () { return { compare: function (a, b) { return { pass: a < b } } } } }; getJasmineRequireObj().toBeLessThanOrEqual = function () { return function () { return { compare: function (a, b) { return { pass: a <= b } } } } };
getJasmineRequireObj().toBeNaN = function (a) { return function () { return { compare: function (b) { var e = { pass: b !== b }; e.message = e.pass ? "Expected actual not to be NaN." : function () { return "Expected " + a.pp(b) + " to be NaN." }; return e } } } }; getJasmineRequireObj().toBeNull = function () { return function () { return { compare: function (a) { return { pass: null === a } } } } }; getJasmineRequireObj().toBeTruthy = function () { return function () { return { compare: function (a) { return { pass: !!a } } } } };
getJasmineRequireObj().toBeUndefined = function () { return function () { return { compare: function (a) { return { pass: void 0 === a } } } } }; getJasmineRequireObj().toContain = function () { return function (a, b) { b = b || []; return { compare: function (e, d) { return { pass: a.contains(e, d, b) } } } } }; getJasmineRequireObj().toEqual = function () { return function (a, b) { b = b || []; return { compare: function (e, d) { var c = { pass: !1 }; c.pass = a.equals(e, d, b); return c } } } };
getJasmineRequireObj().toHaveBeenCalled = function (a) {
    var b = a.formatErrorMsg("<toHaveBeenCalled>", "expect(<spyObj>).toHaveBeenCalled()"); return function () {
        return {
            compare: function (e) {
                var d = {}; if (!a.isSpy(e)) throw Error(b("Expected a spy, but got " + a.pp(e) + ".")); if (1 < arguments.length) throw Error(b("Does not take arguments, use toHaveBeenCalledWith")); d.pass = e.calls.any(); d.message = d.pass ? "Expected spy " + e.and.identity() + " not to have been called." : "Expected spy " + e.and.identity() + " to have been called.";
                return d
            }
        }
    }
};
getJasmineRequireObj().toHaveBeenCalledTimes = function (a) {
    var b = a.formatErrorMsg("<toHaveBeenCalledTimes>", "expect(<spyObj>).toHaveBeenCalledTimes(<Number>)"); return function () {
        return {
            compare: function (e, d) {
                if (!a.isSpy(e)) throw Error(b("Expected a spy, but got " + a.pp(e) + ".")); var c = Array.prototype.slice.call(arguments, 0), f = { pass: !1 }; if (!a.isNumber_(d)) throw Error(b("The expected times failed is a required argument and must be a number.")); e = c[0]; var c = e.calls.count(), h = 1 === d ? "once" : d + " times"; f.pass =
                    c === d; f.message = f.pass ? "Expected spy " + e.and.identity() + " not to have been called " + h + ". It was called " + c + " times." : "Expected spy " + e.and.identity() + " to have been called " + h + ". It was called " + c + " times."; return f
            }
        }
    }
};
getJasmineRequireObj().toHaveBeenCalledWith = function (a) {
    var b = a.formatErrorMsg("<toHaveBeenCalledWith>", "expect(<spyObj>).toHaveBeenCalledWith(...arguments)"); return function (e, d) {
        return {
            compare: function () {
                var c = Array.prototype.slice.call(arguments, 0), f = c[0], h = c.slice(1), c = { pass: !1 }; if (!a.isSpy(f)) throw Error(b("Expected a spy, but got " + a.pp(f) + ".")); if (!f.calls.any()) return c.message = function () { return "Expected spy " + f.and.identity() + " to have been called with " + a.pp(h) + " but it was never called." },
                    c; e.contains(f.calls.allArgs(), h, d) ? (c.pass = !0, c.message = function () { return "Expected spy " + f.and.identity() + " not to have been called with " + a.pp(h) + " but it was." }) : c.message = function () { return "Expected spy " + f.and.identity() + " to have been called with " + a.pp(h) + " but actual calls were " + a.pp(f.calls.allArgs()).replace(/^\[ | \]$/g, "") + "." }; return c
            }
        }
    }
};
getJasmineRequireObj().toMatch = function (a) { var b = a.formatErrorMsg("<toMatch>", "expect(<expectation>).toMatch(<string> || <regexp>)"); return function () { return { compare: function (e, d) { if (!a.isString_(d) && !a.isA_("RegExp", d)) throw Error(b("Expected is not a String or a RegExp")); return { pass: (new RegExp(d)).test(e) } } } } };
getJasmineRequireObj().toThrow = function (a) {
    var b = a.formatErrorMsg("<toThrow>", "expect(function() {<expectation>}).toThrow()"); return function (e) {
        return {
            compare: function (d, c) {
                var f = { pass: !1 }, h = !1, g; if ("function" != typeof d) throw Error(b("Actual is not a Function")); try { d() } catch (k) { h = !0, g = k } if (!h) return f.message = "Expected function to throw an exception.", f; if (1 == arguments.length) return f.pass = !0, f.message = function () { return "Expected function not to throw, but it threw " + a.pp(g) + "." }, f; e.equals(g, c) ?
                    (f.pass = !0, f.message = function () { return "Expected function not to throw " + a.pp(c) + "." }) : f.message = function () { return "Expected function to throw " + a.pp(c) + ", but it threw " + a.pp(g) + "." }; return f
            }
        }
    }
};
getJasmineRequireObj().toThrowError = function (a) {
    var b = a.formatErrorMsg("<toThrowError>", "expect(function() {<expectation>}).toThrowError(<ErrorConstructor>, <message>)"); return function () {
        function e() {
            var c = null, f = null; if (2 == arguments.length) c = arguments[1], d(c) && (f = c, c = null); else if (2 < arguments.length && (f = arguments[1], c = arguments[2], !d(f))) throw Error(b("Expected error type is not an Error.")); if (c && !(c instanceof RegExp || "string" == typeof c)) {
                if (f) throw Error(b("Expected error message is not a string or RegExp."));
                throw Error(b("Expected is not an Error, string, or RegExp."));
            } return {
                errorTypeDescription: f ? a.fnNameFor(f) : "an exception", thrownDescription: function (b) { var d = f ? a.fnNameFor(b.constructor) : "an exception", e = ""; c && (e = " with message " + a.pp(b.message)); return d + e }, messageDescription: function () { return null === c ? "" : c instanceof RegExp ? " with a message matching " + a.pp(c) : " with message " + a.pp(c) }, hasNoSpecifics: function () { return null === c && null === f }, matches: function (a) {
                    var b; (b = null === f || a instanceof f) &&
                        !(b = null === c) && (a = a.message, b = "string" == typeof c ? c == a : c.test(a)); return b
                }
            }
        } function d(a) { if ("function" !== typeof a) return !1; var b = function () { }; b.prototype = a.prototype; return new b instanceof Error } return {
            compare: function (c) {
                var d = !1, h = { pass: !0 }, g = { pass: !1 }, k; if ("function" != typeof c) throw Error(b("Actual is not a Function")); var m = e.apply(null, arguments); try { c() } catch (p) { d = !0, k = p } if (!d) return g.message = "Expected function to throw an Error.", g; if (!(k instanceof Error)) return g.message = function () {
                    return "Expected function to throw an Error, but it threw " +
                        a.pp(k) + "."
                }, g; if (m.hasNoSpecifics()) return h.message = "Expected function not to throw an Error, but it threw " + a.fnNameFor(k) + ".", h; if (m.matches(k)) return h.message = function () { return "Expected function not to throw " + m.errorTypeDescription + m.messageDescription() + "." }, h; g.message = function () { return "Expected function to throw " + m.errorTypeDescription + m.messageDescription() + ", but it threw " + m.thrownDescription(k) + "." }; return g
            }
        }
    }
};
getJasmineRequireObj().interface = function (a, b) {
    var e = {
        describe: function (a, c) { return b.describe(a, c) }, xdescribe: function (a, c) { return b.xdescribe(a, c) }, fdescribe: function (a, c) { return b.fdescribe(a, c) }, it: function () { return b.it.apply(b, arguments) }, xit: function () { return b.xit.apply(b, arguments) }, fit: function () { return b.fit.apply(b, arguments) }, beforeEach: function () { return b.beforeEach.apply(b, arguments) }, afterEach: function () { return b.afterEach.apply(b, arguments) }, beforeAll: function () {
            return b.beforeAll.apply(b,
                arguments)
        }, afterAll: function () { return b.afterAll.apply(b, arguments) }, expect: function (a) { return b.expect(a) }, pending: function () { return b.pending.apply(b, arguments) }, fail: function () { return b.fail.apply(b, arguments) }, spyOn: function (a, c) { return b.spyOn(a, c) }, jsApiReporter: new a.JsApiReporter({ timer: new a.Timer }), jasmine: a
    }; a.addCustomEqualityTester = function (a) { b.addCustomEqualityTester(a) }; a.addMatchers = function (a) { return b.addMatchers(a) }; a.clock = function () { return b.clock }; return e
};
getJasmineRequireObj().version = function () { return "2.5.2" }; jasmineRequire.html = function (a) { a.ResultsNode = jasmineRequire.ResultsNode(); a.HtmlReporter = jasmineRequire.HtmlReporter(a); a.QueryString = jasmineRequire.QueryString(); a.HtmlSpecFilter = jasmineRequire.HtmlSpecFilter() };
jasmineRequire.HtmlReporter = function (a) {
    var b = { start: function () { }, elapsed: function () { return 0 } }; return function (e) {
        function d(a) { return p().querySelector(".jasmine_html-reporter " + a) } function c(a, b, c) { for (var d = n(a), f = 2; f < arguments.length; f++) { var e = arguments[f]; "string" === typeof e ? d.appendChild(l(e)) : e && d.appendChild(e) } for (var g in b) "className" == g ? d[g] = b[g] : d.setAttribute(g, b[g]); return d } function f(a, b) { return "" + b + " " + (1 == b ? a : a + "s") } function h(a, b) { return "?" + a + "=" + b } function g(a) {
            v.setAttribute("class",
                "jasmine_html-reporter " + a)
        } function k(a) { return 0 === a.failedExpectations.length + a.passedExpectations.length && "passed" === a.status } var m = e.env || {}, p = e.getContainer, n = e.createElement, l = e.createTextNode, q = e.onRaiseExceptionsClick || function () { }, t = e.onThrowExpectationsClick || function () { }, F = e.onRandomClick || function () { }, z = e.addToExistingQueryString || h, w = e.timer || b, u = 0, G = 0, D = 0, v, r, x = []; this.initialize = function () {
            var b = d(""); b && p().removeChild(b); v = c("div", { className: "jasmine_html-reporter" }, c("div", { className: "jasmine-banner" },
                c("a", { className: "jasmine-title", href: "http://jasmine.github.io/", target: "_blank" }), c("span", { className: "jasmine-version" }, a.version)), c("ul", { className: "jasmine-symbol-summary" }), c("div", { className: "jasmine-alert" }), c("div", { className: "jasmine-results" }, c("div", { className: "jasmine-failures" }))); p().appendChild(v)
        }; var E; this.jasmineStarted = function (a) { E = a.totalSpecsDefined || 0; w.start() }; var H = new a.ResultsNode({}, "", null), y = H; this.suiteStarted = function (a) { y.addChild(a, "suite"); y = y.last() }; this.suiteDone =
            function (a) { "failed" == a.status && x.push(a); y != H && (y = y.parent) }; this.specStarted = function (a) { y.addChild(a, "spec") }; var A = []; this.specDone = function (a) {
                k(a) && "undefined" !== typeof cc && "undefined" !== typeof cc.log && cc.log("Spec '" + a.fullName + "' has no expectations."); "disabled" != a.status && u++; r || (r = d(".jasmine-symbol-summary")); r.appendChild(c("li", { className: k(a) ? "jasmine-empty" : "jasmine-" + a.status, id: "spec_" + a.id, title: a.fullName })); if ("failed" == a.status) {
                    G++; for (var b = c("div", { className: "jasmine-spec-detail jasmine-failed" },
                        c("div", { className: "jasmine-description" }, c("a", { title: a.fullName, href: z("spec", a.fullName) }, a.fullName)), c("div", { className: "jasmine-messages" })), f = b.childNodes[1], e = 0; e < a.failedExpectations.length; e++) { var g = a.failedExpectations[e]; f.appendChild(c("div", { className: "jasmine-result-message" }, g.message)); f.appendChild(c("div", { className: "jasmine-stack-trace" }, g.stack)) } A.push(b)
                } "pending" == a.status && D++
            }; this.jasmineDone = function (a) {
                function b(a, d) {
                    for (var e, f = 0; f < a.children.length; f++) {
                        var g = a.children[f];
                        if ("suite" == g.type) { var h = c("ul", { className: "jasmine-suite", id: "suite-" + g.result.id }, c("li", { className: "jasmine-suite-detail" }, c("a", { href: z("spec", g.result.fullName) }, g.result.description))); b(g, h); d.appendChild(h) } "spec" == g.type && ("jasmine-specs" != d.getAttribute("class") && (e = c("ul", { className: "jasmine-specs" }), d.appendChild(e)), h = g.result.description, k(g.result) && (h = "SPEC HAS NO EXPECTATIONS " + h), "pending" === g.result.status && "" !== g.result.pendingReason && (h = h + " PENDING WITH MESSAGE: " + g.result.pendingReason),
                            e.appendChild(c("li", { className: "jasmine-" + g.result.status, id: "spec-" + g.result.id }, c("a", { href: z("spec", g.result.fullName) }, h))))
                    }
                } var e = d(".jasmine-banner"), h = d(".jasmine-alert"), l = a && a.order; h.appendChild(c("span", { className: "jasmine-duration" }, "finished in " + w.elapsed() / 1E3 + "s")); e.appendChild(c("div", { className: "jasmine-run-options" }, c("span", { className: "jasmine-trigger" }, "Options"), c("div", { className: "jasmine-payload" }, c("div", { className: "jasmine-exceptions" }, c("input", {
                    className: "jasmine-raise",
                    id: "jasmine-raise-exceptions", type: "checkbox"
                }), c("label", { className: "jasmine-label", "for": "jasmine-raise-exceptions" }, "raise exceptions")), c("div", { className: "jasmine-throw-failures" }, c("input", { className: "jasmine-throw", id: "jasmine-throw-failures", type: "checkbox" }), c("label", { className: "jasmine-label", "for": "jasmine-throw-failures" }, "stop spec on expectation failure")), c("div", { className: "jasmine-random-order" }, c("input", { className: "jasmine-random", id: "jasmine-random-order", type: "checkbox" }), c("label",
                    { className: "jasmine-label", "for": "jasmine-random-order" }, "run tests in random order"))))); e = d("#jasmine-raise-exceptions"); e.checked = !m.catchingExceptions(); e.onclick = q; e = d("#jasmine-throw-failures"); e.checked = m.throwingExpectationFailures(); e.onclick = t; e = d("#jasmine-random-order"); e.checked = m.randomTests(); e.onclick = F; var e = d(".jasmine-run-options"), n = e.querySelector(".jasmine-trigger"), p = e.querySelector(".jasmine-payload"), v = /\bjasmine-open\b/; n.onclick = function () {
                        v.test(p.className) ? p.className =
                            p.className.replace(v, "") : p.className += " jasmine-open"
                    }; u < E && h.appendChild(c("span", { className: "jasmine-bar jasmine-skipped" }, c("a", { href: l && l.random ? "?random=true" : "?", title: "Run all specs" }, "Ran " + u + " of " + E + " specs - run all"))); e = ""; n = "jasmine-bar "; 0 < E ? (e += f("spec", u) + ", " + f("failure", G), D && (e += ", " + f("pending spec", D)), n += 0 < G ? "jasmine-failed" : "jasmine-passed") : (n += "jasmine-skipped", e += "No specs found"); var r; l && l.random && (r = c("span", { className: "jasmine-seed-bar" }, ", randomized with seed ", c("a",
                        { title: "randomized with seed " + l.seed, href: z("seed", l.seed) }, l.seed))); h.appendChild(c("span", { className: n }, e, r)); for (l = 0; l < x.length; l++)for (r = x[l], e = 0; e < r.failedExpectations.length; e++)h.appendChild(c("span", { className: "jasmine-bar jasmine-errored" }, "AfterAll " + r.failedExpectations[e].message)); a = a && a.failedExpectations || []; for (l = 0; l < a.length; l++)h.appendChild(c("span", { className: "jasmine-bar jasmine-errored" }, "AfterAll " + a[l].message)); d(".jasmine-results").appendChild(null); b(H, null); if (A.length) for (h.appendChild(c("span",
                            { className: "jasmine-menu jasmine-bar jasmine-spec-list" }, c("span", {}, "Spec List | "), c("a", { className: "jasmine-failures-menu", href: "#" }, "Failures"))), h.appendChild(c("span", { className: "jasmine-menu jasmine-bar jasmine-failure-list" }, c("a", { className: "jasmine-spec-list-menu", href: "#" }, "Spec List"), c("span", {}, " | Failures "))), d(".jasmine-failures-menu").onclick = function () { g("jasmine-failure-list") }, d(".jasmine-spec-list-menu").onclick = function () { g("jasmine-spec-list") }, g("jasmine-failure-list"), h =
                            d(".jasmine-failures"), l = 0; l < A.length; l++)h.appendChild(A[l])
            }; return this
    }
}; jasmineRequire.HtmlSpecFilter = function () { return function (a) { a = a && a.filterString() && a.filterString().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"); var b = new RegExp(a); this.matches = function (a) { return b.test(a) } } };
jasmineRequire.ResultsNode = function () { function a(b, e, d) { this.result = b; this.type = e; this.parent = d; this.children = []; this.addChild = function (b, d) { this.children.push(new a(b, d, this)) }; this.last = function () { return this.children[this.children.length - 1] } } return a };
jasmineRequire.QueryString = function () { return function (a) { this.navigateWithNewParam = function (b, e) { a.getWindowLocation().search = this.fullStringWithNewParam(b, e) }; this.fullStringWithNewParam = function (a, e) { var d = {}; d[a] = e; var c = [], f; for (f in d) c.push(encodeURIComponent(f) + "=" + encodeURIComponent(d[f])); return "?" + c.join("&") }; this.getParam = function (a) { return {}[a] }; return this } };
(function () {
    window.jasmine = jasmineRequire.core(jasmineRequire); jasmineRequire.html(jasmine); var a = jasmine.getEnv(), b = jasmineRequire.interface(jasmine, a); (function (a, b) { for (var d in b) a[d] = b[d]; return a })(window, b); var e = new jasmine.QueryString({ getWindowLocation: function () { return window.location } }), b = e.getParam("catch"); a.catchExceptions("undefined" === typeof b ? !0 : b); b = e.getParam("throwFailures"); a.throwOnExpectationFailure(b); b = e.getParam("random"); a.randomizeTests(b); (b = e.getParam("seed")) && a.seed(b);
    new jasmine.HtmlReporter({
        env: a, onRaiseExceptionsClick: function () { e.navigateWithNewParam("catch", !a.catchingExceptions()) }, onThrowExpectationsClick: function () { e.navigateWithNewParam("throwFailures", !a.throwingExpectationFailures()) }, onRandomClick: function () { e.navigateWithNewParam("random", !a.randomTests()) }, addToExistingQueryString: function (a, b) { return e.fullStringWithNewParam(a, b) }, getContainer: function () { return document.body }, createElement: function () {
            return document.createElement.apply(document,
                arguments)
        }, createTextNode: function () { return document.createTextNode.apply(document, arguments) }, timer: new jasmine.Timer
    }); var d = new jasmine.HtmlSpecFilter({ filterString: function () { return e.getParam("spec") } }); a.specFilter = function (a) { return d.matches(a.getFullName()) }; window.setTimeout = window.setTimeout; window.setInterval = window.setInterval; window.clearTimeout = window.clearTimeout; window.clearInterval = window.clearInterval
})();
var myReporter = {
    jasmineStarted: function (a) { cc.log("-------------------------------"); cc.log("\u5f00\u59cb\u5355\u5143\u6d4b\u8bd5\uff0c\u603b\u4efb\u52a1\u6570\uff1a" + a.totalSpecsDefined + "\u3002") }, suiteStarted: function (a) { cc.log("        -----------------------"); cc.log("        \u5f00\u59cbdescribe\uff1a" + a.description + "\u3002\u8be5describe\u7684\u63cf\u8ff0\u4e3a\uff1a" + a.fullName + "\u3002") }, specStarted: function (a) {
        cc.log("                ---------------"); cc.log("                \u5f00\u59cbit\uff1a " +
            a.description + "\u3002 \u8be5it\u7684\u63cf\u8ff0\u4e3a\uff1a " + a.fullName + "\u3002")
    }, specDone: function (a) { cc.log('                it\u6d4b\u8bd5 "' + a.description + '" \u7684\u72b6\u6001\u4e3a\uff1a ' + a.status + "\u3002"); for (var b = 0; b < a.failedExpectations.length; b++)cc.log("                \u5931\u8d25\uff1a " + a.failedExpectations[b].message); cc.log("                \u8be5describe\u901a\u8fc7\u7684\u6d4b\u8bd5\u6570\uff1a " + a.passedExpectations.length + "\u3002"); cc.log("                ---------------") },
    suiteDone: function (a) { cc.log("        describe\u6d4b\u8bd5\uff1a " + a.description + " \u7684\u6d4b\u8bd5\u72b6\u6001\u4e3a " + a.status); for (var b = 0; b < a.failedExpectations.length; b++)cc.log("AfterAll " + a.failedExpectations[b].message), cc.log(a.failedExpectations[b].stack); cc.log("        -----------------------") }, jasmineDone: function () { cc.log("\u7ed3\u675f\u6240\u6709\u6d4b\u8bd5\u3002"); cc.log("-------------------------------") }
}; jasmine.getEnv().addReporter(myReporter);