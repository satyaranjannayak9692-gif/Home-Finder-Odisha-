console.log("JS LOADED SUCCESSFULLY");

function test(){
  alert("WORKING OK 🚀");
}function searchProperty() {
  let input = document.getElementById("searchBox").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let city = cards[i].getAttribute("data-city");

    if (city.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function resetSearch() {
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "block";
  }

  document.getElementById("searchBox").value = "";
}function openWhatsApp(property){
  let phone = "91XXXXXXXXXX"; // your number later
  let msg = "I am interested in " + property;

  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);

  window.open(url, "_blank");
}function search(){
  let val = document.getElementById("searchBox").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for(let i=0;i<cards.length;i++){
    let city = cards[i].getAttribute("data-city");

    cards[i].style.display = city.includes(val) ? "block" : "none";
  }
}

function reset(){
  let cards = document.getElementsByClassName("card");

  for(let i=0;i<cards.length;i++){
    cards[i].style.display = "block";
  }

  document.getElementById("searchBox").value = "";
}

function whatsapp(text){
  let phone = "91XXXXXXXXXX";
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);
  window.open(url, "_blank");
}

function save(){
  alert("Saved ❤️ (demo)");
}
