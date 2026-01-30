<template>
    <div>
        <BorrarComponent />
    </div>
</template>

<script>
import BorrarComponent from '@/components/BorrarComponent.vue';

export default {
    name: 'BorrarView',
    components: {
        BorrarComponent
    }
}
</script>

<style>
.borrar {
    padding: 20px;
}

.advertencia {
    color: #d32f2f;
    background: #ffebee;
    padding: 10px;
    border-radius: 4px;
    border-left: 4px solid #d32f2f;
    margin-bottom: 20px;
}

.form {
    max-width: 500px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

.botones {
    display: flex;
    gap: 10px;
    margin-top: 15px;
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
