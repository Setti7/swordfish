const purgeEnabled = process.env.NODE_ENV === "production";

console.log("\n");
console.log(`   TailwindCSS \n`);
console.log(`   ----------- \n`);
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`);

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      // mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    colors: {
      white: "white",
      transparent: "transparent",
      primary: {
        DEFAULT: "#fdd835",
        "50": "#ffff67",
        "100": "#ffff5d",
        "200": "#fff653",
        "300": "#ffec49",
        "400": "#ffe23f",
        "500": "#fdd835",
        "600": "#f3ce2b",
        "700": "#e9c421",
        "800": "#dfba17",
        "900": "#d5b00d",
      },
      "primary-text": {
        DEFAULT: "#000000",
        disabled: "#4c4c4c",
      },
      "accent-text": {
        DEFAULT: "#ffffff",
        disabled: "#e5e5e5",
      },
      accent: {
        DEFAULT: "#355afd",
        "50": "#678cff",
        "100": "#5d82ff",
        "200": "#5378ff",
        "300": "#496eff",
        "400": "#3f64ff",
        "500": "#355afd",
        "600": "#2b50f3",
        "700": "#2146e9",
        "800": "#173cdf",
        "900": "#0d32d5",
      },
    },
    extend: {
      borderRadius: {
        "8": "8px",
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(["disabled"]),
    textColor: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
