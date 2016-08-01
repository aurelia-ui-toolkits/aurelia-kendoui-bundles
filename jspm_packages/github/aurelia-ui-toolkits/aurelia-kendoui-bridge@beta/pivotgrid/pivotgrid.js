/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PivotGrid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var PivotGrid = exports.PivotGrid = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'pivot-grid'), _dec2 = (0, _decorators.generateBindables)('kendoPivotGrid'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function PivotGrid(element, widgetBase, viewResources) {
      _classCallCheck(this, PivotGrid);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useViewResources(viewResources);
    }

    PivotGrid.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    PivotGrid.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    PivotGrid.prototype.recreate = function recreate() {
      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoPivotGrid', templates);

      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    PivotGrid.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return PivotGrid;
  }()) || _class) || _class) || _class);
});