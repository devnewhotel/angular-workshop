import { Component, OnInit } from '@angular/core';
import * as portugueseTeam from '../../../../assets/json/portuguese-national-football-team.json';

@Component({
  selector: 'smart-portugal-male',
  templateUrl: './portugal-male.component.html',
  styleUrls: ['./portugal-male.component.scss']
})
export class PortugalMaleComponent implements OnInit {
  ptTeam: any[];
  jogadores: any[];
  treinadores: any[];

  guardaredes: any[];
  defesas: any[];
  medios: any[];
  avancados: any[];

  constructor() { }

  ngOnInit() {
    this.ptTeam = (portugueseTeam as any).default;
    this.jogadores = this.ptTeam.filter(p => p.function === "player").map(p => { p.expanded = false; return p; });
    
    this.treinadores = this.ptTeam.filter(p => p.function === "coach").map(p => { p.expanded = false; return p; });

    this.guardaredes = this.jogadores.filter(p => p.position === "Guarda-redes").map(p => { p.expanded = false; return p; });
    this.defesas = this.jogadores.filter(p => p.position === "Defesa").map(p => { p.expanded = false; return p; });
    this.medios = this.jogadores.filter(p => p.position === "Médio").map(p => { p.expanded = false; return p; });
    this.avancados = this.jogadores.filter(p => p.position === "Avançado").map(p => { p.expanded = false; return p; });
  }

  onClickPlayer(playerId: number, position: string) {
    switch(position) {
      case "guardaredes": this.guardaredes.find(p => p.id === playerId).expanded = !this.guardaredes.find(p => p.id === playerId).expanded;
      case "defesa": this.defesas.find(p => p.id === playerId).expanded = !this.defesas.find(p => p.id === playerId).expanded;
      case "medio": this.medios.find(p => p.id === playerId).expanded = !this.medios.find(p => p.id === playerId).expanded;
      case "avancado": this.avancados.find(p => p.id === playerId).expanded = !this.avancados.find(p => p.id === playerId).expanded;
    }
  }
}