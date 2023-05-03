// HOKUS POKUS

const router = require("express").Router();
const carModels = require("./cars-model");
const mw = require("./cars-middleware");
const { checkCarPayload } = require("./cars-middleware");
const { checkVinNumberValid } = require("./cars-middleware");
const { checkVinNumberUnique } = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  try {
    const allData = await carModels.getAll();
    return res.json(allData);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", mw.checkCarId, async (req, res, next) => {
  try {
    res.json(req.existCar);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    try {
      const insertedCar = await carModels.create(req.body);
      res.status(201).json(insertedCar);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
