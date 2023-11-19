import { ParentComponent, mergeProps } from 'solid-js';

export const Button: ParentComponent<{ onClick?: () => void; label?: string; disabled?: boolean; type?: 'button' | 'submit' | 'reset' }> = (defaultProps) => {
  const props = mergeProps({ id: Math.random().toString(36).slice(2) }, defaultProps);

  return (
    <button
      type={props.type ?? 'button'}
      class="w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-background dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer"
      onClick={() => props.onClick?.()}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
