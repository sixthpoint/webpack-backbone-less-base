// Require all css
require("../css/theme.less");

// BootstrapJS
require("../js/libs/bootstrap.js");

// HTML5 shiv
require("html5shiv");

// Load backboneJS router
var Workspace = require("./router");
new Workspace();