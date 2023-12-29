<template>
  <div>
      <div id="mainslider" >
        <splide :options="options">
          <splide-slide>
            <img class="slider-image" src="" alt="main1" />
          </splide-slide>
          <splide-slide>
            <img class="slider-image" src="" alt="main2" />
          </splide-slide>
        </splide>
    </div>
    <div class="con">
      <div class="content cate-list">
          <h2 class="home_title">유산균 BEST</h2>
          <div class="s1" style="height: 230px;">
          <!-- <img src="../img/yac02.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
          <img src="../img/yac03.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
          <img src="../img/yac04.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
          <img src="../img/yac02.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;"> -->
          <!-- <img src="../uploads/5-0.jpg" style=" width: 230px; height: 230px; padding-right: 30px;"> -->
          </div>
      </div>

      
      <div class="content cate-list">
          <h2 class="home_title">비타민 BEST</h2>
          <!-- <div class="s1" style="height: 230px;">
          <img src="../img/yac02.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
          <img src="../img/yac04.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
          <img src="../img/yac03.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;">
          <img src="../img/yac02.jpeg" style=" width: 100%; height: 230px; padding-right: 30px;"> -->
          <!-- <img src="../uploads/5-0.jpg" style=" width: 230px; height: 230px; padding-right: 30px;"> -->
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
data() {
  return {
    options: {
      type: 'fade',
      rewind: false,
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pauseOnHover: false,
      arrows: false,
      dots: true,
      animatedDots: false,
      transition: 'fade',
      speed: 800
    }
  }
}
}
</script>
<style>
</style>