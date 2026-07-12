import type { UserRole, UserStatus } from "../types/user.types";

export const USER_ROLES: readonly UserRole[] = [

    'ADMIN',
    'MANAGER',
    'REQUESTER',
]


export const USER_STATUS: readonly UserStatus[] = [
    'ACTIVE',
    'INACTIVE'
]