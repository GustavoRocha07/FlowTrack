import { isObject } from "@/shared/guards/object.guards"
import { USER_ROLES, USER_STATUS } from "../Constraints/user.contraints"
import type { User, UserRole, UserStatus } from "../types/user.types"



export function isUserRole(value: unknown): value is UserRole {
    return (
        typeof value === 'string' &&
        USER_ROLES.includes(value as UserRole)
    )
}

export function isUserStatus(value: unknown): value is UserStatus {
    return (
        typeof value === 'string' &&
        USER_STATUS.includes(value as UserStatus)
    )
}

export function isUser(value: unknown): value is User {
    if (!isObject(value)) {
        return false
    }

    return (
        typeof value.id === 'string' &&
        typeof value.name === 'string' &&
        typeof value.email === 'string' &&
        isUserRole(value.role) &&
        isUserStatus(value.status)
    )
}

