import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false); // State untuk setuju syarat dan ketentuan
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms); // Mengubah nilai state setelah checkbox diubah
  };

  const register = async (e) => {
    e.preventDefault();
    // Validasi nama, email, dan password tidak boleh kosong
    if (!name || !email || !password) {
      setMsg("Nama, email, dan password harus diisi.");
      return;
    }

    if (!agreeTerms) {
      setMsg("Anda harus menyetujui syarat dan ketentuan untuk mendaftar.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name: name,
        email: email,
        password: password,
      });
      setMsg(response.data.msg);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("Registrasi gagal. Silakan coba lagi.");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[50%] left-[20%] flex flex-col">
          <img src="/logo.png" alt="Logo" /> {/* Memperbaiki path gambar */}
        </div>
        <img src="/coverimage.png" alt="Cover" />{" "}
        {/* Memperbaiki path gambar */}
      </div>

      <div className="w-1/2 items-center h-full bg-white flex flex-col p-20">
        <div className="w-20 flex flex-col items-center justify-center mb-10">
          <img src="/trackinlogo.png" alt="TrackIn Logo" />{" "}
          {/* Memperbaiki path gambar */}
          <h3>TrackIn</h3>
        </div>

        <div className="w-full flex items-center justify-center pb-8">
          <h3 className="text-3xl font-semibold mb-2 justify-center">
            Register
          </h3>
        </div>

        {msg && <p className="text-red-500">{msg}</p>}

        <form onSubmit={register} className="w-full flex flex-col">
          <label htmlFor="name">Nama Lengkap</label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan Nama Lengkap Anda"
            className="w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Masukkan Email Anda"
            className="w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Kata Sandi</label>
          <input
            id="password"
            type="password"
            placeholder="Masukkan Kata Sandi Anda"
            className="w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="w-full flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 mr-2"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms" className="text-sm">
              Saya setuju dengan syarat dan ketentuan
            </label>
          </div>

          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className={`w-80 py-2 bg-primary-color text-white rounded-xl hover:bg-black ${
                !agreeTerms || !name || !email || !password
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={!agreeTerms || !name || !email || !password}
            >
              Register
            </button>
          </div>
        </form>

        <div className="w-full flex items-center justify-center pt-3">
          <p className="text-sm font-normal text-black">
            Sudah Punya Akun?
            <span
              onClick={() => navigate("/login")}
              className="font-semibold cursor-pointer text-blue-700"
            >
              {" "}
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
