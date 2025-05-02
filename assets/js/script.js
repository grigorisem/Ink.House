const cardsWrapper = document.querySelector('.cards-wrapper');

const artworks = {
    'Франция': [
        { id: 1, creator: 'Марсель Руссо', name: 'Охота Амура', type: 'Холст, масло (50х80)', price: '14 000 руб', img: 'assets/img/card1.png' },
        { id: 2, creator: 'Анри Селин', name: 'Дама с собачкой', type: 'Акрил, бумага (50х80)', price: '16 500 руб', img: 'assets/img/card2.png' },
        { id: 3, creator: 'Франсуа Дюпон', name: 'Процедура', type: 'Цветная литография (40х60)', price: '36 000 руб', img: 'assets/img/card3.png' },
        { id: 4, creator: 'Луи Детуш', name: 'Роза', type: 'Бумага, акрил (50х80)', price: '12 000 руб', img: 'assets/img/card4.png' },
        { id: 5, creator: 'Франсуа Дюпон', name: 'Птичья трапеза', type: 'Цветная литография (40х60)', price: '33 000 руб', img: 'assets/img/card5.png' },
        { id: 6, creator: 'Пьер Моранж', name: 'Пейзаж с рыбой', type: 'Цветная литография (40х60)', price: '36 000 руб', img: 'assets/img/card6.png' },
    ],
    'Германия': [
        { id: 7, creator: 'Курт Вернер', name: 'Над городом', type: 'Цветная литография (40х60)', price: '16 000 руб', img: 'assets/img/card1de.jpg' },
        { id: 8, creator: 'Макс Рихтер', name: 'Птенцы', type: 'Холст, масло (50х80)', price: '14 500 руб', img: 'assets/img/card2de.jpg' },
        { id: 9, creator: 'Мартин Майер', name: 'Среди листьев', type: 'Цветная литография (40х60)', price: '20 000 руб', img: 'assets/img/card3de.jpg' },
        { id: 10, creator: 'Герман Бекхер', name: 'Яркая птица', type: 'Цветная литография (40х60)', price: '13 000 руб', img: 'assets/img/card4de.jpg' },
        { id: 11, creator: 'Вульф Бауэр', name: 'Дятлы', type: 'Холст, масло (50х80)', price: '20 000 руб', img: 'assets/img/card5de.jpg' },
        { id: 12, creator: 'Вальтер Хартманн', name: 'Большие воды', type: 'Холст, масло (50х80)', price: '23 000 руб', img: 'assets/img/card6de.jpg' },
    ],
    'Англия': [
        { id: 13, creator: 'Пол Смит', name: 'Дикий зверь', type: 'Акварель, бумага (50х80)', price: '19 500 руб', img: 'assets/img/card1uk.jpg' },
        { id: 14, creator: 'Джон Уайт', name: 'Скалистый берег', type: 'Цветная литография (40х60)', price: '17 500 руб', img: 'assets/img/card2uk.jpg' },
        { id: 15, creator: 'Джим Уотсон', name: 'Река и горы', type: 'Акварель, бумага (50х80)', price: '20 500 руб', img: 'assets/img/card3uk.jpg' },
        { id: 16, creator: 'Юджин Зиллион', name: 'Белый попугай', type: 'Цветная литография (40х60)', price: '15 500 руб', img: 'assets/img/card4uk.jpg' },
        { id: 17, creator: 'Эрик Гиллман', name: 'Ночная рыба', type: 'Бумага, акрил (50х80)', price: '12 500 руб', img: 'assets/img/card5uk.jpg' },
        { id: 18, creator: 'Альфред Барр', name: 'Рыжий кот', type: 'Цветная литография (40х60)', price: '21 000 руб', img: 'assets/img/card6uk.jpg' },
    ]
};

const buttons = document.querySelectorAll('.catalog-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const country = button.textContent.trim();
        const selectedArtworks = artworks[country];

        if (!selectedArtworks) {
            console.error('Нет данных для страны:', country);
            return;
        }

        cardsWrapper.innerHTML = '';

        selectedArtworks.forEach(art => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-id', art.id);

            card.innerHTML = `
                <div class="picture">
                    <img src="${art.img}" alt="${art.name}">
                </div>
                <div class="card-text">
                    <div class="creator">${art.creator}</div>
                    <div class="name">${art.name}</div>
                    <div class="type">${art.type}</div>
                    <div class="price">${art.price}</div>
                    <button>В корзину</button>
                </div>
            `;

            cardsWrapper.appendChild(card);
        });
    });
});

const defaultButton = document.querySelector('.catalog-btn[data-country="Франция"]');
if (defaultButton) {
    defaultButton.classList.add('active');
    const selectedArtworks = artworks['Франция'];
    cardsWrapper.innerHTML = '';
    selectedArtworks.forEach(art => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', art.id);

        card.innerHTML = `
            <div class="picture">
                <img src="${art.img}" alt="${art.name}">
            </div>
            <div class="card-text">
                <div class="creator">${art.creator}</div>
                <div class="name">${art.name}</div>
                <div class="type">${art.type}</div>
                <div class="price">${art.price}</div>
                <button>В корзину</button>
            </div>
        `;

        cardsWrapper.appendChild(card);
    });
}
