<template>
  <div class="container">
    <div class="bg-white mt-[50px] p-[30px] rounded-[15px]">
      <h1 class="text-[55px] font-bold text-[orange]">Теледидар</h1>
      <h1 class="text-[25px] font-bold">Кандай компания</h1>
      <div
        class="flex gap-[15px] pt-[20px] pb-[15px] justify-between flex-wrap"
      >
        <div
          v-for="(company, index) in companies"
          :key="index"
          class="w-[200px] bg-white rounded-[15px] border-[1px]"
          @click="changeBorderColor(index)"
          :class="{ 'border-red': company.borderRed }"
        >
          <img
            :src="company.imgUrl"
            class="bg-white p-[20px] ml-[20px] mt-[20px]"
            width="155px"
            :alt="company.altText"
          />
        </div>
      </div>
      <p class="font-bold text-[25px]">
        Компания: <span class="text-[orange]">{{ company }}</span>
      </p>
      <div class="pt-[25px]">
        <label
          for="first_name"
          class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px]"
          >Атауы</label
        >
        <input
          v-model="technic.name"
          type="text"
          id="first_name"
          class="bg-gray-50 w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Атауы"
          required
        />
      </div>
      <p class="font-bold text-[25px] pt-[25px]">
        Түсі:
        <input
          v-model="technic.info.color"
          type="color"
          id="head"
          name="head"
          value="#e66465"
        />
      </p>

      <label
        for="number-input "
        class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px] pt-[25px]"
        >Экран диагоналы(см):</label
      >
      <input
        v-model="technic.info.resolution"
        type="text"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 w-[300px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="0"
        required
      />
      <div class="pt-[25px]">
        <label
          for="first_name"
          class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px]"
          >Ел</label
        >
        <input
          v-model="technic.info.country"
          type="text"
          id="first_name"
          class="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Китай"
          required
        />
      </div>
      <label
        for="number-input "
        class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px] pt-[25px]"
        >Экран ажыратымдылығы</label
      >
      <input
        v-model="technic.info.diagonal"
        type="text"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="4K"
        required
      />
      <label
        for="number-input "
        class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px] pt-[25px]"
        >Салмақ</label
      >
      <input
        v-model="technic.info.weight"
        type="text"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="40кг"
        required
      />
      <label
        for="number-input "
        class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px] pt-[25px]"
        >Бага</label
      >
      <input
        v-model="technic.price"
        type="number"
        id="number-input"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="0"
        required
      />
      <label
        for="number-input "
        class="block mb-2 text-sm text-gray-900 dark:text-white font-bold text-[25px] pt-[25px]"
        >Сурет</label
      >
      <input
        @change="onFileChange"
        class="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
      <button v-if="file" class="btn pt-[25px]" @click="uploadImage()">
        <span
          class="text-white bg-[#FFA500] hover:bg-[#FFA500] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >Сурет косу</span
        >
      </button>

      <button
        @click="save"
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-[30px]"
      >
        Косу
      </button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
  data() {
    return {
      companies: [
        {
          imgUrl:
            "https://images.philips.com/is/image/PhilipsConsumer/Philips_Wordmark-ALI-global?wid=700&$jpglarge$&fit=crop",
          altText: "Philips",
          borderRed: false,
        },
        {
          imgUrl:
            "https://object.pscloud.io/cms/cms/Banners/banner_lg_5039_638460946520671360_ru-Ru_desktop.webp",
          altText: "LG",
          borderRed: false,
        },
        {
          imgUrl:
            "https://object.pscloud.io/cms/cms/Banners/banner_samsung_4987_ru-Ru_desktop.webp",
          altText: "SAMSUNG",
          borderRed: false,
        },
        {
          imgUrl:
            "https://1000logos.net/wp-content/uploads/2021/05/Sony-logo.png",
          altText: "SONY",
          borderRed: false,
        },
        {
          imgUrl:
            "https://logos-world.net/wp-content/uploads/2023/03/Panasonic-Logo.png",
          altText: "Panasonic",
          borderRed: false,
        },
      ],
      company: "",
      file: null,
      technic: {
        tip: "Теледидар",
        name: "",
        price: 0,
        companyImg: "",
        img: "",
        company: "",
        info: {
          diagonal: "",
          resolution: "",
          weight: "",
          color: "",
          country: "",
        },
      },
      imageUrls: [],
    };
  },
  methods: {
    changeBorderColor(index) {
      this.companies.forEach((company, i) => {
        if (i === index) {
          company.borderRed = !company.borderRed;

          this.technic.companyImg = company.imgUrl;
          this.technic.company = company.altText;
          this.company = company.altText;
          console.log(company.imgUrl); // Выводим URL изображения
        } else {
          company.borderRed = false;
        }
      });
    },
    async uploadImage() {
      const storageRef = ref(
        storage,
        `techniques/${this.technic.name}/${this.file.name}`
      );
      await uploadBytes(storageRef, this.file);
      const downloadUrl = await getDownloadURL(storageRef);

      this.imageUrls.push(downloadUrl);

      this.technic.img = this.imageUrls[0];
      this.file = null;
    },
    onFileChange(e) {
      this.file = e.target.files[0];
    },
    async save() {
      const docRef = await addDoc(collection(db, "techniques"), this.technic);
      alert("Оним косылды");
      this.$router.push("/admin");
    },
  },
};
</script>

<style scoped>
.border-red {
  border-color: red;
}
</style>
