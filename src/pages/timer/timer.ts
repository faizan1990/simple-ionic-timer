import {NavController, Platform} from 'ionic-angular';
import {Component} from "@angular/core";

@Component({
    selector: 'my-page',
    templateUrl: 'timer.html'
})
export class TimerPage {

    public currentTime = 50;
    public timer;

    constructor(public navCtrl: NavController, public platform: Platform) {

        /**
         * Start timer of (default) 50 seconds when platform is ready
         */
        this.platform.ready().then(() => {
            // Timer refreshes every second
            setInterval(() => {
                if (this.currentTime >= 0) {
                    this.timer = 'Time left: ' + this.currentTime-- + ' seconds';
                } else {
                    // Reset timer or perform some other logic
                    resetTimer();
                }
            }, 1000);
        });

        /**
         * Reset timer function / Can be replaced by some other logic
         */
        function resetTimer() {
            this.currentTime = 50;
        }

    }
}
