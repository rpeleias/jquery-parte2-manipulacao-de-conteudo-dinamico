var atualizaDados = function(){
	var carrinhos = $(".carrinho");
	carrinhos.each(function() {
		var carrinho = $(this);
		var items = carrinho.find(".item-total:visible");
		var total = 0;
		for(var i = 0; i < items.length; i++){
			var conteudo = $(items[i]).text();
			var preco = parseFloat(conteudo);
			total += preco;			
		}
		carrinho.find(".valor-total").text(total);
		carrinho.find(".quantidade-de-itens").text(items.length);
	});	
}
var aposInicializado = function(){			
	$(".remove-item").click(removeItem);
	$(".undo").click(undo);
	atualizaDados();
};

var removeItem = function(event) {				
	event.preventDefault();		
	var self = $(this);	
	self.closest('tr').hide();			
	atualizaDados();
};

var undo = function(){
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass("recuperado");
	var trs = carrinho.find("tr:hidden");
	trs.addClass("recuperado");
	trs.show();
	atualizaDados();
};

$(aposInicializado);