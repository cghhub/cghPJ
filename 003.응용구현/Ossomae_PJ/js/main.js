// 옷소매 갤러리 JS - main.js

///////////////// 로딩구역 ///////////////////////
$(() => {

    console.log("로딩완료");

    // 광클금지 상태변수
    let prot = 0;

    // 갤러리 박스
    let gbx = $(".gbx");

    // 버튼통합구현//////
    // 이벤트대상: .abtn
    $(".abtn").click(function () {

        // 광클금지 //////////////////////////////////////////
        if (prot) return;
        prot = 1; ///잠금
        setTimeout(() => prot = 0, 400)
        //////////////////////////////////////////////////////

        console.log("오른쪽인가?", $(this).is(".rb"))
        // is()메서드 -> 선택자의 구분요소여부 true/false응답
        // $(this).is(".rb")->클릭된버튼은 .rb인가? true/false

        // 분기문
        // 오른쪽버튼
        if ($(this).is(".rb")) {
            gbx.append(gbx.find("div").first())
        } 
        else{
            gbx.prepend(gbx.find("div").last())
        }

        clearAuto();

    }); ////////click //////////////


    /************************************************************* 
        인터발 설정하기
    *************************************************************/
    let autoI,//인터발변수
        autoT;//타임아웃변수


    //1. 인터발함수
    const autoSlide = () => {
        auto = setInterval(() => gbx.append(gbx.find("div").last()),2000);
    };/// autoSlide함수 //////////////////////////////////////////////////
    //2. 인터발함수함수

    // 인터발 최초호출!
    autoSlide();

    //3. 지우기함수
    const clearAuto = () => {
        clearInterval(autoI);// 인터발지움
        clearTimeout(autoT); // 타임아웃지움
        autoT = setTimeout(autoSlide,3000)
    };/////////////clearAuto /////////////////////////////////////////////



    // 오른쪽 버튼 클릭시 
    // 이벤튼대상: .rb
    // 변경대상: .gbx
    // $(".rb").click(function(){

    //     console.log("")
    //     // 맨뒤요소 맨뒤로이동
    //     // append(요소)

    //     gbx.append(gbx.find("div").first());

    // });

    // 오른쪽 버튼 클릭시 
    // 이벤튼대상: .rb
    // 변경대상: .gbx
    // $(".lb").click(function(){

    //     console.log("")

    //     gbx.prepend(gbx.find("div").last());

    // });

});

///////////// 로딩구역 //////////////////////
/////////////////////////////////////////////////