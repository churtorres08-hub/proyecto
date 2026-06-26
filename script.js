document.addEventListener("DOMContentLoaded", () => {
    const btnInicio = document.getElementById("btn-inicio");
    const btnEncuesta = document.getElementById("btn-encuesta");
    const btnInvertir = document.getElementById("btn-invertir");

    if (btnInicio) {
        btnInicio.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (btnEncuesta) {
        btnEncuesta.addEventListener("click", () => {
            window.location.href = "encuesta.html";
        });
    }

    if (btnInvertir) {
        btnInvertir.addEventListener("click", () => {
            window.location.href = "comienza-a-invertir.html";
        });
    }

    const form = document.getElementById('crypto-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const nombre = document.getElementById('nombre').value.trim();
            const experiencia = document.getElementById('experiencia').value;
            const intereses = document.getElementById('intereses').value.trim();

            if (!nombre || !experiencia || !intereses) {
                alert("Por favor, completa todos los campos del perfil.");
                return;
            }

            const submitBtn = document.getElementById('submit-btn');
            submitBtn.textContent = "Guardando...";
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`¡Listo ${nombre}! Tu perfil ha sido guardado exitosamente en Proyecto Churvic.`);
                submitBtn.textContent = "Guardar Perfil";
                submitBtn.disabled = false;
                form.reset();
            }, 1000);
        });
    }

    const imagenPrincipal = document.getElementById("ImagenPrincipal");
    const btAnterior = document.getElementById("btAnterior");
    const btSiguiente = document.getElementById("btSiguiente");

    const imagenesCrypto = [
        "https://ifccd.net/uploads/image/what-is-btc.jpg",
        "https://www.cointribune.com/app/uploads/2026/06/63000-1024x683.png",
        "https://images.ecestaticos.com/tVNKB9QYTbus_9OXbkB8BHgEWGQ=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9d0%2Fe84%2F13c%2F9d0e8413c3c9a569d7e0b13796060d4d.jpg"
    ];

    let indiceActual = 0;

    function mostrarImagen(indice) {
        if (imagenPrincipal && imagenesCrypto[indice]) {
            imagenPrincipal.src = imagenesCrypto[indice];
            imagenPrincipal.onerror = () => {
                imagenPrincipal.alt = "Imagen no encontrada en ruta: " + imagenesCrypto[indice];
            };
        }
    }

    if (imagenPrincipal) {
        mostrarImagen(indiceActual);

        if (btSiguiente) {
            btSiguiente.addEventListener("click", () => {
                indiceActual++;
                if (indiceActual >= imagenesCrypto.length) {
                    indiceActual = 0;
                }
                mostrarImagen(indiceActual);
            });
        }

        if (btAnterior) {
            btAnterior.addEventListener("click", () => {
                indiceActual--;
                if (indiceActual < 0) {
                    indiceActual = imagenesCrypto.length - 1; 
                }
                mostrarImagen(indiceActual);
            });
        }
    }
});
