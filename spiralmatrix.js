function spiralmatrix(n){
    let matrix=Array.from({length:n},()=>Array(n).fill(0));
    let matrix_top=0, matrix_bottom=n-1;
    let matrix_left=0, matrix_right=n-1;
    let val=1;
    while(matrix_top<=matrix_bottom && matrix_left<=matrix_right){
        for(let j=matrix_left;j<=matrix_right;j++){
            matrix[matrix_top][j]=val++;
        }
        matrix_top++;
        for(let i= matrix_top;i<=matrix_bottom;i++)
        {
            matrix[i][matrix_right]=val++;
        }
        matrix_right--;
        if(matrix_top<=matrix_bottom){
            for(let j= matrix_right;j>=matrix_left;j--){
                matrix[matrix_bottom][j]=val++;
            }
            matrix_bottom--;
        }
        if(matrix_left<=matrix_right){
            for(let i=matrix_bottom;i>=matrix_top;i--){
                matrix[i][matrix_left]=val++;
            }
            matrix_left++;
        }
        

    }
    return matrix;
}
console .log(spiralmatrix(3));