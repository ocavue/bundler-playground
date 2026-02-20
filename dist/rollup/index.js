const shared = 1;
var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["ONE"] = 1] = "ONE";
    MyEnum[MyEnum["TWO"] = 2] = "TWO";
    MyEnum[MyEnum["THREE"] = 3] = "THREE";
})(MyEnum || (MyEnum = {}));
var MyConstEnum;
(function (MyConstEnum) {
    MyConstEnum[MyConstEnum["Four"] = 4] = "Four";
    MyConstEnum[MyConstEnum["Five"] = 5] = "Five";
    MyConstEnum[MyConstEnum["Six"] = 6] = "Six";
})(MyConstEnum || (MyConstEnum = {}));
function functionThatUsesEnumsShared() {
    console.log(MyEnum.TWO);
    console.log(MyConstEnum.Five);
}

/**
 * JSDoc comment for the variable a
 */
const a = 1;
function functionThatUsesEnumsIndex() {
    console.log(MyEnum.ONE);
    console.log(MyConstEnum.Four);
}

export { MyConstEnum, MyEnum, a, functionThatUsesEnumsIndex, functionThatUsesEnumsShared, shared };
