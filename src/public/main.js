ScrollReveal().reveal(".logo-blanco", { delay: 1000 });
ScrollReveal().reveal("#element1", { delay: 200 });
ScrollReveal().reveal("#element2", { delay: 500 });
ScrollReveal().reveal("#element3", { delay: 800 });
ScrollReveal().reveal("#element4", { delay: 500 });
ScrollReveal().reveal("#element5", { delay: 200 });
ScrollReveal().reveal("#wave1", { delay: 100 });
ScrollReveal().reveal("#wave2", { delay: 100 });
ScrollReveal().reveal(".gallery__item", { delay: 200 });

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

if (this.matchMedia("(min-width: 768px)").matches) {
  $dropdown.hover(
    function () {
      const $this = $(this);
      $this.addClass(showClass);
      $this.find($dropdownToggle).attr("aria-expanded", "true");
      $this.find($dropdownMenu).addClass(showClass);
    },
    function () {
      const $this = $(this);
      $this.removeClass(showClass);
      $this.find($dropdownToggle).attr("aria-expanded", "false");
      $this.find($dropdownMenu).removeClass(showClass);
    }
  );
} else {
  $dropdown.off("mouseenter mouseleave");
}

/* LA VELA */

$("#laVela").click(function () {
  if (!comprobar_visibles('#caracola-card')
    && !comprobar_visibles('#plazaBolivar-card')
    && !comprobar_visibles('#bellaVista-card')
    && !comprobar_visibles('#concorde-card')
    && !comprobar_visibles('#faro-card')
    && !comprobar_visibles('#marites-card')) {
    $("#laVela-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#laVela-card").hide();
    console.log('No mostrando');
  }
}
);

$("#laVela-close").click(function () {
  $("#laVela-card").fadeOut(500);
});

/* CARACOLA */

$("#caracola").click(function () {
  if (!comprobar_visibles('#laVela-card')
    && !comprobar_visibles('#plazaBolivar-card')
    && !comprobar_visibles('#bellaVista-card')
    && !comprobar_visibles('#concorde-card')
    && !comprobar_visibles('#faro-card')
    && !comprobar_visibles('#marites-card')) {
    $("#caracola-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#caracola-card").hide();
    console.log('No mostrando');
  }
}
);

$("#caracola-close").click(function () {
  $("#caracola-card").fadeOut(500);
});

/* PLAZA BOLIVAR */

$("#plazaBolivar").click(function () {
  if (!comprobar_visibles('#caracola-card')
    && !comprobar_visibles('#laVela-card')
    && !comprobar_visibles('#bellaVista-card')
    && !comprobar_visibles('#concorde-card')
    && !comprobar_visibles('#faro-card')
    && !comprobar_visibles('#marites-card')) {
    $("#plazaBolivar-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#plazaBolivar-card").hide();
    console.log('No mostrando');
  }
}
);

$("#plazaBolivar-close").click(function () {
  $("#plazaBolivar-card").fadeOut(500);
});

/* PLAYA BELLA VISTA */

$("#bellaVista").click(function () {
  if (!comprobar_visibles('#caracola-card')
    && !comprobar_visibles('#plazaBolivar-card')
    && !comprobar_visibles('#laVela-card')
    && !comprobar_visibles('#concorde-card')
    && !comprobar_visibles('#faro-card')
    && !comprobar_visibles('#marites-card')) {
    $("#bellaVista-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#bellaVista-card").hide();
    console.log('No mostrando');
  }
}
);

$("#bellaVista-close").click(function () {
  $("#bellaVista-card").fadeOut(500);
});

/* PLAYA CONCORDE */

$("#concorde").click(function () {
  if (!comprobar_visibles('#caracola-card')
    && !comprobar_visibles('#plazaBolivar-card')
    && !comprobar_visibles('#laVela-card')
    && !comprobar_visibles('#bellaVista-card')
    && !comprobar_visibles('#faro-card')
    && !comprobar_visibles('#marites-card')) {
    $("#concorde-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#concorde-card").hide();
    console.log('No mostrando');
  }
}
);

$("#concorde-close").click(function () {
  $("#concorde-card").fadeOut(500);
});

/* EL FARO */

$("#faro").click(function () {
  if (!comprobar_visibles('#caracola-card')
    && !comprobar_visibles('#plazaBolivar-card')
    && !comprobar_visibles('#laVela-card')
    && !comprobar_visibles('#bellaVista-card')
    && !comprobar_visibles('#concorde-card')
    && !comprobar_visibles('#marites-card')) {
    $("#faro-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#faro-card").hide();
    console.log('No mostrando');
  }
}
);

$("#faro-close").click(function () {
  $("#faro-card").fadeOut(500);
});

/* LAS MARITES */

$("#marites").click(function () {
  if (!comprobar_visibles('#caracola-card')
    && !comprobar_visibles('#plazaBolivar-card')
    && !comprobar_visibles('#laVela-card')
    && !comprobar_visibles('#bellaVista-card')
    && !comprobar_visibles('#concorde-card')
    && !comprobar_visibles('#faro-card')) {
    $("#marites-card").fadeToggle(500);
    console.log('Mostrando');
  } else {
    $("#marites-card").hide();
    console.log('No mostrando');
  }
}
);

$("#marites-close").click(function () {
  $("#marites-card").fadeOut(500);
});

$(".hover-card").hover(
  function () {
    idSetTimeout = setTimeout(function (element) {
      if (element.is(":hover")) {
        $(".blur").fadeOut();
        $(".titulo-card").fadeOut();
        $(".texto-card").fadeOut();
      }
    }, 100, $(this));
  }, function () {
    clearTimeout(idSetTimeout);
    $(".blur").fadeIn();
    $(".titulo-card").fadeIn();
    $(".texto-card").fadeIn();
  }
);

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    Carousel: {
      fill: false,
      center: true,
    },
  },
});

Fancybox.bind("[data-fancybox-plyr]", {
  on: {
    reveal: (fancybox, slide) => {
      if (typeof Plyr === undefined) {
        return;
      }

      let $el;

      if (slide.type === "html5video") {
        $el = slide.$content.querySelector("video");
      } else if (slide.type === "video") {
        $el = document.createElement("div");
        $el.classList.add("plyr__video-embed");

        $el.appendChild(slide.$iframe);

        slide.$content.appendChild($el);
      }

      if ($el) {
        slide.player = new Plyr($el);
      }
    },
    "Carousel.unselectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.pause();
      }
    },
    "Carousel.selectSlide": (fancybox, carousel, slide) => {
      if (slide.player) {
        slide.player.play();
      }
    },
  },
});

/* FUNCIONES */

function comprobar_visibles(elemento) {
  if ($(elemento).is(':visible')) {
    return true;
  }
  else {
    return false;
  }
}

window.addEventListener('load', () => setTimeout(function () {
  document.getElementById('loader').classList.toggle('loader2');
}, 1000));

