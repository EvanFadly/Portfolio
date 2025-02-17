
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
