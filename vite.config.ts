import solid from "solid-start/vite";
import { defineConfig } from "vite";
// import vercel from "solid-start-vercel";
import solidStatic from "solid-start-static";

export default defineConfig({
  base: "/",
  plugins: [
    solid({
      // adapter: vercel({
      //   prerender: {
      //     expiration: 60,
      //   },
      // }),
      adapter: solidStatic(),
      // ssr: true,
    }),
  ],
});
