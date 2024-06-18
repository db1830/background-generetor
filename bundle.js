(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let css = document.querySelector('h3');
let color01 = document.querySelector('.color01');
let color02 = document.querySelector('.color02');
let body = document.getElementById('gradient');

function setGrdient() {
    body.style.background = 
    'Linear-gradient(to right,' + color01.value + ', ' + color02.value + ')';

    css.textContent = body.style.background + ';';
}

color01.addEventListener('input', setGrdient);

color02.addEventListener('input', setGrdient);
},{}]},{},[1]);
