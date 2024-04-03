const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
// const cardsData = getCardsData();
// const cardsData = [
//   {
//     question: 'What must a variable begin with?',
//     answer: 'A letter, $ or _',
//   },
//   {
//     question: 'What is a variable?',
//     answer: 'container for a piece of data',
//   },
//   {
//     question: 'Example of Case Sensitive Variable',
//     answer: 'thisIsAVariable',
//   },
// ];

// set A
const cardsData = [
  {
    question:
      'How would ensure that the evidence you gathered are sufficient and valid?',
    answer:
      '1. The evidence requirements as stipulated in the evidence guide for each unit of competency\n2. If the critical competencies are demonstrated',
  },
  {
    question:
      'What would you do if the candidate cannot understand the language used in the assessment documents?',
    answer:
      'The assessor should be able to translate/explain the assessment documents in the local dialect of the candidate',
  },
  {
    question:
      'How do you ensure the confidentiality of the assessment process? Why is this important?',
    answer:
      '1. Orient candidates to refrain from using their cellphones inside the institution venue\n2. Refrain from talking about the assessment procedures outside the venue and to non-candidates\n3. Ensuring confidentiality is important to preserve the integrity of the assessment procedures',
  },
  {
    question: 'What would you do if the workplace is unsafe for assessment?',
    answer:
      '1. Assessor should re-align the venue according to the standards indicated in the assessment requirements\n2. OHS and contingency policies should be observed in place',
  },
  {
    question: 'What would you do if an accident occurred during assessment?',
    answer:
      'All assessment proceedings should be stopped, and the safety of everyone should be assured',
  },
  {
    question:
      'What evidence-gathering method is used to assess the underpinning knowledge of the candidate?',
    answer:
      '1. Written Test and Interview – for underpinning knowledge\n2. Oral questioning is useful for validating other critical aspects not observed\n3. Demonstration – for underpinning skills',
  },
  {
    question: 'How do you ensure that the assessment decision made is correct?',
    answer: 'Critical competencies are demonstrated and observed',
  },
  {
    question:
      'What other evidence-gathering methods can be used to assess a competency?',
    answer:
      '1. Multiple observations by the assessors of the candidate carrying out the work activities\n2. Assessment of technical qualities or finished product',
  },
  {
    question: 'Define reasonable adjustment.',
    answer:
      'Reasonable adjustment, sometimes called reasonable accommodation or allowable adjustment is designed to ensure that all people are treated equally in the assessment process.',
  },
  {
    question: 'What are the different ways of communicating feedback?',
    answer:
      '1. Ask the candidate to judge how well he or she performed\n2. Reinforce positive aspects of the assessment\n3. Ask the candidate to suggest areas for improvement\n4. Give feedback as soon as possible\nOthers:\n5. Discuss area for improvement in detail\n6. Discuss the need for further evidence\n7. Inform the candidate of your proposed final decision\n8. Work out ways in which the gaps from the assessment may be filled\n9. Remind the candidate of the next procedure\n10. Ask how you can improve assessment for other candidates in the future',
  },
];

const cardsDataSetB = [
  {
    question: 'What is it that you should do prior to the assessment activity?',
    answer:
      '1. Inspect assessment area/venue if OHS is observed\n2. Check if resources, supplies, materials, tools, and equipment are readily available and accessible',
  },
  {
    question: 'What will you explain during the orientation of the candidates?',
    answer:
      '1. Context and purpose of assessment\n2. Qualification/Units of Competency to be assessed\n3. Tasks to be performed/Assessment Activities\n4. Evidence to be collected\n5. Needs of the candidates to be considered\n6. Allowable/Reasonable adjustments',
  },
  {
    question: 'What is the purpose of giving orientation to the candidates?',
    answer:
      '1. Understanding of assessment procedures in line with the guidelines\n2. Understanding of tasks to be performed\n3. Policies to be observed for claiming the National Certificate (if found to be „Competent‟), re-assessment conditions (if found to be „Not Yet Competent‟), and for complaints and appeals',
  },
  {
    question:
      'How do you make sure that the candidate taking the assessment is the same person in the application form?',
    answer:
      'Verify and countercheck with:\n1. Admission Slip\n2. Valid Identification Card\n3. Attendance Sheet\n4. Signature',
  },
  {
    question:
      'How do you make sure the candidate understands the tasks to be performed?',
    answer:
      '1. Have him/her fill up the Self-Assessment Guide (SAG)\n2. Seek feedback regarding the candidate‟s understanding of the Qualification/Unit of Competency to be assessed, evidence requirements, and assessment process',
  },
  {
    question:
      'What are the DO‟s and DON‟Ts of an assessor while observing the candidates performing the tasks?',
    answer:
      'DO‟s:\n1. Ask relevant questions\n2. Be tactful\n3. Stop the assessment in case an accident is imminent\n4. Ensure safety of all individuals (OHS)\nDON‟Ts:\n1. Distract the candidates\n2. Intimidate, embarrass, or humiliate\n3. Do not leave the assessment area during the assessment proceedings\n4. Neglect/disregard needs of candidates',
  },
  {
    question:
      'When the candidate‟s answer is wrong during the interview or oral questioning, do you provide the correct answer immediately? Why or why not?',
    answer:
      '1. Rephrase and ask the question if possible (3 times if needed)\n2. Provide the correct answer after probing efforts have been made',
  },
  {
    question:
      'What should be the basis of your assessment decision? If you are in doubt, what should you do?',
    answer:
      '1. Base decision on the evidence collected\n2. Use oral questioning to validate other critical aspects',
  },
  {
    question:
      'How should you provide the feedback? In case the candidate does not agree with your decision, what would you do?',
    answer:
      '1. Start from positive/strengths to negative/weakness and cite specific areas for improvement\n2. To be effective: should be face-to-face, immediate, non-judgmental, and constructive\nIn case the candidate does not agree:\n3. Explain that the assessment decision is based on the competency standards\n4. Remind the candidate about the orientation: conditions for re-assessment and policies regarding complaints/appeal',
  },
];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}
// Create a singe card in a DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  // card.className = 'card active';

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
        <div class="inner-card">
          <div class="inner-card-front">
            <p>${data.question}</p>
          </div>
          <div class="inner-card-back">
            <p>${data.answer}</p>
          </div>
        </div>
    `;

  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  cardsEl.push(card);
  cardsContainer.appendChild(card);

  updateCurrentText();
}
// Show number of cards
function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}
// Get cards from local storage
function getCardsData() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  return cards === null ? [] : cards;
}
// add card to local storage
function setCardsData(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
  window.location.reload();
}
createCards();
// Event Listeners
// Next
nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';
  currentActiveCard += 1;
  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }
  cardsEl[currentActiveCard].className = 'card active';
  updateCurrentText();
});
// Prev
prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';
  currentActiveCard -= 1;
  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }
  cardsEl[currentActiveCard].className = 'card active';
  updateCurrentText();
});
// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));
// Add new card
addCardBtn.addEventListener('click', () => {
  const question = questionEl.value;
  const answer = answerEl.value;
  // console.log(question, answer)
  if (question.trim() && answer.trim()) {
    const newCard = { question, answer };
    createCard(newCard);
    questionEl.value = '';
    answerEl.value = '';

    addContainer.classList.remove('show');
    cardsData.push(newCard);
    setCardsData(cardsData);
  }
});
// clear cards button
clearBtn.addEventListener('click', () => {
  localStorage.clear();
  cardsContainer.innerHTML = '';
  window.location.reload();
});
