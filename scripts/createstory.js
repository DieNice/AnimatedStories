const wasm = import("wasm-image-to-black-white");

const fileUploader = document.querySelector("#uploadfile");

fileUploader.addEventListener('change', (event) => {
    const file = event.target.files[0];

    let img = new Image;

    img.onclick = function() {
        wasm.then(bnw => {
           img.src=bnw.grayscale_with_luminocity(img);

        });
    }

    img.src = URL.createObjectURL(file);
    document.getElementById('imghere').appendChild(img);
})