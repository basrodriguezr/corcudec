import React, { useState } from 'react'

export const Acordeon = () => {
    const [open, setOpen] = useState(false);
  return (
     <>
      <button
        onClick={() => setOpen(!open)}
        className={`accordion-btn ${open ? "active" : ""}`}
      >
        Transparencia 2025
      </button>

      <div className={`accordion-content ${open ? "block" : "hidden"}`}>
        <ul className='font-medium'>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/otros-aportes-enero-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              OTROS APORTES ENERO 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/otros-aportes-febrero-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              OTROS APORTES FEBRERO 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/estatutos-corcudec.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Estatutos corcudec (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/ingreso-fondos-publicos.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ingreso Fondos Públicos (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/estructura-organica-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Estructura Orgánica 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/otros-aportes-marzo-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Otros Aportes Marzo 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/responsable-gestion-y-administracion.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Responsable Gestión y Administración (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/composicion-directorio-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Composición directorio 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/rex-578-aprueba-convenio-corcudec-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              REX N° 578 Aprueba Convenio Corcudec 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/certificado-declaracion-de-intereses.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificado Declaración de Intereses (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/procedimiento-contratacion-personal-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Procedimiento contratación personal 2025 (.PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.corcudec.cl/archivos/recurso-humanos-mincap-abril-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recurso Humanos MINCAP abril 2025 (.PDF)
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
