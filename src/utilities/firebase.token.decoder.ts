import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { admin } from "../config/firebase";

const firebaseTokenDecoder = async (token: string) => {
  const decodedValue: DecodedIdToken = await admin
    .auth()
    .verifyIdToken(token.split(" ")[1]);

  if (decodedValue) {
    return decodedValue;
  } else {
    return null;
  }
};

export default firebaseTokenDecoder;
