
class EndpointLink {
constructor() {
if (!EndpointLink.instance) {
EndpointLink.instance = this;
}
return EndpointLink.instance;
}

getVos() {
return 'https://api.weirdgloop.org/runescape/vos';
}
}

// Create a singleton instance
const endpointLink = new EndpointLink();
Object.freeze(endpointLink);

// Export the instance
export default endpointLink;
