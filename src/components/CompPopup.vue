<template>
  <div class="wrapper-popup" :class="{openPopup: isActiveClass}">
    <div class="popup">
      <h3 class="title-popup">Luật chơi</h3>
      <p
        class="nd-popup"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consectetur ut obcaecati repellat quod iure earum saepe, voluptate iusto cum nisi voluptatibus natus eius ea recusandae molestias quibusdam sint dolores.</p>
      <button v-on:click="confirm" class="btn-popup">Đã Hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    isActiveClass: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    confirm() {
      this.$emit("handleConfirm");
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.wrapper-popup {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
}
.popup {
  background-color: #fff;
  width: 50%;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 20px;
}
.btn-popup {
  padding: 10px;
  background-color: #333;
  color: white;
  border: 1px solid;
  cursor: pointer;
  margin-top: 20px;
}
.openPopup {
  pointer-events: auto;
  opacity: 1;
}
</style>