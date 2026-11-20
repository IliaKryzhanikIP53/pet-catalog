console.log('script.js підключено');

const animals = [
    {
        name: 'Британська короткошерста',
        species: 'Кіт',
        ageYears: 3,
        anchorId: 'cats',
        badgeText: 'Середній',
        badgeClass: 'card__badge--medium',
        image: 'assets/img/images.jpg',
        alt: 'Британська короткошерста кішка',
        description: 'Спокійна та лагідна порода котів із густою шерстю для затишного дому.'
    },
    {
        name: 'Мейн-кун',
        species: 'Кіт',
        ageYears: 1,
        badgeText: 'Великий',
        badgeClass: 'card__badge--large',
        image: 'assets/img/big%20cat.jpg',
        alt: 'Кіт породи Мейн-кун',
        description: 'Велика, пухнаста та товариська порода домашніх котів із грайливим характером.'
    },
    {
        name: 'Золотистий ретривер',
        species: 'Собака',
        ageYears: 5,
        anchorId: 'dogs',
        badgeText: 'Великий',
        badgeClass: 'card__badge--large',
        image: 'assets/img/gold%20ret.jpg',
        alt: 'Собака Золотистий ретривер',
        description: 'Активний, відданий та розумний сімейний собака, що обожнює прогулянки.'
    },
    {
        name: 'Французький бульдог',
        species: 'Собака',
        ageYears: 0.5,
        badgeText: 'Середній',
        badgeClass: 'card__badge--medium',
        image: 'assets/img/french.jpg',
        alt: 'Французький бульдог',
        description: 'Компактний собака з веселим характером, що ідеально підходить для квартири.'
    },
    {
        name: 'Золота рибка',
        species: 'Риба',
        ageYears: 2,
        anchorId: 'fishes',
        badgeText: 'Малий',
        badgeClass: 'card__badge--small',
        image: 'assets/img/Goldfish.jpg',
        alt: 'Золота рибка',
        description: 'Класична холодноводна рибка, яка потребує просторого акваріума та фільтрації.'
    },
    {
        name: 'Рибка-півник',
        species: 'Риба',
        ageYears: 0.25,
        badgeText: 'Малий',
        badgeClass: 'card__badge--small',
        image: 'assets/img/cock.jpg',
        alt: 'Рибка-півник',
        description: 'Яскрава тропічна бійцівська рибка з великими плавниками та легким доглядом.'
    }
];

const listContainer = document.querySelector('#pets-list');

const staticExampleCard = document.querySelector('#pets-list .card');
if (staticExampleCard) {
    staticExampleCard.remove();
}

// Динамічно створює картки тварин із атрибутами та умовними класами і додає їх у DOM
function renderPets(animalArray) {
    for (const animal of animalArray) {
        const article = document.createElement('article');
        article.classList.add('card');

        const ageClass = animal.ageYears < 2 ? 'young' : 'adult';
        article.classList.add(ageClass);
        article.dataset.species = animal.species;

        if (animal.anchorId) {
            article.id = animal.anchorId;
        }

        const badge = document.createElement('div');
        badge.classList.add('card__badge', animal.badgeClass);
        badge.textContent = animal.badgeText;

        const imageBox = document.createElement('div');
        imageBox.classList.add('card__image-box');

        const img = document.createElement('img');
        img.classList.add('card__image');
        img.src = animal.image;
        img.alt = animal.alt;
        imageBox.append(img);

        const title = document.createElement('h3');
        title.classList.add('card__title');
        title.textContent = animal.name;

        const species = document.createElement('p');
        species.classList.add('card__species');
        species.textContent = animal.species;

        const description = document.createElement('p');
        description.classList.add('card__description');
        description.textContent = animal.description;

        article.append(badge, imageBox, title, species, description);
        listContainer.append(article);
    }
}

renderPets(animals);

const petsCount = document.querySelector('#pets-count');
if (petsCount) {
    petsCount.textContent = `Кількість тварин у каталозі: ${animals.length}`;
}

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