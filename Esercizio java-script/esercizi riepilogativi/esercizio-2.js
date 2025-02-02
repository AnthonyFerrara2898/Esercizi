const cars = [
    { brand: "Toyota", model: "Supra GR MK5", year: 2022 },
    { brand: "Honda", model: "Civic Type R", year: 2020 },
    { brand: "Nissan", model: "GTR R35", year: 2018 }
];


function formatCarList(cars) {
    return cars.map(car => `${car.brand} ${car.model}`);
}

const formattedCars = formatCarList(cars);
console.log(formattedCars);