const routes = require('express').Router()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('../models/Product')
const Product = mongoose.model('products')
const multer = require('multer')
const multerConfig = require('../config/multer')


routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

routes.post('/createproduct', multer(multerConfig).any(), (req, res) => {

    newProduct = {
            title: req.body.title,
            titlePromotion: req.body.titlePromotion,
            price: req.body.price,
            body: req.body.body,
            amount: req.body.amount,
            images: req.files,
            tag: req.body.tag
    }

    new Product(newProduct).save().then(() => {
        res.json(newProduct)
    }).catch((err) => {
        console.log("Houve um erro" + err)
    })
})

routes.get('/view', (req, res) => {
    Product.find().then((products) => {
        res.json(products)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = routes