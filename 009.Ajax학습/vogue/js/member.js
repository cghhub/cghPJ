//보그 pj 회원가입 js - member.js //

$(() => { /////////////jqb //////////////////////////////

    console.log("회원가입 로딩완료!");

    //// 모든 공백제거 처리함수 /////////////////
    let groSpace = cv => cv.replace(/\s/g, "");
    // groSpace는  get rid 
    // let groSpace = (cv) => {return cv.replace(/\s/g,"");} 
    // replace(바꿀값,바꿀값)
    // 바꿀값 -> /\s/ -> 슬래쉬사이에 쓰면 정규식
    // 역슬래쉬s -> \s 는 '공백문자' (space)
    // g -> global 즉, 모두찾아라!
    // 함수표현(화살표함수)
    // (전달변수) => {return 값}
    // 전달변수가 하나이면 소괄호와 리턴값 처리만 있으면 뒤의 중괄호도
    // 생략이 가능하다!
    // 전달변수 => 처리값;

    /*************************************************************** 
        입력요소에서 포커스가 빠질때 발생하는 이벤트는?
        ->>>> blur(불러!!!) : focus의 반대
        대상:input[type=text][id=email2][class!=search],
        input[type=password]
        대상조건:type이 text인 input요소 중 아이디가 
        email2가 아니고 클래스가 search가 아닌 요소 +
        type이 password인 input요소

        ________________________________________________________

        요소[속성][속성]->한요소에 여러속성조건 선택가능
        참고) != 속성 선택자는 제이쿼리전용이다!(css사용불가)

    ***************************************************************/
    $(`input[type=text][id!=email2][class!=search],input[type=password]`)
        .blur(function () {

            // 방금 블러발생한 요소의 id는?
            let cid = $(this).attr("id");
            // cid는 current id 즉, 현재 아이디
            // attr(속성명)-> 해당속성값을 읽어옴!

            // 블러발생요소의 입력값은?
            let cv = $(this).val()
            // cv는 current value 즉, 현재값
            // val() -> 선택요소의 입력값을 읽어옴!
            // trim()->문자열 앞뒤공백 제거(공백만쓰면 모든공백제거)

            // '이름'인 경우 앞뒤공백만 제거(중간공백허용)
            if (cid === "mnm") cv = cv.trim();
            // 기타인 경우 모든공백처리!
            else cv = groSpace(cv);
            // 변수에 함수를 담으면 그 함수의 리턴값이 담긴다!

            // 모든공백처리
            cv = groSpace(cv);
            // 변수에 함수를 담으면 그 함수의 리턴값이 담긴다!



            console.log(`블러!`, cid, "\n값:", cv);

            // 공백제거된 데이터를 다시 화면에 출력하기!
            $(this).val(cv);

            /*************************************************** 
                1. 빈값 여부 체크하기
            ***************************************************/
            if (cv === "") {
                // 메시지 출력
                $(this).siblings(".msg").text("필수입력!").removeClass("on");
                // .msg 박스는 형제요소임(바로다음에 있지 않는 것도 있음)
                // siblings(요소) 다른형제요소 중 특정요소 선택 메서드사용!
                // siblings() 아무값도 안쓰면 다른 형제요소 모두선택함

                // 불통과
                pass = false;

            } ///////////////////if :빈값체크///////////////////

            /*************************************************************** 
                2.아이디일 경우 유효성 검사하기
                -검사기준:영문자로 시작하는 6~20글자 영문자/숫자
            ***************************************************************/
            else if (cid === "mid") {
                // console.log("검사결과:",vReg(cv,cid));

                // 검사결과 불통과이면 //////////////////
                if (!vReg(cv, cid)) { //!(not) 반대로 들어감
                    $(this).siblings(".msg")
                        .text("영문자로 시작하는 6~20글자 영문자/숫자")
                        .removeClass("on");
                    // 글자색 빨간색 복원(on이 들어갔을수 있음)

                    // 불통과
                    pass = false;

                } ///////if :아이디검사 불통과 ////////////////////////

                // 검사결과 통과이면 ///////////////////////
                else {
                    // 원래 아이디 중복여부 검사를 해야함!
                    /****************************************************** 
                        [Ajax로 중복아이디 검사하기!]
                        ajax 처리유형 2가지
                        1)post 방식 처리 메서드
                        -$.post(URL,data,callback)
                        2)get방식 처리 메서드
                        -$.get(URL,callback)
                        -URL에 데이터가 포함됨
                        3)위의 2가지 유형 중 선택처리 메서드
                        -$.ajax{(
                            1.전송할페이지,
                            2.전송방식,
                            3.보낼데이터,
                            4.전송할데이터타입,
                            5.비동기옵션,
                            6.성공처리,
                            7.실패처리
                        })
                    ******************************************************/

                    -$.ajax({
                        // 1. 전송할페이지,
                        url: "process/chkID.php",

                        // 2. 전송방식,
                        type: "post",

                        // 3. 보낼데이터
                        data: {
                            "mid": $("#mid").val()
                        },
                        
                        // 4. 전송할데이터타입
                        dataType: "html",

                        // 5. 비동기옵션
                        // 비동기 옵션을 꺼야(false)
                        // 전역변수 pass에 값을 업데이트
                        // 할수있다!
                        async: false,

                        // 6. 성공처리
                        success: function (res) {
                            console.log("결과:", res);
                            // res 전달변수(ok-성공, no-실패)
                            if (res === "ok") { ////사용가능

                                $("#mid").siblings(".msg")
                                    .text("훌륭한 아이디네요~!")
                                    .addClass("on");
                                // 글자색 변경 클래스추가!(녹색글자)
                            } //////////if/////////////////////
                            else { //////사용불가////////////////
                                $("#mid").siblings(".msg")
                                    .text("사용중인 ID입니다!")
                                    .removeClass("on"); //글자색복원

                                // 불통과
                                pass = false;
                            } /////////////else/////////////////


                        }, //////// success ///////////////////
                        
                        // 7. 실패처리
                        // xhr - XMLHttpRequest객체
                        // status - 실패상태코드번호
                        // error - 에러결과값
                        error: function (xhr, status, error) {
                            alert("연결실행실패:", error);
                        } //////// error ///////////////////
                    }); /////////////////ajax ///////////////////////////////




                } /////else :아이디검사 통과

            } ////// else if : 아이디일경우/////////////

            /*************************************************************** 
                3.비밀번호일 경우 유효성 검사하기
                -검사기준:특수문자,문자,숫자포함 형태의 5~15자리
            ***************************************************************/
            else if (cid === "mpw") {
                // console.log("검사결과:",vReg(cv,cid));

                // 검사 결과 불통이면 ///////////////////
                if (!vReg(cv, cid)) {
                    $(this).siblings(".msg")
                        .text("특수문자,문자,숫자포함 형태의 5~15자리");

                    // 불통과
                    pass = false;

                } ///////if : 비번검사 불통과 ///////////////////////
                // 검사결과 통과시 ///////////////////////
                else {
                    // 메시지 지우기
                    $(this).siblings(".msg").empty();
                } //////// else : 비번검사 통과 //////////

            } //////////////// if : 비밀번호일 경우 /////////////////


            /*************************************************************** 
                4.비밀번호확인일 경우
                -검사기준:입력된 비밀번호와 일치여부
            ***************************************************************/
            else if (cid === "mpw2") {
                // 비밀번호 입력값과 비밀번호확인값 일치여부    
                if (cv !== $("#mpw").val()) {
                    $(this).siblings(".msg")
                        .text("비밀번호가 일치하지 않습니다!");

                    // 불통과
                    pass = false;
                } /////// if : 비밀번호확인 불일치 ////
                // 비밀번호확인 통과시 ////////////////////
                else {
                    // 메시지 지우기
                    $(this).siblings(".msg").empty();
                } //////// else : 비밀번호확인 일치 //////////

            } //////////// else if : 비밀번호확인 /////////////

            // 검사결과 통과시 ////////////////////////

            /*************************************************************** 
                5.이메일 입력일때 검사하기
                -검사기준:이메일 형식에 맞는 여부 검사
            ***************************************************************/
            else if (cid === "email1") {
                // 이메일 주소 만들기
                let comp = eml1.val() + "@" +
                    (seleml.val() === "free" ?
                        eml2.val() : seleml.val());
                // 이 메일 뒷주소는 조건연산자(비?집:놀이동산)로
                // 직접입력일 경우("free")는 뒷주소입력 
                // 이메일 값을 넣고 그 밖의 경우에는 
                // 선택박스값을 넣는다!
                console.log("이메일주소:", comp);

                // 이메일 검사하기
                // console.log("이메일검사:", vReg(comp, "eml"))

                // 이메일 정규식 검사하기 함수호출!
                resEml(comp);


            } ////////////// else if : 이메일 입력일때 /////////////
            else {
                // 메시지 지우기
                $(this).siblings(".msg").empty();
                // empty() - 내용지우기
            } /////////// else : 통과시 ////////////


        }); ////////////blur /////////////////////////////////////////
    //////////////////////////////////////////////////////////////////


    /////// 이메일 관련 대상선정 ////////////////////////////////////
    // 이메일 앞주소
    let eml1 = $("#email1");
    // 이메일 뒷주소
    let eml2 = $("#email2");
    // 이메일 뒷주소
    let seleml = $("#seleml");
    /////////////////////////////////////////////////////////////////

    /****************************************************************** 
        선택박스 변경시 이메일 검사하기

        ______________________________________

        검사시점:선택박스 변경할때
        이벤트:change
        이벤트 대상:#seleml -> seleml변수
    ******************************************************************/
    seleml.change(function () {

        // 1.선택박스 변경된 값 읽어오기
        let cv = $(this).val();
        console.log("선택값:", cv);

        // 2.선택옵션별 분기문
        if (cv === "init") {
            // 1.메시지 출력
            eml1.siblings(".msg")
                .text("이메일 옵션 선택필수!")
                .removeClass("on");

            // 2.직접입력창 숨기기(보이는 상태일수 있음!)
            eml2.fadeOut(300);

        } ///////////// if ////////////////////////////
        else if (cv === "free") { // "직접입력" 선택시
            // 1.직접입력창 보이기(fadeIn)
            eml2.fadeIn(300).val("").focus();
            // 서서히 나타나고 값지우고 입력상태!

            // 2.메시지 숨기기
            eml1.siblings(".msg").empty();

        } ///////// else if //////////////////////////
        else { //기타 이메일 주소 선택시
            // 1.직접입력창 숨기기(보이는 상태일수 있음!)
            eml2.fadeOut(300);

            // 2.이메일 전체주소 조합하기
            let comp = eml1.val() + "@" + cv;
            // cv는 select 의 선택옵션값!

            // 3.이메일 유효성 검사히기
            // 이메일 정규식 검사하기 함수호출!
            resEml(comp);

        } ////////////// else ///////////////


    }); //////////change//////////////////////////////////////////////

    /****************************************************************** 
        키보드 입력시 이메일 체크하기

        __________________________________________

        -키보드 관련 이벤트:keypress, keyup, keydown
        1.keypress : 키가 눌려졌을때
        2.keyup : 키가 눌렸다가 올라올때
        3.keydown : 키가 눌려져서 내려갈때
        ->과연 글자가 입력되는 순간은 어떤 키보드 이벤트를
        써야할까?
        ->>>>>> keyup


    ******************************************************************/
    $("#email1, #email2").on("keypress", function () {

        // 1.현재 이벤트 대상 아이디 읽어오기
        let cid = $(this).attr("id");
        console.log("현재아이디:", cid);

        // 2.현재 입력된 값 읽어오기
        let cv = $(this).val();
        console.log("입력값:", cv);

        // 3.이메일 뒷주소 셋팅하기
        let backeml = cid === "emial1" ? seleml.val() : eml2.val()
        // 변수 = 조건연산자
        // 변수 = 조건식? 값1:값2
        // -> 조건연산자에서 결정된 값이 변수에 할당됨!

        // 4.선택박스의 선택값이 "free"(직접입력)이면
        // 이메일 뒷주소로 변경함!
        if (seleml.val() === "free") backeml = eml2.val();

        // 5. 이메일 전체주소 조합하기!
        let comp = eml1.val() + "@" + backeml;
        console.log("이메일주소:", comp);

        // 6. 이메일 유효성 검사 함수호출!
        resEml(comp);

    }); /////////////// keyup //////////////////////////////////////////


    /****************************************************************** 
        함수명:resEml (result Email)
        기능 : 이메일 검사결과 처리
    ******************************************************************/
    const resEml = comp => { //comp - 완성된 이메일주소
        // 이메일 정규식 검사하기
        // 통과시
        if (vReg(comp, "eml")) {
            eml1.siblings(".msg")
                .text("적합한 이메일 형식입니다!")
                .addClass("on");
        } /////////// if : 이메일 통과시 /////////
        else {
            eml1.siblings(".msg")
                .text("맞지않는 이메일 형식입니다!")
                .removeClass("on");

            // 불통과
            pass = false;
        } /////////// else : 이메일 불통과시 //////

    }; //////////// resEml 함수 ///////////////////////////////
    ///////////////////////////////////////////////////////////

    /****************************************************************** 
        가입하기(submit)버튼 클릭시 처리하기

        __________________________________________

        전체검사의 원리:
        전역변수 pass를 설정하여 true를 할당하고
        검사 중간에 불통과 사유발생시 false로 변경!
        유효성 검사 통과여부를 판단한다!

        검사방법:
        기존에 이벤트 함수 blur 이벤트를 강제로 발생시킨다!
        이벤트 강제발생 메서드 -> trigger(이벤트명)
    ******************************************************************/

    // 검사용변수
    let pass;
    $("#btnj").click(function (e) {

        // 1.서브밋 기본이동 막기
        e.preventDefault();

        // 2.pass통과여부 변수에 true할당!(처음시작)
        pass = true;

        // 3.입력창 blur 이벤트 강제 발생시키기(전체검사)
        // 대상:블러이벤트 발생했던 요소들!
        // input[type=text][id!=email2][class!=search]
        // input[type=password]
        $(`input[type=text][id!=email2][class!=search],input[type=password]`)
            .trigger("blur");

        // 통과여부
        console.log("통과여부:", pass)

        // 4.검사결과에 따라 메시지 보이기 및 처리
        if (pass) { // 통과시 ////////////////////////////////////////

            /*********************************************************** 
                [Ajax를 이용한 POST방식으로 DB에 데이터 입력하기!!!]
                ______________________________________________________

                AJAX Asynchronous Javascript and XML

                -비동기통신이란? 쉽게 말해서 페이지가 새로고쳐지지 않고
                그대로 있으면서 일부만 서버 통신을 하는 것을 말한다!

                -제이쿼리는 post방식으로 Ajax를 할수 있다!

                [psot 방식 ajax 메서드]
                $.post(URL,data,callback)
                $.post(전송할페이지,전송할데이터,전송후실행함수)
            ***********************************************************/

            $.post(
                // 1.전송할 페이지
                "process/ins.php",
                // 2.전송할 데이터
                {
                    // 1.아이디
                    "mid": $("#mid").val(),
                    // 2.비밀번호
                    "mpw": $("#mpw").val(),
                    // 3.이름
                    "mnm": $("#mnm").val(),
                    // \4.성별
                    "gen": $(":radio[name=gen]:checked").val(),
                    // 5-1.이메일 앞주소
                    "email1": $("#email1").val(),
                    // 5-2.이메일 앞주소(선택박스)
                    "seleml": $("#seleml").val(),
                    // 5-3.이메일 앞주소(직접입력)
                    "email2": $("#email2").val()
                },
                // 3.전송후 실행하기
                function (res) {
                    // res - 전달변수(처리페이지로부터 결과를 )
                    if (res === "ok") {
                        // alert("성공!");
                        // 메시지 띄우기
                        alert("회원가입을 축하드립니다. 짝짝~")
                        // 원래는 post방식으로 DB에 회원정보를 입력후
                        // DB에 입력완료시 위의 메시지를 띄워준다!

                        // 로그인 페이지로 이동하기
                        location.replace("login.php");
                        //  location.href = "login.php";
                        /* 
                            회원가입 후 이전페이지로 못가도록
                            location.replace(주소) 를 사용하여
                            페이지 캐쉬를 삭제하도록 하여
                            좀 더 안전한 보안을 유지한다!
                        */
                    } ///////////////ij////////////////////////////     
                    else { // 
                        alert(res);
                    }
                }
            ); //////////// post ////////////////////////////////////





        } //////// if : 통과시 //////////////////////////////////////
        else { //// 불통과시 /////////////////////////////////////////

            alert("입력을 수정하세요!");

        } //////// else /////////////////////////////////////////////


    }); /////////////// click /////////////////////////////////



}); ////////////jqb //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////