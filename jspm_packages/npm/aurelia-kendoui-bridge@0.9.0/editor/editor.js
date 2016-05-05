/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.editor.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _kendoEditorMin) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Editor = (function () {
    function Editor(element, widgetBase) {
      _classCallCheck(this, _Editor);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoEditor').linkViewModel(this).useValueBinding();
    }

    Editor.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Editor.prototype.attached = function attached() {
      this.recreate();
    };

    Editor.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Editor.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
    };

    Editor.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    var _Editor = Editor;
    Editor = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Editor) || Editor;
    Editor = _commonDecorators.generateBindables('kendoEditor')(Editor) || Editor;
    Editor = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'rich-editor')(Editor) || Editor;
    return Editor;
  })();

  exports.Editor = Editor;
});