'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // TODO: Tambahkan relasi Many-to-One ke model Category
    }
  }

  products.init({
    name: {
      // TODO: Lengkapi definisi atribut name

      /**
       * tipe data string
       * wajib diisi (tidak boleh null)
       */
    },
    price: {
      // TODO: Lengkapi definisi atribut price

      /**
       * tipe data integer atau decimal
       * wajib diisi (tidak boleh null)
       */
    },
    description: {
      // TODO: Lengkapi definisi atribut description

      /**
       * tipe data text
       * tidak wajib diisi (boleh null)
       */
    },
    image: {
      // TODO: Lengkapi definisi atribut image
      
      /**
       * tipe data string
       * wajib diisi (tidak boleh null)
       */
    },
    category_id: {
      // TODO: Lengkapi definisi atribut category_id

      /**
       * tipe data integer
       * foreign key ke tabel categories
       * on update dibuat CASCADE
       */
    },
  }, {
    sequelize,
    timestamps: true,
    modelName: 'products',
    tableName: 'products',
  });

  return products;
};