function kiemtra() {
  var a = document.getElementById("txtTNY").value;
  if(a.toLowerCase() == 'hà thị phúc'){
      document.getElementById('anh').style.display = 'block';
      document.getElementById('anh').style.transitionDelay= '5s';
  }
  else
  {
    alert('Có mỗi cái tên cũng không nhớ, nhập lại đi!')
  }

 
}
