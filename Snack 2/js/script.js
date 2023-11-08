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

for (let i = 0; i < footballTeams.length; i++) {
  const curTeam = footballTeams[i];
  curTeam.falliSubiti = Math.floor(Math.random() * 100);
  curTeam.puntiFatti = Math.floor(Math.random() * 100);
  
  console.log(curTeam.falliSubiti, curTeam.puntiFatti);
}

