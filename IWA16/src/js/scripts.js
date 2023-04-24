const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

// Retrieve the athlete object from data based on the ID
const getAthleteById = (id) => data.response.data[id];

// Create a function to format time as hh:mm
const formatTime = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

// Create a function to create the HTML for an athlete
const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.reverse(); // Get the latest race by reversing the order of races and selecting the first element
  const { date, time: lapTimes } = latestRace;
  const fullName = `${firstName} ${surname}`;
  const totalMinutes = lapTimes.reduce((total, lapTime) => total + lapTime, 0);
  const totalRaces = races.length;

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = id;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const fullNameTerm = document.createElement('dt');
  fullNameTerm.textContent = 'Full name';
  list.appendChild(fullNameTerm);

  const fullNameDef = document.createElement('dd');
  fullNameDef.textContent = fullName;
  list.appendChild(fullNameDef);

  const totalRacesTerm = document.createElement('dt');
  totalRacesTerm.textContent = 'Total Races';
  list.appendChild(totalRacesTerm);
}
[NM372], [SV782] = data
document.querySelector(NM372).appendChild(createHtml(NM372));
document.querySelector(SV782).appendChild(createHtml(SV782));