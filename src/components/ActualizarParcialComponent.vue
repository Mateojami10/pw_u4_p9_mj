<template>
    <div class="actualizar-parcial">
        <h2>Actualizar Parcial (PATCH)</h2>
        <p class="descripcion">Actualiza solo los campos que desees modificar</p>
        
        <form class="form">
            <div class="id-group">
                <label>ID del Estudiante:</label>
                <input v-model="id" type="number" placeholder="ID del estudiante" required />
            </div>
            
            <div class="nombre-group">
                <label>
                    <input type="checkbox" v-model="actualizarNombre" />
                    Actualizar Nombre:
                </label>
                <input v-model="estudiante.nombre" type="text" placeholder="Nuevo nombre" :disabled="!actualizarNombre" />
            </div>
            
            <div class="apellido-group">
                <label>
                    <input type="checkbox" v-model="actualizarApellido" />
                    Actualizar Apellido:
                </label>
                <input v-model="estudiante.apellido" type="text" placeholder="Nuevo apellido" :disabled="!actualizarApellido" />
            </div>
            
            <div class="fecha-nacimiento-group">
                <label>
                    <input type="checkbox" v-model="actualizarFechaNacimiento" />
                    Actualizar Fecha de Nacimiento:
                </label>
                <input v-model="estudiante.fechaNacimiento" type="datetime-local" :disabled="!actualizarFechaNacimiento" />
            </div>
            
            <div class="provincia-group">
                <label>
                    <input type="checkbox" v-model="actualizarProvincia" />
                    Actualizar Provincia:
                </label>
                <input v-model="estudiante.provincia" type="text" placeholder="Nueva provincia" :disabled="!actualizarProvincia" />
            </div>
            
            <div class="genero-group">
                <label>
                    <input type="checkbox" v-model="actualizarGenero" />
                    Actualizar Género:
                </label>
                <select v-model="estudiante.genero" :disabled="!actualizarGenero">
                    <option value="">Seleccione...</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            
            <button type="button" @click="actualizarParcial" class="btn-actualizar">Actualizar</button>
            <button type="button" @click="limpiarFormulario" class="btn-limpiar">Limpiar</button>
        </form>
        
        <p v-if="mensaje" class="mensaje" :class="{'success': !esError, 'error': esError}">{{ mensaje }}</p>
    </div>
</template>

<script>
import { actualizarParcialFachada } from '@/clients/MatriculaClient.js';

export default {
    name: 'ActualizarParcialComponent',
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
            actualizarNombre: false,
            actualizarApellido: false,
            actualizarFechaNacimiento: false,
            actualizarProvincia: false,
            actualizarGenero: false,
            mensaje: '',
            esError: false
        }
    },
    methods: {
        async actualizarParcial() {
            if (!this.id) {
                this.mensaje = 'Por favor ingrese un ID';
                this.esError = true;
                return;
            }
            
            if (!this.actualizarNombre && !this.actualizarApellido && !this.actualizarFechaNacimiento && !this.actualizarProvincia && !this.actualizarGenero) {
                this.mensaje = 'Seleccione al menos un campo para actualizar';
                this.esError = true;
                return;
            }
            
            const body = {};
            if (this.actualizarNombre) body.nombre = this.estudiante.nombre;
            if (this.actualizarApellido) body.apellido = this.estudiante.apellido;
            if (this.actualizarFechaNacimiento) body.fechaNacimiento = this.estudiante.fechaNacimiento;
            if (this.actualizarProvincia) body.provincia = this.estudiante.provincia;
            if (this.actualizarGenero) body.genero = this.estudiante.genero;
            
            try {
                await actualizarParcialFachada(this.id, body);
                this.mensaje = 'Estudiante actualizado parcialmente exitosamente';
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
            this.actualizarNombre = false;
            this.actualizarApellido = false;
            this.actualizarFechaNacimiento = false;
            this.actualizarProvincia = false;
            this.actualizarGenero = false;
        }
    }
}
</script>
