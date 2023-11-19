import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss';

import { theme } from './src/theme';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetTypography(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme,
});
