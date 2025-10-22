document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let product = btn.parentElement.querySelector('h3').innerText;
    let price = btn.parentElement.querySelector('.price').innerText;

    let message = `Hi! I want to order ${product} (${price})`;
    let phone = "YOUR_PHONE_NUMBER_HERE"; // তোমার WhatsApp নাম্বার দাও (country code সহ)
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  });
});
