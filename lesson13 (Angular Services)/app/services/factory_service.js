app.factory("someFactory", someFactory)
	
function someFactory() {
	var private = "Hello, i am private!",
		second = 12;
	
	var info = ["text 1", "some text", "some info"];
	
	var text = [""];

    function getPrivate() {
        return private;
    }

    function write(value) {
    	text = value;
	}

    function read() {
        return text;
    }

	return {
		write: write,
        read: read,
		getPrivate: getPrivate,
		second: second,
		info: info,
		text: text
	};

}