import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "../**/*.{vue,ts}")],
  },
  theme: {
    extend: {
      fontFamily: {
        heading: '"Good Brush"',
      },
    },
  },
}));
