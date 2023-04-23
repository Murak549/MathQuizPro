// 문제 출제 영역 선택
const problemArea = document.querySelector('#problem-area');

// 문제 유형 1
const q = Math.floor(Math.random() * 90 + 10); // 2자리수 랜덤 정수
const r = Math.floor(Math.random() * 90 + 10); // 2자리수 랜덤 정수
const s = Math.floor(Math.random() * 9 + 1); // 1자리수 랜덤 정수

// α, β 계산
const alpha = ((-1) * (-q + Math.sqrt(q * q - 4 * r)) / 2).toFixed(2);
const beta = ((-1) * (-q - Math.sqrt(q * q - 4 * r)) / 2).toFixed(2);

// 문제 출력
problemArea.innerHTML = `
  <p>x^2 - ${q}x + ${r} = 0의 두근을 α, β라 할 때, α^2 - ${s}αβ + 4의 값은?</p>
  <input type="text" placeholder="정답을 입력하세요" id="answer">
  <button onclick="checkAnswer()">제출</button>
`;

// 정답 확인 함수
function checkAnswer() {
  const answer = document.querySelector('#answer').value;
  const expectedAnswer = (alpha * alpha - s * alpha * beta + 4).toFixed(2);

  if (answer == expectedAnswer) {
    alert('정답입니다!');
  } else {
    alert('틀렸습니다.');
  }
}
