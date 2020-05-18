import { resolve } from 'path';
import { path as PROJECT_ROOT } from 'app-root-path';

export { PROJECT_ROOT };
export const BUILD_DIRECTORY = resolve(PROJECT_ROOT, './dist');
export const SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './src');

export const HOST = 'localhost';
export const PORT = 3000;


