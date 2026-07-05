import type { FlowRequest } from "../types/Requests";


export const requestMock: FlowRequest[] = [
    {
        id: "req-1",
        title: "Erro ao Acessar sistema",
        description: "Usuário não consegue acessar o painel interno",
        category: "ACCESS",
        priority: "HIGH",
        status: "OPEN",
        requesterId: "user-3",
        createdAt: new Date('2026-07-05')
    },
    {
        id: "req-2",
        title: "Erro ao Acessar Criar Request",
        description: "Usuário não consegue criar um flow",
        category: "BUG",
        priority: "MEDIUM",
        status: "IN_PROGRESS",
        requesterId: "user-2",
        createdAt: new Date('2026-07-05')
    },
    {
        id: "req-3",
        title: "Desativar usuário user-4",
        description: "Desativar usuário demitido user-4",
        category: "ACCESS",
        priority: "HIGH",
        status: "DONE",
        requesterId: "user-1",
        createdAt: new Date('2026-07-05')
    },
    {
        id: "req-4",
        title: "Desativar usuário user-4",
        description: "Desativar usuário demitido user-4",
        category: "ACCESS",
        priority: "CRITICAL",
        status: "DONE",
        requesterId: "user-1",
        createdAt: new Date('2026-07-05')
    }
]