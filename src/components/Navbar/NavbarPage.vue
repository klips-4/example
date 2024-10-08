<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">PotolkoFF</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mx-4 mb-2 mb-lg-1">
          <li class="nav-item">
            <router-link class="nav-link active" to="/measuring">Замеры</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/measuring">Монтажи</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/clients">Клиенты</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/calendar">Календарь</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/kanban">Канбан</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/statistics">Статистика</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Найти" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Найти</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
// import {ref} from "vue";


//   {title: "Монтажи", url: 'measuring'},
//   {title: "Клиенты", url: '/clients'},
//   {title: "Календарь", url: 'calendar'},
//   {title: "Статистика", url: 'calendar'},
//
// ])
</script>

<style>

</style>