document.addEventListener('DOMContentLoaded', function () {
    // Находим все переключатели
    const switchers = document.querySelectorAll('.explore__switcher');

    // Первый переключатель (PC системные требования)
    const pcSwitcher = switchers[0];
    const pcItems = document.querySelectorAll('.explore__system .explore-list__item');

    pcSwitcher.addEventListener('click', () => {
        pcItems.forEach(item => item.classList.toggle('hidden'));
        pcSwitcher.classList.toggle('active');
    });

    // Второй переключатель (PS4 версии игры)
    const psSwitcher = switchers[1];
    const psItems = document.querySelectorAll('.explore-system .explore-list__item');

    psSwitcher.addEventListener('click', () => {
        psItems.forEach(item => item.classList.toggle('hidden'));
        psSwitcher.classList.toggle('active');
    });

    // Анимация переключателя (ползунок двигается)
    switchers.forEach(switcher => {
        switcher.addEventListener('click', function () {
            const circle = this.querySelector('::before');
            this.classList.toggle('switch-active');
        });
    });
});