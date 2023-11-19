import { ParentComponent, mergeProps } from 'solid-js';

export const Link: ParentComponent<{ href: string; target?: string; rel?: string }> = (defaultProps) => {
  const props = mergeProps({ target: '_blank', rel: 'noopener noreferrer' }, defaultProps);

  return (
    <a class="text-current no-underline" href={props.href} target={props.target} rel={props.rel} border-b="dashed 1px gray" hover:color-primary transition>
      {props.children}
    </a>
  );
};
