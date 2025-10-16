import { Request } from "express";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";

export interface AuthenticatedRequest<
  P = {},
  ResBody = {},
  ReqBody = {},
  ReqQuery = {}
> extends Request<P, ResBody, ReqBody, ReqQuery> {
  user?: DecodedIdToken;
}
