/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.FilterMenu = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var FilterMenu = exports.FilterMenu = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'filter-menu'), _dec2 = (0, _decorators.generateBindables)('kendoFilterMenu'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function FilterMenu(element, widgetBase) {
      _classCallCheck(this, FilterMenu);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoFilterMenu').useElement(this.element).linkViewModel(this);
    }

    FilterMenu.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    FilterMenu.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    FilterMenu.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    FilterMenu.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    FilterMenu.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    FilterMenu.prototype.detached = function detached() {
      this.destroy();
    };

    return FilterMenu;
  }()) || _class) || _class) || _class);
});