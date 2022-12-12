// Chech for active section (page) and add class active to menu
let section = document.querySelectorAll("section div");
let menu = document.querySelectorAll(".menu nav a");
let page_num = document.getElementById('page-num');
// const tags = document.querySelectorAll("#body-bg div")



window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // remove_wave_class()
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".menu nav a[href*=" + id + "]")
          .classList.add("active");

      });

    }
    // load_wave()
  });
};


// reveal the section content when it on the relative section
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      page_num.innerHTML = i+1;
    } else {
      reveals[i].classList.remove("active");

    }
  }
}

window.addEventListener("scroll", reveal);

reveal()



document.getElementById("logo").onclick = function() {
  page_num_reset()
};

function page_num_reset() {
  page_num.innerHTML = "0";
  menu.forEach((link) => {
    link.classList.remove("active");
  });
};



// Submit BTN --- CONTACT PAGE


(function() {
  var removeSuccess;

  removeSuccess = function() {
    return $('.button').removeClass('success');
  };

  $(document).ready(function() {
    return $('.button').click(function() {
      $(this).addClass('success');
      return setTimeout(removeSuccess, 3000);
    });
  });

}).call(this);




