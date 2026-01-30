<template>
    <div class="guardar">
        <h2>Guardar Nuevo Estudiante</h2>
        
        <form class="form">
            <div class="nombre-group">
                <label>Nombre:</label>
                <input v-model="estudiante.nombre" type="text" placeholder="Ingrese el nombre" required />
            </div>
            
            <div class="apellido-group">
                <label>Apellido:</label>
                <input v-model="estudiante.apellido" type="text" placeholder="Ingrese el apellido" required />
            </div>
            
            <div class="fecha-nacimiento-group">
                <label>Fecha de Nacimiento:</label>
                <input v-model="estudiante.fechaNacimiento" type="datetime-local" required />
            </div>
            
            <div class="provincia-group">
                <label>Provincia:</label>
                <input v-model="estudiante.provincia" type="text" placeholder="Ingrese la provincia" required />
            </div>
            
            <div class="genero-group">
                <label>Género:</label>
                <select v-model="estudiante.genero" required>
                    <option value="">Seleccione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            
            <button type="button" @click="guardarEstudiante" class="btn-guardar">Guardar</button>
            <button type="button" @click="limpiarFormulario" class="btn-limpiar">Limpiar</button>
        </form>
        
        <p v-if="mensaje" class="mensaje" :class="{'success': !esError, 'error': esError}">{{ mensaje }}</p>
    </div>
</template>

<script>
import { guardarFachada } from '@/clients/MatriculaClient.js';

export default {
    name: 'GuardarComponent',
    data() {
        return {
            estudiante: {
                nombre: '',
                apellido: '',
                fechaNacimiento: '',
                provincia: '',
                genero: ''
            },
            mensaje: '',
            esError: false
        }
    },
    methods: {
        async guardarEstudiante() {
            try {
                const resultado = await guardarFachada(this.estudiante);
                this.mensaje = `Estudiante guardado exitosamente con ID: ${resultado.id || 'N/A'}`;
                this.esError = false;
                this.limpiarFormulario();
            } catch (error) {
                console.error('Error al guardar estudiante:', error);
                this.mensaje = 'Error al guardar estudiante';
                this.esError = true;
            }
        },
        limpiarFormulario() {
            this.estudiante = {
                nombre: '',
                apellido: '',
                fechaNacimiento: '',
                provincia: '',
                genero: ''
            };
        }
    }
}
</script>
