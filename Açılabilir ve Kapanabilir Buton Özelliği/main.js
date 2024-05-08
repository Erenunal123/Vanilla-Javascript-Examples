//Geliştirici  / Developer : Eren Toprak Ünal

//Emeğe saygı, lütfen github profilimi takip ediniz.

//Respect for the effort, please follow my github profile.

/*Turkish:
Buradaki js kodları bir butonun içerisine yerleştirilmiş olan bannerın
aktif bir şekilde butonsal faallerini içermektedir.

English:
The js codes here are for the banner placed inside a button.
It actively includes buttonal activities.*/


//Start.
let btn1, btn2, btn3, banner1, banner2, banner3, count = 0;

btn1 = document.querySelector("#btn1");
btn2 = document.querySelector("#btn2");
btn3 = document.querySelector("#btn3");

banner1 = document.querySelector("#banner1");
banner2 = document.querySelector("#banner2");
banner3 = document.querySelector("#banner3");

btn1.onclick = function () {
    count++;
    banner1.style.display = "none";
    if (count == 1) {
        banner1.style.display = "block";
    }
    else {
        count = 0;
    }
}

btn2.onclick = function () {
    count++;
    banner2.style.display = "none";
    if (count == 1) {
        banner2.style.display = "block";
    }
    else {
        count = 0;
    }
}

btn3.onclick = function () {
    count++;
    banner3.style.display = "none";
    if (count == 1) {
        banner3.style.display = "block";
    }
    else {
        count = 0;
    }
}

//Finish.
