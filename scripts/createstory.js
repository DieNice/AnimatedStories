const wasm = import("wasm-image-to-black-white");
import "../styles/createstrory.css"
import "../styles/bootstrap.css"
import "./bootstrap"

const fileUploader = document.querySelector("#uploadfile");

fileUploader.addEventListener('change', (event) => {
    const file = event.target.files[0];

    let img = new Image;

    document.getElementById('crt').onclick = function() {
        wasm.then(bnw => {
           img.src=bnw.grayscale_with_luminocity(img);

        });
        img.classList.add('img-fluid');
        document.getElementById('imghere').appendChild(img);
    }

    img.src = URL.createObjectURL(file);

})