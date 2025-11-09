'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
     // TODO: Buat tabel 'categories' dengan kolom:

    /**
      * id: primary key, auto increment dan integer
      * name: string, wajib diisi dan harus unik
      * createdAt dan updatedAt: tanggal otomatis (default Sequelize)
      */

    await queryInterface.createTable('categories', {
      id: {
        // Lengkapi bagian ini
      },
      name: {
        // Lengkapi bagian ini
      },
      createdAt: {
        // Lengkapi bagian ini
      },
      updatedAt: {
        // Lengkapi bagian ini
      }
    });
  },
  async down(queryInterface, Sequelize) {
    // TODO: Hapus tabel 'categories' jika ada rollback migrasi
  }
};