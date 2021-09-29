const db = require('../models/db')
const User = db.user;
const Book = db.book
const bcrypt = require('bcrypt');
const { user, book } = require('../models/db');
const jwt = require('jsonwebtoken')

exports.registerUser = async (req, res) => {


    var userExist = await User.findOne({ where: { email: req.body.email } })
    console.log("UserExist:" + userExist)
    if (userExist) {
        return res.json("EmailId Already Exist")
    }

    console.log(req.user)

    const hash = await bcrypt.hash(req.body.password, 10)

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hash
    };
    //console.log(user)

    User.create(user)
        .then((data) => {
            console.log("test")
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message:
                    err.message || "Some error occurred while creating the classRoom."
            });
        });
};

exports.loginUser = async (req, res) => {
    console.log(req.body.email)
    const user1 = await User.findOne({ where: { email: req.body.email } })
        .then(async(data) => {
            var validPassword = await bcrypt.compare(req.body.password, data.password)
            if (data.email == req.body.email && validPassword) {
              const usertoken = jwt.sign({ id: data.id }, 'secretkey',{expiresIn:'1440m'})
             return res.header('auth', usertoken).status(200).json({ UserId: data.id, UserToken: usertoken, statusCode: 200, Responce: "Login Successfully" })
            }
            else {
                return res.status(500).send({
                    message: "Pls Check the Password"
                });
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                message: "Email Id Not Found"
            });
        });

}

exports.addbook = async (req,res) => {

    const user = {
        bookname: req.body.name,
        authorname: req.body.email,
        prize:req.body.prize
    };
 
    Book.create(req.body)
    .then((data) => {
        console.log("test")
        res.json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({
            message:
                err.message || "Some error occurred while creating the classRoom."
        });
    });


}

exports.getAll = (req, res) => {
    const title = req.query.title;
   // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Book.findAll({where:{}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    book.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

