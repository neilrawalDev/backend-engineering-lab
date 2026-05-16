import { Router } from "express"; // Mini Express App used to group related endpoints

const router = Router(); // Router Instance

router.get("/health", (_req, res) => {
    res.status(200).json({
        status: "ok",
        service: "backend-engineering-lab"
    })
})

export default router 

