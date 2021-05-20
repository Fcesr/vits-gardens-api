const express = require('express')
const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firtsName: {
        type: String,
    },
    lastName: {
        type: String,
    },



})

mongoose.model('User', userSchema)