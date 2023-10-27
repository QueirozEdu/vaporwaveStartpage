function imageRandomizer() {
    let imageNumber = Math.floor(Math.random() * 12)

    switch (imageNumber) {
        case 0:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/bike.gif)";
            break;
        case 1:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/clouds.gif)";
            break;
        case 2:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/plane.gif)";
            break;
        case 3:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/rest.webp)";
            break;
        case 4:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/vapor.gif)";
            break;
        case 5:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/vaporwave.gif)";
            break;
        case 6:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/waves.gif)";
            break;
        case 7:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/cabin.gif)";
            break;
        case 8:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/car.gif)";
            break;
        case 9:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/spacewalk.gif)";
            break;
        case 10:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/planets.gif)";
            break;
        case 11:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/sunset.gif)";
            break;
        case 12:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/candles.gif)";
            break;
        default:
            document.getElementById("imaginator").style.backgroundImage = "url(../assets/media/vapor/bike.gif)";

    }
}
imageRandomizer()