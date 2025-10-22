  const fetchRmas = async () => {
    try {
        const response = await fetch("https://rmabackend-zuvt.onrender.com/rma");
    if (!response.ok) {
        throw new Error("Erro ao buscar RMAs");
    }
    const result = await response.json();
    // O backend retorna { returns: [ ... ] }
    return result.returns
    } catch (error) 
    {
    console.error("Erro ao buscar dados:", error);
    }
};


export default fetchRmas;
   