(function(){
  angular
  .module('filmes')
  .controller('FilmesController', function($scope, MeusFilmes) {
    $scope.titulo = "Filmes que já assisti";

    $scope.filmes = [];

    var carregarFilmes = function(){
      MeusFilmes.listar().then(function(filmes){
        $scope.filmes = filmes;
      });
    }

    $scope.novoFilme = {};

    $scope.resetForm = function() {
      $scope.formulario.$setPristine();
      $scope.formulario.$setUntouched();
    }

    $scope.criarFilme = function() {
      $scope.formulario.$setDirty();

      if($scope.formulario.$invalid)
        return;

      var filme = {
        id: Date.now() + "",
        titulo: $scope.novoFilme.titulo,
        ano: $scope.novoFilme.ano,
        produtora: $scope.novoFilme.produtora,
        sinopse: $scope.novoFilme.sinopse,
        cartaz: $scope.novoFilme.cartaz
      };

      MeusFilmes.inserir(filme).then(carregarFilmes);

      $scope.novoFilme = {};
    }

    $scope.removerFilme = function(id) {
      MeusFilmes.remover(id).then(carregarFilmes);
    }

    carregarFilmes();

  });
})();