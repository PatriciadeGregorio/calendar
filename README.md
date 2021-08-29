# Calendar

Para abordar el problema de la carga, he usado una librería de una tabla que tiene scroll virtual.
De ese modo, solo se renderizan en el DOM un determinado numero de trabajadores. Conforme vayas haciendo el scroll, esos trabajadores se irán convirtiendo en otros nuevos, pero de esta forma solucionaríamos el problema de tener 6000 usuarios cargados en el DOM.

Me hubiera gustado probar alguna libreria más, para hacer una comparativa de tiempos, ya que al ser 6000 clientes con 365 columnas, el tiempo de carga aún con la libreria sigue siendo alto.