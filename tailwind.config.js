module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        md: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.125rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.375rem" }],
      },
      colors: ({ colors }) => ({
        gray: {
          50: "#F9FAFB",
          100: "#FDF8E7",
          200: "#EAECF0",
          500: "#667085",
          700: "#344054",
          900: "#101828",
        },
        primary: {
          50: "#F9F5FF",
          300: "#D6BBFB",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
        },
        success: {
          50: "#ECFDF3",
          700: "#027A48",
        },
      }),
    },
  },
  plugins: [],
};
