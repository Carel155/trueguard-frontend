import { instance } from "./";

type CreateVerificationData = {
  email: string;
  ip?: string;
};

export type CreateVerificiationResponse = {
  temporaryEmail: boolean;
  vpn?: boolean;
  country?: string;
  emailRiskScore: number;
  ipRiskScore?: number;
  action: string;
};

export const createVerification = async (data: CreateVerificationData) => {
  const response = await instance.post("/verification/try", data);

  return response.data;
};
