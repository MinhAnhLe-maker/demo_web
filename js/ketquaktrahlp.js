
// Kích hoạt xem lại câu hỏi ở trạng thái LÀM BÀI (Hiện đúng/sai và lời giải)
function xemLaiBai() {
  // SỬA TẠI ĐÂY: Phải đặt thành "true" thì file kiemtrahlp.js mới mở khóa giao diện xanh đỏ
  localStorage.setItem("daNopBaiTrangThai", "true");
  localStorage.setItem("dangXemLai", "true");

  // Link quay lại trang trắc nghiệm Hình Lập Phương
  window.location.href = "kiemtrahlp.html";
}

// Hàm xử lý khi bấm nút "Làm lại" - XÓA SẠCH ĐÁP ÁN ĐÃ CHỌN ĐỂ LÀM LẠI TỪ ĐẦU
function lamLai() {
  localStorage.removeItem("diemTracNghiem");
  localStorage.removeItem("mangDapAnNguoiDung"); // Xóa sạch các câu đã chọn

  // Đặt lại trạng thái về false để làm bài mới tinh
  localStorage.setItem("daNopBaiTrangThai", "false");
  localStorage.setItem("dangXemLai", "false");

  window.location.href = "kiemtrahlp.html";
}