import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/categories", (req: Request, res: Response) => {
    res.send("categories");
});

router.get("/notes", (req: Request, res: Response) => {
    res.send("notes");
});

export default router;