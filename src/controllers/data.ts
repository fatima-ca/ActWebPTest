import { dataService } from "../db/data";

class DataController {
    
    async getData(){
        const data = await dataService.getData();
        return data;
    }

    /*
    async getMin(req, res) {
        const data = await dataService.getData();
        const maxNum = Math.max(...data);
        return maxNum;
    }

    async getMax(req, res) {
        const data = await dataService.getData();
        const minNum = Math.min(...data);
        return minNum;
    }

    async getPrimQuartile(req, res) {
        
    }
    */
    /*
    async PrimerCuartil() {
    const allTweets = await tweetService.getAll();

    if (allTweets.length === 0) {
        throw new Error("El arreglo está vacío");
    }

    // Paso 1: ordenar los números
    const sorted = allTweets.slice().sort((a, b) => a - b);

    // Paso 2: calcular la posición del cuartil 1
    const pos = (sorted.length - 1) * 0.25;
    const lower = Math.floor(pos);
    const upper = Math.ceil(pos);

    // Paso 3: interpolar si no es entero
    const q1 = lower === upper
        ? sorted[lower]
        : sorted[lower] + (sorted[upper] - sorted[lower]) * (pos - lower);

    return q1;
}

    */
    /*
    public async getQuinQuartile(req, res) {
        
    }


    public async getOutliers(req, res) {
        
    }
    */
}

export default DataController;