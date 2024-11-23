function openEnvelope() {
    const topFlap = document.querySelector('.top-flap');
    const letter = document.querySelector('.letter');
    const balloonsContainer = document.querySelector('.balloons');
  
    // Animasi membuka amplop
    topFlap.style.transform = 'rotateX(180deg)';
    letter.style.opacity = '1';
    letter.style.top = '-150px'; // Surat keluar jauh dari amplop
    letter.style.transform = 'scale(1.2)'; // Perbesar surat saat keluar
  
    // Mulai generasi balon hati
    setInterval(() => {
      createHeart(balloonsContainer);
    }, 500); // Balon baru muncul setiap 0.5 detik
  
    function createHeart(container) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
  
      // Posisi acak untuk balon hati
      const randomLeft = Math.random() * 100; // Posisi horizontal (0%-100%)
      const randomDelay = Math.random() * 2; // Delay animasi
      const randomSize = Math.random() * 0.5 + 0.5; // Ukuran acak
  
      heart.style.left = `${randomLeft}%`;
      heart.style.animationDelay = `${randomDelay}s`;
      heart.style.transform = `scale(${randomSize})`;
  
      container.appendChild(heart);
  
      // Hapus balon setelah animasi selesai (durasi 4 detik)
      setTimeout(() => heart.remove(), 4000);
    }
  }
  