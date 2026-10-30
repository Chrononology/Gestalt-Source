import { QuartzTransformerPluginInstance } from "../../quartz/plugins/types"

export const TikzJax = (): QuartzTransformerPluginInstance => {
  return {
    name: "TikzJax",
    textTransform(_ctx, src) {
      // Find obsidian ```tikz code blocks and convert them to script tags
      const tikzRegex = /```tikz\s*([\s\(\S\)]*?)```/g
      return src.replace(tikzRegex, (_, tikzCode) => {
        // Trim code and wrap in the specific script format TikZJax looks for
        return `<script type="text/tikz">${tikzCode.trim()}</script>`
      })
    },
    externalResources() {
      return {
        css: ["https://tikzjax.com"],
        js: [
          {
            src: "https://tikzjax.com",
            loadTime: "afterDOMReady",
            contentType: "external",
          },
        ],
      }
    },
  }
}
