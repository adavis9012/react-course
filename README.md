React Course By Andrew Mead - Student David Velandia

**(Table of Contents)**

[TOCM]

[TOC]

#01-Indecision App
##Steps
cd 01-indecision-app
npm i -g live-server
npm i -s babel-preset-react@6.24.1 babel-preset-env@1.5.2
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch