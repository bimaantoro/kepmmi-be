/* eslint-disable no-unused-vars */
const express = require('express');
const prisma = require('../../../../prisma/client');

const create = async (req, res, next) => {
  try {
    const result = await prisma.category.create({
      data: {
        nama: req.body.nama
      },
    });
    res.status(200).json({
      success: true,
      message: 'Kategori berhasil ditambahkan',
      data: result
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};