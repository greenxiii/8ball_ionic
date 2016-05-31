angular.module('starter.services', [])



.factory('Answers', function() {
  var answers = [{
    id: 0,
    state: 'positive',
    txt: 'It is certain'
  }, {
    id: 1,
    state: 'positive',
    txt: ' It is decidedly so'
  }, {
    id: 2,
    state: 'positive',
    txt: 'Without a doubt'
  }, {
    id: 3,
    state: 'positive',
    txt: 'Yes — definitely'
  }, {
    id: 4,
    state: 'positive',
    txt: 'You may rely on it'
  }, {
    id: 5,
    state: 'hesitantly',
    txt: 'As I see it, yes'
  }, {
    id: 6,
    state: 'hesitantly',
    txt: 'Most likely'
  }, {
    id: 7,
    state: 'hesitantly',
    txt: 'Outlook good'
  }, {
    id: 8,
    state: 'hesitantly',
    txt: 'Signs point to yes'
  }, {
    id: 9,
    state: 'hesitantly',
    txt: 'Yes'
  }, {
    id: 10,
    state: 'neutral',
    txt: 'Reply hazy, try again'
  }, {
    id: 11,
    state: 'neutral',
    txt: 'Ask again later'
  }, {
    id: 12,
    state: 'neutral',
    txt: 'Better not tell you now'
  }, {
    id: 13,
    state: 'neutral',
    txt: 'Cannot predict now'
  }, {
    id: 14,
    state: 'neutral',
    txt: 'Concentrate and ask again'
  }, {
    id: 15,
    state: 'negative',
    txt: 'Don’t count on it'
  }, {
    id: 16,
    state: 'negative',
    txt: 'My reply is no'
  }, {
    id: 17,
    state: 'negative',
    txt: 'My sources say no'
  }, {
    id: 18,
    state: 'negative',
    txt: 'Outlook not so good'
  }, {
    id: 19,
    state: 'negative',
    txt: 'Very doubtful'
  }];

  return {
    all: function() {
      return answers;
    },
    get: function(AnswrId) {
      for (var i = 0; i < answers.length; i++) {
        if (answers[i].id === parseInt(AnswrId)) {
          return answers[i].txt;
        }
      }
      return null;
    }
  };
});