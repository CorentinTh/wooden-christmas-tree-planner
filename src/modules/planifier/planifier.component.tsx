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
  const [getBattenHeight, setBattenHeight] = createStoredSignal('planifier:batten-height', 4);
  const [getSeparatorHeight, setSeparatorHeight] = createStoredSignal('planifier:separator-height', 2);

  const res = createMemo(() => {
    if (!getTreeHeight() || !getTreeBaseDiameter() || !getBattenHeight())
      return {
        totalBattenLength: 0,
        battenCount: 0,
        reduceStep: 0,
        realTreeHeight: 0,
        battenDetails: [],
      };

    return getChristmasTreeWoodDimensions({
      battenHeight: getBattenHeight(),
      separatorHeight: getSeparatorHeight() ?? 0,
      treeBaseDiameter: getTreeBaseDiameter(),
      treeHeight: getTreeHeight(),
    });
  });

  return (
    <div>
      <div flex gap-4 flex flex-col md:flex-row md:items-start items-center>
        <div flex-1 flex flex-col gap-2>
          <div flex items-center gap-4>
            <div w-200px>
              Tree height:
              <div text-xs op-60>{`Golden ratio of diameter: ${formatLength(getTreeBaseDiameter() / GOLDEN_RATIO)}`}</div>
            </div>
            <NumberInput value={getTreeHeight()} onInput={setTreeHeight} min={1} placeholder="ex: 120" />
          </div>

          <div flex items-center gap-4>
            <div w-200px>
              Tree base diameter:
              <div text-xs op-60>{`Golden ratio of height: ${formatLength(getTreeHeight() * GOLDEN_RATIO)}`}</div>
            </div>
            <NumberInput value={getTreeBaseDiameter()} onInput={setTreeBaseDiameter} min={1} placeholder="ex: 60" />
          </div>

          <div flex items-baseline gap-4>
            <div w-200px>Batten height:</div>
            <NumberInput value={getBattenHeight()} onInput={setBattenHeight} min={1} placeholder="ex: 10" />
          </div>
          <div flex items-baseline gap-4 mb-5>
            <div w-200px>Separator height:</div>
            <NumberInput value={getSeparatorHeight()} onInput={setSeparatorHeight} min={0} placeholder="ex: 0" />
          </div>

          <div flex gap-4>
            <div w-200px>Total batten length:</div>
            {formatLength(res().totalBattenLength)}
          </div>
          <div flex gap-4>
            <div w-200px>Batten count:</div>
            {res().battenCount}
          </div>
          <div flex gap-4>
            <div w-200px>Reduce step:</div>
            {formatLength(res().reduceStep)}
          </div>
          <div flex gap-4>
            <div w-200px>Final tree height:</div>
            {formatLength(res().realTreeHeight)}
          </div>
          <div flex gap-4>
            <div w-200px>Separators:</div>
            {res().battenDetails.length - 1} pieces x {formatLength(getSeparatorHeight())}
          </div>
        </div>

        <Visualizer flex-grow-0 {...res()} treeBaseDiameter={getTreeBaseDiameter()} treeHeight={getTreeHeight()} separatorHeight={getSeparatorHeight()} battenHeight={getBattenHeight()} />
      </div>

      <div mt-4>
        <div>Batten lengths:</div>
        <div text-xs grid grid-cols-2 md:grid-cols-5 sm:grid-cols-4>
          {res().battenDetails.map(({ width }, i) => (
            <div p-l-16px>
              - {formatLength(width)}
              <span op-50>, half: {formatLength(width / 2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
