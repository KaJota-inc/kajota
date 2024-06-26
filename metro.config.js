const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {


  const defaultConfig = await getDefaultConfig(__dirname);
  const { transformer, resolver } = defaultConfig;

  return {
    transformer: {
      ...transformer,
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      ...resolver,
      assetExts: [...resolver.assetExts.filter((ext) => ext !== "svg"), 'ttf', 'otf'],
      sourceExts: [...resolver.sourceExts, "svg"],
    },
  };
})();
