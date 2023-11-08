const footballTeams = [
  {
    nome: "Milan",
    falliSubiti: 0,
    puntiFatti: 0,
  },
  {
    nome: "Roma",
    falliSubiti: 0,
    puntiFatti: 0,
  },
  {
    nome: "Inter",
    falliSubiti: 0,
    puntiFatti: 0,
  },
];

console.log(footballTeams);

const newTeams = [];

for (let i = 0; i < footballTeams.length; i++) {
  const curTeam = footballTeams[i];
  curTeam.falliSubiti = Math.floor(Math.random() * 100);
  curTeam.puntiFatti = Math.floor(Math.random() * 100);

//   console.log(curTeam.falliSubiti, curTeam.puntiFatti);

  const nome = curTeam.nome;
  const falli = curTeam.falliSubiti;
  newTeams.push(nome, falli);

  console.log(nome, falli);
}

console.log(newTeams);
