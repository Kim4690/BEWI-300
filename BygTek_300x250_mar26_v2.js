<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">

<style>
body { margin:0; }

#banner {
  width:300px;
  height:250px;
  position:relative;
  overflow:hidden;
  cursor:pointer;
}

/* BAGGRUND */
#bg {
  position:absolute;
  width:100%;
  height:100%;
  background:url("https://kim4690.github.io/BEWI-300/BygTek_300x250_mar26_atlas_1.png") no-repeat;
  background-size:2000px 1333px;
  background-position:0px 0px;
}

/* TEXT 1 */
#text1 {
  position:absolute;
  width:236px;
  height:48px;
  top:40px;
  left:30px;
  background:url("https://kim4690.github.io/BEWI-300/BygTek_300x250_mar26_atlas_1.png") no-repeat;
  background-size:2000px 1333px;
  background-position:-492px -1335px;
  opacity:0;
  transition:opacity 0.6s;
}

/* TEXT 2 */
#text2 {
  position:absolute;
  width:245px;
  height:96px;
  top:60px;
  left:30px;
  background:url("https://kim4690.github.io/BEWI-300/BygTek_300x250_mar26_atlas_1.png") no-repeat;
  background-size:2000px 1333px;
  background-position:0px -1335px;
  opacity:0;
  transition:opacity 0.6s;
}

/* CTA */
#cta {
  position:absolute;
  width:84px;
  height:22px;
  bottom:15px;
  left:30px;
  background:url("https://kim4690.github.io/BEWI-300/BygTek_300x250_mar26_atlas_1.png") no-repeat;
  background-size:2000px 1333px;
  background-position:-966px -1335px;
  opacity:0;
  transform:translateY(20px);
  transition:all 0.6s;
}

/* STATES */
.step1 #text1 { opacity:1; }
.step2 #text1 { opacity:0; }
.step3 #text2 { opacity:1; }
.step1 #cta { opacity:1; transform:translateY(0); }
</style>
</head>

<body>

<div id="banner">
  <div id="bg"></div>
  <div id="text1"></div>
  <div id="text2"></div>
  <div id="cta"></div>
</div>

<script>
var banner = document.getElementById("banner");

// text1 ind
setTimeout(()=>banner.classList.add("step1"), 2000);

// text1 ud
setTimeout(()=>banner.classList.add("step2"), 4000);

// text2 ind
setTimeout(()=>banner.classList.add("step3"), 5000);

// klik
banner.onclick = function(){
  window.open("https://bewi.com/loesninger-brancher/tag?lang=da&utm_source=html5&utm_medium=fp&utm_campaign=Tagisolering","_blank");
};
</script>

</body>
</html>
