import axios from "axios";

export type ApiValidationError = {
  path: string;
  message: string;
};

export type ApiErrorResponse = {
  response: {
    data: {
      statusCode: number;
      timestamp: string;
      message: string;
      paths: ApiValidationError[];
    };
  };
};

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
