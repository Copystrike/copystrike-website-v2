module.exports = {
  darkMode: "class", // This can be 'media' if preferred.
  mode: "jit",
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  purge: ["./src/**/*.svelte", "./src/**/*.html", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
      },
      backgroundImage: {
        background:
          "url('../assets/mensen-lopen-in-de-buurt-van-betonnen-gebouwen.png')",
      },
      colors: {
        svelte: "#ff3e00",
      },
      minHeight: (theme) => theme("height"),
    },
  },
  variants: {},
  plugins: [],
};
