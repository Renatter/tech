<template>
  <div class="container">
    <div class="bg-white mt-[30px] p-[30px] rounded-[20px]">
      <h1 class="text-[orange] font-bold text-[30px]">{{ item.title }}</h1>
      <img :src="item.img" alt="" class="rounded-[20px]" width="850px" />
      <p class="text-[22px] mt-[20px]">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  getDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      id: this.$route.params.id,
      item: {},
    };
  },
  async created() {
    const q = query(collection(db, "news"), where("title", "==", this.id));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.item = doc.data();
        console.log(this.item);
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
