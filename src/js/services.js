//Thư viện axios dùng cú pháp require avf module.exports của Nodejs, nên ta không thể sử dụng cú pháp import của ES6 để sử dụng

// import axios from "./node_modules/axios/dist/esm/axios.js";
//Chỗ này chỉ cần khai báo thư viện axios
import axios from "axios";

const URL = "https://63f70b96e40e087c95866863.mockapi.io/api/N10/products";

export function getProducts() {
  return axios({
    method: "GET",
    url: URL,
  });
}

// import export // es6
//module.exports require // nodejs
