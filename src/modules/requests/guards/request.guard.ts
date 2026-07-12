import { isObject } from "@/shared/guards/object.guards";
import { REQUEST_CATEGORY, REQUEST_PRIORITY, REQUEST_STATUS } from "../constraints/request.contraints";
import type { FlowRequest, RequestCategory, RequestPriority, RequestStatus } from "../types/Requests";

export function isRequestStatus(value: unknown): value is RequestStatus {
    return (
        typeof value === 'string' &&
        REQUEST_STATUS.includes(value as RequestStatus)
    )
}

export function isRequestPriority(value: unknown): value is RequestPriority {
    return (
        typeof value === 'string' &&
        REQUEST_PRIORITY.includes(value as RequestPriority)
    )
}

export function isRequestCategory(value: unknown): value is RequestCategory {
    return (
        typeof value === 'string' &&
        REQUEST_CATEGORY.includes(value as RequestCategory)
    )
}


export function isFlowRequest(value: unknown): value is FlowRequest {

    if (!isObject(value)) return false;


    return (
        typeof value.id === 'string' &&
        typeof value.title === 'string' &&
        typeof value.description === 'string' &&
        isRequestCategory(value.category) &&
        isRequestPriority(value.priority) &&
        isRequestStatus(value.status) &&
        typeof value.requesterId === 'string' &&
        (
            value.assignedToId === undefined ||
            typeof value.assignedToId === 'string'
        ) &&

        value.createdAt instanceof Date &&
        !Number.isNaN(value.createdAt.getTime()) &&

        (
            value.updatedAt === undefined ||
            (
                value.updatedAt instanceof Date &&
                !Number.isNaN(value.updatedAt.getTime())
            )
        ) &&

        (
            value.finishedAt === undefined ||
            (
                value.finishedAt instanceof Date &&
                !Number.isNaN(value.finishedAt.getTime())
            )
        ) &&

        (
            value.canceledAt === undefined ||
            (
                value.canceledAt instanceof Date &&
                !Number.isNaN(value.canceledAt.getTime())
            )
        )

    )
}

