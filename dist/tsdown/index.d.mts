//#region src/shared.d.ts
declare const shared = 1;
declare enum MyEnum {
  ONE = 1,
  TWO = 2,
  THREE = 3
}
declare const enum MyConstEnum {
  Four = 4,
  Five = 5,
  Six = 6
}
declare function functionThatUsesEnumsShared(): void;
//#endregion
//#region src/index.d.ts
/**
 * JSDoc comment for the variable a
 */
declare const a = 1;
/**
 * JSDoc comment for the interface Person
 */
interface Person {
  name: string;
  age: number;
}
declare function functionThatUsesEnumsIndex(): void;
//#endregion
export { MyConstEnum, MyEnum, Person, a, functionThatUsesEnumsIndex, functionThatUsesEnumsShared, shared };