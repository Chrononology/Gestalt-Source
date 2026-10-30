import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { TikzJax } from "./quartz-custom/plugins/TikzJax"

const config = await loadQuartzConfig()

if (!config.plugins) {
  config.plugins = { transformers: [], filters: [], emitters: [] }
}
config.plugins.transformers.push(TikzJax())

export default config
export const layout = await loadQuartzLayout()
