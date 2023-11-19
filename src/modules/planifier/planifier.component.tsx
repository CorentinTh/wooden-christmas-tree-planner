import { Component, createMemo } from 'solid-js';

import { createStoredSignal } from '../shared/signals/signals.models';
import { NumberInput } from '../ui/input';
import { Visualizer } from './components/tree-visualizer';
import { formatLength } from './planifier.models';
import { getChristmasTreeWoodDimensions } from './planifier.usecases';

const GOLDEN_RATIO = 0.618;

export const Planifier: Component = () => {
  const [getTreeHeight, setTreeHeight] = createStoredSignal('planifier:tree-height', 120);
  const [getTreeBaseDiameter, setTreeBaseDiameter] = createStoredSignal('planifier:tree-base-diameter', getTreeHeight() * GOLDEN_RATIO);
  const [getBattenHeight, setBattenHeight] = createStoredSignal('planifier:batten-height', 10);
  const [getSeparatorHeight, setSeparatorHeight] = createStoredSignal('planifier:separator-height', 0);

  const res = createMemo(() =>
    getChristmasTreeWoodDimensions({
      battenHeight: getBattenHeight(),
      separatorHeight: getSeparatorHeight(),
      treeBaseDiameter: getTreeBaseDiameter(),
      treeHeight: getTreeHeight(),
    }),
  );

  return (
    <div flex gap-2 flex flex-col md:flex-row items-start>
      <div min-w-600px flex gap-2 flex-col>
        <div flex items-center gap-4>
          <div w-150px>Tree height:</div>
          <NumberInput value={getTreeHeight()} onInput={setTreeHeight} min={1} placeholder="ex: 120" />
          <div text-sm>{`Golden ratio from diameter: ${formatLength(getTreeBaseDiameter() / GOLDEN_RATIO)}`}</div>
        </div>

        <div flex items-baseline gap-4>
          <div w-150px>Tree base diameter:</div>
          <NumberInput value={getTreeBaseDiameter()} onInput={setTreeBaseDiameter} min={1} placeholder="ex: 60" />
          <div text-sm>{`Golden ratio from height: ${formatLength(getTreeHeight() * GOLDEN_RATIO)}`}</div>
        </div>

        <div flex items-baseline gap-4>
          <div w-150px>Batten height:</div>
          <NumberInput value={getBattenHeight()} onInput={setBattenHeight} min={1} placeholder="ex: 10" />
        </div>
        <div flex items-baseline gap-4 mb-5>
          <div w-150px>Separator height:</div>
          <NumberInput value={getSeparatorHeight()} onInput={setSeparatorHeight} min={0} placeholder="ex: 0" />
        </div>

        <div flex gap-4>
          <div w-150px>Total batten length:</div>
          {formatLength(res().totalBattenLength)}
        </div>
        <div flex gap-4>
          <div w-150px>Batten count:</div>
          {res().battenCount}
        </div>
        <div flex gap-4>
          <div w-150px>Reduce step:</div>
          {formatLength(res().reduceStep)}
        </div>
        <div flex gap-4>
          <div w-150px>Real tree height:</div>
          {formatLength(res().realTreeHeight)}
        </div>
        <div flex gap-4>
          <div w-150px>Separator count:</div>
          {res().battenDetails.length - 1} pieces x {formatLength(getSeparatorHeight())} height
        </div>
      </div>

      <Visualizer {...res()} treeBaseDiameter={getTreeBaseDiameter()} treeHeight={getTreeHeight()} separatorHeight={getSeparatorHeight()} battenHeight={getBattenHeight()} flex-1 />
    </div>
  );
};
