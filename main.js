let list = [0, 6, 12, 5, -3, 52, 14, 55, 55, 1, -25, 42, -5, -1]


function insertionSort(liste) {
    let newList = []
    for (let elem of liste) {
        let i = 0;
        while (i < newList.length && elem > newList[i]) {
            i++
        }
        newList.splice(i, 0, elem)
    }
    return newList
}

function swap(liste, ind1, ind2) {
    let temp = liste[ind1]
    liste[ind1] = liste[ind2]
    liste[ind2] = temp
}

function selectionSort(liste) {
    for (let i = 0; i < liste.length; i++) {
        let temp
        for (let j = i; j < liste.length; j++) {
            if (temp === undefined || liste[j] < liste[temp]) {
                temp = j
            }
        }
        swap(liste, i, temp)
    }
    return liste
}

// function tri_bulle(liste) {                        ////////  Ne fonctionne pas enocre
//     let passage = 0
//     let permut = true
//     while (permut) {
//         permut = false
//         for (let i = 0; i === liste.length - 1; i++) {
//             if (T[i] > T[i + 1]) {
//                 swap(liste, i, i + 1)
//             }
//             permut = true
//         }
//         passage++
//     }
//     return liste
// }


console.log(/*/insérer fonction de tri/*/)