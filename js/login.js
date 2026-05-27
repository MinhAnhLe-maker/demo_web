import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// =========================
// FIREBASE CONFIG
// =========================

const firebaseConfig = {
  apiKey: "AIzaSyAlY1PW-xs_QhTqjtMwRrVqOXoFSA3LHaQ",
  authDomain: "manhle-project-2026.firebaseapp.com",
  projectId: "manhle-project-2026",
  storageBucket: "manhle-project-2026.firebasestorage.app",
  messagingSenderId: "785813167950",
  appId: "1:785813167950:web:97142ecea716f42ff0481f",
  measurementId: "G-R89YDYQJVB",
};

// =========================
// KHỞI TẠO FIREBASE
// =========================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// =========================
// LẤY ELEMENT HTML
// =========================

const loginForm = document.getElementById("loginForm");

const btnGoogleLogin = document.getElementById("btnGoogleLogin");

// =========================
// ĐĂNG NHẬP EMAIL/PASSWORD
// =========================

loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Lấy dữ liệu input
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  try {
    // Đăng nhập Firebase
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Lấy user
    const user = userCredential.user;

    // =========================
    // LƯU THÔNG TIN USER
    // =========================

    localStorage.setItem("username", user.displayName || email);

    localStorage.setItem("userEmail", user.email);

    // =========================
    // THÀNH CÔNG
    // =========================

    alert("Đăng nhập thành công!");

    window.location.href = "index.html";
  } catch (error) {
    console.error("Lỗi đăng nhập:", error.code);

    // =========================
    // XỬ LÝ LỖI
    // =========================

    if (
      error.code === "auth/invalid-credential" ||
      error.code === "auth/wrong-password"
    ) {
      alert("Email hoặc mật khẩu không chính xác!");
    } else if (error.code === "auth/user-not-found") {
      alert("Tài khoản không tồn tại!");
    } else {
      alert("Đã có lỗi xảy ra. Hãy thử lại!");
    }
  }
});

// =========================
// ĐĂNG NHẬP GOOGLE
// =========================

btnGoogleLogin?.addEventListener("click", async () => {
  try {
    // Mở popup Google
    const result = await signInWithPopup(auth, provider);

    // Lấy user
    const user = result.user;

    // =========================
    // LƯU USER
    // =========================

    localStorage.setItem("username", user.displayName || "Người dùng Google");

    localStorage.setItem("userEmail", user.email);

    // Nếu có avatar Google
    if (user.photoURL) {
      localStorage.setItem("userAvatarData", user.photoURL);
    }

    // =========================
    // THÀNH CÔNG
    // =========================

    alert("Đăng nhập Google thành công!");

    window.location.href = "index.html";
  } catch (error) {
    console.error("Lỗi Google Auth:", error.message);

    alert("Không thể đăng nhập bằng Google!");
  }
});
