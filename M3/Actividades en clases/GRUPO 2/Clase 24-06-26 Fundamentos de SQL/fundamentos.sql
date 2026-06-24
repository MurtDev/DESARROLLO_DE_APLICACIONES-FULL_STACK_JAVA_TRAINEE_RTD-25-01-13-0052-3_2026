#================= Continuación de SELECT ==========
#Mayor o igual
SELECT * FROM estudiantes
WHERE edad >= 28;

#Menor o igual
SELECT * FROM estudiantes
WHERE edad <= 28;

#Distinto
SELECT * FROM estudiantes
WHERE nombre != 'Ana';

#Otra alternativa para distinto
SELECT * FROM estudiantes
WHERE nombre <> 'Ana';

#BETWEEN --> Muy usado para rangos
SELECT * FROM estudiantes
WHERE edad BETWEEN 24 AND 34;

#Uso del IN 
SELECT * FROM estudiantes
WHERE id IN (1, 5, 7, 8);

#Uso de IS NULL y IS NOT NULL

#Profesores sin curso
SELECT * FROM profesores
WHERE curso_id IS NULL;

#Profesores que tienen cursos
SELECT * FROM profesores
WHERE curso_id IS NOT NULL;

#=========================== Funciones de agregación ==============
#COUNT --> Cuenta de la cantidad de registros
SELECT COUNT(*) AS 'Cantidad de Estudiantes'
FROM estudiantes;

#MAX --> Obtiene el valor más grande
SELECT MAX(edad) AS 'Mayor edad de Estudiantes'
FROM estudiantes;

#MIN --> Obtiene el valor más pequeño 
SELECT MIN(edad) AS 'Menor edad de Estudiantes'
FROM estudiantes;

#AVG --> Calcula el promedio
SELECT AVG(edad) AS 'Promedio edad de Estudiantes'
FROM estudiantes;

#SUM --> Suma todos los valores
SELECT SUM(edad) AS 'Promedio edad de Estudiantes'
FROM estudiantes;

#¿Qué pasa si quiero saber cuántos estudiantes hay por cada curso?
#Podemos agrupar los estudiantes por curso usando GROUP BY

SELECT curso_id, COUNT(*) AS cantidad_estudiantes
FROM estudiantes
GROUP BY curso_id;

#Recuperar con los nombres de los cursos
SELECT es.curso_id, cu.nombre AS nombre_curso, COUNT(*) AS cantidad_estudiantes
FROM estudiantes es
INNER JOIN cursos cu
ON es.curso_id = cu.id
GROUP BY es.curso_id;

#AHORA CON ORDEN DESCENDEDNTE
SELECT es.curso_id, cu.nombre AS nombre_curso, COUNT(*) AS cantidad_estudiantes
FROM estudiantes es
INNER JOIN cursos cu
ON es.curso_id = cu.id
GROUP BY es.curso_id
ORDER BY COUNT(*) ASC;
