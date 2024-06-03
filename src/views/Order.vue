<template>
  <div class="container mx-auto px-4">
    <div class="bg-white mt-8 p-5 rounded-lg shadow">
      <div class="flex flex-wrap -mx-2">
        <div
          v-for="(order, index) in orders"
          :key="index"
          class="w-full md:w-1/2 lg:w-1/3 p-2"
        >
          <div
            class="bg-white rounded-lg overflow-hidden border-[1px] hover:border-[orange]"
          >
            <div class="p-4">
              <h2 class="text-lg font-semibold mb-2">Аты: {{ order.name }}</h2>
              <p class="text-lg font-semibold mb-2">
                Телефон: {{ order.phone }}
              </p>
              <div v-for="(item, idx) in order.cart" :key="idx" class="mb-4">
                <div class="flex items-center mb-2">
                  <img
                    :src="item.img"
                    class="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 class="text-md font-medium">{{ item.title }}</h3>
                    <p class="text-sm text-gray-600">{{ item.tip }}</p>
                    <img :src="item.company" width="150px" alt="" />
                    <p class="text-sm text-gray-600">{{ item.price }} ₸</p>
                  </div>
                </div>
              </div>
              <p class="text-gray-700 mt-2">Комментарий: {{ order.comment }}</p>
              <button
                type="button"
                @click="deleteItem(order.name)"
                class="focus:outline-none w-[100%] mt-[25px] text-white bg-[orange] hover:bg-[orange] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Жiберу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  onSnapshot,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { storage, db, auth } from "../firebase/firebase";

export default {
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async deleteItem(itemName) {
      const querySnapshot = await getDocs(
        query(collection(db, "box"), where("name", "==", itemName))
      );

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    },
  },
  async created() {
    const q = query(collection(db, "box"), where("order", "==", true));
    onSnapshot(q, (querySnapshot) => {
      this.orders = [];
      querySnapshot.forEach((doc) => {
        this.orders.push(doc.data());
      });
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
