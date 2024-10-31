export const firstTest = (name: string): string => {
  return name;
};

console.log(firstTest("Meejay"));

export const secondTest = (el: number, ef: number): number => {
  return el - ef;
};

console.log(secondTest(-7, -2));

export const thirdTest = (el: boolean): boolean => {
  return (el = false);
};

export const fourthTest = (el: null): null => {
  return (el = null);
};

export const fifthTest = (el: undefined): undefined => {
  return (el = undefined);
};
