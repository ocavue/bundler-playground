export const shared = 1;

export enum MyEnum {
    ONE = 1,
    TWO = 2,
    THREE = 3,
}

export const enum  MyConstEnum {
    Four = 4,
    Five = 5,
    Six = 6,
}

export function functionThatUsesEnumsShared() {
    console.log(MyEnum.TWO);
    console.log(MyConstEnum.Five);
}
