import type { RequestCategory, RequestPriority, RequestStatus } from "../types/Requests";


export const REQUEST_STATUS: readonly RequestStatus[] = [
    'CANCELED',
    'DONE',
    'IN_PROGRESS',
    'OPEN'
]

export const REQUEST_PRIORITY: readonly RequestPriority[] = [
    'CRITICAL',
    'HIGH',
    'LOW',
    'MEDIUM',
]


export const REQUEST_CATEGORY: readonly RequestCategory[] = [
    'ACCESS',
    'BUG',
    'FEATURE',
    'INFRA',
    'SUPPORT'
]