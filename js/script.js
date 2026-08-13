// Main portfolio scripts.
document.addEventListener("DOMContentLoaded", () => {
	const translations = {
		en: {
			title: "José Lucas Neto — Backend Developer",
			nav: {
				stack: "stack",
				projects: "projects",
				journey: "journey",
				contact: "contact",
				langAria: "Change language",
			},
			hero: {
				role: "Backend Developer — Java · Spring Boot · Spring AI",
				desc:
					"Computer Science student (UVA) building robust REST APIs and exploring AI integrations with Spring — from layered architecture design to migrating LLM providers in production. Heading toward the international market.",
			},
			sections: {
				stack: "Stack",
				projects: "Projects",
				journey: "Journey",
			},
			projects: {
				warn: "page under construction — new projects and updates coming soon",
				inProgress: "in progress",
				budgeting: {
					desc:
						"Personal budgeting API built with Spring AI. Fully migrated from OpenAI to Google Gemini (free tier), with audio transcription via the multimodal <code>UserMessage</code> API and text-to-speech implemented directly on top of the <code>com.google.genai.Client</code> SDK, bypassing Spring AI's abstractions.",
				},
				taskManager: {
					desc:
						"Hexagonal architecture with domain, application (use cases), and infrastructure layers. Five REST endpoints implemented and tested, documented via springdoc-openapi 3.x.",
				},
				marketplace: {
					desc:
						"Multi-module project with independent MySQL databases via Docker Compose. HAL Explorer and Spring Data REST explored in depth, with entity design decisions (<code>Address</code> as embeddable vs. its own entity) and a resolved silent bean-injection bug.",
				},
				checkout: {
					desc:
						"Hands-on application of Design Patterns: Strategy for discount calculation, Singleton for order number generation, and Facade to orchestrate the checkout flow.",
				},
				library: {
					desc:
						"A self-authored challenge featuring layered architecture, Gradle Kotlin DSL, MySQL, and Flyway, with extra focus on justifying every endpoint design decision through HTTP fundamentals.",
				},
			},
			journey: {
				1: {
					title: "Computer Science — UVA, Cabo Frio",
					desc: "Degree in progress, building a solid foundation in backend development and software architecture.",
				},
				2: {
					title: "DIO / Santander Bootcamp — Java & Spring AI",
					desc: "Hands-on projects applying Spring Boot, AI integrations, and REST API best practices.",
				},
				3: {
					title: "Professional Backend Course — Onbyte",
					desc: "Training focused on backend development, reinforcing fundamentals and industry practices.",
				},
				4: {
					title: "GitHub Student Pack — IntelliJ Ultimate",
					desc: "Active educational license, development workflow with Copilot and JetBrains tools.",
				},
				5: {
					title: "Next step — Critical Skills Employment Permit 🇮🇪",
					desc: "Preparing a technical profile in English, GitHub, and LinkedIn geared toward the European market.",
				},
			},
			contact: {
				pretitle: "// let's talk",
				title: "git commit -m \"let's build something\"",
				email: "Send email",
			},
			footer: {
				copy: "© 2026 José Lucas Neto Garcia Guimarães — handcrafted, no framework needed.",
			},
		},
		pt: {
			title: "José Lucas Neto — Desenvolvedor Backend",
			nav: {
				stack: "stack",
				projects: "projetos",
				journey: "jornada",
				contact: "contato",
				langAria: "Mudar idioma",
			},
			hero: {
				role: "Desenvolvedor Backend — Java · Spring Boot · Spring AI",
				desc:
					"Estudante de Ciência da Computação (UVA), construindo APIs REST robustas e explorando integrações de IA com Spring — de arquitetura em camadas à migração de provedores de LLM em produção. Caminhando para o mercado internacional.",
			},
			sections: {
				stack: "Stack",
				projects: "Projetos",
				journey: "Jornada",
			},
			projects: {
				warn: "página em construção — novos projetos e atualizações em breve",
				inProgress: "em andamento",
				budgeting: {
					desc:
						"API de finanças pessoais construída com Spring AI. Migração completa de OpenAI para Google Gemini (camada gratuita), com transcrição de áudio via API multimodal de <code>UserMessage</code> e text-to-speech implementado diretamente sobre o SDK <code>com.google.genai.Client</code>, contornando abstrações do Spring AI.",
				},
				taskManager: {
					desc:
						"Arquitetura hexagonal com camadas de domínio, aplicação (casos de uso) e infraestrutura. Cinco endpoints REST implementados e testados, documentados com springdoc-openapi 3.x.",
				},
				marketplace: {
					desc:
						"Projeto multi-módulo com bancos MySQL independentes via Docker Compose. HAL Explorer e Spring Data REST explorados em profundidade, com decisões de modelagem de entidade (<code>Address</code> embutido vs. entidade própria) e correção de um bug silencioso de injeção de bean.",
				},
				checkout: {
					desc:
						"Aplicação prática de Design Patterns: Strategy para cálculo de desconto, Singleton para geração do número de pedido e Facade para orquestrar o fluxo de checkout.",
				},
				library: {
					desc:
						"Desafio autoral com arquitetura em camadas, Gradle Kotlin DSL, MySQL e Flyway, com foco extra em justificar cada decisão de endpoint pelos fundamentos de HTTP.",
				},
			},
			journey: {
				1: {
					title: "Ciência da Computação — UVA, Cabo Frio",
					desc: "Graduação em andamento, construindo base sólida em desenvolvimento backend e arquitetura de software.",
				},
				2: {
					title: "Bootcamp DIO / Santander — Java & Spring AI",
					desc: "Projetos práticos aplicando Spring Boot, integrações de IA e boas práticas de API REST.",
				},
				3: {
					title: "Curso Profissional de Backend — Onbyte",
					desc: "Formação focada em desenvolvimento backend, reforçando fundamentos e práticas de mercado.",
				},
				4: {
					title: "GitHub Student Pack — IntelliJ Ultimate",
					desc: "Licença educacional ativa, fluxo de desenvolvimento com Copilot e ferramentas JetBrains.",
				},
				5: {
					title: "Próximo passo — Critical Skills Employment Permit 🇮🇪",
					desc: "Preparando perfil técnico em inglês, GitHub e LinkedIn voltado ao mercado europeu.",
				},
			},
			contact: {
				pretitle: "// vamos conversar",
				title: "git commit -m \"vamos construir algo\"",
				email: "Enviar e-mail",
			},
			footer: {
				copy: "© 2026 José Lucas Neto Garcia Guimarães — feito à mão, sem framework.",
			},
		},
	};

	const getByPath = (obj, path) =>
		path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

	const applyTranslations = (lang) => {
		const dict = translations[lang] || translations.en;

		document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
		document.title = dict.title;

		document.querySelectorAll("[data-i18n]").forEach((el) => {
			const key = el.getAttribute("data-i18n");
			const value = getByPath(dict, key);
			if (typeof value === "string") {
				el.textContent = value;
			}
		});

		document.querySelectorAll("[data-i18n-html]").forEach((el) => {
			const key = el.getAttribute("data-i18n-html");
			const value = getByPath(dict, key);
			if (typeof value === "string") {
				el.innerHTML = value;
			}
		});

		document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
			const key = el.getAttribute("data-i18n-aria");
			const value = getByPath(dict, key);
			if (typeof value === "string") {
				el.setAttribute("aria-label", value);
			}
		});

		const langToggle = document.querySelector(".lang-toggle");
		if (langToggle) {
			langToggle.textContent = lang === "pt" ? "EN" : "PT";
		}

		const langState = document.querySelector(".lang-state");
		if (langState) {
			langState.textContent = lang === "pt" ? "PT-BR" : "EN-US";
		}
	};

	const langToggle = document.querySelector(".lang-toggle");
	const langState = document.querySelector(".lang-state");
	const savedLang = localStorage.getItem("portfolio-lang");
	let currentLang = savedLang === "pt" || savedLang === "en" ? savedLang : "en";
	applyTranslations(currentLang);

	const updateLangIndicator = (lang) => {
		if (langState) {
			langState.textContent = lang === "pt" ? "PT-BR" : "EN-US";
		}
	};
	updateLangIndicator(currentLang);

	if (langToggle) {
		langToggle.addEventListener("click", () => {
			const nextLang = currentLang === "en" ? "pt" : "en";
			const fromLabel = currentLang === "pt" ? "PT" : "EN";
			const toLabel = nextLang === "pt" ? "PT" : "EN";
			langToggle.textContent = `${fromLabel} -> ${toLabel}`;

			window.setTimeout(() => {
				currentLang = nextLang;
				localStorage.setItem("portfolio-lang", currentLang);
				applyTranslations(currentLang);
				updateLangIndicator(currentLang);
			}, 130);
		});
	}

	const revealGroups = [
		document.querySelectorAll(".sec-head, .warn-banner, .contact-box"),
		document.querySelectorAll(".stack-item"),
		document.querySelectorAll(".project"),
		document.querySelectorAll(".path-item"),
	];

	const revealTargets = [];
	revealGroups.forEach((group, groupIndex) => {
		group.forEach((el, itemIndex) => {
			el.classList.add("reveal");
			const delay = Math.min(itemIndex * 55 + groupIndex * 30, 360);
			el.style.setProperty("--reveal-delay", `${delay}ms`);
			revealTargets.push(el);
		});
	});

	const observer = new IntersectionObserver(
		(entries, io) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				entry.target.classList.add("show");
				io.unobserve(entry.target);
			});
		},
		{
			threshold: 0.16,
			rootMargin: "0px 0px -40px 0px",
		}
	);

	revealTargets.forEach((el) => observer.observe(el));

	window.addEventListener(
		"scroll",
		() => {
			const y = Math.min(window.scrollY * 0.12, 28);
			document.documentElement.style.setProperty("--parallax-y", `${y}px`);
		},
		{ passive: true }
	);
});

