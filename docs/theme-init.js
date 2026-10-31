(() => {
  try {
    const saved = localStorage.getItem('fiona-theme');
    if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  } catch (_) {}
})();
