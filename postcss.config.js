const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
   plugins: [
      require("tailwindcss"),
      isDev ? undefined : require("postcss-mq-keyframes"),
      isDev ? undefined : require("postcss-sort-media-queries"),
      isDev ? undefined : cssnano(["default", {discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }]),
      purgecss({
         content: ["./src/pages/*.html", "./src/modules/*.js", "./src/components/*.html"],
         css: [],
         dynamicAttributes: [""],
         fontFace: false,
         keyframes: false,
         variables: true,
         rejected: false,
         rejectedCss: false,
         safelist: {
            standard: [],
            deep: [],
            greedy: [],
            keyframes: [],
            variables: []
         },
         defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
   ],
};

