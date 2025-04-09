function ejecutarHTML() {
    const code = document.getElementById("editor").value;
    const iframe = document.getElementById("resultado");
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  }
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por ponerte en contacto! Te responderemos pronto.');
});
