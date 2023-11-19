export { getChristmasTreeWoodDimensions };

function getChristmasTreeWoodDimensions({
  treeHeight,
  treeBaseDiameter,
  battenHeight,
  separatorHeight = 0,
}: {
  treeHeight: number;
  treeBaseDiameter: number;
  battenHeight: number;
  separatorHeight?: number;
}) {
  const battenCount = Math.floor((treeHeight + separatorHeight) / (battenHeight + separatorHeight));
  const reduceStep = treeBaseDiameter / battenCount;
  const battenDetails = Array.from({ length: battenCount }, (_, i) => {
    const battenWidth = treeBaseDiameter - i * reduceStep;
    const ratio = battenWidth / treeBaseDiameter;

    return {
      width: battenWidth,
      ratio,
    };
  }).reverse();
  const totalBattenLength = battenDetails.reduce((acc, { width }) => acc + width, 0);

  return {
    battenDetails,
    battenCount,
    reduceStep: reduceStep,
    totalBattenLength,
    realTreeHeight: battenCount * battenHeight + (battenCount - 1) * separatorHeight,
  };
}
