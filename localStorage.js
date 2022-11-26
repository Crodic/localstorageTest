// var account = JSON.parse(localStorage.getItem('account'))// Lấy dữ liệu từ key có tên là account và chuyển dữ liệu sang 1 mảng

function submit(accountName,pass) {
    var object = []
    var accountName = document.getElementById("name").value
    var pass = document.getElementById("pass").value
    if(JSON.parse(localStorage.getItem(accountName))){ //Kiểm tra xem có giá trị của accountName trong localStorage hay không
        window.location.href="login.html"
    }else{
        alert("Tài khoản không tồn tại")
    }
}
function remove(){
    var removeAccount=document.getElementById("remove").value
    if(JSON.parse(localStorage.getItem(removeAccount))){
        localStorage.removeItem(removeAccount)//Nếu có giá trị của removeAccount trong localStorage thì xoá bằng removeItem
    }else{
        alert('tài khoản đã xoá hoặc không tồn tại')
    }
}
function signIn(accountSign,passSign,passCheckSign){
    var accountSign=document.getElementById("accountSign").value
    var passSign=document.getElementById("accountPass").value
    var passCheckSign=document.getElementById("accountCheckPass").value
    if(passSign!=passCheckSign || localStorage.getItem(accountSign)!==null){ //Nếu accountSign không tồn tại trong danh sách thì sẽ trả về null và ngược lại
        alert("Mật khẩu không trùng khớp")
    }else{
        var object = []
        var d = { name: accountSign, password: passSign }
        object.push(d)
        localStorage.setItem(accountSign, JSON.stringify(object)) //Thêm đối tượng vào localStorage với "JSON.stringify(object) chuyển sang 1 chuổi JSON có kiểu string"
    }
}