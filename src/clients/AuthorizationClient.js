import axios from 'axios';

const API_BASE_URL = '/auth';

// Credenciales
const CREDENTIALS = {
    user: 'admin',
    password: 'admin123'
};

class AuthorizationClient {
    constructor() {
        this.token = null;
        this.tokenExpiration = null;
        this.role = null;
    }

    async getToken() {
        try {
            // Si ya tenemos un token válido, lo retornamos
            if (this.token && this.isTokenValid()) {
                return this.token;
            }

            // Solicitar un nuevo token
            const response = await axios.get(`${API_BASE_URL}/token`, {
                params: {
                    user: CREDENTIALS.user,
                    password: CREDENTIALS.password
                }
            });

            // Guardar el token y su información
            this.token = response.data.accessToken;
            this.tokenExpiration = response.data.expiresAt;
            this.role = response.data.role;

            console.log('Token obtenido exitosamente');
            return this.token;
        } catch (error) {
            console.error('Error al obtener el token:', error.response?.data || error.message);
            throw new Error('No se pudo obtener el token de autorización');
        }
    }

    isTokenValid() {
        if (!this.token || !this.tokenExpiration) {
            return false;
        }

        //Verificar si el token aún no ha expirado
        const now = Math.floor(Date.now() / 1000);
        return this.tokenExpiration > (now + 60);
    }

    getRole() {
        return this.role;
    }

    clearToken() {
        this.token = null;
        this.tokenExpiration = null;
        this.role = null;
    }

    async getAuthHeaders() {
        const token = await this.getToken();
        return {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
    }
}

//Exportar una instancia unica
export default new AuthorizationClient();
