/* eslint-disable */
const fs = require('fs');
const { parse } = require('csv-parse/sync');


/**
 * 目前語系
 * TODO: 新增語系
 */
const langArray = ['zh-tw', 'zh-cn', 'en-us', 'th-th', 'ko-kr', 'my-mm', 'id-id', 'vi-vn', 'ja-jp'];

const langs = langArray.reduce((result, lang) => {
  const last = result;
  last[lang] = {};
  return last;
}, {});

const csv = fs.readFileSync('./tools/lang.csv', 'utf8');

const tableArr = parse(csv);

tableArr
  .slice(1)
  .forEach(([id, ...args]) => {
    args.slice(1).forEach((element, index) => {
      const lang = langArray[index];
      if (lang === undefined || element === '') return;
      langs[lang][id] = element;
    });
  });

langArray.forEach((lang) => {
  fs.writeFileSync(`./src/locales/${lang}.json`, JSON.stringify(langs[lang]));
});
