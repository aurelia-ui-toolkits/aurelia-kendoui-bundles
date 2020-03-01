System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "ignore": [
      "github:*",
      "npm:*"
    ],
    "stage": 0,
    "optional": []
  },
  paths: {
    "github:*": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/1.10.0/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/1.10.0/jspm_packages/npm/*",
    "kendo.*": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/1.10.0/jspm_packages/kendo/bower-kendo-ui@2016.1.322/js/kendo.*.js",
    "kendo:*": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/1.10.0/jspm_packages/kendo/*",
    "bundles/bundle.js": "https://cdn.rawgit.com/aurelia-ui-toolkits/aurelia-kendoui-bundles/1.10.0/bundles/bundle.js"
  },
  map: {
    "aurelia-after-attached-plugin": "github:aurelia-ui-toolkits/aurelia-after-attached-plugin@0.1.3",
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@1.7.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.8.2",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history": "npm:aurelia-history@1.2.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.3.1",
    "aurelia-kendoui-bridge": "npm:aurelia-kendoui-bridge@1.10.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.2",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
    "aurelia-logging": "npm:aurelia-logging@1.5.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
    "aurelia-path": "npm:aurelia-path@1.1.5",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2",
    "aurelia-router": "npm:aurelia-router@1.7.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
    "aurelia-templating": "npm:aurelia-templating@1.10.3",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.13.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.37",
    "json": "github:systemjs/plugin-json@0.1.2",
    "text": "github:systemjs/plugin-text@0.0.7",
    "github:aurelia-ui-toolkits/aurelia-after-attached-plugin@0.1.3": {
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.3"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.5.0"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.4.3"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.5.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.4": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.3"
    },
    "npm:aurelia-binding@1.7.3": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
    },
    "npm:aurelia-binding@2.5.2": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.3",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.3",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.13.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.4.0"
    },
    "npm:aurelia-dependency-injection@1.5.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-event-aggregator@1.0.3": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2"
    },
    "npm:aurelia-fetch-client@1.8.2": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-framework@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@2.5.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.5",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.3"
    },
    "npm:aurelia-history-browser@1.4.0": {
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-http-client@1.3.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.5"
    },
    "npm:aurelia-kendoui-bridge@1.10.0": {
      "aurelia-binding": "npm:aurelia-binding@2.5.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.3",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.13.0"
    },
    "npm:aurelia-loader-default@1.2.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-loader@1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-path": "npm:aurelia-path@1.1.5"
    },
    "npm:aurelia-logging-console@1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2"
    },
    "npm:aurelia-metadata@1.0.6": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-pal-browser@1.8.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-polyfills@1.3.4": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-route-recognizer@1.3.2": {
      "aurelia-path": "npm:aurelia-path@1.1.5"
    },
    "npm:aurelia-router@1.7.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-path": "npm:aurelia-path@1.1.5",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2"
    },
    "npm:aurelia-task-queue@1.3.3": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-templating-binding@1.5.3": {
      "aurelia-binding": "npm:aurelia-binding@2.5.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.3"
    },
    "npm:aurelia-templating-resources@1.13.0": {
      "aurelia-binding": "npm:aurelia-binding@2.5.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.5",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.3"
    },
    "npm:aurelia-templating-router@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@2.5.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.5",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.3"
    },
    "npm:aurelia-templating@1.10.3": {
      "aurelia-binding": "npm:aurelia-binding@2.5.2",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.5",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.4.3": {
      "base64-js": "npm:base64-js@1.3.1",
      "ieee754": "npm:ieee754@1.1.13"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  bundles: {
    "bundles/bundle.js": [
      "github:aurelia-ui-toolkits/aurelia-after-attached-plugin@0.1.3.js",
      "github:aurelia-ui-toolkits/aurelia-after-attached-plugin@0.1.3/aurelia-after-attached-plugin.js",
      "github:aurelia-ui-toolkits/aurelia-after-attached-plugin@0.1.3/index.js",
      "github:systemjs/plugin-css@0.1.37.js",
      "github:systemjs/plugin-css@0.1.37/css.js",
      "github:systemjs/plugin-json@0.1.2.js",
      "github:systemjs/plugin-json@0.1.2/json.js",
      "github:systemjs/plugin-text@0.0.7.js",
      "github:systemjs/plugin-text@0.0.7/text.js",
      "npm:aurelia-animator-css@1.0.4.js",
      "npm:aurelia-animator-css@1.0.4/aurelia-animator-css.js",
      "npm:aurelia-binding@1.7.3.js",
      "npm:aurelia-binding@1.7.3/aurelia-binding.js",
      "npm:aurelia-binding@2.5.2.js",
      "npm:aurelia-binding@2.5.2/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.1.js",
      "npm:aurelia-bootstrapper@1.0.1/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.5.2.js",
      "npm:aurelia-dependency-injection@1.5.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.3.js",
      "npm:aurelia-event-aggregator@1.0.3/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.8.2.js",
      "npm:aurelia-fetch-client@1.8.2/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.3.1.js",
      "npm:aurelia-framework@1.3.1/aurelia-framework.js",
      "npm:aurelia-history-browser@1.4.0.js",
      "npm:aurelia-history-browser@1.4.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.2.1.js",
      "npm:aurelia-history@1.2.1/aurelia-history.js",
      "npm:aurelia-http-client@1.3.1.js",
      "npm:aurelia-http-client@1.3.1/aurelia-http-client.js",
      "npm:aurelia-kendoui-bridge@1.10.0.js",
      "npm:aurelia-kendoui-bridge@1.10.0/autocomplete/autocomplete.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/autocomplete/autocomplete.js",
      "npm:aurelia-kendoui-bridge@1.10.0/barcode/barcode.js",
      "npm:aurelia-kendoui-bridge@1.10.0/button/button.js",
      "npm:aurelia-kendoui-bridge@1.10.0/buttongroup/buttongroup.js",
      "npm:aurelia-kendoui-bridge@1.10.0/calendar/calendar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/calendar/calendar.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/chart.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/chart.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/sparkline.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/sparkline.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/stock.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/stock.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/treemap.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chart/treemap.js",
      "npm:aurelia-kendoui-bridge@1.10.0/chat/chat.js",
      "npm:aurelia-kendoui-bridge@1.10.0/colorpalette/colorpalette.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/colorpalette/colorpalette.js",
      "npm:aurelia-kendoui-bridge@1.10.0/colorpicker/colorpicker.js",
      "npm:aurelia-kendoui-bridge@1.10.0/combobox/combobox.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/combobox/combobox.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/bindables.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/constants.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/control-properties.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/decorators.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/notify-binding-behavior.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/observer.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/options-builder.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/template-compiler.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/template-gatherer.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/template.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/util.js",
      "npm:aurelia-kendoui-bridge@1.10.0/common/widget-base.js",
      "npm:aurelia-kendoui-bridge@1.10.0/config-builder.js",
      "npm:aurelia-kendoui-bridge@1.10.0/contextmenu/contextmenu.js",
      "npm:aurelia-kendoui-bridge@1.10.0/dateinput/dateinput.js",
      "npm:aurelia-kendoui-bridge@1.10.0/datepicker/datepicker.js",
      "npm:aurelia-kendoui-bridge@1.10.0/daterangepicker/daterangepicker.js",
      "npm:aurelia-kendoui-bridge@1.10.0/datetimepicker/datetimepicker.js",
      "npm:aurelia-kendoui-bridge@1.10.0/diagram/diagram.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/diagram/diagram.js",
      "npm:aurelia-kendoui-bridge@1.10.0/dialog/dialog.js",
      "npm:aurelia-kendoui-bridge@1.10.0/draggable/draggable.js",
      "npm:aurelia-kendoui-bridge@1.10.0/drop-target/drop-target-area.js",
      "npm:aurelia-kendoui-bridge@1.10.0/drop-target/drop-target.js",
      "npm:aurelia-kendoui-bridge@1.10.0/dropdownlist/dropdownlist.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/dropdownlist/dropdownlist.js",
      "npm:aurelia-kendoui-bridge@1.10.0/dropdowntree/dropdowntree.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/dropdowntree/dropdowntree.js",
      "npm:aurelia-kendoui-bridge@1.10.0/editor/editor.js",
      "npm:aurelia-kendoui-bridge@1.10.0/filter-menu/filter-menu.js",
      "npm:aurelia-kendoui-bridge@1.10.0/flatcolorpicker/flatcolorpicker.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/flatcolorpicker/flatcolorpicker.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gantt/gantt-col.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gantt/gantt-col.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gantt/gantt.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gantt/gantt.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gauges/arc-gauge.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gauges/arc-gauge.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gauges/linear-gauge.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gauges/linear-gauge.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gauges/radial-gauge.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/gauges/radial-gauge.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/col.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/col.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/grid-command.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/grid-command.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/grid-toolbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/grid-toolbar.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/grid.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/grid/grid.js",
      "npm:aurelia-kendoui-bridge@1.10.0/index.js",
      "npm:aurelia-kendoui-bridge@1.10.0/listbox/listbox.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/listbox/listbox.js",
      "npm:aurelia-kendoui-bridge@1.10.0/listview/listview.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/listview/listview.js",
      "npm:aurelia-kendoui-bridge@1.10.0/map/map.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/map/map.js",
      "npm:aurelia-kendoui-bridge@1.10.0/maskedtextbox/maskedtextbox.js",
      "npm:aurelia-kendoui-bridge@1.10.0/mediaplayer/mediaplayer.js",
      "npm:aurelia-kendoui-bridge@1.10.0/menu/menu.js",
      "npm:aurelia-kendoui-bridge@1.10.0/multiselect/multiselect.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/multiselect/multiselect.js",
      "npm:aurelia-kendoui-bridge@1.10.0/notification/notification-template.js",
      "npm:aurelia-kendoui-bridge@1.10.0/notification/notification.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/notification/notification.js",
      "npm:aurelia-kendoui-bridge@1.10.0/numerictextbox/numerictextbox.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pager/pager.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pager/pager.js",
      "npm:aurelia-kendoui-bridge@1.10.0/panelbar/panelbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/panelbar/panelbar.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pdf/pdf.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pivotgrid/pivotconfigurator.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pivotgrid/pivotconfigurator.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pivotgrid/pivotgrid.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/pivotgrid/pivotgrid.js",
      "npm:aurelia-kendoui-bridge@1.10.0/popup/popup.js",
      "npm:aurelia-kendoui-bridge@1.10.0/progressbar/progressbar.js",
      "npm:aurelia-kendoui-bridge@1.10.0/qrcode/qrcode.js",
      "npm:aurelia-kendoui-bridge@1.10.0/rangeslider/rangeslider.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/rangeslider/rangeslider.js",
      "npm:aurelia-kendoui-bridge@1.10.0/responsivepanel/responsivepanel.js",
      "npm:aurelia-kendoui-bridge@1.10.0/scheduler/scheduler.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/scheduler/scheduler.js",
      "npm:aurelia-kendoui-bridge@1.10.0/scrollview/scrollview.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/scrollview/scrollview.js",
      "npm:aurelia-kendoui-bridge@1.10.0/slider/slider.js",
      "npm:aurelia-kendoui-bridge@1.10.0/sortable/sortable.js",
      "npm:aurelia-kendoui-bridge@1.10.0/splitter/splitter.js",
      "npm:aurelia-kendoui-bridge@1.10.0/spreadsheet/spreadsheet.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/spreadsheet/spreadsheet.js",
      "npm:aurelia-kendoui-bridge@1.10.0/switch/switch.js",
      "npm:aurelia-kendoui-bridge@1.10.0/tabstrip/tabstrip.js",
      "npm:aurelia-kendoui-bridge@1.10.0/timepicker/timepicker.js",
      "npm:aurelia-kendoui-bridge@1.10.0/toolbar/toolbar-item-button.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/toolbar/toolbar-item-button.js",
      "npm:aurelia-kendoui-bridge@1.10.0/toolbar/toolbar-item.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/toolbar/toolbar-item.js",
      "npm:aurelia-kendoui-bridge@1.10.0/toolbar/toolbar.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/toolbar/toolbar.js",
      "npm:aurelia-kendoui-bridge@1.10.0/tooltip/tooltip.js",
      "npm:aurelia-kendoui-bridge@1.10.0/treelist/tree-col.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/treelist/tree-col.js",
      "npm:aurelia-kendoui-bridge@1.10.0/treelist/treelist.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/treelist/treelist.js",
      "npm:aurelia-kendoui-bridge@1.10.0/treeview/treeview.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/treeview/treeview.js",
      "npm:aurelia-kendoui-bridge@1.10.0/upload/upload.html!github:systemjs/plugin-text@0.0.7.js",
      "npm:aurelia-kendoui-bridge@1.10.0/upload/upload.js",
      "npm:aurelia-kendoui-bridge@1.10.0/validator/validator.js",
      "npm:aurelia-kendoui-bridge@1.10.0/valueconverters/valueconverters.js",
      "npm:aurelia-kendoui-bridge@1.10.0/version.js",
      "npm:aurelia-kendoui-bridge@1.10.0/window/window.js",
      "npm:aurelia-loader-default@1.2.1.js",
      "npm:aurelia-loader-default@1.2.1/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.2.js",
      "npm:aurelia-loader@1.0.2/aurelia-loader.js",
      "npm:aurelia-logging-console@1.1.1.js",
      "npm:aurelia-logging-console@1.1.1/aurelia-logging-console.js",
      "npm:aurelia-logging@1.5.2.js",
      "npm:aurelia-logging@1.5.2/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.6.js",
      "npm:aurelia-metadata@1.0.6/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.8.1.js",
      "npm:aurelia-pal-browser@1.8.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.8.2.js",
      "npm:aurelia-pal@1.8.2/aurelia-pal.js",
      "npm:aurelia-path@1.1.5.js",
      "npm:aurelia-path@1.1.5/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.4.js",
      "npm:aurelia-polyfills@1.3.4/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.3.2.js",
      "npm:aurelia-route-recognizer@1.3.2/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.7.1.js",
      "npm:aurelia-router@1.7.1/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.3.js",
      "npm:aurelia-task-queue@1.3.3/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.5.3.js",
      "npm:aurelia-templating-binding@1.5.3/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.13.0.js",
      "npm:aurelia-templating-resources@1.13.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-router@1.4.0.js",
      "npm:aurelia-templating-router@1.4.0/aurelia-templating-router.js",
      "npm:aurelia-templating@1.10.3.js",
      "npm:aurelia-templating@1.10.3/aurelia-templating.js"
    ]
  }
});