//import 계산결과 from COMJson

function COMCal(props) {

  const COM_sum = 0;

  //axios ~~~
  var jsonArr = props;
  //var jsonArr = JSON.parse(jsonStr); //Json형식의 String값 -> Json객체로 변환
      
  var jsonObjKey = []; //jsonObj key 담을 배열
  var jsonObjVal = []; //jsonObj value 담을 배열
  for(var i=0; i<jsonArr.length; i++){
      jsonObjKey.push(Object.keys(jsonArr[i])[0]); //key를 담음
      //jsonObjKey.push(Object.keys(res[i])+'');
      jsonObjVal.push(jsonArr[i][Object.keys(jsonArr[i])[0]]);//value만 담음
  };
  
  console.log(jsonObjKey);
  console.log(jsonObjVal);
  
  

}

export default COMCal;

  /*
  if (COM_sum > 800) {
    return "합격입니다."
  } else {
    return "조금더 노력하셔야해요"
  }


  for (let i = 0; i < jsonObjVal.length; i++) {
    COM_sum += jsonObjVal[i];
  }


  /*










  function Jobs() {
    if (ResultCOM_Jobs(props) === "true") {
      
    }
  }

  var ResultCOM_IM_Certificate = [
    "C_item1",
    "C_item2",
    "C_item3",
    "C_item4",
    "C_item5",
    "C_item6",
    "C_item7",
    "C_item8",
    "C_item9",
    "C_item10",
    "C_item11",
    "C_item12",
    "C_item13",
    "C_item14",
    "C_item15",
    "C_item16",
    "C_item17",
    "C_item18",
    "C_item19",
    "C_item20",
    "none"
  ];
  ResultCOM_IM_Certificate = [
    400, 400, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300,
    300, 300, 300, 300, 300, 0
  ];

  var ResultCOM_IN_Certificate = [
    "IC_item1",
    "IC_item2",
    "IC_item3",
    "IC_item4",
    "IC_item5",
    "IC_item6",
    "IC_item7",
    "IC_item8",
    "IC_item9",
    "IC_item10",
    "IC_item11",
    "IC_item12",
    "IC_item13",
    "IC_item14",
    "IC_item15",
    "IC_item16",
    "IC_item17",
    "IC_item18",
    "IC_item19",
    "IC_item20",
    "IC_item21",
    "IC_item22",
    "IC_item23",
    "IC_item24",
    "IC_item25",
    "IC_item26",
    "IC_item27",
    "IC_item28",
    "IC_item29",
    "IC_item30",
    "IC_item31",
    "IC_item32",
    "none"
  ];
  ResultCOM_IN_Certificate = [
    300, 300, 300, 300, 300, 300, 300, 300, 300, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0
  ];

  var ResultCOM_CO_Certificate = [
    "CC_Item1",
    "CC_Item2",
    "CC_Item3",
    "CC_Item4",
    "CC_Item5",
    "CC_Item6",
    "none"
  ];
  ResultCOM_CO_Certificate = [700, 1000, 800, 1000, 900, 1000, 0];

  var ResultCOM_TOEIC = ["T_item1", "T_item2", "T_item3", "T_item4", "T_item5", "none"];
  ResultCOM_TOEIC = [100, 200, 300, 400, 500, 0];

  var ResultCOM_JLPT = ["J_Item1", "J_Item2", "none"];
  ResultCOM_JLPT = [500, 350, 0];

  var ResultCOM_Counseling = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ];

  //학과의 세미나, 현장견학에 참여하면 1회당 30점
  var ResultCOM_Seminar = [
    "S_item1",
    "S_item2",
    "S_item3",
    "S_item4",
    "S_item5",
    "none"
  ];
  ResultCOM_Seminar = [30, 60, 90, 120, 150, 0];

  //학과 임원활동, MT, 체육대회, 학술제 등 학과 행사에 참여하면 1회당 20점
  //최대 150점(세미나 학술제 등)
  var ResultCOM_Festival = [
    "F_item1",
    "F_item2",
    "F_item3",
    "F_item4",
    "F_item5",
    "F_item6",
    "F_item7",
    "F_item8",
    "none"
  ];
  ResultCOM_Festival = [20, 40, 60, 80, 100, 120, 140, 150, 0];

  var ResultCOM_Training = ["TR_item1", "TR_item2", "TR_item3", "none"];
  ResultCOM_Training = [50, 100, 150, 0];

  //해외연수 기간 ResultCOM_Foreign 어차피 숫자로 저장됨 불러오기만

  //인턴십 기간 ResultCOM_Intemship 어차피 숫자로 저장됨 불러오기만

  var ResultCOM_CO_Contest = ["CCon_item1", "CCon_item2", "CCon_item3", "none"];
  ResultCOM_CO_Contest = [600, 400, 300, 0]

  var ResultCOM_SC_Contest = ["SCon_item1", "SCon_item2", "SCon_item3", "none"];
  ResultCOM_SC_Contest = [300, 200, 100, 0]

  function capstone() {
    if (ResultCOM_Capstone(props) === "true") {
      //ResultCOM_Capstone의 값이 true일경우 100점 추가 를 입력해야함
    }
  }

  if ("ResultCOM_Jobs" === "true") {
    COM_sum = COM_sum + 850;
  }

  return ();

*/



