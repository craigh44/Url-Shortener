var urls = ['/foo', '/bar'];

exports.checkIfUrlExists = function (url) {
	if (urls.indexOf(url) !== -1) {
		return true;
	} else {
		return false;
	}
}
