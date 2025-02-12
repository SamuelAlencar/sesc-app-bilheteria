import { Platform } from 'react-native';

const getApiUrl = () => {
  if (__DEV__) {
    return Platform.select({
      ios: 'http://localhost:8888',
      android: 'http://10.0.2.2:8888', // Changed port to 8888
      default: 'http://localhost:8888'
    });
  }
  return 'http://localhost:8888'; // Production URL
};

export const environment = {
  apiUrl: getApiUrl(),
  isDevelopment: __DEV__
};

export default environment;
