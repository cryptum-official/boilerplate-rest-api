import { environments, configObject } from './environments';

const config: configObject = environments[process.env.NODE_ENV || 'development'];

export { config };
