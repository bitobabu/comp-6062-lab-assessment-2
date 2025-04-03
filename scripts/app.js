const app =Vue.createApp({
    data(){
        return{
        myFullname:'Bito Babu',
        pressureMonitorValue :65,
        pressureMonitorLevels: [
            { id: 'danger-low', color: 'danger', label: 'Danger - Low!', min: 0, max:10 },
            { id: 'warn-low', color: 'warning', label: 'Warning - Low', min: 11, max:30 },
            { id: 'safe', color: 'safe', label: 'Safe', min: 31, max: 70 },
            { id: 'warn-high', color: 'warning', label: 'Warning - High', min: 71, max: 90 },
            { id: 'danger-high', color: 'danger', label: 'Danger - High', min: 91, max: 100 }
            ]
            

        };
    },

    methods:{
        isActive(pressurelevel){
            return this.pressureMonitorValue>=pressurelevel.min && this.pressureMonitorValue<=pressurelevel.max
        }
    }
});

app.mount('#app')