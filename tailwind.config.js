const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
            "home-mobile": `url(${prefix}/assets/home/background-home-mobile.jpg)`,
            "home-tablet": `url(${prefix}/assets/home/background-home-tablet.jpg)`,
            "home-desktop": `url(${prefix}/assets/home/background-home-desktop.jpg)`,

            "technology-mobile": `url(${prefix}/assets/technology/background-technology-mobile.jpg)`,
            "technology-tablet": `url(${prefix}/assets/technology/background-technology-tablet.jpg)`,
            "technology-desktop": `url(${prefix}/assets/technology/background-technology-desktop.jpg)`,

            "destination-mobile": `url(${prefix}/assets/destination/background-destination-mobile.jpg)`,
            "destination-tablet": `url(${prefix}/assets/destination/background-destination-tablet.jpg)`,
            "destination-desktop": `url(${prefix}/assets/destination/background-destination-desktop.jpg)`,

            "crew-mobile": `url(${prefix}/assets/crew/background-crew-mobile.jpg)`,
            "crew-tablet": `url(${prefix}/assets/crew/background-crew-tablet.jpg)`,
            "crew-desktop": `url(${prefix}/assets/crew/background-crew-desktop.jpg)`,

            "menu-open": `url(${prefix}/assets/shared/icon-hamburger.svg)`,
            "menu-close": `url(${prefix}/assets/shared/icon-close.svg)`,
         },
         gridTemplateRows: {
            "base": "min-content 1fr",
         },
         gridTemplateColumns: {
            "lg-home": "minmax(2rem, 10.3rem) repeat(2, 1fr) minmax(2rem, 10.3rem)",
            "lg-dest": "minmax(2rem, 10.3rem) minmax(25rem, 1fr) minmax(30rem, 1fr) minmax(2rem, 10.3rem)",
            "lg-crew": "minmax(2rem, 10.3rem) minmax(25rem, 1fr) minmax(30rem, 1fr) minmax(2rem, 10.3rem)",
            "lg-tech": "minmax(2rem, 10.3rem) 7.5rem minmax(25rem, 1fr) minmax(18.75rem, 1fr) minmax(2rem, 10.3rem)",
         },
         margin: {
            "md-clamp": "clamp(6.25rem, 20vw, 6.625rem)",
            "lg-clamp": "clamp(12.5rem, 20vw, 15.68rem)"
         },
         maxWidth: {
            'para': '50ch',
            '1/4': '25%',
            '2/5': '40%',
            '1/2': '50%',
            '3/5': '60%',
            '3/4': '75%'
         }
      }
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
