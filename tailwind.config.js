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
            "serif": "var(--ff-serif)",
            "sans-cond": "var(--ff-sans-cond)",
            "sans": "var(--ff-sans)",
         },
         colors: {
            "clr-dark": "var(--clr-dark)",
            "clr-light": "var(--clr-light)",
            "clr-white": "var(--clr-white)",
         },
         backgroundImage: {
            "home-mobile": "url(/assets/home/background-home-mobile.jpg)",
            "home-tablet": "url(/assets/home/background-home-tablet.jpg)",
            "home-desktop": "url(/assets/home/background-home-desktop.jpg)",

            "technology-mobile": "url(/assets/technology/background-technology-mobile.jpg)",
            "technology-tablet": "url(/assets/technology/background-technology-tablet.jpg)",
            "technology-desktop": "url(/assets/technology/background-technology-desktop.jpg)",

            "destination-mobile": "url(/assets/destination/background-destination-mobile.jpg)",
            "destination-tablet": "url(/assets/destination/background-destination-tablet.jpg)",
            "destination-desktop": "url(/assets/destination/background-destination-desktop.jpg)",

            "crew-mobile": "url(/assets/crew/background-crew-mobile.jpg)",
            "crew-tablet": "url(/assets/crew/background-crew-tablet.jpg)",
            "crew-desktop": "url(/assets/crew/background-crew-desktop.jpg)",

            "menu-open": "url(/assets/shared/icon-hamburger.svg)",
            "menu-close": "url(/assets/shared/icon-close.svg)",
         },
         gridTemplateRows: {
            "base": "min-content 1fr",
         },
         gridTemplateColumns: {
            "lg-home": "minmax(2rem, 10.3rem) repeat(2, 1fr) minmax(2rem, 10.3rem)"
         },
         margin: {
            "md-clamp": "clamp(6.25rem, 20vw, 6.625rem)",
            "lg-clamp": "clamp(12.5rem, 20vw, 15.68rem)"
         },
         maxWidth: {
            'para': '50ch'
         }

      }
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
