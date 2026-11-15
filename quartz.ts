import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()

if (!config.plugins) {
  config.plugins = { transformers: [], filters: [], emitters: [] }
}

export default config
export const layout = await loadQuartzLayout()
