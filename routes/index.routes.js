const router = require("express").Router();

router.get("/", (req, rest, next) => {
    rest.json("All good in here");
});

const phoneRoutes = require("./phones.routes")
router.use("/phones", phoneRoutes)

module.exports = router;