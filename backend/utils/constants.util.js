const API_VERSION = 'v1';
const BASE_URL = `/${API_VERSION}`;
const RESOURCES = {
  TOURS: 'TOURS',
  USERS: 'USERS',
};
const QUERY_OPERATORS = ['sort', 'limit', 'page', 'fields'];

module.exports = { API_VERSION, BASE_URL, RESOURCES, QUERY_OPERATORS };
