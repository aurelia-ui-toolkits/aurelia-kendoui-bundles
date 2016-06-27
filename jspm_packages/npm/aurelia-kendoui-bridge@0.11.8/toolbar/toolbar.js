/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', 'kendo.toolbar.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _optionsBuilder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Toolbar = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Toolbar = exports.Toolbar = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'toolbar'), _dec2 = (0, _decorators.generateBindables)('kendoToolBar'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _optionsBuilder.OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Toolbar(element, widgetBase, optionsBuilder) {
      _classCallCheck(this, Toolbar);

      this.element = element;
      this.optionsBuilder = optionsBuilder;
      this.widgetBase = widgetBase.control('kendoToolBar').linkViewModel(this);
    }

    Toolbar.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Toolbar.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Toolbar.prototype.recreate = function recreate() {
      var _this = this;

      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent,
        beforeInitialize: function beforeInitialize(o) {
          return _this._beforeInitialize(o);
        }
      });
    };

    Toolbar.prototype._beforeInitialize = function _beforeInitialize(options) {
      var toolbarItems = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'toolbar-item');
      if (toolbarItems && toolbarItems.length > 0) {
        options.items = [];

        toolbarItems.forEach(function (item) {
          options.items.push(item.getOptions());
        });
      }
    };

    Toolbar.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Toolbar;
  }()) || _class) || _class) || _class);
});