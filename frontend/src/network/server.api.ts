import axios from "axios";

import {BASE_URL} from "utils/contants.util";

export const server = axios.create({
  baseURL: BASE_URL
});