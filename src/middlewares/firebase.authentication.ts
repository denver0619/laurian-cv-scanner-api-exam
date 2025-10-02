import { AuthenticatedRequest } from "../types/express.custom";
import firebaseTokenDecoder from "../utilities/firebase.token.decoder";
import { Response, NextFunction } from "express";

const firebaseAuthentication = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!(req.headers.authorization === undefined)) {
    try {
      const decodedToken = await firebaseTokenDecoder(
        req.headers.authorization
      );

      if (decodedToken) {
        req.user = decodedToken;
        return next();
      } else {
        return res.status(404).send({ message: "User not found!" });
      }
    } catch (err: any) {
      return res
        .status(400)
        .send({ message: "Something went wrong!", error: err.message });
    }
  } else {
    return res.status(400).send({ message: "Invalid user token!" });
  }
};

export default firebaseAuthentication;
