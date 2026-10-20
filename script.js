'use strict';
const toggle=document.querySelector('#mobile-toggle');
const menu=document.querySelector('#mobile-menu');
const header=document.querySelector('#site-header');
const backTop=document.querySelector('#back-to-top');
const menuIcon='<svg class="icon"><use href="#i-menu"/></svg>';
const closeIcon='<svg class="icon"><use href="#i-x"/></svg>';
function closeMenu(){menu.hidden=true;document.body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');toggle.innerHTML=menuIcon}
function openMenu(){menu.hidden=false;document.body.classList.add('menu-open');toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close menu');toggle.innerHTML=closeIcon}
toggle.addEventListener('click',()=>menu.hidden?openMenu():closeMenu());
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus()}});
document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!toggle.contains(e.target))closeMenu()});
window.addEventListener('resize',()=>{if(window.innerWidth>820&&!menu.hidden)closeMenu()});
function handleScroll(){header.classList.toggle('scrolled',window.scrollY>16);backTop.classList.toggle('visible',window.scrollY>700)}
window.addEventListener('scroll',handleScroll,{passive:true});handleScroll();
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
document.querySelector('#year').textContent=String(new Date().getFullYear());
if('IntersectionObserver' in window){const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');obs.unobserve(entry.target)}})},{threshold:.09,rootMargin:'0px 0px -25px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'))}
// Make sure accordions don't trap focus or unexpectedly collapse others.
