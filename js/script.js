import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

/* =========================
   FIREBASE CONFIG
========================= */

const firebaseConfig = {
  apiKey: "AIzaSyAlY1PW-xs_QhTqjtMwRrVqOXoFSA3LHaQ",
  authDomain: "manhle-project-2026.firebaseapp.com",
  projectId: "manhle-project-2026",
  storageBucket: "manhle-project-2026.firebasestorage.app",
  messagingSenderId: "785813167950",
  appId: "1:785813167950:web:97142ecea716f42ff0481f",
  measurementId: "G-R89YDYQJVB",
};

/* =========================
   KHỞI TẠO FIREBASE
========================= */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/* =========================
   ĐĂNG NHẬP / ĐĂNG XUẤT
========================= */

const loggedOutView = document.getElementById("logged-out-view");

const loggedInView = document.getElementById("logged-in-view");

const userNameDisplay = document.getElementById("user-name");

const logoutBtn = document.getElementById("logout-btn");

/* =========================
   KIỂM TRA TRẠNG THÁI LOGIN
========================= */

onAuthStateChanged(auth, (user) => {
  // =========================
  // ĐÃ ĐĂNG NHẬP
  // =========================

  if (user) {
    // Ẩn login/register
    if (loggedOutView) {
      loggedOutView.style.display = "none";
    }

    // Hiện user
    if (loggedInView) {
      loggedInView.style.display = "flex";
    }

    // Tạo tên hiển thị
    const displayName =
      user.displayName ||
      localStorage.getItem("username") ||
      user.email.split("@")[0];

    // Hiện tên
    if (userNameDisplay) {
      userNameDisplay.textContent = "Chào, " + displayName;
    }

    // =========================
    // LƯU LOCALSTORAGE
    // =========================

    localStorage.setItem("username", displayName);

    localStorage.setItem("userEmail", user.email);

    // Avatar Google
    if (user.photoURL) {
      localStorage.setItem("userAvatarData", user.photoURL);
    }
  }

  // =========================
  // CHƯA ĐĂNG NHẬP
  // =========================
  else {
    // Hiện login/register
    if (loggedOutView) {
      loggedOutView.style.display = "flex";
    }

    // Ẩn user
    if (loggedInView) {
      loggedInView.style.display = "none";
    }

    // Reset text
    if (userNameDisplay) {
      userNameDisplay.textContent = "";
    }
  }
});

/* =========================
   ĐĂNG XUẤT
========================= */

logoutBtn?.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Xóa dữ liệu local
      localStorage.clear();

      alert("Bạn đã đăng xuất thành công!");

      // Reload
      window.location.reload();
    })

    .catch((error) => {
      console.error(error);

      alert("Có lỗi khi đăng xuất!");
    });
});

/* =========================
   STICKY HEADER
========================= */

window.addEventListener("scroll", () => {
  const header = document.querySelector(".top-nav");

  if (!header) return;

  if (window.scrollY > 50) {
    header.style.height = "60px";

    header.style.backgroundColor = "rgba(255,255,255,0.95)";
  } else {
    header.style.height = "70px";

    header.style.backgroundColor = "#ffffff";
  }
});

/* =========================
   VIDEO MODAL
========================= */

const cards = document.querySelectorAll(".card");

const modal = document.getElementById("videoModal");

const closeBtn = document.querySelector(".close-btn");

const mainVideo = document.getElementById("mainVideo");

const modalTitle = document.getElementById("modalTitle");

const modalInfo = document.getElementById("modalInfo");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-title");

    const info = card.getAttribute("data-info");

    const videoSrc = card.getAttribute("data-video");

    if (modalTitle) {
      modalTitle.innerText = title || "";
    }

    if (modalInfo) {
      modalInfo.innerText = info || "";
    }

    if (mainVideo && videoSrc) {
      mainVideo.src = videoSrc;

      mainVideo.play();
    }

    if (modal) {
      modal.style.display = "flex";
    }
  });
});

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }

  if (mainVideo) {
    mainVideo.pause();

    mainVideo.src = "";
  }
}

closeBtn?.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

/* =========================
   YOUTUBE POPUP
========================= */

function openVideo(videoId) {
  const modal = document.getElementById("videoModal");

  const player = document.getElementById("youtubePlayer");

  if (!modal || !player) return;

  player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

  modal.style.display = "block";
}

function closeVideo() {
  const modal = document.getElementById("videoModal");

  const player = document.getElementById("youtubePlayer");

  if (!modal || !player) return;

  player.src = "";

  modal.style.display = "none";
}

/* =========================
   VIDEO INLINE
========================= */

function playVideoInline(cardElement, videoId) {
  if (cardElement.classList.contains("playing")) return;

  cardElement.classList.add("playing");

  const container = cardElement.querySelector(".video-container");

  if (!container) return;

  container.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>

    <button
      class="close-inline-video"
      onclick="stopVideoInline(event, this)">
      ×
    </button>
  `;

  container.style.display = "block";
}

function stopVideoInline(event, btn) {
  event.stopPropagation();

  const card = btn.closest(".card");

  if (!card) return;

  const container = card.querySelector(".video-container");

  if (!container) return;

  card.classList.remove("playing");

  container.style.display = "none";

  container.innerHTML = "";
}

/* =========================
   VIDEO SECTION
========================= */

const cardItems = document.querySelectorAll(".card-item");

const videoSection = document.getElementById("video-section");

const videoTag = document.getElementById("detail-video");

const titleTag = document.getElementById("playing-title");

cardItems.forEach((card) => {
  card.addEventListener("click", () => {
    const name = card.getAttribute("data-n");

    const src = card.getAttribute("data-v");

    if (titleTag) {
      titleTag.innerText = "Đang xem: " + name;
    }

    if (videoTag) {
      videoTag.src = src;

      videoTag.play();
    }

    if (videoSection) {
      videoSection.style.display = "block";

      videoSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* =========================
   PLAY VIDEO INSIDE CARD
========================= */

function playVideo(element, videoId) {
  if (element.classList.contains("is-playing")) return;

  element.classList.add("is-playing");

  const target = element.querySelector(".video-target");

  if (!target) return;

  target.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;

  target.style.display = "block";
}

window.playVideo = playVideo;

/* =========================
   QUIZ SYSTEM
========================= */



function backToQuizList() {
  document.getElementById("quizContentArea").style.display = "none";

  document.getElementById("quizSelection").style.display = "grid";

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

    allOptions.forEach((opt) => {
      opt.classList.remove("correct-answer", "wrong-answer");
    });

    if (selectedOption) {
      if (selectedOption.value === correctAnswer) {
        score++;

        selectedOption.closest(".option-item").classList.add("correct-answer");
      } else {
        selectedOption.closest(".option-item").classList.add("wrong-answer");

        allOptions.forEach((opt) => {
          if (opt.querySelector("input").value === correctAnswer) {
            opt.classList.add("correct-answer");
          }
        });
      }
    } else {
      allOptions.forEach((opt) => {
        if (opt.querySelector("input").value === correctAnswer) {
          opt.classList.add("correct-answer");
        }
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

window.openTopic = openTopic;

window.backToQuizList = backToQuizList;

window.checkCurrentQuiz = checkCurrentQuiz;
function openTopic(topic) {
  const key = topic.toLowerCase();

  if (key === "hhcn") {
    window.location.href = "kiemtrahhcn.html";
  } else if (key === "hlp") {
    window.location.href = "kiemtrahlp.html";
  } else if (key === "htt") {
    window.location.href = "kiemtrahtt.html";
  } else if (key === "ltdtg") {
    window.location.href = "kiemtrahltdtg.html";
  } else if (key === "ctgd") {
    window.location.href = "kiemtrahctgd.html";
  } else if (key === "ctgdeu") {
    window.location.href = "kiemtrahctugd.html";
  } else {
    alert("Bài trắc nghiệm này đang được cập nhật!");
  }
}

window.openTopic = openTopic;
const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});