function calculateDiscount() {
    var originalPrice = parseFloat(document.getElementById("original-price").value);
    var discount = parseFloat(document.getElementById("discount").value);
    
    if (isNaN(originalPrice) || isNaN(discount)) {
        document.getElementById("result").innerHTML = "Lütfen geçerli bir fiyat ve indirim oranı girin.";
    } else {
        var discountedPrice = originalPrice - (originalPrice * discount / 100);
        document.getElementById("result").innerHTML = "İndirimli Fiyat: " + discountedPrice.toFixed(2) + " TL";
    }
}
