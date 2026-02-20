export const shared = 1;
export var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["ONE"] = 1] = "ONE";
    MyEnum[MyEnum["TWO"] = 2] = "TWO";
    MyEnum[MyEnum["THREE"] = 3] = "THREE";
})(MyEnum || (MyEnum = {}));
export var MyConstEnum;
(function (MyConstEnum) {
    MyConstEnum[MyConstEnum["Four"] = 4] = "Four";
    MyConstEnum[MyConstEnum["Five"] = 5] = "Five";
    MyConstEnum[MyConstEnum["Six"] = 6] = "Six";
})(MyConstEnum || (MyConstEnum = {}));
export function functionThatUsesEnumsShared() {
    console.log(MyEnum.TWO);
    console.log(MyConstEnum.Five);
}
