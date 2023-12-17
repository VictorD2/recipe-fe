import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#CDA488',
      secondary: '#343331',
      transparent: "transparent",
      background: "#F9F9F9",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      rose: colors.rose,
      amber: colors.amber,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      sky: colors.sky,
      slate: colors.slate,
      stone: colors.stone,
      teal: colors.teal,
      violet: colors.violet,
      zinc: colors.zinc,
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
export default config