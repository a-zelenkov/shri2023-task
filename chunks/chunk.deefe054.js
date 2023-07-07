import{_ as __astro_tag_component__,c as createAstro,a as createComponent,r as renderTemplate,m as maybeRenderHead,b as renderComponent,d as renderHead,e as renderSlot}from"./chunk.714f48f9.js";import"html-escaper";import{jsx,jsxs}from"preact/jsx-runtime";import{useState}from"preact/hooks";function Event(e){return jsx("li",{className:"event"+(e.slim?" event_slim":""),children:jsxs("button",{className:"event__button",children:[jsx("span",{className:`event__icon event__icon_${e.icon}`,role:"img","aria-label":e.iconLabel}),jsx("h4",{className:"event__title",children:e.title}),e.subtitle&&jsx("span",{className:"event__subtitle",children:e.subtitle})]})})}__astro_tag_component__(Event,"@astrojs/preact");const $$Astro$2=createAstro(),$$Main=createComponent((async(e,t,a)=>(e.createAstro($$Astro$2,t,a).self=$$Main,renderTemplate`${maybeRenderHead()}<main class="main">
    <section class="section main__general">
        <h2 class="section__title section__title-header section__main-title">Главное</h2>
        <div class="hero-dashboard">
            <div class="hero-dashboard__primary">
                <h3 class="hero-dashboard__title">Привет, Геннадий!</h3>
                <p class="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
                <ul class="hero-dashboard__info">
                    <li class="hero-dashboard__item">
                        <div class="hero-dashboard__item-title">Дома</div>
                        <div class="hero-dashboard__item-details">
                            +23
                            <span class="a11y-hidden">°</span>
                        </div>
                    </li>
                    <li class="hero-dashboard__item">
                        <div class="hero-dashboard__item-title">За окном</div>
                        <div class="hero-dashboard__item-details">
                            +19
                            <span class="a11y-hidden">°</span>
                            <div class="hero-dashboard__icon hero-dashboard__icon_rain" role="img" aria-label="Дождь">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="hero-dashboard__schedule">
                ${renderComponent(e,"Event",Event,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"})}
                ${renderComponent(e,"Event",Event,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})}
                ${renderComponent(e,"Event",Event,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})}
            </ul>
        </div>
    </section>

    <section class="section main__scripts">
        <h2 class="section__title section__title-header">Избранные сценарии</h2>

        <ul class="event-grid">
            ${renderComponent(e,"Event",Event,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"})}
            ${renderComponent(e,"Event",Event,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"})}
            ${renderComponent(e,"Event",Event,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"})}
            ${renderComponent(e,"Event",Event,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"})}
            ${renderComponent(e,"Event",Event,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"})}
        </ul>
    </section>

    ${renderComponent(e,"Panel",null,{"client:only":"preact","client:component-hydration":"only","client:component-path":"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/components/Panel","client:component-export":"Panel"})}
</main>`)),"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/components/Main.astro");function Footer(){return jsxs("footer",{className:"footer",children:[jsxs("ul",{className:"footer__list",children:[jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Помощь"})}),jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Обратная связь"})}),jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Разработчикам"})}),jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Условия использования"})})]}),jsx("div",{className:"footer__copyright",children:"© 1997–2023 ООО «Яндекс»"})]})}function Header(){let[e,t]=useState(!1),[a,s]=useState(!1);return jsxs("header",{className:"header",children:[jsx("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),jsx("button",{className:"header__menu","aria-expanded":e?"true":"false",onClick:()=>{a||s(!0),t(!e)},children:jsx("span",{className:"header__menu-text a11y-hidden",children:e?"Закрыть меню":"Открыть меню"})}),jsxs("ul",{className:"header__links"+(e?" header__links_opened":"")+(a?" header__links-toggled":""),children:[jsx("li",{className:"header__item",children:jsx("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),jsx("li",{className:"header__item",children:jsx("a",{className:"header__link",href:"/devices",children:"Устройства"})}),jsx("li",{className:"header__item",children:jsx("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}__astro_tag_component__(Footer,"@astrojs/preact"),__astro_tag_component__(Header,"@astrojs/preact");const $$Astro$1=createAstro(),$$Layout=createComponent((async(e,t,a)=>(e.createAstro($$Astro$1,t,a).self=$$Layout,renderTemplate`<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Яндекс.Дом</title>
    ${renderHead()}</head>
    <body>
        ${renderComponent(e,"Header",Header,{"client:load":!0,"client:component-hydration":"load","client:component-path":"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/components/Header","client:component-export":"Header"})}
        ${renderSlot(e,a.default)}
        ${renderComponent(e,"Footer",Footer,{})}
    </body></html>`)),"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/layouts/Layout.astro"),$$Astro=createAstro(),$$Index=createComponent((async(e,t,a)=>(e.createAstro($$Astro,t,a).self=$$Index,renderTemplate`${renderComponent(e,"Layout",$$Layout,{},{default:e=>renderTemplate`
    ${renderComponent(e,"Main",$$Main,{})}
`})}`)),"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/pages/index.astro"),$$file="C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/pages/index.astro",$$url="/shri2023-task";export{$$Index as default,$$file as file,$$url as url};