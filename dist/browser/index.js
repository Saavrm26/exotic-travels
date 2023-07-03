var $3Tkqa$buffer = require("buffer");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
/* eslint-disable */ /* eslint-disable */ "use strict";
function $b9ae456279d51ead$export$2e2bcd8739ae039(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}


"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString: $217d8823a25804d0$var$toString } = Object.prototype;
const { getPrototypeOf: $217d8823a25804d0$var$getPrototypeOf } = Object;
const $217d8823a25804d0$var$kindOf = ((cache)=>(thing)=>{
        const str = $217d8823a25804d0$var$toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const $217d8823a25804d0$var$kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>$217d8823a25804d0$var$kindOf(thing) === type;
};
const $217d8823a25804d0$var$typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray: $217d8823a25804d0$var$isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const $217d8823a25804d0$var$isUndefined = $217d8823a25804d0$var$typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function $217d8823a25804d0$var$isBuffer(val) {
    return val !== null && !$217d8823a25804d0$var$isUndefined(val) && val.constructor !== null && !$217d8823a25804d0$var$isUndefined(val.constructor) && $217d8823a25804d0$var$isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const $217d8823a25804d0$var$isArrayBuffer = $217d8823a25804d0$var$kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function $217d8823a25804d0$var$isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && $217d8823a25804d0$var$isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const $217d8823a25804d0$var$isString = $217d8823a25804d0$var$typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const $217d8823a25804d0$var$isFunction = $217d8823a25804d0$var$typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const $217d8823a25804d0$var$isNumber = $217d8823a25804d0$var$typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const $217d8823a25804d0$var$isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const $217d8823a25804d0$var$isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const $217d8823a25804d0$var$isPlainObject = (val)=>{
    if ($217d8823a25804d0$var$kindOf(val) !== "object") return false;
    const prototype = $217d8823a25804d0$var$getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const $217d8823a25804d0$var$isDate = $217d8823a25804d0$var$kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $217d8823a25804d0$var$isFile = $217d8823a25804d0$var$kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const $217d8823a25804d0$var$isBlob = $217d8823a25804d0$var$kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const $217d8823a25804d0$var$isFileList = $217d8823a25804d0$var$kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const $217d8823a25804d0$var$isStream = (val)=>$217d8823a25804d0$var$isObject(val) && $217d8823a25804d0$var$isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const $217d8823a25804d0$var$isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || $217d8823a25804d0$var$isFunction(thing.append) && ((kind = $217d8823a25804d0$var$kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && $217d8823a25804d0$var$isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const $217d8823a25804d0$var$isURLSearchParams = $217d8823a25804d0$var$kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const $217d8823a25804d0$var$trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function $217d8823a25804d0$var$forEach(obj, fn, { allOwnKeys: allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if ($217d8823a25804d0$var$isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function $217d8823a25804d0$var$findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const $217d8823a25804d0$var$_global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : $parcel$global;
})();
const $217d8823a25804d0$var$isContextDefined = (context)=>!$217d8823a25804d0$var$isUndefined(context) && context !== $217d8823a25804d0$var$_global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function $217d8823a25804d0$var$merge() {
    const { caseless: caseless } = $217d8823a25804d0$var$isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && $217d8823a25804d0$var$findKey(result, key) || key;
        if ($217d8823a25804d0$var$isPlainObject(result[targetKey]) && $217d8823a25804d0$var$isPlainObject(val)) result[targetKey] = $217d8823a25804d0$var$merge(result[targetKey], val);
        else if ($217d8823a25804d0$var$isPlainObject(val)) result[targetKey] = $217d8823a25804d0$var$merge({}, val);
        else if ($217d8823a25804d0$var$isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && $217d8823a25804d0$var$forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const $217d8823a25804d0$var$extend = (a, b, thisArg, { allOwnKeys: allOwnKeys } = {})=>{
    $217d8823a25804d0$var$forEach(b, (val, key)=>{
        if (thisArg && $217d8823a25804d0$var$isFunction(val)) a[key] = (0, $b9ae456279d51ead$export$2e2bcd8739ae039)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys: allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const $217d8823a25804d0$var$stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const $217d8823a25804d0$var$inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const $217d8823a25804d0$var$toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && $217d8823a25804d0$var$getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const $217d8823a25804d0$var$endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const $217d8823a25804d0$var$toArray = (thing)=>{
    if (!thing) return null;
    if ($217d8823a25804d0$var$isArray(thing)) return thing;
    let i = thing.length;
    if (!$217d8823a25804d0$var$isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const $217d8823a25804d0$var$isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && $217d8823a25804d0$var$getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const $217d8823a25804d0$var$forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const $217d8823a25804d0$var$matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const $217d8823a25804d0$var$isHTMLForm = $217d8823a25804d0$var$kindOfTest("HTMLFormElement");
const $217d8823a25804d0$var$toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const $217d8823a25804d0$var$hasOwnProperty = (({ hasOwnProperty: hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const $217d8823a25804d0$var$isRegExp = $217d8823a25804d0$var$kindOfTest("RegExp");
const $217d8823a25804d0$var$reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    $217d8823a25804d0$var$forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const $217d8823a25804d0$var$freezeMethods = (obj)=>{
    $217d8823a25804d0$var$reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if ($217d8823a25804d0$var$isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!$217d8823a25804d0$var$isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const $217d8823a25804d0$var$toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    $217d8823a25804d0$var$isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const $217d8823a25804d0$var$noop = ()=>{};
const $217d8823a25804d0$var$toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const $217d8823a25804d0$var$ALPHA = "abcdefghijklmnopqrstuvwxyz";
const $217d8823a25804d0$var$DIGIT = "0123456789";
const $217d8823a25804d0$var$ALPHABET = {
    DIGIT: $217d8823a25804d0$var$DIGIT,
    ALPHA: $217d8823a25804d0$var$ALPHA,
    ALPHA_DIGIT: $217d8823a25804d0$var$ALPHA + $217d8823a25804d0$var$ALPHA.toUpperCase() + $217d8823a25804d0$var$DIGIT
};
const $217d8823a25804d0$var$generateString = (size = 16, alphabet = $217d8823a25804d0$var$ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length: length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function $217d8823a25804d0$var$isSpecCompliantForm(thing) {
    return !!(thing && $217d8823a25804d0$var$isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const $217d8823a25804d0$var$toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if ($217d8823a25804d0$var$isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = $217d8823a25804d0$var$isArray(source) ? [] : {};
                $217d8823a25804d0$var$forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !$217d8823a25804d0$var$isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const $217d8823a25804d0$var$isAsyncFn = $217d8823a25804d0$var$kindOfTest("AsyncFunction");
const $217d8823a25804d0$var$isThenable = (thing)=>thing && ($217d8823a25804d0$var$isObject(thing) || $217d8823a25804d0$var$isFunction(thing)) && $217d8823a25804d0$var$isFunction(thing.then) && $217d8823a25804d0$var$isFunction(thing.catch);
var $217d8823a25804d0$export$2e2bcd8739ae039 = {
    isArray: $217d8823a25804d0$var$isArray,
    isArrayBuffer: $217d8823a25804d0$var$isArrayBuffer,
    isBuffer: $217d8823a25804d0$var$isBuffer,
    isFormData: $217d8823a25804d0$var$isFormData,
    isArrayBufferView: $217d8823a25804d0$var$isArrayBufferView,
    isString: $217d8823a25804d0$var$isString,
    isNumber: $217d8823a25804d0$var$isNumber,
    isBoolean: $217d8823a25804d0$var$isBoolean,
    isObject: $217d8823a25804d0$var$isObject,
    isPlainObject: $217d8823a25804d0$var$isPlainObject,
    isUndefined: $217d8823a25804d0$var$isUndefined,
    isDate: $217d8823a25804d0$var$isDate,
    isFile: $217d8823a25804d0$var$isFile,
    isBlob: $217d8823a25804d0$var$isBlob,
    isRegExp: $217d8823a25804d0$var$isRegExp,
    isFunction: $217d8823a25804d0$var$isFunction,
    isStream: $217d8823a25804d0$var$isStream,
    isURLSearchParams: $217d8823a25804d0$var$isURLSearchParams,
    isTypedArray: $217d8823a25804d0$var$isTypedArray,
    isFileList: $217d8823a25804d0$var$isFileList,
    forEach: $217d8823a25804d0$var$forEach,
    merge: $217d8823a25804d0$var$merge,
    extend: $217d8823a25804d0$var$extend,
    trim: $217d8823a25804d0$var$trim,
    stripBOM: $217d8823a25804d0$var$stripBOM,
    inherits: $217d8823a25804d0$var$inherits,
    toFlatObject: $217d8823a25804d0$var$toFlatObject,
    kindOf: $217d8823a25804d0$var$kindOf,
    kindOfTest: $217d8823a25804d0$var$kindOfTest,
    endsWith: $217d8823a25804d0$var$endsWith,
    toArray: $217d8823a25804d0$var$toArray,
    forEachEntry: $217d8823a25804d0$var$forEachEntry,
    matchAll: $217d8823a25804d0$var$matchAll,
    isHTMLForm: $217d8823a25804d0$var$isHTMLForm,
    hasOwnProperty: $217d8823a25804d0$var$hasOwnProperty,
    hasOwnProp: $217d8823a25804d0$var$hasOwnProperty,
    reduceDescriptors: $217d8823a25804d0$var$reduceDescriptors,
    freezeMethods: $217d8823a25804d0$var$freezeMethods,
    toObjectSet: $217d8823a25804d0$var$toObjectSet,
    toCamelCase: $217d8823a25804d0$var$toCamelCase,
    noop: $217d8823a25804d0$var$noop,
    toFiniteNumber: $217d8823a25804d0$var$toFiniteNumber,
    findKey: $217d8823a25804d0$var$findKey,
    global: $217d8823a25804d0$var$_global,
    isContextDefined: $217d8823a25804d0$var$isContextDefined,
    ALPHABET: $217d8823a25804d0$var$ALPHABET,
    generateString: $217d8823a25804d0$var$generateString,
    isSpecCompliantForm: $217d8823a25804d0$var$isSpecCompliantForm,
    toJSONObject: $217d8823a25804d0$var$toJSONObject,
    isAsyncFn: $217d8823a25804d0$var$isAsyncFn,
    isThenable: $217d8823a25804d0$var$isThenable
};







"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function $36b3a2440dea8bed$var$AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, $217d8823a25804d0$export$2e2bcd8739ae039).inherits($36b3a2440dea8bed$var$AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, $217d8823a25804d0$export$2e2bcd8739ae039).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const $36b3a2440dea8bed$var$prototype = $36b3a2440dea8bed$var$AxiosError.prototype;
const $36b3a2440dea8bed$var$descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    $36b3a2440dea8bed$var$descriptors[code] = {
        value: code
    };
});
Object.defineProperties($36b3a2440dea8bed$var$AxiosError, $36b3a2440dea8bed$var$descriptors);
Object.defineProperty($36b3a2440dea8bed$var$prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
$36b3a2440dea8bed$var$AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create($36b3a2440dea8bed$var$prototype);
    (0, $217d8823a25804d0$export$2e2bcd8739ae039).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    $36b3a2440dea8bed$var$AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
var $36b3a2440dea8bed$export$2e2bcd8739ae039 = $36b3a2440dea8bed$var$AxiosError;


// eslint-disable-next-line strict
var $14f2f86890e5a585$export$2e2bcd8739ae039 = null;



var $84ddd1136bba04d2$require$Buffer = $3Tkqa$buffer.Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function $84ddd1136bba04d2$var$isVisitable(thing) {
    return (0, $217d8823a25804d0$export$2e2bcd8739ae039).isPlainObject(thing) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function $84ddd1136bba04d2$var$removeBrackets(key) {
    return (0, $217d8823a25804d0$export$2e2bcd8739ae039).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function $84ddd1136bba04d2$var$renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = $84ddd1136bba04d2$var$removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function $84ddd1136bba04d2$var$isFlatArray(arr) {
    return (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(arr) && !arr.some($84ddd1136bba04d2$var$isVisitable);
}
const $84ddd1136bba04d2$var$predicates = (0, $217d8823a25804d0$export$2e2bcd8739ae039).toFlatObject((0, $217d8823a25804d0$export$2e2bcd8739ae039), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function $84ddd1136bba04d2$var$toFormData(obj, formData, options) {
    if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, $14f2f86890e5a585$export$2e2bcd8739ae039) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, $217d8823a25804d0$export$2e2bcd8739ae039).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isSpecCompliantForm(formData);
    if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isDate(value)) return value.toISOString();
        if (!useBlob && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isBlob(value)) throw new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("Blob is not supported. Use a Buffer instead.");
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isArrayBuffer(value) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : $84ddd1136bba04d2$require$Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(value) && $84ddd1136bba04d2$var$isFlatArray(value) || ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isFileList(value) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).endsWith(key, "[]")) && (arr = (0, $217d8823a25804d0$export$2e2bcd8739ae039).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = $84ddd1136bba04d2$var$removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? $84ddd1136bba04d2$var$renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if ($84ddd1136bba04d2$var$isVisitable(value)) return true;
        formData.append($84ddd1136bba04d2$var$renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign($84ddd1136bba04d2$var$predicates, {
        defaultVisitor: defaultVisitor,
        convertValue: convertValue,
        isVisitable: $84ddd1136bba04d2$var$isVisitable
    });
    function build(value, path) {
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(value, function each(el, key) {
            const result = !((0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(el) || el === null) && visitor.call(formData, el, (0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
var $84ddd1136bba04d2$export$2e2bcd8739ae039 = $84ddd1136bba04d2$var$toFormData;


"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function $1bdcb6f4e402b687$var$encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function $1bdcb6f4e402b687$var$AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, $84ddd1136bba04d2$export$2e2bcd8739ae039)(params, this, options);
}
const $1bdcb6f4e402b687$var$prototype = $1bdcb6f4e402b687$var$AxiosURLSearchParams.prototype;
$1bdcb6f4e402b687$var$prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
$1bdcb6f4e402b687$var$prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, $1bdcb6f4e402b687$var$encode);
    } : $1bdcb6f4e402b687$var$encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
var $1bdcb6f4e402b687$export$2e2bcd8739ae039 = $1bdcb6f4e402b687$var$AxiosURLSearchParams;


"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function $23d45ffb51f791c5$var$encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $23d45ffb51f791c5$export$2e2bcd8739ae039(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || $23d45ffb51f791c5$var$encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isURLSearchParams(params) ? params.toString() : new (0, $1bdcb6f4e402b687$export$2e2bcd8739ae039)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}



"use strict";
class $29f636f9c9242dcd$var$InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled: fulfilled,
            rejected: rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
var $29f636f9c9242dcd$export$2e2bcd8739ae039 = $29f636f9c9242dcd$var$InterceptorManager;





"use strict";
var $4ae9823f127d6a7f$export$2e2bcd8739ae039 = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};






"use strict";
var $3446b0e08c045a63$export$2e2bcd8739ae039 = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, $1bdcb6f4e402b687$export$2e2bcd8739ae039);


"use strict";
var $f1a74cad393d5728$export$2e2bcd8739ae039 = typeof FormData !== "undefined" ? FormData : null;


"use strict";
var $3dbb3660c6aa1b6a$export$2e2bcd8739ae039 = typeof Blob !== "undefined" ? Blob : null;


/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const $dc95c8bd8c8ac587$var$isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const $dc95c8bd8c8ac587$var$isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var $dc95c8bd8c8ac587$export$2e2bcd8739ae039 = {
    isBrowser: true,
    classes: {
        URLSearchParams: $3446b0e08c045a63$export$2e2bcd8739ae039,
        FormData: $f1a74cad393d5728$export$2e2bcd8739ae039,
        Blob: $3dbb3660c6aa1b6a$export$2e2bcd8739ae039
    },
    isStandardBrowserEnv: $dc95c8bd8c8ac587$var$isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv: $dc95c8bd8c8ac587$var$isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};



"use strict";
function $c72cabfef754e022$export$2e2bcd8739ae039(data, options) {
    return (0, $84ddd1136bba04d2$export$2e2bcd8739ae039)(data, new (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).isNode && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}




"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function $58e6723c32f6afcb$var$parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, $217d8823a25804d0$export$2e2bcd8739ae039).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function $58e6723c32f6afcb$var$arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function $58e6723c32f6afcb$var$formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, $217d8823a25804d0$export$2e2bcd8739ae039).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(target[name])) target[name] = $58e6723c32f6afcb$var$arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isFormData(formData) && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isFunction(formData.entries)) {
        const obj = {};
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEachEntry(formData, (name, value)=>{
            buildPath($58e6723c32f6afcb$var$parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
var $58e6723c32f6afcb$export$2e2bcd8739ae039 = $58e6723c32f6afcb$var$formDataToJSON;


"use strict";
const $e7a4624c081d5cc5$var$DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function $e7a4624c081d5cc5$var$stringifySafely(rawValue, parser, encoder) {
    if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, $217d8823a25804d0$export$2e2bcd8739ae039).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const $e7a4624c081d5cc5$var$defaults = {
    transitional: (0, $4ae9823f127d6a7f$export$2e2bcd8739ae039),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isObject(data);
            if (isObjectPayload && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, $58e6723c32f6afcb$export$2e2bcd8739ae039)(data)) : data;
            }
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isArrayBuffer(data) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).isBuffer(data) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).isStream(data) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).isFile(data) || (0, $217d8823a25804d0$export$2e2bcd8739ae039).isBlob(data)) return data;
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isArrayBufferView(data)) return data.buffer;
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, $c72cabfef754e022$export$2e2bcd8739ae039)(data, this.formSerializer).toString();
                if ((isFileList = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, $84ddd1136bba04d2$export$2e2bcd8739ae039)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return $e7a4624c081d5cc5$var$stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || $e7a4624c081d5cc5$var$defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).from(e, (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).classes.FormData,
        Blob: (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    $e7a4624c081d5cc5$var$defaults.headers[method] = {};
});
(0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    $e7a4624c081d5cc5$var$defaults.headers[method] = (0, $217d8823a25804d0$export$2e2bcd8739ae039).merge($e7a4624c081d5cc5$var$DEFAULT_CONTENT_TYPE);
});
var $e7a4624c081d5cc5$export$2e2bcd8739ae039 = $e7a4624c081d5cc5$var$defaults;




"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const $168e7760c6d84d6b$var$ignoreDuplicateOf = (0, $217d8823a25804d0$export$2e2bcd8739ae039).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ $168e7760c6d84d6b$export$2e2bcd8739ae039 = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && $168e7760c6d84d6b$var$ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};


"use strict";
const $f16dc4c8f5e153fb$var$$internals = Symbol("internals");
function $f16dc4c8f5e153fb$var$normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function $f16dc4c8f5e153fb$var$normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(value) ? value.map($f16dc4c8f5e153fb$var$normalizeValue) : String(value);
}
function $f16dc4c8f5e153fb$var$parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const $f16dc4c8f5e153fb$var$isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function $f16dc4c8f5e153fb$var$matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(value)) return;
    if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isRegExp(filter)) return filter.test(value);
}
function $f16dc4c8f5e153fb$var$formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function $f16dc4c8f5e153fb$var$buildAccessors(obj, header) {
    const accessorName = (0, $217d8823a25804d0$export$2e2bcd8739ae039).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class $f16dc4c8f5e153fb$var$AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = $f16dc4c8f5e153fb$var$normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, $217d8823a25804d0$export$2e2bcd8739ae039).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = $f16dc4c8f5e153fb$var$normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(header) && (header = header.trim()) && !$f16dc4c8f5e153fb$var$isValidHeaderName(header)) setHeaders((0, $168e7760c6d84d6b$export$2e2bcd8739ae039)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = $f16dc4c8f5e153fb$var$normalizeHeader(header);
        if (header) {
            const key = (0, $217d8823a25804d0$export$2e2bcd8739ae039).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return $f16dc4c8f5e153fb$var$parseTokens(value);
                if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isFunction(parser)) return parser.call(this, value, key);
                if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = $f16dc4c8f5e153fb$var$normalizeHeader(header);
        if (header) {
            const key = (0, $217d8823a25804d0$export$2e2bcd8739ae039).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || $f16dc4c8f5e153fb$var$matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = $f16dc4c8f5e153fb$var$normalizeHeader(_header);
            if (_header) {
                const key = (0, $217d8823a25804d0$export$2e2bcd8739ae039).findKey(self, _header);
                if (key && (!matcher || $f16dc4c8f5e153fb$var$matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || $f16dc4c8f5e153fb$var$matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            const key = (0, $217d8823a25804d0$export$2e2bcd8739ae039).findKey(headers, header);
            if (key) {
                self[key] = $f16dc4c8f5e153fb$var$normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? $f16dc4c8f5e153fb$var$formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = $f16dc4c8f5e153fb$var$normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$f16dc4c8f5e153fb$var$$internals] = this[$f16dc4c8f5e153fb$var$$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = $f16dc4c8f5e153fb$var$normalizeHeader(_header);
            if (!accessors[lHeader]) {
                $f16dc4c8f5e153fb$var$buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
$f16dc4c8f5e153fb$var$AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, $217d8823a25804d0$export$2e2bcd8739ae039).freezeMethods($f16dc4c8f5e153fb$var$AxiosHeaders.prototype);
(0, $217d8823a25804d0$export$2e2bcd8739ae039).freezeMethods($f16dc4c8f5e153fb$var$AxiosHeaders);
var $f16dc4c8f5e153fb$export$2e2bcd8739ae039 = $f16dc4c8f5e153fb$var$AxiosHeaders;


"use strict";
function $c688d27b328093d6$export$2e2bcd8739ae039(fns, response) {
    const config = this || (0, $e7a4624c081d5cc5$export$2e2bcd8739ae039);
    const context = response || config;
    const headers = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).from(context.headers);
    let data = context.data;
    (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}


"use strict";
function $d7455656416e71e3$export$2e2bcd8739ae039(value) {
    return !!(value && value.__CANCEL__);
}





"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function $8d8483de3189df3b$var$CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).call(this, message == null ? "canceled" : message, (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, $217d8823a25804d0$export$2e2bcd8739ae039).inherits($8d8483de3189df3b$var$CanceledError, (0, $36b3a2440dea8bed$export$2e2bcd8739ae039), {
    __CANCEL__: true
});
var $8d8483de3189df3b$export$2e2bcd8739ae039 = $8d8483de3189df3b$var$CanceledError;







"use strict";
function $f23142d0a4b2e678$export$2e2bcd8739ae039(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("Request failed with status code " + response.status, [
        (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_REQUEST,
        (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}




"use strict";
var $4d1b1ab44b8c4d4c$export$2e2bcd8739ae039 = (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(path)) cookie.push("path=" + path);
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();



"use strict";
function $ee43936d25273a7f$export$2e2bcd8739ae039(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


"use strict";
function $4214bba4b53e69ae$export$2e2bcd8739ae039(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}


"use strict";
function $af58ea89c57d7303$export$2e2bcd8739ae039(baseURL, requestedURL) {
    if (baseURL && !(0, $ee43936d25273a7f$export$2e2bcd8739ae039)(requestedURL)) return (0, $4214bba4b53e69ae$export$2e2bcd8739ae039)(baseURL, requestedURL);
    return requestedURL;
}




"use strict";
var $7c35f646c72872f5$export$2e2bcd8739ae039 = (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();





"use strict";
function $7a9539036d948fbe$export$2e2bcd8739ae039(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}




"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function $e34c5c108cffd0f0$var$speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
var $e34c5c108cffd0f0$export$2e2bcd8739ae039 = $e34c5c108cffd0f0$var$speedometer;


"use strict";
function $142c355d7c44dd1a$var$progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, $e34c5c108cffd0f0$export$2e2bcd8739ae039)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded: loaded,
            total: total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const $142c355d7c44dd1a$var$isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var $142c355d7c44dd1a$export$2e2bcd8739ae039 = $142c355d7c44dd1a$var$isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isFormData(requestData)) {
            if ((0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).isStandardBrowserEnv || (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, $af58ea89c57d7303$export$2e2bcd8739ae039)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, $23d45ffb51f791c5$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            (0, $f23142d0a4b2e678$export$2e2bcd8739ae039)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("Request aborted", (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("Network Error", (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, $4ae9823f127d6a7f$export$2e2bcd8739ae039);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ETIMEDOUT : (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, $7c35f646c72872f5$export$2e2bcd8739ae039)(fullPath)) && config.xsrfCookieName && (0, $4d1b1ab44b8c4d4c$export$2e2bcd8739ae039).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", $142c355d7c44dd1a$var$progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", $142c355d7c44dd1a$var$progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, $8d8483de3189df3b$export$2e2bcd8739ae039)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, $7a9539036d948fbe$export$2e2bcd8739ae039)(fullPath);
        if (protocol && (0, $dc95c8bd8c8ac587$export$2e2bcd8739ae039).protocols.indexOf(protocol) === -1) {
            reject(new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("Unsupported protocol " + protocol + ":", (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};



const $36663aa5e86eec31$var$knownAdapters = {
    http: (0, $14f2f86890e5a585$export$2e2bcd8739ae039),
    xhr: (0, $142c355d7c44dd1a$export$2e2bcd8739ae039)
};
(0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach($36663aa5e86eec31$var$knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value: value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value: value
        });
    }
});
var $36663aa5e86eec31$export$2e2bcd8739ae039 = {
    getAdapter: (adapters)=>{
        adapters = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length: length } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, $217d8823a25804d0$export$2e2bcd8739ae039).isString(nameOrAdapter) ? $36663aa5e86eec31$var$knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, $217d8823a25804d0$export$2e2bcd8739ae039).hasOwnProp($36663aa5e86eec31$var$knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: $36663aa5e86eec31$var$knownAdapters
};


"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function $3a5b5b76942fc92f$var$throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, $8d8483de3189df3b$export$2e2bcd8739ae039)(null, config);
}
function $3a5b5b76942fc92f$export$2e2bcd8739ae039(config) {
    $3a5b5b76942fc92f$var$throwIfCancellationRequested(config);
    config.headers = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).from(config.headers);
    // Transform request data
    config.data = (0, $c688d27b328093d6$export$2e2bcd8739ae039).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, $36663aa5e86eec31$export$2e2bcd8739ae039).getAdapter(config.adapter || (0, $e7a4624c081d5cc5$export$2e2bcd8739ae039).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        $3a5b5b76942fc92f$var$throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, $c688d27b328093d6$export$2e2bcd8739ae039).call(config, config.transformResponse, response);
        response.headers = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, $d7455656416e71e3$export$2e2bcd8739ae039)(reason)) {
            $3a5b5b76942fc92f$var$throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, $c688d27b328093d6$export$2e2bcd8739ae039).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}




"use strict";
const $c00afde9a8a486a4$var$headersToObject = (thing)=>thing instanceof (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039) ? thing.toJSON() : thing;
function $c00afde9a8a486a4$export$2e2bcd8739ae039(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isPlainObject(target) && (0, $217d8823a25804d0$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $217d8823a25804d0$export$2e2bcd8739ae039).merge.call({
            caseless: caseless
        }, target, source);
        else if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isPlainObject(source)) return (0, $217d8823a25804d0$export$2e2bcd8739ae039).merge({}, source);
        else if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties($c00afde9a8a486a4$var$headersToObject(a), $c00afde9a8a486a4$var$headersToObject(b), true)
    };
    (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, $217d8823a25804d0$export$2e2bcd8739ae039).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}



const $2f75cfae7a382e19$export$a4ad2735b021c132 = "1.4.0";



"use strict";
const $29bd956c902e8315$var$validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    $29bd956c902e8315$var$validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const $29bd956c902e8315$var$deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ $29bd956c902e8315$var$validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, $2f75cfae7a382e19$export$a4ad2735b021c132) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_DEPRECATED);
        if (version && !$29bd956c902e8315$var$deprecatedWarnings[opt]) {
            $29bd956c902e8315$var$deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function $29bd956c902e8315$var$assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("options must be an object", (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("option " + opt + " must be " + result, (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, $36b3a2440dea8bed$export$2e2bcd8739ae039)("Unknown option " + opt, (0, $36b3a2440dea8bed$export$2e2bcd8739ae039).ERR_BAD_OPTION);
    }
}
var $29bd956c902e8315$export$2e2bcd8739ae039 = {
    assertOptions: $29bd956c902e8315$var$assertOptions,
    validators: $29bd956c902e8315$var$validators
};



"use strict";
const $ccabbd674c96969b$var$validators = (0, $29bd956c902e8315$export$2e2bcd8739ae039).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class $ccabbd674c96969b$var$Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, $29f636f9c9242dcd$export$2e2bcd8739ae039)(),
            response: new (0, $29f636f9c9242dcd$export$2e2bcd8739ae039)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, $c00afde9a8a486a4$export$2e2bcd8739ae039)(this.defaults, config);
        const { transitional: transitional, paramsSerializer: paramsSerializer, headers: headers } = config;
        if (transitional !== undefined) (0, $29bd956c902e8315$export$2e2bcd8739ae039).assertOptions(transitional, {
            silentJSONParsing: $ccabbd674c96969b$var$validators.transitional($ccabbd674c96969b$var$validators.boolean),
            forcedJSONParsing: $ccabbd674c96969b$var$validators.transitional($ccabbd674c96969b$var$validators.boolean),
            clarifyTimeoutError: $ccabbd674c96969b$var$validators.transitional($ccabbd674c96969b$var$validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, $217d8823a25804d0$export$2e2bcd8739ae039).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, $29bd956c902e8315$export$2e2bcd8739ae039).assertOptions(paramsSerializer, {
                encode: $ccabbd674c96969b$var$validators.function,
                serialize: $ccabbd674c96969b$var$validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, $217d8823a25804d0$export$2e2bcd8739ae039).merge(headers.common, headers[config.method]);
        contextHeaders && (0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, $3a5b5b76942fc92f$export$2e2bcd8739ae039).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, $3a5b5b76942fc92f$export$2e2bcd8739ae039).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, $c00afde9a8a486a4$export$2e2bcd8739ae039)(this.defaults, config);
        const fullPath = (0, $af58ea89c57d7303$export$2e2bcd8739ae039)(config.baseURL, config.url);
        return (0, $23d45ffb51f791c5$export$2e2bcd8739ae039)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ $ccabbd674c96969b$var$Axios.prototype[method] = function(url, config) {
        return this.request((0, $c00afde9a8a486a4$export$2e2bcd8739ae039)(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
(0, $217d8823a25804d0$export$2e2bcd8739ae039).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, $c00afde9a8a486a4$export$2e2bcd8739ae039)(config || {}, {
                method: method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: url,
                data: data
            }));
        };
    }
    $ccabbd674c96969b$var$Axios.prototype[method] = generateHTTPMethod();
    $ccabbd674c96969b$var$Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var $ccabbd674c96969b$export$2e2bcd8739ae039 = $ccabbd674c96969b$var$Axios;







"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class $538f73283044e51e$var$CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, $8d8483de3189df3b$export$2e2bcd8739ae039)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new $538f73283044e51e$var$CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token: token,
            cancel: cancel
        };
    }
}
var $538f73283044e51e$export$2e2bcd8739ae039 = $538f73283044e51e$var$CancelToken;






"use strict";
function $dbe01203239f2888$export$2e2bcd8739ae039(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}



"use strict";
function $841c9b5de2331262$export$2e2bcd8739ae039(payload) {
    return (0, $217d8823a25804d0$export$2e2bcd8739ae039).isObject(payload) && payload.isAxiosError === true;
}



const $822644d2f983870e$var$HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries($822644d2f983870e$var$HttpStatusCode).forEach(([key, value])=>{
    $822644d2f983870e$var$HttpStatusCode[value] = key;
});
var $822644d2f983870e$export$2e2bcd8739ae039 = $822644d2f983870e$var$HttpStatusCode;


"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function $49b3e85c731b7fc4$var$createInstance(defaultConfig) {
    const context = new (0, $ccabbd674c96969b$export$2e2bcd8739ae039)(defaultConfig);
    const instance = (0, $b9ae456279d51ead$export$2e2bcd8739ae039)((0, $ccabbd674c96969b$export$2e2bcd8739ae039).prototype.request, context);
    // Copy axios.prototype to instance
    (0, $217d8823a25804d0$export$2e2bcd8739ae039).extend(instance, (0, $ccabbd674c96969b$export$2e2bcd8739ae039).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, $217d8823a25804d0$export$2e2bcd8739ae039).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return $49b3e85c731b7fc4$var$createInstance((0, $c00afde9a8a486a4$export$2e2bcd8739ae039)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const $49b3e85c731b7fc4$var$axios = $49b3e85c731b7fc4$var$createInstance((0, $e7a4624c081d5cc5$export$2e2bcd8739ae039));
// Expose Axios class to allow class inheritance
$49b3e85c731b7fc4$var$axios.Axios = (0, $ccabbd674c96969b$export$2e2bcd8739ae039);
// Expose Cancel & CancelToken
$49b3e85c731b7fc4$var$axios.CanceledError = (0, $8d8483de3189df3b$export$2e2bcd8739ae039);
$49b3e85c731b7fc4$var$axios.CancelToken = (0, $538f73283044e51e$export$2e2bcd8739ae039);
$49b3e85c731b7fc4$var$axios.isCancel = (0, $d7455656416e71e3$export$2e2bcd8739ae039);
$49b3e85c731b7fc4$var$axios.VERSION = (0, $2f75cfae7a382e19$export$a4ad2735b021c132);
$49b3e85c731b7fc4$var$axios.toFormData = (0, $84ddd1136bba04d2$export$2e2bcd8739ae039);
// Expose AxiosError class
$49b3e85c731b7fc4$var$axios.AxiosError = (0, $36b3a2440dea8bed$export$2e2bcd8739ae039);
// alias for CanceledError for backward compatibility
$49b3e85c731b7fc4$var$axios.Cancel = $49b3e85c731b7fc4$var$axios.CanceledError;
// Expose all/spread
$49b3e85c731b7fc4$var$axios.all = function all(promises) {
    return Promise.all(promises);
};
$49b3e85c731b7fc4$var$axios.spread = (0, $dbe01203239f2888$export$2e2bcd8739ae039);
// Expose isAxiosError
$49b3e85c731b7fc4$var$axios.isAxiosError = (0, $841c9b5de2331262$export$2e2bcd8739ae039);
// Expose mergeConfig
$49b3e85c731b7fc4$var$axios.mergeConfig = (0, $c00afde9a8a486a4$export$2e2bcd8739ae039);
$49b3e85c731b7fc4$var$axios.AxiosHeaders = (0, $f16dc4c8f5e153fb$export$2e2bcd8739ae039);
$49b3e85c731b7fc4$var$axios.formToJSON = (thing)=>(0, $58e6723c32f6afcb$export$2e2bcd8739ae039)((0, $217d8823a25804d0$export$2e2bcd8739ae039).isHTMLForm(thing) ? new FormData(thing) : thing);
$49b3e85c731b7fc4$var$axios.HttpStatusCode = (0, $822644d2f983870e$export$2e2bcd8739ae039);
$49b3e85c731b7fc4$var$axios.default = $49b3e85c731b7fc4$var$axios;
var // this module should only have a default export
$49b3e85c731b7fc4$export$2e2bcd8739ae039 = $49b3e85c731b7fc4$var$axios;


// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios: $be4b6ae711701ec4$export$1c00760e9e5a4e95, AxiosError: $be4b6ae711701ec4$export$c1fbed17c2f6a328, CanceledError: $be4b6ae711701ec4$export$1ab0c6b20d94fa14, isCancel: $be4b6ae711701ec4$export$3b22524397b493c6, CancelToken: $be4b6ae711701ec4$export$fd08e3cb425f0d61, VERSION: $be4b6ae711701ec4$export$a4ad2735b021c132, all: $be4b6ae711701ec4$export$84bf76cd7afc7469, Cancel: $be4b6ae711701ec4$export$848c9b7ead0df967, isAxiosError: $be4b6ae711701ec4$export$fbafdbe06a5b5a9a, spread: $be4b6ae711701ec4$export$3ae0fd4797ed47c8, toFormData: $be4b6ae711701ec4$export$10ae0d317ea97f8b, AxiosHeaders: $be4b6ae711701ec4$export$4e7d6ff0f3e6520, HttpStatusCode: $be4b6ae711701ec4$export$a972f69c851492b3, formToJSON: $be4b6ae711701ec4$export$86d7c59254d6a2c9, mergeConfig: $be4b6ae711701ec4$export$7ec1ebcfa9d8bd6a } = (0, $49b3e85c731b7fc4$export$2e2bcd8739ae039);


const $db4d74f633b73c0a$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, $49b3e85c731b7fc4$export$2e2bcd8739ae039)({
            method: "post",
            url: "/api/v1/users/login",
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === "success") window.setTimeout(()=>{
            location.assign("/");
        });
    } catch (err) {
        console.log(err.response.data.message);
    }
};


document.querySelector(".form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, $db4d74f633b73c0a$export$596d806903d1f59e)(email, password);
});


//# sourceMappingURL=index.js.map
