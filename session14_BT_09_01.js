let todoList = ["Go to bed at 11pm","Do homework at 8pm "];
console.log(todoList);
todoList.push("New todo");
document.write(`Sử dụng thêm tại vị trí cuối <br>`)
for (let i = 0; i < todoList.length; i++) {
    document.write(`${i+1}. ${todoList[i]}<br>`)
}
let a = parseInt(prompt(`bạn muốn thay phần tử nào trong các phần tử "${todoList}" này. Nhập số`))-1;
let b = prompt(`Nội dung bạn muốn thay đổi là`);
todoList[a] = b;
document.write(`Sử dụng thay đổi tại vị trí ${a}<br>`)
for (let i = 0; i < todoList.length; i++) {
    document.write(`${i+1}. ${todoList[i]}<br>`)
}
let c = parseInt(prompt(`bạn muốn xoá phần tử nào trong các phần tử "${todoList}" này. Nhập số`))-1;
document.write(`Sử dụng xoá tại vị trí ${c} là phần tử ${todoList[c]}<br>`)
todoList.splice(c,1);
for (let i = 0; i < todoList.length; i++) {
    document.write(`${i+1}. ${todoList[i]}<br>`)
}