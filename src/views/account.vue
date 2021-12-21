<template>
  <ion-page>
    <ion-header></ion-header>
    <ion-content>
      <div class="login p-4">
        <h2 class="text-center py-6 text-4xl font-weight-bolder">Login</h2>
        <ion-item>
          <ion-label position="stacked">username</ion-label>
          <ion-input type="text" placeholder="@example"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <ion-input type="password" placeholder="Must be at laest 8 character"></ion-input>
        </ion-item>
        <ion-button class="mt-4" expand="block" v-on:click="onClick()">LOGIN</ion-button>
        <div class="hava p-4">
          <h2>
            Don't have account ?
            <a class="text-blue-600" tab="tab4" href="/tabs/register">register</a>
          </h2>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonButton
} from "@ionic/vue";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonItem,
    IonInput,
    IonLabel,
    IonButton
  }
};
</script>