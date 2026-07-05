export type RequestStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE' | 'CANCELED';

export type RequestPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type RequestCategory = 'ACCESS' | 'BUG' | 'FEATURE' | 'SUPPORT' | 'INFRA';


export type FlowRequest = {
    id: string;
    title: string;
    description: string;
    category: RequestCategory;
    priority: RequestPriority;
    status: RequestStatus;
    requesterId: string;
    assignedToId?: string;
    createdAt: Date;
    updatedAt?: Date;
    finishedAt?: Date;
    canceledAt?: Date;
};

//criar solicitação

export type CreateRequestInput = {
    title: string;
    description: string;
    category: RequestCategory;
    priority: RequestPriority;
    requesterId: string;
}

//atribuição responsavel

export type AssignRequestInput = {
    requestId: string;
    assignedToId: string;
}

// Alteração de status
export type ChangeRequestStatusInput = {
  requestId: string;
  status: RequestStatus;
};
