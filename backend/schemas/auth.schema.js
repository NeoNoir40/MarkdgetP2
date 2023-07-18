const { z } = require('zod');

const registerSchema = z.object({
    nombre: z.string({ required_error: 'Usuario obligatorio'}),
    email: z.string({ required_error: 'Email obligatorio' }).email({ required_error: 'Email inválido' }),
    contrasena: z.string({ required_error: 'Contrasena obligatorio' }).min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    direccion: z.string({ required_error: 'Direccion obligatorio' }),
    ciudad: z.string({ required_error: 'Ciudad obligatorio' }),
    estado: z.string({ required_error: 'Estado obligatorio' }),
    pais: z.string({ required_error: 'Pais obligatorio' }),
});

const loginSchema = z.object({
    email: z.string({ required_error: 'Campo obligatorio' }).email({ required_error: 'Email inválido' }),
    contrasena: z.string({ required_error: 'Campo obligatorio' }).min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});

module.exports = { registerSchema, loginSchema };
