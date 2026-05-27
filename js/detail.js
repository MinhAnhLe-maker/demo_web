// Lấy phần tử của thẻ hình học và video
const cards = document.querySelectorAll(".card");
const videoArea = document.getElementById("video-area");
const videoPlayer = document.getElementById("player");
const videoTitle = document.getElementById("video-title");

// Hàm phát video
function playGeometryVideo(card) {
  //lấy dữ kiệu từ thuộc tính data trong html
  const title = card.getAttribute("data-title");
  const videoSrc = card.getAttribute("data-video");
  // Kiểm tra xem có link video và trình phát video trên trang không
  if (videoSrc && videoPlayer) {
    // Cập nhật tên bài giảng hiển thị trên màn hình
    videoTitle.innerText = "Bài giảng: " + title;

    // Đổi link video của trình phát (thẻ video hoặc iframe)
    videoPlayer.src = videoSrc;
    // Tải lại video mới để chuẩn bị phát
    videoPlayer.load();
    // Nếu có khu vực hiển thị video thì cho nó hiện lên và cuộn tới đó
    if (videoArea) {
      videoArea.style.display = "block"; // Hiển thị khu vực video
    // Cuộn màn hình mượt mà đến vị trí video
      videoArea.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Bắt đầu phát video (có bắt lỗi nếu trình duyệt chặn tự động phát)
    videoPlayer.play().catch((err) => {
      console.log("Trình duyệt chặn tự động phát:", err);
    });
  }
}

// Lắng nghe sự kiện click cho từng thẻ hình học trên trang chủ
cards.forEach((card) => {
  card.addEventListener("click", () => {
    playGeometryVideo(card);
  });
});

// Đọc URL
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const shapeFromUrl = urlParams.get("shape");

  if (shapeFromUrl && cards.length > 0) {
    const targetCard = Array.from(cards).find((c) =>
      c
        .getAttribute("data-title")
        ?.toLowerCase()
        .includes(shapeFromUrl.toLowerCase()),
    );

    if (targetCard) {
      playGeometryVideo(targetCard);
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const lessonCards = document.querySelectorAll(".lesson-card");

  lessonCards.forEach((card) => {
    card.addEventListener("click", function () {
      const title = this.querySelector("h3").innerText;
      // Chuyển "Hình Lập Phương" -> "hinh-lap-phuong"
      const shapeId = title
        .toLowerCase() // Chuyển chữ thường
        .normalize("NFD") // Chuẩn hóa tổ hợp phím
        .replace(/[\u0300-\u036f]/g, "") // Xóa dấu huyền, sắc, hỏi...
        .replace(/[đĐ]/g, "d") // Sửa chữ đ thành d
        .replace(/ /g, "-"); // Thay khoảng trắng bằng dấu gạch ngang
      // Chuyển hướng sang trang information.html kèm theo ID của hình
      window.location.href = `information.html?shape=${shapeId}`;
    });
  });
});
// Cấu trúc dữ liệu chứa thông tin chi tiết của từng hình
const shapeData = {
  "hinh-lap-phuong": {
    title: "Hình Lập Phương",
    video: "https://www.youtube.com/embed/ABCxyz", // Link bài giảng
    formula: "V = a³",
    realLife: ["cube-dice.png", "rubik.png"],
  },
  "hinh-hop-chu-nhat": {
    title: "Hình Hộp Chữ Nhật",
    video: "https://www.youtube.com/embed/123456",
    formula: "V = a × b × c",
    realLife: ["box.png", "fridge.png"],
  },
};

// Logic khi load trang information.html
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const shapeId = params.get("shape");
  // Nếu tìm thấy ID trong kho dữ liệu shapeData
  if (shapeId && shapeData[shapeId]) {
    const data = shapeData[shapeId];
    // Đổ thêm công thức và ảnh vào các trang tương ứng
    document.getElementById("shapeTitle").innerText = data.title;
    document.getElementById("player").src = data.video;
  }
});
