module.exports = {
  plugins: [
    "prettier-plugin-organize-imports",
    // Must be last
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
    "prettier-plugin-tailwindcss"
  ],
  proseWrap: "always"
}
