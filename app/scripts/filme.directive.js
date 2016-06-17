angular.module("filmes").directive("awFilme", function () {
  return {
    restrict: "A",
    scope: {
      filme: '=awFilme',
      fnFechar: '&'
    },
    templateUrl: "templates/filme.template.html",
    link: function (scope, element, attr) {
      element.addClass('filme com-cartaz');

      if (!attr.fnFechar) {
        element.find('button').remove();
      }
    }
  };
})