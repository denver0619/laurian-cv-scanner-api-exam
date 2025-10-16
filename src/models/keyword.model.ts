import * as admin from "firebase-admin";

export default interface KeywordModel {
  id?: string;
  keyword: string;
  isActive: boolean;
  userId: string | undefined;
  createdAt?: admin.firestore.Timestamp | admin.firestore.FieldValue;
  updatedAt?: admin.firestore.Timestamp | admin.firestore.FieldValue;
}
