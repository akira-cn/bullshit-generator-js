import {generate} from './lib/generator.js';
import {loadCorpus} from './lib/corpus.js';
import {createRandomPicker} from './lib/random.js';

const corpus = loadCorpus('./corpus/data.json');

export default (min = 200, max = 1000) => {
  const title = createRandomPicker(corpus.title)();
  return generate(title, {corpus, min, max});
};
