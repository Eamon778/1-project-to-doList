const test = async (req, res) =>{
    res.status(200).json({success: true, message: 'Testing ok'})
}

module.exports = { test }