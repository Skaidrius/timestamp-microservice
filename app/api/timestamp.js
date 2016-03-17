'use strict';
var moment = require('moment');

module.exports = function(app) {

    app.get('/:query', function(req, res) {
        var date = req.params.query;
        var unix = null;
        var natural = null;
        
        // unix time
        if (+date >= 0) {
            unix = +date;
            natural = toNat(unix);
        } 
        
        // natural time
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = toUnix(date);
            natural = toNat(unix);
        }
        
        var dateObj = { "unix": unix, "natural": natural };
        res.send(JSON.stringify(dateObj));
        
    });
    
    function toUnix(date) {
        return moment(date, "MMMM D, YYYY").format("X");
    }
    
    function toNat(unix) {
        return moment.unix(unix).format("MMMM D, YYYY");
    }
    
    
    
};
