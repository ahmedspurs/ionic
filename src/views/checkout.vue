<template>
  <ion-page>
    <ion-header></ion-header>
    <ion-content>
      <div class="checkout py-4">
        <h2 class="text-center py-6 text-4xl font-weight-bolder">Checkout</h2>
        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-label position="stacked">Full Name</ion-label>
              <ion-input type="text" placeholder="full name"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Phone number</ion-label>
              <ion-input type="email" placeholder="249xxxxxxxx"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Full Address</ion-label>
              <ion-textarea></ion-textarea>
            </ion-item>
          </ion-card-content>
        </ion-card>
      </div>
      <div class="cupon py-2">
        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-label>Cupon</ion-label>
              <ion-input type="text" placeholder="Enter cupon"></ion-input>
            </ion-item>
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
      <div class="ceckout-b p-4">
          <ion-button expand="full" color="success" href="/tabs/order" v-on:click="onClick()">
              Checkout
          </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from "@ionic/vue";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonContent,
    IonPage
  }
};
</script>