"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2014 Hewlett Packard Enterprise Development LP
exports.default = {
  getMessage: function getMessage(intl, key, values, defaultMessage) {
    if (intl) {
      return intl.formatMessage({
        id: key,
        defaultMessage: defaultMessage || key
      }, values);
    } else {
      return key;
    }
  }
};
module.exports = exports["default"];