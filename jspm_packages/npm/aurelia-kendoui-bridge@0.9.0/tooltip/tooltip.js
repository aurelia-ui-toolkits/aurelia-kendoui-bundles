/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.tooltip.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoTooltipMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Tooltip = (function () {
    function Tooltip(element, widgetBase) {
      _classCallCheck(this, _Tooltip);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoTooltip').linkViewModel(this);
    }

    Tooltip.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Tooltip.prototype.attached = function attached() {
      this.recreate();
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

    var _Tooltip = Tooltip;
    Tooltip = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Tooltip) || Tooltip;
    Tooltip = _commonDecorators.generateBindables('kendoTooltip')(Tooltip) || Tooltip;
    Tooltip = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'tooltip')(Tooltip) || Tooltip;
    return Tooltip;
  })();

  exports.Tooltip = Tooltip;
});