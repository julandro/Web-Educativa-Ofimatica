const routes = {
  "/pages/excel#informacion": `
    <section class="section">
      <h1 class="title has-text-centered">Informacion</h1>

      <div
        class="section is-flex is-flex-wrap-wrap is-justify-content-space-evenly"
      >
        <div class="section" style="max-width: 500px">
          <h1 class="title">¿Para que Sirve Excel?</h1>
          <div class="content">
            <ul>
              <li>
                <strong>Gestión de datos: </strong>Organizar, almacenar y
                manipular grandes volúmenes de información en forma de tablas.
              </li>
              <li>
                <strong>Realización de cálculos: </strong>Permite realizar
                cálculos automáticos mediante fórmulas matemáticas y funciones
                predefinidas.
              </li>
              <li>
                <strong>Análisis de datos:</strong> A través de herramientas
                como tablas dinámicas, filtros y gráficos, Excel facilita el
                análisis y visualización de datos complejos.
              </li>
              <li>
                <strong>Automatización: </strong>Mediante el uso de macros, se
                pueden automatizar tareas repetitivas.
              </li>
              <li>
                <strong>Creación de gráficos:</strong>
                Permite generar gráficos y diagramas para representar los datos
                de manera visual.
              </li>
              <li>
                <strong>Programación: </strong>A través de Visual Basic for
                Applications (VBA), Excel permite crear programas personalizados
                para tareas específicas.
              </li>
            </ul>
          </div>
        </div>

        <div class="section" style="max-width: 500px">
          <h1 class="title is-size-4">
            ¿Cuáles son sus características principales?
          </h1>
          <div class="content">
            <ul>
              <li>
                <strong>Hojas de cálculo:</strong> Datos organizados en celdas
                que se agrupan en filas y columnas.
              </li>
              <li>
                <strong>Fórmulas: </strong>Cálculos automáticos con funciones
                matemáticas, estadísticas, lógicas, entre otras.
              </li>
              <li>
                <strong>Funciones avanzadas: </strong>Herramientas para realizar
                operaciones complejas como buscar, contar, agrupar datos, etc.
              </li>
              <li>
                <strong>Gráficos:</strong> Para representar visualmente los
                datos, como gráficos de barras, líneas, pie, etc.
              </li>
              <li>
                <strong>Tablas dinámicas: </strong>Permiten resumir grandes
                cantidades de datos de manera rápida y flexible.
              </li>
              <li>
                <strong>Compatibilidad: </strong>Excel es compatible con otros
                programas y puede importar y exportar datos en varios formatos.
              </li>
            </ul>
          </div>
        </div>

        <div class="section" style="max-width: 500px">
          <h1 class="title">¿Quiénes lo usan?</h1>
          <div class="content">
            <ul>
              <li>
                <strong>Empresas: </strong> Para llevar la contabilidad, hacer
                análisis financieros, y gestionar inventarios.
              </li>
              <li>
                <strong>Estudiantes: </strong>Para realizar cálculos, presentar
                proyectos o trabajar con datos.
              </li>
              <li>
                <strong>Investigadores: </strong>Para organizar datos de
                estudios y realizar análisis estadísticos.
              </li>
              <li>
                <strong>Profesionales de TI: </strong> Para crear algoritmos y
                macros que automatizan procesos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    `,
  "/pages/excel#videos": `<section class="section">
      <h1 class="title">Videos</h1>
      <h2 class="subtitle">
   
      </h2>

      <br />

      <div class="columns notification">
        <div class="column content">
          <h1 class="title">
            Curso de Excel - Macros
          </h1>
          <p class="has-text-grey-light is-size-5 has-text-justified">
            Este video aborda el tema de Macros, explica como se crean, para qué son utiles y como usarlas
          </p>
        </div>
        <div class="column">
          <figure class="image video-container">
            <iframe
              class="has-ratio responsive-iframe"
              width="640"
              height="360"
              src="https://drive.google.com/file/d/1W7Ya24eM870xT5wH0-pxdj4uiBO5dIt8/preview"
              frameborder="0"
              oncontextmenu="return false;"
              allowfullscreen
              style="min-width: 400px; max-width: 640"
            ></iframe>
          </figure>
          <p class="has-text-grey-light is-size-5 has-text-right">
            Video de nuestra autoria
          </p>
        </div>
      </div>

      <br />

      
      </article>
    </section>`,
  "/pages/excel#documentos": `<section class="section">
      <article class="panel is-info">
        <p class="panel-heading has-text-centered">Documentos</p>
        <p class="panel-tabs">
          <a class="is-active">PDF</a>
        </p>

        <div class="panel-block">
          <div class="column">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            manual microsoft office excel 2010
            <span class="tag is-dark">PDF</span>
          </div>
          <div>
            <a
              href="/src/assets/docs/excel/manual-microsoft-office-excel-2010.pdf"
              download
            >
              <button class="button is-success">
                <i class="bi bi-download"></i>
              </button>
            </a>

            <a
              href="https://www.uv.mx/personal/llopez/files/2013/03/manual-microsoft-office-excel-2010.pdf"
              target="_blank"
            >
              <button class="button is-dark">
                <i class="bi bi-box-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>

        <div class="panel-block">
          <div class="column">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            CURSO EXPERTO MICROSOFT EXCEL 2013
            <span class="tag is-dark">PDF</span>
          </div>
          <div>
            <a
              href="/src/assets/docs/excel/CURSO EXPERTO MICROSOFT EXCEL 2013.pdf"
              download
            >
              <button class="button is-success">
                <i class="bi bi-download"></i>
              </button>
            </a>

            <a
              href="https://www.calzadadecalatrava.es/attachments/article/1665/CURSO%20EXPERTO%20MICROSOFT%20EXCEL%202013.pdf"
              target="_blank"
            >
              <button class="button is-dark">
                <i class="bi bi-box-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>

        <div class="panel-block">
          <div class="column">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Excel Básico
            <span class="tag is-dark">PDF</span>
          </div>
          <div>
            <a href="/src/assets/docs/excel/excel-basico.pdf" download>
              <button class="button is-success">
                <i class="bi bi-download"></i>
              </button>
            </a>

            <a
              href="https://www.educ.ar/app/files/repositorio/html/12/29/9c7464a6-4b44-11e1-814c-ed15e3c494af/index/recursos/curso_excel2.pdf"
              target="_blank"
            >
              <button class="button is-dark">
                <i class="bi bi-box-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>

        <div class="panel-block">
          <div class="column">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Excel para Principiantes
            <span class="tag is-dark">PDF</span>
          </div>
          <div>
            <a
              href="http://cotana.informatica.edu.bo/downloads/Excel%20para%20Principiantes.pdf"
              target="_blank"
            >
              <button class="button is-dark">
                <i class="bi bi-box-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>

        <div class="panel-block">
          <div class="column">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Manual Avanzado Excel 2016
            <span class="tag is-dark">PDF</span>
          </div>
          <div>
            <a
              href="/src/assets/docs/excel/Manual-Avanzado-Excel-2016.pdf"
              download
            >
              <button class="button is-success">
                <i class="bi bi-download"></i>
              </button>
            </a>

            <a
              href="https://excelfullplus.com/wp-content/uploads/2020/10/Manual-Avanzado.pdf"
              target="_blank"
            >
              <button class="button is-dark">
                <i class="bi bi-box-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>

        <div class="panel-block">
          <div class="column">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            Excel Fundamentals Manual
            <span class="tag is-dark">PDF</span>
          </div>
          <div>
            <a
              href="/src/assets/docs/excel/Excel-Fundamentals-Manual.pdf"
              download
            >
              <button class="button is-success">
                <i class="bi bi-download"></i>
              </button>
            </a>

            <a
              href="https://www.sgul.ac.uk/about/our-professional-services/information-services/library/documents/training-manuals/Excel-Fundamentals-Manual.pdf"
              target="_blank"
            >
              <button class="button is-dark">
                <i class="bi bi-box-arrow-up"></i>
              </button>
            </a>
          </div>
        </div>
      </article>
    </section>`,
};

// Función para navegar a una ruta específica
function navigateTo(event, path) {
  event.preventDefault();
  window.history.pushState({}, path, window.location.origin + path);
  renderContent(path);
}

// Función para cargar el contenido basado en la ruta actual
function renderContent(path) {
  const appDiv = document.getElementById("secciones");
  appDiv.innerHTML =
    routes[path] ||
    `<section class="section">
      <h1 class="title has-text-centered">Informacion</h1>

      <div
        class="section is-flex is-flex-wrap-wrap is-justify-content-space-evenly"
      >
        <div class="section" style="max-width: 500px">
          <h1 class="title">¿Para que Sirve Excel?</h1>
          <div class="content">
            <ul>
              <li>
                <strong>Gestión de datos: </strong>Organizar, almacenar y
                manipular grandes volúmenes de información en forma de tablas.
              </li>
              <li>
                <strong>Realización de cálculos: </strong>Permite realizar
                cálculos automáticos mediante fórmulas matemáticas y funciones
                predefinidas.
              </li>
              <li>
                <strong>Análisis de datos:</strong> A través de herramientas
                como tablas dinámicas, filtros y gráficos, Excel facilita el
                análisis y visualización de datos complejos.
              </li>
              <li>
                <strong>Automatización: </strong>Mediante el uso de macros, se
                pueden automatizar tareas repetitivas.
              </li>
              <li>
                <strong>Creación de gráficos:</strong>
                Permite generar gráficos y diagramas para representar los datos
                de manera visual.
              </li>
              <li>
                <strong>Programación: </strong>A través de Visual Basic for
                Applications (VBA), Excel permite crear programas personalizados
                para tareas específicas.
              </li>
            </ul>
          </div>
        </div>

        <div class="section" style="max-width: 500px">
          <h1 class="title is-size-4">
            ¿Cuáles son sus características principales?
          </h1>
          <div class="content">
            <ul>
              <li>
                <strong>Hojas de cálculo:</strong> Datos organizados en celdas
                que se agrupan en filas y columnas.
              </li>
              <li>
                <strong>Fórmulas: </strong>Cálculos automáticos con funciones
                matemáticas, estadísticas, lógicas, entre otras.
              </li>
              <li>
                <strong>Funciones avanzadas: </strong>Herramientas para realizar
                operaciones complejas como buscar, contar, agrupar datos, etc.
              </li>
              <li>
                <strong>Gráficos:</strong> Para representar visualmente los
                datos, como gráficos de barras, líneas, pie, etc.
              </li>
              <li>
                <strong>Tablas dinámicas: </strong>Permiten resumir grandes
                cantidades de datos de manera rápida y flexible.
              </li>
              <li>
                <strong>Compatibilidad: </strong>Excel es compatible con otros
                programas y puede importar y exportar datos en varios formatos.
              </li>
            </ul>
          </div>
        </div>

        <div class="section" style="max-width: 500px">
          <h1 class="title">¿Quiénes lo usan?</h1>
          <div class="content">
            <ul>
              <li>
                <strong>Empresas: </strong> Para llevar la contabilidad, hacer
                análisis financieros, y gestionar inventarios.
              </li>
              <li>
                <strong>Estudiantes: </strong>Para realizar cálculos, presentar
                proyectos o trabajar con datos.
              </li>
              <li>
                <strong>Investigadores: </strong>Para organizar datos de
                estudios y realizar análisis estadísticos.
              </li>
              <li>
                <strong>Profesionales de TI: </strong> Para crear algoritmos y
                macros que automatizan procesos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>`; // Renderiza el contenido o un 404 si no existe la ruta
}

// Escucha los cambios en el historial para manejar la navegación del navegador (botones de atrás y adelante)
window.onpopstate = () => {
  renderContent(window.location.pathname); // Llama a renderContent con la ruta actual
};

// Carga la ruta inicial al cargar la página
window.onload = () => {
  renderContent(window.location.pathname); // Muestra el contenido inicial al cargar
};
