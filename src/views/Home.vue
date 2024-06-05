<template>
  <div class="text-[30px] container">
    <h1 class="text-[30px] font-serif pt-[30px]">Популярное</h1>
    <div>
      <router-link to="/card" class="flex justify-between flex-wrap gap-[10px]">
        <Card v-for="i in items" :items="i"></Card>
      </router-link>
    </div>
    <h1 class="text-[30px] font-serif pt-[30px]">Бренды</h1>
    <div class="flex gap-[15px] pt-[20px] pb-[15px] justify-between flex-wrap">
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[27px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_xiaomi_5038_638307390629040118_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_lg_5039_638460946520671360_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_samsung_4987_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_philips_5051_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_apple_4988_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_philips_5051_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_oppo_6215_638350323686824209_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_tefal_6216_638350325861016638_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_motorola_6214_638350324955209645_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_vivo_5053_638265027499323338_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_acer_5057_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
      <div class="w-[200px] bg-white rounded-[15px]">
        <img
          class="bg-white p-[20px] ml-[20px]"
          width="155px"
          src="https://object.pscloud.io/cms/cms/Banners/banner_braun_5052_ru-Ru_desktop.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  components: {
    Card,
  },
  data() {
    return {
      items: [],
      news: [],
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "techniques"));
    querySnapshot.forEach((doc) => {
      this.items.push(doc.data());
    });
    const news = await getDocs(collection(db, "news"));
    news.forEach((doc) => {
      this.news.push(doc.data());
    });
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
}
</style>
