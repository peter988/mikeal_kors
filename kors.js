  window.addEventListener('scroll',
  function(){
    let sc = this.document.documentElement.scrollTop;
if (sc >= 2344) {
    let i = 1;
    function k1() {
        if (i == 1) {
            let img = document.getElementById('img1');
            img.src = 'https://digital4.michaelkors.com/refreshes/2022/holiday/refresh1/EU/desktop/homepage/HP_PROMO_3-1_EU.jpg';
            let p = document.getElementById('sh1');
            p.innerText = 'SHOP GIFTS FOR HER >';
            let img2 = document.getElementById('img2');
            img2.src = 'https://digital4.michaelkors.com/refreshes/2022/holiday/refresh1/EU/desktop/homepage/HP_PROMO_3-3_EU.jpg';
            let p2 = document.getElementById('sh2');
            p2.innerText = 'SHOP WATCHES >';

            i = 0
            
        }
        else{
            let img1 = document.getElementById('img1');
            img1.src = 'https://digital4.michaelkors.com/refreshes/2022/holiday/refresh1/EU/desktop/homepage/HP_PROMO_3-2_EU.jpg';
            let p1 = document.getElementById('sh1');
            p1.innerText = 'SHOP GIFTS FOR HIM >';
            let img2 = document.getElementById('img2');
            img2.src = 'https://digital4.michaelkors.com/refreshes/2022/holiday/refresh1/EU/desktop/homepage/HP_PROMO_3-4_GO.jpg';
            let p2 =document.getElementById('sh2');
            p2.innerText = 'SHOP LITTLE LUXURIES >';

            i = 1
        }
        
    }
    let sen = this.setInterval(k1,3000)
    }
  }
  
  
  
  )                             