import { environments } from './environments';

const config = environments[process.env.NODE_ENV || 'development'];

export { config };
