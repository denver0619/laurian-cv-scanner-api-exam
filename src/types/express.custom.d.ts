import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export interface AuthenticatedRequest extends Request {
  user?: DecodedIdToken;
}
