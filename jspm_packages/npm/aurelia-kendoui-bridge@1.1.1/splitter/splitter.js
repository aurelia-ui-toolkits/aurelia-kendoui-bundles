/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Splitter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Splitter = exports.Splitter = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'splitter'), _dec2 = (0, _decorators.generateBindables)('kendoSplitter'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Splitter(element, widgetBase) {
      _classCallCheck(this, Splitter);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoSplitter').useElement(this.element).linkViewModel(this);
    }

    Splitter.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Splitter.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Splitter.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.recreate();
    };

    Splitter.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Splitter.prototype.detached = function detached() {
      this.destroy();
    };

    return Splitter;
  }()) || _class) || _class) || _class);
});