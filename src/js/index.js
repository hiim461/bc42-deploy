//import: Khai báo sử dụng các biến/ hàm từ các module khác

//export thường (tên trong {} phải trùng tên khai báo ở export)
import { PI, circleArea, MAX } from "../js/utils";

import { getProducts } from "./services.js";

//export default khai báo không cần cặp dấu {} và có thể khai báo với bất cứ cái tên nào cũng được
import Student from "./Student.js";
//tên Student ở trên có thể đặt bất cứ là gì

console.log(PI);
console.log("Diện tích hình tròn:", circleArea(6));

console.log(MAX);

// let MAX = 10;

const student = new Student("0001", "Nam", "nam@gmail.com");

getProducts().then((response) => console.log(response.data));

//============Lưu ý các câu lệnh npm:
//npm init 
//npm i ... (trên trang web npm)
//npm i(thường thì up lên git sẽ k có file node_modules, vì vậy khi tải từ git về cũng k có) do đó cần chạy npm i để tạo thư mục node_modules
