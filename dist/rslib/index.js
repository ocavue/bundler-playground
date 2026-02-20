var shared_MyEnum = /*#__PURE__*/ function(MyEnum) {
    MyEnum[MyEnum["ONE"] = 1] = "ONE";
    MyEnum[MyEnum["TWO"] = 2] = "TWO";
    MyEnum[MyEnum["THREE"] = 3] = "THREE";
    return MyEnum;
}({});
var shared_MyConstEnum = /*#__PURE__*/ function(MyConstEnum) {
    MyConstEnum[MyConstEnum["Four"] = 4] = "Four";
    MyConstEnum[MyConstEnum["Five"] = 5] = "Five";
    MyConstEnum[MyConstEnum["Six"] = 6] = "Six";
    return MyConstEnum;
}({});
function functionThatUsesEnumsShared() {
    console.log(2);
    console.log(5);
}
const a = 1;
function functionThatUsesEnumsIndex() {
    console.log(shared_MyEnum.ONE);
    console.log(shared_MyConstEnum.Four);
}
var src_shared = 1;
export { a, functionThatUsesEnumsIndex, functionThatUsesEnumsShared, shared_MyConstEnum as MyConstEnum, shared_MyEnum as MyEnum, src_shared as shared };
