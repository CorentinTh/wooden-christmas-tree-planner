import { Component, mergeProps } from 'solid-js';

export const Switch: Component<{ onInput?: (v: boolean) => void; value?: boolean; label?: string }> = (defaultProps) => {
  const props = mergeProps({ id: Math.random().toString(36).slice(2) }, defaultProps);

  return (
    <label class="relative inline-flex items-center mb-5 cursor-pointer">
      <input type="checkbox" value="" class="sr-only peer" id={props.id} checked={props.value} onInput={(e) => props.onInput?.((e.target as HTMLInputElement).checked)} />
      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ms-3 text-sm font-medium ">{props.label}</span>
    </label>
  );
};
