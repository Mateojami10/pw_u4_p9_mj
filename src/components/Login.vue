<template>
    <div class="login">
        <h2>Login</h2>
        <input v-model="usuario" type="text" placeholder="Usuario">
        <input v-model="password" type="password" placeholder="Contraseña">
        <button @click="login">Entrar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuario: '',
            password: '',
        }
    },
    methods:{
        login(){
            if(this.usuario === '' || this.password === ''){
                alert("Debe ingresar usuario y contraseña");
                return;
            }
            // Mandar a obtener el token
            const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDMzMzMwMSwiZXhwIjoxNzcwMzM2OTAxLCJqdGkiOiI0ZWFlYzY2YS1iNjRhLTRlNzEtYTE0NC0wYzA5ZDliN2I0ZDEifQ.WtpOvFt_Av8z3_csd_QfRs_Z8uwf6MSU5zeaYGBl2qKcSsYGU97PCDzzuvI0VbFLGTpuj934TOH9EYmC4NLrOGlBocfsPwSIGB1ZxAjPtKM27HOOk4AyHaXulzUQWt-w5S3AvJYS5wY8HO_FoNjROmSdhqW1hxCSnsNsZAl1PsGCVcn7C7Vl0Mz9vdFgazQPWuFt7aVD0DV21kAwf8MR3CPG3TkbX-15OD7Lm2bEx4_o4q-sKLhq8AICZ1oMyGVoL38PIxJlr_qjd4QH333_EzQEw3-XXxQCptb_dmF_4gd-AmUZzzgcvSWhjmZOPHGAO3MqvdMZArnb4MlayjZHIA";
            if(TOKEN!==null){
                localStorage.setItem("token", TOKEN);
                localStorage.setItem("estaAutenticado", true);
            } else {
                console.log("Error de autenticación");
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

</style>