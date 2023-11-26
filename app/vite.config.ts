import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";

// laaCalc name, and image 512 laa1.png
export default defineConfig({
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      manifest: {
        name: "LAA Calculator",
        short_name: "LAA Calc",
        description:
          "Un calcolatore con UI semplice per generare in modo automatico i valori di un ciclo di lavoro di un tornio",
        display: "standalone",
        theme_color: "blue",
        icons: [
          {
            src: "icons/laa512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "icons/laa144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable",
          }
        ],
      },
    }),
  ],
});
