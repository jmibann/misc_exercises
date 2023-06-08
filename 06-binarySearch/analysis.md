O(n) del logaritmo cual es? - Analisis Temporal

Si nos detenemos a pensar un poco, encontramos que al hacer la primer comparacion, y en caso de no encontrar el elemento, compara y descarta la mitad del arreglo original. Entonces tenemos que: 

1 comparacion --> 1 elemento a comparar --> Longitud del nuevo arreglo se reduce a N/2
2 comparaciones --> 2 elementos a comparar -->  Longitud del nuevo arreglo se reduce a N/4
3 comparaciones --> 4 elementos a comparar -->  Longitud del nuevo arreglo reduce a N/8
...
X comparaciones maximas --> 2^(X - 1) elementos a comparar -->  Longitud del nuevo arreglo: 1

Eventualmente el arreglo no se podrá subdividir mas, llegando al punto que el tamaño se reduce a 1, expresandolo matematicamente nos queda:

N cantidad total del arreglo original

 N/(2^X) = 1 

 N = 1 * 2^X
 log2(N) = log2(2^X)
 log2(N) = X * log2(2)

 X = log2(N)
