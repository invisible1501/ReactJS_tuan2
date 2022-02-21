//Cho các đối tượng sau
const obj = {
  id: 1,
  name: 'Trainer',
  age: 33,
  skills: ['Javascript', 'React', 'NextJS', 'Typescript']
};

const anotherObj = {
  id: 2,
  name: 'Trainee',
  age: 22,
  isFinite: false,
  isBeingTrained: true
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

const cloneObj1 = { ...obj };
const cloneAnotherObj1 = { ...anotherObj };
const cloneObj2 = Object.assign({}, obj);
const cloneAnotherObj2 = Object.assign({}, anotherObj);
const cloneObj3 = JSON.parse(JSON.stringify(obj));
const cloneAnotherObj3 = JSON.parse(JSON.stringify(anotherObj));
//const cloneObj4 = _.cloneDeep(obj);
//const cloneAnotherObj4 = _.cloneDeep(anotherObj);



//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ['React', 'Typescript'];
console.log(obj.skills);
// * YOUR ANSWER HERE *

//---------------------------
// Kết quả là ['React', 'Typescript'] vì copiedObj và obj đều trỏ cùng đến một vùng nhớ và ta đang thay đổi
// Giá trị vùng nhớ đó thông qua copiedObj nên truy cập bằng obj thì kết quả vẫn là giá trị đã thay đổi
//---------------------------



//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *

const merge1 = { ...obj, ...anotherObj };
const merge2 = Object.assign(obj, anotherObj);



//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
["whole numbers": [1 ,2 ,3 ,4]],
["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *

const mapEx4 = new Map([
  ["whole numbers", [1 ,2 ,3 ,4]],
  ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers", [-1, -2, -3, -4]]
])

const mapEx4_cach2 = new Map();
mapEx4_cach2.set("whole numbers", [1 ,2 ,3 ,4]);
mapEx4_cach2.set("Decimal numbers", [1.1, 1.2, 1.3, 1.4]);
mapEx4_cach2.set("negative numbers", [-1, -2, -3, -4]);




//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *

const mapEx5 = new Map();
for(let key in merge1) {
  mapEx5.set(key, merge1.key);
}