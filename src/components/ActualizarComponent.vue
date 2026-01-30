<template>
    <div class="actualizar">
        <h2>Actualizar Estudiante</h2>
        
        <form class="form">
            <div class="id-group">
                <label>ID del Estudiante:</label>
                <input v-model="id" type="number" placeholder="ID del estudiante a actualizar" required />
            </div>
            
            <div class="nombre-group">
                <label>Nombre:</label>
                <input v-model="estudiante.nombre" type="text" placeholder="Nuevo nombre" required />
            </div>
            
            <div class="apellido-group">
                <label>Apellido:</label>
                <input v-model="estudiante.apellido" type="text" placeholder="Nuevo apellido" required />
            </div>
            
            <div class="fecha-nacimiento-group">
                <label>Fecha de Nacimiento:</label>
                <input v-model="estudiante.fechaNacimiento" type="datetime-local" required />
            </div>
            
            <div class="provincia-group">
                <label>Provincia:</label>
                <input v-model="estudiante.provincia" type="text" placeholder="Nueva provincia" required />
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
            
            <button type="button" @click="actualizarEstudiante" class="btn-actualizar">Actualizar</button>
            <button type="button" @click="limpiarFormulario" class="btn-limpiar">Limpiar</button>
        </form>
        
        <p v-if="mensaje" class="mensaje" :class="{'success': !esError, 'error': esError}">{{ mensaje }}</p>
    </div>
</template>

<script>
import { actualizarFachada } from '@/clients/MatriculaClient.js';

export default {
    name: 'ActualizarComponent',
    data() {
        return {
            id: '',
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
        async actualizarEstudiante() {
            if (!this.id) {
                this.mensaje = 'Por favor ingrese un ID';
                this.esError = true;
                return;
            }
            
            try {
                await actualizarFachada(this.id, this.estudiante);
                this.mensaje = 'Estudiante actualizado exitosamente';
                this.esError = false;
                this.limpiarFormulario();
            } catch (error) {
                console.error('Error al actualizar estudiante:', error);
                this.mensaje = 'Error al actualizar estudiante. Verifique que el ID exista.';
                this.esError = true;
            }
        },
        limpiarFormulario() {
            this.id = '';
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
