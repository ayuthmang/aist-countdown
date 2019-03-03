new Vue({
    el: '#app',
    data: {
        endTime: moment("2019-03-19", "YYYY-MM-DD HH:mm"),
        currentTime: moment(),
    },
    computed: {
        remainingTime: function() {
            const remainingTime = moment.duration(this.endTime.diff(this.currentTime));

            let days = parseInt(remainingTime.asDays()).toFixed(0);
            let hours = parseInt(remainingTime.asHours()).toFixed(0) % 24;
            let minutes = parseInt(remainingTime.asMinutes()).toFixed(0) % 60;
            let seconds = parseInt(remainingTime.asSeconds()).toFixed(0) % 60;
            
            return `
                ${days} days
                ${hours} hours
                ${minutes} minutes
                ${seconds} seconds
            `;
        }
    },
    created: function() {
        setInterval(() => {
            this.currentTime = moment();
        }, 1000)
    },
})
