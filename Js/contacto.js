
$(document).ready(() => {
  $("#miForm").submit(function (e) {
    e.preventDefault();
    $(".modalContacto").modal();
    document.getElementById("miForm").reset();
  });
});











