/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LinearGauge = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var LinearGauge = exports.LinearGauge = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'linear-gauge'), _dec2 = (0, _decorators.generateBindables)('kendoLinearGauge'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function LinearGauge(element, widgetBase, viewResources) {
      _classCallCheck(this, LinearGauge);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoLinearGauge').linkViewModel(this).useValueBinding();
    }

    LinearGauge.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    LinearGauge.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    LinearGauge.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    LinearGauge.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    LinearGauge.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return LinearGauge;
  }()) || _class) || _class) || _class);
});