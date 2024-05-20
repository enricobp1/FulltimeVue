<template>
  <div>
    <div class="text-center">
      <img class="title shadow-lg" src="/src/assets/title-img.png" alt="">
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md">
          <div class="column">
            <p class="text-inside">Veículo</p>
          </div>
        </div>
        <div class="col-md">
          <div class="column">
            <p class="text-inside">Autonomia</p>
          </div>
        </div>
 
        <div class="col-md">
          <div class="column">
            <p class="text-inside">Capacidade</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column-item col-md d-flex align-items-center">
          <div class="veiculo">
            <img class="veiculo-img" src="/src/assets/Veiculo.png" alt="">
            <h3>CARRO</h3>
          </div>
        </div>
        
        
        <div class="column-item col-md">
          <p class="text-content">100Km</p>
        </div>
        <div class="column-item col-md">
          <p class="text-content">80kg</p>
        </div>
      </div>

      <div class="row">
        <div class="column-item col-md bg-secondary d-flex align-items-center">
          <div class="veiculo">
            <img class="veiculo-img" src="/src/assets/Veiculo.png" alt="">
            <h3>CARRO</h3>
          </div>
        </div>
        
        <div class="column-item col-md bg-secondary">
          <p class="text-content">140Km</p>
        </div>
        <div class="column-item col-md bg-secondary">
          <p class="text-content">40Kg</p>
        </div>
      </div>
      <div class="row">
        <div class="column-item col-md d-flex align-items-center">
          <div class="veiculo">
            <img class="veiculo-img" src="/src/assets/Veiculo.png" alt="">
            <h3>CARRO</h3>
          </div>
        </div>
        <div class="column-item col-md">
          <p class="text-content">134Km</p>
        </div>
        <div class="column-item col-md">
          <p class="text-content">30Kg</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.column-item {
  margin-top: 30%;
  padding-top: 30px;
  background-color: rgb(177, 174, 174);
}

.veiculo-img {
  border-radius: 20px;
  padding-left: 5px;
  height: 80px;
  margin-right: 20px;
}

.container {
  background-color: #ED1C26;
  margin-top: 7%;
  border-radius: 15px;
}

.title {
  height: 50px;
}

.column {
  background-color: #ED1C26;
  padding: 10px;
}

.text-inside {
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 2%;
  color: white;
}

.text-content {
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-bottom: 2%;
  color: white;
  margin-top: 10%;
}

.veiculo {
  margin-left: 37%;
}

@media (max-width: 768px) {
  .veiculo {
    margin-left: 20%;
  }
}
</style>