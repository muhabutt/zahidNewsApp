export const urlRegexTest = imageUrl => {
  let testUrl = false;

  if (imageUrl) {
    const regex = RegExp(
      '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$',
      'g',
    );
    testUrl = regex.test(imageUrl);
  }

  return testUrl;
};

export const searchWords = obj => {
  let words = [
    '电晕',
    '電暈',
    'covid-19',
    'covid',
    'corona',
    'كورونا',
    'קורונה',
    'कोरोना',
    'Couronne',
    'Korona',
    'quarantine',
    'cuarentena',
    'quarantäne',
    '隔离',
    'kwarantyn',
    'karantinë',
    'الحجر الصحي',
    'quarantena',
    'karantene',
    'карантин',
    'корона',
    'karantän',
  ];
  if (obj) {
    for (let index = 0; index < words.length; index++) {
      if (obj.title && obj.description) {
        if (obj.title.toLowerCase().indexOf(words[index]) > -1) {
          return true;
        }
        if (obj.description.toLowerCase().indexOf(words[index]) > -1) {
          return true;
        }
      }
    }
  }
};
