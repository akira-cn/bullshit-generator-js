import {generate} from './lib/generator.js';
import {loadCorpus} from './lib/corpus.js';
import {createRandomPicker} from './lib/random.js';

const corpus = loadCorpus('./corpus/data.json');
const title = createRandomPicker(corpus.title)();

export default (min = 200, max = 1000) => {
  return generate(title, {corpus, min, max});
};
