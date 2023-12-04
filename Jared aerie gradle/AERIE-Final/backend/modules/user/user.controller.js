const bcrypt = require('bcrypt');
const UserModel = require("./user.model");

function hashPassword(password) {
    return new Promise(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    signup: async (req, res, next) => {
        const { firstName, lastName, email, password } = req.body;

        const hashedPassword = await hashPassword(password);

        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        try {
            const savedUser = await newUser.save();
            res.status(200).json({
                success: true,
                message: 'User registered successfully.',
                data: savedUser
            });
        } catch (error) {
            console.error('Error in saving new user in DB.', error);
            if (error.code === 11000) {
                return res.status(400).json({ success: false, message: 'A user already exists with that email.' });
            }
            res.status(400).json({ success: false, message: `Error in saving new user.` });
        }
    },


    login: async (req, res, next) => {
        const { email, password } = req.body;

        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(400).json({success: false, message: 'Invalid email or password.'});
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) return res.status(400).json({success: false, message: `Error in comparing passwords. ${err}`});;
                if (!isMatch) {
                    return res.status(400).json({success: false, message: 'Invalid email or password.'});
                }
                res.status(200).json({
                    success: true,
                    message: 'User logged in successfully',
                    data: user
                });
            });
        } catch (error) {
            console.error('Error in finding user.', error);
            res.status(400).json({success: false, message: `Error in finding user`});
        }
    },

    updateUserProfile: async (req, res, next) => {
        const {_id, firstName, lastName, email, major, interest, description } = req.body;
        const profileImage = req.file;        

        try {
            const user = await UserModel.findOne({ _id });

            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.major = major;
            user.interest = interest;
            user.description = description;
            if (profileImage) {
                user.image = profileImage.originalname;
            }

            const updatedUser = await user.save();

            res.status(200).json({
                success: true,
                message: 'User profile updated successfully.',
                data: updatedUser
            })
        } catch (error) {
            console.error('Error in updating user.', error);
            res.status(400).json({success: false, message: `Error in updating user profile.`});
        }
    },

    getUser: async (req, res, next) => {
        try {
            const user = await UserModel.findOne({ email: req.query.email });
            if (!user) {
                return res.status(400).json({success: false, message: 'Unable to find user.'});
            }
            res.status(200).json({
                success: true,
                message: 'User fetched successfully.',
                data: user
            })
        } catch (error) {
            console.error('Error in fetching user.', error);
            res.status(400).json({success: false, message: `Error in fetching user`});
        }
    },

    getAllUsers: async (req, res, next) => {
        try {
            const users = await UserModel.find({});
            if (!users) {
                return res.status(400).json({success: false, message: 'Unable to fetch all users.'});
            }

            const loggedInUser = await UserModel.findOne({ email: req.query.email });
            if (!loggedInUser) {
                return res.status(400).json({success: false, message: 'Unable to find user.'});
            }
            res.status(200).json({
                success: true,
                message: 'User fetched successfully.',
                data: users,
                achievements: loggedInUser.achievements
            })
        } catch (error) {
            console.error('Error in fetching user.', error);
            res.status(400).json({success: false, message: `Error in fetching users`});
        }
    },
}