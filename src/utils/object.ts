export const getValueByPath = (
  object: Record<any, any>,
  chain: string,
): any => {
  const spittedChain = chain.split('.');
  return spittedChain.reduce((acc, field) => acc?.[field] || null, object);
};

export const setValueByPath = (
  object: Record<any, any>,
  chain: string,
  value: any,
) => {
  const spittedChain = chain.split('.');
  spittedChain.reduce((acc, field, index) => {
    if (spittedChain.length === (index + 1)) {
      acc[field] = value;
      return;
    }
    if (!acc[field]) {
      acc[field] = {};
    }
    return acc[field];
  }, object);
};

export const createObjectWithValues = (
  object: Record<any, any>,
  setValue: any,
): Record<any, any> => Object
  .entries(object)
  .reduce((acc, [key, value]) => ({
    ...acc,
    [key]: (typeof value === 'object' && value !== null)
      ? createObjectWithValues(value, setValue)
      : setValue,
  }), {});
