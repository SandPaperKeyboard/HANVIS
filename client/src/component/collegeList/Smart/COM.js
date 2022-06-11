// Computer
// 컴퓨터공학과
import React from 'react';

const COM = () => {
  return (
    <div>
      <span>2. 취득한 자격증을 눌러주십시오.</span>
      <input type="checkbox" name="survay1" value="5" />
      만족
      <input type="checkbox" name="survay1" value="4" />
      다소만족
      <input type="checkbox" name="survay1" value="3" />
      보통
      <input type="checkbox" name="survay1" value="2" />
      다소미흡
      <input type="checkbox" name="survay1" value="1" />
      매우미흡
      <button>설문</button>

      {/* <script>
$('button.survey-btn').click(function(){//버튼을 클릭하면
    error=''
    $('div.surveys').each(function()
    {
        surveysName=$(this).find('span.surveysName').text()//해당설문이름 가져오기
        checkBtn=$(this).find('input[type="radio"]:checked');//체크한 것들
        if(!checkBtn.length){//체크하지 않았으면
            error+=surveysName+'를 선택하시기 바랍니다.\n'//경고문저장
        }
    });
    if(error) alert(error);//경고문이 있으면 경고하기
});
</script> */}
    </div>
  );
};

export default COM;