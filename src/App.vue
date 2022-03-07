<script setup lang="ts">
const switchShowStatus = (show = true) => {
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
</script>

<template>
  <div class="root-1fdb449b">
    <div @click="switchShowStatus(true)">显示已完成成就</div>
    <div @click="switchShowStatus(false)">隐藏已完成成就</div>
  </div>
</template>

<style scoped lang="scss">
.root-1fdb449b {
  color: black;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  & > div {
    background-color: darkgrey;
    cursor: pointer;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
