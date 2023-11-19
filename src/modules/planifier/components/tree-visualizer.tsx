import { Component, createSignal, onMount } from 'solid-js';

export const Visualizer: Component<{
  battenDetails: { width: number; ratio: number }[];
  battenCount: number;
  reduceStep: number;
  totalBattenLength: number;
  treeBaseDiameter: number;
  treeHeight: number;
  separatorHeight: number;
  battenHeight: number;
  realTreeHeight: number;
}> = (props) => {
  // in percentage of the base diameter
  const [getWrapperWidth, setWrapperWidth] = createSignal(0);

  let wrapperElement: HTMLDivElement | undefined = undefined;
  const cmToPixel = (cm: number) => (cm / props.treeBaseDiameter) * Math.min(getWrapperWidth(), 200);

  onMount(() => {
    setWrapperWidth(wrapperElement?.clientWidth ?? 0);
  });

  window.addEventListener('resize', () => {
    setWrapperWidth(wrapperElement?.clientWidth ?? 0);
  });

  return (
    <div flex items-stretch>
      <div flex-1 flex flex-col items-center ref={wrapperElement} min-w-220px>
        {props.battenDetails.map(({ width }, i) => (
          <>
            <div
              style={{ width: `${cmToPixel(width)}px`, height: `${cmToPixel(props.battenHeight)}px` }}
              class=" bg-current op-50 rounded border border-white w-full whitespace-nowrap flex items-center"
            />
            {props.separatorHeight > 0 && i < props.battenDetails.length - 1 && <div class="my-2px flex items-center" style={{ height: `${cmToPixel(props.separatorHeight)}px` }} />}
          </>
        ))}
      </div>
    </div>
  );
};
