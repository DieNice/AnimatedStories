async function nextslide(url, id) {
    let response = await fetch(url, {method: 'GET'});
    let htmltext = '';
    if (response.ok) {
        htmltext = await response.text();
        let c = document.getElementById(id);
        let b = document.createElement("div");
        b.innerHTML = htmltext;
        c.appendChild(b);
    } else {
        alert("Ошибка http:" + response.status);
    }
}