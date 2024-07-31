const User = require('../models/user');

async function allUser(req, res) {
    const allusers = await User.find();
    return res.json(allusers);
};

async function createUser(req, res) {
    const body = req.body;
    const document = await User.create({
        Name: body.name,
        Email: body.email,
        Password: body.password
    });
    return res.json({ success: true, alertmessage: "User Created successfully", document });
}


async function findUser(req, res) {
    const id = req.params.id;
    const findusers = await User.findById(id);
    return res.json({ success: true, findusers });
}


async function deleteUser(req, res) {
    const id = req.params.id;
    const deleteusers = await User.findByIdAndDelete(id);
    return res.json({ success: true, alertmessage: "User Deleted successfully", deleteusers });
}

module.exports = {
    allUser,
    createUser,
    findUser,
    deleteUser
}