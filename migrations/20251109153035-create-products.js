'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // TODO: Buat tabel 'products' dengan kolom:

    /**
      * id: primary key, auto increment dan integer
      * name: string, wajib diisi
      * price: integer atau decimal, wajib diisi
      * description: text, boleh kosong
      * image: string, wajib diisi
      * category_id: foreign key ke tabel 'categories', wajib diisi dan ON UPDATE CASCADE
      * createdAt dan updatedAt: tanggal otomatis (default Sequelize)
      */

    await queryInterface.createTable('products', {
      id: {
        // Lengkapi bagian ini
      },
      name: {
        // Lengkapi bagian ini
      },
      price: {
        // Lengkapi bagian ini
      },
      description: {
        // Lengkapi bagian ini
      },
      image: {
        // Lengkapi bagian ini
      },
      category_id: {
        // TODO: Buat foreign key relasi ke tabel 'categories'
      },
      createdAt: {
        // Lengkapi bagian ini
      },
      updatedAt: {
        // Lengkapi bagian ini
      },
    });
  },
  async down(queryInterface, Sequelize) {
    // TODO: Hapus tabel 'products' jika ada rollback migrasi
  }
};