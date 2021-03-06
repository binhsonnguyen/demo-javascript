function tinhTuoi() {
    birthYear = document.getElementById('birthYear').value;
    currentYear = new Date().getFullYear();
    age = currentYear - birthYear;
    document.getElementById("age").innerText = "Ban " + age + " tuoi!";
}