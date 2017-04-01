/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Menu = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Menu = exports.Menu = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'menu'), _dec2 = (0, _decorators.generateBindables)('kendoMenu'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Menu(element, widgetBase) {
      _classCallCheck(this, Menu);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMenu').useElement(this.element).linkViewModel(this);
    }

    Menu.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Menu.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Menu.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Menu.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Menu.prototype.detached = function detached() {
      this.destroy();
    };

    return Menu;
  }()) || _class) || _class) || _class);
});