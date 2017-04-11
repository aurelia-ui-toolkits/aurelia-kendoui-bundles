/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ListView = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var ListView = exports.ListView = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'list-view'), _dec2 = (0, _decorators.generateBindables)('kendoListView'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function ListView(element, widgetBase, container) {
      _classCallCheck(this, ListView);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoListView').useElement(this.element).linkViewModel(this).useContainer(container);
    }

    ListView.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    ListView.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    ListView.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    ListView.prototype.recreate = function recreate() {
      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoListView', templates);

      this.kWidget = this.widgetBase.recreate();
    };

    ListView.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    ListView.prototype.detached = function detached() {
      this.destroy();
    };

    return ListView;
  }()) || _class) || _class) || _class);
});