export async function getcharacter() {
    try {
        const response = await fetch ();

        if(!response.ok){
            throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        return data.results
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}