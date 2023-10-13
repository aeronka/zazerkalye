function ready() {
    // Редирект с http
    if (location.protocol == "http:" && !location.port) location.href = 'https:' + location.host;
}

document.addEventListener("DOMContentLoaded", ready);