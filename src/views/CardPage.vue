<template>
  <div>
    <div class="container">
      <div class="bg-white mt-[50px] p-[35px] rounded-[15px] mb-[20px]">
        <h1 class="text-[30px] font-bold text-[orange]">
          {{ item.name }}
        </h1>
        <div class="flex items-start">
          <img :src="item.img" width="500px" srcset="" />
          <div>
            <div class="w-[200px] bg-white rounded-[15px]">
              <img width="205px" :src="item.companyImg" alt="" />
            </div>
            <div class="specifications-container">
              <h2 class="text-[35px] text-[orange]">Негізгі сипаттамалары</h2>
              <div v-if="item.tip === 'Телефон'" class="specifications">
                <div class="specification-item">
                  <span class="label">Түсі</span>
                  <span class="value">
                    <div
                      :style="{ 'background-color': item.info.color }"
                      class="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                    ></div
                  ></span>
                </div>
                <div class="specification-item">
                  <span class="label">Батарея сыйымдылығы</span>
                  <span class="value">{{ item.info.battery }} мА*ч</span>
                </div>
                <div class="specification-item">
                  <span class="label">Қосқыштар</span>
                  <span class="value">{{ item.info.link }}</span>
                </div>
                <div class="specification-item">
                  <span class="label">Жад көлемі:</span>
                  <span class="value">{{ item.info.memory }} гб</span>
                </div>
                <div class="specification-item">
                  <span class="label">Ел</span>
                  <span class="value">{{ item.info.country }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Компания</span>
                  <span class="value">{{ item.company }} </span>
                </div>
              </div>
              <div v-if="item.tip === 'Тоңазытқыш'" class="specifications">
                <div class="specification-item">
                  <span class="label">Түсі</span>
                  <span class="value">
                    <div
                      :style="{ 'background-color': item.info.color }"
                      class="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                    ></div
                  ></span>
                </div>
                <div class="specification-item">
                  <span class="label">Есіктер саны</span>
                  <span class="value">{{ item.info.countDoor }} шт</span>
                </div>
                <div class="specification-item">
                  <span class="label">Биіктігі</span>
                  <span class="value">{{ item.info.height }} м</span>
                </div>
                <div class="specification-item">
                  <span class="label">Ел</span>
                  <span class="value">{{ item.info.country }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Компания</span>
                  <span class="value">{{ item.company }} </span>
                </div>
              </div>

              <div v-if="item.tip === 'Теледидар'" class="specifications">
                <div class="specification-item">
                  <span class="label">Түсі</span>
                  <span class="value">
                    <div
                      :style="{ 'background-color': item.info.color }"
                      class="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                    ></div
                  ></span>
                </div>
                <div class="specification-item">
                  <span class="label">Экран диагоналы(см):</span>
                  <span class="value">{{ item.info.resolution }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Экран ажыратымдылығы</span>
                  <span class="value">{{ item.info.diagonal }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Салмақ</span>
                  <span class="value">{{ item.info.weight }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Ел</span>
                  <span class="value">{{ item.info.country }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Компания</span>
                  <span class="value">{{ item.company }} </span>
                </div>
              </div>

              <div v-if="item.tip === 'Ноутбук'" class="specifications">
                <div class="specification-item">
                  <span class="label">Түсі</span>
                  <span class="value">
                    <div
                      :style="{ 'background-color': item.info.color }"
                      class="w-[20px] h-[20px] rounded-full flex items-center justify-center"
                    ></div
                  ></span>
                </div>
                <div class="specification-item">
                  <span class="label">ЖЖҚ көлемі:</span>
                  <span class="value">{{ item.info.ssd }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">SSD көлемі:</span>
                  <span class="value">{{ item.info.ram }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Операциялық жүйе</span>
                  <span class="value">{{ item.info.os }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Графикалық карта</span>
                  <span class="value">{{ item.info.video }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Ел</span>
                  <span class="value">{{ item.info.country }} </span>
                </div>
                <div class="specification-item">
                  <span class="label">Компания</span>
                  <span class="value">{{ item.company }} </span>
                </div>
              </div>
            </div>
            <h1 class="text-[35px] font-bold text-[#FC6B3F] ml-[15px]">
              {{ item.price }} ₸
            </h1>
            <button
              @click="addToCart"
              type="button"
              class="text-white w-[100%] ml-[30px] bg-[#FC6B58] hover:bg-[#FC6B58] focus:ring-4 font-bold text-[20px] rounded-[20px] text-sm px-5 py-2.5 me-2 mb-2 h-[60px]"
            >
              Сатып алу
            </button>
          </div>
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
  arrayUnion,
  updateDoc,
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      id: this.$route.params.id,
      item: {},
      currentUser: null,
    };
  },
  methods: {
    async addToCart() {
      if (this.currentUser) {
        const docRef = doc(db, "box", `${this.currentUser}`);

        const itemCard = {
          title: this.item.name,
          tip: this.item.tip,
          img: this.item.img,
          price: this.item.price,
          company: this.item.companyImg,
        };

        try {
          const docSnap = await getDoc(docRef);
          let updatedCart = [];

          if (docSnap.exists()) {
            const existingCart = docSnap.data().cart || [];
            const itemExists = existingCart.some(
              (item) => item.title === itemCard.title
            );

            if (itemExists) {
              // Item already exists, show a message or handle it as needed
              alert("Ондай өнім себетте бар");
              return;
            }

            updatedCart = [...existingCart, itemCard];
          } else {
            updatedCart = [itemCard];
          }

          const updatedCartData = {
            order: false,
            cart: updatedCart,
          };
          this.$router.push("/");
          await setDoc(docRef, updatedCartData);
        } catch (error) {
          console.error("Ошибка при добавлении товара в корзину:", error);
        }
      }
    },
  },
  async created() {
    const q = query(collection(db, "techniques"), where("name", "==", this.id));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.item = doc.data();
        console.log(this.item);
      });
    });
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user.uid;
        const userDocRef = doc(db, "users", this.currentUser);

        onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.userProfile = doc.data();
          } else {
            console.log("Документ не существует!");
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.specifications-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.specifications {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 20px;
}

.specification-item {
  display: contents;
}

.label {
  font-size: 30px;
  grid-column: 1;
  font-weight: bold;
}

.value {
  font-size: 30px;
  grid-column: 2;
}
</style>
