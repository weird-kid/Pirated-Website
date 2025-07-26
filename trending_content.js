let process = require("process")
let tmdb_read_access_token = process.env.tmdb_read_access_token;
let auth_value = 'Bearer ' + tmdb_read_access_token;

console.log(auth_value);

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
	Authorization: auth_value
  }
};

async function get_data() {
      try {
	  	let raw_data	= await fetch(url, options)
		let json_data 	= await raw_data.json();
		console.log(json_data);
		return json_data;
	  }catch(err){
			  console.error(err);
	  }
}

console.log(get_data());

