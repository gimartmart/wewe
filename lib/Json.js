const path = require('path');
const fs = require('fs');

class Json{
	constructor(filePath){
		filePath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);

		if(!fs.existsSync(filePath)) fs.writeFileSync(filePath, '{}');
		const file = fs.readFileSync(filePath, 'utf8');
		const data = JSON.parse(file && file.length ? file : '{}');
		Object.assign(this, data);
		Object.defineProperty(this, '_path', { value: filePath });
	}
	save(){
		fs.writeFileSync(this._path, JSON.stringify(this, null, 2));
	}
}

module.exports = Json;
