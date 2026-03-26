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
  font-family: Arial, sans-serif;
  cursor:pointer;
  background:#000;
}

/* BAGGRUND */
#bg {
  position:absolute;
  width:100%;
  height:100%;
  background:url("https://kim4690.github.io/BEWI-300/BygTek_300x250_mar26_atlas_1.png") center/cover no-repeat;
}

/* BLÅ SHAPE */
#shape {
  position:absolute;
  width:200%;
  height:200%;
  background:#26485F;
  transform: rotate(20deg) scale(0);
  top:-50%;
  left:50%;
  transition: transform 1.2s ease;
}

/* LOGO */
#logo {
  position:absolute;
  top:10px;
  right:10px;
  width:80px;
  height:20px;
  background:white;
}

/* TEKST */
.text {
  position:absolute;
  left:15px;
  right:15px;
  color:#fff;
  opacity:0;
  transition: opacity 0.6s ease;
}

#text1 { top:40px; }
#text2 { top:60px; }

/* CTA */
#cta {
  position:absolute;
  bottom:15px;
  left:15px;
  background:#fff;
  color:#000;
  padding:6px 12px;
  font-size:12px;
  opacity:0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

/* STATES */
.step1 #shape {
  transform: rotate(20deg) scale(1);
}

.step2 #text1 {
  opacity:1;
}

.step3 #text1 {
  opacity:0;
}

.step4 #text2 {
  opacity:1;
}

.step2 #cta,
.step4 #cta {
  opacity:1;
  transform: translateY(0);
}
</style>
</head>

<body>

<div id="banner">
  <div id="bg"></div>
  <div id="shape"></div>

  <div id="logo"></div>

  <div id="text1" class="text">[TEKST 1 HER]</div>
  <div id="text2" class="text">[TEKST 2 HER]</div>

  <div id="cta">Læs mere</div>
</div>

<script>
var banner = document.getElementById("banner");

// STEP 1 – shape
setTimeout(() => banner.classList.add("step1"), 200);

// STEP 2 – text1 + CTA
setTimeout(() => banner.classList.add("step2"), 2000);

// STEP 3 – text1 ud
setTimeout(() => banner.classList.add("step3"), 4000);

// STEP 4 – text2 ind
setTimeout(() => banner.classList.add("step4"), 5000);

// klik
banner.addEventListener("click", function(){
  window.open(
    "https://bewi.com/loesninger-brancher/tag?lang=da&utm_source=html5&utm_medium=fp&utm_campaign=Tagisolering",
    "_blank"
  );
});
</script>

</body>
</html>
