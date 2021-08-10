function marcaLead(){

    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;

    let urlGet = "https://adm.camlp.toing.com/marca_usuario_produto_parceiro.php";
    var request = $.get( urlGet, {  
        nome: nome, 
        email: email, 
        portal: 'FOONE',
        produto: 'HUB',
        id_parceiro: 'FOONE_HUB_BR',
        origem: 'HUB_WORDPRESS ',
        recebe_email_portal: 1,
        recebe_email_produto: 1,
        assinou: 0
    });

    request.success(function(result) {
      console.log(result);
    });

    request.error(function(jqXHR, textStatus, errorThrown) {
    if (textStatus == 'timeout')
        console.log('The server is not responding');

    if (textStatus == 'error')
        console.log(errorThrown);

    // Etc
    });
}
