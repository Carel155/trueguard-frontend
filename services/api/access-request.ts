import { instance } from "./";

type CreateAccessRequestBody = {
  email: string;
  description: string;
};

export const createAccessRequest = async (data: CreateAccessRequestBody): Promise<void> => {
  await instance.post("/access-request", data);
};
