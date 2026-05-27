// Ngân hàng dữ liệu gồm 20 câu hỏi chia đều 4 mức độ
const danhSachCauHoi = [
  // --- MỨC ĐỘ: NHẬN BIẾT ---
  {
    cau: 1,
    question:
      "Một hình hộp chữ nhật có bao nhiêu mặt, bao nhiêu cạnh và bao nhiêu đỉnh?",
    options: [
      "6 mặt, 12 cạnh, 8 đỉnh",
      "6 mặt, 8 cạnh, 12 đỉnh",
      "8 mặt, 12 cạnh, 6 đỉnh",
      "6 mặt, 12 cạnh, 12 đỉnh",
    ],
    correct: 0,
    hint: "Hãy liên tưởng đến một hộp diêm hoặc một viên gạch block xem có bao nhiêu góc nhọn ở các đỉnh nhé.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Theo đặc điểm hình học của hình hộp chữ nhật, hình khối này bao gồm đúng 6 mặt phẳng chữ nhật bao quanh, 12 đoạn thẳng tạo thành các cạnh ráp khung và 8 giao điểm góc đóng vai trò là các đỉnh.",
  },
  {
    cau: 2,
    question:
      "Các mặt bên của một hình hộp chữ nhật luôn luôn thuộc dạng hình phẳng nào?",
    options: ["Hình bình hành", "Hình chữ nhật", "Hình vuông", "Hình thoi"],
    correct: 1,
    hint: "Ngay từ trong cái tên gọi chính thức 'Hình hộp chữ nhật' đã cho bạn câu trả lời rồi đấy.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Tên gọi 'Hình hộp chữ nhật' thể hiện tính chất cơ bạn: tất cả 6 mặt của hình khối này (bao gồm cả các mặt bên và hai mặt đáy) đều là hình chữ nhật.",
  },
  {
    cau: 3,
    question:
      "Gọi a, b, c lần lượt là chiều dài, chiều rộng và chiều cao của hình hộp chữ nhật. Công thức tính diện tích xung quanh Sxq là gì?",
    options: [
      "Sxq = (a + b) x c",
      "Sxq = 2 x (a + b) x c",
      "Sxq = a x b x c",
      "Sxq = 2 x (a x b + b x c + c x a)",
    ],
    correct: 1,
    hint: "Diện tích xung quanh của khối hộp chữ nhật được xác định bằng chu vi mặt đáy nhân với chiều cao tương ứng.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích xung quanh bằng tổng diện tích 4 mặt bên. Công thức tính nhanh là lấy chu vi đáy nhân với chiều cao: Sxq = 2 x (a + b) x c.",
  },
  {
    cau: 4,
    question:
      "Công thức nào sau đây dùng để xác định thể tích V của một hình hộp chữ nhật?",
    options: [
      "V = a + b + c",
      "V = 2 x (a + b) x c",
      "V = a x b x c",
      "V = 1/3 x a x b x c",
    ],
    correct: 2,
    hint: "Thể tích khối hình chữ nhật đứng bằng diện tích mặt đáy phẳng (a x b) nhân ghép thêm với chiều cao cao độ.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thể tích của một hình hộp chữ nhật được tính bằng tích của ba kích thước: chiều dài nhân chiều rộng nhân chiều cao, tức là V = a x b x c.",
  },
  {
    cau: 5,
    question:
      "Trong kết cấu không gian một hình hộp chữ nhật, hai mặt không có bất kỳ một cạnh chung nào được gọi là gì?",
    options: [
      "Hai mặt kề nhau",
      "Hai mặt vuông góc",
      "Hai mặt đối diện",
      "Hai mặt giao nhau",
    ],
    correct: 2,
    hint: "Hãy liên tưởng đến mặt sàn nhà bê tông và tấm trần thạch cao của căn phòng học, tụi nó nằm vị trí thế nào?",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Trong hình hộp chữ nhật, các cặp mặt song song và không có chung bất kỳ một cạnh hay đỉnh nào với nhau được gọi là hai mặt đối diện (ví dụ: mặt đáy trên và mặt đáy dưới).",
  },
  // --- MỨC ĐỘ: THÔNG HIỂU ---
  {
    cau: 6,
    question:
      "Tính diện tích xung quanh của một hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm và chiều cao 4 cm.",
    options: ["104 cm²", "52 cm²", "160 cm²", "184 cm²"],
    correct: 0,
    hint: "Áp dụng công thức tính nhanh: Chu vi đáy nhân chiều cao: 2 x (8 + 5) x 4.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Áp dụng công thức tính diện tích xung quanh: Sxq = 2 x (a + b) x c = 2 x (8 + 5) x 4 = 2 x 13 x 4 = 104 cm².",
  },
  {
    cau: 7,
    question:
      "Một bể cá dạng hình hộp chữ nhật có chiều dài đáy là 1.2 m, chiều rộng đáy là 0.5 m và chiều cao là 0.8 m. Thể tích tối đa của bể cá đó là bao nhiêu?",
    options: ["2.5 m³", "0.48 m³", "4.8 m³", "2.72 m³"],
    correct: 1,
    hint: "Áp dụng công thức tính thể tích trực tiếp: Thực hiện phép nhân ba kích thước 1.2 x 0.5 x 0.8.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Áp dụng công thức tính thể tích khối hộp chữ nhật: V = a x b x c = 1.2 x 0.5 x 0.8 = 0.6 x 0.8 = 0.48 m³.",
  },
  {
    cau: 8,
    question:
      "Hình hộp chữ nhật có diện tích xung quanh là 120 cm², chu vi đáy bằng 24 cm. Tính chiều cao của hình hộp chữ nhật đó.",
    options: ["10 cm", "5 cm", "2.5 cm", "12 cm"],
    correct: 1,
    hint: "Vì Sxq = chu vi đáy x chiều cao, muốn tìm chiều cao ta lấy diện tích xung quanh chia cho chu vi đáy.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Từ công thức Sxq = Chu vi đáy x c, ta suy ra chiều cao c = Sxq / Chu vi đáy = 120 / 24 = 5 cm.",
  },
  {
    cau: 9,
    question:
      "Tính diện tích toàn phần của một khối hộp chữ nhật có kích thước dài 6 dm, rộng 4 dm và cao 3 dm.",
    options: ["60 dm²", "72 dm²", "108 dm²", "54 dm²"],
    correct: 2,
    hint: "Diện tích toàn phần bằng diện tích xung quanh (60 dm²) cộng ghép thêm diện tích của hai mặt đáy (2 x 6 x 4).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích toàn phần bằng diện tích xung quanh cộng diện tích hai đáy:<br>- Sxq = 2 x (6 + 4) x 3 = 60 dm².<br>- Sđáy = 6 x 4 = 24 dm².<br>- Stp = Sxq + 2 x Sđáy = 60 + 2 x 24 = 108 dm².",
  },
  {
    cau: 10,
    question:
      "Một khối gỗ hình hộp chữ nhật có thể tích bằng 360 cm³. Biết diện tích đáy của khối gỗ là 45 cm². Tìm chiều cao của khối gỗ đó.",
    options: ["8 cm", "6 cm", "9 cm", "12 cm"],
    correct: 0,
    hint: "Chiều cao khối đứng bằng thể tích chia thẳng cho diện tích bề mặt đáy: 360 / 45.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Ta có công thức tính thể tích: V = Sđáy x Chiều cao. Từ đó suy ra chiều cao bằng: 360 / 45 = 8 cm.",
  },
  // --- MỨC ĐỘ: VẬN DỤNG ---
  {
    cau: 11,
    question:
      "Người ta sơn toàn bộ các mặt bên ngoài của một cái thùng tôn KHÔNG NẮP dạng hình hộp chữ nhật có chiều dài 1.5 m, chiều rộng 1 m và chiều cao 0.6 m. Tính tổng diện tích quét sơn.",
    options: ["4.5 m²", "6.0 m²", "3.0 m²", "3.9 m²"],
    correct: 0,
    hint: "Thùng không nắp nghĩa là diện tích sơn sẽ bằng diện tích xung quanh cộng với chỉ đúng 1 mặt đáy thôi.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Do thùng không có nắp nên diện tích quét sơn chỉ gồm diện tích xung quanh và 1 mặt đáy:<br>- Sxq = 2 x (1.5 + 1) x 0.6 = 3 m².<br>- Sđáy = 1.5 x 1 = 1.5 m².<br>- Tổng diện tích sơn: 3 + 1.5 = 4.5 m².",
  },
  {
    cau: 12,
    question:
      "Một bể nước hình hộp chữ nhật có kích thước lòng bể: dài 2 m, rộng 1.5 m và cao 1 m. Bể trống, người ta mở vòi nước chảy vào bể mỗi phút được 30 lít. Hỏi sau bao lâu thì đầy bể? (1 dm³ = 1 lít).",
    options: ["100 phút", "10 phút", "150 phút", "60 phút"],
    correct: 0,
    hint: "Tính thể tích bể bằng mét khối (3 m³), quy đổi ra lít (3000 lít), rồi lấy số lít chia cho dung tích chảy 30.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> <br>- Thể tích lòng bể nước: V = 2 x 1.5 x 1 = 3 m³.<br>- Đổi sang đơn vị lít: 3 m³ = 3000 dm³ = 3000 lít.<br>- Thời gian cần thiết để vòi chảy đầy bể: 3000 / 30 = 100 phút.",
  },
  {
    cau: 13,
    question:
      "Nếu tăng chiều dài khối hộp chữ nhật lên 2 lần, tăng chiều rộng lên 3 lần và giữ nguyên chiều cao thì thể tích tổng của nó thay đổi thế nào?",
    options: [
      "Tăng lên 5 lần",
      "Tăng lên 6 lần",
      "Tăng lên 2 lần",
      "Không thay đổi",
    ],
    correct: 1,
    hint: "Tỉ lệ thể tích mới lập phương ăn theo tích hệ số tăng của các cạnh thành phần: 2 x 3 = 6.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Công thức thể tích ban đầu là V = a x b x c. Khi thay đổi kích thước, thể tích mới là: V_mới = (2 x a) x (3 x b) x c = 6 x (a x b x c) = 6 x V. Vậy thể tích tăng lên 6 lần.",
  },
  {
    cau: 14,
    question:
      "Một hình hộp chữ nhật có chiều cao 6 cm, diện tích toàn phần gấp đôi diện tích xung quanh. Biết chu vi đáy là 20 cm, tính diện tích đáy của hình hộp.",
    options: ["120 cm²", "30 cm²", "60 cm²", "40 cm²"],
    correct: 2,
    hint: "Diện tích toàn phần bằng 2 lần diện tích xung quanh đồng nghĩa với việc Tổng diện tích 2 đáy bằng đúng diện tích xung quanh.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Theo đề bài: Stp = 2 x Sxq => Sxq + 2 x Sđáy = 2 x Sxq => 2 x Sđáy = Sxq.<br>- Mà Sxq = Chu vi đáy x Chiều cao = 20 x 6 = 120 cm².<br>- Suy ra: 2 x Sđáy = 120 => Sđáy = 60 cm².",
  },
  {
    cau: 15,
    question:
      "Tính độ dài đoạn đường chéo lớn nhất nối hai đỉnh đối diện xuyên qua tâm của khối hình hộp chữ nhật có ba kích thước lần lượt là 3 cm, 4 cm và 5 cm.",
    options: ["50 cm", "√50 cm", "12 cm", "7√2 cm"],
    correct: 1,
    hint: "Sử dụng định lý Pitago không gian mở rộng 3 chiều để tính đường chéo: bình phương đường chéo bằng tổng bình phương 3 cạnh.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Công thức tính độ dài đường chéo d của hình hộp chữ nhật dựa trên định lý Pitago trong không gian là: d = √(a² + b² + c²). Thay số vào ta có: d = √(3² + 4² + 5²) = √(9 + 16 + 25) = √50 cm.",
  },
  // --- MỨC ĐỘ: VẬN DỤNG CAO ---
  {
    cau: 16,
    question:
      "Một bể hình hộp chữ nhật dài 2 m, rộng 1.2 m, cao 1.5 m đang chứa nước đến 2/3 bể. Thả một khối đá san hô chìm hoàn toàn vào bể thì thấy nước dâng lên vừa đầy sát mép. Tính thể tích khối đá.",
    options: ["1.2 m³", "2.4 m³", "3.6 m³", "0.6 m³"],
    correct: 0,
    hint: "Thể tích vật chiếm chỗ bằng thể tích nước dâng dồn lên, tương đương 1/3 thể tích tổng của cái bể.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Phần bể trống phía trên chiếm: 1 - 2/3 = 1/3 chiều cao bể. Khi thả khối đá vào, nước dâng lên vừa đầy bể nghĩa là thể tích khối đá đúng bằng thể tích phần bể trống này. <br>- Thể tích bể là: 2 x 1.2 x 1.5 = 3.6 m³.<br>- Thể tích khối đá: 3.6 x 1/3 = 1.2 m³.",
  },
  {
    cau: 17,
    question:
      "Người ta xếp các khối lập phương nhỏ cạnh 1 cm thành một hình hộp chữ nhật lớn dài 12 cm, rộng 10 cm, cao 8 cm rồi sơn kín 6 mặt ngoài. Hỏi có bao nhiêu khối nhỏ hoàn toàn không dính một mặt sơn nào?",
    options: ["960 khối", "480 khối", "384 khối", "520 khối"],
    correct: 1,
    hint: "Các khối không sơn nằm ở lõi trong. Hãy lấy mỗi kích thước cạnh ban đầu trừ bớt đi 2 cm ở hai đầu rìa rồi nhân lại: (12-2) x (10-2) x (8-2).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Các khối lập phương nhỏ không dính mặt sơn nào sẽ nằm ở phần lõi bên trong hình hộp chữ nhật lớn. Phần lõi này cũng tạo thành một hình hộp chữ nhật mới có các kích thước giảm đi 2 cm ở mỗi chiều (trừ phần rìa bên ngoài vỏ):<br>- Chiều dài lõi: 12 - 2 = 10 cm.<br>- Chiều rộng lõi: 10 - 2 = 8 cm.<br>- Chiều cao lõi: 8 - 2 = 6 cm.<br>- Số khối không sơn: 10 x 8 x 6 = 480 khối.",
  },
  {
    cau: 18,
    question:
      "Một tấm bìa hình chữ nhật kích thước 30x20 cm. Người ta cắt bỏ ở 4 góc 4 hình vuông cạnh x cm rồi gấp mép làm hộp không nắp. Tìm x để thể tích chiếc hộp tạo thành đạt giá trị lớn nhất.",
    options: ["x = 5 cm", "x = 4 cm", "x = (25 - 5√7) / 3 cm", "x = 6 cm"],
    correct: 2,
    hint: "Lập hàm thể tích khối hộp theo cạnh x cắt rồi tìm điểm cực trị tối ưu bằng cách khảo sát hàm số.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Chiếc hộp sau khi gấp sẽ có chiều dài là (30 - 2x), chiều rộng là (20 - 2x) và chiều cao là x. Hàm thể tích là: V(x) = x x (30 - 2x) x (20 - 2x) = 4x³ - 100x² + 600x.<br>- Lấy đạo hàm: V'(x) = 12x² - 200x + 600.<br>- Cho V'(x) = 0 <=> 3x² - 50x + 150 = 0.<br>- Giải phương trình bậc hai và loại nghiệm lớn, ta được x = (25 - 5√7) / 3 cm.",
  },
  {
    cau: 19,
    question:
      "Bác thợ hàn có thanh sắt dài tổng cộng 9.6 m để làm khung hình hộp chữ nhật có chiều cao cố định bằng 1 m. Tìm giá trị diện tích toàn phần lớn nhất mà chiếc khung sắt có thể đạt được.",
    options: ["3.78 m²", "4.82 m²", "3.50 m²", "5.76 m²"],
    correct: 0,
    hint: "Khối có 12 cạnh. Chu vi ràng buộc đáy từ chiều dài sắt, áp dụng bất đẳng thức Cô-si để tìm diện tích đáy lớn nhất.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Khung hình hộp gồm 4 cạnh dài, 4 cạnh rộng và 4 cạnh cao. Gọi dài và rộng là a, b. Tổng độ dài các cạnh là: 4a + 4b + 4(1) = 9.6 => a + b = 1.4 m.<br>- Áp dụng BĐT Cô-si: a x b <= ((a+b)/2)² = 0.7² = 0.49 m² (Dấu bằng xảy ra khi a = b = 0.7).<br>- Diện tích toàn phần cực đại: Stp = 2ab + 2(a+b)c = 2 x 0.49 + 2 x 1.4 x 1 = 0.98 + 2.8 = 3.78 m².",
  },
  {
    cau: 20,
    question:
      "Một con kiến đang đứng ở đỉnh đáy dưới của thùng hộp chữ nhật kín kích thước dài 4 dm, rộng 3 dm, cao 5 dm. Tìm quãng đường ngắn nhất kiến cần bò trên bề mặt vỏ ngoài để đến đỉnh đối diện chéo ở mặt trên.",
    options: ["5√2 dm", "√74 dm", "12 dm", "3 + √41 dm"],
    correct: 1,
    hint: "Phương pháp trải phẳng hình học không gian: Mở tung các mặt hộp nằm bẹt trên một mặt phẳng rồi nối đường thẳng ngắn nhất.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Ta trải bẹt hai mặt liên tiếp của hình hộp chữ nhật chứa đường đi của kiến lên mặt phẳng:<br>- Trường hợp 1: Trải mặt bên và mặt đáy theo cạnh rộng, khoảng cách là: √((4 + 3)² + 5²) = √(7² + 5²) = √74 dm.<br>- Trường hợp 2: Trải theo cạnh dài, khoảng cách là: √((3 + 5)² + 4²) = √(8² + 4²) = √80 dm.<br>- Trường hợp 3: Trải theo cạnh cao, khoảng cách là: √((4 + 5)² + 3²) = √(9² + 3²) = √90 dm.<br>Quãng đường ngắn nhất là √74 dm.",
  },
];

// Khai báo cấu hình riêng cho bài kiểm tra
const redirectUrl = "ketquaktrahhcn.html";
const timerKey = "timer_hhcn";
const topicId = "hhcn";

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
  if (window.location.pathname.includes("kiemtrahhcn.html")) {
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
