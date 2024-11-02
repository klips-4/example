<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-md-4 bg-white p-5" style="border-radius: 30px;">
        <form class="align-items-center">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Логин</label>
            <input type="email" class="form-control" placeholder="Введите логин" v-model="user">
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" placeholder="Введите пароль" class="form-control" v-model="password">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" v-model="isRememberMe">
            <label class="form-check-label" for="exampleCheck1">Запомнить меня</label>
          </div>
          <button @click="authStore.login(user, password)" class="btn btn-light btn-custom">Вход</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

import {useAuthStore} from "@/stores/authStore.js";

const authStore = useAuthStore()

const user = ref('');
const password = ref('');
const isRememberMe = ref(false);



</script>

<style lang="scss" scoped>

</style>