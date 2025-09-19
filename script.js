document.addEventListener('DOMContentLoaded', () => {
    // Navegação do Navbar
    document.getElementById('nav-inicio').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    document.getElementById('nav-entrar').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });

    document.getElementById('nav-cadastrar').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'cadastro.html';
    });

    // Botão 'Agendar agora' no Header
    document.getElementById('link-whatsapp').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'agendamento.html';
    });

    // Botão 'Entrar' no Header
    document.getElementById('header-entrar').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login.html';
    });

    // Botão flutuante do WhatsApp
    document.getElementById('whatsapp-float').addEventListener('click', (e) => {
        e.preventDefault();
        const BARBEIRO = window.BARBEIRO;
        window.open(`https://wa.me/${BARBEIRO.telefone}`, '_blank');
    });
});

