import fs from 'fs'

const rutaRaiz = '/Users/pabloskog/Documents/2022 FULLSTACK CODERHOUSE/BACKEND/Clases';
const rutaArchivo = './2_timers.js';

const ruta = `${rutaRaiz}/${rutaArchivo}`


console.log(fs.readFileSync(ruta, 'utf-8'))