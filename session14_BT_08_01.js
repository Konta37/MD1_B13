let a = prompt("Nhập từ cần tìm kiếm");
let b = ["hi", "bye", "hello"];
let c = ["chào","tạm biệt","vui"]
for (let i = 0; i < b.length; i++) {
    if (a==b[i]) {
        document.write(`Từ bạn nhập "${a}" giống với phần tử thứ ${b[i]} và ${c[i]}`)
        break;
    }
}