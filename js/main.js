const app = Vue.createApp({
    data() {
        return {
            title: 'Contador App - Vue',
            count: 0,
        }
    },
    methods: {
        modCount(intruccion = "add") {
            if (intruccion === "dis") this.count = - 1;
            else this.count += 1;

        }
    },
})