//export: Khai báo để các module khác có thể gọi tới để sử dụng biến/hàm này
//Tên trong cặp dấu {} khi inport vào phải truyền đúng tên khai báo ở export(điểm này khác với export deafault)
// - 1 module có thể export nhiều biến/ hàm
// - Khi ta import cần đặt trong dấu {} và tên biến phải giống với tên đã export

export const PI = 3.14;

export function circleArea(r) {
  return PI * r ** 2;
}

export const MAX = 9999;
