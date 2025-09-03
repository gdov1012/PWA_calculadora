if ('serviceWorker' in navigator) {
  
    navigator.serviceWorker.register('/PWA_calculadora/sw.js')
        .then(() => console.log('Service Worker registrado com sucesso!'))
        .catch(err => console.log('Erro ao registrar Service Worker:', err));
}