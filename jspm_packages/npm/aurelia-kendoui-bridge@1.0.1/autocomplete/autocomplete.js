/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AutoComplete = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var AutoComplete = exports.AutoComplete = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'autocomplete'), _dec2 = (0, _decorators.generateBindables)('kendoAutoComplete'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function AutoComplete(element, widgetBase, container) {
      _classCallCheck(this, AutoComplete);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useContainer(container).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
    }

    AutoComplete.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    AutoComplete.prototype.attached = function attached() {
      var inputs = this.element.querySelectorAll('input');
      if (inputs.length > 0) {
        this.target = inputs[0];
      } else {
        this.target = document.createElement('input');
        this.element.appendChild(this.target);
      }

      if (!this.kNoInit) {
        this.recreate();
      }
    };

    AutoComplete.prototype.recreate = function recreate() {
      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoAutoComplete', templates);

      this.kWidget = this.widgetBase.createWidget({
        rootElement: this.element,
        element: this.target,
        parentCtx: this.$parent
      });
    };

    AutoComplete.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    AutoComplete.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return AutoComplete;
  }()) || _class) || _class) || _class);
});