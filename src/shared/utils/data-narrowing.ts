import { isUser } from '@/modules/users/guards/user.guard';
import { isFlowRequest } from '@/modules/requests/guards/request.guard';

export function describeUnknownData(value: unknown): string {
    if (isUser(value)) {
        return `Usuário: ${value.name} | Perfil: ${value.role}`;
    }

    if (isFlowRequest(value)) {
        return `Solicitação: ${value.title} | Status: ${value.status}`;
    }

    return 'Dado inválido';
}

export function filterValidUsers(values: unknown[]) {
    return values.filter(isUser);
}

export function filterValidFlowRequests(values: unknown[]) {
    return values.filter(isFlowRequest);
}

