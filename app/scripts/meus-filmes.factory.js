angular.module("filmes").factory("MeusFilmes", function($q, $http){
	return {
		listar: function() {
			var promessa = $q.defer();

			$http.get("https://meus-filmes-874c2.firebaseio.com/filmes.json").then(
				function(result){
					var filmes = [];

					angular.forEach(result.data, function(filme, id){
						filme.id = id;
						filmes.push(filme);
					});

					promessa.resolve(filmes);
				}
			);

			return promessa.promise;
		},
		inserir: function(filme) {
			var id = filme.id;
			delete filme.id;

			return $http.put("https://meus-filmes-874c2.firebaseio.com/filmes/" + id + ".json", filme);
		},
		remover: function(id) {
			return $http.delete("https://meus-filmes-874c2.firebaseio.com/filmes/" + id + ".json");
		}
	};
});