<template>
  <v-app>
    <v-app-bar fixed color="primary" dense> 
      <v-toolbar-title class="white--text">MultiSig Wallet</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app clipped width="25vw">
      <br>
      <v-list>
        <v-toolbar class="mt-4" fixed>
          <span class="body-1 grey--text">Wallets</span>
          <v-spacer/>
          <v-btn icon @click="showCreateContract = true">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list-item class="mb-3" v-for="(contract, index) in contracts" :key="index" @click="selectContract(contract)">
          <v-list-item-action>
            <v-icon v-on="on" v-bind="attrs">mdi-file-document-multiple-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <span>{{contract}}</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-scroll-x-transition>
        <router-view/>
      </v-scroll-x-transition>
    </v-main>
    <v-dialog v-model="showCreateContract" width="600">
      <v-card>
        <v-card-title>
          <span class="body-1">Create MultiSig Wallet</span>
          <v-spacer/>
          <v-btn icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-form ref="createContractForm" @submit.prevent="createContract">
            <v-text-field model="owner1" label="Owner 1" outlined prepend-inner-icon="mdi-account-outline"/>
            <v-text-field model="owner2" label="Owner 2" outlined prepend-inner-icon="mdi-account-outline"/>
            <v-text-field model="owner3" label="Owner 3" outlined prepend-inner-icon="mdi-account-outline"/>
            <v-text-field type="number" model="minimumVotes" label="Number Of Minimum Votes" outlined prepend-inner-icon="mdi-comment-processing-outline"/>
            <v-btn class="primary" type="submit">
              <v-icon color="white">mdi-arrow-right</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script src="./Home.ts"></script>

<style>

</style>