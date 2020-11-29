module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            primary: {
                DEFAULT: "#0086ff",
            },
            secondary: {
                DEFAULT: "#00f8b5",
            },
            accent: {
                DEFAULT: "#d126e7",
            },
            white: {
                DEFAULT: "#ffffff",
            },
            dark: {
                DEFAULT: "#232b43",
            },
            black: {
                DEFAULT: "#252B42",
            },
            grey: {
                lighter: "#F4F4F4",
                light: "#E8E8E8",
            },
            transparent: {
                DEFAULT: "rgba(0,0,0,0)",
            },
            yellow: {
                DEFAULT: "#F3CD03",
            },
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        extend: {
            lineHeight: {
                0: "0px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
