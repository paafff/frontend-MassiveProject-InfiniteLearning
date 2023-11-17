import React from "react";
import Layout from "../Layout";

const Reservasi = () => {
    return (
        <Layout>
            <Typography>Reservasi</Typography>
            <form>
                <label>Nama</label>
                <br/>
                <input type='text' name="name" id='name' placeholder="Masukkan Nama Lengkap Anda" required/>
                <label>Pilih Jadwal Reservasi</label>
                <div class='flex flex-wrap'>
                    <select>
                        <option>Pilih hari</option>
                        <option>Senin</option>
                    </select>
                    <select>
                        <option>Pilih Jam</option>
                        <option>08.00 - 09.00</option>
                    </select>
                </div>
                <label>Deskripsi</label>
                <textarea placeholder='Deskripsi...'></textarea>
                <br/>
                <p>Terima kasih telah melakukan reservasi di jasa kami. Jika sudah melakukan reservasi maka Anda harus datang sesuai dengan jadwal yang sudah Anda tentukan.</p><br/>
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </Layout>
    );
};

export default Reservasi;