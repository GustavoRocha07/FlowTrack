import type { FlowRequest } from "@/modules/requests/types/Requests";
import type { User } from "../types/user.types";


export const canCreateRequest = (user: User): boolean => {
    return user.status === 'ACTIVE';
}

export const canManageRequests = (user: User): boolean => {

    if (user.status === "INACTIVE") return false;

    switch (user.role) {
        case 'ADMIN':
            return true;
        case 'MANAGER':
            return true;


        default:
            return false;

    }

}
export const canAssignRequest = (
    user: User,
    request: FlowRequest
): boolean => {
    const userCanAssign =
        user.role === 'ADMIN' || user.role === 'MANAGER';

    return (
        user.status === 'ACTIVE' &&
        request.status === 'OPEN' &&
        userCanAssign
    );
};