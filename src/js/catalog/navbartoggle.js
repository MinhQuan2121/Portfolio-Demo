document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__toggle');

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);

    const menu = toggle.nextElementSibling;
    menu.setAttribute('aria-expanded', !isExpanded);

    const icon = toggle.querySelector('i');
    if (isExpanded) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  });
});
