const items =   [
    {
        id:0,
        nome: 'camisa' ,
        img : "https://img.elo7.com.br/product/zoom/17B1547/camisa-sublimacao-poliester.jpg",
        quantidade: 0,
        price: 80
    },
    {
        id:1,
        nome: 'short' ,
        img : "https://static.netshoes.com.br/produtos/kit-short-basico-feminino-c-3-pecas/72/MSX-0009-172/MSX-0009-172_zoom1.jpg?ts=1590752009&ims=544x",
        quantidade: 0,
        price: 40
    },
    { 
        id:2 ,
        nome: 'sapato' ,
        img : "https://static.netshoes.com.br/produtos/sapato-social-casual-masculino-derby-oxford-de-amarrar-super-macio-e-leve/38/8KK-0324-138/8KK-0324-138_zoom1.jpg?ts=1658932842&ims=544x",
        quantidade: 0,
        price: 90
    }
    
]

const inicializarLoja =()=>{

    var containerProdutos = document.getElementById('produtos')

    items.map((val)=> {
     containerProdutos.innerHTML += `
        
     <div class="produto-single">  

        <img src = "${val.img}" />
        <p> ${val.nome}
        <a key=${val.id} href="#"> adicionar no carrinho</a>
        <p> $ ${val.price}</p>   

     </div>
         

         `
    })

}

inicializarLoja()


const atualizarCarrinho = () =>{
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML=""
    items.map((val)=> {
        if(val.quantidade > 0){    
            containerCarrinho.innerHTML += `

         <div id='items'>  
            <img src = "${val.img}" />      
            <p> ${val.nome} <br> quantidade: ${val.quantidade} </p> 

            <p class="valor"> $ ${val.price * val.quantidade } </p>                
             
         </div>                 
            `                      
        }      
              
        
         
         

        
    })
    
    let totalAmount = 0      
    const cartProdutos = document.getElementsByClassName("valor")
        for(var i = 0; i < cartProdutos.length; i++ ){
            const productPrice = cartProdutos[i].innerText.replace("$", "").replace(",",".")     
            totalAmount = totalAmount + (productPrice * 1)      
            
        }        
        console.log(totalAmount)
        const total = document.getElementById('total');
        total.innerHTML = `
        <p> total: $ ${totalAmount} </p>
         <button> comprar </button>
        `         
   
     
}







var Links = document.getElementsByTagName('a')
count = 1

for(var i = 0; i < Links.length; i++ ){
    Links[i].addEventListener('click',function(){
        let key = this.getAttribute('key');
        items[key].quantidade++ ;
        items[key].price 
        atualizarCarrinho()
        return false
    })

   
    
}


function openNav() { 
var elemet = document.getElementById("mySidenav").style.width = "350px";   
  
 if(window.matchMedia("(max-width: 700px)")){
    document.getElementById("mySidenav").style.width = "100%";  
 }
  
   
}







function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}  



 
