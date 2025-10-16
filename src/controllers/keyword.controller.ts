import { Request, Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types/express.custom";
import { admin, getDb } from "../config/firebase";
import KeywordModel from "../models/keyword.model";

// THIS IS A STUB FILE. The applicant needs to implement the logic.
interface KeyWordBody {
  keyword: string;
}

export const createKeyword = async (
  req: AuthenticatedRequest<{}, {}, KeyWordBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const keyword: KeywordModel = {
      keyword: req.body.keyword,
      isActive: true,
      userId: req.user?.sub,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const docRef = await getDb().collection("key_words").add(keyword);
    res
      .status(200)
      .json({ message: "Keyword Created Successfully", docRef: docRef });
  } catch (error) {
    next(error);
  }
};

export const getKeywords = async (
  req: AuthenticatedRequest<{}, {}, KeyWordBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: Implement logic to get all keywords with filtering, sorting, and pagination.
    // 1. Extract query params (isActive, sortBy, sortOrder, page, limit).
    // 2. Build a Firestore query based on the params.
    // 3. Call a service function to execute the query.
    // 4. Return the list of keywords.
    let query: FirebaseFirestore.Query = getDb().collection("key_words");

    res.status(501).json({ message: "Not Implemented" });
  } catch (error) {
    next(error);
  }
};

export const getKeywordById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: Implement logic to get a single keyword.
    res.status(501).json({ message: "Not Implemented" });
  } catch (error) {
    next(error);
  }
};

export const updateKeyword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: Implement logic to update a keyword's name.
    res.status(501).json({ message: "Not Implemented" });
  } catch (error) {
    next(error);
  }
};

export const updateKeywordStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: Implement logic to update a keyword's isActive status.
    res.status(501).json({ message: "Not Implemented" });
  } catch (error) {
    next(error);
  }
};

export const deleteKeyword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // TODO: Implement logic to delete a keyword.
    res.status(501).json({ message: "Not Implemented" });
  } catch (error) {
    next(error);
  }
};
