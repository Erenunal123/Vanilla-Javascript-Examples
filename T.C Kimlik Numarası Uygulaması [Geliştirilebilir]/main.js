//Geliştirici  / Developer : Eren Toprak Ünal

//Emeğe saygı, lütfen github profilimi takip ediniz.

//Respect for the effort, please follow my github profile.


//Start.
var
    btnProcess = document.querySelector("#btnProcess"),
    resultTrue = document.querySelector("#resultTrue"),
    resultFalse = document.querySelector("#resultFalse");


btnProcess.addEventListener("click", function () {
    var txtID = document.querySelector("#txtID"),
        i, oddNums = 0,
        j, evenNums = 0,
        result,
        z, firstDigitNum = 0;
    //Tek sayı işlemleri
    for (i = 0; i < 9; i += 2) {
        oddNums += Number(txtID.value[i]);
    }
    oddNums *= 7;

    //Çift sayı işlemleri
    for (j = 1; j < 8; j += 2) {
        evenNums += Number(txtID.value[j]);
    }

    result = Math.abs(oddNums - evenNums);
    for (z = 0; z < 10; z++) {
        firstDigitNum += Number(txtID.value[z]);
    }
    //Şartlar
    resultFalse.style.display = "block";
    if (txtID.value == "") {
        resultFalse.textContent = "T.C. Kimlik alanı boş bırakılamaz.";
    }
    else if (txtID.value.length !== 11) {
        resultFalse.textContent = "T.C. Kimlik alanı 11 haneli olmalıdır.";
    }
    else if (isNaN(txtID.value)) {
        resultFalse.textContent = "T.C. Kimlik alanı rakamlardan oluşmalıdır.";
    }
    else if (txtID.value[0] == 0) {
        resultFalse.textContent = "T.C. Kimlik numarası 0'la başlayamaz.";
    }
    else if (result % 10 != Number(txtID.value[9])) {
        resultFalse.textContent = "Böyle bir T.C. Kimlik numarası olamaz.";
    }
    else if (firstDigitNum % 10 != Number(txtID.value[10])) {
        resultFalse.textContent = "Girilen T.C. kimlik numarası hatalıdır.";
    }
    else {
        resultFalse.style.display = "none";
        resultTrue.style.display = "block";
        resultTrue.textContent = "Girilen T.C. Kimlik Numarası kabul edildi";
    }
});
//Finish.