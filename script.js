function myscript(){
    var pic = document.getElementById("photo");
    var num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        pic.src = "Alineart.jpg";
    }
    else {
        pic.src = "Alineperfil.jpg";
    }
}