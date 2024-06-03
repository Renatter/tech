<template>
  <div class="container">
    <div class="bg-white mt-[30px] p-[30px] rounded-[20px]">
      <h1 class="text-[orange] font-bold text-[30px]">Жаналыктар</h1>

      <div class="flex flex-wrap gap-[60px]">
        <router-link v-for="i in news" :to="{ path: '/news/' + i.title }">
          <div class="border-[1px] p-[15px] rounded-[20px] border-[orange]">
            <img
              :src="i.img"
              width="300px"
              height=""
              class="rounded-[20px] h-[200px]"
              alt=""
            />
            <p class="text-[orange] font-bold">{{ i.title }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  data() {
    return {
      news: [],
    };
  },
  async created() {
    const news = await getDocs(collection(db, "news"));
    news.forEach((doc) => {
      this.news.push(doc.data());
    });
  },
};
</script>

<style lang="scss" scoped></style>
