/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Multiselect = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Multiselect = exports.Multiselect = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'multiselect'), _dec2 = (0, _decorators.generateBindables)('kendoMultiSelect', ['template']), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function Multiselect(element, widgetBase, container) {
      _classCallCheck(this, Multiselect);

      _initDefineProp(this, 'kEnabled', _descriptor, this);

      _initDefineProp(this, 'kReadOnly', _descriptor2, this);

      _initDefineProp(this, 'kNoValueBinding', _descriptor3, this);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMultiSelect').useRootElement(this.element).linkViewModel(this).useContainer(container).bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
    }

    Multiselect.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    Multiselect.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    Multiselect.prototype.attached = function attached() {
      if (!this.kNoValueBinding) {
        this.widgetBase.useValueBinding();
      }

      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Multiselect.prototype.recreate = function recreate() {
      var selectNodes = getSelectNode(this.element);
      this.widgetBase.useElement(selectNodes.length > 0 ? selectNodes[0] : this.element);

      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoMultiSelect', templates);

      this.kWidget = this.widgetBase.recreate();
    };

    Multiselect.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
      if (property !== 'kValue' || this.kWidget.input.val() === '') {
        this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
      }
    };

    Multiselect.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    Multiselect.prototype.detached = function detached() {
      this.destroy();
    };

    return Multiselect;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'kEnabled', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'kReadOnly', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'kNoValueBinding', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class) || _class);


  function getSelectNode(element) {
    return element.querySelectorAll('select');
  }
});