import { MyConstEnum, MyEnum } from './shared.js';

/**
 * JSDoc comment for the variable a
 */
export const a = 1;


/**
 * JSDoc comment for the interface Person
 */
export interface Person {
    name: string;
    age: number;
}

export { shared, MyEnum, MyConstEnum, functionThatUsesEnumsShared } from './shared.js';

export function functionThatUsesEnumsIndex() {
    console.log(MyEnum.ONE);
    console.log(MyConstEnum.Four);
}
