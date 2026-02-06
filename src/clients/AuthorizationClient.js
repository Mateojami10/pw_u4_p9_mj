import axios from 'axios';

let tokenGuardado = null;
let expiracion = null;
let credencialesGuardadas = null;

const obtenerToken = async (user, password) => {
    const URL = `/auth/token?user=${user}&password=${password}`;
    const respuesta = await axios.get(URL).then((response) => {
        if (response.data) {
            console.log('Token obtenido exitosamente');
            return response.data;
        } else {
            console.error('No se pudo obtener el token');
            return null;
        }
    });
    return respuesta;
}

export async function obtenerTokenFacade(user = null, password = null) {
    const ahora = Date.now() / 1000;
    
    //Si se proporcionan credenciales, guardarlas
    if(user && password) {
        credencialesGuardadas = { user, password };
    }
    
    //Si no hay credenciales, usar las guardadas
    if(!user && !password && credencialesGuardadas) {
        user = credencialesGuardadas.user;
        password = credencialesGuardadas.password;
    }
    
    if(!user || !password) {
        console.error('No hay credenciales disponibles');
        return null;
    }
    
    if (tokenGuardado && expiracion && expiracion > ahora) {
        console.log('Reutilizando token');
        return { accessToken: tokenGuardado, expiresAt: expiracion };
    } else {
        const datos = await obtenerToken(user, password);
        if(datos && datos.accessToken) {
            tokenGuardado = datos.accessToken;
            expiracion = datos.expiresAt;
            return datos;
        }
        return null;
    }
}
