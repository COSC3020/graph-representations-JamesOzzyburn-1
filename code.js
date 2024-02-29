function convertToAdjList(adjMatrix) {
    var adjList = [];
    /*
    The outer for loop interates through the rows of the adjacency matrix and the inner for loop iterates 
    through the columns of the adjacency matrix and checks if there is a connect and adds it to the adjacency list if there is
    */
    for(var r = 0; r < adjMatrix.length; r++) { 
        var tmpRow = [];
        for(var c = 0; c < adjMatrix.length; c++) {
            if(adjMatrix[r][c] > 0) { tmpRow.push(c); }
        }
        adjList[r] = tmpRow;
    }
    return adjList
}
