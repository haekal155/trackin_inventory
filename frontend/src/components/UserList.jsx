import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [barang, setbarang] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getbarang();
  }, []);

  const getbarang = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setbarang(response.data);
  };

  const deletebarang = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getbarang();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 flex justify-center text-center p-4 rounded-lg shadow-lg">
      <table className="min-w-full divide-y divide-gray-200 w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Harga Barang</th>
            <th>Jumlah Stok</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {barang.map((user, index) => (
            <tr key={barang.id}>
              <td>{index + 1}</td>
              <td>{barang.nama_barang}</td>
              <td>{barang.jumlah_stok}</td>
              <td>{barang.harga_barang}</td>
              <td>
                <div className="flex justify-center">
                  <Link to={`edit/${barang.id}`}>
                    <button className="w-10 py-2 mr-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black">
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteUser(barang.id)}
                    className="w-10 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-black"
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
