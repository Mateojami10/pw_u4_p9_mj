<template>
    <div class="borrar">
        <h2>Borrar Estudiante</h2>
        <p class="advertencia">⚠️ Esta acción no se puede deshacer</p>
        
        <div class="form">
            <div class="form-group">
                <label>ID del Estudiante:</label>
                <input v-model="id" type="number" placeholder="Ingrese el ID del estudiante" />
            </div>
            
            <div class="botones">
                <button @click="borrarEstudiante" class="btn-borrar">Borrar</button>
                <button @click="limpiar" class="btn-cancelar">Cancelar</button>
            </div>
        </div>
        
        <p v-if="mensaje" class="mensaje" :class="{'success': !esError, 'error': esError}">{{ mensaje }}</p>
    </div>
</template>

<script>
import { borrarFachada } from '@/clients/MatriculaClient.js';

export default {
    name: 'BorrarComponent',
    data() {
        return {
            id: '',
            mensaje: '',
            esError: false
        }
    },
    methods: {
        async borrarEstudiante() {
            if (!this.id) {
                this.mensaje = 'Por favor ingrese un ID';
                this.esError = true;
                return;
            }
            
            if (!confirm(`Está seguro que desea borrar el estudiante con ID ${this.id}?`)) {
                return;
            }
            
            try {
                await borrarFachada(this.id);
                this.mensaje = `Estudiante con ID ${this.id} borrado exitosamente`;
                this.esError = false;
                this.id = '';
            } catch (error) {
                console.error('Error al borrar estudiante:', error);
                this.mensaje = 'Error al borrar estudiante. Verifique que el ID exista.';
                this.esError = true;
            }
        },
        limpiar() {
            this.id = '';
            this.mensaje = '';
        }
    }
}
</script>
