const fs = require('fs');
const path = require('path');
const languages = fs.readdirSync('./languages/').map(i => path.basename(i, '.json'));

function parse(str, ...args){
	return str.replace(/\{\d+\}/g, i => args[i.slice(1,-1)]);
}

function transform(obj){
	for(const key in obj){
		// console.log(parse.bind(null, obj[key]))
		if(typeof obj[key] == 'string') obj[key] = parse.bind(null, obj[key]);
		if(typeof obj[key] == 'object') obj[key] = transform(obj[key]);
	}
	return obj;
}

class Language{
	constructor(language, cmd){
		if(!languages.includes(language)) throw new Error(`language ${language} is not defined.`);
		const lang = require(`../languages/${language}.json`);
		this.default = {};
		Object.assign(this, transform(lang[cmd]));
		Object.assign(this.default, transform(lang.default));
		this.ALL = languages;
	}
}

module.exports = Language;
