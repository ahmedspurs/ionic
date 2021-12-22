<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>cart</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Cart</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="card">
        <div class="flex items-center justify-between p-4">
          <h2>3 Products</h2>
          <ion-icon :icon="ellipsisVerticalOutline"></ion-icon>
        </div>
        <!-- 3 -->
        <ion-card>
          <ion-card-content>
            <div class="flex justify-around">
              <img src="../../public/assets/3.jpg" class="w-32">
              <div class="text px-4">
                <ion-text color="primary">
                  <h1>Iphone 6</h1>
                </ion-text>
                <ion-text color="scondary">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.</p>
                </ion-text>
              </div>
            </div>
            <div class="quantaty p-4 flex items-center justify-around">
              <ion-icon :icon="addOutline" class="text-2xl"></ion-icon>

              <ion-input type="number" class="text-center" value="3"></ion-input>
              <ion-icon :icon="removeOutline" class="text-2xl"></ion-icon>
            </div>
            <div class="del-price space-x-8 flex items-center justify-between">
              <ion-text color="danger">
                <ion-icon class="text-2xl" :icon="trashOutline"></ion-icon>
              </ion-text>
              <ion-text color="primary">
                <h1>400$</h1>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>

        <!-- 2 -->
        <ion-card>
          <ion-card-content>
            <div class="flex justify-around">
              <img src="../../public/assets/1.jpg" class="w-32">
              <div class="text px-4">
                <ion-text color="primary">
                  <h1>Iphone 6</h1>
                </ion-text>
                <ion-text color="scondary">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.</p>
                </ion-text>
              </div>
            </div>
            <div class="quantaty p-4 flex items-center justify-around">
              <ion-icon :icon="addOutline" class="text-2xl"></ion-icon>

              <ion-input type="number" class="text-center" value="3"></ion-input>
              <ion-icon :icon="removeOutline" class="text-2xl"></ion-icon>
            </div>
            <div class="del-price space-x-8 flex items-center justify-between">
              <ion-text color="danger">
                <ion-icon class="text-2xl" :icon="trashOutline"></ion-icon>
              </ion-text>
              <ion-text color="primary">
                <h1>400$</h1>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>

        <!-- 3 -->

        <ion-card>
          <ion-card-content>
            <div class="flex justify-around">
              <img src="../../public/assets/4.jpg" class="w-32">
              <div class="text px-4">
                <ion-text color="primary">
                  <h1>Iphone 6</h1>
                </ion-text>
                <ion-text color="scondary">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fugiat.</p>
                </ion-text>
              </div>
            </div>
            <div class="quantaty p-4 flex items-center justify-around">
              <ion-icon :icon="addOutline" class="text-2xl"></ion-icon>

              <ion-input type="number" class="text-center" value="3"></ion-input>
              <ion-icon :icon="removeOutline" class="text-2xl"></ion-icon>
            </div>
            <div class="del-price space-x-8 flex items-center justify-between">
              <ion-text color="danger">
                <ion-icon class="text-2xl" :icon="trashOutline"></ion-icon>
              </ion-text>
              <ion-text color="primary">
                <h1>400$</h1>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="total">
        <ion-card>
          <ion-card-content>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <b>Summary products</b>
              </ion-text>
              <ion-text color="dark">
                <b>3 products</b>
              </ion-text>
            </div>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <span>Sub price</span>
              </ion-text>
              <ion-text color="dark">
                <span>3500$</span>
              </ion-text>
            </div>
            <div class="products flex justify-between">
              <ion-text color="dark">
                <span>Total price</span>
              </ion-text>
              <ion-text color="dark">
                <span>4500$</span>
              </ion-text>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="checkout p-4">
        <ion-button color="success" expand="full" v-on:click="onClick()">Check Out</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/vue";
import {
  ellipsisVerticalOutline,
  removeOutline,
  addOutline,
  trashOutline
} from "ionicons/icons";

export default {
  name: "Tab2",
  setup() {
    return {
      ellipsisVerticalOutline,
      removeOutline,
      addOutline,
      trashOutline
    };
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>