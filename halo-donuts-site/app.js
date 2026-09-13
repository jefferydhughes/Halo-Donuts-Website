const menuItems=[
 {name:'Homer',desc:'Raised donut, real vanilla icing and rainbow sprinkles.',img:'assets/homer.jpg'},
 {name:'Birthday Cake',desc:'Vanilla icing with our house-made birthday cake crumble.',img:'assets/birthday-cake.jpg'},
 {name:'Chocolate Dip',desc:'Premium chocolate icing, real vanilla and rainbow sprinkles.',img:'assets/chocolate-dip.jpg'},
 {name:'Walnut Crunch',desc:'Chocolate cake donut loaded with toasted walnuts.',img:'assets/walnut-crunch.jpg'},
 {name:'Maple Bar',desc:'Raised and finished with real local maple syrup icing.',img:'assets/maple-bar.jpg'},
 {name:'Lemon Filled',desc:'Sugar-crusted outside, bright classic lemon filling inside.',img:'assets/lemon-filled.jpg'},
 {name:'Boston Cream',desc:'Rich pastry cream beneath scratch-made chocolate icing.',img:'assets/boston-cream.jpg'}
];
document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.navlinks').classList.toggle('open'));
const grid=document.querySelector('[data-menu]');if(grid){grid.innerHTML=menuItems.map(x=>`<article class="flavour"><img src="${x.img}" alt="${x.name} donut"><div><h3>${x.name}</h3><p>${x.desc}</p></div></article>`).join('')}
document.querySelectorAll('form[data-demo]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.success').style.display='block';form.reset()}));
fetch('data/site.json').then(r=>r.json()).then(s=>{document.querySelectorAll('[data-order]').forEach(a=>a.href=s.squareOrderUrl);const h=document.querySelector('[data-seasonal-title]');if(h){h.textContent=s.seasonal.title;document.querySelector('[data-seasonal-copy]').textContent=s.seasonal.description}}).catch(()=>{});
