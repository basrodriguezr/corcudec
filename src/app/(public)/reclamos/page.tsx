'use client';

import { useRef, useState, useEffect, FormEvent } from "react";


export default function Reclamos() {
  const formRef = useRef<HTMLFormElement>(null);
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!ok) return;
    const t = setTimeout(() => setOk(false), 5000);
    return () => clearTimeout(t);
  }, [ok]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Validación nativa
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    try {
      setSending(true);

      // Ejemplo de envío real (comenta/borra si no usas API aún):
      // const data = new FormData(form);
      // const res = await fetch("/api/contacto", { method: "POST", body: data });
      // if (!res.ok) throw new Error("Error al enviar");

      // Simula éxito
      form.reset();
      setOk(true);
    } catch (err) {
      console.error(err);
      // acá podrías setear un estado de error si quieres mostrar algo
    } finally {
      setSending(false);
    }
  };


  return (
     <section className="form-card" role="region" aria-labelledby="form-title">
      <h2 className="form-title">Consultas, Sugerencias, Reclamos y Felicitaciones</h2>
      <p className="helper" >Completa el formulario y selecciona el tipo de solicitud.</p>

      {/* <!-- Formulario CSR --> */}
      <form id="csr-form" ref={formRef} onSubmit={onSubmit} noValidate>
        {/* <!-- Tipo de solicitud --> */}
        <div className="field">
          <label className="field-label">Tipo de solicitud</label>
          <select id="tipo" name="tipo" required defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="consulta">Consulta</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="reclamo">Reclamo</option>
            <option value="felicitacion">Felicitación</option>
          </select>
        </div>

        {/* <!-- Nombre --> */}
        <div className="field">
          <label className="field-label">Nombre</label>
          <input className="field-input" id="nombre" name="nombre" type="text" placeholder="Juan Pérez" required/>
        </div>

        {/* <!-- Correo --> */}
        <div className="field">
          <label className="field-label">Correo</label>
          <input className="field-input" id="correo" name="correo" type="email" placeholder="correo@gmail.com" required/>
        </div>

        {/* <!-- Teléfono (opcional) --> */}
        <div className="field">
          <label className="field-label">Teléfono (opcional)</label>
          <input className="field-input" id="telefono" name="telefono" type="tel" inputMode="tel" placeholder="+569 55555555"
                 pattern="^\+?\s?(\d{2,3})?\s?\d{7,12}$"/>
        </div>

        {/* <!-- Asunto --> */}
        <div className="field">
          <label className="field-label">Asunto</label>
          <input className="field-input" id="asunto" name="asunto" type="text" placeholder="Resumen breve" required maxLength={120}/>
        </div>

        {/* <!-- Mensaje --> */}
        <div className="field">
          <label className="field-label">Mensaje</label>
          <textarea className="field-input h-24 rounded-xs p-1" id="mensaje" name="mensaje" rows={6} placeholder="Cuéntanos los detalles…" required></textarea>
        </div>

        {/* <!-- Enviar --> */}
        <button className="btn-send" type="submit">{sending ? "ENVIANDO..." : "ENVIAR"}</button>

        {/* <!-- Nota de uso de datos --> */}
        <p className="helper">Usaremos tus datos sólo para gestionar tu solicitud y contactarte si es necesario.</p>
      </form>

      {/* <!-- Mensaje de éxito (oculto por defecto, controlado por JS) --> */}
      <div
          id="ok"
          aria-live="polite"
          className={`helper ${
            ok ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
         ¡Gracias! Recibimos tu solicitud. Te contactaremos pronto.
        </div>
      {/* <div id="ok" className="helper hidden">
        
      </div> */}
    </section>
  )
}
