let a = prompt("Nhập 245468");
let b =[]
for (let i = 0; i < a.length; i++) {
    if (a[i]%2==0&&a[i+1]%2==0) {
        b[i] = a[i]+"-";
    }
    else
    b[i]=a[i];
}
for (let i = 0; i < b.length; i++) {
    document.write(b[i]);

}