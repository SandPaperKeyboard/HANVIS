import ScoreData from "./COMscore.json"

function COMCal(props) {
  var COM_sum = 0;
  var jsonArr = props;
  
  COM_sum += COM_Jobs(jsonArr);
  COM_sum += Math.min(COM_IM_Certificate(jsonArr)+COM_IN_Certificate(jsonArr), 600);
  COM_sum += COM_CO_Certificate(jsonArr);
  COM_sum += COM_TOEIC(jsonArr);
  COM_sum += COM_JLPT(jsonArr);
  COM_sum += COM_Counseling(jsonArr);
  COM_sum += COM_Seminar(jsonArr);
  COM_sum += COM_Festival(jsonArr);
  COM_sum += COM_Training(jsonArr);
  COM_sum += COM_Foreign(jsonArr);
  COM_sum += COM_Intemship(jsonArr);
  COM_sum += COM_CO_Contest(jsonArr);
  COM_sum += COM_SC_Contest(jsonArr);
  COM_sum += COM_Capstone(jsonArr);

  return COM_sum;
}

// 직업
function COM_Jobs(inputData) {
  const Table = ScoreData["ResultCOM_Jobs"];
  const Value = inputData["ResultCOM_Jobs"];
  return (Value) ? Table : 0;
}

// 국제 자격증
function COM_IM_Certificate(inputData) {
  const Table = ScoreData["ResultCOM_IM_Certificate"];
  const Value = inputData["ResultCOM_IM_Certificate"];

  var sum = 0;
  for(let i = 0; i < Array.isArray(Value) ? Value.length : 0; i++)
  {
    // 설문에 반영된 항목에 맞게 점수를 더함
    const ind = Table["key"].indexOf(Value[i]);
    sum += Table["value"][ind];
  }
  
  return sum;
}

// 국내 자격증
function COM_IN_Certificate(inputData) {
  const Table = ScoreData["ResultCOM_IN_Certificate"];
  const Value = inputData["ResultCOM_IN_Certificate"];
  var sum = 0;
  for(let i = 0; i < Array.isArray(Value) ? Value.length : 0; i++)
  {
    // 설문에 반영된 항목에 맞게 점수를 더함
    const ind = Table["key"].indexOf(Value[i]);
    console.log(ind);
    sum += Table["value"][ind];
  }
  
  return sum;
}

// 국가 고시
function COM_CO_Certificate(inputData) {
  const Table = ScoreData["ResultCOM_CO_Certificate"];
  const Value = inputData["ResultCOM_CO_Certificate"];
  var sum = 0;
  
  if (typeof Value === "string") {
    const ind = Table["key"].indexOf(Value);
    sum = Table["value"][ind];
  }
  
  
  return sum;
}

// 토익
function COM_TOEIC(inputData) {
  const Table = ScoreData["ResultCOM_TOEIC"];
  const Value = inputData["ResultCOM_TOEIC"];
  var sum = 0;

  if (typeof Value === "string") {
    const ind = Table["key"].indexOf(Value);
    sum = Table["value"][ind];
  }

  
  return sum;
}

// JLPT
function COM_JLPT(inputData) {
  const Table = ScoreData["ResultCOM_JLPT"];
  const Value = inputData["ResultCOM_JLPT"];
  var sum = 0;

  if (typeof Value === "string") {
    const ind = Table["key"].indexOf(Value);
    sum = Table["value"][ind];
  }

  
  return sum;
}

// 상담
function COM_Counseling(inputData) {
  const Table = ScoreData["ResultCOM_Counseling"];
  const Value = inputData["ResultCOM_Counseling"];
  var sum = 0;

  sum += (typeof Value === 1 ? Value : 0)* Table;
  
  return sum;
}

// 학과 세미나, 현장 견학
function COM_Seminar(inputData) {
  const Table = ScoreData["ResultCOM_Seminar"];
  const Value = inputData["ResultCOM_Seminar"];
  var sum = 0;

  if (typeof Value === "string") {
    const ind = Table["key"].indexOf(Value);
    sum = Table["value"][ind];
  }

  
  return sum;
}

// 학과 행사 참여
function COM_Festival(inputData) {
  const Table = ScoreData["ResultCOM_Festival"];
  const Value = inputData["ResultCOM_Festival"];
  var sum = 0;

  if (typeof Value === "string") {
    const ind = Table["key"].indexOf(Value);
    sum = Table["value"][ind];
  }

  
  return sum;
}

// 취업훈련 참가
function COM_Training(inputData) {
  const Table = ScoreData["ResultCOM_Training"];
  const Value = inputData["ResultCOM_Training"];
  var sum = 0;

  if (typeof Value === "string") {
    const ind = Table["key"].indexOf(Value);
    sum = Table["value"][ind];
  }
  
  return sum;
}

// 해외연수
function COM_Foreign(inputData) {
  const Value = parseInt(inputData["ResultCOM_Foreign"]);

  if (!Number.isInteger(Value))
    return 0;

  if (Value >= 30 && Value < 40)
  {
    return 50;
  }
  else if (Value >= 39 && Value < 50)
  {
    return 80;
  }
  else if (Value >= 50)
  {
    return Math.min(2*Value, 200);
  }
  
  return 0;
}

// 인턴십
function COM_Intemship(inputData) {
  const Value = parseInt(inputData["ResultCOM_Intemship"]);

  if (!Number.isInteger(Value))
    return 0;

  if (Value >= 30 && Value < 40)
  {
    return 50;
  }
  else if (Value >= 39 && Value < 50)
  {
    return 80;
  }
  else if (Value >= 50)
  {
    return Math.min(2*Value, 300);
  }
  
  return 0;
}

// 전국 공모전
function COM_CO_Contest(inputData) {
  const Table = ScoreData["ResultCOM_CO_Contest"];
  const Value = inputData["ResultCOM_CO_Contest"];
  var sum = 0;
  if (Array.isArray(Value))
  {
    const ind = Table["key"].indexOf(Value[0]);
    sum = Table["value"][ind];
  }

  return sum;
}

// 교내 공모전
function COM_SC_Contest(inputData) {
  const Table = ScoreData["ResultCOM_SC_Contest"];
  const Value = inputData["ResultCOM_SC_Contest"];
  var sum = 0;
  
  if (Array.isArray(Value))
  {
    const ind = Table["key"].indexOf(Value[0]);
    sum = Table["value"][ind];
  }

  return sum;
}

// 졸업작품전 입상
function COM_Capstone(inputData) {
  const Table = ScoreData["ResultCOM_Capstone"];
  const Value = inputData["ResultCOM_Capstone"];
  var sum = 0;
  sum = typeof Value === 1 ? Table["value"] : 0;

  return sum;
}

export default COMCal;