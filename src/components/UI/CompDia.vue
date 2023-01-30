<template>
  <div class="">
    <div class="simple-modal">
      <div class="simple-modal-backdrop" @click="closeModal">
        <div class="simple-modal-container">
          <div class="simple-modal-content" @click.stop>
            <div class="border-t-[3px] border-indigo-500"></div>
            <div class="flex justify-between mx-[20px]">
              <div>Attacke range:</div>
              <div>
                {{ hero.attack_range }}
                {{ hero.id }}
                {{ hero.localized_name }}
              </div>
            </div>

            <footer class="simple-modal-footer">
              <button type="button" @click="closeModal">Close</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.simple-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
  z-index: 9999;
}

.simple-modal-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: auto;
  margin: 16px;
}

.simple-modal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: 1.75rem auto;
  padding: 20px 30px;
  border-radius: 5px;
  color: #000;
  background-color: #fff;
  transform: translate(0, 0);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.simple-modal-header {
  padding-bottom: 16px;
  font-size: 25px;
  text-align: center;
}

.simple-modal-footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
  text-align: center;
}
</style>
