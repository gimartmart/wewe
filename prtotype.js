const { Guild } = require('discord.js');
const { DEFAULT_LANG: defaultLang } = require('./config.json');
const Json = require('./lib/Json.js');
const fs = require('fs');
const path = require('path');

const langs = fs.readdirSync('./languages/').map(i => path.basename(i, '.json'));

Object.defineProperties(Guild.prototype, {
  data: {
    get(){
      if(!this._data) this._data = new Json(`./json/${this.id}`);
      return this._data;
    }
  },
  setLang: {
    value: function setLang(lang){
      if(!langs.includes(lang)) throw new Error(`language ${lang} is not defined.`);
      this.data.lang = lang;
      this.data.save();
    }
  },
  lang: {
    get(){
      return this.data.lang || defaultLang; 
    }
  }
})