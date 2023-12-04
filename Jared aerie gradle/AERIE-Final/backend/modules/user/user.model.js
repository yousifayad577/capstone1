const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, default: ''},
  lastName: { type: String, default: '' },
  email: { type: String, required: true },
  password: { type: String },
  major: { type: String, default: '' },
  interest: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  achievements: {
    type: Array,
    default: ['CCNA Certification',
    'CISSP Certification',
    'Linux Professional Institute Certification',
    'National Medal of Technology and Innovation',
    'IEEE Fellow'
  ]
  }
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;