/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const defaultCars = [
  {
    vin: "123",
    make: "Volkswagen",
    model: "Golf",
    mileage: 12354,
  },
  {
    vin: "124",
    make: "Audi",
    model: "A3",
    mileage: 321312,
  },
  {
    vin: "125",
    make: "Skoda",
    model: "Fabia",
    mileage: 12354,
  },
  {
    vin: "126",
    make: "Seat",
    model: "Leon",
    mileage: 12354,
  },
  {
    vin: "127",
    make: "BMW",
    model: "116",
    mileage: 12354,
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Cars").truncate();
  await knex("Cars").insert(defaultCars);
};
