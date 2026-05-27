const danhSachCauHoi = [
  {
    cau: 1,
    question: "Hình chóp tứ giác đều có đáy là hình gì?",
    options: ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Hình bình hành"],
    correct: 0,
    hint: "Đáy của hình chóp tứ giác 'đều' phải là một đa giác đều.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đáy của hình chóp tứ giác đều là hình vuông.",
  },
  {
    cau: 2,
    question: "Hình chóp tứ giác đều có bao nhiêu mặt bên?",
    options: ["3 mặt", "4 mặt", "5 mặt", "6 mặt"],
    correct: 1,
    hint: "Số mặt bên tương ứng với số cạnh của đáy.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đáy là tứ giác nên có 4 mặt bên là các tam giác cân.",
  },
  {
    cau: 3,
    question: "Các mặt bên của hình chóp tứ giác đều là hình gì?",
    options: ["Tam giác đều", "Tam giác vuông", "Tam giác cân", "Hình thang"],
    correct: 2,
    hint: "Tất cả các mặt bên đều chung đỉnh chóp và bằng nhau.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Các mặt bên là các tam giác cân bằng nhau.",
  },
  {
    cau: 4,
    question: "Hình chóp tứ giác đều có bao nhiêu đỉnh?",
    options: ["4 đỉnh", "5 đỉnh", "6 đỉnh", "8 đỉnh"],
    correct: 1,
    hint: "4 đỉnh ở đáy và 1 đỉnh chóp.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình chóp tứ giác đều có 4 đỉnh đáy và 1 đỉnh chóp, tổng là 5 đỉnh.",
  },
  {
    cau: 5,
    question: "Công thức tính thể tích V của hình chóp tứ giác đều là gì?",
    options: [
      "V = a² x h",
      "V = 1/3 x a² x h",
      "V = 1/2 x a² x h",
      "V = 4 x a² x h",
    ],
    correct: 1,
    hint: "V = 1/3 x Sđáy x h, với Sđáy = a².",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Với cạnh đáy a, diện tích đáy là a², nên V = 1/3 x a² x h.",
  },
  {
    cau: 6,
    question:
      "Diện tích xung quanh của hình chóp tứ giác đều được tính bằng công thức nào?",
    options: [
      "Sxq = Pđáy x d",
      "Sxq = 1/2 x Pđáy x d",
      "Sxq = Pđáy x h",
      "Sxq = 4 x Smặt bên",
    ],
    correct: 1,
    hint: "Pđáy là chu vi đáy, d là trung đoạn.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Sxq = 1/2 x chu vi đáy x trung đoạn.",
  },
  {
    cau: 7,
    question:
      "Một hình chóp tứ giác đều có cạnh đáy 4cm, trung đoạn 5cm. Sxq là?",
    options: ["40 cm²", "80 cm²", "20 cm²", "10 cm²"],
    correct: 0,
    hint: "Chu vi = 4 x 4 = 16. Sxq = 1/2 x 16 x 5.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Sxq = 1/2 x (4 x 4) x 5 = 40 cm².",
  },
  {
    cau: 8,
    question:
      "Hình chóp tứ giác đều có cạnh đáy 6cm, chiều cao 4cm. Thể tích là?",
    options: ["48 cm³", "144 cm³", "24 cm³", "72 cm³"],
    correct: 0,
    hint: "V = 1/3 x 6² x 4.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> V = 1/3 x 36 x 4 = 48 cm³.",
  },
  {
    cau: 9,
    question:
      "Trong hình chóp tứ giác đều, chân đường cao hạ từ đỉnh trùng với:",
    options: [
      "Một đỉnh đáy",
      "Trung điểm một cạnh đáy",
      "Giao điểm hai đường chéo đáy",
      "Trọng tâm một mặt bên",
    ],
    correct: 2,
    hint: "Đặc điểm của hình chóp đều.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Chân đường cao của hình chóp đều trùng với tâm của đáy (giao hai đường chéo).",
  },
  {
    cau: 10,
    question:
      "Nếu trung đoạn d tăng 2 lần, chu vi đáy không đổi thì Sxq tăng mấy lần?",
    options: ["2 lần", "4 lần", "Không đổi", "0.5 lần"],
    correct: 0,
    hint: "Sxq tỉ lệ thuận với d.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Vì Sxq = 1/2 x P x d nên nếu d tăng 2 thì Sxq tăng 2.",
  },
  {
    cau: 11,
    question: "Hình chóp tứ giác đều có bao nhiêu cạnh?",
    options: ["4 cạnh", "6 cạnh", "8 cạnh", "10 cạnh"],
    correct: 2,
    hint: "4 cạnh đáy + 4 cạnh bên.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Có 4 cạnh đáy và 4 cạnh bên.",
  },
  {
    cau: 12,
    question:
      "Cho chóp tứ giác đều cạnh đáy a=10cm, chiều cao h=12cm. Tính thể tích.",
    options: ["400 cm³", "1200 cm³", "300 cm³", "600 cm³"],
    correct: 0,
    hint: "V = 1/3 x 10² x 12.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> V = 1/3 x 100 x 12 = 400 cm³.",
  },
  {
    cau: 13,
    question:
      "Nếu cạnh đáy tăng 2 lần, chiều cao giữ nguyên, thể tích tăng mấy lần?",
    options: ["2 lần", "4 lần", "6 lần", "8 lần"],
    correct: 1,
    hint: "Diện tích đáy tăng 2² = 4 lần.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Sđáy mới = (2a)² = 4a². Vậy V tăng 4 lần.",
  },
  {
    cau: 14,
    question: "Trung đoạn d là đường cao của:",
    options: ["Mặt đáy", "Hình chóp", "Mặt bên", "Đường chéo đáy"],
    correct: 2,
    hint: "Định nghĩa trung đoạn.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Trung đoạn là đường cao kẻ từ đỉnh chóp tới một cạnh đáy.",
  },
  {
    cau: 15,
    question: "Diện tích toàn phần Stp bằng?",
    options: ["Sxq + Sđáy", "Sxq + 2 x Sđáy", "Sxq + 4 x Sđáy", "Sxq"],
    correct: 0,
    hint: "Hình chóp có 1 đáy.",
    explanation: "<strong>Lời giải chi tiết:</strong> Stp = Sxq + Sđáy.",
  },
  {
    cau: 16,
    question:
      "Cho chóp tứ giác đều cạnh đáy 6cm, cạnh bên 5cm. Chiều cao h là?",
    options: ["3cm", "4cm", "5cm", "6cm"],
    correct: 1,
    hint: "Pitago: h² + (nửa đường chéo)² = cạnh bên².",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Nửa đường chéo = 3√2. h² = 5² - (3√2)² = 25 - 18 = 7 (h = 4).",
  },
  {
    cau: 17,
    question:
      "Hình chóp tứ giác đều có cạnh bên vuông góc với nhau tại đỉnh chóp thì các mặt bên là tam giác gì?",
    options: ["Vuông cân", "Đều", "Cân", "Vuông"],
    correct: 0,
    hint: "Góc ở đỉnh chóp bằng 90 độ.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Nếu cạnh bên vuông góc, mặt bên là tam giác vuông cân.",
  },
  {
    cau: 18,
    question:
      "Một chiếc lồng đèn chóp tứ giác đều, cạnh đáy 20cm, trung đoạn 15cm. Diện tích giấy cần dán 4 mặt bên là?",
    options: ["300 cm²", "600 cm²", "1200 cm²", "150 cm²"],
    correct: 1,
    hint: "Sxq = 1/2 x (20x4) x 15.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Sxq = 1/2 x 80 x 15 = 600 cm².",
  },
  {
    cau: 19,
    question: "Tâm của đáy hình chóp tứ giác đều là:",
    options: [
      "Tâm đường tròn ngoại tiếp đáy",
      "Trọng tâm đáy",
      "Điểm bất kỳ ở đáy",
      "Đỉnh đáy",
    ],
    correct: 0,
    hint: "Đáy là hình vuông.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Tâm đáy là giao điểm hai đường chéo của hình vuông.",
  },
  {
    cau: 20,
    question:
      "Nếu chiều cao tăng 3 lần, diện tích đáy không đổi, thể tích tăng mấy lần?",
    options: ["3 lần", "9 lần", "1/3 lần", "Không đổi"],
    correct: 0,
    hint: "V tỉ lệ thuận với h.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Vì V = 1/3 x S x h nên h tăng 3 thì V tăng 3.",
  },
];

// Khai báo cấu hình riêng cho bài kiểm tra
const redirectUrl = "ketquakthctugd.html";
const timerKey = "timer_hctugd";
const topicId = "hctugd";

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

// Chỉ reset trạng thái khi người dùng vào làm bài mới hoàn toàn (Không phải từ xem lại kết quả)
if (!dangXemLai) {
  if (window.location.pathname.includes("kiemtrahctugd.html")) {
    daNopBai = false;
    localStorage.setItem("daNopBaiTrangThai", "false");
    localStorage.setItem("dangXemLai", "false");
    localStorage.removeItem("mangDapAnNguoiDung");
    localStorage.removeItem(timerKey);
  }
}

// Khởi tạo mảng lưu đáp án của người dùng
let mangDapAnNguoiDung =
  JSON.parse(localStorage.getItem("mangDapAnNguoiDung")) ||
  new Array(danhSachCauHoi.length).fill(null);

// Hàm kết xuất và tải nội dung câu hỏi lên giao diện
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

  // Quản lý hiển thị khung gợi ý nhỏ
  const phanTuHint = document.getElementById("hint-text");
  if (phanTuHint) {
    const thongTinBocNgoai = phanTuHint.parentElement;
    if (daNopBai && dangXemLai) {
      phanTuHint.innerHTML = "";
      if (
        thongTinBocNgoai &&
        thongTinBocNgoai.id !== "quiz-container" &&
        thongTinBocNgoai.tagName !== "BODY"
      ) {
        thongTinBocNgoai.style.display = "none";
      } else {
        phanTuHint.style.display = "none";
      }
    } else {
      phanTuHint.innerHTML = duLieuCauHoi.hint;
      phanTuHint.style.display = "block";
      if (
        thongTinBocNgoai &&
        thongTinBocNgoai.id !== "quiz-container" &&
        thongTinBocNgoai.tagName !== "BODY"
      ) {
        thongTinBocNgoai.style.display = "block";
      }
    }
  }

  // Cập nhật thanh tiến trình làm bài
  if (document.getElementById("progress-bar")) {
    const phanTramTienTrinh =
      ((viTriCauHienTai + 1) / danhSachCauHoi.length) * 100;
    document.getElementById("progress-bar").style.width =
      `${phanTramTienTrinh}%`;
  }

  const khungChuaOptions = document.getElementById("options-container");
  if (khungChuaOptions) {
    khungChuaOptions.innerHTML = "";

    // Kết xuất động các nút lựa chọn A, B, C, D
    duLieuCauHoi.options.forEach((txtOption, index) => {
      const nutOption = document.createElement("button");
      nutOption.className = "option-btn";
      const kyTuDau = String.fromCharCode(65 + index);
      nutOption.innerHTML = `<strong>${kyTuDau}.</strong> ${txtOption}`;

      if (daNopBai && dangXemLai) {
        nutOption.disabled = true; // Khóa chức năng tương tác click khi đang xem giải
        if (index === duLieuCauHoi.correct) {
          nutOption.style.backgroundColor = "#2ecc71"; // Đáp án đúng đổi thành Xanh lá
          nutOption.style.color = "white";
          nutOption.style.borderColor = "#27ae60";
        } else if (index === mangDapAnNguoiDung[viTriCauHienTai]) {
          nutOption.style.backgroundColor = "#e74c3c"; // Lựa chọn sai đổi thành màu Đỏ
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

    // Tạo khung hiển thị kết quả đúng/sai cùng lời giải chi tiết (chế độ xem lại bài)
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

  // Gọi MathJax kết xuất lại công thức toán học sau khi tải nội dung mới vào HTML
  if (window.MathJax && window.MathJax.typeset) {
    window.MathJax.typeset();
  }

  capNhatNutDieuHuong();
  renderPalette();
}

// Cập nhật text động hiển thị trên nút chức năng (Tiếp theo / Nộp bài / Thoát xem)
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

// Xử lý sự kiện khi học sinh click lựa chọn đáp án
function chonDapAn(indexChon) {
  if (daNopBai) return;

  if (mangDapAnNguoiDung[viTriCauHienTai] === indexChon) {
    mangDapAnNguoiDung[viTriCauHienTai] = null; // Bấm lần 2 -> Hủy chọn câu đó
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

// Hàm xử lý khi bấm nút Tiến lên hoặc Nộp bài tính điểm
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

// Quay lại câu hỏi trước đó
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

// Lắng nghe trạng thái DOM để kích hoạt khởi chạy
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
