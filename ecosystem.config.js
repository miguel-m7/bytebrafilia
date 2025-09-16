module.exports = {
  apps: [
    {
      name: "next-app",         // Nome do app no PM2
      script: "npm",
      args: "start",            // Comando que vai rodar
      cwd: "./",                // Caminho do projeto
      env: {
        NODE_ENV: "production", // Variável de ambiente
        PORT: 3000              // Porta do servidor
      }
    }
  ]
};
