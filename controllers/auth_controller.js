const { Seller } = require("../models/inventory");
const Joi = require("joi");
const bcrypt = require("bcrypt");


const validate = (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required().label("Email"),
      password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports.Login = async (req, res) => {
    try {
        const { error } = validate(req.body);
    
        if (error) {
          return res.status(400).send({ message: error.details[0].message });
        }
    
        const seller = await Seller.findOne({ email: req.body.email });
    
        if (!seller) {
          return res.status(401).send({ message: "Invalid Email or Password" });
        }
    
        const validPassword = await bcrypt.compare(
          req.body.password,
          seller.password
        );
    
        if (!validPassword) {
          return res.status(401).send({ message: "Invalid Email or Password" });
        }
    
        const token = seller.generateAuthToken();
        res.status(200).send({ 
          data: token, 
          seller: seller._id,
          message: "Logged In Successfully"
         
        });

      } catch (error) {

        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
        
      }
}