export const setAchievementVisibility = (show = true) => {
  const display = show ? 'block' : 'none';
  const catelogList = document.querySelectorAll<HTMLSpanElement>(
    '#toc > ul  a > span.toctext.checked'
  );
  catelogList.forEach((el) => {
    const target = el.parentElement?.parentElement;
    if (target) {
      target.style.display = display;
    }
  });
  const mainbodyList = document.querySelectorAll<HTMLElement>(
    `#mw-content-text div.bwiki-collection.checked`
  );
  if (mainbodyList.length > 0) {
    const realList = Array.from(
      mainbodyList[0].parentElement?.children ?? []
    ) as HTMLElement[];
    mainbodyList.forEach((el) => {
      const index = realList.indexOf(el);
      el.style.display = display;
      if (index >= 0) {
        for (let i = index + 1; i < realList.length; i++) {
          const child = realList[i];
          if (!child.classList.contains('bwiki-collection')) {
            child.style.display = display;
          } else {
            break;
          }
        }
      }
    });
  }
};
