const tagsEl = $('#tags'); //added "tags"
const textarea = $('#textarea'); //completed the code

textarea.focus();

textarea.on('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  //added a function
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.empty();

  tags.forEach((tag) => {
    const tagEl = $('<span></span>');
    tagEl.addClass('tag');
    tagEl.text(tag);
    tagEl.appendTo(tagsEl);
  });
}

function randomSelect() {
  //added function
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  //added function
  const tags = document.querySelectorAll('.tag'); // completed the code by adding "SelectorAll" and a semi colon
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  //added function
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  //added function
  tag.classList.remove('highlight');
}
