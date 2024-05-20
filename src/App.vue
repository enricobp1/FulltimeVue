<script setup>
</script>

<template>
  <footer class="sticky-top text-light">
    <div>
      EN PT
    </div>
  </footer>
  <ul class="nav shadow p-3 mb-5 bg-white rounded justify-content-center">
    <li class="nav-img ">
      <img class="logo" src="\src\assets\Logo.png" alt="..." height="130px">
    </li>
    <li class="nav-item">
      <router-link style="font-size: 20px" class="nav-link text-dark" to="/despacho">Despacho</router-link>
    </li>
    <li class="nav-item">
      <router-link style="font-size: 20px;" class="nav-link text-dark" to="/">Gerenciamento de entregas</router-link>
    </li>
    <li class="nav-item">
      <router-link style="font-size: 20px;" class="nav-link text-dark" to="/registro" >Registro de indentificação</router-link>
    </li>
  </ul>

  <div class="main">
    <router-view></router-view>
  </div>

  
</template>

<style>

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #ED1C26;
}

.map {
  border-radius: 10%;
  border-style: groove;
  border-color: black;
  margin-top: 5%;
}

.nav {
  padding: 10px;
}

.nav-img {
  margin-right: auto;
}

.nav-item {
  margin-top: 3%;
  margin-right: auto;
  text-decoration: none; 
}


.logo {
  margin-top: 5px;
}

.title {
  
  height: 50px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  margin: auto;
}

h1 {
  text-align: center;
  padding-top: 7%;
}

@media screen and (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }
  
  .nav-item {
    margin-top: 10px;
  }

  
  .nav-img {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>