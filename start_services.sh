#!/bin/bash

kill_process_on_port() {
    port=$1
    pid=$(lsof -t -i:$port)
    if [ ! -z "$pid" ]; then
        echo "Encerrando processo na porta $port (PID: $pid)"
        kill $pid
        sleep 2
    fi
}


kill_process_on_port 6684 
kill_process_on_port 6680

# Inicia o microserviço de produtos
echo "Iniciando o microserviço de produtos..."
cd productService
npm start &

# Inicia o microserviço de usuários
echo "Iniciando o microserviço de usuários..."
cd ../userService
npm start &

# Inicia o microserviço de pedidos
echo "Iniciando o microserviço de pedidos..."
cd ../orderService
npm start &

# Inicia a appPrincipal
echo "Iniciando a appPrincipal..."
cd ../appPrincipal
npm start &

echo "Todos os serviços foram iniciados!"

# Mantém o script rodando
wait