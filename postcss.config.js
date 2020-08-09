const tailwindcss = require("tailwindcss");
// const autoprefixer = require("autoprefixer");
// const purgeCSS = require("@fullhuman/postcss-purgecss")({
//    content: ["./src/**/*.jsx"],
//    defaultExtractor: (content) => {
//       const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
//       const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

//       return broadMatches.concat(innerMatches);
//    },
// });
/* const discardComments = require("postcss-discard-comments");
const clean = require("postcss-clean"); */

module.exports = {
   plugins: [tailwindcss /* purgeCSS, discardComments, autoprefixer, clean */],
};
