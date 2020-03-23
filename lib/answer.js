export function answer(questions) {
  process.stdin.setEncoding('utf8');

  return new Promise((resolve) => {
    const answers = [];
    let i = 0;
    let {text, value} = questions[i++];
    console.log(`${text}(${value})`);
    process.stdin.on('readable', () => {
      const chunk = process.stdin.read().slice(0, -1);
      answers.push(chunk || value); // 排除掉回车
      const nextQuestion = questions[i++];
      if(nextQuestion) {
        process.stdin.read();
        text = nextQuestion.text;
        value = nextQuestion.value;
        console.log(`${text}(${value})`);
      } else {
        process.stdin.emit('end');
        resolve(answers);
      }
    });
  });
}