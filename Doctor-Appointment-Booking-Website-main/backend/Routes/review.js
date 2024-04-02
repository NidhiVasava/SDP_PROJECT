import express from "express";
import {
    getAllReviews,
    createReview,
} from "../Controllers/reviewController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });


// Define routes for reviews
router.route("/")
    .get(getAllReviews) // Get all reviews for a doctor
    .post(authenticate, restrict(["patient"]), createReview); // Create a review (restricted to patients)
export default router;