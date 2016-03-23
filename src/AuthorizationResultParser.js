export default class AuthorizationResultParser {
    constructor(location) {
        this._location = location;
    }

    parseResult(value) {
        value = value || this._location.hash;
        
        var idx = value.lastIndexOf("#");
        if (idx >= 0) {
            value = value.substr(idx + 1);
        }

        var params = {},
            regex = /([^&=]+)=([^&]*)/g,
            m;

        var counter = 0;
        while (m = regex.exec(value)) {
            params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
            if (counter++ > 50) {
                return {
                    error: "Response exceeded expected number of parameters"
                };
            }
        }

        for (var prop in params) {
            return params;
        }
    }
}
