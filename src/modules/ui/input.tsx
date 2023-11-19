import { Component, mergeProps } from 'solid-js';

// <div flex items-baseline>
//   <button class="flex-0 bg-surface border  text-white font-mono outline-none focus:border-primary hover:bg-primary border-r-0" onClick={() => props.onInput?.((props.value ?? 0) - 1)}>
//     -
//   </button>
//   <input
//     type="number"
//     id={props.id}
//     class="flex-1 bg-surface font-mono text-white outline-none focus:border-primary min-w-80px"
//     placeholder={props.placeholder}
//     min={props.min ?? 0}
//     max={props.max ?? 100}
//     value={props.value}
//     onInput={(e) => props.onInput?.(Number((e.target as HTMLInputElement).value))}
//   />
//   <button class="flex-0 bg-surface border text-white font-mono outline-none focus:border-primary border-l-0 hover:bg-primary" onClick={() => props.onInput?.((props.value ?? 0) + 1)}>
//     +
//   </button>
// </div>

export const NumberInput: Component<{ onInput?: (v: number) => void; value?: number; placeholder?: string; min?: number; max?: number; id?: string }> = (defaultProps) => {
  const props = mergeProps({ id: Math.random().toString(36).slice(2) }, defaultProps);

  return (
    <div class="py-2 px-3 bg-gray-100 rounded-lg dark:bg-surface max-w-160px">
      <div class="w-full flex justify-between items-center gap-x-5">
        <div class="grow">
          <input
            class="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white outline-none"
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onInput={(e) => props.onInput?.(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div class="flex justify-end items-center gap-x-1.5">
          <button
            type="button"
            class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-background dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer"
            onClick={() => props.onInput?.((props.value ?? 0) - 1)}
          >
            <svg
              class="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <button
            type="button"
            class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-background dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer"
            onClick={() => props.onInput?.((props.value ?? 0) + 1)}
          >
            <svg
              class="flex-shrink-0 w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
