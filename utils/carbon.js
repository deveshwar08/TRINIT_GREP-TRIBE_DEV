const axios = require('axios');
module.exports = async (url, data) => {
    try {
        const websiteData = await axios.get('https://api.websitecarbon.com/site', {
            params: {
                url: url,
            }
        });
        const isGreen = websiteData.green == "unknown" ? false : websiteData.green;
        const calculateCarbon = await axios.get('https://api.websitecarbon.com/data', {
            params: {
                bytes: data,
                green: isGreen,
            }
        });
        return calculateCarbon.statics.co2.grid.grams;
    } catch (err) {
        console.log(err);
        return;
    }
};
