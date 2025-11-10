const express = require('express');
const router = express.Router();
const { products, categories  } = require('../models');

// TODO: Endpoint untuk mengambil semua produk (termasuk relasi kategori)
router.get('/', async (req, res, next) => {
    /**
     * gunakan try catch untuk menangani error
     * gunakan products.findAll({ include: categories })
     * jika berhasil, kembalikan response dengan status 200 dan data produk (beserta kategori)
     * jika tidak ada data produk, kembalikan response dengan status 404 dan pesan "Produk tidak ditemukan"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk menambah produk baru (dengan upload file gambar)
router.post('/', upload.single('image'), async (req, res, next) => {
    /**
     * gunakan try catch untuk menangani error
     * gunakan library multer untuk upload file gambar ke folder public/products/
     * setelah upload berhasil, ambil nama file dari req.file.filename
     * gunakan products.create() untuk menyimpan data produk
     * tangkap data dari request body (name, price, description, category_id)
     * validasi category_id (cek apakah kategori dengan id tersebut ada)
     * jika kategori tidak ditemukan, kembalikan response dengan status 400 dan pesan "Kategori tidak valid"
     * kolom image harus berisi nama file yang diupload
     * jika berhasil menambah produk, kembalikan response dengan status 201 dan data produk dalam format JSON
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk mengambil produk berdasarkan ID
router.get('/:id', async (req, res, next) => {
    /**
     * gunakan try catch untuk menangani error
     * gunakan products.findByPk(id, { include: categories })
     * jika data produk ditemukan, kembalikan response dengan status 200 dan data produk (beserta kategori)
     * jika tidak ditemukan, kembalikan response dengan status 404 dan pesan "Produk tidak ditemukan"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk memperbarui data produk (dengan upload file gambar)
router.put('/:id', upload.single('image'), async (req, res, next) => {
    /**
     * gunakan try catch untuk menangani error
     * tangkap id dari request params
     * cari produk berdasarkan id menggunakan products.findByPk()
     * jika tidak ditemukan, kembalikan response dengan status 404 dan pesan "Produk tidak ditemukan"
     * 
     * jika ada file baru diupload, hapus file lama dari folder public/products/
     * setelah upload berhasil, ambil nama file baru dari req.file.filename
     * 
     * tangkap data dari request body (name, price, description, category_id)
     * validasi category_id (cek apakah kategori dengan id tersebut ada)
     * jika kategori tidak ditemukan, kembalikan response dengan status 400 dan pesan "Kategori tidak valid"
     * 
     * gunakan products.update() untuk memperbarui data produk
     * jika berhasil, kembalikan response dengan status 200 dan pesan "Produk berhasil diperbarui"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk menghapus produk (dengan hapus file gambar)
router.delete('/:id', async (req, res, next) => {
    /**
     * gunakan try catch untuk menangani error
     * tangkap id dari request params
     * cari produk berdasarkan id menggunakan products.findByPk()
     * jika tidak ditemukan, kembalikan response dengan status 404 dan pesan "Produk tidak ditemukan"
     * 
     * sebelum menghapus, hapus file gambar produk dari folder public/products/
     * gunakan fs.unlinkSync() atau fs.promises.unlink() untuk menghapus file gambar
     * 
     * gunakan products.destroy() untuk menghapus data produk dari database
     * jika berhasil, kembalikan response dengan status 200 dan pesan "Produk berhasil dihapus"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

module.exports = router;