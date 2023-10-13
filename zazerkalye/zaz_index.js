function ready() {
    // Редирект с http
    if (location.protocol == "http:" && !location.port) location.href = 'https:' + location.host;

    // Анимация кнопки предзаписи
    var animateButton = function(e) {

      e.preventDefault;
      //reset animation
      e.target.classList.remove('animate');
      
      e.target.classList.add('animate');
      setTimeout(function(){
        e.target.classList.remove('animate');

        // В ios не работает анимация по ссылке, поэтому она кнопка
        location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSflQhAF0XwPKL5fZgAQrYzSJbc-yaQi624UF8fQR2gb7wA7IA/viewform';
      },700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton);
    }
}

document.addEventListener("DOMContentLoaded", ready);