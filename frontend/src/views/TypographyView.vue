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
import DefaultLayout from "../layouts/DefaultLayout.vue";

export default {
  name: "TypographyView",
  components: {DefaultLayout},
  data() {
    return {
      isSidebarActive: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive
    }
  }
}
</script>
