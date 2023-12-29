<template>
    
<div class="container" id="container">
   <div class="form-container sign-up-container">
      <form action="#">
         <h1>회원가입</h1>
         <div class="social-container">
            <!-- <a href="#" class="kakao"><img src="../assets/btn_kakao.png"></a>
            <a href="#" class="naver"><img src="../assets/btn_naver.png"></a> -->
         </div>
         <span>또는 이메일을 통해 가입</span>
         <input type="name" placeholder="이름" />
            <input type="id" placeholder="아이디"/>
            <input type="password" placeholder="비밀번호" />
         <input type="email" placeholder="이메일" />
            <input type="birth" placeholder="생년월일(예:990913)"/>
            <input type="phone" placeholder="휴대폰번호"/>
            <input type="zipcode" placeholder="우편번호"/>
            <input type="adr1" placeholder="주소"/>
            <input type="adr2" placeholder="상세주소"/>
         <button>회원가입</button>
      </form>
   </div>
   <div class="form-container sign-in-container">
      <form action="#">
         <h1>로그인</h1>
         <div class="social-container">
            <!-- <a href="#" class="kakao"><img src="../assets/btn_kakao.png"></a>
            <a href="#" class="naver"><img src="../assets/btn_naver.png"></a> -->
         </div>
         <span>또는 계정을 사용합니다</span>
         <input type="email" placeholder="아이디" />
         <input type="password" placeholder="비밀번호" />
         <a href="#" onclick="location.href='find.html'">ID/PW 찾기</a>
         <button>로그인</button>
      </form>
   </div>
   <div class="overlay-container">
      <div class="overlay">
         <div class="overlay-panel overlay-left">
            <h1>돌아온 걸 환영해요!</h1>
            <p>계속 연결하려면 개인 정보로 로그인하십시오.</p>
            <button class="ghost" id="signIn">로그인</button>
         </div>
         <div class="overlay-panel overlay-right">
            <h1>안녕하세요!</h1>
            <p>저희와 함께 건강한 생활을 시작해요.</p>
            <button class="ghost" id="signUp" @click="addActive">회원가입</button>
         </div>
      </div>
   </div>
</div>
</template>
<script>
        addActive() {
      const container = document.getElementById('container');
      container.classList.add("right-panel-active");
    },
    removeActive() {
      const container = document.getElementById('container');
      container.classList.remove("right-panel-active");
    }
</script>
<style>
@import "./css/css.css";
</style>