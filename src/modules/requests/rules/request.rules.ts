import type { User } from "@/modules/users/types/user.types";
import type { FlowRequest } from "../types/Requests";


export const canCancelRequest = (user: User, request: FlowRequest): boolean => {

    if (user.status === "INACTIVE") return false;

    const isCancelable = request.status === "IN_PROGRESS" || request.status === "OPEN";


    if (!isCancelable) return false;

    if (user.role === "ADMIN") return true;
    if (user.role === "MANAGER") return true;
    if (user.role === 'REQUESTER') {
        return request.requesterId === user.id;
    }

    return false;

}


export const canFinishRequest = (user: User, request: FlowRequest): boolean => {


    if (user.status === "INACTIVE") return false;

    const canFinish = user.role === 'ADMIN' || user.role === 'MANAGER';


    if (!canFinish) return false;

    if (request.status !== "IN_PROGRESS") return false;

    if (!request.assignedToId) return false;

    return true;
}

export const canEditRequest = (
    user: User,
    request: FlowRequest
): boolean => {
    if (user.status === 'INACTIVE') {
        return false;
    }

    if (request.status === 'DONE' || request.status === 'CANCELED') {
        return false;
    }

    if (user.role === 'ADMIN' || user.role === 'MANAGER') {
        return request.status === 'OPEN' || request.status === 'IN_PROGRESS';
    }

    if (user.role === 'REQUESTER') {
        return request.requesterId === user.id && request.status === 'OPEN';
    }

    return false;
};

export const isCriticalRequest = (request: FlowRequest): boolean => {
    return request.priority === 'CRITICAL';
}