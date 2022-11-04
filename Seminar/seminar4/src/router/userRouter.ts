import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

export default router;
