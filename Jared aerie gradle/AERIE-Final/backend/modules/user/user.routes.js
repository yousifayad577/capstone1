const express = require('express');
const userRouter = express.Router();
const multer = require('multer');

const userController = require('./user.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

userRouter.post('/user/signup', userController.signup);
userRouter.post('/user/login', userController.login);
userRouter.post('/user/edit-profile', upload.single('image'), userController.updateUserProfile);
userRouter.get('/user/get-user', userController.getUser);
userRouter.get('/user/get-all-users', userController.getAllUsers);

module.exports = userRouter;