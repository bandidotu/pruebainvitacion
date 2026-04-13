// Configurar la fecha del evento
const fechaEvento = new Date('May 23, 2026 18:00:00').getTime();

const countdown = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    // Cálculos de tiempo
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Inyectar en el HTML
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    // Si la fecha ya pasó
    if (diferencia < 0) {
        clearInterval(countdown);
        document.querySelector('.cuenta-regresiva').innerHTML = "<h3>¡El gran día ha llegado!</h3>";
    }
}, 1000);

// Evento para el botón de confirmación
document.getElementById('btnConfirmar').addEventListener('click', () => {
    // Aquí puedes redirigir a un Formulario de Google o un WhatsApp
    const mensaje = "¡Hola! Confirmo mi asistencia a los 15 años de Valentina.";
    window.open(`https://wa.me/521234567890?text=${encodeURIComponent(mensaje)}`, '_blank');
});