<template>
    <div>
        <ConsultarTodosComponent />
    </div>
</template>

<script>
import ConsultarTodosComponent from '@/components/ConsultarTodosComponent.vue';

export default {
    name: 'ConsultarTodosView',
    components: {
        ConsultarTodosComponent
    }
}
</script>

<style>
.consultar-todos {
    padding: 20px;
}

.btn-consultar {
    background: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
}

.btn-consultar:hover {
    background: #35a372;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border: 1px solid #333;
}

th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #333;
}

th {
    background-color: #42b983;
    color: white;
}

.mensaje {
    margin-top: 20px;
    padding: 10px;
    background: #f0f0f0;
    border-radius: 4px;
}
</style>
