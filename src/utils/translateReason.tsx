//===========FUNCAO PARA TRADUZIR A REAÇAO==========//
function translateReason(reason:string){
    const translations: Record<string, string> = {
        ITEM_MISSING: "ITEM FALTANDO",
        FUNCTIONAL_DMG: "FUNCIONAL COM DANO",
        DAMAGED_OTHERS:"DEMAIS TIPOS DE DANO",
        NOT_RECEIPT: "NÃO RECEBI",
        CHANGE_MIND: "MUDEI DE IDEIA",
        WRONG_ITEM: "ITEM ERRADO",
        OUTER_DAMAGED_PACKAGE: "EMBALAGE DANIFICADA"   
    }

    return translations[reason.toUpperCase() || reason]
}

export  default translateReason;