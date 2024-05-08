function for_break() {
    var msg = "";
    var word = document.getElementById("input1").value;

    switch (word) {
        case "JS": msg = "Javascript çok dinamik bir dildir."; break;
        case "React": msg = "Javascript eğitimi tamamlandıktan sonra" +
            " bu frameworke geçmeyi düşünüyorum."; break;
        case 10: msg = "10 Sayısı, 10 numara bir sayıdır."; break;
        case 75: msg = "Bu yaşa kadar gelebilmek inanılmaz bir olay!"; break;
        default: msg = "Üzgünüm, girdiğin kelime haznemde yok :("; 
    }
    document.getElementById("text_id").innerHTML = msg;
}