new Vue({
    el: '#app',
    data: {
        endTime: moment("2019-03-19 10:00", "YYYY-MM-DD HH:mm"),
        currentTime: moment(),
    },
    computed: {
        remainingTime: function() {
            const remainingTime = moment.duration(this.endTime.diff(this.currentTime));

            const days = parseInt(remainingTime.asDays()).toFixed(0);
            const hours = parseInt(remainingTime.asHours()).toFixed(0) % 24;
            const minutes = parseInt(remainingTime.asMinutes()).toFixed(0) % 60;
            const seconds = parseInt(remainingTime.asSeconds()).toFixed(0) % 60;
            
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
