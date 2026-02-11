var Qr = Object.defineProperty;
var Zr = (C, o, t) => o in C ? Qr(C, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : C[o] = t;
var Yt = (C, o, t) => (Zr(C, typeof o != "symbol" ? o + "" : o, t), t), Le = (C, o, t) => {
  if (!o.has(C))
    throw TypeError("Cannot " + t);
};
var s = (C, o, t) => (Le(C, o, "read from private field"), t ? t.call(C) : o.get(C)), K = (C, o, t) => {
  if (o.has(C))
    throw TypeError("Cannot add the same private member more than once");
  o instanceof WeakSet ? o.add(C) : o.set(C, t);
}, at = (C, o, t, e) => (Le(C, o, "write to private field"), e ? e.call(C, t) : o.set(C, t), t);
var fe = (C, o, t, e) => ({
  set _(r) {
    at(C, o, r, t);
  },
  get _() {
    return s(C, o, e);
  }
}), rt = (C, o, t) => (Le(C, o, "access private method"), t);
(function(o, t) {
  typeof exports == "object" && typeof module == "object" ? module.exports = o.pdfjsLib = t() : typeof define == "function" && define.amd ? define("pdfjs-dist/build/pdf", [], () => o.pdfjsLib = t()) : typeof exports == "object" ? exports["pdfjs-dist/build/pdf"] = o.pdfjsLib = t() : o["pdfjs-dist/build/pdf"] = o.pdfjsLib = t();
})(globalThis, () => (() => {
  "use strict";
  var __webpack_modules__ = [, (C, o, t) => {
    var W, w;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.VerbosityLevel = o.Util = o.UnknownErrorException = o.UnexpectedResponseException = o.TextRenderingMode = o.RenderingIntentFlag = o.PromiseCapability = o.PermissionFlag = o.PasswordResponses = o.PasswordException = o.PageActionEventType = o.OPS = o.MissingPDFException = o.MAX_IMAGE_SIZE_TO_CACHE = o.LINE_FACTOR = o.LINE_DESCENT_FACTOR = o.InvalidPDFException = o.ImageKind = o.IDENTITY_MATRIX = o.FormatError = o.FeatureTest = o.FONT_IDENTITY_MATRIX = o.DocumentActionEventType = o.CMapCompressionType = o.BaseException = o.BASELINE_FACTOR = o.AnnotationType = o.AnnotationReplyType = o.AnnotationPrefix = o.AnnotationMode = o.AnnotationFlag = o.AnnotationFieldFlag = o.AnnotationEditorType = o.AnnotationEditorPrefix = o.AnnotationEditorParamsType = o.AnnotationBorderStyleType = o.AnnotationActionEventType = o.AbortException = void 0, o.assert = function(i, p) {
      i || y(p);
    }, o.bytesToString = f, o.createValidAbsoluteUrl = function(i) {
      let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!i)
        return null;
      try {
        if (T && typeof i == "string") {
          if (T.addDefaultProtocol && i.startsWith("www.")) {
            const k = i.match(/\./g);
            (k == null ? void 0 : k.length) >= 2 && (i = `http://${i}`);
          }
          if (T.tryConvertEncoding)
            try {
              i = _(i);
            } catch {
            }
        }
        const R = p ? new URL(i, p) : new URL(i);
        if (function(d) {
          switch (d == null ? void 0 : d.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
              return !0;
            default:
              return !1;
          }
        }(R))
          return R;
      } catch {
      }
      return null;
    }, o.getModificationDate = function() {
      let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Date();
      return [i.getUTCFullYear().toString(), (i.getUTCMonth() + 1).toString().padStart(2, "0"), i.getUTCDate().toString().padStart(2, "0"), i.getUTCHours().toString().padStart(2, "0"), i.getUTCMinutes().toString().padStart(2, "0"), i.getUTCSeconds().toString().padStart(2, "0")].join("");
    }, o.getUuid = function() {
      if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
        return crypto.randomUUID();
      const i = new Uint8Array(32);
      if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
        crypto.getRandomValues(i);
      else
        for (let p = 0; p < 32; p++)
          i[p] = Math.floor(255 * Math.random());
      return f(i);
    }, o.getVerbosityLevel = function() {
      return l;
    }, o.info = function(i) {
      l >= r.INFOS && console.log(`Info: ${i}`);
    }, o.isArrayBuffer = function(i) {
      return typeof i == "object" && (i == null ? void 0 : i.byteLength) !== void 0;
    }, o.isArrayEqual = function(i, p) {
      if (i.length !== p.length)
        return !1;
      for (let T = 0, R = i.length; T < R; T++)
        if (i[T] !== p[T])
          return !1;
      return !0;
    }, o.isNodeJS = void 0, o.normalizeUnicode = function(i) {
      return M || (M = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, O = /* @__PURE__ */ new Map([["\uFB05", "\u017Ft"]])), i.replaceAll(M, (p, T, R) => T ? T.normalize("NFKC") : O.get(R));
    }, o.objectFromMap = function(i) {
      const p = /* @__PURE__ */ Object.create(null);
      for (const [T, R] of i)
        p[T] = R;
      return p;
    }, o.objectSize = function(i) {
      return Object.keys(i).length;
    }, o.setVerbosityLevel = function(i) {
      Number.isInteger(i) && (l = i);
    }, o.shadow = h, o.string32 = function(i) {
      return String.fromCharCode(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i);
    }, o.stringToBytes = g, o.stringToPDFString = function(i) {
      if (i[0] >= "\xEF") {
        let T;
        if (i[0] === "\xFE" && i[1] === "\xFF" ? T = "utf-16be" : i[0] === "\xFF" && i[1] === "\xFE" ? T = "utf-16le" : i[0] === "\xEF" && i[1] === "\xBB" && i[2] === "\xBF" && (T = "utf-8"), T)
          try {
            const R = new TextDecoder(T, { fatal: !0 }), k = g(i);
            return R.decode(k);
          } catch (R) {
            m(`stringToPDFString: "${R}".`);
          }
      }
      const p = [];
      for (let T = 0, R = i.length; T < R; T++) {
        const k = b[i.charCodeAt(T)];
        p.push(k ? String.fromCharCode(k) : i.charAt(T));
      }
      return p.join("");
    }, o.stringToUTF8String = _, o.unreachable = y, o.utf8StringToString = function(i) {
      return unescape(encodeURIComponent(i));
    }, o.warn = m, t(2), t(84), t(86), t(87), t(89), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
    const e = !(typeof process != "object" || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && process.type !== "browser");
    o.isNodeJS = e, o.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0], o.FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0], o.MAX_IMAGE_SIZE_TO_CACHE = 1e7, o.LINE_FACTOR = 1.35, o.LINE_DESCENT_FACTOR = 0.35, o.BASELINE_FACTOR = 0.25925925925925924, o.RenderingIntentFlag = { ANY: 1, DISPLAY: 2, PRINT: 4, SAVE: 8, ANNOTATIONS_FORMS: 16, ANNOTATIONS_STORAGE: 32, ANNOTATIONS_DISABLE: 64, OPLIST: 256 }, o.AnnotationMode = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 }, o.AnnotationEditorPrefix = "pdfjs_internal_editor_", o.AnnotationEditorType = { DISABLE: -1, NONE: 0, FREETEXT: 3, STAMP: 13, INK: 15 }, o.AnnotationEditorParamsType = { RESIZE: 1, CREATE: 2, FREETEXT_SIZE: 11, FREETEXT_COLOR: 12, FREETEXT_OPACITY: 13, INK_COLOR: 21, INK_THICKNESS: 22, INK_OPACITY: 23 }, o.PermissionFlag = { PRINT: 4, MODIFY_CONTENTS: 8, COPY: 16, MODIFY_ANNOTATIONS: 32, FILL_INTERACTIVE_FORMS: 256, COPY_FOR_ACCESSIBILITY: 512, ASSEMBLE: 1024, PRINT_HIGH_QUALITY: 2048 }, o.TextRenderingMode = { FILL: 0, STROKE: 1, FILL_STROKE: 2, INVISIBLE: 3, FILL_ADD_TO_PATH: 4, STROKE_ADD_TO_PATH: 5, FILL_STROKE_ADD_TO_PATH: 6, ADD_TO_PATH: 7, FILL_STROKE_MASK: 3, ADD_TO_PATH_FLAG: 4 }, o.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 }, o.AnnotationType = { TEXT: 1, LINK: 2, FREETEXT: 3, LINE: 4, SQUARE: 5, CIRCLE: 6, POLYGON: 7, POLYLINE: 8, HIGHLIGHT: 9, UNDERLINE: 10, SQUIGGLY: 11, STRIKEOUT: 12, STAMP: 13, CARET: 14, INK: 15, POPUP: 16, FILEATTACHMENT: 17, SOUND: 18, MOVIE: 19, WIDGET: 20, SCREEN: 21, PRINTERMARK: 22, TRAPNET: 23, WATERMARK: 24, THREED: 25, REDACT: 26 }, o.AnnotationReplyType = { GROUP: "Group", REPLY: "R" }, o.AnnotationFlag = { INVISIBLE: 1, HIDDEN: 2, PRINT: 4, NOZOOM: 8, NOROTATE: 16, NOVIEW: 32, READONLY: 64, LOCKED: 128, TOGGLENOVIEW: 256, LOCKEDCONTENTS: 512 }, o.AnnotationFieldFlag = { READONLY: 1, REQUIRED: 2, NOEXPORT: 4, MULTILINE: 4096, PASSWORD: 8192, NOTOGGLETOOFF: 16384, RADIO: 32768, PUSHBUTTON: 65536, COMBO: 131072, EDIT: 262144, SORT: 524288, FILESELECT: 1048576, MULTISELECT: 2097152, DONOTSPELLCHECK: 4194304, DONOTSCROLL: 8388608, COMB: 16777216, RICHTEXT: 33554432, RADIOSINUNISON: 33554432, COMMITONSELCHANGE: 67108864 }, o.AnnotationBorderStyleType = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 }, o.AnnotationActionEventType = { E: "Mouse Enter", X: "Mouse Exit", D: "Mouse Down", U: "Mouse Up", Fo: "Focus", Bl: "Blur", PO: "PageOpen", PC: "PageClose", PV: "PageVisible", PI: "PageInvisible", K: "Keystroke", F: "Format", V: "Validate", C: "Calculate" }, o.DocumentActionEventType = { WC: "WillClose", WS: "WillSave", DS: "DidSave", WP: "WillPrint", DP: "DidPrint" }, o.PageActionEventType = { O: "PageOpen", C: "PageClose" };
    const r = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
    o.VerbosityLevel = r, o.CMapCompressionType = { NONE: 0, BINARY: 1 }, o.OPS = { dependency: 1, setLineWidth: 2, setLineCap: 3, setLineJoin: 4, setMiterLimit: 5, setDash: 6, setRenderingIntent: 7, setFlatness: 8, setGState: 9, save: 10, restore: 11, transform: 12, moveTo: 13, lineTo: 14, curveTo: 15, curveTo2: 16, curveTo3: 17, closePath: 18, rectangle: 19, stroke: 20, closeStroke: 21, fill: 22, eoFill: 23, fillStroke: 24, eoFillStroke: 25, closeFillStroke: 26, closeEOFillStroke: 27, endPath: 28, clip: 29, eoClip: 30, beginText: 31, endText: 32, setCharSpacing: 33, setWordSpacing: 34, setHScale: 35, setLeading: 36, setFont: 37, setTextRenderingMode: 38, setTextRise: 39, moveText: 40, setLeadingMoveText: 41, setTextMatrix: 42, nextLine: 43, showText: 44, showSpacedText: 45, nextLineShowText: 46, nextLineSetSpacingShowText: 47, setCharWidth: 48, setCharWidthAndBounds: 49, setStrokeColorSpace: 50, setFillColorSpace: 51, setStrokeColor: 52, setStrokeColorN: 53, setFillColor: 54, setFillColorN: 55, setStrokeGray: 56, setFillGray: 57, setStrokeRGBColor: 58, setFillRGBColor: 59, setStrokeCMYKColor: 60, setFillCMYKColor: 61, shadingFill: 62, beginInlineImage: 63, beginImageData: 64, endInlineImage: 65, paintXObject: 66, markPoint: 67, markPointProps: 68, beginMarkedContent: 69, beginMarkedContentProps: 70, endMarkedContent: 71, beginCompat: 72, endCompat: 73, paintFormXObjectBegin: 74, paintFormXObjectEnd: 75, beginGroup: 76, endGroup: 77, beginAnnotation: 80, endAnnotation: 81, paintImageMaskXObject: 83, paintImageMaskXObjectGroup: 84, paintImageXObject: 85, paintInlineImageXObject: 86, paintInlineImageXObjectGroup: 87, paintImageXObjectRepeat: 88, paintImageMaskXObjectRepeat: 89, paintSolidColorImageMask: 90, constructPath: 91 }, o.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
    let l = r.WARNINGS;
    function m(n) {
      l >= r.WARNINGS && console.log(`Warning: ${n}`);
    }
    function y(n) {
      throw new Error(n);
    }
    function h(n, i, p) {
      let T = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
      return Object.defineProperty(n, i, { value: p, enumerable: !T, configurable: !0, writable: !1 }), p;
    }
    const a = function() {
      function i(p, T) {
        this.constructor === i && y("Cannot initialize BaseException."), this.message = p, this.name = T;
      }
      return i.prototype = new Error(), i.constructor = i, i;
    }();
    o.BaseException = a, o.PasswordException = class extends a {
      constructor(i, p) {
        super(i, "PasswordException"), this.code = p;
      }
    }, o.UnknownErrorException = class extends a {
      constructor(i, p) {
        super(i, "UnknownErrorException"), this.details = p;
      }
    }, o.InvalidPDFException = class extends a {
      constructor(i) {
        super(i, "InvalidPDFException");
      }
    }, o.MissingPDFException = class extends a {
      constructor(i) {
        super(i, "MissingPDFException");
      }
    }, o.UnexpectedResponseException = class extends a {
      constructor(i, p) {
        super(i, "UnexpectedResponseException"), this.status = p;
      }
    }, o.FormatError = class extends a {
      constructor(i) {
        super(i, "FormatError");
      }
    }, o.AbortException = class extends a {
      constructor(i) {
        super(i, "AbortException");
      }
    };
    function f(n) {
      typeof n == "object" && (n == null ? void 0 : n.length) !== void 0 || y("Invalid argument for bytesToString");
      const i = n.length, p = 8192;
      if (i < p)
        return String.fromCharCode.apply(null, n);
      const T = [];
      for (let R = 0; R < i; R += p) {
        const k = Math.min(R + p, i), d = n.subarray(R, k);
        T.push(String.fromCharCode.apply(null, d));
      }
      return T.join("");
    }
    function g(n) {
      typeof n != "string" && y("Invalid argument for stringToBytes");
      const i = n.length, p = new Uint8Array(i);
      for (let T = 0; T < i; ++T)
        p[T] = 255 & n.charCodeAt(T);
      return p;
    }
    o.FeatureTest = class {
      static get isLittleEndian() {
        return h(this, "isLittleEndian", function() {
          const p = new Uint8Array(4);
          return p[0] = 1, new Uint32Array(p.buffer, 0, 1)[0] === 1;
        }());
      }
      static get isEvalSupported() {
        return h(this, "isEvalSupported", function() {
          try {
            return new Function(""), !0;
          } catch {
            return !1;
          }
        }());
      }
      static get isOffscreenCanvasSupported() {
        return h(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
      }
      static get platform() {
        return typeof navigator > "u" ? h(this, "platform", { isWin: !1, isMac: !1 }) : h(this, "platform", { isWin: navigator.platform.includes("Win"), isMac: navigator.platform.includes("Mac") });
      }
      static get isCSSRoundSupported() {
        var i, p;
        return h(this, "isCSSRoundSupported", (p = (i = globalThis.CSS) == null ? void 0 : i.supports) == null ? void 0 : p.call(i, "width: round(1.5px, 1px)"));
      }
    };
    const x = [...Array(256).keys()].map((n) => n.toString(16).padStart(2, "0"));
    o.Util = class {
      static makeHexColor(i, p, T) {
        return `#${x[i]}${x[p]}${x[T]}`;
      }
      static scaleMinMax(i, p) {
        let T;
        i[0] ? (i[0] < 0 && (T = p[0], p[0] = p[1], p[1] = T), p[0] *= i[0], p[1] *= i[0], i[3] < 0 && (T = p[2], p[2] = p[3], p[3] = T), p[2] *= i[3], p[3] *= i[3]) : (T = p[0], p[0] = p[2], p[2] = T, T = p[1], p[1] = p[3], p[3] = T, i[1] < 0 && (T = p[2], p[2] = p[3], p[3] = T), p[2] *= i[1], p[3] *= i[1], i[2] < 0 && (T = p[0], p[0] = p[1], p[1] = T), p[0] *= i[2], p[1] *= i[2]), p[0] += i[4], p[1] += i[4], p[2] += i[5], p[3] += i[5];
      }
      static transform(i, p) {
        return [i[0] * p[0] + i[2] * p[1], i[1] * p[0] + i[3] * p[1], i[0] * p[2] + i[2] * p[3], i[1] * p[2] + i[3] * p[3], i[0] * p[4] + i[2] * p[5] + i[4], i[1] * p[4] + i[3] * p[5] + i[5]];
      }
      static applyTransform(i, p) {
        return [i[0] * p[0] + i[1] * p[2] + p[4], i[0] * p[1] + i[1] * p[3] + p[5]];
      }
      static applyInverseTransform(i, p) {
        const T = p[0] * p[3] - p[1] * p[2];
        return [(i[0] * p[3] - i[1] * p[2] + p[2] * p[5] - p[4] * p[3]) / T, (-i[0] * p[1] + i[1] * p[0] + p[4] * p[1] - p[5] * p[0]) / T];
      }
      static getAxialAlignedBoundingBox(i, p) {
        const T = this.applyTransform(i, p), R = this.applyTransform(i.slice(2, 4), p), k = this.applyTransform([i[0], i[3]], p), d = this.applyTransform([i[2], i[1]], p);
        return [Math.min(T[0], R[0], k[0], d[0]), Math.min(T[1], R[1], k[1], d[1]), Math.max(T[0], R[0], k[0], d[0]), Math.max(T[1], R[1], k[1], d[1])];
      }
      static inverseTransform(i) {
        const p = i[0] * i[3] - i[1] * i[2];
        return [i[3] / p, -i[1] / p, -i[2] / p, i[0] / p, (i[2] * i[5] - i[4] * i[3]) / p, (i[4] * i[1] - i[5] * i[0]) / p];
      }
      static singularValueDecompose2dScale(i) {
        const p = [i[0], i[2], i[1], i[3]], T = i[0] * p[0] + i[1] * p[2], R = i[0] * p[1] + i[1] * p[3], k = i[2] * p[0] + i[3] * p[2], d = i[2] * p[1] + i[3] * p[3], L = (T + d) / 2, F = Math.sqrt((T + d) ** 2 - 4 * (T * d - k * R)) / 2, V = L + F || 1, Z = L - F || 1;
        return [Math.sqrt(V), Math.sqrt(Z)];
      }
      static normalizeRect(i) {
        const p = i.slice(0);
        return i[0] > i[2] && (p[0] = i[2], p[2] = i[0]), i[1] > i[3] && (p[1] = i[3], p[3] = i[1]), p;
      }
      static intersect(i, p) {
        const T = Math.max(Math.min(i[0], i[2]), Math.min(p[0], p[2])), R = Math.min(Math.max(i[0], i[2]), Math.max(p[0], p[2]));
        if (T > R)
          return null;
        const k = Math.max(Math.min(i[1], i[3]), Math.min(p[1], p[3])), d = Math.min(Math.max(i[1], i[3]), Math.max(p[1], p[3]));
        return k > d ? null : [T, k, R, d];
      }
      static bezierBoundingBox(i, p, T, R, k, d, L, F) {
        const V = [], Z = [[], []];
        let B, U, u, v, S, D, q, J;
        for (let I = 0; I < 2; ++I)
          if (I === 0 ? (U = 6 * i - 12 * T + 6 * k, B = -3 * i + 9 * T - 9 * k + 3 * L, u = 3 * T - 3 * i) : (U = 6 * p - 12 * R + 6 * d, B = -3 * p + 9 * R - 9 * d + 3 * F, u = 3 * R - 3 * p), Math.abs(B) < 1e-12) {
            if (Math.abs(U) < 1e-12)
              continue;
            v = -u / U, 0 < v && v < 1 && V.push(v);
          } else
            q = U * U - 4 * u * B, J = Math.sqrt(q), q < 0 || (S = (-U + J) / (2 * B), 0 < S && S < 1 && V.push(S), D = (-U - J) / (2 * B), 0 < D && D < 1 && V.push(D));
        let z, N = V.length;
        const P = N;
        for (; N--; )
          v = V[N], z = 1 - v, Z[0][N] = z * z * z * i + 3 * z * z * v * T + 3 * z * v * v * k + v * v * v * L, Z[1][N] = z * z * z * p + 3 * z * z * v * R + 3 * z * v * v * d + v * v * v * F;
        return Z[0][P] = i, Z[1][P] = p, Z[0][P + 1] = L, Z[1][P + 1] = F, Z[0].length = Z[1].length = P + 2, [Math.min(...Z[0]), Math.min(...Z[1]), Math.max(...Z[0]), Math.max(...Z[1])];
      }
    };
    const b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
    function _(n) {
      return decodeURIComponent(escape(n));
    }
    o.PromiseCapability = (w = class {
      constructor() {
        K(this, W, !1);
        this.promise = new Promise((i, p) => {
          this.resolve = (T) => {
            at(this, W, !0), i(T);
          }, this.reject = (T) => {
            at(this, W, !0), p(T);
          };
        });
      }
      get settled() {
        return s(this, W);
      }
    }, W = new WeakMap(), w);
    let M = null, O = null;
    o.AnnotationPrefix = "pdfjs_internal_id_";
  }, (C, o, t) => {
    var e = t(3), r = t(4), l = t(69), m = t(70), y = "WebAssembly", h = r[y], a = Error("e", { cause: 7 }).cause !== 7, f = function(x, b) {
      var _ = {};
      _[x] = m(x, b, a), e({ global: !0, constructor: !0, arity: 1, forced: a }, _);
    }, g = function(x, b) {
      if (h && h[x]) {
        var _ = {};
        _[x] = m(y + "." + x, b, a), e({ target: y, stat: !0, constructor: !0, arity: 1, forced: a }, _);
      }
    };
    f("Error", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), f("EvalError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), f("RangeError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), f("ReferenceError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), f("SyntaxError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), f("TypeError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), f("URIError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), g("CompileError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), g("LinkError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    }), g("RuntimeError", function(x) {
      return function(_) {
        return l(x, this, arguments);
      };
    });
  }, (C, o, t) => {
    var e = t(4), r = t(5).f, l = t(44), m = t(48), y = t(38), h = t(56), a = t(68);
    C.exports = function(f, g) {
      var x, b, _, M, O, W = f.target, w = f.global, n = f.stat;
      if (x = w ? e : n ? e[W] || y(W, {}) : (e[W] || {}).prototype)
        for (b in g) {
          if (M = g[b], _ = f.dontCallGetSet ? (O = r(x, b)) && O.value : x[b], !a(w ? b : W + (n ? "." : "#") + b, f.forced) && _ !== void 0) {
            if (typeof M == typeof _)
              continue;
            h(M, _);
          }
          (f.sham || _ && _.sham) && l(M, "sham", !0), m(x, b, M, f);
        }
    };
  }, function(C) {
    var o = function(t) {
      return t && t.Math === Math && t;
    };
    C.exports = o(typeof globalThis == "object" && globalThis) || o(typeof window == "object" && window) || o(typeof self == "object" && self) || o(typeof global == "object" && global) || /* @__PURE__ */ function() {
      return this;
    }() || this || Function("return this")();
  }, (C, o, t) => {
    var e = t(6), r = t(8), l = t(10), m = t(11), y = t(12), h = t(18), a = t(39), f = t(42), g = Object.getOwnPropertyDescriptor;
    o.f = e ? g : function(b, _) {
      if (b = y(b), _ = h(_), f)
        try {
          return g(b, _);
        } catch {
        }
      if (a(b, _))
        return m(!r(l.f, b, _), b[_]);
    };
  }, (C, o, t) => {
    var e = t(7);
    C.exports = !e(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }, (C) => {
    C.exports = function(o) {
      try {
        return !!o();
      } catch {
        return !0;
      }
    };
  }, (C, o, t) => {
    var e = t(9), r = Function.prototype.call;
    C.exports = e ? r.bind(r) : function() {
      return r.apply(r, arguments);
    };
  }, (C, o, t) => {
    var e = t(7);
    C.exports = !e(function() {
      var r = function() {
      }.bind();
      return typeof r != "function" || r.hasOwnProperty("prototype");
    });
  }, (C, o) => {
    var t = {}.propertyIsEnumerable, e = Object.getOwnPropertyDescriptor, r = e && !t.call({ 1: 2 }, 1);
    o.f = r ? function(m) {
      var y = e(this, m);
      return !!y && y.enumerable;
    } : t;
  }, (C) => {
    C.exports = function(o, t) {
      return { enumerable: !(1 & o), configurable: !(2 & o), writable: !(4 & o), value: t };
    };
  }, (C, o, t) => {
    var e = t(13), r = t(16);
    C.exports = function(l) {
      return e(r(l));
    };
  }, (C, o, t) => {
    var e = t(14), r = t(7), l = t(15), m = Object, y = e("".split);
    C.exports = r(function() {
      return !m("z").propertyIsEnumerable(0);
    }) ? function(h) {
      return l(h) === "String" ? y(h, "") : m(h);
    } : m;
  }, (C, o, t) => {
    var e = t(9), r = Function.prototype, l = r.call, m = e && r.bind.bind(l, l);
    C.exports = e ? m : function(y) {
      return function() {
        return l.apply(y, arguments);
      };
    };
  }, (C, o, t) => {
    var e = t(14), r = e({}.toString), l = e("".slice);
    C.exports = function(m) {
      return l(r(m), 8, -1);
    };
  }, (C, o, t) => {
    var e = t(17), r = TypeError;
    C.exports = function(l) {
      if (e(l))
        throw r("Can't call method on " + l);
      return l;
    };
  }, (C) => {
    C.exports = function(o) {
      return o == null;
    };
  }, (C, o, t) => {
    var e = t(19), r = t(23);
    C.exports = function(l) {
      var m = e(l, "string");
      return r(m) ? m : m + "";
    };
  }, (C, o, t) => {
    var e = t(8), r = t(20), l = t(23), m = t(30), y = t(33), h = t(34), a = TypeError, f = h("toPrimitive");
    C.exports = function(g, x) {
      if (!r(g) || l(g))
        return g;
      var b, _ = m(g, f);
      if (_) {
        if (x === void 0 && (x = "default"), b = e(_, g, x), !r(b) || l(b))
          return b;
        throw a("Can't convert object to primitive value");
      }
      return x === void 0 && (x = "number"), y(g, x);
    };
  }, (C, o, t) => {
    var e = t(21), r = t(22), l = r.all;
    C.exports = r.IS_HTMLDDA ? function(m) {
      return typeof m == "object" ? m !== null : e(m) || m === l;
    } : function(m) {
      return typeof m == "object" ? m !== null : e(m);
    };
  }, (C, o, t) => {
    var e = t(22), r = e.all;
    C.exports = e.IS_HTMLDDA ? function(l) {
      return typeof l == "function" || l === r;
    } : function(l) {
      return typeof l == "function";
    };
  }, (C) => {
    var o = typeof document == "object" && document.all, t = o === void 0 && o !== void 0;
    C.exports = { all: o, IS_HTMLDDA: t };
  }, (C, o, t) => {
    var e = t(24), r = t(21), l = t(25), m = t(26), y = Object;
    C.exports = m ? function(h) {
      return typeof h == "symbol";
    } : function(h) {
      var a = e("Symbol");
      return r(a) && l(a.prototype, y(h));
    };
  }, (C, o, t) => {
    var e = t(4), r = t(21);
    C.exports = function(l, m) {
      return arguments.length < 2 ? (y = e[l], r(y) ? y : void 0) : e[l] && e[l][m];
      var y;
    };
  }, (C, o, t) => {
    var e = t(14);
    C.exports = e({}.isPrototypeOf);
  }, (C, o, t) => {
    var e = t(27);
    C.exports = e && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }, (C, o, t) => {
    var e = t(28), r = t(7), l = t(4).String;
    C.exports = !!Object.getOwnPropertySymbols && !r(function() {
      var m = Symbol("symbol detection");
      return !l(m) || !(Object(m) instanceof Symbol) || !Symbol.sham && e && e < 41;
    });
  }, (C, o, t) => {
    var e, r, l = t(4), m = t(29), y = l.process, h = l.Deno, a = y && y.versions || h && h.version, f = a && a.v8;
    f && (r = (e = f.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !r && m && (!(e = m.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = m.match(/Chrome\/(\d+)/)) && (r = +e[1]), C.exports = r;
  }, (C) => {
    C.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
  }, (C, o, t) => {
    var e = t(31), r = t(17);
    C.exports = function(l, m) {
      var y = l[m];
      return r(y) ? void 0 : e(y);
    };
  }, (C, o, t) => {
    var e = t(21), r = t(32), l = TypeError;
    C.exports = function(m) {
      if (e(m))
        return m;
      throw l(r(m) + " is not a function");
    };
  }, (C) => {
    var o = String;
    C.exports = function(t) {
      try {
        return o(t);
      } catch {
        return "Object";
      }
    };
  }, (C, o, t) => {
    var e = t(8), r = t(21), l = t(20), m = TypeError;
    C.exports = function(y, h) {
      var a, f;
      if (h === "string" && r(a = y.toString) && !l(f = e(a, y)) || r(a = y.valueOf) && !l(f = e(a, y)) || h !== "string" && r(a = y.toString) && !l(f = e(a, y)))
        return f;
      throw m("Can't convert object to primitive value");
    };
  }, (C, o, t) => {
    var e = t(4), r = t(35), l = t(39), m = t(41), y = t(27), h = t(26), a = e.Symbol, f = r("wks"), g = h ? a.for || a : a && a.withoutSetter || m;
    C.exports = function(x) {
      return l(f, x) || (f[x] = y && l(a, x) ? a[x] : g("Symbol." + x)), f[x];
    };
  }, (C, o, t) => {
    var e = t(36), r = t(37);
    (C.exports = function(l, m) {
      return r[l] || (r[l] = m !== void 0 ? m : {});
    })("versions", []).push({ version: "3.32.2", mode: e ? "pure" : "global", copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE", source: "https://github.com/zloirock/core-js" });
  }, (C) => {
    C.exports = !1;
  }, (C, o, t) => {
    var e = t(4), r = t(38), l = "__core-js_shared__", m = e[l] || r(l, {});
    C.exports = m;
  }, (C, o, t) => {
    var e = t(4), r = Object.defineProperty;
    C.exports = function(l, m) {
      try {
        r(e, l, { value: m, configurable: !0, writable: !0 });
      } catch {
        e[l] = m;
      }
      return m;
    };
  }, (C, o, t) => {
    var e = t(14), r = t(40), l = e({}.hasOwnProperty);
    C.exports = Object.hasOwn || function(y, h) {
      return l(r(y), h);
    };
  }, (C, o, t) => {
    var e = t(16), r = Object;
    C.exports = function(l) {
      return r(e(l));
    };
  }, (C, o, t) => {
    var e = t(14), r = 0, l = Math.random(), m = e(1 .toString);
    C.exports = function(y) {
      return "Symbol(" + (y === void 0 ? "" : y) + ")_" + m(++r + l, 36);
    };
  }, (C, o, t) => {
    var e = t(6), r = t(7), l = t(43);
    C.exports = !e && !r(function() {
      return Object.defineProperty(l("div"), "a", { get: function() {
        return 7;
      } }).a !== 7;
    });
  }, (C, o, t) => {
    var e = t(4), r = t(20), l = e.document, m = r(l) && r(l.createElement);
    C.exports = function(y) {
      return m ? l.createElement(y) : {};
    };
  }, (C, o, t) => {
    var e = t(6), r = t(45), l = t(11);
    C.exports = e ? function(m, y, h) {
      return r.f(m, y, l(1, h));
    } : function(m, y, h) {
      return m[y] = h, m;
    };
  }, (C, o, t) => {
    var e = t(6), r = t(42), l = t(46), m = t(47), y = t(18), h = TypeError, a = Object.defineProperty, f = Object.getOwnPropertyDescriptor, g = "enumerable", x = "configurable", b = "writable";
    o.f = e ? l ? function(M, O, W) {
      if (m(M), O = y(O), m(W), typeof M == "function" && O === "prototype" && "value" in W && b in W && !W[b]) {
        var w = f(M, O);
        w && w[b] && (M[O] = W.value, W = { configurable: x in W ? W[x] : w[x], enumerable: g in W ? W[g] : w[g], writable: !1 });
      }
      return a(M, O, W);
    } : a : function(M, O, W) {
      if (m(M), O = y(O), m(W), r)
        try {
          return a(M, O, W);
        } catch {
        }
      if ("get" in W || "set" in W)
        throw h("Accessors not supported");
      return "value" in W && (M[O] = W.value), M;
    };
  }, (C, o, t) => {
    var e = t(6), r = t(7);
    C.exports = e && r(function() {
      return Object.defineProperty(function() {
      }, "prototype", { value: 42, writable: !1 }).prototype !== 42;
    });
  }, (C, o, t) => {
    var e = t(20), r = String, l = TypeError;
    C.exports = function(m) {
      if (e(m))
        return m;
      throw l(r(m) + " is not an object");
    };
  }, (C, o, t) => {
    var e = t(21), r = t(45), l = t(49), m = t(38);
    C.exports = function(y, h, a, f) {
      f || (f = {});
      var g = f.enumerable, x = f.name !== void 0 ? f.name : h;
      if (e(a) && l(a, x, f), f.global)
        g ? y[h] = a : m(h, a);
      else {
        try {
          f.unsafe ? y[h] && (g = !0) : delete y[h];
        } catch {
        }
        g ? y[h] = a : r.f(y, h, { value: a, enumerable: !1, configurable: !f.nonConfigurable, writable: !f.nonWritable });
      }
      return y;
    };
  }, (C, o, t) => {
    var e = t(14), r = t(7), l = t(21), m = t(39), y = t(6), h = t(50).CONFIGURABLE, a = t(51), f = t(52), g = f.enforce, x = f.get, b = String, _ = Object.defineProperty, M = e("".slice), O = e("".replace), W = e([].join), w = y && !r(function() {
      return _(function() {
      }, "length", { value: 8 }).length !== 8;
    }), n = String(String).split("String"), i = C.exports = function(p, T, R) {
      M(b(T), 0, 7) === "Symbol(" && (T = "[" + O(b(T), /^Symbol\(([^)]*)\)/, "$1") + "]"), R && R.getter && (T = "get " + T), R && R.setter && (T = "set " + T), (!m(p, "name") || h && p.name !== T) && (y ? _(p, "name", { value: T, configurable: !0 }) : p.name = T), w && R && m(R, "arity") && p.length !== R.arity && _(p, "length", { value: R.arity });
      try {
        R && m(R, "constructor") && R.constructor ? y && _(p, "prototype", { writable: !1 }) : p.prototype && (p.prototype = void 0);
      } catch {
      }
      var k = g(p);
      return m(k, "source") || (k.source = W(n, typeof T == "string" ? T : "")), p;
    };
    Function.prototype.toString = i(function() {
      return l(this) && x(this).source || a(this);
    }, "toString");
  }, (C, o, t) => {
    var e = t(6), r = t(39), l = Function.prototype, m = e && Object.getOwnPropertyDescriptor, y = r(l, "name"), h = y && function() {
    }.name === "something", a = y && (!e || e && m(l, "name").configurable);
    C.exports = { EXISTS: y, PROPER: h, CONFIGURABLE: a };
  }, (C, o, t) => {
    var e = t(14), r = t(21), l = t(37), m = e(Function.toString);
    r(l.inspectSource) || (l.inspectSource = function(y) {
      return m(y);
    }), C.exports = l.inspectSource;
  }, (C, o, t) => {
    var e, r, l, m = t(53), y = t(4), h = t(20), a = t(44), f = t(39), g = t(37), x = t(54), b = t(55), _ = "Object already initialized", M = y.TypeError, O = y.WeakMap;
    if (m || g.state) {
      var W = g.state || (g.state = new O());
      W.get = W.get, W.has = W.has, W.set = W.set, e = function(n, i) {
        if (W.has(n))
          throw M(_);
        return i.facade = n, W.set(n, i), i;
      }, r = function(n) {
        return W.get(n) || {};
      }, l = function(n) {
        return W.has(n);
      };
    } else {
      var w = x("state");
      b[w] = !0, e = function(n, i) {
        if (f(n, w))
          throw M(_);
        return i.facade = n, a(n, w, i), i;
      }, r = function(n) {
        return f(n, w) ? n[w] : {};
      }, l = function(n) {
        return f(n, w);
      };
    }
    C.exports = { set: e, get: r, has: l, enforce: function(n) {
      return l(n) ? r(n) : e(n, {});
    }, getterFor: function(n) {
      return function(i) {
        var p;
        if (!h(i) || (p = r(i)).type !== n)
          throw M("Incompatible receiver, " + n + " required");
        return p;
      };
    } };
  }, (C, o, t) => {
    var e = t(4), r = t(21), l = e.WeakMap;
    C.exports = r(l) && /native code/.test(String(l));
  }, (C, o, t) => {
    var e = t(35), r = t(41), l = e("keys");
    C.exports = function(m) {
      return l[m] || (l[m] = r(m));
    };
  }, (C) => {
    C.exports = {};
  }, (C, o, t) => {
    var e = t(39), r = t(57), l = t(5), m = t(45);
    C.exports = function(y, h, a) {
      for (var f = r(h), g = m.f, x = l.f, b = 0; b < f.length; b++) {
        var _ = f[b];
        e(y, _) || a && e(a, _) || g(y, _, x(h, _));
      }
    };
  }, (C, o, t) => {
    var e = t(24), r = t(14), l = t(58), m = t(67), y = t(47), h = r([].concat);
    C.exports = e("Reflect", "ownKeys") || function(f) {
      var g = l.f(y(f)), x = m.f;
      return x ? h(g, x(f)) : g;
    };
  }, (C, o, t) => {
    var e = t(59), r = t(66).concat("length", "prototype");
    o.f = Object.getOwnPropertyNames || function(m) {
      return e(m, r);
    };
  }, (C, o, t) => {
    var e = t(14), r = t(39), l = t(12), m = t(60).indexOf, y = t(55), h = e([].push);
    C.exports = function(a, f) {
      var g, x = l(a), b = 0, _ = [];
      for (g in x)
        !r(y, g) && r(x, g) && h(_, g);
      for (; f.length > b; )
        r(x, g = f[b++]) && (~m(_, g) || h(_, g));
      return _;
    };
  }, (C, o, t) => {
    var e = t(12), r = t(61), l = t(64), m = function(y) {
      return function(h, a, f) {
        var g, x = e(h), b = l(x), _ = r(f, b);
        if (y && a != a) {
          for (; b > _; )
            if ((g = x[_++]) != g)
              return !0;
        } else
          for (; b > _; _++)
            if ((y || _ in x) && x[_] === a)
              return y || _ || 0;
        return !y && -1;
      };
    };
    C.exports = { includes: m(!0), indexOf: m(!1) };
  }, (C, o, t) => {
    var e = t(62), r = Math.max, l = Math.min;
    C.exports = function(m, y) {
      var h = e(m);
      return h < 0 ? r(h + y, 0) : l(h, y);
    };
  }, (C, o, t) => {
    var e = t(63);
    C.exports = function(r) {
      var l = +r;
      return l != l || l === 0 ? 0 : e(l);
    };
  }, (C) => {
    var o = Math.ceil, t = Math.floor;
    C.exports = Math.trunc || function(r) {
      var l = +r;
      return (l > 0 ? t : o)(l);
    };
  }, (C, o, t) => {
    var e = t(65);
    C.exports = function(r) {
      return e(r.length);
    };
  }, (C, o, t) => {
    var e = t(62), r = Math.min;
    C.exports = function(l) {
      return l > 0 ? r(e(l), 9007199254740991) : 0;
    };
  }, (C) => {
    C.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, (C, o) => {
    o.f = Object.getOwnPropertySymbols;
  }, (C, o, t) => {
    var e = t(7), r = t(21), l = /#|\.prototype\./, m = function(g, x) {
      var b = h[y(g)];
      return b === f || b !== a && (r(x) ? e(x) : !!x);
    }, y = m.normalize = function(g) {
      return String(g).replace(l, ".").toLowerCase();
    }, h = m.data = {}, a = m.NATIVE = "N", f = m.POLYFILL = "P";
    C.exports = m;
  }, (C, o, t) => {
    var e = t(9), r = Function.prototype, l = r.apply, m = r.call;
    C.exports = typeof Reflect == "object" && Reflect.apply || (e ? m.bind(l) : function() {
      return m.apply(l, arguments);
    });
  }, (C, o, t) => {
    var e = t(24), r = t(39), l = t(44), m = t(25), y = t(71), h = t(56), a = t(74), f = t(75), g = t(76), x = t(80), b = t(81), _ = t(6), M = t(36);
    C.exports = function(O, W, w, n) {
      var i = "stackTraceLimit", p = n ? 2 : 1, T = O.split("."), R = T[T.length - 1], k = e.apply(null, T);
      if (k) {
        var d = k.prototype;
        if (!M && r(d, "cause") && delete d.cause, !w)
          return k;
        var L = e("Error"), F = W(function(V, Z) {
          var B = g(n ? Z : V, void 0), U = n ? new k(V) : new k();
          return B !== void 0 && l(U, "message", B), b(U, F, U.stack, 2), this && m(d, this) && f(U, this, F), arguments.length > p && x(U, arguments[p]), U;
        });
        if (F.prototype = d, R !== "Error" ? y ? y(F, L) : h(F, L, { name: !0 }) : _ && i in k && (a(F, k, i), a(F, k, "prepareStackTrace")), h(F, k), !M)
          try {
            d.name !== R && l(d, "name", R), d.constructor = F;
          } catch {
          }
        return F;
      }
    };
  }, (C, o, t) => {
    var e = t(72), r = t(47), l = t(73);
    C.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var m, y = !1, h = {};
      try {
        (m = e(Object.prototype, "__proto__", "set"))(h, []), y = h instanceof Array;
      } catch {
      }
      return function(f, g) {
        return r(f), l(g), y ? m(f, g) : f.__proto__ = g, f;
      };
    }() : void 0);
  }, (C, o, t) => {
    var e = t(14), r = t(31);
    C.exports = function(l, m, y) {
      try {
        return e(r(Object.getOwnPropertyDescriptor(l, m)[y]));
      } catch {
      }
    };
  }, (C, o, t) => {
    var e = t(21), r = String, l = TypeError;
    C.exports = function(m) {
      if (typeof m == "object" || e(m))
        return m;
      throw l("Can't set " + r(m) + " as a prototype");
    };
  }, (C, o, t) => {
    var e = t(45).f;
    C.exports = function(r, l, m) {
      m in r || e(r, m, { configurable: !0, get: function() {
        return l[m];
      }, set: function(y) {
        l[m] = y;
      } });
    };
  }, (C, o, t) => {
    var e = t(21), r = t(20), l = t(71);
    C.exports = function(m, y, h) {
      var a, f;
      return l && e(a = y.constructor) && a !== h && r(f = a.prototype) && f !== h.prototype && l(m, f), m;
    };
  }, (C, o, t) => {
    var e = t(77);
    C.exports = function(r, l) {
      return r === void 0 ? arguments.length < 2 ? "" : l : e(r);
    };
  }, (C, o, t) => {
    var e = t(78), r = String;
    C.exports = function(l) {
      if (e(l) === "Symbol")
        throw TypeError("Cannot convert a Symbol value to a string");
      return r(l);
    };
  }, (C, o, t) => {
    var e = t(79), r = t(21), l = t(15), m = t(34)("toStringTag"), y = Object, h = l(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    C.exports = e ? l : function(a) {
      var f, g, x;
      return a === void 0 ? "Undefined" : a === null ? "Null" : typeof (g = function(b, _) {
        try {
          return b[_];
        } catch {
        }
      }(f = y(a), m)) == "string" ? g : h ? l(f) : (x = l(f)) === "Object" && r(f.callee) ? "Arguments" : x;
    };
  }, (C, o, t) => {
    var e = {};
    e[t(34)("toStringTag")] = "z", C.exports = String(e) === "[object z]";
  }, (C, o, t) => {
    var e = t(20), r = t(44);
    C.exports = function(l, m) {
      e(m) && "cause" in m && r(l, "cause", m.cause);
    };
  }, (C, o, t) => {
    var e = t(44), r = t(82), l = t(83), m = Error.captureStackTrace;
    C.exports = function(y, h, a, f) {
      l && (m ? m(y, h) : e(y, "stack", r(a, f)));
    };
  }, (C, o, t) => {
    var e = t(14), r = Error, l = e("".replace), m = String(r("zxcasd").stack), y = /\n\s*at [^:]*:[^\n]*/, h = y.test(m);
    C.exports = function(a, f) {
      if (h && typeof a == "string" && !r.prepareStackTrace)
        for (; f--; )
          a = l(a, y, "");
      return a;
    };
  }, (C, o, t) => {
    var e = t(7), r = t(11);
    C.exports = !e(function() {
      var l = Error("a");
      return "stack" in l ? (Object.defineProperty(l, "stack", r(1, 7)), l.stack !== 7) : !0;
    });
  }, (C, o, t) => {
    var e = t(48), r = t(14), l = t(77), m = t(85), y = URLSearchParams, h = y.prototype, a = r(h.append), f = r(h.delete), g = r(h.forEach), x = r([].push), b = new y("a=1&a=2&b=3");
    b.delete("a", 1), b.delete("b", void 0), b + "" != "a=2" && e(h, "delete", function(_) {
      var M = arguments.length, O = M < 2 ? void 0 : arguments[1];
      if (M && O === void 0)
        return f(this, _);
      var W = [];
      g(this, function(d, L) {
        x(W, { key: L, value: d });
      }), m(M, 1);
      for (var w, n = l(_), i = l(O), p = 0, T = 0, R = !1, k = W.length; p < k; )
        w = W[p++], R || w.key === n ? (R = !0, f(this, w.key)) : T++;
      for (; T < k; )
        (w = W[T++]).key === n && w.value === i || a(this, w.key, w.value);
    }, { enumerable: !0, unsafe: !0 });
  }, (C) => {
    var o = TypeError;
    C.exports = function(t, e) {
      if (t < e)
        throw o("Not enough arguments");
      return t;
    };
  }, (C, o, t) => {
    var e = t(48), r = t(14), l = t(77), m = t(85), y = URLSearchParams, h = y.prototype, a = r(h.getAll), f = r(h.has), g = new y("a=1");
    !g.has("a", 2) && g.has("a", void 0) || e(h, "has", function(b) {
      var _ = arguments.length, M = _ < 2 ? void 0 : arguments[1];
      if (_ && M === void 0)
        return f(this, b);
      var O = a(this, b);
      m(_, 1);
      for (var W = l(M), w = 0; w < O.length; )
        if (O[w++] === W)
          return !0;
      return !1;
    }, { enumerable: !0, unsafe: !0 });
  }, (C, o, t) => {
    var e = t(6), r = t(14), l = t(88), m = URLSearchParams.prototype, y = r(m.forEach);
    e && !("size" in m) && l(m, "size", { get: function() {
      var a = 0;
      return y(this, function() {
        a++;
      }), a;
    }, configurable: !0, enumerable: !0 });
  }, (C, o, t) => {
    var e = t(49), r = t(45);
    C.exports = function(l, m, y) {
      return y.get && e(y.get, m, { getter: !0 }), y.set && e(y.set, m, { setter: !0 }), r.f(l, m, y);
    };
  }, (C, o, t) => {
    var e = t(3), r = t(40), l = t(64), m = t(90), y = t(92);
    e({ target: "Array", proto: !0, arity: 1, forced: t(7)(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    }) || !function() {
      try {
        Object.defineProperty([], "length", { writable: !1 }).push();
      } catch (h) {
        return h instanceof TypeError;
      }
    }() }, { push: function(a) {
      var f = r(this), g = l(f), x = arguments.length;
      y(g + x);
      for (var b = 0; b < x; b++)
        f[g] = arguments[b], g++;
      return m(f, g), g;
    } });
  }, (C, o, t) => {
    var e = t(6), r = t(91), l = TypeError, m = Object.getOwnPropertyDescriptor, y = e && !function() {
      if (this !== void 0)
        return !0;
      try {
        Object.defineProperty([], "length", { writable: !1 }).length = 1;
      } catch (h) {
        return h instanceof TypeError;
      }
    }();
    C.exports = y ? function(h, a) {
      if (r(h) && !m(h, "length").writable)
        throw l("Cannot set read only .length");
      return h.length = a;
    } : function(h, a) {
      return h.length = a;
    };
  }, (C, o, t) => {
    var e = t(15);
    C.exports = Array.isArray || function(l) {
      return e(l) === "Array";
    };
  }, (C) => {
    var o = TypeError;
    C.exports = function(t) {
      if (t > 9007199254740991)
        throw o("Maximum allowed index exceeded");
      return t;
    };
  }, (C, o, t) => {
    var e = t(94), r = t(98).findLast, l = e.aTypedArray;
    (0, e.exportTypedArrayMethod)("findLast", function(y) {
      return r(l(this), y, arguments.length > 1 ? arguments[1] : void 0);
    });
  }, (C, o, t) => {
    var e, r, l, m = t(95), y = t(6), h = t(4), a = t(21), f = t(20), g = t(39), x = t(78), b = t(32), _ = t(44), M = t(48), O = t(88), W = t(25), w = t(96), n = t(71), i = t(34), p = t(41), T = t(52), R = T.enforce, k = T.get, d = h.Int8Array, L = d && d.prototype, F = h.Uint8ClampedArray, V = F && F.prototype, Z = d && w(d), B = L && w(L), U = Object.prototype, u = h.TypeError, v = i("toStringTag"), S = p("TYPED_ARRAY_TAG"), D = "TypedArrayConstructor", q = m && !!n && x(h.opera) !== "Opera", J = !1, z = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, N = { BigInt64Array: 8, BigUint64Array: 8 }, P = function(E) {
      var j = w(E);
      if (f(j)) {
        var $ = k(j);
        return $ && g($, D) ? $[D] : P(j);
      }
    }, I = function(E) {
      if (!f(E))
        return !1;
      var j = x(E);
      return g(z, j) || g(N, j);
    };
    for (e in z)
      (l = (r = h[e]) && r.prototype) ? R(l)[D] = r : q = !1;
    for (e in N)
      (l = (r = h[e]) && r.prototype) && (R(l)[D] = r);
    if ((!q || !a(Z) || Z === Function.prototype) && (Z = function() {
      throw u("Incorrect invocation");
    }, q))
      for (e in z)
        h[e] && n(h[e], Z);
    if ((!q || !B || B === U) && (B = Z.prototype, q))
      for (e in z)
        h[e] && n(h[e].prototype, B);
    if (q && w(V) !== B && n(V, B), y && !g(B, v)) {
      J = !0, O(B, v, { configurable: !0, get: function() {
        return f(this) ? this[S] : void 0;
      } });
      for (e in z)
        h[e] && _(h[e], S, e);
    }
    C.exports = { NATIVE_ARRAY_BUFFER_VIEWS: q, TYPED_ARRAY_TAG: J && S, aTypedArray: function(E) {
      if (I(E))
        return E;
      throw u("Target is not a typed array");
    }, aTypedArrayConstructor: function(E) {
      if (a(E) && (!n || W(Z, E)))
        return E;
      throw u(b(E) + " is not a typed array constructor");
    }, exportTypedArrayMethod: function(E, j, $, H) {
      if (y) {
        if ($)
          for (var Y in z) {
            var X = h[Y];
            if (X && g(X.prototype, E))
              try {
                delete X.prototype[E];
              } catch {
                try {
                  X.prototype[E] = j;
                } catch {
                }
              }
          }
        B[E] && !$ || M(B, E, $ ? j : q && L[E] || j, H);
      }
    }, exportTypedArrayStaticMethod: function(E, j, $) {
      var H, Y;
      if (y) {
        if (n) {
          if ($) {
            for (H in z)
              if ((Y = h[H]) && g(Y, E))
                try {
                  delete Y[E];
                } catch {
                }
          }
          if (Z[E] && !$)
            return;
          try {
            return M(Z, E, $ ? j : q && Z[E] || j);
          } catch {
          }
        }
        for (H in z)
          !(Y = h[H]) || Y[E] && !$ || M(Y, E, j);
      }
    }, getTypedArrayConstructor: P, isView: function(j) {
      if (!f(j))
        return !1;
      var $ = x(j);
      return $ === "DataView" || g(z, $) || g(N, $);
    }, isTypedArray: I, TypedArray: Z, TypedArrayPrototype: B };
  }, (C) => {
    C.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
  }, (C, o, t) => {
    var e = t(39), r = t(21), l = t(40), m = t(54), y = t(97), h = m("IE_PROTO"), a = Object, f = a.prototype;
    C.exports = y ? a.getPrototypeOf : function(g) {
      var x = l(g);
      if (e(x, h))
        return x[h];
      var b = x.constructor;
      return r(b) && x instanceof b ? b.prototype : x instanceof a ? f : null;
    };
  }, (C, o, t) => {
    var e = t(7);
    C.exports = !e(function() {
      function r() {
      }
      return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
    });
  }, (C, o, t) => {
    var e = t(99), r = t(13), l = t(40), m = t(64), y = function(h) {
      var a = h === 1;
      return function(f, g, x) {
        for (var b, _ = l(f), M = r(_), O = e(g, x), W = m(M); W-- > 0; )
          if (O(b = M[W], W, _))
            switch (h) {
              case 0:
                return b;
              case 1:
                return W;
            }
        return a ? -1 : void 0;
      };
    };
    C.exports = { findLast: y(0), findLastIndex: y(1) };
  }, (C, o, t) => {
    var e = t(100), r = t(31), l = t(9), m = e(e.bind);
    C.exports = function(y, h) {
      return r(y), h === void 0 ? y : l ? m(y, h) : function() {
        return y.apply(h, arguments);
      };
    };
  }, (C, o, t) => {
    var e = t(15), r = t(14);
    C.exports = function(l) {
      if (e(l) === "Function")
        return r(l);
    };
  }, (C, o, t) => {
    var e = t(94), r = t(98).findLastIndex, l = e.aTypedArray;
    (0, e.exportTypedArrayMethod)("findLastIndex", function(y) {
      return r(l(this), y, arguments.length > 1 ? arguments[1] : void 0);
    });
  }, (C, o, t) => {
    var e = t(4), r = t(8), l = t(94), m = t(64), y = t(103), h = t(40), a = t(7), f = e.RangeError, g = e.Int8Array, x = g && g.prototype, b = x && x.set, _ = l.aTypedArray, M = l.exportTypedArrayMethod, O = !a(function() {
      var w = new Uint8ClampedArray(2);
      return r(b, w, { length: 1, 0: 3 }, 1), w[1] !== 3;
    }), W = O && l.NATIVE_ARRAY_BUFFER_VIEWS && a(function() {
      var w = new g(2);
      return w.set(1), w.set("2", 1), w[0] !== 0 || w[1] !== 2;
    });
    M("set", function(n) {
      _(this);
      var i = y(arguments.length > 1 ? arguments[1] : void 0, 1), p = h(n);
      if (O)
        return r(b, this, p, i);
      var T = this.length, R = m(p), k = 0;
      if (R + i > T)
        throw f("Wrong length");
      for (; k < R; )
        this[i + k] = p[k++];
    }, !O || W);
  }, (C, o, t) => {
    var e = t(104), r = RangeError;
    C.exports = function(l, m) {
      var y = e(l);
      if (y % m)
        throw r("Wrong offset");
      return y;
    };
  }, (C, o, t) => {
    var e = t(62), r = RangeError;
    C.exports = function(l) {
      var m = e(l);
      if (m < 0)
        throw r("The argument can't be less than 0");
      return m;
    };
  }, (C, o, t) => {
    var e = t(106), r = t(94), l = r.aTypedArray, m = r.exportTypedArrayMethod, y = r.getTypedArrayConstructor;
    m("toReversed", function() {
      return e(l(this), y(this));
    });
  }, (C, o, t) => {
    var e = t(64);
    C.exports = function(r, l) {
      for (var m = e(r), y = new l(m), h = 0; h < m; h++)
        y[h] = r[m - h - 1];
      return y;
    };
  }, (C, o, t) => {
    var e = t(94), r = t(14), l = t(31), m = t(108), y = e.aTypedArray, h = e.getTypedArrayConstructor, a = e.exportTypedArrayMethod, f = r(e.TypedArrayPrototype.sort);
    a("toSorted", function(x) {
      x !== void 0 && l(x);
      var b = y(this), _ = m(h(b), b);
      return f(_, x);
    });
  }, (C, o, t) => {
    var e = t(64);
    C.exports = function(r, l) {
      for (var m = 0, y = e(l), h = new r(y); y > m; )
        h[m] = l[m++];
      return h;
    };
  }, (C, o, t) => {
    var e = t(110), r = t(94), l = t(111), m = t(62), y = t(112), h = r.aTypedArray, a = r.getTypedArrayConstructor, f = r.exportTypedArrayMethod, g = !!function() {
      try {
        new Int8Array(1).with(2, { valueOf: function() {
          throw 8;
        } });
      } catch (x) {
        return x === 8;
      }
    }();
    f("with", function(x, b) {
      var _ = h(this), M = m(x), O = l(_) ? y(b) : +b;
      return e(_, a(_), M, O);
    }, !g);
  }, (C, o, t) => {
    var e = t(64), r = t(62), l = RangeError;
    C.exports = function(m, y, h, a) {
      var f = e(m), g = r(h), x = g < 0 ? f + g : g;
      if (x >= f || x < 0)
        throw l("Incorrect index");
      for (var b = new y(f), _ = 0; _ < f; _++)
        b[_] = _ === x ? a : m[_];
      return b;
    };
  }, (C, o, t) => {
    var e = t(78);
    C.exports = function(r) {
      var l = e(r);
      return l === "BigInt64Array" || l === "BigUint64Array";
    };
  }, (C, o, t) => {
    var e = t(19), r = TypeError;
    C.exports = function(l) {
      var m = e(l, "number");
      if (typeof m == "number")
        throw r("Can't convert number to bigint");
      return BigInt(m);
    };
  }, (C, o, t) => {
    var e = t(6), r = t(88), l = t(114), m = ArrayBuffer.prototype;
    e && !("detached" in m) && r(m, "detached", { configurable: !0, get: function() {
      return l(this);
    } });
  }, (C, o, t) => {
    var e = t(14), r = t(115), l = e(ArrayBuffer.prototype.slice);
    C.exports = function(m) {
      if (r(m) !== 0)
        return !1;
      try {
        return l(m, 0, 0), !1;
      } catch {
        return !0;
      }
    };
  }, (C, o, t) => {
    var e = t(72), r = t(15), l = TypeError;
    C.exports = e(ArrayBuffer.prototype, "byteLength", "get") || function(m) {
      if (r(m) !== "ArrayBuffer")
        throw l("ArrayBuffer expected");
      return m.byteLength;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(117);
    r && e({ target: "ArrayBuffer", proto: !0 }, { transfer: function() {
      return r(this, arguments.length ? arguments[0] : void 0, !0);
    } });
  }, (C, o, t) => {
    var e = t(4), r = t(14), l = t(72), m = t(118), y = t(114), h = t(115), a = t(119), f = e.TypeError, g = e.structuredClone, x = e.ArrayBuffer, b = e.DataView, _ = Math.min, M = x.prototype, O = b.prototype, W = r(M.slice), w = l(M, "resizable", "get"), n = l(M, "maxByteLength", "get"), i = r(O.getInt8), p = r(O.setInt8);
    C.exports = a && function(T, R, k) {
      var d = h(T), L = R === void 0 ? d : m(R), F = !w || !w(T);
      if (y(T))
        throw f("ArrayBuffer is detached");
      var V = g(T, { transfer: [T] });
      if (d === L && (k || F))
        return V;
      if (d >= L && (!k || F))
        return W(V, 0, L);
      for (var Z = k && !F && n ? { maxByteLength: n(V) } : void 0, B = new x(L, Z), U = new b(V), u = new b(B), v = _(L, d), S = 0; S < v; S++)
        p(u, S, i(U, S));
      return B;
    };
  }, (C, o, t) => {
    var e = t(62), r = t(65), l = RangeError;
    C.exports = function(m) {
      if (m === void 0)
        return 0;
      var y = e(m), h = r(y);
      if (y !== h)
        throw l("Wrong length or index");
      return h;
    };
  }, (C, o, t) => {
    var e = t(4), r = t(7), l = t(28), m = t(120), y = t(121), h = t(122), a = e.structuredClone;
    C.exports = !!a && !r(function() {
      if (y && l > 92 || h && l > 94 || m && l > 97)
        return !1;
      var f = new ArrayBuffer(8), g = a(f, { transfer: [f] });
      return f.byteLength !== 0 || g.byteLength !== 8;
    });
  }, (C, o, t) => {
    var e = t(121), r = t(122);
    C.exports = !e && !r && typeof window == "object" && typeof document == "object";
  }, (C) => {
    C.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
  }, (C, o, t) => {
    var e = t(4), r = t(15);
    C.exports = r(e.process) === "process";
  }, (C, o, t) => {
    var e = t(3), r = t(117);
    r && e({ target: "ArrayBuffer", proto: !0 }, { transferToFixedLength: function() {
      return r(this, arguments.length ? arguments[0] : void 0, !1);
    } });
  }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
    var C, t, e, r, ce, m, Se, h, a, f, g, x, b, _, M, O, xe, w, n, Ne, p, T;
    Object.defineProperty(exports, "__esModule", { value: !0 }), exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, Object.defineProperty(exports, "SVGGraphics", { enumerable: !0, get: function() {
      return _displaySvg.SVGGraphics;
    } }), exports.build = void 0, exports.getDocument = getDocument, exports.version = void 0, __w_pdfjs_require__(84), __w_pdfjs_require__(86), __w_pdfjs_require__(87), __w_pdfjs_require__(2), __w_pdfjs_require__(93), __w_pdfjs_require__(101), __w_pdfjs_require__(102), __w_pdfjs_require__(105), __w_pdfjs_require__(107), __w_pdfjs_require__(109), __w_pdfjs_require__(113), __w_pdfjs_require__(116), __w_pdfjs_require__(123), __w_pdfjs_require__(89), __w_pdfjs_require__(125), __w_pdfjs_require__(136), __w_pdfjs_require__(138), __w_pdfjs_require__(141), __w_pdfjs_require__(143), __w_pdfjs_require__(145), __w_pdfjs_require__(147), __w_pdfjs_require__(149), __w_pdfjs_require__(152);
    var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(163), _display_utils = __w_pdfjs_require__(168), _font_loader = __w_pdfjs_require__(171), _displayNode_utils = __w_pdfjs_require__(172), _canvas = __w_pdfjs_require__(173), _worker_options = __w_pdfjs_require__(176), _message_handler = __w_pdfjs_require__(177), _metadata = __w_pdfjs_require__(178), _optional_content_config = __w_pdfjs_require__(179), _transport_stream = __w_pdfjs_require__(180), _displayFetch_stream = __w_pdfjs_require__(181), _displayNetwork = __w_pdfjs_require__(184), _displayNode_stream = __w_pdfjs_require__(185), _displaySvg = __w_pdfjs_require__(186), _xfa_text = __w_pdfjs_require__(194);
    const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DELAYED_CLEANUP_TIMEOUT = 5e3, DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
    exports.DefaultCanvasFactory = DefaultCanvasFactory;
    const DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
    exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
    const DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
    exports.DefaultFilterFactory = DefaultFilterFactory;
    const DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
    exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
    function getDocument(k) {
      var Kt, te;
      if (typeof k == "string" || k instanceof URL ? k = { url: k } : (0, _util.isArrayBuffer)(k) && (k = { data: k }), typeof k != "object")
        throw new Error("Invalid parameter in getDocument, need parameter object.");
      if (!k.url && !k.data && !k.range)
        throw new Error("Invalid parameter object: need either .data, .range or .url");
      const d = new PDFDocumentLoadingTask(), { docId: L } = d, F = k.url ? getUrlProp(k.url) : null, V = k.data ? getDataProp(k.data) : null, Z = k.httpHeaders || null, B = k.withCredentials === !0, U = (Kt = k.password) != null ? Kt : null, u = k.range instanceof PDFDataRangeTransport ? k.range : null, v = Number.isInteger(k.rangeChunkSize) && k.rangeChunkSize > 0 ? k.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
      let S = k.worker instanceof PDFWorker ? k.worker : null;
      const D = k.verbosity, q = typeof k.docBaseUrl != "string" || (0, _display_utils.isDataScheme)(k.docBaseUrl) ? null : k.docBaseUrl, J = typeof k.cMapUrl == "string" ? k.cMapUrl : null, z = k.cMapPacked !== !1, N = k.CMapReaderFactory || DefaultCMapReaderFactory, P = typeof k.standardFontDataUrl == "string" ? k.standardFontDataUrl : null, I = k.StandardFontDataFactory || DefaultStandardFontDataFactory, E = k.stopAtErrors !== !0, j = Number.isInteger(k.maxImageSize) && k.maxImageSize > -1 ? k.maxImageSize : -1, $ = k.isEvalSupported !== !1, H = typeof k.isOffscreenCanvasSupported == "boolean" ? k.isOffscreenCanvasSupported : !_util.isNodeJS, Y = Number.isInteger(k.canvasMaxAreaInBytes) ? k.canvasMaxAreaInBytes : -1, X = typeof k.disableFontFace == "boolean" ? k.disableFontFace : _util.isNodeJS, tt = k.fontExtraProperties === !0, nt = k.enableXfa === !0, lt = k.ownerDocument || globalThis.document, ht = k.disableRange === !0, gt = k.disableStream === !0, St = k.disableAutoFetch === !0, ft = k.pdfBug === !0, bt = u ? u.length : (te = k.length) != null ? te : NaN, wt = typeof k.useSystemFonts == "boolean" ? k.useSystemFonts : !_util.isNodeJS && !X, yt = typeof k.useWorkerFetch == "boolean" ? k.useWorkerFetch : N === _display_utils.DOMCMapReaderFactory && I === _display_utils.DOMStandardFontDataFactory && J && P && (0, _display_utils.isValidFetchUrl)(J, document.baseURI) && (0, _display_utils.isValidFetchUrl)(P, document.baseURI), Et = k.canvasFactory || new DefaultCanvasFactory({ ownerDocument: lt }), Ft = k.filterFactory || new DefaultFilterFactory({ docId: L, ownerDocument: lt });
      (0, _util.setVerbosityLevel)(D);
      const It = { canvasFactory: Et, filterFactory: Ft };
      if (yt || (It.cMapReaderFactory = new N({ baseUrl: J, isCompressed: z }), It.standardFontDataFactory = new I({ baseUrl: P })), !S) {
        const Gt = { verbosity: D, port: _worker_options.GlobalWorkerOptions.workerPort };
        S = Gt.port ? PDFWorker.fromPort(Gt) : new PDFWorker(Gt), d._worker = S;
      }
      const Nt = { docId: L, apiVersion: "3.11.174", data: V, password: U, disableAutoFetch: St, rangeChunkSize: v, length: bt, docBaseUrl: q, enableXfa: nt, evaluatorOptions: { maxImageSize: j, disableFontFace: X, ignoreErrors: E, isEvalSupported: $, isOffscreenCanvasSupported: H, canvasMaxAreaInBytes: Y, fontExtraProperties: tt, useSystemFonts: wt, cMapUrl: yt ? J : null, standardFontDataUrl: yt ? P : null } }, Bt = { ignoreErrors: E, isEvalSupported: $, disableFontFace: X, fontExtraProperties: tt, enableXfa: nt, ownerDocument: lt, disableAutoFetch: St, pdfBug: ft, styleElement: null };
      return S.promise.then(function() {
        if (d.destroyed)
          throw new Error("Loading aborted");
        const Gt = _fetchDocument(S, Nt), ee = new Promise(function(Vt) {
          let Zt;
          u ? Zt = new _transport_stream.PDFDataTransportStream({ length: bt, initialData: u.initialData, progressiveDone: u.progressiveDone, contentDispositionFilename: u.contentDispositionFilename, disableRange: ht, disableStream: gt }, u) : V || (Zt = (($t) => _util.isNodeJS ? new _displayNode_stream.PDFNodeStream($t) : (0, _display_utils.isValidFetchUrl)($t.url) ? new _displayFetch_stream.PDFFetchStream($t) : new _displayNetwork.PDFNetworkStream($t))({ url: F, length: bt, httpHeaders: Z, withCredentials: B, rangeChunkSize: v, disableRange: ht, disableStream: gt })), Vt(Zt);
        });
        return Promise.all([Gt, ee]).then(function(Vt) {
          let [Zt, $t] = Vt;
          if (d.destroyed)
            throw new Error("Loading aborted");
          const Qt = new _message_handler.MessageHandler(L, Zt, S.port), zt = new WorkerTransport(Qt, d, $t, Bt, It);
          d._transport = zt, Qt.send("Ready", null);
        });
      }).catch(d._capability.reject), d;
    }
    async function _fetchDocument(k, d) {
      if (k.destroyed)
        throw new Error("Worker was destroyed");
      const L = await k.messageHandler.sendWithPromise("GetDocRequest", d, d.data ? [d.data.buffer] : null);
      if (k.destroyed)
        throw new Error("Worker was destroyed");
      return L;
    }
    function getUrlProp(k) {
      if (k instanceof URL)
        return k.href;
      try {
        return new URL(k, window.location).href;
      } catch {
        if (_util.isNodeJS && typeof k == "string")
          return k;
      }
      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
    }
    function getDataProp(k) {
      if (_util.isNodeJS && typeof Buffer < "u" && k instanceof Buffer)
        throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
      if (k instanceof Uint8Array && k.byteLength === k.buffer.byteLength)
        return k;
      if (typeof k == "string")
        return (0, _util.stringToBytes)(k);
      if (typeof k == "object" && !isNaN(k == null ? void 0 : k.length) || (0, _util.isArrayBuffer)(k))
        return new Uint8Array(k);
      throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
    }
    const o = class o {
      constructor() {
        this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = "d" + fe(o, C)._++, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
      }
      get promise() {
        return this._capability.promise;
      }
      async destroy() {
        var d, L, F;
        this.destroyed = !0;
        try {
          (d = this._worker) != null && d.port && (this._worker._pendingDestroy = !0), await ((L = this._transport) == null ? void 0 : L.destroy());
        } catch (V) {
          throw (F = this._worker) != null && F.port && delete this._worker._pendingDestroy, V;
        }
        this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
      }
    };
    C = new WeakMap(), K(o, C, 0);
    let PDFDocumentLoadingTask = o;
    exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
    class PDFDataRangeTransport {
      constructor(d, L) {
        let F = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], V = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        this.length = d, this.initialData = L, this.progressiveDone = F, this.contentDispositionFilename = V, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
      }
      addRangeListener(d) {
        this._rangeListeners.push(d);
      }
      addProgressListener(d) {
        this._progressListeners.push(d);
      }
      addProgressiveReadListener(d) {
        this._progressiveReadListeners.push(d);
      }
      addProgressiveDoneListener(d) {
        this._progressiveDoneListeners.push(d);
      }
      onDataRange(d, L) {
        for (const F of this._rangeListeners)
          F(d, L);
      }
      onDataProgress(d, L) {
        this._readyCapability.promise.then(() => {
          for (const F of this._progressListeners)
            F(d, L);
        });
      }
      onDataProgressiveRead(d) {
        this._readyCapability.promise.then(() => {
          for (const L of this._progressiveReadListeners)
            L(d);
        });
      }
      onDataProgressiveDone() {
        this._readyCapability.promise.then(() => {
          for (const d of this._progressiveDoneListeners)
            d();
        });
      }
      transportReady() {
        this._readyCapability.resolve();
      }
      requestDataRange(d, L) {
        (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
      }
      abort() {
      }
    }
    exports.PDFDataRangeTransport = PDFDataRangeTransport;
    class PDFDocumentProxy {
      constructor(d, L) {
        this._pdfInfo = d, this._transport = L, Object.defineProperty(this, "getJavaScript", { value: () => ((0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead."), this.getJSActions().then((F) => {
          if (!F)
            return F;
          const V = [];
          for (const Z in F)
            V.push(...F[Z]);
          return V;
        })) });
      }
      get annotationStorage() {
        return this._transport.annotationStorage;
      }
      get filterFactory() {
        return this._transport.filterFactory;
      }
      get numPages() {
        return this._pdfInfo.numPages;
      }
      get fingerprints() {
        return this._pdfInfo.fingerprints;
      }
      get isPureXfa() {
        return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
      }
      get allXfaHtml() {
        return this._transport._htmlForXfa;
      }
      getPage(d) {
        return this._transport.getPage(d);
      }
      getPageIndex(d) {
        return this._transport.getPageIndex(d);
      }
      getDestinations() {
        return this._transport.getDestinations();
      }
      getDestination(d) {
        return this._transport.getDestination(d);
      }
      getPageLabels() {
        return this._transport.getPageLabels();
      }
      getPageLayout() {
        return this._transport.getPageLayout();
      }
      getPageMode() {
        return this._transport.getPageMode();
      }
      getViewerPreferences() {
        return this._transport.getViewerPreferences();
      }
      getOpenAction() {
        return this._transport.getOpenAction();
      }
      getAttachments() {
        return this._transport.getAttachments();
      }
      getJSActions() {
        return this._transport.getDocJSActions();
      }
      getOutline() {
        return this._transport.getOutline();
      }
      getOptionalContentConfig() {
        return this._transport.getOptionalContentConfig();
      }
      getPermissions() {
        return this._transport.getPermissions();
      }
      getMetadata() {
        return this._transport.getMetadata();
      }
      getMarkInfo() {
        return this._transport.getMarkInfo();
      }
      getData() {
        return this._transport.getData();
      }
      saveDocument() {
        return this._transport.saveDocument();
      }
      getDownloadInfo() {
        return this._transport.downloadInfoCapability.promise;
      }
      cleanup() {
        let d = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        return this._transport.startCleanup(d || this.isPureXfa);
      }
      destroy() {
        return this.loadingTask.destroy();
      }
      get loadingParams() {
        return this._transport.loadingParams;
      }
      get loadingTask() {
        return this._transport.loadingTask;
      }
      getFieldObjects() {
        return this._transport.getFieldObjects();
      }
      hasJSActions() {
        return this._transport.hasJSActions();
      }
      getCalculationOrderIds() {
        return this._transport.getCalculationOrderIds();
      }
    }
    exports.PDFDocumentProxy = PDFDocumentProxy;
    class PDFPageProxy {
      constructor(d, L, F) {
        K(this, r);
        K(this, m);
        K(this, t, null);
        K(this, e, !1);
        let V = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
        this._pageIndex = d, this._pageInfo = L, this._transport = F, this._stats = V ? new _display_utils.StatTimer() : null, this._pdfBug = V, this.commonObjs = F.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
      }
      get pageNumber() {
        return this._pageIndex + 1;
      }
      get rotate() {
        return this._pageInfo.rotate;
      }
      get ref() {
        return this._pageInfo.ref;
      }
      get userUnit() {
        return this._pageInfo.userUnit;
      }
      get view() {
        return this._pageInfo.view;
      }
      getViewport() {
        let { scale: d, rotation: L = this.rotate, offsetX: F = 0, offsetY: V = 0, dontFlip: Z = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return new _display_utils.PageViewport({ viewBox: this.view, scale: d, rotation: L, offsetX: F, offsetY: V, dontFlip: Z });
      }
      getAnnotations() {
        let { intent: d = "display" } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const L = this._transport.getRenderingIntent(d);
        return this._transport.getAnnotations(this._pageIndex, L.renderingIntent);
      }
      getJSActions() {
        return this._transport.getPageJSActions(this._pageIndex);
      }
      get filterFactory() {
        return this._transport.filterFactory;
      }
      get isPureXfa() {
        return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
      }
      async getXfa() {
        var d;
        return ((d = this._transport._htmlForXfa) == null ? void 0 : d.children[this._pageIndex]) || null;
      }
      render(d) {
        var E, j;
        let { canvasContext: L, viewport: F, intent: V = "display", annotationMode: Z = _util.AnnotationMode.ENABLE, transform: B = null, background: U = null, optionalContentConfigPromise: u = null, annotationCanvasMap: v = null, pageColors: S = null, printAnnotationStorage: D = null } = d;
        (E = this._stats) == null || E.time("Overall");
        const q = this._transport.getRenderingIntent(V, Z, D);
        at(this, e, !1), rt(this, m, Se).call(this), u || (u = this._transport.getOptionalContentConfig());
        let J = this._intentStates.get(q.cacheKey);
        J || (J = /* @__PURE__ */ Object.create(null), this._intentStates.set(q.cacheKey, J)), J.streamReaderCancelTimeout && (clearTimeout(J.streamReaderCancelTimeout), J.streamReaderCancelTimeout = null);
        const z = !!(q.renderingIntent & _util.RenderingIntentFlag.PRINT);
        J.displayReadyCapability || (J.displayReadyCapability = new _util.PromiseCapability(), J.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (j = this._stats) == null || j.time("Page Request"), this._pumpOperatorList(q));
        const N = ($) => {
          var H, Y;
          J.renderTasks.delete(P), (this._maybeCleanupAfterRender || z) && at(this, e, !0), rt(this, r, ce).call(this, !z), $ ? (P.capability.reject($), this._abortOperatorList({ intentState: J, reason: $ instanceof Error ? $ : new Error($) })) : P.capability.resolve(), (H = this._stats) == null || H.timeEnd("Rendering"), (Y = this._stats) == null || Y.timeEnd("Overall");
        }, P = new InternalRenderTask({ callback: N, params: { canvasContext: L, viewport: F, transform: B, background: U }, objs: this.objs, commonObjs: this.commonObjs, annotationCanvasMap: v, operatorList: J.operatorList, pageIndex: this._pageIndex, canvasFactory: this._transport.canvasFactory, filterFactory: this._transport.filterFactory, useRequestAnimationFrame: !z, pdfBug: this._pdfBug, pageColors: S });
        (J.renderTasks || (J.renderTasks = /* @__PURE__ */ new Set())).add(P);
        const I = P.task;
        return Promise.all([J.displayReadyCapability.promise, u]).then(($) => {
          var X;
          let [H, Y] = $;
          this.destroyed ? N() : ((X = this._stats) == null || X.time("Rendering"), P.initializeGraphics({ transparency: H, optionalContentConfig: Y }), P.operatorListChanged());
        }).catch(N), I;
      }
      getOperatorList() {
        var U;
        let { intent: d = "display", annotationMode: L = _util.AnnotationMode.ENABLE, printAnnotationStorage: F = null } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const V = this._transport.getRenderingIntent(d, L, F, !0);
        let Z, B = this._intentStates.get(V.cacheKey);
        return B || (B = /* @__PURE__ */ Object.create(null), this._intentStates.set(V.cacheKey, B)), B.opListReadCapability || (Z = /* @__PURE__ */ Object.create(null), Z.operatorListChanged = function() {
          B.operatorList.lastChunk && (B.opListReadCapability.resolve(B.operatorList), B.renderTasks.delete(Z));
        }, B.opListReadCapability = new _util.PromiseCapability(), (B.renderTasks || (B.renderTasks = /* @__PURE__ */ new Set())).add(Z), B.operatorList = { fnArray: [], argsArray: [], lastChunk: !1, separateAnnots: null }, (U = this._stats) == null || U.time("Page Request"), this._pumpOperatorList(V)), B.opListReadCapability.promise;
      }
      streamTextContent() {
        let { includeMarkedContent: d = !1, disableNormalization: L = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return this._transport.messageHandler.sendWithStream("GetTextContent", { pageIndex: this._pageIndex, includeMarkedContent: d === !0, disableNormalization: L === !0 }, { highWaterMark: 100, size: (F) => F.items.length });
      }
      getTextContent() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (this._transport._htmlForXfa)
          return this.getXfa().then((F) => _xfa_text.XfaText.textContent(F));
        const L = this.streamTextContent(d);
        return new Promise(function(F, V) {
          const Z = L.getReader(), B = { items: [], styles: /* @__PURE__ */ Object.create(null) };
          (function U() {
            Z.read().then(function(u) {
              let { value: v, done: S } = u;
              S ? F(B) : (Object.assign(B.styles, v.styles), B.items.push(...v.items), U());
            }, V);
          })();
        });
      }
      getStructTree() {
        return this._transport.getStructTree(this._pageIndex);
      }
      _destroy() {
        this.destroyed = !0;
        const d = [];
        for (const L of this._intentStates.values())
          if (this._abortOperatorList({ intentState: L, reason: new Error("Page was destroyed."), force: !0 }), !L.opListReadCapability)
            for (const F of L.renderTasks)
              d.push(F.completed), F.cancel();
        return this.objs.clear(), at(this, e, !1), rt(this, m, Se).call(this), Promise.all(d);
      }
      cleanup() {
        let d = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        at(this, e, !0);
        const L = rt(this, r, ce).call(this, !1);
        return d && L && this._stats && (this._stats = new _display_utils.StatTimer()), L;
      }
      _startRenderPage(d, L) {
        var V, Z;
        const F = this._intentStates.get(L);
        F && ((V = this._stats) == null || V.timeEnd("Page Request"), (Z = F.displayReadyCapability) == null || Z.resolve(d));
      }
      _renderPageChunk(d, L) {
        for (let F = 0, V = d.length; F < V; F++)
          L.operatorList.fnArray.push(d.fnArray[F]), L.operatorList.argsArray.push(d.argsArray[F]);
        L.operatorList.lastChunk = d.lastChunk, L.operatorList.separateAnnots = d.separateAnnots;
        for (const F of L.renderTasks)
          F.operatorListChanged();
        d.lastChunk && rt(this, r, ce).call(this, !0);
      }
      _pumpOperatorList(d) {
        let { renderingIntent: L, cacheKey: F, annotationStorageSerializable: V } = d;
        const { map: Z, transfers: B } = V, U = this._transport.messageHandler.sendWithStream("GetOperatorList", { pageIndex: this._pageIndex, intent: L, cacheKey: F, annotationStorage: Z }, B).getReader(), u = this._intentStates.get(F);
        u.streamReader = U;
        const v = () => {
          U.read().then((S) => {
            let { value: D, done: q } = S;
            q ? u.streamReader = null : this._transport.destroyed || (this._renderPageChunk(D, u), v());
          }, (S) => {
            if (u.streamReader = null, !this._transport.destroyed) {
              if (u.operatorList) {
                u.operatorList.lastChunk = !0;
                for (const D of u.renderTasks)
                  D.operatorListChanged();
                rt(this, r, ce).call(this, !0);
              }
              if (u.displayReadyCapability)
                u.displayReadyCapability.reject(S);
              else {
                if (!u.opListReadCapability)
                  throw S;
                u.opListReadCapability.reject(S);
              }
            }
          });
        };
        v();
      }
      _abortOperatorList(d) {
        let { intentState: L, reason: F, force: V = !1 } = d;
        if (L.streamReader) {
          if (L.streamReaderCancelTimeout && (clearTimeout(L.streamReaderCancelTimeout), L.streamReaderCancelTimeout = null), !V) {
            if (L.renderTasks.size > 0)
              return;
            if (F instanceof _display_utils.RenderingCancelledException) {
              let Z = RENDERING_CANCELLED_TIMEOUT;
              F.extraDelay > 0 && F.extraDelay < 1e3 && (Z += F.extraDelay), L.streamReaderCancelTimeout = setTimeout(() => {
                L.streamReaderCancelTimeout = null, this._abortOperatorList({ intentState: L, reason: F, force: !0 });
              }, Z);
              return;
            }
          }
          if (L.streamReader.cancel(new _util.AbortException(F.message)).catch(() => {
          }), L.streamReader = null, !this._transport.destroyed) {
            for (const [Z, B] of this._intentStates)
              if (B === L) {
                this._intentStates.delete(Z);
                break;
              }
            this.cleanup();
          }
        }
      }
      get stats() {
        return this._stats;
      }
    }
    t = new WeakMap(), e = new WeakMap(), r = new WeakSet(), ce = function() {
      let d = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      if (rt(this, m, Se).call(this), !s(this, e) || this.destroyed)
        return !1;
      if (d)
        return at(this, t, setTimeout(() => {
          at(this, t, null), rt(this, r, ce).call(this, !1);
        }, DELAYED_CLEANUP_TIMEOUT)), !1;
      for (const { renderTasks: L, operatorList: F } of this._intentStates.values())
        if (L.size > 0 || !F.lastChunk)
          return !1;
      return this._intentStates.clear(), this.objs.clear(), at(this, e, !1), !0;
    }, m = new WeakSet(), Se = function() {
      s(this, t) && (clearTimeout(s(this, t)), at(this, t, null));
    }, exports.PDFPageProxy = PDFPageProxy;
    class LoopbackPort {
      constructor() {
        K(this, h, /* @__PURE__ */ new Set());
        K(this, a, Promise.resolve());
      }
      postMessage(d, L) {
        const F = { data: structuredClone(d, null) };
        s(this, a).then(() => {
          for (const V of s(this, h))
            V.call(this, F);
        });
      }
      addEventListener(d, L) {
        s(this, h).add(L);
      }
      removeEventListener(d, L) {
        s(this, h).delete(L);
      }
      terminate() {
        s(this, h).clear();
      }
    }
    h = new WeakMap(), a = new WeakMap(), exports.LoopbackPort = LoopbackPort;
    const PDFWorkerUtil = { isWorkerDisabled: !1, fallbackWorkerSrc: null, fakeWorkerId: 0 };
    if (exports.PDFWorkerUtil = PDFWorkerUtil, _util.isNodeJS && typeof require == "function")
      PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
    else if (typeof document == "object") {
      const k = (f = document == null ? void 0 : document.currentScript) == null ? void 0 : f.src;
      k && (PDFWorkerUtil.fallbackWorkerSrc = k.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
    }
    PDFWorkerUtil.isSameOrigin = function(k, d) {
      let L;
      try {
        if (L = new URL(k), !L.origin || L.origin === "null")
          return !1;
      } catch {
        return !1;
      }
      const F = new URL(d, L);
      return L.origin === F.origin;
    }, PDFWorkerUtil.createCDNWrapper = function(k) {
      const d = `importScripts("${k}");`;
      return URL.createObjectURL(new Blob([d]));
    };
    const _PDFWorker = class _PDFWorker {
      constructor() {
        var F;
        let { name: k = null, port: d = null, verbosity: L = (0, _util.getVerbosityLevel)() } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (this.name = k, this.destroyed = !1, this.verbosity = L, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, d) {
          if ((F = s(_PDFWorker, g)) != null && F.has(d))
            throw new Error("Cannot use more than one PDFWorker per port.");
          (s(_PDFWorker, g) || at(_PDFWorker, g, /* @__PURE__ */ new WeakMap())).set(d, this), this._initializeFromPort(d);
        } else
          this._initialize();
      }
      get promise() {
        return this._readyCapability.promise;
      }
      get port() {
        return this._port;
      }
      get messageHandler() {
        return this._messageHandler;
      }
      _initializeFromPort(k) {
        this._port = k, this._messageHandler = new _message_handler.MessageHandler("main", "worker", k), this._messageHandler.on("ready", function() {
        }), this._readyCapability.resolve(), this._messageHandler.send("configure", { verbosity: this.verbosity });
      }
      _initialize() {
        if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
          let { workerSrc: k } = _PDFWorker;
          try {
            PDFWorkerUtil.isSameOrigin(window.location.href, k) || (k = PDFWorkerUtil.createCDNWrapper(new URL(k, window.location).href));
            const d = new Worker(k), L = new _message_handler.MessageHandler("main", "worker", d), F = () => {
              d.removeEventListener("error", V), L.destroy(), d.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
            }, V = () => {
              this._webWorker || F();
            };
            d.addEventListener("error", V), L.on("test", (B) => {
              d.removeEventListener("error", V), this.destroyed ? F() : B ? (this._messageHandler = L, this._port = d, this._webWorker = d, this._readyCapability.resolve(), L.send("configure", { verbosity: this.verbosity })) : (this._setupFakeWorker(), L.destroy(), d.terminate());
            }), L.on("ready", (B) => {
              if (d.removeEventListener("error", V), this.destroyed)
                F();
              else
                try {
                  Z();
                } catch {
                  this._setupFakeWorker();
                }
            });
            const Z = () => {
              const B = new Uint8Array();
              L.send("test", B, [B.buffer]);
            };
            Z();
            return;
          } catch {
            (0, _util.info)("The worker has been disabled.");
          }
        }
        this._setupFakeWorker();
      }
      _setupFakeWorker() {
        PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((k) => {
          if (this.destroyed) {
            this._readyCapability.reject(new Error("Worker was destroyed"));
            return;
          }
          const d = new LoopbackPort();
          this._port = d;
          const L = "fake" + PDFWorkerUtil.fakeWorkerId++, F = new _message_handler.MessageHandler(L + "_worker", L, d);
          k.setup(F, d);
          const V = new _message_handler.MessageHandler(L, L + "_worker", d);
          this._messageHandler = V, this._readyCapability.resolve(), V.send("configure", { verbosity: this.verbosity });
        }).catch((k) => {
          this._readyCapability.reject(new Error(`Setting up fake worker failed: "${k.message}".`));
        });
      }
      destroy() {
        var k;
        this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (k = s(_PDFWorker, g)) == null || k.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
      }
      static fromPort(k) {
        var L;
        if (!(k != null && k.port))
          throw new Error("PDFWorker.fromPort - invalid method signature.");
        const d = (L = s(this, g)) == null ? void 0 : L.get(k.port);
        if (d) {
          if (d._pendingDestroy)
            throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
          return d;
        }
        return new _PDFWorker(k);
      }
      static get workerSrc() {
        if (_worker_options.GlobalWorkerOptions.workerSrc)
          return _worker_options.GlobalWorkerOptions.workerSrc;
        if (PDFWorkerUtil.fallbackWorkerSrc !== null)
          return _util.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
        throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
      }
      static get _mainThreadWorkerMessageHandler() {
        var k;
        try {
          return ((k = globalThis.pdfjsWorker) == null ? void 0 : k.WorkerMessageHandler) || null;
        } catch {
          return null;
        }
      }
      static get _setupFakeWorkerGlobal() {
        const loader = async () => {
          const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
          if (mainWorkerMessageHandler)
            return mainWorkerMessageHandler;
          if (_util.isNodeJS && typeof require == "function") {
            const worker = eval("require")(this.workerSrc);
            return worker.WorkerMessageHandler;
          }
          return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
        };
        return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
      }
    };
    g = new WeakMap(), K(_PDFWorker, g, void 0);
    let PDFWorker = _PDFWorker;
    exports.PDFWorker = PDFWorker;
    class WorkerTransport {
      constructor(d, L, F, V, Z) {
        K(this, O);
        K(this, x, /* @__PURE__ */ new Map());
        K(this, b, /* @__PURE__ */ new Map());
        K(this, _, /* @__PURE__ */ new Map());
        K(this, M, null);
        this.messageHandler = d, this.loadingTask = L, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({ ownerDocument: V.ownerDocument, styleElement: V.styleElement }), this._params = V, this.canvasFactory = Z.canvasFactory, this.filterFactory = Z.filterFactory, this.cMapReaderFactory = Z.cMapReaderFactory, this.standardFontDataFactory = Z.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = F, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
      }
      get annotationStorage() {
        return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
      }
      getRenderingIntent(d) {
        let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _util.AnnotationMode.ENABLE, F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, V = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], Z = _util.RenderingIntentFlag.DISPLAY, B = _annotation_storage.SerializableEmpty;
        switch (d) {
          case "any":
            Z = _util.RenderingIntentFlag.ANY;
            break;
          case "display":
            break;
          case "print":
            Z = _util.RenderingIntentFlag.PRINT;
            break;
          default:
            (0, _util.warn)(`getRenderingIntent - invalid intent: ${d}`);
        }
        switch (L) {
          case _util.AnnotationMode.DISABLE:
            Z += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
            break;
          case _util.AnnotationMode.ENABLE:
            break;
          case _util.AnnotationMode.ENABLE_FORMS:
            Z += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
            break;
          case _util.AnnotationMode.ENABLE_STORAGE:
            Z += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, B = (Z & _util.RenderingIntentFlag.PRINT && F instanceof _annotation_storage.PrintAnnotationStorage ? F : this.annotationStorage).serializable;
            break;
          default:
            (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${L}`);
        }
        return V && (Z += _util.RenderingIntentFlag.OPLIST), { renderingIntent: Z, cacheKey: `${Z}_${B.hash}`, annotationStorageSerializable: B };
      }
      destroy() {
        var F;
        if (this.destroyCapability)
          return this.destroyCapability.promise;
        this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), (F = s(this, M)) == null || F.reject(new Error("Worker was destroyed during onPassword callback"));
        const d = [];
        for (const V of s(this, b).values())
          d.push(V._destroy());
        s(this, b).clear(), s(this, _).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
        const L = this.messageHandler.sendWithPromise("Terminate", null);
        return d.push(L), Promise.all(d).then(() => {
          var V;
          this.commonObjs.clear(), this.fontLoader.clear(), s(this, x).clear(), this.filterFactory.destroy(), (V = this._networkStream) == null || V.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
        }, this.destroyCapability.reject), this.destroyCapability.promise;
      }
      setupMessageHandler() {
        const { messageHandler: d, loadingTask: L } = this;
        d.on("GetReader", (F, V) => {
          (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (Z) => {
            this._lastProgress = { loaded: Z.loaded, total: Z.total };
          }, V.onPull = () => {
            this._fullReader.read().then(function(Z) {
              let { value: B, done: U } = Z;
              U ? V.close() : ((0, _util.assert)(B instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), V.enqueue(new Uint8Array(B), 1, [B]));
            }).catch((Z) => {
              V.error(Z);
            });
          }, V.onCancel = (Z) => {
            this._fullReader.cancel(Z), V.ready.catch((B) => {
              if (!this.destroyed)
                throw B;
            });
          };
        }), d.on("ReaderHeadersReady", (F) => {
          const V = new _util.PromiseCapability(), Z = this._fullReader;
          return Z.headersReady.then(() => {
            var B;
            (!Z.isStreamingSupported || !Z.isRangeSupported) && (this._lastProgress && ((B = L.onProgress) == null || B.call(L, this._lastProgress)), Z.onProgress = (U) => {
              var u;
              (u = L.onProgress) == null || u.call(L, { loaded: U.loaded, total: U.total });
            }), V.resolve({ isStreamingSupported: Z.isStreamingSupported, isRangeSupported: Z.isRangeSupported, contentLength: Z.contentLength });
          }, V.reject), V.promise;
        }), d.on("GetRangeReader", (F, V) => {
          (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
          const Z = this._networkStream.getRangeReader(F.begin, F.end);
          Z ? (V.onPull = () => {
            Z.read().then(function(B) {
              let { value: U, done: u } = B;
              u ? V.close() : ((0, _util.assert)(U instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), V.enqueue(new Uint8Array(U), 1, [U]));
            }).catch((B) => {
              V.error(B);
            });
          }, V.onCancel = (B) => {
            Z.cancel(B), V.ready.catch((U) => {
              if (!this.destroyed)
                throw U;
            });
          }) : V.close();
        }), d.on("GetDoc", (F) => {
          let { pdfInfo: V } = F;
          this._numPages = V.numPages, this._htmlForXfa = V.htmlForXfa, delete V.htmlForXfa, L._capability.resolve(new PDFDocumentProxy(V, this));
        }), d.on("DocException", function(F) {
          let V;
          switch (F.name) {
            case "PasswordException":
              V = new _util.PasswordException(F.message, F.code);
              break;
            case "InvalidPDFException":
              V = new _util.InvalidPDFException(F.message);
              break;
            case "MissingPDFException":
              V = new _util.MissingPDFException(F.message);
              break;
            case "UnexpectedResponseException":
              V = new _util.UnexpectedResponseException(F.message, F.status);
              break;
            case "UnknownErrorException":
              V = new _util.UnknownErrorException(F.message, F.details);
              break;
            default:
              (0, _util.unreachable)("DocException - expected a valid Error.");
          }
          L._capability.reject(V);
        }), d.on("PasswordRequest", (F) => {
          if (at(this, M, new _util.PromiseCapability()), L.onPassword) {
            const V = (Z) => {
              Z instanceof Error ? s(this, M).reject(Z) : s(this, M).resolve({ password: Z });
            };
            try {
              L.onPassword(V, F.code);
            } catch (Z) {
              s(this, M).reject(Z);
            }
          } else
            s(this, M).reject(new _util.PasswordException(F.message, F.code));
          return s(this, M).promise;
        }), d.on("DataLoaded", (F) => {
          var V;
          (V = L.onProgress) == null || V.call(L, { loaded: F.length, total: F.length }), this.downloadInfoCapability.resolve(F);
        }), d.on("StartRenderPage", (F) => {
          this.destroyed || s(this, b).get(F.pageIndex)._startRenderPage(F.transparency, F.cacheKey);
        }), d.on("commonobj", (F) => {
          var U;
          let [V, Z, B] = F;
          if (!this.destroyed && !this.commonObjs.has(V))
            switch (Z) {
              case "Font":
                const u = this._params;
                if ("error" in B) {
                  const D = B.error;
                  (0, _util.warn)(`Error during font loading: ${D}`), this.commonObjs.resolve(V, D);
                  break;
                }
                const v = u.pdfBug && ((U = globalThis.FontInspector) != null && U.enabled) ? (D, q) => globalThis.FontInspector.fontAdded(D, q) : null, S = new _font_loader.FontFaceObject(B, { isEvalSupported: u.isEvalSupported, disableFontFace: u.disableFontFace, ignoreErrors: u.ignoreErrors, inspectFont: v });
                this.fontLoader.bind(S).catch((D) => d.sendWithPromise("FontFallback", { id: V })).finally(() => {
                  !u.fontExtraProperties && S.data && (S.data = null), this.commonObjs.resolve(V, S);
                });
                break;
              case "FontPath":
              case "Image":
              case "Pattern":
                this.commonObjs.resolve(V, B);
                break;
              default:
                throw new Error(`Got unknown common object type ${Z}`);
            }
        }), d.on("obj", (F) => {
          var v;
          let [V, Z, B, U] = F;
          if (this.destroyed)
            return;
          const u = s(this, b).get(Z);
          if (!u.objs.has(V))
            switch (B) {
              case "Image":
                if (u.objs.resolve(V, U), U) {
                  let S;
                  if (U.bitmap) {
                    const { width: D, height: q } = U;
                    S = D * q * 4;
                  } else
                    S = ((v = U.data) == null ? void 0 : v.length) || 0;
                  S > _util.MAX_IMAGE_SIZE_TO_CACHE && (u._maybeCleanupAfterRender = !0);
                }
                break;
              case "Pattern":
                u.objs.resolve(V, U);
                break;
              default:
                throw new Error(`Got unknown object type ${B}`);
            }
        }), d.on("DocProgress", (F) => {
          var V;
          this.destroyed || ((V = L.onProgress) == null || V.call(L, { loaded: F.loaded, total: F.total }));
        }), d.on("FetchBuiltInCMap", (F) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(F) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), d.on("FetchStandardFontData", (F) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(F) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
      }
      getData() {
        return this.messageHandler.sendWithPromise("GetData", null);
      }
      saveDocument() {
        var F, V;
        this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
        const { map: d, transfers: L } = this.annotationStorage.serializable;
        return this.messageHandler.sendWithPromise("SaveDocument", { isPureXfa: !!this._htmlForXfa, numPages: this._numPages, annotationStorage: d, filename: (V = (F = this._fullReader) == null ? void 0 : F.filename) != null ? V : null }, L).finally(() => {
          this.annotationStorage.resetModified();
        });
      }
      getPage(d) {
        if (!Number.isInteger(d) || d <= 0 || d > this._numPages)
          return Promise.reject(new Error("Invalid page request."));
        const L = d - 1, F = s(this, _).get(L);
        if (F)
          return F;
        const V = this.messageHandler.sendWithPromise("GetPage", { pageIndex: L }).then((Z) => {
          if (this.destroyed)
            throw new Error("Transport destroyed");
          const B = new PDFPageProxy(L, Z, this, this._params.pdfBug);
          return s(this, b).set(L, B), B;
        });
        return s(this, _).set(L, V), V;
      }
      getPageIndex(d) {
        return typeof d != "object" || d === null || !Number.isInteger(d.num) || d.num < 0 || !Number.isInteger(d.gen) || d.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", { num: d.num, gen: d.gen });
      }
      getAnnotations(d, L) {
        return this.messageHandler.sendWithPromise("GetAnnotations", { pageIndex: d, intent: L });
      }
      getFieldObjects() {
        return rt(this, O, xe).call(this, "GetFieldObjects");
      }
      hasJSActions() {
        return rt(this, O, xe).call(this, "HasJSActions");
      }
      getCalculationOrderIds() {
        return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
      }
      getDestinations() {
        return this.messageHandler.sendWithPromise("GetDestinations", null);
      }
      getDestination(d) {
        return typeof d != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", { id: d });
      }
      getPageLabels() {
        return this.messageHandler.sendWithPromise("GetPageLabels", null);
      }
      getPageLayout() {
        return this.messageHandler.sendWithPromise("GetPageLayout", null);
      }
      getPageMode() {
        return this.messageHandler.sendWithPromise("GetPageMode", null);
      }
      getViewerPreferences() {
        return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
      }
      getOpenAction() {
        return this.messageHandler.sendWithPromise("GetOpenAction", null);
      }
      getAttachments() {
        return this.messageHandler.sendWithPromise("GetAttachments", null);
      }
      getDocJSActions() {
        return rt(this, O, xe).call(this, "GetDocJSActions");
      }
      getPageJSActions(d) {
        return this.messageHandler.sendWithPromise("GetPageJSActions", { pageIndex: d });
      }
      getStructTree(d) {
        return this.messageHandler.sendWithPromise("GetStructTree", { pageIndex: d });
      }
      getOutline() {
        return this.messageHandler.sendWithPromise("GetOutline", null);
      }
      getOptionalContentConfig() {
        return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((d) => new _optional_content_config.OptionalContentConfig(d));
      }
      getPermissions() {
        return this.messageHandler.sendWithPromise("GetPermissions", null);
      }
      getMetadata() {
        const d = "GetMetadata", L = s(this, x).get(d);
        if (L)
          return L;
        const F = this.messageHandler.sendWithPromise(d, null).then((V) => {
          var Z, B, U, u;
          return { info: V[0], metadata: V[1] ? new _metadata.Metadata(V[1]) : null, contentDispositionFilename: (B = (Z = this._fullReader) == null ? void 0 : Z.filename) != null ? B : null, contentLength: (u = (U = this._fullReader) == null ? void 0 : U.contentLength) != null ? u : null };
        });
        return s(this, x).set(d, F), F;
      }
      getMarkInfo() {
        return this.messageHandler.sendWithPromise("GetMarkInfo", null);
      }
      async startCleanup() {
        let d = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (!this.destroyed) {
          await this.messageHandler.sendWithPromise("Cleanup", null);
          for (const L of s(this, b).values())
            if (!L.cleanup())
              throw new Error(`startCleanup: Page ${L.pageNumber} is currently rendering.`);
          this.commonObjs.clear(), d || this.fontLoader.clear(), s(this, x).clear(), this.filterFactory.destroy(!0);
        }
      }
      get loadingParams() {
        const { disableAutoFetch: d, enableXfa: L } = this._params;
        return (0, _util.shadow)(this, "loadingParams", { disableAutoFetch: d, enableXfa: L });
      }
    }
    x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakMap(), O = new WeakSet(), xe = function(d) {
      let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      const F = s(this, x).get(d);
      if (F)
        return F;
      const V = this.messageHandler.sendWithPromise(d, L);
      return s(this, x).set(d, V), V;
    };
    class PDFObjects {
      constructor() {
        K(this, n);
        K(this, w, /* @__PURE__ */ Object.create(null));
      }
      get(d) {
        let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (L) {
          const V = rt(this, n, Ne).call(this, d);
          return V.capability.promise.then(() => L(V.data)), null;
        }
        const F = s(this, w)[d];
        if (!(F != null && F.capability.settled))
          throw new Error(`Requesting object that isn't resolved yet ${d}.`);
        return F.data;
      }
      has(d) {
        const L = s(this, w)[d];
        return (L == null ? void 0 : L.capability.settled) || !1;
      }
      resolve(d) {
        let L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const F = rt(this, n, Ne).call(this, d);
        F.data = L, F.capability.resolve();
      }
      clear() {
        var d;
        for (const L in s(this, w)) {
          const { data: F } = s(this, w)[L];
          (d = F == null ? void 0 : F.bitmap) == null || d.close();
        }
        at(this, w, /* @__PURE__ */ Object.create(null));
      }
    }
    w = new WeakMap(), n = new WeakSet(), Ne = function(d) {
      var L;
      return (L = s(this, w))[d] || (L[d] = { capability: new _util.PromiseCapability(), data: null });
    };
    class RenderTask {
      constructor(d) {
        K(this, p, null);
        at(this, p, d), this.onContinue = null;
      }
      get promise() {
        return s(this, p).capability.promise;
      }
      cancel() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        s(this, p).cancel(null, d);
      }
      get separateAnnots() {
        const { separateAnnots: d } = s(this, p).operatorList;
        if (!d)
          return !1;
        const { annotationCanvasMap: L } = s(this, p);
        return d.form || d.canvas && (L == null ? void 0 : L.size) > 0;
      }
    }
    p = new WeakMap(), exports.RenderTask = RenderTask;
    const R = class R {
      constructor(d) {
        let { callback: L, params: F, objs: V, commonObjs: Z, annotationCanvasMap: B, operatorList: U, pageIndex: u, canvasFactory: v, filterFactory: S, useRequestAnimationFrame: D = !1, pdfBug: q = !1, pageColors: J = null } = d;
        this.callback = L, this.params = F, this.objs = V, this.commonObjs = Z, this.annotationCanvasMap = B, this.operatorListIdx = null, this.operatorList = U, this._pageIndex = u, this.canvasFactory = v, this.filterFactory = S, this._pdfBug = q, this.pageColors = J, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = D === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = F.canvasContext.canvas;
      }
      get completed() {
        return this.capability.promise.catch(function() {
        });
      }
      initializeGraphics(d) {
        var u, v;
        let { transparency: L = !1, optionalContentConfig: F } = d;
        if (this.cancelled)
          return;
        if (this._canvas) {
          if (s(R, T).has(this._canvas))
            throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
          s(R, T).add(this._canvas);
        }
        this._pdfBug && ((u = globalThis.StepperManager) != null && u.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
        const { canvasContext: V, viewport: Z, transform: B, background: U } = this.params;
        this.gfx = new _canvas.CanvasGraphics(V, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: F }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({ transform: B, viewport: Z, transparency: L, background: U }), this.operatorListIdx = 0, this.graphicsReady = !0, (v = this.graphicsReadyCallback) == null || v.call(this);
      }
      cancel() {
        var F;
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        this.running = !1, this.cancelled = !0, (F = this.gfx) == null || F.endDrawing(), s(R, T).delete(this._canvas), this.callback(d || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, L));
      }
      operatorListChanged() {
        var d;
        this.graphicsReady ? ((d = this.stepper) == null || d.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      }
      _continue() {
        this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
      }
      _scheduleNext() {
        this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
          this._nextBound().catch(this._cancelBound);
        }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
      }
      async _next() {
        this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), s(R, T).delete(this._canvas), this.callback())));
      }
    };
    T = new WeakMap(), K(R, T, /* @__PURE__ */ new WeakSet());
    let InternalRenderTask = R;
    const version = "3.11.174";
    exports.version = version;
    const build = "ce8716743";
    exports.build = build;
  }, (C, o, t) => {
    var e = t(3), r = t(126);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("difference") }, { difference: r });
  }, (C, o, t) => {
    var e = t(127), r = t(128), l = t(129), m = t(132), y = t(133), h = t(130), a = t(131), f = r.has, g = r.remove;
    C.exports = function(b) {
      var _ = e(this), M = y(b), O = l(_);
      return m(_) <= M.size ? h(_, function(W) {
        M.includes(W) && g(O, W);
      }) : a(M.getIterator(), function(W) {
        f(_, W) && g(O, W);
      }), O;
    };
  }, (C, o, t) => {
    var e = t(128).has;
    C.exports = function(r) {
      return e(r), r;
    };
  }, (C, o, t) => {
    var e = t(14), r = Set.prototype;
    C.exports = { Set, add: e(r.add), has: e(r.has), remove: e(r.delete), proto: r };
  }, (C, o, t) => {
    var e = t(128), r = t(130), l = e.Set, m = e.add;
    C.exports = function(y) {
      var h = new l();
      return r(y, function(a) {
        m(h, a);
      }), h;
    };
  }, (C, o, t) => {
    var e = t(14), r = t(131), l = t(128), m = l.Set, y = l.proto, h = e(y.forEach), a = e(y.keys), f = a(new m()).next;
    C.exports = function(g, x, b) {
      return b ? r({ iterator: a(g), next: f }, x) : h(g, x);
    };
  }, (C, o, t) => {
    var e = t(8);
    C.exports = function(r, l, m) {
      for (var y, h, a = m ? r : r.iterator, f = r.next; !(y = e(f, a)).done; )
        if ((h = l(y.value)) !== void 0)
          return h;
    };
  }, (C, o, t) => {
    var e = t(72), r = t(128);
    C.exports = e(r.proto, "size", "get") || function(l) {
      return l.size;
    };
  }, (C, o, t) => {
    var e = t(31), r = t(47), l = t(8), m = t(62), y = t(134), h = "Invalid size", a = RangeError, f = TypeError, g = Math.max, x = function(b, _, M, O) {
      this.set = b, this.size = _, this.has = M, this.keys = O;
    };
    x.prototype = { getIterator: function() {
      return y(r(l(this.keys, this.set)));
    }, includes: function(b) {
      return l(this.has, this.set, b);
    } }, C.exports = function(b) {
      r(b);
      var _ = +b.size;
      if (_ != _)
        throw f(h);
      var M = m(_);
      if (M < 0)
        throw a(h);
      return new x(b, g(M, 0), e(b.has), e(b.keys));
    };
  }, (C) => {
    C.exports = function(o) {
      return { iterator: o, next: o.next, done: !1 };
    };
  }, (C, o, t) => {
    var e = t(24), r = function(l) {
      return { size: l, has: function() {
        return !1;
      }, keys: function() {
        return { next: function() {
          return { done: !0 };
        } };
      } };
    };
    C.exports = function(l) {
      var m = e("Set");
      try {
        new m()[l](r(0));
        try {
          return new m()[l](r(-1)), !1;
        } catch {
          return !0;
        }
      } catch {
        return !1;
      }
    };
  }, (C, o, t) => {
    var e = t(3), r = t(7), l = t(137);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("intersection") || r(function() {
      return Array.from((/* @__PURE__ */ new Set([1, 2, 3])).intersection(/* @__PURE__ */ new Set([3, 2]))) !== "3,2";
    }) }, { intersection: l });
  }, (C, o, t) => {
    var e = t(127), r = t(128), l = t(132), m = t(133), y = t(130), h = t(131), a = r.Set, f = r.add, g = r.has;
    C.exports = function(b) {
      var _ = e(this), M = m(b), O = new a();
      return l(_) > M.size ? h(M.getIterator(), function(W) {
        g(_, W) && f(O, W);
      }) : y(_, function(W) {
        M.includes(W) && f(O, W);
      }), O;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(139);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("isDisjointFrom") }, { isDisjointFrom: r });
  }, (C, o, t) => {
    var e = t(127), r = t(128).has, l = t(132), m = t(133), y = t(130), h = t(131), a = t(140);
    C.exports = function(g) {
      var x = e(this), b = m(g);
      if (l(x) <= b.size)
        return y(x, function(M) {
          if (b.includes(M))
            return !1;
        }, !0) !== !1;
      var _ = b.getIterator();
      return h(_, function(M) {
        if (r(x, M))
          return a(_, "normal", !1);
      }) !== !1;
    };
  }, (C, o, t) => {
    var e = t(8), r = t(47), l = t(30);
    C.exports = function(m, y, h) {
      var a, f;
      r(m);
      try {
        if (!(a = l(m, "return"))) {
          if (y === "throw")
            throw h;
          return h;
        }
        a = e(a, m);
      } catch (g) {
        f = !0, a = g;
      }
      if (y === "throw")
        throw h;
      if (f)
        throw a;
      return r(a), h;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(142);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("isSubsetOf") }, { isSubsetOf: r });
  }, (C, o, t) => {
    var e = t(127), r = t(132), l = t(130), m = t(133);
    C.exports = function(h) {
      var a = e(this), f = m(h);
      return !(r(a) > f.size) && l(a, function(g) {
        if (!f.includes(g))
          return !1;
      }, !0) !== !1;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(144);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("isSupersetOf") }, { isSupersetOf: r });
  }, (C, o, t) => {
    var e = t(127), r = t(128).has, l = t(132), m = t(133), y = t(131), h = t(140);
    C.exports = function(f) {
      var g = e(this), x = m(f);
      if (l(g) < x.size)
        return !1;
      var b = x.getIterator();
      return y(b, function(_) {
        if (!r(g, _))
          return h(b, "normal", !1);
      }) !== !1;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(146);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("symmetricDifference") }, { symmetricDifference: r });
  }, (C, o, t) => {
    var e = t(127), r = t(128), l = t(129), m = t(133), y = t(131), h = r.add, a = r.has, f = r.remove;
    C.exports = function(x) {
      var b = e(this), _ = m(x).getIterator(), M = l(b);
      return y(_, function(O) {
        a(b, O) ? f(M, O) : h(M, O);
      }), M;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(148);
    e({ target: "Set", proto: !0, real: !0, forced: !t(135)("union") }, { union: r });
  }, (C, o, t) => {
    var e = t(127), r = t(128).add, l = t(129), m = t(133), y = t(131);
    C.exports = function(a) {
      var f = e(this), g = m(a).getIterator(), x = l(f);
      return y(g, function(b) {
        r(x, b);
      }), x;
    };
  }, (C, o, t) => {
    var e = t(3), r = t(4), l = t(24), m = t(11), y = t(45).f, h = t(39), a = t(150), f = t(75), g = t(76), x = t(151), b = t(82), _ = t(6), M = t(36), O = "DOMException", W = l("Error"), w = l(O), n = function() {
      a(this, i);
      var u = arguments.length, v = g(u < 1 ? void 0 : arguments[0]), S = g(u < 2 ? void 0 : arguments[1], "Error"), D = new w(v, S), q = W(v);
      return q.name = O, y(D, "stack", m(1, b(q.stack, 1))), f(D, this, n), D;
    }, i = n.prototype = w.prototype, p = "stack" in W(O), T = "stack" in new w(1, 2), R = w && _ && Object.getOwnPropertyDescriptor(r, O), k = !(!R || R.writable && R.configurable), d = p && !k && !T;
    e({ global: !0, constructor: !0, forced: M || d }, { DOMException: d ? n : w });
    var L = l(O), F = L.prototype;
    if (F.constructor !== L) {
      M || y(F, "constructor", m(1, L));
      for (var V in x)
        if (h(x, V)) {
          var Z = x[V], B = Z.s;
          h(L, B) || y(L, B, m(6, Z.c));
        }
    }
  }, (C, o, t) => {
    var e = t(25), r = TypeError;
    C.exports = function(l, m) {
      if (e(m, l))
        return l;
      throw r("Incorrect invocation");
    };
  }, (C) => {
    C.exports = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } };
  }, (C, o, t) => {
    var e, r = t(36), l = t(3), m = t(4), y = t(24), h = t(14), a = t(7), f = t(41), g = t(21), x = t(153), b = t(17), _ = t(20), M = t(23), O = t(154), W = t(47), w = t(78), n = t(39), i = t(159), p = t(44), T = t(64), R = t(85), k = t(160), d = t(162), L = t(128), F = t(83), V = t(119), Z = m.Object, B = m.Array, U = m.Date, u = m.Error, v = m.EvalError, S = m.RangeError, D = m.ReferenceError, q = m.SyntaxError, J = m.TypeError, z = m.URIError, N = m.PerformanceMark, P = m.WebAssembly, I = P && P.CompileError || u, E = P && P.LinkError || u, j = P && P.RuntimeError || u, $ = y("DOMException"), H = d.Map, Y = d.has, X = d.get, tt = d.set, nt = L.Set, lt = L.add, ht = y("Object", "keys"), gt = h([].push), St = h((!0).valueOf), ft = h(1 .valueOf), bt = h("".valueOf), wt = h(U.prototype.getTime), yt = f("structuredClone"), Et = "DataCloneError", Ft = "Transferring", It = function(dt) {
      return !a(function() {
        var pt = new m.Set([7]), Rt = dt(pt), Ut = dt(Z(7));
        return Rt === pt || !Rt.has(7) || typeof Ut != "object" || +Ut != 7;
      }) && dt;
    }, Nt = function(dt, pt) {
      return !a(function() {
        var Rt = new pt(), Ut = dt({ a: Rt, b: Rt });
        return !(Ut && Ut.a === Ut.b && Ut.a instanceof pt && Ut.a.stack === Rt.stack);
      });
    }, Bt = m.structuredClone, Kt = r || !Nt(Bt, u) || !Nt(Bt, $) || (e = Bt, !!a(function() {
      var dt = e(new m.AggregateError([1], yt, { cause: 3 }));
      return dt.name !== "AggregateError" || dt.errors[0] !== 1 || dt.message !== yt || dt.cause !== 3;
    })), te = !Bt && It(function(dt) {
      return new N(yt, { detail: dt }).detail;
    }), Gt = It(Bt) || te, ee = function(dt) {
      throw new $("Uncloneable type: " + dt, Et);
    }, Vt = function(dt, pt) {
      throw new $((pt || "Cloning") + " of " + dt + " cannot be properly polyfilled in this engine", Et);
    }, Zt = function(dt, pt) {
      return Gt || Vt(pt), Gt(dt);
    }, $t = function(dt, pt, Rt) {
      if (Y(pt, dt))
        return X(pt, dt);
      var Ut, it, ot, Ct, _t, kt;
      if ((Rt || w(dt)) === "SharedArrayBuffer")
        Ut = Gt ? Gt(dt) : dt;
      else {
        var Pt = m.DataView;
        Pt || typeof dt.slice == "function" || Vt("ArrayBuffer");
        try {
          if (typeof dt.slice != "function" || dt.resizable)
            for (it = dt.byteLength, ot = ("maxByteLength" in dt) ? { maxByteLength: dt.maxByteLength } : void 0, Ut = new ArrayBuffer(it, ot), Ct = new Pt(dt), _t = new Pt(Ut), kt = 0; kt < it; kt++)
              _t.setUint8(kt, Ct.getUint8(kt));
          else
            Ut = dt.slice(0);
        } catch {
          throw new $("ArrayBuffer is detached", Et);
        }
      }
      return tt(pt, dt, Ut), Ut;
    }, Qt = function(dt, pt, Rt, Ut, it) {
      var ot = m[pt];
      return _(ot) || Vt(pt), new ot($t(dt.buffer, it), Rt, Ut);
    }, zt = function(dt, pt, Rt) {
      this.object = dt, this.type = pt, this.metadata = Rt;
    }, Jt = function(dt, pt, Rt) {
      if (M(dt) && ee("Symbol"), !_(dt))
        return dt;
      if (pt) {
        if (Y(pt, dt))
          return X(pt, dt);
      } else
        pt = new H();
      var Ut, it, ot, Ct, _t, kt, Pt, jt, ut = w(dt);
      switch (ut) {
        case "Array":
          ot = B(T(dt));
          break;
        case "Object":
          ot = {};
          break;
        case "Map":
          ot = new H();
          break;
        case "Set":
          ot = new nt();
          break;
        case "RegExp":
          ot = new RegExp(dt.source, k(dt));
          break;
        case "Error":
          switch (it = dt.name) {
            case "AggregateError":
              ot = y("AggregateError")([]);
              break;
            case "EvalError":
              ot = v();
              break;
            case "RangeError":
              ot = S();
              break;
            case "ReferenceError":
              ot = D();
              break;
            case "SyntaxError":
              ot = q();
              break;
            case "TypeError":
              ot = J();
              break;
            case "URIError":
              ot = z();
              break;
            case "CompileError":
              ot = I();
              break;
            case "LinkError":
              ot = E();
              break;
            case "RuntimeError":
              ot = j();
              break;
            default:
              ot = u();
          }
          break;
        case "DOMException":
          ot = new $(dt.message, dt.name);
          break;
        case "ArrayBuffer":
        case "SharedArrayBuffer":
          ot = Rt ? new zt(dt, ut) : $t(dt, pt, ut);
          break;
        case "DataView":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float16Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          kt = ut === "DataView" ? dt.byteLength : dt.length, ot = Rt ? new zt(dt, ut, { offset: dt.byteOffset, length: kt }) : Qt(dt, ut, dt.byteOffset, kt, pt);
          break;
        case "DOMQuad":
          try {
            ot = new DOMQuad(Jt(dt.p1, pt, Rt), Jt(dt.p2, pt, Rt), Jt(dt.p3, pt, Rt), Jt(dt.p4, pt, Rt));
          } catch {
            ot = Zt(dt, ut);
          }
          break;
        case "File":
          if (Gt)
            try {
              ot = Gt(dt), w(ot) !== ut && (ot = void 0);
            } catch {
            }
          if (!ot)
            try {
              ot = new File([dt], dt.name, dt);
            } catch {
            }
          ot || Vt(ut);
          break;
        case "FileList":
          if (Ct = function() {
            var mt;
            try {
              mt = new m.DataTransfer();
            } catch {
              try {
                mt = new m.ClipboardEvent("").clipboardData;
              } catch {
              }
            }
            return mt && mt.items && mt.files ? mt : null;
          }()) {
            for (_t = 0, kt = T(dt); _t < kt; _t++)
              Ct.items.add(Jt(dt[_t], pt, Rt));
            ot = Ct.files;
          } else
            ot = Zt(dt, ut);
          break;
        case "ImageData":
          try {
            ot = new ImageData(Jt(dt.data, pt, Rt), dt.width, dt.height, { colorSpace: dt.colorSpace });
          } catch {
            ot = Zt(dt, ut);
          }
          break;
        default:
          if (Gt)
            ot = Gt(dt);
          else
            switch (ut) {
              case "BigInt":
                ot = Z(dt.valueOf());
                break;
              case "Boolean":
                ot = Z(St(dt));
                break;
              case "Number":
                ot = Z(ft(dt));
                break;
              case "String":
                ot = Z(bt(dt));
                break;
              case "Date":
                ot = new U(wt(dt));
                break;
              case "Blob":
                try {
                  ot = dt.slice(0, dt.size, dt.type);
                } catch {
                  Vt(ut);
                }
                break;
              case "DOMPoint":
              case "DOMPointReadOnly":
                Ut = m[ut];
                try {
                  ot = Ut.fromPoint ? Ut.fromPoint(dt) : new Ut(dt.x, dt.y, dt.z, dt.w);
                } catch {
                  Vt(ut);
                }
                break;
              case "DOMRect":
              case "DOMRectReadOnly":
                Ut = m[ut];
                try {
                  ot = Ut.fromRect ? Ut.fromRect(dt) : new Ut(dt.x, dt.y, dt.width, dt.height);
                } catch {
                  Vt(ut);
                }
                break;
              case "DOMMatrix":
              case "DOMMatrixReadOnly":
                Ut = m[ut];
                try {
                  ot = Ut.fromMatrix ? Ut.fromMatrix(dt) : new Ut(dt);
                } catch {
                  Vt(ut);
                }
                break;
              case "AudioData":
              case "VideoFrame":
                g(dt.clone) || Vt(ut);
                try {
                  ot = dt.clone();
                } catch {
                  ee(ut);
                }
                break;
              case "CropTarget":
              case "CryptoKey":
              case "FileSystemDirectoryHandle":
              case "FileSystemFileHandle":
              case "FileSystemHandle":
              case "GPUCompilationInfo":
              case "GPUCompilationMessage":
              case "ImageBitmap":
              case "RTCCertificate":
              case "WebAssembly.Module":
                Vt(ut);
              default:
                ee(ut);
            }
      }
      switch (tt(pt, dt, ot), ut) {
        case "Array":
        case "Object":
          for (Pt = ht(dt), _t = 0, kt = T(Pt); _t < kt; _t++)
            jt = Pt[_t], i(ot, jt, Jt(dt[jt], pt, Rt));
          break;
        case "Map":
          dt.forEach(function(mt, c) {
            tt(ot, Jt(c, pt, Rt), Jt(mt, pt, Rt));
          });
          break;
        case "Set":
          dt.forEach(function(mt) {
            lt(ot, Jt(mt, pt, Rt));
          });
          break;
        case "Error":
          p(ot, "message", Jt(dt.message, pt, Rt)), n(dt, "cause") && p(ot, "cause", Jt(dt.cause, pt, Rt)), it === "AggregateError" && (ot.errors = Jt(dt.errors, pt, Rt));
        case "DOMException":
          F && p(ot, "stack", Jt(dt.stack, pt, Rt));
      }
      return ot;
    }, qt = function(dt, pt) {
      if (!_(dt))
        return dt;
      if (Y(pt, dt))
        return X(pt, dt);
      var Rt, Ut, it, ot, Ct, _t, kt, Pt;
      if (dt instanceof zt)
        switch (Rt = dt.type, Ut = dt.object, Rt) {
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            Pt = $t(Ut, pt, Rt);
            break;
          case "DataView":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float16Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            it = dt.metadata, Pt = Qt(Ut, Rt, it.offset, it.length, pt);
        }
      else
        switch (w(dt)) {
          case "Array":
          case "Object":
            for (_t = ht(dt), ot = 0, Ct = T(_t); ot < Ct; ot++)
              dt[kt = _t[ot]] = qt(dt[kt], pt);
            break;
          case "Map":
            Pt = new H(), dt.forEach(function(jt, ut) {
              tt(Pt, qt(ut, pt), qt(jt, pt));
            });
            break;
          case "Set":
            Pt = new nt(), dt.forEach(function(jt) {
              lt(Pt, qt(jt, pt));
            });
            break;
          case "Error":
            dt.message = qt(dt.message, pt), n(dt, "cause") && (dt.cause = qt(dt.cause, pt)), dt.name === "AggregateError" && (dt.errors = qt(dt.errors, pt));
          case "DOMException":
            F && (dt.stack = qt(dt.stack, pt));
        }
      return tt(pt, dt, Pt || dt), Pt || dt;
    };
    l({ global: !0, enumerable: !0, sham: !V, forced: Kt }, { structuredClone: function(pt) {
      var Rt, Ut, it = R(arguments.length, 1) > 1 && !b(arguments[1]) ? W(arguments[1]) : void 0, ot = it ? it.transfer : void 0, Ct = !1;
      ot !== void 0 && (Ut = function(kt, Pt) {
        if (!_(kt))
          throw J("Transfer option cannot be converted to a sequence");
        var jt = [];
        O(kt, function(ct) {
          gt(jt, W(ct));
        });
        for (var ut, mt, c, A, G, Q = 0, et = T(jt), st = []; Q < et; )
          if (ut = jt[Q++], (mt = w(ut)) !== "ArrayBuffer") {
            if (Y(Pt, ut))
              throw new $("Duplicate transferable", Et);
            if (V)
              A = Bt(ut, { transfer: [ut] });
            else
              switch (mt) {
                case "ImageBitmap":
                  c = m.OffscreenCanvas, x(c) || Vt(mt, Ft);
                  try {
                    (G = new c(ut.width, ut.height)).getContext("bitmaprenderer").transferFromImageBitmap(ut), A = G.transferToImageBitmap();
                  } catch {
                  }
                  break;
                case "AudioData":
                case "VideoFrame":
                  g(ut.clone) && g(ut.close) || Vt(mt, Ft);
                  try {
                    A = ut.clone(), ut.close();
                  } catch {
                  }
                  break;
                case "MediaSourceHandle":
                case "MessagePort":
                case "OffscreenCanvas":
                case "ReadableStream":
                case "TransformStream":
                case "WritableStream":
                  Vt(mt, Ft);
              }
            if (A === void 0)
              throw new $("This object cannot be transferred: " + mt, Et);
            tt(Pt, ut, A);
          } else
            gt(st, ut);
        return st;
      }(ot, Rt = new H()), Ct = !!T(Ut));
      var _t = Jt(pt, Rt, Ct);
      return Ct && (function(kt, Pt) {
        for (var jt, ut, mt = 0, c = T(kt); mt < c; ) {
          if (jt = kt[mt++], Y(Pt, jt))
            throw new $("Duplicate transferable", Et);
          V ? ut = Bt(jt, { transfer: [jt] }) : (g(jt.transfer) || Vt("ArrayBuffer", Ft), ut = jt.transfer()), tt(Pt, jt, ut);
        }
      }(ot, Rt = new H()), _t = qt(_t, Rt)), _t;
    } });
  }, (C, o, t) => {
    var e = t(14), r = t(7), l = t(21), m = t(78), y = t(24), h = t(51), a = function() {
    }, f = [], g = y("Reflect", "construct"), x = /^\s*(?:class|function)\b/, b = e(x.exec), _ = !x.exec(a), M = function(w) {
      if (!l(w))
        return !1;
      try {
        return g(a, f, w), !0;
      } catch {
        return !1;
      }
    }, O = function(w) {
      if (!l(w))
        return !1;
      switch (m(w)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return _ || !!b(x, h(w));
      } catch {
        return !0;
      }
    };
    O.sham = !0, C.exports = !g || r(function() {
      var W;
      return M(M.call) || !M(Object) || !M(function() {
        W = !0;
      }) || W;
    }) ? O : M;
  }, (C, o, t) => {
    var e = t(99), r = t(8), l = t(47), m = t(32), y = t(155), h = t(64), a = t(25), f = t(157), g = t(158), x = t(140), b = TypeError, _ = function(O, W) {
      this.stopped = O, this.result = W;
    }, M = _.prototype;
    C.exports = function(O, W, w) {
      var n, i, p, T, R, k, d, L = w && w.that, F = !(!w || !w.AS_ENTRIES), V = !(!w || !w.IS_RECORD), Z = !(!w || !w.IS_ITERATOR), B = !(!w || !w.INTERRUPTED), U = e(W, L), u = function(S) {
        return n && x(n, "normal", S), new _(!0, S);
      }, v = function(S) {
        return F ? (l(S), B ? U(S[0], S[1], u) : U(S[0], S[1])) : B ? U(S, u) : U(S);
      };
      if (V)
        n = O.iterator;
      else if (Z)
        n = O;
      else {
        if (!(i = g(O)))
          throw b(m(O) + " is not iterable");
        if (y(i)) {
          for (p = 0, T = h(O); T > p; p++)
            if ((R = v(O[p])) && a(M, R))
              return R;
          return new _(!1);
        }
        n = f(O, i);
      }
      for (k = V ? O.next : n.next; !(d = r(k, n)).done; ) {
        try {
          R = v(d.value);
        } catch (S) {
          x(n, "throw", S);
        }
        if (typeof R == "object" && R && a(M, R))
          return R;
      }
      return new _(!1);
    };
  }, (C, o, t) => {
    var e = t(34), r = t(156), l = e("iterator"), m = Array.prototype;
    C.exports = function(y) {
      return y !== void 0 && (r.Array === y || m[l] === y);
    };
  }, (C) => {
    C.exports = {};
  }, (C, o, t) => {
    var e = t(8), r = t(31), l = t(47), m = t(32), y = t(158), h = TypeError;
    C.exports = function(a, f) {
      var g = arguments.length < 2 ? y(a) : f;
      if (r(g))
        return l(e(g, a));
      throw h(m(a) + " is not iterable");
    };
  }, (C, o, t) => {
    var e = t(78), r = t(30), l = t(17), m = t(156), y = t(34)("iterator");
    C.exports = function(h) {
      if (!l(h))
        return r(h, y) || r(h, "@@iterator") || m[e(h)];
    };
  }, (C, o, t) => {
    var e = t(18), r = t(45), l = t(11);
    C.exports = function(m, y, h) {
      var a = e(y);
      a in m ? r.f(m, a, l(0, h)) : m[a] = h;
    };
  }, (C, o, t) => {
    var e = t(8), r = t(39), l = t(25), m = t(161), y = RegExp.prototype;
    C.exports = function(h) {
      var a = h.flags;
      return a !== void 0 || "flags" in y || r(h, "flags") || !l(y, h) ? a : e(m, h);
    };
  }, (C, o, t) => {
    var e = t(47);
    C.exports = function() {
      var r = e(this), l = "";
      return r.hasIndices && (l += "d"), r.global && (l += "g"), r.ignoreCase && (l += "i"), r.multiline && (l += "m"), r.dotAll && (l += "s"), r.unicode && (l += "u"), r.unicodeSets && (l += "v"), r.sticky && (l += "y"), l;
    };
  }, (C, o, t) => {
    var e = t(14), r = Map.prototype;
    C.exports = { Map, set: e(r.set), get: e(r.get), has: e(r.has), remove: e(r.delete), proto: r };
  }, (C, o, t) => {
    var a, f, g, br, b;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.SerializableEmpty = o.PrintAnnotationStorage = o.AnnotationStorage = void 0, t(89), t(149), t(152);
    var e = t(1), r = t(164), l = t(170);
    const m = Object.freeze({ map: null, hash: "", transfers: void 0 });
    o.SerializableEmpty = m;
    class y {
      constructor() {
        K(this, g);
        K(this, a, !1);
        K(this, f, /* @__PURE__ */ new Map());
        this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
      }
      getValue(M, O) {
        const W = s(this, f).get(M);
        return W === void 0 ? O : Object.assign(O, W);
      }
      getRawValue(M) {
        return s(this, f).get(M);
      }
      remove(M) {
        if (s(this, f).delete(M), s(this, f).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
          for (const O of s(this, f).values())
            if (O instanceof r.AnnotationEditor)
              return;
          this.onAnnotationEditor(null);
        }
      }
      setValue(M, O) {
        const W = s(this, f).get(M);
        let w = !1;
        if (W !== void 0)
          for (const [n, i] of Object.entries(O))
            W[n] !== i && (w = !0, W[n] = i);
        else
          w = !0, s(this, f).set(M, O);
        w && rt(this, g, br).call(this), O instanceof r.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(O.constructor._type);
      }
      has(M) {
        return s(this, f).has(M);
      }
      getAll() {
        return s(this, f).size > 0 ? (0, e.objectFromMap)(s(this, f)) : null;
      }
      setAll(M) {
        for (const [O, W] of Object.entries(M))
          this.setValue(O, W);
      }
      get size() {
        return s(this, f).size;
      }
      resetModified() {
        s(this, a) && (at(this, a, !1), typeof this.onResetModified == "function" && this.onResetModified());
      }
      get print() {
        return new h(this);
      }
      get serializable() {
        if (s(this, f).size === 0)
          return m;
        const M = /* @__PURE__ */ new Map(), O = new l.MurmurHash3_64(), W = [], w = /* @__PURE__ */ Object.create(null);
        let n = !1;
        for (const [i, p] of s(this, f)) {
          const T = p instanceof r.AnnotationEditor ? p.serialize(!1, w) : p;
          T && (M.set(i, T), O.update(`${i}:${JSON.stringify(T)}`), n || (n = !!T.bitmap));
        }
        if (n)
          for (const i of M.values())
            i.bitmap && W.push(i.bitmap);
        return M.size > 0 ? { map: M, hash: O.hexdigest(), transfers: W } : m;
      }
    }
    a = new WeakMap(), f = new WeakMap(), g = new WeakSet(), br = function() {
      s(this, a) || (at(this, a, !0), typeof this.onSetModified == "function" && this.onSetModified());
    }, o.AnnotationStorage = y;
    class h extends y {
      constructor(O) {
        super();
        K(this, b, void 0);
        const { map: W, hash: w, transfers: n } = O.serializable, i = structuredClone(W, null);
        at(this, b, { map: i, hash: w, transfers: n });
      }
      get print() {
        (0, e.unreachable)("Should not call PrintAnnotationStorage.print");
      }
      get serializable() {
        return s(this, b);
      }
    }
    b = new WeakMap(), o.PrintAnnotationStorage = h;
  }, (C, o, t) => {
    var h, a, f, g, x, b, _, M, O, W, w, n, i, p, T, je, k, Be, L, Ue, V, We, B, _r, u, yr, S, Ar, q, ze, z, Sr;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.AnnotationEditor = void 0, t(89), t(2);
    var e = t(165), r = t(1), l = t(168);
    const P = class P {
      constructor(E) {
        K(this, T);
        K(this, k);
        K(this, V);
        K(this, B);
        K(this, u);
        K(this, S);
        K(this, q);
        K(this, z);
        K(this, h, "");
        K(this, a, !1);
        K(this, f, null);
        K(this, g, null);
        K(this, x, null);
        K(this, b, !1);
        K(this, _, null);
        K(this, M, this.focusin.bind(this));
        K(this, O, this.focusout.bind(this));
        K(this, W, !1);
        K(this, w, !1);
        K(this, n, !1);
        Yt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
        Yt(this, "_uiManager", null);
        Yt(this, "_focusEventsAllowed", !0);
        Yt(this, "_l10nPromise", null);
        K(this, i, !1);
        K(this, p, P._zIndex++);
        this.constructor === P && (0, r.unreachable)("Cannot initialize AnnotationEditor."), this.parent = E.parent, this.id = E.id, this.width = this.height = null, this.pageIndex = E.parent.pageIndex, this.name = E.name, this.div = null, this._uiManager = E.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = E.isCentered, this._structTreeParentId = null;
        const { rotation: j, rawDims: { pageWidth: $, pageHeight: H, pageX: Y, pageY: X } } = this.parent.viewport;
        this.rotation = j, this.pageRotation = (360 + j - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [$, H], this.pageTranslation = [Y, X];
        const [tt, nt] = this.parentDimensions;
        this.x = E.x / tt, this.y = E.y / nt, this.isAttachedToDOM = !1, this.deleted = !1;
      }
      get editorType() {
        return Object.getPrototypeOf(this).constructor._type;
      }
      static get _defaultLineColor() {
        return (0, r.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
      }
      static deleteAnnotationElement(E) {
        const j = new y({ id: E.parent.getNextId(), parent: E.parent, uiManager: E._uiManager });
        j.annotationElementId = E.annotationElementId, j.deleted = !0, j._uiManager.addToAnnotationStorage(j);
      }
      static initialize(E) {
        let j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (P._l10nPromise || (P._l10nPromise = new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map((H) => [H, E.get(H)]))), j != null && j.strings)
          for (const H of j.strings)
            P._l10nPromise.set(H, E.get(H));
        if (P._borderLineWidth !== -1)
          return;
        const $ = getComputedStyle(document.documentElement);
        P._borderLineWidth = parseFloat($.getPropertyValue("--outline-width")) || 0;
      }
      static updateDefaultParams(E, j) {
      }
      static get defaultPropertiesToUpdate() {
        return [];
      }
      static isHandlingMimeForPasting(E) {
        return !1;
      }
      static paste(E, j) {
        (0, r.unreachable)("Not implemented");
      }
      get propertiesToUpdate() {
        return [];
      }
      get _isDraggable() {
        return s(this, i);
      }
      set _isDraggable(E) {
        var j;
        at(this, i, E), (j = this.div) == null || j.classList.toggle("draggable", E);
      }
      center() {
        const [E, j] = this.pageDimensions;
        switch (this.parentRotation) {
          case 90:
            this.x -= this.height * j / (2 * E), this.y += this.width * E / (2 * j);
            break;
          case 180:
            this.x += this.width / 2, this.y += this.height / 2;
            break;
          case 270:
            this.x += this.height * j / (2 * E), this.y -= this.width * E / (2 * j);
            break;
          default:
            this.x -= this.width / 2, this.y -= this.height / 2;
        }
        this.fixAndSetPosition();
      }
      addCommands(E) {
        this._uiManager.addCommands(E);
      }
      get currentLayer() {
        return this._uiManager.currentLayer;
      }
      setInBackground() {
        this.div.style.zIndex = 0;
      }
      setInForeground() {
        this.div.style.zIndex = s(this, p);
      }
      setParent(E) {
        E !== null && (this.pageIndex = E.pageIndex, this.pageDimensions = E.pageDimensions), this.parent = E;
      }
      focusin(E) {
        this._focusEventsAllowed && (s(this, W) ? at(this, W, !1) : this.parent.setSelected(this));
      }
      focusout(E) {
        var $;
        if (!this._focusEventsAllowed || !this.isAttachedToDOM)
          return;
        const j = E.relatedTarget;
        j != null && j.closest(`#${this.id}`) || (E.preventDefault(), ($ = this.parent) != null && $.isMultipleSelection || this.commitOrRemove());
      }
      commitOrRemove() {
        this.isEmpty() ? this.remove() : this.commit();
      }
      commit() {
        this.addToAnnotationStorage();
      }
      addToAnnotationStorage() {
        this._uiManager.addToAnnotationStorage(this);
      }
      setAt(E, j, $, H) {
        const [Y, X] = this.parentDimensions;
        [$, H] = this.screenToPageTranslation($, H), this.x = (E + $) / Y, this.y = (j + H) / X, this.fixAndSetPosition();
      }
      translate(E, j) {
        rt(this, T, je).call(this, this.parentDimensions, E, j);
      }
      translateInPage(E, j) {
        rt(this, T, je).call(this, this.pageDimensions, E, j), this.div.scrollIntoView({ block: "nearest" });
      }
      drag(E, j) {
        const [$, H] = this.parentDimensions;
        if (this.x += E / $, this.y += j / H, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
          const { x: lt, y: ht } = this.div.getBoundingClientRect();
          this.parent.findNewParent(this, lt, ht) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
        }
        let { x: Y, y: X } = this;
        const [tt, nt] = rt(this, k, Be).call(this);
        Y += tt, X += nt, this.div.style.left = `${(100 * Y).toFixed(2)}%`, this.div.style.top = `${(100 * X).toFixed(2)}%`, this.div.scrollIntoView({ block: "nearest" });
      }
      fixAndSetPosition() {
        const [E, j] = this.pageDimensions;
        let { x: $, y: H, width: Y, height: X } = this;
        switch (Y *= E, X *= j, $ *= E, H *= j, this.rotation) {
          case 0:
            $ = Math.max(0, Math.min(E - Y, $)), H = Math.max(0, Math.min(j - X, H));
            break;
          case 90:
            $ = Math.max(0, Math.min(E - X, $)), H = Math.min(j, Math.max(Y, H));
            break;
          case 180:
            $ = Math.min(E, Math.max(Y, $)), H = Math.min(j, Math.max(X, H));
            break;
          case 270:
            $ = Math.min(E, Math.max(X, $)), H = Math.max(0, Math.min(j - Y, H));
        }
        this.x = $ /= E, this.y = H /= j;
        const [tt, nt] = rt(this, k, Be).call(this);
        $ += tt, H += nt;
        const { style: lt } = this.div;
        lt.left = `${(100 * $).toFixed(2)}%`, lt.top = `${(100 * H).toFixed(2)}%`, this.moveInDOM();
      }
      screenToPageTranslation(E, j) {
        var $;
        return rt($ = P, L, Ue).call($, E, j, this.parentRotation);
      }
      pageTranslationToScreen(E, j) {
        var $;
        return rt($ = P, L, Ue).call($, E, j, 360 - this.parentRotation);
      }
      get parentScale() {
        return this._uiManager.viewParameters.realScale;
      }
      get parentRotation() {
        return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
      }
      get parentDimensions() {
        const { parentScale: E, pageDimensions: [j, $] } = this, H = j * E, Y = $ * E;
        return r.FeatureTest.isCSSRoundSupported ? [Math.round(H), Math.round(Y)] : [H, Y];
      }
      setDims(E, j) {
        var Y;
        const [$, H] = this.parentDimensions;
        this.div.style.width = `${(100 * E / $).toFixed(2)}%`, s(this, b) || (this.div.style.height = `${(100 * j / H).toFixed(2)}%`), (Y = s(this, f)) == null || Y.classList.toggle("small", E < P.SMALL_EDITOR_SIZE || j < P.SMALL_EDITOR_SIZE);
      }
      fixDims() {
        const { style: E } = this.div, { height: j, width: $ } = E, H = $.endsWith("%"), Y = !s(this, b) && j.endsWith("%");
        if (H && Y)
          return;
        const [X, tt] = this.parentDimensions;
        H || (E.width = `${(100 * parseFloat($) / X).toFixed(2)}%`), s(this, b) || Y || (E.height = `${(100 * parseFloat(j) / tt).toFixed(2)}%`);
      }
      getInitialTranslation() {
        return [0, 0];
      }
      async addAltTextButton() {
        if (s(this, f))
          return;
        const E = at(this, f, document.createElement("button"));
        E.className = "altText";
        const j = await P._l10nPromise.get("editor_alt_text_button_label");
        E.textContent = j, E.setAttribute("aria-label", j), E.tabIndex = "0", E.addEventListener("contextmenu", l.noContextMenu), E.addEventListener("pointerdown", ($) => $.stopPropagation()), E.addEventListener("click", ($) => {
          $.preventDefault(), this._uiManager.editAltText(this);
        }, { capture: !0 }), E.addEventListener("keydown", ($) => {
          $.target === E && $.key === "Enter" && ($.preventDefault(), this._uiManager.editAltText(this));
        }), rt(this, q, ze).call(this), this.div.append(E), P.SMALL_EDITOR_SIZE || (P.SMALL_EDITOR_SIZE = Math.min(128, Math.round(E.getBoundingClientRect().width * 1.4)));
      }
      getClientDimensions() {
        return this.div.getBoundingClientRect();
      }
      get altTextData() {
        return { altText: s(this, h), decorative: s(this, a) };
      }
      set altTextData(E) {
        let { altText: j, decorative: $ } = E;
        (s(this, h) !== j || s(this, a) !== $) && (at(this, h, j), at(this, a, $), rt(this, q, ze).call(this));
      }
      render() {
        this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", s(this, M)), this.div.addEventListener("focusout", s(this, O));
        const [E, j] = this.parentDimensions;
        this.parentRotation % 180 != 0 && (this.div.style.maxWidth = `${(100 * j / E).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * E / j).toFixed(2)}%`);
        const [$, H] = this.getInitialTranslation();
        return this.translate($, H), (0, e.bindEvents)(this, this.div, ["pointerdown"]), this.div;
      }
      pointerdown(E) {
        const { isMac: j } = r.FeatureTest.platform;
        E.button !== 0 || E.ctrlKey && j ? E.preventDefault() : (at(this, W, !0), rt(this, z, Sr).call(this, E));
      }
      moveInDOM() {
        var E;
        (E = this.parent) == null || E.moveEditorInDOM(this);
      }
      _setParentAndPosition(E, j, $) {
        E.changeParent(this), this.x = j, this.y = $, this.fixAndSetPosition();
      }
      getRect(E, j) {
        const $ = this.parentScale, [H, Y] = this.pageDimensions, [X, tt] = this.pageTranslation, nt = E / $, lt = j / $, ht = this.x * H, gt = this.y * Y, St = this.width * H, ft = this.height * Y;
        switch (this.rotation) {
          case 0:
            return [ht + nt + X, Y - gt - lt - ft + tt, ht + nt + St + X, Y - gt - lt + tt];
          case 90:
            return [ht + lt + X, Y - gt + nt + tt, ht + lt + ft + X, Y - gt + nt + St + tt];
          case 180:
            return [ht - nt - St + X, Y - gt + lt + tt, ht - nt + X, Y - gt + lt + ft + tt];
          case 270:
            return [ht - lt - ft + X, Y - gt - nt - St + tt, ht - lt + X, Y - gt - nt + tt];
          default:
            throw new Error("Invalid rotation");
        }
      }
      getRectInCurrentCoords(E, j) {
        const [$, H, Y, X] = E, tt = Y - $, nt = X - H;
        switch (this.rotation) {
          case 0:
            return [$, j - X, tt, nt];
          case 90:
            return [$, j - H, nt, tt];
          case 180:
            return [Y, j - H, tt, nt];
          case 270:
            return [Y, j - X, nt, tt];
          default:
            throw new Error("Invalid rotation");
        }
      }
      onceAdded() {
      }
      isEmpty() {
        return !1;
      }
      enableEditMode() {
        at(this, n, !0);
      }
      disableEditMode() {
        at(this, n, !1);
      }
      isInEditMode() {
        return s(this, n);
      }
      shouldGetKeyboardEvents() {
        return !1;
      }
      needsToBeRebuilt() {
        return this.div && !this.isAttachedToDOM;
      }
      rebuild() {
        var E, j;
        (E = this.div) == null || E.addEventListener("focusin", s(this, M)), (j = this.div) == null || j.addEventListener("focusout", s(this, O));
      }
      serialize() {
        (0, r.unreachable)("An editor must be serializable");
      }
      static deserialize(E, j, $) {
        const H = new this.prototype.constructor({ parent: j, id: j.getNextId(), uiManager: $ });
        H.rotation = E.rotation;
        const [Y, X] = H.pageDimensions, [tt, nt, lt, ht] = H.getRectInCurrentCoords(E.rect, X);
        return H.x = tt / Y, H.y = nt / X, H.width = lt / Y, H.height = ht / X, H;
      }
      remove() {
        var E;
        this.div.removeEventListener("focusin", s(this, M)), this.div.removeEventListener("focusout", s(this, O)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), (E = s(this, f)) == null || E.remove(), at(this, f, null), at(this, g, null);
      }
      get isResizable() {
        return !1;
      }
      makeResizable() {
        this.isResizable && (rt(this, B, _r).call(this), s(this, _).classList.remove("hidden"));
      }
      select() {
        var E;
        this.makeResizable(), (E = this.div) == null || E.classList.add("selectedEditor");
      }
      unselect() {
        var E, j, $;
        (E = s(this, _)) == null || E.classList.add("hidden"), (j = this.div) == null || j.classList.remove("selectedEditor"), ($ = this.div) != null && $.contains(document.activeElement) && this._uiManager.currentLayer.div.focus();
      }
      updateParams(E, j) {
      }
      disableEditing() {
        s(this, f) && (s(this, f).hidden = !0);
      }
      enableEditing() {
        s(this, f) && (s(this, f).hidden = !1);
      }
      enterInEditMode() {
      }
      get contentDiv() {
        return this.div;
      }
      get isEditing() {
        return s(this, w);
      }
      set isEditing(E) {
        at(this, w, E), this.parent && (E ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
      }
      setAspectRatio(E, j) {
        at(this, b, !0);
        const $ = E / j, { style: H } = this.div;
        H.aspectRatio = $, H.height = "auto";
      }
      static get MIN_SIZE() {
        return 16;
      }
    };
    h = new WeakMap(), a = new WeakMap(), f = new WeakMap(), g = new WeakMap(), x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakMap(), O = new WeakMap(), W = new WeakMap(), w = new WeakMap(), n = new WeakMap(), i = new WeakMap(), p = new WeakMap(), T = new WeakSet(), je = function(E, j, $) {
      let [H, Y] = E;
      [j, $] = this.screenToPageTranslation(j, $), this.x += j / H, this.y += $ / Y, this.fixAndSetPosition();
    }, k = new WeakSet(), Be = function() {
      const [E, j] = this.parentDimensions, { _borderLineWidth: $ } = P, H = $ / E, Y = $ / j;
      switch (this.rotation) {
        case 90:
          return [-H, Y];
        case 180:
          return [H, Y];
        case 270:
          return [H, -Y];
        default:
          return [-H, -Y];
      }
    }, L = new WeakSet(), Ue = function(E, j, $) {
      switch ($) {
        case 90:
          return [j, -E];
        case 180:
          return [-E, -j];
        case 270:
          return [-j, E];
        default:
          return [E, j];
      }
    }, V = new WeakSet(), We = function(E) {
      switch (E) {
        case 90: {
          const [j, $] = this.pageDimensions;
          return [0, -j / $, $ / j, 0];
        }
        case 180:
          return [-1, 0, 0, -1];
        case 270: {
          const [j, $] = this.pageDimensions;
          return [0, j / $, -$ / j, 0];
        }
        default:
          return [1, 0, 0, 1];
      }
    }, B = new WeakSet(), _r = function() {
      if (s(this, _))
        return;
      at(this, _, document.createElement("div")), s(this, _).classList.add("resizers");
      const E = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
      this._willKeepAspectRatio || E.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
      for (const j of E) {
        const $ = document.createElement("div");
        s(this, _).append($), $.classList.add("resizer", j), $.addEventListener("pointerdown", rt(this, u, yr).bind(this, j)), $.addEventListener("contextmenu", l.noContextMenu);
      }
      this.div.prepend(s(this, _));
    }, u = new WeakSet(), yr = function(E, j) {
      j.preventDefault();
      const { isMac: $ } = r.FeatureTest.platform;
      if (j.button !== 0 || j.ctrlKey && $)
        return;
      const H = rt(this, S, Ar).bind(this, E), Y = this._isDraggable;
      this._isDraggable = !1;
      const X = { passive: !0, capture: !0 };
      window.addEventListener("pointermove", H, X);
      const tt = this.x, nt = this.y, lt = this.width, ht = this.height, gt = this.parent.div.style.cursor, St = this.div.style.cursor;
      this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(j.target).cursor;
      const ft = () => {
        this._isDraggable = Y, window.removeEventListener("pointerup", ft), window.removeEventListener("blur", ft), window.removeEventListener("pointermove", H, X), this.parent.div.style.cursor = gt, this.div.style.cursor = St;
        const bt = this.x, wt = this.y, yt = this.width, Et = this.height;
        bt === tt && wt === nt && yt === lt && Et === ht || this.addCommands({ cmd: () => {
          this.width = yt, this.height = Et, this.x = bt, this.y = wt;
          const [Ft, It] = this.parentDimensions;
          this.setDims(Ft * yt, It * Et), this.fixAndSetPosition();
        }, undo: () => {
          this.width = lt, this.height = ht, this.x = tt, this.y = nt;
          const [Ft, It] = this.parentDimensions;
          this.setDims(Ft * lt, It * ht), this.fixAndSetPosition();
        }, mustExec: !0 });
      };
      window.addEventListener("pointerup", ft), window.addEventListener("blur", ft);
    }, S = new WeakSet(), Ar = function(E, j) {
      const [$, H] = this.parentDimensions, Y = this.x, X = this.y, tt = this.width, nt = this.height, lt = P.MIN_SIZE / $, ht = P.MIN_SIZE / H, gt = (pt) => Math.round(1e4 * pt) / 1e4, St = rt(this, V, We).call(this, this.rotation), ft = (pt, Rt) => [St[0] * pt + St[2] * Rt, St[1] * pt + St[3] * Rt], bt = rt(this, V, We).call(this, 360 - this.rotation);
      let wt, yt, Et = !1, Ft = !1;
      switch (E) {
        case "topLeft":
          Et = !0, wt = (pt, Rt) => [0, 0], yt = (pt, Rt) => [pt, Rt];
          break;
        case "topMiddle":
          wt = (pt, Rt) => [pt / 2, 0], yt = (pt, Rt) => [pt / 2, Rt];
          break;
        case "topRight":
          Et = !0, wt = (pt, Rt) => [pt, 0], yt = (pt, Rt) => [0, Rt];
          break;
        case "middleRight":
          Ft = !0, wt = (pt, Rt) => [pt, Rt / 2], yt = (pt, Rt) => [0, Rt / 2];
          break;
        case "bottomRight":
          Et = !0, wt = (pt, Rt) => [pt, Rt], yt = (pt, Rt) => [0, 0];
          break;
        case "bottomMiddle":
          wt = (pt, Rt) => [pt / 2, Rt], yt = (pt, Rt) => [pt / 2, 0];
          break;
        case "bottomLeft":
          Et = !0, wt = (pt, Rt) => [0, Rt], yt = (pt, Rt) => [pt, 0];
          break;
        case "middleLeft":
          Ft = !0, wt = (pt, Rt) => [0, Rt / 2], yt = (pt, Rt) => [pt, Rt / 2];
      }
      const It = wt(tt, nt), Nt = yt(tt, nt);
      let Bt = ft(...Nt);
      const Kt = gt(Y + Bt[0]), te = gt(X + Bt[1]);
      let Gt = 1, ee = 1, [Vt, Zt] = this.screenToPageTranslation(j.movementX, j.movementY);
      [Vt, Zt] = ($t = Vt / $, Qt = Zt / H, [bt[0] * $t + bt[2] * Qt, bt[1] * $t + bt[3] * Qt]);
      var $t, Qt;
      if (Et) {
        const pt = Math.hypot(tt, nt);
        Gt = ee = Math.max(Math.min(Math.hypot(Nt[0] - It[0] - Vt, Nt[1] - It[1] - Zt) / pt, 1 / tt, 1 / nt), lt / tt, ht / nt);
      } else
        Ft ? Gt = Math.max(lt, Math.min(1, Math.abs(Nt[0] - It[0] - Vt))) / tt : ee = Math.max(ht, Math.min(1, Math.abs(Nt[1] - It[1] - Zt))) / nt;
      const zt = gt(tt * Gt), Jt = gt(nt * ee);
      Bt = ft(...yt(zt, Jt));
      const qt = Kt - Bt[0], dt = te - Bt[1];
      this.width = zt, this.height = Jt, this.x = qt, this.y = dt, this.setDims($ * zt, H * Jt), this.fixAndSetPosition();
    }, q = new WeakSet(), ze = async function() {
      var $;
      const E = s(this, f);
      if (!E)
        return;
      if (!s(this, h) && !s(this, a)) {
        E.classList.remove("done"), ($ = s(this, g)) == null || $.remove();
        return;
      }
      P._l10nPromise.get("editor_alt_text_edit_button_label").then((H) => {
        E.setAttribute("aria-label", H);
      });
      let j = s(this, g);
      if (!j) {
        at(this, g, j = document.createElement("span")), j.className = "tooltip", j.setAttribute("role", "tooltip");
        const H = j.id = `alt-text-tooltip-${this.id}`;
        E.setAttribute("aria-describedby", H);
        const Y = 100;
        E.addEventListener("mouseenter", () => {
          at(this, x, setTimeout(() => {
            at(this, x, null), s(this, g).classList.add("show"), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", subtype: this.editorType, data: { action: "alt_text_tooltip" } } });
          }, Y));
        }), E.addEventListener("mouseleave", () => {
          var X;
          clearTimeout(s(this, x)), at(this, x, null), (X = s(this, g)) == null || X.classList.remove("show");
        });
      }
      E.classList.add("done"), j.innerText = s(this, a) ? await P._l10nPromise.get("editor_alt_text_decorative_tooltip") : s(this, h), j.parentNode || E.append(j);
    }, z = new WeakSet(), Sr = function(E) {
      if (!this._isDraggable)
        return;
      const j = this._uiManager.isSelected(this);
      this._uiManager.setUpDragSession();
      let $, H;
      j && ($ = { passive: !0, capture: !0 }, H = (X) => {
        const [tt, nt] = this.screenToPageTranslation(X.movementX, X.movementY);
        this._uiManager.dragSelectedEditors(tt, nt);
      }, window.addEventListener("pointermove", H, $));
      const Y = () => {
        if (window.removeEventListener("pointerup", Y), window.removeEventListener("blur", Y), j && window.removeEventListener("pointermove", H, $), at(this, W, !1), !this._uiManager.endDragSession()) {
          const { isMac: X } = r.FeatureTest.platform;
          E.ctrlKey && !X || E.shiftKey || E.metaKey && X ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
        }
      };
      window.addEventListener("pointerup", Y), window.addEventListener("blur", Y);
    }, K(P, L), Yt(P, "_borderLineWidth", -1), Yt(P, "_colorManager", new e.ColorManager()), Yt(P, "_zIndex", 1), Yt(P, "SMALL_EDITOR_SIZE", 0);
    let m = P;
    o.AnnotationEditor = m;
    class y extends m {
      constructor(E) {
        super(E), this.annotationElementId = E.annotationElementId, this.deleted = !0;
      }
      serialize() {
        return { id: this.annotationElementId, deleted: !0, pageIndex: this.pageIndex };
      }
    }
  }, (C, o, t) => {
    var g, x, b, _, M, qe, w, n, i, p, T, xr, d, L, F, V, Z, B, U, u, v, S, D, q, J, z, N, P, I, E, j, $, H, Y, X, tt, nt, lt, ht, gt, St, ft, bt, wt, yt, Et, Ft, wr, Nt, He, Kt, Ve, Gt, we, Vt, Ge, $t, $e, zt, se, qt, ge, pt, Er, Ut, Cr, ot, Xe, _t, me, Pt, Ye;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.KeyboardManager = o.CommandManager = o.ColorManager = o.AnnotationEditorUIManager = void 0, o.bindEvents = function(c, A, G) {
      for (const Q of G)
        A.addEventListener(Q, c[Q].bind(c));
    }, o.opacityToHex = function(c) {
      return Math.round(Math.min(255, Math.max(1, 255 * c))).toString(16).padStart(2, "0");
    }, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(2), t(89), t(125), t(136), t(138), t(141), t(143), t(145), t(147), t(166);
    var e = t(1), r = t(168);
    class l {
      constructor() {
        K(this, g, 0);
      }
      getId() {
        return `${e.AnnotationEditorPrefix}${fe(this, g)._++}`;
      }
    }
    g = new WeakMap();
    const W = class W {
      constructor() {
        K(this, M);
        K(this, x, (0, e.getUuid)());
        K(this, b, 0);
        K(this, _, null);
      }
      static get _isSVGFittingCanvas() {
        const c = new OffscreenCanvas(1, 3).getContext("2d"), A = new Image();
        A.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
        const G = A.decode().then(() => (c.drawImage(A, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(c.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
        return (0, e.shadow)(this, "_isSVGFittingCanvas", G);
      }
      async getFromFile(c) {
        const { lastModified: A, name: G, size: Q, type: et } = c;
        return rt(this, M, qe).call(this, `${A}_${G}_${Q}_${et}`, c);
      }
      async getFromUrl(c) {
        return rt(this, M, qe).call(this, c, c);
      }
      async getFromId(c) {
        s(this, _) || at(this, _, /* @__PURE__ */ new Map());
        const A = s(this, _).get(c);
        return A ? A.bitmap ? (A.refCounter += 1, A) : A.file ? this.getFromFile(A.file) : this.getFromUrl(A.url) : null;
      }
      getSvgUrl(c) {
        const A = s(this, _).get(c);
        return A != null && A.isSvg ? A.svgUrl : null;
      }
      deleteId(c) {
        s(this, _) || at(this, _, /* @__PURE__ */ new Map());
        const A = s(this, _).get(c);
        A && (A.refCounter -= 1, A.refCounter === 0 && (A.bitmap = null));
      }
      isValidId(c) {
        return c.startsWith(`image_${s(this, x)}_`);
      }
    };
    x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakSet(), qe = async function(c, A) {
      s(this, _) || at(this, _, /* @__PURE__ */ new Map());
      let G = s(this, _).get(c);
      if (G === null)
        return null;
      if (G != null && G.bitmap)
        return G.refCounter += 1, G;
      try {
        G || (G = { bitmap: null, id: `image_${s(this, x)}_${fe(this, b)._++}`, refCounter: 0, isSvg: !1 });
        let Q;
        if (typeof A == "string") {
          G.url = A;
          const et = await fetch(A);
          if (!et.ok)
            throw new Error(et.statusText);
          Q = await et.blob();
        } else
          Q = G.file = A;
        if (Q.type === "image/svg+xml") {
          const et = W._isSVGFittingCanvas, st = new FileReader(), ct = new Image(), vt = new Promise((xt, At) => {
            ct.onload = () => {
              G.bitmap = ct, G.isSvg = !0, xt();
            }, st.onload = async () => {
              const Lt = G.svgUrl = st.result;
              ct.src = await et ? `${Lt}#svgView(preserveAspectRatio(none))` : Lt;
            }, ct.onerror = st.onerror = At;
          });
          st.readAsDataURL(Q), await vt;
        } else
          G.bitmap = await createImageBitmap(Q);
        G.refCounter = 1;
      } catch (Q) {
        console.error(Q), G = null;
      }
      return s(this, _).set(c, G), G && s(this, _).set(G.id, G), G;
    };
    let m = W;
    class y {
      constructor() {
        K(this, w, []);
        K(this, n, !1);
        K(this, i, void 0);
        K(this, p, -1);
        let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 128;
        at(this, i, c);
      }
      add(c) {
        let { cmd: A, undo: G, mustExec: Q, type: et = NaN, overwriteIfSameType: st = !1, keepUndo: ct = !1 } = c;
        if (Q && A(), s(this, n))
          return;
        const vt = { cmd: A, undo: G, type: et };
        if (s(this, p) === -1) {
          s(this, w).length > 0 && (s(this, w).length = 0), at(this, p, 0), s(this, w).push(vt);
          return;
        }
        if (st && s(this, w)[s(this, p)].type === et) {
          ct && (vt.undo = s(this, w)[s(this, p)].undo), s(this, w)[s(this, p)] = vt;
          return;
        }
        const xt = s(this, p) + 1;
        xt === s(this, i) ? s(this, w).splice(0, 1) : (at(this, p, xt), xt < s(this, w).length && s(this, w).splice(xt)), s(this, w).push(vt);
      }
      undo() {
        s(this, p) !== -1 && (at(this, n, !0), s(this, w)[s(this, p)].undo(), at(this, n, !1), at(this, p, s(this, p) - 1));
      }
      redo() {
        s(this, p) < s(this, w).length - 1 && (at(this, p, s(this, p) + 1), at(this, n, !0), s(this, w)[s(this, p)].cmd(), at(this, n, !1));
      }
      hasSomethingToUndo() {
        return s(this, p) !== -1;
      }
      hasSomethingToRedo() {
        return s(this, p) < s(this, w).length - 1;
      }
      destroy() {
        at(this, w, null);
      }
    }
    w = new WeakMap(), n = new WeakMap(), i = new WeakMap(), p = new WeakMap(), o.CommandManager = y;
    class h {
      constructor(c) {
        K(this, T);
        this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
        const { isMac: A } = e.FeatureTest.platform;
        for (const [G, Q, et = {}] of c)
          for (const st of G) {
            const ct = st.startsWith("mac+");
            A && ct ? (this.callbacks.set(st.slice(4), { callback: Q, options: et }), this.allKeys.add(st.split("+").at(-1))) : !A && !ct && (this.callbacks.set(st, { callback: Q, options: et }), this.allKeys.add(st.split("+").at(-1)));
          }
      }
      exec(c, A) {
        if (!this.allKeys.has(A.key))
          return;
        const G = this.callbacks.get(rt(this, T, xr).call(this, A));
        if (!G)
          return;
        const { callback: Q, options: { bubbles: et = !1, args: st = [], checker: ct = null } } = G;
        (!ct || ct(c, A)) && (Q.bind(c, ...st)(), et || (A.stopPropagation(), A.preventDefault()));
      }
    }
    T = new WeakSet(), xr = function(c) {
      c.altKey && this.buffer.push("alt"), c.ctrlKey && this.buffer.push("ctrl"), c.metaKey && this.buffer.push("meta"), c.shiftKey && this.buffer.push("shift"), this.buffer.push(c.key);
      const A = this.buffer.join("+");
      return this.buffer.length = 0, A;
    }, o.KeyboardManager = h;
    const k = class k {
      get _colors() {
        const c = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
        return (0, r.getColorValues)(c), (0, e.shadow)(this, "_colors", c);
      }
      convert(c) {
        const A = (0, r.getRGB)(c);
        if (!window.matchMedia("(forced-colors: active)").matches)
          return A;
        for (const [G, Q] of this._colors)
          if (Q.every((et, st) => et === A[st]))
            return k._colorsMapping.get(G);
        return A;
      }
      getHexCode(c) {
        const A = this._colors.get(c);
        return A ? e.Util.makeHexColor(...A) : c;
      }
    };
    Yt(k, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
    let a = k;
    o.ColorManager = a;
    const ut = class ut {
      constructor(c, A, G, Q, et, st) {
        K(this, Ft);
        K(this, Nt);
        K(this, Kt);
        K(this, Gt);
        K(this, Vt);
        K(this, $t);
        K(this, zt);
        K(this, qt);
        K(this, pt);
        K(this, Ut);
        K(this, ot);
        K(this, _t);
        K(this, Pt);
        K(this, d, null);
        K(this, L, /* @__PURE__ */ new Map());
        K(this, F, /* @__PURE__ */ new Map());
        K(this, V, null);
        K(this, Z, null);
        K(this, B, new y());
        K(this, U, 0);
        K(this, u, /* @__PURE__ */ new Set());
        K(this, v, null);
        K(this, S, null);
        K(this, D, /* @__PURE__ */ new Set());
        K(this, q, null);
        K(this, J, new l());
        K(this, z, !1);
        K(this, N, !1);
        K(this, P, null);
        K(this, I, e.AnnotationEditorType.NONE);
        K(this, E, /* @__PURE__ */ new Set());
        K(this, j, null);
        K(this, $, this.blur.bind(this));
        K(this, H, this.focus.bind(this));
        K(this, Y, this.copy.bind(this));
        K(this, X, this.cut.bind(this));
        K(this, tt, this.paste.bind(this));
        K(this, nt, this.keydown.bind(this));
        K(this, lt, this.onEditingAction.bind(this));
        K(this, ht, this.onPageChanging.bind(this));
        K(this, gt, this.onScaleChanging.bind(this));
        K(this, St, this.onRotationChanging.bind(this));
        K(this, ft, { isEditing: !1, isEmpty: !0, hasSomethingToUndo: !1, hasSomethingToRedo: !1, hasSelectedEditor: !1 });
        K(this, bt, [0, 0]);
        K(this, wt, null);
        K(this, yt, null);
        K(this, Et, null);
        at(this, yt, c), at(this, Et, A), at(this, V, G), this._eventBus = Q, this._eventBus._on("editingaction", s(this, lt)), this._eventBus._on("pagechanging", s(this, ht)), this._eventBus._on("scalechanging", s(this, gt)), this._eventBus._on("rotationchanging", s(this, St)), at(this, Z, et.annotationStorage), at(this, q, et.filterFactory), at(this, j, st), this.viewParameters = { realScale: r.PixelsPerInch.PDF_TO_CSS_UNITS, rotation: 0 };
      }
      static get _keyboardManager() {
        const c = ut.prototype, A = (et) => {
          const { activeElement: st } = document;
          return st && s(et, yt).contains(st) && et.hasSomethingToControl();
        }, G = this.TRANSLATE_SMALL, Q = this.TRANSLATE_BIG;
        return (0, e.shadow)(this, "_keyboardManager", new h([[["ctrl+a", "mac+meta+a"], c.selectAll], [["ctrl+z", "mac+meta+z"], c.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], c.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], c.delete], [["Escape", "mac+Escape"], c.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], c.translateSelectedEditors, { args: [-G, 0], checker: A }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], c.translateSelectedEditors, { args: [-Q, 0], checker: A }], [["ArrowRight", "mac+ArrowRight"], c.translateSelectedEditors, { args: [G, 0], checker: A }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], c.translateSelectedEditors, { args: [Q, 0], checker: A }], [["ArrowUp", "mac+ArrowUp"], c.translateSelectedEditors, { args: [0, -G], checker: A }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], c.translateSelectedEditors, { args: [0, -Q], checker: A }], [["ArrowDown", "mac+ArrowDown"], c.translateSelectedEditors, { args: [0, G], checker: A }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], c.translateSelectedEditors, { args: [0, Q], checker: A }]]));
      }
      destroy() {
        rt(this, Gt, we).call(this), rt(this, Nt, He).call(this), this._eventBus._off("editingaction", s(this, lt)), this._eventBus._off("pagechanging", s(this, ht)), this._eventBus._off("scalechanging", s(this, gt)), this._eventBus._off("rotationchanging", s(this, St));
        for (const c of s(this, F).values())
          c.destroy();
        s(this, F).clear(), s(this, L).clear(), s(this, D).clear(), at(this, d, null), s(this, E).clear(), s(this, B).destroy(), s(this, V).destroy();
      }
      get hcmFilter() {
        return (0, e.shadow)(this, "hcmFilter", s(this, j) ? s(this, q).addHCMFilter(s(this, j).foreground, s(this, j).background) : "none");
      }
      get direction() {
        return (0, e.shadow)(this, "direction", getComputedStyle(s(this, yt)).direction);
      }
      editAltText(c) {
        var A;
        (A = s(this, V)) == null || A.editAltText(this, c);
      }
      onPageChanging(c) {
        let { pageNumber: A } = c;
        at(this, U, A - 1);
      }
      focusMainContainer() {
        s(this, yt).focus();
      }
      findParent(c, A) {
        for (const G of s(this, F).values()) {
          const { x: Q, y: et, width: st, height: ct } = G.div.getBoundingClientRect();
          if (c >= Q && c <= Q + st && A >= et && A <= et + ct)
            return G;
        }
        return null;
      }
      disableUserSelect() {
        let c = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        s(this, Et).classList.toggle("noUserSelect", c);
      }
      addShouldRescale(c) {
        s(this, D).add(c);
      }
      removeShouldRescale(c) {
        s(this, D).delete(c);
      }
      onScaleChanging(c) {
        let { scale: A } = c;
        this.commitOrRemove(), this.viewParameters.realScale = A * r.PixelsPerInch.PDF_TO_CSS_UNITS;
        for (const G of s(this, D))
          G.onScaleChanging();
      }
      onRotationChanging(c) {
        let { pagesRotation: A } = c;
        this.commitOrRemove(), this.viewParameters.rotation = A;
      }
      addToAnnotationStorage(c) {
        c.isEmpty() || !s(this, Z) || s(this, Z).has(c.id) || s(this, Z).setValue(c.id, c);
      }
      blur() {
        if (!this.hasSelection)
          return;
        const { activeElement: c } = document;
        for (const A of s(this, E))
          if (A.div.contains(c)) {
            at(this, P, [A, c]), A._focusEventsAllowed = !1;
            break;
          }
      }
      focus() {
        if (!s(this, P))
          return;
        const [c, A] = s(this, P);
        at(this, P, null), A.addEventListener("focusin", () => {
          c._focusEventsAllowed = !0;
        }, { once: !0 }), A.focus();
      }
      addEditListeners() {
        rt(this, Kt, Ve).call(this), rt(this, Vt, Ge).call(this);
      }
      removeEditListeners() {
        rt(this, Gt, we).call(this), rt(this, $t, $e).call(this);
      }
      copy(c) {
        var G;
        if (c.preventDefault(), (G = s(this, d)) == null || G.commitOrRemove(), !this.hasSelection)
          return;
        const A = [];
        for (const Q of s(this, E)) {
          const et = Q.serialize(!0);
          et && A.push(et);
        }
        A.length !== 0 && c.clipboardData.setData("application/pdfjs", JSON.stringify(A));
      }
      cut(c) {
        this.copy(c), this.delete();
      }
      paste(c) {
        c.preventDefault();
        const { clipboardData: A } = c;
        for (const et of A.items)
          for (const st of s(this, S))
            if (st.isHandlingMimeForPasting(et.type)) {
              st.paste(et, this.currentLayer);
              return;
            }
        let G = A.getData("application/pdfjs");
        if (!G)
          return;
        try {
          G = JSON.parse(G);
        } catch (et) {
          (0, e.warn)(`paste: "${et.message}".`);
          return;
        }
        if (!Array.isArray(G))
          return;
        this.unselectAll();
        const Q = this.currentLayer;
        try {
          const et = [];
          for (const vt of G) {
            const xt = Q.deserialize(vt);
            if (!xt)
              return;
            et.push(xt);
          }
          const st = () => {
            for (const vt of et)
              rt(this, ot, Xe).call(this, vt);
            rt(this, Pt, Ye).call(this, et);
          }, ct = () => {
            for (const vt of et)
              vt.remove();
          };
          this.addCommands({ cmd: st, undo: ct, mustExec: !0 });
        } catch (et) {
          (0, e.warn)(`paste: "${et.message}".`);
        }
      }
      keydown(c) {
        var A;
        (A = this.getActive()) != null && A.shouldGetKeyboardEvents() || ut._keyboardManager.exec(this, c);
      }
      onEditingAction(c) {
        ["undo", "redo", "delete", "selectAll"].includes(c.name) && this[c.name]();
      }
      setEditingState(c) {
        c ? (rt(this, Ft, wr).call(this), rt(this, Kt, Ve).call(this), rt(this, Vt, Ge).call(this), rt(this, zt, se).call(this, { isEditing: s(this, I) !== e.AnnotationEditorType.NONE, isEmpty: rt(this, _t, me).call(this), hasSomethingToUndo: s(this, B).hasSomethingToUndo(), hasSomethingToRedo: s(this, B).hasSomethingToRedo(), hasSelectedEditor: !1 })) : (rt(this, Nt, He).call(this), rt(this, Gt, we).call(this), rt(this, $t, $e).call(this), rt(this, zt, se).call(this, { isEditing: !1 }), this.disableUserSelect(!1));
      }
      registerEditorTypes(c) {
        if (!s(this, S)) {
          at(this, S, c);
          for (const A of s(this, S))
            rt(this, qt, ge).call(this, A.defaultPropertiesToUpdate);
        }
      }
      getId() {
        return s(this, J).getId();
      }
      get currentLayer() {
        return s(this, F).get(s(this, U));
      }
      getLayer(c) {
        return s(this, F).get(c);
      }
      get currentPageIndex() {
        return s(this, U);
      }
      addLayer(c) {
        s(this, F).set(c.pageIndex, c), s(this, z) ? c.enable() : c.disable();
      }
      removeLayer(c) {
        s(this, F).delete(c.pageIndex);
      }
      updateMode(c) {
        let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (s(this, I) !== c)
          if (at(this, I, c), c !== e.AnnotationEditorType.NONE) {
            this.setEditingState(!0), rt(this, pt, Er).call(this), this.unselectAll();
            for (const G of s(this, F).values())
              G.updateMode(c);
            if (A) {
              for (const G of s(this, L).values())
                if (G.annotationElementId === A) {
                  this.setSelected(G), G.enterInEditMode();
                  break;
                }
            }
          } else
            this.setEditingState(!1), rt(this, Ut, Cr).call(this);
      }
      updateToolbar(c) {
        c !== s(this, I) && this._eventBus.dispatch("switchannotationeditormode", { source: this, mode: c });
      }
      updateParams(c, A) {
        if (s(this, S))
          if (c !== e.AnnotationEditorParamsType.CREATE) {
            for (const G of s(this, E))
              G.updateParams(c, A);
            for (const G of s(this, S))
              G.updateDefaultParams(c, A);
          } else
            this.currentLayer.addNewEditor(c);
      }
      enableWaiting() {
        let c = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (s(this, N) !== c) {
          at(this, N, c);
          for (const A of s(this, F).values())
            c ? A.disableClick() : A.enableClick(), A.div.classList.toggle("waiting", c);
        }
      }
      getEditors(c) {
        const A = [];
        for (const G of s(this, L).values())
          G.pageIndex === c && A.push(G);
        return A;
      }
      getEditor(c) {
        return s(this, L).get(c);
      }
      addEditor(c) {
        s(this, L).set(c.id, c);
      }
      removeEditor(c) {
        var A;
        s(this, L).delete(c.id), this.unselect(c), c.annotationElementId && s(this, u).has(c.annotationElementId) || ((A = s(this, Z)) == null || A.remove(c.id));
      }
      addDeletedAnnotationElement(c) {
        s(this, u).add(c.annotationElementId), c.deleted = !0;
      }
      isDeletedAnnotationElement(c) {
        return s(this, u).has(c);
      }
      removeDeletedAnnotationElement(c) {
        s(this, u).delete(c.annotationElementId), c.deleted = !1;
      }
      setActiveEditor(c) {
        s(this, d) !== c && (at(this, d, c), c && rt(this, qt, ge).call(this, c.propertiesToUpdate));
      }
      toggleSelected(c) {
        s(this, E).has(c) ? (s(this, E).delete(c), c.unselect(), rt(this, zt, se).call(this, { hasSelectedEditor: this.hasSelection })) : (s(this, E).add(c), c.select(), rt(this, qt, ge).call(this, c.propertiesToUpdate), rt(this, zt, se).call(this, { hasSelectedEditor: !0 }));
      }
      setSelected(c) {
        for (const A of s(this, E))
          A !== c && A.unselect();
        s(this, E).clear(), s(this, E).add(c), c.select(), rt(this, qt, ge).call(this, c.propertiesToUpdate), rt(this, zt, se).call(this, { hasSelectedEditor: !0 });
      }
      isSelected(c) {
        return s(this, E).has(c);
      }
      unselect(c) {
        c.unselect(), s(this, E).delete(c), rt(this, zt, se).call(this, { hasSelectedEditor: this.hasSelection });
      }
      get hasSelection() {
        return s(this, E).size !== 0;
      }
      undo() {
        s(this, B).undo(), rt(this, zt, se).call(this, { hasSomethingToUndo: s(this, B).hasSomethingToUndo(), hasSomethingToRedo: !0, isEmpty: rt(this, _t, me).call(this) });
      }
      redo() {
        s(this, B).redo(), rt(this, zt, se).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: s(this, B).hasSomethingToRedo(), isEmpty: rt(this, _t, me).call(this) });
      }
      addCommands(c) {
        s(this, B).add(c), rt(this, zt, se).call(this, { hasSomethingToUndo: !0, hasSomethingToRedo: !1, isEmpty: rt(this, _t, me).call(this) });
      }
      delete() {
        if (this.commitOrRemove(), !this.hasSelection)
          return;
        const c = [...s(this, E)];
        this.addCommands({ cmd: () => {
          for (const A of c)
            A.remove();
        }, undo: () => {
          for (const A of c)
            rt(this, ot, Xe).call(this, A);
        }, mustExec: !0 });
      }
      commitOrRemove() {
        var c;
        (c = s(this, d)) == null || c.commitOrRemove();
      }
      hasSomethingToControl() {
        return s(this, d) || this.hasSelection;
      }
      selectAll() {
        for (const c of s(this, E))
          c.commit();
        rt(this, Pt, Ye).call(this, s(this, L).values());
      }
      unselectAll() {
        if (s(this, d))
          s(this, d).commitOrRemove();
        else if (this.hasSelection) {
          for (const c of s(this, E))
            c.unselect();
          s(this, E).clear(), rt(this, zt, se).call(this, { hasSelectedEditor: !1 });
        }
      }
      translateSelectedEditors(c, A) {
        if (arguments.length > 2 && arguments[2] !== void 0 && arguments[2] || this.commitOrRemove(), !this.hasSelection)
          return;
        s(this, bt)[0] += c, s(this, bt)[1] += A;
        const [G, Q] = s(this, bt), et = [...s(this, E)];
        s(this, wt) && clearTimeout(s(this, wt)), at(this, wt, setTimeout(() => {
          at(this, wt, null), s(this, bt)[0] = s(this, bt)[1] = 0, this.addCommands({ cmd: () => {
            for (const st of et)
              s(this, L).has(st.id) && st.translateInPage(G, Q);
          }, undo: () => {
            for (const st of et)
              s(this, L).has(st.id) && st.translateInPage(-G, -Q);
          }, mustExec: !1 });
        }, 1e3));
        for (const st of et)
          st.translateInPage(c, A);
      }
      setUpDragSession() {
        if (this.hasSelection) {
          this.disableUserSelect(!0), at(this, v, /* @__PURE__ */ new Map());
          for (const c of s(this, E))
            s(this, v).set(c, { savedX: c.x, savedY: c.y, savedPageIndex: c.pageIndex, newX: 0, newY: 0, newPageIndex: -1 });
        }
      }
      endDragSession() {
        if (!s(this, v))
          return !1;
        this.disableUserSelect(!1);
        const c = s(this, v);
        at(this, v, null);
        let A = !1;
        for (const [{ x: Q, y: et, pageIndex: st }, ct] of c)
          ct.newX = Q, ct.newY = et, ct.newPageIndex = st, A || (A = Q !== ct.savedX || et !== ct.savedY || st !== ct.savedPageIndex);
        if (!A)
          return !1;
        const G = (Q, et, st, ct) => {
          if (s(this, L).has(Q.id)) {
            const vt = s(this, F).get(ct);
            vt ? Q._setParentAndPosition(vt, et, st) : (Q.pageIndex = ct, Q.x = et, Q.y = st);
          }
        };
        return this.addCommands({ cmd: () => {
          for (const [Q, { newX: et, newY: st, newPageIndex: ct }] of c)
            G(Q, et, st, ct);
        }, undo: () => {
          for (const [Q, { savedX: et, savedY: st, savedPageIndex: ct }] of c)
            G(Q, et, st, ct);
        }, mustExec: !0 }), !0;
      }
      dragSelectedEditors(c, A) {
        if (s(this, v))
          for (const G of s(this, v).keys())
            G.drag(c, A);
      }
      rebuild(c) {
        if (c.parent === null) {
          const A = this.getLayer(c.pageIndex);
          A ? (A.changeParent(c), A.addOrRebuild(c)) : (this.addEditor(c), this.addToAnnotationStorage(c), c.rebuild());
        } else
          c.parent.addOrRebuild(c);
      }
      isActive(c) {
        return s(this, d) === c;
      }
      getActive() {
        return s(this, d);
      }
      getMode() {
        return s(this, I);
      }
      get imageManager() {
        return (0, e.shadow)(this, "imageManager", new m());
      }
    };
    d = new WeakMap(), L = new WeakMap(), F = new WeakMap(), V = new WeakMap(), Z = new WeakMap(), B = new WeakMap(), U = new WeakMap(), u = new WeakMap(), v = new WeakMap(), S = new WeakMap(), D = new WeakMap(), q = new WeakMap(), J = new WeakMap(), z = new WeakMap(), N = new WeakMap(), P = new WeakMap(), I = new WeakMap(), E = new WeakMap(), j = new WeakMap(), $ = new WeakMap(), H = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), tt = new WeakMap(), nt = new WeakMap(), lt = new WeakMap(), ht = new WeakMap(), gt = new WeakMap(), St = new WeakMap(), ft = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), Et = new WeakMap(), Ft = new WeakSet(), wr = function() {
      window.addEventListener("focus", s(this, H)), window.addEventListener("blur", s(this, $));
    }, Nt = new WeakSet(), He = function() {
      window.removeEventListener("focus", s(this, H)), window.removeEventListener("blur", s(this, $));
    }, Kt = new WeakSet(), Ve = function() {
      window.addEventListener("keydown", s(this, nt), { capture: !0 });
    }, Gt = new WeakSet(), we = function() {
      window.removeEventListener("keydown", s(this, nt), { capture: !0 });
    }, Vt = new WeakSet(), Ge = function() {
      document.addEventListener("copy", s(this, Y)), document.addEventListener("cut", s(this, X)), document.addEventListener("paste", s(this, tt));
    }, $t = new WeakSet(), $e = function() {
      document.removeEventListener("copy", s(this, Y)), document.removeEventListener("cut", s(this, X)), document.removeEventListener("paste", s(this, tt));
    }, zt = new WeakSet(), se = function(c) {
      Object.entries(c).some((A) => {
        let [G, Q] = A;
        return s(this, ft)[G] !== Q;
      }) && this._eventBus.dispatch("annotationeditorstateschanged", { source: this, details: Object.assign(s(this, ft), c) });
    }, qt = new WeakSet(), ge = function(c) {
      this._eventBus.dispatch("annotationeditorparamschanged", { source: this, details: c });
    }, pt = new WeakSet(), Er = function() {
      if (!s(this, z)) {
        at(this, z, !0);
        for (const c of s(this, F).values())
          c.enable();
      }
    }, Ut = new WeakSet(), Cr = function() {
      if (this.unselectAll(), s(this, z)) {
        at(this, z, !1);
        for (const c of s(this, F).values())
          c.disable();
      }
    }, ot = new WeakSet(), Xe = function(c) {
      const A = s(this, F).get(c.pageIndex);
      A ? A.addOrRebuild(c) : this.addEditor(c);
    }, _t = new WeakSet(), me = function() {
      if (s(this, L).size === 0)
        return !0;
      if (s(this, L).size === 1)
        for (const c of s(this, L).values())
          return c.isEmpty();
      return !1;
    }, Pt = new WeakSet(), Ye = function(c) {
      s(this, E).clear();
      for (const A of c)
        A.isEmpty() || (s(this, E).add(A), A.select());
      rt(this, zt, se).call(this, { hasSelectedEditor: !0 });
    }, Yt(ut, "TRANSLATE_SMALL", 1), Yt(ut, "TRANSLATE_BIG", 10);
    let f = ut;
    o.AnnotationEditorUIManager = f;
  }, (C, o, t) => {
    var e = t(3), r = t(6), l = t(4), m = t(24), y = t(14), h = t(8), a = t(21), f = t(20), g = t(91), x = t(39), b = t(77), _ = t(64), M = t(159), O = t(7), W = t(167), w = t(27), n = l.JSON, i = l.Number, p = l.SyntaxError, T = n && n.parse, R = m("Object", "keys"), k = Object.getOwnPropertyDescriptor, d = y("".charAt), L = y("".slice), F = y(/./.exec), V = y([].push), Z = /^\d$/, B = /^[1-9]$/, U = /^(?:-|\d)$/, u = /^[\t\n\r ]$/, v = function(N, P, I, E) {
      var j, $, H, Y, X, tt = N[P], nt = E && tt === E.value, lt = nt && typeof E.source == "string" ? { source: E.source } : {};
      if (f(tt)) {
        var ht = g(tt), gt = nt ? E.nodes : ht ? [] : {};
        if (ht)
          for (j = gt.length, H = _(tt), Y = 0; Y < H; Y++)
            S(tt, Y, v(tt, "" + Y, I, Y < j ? gt[Y] : void 0));
        else
          for ($ = R(tt), H = _($), Y = 0; Y < H; Y++)
            X = $[Y], S(tt, X, v(tt, X, I, x(gt, X) ? gt[X] : void 0));
      }
      return h(I, N, P, tt, lt);
    }, S = function(N, P, I) {
      if (r) {
        var E = k(N, P);
        if (E && !E.configurable)
          return;
      }
      I === void 0 ? delete N[P] : M(N, P, I);
    }, D = function(N, P, I, E) {
      this.value = N, this.end = P, this.source = I, this.nodes = E;
    }, q = function(N, P) {
      this.source = N, this.index = P;
    };
    q.prototype = { fork: function(N) {
      return new q(this.source, N);
    }, parse: function() {
      var N = this.source, P = this.skip(u, this.index), I = this.fork(P), E = d(N, P);
      if (F(U, E))
        return I.number();
      switch (E) {
        case "{":
          return I.object();
        case "[":
          return I.array();
        case '"':
          return I.string();
        case "t":
          return I.keyword(!0);
        case "f":
          return I.keyword(!1);
        case "n":
          return I.keyword(null);
      }
      throw p('Unexpected character: "' + E + '" at: ' + P);
    }, node: function(N, P, I, E, j) {
      return new D(P, E, N ? null : L(this.source, I, E), j);
    }, object: function() {
      for (var N = this.source, P = this.index + 1, I = !1, E = {}, j = {}; P < N.length; ) {
        if (P = this.until(['"', "}"], P), d(N, P) === "}" && !I) {
          P++;
          break;
        }
        var $ = this.fork(P).string(), H = $.value;
        P = $.end, P = this.until([":"], P) + 1, P = this.skip(u, P), $ = this.fork(P).parse(), M(j, H, $), M(E, H, $.value), P = this.until([",", "}"], $.end);
        var Y = d(N, P);
        if (Y === ",")
          I = !0, P++;
        else if (Y === "}") {
          P++;
          break;
        }
      }
      return this.node(1, E, this.index, P, j);
    }, array: function() {
      for (var N = this.source, P = this.index + 1, I = !1, E = [], j = []; P < N.length; ) {
        if (P = this.skip(u, P), d(N, P) === "]" && !I) {
          P++;
          break;
        }
        var $ = this.fork(P).parse();
        if (V(j, $), V(E, $.value), P = this.until([",", "]"], $.end), d(N, P) === ",")
          I = !0, P++;
        else if (d(N, P) === "]") {
          P++;
          break;
        }
      }
      return this.node(1, E, this.index, P, j);
    }, string: function() {
      var N = this.index, P = W(this.source, this.index + 1);
      return this.node(0, P.value, N, P.end);
    }, number: function() {
      var N = this.source, P = this.index, I = P;
      if (d(N, I) === "-" && I++, d(N, I) === "0")
        I++;
      else {
        if (!F(B, d(N, I)))
          throw p("Failed to parse number at: " + I);
        I = this.skip(Z, ++I);
      }
      if (d(N, I) === "." && (I = this.skip(Z, ++I)), (d(N, I) === "e" || d(N, I) === "E") && (I++, d(N, I) !== "+" && d(N, I) !== "-" || I++, I === (I = this.skip(Z, I))))
        throw p("Failed to parse number's exponent value at: " + I);
      return this.node(0, i(L(N, P, I)), P, I);
    }, keyword: function(N) {
      var P = "" + N, I = this.index, E = I + P.length;
      if (L(this.source, I, E) !== P)
        throw p("Failed to parse value at: " + I);
      return this.node(0, N, I, E);
    }, skip: function(N, P) {
      for (var I = this.source; P < I.length && F(N, d(I, P)); P++)
        ;
      return P;
    }, until: function(N, P) {
      P = this.skip(u, P);
      for (var I = d(this.source, P), E = 0; E < N.length; E++)
        if (N[E] === I)
          return P;
      throw p('Unexpected character: "' + I + '" at: ' + P);
    } };
    var J = O(function() {
      var N, P = "9007199254740993";
      return T(P, function(I, E, j) {
        N = j.source;
      }), N !== P;
    }), z = w && !O(function() {
      return 1 / T("-0 	") != -1 / 0;
    });
    e({ target: "JSON", stat: !0, forced: J }, { parse: function(P, I) {
      return z && !a(I) ? T(P) : function(E, j) {
        E = b(E);
        var $ = new q(E, 0, ""), H = $.parse(), Y = H.value, X = $.skip(u, H.end);
        if (X < E.length)
          throw p('Unexpected extra character: "' + d(E, X) + '" after the parsed data at: ' + X);
        return a(j) ? v({ "": Y }, "", j, H) : Y;
      }(P, I);
    } });
  }, (C, o, t) => {
    var e = t(14), r = t(39), l = SyntaxError, m = parseInt, y = String.fromCharCode, h = e("".charAt), a = e("".slice), f = e(/./.exec), g = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": `
`, "\\r": "\r", "\\t": "	" }, x = /^[\da-f]{4}$/i, b = /^[\u0000-\u001F]$/;
    C.exports = function(_, M) {
      for (var O = !0, W = ""; M < _.length; ) {
        var w = h(_, M);
        if (w === "\\") {
          var n = a(_, M, M + 2);
          if (r(g, n))
            W += g[n], M += 2;
          else {
            if (n !== "\\u")
              throw l('Unknown escape sequence: "' + n + '"');
            var i = a(_, M += 2, M + 4);
            if (!f(x, i))
              throw l("Bad Unicode escape at: " + M);
            W += y(m(i, 16)), M += 4;
          }
        } else {
          if (w === '"') {
            O = !1, M++;
            break;
          }
          if (f(b, w))
            throw l("Bad control character in string literal at: " + M);
          W += w, M++;
        }
      }
      if (O)
        throw l("Unterminated string at: " + M);
      return { value: W, end: M };
    };
  }, (C, o, t) => {
    var i, p, T, R, k, d, L, F, V, Z, B, U, he, v, de, D, Ke, J, Ee, N, Ce, I, ve, j, be;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.StatTimer = o.RenderingCancelledException = o.PixelsPerInch = o.PageViewport = o.PDFDateString = o.DOMStandardFontDataFactory = o.DOMSVGFactory = o.DOMFilterFactory = o.DOMCanvasFactory = o.DOMCMapReaderFactory = void 0, o.deprecated = function(Y) {
      console.log("Deprecated API usage: " + Y);
    }, o.getColorValues = function(Y) {
      const X = document.createElement("span");
      X.style.visibility = "hidden", document.body.append(X);
      for (const tt of Y.keys()) {
        X.style.color = tt;
        const nt = window.getComputedStyle(X).color;
        Y.set(tt, w(nt));
      }
      X.remove();
    }, o.getCurrentTransform = function(Y) {
      const { a: X, b: tt, c: nt, d: lt, e: ht, f: gt } = Y.getTransform();
      return [X, tt, nt, lt, ht, gt];
    }, o.getCurrentTransformInverse = function(Y) {
      const { a: X, b: tt, c: nt, d: lt, e: ht, f: gt } = Y.getTransform().invertSelf();
      return [X, tt, nt, lt, ht, gt];
    }, o.getFilenameFromUrl = function(Y) {
      return arguments.length > 1 && arguments[1] !== void 0 && arguments[1] || ([Y] = Y.split(/[#?]/, 1)), Y.substring(Y.lastIndexOf("/") + 1);
    }, o.getPdfFilenameFromUrl = function(Y) {
      let X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "document.pdf";
      if (typeof Y != "string")
        return X;
      if (M(Y))
        return (0, r.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), X;
      const tt = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, nt = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(Y);
      let lt = tt.exec(nt[1]) || tt.exec(nt[2]) || tt.exec(nt[3]);
      if (lt && (lt = lt[0], lt.includes("%")))
        try {
          lt = tt.exec(decodeURIComponent(lt))[0];
        } catch {
        }
      return lt || X;
    }, o.getRGB = w, o.getXfaPageViewport = function(Y, X) {
      let { scale: tt = 1, rotation: nt = 0 } = X;
      const { width: lt, height: ht } = Y.attributes.style, gt = [0, 0, parseInt(lt), parseInt(ht)];
      return new b({ viewBox: gt, scale: tt, rotation: nt });
    }, o.isDataScheme = M, o.isPdfFile = function(Y) {
      return typeof Y == "string" && /\.pdf$/i.test(Y);
    }, o.isValidFetchUrl = O, o.loadScript = function(Y) {
      let X = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      return new Promise((tt, nt) => {
        const lt = document.createElement("script");
        lt.src = Y, lt.onload = function(ht) {
          X && lt.remove(), tt(ht);
        }, lt.onerror = function() {
          nt(new Error(`Cannot load script at: ${lt.src}`));
        }, (document.head || document.documentElement).append(lt);
      });
    }, o.noContextMenu = function(Y) {
      Y.preventDefault();
    }, o.setLayerDimensions = function(Y, X) {
      let tt = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], nt = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
      if (X instanceof b) {
        const { pageWidth: lt, pageHeight: ht } = X.rawDims, { style: gt } = Y, St = r.FeatureTest.isCSSRoundSupported, ft = `var(--scale-factor) * ${lt}px`, bt = `var(--scale-factor) * ${ht}px`, wt = St ? `round(${ft}, 1px)` : `calc(${ft})`, yt = St ? `round(${bt}, 1px)` : `calc(${bt})`;
        tt && X.rotation % 180 != 0 ? (gt.width = yt, gt.height = wt) : (gt.width = wt, gt.height = yt);
      }
      nt && Y.setAttribute("data-main-rotation", X.rotation);
    }, t(2), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89), t(84), t(86), t(87);
    var e = t(169), r = t(1);
    const l = "http://www.w3.org/2000/svg", n = class n {
    };
    Yt(n, "CSS", 96), Yt(n, "PDF", 72), Yt(n, "PDF_TO_CSS_UNITS", n.CSS / n.PDF);
    let m = n;
    o.PixelsPerInch = m;
    class y extends e.BaseFilterFactory {
      constructor() {
        let { docId: X, ownerDocument: tt = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super();
        K(this, U);
        K(this, v);
        K(this, D);
        K(this, J);
        K(this, N);
        K(this, I);
        K(this, j);
        K(this, i, void 0);
        K(this, p, void 0);
        K(this, T, void 0);
        K(this, R, void 0);
        K(this, k, void 0);
        K(this, d, void 0);
        K(this, L, void 0);
        K(this, F, void 0);
        K(this, V, void 0);
        K(this, Z, void 0);
        K(this, B, 0);
        at(this, T, X), at(this, R, tt);
      }
      addFilter(X) {
        if (!X)
          return "none";
        let tt, nt, lt, ht, gt = s(this, U, he).get(X);
        if (gt)
          return gt;
        if (X.length === 1) {
          const wt = X[0], yt = new Array(256);
          for (let Et = 0; Et < 256; Et++)
            yt[Et] = wt[Et] / 255;
          ht = tt = nt = lt = yt.join(",");
        } else {
          const [wt, yt, Et] = X, Ft = new Array(256), It = new Array(256), Nt = new Array(256);
          for (let Bt = 0; Bt < 256; Bt++)
            Ft[Bt] = wt[Bt] / 255, It[Bt] = yt[Bt] / 255, Nt[Bt] = Et[Bt] / 255;
          tt = Ft.join(","), nt = It.join(","), lt = Nt.join(","), ht = `${tt}${nt}${lt}`;
        }
        if (gt = s(this, U, he).get(ht), gt)
          return s(this, U, he).set(X, gt), gt;
        const St = `g_${s(this, T)}_transfer_map_${fe(this, B)._++}`, ft = `url(#${St})`;
        s(this, U, he).set(X, ft), s(this, U, he).set(ht, ft);
        const bt = rt(this, J, Ee).call(this, St);
        return rt(this, I, ve).call(this, tt, nt, lt, bt), ft;
      }
      addHCMFilter(X, tt) {
        var yt;
        const nt = `${X}-${tt}`;
        if (s(this, d) === nt)
          return s(this, L);
        if (at(this, d, nt), at(this, L, "none"), (yt = s(this, k)) == null || yt.remove(), !X || !tt)
          return s(this, L);
        const lt = rt(this, j, be).call(this, X);
        X = r.Util.makeHexColor(...lt);
        const ht = rt(this, j, be).call(this, tt);
        if (tt = r.Util.makeHexColor(...ht), s(this, v, de).style.color = "", X === "#000000" && tt === "#ffffff" || X === tt)
          return s(this, L);
        const gt = new Array(256);
        for (let Et = 0; Et <= 255; Et++) {
          const Ft = Et / 255;
          gt[Et] = Ft <= 0.03928 ? Ft / 12.92 : ((Ft + 0.055) / 1.055) ** 2.4;
        }
        const St = gt.join(","), ft = `g_${s(this, T)}_hcm_filter`, bt = at(this, F, rt(this, J, Ee).call(this, ft));
        rt(this, I, ve).call(this, St, St, St, bt), rt(this, D, Ke).call(this, bt);
        const wt = (Et, Ft) => {
          const It = lt[Et] / 255, Nt = ht[Et] / 255, Bt = new Array(Ft + 1);
          for (let Kt = 0; Kt <= Ft; Kt++)
            Bt[Kt] = It + Kt / Ft * (Nt - It);
          return Bt.join(",");
        };
        return rt(this, I, ve).call(this, wt(0, 5), wt(1, 5), wt(2, 5), bt), at(this, L, `url(#${ft})`), s(this, L);
      }
      addHighlightHCMFilter(X, tt, nt, lt) {
        var Nt;
        const ht = `${X}-${tt}-${nt}-${lt}`;
        if (s(this, V) === ht)
          return s(this, Z);
        if (at(this, V, ht), at(this, Z, "none"), (Nt = s(this, F)) == null || Nt.remove(), !X || !tt)
          return s(this, Z);
        const [gt, St] = [X, tt].map(rt(this, j, be).bind(this));
        let ft = Math.round(0.2126 * gt[0] + 0.7152 * gt[1] + 0.0722 * gt[2]), bt = Math.round(0.2126 * St[0] + 0.7152 * St[1] + 0.0722 * St[2]), [wt, yt] = [nt, lt].map(rt(this, j, be).bind(this));
        bt < ft && ([ft, bt, wt, yt] = [bt, ft, yt, wt]), s(this, v, de).style.color = "";
        const Et = (Bt, Kt, te) => {
          const Gt = new Array(256), ee = (bt - ft) / te, Vt = Bt / 255, Zt = (Kt - Bt) / (255 * te);
          let $t = 0;
          for (let Qt = 0; Qt <= te; Qt++) {
            const zt = Math.round(ft + Qt * ee), Jt = Vt + Qt * Zt;
            for (let qt = $t; qt <= zt; qt++)
              Gt[qt] = Jt;
            $t = zt + 1;
          }
          for (let Qt = $t; Qt < 256; Qt++)
            Gt[Qt] = Gt[$t - 1];
          return Gt.join(",");
        }, Ft = `g_${s(this, T)}_hcm_highlight_filter`, It = at(this, F, rt(this, J, Ee).call(this, Ft));
        return rt(this, D, Ke).call(this, It), rt(this, I, ve).call(this, Et(wt[0], yt[0], 5), Et(wt[1], yt[1], 5), Et(wt[2], yt[2], 5), It), at(this, Z, `url(#${Ft})`), s(this, Z);
      }
      destroy() {
        (!(arguments.length > 0 && arguments[0] !== void 0 && arguments[0]) || !s(this, L) && !s(this, Z)) && (s(this, p) && (s(this, p).parentNode.parentNode.remove(), at(this, p, null)), s(this, i) && (s(this, i).clear(), at(this, i, null)), at(this, B, 0));
      }
    }
    i = new WeakMap(), p = new WeakMap(), T = new WeakMap(), R = new WeakMap(), k = new WeakMap(), d = new WeakMap(), L = new WeakMap(), F = new WeakMap(), V = new WeakMap(), Z = new WeakMap(), B = new WeakMap(), U = new WeakSet(), he = function() {
      return s(this, i) || at(this, i, /* @__PURE__ */ new Map());
    }, v = new WeakSet(), de = function() {
      if (!s(this, p)) {
        const X = s(this, R).createElement("div"), { style: tt } = X;
        tt.visibility = "hidden", tt.contain = "strict", tt.width = tt.height = 0, tt.position = "absolute", tt.top = tt.left = 0, tt.zIndex = -1;
        const nt = s(this, R).createElementNS(l, "svg");
        nt.setAttribute("width", 0), nt.setAttribute("height", 0), at(this, p, s(this, R).createElementNS(l, "defs")), X.append(nt), nt.append(s(this, p)), s(this, R).body.append(X);
      }
      return s(this, p);
    }, D = new WeakSet(), Ke = function(X) {
      const tt = s(this, R).createElementNS(l, "feColorMatrix");
      tt.setAttribute("type", "matrix"), tt.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), X.append(tt);
    }, J = new WeakSet(), Ee = function(X) {
      const tt = s(this, R).createElementNS(l, "filter");
      return tt.setAttribute("color-interpolation-filters", "sRGB"), tt.setAttribute("id", X), s(this, v, de).append(tt), tt;
    }, N = new WeakSet(), Ce = function(X, tt, nt) {
      const lt = s(this, R).createElementNS(l, tt);
      lt.setAttribute("type", "discrete"), lt.setAttribute("tableValues", nt), X.append(lt);
    }, I = new WeakSet(), ve = function(X, tt, nt, lt) {
      const ht = s(this, R).createElementNS(l, "feComponentTransfer");
      lt.append(ht), rt(this, N, Ce).call(this, ht, "feFuncR", X), rt(this, N, Ce).call(this, ht, "feFuncG", tt), rt(this, N, Ce).call(this, ht, "feFuncB", nt);
    }, j = new WeakSet(), be = function(X) {
      return s(this, v, de).style.color = X, w(getComputedStyle(s(this, v, de)).getPropertyValue("color"));
    }, o.DOMFilterFactory = y;
    class h extends e.BaseCanvasFactory {
      constructor() {
        let { ownerDocument: Y = globalThis.document } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        super(), this._document = Y;
      }
      _createCanvas(Y, X) {
        const tt = this._document.createElement("canvas");
        return tt.width = Y, tt.height = X, tt;
      }
    }
    o.DOMCanvasFactory = h;
    async function a(H) {
      let Y = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      if (O(H, document.baseURI)) {
        const X = await fetch(H);
        if (!X.ok)
          throw new Error(X.statusText);
        return Y ? new Uint8Array(await X.arrayBuffer()) : (0, r.stringToBytes)(await X.text());
      }
      return new Promise((X, tt) => {
        const nt = new XMLHttpRequest();
        nt.open("GET", H, !0), Y && (nt.responseType = "arraybuffer"), nt.onreadystatechange = () => {
          if (nt.readyState === XMLHttpRequest.DONE) {
            if (nt.status === 200 || nt.status === 0) {
              let lt;
              if (Y && nt.response ? lt = new Uint8Array(nt.response) : !Y && nt.responseText && (lt = (0, r.stringToBytes)(nt.responseText)), lt) {
                X(lt);
                return;
              }
            }
            tt(new Error(nt.statusText));
          }
        }, nt.send(null);
      });
    }
    class f extends e.BaseCMapReaderFactory {
      _fetchData(Y, X) {
        return a(Y, this.isCompressed).then((tt) => ({ cMapData: tt, compressionType: X }));
      }
    }
    o.DOMCMapReaderFactory = f;
    class g extends e.BaseStandardFontDataFactory {
      _fetchData(Y) {
        return a(Y, !0);
      }
    }
    o.DOMStandardFontDataFactory = g;
    class x extends e.BaseSVGFactory {
      _createSVG(Y) {
        return document.createElementNS(l, Y);
      }
    }
    o.DOMSVGFactory = x;
    class b {
      constructor(Y) {
        let { viewBox: X, scale: tt, rotation: nt, offsetX: lt = 0, offsetY: ht = 0, dontFlip: gt = !1 } = Y;
        this.viewBox = X, this.scale = tt, this.rotation = nt, this.offsetX = lt, this.offsetY = ht;
        const St = (X[2] + X[0]) / 2, ft = (X[3] + X[1]) / 2;
        let bt, wt, yt, Et, Ft, It, Nt, Bt;
        switch (nt %= 360, nt < 0 && (nt += 360), nt) {
          case 180:
            bt = -1, wt = 0, yt = 0, Et = 1;
            break;
          case 90:
            bt = 0, wt = 1, yt = 1, Et = 0;
            break;
          case 270:
            bt = 0, wt = -1, yt = -1, Et = 0;
            break;
          case 0:
            bt = 1, wt = 0, yt = 0, Et = -1;
            break;
          default:
            throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
        }
        gt && (yt = -yt, Et = -Et), bt === 0 ? (Ft = Math.abs(ft - X[1]) * tt + lt, It = Math.abs(St - X[0]) * tt + ht, Nt = (X[3] - X[1]) * tt, Bt = (X[2] - X[0]) * tt) : (Ft = Math.abs(St - X[0]) * tt + lt, It = Math.abs(ft - X[1]) * tt + ht, Nt = (X[2] - X[0]) * tt, Bt = (X[3] - X[1]) * tt), this.transform = [bt * tt, wt * tt, yt * tt, Et * tt, Ft - bt * tt * St - yt * tt * ft, It - wt * tt * St - Et * tt * ft], this.width = Nt, this.height = Bt;
      }
      get rawDims() {
        const { viewBox: Y } = this;
        return (0, r.shadow)(this, "rawDims", { pageWidth: Y[2] - Y[0], pageHeight: Y[3] - Y[1], pageX: Y[0], pageY: Y[1] });
      }
      clone() {
        let { scale: Y = this.scale, rotation: X = this.rotation, offsetX: tt = this.offsetX, offsetY: nt = this.offsetY, dontFlip: lt = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return new b({ viewBox: this.viewBox.slice(), scale: Y, rotation: X, offsetX: tt, offsetY: nt, dontFlip: lt });
      }
      convertToViewportPoint(Y, X) {
        return r.Util.applyTransform([Y, X], this.transform);
      }
      convertToViewportRectangle(Y) {
        const X = r.Util.applyTransform([Y[0], Y[1]], this.transform), tt = r.Util.applyTransform([Y[2], Y[3]], this.transform);
        return [X[0], X[1], tt[0], tt[1]];
      }
      convertToPdfPoint(Y, X) {
        return r.Util.applyInverseTransform([Y, X], this.transform);
      }
    }
    o.PageViewport = b;
    class _ extends r.BaseException {
      constructor(Y) {
        let X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        super(Y, "RenderingCancelledException"), this.extraDelay = X;
      }
    }
    o.RenderingCancelledException = _;
    function M(H) {
      const Y = H.length;
      let X = 0;
      for (; X < Y && H[X].trim() === ""; )
        X++;
      return H.substring(X, X + 5).toLowerCase() === "data:";
    }
    o.StatTimer = class {
      constructor() {
        Yt(this, "started", /* @__PURE__ */ Object.create(null));
        Yt(this, "times", []);
      }
      time(Y) {
        Y in this.started && (0, r.warn)(`Timer is already running for ${Y}`), this.started[Y] = Date.now();
      }
      timeEnd(Y) {
        Y in this.started || (0, r.warn)(`Timer has not been started for ${Y}`), this.times.push({ name: Y, start: this.started[Y], end: Date.now() }), delete this.started[Y];
      }
      toString() {
        const Y = [];
        let X = 0;
        for (const { name: tt } of this.times)
          X = Math.max(tt.length, X);
        for (const { name: tt, start: nt, end: lt } of this.times)
          Y.push(`${tt.padEnd(X)} ${lt - nt}ms
`);
        return Y.join("");
      }
    };
    function O(H, Y) {
      try {
        const { protocol: X } = Y ? new URL(H, Y) : new URL(H);
        return X === "http:" || X === "https:";
      } catch {
        return !1;
      }
    }
    let W;
    o.PDFDateString = class {
      static toDateObject(Y) {
        if (!Y || typeof Y != "string")
          return null;
        W || (W = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
        const X = W.exec(Y);
        if (!X)
          return null;
        const tt = parseInt(X[1], 10);
        let nt = parseInt(X[2], 10);
        nt = nt >= 1 && nt <= 12 ? nt - 1 : 0;
        let lt = parseInt(X[3], 10);
        lt = lt >= 1 && lt <= 31 ? lt : 1;
        let ht = parseInt(X[4], 10);
        ht = ht >= 0 && ht <= 23 ? ht : 0;
        let gt = parseInt(X[5], 10);
        gt = gt >= 0 && gt <= 59 ? gt : 0;
        let St = parseInt(X[6], 10);
        St = St >= 0 && St <= 59 ? St : 0;
        const ft = X[7] || "Z";
        let bt = parseInt(X[8], 10);
        bt = bt >= 0 && bt <= 23 ? bt : 0;
        let wt = parseInt(X[9], 10) || 0;
        return wt = wt >= 0 && wt <= 59 ? wt : 0, ft === "-" ? (ht += bt, gt += wt) : ft === "+" && (ht -= bt, gt -= wt), new Date(Date.UTC(tt, nt, lt, ht, gt, St));
      }
    };
    function w(H) {
      if (H.startsWith("#")) {
        const Y = parseInt(H.slice(1), 16);
        return [(16711680 & Y) >> 16, (65280 & Y) >> 8, 255 & Y];
      }
      return H.startsWith("rgb(") ? H.slice(4, -1).split(",").map((Y) => parseInt(Y)) : H.startsWith("rgba(") ? H.slice(5, -1).split(",").map((Y) => parseInt(Y)).slice(0, 3) : ((0, r.warn)(`Not a valid color format: "${H}"`), [0, 0, 0]);
    }
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.BaseStandardFontDataFactory = o.BaseSVGFactory = o.BaseFilterFactory = o.BaseCanvasFactory = o.BaseCMapReaderFactory = void 0, t(2);
    var e = t(1);
    class r {
      constructor() {
        this.constructor === r && (0, e.unreachable)("Cannot initialize BaseFilterFactory.");
      }
      addFilter(f) {
        return "none";
      }
      addHCMFilter(f, g) {
        return "none";
      }
      addHighlightHCMFilter(f, g, x, b) {
        return "none";
      }
      destroy() {
      }
    }
    o.BaseFilterFactory = r;
    class l {
      constructor() {
        this.constructor === l && (0, e.unreachable)("Cannot initialize BaseCanvasFactory.");
      }
      create(f, g) {
        if (f <= 0 || g <= 0)
          throw new Error("Invalid canvas size");
        const x = this._createCanvas(f, g);
        return { canvas: x, context: x.getContext("2d") };
      }
      reset(f, g, x) {
        if (!f.canvas)
          throw new Error("Canvas is not specified");
        if (g <= 0 || x <= 0)
          throw new Error("Invalid canvas size");
        f.canvas.width = g, f.canvas.height = x;
      }
      destroy(f) {
        if (!f.canvas)
          throw new Error("Canvas is not specified");
        f.canvas.width = 0, f.canvas.height = 0, f.canvas = null, f.context = null;
      }
      _createCanvas(f, g) {
        (0, e.unreachable)("Abstract method `_createCanvas` called.");
      }
    }
    o.BaseCanvasFactory = l;
    class m {
      constructor(f) {
        let { baseUrl: g = null, isCompressed: x = !0 } = f;
        this.constructor === m && (0, e.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = g, this.isCompressed = x;
      }
      async fetch(f) {
        let { name: g } = f;
        if (!this.baseUrl)
          throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
        if (!g)
          throw new Error("CMap name must be specified.");
        const x = this.baseUrl + g + (this.isCompressed ? ".bcmap" : ""), b = this.isCompressed ? e.CMapCompressionType.BINARY : e.CMapCompressionType.NONE;
        return this._fetchData(x, b).catch((_) => {
          throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${x}`);
        });
      }
      _fetchData(f, g) {
        (0, e.unreachable)("Abstract method `_fetchData` called.");
      }
    }
    o.BaseCMapReaderFactory = m;
    class y {
      constructor(f) {
        let { baseUrl: g = null } = f;
        this.constructor === y && (0, e.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = g;
      }
      async fetch(f) {
        let { filename: g } = f;
        if (!this.baseUrl)
          throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
        if (!g)
          throw new Error("Font filename must be specified.");
        const x = `${this.baseUrl}${g}`;
        return this._fetchData(x).catch((b) => {
          throw new Error(`Unable to load font data at: ${x}`);
        });
      }
      _fetchData(f) {
        (0, e.unreachable)("Abstract method `_fetchData` called.");
      }
    }
    o.BaseStandardFontDataFactory = y;
    class h {
      constructor() {
        this.constructor === h && (0, e.unreachable)("Cannot initialize BaseSVGFactory.");
      }
      create(f, g) {
        let x = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        if (f <= 0 || g <= 0)
          throw new Error("Invalid SVG dimensions");
        const b = this._createSVG("svg:svg");
        return b.setAttribute("version", "1.1"), x || (b.setAttribute("width", `${f}px`), b.setAttribute("height", `${g}px`)), b.setAttribute("preserveAspectRatio", "none"), b.setAttribute("viewBox", `0 0 ${f} ${g}`), b;
      }
      createElement(f) {
        if (typeof f != "string")
          throw new Error("Invalid SVG element type");
        return this._createSVG(f);
      }
      _createSVG(f) {
        (0, e.unreachable)("Abstract method `_createSVG` called.");
      }
    }
    o.BaseSVGFactory = h;
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.MurmurHash3_64 = void 0, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(2);
    var e = t(1);
    const r = 3285377520, l = 4294901760, m = 65535;
    o.MurmurHash3_64 = class {
      constructor(h) {
        this.h1 = h ? 4294967295 & h : r, this.h2 = h ? 4294967295 & h : r;
      }
      update(h) {
        let a, f;
        if (typeof h == "string") {
          a = new Uint8Array(2 * h.length), f = 0;
          for (let T = 0, R = h.length; T < R; T++) {
            const k = h.charCodeAt(T);
            k <= 255 ? a[f++] = k : (a[f++] = k >>> 8, a[f++] = 255 & k);
          }
        } else {
          if (!(0, e.isArrayBuffer)(h))
            throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
          a = h.slice(), f = a.byteLength;
        }
        const g = f >> 2, x = f - 4 * g, b = new Uint32Array(a.buffer, 0, g);
        let _ = 0, M = 0, O = this.h1, W = this.h2;
        const w = 3432918353, n = 461845907, i = 11601, p = 13715;
        for (let T = 0; T < g; T++)
          1 & T ? (_ = b[T], _ = _ * w & l | _ * i & m, _ = _ << 15 | _ >>> 17, _ = _ * n & l | _ * p & m, O ^= _, O = O << 13 | O >>> 19, O = 5 * O + 3864292196) : (M = b[T], M = M * w & l | M * i & m, M = M << 15 | M >>> 17, M = M * n & l | M * p & m, W ^= M, W = W << 13 | W >>> 19, W = 5 * W + 3864292196);
        switch (_ = 0, x) {
          case 3:
            _ ^= a[4 * g + 2] << 16;
          case 2:
            _ ^= a[4 * g + 1] << 8;
          case 1:
            _ ^= a[4 * g], _ = _ * w & l | _ * i & m, _ = _ << 15 | _ >>> 17, _ = _ * n & l | _ * p & m, 1 & g ? O ^= _ : W ^= _;
        }
        this.h1 = O, this.h2 = W;
      }
      hexdigest() {
        let h = this.h1, a = this.h2;
        return h ^= a >>> 1, h = 3981806797 * h & l | 36045 * h & m, a = 4283543511 * a & l | (2950163797 * (a << 16 | h >>> 16) & l) >>> 16, h ^= a >>> 1, h = 444984403 * h & l | 60499 * h & m, a = 3301882366 * a & l | (3120437893 * (a << 16 | h >>> 16) & l) >>> 16, h ^= a >>> 1, (h >>> 0).toString(16).padStart(8, "0") + (a >>> 0).toString(16).padStart(8, "0");
      }
    };
  }, (C, o, t) => {
    var r, l;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.FontLoader = o.FontFaceObject = void 0, t(125), t(136), t(138), t(141), t(143), t(145), t(147), t(89), t(149);
    var e = t(1);
    o.FontLoader = (l = class {
      constructor(y) {
        K(this, r, /* @__PURE__ */ new Set());
        let { ownerDocument: h = globalThis.document, styleElement: a = null } = y;
        this._document = h, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
      }
      addNativeFontFace(y) {
        this.nativeFontFaces.add(y), this._document.fonts.add(y);
      }
      removeNativeFontFace(y) {
        this.nativeFontFaces.delete(y), this._document.fonts.delete(y);
      }
      insertRule(y) {
        this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
        const h = this.styleElement.sheet;
        h.insertRule(y, h.cssRules.length);
      }
      clear() {
        for (const y of this.nativeFontFaces)
          this._document.fonts.delete(y);
        this.nativeFontFaces.clear(), s(this, r).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
      }
      async loadSystemFont(y) {
        if (y && !s(this, r).has(y.loadedName))
          if ((0, e.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
            const { loadedName: h, src: a, style: f } = y, g = new FontFace(h, a, f);
            this.addNativeFontFace(g);
            try {
              await g.load(), s(this, r).add(h);
            } catch {
              (0, e.warn)(`Cannot load system font: ${y.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(g);
            }
          } else
            (0, e.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
      }
      async bind(y) {
        if (y.attached || y.missingFile && !y.systemFontInfo)
          return;
        if (y.attached = !0, y.systemFontInfo) {
          await this.loadSystemFont(y.systemFontInfo);
          return;
        }
        if (this.isFontLoadingAPISupported) {
          const a = y.createNativeFontFace();
          if (a) {
            this.addNativeFontFace(a);
            try {
              await a.loaded;
            } catch (f) {
              throw (0, e.warn)(`Failed to load font '${a.family}': '${f}'.`), y.disableFontFace = !0, f;
            }
          }
          return;
        }
        const h = y.createFontFaceRule();
        if (h) {
          if (this.insertRule(h), this.isSyncFontLoadingSupported)
            return;
          await new Promise((a) => {
            const f = this._queueLoadingCallback(a);
            this._prepareFontLoadEvent(y, f);
          });
        }
      }
      get isFontLoadingAPISupported() {
        var h;
        const y = !!((h = this._document) != null && h.fonts);
        return (0, e.shadow)(this, "isFontLoadingAPISupported", y);
      }
      get isSyncFontLoadingSupported() {
        let y = !1;
        return (e.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (y = !0), (0, e.shadow)(this, "isSyncFontLoadingSupported", y);
      }
      _queueLoadingCallback(y) {
        const { loadingRequests: h } = this, a = { done: !1, complete: function() {
          for ((0, e.assert)(!a.done, "completeRequest() cannot be called twice."), a.done = !0; h.length > 0 && h[0].done; ) {
            const g = h.shift();
            setTimeout(g.callback, 0);
          }
        }, callback: y };
        return h.push(a), a;
      }
      get _loadTestFont() {
        const y = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
        return (0, e.shadow)(this, "_loadTestFont", y);
      }
      _prepareFontLoadEvent(y, h) {
        function a(T, R) {
          return T.charCodeAt(R) << 24 | T.charCodeAt(R + 1) << 16 | T.charCodeAt(R + 2) << 8 | 255 & T.charCodeAt(R + 3);
        }
        function f(T, R, k, d) {
          return T.substring(0, R) + d + T.substring(R + k);
        }
        let g, x;
        const b = this._document.createElement("canvas");
        b.width = 1, b.height = 1;
        const _ = b.getContext("2d");
        let M = 0;
        const O = `lt${Date.now()}${this.loadTestFontId++}`;
        let W = this._loadTestFont;
        W = f(W, 976, O.length, O);
        const w = 1482184792;
        let n = a(W, 16);
        for (g = 0, x = O.length - 3; g < x; g += 4)
          n = n - w + a(O, g) | 0;
        g < O.length && (n = n - w + a(O + "XXX", g) | 0), W = f(W, 16, 4, (0, e.string32)(n));
        const i = `@font-face {font-family:"${O}";src:${`url(data:font/opentype;base64,${btoa(W)});`}}`;
        this.insertRule(i);
        const p = this._document.createElement("div");
        p.style.visibility = "hidden", p.style.width = p.style.height = "10px", p.style.position = "absolute", p.style.top = p.style.left = "0px";
        for (const T of [y.loadedName, O]) {
          const R = this._document.createElement("span");
          R.textContent = "Hi", R.style.fontFamily = T, p.append(R);
        }
        this._document.body.append(p), function T(R, k) {
          if (++M > 30) {
            (0, e.warn)("Load test font never loaded."), k();
            return;
          }
          _.font = "30px " + R, _.fillText(".", 0, 20), _.getImageData(0, 0, 1, 1).data[3] > 0 ? k() : setTimeout(T.bind(null, R, k));
        }(O, () => {
          p.remove(), h.complete();
        });
      }
    }, r = new WeakMap(), l), o.FontFaceObject = class {
      constructor(y, h) {
        let { isEvalSupported: a = !0, disableFontFace: f = !1, ignoreErrors: g = !1, inspectFont: x = null } = h;
        this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
        for (const b in y)
          this[b] = y[b];
        this.isEvalSupported = a !== !1, this.disableFontFace = f === !0, this.ignoreErrors = g === !0, this._inspectFont = x;
      }
      createNativeFontFace() {
        var h;
        if (!this.data || this.disableFontFace)
          return null;
        let y;
        if (this.cssFontInfo) {
          const a = { weight: this.cssFontInfo.fontWeight };
          this.cssFontInfo.italicAngle && (a.style = `oblique ${this.cssFontInfo.italicAngle}deg`), y = new FontFace(this.cssFontInfo.fontFamily, this.data, a);
        } else
          y = new FontFace(this.loadedName, this.data, {});
        return (h = this._inspectFont) == null || h.call(this, this), y;
      }
      createFontFaceRule() {
        var f;
        if (!this.data || this.disableFontFace)
          return null;
        const y = (0, e.bytesToString)(this.data), h = `url(data:${this.mimetype};base64,${btoa(y)});`;
        let a;
        if (this.cssFontInfo) {
          let g = `font-weight: ${this.cssFontInfo.fontWeight};`;
          this.cssFontInfo.italicAngle && (g += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), a = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${g}src:${h}}`;
        } else
          a = `@font-face {font-family:"${this.loadedName}";src:${h}}`;
        return (f = this._inspectFont) == null || f.call(this, this, h), a;
      }
      getPathGenerator(y, h) {
        if (this.compiledGlyphs[h] !== void 0)
          return this.compiledGlyphs[h];
        let a;
        try {
          a = y.get(this.loadedName + "_path_" + h);
        } catch (f) {
          if (!this.ignoreErrors)
            throw f;
          return (0, e.warn)(`getPathGenerator - ignoring character: "${f}".`), this.compiledGlyphs[h] = function(g, x) {
          };
        }
        if (this.isEvalSupported && e.FeatureTest.isEvalSupported) {
          const f = [];
          for (const g of a) {
            const x = g.args !== void 0 ? g.args.join(",") : "";
            f.push("c.", g.cmd, "(", x, `);
`);
          }
          return this.compiledGlyphs[h] = new Function("c", "size", f.join(""));
        }
        return this.compiledGlyphs[h] = function(f, g) {
          for (const x of a)
            x.cmd === "scale" && (x.args = [g, -g]), f[x.cmd].apply(f, x.args);
        };
      }
    };
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.NodeStandardFontDataFactory = o.NodeFilterFactory = o.NodeCanvasFactory = o.NodeCMapReaderFactory = void 0, t(2), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
    var e = t(169), r = t(1);
    (function() {
      if (!globalThis.DOMMatrix && r.isNodeJS)
        try {
          globalThis.DOMMatrix = require("canvas").DOMMatrix;
        } catch (g) {
          (0, r.warn)(`Cannot polyfill \`DOMMatrix\`, rendering may be broken: "${g}".`);
        }
    })(), function() {
      if (!globalThis.Path2D && r.isNodeJS)
        try {
          const { CanvasRenderingContext2D: g } = require("canvas"), { polyfillPath2D: x } = require("path2d-polyfill");
          globalThis.CanvasRenderingContext2D = g, x(globalThis);
        } catch (g) {
          (0, r.warn)(`Cannot polyfill \`Path2D\`, rendering may be broken: "${g}".`);
        }
    }();
    const l = function(f) {
      return new Promise((g, x) => {
        require("fs").readFile(f, (b, _) => {
          !b && _ ? g(new Uint8Array(_)) : x(new Error(b));
        });
      });
    };
    class m extends e.BaseFilterFactory {
    }
    o.NodeFilterFactory = m;
    class y extends e.BaseCanvasFactory {
      _createCanvas(g, x) {
        return require("canvas").createCanvas(g, x);
      }
    }
    o.NodeCanvasFactory = y;
    class h extends e.BaseCMapReaderFactory {
      _fetchData(g, x) {
        return l(g).then((b) => ({ cMapData: b, compressionType: x }));
      }
    }
    o.NodeCMapReaderFactory = h;
    class a extends e.BaseStandardFontDataFactory {
      _fetchData(g) {
        return l(g);
      }
    }
    o.NodeStandardFontDataFactory = a;
  }, (C, o, t) => {
    var L, Je, V, Qe;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.CanvasGraphics = void 0, t(2), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89);
    var e = t(1), r = t(168), l = t(174), m = t(175);
    const y = 4096, h = 16;
    class a {
      constructor(u) {
        this.canvasFactory = u, this.cache = /* @__PURE__ */ Object.create(null);
      }
      getCanvas(u, v, S) {
        let D;
        return this.cache[u] !== void 0 ? (D = this.cache[u], this.canvasFactory.reset(D, v, S)) : (D = this.canvasFactory.create(v, S), this.cache[u] = D), D;
      }
      delete(u) {
        delete this.cache[u];
      }
      clear() {
        for (const u in this.cache) {
          const v = this.cache[u];
          this.canvasFactory.destroy(v), delete this.cache[u];
        }
      }
    }
    function f(U, u, v, S, D, q, J, z, N, P) {
      const [I, E, j, $, H, Y] = (0, r.getCurrentTransform)(U);
      if (E === 0 && j === 0) {
        const X = J * I + H, tt = Math.round(X), nt = z * $ + Y, lt = Math.round(nt), ht = (J + N) * I + H, gt = Math.abs(Math.round(ht) - tt) || 1, St = (z + P) * $ + Y, ft = Math.abs(Math.round(St) - lt) || 1;
        return U.setTransform(Math.sign(I), 0, 0, Math.sign($), tt, lt), U.drawImage(u, v, S, D, q, 0, 0, gt, ft), U.setTransform(I, E, j, $, H, Y), [gt, ft];
      }
      if (I === 0 && $ === 0) {
        const X = z * j + H, tt = Math.round(X), nt = J * E + Y, lt = Math.round(nt), ht = (z + P) * j + H, gt = Math.abs(Math.round(ht) - tt) || 1, St = (J + N) * E + Y, ft = Math.abs(Math.round(St) - lt) || 1;
        return U.setTransform(0, Math.sign(E), Math.sign(j), 0, tt, lt), U.drawImage(u, v, S, D, q, 0, 0, ft, gt), U.setTransform(I, E, j, $, H, Y), [ft, gt];
      }
      return U.drawImage(u, v, S, D, q, J, z, N, P), [Math.hypot(I, E) * N, Math.hypot(j, $) * P];
    }
    class g {
      constructor(u, v) {
        this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = e.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = e.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = e.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, u, v]);
      }
      clone() {
        const u = Object.create(this);
        return u.clipBox = this.clipBox.slice(), u;
      }
      setCurrentPoint(u, v) {
        this.x = u, this.y = v;
      }
      updatePathMinMax(u, v, S) {
        [v, S] = e.Util.applyTransform([v, S], u), this.minX = Math.min(this.minX, v), this.minY = Math.min(this.minY, S), this.maxX = Math.max(this.maxX, v), this.maxY = Math.max(this.maxY, S);
      }
      updateRectMinMax(u, v) {
        const S = e.Util.applyTransform(v, u), D = e.Util.applyTransform(v.slice(2), u);
        this.minX = Math.min(this.minX, S[0], D[0]), this.minY = Math.min(this.minY, S[1], D[1]), this.maxX = Math.max(this.maxX, S[0], D[0]), this.maxY = Math.max(this.maxY, S[1], D[1]);
      }
      updateScalingPathMinMax(u, v) {
        e.Util.scaleMinMax(u, v), this.minX = Math.min(this.minX, v[0]), this.maxX = Math.max(this.maxX, v[1]), this.minY = Math.min(this.minY, v[2]), this.maxY = Math.max(this.maxY, v[3]);
      }
      updateCurvePathMinMax(u, v, S, D, q, J, z, N, P, I) {
        const E = e.Util.bezierBoundingBox(v, S, D, q, J, z, N, P);
        I ? (I[0] = Math.min(I[0], E[0], E[2]), I[1] = Math.max(I[1], E[0], E[2]), I[2] = Math.min(I[2], E[1], E[3]), I[3] = Math.max(I[3], E[1], E[3])) : this.updateRectMinMax(u, E);
      }
      getPathBoundingBox() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l.PathType.FILL, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const S = [this.minX, this.minY, this.maxX, this.maxY];
        if (u === l.PathType.STROKE) {
          v || (0, e.unreachable)("Stroke bounding box must include transform.");
          const D = e.Util.singularValueDecompose2dScale(v), q = D[0] * this.lineWidth / 2, J = D[1] * this.lineWidth / 2;
          S[0] -= q, S[1] -= J, S[2] += q, S[3] += J;
        }
        return S;
      }
      updateClipFromPath() {
        const u = e.Util.intersect(this.clipBox, this.getPathBoundingBox());
        this.startNewPathAndClipBox(u || [0, 0, 0, 0]);
      }
      isEmptyClip() {
        return this.minX === 1 / 0;
      }
      startNewPathAndClipBox(u) {
        this.clipBox = u, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
      }
      getClippedPathBoundingBox() {
        let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l.PathType.FILL, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return e.Util.intersect(this.clipBox, this.getPathBoundingBox(u, v));
      }
    }
    function x(U, u) {
      if (typeof ImageData < "u" && u instanceof ImageData) {
        U.putImageData(u, 0, 0);
        return;
      }
      const v = u.height, S = u.width, D = v % h, q = (v - D) / h, J = D === 0 ? q : q + 1, z = U.createImageData(S, h);
      let N, P = 0;
      const I = u.data, E = z.data;
      let j, $, H, Y;
      if (u.kind === e.ImageKind.GRAYSCALE_1BPP) {
        const X = I.byteLength, tt = new Uint32Array(E.buffer, 0, E.byteLength >> 2), nt = tt.length, lt = S + 7 >> 3, ht = 4294967295, gt = e.FeatureTest.isLittleEndian ? 4278190080 : 255;
        for (j = 0; j < J; j++) {
          for (H = j < q ? h : D, N = 0, $ = 0; $ < H; $++) {
            const St = X - P;
            let ft = 0;
            const bt = St > lt ? S : 8 * St - 7, wt = -8 & bt;
            let yt = 0, Et = 0;
            for (; ft < wt; ft += 8)
              Et = I[P++], tt[N++] = 128 & Et ? ht : gt, tt[N++] = 64 & Et ? ht : gt, tt[N++] = 32 & Et ? ht : gt, tt[N++] = 16 & Et ? ht : gt, tt[N++] = 8 & Et ? ht : gt, tt[N++] = 4 & Et ? ht : gt, tt[N++] = 2 & Et ? ht : gt, tt[N++] = 1 & Et ? ht : gt;
            for (; ft < bt; ft++)
              yt === 0 && (Et = I[P++], yt = 128), tt[N++] = Et & yt ? ht : gt, yt >>= 1;
          }
          for (; N < nt; )
            tt[N++] = 0;
          U.putImageData(z, 0, j * h);
        }
      } else if (u.kind === e.ImageKind.RGBA_32BPP) {
        for ($ = 0, Y = S * h * 4, j = 0; j < q; j++)
          E.set(I.subarray(P, P + Y)), P += Y, U.putImageData(z, 0, $), $ += h;
        j < J && (Y = S * D * 4, E.set(I.subarray(P, P + Y)), U.putImageData(z, 0, $));
      } else {
        if (u.kind !== e.ImageKind.RGB_24BPP)
          throw new Error(`bad image kind: ${u.kind}`);
        for (H = h, Y = S * H, j = 0; j < J; j++) {
          for (j >= q && (H = D, Y = S * H), N = 0, $ = Y; $--; )
            E[N++] = I[P++], E[N++] = I[P++], E[N++] = I[P++], E[N++] = 255;
          U.putImageData(z, 0, j * h);
        }
      }
    }
    function b(U, u) {
      if (u.bitmap) {
        U.drawImage(u.bitmap, 0, 0);
        return;
      }
      const v = u.height, S = u.width, D = v % h, q = (v - D) / h, J = D === 0 ? q : q + 1, z = U.createImageData(S, h);
      let N = 0;
      const P = u.data, I = z.data;
      for (let E = 0; E < J; E++) {
        const j = E < q ? h : D;
        ({ srcPos: N } = (0, m.convertBlackAndWhiteToRGBA)({ src: P, srcPos: N, dest: I, width: S, height: j, nonBlackColor: 0 })), U.putImageData(z, 0, E * h);
      }
    }
    function _(U, u) {
      const v = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
      for (const S of v)
        U[S] !== void 0 && (u[S] = U[S]);
      U.setLineDash !== void 0 && (u.setLineDash(U.getLineDash()), u.lineDashOffset = U.lineDashOffset);
    }
    function M(U) {
      if (U.strokeStyle = U.fillStyle = "#000000", U.fillRule = "nonzero", U.globalAlpha = 1, U.lineWidth = 1, U.lineCap = "butt", U.lineJoin = "miter", U.miterLimit = 10, U.globalCompositeOperation = "source-over", U.font = "10px sans-serif", U.setLineDash !== void 0 && (U.setLineDash([]), U.lineDashOffset = 0), !e.isNodeJS) {
        const { filter: u } = U;
        u !== "none" && u !== "" && (U.filter = "none");
      }
    }
    function O(U, u, v, S) {
      const D = U.length;
      for (let q = 3; q < D; q += 4) {
        const J = U[q];
        if (J === 0)
          U[q - 3] = u, U[q - 2] = v, U[q - 1] = S;
        else if (J < 255) {
          const z = 255 - J;
          U[q - 3] = U[q - 3] * J + u * z >> 8, U[q - 2] = U[q - 2] * J + v * z >> 8, U[q - 1] = U[q - 1] * J + S * z >> 8;
        }
      }
    }
    function W(U, u, v) {
      const S = U.length;
      for (let D = 3; D < S; D += 4) {
        const q = v ? v[U[D]] : U[D];
        u[D] = u[D] * q * 0.00392156862745098 | 0;
      }
    }
    function w(U, u, v) {
      const S = U.length;
      for (let D = 3; D < S; D += 4) {
        const q = 77 * U[D - 3] + 152 * U[D - 2] + 28 * U[D - 1];
        u[D] = v ? u[D] * v[q >> 8] >> 8 : u[D] * q >> 16;
      }
    }
    function n(U, u, v, S) {
      const D = S[0], q = S[1], J = S[2] - D, z = S[3] - q;
      J !== 0 && z !== 0 && (function(P, I, E, j, $, H, Y, X, tt, nt, lt) {
        const ht = !!H, gt = ht ? H[0] : 0, St = ht ? H[1] : 0, ft = ht ? H[2] : 0, bt = $ === "Luminosity" ? w : W, wt = Math.min(j, Math.ceil(1048576 / E));
        for (let yt = 0; yt < j; yt += wt) {
          const Et = Math.min(wt, j - yt), Ft = P.getImageData(X - nt, yt + (tt - lt), E, Et), It = I.getImageData(X, yt + tt, E, Et);
          ht && O(Ft.data, gt, St, ft), bt(Ft.data, It.data, Y), I.putImageData(It, X, yt + tt);
        }
      }(u.context, v, J, z, u.subtype, u.backdrop, u.transferMap, D, q, u.offsetX, u.offsetY), U.save(), U.globalAlpha = 1, U.globalCompositeOperation = "source-over", U.setTransform(1, 0, 0, 1, 0, 0), U.drawImage(v.canvas, 0, 0), U.restore());
    }
    function i(U, u) {
      const v = e.Util.singularValueDecompose2dScale(U);
      v[0] = Math.fround(v[0]), v[1] = Math.fround(v[1]);
      const S = Math.fround((globalThis.devicePixelRatio || 1) * r.PixelsPerInch.PDF_TO_CSS_UNITS);
      return u !== void 0 ? u : v[0] <= S || v[1] <= S;
    }
    const p = ["butt", "round", "square"], T = ["miter", "round", "bevel"], R = {}, k = {}, B = class B {
      constructor(u, v, S, D, q, J, z, N) {
        K(this, L);
        K(this, V);
        let { optionalContentConfig: P, markedContentStack: I = null } = J;
        this.ctx = u, this.current = new g(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = v, this.objs = S, this.canvasFactory = D, this.filterFactory = q, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = I || [], this.optionalContentConfig = P, this.cachedCanvases = new a(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = z, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = N, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
      }
      getObject(u) {
        let v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return typeof u == "string" ? u.startsWith("g_") ? this.commonObjs.get(u) : this.objs.get(u) : v;
      }
      beginDrawing(u) {
        let { transform: v, viewport: S, transparency: D = !1, background: q = null } = u;
        const J = this.ctx.canvas.width, z = this.ctx.canvas.height, N = this.ctx.fillStyle;
        if (this.ctx.fillStyle = q || "#ffffff", this.ctx.fillRect(0, 0, J, z), this.ctx.fillStyle = N, D) {
          const P = this.cachedCanvases.getCanvas("transparent", J, z);
          this.compositeCtx = this.ctx, this.transparentCanvas = P.canvas, this.ctx = P.context, this.ctx.save(), this.ctx.transform(...(0, r.getCurrentTransform)(this.compositeCtx));
        }
        this.ctx.save(), M(this.ctx), v && (this.ctx.transform(...v), this.outputScaleX = v[0], this.outputScaleY = v[0]), this.ctx.transform(...S.transform), this.viewportScale = S.scale, this.baseTransform = (0, r.getCurrentTransform)(this.ctx);
      }
      executeOperatorList(u, v, S, D) {
        const q = u.argsArray, J = u.fnArray;
        let z = v || 0;
        const N = q.length;
        if (N === z)
          return z;
        const P = N - z > 10 && typeof S == "function", I = P ? Date.now() + 15 : 0;
        let E = 0;
        const j = this.commonObjs, $ = this.objs;
        let H;
        for (; ; ) {
          if (D !== void 0 && z === D.nextBreakPoint)
            return D.breakIt(z, S), z;
          if (H = J[z], H !== e.OPS.dependency)
            this[H].apply(this, q[z]);
          else
            for (const Y of q[z]) {
              const X = Y.startsWith("g_") ? j : $;
              if (!X.has(Y))
                return X.get(Y, S), z;
            }
          if (z++, z === N)
            return z;
          if (P && ++E > 10) {
            if (Date.now() > I)
              return S(), z;
            E = 0;
          }
        }
      }
      endDrawing() {
        rt(this, L, Je).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
        for (const u of this._cachedBitmapsMap.values()) {
          for (const v of u.values())
            typeof HTMLCanvasElement < "u" && v instanceof HTMLCanvasElement && (v.width = v.height = 0);
          u.clear();
        }
        this._cachedBitmapsMap.clear(), rt(this, V, Qe).call(this);
      }
      _scaleImage(u, v) {
        const S = u.width, D = u.height;
        let q, J, z = Math.max(Math.hypot(v[0], v[1]), 1), N = Math.max(Math.hypot(v[2], v[3]), 1), P = S, I = D, E = "prescale1";
        for (; z > 2 && P > 1 || N > 2 && I > 1; ) {
          let j = P, $ = I;
          z > 2 && P > 1 && (j = P >= 16384 ? Math.floor(P / 2) - 1 || 1 : Math.ceil(P / 2), z /= P / j), N > 2 && I > 1 && ($ = I >= 16384 ? Math.floor(I / 2) - 1 || 1 : Math.ceil(I) / 2, N /= I / $), q = this.cachedCanvases.getCanvas(E, j, $), J = q.context, J.clearRect(0, 0, j, $), J.drawImage(u, 0, 0, P, I, 0, 0, j, $), u = q.canvas, P = j, I = $, E = E === "prescale1" ? "prescale2" : "prescale1";
        }
        return { img: u, paintWidth: P, paintHeight: I };
      }
      _createMaskCanvas(u) {
        const v = this.ctx, { width: S, height: D } = u, q = this.current.fillColor, J = this.current.patternFill, z = (0, r.getCurrentTransform)(v);
        let N, P, I, E;
        if ((u.bitmap || u.data) && u.count > 1) {
          const ft = u.bitmap || u.data.buffer;
          P = JSON.stringify(J ? z : [z.slice(0, 4), q]), N = this._cachedBitmapsMap.get(ft), N || (N = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(ft, N));
          const bt = N.get(P);
          if (bt && !J)
            return { canvas: bt, offsetX: Math.round(Math.min(z[0], z[2]) + z[4]), offsetY: Math.round(Math.min(z[1], z[3]) + z[5]) };
          I = bt;
        }
        I || (E = this.cachedCanvases.getCanvas("maskCanvas", S, D), b(E.context, u));
        let j = e.Util.transform(z, [1 / S, 0, 0, -1 / D, 0, 0]);
        j = e.Util.transform(j, [1, 0, 0, 1, 0, -D]);
        const $ = e.Util.applyTransform([0, 0], j), H = e.Util.applyTransform([S, D], j), Y = e.Util.normalizeRect([$[0], $[1], H[0], H[1]]), X = Math.round(Y[2] - Y[0]) || 1, tt = Math.round(Y[3] - Y[1]) || 1, nt = this.cachedCanvases.getCanvas("fillCanvas", X, tt), lt = nt.context, ht = Math.min($[0], H[0]), gt = Math.min($[1], H[1]);
        lt.translate(-ht, -gt), lt.transform(...j), I || (I = this._scaleImage(E.canvas, (0, r.getCurrentTransformInverse)(lt)), I = I.img, N && J && N.set(P, I)), lt.imageSmoothingEnabled = i((0, r.getCurrentTransform)(lt), u.interpolate), f(lt, I, 0, 0, I.width, I.height, 0, 0, S, D), lt.globalCompositeOperation = "source-in";
        const St = e.Util.transform((0, r.getCurrentTransformInverse)(lt), [1, 0, 0, 1, -ht, -gt]);
        return lt.fillStyle = J ? q.getPattern(v, this, St, l.PathType.FILL) : q, lt.fillRect(0, 0, S, D), N && !J && (this.cachedCanvases.delete("fillCanvas"), N.set(P, nt.canvas)), { canvas: nt.canvas, offsetX: Math.round(ht), offsetY: Math.round(gt) };
      }
      setLineWidth(u) {
        u !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = u, this.ctx.lineWidth = u;
      }
      setLineCap(u) {
        this.ctx.lineCap = p[u];
      }
      setLineJoin(u) {
        this.ctx.lineJoin = T[u];
      }
      setMiterLimit(u) {
        this.ctx.miterLimit = u;
      }
      setDash(u, v) {
        const S = this.ctx;
        S.setLineDash !== void 0 && (S.setLineDash(u), S.lineDashOffset = v);
      }
      setRenderingIntent(u) {
      }
      setFlatness(u) {
      }
      setGState(u) {
        for (const [v, S] of u)
          switch (v) {
            case "LW":
              this.setLineWidth(S);
              break;
            case "LC":
              this.setLineCap(S);
              break;
            case "LJ":
              this.setLineJoin(S);
              break;
            case "ML":
              this.setMiterLimit(S);
              break;
            case "D":
              this.setDash(S[0], S[1]);
              break;
            case "RI":
              this.setRenderingIntent(S);
              break;
            case "FL":
              this.setFlatness(S);
              break;
            case "Font":
              this.setFont(S[0], S[1]);
              break;
            case "CA":
              this.current.strokeAlpha = S;
              break;
            case "ca":
              this.current.fillAlpha = S, this.ctx.globalAlpha = S;
              break;
            case "BM":
              this.ctx.globalCompositeOperation = S;
              break;
            case "SMask":
              this.current.activeSMask = S ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
              break;
            case "TR":
              this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(S);
          }
      }
      get inSMaskMode() {
        return !!this.suspendedCtx;
      }
      checkSMaskState() {
        const u = this.inSMaskMode;
        this.current.activeSMask && !u ? this.beginSMaskMode() : !this.current.activeSMask && u && this.endSMaskMode();
      }
      beginSMaskMode() {
        if (this.inSMaskMode)
          throw new Error("beginSMaskMode called while already in smask mode");
        const u = this.ctx.canvas.width, v = this.ctx.canvas.height, S = "smaskGroupAt" + this.groupLevel, D = this.cachedCanvases.getCanvas(S, u, v);
        this.suspendedCtx = this.ctx, this.ctx = D.context;
        const q = this.ctx;
        q.setTransform(...(0, r.getCurrentTransform)(this.suspendedCtx)), _(this.suspendedCtx, q), function(z, N) {
          if (z._removeMirroring)
            throw new Error("Context is already forwarding operations.");
          z.__originalSave = z.save, z.__originalRestore = z.restore, z.__originalRotate = z.rotate, z.__originalScale = z.scale, z.__originalTranslate = z.translate, z.__originalTransform = z.transform, z.__originalSetTransform = z.setTransform, z.__originalResetTransform = z.resetTransform, z.__originalClip = z.clip, z.__originalMoveTo = z.moveTo, z.__originalLineTo = z.lineTo, z.__originalBezierCurveTo = z.bezierCurveTo, z.__originalRect = z.rect, z.__originalClosePath = z.closePath, z.__originalBeginPath = z.beginPath, z._removeMirroring = () => {
            z.save = z.__originalSave, z.restore = z.__originalRestore, z.rotate = z.__originalRotate, z.scale = z.__originalScale, z.translate = z.__originalTranslate, z.transform = z.__originalTransform, z.setTransform = z.__originalSetTransform, z.resetTransform = z.__originalResetTransform, z.clip = z.__originalClip, z.moveTo = z.__originalMoveTo, z.lineTo = z.__originalLineTo, z.bezierCurveTo = z.__originalBezierCurveTo, z.rect = z.__originalRect, z.closePath = z.__originalClosePath, z.beginPath = z.__originalBeginPath, delete z._removeMirroring;
          }, z.save = function() {
            N.save(), this.__originalSave();
          }, z.restore = function() {
            N.restore(), this.__originalRestore();
          }, z.translate = function(I, E) {
            N.translate(I, E), this.__originalTranslate(I, E);
          }, z.scale = function(I, E) {
            N.scale(I, E), this.__originalScale(I, E);
          }, z.transform = function(I, E, j, $, H, Y) {
            N.transform(I, E, j, $, H, Y), this.__originalTransform(I, E, j, $, H, Y);
          }, z.setTransform = function(I, E, j, $, H, Y) {
            N.setTransform(I, E, j, $, H, Y), this.__originalSetTransform(I, E, j, $, H, Y);
          }, z.resetTransform = function() {
            N.resetTransform(), this.__originalResetTransform();
          }, z.rotate = function(I) {
            N.rotate(I), this.__originalRotate(I);
          }, z.clip = function(I) {
            N.clip(I), this.__originalClip(I);
          }, z.moveTo = function(P, I) {
            N.moveTo(P, I), this.__originalMoveTo(P, I);
          }, z.lineTo = function(P, I) {
            N.lineTo(P, I), this.__originalLineTo(P, I);
          }, z.bezierCurveTo = function(P, I, E, j, $, H) {
            N.bezierCurveTo(P, I, E, j, $, H), this.__originalBezierCurveTo(P, I, E, j, $, H);
          }, z.rect = function(P, I, E, j) {
            N.rect(P, I, E, j), this.__originalRect(P, I, E, j);
          }, z.closePath = function() {
            N.closePath(), this.__originalClosePath();
          }, z.beginPath = function() {
            N.beginPath(), this.__originalBeginPath();
          };
        }(q, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
      }
      endSMaskMode() {
        if (!this.inSMaskMode)
          throw new Error("endSMaskMode called while not in smask mode");
        this.ctx._removeMirroring(), _(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
      }
      compose(u) {
        if (!this.current.activeSMask)
          return;
        u ? (u[0] = Math.floor(u[0]), u[1] = Math.floor(u[1]), u[2] = Math.ceil(u[2]), u[3] = Math.ceil(u[3])) : u = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
        const v = this.current.activeSMask;
        n(this.suspendedCtx, v, this.ctx, u), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
      }
      save() {
        this.inSMaskMode ? (_(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
        const u = this.current;
        this.stateStack.push(u), this.current = u.clone();
      }
      restore() {
        this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), _(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
      }
      transform(u, v, S, D, q, J) {
        this.ctx.transform(u, v, S, D, q, J), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
      }
      constructPath(u, v, S) {
        const D = this.ctx, q = this.current;
        let J, z, N = q.x, P = q.y;
        const I = (0, r.getCurrentTransform)(D), E = I[0] === 0 && I[3] === 0 || I[1] === 0 && I[2] === 0, j = E ? S.slice(0) : null;
        for (let $ = 0, H = 0, Y = u.length; $ < Y; $++)
          switch (0 | u[$]) {
            case e.OPS.rectangle:
              N = v[H++], P = v[H++];
              const X = v[H++], tt = v[H++], nt = N + X, lt = P + tt;
              D.moveTo(N, P), X === 0 || tt === 0 ? D.lineTo(nt, lt) : (D.lineTo(nt, P), D.lineTo(nt, lt), D.lineTo(N, lt)), E || q.updateRectMinMax(I, [N, P, nt, lt]), D.closePath();
              break;
            case e.OPS.moveTo:
              N = v[H++], P = v[H++], D.moveTo(N, P), E || q.updatePathMinMax(I, N, P);
              break;
            case e.OPS.lineTo:
              N = v[H++], P = v[H++], D.lineTo(N, P), E || q.updatePathMinMax(I, N, P);
              break;
            case e.OPS.curveTo:
              J = N, z = P, N = v[H + 4], P = v[H + 5], D.bezierCurveTo(v[H], v[H + 1], v[H + 2], v[H + 3], N, P), q.updateCurvePathMinMax(I, J, z, v[H], v[H + 1], v[H + 2], v[H + 3], N, P, j), H += 6;
              break;
            case e.OPS.curveTo2:
              J = N, z = P, D.bezierCurveTo(N, P, v[H], v[H + 1], v[H + 2], v[H + 3]), q.updateCurvePathMinMax(I, J, z, N, P, v[H], v[H + 1], v[H + 2], v[H + 3], j), N = v[H + 2], P = v[H + 3], H += 4;
              break;
            case e.OPS.curveTo3:
              J = N, z = P, N = v[H + 2], P = v[H + 3], D.bezierCurveTo(v[H], v[H + 1], N, P, N, P), q.updateCurvePathMinMax(I, J, z, v[H], v[H + 1], N, P, N, P, j), H += 4;
              break;
            case e.OPS.closePath:
              D.closePath();
          }
        E && q.updateScalingPathMinMax(I, j), q.setCurrentPoint(N, P);
      }
      closePath() {
        this.ctx.closePath();
      }
      stroke() {
        let u = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
        const v = this.ctx, S = this.current.strokeColor;
        v.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof S == "object" && (S != null && S.getPattern) ? (v.save(), v.strokeStyle = S.getPattern(v, this, (0, r.getCurrentTransformInverse)(v), l.PathType.STROKE), this.rescaleAndStroke(!1), v.restore()) : this.rescaleAndStroke(!0)), u && this.consumePath(this.current.getClippedPathBoundingBox()), v.globalAlpha = this.current.fillAlpha;
      }
      closeStroke() {
        this.closePath(), this.stroke();
      }
      fill() {
        let u = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
        const v = this.ctx, S = this.current.fillColor;
        let D = !1;
        this.current.patternFill && (v.save(), v.fillStyle = S.getPattern(v, this, (0, r.getCurrentTransformInverse)(v), l.PathType.FILL), D = !0);
        const q = this.current.getClippedPathBoundingBox();
        this.contentVisible && q !== null && (this.pendingEOFill ? (v.fill("evenodd"), this.pendingEOFill = !1) : v.fill()), D && v.restore(), u && this.consumePath(q);
      }
      eoFill() {
        this.pendingEOFill = !0, this.fill();
      }
      fillStroke() {
        this.fill(!1), this.stroke(!1), this.consumePath();
      }
      eoFillStroke() {
        this.pendingEOFill = !0, this.fillStroke();
      }
      closeFillStroke() {
        this.closePath(), this.fillStroke();
      }
      closeEOFillStroke() {
        this.pendingEOFill = !0, this.closePath(), this.fillStroke();
      }
      endPath() {
        this.consumePath();
      }
      clip() {
        this.pendingClip = R;
      }
      eoClip() {
        this.pendingClip = k;
      }
      beginText() {
        this.current.textMatrix = e.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
      }
      endText() {
        const u = this.pendingTextPaths, v = this.ctx;
        if (u !== void 0) {
          v.save(), v.beginPath();
          for (const S of u)
            v.setTransform(...S.transform), v.translate(S.x, S.y), S.addToPath(v, S.fontSize);
          v.restore(), v.clip(), v.beginPath(), delete this.pendingTextPaths;
        } else
          v.beginPath();
      }
      setCharSpacing(u) {
        this.current.charSpacing = u;
      }
      setWordSpacing(u) {
        this.current.wordSpacing = u;
      }
      setHScale(u) {
        this.current.textHScale = u / 100;
      }
      setLeading(u) {
        this.current.leading = -u;
      }
      setFont(u, v) {
        var I;
        const S = this.commonObjs.get(u), D = this.current;
        if (!S)
          throw new Error(`Can't find font for ${u}`);
        if (D.fontMatrix = S.fontMatrix || e.FONT_IDENTITY_MATRIX, D.fontMatrix[0] !== 0 && D.fontMatrix[3] !== 0 || (0, e.warn)("Invalid font matrix for font " + u), v < 0 ? (v = -v, D.fontDirection = -1) : D.fontDirection = 1, this.current.font = S, this.current.fontSize = v, S.isType3Font)
          return;
        const q = S.loadedName || "sans-serif", J = ((I = S.systemFontInfo) == null ? void 0 : I.css) || `"${q}", ${S.fallbackName}`;
        let z = "normal";
        S.black ? z = "900" : S.bold && (z = "bold");
        const N = S.italic ? "italic" : "normal";
        let P = v;
        v < 16 ? P = 16 : v > 100 && (P = 100), this.current.fontSizeScale = v / P, this.ctx.font = `${N} ${z} ${P}px ${J}`;
      }
      setTextRenderingMode(u) {
        this.current.textRenderingMode = u;
      }
      setTextRise(u) {
        this.current.textRise = u;
      }
      moveText(u, v) {
        this.current.x = this.current.lineX += u, this.current.y = this.current.lineY += v;
      }
      setLeadingMoveText(u, v) {
        this.setLeading(-v), this.moveText(u, v);
      }
      setTextMatrix(u, v, S, D, q, J) {
        this.current.textMatrix = [u, v, S, D, q, J], this.current.textMatrixScale = Math.hypot(u, v), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
      }
      nextLine() {
        this.moveText(0, this.current.leading);
      }
      paintChar(u, v, S, D) {
        const q = this.ctx, J = this.current, z = J.font, N = J.textRenderingMode, P = J.fontSize / J.fontSizeScale, I = N & e.TextRenderingMode.FILL_STROKE_MASK, E = !!(N & e.TextRenderingMode.ADD_TO_PATH_FLAG), j = J.patternFill && !z.missingFile;
        let $;
        (z.disableFontFace || E || j) && ($ = z.getPathGenerator(this.commonObjs, u)), z.disableFontFace || j ? (q.save(), q.translate(v, S), q.beginPath(), $(q, P), D && q.setTransform(...D), I !== e.TextRenderingMode.FILL && I !== e.TextRenderingMode.FILL_STROKE || q.fill(), I !== e.TextRenderingMode.STROKE && I !== e.TextRenderingMode.FILL_STROKE || q.stroke(), q.restore()) : (I !== e.TextRenderingMode.FILL && I !== e.TextRenderingMode.FILL_STROKE || q.fillText(u, v, S), I !== e.TextRenderingMode.STROKE && I !== e.TextRenderingMode.FILL_STROKE || q.strokeText(u, v, S)), E && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({ transform: (0, r.getCurrentTransform)(q), x: v, y: S, fontSize: P, addToPath: $ });
      }
      get isFontSubpixelAAEnabled() {
        const { context: u } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
        u.scale(1.5, 1), u.fillText("I", 0, 10);
        const v = u.getImageData(0, 0, 10, 10).data;
        let S = !1;
        for (let D = 3; D < v.length; D += 4)
          if (v[D] > 0 && v[D] < 255) {
            S = !0;
            break;
          }
        return (0, e.shadow)(this, "isFontSubpixelAAEnabled", S);
      }
      showText(u) {
        const v = this.current, S = v.font;
        if (S.isType3Font)
          return this.showType3Text(u);
        const D = v.fontSize;
        if (D === 0)
          return;
        const q = this.ctx, J = v.fontSizeScale, z = v.charSpacing, N = v.wordSpacing, P = v.fontDirection, I = v.textHScale * P, E = u.length, j = S.vertical, $ = j ? 1 : -1, H = S.defaultVMetrics, Y = D * v.fontMatrix[0], X = v.textRenderingMode === e.TextRenderingMode.FILL && !S.disableFontFace && !v.patternFill;
        q.save(), q.transform(...v.textMatrix), q.translate(v.x, v.y + v.textRise), P > 0 ? q.scale(I, -1) : q.scale(I, 1);
        let tt;
        if (v.patternFill) {
          q.save();
          const St = v.fillColor.getPattern(q, this, (0, r.getCurrentTransformInverse)(q), l.PathType.FILL);
          tt = (0, r.getCurrentTransform)(q), q.restore(), q.fillStyle = St;
        }
        let nt = v.lineWidth;
        const lt = v.textMatrixScale;
        if (lt === 0 || nt === 0) {
          const St = v.textRenderingMode & e.TextRenderingMode.FILL_STROKE_MASK;
          St !== e.TextRenderingMode.STROKE && St !== e.TextRenderingMode.FILL_STROKE || (nt = this.getSinglePixelWidth());
        } else
          nt /= lt;
        if (J !== 1 && (q.scale(J, J), nt /= J), q.lineWidth = nt, S.isInvalidPDFjsFont) {
          const St = [];
          let ft = 0;
          for (const bt of u)
            St.push(bt.unicode), ft += bt.width;
          q.fillText(St.join(""), 0, 0), v.x += ft * Y * I, q.restore(), this.compose();
          return;
        }
        let ht, gt = 0;
        for (ht = 0; ht < E; ++ht) {
          const St = u[ht];
          if (typeof St == "number") {
            gt += $ * St * D / 1e3;
            continue;
          }
          let ft = !1;
          const bt = (St.isSpace ? N : 0) + z, wt = St.fontChar, yt = St.accent;
          let Et, Ft, It = St.width;
          if (j) {
            const Nt = St.vmetric || H, Bt = -(St.vmetric ? Nt[1] : 0.5 * It) * Y, Kt = Nt[2] * Y;
            It = Nt ? -Nt[0] : It, Et = Bt / J, Ft = (gt + Kt) / J;
          } else
            Et = gt / J, Ft = 0;
          if (S.remeasure && It > 0) {
            const Nt = 1e3 * q.measureText(wt).width / D * J;
            if (It < Nt && this.isFontSubpixelAAEnabled) {
              const Bt = It / Nt;
              ft = !0, q.save(), q.scale(Bt, 1), Et /= Bt;
            } else
              It !== Nt && (Et += (It - Nt) / 2e3 * D / J);
          }
          if (this.contentVisible && (St.isInFont || S.missingFile)) {
            if (X && !yt)
              q.fillText(wt, Et, Ft);
            else if (this.paintChar(wt, Et, Ft, tt), yt) {
              const Nt = Et + D * yt.offset.x / J, Bt = Ft - D * yt.offset.y / J;
              this.paintChar(yt.fontChar, Nt, Bt, tt);
            }
          }
          gt += j ? It * Y - bt * P : It * Y + bt * P, ft && q.restore();
        }
        j ? v.y -= gt : v.x += gt * I, q.restore(), this.compose();
      }
      showType3Text(u) {
        const v = this.ctx, S = this.current, D = S.font, q = S.fontSize, J = S.fontDirection, z = D.vertical ? 1 : -1, N = S.charSpacing, P = S.wordSpacing, I = S.textHScale * J, E = S.fontMatrix || e.FONT_IDENTITY_MATRIX, j = u.length;
        let $, H, Y, X;
        if (S.textRenderingMode !== e.TextRenderingMode.INVISIBLE && q !== 0) {
          for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, v.save(), v.transform(...S.textMatrix), v.translate(S.x, S.y), v.scale(I, J), $ = 0; $ < j; ++$) {
            if (H = u[$], typeof H == "number") {
              X = z * H * q / 1e3, this.ctx.translate(X, 0), S.x += X * I;
              continue;
            }
            const tt = (H.isSpace ? P : 0) + N, nt = D.charProcOperatorList[H.operatorListId];
            if (!nt) {
              (0, e.warn)(`Type3 character "${H.operatorListId}" is not available.`);
              continue;
            }
            this.contentVisible && (this.processingType3 = H, this.save(), v.scale(q, q), v.transform(...E), this.executeOperatorList(nt), this.restore()), Y = e.Util.applyTransform([H.width, 0], E)[0] * q + tt, v.translate(Y, 0), S.x += Y * I;
          }
          v.restore(), this.processingType3 = null;
        }
      }
      setCharWidth(u, v) {
      }
      setCharWidthAndBounds(u, v, S, D, q, J) {
        this.ctx.rect(S, D, q - S, J - D), this.ctx.clip(), this.endPath();
      }
      getColorN_Pattern(u) {
        let v;
        if (u[0] === "TilingPattern") {
          const S = u[1], D = this.baseTransform || (0, r.getCurrentTransform)(this.ctx), q = { createCanvasGraphics: (J) => new B(J, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, { optionalContentConfig: this.optionalContentConfig, markedContentStack: this.markedContentStack }) };
          v = new l.TilingPattern(u, S, this.ctx, q, D);
        } else
          v = this._getPattern(u[1], u[2]);
        return v;
      }
      setStrokeColorN() {
        this.current.strokeColor = this.getColorN_Pattern(arguments);
      }
      setFillColorN() {
        this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
      }
      setStrokeRGBColor(u, v, S) {
        const D = e.Util.makeHexColor(u, v, S);
        this.ctx.strokeStyle = D, this.current.strokeColor = D;
      }
      setFillRGBColor(u, v, S) {
        const D = e.Util.makeHexColor(u, v, S);
        this.ctx.fillStyle = D, this.current.fillColor = D, this.current.patternFill = !1;
      }
      _getPattern(u) {
        let v, S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return this.cachedPatterns.has(u) ? v = this.cachedPatterns.get(u) : (v = (0, l.getShadingPattern)(this.getObject(u)), this.cachedPatterns.set(u, v)), S && (v.matrix = S), v;
      }
      shadingFill(u) {
        if (!this.contentVisible)
          return;
        const v = this.ctx;
        this.save();
        const S = this._getPattern(u);
        v.fillStyle = S.getPattern(v, this, (0, r.getCurrentTransformInverse)(v), l.PathType.SHADING);
        const D = (0, r.getCurrentTransformInverse)(v);
        if (D) {
          const { width: q, height: J } = v.canvas, [z, N, P, I] = e.Util.getAxialAlignedBoundingBox([0, 0, q, J], D);
          this.ctx.fillRect(z, N, P - z, I - N);
        } else
          this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
        this.compose(this.current.getClippedPathBoundingBox()), this.restore();
      }
      beginInlineImage() {
        (0, e.unreachable)("Should not call beginInlineImage");
      }
      beginImageData() {
        (0, e.unreachable)("Should not call beginImageData");
      }
      paintFormXObjectBegin(u, v) {
        if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(u) && u.length === 6 && this.transform(...u), this.baseTransform = (0, r.getCurrentTransform)(this.ctx), v)) {
          const S = v[2] - v[0], D = v[3] - v[1];
          this.ctx.rect(v[0], v[1], S, D), this.current.updateRectMinMax((0, r.getCurrentTransform)(this.ctx), v), this.clip(), this.endPath();
        }
      }
      paintFormXObjectEnd() {
        this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
      }
      beginGroup(u) {
        if (!this.contentVisible)
          return;
        this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
        const v = this.ctx;
        u.isolated || (0, e.info)("TODO: Support non-isolated groups."), u.knockout && (0, e.warn)("Knockout groups not supported.");
        const S = (0, r.getCurrentTransform)(v);
        if (u.matrix && v.transform(...u.matrix), !u.bbox)
          throw new Error("Bounding box is required.");
        let D = e.Util.getAxialAlignedBoundingBox(u.bbox, (0, r.getCurrentTransform)(v));
        const q = [0, 0, v.canvas.width, v.canvas.height];
        D = e.Util.intersect(D, q) || [0, 0, 0, 0];
        const J = Math.floor(D[0]), z = Math.floor(D[1]);
        let N = Math.max(Math.ceil(D[2]) - J, 1), P = Math.max(Math.ceil(D[3]) - z, 1), I = 1, E = 1;
        N > y && (I = N / y, N = y), P > y && (E = P / y, P = y), this.current.startNewPathAndClipBox([0, 0, N, P]);
        let j = "groupAt" + this.groupLevel;
        u.smask && (j += "_smask_" + this.smaskCounter++ % 2);
        const $ = this.cachedCanvases.getCanvas(j, N, P), H = $.context;
        H.scale(1 / I, 1 / E), H.translate(-J, -z), H.transform(...S), u.smask ? this.smaskStack.push({ canvas: $.canvas, context: H, offsetX: J, offsetY: z, scaleX: I, scaleY: E, subtype: u.smask.subtype, backdrop: u.smask.backdrop, transferMap: u.smask.transferMap || null, startTransformInverse: null }) : (v.setTransform(1, 0, 0, 1, 0, 0), v.translate(J, z), v.scale(I, E), v.save()), _(v, H), this.ctx = H, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(v), this.groupLevel++;
      }
      endGroup(u) {
        if (!this.contentVisible)
          return;
        this.groupLevel--;
        const v = this.ctx, S = this.groupStack.pop();
        if (this.ctx = S, this.ctx.imageSmoothingEnabled = !1, u.smask)
          this.tempSMask = this.smaskStack.pop(), this.restore();
        else {
          this.ctx.restore();
          const D = (0, r.getCurrentTransform)(this.ctx);
          this.restore(), this.ctx.save(), this.ctx.setTransform(...D);
          const q = e.Util.getAxialAlignedBoundingBox([0, 0, v.canvas.width, v.canvas.height], D);
          this.ctx.drawImage(v.canvas, 0, 0), this.ctx.restore(), this.compose(q);
        }
      }
      beginAnnotation(u, v, S, D, q) {
        if (rt(this, L, Je).call(this), M(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(v) && v.length === 4) {
          const J = v[2] - v[0], z = v[3] - v[1];
          if (q && this.annotationCanvasMap) {
            (S = S.slice())[4] -= v[0], S[5] -= v[1], (v = v.slice())[0] = v[1] = 0, v[2] = J, v[3] = z;
            const [N, P] = e.Util.singularValueDecompose2dScale((0, r.getCurrentTransform)(this.ctx)), { viewportScale: I } = this, E = Math.ceil(J * this.outputScaleX * I), j = Math.ceil(z * this.outputScaleY * I);
            this.annotationCanvas = this.canvasFactory.create(E, j);
            const { canvas: $, context: H } = this.annotationCanvas;
            this.annotationCanvasMap.set(u, $), this.annotationCanvas.savedCtx = this.ctx, this.ctx = H, this.ctx.save(), this.ctx.setTransform(N, 0, 0, -P, 0, z * P), M(this.ctx);
          } else
            M(this.ctx), this.ctx.rect(v[0], v[1], J, z), this.ctx.clip(), this.endPath();
        }
        this.current = new g(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...S), this.transform(...D);
      }
      endAnnotation() {
        this.annotationCanvas && (this.ctx.restore(), rt(this, V, Qe).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
      }
      paintImageMaskXObject(u) {
        if (!this.contentVisible)
          return;
        const v = u.count;
        (u = this.getObject(u.data, u)).count = v;
        const S = this.ctx, D = this.processingType3;
        if (D && (D.compiled === void 0 && (D.compiled = function(N) {
          const { width: P, height: I } = N;
          if (P > 1e3 || I > 1e3)
            return null;
          const E = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), j = P + 1;
          let $, H, Y, X = new Uint8Array(j * (I + 1));
          const tt = P + 7 & -8;
          let nt = new Uint8Array(tt * I), lt = 0;
          for (const ft of N.data) {
            let bt = 128;
            for (; bt > 0; )
              nt[lt++] = ft & bt ? 0 : 255, bt >>= 1;
          }
          let ht = 0;
          for (lt = 0, nt[lt] !== 0 && (X[0] = 1, ++ht), H = 1; H < P; H++)
            nt[lt] !== nt[lt + 1] && (X[H] = nt[lt] ? 2 : 1, ++ht), lt++;
          for (nt[lt] !== 0 && (X[H] = 2, ++ht), $ = 1; $ < I; $++) {
            lt = $ * tt, Y = $ * j, nt[lt - tt] !== nt[lt] && (X[Y] = nt[lt] ? 1 : 8, ++ht);
            let ft = (nt[lt] ? 4 : 0) + (nt[lt - tt] ? 8 : 0);
            for (H = 1; H < P; H++)
              ft = (ft >> 2) + (nt[lt + 1] ? 4 : 0) + (nt[lt - tt + 1] ? 8 : 0), E[ft] && (X[Y + H] = E[ft], ++ht), lt++;
            if (nt[lt - tt] !== nt[lt] && (X[Y + H] = nt[lt] ? 2 : 4, ++ht), ht > 1e3)
              return null;
          }
          for (lt = tt * (I - 1), Y = $ * j, nt[lt] !== 0 && (X[Y] = 8, ++ht), H = 1; H < P; H++)
            nt[lt] !== nt[lt + 1] && (X[Y + H] = nt[lt] ? 4 : 8, ++ht), lt++;
          if (nt[lt] !== 0 && (X[Y + H] = 4, ++ht), ht > 1e3)
            return null;
          const gt = new Int32Array([0, j, -1, 0, -j, 0, 0, 0, 1]), St = new Path2D();
          for ($ = 0; ht && $ <= I; $++) {
            let ft = $ * j;
            const bt = ft + P;
            for (; ft < bt && !X[ft]; )
              ft++;
            if (ft === bt)
              continue;
            St.moveTo(ft % j, $);
            const wt = ft;
            let yt = X[ft];
            do {
              const Et = gt[yt];
              do
                ft += Et;
              while (!X[ft]);
              const Ft = X[ft];
              Ft !== 5 && Ft !== 10 ? (yt = Ft, X[ft] = 0) : (yt = Ft & 51 * yt >> 4, X[ft] &= yt >> 2 | yt << 2), St.lineTo(ft % j, ft / j | 0), X[ft] || --ht;
            } while (wt !== ft);
            --$;
          }
          return nt = null, X = null, function(ft) {
            ft.save(), ft.scale(1 / P, -1 / I), ft.translate(0, -I), ft.fill(St), ft.beginPath(), ft.restore();
          };
        }(u)), D.compiled)) {
          D.compiled(S);
          return;
        }
        const q = this._createMaskCanvas(u), J = q.canvas;
        S.save(), S.setTransform(1, 0, 0, 1, 0, 0), S.drawImage(J, q.offsetX, q.offsetY), S.restore(), this.compose();
      }
      paintImageMaskXObjectRepeat(u, v) {
        let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, D = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, q = arguments.length > 4 ? arguments[4] : void 0, J = arguments.length > 5 ? arguments[5] : void 0;
        if (!this.contentVisible)
          return;
        u = this.getObject(u.data, u);
        const z = this.ctx;
        z.save();
        const N = (0, r.getCurrentTransform)(z);
        z.transform(v, S, D, q, 0, 0);
        const P = this._createMaskCanvas(u);
        z.setTransform(1, 0, 0, 1, P.offsetX - N[4], P.offsetY - N[5]);
        for (let I = 0, E = J.length; I < E; I += 2) {
          const j = e.Util.transform(N, [v, S, D, q, J[I], J[I + 1]]), [$, H] = e.Util.applyTransform([0, 0], j);
          z.drawImage(P.canvas, $, H);
        }
        z.restore(), this.compose();
      }
      paintImageMaskXObjectGroup(u) {
        if (!this.contentVisible)
          return;
        const v = this.ctx, S = this.current.fillColor, D = this.current.patternFill;
        for (const q of u) {
          const { data: J, width: z, height: N, transform: P } = q, I = this.cachedCanvases.getCanvas("maskCanvas", z, N), E = I.context;
          E.save(), b(E, this.getObject(J, q)), E.globalCompositeOperation = "source-in", E.fillStyle = D ? S.getPattern(E, this, (0, r.getCurrentTransformInverse)(v), l.PathType.FILL) : S, E.fillRect(0, 0, z, N), E.restore(), v.save(), v.transform(...P), v.scale(1, -1), f(v, I.canvas, 0, 0, z, N, 0, -1, 1, 1), v.restore();
        }
        this.compose();
      }
      paintImageXObject(u) {
        if (!this.contentVisible)
          return;
        const v = this.getObject(u);
        v ? this.paintInlineImageXObject(v) : (0, e.warn)("Dependent image isn't ready yet");
      }
      paintImageXObjectRepeat(u, v, S, D) {
        if (!this.contentVisible)
          return;
        const q = this.getObject(u);
        if (!q) {
          (0, e.warn)("Dependent image isn't ready yet");
          return;
        }
        const J = q.width, z = q.height, N = [];
        for (let P = 0, I = D.length; P < I; P += 2)
          N.push({ transform: [v, 0, 0, S, D[P], D[P + 1]], x: 0, y: 0, w: J, h: z });
        this.paintInlineImageXObjectGroup(q, N);
      }
      applyTransferMapsToCanvas(u) {
        return this.current.transferMaps !== "none" && (u.filter = this.current.transferMaps, u.drawImage(u.canvas, 0, 0), u.filter = "none"), u.canvas;
      }
      applyTransferMapsToBitmap(u) {
        if (this.current.transferMaps === "none")
          return u.bitmap;
        const { bitmap: v, width: S, height: D } = u, q = this.cachedCanvases.getCanvas("inlineImage", S, D), J = q.context;
        return J.filter = this.current.transferMaps, J.drawImage(v, 0, 0), J.filter = "none", q.canvas;
      }
      paintInlineImageXObject(u) {
        if (!this.contentVisible)
          return;
        const v = u.width, S = u.height, D = this.ctx;
        if (this.save(), !e.isNodeJS) {
          const { filter: z } = D;
          z !== "none" && z !== "" && (D.filter = "none");
        }
        D.scale(1 / v, -1 / S);
        let q;
        if (u.bitmap)
          q = this.applyTransferMapsToBitmap(u);
        else if (typeof HTMLElement == "function" && u instanceof HTMLElement || !u.data)
          q = u;
        else {
          const z = this.cachedCanvases.getCanvas("inlineImage", v, S).context;
          x(z, u), q = this.applyTransferMapsToCanvas(z);
        }
        const J = this._scaleImage(q, (0, r.getCurrentTransformInverse)(D));
        D.imageSmoothingEnabled = i((0, r.getCurrentTransform)(D), u.interpolate), f(D, J.img, 0, 0, J.paintWidth, J.paintHeight, 0, -S, v, S), this.compose(), this.restore();
      }
      paintInlineImageXObjectGroup(u, v) {
        if (!this.contentVisible)
          return;
        const S = this.ctx;
        let D;
        if (u.bitmap)
          D = u.bitmap;
        else {
          const q = u.width, J = u.height, z = this.cachedCanvases.getCanvas("inlineImage", q, J).context;
          x(z, u), D = this.applyTransferMapsToCanvas(z);
        }
        for (const q of v)
          S.save(), S.transform(...q.transform), S.scale(1, -1), f(S, D, q.x, q.y, q.w, q.h, 0, -1, 1, 1), S.restore();
        this.compose();
      }
      paintSolidColorImageMask() {
        this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
      }
      markPoint(u) {
      }
      markPointProps(u, v) {
      }
      beginMarkedContent(u) {
        this.markedContentStack.push({ visible: !0 });
      }
      beginMarkedContentProps(u, v) {
        u === "OC" ? this.markedContentStack.push({ visible: this.optionalContentConfig.isVisible(v) }) : this.markedContentStack.push({ visible: !0 }), this.contentVisible = this.isContentVisible();
      }
      endMarkedContent() {
        this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
      }
      beginCompat() {
      }
      endCompat() {
      }
      consumePath(u) {
        const v = this.current.isEmptyClip();
        this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(u);
        const S = this.ctx;
        this.pendingClip && (v || (this.pendingClip === k ? S.clip("evenodd") : S.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), S.beginPath();
      }
      getSinglePixelWidth() {
        if (!this._cachedGetSinglePixelWidth) {
          const u = (0, r.getCurrentTransform)(this.ctx);
          if (u[1] === 0 && u[2] === 0)
            this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(u[0]), Math.abs(u[3]));
          else {
            const v = Math.abs(u[0] * u[3] - u[2] * u[1]), S = Math.hypot(u[0], u[2]), D = Math.hypot(u[1], u[3]);
            this._cachedGetSinglePixelWidth = Math.max(S, D) / v;
          }
        }
        return this._cachedGetSinglePixelWidth;
      }
      getScaleForStroking() {
        if (this._cachedScaleForStroking[0] === -1) {
          const { lineWidth: u } = this.current, { a: v, b: S, c: D, d: q } = this.ctx.getTransform();
          let J, z;
          if (S === 0 && D === 0) {
            const N = Math.abs(v), P = Math.abs(q);
            if (N === P)
              if (u === 0)
                J = z = 1 / N;
              else {
                const I = N * u;
                J = z = I < 1 ? 1 / I : 1;
              }
            else if (u === 0)
              J = 1 / N, z = 1 / P;
            else {
              const I = N * u, E = P * u;
              J = I < 1 ? 1 / I : 1, z = E < 1 ? 1 / E : 1;
            }
          } else {
            const N = Math.abs(v * q - S * D), P = Math.hypot(v, S), I = Math.hypot(D, q);
            if (u === 0)
              J = I / N, z = P / N;
            else {
              const E = u * N;
              J = I > E ? I / E : 1, z = P > E ? P / E : 1;
            }
          }
          this._cachedScaleForStroking[0] = J, this._cachedScaleForStroking[1] = z;
        }
        return this._cachedScaleForStroking;
      }
      rescaleAndStroke(u) {
        const { ctx: v } = this, { lineWidth: S } = this.current, [D, q] = this.getScaleForStroking();
        if (v.lineWidth = S || 1, D === 1 && q === 1) {
          v.stroke();
          return;
        }
        const J = v.getLineDash();
        if (u && v.save(), v.scale(D, q), J.length > 0) {
          const z = Math.max(D, q);
          v.setLineDash(J.map((N) => N / z)), v.lineDashOffset /= z;
        }
        v.stroke(), u && v.restore();
      }
      isContentVisible() {
        for (let u = this.markedContentStack.length - 1; u >= 0; u--)
          if (!this.markedContentStack[u].visible)
            return !1;
        return !0;
      }
    };
    L = new WeakSet(), Je = function() {
      for (; this.stateStack.length || this.inSMaskMode; )
        this.restore();
      this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
    }, V = new WeakSet(), Qe = function() {
      if (this.pageColors) {
        const u = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
        if (u !== "none") {
          const v = this.ctx.filter;
          this.ctx.filter = u, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = v;
        }
      }
    };
    let d = B;
    o.CanvasGraphics = d;
    for (const U in e.OPS)
      d.prototype[U] !== void 0 && (d.prototype[e.OPS[U]] = d.prototype[U]);
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.TilingPattern = o.PathType = void 0, o.getShadingPattern = function(w) {
      switch (w[0]) {
        case "RadialAxial":
          return new h(w);
        case "Mesh":
          return new g(w);
        case "Dummy":
          return new x();
      }
      throw new Error(`Unknown IR type: ${w[0]}`);
    }, t(2);
    var e = t(1), r = t(168);
    const l = { FILL: "Fill", STROKE: "Stroke", SHADING: "Shading" };
    o.PathType = l;
    function m(W, w) {
      if (!w)
        return;
      const n = w[2] - w[0], i = w[3] - w[1], p = new Path2D();
      p.rect(w[0], w[1], n, i), W.clip(p);
    }
    class y {
      constructor() {
        this.constructor === y && (0, e.unreachable)("Cannot initialize BaseShadingPattern.");
      }
      getPattern() {
        (0, e.unreachable)("Abstract method `getPattern` called.");
      }
    }
    class h extends y {
      constructor(w) {
        super(), this._type = w[1], this._bbox = w[2], this._colorStops = w[3], this._p0 = w[4], this._p1 = w[5], this._r0 = w[6], this._r1 = w[7], this.matrix = null;
      }
      _createGradient(w) {
        let n;
        this._type === "axial" ? n = w.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (n = w.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
        for (const i of this._colorStops)
          n.addColorStop(i[0], i[1]);
        return n;
      }
      getPattern(w, n, i, p) {
        let T;
        if (p === l.STROKE || p === l.FILL) {
          const R = n.current.getClippedPathBoundingBox(p, (0, r.getCurrentTransform)(w)) || [0, 0, 0, 0], k = Math.ceil(R[2] - R[0]) || 1, d = Math.ceil(R[3] - R[1]) || 1, L = n.cachedCanvases.getCanvas("pattern", k, d, !0), F = L.context;
          F.clearRect(0, 0, F.canvas.width, F.canvas.height), F.beginPath(), F.rect(0, 0, F.canvas.width, F.canvas.height), F.translate(-R[0], -R[1]), i = e.Util.transform(i, [1, 0, 0, 1, R[0], R[1]]), F.transform(...n.baseTransform), this.matrix && F.transform(...this.matrix), m(F, this._bbox), F.fillStyle = this._createGradient(F), F.fill(), T = w.createPattern(L.canvas, "no-repeat");
          const V = new DOMMatrix(i);
          T.setTransform(V);
        } else
          m(w, this._bbox), T = this._createGradient(w);
        return T;
      }
    }
    function a(W, w, n, i, p, T, R, k) {
      const d = w.coords, L = w.colors, F = W.data, V = 4 * W.width;
      let Z;
      d[n + 1] > d[i + 1] && (Z = n, n = i, i = Z, Z = T, T = R, R = Z), d[i + 1] > d[p + 1] && (Z = i, i = p, p = Z, Z = R, R = k, k = Z), d[n + 1] > d[i + 1] && (Z = n, n = i, i = Z, Z = T, T = R, R = Z);
      const B = (d[n] + w.offsetX) * w.scaleX, U = (d[n + 1] + w.offsetY) * w.scaleY, u = (d[i] + w.offsetX) * w.scaleX, v = (d[i + 1] + w.offsetY) * w.scaleY, S = (d[p] + w.offsetX) * w.scaleX, D = (d[p + 1] + w.offsetY) * w.scaleY;
      if (U >= D)
        return;
      const q = L[T], J = L[T + 1], z = L[T + 2], N = L[R], P = L[R + 1], I = L[R + 2], E = L[k], j = L[k + 1], $ = L[k + 2], H = Math.round(U), Y = Math.round(D);
      let X, tt, nt, lt, ht, gt, St, ft;
      for (let bt = H; bt <= Y; bt++) {
        if (bt < v) {
          const It = bt < U ? 0 : (U - bt) / (U - v);
          X = B - (B - u) * It, tt = q - (q - N) * It, nt = J - (J - P) * It, lt = z - (z - I) * It;
        } else {
          let It;
          It = bt > D ? 1 : v === D ? 0 : (v - bt) / (v - D), X = u - (u - S) * It, tt = N - (N - E) * It, nt = P - (P - j) * It, lt = I - (I - $) * It;
        }
        let wt;
        wt = bt < U ? 0 : bt > D ? 1 : (U - bt) / (U - D), ht = B - (B - S) * wt, gt = q - (q - E) * wt, St = J - (J - j) * wt, ft = z - (z - $) * wt;
        const yt = Math.round(Math.min(X, ht)), Et = Math.round(Math.max(X, ht));
        let Ft = V * bt + 4 * yt;
        for (let It = yt; It <= Et; It++)
          wt = (X - It) / (X - ht), wt < 0 ? wt = 0 : wt > 1 && (wt = 1), F[Ft++] = tt - (tt - gt) * wt | 0, F[Ft++] = nt - (nt - St) * wt | 0, F[Ft++] = lt - (lt - ft) * wt | 0, F[Ft++] = 255;
      }
    }
    function f(W, w, n) {
      const i = w.coords, p = w.colors;
      let T, R;
      switch (w.type) {
        case "lattice":
          const k = w.verticesPerRow, d = Math.floor(i.length / k) - 1, L = k - 1;
          for (T = 0; T < d; T++) {
            let F = T * k;
            for (let V = 0; V < L; V++, F++)
              a(W, n, i[F], i[F + 1], i[F + k], p[F], p[F + 1], p[F + k]), a(W, n, i[F + k + 1], i[F + 1], i[F + k], p[F + k + 1], p[F + 1], p[F + k]);
          }
          break;
        case "triangles":
          for (T = 0, R = i.length; T < R; T += 3)
            a(W, n, i[T], i[T + 1], i[T + 2], p[T], p[T + 1], p[T + 2]);
          break;
        default:
          throw new Error("illegal figure");
      }
    }
    class g extends y {
      constructor(w) {
        super(), this._coords = w[2], this._colors = w[3], this._figures = w[4], this._bounds = w[5], this._bbox = w[7], this._background = w[8], this.matrix = null;
      }
      _createMeshCanvas(w, n, i) {
        const p = Math.floor(this._bounds[0]), T = Math.floor(this._bounds[1]), R = Math.ceil(this._bounds[2]) - p, k = Math.ceil(this._bounds[3]) - T, d = Math.min(Math.ceil(Math.abs(R * w[0] * 1.1)), 3e3), L = Math.min(Math.ceil(Math.abs(k * w[1] * 1.1)), 3e3), F = R / d, V = k / L, Z = { coords: this._coords, colors: this._colors, offsetX: -p, offsetY: -T, scaleX: 1 / F, scaleY: 1 / V }, B = d + 4, U = L + 4, u = i.getCanvas("mesh", B, U, !1), v = u.context, S = v.createImageData(d, L);
        if (n) {
          const D = S.data;
          for (let q = 0, J = D.length; q < J; q += 4)
            D[q] = n[0], D[q + 1] = n[1], D[q + 2] = n[2], D[q + 3] = 255;
        }
        for (const D of this._figures)
          f(S, D, Z);
        return v.putImageData(S, 2, 2), { canvas: u.canvas, offsetX: p - 2 * F, offsetY: T - 2 * V, scaleX: F, scaleY: V };
      }
      getPattern(w, n, i, p) {
        m(w, this._bbox);
        let T;
        if (p === l.SHADING)
          T = e.Util.singularValueDecompose2dScale((0, r.getCurrentTransform)(w));
        else if (T = e.Util.singularValueDecompose2dScale(n.baseTransform), this.matrix) {
          const k = e.Util.singularValueDecompose2dScale(this.matrix);
          T = [T[0] * k[0], T[1] * k[1]];
        }
        const R = this._createMeshCanvas(T, p === l.SHADING ? null : this._background, n.cachedCanvases);
        return p !== l.SHADING && (w.setTransform(...n.baseTransform), this.matrix && w.transform(...this.matrix)), w.translate(R.offsetX, R.offsetY), w.scale(R.scaleX, R.scaleY), w.createPattern(R.canvas, "no-repeat");
      }
    }
    class x extends y {
      getPattern() {
        return "hotpink";
      }
    }
    const b = 1, _ = 2, O = class O {
      constructor(w, n, i, p, T) {
        this.operatorList = w[2], this.matrix = w[3] || [1, 0, 0, 1, 0, 0], this.bbox = w[4], this.xstep = w[5], this.ystep = w[6], this.paintType = w[7], this.tilingType = w[8], this.color = n, this.ctx = i, this.canvasGraphicsFactory = p, this.baseTransform = T;
      }
      createPatternCanvas(w) {
        const n = this.operatorList, i = this.bbox, p = this.xstep, T = this.ystep, R = this.paintType, k = this.tilingType, d = this.color, L = this.canvasGraphicsFactory;
        (0, e.info)("TilingType: " + k);
        const F = i[0], V = i[1], Z = i[2], B = i[3], U = e.Util.singularValueDecompose2dScale(this.matrix), u = e.Util.singularValueDecompose2dScale(this.baseTransform), v = [U[0] * u[0], U[1] * u[1]], S = this.getSizeAndScale(p, this.ctx.canvas.width, v[0]), D = this.getSizeAndScale(T, this.ctx.canvas.height, v[1]), q = w.cachedCanvases.getCanvas("pattern", S.size, D.size, !0), J = q.context, z = L.createCanvasGraphics(J);
        z.groupLevel = w.groupLevel, this.setFillAndStrokeStyleToContext(z, R, d);
        let N = F, P = V, I = Z, E = B;
        return F < 0 && (N = 0, I += Math.abs(F)), V < 0 && (P = 0, E += Math.abs(V)), J.translate(-S.scale * N, -D.scale * P), z.transform(S.scale, 0, 0, D.scale, 0, 0), J.save(), this.clipBbox(z, N, P, I, E), z.baseTransform = (0, r.getCurrentTransform)(z.ctx), z.executeOperatorList(n), z.endDrawing(), { canvas: q.canvas, scaleX: S.scale, scaleY: D.scale, offsetX: N, offsetY: P };
      }
      getSizeAndScale(w, n, i) {
        w = Math.abs(w);
        const p = Math.max(O.MAX_PATTERN_SIZE, n);
        let T = Math.ceil(w * i);
        return T >= p ? T = p : i = T / w, { scale: i, size: T };
      }
      clipBbox(w, n, i, p, T) {
        const R = p - n, k = T - i;
        w.ctx.rect(n, i, R, k), w.current.updateRectMinMax((0, r.getCurrentTransform)(w.ctx), [n, i, p, T]), w.clip(), w.endPath();
      }
      setFillAndStrokeStyleToContext(w, n, i) {
        const p = w.ctx, T = w.current;
        switch (n) {
          case b:
            const R = this.ctx;
            p.fillStyle = R.fillStyle, p.strokeStyle = R.strokeStyle, T.fillColor = R.fillStyle, T.strokeColor = R.strokeStyle;
            break;
          case _:
            const k = e.Util.makeHexColor(i[0], i[1], i[2]);
            p.fillStyle = k, p.strokeStyle = k, T.fillColor = k, T.strokeColor = k;
            break;
          default:
            throw new e.FormatError(`Unsupported paint type: ${n}`);
        }
      }
      getPattern(w, n, i, p) {
        let T = i;
        p !== l.SHADING && (T = e.Util.transform(T, n.baseTransform), this.matrix && (T = e.Util.transform(T, this.matrix)));
        const R = this.createPatternCanvas(n);
        let k = new DOMMatrix(T);
        k = k.translate(R.offsetX, R.offsetY), k = k.scale(1 / R.scaleX, 1 / R.scaleY);
        const d = w.createPattern(R.canvas, "repeat");
        return d.setTransform(k), d;
      }
    };
    Yt(O, "MAX_PATTERN_SIZE", 3e3);
    let M = O;
    o.TilingPattern = M;
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.convertBlackAndWhiteToRGBA = r, o.convertToRGBA = function(m) {
      switch (m.kind) {
        case e.ImageKind.GRAYSCALE_1BPP:
          return r(m);
        case e.ImageKind.RGB_24BPP:
          return function(h) {
            let { src: a, srcPos: f = 0, dest: g, destPos: x = 0, width: b, height: _ } = h, M = 0;
            const O = a.length >> 2, W = new Uint32Array(a.buffer, f, O);
            if (e.FeatureTest.isLittleEndian) {
              for (; M < O - 2; M += 3, x += 4) {
                const w = W[M], n = W[M + 1], i = W[M + 2];
                g[x] = 4278190080 | w, g[x + 1] = w >>> 24 | n << 8 | 4278190080, g[x + 2] = n >>> 16 | i << 16 | 4278190080, g[x + 3] = i >>> 8 | 4278190080;
              }
              for (let w = 4 * M, n = a.length; w < n; w += 3)
                g[x++] = a[w] | a[w + 1] << 8 | a[w + 2] << 16 | 4278190080;
            } else {
              for (; M < O - 2; M += 3, x += 4) {
                const w = W[M], n = W[M + 1], i = W[M + 2];
                g[x] = 255 | w, g[x + 1] = w << 24 | n >>> 8 | 255, g[x + 2] = n << 16 | i >>> 16 | 255, g[x + 3] = i << 8 | 255;
              }
              for (let w = 4 * M, n = a.length; w < n; w += 3)
                g[x++] = a[w] << 24 | a[w + 1] << 16 | a[w + 2] << 8 | 255;
            }
            return { srcPos: f, destPos: x };
          }(m);
      }
      return null;
    }, o.grayToRGBA = function(m, y) {
      if (e.FeatureTest.isLittleEndian)
        for (let h = 0, a = m.length; h < a; h++)
          y[h] = 65793 * m[h] | 4278190080;
      else
        for (let h = 0, a = m.length; h < a; h++)
          y[h] = 16843008 * m[h] | 255;
    }, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
    var e = t(1);
    function r(l) {
      let { src: m, srcPos: y = 0, dest: h, width: a, height: f, nonBlackColor: g = 4294967295, inverseDecode: x = !1 } = l;
      const b = e.FeatureTest.isLittleEndian ? 4278190080 : 255, [_, M] = x ? [g, b] : [b, g], O = a >> 3, W = 7 & a, w = m.length;
      h = new Uint32Array(h.buffer);
      let n = 0;
      for (let i = 0; i < f; i++) {
        for (const T = y + O; y < T; y++) {
          const R = y < w ? m[y] : 255;
          h[n++] = 128 & R ? M : _, h[n++] = 64 & R ? M : _, h[n++] = 32 & R ? M : _, h[n++] = 16 & R ? M : _, h[n++] = 8 & R ? M : _, h[n++] = 4 & R ? M : _, h[n++] = 2 & R ? M : _, h[n++] = 1 & R ? M : _;
        }
        if (W === 0)
          continue;
        const p = y < w ? m[y++] : 255;
        for (let T = 0; T < W; T++)
          h[n++] = p & 1 << 7 - T ? M : _;
      }
      return { srcPos: y, destPos: n };
    }
  }, (C, o) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.GlobalWorkerOptions = void 0;
    const t = /* @__PURE__ */ Object.create(null);
    o.GlobalWorkerOptions = t, t.workerPort = null, t.workerSrc = "";
  }, (C, o, t) => {
    var M, Tr, W, Pr, n, Te, p;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.MessageHandler = void 0, t(2);
    var e = t(1);
    const r = 1, l = 2, m = 1, y = 2, h = 3, a = 4, f = 5, g = 6, x = 7, b = 8;
    function _(T) {
      switch (T instanceof Error || typeof T == "object" && T !== null || (0, e.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), T.name) {
        case "AbortException":
          return new e.AbortException(T.message);
        case "MissingPDFException":
          return new e.MissingPDFException(T.message);
        case "PasswordException":
          return new e.PasswordException(T.message, T.code);
        case "UnexpectedResponseException":
          return new e.UnexpectedResponseException(T.message, T.status);
        case "UnknownErrorException":
          return new e.UnknownErrorException(T.message, T.details);
        default:
          return new e.UnknownErrorException(T.message, T.toString());
      }
    }
    o.MessageHandler = (p = class {
      constructor(R, k, d) {
        K(this, M);
        K(this, W);
        K(this, n);
        this.sourceName = R, this.targetName = k, this.comObj = d, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (L) => {
          const F = L.data;
          if (F.targetName !== this.sourceName)
            return;
          if (F.stream) {
            rt(this, W, Pr).call(this, F);
            return;
          }
          if (F.callback) {
            const Z = F.callbackId, B = this.callbackCapabilities[Z];
            if (!B)
              throw new Error(`Cannot resolve callback ${Z}`);
            if (delete this.callbackCapabilities[Z], F.callback === r)
              B.resolve(F.data);
            else {
              if (F.callback !== l)
                throw new Error("Unexpected callback case");
              B.reject(_(F.reason));
            }
            return;
          }
          const V = this.actionHandler[F.action];
          if (!V)
            throw new Error(`Unknown action from worker: ${F.action}`);
          if (F.callbackId) {
            const Z = this.sourceName, B = F.sourceName;
            new Promise(function(U) {
              U(V(F.data));
            }).then(function(U) {
              d.postMessage({ sourceName: Z, targetName: B, callback: r, callbackId: F.callbackId, data: U });
            }, function(U) {
              d.postMessage({ sourceName: Z, targetName: B, callback: l, callbackId: F.callbackId, reason: _(U) });
            });
          } else
            F.streamId ? rt(this, M, Tr).call(this, F) : V(F.data);
        }, d.addEventListener("message", this._onComObjOnMessage);
      }
      on(R, k) {
        const d = this.actionHandler;
        if (d[R])
          throw new Error(`There is already an actionName called "${R}"`);
        d[R] = k;
      }
      send(R, k, d) {
        this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: R, data: k }, d);
      }
      sendWithPromise(R, k, d) {
        const L = this.callbackId++, F = new e.PromiseCapability();
        this.callbackCapabilities[L] = F;
        try {
          this.comObj.postMessage({ sourceName: this.sourceName, targetName: this.targetName, action: R, callbackId: L, data: k }, d);
        } catch (V) {
          F.reject(V);
        }
        return F.promise;
      }
      sendWithStream(R, k, d, L) {
        const F = this.streamId++, V = this.sourceName, Z = this.targetName, B = this.comObj;
        return new ReadableStream({ start: (U) => {
          const u = new e.PromiseCapability();
          return this.streamControllers[F] = { controller: U, startCall: u, pullCall: null, cancelCall: null, isClosed: !1 }, B.postMessage({ sourceName: V, targetName: Z, action: R, streamId: F, data: k, desiredSize: U.desiredSize }, L), u.promise;
        }, pull: (U) => {
          const u = new e.PromiseCapability();
          return this.streamControllers[F].pullCall = u, B.postMessage({ sourceName: V, targetName: Z, stream: g, streamId: F, desiredSize: U.desiredSize }), u.promise;
        }, cancel: (U) => {
          (0, e.assert)(U instanceof Error, "cancel must have a valid reason");
          const u = new e.PromiseCapability();
          return this.streamControllers[F].cancelCall = u, this.streamControllers[F].isClosed = !0, B.postMessage({ sourceName: V, targetName: Z, stream: m, streamId: F, reason: _(U) }), u.promise;
        } }, d);
      }
      destroy() {
        this.comObj.removeEventListener("message", this._onComObjOnMessage);
      }
    }, M = new WeakSet(), Tr = function(R) {
      const k = R.streamId, d = this.sourceName, L = R.sourceName, F = this.comObj, V = this, Z = this.actionHandler[R.action], B = { enqueue(U) {
        let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, v = arguments.length > 2 ? arguments[2] : void 0;
        if (this.isCancelled)
          return;
        const S = this.desiredSize;
        this.desiredSize -= u, S > 0 && this.desiredSize <= 0 && (this.sinkCapability = new e.PromiseCapability(), this.ready = this.sinkCapability.promise), F.postMessage({ sourceName: d, targetName: L, stream: a, streamId: k, chunk: U }, v);
      }, close() {
        this.isCancelled || (this.isCancelled = !0, F.postMessage({ sourceName: d, targetName: L, stream: h, streamId: k }), delete V.streamSinks[k]);
      }, error(U) {
        (0, e.assert)(U instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, F.postMessage({ sourceName: d, targetName: L, stream: f, streamId: k, reason: _(U) }));
      }, sinkCapability: new e.PromiseCapability(), onPull: null, onCancel: null, isCancelled: !1, desiredSize: R.desiredSize, ready: null };
      B.sinkCapability.resolve(), B.ready = B.sinkCapability.promise, this.streamSinks[k] = B, new Promise(function(U) {
        U(Z(R.data, B));
      }).then(function() {
        F.postMessage({ sourceName: d, targetName: L, stream: b, streamId: k, success: !0 });
      }, function(U) {
        F.postMessage({ sourceName: d, targetName: L, stream: b, streamId: k, reason: _(U) });
      });
    }, W = new WeakSet(), Pr = function(R) {
      const k = R.streamId, d = this.sourceName, L = R.sourceName, F = this.comObj, V = this.streamControllers[k], Z = this.streamSinks[k];
      switch (R.stream) {
        case b:
          R.success ? V.startCall.resolve() : V.startCall.reject(_(R.reason));
          break;
        case x:
          R.success ? V.pullCall.resolve() : V.pullCall.reject(_(R.reason));
          break;
        case g:
          if (!Z) {
            F.postMessage({ sourceName: d, targetName: L, stream: x, streamId: k, success: !0 });
            break;
          }
          Z.desiredSize <= 0 && R.desiredSize > 0 && Z.sinkCapability.resolve(), Z.desiredSize = R.desiredSize, new Promise(function(B) {
            var U;
            B((U = Z.onPull) == null ? void 0 : U.call(Z));
          }).then(function() {
            F.postMessage({ sourceName: d, targetName: L, stream: x, streamId: k, success: !0 });
          }, function(B) {
            F.postMessage({ sourceName: d, targetName: L, stream: x, streamId: k, reason: _(B) });
          });
          break;
        case a:
          if ((0, e.assert)(V, "enqueue should have stream controller"), V.isClosed)
            break;
          V.controller.enqueue(R.chunk);
          break;
        case h:
          if ((0, e.assert)(V, "close should have stream controller"), V.isClosed)
            break;
          V.isClosed = !0, V.controller.close(), rt(this, n, Te).call(this, V, k);
          break;
        case f:
          (0, e.assert)(V, "error should have stream controller"), V.controller.error(_(R.reason)), rt(this, n, Te).call(this, V, k);
          break;
        case y:
          R.success ? V.cancelCall.resolve() : V.cancelCall.reject(_(R.reason)), rt(this, n, Te).call(this, V, k);
          break;
        case m:
          if (!Z)
            break;
          new Promise(function(B) {
            var U;
            B((U = Z.onCancel) == null ? void 0 : U.call(Z, _(R.reason)));
          }).then(function() {
            F.postMessage({ sourceName: d, targetName: L, stream: y, streamId: k, success: !0 });
          }, function(B) {
            F.postMessage({ sourceName: d, targetName: L, stream: y, streamId: k, reason: _(B) });
          }), Z.sinkCapability.reject(_(R.reason)), Z.isCancelled = !0, delete this.streamSinks[k];
          break;
        default:
          throw new Error("Unexpected stream case");
      }
    }, n = new WeakSet(), Te = async function(R, k) {
      var d, L, F;
      await Promise.allSettled([(d = R.startCall) == null ? void 0 : d.promise, (L = R.pullCall) == null ? void 0 : L.promise, (F = R.cancelCall) == null ? void 0 : F.promise]), delete this.streamControllers[k];
    }, p);
  }, (C, o, t) => {
    var r, l, m;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.Metadata = void 0;
    var e = t(1);
    o.Metadata = (m = class {
      constructor(h) {
        K(this, r, void 0);
        K(this, l, void 0);
        let { parsedData: a, rawData: f } = h;
        at(this, r, a), at(this, l, f);
      }
      getRaw() {
        return s(this, l);
      }
      get(h) {
        var a;
        return (a = s(this, r).get(h)) != null ? a : null;
      }
      getAll() {
        return (0, e.objectFromMap)(s(this, r));
      }
      has(h) {
        return s(this, r).has(h);
      }
    }, r = new WeakMap(), l = new WeakMap(), m);
  }, (C, o, t) => {
    var y, h, a, f, g, x, Ze, _;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.OptionalContentConfig = void 0;
    var e = t(1), r = t(170);
    const l = Symbol("INTERNAL");
    class m {
      constructor(O, W) {
        K(this, y, !0);
        this.name = O, this.intent = W;
      }
      get visible() {
        return s(this, y);
      }
      _setVisible(O, W) {
        O !== l && (0, e.unreachable)("Internal method `_setVisible` called."), at(this, y, W);
      }
    }
    y = new WeakMap(), o.OptionalContentConfig = (_ = class {
      constructor(O) {
        K(this, x);
        K(this, h, null);
        K(this, a, /* @__PURE__ */ new Map());
        K(this, f, null);
        K(this, g, null);
        if (this.name = null, this.creator = null, O !== null) {
          this.name = O.name, this.creator = O.creator, at(this, g, O.order);
          for (const W of O.groups)
            s(this, a).set(W.id, new m(W.name, W.intent));
          if (O.baseState === "OFF")
            for (const W of s(this, a).values())
              W._setVisible(l, !1);
          for (const W of O.on)
            s(this, a).get(W)._setVisible(l, !0);
          for (const W of O.off)
            s(this, a).get(W)._setVisible(l, !1);
          at(this, f, this.getHash());
        }
      }
      isVisible(O) {
        if (s(this, a).size === 0)
          return !0;
        if (!O)
          return (0, e.warn)("Optional content group not defined."), !0;
        if (O.type === "OCG")
          return s(this, a).has(O.id) ? s(this, a).get(O.id).visible : ((0, e.warn)(`Optional content group not found: ${O.id}`), !0);
        if (O.type === "OCMD") {
          if (O.expression)
            return rt(this, x, Ze).call(this, O.expression);
          if (!O.policy || O.policy === "AnyOn") {
            for (const W of O.ids) {
              if (!s(this, a).has(W))
                return (0, e.warn)(`Optional content group not found: ${W}`), !0;
              if (s(this, a).get(W).visible)
                return !0;
            }
            return !1;
          }
          if (O.policy === "AllOn") {
            for (const W of O.ids) {
              if (!s(this, a).has(W))
                return (0, e.warn)(`Optional content group not found: ${W}`), !0;
              if (!s(this, a).get(W).visible)
                return !1;
            }
            return !0;
          }
          if (O.policy === "AnyOff") {
            for (const W of O.ids) {
              if (!s(this, a).has(W))
                return (0, e.warn)(`Optional content group not found: ${W}`), !0;
              if (!s(this, a).get(W).visible)
                return !0;
            }
            return !1;
          }
          if (O.policy === "AllOff") {
            for (const W of O.ids) {
              if (!s(this, a).has(W))
                return (0, e.warn)(`Optional content group not found: ${W}`), !0;
              if (s(this, a).get(W).visible)
                return !1;
            }
            return !0;
          }
          return (0, e.warn)(`Unknown optional content policy ${O.policy}.`), !0;
        }
        return (0, e.warn)(`Unknown group type ${O.type}.`), !0;
      }
      setVisibility(O) {
        let W = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
        s(this, a).has(O) ? (s(this, a).get(O)._setVisible(l, !!W), at(this, h, null)) : (0, e.warn)(`Optional content group not found: ${O}`);
      }
      get hasInitialVisibility() {
        return s(this, f) === null || this.getHash() === s(this, f);
      }
      getOrder() {
        return s(this, a).size ? s(this, g) ? s(this, g).slice() : [...s(this, a).keys()] : null;
      }
      getGroups() {
        return s(this, a).size > 0 ? (0, e.objectFromMap)(s(this, a)) : null;
      }
      getGroup(O) {
        return s(this, a).get(O) || null;
      }
      getHash() {
        if (s(this, h) !== null)
          return s(this, h);
        const O = new r.MurmurHash3_64();
        for (const [W, w] of s(this, a))
          O.update(`${W}:${w.visible}`);
        return at(this, h, O.hexdigest());
      }
    }, h = new WeakMap(), a = new WeakMap(), f = new WeakMap(), g = new WeakMap(), x = new WeakSet(), Ze = function(O) {
      const W = O.length;
      if (W < 2)
        return !0;
      const w = O[0];
      for (let n = 1; n < W; n++) {
        const i = O[n];
        let p;
        if (Array.isArray(i))
          p = rt(this, x, Ze).call(this, i);
        else {
          if (!s(this, a).has(i))
            return (0, e.warn)(`Optional content group not found: ${i}`), !0;
          p = s(this, a).get(i).visible;
        }
        switch (w) {
          case "And":
            if (!p)
              return !1;
            break;
          case "Or":
            if (p)
              return !0;
            break;
          case "Not":
            return !p;
          default:
            return !0;
        }
      }
      return w === "And";
    }, _);
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.PDFDataTransportStream = void 0, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89);
    var e = t(1), r = t(168);
    o.PDFDataTransportStream = class {
      constructor(h, a) {
        let { length: f, initialData: g, progressiveDone: x = !1, contentDispositionFilename: b = null, disableRange: _ = !1, disableStream: M = !1 } = h;
        if ((0, e.assert)(a, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = x, this._contentDispositionFilename = b, (g == null ? void 0 : g.length) > 0) {
          const O = g instanceof Uint8Array && g.byteLength === g.buffer.byteLength ? g.buffer : new Uint8Array(g).buffer;
          this._queuedChunks.push(O);
        }
        this._pdfDataRangeTransport = a, this._isStreamingSupported = !M, this._isRangeSupported = !_, this._contentLength = f, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((O, W) => {
          this._onReceiveData({ begin: O, chunk: W });
        }), this._pdfDataRangeTransport.addProgressListener((O, W) => {
          this._onProgress({ loaded: O, total: W });
        }), this._pdfDataRangeTransport.addProgressiveReadListener((O) => {
          this._onReceiveData({ chunk: O });
        }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
          this._onProgressiveDone();
        }), this._pdfDataRangeTransport.transportReady();
      }
      _onReceiveData(h) {
        let { begin: a, chunk: f } = h;
        const g = f instanceof Uint8Array && f.byteLength === f.buffer.byteLength ? f.buffer : new Uint8Array(f).buffer;
        if (a === void 0)
          this._fullRequestReader ? this._fullRequestReader._enqueue(g) : this._queuedChunks.push(g);
        else {
          const x = this._rangeReaders.some(function(b) {
            return b._begin !== a ? !1 : (b._enqueue(g), !0);
          });
          (0, e.assert)(x, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
        }
      }
      get _progressiveDataLength() {
        var h, a;
        return (a = (h = this._fullRequestReader) == null ? void 0 : h._loaded) != null ? a : 0;
      }
      _onProgress(h) {
        var a, f, g, x;
        h.total === void 0 ? (f = (a = this._rangeReaders[0]) == null ? void 0 : a.onProgress) == null || f.call(a, { loaded: h.loaded }) : (x = (g = this._fullRequestReader) == null ? void 0 : g.onProgress) == null || x.call(g, { loaded: h.loaded, total: h.total });
      }
      _onProgressiveDone() {
        var h;
        (h = this._fullRequestReader) == null || h.progressiveDone(), this._progressiveDone = !0;
      }
      _removeRangeReader(h) {
        const a = this._rangeReaders.indexOf(h);
        a >= 0 && this._rangeReaders.splice(a, 1);
      }
      getFullReader() {
        (0, e.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
        const h = this._queuedChunks;
        return this._queuedChunks = null, new l(this, h, this._progressiveDone, this._contentDispositionFilename);
      }
      getRangeReader(h, a) {
        if (a <= this._progressiveDataLength)
          return null;
        const f = new m(this, h, a);
        return this._pdfDataRangeTransport.requestDataRange(h, a), this._rangeReaders.push(f), f;
      }
      cancelAllRequests(h) {
        var a;
        (a = this._fullRequestReader) == null || a.cancel(h);
        for (const f of this._rangeReaders.slice(0))
          f.cancel(h);
        this._pdfDataRangeTransport.abort();
      }
    };
    class l {
      constructor(h, a) {
        let f = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        this._stream = h, this._done = f || !1, this._filename = (0, r.isPdfFile)(g) ? g : null, this._queuedChunks = a || [], this._loaded = 0;
        for (const x of this._queuedChunks)
          this._loaded += x.byteLength;
        this._requests = [], this._headersReady = Promise.resolve(), h._fullRequestReader = this, this.onProgress = null;
      }
      _enqueue(h) {
        this._done || (this._requests.length > 0 ? this._requests.shift().resolve({ value: h, done: !1 }) : this._queuedChunks.push(h), this._loaded += h.byteLength);
      }
      get headersReady() {
        return this._headersReady;
      }
      get filename() {
        return this._filename;
      }
      get isRangeSupported() {
        return this._stream._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._stream._isStreamingSupported;
      }
      get contentLength() {
        return this._stream._contentLength;
      }
      async read() {
        if (this._queuedChunks.length > 0)
          return { value: this._queuedChunks.shift(), done: !1 };
        if (this._done)
          return { value: void 0, done: !0 };
        const h = new e.PromiseCapability();
        return this._requests.push(h), h.promise;
      }
      cancel(h) {
        this._done = !0;
        for (const a of this._requests)
          a.resolve({ value: void 0, done: !0 });
        this._requests.length = 0;
      }
      progressiveDone() {
        this._done || (this._done = !0);
      }
    }
    class m {
      constructor(h, a, f) {
        this._stream = h, this._begin = a, this._end = f, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
      }
      _enqueue(h) {
        if (!this._done) {
          if (this._requests.length === 0)
            this._queuedChunk = h;
          else {
            this._requests.shift().resolve({ value: h, done: !1 });
            for (const a of this._requests)
              a.resolve({ value: void 0, done: !0 });
            this._requests.length = 0;
          }
          this._done = !0, this._stream._removeRangeReader(this);
        }
      }
      get isStreamingSupported() {
        return !1;
      }
      async read() {
        if (this._queuedChunk) {
          const a = this._queuedChunk;
          return this._queuedChunk = null, { value: a, done: !1 };
        }
        if (this._done)
          return { value: void 0, done: !0 };
        const h = new e.PromiseCapability();
        return this._requests.push(h), h.promise;
      }
      cancel(h) {
        this._done = !0;
        for (const a of this._requests)
          a.resolve({ value: void 0, done: !0 });
        this._requests.length = 0, this._stream._removeRangeReader(this);
      }
    }
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.PDFFetchStream = void 0, t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(89);
    var e = t(1), r = t(182);
    function l(f, g, x) {
      return { method: "GET", headers: f, signal: x.signal, mode: "cors", credentials: g ? "include" : "same-origin", redirect: "follow" };
    }
    function m(f) {
      const g = new Headers();
      for (const x in f) {
        const b = f[x];
        b !== void 0 && g.append(x, b);
      }
      return g;
    }
    function y(f) {
      return f instanceof Uint8Array ? f.buffer : f instanceof ArrayBuffer ? f : ((0, e.warn)(`getArrayBuffer - unexpected data format: ${f}`), new Uint8Array(f).buffer);
    }
    o.PDFFetchStream = class {
      constructor(g) {
        this.source = g, this.isHttp = /^https?:/i.test(g.url), this.httpHeaders = this.isHttp && g.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
      }
      get _progressiveDataLength() {
        var g, x;
        return (x = (g = this._fullRequestReader) == null ? void 0 : g._loaded) != null ? x : 0;
      }
      getFullReader() {
        return (0, e.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new h(this), this._fullRequestReader;
      }
      getRangeReader(g, x) {
        if (x <= this._progressiveDataLength)
          return null;
        const b = new a(this, g, x);
        return this._rangeRequestReaders.push(b), b;
      }
      cancelAllRequests(g) {
        var x;
        (x = this._fullRequestReader) == null || x.cancel(g);
        for (const b of this._rangeRequestReaders.slice(0))
          b.cancel(g);
      }
    };
    class h {
      constructor(g) {
        this._stream = g, this._reader = null, this._loaded = 0, this._filename = null;
        const x = g.source;
        this._withCredentials = x.withCredentials || !1, this._contentLength = x.length, this._headersCapability = new e.PromiseCapability(), this._disableRange = x.disableRange || !1, this._rangeChunkSize = x.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !x.disableStream, this._isRangeSupported = !x.disableRange, this._headers = m(this._stream.httpHeaders);
        const b = x.url;
        fetch(b, l(this._headers, this._withCredentials, this._abortController)).then((_) => {
          if (!(0, r.validateResponseStatus)(_.status))
            throw (0, r.createResponseStatusError)(_.status, b);
          this._reader = _.body.getReader(), this._headersCapability.resolve();
          const M = (w) => _.headers.get(w), { allowRangeRequests: O, suggestedLength: W } = (0, r.validateRangeRequestCapabilities)({ getResponseHeader: M, isHttp: this._stream.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
          this._isRangeSupported = O, this._contentLength = W || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(M), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new e.AbortException("Streaming is disabled."));
        }).catch(this._headersCapability.reject), this.onProgress = null;
      }
      get headersReady() {
        return this._headersCapability.promise;
      }
      get filename() {
        return this._filename;
      }
      get contentLength() {
        return this._contentLength;
      }
      get isRangeSupported() {
        return this._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      async read() {
        var b;
        await this._headersCapability.promise;
        const { value: g, done: x } = await this._reader.read();
        return x ? { value: g, done: x } : (this._loaded += g.byteLength, (b = this.onProgress) == null || b.call(this, { loaded: this._loaded, total: this._contentLength }), { value: y(g), done: !1 });
      }
      cancel(g) {
        var x;
        (x = this._reader) == null || x.cancel(g), this._abortController.abort();
      }
    }
    class a {
      constructor(g, x, b) {
        this._stream = g, this._reader = null, this._loaded = 0;
        const _ = g.source;
        this._withCredentials = _.withCredentials || !1, this._readCapability = new e.PromiseCapability(), this._isStreamingSupported = !_.disableStream, this._abortController = new AbortController(), this._headers = m(this._stream.httpHeaders), this._headers.append("Range", `bytes=${x}-${b - 1}`);
        const M = _.url;
        fetch(M, l(this._headers, this._withCredentials, this._abortController)).then((O) => {
          if (!(0, r.validateResponseStatus)(O.status))
            throw (0, r.createResponseStatusError)(O.status, M);
          this._readCapability.resolve(), this._reader = O.body.getReader();
        }).catch(this._readCapability.reject), this.onProgress = null;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      async read() {
        var b;
        await this._readCapability.promise;
        const { value: g, done: x } = await this._reader.read();
        return x ? { value: g, done: x } : (this._loaded += g.byteLength, (b = this.onProgress) == null || b.call(this, { loaded: this._loaded }), { value: y(g), done: !1 });
      }
      cancel(g) {
        var x;
        (x = this._reader) == null || x.cancel(g), this._abortController.abort();
      }
    }
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.createResponseStatusError = function(y, h) {
      return y === 404 || y === 0 && h.startsWith("file:") ? new e.MissingPDFException('Missing PDF "' + h + '".') : new e.UnexpectedResponseException(`Unexpected server response (${y}) while retrieving PDF "${h}".`, y);
    }, o.extractFilenameFromHeader = function(y) {
      const h = y("Content-Disposition");
      if (h) {
        let a = (0, r.getFilenameFromContentDispositionHeader)(h);
        if (a.includes("%"))
          try {
            a = decodeURIComponent(a);
          } catch {
          }
        if ((0, l.isPdfFile)(a))
          return a;
      }
      return null;
    }, o.validateRangeRequestCapabilities = function(y) {
      let { getResponseHeader: h, isHttp: a, rangeChunkSize: f, disableRange: g } = y;
      const x = { allowRangeRequests: !1, suggestedLength: void 0 }, b = parseInt(h("Content-Length"), 10);
      return !Number.isInteger(b) || (x.suggestedLength = b, b <= 2 * f) || g || !a || h("Accept-Ranges") !== "bytes" || (h("Content-Encoding") || "identity") !== "identity" || (x.allowRangeRequests = !0), x;
    }, o.validateResponseStatus = function(y) {
      return y === 200 || y === 206;
    };
    var e = t(1), r = t(183), l = t(168);
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.getFilenameFromContentDispositionHeader = function(l) {
      let m = !0, y = h("filename\\*", "i").exec(l);
      if (y) {
        y = y[1];
        let _ = g(y);
        return _ = unescape(_), _ = x(_), _ = b(_), f(_);
      }
      if (y = function(M) {
        const O = [];
        let W;
        const w = h("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
        for (; (W = w.exec(M)) !== null; ) {
          let [, i, p, T] = W;
          if (i = parseInt(i, 10), i in O) {
            if (i === 0)
              break;
          } else
            O[i] = [p, T];
        }
        const n = [];
        for (let i = 0; i < O.length && i in O; ++i) {
          let [p, T] = O[i];
          T = g(T), p && (T = unescape(T), i === 0 && (T = x(T))), n.push(T);
        }
        return n.join("");
      }(l), y)
        return f(b(y));
      if (y = h("filename", "i").exec(l), y) {
        y = y[1];
        let _ = g(y);
        return _ = b(_), f(_);
      }
      function h(_, M) {
        return new RegExp("(?:^|;)\\s*" + _ + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', M);
      }
      function a(_, M) {
        if (_) {
          if (!/^[\x00-\xFF]+$/.test(M))
            return M;
          try {
            const O = new TextDecoder(_, { fatal: !0 }), W = (0, e.stringToBytes)(M);
            M = O.decode(W), m = !1;
          } catch {
          }
        }
        return M;
      }
      function f(_) {
        return m && /[\x80-\xff]/.test(_) && (_ = a("utf-8", _), m && (_ = a("iso-8859-1", _))), _;
      }
      function g(_) {
        if (_.startsWith('"')) {
          const M = _.slice(1).split('\\"');
          for (let O = 0; O < M.length; ++O) {
            const W = M[O].indexOf('"');
            W !== -1 && (M[O] = M[O].slice(0, W), M.length = O + 1), M[O] = M[O].replaceAll(/\\(.)/g, "$1");
          }
          _ = M.join('"');
        }
        return _;
      }
      function x(_) {
        const M = _.indexOf("'");
        return M === -1 ? _ : a(_.slice(0, M), _.slice(M + 1).replace(/^[^']*'/, ""));
      }
      function b(_) {
        return !_.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(_) ? _ : _.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(M, O, W, w) {
          if (W === "q" || W === "Q")
            return a(O, w = (w = w.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(n, i) {
              return String.fromCharCode(parseInt(i, 16));
            }));
          try {
            w = atob(w);
          } catch {
          }
          return a(O, w);
        });
      }
      return "";
    }, t(89), t(149);
    var e = t(1);
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.PDFNetworkStream = void 0, t(89);
    var e = t(1), r = t(182);
    class l {
      constructor(a) {
        let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.url = a, this.isHttp = /^https?:/i.test(a), this.httpHeaders = this.isHttp && f.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = f.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
      }
      requestRange(a, f, g) {
        const x = { begin: a, end: f };
        for (const b in g)
          x[b] = g[b];
        return this.request(x);
      }
      requestFull(a) {
        return this.request(a);
      }
      request(a) {
        const f = new XMLHttpRequest(), g = this.currXhrId++, x = this.pendingRequests[g] = { xhr: f };
        f.open("GET", this.url), f.withCredentials = this.withCredentials;
        for (const b in this.httpHeaders) {
          const _ = this.httpHeaders[b];
          _ !== void 0 && f.setRequestHeader(b, _);
        }
        return this.isHttp && "begin" in a && "end" in a ? (f.setRequestHeader("Range", `bytes=${a.begin}-${a.end - 1}`), x.expectedStatus = 206) : x.expectedStatus = 200, f.responseType = "arraybuffer", a.onError && (f.onerror = function(b) {
          a.onError(f.status);
        }), f.onreadystatechange = this.onStateChange.bind(this, g), f.onprogress = this.onProgress.bind(this, g), x.onHeadersReceived = a.onHeadersReceived, x.onDone = a.onDone, x.onError = a.onError, x.onProgress = a.onProgress, f.send(null), g;
      }
      onProgress(a, f) {
        var x;
        const g = this.pendingRequests[a];
        g && ((x = g.onProgress) == null || x.call(g, f));
      }
      onStateChange(a, f) {
        var M, O, W;
        const g = this.pendingRequests[a];
        if (!g)
          return;
        const x = g.xhr;
        if (x.readyState >= 2 && g.onHeadersReceived && (g.onHeadersReceived(), delete g.onHeadersReceived), x.readyState !== 4 || !(a in this.pendingRequests))
          return;
        if (delete this.pendingRequests[a], x.status === 0 && this.isHttp) {
          (M = g.onError) == null || M.call(g, x.status);
          return;
        }
        const b = x.status || 200;
        if (!(b === 200 && g.expectedStatus === 206) && b !== g.expectedStatus) {
          (O = g.onError) == null || O.call(g, x.status);
          return;
        }
        const _ = function(n) {
          const i = n.response;
          return typeof i != "string" ? i : (0, e.stringToBytes)(i).buffer;
        }(x);
        if (b === 206) {
          const w = x.getResponseHeader("Content-Range"), n = /bytes (\d+)-(\d+)\/(\d+)/.exec(w);
          g.onDone({ begin: parseInt(n[1], 10), chunk: _ });
        } else
          _ ? g.onDone({ begin: 0, chunk: _ }) : (W = g.onError) == null || W.call(g, x.status);
      }
      getRequestXhr(a) {
        return this.pendingRequests[a].xhr;
      }
      isPendingRequest(a) {
        return a in this.pendingRequests;
      }
      abortRequest(a) {
        const f = this.pendingRequests[a].xhr;
        delete this.pendingRequests[a], f.abort();
      }
    }
    o.PDFNetworkStream = class {
      constructor(a) {
        this._source = a, this._manager = new l(a.url, { httpHeaders: a.httpHeaders, withCredentials: a.withCredentials }), this._rangeChunkSize = a.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
      }
      _onRangeRequestReaderClosed(a) {
        const f = this._rangeRequestReaders.indexOf(a);
        f >= 0 && this._rangeRequestReaders.splice(f, 1);
      }
      getFullReader() {
        return (0, e.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new m(this._manager, this._source), this._fullRequestReader;
      }
      getRangeReader(a, f) {
        const g = new y(this._manager, a, f);
        return g.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(g), g;
      }
      cancelAllRequests(a) {
        var f;
        (f = this._fullRequestReader) == null || f.cancel(a);
        for (const g of this._rangeRequestReaders.slice(0))
          g.cancel(a);
      }
    };
    class m {
      constructor(a, f) {
        this._manager = a;
        const g = { onHeadersReceived: this._onHeadersReceived.bind(this), onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
        this._url = f.url, this._fullRequestId = a.requestFull(g), this._headersReceivedCapability = new e.PromiseCapability(), this._disableRange = f.disableRange || !1, this._contentLength = f.length, this._rangeChunkSize = f.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
      }
      _onHeadersReceived() {
        const a = this._fullRequestId, f = this._manager.getRequestXhr(a), g = (_) => f.getResponseHeader(_), { allowRangeRequests: x, suggestedLength: b } = (0, r.validateRangeRequestCapabilities)({ getResponseHeader: g, isHttp: this._manager.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
        x && (this._isRangeSupported = !0), this._contentLength = b || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(g), this._isRangeSupported && this._manager.abortRequest(a), this._headersReceivedCapability.resolve();
      }
      _onDone(a) {
        if (a && (this._requests.length > 0 ? this._requests.shift().resolve({ value: a.chunk, done: !1 }) : this._cachedChunks.push(a.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
          for (const f of this._requests)
            f.resolve({ value: void 0, done: !0 });
          this._requests.length = 0;
        }
      }
      _onError(a) {
        this._storedError = (0, r.createResponseStatusError)(a, this._url), this._headersReceivedCapability.reject(this._storedError);
        for (const f of this._requests)
          f.reject(this._storedError);
        this._requests.length = 0, this._cachedChunks.length = 0;
      }
      _onProgress(a) {
        var f;
        (f = this.onProgress) == null || f.call(this, { loaded: a.loaded, total: a.lengthComputable ? a.total : this._contentLength });
      }
      get filename() {
        return this._filename;
      }
      get isRangeSupported() {
        return this._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      get contentLength() {
        return this._contentLength;
      }
      get headersReady() {
        return this._headersReceivedCapability.promise;
      }
      async read() {
        if (this._storedError)
          throw this._storedError;
        if (this._cachedChunks.length > 0)
          return { value: this._cachedChunks.shift(), done: !1 };
        if (this._done)
          return { value: void 0, done: !0 };
        const a = new e.PromiseCapability();
        return this._requests.push(a), a.promise;
      }
      cancel(a) {
        this._done = !0, this._headersReceivedCapability.reject(a);
        for (const f of this._requests)
          f.resolve({ value: void 0, done: !0 });
        this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
      }
    }
    class y {
      constructor(a, f, g) {
        this._manager = a;
        const x = { onDone: this._onDone.bind(this), onError: this._onError.bind(this), onProgress: this._onProgress.bind(this) };
        this._url = a.url, this._requestId = a.requestRange(f, g, x), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
      }
      _close() {
        var a;
        (a = this.onClosed) == null || a.call(this, this);
      }
      _onDone(a) {
        const f = a.chunk;
        this._requests.length > 0 ? this._requests.shift().resolve({ value: f, done: !1 }) : this._queuedChunk = f, this._done = !0;
        for (const g of this._requests)
          g.resolve({ value: void 0, done: !0 });
        this._requests.length = 0, this._close();
      }
      _onError(a) {
        this._storedError = (0, r.createResponseStatusError)(a, this._url);
        for (const f of this._requests)
          f.reject(this._storedError);
        this._requests.length = 0, this._queuedChunk = null;
      }
      _onProgress(a) {
        var f;
        this.isStreamingSupported || ((f = this.onProgress) == null || f.call(this, { loaded: a.loaded }));
      }
      get isStreamingSupported() {
        return !1;
      }
      async read() {
        if (this._storedError)
          throw this._storedError;
        if (this._queuedChunk !== null) {
          const f = this._queuedChunk;
          return this._queuedChunk = null, { value: f, done: !1 };
        }
        if (this._done)
          return { value: void 0, done: !0 };
        const a = new e.PromiseCapability();
        return this._requests.push(a), a.promise;
      }
      cancel(a) {
        this._done = !0;
        for (const f of this._requests)
          f.resolve({ value: void 0, done: !0 });
        this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
      }
    }
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.PDFNodeStream = void 0, t(89), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123);
    var e = t(1), r = t(182);
    const l = /^file:\/\/\/[a-zA-Z]:\//;
    o.PDFNodeStream = class {
      constructor(_) {
        this.source = _, this.url = function(O) {
          const W = require("url"), w = W.parse(O);
          return w.protocol === "file:" || w.host ? w : /^[a-z]:[/\\]/i.test(O) ? W.parse(`file:///${O}`) : (w.host || (w.protocol = "file:"), w);
        }(_.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && _.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
      }
      get _progressiveDataLength() {
        var _, M;
        return (M = (_ = this._fullRequestReader) == null ? void 0 : _._loaded) != null ? M : 0;
      }
      getFullReader() {
        return (0, e.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new g(this) : new a(this), this._fullRequestReader;
      }
      getRangeReader(_, M) {
        if (M <= this._progressiveDataLength)
          return null;
        const O = this.isFsUrl ? new x(this, _, M) : new f(this, _, M);
        return this._rangeRequestReaders.push(O), O;
      }
      cancelAllRequests(_) {
        var M;
        (M = this._fullRequestReader) == null || M.cancel(_);
        for (const O of this._rangeRequestReaders.slice(0))
          O.cancel(_);
      }
    };
    class m {
      constructor(_) {
        this._url = _.url, this._done = !1, this._storedError = null, this.onProgress = null;
        const M = _.source;
        this._contentLength = M.length, this._loaded = 0, this._filename = null, this._disableRange = M.disableRange || !1, this._rangeChunkSize = M.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !M.disableStream, this._isRangeSupported = !M.disableRange, this._readableStream = null, this._readCapability = new e.PromiseCapability(), this._headersCapability = new e.PromiseCapability();
      }
      get headersReady() {
        return this._headersCapability.promise;
      }
      get filename() {
        return this._filename;
      }
      get contentLength() {
        return this._contentLength;
      }
      get isRangeSupported() {
        return this._isRangeSupported;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      async read() {
        var M;
        if (await this._readCapability.promise, this._done)
          return { value: void 0, done: !0 };
        if (this._storedError)
          throw this._storedError;
        const _ = this._readableStream.read();
        return _ === null ? (this._readCapability = new e.PromiseCapability(), this.read()) : (this._loaded += _.length, (M = this.onProgress) == null || M.call(this, { loaded: this._loaded, total: this._contentLength }), { value: new Uint8Array(_).buffer, done: !1 });
      }
      cancel(_) {
        this._readableStream ? this._readableStream.destroy(_) : this._error(_);
      }
      _error(_) {
        this._storedError = _, this._readCapability.resolve();
      }
      _setReadableStream(_) {
        this._readableStream = _, _.on("readable", () => {
          this._readCapability.resolve();
        }), _.on("end", () => {
          _.destroy(), this._done = !0, this._readCapability.resolve();
        }), _.on("error", (M) => {
          this._error(M);
        }), !this._isStreamingSupported && this._isRangeSupported && this._error(new e.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
      }
    }
    class y {
      constructor(_) {
        this._url = _.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new e.PromiseCapability();
        const M = _.source;
        this._isStreamingSupported = !M.disableStream;
      }
      get isStreamingSupported() {
        return this._isStreamingSupported;
      }
      async read() {
        var M;
        if (await this._readCapability.promise, this._done)
          return { value: void 0, done: !0 };
        if (this._storedError)
          throw this._storedError;
        const _ = this._readableStream.read();
        return _ === null ? (this._readCapability = new e.PromiseCapability(), this.read()) : (this._loaded += _.length, (M = this.onProgress) == null || M.call(this, { loaded: this._loaded }), { value: new Uint8Array(_).buffer, done: !1 });
      }
      cancel(_) {
        this._readableStream ? this._readableStream.destroy(_) : this._error(_);
      }
      _error(_) {
        this._storedError = _, this._readCapability.resolve();
      }
      _setReadableStream(_) {
        this._readableStream = _, _.on("readable", () => {
          this._readCapability.resolve();
        }), _.on("end", () => {
          _.destroy(), this._done = !0, this._readCapability.resolve();
        }), _.on("error", (M) => {
          this._error(M);
        }), this._storedError && this._readableStream.destroy(this._storedError);
      }
    }
    function h(b, _) {
      return { protocol: b.protocol, auth: b.auth, host: b.hostname, port: b.port, path: b.path, method: "GET", headers: _ };
    }
    class a extends m {
      constructor(_) {
        super(_);
        const M = (O) => {
          if (O.statusCode === 404) {
            const i = new e.MissingPDFException(`Missing PDF "${this._url}".`);
            this._storedError = i, this._headersCapability.reject(i);
            return;
          }
          this._headersCapability.resolve(), this._setReadableStream(O);
          const W = (i) => this._readableStream.headers[i.toLowerCase()], { allowRangeRequests: w, suggestedLength: n } = (0, r.validateRangeRequestCapabilities)({ getResponseHeader: W, isHttp: _.isHttp, rangeChunkSize: this._rangeChunkSize, disableRange: this._disableRange });
          this._isRangeSupported = w, this._contentLength = n || this._contentLength, this._filename = (0, r.extractFilenameFromHeader)(W);
        };
        if (this._request = null, this._url.protocol === "http:") {
          const O = require("http");
          this._request = O.request(h(this._url, _.httpHeaders), M);
        } else {
          const O = require("https");
          this._request = O.request(h(this._url, _.httpHeaders), M);
        }
        this._request.on("error", (O) => {
          this._storedError = O, this._headersCapability.reject(O);
        }), this._request.end();
      }
    }
    class f extends y {
      constructor(_, M, O) {
        super(_), this._httpHeaders = {};
        for (const w in _.httpHeaders) {
          const n = _.httpHeaders[w];
          n !== void 0 && (this._httpHeaders[w] = n);
        }
        this._httpHeaders.Range = `bytes=${M}-${O - 1}`;
        const W = (w) => {
          if (w.statusCode !== 404)
            this._setReadableStream(w);
          else {
            const n = new e.MissingPDFException(`Missing PDF "${this._url}".`);
            this._storedError = n;
          }
        };
        if (this._request = null, this._url.protocol === "http:") {
          const w = require("http");
          this._request = w.request(h(this._url, this._httpHeaders), W);
        } else {
          const w = require("https");
          this._request = w.request(h(this._url, this._httpHeaders), W);
        }
        this._request.on("error", (w) => {
          this._storedError = w;
        }), this._request.end();
      }
    }
    class g extends m {
      constructor(_) {
        super(_);
        let M = decodeURIComponent(this._url.path);
        l.test(this._url.href) && (M = M.replace(/^\//, ""));
        const O = require("fs");
        O.lstat(M, (W, w) => {
          W ? (W.code === "ENOENT" && (W = new e.MissingPDFException(`Missing PDF "${M}".`)), this._storedError = W, this._headersCapability.reject(W)) : (this._contentLength = w.size, this._setReadableStream(O.createReadStream(M)), this._headersCapability.resolve());
        });
      }
    }
    class x extends y {
      constructor(_, M, O) {
        super(_);
        let W = decodeURIComponent(this._url.path);
        l.test(this._url.href) && (W = W.replace(/^\//, ""));
        const w = require("fs");
        this._setReadableStream(w.createReadStream(W, { start: M, end: O - 1 }));
      }
    }
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.SVGGraphics = void 0, t(84), t(86), t(87), t(93), t(101), t(102), t(105), t(107), t(109), t(113), t(116), t(123), t(2), t(89), t(187);
    var e = t(168), r = t(1);
    const l = "normal", m = "normal", y = "#000000", h = ["butt", "round", "square"], a = ["miter", "round", "bevel"], f = function(w) {
      let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      if (URL.createObjectURL && typeof Blob < "u" && !i)
        return URL.createObjectURL(new Blob([w], { type: n }));
      const p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      let T = `data:${n};base64,`;
      for (let R = 0, k = w.length; R < k; R += 3) {
        const d = 255 & w[R], L = 255 & w[R + 1], F = 255 & w[R + 2];
        T += p[d >> 2] + p[(3 & d) << 4 | L >> 4] + p[R + 1 < k ? (15 & L) << 2 | F >> 6 : 64] + p[R + 2 < k ? 63 & F : 64];
      }
      return T;
    }, g = function() {
      const w = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), n = new Int32Array(256);
      for (let R = 0; R < 256; R++) {
        let k = R;
        for (let d = 0; d < 8; d++)
          k = 1 & k ? 3988292384 ^ k >> 1 & 2147483647 : k >> 1 & 2147483647;
        n[R] = k;
      }
      function i(R, k, d, L) {
        let F = L;
        const V = k.length;
        d[F] = V >> 24 & 255, d[F + 1] = V >> 16 & 255, d[F + 2] = V >> 8 & 255, d[F + 3] = 255 & V, F += 4, d[F] = 255 & R.charCodeAt(0), d[F + 1] = 255 & R.charCodeAt(1), d[F + 2] = 255 & R.charCodeAt(2), d[F + 3] = 255 & R.charCodeAt(3), F += 4, d.set(k, F), F += k.length;
        const Z = function(U, u, v) {
          let S = -1;
          for (let D = u; D < v; D++) {
            const q = 255 & (S ^ U[D]);
            S = S >>> 8 ^ n[q];
          }
          return -1 ^ S;
        }(d, L + 4, F);
        d[F] = Z >> 24 & 255, d[F + 1] = Z >> 16 & 255, d[F + 2] = Z >> 8 & 255, d[F + 3] = 255 & Z;
      }
      function p(R) {
        let k = R.length;
        const d = 65535, L = Math.ceil(k / d), F = new Uint8Array(2 + k + 5 * L + 4);
        let V = 0;
        F[V++] = 120, F[V++] = 156;
        let Z = 0;
        for (; k > d; )
          F[V++] = 0, F[V++] = 255, F[V++] = 255, F[V++] = 0, F[V++] = 0, F.set(R.subarray(Z, Z + d), V), V += d, Z += d, k -= d;
        F[V++] = 1, F[V++] = 255 & k, F[V++] = k >> 8 & 255, F[V++] = 255 & ~k, F[V++] = (65535 & ~k) >> 8 & 255, F.set(R.subarray(Z), V), V += R.length - Z;
        const B = function(u, v, S) {
          let D = 1, q = 0;
          for (let J = v; J < S; ++J)
            D = (D + (255 & u[J])) % 65521, q = (q + D) % 65521;
          return q << 16 | D;
        }(R, 0, R.length);
        return F[V++] = B >> 24 & 255, F[V++] = B >> 16 & 255, F[V++] = B >> 8 & 255, F[V++] = 255 & B, F;
      }
      function T(R, k, d, L) {
        const F = R.width, V = R.height;
        let Z, B, U;
        const u = R.data;
        switch (k) {
          case r.ImageKind.GRAYSCALE_1BPP:
            B = 0, Z = 1, U = F + 7 >> 3;
            break;
          case r.ImageKind.RGB_24BPP:
            B = 2, Z = 8, U = 3 * F;
            break;
          case r.ImageKind.RGBA_32BPP:
            B = 6, Z = 8, U = 4 * F;
            break;
          default:
            throw new Error("invalid format");
        }
        const v = new Uint8Array((1 + U) * V);
        let S = 0, D = 0;
        for (let I = 0; I < V; ++I)
          v[S++] = 0, v.set(u.subarray(D, D + U), S), D += U, S += U;
        if (k === r.ImageKind.GRAYSCALE_1BPP && L) {
          S = 0;
          for (let I = 0; I < V; I++) {
            S++;
            for (let E = 0; E < U; E++)
              v[S++] ^= 255;
          }
        }
        const q = new Uint8Array([F >> 24 & 255, F >> 16 & 255, F >> 8 & 255, 255 & F, V >> 24 & 255, V >> 16 & 255, V >> 8 & 255, 255 & V, Z, B, 0, 0, 0]), J = function(E) {
          if (!r.isNodeJS)
            return p(E);
          try {
            const j = parseInt(process.versions.node) >= 8 ? E : Buffer.from(E), $ = require("zlib").deflateSync(j, { level: 9 });
            return $ instanceof Uint8Array ? $ : new Uint8Array($);
          } catch (j) {
            (0, r.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + j);
          }
          return p(E);
        }(v), z = w.length + 36 + q.length + J.length, N = new Uint8Array(z);
        let P = 0;
        return N.set(w, P), P += w.length, i("IHDR", q, N, P), P += 12 + q.length, i("IDATA", J, N, P), P += 12 + J.length, i("IEND", new Uint8Array(0), N, P), f(N, "image/png", d);
      }
      return function(k, d, L) {
        return T(k, k.kind === void 0 ? r.ImageKind.GRAYSCALE_1BPP : k.kind, d, L);
      };
    }();
    class x {
      constructor() {
        this.fontSizeScale = 1, this.fontWeight = m, this.fontSize = 0, this.textMatrix = r.IDENTITY_MATRIX, this.fontMatrix = r.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = r.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = y, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
      }
      clone() {
        return Object.create(this);
      }
      setCurrentPoint(n, i) {
        this.x = n, this.y = i;
      }
    }
    function b(w) {
      if (Number.isInteger(w))
        return w.toString();
      const n = w.toFixed(10);
      let i = n.length - 1;
      if (n[i] !== "0")
        return n;
      do
        i--;
      while (n[i] === "0");
      return n.substring(0, n[i] === "." ? i : i + 1);
    }
    function _(w) {
      if (w[4] === 0 && w[5] === 0) {
        if (w[1] === 0 && w[2] === 0)
          return w[0] === 1 && w[3] === 1 ? "" : `scale(${b(w[0])} ${b(w[3])})`;
        if (w[0] === w[3] && w[1] === -w[2])
          return `rotate(${b(180 * Math.acos(w[0]) / Math.PI)})`;
      } else if (w[0] === 1 && w[1] === 0 && w[2] === 0 && w[3] === 1)
        return `translate(${b(w[4])} ${b(w[5])})`;
      return `matrix(${b(w[0])} ${b(w[1])} ${b(w[2])} ${b(w[3])} ${b(w[4])} ${b(w[5])})`;
    }
    let M = 0, O = 0, W = 0;
    o.SVGGraphics = class {
      constructor(n, i) {
        let p = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        (0, e.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new e.DOMSVGFactory(), this.current = new x(), this.transformMatrix = r.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = n, this.objs = i, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!p, this._operatorIdMapping = [];
        for (const T in r.OPS)
          this._operatorIdMapping[r.OPS[T]] = T;
      }
      getObject(n) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return typeof n == "string" ? n.startsWith("g_") ? this.commonObjs.get(n) : this.objs.get(n) : i;
      }
      save() {
        this.transformStack.push(this.transformMatrix);
        const n = this.current;
        this.extraStack.push(n), this.current = n.clone();
      }
      restore() {
        this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
      }
      group(n) {
        this.save(), this.executeOpTree(n), this.restore();
      }
      loadDependencies(n) {
        const i = n.fnArray, p = n.argsArray;
        for (let T = 0, R = i.length; T < R; T++)
          if (i[T] === r.OPS.dependency)
            for (const k of p[T]) {
              const d = k.startsWith("g_") ? this.commonObjs : this.objs, L = new Promise((F) => {
                d.get(k, F);
              });
              this.current.dependencies.push(L);
            }
        return Promise.all(this.current.dependencies);
      }
      transform(n, i, p, T, R, k) {
        const d = [n, i, p, T, R, k];
        this.transformMatrix = r.Util.transform(this.transformMatrix, d), this.tgrp = null;
      }
      getSVG(n, i) {
        this.viewport = i;
        const p = this._initialize(i);
        return this.loadDependencies(n).then(() => (this.transformMatrix = r.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(n)), p));
      }
      convertOpList(n) {
        const i = this._operatorIdMapping, p = n.argsArray, T = n.fnArray, R = [];
        for (let k = 0, d = T.length; k < d; k++) {
          const L = T[k];
          R.push({ fnId: L, fn: i[L], args: p[k] });
        }
        return function(d) {
          let L = [];
          const F = [];
          for (const V of d)
            V.fn !== "save" ? V.fn === "restore" ? L = F.pop() : L.push(V) : (L.push({ fnId: 92, fn: "group", items: [] }), F.push(L), L = L.at(-1).items);
          return L;
        }(R);
      }
      executeOpTree(n) {
        for (const i of n) {
          const p = i.fn, T = i.fnId, R = i.args;
          switch (0 | T) {
            case r.OPS.beginText:
              this.beginText();
              break;
            case r.OPS.dependency:
              break;
            case r.OPS.setLeading:
              this.setLeading(R);
              break;
            case r.OPS.setLeadingMoveText:
              this.setLeadingMoveText(R[0], R[1]);
              break;
            case r.OPS.setFont:
              this.setFont(R);
              break;
            case r.OPS.showText:
            case r.OPS.showSpacedText:
              this.showText(R[0]);
              break;
            case r.OPS.endText:
              this.endText();
              break;
            case r.OPS.moveText:
              this.moveText(R[0], R[1]);
              break;
            case r.OPS.setCharSpacing:
              this.setCharSpacing(R[0]);
              break;
            case r.OPS.setWordSpacing:
              this.setWordSpacing(R[0]);
              break;
            case r.OPS.setHScale:
              this.setHScale(R[0]);
              break;
            case r.OPS.setTextMatrix:
              this.setTextMatrix(R[0], R[1], R[2], R[3], R[4], R[5]);
              break;
            case r.OPS.setTextRise:
              this.setTextRise(R[0]);
              break;
            case r.OPS.setTextRenderingMode:
              this.setTextRenderingMode(R[0]);
              break;
            case r.OPS.setLineWidth:
              this.setLineWidth(R[0]);
              break;
            case r.OPS.setLineJoin:
              this.setLineJoin(R[0]);
              break;
            case r.OPS.setLineCap:
              this.setLineCap(R[0]);
              break;
            case r.OPS.setMiterLimit:
              this.setMiterLimit(R[0]);
              break;
            case r.OPS.setFillRGBColor:
              this.setFillRGBColor(R[0], R[1], R[2]);
              break;
            case r.OPS.setStrokeRGBColor:
              this.setStrokeRGBColor(R[0], R[1], R[2]);
              break;
            case r.OPS.setStrokeColorN:
              this.setStrokeColorN(R);
              break;
            case r.OPS.setFillColorN:
              this.setFillColorN(R);
              break;
            case r.OPS.shadingFill:
              this.shadingFill(R[0]);
              break;
            case r.OPS.setDash:
              this.setDash(R[0], R[1]);
              break;
            case r.OPS.setRenderingIntent:
              this.setRenderingIntent(R[0]);
              break;
            case r.OPS.setFlatness:
              this.setFlatness(R[0]);
              break;
            case r.OPS.setGState:
              this.setGState(R[0]);
              break;
            case r.OPS.fill:
              this.fill();
              break;
            case r.OPS.eoFill:
              this.eoFill();
              break;
            case r.OPS.stroke:
              this.stroke();
              break;
            case r.OPS.fillStroke:
              this.fillStroke();
              break;
            case r.OPS.eoFillStroke:
              this.eoFillStroke();
              break;
            case r.OPS.clip:
              this.clip("nonzero");
              break;
            case r.OPS.eoClip:
              this.clip("evenodd");
              break;
            case r.OPS.paintSolidColorImageMask:
              this.paintSolidColorImageMask();
              break;
            case r.OPS.paintImageXObject:
              this.paintImageXObject(R[0]);
              break;
            case r.OPS.paintInlineImageXObject:
              this.paintInlineImageXObject(R[0]);
              break;
            case r.OPS.paintImageMaskXObject:
              this.paintImageMaskXObject(R[0]);
              break;
            case r.OPS.paintFormXObjectBegin:
              this.paintFormXObjectBegin(R[0], R[1]);
              break;
            case r.OPS.paintFormXObjectEnd:
              this.paintFormXObjectEnd();
              break;
            case r.OPS.closePath:
              this.closePath();
              break;
            case r.OPS.closeStroke:
              this.closeStroke();
              break;
            case r.OPS.closeFillStroke:
              this.closeFillStroke();
              break;
            case r.OPS.closeEOFillStroke:
              this.closeEOFillStroke();
              break;
            case r.OPS.nextLine:
              this.nextLine();
              break;
            case r.OPS.transform:
              this.transform(R[0], R[1], R[2], R[3], R[4], R[5]);
              break;
            case r.OPS.constructPath:
              this.constructPath(R[0], R[1]);
              break;
            case r.OPS.endPath:
              this.endPath();
              break;
            case 92:
              this.group(i.items);
              break;
            default:
              (0, r.warn)(`Unimplemented operator ${p}`);
          }
        }
      }
      setWordSpacing(n) {
        this.current.wordSpacing = n;
      }
      setCharSpacing(n) {
        this.current.charSpacing = n;
      }
      nextLine() {
        this.moveText(0, this.current.leading);
      }
      setTextMatrix(n, i, p, T, R, k) {
        const d = this.current;
        d.textMatrix = d.lineMatrix = [n, i, p, T, R, k], d.textMatrixScale = Math.hypot(n, i), d.x = d.lineX = 0, d.y = d.lineY = 0, d.xcoords = [], d.ycoords = [], d.tspan = this.svgFactory.createElement("svg:tspan"), d.tspan.setAttributeNS(null, "font-family", d.fontFamily), d.tspan.setAttributeNS(null, "font-size", `${b(d.fontSize)}px`), d.tspan.setAttributeNS(null, "y", b(-d.y)), d.txtElement = this.svgFactory.createElement("svg:text"), d.txtElement.append(d.tspan);
      }
      beginText() {
        const n = this.current;
        n.x = n.lineX = 0, n.y = n.lineY = 0, n.textMatrix = r.IDENTITY_MATRIX, n.lineMatrix = r.IDENTITY_MATRIX, n.textMatrixScale = 1, n.tspan = this.svgFactory.createElement("svg:tspan"), n.txtElement = this.svgFactory.createElement("svg:text"), n.txtgrp = this.svgFactory.createElement("svg:g"), n.xcoords = [], n.ycoords = [];
      }
      moveText(n, i) {
        const p = this.current;
        p.x = p.lineX += n, p.y = p.lineY += i, p.xcoords = [], p.ycoords = [], p.tspan = this.svgFactory.createElement("svg:tspan"), p.tspan.setAttributeNS(null, "font-family", p.fontFamily), p.tspan.setAttributeNS(null, "font-size", `${b(p.fontSize)}px`), p.tspan.setAttributeNS(null, "y", b(-p.y));
      }
      showText(n) {
        const i = this.current, p = i.font, T = i.fontSize;
        if (T === 0)
          return;
        const R = i.fontSizeScale, k = i.charSpacing, d = i.wordSpacing, L = i.fontDirection, F = i.textHScale * L, V = p.vertical, Z = V ? 1 : -1, B = p.defaultVMetrics, U = T * i.fontMatrix[0];
        let u = 0;
        for (const D of n) {
          if (D === null) {
            u += L * d;
            continue;
          }
          if (typeof D == "number") {
            u += Z * D * T / 1e3;
            continue;
          }
          const q = (D.isSpace ? d : 0) + k, J = D.fontChar;
          let z, N, P = D.width;
          if (V) {
            let I;
            const E = D.vmetric || B;
            I = D.vmetric ? E[1] : 0.5 * P, I = -I * U;
            const j = E[2] * U;
            P = E ? -E[0] : P, z = I / R, N = (u + j) / R;
          } else
            z = u / R, N = 0;
          (D.isInFont || p.missingFile) && (i.xcoords.push(i.x + z), V && i.ycoords.push(-i.y + N), i.tspan.textContent += J), u += V ? P * U - q * L : P * U + q * L;
        }
        i.tspan.setAttributeNS(null, "x", i.xcoords.map(b).join(" ")), V ? i.tspan.setAttributeNS(null, "y", i.ycoords.map(b).join(" ")) : i.tspan.setAttributeNS(null, "y", b(-i.y)), V ? i.y -= u : i.x += u * F, i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", `${b(i.fontSize)}px`), i.fontStyle !== l && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== m && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight);
        const v = i.textRenderingMode & r.TextRenderingMode.FILL_STROKE_MASK;
        if (v === r.TextRenderingMode.FILL || v === r.TextRenderingMode.FILL_STROKE ? (i.fillColor !== y && i.tspan.setAttributeNS(null, "fill", i.fillColor), i.fillAlpha < 1 && i.tspan.setAttributeNS(null, "fill-opacity", i.fillAlpha)) : i.textRenderingMode === r.TextRenderingMode.ADD_TO_PATH ? i.tspan.setAttributeNS(null, "fill", "transparent") : i.tspan.setAttributeNS(null, "fill", "none"), v === r.TextRenderingMode.STROKE || v === r.TextRenderingMode.FILL_STROKE) {
          const D = 1 / (i.textMatrixScale || 1);
          this._setStrokeAttributes(i.tspan, D);
        }
        let S = i.textMatrix;
        i.textRise !== 0 && (S = S.slice(), S[5] += i.textRise), i.txtElement.setAttributeNS(null, "transform", `${_(S)} scale(${b(F)}, -1)`), i.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), i.txtElement.append(i.tspan), i.txtgrp.append(i.txtElement), this._ensureTransformGroup().append(i.txtElement);
      }
      setLeadingMoveText(n, i) {
        this.setLeading(-i), this.moveText(n, i);
      }
      addFontStyle(n) {
        if (!n.data)
          throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
        this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
        const i = f(n.data, n.mimetype, this.forceDataSchema);
        this.cssStyle.textContent += `@font-face { font-family: "${n.loadedName}"; src: url(${i}); }
`;
      }
      setFont(n) {
        const i = this.current, p = this.commonObjs.get(n[0]);
        let T = n[1];
        i.font = p, this.embedFonts && !p.missingFile && !this.embeddedFonts[p.loadedName] && (this.addFontStyle(p), this.embeddedFonts[p.loadedName] = p), i.fontMatrix = p.fontMatrix || r.FONT_IDENTITY_MATRIX;
        let R = "normal";
        p.black ? R = "900" : p.bold && (R = "bold");
        const k = p.italic ? "italic" : "normal";
        T < 0 ? (T = -T, i.fontDirection = -1) : i.fontDirection = 1, i.fontSize = T, i.fontFamily = p.loadedName, i.fontWeight = R, i.fontStyle = k, i.tspan = this.svgFactory.createElement("svg:tspan"), i.tspan.setAttributeNS(null, "y", b(-i.y)), i.xcoords = [], i.ycoords = [];
      }
      endText() {
        var i;
        const n = this.current;
        n.textRenderingMode & r.TextRenderingMode.ADD_TO_PATH_FLAG && ((i = n.txtElement) != null && i.hasChildNodes()) && (n.element = n.txtElement, this.clip("nonzero"), this.endPath());
      }
      setLineWidth(n) {
        n > 0 && (this.current.lineWidth = n);
      }
      setLineCap(n) {
        this.current.lineCap = h[n];
      }
      setLineJoin(n) {
        this.current.lineJoin = a[n];
      }
      setMiterLimit(n) {
        this.current.miterLimit = n;
      }
      setStrokeAlpha(n) {
        this.current.strokeAlpha = n;
      }
      setStrokeRGBColor(n, i, p) {
        this.current.strokeColor = r.Util.makeHexColor(n, i, p);
      }
      setFillAlpha(n) {
        this.current.fillAlpha = n;
      }
      setFillRGBColor(n, i, p) {
        this.current.fillColor = r.Util.makeHexColor(n, i, p), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
      }
      setStrokeColorN(n) {
        this.current.strokeColor = this._makeColorN_Pattern(n);
      }
      setFillColorN(n) {
        this.current.fillColor = this._makeColorN_Pattern(n);
      }
      shadingFill(n) {
        const { width: i, height: p } = this.viewport, T = r.Util.inverseTransform(this.transformMatrix), [R, k, d, L] = r.Util.getAxialAlignedBoundingBox([0, 0, i, p], T), F = this.svgFactory.createElement("svg:rect");
        F.setAttributeNS(null, "x", R), F.setAttributeNS(null, "y", k), F.setAttributeNS(null, "width", d - R), F.setAttributeNS(null, "height", L - k), F.setAttributeNS(null, "fill", this._makeShadingPattern(n)), this.current.fillAlpha < 1 && F.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(F);
      }
      _makeColorN_Pattern(n) {
        return n[0] === "TilingPattern" ? this._makeTilingPattern(n) : this._makeShadingPattern(n);
      }
      _makeTilingPattern(n) {
        const i = n[1], p = n[2], T = n[3] || r.IDENTITY_MATRIX, [R, k, d, L] = n[4], F = n[5], V = n[6], Z = n[7], B = "shading" + W++, [U, u, v, S] = r.Util.normalizeRect([...r.Util.applyTransform([R, k], T), ...r.Util.applyTransform([d, L], T)]), [D, q] = r.Util.singularValueDecompose2dScale(T), J = F * D, z = V * q, N = this.svgFactory.createElement("svg:pattern");
        N.setAttributeNS(null, "id", B), N.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), N.setAttributeNS(null, "width", J), N.setAttributeNS(null, "height", z), N.setAttributeNS(null, "x", `${U}`), N.setAttributeNS(null, "y", `${u}`);
        const P = this.svg, I = this.transformMatrix, E = this.current.fillColor, j = this.current.strokeColor, $ = this.svgFactory.create(v - U, S - u);
        if (this.svg = $, this.transformMatrix = T, Z === 2) {
          const H = r.Util.makeHexColor(...i);
          this.current.fillColor = H, this.current.strokeColor = H;
        }
        return this.executeOpTree(this.convertOpList(p)), this.svg = P, this.transformMatrix = I, this.current.fillColor = E, this.current.strokeColor = j, N.append($.childNodes[0]), this.defs.append(N), `url(#${B})`;
      }
      _makeShadingPattern(n) {
        switch (typeof n == "string" && (n = this.objs.get(n)), n[0]) {
          case "RadialAxial":
            const i = "shading" + W++, p = n[3];
            let T;
            switch (n[1]) {
              case "axial":
                const R = n[4], k = n[5];
                T = this.svgFactory.createElement("svg:linearGradient"), T.setAttributeNS(null, "id", i), T.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), T.setAttributeNS(null, "x1", R[0]), T.setAttributeNS(null, "y1", R[1]), T.setAttributeNS(null, "x2", k[0]), T.setAttributeNS(null, "y2", k[1]);
                break;
              case "radial":
                const d = n[4], L = n[5], F = n[6], V = n[7];
                T = this.svgFactory.createElement("svg:radialGradient"), T.setAttributeNS(null, "id", i), T.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), T.setAttributeNS(null, "cx", L[0]), T.setAttributeNS(null, "cy", L[1]), T.setAttributeNS(null, "r", V), T.setAttributeNS(null, "fx", d[0]), T.setAttributeNS(null, "fy", d[1]), T.setAttributeNS(null, "fr", F);
                break;
              default:
                throw new Error(`Unknown RadialAxial type: ${n[1]}`);
            }
            for (const R of p) {
              const k = this.svgFactory.createElement("svg:stop");
              k.setAttributeNS(null, "offset", R[0]), k.setAttributeNS(null, "stop-color", R[1]), T.append(k);
            }
            return this.defs.append(T), `url(#${i})`;
          case "Mesh":
            return (0, r.warn)("Unimplemented pattern Mesh"), null;
          case "Dummy":
            return "hotpink";
          default:
            throw new Error(`Unknown IR type: ${n[0]}`);
        }
      }
      setDash(n, i) {
        this.current.dashArray = n, this.current.dashPhase = i;
      }
      constructPath(n, i) {
        const p = this.current;
        let T = p.x, R = p.y, k = [], d = 0;
        for (const L of n)
          switch (0 | L) {
            case r.OPS.rectangle:
              T = i[d++], R = i[d++];
              const F = T + i[d++], V = R + i[d++];
              k.push("M", b(T), b(R), "L", b(F), b(R), "L", b(F), b(V), "L", b(T), b(V), "Z");
              break;
            case r.OPS.moveTo:
              T = i[d++], R = i[d++], k.push("M", b(T), b(R));
              break;
            case r.OPS.lineTo:
              T = i[d++], R = i[d++], k.push("L", b(T), b(R));
              break;
            case r.OPS.curveTo:
              T = i[d + 4], R = i[d + 5], k.push("C", b(i[d]), b(i[d + 1]), b(i[d + 2]), b(i[d + 3]), b(T), b(R)), d += 6;
              break;
            case r.OPS.curveTo2:
              k.push("C", b(T), b(R), b(i[d]), b(i[d + 1]), b(i[d + 2]), b(i[d + 3])), T = i[d + 2], R = i[d + 3], d += 4;
              break;
            case r.OPS.curveTo3:
              T = i[d + 2], R = i[d + 3], k.push("C", b(i[d]), b(i[d + 1]), b(T), b(R), b(T), b(R)), d += 4;
              break;
            case r.OPS.closePath:
              k.push("Z");
          }
        k = k.join(" "), p.path && n.length > 0 && n[0] !== r.OPS.rectangle && n[0] !== r.OPS.moveTo ? k = p.path.getAttributeNS(null, "d") + k : (p.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(p.path)), p.path.setAttributeNS(null, "d", k), p.path.setAttributeNS(null, "fill", "none"), p.element = p.path, p.setCurrentPoint(T, R);
      }
      endPath() {
        const n = this.current;
        if (n.path = null, !this.pendingClip)
          return;
        if (!n.element) {
          this.pendingClip = null;
          return;
        }
        const i = "clippath" + M++, p = this.svgFactory.createElement("svg:clipPath");
        p.setAttributeNS(null, "id", i), p.setAttributeNS(null, "transform", _(this.transformMatrix));
        const T = n.element.cloneNode(!0);
        if (this.pendingClip === "evenodd" ? T.setAttributeNS(null, "clip-rule", "evenodd") : T.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, p.append(T), this.defs.append(p), n.activeClipUrl) {
          n.clipGroup = null;
          for (const R of this.extraStack)
            R.clipGroup = null;
          p.setAttributeNS(null, "clip-path", n.activeClipUrl);
        }
        n.activeClipUrl = `url(#${i})`, this.tgrp = null;
      }
      clip(n) {
        this.pendingClip = n;
      }
      closePath() {
        const n = this.current;
        if (n.path) {
          const i = `${n.path.getAttributeNS(null, "d")}Z`;
          n.path.setAttributeNS(null, "d", i);
        }
      }
      setLeading(n) {
        this.current.leading = -n;
      }
      setTextRise(n) {
        this.current.textRise = n;
      }
      setTextRenderingMode(n) {
        this.current.textRenderingMode = n;
      }
      setHScale(n) {
        this.current.textHScale = n / 100;
      }
      setRenderingIntent(n) {
      }
      setFlatness(n) {
      }
      setGState(n) {
        for (const [i, p] of n)
          switch (i) {
            case "LW":
              this.setLineWidth(p);
              break;
            case "LC":
              this.setLineCap(p);
              break;
            case "LJ":
              this.setLineJoin(p);
              break;
            case "ML":
              this.setMiterLimit(p);
              break;
            case "D":
              this.setDash(p[0], p[1]);
              break;
            case "RI":
              this.setRenderingIntent(p);
              break;
            case "FL":
              this.setFlatness(p);
              break;
            case "Font":
              this.setFont(p);
              break;
            case "CA":
              this.setStrokeAlpha(p);
              break;
            case "ca":
              this.setFillAlpha(p);
              break;
            default:
              (0, r.warn)(`Unimplemented graphic state operator ${i}`);
          }
      }
      fill() {
        const n = this.current;
        n.element && (n.element.setAttributeNS(null, "fill", n.fillColor), n.element.setAttributeNS(null, "fill-opacity", n.fillAlpha), this.endPath());
      }
      stroke() {
        const n = this.current;
        n.element && (this._setStrokeAttributes(n.element), n.element.setAttributeNS(null, "fill", "none"), this.endPath());
      }
      _setStrokeAttributes(n) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const p = this.current;
        let T = p.dashArray;
        i !== 1 && T.length > 0 && (T = T.map(function(R) {
          return i * R;
        })), n.setAttributeNS(null, "stroke", p.strokeColor), n.setAttributeNS(null, "stroke-opacity", p.strokeAlpha), n.setAttributeNS(null, "stroke-miterlimit", b(p.miterLimit)), n.setAttributeNS(null, "stroke-linecap", p.lineCap), n.setAttributeNS(null, "stroke-linejoin", p.lineJoin), n.setAttributeNS(null, "stroke-width", b(i * p.lineWidth) + "px"), n.setAttributeNS(null, "stroke-dasharray", T.map(b).join(" ")), n.setAttributeNS(null, "stroke-dashoffset", b(i * p.dashPhase) + "px");
      }
      eoFill() {
        var n;
        (n = this.current.element) == null || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
      }
      fillStroke() {
        this.stroke(), this.fill();
      }
      eoFillStroke() {
        var n;
        (n = this.current.element) == null || n.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
      }
      closeStroke() {
        this.closePath(), this.stroke();
      }
      closeFillStroke() {
        this.closePath(), this.fillStroke();
      }
      closeEOFillStroke() {
        this.closePath(), this.eoFillStroke();
      }
      paintSolidColorImageMask() {
        const n = this.svgFactory.createElement("svg:rect");
        n.setAttributeNS(null, "x", "0"), n.setAttributeNS(null, "y", "0"), n.setAttributeNS(null, "width", "1px"), n.setAttributeNS(null, "height", "1px"), n.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(n);
      }
      paintImageXObject(n) {
        const i = this.getObject(n);
        i ? this.paintInlineImageXObject(i) : (0, r.warn)(`Dependent image with object ID ${n} is not ready yet`);
      }
      paintInlineImageXObject(n, i) {
        const p = n.width, T = n.height, R = g(n, this.forceDataSchema, !!i), k = this.svgFactory.createElement("svg:rect");
        k.setAttributeNS(null, "x", "0"), k.setAttributeNS(null, "y", "0"), k.setAttributeNS(null, "width", b(p)), k.setAttributeNS(null, "height", b(T)), this.current.element = k, this.clip("nonzero");
        const d = this.svgFactory.createElement("svg:image");
        d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", R), d.setAttributeNS(null, "x", "0"), d.setAttributeNS(null, "y", b(-T)), d.setAttributeNS(null, "width", b(p) + "px"), d.setAttributeNS(null, "height", b(T) + "px"), d.setAttributeNS(null, "transform", `scale(${b(1 / p)} ${b(-1 / T)})`), i ? i.append(d) : this._ensureTransformGroup().append(d);
      }
      paintImageMaskXObject(n) {
        const i = this.getObject(n.data, n);
        if (i.bitmap) {
          (0, r.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
          return;
        }
        const p = this.current, T = i.width, R = i.height, k = p.fillColor;
        p.maskId = "mask" + O++;
        const d = this.svgFactory.createElement("svg:mask");
        d.setAttributeNS(null, "id", p.maskId);
        const L = this.svgFactory.createElement("svg:rect");
        L.setAttributeNS(null, "x", "0"), L.setAttributeNS(null, "y", "0"), L.setAttributeNS(null, "width", b(T)), L.setAttributeNS(null, "height", b(R)), L.setAttributeNS(null, "fill", k), L.setAttributeNS(null, "mask", `url(#${p.maskId})`), this.defs.append(d), this._ensureTransformGroup().append(L), this.paintInlineImageXObject(i, d);
      }
      paintFormXObjectBegin(n, i) {
        if (Array.isArray(n) && n.length === 6 && this.transform(n[0], n[1], n[2], n[3], n[4], n[5]), i) {
          const p = i[2] - i[0], T = i[3] - i[1], R = this.svgFactory.createElement("svg:rect");
          R.setAttributeNS(null, "x", i[0]), R.setAttributeNS(null, "y", i[1]), R.setAttributeNS(null, "width", b(p)), R.setAttributeNS(null, "height", b(T)), this.current.element = R, this.clip("nonzero"), this.endPath();
        }
      }
      paintFormXObjectEnd() {
      }
      _initialize(n) {
        const i = this.svgFactory.create(n.width, n.height), p = this.svgFactory.createElement("svg:defs");
        i.append(p), this.defs = p;
        const T = this.svgFactory.createElement("svg:g");
        return T.setAttributeNS(null, "transform", _(n.transform)), i.append(T), this.svg = T, i;
      }
      _ensureClipGroup() {
        if (!this.current.clipGroup) {
          const n = this.svgFactory.createElement("svg:g");
          n.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(n), this.current.clipGroup = n;
        }
        return this.current.clipGroup;
      }
      _ensureTransformGroup() {
        return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", _(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
      }
    };
  }, (C, o, t) => {
    var e = t(3), r = t(188), l = t(193);
    e({ target: "Array", proto: !0 }, { group: function(y) {
      return r(this, y, arguments.length > 1 ? arguments[1] : void 0);
    } }), l("group");
  }, (C, o, t) => {
    var e = t(99), r = t(14), l = t(13), m = t(40), y = t(18), h = t(64), a = t(189), f = t(108), g = Array, x = r([].push);
    C.exports = function(b, _, M, O) {
      for (var W, w, n, i = m(b), p = l(i), T = e(_, M), R = a(null), k = h(p), d = 0; k > d; d++)
        n = p[d], (w = y(T(n, d, i))) in R ? x(R[w], n) : R[w] = [n];
      if (O && (W = O(i)) !== g)
        for (w in R)
          R[w] = f(W, R[w]);
      return R;
    };
  }, (C, o, t) => {
    var e, r = t(47), l = t(190), m = t(66), y = t(55), h = t(192), a = t(43), f = t(54), g = "prototype", x = "script", b = f("IE_PROTO"), _ = function() {
    }, M = function(w) {
      return "<" + x + ">" + w + "</" + x + ">";
    }, O = function(w) {
      w.write(M("")), w.close();
      var n = w.parentWindow.Object;
      return w = null, n;
    }, W = function() {
      try {
        e = new ActiveXObject("htmlfile");
      } catch {
      }
      W = typeof document < "u" ? document.domain && e ? O(e) : function() {
        var n, i = a("iframe"), p = "java" + x + ":";
        return i.style.display = "none", h.appendChild(i), i.src = String(p), (n = i.contentWindow.document).open(), n.write(M("document.F=Object")), n.close(), n.F;
      }() : O(e);
      for (var w = m.length; w--; )
        delete W[g][m[w]];
      return W();
    };
    y[b] = !0, C.exports = Object.create || function(n, i) {
      var p;
      return n !== null ? (_[g] = r(n), p = new _(), _[g] = null, p[b] = n) : p = W(), i === void 0 ? p : l.f(p, i);
    };
  }, (C, o, t) => {
    var e = t(6), r = t(46), l = t(45), m = t(47), y = t(12), h = t(191);
    o.f = e && !r ? Object.defineProperties : function(f, g) {
      m(f);
      for (var x, b = y(g), _ = h(g), M = _.length, O = 0; M > O; )
        l.f(f, x = _[O++], b[x]);
      return f;
    };
  }, (C, o, t) => {
    var e = t(59), r = t(66);
    C.exports = Object.keys || function(m) {
      return e(m, r);
    };
  }, (C, o, t) => {
    var e = t(24);
    C.exports = e("document", "documentElement");
  }, (C, o, t) => {
    var e = t(34), r = t(189), l = t(45).f, m = e("unscopables"), y = Array.prototype;
    y[m] === void 0 && l(y, m, { configurable: !0, value: r(null) }), C.exports = function(h) {
      y[m][h] = !0;
    };
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.XfaText = void 0, t(89);
    class e {
      static textContent(l) {
        const m = [], y = { items: m, styles: /* @__PURE__ */ Object.create(null) };
        return function h(a) {
          var x;
          if (!a)
            return;
          let f = null;
          const g = a.name;
          if (g === "#text")
            f = a.value;
          else {
            if (!e.shouldBuildText(g))
              return;
            (x = a == null ? void 0 : a.attributes) != null && x.textContent ? f = a.attributes.textContent : a.value && (f = a.value);
          }
          if (f !== null && m.push({ str: f }), a.children)
            for (const b of a.children)
              h(b);
        }(l), y;
      }
      static shouldBuildText(l) {
        return !(l === "textarea" || l === "input" || l === "option" || l === "select");
      }
    }
    o.XfaText = e;
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.TextLayerRenderTask = void 0, o.renderTextLayer = function(b) {
      !b.textContentSource && (b.textContent || b.textContentStream) && ((0, r.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), b.textContentSource = b.textContent || b.textContentStream);
      const { container: _, viewport: M } = b, O = getComputedStyle(_), W = O.getPropertyValue("visibility"), w = parseFloat(O.getPropertyValue("--scale-factor"));
      W === "visible" && (!w || Math.abs(w - M.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
      const n = new g(b);
      return n._render(), n;
    }, o.updateTextLayer = function(b) {
      let { container: _, viewport: M, textDivs: O, textDivProperties: W, isOffscreenCanvasSupported: w, mustRotate: n = !0, mustRescale: i = !0 } = b;
      if (n && (0, r.setLayerDimensions)(_, { rotation: M.rotation }), i) {
        const p = h(0, w), T = { prevFontSize: null, prevFontFamily: null, div: null, scale: M.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: p };
        for (const R of O)
          T.properties = W.get(R), T.div = R, f(T);
      }
    }, t(89), t(2);
    var e = t(1), r = t(168);
    const l = 30, m = 0.8, y = /* @__PURE__ */ new Map();
    function h(x, b) {
      let _;
      if (b && e.FeatureTest.isOffscreenCanvasSupported)
        _ = new OffscreenCanvas(x, x).getContext("2d", { alpha: !1 });
      else {
        const M = document.createElement("canvas");
        M.width = M.height = x, _ = M.getContext("2d", { alpha: !1 });
      }
      return _;
    }
    function a(x, b, _) {
      const M = document.createElement("span"), O = { angle: 0, canvasWidth: 0, hasText: b.str !== "", hasEOL: b.hasEOL, fontSize: 0 };
      x._textDivs.push(M);
      const W = e.Util.transform(x._transform, b.transform);
      let w = Math.atan2(W[1], W[0]);
      const n = _[b.fontName];
      n.vertical && (w += Math.PI / 2);
      const i = Math.hypot(W[2], W[3]), p = i * function(V, Z) {
        const B = y.get(V);
        if (B)
          return B;
        const U = h(l, Z);
        U.font = `${l}px ${V}`;
        const u = U.measureText("");
        let v = u.fontBoundingBoxAscent, S = Math.abs(u.fontBoundingBoxDescent);
        if (v) {
          const q = v / (v + S);
          return y.set(V, q), U.canvas.width = U.canvas.height = 0, q;
        }
        U.strokeStyle = "red", U.clearRect(0, 0, l, l), U.strokeText("g", 0, 0);
        let D = U.getImageData(0, 0, l, l).data;
        S = 0;
        for (let q = D.length - 1 - 3; q >= 0; q -= 4)
          if (D[q] > 0) {
            S = Math.ceil(q / 4 / l);
            break;
          }
        U.clearRect(0, 0, l, l), U.strokeText("A", 0, l), D = U.getImageData(0, 0, l, l).data, v = 0;
        for (let q = 0, J = D.length; q < J; q += 4)
          if (D[q] > 0) {
            v = l - Math.floor(q / 4 / l);
            break;
          }
        if (U.canvas.width = U.canvas.height = 0, v) {
          const q = v / (v + S);
          return y.set(V, q), q;
        }
        return y.set(V, m), m;
      }(n.fontFamily, x._isOffscreenCanvasSupported);
      let T, R;
      w === 0 ? (T = W[4], R = W[5] - p) : (T = W[4] + p * Math.sin(w), R = W[5] - p * Math.cos(w));
      const k = "calc(var(--scale-factor)*", d = M.style;
      x._container === x._rootContainer ? (d.left = `${(100 * T / x._pageWidth).toFixed(2)}%`, d.top = `${(100 * R / x._pageHeight).toFixed(2)}%`) : (d.left = `${k}${T.toFixed(2)}px)`, d.top = `${k}${R.toFixed(2)}px)`), d.fontSize = `${k}${i.toFixed(2)}px)`, d.fontFamily = n.fontFamily, O.fontSize = i, M.setAttribute("role", "presentation"), M.textContent = b.str, M.dir = b.dir, x._fontInspectorEnabled && (M.dataset.fontName = b.fontName), w !== 0 && (O.angle = w * (180 / Math.PI));
      let L = !1;
      if (b.str.length > 1)
        L = !0;
      else if (b.str !== " " && b.transform[0] !== b.transform[3]) {
        const F = Math.abs(b.transform[0]), V = Math.abs(b.transform[3]);
        F !== V && Math.max(F, V) / Math.min(F, V) > 1.5 && (L = !0);
      }
      L && (O.canvasWidth = n.vertical ? b.height : b.width), x._textDivProperties.set(M, O), x._isReadableStream && x._layoutText(M);
    }
    function f(x) {
      const { div: b, scale: _, properties: M, ctx: O, prevFontSize: W, prevFontFamily: w } = x, { style: n } = b;
      let i = "";
      if (M.canvasWidth !== 0 && M.hasText) {
        const { fontFamily: p } = n, { canvasWidth: T, fontSize: R } = M;
        (W !== R || w !== p) && (O.font = `${R * _}px ${p}`, x.prevFontSize = R, x.prevFontFamily = p);
        const { width: k } = O.measureText(b.textContent);
        k > 0 && (i = `scaleX(${T * _ / k})`);
      }
      M.angle !== 0 && (i = `rotate(${M.angle}deg) ${i}`), i.length > 0 && (n.transform = i);
    }
    class g {
      constructor(b) {
        var d;
        let { textContentSource: _, container: M, viewport: O, textDivs: W, textDivProperties: w, textContentItemsStr: n, isOffscreenCanvasSupported: i } = b;
        this._textContentSource = _, this._isReadableStream = _ instanceof ReadableStream, this._container = this._rootContainer = M, this._textDivs = W || [], this._textContentItemsStr = n || [], this._isOffscreenCanvasSupported = i, this._fontInspectorEnabled = !!((d = globalThis.FontInspector) != null && d.enabled), this._reader = null, this._textDivProperties = w || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new e.PromiseCapability(), this._layoutTextParams = { prevFontSize: null, prevFontFamily: null, div: null, scale: O.scale * (globalThis.devicePixelRatio || 1), properties: null, ctx: h(0, i) };
        const { pageWidth: p, pageHeight: T, pageX: R, pageY: k } = O.rawDims;
        this._transform = [1, 0, 0, -1, -R, k + T], this._pageWidth = p, this._pageHeight = T, (0, r.setLayerDimensions)(M, O), this._capability.promise.finally(() => {
          this._layoutTextParams = null;
        }).catch(() => {
        });
      }
      get promise() {
        return this._capability.promise;
      }
      cancel() {
        this._canceled = !0, this._reader && (this._reader.cancel(new e.AbortException("TextLayer task cancelled.")).catch(() => {
        }), this._reader = null), this._capability.reject(new e.AbortException("TextLayer task cancelled."));
      }
      _processItems(b, _) {
        for (const M of b)
          if (M.str !== void 0)
            this._textContentItemsStr.push(M.str), a(this, M, _);
          else if (M.type === "beginMarkedContentProps" || M.type === "beginMarkedContent") {
            const O = this._container;
            this._container = document.createElement("span"), this._container.classList.add("markedContent"), M.id !== null && this._container.setAttribute("id", `${M.id}`), O.append(this._container);
          } else
            M.type === "endMarkedContent" && (this._container = this._container.parentNode);
      }
      _layoutText(b) {
        const _ = this._layoutTextParams.properties = this._textDivProperties.get(b);
        if (this._layoutTextParams.div = b, f(this._layoutTextParams), _.hasText && this._container.append(b), _.hasEOL) {
          const M = document.createElement("br");
          M.setAttribute("role", "presentation"), this._container.append(M);
        }
      }
      _render() {
        const b = new e.PromiseCapability();
        let _ = /* @__PURE__ */ Object.create(null);
        if (this._isReadableStream) {
          const M = () => {
            this._reader.read().then((O) => {
              let { value: W, done: w } = O;
              w ? b.resolve() : (Object.assign(_, W.styles), this._processItems(W.items, _), M());
            }, b.reject);
          };
          this._reader = this._textContentSource.getReader(), M();
        } else {
          if (!this._textContentSource)
            throw new Error('No "textContentSource" parameter specified.');
          {
            const { items: M, styles: O } = this._textContentSource;
            this._processItems(M, O), b.resolve();
          }
        }
        b.promise.then(() => {
          _ = null, function(O) {
            if (O._canceled)
              return;
            const W = O._textDivs, w = O._capability;
            if (W.length > 1e5)
              w.resolve();
            else {
              if (!O._isReadableStream)
                for (const n of W)
                  O._layoutText(n);
              w.resolve();
            }
          }(this);
        }, this._capability.reject);
      }
    }
    o.TextLayerRenderTask = g;
  }, (C, o, t) => {
    var f, g, x, b, _, M, O, W, w, n, i, tr, T, Pe, k, er, L, rr;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.AnnotationEditorLayer = void 0, t(125), t(136), t(138), t(141), t(143), t(145), t(147);
    var e = t(1), r = t(164), l = t(197), m = t(202), y = t(168), h = t(203);
    const V = class V {
      constructor(B) {
        K(this, i);
        K(this, T);
        K(this, k);
        K(this, L);
        K(this, f, void 0);
        K(this, g, !1);
        K(this, x, null);
        K(this, b, this.pointerup.bind(this));
        K(this, _, this.pointerdown.bind(this));
        K(this, M, /* @__PURE__ */ new Map());
        K(this, O, !1);
        K(this, W, !1);
        K(this, w, !1);
        K(this, n, void 0);
        let { uiManager: U, pageIndex: u, div: v, accessibilityManager: S, annotationLayer: D, viewport: q, l10n: J } = B;
        const z = [l.FreeTextEditor, m.InkEditor, h.StampEditor];
        if (!V._initialized) {
          V._initialized = !0;
          for (const N of z)
            N.initialize(J);
        }
        U.registerEditorTypes(z), at(this, n, U), this.pageIndex = u, this.div = v, at(this, f, S), at(this, x, D), this.viewport = q, s(this, n).addLayer(this);
      }
      get isEmpty() {
        return s(this, M).size === 0;
      }
      updateToolbar(B) {
        s(this, n).updateToolbar(B);
      }
      updateMode() {
        let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s(this, n).getMode();
        rt(this, L, rr).call(this), B === e.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), B !== e.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", B === e.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", B === e.AnnotationEditorType.INK), this.div.classList.toggle("stampEditing", B === e.AnnotationEditorType.STAMP), this.div.hidden = !1);
      }
      addInkEditorIfNeeded(B) {
        if (!(!B && s(this, n).getMode() !== e.AnnotationEditorType.INK)) {
          if (!B) {
            for (const U of s(this, M).values())
              if (U.isEmpty()) {
                U.setInBackground();
                return;
              }
          }
          rt(this, T, Pe).call(this, { offsetX: 0, offsetY: 0 }, !1).setInBackground();
        }
      }
      setEditingState(B) {
        s(this, n).setEditingState(B);
      }
      addCommands(B) {
        s(this, n).addCommands(B);
      }
      enable() {
        this.div.style.pointerEvents = "auto";
        const B = /* @__PURE__ */ new Set();
        for (const u of s(this, M).values())
          u.enableEditing(), u.annotationElementId && B.add(u.annotationElementId);
        if (!s(this, x))
          return;
        const U = s(this, x).getEditableAnnotations();
        for (const u of U) {
          if (u.hide(), s(this, n).isDeletedAnnotationElement(u.data.id) || B.has(u.data.id))
            continue;
          const v = this.deserialize(u);
          v && (this.addOrRebuild(v), v.enableEditing());
        }
      }
      disable() {
        var U;
        at(this, w, !0), this.div.style.pointerEvents = "none";
        const B = /* @__PURE__ */ new Set();
        for (const u of s(this, M).values())
          u.disableEditing(), u.annotationElementId && u.serialize() === null ? ((U = this.getEditableAnnotation(u.annotationElementId)) == null || U.show(), u.remove()) : B.add(u.annotationElementId);
        if (s(this, x)) {
          const u = s(this, x).getEditableAnnotations();
          for (const v of u) {
            const { id: S } = v.data;
            B.has(S) || s(this, n).isDeletedAnnotationElement(S) || v.show();
          }
        }
        rt(this, L, rr).call(this), this.isEmpty && (this.div.hidden = !0), at(this, w, !1);
      }
      getEditableAnnotation(B) {
        var U;
        return ((U = s(this, x)) == null ? void 0 : U.getEditableAnnotation(B)) || null;
      }
      setActiveEditor(B) {
        s(this, n).getActive() !== B && s(this, n).setActiveEditor(B);
      }
      enableClick() {
        this.div.addEventListener("pointerdown", s(this, _)), this.div.addEventListener("pointerup", s(this, b));
      }
      disableClick() {
        this.div.removeEventListener("pointerdown", s(this, _)), this.div.removeEventListener("pointerup", s(this, b));
      }
      attach(B) {
        s(this, M).set(B.id, B);
        const { annotationElementId: U } = B;
        U && s(this, n).isDeletedAnnotationElement(U) && s(this, n).removeDeletedAnnotationElement(B);
      }
      detach(B) {
        var U;
        s(this, M).delete(B.id), (U = s(this, f)) == null || U.removePointerInTextLayer(B.contentDiv), !s(this, w) && B.annotationElementId && s(this, n).addDeletedAnnotationElement(B);
      }
      remove(B) {
        this.detach(B), s(this, n).removeEditor(B), B.div.contains(document.activeElement) && setTimeout(() => {
          s(this, n).focusMainContainer();
        }, 0), B.div.remove(), B.isAttachedToDOM = !1, s(this, W) || this.addInkEditorIfNeeded(!1);
      }
      changeParent(B) {
        var U;
        B.parent !== this && (B.annotationElementId && (s(this, n).addDeletedAnnotationElement(B.annotationElementId), r.AnnotationEditor.deleteAnnotationElement(B), B.annotationElementId = null), this.attach(B), (U = B.parent) == null || U.detach(B), B.setParent(this), B.div && B.isAttachedToDOM && (B.div.remove(), this.div.append(B.div)));
      }
      add(B) {
        if (this.changeParent(B), s(this, n).addEditor(B), this.attach(B), !B.isAttachedToDOM) {
          const U = B.render();
          this.div.append(U), B.isAttachedToDOM = !0;
        }
        B.fixAndSetPosition(), B.onceAdded(), s(this, n).addToAnnotationStorage(B);
      }
      moveEditorInDOM(B) {
        var u;
        if (!B.isAttachedToDOM)
          return;
        const { activeElement: U } = document;
        B.div.contains(U) && (B._focusEventsAllowed = !1, setTimeout(() => {
          B.div.contains(document.activeElement) ? B._focusEventsAllowed = !0 : (B.div.addEventListener("focusin", () => {
            B._focusEventsAllowed = !0;
          }, { once: !0 }), U.focus());
        }, 0)), B._structTreeParentId = (u = s(this, f)) == null ? void 0 : u.moveElementInDOM(this.div, B.div, B.contentDiv, !0);
      }
      addOrRebuild(B) {
        B.needsToBeRebuilt() ? B.rebuild() : this.add(B);
      }
      addUndoableEditor(B) {
        this.addCommands({ cmd: () => B._uiManager.rebuild(B), undo: () => {
          B.remove();
        }, mustExec: !1 });
      }
      getNextId() {
        return s(this, n).getId();
      }
      pasteEditor(B, U) {
        s(this, n).updateToolbar(B), s(this, n).updateMode(B);
        const { offsetX: u, offsetY: v } = rt(this, k, er).call(this), S = this.getNextId(), D = rt(this, i, tr).call(this, { parent: this, id: S, x: u, y: v, uiManager: s(this, n), isCentered: !0, ...U });
        D && this.add(D);
      }
      deserialize(B) {
        var U;
        switch ((U = B.annotationType) != null ? U : B.annotationEditorType) {
          case e.AnnotationEditorType.FREETEXT:
            return l.FreeTextEditor.deserialize(B, this, s(this, n));
          case e.AnnotationEditorType.INK:
            return m.InkEditor.deserialize(B, this, s(this, n));
          case e.AnnotationEditorType.STAMP:
            return h.StampEditor.deserialize(B, this, s(this, n));
        }
        return null;
      }
      addNewEditor() {
        rt(this, T, Pe).call(this, rt(this, k, er).call(this), !0);
      }
      setSelected(B) {
        s(this, n).setSelected(B);
      }
      toggleSelected(B) {
        s(this, n).toggleSelected(B);
      }
      isSelected(B) {
        return s(this, n).isSelected(B);
      }
      unselect(B) {
        s(this, n).unselect(B);
      }
      pointerup(B) {
        const { isMac: U } = e.FeatureTest.platform;
        !(B.button !== 0 || B.ctrlKey && U) && B.target === this.div && s(this, O) && (at(this, O, !1), s(this, g) ? s(this, n).getMode() !== e.AnnotationEditorType.STAMP ? rt(this, T, Pe).call(this, B, !1) : s(this, n).unselectAll() : at(this, g, !0));
      }
      pointerdown(B) {
        if (s(this, O)) {
          at(this, O, !1);
          return;
        }
        const { isMac: U } = e.FeatureTest.platform;
        if (B.button !== 0 || B.ctrlKey && U || B.target !== this.div)
          return;
        at(this, O, !0);
        const u = s(this, n).getActive();
        at(this, g, !u || u.isEmpty());
      }
      findNewParent(B, U, u) {
        const v = s(this, n).findParent(U, u);
        return v === null || v === this ? !1 : (v.changeParent(B), !0);
      }
      destroy() {
        var B, U;
        ((B = s(this, n).getActive()) == null ? void 0 : B.parent) === this && (s(this, n).commitOrRemove(), s(this, n).setActiveEditor(null));
        for (const u of s(this, M).values())
          (U = s(this, f)) == null || U.removePointerInTextLayer(u.contentDiv), u.setParent(null), u.isAttachedToDOM = !1, u.div.remove();
        this.div = null, s(this, M).clear(), s(this, n).removeLayer(this);
      }
      render(B) {
        let { viewport: U } = B;
        this.viewport = U, (0, y.setLayerDimensions)(this.div, U);
        for (const u of s(this, n).getEditors(this.pageIndex))
          this.add(u);
        this.updateMode();
      }
      update(B) {
        let { viewport: U } = B;
        s(this, n).commitOrRemove(), this.viewport = U, (0, y.setLayerDimensions)(this.div, { rotation: U.rotation }), this.updateMode();
      }
      get pageDimensions() {
        const { pageWidth: B, pageHeight: U } = this.viewport.rawDims;
        return [B, U];
      }
    };
    f = new WeakMap(), g = new WeakMap(), x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakMap(), O = new WeakMap(), W = new WeakMap(), w = new WeakMap(), n = new WeakMap(), i = new WeakSet(), tr = function(B) {
      switch (s(this, n).getMode()) {
        case e.AnnotationEditorType.FREETEXT:
          return new l.FreeTextEditor(B);
        case e.AnnotationEditorType.INK:
          return new m.InkEditor(B);
        case e.AnnotationEditorType.STAMP:
          return new h.StampEditor(B);
      }
      return null;
    }, T = new WeakSet(), Pe = function(B, U) {
      const u = this.getNextId(), v = rt(this, i, tr).call(this, { parent: this, id: u, x: B.offsetX, y: B.offsetY, uiManager: s(this, n), isCentered: U });
      return v && this.add(v), v;
    }, k = new WeakSet(), er = function() {
      const { x: B, y: U, width: u, height: v } = this.div.getBoundingClientRect(), S = Math.max(0, B), D = Math.max(0, U), q = (S + Math.min(window.innerWidth, B + u)) / 2 - B, J = (D + Math.min(window.innerHeight, U + v)) / 2 - U, [z, N] = this.viewport.rotation % 180 == 0 ? [q, J] : [J, q];
      return { offsetX: z, offsetY: N };
    }, L = new WeakSet(), rr = function() {
      at(this, W, !0);
      for (const B of s(this, M).values())
        B.isEmpty() && B.remove();
      at(this, W, !1);
    }, Yt(V, "_initialized", !1);
    let a = V;
    o.AnnotationEditorLayer = a;
  }, (C, o, t) => {
    var h, a, f, g, x, b, _, M, O, W, kr, n, Mr, p, Rr, R, _e, d, ir, F, Fr, Z, sr;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.FreeTextEditor = void 0, t(89);
    var e = t(1), r = t(165), l = t(164), m = t(198);
    const U = class U extends l.AnnotationEditor {
      constructor(S) {
        super({ ...S, name: "freeTextEditor" });
        K(this, W);
        K(this, n);
        K(this, p);
        K(this, R);
        K(this, d);
        K(this, F);
        K(this, Z);
        K(this, h, this.editorDivBlur.bind(this));
        K(this, a, this.editorDivFocus.bind(this));
        K(this, f, this.editorDivInput.bind(this));
        K(this, g, this.editorDivKeydown.bind(this));
        K(this, x, void 0);
        K(this, b, "");
        K(this, _, `${this.id}-editor`);
        K(this, M, void 0);
        K(this, O, null);
        at(this, x, S.color || U._defaultColor || l.AnnotationEditor._defaultLineColor), at(this, M, S.fontSize || U._defaultFontSize);
      }
      static get _keyboardManager() {
        const S = U.prototype, D = (z) => z.isEmpty(), q = r.AnnotationEditorUIManager.TRANSLATE_SMALL, J = r.AnnotationEditorUIManager.TRANSLATE_BIG;
        return (0, e.shadow)(this, "_keyboardManager", new r.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], S.commitOrRemove, { bubbles: !0 }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], S.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], S._translateEmpty, { args: [-q, 0], checker: D }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], S._translateEmpty, { args: [-J, 0], checker: D }], [["ArrowRight", "mac+ArrowRight"], S._translateEmpty, { args: [q, 0], checker: D }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], S._translateEmpty, { args: [J, 0], checker: D }], [["ArrowUp", "mac+ArrowUp"], S._translateEmpty, { args: [0, -q], checker: D }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], S._translateEmpty, { args: [0, -J], checker: D }], [["ArrowDown", "mac+ArrowDown"], S._translateEmpty, { args: [0, q], checker: D }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], S._translateEmpty, { args: [0, J], checker: D }]]));
      }
      static initialize(S) {
        l.AnnotationEditor.initialize(S, { strings: ["free_text2_default_content", "editor_free_text2_aria_label"] });
        const D = getComputedStyle(document.documentElement);
        this._internalPadding = parseFloat(D.getPropertyValue("--freetext-padding"));
      }
      static updateDefaultParams(S, D) {
        switch (S) {
          case e.AnnotationEditorParamsType.FREETEXT_SIZE:
            U._defaultFontSize = D;
            break;
          case e.AnnotationEditorParamsType.FREETEXT_COLOR:
            U._defaultColor = D;
        }
      }
      updateParams(S, D) {
        switch (S) {
          case e.AnnotationEditorParamsType.FREETEXT_SIZE:
            rt(this, W, kr).call(this, D);
            break;
          case e.AnnotationEditorParamsType.FREETEXT_COLOR:
            rt(this, n, Mr).call(this, D);
        }
      }
      static get defaultPropertiesToUpdate() {
        return [[e.AnnotationEditorParamsType.FREETEXT_SIZE, U._defaultFontSize], [e.AnnotationEditorParamsType.FREETEXT_COLOR, U._defaultColor || l.AnnotationEditor._defaultLineColor]];
      }
      get propertiesToUpdate() {
        return [[e.AnnotationEditorParamsType.FREETEXT_SIZE, s(this, M)], [e.AnnotationEditorParamsType.FREETEXT_COLOR, s(this, x)]];
      }
      _translateEmpty(S, D) {
        this._uiManager.translateSelectedEditors(S, D, !0);
      }
      getInitialTranslation() {
        const S = this.parentScale;
        return [-U._internalPadding * S, -(U._internalPadding + s(this, M)) * S];
      }
      rebuild() {
        this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
      }
      enableEditMode() {
        this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(e.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", s(this, g)), this.editorDiv.addEventListener("focus", s(this, a)), this.editorDiv.addEventListener("blur", s(this, h)), this.editorDiv.addEventListener("input", s(this, f)));
      }
      disableEditMode() {
        this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", s(this, _)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", s(this, g)), this.editorDiv.removeEventListener("focus", s(this, a)), this.editorDiv.removeEventListener("blur", s(this, h)), this.editorDiv.removeEventListener("input", s(this, f)), this.div.focus({ preventScroll: !0 }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
      }
      focusin(S) {
        this._focusEventsAllowed && (super.focusin(S), S.target !== this.editorDiv && this.editorDiv.focus());
      }
      onceAdded() {
        var S;
        this.width ? rt(this, Z, sr).call(this) : (this.enableEditMode(), this.editorDiv.focus(), (S = this._initialOptions) != null && S.isCentered && this.center(), this._initialOptions = null);
      }
      isEmpty() {
        return !this.editorDiv || this.editorDiv.innerText.trim() === "";
      }
      remove() {
        this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing")), super.remove();
      }
      commit() {
        if (!this.isInEditMode())
          return;
        super.commit(), this.disableEditMode();
        const S = s(this, b), D = at(this, b, rt(this, p, Rr).call(this).trimEnd());
        if (S === D)
          return;
        const q = (J) => {
          at(this, b, J), J ? (rt(this, d, ir).call(this), this._uiManager.rebuild(this), rt(this, R, _e).call(this)) : this.remove();
        };
        this.addCommands({ cmd: () => {
          q(D);
        }, undo: () => {
          q(S);
        }, mustExec: !1 }), rt(this, R, _e).call(this);
      }
      shouldGetKeyboardEvents() {
        return this.isInEditMode();
      }
      enterInEditMode() {
        this.enableEditMode(), this.editorDiv.focus();
      }
      dblclick(S) {
        this.enterInEditMode();
      }
      keydown(S) {
        S.target === this.div && S.key === "Enter" && (this.enterInEditMode(), S.preventDefault());
      }
      editorDivKeydown(S) {
        U._keyboardManager.exec(this, S);
      }
      editorDivFocus(S) {
        this.isEditing = !0;
      }
      editorDivBlur(S) {
        this.isEditing = !1;
      }
      editorDivInput(S) {
        this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
      }
      disableEditing() {
        this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
      }
      enableEditing() {
        this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
      }
      render() {
        if (this.div)
          return this.div;
        let S, D;
        this.width && (S = this.x, D = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", s(this, _)), this.enableEditing(), l.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then((J) => {
          var z;
          return (z = this.editorDiv) == null ? void 0 : z.setAttribute("aria-label", J);
        }), l.AnnotationEditor._l10nPromise.get("free_text2_default_content").then((J) => {
          var z;
          return (z = this.editorDiv) == null ? void 0 : z.setAttribute("default-content", J);
        }), this.editorDiv.contentEditable = !0;
        const { style: q } = this.editorDiv;
        if (q.fontSize = `calc(${s(this, M)}px * var(--scale-factor))`, q.color = s(this, x), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, r.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
          const [J, z] = this.parentDimensions;
          if (this.annotationElementId) {
            const { position: N } = s(this, O);
            let [P, I] = this.getInitialTranslation();
            [P, I] = this.pageTranslationToScreen(P, I);
            const [E, j] = this.pageDimensions, [$, H] = this.pageTranslation;
            let Y, X;
            switch (this.rotation) {
              case 0:
                Y = S + (N[0] - $) / E, X = D + this.height - (N[1] - H) / j;
                break;
              case 90:
                Y = S + (N[0] - $) / E, X = D - (N[1] - H) / j, [P, I] = [I, -P];
                break;
              case 180:
                Y = S - this.width + (N[0] - $) / E, X = D - (N[1] - H) / j, [P, I] = [-P, -I];
                break;
              case 270:
                Y = S + (N[0] - $ - this.height * j) / E, X = D + (N[1] - H - this.width * E) / j, [P, I] = [-I, P];
            }
            this.setAt(Y * J, X * z, P, I);
          } else
            this.setAt(S * J, D * z, this.width * J, this.height * z);
          rt(this, d, ir).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
        } else
          this._isDraggable = !1, this.editorDiv.contentEditable = !0;
        return this.div;
      }
      get contentDiv() {
        return this.editorDiv;
      }
      static deserialize(S, D, q) {
        let J = null;
        if (S instanceof m.FreeTextAnnotationElement) {
          const { data: { defaultAppearanceData: { fontSize: N, fontColor: P }, rect: I, rotation: E, id: j }, textContent: $, textPosition: H, parent: { page: { pageNumber: Y } } } = S;
          if (!$ || $.length === 0)
            return null;
          J = S = { annotationType: e.AnnotationEditorType.FREETEXT, color: Array.from(P), fontSize: N, value: $.join(`
`), position: H, pageIndex: Y - 1, rect: I, rotation: E, id: j, deleted: !1 };
        }
        const z = super.deserialize(S, D, q);
        return at(z, M, S.fontSize), at(z, x, e.Util.makeHexColor(...S.color)), at(z, b, S.value), z.annotationElementId = S.id || null, at(z, O, J), z;
      }
      serialize() {
        let S = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
        if (this.isEmpty())
          return null;
        if (this.deleted)
          return { pageIndex: this.pageIndex, id: this.annotationElementId, deleted: !0 };
        const D = U._internalPadding * this.parentScale, q = this.getRect(D, D), J = l.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : s(this, x)), z = { annotationType: e.AnnotationEditorType.FREETEXT, color: J, fontSize: s(this, M), value: s(this, b), pageIndex: this.pageIndex, rect: q, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
        return S ? z : this.annotationElementId && !rt(this, F, Fr).call(this, z) ? null : (z.id = this.annotationElementId, z);
      }
    };
    h = new WeakMap(), a = new WeakMap(), f = new WeakMap(), g = new WeakMap(), x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakMap(), O = new WeakMap(), W = new WeakSet(), kr = function(S) {
      const D = (J) => {
        this.editorDiv.style.fontSize = `calc(${J}px * var(--scale-factor))`, this.translate(0, -(J - s(this, M)) * this.parentScale), at(this, M, J), rt(this, R, _e).call(this);
      }, q = s(this, M);
      this.addCommands({ cmd: () => {
        D(S);
      }, undo: () => {
        D(q);
      }, mustExec: !0, type: e.AnnotationEditorParamsType.FREETEXT_SIZE, overwriteIfSameType: !0, keepUndo: !0 });
    }, n = new WeakSet(), Mr = function(S) {
      const D = s(this, x);
      this.addCommands({ cmd: () => {
        at(this, x, this.editorDiv.style.color = S);
      }, undo: () => {
        at(this, x, this.editorDiv.style.color = D);
      }, mustExec: !0, type: e.AnnotationEditorParamsType.FREETEXT_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
    }, p = new WeakSet(), Rr = function() {
      const S = this.editorDiv.getElementsByTagName("div");
      if (S.length === 0)
        return this.editorDiv.innerText;
      const D = [];
      for (const q of S)
        D.push(q.innerText.replace(/\r\n?|\n/, ""));
      return D.join(`
`);
    }, R = new WeakSet(), _e = function() {
      const [S, D] = this.parentDimensions;
      let q;
      if (this.isAttachedToDOM)
        q = this.div.getBoundingClientRect();
      else {
        const { currentLayer: J, div: z } = this, N = z.style.display;
        z.style.display = "hidden", J.div.append(this.div), q = z.getBoundingClientRect(), z.remove(), z.style.display = N;
      }
      this.rotation % 180 == this.parentRotation % 180 ? (this.width = q.width / S, this.height = q.height / D) : (this.width = q.height / S, this.height = q.width / D), this.fixAndSetPosition();
    }, d = new WeakSet(), ir = function() {
      if (this.editorDiv.replaceChildren(), s(this, b))
        for (const S of s(this, b).split(`
`)) {
          const D = document.createElement("div");
          D.append(S ? document.createTextNode(S) : document.createElement("br")), this.editorDiv.append(D);
        }
    }, F = new WeakSet(), Fr = function(S) {
      const { value: D, fontSize: q, color: J, rect: z, pageIndex: N } = s(this, O);
      return S.value !== D || S.fontSize !== q || S.rect.some((P, I) => Math.abs(P - z[I]) >= 1) || S.color.some((P, I) => P !== J[I]) || S.pageIndex !== N;
    }, Z = new WeakSet(), sr = function() {
      let S = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      if (!this.annotationElementId)
        return;
      if (rt(this, R, _e).call(this), !S && (this.width === 0 || this.height === 0)) {
        setTimeout(() => rt(this, Z, sr).call(this, !0), 0);
        return;
      }
      const D = U._internalPadding * this.parentScale;
      s(this, O).rect = this.getRect(D, D);
    }, Yt(U, "_freeTextDefaultContent", ""), Yt(U, "_internalPadding", 0), Yt(U, "_defaultColor", null), Yt(U, "_defaultFontSize", 10), Yt(U, "_type", "freetext");
    let y = U;
    o.FreeTextEditor = y;
  }, (C, o, t) => {
    var N, I, le, j, Dr, H, Y, X, tt, nt, lt, ht, gt, St, ft, bt, wt, yt, Et, Ft, It, Nt, Bt, Ir, te, ke, ee, nr, Zt, ar, Qt, zt, Jt, qt, dt, pt, Rt, or, it, ot, Ct, _t, Or, Pt, lr, ut;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.StampAnnotationElement = o.InkAnnotationElement = o.FreeTextAnnotationElement = o.AnnotationLayer = void 0, t(89), t(125), t(136), t(138), t(141), t(143), t(145), t(147);
    var e = t(1), r = t(168), l = t(163), m = t(199), y = t(200), h = t(201);
    const a = 1e3, f = /* @__PURE__ */ new WeakSet();
    function g(mt) {
      return { width: mt[2] - mt[0], height: mt[3] - mt[1] };
    }
    class x {
      static create(c) {
        switch (c.data.annotationType) {
          case e.AnnotationType.LINK:
            return new _(c);
          case e.AnnotationType.TEXT:
            return new M(c);
          case e.AnnotationType.WIDGET:
            switch (c.data.fieldType) {
              case "Tx":
                return new W(c);
              case "Btn":
                return c.data.radioButton ? new i(c) : c.data.checkBox ? new n(c) : new p(c);
              case "Ch":
                return new T(c);
              case "Sig":
                return new w(c);
            }
            return new O(c);
          case e.AnnotationType.POPUP:
            return new R(c);
          case e.AnnotationType.FREETEXT:
            return new d(c);
          case e.AnnotationType.LINE:
            return new L(c);
          case e.AnnotationType.SQUARE:
            return new F(c);
          case e.AnnotationType.CIRCLE:
            return new V(c);
          case e.AnnotationType.POLYLINE:
            return new Z(c);
          case e.AnnotationType.CARET:
            return new U(c);
          case e.AnnotationType.INK:
            return new u(c);
          case e.AnnotationType.POLYGON:
            return new B(c);
          case e.AnnotationType.HIGHLIGHT:
            return new v(c);
          case e.AnnotationType.UNDERLINE:
            return new S(c);
          case e.AnnotationType.SQUIGGLY:
            return new D(c);
          case e.AnnotationType.STRIKEOUT:
            return new q(c);
          case e.AnnotationType.STAMP:
            return new J(c);
          case e.AnnotationType.FILEATTACHMENT:
            return new z(c);
          default:
            return new b(c);
        }
      }
    }
    const P = class P {
      constructor(c) {
        K(this, N, !1);
        let { isRenderable: A = !1, ignoreBorder: G = !1, createQuadrilaterals: Q = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.isRenderable = A, this.data = c.data, this.layer = c.layer, this.linkService = c.linkService, this.downloadManager = c.downloadManager, this.imageResourcesPath = c.imageResourcesPath, this.renderForms = c.renderForms, this.svgFactory = c.svgFactory, this.annotationStorage = c.annotationStorage, this.enableScripting = c.enableScripting, this.hasJSActions = c.hasJSActions, this._fieldObjects = c.fieldObjects, this.parent = c.parent, A && (this.container = this._createContainer(G)), Q && this._createQuadrilaterals();
      }
      static _hasPopupData(c) {
        let { titleObj: A, contentsObj: G, richText: Q } = c;
        return !!(A != null && A.str || G != null && G.str || Q != null && Q.str);
      }
      get hasPopupData() {
        return P._hasPopupData(this.data);
      }
      _createContainer(c) {
        const { data: A, parent: { page: G, viewport: Q } } = this, et = document.createElement("section");
        et.setAttribute("data-annotation-id", A.id), this instanceof O || (et.tabIndex = a), et.style.zIndex = this.parent.zIndex++, this.data.popupRef && et.setAttribute("aria-haspopup", "dialog"), A.noRotate && et.classList.add("norotate");
        const { pageWidth: st, pageHeight: ct, pageX: vt, pageY: xt } = Q.rawDims;
        if (!A.rect || this instanceof R) {
          const { rotation: Dt } = A;
          return A.hasOwnCanvas || Dt === 0 || this.setRotation(Dt, et), et;
        }
        const { width: At, height: Lt } = g(A.rect), Tt = e.Util.normalizeRect([A.rect[0], G.view[3] - A.rect[1] + G.view[1], A.rect[2], G.view[3] - A.rect[3] + G.view[1]]);
        if (!c && A.borderStyle.width > 0) {
          et.style.borderWidth = `${A.borderStyle.width}px`;
          const Dt = A.borderStyle.horizontalCornerRadius, Ot = A.borderStyle.verticalCornerRadius;
          if (Dt > 0 || Ot > 0) {
            const Ht = `calc(${Dt}px * var(--scale-factor)) / calc(${Ot}px * var(--scale-factor))`;
            et.style.borderRadius = Ht;
          } else if (this instanceof i) {
            const Ht = `calc(${At}px * var(--scale-factor)) / calc(${Lt}px * var(--scale-factor))`;
            et.style.borderRadius = Ht;
          }
          switch (A.borderStyle.style) {
            case e.AnnotationBorderStyleType.SOLID:
              et.style.borderStyle = "solid";
              break;
            case e.AnnotationBorderStyleType.DASHED:
              et.style.borderStyle = "dashed";
              break;
            case e.AnnotationBorderStyleType.BEVELED:
              (0, e.warn)("Unimplemented border style: beveled");
              break;
            case e.AnnotationBorderStyleType.INSET:
              (0, e.warn)("Unimplemented border style: inset");
              break;
            case e.AnnotationBorderStyleType.UNDERLINE:
              et.style.borderBottomStyle = "solid";
          }
          const Wt = A.borderColor || null;
          Wt ? (at(this, N, !0), et.style.borderColor = e.Util.makeHexColor(0 | Wt[0], 0 | Wt[1], 0 | Wt[2])) : et.style.borderWidth = 0;
        }
        et.style.left = 100 * (Tt[0] - vt) / st + "%", et.style.top = 100 * (Tt[1] - xt) / ct + "%";
        const { rotation: Mt } = A;
        return A.hasOwnCanvas || Mt === 0 ? (et.style.width = 100 * At / st + "%", et.style.height = 100 * Lt / ct + "%") : this.setRotation(Mt, et), et;
      }
      setRotation(c) {
        let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.container;
        if (!this.data.rect)
          return;
        const { pageWidth: G, pageHeight: Q } = this.parent.viewport.rawDims, { width: et, height: st } = g(this.data.rect);
        let ct, vt;
        c % 180 == 0 ? (ct = 100 * et / G, vt = 100 * st / Q) : (ct = 100 * st / G, vt = 100 * et / Q), A.style.width = `${ct}%`, A.style.height = `${vt}%`, A.setAttribute("data-main-rotation", (360 - c) % 360);
      }
      get _commonActions() {
        const c = (A, G, Q) => {
          const et = Q.detail[A], st = et[0], ct = et.slice(1);
          Q.target.style[G] = m.ColorConverters[`${st}_HTML`](ct), this.annotationStorage.setValue(this.data.id, { [G]: m.ColorConverters[`${st}_rgb`](ct) });
        };
        return (0, e.shadow)(this, "_commonActions", { display: (A) => {
          const { display: G } = A.detail, Q = G % 2 == 1;
          this.container.style.visibility = Q ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noView: Q, noPrint: G === 1 || G === 2 });
        }, print: (A) => {
          this.annotationStorage.setValue(this.data.id, { noPrint: !A.detail.print });
        }, hidden: (A) => {
          const { hidden: G } = A.detail;
          this.container.style.visibility = G ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, { noPrint: G, noView: G });
        }, focus: (A) => {
          setTimeout(() => A.target.focus({ preventScroll: !1 }), 0);
        }, userName: (A) => {
          A.target.title = A.detail.userName;
        }, readonly: (A) => {
          A.target.disabled = A.detail.readonly;
        }, required: (A) => {
          this._setRequired(A.target, A.detail.required);
        }, bgColor: (A) => {
          c("bgColor", "backgroundColor", A);
        }, fillColor: (A) => {
          c("fillColor", "backgroundColor", A);
        }, fgColor: (A) => {
          c("fgColor", "color", A);
        }, textColor: (A) => {
          c("textColor", "color", A);
        }, borderColor: (A) => {
          c("borderColor", "borderColor", A);
        }, strokeColor: (A) => {
          c("strokeColor", "borderColor", A);
        }, rotation: (A) => {
          const G = A.detail.rotation;
          this.setRotation(G), this.annotationStorage.setValue(this.data.id, { rotation: G });
        } });
      }
      _dispatchEventFromSandbox(c, A) {
        const G = this._commonActions;
        for (const Q of Object.keys(A.detail)) {
          const et = c[Q] || G[Q];
          et == null || et(A);
        }
      }
      _setDefaultPropertiesFromJS(c) {
        if (!this.enableScripting)
          return;
        const A = this.annotationStorage.getRawValue(this.data.id);
        if (!A)
          return;
        const G = this._commonActions;
        for (const [Q, et] of Object.entries(A)) {
          const st = G[Q];
          st && (st({ detail: { [Q]: et }, target: c }), delete A[Q]);
        }
      }
      _createQuadrilaterals() {
        if (!this.container)
          return;
        const { quadPoints: c } = this.data;
        if (!c)
          return;
        const [A, G, Q, et] = this.data.rect;
        if (c.length === 1) {
          const [, { x: Ot, y: Wt }, { x: Ht, y: Xt }] = c[0];
          if (Q === Ot && et === Wt && A === Ht && G === Xt)
            return;
        }
        const { style: st } = this.container;
        let ct;
        if (s(this, N)) {
          const { borderColor: Ot, borderWidth: Wt } = st;
          st.borderWidth = 0, ct = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${Ot}" stroke-width="${Wt}">`], this.container.classList.add("hasBorder");
        }
        const vt = Q - A, xt = et - G, { svgFactory: At } = this, Lt = At.createElement("svg");
        Lt.classList.add("quadrilateralsContainer"), Lt.setAttribute("width", 0), Lt.setAttribute("height", 0);
        const Tt = At.createElement("defs");
        Lt.append(Tt);
        const Mt = At.createElement("clipPath"), Dt = `clippath_${this.data.id}`;
        Mt.setAttribute("id", Dt), Mt.setAttribute("clipPathUnits", "objectBoundingBox"), Tt.append(Mt);
        for (const [, { x: Ot, y: Wt }, { x: Ht, y: Xt }] of c) {
          const re = At.createElement("rect"), ie = (Ht - A) / vt, ae = (et - Wt) / xt, oe = (Ot - Ht) / vt, vr = (Wt - Xt) / xt;
          re.setAttribute("x", ie), re.setAttribute("y", ae), re.setAttribute("width", oe), re.setAttribute("height", vr), Mt.append(re), ct == null || ct.push(`<rect vector-effect="non-scaling-stroke" x="${ie}" y="${ae}" width="${oe}" height="${vr}"/>`);
        }
        s(this, N) && (ct.push("</g></svg>')"), st.backgroundImage = ct.join("")), this.container.append(Lt), this.container.style.clipPath = `url(#${Dt})`;
      }
      _createPopup() {
        const { container: c, data: A } = this;
        c.setAttribute("aria-haspopup", "dialog");
        const G = new R({ data: { color: A.color, titleObj: A.titleObj, modificationDate: A.modificationDate, contentsObj: A.contentsObj, richText: A.richText, parentRect: A.rect, borderStyle: 0, id: `popup_${A.id}`, rotation: A.rotation }, parent: this.parent, elements: [this] });
        this.parent.div.append(G.render());
      }
      render() {
        (0, e.unreachable)("Abstract method `AnnotationElement.render` called");
      }
      _getElementsByName(c) {
        let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        const G = [];
        if (this._fieldObjects) {
          const Q = this._fieldObjects[c];
          if (Q)
            for (const { page: et, id: st, exportValues: ct } of Q) {
              if (et === -1 || st === A)
                continue;
              const vt = typeof ct == "string" ? ct : null, xt = document.querySelector(`[data-element-id="${st}"]`);
              !xt || f.has(xt) ? G.push({ id: st, exportValue: vt, domElement: xt }) : (0, e.warn)(`_getElementsByName - element not allowed: ${st}`);
            }
          return G;
        }
        for (const Q of document.getElementsByName(c)) {
          const { exportValue: et } = Q, st = Q.getAttribute("data-element-id");
          st !== A && f.has(Q) && G.push({ id: st, exportValue: et, domElement: Q });
        }
        return G;
      }
      show() {
        var c;
        this.container && (this.container.hidden = !1), (c = this.popup) == null || c.maybeShow();
      }
      hide() {
        var c;
        this.container && (this.container.hidden = !0), (c = this.popup) == null || c.forceHide();
      }
      getElementsToTriggerPopup() {
        return this.container;
      }
      addHighlightArea() {
        const c = this.getElementsToTriggerPopup();
        if (Array.isArray(c))
          for (const A of c)
            A.classList.add("highlightArea");
        else
          c.classList.add("highlightArea");
      }
      _editOnDoubleClick() {
        const { annotationEditorType: c, data: { id: A } } = this;
        this.container.addEventListener("dblclick", () => {
          var G;
          (G = this.linkService.eventBus) == null || G.dispatch("switchannotationeditormode", { source: this, mode: c, editId: A });
        });
      }
    };
    N = new WeakMap();
    let b = P;
    class _ extends b {
      constructor(A) {
        let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        super(A, { isRenderable: !0, ignoreBorder: !!(G != null && G.ignoreBorder), createQuadrilaterals: !0 });
        K(this, I);
        K(this, j);
        this.isTooltipOnly = A.data.isTooltipOnly;
      }
      render() {
        const { data: A, linkService: G } = this, Q = document.createElement("a");
        Q.setAttribute("data-element-id", A.id);
        let et = !1;
        return A.url ? (G.addLinkAttributes(Q, A.url, A.newWindow), et = !0) : A.action ? (this._bindNamedAction(Q, A.action), et = !0) : A.attachment ? (this._bindAttachment(Q, A.attachment), et = !0) : A.setOCGState ? (rt(this, j, Dr).call(this, Q, A.setOCGState), et = !0) : A.dest ? (this._bindLink(Q, A.dest), et = !0) : (A.actions && (A.actions.Action || A.actions["Mouse Up"] || A.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(Q, A), et = !0), A.resetForm ? (this._bindResetFormAction(Q, A.resetForm), et = !0) : this.isTooltipOnly && !et && (this._bindLink(Q, ""), et = !0)), this.container.classList.add("linkAnnotation"), et && this.container.append(Q), this.container;
      }
      _bindLink(A, G) {
        A.href = this.linkService.getDestinationHash(G), A.onclick = () => (G && this.linkService.goToDestination(G), !1), (G || G === "") && rt(this, I, le).call(this);
      }
      _bindNamedAction(A, G) {
        A.href = this.linkService.getAnchorUrl(""), A.onclick = () => (this.linkService.executeNamedAction(G), !1), rt(this, I, le).call(this);
      }
      _bindAttachment(A, G) {
        A.href = this.linkService.getAnchorUrl(""), A.onclick = () => {
          var Q;
          return (Q = this.downloadManager) == null || Q.openOrDownloadData(this.container, G.content, G.filename), !1;
        }, rt(this, I, le).call(this);
      }
      _bindJSAction(A, G) {
        A.href = this.linkService.getAnchorUrl("");
        const Q = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
        for (const et of Object.keys(G.actions)) {
          const st = Q.get(et);
          st && (A[st] = () => {
            var ct;
            return (ct = this.linkService.eventBus) == null || ct.dispatch("dispatcheventinsandbox", { source: this, detail: { id: G.id, name: et } }), !1;
          });
        }
        A.onclick || (A.onclick = () => !1), rt(this, I, le).call(this);
      }
      _bindResetFormAction(A, G) {
        const Q = A.onclick;
        Q || (A.href = this.linkService.getAnchorUrl("")), rt(this, I, le).call(this), this._fieldObjects ? A.onclick = () => {
          var Lt;
          Q == null || Q();
          const { fields: et, refs: st, include: ct } = G, vt = [];
          if (et.length !== 0 || st.length !== 0) {
            const Tt = new Set(st);
            for (const Mt of et) {
              const Dt = this._fieldObjects[Mt] || [];
              for (const { id: Ot } of Dt)
                Tt.add(Ot);
            }
            for (const Mt of Object.values(this._fieldObjects))
              for (const Dt of Mt)
                Tt.has(Dt.id) === ct && vt.push(Dt);
          } else
            for (const Tt of Object.values(this._fieldObjects))
              vt.push(...Tt);
          const xt = this.annotationStorage, At = [];
          for (const Tt of vt) {
            const { id: Mt } = Tt;
            switch (At.push(Mt), Tt.type) {
              case "text": {
                const Ot = Tt.defaultValue || "";
                xt.setValue(Mt, { value: Ot });
                break;
              }
              case "checkbox":
              case "radiobutton": {
                const Ot = Tt.defaultValue === Tt.exportValues;
                xt.setValue(Mt, { value: Ot });
                break;
              }
              case "combobox":
              case "listbox": {
                const Ot = Tt.defaultValue || "";
                xt.setValue(Mt, { value: Ot });
                break;
              }
              default:
                continue;
            }
            const Dt = document.querySelector(`[data-element-id="${Mt}"]`);
            Dt && (f.has(Dt) ? Dt.dispatchEvent(new Event("resetform")) : (0, e.warn)(`_bindResetFormAction - element not allowed: ${Mt}`));
          }
          return this.enableScripting && ((Lt = this.linkService.eventBus) == null || Lt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: "app", ids: At, name: "ResetForm" } })), !1;
        } : ((0, e.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), Q || (A.onclick = () => !1));
      }
    }
    I = new WeakSet(), le = function() {
      this.container.setAttribute("data-internal-link", "");
    }, j = new WeakSet(), Dr = function(A, G) {
      A.href = this.linkService.getAnchorUrl(""), A.onclick = () => (this.linkService.executeSetOCGState(G), !1), rt(this, I, le).call(this);
    };
    class M extends b {
      constructor(c) {
        super(c, { isRenderable: !0 });
      }
      render() {
        this.container.classList.add("textAnnotation");
        const c = document.createElement("img");
        return c.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", c.alt = "[{{type}} Annotation]", c.dataset.l10nId = "text_annotation_type", c.dataset.l10nArgs = JSON.stringify({ type: this.data.name }), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(c), this.container;
      }
    }
    class O extends b {
      render() {
        return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
      }
      showElementAndHideCanvas(c) {
        var A;
        this.data.hasOwnCanvas && (((A = c.previousSibling) == null ? void 0 : A.nodeName) === "CANVAS" && (c.previousSibling.hidden = !0), c.hidden = !1);
      }
      _getKeyModifier(c) {
        const { isWin: A, isMac: G } = e.FeatureTest.platform;
        return A && c.ctrlKey || G && c.metaKey;
      }
      _setEventListener(c, A, G, Q, et) {
        G.includes("mouse") ? c.addEventListener(G, (st) => {
          var ct;
          (ct = this.linkService.eventBus) == null || ct.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: Q, value: et(st), shift: st.shiftKey, modifier: this._getKeyModifier(st) } });
        }) : c.addEventListener(G, (st) => {
          var ct;
          if (G === "blur") {
            if (!A.focused || !st.relatedTarget)
              return;
            A.focused = !1;
          } else if (G === "focus") {
            if (A.focused)
              return;
            A.focused = !0;
          }
          et && ((ct = this.linkService.eventBus) == null || ct.dispatch("dispatcheventinsandbox", { source: this, detail: { id: this.data.id, name: Q, value: et(st) } }));
        });
      }
      _setEventListeners(c, A, G, Q) {
        var et, st, ct;
        for (const [vt, xt] of G)
          (xt === "Action" || (et = this.data.actions) != null && et[xt]) && (xt !== "Focus" && xt !== "Blur" || A || (A = { focused: !1 }), this._setEventListener(c, A, vt, xt, Q), xt !== "Focus" || (st = this.data.actions) != null && st.Blur ? xt !== "Blur" || (ct = this.data.actions) != null && ct.Focus || this._setEventListener(c, A, "focus", "Focus", null) : this._setEventListener(c, A, "blur", "Blur", null));
      }
      _setBackgroundColor(c) {
        const A = this.data.backgroundColor || null;
        c.style.backgroundColor = A === null ? "transparent" : e.Util.makeHexColor(A[0], A[1], A[2]);
      }
      _setTextStyle(c) {
        const A = ["left", "center", "right"], { fontColor: G } = this.data.defaultAppearanceData, Q = this.data.defaultAppearanceData.fontSize || 9, et = c.style;
        let st;
        const ct = (vt) => Math.round(10 * vt) / 10;
        if (this.data.multiLine) {
          const vt = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), xt = vt / (Math.round(vt / (e.LINE_FACTOR * Q)) || 1);
          st = Math.min(Q, ct(xt / e.LINE_FACTOR));
        } else {
          const vt = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
          st = Math.min(Q, ct(vt / e.LINE_FACTOR));
        }
        et.fontSize = `calc(${st}px * var(--scale-factor))`, et.color = e.Util.makeHexColor(G[0], G[1], G[2]), this.data.textAlignment !== null && (et.textAlign = A[this.data.textAlignment]);
      }
      _setRequired(c, A) {
        A ? c.setAttribute("required", !0) : c.removeAttribute("required"), c.setAttribute("aria-required", A);
      }
    }
    class W extends O {
      constructor(c) {
        super(c, { isRenderable: c.renderForms || !c.data.hasAppearance && !!c.data.fieldValue });
      }
      setPropertyOnSiblings(c, A, G, Q) {
        const et = this.annotationStorage;
        for (const st of this._getElementsByName(c.name, c.id))
          st.domElement && (st.domElement[A] = G), et.setValue(st.id, { [Q]: G });
      }
      render() {
        var Q, et;
        const c = this.annotationStorage, A = this.data.id;
        this.container.classList.add("textWidgetAnnotation");
        let G = null;
        if (this.renderForms) {
          const st = c.getValue(A, { value: this.data.fieldValue });
          let ct = st.value || "";
          const vt = c.getValue(A, { charLimit: this.data.maxLen }).charLimit;
          vt && ct.length > vt && (ct = ct.slice(0, vt));
          let xt = st.formattedValue || ((Q = this.data.textContent) == null ? void 0 : Q.join(`
`)) || null;
          xt && this.data.comb && (xt = xt.replaceAll(/\s+/g, ""));
          const At = { userValue: ct, formattedValue: xt, lastCommittedValue: null, commitKey: 1, focused: !1 };
          this.data.multiLine ? (G = document.createElement("textarea"), G.textContent = xt != null ? xt : ct, this.data.doNotScroll && (G.style.overflowY = "hidden")) : (G = document.createElement("input"), G.type = "text", G.setAttribute("value", xt != null ? xt : ct), this.data.doNotScroll && (G.style.overflowX = "hidden")), this.data.hasOwnCanvas && (G.hidden = !0), f.add(G), G.setAttribute("data-element-id", A), G.disabled = this.data.readOnly, G.name = this.data.fieldName, G.tabIndex = a, this._setRequired(G, this.data.required), vt && (G.maxLength = vt), G.addEventListener("input", (Tt) => {
            c.setValue(A, { value: Tt.target.value }), this.setPropertyOnSiblings(G, "value", Tt.target.value, "value"), At.formattedValue = null;
          }), G.addEventListener("resetform", (Tt) => {
            var Dt;
            const Mt = (Dt = this.data.defaultFieldValue) != null ? Dt : "";
            G.value = At.userValue = Mt, At.formattedValue = null;
          });
          let Lt = (Tt) => {
            const { formattedValue: Mt } = At;
            Mt != null && (Tt.target.value = Mt), Tt.target.scrollLeft = 0;
          };
          if (this.enableScripting && this.hasJSActions) {
            G.addEventListener("focus", (Mt) => {
              if (At.focused)
                return;
              const { target: Dt } = Mt;
              At.userValue && (Dt.value = At.userValue), At.lastCommittedValue = Dt.value, At.commitKey = 1, At.focused = !0;
            }), G.addEventListener("updatefromsandbox", (Mt) => {
              this.showElementAndHideCanvas(Mt.target);
              const Dt = { value(Ot) {
                var Wt;
                At.userValue = (Wt = Ot.detail.value) != null ? Wt : "", c.setValue(A, { value: At.userValue.toString() }), Ot.target.value = At.userValue;
              }, formattedValue(Ot) {
                const { formattedValue: Wt } = Ot.detail;
                At.formattedValue = Wt, Wt != null && Ot.target !== document.activeElement && (Ot.target.value = Wt), c.setValue(A, { formattedValue: Wt });
              }, selRange(Ot) {
                Ot.target.setSelectionRange(...Ot.detail.selRange);
              }, charLimit: (Ot) => {
                var re;
                const { charLimit: Wt } = Ot.detail, { target: Ht } = Ot;
                if (Wt === 0) {
                  Ht.removeAttribute("maxLength");
                  return;
                }
                Ht.setAttribute("maxLength", Wt);
                let Xt = At.userValue;
                Xt && !(Xt.length <= Wt) && (Xt = Xt.slice(0, Wt), Ht.value = At.userValue = Xt, c.setValue(A, { value: Xt }), (re = this.linkService.eventBus) == null || re.dispatch("dispatcheventinsandbox", { source: this, detail: { id: A, name: "Keystroke", value: Xt, willCommit: !0, commitKey: 1, selStart: Ht.selectionStart, selEnd: Ht.selectionEnd } }));
              } };
              this._dispatchEventFromSandbox(Dt, Mt);
            }), G.addEventListener("keydown", (Mt) => {
              var Wt;
              At.commitKey = 1;
              let Dt = -1;
              if (Mt.key === "Escape" ? Dt = 0 : Mt.key !== "Enter" || this.data.multiLine ? Mt.key === "Tab" && (At.commitKey = 3) : Dt = 2, Dt === -1)
                return;
              const { value: Ot } = Mt.target;
              At.lastCommittedValue !== Ot && (At.lastCommittedValue = Ot, At.userValue = Ot, (Wt = this.linkService.eventBus) == null || Wt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: A, name: "Keystroke", value: Ot, willCommit: !0, commitKey: Dt, selStart: Mt.target.selectionStart, selEnd: Mt.target.selectionEnd } }));
            });
            const Tt = Lt;
            Lt = null, G.addEventListener("blur", (Mt) => {
              var Ot;
              if (!At.focused || !Mt.relatedTarget)
                return;
              At.focused = !1;
              const { value: Dt } = Mt.target;
              At.userValue = Dt, At.lastCommittedValue !== Dt && ((Ot = this.linkService.eventBus) == null || Ot.dispatch("dispatcheventinsandbox", { source: this, detail: { id: A, name: "Keystroke", value: Dt, willCommit: !0, commitKey: At.commitKey, selStart: Mt.target.selectionStart, selEnd: Mt.target.selectionEnd } })), Tt(Mt);
            }), (et = this.data.actions) != null && et.Keystroke && G.addEventListener("beforeinput", (Mt) => {
              var ae;
              At.lastCommittedValue = null;
              const { data: Dt, target: Ot } = Mt, { value: Wt, selectionStart: Ht, selectionEnd: Xt } = Ot;
              let re = Ht, ie = Xt;
              switch (Mt.inputType) {
                case "deleteWordBackward": {
                  const oe = Wt.substring(0, Ht).match(/\w*[^\w]*$/);
                  oe && (re -= oe[0].length);
                  break;
                }
                case "deleteWordForward": {
                  const oe = Wt.substring(Ht).match(/^[^\w]*\w*/);
                  oe && (ie += oe[0].length);
                  break;
                }
                case "deleteContentBackward":
                  Ht === Xt && (re -= 1);
                  break;
                case "deleteContentForward":
                  Ht === Xt && (ie += 1);
              }
              Mt.preventDefault(), (ae = this.linkService.eventBus) == null || ae.dispatch("dispatcheventinsandbox", { source: this, detail: { id: A, name: "Keystroke", value: Wt, change: Dt || "", willCommit: !1, selStart: re, selEnd: ie } });
            }), this._setEventListeners(G, At, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (Mt) => Mt.target.value);
          }
          if (Lt && G.addEventListener("blur", Lt), this.data.comb) {
            const Tt = (this.data.rect[2] - this.data.rect[0]) / vt;
            G.classList.add("comb"), G.style.letterSpacing = `calc(${Tt}px * var(--scale-factor) - 1ch)`;
          }
        } else
          G = document.createElement("div"), G.textContent = this.data.fieldValue, G.style.verticalAlign = "middle", G.style.display = "table-cell";
        return this._setTextStyle(G), this._setBackgroundColor(G), this._setDefaultPropertiesFromJS(G), this.container.append(G), this.container;
      }
    }
    class w extends O {
      constructor(c) {
        super(c, { isRenderable: !!c.data.hasOwnCanvas });
      }
    }
    class n extends O {
      constructor(c) {
        super(c, { isRenderable: c.renderForms });
      }
      render() {
        const c = this.annotationStorage, A = this.data, G = A.id;
        let Q = c.getValue(G, { value: A.exportValue === A.fieldValue }).value;
        typeof Q == "string" && (Q = Q !== "Off", c.setValue(G, { value: Q })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
        const et = document.createElement("input");
        return f.add(et), et.setAttribute("data-element-id", G), et.disabled = A.readOnly, this._setRequired(et, this.data.required), et.type = "checkbox", et.name = A.fieldName, Q && et.setAttribute("checked", !0), et.setAttribute("exportValue", A.exportValue), et.tabIndex = a, et.addEventListener("change", (st) => {
          const { name: ct, checked: vt } = st.target;
          for (const xt of this._getElementsByName(ct, G)) {
            const At = vt && xt.exportValue === A.exportValue;
            xt.domElement && (xt.domElement.checked = At), c.setValue(xt.id, { value: At });
          }
          c.setValue(G, { value: vt });
        }), et.addEventListener("resetform", (st) => {
          const ct = A.defaultFieldValue || "Off";
          st.target.checked = ct === A.exportValue;
        }), this.enableScripting && this.hasJSActions && (et.addEventListener("updatefromsandbox", (st) => {
          const ct = { value(vt) {
            vt.target.checked = vt.detail.value !== "Off", c.setValue(G, { value: vt.target.checked });
          } };
          this._dispatchEventFromSandbox(ct, st);
        }), this._setEventListeners(et, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (st) => st.target.checked)), this._setBackgroundColor(et), this._setDefaultPropertiesFromJS(et), this.container.append(et), this.container;
      }
    }
    class i extends O {
      constructor(c) {
        super(c, { isRenderable: c.renderForms });
      }
      render() {
        this.container.classList.add("buttonWidgetAnnotation", "radioButton");
        const c = this.annotationStorage, A = this.data, G = A.id;
        let Q = c.getValue(G, { value: A.fieldValue === A.buttonValue }).value;
        typeof Q == "string" && (Q = Q !== A.buttonValue, c.setValue(G, { value: Q }));
        const et = document.createElement("input");
        if (f.add(et), et.setAttribute("data-element-id", G), et.disabled = A.readOnly, this._setRequired(et, this.data.required), et.type = "radio", et.name = A.fieldName, Q && et.setAttribute("checked", !0), et.tabIndex = a, et.addEventListener("change", (st) => {
          const { name: ct, checked: vt } = st.target;
          for (const xt of this._getElementsByName(ct, G))
            c.setValue(xt.id, { value: !1 });
          c.setValue(G, { value: vt });
        }), et.addEventListener("resetform", (st) => {
          const ct = A.defaultFieldValue;
          st.target.checked = ct != null && ct === A.buttonValue;
        }), this.enableScripting && this.hasJSActions) {
          const st = A.buttonValue;
          et.addEventListener("updatefromsandbox", (ct) => {
            const vt = { value: (xt) => {
              const At = st === xt.detail.value;
              for (const Lt of this._getElementsByName(xt.target.name)) {
                const Tt = At && Lt.id === G;
                Lt.domElement && (Lt.domElement.checked = Tt), c.setValue(Lt.id, { value: Tt });
              }
            } };
            this._dispatchEventFromSandbox(vt, ct);
          }), this._setEventListeners(et, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (ct) => ct.target.checked);
        }
        return this._setBackgroundColor(et), this._setDefaultPropertiesFromJS(et), this.container.append(et), this.container;
      }
    }
    class p extends _ {
      constructor(c) {
        super(c, { ignoreBorder: c.data.hasAppearance });
      }
      render() {
        const c = super.render();
        c.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (c.title = this.data.alternativeText);
        const A = c.lastChild;
        return this.enableScripting && this.hasJSActions && A && (this._setDefaultPropertiesFromJS(A), A.addEventListener("updatefromsandbox", (G) => {
          this._dispatchEventFromSandbox({}, G);
        })), c;
      }
    }
    class T extends O {
      constructor(c) {
        super(c, { isRenderable: c.renderForms });
      }
      render() {
        this.container.classList.add("choiceWidgetAnnotation");
        const c = this.annotationStorage, A = this.data.id, G = c.getValue(A, { value: this.data.fieldValue }), Q = document.createElement("select");
        f.add(Q), Q.setAttribute("data-element-id", A), Q.disabled = this.data.readOnly, this._setRequired(Q, this.data.required), Q.name = this.data.fieldName, Q.tabIndex = a;
        let et = this.data.combo && this.data.options.length > 0;
        this.data.combo || (Q.size = this.data.options.length, this.data.multiSelect && (Q.multiple = !0)), Q.addEventListener("resetform", (At) => {
          const Lt = this.data.defaultFieldValue;
          for (const Tt of Q.options)
            Tt.selected = Tt.value === Lt;
        });
        for (const At of this.data.options) {
          const Lt = document.createElement("option");
          Lt.textContent = At.displayValue, Lt.value = At.exportValue, G.value.includes(At.exportValue) && (Lt.setAttribute("selected", !0), et = !1), Q.append(Lt);
        }
        let st = null;
        if (et) {
          const At = document.createElement("option");
          At.value = " ", At.setAttribute("hidden", !0), At.setAttribute("selected", !0), Q.prepend(At), st = () => {
            At.remove(), Q.removeEventListener("input", st), st = null;
          }, Q.addEventListener("input", st);
        }
        const ct = (At) => {
          const Lt = At ? "value" : "textContent", { options: Tt, multiple: Mt } = Q;
          return Mt ? Array.prototype.filter.call(Tt, (Dt) => Dt.selected).map((Dt) => Dt[Lt]) : Tt.selectedIndex === -1 ? null : Tt[Tt.selectedIndex][Lt];
        };
        let vt = ct(!1);
        const xt = (At) => {
          const Lt = At.target.options;
          return Array.prototype.map.call(Lt, (Tt) => ({ displayValue: Tt.textContent, exportValue: Tt.value }));
        };
        return this.enableScripting && this.hasJSActions ? (Q.addEventListener("updatefromsandbox", (At) => {
          const Lt = { value(Tt) {
            st == null || st();
            const Mt = Tt.detail.value, Dt = new Set(Array.isArray(Mt) ? Mt : [Mt]);
            for (const Ot of Q.options)
              Ot.selected = Dt.has(Ot.value);
            c.setValue(A, { value: ct(!0) }), vt = ct(!1);
          }, multipleSelection(Tt) {
            Q.multiple = !0;
          }, remove(Tt) {
            const Mt = Q.options, Dt = Tt.detail.remove;
            Mt[Dt].selected = !1, Q.remove(Dt), Mt.length > 0 && Array.prototype.findIndex.call(Mt, (Ot) => Ot.selected) === -1 && (Mt[0].selected = !0), c.setValue(A, { value: ct(!0), items: xt(Tt) }), vt = ct(!1);
          }, clear(Tt) {
            for (; Q.length !== 0; )
              Q.remove(0);
            c.setValue(A, { value: null, items: [] }), vt = ct(!1);
          }, insert(Tt) {
            const { index: Mt, displayValue: Dt, exportValue: Ot } = Tt.detail.insert, Wt = Q.children[Mt], Ht = document.createElement("option");
            Ht.textContent = Dt, Ht.value = Ot, Wt ? Wt.before(Ht) : Q.append(Ht), c.setValue(A, { value: ct(!0), items: xt(Tt) }), vt = ct(!1);
          }, items(Tt) {
            const { items: Mt } = Tt.detail;
            for (; Q.length !== 0; )
              Q.remove(0);
            for (const Dt of Mt) {
              const { displayValue: Ot, exportValue: Wt } = Dt, Ht = document.createElement("option");
              Ht.textContent = Ot, Ht.value = Wt, Q.append(Ht);
            }
            Q.options.length > 0 && (Q.options[0].selected = !0), c.setValue(A, { value: ct(!0), items: xt(Tt) }), vt = ct(!1);
          }, indices(Tt) {
            const Mt = new Set(Tt.detail.indices);
            for (const Dt of Tt.target.options)
              Dt.selected = Mt.has(Dt.index);
            c.setValue(A, { value: ct(!0) }), vt = ct(!1);
          }, editable(Tt) {
            Tt.target.disabled = !Tt.detail.editable;
          } };
          this._dispatchEventFromSandbox(Lt, At);
        }), Q.addEventListener("input", (At) => {
          var Tt;
          const Lt = ct(!0);
          c.setValue(A, { value: Lt }), At.preventDefault(), (Tt = this.linkService.eventBus) == null || Tt.dispatch("dispatcheventinsandbox", { source: this, detail: { id: A, name: "Keystroke", value: vt, changeEx: Lt, willCommit: !1, commitKey: 1, keyDown: !1 } });
        }), this._setEventListeners(Q, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (At) => At.target.value)) : Q.addEventListener("input", function(At) {
          c.setValue(A, { value: ct(!0) });
        }), this.data.combo && this._setTextStyle(Q), this._setBackgroundColor(Q), this._setDefaultPropertiesFromJS(Q), this.container.append(Q), this.container;
      }
    }
    class R extends b {
      constructor(c) {
        const { data: A, elements: G } = c;
        super(c, { isRenderable: b._hasPopupData(A) }), this.elements = G;
      }
      render() {
        this.container.classList.add("popupAnnotation");
        const c = new k({ container: this.container, color: this.data.color, titleObj: this.data.titleObj, modificationDate: this.data.modificationDate, contentsObj: this.data.contentsObj, richText: this.data.richText, rect: this.data.rect, parentRect: this.data.parentRect || null, parent: this.parent, elements: this.elements, open: this.data.open }), A = [];
        for (const G of this.elements)
          G.popup = c, A.push(G.data.id), G.addHighlightArea();
        return this.container.setAttribute("aria-controls", A.map((G) => `${e.AnnotationPrefix}${G}`).join(",")), this.container;
      }
    }
    class k {
      constructor(c) {
        K(this, Bt);
        K(this, te);
        K(this, ee);
        K(this, Zt);
        K(this, H, null);
        K(this, Y, rt(this, Bt, Ir).bind(this));
        K(this, X, rt(this, Zt, ar).bind(this));
        K(this, tt, rt(this, ee, nr).bind(this));
        K(this, nt, rt(this, te, ke).bind(this));
        K(this, lt, null);
        K(this, ht, null);
        K(this, gt, null);
        K(this, St, null);
        K(this, ft, null);
        K(this, bt, null);
        K(this, wt, !1);
        K(this, yt, null);
        K(this, Et, null);
        K(this, Ft, null);
        K(this, It, null);
        K(this, Nt, !1);
        var Dt;
        let { container: A, color: G, elements: Q, titleObj: et, modificationDate: st, contentsObj: ct, richText: vt, parent: xt, rect: At, parentRect: Lt, open: Tt } = c;
        at(this, ht, A), at(this, It, et), at(this, gt, ct), at(this, Ft, vt), at(this, ft, xt), at(this, lt, G), at(this, Et, At), at(this, bt, Lt), at(this, St, Q);
        const Mt = r.PDFDateString.toDateObject(st);
        Mt && at(this, H, xt.l10n.get("annotation_date_string", { date: Mt.toLocaleDateString(), time: Mt.toLocaleTimeString() })), this.trigger = Q.flatMap((Ot) => Ot.getElementsToTriggerPopup());
        for (const Ot of this.trigger)
          Ot.addEventListener("click", s(this, nt)), Ot.addEventListener("mouseenter", s(this, tt)), Ot.addEventListener("mouseleave", s(this, X)), Ot.classList.add("popupTriggerArea");
        for (const Ot of Q)
          (Dt = Ot.container) == null || Dt.addEventListener("keydown", s(this, Y));
        s(this, ht).hidden = !0, Tt && rt(this, te, ke).call(this);
      }
      render() {
        if (s(this, yt))
          return;
        const { page: { view: c }, viewport: { rawDims: { pageWidth: A, pageHeight: G, pageX: Q, pageY: et } } } = s(this, ft), st = at(this, yt, document.createElement("div"));
        if (st.className = "popup", s(this, lt)) {
          const Xt = st.style.outlineColor = e.Util.makeHexColor(...s(this, lt));
          CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? st.style.backgroundColor = `color-mix(in srgb, ${Xt} 30%, white)` : st.style.backgroundColor = e.Util.makeHexColor(...s(this, lt).map((ie) => Math.floor(0.7 * (255 - ie) + ie)));
        }
        const ct = document.createElement("span");
        ct.className = "header";
        const vt = document.createElement("h1");
        if (ct.append(vt), { dir: vt.dir, str: vt.textContent } = s(this, It), st.append(ct), s(this, H)) {
          const Xt = document.createElement("span");
          Xt.classList.add("popupDate"), s(this, H).then((re) => {
            Xt.textContent = re;
          }), ct.append(Xt);
        }
        const xt = s(this, gt), At = s(this, Ft);
        if (!(At != null && At.str) || xt != null && xt.str && xt.str !== At.str) {
          const Xt = this._formatContents(xt);
          st.append(Xt);
        } else
          h.XfaLayer.render({ xfaHtml: At.html, intent: "richText", div: st }), st.lastChild.classList.add("richText", "popupContent");
        let Lt = !!s(this, bt), Tt = Lt ? s(this, bt) : s(this, Et);
        for (const Xt of s(this, St))
          if (!Tt || e.Util.intersect(Xt.data.rect, Tt) !== null) {
            Tt = Xt.data.rect, Lt = !0;
            break;
          }
        const Mt = e.Util.normalizeRect([Tt[0], c[3] - Tt[1] + c[1], Tt[2], c[3] - Tt[3] + c[1]]), Dt = Lt ? Tt[2] - Tt[0] + 5 : 0, Ot = Mt[0] + Dt, Wt = Mt[1], { style: Ht } = s(this, ht);
        Ht.left = 100 * (Ot - Q) / A + "%", Ht.top = 100 * (Wt - et) / G + "%", s(this, ht).append(st);
      }
      _formatContents(c) {
        let { str: A, dir: G } = c;
        const Q = document.createElement("p");
        Q.classList.add("popupContent"), Q.dir = G;
        const et = A.split(/(?:\r\n?|\n)/);
        for (let st = 0, ct = et.length; st < ct; ++st) {
          const vt = et[st];
          Q.append(document.createTextNode(vt)), st < ct - 1 && Q.append(document.createElement("br"));
        }
        return Q;
      }
      forceHide() {
        at(this, Nt, this.isVisible), s(this, Nt) && (s(this, ht).hidden = !0);
      }
      maybeShow() {
        s(this, Nt) && (at(this, Nt, !1), s(this, ht).hidden = !1);
      }
      get isVisible() {
        return s(this, ht).hidden === !1;
      }
    }
    H = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), tt = new WeakMap(), nt = new WeakMap(), lt = new WeakMap(), ht = new WeakMap(), gt = new WeakMap(), St = new WeakMap(), ft = new WeakMap(), bt = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), Et = new WeakMap(), Ft = new WeakMap(), It = new WeakMap(), Nt = new WeakMap(), Bt = new WeakSet(), Ir = function(c) {
      c.altKey || c.shiftKey || c.ctrlKey || c.metaKey || (c.key === "Enter" || c.key === "Escape" && s(this, wt)) && rt(this, te, ke).call(this);
    }, te = new WeakSet(), ke = function() {
      at(this, wt, !s(this, wt)), s(this, wt) ? (rt(this, ee, nr).call(this), s(this, ht).addEventListener("click", s(this, nt)), s(this, ht).addEventListener("keydown", s(this, Y))) : (rt(this, Zt, ar).call(this), s(this, ht).removeEventListener("click", s(this, nt)), s(this, ht).removeEventListener("keydown", s(this, Y)));
    }, ee = new WeakSet(), nr = function() {
      s(this, yt) || this.render(), this.isVisible ? s(this, wt) && s(this, ht).classList.add("focused") : (s(this, ht).hidden = !1, s(this, ht).style.zIndex = parseInt(s(this, ht).style.zIndex) + 1e3);
    }, Zt = new WeakSet(), ar = function() {
      s(this, ht).classList.remove("focused"), !s(this, wt) && this.isVisible && (s(this, ht).hidden = !0, s(this, ht).style.zIndex = parseInt(s(this, ht).style.zIndex) - 1e3);
    };
    class d extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0 }), this.textContent = c.data.textContent, this.textPosition = c.data.textPosition, this.annotationEditorType = e.AnnotationEditorType.FREETEXT;
      }
      render() {
        if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
          const c = document.createElement("div");
          c.classList.add("annotationTextContent"), c.setAttribute("role", "comment");
          for (const A of this.textContent) {
            const G = document.createElement("span");
            G.textContent = A, c.append(G);
          }
          this.container.append(c);
        }
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
      }
    }
    o.FreeTextAnnotationElement = d;
    class L extends b {
      constructor(A) {
        super(A, { isRenderable: !0, ignoreBorder: !0 });
        K(this, Qt, null);
      }
      render() {
        this.container.classList.add("lineAnnotation");
        const A = this.data, { width: G, height: Q } = g(A.rect), et = this.svgFactory.create(G, Q, !0), st = at(this, Qt, this.svgFactory.createElement("svg:line"));
        return st.setAttribute("x1", A.rect[2] - A.lineCoordinates[0]), st.setAttribute("y1", A.rect[3] - A.lineCoordinates[1]), st.setAttribute("x2", A.rect[2] - A.lineCoordinates[2]), st.setAttribute("y2", A.rect[3] - A.lineCoordinates[3]), st.setAttribute("stroke-width", A.borderStyle.width || 1), st.setAttribute("stroke", "transparent"), st.setAttribute("fill", "transparent"), et.append(st), this.container.append(et), !A.popupRef && this.hasPopupData && this._createPopup(), this.container;
      }
      getElementsToTriggerPopup() {
        return s(this, Qt);
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    Qt = new WeakMap();
    class F extends b {
      constructor(A) {
        super(A, { isRenderable: !0, ignoreBorder: !0 });
        K(this, zt, null);
      }
      render() {
        this.container.classList.add("squareAnnotation");
        const A = this.data, { width: G, height: Q } = g(A.rect), et = this.svgFactory.create(G, Q, !0), st = A.borderStyle.width, ct = at(this, zt, this.svgFactory.createElement("svg:rect"));
        return ct.setAttribute("x", st / 2), ct.setAttribute("y", st / 2), ct.setAttribute("width", G - st), ct.setAttribute("height", Q - st), ct.setAttribute("stroke-width", st || 1), ct.setAttribute("stroke", "transparent"), ct.setAttribute("fill", "transparent"), et.append(ct), this.container.append(et), !A.popupRef && this.hasPopupData && this._createPopup(), this.container;
      }
      getElementsToTriggerPopup() {
        return s(this, zt);
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    zt = new WeakMap();
    class V extends b {
      constructor(A) {
        super(A, { isRenderable: !0, ignoreBorder: !0 });
        K(this, Jt, null);
      }
      render() {
        this.container.classList.add("circleAnnotation");
        const A = this.data, { width: G, height: Q } = g(A.rect), et = this.svgFactory.create(G, Q, !0), st = A.borderStyle.width, ct = at(this, Jt, this.svgFactory.createElement("svg:ellipse"));
        return ct.setAttribute("cx", G / 2), ct.setAttribute("cy", Q / 2), ct.setAttribute("rx", G / 2 - st / 2), ct.setAttribute("ry", Q / 2 - st / 2), ct.setAttribute("stroke-width", st || 1), ct.setAttribute("stroke", "transparent"), ct.setAttribute("fill", "transparent"), et.append(ct), this.container.append(et), !A.popupRef && this.hasPopupData && this._createPopup(), this.container;
      }
      getElementsToTriggerPopup() {
        return s(this, Jt);
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    Jt = new WeakMap();
    class Z extends b {
      constructor(A) {
        super(A, { isRenderable: !0, ignoreBorder: !0 });
        K(this, qt, null);
        this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
      }
      render() {
        this.container.classList.add(this.containerClassName);
        const A = this.data, { width: G, height: Q } = g(A.rect), et = this.svgFactory.create(G, Q, !0);
        let st = [];
        for (const vt of A.vertices) {
          const xt = vt.x - A.rect[0], At = A.rect[3] - vt.y;
          st.push(xt + "," + At);
        }
        st = st.join(" ");
        const ct = at(this, qt, this.svgFactory.createElement(this.svgElementName));
        return ct.setAttribute("points", st), ct.setAttribute("stroke-width", A.borderStyle.width || 1), ct.setAttribute("stroke", "transparent"), ct.setAttribute("fill", "transparent"), et.append(ct), this.container.append(et), !A.popupRef && this.hasPopupData && this._createPopup(), this.container;
      }
      getElementsToTriggerPopup() {
        return s(this, qt);
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    qt = new WeakMap();
    class B extends Z {
      constructor(c) {
        super(c), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
      }
    }
    class U extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0 });
      }
      render() {
        return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
      }
    }
    class u extends b {
      constructor(A) {
        super(A, { isRenderable: !0, ignoreBorder: !0 });
        K(this, dt, []);
        this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = e.AnnotationEditorType.INK;
      }
      render() {
        this.container.classList.add(this.containerClassName);
        const A = this.data, { width: G, height: Q } = g(A.rect), et = this.svgFactory.create(G, Q, !0);
        for (const st of A.inkLists) {
          let ct = [];
          for (const xt of st) {
            const At = xt.x - A.rect[0], Lt = A.rect[3] - xt.y;
            ct.push(`${At},${Lt}`);
          }
          ct = ct.join(" ");
          const vt = this.svgFactory.createElement(this.svgElementName);
          s(this, dt).push(vt), vt.setAttribute("points", ct), vt.setAttribute("stroke-width", A.borderStyle.width || 1), vt.setAttribute("stroke", "transparent"), vt.setAttribute("fill", "transparent"), !A.popupRef && this.hasPopupData && this._createPopup(), et.append(vt);
        }
        return this.container.append(et), this.container;
      }
      getElementsToTriggerPopup() {
        return s(this, dt);
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    dt = new WeakMap(), o.InkAnnotationElement = u;
    class v extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
      }
      render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
      }
    }
    class S extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
      }
      render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
      }
    }
    class D extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
      }
      render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
      }
    }
    class q extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
      }
      render() {
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
      }
    }
    class J extends b {
      constructor(c) {
        super(c, { isRenderable: !0, ignoreBorder: !0 });
      }
      render() {
        return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
      }
    }
    o.StampAnnotationElement = J;
    class z extends b {
      constructor(A) {
        var et;
        super(A, { isRenderable: !0 });
        K(this, Rt);
        K(this, pt, null);
        const { filename: G, content: Q } = this.data.file;
        this.filename = (0, r.getFilenameFromUrl)(G, !0), this.content = Q, (et = this.linkService.eventBus) == null || et.dispatch("fileattachmentannotation", { source: this, filename: G, content: Q });
      }
      render() {
        this.container.classList.add("fileAttachmentAnnotation");
        const { container: A, data: G } = this;
        let Q;
        G.hasAppearance || G.fillAlpha === 0 ? Q = document.createElement("div") : (Q = document.createElement("img"), Q.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(G.name) ? "paperclip" : "pushpin"}.svg`, G.fillAlpha && G.fillAlpha < 1 && (Q.style = `filter: opacity(${Math.round(100 * G.fillAlpha)}%);`)), Q.addEventListener("dblclick", rt(this, Rt, or).bind(this)), at(this, pt, Q);
        const { isMac: et } = e.FeatureTest.platform;
        return A.addEventListener("keydown", (st) => {
          st.key === "Enter" && (et ? st.metaKey : st.ctrlKey) && rt(this, Rt, or).call(this);
        }), !G.popupRef && this.hasPopupData ? this._createPopup() : Q.classList.add("popupTriggerArea"), A.append(Q), A;
      }
      getElementsToTriggerPopup() {
        return s(this, pt);
      }
      addHighlightArea() {
        this.container.classList.add("highlightArea");
      }
    }
    pt = new WeakMap(), Rt = new WeakSet(), or = function() {
      var A;
      (A = this.downloadManager) == null || A.openOrDownloadData(this.container, this.content, this.filename);
    }, o.AnnotationLayer = (ut = class {
      constructor(c) {
        K(this, _t);
        K(this, Pt);
        K(this, it, null);
        K(this, ot, null);
        K(this, Ct, /* @__PURE__ */ new Map());
        let { div: A, accessibilityManager: G, annotationCanvasMap: Q, l10n: et, page: st, viewport: ct } = c;
        this.div = A, at(this, it, G), at(this, ot, Q), this.l10n = et, this.page = st, this.viewport = ct, this.zIndex = 0, this.l10n || (this.l10n = y.NullL10n);
      }
      async render(c) {
        const { annotations: A } = c, G = this.div;
        (0, r.setLayerDimensions)(G, this.viewport);
        const Q = /* @__PURE__ */ new Map(), et = { data: null, layer: G, linkService: c.linkService, downloadManager: c.downloadManager, imageResourcesPath: c.imageResourcesPath || "", renderForms: c.renderForms !== !1, svgFactory: new r.DOMSVGFactory(), annotationStorage: c.annotationStorage || new l.AnnotationStorage(), enableScripting: c.enableScripting === !0, hasJSActions: c.hasJSActions, fieldObjects: c.fieldObjects, parent: this, elements: null };
        for (const st of A) {
          if (st.noHTML)
            continue;
          const ct = st.annotationType === e.AnnotationType.POPUP;
          if (ct) {
            const At = Q.get(st.id);
            if (!At)
              continue;
            et.elements = At;
          } else {
            const { width: At, height: Lt } = g(st.rect);
            if (At <= 0 || Lt <= 0)
              continue;
          }
          et.data = st;
          const vt = x.create(et);
          if (!vt.isRenderable)
            continue;
          if (!ct && st.popupRef) {
            const At = Q.get(st.popupRef);
            At ? At.push(vt) : Q.set(st.popupRef, [vt]);
          }
          vt.annotationEditorType > 0 && s(this, Ct).set(vt.data.id, vt);
          const xt = vt.render();
          st.hidden && (xt.style.visibility = "hidden"), rt(this, _t, Or).call(this, xt, st.id);
        }
        rt(this, Pt, lr).call(this), await this.l10n.translate(G);
      }
      update(c) {
        let { viewport: A } = c;
        const G = this.div;
        this.viewport = A, (0, r.setLayerDimensions)(G, { rotation: A.rotation }), rt(this, Pt, lr).call(this), G.hidden = !1;
      }
      getEditableAnnotations() {
        return Array.from(s(this, Ct).values());
      }
      getEditableAnnotation(c) {
        return s(this, Ct).get(c);
      }
    }, it = new WeakMap(), ot = new WeakMap(), Ct = new WeakMap(), _t = new WeakSet(), Or = function(c, A) {
      var Q;
      const G = c.firstChild || c;
      G.id = `${e.AnnotationPrefix}${A}`, this.div.append(c), (Q = s(this, it)) == null || Q.moveElementInDOM(this.div, c, G, !1);
    }, Pt = new WeakSet(), lr = function() {
      if (!s(this, ot))
        return;
      const c = this.div;
      for (const [A, G] of s(this, ot)) {
        const Q = c.querySelector(`[data-annotation-id="${A}"]`);
        if (!Q)
          continue;
        const { firstChild: et } = Q;
        et ? et.nodeName === "CANVAS" ? et.replaceWith(G) : et.before(G) : Q.append(G);
      }
      s(this, ot).clear();
    }, ut);
  }, (C, o) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.ColorConverters = void 0;
    function t(r) {
      return Math.floor(255 * Math.max(0, Math.min(1, r))).toString(16).padStart(2, "0");
    }
    function e(r) {
      return Math.max(0, Math.min(255, 255 * r));
    }
    o.ColorConverters = class {
      static CMYK_G(l) {
        let [m, y, h, a] = l;
        return ["G", 1 - Math.min(1, 0.3 * m + 0.59 * h + 0.11 * y + a)];
      }
      static G_CMYK(l) {
        let [m] = l;
        return ["CMYK", 0, 0, 0, 1 - m];
      }
      static G_RGB(l) {
        let [m] = l;
        return ["RGB", m, m, m];
      }
      static G_rgb(l) {
        let [m] = l;
        return m = e(m), [m, m, m];
      }
      static G_HTML(l) {
        let [m] = l;
        const y = t(m);
        return `#${y}${y}${y}`;
      }
      static RGB_G(l) {
        let [m, y, h] = l;
        return ["G", 0.3 * m + 0.59 * y + 0.11 * h];
      }
      static RGB_rgb(l) {
        return l.map(e);
      }
      static RGB_HTML(l) {
        return `#${l.map(t).join("")}`;
      }
      static T_HTML() {
        return "#00000000";
      }
      static T_rgb() {
        return [null];
      }
      static CMYK_RGB(l) {
        let [m, y, h, a] = l;
        return ["RGB", 1 - Math.min(1, m + a), 1 - Math.min(1, h + a), 1 - Math.min(1, y + a)];
      }
      static CMYK_rgb(l) {
        let [m, y, h, a] = l;
        return [e(1 - Math.min(1, m + a)), e(1 - Math.min(1, h + a)), e(1 - Math.min(1, y + a))];
      }
      static CMYK_HTML(l) {
        const m = this.CMYK_RGB(l).slice(1);
        return this.RGB_HTML(m);
      }
      static RGB_CMYK(l) {
        let [m, y, h] = l;
        const a = 1 - m, f = 1 - y, g = 1 - h;
        return ["CMYK", a, f, g, Math.min(a, f, g)];
      }
    };
  }, (C, o) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.NullL10n = void 0, o.getL10nFallback = e;
    const t = { of_pages: "of {{pagesCount}}", page_of_pages: "({{pageNumber}} of {{pagesCount}})", document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)", document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)", document_properties_date_string: "{{date}}, {{time}}", document_properties_page_size_unit_inches: "in", document_properties_page_size_unit_millimeters: "mm", document_properties_page_size_orientation_portrait: "portrait", document_properties_page_size_orientation_landscape: "landscape", document_properties_page_size_name_a3: "A3", document_properties_page_size_name_a4: "A4", document_properties_page_size_name_letter: "Letter", document_properties_page_size_name_legal: "Legal", document_properties_page_size_dimension_string: "{{width}} \xD7 {{height}} {{unit}} ({{orientation}})", document_properties_page_size_dimension_name_string: "{{width}} \xD7 {{height}} {{unit}} ({{name}}, {{orientation}})", document_properties_linearized_yes: "Yes", document_properties_linearized_no: "No", additional_layers: "Additional Layers", page_landmark: "Page {{page}}", thumb_page_title: "Page {{page}}", thumb_page_canvas: "Thumbnail of Page {{page}}", find_reached_top: "Reached top of document, continued from bottom", find_reached_bottom: "Reached end of document, continued from top", "find_match_count[one]": "{{current}} of {{total}} match", "find_match_count[other]": "{{current}} of {{total}} matches", "find_match_count_limit[one]": "More than {{limit}} match", "find_match_count_limit[other]": "More than {{limit}} matches", find_not_found: "Phrase not found", page_scale_width: "Page Width", page_scale_fit: "Page Fit", page_scale_auto: "Automatic Zoom", page_scale_actual: "Actual Size", page_scale_percent: "{{scale}}%", loading_error: "An error occurred while loading the PDF.", invalid_file_error: "Invalid or corrupted PDF file.", missing_file_error: "Missing PDF file.", unexpected_response_error: "Unexpected server response.", rendering_error: "An error occurred while rendering the page.", annotation_date_string: "{{date}}, {{time}}", printing_not_supported: "Warning: Printing is not fully supported by this browser.", printing_not_ready: "Warning: The PDF is not fully loaded for printing.", web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.", free_text2_default_content: "Start typing\u2026", editor_free_text2_aria_label: "Text Editor", editor_ink2_aria_label: "Draw Editor", editor_ink_canvas_aria_label: "User-created image", editor_alt_text_button_label: "Alt text", editor_alt_text_edit_button_label: "Edit alt text", editor_alt_text_decorative_tooltip: "Marked as decorative", print_progress_percent: "{{progress}}%" };
    function e(l, m) {
      switch (l) {
        case "find_match_count":
          l = `find_match_count[${m.total === 1 ? "one" : "other"}]`;
          break;
        case "find_match_count_limit":
          l = `find_match_count_limit[${m.limit === 1 ? "one" : "other"}]`;
      }
      return t[l] || "";
    }
    const r = { getLanguage: async () => "en-us", getDirection: async () => "ltr", async get(l) {
      let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return function(h, a) {
        return a ? h.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (f, g) => g in a ? a[g] : "{{" + g + "}}") : h;
      }(arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e(l, m), m);
    }, async translate(l) {
    } };
    o.NullL10n = r;
  }, (C, o, t) => {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.XfaLayer = void 0, t(89);
    var e = t(194);
    o.XfaLayer = class {
      static setupStorage(l, m, y, h, a) {
        const f = h.getValue(m, { value: null });
        switch (y.name) {
          case "textarea":
            if (f.value !== null && (l.textContent = f.value), a === "print")
              break;
            l.addEventListener("input", (g) => {
              h.setValue(m, { value: g.target.value });
            });
            break;
          case "input":
            if (y.attributes.type === "radio" || y.attributes.type === "checkbox") {
              if (f.value === y.attributes.xfaOn ? l.setAttribute("checked", !0) : f.value === y.attributes.xfaOff && l.removeAttribute("checked"), a === "print")
                break;
              l.addEventListener("change", (g) => {
                h.setValue(m, { value: g.target.checked ? g.target.getAttribute("xfaOn") : g.target.getAttribute("xfaOff") });
              });
            } else {
              if (f.value !== null && l.setAttribute("value", f.value), a === "print")
                break;
              l.addEventListener("input", (g) => {
                h.setValue(m, { value: g.target.value });
              });
            }
            break;
          case "select":
            if (f.value !== null) {
              l.setAttribute("value", f.value);
              for (const g of y.children)
                g.attributes.value === f.value ? g.attributes.selected = !0 : g.attributes.hasOwnProperty("selected") && delete g.attributes.selected;
            }
            l.addEventListener("input", (g) => {
              const x = g.target.options, b = x.selectedIndex === -1 ? "" : x[x.selectedIndex].value;
              h.setValue(m, { value: b });
            });
        }
      }
      static setAttributes(l) {
        let { html: m, element: y, storage: h = null, intent: a, linkService: f } = l;
        const { attributes: g } = y, x = m instanceof HTMLAnchorElement;
        g.type === "radio" && (g.name = `${g.name}-${a}`);
        for (const [b, _] of Object.entries(g))
          if (_ != null)
            switch (b) {
              case "class":
                _.length && m.setAttribute(b, _.join(" "));
                break;
              case "dataId":
                break;
              case "id":
                m.setAttribute("data-element-id", _);
                break;
              case "style":
                Object.assign(m.style, _);
                break;
              case "textContent":
                m.textContent = _;
                break;
              default:
                (!x || b !== "href" && b !== "newWindow") && m.setAttribute(b, _);
            }
        x && f.addLinkAttributes(m, g.href, g.newWindow), h && g.dataId && this.setupStorage(m, g.dataId, y, h);
      }
      static render(l) {
        var _;
        const m = l.annotationStorage, y = l.linkService, h = l.xfaHtml, a = l.intent || "display", f = document.createElement(h.name);
        h.attributes && this.setAttributes({ html: f, element: h, intent: a, linkService: y });
        const g = [[h, -1, f]], x = l.div;
        if (x.append(f), l.viewport) {
          const M = `matrix(${l.viewport.transform.join(",")})`;
          x.style.transform = M;
        }
        a !== "richText" && x.setAttribute("class", "xfaLayer xfaFont");
        const b = [];
        for (; g.length > 0; ) {
          const [M, O, W] = g.at(-1);
          if (O + 1 === M.children.length) {
            g.pop();
            continue;
          }
          const w = M.children[++g.at(-1)[1]];
          if (w === null)
            continue;
          const { name: n } = w;
          if (n === "#text") {
            const p = document.createTextNode(w.value);
            b.push(p), W.append(p);
            continue;
          }
          const i = (_ = w == null ? void 0 : w.attributes) != null && _.xmlns ? document.createElementNS(w.attributes.xmlns, n) : document.createElement(n);
          if (W.append(i), w.attributes && this.setAttributes({ html: i, element: w, storage: m, intent: a, linkService: y }), w.children && w.children.length > 0)
            g.push([w, -1, i]);
          else if (w.value) {
            const p = document.createTextNode(w.value);
            e.XfaText.shouldBuildText(n) && b.push(p), i.append(p);
          }
        }
        for (const M of x.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
          M.setAttribute("readOnly", !0);
        return { textDivs: b };
      }
      static update(l) {
        const m = `matrix(${l.viewport.transform.join(",")})`;
        l.div.style.transform = m, l.div.hidden = !1;
      }
    };
  }, (C, o, t) => {
    var a, f, g, x, b, _, M, O, W, w, n, i, p, T, R, Lr, d, Nr, F, jr, Z, Br, U, cr, v, Ur, D, hr, J, Wr, N, zr, I, qr, j, Hr, H, Vr, X, ne, nt, dr, ht, Me, St, Re, bt, ue, yt, ur, Ft, Fe, Nt, Gr, Kt, pr, Gt, $r, Vt, Xr, $t, fr, zt, De, qt, pe;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.InkEditor = void 0, t(89), t(2);
    var e = t(1), r = t(164), l = t(198), m = t(168), y = t(165);
    const pt = class pt extends r.AnnotationEditor {
      constructor(it) {
        super({ ...it, name: "inkEditor" });
        K(this, R);
        K(this, d);
        K(this, F);
        K(this, Z);
        K(this, U);
        K(this, v);
        K(this, D);
        K(this, J);
        K(this, N);
        K(this, I);
        K(this, j);
        K(this, H);
        K(this, X);
        K(this, nt);
        K(this, ht);
        K(this, St);
        K(this, bt);
        K(this, yt);
        K(this, Ft);
        K(this, Vt);
        K(this, $t);
        K(this, zt);
        K(this, qt);
        K(this, a, 0);
        K(this, f, 0);
        K(this, g, this.canvasPointermove.bind(this));
        K(this, x, this.canvasPointerleave.bind(this));
        K(this, b, this.canvasPointerup.bind(this));
        K(this, _, this.canvasPointerdown.bind(this));
        K(this, M, new Path2D());
        K(this, O, !1);
        K(this, W, !1);
        K(this, w, !1);
        K(this, n, null);
        K(this, i, 0);
        K(this, p, 0);
        K(this, T, null);
        this.color = it.color || null, this.thickness = it.thickness || null, this.opacity = it.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
      }
      static initialize(it) {
        r.AnnotationEditor.initialize(it, { strings: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"] });
      }
      static updateDefaultParams(it, ot) {
        switch (it) {
          case e.AnnotationEditorParamsType.INK_THICKNESS:
            pt._defaultThickness = ot;
            break;
          case e.AnnotationEditorParamsType.INK_COLOR:
            pt._defaultColor = ot;
            break;
          case e.AnnotationEditorParamsType.INK_OPACITY:
            pt._defaultOpacity = ot / 100;
        }
      }
      updateParams(it, ot) {
        switch (it) {
          case e.AnnotationEditorParamsType.INK_THICKNESS:
            rt(this, R, Lr).call(this, ot);
            break;
          case e.AnnotationEditorParamsType.INK_COLOR:
            rt(this, d, Nr).call(this, ot);
            break;
          case e.AnnotationEditorParamsType.INK_OPACITY:
            rt(this, F, jr).call(this, ot);
        }
      }
      static get defaultPropertiesToUpdate() {
        return [[e.AnnotationEditorParamsType.INK_THICKNESS, pt._defaultThickness], [e.AnnotationEditorParamsType.INK_COLOR, pt._defaultColor || r.AnnotationEditor._defaultLineColor], [e.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * pt._defaultOpacity)]];
      }
      get propertiesToUpdate() {
        var it;
        return [[e.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || pt._defaultThickness], [e.AnnotationEditorParamsType.INK_COLOR, this.color || pt._defaultColor || r.AnnotationEditor._defaultLineColor], [e.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * ((it = this.opacity) != null ? it : pt._defaultOpacity))]];
      }
      rebuild() {
        this.parent && (super.rebuild(), this.div !== null && (this.canvas || (rt(this, ht, Me).call(this), rt(this, St, Re).call(this)), this.isAttachedToDOM || (this.parent.add(this), rt(this, bt, ue).call(this)), rt(this, qt, pe).call(this)));
      }
      remove() {
        this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, s(this, n).disconnect(), at(this, n, null), super.remove());
      }
      setParent(it) {
        !this.parent && it ? this._uiManager.removeShouldRescale(this) : this.parent && it === null && this._uiManager.addShouldRescale(this), super.setParent(it);
      }
      onScaleChanging() {
        const [it, ot] = this.parentDimensions, Ct = this.width * it, _t = this.height * ot;
        this.setDimensions(Ct, _t);
      }
      enableEditMode() {
        !s(this, O) && this.canvas !== null && (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", s(this, _)));
      }
      disableEditMode() {
        this.isInEditMode() && this.canvas !== null && (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", s(this, _)));
      }
      onceAdded() {
        this._isDraggable = !this.isEmpty();
      }
      isEmpty() {
        return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
      }
      commit() {
        s(this, O) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), at(this, O, !0), this.div.classList.add("disabled"), rt(this, qt, pe).call(this, !0), this.makeResizable(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({ preventScroll: !0 }));
      }
      focusin(it) {
        this._focusEventsAllowed && (super.focusin(it), this.enableEditMode());
      }
      canvasPointerdown(it) {
        it.button === 0 && this.isInEditMode() && !s(this, O) && (this.setInForeground(), it.preventDefault(), it.type !== "mouse" && this.div.focus(), rt(this, v, Ur).call(this, it.offsetX, it.offsetY));
      }
      canvasPointermove(it) {
        it.preventDefault(), rt(this, D, hr).call(this, it.offsetX, it.offsetY);
      }
      canvasPointerup(it) {
        it.preventDefault(), rt(this, nt, dr).call(this, it);
      }
      canvasPointerleave(it) {
        rt(this, nt, dr).call(this, it);
      }
      get isResizable() {
        return !this.isEmpty() && s(this, O);
      }
      render() {
        if (this.div)
          return this.div;
        let it, ot;
        this.width && (it = this.x, ot = this.y), super.render(), r.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then((jt) => {
          var ut;
          return (ut = this.div) == null ? void 0 : ut.setAttribute("aria-label", jt);
        });
        const [Ct, _t, kt, Pt] = rt(this, Z, Br).call(this);
        if (this.setAt(Ct, _t, 0, 0), this.setDims(kt, Pt), rt(this, ht, Me).call(this), this.width) {
          const [jt, ut] = this.parentDimensions;
          this.setAspectRatio(this.width * jt, this.height * ut), this.setAt(it * jt, ot * ut, this.width * jt, this.height * ut), at(this, w, !0), rt(this, bt, ue).call(this), this.setDims(this.width * jt, this.height * ut), rt(this, X, ne).call(this), this.div.classList.add("disabled");
        } else
          this.div.classList.add("editing"), this.enableEditMode();
        return rt(this, St, Re).call(this), this.div;
      }
      setDimensions(it, ot) {
        const Ct = Math.round(it), _t = Math.round(ot);
        if (s(this, i) === Ct && s(this, p) === _t)
          return;
        at(this, i, Ct), at(this, p, _t), this.canvas.style.visibility = "hidden";
        const [kt, Pt] = this.parentDimensions;
        this.width = it / kt, this.height = ot / Pt, this.fixAndSetPosition(), s(this, O) && rt(this, yt, ur).call(this, it, ot), rt(this, bt, ue).call(this), rt(this, X, ne).call(this), this.canvas.style.visibility = "visible", this.fixDims();
      }
      static deserialize(it, ot, Ct) {
        var st, ct, vt;
        if (it instanceof l.InkAnnotationElement)
          return null;
        const _t = super.deserialize(it, ot, Ct);
        _t.thickness = it.thickness, _t.color = e.Util.makeHexColor(...it.color), _t.opacity = it.opacity;
        const [kt, Pt] = _t.pageDimensions, jt = _t.width * kt, ut = _t.height * Pt, mt = _t.parentScale, c = it.thickness / 2;
        at(_t, O, !0), at(_t, i, Math.round(jt)), at(_t, p, Math.round(ut));
        const { paths: A, rect: G, rotation: Q } = it;
        for (let { bezier: xt } of A) {
          xt = rt(st = pt, Gt, $r).call(st, xt, G, Q);
          const At = [];
          _t.paths.push(At);
          let Lt = mt * (xt[0] - c), Tt = mt * (xt[1] - c);
          for (let Dt = 2, Ot = xt.length; Dt < Ot; Dt += 6) {
            const Wt = mt * (xt[Dt] - c), Ht = mt * (xt[Dt + 1] - c), Xt = mt * (xt[Dt + 2] - c), re = mt * (xt[Dt + 3] - c), ie = mt * (xt[Dt + 4] - c), ae = mt * (xt[Dt + 5] - c);
            At.push([[Lt, Tt], [Wt, Ht], [Xt, re], [ie, ae]]), Lt = ie, Tt = ae;
          }
          const Mt = rt(this, Nt, Gr).call(this, At);
          _t.bezierPath2D.push(Mt);
        }
        const et = rt(ct = _t, $t, fr).call(ct);
        return at(_t, f, Math.max(r.AnnotationEditor.MIN_SIZE, et[2] - et[0])), at(_t, a, Math.max(r.AnnotationEditor.MIN_SIZE, et[3] - et[1])), rt(vt = _t, yt, ur).call(vt, jt, ut), _t;
      }
      serialize() {
        if (this.isEmpty())
          return null;
        const it = this.getRect(0, 0), ot = r.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
        return { annotationType: e.AnnotationEditorType.INK, color: ot, thickness: this.thickness, opacity: this.opacity, paths: rt(this, Vt, Xr).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, it), pageIndex: this.pageIndex, rect: it, rotation: this.rotation, structTreeParentId: this._structTreeParentId };
      }
    };
    a = new WeakMap(), f = new WeakMap(), g = new WeakMap(), x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakMap(), O = new WeakMap(), W = new WeakMap(), w = new WeakMap(), n = new WeakMap(), i = new WeakMap(), p = new WeakMap(), T = new WeakMap(), R = new WeakSet(), Lr = function(it) {
      const ot = this.thickness;
      this.addCommands({ cmd: () => {
        this.thickness = it, rt(this, qt, pe).call(this);
      }, undo: () => {
        this.thickness = ot, rt(this, qt, pe).call(this);
      }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_THICKNESS, overwriteIfSameType: !0, keepUndo: !0 });
    }, d = new WeakSet(), Nr = function(it) {
      const ot = this.color;
      this.addCommands({ cmd: () => {
        this.color = it, rt(this, X, ne).call(this);
      }, undo: () => {
        this.color = ot, rt(this, X, ne).call(this);
      }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_COLOR, overwriteIfSameType: !0, keepUndo: !0 });
    }, F = new WeakSet(), jr = function(it) {
      it /= 100;
      const ot = this.opacity;
      this.addCommands({ cmd: () => {
        this.opacity = it, rt(this, X, ne).call(this);
      }, undo: () => {
        this.opacity = ot, rt(this, X, ne).call(this);
      }, mustExec: !0, type: e.AnnotationEditorParamsType.INK_OPACITY, overwriteIfSameType: !0, keepUndo: !0 });
    }, Z = new WeakSet(), Br = function() {
      const { parentRotation: it, parentDimensions: [ot, Ct] } = this;
      switch (it) {
        case 90:
          return [0, Ct, Ct, ot];
        case 180:
          return [ot, Ct, ot, Ct];
        case 270:
          return [ot, 0, Ct, ot];
        default:
          return [0, 0, ot, Ct];
      }
    }, U = new WeakSet(), cr = function() {
      const { ctx: it, color: ot, opacity: Ct, thickness: _t, parentScale: kt, scaleFactor: Pt } = this;
      it.lineWidth = _t * kt / Pt, it.lineCap = "round", it.lineJoin = "round", it.miterLimit = 10, it.strokeStyle = `${ot}${(0, y.opacityToHex)(Ct)}`;
    }, v = new WeakSet(), Ur = function(it, ot) {
      var Ct;
      this.canvas.addEventListener("contextmenu", m.noContextMenu), this.canvas.addEventListener("pointerleave", s(this, x)), this.canvas.addEventListener("pointermove", s(this, g)), this.canvas.addEventListener("pointerup", s(this, b)), this.canvas.removeEventListener("pointerdown", s(this, _)), this.isEditing = !0, s(this, w) || (at(this, w, !0), rt(this, bt, ue).call(this), this.thickness || (this.thickness = pt._defaultThickness), this.color || (this.color = pt._defaultColor || r.AnnotationEditor._defaultLineColor), (Ct = this.opacity) != null || (this.opacity = pt._defaultOpacity)), this.currentPath.push([it, ot]), at(this, W, !1), rt(this, U, cr).call(this), at(this, T, () => {
        rt(this, I, qr).call(this), s(this, T) && window.requestAnimationFrame(s(this, T));
      }), window.requestAnimationFrame(s(this, T));
    }, D = new WeakSet(), hr = function(it, ot) {
      const [Ct, _t] = this.currentPath.at(-1);
      if (this.currentPath.length > 1 && it === Ct && ot === _t)
        return;
      const kt = this.currentPath;
      let Pt = s(this, M);
      kt.push([it, ot]), at(this, W, !0), kt.length <= 2 ? (Pt.moveTo(...kt[0]), Pt.lineTo(it, ot)) : (kt.length === 3 && (at(this, M, Pt = new Path2D()), Pt.moveTo(...kt[0])), rt(this, j, Hr).call(this, Pt, ...kt.at(-3), ...kt.at(-2), it, ot));
    }, J = new WeakSet(), Wr = function() {
      if (this.currentPath.length === 0)
        return;
      const it = this.currentPath.at(-1);
      s(this, M).lineTo(...it);
    }, N = new WeakSet(), zr = function(it, ot) {
      at(this, T, null), it = Math.min(Math.max(it, 0), this.canvas.width), ot = Math.min(Math.max(ot, 0), this.canvas.height), rt(this, D, hr).call(this, it, ot), rt(this, J, Wr).call(this);
      let Ct;
      if (this.currentPath.length !== 1)
        Ct = rt(this, H, Vr).call(this);
      else {
        const Pt = [it, ot];
        Ct = [[Pt, Pt.slice(), Pt.slice(), Pt]];
      }
      const _t = s(this, M), kt = this.currentPath;
      this.currentPath = [], at(this, M, new Path2D()), this.addCommands({ cmd: () => {
        this.allRawPaths.push(kt), this.paths.push(Ct), this.bezierPath2D.push(_t), this.rebuild();
      }, undo: () => {
        this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (rt(this, ht, Me).call(this), rt(this, St, Re).call(this)), rt(this, qt, pe).call(this));
      }, mustExec: !0 });
    }, I = new WeakSet(), qr = function() {
      if (!s(this, W))
        return;
      at(this, W, !1);
      const it = Math.ceil(this.thickness * this.parentScale), ot = this.currentPath.slice(-3), Ct = ot.map((Pt) => Pt[0]), _t = ot.map((Pt) => Pt[1]), { ctx: kt } = (Math.min(...Ct), Math.max(...Ct), Math.min(..._t), Math.max(..._t), this);
      kt.save(), kt.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const Pt of this.bezierPath2D)
        kt.stroke(Pt);
      kt.stroke(s(this, M)), kt.restore();
    }, j = new WeakSet(), Hr = function(it, ot, Ct, _t, kt, Pt, jt) {
      const ut = (ot + _t) / 2, mt = (Ct + kt) / 2, c = (_t + Pt) / 2, A = (kt + jt) / 2;
      it.bezierCurveTo(ut + 2 * (_t - ut) / 3, mt + 2 * (kt - mt) / 3, c + 2 * (_t - c) / 3, A + 2 * (kt - A) / 3, c, A);
    }, H = new WeakSet(), Vr = function() {
      const it = this.currentPath;
      if (it.length <= 2)
        return [[it[0], it[0], it.at(-1), it.at(-1)]];
      const ot = [];
      let Ct, [_t, kt] = it[0];
      for (Ct = 1; Ct < it.length - 2; Ct++) {
        const [G, Q] = it[Ct], [et, st] = it[Ct + 1], ct = (G + et) / 2, vt = (Q + st) / 2, xt = [_t + 2 * (G - _t) / 3, kt + 2 * (Q - kt) / 3], At = [ct + 2 * (G - ct) / 3, vt + 2 * (Q - vt) / 3];
        ot.push([[_t, kt], xt, At, [ct, vt]]), [_t, kt] = [ct, vt];
      }
      const [Pt, jt] = it[Ct], [ut, mt] = it[Ct + 1], c = [_t + 2 * (Pt - _t) / 3, kt + 2 * (jt - kt) / 3], A = [ut + 2 * (Pt - ut) / 3, mt + 2 * (jt - mt) / 3];
      return ot.push([[_t, kt], c, A, [ut, mt]]), ot;
    }, X = new WeakSet(), ne = function() {
      if (this.isEmpty()) {
        rt(this, Ft, Fe).call(this);
        return;
      }
      rt(this, U, cr).call(this);
      const { canvas: it, ctx: ot } = this;
      ot.setTransform(1, 0, 0, 1, 0, 0), ot.clearRect(0, 0, it.width, it.height), rt(this, Ft, Fe).call(this);
      for (const Ct of this.bezierPath2D)
        ot.stroke(Ct);
    }, nt = new WeakSet(), dr = function(it) {
      this.canvas.removeEventListener("pointerleave", s(this, x)), this.canvas.removeEventListener("pointermove", s(this, g)), this.canvas.removeEventListener("pointerup", s(this, b)), this.canvas.addEventListener("pointerdown", s(this, _)), setTimeout(() => {
        this.canvas.removeEventListener("contextmenu", m.noContextMenu);
      }, 10), rt(this, N, zr).call(this, it.offsetX, it.offsetY), this.addToAnnotationStorage(), this.setInBackground();
    }, ht = new WeakSet(), Me = function() {
      this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", r.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then((it) => {
        var ot;
        return (ot = this.canvas) == null ? void 0 : ot.setAttribute("aria-label", it);
      }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
    }, St = new WeakSet(), Re = function() {
      at(this, n, new ResizeObserver((it) => {
        const ot = it[0].contentRect;
        ot.width && ot.height && this.setDimensions(ot.width, ot.height);
      })), s(this, n).observe(this.div);
    }, bt = new WeakSet(), ue = function() {
      if (!s(this, w))
        return;
      const [it, ot] = this.parentDimensions;
      this.canvas.width = Math.ceil(this.width * it), this.canvas.height = Math.ceil(this.height * ot), rt(this, Ft, Fe).call(this);
    }, yt = new WeakSet(), ur = function(it, ot) {
      const Ct = rt(this, zt, De).call(this), _t = (it - Ct) / s(this, f), kt = (ot - Ct) / s(this, a);
      this.scaleFactor = Math.min(_t, kt);
    }, Ft = new WeakSet(), Fe = function() {
      const it = rt(this, zt, De).call(this) / 2;
      this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + it, this.translationY * this.scaleFactor + it);
    }, Nt = new WeakSet(), Gr = function(it) {
      const ot = new Path2D();
      for (let Ct = 0, _t = it.length; Ct < _t; Ct++) {
        const [kt, Pt, jt, ut] = it[Ct];
        Ct === 0 && ot.moveTo(...kt), ot.bezierCurveTo(Pt[0], Pt[1], jt[0], jt[1], ut[0], ut[1]);
      }
      return ot;
    }, Kt = new WeakSet(), pr = function(it, ot, Ct) {
      const [_t, kt, Pt, jt] = ot;
      switch (Ct) {
        case 0:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2)
            it[ut] += _t, it[ut + 1] = jt - it[ut + 1];
          break;
        case 90:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2) {
            const c = it[ut];
            it[ut] = it[ut + 1] + _t, it[ut + 1] = c + kt;
          }
          break;
        case 180:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2)
            it[ut] = Pt - it[ut], it[ut + 1] += kt;
          break;
        case 270:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2) {
            const c = it[ut];
            it[ut] = Pt - it[ut + 1], it[ut + 1] = jt - c;
          }
          break;
        default:
          throw new Error("Invalid rotation");
      }
      return it;
    }, Gt = new WeakSet(), $r = function(it, ot, Ct) {
      const [_t, kt, Pt, jt] = ot;
      switch (Ct) {
        case 0:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2)
            it[ut] -= _t, it[ut + 1] = jt - it[ut + 1];
          break;
        case 90:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2) {
            const c = it[ut];
            it[ut] = it[ut + 1] - kt, it[ut + 1] = c - _t;
          }
          break;
        case 180:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2)
            it[ut] = Pt - it[ut], it[ut + 1] -= kt;
          break;
        case 270:
          for (let ut = 0, mt = it.length; ut < mt; ut += 2) {
            const c = it[ut];
            it[ut] = jt - it[ut + 1], it[ut + 1] = Pt - c;
          }
          break;
        default:
          throw new Error("Invalid rotation");
      }
      return it;
    }, Vt = new WeakSet(), Xr = function(it, ot, Ct, _t) {
      var mt, c;
      const kt = [], Pt = this.thickness / 2, jt = it * ot + Pt, ut = it * Ct + Pt;
      for (const A of this.paths) {
        const G = [], Q = [];
        for (let et = 0, st = A.length; et < st; et++) {
          const [ct, vt, xt, At] = A[et], Lt = it * ct[0] + jt, Tt = it * ct[1] + ut, Mt = it * vt[0] + jt, Dt = it * vt[1] + ut, Ot = it * xt[0] + jt, Wt = it * xt[1] + ut, Ht = it * At[0] + jt, Xt = it * At[1] + ut;
          et === 0 && (G.push(Lt, Tt), Q.push(Lt, Tt)), G.push(Mt, Dt, Ot, Wt, Ht, Xt), Q.push(Mt, Dt), et === st - 1 && Q.push(Ht, Xt);
        }
        kt.push({ bezier: rt(mt = pt, Kt, pr).call(mt, G, _t, this.rotation), points: rt(c = pt, Kt, pr).call(c, Q, _t, this.rotation) });
      }
      return kt;
    }, $t = new WeakSet(), fr = function() {
      let it = 1 / 0, ot = -1 / 0, Ct = 1 / 0, _t = -1 / 0;
      for (const kt of this.paths)
        for (const [Pt, jt, ut, mt] of kt) {
          const c = e.Util.bezierBoundingBox(...Pt, ...jt, ...ut, ...mt);
          it = Math.min(it, c[0]), Ct = Math.min(Ct, c[1]), ot = Math.max(ot, c[2]), _t = Math.max(_t, c[3]);
        }
      return [it, Ct, ot, _t];
    }, zt = new WeakSet(), De = function() {
      return s(this, O) ? Math.ceil(this.thickness * this.parentScale) : 0;
    }, qt = new WeakSet(), pe = function() {
      let it = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      if (this.isEmpty())
        return;
      if (!s(this, O)) {
        rt(this, X, ne).call(this);
        return;
      }
      const ot = rt(this, $t, fr).call(this), Ct = rt(this, zt, De).call(this);
      at(this, f, Math.max(r.AnnotationEditor.MIN_SIZE, ot[2] - ot[0])), at(this, a, Math.max(r.AnnotationEditor.MIN_SIZE, ot[3] - ot[1]));
      const _t = Math.ceil(Ct + s(this, f) * this.scaleFactor), kt = Math.ceil(Ct + s(this, a) * this.scaleFactor), [Pt, jt] = this.parentDimensions;
      this.width = _t / Pt, this.height = kt / jt, this.setAspectRatio(_t, kt);
      const ut = this.translationX, mt = this.translationY;
      this.translationX = -ot[0], this.translationY = -ot[1], rt(this, bt, ue).call(this), rt(this, X, ne).call(this), at(this, i, _t), at(this, p, kt), this.setDims(_t, kt);
      const c = it ? Ct / this.scaleFactor / 2 : 0;
      this.translate(ut - this.translationX - c, mt - this.translationY - c);
    }, K(pt, Nt), K(pt, Kt), K(pt, Gt), Yt(pt, "_defaultColor", null), Yt(pt, "_defaultOpacity", 1), Yt(pt, "_defaultThickness", 1), Yt(pt, "_type", "ink");
    let h = pt;
    o.InkEditor = h;
  }, (C, o, t) => {
    var h, a, f, g, x, b, _, M, O, W, w, ye, i, Ae, T, Ie, k, gr, L, Yr, V, Kr, B, mr, u, Oe, S, Jr;
    Object.defineProperty(o, "__esModule", { value: !0 }), o.StampEditor = void 0, t(149), t(152);
    var e = t(1), r = t(164), l = t(168), m = t(198);
    const q = class q extends r.AnnotationEditor {
      constructor(N) {
        super({ ...N, name: "stampEditor" });
        K(this, w);
        K(this, i);
        K(this, T);
        K(this, k);
        K(this, L);
        K(this, V);
        K(this, B);
        K(this, u);
        K(this, S);
        K(this, h, null);
        K(this, a, null);
        K(this, f, null);
        K(this, g, null);
        K(this, x, null);
        K(this, b, null);
        K(this, _, null);
        K(this, M, null);
        K(this, O, !1);
        K(this, W, !1);
        at(this, g, N.bitmapUrl), at(this, x, N.bitmapFile);
      }
      static initialize(N) {
        r.AnnotationEditor.initialize(N);
      }
      static get supportedTypes() {
        return (0, e.shadow)(this, "supportedTypes", ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"].map((N) => `image/${N}`));
      }
      static get supportedTypesStr() {
        return (0, e.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
      }
      static isHandlingMimeForPasting(N) {
        return this.supportedTypes.includes(N);
      }
      static paste(N, P) {
        P.pasteEditor(e.AnnotationEditorType.STAMP, { bitmapFile: N.getAsFile() });
      }
      remove() {
        var N, P;
        s(this, a) && (at(this, h, null), this._uiManager.imageManager.deleteId(s(this, a)), (N = s(this, b)) == null || N.remove(), at(this, b, null), (P = s(this, _)) == null || P.disconnect(), at(this, _, null)), super.remove();
      }
      rebuild() {
        this.parent ? (super.rebuild(), this.div !== null && (s(this, a) && rt(this, T, Ie).call(this), this.isAttachedToDOM || this.parent.add(this))) : s(this, a) && rt(this, T, Ie).call(this);
      }
      onceAdded() {
        this._isDraggable = !0, this.div.focus();
      }
      isEmpty() {
        return !(s(this, f) || s(this, h) || s(this, g) || s(this, x));
      }
      get isResizable() {
        return !0;
      }
      render() {
        if (this.div)
          return this.div;
        let N, P;
        if (this.width && (N = this.x, P = this.y), super.render(), this.div.hidden = !0, s(this, h) ? rt(this, k, gr).call(this) : rt(this, T, Ie).call(this), this.width) {
          const [I, E] = this.parentDimensions;
          this.setAt(N * I, P * E, this.width * I, this.height * E);
        }
        return this.div;
      }
      static deserialize(N, P, I) {
        if (N instanceof m.StampAnnotationElement)
          return null;
        const E = super.deserialize(N, P, I), { rect: j, bitmapUrl: $, bitmapId: H, isSvg: Y, accessibilityData: X } = N;
        H && I.imageManager.isValidId(H) ? at(E, a, H) : at(E, g, $), at(E, O, Y);
        const [tt, nt] = E.pageDimensions;
        return E.width = (j[2] - j[0]) / tt, E.height = (j[3] - j[1]) / nt, X && (E.altTextData = X), E;
      }
      serialize() {
        let N = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (this.isEmpty())
          return null;
        const I = { annotationType: e.AnnotationEditorType.STAMP, bitmapId: s(this, a), pageIndex: this.pageIndex, rect: this.getRect(0, 0), rotation: this.rotation, isSvg: s(this, O), structTreeParentId: this._structTreeParentId };
        if (N)
          return I.bitmapUrl = rt(this, u, Oe).call(this, !0), I.accessibilityData = this.altTextData, I;
        const { decorative: E, altText: j } = this.altTextData;
        if (!E && j && (I.accessibilityData = { type: "Figure", alt: j }), P === null)
          return I;
        P.stamps || (P.stamps = /* @__PURE__ */ new Map());
        const $ = s(this, O) ? (I.rect[2] - I.rect[0]) * (I.rect[3] - I.rect[1]) : null;
        if (P.stamps.has(s(this, a))) {
          if (s(this, O)) {
            const H = P.stamps.get(s(this, a));
            $ > H.area && (H.area = $, H.serialized.bitmap.close(), H.serialized.bitmap = rt(this, u, Oe).call(this, !1));
          }
        } else
          P.stamps.set(s(this, a), { area: $, serialized: I }), I.bitmap = rt(this, u, Oe).call(this, !1);
        return I;
      }
    };
    h = new WeakMap(), a = new WeakMap(), f = new WeakMap(), g = new WeakMap(), x = new WeakMap(), b = new WeakMap(), _ = new WeakMap(), M = new WeakMap(), O = new WeakMap(), W = new WeakMap(), w = new WeakSet(), ye = function(N) {
      let P = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
      N ? (at(this, h, N.bitmap), P || (at(this, a, N.id), at(this, O, N.isSvg)), rt(this, k, gr).call(this)) : this.remove();
    }, i = new WeakSet(), Ae = function() {
      at(this, f, null), this._uiManager.enableWaiting(!1), s(this, b) && this.div.focus();
    }, T = new WeakSet(), Ie = function() {
      if (s(this, a)) {
        this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(s(this, a)).then((P) => rt(this, w, ye).call(this, P, !0)).finally(() => rt(this, i, Ae).call(this));
        return;
      }
      if (s(this, g)) {
        const P = s(this, g);
        at(this, g, null), this._uiManager.enableWaiting(!0), at(this, f, this._uiManager.imageManager.getFromUrl(P).then((I) => rt(this, w, ye).call(this, I)).finally(() => rt(this, i, Ae).call(this)));
        return;
      }
      if (s(this, x)) {
        const P = s(this, x);
        at(this, x, null), this._uiManager.enableWaiting(!0), at(this, f, this._uiManager.imageManager.getFromFile(P).then((I) => rt(this, w, ye).call(this, I)).finally(() => rt(this, i, Ae).call(this)));
        return;
      }
      const N = document.createElement("input");
      N.type = "file", N.accept = q.supportedTypesStr, at(this, f, new Promise((P) => {
        N.addEventListener("change", async () => {
          if (N.files && N.files.length !== 0) {
            this._uiManager.enableWaiting(!0);
            const I = await this._uiManager.imageManager.getFromFile(N.files[0]);
            rt(this, w, ye).call(this, I);
          } else
            this.remove();
          P();
        }), N.addEventListener("cancel", () => {
          this.remove(), P();
        });
      }).finally(() => rt(this, i, Ae).call(this))), N.click();
    }, k = new WeakSet(), gr = function() {
      const { div: N } = this;
      let { width: P, height: I } = s(this, h);
      const [E, j] = this.pageDimensions, $ = 0.75;
      if (this.width)
        P = this.width * E, I = this.height * j;
      else if (P > $ * E || I > $ * j) {
        const tt = Math.min($ * E / P, $ * j / I);
        P *= tt, I *= tt;
      }
      const [H, Y] = this.parentDimensions;
      this.setDims(P * H / E, I * Y / j), this._uiManager.enableWaiting(!1);
      const X = at(this, b, document.createElement("canvas"));
      N.append(X), N.hidden = !1, rt(this, B, mr).call(this, P, I), rt(this, S, Jr).call(this), s(this, W) || (this.parent.addUndoableEditor(this), at(this, W, !0)), this._uiManager._eventBus.dispatch("reporttelemetry", { source: this, details: { type: "editing", subtype: this.editorType, data: { action: "inserted_image" } } }), this.addAltTextButton();
    }, L = new WeakSet(), Yr = function(N, P) {
      var j;
      const [I, E] = this.parentDimensions;
      this.width = N / I, this.height = P / E, this.setDims(N, P), (j = this._initialOptions) != null && j.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, s(this, M) !== null && clearTimeout(s(this, M)), at(this, M, setTimeout(() => {
        at(this, M, null), rt(this, B, mr).call(this, N, P);
      }, 200));
    }, V = new WeakSet(), Kr = function(N, P) {
      const { width: I, height: E } = s(this, h);
      let j = I, $ = E, H = s(this, h);
      for (; j > 2 * N || $ > 2 * P; ) {
        const Y = j, X = $;
        j > 2 * N && (j = j >= 16384 ? Math.floor(j / 2) - 1 : Math.ceil(j / 2)), $ > 2 * P && ($ = $ >= 16384 ? Math.floor($ / 2) - 1 : Math.ceil($ / 2));
        const tt = new OffscreenCanvas(j, $);
        tt.getContext("2d").drawImage(H, 0, 0, Y, X, 0, 0, j, $), H = tt.transferToImageBitmap();
      }
      return H;
    }, B = new WeakSet(), mr = function(N, P) {
      N = Math.ceil(N), P = Math.ceil(P);
      const I = s(this, b);
      if (!I || I.width === N && I.height === P)
        return;
      I.width = N, I.height = P;
      const E = s(this, O) ? s(this, h) : rt(this, V, Kr).call(this, N, P), j = I.getContext("2d");
      j.filter = this._uiManager.hcmFilter, j.drawImage(E, 0, 0, E.width, E.height, 0, 0, N, P);
    }, u = new WeakSet(), Oe = function(N) {
      if (N) {
        if (s(this, O)) {
          const I = this._uiManager.imageManager.getSvgUrl(s(this, a));
          if (I)
            return I;
        }
        const P = document.createElement("canvas");
        return { width: P.width, height: P.height } = s(this, h), P.getContext("2d").drawImage(s(this, h), 0, 0), P.toDataURL();
      }
      if (s(this, O)) {
        const [P, I] = this.pageDimensions, E = Math.round(this.width * P * l.PixelsPerInch.PDF_TO_CSS_UNITS), j = Math.round(this.height * I * l.PixelsPerInch.PDF_TO_CSS_UNITS), $ = new OffscreenCanvas(E, j);
        return $.getContext("2d").drawImage(s(this, h), 0, 0, s(this, h).width, s(this, h).height, 0, 0, E, j), $.transferToImageBitmap();
      }
      return structuredClone(s(this, h));
    }, S = new WeakSet(), Jr = function() {
      at(this, _, new ResizeObserver((N) => {
        const P = N[0].contentRect;
        P.width && P.height && rt(this, L, Yr).call(this, P.width, P.height);
      })), s(this, _).observe(this.div);
    }, Yt(q, "_type", "stamp");
    let y = q;
    o.StampEditor = y;
  }], __webpack_module_cache__ = {};
  function __w_pdfjs_require__(C) {
    var o = __webpack_module_cache__[C];
    if (o !== void 0)
      return o.exports;
    var t = __webpack_module_cache__[C] = { exports: {} };
    return __webpack_modules__[C].call(t.exports, t, t.exports, __w_pdfjs_require__), t.exports;
  }
  var __webpack_exports__ = {};
  return (() => {
    var C = __webpack_exports__;
    Object.defineProperty(C, "__esModule", { value: !0 }), Object.defineProperty(C, "AbortException", { enumerable: !0, get: function() {
      return o.AbortException;
    } }), Object.defineProperty(C, "AnnotationEditorLayer", { enumerable: !0, get: function() {
      return l.AnnotationEditorLayer;
    } }), Object.defineProperty(C, "AnnotationEditorParamsType", { enumerable: !0, get: function() {
      return o.AnnotationEditorParamsType;
    } }), Object.defineProperty(C, "AnnotationEditorType", { enumerable: !0, get: function() {
      return o.AnnotationEditorType;
    } }), Object.defineProperty(C, "AnnotationEditorUIManager", { enumerable: !0, get: function() {
      return m.AnnotationEditorUIManager;
    } }), Object.defineProperty(C, "AnnotationLayer", { enumerable: !0, get: function() {
      return y.AnnotationLayer;
    } }), Object.defineProperty(C, "AnnotationMode", { enumerable: !0, get: function() {
      return o.AnnotationMode;
    } }), Object.defineProperty(C, "CMapCompressionType", { enumerable: !0, get: function() {
      return o.CMapCompressionType;
    } }), Object.defineProperty(C, "DOMSVGFactory", { enumerable: !0, get: function() {
      return e.DOMSVGFactory;
    } }), Object.defineProperty(C, "FeatureTest", { enumerable: !0, get: function() {
      return o.FeatureTest;
    } }), Object.defineProperty(C, "GlobalWorkerOptions", { enumerable: !0, get: function() {
      return h.GlobalWorkerOptions;
    } }), Object.defineProperty(C, "ImageKind", { enumerable: !0, get: function() {
      return o.ImageKind;
    } }), Object.defineProperty(C, "InvalidPDFException", { enumerable: !0, get: function() {
      return o.InvalidPDFException;
    } }), Object.defineProperty(C, "MissingPDFException", { enumerable: !0, get: function() {
      return o.MissingPDFException;
    } }), Object.defineProperty(C, "OPS", { enumerable: !0, get: function() {
      return o.OPS;
    } }), Object.defineProperty(C, "PDFDataRangeTransport", { enumerable: !0, get: function() {
      return t.PDFDataRangeTransport;
    } }), Object.defineProperty(C, "PDFDateString", { enumerable: !0, get: function() {
      return e.PDFDateString;
    } }), Object.defineProperty(C, "PDFWorker", { enumerable: !0, get: function() {
      return t.PDFWorker;
    } }), Object.defineProperty(C, "PasswordResponses", { enumerable: !0, get: function() {
      return o.PasswordResponses;
    } }), Object.defineProperty(C, "PermissionFlag", { enumerable: !0, get: function() {
      return o.PermissionFlag;
    } }), Object.defineProperty(C, "PixelsPerInch", { enumerable: !0, get: function() {
      return e.PixelsPerInch;
    } }), Object.defineProperty(C, "PromiseCapability", { enumerable: !0, get: function() {
      return o.PromiseCapability;
    } }), Object.defineProperty(C, "RenderingCancelledException", { enumerable: !0, get: function() {
      return e.RenderingCancelledException;
    } }), Object.defineProperty(C, "SVGGraphics", { enumerable: !0, get: function() {
      return t.SVGGraphics;
    } }), Object.defineProperty(C, "UnexpectedResponseException", { enumerable: !0, get: function() {
      return o.UnexpectedResponseException;
    } }), Object.defineProperty(C, "Util", { enumerable: !0, get: function() {
      return o.Util;
    } }), Object.defineProperty(C, "VerbosityLevel", { enumerable: !0, get: function() {
      return o.VerbosityLevel;
    } }), Object.defineProperty(C, "XfaLayer", { enumerable: !0, get: function() {
      return a.XfaLayer;
    } }), Object.defineProperty(C, "build", { enumerable: !0, get: function() {
      return t.build;
    } }), Object.defineProperty(C, "createValidAbsoluteUrl", { enumerable: !0, get: function() {
      return o.createValidAbsoluteUrl;
    } }), Object.defineProperty(C, "getDocument", { enumerable: !0, get: function() {
      return t.getDocument;
    } }), Object.defineProperty(C, "getFilenameFromUrl", { enumerable: !0, get: function() {
      return e.getFilenameFromUrl;
    } }), Object.defineProperty(C, "getPdfFilenameFromUrl", { enumerable: !0, get: function() {
      return e.getPdfFilenameFromUrl;
    } }), Object.defineProperty(C, "getXfaPageViewport", { enumerable: !0, get: function() {
      return e.getXfaPageViewport;
    } }), Object.defineProperty(C, "isDataScheme", { enumerable: !0, get: function() {
      return e.isDataScheme;
    } }), Object.defineProperty(C, "isPdfFile", { enumerable: !0, get: function() {
      return e.isPdfFile;
    } }), Object.defineProperty(C, "loadScript", { enumerable: !0, get: function() {
      return e.loadScript;
    } }), Object.defineProperty(C, "noContextMenu", { enumerable: !0, get: function() {
      return e.noContextMenu;
    } }), Object.defineProperty(C, "normalizeUnicode", { enumerable: !0, get: function() {
      return o.normalizeUnicode;
    } }), Object.defineProperty(C, "renderTextLayer", { enumerable: !0, get: function() {
      return r.renderTextLayer;
    } }), Object.defineProperty(C, "setLayerDimensions", { enumerable: !0, get: function() {
      return e.setLayerDimensions;
    } }), Object.defineProperty(C, "shadow", { enumerable: !0, get: function() {
      return o.shadow;
    } }), Object.defineProperty(C, "updateTextLayer", { enumerable: !0, get: function() {
      return r.updateTextLayer;
    } }), Object.defineProperty(C, "version", { enumerable: !0, get: function() {
      return t.version;
    } });
    var o = __w_pdfjs_require__(1), t = __w_pdfjs_require__(124), e = __w_pdfjs_require__(168), r = __w_pdfjs_require__(195), l = __w_pdfjs_require__(196), m = __w_pdfjs_require__(165), y = __w_pdfjs_require__(198), h = __w_pdfjs_require__(176), a = __w_pdfjs_require__(201);
  })(), __webpack_exports__;
})());
