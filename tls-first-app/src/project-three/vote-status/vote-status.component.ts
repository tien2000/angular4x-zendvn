import { Component } from '@angular/core';

@Component({
    moduleId : module.id,
    selector: 'tls-vote-status',
    templateUrl: './vote-status.component.html'
})

export class VoteStatusComponent {
    title       : string        = "";
    txtHeader   : string        = "";
    txtContent  : string        = "";
    voteStatus  : string        = "";
    arrVote     : string[]      = [];
    showVote    : boolean       = false;
    likeColor   : string        = "";

    constructor(){
        this.title              = "Exercise 1 - Vote Status";
        this.txtHeader          = "Vote Status";
        this.txtContent         = "Angular is running in the development mode. Call enableProdMode() to enable the production mode.";
        this.voteStatus         = "Like";
        this.arrVote            = ["Like", "Love", "Haha", "Sad", "Angry"];
        this.likeColor          ="danger";
    }

    changeVoteStatus(val : string) {
        this.voteStatus = val;
        this.showBtnVote(false);
        this.likeColor  = "primary";
    }

    showBtnVote(val : boolean){
        this.showVote = val;
    }

    changeStatusColor(){
        this.likeColor = "primary";
    }
}