// api-config.js

const API_CONFIG = {
  // Base URL for your API
  BASE_URL: 'https://api.example.com',

  // API endpoints
  ENDPOINTS: {
    USERS: '/users',
    POSTS: '/posts',
    COMMENTS: '/comments',
    // Add more endpoints as needed
  },

  // API authentication token (if required)
  API_KEY: 'your-api-key',

  // Default headers for requests (e.g., for sending JSON)
  HEADERS: {
    'Content-Type': 'application/json',
    // You can add more headers here, such as authorization headers
  },
};

export default API_CONFIG;
