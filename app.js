const tools = document.querySelector('.publication-tools');
tools.hidden = false;
const buttons = [...document.querySelectorAll('[data-filter]')];
const papers = [...document.querySelectorAll('.publication')];
const search = document.querySelector('#paper-search');
let active = 'All';
function filterPapers() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  for (const paper of papers) {
    const show = (active === 'All' || paper.dataset.category === active) && paper.dataset.search.includes(query);
    paper.hidden = !show;
    if (show) count++;
  }
  document.querySelector('.result-count').textContent = `${count} publication${count === 1 ? '' : 's'} · newest first`;
  document.querySelector('#empty-state').hidden = count !== 0;
}
buttons.forEach(button => button.addEventListener('click', () => {
  active = button.dataset.filter;
  buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  filterPapers();
}));
search.addEventListener('input', filterPapers);
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(a => {
        if (a.hash === `#${entry.target.id}`) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-10% 0px -65% 0px'});
  navLinks.forEach(a => observer.observe(document.querySelector(a.hash)));
}
