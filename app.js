// All the items (teams)
const teams = [
    {
        id: 1,
        logo: 'https://i0.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/bra.png?fit=600%2C600&ssl=1',
        country: 'Brasil',
        cups: 9,
        group: 'A',
        desc: 'Tras 30 años disputando la copa fuera de su país, Brasil volvió a ser anfitriona del torneo en 2019. A pesar de la ausencia de uno de sus mayores referentes como lo es Neymar, logra coronarse campeón y obtener su noveno título en este competencia. La última vez que habían logrado esta hazaña fue en la Copa América 2007 disputada en Venezuela teniendo como protagonista a Robinho, máximo goleador de la competición con 6 goles. Con un plantel consolidado que mezcla juventud y experiencia, la “Canarinha” con Tite a la cabeza, irá por su mejor rendimiento con el objetivo de levantar la CONMEBOL Copa América 2021 y alcanzar su décimo trofeo en la competición.'
    },
    {
        id: 2,
        logo: 'https://i1.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/colombia-1.png?fit=600%2C600&ssl=1',
        country: 'Colombia',
        cups: 1,
        group: 'A',
        desc: 'Una generación de oro ha puesto a la Selección Colombia de nuevo en el radar del fútbol mundial, tras unas destacadas participaciones en los Campeonatos Mundial de la FIFA Brasil 2014 y Rusia 2018, el equipo cafetero buscará el título en la CONMEBOL Copa América, el mismo que ganó en el 2001.  Ahora 20 años después, de la mano de Reinaldo Rueda, la expectativa se encuentra en lograr vencer la CONMEBOL Copa América de nuevo como anfitrión.'
    },
    {
        id: 3,
        logo: 'https://i0.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/equador-2020.png?fit=600%2C600&ssl=1',
        country: 'Ecuador',
        cups: 0,
        group: 'A',
        desc: 'La Selección de Ecuador, de nuevo bajo el mando del entrenador colombiano Hernán Darío Gómez, buscará su primer título de la Copa América, torneo en el que su mejor participación fue en la edición de 1993, terminando en el cuarto puesto.'
    },
    {
        id: 4,
        logo: 'https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/peru.png?fit=1140%2C924&ssl=1',
        country: 'Perú',
        cups: 2,
        group: 'A',
        desc: 'Perú ha superado la fase de grupos en cada una de las últimas nueve participaciones en la CONMEBOL Copa América. El combinado rojiblanco sueña con volver a ganar el título del torneo, tras sus lejanas conquistas de 1939 y 1975. En la última edición de la copa en 2019, el equipo liderado por Ricardo Gareca estuvo a un paso de coronarse campeón, perdiendo la final ante Brasil.'
    },
    {
        id: 5,
        logo: 'https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/venezuela-1.png?fit=600%2C600&ssl=1',
        country: 'Venezuela',
        cups: 0,
        group: 'A',
        desc: '‘La Vinotinto’, apodada así por el color de su uniforme titular, muestra evolución en su fútbol a partir del año 2000, añadiendo técnica y organización. No es casualidad que, en el 2017, la Selección Venezuela Sub-20 haya terminado subcampeona en el Mundial de la categoría disputado en Corea del Sur.'
    },
    {
        id: 6,
        logo: 'https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/argentina-1.png?fit=600%2C600&ssl=1',
        country: 'Argentina',
        cups: 14,
        group: 'B',
        desc: 'Además de los 14 trofeos que han conseguido, los argentinos tienen marcas expresivas e históricas en el torneo. Son los mayores goleadores con un total de 462 tantos marcados y tienen la mayor goleada con un 12-0 contra Ecuador, en 1942. En toda la historia del torneo, tienen 122 victorias, más que cualquier otro equipo, y solo 33 derrotas, la mejor selección en este apartado. El país también fue sede de la competencia en nueve oportunidades.'
    },
    {
        id: 7,
        logo: 'https://i0.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/bolivia-1.png?fit=600%2C600&ssl=1',
        country: 'Bolivia',
        cups: 1,
        group: 'B',
        desc: 'La actuación más importante de la historia de “La Verde” en la CONMEBOL Copa América fue en el año 1963, cuando la competencia se disputó por primera vez en Bolivia y en ese entonces el torneo todavía era denominado Campeonato Sudamericano de Fútbol. Además del gran fútbol desplegado y teniendo como aliada a la altura de La Paz, la selección boliviana se impuso en el torneo, un acontecimiento que hizo vibrar los cimientos del país.'
    },
    {
        id: 8,
        logo: 'https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/chile-1.png?fit=600%2C600&ssl=1',
        country: 'Chile',
        cups: 2,
        group: 'B',
        desc: 'Conocida como “La Roja”, la selección chilena ha levantado el trofeo en las ediciones (Chile 2015 y Estados Unidos 2016). Estos son sus dos únicos títulos en la competencia.'
    },
    {
        id: 9,
        logo: 'https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/paraguai-1.png?fit=600%2C600&ssl=1',
        country: 'Paraguay',
        cups: 2,
        group: 'B',
        desc: 'La selección paraguaya es dos veces ganadora de la CONMEBOL Copa América. Levantó el trofeo del torneo en 1953 y 1979. Estos dos títulos, junto con la medalla de plata en los Juegos Olímpicos Atenas 2004, son los mayores logros del combinado guaraní.'
    },
    {
        id: 10,
        logo: 'https://i2.wp.com/copaamericacom.wpcomstaging.com/wp-content/uploads/uruguai-1.png?fit=600%2C600&ssl=1',
        country: 'Uruguay',
        cups: 15,
        group: 'B',
        desc: 'La Selección de Uruguay es la mayor vencedora de la Copa América: con 15 títulos. La Celeste es la primera ganadora del torneo, en 1916, y la última vez que levantó el trofeo de campeón fue en el 2011, en el torneo que se disputó en Argentina, venciendo a Paraguay en el partido final.'
    }
];



// Select the HTML 'select' element
const selectValue = document.querySelector('.filter-select');
// Select the container of items (teams)
const blockOfItems = document.getElementById('block-items');


// Show items
function displayItems(arr) {
    const allTeams = arr.map(function (team) {
        return `<article class="menu-item">
                    <img src="${team.logo}" alt="Logo de la selección de ${team.country}" class="image-team" />
                    <header class="title-item">
                        <h2 class="team-name">${team.country}</h2>
                        <span class="trophy-icon"><i class="fas fa-trophy"></i> ${team.cups}</span>
                    </header>
                    <p class="text-item">${team.desc}</p>
                </article>`;
    }).join(' ');

    blockOfItems.innerHTML = allTeams;
}

// Show categories into HTML 'select' element
function displayCategories() {
    const filters = teams.reduce((prev, current) => {
        if (!prev.includes(current.group)) {
            prev.push(current.group);
        }
        return prev;
    }, [])
        .sort((let1, let2) => let1 < let2 ? -1 : 1)
        .map(group => `<option class="select-item" value="${group}">Grupo ${group}</option>`);

    filters.unshift('<option class="select-item" value="0" disabled selected>Filtros</option>', '<option class="select-item" value="all">Todos</option>', '<option class="select-item" value="abc">Alfabético</option>', '<option class="select-item" value="cups">Copas</option>');

    selectValue.innerHTML = filters.join(' ');


    // Add an event 'onchange' to the select element
    selectValue.addEventListener('change', function (e) {
        const category = e.currentTarget.value;

        const filteredTeams = teams.filter(team => {
            return team.group === category;
        });

        const alphabeticOrder = [...teams].sort((c1, c2) => c1.country < c2.country ? -1 : 1);


        if (category === 'all') {
            displayItems(teams);
        } else if (category === 'abc') {
            displayItems(alphabeticOrder);
        } else if (category === 'cups') {
            displayItems(alphabeticOrder.sort((cop1, cop2) => cop2.cups - cop1.cups));
        } else {
            displayItems(filteredTeams);
        }
    });
}

// Execute the display functions when the DOM is already loaded
window.addEventListener('DOMContentLoaded', function () {
    displayCategories();
    displayItems(teams);
})