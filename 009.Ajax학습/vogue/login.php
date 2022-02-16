<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 | 보그 코리아()</title>
    <!-- 텝메뉴 아이콘 favicon -->
    <link rel="shortcut icon" href="images/icon.jpg">
    <!-- 폰티스트 아이콘 CDN CSS 불러오기 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/category.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/media.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <!-- 부드러운 스크롤 플러그인 -->
    <script src="js/smoothScroll20.js"></script>
    <!-- 링크시스템js -->
    <script src="js/linksys.js"></script>
    <!-- 공통 js -->
    <script src="js/common.js"></script>
    <!-- 카테고리 페이지 js -->
    <script src="js/login.js"></script>
</head>

<body>
    <!-- 1.상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="cont ibx">
            <!-- 1카테고리 페이지 탑영역 -->
            <header class="ctop">
                <!-- 1-1.서브타이틀 -->
                <h2 class="stit">login</h2>
                <!-- 1-2.서브메뉴(LNB-local Navigation Bar) -->
            </header>

            <!-- 2.로그인 페이지 컨텐츠박스 -->

            <section class="scont">
                <!-- 아이디박스 -->
                <div class="minput">
                    <label for="min">아이디</label>
                    <input type="text" id="mid" name="mid" maxlength="10" placeholder="아이디를 입력해 주세요">
                </div>
                <!-- 비밀번호박스 -->
                <div class="minput">
                    <label for="mpw">비밀번호</label>
                    <input type="text" id="mpw" name="mpw" maxlength="10" placeholder="비밀번호를 입력해 주세요">
                </div>
                <!-- 버튼영역 -->
                <div class="btns">
                    <input type="submit" id="sbtn" value="LOGIN" class="btn btn-primary">
                </div>
                <!-- 기타링크영역 -->
                <div class="addbx">
                    <span>
                        <input type="checkbox" id="chkbx" name="chkbx">
                        <label for="chkbx">아이디저장</label>
                    </span>
                    <a href="#">아이디찾기</a> |
                    <a href="#">비밀번호찾기</a> |
                    <a href="#">회원가입</a>
                </div>
            </section>


        </main>
    </div>
    <!-- 3.하단영역 -->
    <?php include "inc/info.inc" ?>
    <!-- 위로가기 버튼 -->
    <a href="#" class="tbtn fi fi-angle-up">
        <span class="ir">위로가기버튼</span>
    </a>

</body>

</html>