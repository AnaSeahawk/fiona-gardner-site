(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const label = document.querySelector('.theme-toggle__label');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  if (!toggle || !label) return;

  const current = () => root.dataset.theme || (system.matches ? 'dark' : 'light');
  const update = () => {
    const isDark = current() === 'dark';
    const instruction = `Switch to ${isDark ? 'light' : 'dark'} theme`;
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', instruction);
    toggle.title = instruction;
    label.textContent = instruction;
  };

  toggle.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('fiona-theme', next); } catch (_) {}
    update();
  });

  const changed = () => { if (!root.dataset.theme) update(); };
  if (typeof system.addEventListener === 'function') system.addEventListener('change', changed);
  else system.addListener(changed);
  update();
})();
