// Filtro de grafite por artista
document.addEventListener('DOMContentLoaded', () => {
  const gridCards = document.querySelectorAll('.grafite-card');
  const tagButtons = document.querySelectorAll('.filter-btn');

  function filterBy(artist) {
    gridCards.forEach(card => {
      const c = card.getAttribute('data-artist');
      if (artist === 'all' || c === artist) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBy(filter);
      // Destaque visual do botão ativo
      tagButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Conteúdo inicial: mostrar todos
  filterBy('all');
});
