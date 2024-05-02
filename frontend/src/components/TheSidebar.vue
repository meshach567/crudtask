<template>
  <div>
    <div :class="['sidebar', isSidebarActive ? '' : 'sidebar-hidden']">
      <div class="sidebar-content">
        <div class="sidebar-header">
          <p>Design System</p>
          <button :class="[btn btn-sm btn-link" @click="sidebarToggle()">
            <i class="material-icons-outlined">close</i>
          </button>
        </div>
        <div class="sidebar-body">
          <ul>
            <li class="sidebar-item">
              <router-link to="/buttons" class="sidebar-link">
                <i class="material-icons-outlined">&#xf1c1;</i>
                Buttons
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/cards" class="sidebar-link">
                <i class="material-icons-outlined">&#xe8e9;</i>
                Cards
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/navbars" class="sidebar-link disabled" :disabled="isDisabled">
                <i class="material-icons-outlined">&#xe5d2;</i>
                Navbars
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/" class="sidebar-link">
                <i class="material-icons-outlined">&#xf114;</i>
                Sidebar
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/text-fields" class="sidebar-link">
                <i class="material-icons-outlined">&#xe745;</i>
                Text Fields
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link to="/typography" class="sidebar-link">
                <i class="material-icons-outlined">&#xe245;</i>
                Typography
              </router-link>
            </li>

            <li class="sidebar-item">
              <router-link to="/gsap" class="sidebar-link">
                <i class="material-icons-outlined">&#xe71c;</i>
                GSAP
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar-footer">
          <a href="https://blog.colorffy.com" target="_blank" rel="noopener">
            By: blog.colorffy.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  props: {
    isSidebarActive: {
      type: Boolean,
      default: null,
    },
    sidebarToggle: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      isDisabled: true,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
