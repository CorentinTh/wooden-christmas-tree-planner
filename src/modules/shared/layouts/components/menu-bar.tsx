import { Component } from 'solid-js';
import { styleStore } from '../../../ui/style.store';

export const MenuBar: Component = () => {
  return (
    <div py-10px border-b="solid 1px dark:surface #eee">
      <div max-w-5xl px-16px mx-auto flex justify-between items-center>
        <span text-md font-bold text-gray-800 dark:text-white>
          Wooden Christmas tree planner
        </span>

        <div flex gap-2>
          <div i-tabler:sun-moon class="w-20px h-20px inline-block cursor-pointer" onClick={() => styleStore.toggleTheme()} />

          <a href="https://github.com/CorentinTh/wooden-christmas-tree-planner" target="_blank" rel="noopener noreferrer" class="no-decoration text-current" flex>
            <div i-tabler:brand-github class="w-20px h-20px inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};
