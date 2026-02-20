//#region src/shared.ts
const shared = 1;
let MyEnum = /* @__PURE__ */ function(MyEnum) {
	MyEnum[MyEnum["ONE"] = 1] = "ONE";
	MyEnum[MyEnum["TWO"] = 2] = "TWO";
	MyEnum[MyEnum["THREE"] = 3] = "THREE";
	return MyEnum;
}({});
let MyConstEnum = /* @__PURE__ */ function(MyConstEnum) {
	MyConstEnum[MyConstEnum["Four"] = 4] = "Four";
	MyConstEnum[MyConstEnum["Five"] = 5] = "Five";
	MyConstEnum[MyConstEnum["Six"] = 6] = "Six";
	return MyConstEnum;
}({});
function functionThatUsesEnumsShared() {
	console.log(MyEnum.TWO);
	console.log(MyConstEnum.Five);
}

//#endregion
//#region src/index.ts
/**
* JSDoc comment for the variable a
*/
const a = 1;
function functionThatUsesEnumsIndex() {
	console.log(MyEnum.ONE);
	console.log(MyConstEnum.Four);
}

//#endregion
export { MyConstEnum, MyEnum, a, functionThatUsesEnumsIndex, functionThatUsesEnumsShared, shared };