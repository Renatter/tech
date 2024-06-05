<template>
  <div class="container">
    <div class="bg-white mt-[30px] p-[30px] rounded-[20px] min-h-[400px]">
      <h1 class="text-[30px] font-bold">Корзина</h1>
      <div v-if="order === false">
        <div class="flex gap-[25px]">
          <div
            v-for="i in items"
            class="w-[220px] rounded-[10px] border-[1px] p-[10px] border-[orange] relative h-[350px]"
          >
            <img :src="i.img" alt="" />
            <p class="font-bold text-[orange] text-center">{{ i.title }}</p>
            <div class="absolute bottom-0">
              <button
                class="text-white bg-[orange] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100%]"
              >
                {{ i.price }} тг
              </button>
              <button
                @click="deleteItem(i)"
                class="text-white bg-[red] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100%]"
              >
                Жою
              </button>
            </div>
          </div>
        </div>
        Барлыгы: {{ totalSum }} тг

        <button
          type="button"
          @click="showModal = true"
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Тапсырыс беру
        </button>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white p-8 rounded-lg w-[400px]">
        <h2 class="text-xl font-bold mb-4">Тапсырыс беру</h2>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Аты</label
          >
          <input
            type="text"
            v-model="name"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Аты"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Номер</label
          >
          <input
            v-model="phone"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Номер"
            required
          />
        </div>

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Коментария</label
        >
        <textarea
          v-model="comment"
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Коментария..."
        ></textarea>

        <div class="flex justify-between mt-[15px]">
          <button
            @click="showModal = false"
            class="text-white bg-[red] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100%]"
          >
            Жабу
          </button>
          <button
            @click="save"
            class="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100%]"
          >
            Тапсырыс беру
          </button>
        </div>
      </div>
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
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      items: null,
      currentUser: null,
      totalSum: 0,
      showModal: false,
      name: "",
      phone: "",
      comment: "",
    };
  },
  methods: {
    async save() {
      const docRef = doc(db, "box", `${this.currentUser.uid}`);
      await updateDoc(docRef, {
        name: this.name,
        phone: this.phone,
        comment: this.comment,
        order: true,
      });
      this.showModal = false;
    },
    async deleteItem(item) {
      try {
        const cartDocRef = doc(db, "box", this.currentUser.uid);

        // Get the current cart data
        const cartDoc = await getDoc(cartDocRef);
        const currentCart = cartDoc.exists() ? cartDoc.data().cart : [];

        // Find the index of the item to be deleted in the current cart
        const index = currentCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

        if (index !== -1) {
          // Remove the item from the current cart array
          currentCart.splice(index, 1);

          // Update the cart document with the modified cart array
          await updateDoc(cartDocRef, { cart: currentCart });
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
      this.updateTotalSum();
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        const docRef = doc(db, "box", this.currentUser.uid);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            this.items = docSnap.data().cart;
            this.order = docSnap.data().order;
            // Расчет общей суммы
            this.totalSum = this.items.reduce((sum, item) => {
              return sum + item.price;
            }, 0);
          } else {
            console.log("No such document!");
          }
        });

        this.unsubscribe = unsubscribe;
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
