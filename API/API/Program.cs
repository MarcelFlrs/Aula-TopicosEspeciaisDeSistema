var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Produto> produtos = new List<Produto>();

// Funcionalidade da aplicação - EndPoints
app.MapGet("/produto/listar", () => "Listagem de produtos");

//EXERCÍCIO: Cadastrar produtos dentro da lista
app.MapPost("/produto/cadastrar", () => "Cadastro de produtos");

app.Run();

record Produto(string nome, string descricao);