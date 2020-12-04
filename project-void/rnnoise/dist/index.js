var Module = (function () {
    var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;

    return(function (Module) {
        Module = Module || {};

        null;
        var Module = typeof Module !== "undefined" ? Module : {};
        var readyPromiseResolve,
            readyPromiseReject;
        Module["ready"] = new Promise(function (resolve, reject) {
            readyPromiseResolve = resolve;
            readyPromiseReject = reject
        });
        var moduleOverrides = {};
        var key;
        for (key in Module) {
            if (Module.hasOwnProperty(key)) {
                moduleOverrides[key] = Module[key]
            }
        }
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = function (status, toThrow) {
            throw toThrow
        };
        var ENVIRONMENT_IS_WEB = false;
        var ENVIRONMENT_IS_WORKER = false;
        var ENVIRONMENT_IS_NODE = false;
        var ENVIRONMENT_IS_SHELL = false;
        ENVIRONMENT_IS_WEB = typeof window === "object";
        ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
        ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
        ENVIRONMENT_IS_SHELL = ! ENVIRONMENT_IS_WEB && ! ENVIRONMENT_IS_NODE && ! ENVIRONMENT_IS_WORKER;
        var scriptDirectory = "";
        function locateFile(path) {
            if (Module["locateFile"]) {
                return Module["locateFile"](path, scriptDirectory)
            }
            return scriptDirectory + path
        }
        var read_,
            readAsync,
            readBinary,
            setWindowTitle;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
                scriptDirectory = self.location.href
            } else if (typeof document !== "undefined" && document.currentScript) {
                scriptDirectory = document.currentScript.src
            }
            if (_scriptDir) {
                scriptDirectory = _scriptDir
            }
            if (scriptDirectory.indexOf("blob:") !== 0) {
                scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1)
            } else {
                scriptDirectory = ""
            }
            {
                read_ = function shell_read(url) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, false);
                    xhr.send(null);
                    return xhr.responseText
                };
                if (ENVIRONMENT_IS_WORKER) {
                    readBinary = function readBinary(url) {
                        var xhr = new XMLHttpRequest;
                        xhr.open("GET", url, false);
                        xhr.responseType = "arraybuffer";
                        xhr.send(null);
                        return new Uint8Array(xhr.response)
                    }
                }
                readAsync = function readAsync(url, onload, onerror) {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", url, true);
                    xhr.responseType = "arraybuffer";
                    xhr.onload = function xhr_onload() {
                        if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                            onload(xhr.response);
                            return
                        }
                        onerror()
                    };
                    xhr.onerror = onerror;
                    xhr.send(null)
                }
            } setWindowTitle = function (title) {
                document.title = title
            }
        } else {}
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.warn.bind(console);
        for (key in moduleOverrides) {
            if (moduleOverrides.hasOwnProperty(key)) {
                Module[key] = moduleOverrides[key]
            }
        }
        moduleOverrides = null;
        if (Module["arguments"]) 
            arguments_ = Module["arguments"];
        
        if (Module["thisProgram"]) 
            thisProgram = Module["thisProgram"];
        
        if (Module["quit"]) 
            quit_ = Module["quit"];
        
        var wasmBinary;
        if (Module["wasmBinary"]) 
            wasmBinary = Module["wasmBinary"];
        
        var noExitRuntime;
        if (Module["noExitRuntime"]) 
            noExitRuntime = Module["noExitRuntime"];
        
        if (typeof WebAssembly !== "object") {
            abort("no native wasm support detected")
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS = 0;
        function alignUp(x, multiple) {
            if (x % multiple > 0) {
                x += multiple - x % multiple
            }
            return x
        }
        var buffer,
            HEAP8,
            HEAPU8,
            HEAP16,
            HEAPU16,
            HEAP32,
            HEAPU32,
            HEAPF32,
            HEAPF64;
        function updateGlobalBufferAndViews(buf) {
            buffer = buf;
            Module["HEAP8"] = HEAP8 = new Int8Array(buf);
            Module["HEAP16"] = HEAP16 = new Int16Array(buf);
            Module["HEAP32"] = HEAP32 = new Int32Array(buf);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
            Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
            Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
            Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
            Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
        }
        var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 16777216;
        if (Module["wasmMemory"]) {
            wasmMemory = Module["wasmMemory"]
        } else {
            wasmMemory = new WebAssembly.Memory({
                "initial": INITIAL_MEMORY / 65536,
                "maximum": 2147483648 / 65536
            })
        }
        if (wasmMemory) {
            buffer = wasmMemory.buffer
        }
        INITIAL_MEMORY = buffer.byteLength;
        updateGlobalBufferAndViews(buffer);
        var wasmTable;
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATMAIN__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
            if (Module["preRun"]) {
                if (typeof Module["preRun"] == "function") 
                    Module["preRun"] = [Module["preRun"]];
                
                while (Module["preRun"].length) {
                    addOnPreRun(Module["preRun"].shift())
                }
            }
            callRuntimeCallbacks(__ATPRERUN__)
        }
        function initRuntime() {
            runtimeInitialized = true;
            callRuntimeCallbacks(__ATINIT__)
        }
        function preMain() {
            callRuntimeCallbacks(__ATMAIN__)
        }
        function postRun() {
            if (Module["postRun"]) {
                if (typeof Module["postRun"] == "function") 
                    Module["postRun"] = [Module["postRun"]];
                
                while (Module["postRun"].length) {
                    addOnPostRun(Module["postRun"].shift())
                }
            }
            callRuntimeCallbacks(__ATPOSTRUN__)
        }
        function addOnPreRun(cb) {
            __ATPRERUN__.unshift(cb)
        }
        function addOnPostRun(cb) {
            __ATPOSTRUN__.unshift(cb)
        }
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        function addRunDependency(id) {
            runDependencies++;
            if (Module["monitorRunDependencies"]) {
                Module["monitorRunDependencies"](runDependencies)
            }
        }
        function removeRunDependency(id) {
            runDependencies--;
            if (Module["monitorRunDependencies"]) {
                Module["monitorRunDependencies"](runDependencies)
            }
            if (runDependencies == 0) {
                if (runDependencyWatcher !== null) {
                    clearInterval(runDependencyWatcher);
                    runDependencyWatcher = null
                }
                if (dependenciesFulfilled) {
                    var callback = dependenciesFulfilled;
                    dependenciesFulfilled = null;
                    callback()
                }
            }
        }
        Module["preloadedImages"] = {};
        Module["preloadedAudios"] = {};
        function abort(what) {
            if (Module["onAbort"]) {
                Module["onAbort"](what)
            }
            what += "";
            err(what);
            ABORT = true;
            EXITSTATUS = 1;
            what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
            var e = new WebAssembly.RuntimeError(what);
            readyPromiseReject(e);
            throw e
        }
        function hasPrefix(str, prefix) {
            return String.prototype.startsWith ? str.startsWith(prefix) : str.indexOf(prefix) === 0
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        function isDataURI(filename) {
            return hasPrefix(filename, dataURIPrefix)
        }
        var wasmBinaryFile = "rnnoise.wasm";
        if (! isDataURI(wasmBinaryFile)) {
            wasmBinaryFile = locateFile(wasmBinaryFile)
        }
        function getBinary() {
            try {
                if (wasmBinary) {
                    return new Uint8Array(wasmBinary)
                }
                if (readBinary) {
                    return readBinary(wasmBinaryFile)
                } else {
                    throw "both async and sync fetching of the wasm failed"
                }
            } catch (err) {
                abort(err)
            }
        }
        function getBinaryPromise() {
            if (! wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
                return fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function (response) {
                    if (! response["ok"]) {
                        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
                    }
                    return response["arrayBuffer"]()
                }).catch(function () {
                    return getBinary()
                })
            }
            return Promise.resolve().then(getBinary)
        }
        function createWasm() {
            var info = {
                "a": asmLibraryArg
            };
            function receiveInstance(instance, module) {
                var exports = instance.exports;
                Module["asm"] = exports;
                wasmTable = Module["asm"]["d"];
                removeRunDependency("wasm-instantiate")
            }
            addRunDependency("wasm-instantiate");
            function receiveInstantiatedSource(output) {
                receiveInstance(output["instance"])
            }
            function instantiateArrayBuffer(receiver) {
                return getBinaryPromise().then(function (binary) {
                    return WebAssembly.instantiate(binary, info)
                }).then(receiver, function (reason) {
                    err("failed to asynchronously prepare wasm: " + reason);
                    abort(reason)
                })
            }
            function instantiateAsync() {
                if (! wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && ! isDataURI(wasmBinaryFile) && typeof fetch === "function") {
                    return fetch(wasmBinaryFile, {credentials: "same-origin"}).then(function (response) {
                        var result = WebAssembly.instantiateStreaming(response, info);
                        return result.then(receiveInstantiatedSource, function (reason) {
                            err("wasm streaming compile failed: " + reason);
                            err("falling back to ArrayBuffer instantiation");
                            return instantiateArrayBuffer(receiveInstantiatedSource)
                        })
                    })
                } else {
                    return instantiateArrayBuffer(receiveInstantiatedSource)
                }
            }
            if (Module["instantiateWasm"]) {
                try {
                    var exports = Module["instantiateWasm"](info, receiveInstance);
                    return exports
                } catch (e) {
                    err("Module.instantiateWasm callback failed with error: " + e);
                    return false
                }
            }
            instantiateAsync().catch(readyPromiseReject);
            return {}
        }
        function callRuntimeCallbacks(callbacks) {
            while (callbacks.length > 0) {
                var callback = callbacks.shift();
                if (typeof callback == "function") {
                    callback(Module);
                    continue
                }
                var func = callback.func;
                if (typeof func === "number") {
                    if (callback.arg === undefined) {
                        wasmTable.get(func)()
                    } else {
                        wasmTable.get(func)(callback.arg)
                    }
                } else {
                    func(callback.arg === undefined ? null : callback.arg)
                }
            }
        }
        function _emscripten_memcpy_big(dest, src, num) {
            HEAPU8.copyWithin(dest, src, src + num)
        }
        function _emscripten_get_heap_size() {
            return HEAPU8.length
        }
        function emscripten_realloc_buffer(size) {
            try {
                wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
                updateGlobalBufferAndViews(wasmMemory.buffer);
                return 1
            } catch (e) {}
        }
        function _emscripten_resize_heap(requestedSize) {
            requestedSize = requestedSize >>> 0;
            var oldSize = _emscripten_get_heap_size();
            var maxHeapSize = 2147483648;
            if (requestedSize > maxHeapSize) {
                return false
            }
            var minHeapSize = 16777216;
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
                var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
                overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
                var newSize = Math.min(maxHeapSize, alignUp(Math.max(minHeapSize, requestedSize, overGrownHeapSize), 65536));
                var replacement = emscripten_realloc_buffer(newSize);
                if (replacement) {
                    return true
                }
            }
            return false
        }
        __ATINIT__.push({
            func: function () {
                ___wasm_call_ctors()
            }
        });
        var asmLibraryArg = {
            "b": _emscripten_memcpy_big,
            "c": _emscripten_resize_heap,
            "a": wasmMemory
        };
        var asm = createWasm();
        var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function () {
            return(___wasm_call_ctors = Module["___wasm_call_ctors"] = Module["asm"]["e"]).apply(null, arguments)
        };
        var _rnnoise_init = Module["_rnnoise_init"] = function () {
            return(_rnnoise_init = Module["_rnnoise_init"] = Module["asm"]["f"]).apply(null, arguments)
        };
        var _rnnoise_create = Module["_rnnoise_create"] = function () {
            return(_rnnoise_create = Module["_rnnoise_create"] = Module["asm"]["g"]).apply(null, arguments)
        };
        var _malloc = Module["_malloc"] = function () {
            return(_malloc = Module["_malloc"] = Module["asm"]["h"]).apply(null, arguments)
        };
        var _rnnoise_destroy = Module["_rnnoise_destroy"] = function () {
            return(_rnnoise_destroy = Module["_rnnoise_destroy"] = Module["asm"]["i"]).apply(null, arguments)
        };
        var _free = Module["_free"] = function () {
            return(_free = Module["_free"] = Module["asm"]["j"]).apply(null, arguments)
        };
        var _rnnoise_process_frame = Module["_rnnoise_process_frame"] = function () {
            return(_rnnoise_process_frame = Module["_rnnoise_process_frame"] = Module["asm"]["k"]).apply(null, arguments)
        };
        var calledRun;
        dependenciesFulfilled = function runCaller() {
            if (! calledRun) 
                run();
            
            if (! calledRun) 
                dependenciesFulfilled = runCaller
            
        };
        function run(args) {
            args = args || arguments_;
            if (runDependencies > 0) {
                return
            }
            preRun();
            if (runDependencies > 0) 
                return;
            
            function doRun() {
                if (calledRun) 
                    return;
                
                calledRun = true;
                Module["calledRun"] = true;
                if (ABORT) 
                    return;
                
                initRuntime();
                preMain();
                readyPromiseResolve(Module);
                if (Module["onRuntimeInitialized"]) 
                    Module["onRuntimeInitialized"]();
                
                postRun()
            }
            if (Module["setStatus"]) {
                Module["setStatus"]("Running...");
                setTimeout(function () {
                    setTimeout(function () {
                        Module["setStatus"]("")
                    }, 1);
                    doRun()
                }, 1)
            } else {
                doRun()
            }
        }
        Module["run"] = run;
        if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function") 
                Module["preInit"] = [Module["preInit"]];
            
            while (Module["preInit"].length > 0) {
                Module["preInit"].pop()()
            }
        }
        noExitRuntime = true;
        run();


        return Module.ready
    });
})();
export default Module;