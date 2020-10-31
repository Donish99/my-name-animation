const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i}: ${logo[i].getTotalLength()}`);
}
