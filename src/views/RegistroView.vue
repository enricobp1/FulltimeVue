<script setup>

</script>



<template>
    <div class="text-center ">
        <img class="title shadow-lg " src="/src/assets/titile-img2.png" alt="">
    </div>
  <div class="container-register mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card card-border shadow-lg">
        <div class="card-body shadow-lg">
          <form>
            <div class="form-group text-center">
              <label for="nomeEntregador" class="d-block">Nome do Entregador</label>
              <input type="text" class="form-control input-border" id="nomeEntregador" placeholder="Insira o nome do entregador">
            </div>
            <div class="form-group text-center">
              <label for="destino" class="d-block">Destino</label>
              <input type="text" class="form-control input-border" id="destino" placeholder="Insira o destino">
            </div>
            <div class="form-group text-center">
              <label for="idEntrega" class="d-block">ID de Entrega</label>
              <input type="text" class="form-control input-border" id="idEntrega" placeholder="Insira o ID de entrega">
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-red ">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</template>



<style>
.btn-red {
      background-color: #ED1C26 !important;
      color: white !important;
      margin-top: 20px; 
    }

 .card-border {
      border: 1px solid red !important;
      border-radius: 10px; 
    }
    .input-border {
      border: 1px solid red !important; 
      border-radius: 5px; 
    }
</style>