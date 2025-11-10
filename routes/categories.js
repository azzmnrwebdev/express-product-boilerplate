const express = require('express');
const router = express.Router();
const { categories } = require('../models');

// TODO: Endpoint untuk mengambil semua kategori
router.get('/', async (req, res, next) => {
    /**
     * gunakan categories.findAll()
     * gunakan try catch untuk menangani error
     * jika berhasil, cek apakah data kategori ada
     * jika ada, kembalikan response dengan status 200 dan data kategori dalam format JSON
     * jika tidak ada, kembalikan response dengan status 404 dan pesan "Kategori tidak ditemukan"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk menambah kategori baru
router.post('/', async (req, res, next) => {
    /**
     * gunakan categories.create()
     * gunakan try catch untuk menangani error
     * jika berhasil, menangkap data dari request body
     * jika berhasil menambah kategori, kembalikan response dengan status 201 dan data kategori dalam format JSON
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk mengambil kategori berdasarkan ID
router.get('/:id', async (req, res, next) => {
    /**
     * gunakan categories.findByPk()
     * gunakan try catch untuk menangani error
     * jika berhasil, menangkap id dari request params
     * jika ada data kategori dengan id tersebut, kembalikan response dengan status 200 dan data kategori dalam format JSON
     * jika tidak ada, kembalikan response dengan status 404 dan pesan "Kategori tidak ditemukan"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk memperbarui data kategori
router.put('/:id', async (req, res, next) => {
    /**
     * gunakan categories.update()
     * gunakan try catch untuk menangani error
     * tangkap id dari request params
     * cari kategori berdasarkan id menggunakan categories.findByPk()
     * jika tidak ditemukan, kembalikan response dengan status 404 dan pesan "Kategori tidak ditemukan"
     * jika berhasil memperbarui kategori, kembalikan response dengan status 200 dan pesan "Kategori berhasil diperbarui"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

// TODO: Endpoint untuk menghapus kategori
router.delete('/:id', async (req, res, next) => {
    /**
     * gunakan categories.destroy()
     * gunakan try catch untuk menangani error
     * jika berhasil, menangkap id dari request params
     * jika ada, cek apakah kategori dengan id tersebut punya relasi dengan data produk
     * jika ada relasi, kembalikan response dengan status 400 dan pesan "Kategori tidak dapat dihapus karena memiliki relasi dengan produk"
     * jika tidak ada relasi, hapus kategori dan kembalikan response dengan status 200 dan pesan "Kategori berhasil dihapus"
     * jika tidak ada kategori dengan id tersebut, kembalikan response dengan status 404 dan pesan "Kategori tidak ditemukan"
     * jika terjadi error, kembalikan response dengan status 500 dan pesan error
     */
});

module.exports = router;