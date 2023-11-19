import { Component } from 'solid-js';
import { Link } from '../../../ui/link';

export const Footer: Component = () => {
  return (
    <div class="flex justify-center items-center mt-30px py-30px text-sm" border-t="solid 1px dark:surface #eee">
      <div class="flex flex-col gap-2 items-center">
        <div class="flex gap-2 items-center justify-center">
          <Link href="https://github.com/CorentinTh/wooden-christmas-tree-planner">Github</Link>
          <span op-30>|</span>

          <Link href="https://www.buymeacoffee.com/cthmsst">Support me</Link>
        </div>
        <div>
          Made with <span i-tabler:heart inline-block mb--2px /> by <Link href="https://github.com/CorentinTh">Corentin Thomasset</Link>
        </div>
      </div>
    </div>
  );
};
