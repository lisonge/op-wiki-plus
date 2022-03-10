import { merge } from 'lodash';
import { reactive, watch } from 'vue';

const key = 'op-wiki-plus:config';

type GlobalConfig = {
  achievementVisibility: boolean;
};

const defaultConfig: GlobalConfig = {
  achievementVisibility: true,
};

export const globalConfig = reactive<GlobalConfig>(
  merge(JSON.parse(localStorage.getItem(key) ?? '{}'), defaultConfig)
);

watch(
  () => globalConfig,
  (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  },
  { deep: true }
);
