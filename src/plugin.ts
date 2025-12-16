import type { RsbuildPlugin } from '@rsbuild/core';
import { Logger } from './logger.js';
import {
  WorkspaceDevRunner,
  type WorkspaceDevRunnerOptions,
} from './workspace-dev.js';

export function pluginWorkspaceDev(
  options?: WorkspaceDevRunnerOptions,
): RsbuildPlugin {
  return {
    name: 'rsbuild-plugin-workspace-dev',
    async setup(api) {
      const rootPath = api.context.rootPath;
      api.modifyRsbuildConfig(async () => {
        const runner = new WorkspaceDevRunner({
          cwd: rootPath,
          ...options,
        });

        await runner.init();
        await runner.start();
        Logger.setEndBanner();
      });
    },
  };
}
