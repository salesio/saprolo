const page = document.body.dataset.page;
const links = [
  ["index.html", "nav_home"],
  ["about.html", "nav_about"],
  ["services.html", "nav_services"],
  ["quote.html", "nav_quote"],
  ["contact.html", "nav_contact"]
];

const flagZA = `<svg class="flag-sm" viewBox="0 0 36 24"><rect width="36" height="12" fill="#E03C31"/><rect y="12" width="36" height="12" fill="#001489"/><path d="M0,0 L16,12 L0,24 Z" fill="#000"/><path d="M0,2.5 L12.5,12 L0,21.5" fill="none" stroke="#FFB81C" stroke-width="2.5"/><path d="M0,0 L14,12 L0,24 M13,12 H36" fill="none" stroke="#fff" stroke-width="6.5"/><path d="M0,0 L14,12 L0,24 M13,12 H36" fill="none" stroke="#007749" stroke-width="4"/></svg>`;
const flagMZ = `<svg class="flag-sm" viewBox="0 0 36 24"><rect width="36" height="8" fill="#007168"/><rect y="8" width="36" height="8" fill="#000"/><rect y="16" width="36" height="8" fill="#FCE100"/><rect y="7" width="36" height="1.5" fill="#fff"/><rect y="15.5" width="36" height="1.5" fill="#fff"/><polygon points="0,0 16,12 0,24" fill="#D21034"/><polygon points="5.5,7.5 6.6,10.8 10,10.8 7.2,12.8 8.3,16 5.5,14 2.7,16 3.8,12.8 1,10.8 4.4,10.8" fill="#FCE100"/></svg>`;

const I18N = {
  en: {
    rotWords: ["Sourcing", "Supply", "Logistics", "Delivery"],
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_quote: "Get a Quote", nav_contact: "Contact",
    nav_cta: "Request a Quote →", top_hours: "Mon–Sat 07:00–18:00",
    country_za: "South Africa", country_mz: "Mozambique", city_maputo: "Maputo, Mozambique",
    ft_desc: "Sourcing, supply, logistics and delivery between South Africa and Mozambique. On time, every time.",
    ft_comp: "Company", ft_serv: "Services", ft_touch: "Get in touch",
    ft_rights: "All rights reserved.", ft_pow: "Powered by",
    // Hero & Home
    hero_tag: "South Africa ⇄ Mozambique",
    hero_h1_top: "One partner for", hero_h1_bot: "across the border.",
    hero_lead: "We source it, move it and deliver it. Procurement, freight, customs and last-mile delivery between South Africa and Mozambique, with one team accountable from order to doorstep.",
    hero_btn1: "Our Services →", hero_btn2: "Talk to us",
    stat_countries: "Countries", stat_services: "Connected services", stat_account: "Point of accountability",
    // Calculator
    calc_title: "Instant Freight Estimate", calc_sub: "Get an indicative rate in seconds.",
    calc_drop: "I'll drop at warehouse", calc_collect: "Collect from me",
    calc_from: "From", calc_to: "To", calc_l: "L (cm)", calc_w: "W (cm)", calc_h: "H (cm)", calc_qty: "Qty",
    calc_kg: "Weight per item (kg)", calc_val: "Goods value (R)",
    calc_exp: "Express", calc_frag: "Fragile", calc_ins: "Insurance", calc_btn: "Calculate Rate",
    res_total: "Estimated total", res_transit: "Transit", res_days: "days",
    res_dist: "Distance (road est.)", res_cw: "Chargeable weight", res_freight: "Freight",
    res_collect: "Door collection", res_drop: "Warehouse drop-off", res_free: "Free",
    res_border: "Border & customs handling", res_extras: "Express / fragile", res_ins: "Insurance",
    res_note: "Indicative estimate excl. VAT & duties. Final quote confirmed by our team.",
    res_book: "Book this shipment →",
    err_same: "Origin and destination must be different.",
    // Features & Home sections
    f1_t: "Sourcing", f1_d: "Vetted suppliers, best price",
    f2_t: "Supply", f2_d: "Procurement for any project",
    f3_t: "Logistics", f3_d: "Freight, customs & storage",
    f4_t: "Delivery", f4_d: "Collection to doorstep",
    why_tag: "Why SAPROLO", why_h2: "When supply stops, business stops.",
    why_p: "A missing part or a delayed load costs money every hour. We take care of finding, buying and moving what you need, so you can focus on running your business.",
    why_c1: "We understand your operation before we quote",
    why_c2: "Customs clearing at Lebombo / Ressano Garcia handled",
    why_c3: "Free drop-off at our warehouse, or we collect",
    why_c4: "Measured by what we deliver, not what we promise",
    why_btn: "About us →",
    how_tag: "How it works", how_h2: "From request to doorstep",
    s1_t: "Request", s1_d: "Tell us what you need, or get an instant estimate.",
    s2_t: "Source", s2_d: "We find, verify and buy the goods for you.",
    s3_t: "Ship & clear", s3_d: "Road freight, documents and border clearing.",
    s4_t: "Deliver", s4_d: "To your door or site, with proof of delivery.",
    cor_tag: "The Maputo Corridor", cor_h2: "The shortest route from Gauteng to the sea",
    cor_p: "We run along one of Southern Africa's busiest trade routes, the N4, which links South Africa's industrial heartland to the Port of Maputo.",
    st1: "Gauteng hub", st2: "N4 toll route", st3: "SA border post", st4: "MZ border post", st5: "Port & city",
    fc1: "Johannesburg to Maputo by road", fc2_b: "1 border", fc2: "Clearing handled for you", fc3_b: "Port access", fc3: "Deep-water Port of Maputo",
    ind_tag: "Industries", ind_h2: "What we move",
    in1: "Construction materials", in2: "Mining equipment", in3: "Electrical & solar", in4: "Agriculture", in5: "Vehicle parts", in6: "Food & beverage", in7: "PPE & tools", in8: "Retail stock", in9: "Machinery",
    cmp_tag: "Compliance", cmp_h2: "Paperwork, sorted",
    cm1: "Customs clearing", cm2: "Import & export documents", cm3: "Contra Marca (MZ)", cm4: "SADC certificates", cm5: "Permits", cm6: "Duty & duty-free", cm7: "Cargo insurance",
    cta_h2: "Tell us what you need. We'll handle the rest.", cta_p: "Get a solution and a price. No obligation.",
    cta_b1: "Request a Quote →", cta_b2: "WhatsApp us",
    // About
    ab_tag: "About us", ab_h1: "Connecting two economies", ab_bc: "Home › About",
    ab_who_tag: "Who we are", ab_who_h2: "Your procurement & logistics partner",
    ab_who_p1: "SAPROLO is a procurement and logistics company operating between South Africa and Mozambique. We help businesses, projects and individuals source products, move them safely across the border and deliver them where they're needed.",
    ab_who_p2: "Our work is built around the Maputo Development Corridor, one of the busiest trade routes in Southern Africa, linking Gauteng to the Port of Maputo.",
    ab_c1: "Reliable, transparent and on time", ab_c2: "Local teams on both sides of the border", ab_c3: "Powered by Clapsa",
    ab_st1: "Countries served", ab_st2: "Cities covered", ab_st3: "Connected services", ab_st4: "Point of accountability",
    ab_val_tag: "Our values", ab_val_h2: "How we work",
    ab_m_t: "Mission", ab_m_d: "To make cross-border trade between South Africa and Mozambique simple, reliable and affordable, from sourcing to delivery.",
    ab_v_t: "Vision", ab_v_d: "To be the most trusted procurement and logistics partner on the Maputo Corridor.",
    ab_v1_t: "Delivery first", ab_v1_d: "Measured by what is delivered, not what is promised.",
    ab_v2_t: "Ownership", ab_v2_d: "One team owns the outcome, start to finish.",
    ab_v3_t: "Transparency", ab_v3_d: "Clear prices and honest timelines.",
    ab_v4_t: "Safety", ab_v4_d: "Your cargo, handled with care and insured.",
    ab_band_h2: "Let's work together", ab_band_p: "Tell us what you need moved.", ab_band_btn: "Contact us →",
    // Services
    sv_tag: "Services", sv_h1: "Everything your supply chain needs", sv_bc: "Home › Services",
    sv1_tag: "01 · Sourcing", sv1_h2: "The right products at the right price",
    sv1_p: "We find and vet suppliers in South Africa and beyond, compare prices and check quality before anything ships.",
    sv1_c1: "Supplier search & verification", sv1_c2: "Price negotiation", sv1_c3: "Quality inspection",
    sv2_tag: "02 · Supply", sv2_h2: "Procurement for business & projects",
    sv2_p: "Construction materials, equipment, retail stock or spare parts. We buy, consolidate and supply on your behalf.",
    sv2_c1: "Bulk and project procurement", sv2_c2: "Order consolidation", sv2_c3: "Scheduled supply contracts",
    sv3_tag: "03 · Logistics", sv3_h2: "Cross-border freight & customs",
    sv3_p: "Full and part loads by road, warehousing, and customs clearance through the Lebombo / Ressano Garcia border.",
    sv3_c1: "FTL & LTL road freight", sv3_c2: "Customs clearing & documentation", sv3_c3: "Secure warehousing",
    sv4_tag: "04 · Delivery", sv4_h2: "Collection & last-mile delivery",
    sv4_p: "Drop your goods at our warehouse or let us collect. We deliver to homes, shops and project sites.",
    sv4_c1: "Door-to-door collection", sv4_c2: "Express options", sv4_c3: "Proof of delivery", sv4_btn: "Get a quote →",
    // Quote
    qt_tag: "Quote", qt_h1: "Instant freight estimate", qt_bc: "Home › Get a Quote",
    qt_how_tag: "How pricing works", qt_how_h2: "Transparent, fair rates",
    qt_how_p: "Your rate is based on road distance and chargeable weight, which is the higher of the actual weight and the volumetric weight (L × W × H ÷ 5000).",
    qt_c1: "Free drop-off at our warehouse", qt_c2: "Door collection available", qt_c3: "Border & customs handling included for cross-border routes", qt_c4: "Optional express, fragile handling and insurance",
    qt_note: "Estimates exclude VAT and import duties. Our team will confirm the final quote.",
    // Contact
    ct_tag: "Contact", ct_h1: "Let's talk logistics", ct_bc: "Home › Contact",
    ct_get_tag: "Get in touch", ct_get_h2: "We reply within one business day",
    ct_phone_lbl: "Phone / WhatsApp", ct_email_lbl: "Email",
    cf_title: "Send a message", cf_name: "Name", cf_phone: "Phone", cf_email: "Email", cf_service: "Service",
    cf_opt1: "Logistics / Freight", cf_opt2: "Sourcing", cf_opt3: "Supply / Procurement", cf_opt4: "Delivery",
    cf_msg: "Message", cf_btn: "Send Message",
    cf_thanks_h3: "Thank you!", cf_thanks_p: "We received your message and will get back to you shortly.",
    cf_prefill: (r, e) => `Hi, I'd like to book a shipment: ${r} (online estimate R ${e}).`
  },
  pt: {
    rotWords: ["Procura", "Fornecimento", "Logística", "Entrega"],
    nav_home: "Início", nav_about: "Sobre", nav_services: "Serviços", nav_quote: "Cotação", nav_contact: "Contacto",
    nav_cta: "Pedir Cotação →", top_hours: "Seg–Sáb 07:00–18:00",
    country_za: "África do Sul", country_mz: "Moçambique", city_maputo: "Maputo, Moçambique",
    ft_desc: "Procura, fornecimento, logística e entrega entre a África do Sul e Moçambique. A tempo, sempre.",
    ft_comp: "Empresa", ft_serv: "Serviços", ft_touch: "Contactos",
    ft_rights: "Todos os direitos reservados.", ft_pow: "Desenvolvido por",
    // Hero & Home
    hero_tag: "África do Sul ⇄ Moçambique",
    hero_h1_top: "Um único parceiro para", hero_h1_bot: "além-fronteiras.",
    hero_lead: "Procuramos, transportamos e entregamos. Compras, carga rodoviária, alfândega e entrega porta-a-porta entre a África do Sul e Moçambique, com uma equipa responsável do pedido à entrega.",
    hero_btn1: "Nossos Serviços →", hero_btn2: "Fale connosco",
    stat_countries: "Países", stat_services: "Serviços integrados", stat_account: "Ponto de responsabilidade",
    // Calculator
    calc_title: "Cálculo Imediato de Frete", calc_sub: "Obtenha uma estimativa em segundos.",
    calc_drop: "Entrego no armazém", calc_collect: "Recolher no meu local",
    calc_from: "Origem", calc_to: "Destino", calc_l: "C (cm)", calc_w: "L (cm)", calc_h: "A (cm)", calc_qty: "Qtd",
    calc_kg: "Peso por item (kg)", calc_val: "Valor da carga (R)",
    calc_exp: "Expresso", calc_frag: "Frágil", calc_ins: "Seguro", calc_btn: "Calcular Tarifa",
    res_total: "Total estimado", res_transit: "Trânsito", res_days: "dias",
    res_dist: "Distância (est. estrada)", res_cw: "Peso taxável", res_freight: "Frete base",
    res_collect: "Recolha ao domicílio", res_drop: "Entrega no armazém", res_free: "Grátis",
    res_border: "Fronteira e desembaraço", res_extras: "Expresso / frágil", res_ins: "Seguro",
    res_note: "Estimativa indicativa s/ IVA e direitos aduaneiros. Cotação final confirmada pela equipa.",
    res_book: "Reservar este envio →",
    err_same: "A origem e o destino devem ser diferentes.",
    // Features & Home sections
    f1_t: "Procura", f1_d: "Fornecedores verificados, melhor preço",
    f2_t: "Fornecimento", f2_d: "Aquisição para qualquer projeto",
    f3_t: "Logística", f3_d: "Transporte, alfândega e armazém",
    f4_t: "Entrega", f4_d: "Da recolha até à sua porta",
    why_tag: "Porquê a SAPROLO", why_h2: "Quando o fornecimento pára, o negócio pára.",
    why_p: "Uma peça em falta ou uma carga atrasada custa dinheiro a cada hora. Tratamos de encontrar, comprar e transportar o que precisa, para que se foque no seu negócio.",
    why_c1: "Compreendemos a sua operação antes de cotar",
    why_c2: "Desembaraço aduaneiro em Lebombo / Ressano Garcia incluído",
    why_c3: "Entrega gratuita no nosso armazém ou recolha no local",
    why_c4: "Medidos pelo que entregamos, não pelo que prometemos",
    why_btn: "Sobre nós →",
    how_tag: "Como funciona", how_h2: "Do pedido até à sua porta",
    s1_t: "Pedido", s1_d: "Diga-nos o que precisa ou calcule já online.",
    s2_t: "Procura", s2_d: "Encontramos, verificamos e compramos por si.",
    s3_t: "Transporte", s3_d: "Frete rodoviário, documentos e fronteira.",
    s4_t: "Entrega", s4_d: "Na sua porta ou obra, com comprovativo.",
    cor_tag: "O Corredor de Maputo", cor_h2: "A rota mais curta de Gauteng até ao mar",
    cor_p: "Operamos numa das rotas comerciais mais movimentadas da África Austral, a N4, ligando o centro industrial da África do Sul ao Porto de Maputo.",
    st1: "Centro de Gauteng", st2: "Rota N4", st3: "Fronteira SA", st4: "Fronteira MZ", st5: "Porto e cidade",
    fc1: "Joanesburgo a Maputo por estrada", fc2_b: "1 fronteira", fc2: "Desembaraço tratado por nós", fc3_b: "Acesso portuário", fc3: "Porto de águas profundas de Maputo",
    ind_tag: "Indústrias", ind_h2: "O que transportamos",
    in1: "Materiais de construção", in2: "Equipamento mineiro", in3: "Elétrico e solar", in4: "Agricultura", in5: "Peças automóveis", in6: "Alimentação e bebidas", in7: "EPI e ferramentas", in8: "Stock comercial", in9: "Maquinaria",
    cmp_tag: "Conformidade", cmp_h2: "Documentação resolvida",
    cm1: "Desembaraço aduaneiro", cm2: "Documentos de importação e exportação", cm3: "Contra Marca (MZ)", cm4: "Certificados SADC", cm5: "Licenças", cm6: "Com e sem direitos", cm7: "Seguro de carga",
    cta_h2: "Diga-nos o que precisa. Nós tratamos do resto.", cta_p: "Receba uma solução e um preço. Sem compromisso.",
    cta_b1: "Pedir Cotação →", cta_b2: "WhatsApp",
    // About
    ab_tag: "Sobre nós", ab_h1: "A ligar duas economias", ab_bc: "Início › Sobre",
    ab_who_tag: "Quem somos", ab_who_h2: "O seu parceiro de compras e logística",
    ab_who_p1: "A SAPROLO é uma empresa de procurement e logística que opera entre a África do Sul e Moçambique. Ajudamos empresas, projetos e particulares a encontrar produtos, transportá-los em segurança além-fronteiras e entregá-los onde são necessários.",
    ab_who_p2: "O nosso trabalho centra-se no Corredor de Desenvolvimento de Maputo, uma das rotas comerciais mais ativas da África Austral, ligando Gauteng ao Porto de Maputo.",
    ab_c1: "Fiável, transparente e pontual", ab_c2: "Equipas locais em ambos os lados da fronteira", ab_c3: "Powered by Clapsa",
    ab_st1: "Países atendidos", ab_st2: "Cidades cobertas", ab_st3: "Serviços integrados", ab_st4: "Ponto de responsabilidade",
    ab_val_tag: "Nossos valores", ab_val_h2: "Como trabalhamos",
    ab_m_t: "Missão", ab_m_d: "Tornar o comércio transfronteiriço entre a África do Sul e Moçambique simples, fiável e acessível, da procura à entrega.",
    ab_v_t: "Visão", ab_v_d: "Ser o parceiro de procurement e logística mais confiável no Corredor de Maputo.",
    ab_v1_t: "Entrega primeiro", ab_v1_d: "Medidos pelo que é entregue, não pelo que é prometido.",
    ab_v2_t: "Responsabilidade", ab_v2_d: "Uma única equipa assume o resultado do início ao fim.",
    ab_v3_t: "Transparência", ab_v3_d: "Preços claros e prazos honestos.",
    ab_v4_t: "Segurança", ab_v4_d: "A sua carga tratada com cuidado e seguro.",
    ab_band_h2: "Vamos trabalhar juntos", ab_band_p: "Diga-nos o que precisa transportar.", ab_band_btn: "Contacte-nos →",
    // Services
    sv_tag: "Serviços", sv_h1: "Tudo o que a sua cadeia de fornecimento precisa", sv_bc: "Início › Serviços",
    sv1_tag: "01 · Procura", sv1_h2: "Os produtos certos ao melhor preço",
    sv1_p: "Encontramos e avaliamos fornecedores na África do Sul e no exterior, comparamos preços e verificamos a qualidade antes do envio.",
    sv1_c1: "Pesquisa e verificação de fornecedores", sv1_c2: "Negociação de preços", sv1_c3: "Inspeção de qualidade",
    sv2_tag: "02 · Fornecimento", sv2_h2: "Compras para empresas e projetos",
    sv2_p: "Materiais de construção, equipamentos, stock de retalho ou peças sobressalentes. Compramos, consolidamos e fornecemos em seu nome.",
    sv2_c1: "Compras a granel e para projetos", sv2_c2: "Consolidação de encomendas", sv2_c3: "Contratos de fornecimento regular",
    sv3_tag: "03 · Logística", sv3_h2: "Transporte transfronteiriço e alfândega",
    sv3_p: "Cargas completas e grupagem rodoviária, armazenagem e desembaraço aduaneiro na fronteira de Lebombo / Ressano Garcia.",
    sv3_c1: "Carga completa (FTL) e consolidada (LTL)", sv3_c2: "Desembaraço aduaneiro e documentação", sv3_c3: "Armazenagem segura",
    sv4_tag: "04 · Entrega", sv4_h2: "Recolha e entrega porta-a-porta",
    sv4_p: "Deixe a mercadoria no nosso armazém ou nós recolhemos. Entregamos em residências, lojas e estaleiros de obra.",
    sv4_c1: "Recolha porta-a-porta", sv4_c2: "Opções expresso", sv4_c3: "Comprovativo de entrega", sv4_btn: "Pedir cotação →",
    // Quote
    qt_tag: "Cotação", qt_h1: "Cálculo imediato de frete", qt_bc: "Início › Cotação",
    qt_how_tag: "Como funcionam os preços", qt_how_h2: "Tarifas justas e transparentes",
    qt_how_p: "A tarifa baseia-se na distância rodoviária e no peso taxável, sendo considerado o maior valor entre o peso real e o peso volumétrico (C × L × A ÷ 5000).",
    qt_c1: "Entrega gratuita no nosso armazém", qt_c2: "Recolha ao domicílio disponível", qt_c3: "Fronteira e alfândega incluídas nas rotas internacionais", qt_c4: "Opções de envio expresso, carga frágil e seguro",
    qt_note: "As estimativas excluem IVA e direitos de importação. A nossa equipa confirmará a cotação final.",
    // Contact
    ct_tag: "Contacto", ct_h1: "Vamos falar de logística", ct_bc: "Início › Contacto",
    ct_get_tag: "Fale connosco", ct_get_h2: "Respondemos em um dia útil",
    ct_phone_lbl: "Telefone / WhatsApp", ct_email_lbl: "E-mail",
    cf_title: "Enviar mensagem", cf_name: "Nome", cf_phone: "Telefone", cf_email: "E-mail", cf_service: "Serviço",
    cf_opt1: "Logística / Transporte", cf_opt2: "Procura (Sourcing)", cf_opt3: "Fornecimento / Compras", cf_opt4: "Entrega",
    cf_msg: "Mensagem", cf_btn: "Enviar Mensagem",
    cf_thanks_h3: "Obrigado!", cf_thanks_p: "Recebemos a sua mensagem e entraremos em contacto brevemente.",
    cf_prefill: (r, e) => `Olá, gostaria de reservar um envio: ${r} (estimativa online R ${e}).`
  },
  af: {
    rotWords: ["Verkryging", "Voorsiening", "Logistiek", "Aflewering"],
    nav_home: "Tuis", nav_about: "Oor Ons", nav_services: "Dienste", nav_quote: "Kwotasie", nav_contact: "Kontak",
    nav_cta: "Kry 'n Kwotasie →", top_hours: "Maan–Sat 07:00–18:00",
    country_za: "Suid-Afrika", country_mz: "Mosambiek", city_maputo: "Maputo, Mosambiek",
    ft_desc: "Verkryging, voorsiening, logistiek en aflewering tussen Suid-Afrika en Mosambiek. Betyds, elke keer.",
    ft_comp: "Maatskappy", ft_serv: "Dienste", ft_touch: "Kontak ons",
    ft_rights: "Alle regte voorbehou.", ft_pow: "Aangedryf deur",
    // Hero & Home
    hero_tag: "Suid-Afrika ⇄ Mosambiek",
    hero_h1_top: "Een vennoot vir", hero_h1_bot: "oor die grens.",
    hero_lead: "Ons verkry dit, vervoer dit en lewer dit af. Aankope, padvrag, doeane en aflewering tussen Suid-Afrika en Mosambiek, met een span verantwoordelik van bestelling tot voordeur.",
    hero_btn1: "Ons Dienste →", hero_btn2: "Praat met ons",
    stat_countries: "Lande", stat_services: "Geïntegreerde dienste", stat_account: "Punt van verantwoordelikheid",
    // Calculator
    calc_title: "Direkte Vragskatting", calc_sub: "Kry 'n beraamde tarief binne sekondes.",
    calc_drop: "Ek laai by pakhuis af", calc_collect: "Tel by my op",
    calc_from: "Van", calc_to: "Na", calc_l: "L (cm)", calc_w: "B (cm)", calc_h: "H (cm)", calc_qty: "Aantal",
    calc_kg: "Gewig per item (kg)", calc_val: "Goederewaarde (R)",
    calc_exp: "Spoed", calc_frag: "Breekbaar", calc_ins: "Versekering", calc_btn: "Bereken Tarief",
    res_total: "Beraamde totaal", res_transit: "Vervoertyd", res_days: "dae",
    res_dist: "Afstand (padberaming)", res_cw: "Belasbare gewig", res_freight: "Vragkoste",
    res_collect: "Deur-opteldiens", res_drop: "Pakhuis-aflaai", res_free: "Gratis",
    res_border: "Grens- & doeanehantering", res_extras: "Spoed / breekbaar", res_ins: "Versekering",
    res_note: "Aanduidende skatting BTW en heffings uitgesluit. Finale kwotasie word deur ons span bevestig.",
    res_book: "Bespreek hierdie vrag →",
    err_same: "Oorsprong en bestemming moet verskil.",
    // Features & Home sections
    f1_t: "Verkryging", f1_d: "Gekeurde verskaffers, beste prys",
    f2_t: "Voorsiening", f2_d: "Aankope vir enige projek",
    f3_t: "Logistiek", f3_d: "Vrag, doeane & berging",
    f4_t: "Aflewering", f4_d: "Van optel tot by jou deur",
    why_tag: "Waarom SAPROLO", why_h2: "Wanneer voorraad stop, stop besigheid.",
    why_p: "'n Ontbrekende onderdeel of 'n vertraagde vrag kos elke uur geld. Ons sorg vir die opspoor, aankoop en vervoer van wat jy nodig het, sodat jy op jou besigheid kan fokus.",
    why_c1: "Ons verstaan jou bedryf voordat ons kwoteer",
    why_c2: "Doeaneklaring by Lebombo / Ressano Garcia ingesluit",
    why_c3: "Gratis aflaai by ons pakhuis, of ons tel op",
    why_c4: "Gemeet aan wat ons lewer, nie wat ons belowe nie",
    why_btn: "Oor ons →",
    how_tag: "Hoe dit werk", how_h2: "Van versoek tot voordeur",
    s1_t: "Versoek", s1_d: "Vertel ons wat jy nodig het, of kry 'n direkte skatting.",
    s2_t: "Verkry", s2_d: "Ons vind, kontroleer en koop die goedere vir jou.",
    s3_t: "Versend & klaar", s3_d: "Padvrag, dokumentasie en grensklaring.",
    s4_t: "Lewer af", s4_d: "Tot by jou deur of perseel, met afleweringsbewys.",
    cor_tag: "Die Maputo-korridor", cor_h2: "Die kortste roete vanaf Gauteng na die see",
    cor_p: "Ons ry langs een van Suider-Afrika se besigste handelsroetes, die N4, wat Suid-Afrika se nywerheidshartland met die Maputo-hawe verbind.",
    st1: "Gauteng-kern", st2: "N4-tolroete", st3: "SA grenspos", st4: "MZ grenspos", st5: "Hawe & stad",
    fc1: "Johannesburg na Maputo per pad", fc2_b: "1 grens", fc2: "Klaring vir jou hanteer", fc3_b: "Hawetoegang", fc3: "Diepwaterhawe van Maputo",
    ind_tag: "Bedrywe", ind_h2: "Wat ons vervoer",
    in1: "Boumateriaal", in2: "Myntoerusting", in3: "Elektries & sonkrag", in4: "Landbou", in5: "Voertuigonderdele", in6: "Voedsel & drank", in7: "PBT & gereedskap", in8: "Kleinhandelvoorraad", in9: "Masjinerie",
    cmp_tag: "Nakoming", cmp_h2: "Papierwerk, uitgesorteer",
    cm1: "Doeaneklaring", cm2: "Invoer- & uitvoerdokumente", cm3: "Contra Marca (MZ)", cm4: "SAOG-sertifikate", cm5: "Permitte", cm6: "Belasbaar & belastingvry", cm7: "Vragversekering",
    cta_h2: "Vertel ons wat jy nodig het. Ons hanteer die res.", cta_p: "Kry 'n oplossing en 'n prys. Geen verpligting nie.",
    cta_b1: "Kry 'n Kwotasie →", cta_b2: "WhatsApp ons",
    // About
    ab_tag: "Oor ons", ab_h1: "Ons verbind twee ekonomieë", ab_bc: "Tuis › Oor Ons",
    ab_who_tag: "Wie ons is", ab_who_h2: "Jou verkrygings- en logistieke vennoot",
    ab_who_p1: "SAPROLO is 'n verkrygings- en logistieke maatskappy wat tussen Suid-Afrika en Mosambiek werk. Ons help besighede, projekte en individue om produkte te verkry, veilig oor die grens te vervoer en af te lewer waar dit nodig is.",
    ab_who_p2: "Ons werk sentreer rondom die Maputo-ontwikkelingskorridor, een van die besigste handelsroetes in Suider-Afrika wat Gauteng met die Maputo-hawe verbind.",
    ab_c1: "Betroubaar, deursigtig en betyds", ab_c2: "Plaaslike spanne aan albei kante van die grens", ab_c3: "Aangedryf deur Clapsa",
    ab_st1: "Lande bedien", ab_st2: "Stede gedek", ab_st3: "Geïntegreerde dienste", ab_st4: "Punt van verantwoordelikheid",
    ab_val_tag: "Ons waardes", ab_val_h2: "Hoe ons werk",
    ab_m_t: "Missie", ab_m_d: "Om oorgrenshandel tussen Suid-Afrika en Mosambiek eenvoudig, betroubaar en bekostigbaar te maak, van verkryging tot aflewering.",
    ab_v_t: "Visie", ab_v_d: "Om die mees betroubare verkrygings- en logistieke vennoot op die Maputo-korridor te wees.",
    ab_v1_t: "Aflewering eerste", ab_v1_d: "Gemeet aan wat gelewer word, nie wat belowe word nie.",
    ab_v2_t: "Eienaarskap", ab_v2_d: "Een span aanvaar verantwoordelikheid van begin tot einde.",
    ab_v3_t: "Deursigtigheid", ab_v3_d: "Duidelike pryse en eerlike tydlyne.",
    ab_v4_t: "Veiligheid", ab_v4_d: "Jou vrag word met sorg hanteer en verseker.",
    ab_band_h2: "Kom ons werk saam", ab_band_p: "Vertel ons wat jy vervoer wil hê.", ab_band_btn: "Kontak ons →",
    // Services
    sv_tag: "Dienste", sv_h1: "Alles wat jou voorsieningsketting nodig het", sv_bc: "Tuis › Dienste",
    sv1_tag: "01 · Verkryging", sv1_h2: "Die regte produkte teen die regte prys",
    sv1_p: "Ons vind en keur verskaffers in Suid-Afrika en verder, vergelyk pryse en kontroleer gehalte voordat enigiets versend word.",
    sv1_c1: "Verskaffersoektog & verifikasie", sv1_c2: "Prysonderhandeling", sv1_c3: "Gehalte-inspeksie",
    sv2_tag: "02 · Voorsiening", sv2_h2: "Aankope vir besighede & projekte",
    sv2_p: "Boumateriaal, toerusting, kleinhandelvoorraad of onderdele. Ons koop, konsolideer en voorsien namens jou.",
    sv2_c1: "Grootmaat- en projekaankope", sv2_c2: "Bestellingkonsolidasie", sv2_c3: "Geskeduleerde leweringskontrakte",
    sv3_tag: "03 · Logistiek", sv3_h2: "Oorgrensvrag & doeane",
    sv3_p: "Volle en deelladings per pad, pakhuisberging en doeaneklaring deur die Lebombo / Ressano Garcia-grenspos.",
    sv3_c1: "FTL- & LTL-padvrag", sv3_c2: "Doeaneklaring & dokumentasie", sv3_c3: "Veilige pakhuisberging",
    sv4_tag: "04 · Aflewering", sv4_h2: "Optel & laaste-myl aflewering",
    sv4_p: "Laai jou goedere by ons pakhuis af of laat ons dit optel. Ons lewer af by huise, winkels en projekterreine.",
    sv4_c1: "Deur-tot-deur opteldiens", sv4_c2: "Spoedopsies", sv4_c3: "Afleweringsbewys", sv4_btn: "Kry 'n kwotasie →",
    // Quote
    qt_tag: "Kwotasie", qt_h1: "Direkte vragskatting", qt_bc: "Tuis › Kwotasie",
    qt_how_tag: "Hoe pryse werk", qt_how_h2: "Deursigtige, billike tariewe",
    qt_how_p: "Jou tarief is gebaseer op padafstand en belasbare gewig, wat die hoogste is van die werklike gewig en die volumetriese gewig (L × B × H ÷ 5000).",
    qt_c1: "Gratis aflaai by ons pakhuis", qt_c2: "Deur-opteldiens beskikbaar", qt_c3: "Grens- en doeanehantering ingesluit vir oorgrensroetes", qt_c4: "Opsionele spoeddiens, breekbare hantering en versekering",
    qt_note: "Skattings sluit BTW en invoerbelasting uit. Ons span sal die finale kwotasie bevestig.",
    // Contact
    ct_tag: "Kontak", ct_h1: "Kom ons praat logistiek", ct_bc: "Tuis › Kontak",
    ct_get_tag: "Kontak ons", ct_get_h2: "Ons antwoord binne een werksdag",
    ct_phone_lbl: "Telefoon / WhatsApp", ct_email_lbl: "E-pos",
    cf_title: "Stuur 'n boodskap", cf_name: "Naam", cf_phone: "Telefoon", cf_email: "E-pos", cf_service: "Diens",
    cf_opt1: "Logistiek / Vrag", cf_opt2: "Verkryging (Sourcing)", cf_opt3: "Voorsiening / Aankope", cf_opt4: "Aflewering",
    cf_msg: "Boodskap", cf_btn: "Stuur Boodskap",
    cf_thanks_h3: "Dankie!", cf_thanks_p: "Ons het jou boodskap ontvang en sal binnekort met jou in verbinding tree.",
    cf_prefill: (r, e) => `Hallo, ek wil graag 'n besending bespreek: ${r} (aanlyn skatting R ${e}).`
  }
};

let lang = localStorage.getItem("saprolo_lang");
if (!I18N[lang]) lang = "en";
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;

const icPhone = `<svg class="ic-inl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
const icMail = `<svg class="ic-inl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const socialLinks = `<div class="socials">
  <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
  <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
  <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
</div>`;

document.getElementById("header").outerHTML = `
<div class="topbar"><div class="container">
  <div><span>${flagZA}<span data-i18n="country_za">South Africa</span> <b>|</b> ${flagMZ}<span data-i18n="country_mz">Mozambique</span></span><span><a href="mailto:info@saprolo.co.za">${icMail}info@saprolo.co.za</a></span></div>
  <div style="display:flex;align-items:center"><span>${icPhone}<a href="tel:+27717629659">(+27) 71 762 9659</a> / <a href="tel:+27115348554">(011) 534 8554</a></span><span data-i18n="top_hours">Mon–Sat 07:00–18:00</span>${socialLinks}</div>
</div></div>
<header class="site"><div class="container">
  <a class="brand" href="index.html"><img src="assets/logo.jpg" alt="SAPROLO Procurement & Logistics"></a>
  <nav class="main" id="nav">${links.map(([h,k])=>`<a href="${h}" class="${h.startsWith(page)?"active":""}" data-i18n="${k}">${t(k)}</a>`).join("")}</nav>
  <div class="head-right">
    <div class="lang-switch" role="group" aria-label="Language">
      <button type="button" data-lang="en">EN</button>
      <button type="button" data-lang="pt">PT</button>
      <button type="button" data-lang="af">AF</button>
    </div>
    <a class="btn btn-primary" href="quote.html" data-i18n="nav_cta">Request a Quote →</a>
    <button class="burger" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
  </div>
</div></header>`;

document.getElementById("footer").outerHTML = `
<footer><div class="container">
  <div class="cols">
    <div><img class="flogo" src="assets/logo.jpg" alt="SAPROLO"><p data-i18n="ft_desc">Sourcing, supply, logistics and delivery between South Africa and Mozambique. On time, every time.</p>${socialLinks}</div>
    <div><h4 data-i18n="ft_comp">Company</h4><ul>${links.map(([h,k])=>`<li><a href="${h}" data-i18n="${k}">${t(k)}</a></li>`).join("")}</ul></div>
    <div><h4 data-i18n="ft_serv">Services</h4><ul><li><a href="services.html#sourcing" data-i18n="f1_t">Sourcing</a></li><li><a href="services.html#supply" data-i18n="f2_t">Supply</a></li><li><a href="services.html#logistics" data-i18n="f3_t">Logistics</a></li><li><a href="services.html#delivery" data-i18n="f4_t">Delivery</a></li></ul></div>
    <div><h4 data-i18n="ft_touch">Get in touch</h4><ul><li>${flagZA}128 11th Street, Parkmore, Sandton, JHB, 2196</li><li>${flagMZ}<span data-i18n="city_maputo">Maputo, Mozambique</span></li><li>${icPhone}<a href="tel:+27717629659">(+27) 71 762 9659</a> / <a href="tel:+27115348554">(011) 534 8554</a></li><li>${icMail}<a href="mailto:info@saprolo.co.za">info@saprolo.co.za</a></li></ul></div>
  </div>
  <div class="bottom"><span>© ${new Date().getFullYear()} SAPROLO Procurement & Logistics. <span data-i18n="ft_rights">All rights reserved.</span></span><span><span data-i18n="ft_pow">Powered by</span> <b>Clapsa</b></span></div>
</div></footer>`;

// Rotating hero word
const rot = document.getElementById("rot");
let rotIdx = 0;
if (rot) {
  setInterval(() => {
    const w = t("rotWords");
    rot.classList.add("out");
    setTimeout(() => { rot.textContent = w[rotIdx = (rotIdx + 1) % w.length]; rot.classList.remove("out"); }, 350);
  }, 2600);
}

// Scroll reveal
const rev = () => document.querySelectorAll(".reveal:not(.in)").forEach(el => { if (el.getBoundingClientRect().top < innerHeight * 0.95) el.classList.add("in"); });
const io = new IntersectionObserver(es => { es.forEach(e => (e.isIntersecting || e.boundingClientRect.top < innerHeight) && e.target.classList.add("in")); rev(); }, {threshold:.05});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
addEventListener("scroll", rev, {passive:true}); rev();

// ---------------- Rate calculator ----------------
const CITIES = {
  "Johannesburg, SA":[-26.20,28.05],"Pretoria, SA":[-25.75,28.19],"Durban, SA":[-29.86,31.03],
  "Cape Town, SA":[-33.92,18.42],"Gqeberha, SA":[-33.96,25.60],"Bloemfontein, SA":[-29.12,26.21],
  "Mbombela (Nelspruit), SA":[-25.47,30.97],"Polokwane, SA":[-23.90,29.45],"Komatipoort, SA":[-25.43,31.95],
  "Maputo, MZ":[-25.97,32.57],"Matola, MZ":[-25.96,32.46],"Xai-Xai, MZ":[-25.05,33.64],
  "Inhambane, MZ":[-23.86,35.38],"Beira, MZ":[-19.84,34.84],"Chimoio, MZ":[-19.12,33.48],
  "Tete, MZ":[-16.16,33.59],"Quelimane, MZ":[-17.88,36.89],"Nampula, MZ":[-15.12,39.27],"Pemba, MZ":[-12.97,40.52]
};
function km(a,b){const R=6371,r=x=>x*Math.PI/180,[la1,lo1]=CITIES[a],[la2,lo2]=CITIES[b];
  const d=Math.sin(r(la2-la1)/2)**2+Math.cos(r(la1))*Math.cos(r(la2))*Math.sin(r(lo2-lo1)/2)**2;
  return Math.round(2*R*Math.asin(Math.sqrt(d))*1.25)}
const zar = n => "R " + n.toLocaleString("en-ZA",{minimumFractionDigits:2,maximumFractionDigits:2});

function renderCalcResult(form){
  const f = Object.fromEntries(new FormData(form));
  const out = form.querySelector(".result");
  if (f.from === f.to) { alert(t("err_same")); return; }
  const dist = km(f.from, f.to);
  const qty = Math.max(1, +f.qty || 1);
  const vol = (+f.l * +f.w * +f.h) / 5000;
  const actual = +f.kg || 0;
  const charge = Math.max(actual, vol) * qty;
  const cross = f.from.slice(-2) !== f.to.slice(-2);
  let base = 150 + dist * 2.1 + charge * (4 + dist * 0.004);
  const pickup = f.mode === "collect" ? 250 + charge * 0.8 : 0;
  const border = cross ? 650 : 0;
  let extras = 0;
  if (form.express?.checked) extras += base * 0.35;
  if (form.fragile?.checked) extras += base * 0.12;
  const insurance = form.insure?.checked ? Math.max(80, (+f.value || 0) * 0.015) : 0;
  const total = base + pickup + border + extras + insurance;
  const days = Math.max(1, Math.ceil(dist / 550)) + (cross ? 1 : 0) - (form.express?.checked ? 1 : 0);
  out.innerHTML = `
    <div class="total"><div><small>${t("res_total")}</small><br><b>${zar(total)}</b></div>
    <div style="text-align:right"><small>${t("res_transit")}</small><br><strong>${Math.max(1,days)}–${Math.max(1,days)+1} ${t("res_days")}</strong></div></div>
    <dl>
      <dt>${t("res_dist")}</dt><dd>${dist.toLocaleString()} km</dd>
      <dt>${t("res_cw")}</dt><dd>${charge.toFixed(1)} kg</dd>
      <dt>${t("res_freight")}</dt><dd>${zar(base)}</dd>
      <dt>${f.mode==="collect"?t("res_collect"):t("res_drop")}</dt><dd>${pickup?zar(pickup):t("res_free")}</dd>
      ${cross?`<dt>${t("res_border")}</dt><dd>${zar(border)}</dd>`:""}
      ${extras?`<dt>${t("res_extras")}</dt><dd>${zar(extras)}</dd>`:""}
      ${insurance?`<dt>${t("res_ins")}</dt><dd>${zar(insurance)}</dd>`:""}
    </dl>
    <p class="note">${t("res_note")}</p>
    <a class="btn" href="contact.html?route=${encodeURIComponent(f.from+" → "+f.to)}&est=${Math.round(total)}">${t("res_book")}</a>`;
  out.classList.add("show");
}

function initCalc(form){
  const opts = Object.keys(CITIES).map(c=>`<option>${c}</option>`).join("");
  form.querySelector("[name=from]").innerHTML = opts;
  form.querySelector("[name=to]").innerHTML = opts;
  form.from.value = "Johannesburg, SA"; form.to.value = "Maputo, MZ";
  form.addEventListener("submit", e => { e.preventDefault(); renderCalcResult(form); });
}
document.querySelectorAll("form.calc").forEach(initCalc);

// Contact form & prefill
const qs = new URLSearchParams(location.search);
const msg = document.querySelector("#msg");
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    contactForm.innerHTML = `<h3 data-i18n="cf_thanks_h3">${t("cf_thanks_h3")}</h3><p style="color:var(--muted)" data-i18n="cf_thanks_p">${t("cf_thanks_p")}</p>`;
  });
}

function applyLang(newLang){
  if (!I18N[newLang]) return;
  lang = newLang;
  localStorage.setItem("saprolo_lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (I18N[lang][k]) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
  if (rot) rot.textContent = t("rotWords")[rotIdx % t("rotWords").length];
  document.querySelectorAll("form.calc").forEach(f => {
    if (f.querySelector(".result.show")) renderCalcResult(f);
  });
  if (msg && qs.get("route")) {
    msg.value = I18N[lang].cf_prefill(qs.get("route"), qs.get("est"));
  }
}

document.querySelectorAll(".lang-switch button").forEach(b => {
  b.addEventListener("click", () => applyLang(b.dataset.lang));
});
applyLang(lang);
