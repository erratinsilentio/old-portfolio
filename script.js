window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 550) {
    document.getElementById("page-two-content").className = "test";

    document.getElementById("leftline").className = "lines";
    document.getElementById("rightline").className = "lines";

    document.getElementById("story-two").className = "appear";


  } else {
    document.getElementById("page-two-content").className = "test-rev";

    document.getElementById("leftline").className = "revlines";
    document.getElementById("rightline").className = "revlines";

    document.getElementById("story-two").className = "hide";

  }

  if(document.documentElement.scrollTop > 1400){
    document.getElementById("page-three-content").className = "squeeze";
    document.getElementById("new").className = "appear";
} else {
    document.getElementById("page-three-content").className = "";

};

    if(document.documentElement.scrollTop > 2100){
        document.getElementById("page-four-content").className = "appear";
    } else {        document.getElementById("page-four-content").className = "";
}
};


