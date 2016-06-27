/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.spreadsheet.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Spreadsheet = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Spreadsheet = exports.Spreadsheet = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'spreadsheet'), _dec2 = (0, _decorators.generateBindables)('kendoSpreadsheet'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Spreadsheet(element, widgetBase) {
      _classCallCheck(this, Spreadsheet);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoSpreadsheet').linkViewModel(this);
    }

    Spreadsheet.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Spreadsheet.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Spreadsheet.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Spreadsheet.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Spreadsheet;
  }()) || _class) || _class) || _class);
});