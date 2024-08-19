let coinCount = 0;
let clickMultiplier = 1;
let currentSkin = '';

// Функция для обновления количества Хлюпиков
function updateCoinCount() {
    document.getElementById('coin-count').innerText = coinCount;
}

// Обработчик клика на кнопку
document.getElementById('click-button').addEventListener('click', function() {
    coinCount += clickMultiplier;
    updateCoinCount();
});

// Обработчики кликов по предметам магазина
document.querySelectorAll('.shop-item').forEach(item => {
    item.addEventListener('click', function() {
        const type = this.getAttribute('data-type');
        const value = this.getAttribute('data-skin') || this.getAttribute('data-multiplier');
        const price = parseInt(this.textContent.match(/\d+/)[0]);

        if (coinCount >= price) {
            coinCount -= price;
            if (type === 'skin') {
                currentSkin = this.getAttribute('data-skin');
                document.getElementById('click-button').style.backgroundImage = `url('https://via.placeholder.com/100/${currentSkin}')`;
            } else if (type === 'upgrade') {
                clickMultiplier = parseInt(value);
            }
            updateCoinCount();
        } else {
            alert('Недостаточно Хлюпиков!');
        }
    });
});

// Установка дефолтного скина на кнопку
document.getElementById('click-button').style.backgroundImage = "url('https://via.placeholder.com/100/FFFFFF')";
