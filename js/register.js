import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile, // Hàm dùng để cập nhật thông tin
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Cấu hình Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAlY1PW-xs_QhTqjtMwRrVqOXoFSA3LHaQ",
  authDomain: "manhle-project-2026.firebaseapp.com",
  projectId: "manhle-project-2026",
  storageBucket: "manhle-project-2026.firebasestorage.app",
  messagingSenderId: "785813167950",
  appId: "1:785813167950:web:97142ecea716f42ff0481f",
  measurementId: "G-R89YDYQJVB",
};
// Khởi tạo các dịch vụ
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Lấy form đăng ký từ HTML
const registerForm = document.getElementById("registerForm");

// XỬ LÝ ĐĂNG KÝ EMAIL/PASS
registerForm?.addEventListener("submit", async (e) => {
  e.preventDefault(); // Ngăn trang web tải lại
  // Lấy toàn bộ thông tin người dùng nhập vào
  const name = document.getElementById("displayName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  // Kiểm tra xem 2 lần nhập mật khẩu có giống nhau không
  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp!");
    return;
  }

  try {
    // Bước 1: Gọi Firebase để tạo tài khoản bằng Email/Pass
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    // Bước 2: Sau khi tạo xong, cập nhật "Tên hiển thị" (DisplayName) cho user đó
    // Vì khi tạo bằng Email/Pass, Firebase chưa lưu tên thật của người dùng
    await updateProfile(userCredential.user, { displayName: name });

    alert("Đăng ký thành công! Chào mừng " + name);
    window.location.href = "index.html"; // Chuyển về trang chủ sau khi xong
  } catch (error) {
    console.error("Lỗi đăng ký:", error.code);
    // Kiểm tra mã lỗi nếu email đã tồn tại trong hệ thống
    if (error.code === "auth/email-already-in-use") {
      alert("Email này đã được sử dụng!");
    } else {
      alert("Đã có lỗi xảy ra. Hãy thử lại!");
    }
  }
});

// XỬ LÝ ĐĂNG KÝ GOOGLE (Giống Đăng nhập)
document
  .getElementById("btnGoogleRegister")
  ?.addEventListener("click", async () => {
    try {
      // Mở popup chọn tài khoản Google
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        window.location.href = "index.html"; // Thành công thì về trang chủ
      }
    } catch (error) {
      console.error("Lỗi Google Auth:", error.message);
    }
  });
