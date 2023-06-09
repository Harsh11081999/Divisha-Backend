const {Seller, validate}  = require('../models/inventory');
const bcrypt = require('bcrypt');


module.exports.Register = async (req, res) => {

    try {

        const {error} = validate(req.body);
        console.log(req.body);

        if(error){
            return res.status(400).send({message: error.details[0].message});
        }

         // Check if password and confirm password match 
         if (req.body.password !== req.body.confirmPassword) { 
            return res.status(400).json({ error: 'Passwords do not match' }); 
         } 

        
        // Check if seller already exists 
        const seller = await Seller.findOne({email: req.body.email});

        if(seller){

            return res.status(409).send({
                message: "Seller with given email already exists"
            });
        }

        // Hash the password 
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new seller 
        await new Seller({...req.body, password: hashPassword}).save();

        res.status(201).send({message: "Seller Created Successfully"});

    }catch(error){
        console.log(error);
        res.status(500).send({message: "Internal Server Error"});
    }   
}

module.exports.getSpecificSellerDetails = async (req, res) => {

    try {
    const { id } = req.params.id;
    console.log(req.params.id);

    const sellerDetails = await Seller.findOne({_id: req.params.id}).populate('category').populate('subCategory');

    if(!sellerDetails){
        return res.status(400).json({
            message: "Seller Not found!"
        })
    }

    return res.status(200).json({
        sellerDetails: sellerDetails,
        message: "Seller Displayed Successfully"
    });
    
   }catch(error){
    console.log(error);
    res.status(500).send({message: "Internal Server Error"});
   }
}