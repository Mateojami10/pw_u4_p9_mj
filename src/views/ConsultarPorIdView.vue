<template>
    <div>
        <ConsultarPorIdComponent />
    </div>
</template>

<script>
import ConsultarPorIdComponent from '@/components/ConsultarPorIdComponent.vue';

export default {
    name: 'ConsultarPorIdView',
    components: {
        ConsultarPorIdComponent
    }
}
</script>

<style>
.consultar-por-id {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.id-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
}

.btn-primary {
    background: #42b983;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
}

.btn-primary:hover {
    background: #35a372;
}

.estudiante-info {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #42b983;
}

.estudiante-info h3 {
    margin-top: 0;
    color: #2c3e50;
}

.estudiante-info p {
    margin: 10px 0;
}

.mensaje {
    margin-top: 20px;
    padding: 10px;
    background: #e3f2fd;
    border-radius: 4px;
}

.mensaje.error {
    background: #ffebee;
    color: #c62828;
}
</style>
