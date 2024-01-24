// Importaciones necesarias

const readLineSync = require('readline-sync');

const {mostrarListaEstudiantes} = require('./lista_estudiantes.js');

const registrarEstudiantes = () => {
    const cantidadEstudiates = readLineSync.question('Ingrese la cantidad de estudiantes a registrar: ');
    const estudiantes = [];

    for (let i = 0; i < cantidadEstudiates; i++) {
        const nombre = readLineSync.question(`Ingrese el nombre del estudiante ${i + 1}: `);
        const edad = readLineSync.question(`Ingrese la edad del estudiante ${nombre}: `);

        const estudiante = {
            nombre, 
            edad
        };;

        estudiantes.push(estudiante);
    }

    mostrarListaEstudiantes(estudiantes);
};

// Iniciar registro de estudiantes
registrarEstudiantes();