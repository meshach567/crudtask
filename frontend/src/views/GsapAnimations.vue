<template>
  <div>
    <DefaultLayout :sidebar-prop="isSidebarActive">
 <button class="btn-fab btn-primary-filled"
              @click="toggleSidebar()">
        <i class="material-icons-outlined me-1">
          {{ isSidebarActive ? 'close' : 'menu_open' }}
        </i>
        {{ isSidebarActive ? 'Close sidebar' : 'Open sidebar' }}
      </button>
     
    </DefaultLayout>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  name: "GsapAnimations",
  components: {DefaultLayout},
  data() {
    return {
      isSidebarActive: true,
    };
  },
  mounted() {
    this.sectionsAnimate();
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
    sectionsAnimate() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".img-keyboard", {
        scrollTrigger: {
          trigger: ".img-keyboard",
          toggleActions: "resume pause resume none",
          start: "center bottom",
        },
        width: "90%",
        borderRadius: "100px 0 100px 0",
        duration: 2,
      });
      gsap.to(".img-pc", {
        scrollTrigger: {
          trigger: ".img-pc",
          toggleActions: "resume pause resume none",
          start: "center center",
        },
        width: "90%",
        borderRadius: "100px 0 100px 0",
        duration: 2,
      });
      gsap.to(".is-separated", {
        scrollTrigger: {
          trigger: ".is-separated",
          toggleActions: "resume pause resume none",
          start: "center center",
        },
        ease: 'ease-in-out',
        letterSpacing: "-0.05em",
        duration: 1,
      });
      gsap.to(".section-hero", {
        scrollTrigger: {
          trigger: ".section-hero",
          toggleActions: "restart pause resume none",
        },
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 3,
      });
      gsap.to(".card", {
        scrollTrigger: {
          trigger: ".card",
          toggleActions: "restart pause resume none",
        },
        transform: "translateY(-80px)",
        borderRadius: "25px",
        duration: 1,
      });
    },
  },
};
</script>
