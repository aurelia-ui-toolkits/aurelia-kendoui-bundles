/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.dataviz.qrcode.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.QRCode = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var QRCode = exports.QRCode = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'qrcode'), _dec2 = (0, _decorators.generateBindables)('kendoQRCode'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function QRCode(element, widgetBase) {
      _classCallCheck(this, QRCode);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoQRCode').linkViewModel(this);
    }

    QRCode.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    QRCode.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    QRCode.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    QRCode.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return QRCode;
  }()) || _class) || _class) || _class);
});