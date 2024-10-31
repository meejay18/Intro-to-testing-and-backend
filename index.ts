export const addUp = (a: number, b: number) => {
  return a + b;
};

export const nameFunction: any = () => {
  let name = "John";
  console.log(name);
};
nameFunction();

export const viewName = (name: string) => {
  return name;
};

export const number = (number: number): number => {
  return number - number;
};
console.log(number(1));

interface iprops {
  name: string;
  id: number;
}
export const objData = (name: string): iprops => {
  return { name, id: 3 };
};

export const extract = (name: string): string => {
  return `${name}`;
};

let list = [];

// export const students = (name: string, age: number, grade: string): any => {
//   let added = list.push(name, age, grade);
//   return added;
// };
// students("mije", 20, "A");

let student: Array<string> = ["mije", "gideon"];

export const newStudent = (name: string): Array<string> => {
  let x = [...student, name];

  return x;
};

console.log(newStudent("sam"));

// let num = Array<number> = 701

// export const reverseTest = (test: number) : number

export const dataFn = (numb: number): number => {
  return parseInt(numb.toString().split("").reverse().join(""));
};
console.log(dataFn(227));
