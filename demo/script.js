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
		
		let i = 0; 
		let flag = 1;
		let html_img = document.getElementsByClassName("image")[i];		


		setInterval(async function() {
				
				if(i == n){
						i = i - 2;
						flag = -1;
				}else if(i == -1){
						i = i + 2;
						flag = 1;
				}
					

				let path = json_data.results[i].backdrop_path;
				let raw_img = await fetch(img_url + path); 
				let blob_obj = await raw_img.blob();
				
				let fr = new FileReader();
				fr.readAsDataURL(blob_obj);
				
				fr.addEventListener('load', ()=> {


						movies.push({
										"title" : json_data.results[i].title,
										"backdrop" : fr.result,
										"id" : json_data.results[i].id,
										"release_date" : json_data.results[i].release_date
								});

						html_img.src = movies[i].backdrop; 
						 i += 1*(flag);
				});

				}, 3000);
			
	
	
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


