const wasm = import("wasm-image-to-black-white");
const snabbt = require('snabbt.js');
import "../styles/createstrory.css"
import "../styles/bootstrap.css"
import "./bootstrap"

const fileUploader = document.querySelector("#uploadfile");

function dostory(){
        const file = event.target.files[0];

        let img = new Image;

        document.getElementById('crt').onclick = function() {
            wasm.then(bnw => {
                img.src=bnw.grayscale_with_luminocity(img);

            });
            img.classList.add('img-fluid');
            document.getElementById('imghere').appendChild(img);
            let txt=document.getElementById('txtarea').value;
            document.getElementById('texthere').innerText=txt;
        }

        img.src = URL.createObjectURL(file);
}

window.dostory=dostory;

let timerId = setTimeout(function tick() {
    snabbt(document.getElementById('texthere'), {
        position: [100, 0, 0],
        easing: 'ease'
    }).snabbt({
        fromRotation: [0, 0, -2*Math.PI],
        position: [0, 0, 0],
        easing: 'spring',
        springConstant: 0.2,
        springDeceleration: 0.90,
        springMass: 10,
    });
    timerId = setTimeout(tick, 5000); // (*)
}, 5000);

timerId;