<template>
    <div>
        <GuardarComponent />
    </div>
</template>

<script>
import GuardarComponent from '@/components/GuardarComponent.vue';

export default {
    name: 'GuardarView',
    components: {
        GuardarComponent
    }
}
</script>

<style>
.guardar {
    padding: 20px;
}

.form {
    max-width: 500px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin: 0 auto;
}

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

input,
select {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

.btn-guardar, .btn-limpiar {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 10px;
    margin-top: 10px;
}

.btn-guardar {
    background: #42b983;
    color: white;
}

.btn-guardar:hover {
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
