module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Matches all React components
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#2d4fa7",
        secondary: "#f9a70d",
        danger: "#e3342f",
      },
      backgroundColor: {
        primary: "#2d4fa7",
        secondary: "#f9a70d",
        danger: "#e3342f",
      },
      borderColor: {
        primary: "#2d4fa7",
        secondary: "#f9a70d",
        danger: "#e3342f",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Add Helvetica to the default 'sans' font stack
      },
      boxShadow: {
        primary: "0px 0px 4px 0px #00000040",
        secondary: "0px 0px 12px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "circuit-board-gray": "url('../images/bg_circuit_board_1.png')",
        "circuit-board-yellow": "url('../images/bg_circuit_board_2.png')",
      },
    },
  },
  plugins: [],
};
