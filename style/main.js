$(document).ready(function(){
    // function([string1, string2],target id,[color1,color2])    
 consoleText(['WEB DEVOLEPER', 'GRAPHIC DESIGNER'], 'text',['#64ffda','#8892b0']);

 function consoleText(words, id, colors) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 };
 const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});
//Hard Skill And Sowftskil
$(".soft-skills").css({
  "backgroundColor":"#64ffda",
 //  "color":"#0F172A"
});
$(".soft-skills").children("h1").css({
  "color":"#0F172A",
 //  "color":"#0F172A"
}); 
   $(".hard-skills").click(function(){
        // $(this).addClass('soft-skills');
        // $(this).removeClass('hard-skills');
        $(this).css({
          'backgroundColor':"#64ffda",
          "color":"#0F172A",
        });
        $(this).children("h1").css({
          "color":"#0F172A",
           
        });
        $(".soft-skills").css({
           "backgroundColor":"transparent",
          //  "color":"#0F172A"
        });
        $(".soft-skills").children("h1").css({
          "color":"#64ffda",
         //  "color":"#0F172A"
       });
        // $(".soft-skills").addClass('hard-skills');
        $(".hard-skills-main").css({
          "display":"block"
        })
        $(".soft-skills-main").css({
          "display":"none"
        })
   });
   $(".soft-skills").click(function(){
    // $(this).addClass('soft-skills');
    // $(this).removeClass('hard-skills');
    $(this).css({
      'backgroundColor':"#64ffda",
      "color":"#0F172A",
    });
    $(this).children("h1").css({
      "color":"#0F172A"
    });
    $(".hard-skills").css({
       "backgroundColor":"transparent",
      //  "color":"#0F172A"
    });
    $(".hard-skills").children("h1").css({
      "color":"#64ffda",
     //  "color":"#0F172A"
   });
    // $(".soft-skills").addClass('hard-skills');
    $(".soft-skills-main").css({
      "display":"block"
    })
    $(".hard-skills-main").css({
      "display":"none"
    })
});
});
