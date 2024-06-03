<template>
  <router-link :to="{ path: '/cardPage/' + items.name }">
    <div
      class="w-[250px] bg-white p-[20px] rounded-[10px] h-[350px] border-[1px] relative"
    >
      <img class="ml-[25px]" :src="items.img" alt="" width="150px" />
      <p class="text-[18px] text-[#ff7b27]">{{ items.name }}</p>
      <p class="text-[18px]">{{ items.price }} тг</p>
      <div class="absolute bottom-[8px]">
        <button
          type="button"
          class="text-white bg-[#FF7B27] hover:bg-[#FF7B27] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100%]"
        >
          Сатып алу
        </button>
        <p class="text-[#64c064] text-[15px]">біз 2 сағатқа тегін жеткіземіз</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style lang="scss" scoped></style>
