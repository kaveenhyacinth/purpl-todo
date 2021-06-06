const CracoLessPlugin = require("craco-less");
const { primary } = require("./src/theme/Colors");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": primary },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
