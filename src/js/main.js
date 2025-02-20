
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
        // 1. Hapus hidden, tapi tetap set opacity dan translate posisi awal
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("opacity-0", "-translate-y-10");

        // 2. Tambahkan delay untuk memulai animasi
        setTimeout(() => {
            mobileMenu.classList.remove("opacity-0", "-translate-y-10");
            mobileMenu.classList.add("opacity-100", "translate-y-0");
        }, 10); // Waktu minimum agar transisi terpicu
    } else {
        // Animasi keluar
        mobileMenu.classList.remove("opacity-100", "translate-y-0");
        mobileMenu.classList.add("opacity-0", "-translate-y-10");

        // Setelah animasi selesai, tambahkan hidden
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 300); // Waktu sesuai dengan `duration-300`
    }
});

particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#670087" },
      shape: {
        type: "triangle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.352750653390415,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 12,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);