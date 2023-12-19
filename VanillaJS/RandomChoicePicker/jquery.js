const tagsEl = $('#tags'); //--jquery id selector
const textarea = $('#textarea'); //--jquery id selector

textarea.focus();

textarea.on('keyup', function (e) {
  //--jquery event listener
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});
//--bug
function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.empty();

  tags.forEach((tag) => {
    const tagEl = $('<span></span>'); //--jquery create element
    tagEl.addClass('tag'); //--jquery add class
    tagEl.text(tag); //--jquery add text
    tagEl.appendTo(tagsEl); //--jquery appends
  });
}
//--bug
function randomSelect() {
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
//--bug
function pickRandomTag() {
  const tags = $('.tag'); //--jquery query selector all
  return tags.eq(Math.floor(Math.random() * tags.length)); //--jquery eq() method get specified index
}
//--bug
function highlightTag(tag) {
  tag.addClass('highlight'); //--jquery add class
}
//--bug
function unHighlightTag(tag) {
  tag.removeClass('highlight'); //--jquery remove class
}
