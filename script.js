```js
// ======================================
// 🎮 GAME INVENTORY — WELL RPG
// ======================================

// Informações do jogador
let nick = 'xxrells{;'
let moedas = 100
let inventario = []

// Itens disponíveis na loja
let itens = [
  { nome: 'Espada', preco: 30 },
  { nome: 'Arma', preco: 40 },
  { nome: 'Colete', preco: 15 },
  { nome: 'Capacete', preco: 10 },
  { nome: 'Poção de cura', preco: 35 }
]

// Apresentação
console.log('================================')
console.log('🎮 BEM-VINDO AO WELL RPG!')
console.log('================================')
console.log('Olá! Eu sou Well, seu guia nesta aventura.')
console.log('Vamos começar,', nick, '!')
console.log('Você começa com', moedas, 'moedas.')

// Exibir a loja
console.log('\n🛒 ITENS DISPONÍVEIS:')

for (let i = 0; i < itens.length; i++) {
  console.log(
    (i + 1) + '. ' + itens[i].nome +
    ' — ' + itens[i].preco + ' moedas'
  )
}

// Função para comprar um item
function comprarItem(nomeItem) {
  let item = itens.find(
    produto => produto.nome.toLowerCase() === nomeItem.toLowerCase()
  )

  if (!item) {
    console.log('❌ Esse item não existe na loja.')
    return
  }

  if (moedas >= item.preco) {
    moedas -= item.preco
    inventario.push(item.nome)

    console.log('✅ Você comprou:', item.nome)
    console.log('💰 Saldo atual:', moedas, 'moedas')
  } else {
    console.log('❌ Saldo insuficiente para comprar:', item.nome)
    console.log('💰 Você tem apenas', moedas, 'moedas.')
  }
}

// Compras do jogador
console.log('\n🛍️ INICIANDO COMPRAS...')

comprarItem('Arma')
comprarItem('Espada')
comprarItem('Colete')
comprarItem('Capacete')
comprarItem('Poção de cura')

// Exibir inventário
console.log('\n🎒 SEU INVENTÁRIO:')

if (inventario.length > 0) {
  for (let i = 0; i < inventario.length; i++) {
    console.log('- ' + inventario[i])
  }
} else {
  console.log('Seu inventário está vazio.')
}

// Batalha
console.log('\n⚔️ VOCÊ ENTROU NA ARENA!')
console.log('Você enfrentou um adversário e venceu!')

// Recompensa
let recompensa = 30
moedas += recompensa

console.log('🏆 Você recebeu', recompensa, 'moedas!')
console.log('💰 Saldo final:', moedas, 'moedas')

// Encerramento
console.log('\n================================')
console.log('Obrigado por jogar,', nick + '!')
console.log('Continue sua aventura no Well RPG!')
console.log('================================')
```
