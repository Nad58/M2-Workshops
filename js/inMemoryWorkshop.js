let inMemoryWorkshop;

function init() {
    inMemoryWorkshop = [];
    return Promise.resolve();
}

function getWorkshopList() {
    return new Promise((resolve, ) => {
        resolve(inMemoryWorkshop)
    })
}

function getWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("name parameter is required"))
        }
        resolve(inMemoryWorkshop.find(workshop => workshop.name === workshop))
    })
}

function addWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            reject(new Error("Workshop name required"))
        }
        if (!description) {
            reject(new Error("Workshop description required"))
        }
        inMemoryWorkshop.push({
            name,
            description
        })
        resolve()
    })
}

function removeWorkshopByName(name) {
    return new Promise((resolve, reject) => {
        reject(new Error("Not implemented"))
    })
}

function updateWorkshop(name, description) {
    return new Promise((resolve, reject) => {
        if (!name) {
            return reject(new Error("Workshop name required"));
        }
        if (!description) {
            return reject(new Error("Workshop description required"));
        }

        // Vérifier si l'atelier existe
        getWorkshopByName(name)
        .then(workshop => {
            if (!workshop) {
                return reject(new Error("Workshop not found"));
            }

            // Mettre à jour l'atelier
            workshop.description = description;

            // Sauvegarder la mise à jour (en mémoire ou en base de données)
            resolve({ name, description });
        })
        .catch(err => reject(err));
    });
}


module.exports = {
    init,
    getWorkshopList,
    getWorkshopByName,
    addWorkshop,
    removeWorkshopByName,
    updateWorkshop
}