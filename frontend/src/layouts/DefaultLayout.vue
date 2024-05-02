<template>
  <div>
    <TheSidebar :is-sidebar-active="sidebarProp" :is-sidebarUnactiv="closebarProp"/>
    <TheNavbar/>
    <slot/>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import TheSidebar from "../components/TheSidebar.vue";

export default {
  props: {
    sidebarProp: {
      type: Boolean,
      default: null
    },
    toggleProps: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      isSidebarActive: this.sidebarProp,
      isSidebarUnactive: this.toggleProps
    }
  },
  components: {TheNavbar, TheSidebar},
  // methods: {
  //   toggleSidebar() {
  //     this.isSidebarActive = !this.isSidebarActive
  //   }
  // }
}
</script>
