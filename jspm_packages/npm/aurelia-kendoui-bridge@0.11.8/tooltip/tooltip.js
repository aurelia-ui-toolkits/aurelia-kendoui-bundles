/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.tooltip.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tooltip = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Tooltip = exports.Tooltip = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'tooltip'), _dec2 = (0, _decorators.generateBindables)('kendoTooltip'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Tooltip(element, widgetBase) {
      _classCallCheck(this, Tooltip);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
    }

    Tooltip.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Tooltip.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Tooltip.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Tooltip.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Tooltip;
  }()) || _class) || _class) || _class);
});