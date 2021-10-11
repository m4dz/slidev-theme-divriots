import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";

import colors from "../styles/colors"

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "../**/*.{vue,ts}")],
  },
  theme: {
    extend: {
      colors,
      fontFamily: {
        heading: '"Good Brush"',
        sans: "'Space Grotesk', sans-serif",
        mono: "'Fira Code', monospace",
      },
    },
  },
}));
