/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ResponsivePanel = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var ResponsivePanel = exports.ResponsivePanel = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'responsivepanel'), _dec2 = (0, _decorators.generateBindables)('kendoResponsivePanel'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function ResponsivePanel(element, widgetBase) {
      _classCallCheck(this, ResponsivePanel);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoResponsivePanel').linkViewModel(this);
    }

    ResponsivePanel.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    ResponsivePanel.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    ResponsivePanel.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    ResponsivePanel.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return ResponsivePanel;
  }()) || _class) || _class) || _class);
});