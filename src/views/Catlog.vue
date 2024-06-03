<template>
  <div class="container">
    <div class="bg-white mt-[30px] p-[30px] rounded-[20px]">
      <div class="flex justify-between">
        <div>
          <h1
            class="text-[20px] font-bold cursor-pointer"
            @click="toggleTvVisibility"
          >
            Теледидар
          </h1>
          <div v-if="tvVisible">
            <div
              class="flex items-center mb-4"
              v-for="img in tv.imgs"
              :key="img.altText"
            >
              <input
                :id="img.altText"
                type="checkbox"
                :value="img.altText"
                @change="filterByCategory(img.altText)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                :for="img.altText"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <img :src="img.imgUrl" :alt="img.altText" class="w-[50px]" />
              </label>
            </div>
          </div>
          <h1
            class="text-[20px] font-bold cursor-pointer"
            @click="togglePhoneVisibility"
          >
            Телефон
          </h1>

          <div v-if="phoneVisible">
            <div
              class="flex items-center mb-4"
              v-for="img in phone.imgs"
              :key="img.altText"
            >
              <input
                :id="img.altText"
                type="checkbox"
                :value="img.altText"
                @change="filterByPhone(img.altText)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                :for="img.altText"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <img :src="img.imgUrl" :alt="img.altText" class="w-[50px]" />
              </label>
            </div>
          </div>

          <h1
            class="text-[20px] font-bold cursor-pointer"
            @click="toggleNoutVisibility"
          >
            Ноутбук
          </h1>

          <div v-if="noutVisible">
            <div
              class="flex items-center mb-4"
              v-for="img in nout.imgs"
              :key="img.altText"
            >
              <input
                :id="img.altText"
                type="checkbox"
                :value="img.altText"
                @change="filterByNout(img.altText)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                :for="img.altText"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <img :src="img.imgUrl" :alt="img.altText" class="w-[50px]" />
              </label>
            </div>
          </div>

          <h1
            class="text-[20px] font-bold cursor-pointer"
            @click="toggleHoldVisibility"
          >
            Тоңазытқыш
          </h1>

          <div v-if="holdVisible">
            <div
              class="flex items-center mb-4"
              v-for="img in hold.imgUrl"
              :key="img.altText"
            >
              <input
                :id="img.altText"
                type="checkbox"
                :value="img.altText"
                @change="filterByHold(img.altText)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                :for="img.altText"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <img :src="img.imgUrl" :alt="img.altText" class="w-[50px]" />
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap ml-[130px] gap-[15px]">
          <Card v-for="i in filteredItems" :key="i.name" :items="i"></Card>
        </div>
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
      filteredItems: [],
      tvVisible: true,
      noutVisible: true,
      phoneVisible: true,
      holdVisible: true,
      tv: {
        name: "Теледидар",
        imgs: [
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
      },
      phone: {
        name: "Телефон",
        imgs: [
          {
            imgUrl:
              "https://object.pscloud.io/cms/cms/Banners/banner_xiaomi_5038_638307390629040118_ru-Ru_desktop.webp",
            altText: "Xiaomi",
            borderRed: false,
          },
          {
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png",
            altText: "HUAWEI",
            borderRed: false,
          },
          {
            imgUrl:
              "https://logo.com/image-cdn/images/kts928pd/production/9fa92ac5a9498502d2707ced798d763fe7490ecc-1600x1026.png?w=3840&q=72",
            altText: "Apple",
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
        ],
      },
      nout: {
        name: "Ноутбук",
        imgs: [
          {
            imgUrl:
              "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo.png",
            altText: "Acer",
            borderRed: false,
          },
          {
            imgUrl:
              "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png",
            altText: "ASUS",
            borderRed: false,
          },
          {
            imgUrl:
              "https://logo.com/image-cdn/images/kts928pd/production/9fa92ac5a9498502d2707ced798d763fe7490ecc-1600x1026.png?w=3840&q=72",
            altText: "Apple",
            borderRed: false,
          },
          {
            imgUrl:
              "https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png",
            altText: "Lenovo",
            borderRed: false,
          },
          {
            imgUrl:
              "https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-2008-2014.png",
            altText: "HP",
            borderRed: false,
          },
        ],
      },
      hold: {
        name: "Холод",
        imgUrl: [
          {
            imgUrl:
              "https://home.liebherr.com/media/global/img/logos/logo_ci_liebherr_fl.svg",
            altText: "Liebherr",
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
            imgUrl: "https://download.logo.wine/logo/Beko/Beko-Logo.wine.png",
            altText: "Beko",
            borderRed: false,
          },
        ],
      },
    };
  },
  methods: {
    toggleTvVisibility() {
      this.tvVisible = !this.tvVisible;
    },
    toggleHoldVisibility() {
      this.holdVisible = !this.holdVisible;
    },
    togglePhoneVisibility() {
      this.phoneVisible = !this.phoneVisible;
    },
    toggleNoutVisibility() {
      this.noutVisible = !this.noutVisible;
    },
    filterByCategory(category) {
      this.filteredItems = this.items.filter(
        (item) => item.tip === "Теледидар" && item.company === category
      );
    },
    filterByPhone(category) {
      this.filteredItems = this.items.filter(
        (item) => item.tip === "Телефон" && item.company === category
      );
    },
    filterByNout(category) {
      this.filteredItems = this.items.filter(
        (item) => item.tip === "Ноутбук" && item.company === category
      );
    },
    filterByHold(category) {
      this.filteredItems = this.items.filter(
        (item) => item.tip === "Тоңазытқыш" && item.company === category
      );
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "techniques"));
    querySnapshot.forEach((doc) => {
      this.items.push(doc.data());
    });
    this.filteredItems = this.items;
  },
};
</script>

<style lang="scss" scoped></style>
