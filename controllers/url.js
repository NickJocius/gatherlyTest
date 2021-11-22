const Url = require('../models/Url');
const utils = require('../utils/utils');

exports.create = async (req, res) => {
    const{origUrl} = await req.body;

    if (utils.validateUrl(origUrl)) {
        res.send('Valid url');
    }
    
}