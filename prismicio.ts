// prismicio.ts
import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './slicemachine.config.json';

export const repositoryName = sm.repositoryName;

export function createClient(config: any = {}) {
  const client = prismic.createClient(repositoryName, config);
  enableAutoPreviews({ client, ...config });
  return client;
}
