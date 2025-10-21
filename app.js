let deferredPrompt; // 💡 Esta variable guardará el evento de instalación

// 1. Escuchar el evento que indica que la PWA es instalable
window.addEventListener('beforeinstallprompt', (e) => {
    // Previene que el navegador muestre el banner predeterminado
    e.preventDefault(); 
    
    // Guarda la referencia al evento para usarla después
    deferredPrompt = e; 
    
    // Muestra tu botón o mensaje de "Instalar"
    mostrarBotonInstalar();
});

function mostrarBotonInstalar() {
    // 📢 TODO: Reemplaza 'btnInstalar' con el ID de tu botón real
    const installButton = document.getElementById('btnInstalar');
    
    if (installButton) {
        // Hace visible el botón que estaba oculto
        installButton.style.display = 'block'; 
        
        // Asigna el manejador de clic
        installButton.addEventListener('click', manejarClicInstalar);
    }
}

function manejarClicInstalar() {
    if (deferredPrompt) {
        // Muestra el diálogo de instalación nativo del navegador
        deferredPrompt.prompt(); 
        
        // Espera a que el usuario responda
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuario aceptó la instalación de la PWA.');
            } else {
                console.log('Usuario rechazó la instalación de la PWA.');
            }
            
            // La referencia al evento ya no es necesaria y se oculta el botón
            deferredPrompt = null; 
            
            // 🛠️ CORRECCIÓN: Verifica si el botón existe antes de manipularlo
            const btn = document.getElementById('btnInstalar');
            if (btn) {
                btn.style.display = 'none';
            }
        });
    }
}

// Opcional: Oculta el botón por defecto si la app ya está instalada
window.addEventListener('appinstalled', (e) => {
    console.log('PWA instalada exitosamente');
    
    // 🛠️ CORRECCIÓN: Verifica si el botón existe antes de manipularlo
    const btn = document.getElementById('btnInstalar');
    if (btn) {
        btn.style.display = 'none';
    }
});