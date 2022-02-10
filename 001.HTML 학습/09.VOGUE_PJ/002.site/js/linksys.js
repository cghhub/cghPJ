// 보그 PJ 공통 링크 설정 JS - linksys.js

////////// 제이쿼리 블록 /////////////////////////////////
$(()=>{/////////////////jqb //////////////////////////////
    // console.log("링그시스로딩");

    // 로고 클릭시 첫페이지 이동하기
    $(".logo a").click(function(){
        location.href = "index.html";
    });/////click ///////////////////

    //// gnb 메뉴 클릭시 이동하기 ///////
    // 대상 : .gnb a
    $(".gnb a").click(function(e){
        
        // 기본이동막가
        e.preventDefault();
        
        // 클릭된 a요소 텍스트
        let txt = $(this).text().toLowerCase().trim();
        // toLowerCase() -> 모두 소문자변환
        // trim() -> 앞뒤공백제거
        // -> 여기서는 마지막 검색버튼이 search 인데 앞뒤공백있음
        console.log(txt);

        // 검색(search)이 아닌 경우 카테고리페이지로 이동!
        if(txt!=="search")
        location.href ="category.html?cat="+txt;
    });/////click ///////////////////



});/////////////////////jqb //////////////////////////////
//////////////////////////////////////////////////////////