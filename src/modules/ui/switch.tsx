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

{
  /* <div class="flex items-center">
      <input
        type="checkbox"
        id={props.id}
        checked={props.value}
        onInput={(e) => props.onInput?.((e.target as HTMLInputElement).checked)}
        class="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
      />
      <label for={props.id} class="text-sm text-gray-500 ms-3 dark:text-gray-400">
        {props.label}
      </label>
    </div> */
}
