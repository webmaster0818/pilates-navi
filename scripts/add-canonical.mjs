import fs from 'node:fs'; import path from 'node:path';
const BASE='https://pilatest.com';
const OUT=path.join(process.cwd(),'out');
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name); if(e.isDirectory())walk(p); else if(e.name==='index.html')inject(p);}}
function inject(f){let h=fs.readFileSync(f,'utf8'); if(/rel=["']canonical["']/i.test(h))return; const rel=path.relative(OUT,path.dirname(f)).split(path.sep).join('/'); const url=BASE+'/'+(rel?rel+'/':''); if(!h.includes('</head>'))return; h=h.replace('</head>',`<link rel="canonical" href="${url}"/></head>`); fs.writeFileSync(f,h);}
walk(OUT); console.log('canonical injected');
