import { describe, expect, test } from 'vitest';
import { getChristmasTreeWoodDimensions } from './planifier.usecases';

describe('planifier usecases', () => {
  describe('getChristmasTreeWoodDimensions', () => {
    test('the amount of battens that is needed to build a christmas tree given its height and base diameter and the space between each batten', () => {
      expect(
        getChristmasTreeWoodDimensions({
          treeHeight: 100,
          treeBaseDiameter: 100,
          battenHeight: 10,
        }),
      ).toEqual({
        battenCount: 10,
        reduceStep: 10,
        battenWidths: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
        totalBattenLength: 550,
      });

      expect(
        getChristmasTreeWoodDimensions({
          treeHeight: 100,
          treeBaseDiameter: 100,
          battenHeight: 10,
          separatorHeight: 5,
        }),
      ).toEqual({
        battenCount: 10,
        reduceStep: 10,
        battenWidths: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
        totalBattenLength: 550,
      });
    });
  });
});
