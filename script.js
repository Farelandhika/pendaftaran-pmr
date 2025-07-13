// WA redirect handler
document.getElementById('formPendaftaran').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const alasan = document.getElementById('alasan').value.trim();

  if (!nama || !email || !alasan) {
    alert("Mohon lengkapi semua kolom.");
    return;
  }

  const noWA = '6285755672948'; // Ganti dengan nomor admin PMR kamu
  const pesan = `pendaftaran extra pmr
Nama: ${nama}
Email: ${email}
Alasan:%0A${alasan}`;

  const url = `https://wa.me/${noWA}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
});

// Scroll animation
const fadeEls = document.querySelectorAll('.scroll-fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
fadeEls.forEach(el => observer.observe(el));
