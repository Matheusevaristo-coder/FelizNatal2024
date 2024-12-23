function openCurtains() {
    document.getElementById('curtain-container').classList.add('open');
    document.getElementById('message').style.display = 'block';
    document.getElementById('background-music').play();
    document.getElementById('click-text').style.display = 'none'; // Esconder o texto
}
