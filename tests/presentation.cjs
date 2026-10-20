// Requiere Playwright únicamente para las pruebas, no para la presentación.
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
 const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 const page = await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const errors=[]; page.on('pageerror',e=>errors.push(e.message));
 const base=process.env.BASE_URL||'http://127.0.0.1:8000';
 let checks=0;const check=(v,m)=>{assert.ok(v,m);checks++;};
 const jump=async n=>{await page.goto(`${base}/#${n}`);};
 const advance=async n=>{for(let i=0;i<n;i++)await page.click('#advance');};
 await jump(1);check(await page.locator('#dots button').count()===9,'9 diapositivas');
 check((await page.locator('.members').innerText()).includes('Carlos Enrique Izaguirre Sagastume'),'integrantes');
 await page.click('#begin');check((await page.locator('h1').innerText())==='Introducción','inicio');
 await page.keyboard.press('ArrowRight');check((await page.locator('h1').innerText()).startsWith('Navegación'),'teclado');
 await page.click('#contents');check(await page.locator('#index-list button').count()===9,'índice');await page.keyboard.press('Escape');
 for(let n=2;n<=9;n++){await jump(n);await page.click('#source');check((await page.locator('#source-text p').count())>0,`texto original ${n}`);await page.keyboard.press('Escape');check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`sin desbordamiento ${n}`);}
 await jump(4);check((await page.locator('#translations').innerText()).includes('Sin traducciones'),'vacío inicial');await advance(2);check((await page.locator('#translations').innerText()).includes('203.0.113.5'),'traducción NAT');await advance(2);check((await page.locator('#status').innerText()).includes('respuesta recibida'),'entrega NAT');await page.click('#reset');check((await page.locator('#translations').innerText()).includes('Sin traducciones'),'reinicio NAT');
 await jump(6);check((await page.locator('#translations').innerText()).includes('203.0.113.5'),'estática preconfigurada');await page.click('[data-mode="dynamic"]');await advance(4);await page.click('#play');await page.click('#pause');await advance(1);check((await page.locator('#translations').innerText()).includes('203.0.113.6'),'nueva asignación dinámica');check((await page.locator('.sim .public').textContent())==='203.0.113.6','diagrama y tabla coherentes');
 await page.click('[data-mode="pat"]');await advance(2);check((await page.locator('#translations').innerText()).includes('192.168.1.10:51500'),'origen exacto del informe');check((await page.locator('#translations').innerText()).includes('203.0.113.5:40001'),'puerto exacto del informe');await advance(10);check(await page.locator('#translations tr').count()===3,'3 traducciones PAT');const cells=await page.locator('#translations tr td:last-child').allTextContents();check(new Set(cells).size===3,'puertos públicos únicos');check(cells.every(x=>x.startsWith('203.0.113.5:')),'misma IP pública');check((await page.locator('#status').innerText()).includes('192.168.1.12:51502'),'retorno al tercer dispositivo');
 await page.click('#reset');await page.click('#play');await page.click('#pause');let before=await page.locator('#status').innerText();await page.waitForTimeout(1600);check(before===await page.locator('#status').innerText(),'pausa detiene simulación');await page.click('#reset');await page.waitForTimeout(1500);check((await page.locator('#status').innerText()).startsWith('Listo'),'reinicio cancela temporizador');
 await jump(8);await advance(4);check((await page.locator('#status').innerText()).includes('IPv4 a IPv6'),'retorno NAT64');check((await page.locator('#translations').innerText()).includes('Servidor IPv4'),'registro NAT64');
 await jump(4);await page.click('#play');await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Paso 4 / 4'));check((await page.locator('#status').innerText()).includes('respuesta recibida'),'ciclo automático completo');
 await page.click('#fullscreen');check(await page.evaluate(()=>Boolean(document.fullscreenElement)),'pantalla completa');await page.evaluate(()=>document.exitFullscreen());
 await page.screenshot({path:'/tmp/nat-simulation.png',fullPage:true});await jump(1);await page.screenshot({path:'/tmp/nat-cover.png',fullPage:true});
 for(const width of [390,768]){await page.setViewportSize({width,height:844});for(let n=1;n<=9;n++){await jump(n);check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`ancho ${width}, diapositiva ${n}`);}}
 await page.emulateMedia({reducedMotion:'no-preference'});await jump(4);await page.click('#play');await page.waitForTimeout(180);await page.click('#pause');await page.locator('#packet').evaluate(async el=>{await Promise.all(el.getAnimations().map(a=>a.ready));});const frozen=await page.locator('#packet').evaluate(el=>getComputedStyle(el).transform);await page.waitForTimeout(200);check(frozen===await page.locator('#packet').evaluate(el=>getComputedStyle(el).transform),'animación del paquete en pausa');await page.click('#play');await page.waitForTimeout(200);check(frozen!==await page.locator('#packet').evaluate(el=>getComputedStyle(el).transform),'animación reanudada');await page.click('#reset');
 try{await page.goto('file://'+require('node:path').resolve('index.html'));check((await page.locator('h1').innerText())==='NAT.','apertura local sin servidor');}catch(e){if(!e.message.includes('ERR_BLOCKED_BY_ADMINISTRATOR'))throw e;console.log('OMITIDA: apertura file:// bloqueada por la política del navegador; flujo HTTP validado.');}
 check(errors.length===0,`sin errores JS: ${errors.join(',')}`);
 console.log(`${checks} comprobaciones correctas. Chromium: ${await browser.version()}`);await browser.close();
})().catch(e=>{console.error(e);process.exit(1);});
