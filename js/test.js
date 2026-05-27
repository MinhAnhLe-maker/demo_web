let currentActiveTopic = "";

function openTopic(topicId) {
  // Ẩn lưới 6 ô bài tập ban đầu
  document.getElementById("quizSelection").style.display = "none";

  // Hiện khung làm bài
  document.getElementById("quizContentArea").style.display = "block";

  // Ẩn tất cả các bài khác để không bị xếp chồng
  document.querySelectorAll(".topic-section").forEach((section) => {
    section.style.display = "none";
  });

  // Mở đúng bài học sinh đã chọn
  document.getElementById("topic-" + topicId).style.display = "block";
  currentActiveTopic = topicId;

  // Reset hộp hiển thị điểm
  const resultBox = document.getElementById("quizResult");
  resultBox.style.display = "none";
  resultBox.innerHTML = "";
}

function backToQuizList() {
  // Quay lại màn hình hiển thị 6 ô chọn bài
  document.getElementById("quizContentArea").style.display = "none";
  document.getElementById("quizSelection").style.display = "grid";

  // Xóa dấu tích cũ để học sinh làm lại từ đầu
  document
    .querySelectorAll('.topic-section input[type="radio"]')
    .forEach((radio) => {
      radio.checked = false;
    });
  document.querySelectorAll(".option-item").forEach((opt) => {
    opt.classList.remove("correct-answer", "wrong-answer");
  });
}

function checkCurrentQuiz() {
  if (!currentActiveTopic) return;

  const activeSection = document.getElementById("topic-" + currentActiveTopic);
  const quizCards = activeSection.querySelectorAll(".quiz-card");
  let score = 0;

  quizCards.forEach((card) => {
    const correctAnswer = card.getAttribute("data-correct");
    const selectedOption = card.querySelector('input[type="radio"]:checked');
    const allOptions = card.querySelectorAll(".option-item");

    allOptions.forEach((opt) =>
      opt.classList.remove("correct-answer", "wrong-answer"),
    );

    if (selectedOption) {
      if (selectedOption.value === correctAnswer) {
        score++;
        selectedOption.closest(".option-item").classList.add("correct-answer");
      } else {
        selectedOption.closest(".option-item").classList.add("wrong-answer");
        allOptions.forEach((opt) => {
          if (opt.querySelector("input").value === correctAnswer)
            opt.classList.add("correct-answer");
        });
      }
    } else {
      allOptions.forEach((opt) => {
        if (opt.querySelector("input").value === correctAnswer)
          opt.classList.add("correct-answer");
      });
    }
  });

  const resultBox = document.getElementById("quizResult");
  resultBox.style.display = "block";
  resultBox.innerHTML = `Kết quả: Bạn làm đúng ${score} / ${quizCards.length} câu.`;
  resultBox.style.background =
    score === quizCards.length ? "#d1fae5" : "#fef3c7";
  resultBox.style.color = score === quizCards.length ? "#065f46" : "#92400e";
}
function lamMoiTatCa() {
  localStorage.removeItem("mangDapAnNguoiDung");
  localStorage.removeItem("daNopBaiTrangThai");
  alert("Đã đặt lại toàn bộ bài kiểm tra!");
}