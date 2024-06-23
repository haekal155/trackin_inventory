import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    // Validasi email dan password tidak boleh kosong
    if (!email || !password) {
      setError("Email dan password harus diisi.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      });

      // Jika login berhasil, arahkan pengguna ke halaman beranda
      if (response.data.accessToken) {
        // Simpan token di localStorage atau context
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/beranda");
      } else {
        setError("Email atau password salah");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Terjadi kesalahan saat login. Silakan coba lagi.");
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[50%] left-[20%] flex flex-col">
          <img src="public/logo.png" alt="Logo" />
        </div>
        <img src="public/coverimage.png" alt="Cover" />
      </div>

      <div className="w-1/2 items-center h-full bg-white flex flex-col p-20">
        <div className="w-20 flex flex-col items-center justify-center mb-10">
          <img src="public/trackinlogo.png" alt="TrackIn Logo" />
          <h3>TrackIn</h3>
        </div>

        <div className="w-full flex items-center justify-center pb-8">
          <h3 className="text-3xl font-semibold mb-2 justify-center">Login</h3>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Masukkan Email Anda"
            className="w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Masukkan Password Anda"
            className="w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full flex items-center justify-between">
          <p
            onClick={() => navigate("/lupapassword")}
            className="text-sm font-medium whitespace-nowrap cursor-pointer text-red-600"
          >
            Lupa Password?
          </p>
        </div>

        <div className="flex justify-center pt-10">
          <button
            onClick={handleLogin}
            className="w-80 py-2 bg-primary-color text-white rounded-xl hover:bg-black"
          >
            Login
          </button>
        </div>

        <div className="w-full flex items-center justify-center pt-3">
          <p className="text-sm font-normal text-black">
            Belum Punya Akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="font-semibold cursor-pointer text-blue-700"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
