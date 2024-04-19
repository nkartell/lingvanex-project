// Находим все кнопки и карточки
const buttons = document.querySelectorAll('.customers__buttons button');
const cards = document.querySelectorAll('.customers-card');

// Для каждой кнопки добавляем обработчик события клика
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        
        cards.forEach(card => card.classList.remove('customers-card_active'));
        
        cards[index].classList.add('customers-card_active');

       
        buttons.forEach(btn => btn.classList.remove('customers__buttons_active'));
        
        this.classList.add('customers__buttons_active');
    });
});