let auth_value = 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmUzMTVhMmUxNWUzODY1YWMwYWY4YzhlMDgyZDY1ZCIsIm5iZiI6MTc1MzUxMTQ3OS4wNDE5OTk4LCJzdWIiOiI2ODg0NzYzNzIzZTNmNmQwOTAzOGY0ZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UIQzOZCk7qtHm_FqpCiD6jNIe63Henpn1UidtS_AMMo';


let url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
let options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
	Authorization: auth_value
  }
};

let img_url = 'https://image.tmdb.org/t/p/original/';

async function get_data() {
      try {
	  	let raw_data	= await fetch(url, options);
		let json_data 	= await raw_data.json();
		let n = json_data.results.length;	
		movies = [];

		for(let i=0; i<n; i++){

				let path = json_data.results[i].backdrop_path;
				let raw_img = await fetch(img_url + path); 
				let blob_obj = await raw_img.blob();
				
				let fr = new FileReader();
				fr.readAsDataURL(blob_obj);
				
				fr.addEventListener('load', ()=> {

			
					let html_img = document.getElementsByClassName("image")[0];		

					movies.push({
								"title" : json_data.results[i].title,
								"backdrop" : fr.result,
								"id" : json_data.results[i].id,
								"release_date" : json_data.results[i].release_date
						});

				        html_img.src = movies[0].backdrop; 
				});
			
		}
		
	
	
	 /*	 
	  setInterval(()=> {
			  if(cnt > 18){
					  return;
			  }
			  html_img.src = movies[cnt].backdrop;
			  cnt++;
	  }, 3000);
	  */
			  
				
	  }catch(err){
			  console.error(err);
	  		}
}

get_data();


