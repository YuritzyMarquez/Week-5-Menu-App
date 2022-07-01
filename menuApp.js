class Character {
    constructor (name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} is a {this.position}.`; 
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.teamChampions = [];
    }

    addChampion(champion) {
        if (champion instanceof Character) {
            this.teamChampions.push(champion);
        }else {
            throw new Error (`You can only add League of Legends champions. Entered character is not a champion: ${champion}`);
        }
    }

    describe() {
        return `${this.name} has ${this.teamChampions.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.selectChampion();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.viewComp();
                    break;
                default:
                     selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('See Ya Nerd!');
    }
    
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create team
            2) select champion
            3) delete team
            4) view comp
        `);
    }
    
    showTeamMenuOptions(teamInfo) {
        return prompt(`
            0) back
            1) create player
            2) delete player
            -----------------------
            ${teamInfo}
        `);
    }

    displayCom() {
        let compString = '';
        for (let i = 0; i < this.teams.length; i++) {
            compString += i + ')' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter your Clash of Clans name:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt('Enter the Clan name of the team you wish to see:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.teamChampions.length; i++) {
                description += i + ')' +this.selectedTeam.teamChampions[i].name 
                 + '-' + this.selectedTeam.teamChampions[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }

    deleteTeam() {
        let index = prompt('Enter the name of the champion that you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer(){
        let name = prompt('Enter the Champion name:');
        let position = prompt('Enter the Champion role:');
        this.selectedTeam.teamChampions.push(new this.createPlayer(name, position));
    }

    deletePlayer () {
        let index = prompt('Enter the name of the Champion that you wish to delete:');
        if (index > -1 && index < this.selectedTeam.teamChampions.length) {
            this.selectedTeam.teamChampions.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
