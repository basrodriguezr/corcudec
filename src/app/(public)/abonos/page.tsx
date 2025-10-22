'use client';

import { useRef, useState, useEffect, FormEvent } from "react";

export default function Abonos() {
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
      <h2 className="form-title">Déjanos tus datos y te avisaremos cuando estén disponibles</h2>

      {/* <!-- Formulario CSR --> */}
      <form id="csr-form" ref={formRef} onSubmit={onSubmit} noValidate>

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
          <input className="field-input" id="telefono" name="telefono" type="tel" inputMode="tel" 
            placeholder="+569 55555555" pattern="^\+?\s?(\d{2,3})?\s?\d{7,12}$"/>
        </div>

        {/* <!-- Enviar --> */}
        <button className="btn-send" type="submit">{sending ? "ENVIANDO..." : "ENVIAR"}</button>

        {/* <!-- Nota de uso de datos --> */}
        <p className="helper">Usaremos tus datos sólo para avisarte por esta disponibilidad.</p>
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
