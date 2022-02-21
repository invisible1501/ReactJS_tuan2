//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
      id: 1,
      firtName: 'A',
      lastName: 'Nguyen',
      className: 'CGO-RJ2201R1',
      grade: 'C'
  },
  {
      id: 2,
      firtName: 'B',
      lastName: 'Tran',
      className: 'CGO-RJ2201R1',
      grade: 'D'
  },
  {
      id: 3,
      firtName: 'C',
      lastName: 'Dinh',
      className: 'CGO-RJ2201R1',
      grade: 'A'
  },
  {
      id: 4,
      firtName: 'D',
      lastName: 'Le',
      className: 'CGO-RJ2201R1',
      grade: 'B'
  },
  {
      id: 5,
      firtName: 'D',
      lastName: 'Hoang',
      className: 'CGO-RJ2201R1',
      grade: 'F'
  },
  {
      id: 6,
      firtName: 'E',
      lastName: 'Pham',
      className: 'CGO-RJ2201R1',
      grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
traineeIterator.forEach(trainee => {
  console.log(`${trainee.firtName} ${trainee.lastName}`);
})



//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
traineeIterator.forEach(trainee => {
  console.log(`${trainee.firtName} ${trainee.lastName} / ${trainee.grade}`);
})



//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *
const expectedTraineeArray = traineeIterator.map(trainee => ({
  newId: trainee.className + "-" + trainee.id,
  fullName: trainee.firtName + " " + trainee.lastName,
  rank: trainee.grade
}))

console.log(expectedTraineeArray);


//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *

const gradeTrainee = grade => {
  let rank = "";
  switch(grade) {
      case 'A':
          rank = 'Excellent';
          break;
      case 'B': 
          rank = 'Good';
          break;
      case 'C': 
          rank = 'Medium';
          break;
      case 'D':
          rank = 'Weak';
          break;
      case 'E': 
          rank = 'Poor';
          break;
      case 'F': 
          rank = 'Disbanded';
          break;
  }
  return rank;
}

const newTraineeArray = traineeIterator.map(trainee => ({
  id: trainee.id,
  codeName: trainee.className + " - " + trainee.firtName + " " + trainee.lastName,
  classification: gradeTrainee(trainee.grade)
}))

console.log(newTraineeArray);




//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *
underBTrainee = traineeIterator.filter(trainee => trainee.grade > 'B');

console.log(underBTrainee);



//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *
underCTrainee = traineeIterator.filter(trainee => trainee.grade < 'C')
if(underCTrainee.length >= (traineeIterator.length * 0.5)) alert("Effective training!");
else if(underCTrainee.length <= (traineeIterator.length * 0.3)) alert("Average training!");
else if(underCTrainee.length == 0) alert("Failed training!");




//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
const ATrainee = traineeIterator.filter(trainee => trainee.grade == 'A').map(trainee => ({
  fullName: trainee.firtName + " " + trainee.lastName
}))

ATrainee.forEach(A => alert(A.fullName));


//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *
const FTrainee = traineeIterator.filter(trainee => trainee.grade == 'F').map(trainee => ({
  fullName: trainee.firtName + " " + trainee.lastName
}))

FTrainee.forEach(F => alert(F.fullName));



//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *
const arrGrade = [];

traineeIterator.forEach(trainee => 
  arrGrade.push(trainee.grade)
);

const stringGrade = arrGrade.reduce((stringGrade, currentGrade) => {
  return stringGrade + currentGrade;
});

console.log(stringGrade);



//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *
let input = 5;
let arr = [];

while(input > 0) {
  arr.push(input);
  input--;
}

const reducer = (res, current) => res *= current;

//const result = arr.reduce(reducer = (res, current) => res *= current);
const result = arr.reduce(reducer);

console.log(result);



//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *