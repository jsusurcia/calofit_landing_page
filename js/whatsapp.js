const TELEFONO = "51959540598";
const MENSAJE  = "Hola, estoy interesado en registrarme en Calofit. \n" +
                 "Me gustaría hablar con un administrador para crear mi cuenta " +
                 "y comenzar a llevar el seguimiento de mis calorías. ¿Me podrían ayudar?";

const btnContacto = document.getElementById("contact-admin");
const btnWhatsapp = document.getElementById("contact-whatsapp");

const abrirWhatsApp = (e) => {
  e.preventDefault();
  const url = `https://wa.me/${TELEFONO}?text=${encodeURIComponent(MENSAJE)}`;
  window.open(url, "_blank");
};

if (btnContacto) btnContacto.addEventListener("click", abrirWhatsApp);
if (btnWhatsapp) btnWhatsapp.addEventListener("click", abrirWhatsApp);
