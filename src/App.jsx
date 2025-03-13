import React from 'react';

function App() {
  return (
    <div className="App">
      <div className='Nombre'>
          <h1>Marvin Javier Sánchez Carrasco</h1>
        </div>
        <div className='Contacto'>
          <ul>
            <li>Comalcalco, Tabasco</li>
            <li><a href='https://www.linkedin.com/in/devmarvinsc' target='_blank'>LinkedIn</a></li>
            <li><a href='https://github.com/DevMarvinSC' target='_blank'>GitHub</a></li>
          </ul>
          <ul>
            <li>Correo: marvinjsc44@gmail.com</li>
            <li>Teléfono: 933-173-3755</li>
          </ul>
        </div>

        <hr/>
        <section>
          <h2>EDUCACIÓN</h2>
          <div className='info'>
            <h4>Universidad Juárez Autónoma de Tabasco</h4>
            <h4>Cunduacán, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Ingeniero en Sistemas Computacionales</p>
            <p>Febrero 2022, a la fecha</p>
          </div>

          <div className='info'>
            <h4>Colegio de Bachilleres de Tabasco. Plantel 20</h4>
            <h4>Comalcalco, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Certificado de Tecnologías de la Información y la Comunicación</p>
            <p>Agosto 2018 - Julio 2021</p>
          </div>
        </section>
        <hr/>
        <section>
          <h2>PROYECTOS Y VOLUNTARIADOS</h2>
          <div className='info'>
            <h4>Universidad Juárez Autónoma De Tabasco</h4>
            <h4>Cunduacán, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Desarrollador Full Stack.</p>
            <p>Agosto 2024 - Noviembre 2024.</p>
          </div>
          <div className='Detalles'>
            <p>Proyecto Escolar: Sistema Escolar de Alumnos, Calificaciones y Asistencias.</p>
            <ul>
              <li>Uso de Base de Datos SQL.</li>
              <li>Uso del Framework Flask.</li>
              <li>Uso de HTML, CSS y JS.</li>
            </ul>
            
        </div>
        </section>
        <hr />
        <section>
          <h2>CERTIFICACIONES</h2>
          <div className='info'>
            <h4>Introducción A La Programación Con Python</h4>
            <h4>Comalcalco, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Santander Open Academy</p>
            <p>19 de Diciembre de 2024</p>
          </div>

          <div className='info'>
            <h4>IA Generativa Para Educadores</h4>
            <h4>Comalcalco, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Google for Educators</p>
            <p>27  de Septiembre de 2024</p>
          </div>

          <div className='info'>
            <h4>Programador Orientado A Objetos</h4>
            <h4>Comalcalco, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Fundación Carlos Slim</p>
            <p>08 de Abril de 2024</p>
          </div>

          <div className='info'>
            <h4>Lógica De Programación</h4>
            <h4>Comalcalco, Tabasco</h4>
          </div>
          <div className='Descripcion'>
            <p>Fundación Carlos Slim</p>
            <p>04 de Abril de 2024</p>
          </div>
        </section>
        <section>
          <h2>HABILIDADES E INTERESES</h2>
          <div className='Habilidades'>
            <ul>
              <li><b>Idioma: </b>Inglés B2 segín TOEFL.</li>
              <li><b>Técnico: </b>Dominio Intermedio de Python</li>
              <li><b>Ofimática: </b>Dominio intermedio de la paquetería Microsoft Office 365.</li>
              <li><b>Colaboración: </b>Trabajo en equipo en entornos de desarrollo ágil.</li>
              <li><b>Intereses: </b>Desarrollo de Aplicaciones Multiplataforma y aprendizaje de nuevas tecnologías.</li>
            </ul>
          </div>
        </section>
        <hr/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
  );
}

export default App; 