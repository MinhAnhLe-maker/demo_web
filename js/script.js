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
   ẨN USER VIEW TRƯỚC
========================= */

if (loggedInView) {
  loggedInView.style.display = "none";
}

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

    // Lưu localStorage
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
   HAMBURGER MENU
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const hamburgerBtn = document.getElementById("hamburger-btn");

  const menu = document.querySelector(".menu");

  // Mở / đóng menu
  if (hamburgerBtn && menu) {

    hamburgerBtn.addEventListener("click", () => {

      menu.classList.toggle("active");
      hamburgerBtn.classList.toggle("active");

    });

  }

  // Tự đóng menu khi click link
  document.querySelectorAll(".menu a").forEach((link) => {

    link.addEventListener("click", () => {

      menu.classList.remove("active");
      hamburgerBtn.classList.remove("active");

    });

  });

  // Close Modal Logic
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".modal-close-btn");
  const iframe = document.getElementById("modalVideoIframe");
  const localVideo = document.getElementById("modalLocalVideo");

  if (modal) {
    const closeModal = () => {
      modal.style.display = "none";
      if (iframe) iframe.src = "";
      if (localVideo) {
        localVideo.pause();
        localVideo.src = "";
      }
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

});

/* =========================
   VIDEO MODAL POPUP
========================= */

window.playVideo = function (cardElement, videoSource) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalVideoIframe");
  const localVideo = document.getElementById("modalLocalVideo");

  if (!modal || !iframe || !localVideo) return;

  // Detect if videoSource is local MP4 or YouTube ID
  const isLocal = videoSource.endsWith(".mp4") || videoSource.includes("/");

  if (isLocal) {
    // Hide iframe
    iframe.style.display = "none";
    iframe.src = "";

    // Setup and show local video
    localVideo.src = videoSource;
    localVideo.style.display = "block";
    localVideo.play().catch((err) => {
      console.warn("Autoplay was blocked or failed:", err);
    });
  } else {
    // Pause and hide local video
    localVideo.pause();
    localVideo.style.display = "none";
    localVideo.src = "";

    // Setup and show YouTube iframe
    iframe.src = `https://www.youtube.com/embed/${videoSource}?autoplay=1`;
    iframe.style.display = "block";
  }

  modal.style.display = "block";
};