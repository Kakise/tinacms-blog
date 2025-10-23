import { spawnSync } from 'node:child_process';

// Run the TinaCMS build in cloud mode when credentials are present, otherwise fall back to local mode.
const hasCloudCredentials =
  Boolean(process.env.TINA_CLIENT_ID) && Boolean(process.env.TINA_TOKEN);

if (!hasCloudCredentials) {
  console.warn(
    'Skipping TinaCMS build because TINA_CLIENT_ID and TINA_TOKEN are not set.'
  );
  console.warn(
    'Set these environment variables or run `bun run build-local` when you need fresh admin assets.'
  );
  process.exit(0);
}

const args = ['build'];
const env = { ...process.env };

const result = spawnSync('tinacms', args, {
  stdio: 'inherit',
  env,
});

if (result.error) {
  console.error('Failed to run `tinacms` CLI:', result.error);
  process.exit(1);
}

process.exit(result.status ?? 0);
