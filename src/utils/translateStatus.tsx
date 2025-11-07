//=========FUNCAO PARA TRADUZIR O STATUS==========//
function translateStatus(status:string){
    const translations: Record<string, string> = {
        ACCEPTED: "Aceito",
        CANCELLED: "Cancelado",
        PROCESSING: "Processamento",
        REQUESTED: "Solicitada",
        COMPLETED: "Concluído",
        JUDGING: "Julgamento"
    };
    return translations[status.toUpperCase()] || status
}

export default translateStatus;