const createScript = (src: string) => {
  const el = document.createElement('script');
  el.src = src;
  el.type = 'module';
  return el;
};

const viteScript = createScript('http://127.0.0.1:3000/@vite/client');
const mainScript = createScript('http://127.0.0.1:3000/src/main.ts');

document.head.appendChild(viteScript);
viteScript.addEventListener('load', () => {
  document.head.appendChild(mainScript);
});
