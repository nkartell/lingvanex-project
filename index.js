// Находим все кнопки и карточки
const buttons = document.querySelectorAll('.customers__buttons button');
const cards = document.querySelectorAll('.customers__card');

// Для каждой кнопки добавляем обработчик события клика
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Удаляем класс customers__card_active у всех карточек
        cards.forEach(card => card.classList.remove('customers__card_active'));
        // Добавляем класс customers__card_active  карточке с тем же индексом, что и у кнопки
        cards[index].classList.add('customers__card_active');

        // Удаляем класс customers__buttons_active у всех кнопок
        buttons.forEach(btn => btn.classList.remove('customers__buttons_active'));
        // Добавляем класс customers__buttons_active текущей кнопке
        this.classList.add('customers__buttons_active');
    });
});