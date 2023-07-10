import {options} from '../lib/cmd.js';
import {loadCorpus, saveCorpus} from '../lib/corpus.js';
import {generate} from '../lib/generator.js';
import {createRandomPicker} from '../lib/random.js';
import {interact} from '../lib/interact.js';

const corpus = loadCorpus('corpus/data.json');
let title = options.title || createRandomPicker(corpus.title)();

(async function () {
  if(Object.keys(options).length <= 0) {
    const answers = await interact([
      {text: '请输入文章主题', value: title},
      {text: '请输入最小字数', value: 6000},
      {text: '请输入最大字数', value: 10000},
    ]);
    title = answers[0];
    options.min = answers[1];
    options.max = answers[2];
  }

  const article = generate(title, {corpus, ...options});
  const output = saveCorpus(title, article);

  console.log(`生成成功！文章保存于：${output}`);
}());