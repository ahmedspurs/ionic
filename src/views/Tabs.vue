<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
        <ion-icon :icon="home"/>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="cartOutline" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="personOutline" />
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="chatbubblesOutline" />
            <ion-badge class="text-xs mx-1" color="success">44</ion-badge>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle,cartOutline,home,chatbubblesOutline,personOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: {  IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
      chatbubblesOutline,
      cartOutline,
      personOutline,
      home
    }
  }
}
</script>