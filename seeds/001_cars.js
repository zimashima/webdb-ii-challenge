
exports.seed = async function(knex) {
  await knex("cars").insert([
    { carMake: "Rolls-Royce", carYear: 2020, carModel: "GHOST", VIN: "JKNOSALES00LUX546", color: "Black Diamond", transmissionType: "8-Speed Automatic" },
    { carMake: "Rolls-Royce", carYear: 2020, carModel: "CULLINAN", VIN: "JKNOSALES00LUX547", color: "Black Diamond", transmissionType: "8-Speed Automatic" },
    { carMake: "Rolls-Royce", carYear: 2019, carModel: "WRAITH", VIN: "JKNOSALES00LUX548", color: "Gray", transmissionType: "8-Speed Automatic" },
    { carMake: "Rolls-Royce", carYear: 2020, carModel: "WRAITH", VIN: "JKNOSALES00LUX549", color: "White", transmissionType: "8-Speed Automatic" },
    { carMake: "Rolls-Royce", carYear: 2020, carModel: "DAWN", VIN: "JKNOSALES00LUX555", color: "Red", transmissionType: "8-Speed Automatic" }
  ])
};
