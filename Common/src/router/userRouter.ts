import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../config/multerConfig";
import { userController } from "../controller";

const router: Router = Router();
const upload = multer(multerConfig);

router.post("/signin", userController.signIn);
router.post("/signup", userController.signUp);
router.get("/", userController.getUser);
router.post("/:userId/image", upload.single("image"), userController.updateUserProfileImage);

export default router;
