const Url = require('../models/Url');
const utils = require('../utils/utils');
const { nanoid } = require('nanoid');

exports.create = async (req, res) => {
    const{origUrl} = req.body;

    if (utils.validateUrl(origUrl)) {
        try {
            const urlExists = await Url.exists({ origUrl: origUrl });
            if (!urlExists) {
                const shortendUrl = nanoid(5);
                const newUrl = await new Url({
                    origUrl,
                    shortUrl: shortendUrl,
                }).save();
                res.status(201).json({ success: true, newUrl })
            } else {
                const existing = await Url.findOne({ origUrl: origUrl }).exec();
                res.json({ success: false, existing });
            }
        } catch (error) {
            res.status(400).json({
            error: error.message,
        });
        }
    }
    
}

exports.read = async (req, res) => {
    const { shortUrl } = req.body;
    try {
        const longUrl = await Url.findOne({ shortUrl: shortUrl }).exec();
        res.status(200).json({ success: true, longUrl });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }

}