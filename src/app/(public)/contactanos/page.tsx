"use client";

import { DRUPAL_HOSTNAME, DRUPAL_ROUTES } from "@/config/global";
import { useRef, useState, useEffect, FormEvent } from "react";

const API_URL = DRUPAL_HOSTNAME + DRUPAL_ROUTES.CORREO;

export default function Consultas() {
    const formRef = useRef<HTMLFormElement>(null);
    const [ok, setOk] = useState(false);
    const [error, setError] = useState(false); // Nuevo estado para errores
    const [sending, setSending] = useState(false);

    // Ajustamos el useEffect para resetear tanto 'ok' como 'error'
    useEffect(() => {
        if (!ok && !error) return;
        const t = setTimeout(() => {
            setOk(false);
            setError(false);
        }, 5000);
        return () => clearTimeout(t);
    }, [ok, error]);

    /**
     * Restringe el input a letras, espacios, guiones y apóstrofes (para nombres y apellidos)
     */
    const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Permitir teclas especiales (como Backspace, Tab, Flechas, Enter)
        if (e.key === 'Backspace' || e.key === 'Tab' || e.key.startsWith('Arrow') || e.key === 'Enter') {
            return;
        }

        // Expresión regular que permite letras, espacios, guiones (-) y comillas simples/apóstrofes (')
        const allowed = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]$/;

        // Si la tecla presionada no cumple con la expresión, prevenir la acción por defecto
        if (!allowed.test(e.key)) {
            e.preventDefault();
        }
    };

    /**
     * Restringe el input a números (dígitos 0-9) y el signo '+'
     */
    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        const value = input.value;
        const key = e.key;

        // 1. Permitir teclas especiales (BackSpace, Tab, Flechas, Enter)
        if (key === 'Backspace' || key === 'Tab' || key.startsWith('Arrow') || key === 'Enter') {
            return;
        }

        // 2. Permitir el '+' solo al inicio
        if (key === '+') {
            // Prevenir si ya hay un '+' o si no está en la posición inicial
            if (value.includes('+') || input.selectionStart !== 0) {
                e.preventDefault();
            }
            return;
        }

        // 3. Restringir a dígitos (0-9)
        if (!/^\d$/.test(key)) {
            e.preventDefault();
        }
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false); // Limpiar errores previos
        const form = formRef.current;
        if (!form) return;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        try {
            setSending(true);
            
            // 1. Recopilar datos y convertirlos a JSON
            const data = new FormData(form);
            const dataObject = Object.fromEntries(data.entries());

            const res = await fetch(API_URL, { 
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json', // Indicamos que el cuerpo es JSON
                },
                body: JSON.stringify(dataObject) // Enviamos los datos como JSON
            });

            if (!res.ok) {
                // Leer el mensaje de error si el servidor lo proporciona
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al enviar el formulario.");
            }

            // Éxito
            form.reset();
            setOk(true);
        } catch (err) {
            console.error("Error al enviar el formulario:", err);
            setError(true); // Mostrar mensaje de error al usuario
        } finally {
            setSending(false);
        }
    };
    
    // ... (El resto del componente JSX)
    return (
        <main className="bg-white text-neutral-900">
            <div className="contenedor-transparencia">
                <section
                    className="form-card mb-10"
					role="region"
					aria-labelledby="form-title"
                >
                    <h2 className="form-title">
						Consultas{/*, Sugerencias, Reclamos y Felicitaciones*/}
					</h2>
					<p className="helper">
						Completa el formulario y selecciona el tipo de solicitud.
					</p>

					{/* <!-- Formulario CSR --> */}
                    <form id="csr-form" ref={formRef} onSubmit={onSubmit} noValidate>
                        {/*<!-- Tipo de solicitud -->*/}
						<div className="field">
							<label htmlFor="tipo" className="field-label">Tipo de solicitud</label>
							<select className="h-14 rounded-2xl p-4" id="tipo" name="tipo" required defaultValue="">
								<option value="" disabled>
									Selecciona una opción
								</option>
								<option value="consulta">Consulta</option>
								{/* <option value="sugerencia">Sugerencia</option>
                                <option value="reclamo">Reclamo</option>
                                <option value="felicitacion">Felicitación</option> */}
							</select>
						</div>

                        {/* <!-- Nombre --> */}
                        <div className="field">
                            <label htmlFor="nombre" className="field-label">Nombre</label>
                            <input
                                className="field-input"
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Juan Pérez"
                                required
                                pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$"
                                title="Solo se permiten letras y espacios."
                                onKeyDown={handleNameKeyDown}
                            />
                        </div>

 						{/* <!-- Correo --> */}
                        <div className="field">
                            <label htmlFor="correo" className="field-label">Correo</label>
                            <input
								className="field-input"
								id="correo"
								name="correo"
								type="email"
								placeholder="correo@gmail.com"
								required
							/>
						</div>

 						{/* <!-- Teléfono (opcional) --> */}
                        <div className="field">
                            <label htmlFor="telefono" className="field-label">Teléfono (opcional)</label>
                            <input
								className="field-input"
								id="telefono"
								name="telefono"
								type="tel"
								inputMode="tel"
								placeholder="+569 55555555"
                                maxLength={12}
								pattern="^\+?\d{7,11}$"
                                title="Solo se permiten números y el signo '+'. Máximo 12 caracteres."
                                onKeyDown={handlePhoneKeyDown}
							/>
						</div>

 						{/* <!-- Asunto --> */}
                        <div className="field">
                            <label htmlFor="asunto" className="field-label">Asunto</label>
                            <input
								className="field-input"
								id="asunto"
								name="asunto"
								type="text"
								placeholder="Resumen breve"
								required
								maxLength={120}
							/>
						</div>

 						{/* <!-- Mensaje --> */}
                        <div className="field">
                            <label htmlFor="mensaje" className="field-label">Mensaje</label>
                            <textarea
                                className="field-input h-24 min-h-5 rounded-2xl p-4"
                                id="mensaje"
                                name="mensaje"
                                rows={6}
                                placeholder="Cuéntanos los detalles…"
                                required
                            ></textarea>
                        </div>
                        
                        {/* <!-- Enviar --> */}
                        <button className="btn-send" type="submit" disabled={sending}>
                            {sending ? "ENVIANDO..." : "ENVIAR"}
                        </button>
                        
                        {/* <!-- Nota de uso de datos --> */}
                        <p className="helper">
                            Usaremos tus datos sólo para gestionar tu solicitud y contactarte
                            si es necesario.
                        </p>

                        {/* */}
                        {error && (
                            <div className="text-red-600 mt-3 text-center" aria-live="assertive">
                                Hubo un error al enviar tu solicitud. Por favor, intenta más tarde.
                            </div>
                        )}
                        
                        {/* */}
                        <div
                            id="ok"
                            aria-live="polite"
                            className={`helper ${
                                ok ? "opacity-100" : "opacity-0 pointer-events-none"
                            }`}
                        >
                            ¡Gracias! Recibimos tu solicitud. Te contactaremos pronto.
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}
