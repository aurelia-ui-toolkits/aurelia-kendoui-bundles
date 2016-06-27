/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.upload.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Upload = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Upload = exports.Upload = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'upload'), _dec2 = (0, _decorators.generateBindables)('kendoUpload'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Upload(element, widgetBase, viewResources) {
      _classCallCheck(this, Upload);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoUpload').linkViewModel(this).useViewResources(viewResources);
    }

    Upload.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Upload.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Upload.prototype.recreate = function recreate() {
      var target = void 0;
      var inputs = this.element.querySelectorAll('input');
      if (inputs.length > 0) {
        target = inputs[0];
      } else {
        target = document.createElement('input');
        this.element.appendChild(target);
      }

      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoUpload', templates);

      this.kWidget = this.widgetBase.createWidget({
        rootElement: this.element,
        element: target,
        parentCtx: this.$parent
      });
    };

    Upload.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Upload;
  }()) || _class) || _class) || _class);
});