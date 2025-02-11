import {
  API_URL,
  DATABASE_URL,
  JWT_SECRET,
  ENVIRONMENT,
} from '@env';

export const environment = {
  apiUrl: API_URL,
  databaseUrl: DATABASE_URL,
  jwtSecret: JWT_SECRET,
  isDevelopment: ENVIRONMENT === 'development',
  isProduction: ENVIRONMENT === 'production',
};

export default environment;
