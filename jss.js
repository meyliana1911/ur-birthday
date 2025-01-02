document.getElementById('wishButton').addEventListener('click', function() {
    const wishMessage = document.getElementById('wishMessage');
    wishMessage.textContent = "Semoga semua impianmu tercapai dan selalu bahagia! Selamat ulang tahun, Prashila!";
    wishMessage.classList.remove('hidden');
});