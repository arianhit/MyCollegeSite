var imageAr = ['images/ACES-032-Computing-Playstation-Lab.jpg', 'images/ACES-036-Computing-Playstation-Lab-2.jpg', 'images/Cantor atrium 4.jpg', 
'images/Cantor atrium 3.jpg','images/Cantor4.jpg'];
var imgCounter = 0;
setInterval(chgImage, 4000);
function chgImage(){
    
        document.getElementById('myImages').setAttribute('src', imageAr[imgCounter]);
        imgCounter++;
        if(imgCounter==imageAr.length-1){
            imgCounter = 0;
        }
}
chgImage();