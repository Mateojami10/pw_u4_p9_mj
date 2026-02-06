<template>
    <div class="login">
        <h2>Login</h2>
        <p v-if="mensaje" :class="tipoMensaje">{{ mensaje }}</p>
        <input v-model="usuario" type="text" placeholder="Usuario">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="login">Entrar</button>
    </div>
</template>

<script>
import { obtenerTokenFacade } from '@/clients/AuthorizationClient';

export default {
    data() {
        return {
            usuario: '',
            password: '',
            mensaje: '',
            tipoMensaje: ''
        }
    },
    methods:{
        async login(){
            if(this.usuario === '' || this.password === ''){
                this.mensaje = "Debe ingresar usuario y contraseña";
                this.tipoMensaje = "error";
                return;
            }
            
            this.mensaje = "";
            
            try {
                const token = await obtenerTokenFacade(this.usuario, this.password);
                
                if(token && token.accessToken){
                    localStorage.setItem("token", token.accessToken);
                    localStorage.setItem("estaAutenticado", true);
                    this.mensaje = "Accedido correctamente";
                    this.tipoMensaje = "exito";
                    
                    setTimeout(() => {
                        this.$router.push({ name: 'home' });
                    }, 1000);
                } else {
                    this.mensaje = "Error al ingresar";
                    this.tipoMensaje = "error";
                }
            } catch (error) {
                console.error("Error al autenticar:", error);
                this.mensaje = "Error al ingresar";
                this.tipoMensaje = "error";
            }
        }
    }

}
</script>

<style>
.login {
    width: 300px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid rgb(18, 180, 50);
    border-radius: 8px;
    text-align: center;
}
input {
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
}
button {
    width: 100%;
    padding: 10px;
    background-color: rgb(18, 180, 50);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.exito {
    color: rgb(18, 180, 50);
    font-weight: bold;
    margin-bottom: 10px;
}

.error {
    color: rgb(220, 38, 38);
    font-weight: bold;
    margin-bottom: 10px;
}

</style>