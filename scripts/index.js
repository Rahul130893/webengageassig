document.getElementById("myform").addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {};

  obj.email = document.getElementById("email").value;
  obj.code = document.getElementById("code").value;
  obj.mobile = document.getElementById("mobile").value;

  if (obj.mobile.length != 10) {
    alert("Enter valid mobile");
    return;
  } else if (obj.code == "") {
    alert("select country code");
    return;
  }

  localStorage.setItem("details", JSON.stringify(obj));

  window.location.href = "thanku.html";
});
