# Calendar

Para abordar el problema de la carga, he usado una librería de una tabla que tiene scroll virtual.
De ese modo, solo se renderizan en el DOM un determinado numero de trabajadores. Conforme vayas haciendo el scroll, esos trabajadores se irán convirtiendo en otros nuevos, pero de esta forma solucionaríamos el problema de tener 6000 usuarios cargados en el DOM.

Me hubiera gustado probar alguna libreria más, para hacer una comparativa de tiempos, ya que al ser 6000 clientes con 365 columnas, al añadir las clases que hacen que salgan los estilos de "fin de semana", "hoy" o "evento", el tiempo de carga se ha visto muy resentido hasta llegar a hacer que no se cargue con 6000 personas.
