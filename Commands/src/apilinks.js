//constructor functional for all API Urls
// an instance is an item created by a constructor function in this
class EndpointLink {
    constructor() {
        if (EndpointLink.instance == null) {
            EndpointLink.instance = this;
        }
        return EndpointRetriever.instance;
    }

    getVos() {
        return 'https://api.weirdgloop.org/runescape/vos';
    }

}

// prevent object from being modified or used anywhere else
const endpointLink = new EndpointLink();
Object.freeze(endpointLink);

//allows use of object somewhere else
module.exports = endpointLink;