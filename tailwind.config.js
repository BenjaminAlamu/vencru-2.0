module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        md: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.125rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.375rem" }],
      },
      colors: ({ colors }) => ({
        gray: {
          50: "#F9FAFB",
          100: "#FDF8E7",
          500: "#667085",
          700: "#344054",
          900: "#F2D365",
        },
      }),
    },
  },
  plugins: [],
};
