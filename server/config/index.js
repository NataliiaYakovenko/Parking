const path = require("path");

modules.export = {
  PORT: process.env.PORT || 5000,
  STATIC_PATH: path.resolve(__dirname, '..', 'publoc')
};
