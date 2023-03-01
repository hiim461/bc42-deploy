//export default: 
// -  1 module chỉ có thể export default 1 lần
// - Nếu export default, khi ta import có thể đặt tên biến tùy ý và không cần dấu {}

export default class Student {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
