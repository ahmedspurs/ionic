<template>
  <ion-page >
    <ion-header>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="search">
          <ion-searchbar show-cancel-button="focus"></ion-searchbar>
      </div>
      <div class="slides mt-6">
        <div class="flex justify-between w-full p-6">
          <span>Phones</span>
          <span>View All</span>
        </div>
        <ion-slides>
          <ion-slide>
            <div class="card block">
              <ion-card>
                <ion-card-header>
                  <img src="../../public/assets/1.jpg" class="w-full" alt="">
                </ion-card-header>

                <ion-card-content>
                  <h2 class="text-4xl text-black font-weight-bolder">Iphone 6</h2>
                  <h2 class="pb-2">12300$</h2>
                  <ion-button expand="block">
                    BUY
                  </ion-button>
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
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonSearchbar
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonSearchbar
  }
};
</script>