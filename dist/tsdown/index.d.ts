//#region src/shared.d.ts
declare const shared = 1;
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
//#endregion
export { Person, a, shared };