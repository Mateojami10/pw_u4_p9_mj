<template>
    <div class="about-component">
        <h1>About Component</h1>
        <button @click="consultar">Consultar Todos</button>
        <button>Consultar por ID</button>
        <button>Guardar</button>
        <button>Actualizar</button>
        <button>Actualizar Parcial</button>
        <button>Borrar</button>
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