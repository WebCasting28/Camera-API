
let cambtn = document.getElementById("opencam");
let video = document.getElementById("video");
let photo = document.getElementById("Click-photo");
let capvideo = document.getElementById("Click-photo");
let can = document.getElementById("canvas");
let stream;
let capture;

cambtn.addEventListener('click', async () => {
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    video.srcObject = stream;
})
photo.addEventListener('click', () => {
     capture = can.getContext('2d');
    capture.drawImage(video, 0, 0, can.width, can.height);
})

function btnphoto() {
    photo.style.background = "transparent";
    photo.addEventListener('click', async () => {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
    })

}

function btnvideo() {
    photo.style.backgroundColor = "red";
    capvideo.addEventListener('click', async () => {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        video.srcObject = stream;
    })
}

let store_image_display = document.getElementById("img");
photo.addEventListener('click', ()=>{
 const store = can.toDataURL("image/jpeg");
    localStorage.setItem('Image', JSON.stringify(store));

})

can.addEventListener('click', ()=>{
    const display = JSON.parse(localStorage.getItem('Image'));
    store_image_display.src=display;
})