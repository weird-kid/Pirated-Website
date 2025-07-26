let fs = require('fs').promises


/* So, whats happening is during the encoding into 'utf-8', there is something happening
 */
async function duplicate_logo() {
	try {
			let raw_data = await fs.readFile('./views/img/logo.png', 'utf-8');
			await fs.writeFile('./duplicate_logo.png', raw_data, 'utf-8');
			console.log('\nDone');

	}catch(err){
			console.error(err);
	}
}

duplicate_logo();
