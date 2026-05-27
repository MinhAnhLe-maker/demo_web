// Ngân hàng dữ liệu gồm 20 câu hỏi Hình Lập Phương chia đều 4 mức độ (Đã fix lỗi font và đồng bộ MathJax)
const danhSachCauHoi = [
  // --- MỨC ĐỘ: NHẬN BIẾT ---
  {
    cau: 1,
    question:
      "Hình lập phương là một hình hộp chữ nhật đặc biệt có đặc điểm gì?",
    options: [
      "Có 6 mặt đều là hình vuông bằng nhau",
      "Có các mặt bên là hình chữ nhật",
      "Có chiều dài lớn hơn chiều rộng",
      "Có ít đỉnh hơn hình hộp chữ nhật",
    ],
    correct: 0,
    hint: "Hãy nghĩ về viên xúc xắc (xí ngầu), các mặt của nó có hình dạng và kích thước như thế nào?",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình lập phương là trường hợp đặc biệt của hình hộp chữ nhật khi cả 3 kích thước (dài, rộng, cao) bằng nhau. Do đó, tất cả 6 mặt của nó đều là các hình vuông bằng nhau.",
  },
  {
    cau: 2,
    question: "Một hình lập phương có bao nhiêu cạnh bằng nhau?",
    options: ["6 cạnh", "8 cạnh", "12 cạnh", "4 cạnh"],
    correct: 2,
    hint: "Số cạnh của hình lập phương hoàn toàn bằng với số cạnh của hình hộp chữ nhật.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Tương tự hình hộp chữ nhật, hình lập phương cấu thành từ 12 cạnh, và do tính chất đặc biệt nên cả 12 cạnh này đều có độ dài bằng nhau.",
  },
  {
    cau: 3,
    question:
      "Nếu gọi a là độ dài cạnh của hình lập phương. Công thức tính diện tích xung quanh $S{xq}$ là gì?",
    options: [
      "$S{xq} = a \\times a \\times 4$",
      "$S{xq} = a \\times a \\times 6$",
      "$S{xq} = a \\times a \\times a$",
      "$S{xq} = a \\times 4$",
    ],
    correct: 0,
    hint: "Diện tích xung quanh là tổng diện tích của 4 mặt bên bao quanh hình khối.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Mỗi mặt của hình lập phương là một hình vuông có diện tích là $a \\times a$. Diện tích xung quanh gồm 4 mặt bên nên công thức là: $S{xq} = a \\times a \\times 4$.",
  },
  {
    cau: 4,
    question:
      "Công thức nào sau đây dùng để xác định diện tích toàn phần $S{tp}$ của hình lập phương cạnh a?",
    options: [
      "$S{tp} = a \\times a \\times 4$",
      "$S{tp} = a \\times a \\times 6$",
      "$S{tp} = a \\times a \\times a$",
      "$S{tp} = a \\times 6$",
    ],
    correct: 1,
    hint: "Diện tích toàn phần bao gồm diện tích của tất cả các mặt phẳng bao quanh khối hộp đó.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình lập phương có tổng cộng 6 mặt bằng nhau tuyệt đối. Vì vậy, diện tích toàn phần bằng diện tích một mặt nhân với 6: $S{tp} = a \\times a \\times 6$.",
  },
  {
    cau: 5,
    question:
      "Công thức tính thể tích V của hình lập phương có cạnh bằng a là gì?",
    options: [
      "$V = a \\times 3$",
      "$V = a \\times a \\times 4$",
      "$V = a \\times a \\times 6$",
      "$V = a \\times a \\times a$",
    ],
    correct: 3,
    hint: "Thể tích bằng tích của ba kích thước: dài nhân rộng nhân cao (mà ba kích thước này bằng nhau).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thể tích hình lập phương tính bằng tích của cạnh nhân cạnh nhân cạnh: $V = a \\times a \\times a$ (hoặc $V = a^3$).",
  },
  // --- MỨC ĐỘ: THÔNG HIỂU ---
  {
    cau: 6,
    question:
      "Tính diện tích xung quanh của một hình lập phương có cạnh dài $5\\text{ cm}$.",
    options: [
      "$100\\text{ cm}^2$",
      "$150\\text{ cm}^2$",
      "$125\\text{ cm}^2$",
      "$20\\text{ cm}^2$",
    ],
    correct: 0,
    hint: "Áp dụng công thức: Lấy diện tích một mặt (5 x 5) nhân với 4.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích xung quanh của hình lập phương là: $S{xq} = 5 \\times 5 \\times 4 = 25 \\times 4 = 100\\text{ cm}^2$.",
  },
  {
    cau: 7,
    question:
      "Một khối rubik hình lập phương có cạnh $6\\text{ cm}$. Thể tích của khối rubik đó là bao nhiêu?",
    options: [
      "$144\\text{ cm}^3$",
      "$216\\text{ cm}^3$",
      "$36\\text{ cm}^3$",
      "$96\\text{ cm}^3$",
    ],
    correct: 1,
    hint: "Áp dụng công thức tính thể tích: Tính phép nhân ba lần cạnh (6 x 6 x 6).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thể tích khối rubik hình lập phương là: $V = 6 \\times 6 \\times 6 = 216\\text{ cm}^3$.",
  },
  {
    cau: 8,
    question:
      "Hình lập phương có diện tích toàn phần là $54\\text{ dm}^2$. Độ dài cạnh của hình lập phương đó là bao nhiêu?",
    options: [
      "$9\\text{ dm}$",
      "$4.5\\text{ dm}$",
      "$3\\text{ dm}$",
      "$6\\text{ dm}$",
    ],
    correct: 2,
    hint: "Tìm diện tích một mặt bằng cách lấy diện tích toàn phần chia cho 6, sau đó tìm cạnh.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích một mặt là: $54 / 6 = 9\\text{ dm}^2$. Vì $3 \\times 3 = 9$ nên độ dài cạnh của hình lập phương là $3\\text{ dm}$.",
  },
  {
    cau: 9,
    question:
      "Một cái hộp hình lập phương có diện tích xung quanh là $64\\text{ cm}^2$. Tìm diện tích toàn phần của chiếc hộp đó.",
    options: [
      "$96\\text{ cm}^2$",
      "$16\\text{ cm}^2$",
      "$24\\text{ cm}^2$",
      "$80\\text{ cm}^2$",
    ],
    correct: 0,
    hint: "Tìm diện tích một mặt (lấy Sxq chia cho 4), sau đó lấy kết quả nhân với 6.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích một mặt của hình lập phương là: $64 / 4 = 16\\text{ cm}^2$. Diện tích toàn phần là: $16 \\times 6 = 96\\text{ cm}^2$.",
  },
  {
    cau: 10,
    question:
      "Nếu một hình lập phương có tổng độ dài tất cả các cạnh là $48\\text{ cm}$ thì thể tích của nó là bao nhiêu?",
    options: [
      "$64\\text{ cm}^3$",
      "$12\\text{ cm}^3$",
      "$96\\text{ cm}^3$",
      "$8\\text{ cm}^3$",
    ],
    correct: 0,
    hint: "Hình lập phương có 12 cạnh bằng nhau. Hãy lấy tổng độ dài chia cho 12 để tìm ra cạnh.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Độ dài một cạnh là: $48 / 12 = 4\\text{ cm}$. Thể tích hình lập phương đó là: $V = 4 \\times 4 \\times 4 = 64\\text{ cm}^3$.",
  },
  // --- MỨC ĐỘ: VẬN DỤNG ---
  {
    cau: 11,
    question:
      "Người ta làm một cái hộp KHÔNG NẮP bằng bìa cứng dạng hình lập phương có cạnh $1.5\\text{ dm}$. Tính diện tích tấm bìa cần dùng (không tính mép dán).",
    options: [
      "$9.0\\text{ dm}^2$",
      "$11.25\\text{ dm}^2$",
      "$13.5\\text{ dm}^2$",
      "$2.25\\text{ dm}^2$",
    ],
    correct: 1,
    hint: "Hộp không nắp đồng nghĩa với việc chiếc hộp này chỉ có 5 mặt giấy bìa phẳng thôi.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Do hộp không nắp nên tổng số mặt cần làm bìa là 5 mặt. Diện tích bìa cần dùng là: $S = 1.5 \\times 1.5 \\times 5 = 2.25 \\times 5 = 11.25\\text{ dm}^2$.",
  },
  {
    cau: 12,
    question:
      "Một bể nước dạng hình lập phương có cạnh lòng bể là $2\\text{ m}$. Hiện tại bể chứa đầy nước, người ta hút ra $3000$ lít nước. Hỏi mực nước trong bể giảm đi bao nhiêu mét? ($1\\text{ lít} = 1\\text{ dm}^3$).",
    options: [
      "$0.75\\text{ m}$",
      "$1.5\\text{ m}$",
      "$0.5\\text{ m}$",
      "$1.25\\text{ m}$",
    ],
    correct: 0,
    hint: "Diện tích đáy bể là 2x2=4 m². Đổi lượng nước ra mét khối ($3\\text{ m}^3$) rồi lấy thể tích đó chia cho diện tích đáy bể.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đổi $3000\\text{ lít} = 3000\\text{ dm}^3 = 3\\text{ m}^3$. Diện tích đáy của bể nước là: $2 \\times 2 = 4\\text{ m}^2$. Chiều cao mực nước bị giảm đi là: $3 / 4 = 0.75\\text{ m}$.",
  },
  {
    cau: 13,
    question:
      "Nếu ta tăng độ dài cạnh của một hình lập phương lên gấp $3$ lần thì thể tích của nó sẽ tăng lên bao nhiêu lần?",
    options: ["$3$ lần", "$9$ lần", "$6$ lần", "$27$ lần"],
    correct: 3,
    hint: "Thể tích tỉ lệ thuận với lập phương của cạnh: $3 \\times 3 \\times 3$.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Công thức thể tích ban đầu là $V = a^3$. Khi cạnh tăng lên $3$ lần thành $3a$, thể tích mới là: $V_{mới} = (3a)^3 = 27 \\times a^3 = 27 \\times V$. Vậy thể tích tăng lên 27 lần.",
  },
  {
    cau: 14,
    question:
      "Một hình lập phương có diện tích toàn phần lớn hơn diện tích xung quanh là $50\\text{ cm}^2$. Tính thể tích khối hình đó.",
    options: [
      "$125\\text{ cm}^3$",
      "$25\\text{ cm}^3$",
      "$50\\text{ cm}^3$",
      "$100\\text{ cm}^3$",
    ],
    correct: 0,
    hint: "Diện tích toàn phần trừ diện tích xung quanh chính bằng tổng diện tích của 2 mặt đáy đứng.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hiệu của Stp và Sxq chính là diện tích của 2 mặt đáy. Suy ra diện tích 2 đáy = $50\\text{ cm}^2$. Diện tích một mặt là: $50 / 2 = 25\\text{ cm}^2$. Vì cạnh nhân cạnh bằng $25$ nên độ dài cạnh $a = 5\\text{ cm}$. Thể tích khối là: $V = 5 \\times 5 \\times 5 = 125\\text{ cm}^3$.",
  },
  {
    cau: 15,
    question:
      "Tính độ dài đường chéo nối hai đỉnh đối diện xuyên qua tâm của một hình lập phương có cạnh bằng $4\\text{ cm}$.",
    options: [
      "$4\\sqrt{2}\\text{ cm}$",
      "$4\\sqrt{3}\\text{ cm}$",
      "$16\\text{ cm}$",
      "$4\\text{ cm}$",
    ],
    correct: 1,
    hint: "Đường chéo trong không gian của hình lập phương cạnh a được tính bằng công thức $d = a \\times \\sqrt{3}$.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Theo định lý Pythagore không gian mở rộng, bình phương đường chéo hình lập phương bằng: $d^2 = a^2 + a^2 + a^2 = 3a^2 \\Rightarrow d = a\\sqrt{3}$. Thay số vào ta thu được kết quả: $4\\sqrt{3}\\text{ cm}$.",
  },
  // --- MỨC ĐỘ: VẬN DỤNG CAO ---
  {
    cau: 16,
    question:
      "Một khối kim loại hình lập phương cạnh $10\\text{ cm}$ được thả vào một bể nước hình hộp chữ nhật có đáy $25\\times 20\\text{ cm}$ đang chứa nước. Hỏi nước dâng thêm bao nhiêu cm?",
    options: [
      "$2\\text{ cm}$",
      "$4\\text{ cm}$",
      "$1.5\\text{ cm}$",
      "$5\\text{ cm}$",
    ],
    correct: 0,
    hint: "Thể tích nước dâng lên đúng bằng thể tích khối lập phương kim loại vừa thả chìm vào.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thể tích khối lập phương kim loại chiếm chỗ: $V = 10 \\times 10 \\times 10 = 1000\\text{ cm}^3$. Diện tích đáy của bể chứa nước: $S = 25 \\times 20 = 500\\text{ cm}^2$. Chiều cao nước dâng thêm là: $h = V / S = 1000 / 500 = 2\\text{ cm}$.",
  },
  {
    cau: 17,
    question:
      "Người ta xếp các khối lập phương nhỏ cạnh $1\\text{ cm}$ thành một khối lập phương lớn có cạnh $5\\text{ cm}$ rồi sơn đỏ toàn bộ bề ngoài. Có bao nhiêu khối nhỏ chỉ được sơn ĐÚNG 2 MẶT?",
    options: ["36 khối", "27 khối", "8 khối", "12 khối"],
    correct: 0,
    hint: "Các khối nhỏ được sơn đúng 2 mặt nằm ở các cạnh của khối lập phương lớn (trừ các đỉnh).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình lập phương lớn có 12 cạnh. Trên mỗi cạnh dài $5\\text{ cm}$, có 2 khối ở 2 đầu đỉnh được sơn 3 mặt. Do đó, số khối được sơn đúng 2 mặt trên một cạnh là: $5 - 2 = 3$ khối. Tổng số khối sơn đúng 2 mặt là: $3 \\times 12 = 36$ khối.",
  },
  {
    cau: 18,
    question:
      "Cần bao nhiêu khối lập phương nhỏ có cạnh $2\\text{ cm}$ để xếp thành một khối lập phương lớn có diện tích toàn phần bằng $150\\text{ dm}^2$?",
    options: ["125 khối", "15625 khối", "1000 khối", "500 khối"],
    correct: 1,
    hint: "Đổi đơn vị diện tích toàn phần sang cm², tính cạnh khối lớn, tính thể tích rồi chia cho thể tích khối nhỏ.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đổi $150\\text{ dm}^2 = 15000\\text{ cm}^2$. Diện tích một mặt khối lớn: $15000 / 6 = 2500\\text{ cm}^2 \\Rightarrow$ Cạnh khối lớn là $50\\text{ cm}$. <br>- Thể tích khối lớn: $50 \\times 50 \\times 50 = 125000\\text{ cm}^3$.<br>- Thể tích khối nhỏ: $2 \\times 2 \\times 2 = 8\\text{ cm}^3$.<br>- Số khối nhỏ cần dùng: $125000 / 8 = 15625$ khối.",
  },
  {
    cau: 19,
    question:
      "Bác thợ tôn có một thanh kim loại dài $7.2\\text{ m}$. Bác muốn cắt hàn thanh này thành khung của 2 hình lập phương bằng nhau. Tính thể tích tổng cộng của 2 khối lập phương đó tạo ra.",
    options: [
      "$0.054\\text{ m}^3$",
      "$0.216\\text{ m}^3$",
      "$0.027\\text{ m}^3$",
      "$0.108\\text{ m}^3$",
    ],
    correct: 0,
    hint: "Một hình lập phương có 12 cạnh, hai hình có tổng cộng 24 cạnh bằng nhau.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Tổng số cạnh của 2 hình lập phương là: $2 \\times 12 = 24$ cạnh. Chiều dài một cạnh khung sắt là: $7.2 / 24 = 0.3\\text{ m}$. Thể tích của một hình lập phương: $0.3 \\times 0.3 \\times 0.3 = 0.027\\text{ m}^3$. Tổng thể tích 2 khối là: $0.027 \\times 2 = 0.054\\text{ m}^3$.",
  },
  {
    cau: 20,
    question:
      "Một khối lập phương bằng gỗ có cạnh $10\\text{ cm}$. Người ta khoét thủng một lỗ hình hộp chữ nhật xuyên thẳng từ mặt này sang mặt đối diện có đáy là hình vuông cạnh $2\\text{ cm}$. Tính diện tích toàn phần mới của khối gỗ.",
    options: [
      "$600\\text{ cm}^2$",
      "$624\\text{ cm}^2$",
      "$632\\text{ cm}^2$",
      "$592\\text{ cm}^2$",
    ],
    correct: 2,
    hint: "Diện tích mới bằng diện tích toàn phần ban đầu trừ đi diện tích 2 lỗ thủng ở đáy, rồi cộng thêm diện tích xung quanh của cái lỗ lõi bên trong.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích toàn phần ban đầu: $10 \\times 10 \\times 6 = 600\\text{ cm}^2$. Khi khoét lỗ, diện tích vỏ ngoài mất đi 2 hình vuông nhỏ ở 2 mặt đối diện: $2 \\times (2 \\times 2) = 8\\text{ cm}^2$. Đồng thời, xuất hiện thêm diện tích xung quanh phía trong lòng lỗ (dạng hình hộp chữ nhật có chu vi đáy $2 \\times 4 = 8\\text{ cm}$, chiều cao $10\\text{ cm}$): $8 \\times 10 = 80\\text{ cm}^2$. <br>Vậy diện tích toàn phần mới là: $600 - 8 + 80 = 632\\text{ cm}^2$.",
  },
];

// Khai báo cấu hình riêng cho bài kiểm tra
const redirectUrl = "ketquaktrahlp.html";
const timerKey = "timer_hlp";
const topicId = "hlp";

// Kiểm tra chuyển đổi chủ đề để tránh xung đột dữ liệu localStorage
if (localStorage.getItem("activeTopic") !== topicId) {
  localStorage.setItem("daNopBaiTrangThai", "false");
  localStorage.setItem("dangXemLai", "false");
  localStorage.removeItem("mangDapAnNguoiDung");
  localStorage.removeItem("diemTracNghiem");
  for (let key in localStorage) {
    if (key.startsWith("timer_")) {
      localStorage.removeItem(key);
    }
  }
  localStorage.setItem("activeTopic", topicId);
}

// Khai báo biến trạng thái ban đầu
let viTriCauHienTai = 0;
let daNopBai = localStorage.getItem("daNopBaiTrangThai") === "true";
let dangXemLai = localStorage.getItem("dangXemLai") === "true";

// === ĐOẠN RESET CHỈ KHI LÀM BÀI MỚI TINH ===
if (!dangXemLai) {
  if (window.location.pathname.includes("kiemtrahlp.html")) {
    daNopBai = false;
    localStorage.setItem("daNopBaiTrangThai", "false");
    localStorage.setItem("dangXemLai", "false");
    localStorage.removeItem("mangDapAnNguoiDung");
    localStorage.removeItem(timerKey);
  }
}

// Khởi tạo mảng lưu đáp án người dùng
let mangDapAnNguoiDung =
  JSON.parse(localStorage.getItem("mangDapAnNguoiDung")) ||
  new Array(danhSachCauHoi.length).fill(null);

// Hàm hiển thị dữ liệu câu hỏi lên màn hình
function taiCauHoi() {
  const duLieuCauHoi = danhSachCauHoi[viTriCauHienTai];

  if (document.getElementById("question-number")) {
    document.getElementById("question-number").innerText =
      `Câu hỏi ${viTriCauHienTai + 1}/${danhSachCauHoi.length}`;
  }
  if (document.getElementById("question-text")) {
    document.getElementById("question-text").innerHTML =
      `${duLieuCauHoi.cau}. ${duLieuCauHoi.question}`;
  }

  // === ẨN CỤM GỢI Ý KHI ĐANG XEM LẠI BÀI ===
  const phanTuHint = document.getElementById("hint-text");
  const khungBoxHint = document.getElementById("hint-box");
  if (phanTuHint) {
    if (daNopBai && dangXemLai) {
      phanTuHint.innerHTML = "";
      if (khungBoxHint) khungBoxHint.style.display = "none";
    } else {
      phanTuHint.innerHTML = duLieuCauHoi.hint;
      if (khungBoxHint) khungBoxHint.style.display = "block";
    }
  }

  if (document.getElementById("progress-bar")) {
    const phanTramTienTrinh =
      ((viTriCauHienTai + 1) / danhSachCauHoi.length) * 100;
    document.getElementById("progress-bar").style.width =
      `${phanTramTienTrinh}%`;
  }

  const khungChuaOptions = document.getElementById("options-container");
  if (khungChuaOptions) {
    khungChuaOptions.innerHTML = "";

    // Tạo các nút đáp án A, B, C, D
    duLieuCauHoi.options.forEach((txtOption, index) => {
      const nutOption = document.createElement("button");
      nutOption.className = "option-btn";
      const kyTuDau = String.fromCharCode(65 + index);
      nutOption.innerHTML = `<strong>${kyTuDau}.</strong> ${txtOption}`;

      if (daNopBai && dangXemLai) {
        nutOption.disabled = true;
        if (index === duLieuCauHoi.correct) {
          nutOption.style.backgroundColor = "#2ecc71"; // Đúng -> Xanh lá
          nutOption.style.color = "white";
          nutOption.style.borderColor = "#27ae60";
        } else if (index === mangDapAnNguoiDung[viTriCauHienTai]) {
          nutOption.style.backgroundColor = "#e74c3c"; // Sai -> Đỏ
          nutOption.style.color = "white";
          nutOption.style.borderColor = "#c0392b";
        }
      } else {
        if (
          mangDapAnNguoiDung[viTriCauHienTai] !== null &&
          mangDapAnNguoiDung[viTriCauHienTai] === index
        ) {
          nutOption.classList.add("selected");
        }
      }

      nutOption.onclick = function () {
        chonDapAn(index);
      };
      khungChuaOptions.appendChild(nutOption);
    });

    // === HIỂN THỊ ĐÚNG/SAI VÀ LỜI GIẢI ĐỘNG ===
    if (daNopBai && dangXemLai) {
      const dapAnNguoiDung = mangDapAnNguoiDung[viTriCauHienTai];
      const laDung = dapAnNguoiDung === duLieuCauHoi.correct;

      let khungLoiGiai = document.getElementById("explanation-container");
      if (!khungLoiGiai) {
        khungLoiGiai = document.createElement("div");
        khungLoiGiai.id = "explanation-container";
        khungLoiGiai.style.marginTop = "25px";
        khungLoiGiai.style.padding = "15px";
        khungLoiGiai.style.borderRadius = "5px";
        khungLoiGiai.style.fontSize = "15px";
        khungLoiGiai.style.lineHeight = "1.6";
        khungChuaOptions.appendChild(khungLoiGiai);
      }

      if (laDung) {
        khungLoiGiai.style.backgroundColor = "#d4edda";
        khungLoiGiai.style.borderLeft = "5px solid #28a745";
        khungLoiGiai.style.color = "#155724";
        khungLoiGiai.innerHTML = `
          <h4 style="margin: 0 0 10px 0; color: #28a745;"> Kết quả: Chính xác!</h4>
          <div style="padding-top: 8px; border-top: 1px dashed #c3e6cb;">
            ${duLieuCauHoi.explanation}
          </div>
        `;
      } else {
        khungLoiGiai.style.backgroundColor = "#f8d7da";
        khungLoiGiai.style.borderLeft = "5px solid #dc3545";
        khungLoiGiai.style.color = "#721c24";

        const chuCaiNguoiDung =
          dapAnNguoiDung !== null
            ? String.fromCharCode(65 + dapAnNguoiDung)
            : "Chưa chọn";
        const chuCaiDung = String.fromCharCode(65 + duLieuCauHoi.correct);

        khungLoiGiai.innerHTML = `
          <h4 style="margin: 0 0 5px 0; color: #dc3545;"> Kết quả: Sai rồi!</h4>
          <p style="margin: 0 0 10px 0; font-size: 14px;">Bạn chọn: <strong>${chuCaiNguoiDung}</strong>. Đáp án đúng: <strong>${chuCaiDung}</strong>.</p>
          <div style="padding-top: 8px; border-top: 1px dashed #f5c6cb; color: #2c3e50;">
            ${duLieuCauHoi.explanation}
          </div>
        `;
      }
    }
  }

  if (document.getElementById("prev-btn")) {
    document.getElementById("prev-btn").disabled = viTriCauHienTai === 0;
  }

  capNhatNutDieuHuong();
  renderPalette();

  // Gọi MathJax kết xuất lại công thức toán học sau khi render câu hỏi động bằng JS
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset();
  }
}

// Hàm cập nhật trạng thái chữ trên nút điều hướng
function capNhatNutDieuHuong() {
  const nutNext = document.getElementById("next-btn");
  if (!nutNext) return;

  const soCauDaLam = mangDapAnNguoiDung.filter((ans) => ans !== null).length;

  if (daNopBai) {
    if (viTriCauHienTai === danhSachCauHoi.length - 1) {
      nutNext.innerText = "Thoát xem";
    } else {
      nutNext.innerText = "Tiếp theo";
    }
  } else {
    if (
      viTriCauHienTai === danhSachCauHoi.length - 1 ||
      soCauDaLam === danhSachCauHoi.length
    ) {
      nutNext.innerText = "Nộp bài";
    } else {
      nutNext.innerText = "Tiếp theo";
    }
  }
}

// Chọn đáp án (Hủy chọn nếu bấm 2 lần)
function chonDapAn(indexChon) {
  if (daNopBai) return;

  if (mangDapAnNguoiDung[viTriCauHienTai] === indexChon) {
    mangDapAnNguoiDung[viTriCauHienTai] = null;
  } else {
    mangDapAnNguoiDung[viTriCauHienTai] = indexChon;
  }

  localStorage.setItem(
    "mangDapAnNguoiDung",
    JSON.stringify(mangDapAnNguoiDung),
  );

  const danhSachNut = document.querySelectorAll(".option-btn");
  danhSachNut.forEach((nut, idx) => {
    if (idx === mangDapAnNguoiDung[viTriCauHienTai]) {
      nut.classList.add("selected");
    } else {
      nut.classList.remove("selected");
    }
  });

  capNhatNutDieuHuong();
}

// Bấm tiếp theo hoặc kích hoạt nộp bài chuyển trang
function cauTiepTheo() {
  const nutNext = document.getElementById("next-btn");
  if (!nutNext) return;
  const nutNextText = nutNext.innerText;

  if (
    nutNextText === "Tiếp theo" &&
    viTriCauHienTai < danhSachCauHoi.length - 1
  ) {
    viTriCauHienTai++;
    taiCauHoi();
    return;
  }

  if (nutNextText === "Nộp bài") {
    if (!daNopBai) {
      const viTriCauBoTrong = mangDapAnNguoiDung.findIndex(
        (ans) => ans === null,
      );
      const soCauChuaLam = mangDapAnNguoiDung.filter(
        (ans) => ans === null,
      ).length;

      if (soCauChuaLam > 0) {
        const xacNhanNop = confirm(
          `Bạn còn ${soCauChuaLam} câu chưa hoàn thành. Các câu này sẽ tính 0 điểm nếu bạn nộp bài bây giờ. Bạn có chắc chắn muốn nộp không?`
        );
        if (!xacNhanNop) {
          viTriCauHienTai = viTriCauBoTrong;
          taiCauHoi();
          return;
        }
      }

      nopBai(false);
    }
  }

  if (nutNextText === "Thoát xem") {
    localStorage.removeItem("daNopBaiTrangThai");
    localStorage.removeItem("dangXemLai");
    localStorage.removeItem("diemTracNghiem");

    const mangTrongMoi = new Array(danhSachCauHoi.length).fill(null);
    localStorage.setItem("mangDapAnNguoiDung", JSON.stringify(mangTrongMoi));
    localStorage.removeItem(timerKey);

    alert("Hệ thống sẽ đặt lại bài kiểm tra về trạng thái ban đầu!");
    window.location.href = window.location.pathname.split("/").pop();
  }
}

// Bấm nút quay lại câu hỏi phía trước
function cauTruoc() {
  if (viTriCauHienTai > 0) {
    viTriCauHienTai--;
    taiCauHoi();
  }
}

// Hàm nộp bài tính điểm
function nopBai(isAuto = false) {
  if (daNopBai) return;

  if (isAuto) {
    alert("Hết giờ làm bài! Hệ thống tự động nộp bài của bạn.");
  }

  daNopBai = true;
  let diemSo = 0;
  danhSachCauHoi.forEach((q, idx) => {
    if (mangDapAnNguoiDung[idx] === q.correct) {
      diemSo++;
    }
  });

  // --- BẮT ĐẦU PHẦN TÍCH HỢP HỆ THỐNG XU ---
  let xuDuocNhan = diemSo * 20;

  if (diemSo === 20) {
    xuDuocNhan += 100;
    alert(
      "Tuyệt vời! Bạn làm đúng hết tất cả các câu, nhận thêm 100 xu thưởng!",
    );
  }

  let tongXuHienTai = parseInt(localStorage.getItem("tongXu")) || 0;
  localStorage.setItem("tongXu", tongXuHienTai + xuDuocNhan);

  alert(
    `Bạn làm đúng: ${diemSo}/${danhSachCauHoi.length} câu.\nBạn nhận được: ${xuDuocNhan} xu!`,
  );
  // --- KẾT THÚC PHẦN TÍCH HỢP ---

  localStorage.setItem("diemTracNghiem", diemSo);
  localStorage.setItem("tongSoCau", danhSachCauHoi.length);
  localStorage.setItem(
    "mangDapAnNguoiDung",
    JSON.stringify(mangDapAnNguoiDung),
  );
  localStorage.setItem("daNopBaiTrangThai", "true");

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  localStorage.removeItem(timerKey);

  window.location.href = redirectUrl;
}

// --- BẢNG ĐIỀU HƯỚNG VÀ THEO DÕI TIẾN TRÌNH CÂU HỎI (QUESTION PALETTE) ---
function renderPalette() {
  const container = document.getElementById("question-palette-container");
  if (!container) return;

  container.innerHTML = "";

  const title = document.createElement("div");
  title.className = "palette-title";
  title.innerText = "Tiến độ câu hỏi";
  container.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "palette-grid";

  danhSachCauHoi.forEach((cau, i) => {
    const item = document.createElement("div");
    item.className = "palette-item";
    item.innerText = i + 1;

    if (daNopBai && dangXemLai) {
      if (mangDapAnNguoiDung[i] === cau.correct) {
        item.classList.add("correct");
      } else if (mangDapAnNguoiDung[i] !== null) {
        item.classList.add("incorrect");
      } else {
        item.classList.add("unanswered");
      }
    } else {
      if (mangDapAnNguoiDung[i] !== null) {
        item.classList.add("answered");
      } else {
        item.classList.add("unanswered");
      }
    }

    if (i === viTriCauHienTai) {
      item.classList.add("current");
    }

    item.onclick = function () {
      viTriCauHienTai = i;
      taiCauHoi();
    };

    grid.appendChild(item);
  });

  container.appendChild(grid);

  // Tạo thêm nút hành động Nộp bài / Làm lại ngay dưới Palette Grid
  const actionBtn = document.createElement("button");
  actionBtn.id = "palette-action-btn";

  if (daNopBai) {
    actionBtn.className = "palette-btn btn-retry";
    actionBtn.innerText = "Làm lại";
    actionBtn.onclick = function() {
      if (confirm("Bạn có chắc chắn muốn đặt lại và làm lại bài trắc nghiệm này từ đầu?")) {
        lamLai();
      }
    };
  } else {
    actionBtn.className = "palette-btn btn-submit";
    actionBtn.innerText = "Nộp bài";
    actionBtn.onclick = function() {
      const viTriCauBoTrong = mangDapAnNguoiDung.findIndex((ans) => ans === null);
      const soCauChuaLam = mangDapAnNguoiDung.filter((ans) => ans === null).length;

      if (soCauChuaLam > 0) {
        const xacNhanNop = confirm(
          `Bạn còn ${soCauChuaLam} câu chưa hoàn thành. Các câu này sẽ tính 0 điểm nếu bạn nộp bài bây giờ. Bạn có chắc chắn muốn nộp không?`
        );
        if (!xacNhanNop) {
          viTriCauHienTai = viTriCauBoTrong;
          taiCauHoi();
          return;
        }
      }
      nopBai(false);
    };
  }
  container.appendChild(actionBtn);
}

// --- BỘ ĐẾM THỜI GIAN LÀM BÀI (TIMER) ---
let timerInterval = null;

function startTimer() {
  if (daNopBai && dangXemLai) {
    const timerElement = document.getElementById("quiz-timer");
    if (timerElement) timerElement.style.display = "none";
    return;
  }

  const timerElement = document.getElementById("quiz-timer");
  const timerText = document.getElementById("timer-text");
  if (!timerElement || !timerText) return;

  timerElement.style.display = "flex";

  let remainingTime = parseInt(localStorage.getItem(timerKey));
  if (isNaN(remainingTime) || remainingTime < 0) {
    remainingTime = 1800; // 30 phút
    localStorage.setItem(timerKey, remainingTime);
  }

  capNhatGiaoDienTimer(remainingTime);

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    remainingTime--;
    localStorage.setItem(timerKey, remainingTime);

    capNhatGiaoDienTimer(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      localStorage.removeItem(timerKey);
      nopBai(true);
    }
  }, 1000);
}

function capNhatGiaoDienTimer(seconds) {
  const timerText = document.getElementById("timer-text");
  const timerElement = document.getElementById("quiz-timer");
  if (!timerText || !timerElement) return;

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerText.innerText = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (seconds <= 300) {
    timerElement.classList.add("warning");
  } else {
    timerElement.classList.remove("warning");
  }
}

// Tự động chạy khi tải trang
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    taiCauHoi();
    startTimer();
  });
} else {
  taiCauHoi();
  startTimer();
}

// Bổ sung hàm tiện ích reset bài trắc nghiệm
function lamLai() {
  localStorage.removeItem("daNopBaiTrangThai");
  localStorage.removeItem("dangXemLai");
  localStorage.removeItem("diemTracNghiem");

  const mangTrongMoi = new Array(danhSachCauHoi.length).fill(null);
  localStorage.setItem("mangDapAnNguoiDung", JSON.stringify(mangTrongMoi));
  localStorage.removeItem(timerKey);

  alert("Đã đặt lại bài trắc nghiệm thành công!");
  window.location.href = window.location.pathname.split("/").pop();
}
