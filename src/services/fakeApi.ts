const MOCKED_DATA = [
  {
    id: 1,
    description: 'Desenvolvimento de site',
    type: 'income',
    category: 'Venda',
    amount: 5000,
    createdAt: '2025-10-27T15:51:00Z',
  },
  {
    id: 2,
    description: 'Almoço com cliente',
    type: 'outcome',
    category: 'Alimentação',
    amount: 39.9,
    createdAt: '2025-10-28T12:30:00Z',
  },
  {
    id: 3,
    description: 'Manutenção do site',
    type: 'income',
    category: 'Receita recorrente',
    amount: 120.0,
    createdAt: '2025-10-28T08:00:00Z',
  },
  {
    id: 4,
    description: 'Streaming de vídeo',
    type: 'outcome',
    category: 'Entretenimento',
    amount: 19.99,
    createdAt: '2025-10-29T09:15:00Z',
  },
]

let transactionsDB = [...MOCKED_DATA]

// Helper para simular o delay da rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Criamos o objeto 'api' falso que imita o Axios
export const api = {
  /**
   * Imita o: api.get('transactions', { params: ... })
   */
  get: async (_path: string, config?: { params: any }) => {
    await delay(300) // Finge um delay
    const params = config?.params || {}
    let data = [...transactionsDB] // Pega os dados do "banco"

    // 1. Imita a busca (q=)
    if (params.q) {
      const query = String(params.q).toLowerCase()
      data = data.filter(
        (item) =>
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query),
      )
    }

    // 2. Imita a ordenação (_sort, _order)
    if (params._sort === 'createdAt' && params._order === 'desc') {
      data.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
    }

    // O Axios sempre retorna um objeto { data: ... }
    return { data }
  },

  /**
   * Imita o: api.post('transactions', { ... })
   */
  post: async (_path: string, data: any) => {
    await delay(300) // Finge um delay

    // Cria a nova transação
    const newTransaction = {
      ...data,
      id: Math.random(), // ID aleatório
      createdAt: new Date().toISOString(),
    }

    // Salva no "banco"
    transactionsDB = [newTransaction, ...transactionsDB]

    // O Axios retorna a nova transação criada
    return { data: newTransaction }
  },
}
