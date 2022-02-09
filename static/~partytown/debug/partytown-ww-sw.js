/* Partytown 0.3.2 - MIT builder.io */
(self => {
    const WinIdKey = Symbol();
    const InstanceIdKey = Symbol();
    const NodeNameKey = Symbol();
    const NamespaceKey = Symbol();
    const ApplyPathKey = Symbol();
    const InstanceStateKey = Symbol();
    const HookContinue = Symbol();
    const HookPrevent = Symbol();
    const webWorkerInstances = new Map;
    const webWorkerRefsByRefId = {};
    const webWorkerRefIdsByRef = new WeakMap;
    const envGlobalConstructors = new Map;
    const nodeConstructors = {};
    const postMessages = [];
    const webWorkerCtx = {};
    const webWorkerlocalStorage = new Map;
    const webWorkerSessionStorage = new Map;
    const environments = {};
    const cachedDimensions = new Map;
    const cachedStructure = new Map;
    const commaSplit = str => str.split(",");
    const partytownLibUrl = url => {
        url = webWorkerCtx.$libPath$ + url;
        if (new URL(url).origin != location.origin) {
            throw "Invalid " + url;
        }
        return url;
    };
    const getterDimensionPropNames = commaSplit("clientWidth,clientHeight,clientTop,clientLeft,innerWidth,innerHeight,offsetWidth,offsetHeight,offsetTop,offsetLeft,outerWidth,outerHeight,pageXOffset,pageYOffset,scrollWidth,scrollHeight,scrollTop,scrollLeft");
    const nodeStructurePropNames = commaSplit("childNodes,firstChild,isConnected,lastChild,nextSibling,parentElement,parentNode,previousSibling");
    const elementStructurePropNames = commaSplit("childElementCount,children,firstElementChild,lastElementChild,nextElementSibling,previousElementSibling");
    const structureChangingMethodNames = commaSplit("insertBefore,remove,removeChild,replaceChild");
    const dimensionChangingSetterNames = commaSplit("className,width,height,hidden,innerHTML,innerText,textContent");
    const dimensionChangingMethodNames = commaSplit("setAttribute,setProperty");
    const elementGetterDimensionMethodNames = commaSplit("getClientRects,getBoundingClientRect");
    const windowGetterDimensionMethodNames = [ "getComputedStyle" ];
    const eventTargetMethods = commaSplit("addEventListener,dispatchEvent,removeEventListener");
    const nonBlockingMethods = eventTargetMethods.concat(dimensionChangingMethodNames, commaSplit("add,observe,remove,unobserve"));
    const IS_TAG_REG = /^[A-Z]([A-Z0-9-]*[A-Z0-9])?$/;
    const noop = () => {};
    const len = obj => obj.length;
    const getConstructorName = obj => {
        try {
            return obj.constructor.name;
        } catch (e) {}
        return "";
    };
    const EMPTY_ARRAY = [];
    const randomId = () => Math.round(999999999 * Math.random() + 4);
    const defineProperty = (obj, memberName, descriptor) => Object.defineProperty(obj, memberName, {
        ...descriptor,
        configurable: true
    });
    const defineConstructorName = (Cstr, value) => defineProperty(Cstr, "name", {
        value: value
    });
    const definePrototypeProperty = (Cstr, memberName, descriptor) => defineProperty(Cstr.prototype, memberName, descriptor);
    const definePrototypePropertyDescriptor = (Cstr, propertyDescriptorMap) => Object.defineProperties(Cstr.prototype, propertyDescriptorMap);
    const definePrototypeValue = (Cstr, memberName, value) => definePrototypeProperty(Cstr, memberName, {
        value: value,
        writable: true
    });
    const hasInstanceStateValue = (instance, stateKey) => stateKey in instance[InstanceStateKey];
    const getInstanceStateValue = (instance, stateKey) => instance[InstanceStateKey][stateKey];
    const setInstanceStateValue = (instance, stateKey, stateValue) => instance[InstanceStateKey][stateKey] = stateValue;
    const setWorkerRef = (ref, refId) => {
        if (!(refId = webWorkerRefIdsByRef.get(ref))) {
            webWorkerRefIdsByRef.set(ref, refId = randomId());
            webWorkerRefsByRefId[refId] = ref;
        }
        return refId;
    };
    const logWorker = (msg, winId = -1) => {
        try {
            const config = webWorkerCtx.$config$;
            if (config.logStackTraces) {
                const frames = (new Error).stack.split("\n");
                const i = frames.findIndex((f => f.includes("logWorker")));
                msg += "\n" + frames.slice(i + 1).join("\n");
            }
            let prefix;
            let color;
            if (winId > -1) {
                prefix = `Worker (${normalizedWinId(winId)}) 🎉`;
                color = winColor(winId);
            } else {
                prefix = self.name;
                color = "#9844bf";
            }
            if (webWorkerCtx.lastLog !== msg) {
                webWorkerCtx.lastLog = msg;
                console.debug.apply(console, [ `%c${prefix}`, `background: ${color}; color: white; padding: 2px 3px; border-radius: 2px; font-size: 0.8em;`, msg ]);
            }
        } catch (e) {}
    };
    const winIds = [];
    const normalizedWinId = winId => {
        winIds.includes(winId) || winIds.push(winId);
        return winIds.indexOf(winId) + 1;
    };
    const winColor = winId => {
        const colors = [ "#00309e", "#ea3655", "#eea727" ];
        const index = normalizedWinId(winId) - 1;
        return colors[index] || colors[colors.length - 1];
    };
    const getTargetProp = (target, applyPath) => {
        let n = "";
        if (target) {
            const instanceId = target[InstanceIdKey];
            const cstrName = getConstructorName(target);
            if (0 === instanceId) {
                n = "";
            } else if (1 === instanceId) {
                n = "document.";
            } else if (2 === instanceId) {
                n = "document.documentElement.";
            } else if (3 === instanceId) {
                n = "document.head.";
            } else if (4 === instanceId) {
                n = "document.body.";
            } else if (target[NodeNameKey]) {
                let nodeName = target[NodeNameKey];
                n = "#text" === nodeName ? "textNode." : "#comment" === nodeName ? "commentNode." : "#document" === nodeName ? "document." : "html" === nodeName ? "doctype." : nodeName.toLowerCase() + ".";
            } else {
                n = 2 === target.nodeType ? "attributes." : "CanvasRenderingContext2D" === cstrName ? "context2D." : "CanvasRenderingContextWebGL" === cstrName ? "contextWebGL." : "CSSStyleDeclaration" === cstrName ? "value." : "MutationObserver" === cstrName ? "mutationObserver." : "NamedNodeMap" === cstrName ? "namedNodeMap." : "ResizeObserver" === cstrName ? "resizeObserver." : cstrName.substring(0, 1).toLowerCase() + cstrName.substring(1) + ".";
            }
            target[ApplyPathKey] && target[ApplyPathKey].length && (n += [ ...target[ApplyPathKey] ].join(".") + ".");
        }
        if (applyPath.length > 1) {
            const first = applyPath.slice(0, applyPath.length - 1);
            const last = applyPath[applyPath.length - 1];
            if (!isNaN(last)) {
                return n + `${first.join(".")}[${last}]`;
            }
        }
        return n + applyPath.join(".");
    };
    const getLogValue = (applyPath, v) => {
        const type = typeof v;
        if (void 0 === v) {
            return "undefined";
        }
        if ("boolean" === type || "number" === type || null == v) {
            return JSON.stringify(v);
        }
        if ("string" === type) {
            return applyPath.includes("cookie") ? JSON.stringify(v.substr(0, 10) + "...") : JSON.stringify(v.length > 50 ? v.substr(0, 40) + "..." : v);
        }
        if (Array.isArray(v)) {
            return `[${v.map(getLogValue).join(", ")}]`;
        }
        if ("object" === type) {
            const instanceId = v[InstanceIdKey];
            if ("number" == typeof instanceId) {
                if (4 === instanceId) {
                    return "<body>";
                }
                if (1 === instanceId) {
                    return "#document";
                }
                if (2 === instanceId) {
                    return "<html>";
                }
                if (3 === instanceId) {
                    return "<head>";
                }
                if (0 === instanceId) {
                    return "window";
                }
                if (v[NodeNameKey]) {
                    if (1 === v.nodeType) {
                        return `<${v[NodeNameKey].toLowerCase()}>`;
                    }
                    if (10 === v.nodeType) {
                        return `<!DOCTYPE ${v[NodeNameKey]}>`;
                    }
                    if (v.nodeType <= 11) {
                        return v[NodeNameKey];
                    }
                }
                return "¯\\_(ツ)_/¯ instance obj";
            }
            return v[Symbol.iterator] ? `[${Array.from(v).map((i => getLogValue(applyPath, i))).join(", ")}]` : "value" in v ? "string" == typeof v.value ? `"${v.value}"` : objToString(v.value) : objToString(v);
        }
        return (v => "object" == typeof v && v && v.then)(v) ? "Promise" : "function" === type ? `ƒ() ${v.name || ""}`.trim() : `¯\\_(ツ)_/¯ ${String(v)}`.trim();
    };
    const objToString = obj => {
        const s = [];
        for (let key in obj) {
            const value = obj[key];
            const type = typeof value;
            "string" === type ? s.push(`${key}: "${value}"`) : "function" === type ? s.push(`${key}: ƒ`) : Array.isArray(type) ? s.push(`${key}: [..]`) : "object" === type && value ? s.push(`${key}: {..}`) : s.push(`${key}: ${String(value)}`);
        }
        let str = s.join(", ");
        str.length > 200 && (str = str.substring(0, 200) + "..");
        return `{ ${str} }`;
    };
    const logDimensionCacheClearMethod = (target, methodName) => {
        (webWorkerCtx.$config$.logGetters || webWorkerCtx.$config$.logCalls) && logWorker(`Dimension cache cleared from method call ${methodName}()`, target[WinIdKey]);
    };
    const taskQueue = [];
    let asyncMsgTimer = 0;
    const queue = (instance, $applyPath$, callType, $assignInstanceId$, $groupedGetters$, buffer) => {
        taskQueue.push({
            $winId$: instance[WinIdKey],
            $instanceId$: instance[InstanceIdKey],
            $applyPath$: [ ...instance[ApplyPathKey], ...$applyPath$ ],
            $assignInstanceId$: $assignInstanceId$,
            $groupedGetters$: $groupedGetters$
        });
        taskQueue[len(taskQueue) - 1].$debug$ = ((target, applyPath, callType) => {
            let m = getTargetProp(target, applyPath);
            1 === callType ? m += " (blocking)" : 2 === callType ? m += " (non-blocking)" : 3 === callType && (m += " (non-blocking, no-side-effect)");
            return m.trim();
        })(instance, $applyPath$, callType);
        buffer && 3 !== callType && console.error("buffer must be sent NonBlockingNoSideEffect");
        if (3 === callType) {
            webWorkerCtx.$postMessage$([ 10, {
                $msgId$: randomId(),
                $tasks$: [ ...taskQueue ]
            } ], buffer ? [ buffer instanceof ArrayBuffer ? buffer : buffer.buffer ] : void 0);
            taskQueue.length = 0;
        } else if (1 === callType) {
            return sendToMain(true);
        }
        asyncMsgTimer = setTimeout(sendToMain, 20);
    };
    const sendToMain = isBlocking => {
        clearTimeout(asyncMsgTimer);
        if (len(taskQueue)) {
            webWorkerCtx.$config$.logMainAccess && logWorker(`Main access, tasks sent: ${taskQueue.length}`);
            const endTask = taskQueue[len(taskQueue) - 1];
            const accessReq = {
                $msgId$: randomId(),
                $tasks$: [ ...taskQueue ]
            };
            taskQueue.length = 0;
            if (isBlocking) {
                const accessRsp = ((webWorkerCtx, accessReq) => {
                    const xhr = new XMLHttpRequest;
                    xhr.open("POST", partytownLibUrl("proxytown"), false);
                    xhr.send(JSON.stringify(accessReq));
                    return JSON.parse(xhr.responseText);
                })(0, accessReq);
                const isPromise = accessRsp.$isPromise$;
                const rtnValue = deserializeFromMain(endTask.$winId$, endTask.$instanceId$, endTask.$applyPath$, accessRsp.$rtnValue$);
                if (accessRsp.$error$) {
                    if (isPromise) {
                        return Promise.reject(accessRsp.$error$);
                    }
                    throw new Error(accessRsp.$error$);
                }
                return isPromise ? Promise.resolve(rtnValue) : rtnValue;
            }
            webWorkerCtx.$postMessage$([ 10, accessReq ]);
        }
    };
    const getter = (instance, applyPath, groupedGetters, rtnValue) => {
        if (webWorkerCtx.$config$.get) {
            rtnValue = webWorkerCtx.$config$.get(createHookOptions(instance, applyPath));
            if (rtnValue !== HookContinue) {
                return rtnValue;
            }
        }
        rtnValue = queue(instance, applyPath, 1, void 0, groupedGetters);
        ((target, applyPath, rtnValue, restrictedToWorker = false, groupedGetters = false) => {
            if (webWorkerCtx.$config$.logGetters) {
                try {
                    const msg = `Get ${getTargetProp(target, applyPath)}, returned: ${getLogValue(applyPath, rtnValue)}${restrictedToWorker ? " (restricted to worker)" : ""}${groupedGetters ? " (grouped getter)" : ""}`;
                    msg.includes("Symbol(") || logWorker(msg, target[WinIdKey]);
                } catch (e) {}
            }
        })(instance, applyPath, rtnValue, false, !!groupedGetters);
        return rtnValue;
    };
    const setter = (instance, applyPath, value, hookSetterValue) => {
        if (webWorkerCtx.$config$.set) {
            hookSetterValue = webWorkerCtx.$config$.set({
                value: value,
                prevent: HookPrevent,
                ...createHookOptions(instance, applyPath)
            });
            if (hookSetterValue === HookPrevent) {
                return;
            }
            hookSetterValue !== HookContinue && (value = hookSetterValue);
        }
        if (dimensionChangingSetterNames.some((s => applyPath.includes(s)))) {
            cachedDimensions.clear();
            ((target, propName) => {
                (webWorkerCtx.$config$.logGetters || webWorkerCtx.$config$.logSetters) && logWorker(`Dimension cache cleared from setter "${propName}"`, target[WinIdKey]);
            })(instance, applyPath[applyPath.length - 1]);
        }
        applyPath = [ ...applyPath, serializeInstanceForMain(instance, value), 0 ];
        ((target, applyPath, value, restrictedToWorker = false) => {
            if (webWorkerCtx.$config$.logSetters) {
                try {
                    applyPath = applyPath.slice(0, applyPath.length - 2);
                    logWorker(`Set ${getTargetProp(target, applyPath)}, value: ${getLogValue(applyPath, value)}${restrictedToWorker ? " (restricted to worker)" : ""}`, target[WinIdKey]);
                } catch (e) {}
            }
        })(instance, applyPath, value);
        queue(instance, applyPath, 2);
    };
    const callMethod = (instance, applyPath, args, callType, assignInstanceId, buffer, rtnValue, methodName) => {
        if (webWorkerCtx.$config$.apply) {
            rtnValue = webWorkerCtx.$config$.apply({
                args: args,
                ...createHookOptions(instance, applyPath)
            });
            if (rtnValue !== HookContinue) {
                return rtnValue;
            }
        }
        methodName = applyPath[len(applyPath) - 1];
        applyPath = [ ...applyPath, serializeInstanceForMain(instance, args) ];
        callType = callType || (nonBlockingMethods.includes(methodName) ? 2 : 1);
        if ("setAttribute" === methodName && hasInstanceStateValue(instance, args[0])) {
            setInstanceStateValue(instance, args[0], args[1]);
        } else if (structureChangingMethodNames.includes(methodName)) {
            cachedDimensions.clear();
            cachedStructure.clear();
            ((target, methodName) => {
                (webWorkerCtx.$config$.logGetters || webWorkerCtx.$config$.logCalls) && logWorker(`Dimension and DOM structure cache cleared from method call ${methodName}()`, target[WinIdKey]);
            })(instance, methodName);
        } else if (dimensionChangingMethodNames.includes(methodName)) {
            callType = 2;
            cachedDimensions.clear();
            logDimensionCacheClearMethod(instance, methodName);
        }
        rtnValue = queue(instance, applyPath, callType, assignInstanceId, void 0, buffer);
        ((target, applyPath, args, rtnValue) => {
            if (webWorkerCtx.$config$.logCalls) {
                try {
                    applyPath = applyPath.slice(0, applyPath.length - 1);
                    logWorker(`Call ${getTargetProp(target, applyPath)}(${args.map((v => getLogValue(applyPath, v))).join(", ")}), returned: ${getLogValue(applyPath, rtnValue)}`, target[WinIdKey]);
                } catch (e) {}
            }
        })(instance, applyPath, args, rtnValue);
        return rtnValue;
    };
    const constructGlobal = (instance, cstrName, args) => {
        ((target, cstrName, args) => {
            if (webWorkerCtx.$config$.logCalls) {
                try {
                    logWorker(`Construct new ${cstrName}(${args.map((v => getLogValue([], v))).join(", ")})`, target[WinIdKey]);
                } catch (e) {}
            }
        })(instance, cstrName, args);
        queue(instance, [ 1, cstrName, serializeInstanceForMain(instance, args) ], 1);
    };
    const createHookOptions = (instance, applyPath) => ({
        name: applyPath.join("."),
        continue: HookContinue,
        nodeName: instance[NodeNameKey],
        constructor: getConstructorName(instance)
    });
    const addStorageApi = (win, storageName, storages) => {
        let isOrigin = () => self.origin === win.origin;
        let getItems = items => {
            items = storages.get(win.origin);
            items || storages.set(win.origin, items = []);
            return items;
        };
        let getIndexByKey = key => getItems().findIndex((i => i[STORAGE_KEY] === key));
        let index;
        let item;
        let storage = {
            getItem(key) {
                index = getIndexByKey(key);
                return index > -1 ? getItems()[index][STORAGE_VALUE] : null;
            },
            setItem(key, value) {
                index = getIndexByKey(key);
                index > -1 ? getItems()[index][STORAGE_VALUE] = value : getItems().push([ key, value ]);
                isOrigin() && callMethod(win, [ storageName, "setItem" ], [ key, value ], 2);
            },
            removeItem(key) {
                index = getIndexByKey(key);
                index > -1 && getItems().splice(index, 1);
                isOrigin() && callMethod(win, [ storageName, "removeItem" ], [ key ], 2);
            },
            key(index) {
                item = getItems()[index];
                return item ? item[STORAGE_KEY] : null;
            },
            clear() {
                getItems().length = 0;
                isOrigin() && callMethod(win, [ storageName, "clear" ], EMPTY_ARRAY, 2);
            },
            get length() {
                return getItems().length;
            }
        };
        win[storageName] = storage;
    };
    const STORAGE_KEY = 0;
    const STORAGE_VALUE = 1;
    class WorkerInstance {
        constructor(winId, instanceId, applyPath, nodeName, namespace) {
            this[WinIdKey] = winId;
            this[InstanceIdKey] = instanceId;
            this[ApplyPathKey] = applyPath || [];
            this[NodeNameKey] = nodeName;
            this[InstanceStateKey] = {};
            namespace && (this[NamespaceKey] = namespace);
        }
    }
    class WorkerEventTargetProxy extends WorkerInstance {}
    eventTargetMethods.map((methodName => WorkerEventTargetProxy.prototype[methodName] = function(...args) {
        return callMethod(this, [ methodName ], args, 2);
    }));
    class WorkerTrapProxy extends WorkerInstance {
        constructor(winId, instanceId, applyPath, nodeName) {
            super(winId, instanceId, applyPath, nodeName);
            return new Proxy(this, {
                get: (instance, propName) => getter(instance, [ propName ]),
                set(instance, propName, propValue) {
                    setter(instance, [ propName ], propValue);
                    return true;
                }
            });
        }
    }
    const lazyLoadMedia = () => {
        if (!self.ptm) {
            self.ptm = [ getter, setter, callMethod, constructGlobal, definePrototypePropertyDescriptor, randomId, WorkerInstance, WorkerEventTargetProxy, WinIdKey, InstanceIdKey, ApplyPathKey ];
            webWorkerCtx.$importScripts$(partytownLibUrl("partytown-media.js"));
        }
        return self.ptm;
    };
    const htmlMedia = commaSplit("AUDIO,CANVAS,VIDEO");
    const windowMediaConstructors = commaSplit("Audio,MediaSource");
    const getOrCreateNodeInstance = (winId, instanceId, nodeName, namespace, instance) => {
        instance = webWorkerInstances.get(instanceId);
        if (!instance) {
            instance = createNodeInstance(winId, instanceId, nodeName, namespace);
            webWorkerInstances.set(instanceId, instance);
        }
        return instance;
    };
    const createNodeInstance = (winId, instanceId, nodeName, namespace) => {
        htmlMedia.includes(nodeName) && lazyLoadMedia();
        const NodeCstr = nodeConstructors[nodeName] ? nodeConstructors[nodeName] : nodeName.includes("-") ? nodeConstructors.UNKNOWN : self.HTMLElement;
        return new NodeCstr(winId, instanceId, [], nodeName, namespace);
    };
    const runScriptContent = (env, instanceId, scriptContent, winId, errorMsg) => {
        try {
            webWorkerCtx.$config$.logScriptExecution && logWorker(`Execute script (${instanceId}): ${scriptContent.substring(0, 100).split("\n").map((l => l.trim())).join(" ").trim().substring(0, 60)}...`, winId);
            env.$currentScriptId$ = instanceId;
            run(env, scriptContent);
        } catch (contentError) {
            console.error(scriptContent, contentError);
            errorMsg = String(contentError.stack || contentError);
        }
        env.$currentScriptId$ = -1;
        return errorMsg;
    };
    const run = (env, scriptContent, scriptUrl) => new Function(`with(this){${scriptContent.replace(/\bthis\b/g, "(thi$(this)?window:this)").replace(/\/\/# so/g, "//Xso")};function thi$(t){return t===this}${(webWorkerCtx.$config$.globalFns || []).filter((globalFnName => /[a-zA-Z_$][0-9a-zA-Z_$]*/.test(globalFnName))).map((g => `(typeof ${g}=='function'&&(window.${g}=${g}))`)).join(";")}}` + (scriptUrl ? "\n//# sourceURL=" + scriptUrl : "")).call(env.$window$);
    const runStateLoadHandlers = (instance, type, handlers) => {
        handlers = getInstanceStateValue(instance, type);
        handlers && setTimeout((() => handlers.map((cb => cb({
            type: type
        })))));
    };
    const resolveToUrl = (env, url, noUserHook, baseLocation, resolvedUrl, configResolvedUrl) => {
        baseLocation = env.$location$;
        while (!baseLocation.host) {
            env = environments[env.$parentWinId$];
            baseLocation = env.$location$;
            if (env.$winId$ === env.$parentWinId$) {
                break;
            }
        }
        resolvedUrl = new URL(url || "", baseLocation);
        if (!noUserHook && webWorkerCtx.$config$.resolveUrl) {
            configResolvedUrl = webWorkerCtx.$config$.resolveUrl(resolvedUrl, baseLocation);
            if (configResolvedUrl) {
                return configResolvedUrl;
            }
        }
        return resolvedUrl;
    };
    const resolveUrl = (env, url, noUserHook) => resolveToUrl(env, url, noUserHook) + "";
    const getPartytownScript = () => `<script src="${partytownLibUrl("partytown.js")}"><\/script>`;
    const createImageConstructor = env => class HTMLImageElement {
        constructor() {
            this.s = "";
            this.l = [];
            this.e = [];
        }
        get src() {
            return this.s;
        }
        set src(src) {
            webWorkerCtx.$config$.logImageRequests && logWorker(`Image() request: ${resolveUrl(env, src)}`, env.$winId$);
            fetch(resolveUrl(env, src, true), {
                mode: "no-cors",
                keepalive: true
            }).then((rsp => {
                rsp.ok || 0 === rsp.status ? this.l.map((cb => cb({
                    type: "load"
                }))) : this.e.map((cb => cb({
                    type: "error"
                })));
            }), (() => this.e.forEach((cb => cb({
                type: "error"
            })))));
        }
        addEventListener(eventName, cb) {
            "load" === eventName && this.l.push(cb);
            "error" === eventName && this.e.push(cb);
        }
        get onload() {
            return this.l[0];
        }
        set onload(cb) {
            this.l = [ cb ];
        }
        get onerror() {
            return this.e[0];
        }
        set onerror(cb) {
            this.e = [ cb ];
        }
    };
    class Location extends URL {
        assign() {
            logWorker("location.assign(), noop");
        }
        reload() {
            logWorker("location.reload(), noop");
        }
        replace() {
            logWorker("location.replace(), noop");
        }
    }
    class Window extends WorkerInstance {
        constructor($winId$, $parentWinId$, url, isIframeWindow) {
            super($winId$, 0);
            let _this = this;
            let globalName;
            let value;
            let historyState;
            for (globalName in self) {
                if (!(globalName in _this) && "onmessage" !== globalName) {
                    value = self[globalName];
                    if (null != value) {
                        const isFunction = "function" == typeof value && !value.toString().startsWith("class");
                        _this[globalName] = isFunction ? value.bind(self) : value;
                    }
                }
            }
            Object.getOwnPropertyNames(self).map((globalName => {
                globalName in _this || (_this[globalName] = self[globalName]);
            }));
            envGlobalConstructors.forEach(((GlobalCstr, cstrName) => {
                _this[cstrName] = defineConstructorName(class {
                    constructor(...args) {
                        const instance = new GlobalCstr($winId$, randomId());
                        constructGlobal(instance, cstrName, args);
                        return instance;
                    }
                }, cstrName);
            }));
            windowMediaConstructors.map((cstrName => defineProperty(_this, cstrName, {
                get() {
                    delete _this[cstrName];
                    const initMediaConstructors = lazyLoadMedia();
                    const initMediaConstructor = initMediaConstructors[cstrName];
                    return _this[cstrName] = initMediaConstructor(getEnv(_this), _this, cstrName);
                }
            })));
            "trustedTypes" in self && (_this.trustedTypes = self.trustedTypes);
            environments[$winId$] = {
                $winId$: $winId$,
                $parentWinId$: $parentWinId$,
                $window$: new Proxy(_this, {
                    has: () => true
                }),
                $document$: createNodeInstance($winId$, 1, "#document"),
                $documentElement$: createNodeInstance($winId$, 2, "HTML"),
                $head$: createNodeInstance($winId$, 3, "HEAD"),
                $body$: createNodeInstance($winId$, 4, "BODY"),
                $location$: new Location(url)
            };
            _this.requestAnimationFrame = cb => setTimeout((() => cb(performance.now())), 9);
            _this.cancelAnimationFrame = id => clearTimeout(id);
            _this.requestIdleCallback = (cb, start) => {
                start = Date.now();
                return setTimeout((() => cb({
                    didTimeout: false,
                    timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
                })), 1);
            };
            _this.cancelIdleCallback = id => clearTimeout(id);
            addStorageApi(_this, "localStorage", webWorkerlocalStorage);
            addStorageApi(_this, "sessionStorage", webWorkerSessionStorage);
            if (isIframeWindow) {
                historyState = {};
                _this.history = {
                    pushState(stateObj) {
                        historyState = stateObj;
                    },
                    replaceState(stateObj) {
                        historyState = stateObj;
                    },
                    get state() {
                        return historyState;
                    },
                    length: 0
                };
            }
            _this.Worker = void 0;
        }
        get body() {
            return getEnv(this).$body$;
        }
        get document() {
            return getEnv(this).$document$;
        }
        get documentElement() {
            return getEnv(this).$documentElement$;
        }
        fetch(input, init) {
            input = "string" == typeof input || input instanceof URL ? String(input) : input.url;
            return fetch(resolveUrl(getEnv(this), input), init);
        }
        get frameElement() {
            const env = getEnv(this);
            const parentWinId = env.$parentWinId$;
            const winId = env.$winId$;
            return winId === parentWinId ? null : getOrCreateNodeInstance(parentWinId, winId, "IFRAME");
        }
        get globalThis() {
            return this;
        }
        get head() {
            return getEnv(this).$head$;
        }
        get location() {
            return getEnv(this).$location$;
        }
        set location(loc) {
            getEnv(this).$location$.href = loc + "";
        }
        get Image() {
            return createImageConstructor(getEnv(this));
        }
        get name() {
            return name + `${normalizedWinId(this[WinIdKey])} (${this[WinIdKey]})`;
        }
        get navigator() {
            return (env => {
                const navigator = self.navigator;
                navigator.sendBeacon = (url, body) => {
                    if (webWorkerCtx.$config$.logSendBeaconRequests) {
                        try {
                            logWorker(`sendBeacon: ${resolveUrl(env, url, true)}${body ? ", data: " + JSON.stringify(body) : ""}`);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                    try {
                        fetch(resolveUrl(env, url, true), {
                            method: "POST",
                            body: body,
                            mode: "no-cors",
                            keepalive: true
                        });
                        return true;
                    } catch (e) {
                        console.error(e);
                        return false;
                    }
                };
                return navigator;
            })(getEnv(this));
        }
        get origin() {
            return getEnv(this).$location$.origin;
        }
        get parent() {
            return proxyAncestorPostMessage(environments[getEnv(this).$parentWinId$].$window$, this[WinIdKey]);
        }
        postMessage(...args) {
            callMethod(this, [ "postMessage" ], args, 3);
        }
        get self() {
            return this;
        }
        get top() {
            for (let envWinId in environments) {
                if (environments[envWinId].$winId$ === environments[envWinId].$parentWinId$) {
                    return proxyAncestorPostMessage(environments[envWinId].$window$, this[WinIdKey]);
                }
            }
        }
        get window() {
            return this;
        }
        get XMLHttpRequest() {
            const env = getEnv(this);
            return class XMLHttpRequest_ extends self.XMLHttpRequest {
                open(...args) {
                    args[1] = resolveUrl(env, args[1]);
                    super.open(...args);
                }
                set withCredentials(_) {}
            };
        }
    }
    const proxyAncestorPostMessage = (parentWin, $winId$) => new Proxy(parentWin, {
        get: (targetParent, propName) => "postMessage" === propName ? (...args) => {
            len(postMessages) > 20 && postMessages.splice(0, 5);
            postMessages.push({
                $data$: JSON.stringify(args[0]),
                $winId$: $winId$
            });
            targetParent.postMessage(...args);
        } : targetParent[propName]
    });
    const createEnvironment = ({$winId$: $winId$, $parentWinId$: $parentWinId$, $url$: $url$}, isIframeWindow) => {
        if (!environments[$winId$]) {
            new Window($winId$, $parentWinId$, $url$, isIframeWindow);
            {
                const winType = $winId$ === $parentWinId$ ? "top" : "iframe";
                logWorker(`Created ${winType} window ${normalizedWinId($winId$)} environment (${$winId$})`, $winId$);
            }
        }
        webWorkerCtx.$postMessage$([ 5, $winId$ ]);
        return environments[$winId$];
    };
    const getEnv = instance => environments[instance[WinIdKey]];
    const HTMLSrcElementDescriptorMap = {
        addEventListener: {
            value(...args) {
                const eventName = args[0];
                const callbacks = getInstanceStateValue(this, eventName) || [];
                callbacks.push(args[1]);
                setInstanceStateValue(this, eventName, callbacks);
            }
        },
        async: {
            get: noop,
            set: noop
        },
        defer: {
            get: noop,
            set: noop
        },
        onload: {
            get() {
                let callbacks = getInstanceStateValue(this, "load");
                return callbacks && callbacks[0] || null;
            },
            set(cb) {
                setInstanceStateValue(this, "load", cb ? [ cb ] : null);
            }
        },
        onerror: {
            get() {
                let callbacks = getInstanceStateValue(this, "error");
                return callbacks && callbacks[0] || null;
            },
            set(cb) {
                setInstanceStateValue(this, "error", cb ? [ cb ] : null);
            }
        },
        getAttribute: {
            value(attrName) {
                return "src" === attrName ? this.src : callMethod(this, [ "getAttribute" ], [ attrName ]);
            }
        },
        setAttribute: {
            value(attrName, attrValue) {
                scriptAttrPropNames.includes(attrName) ? this[attrName] = attrValue : callMethod(this, [ "setAttribute" ], [ attrName, attrValue ]);
            }
        }
    };
    const scriptAttrPropNames = commaSplit("src,type");
    const innerHTMLDescriptor = {
        get() {
            return getInstanceStateValue(this, 3) || "";
        },
        set(scriptContent) {
            setInstanceStateValue(this, 3, scriptContent);
        }
    };
    const HTMLScriptDescriptorMap = {
        innerHTML: innerHTMLDescriptor,
        innerText: innerHTMLDescriptor,
        src: {
            get() {
                return getInstanceStateValue(this, 4) || "";
            },
            set(url) {
                const env = getEnv(this);
                const orgUrl = resolveUrl(env, url, true);
                url = resolveUrl(env, url);
                setInstanceStateValue(this, 4, url);
                setter(this, [ "src" ], url);
                orgUrl !== url && setter(this, [ "dataset", "ptsrc" ], orgUrl);
            }
        },
        textContent: innerHTMLDescriptor,
        type: {
            get() {
                return getter(this, [ "type" ]);
            },
            set(type) {
                if (!isScriptJsType(type)) {
                    setInstanceStateValue(this, 5, type);
                    setter(this, [ "type" ], type);
                }
            }
        },
        ...HTMLSrcElementDescriptorMap
    };
    const isScriptJsType = scriptType => !scriptType || "text/javascript" === scriptType;
    class Node extends WorkerInstance {
        appendChild(node) {
            return this.insertBefore(node, null);
        }
        get href() {}
        set href(_) {}
        insertBefore(newNode, referenceNode) {
            const winId = newNode[WinIdKey] = this[WinIdKey];
            const instanceId = newNode[InstanceIdKey];
            const nodeName = newNode[NodeNameKey];
            const isScript = "SCRIPT" === nodeName;
            const isIFrame = "IFRAME" === nodeName;
            if (isScript) {
                const scriptContent = getInstanceStateValue(newNode, 3);
                const scriptType = getInstanceStateValue(newNode, 5);
                if (scriptContent) {
                    if (isScriptJsType(scriptType)) {
                        const errorMsg = runScriptContent(getEnv(newNode), instanceId, scriptContent, winId, "");
                        const datasetType = errorMsg ? "pterror" : "ptid";
                        const datasetValue = errorMsg || instanceId;
                        setter(newNode, [ "type" ], "text/partytown-x");
                        setter(newNode, [ "dataset", datasetType ], datasetValue);
                    }
                    setter(newNode, [ "innerHTML" ], scriptContent);
                }
            }
            callMethod(this, [ "insertBefore" ], [ newNode, referenceNode ], 2);
            isIFrame && ((winId, iframe) => {
                let i = 0;
                let type;
                let handlers;
                let callback = () => {
                    if (environments[winId] && environments[winId].$isInitialized$ && !environments[winId].$isLoading$) {
                        type = getInstanceStateValue(iframe, 1) ? "error" : "load";
                        handlers = getInstanceStateValue(iframe, type);
                        handlers && handlers.map((handler => handler({
                            type: type
                        })));
                    } else if (i++ > 2e3) {
                        handlers = getInstanceStateValue(iframe, "error");
                        handlers && handlers.map((handler => handler({
                            type: "error"
                        })));
                    } else {
                        setTimeout(callback, 9);
                    }
                };
                setter(iframe, [ "dataset", "ptwindow" ], winId);
                callback();
            })(instanceId, newNode);
            if (isScript) {
                sendToMain(true);
                webWorkerCtx.$postMessage$([ 5, winId ]);
            }
            return newNode;
        }
        get nodeName() {
            return this[NodeNameKey];
        }
        get nodeType() {
            return 3;
        }
        get ownerDocument() {
            return getEnv(this).$document$;
        }
    }
    class Attr {
        constructor(serializedAttr) {
            this.name = serializedAttr[0];
            this.value = serializedAttr[1];
        }
        get nodeName() {
            return this.name;
        }
        get nodeType() {
            return 2;
        }
    }
    class CSSStyleDeclaration extends WorkerInstance {
        constructor(winId, instanceId, applyPath, styles) {
            super(winId, instanceId, applyPath);
            Object.assign(this, styles);
            return new Proxy(this, {
                get: (target, propName) => target[propName],
                set(target, propName, propValue) {
                    setter(target, [ propName ], propValue);
                    ((target, propName) => {
                        (webWorkerCtx.$config$.logGetters || webWorkerCtx.$config$.logSetters) && logWorker(`Dimension cache cleared from style.${propName} setter`, target[WinIdKey]);
                    })(target, propName);
                    cachedDimensions.clear();
                    return true;
                }
            });
        }
        getPropertyValue(propName) {
            return this[propName];
        }
        setProperty(propName, propValue) {
            this[propName] = propValue;
        }
    }
    class NodeList {
        constructor(nodes) {
            (this._ = nodes).map(((node, index) => this[index] = node));
        }
        entries() {
            return this._.entries();
        }
        forEach(cb, thisArg) {
            this._.map(cb, thisArg);
        }
        item(index) {
            return this[index];
        }
        keys() {
            return this._.keys();
        }
        get length() {
            return len(this._);
        }
        values() {
            return this._.values();
        }
        [Symbol.iterator]() {
            return this._[Symbol.iterator]();
        }
    }
    const serializeForMain = ($winId$, $instanceId$, value, added, type) => void 0 !== value && (type = typeof value) ? "string" === type || "boolean" === type || "number" === type || null == value ? [ 0, value ] : "function" === type ? [ 4, {
        $winId$: $winId$,
        $instanceId$: $instanceId$,
        $refId$: setWorkerRef(value)
    } ] : (added = added || new Set) && Array.isArray(value) ? added.has(value) ? [ 1, [] ] : added.add(value) && [ 1, value.map((v => serializeForMain($winId$, $instanceId$, v, added))) ] : "object" === type ? "number" == typeof value[InstanceIdKey] ? [ 3, {
        $winId$: value[WinIdKey],
        $instanceId$: value[InstanceIdKey]
    } ] : value instanceof Event ? [ 5, serializeObjectForMain($winId$, $instanceId$, value, false, added) ] : supportsTrustedHTML && value instanceof TrustedHTML ? [ 0, value.toString() ] : value instanceof ArrayBuffer ? [ 8, value ] : ArrayBuffer.isView(value) ? [ 9, value.buffer, getConstructorName(value) ] : [ 2, serializeObjectForMain($winId$, $instanceId$, value, true, added) ] : void 0 : value;
    const supportsTrustedHTML = "undefined" != typeof TrustedHTML;
    const serializeObjectForMain = (winId, instanceId, obj, includeFunctions, added, serializedObj, propName, propValue) => {
        serializedObj = {};
        if (!added.has(obj)) {
            added.add(obj);
            for (propName in obj) {
                propValue = obj[propName];
                (includeFunctions || "function" != typeof propValue) && (serializedObj[propName] = serializeForMain(winId, instanceId, propValue, added));
            }
        }
        return serializedObj;
    };
    const serializeInstanceForMain = (instance, value) => instance ? serializeForMain(instance[WinIdKey], instance[InstanceIdKey], value) : [ 0, value ];
    const deserializeFromMain = (winId, instanceId, applyPath, serializedValueTransfer, serializedType, serializedValue, obj, key) => {
        if (serializedValueTransfer) {
            serializedType = serializedValueTransfer[0];
            serializedValue = serializedValueTransfer[1];
            if (0 === serializedType || 11 === serializedType || 12 === serializedType) {
                return serializedValue;
            }
            if (4 === serializedType) {
                return deserializeRefFromMain(applyPath, serializedValue);
            }
            if (6 === serializedType) {
                return noop;
            }
            if (3 === serializedType) {
                return getOrCreateSerializedInstance(serializedValue);
            }
            if (7 === serializedType) {
                return new NodeList(serializedValue.map(getOrCreateSerializedInstance));
            }
            if (10 === serializedType) {
                return new Attr(serializedValue);
            }
            if (1 === serializedType) {
                return serializedValue.map((v => deserializeFromMain(winId, instanceId, applyPath, v)));
            }
            obj = {};
            for (key in serializedValue) {
                obj[key] = deserializeFromMain(winId, instanceId, [ ...applyPath, key ], serializedValue[key]);
            }
            if (13 === serializedType) {
                return new CSSStyleDeclaration(winId, instanceId, applyPath, obj);
            }
            if (5 === serializedType) {
                if ("message" === obj.type && obj.origin) {
                    let postMessageKey = JSON.stringify(obj.data);
                    let postMessageData = postMessages.find((pm => pm.$data$ === postMessageKey));
                    let env;
                    if (postMessageData) {
                        env = environments[postMessageData.$winId$];
                        if (env) {
                            obj.source = env.$window$;
                            obj.origin = env.$location$.origin;
                        }
                    }
                }
                return new Proxy(new Event(obj.type, obj), {
                    get: (target, propName) => propName in obj ? obj[propName] : "function" == typeof target[String(propName)] ? noop : target[String(propName)]
                });
            }
            if (2 === serializedType) {
                return obj;
            }
        }
    };
    const getOrCreateSerializedInstance = ({$winId$: $winId$, $instanceId$: $instanceId$, $nodeName$: $nodeName$}) => getPlatformInstance($winId$, $instanceId$) || getOrCreateNodeInstance($winId$, $instanceId$, $nodeName$);
    const getPlatformInstance = (winId, instanceId, env) => (env = environments[winId]) && 0 === instanceId ? env.$window$ : 1 === instanceId ? env.$document$ : 2 === instanceId ? env.$documentElement$ : 3 === instanceId ? env.$head$ : 4 === instanceId ? env.$body$ : void 0;
    const deserializeRefFromMain = (applyPath, {$winId$: $winId$, $instanceId$: $instanceId$, $nodeName$: $nodeName$, $refId$: $refId$}) => {
        webWorkerRefsByRefId[$refId$] || webWorkerRefIdsByRef.set(webWorkerRefsByRefId[$refId$] = function(...args) {
            const instance = getOrCreateNodeInstance($winId$, $instanceId$, $nodeName$);
            return callMethod(instance, applyPath, args);
        }, $refId$);
        return webWorkerRefsByRefId[$refId$];
    };
    const HTMLStyleDescriptorMap = {
        sheet: {
            get() {
                return new CSSStyleSheet(this);
            }
        }
    };
    class CSSStyleSheet {
        constructor(ownerNode) {
            this.ownerNode = ownerNode;
        }
        get cssRules() {
            const ownerNode = this.ownerNode;
            return new Proxy({}, {
                get(target, propKey) {
                    const propName = String(propKey);
                    return "item" === propName ? index => getCssRule(ownerNode, index) : "length" === propName ? getCssRules(ownerNode).length : isNaN(propName) ? target[propKey] : getCssRule(ownerNode, propName);
                }
            });
        }
        insertRule(ruleText, index) {
            const cssRules = getCssRules(this.ownerNode);
            index = void 0 === index ? 0 : index;
            if (index >= 0 && index <= cssRules.length) {
                callMethod(this.ownerNode, [ "sheet", "insertRule" ], [ ruleText, index ], 2);
                cssRules.splice(index, 0, 0);
            }
            logDimensionCacheClearMethod(this.ownerNode, "insertRule");
            cachedDimensions.clear();
            return index;
        }
        deleteRule(index) {
            callMethod(this.ownerNode, [ "sheet", "deleteRule" ], [ index ], 2);
            getCssRules(this.ownerNode).splice(index, 1);
            logDimensionCacheClearMethod(this.ownerNode, "deleteRule");
            cachedDimensions.clear();
        }
    }
    const getCssRules = (ownerNode, cssRules) => {
        cssRules = getInstanceStateValue(ownerNode, 2);
        if (!cssRules) {
            cssRules = getter(ownerNode, [ "sheet", "cssRules" ]);
            setInstanceStateValue(ownerNode, 2, cssRules);
        }
        return cssRules;
    };
    const getCssRule = (ownerNode, index, cssRules) => {
        cssRules = getCssRules(ownerNode);
        0 === cssRules[index] && (cssRules[index] = getter(ownerNode, [ "sheet", "cssRules", parseInt(index, 10) ]));
        return cssRules[index];
    };
    const DocumentDescriptorMap = {
        body: {
            get() {
                return getEnv(this).$body$;
            }
        },
        createElement: {
            value(tagName) {
                tagName = tagName.toUpperCase();
                if (!IS_TAG_REG.test(tagName)) {
                    throw tagName + " not valid";
                }
                const winId = this[WinIdKey];
                const instanceId = randomId();
                const elm = getOrCreateNodeInstance(winId, instanceId, tagName);
                callMethod(this, [ "createElement" ], [ tagName ], 2, instanceId);
                if ("IFRAME" === tagName) {
                    const env = createEnvironment({
                        $winId$: instanceId,
                        $parentWinId$: winId,
                        $url$: "about:blank"
                    }, true);
                    env.$window$.fetch = fetch;
                    setter(elm, [ "srcdoc" ], getPartytownScript());
                } else if ("SCRIPT" === tagName) {
                    const scriptType = getInstanceStateValue(elm, 5);
                    isScriptJsType(scriptType) && setter(elm, [ "type" ], "text/partytown");
                }
                return elm;
            }
        },
        createElementNS: {
            value(namespace, tagName) {
                tagName = tagName.toLowerCase();
                const winId = this[WinIdKey];
                const instanceId = randomId();
                const nsElm = getOrCreateNodeInstance(winId, instanceId, tagName, namespace);
                callMethod(this, [ "createElementNS" ], [ namespace, tagName ], 2, instanceId);
                return nsElm;
            }
        },
        createTextNode: {
            value(text) {
                const winId = this[WinIdKey];
                const instanceId = randomId();
                const textNode = getOrCreateNodeInstance(winId, instanceId, "#text");
                callMethod(this, [ "createTextNode" ], [ text ], 2, instanceId);
                return textNode;
            }
        },
        createEvent: {
            value: type => new Event(type)
        },
        currentScript: {
            get() {
                const winId = this[WinIdKey];
                const currentScriptId = getEnv(this).$currentScriptId$;
                return currentScriptId > 0 ? getOrCreateNodeInstance(winId, currentScriptId, "SCRIPT") : null;
            }
        },
        defaultView: {
            get() {
                return (instance => getEnv(instance).$window$)(this);
            }
        },
        documentElement: {
            get() {
                return getEnv(this).$documentElement$;
            }
        },
        getElementsByTagName: {
            value(tagName) {
                tagName = tagName.toUpperCase();
                return "BODY" === tagName ? [ getEnv(this).$body$ ] : "HEAD" === tagName ? [ getEnv(this).$head$ ] : callMethod(this, [ "getElementsByTagName" ], [ tagName ]);
            }
        },
        head: {
            get() {
                return getEnv(this).$head$;
            }
        },
        implementation: {
            value: {
                hasFeature: () => true
            }
        },
        location: {
            get() {
                return getEnv(this).$location$;
            },
            set(url) {
                getEnv(this).$location$.href = url + "";
            }
        },
        nodeType: {
            value: 9
        },
        parentNode: {
            value: null
        },
        parentElement: {
            value: null
        },
        readyState: {
            value: "complete"
        }
    };
    const DocumentElementChildDescriptorMap = {
        parentElement: {
            get() {
                return this.parentNode;
            }
        },
        parentNode: {
            get() {
                return getEnv(this).$documentElement$;
            }
        }
    };
    const DocumentElementDescriptorMap = {
        parentElement: {
            value: null
        },
        parentNode: {
            get() {
                return getEnv(this).$document$;
            }
        }
    };
    const ElementDescriptorMap = {
        localName: {
            get() {
                return this[NodeNameKey].toLowerCase();
            }
        },
        namespaceURI: {
            get() {
                return this[NamespaceKey] || "http://www.w3.org/1999/xhtml";
            }
        },
        nodeType: {
            value: 1
        },
        tagName: {
            get() {
                return this[NodeNameKey];
            }
        }
    };
    const HTMLAnchorDescriptorMap = {};
    const anchorProps = commaSplit("hash,host,hostname,href,origin,pathname,port,protocol,search");
    anchorProps.map((anchorProp => {
        HTMLAnchorDescriptorMap[anchorProp] = {
            get() {
                let env = getEnv(this);
                let value = getInstanceStateValue(this, 4);
                let href;
                if ("string" != typeof value) {
                    href = getter(this, [ "href" ]);
                    setInstanceStateValue(this, 4, href);
                    value = new URL(href)[anchorProp];
                }
                return resolveToUrl(env, value)[anchorProp];
            },
            set(value) {
                let env = getEnv(this);
                let href = getInstanceStateValue(this, 4);
                let url = resolveToUrl(env, href);
                url[anchorProp] = new URL(value + "", url.href);
                setInstanceStateValue(this, 4, url.href);
                setter(this, [ "href" ], url.href);
            }
        };
    }));
    const HTMLIFrameDescriptorMap = {
        contentDocument: {
            get() {
                return getIframeEnv(this).$document$;
            }
        },
        contentWindow: {
            get() {
                return getIframeEnv(this).$window$;
            }
        },
        src: {
            get() {
                let src = getIframeEnv(this).$location$.href;
                src.startsWith("about") && (src = "");
                return src;
            },
            set(src) {
                let xhr = new XMLHttpRequest;
                let xhrStatus;
                let env = getIframeEnv(this);
                env.$location$.href = src = resolveUrl(getEnv(this), src);
                env.$isLoading$ = 1;
                setInstanceStateValue(this, 1, void 0);
                xhr.open("GET", src, false);
                xhr.send();
                xhrStatus = xhr.status;
                if (xhrStatus > 199 && xhrStatus < 300) {
                    setter(this, [ "srcdoc" ], `<base href="${src}">` + xhr.responseText.replace(/<script>/g, '<script type="text/partytown">').replace(/<script /g, '<script type="text/partytown" ').replace(/text\/javascript/g, "text/partytown") + getPartytownScript());
                    sendToMain(true);
                    webWorkerCtx.$postMessage$([ 5, env.$winId$ ]);
                } else {
                    setInstanceStateValue(this, 1, xhrStatus);
                    env.$isLoading$ = 0;
                }
            }
        },
        ...HTMLSrcElementDescriptorMap
    };
    const getIframeEnv = iframe => {
        const $winId$ = iframe[InstanceIdKey];
        environments[$winId$] || createEnvironment({
            $winId$: $winId$,
            $parentWinId$: iframe[WinIdKey],
            $url$: getter(iframe, [ "src" ]) || "about:blank"
        }, true);
        return environments[$winId$];
    };
    const defineWorkerInterface = ([cstrName, superCstrName, members, interfaceType, nodeName]) => {
        const SuperCstr = TrapConstructors[cstrName] ? WorkerTrapProxy : "EventTarget" === superCstrName ? WorkerEventTargetProxy : "Object" === superCstrName ? WorkerInstance : self[superCstrName];
        const Cstr = self[cstrName] = defineConstructorName(self[cstrName] || class extends SuperCstr {}, cstrName);
        12 === interfaceType && envGlobalConstructors.set(cstrName, Cstr);
        nodeName && (nodeConstructors[nodeName] = Cstr);
        members.map((([memberName, memberType, staticValue]) => {
            memberName in Cstr.prototype || memberName in SuperCstr.prototype || ("string" == typeof memberType ? definePrototypeProperty(Cstr, memberName, {
                get() {
                    if (!hasInstanceStateValue(this, memberName)) {
                        const winId = this[WinIdKey];
                        const instanceId = this[InstanceIdKey];
                        const applyPath = [ ...this[ApplyPathKey], memberName ];
                        const nodeName = this[NodeNameKey];
                        const PropCstr = self[memberType];
                        setInstanceStateValue(this, memberName, new PropCstr(winId, instanceId, applyPath, nodeName));
                    }
                    return getInstanceStateValue(this, memberName);
                },
                set(value) {
                    setInstanceStateValue(this, memberName, value);
                }
            }) : 5 === memberType ? definePrototypeValue(Cstr, memberName, (function(...args) {
                return callMethod(this, [ memberName ], args);
            })) : memberType > 0 && (void 0 !== staticValue ? definePrototypeValue(Cstr, memberName, staticValue) : definePrototypeProperty(Cstr, memberName, {
                get() {
                    return getter(this, [ memberName ]);
                },
                set(value) {
                    return setter(this, [ memberName ], value);
                }
            })));
        }));
    };
    const TrapConstructors = {
        CSSStyleDeclaration: 1,
        DOMStringMap: 1,
        NamedNodeMap: 1
    };
    const definePrototypeNodeType = (Cstr, nodeType) => definePrototypeValue(Cstr, "nodeType", nodeType);
    const cachedTreeProps = (Cstr, treeProps) => treeProps.map((propName => definePrototypeProperty(Cstr, propName, {
        get() {
            let cacheKey = getInstanceCacheKey(this, propName);
            let result = cachedStructure.get(cacheKey);
            if (!result) {
                result = getter(this, [ propName ]);
                cachedStructure.set(cacheKey, result);
            }
            return result;
        }
    })));
    const getInstanceCacheKey = (instance, memberName, args) => [ instance[WinIdKey], instance[InstanceIdKey], memberName, ...(args || EMPTY_ARRAY).map((arg => String(arg && arg[WinIdKey] ? arg[InstanceIdKey] : arg))) ].join(".");
    const cachedProps = (Cstr, propNames) => commaSplit(propNames).map((propName => definePrototypeProperty(Cstr, propName, {
        get() {
            hasInstanceStateValue(this, propName) || setInstanceStateValue(this, propName, getter(this, [ propName ]));
            return getInstanceStateValue(this, propName);
        },
        set(val) {
            getInstanceStateValue(this, propName) !== val && setter(this, [ propName ], val);
            setInstanceStateValue(this, propName, val);
        }
    })));
    const constantProps = (Cstr, props) => Object.keys(props).map((propName => definePrototypeValue(Cstr, propName, props[propName])));
    const cachedDimensionProps = Cstr => getterDimensionPropNames.map((propName => definePrototypeProperty(Cstr, propName, {
        get() {
            const dimension = cachedDimensions.get(getInstanceCacheKey(this, propName));
            if ("number" == typeof dimension) {
                return dimension;
            }
            const groupedDimensions = getter(this, [ propName ], getterDimensionPropNames);
            if (groupedDimensions && "object" == typeof groupedDimensions) {
                Object.entries(groupedDimensions).map((([dimensionPropName, value]) => cachedDimensions.set(getInstanceCacheKey(this, dimensionPropName), value)));
                return groupedDimensions[propName];
            }
            return groupedDimensions;
        }
    })));
    const cachedDimensionMethods = (Cstr, dimensionMethodNames) => dimensionMethodNames.map((methodName => {
        Cstr.prototype[methodName] = function(...args) {
            let cacheKey = getInstanceCacheKey(this, methodName, args);
            let dimensions = cachedDimensions.get(cacheKey);
            if (!dimensions) {
                dimensions = callMethod(this, [ methodName ], args);
                cachedDimensions.set(cacheKey, dimensions);
            }
            return dimensions;
        };
    }));
    class Performance extends WorkerInstance {
        now() {
            return performance.now();
        }
    }
    const initWebWorker = initWebWorkerData => {
        const config = webWorkerCtx.$config$ = JSON.parse(initWebWorkerData.$config$);
        webWorkerCtx.$importScripts$ = importScripts.bind(self);
        webWorkerCtx.$libPath$ = initWebWorkerData.$libPath$;
        webWorkerCtx.$postMessage$ = postMessage.bind(self);
        webWorkerCtx.$sharedDataBuffer$ = initWebWorkerData.$sharedDataBuffer$;
        webWorkerlocalStorage.set(origin, initWebWorkerData.$localStorage$);
        webWorkerSessionStorage.set(origin, initWebWorkerData.$sessionStorage$);
        delete self.postMessage;
        delete self.importScripts;
        self.Node = Node;
        self.Window = Window;
        self.CSSStyleSheet = CSSStyleSheet;
        self.Performance = Performance;
        initWebWorkerData.$interfaces$.map(defineWorkerInterface);
        (() => {
            const Document = self.Document;
            const DocumentFragment = self.DocumentFragment;
            const Element = self.Element;
            commaSplit("atob,btoa,crypto,indexedDB,setTimeout,setInterval,clearTimeout,clearInterval").map((memberName => delete Window.prototype[memberName]));
            definePrototypePropertyDescriptor(Element, ElementDescriptorMap);
            definePrototypePropertyDescriptor(Document, DocumentDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLAnchorElement, HTMLAnchorDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLIFrameElement, HTMLIFrameDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLScriptElement, HTMLScriptDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLStyleElement, HTMLStyleDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLHeadElement, DocumentElementChildDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLBodyElement, DocumentElementChildDescriptorMap);
            definePrototypePropertyDescriptor(self.HTMLHtmlElement, DocumentElementDescriptorMap);
            constantProps(CSSStyleSheet, {
                type: "text/css"
            });
            definePrototypeNodeType(self.Comment, 8);
            definePrototypeNodeType(self.DocumentType, 10);
            definePrototypeNodeType(DocumentFragment, 11);
            cachedTreeProps(Node, nodeStructurePropNames);
            cachedTreeProps(Element, elementStructurePropNames);
            cachedTreeProps(DocumentFragment, elementStructurePropNames);
            cachedDimensionProps(Element);
            cachedDimensionMethods(Element, elementGetterDimensionMethodNames);
            cachedDimensionProps(Window);
            cachedDimensionMethods(Window, windowGetterDimensionMethodNames);
            cachedProps(Window, "devicePixelRatio");
            cachedProps(Document, "compatMode,referrer");
            cachedProps(Element, "id");
        })();
        [ "resolveUrl", "get", "set", "apply" ].map((configName => {
            config[configName] && (config[configName] = new Function("return " + config[configName])());
        }));
        webWorkerCtx.$isInitialized$ = 1;
        logWorker("Initialized web worker");
    };
    const queuedEvents = [];
    const receiveMessageFromSandboxToWorker = ev => {
        const msg = ev.data;
        const msgType = msg[0];
        const msgValue = msg[1];
        if (webWorkerCtx.$isInitialized$) {
            if (5 === msgType) {
                (async initScript => {
                    let winId = initScript.$winId$;
                    let instanceId = initScript.$instanceId$;
                    let instance = getOrCreateNodeInstance(winId, instanceId, "SCRIPT");
                    let scriptContent = initScript.$content$;
                    let scriptSrc = initScript.$url$;
                    let scriptOrgSrc = initScript.$orgUrl$;
                    let errorMsg = "";
                    let env = environments[winId];
                    let rsp;
                    if (scriptSrc) {
                        try {
                            scriptSrc = resolveToUrl(env, scriptSrc) + "";
                            setInstanceStateValue(instance, 4, scriptSrc);
                            webWorkerCtx.$config$.logScriptExecution && logWorker(`Execute script (${instanceId}) src: ${scriptOrgSrc}`, winId);
                            rsp = await self.fetch(scriptSrc);
                            if (rsp.ok) {
                                scriptContent = await rsp.text();
                                env.$currentScriptId$ = instanceId;
                                run(env, scriptContent, scriptOrgSrc || scriptSrc);
                                runStateLoadHandlers(instance, "load");
                            } else {
                                errorMsg = rsp.statusText;
                                runStateLoadHandlers(instance, "error");
                            }
                        } catch (urlError) {
                            console.error(urlError);
                            errorMsg = String(urlError.stack || urlError);
                            runStateLoadHandlers(instance, "error");
                        }
                    } else {
                        scriptContent && (errorMsg = runScriptContent(env, instanceId, scriptContent, winId, errorMsg));
                    }
                    env.$currentScriptId$ = -1;
                    webWorkerCtx.$postMessage$([ 4, winId, instanceId, errorMsg ]);
                })(msgValue);
            } else if (7 === msgType) {
                (({$winId$: $winId$, $instanceId$: $instanceId$, $refId$: $refId$, $thisArg$: $thisArg$, $args$: $args$}) => {
                    if (webWorkerRefsByRefId[$refId$]) {
                        try {
                            webWorkerRefsByRefId[$refId$].apply(deserializeFromMain($winId$, $instanceId$, [], $thisArg$), deserializeFromMain($winId$, $instanceId$, [], $args$));
                        } catch (e) {
                            console.error(e);
                        }
                    }
                })(msgValue);
            } else if (8 === msgType) {
                (({$winId$: $winId$, $forward$: $forward$, $args$: $args$}) => {
                    try {
                        let target = environments[$winId$].$window$;
                        let i = 0;
                        let l = len($forward$);
                        for (;i < l; i++) {
                            i + 1 < l ? target = target[$forward$[i]] : target[$forward$[i]].apply(target, deserializeFromMain(null, 0, [], $args$));
                        }
                    } catch (e) {
                        console.error(e);
                    }
                })(msgValue);
            } else if (3 === msgType) {
                createEnvironment(msgValue);
            } else if (6 === msgType) {
                if (1 !== environments[msgValue].$isInitialized$) {
                    const winId = msgValue;
                    const env = environments[winId];
                    const winType = env.$winId$ === env.$parentWinId$ ? "top" : "iframe";
                    logWorker(`Initialized ${winType} window ${normalizedWinId(winId)} environment (${winId}) 🎉`, winId);
                }
                environments[msgValue].$isInitialized$ = 1;
                environments[msgValue].$isLoading$ = 0;
            } else {
                11 === msgType && (environments[msg[1]].$location$.href = msg[2]);
            }
        } else if (1 === msgType) {
            initWebWorker(msg[1]);
            webWorkerCtx.$postMessage$([ 2 ]);
            queuedEvents.length && logWorker(`Queued ready messages: ${queuedEvents.length}`);
            [ ...queuedEvents ].map(receiveMessageFromSandboxToWorker);
            queuedEvents.length = 0;
        } else {
            queuedEvents.push(ev);
        }
    };
    self.onmessage = receiveMessageFromSandboxToWorker;
    postMessage([ 0 ]);
})(self);
