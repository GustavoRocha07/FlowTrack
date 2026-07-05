import type { User } from "../types/user.types";

export const usersMock: User[] = [
    {
        id: "user-1",
        name: "GUSTAVO DIAS ROCHA",
        email: "gustavo.rocha@flowtrack.com",
        role: "ADMIN",
        status: "ACTIVE",
        createdAt: new Date('2026-01-15'),
    },
    {
        id: "user-2",
        name: "Yasmin Muniz de Oliveira",
        email: "yasmin.oliveira@flowtrack.com",
        role: "MANAGER",
        status: "ACTIVE",
        createdAt: new Date('2026-01-20'),
    },
    {
        id: "user-3",
        name: "Clecia Dias dos Santos",
        email: "clecia.santos@flowtrack.com",
        role: "REQUESTER",
        status: "ACTIVE",
        createdAt: new Date('2026-01-22'),
    },
    {
        id: "user-4",
        name: "Carlos Daniel Dias Rocha",
        email: "carlos.rocha@flowtrack.com",
        role: "REQUESTER",
        status: "INACTIVE",
        createdAt: new Date('2026-01-22'),
    },
]