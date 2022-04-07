const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// create order schema & model
const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email field is required"]
    },
    password: {
        type: String,
        required: [true, "Password field is required"]
    },
    phoneNumber: {
        type: Number,
    },
    dateOfBirth: {
        type: String,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        default: "user"
      }
    ]
})


UserSchema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.password = hash
            next()
          })
        }
      })
    } else {
      return next()
    }
  })

UserSchema.statics.login = async function(email, password) {
  const user = await this.findOne({email});
  if (user) {
    const auth = await bcrypt.compare(password, user.password)
    if (auth) {
      return user;
    }
    throw Error ('Incorrect password');
  }
  throw Error('Incorrect email');
}

const User = mongoose.model("user", UserSchema);

module.exports = User;


