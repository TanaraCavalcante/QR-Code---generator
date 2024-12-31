let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    let text = qrText.value.trim();

    if(text === ""){
        alert("Please enter a valid text or URL!");
        return;
    }

    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;
}