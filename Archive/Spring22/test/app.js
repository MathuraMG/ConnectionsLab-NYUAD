fetch("https://random-words5.p.rapidapi.com/getMultipleRandom?count=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "random-words5.p.rapidapi.com",
		"x-rapidapi-key": "qelU7OK8DsmsheJxYsSjpNOsxN1mp10Q7NmjsneaSIZqglccdK"
	}
})
.then(response => {
	return response.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
	console.error(err);
});