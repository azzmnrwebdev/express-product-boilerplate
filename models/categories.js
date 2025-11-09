'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // TODO: Tambahkan relasi One-to-Many ke model Product
    }
  }

  categories.init({
    name: {
      // TODO: Lengkapi definisi atribut name

      /**
       * tipe data string
       * wajib diisi (tidak boleh null)
       * harus unik (unique)
       */
    },
  }, {
    sequelize,
    timestamps: true,
    modelName: 'categories',
    tableName: 'categories',
  });

  return categories;
};