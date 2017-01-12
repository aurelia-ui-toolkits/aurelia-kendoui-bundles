/* */ 
define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/widget-base', '../common/decorators'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _constants, _widgetBase, _decorators) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PanelBar = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var PanelBar = exports.PanelBar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'panel-bar'), _dec2 = (0, _decorators.generateBindables)('kendoPanelBar'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function PanelBar(element, widgetBase) {
      _classCallCheck(this, PanelBar);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoPanelBar').linkViewModel(this);
    }

    PanelBar.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    PanelBar.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    PanelBar.prototype.recreate = function recreate() {
      var element = this.element;

      if (!hasListChildNode(element)) {
        var ul = document.createElement('ul');

        while (element.children.length > 0) {
          ul.appendChild(element.children[0]);
        }

        element.appendChild(ul);
        element = ul;
      } else {
        element = this.element.children[0];
      }

      this.kWidget = this.widgetBase.createWidget({
        element: element,
        parentCtx: this.$parent,
        rootElement: this.element
      });
    };

    PanelBar.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return PanelBar;
  }()) || _class) || _class) || _class);

  function hasListChildNode(element) {
    return element.children.length > 0 && (element.children[0].nodeName === 'UL' || element.children[0].nodeName === 'OL');
  }
});