import{h as l}from"./chunks/chunk.f1feb966.js";import{o as e}from"./chunks/chunk.e6ef94d8.js";import"./chunks/chunk.dec703d8.js";function _(){let[a,r]=l(!1),[s,h]=l(!1);return e("header",{className:"header",children:[e("a",{href:"/",className:"header__logo","aria-label":"Яндекс.Дом"}),e("button",{className:"header__menu","aria-expanded":a?"true":"false",onClick:()=>{s||h(!0),r(!a)},children:e("span",{className:"header__menu-text a11y-hidden",children:a?"Закрыть меню":"Открыть меню"})}),e("ul",{className:"header__links"+(a?" header__links_opened":"")+(s?" header__links-toggled":""),children:[e("li",{className:"header__item",children:e("a",{className:"header__link header__link_current",href:"/","aria-current":"page",children:"Сводка"})}),e("li",{className:"header__item",children:e("a",{className:"header__link",href:"/devices",children:"Устройства"})}),e("li",{className:"header__item",children:e("a",{className:"header__link",href:"/scripts",children:"Сценарии"})})]})]})}export{_ as Header};