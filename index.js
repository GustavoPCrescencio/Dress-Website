function menuButton() {
    const lista = document.getElementById('show-menu').style.display;
    console.log(lista);

    if(lista === 'block') {
        document.getElementById('show-menu').style.display = 'none';
    } else {
        document.getElementById('show-menu').style.display = 'block';
    }
}