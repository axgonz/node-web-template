import express from "../deps/deps";
import siteController from "../controllers/SiteController";

const router = express.Router();

router.get("/", siteController.home);
router.get("/about", siteController.about);

export default router;
