(function () {
  'use strict';

  function fetchPonyfill(options) {
    var Promise = options && options.Promise || self.Promise;
    var XMLHttpRequest = options && options.XMLHttpRequest || self.XMLHttpRequest;
    var URLSearchParams = options && options.URLSearchParams || self.URLSearchParams;
    var FormData = options && options.FormData || self.FormData;
    var Blob = options && options.Blob || self.Blob;
    var ArrayBuffer = options && options.ArrayBuffer || self.ArrayBuffer;
    var Symbol = options && options.Symbol || self.Symbol;

    return (function () {
      var self = {};
      self.URLSearchParams = URLSearchParams;
      self.FormData = FormData;
      self.FileReader = FileReader;
      self.Blob = Blob;
      self.ArrayBuffer = ArrayBuffer;
      self.Symbol = Symbol;

// {{whatwgFetch}}

      return self.fetch;
    }());
  }

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return fetchPonyfill;
    });
  } else if (typeof exports === 'object') {
    module.exports = fetchPonyfill;
  } else {
    self.fetchPonyfill = fetchPonyfill;
  }
}());
