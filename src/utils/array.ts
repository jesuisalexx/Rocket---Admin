export enum shiftDirection {
  FORWARD = 'forward',
  BACK = 'back',
}

export const getValuesByShift = (
  array: any[],
  point: number,
  shiftLength: number,
  direction: shiftDirection = shiftDirection.BACK,
): any[] => {
  let points = [];
  if (direction === shiftDirection.BACK) {
    const tailPeak = point + shiftLength;
    points = array.slice(point, tailPeak);
    if (array.length < tailPeak) {
      points = [
        ...points,
        ...array.slice(0, -(array.length - tailPeak)),
      ];
    }
  }

  return points;
};

export const onlyUnique = (arr: any[]) => {
  const callBack = (
    value: any,
    index: number,
    self: any,
  ) => self.indexOf(value) === index;
  return arr.filter(callBack);
};
