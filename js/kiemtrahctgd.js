// Ngân hàng dữ liệu gồm 20 câu hỏi chia đều 4 mức độ dành riêng cho HÌNH TRỤ TRÒN
const danhSachCauHoi = [
  {
    cau: 1,
    question:
      "Hình chóp tam giác đều có bao nhiêu mặt, bao nhiêu cạnh và bao nhiêu đỉnh?",
    options: [
      "4 mặt, 6 cạnh, 4 đỉnh",
      "5 mặt, 8 cạnh, 5 đỉnh",
      "4 mặt, 4 cạnh, 4 đỉnh",
      "6 mặt, 9 cạnh, 6 đỉnh",
    ],
    correct: 0,
    hint: "Hãy tưởng tượng hình ảnh của một kim tự tháp có đáy là tam giác.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình chóp tam giác đều có 1 mặt đáy tam giác và 3 mặt bên tam giác cân (tổng 4 mặt); có 3 cạnh đáy và 3 cạnh bên (tổng 6 cạnh); có 3 đỉnh ở đáy và 1 đỉnh ở chóp (tổng 4 đỉnh).",
  },
  {
    cau: 2,
    question: "Các mặt bên của hình chóp tam giác đều là hình gì?",
    options: [
      "Hình tam giác vuông",
      "Hình tam giác đều",
      "Hình tam giác cân",
      "Hình chữ nhật",
    ],
    correct: 2,
    hint: "Trong hình chóp đều, tất cả các mặt bên đều bằng nhau.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Các mặt bên của hình chóp tam giác đều là các tam giác cân bằng nhau tại đỉnh chóp.",
  },
  {
    cau: 3,
    question: "Đáy của hình chóp tam giác đều là hình gì?",
    options: [
      "Tam giác vuông",
      "Tam giác đều",
      "Tam giác cân",
      "Tam giác bất kỳ",
    ],
    correct: 1,
    hint: "Tên gọi 'chóp tam giác đều' đã khẳng định tính chất của mặt đáy.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Theo định nghĩa, đáy của hình chóp tam giác đều phải là một tam giác đều.",
  },
  {
    cau: 4,
    question:
      "Công thức tính diện tích xung quanh (Sxq) của hình chóp tam giác đều?",
    options: [
      "Sxq = Pđáy x d",
      "Sxq = 1/2 x Pđáy x d",
      "Sxq = Pđáy x h",
      "Sxq = 1/3 x Sđáy x h",
    ],
    correct: 1,
    hint: "Pđáy là chu vi đáy, d là trung đoạn (chiều cao mặt bên).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích xung quanh bằng nửa tích chu vi đáy với trung đoạn: Sxq = 1/2 x Pđáy x d.",
  },
  {
    cau: 5,
    question: "Công thức tính thể tích V của hình chóp tam giác đều?",
    options: [
      "V = Sđáy x h",
      "V = 1/3 x Sđáy x h",
      "V = 1/2 x Sđáy x h",
      "V = 3 x Sđáy x h",
    ],
    correct: 1,
    hint: "h là chiều cao của hình chóp (đoạn nối từ đỉnh xuống tâm đáy).",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Thể tích hình chóp luôn bằng 1/3 diện tích đáy nhân với chiều cao: V = 1/3 x Sđáy x h.",
  },
  {
    cau: 6,
    question:
      "Cho chóp tam giác đều có cạnh đáy 6cm, trung đoạn d = 5cm. Tính Sxq.",
    options: ["30 cm²", "45 cm²", "90 cm²", "15 cm²"],
    correct: 1,
    hint: "Pđáy = 6 x 3 = 18cm. Sxq = 1/2 x P x d.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> P = 18cm. Sxq = 1/2 x 18 x 5 = 45 cm².",
  },
  {
    cau: 7,
    question:
      "Hình chóp tam giác đều có Sđáy = 10cm², h = 6cm. Thể tích V là?",
    options: ["60 cm³", "20 cm³", "30 cm³", "10 cm³"],
    correct: 1,
    hint: "V = 1/3 x Sđáy x h.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> V = 1/3 x 10 x 6 = 20 cm³.",
  },
  {
    cau: 8,
    question: "Trong hình chóp tam giác đều, các cạnh bên có quan hệ gì?",
    options: ["Song song", "Vuông góc", "Bằng nhau", "Chéo nhau"],
    correct: 2,
    hint: "Tính chất hình chóp đều.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Trong hình chóp tam giác đều, các cạnh bên đều bằng nhau.",
  },
  {
    cau: 9,
    question:
      "Nếu tăng diện tích đáy lên 3 lần, chiều cao giữ nguyên thì thể tích tăng bao nhiêu?",
    options: ["Không đổi", "2 lần", "3 lần", "9 lần"],
    correct: 2,
    hint: "V = 1/3 x S x h.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> V tỉ lệ thuận với Sđáy, nên S tăng 3 thì V tăng 3.",
  },
  {
    cau: 10,
    question: "Tính trung đoạn d của chóp biết Sxq = 60cm², chu vi đáy = 12cm.",
    options: ["5 cm", "10 cm", "20 cm", "2 cm"],
    correct: 1,
    hint: "Sxq = 1/2 x P x d => d = 2 x Sxq / P.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> d = (2 x 60) / 12 = 10 cm.",
  },
  {
    cau: 11,
    question: "Diện tích đáy tam giác đều cạnh a có công thức là gì?",
    options: ["(a²√3)/4", "(a²√3)/2", "a²√3", "a²"],
    correct: 0,
    hint: "Đây là công thức diện tích tam giác đều.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Diện tích tam giác đều cạnh a là (a²√3)/4.",
  },
  {
    cau: 12,
    question:
      "Hình chóp tam giác đều có cạnh đáy 4cm, chiều cao h=3cm. Tính thể tích.",
    options: ["4√3 cm³", "2√3 cm³", "6√3 cm³", "8√3 cm³"],
    correct: 1,
    hint: "Sđáy = (4²√3)/4 = 4√3. V = 1/3 x S x h.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Sđáy = 4√3. V = 1/3 x 4√3 x 3 = 4√3 cm³.",
  },
  {
    cau: 13,
    question: "Số đỉnh của hình chóp tam giác đều là bao nhiêu?",
    options: ["3", "4", "5", "6"],
    correct: 1,
    hint: "3 đỉnh đáy + 1 đỉnh chóp.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình chóp tam giác đều có 4 đỉnh.",
  },
  {
    cau: 14,
    question: "Trung đoạn của hình chóp tam giác đều là gì?",
    options: [
      "Chiều cao mặt bên",
      "Chiều cao hình chóp",
      "Cạnh bên",
      "Cạnh đáy",
    ],
    correct: 0,
    hint: "Định nghĩa trung đoạn.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Trung đoạn là đường cao của tam giác mặt bên tính từ đỉnh chóp.",
  },
  {
    cau: 15,
    question: "Cho Sxq = 30cm², d = 4cm. Chu vi đáy P bằng?",
    options: ["7.5 cm", "15 cm", "60 cm", "120 cm"],
    correct: 1,
    hint: "P = 2 x Sxq / d.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> P = (2 x 30) / 4 = 15 cm.",
  },
  {
    cau: 16,
    question: "Hình chóp tam giác đều có bao nhiêu mặt bên?",
    options: ["2", "3", "4", "5"],
    correct: 1,
    hint: "Đáy là tam giác thì có bao nhiêu mặt bên?",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Đáy là tam giác nên có 3 mặt bên.",
  },
  {
    cau: 17,
    question: "Chiều cao của hình chóp là gì?",
    options: [
      "Khoảng cách từ đỉnh tới tâm đáy",
      "Độ dài cạnh bên",
      "Độ dài trung đoạn",
      "Độ dài cạnh đáy",
    ],
    correct: 0,
    hint: "Định nghĩa chiều cao khối chóp.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Chiều cao là đoạn thẳng vuông góc từ đỉnh chóp đến tâm đáy.",
  },
  {
    cau: 18,
    question: "Diện tích toàn phần Stp bằng gì?",
    options: ["Sxq + Sđáy", "Sxq + 3 x Sđáy", "Sxq + 2 x Sđáy", "Sxq"],
    correct: 0,
    hint: "Diện tích toàn phần = diện tích xung quanh + diện tích mặt đáy.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình chóp chỉ có 1 đáy nên Stp = Sxq + Sđáy.",
  },
  {
    cau: 19,
    question:
      "Chóp tam giác đều cạnh đáy a=6cm, mặt bên là tam giác đều. Tính Sxq.",
    options: ["54 cm²", "27 cm²", "18 cm²", "36 cm²"],
    correct: 1,
    hint: "Mặt bên tam giác đều cạnh 6, trung đoạn d = (6√3)/2 = 3√3.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> d = 3√3. Sxq = 1/2 x (6x3) x 3√3 ≈ 27 cm².",
  },
  {
    cau: 20,
    question: "Tổng số cạnh của hình chóp tam giác đều là?",
    options: ["3", "4", "6", "9"],
    correct: 2,
    hint: "3 cạnh đáy + 3 cạnh bên.",
    explanation:
      "<strong>Lời giải chi tiết:</strong> Hình chóp tam giác đều có 6 cạnh.",
  },
];

// Khai báo cấu hình riêng cho bài kiểm tra
const redirectUrl = "ketquakthctgd.html";
const timerKey = "timer_hctgd";
const topicId = "hctgd";

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
  if (window.location.pathname.includes("kiemtrahctgd.html")) {
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
