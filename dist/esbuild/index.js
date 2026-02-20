// src/shared.ts
var shared = 1;
var MyEnum = /* @__PURE__ */ ((MyEnum2) => {
  MyEnum2[MyEnum2["ONE"] = 1] = "ONE";
  MyEnum2[MyEnum2["TWO"] = 2] = "TWO";
  MyEnum2[MyEnum2["THREE"] = 3] = "THREE";
  return MyEnum2;
})(MyEnum || {});
var MyConstEnum = /* @__PURE__ */ ((MyConstEnum2) => {
  MyConstEnum2[MyConstEnum2["Four"] = 4] = "Four";
  MyConstEnum2[MyConstEnum2["Five"] = 5] = "Five";
  MyConstEnum2[MyConstEnum2["Six"] = 6] = "Six";
  return MyConstEnum2;
})(MyConstEnum || {});
function functionThatUsesEnumsShared() {
  console.log(2 /* TWO */);
  console.log(5 /* Five */);
}

// src/index.ts
var a = 1;
function functionThatUsesEnumsIndex() {
  console.log(1 /* ONE */);
  console.log(4 /* Four */);
}
export {
  MyConstEnum,
  MyEnum,
  a,
  functionThatUsesEnumsIndex,
  functionThatUsesEnumsShared,
  shared
};
