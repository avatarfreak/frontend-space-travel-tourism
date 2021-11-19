module.exports = {
   mode: 'jit',
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: false,//or'media'or'class'
   theme: {
      extend: {
         fontSize: {
            "fs-900": "var(--fs-900)",
            "fs-800": "var(--fs-800)",
            "fs-700": "var(--fs-700)",
            "fs-600": "var(--fs-600)",
            "fs-500": "var(--fs-500)",
            "fs-550": "var(--fs-550)",
            "fs-400": "var(--fs-400)",
            "fs-300": "var(--fs-300)",
            "fs-200": "var(--fs-200)",
            "fs-100": "var(--fs-100)",

         },
         fontFamily: {
            "ff-serif": "var(--ff-serif)",
            "ff-sans-cond": "var(--ff-sans-cond)",
            "ff-sans": "var(--ff-sans)"
         },
         colors: {
            "clr-dark": "var(--clr-dark)",
            "clr-light": "var(--clr-dark)",
            "clr-white": "var(--clr-white)",
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
