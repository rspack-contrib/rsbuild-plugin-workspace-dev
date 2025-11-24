import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginWorkspaceDev } from 'rsbuild-plugin-workspace-dev';

import { pluginLogAfterStart } from './test-plugin.js';

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    pluginReact(),
    pluginTypeCheck(),
    pluginWorkspaceDev(),
    pluginLogAfterStart(),
  ],
});
