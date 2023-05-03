const db = require("../../data/db-config");

const getAll = () => {
  // HOKUS POKUS
  return db("Cars");
};

const getById = (id) => {
  // HOKUS POKUS
  return db("Cars").where("id", id).first();
};
const getByVin = (vin) => {
  return db("Cars").where("vin", vin).first();
};

const create = async (cars) => {
  // HOKUS POKUS
  const [id] = await db("Cars").insert(cars);
  return await getById(id);
};

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
};
