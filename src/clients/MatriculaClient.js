import axios from "axios";
import { h } from "vue";
import { obtenerTokenFacade } from "./AuthorizationClient";

const URL = "http://localhost:8080/matricula/api/v1.0/estudiantes";

const consultarTodos = async() => {
    const token = await obtenerTokenFacade();
    const headers = { Authorization: `Bearer ${token.accessToken}` };
    const data = axios.get(`${URL}`, {headers}).then(r => r.data);
    return data;
}

const consultarPorId = async(id) => {
    const token = await obtenerTokenFacade();
    const headers = { Authorization: `Bearer ${token.accessToken}` };
    const data = axios.get(`${URL}/${id}`, {headers}).then(r => r.data);
    return data;
}

const guardar = async(body) => {

    /*const objeto= {
        nombre: "Mateo",
        apellido: "Jami
    "}*/
    const token = await obtenerTokenFacade();
    const headers = { Authorization: `Bearer ${token.accessToken}` };
    const data = axios.post(`${URL}`, body, {headers}).then(r => r.data);
    console.log(data);
    return data;
}





const actualizar = async(id, body) => {
    const token = await obtenerTokenFacade();
    const headers = { Authorization: `Bearer ${token.accessToken}` };
    const data = axios.put(`${URL}/${id}`, body, {headers}).then(r => r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async(id, body) => {
    const token = await obtenerTokenFacade();
    const headers = { Authorization: `Bearer ${token.accessToken}` };
    const data = axios.patch(`${URL}/${id}`, body, {headers}).then(r => r.data);
    console.log(data);
    return data;
}

const borrar = async(id) => {
    const token = await obtenerTokenFacade();
    const headers = { Authorization: `Bearer ${token.accessToken}` };
    axios.delete(`${URL}/${id}`, {headers}).then(r => r.data);
}

export const consultarTodosFachada = async() => {
    return await consultarTodos();
}

export const consultarPorIdFachada = async(id) => {
    return await consultarPorId(id);
}

export const guardarFachada = async(body) => {
    return await guardar(body);
}

export const actualizarFachada = async(id, body) => {
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async(id, body) => {
    return await actualizarParcial(id, body);
}   

export const borrarFachada = async(id) => {
    await borrar(id);
}

