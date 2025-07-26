let process = require("process")
let tmdb_token = process.env.tmdb_token;
let auth_value = 'Bearer ' + tmdb_token;


const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
	Authorization: auth_value
  }
};

/* I want this function to return 
	{"title", "backdrop_img", "id", "release_date" } values from api.
 */
async function get_data() {
      try {
	  	let raw_data	= await fetch(url, options)
		let json_data 	= await raw_data.json();
		let n = json_data.results.length;	
		
		movies = [];
		for(let i=0; i<n; i++){
				movies.push({
						"title" : json_data.results[i].title,
						"backdrop" : json_data.results[i].backdrop_path,
						"id" : json_data.results[i].id,
						"release_date" : json_data.results[i].release_date
						});
		}

		console.log(movies);

	  }catch(err){
			  console.error(err);
	  }
}

get_data();

