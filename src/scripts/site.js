import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumber,
} from "libphonenumber-js";

const o = [
    {
      n: "01",
      name: "Identidad",
      description:
        "Construye la identidad del empresario y de la marca: quién eres, qué defiendes, qué prometes y hacia dónde cazas.",
      outcome:
        "Un empresario con propósito y dirección, respaldado por una marca coherente, una propuesta de valor clara y una posición propia en el mercado.",
      question:
        "¿Tienes clara la identidad del empresario que quieres ser y lo que tu marca representa, promete y busca construir?",
    },
    {
      n: "02",
      name: "Visibilidad",
      description:
        "Haz visible la marca en los canales correctos, frente al mercado correcto y con un mensaje que provoque acción.",
      outcome:
        "Una estrategia de canales y contenidos que conecta constantemente la marca con los clientes adecuados y genera oportunidades comerciales.",
      question:
        "¿Haces visible tu negocio en los canales donde se encuentra el cliente que quieres atraer?",
    },
    {
      n: "03",
      name: "Credibilidad",
      description:
        "Convierte la atención en confianza y la confianza en elección.",
      outcome:
        "Pruebas, reputación y una experiencia que convierten la confianza del mercado en decisiones de compra.",
      question:
        "¿Cuentas con pruebas, reputación y una experiencia que ayuden a tus clientes a confiar en lo que ofreces?",
    },
    {
      n: "04",
      name: "Rentabilidad",
      description: "Vender más no basta: aprende a conservar y multiplicar.",
      outcome:
        "Precios, márgenes y flujo de efectivo bajo control para que cada venta produzca utilidad real.",
      question:
        "¿Conoces y revisas semanalmente los números clave de tu negocio, como ventas, costos, márgenes y flujo de efectivo?",
    },
    {
      n: "05",
      name: "Escalabilidad",
      description: "Haz crecer el resultado sin multiplicar el caos.",
      outcome:
        "Un modelo capaz de aumentar ventas, capacidad y territorio sin depender proporcionalmente del dueño.",
      question:
        "¿Puedes hacer crecer tu negocio sin que todo dependa de ti ni aumente el caos en la misma proporción?",
    },
    {
      n: "06",
      name: "Duplicidad",
      description: "Forma líderes capaces de reproducir cultura y resultados.",
      outcome:
        "Personas que replican estándares, liderazgo y resultados sin que todo pase por una sola persona.",
      question:
        "¿Estás formando líderes que puedan reproducir la cultura, los estándares y los resultados de tu negocio?",
    },
    {
      n: "07",
      name: "Sistematización",
      description:
        "Integra procesos, inteligencias artificiales, software de trabajo y sistemas que simplifican las tareas y multiplican la capacidad del equipo.",
      outcome:
        "Una operación documentada, automatizada, medible y predecible que utiliza IA y tecnología para funcionar con eficiencia, incluso cuando el fundador no está presente.",
      question:
        "¿Tienes procesos documentados y herramientas que permitan a tu equipo trabajar con consistencia sin depender de ti para cada tarea?",
    },
  ],
  a = (e, n) => {
    const t = document.querySelector(e);
    t && (t.textContent = n);
  };
document.querySelectorAll("[data-step]").forEach((e) => {
  e.addEventListener("click", () => {
    const n = Number(e.dataset.step),
      t = o[n];
    (document.querySelectorAll("[data-step]").forEach((d) => {
      (d.classList.remove("active"), d.setAttribute("aria-selected", "false"));
    }),
      e.classList.add("active"),
      e.setAttribute("aria-selected", "true"),
      a("[data-step-number]", t.n),
      a("[data-step-label]", t.n),
      a("[data-step-name]", t.name),
      a("[data-step-description]", t.description),
      a("[data-step-outcome]", t.outcome));
  });
});
const WHATSAPP_NUMBER = "PENDIENTE_NUMERO";
const getWhatsAppDestination = () => WHATSAPP_NUMBER.replace(/\D/g, "");
const applyWhatsAppLink = document.querySelector("[data-whatsapp-apply]");
const applyWhatsAppStatus = document.querySelector("[data-whatsapp-apply-status]");
const businessWhatsApp = getWhatsAppDestination();

if (applyWhatsAppLink && businessWhatsApp) {
  const applyMessage = encodeURIComponent("Hola, quiero aplicar a Cazadores.");
  applyWhatsAppLink.href = `https://wa.me/${businessWhatsApp}?text=${applyMessage}`;
  applyWhatsAppLink.target = "_blank";
  applyWhatsAppLink.rel = "noopener noreferrer";
  applyWhatsAppLink.removeAttribute("aria-disabled");
  applyWhatsAppLink.removeAttribute("title");
  if (applyWhatsAppStatus) applyWhatsAppStatus.hidden = true;
}

applyWhatsAppLink?.addEventListener("click", (event) => {
  if (!getWhatsAppDestination()) {
    event.preventDefault();
    if (applyWhatsAppStatus) {
      applyWhatsAppStatus.textContent =
        "El número de WhatsApp de Cazadores todavía está pendiente de configuración.";
    }
  }
});

const portalDialog = document.querySelector("[data-portal-dialog]");
const portalCancel = document.querySelector("[data-portal-cancel]");
const portalContinue = document.querySelector("[data-portal-continue]");
const navMenu = document.querySelector("[data-nav-menu]");
const navMenuToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector(".nav");
let portalTrigger = null;

function closeNavMenu(restoreFocus = false) {
  if (!navMenu || !navMenuToggle) return;
  navMenu.hidden = true;
  navMenuToggle.setAttribute("aria-expanded", "false");
  navMenuToggle.setAttribute("aria-label", "Abrir menú");
  if (restoreFocus) navMenuToggle.focus();
}

navMenuToggle?.addEventListener("click", () => {
  if (!navMenu) return;
  const shouldOpen = navMenu.hidden;
  navMenu.hidden = !shouldOpen;
  navMenuToggle.setAttribute("aria-expanded", String(shouldOpen));
  navMenuToggle.setAttribute(
    "aria-label",
    shouldOpen ? "Cerrar menú" : "Abrir menú",
  );
  if (shouldOpen) navMenu.querySelector("a")?.focus();
});

navMenu?.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest("a");
  if (!link) return;
  closeNavMenu(!link.hasAttribute("data-portal-trigger"));
});

document.addEventListener("click", (event) => {
  if (!navMenu || navMenu.hidden || !(event.target instanceof Node)) return;
  if (!nav?.contains(event.target)) closeNavMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu && !navMenu.hidden) {
    closeNavMenu(true);
  }
});

window.matchMedia("(min-width: 1051px)").addEventListener("change", (event) => {
  if (event.matches) closeNavMenu();
});

document.querySelectorAll("[data-portal-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    if (!(portalDialog instanceof HTMLDialogElement) || portalDialog.open) return;
    portalTrigger = trigger;
    portalDialog.showModal();
    portalCancel?.focus();
  });
});

portalCancel?.addEventListener("click", () => portalDialog?.close());
portalDialog?.addEventListener("click", (event) => {
  if (event.target === portalDialog) portalDialog.close();
});
portalDialog?.addEventListener("close", () => portalTrigger?.focus());
portalContinue?.addEventListener("click", (event) => {
  event.preventDefault();
  if (!(portalContinue instanceof HTMLAnchorElement)) return;
  const portalUrl = portalContinue.href;
  portalDialog?.close();
  window.open(portalUrl, "_blank", "noopener,noreferrer");
});

let questionIndex = 0;
let answers = Array(o.length).fill(null);

const quizQuestion = document.querySelector("[data-quiz-question]"),
  quizResult = document.querySelector("[data-quiz-result]"),
  progress = document.querySelector("[data-progress]");

function getScore() {
  return answers.reduce((total, value) => total + (value ?? 0), 0);
}

function renderQuestion(shouldFocus = false) {
  const currentStage = o[questionIndex];
  const questionCount = questionIndex + 1;
  const completedCount = answers.filter((answer) => answer !== null).length;

  a("[data-question-count]", `PREGUNTA ${questionCount} DE ${o.length}`);
  a("[data-question-topic]", currentStage.name.toUpperCase());
  a("[data-question]", currentStage.question);
  a("[data-live-score]", String(getScore()));

  if (progress) {
    progress.style.width = `${(completedCount / o.length) * 100}%`;
    progress.parentElement?.setAttribute("aria-valuenow", String(completedCount));
  }

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(Number(button.dataset.answer) === answers[questionIndex]),
    );
  });

  const backButton = document.querySelector("[data-quiz-back]");
  if (backButton) backButton.hidden = questionIndex === 0;

  if (shouldFocus) document.querySelector("[data-question]")?.focus();
}

function renderResult() {
  const score = getScore();
  const weakestStages = o
    .map((stage, index) => ({ name: stage.name, score: answers[index] }))
    .sort((first, second) => first.score - second.score)
    .slice(0, 3);

  a("[data-score]", String(score));
  a(
    "[data-result-title]",
    score >= 12
      ? "TU NEGOCIO TIENE BASE PARA ACELERAR."
      : score >= 7
        ? "HAY FORTALEZAS POR CONSOLIDAR."
        : "ES MOMENTO DE FORTALECER LOS CIMIENTOS.",
  );
  a(
    "[data-result-summary]",
    `Obtuviste ${score} de 14 puntos. Enfoca tu siguiente paso en las áreas con menor puntaje.`,
  );

  const priorityList = document.querySelector("[data-priority-list]");
  if (priorityList) {
    priorityList.replaceChildren(
      ...weakestStages.map((stage) => {
        const item = document.createElement("li");
        const name = document.createElement("strong");
        const points = document.createElement("span");
        const meter = document.createElement("span");
        const meterFill = document.createElement("span");
        name.textContent = stage.name;
        points.textContent = `${stage.score}/2 puntos`;
        meter.className = "priorityMeter";
        meter.setAttribute("aria-hidden", "true");
        meterFill.style.width = `${(stage.score / 2) * 100}%`;
        meter.append(meterFill);
        item.append(name, points, meter);
        return item;
      }),
    );
  }

  if (quizQuestion) quizQuestion.hidden = true;
  if (quizResult) quizResult.hidden = false;
  document.querySelector("[data-result-title]")?.focus();
}

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    answers[questionIndex] = Number(button.dataset.answer);

    if (questionIndex < o.length - 1) {
      questionIndex += 1;
      renderQuestion(true);
    } else {
      renderResult();
    }
  });
});

document.querySelector("[data-quiz-back]")?.addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex -= 1;
    renderQuestion(true);
  }
});

const contactMethod = document.querySelector("[data-contact-method]");
const contactValue = document.querySelector("[data-contact-value]");
const contactFields = document.querySelector(".contactFields");
const countryNames = new Intl.DisplayNames(["es"], { type: "region" });
const countryFlag = (countryCode) =>
  Array.from(countryCode, (letter) =>
    String.fromCodePoint(127397 + letter.charCodeAt(0)),
  ).join("");

const countryField = document.createElement("label");
countryField.className = "countryField";
countryField.htmlFor = "contact-country";
countryField.hidden = true;
const countryLabel = document.createElement("span");
countryLabel.textContent = "País y lada";
const countrySelect = document.createElement("select");
countrySelect.id = "contact-country";
countrySelect.name = "contactCountry";
countrySelect.setAttribute("aria-label", "País y lada para WhatsApp");

getCountries()
  .map((countryCode) => ({
    countryCode,
    name: countryNames.of(countryCode) || countryCode,
    callingCode: getCountryCallingCode(countryCode),
  }))
  .sort((first, second) => first.name.localeCompare(second.name, "es"))
  .forEach(({ countryCode, name, callingCode }) => {
    const option = document.createElement("option");
    option.value = countryCode;
    option.textContent = `${countryFlag(countryCode)} ${name} (+${callingCode})`;
    if (countryCode === "MX") option.defaultSelected = true;
    countrySelect.append(option);
  });

countryField.append(countryLabel, countrySelect);
if (contactFields && contactValue) {
  contactFields.insertBefore(countryField, contactValue);
}

function syncContactInput() {
  const isEmail = contactMethod?.value !== "whatsapp";
  if (!contactValue) return;

  contactFields?.classList.toggle("is-whatsapp", !isEmail);
  countryField.hidden = isEmail;
  contactValue.type = isEmail ? "email" : "tel";
  contactValue.autocomplete = isEmail ? "email" : "tel-national";
  contactValue.inputMode = isEmail ? "email" : "tel";
  contactValue.placeholder = isEmail ? "tu@correo.com" : "Número nacional";
  contactValue.setAttribute(
    "aria-label",
    isEmail ? "Correo electrónico" : "Número de WhatsApp",
  );
}
contactMethod?.addEventListener("change", () => {
  if (contactValue) {
    contactValue.value = "";
    contactValue.setCustomValidity("");
  }
  syncContactInput();
});
contactValue?.addEventListener("input", () => contactValue.setCustomValidity(""));
syncContactInput();

document.querySelector("[data-lead-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("[data-whatsapp-status]");
  const formData = new FormData(form);
  const destination = getWhatsAppDestination();
  let contactText = String(formData.get("contact") || "");

  if (contactMethod?.value === "whatsapp") {
    const phoneNumber = parsePhoneNumber(contactText, {
      defaultCountry: countrySelect.value,
      extract: false,
    });

    if (
      !phoneNumber?.isValid() ||
      phoneNumber.country !== countrySelect.value
    ) {
      contactValue?.setCustomValidity(
        "Ingresa un número válido para el país seleccionado.",
      );
      contactValue?.reportValidity();
      return;
    }

    contactText = phoneNumber.number;
  }

  if (!destination) {
    a(
      "[data-whatsapp-status]",
      "Falta configurar el número de WhatsApp de destino. Tus datos no se han enviado; se abrirá WhatsApp cuando se agregue el número.",
    );
    return;
  }

  const answerDetails = o
    .map((stage, index) => {
      const level = ["Necesita trabajo", "En proceso", "Consolidado"][answers[index]];
      return `${stage.name}: ${level} (${answers[index]}/2)`;
    })
    .join("\n");
  const priorityDetails = o
    .map((stage, index) => ({ name: stage.name, score: answers[index] }))
    .sort((first, second) => first.score - second.score)
    .slice(0, 3)
    .map((stage, index) => `${index + 1}. ${stage.name} (${stage.score}/2)`)
    .join("\n");
  const message = [
    "Hola, completé el Diagnóstico Cazador.",
    `Nombre: ${formData.get("name")}`,
    `Empresa: ${formData.get("company") || "No indicada"}`,
    `${contactMethod?.value === "email" ? "Correo" : "WhatsApp"}: ${contactText}`,
    `Puntaje: ${getScore()}/14`,
    "\nRespuestas:",
    answerDetails,
    "\nMis principales oportunidades:",
    priorityDetails,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${destination}?text=${encodeURIComponent(message)}`;

  if (status) {
    status.textContent = "Abriendo WhatsApp con tu diagnóstico. Revisa el mensaje y pulsa Enviar para compartirlo.";
  }
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.querySelectorAll("[data-reset]").forEach((button) => {
  button.addEventListener("click", () => {
    questionIndex = 0;
    answers = Array(o.length).fill(null);
    if (quizQuestion) quizQuestion.hidden = false;
    if (quizResult) quizResult.hidden = true;
    const form = document.querySelector("[data-lead-form]");
    if (form instanceof HTMLFormElement) {
      form.reset();
      syncContactInput();
    }
    a("[data-whatsapp-status]", "");
    renderQuestion(true);
  });
});

renderQuestion();
