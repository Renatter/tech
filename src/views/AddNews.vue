<template>
  <div class="container">
    <div class="centered-content">
      <div class="bg-white p-[30px] rounded-[20px] mt-[30px]">
        <h1 class="font-bold text-[30px] mb-[20px]">Жаналыктар</h1>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Такырып</label
          >
          <input
            v-model="newNews.title"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[450px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Такырып"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Сурет</label
          >
          <input
            v-model="newNews.img"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[450px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Сурет"
            required
          />
        </div>

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Мәтін</label
        >
        <textarea
          v-model="newNews.text"
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Мәтін..."
        ></textarea>
        <button
          @click="addNews"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%] mt-[20px]"
        >
          Жариялау
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
export default {
  data() {
    return {
      newNews: {
        title: "",
        img: "",
        text: "",
      },
    };
  },
  methods: {
    async addNews() {
      // Добавление новости в Firestore
      try {
        const docRef = await addDoc(collection(db, "news"), this.newNews);
        console.log("Новость успешно добавлена:", docRef.id);
        this.newNews = {
          name: "",
          image: "",
          date: "",
          text: "",
        };
        this.showAdd = false;
      } catch (error) {
        console.error("Ошибка при добавлении новости:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Задает высоту контейнера для центрирования по вертикали */
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
