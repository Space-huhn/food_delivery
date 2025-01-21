let ibg = document.querySelectorAll('.ibg');
ibg.forEach((element, index) => {
    let a = `../${element.querySelector('img').getAttribute('src')}`;
    element.style.backgroundImage = `url('${a}')`;
});