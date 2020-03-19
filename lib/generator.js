import {randomInt, randomPick} from './random.js';

function sentence(list, replacer) {
  let ret = randomPick(list);
  for(const [key, value] of Object.entries(replacer)) {
    ret = ret.replace(new RegExp(`{{${key}}}`, 'g'), Array.isArray(value) ? randomPick(value) : value);
  }
  return ret;
}

export function generate(title, {
  data,
  minLength = 6000, // 文章最少字数
  maxLength = 10000, // 文章最多字数
} = {}) {
  const articleLength = randomInt(minLength, maxLength);
  const {famous, bosh_before, bosh, said, conclude} = data;

  const article = [];
  let totalLength = 0;

  while(totalLength < articleLength) {
    let section = '';
    const sectionLength = randomInt(200, 500); // 每段200到500字
    while(section.length < sectionLength || !/[。?？]$/.test(section)) {
      const n = randomInt(0, 100);
      if(n < 20) {
        section += sentence(famous, {said, conclude});
      } else if(n < 50) {
        section += sentence(bosh_before, {title}) + sentence(bosh, {title});
      } else {
        section += sentence(bosh, {title});
      }
    }
    totalLength += section.length;
    article.push(section);
  }

  return article;
}
