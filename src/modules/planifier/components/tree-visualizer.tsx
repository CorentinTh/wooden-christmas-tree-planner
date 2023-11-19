import { Component, createSignal, onMount } from 'solid-js';
import { createStoredSignal } from '../../shared/signals/signals.models';
import { Switch } from '../../ui/switch';
import { formatLength } from '../planifier.models';

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
  const [getShowValuesInTree, setShowValuesInTree] = createStoredSignal('show-length', true);

  let wrapperElement: HTMLDivElement | undefined = undefined;
  const cmToPixel = (cm: number) => (cm / props.treeBaseDiameter) * Math.min(getWrapperWidth(), 200);

  onMount(() => {
    setWrapperWidth(wrapperElement?.clientWidth ?? 0);
  });

  window.addEventListener('resize', () => {
    setWrapperWidth(wrapperElement?.clientWidth ?? 0);
  });

  return (
    <div w-full>
      <Switch label="Show values in tree" value={getShowValuesInTree()} onInput={setShowValuesInTree} />

      <div flex items-stretch>
        <div flex justify-center items-center border-l="solid 1px" border-y="solid 1px" pa-16px>
          {props.realTreeHeight}cm
        </div>
        <div flex-1 flex flex-col jussify-center items-center ref={wrapperElement}>
          {props.battenDetails.map(({ width }, i) => (
            <>
              <div
                style={{ width: `${cmToPixel(width)}px`, height: `${cmToPixel(props.battenHeight)}px` }}
                class="text-gray bg-surface border border-white my-2px w-full whitespace-nowrap flex items-center text-xs px-6px py-2px"
              >
                {getShowValuesInTree() && `↔ ${formatLength(width)}; ↕ ${formatLength(props.battenHeight)}`}
              </div>
              {props.separatorHeight > 0 && i < props.battenDetails.length - 1 && (
                <div class="text-gray my-2px text-xs flex items-center" style={{ height: `${cmToPixel(props.separatorHeight)}px` }}>
                  {getShowValuesInTree() && `↕ ${formatLength(props.separatorHeight)}`}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
