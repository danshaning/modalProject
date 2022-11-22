let color = document.querySelector('#chooseColor');

newColor = () => {
    document.body.style.backgroundColor = color.options[color.selectedIndex].value;

}

color.addEventListener('change', newColor);