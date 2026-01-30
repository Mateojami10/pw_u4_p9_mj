<template>
    <div class="consultarPorId-component">
        <h1>Consultar Por ID</h1>
        <button>Consultar por ID</button>
    </div>
  
</template>

<script>
import { consultarTodosFachada } from '@/clients/MatriculaClient.js';
export default {
    name: 'AboutComponent',
    methods: {
        async consultar() {
            const estudiantes = await consultarTodosFachada();
            console.log(estudiantes);
        }
    }
}
</script>

<style>

</style>