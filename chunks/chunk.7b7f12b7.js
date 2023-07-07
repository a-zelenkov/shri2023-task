import{_ as __astro_tag_component__,c as createAstro,a as createComponent,r as renderTemplate,m as maybeRenderHead,b as renderComponent,d as renderHead,e as renderSlot}from"./chunk.6218e1c8.js";import"html-escaper";import{jsx,jsxs}from"preact/jsx-runtime";import{useRef,useState,useEffect}from"preact/hooks";function Event(e){return jsx("li",{className:"event"+(e.slim?" event_slim":""),children:jsxs("button",{className:"event__button",children:[jsx("span",{className:`event__icon event__icon_${e.icon}`,role:"img","aria-label":e.iconLabel}),jsx("h4",{className:"event__title",children:e.title}),e.subtitle&&jsx("span",{className:"event__subtitle",children:e.subtitle})]})})}__astro_tag_component__(Event,"@astrojs/preact");const TABS={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let e=0;e<6;++e)TABS.all.items=TABS.all.items.concat(TABS.all.items);const TABS_KEYS=Object.keys(TABS);function Panel(){const e=useRef(),t=useRef(!1),[i,a]=useState(""),[s,l]=useState(!1);useEffect((()=>{i||t.current||(t.current=!0,a(new URLSearchParams(location.search).get("tab")||"all"))}),[]),useEffect((()=>{e.current&&l(e.current.scrollWidth>e.current.offsetWidth)}),[i]);return jsxs("section",{className:"section main__devices",children:[jsxs("div",{className:"section__title",children:[jsx("h2",{className:"section__title-header",children:"Избранные устройства"}),jsx("select",{className:"section__select",defaultValue:"all",onInput:e=>{a(e.target.value)},children:TABS_KEYS.map((e=>jsx("option",{value:e,children:TABS[e].title},e)))}),jsx("ul",{role:"tablist",className:"section__tabs",children:TABS_KEYS.map((e=>jsx("li",{role:"tab","aria-selected":e===i?"true":"false",tabIndex:e===i?"0":void 0,className:"section__tab"+(e===i?" section__tab_active":""),id:`tab_${e}`,"aria-controls":`panel_${e}`,onClick:()=>a(e),children:TABS[e].title},e)))})]}),jsxs("div",{className:"section__panel-wrapper",children:[TABS_KEYS.map((t=>jsx("div",{ref:a=>{a&&t===i&&(e.current=a)},role:"tabpanel",className:"section__panel"+(t===i?"":" section__panel_hidden"),"aria-hidden":t===i?"false":"true",id:`panel_${t}`,"aria-labelledby":`tab_${t}`,children:jsx("ul",{className:"section__panel-list",children:TABS[t].items.map(((e,t)=>jsx(Event,{...e},t)))})},t))),s&&jsx("div",{className:"section__arrow",onClick:()=>{e.current.scrollTo({left:e.current.scrollLeft+400,behavior:"smooth"})}})]})]})}__astro_tag_component__(Panel,"@astrojs/preact");const $$Astro$2=createAstro(),$$Main=createComponent((async(e,t,i)=>(e.createAstro($$Astro$2,t,i).self=$$Main,renderTemplate`${maybeRenderHead()}<main class="main">
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

    ${renderComponent(e,"Panel",Panel,{"client:visible":!0,"client:component-hydration":"visible","client:component-path":"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/components/Panel","client:component-export":"Panel"})}
</main>`)),"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/components/Main.astro");function Footer(){return jsxs("footer",{className:"footer",children:[jsxs("ul",{className:"footer__list",children:[jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Помощь"})}),jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Обратная связь"})}),jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Разработчикам"})}),jsx("li",{className:"footer__item",children:jsx("a",{className:"footer__link",href:"/",children:"Условия использования"})})]}),jsx("div",{className:"footer__copyright",children:"© 1997–2023 ООО «Яндекс»"})]})}function Header(){let[e,t]=useState(!1),[i,a]=useState(!1);return jsxs("header",{className:"header",children:[jsx("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),jsx("button",{className:"header__menu","aria-expanded":e?"true":"false",onClick:()=>{i||a(!0),t(!e)},children:jsx("span",{className:"header__menu-text a11y-hidden",children:e?"Закрыть меню":"Открыть меню"})}),jsxs("ul",{className:"header__links"+(e?" header__links_opened":"")+(i?" header__links-toggled":""),children:[jsx("li",{className:"header__item",children:jsx("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),jsx("li",{className:"header__item",children:jsx("a",{className:"header__link",href:"/devices",children:"Устройства"})}),jsx("li",{className:"header__item",children:jsx("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}__astro_tag_component__(Footer,"@astrojs/preact"),__astro_tag_component__(Header,"@astrojs/preact");const $$Astro$1=createAstro(),$$Layout=createComponent((async(e,t,i)=>(e.createAstro($$Astro$1,t,i).self=$$Layout,renderTemplate`<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Яндекс.Дом</title>
    ${renderHead()}</head>
    <body>
        ${renderComponent(e,"Header",Header,{"client:load":!0,"client:component-hydration":"load","client:component-path":"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/components/Header","client:component-export":"Header"})}
        ${renderSlot(e,i.default)}
        ${renderComponent(e,"Footer",Footer,{})}
    </body></html>`)),"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/layouts/Layout.astro"),$$Astro=createAstro(),$$Index=createComponent((async(e,t,i)=>(e.createAstro($$Astro,t,i).self=$$Index,renderTemplate`${renderComponent(e,"Layout",$$Layout,{},{default:e=>renderTemplate`
    ${renderComponent(e,"Main",$$Main,{})}
`})}`)),"C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/pages/index.astro"),$$file="C:/Users/zelenkov/Desktop/yandex/school/lections/7. preformance/astro/src/pages/index.astro",$$url="/shri2023-task";export{$$Index as default,$$file as file,$$url as url};