<template>
    <div class="consultar-todos">
        <h2>Consultar Todos los Estudiantes</h2>
        <button @click="consultarTodos" class="consultar-todos">Consultar</button>
        
        <div v-if="estudiantes.length > 0" class="tabla-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha Nacimiento</th>
                        <th>Provincia</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                        <td>{{ estudiante.id }}</td>
                        <td>{{ estudiante.nombre }}</td>
                        <td>{{ estudiante.apellido }}</td>
                        <td>{{ estudiante.fechaNacimiento }}</td>
                        <td>{{ estudiante.provincia }}</td>
                        <td>{{ estudiante.genero }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p v-else-if="mensaje" class="mensaje">{{ mensaje }}</p>
    </div>
</template>

<script>
import { consultarTodosFachada } from '@/clients/MatriculaClient.js';

export default {
    name: 'ConsultarTodosComponent',
    data() {
        return {
            estudiantes: [],
            mensaje: ''
        }
    },
    methods: {
        async consultarTodos() {
            try {
                this.estudiantes = await consultarTodosFachada();
                if (this.estudiantes.length === 0) {
                    this.mensaje = 'No hay estudiantes registrados';
                } else {
                    this.mensaje = '';
                }
            } catch (error) {
                console.error('Error al consultar estudiantes:', error);
                this.mensaje = 'Error al consultar estudiantes';
            }
        }
    }
}
</script>
