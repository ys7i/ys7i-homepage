import solid from "solid-start/vite";
import { defineConfig } from "vite";
import vercel from "solid-start-vercel";

export default defineConfig({
  base: "/",
  plugins: [
    solid({
      adapter: vercel({
        prerender: {
          expiration: 60,
        },
      }),
    }),
  ],
});
