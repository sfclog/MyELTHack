// Xóa thuộc tính 'disabled' cho các nút trên trang web
function removeDisabled() {

  //tìm các nút hiện đáp án và xóa thuộc tính ẩn 
  document.querySelectorAll('button.show-answer-button').forEach(function(button) {
    button.removeAttribute('disabled');
  });
  //tìm các nút trọ giúp và xóa thuộc tính ẩn
  document.querySelectorAll('button.view-feedback-button').forEach(function(button) {
    button.removeAttribute('disabled');
  });
  //tìm các nút check và xóa thuộc tính ẩn
  document.querySelectorAll('button.check-button').forEach(function(button) {
    button.removeAttribute('disabled');
  });
  

  // Xóa thuộc tính chuyên sâu cho trang web dùng ModalBox
  var iframes = document.querySelectorAll('iframe');
  for (var i = 0; i < iframes.length; i++) {
    try {
      var iframeDocument = iframes[i].contentDocument;
	  
	  //nút hiện đáp án và xóa thuộc tính ẩn 
      iframeDocument.querySelectorAll('button.show-answer-button').forEach(function(button) {
        button.removeAttribute('disabled');
      });
	  //nút trọ giúp và xóa thuộc tính ẩn
	  iframeDocument.querySelectorAll('button.view-feedback-button').forEach(function(button) {
        button.removeAttribute('disabled');
      });
	  //nút kiểm tra và xóa thuộc tính ẩn
	  iframeDocument.querySelectorAll('button.check-button').forEach(function(button) {
        button.removeAttribute('disabled');
      });
    } catch (e) {
      console.log('Không thể truy cập Iframe', e);
    }
  }
  alert("MyELTHack đã hiển thị các ô đáp án :)");
}
// Áp dụng lệnh xóa thuộc tính 'disabled' cho các nút trên trang web bao gồm các nút trong iframe
removeDisabled();
// Thêm sự kiện click cho nút 'Refresh' để xóa lại thuộc tính 'disabled' cho các nút trên trang web bao gồm các nút trong iframe
var refreshButton = document.createElement('button');
refreshButton.innerHTML = 'Refresh';
refreshButton.addEventListener('click', function() {
  removeDisabled();
});
document.body.appendChild(refreshButton);