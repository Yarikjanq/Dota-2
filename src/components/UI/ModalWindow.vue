<template>
  <div class="">
    <div class="simple-modal" v-if="heroes" @click.stop="closeModal">
      <div class="simple-modal-backdrop">
        <div class="simple-modal-container">
          <div
            class="simple-modal-content"
            :class="{
              'shadow-[0_0_10px_2px_green]': heroes.primary_attr == 'agi',
              'shadow-[0_0_10px_2px_red]': heroes.primary_attr == 'str',
              'shadow-[0_0_10px_2px_blue]': heroes.primary_attr == 'int',
            }"
            @click.stop
          >
            <div>
              <div class="flex justify-between mx-[20px]">
                <div class="mx-auto w-full">
                  <img
                    class="w-[40%] mx-auto room"
                    :src="'https://api.opendota.com' + heroes.img"
                  />
                </div>
              </div>
            </div>
            <div class="mt-[20px]">
              <div class="flex justify-between mx-[20px]">
                <div><strong>Attacke range:</strong></div>
                <div>
                  {{ heroes.attack_range }}
                </div>
              </div>
            </div>
            <div
              class="border-t-[3px]"
              :class="{
                'border-green-600': heroes.primary_attr == 'agi',
                'border-red-600': heroes.primary_attr == 'str',
                'border-blue-700': heroes.primary_attr == 'int',
              }"
            ></div>
            <div class="mt-[20px]">
              <div class="flex justify-between mx-[20px]">
                <div><strong>Base_armor:</strong></div>
                <div>
                  {{ heroes.base_armor }}
                </div>
              </div>
            </div>
            <div
              class="border-t-[3px]"
              :class="{
                'border-green-600': heroes.primary_attr == 'agi',
                'border-red-600': heroes.primary_attr == 'str',
                'border-blue-700': heroes.primary_attr == 'int',
              }"
            ></div>
            <div class="mt-[20px]">
              <div class="flex justify-between mx-[20px]">
                <div><strong> Attack type:</strong></div>
                <div>
                  {{ heroes.attack_type }}
                </div>
              </div>
            </div>

            <div
              class="border-t-[3px]"
              :class="{
                'border-green-600': heroes.primary_attr == 'agi',
                'border-red-600': heroes.primary_attr == 'str',
                'border-blue-700': heroes.primary_attr == 'int',
              }"
            ></div>
            <div class="mt-[20px]">
              <div class="flex justify-between mx-[20px]">
                <div class="flex items-center"><strong>Roles:</strong></div>
                <div class="flex flex-col items-end">
                  <div v-for="role in heroes.roles" :key="role">
                    {{ role }}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="border-t-[3px]"
              :class="{
                'border-green-600': heroes.primary_attr == 'agi',
                'border-red-600': heroes.primary_attr == 'str',
                'border-blue-700': heroes.primary_attr == 'int',
              }"
            ></div>
            <div class="mt-[20px]">
              <div class="flex justify-between mx-[20px]">
                <div><strong> Legs:</strong></div>
                <div>
                  {{ heroes.legs }}
                </div>
              </div>
            </div>
            <div
              class="border-t-[3px]"
              :class="{
                'border-green-600': heroes.primary_attr == 'agi',
                'border-red-600': heroes.primary_attr == 'str',
                'border-blue-700': heroes.primary_attr == 'int',
              }"
            ></div>
            <div class="mt-[20px]">
              <div class="flex justify-between mx-[20px]">
                <div><strong> Move speed:</strong></div>
                <div>
                  {{ heroes.move_speed }}
                </div>
              </div>
            </div>
            <div
              class="border-t-[3px]"
              :class="{
                'border-green-600': heroes.primary_attr == 'agi',
                'border-red-600': heroes.primary_attr == 'str',
                'border-blue-700': heroes.primary_attr == 'int',
              }"
            ></div>
            <footer class="simple-modal-footer">
              <button
                :class="{
                  'hover:bg-green-700': heroes.primary_attr == 'agi',
                  'hover:bg-red-600': heroes.primary_attr == 'str',
                  'hover:bg-blue-700': heroes.primary_attr == 'int',
                }"
                class="border-[2px] mx-auto px-[30px] py-[5px] bg-zinc-500 rounded-md text-lime-50"
                type="button"
                @click.stop="closeModal"
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import type { IHero } from "../../types/herointerface";
defineProps<{
  heroes?: IHero;
}>();
const emits = defineEmits(["update:heroes"]);
const closeModal = () => {
  emits("update:heroes", false);
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
  background-color: silver;
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
.room {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
