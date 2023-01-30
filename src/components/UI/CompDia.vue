<template>
  <div class="">
    <div class="simple-modal" v-if="heroes"  @click.stop="closeModal">
      <div class="simple-modal-backdrop">
        <div class="simple-modal-container">
          <div class="simple-modal-content" @click.stop>
            <div>
            <div class="flex justify-between mx-[20px]">
             
             
              <div class="mx-auto">
                <img class="w-[40%] mx-auto" :src="'https://api.opendota.com' + heroes.img" >              
              </div>
            </div>
</div>
            <div>
            <div class="flex justify-between mx-[20px]">
              <div>Attacke range:</div>
              <div>
                {{ heroes.localized_name }}               
              </div>

            </div>
</div>
<div class="border-t-[3px] border-indigo-500"></div>
            <div>
            <div class="flex justify-between mx-[20px]">
             
              <div>base_armor:</div>
              <div>
                {{ heroes.base_armor}}               
              </div>
            </div>
</div>
<div class="border-t-[3px] border-indigo-500"></div>

            <footer class="simple-modal-footer">
              <button class="border-[2px] mx-auto w-[20%] bg-zinc-500" type="button" @click.stop="closeModal">Close</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name:'CompDia',
    props:{
        heroes:{
            type:Array,
            required:true
            
        }
    },
  methods: {
    closeModal() {
      this.$emit('update:heroes', false);
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
  justify-content: end;
  height: 80px;
  text-align: center;
}
</style>
