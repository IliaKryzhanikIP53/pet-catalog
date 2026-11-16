console.log('script.js підключено');

const animals = [
    { name: 'Британська короткошерста', species: 'Кіт', ageYears: 3 },
    { name: 'Мейн-кун', species: 'Кіт', ageYears: 1 },
    { name: 'Золотистий ретривер', species: 'Собака', ageYears: 5 },
    { name: 'Французький бульдог', species: 'Собака', ageYears: 0.5 },
    { name: 'Золота рибка', species: 'Риба', ageYears: 2 },
    { name: 'Рибка-півник', species: 'Риба', ageYears: 0.25 }
];

// Фільтрує масив тварин за видом та класифікує їх за віком («молода» або «доросла»)
function filterAndClassifyAnimals(animalArray, targetSpecies) {
    console.log(`--- Тварини виду: ${targetSpecies} ---`);

    for (const animal of animalArray) {
        if (animal.species === targetSpecies) {
            const ageCategory = animal.ageYears < 2 ? 'молода' : 'доросла';
            console.log(`Ім'я/Порода: ${animal.name}, Вік: ${animal.ageYears} р. (${ageCategory})`);
        }
    }
}

filterAndClassifyAnimals(animals, 'Кіт');
filterAndClassifyAnimals(animals, 'Собака');
filterAndClassifyAnimals(animals, 'Риба');

// Переводить вік тварини з років у місяці
const ageInMonths = years => years * 12;

console.log('--- Вік тварин у місяцях ---');
for (const animal of animals) {
    console.log(`${animal.name}: ${ageInMonths(animal.ageYears)} міс.`);
}