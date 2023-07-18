const { z } = require('zod');

const registerSchema = z.object({
    username: z.string({ required_error: 'Usuario requerido' }),
    email: z.string({ required_error: 'Campo obligatorio' }).email({ required_error: 'Email inválido' }),
    contrasena: z.string({ required_error: 'Campo obligatorio' }).min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    direccion: z.string({ required_error: 'Campo obligatorio' }),
    ciudad: z.string({ required_error: 'Campo obligatorio' }),
    estado: z.string({ required_error: 'Campo obligatorio' }),
    pais: z.string({ required_error: 'Campo obligatorio' }),
});

const loginSchema = z.object({
    email: z.string({ required_error: 'Campo obligatorio' }).email({ required_error: 'Email inválido' }),
    contrasena: z.string({ required_error: 'Campo obligatorio' }).min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
});

module.exports = { registerSchema, loginSchema };
