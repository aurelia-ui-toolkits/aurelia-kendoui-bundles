/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf', 'kendo.dataviz.sparkline.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Sparkline = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Sparkline = exports.Sparkline = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'sparkline'), _dec2 = (0, _decorators.generateBindables)('kendoSparkline'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Sparkline(element, widgetBase) {
      _classCallCheck(this, Sparkline);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoSparkline').linkViewModel(this);
    }

    Sparkline.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Sparkline.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Sparkline.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Sparkline.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Sparkline;
  }()) || _class) || _class) || _class);
});