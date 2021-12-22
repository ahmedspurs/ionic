<template>
  <ion-page>
    <ion-header></ion-header>
    <ion-content :fullscreen="true">
      <div class="search w-full px-2 flex items-center justify-between">
        <ion-searchbar show-cancel-button="focus"></ion-searchbar>
        <h2 class="w-1/2 text-center">Ahmed Dev</h2>
      </div>
      <div class="slides mt-6">
        <div class="flex justify-between w-full p-6">
          <span>Phones</span>
          <span>View All</span>
        </div>
        <ion-slides>
          <ion-slide>
            <div class="card">
              <ion-card>
                <ion-card-content>
                  <div class="flex flex-col space-y-4">
                    <img src="../../public/assets/1.jpg">
                    <div class="text px-4 w-full">
                      <ion-text color="primary">
                        <h1>Iphone 6</h1>
                      </ion-text>
                      <ion-text color="scondary">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.</p>
                      </ion-text>
                    </div>
                  </div>
                    <div class="del-price py-4 space-x-8 flex items-center justify-between">
                     <ion-button expand="full" class="w-full" v-on:click="onClick()">
                       Add to Cart
                     </ion-button>
                      <ion-text color="primary">
                        <h1>400$</h1>
                      </ion-text>
                    </div>
                </ion-card-content>
              </ion-card>
            </div>
          </ion-slide>
        </ion-slides>
      </div>
      <!-- 2 -->
      <div class="slides mt-6">
        <div class="flex justify-between w-full p-6">
          <span>Phones</span>
          <span>View All</span>
        </div>
        <ion-slides>
          <ion-slide>
            <div class="card">
              <ion-card>
                <ion-card-content>
                  <div class="flex flex-col space-y-4">
                    <img src="../../public/assets/4.jpg">
                    <div class="text px-4 w-full">
                      <ion-text color="primary">
                        <h1>Iphone 6</h1>
                      </ion-text>
                      <ion-text color="scondary">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.</p>
                      </ion-text>
                    </div>
                  </div>
                    <div class="del-price py-4 space-x-8 flex items-center justify-between">
                     <ion-button expand="full" class="w-full" v-on:click="onClick()">
                       Add to Cart
                     </ion-button>
                      <ion-text color="primary">
                        <h1>400$</h1>
                      </ion-text>
                    </div>
                </ion-card-content>
              </ion-card>
            </div>
          </ion-slide>
        </ion-slides>
      </div>
      <!-- 3 -->
      <div class="slides mt-6">
        <div class="flex justify-between w-full p-6">
          <span>Phones</span>
          <span>View All</span>
        </div>
        <ion-slides>
          <ion-slide>
            <div class="card">
              <ion-card>
                <ion-card-content>
                  <div class="flex flex-col space-y-4">
                    <img src="../../public/assets/3.jpg">
                    <div class="text px-4 w-full">
                      <ion-text color="primary">
                        <h1>Iphone 6</h1>
                      </ion-text>
                      <ion-text color="scondary">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.</p>
                      </ion-text>
                    </div>
                  </div>
                    <div class="del-price py-4 space-x-8 flex items-center justify-between">
                     <ion-button expand="full" class="w-full" v-on:click="onClick()">
                       Add to Cart
                     </ion-button>
                      <ion-text color="primary">
                        <h1>400$</h1>
                      </ion-text>
                    </div>
                </ion-card-content>
              </ion-card>
            </div>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
 import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonCardContent,
  IonSearchbar
} from "@ionic/vue";
import {
  removeOutline,
  addOutline,
  trashOutline
} from "ionicons/icons";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonSearchbar
  },
  setup() {
    return {
      removeOutline,
      addOutline,
      trashOutline
    };
  }
};
</script>