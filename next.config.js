const withTM = require("next-transpile-modules")(["three"]);
module.exports = {
  webpack(config) {
    withTM,
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

    return config;
  },
};
