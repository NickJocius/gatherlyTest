const Url = require('../models/Url');
const utils = require('../utils/utils');
const { nanoid } = require('nanoid');

exports.create = async (req, res) => {
    const{origUrl} = req.body;
    const valid = utils.validateUrl(origUrl);
    
        try {
            const urlExists = await Url.exists({ origUrl: origUrl });
            if (!urlExists && valid) {
                const shortendUrl = nanoid(5);
                const newUrl = await new Url({
                    origUrl,
                    shortUrl: `https://${shortendUrl}`,
                }).save();
                res.status(201).json({ success: true, newUrl })
            } else if(urlExists && valid) {
                const existing = await Url.findOne({ origUrl: origUrl }).exec();
                res.json({ success: false, existing });
            } else {
                res.json({ err: 'invalid' });
            }
        } catch (error) {
            res.status(400).json({
            error: error.message,
        });
        }
}

exports.read = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const modUrl = `https://${shortUrl}`;
    
    try {
        const longUrl = await Url.findOne({ shortUrl: modUrl }).exec();
        if (longUrl) {
            res.status(200).json({ success: true, longUrl });
        } else {
            return res.send({res: "not found"});
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }

}