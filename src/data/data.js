// 0.리더, 1.공무원, 2.경찰, 3.개발자, 4.예술가, 5.요리사, 6.기계공, 7.창업 8.의료계

import {
  alarm,
  bullet,
  ghost,
  Group,
  hourglass,
  shovel,
  soldier,
  timeLamp,
  walk,
  leader,
  officerSoldier,
  police,
  IT,
  artist,
  cook,
  mechanic,
  medical,
  PX,
} from "../image/index";

const qnaList = [
  {
    q: "1. 사격을 마친 당신, 탄피가 하나 없는데...",
    a: [
      { answer: "a. 혼자 찾는다", type: [0, 2, 3] },
      { answer: "b. 안없어진 척 한다", type: [4, 5, 7] },
      { answer: "c. 바로 보고한다", type: [1, 6, 8] },
    ],
    image: bullet,
  },
  {
    q: "2. 행군을 할 때",
    a: [
      { answer: "a. 열심히 걷는다", type: [0, 1, 6] },
      { answer: "b. 적당히 걷다가 아픈척 한다", type: [2, 3, 7] },
      { answer: "c. 기지를 발휘하여 자기열외를 한다", type: [4, 5, 8] },
    ],
    image: walk,
  },
  {
    q: "3. 2시가 근무교대라면?",
    a: [
      { answer: "a. 1시55분까지 교대하러 간다.", type: [0, 1, 8] },
      { answer: "b. 2시 정각에 교대하러 간다.", type: [5, 6, 3] },
      { answer: "c. 안간다", type: [2, 4, 7] },
    ],
    image: alarm,
  },
  {
    q: "4. 나는 연등을",
    a: [
      { answer: "a. 간다.", type: [0, 1, 8] },
      { answer: "b. 안간다.", type: [4, 5, 7] },
      { answer: "c. 가서 딴짓한다", type: [2, 3, 6] },
    ],
    image: timeLamp,
  },
  {
    q: "5. 일과시간에 나는",
    a: [
      { answer: "a. 열정적이다.", type: [0, 7, 8] },
      { answer: "b. 별로 하고싶지 않지만 시키니까 한다.", type: [1, 2, 5] },
      { answer: "c. 삽질이 재밌다", type: [3, 4, 6] },
    ],
    image: shovel,
  },
  {
    q: "6. 근무시간, 귀신이 보이면?",
    a: [
      { answer: "a. 소리지른다.", type: [1, 4, 7] },
      { answer: "b. 말을 걸어본다.", type: [0, 2, 6] },
      { answer: "c. 나도 보이는 척을 한다", type: [3, 5, 8] },
    ],
    image: ghost,
  },
  {
    q: "7. 나는 후임을",
    a: [
      { answer: "a. 잘 챙긴다.", type: [0, 1, 2] },
      { answer: 'b. "알아서 잘 하겠지~", 그냥 둔다.', type: [3, 4, 7] },
      { answer: "c. 내가 살기 위해 챙긴다", type: [5, 6, 8] },
    ],
    image: soldier,
  },
  {
    q: "8. 불침번때, 나는 이런 생각을 한다!",
    a: [
      { answer: "a. 진로에 대한 끊임없는 고민.", type: [0, 3, 7] },
      { answer: "b. 후임에게 망보라고 시킨 후 잔다.", type: [1, 2, 6] },
      { answer: "c. 휴가때 뭐 할지 생각한다", type: [4, 5, 8] },
    ],
    image: Group,
  },
  {
    q: "9. 개인정비시간에 나는,",
    a: [
      { answer: "a. 폰을 본다.", type: [1, 4, 5] },
      { answer: "b. 운동한다.", type: [2, 6, 7] },
      { answer: "c. 공부한다", type: [0, 3, 8] },
    ],
    image: hourglass,
  },
];

const infoList = [
  {
    name: "훈련조교",
    desc: "통찰력이 뛰어난 당신, 당신에게는 리더가 어울려요!",
    image: leader,
    bgc: "#1FB57E",
  },
  {
    name: "행정병",
    desc: "철두철미하고 정확한 것을 좋아하는 당신은 행정을 위해 태어났습니다.",
    image: officerSoldier,
    bgc: "#EC7070",
  },
  {
    name: "헌병",
    desc: "질서를 좋아하는 당신, 군대 체질이신가요?",
    image: police,
    bgc: "#A17FE0",
  },
  {
    name: "통신병",
    desc: "철두철미하고 정확한 것을 좋아하는 당신 당신은 행정을 위해 태어났습니다.",
    image: IT,
    bgc: "#F5B61D",
  },
  {
    name: "군악병",
    desc: "예술적으로 뛰어난 당신~!",
    image: artist,
    bgc: "#17A2C2",
  },
  {
    name: "취사병",
    desc: "금손인 당신, 요리를 해보시는건 어때요?",
    image: cook,
    bgc: "#B2B2B2",
  },
  {
    name: "정비병",
    desc: "고장난 건 내가 다 고친다! 기계와 친하시군요!!",
    image: mechanic,
    bgc: "#E184DE",
  },
  {
    name: "PX병",
    desc: "계산하나는 타고나셨군요!!",
    image: PX,
    bgc: "#A8CF55",
  },
  {
    name: "의무병",
    desc: "메스. 의료계통으로 나가보시는건 어떠세요?",
    image: medical,
    bgc: "#D8A458",
  },
];

export { qnaList, infoList };
