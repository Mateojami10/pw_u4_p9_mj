<template>
    <div>
        <ActualizarParcialComponent />
    </div>
</template>

<script>
import ActualizarParcialComponent from '@/components/ActualizarParcialComponent.vue';

export default {
    name: 'ActualizarParcialView',
    components: {
        ActualizarParcialComponent
    }
}
</script>

<style>
.actualizar-parcial {
    padding: 20px;
}

.descripcion {
    color: #666;
    margin-bottom: 20px;
    font-style: italic;
}

.form {
    max-width: 500px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin: 0 auto;
}

.id-group,
.nombre-group,
.apellido-group,
.fecha-nacimiento-group,
.provincia-group,
.genero-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

label input[type="checkbox"] {
    margin-right: 8px;
    width: auto;
}

input[type="text"],
input[type="number"],
input[type="datetime-local"],
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

input:disabled,
select:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
}

.btn-actualizar, .btn-limpiar {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
    margin-top: 10px;
}

.btn-actualizar {
    background: #42b983;
    color: white;
}

.btn-actualizar:hover {
    background: #35a372;
}

.btn-limpiar {
    background: #6c757d;
    color: white;
}

.btn-limpiar:hover {
    background: #5a6268;
}

.mensaje {
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
}

.mensaje.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.mensaje.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
</style>
