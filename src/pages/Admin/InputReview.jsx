import React from 'react';
import Layout from '../Layout';

const InputReview = () => {
    return (
        <Layout>
            <Typography>Ulasan Pengguna</Typography>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                    <form>
                        <label>Kategori</label>
                        <br/>
                        <select required>
                            <option>Barbershop</option>
                            <option>Salon</option>
                        </select>
                        <br/>
                        <div class='flex flex-wrap'> 
                            <label>Nama Tempat</label>  
                            <select required>
                                <option>Nama Tempat</option>
                                <option></option>
                            </select>
                            <select required>
                                <option>Lokasi</option>
                                <option></option>
                            </select>
                        </div>
                        <label>Beri nilai ulasan</label>
                        <br/>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <br/>
                        <label>Foto</label>
                        <input type='image' name='photo' id='photo'/>
                        <button>Upload</button>
                        <br/>
                        <label>Ulasan Pengguna</label>
                        <textarea placeholder='Deskripsi'></textarea>
                        <br/>
                        <button>Simpan</button>
                    </form>
                </div>
            </div>

        </Layout>
    );
};

export default InputReview;