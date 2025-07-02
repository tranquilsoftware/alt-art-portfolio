/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {

          // Dark Theme with Blue Accents
          // background: {
          //   DEFAULT: "#0F172A",      // Dark blue-gray (base)
          //   secondary: "#1E293B",    // Slightly lighter dark blue-gray
          //   dark: "#0B1120",         // Almost black
          //   light: "#334155"         // Lighter gray for secondary elements
          // },
          // primary: {
          //   DEFAULT: "#3B82F6",      // Bright blue (main accent)
          //   light: "#60A5FA",        // Lighter blue
          //   dark: "#2563EB",         // Darker blue
          //   foreground: "#FFFFFF"    // White text on primary
          // },
          // accent: {
          //   DEFAULT: "#60A5FA",      // Light blue (complementary accent)
          //   light: "#93C5FD",        // Lighter accent
          //   dark: "#3B82F6",         // Darker accent
          //   foreground: "#FFFFFF"     // White text on accent
          // },
          // content: {
          //   DEFAULT: "#F1F5F9",      // Light gray for text on dark
          //   white: "#FFFFFF",        // Pure white
          //   primary: "#F8FAFC",      // Slightly off-white for primary text
          //   secondary: "#E2E8F0",    // Light gray for secondary text
          //   tertiary: "#CBD5E1",     // Muted gray for tertiary text
          //   muted: "#94A3B8"         // Muted blue-gray for subtle text
          // },
          // border: {
          //   DEFAULT: "#1E293B",      // Default border (slightly lighter than background)
          //   light: "#334155",        // Lighter border
          //   dark: "#0F172A"          // Darker border (matches background)
          // }

          background: {
            DEFAULT: "#000000",      // Pure black
            secondary: "#121212",    // Slightly lighter black
            dark: "#000000",         // Pure black
            light: "#1A1A1A"         // Dark gray for light backgrounds
          },
          primary: {
            DEFAULT: "#FFD700",      // Gold/Yellow
            light: "#FFE44D",        // Lighter yellow
            dark: "#CCAC00",         // Darker yellow
            foreground: "#000000"    // Black text on yellow
          },
          accent: {
            DEFAULT: "#FFA500",      // Orange-yellow
            light: "#FFB700",        // Lighter orange-yellow
            dark: "#CC8400",         // Darker orange-yellow
            foreground: "#000000"    // Black text on accent
          },
          content: {
            DEFAULT: "#FFD700",      // Yellow for text on dark
            white: "#FFFFFF",        // Pure white
            primary: "#FFE44D",      // Bright yellow for primary text
            secondary: "#FFD700",    // Yellow for secondary text
            tertiary: "#FFC000",     // Darker yellow for tertiary text
            muted: "#B8860B"         // Dark goldenrod for subtle text
          },
          border: {
            DEFAULT: "#333333",      // Dark gray border
            light: "#4D4D4D",        // Lighter gray border
            dark: "#1A1A1A"          // Dark border
          }

      }
    }
  },

}
