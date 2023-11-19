import { Component } from 'solid-js';
import { styleStore } from '../../../ui/style.store';

export const Footer: Component = () => {
  return (
    <div class="flex justify-center items-center mt-30px py-30px text-white text-sm" border-t="solid 1px surface">
      <div class="flex flex-col gap-2">
        <div class="flex gap-2">
          <a href="https://github.com/CorentinTh/wooden-christmas-tree-planifier" target="_blank" class="hover:underline text-white">
            Github
          </a>
          <span>|</span>
          <button class="hover:underline text-white" onClick={() => styleStore.toggleTheme()}>
            {styleStore.theme === 'dark' ? 'Light' : 'Dark'} mode
          </button>
        </div>
        <div>Made with ❤️ by Corentin Thomasset.</div>
      </div>
    </div>
  );
};
