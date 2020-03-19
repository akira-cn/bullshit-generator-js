import {randomInt, createRandomPicker} from './random.js';

function sentence(pick, replacer) {
  let ret = pick();
  for(const key in replacer) {
    ret = ret.replace(new RegExp(`{{${key}}}`, 'g'),
      typeof replacer[key] === 'function' ? replacer[key]() : replacer[key]);
  }
  return ret;
}

export function generate(title, {
  data,
  minLength = 6000, // 文章最少字数
  maxLength = 10000, // 文章最多字数
} = {}) {
  const articleLength = randomInt(minLength, maxLength);
  let {famous, bosh_before, bosh, said, conclude} = data;

  [famous, bosh_before, bosh, said, conclude] = [famous, bosh_before, bosh, said, conclude].map(createRandomPicker);

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
