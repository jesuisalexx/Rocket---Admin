import { getBezierCurve } from '@/utils/math';

export const mutateToSvgLines = (
  dots: number[][],
) => dots.map(([x, y]) => `L${x} ${y}`);

export const fillPathPart = (
  el: HTMLElement,
  segments: string[],
  peak: number,
) => {
  const d = `${segments[0].replace('L', 'M')} ${segments.slice(0, peak).join(' ')}`;
  el.setAttribute('d', d);
};

export const setAlongPath = (
  el: HTMLElement,
  tailPeaks: string[],
) => {
  const d = `${tailPeaks[0].replace('L', 'M')} ${tailPeaks.join(' ')}`;
  el.setAttribute('d', d);
};

export const setGradient = (
  el: HTMLElement,
  startPoint: string,
  endPoint: string,
) => {
  const xy1 = startPoint.replace('L', '').split(' ');
  const xy2 = endPoint.replace('L', '').split(' ');

  el.setAttribute('x1', xy1[0]);
  el.setAttribute('y1', xy1[1]);
  el.setAttribute('x2', xy2[0]);
  el.setAttribute('y2', xy2[1]);
};

export const setCircle = (
  el: HTMLElement,
  segments: number[][],
  peak: number,
  radius: string,
) => {
  const position = segments[peak];
  el.setAttribute('cx', String(position[0]));
  el.setAttribute('cy', String(position[1]));
  el.setAttribute('r', radius);
};

// TODO: make it work
// const convertToPathLines = (dAttributeData: string, step = 0.005) => {
//   const pathElements: string[] = dAttributeData.split(/(?=[MLlHhVvCc])/g);
//
//   const result = pathElements.reduce((acc, point) => {
//     const pointType = point[0];
//     const points: number[][] = point
//       .slice(1)
//       .split(' ')
//       .map((num) => Number(num))
//       .reduce((acc: number[][], point) => {
//         const lastArr = acc[acc.length - 1];
//         if (lastArr.length < 2) {
//           lastArr.push(point);
//         } else {
//           return [
//             ...acc,
//             [point],
//           ];
//         }
//         return acc;
//       }, [[]]);
//     const lastPoint = acc[acc.length - 1];
//
//     // console.log(points);
//     // debugger;
//
//     if (pointType === 'M') {
//       return points;
//     }
//     if (pointType === 'L') {
//       return [
//         ...acc,
//         ...getBezierCurve(points, step),
//       ];
//     }
//     if (pointType === 'C') {
//       return [
//         ...acc,
//         ...getBezierCurve(points, step / 5),
//       ];
//     }
//     if (pointType === 'V') {
//       return [
//         ...acc,
//         ...getBezierCurve([
//           lastPoint,
//           [
//             ...points[0],
//             lastPoint[0],
//           ],
//         ], step),
//       ];
//     }
//     if (pointType === 'H') {
//       return [
//         ...acc,
//         ...getBezierCurve([
//           lastPoint,
//           [
//             ...points[0],
//             lastPoint[1],
//           ],
//         ], step),
//       ];
//     }
//     return acc;
//   }, []);
//   return result;
// };
