export type UserRole = 'ADMIN' | 'MANAGER' | 'REQUESTER'

export type UserStatus = 'ACTIVE' | 'INACTIVE'

export type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    createdAt: Date;
};