import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import LupaPassword from './pages/LupaPassword'
import Home from './pages/Home'
// import Tentang from './pages/Tentang'
// import Mitra from './pages/Mitra'
// import Testimoni from './pages/Testimoni'
// import Footer from './components/Footer'
import StokBarang from './pages/StokBarang'
import Laporan from './pages/Laporan'
import "./App.css"
import "./index.css"
import Beranda from './pages/Beranda';
import BerandaKasir from './pages/BerandaKasir';
import StokBarangKasir from './pages/StokBarangKasir';
import Pengaturan from './pages/Pengaturan';
import PengaturanKasir from './pages/PengaturanKasir';
import UserList from './components/UserList';
import EditBarang from './components/EditBarang';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/lupapassword' element={<LupaPassword />} />
        <Route path='/beranda' element={<Beranda />} />
        <Route path='/stokbarang' element={<StokBarang />} />
        <Route path='/laporan' element={<Laporan />} />
        <Route path='/berandakasir' element={<BerandaKasir />} />
        <Route path='/stokbarangkasir' element={<StokBarangKasir />} />
        <Route path='/pengaturan' element={<Pengaturan />} />
        <Route path='/pengaturankasir' element={<PengaturanKasir />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/editbarang' element={<EditBarang />} />
      </Routes>
    </Router>
  )
}

export default App
