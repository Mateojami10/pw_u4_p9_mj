import axios from 'axios';

const URL = '/auth/token?user=admin&password=admin123';

let tokenGuardado = null;
let expiracion = null;

const obtenerToken = async () => {
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

export async function obtenerTokenFacade() {
    const ahora = Date.now() / 1000;
    
    if (tokenGuardado && expiracion && expiracion > ahora) {
        console.log('Reutilizando token');
        return { accessToken: tokenGuardado, expiresAt: expiracion };
    } else {
        const datos = await obtenerToken();
        tokenGuardado = datos.accessToken;
        expiracion = datos.expiresAt;
        return datos;
    }
}
