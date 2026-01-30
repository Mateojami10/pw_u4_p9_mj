<template>
    <div class="consultar-por-id">
        <h2>Consultar Estudiante por ID</h2>
        
        <div class="id-group">
            <label>ID del Estudiante:</label>
            <input v-model="id" type="number" placeholder="Ingrese el ID" />
            <button @click="consultarPorId" class="btn-primary">Buscar</button>
        </div>
        
        <div v-if="estudiante" class="estudiante-info">
            <h3>Información del Estudiante</h3>
            <p><strong>ID:</strong> {{ estudiante.id }}</p>
            <p><strong>Nombre:</strong> {{ estudiante.nombre }}</p>
            <p><strong>Apellido:</strong> {{ estudiante.apellido }}</p>
            <p><strong>Fecha de Nacimiento:</strong> {{ estudiante.fechaNacimiento }}</p>
            <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p>
            <p><strong>Género:</strong> {{ estudiante.genero }}</p>
        </div>
        
        <p v-if="mensaje" class="mensaje" :class="{'error': esError}">{{ mensaje }}</p>
    </div>
</template>

<script>
import { consultarPorIdFachada } from '@/clients/MatriculaClient.js';

export default {
    name: 'ConsultarPorIdComponent',
    data() {
        return {
            id: '',
            estudiante: null,
            mensaje: '',
            esError: false
        }
    },
    methods: {
        async consultarPorId() {
            if (!this.id) {
                this.mensaje = 'Por favor ingrese un ID';
                this.esError = true;
                return;
            }
            
            try {
                this.estudiante = await consultarPorIdFachada(this.id);
                this.mensaje = '';
                this.esError = false;
            } catch (error) {
                console.error('Error al consultar estudiante:', error);
                this.estudiante = null;
                this.mensaje = 'Estudiante no encontrado';
                this.esError = true;
            }
        }
    }
}
</script>