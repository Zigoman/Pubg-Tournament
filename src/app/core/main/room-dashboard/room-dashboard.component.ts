import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import { IRoom } from '../../../shared/interfaces/store.interface';

@Component({
  selector: 'pubg-room-dashboard',
  templateUrl: './room-dashboard.component.html',
  styleUrls: ['./room-dashboard.component.scss']
})
export class RoomDashboardComponent implements OnInit {
  public roomInfo: IRoom;

  public config: CountdownConfig;

  private readonly now: moment.Moment;

  public bgURL: string;

  public lessThenDay: boolean;

  @ViewChild(CountdownComponent) private countdown: CountdownComponent | undefined;

  constructor() {
    this.roomInfo = {
      startAt: moment('2020-07-01 21:30:00'),
      number: 58424,
      password: 12345,
      mapName: 'Miramar',
      roomId: 1,
      teams: [
        {
          teamNumber: 1,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 2,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 3,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 4,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 5,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 6,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 7,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 8,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 9,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 10,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 11,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 12,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 13,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 14,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 15,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 16,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 17,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 18,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 19,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 20,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 21,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 22,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 23,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 24,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        },
        {
          teamNumber: 25,
          teamSquadID: 34567,
          squadLogo: 'balbal',
          squadName: 'Killers',
          squadActivePlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ],
          squadSubPlayers: [
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            },
            {
              fullName: 'nir zigdon',
              isSquadLeader: true,
              pubgID: '111111',
              pubgName: 'killerMan',
              facebookURL: 'https://www.facebook.com/NirZigdon'
            }
          ]
        }
      ]
    };
    this.bgURL = this.roomInfo ? `../assets/images/${this.roomInfo.mapName.toLowerCase()}.jpg` : '';
    this.bgURL = '';
    this.now = moment();
    this.lessThenDay = false;
    this.config = {};
    this.countdown = undefined;
  }

  ngOnInit(): void {
    const hoursInDay = 24;
    if (this.roomInfo) {
      this.lessThenDay = moment(this.roomInfo.startAt).diff(this.now, 'hours') < hoursInDay;
      if (this.lessThenDay) {
        this.config = {
          leftTime: moment(this.roomInfo.startAt).diff(this.now, 'seconds')
        };
      }
    }
  }
}
