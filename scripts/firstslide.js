let i = 0;

function buttonno() {
    i++;
    i = i % 4;
    switch (i) {
        case 0:
            caption = document.getElementById('playcaption').innerHTML = "Вы готовы?";
            break;
        case 1:
            caption = document.getElementById('playcaption').innerHTML = "А теперь?";
            break;
        case 2:
            caption = document.getElementById('playcaption').innerHTML = "А сейчас?";
            break;
        case 3:
            caption = document.getElementById('playcaption').innerHTML = "Ну и ладно:(";
            break;
    }
}

window.i=i;
window.buttonno=buttonno;